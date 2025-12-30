#!/usr/bin/env python3
"""
Auto Memory System
Passively loads and maintains context without user intervention
"""

import os
from pathlib import Path
from memory_manager import MemoryManager
from checkpoint_manager import CheckpointManager
from token_cache import TokenCache
import json


class AutoMemorySystem:
    """Automatically manages memory/context system"""
    
    def __init__(self):
        self.memory_manager = MemoryManager()
        self.checkpoint_manager = CheckpointManager(enabled=True)
        self.token_cache = TokenCache()
        self.config_path = Path.home() / ".cursor" / "auto_memory_config.json"
        self.config = self._load_config()
        self._auto_load_context()
        # Lazy load research manager to avoid circular imports
        self._research_manager = None
    
    def _load_config(self) -> dict:
        """Load auto-memory configuration"""
        if self.config_path.exists():
            try:
                with open(self.config_path, 'r') as f:
                    return json.load(f)
            except:
                pass
        
        # Default configuration
        config = {
            "auto_load": True,
            "auto_refresh": True,
            "checkpointing": {
                "enabled": True,
                "auto_create": True
            },
            "token_caching": {
                "enabled": True,
                "auto_cache": True
            },
            "context": {
                "auto_inject": True,
                "show_loaded_count": True
            }
        }
        self._save_config(config)
        return config
    
    def _save_config(self, config: dict = None):
        """Save configuration"""
        if config is None:
            config = self.config
        self.config_path.parent.mkdir(parents=True, exist_ok=True)
        with open(self.config_path, 'w') as f:
            json.dump(config, f, indent=2)
    
    def _auto_load_context(self):
        """Automatically load context on initialization"""
        if self.config.get("auto_load", True):
            working_dir = Path.cwd()
            self.memory_manager.load_all_contexts(working_dir)
            
            if self.config.get("context", {}).get("show_loaded_count", True):
                count = len(self.memory_manager.loaded_files)
                if count > 0:
                    print(f"📚 Loaded {count} context file(s) automatically")
    
    def get_context(self) -> str:
        """Get current context (passive - no user interaction)"""
        if not self.memory_manager.context_content:
            self._auto_load_context()
        return self.memory_manager.context_content
    
    def auto_checkpoint(self, tool_name: str, file_path: Path = None):
        """Automatically create checkpoint if enabled"""
        if self.config.get("checkpointing", {}).get("auto_create", True):
            return self.checkpoint_manager.create_checkpoint(
                tool_name=tool_name,
                file_path=file_path
            )
        return None
    
    def get_cached_tokens(self, system_instructions: str, context: str):
        """Get cached tokens if available"""
        if self.config.get("token_caching", {}).get("enabled", True):
            return self.token_cache.get_cached_tokens(system_instructions, context)
        return None
    
    def cache_tokens(self, system_instructions: str, context: str, tokens: dict):
        """Cache tokens if enabled"""
        if self.config.get("token_caching", {}).get("auto_cache", True):
            self.token_cache.cache_tokens(system_instructions, context, tokens)
    
    def refresh_context(self):
        """Auto-refresh context if enabled"""
        if self.config.get("auto_refresh", True):
            working_dir = Path.cwd()
            self.memory_manager.refresh_memory(working_dir)
            return True
        return False
    
    @property
    def research_manager(self):
        """Lazy load research manager to avoid circular imports"""
        if self._research_manager is None:
            from research_manager import ResearchManager
            self._research_manager = ResearchManager()
        return self._research_manager
    
    def auto_research(self, query: str, count: int = 10) -> dict:
        """Passive default: Automatically perform research"""
        return self.research_manager.research(query, count)
    
    def auto_research_project(self, project_name: str, topics: list = None) -> dict:
        """Passive default: Automatically research a project"""
        return self.research_manager.research_project(project_name, topics)


# Global instance for passive access
_auto_memory = None

def get_auto_memory() -> AutoMemorySystem:
    """Get or create global auto-memory instance"""
    global _auto_memory
    if _auto_memory is None:
        _auto_memory = AutoMemorySystem()
    return _auto_memory


def auto_load_context() -> str:
    """Passive function to get context - no user interaction"""
    return get_auto_memory().get_context()


def auto_checkpoint(tool_name: str, file_path: Path = None) -> str:
    """Passive function to create checkpoint"""
    return get_auto_memory().auto_checkpoint(tool_name, file_path)


def auto_research(query: str, count: int = 10) -> dict:
    """Passive default: Automatically perform research"""
    return get_auto_memory().auto_research(query, count)


def auto_research_project(project_name: str, topics: list = None) -> dict:
    """Passive default: Automatically research a project"""
    return get_auto_memory().auto_research_project(project_name, topics)


if __name__ == "__main__":
    # Initialize and show status
    system = AutoMemorySystem()
    context = system.get_context()
    
    print("="*70)
    print("AUTO MEMORY SYSTEM - PASSIVE MODE")
    print("="*70)
    print(f"\n✓ Context loaded: {len(context)} characters")
    print(f"✓ Checkpointing: {'Enabled' if system.config['checkpointing']['enabled'] else 'Disabled'}")
    print(f"✓ Token caching: {'Enabled' if system.config['token_caching']['enabled'] else 'Disabled'}")
    print(f"✓ Auto-refresh: {'Enabled' if system.config['auto_refresh'] else 'Disabled'}")
    print("\nSystem ready for passive operation.")
