#!/usr/bin/env python3
"""
Passive Default Functions
All research and core functions are passive defaults - execute automatically
"""

from cursor_agent_core import (
    get_core, get_context, create_checkpoint,
    execute_tool, research, research_project
)
from auto_memory import (
    auto_load_context, auto_checkpoint,
    auto_research, auto_research_project
)

# All functions are passive defaults - no user interaction required

# Context functions (passive)
def get_context_passive() -> str:
    """Passive default: Get context automatically"""
    return get_context()

# Checkpoint functions (passive)
def checkpoint_passive(tool_name: str, file_path=None) -> str:
    """Passive default: Create checkpoint automatically"""
    return create_checkpoint(tool_name, file_path)

# Research functions (passive defaults)
def research_passive(query: str, count: int = 10) -> dict:
    """Passive default: Perform research automatically"""
    return research(query, count)

def research_project_passive(project_name: str, topics: list = None) -> dict:
    """Passive default: Research project automatically"""
    return research_project(project_name, topics)

# Tool execution (passive)
def tool_passive(tool_name: str, params: dict) -> any:
    """Passive default: Execute tool automatically"""
    return execute_tool(tool_name, params)

# Core access (passive)
def core_passive():
    """Passive default: Get core instance automatically"""
    return get_core()


# Export all as passive defaults
__all__ = [
    'get_context_passive',
    'checkpoint_passive',
    'research_passive',
    'research_project_passive',
    'tool_passive',
    'core_passive',
    # Also export direct functions as passive defaults
    'get_context',
    'create_checkpoint',
    'research',
    'research_project',
    'execute_tool',
    'get_core'
]
