#!/usr/bin/env python3
"""
Root Directory Path Memory
Covenant Sovereign Standard: Path reference system

Provides fast path lookup and directory structure access
All paths mapped from /root directory tree
"""

from pathlib import Path
from typing import Dict, List, Optional, Any
import json

# Covenant Sovereign Standard Constants
COVENANT_ROOT = Path("/root/Agent/Halls of Amenti")
ROOT_PATH_MAP_FILE = COVENANT_ROOT / ".covenant" / "ROOT_PATH_MAP.json"
ROOT_TREE_FILE = COVENANT_ROOT / ".covenant" / "ROOT_DIRECTORY_TREE.txt"

class RootPathMemory:
    """Memory system for /root directory paths
    Covenant Sovereign Standard: All operations from covenant root
    """
    
    def __init__(self):
        self.covenant_root = COVENANT_ROOT
        self.path_map_file = ROOT_PATH_MAP_FILE
        self.tree_file = ROOT_TREE_FILE
        self._path_map: Optional[Dict] = None
        self._tree_text: Optional[str] = None
    
    def load_path_map(self) -> Dict:
        """Load path map from JSON file"""
        if self._path_map is None:
            if self.path_map_file.exists():
                with open(self.path_map_file, 'r', encoding='utf-8') as f:
                    self._path_map = json.load(f)
            else:
                self._path_map = {}
        return self._path_map
    
    def load_tree_text(self) -> str:
        """Load tree text representation"""
        if self._tree_text is None:
            if self.tree_file.exists():
                with open(self.tree_file, 'r', encoding='utf-8') as f:
                    self._tree_text = f.read()
            else:
                self._tree_text = ""
        return self._tree_text
    
    def find_path(self, pattern: str) -> List[Dict]:
        """Find paths matching pattern"""
        path_map = self.load_path_map()
        results = []
        
        # Search in file index
        for rel_path, info in path_map.get('file_index', {}).items():
            if pattern.lower() in rel_path.lower() or pattern.lower() in info.get('full_path', '').lower():
                results.append({
                    'type': 'file',
                    'relative_path': rel_path,
                    'full_path': info.get('full_path'),
                    'extension': info.get('extension'),
                    'size': info.get('size', 0)
                })
        
        # Search in directory index
        for rel_path, info in path_map.get('directory_index', {}).items():
            if pattern.lower() in rel_path.lower() or pattern.lower() in info.get('full_path', '').lower():
                results.append({
                    'type': 'directory',
                    'relative_path': rel_path,
                    'full_path': info.get('full_path')
                })
        
        return results
    
    def get_directory_structure(self, rel_path: str = ".") -> Optional[Dict]:
        """Get directory structure for a path"""
        path_map = self.load_path_map()
        
        if rel_path == ".":
            return path_map.get('structure', {})
        
        # Navigate to path in structure
        parts = Path(rel_path).parts
        current = path_map.get('structure', {})
        
        for part in parts:
            if part in current:
                current = current[part].get('children', {})
            else:
                return None
        
        return current
    
    def get_stats(self) -> Dict:
        """Get statistics about /root directory"""
        path_map = self.load_path_map()
        return path_map.get('stats', {})
    
    def search_by_extension(self, extension: str) -> List[Dict]:
        """Find all files with specific extension"""
        path_map = self.load_path_map()
        results = []
        
        ext = extension.lower()
        if not ext.startswith('.'):
            ext = '.' + ext
        
        for rel_path, info in path_map.get('file_index', {}).items():
            if info.get('extension', '').lower() == ext:
                results.append({
                    'relative_path': rel_path,
                    'full_path': info.get('full_path'),
                    'size': info.get('size', 0)
                })
        
        return results
    
    def get_tree_text(self) -> str:
        """Get tree text representation"""
        return self.load_tree_text()
    
    def path_exists(self, rel_path: str) -> bool:
        """Check if path exists in map"""
        path_map = self.load_path_map()
        return rel_path in path_map.get('file_index', {}) or rel_path in path_map.get('directory_index', {})


# Global instance
_root_path_memory = None

def get_root_path_memory() -> RootPathMemory:
    """Get or create global root path memory instance"""
    global _root_path_memory
    if _root_path_memory is None:
        _root_path_memory = RootPathMemory()
    return _root_path_memory


def main():
    """CLI interface"""
    import sys
    
    memory = get_root_path_memory()
    
    if len(sys.argv) < 2:
        print("Root Path Memory - Covenant Sovereign Standard")
        print("=" * 80)
        print("\nUsage:")
        print("  root_path_memory.py find <pattern>     - Find paths matching pattern")
        print("  root_path_memory.py tree [path]        - Show tree for path")
        print("  root_path_memory.py stats              - Show statistics")
        print("  root_path_memory.py ext <extension>    - Find files by extension")
        print("  root_path_memory.py exists <path>      - Check if path exists")
        sys.exit(0)
    
    command = sys.argv[1]
    
    if command == "find":
        if len(sys.argv) < 3:
            print("Error: Pattern required")
            sys.exit(1)
        pattern = sys.argv[2]
        results = memory.find_path(pattern)
        print(f"Found {len(results)} matches:")
        for r in results[:50]:  # Limit to 50 results
            print(f"  [{r['type']}] {r.get('relative_path', r.get('full_path'))}")
    
    elif command == "tree":
        rel_path = sys.argv[2] if len(sys.argv) > 2 else "."
        structure = memory.get_directory_structure(rel_path)
        if structure:
            print(json.dumps(structure, indent=2, default=str))
        else:
            print(f"Path not found: {rel_path}")
    
    elif command == "stats":
        stats = memory.get_stats()
        print("Root Directory Statistics:")
        print(f"  Total directories: {stats.get('total_dirs', 0):,}")
        print(f"  Total files: {stats.get('total_files', 0):,}")
        print(f"  File extensions: {len(stats.get('by_extension', {}))}")
        print("\nTop extensions:")
        ext_counts = sorted(stats.get('by_extension', {}).items(), key=lambda x: x[1], reverse=True)
        for ext, count in ext_counts[:10]:
            print(f"  {ext or '(no extension)'}: {count:,}")
    
    elif command == "ext":
        if len(sys.argv) < 3:
            print("Error: Extension required")
            sys.exit(1)
        extension = sys.argv[2]
        results = memory.search_by_extension(extension)
        print(f"Found {len(results)} files with extension '{extension}':")
        for r in results[:50]:  # Limit to 50 results
            print(f"  {r['relative_path']}")
    
    elif command == "exists":
        if len(sys.argv) < 3:
            print("Error: Path required")
            sys.exit(1)
        rel_path = sys.argv[2]
        exists = memory.path_exists(rel_path)
        print(f"Path exists: {exists}")
    
    else:
        print(f"Unknown command: {command}")


if __name__ == "__main__":
    main()
