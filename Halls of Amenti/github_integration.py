#!/usr/bin/env python3
"""
GitHub Integration for Replit Bots and Cloudagents
Provides access to GitHub repositories, replit bots, and cloudagents
"""

import os
import json
import subprocess
from pathlib import Path
from typing import Dict, List, Optional, Any
import requests
from tools_api import BaseTool, ToolResult


class GitHubIntegration:
    """GitHub integration for accessing repositories, replit bots, and cloudagents"""
    
    def __init__(self, token: Optional[str] = None):
        self.token = token or self._load_token()
        self.base_url = "https://api.github.com"
        self.headers = {
            "Authorization": f"token {self.token}",
            "Accept": "application/vnd.github.v3+json"
        }
        self.username = "tig08bitties"
    
    def _load_token(self) -> str:
        """Load GitHub token from secrets.env"""
        secrets_file = Path("/media/Passport/secrets.env")
        if secrets_file.exists():
            content = secrets_file.read_text()
            for line in content.split('\n'):
                if line.startswith('GITHUB_TOKEN='):
                    return line.split('=', 1)[1].strip().strip('"')
        # Fallback to environment variable
        return os.getenv("GITHUB_TOKEN", "")
    
    def list_repositories(self, username: Optional[str] = None) -> List[Dict]:
        """List all repositories for a user"""
        username = username or self.username
        url = f"{self.base_url}/users/{username}/repos"
        
        try:
            response = requests.get(url, headers=self.headers)
            response.raise_for_status()
            repos = response.json()
            return repos
        except Exception as e:
            print(f"Error listing repositories: {e}")
            return []
    
    def get_repository(self, owner: str, repo: str) -> Optional[Dict]:
        """Get repository information"""
        url = f"{self.base_url}/repos/{owner}/{repo}"
        
        try:
            response = requests.get(url, headers=self.headers)
            response.raise_for_status()
            return response.json()
        except Exception as e:
            print(f"Error getting repository: {e}")
            return None
    
    def find_replit_bots(self, username: Optional[str] = None) -> List[Dict]:
        """Find repositories that are replit bots"""
        repos = self.list_repositories(username)
        bots = []
        
        for repo in repos:
            name = repo.get("name", "").lower()
            description = repo.get("description", "").lower()
            
            if any(keyword in name or keyword in description 
                   for keyword in ["replit", "bot", "agent", "cloudagent"]):
                bots.append(repo)
        
        return bots
    
    def find_cloudagents(self, username: Optional[str] = None) -> List[Dict]:
        """Find cloudagent repositories"""
        repos = self.list_repositories(username)
        agents = []
        
        for repo in repos:
            name = repo.get("name", "").lower()
            description = repo.get("description", "").lower()
            topics = [t.lower() for t in repo.get("topics", [])]
            
            if any(keyword in name or keyword in description or keyword in topics
                   for keyword in ["cloudagent", "cloud-agent", "agent", "ai-agent"]):
                agents.append(repo)
        
        return agents
    
    def clone_repository(self, owner: str, repo: str, target_path: Path) -> bool:
        """Clone a repository to local path"""
        url = f"https://{self.token}@github.com/{owner}/{repo}.git"
        target_path = Path(target_path)
        target_path.parent.mkdir(parents=True, exist_ok=True)
        
        try:
            subprocess.run(
                ["git", "clone", url, str(target_path)],
                check=True,
                capture_output=True
            )
            return True
        except subprocess.CalledProcessError as e:
            print(f"Error cloning repository: {e}")
            return False
    
    def get_repository_contents(self, owner: str, repo: str, path: str = "") -> List[Dict]:
        """Get contents of a repository path"""
        url = f"{self.base_url}/repos/{owner}/{repo}/contents/{path}"
        
        try:
            response = requests.get(url, headers=self.headers)
            response.raise_for_status()
            return response.json()
        except Exception as e:
            print(f"Error getting repository contents: {e}")
            return []
    
    def get_file_content(self, owner: str, repo: str, path: str) -> Optional[str]:
        """Get file content from repository"""
        url = f"{self.base_url}/repos/{owner}/{repo}/contents/{path}"
        
        try:
            response = requests.get(url, headers=self.headers)
            response.raise_for_status()
            data = response.json()
            
            if data.get("type") == "file":
                import base64
                content = base64.b64decode(data["content"]).decode("utf-8")
                return content
            return None
        except Exception as e:
            print(f"Error getting file content: {e}")
            return None
    
    def search_repositories(self, query: str, username: Optional[str] = None) -> List[Dict]:
        """Search repositories"""
        username = username or self.username
        url = f"{self.base_url}/search/repositories"
        params = {"q": f"{query} user:{username}"}
        
        try:
            response = requests.get(url, headers=self.headers, params=params)
            response.raise_for_status()
            data = response.json()
            return data.get("items", [])
        except Exception as e:
            print(f"Error searching repositories: {e}")
            return []
    
    def get_repository_info_summary(self, owner: str, repo: str) -> Dict:
        """Get comprehensive repository information"""
        repo_info = self.get_repository(owner, repo)
        if not repo_info:
            return {}
        
        contents = self.get_repository_contents(owner, repo)
        
        return {
            "name": repo_info.get("name"),
            "full_name": repo_info.get("full_name"),
            "description": repo_info.get("description"),
            "language": repo_info.get("language"),
            "topics": repo_info.get("topics", []),
            "stars": repo_info.get("stargazers_count", 0),
            "forks": repo_info.get("forks_count", 0),
            "url": repo_info.get("html_url"),
            "clone_url": repo_info.get("clone_url"),
            "created_at": repo_info.get("created_at"),
            "updated_at": repo_info.get("updated_at"),
            "files": [item.get("name") for item in contents if item.get("type") == "file"][:20],
            "directories": [item.get("name") for item in contents if item.get("type") == "dir"]
        }


class GitHubTool(BaseTool):
    """Tool for GitHub operations"""
    
    def __init__(self):
        self.github = GitHubIntegration()
        super().__init__()
    
    def get_name(self) -> str:
        return "github"
    
    def get_display_name(self) -> str:
        return "GitHub Integration"
    
    def get_description(self) -> str:
        return "Access GitHub repositories, replit bots, and cloudagents"
    
    def get_parameter_schema(self) -> Dict:
        return {
            "type": "object",
            "properties": {
                "action": {
                    "type": "string",
                    "enum": ["list_repos", "find_replit_bots", "find_cloudagents", 
                            "get_repo", "clone", "get_file", "search"],
                    "description": "Action to perform"
                },
                "owner": {
                    "type": "string",
                    "description": "Repository owner (default: tig08bitties)"
                },
                "repo": {
                    "type": "string",
                    "description": "Repository name"
                },
                "path": {
                    "type": "string",
                    "description": "File or directory path in repository"
                },
                "query": {
                    "type": "string",
                    "description": "Search query"
                },
                "target_path": {
                    "type": "string",
                    "description": "Local path for cloning"
                }
            },
            "required": ["action"]
        }
    
    def execute(self, params: Dict, abort_signal: Optional[Any] = None) -> ToolResult:
        """Execute GitHub operation"""
        action = params.get("action")
        
        try:
            if action == "list_repos":
                repos = self.github.list_repositories(params.get("owner"))
                return ToolResult(
                    llm_content=f"Found {len(repos)} repositories",
                    return_display=json.dumps([r["name"] for r in repos], indent=2),
                    success=True
                )
            
            elif action == "find_replit_bots":
                bots = self.github.find_replit_bots(params.get("owner"))
                return ToolResult(
                    llm_content=f"Found {len(bots)} replit bots",
                    return_display=json.dumps([{"name": b["name"], "url": b["html_url"]} for b in bots], indent=2),
                    success=True
                )
            
            elif action == "find_cloudagents":
                agents = self.github.find_cloudagents(params.get("owner"))
                return ToolResult(
                    llm_content=f"Found {len(agents)} cloudagents",
                    return_display=json.dumps([{"name": a["name"], "url": a["html_url"]} for a in agents], indent=2),
                    success=True
                )
            
            elif action == "get_repo":
                owner = params.get("owner", "tig08bitties")
                repo = params.get("repo")
                if not repo:
                    return ToolResult(
                        llm_content="Error: repo parameter required",
                        return_display="Error: repo parameter required",
                        success=False,
                        error="Missing repo parameter"
                    )
                info = self.github.get_repository_info_summary(owner, repo)
                return ToolResult(
                    llm_content=json.dumps(info, indent=2),
                    return_display=json.dumps(info, indent=2),
                    success=True
                )
            
            elif action == "clone":
                owner = params.get("owner", "tig08bitties")
                repo = params.get("repo")
                target_path = params.get("target_path")
                if not repo or not target_path:
                    return ToolResult(
                        llm_content="Error: repo and target_path required",
                        return_display="Error: repo and target_path required",
                        success=False,
                        error="Missing parameters"
                    )
                success = self.github.clone_repository(owner, repo, Path(target_path))
                return ToolResult(
                    llm_content=f"Clone {'successful' if success else 'failed'}",
                    return_display=f"Clone {'successful' if success else 'failed'}",
                    success=success
                )
            
            elif action == "get_file":
                owner = params.get("owner", "tig08bitties")
                repo = params.get("repo")
                path = params.get("path")
                if not repo or not path:
                    return ToolResult(
                        llm_content="Error: repo and path required",
                        return_display="Error: repo and path required",
                        success=False,
                        error="Missing parameters"
                    )
                content = self.github.get_file_content(owner, repo, path)
                if content:
                    return ToolResult(
                        llm_content=content,
                        return_display=content[:1000] + ("..." if len(content) > 1000 else ""),
                        success=True
                    )
                else:
                    return ToolResult(
                        llm_content="File not found or error",
                        return_display="File not found or error",
                        success=False,
                        error="File not found"
                    )
            
            elif action == "search":
                query = params.get("query", "")
                results = self.github.search_repositories(query, params.get("owner"))
                return ToolResult(
                    llm_content=f"Found {len(results)} repositories",
                    return_display=json.dumps([{"name": r["name"], "url": r["html_url"]} for r in results], indent=2),
                    success=True
                )
            
            else:
                return ToolResult(
                    llm_content=f"Unknown action: {action}",
                    return_display=f"Unknown action: {action}",
                    success=False,
                    error=f"Unknown action: {action}"
                )
        
        except Exception as e:
            return ToolResult(
                llm_content=f"Error: {str(e)}",
                return_display=f"Error: {str(e)}",
                success=False,
                error=str(e)
            )


def main():
    """CLI interface"""
    import sys
    
    github = GitHubIntegration()
    
    if len(sys.argv) < 2:
        print("Usage: github_integration.py <command> [args...]")
        print("Commands:")
        print("  list_repos [username]     - List repositories")
        print("  find_replit_bots           - Find replit bots")
        print("  find_cloudagents           - Find cloudagents")
        print("  get_repo <owner> <repo>    - Get repository info")
        sys.exit(1)
    
    command = sys.argv[1]
    
    if command == "list_repos":
        username = sys.argv[2] if len(sys.argv) > 2 else None
        repos = github.list_repositories(username)
        print(f"Found {len(repos)} repositories:")
        for repo in repos:
            print(f"  - {repo['name']}: {repo.get('description', 'No description')}")
    
    elif command == "find_replit_bots":
        bots = github.find_replit_bots()
        print(f"Found {len(bots)} replit bots:")
        for bot in bots:
            print(f"  - {bot['name']}: {bot.get('html_url')}")
    
    elif command == "find_cloudagents":
        agents = github.find_cloudagents()
        print(f"Found {len(agents)} cloudagents:")
        for agent in agents:
            print(f"  - {agent['name']}: {agent.get('html_url')}")
    
    elif command == "get_repo":
        if len(sys.argv) < 4:
            print("Error: get_repo requires owner and repo")
            sys.exit(1)
        owner = sys.argv[2]
        repo = sys.argv[3]
        info = github.get_repository_info_summary(owner, repo)
        print(json.dumps(info, indent=2))
    
    else:
        print(f"Unknown command: {command}")


if __name__ == "__main__":
    main()
