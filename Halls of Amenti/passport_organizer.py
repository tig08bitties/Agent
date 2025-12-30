#!/usr/bin/env python3
"""
Passport Data Organizer
Extracts and organizes data from /media/Passport into structured directories
"""

import os
import shutil
from pathlib import Path
from typing import Dict, List, Optional, Tuple
from collections import defaultdict
import json
from datetime import datetime
from passport_processor import PassportProcessor


class PassportOrganizer:
    """Organizes Passport data into structured directories"""
    
    def __init__(self, source_path: Path, target_base: Path = None):
        self.source = Path(source_path)
        self.target_base = target_base or Path("/root/Halls of Amenti/organized_passport")
        self.processor = PassportProcessor(source_path)
        self.organization_plan = {
            "structure": {},
            "migrations": [],
            "statistics": {}
        }
    
    def create_organization_structure(self):
        """Create organized directory structure"""
        structure = {
            "code": self.target_base / "code",
            "config": self.target_base / "config",
            "documentation": self.target_base / "docs",
            "data": self.target_base / "data",
            "scripts": self.target_base / "scripts",
            "github_projects": self.target_base / "github_projects",
            "media": self.target_base / "media",
            "archives": self.target_base / "archives",
            "other": self.target_base / "other"
        }
        
        # Create directories
        for category, path in structure.items():
            path.mkdir(parents=True, exist_ok=True)
        
        self.organization_plan["structure"] = {
            k: str(v) for k, v in structure.items()
        }
        return structure
    
    def organize_github_projects(self, structure: Dict) -> List[Dict]:
        """Organize GitHub projects"""
        github_projects = self.processor.find_github_projects()
        migrations = []
        
        github_dir = structure["github_projects"]
        
        # Filter out node_modules and other non-project directories
        real_projects = []
        for project in github_projects:
            path_str = project["path"]
            # Skip if in node_modules or similar
            if any(skip in path_str.lower() for skip in ['node_modules', '.pnpm', '.cache', '__pycache__']):
                continue
            # Prioritize top-level projects
            if path_str.count('/') <= 2:
                real_projects.append(project)
        
        # Limit to most relevant projects
        for project in real_projects[:100]:  # Top 100 projects
            source_path = self.source / project["path"]
            if source_path.exists() and source_path.is_dir():
                target_path = github_dir / project["name"]
                migrations.append({
                    "source": str(source_path),
                    "target": str(target_path),
                    "type": "github_project",
                    "name": project["name"]
                })
        
        return migrations
    
    def organize_config_files(self, structure: Dict) -> List[Dict]:
        """Organize configuration files"""
        config_files = self.processor.find_config_files()
        migrations = []
        
        config_dir = structure["config"]
        
        # Organize by type
        by_type = defaultdict(list)
        for config in config_files:
            config_type = self._get_config_type(config)
            by_type[config_type].append(config)
        
        # Create subdirectories and organize
        for config_type, files in by_type.items():
            type_dir = config_dir / config_type
            type_dir.mkdir(parents=True, exist_ok=True)
            
            for config in files[:50]:  # Limit per type
                source_path = self.source / config["path"]
                if source_path.exists():
                    target_path = type_dir / config["name"]
                    migrations.append({
                        "source": str(source_path),
                        "target": str(target_path),
                        "type": "config",
                        "config_type": config_type
                    })
        
        return migrations
    
    def _get_config_type(self, config: Dict) -> str:
        """Get configuration file type"""
        name = config["name"].lower()
        path = config["path"].lower()
        
        if 'package.json' in name or 'package-lock.json' in name:
            return "nodejs"
        elif 'requirements.txt' in name or 'setup.py' in name or 'pyproject.toml' in name:
            return "python"
        elif '.env' in name or 'secrets' in name:
            return "secrets"
        elif 'docker' in name or 'compose' in name:
            return "docker"
        elif '.yaml' in name or '.yml' in name:
            return "yaml"
        elif '.json' in name:
            return "json"
        else:
            return "other"
    
    def organize_priority_files(self, structure: Dict, max_files: int = 1000) -> List[Dict]:
        """Organize priority files (code, docs)"""
        migrations = []
        
        # Process in chunks to avoid overload
        files_processed = 0
        for chunk in self.processor.stream_process(max_files=max_files):
            for file_info in chunk["files"]:
                if files_processed >= max_files:
                    break
                
                file_type = file_info["type"]
                source_path = self.source / file_info["path"]
                
                if not source_path.exists():
                    continue
                
                # Determine target directory
                if file_type == "code":
                    target_dir = structure["code"]
                elif file_type == "documentation":
                    target_dir = structure["documentation"]
                elif file_type == "config":
                    target_dir = structure["config"]
                elif file_type == "script":
                    target_dir = structure["scripts"]
                elif file_type == "data":
                    target_dir = structure["data"]
                elif file_type == "media":
                    target_dir = structure["media"]
                elif file_type == "archive":
                    target_dir = structure["archives"]
                else:
                    target_dir = structure["other"]
                
                # Create subdirectory by extension if needed
                ext = file_info.get("extension", "")
                if ext and file_type == "code":
                    ext_dir = target_dir / ext[1:] if ext.startswith('.') else target_dir / ext
                    ext_dir.mkdir(parents=True, exist_ok=True)
                    target_path = ext_dir / file_info["name"]
                else:
                    target_path = target_dir / file_info["name"]
                
                migrations.append({
                    "source": str(source_path),
                    "target": str(target_path),
                    "type": file_type,
                    "size": file_info.get("size", 0)
                })
                
                files_processed += 1
            
            if files_processed >= max_files:
                break
        
        return migrations
    
    def generate_organization_plan(self, max_files: int = 5000) -> Dict:
        """Generate complete organization plan"""
        print("Creating organization structure...")
        structure = self.create_organization_structure()
        
        print("Organizing GitHub projects...")
        github_migrations = self.organize_github_projects(structure)
        
        print("Organizing configuration files...")
        config_migrations = self.organize_config_files(structure)
        
        print("Organizing priority files...")
        priority_migrations = self.organize_priority_files(structure, max_files=max_files)
        
        # Combine all migrations
        all_migrations = github_migrations + config_migrations + priority_migrations
        
        # Calculate statistics
        total_size = sum(m.get("size", 0) for m in all_migrations)
        by_type = defaultdict(int)
        for m in all_migrations:
            by_type[m["type"]] += 1
        
        self.organization_plan.update({
            "migrations": all_migrations,
            "statistics": {
                "total_files": len(all_migrations),
                "total_size": total_size,
                "total_size_mb": total_size / (1024 * 1024),
                "by_type": dict(by_type),
                "github_projects": len(github_migrations),
                "config_files": len(config_migrations),
                "priority_files": len(priority_migrations)
            },
            "timestamp": datetime.now().isoformat()
        })
        
        return self.organization_plan
    
    def save_plan(self, output_path: Path):
        """Save organization plan to JSON"""
        with open(output_path, 'w') as f:
            json.dump(self.organization_plan, f, indent=2, default=str)
    
    def execute_migration(self, dry_run: bool = True, limit: Optional[int] = None) -> Dict:
        """Execute the migration plan"""
        results = {
            "success": [],
            "failed": [],
            "skipped": []
        }
        
        migrations = self.organization_plan.get("migrations", [])
        if limit:
            migrations = migrations[:limit]
        
        for i, migration in enumerate(migrations):
            if i % 100 == 0:
                print(f"Processing migration {i+1}/{len(migrations)}...")
            
            source = Path(migration["source"])
            target = Path(migration["target"])
            
            if not source.exists():
                results["skipped"].append({
                    "source": str(source),
                    "reason": "Source does not exist"
                })
                continue
            
            if dry_run:
                results["success"].append({
                    "source": str(source),
                    "target": str(target),
                    "type": migration.get("type", "unknown")
                })
            else:
                try:
                    # Create target directory
                    target.parent.mkdir(parents=True, exist_ok=True)
                    
                    # Copy file
                    if source.is_file():
                        shutil.copy2(source, target)
                    elif source.is_dir():
                        shutil.copytree(source, target, dirs_exist_ok=True)
                    
                    results["success"].append({
                        "source": str(source),
                        "target": str(target)
                    })
                except Exception as e:
                    results["failed"].append({
                        "source": str(source),
                        "target": str(target),
                        "error": str(e)
                    })
        
        return results
    
    def print_summary(self):
        """Print organization summary"""
        stats = self.organization_plan.get("statistics", {})
        
        print("="*70)
        print("PASSPORT ORGANIZATION SUMMARY")
        print("="*70)
        print(f"\nTotal Files to Organize: {stats.get('total_files', 0)}")
        print(f"Total Size: {stats.get('total_size_mb', 0):.2f} MB")
        print(f"\nBy Type:")
        for file_type, count in stats.get('by_type', {}).items():
            print(f"  {file_type}: {count}")
        print(f"\nGitHub Projects: {stats.get('github_projects', 0)}")
        print(f"Config Files: {stats.get('config_files', 0)}")
        print(f"Priority Files: {stats.get('priority_files', 0)}")
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
    
    organizer = PassportOrganizer(source, target)
    
    if len(sys.argv) < 2:
        print("Usage: passport_organizer.py <command> [options]")
        print("Commands:")
        print("  plan [max_files]     - Generate organization plan")
        print("  dry_run [limit]      - Test migration (dry run)")
        print("  execute [limit]      - Execute migration (copies files)")
        print("  summary              - Show organization summary")
        sys.exit(1)
    
    command = sys.argv[1]
    
    if command == "plan":
        max_files = int(sys.argv[2]) if len(sys.argv) > 2 else 5000
        print(f"Generating organization plan (max {max_files} files)...")
        plan = organizer.generate_organization_plan(max_files=max_files)
        
        plan_file = Path("/root/Halls of Amenti/organization_plan.json")
        organizer.save_plan(plan_file)
        
        organizer.print_summary()
        print(f"\n✓ Plan saved to: {plan_file}")
    
    elif command == "dry_run":
        # Load existing plan or generate new one
        plan_file = Path("/root/Halls of Amenti/organization_plan.json")
        if plan_file.exists():
            with open(plan_file) as f:
                organizer.organization_plan = json.load(f)
        
        limit = int(sys.argv[2]) if len(sys.argv) > 2 else None
        print("Running dry run (no files will be copied)...")
        results = organizer.execute_migration(dry_run=True, limit=limit)
        
        print(f"\n✓ Would process {len(results['success'])} files")
        print(f"  Skipped: {len(results['skipped'])}")
        if results['failed']:
            print(f"  Failed: {len(results['failed'])}")
    
    elif command == "execute":
        # Load existing plan
        plan_file = Path("/root/Halls of Amenti/organization_plan.json")
        if not plan_file.exists():
            print("Error: No organization plan found. Run 'plan' first.")
            sys.exit(1)
        
        with open(plan_file) as f:
            organizer.organization_plan = json.load(f)
        
        limit = int(sys.argv[2]) if len(sys.argv) > 2 else None
        print("Executing migration (files will be copied)...")
        results = organizer.execute_migration(dry_run=False, limit=limit)
        
        print(f"\n✓ Processed {len(results['success'])} files")
        print(f"  Failed: {len(results['failed'])}")
        print(f"  Skipped: {len(results['skipped'])}")
        
        # Save results
        results_file = Path("/root/Halls of Amenti/migration_results.json")
        with open(results_file, 'w') as f:
            json.dump(results, f, indent=2, default=str)
        print(f"\n✓ Results saved to: {results_file}")
    
    elif command == "summary":
        plan_file = Path("/root/Halls of Amenti/organization_plan.json")
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
