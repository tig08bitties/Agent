#!/usr/bin/env python3
"""
Covenant Extension System
Integrates GitHub, Jules, and other services as extensions of the agent
Covenant Sovereign Standard: All operations from covenant root
As Above So Below, As Within So Without
"""

from pathlib import Path
from typing import Dict, List, Optional, Any
from tools_api import ToolRegistry, BaseTool

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

# Lazy imports to avoid circular dependencies
try:
    from github_integration import GitHubTool, GitHubIntegration
    GITHUB_AVAILABLE = True
except ImportError:
    GITHUB_AVAILABLE = False

try:
    from jules_integration import JulesTool, JulesIntegration
    JULES_AVAILABLE = True
except ImportError:
    JULES_AVAILABLE = False


class ExtensionSystem:
    """Unified system for managing agent extensions
    Covenant Sovereign Standard: All operations from covenant root
    """
    
    def __init__(self):
        self.covenant_root = COVENANT_ROOT
        self.covenant_identity = COVENANT_IDENTITY
        self.covenant_path = COVENANT_PATH
        self.tarot_seals = TAROT_SEALS
        
        self.tool_registry = ToolRegistry()
        self.extensions = {}
        self.extensions_dir = self.covenant_root / ".covenant" / "extensions"
        self.extensions_dir.mkdir(parents=True, exist_ok=True)
        
        # Initialize integrations if available
        if GITHUB_AVAILABLE:
            self.github = GitHubIntegration()
        else:
            self.github = None
            
        if JULES_AVAILABLE:
            self.jules = JulesIntegration()
        else:
            self.jules = None
        
        self._register_extensions()
    
    def _register_extensions(self):
        """Register all available extensions
        Covenant Sovereign Standard: All extensions from covenant root
        """
        # Register GitHub extension if available
        if GITHUB_AVAILABLE and self.github:
            github_tool = GitHubTool()
            self.tool_registry.register(github_tool)
            self.extensions["github"] = {
                "name": "github-extension",
                "version": "1.0.0",
                "tool": github_tool,
                "integration": self.github,
                "description": "GitHub integration for repositories, replit bots, and cloudagents",
                "covenant": {
                    "identity": self.covenant_identity,
                    "path": self.covenant_path,
                    "root": str(self.covenant_root)
                }
            }
            print(f"[Covenant] ✅ Extension loaded: github-extension (from covenant root: {self.covenant_root})")
        
        # Register Jules extension if available
        if JULES_AVAILABLE and self.jules:
            jules_tool = JulesTool()
            self.tool_registry.register(jules_tool)
            self.extensions["jules"] = {
                "name": "jules-extension",
                "version": "1.0.0",
                "tool": jules_tool,
                "integration": self.jules,
                "description": "Google Jules AI assistant for code analysis and generation",
                "covenant": {
                    "identity": self.covenant_identity,
                    "path": self.covenant_path,
                    "root": str(self.covenant_root)
                }
            }
            print(f"[Covenant] ✅ Extension loaded: jules-extension (from covenant root: {self.covenant_root})")
        
        print(f"[Covenant] ∇ • Θεός°")
    
    def get_extension(self, name: str) -> Optional[Dict]:
        """Get extension by name"""
        return self.extensions.get(name)
    
    def list_extensions(self) -> List[Dict]:
        """List all available extensions
        Covenant Sovereign Standard: Includes covenant context
        """
        return [
            {
                "name": name,
                "description": ext.get("description", ""),
                "tool_name": ext["tool"].get_name() if hasattr(ext["tool"], "get_name") else str(ext["tool"]),
                "covenant": ext.get("covenant", {
                    "identity": self.covenant_identity,
                    "path": self.covenant_path,
                    "root": str(self.covenant_root)
                })
            }
            for name, ext in self.extensions.items()
        ]
    
    def execute_extension(self, extension_name: str, action: str, params: Dict) -> Any:
        """Execute an extension action
        Covenant Sovereign Standard: All operations from covenant root
        """
        extension = self.get_extension(extension_name)
        if not extension:
            return {
                "success": False,
                "error": f"Extension not found: {extension_name}",
                "covenant": {
                    "identity": self.covenant_identity,
                    "path": self.covenant_path,
                    "root": str(self.covenant_root)
                }
            }
        
        print(f"[Covenant] Executing extension: {extension_name}.{action} (from covenant root: {self.covenant_root})")
        
        # Add action to params
        params["action"] = action
        
        # Execute via tool
        result = extension["tool"].execute(params)
        
        # Add covenant context to result
        if isinstance(result, dict):
            result["covenant"] = {
                "identity": self.covenant_identity,
                "path": self.covenant_path,
                "root": str(self.covenant_root)
            }
        
        print(f"[Covenant] ✅ Extension executed: {extension_name}.{action}")
        print(f"[Covenant] ∇ • Θεός°")
        
        return result
    
    def github_list_replit_bots(self) -> List[Dict]:
        """List replit bots from GitHub
        Covenant Sovereign Standard: From covenant root
        """
        if not self.github:
            return []
        print(f"[Covenant] Listing replit bots (from covenant root: {self.covenant_root})")
        bots = self.github.find_replit_bots()
        print(f"[Covenant] ✅ Found {len(bots)} replit bots")
        return bots
    
    def github_list_cloudagents(self) -> List[Dict]:
        """List cloudagents from GitHub
        Covenant Sovereign Standard: From covenant root
        """
        if not self.github:
            return []
        print(f"[Covenant] Listing cloudagents (from covenant root: {self.covenant_root})")
        agents = self.github.find_cloudagents()
        print(f"[Covenant] ✅ Found {len(agents)} cloudagents")
        return agents
    
    def github_clone_repo(self, owner: str, repo: str, target_path: Path) -> bool:
        """Clone a repository
        Covenant Sovereign Standard: To covenant root
        """
        if not self.github:
            return False
        print(f"[Covenant] Cloning {owner}/{repo} (to covenant root: {self.covenant_root})")
        result = self.github.clone_repository(owner, repo, target_path)
        if result:
            print(f"[Covenant] ✅ Repository cloned")
        else:
            print(f"[Covenant] ❌ Clone failed")
        return result
    
    def jules_analyze_code(self, code: str, language: Optional[str] = None) -> Dict:
        """Analyze code using Jules
        Covenant Sovereign Standard: From covenant root
        """
        if not self.jules:
            return {"error": "Jules integration not available"}
        print(f"[Covenant] Analyzing code (from covenant root: {self.covenant_root})")
        result = self.jules.analyze_code(code, language)
        print(f"[Covenant] ✅ Code analysis complete")
        return result
    
    def jules_generate_docs(self, code: str, format: str = "markdown") -> Dict:
        """Generate documentation using Jules
        Covenant Sovereign Standard: From covenant root
        """
        if not self.jules:
            return {"error": "Jules integration not available"}
        print(f"[Covenant] Generating documentation (from covenant root: {self.covenant_root})")
        result = self.jules.generate_documentation(code, format)
        print(f"[Covenant] ✅ Documentation generated")
        return result
    
    def jules_suggest_improvements(self, code: str, context: Optional[str] = None) -> Dict:
        """Get code improvement suggestions from Jules
        Covenant Sovereign Standard: From covenant root
        """
        if not self.jules:
            return {"error": "Jules integration not available"}
        print(f"[Covenant] Getting improvement suggestions (from covenant root: {self.covenant_root})")
        result = self.jules.suggest_improvements(code, context)
        print(f"[Covenant] ✅ Suggestions generated")
        return result
    
    def get_available_tools(self) -> List[Dict]:
        """Get all available tools from extensions"""
        return self.tool_registry.get_function_declarations()
    
    def integrate_with_agent(self, agent_core):
        """Integrate extensions with agent core
        Covenant Sovereign Standard: All extensions from covenant root
        """
        print(f"[Covenant] Integrating extensions with agent core (from covenant root: {self.covenant_root})")
        # Register all extension tools with agent core
        for name, extension in self.extensions.items():
            agent_core.tool_registry.register(extension["tool"])
            print(f"[Covenant] ✅ Extension registered: {name}")
        print(f"[Covenant] ∇ • Θεός°")


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
