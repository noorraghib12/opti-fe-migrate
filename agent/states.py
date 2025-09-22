from typing_extensions import TypedDict
from typing import Annotated
from pydantic import BaseModel, Field
from typing import List, Optional

def update_css_map(a:dict = None,b:dict = None):
    if not b:
        return a
    elif not a:
        return b
    else:
        a.update(b)
        return a

class CSSState(TypedDict):
    class_name: str
    rules: str

class MigrateState(TypedDict):
    source_dir: str
    app_dir: str
    source_tree: str 
    app_tree: str
    source_context: str
    app_context: str
    css_state: dict

class PlanStep(BaseModel):
    id: str = Field(..., description="Unique step identifier")
    checkpoint: str = Field(..., description="Checkpoint group for this step")
    title: str = Field(..., description="Short summary of the step")
    description: str = Field(..., description="Detailed instructions for the step")
    files_involved: List[str] = Field(default_factory=list, description="Files to read/write/transform")
    dependencies: List[str] = Field(default_factory=list, description="IDs of steps that must be completed first")
    acceptance_criteria: List[str] = Field(default_factory=list, description="How to verify this step is complete")
    notes: Optional[str] = Field(None, description="Additional notes or constraints")

    def verbose_plan_step(step) -> str:
        """
        Serialize a PlanStep instance into a verbose, readable format for a coding agent.
        Includes detailed instructions, dependencies, and acceptance criteria.
        """
        lines = []
        lines.append("=== PLAN STEP DETAILS ===")
        lines.append(f"Step ID: {step.id}")
        lines.append(f"Checkpoint: {step.checkpoint}")
        lines.append(f"Title: {step.title}")
        lines.append(f"Description: {step.description}")
        
        if step.files_involved:
            lines.append("\n--- FILES INVOLVED ---")
            for file in step.files_involved:
                lines.append(f"- {file}")
        
        if step.dependencies:
            lines.append("\n--- DEPENDENCIES ---")
            lines.append("This step depends on the completion of the following steps:")
            for dependency in step.dependencies:
                lines.append(f"- Step ID: {dependency}")
        
        if step.acceptance_criteria:
            lines.append("\n--- ACCEPTANCE CRITERIA ---")
            lines.append("To consider this step complete, ensure the following criteria are met:")
            for criterion in step.acceptance_criteria:
                lines.append(f"- {criterion}")
        
        if step.notes:
            lines.append("\n--- ADDITIONAL NOTES ---")
            lines.append(step.notes)
        
        lines.append("\n=========================")
        return "\n".join(lines)



class Plan(BaseModel):
    checkpoints: List[str] = Field(..., description="Ordered list of checkpoint names")
    steps: List[PlanStep] = Field(..., description="Ordered steps, each with a checkpoint")

class DoneSchema(BaseModel):
    done: bool = Field(..., description="True if checkpoint is complete and ready to move on.")

class RevisedPlanSteps(BaseModel):
    steps: List[PlanStep] = Field(..., description="List of revised or additional PlanSteps for the current checkpoint.")


class Plan(BaseModel):
    checkpoints: List[str] = Field(..., description="Ordered list of checkpoint names")
    steps: List[PlanStep] = Field(..., description="Ordered steps, each with a checkpoint")

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

from typing import Dict
class PlanExecute(BaseModel):
    migrate_state: Optional[dict] = None
    input: Optional[str] = None
    plan: Plan
    past_steps: List[Dict] = Field(default_factory=list)
    response: Optional[str] = None
    current_checkpoint: Optional[str] = None

    def verbose_step(self) -> str:
        lines = []
        lines.append("=== PLAN EXECUTION CONTEXT ===")
        if self.input:
            lines.append(f"Input: {self.input}") 
        lines.append(f"Current Checkpoint: {self.current_checkpoint}")
        lines.append("\n--- CHECKPOINTS ---")
        for cp in self.plan.checkpoints:
            lines.append(f"- {cp}")
        lines.append("\n--- PLAN STEPS ---")
        for step in [step for step in self.plan.steps if self.plan.current_checkpoint==step.checkpoint]:
            lines.append(f"\nStep ID: {step.id}")
            lines.append(f"  Checkpoint: {step.checkpoint}")
            lines.append(f"  Title: {step.title}")
            lines.append(f"  Description: {step.description}")
            if step.files_involved:
                lines.append(f"  Files: {', '.join(step.files_involved)}")
            if step.dependencies:
                lines.append(f"  Dependencies: {', '.join(step.dependencies)}")
            if step.acceptance_criteria:
                lines.append("  Acceptance Criteria:")
                for crit in step.acceptance_criteria:
                    lines.append(f"    - {crit}")
            if step.notes:
                lines.append(f"  Notes: {step.notes}")
        lines.append("\n--- EXECUTION HISTORY ---")
        for idx, hist in enumerate(self.past_steps):
            lines.append(f"Step {idx+1}: {hist}")
        if self.response:
            lines.append(f"\n--- RESPONSE ---\n{self.response}")
        lines.append("\n===========================")
        return "\n".join(lines)