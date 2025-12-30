#!/usr/bin/env python3
"""
Cursor Agent Checkpoint Manager
Automatically saves project state before file modifications
Mirrors Gemini CLI checkpointing functionality
"""

import os
import json
import shutil
import subprocess
from pathlib import Path
from datetime import datetime
from typing import Optional, Dict, List
import hashlib


class CheckpointManager:
    """Manages checkpoints for safe file modifications"""
    
    def __init__(self, enabled: bool = True):
        self.enabled = enabled
        self.home_dir = Path.home()
        self.history_dir = self.home_dir / ".cursor" / "history"
        self.tmp_dir = self.home_dir / ".cursor" / "tmp"
        self.current_checkpoint: Optional[str] = None
        
    def _get_project_hash(self, project_path: Path) -> str:
        """Generate a hash for the project path"""
        path_str = str(project_path.resolve())
        return hashlib.sha256(path_str.encode()).hexdigest()[:16]
    
    def _get_project_paths(self, working_dir: Path) -> tuple:
        """Get project root and hash"""
        project_root = self._find_project_root(working_dir)
        project_hash = self._get_project_hash(project_root)
        return project_root, project_hash
    
    def _find_project_root(self, start_path: Path) -> Path:
        """Find project root by looking for .git directory"""
        current = start_path.resolve()
        
        while current != current.parent:
            if (current / ".git").exists():
                return current
            current = current.parent
        
        return start_path.resolve()
    
    def _init_shadow_repo(self, project_hash: str, project_root: Path) -> Path:
        """Initialize or get shadow Git repository"""
        shadow_repo = self.history_dir / project_hash
        shadow_repo.mkdir(parents=True, exist_ok=True)
        
        git_dir = shadow_repo / ".git"
        
        if not git_dir.exists():
            # Initialize shadow repository
            subprocess.run(
                ["git", "init", "--bare"],
                cwd=shadow_repo,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
                check=False
            )
        
        return shadow_repo
    
    def _create_git_snapshot(self, project_root: Path, shadow_repo: Path) -> bool:
        """Create a Git snapshot in shadow repository"""
        try:
            # Create a temporary worktree
            temp_worktree = shadow_repo.parent / f"worktree_{datetime.now().timestamp()}"
            
            # Create worktree
            result = subprocess.run(
                ["git", "worktree", "add", str(temp_worktree), "--detach"],
                cwd=shadow_repo,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
                check=False
            )
            
            if result.returncode != 0:
                # If worktree fails, try direct init
                if not (temp_worktree / ".git").exists():
                    subprocess.run(
                        ["git", "init"],
                        cwd=temp_worktree,
                        stdout=subprocess.DEVNULL,
                        stderr=subprocess.DEVNULL,
                        check=False
                    )
            
            # Copy project files (excluding .git)
            for item in project_root.iterdir():
                if item.name == ".git":
                    continue
                dest = temp_worktree / item.name
                if item.is_dir():
                    if dest.exists():
                        shutil.rmtree(dest)
                    shutil.copytree(item, dest, ignore=shutil.ignore_patterns('.git', '__pycache__', '*.pyc'))
                else:
                    shutil.copy2(item, dest)
            
            # Add and commit
            subprocess.run(
                ["git", "add", "-A"],
                cwd=temp_worktree,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
                check=False
            )
            
            subprocess.run(
                ["git", "commit", "-m", f"Checkpoint: {datetime.now().isoformat()}"],
                cwd=temp_worktree,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
                check=False
            )
            
            # Cleanup worktree
            if temp_worktree.exists():
                shutil.rmtree(temp_worktree)
            
            return True
        except Exception as e:
            print(f"Warning: Could not create Git snapshot: {e}")
            return False
    
    def create_checkpoint(
        self,
        tool_name: str,
        file_path: Optional[Path] = None,
        conversation_history: Optional[List] = None,
        tool_call: Optional[Dict] = None,
        working_dir: Optional[Path] = None
    ) -> Optional[str]:
        """Create a checkpoint before file modification"""
        if not self.enabled:
            return None
        
        if working_dir is None:
            working_dir = Path.cwd()
        
        project_root, project_hash = self._get_project_paths(working_dir)
        shadow_repo = self._init_shadow_repo(project_hash, project_root)
        
        # Create Git snapshot
        self._create_git_snapshot(project_root, shadow_repo)
        
        # Create checkpoint metadata
        timestamp = datetime.now().strftime("%Y-%m-%dT%H-%M-%S_%fZ")
        file_name = file_path.name if file_path else "unknown"
        checkpoint_name = f"{timestamp}-{file_name}-{tool_name}"
        
        checkpoint_dir = self.tmp_dir / project_hash / "checkpoints"
        checkpoint_dir.mkdir(parents=True, exist_ok=True)
        
        checkpoint_data = {
            "timestamp": timestamp,
            "tool_name": tool_name,
            "file_path": str(file_path) if file_path else None,
            "project_root": str(project_root),
            "project_hash": project_hash,
            "conversation_history": conversation_history or [],
            "tool_call": tool_call or {},
            "checkpoint_name": checkpoint_name
        }
        
        checkpoint_file = checkpoint_dir / f"{checkpoint_name}.json"
        with open(checkpoint_file, 'w') as f:
            json.dump(checkpoint_data, f, indent=2)
        
        self.current_checkpoint = checkpoint_name
        return checkpoint_name
    
    def list_checkpoints(self, working_dir: Optional[Path] = None) -> List[str]:
        """List all available checkpoints for current project"""
        if working_dir is None:
            working_dir = Path.cwd()
        
        _, project_hash = self._get_project_paths(working_dir)
        checkpoint_dir = self.tmp_dir / project_hash / "checkpoints"
        
        if not checkpoint_dir.exists():
            return []
        
        checkpoints = []
        for checkpoint_file in sorted(checkpoint_dir.glob("*.json"), reverse=True):
            checkpoints.append(checkpoint_file.stem)
        
        return checkpoints
    
    def restore_checkpoint(self, checkpoint_name: str, working_dir: Optional[Path] = None) -> bool:
        """Restore project to a specific checkpoint"""
        if working_dir is None:
            working_dir = Path.cwd()
        
        _, project_hash = self._get_project_paths(working_dir)
        checkpoint_dir = self.tmp_dir / project_hash / "checkpoints"
        checkpoint_file = checkpoint_dir / f"{checkpoint_name}.json"
        
        if not checkpoint_file.exists():
            return False
        
        with open(checkpoint_file, 'r') as f:
            checkpoint_data = json.load(f)
        
        project_root = Path(checkpoint_data["project_root"])
        shadow_repo = self.history_dir / project_hash
        
        # Restore from Git snapshot
        try:
            # Find the commit for this checkpoint
            temp_worktree = shadow_repo.parent / f"restore_{datetime.now().timestamp()}"
            
            # Get the latest commit
            result = subprocess.run(
                ["git", "log", "--oneline", "-1"],
                cwd=shadow_repo,
                capture_output=True,
                text=True,
                check=False
            )
            
            if result.returncode == 0 and result.stdout.strip():
                # Checkout the commit
                subprocess.run(
                    ["git", "worktree", "add", str(temp_worktree), "HEAD"],
                    cwd=shadow_repo,
                    stdout=subprocess.DEVNULL,
                    stderr=subprocess.DEVNULL,
                    check=False
                )
                
                # Restore files
                for item in temp_worktree.iterdir():
                    if item.name == ".git":
                        continue
                    dest = project_root / item.name
                    if item.is_dir():
                        if dest.exists():
                            shutil.rmtree(dest)
                        shutil.copytree(item, dest)
                    else:
                        if dest.exists():
                            dest.unlink()
                        shutil.copy2(item, dest)
                
                # Cleanup
                if temp_worktree.exists():
                    shutil.rmtree(temp_worktree)
            
            return True
        except Exception as e:
            print(f"Error restoring checkpoint: {e}")
            return False


def main():
    """CLI interface for checkpoint management"""
    import sys
    
    manager = CheckpointManager()
    
    if len(sys.argv) < 2:
        print("Usage: checkpoint_manager.py <command> [args...]")
        print("Commands:")
        print("  list              - List available checkpoints")
        print("  restore <name>    - Restore a checkpoint")
        print("  create <tool> <file> - Create a checkpoint")
        sys.exit(1)
    
    command = sys.argv[1]
    
    if command == "list":
        checkpoints = manager.list_checkpoints()
        if checkpoints:
            print("Available checkpoints:")
            for cp in checkpoints:
                print(f"  - {cp}")
        else:
            print("No checkpoints found.")
    elif command == "restore":
        if len(sys.argv) < 3:
            print("Error: /restore requires checkpoint name")
            sys.exit(1)
        checkpoint_name = sys.argv[2]
        if manager.restore_checkpoint(checkpoint_name):
            print(f"✓ Restored checkpoint: {checkpoint_name}")
        else:
            print(f"✗ Failed to restore checkpoint: {checkpoint_name}")
    elif command == "create":
        if len(sys.argv) < 4:
            print("Error: /restore create requires tool name and file path")
            sys.exit(1)
        tool_name = sys.argv[2]
        file_path = Path(sys.argv[3])
        checkpoint = manager.create_checkpoint(tool_name, file_path)
        if checkpoint:
            print(f"✓ Created checkpoint: {checkpoint}")
        else:
            print("✗ Failed to create checkpoint")
    else:
        print(f"Unknown command: {command}")


if __name__ == "__main__":
    main()
