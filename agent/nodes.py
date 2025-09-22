# import docker
import docker
from typing_extensions import TypedDict
from typing import Annotated
# Core graph and execution
from langgraph.checkpoint.memory import MemorySaver  # simple in-memory checkpointing
from langgraph.graph import END, START, StateGraph
from langgraph.types import Command,Send
import os
import glob
import docker 
# Tool / agent helpers
from langgraph.prebuilt import ToolNode, tools_condition
from asyncio import gather 
# Optional (often used with OpenAI or Anthropic models)
from langchain_openai import ChatOpenAI
from agent.tools import execute_file_mgt_tools
from gitingest import ingest_async
from docker.types import Mount
from agent.states import MigrateState
from agent.css_utilities import get_tailwind_mapping,extract_css_classes
from agent.tools import REPO_ROOT
def update_css_map(a:dict = None,b:dict = None):
    if not b:
        return a
    elif not a:
        return b
    else:
        a.update(b)
        return a


async def get_css_classes_from_dir(state: MigrateState):
    state['app_dir'] = os.path.join(state['app_dir'],os.path.basename(state['source_dir']))
    os.makedirs(state['app_dir'],exist_ok=True)
    files = glob.glob(os.path.join(state['source_dir'],'**','*.css'),recursive=True)
    classes = get_css_class_from_files(files)
    tasks = []
    for class_name,rules in classes.items():
        tw_classes = get_tailwind_mapping(class_name, rules)
        tasks.append(tw_classes)
    results = await gather(*tasks)
    _,source_tree,source_context = await ingest_async(state['source_dir'])
    _,app_tree,app_context = await ingest_async(state['app_dir'])
    mapping = {class_name: result for class_name,result in zip(classes, results)}
    state.update({
        'source_tree': source_tree,
        'app_tree': app_tree,
        'source_context': source_context,
        'app_context': app_context,
        'css_state':mapping 
    })            
    return state

def get_css_class_from_files(css_file) -> dict:
    if isinstance(css_file,str):
        css_file = [css_file]
    classes = {}
    for f in css_file:
        classes_ = extract_css_classes(f)
        classes.update(classes_)
    return classes

css_graph = StateGraph(MigrateState)
css_graph.add_node('get_css_classes',get_css_classes_from_dir)
css_graph.add_edge(START, 'get_css_classes')
css_graph.add_edge('get_css_classes', END)

css_graph = css_graph.compile()




    