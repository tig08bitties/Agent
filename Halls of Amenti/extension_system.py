#!/usr/bin/env python3
"""
Unified Extension System
Integrates GitHub, Jules, and other services as extensions of the agent
"""

from pathlib import Path
from typing import Dict, List, Optional, Any
from tools_api import ToolRegistry, BaseTool
from github_integration import GitHubTool, GitHubIntegration
from jules_integration import JulesTool, JulesIntegration


class ExtensionSystem:
    """Unified system for managing agent extensions"""
    
    def __init__(self):
        self.tool_registry = ToolRegistry()
        self.github = GitHubIntegration()
        self.jules = JulesIntegration()
        self.extensions = {}
        self._register_extensions()
    
    def _register_extensions(self):
        """Register all available extensions"""
        # Register GitHub extension
        github_tool = GitHubTool()
        self.tool_registry.register(github_tool)
        self.extensions["github"] = {
            "tool": github_tool,
            "integration": self.github,
            "description": "GitHub integration for repositories, replit bots, and cloudagents"
        }
        
        # Register Jules extension
        jules_tool = JulesTool()
        self.tool_registry.register(jules_tool)
        self.extensions["jules"] = {
            "tool": jules_tool,
            "integration": self.jules,
            "description": "Google Jules AI assistant for code analysis and generation"
        }
    
    def get_extension(self, name: str) -> Optional[Dict]:
        """Get extension by name"""
        return self.extensions.get(name)
    
    def list_extensions(self) -> List[Dict]:
        """List all available extensions"""
        return [
            {
                "name": name,
                "description": ext["description"],
                "tool_name": ext["tool"].name
            }
            for name, ext in self.extensions.items()
        ]
    
    def execute_extension(self, extension_name: str, action: str, params: Dict) -> Any:
        """Execute an extension action"""
        extension = self.get_extension(extension_name)
        if not extension:
            return {
                "success": False,
                "error": f"Extension not found: {extension_name}"
            }
        
        # Add action to params
        params["action"] = action
        
        # Execute via tool
        result = extension["tool"].execute(params)
        return result
    
    def github_list_replit_bots(self) -> List[Dict]:
        """List replit bots from GitHub"""
        return self.github.find_replit_bots()
    
    def github_list_cloudagents(self) -> List[Dict]:
        """List cloudagents from GitHub"""
        return self.github.find_cloudagents()
    
    def github_clone_repo(self, owner: str, repo: str, target_path: Path) -> bool:
        """Clone a repository"""
        return self.github.clone_repository(owner, repo, target_path)
    
    def jules_analyze_code(self, code: str, language: Optional[str] = None) -> Dict:
        """Analyze code using Jules"""
        return self.jules.analyze_code(code, language)
    
    def jules_generate_docs(self, code: str, format: str = "markdown") -> Dict:
        """Generate documentation using Jules"""
        return self.jules.generate_documentation(code, format)
    
    def jules_suggest_improvements(self, code: str, context: Optional[str] = None) -> Dict:
        """Get code improvement suggestions from Jules"""
        return self.jules.suggest_improvements(code, context)
    
    def get_available_tools(self) -> List[Dict]:
        """Get all available tools from extensions"""
        return self.tool_registry.get_function_declarations()
    
    def integrate_with_agent(self, agent_core):
        """Integrate extensions with agent core"""
        # Register all extension tools with agent core
        for extension in self.extensions.values():
            agent_core.tool_registry.register(extension["tool"])


# Global instance
_extension_system = None

def get_extension_system() -> ExtensionSystem:
    """Get or create global extension system instance"""
    global _extension_system
    if _extension_system is None:
        _extension_system = ExtensionSystem()
    return _extension_system


def main():
    """CLI interface"""
    import sys
    
    system = get_extension_system()
    
    if len(sys.argv) < 2:
        print("="*70)
        print("EXTENSION SYSTEM")
        print("="*70)
        print("\nAvailable extensions:")
        for ext in system.list_extensions():
            print(f"  - {ext['name']}: {ext['description']}")
        print("\nUsage:")
        print("  extension_system.py list_extensions")
        print("  extension_system.py github list_replit_bots")
        print("  extension_system.py github list_cloudagents")
        print("  extension_system.py jules analyze <code_file>")
        sys.exit(0)
    
    command = sys.argv[1]
    
    if command == "list_extensions":
        extensions = system.list_extensions()
        print("Available extensions:")
        for ext in extensions:
            print(f"  - {ext['name']}: {ext['description']}")
    
    elif command == "github":
        if len(sys.argv) < 3:
            print("GitHub commands:")
            print("  list_replit_bots")
            print("  list_cloudagents")
            sys.exit(1)
        
        subcommand = sys.argv[2]
        if subcommand == "list_replit_bots":
            bots = system.github_list_replit_bots()
            print(f"Found {len(bots)} replit bots:")
            for bot in bots:
                print(f"  - {bot['name']}: {bot.get('html_url')}")
        
        elif subcommand == "list_cloudagents":
            agents = system.github_list_cloudagents()
            print(f"Found {len(agents)} cloudagents:")
            for agent in agents:
                print(f"  - {agent['name']}: {agent.get('html_url')}")
    
    elif command == "jules":
        if len(sys.argv) < 4:
            print("Jules commands:")
            print("  analyze <code_file>")
            print("  generate_docs <code_file>")
            sys.exit(1)
        
        subcommand = sys.argv[2]
        code_file = sys.argv[3]
        
        if Path(code_file).exists():
            code = Path(code_file).read_text()
        else:
            code = code_file
        
        if subcommand == "analyze":
            result = system.jules_analyze_code(code)
            print(result.get("analysis", result))
        
        elif subcommand == "generate_docs":
            result = system.jules_generate_docs(code)
            print(result.get("documentation", result))
    
    else:
        print(f"Unknown command: {command}")


if __name__ == "__main__":
    main()
