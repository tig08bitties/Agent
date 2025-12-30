#!/usr/bin/env python3
"""
Efficient Passport Data Processor
Processes /media/Passport data without overloading the system
Uses streaming and chunked processing for large datasets
"""

import os
from pathlib import Path
from typing import Dict, List, Optional, Iterator, Tuple
from collections import defaultdict
import json
from datetime import datetime
import hashlib


class PassportProcessor:
    """Efficient processor for Passport data"""
    
    def __init__(self, source_path: Path, chunk_size: int = 1000):
        self.source = Path(source_path)
        self.chunk_size = chunk_size
        self.processed_files = set()
        self.skip_patterns = {
            '.git', '.node_modules', '__pycache__', '.cache',
            'node_modules', '.venv', 'venv', '.env'
        }
    
    def should_skip(self, path: Path) -> bool:
        """Check if path should be skipped"""
        path_str = str(path)
        return any(pattern in path_str for pattern in self.skip_patterns)
    
    def get_file_hash(self, file_path: Path) -> str:
        """Get hash of file for deduplication"""
        try:
            stat = file_path.stat()
            return hashlib.md5(
                f"{file_path}{stat.st_size}{stat.st_mtime}".encode()
            ).hexdigest()
        except:
            return ""
    
    def process_chunk(self, files: List[Path]) -> Dict:
        """Process a chunk of files"""
        chunk_data = {
            "files": [],
            "total_size": 0,
            "categories": defaultdict(int)
        }
        
        for file_path in files:
            if self.should_skip(file_path):
                continue
            
            try:
                stat = file_path.stat()
                file_hash = self.get_file_hash(file_path)
                
                if file_hash in self.processed_files:
                    continue
                
                self.processed_files.add(file_hash)
                
                file_info = {
                    "name": file_path.name,
                    "path": str(file_path.relative_to(self.source)),
                    "size": stat.st_size,
                    "modified": datetime.fromtimestamp(stat.st_mtime).isoformat(),
                    "extension": file_path.suffix.lower(),
                    "type": self._categorize_file(file_path)
                }
                
                chunk_data["files"].append(file_info)
                chunk_data["total_size"] += stat.st_size
                chunk_data["categories"][file_info["type"]] += 1
                
            except Exception as e:
                # Skip files that can't be accessed
                continue
        
        return chunk_data
    
    def _categorize_file(self, file_path: Path) -> str:
        """Categorize file by type"""
        ext = file_path.suffix.lower()
        name = file_path.name.lower()
        
        if ext in ['.py', '.js', '.ts', '.java', '.cpp', '.c', '.h', '.rs', '.go']:
            return "code"
        elif ext in ['.json', '.yaml', '.yml', '.toml', '.ini', '.conf']:
            return "config"
        elif ext in ['.md', '.txt', '.rst', '.doc', '.docx', '.pdf']:
            return "documentation"
        elif ext in ['.csv', '.xlsx', '.db', '.sqlite', '.sql']:
            return "data"
        elif ext in ['.jpg', '.jpeg', '.png', '.gif', '.mp4', '.avi', '.mp3']:
            return "media"
        elif ext in ['.zip', '.tar', '.gz', '.bz2', '.7z', '.rar']:
            return "archive"
        elif ext in ['.sh', '.bash', '.zsh'] or name.startswith('.'):
            return "script"
        else:
            return "other"
    
    def stream_process(self, max_files: Optional[int] = None) -> Iterator[Dict]:
        """Stream process files in chunks"""
        files_processed = 0
        current_chunk = []
        
        for root, dirs, files in os.walk(self.source):
            root_path = Path(root)
            
            # Skip directories
            if self.should_skip(root_path):
                dirs[:] = []  # Don't descend into skipped dirs
                continue
            
            for file in files:
                if max_files and files_processed >= max_files:
                    break
                
                file_path = root_path / file
                current_chunk.append(file_path)
                
                if len(current_chunk) >= self.chunk_size:
                    chunk_data = self.process_chunk(current_chunk)
                    yield chunk_data
                    files_processed += len(chunk_data["files"])
                    current_chunk = []
            
            if max_files and files_processed >= max_files:
                break
        
        # Process remaining files
        if current_chunk:
            chunk_data = self.process_chunk(current_chunk)
            yield chunk_data
    
    def process_priority_files(self, priority_types: List[str] = None) -> Dict:
        """Process only priority file types"""
        if priority_types is None:
            priority_types = ["code", "config", "documentation"]
        
        result = {
            "files": [],
            "total_size": 0,
            "categories": defaultdict(int)
        }
        
        for root, dirs, files in os.walk(self.source):
            root_path = Path(root)
            
            if self.should_skip(root_path):
                dirs[:] = []
                continue
            
            for file in files:
                file_path = root_path / file
                file_type = self._categorize_file(file_path)
                
                if file_type in priority_types:
                    try:
                        stat = file_path.stat()
                        file_hash = self.get_file_hash(file_path)
                        
                        if file_hash in self.processed_files:
                            continue
                        
                        self.processed_files.add(file_hash)
                        
                        file_info = {
                            "name": file.name,
                            "path": str(file_path.relative_to(self.source)),
                            "size": stat.st_size,
                            "type": file_type
                        }
                        
                        result["files"].append(file_info)
                        result["total_size"] += stat.st_size
                        result["categories"][file_type] += 1
                        
                    except:
                        continue
        
        return result
    
    def find_github_projects(self) -> List[Dict]:
        """Find GitHub-related projects"""
        github_projects = []
        
        for root, dirs, files in os.walk(self.source):
            root_path = Path(root)
            
            # Look for .git directories or github in name
            if '.git' in dirs or 'github' in root_path.name.lower():
                try:
                    rel_path = root_path.relative_to(self.source)
                    github_projects.append({
                        "name": root_path.name,
                        "path": str(rel_path),
                        "full_path": str(root_path),
                        "has_git": '.git' in dirs
                    })
                except:
                    pass
            
            # Don't descend into .git directories
            if '.git' in dirs:
                dirs.remove('.git')
        
        return github_projects
    
    def find_config_files(self) -> List[Dict]:
        """Find configuration files"""
        config_files = []
        config_extensions = {'.json', '.yaml', '.yml', '.toml', '.ini', '.conf', '.env'}
        config_names = {'package.json', 'requirements.txt', 'Pipfile', 'setup.py', 'pyproject.toml'}
        
        for root, dirs, files in os.walk(self.source):
            root_path = Path(root)
            
            if self.should_skip(root_path):
                dirs[:] = []
                continue
            
            for file in files:
                file_path = root_path / file
                if (file_path.suffix.lower() in config_extensions or 
                    file_path.name.lower() in config_names):
                    try:
                        rel_path = file_path.relative_to(self.source)
                        config_files.append({
                            "name": file_path.name,
                            "path": str(rel_path),
                            "full_path": str(file_path),
                            "type": self._categorize_file(file_path)
                        })
                    except:
                        pass
        
        return config_files
    
    def generate_summary(self, output_path: Path):
        """Generate summary report"""
        summary = {
            "timestamp": datetime.now().isoformat(),
            "source_path": str(self.source),
            "github_projects": self.find_github_projects(),
            "config_files": self.find_config_files()[:100],  # Limit to 100
            "priority_files": self.process_priority_files()
        }
        
        with open(output_path, 'w') as f:
            json.dump(summary, f, indent=2, default=str)
        
        return summary


def main():
    """CLI interface"""
    import sys
    
    source = Path("/media/Passport")
    
    if not source.exists():
        print(f"Error: {source} does not exist")
        sys.exit(1)
    
    processor = PassportProcessor(source, chunk_size=1000)
    
    if len(sys.argv) < 2:
        print("Usage: passport_processor.py <command>")
        print("Commands:")
        print("  summary              - Generate summary report")
        print("  github_projects      - Find GitHub projects")
        print("  config_files         - Find configuration files")
        print("  priority_files       - Process priority files only")
        sys.exit(1)
    
    command = sys.argv[1]
    
    if command == "summary":
        output = Path("/root/Halls of Amenti/passport_summary.json")
        summary = processor.generate_summary(output)
        print(f"✓ Summary saved to: {output}")
        print(f"  GitHub projects: {len(summary['github_projects'])}")
        print(f"  Config files: {len(summary['config_files'])}")
        print(f"  Priority files: {len(summary['priority_files']['files'])}")
    
    elif command == "github_projects":
        projects = processor.find_github_projects()
        print(f"Found {len(projects)} GitHub projects:")
        for project in projects:
            print(f"  - {project['name']}: {project['path']}")
    
    elif command == "config_files":
        configs = processor.find_config_files()
        print(f"Found {len(configs)} configuration files:")
        for config in configs[:20]:  # Show first 20
            print(f"  - {config['name']}: {config['path']}")
    
    elif command == "priority_files":
        result = processor.process_priority_files()
        print(f"Processed {len(result['files'])} priority files")
        print(f"Total size: {result['total_size'] / (1024*1024):.2f} MB")
        print("By category:")
        for cat, count in result['categories'].items():
            print(f"  {cat}: {count}")
    
    else:
        print(f"Unknown command: {command}")


if __name__ == "__main__":
    main()
