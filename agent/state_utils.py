from gitingest import ingest_async
from typing import Dict, List
from agent.states import MigrateState
async def update_migrate_state_app_context(state: MigrateState):
    _, app_tree, app_context = await ingest_async(state['app_dir'])
    state.update({
        'app_tree': app_tree,
        'app_context': app_context,
    })
    return state

def verbose_criteria(criteria: List[Dict]) -> str:
    """
    Serialize the all_criteria list into a verbose, human-readable format.

    Args:
        criteria (list): A list of dictionaries containing step_id, plan_step, files, and criteria.

    Returns:
        str: A verbose, formatted string representation of the criteria.
    """
    lines = []
    lines.append("=== CHECKPOINT EVALUATION CRITERIA ===")
    for idx, item in enumerate(criteria, start=1):
        lines.append(f"\n--- Step {idx} ---")
        lines.append(f"Step ID: {item['step_id']}")
        lines.append("PlanStep Details:")
        lines.append(item['plan_step'])  # Already serialized JSON
        if item['files']:
            lines.append("\nFiles Involved:")
            for file in item['files']:
                lines.append(f"- {file}")
        if item['criteria']:
            lines.append("\nAcceptance Criteria:")
            for criterion in item['criteria']:
                lines.append(f"- {criterion}")
    lines.append("\n=====================================")
    return "\n".join(lines)

def verbose_migration_state(state: dict) -> str:
    """
    Serialize migration state into a verbose, readable format for prompt injection.
    Includes section headers, file trees, and CSS mappings.
    """
    lines = []
    lines.append(f"=== MIGRATION CONTEXT ===")
    lines.append(f"SOURCE DIR: {state.get('source_dir','')}")
    lines.append(f"APP DIR: {state.get('app_dir','')}")
    lines.append("\n--- SOURCE TREE ---")
    lines.append(state.get('source_tree','').strip())
    lines.append("\n--- APP TREE ---")
    lines.append(state.get('app_tree','').strip())
    lines.append("\n--- SOURCE CONTEXT ---")
    lines.append(state.get('source_context','').strip())  # Truncate if huge
    lines.append("\n--- APP CONTEXT ---")
    lines.append(state.get('app_context','').strip())
    lines.append("\n--- CSS CLASS MAPPING ---")
    css_state = state.get('css_state', {})
    for k, v in css_state.items():
        lines.append(f"{k}: {v}")
    lines.append("\n=========================")
    return "\n".join(lines)
