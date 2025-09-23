import re
import openai
import time
from dotenv import load_dotenv
import os
from openai import OpenAI, AsyncOpenAI
from asyncio import gather
import glob
from gitingest import ingest_async
from agent.states import MigrateState
# Set your OpenAI API key here
load_dotenv()

openai.api_key = os.environ["OPENAI_API_KEY"]

def extract_css_classes(css_path):
    """
    Extracts CSS class selectors and their rules from a CSS file.
    Also resolves CSS variables to their values.
    Args:
        css_path (str): Path to the CSS file.
    Returns:
        list: List of tuples (class_name, rules).
    """
    with open(css_path, 'r') as f:
        css = f.read()
    # Extract all CSS variables (any line with --var: value)
    variables = {}
    for match in re.finditer(r'(--[\w\-]+)\s*:\s*([^;]+);', css):
        key, value = match.group(1), match.group(2)
        variables[key.strip()] = value.strip()
    # Replace var(--attribute) with actual value
    def replace_vars(rule):
        return re.sub(r'var\((--[\w\-]+)\)', lambda m: variables.get(m.group(1), m.group(0)), rule)
    # Find all class selectors and their rules
    pattern = re.compile(r'\.([\w\-]+)\s*\{([^}]*)\}', re.MULTILINE)
    classes = []
    for match in pattern.finditer(css):
        class_name = match.group(1)
        rules = match.group(2).strip().replace('\n', ' ')
        rules = replace_vars(rules)
        classes.append((class_name, rules))
    return classes

async def get_tailwind_mapping(class_name, rules):
    """
    Uses OpenAI API to map a CSS class and its rules to Tailwind CSS utility classes.
    Args:
        class_name (str): The CSS class name.
        rules (str): The CSS rules for the class.
    Returns:
        str: Tailwind CSS utility classes as a string.
    """
    client = AsyncOpenAI()
    PROMPT_TEMPLATE = """
    You are professional frontend engineer specializing in Tailwind CSS.
    <Instructions>
    Given the following CSS class and its style rules, provide the best Tailwind CSS utility classes that match the styles. Only return the entire utility class as string, no explanation needed.
    Always try to use https://styleshift.shefali.dev/ for mapping simple styles to Tailwind Utility Classes. In the case any unable to convert parts, try to find solutions for those by yourself
    <Instructions>
    Class: .{class_name}
    Rules:
    {rules}
    """
    try:
        response = await client.responses.create(
            model="gpt-5-mini",
            tools=[{"type": "web_search"}],
            input = PROMPT_TEMPLATE.format(class_name=class_name, rules=rules)
        )
        answer = response.output_text
        print(answer)
        return answer
    except Exception as e:
        print(f"Error for .{class_name}: {e}")
        return []
    
    
def get_css_class_from_files(css_file) -> dict:
    """
    Extracts CSS classes from one or more CSS files and returns a dictionary.
    Args:
        css_file (str or list): Path(s) to CSS file(s).
    Returns:
        dict: Mapping of class names to rules.
    """
    if isinstance(css_file, str):
        css_file = [css_file]
    classes = {}
    for f in css_file:
        classes_ = extract_css_classes(f)
        classes.update(classes_)
    return classes


async def get_css_classes_from_dir(state: MigrateState):
    """
    Finds all CSS files in the source directory, extracts classes, maps them to Tailwind,
    and updates the migration state with context and mappings.
    Args:
        state (MigrateState): Migration state object.
    Returns:
        MigrateState: Updated migration state with CSS and context.
    """
    # Set app_dir based on source_dir
    state['app_dir'] = os.path.join('target_migrate', os.path.basename(state['source_dir']))
    os.makedirs(state['app_dir'], exist_ok=True)
    # Find all CSS files recursively in source_dir
    files = glob.glob(os.path.join(state['source_dir'], '**', '*.css'), recursive=True)
    # Extract classes from files
    classes = get_css_class_from_files(files)
    tasks = []
    # Map each class to Tailwind using LLM
    for class_name, rules in classes.items():
        tw_classes = get_tailwind_mapping(class_name, rules)
        tasks.append(tw_classes)
    results = await gather(*tasks)
    # Ingest source and app directory context
    _, source_tree, source_context = await ingest_async(state['source_dir'])
    _, app_tree, app_context = await ingest_async(state['app_dir'])
    # Build mapping of class_name to tailwind result
    mapping = {class_name: result for class_name, result in zip(classes, results)}
    # Update state with trees, contexts, and CSS mapping
    state.update({
        'source_tree': source_tree,
        'app_tree': app_tree,
        'source_context': source_context,
        'app_context': app_context,
        'css_state': mapping
    })
    return state