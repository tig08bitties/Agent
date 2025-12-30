#!/usr/bin/env python3
"""
Cursor-Agent Tools for Agent System
Provides BaseTool implementations for cursor-agent package manager
"""

from tools_api import BaseTool, ToolResult
from typing import Dict, Optional, Any
import json

# Import cursor-agent integration
try:
    from cursor_agent_integration import CursorAgentIntegration
    CURSOR_AGENT_AVAILABLE = True
except ImportError:
    CURSOR_AGENT_AVAILABLE = False
    CursorAgentIntegration = None


class CursorAgentBootstrapTool(BaseTool):
    """Bootstrap system prerequisites"""
    
    def get_name(self) -> str:
        return "cursor_agent_bootstrap"
    
    def get_display_name(self) -> str:
        return "Bootstrap System Prerequisites"
    
    def get_description(self) -> str:
        return "Bootstrap system prerequisites (aptitude, git, make, build-essential, curl)"
    
    def get_parameter_schema(self) -> Dict:
        return {
            "type": "object",
            "properties": {},
            "required": []
        }
    
    def execute(self, params: Dict, abort_signal: Optional[Any] = None) -> ToolResult:
        if not CURSOR_AGENT_AVAILABLE:
            return ToolResult(
                llm_content="Cursor-agent integration not available",
                return_display="❌ Cursor-agent integration not available",
                success=False,
                error="Cursor-agent not installed"
            )
        
        agent = CursorAgentIntegration()
        result = agent.bootstrap()
        
        if result["success"]:
            return ToolResult(
                llm_content=result["stdout"],
                return_display=f"✅ System bootstrapped successfully\n{result['stdout']}",
                success=True
            )
        else:
            return ToolResult(
                llm_content=result.get("error", "Bootstrap failed"),
                return_display=f"❌ Bootstrap failed: {result.get('error', 'Unknown error')}",
                success=False,
                error=result.get("error")
            )


class CursorAgentInstallDevStackTool(BaseTool):
    """Install development stack"""
    
    def get_name(self) -> str:
        return "cursor_agent_install_dev_stack"
    
    def get_display_name(self) -> str:
        return "Install Development Stack"
    
    def get_description(self) -> str:
        return "Install development stack (git, make, build-essential, rustup, go)"
    
    def get_parameter_schema(self) -> Dict:
        return {
            "type": "object",
            "properties": {},
            "required": []
        }
    
    def execute(self, params: Dict, abort_signal: Optional[Any] = None) -> ToolResult:
        if not CURSOR_AGENT_AVAILABLE:
            return ToolResult(
                llm_content="Cursor-agent integration not available",
                return_display="❌ Cursor-agent integration not available",
                success=False,
                error="Cursor-agent not installed"
            )
        
        agent = CursorAgentIntegration()
        result = agent.install_stack("dev")
        
        if result["success"]:
            return ToolResult(
                llm_content=result["stdout"],
                return_display=f"✅ Development stack installed\n{result['stdout']}",
                success=True
            )
        else:
            return ToolResult(
                llm_content=result.get("error", "Installation failed"),
                return_display=f"❌ Installation failed: {result.get('error', 'Unknown error')}",
                success=False,
                error=result.get("error")
            )


class CursorAgentSearchPackageTool(BaseTool):
    """Search for packages in Gentoo portage"""
    
    def get_name(self) -> str:
        return "cursor_agent_search_package"
    
    def get_display_name(self) -> str:
        return "Search Gentoo Packages"
    
    def get_description(self) -> str:
        return "Search for packages in Gentoo portage tree and overlays (portage, guru, kde)"
    
    def get_parameter_schema(self) -> Dict:
        return {
            "type": "object",
            "properties": {
                "query": {
                    "type": "string",
                    "description": "Package name to search for"
                },
                "overlay": {
                    "type": "string",
                    "description": "Optional overlay name (portage, guru, kde)",
                    "enum": ["portage", "guru", "kde"]
                }
            },
            "required": ["query"]
        }
    
    def execute(self, params: Dict, abort_signal: Optional[Any] = None) -> ToolResult:
        if not CURSOR_AGENT_AVAILABLE:
            return ToolResult(
                llm_content="Cursor-agent integration not available",
                return_display="❌ Cursor-agent integration not available",
                success=False,
                error="Cursor-agent not installed"
            )
        
        query = params.get("query")
        overlay = params.get("overlay")
        
        if not query:
            return ToolResult(
                llm_content="Query parameter required",
                return_display="❌ Query parameter required",
                success=False,
                error="Missing query parameter"
            )
        
        agent = CursorAgentIntegration()
        result = agent.search_ebuild(query, overlay)
        
        if result["success"]:
            return ToolResult(
                llm_content=result["stdout"],
                return_display=f"📦 Search results for '{query}':\n{result['stdout']}",
                success=True
            )
        else:
            return ToolResult(
                llm_content=result.get("error", "Search failed"),
                return_display=f"❌ Search failed: {result.get('error', 'Unknown error')}",
                success=False,
                error=result.get("error")
            )


class CursorAgentGetPackageInfoTool(BaseTool):
    """Get package information"""
    
    def get_name(self) -> str:
        return "cursor_agent_get_package_info"
    
    def get_display_name(self) -> str:
        return "Get Package Information"
    
    def get_description(self) -> str:
        return "Get detailed information about a Gentoo ebuild package"
    
    def get_parameter_schema(self) -> Dict:
        return {
            "type": "object",
            "properties": {
                "package_spec": {
                    "type": "string",
                    "description": "Package specification in category/package format (e.g., dev-vcs/git)"
                },
                "overlay": {
                    "type": "string",
                    "description": "Optional overlay name (portage, guru, kde)",
                    "enum": ["portage", "guru", "kde"]
                }
            },
            "required": ["package_spec"]
        }
    
    def execute(self, params: Dict, abort_signal: Optional[Any] = None) -> ToolResult:
        if not CURSOR_AGENT_AVAILABLE:
            return ToolResult(
                llm_content="Cursor-agent integration not available",
                return_display="❌ Cursor-agent integration not available",
                success=False,
                error="Cursor-agent not installed"
            )
        
        package_spec = params.get("package_spec")
        overlay = params.get("overlay")
        
        if not package_spec:
            return ToolResult(
                llm_content="Package specification required",
                return_display="❌ Package specification required",
                success=False,
                error="Missing package_spec parameter"
            )
        
        agent = CursorAgentIntegration()
        result = agent.ebuild_info(package_spec, overlay)
        
        if result["success"]:
            return ToolResult(
                llm_content=result["stdout"],
                return_display=f"📋 Package information for '{package_spec}':\n{result['stdout']}",
                success=True
            )
        else:
            return ToolResult(
                llm_content=result.get("error", "Failed to get package info"),
                return_display=f"❌ Failed to get package info: {result.get('error', 'Unknown error')}",
                success=False,
                error=result.get("error")
            )


class CursorAgentEnsureDevEnvironmentTool(BaseTool):
    """Ensure development environment is ready"""
    
    def get_name(self) -> str:
        return "cursor_agent_ensure_dev_environment"
    
    def get_display_name(self) -> str:
        return "Ensure Development Environment"
    
    def get_description(self) -> str:
        return "Ensure development environment is set up and ready"
    
    def get_parameter_schema(self) -> Dict:
        return {
            "type": "object",
            "properties": {},
            "required": []
        }
    
    def execute(self, params: Dict, abort_signal: Optional[Any] = None) -> ToolResult:
        if not CURSOR_AGENT_AVAILABLE:
            return ToolResult(
                llm_content="Cursor-agent integration not available",
                return_display="❌ Cursor-agent integration not available",
                success=False,
                error="Cursor-agent not installed"
            )
        
        agent = CursorAgentIntegration()
        result = agent.ensure_dev_environment()
        
        if result["success"]:
            return ToolResult(
                llm_content=result["stdout"],
                return_display=f"✅ Development environment ready\n{result['stdout']}",
                success=True
            )
        else:
            return ToolResult(
                llm_content=result.get("error", "Environment setup failed"),
                return_display=f"❌ Environment setup failed: {result.get('error', 'Unknown error')}",
                success=False,
                error=result.get("error")
            )


def get_cursor_agent_tools():
    """Get all cursor-agent tools"""
    if not CURSOR_AGENT_AVAILABLE:
        return []
    
    return [
        CursorAgentBootstrapTool(),
        CursorAgentInstallDevStackTool(),
        CursorAgentSearchPackageTool(),
        CursorAgentGetPackageInfoTool(),
        CursorAgentEnsureDevEnvironmentTool()
    ]
