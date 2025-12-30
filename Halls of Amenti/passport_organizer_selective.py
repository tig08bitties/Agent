#!/usr/bin/env python3
"""
Selective Passport Data Organizer
More conservative approach - focuses on high-priority items only
"""

import os
from pathlib import Path
from typing import Dict, List, Optional
from collections import defaultdict
import json
from datetime import datetime
from passport_processor import PassportProcessor


class SelectivePassportOrganizer:
    """Selective organizer - only processes high-priority items"""
    
    def __init__(self, source_path: Path, target_base: Path = None):
        self.source = Path(source_path)
        self.target_base = target_base or Path("/root/Halls of Amenti/organized_passport")
        self.processor = PassportProcessor(source_path)
        self.organization_plan = {
            "structure": {},
            "migrations": [],
            "statistics": {}
        }
    
    def create_minimal_structure(self):
        """Create minimal organized directory structure"""
        structure = {
            "github_projects": self.target_base / "github_projects",
            "config": self.target_base / "config",
            "docs": self.target_base / "docs",
            "scripts": self.target_base / "scripts"
        }
        
        # Create directories
        for category, path in structure.items():
            path.mkdir(parents=True, exist_ok=True)
        
        self.organization_plan["structure"] = {
            k: str(v) for k, v in structure.items()
        }
        return structure
    
    def find_top_github_projects(self, limit: int = 20) -> List[Dict]:
        """Find only top-level, most relevant GitHub projects"""
        all_projects = self.processor.find_github_projects()
        
        # Filter criteria:
        # 1. Top-level projects (in ALL/ directory directly)
        # 2. Not in node_modules, .pnpm, etc.
        # 3. Has meaningful name
        
        top_projects = []
        seen_names = set()
        
        for project in all_projects:
            path_str = project["path"]
            name = project["name"]
            
            # Skip if already seen
            if name in seen_names:
                continue
            
            # Skip node_modules and similar
            if any(skip in path_str.lower() for skip in [
                'node_modules', '.pnpm', '.cache', '__pycache__', 
                '.git/objects', 'venv', '.venv', 'site-packages'
            ]):
                continue
            
            # Prioritize top-level projects in ALL/
            if path_str.startswith('ALL/') and path_str.count('/') <= 2:
                # Check if it's a real project (has files, not just .git)
                source_path = self.source / path_str
                if source_path.exists() and source_path.is_dir():
                    # Check if it has actual content (not just .git)
                    has_content = False
                    try:
                        for item in source_path.iterdir():
                            if item.name != '.git' and not item.name.startswith('.'):
                                has_content = True
                                break
                    except:
                        pass
                    
                    if has_content:
                        top_projects.append(project)
                        seen_names.add(name)
            
            if len(top_projects) >= limit:
                break
        
        return top_projects
    
    def find_important_configs(self, limit: int = 50) -> List[Dict]:
        """Find only important configuration files"""
        all_configs = self.processor.find_config_files()
        
        important_configs = []
        important_names = {
            'package.json', 'requirements.txt', 'setup.py', 'pyproject.toml',
            'Pipfile', 'Cargo.toml', 'go.mod', 'composer.json',
            'docker-compose.yml', 'Dockerfile', '.env', 'secrets.env',
            'config.json', 'settings.json', 'config.yaml', 'config.yml'
        }
        
        seen_paths = set()
        
        for config in all_configs:
            name = config["name"].lower()
            path_str = config["path"]
            
            # Skip if in node_modules or similar
            if any(skip in path_str.lower() for skip in [
                'node_modules', '.pnpm', '.cache', '__pycache__',
                'site-packages', '.git'
            ]):
                continue
            
            # Check if it's an important config file
            if name in important_names or 'secrets' in name or 'config' in name:
                # Prioritize top-level configs
                if path_str.count('/') <= 3:  # Top 3 levels
                    if path_str not in seen_paths:
                        important_configs.append(config)
                        seen_paths.add(path_str)
            
            if len(important_configs) >= limit:
                break
        
        return important_configs
    
    def find_important_docs(self, limit: int = 100) -> List[Dict]:
        """Find important documentation files"""
        docs = []
        seen_paths = set()
        
        important_extensions = {'.md', '.txt', '.rst', '.pdf'}
        important_names = {'readme', 'license', 'changelog', 'contributing', 'guide', 'docs'}
        
        for root, dirs, files in os.walk(self.source):
            root_path = Path(root)
            
            # Skip common directories
            if any(skip in str(root_path).lower() for skip in [
                'node_modules', '.git', '.pnpm', '.cache', '__pycache__',
                'site-packages', 'venv', '.venv'
            ]):
                dirs[:] = []
                continue
            
            # Limit depth
            depth = len(root_path.relative_to(self.source).parts)
            if depth > 3:
                dirs[:] = []
                continue
            
            for file in files:
                if len(docs) >= limit:
                    break
                
                file_path = root_path / file
                rel_path = str(file_path.relative_to(self.source))
                
                if rel_path in seen_paths:
                    continue
                
                name_lower = file.lower()
                ext = file_path.suffix.lower()
                
                # Check if important doc
                if (ext in important_extensions or 
                    any(imp in name_lower for imp in important_names)):
                    try:
                        stat = file_path.stat()
                        docs.append({
                            "name": file,
                            "path": rel_path,
                            "full_path": str(file_path),
                            "size": stat.st_size
                        })
                        seen_paths.add(rel_path)
                    except:
                        pass
            
            if len(docs) >= limit:
                break
        
        return docs
    
    def generate_selective_plan(self) -> Dict:
        """Generate selective organization plan"""
        print("Creating minimal organization structure...")
        structure = self.create_minimal_structure()
        
        migrations = []
        
        print("Finding top GitHub projects (limit: 20)...")
        github_projects = self.find_top_github_projects(limit=20)
        for project in github_projects:
            source_path = self.source / project["path"]
            if source_path.exists():
                target_path = structure["github_projects"] / project["name"]
                migrations.append({
                    "source": str(source_path),
                    "target": str(target_path),
                    "type": "github_project",
                    "name": project["name"]
                })
        
        print("Finding important config files (limit: 50)...")
        configs = self.find_important_configs(limit=50)
        for config in configs:
            source_path = self.source / config["path"]
            if source_path.exists():
                target_path = structure["config"] / config["name"]
                migrations.append({
                    "source": str(source_path),
                    "target": str(target_path),
                    "type": "config",
                    "name": config["name"]
                })
        
        print("Finding important documentation (limit: 100)...")
        docs = self.find_important_docs(limit=100)
        for doc in docs:
            source_path = self.source / doc["path"]
            if source_path.exists():
                target_path = structure["docs"] / doc["name"]
                migrations.append({
                    "source": str(source_path),
                    "target": str(target_path),
                    "type": "documentation",
                    "name": doc["name"]
                })
        
        # Calculate statistics
        total_size = sum(m.get("size", 0) for m in migrations)
        by_type = defaultdict(int)
        for m in migrations:
            by_type[m["type"]] += 1
        
        self.organization_plan.update({
            "migrations": migrations,
            "statistics": {
                "total_files": len(migrations),
                "total_size": total_size,
                "total_size_mb": total_size / (1024 * 1024),
                "by_type": dict(by_type),
                "github_projects": len([m for m in migrations if m["type"] == "github_project"]),
                "config_files": len([m for m in migrations if m["type"] == "config"]),
                "docs": len([m for m in migrations if m["type"] == "documentation"])
            },
            "timestamp": datetime.now().isoformat()
        })
        
        return self.organization_plan
    
    def save_plan(self, output_path: Path):
        """Save organization plan to JSON"""
        with open(output_path, 'w') as f:
            json.dump(self.organization_plan, f, indent=2, default=str)
    
    def print_summary(self):
        """Print organization summary"""
        stats = self.organization_plan.get("statistics", {})
        
        print("="*70)
        print("SELECTIVE PASSPORT ORGANIZATION SUMMARY")
        print("="*70)
        print(f"\nTotal Items to Organize: {stats.get('total_files', 0)}")
        print(f"Total Size: {stats.get('total_size_mb', 0):.2f} MB")
        print(f"\nBy Type:")
        for file_type, count in stats.get('by_type', {}).items():
            print(f"  {file_type}: {count}")
        print(f"\nTarget Directory: {self.target_base}")
        print("="*70)


def main():
    """CLI interface"""
    import sys
    
    source = Path("/media/Passport")
    target = Path("/root/Halls of Amenti/organized_passport")
    
    if not source.exists():
        print(f"Error: {source} does not exist")
        sys.exit(1)
    
    organizer = SelectivePassportOrganizer(source, target)
    
    if len(sys.argv) < 2:
        print("Usage: passport_organizer_selective.py <command>")
        print("Commands:")
        print("  plan     - Generate selective organization plan")
        print("  summary  - Show organization summary")
        sys.exit(1)
    
    command = sys.argv[1]
    
    if command == "plan":
        print("Generating SELECTIVE organization plan...")
        print("(Only top GitHub projects, important configs, and key docs)")
        plan = organizer.generate_selective_plan()
        
        plan_file = Path("/root/Halls of Amenti/organization_plan_selective.json")
        organizer.save_plan(plan_file)
        
        organizer.print_summary()
        print(f"\n✓ Selective plan saved to: {plan_file}")
    
    elif command == "summary":
        plan_file = Path("/root/Halls of Amenti/organization_plan_selective.json")
        if plan_file.exists():
            with open(plan_file) as f:
                organizer.organization_plan = json.load(f)
            organizer.print_summary()
        else:
            print("No organization plan found. Run 'plan' first.")
    
    else:
        print(f"Unknown command: {command}")


if __name__ == "__main__":
    main()
