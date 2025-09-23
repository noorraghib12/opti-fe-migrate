# import docker
from typing_extensions import TypedDict
from typing import Annotated, Literal

from langgraph.checkpoint.memory import MemorySaver
from langgraph.graph import END, START, StateGraph
from langgraph.types import Command,Send
from langchain_core.prompts import ChatPromptTemplate
from langgraph.prebuilt import create_react_agent
from langchain.chat_models import init_chat_model 
from langchain_core.rate_limiters import InMemoryRateLimiter
from dotenv import load_dotenv

from agent.tools import execute_file_mgt_tools, eval_tools, web_search, check_container_run, REPO_ROOT
from agent.states import Plan, PlanExecute, DoneSchema, RevisedPlanSteps
from agent.css_utilities import get_css_classes_from_dir
from langgraph.checkpoint.memory import InMemorySaver
from agent.state_utils import update_migrate_state_app_context, verbose_criteria, verbose_migration_state
from agent.prompts import revised_steps_prompt, final_eval_prompt, eval_prompt, migration_planner_prompt, executor_agent_prompt, evaluator_agent_prompt
import os
load_dotenv()

checkpointer = InMemorySaver()

rate_limiter = InMemoryRateLimiter(
    requests_per_second=8,
    check_every_n_seconds=0.1,  
    max_bucket_size=10,  
)

llm = init_chat_model("openai:gpt-5", temperature=0, rate_limiter=rate_limiter)



####################################################################

async def get_context(state: PlanExecute):
    """
    Extracts CSS classes from the app directory and updates the migration state.
    Args:
        state (PlanExecute): The current migration state object.
    Returns:
        dict: Updated migrate_state with CSS classes.
    """
    state = state.migrate_state
    # Get CSS classes from the app directory
    state = await get_css_classes_from_dir(state)
    return {'migrate_state': state}

async def migration_planner(state: PlanExecute):
    """
    Uses the LLM to generate a migration plan for the given state.
    Args:
        state (PlanExecute): The current migration state object.
    Returns:
        dict: Contains the migration plan, first checkpoint, and migrate_state.
    """
    state = state.migrate_state
    # Generate migration plan using LLM and prompt
    migration_planner = migration_planner_prompt | llm.with_structured_output(Plan)
    plan = await migration_planner.ainvoke({
        'context': verbose_migration_state(state),
        'source_dir': state['source_dir'],
        'app_dir': state['app_dir']
    })
    return {'plan': plan, 'current_checkpoint': plan.checkpoints[0], 'migrate_state': state}

async def executor_node(state: PlanExecute) -> Command[Literal['checkpoint_eval', '__end__']]:
    """
    Executes migration steps for the current checkpoint using the agent executor.
    Args:
        state (PlanExecute): The current migration state object.
    Returns:
        Command: Next node to evaluate checkpoint or end.
    """
    print(f"Starting executor_node for checkpoint: {state.current_checkpoint}")
    current_cp = state.current_checkpoint
    if not current_cp:
        # If no checkpoint, end the workflow
        return Command(goto=END, update=state)
    # Find completed step IDs for this checkpoint
    completed_ids = {ps.get("step_id") for ps in state.past_steps if ps.get("checkpoint") == current_cp}
    # Find steps to run for this checkpoint
    steps_to_run = [step for step in state.plan.steps if step.checkpoint == current_cp and step.id not in completed_ids]
    if steps_to_run:
        print(f"Executing {len(steps_to_run)} steps for checkpoint: {current_cp}")
        # Create agent executor for migration steps
        agent_executor = create_react_agent(
            llm,
            execute_file_mgt_tools + [web_search],
            prompt=executor_agent_prompt
        )
        for step in steps_to_run:
            print(f"Executing step: {step.id} - {step.title}")
            # Build prompt for each step
            task_prompt = (
                f"Checkpoint: {current_cp}\n"
                f"PlanStep:\n{step.verbose_plan_step()}\n"
                f"MigrateState Context:\n{verbose_migration_state(state.migrate_state)}"
            )
            agent_response = await agent_executor.ainvoke({"messages": [("user", task_prompt)]})
            # Record result of step
            state.past_steps.append({
                "step_id": step.id,
                "checkpoint": current_cp,
                "result": agent_response["messages"][-1].content
            })
        state.response = f"Executed all steps for checkpoint '{current_cp}'. Ready for evaluation."
    else:
        print(f"No steps to execute for checkpoint: {current_cp}")
        state.response = f"Checkpoint '{current_cp}' steps already executed. Ready for evaluation."
    return Command(goto='checkpoint_eval', update=state)


async def checkpoint_evaluator_node(state: PlanExecute):
    """
    Evaluates the results of executed steps for the current checkpoint.
    Decides if checkpoint is complete or needs revised steps.
    Args:
        state (PlanExecute): The current migration state object.
    Returns:
        PlanExecute: Updated state with evaluation results.
    """
    print(f"Evaluating checkpoint: {state.current_checkpoint}")
    current_cp = state.current_checkpoint
    # Gather all plan steps for this checkpoint
    cp_steps = [step for step in state.plan.steps if step.checkpoint == current_cp]
    all_criteria = []
    for step in cp_steps:
        all_criteria.append({
            "step_id": step.id,
            "plan_step": step.model_dump_json(indent=2),
            "files": step.files_involved,
            "criteria": step.acceptance_criteria
        })
    # Run container check for app_dir
    docker_output = check_container_run(state.migrate_state['app_dir'])
    # Create agent evaluator for checkpoint
    agent_evaluator = create_react_agent(
        llm,
        eval_tools,
        prompt=evaluator_agent_prompt
    )
    # Update migrate_state with app context
    state.migrate_state = await update_migrate_state_app_context(state.migrate_state)
    # Build evaluation query
    eval_query = eval_prompt.invoke({
        "current_cp": current_cp,
        "plan_steps": verbose_criteria(all_criteria),
        "migration_state_context": verbose_migration_state(state.migrate_state),
        "docker_execution_results": docker_output
    })
    # Get agent response for evaluation
    agent_response = await agent_evaluator.ainvoke(eval_query)
    print(f"Agent evaluator response: {agent_response['messages'][-1].content}")
    # Prepare dict for final evaluation
    eval_placeholder_dict = {
        "current_cp": current_cp,
        "evaluation_response": agent_response['messages'][-1].content,
        "plan_steps": "\n".join([c["plan_step"] for c in all_criteria]),
        "migration_state_context": verbose_migration_state(state.migrate_state)
    }
    final_eval_query = final_eval_prompt.invoke(eval_placeholder_dict)
    done_chain = llm.with_structured_output(DoneSchema)
    revised_chain = llm.with_structured_output(RevisedPlanSteps)
    try:
        done_result = await done_chain.ainvoke(final_eval_query)
        if done_result.done:
            print(f"Checkpoint '{current_cp}' complete. Moving to next checkpoint.")
            cp_idx = state.plan.checkpoints.index(current_cp)
            if cp_idx + 1 < len(state.plan.checkpoints):
                state.current_checkpoint = state.plan.checkpoints[cp_idx + 1]
            else:
                state.current_checkpoint = None
            state.response = f"Checkpoint '{current_cp}' complete. Moving to '{state.current_checkpoint}'."
            return state
    except Exception:
        pass
    # If not done, get revised steps from agent
    revised_plan_query = revised_steps_prompt.invoke(eval_placeholder_dict)
    revised_result = await revised_chain.ainvoke(revised_plan_query)
    print(f"Revised steps added for checkpoint '{current_cp}': {len(revised_result.steps)}")
    past_steps = [ps for ps in state.past_steps if ps.get("checkpoint") == current_cp]
    # If too many changes, move to next checkpoint and leave to human FE
    if len(past_steps) > int(os.environ['MAX_STEP_PER_CHECKPOINT']):
        if cp_idx + 1 < len(state.plan.checkpoints):
            state.current_checkpoint = state.plan.checkpoints[cp_idx + 1]
        else:
            state.current_checkpoint = None
        state.response = f"Too many changes in checkpoint '{current_cp}'. Leaving it to Human FE. Moving to '{state.current_checkpoint if state.current_checkpoint else 'END'}'."
    else:
        # Otherwise, add revised steps and continue
        state.plan.steps.extend(revised_result.steps)
        state.response = f"Checkpoint '{current_cp}' not complete. Revised steps added."
    return state

graph = StateGraph(PlanExecute)
graph.add_node("get_context_css", get_context)
graph.add_node("task_executor", executor_node)
graph.add_node('migration_planner', migration_planner)
graph.add_node("checkpoint_eval", checkpoint_evaluator_node)
graph.add_edge(START, "get_context_css")
graph.add_edge("get_context_css", "migration_planner")
graph.add_edge("migration_planner","task_executor")
graph.add_edge("checkpoint_eval", "task_executor")
graph = graph.compile(checkpointer = checkpointer)