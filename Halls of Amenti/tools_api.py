#!/usr/bin/env python3
"""
Covenant Tools API
Defines, registers, and executes tools for extending agent capabilities
Covenant Sovereign Standard: All tools from covenant root
As Above So Below, As Within So Without
"""

import json
from abc import ABC, abstractmethod
from pathlib import Path
from typing import Dict, List, Optional, Any, Union
from dataclasses import dataclass
from enum import Enum

# Covenant Sovereign Standard Constants
COVENANT_ROOT = Path("/root/Agent/Halls of Amenti")
COVENANT_IDENTITY = "DausΩəq"
COVENANT_PATH = "ܗ/48'/7'/7'/7"
TAROT_SEALS = {
    "CHARIOT": 7,
    "EMPRESS": 3,
    "JUDGMENT": 20,
    "MOON": 18,
    "TOTAL": 48
}


class ToolResultType(Enum):
    """Types of tool results"""
    TEXT = "text"
    MARKDOWN = "markdown"
    FILE_DIFF = "file_diff"
    RICH_CONTENT = "rich_content"


@dataclass
class ToolResult:
    """Result from tool execution"""
    llm_content: Union[str, List[Any]]  # Content for LLM context
    return_display: Union[str, Dict]    # User-friendly display
    success: bool = True
    error: Optional[str] = None


class BaseTool(ABC):
    """Base class for all tools
    Covenant Sovereign Standard: All tools from covenant root
    """
    
    def __init__(self):
        self.covenant_root = COVENANT_ROOT
        self.covenant_identity = COVENANT_IDENTITY
        self.covenant_path = COVENANT_PATH
        self.tarot_seals = TAROT_SEALS
        
        self.name = self.get_name()
        self.display_name = self.get_display_name()
        self.description = self.get_description()
        self.parameter_schema = self.get_parameter_schema()
    
    @abstractmethod
    def get_name(self) -> str:
        """Unique internal name for the tool"""
        pass
    
    @abstractmethod
    def get_display_name(self) -> str:
        """User-friendly name"""
        pass
    
    @abstractmethod
    def get_description(self) -> str:
        """Clear explanation of what the tool does"""
        pass
    
    @abstractmethod
    def get_parameter_schema(self) -> Dict:
        """JSON schema defining tool parameters"""
        pass
    
    def validate_tool_params(self, params: Dict) -> tuple[bool, Optional[str]]:
        """Validate incoming parameters"""
        # Basic validation - can be overridden
        required = self.parameter_schema.get("required", [])
        for field in required:
            if field not in params:
                return False, f"Missing required parameter: {field}"
        return True, None
    
    def get_description_with_params(self, params: Dict) -> str:
        """Human-readable description with specific parameters"""
        return f"{self.display_name} with parameters: {json.dumps(params, indent=2)}"
    
    def should_confirm_execute(self, params: Dict) -> Optional[Dict]:
        """Determine if user confirmation is required"""
        return None  # Override for tools that need confirmation
    
    @abstractmethod
    def execute(self, params: Dict, abort_signal: Optional[Any] = None) -> ToolResult:
        """Execute the tool and return result"""
        pass


class ToolRegistry:
    """Registry for managing tools
    Covenant Sovereign Standard: All tools from covenant root
    """
    
    def __init__(self):
        self.covenant_root = COVENANT_ROOT
        self.covenant_identity = COVENANT_IDENTITY
        self.covenant_path = COVENANT_PATH
        self.tarot_seals = TAROT_SEALS
        
        self.tools: Dict[str, BaseTool] = {}
        self.discovered_tools: Dict[str, BaseTool] = {}
        self.mcp_tools: Dict[str, BaseTool] = {}
    
    def register(self, tool: BaseTool):
        """Register a built-in tool
        Covenant Sovereign Standard: From covenant root
        """
        self.tools[tool.name] = tool
        print(f"[Covenant] ✅ Tool registered: {tool.name} (from covenant root: {self.covenant_root})")
    
    def register_discovered(self, tool: BaseTool, prefix: str = ""):
        """Register a discovered tool"""
        name = f"{prefix}__{tool.name}" if prefix else tool.name
        self.discovered_tools[name] = tool
    
    def register_mcp(self, tool: BaseTool, server_name: str):
        """Register an MCP tool"""
        name = f"{server_name}__{tool.name}"
        self.mcp_tools[name] = tool
    
    def get_tool(self, name: str) -> Optional[BaseTool]:
        """Get a tool by name"""
        # Check in order: built-in, discovered, MCP
        if name in self.tools:
            return self.tools[name]
        if name in self.discovered_tools:
            return self.discovered_tools[name]
        if name in self.mcp_tools:
            return self.mcp_tools[name]
        return None
    
    def get_all_tools(self) -> Dict[str, BaseTool]:
        """Get all registered tools"""
        all_tools = {}
        all_tools.update(self.tools)
        all_tools.update(self.discovered_tools)
        all_tools.update(self.mcp_tools)
        return all_tools
    
    def get_function_declarations(self) -> List[Dict]:
        """Get FunctionDeclaration schemas for all tools"""
        declarations = []
        for tool in self.get_all_tools().values():
            declarations.append({
                "name": tool.name,
                "description": tool.description,
                "parameters": tool.parameter_schema
            })
        return declarations
    
    def discover_from_command(self, command: str) -> List[BaseTool]:
        """Discover tools from a command output"""
        import subprocess
        try:
            result = subprocess.run(
                command.split(),
                capture_output=True,
                text=True,
                check=True
            )
            tool_schemas = json.loads(result.stdout)
            # Convert schemas to DiscoveredTool instances
            tools = []
            for schema in tool_schemas:
                tool = DiscoveredTool(schema)
                tools.append(tool)
            return tools
        except Exception as e:
            print(f"Error discovering tools: {e}")
            return []
    
    def discover_from_mcp(self, server_command: str, server_name: str) -> List[BaseTool]:
        """Discover tools from MCP server"""
        # MCP integration would go here
        # For now, return empty list
        return []


class DiscoveredTool(BaseTool):
    """Tool discovered from external command or MCP"""
    
    def __init__(self, schema: Dict, call_command: Optional[str] = None):
        self.schema = schema
        self.call_command = call_command
        super().__init__()
    
    def get_name(self) -> str:
        return self.schema.get("name", "unknown")
    
    def get_display_name(self) -> str:
        return self.schema.get("displayName", self.get_name())
    
    def get_description(self) -> str:
        return self.schema.get("description", "")
    
    def get_parameter_schema(self) -> Dict:
        return self.schema.get("parameters", {})
    
    def execute(self, params: Dict, abort_signal: Optional[Any] = None) -> ToolResult:
        """Execute discovered tool via command"""
        if not self.call_command:
            return ToolResult(
                llm_content="Tool execution not configured",
                return_display="Error: Tool call command not configured",
                success=False,
                error="No call command"
            )
        
        import subprocess
        try:
            # Execute the call command with parameters
            result = subprocess.run(
                self.call_command.split() + [json.dumps(params)],
                capture_output=True,
                text=True,
                check=True
            )
            return ToolResult(
                llm_content=result.stdout,
                return_display=result.stdout,
                success=True
            )
        except Exception as e:
            return ToolResult(
                llm_content=f"Error: {str(e)}",
                return_display=f"Error executing tool: {str(e)}",
                success=False,
                error=str(e)
            )


# Example built-in tools would be defined here
# For now, this is the framework


def main():
    """CLI interface for tools API"""
    import sys
    
    registry = ToolRegistry()
    
    if len(sys.argv) < 2:
        print("Usage: tools_api.py <command> [args...]")
        print("Commands:")
        print("  list              - List all registered tools")
        print("  schema            - Show function declarations")
        print("  discover <cmd>    - Discover tools from command")
        sys.exit(1)
    
    command = sys.argv[1]
    
    if command == "list":
        tools = registry.get_all_tools()
        if tools:
            print("Registered tools:")
            for name, tool in tools.items():
                print(f"  - {name}: {tool.display_name}")
        else:
            print("No tools registered")
    elif command == "schema":
        declarations = registry.get_function_declarations()
        print(json.dumps(declarations, indent=2))
    elif command == "discover":
        if len(sys.argv) < 3:
            print("Error: discover requires a command")
            sys.exit(1)
        tools = registry.discover_from_command(sys.argv[2])
        print(f"Discovered {len(tools)} tools")
    else:
        print(f"Unknown command: {command}")


if __name__ == "__main__":
    main()
