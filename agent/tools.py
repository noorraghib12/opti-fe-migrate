
import glob
import os
from pydantic import BaseModel, Field
from langchain_community.agent_toolkits import FileManagementToolkit
from langchain_core.tools import tool
from gitingest import ingest_async, ingest
import docker
from docker.types import Mount
import time
import subprocess
from openai import AsyncOpenAI

def get_repo_root():
    return subprocess.check_output(
        ["git", "rev-parse", "--show-toplevel"]
    ).decode("utf-8").strip()

REPO_ROOT = get_repo_root()

execute_toolkit = FileManagementToolkit(
    root_dir=REPO_ROOT,
    selected_tools=['read_file', 'write_file', 'file_delete','file_search', 'move_file', 'copy_file']
)  # If you don't provide a root_dir, operations will default to the current working directory

def generate_evaluate_toolkit(target_dir: str):
    return FileManagementToolkit(
        root_dir=os.path.join(REPO_ROOT, target_dir),
        selected_tools=['read_file', 'file_search']
    )

@tool("explore_directory")
async def explore_directory(path:str):
    """ Explore a directory and return its file tree and  file contents."""
    _,tree,file_context = await ingest_async(path)
    return tree,file_context

execute_file_mgt_tools = [explore_directory] + execute_toolkit.get_tools()


def check_container_run(target_dir):
    target_assets = os.path.join(target_dir,'public')
    target_src = os.path.join(target_dir,'src')
    client = docker.from_env()
    try:
        container= client.containers.run(
            image="optimizely-fe-agent:latest",
            volumes = {os.path.abspath(target_src): {'bind': '/app/src/', 'mode': 'rw'},
                        os.path.abspath(target_assets): {'bind': '/app/public', 'mode': 'rw'}
                       },
            ports={3000:3000},
            environment={
                "NODE_ENV":"production",
                "PORT":"3000",
                "HOSTNAME":"0.0.0.0"
                },
            remove=True,
            detach = True,
            stdout=True,
            stderr=True
        )     
        # Wait for logs to accumulate
        time.sleep(5)

        # Fetch logs
        container_logs = container.logs().decode('utf-8')

        # Stop the container
        container.stop()

        return container_logs

    except docker.errors.ContainerError as e:
        return f"ERROR: {str(e)}"

    except docker.errors.DockerException as e:
        return f"DOCKER ERROR: {str(e)}"

    except Exception as e:
        return f"UNEXPECTED ERROR: {str(e)}"


@tool("web_search")
async def web_search(query: str) -> str:
    """
    Perform a web search based on the provided query and return the results.
    """
    client = AsyncOpenAI()
    PROMPT_TEMPLATE = """
    You are a web assistant, helping a frontend engineer with their tasks. 
    Listen to the queries provided and provide responses as required by the frontend engineer.
    QUERY:
    {query}
    """
    try:
        response = await client.responses.create(
            model="gpt-4.1",
            tools=[{"type": "web_search"}],
            input=PROMPT_TEMPLATE.format(query=query)
        )
        return response.output_text
    except Exception as e:
        return f"Error: {e}"


@tool("check_sandbox_app_launch")
def check_container_run_tool(target_dir):
    """ Check if the NextJS application can launch successfully in a Docker container by returning logs."""
    target_assets = os.path.join(target_dir,'public')
    target_src = os.path.join(target_dir,'src')
    client = docker.from_env()
    try:
        container= client.containers.run(
            image="optimizely-fe-agent:latest",
            volumes = {os.path.abspath(target_src): {'bind': '/app/src/', 'mode': 'rw'},
                        os.path.abspath(target_assets): {'bind': '/app/public', 'mode': 'rw'}
                       },
            ports={3000:3000},
            environment={
                "NODE_ENV":"production",
                "PORT":"3000",
                "HOSTNAME":"0.0.0.0"
                },
            remove=True,
            stdout=True,
            stderr=True
        )          
        # Wait for logs to accumulate
        time.sleep(5)

        # Fetch logs
        container_logs = container.logs().decode('utf-8')

        # Stop the container
        container.stop()

        return container_logs

    except docker.errors.ContainerError as e:
        return f"ERROR: {str(e)}"

    except docker.errors.DockerException as e:
        return f"DOCKER ERROR: {str(e)}"

    except Exception as e:
        return f"UNEXPECTED ERROR: {str(e)}"
    

