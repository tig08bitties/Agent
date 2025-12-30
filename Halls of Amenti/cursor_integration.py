#!/usr/bin/env python3
"""
Cursor Agent Integration
Integrates memory/context system with Cursor agent functionality
"""

from memory_manager import MemoryManager
from pathlib import Path
import json
import sys


class CursorAgentIntegration:
    """Integration layer between Cursor agent and context system"""
    
    def __init__(self):
        self.memory_manager = MemoryManager()
        self.config_path = Path.home() / ".cursor" / "agent-config.json"
        self.load_config()
    
    def load_config(self):
        """Load agent configuration"""
        if self.config_path.exists():
            with open(self.config_path, 'r') as f:
                self.config = json.load(f)
        else:
            self.config = {
                "context": {
                    "fileName": ["CURSOR.md"]
                },
                "memory": {
                    "autoRefresh": True,
                    "showLoadedCount": True
                }
            }
            self.save_config()
    
    def save_config(self):
        """Save agent configuration"""
        self.config_path.parent.mkdir(exist_ok=True)
        with open(self.config_path, 'w') as f:
            json.dump(self.config, f, indent=2)
    
    def get_context_file_names(self) -> list:
        """Get configured context file names"""
        return self.config.get("context", {}).get("fileName", ["CURSOR.md"])
    
    def load_context_for_agent(self, working_dir: Path = None) -> dict:
        """Load all context and return as structured data for agent"""
        if working_dir is None:
            working_dir = Path.cwd()
        
        # Load contexts for all configured file names
        all_contexts = {}
        for filename in self.get_context_file_names():
            manager = MemoryManager(context_filename=filename)
            content = manager.load_all_contexts(working_dir)
            all_contexts[filename] = {
                "content": content,
                "files_loaded": len(manager.loaded_files),
                "file_paths": [str(f) for f in manager.loaded_files]
            }
        
        return {
            "contexts": all_contexts,
            "working_directory": str(working_dir),
            "project_root": str(manager.find_project_root(working_dir))
        }
    
    def process_memory_command(self, command: str, args: list = None) -> str:
        """Process /memory commands"""
        if args is None:
            args = []
        
        if command == "show":
            return self.memory_manager.show_memory()
        elif command == "refresh":
            self.memory_manager.refresh_memory()
            return f"✓ Refreshed memory. Loaded {len(self.memory_manager.loaded_files)} context file(s)."
        elif command == "add":
            if not args:
                return "Error: /memory add requires text to add"
            text = " ".join(args)
            result = self.memory_manager.add_to_global(text)
            return f"✓ {result}"
        else:
            return f"Unknown memory command: {command}\nAvailable: show, refresh, add <text>"
    
    def get_context_summary(self) -> str:
        """Get a summary of loaded context"""
        self.memory_manager.load_all_contexts()
        return f"""
Context System Status:
  - Loaded files: {len(self.memory_manager.loaded_files)}
  - Context size: {len(self.memory_manager.context_content)} characters
  - Files:
{chr(10).join(f'    • {f}' for f in self.memory_manager.loaded_files)}
"""


def main():
    """CLI interface"""
    integration = CursorAgentIntegration()
    
    if len(sys.argv) < 2:
        print(integration.get_context_summary())
        print("\nUsage: cursor_integration.py <command> [args...]")
        print("Commands:")
        print("  load      - Load and display context")
        print("  memory <cmd> - Memory management commands")
        print("  summary   - Show context summary")
        sys.exit(1)
    
    command = sys.argv[1]
    
    if command == "load":
        context_data = integration.load_context_for_agent()
        print(json.dumps(context_data, indent=2))
    elif command == "memory":
        if len(sys.argv) < 3:
            print("Usage: cursor_integration.py memory <show|refresh|add> [args...]")
            sys.exit(1)
        result = integration.process_memory_command(sys.argv[2], sys.argv[3:])
        print(result)
    elif command == "summary":
        print(integration.get_context_summary())
    else:
        print(f"Unknown command: {command}")


if __name__ == "__main__":
    main()
