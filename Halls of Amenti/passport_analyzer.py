#!/usr/bin/env python3
"""
Passport Data Analyzer
Analyzes and organizes data from /media/Passport by priority and relevance
Prepares for integration to /mnt/Covenant
"""

import os
from pathlib import Path
from collections import defaultdict
from typing import Dict, List, Tuple
import json
import hashlib
from datetime import datetime


class PassportAnalyzer:
    """Analyzes and organizes Passport data"""
    
    def __init__(self, source_path: Path, target_path: Path):
        self.source = Path(source_path)
        self.target = Path(target_path)
        self.analysis = {
            "files": [],
            "directories": [],
            "categories": defaultdict(list),
            "priorities": {"high": [], "medium": [], "low": []},
            "relevance": {"relevant": [], "archive": [], "unknown": []},
            "statistics": {}
        }
    
    def analyze_structure(self):
        """Analyze directory structure and file types"""
        print("Analyzing structure...")
        
        for root, dirs, files in os.walk(self.source):
            root_path = Path(root)
            rel_path = root_path.relative_to(self.source)
            
            # Analyze directories
            if root_path != self.source:
                self.analysis["directories"].append({
                    "path": str(rel_path),
                    "full_path": str(root_path),
                    "depth": len(rel_path.parts),
                    "file_count": len(files)
                })
            
            # Analyze files
            for file in files:
                file_path = root_path / file
                try:
                    stat = file_path.stat()
                    file_info = {
                        "name": file,
                        "path": str(rel_path / file),
                        "full_path": str(file_path),
                        "size": stat.st_size,
                        "modified": datetime.fromtimestamp(stat.st_mtime).isoformat(),
                        "extension": file_path.suffix.lower(),
                        "type": self._categorize_file(file_path)
                    }
                    self.analysis["files"].append(file_info)
                    self._categorize(file_info)
                except Exception as e:
                    print(f"Error analyzing {file_path}: {e}")
    
    def _categorize_file(self, file_path: Path) -> str:
        """Determine file category"""
        ext = file_path.suffix.lower()
        name = file_path.name.lower()
        
        # Code files
        if ext in ['.py', '.js', '.ts', '.java', '.cpp', '.c', '.h', '.rs', '.go']:
            return "code"
        # Config files
        elif ext in ['.json', '.yaml', '.yml', '.toml', '.ini', '.conf', '.config']:
            return "config"
        # Documentation
        elif ext in ['.md', '.txt', '.rst', '.doc', '.docx', '.pdf']:
            return "documentation"
        # Data files
        elif ext in ['.csv', '.xlsx', '.db', '.sqlite', '.sql']:
            return "data"
        # Media files
        elif ext in ['.jpg', '.jpeg', '.png', '.gif', '.mp4', '.avi', '.mp3', '.wav']:
            return "media"
        # Archives
        elif ext in ['.zip', '.tar', '.gz', '.bz2', '.7z', '.rar']:
            return "archive"
        # Scripts
        elif ext in ['.sh', '.bash', '.zsh', '.fish'] or name.startswith('.'):
            return "script"
        else:
            return "other"
    
    def _categorize(self, file_info: Dict):
        """Categorize file by type and determine priority"""
        file_type = file_info["type"]
        self.analysis["categories"][file_type].append(file_info)
        
        # Determine priority
        if file_type in ["code", "config", "documentation"]:
            priority = "high"
        elif file_type in ["data", "script"]:
            priority = "medium"
        else:
            priority = "low"
        
        self.analysis["priorities"][priority].append(file_info)
        
        # Determine relevance
        if file_type in ["code", "config", "documentation", "data", "script"]:
            relevance = "relevant"
        elif file_type == "archive":
            relevance = "archive"
        else:
            relevance = "unknown"
        
        self.analysis["relevance"][relevance].append(file_info)
    
    def calculate_statistics(self):
        """Calculate statistics"""
        total_files = len(self.analysis["files"])
        total_size = sum(f["size"] for f in self.analysis["files"])
        
        by_type = defaultdict(int)
        by_priority = defaultdict(int)
        by_relevance = defaultdict(int)
        
        for file_info in self.analysis["files"]:
            by_type[file_info["type"]] += 1
            # Find priority
            for priority, files in self.analysis["priorities"].items():
                if file_info in files:
                    by_priority[priority] += 1
                    break
            # Find relevance
            for relevance, files in self.analysis["relevance"].items():
                if file_info in files:
                    by_relevance[relevance] += 1
                    break
        
        self.analysis["statistics"] = {
            "total_files": total_files,
            "total_directories": len(self.analysis["directories"]),
            "total_size": total_size,
            "total_size_mb": total_size / (1024 * 1024),
            "by_type": dict(by_type),
            "by_priority": dict(by_priority),
            "by_relevance": dict(by_relevance)
        }
    
    def generate_organization_plan(self) -> Dict:
        """Generate organization plan for /mnt/Covenant"""
        plan = {
            "structure": {
                "high_priority": {
                    "code": "/mnt/Covenant/code",
                    "config": "/mnt/Covenant/config",
                    "documentation": "/mnt/Covenant/docs"
                },
                "medium_priority": {
                    "data": "/mnt/Covenant/data",
                    "scripts": "/mnt/Covenant/scripts"
                },
                "low_priority": {
                    "media": "/mnt/Covenant/media",
                    "archives": "/mnt/Covenant/archives",
                    "other": "/mnt/Covenant/other"
                }
            },
            "migration": []
        }
        
        # Create migration plan
        for file_info in self.analysis["files"]:
            file_type = file_info["type"]
            target_dir = None
            
            if file_type == "code":
                target_dir = plan["structure"]["high_priority"]["code"]
            elif file_type == "config":
                target_dir = plan["structure"]["high_priority"]["config"]
            elif file_type == "documentation":
                target_dir = plan["structure"]["high_priority"]["documentation"]
            elif file_type == "data":
                target_dir = plan["structure"]["medium_priority"]["data"]
            elif file_type == "script":
                target_dir = plan["structure"]["medium_priority"]["scripts"]
            elif file_type == "media":
                target_dir = plan["structure"]["low_priority"]["media"]
            elif file_type == "archive":
                target_dir = plan["structure"]["low_priority"]["archives"]
            else:
                target_dir = plan["structure"]["low_priority"]["other"]
            
            plan["migration"].append({
                "source": file_info["full_path"],
                "target": f"{target_dir}/{file_info['name']}",
                "type": file_type,
                "priority": self._get_priority(file_info),
                "size": file_info["size"]
            })
        
        return plan
    
    def _get_priority(self, file_info: Dict) -> str:
        """Get priority for file"""
        for priority, files in self.analysis["priorities"].items():
            if file_info in files:
                return priority
        return "low"
    
    def save_analysis(self, output_path: Path):
        """Save analysis to JSON"""
        with open(output_path, 'w') as f:
            json.dump(self.analysis, f, indent=2, default=str)
    
    def print_summary(self):
        """Print analysis summary"""
        stats = self.analysis["statistics"]
        
        print("="*70)
        print("PASSPORT DATA ANALYSIS SUMMARY")
        print("="*70)
        print(f"\nTotal Files: {stats['total_files']}")
        print(f"Total Directories: {stats['total_directories']}")
        print(f"Total Size: {stats['total_size_mb']:.2f} MB")
        print(f"\nBy Type:")
        for file_type, count in stats['by_type'].items():
            print(f"  {file_type}: {count}")
        print(f"\nBy Priority:")
        for priority, count in stats['by_priority'].items():
            print(f"  {priority}: {count}")
        print(f"\nBy Relevance:")
        for relevance, count in stats['by_relevance'].items():
            print(f"  {relevance}: {count}")
        print("="*70)


def main():
    """Main analysis function"""
    import sys
    
    source = Path("/media/Passport")
    target = Path("/mnt/Covenant")
    
    if not source.exists():
        print(f"Error: {source} does not exist")
        sys.exit(1)
    
    analyzer = PassportAnalyzer(source, target)
    
    print("Starting analysis of /media/Passport...")
    analyzer.analyze_structure()
    analyzer.calculate_statistics()
    analyzer.print_summary()
    
    # Generate organization plan
    plan = analyzer.generate_organization_plan()
    
    # Save analysis
    analysis_file = Path("/root/Halls of Amenti/passport_analysis.json")
    analyzer.save_analysis(analysis_file)
    
    # Save organization plan
    plan_file = Path("/root/Halls of Amenti/covenant_organization_plan.json")
    with open(plan_file, 'w') as f:
        json.dump(plan, f, indent=2)
    
    print(f"\n✓ Analysis saved to: {analysis_file}")
    print(f"✓ Organization plan saved to: {plan_file}")
    print("\nReady for integration to /mnt/Covenant")


if __name__ == "__main__":
    main()
