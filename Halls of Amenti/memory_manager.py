#!/usr/bin/env python3
"""
Cursor Agent Memory Manager
Manages hierarchical context files (CURSOR.md) similar to GEMINI.md system
"""

import os
import re
from pathlib import Path
from typing import List, Dict, Optional
import fnmatch


class MemoryManager:
    """Manages CURSOR.md context files in hierarchical order"""
    
    def __init__(self, context_filename: str = "CURSOR.md"):
        self.context_filename = context_filename
        self.home_dir = Path.home()
        self.global_context_path = self.home_dir / ".cursor" / context_filename
        self.loaded_files: List[Path] = []
        self.context_content: str = ""
        
    def find_project_root(self, start_path: Path) -> Optional[Path]:
        """Find project root by looking for .git directory"""
        current = start_path.resolve()
        
        while current != current.parent:
            if (current / ".git").exists():
                return current
            current = current.parent
        
        return start_path.resolve()
    
    def should_ignore(self, path: Path, ignore_patterns: List[str]) -> bool:
        """Check if path should be ignored based on .gitignore/.cursorignore patterns"""
        path_str = str(path)
        for pattern in ignore_patterns:
            if fnmatch.fnmatch(path_str, pattern) or fnmatch.fnmatch(path.name, pattern):
                return True
        return False
    
    def load_ignore_patterns(self, directory: Path) -> List[str]:
        """Load ignore patterns from .gitignore and .cursorignore"""
        patterns = []
        
        for ignore_file in [".gitignore", ".cursorignore"]:
            ignore_path = directory / ignore_file
            if ignore_path.exists():
                with open(ignore_path, 'r') as f:
                    for line in f:
                        line = line.strip()
                        if line and not line.startswith('#'):
                            patterns.append(line)
        
        return patterns
    
    def load_global_context(self) -> Optional[str]:
        """Load global context from ~/.cursor/CURSOR.md"""
        if self.global_context_path.exists():
            with open(self.global_context_path, 'r', encoding='utf-8') as f:
                content = f.read()
                self.loaded_files.append(self.global_context_path)
                return f"# Global Context ({self.global_context_path})\n\n{content}\n"
        return None
    
    def load_ancestor_contexts(self, start_path: Path, project_root: Path) -> List[str]:
        """Load CURSOR.md files from current directory up to project root"""
        contexts = []
        current = start_path.resolve()
        project_root = project_root.resolve()
        
        # Walk from current directory up to project root
        while current != project_root.parent:
            context_file = current / self.context_filename
            if context_file.exists() and context_file not in self.loaded_files:
                with open(context_file, 'r', encoding='utf-8') as f:
                    content = f.read()
                    contexts.append(f"# Context: {context_file.relative_to(project_root)}\n\n{content}\n")
                    self.loaded_files.append(context_file)
            
            if current == current.parent:
                break
            current = current.parent
        
        return contexts
    
    def load_subdirectory_contexts(self, directory: Path, project_root: Path, ignore_patterns: List[str]) -> List[str]:
        """Load CURSOR.md files from subdirectories"""
        contexts = []
        
        for root, dirs, files in os.walk(directory):
            root_path = Path(root)
            
            # Skip if should be ignored
            if self.should_ignore(root_path, ignore_patterns):
                dirs[:] = []  # Don't recurse into ignored directories
                continue
            
            # Check for context file
            context_file = root_path / self.context_filename
            if context_file.exists() and context_file not in self.loaded_files:
                with open(context_file, 'r', encoding='utf-8') as f:
                    content = f.read()
                    rel_path = context_file.relative_to(project_root)
                    contexts.append(f"# Context: {rel_path}\n\n{content}\n")
                    self.loaded_files.append(context_file)
        
        return contexts
    
    def process_imports(self, content: str, base_path: Path) -> str:
        """Process @file.md import statements"""
        lines = content.split('\n')
        result = []
        
        for line in lines:
            # Match @./path/to/file.md or @../path/to/file.md
            match = re.match(r'^@(.+\.md)$', line.strip())
            if match:
                import_path = match.group(1)
                # Resolve relative to current file
                if import_path.startswith('./'):
                    import_path = base_path / import_path[2:]
                elif import_path.startswith('../'):
                    import_path = base_path.parent / import_path[3:]
                else:
                    import_path = base_path / import_path
                
                import_path = import_path.resolve()
                
                if import_path.exists():
                    with open(import_path, 'r', encoding='utf-8') as f:
                        imported_content = f.read()
                        # Recursively process imports in imported file
                        imported_content = self.process_imports(imported_content, import_path.parent)
                        result.append(f"\n<!-- Imported from {import_path.relative_to(base_path)} -->\n")
                        result.append(imported_content)
                        result.append(f"\n<!-- End import from {import_path.relative_to(base_path)} -->\n")
                else:
                    result.append(f"<!-- WARNING: Import file not found: {import_path} -->\n")
            else:
                result.append(line)
        
        return '\n'.join(result)
    
    def load_all_contexts(self, working_directory: Optional[Path] = None) -> str:
        """Load all context files in hierarchical order"""
        if working_directory is None:
            working_directory = Path.cwd()
        else:
            working_directory = Path(working_directory)
        
        self.loaded_files = []
        contexts = []
        
        # 1. Load global context
        global_ctx = self.load_global_context()
        if global_ctx:
            contexts.append(global_ctx)
        
        # 2. Find project root
        project_root = self.find_project_root(working_directory)
        
        # 3. Load ancestor contexts (current dir up to project root)
        ancestor_contexts = self.load_ancestor_contexts(working_directory, project_root)
        contexts.extend(ancestor_contexts)
        
        # 4. Load subdirectory contexts
        ignore_patterns = self.load_ignore_patterns(project_root)
        subdir_contexts = self.load_subdirectory_contexts(working_directory, project_root, ignore_patterns)
        contexts.extend(subdir_contexts)
        
        # 5. Process imports in all contexts
        processed_contexts = []
        for ctx in contexts:
            # Extract the file path from the context header if possible
            # For simplicity, process imports relative to project root
            processed = self.process_imports(ctx, project_root)
            processed_contexts.append(processed)
        
        # 6. Concatenate all contexts
        self.context_content = '\n\n---\n\n'.join(processed_contexts)
        
        return self.context_content
    
    def show_memory(self) -> str:
        """Display the full concatenated content of current hierarchical memory"""
        if not self.context_content:
            self.load_all_contexts()
        
        header = f"""
{'='*70}
CURSOR AGENT MEMORY - Loaded {len(self.loaded_files)} context file(s)
{'='*70}

Loaded files:
"""
        for i, file_path in enumerate(self.loaded_files, 1):
            header += f"  {i}. {file_path}\n"
        
        header += f"\n{'='*70}\nCONTEXT CONTENT:\n{'='*70}\n\n"
        
        return header + self.context_content
    
    def refresh_memory(self, working_directory: Optional[Path] = None) -> str:
        """Force re-scan and reload of all CURSOR.md files"""
        self.context_content = ""
        self.loaded_files = []
        return self.load_all_contexts(working_directory)
    
    def add_to_global(self, text: str) -> str:
        """Append text to global ~/.cursor/CURSOR.md file"""
        # Ensure .cursor directory exists
        cursor_dir = self.home_dir / ".cursor"
        cursor_dir.mkdir(exist_ok=True)
        
        # Append to global context file
        with open(self.global_context_path, 'a', encoding='utf-8') as f:
            f.write(f"\n\n{text}\n")
        
        return f"Added to global context: {self.global_context_path}"


def main():
    """CLI interface for memory management"""
    import sys
    
    manager = MemoryManager()
    
    if len(sys.argv) < 2:
        print("Usage: memory_manager.py <command> [args...]")
        print("Commands:")
        print("  show      - Display current memory")
        print("  refresh   - Reload all context files")
        print("  add <text> - Add text to global context")
        sys.exit(1)
    
    command = sys.argv[1]
    
    if command == "show":
        print(manager.show_memory())
    elif command == "refresh":
        manager.refresh_memory()
        print(f"Refreshed memory. Loaded {len(manager.loaded_files)} context file(s).")
    elif command == "add":
        if len(sys.argv) < 3:
            print("Error: /memory add requires text to add")
            sys.exit(1)
        text = " ".join(sys.argv[2:])
        result = manager.add_to_global(text)
        print(result)
    else:
        print(f"Unknown command: {command}")
        sys.exit(1)


if __name__ == "__main__":
    main()
