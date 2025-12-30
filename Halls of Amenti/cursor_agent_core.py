#!/usr/bin/env python3
"""
Cursor Agent Core Integration
Main integration point for all Cursor agent features
Automatically handles memory, checkpoints, token caching, and tools
"""

from pathlib import Path
from typing import Optional, Dict, Any, List
from collections import defaultdict
import json
import sys

from auto_memory import (
    get_auto_memory, auto_load_context, auto_checkpoint,
    auto_research, auto_research_project
)
from checkpoint_manager import CheckpointManager
from token_cache import TokenCache
from tools_api import ToolRegistry, BaseTool
from web_fetch_tool import WebFetchTool
from brave_search_tool import BraveSearchTool
from cow_prompt_system import cow_prompt_sphinx
from sphinx_doc_generator import generate_sphinx_docs
from extension_system import get_extension_system
from passport_processor import PassportProcessor

# Import cursor-agent integration
try:
    from cursor_agent_integration import (
        CursorAgentIntegration,
        tool_bootstrap_system,
        tool_install_dev_stack,
        tool_search_package,
        tool_get_package_info,
        tool_ensure_dev_environment
    )
    CURSOR_AGENT_AVAILABLE = True
except ImportError:
    CURSOR_AGENT_AVAILABLE = False
    CursorAgentIntegration = None

# Spoken commands available via cursor-agent integration
SPOKEN_COMMANDS_AVAILABLE = CURSOR_AGENT_AVAILABLE


class CursorAgentCore:
    """Main core class integrating all Cursor agent features"""
    
    def __init__(self):
        self.auto_memory = get_auto_memory()
        self.checkpoint_manager = CheckpointManager(enabled=True)
        self.token_cache = TokenCache()
        self.tool_registry = ToolRegistry()
        self._register_builtin_tools()
        # Lazy load research manager to avoid circular imports
        self._research_manager = None
        # Initialize extension system (GitHub, Jules, etc.)
        self.extension_system = get_extension_system()
        self.extension_system.integrate_with_agent(self)
        
        # Initialize cursor-agent integration if available
        if CURSOR_AGENT_AVAILABLE:
            self.cursor_agent = CursorAgentIntegration()
        else:
            self.cursor_agent = None
    
    def _register_builtin_tools(self):
        """Register built-in tools"""
        # Register web fetch tool
        web_fetch = WebFetchTool()
        self.tool_registry.register(web_fetch)
        
        # Register Brave search tool (primary research tool)
        brave_search = BraveSearchTool()
        self.tool_registry.register(brave_search)
        
        # Register cursor-agent tools if available
        if CURSOR_AGENT_AVAILABLE:
            try:
                from cursor_agent_tools import get_cursor_agent_tools
                cursor_tools = get_cursor_agent_tools()
                for tool in cursor_tools:
                    self.tool_registry.register(tool)
                # Initialize cursor-agent integration for direct access
                self.cursor_agent = CursorAgentIntegration()
            except ImportError:
                # Fallback to function-based registration if tool classes not available
                self.cursor_agent = CursorAgentIntegration()
                # Note: Function-based registration would need to be implemented
                # in ToolRegistry if needed
    
    def get_context(self) -> str:
        """Get current context (passive - auto-loaded)"""
        return self.auto_memory.get_context()
    
    def before_file_modification(
        self,
        tool_name: str,
        file_path: Optional[Path] = None,
        conversation_history: Optional[List] = None,
        tool_call: Optional[Dict] = None
    ) -> Optional[str]:
        """Called before file modification - creates checkpoint automatically"""
        return self.checkpoint_manager.create_checkpoint(
            tool_name=tool_name,
            file_path=file_path,
            conversation_history=conversation_history,
            tool_call=tool_call
        )
    
    def get_cached_tokens(self, system_instructions: str, context: str) -> Optional[Dict]:
        """Get cached tokens for cost optimization"""
        return self.token_cache.get_cached_tokens(system_instructions, context)
    
    def cache_tokens(self, system_instructions: str, context: str, tokens: Dict):
        """Cache tokens for future use"""
        self.token_cache.cache_tokens(system_instructions, context, tokens)
    
    def record_token_usage(self, total_tokens: int, cached_tokens: int = 0):
        """Record token usage statistics"""
        self.token_cache.record_request(total_tokens, cached_tokens)
    
    def get_token_stats(self) -> Dict:
        """Get token usage statistics"""
        return self.token_cache.get_stats()
    
    def list_checkpoints(self) -> List[str]:
        """List available checkpoints"""
        return self.checkpoint_manager.list_checkpoints()
    
    def restore_checkpoint(self, checkpoint_name: str) -> bool:
        """Restore a checkpoint"""
        return self.checkpoint_manager.restore_checkpoint(checkpoint_name)
    
    def execute_tool(self, tool_name: str, params: Dict) -> Any:
        """Execute a tool"""
        tool = self.tool_registry.get_tool(tool_name)
        if not tool:
            return {
                "success": False,
                "error": f"Tool not found: {tool_name}"
            }
        
        # Validate parameters
        valid, error = tool.validate_tool_params(params)
        if not valid:
            return {
                "success": False,
                "error": error
            }
        
        # Check if confirmation needed
        confirm = tool.should_confirm_execute(params)
        if confirm:
            # In passive mode, auto-confirm for safe operations
            # For destructive operations, this would require user confirmation
            pass
        
        # Create checkpoint before execution if it modifies files
        if tool_name in ["write_file", "edit_file", "replace"]:
            self.before_file_modification(tool_name, params.get("file_path"))
        
        # Execute tool
        result = tool.execute(params)
        return result
    
    def get_available_tools(self) -> List[Dict]:
        """Get list of available tools"""
        return self.tool_registry.get_function_declarations()
    
    def refresh_context(self):
        """Refresh context files"""
        return self.auto_memory.refresh_context()
    
    @property
    def research_manager(self):
        """Lazy load research manager to avoid circular imports"""
        if self._research_manager is None:
            from research_manager import ResearchManager
            self._research_manager = ResearchManager()
        return self._research_manager
    
    def research(self, query: str, count: int = 10) -> dict:
        """Passive default: Automatically perform research"""
        return self.research_manager.research(query, count)
    
    def research_project(self, project_name: str, topics: list = None) -> dict:
        """Passive default: Automatically research a project"""
        return self.research_manager.research_project(project_name, topics)
    
    def cow_prompt_research(self, project_name: str, topics: list = None) -> dict:
        """Passive default: Research using cow easter egg prompts"""
        return cow_prompt_sphinx(project_name, topics)
    
    def generate_sphinx_docs(self, project_path: str, project_name: str, topics: list = None) -> dict:
        """Passive default: Generate Sphinx documentation with cow prompts"""
        return generate_sphinx_docs(project_path, project_name, topics)
    
    def speak_and_execute(self, *commands):
        """
        Speak commands into creation and execute in order via sudo-rs
        
        This is the core capability: chain multiple commands into single execution.
        Commands are executed in the order they are spoken.
        
        Args:
            *commands: Variable number of command strings to execute in order
            
        Returns:
            dict with execution results
            
        Example:
            core.speak_and_execute(
                "aptitude update",
                "aptitude install -y git make",
                "git --version"
            )
        """
        if not self.cursor_agent:
            return {
                "success": False,
                "error": "Cursor-agent integration not available"
            }
        
        # Use cursor-agent integration's speak_and_execute
        return self.cursor_agent.speak_and_execute(*commands)
    
    def launch_zellij_chariot(self):
        """
        Launch Chariot with Zellij glowing dashboard
        
        Returns:
            dict with launch status
        """
        try:
            from zellij_integration import get_zellij_integration
            zellij = get_zellij_integration()
            return zellij.launch_chariot_dashboard()
        except ImportError:
            return {
                "success": False,
                "error": "Zellij integration not available"
            }
        except Exception as e:
            return {
                "success": False,
                "error": str(e)
            }
    
    def get_cursor_agent(self):
        """
        Get cursor-agent integration instance
        
        Returns:
            CursorAgentIntegration instance or None
        """
        return self.cursor_agent
    
    def search_package(self, query: str, overlay: str = None):
        """
        Search for packages in Gentoo portage tree and overlays
        
        Args:
            query: Package name to search for
            overlay: Optional overlay name (portage, guru, kde)
            
        Returns:
            dict with search results
        """
        if not self.cursor_agent:
            return {
                "success": False,
                "error": "Cursor-agent integration not available"
            }
        return self.cursor_agent.search_ebuild(query, overlay)
    
    def get_package_info(self, package_spec: str, overlay: str = None):
        """
        Get detailed information about a Gentoo ebuild package
        
        Args:
            package_spec: Package specification (category/package)
            overlay: Optional overlay name
            
        Returns:
            dict with package information
        """
        if not self.cursor_agent:
            return {
                "success": False,
                "error": "Cursor-agent integration not available"
            }
        return self.cursor_agent.ebuild_info(package_spec, overlay)
    
    def ensure_environment(self):
        """
        Ensure development environment is set up and ready
        
        Returns:
            dict with setup results
        """
        if not self.cursor_agent:
            return {
                "success": False,
                "error": "Cursor-agent integration not available"
            }
        return self.cursor_agent.ensure_dev_environment()
    
    def get_github_replit_bots(self) -> list:
        """Get replit bots from GitHub"""
        return self.extension_system.github_list_replit_bots()
    
    def get_github_cloudagents(self) -> list:
        """Get cloudagents from GitHub"""
        return self.extension_system.github_list_cloudagents()
    
    def jules_analyze_code(self, code: str, language: str = None) -> dict:
        """Analyze code using Google Jules"""
        return self.extension_system.jules_analyze_code(code, language)
    
    def jules_generate_docs(self, code: str, format: str = "markdown") -> dict:
        """Generate documentation using Google Jules"""
        return self.extension_system.jules_generate_docs(code, format)
    
    def process_passport_data(self, max_files: int = None, priority_only: bool = True) -> dict:
        """Process Passport data efficiently"""
        processor = PassportProcessor(Path("/media/Passport"))
        if priority_only:
            return processor.process_priority_files()
        else:
            # Stream process with limit
            results = {
                "files": [],
                "total_size": 0,
                "categories": defaultdict(int)
            }
            for chunk in processor.stream_process(max_files):
                results["files"].extend(chunk["files"])
                results["total_size"] += chunk["total_size"]
                for cat, count in chunk["categories"].items():
                    results["categories"][cat] += count
            return results


# Global instance
_core = None

def get_core() -> CursorAgentCore:
    """Get or create global core instance"""
    global _core
    if _core is None:
        _core = CursorAgentCore()
    return _core


# Passive functions for easy access
def get_context() -> str:
    """Passive: Get context automatically"""
    return get_core().get_context()


def create_checkpoint(tool_name: str, file_path: Path = None) -> Optional[str]:
    """Passive: Create checkpoint automatically"""
    return get_core().before_file_modification(tool_name, file_path)


def get_cached_tokens(system_instructions: str, context: str) -> Optional[Dict]:
    """Passive: Get cached tokens"""
    return get_core().get_cached_tokens(system_instructions, context)


def cache_tokens(system_instructions: str, context: str, tokens: Dict):
    """Passive: Cache tokens"""
    get_core().cache_tokens(system_instructions, context, tokens)


def execute_tool(tool_name: str, params: Dict) -> Any:
    """Passive: Execute tool with automatic checkpointing"""
    return get_core().execute_tool(tool_name, params)


def research(query: str, count: int = 10) -> dict:
    """Passive default: Automatically perform research"""
    return get_core().research(query, count)


def research_project(project_name: str, topics: list = None) -> dict:
    """Passive default: Automatically research a project"""
    return get_core().research_project(project_name, topics)


def cow_prompt_research(project_name: str, topics: list = None) -> dict:
    """Passive default: Research using cow easter egg prompts"""
    return get_core().cow_prompt_research(project_name, topics)


def generate_sphinx_docs(project_path: str, project_name: str, topics: list = None) -> dict:
    """Passive default: Generate Sphinx documentation with cow prompts"""
    return get_core().generate_sphinx_docs(project_path, project_name, topics)


def get_github_replit_bots() -> list:
    """Passive default: Get replit bots from GitHub"""
    return get_core().get_github_replit_bots()


def get_github_cloudagents() -> list:
    """Passive default: Get cloudagents from GitHub"""
    return get_core().get_github_cloudagents()


def jules_analyze_code(code: str, language: str = None) -> dict:
    """Passive default: Analyze code using Google Jules"""
    return get_core().jules_analyze_code(code, language)


def jules_generate_docs(code: str, format: str = "markdown") -> dict:
    """Passive default: Generate documentation using Google Jules"""
    return get_core().jules_generate_docs(code, format)


def process_passport_data(max_files: int = None, priority_only: bool = True) -> dict:
    """Passive default: Process Passport data efficiently"""
    return get_core().process_passport_data(max_files, priority_only)


if __name__ == "__main__":
    core = get_core()
    
    print("="*70)
    print("CURSOR AGENT CORE - PASSIVE MODE")
    print("="*70)
    
    context = core.get_context()
    print(f"\n✓ Context: {len(context)} characters loaded")
    
    tools = core.get_available_tools()
    print(f"✓ Tools registered: {len(tools)}")
    for tool in tools:
        print(f"  - {tool['name']}: {tool['description'][:50]}...")
    
    stats = core.get_token_stats()
    print(f"\n✓ Token cache: {stats['cache_hits']} hits, {stats['cache_misses']} misses")
    
    checkpoints = core.list_checkpoints()
    print(f"✓ Checkpoints available: {len(checkpoints)}")
    
    print("\n" + "="*70)
    print("System ready for passive operation.")
    print("="*70)
