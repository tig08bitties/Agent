#!/usr/bin/env python3
"""
Research Manager
Handles all project research via Brave Browser API web search
"""

from brave_search_tool import BraveSearchTool
from typing import List, Dict, Optional


class ResearchManager:
    """Manages research tasks using Brave Browser API"""
    
    def __init__(self):
        self.brave_tool = BraveSearchTool()
    
    def research(self, query: str, count: int = 10) -> Dict:
        """Perform web research using Brave Browser API (passive default)"""
        result = self.brave_tool.execute({
            "query": query,
            "count": count,
            "safesearch": "moderate"
        })
        
        if result.success:
            return {
                "success": True,
                "query": query,
                "results": result.llm_content,
                "display": result.return_display
            }
        else:
            return {
                "success": False,
                "error": result.error if hasattr(result, 'error') else "Unknown error",
                "display": result.return_display
            }
    
    def research_multiple(self, queries: List[str], count_per_query: int = 10) -> List[Dict]:
        """Perform multiple research queries"""
        results = []
        for query in queries:
            result = self.research(query, count_per_query)
            results.append(result)
        return results
    
    def research_project(self, project_name: str, topics: List[str] = None) -> Dict:
        """Research a project with multiple related topics"""
        if topics is None:
            # Default research topics
            topics = [
                f"{project_name} documentation",
                f"{project_name} best practices",
                f"{project_name} examples",
                f"{project_name} tutorials"
            ]
        
        query = f"Research project: {project_name}"
        results = self.research_multiple(topics, count_per_query=5)
        
        return {
            "project": project_name,
            "queries": topics,
            "results": results,
            "summary": f"Researched {len(topics)} topics for {project_name}"
        }


def research(query: str, count: int = 10) -> Dict:
    """Passive function for web research"""
    manager = ResearchManager()
    return manager.research(query, count)


if __name__ == "__main__":
    import sys
    
    manager = ResearchManager()
    
    if len(sys.argv) < 2:
        print("Usage: research_manager.py <query> [count]")
        print("Example: research_manager.py 'Python async programming' 10")
        sys.exit(1)
    
    query = sys.argv[1]
    count = int(sys.argv[2]) if len(sys.argv) > 2 else 10
    
    result = manager.research(query, count)
    
    if result["success"]:
        print(result["display"])
    else:
        print(f"Error: {result['error']}")
        sys.exit(1)
