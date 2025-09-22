from langchain_core.prompts import ChatPromptTemplate


eval_prompt = ChatPromptTemplate.from_messages(messages = [
    (
        'human',
        "Checkpoint: {current_cp}\n"
        "Executed Steps and their Acceptance Criterias:\n{plan_steps}\n"
        "Migration State Context:\n{migration_state_context}"   
    )
])

final_eval_prompt = ChatPromptTemplate.from_messages(messages = [
    (
        'human',
        "Checkpoint: {current_cp}\n"
        "Evaluation Response:\n{evaluation_response}\n"
        "Executed Steps and their Acceptance Criterias:\n{plan_steps}\n"
        "Migration State Context:\n{migration_state_context}"   
        )
])