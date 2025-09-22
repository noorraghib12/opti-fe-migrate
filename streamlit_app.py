import streamlit as st
import asyncio
from agent.nodes import graph
from agent.states import PlanExecute
from dotenv import load_dotenv
# Function to asynchronously invoke the graph and stream the state response
async def run_migration(source_dir, target_dir):
    # Initialize the state
    state = {
        "migrate_state": {
            "source_dir": source_dir,
            "app_dir": target_dir
        }
    }
    config = {"configurable": {"thread_id": "migration_run"}}

    # Streamlit progress bar
    progress_bar = st.progress(0)
    status_placeholder = st.empty()

    # Run the graph and stream the state response
    async for state_update in graph.astream(state, config=config, stream_mode='update'):
        response = state_update.get("response", "Processing...")
        status_placeholder.write(f"**Status:** {response}")
        progress_bar.progress(min(progress_bar.progress + 10, 100))  # Increment progress bar

        # Check if the migration is complete
        if state_update.get("current_checkpoint") is None:
            status_placeholder.write("**Migration Complete!** 🎉")
            st.success(f"Migration finished! Your app is ready at: `{target_dir}`")
            st.markdown(f"[Open App Directory](file://{target_dir})")
            break

# Streamlit App UI
def main():
    st.set_page_config(page_title="Next.js Migration Tool", layout="wide")

    # Sidebar instructions
    st.sidebar.title("Instructions")
    st.sidebar.write("""
    
    1. Add the vanilla HTML/CSS/JS template to the root of the project directory.
    2. Provide the **source directory** name where your template is located.
    3. The **target directory** will be automatically set to `target_migrate`.
    4. Click the **Start Migration** button to begin the migration process.
    5. Monitor the progress and status updates in real-time.
    6. Once the migration is complete, a link to the app directory will be provided.
    """)

    # Main form for user input
    st.title("Next.js Migration Tool")
    st.write("Migrate your vanilla HTML/CSS/JS template to a Next.js App Router project with TypeScript and Tailwind CSS.")

    with st.form("migration_form"):
        source_dir = st.text_input("Source Directory", placeholder="Enter the source directory name")
        target_dir = "target_migrate"  # Fixed target directory
        submit_button = st.form_submit_button("Start Migration")

    # Handle form submission
    if submit_button:
        if not source_dir:
            st.error("Please provide a valid source directory.")
        else:
            st.info(f"Starting migration from `{source_dir}` to `{target_dir}`...")
            asyncio.run(run_migration(source_dir, target_dir))

if __name__ == "__main__":
    main()