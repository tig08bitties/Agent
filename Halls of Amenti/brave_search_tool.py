#!/usr/bin/env python3
"""
Brave Browser Search Tool for Cursor Agent
Uses Brave Browser API for web search functionality
"""

import os
import json
import urllib.request
import urllib.parse
import gzip
from pathlib import Path
from typing import Dict, List, Optional, Any

from tools_api import BaseTool, ToolResult


class BraveSearchTool(BaseTool):
    """Tool for searching the web using Brave Browser API"""
    
    def __init__(self):
        super().__init__()
        self.api_key = self._load_api_key()
        self.base_url = "https://api.search.brave.com/res/v1/web/search"
    
    def _load_api_key(self) -> str:
        """Load Brave API key from secrets.env"""
        secrets_file = Path("/Keys/secrets.env")
        if secrets_file.exists():
            with open(secrets_file, 'r') as f:
                for line in f:
                    line = line.strip()
                    if line.startswith("BRAVE_API_KEY="):
                        return line.split("=", 1)[1].strip()
        
        # Fallback to environment variable
        return os.getenv("BRAVE_API_KEY", "")
    
    def get_name(self) -> str:
        return "brave_search"
    
    def get_display_name(self) -> str:
        return "Brave Web Search"
    
    def get_description(self) -> str:
        return (
            "Search the web using Brave Browser API. Use this for all project research. "
            "Returns relevant web results with titles, URLs, and snippets. "
            "All projects should be researched via web search through this tool."
        )
    
    def get_parameter_schema(self) -> Dict:
        return {
            "type": "object",
            "properties": {
                "query": {
                    "type": "string",
                    "description": "The search query to execute"
                },
                "count": {
                    "type": "integer",
                    "description": "Number of results to return (default: 10, max: 20)",
                    "default": 10,
                    "minimum": 1,
                    "maximum": 20
                },
                "safesearch": {
                    "type": "string",
                    "description": "Safe search setting: off, moderate, or strict",
                    "enum": ["off", "moderate", "strict"],
                    "default": "moderate"
                }
            },
            "required": ["query"]
        }
    
    def _search_brave(self, query: str, count: int = 10, safesearch: str = "moderate") -> Dict:
        """Execute search using Brave Browser API"""
        if not self.api_key:
            raise ValueError("Brave API key not found. Check /Keys/secrets.env")
        
        params = {
            "q": query,
            "count": min(count, 20),  # Max 20 results
            "safesearch": safesearch
        }
        
        url = f"{self.base_url}?{urllib.parse.urlencode(params)}"
        
        req = urllib.request.Request(
            url,
            headers={
                "Accept": "application/json",
                "Accept-Encoding": "gzip",
                "X-Subscription-Token": self.api_key
            }
        )
        
        try:
            with urllib.request.urlopen(req, timeout=10) as response:
                # Handle gzip compression
                content = response.read()
                # Check if response is gzipped (magic number or Content-Encoding header)
                try:
                    if content[:2] == b'\x1f\x8b':  # Gzip magic number
                        content = gzip.decompress(content)
                except:
                    # If decompression fails, try to decode as-is
                    pass
                data = json.loads(content.decode('utf-8'))
                return data
        except urllib.error.HTTPError as e:
            error_body = e.read().decode('utf-8')
            raise Exception(f"Brave API error: {e.code} - {error_body}")
        except Exception as e:
            raise Exception(f"Search error: {str(e)}")
    
    def _format_results(self, api_response: Dict, query: str) -> str:
        """Format API response for display"""
        results = []
        
        # Extract web results
        web_results = api_response.get("web", {}).get("results", [])
        
        if not web_results:
            return f"No results found for query: {query}"
        
        results.append(f"## Web Search Results for: {query}\n")
        results.append(f"Found {len(web_results)} result(s)\n\n")
        
        for i, result in enumerate(web_results, 1):
            title = result.get("title", "No title")
            url = result.get("url", "")
            description = result.get("description", "No description")
            
            results.append(f"### {i}. {title}")
            results.append(f"**URL:** {url}")
            results.append(f"**Description:** {description}\n")
        
        return "\n".join(results)
    
    def execute(self, params: Dict, abort_signal: Optional[Any] = None) -> ToolResult:
        """Execute web search"""
        query = params.get("query", "")
        count = params.get("count", 10)
        safesearch = params.get("safesearch", "moderate")
        
        if not query:
            return ToolResult(
                llm_content="No search query provided",
                return_display="Error: Search query is required",
                success=False,
                error="Missing query parameter"
            )
        
        try:
            # Execute search
            api_response = self._search_brave(query, count, safesearch)
            
            # Format results
            formatted = self._format_results(api_response, query)
            
            # Create LLM content with structured data
            llm_content = {
                "query": query,
                "results": api_response.get("web", {}).get("results", []),
                "formatted": formatted
            }
            
            return ToolResult(
                llm_content=json.dumps(llm_content, indent=2),
                return_display=formatted,
                success=True
            )
        
        except Exception as e:
            return ToolResult(
                llm_content=f"Search error: {str(e)}",
                return_display=f"Error executing search: {str(e)}",
                success=False,
                error=str(e)
            )


def main():
    """CLI interface for Brave search tool"""
    import sys
    
    tool = BraveSearchTool()
    
    if len(sys.argv) < 2:
        print("Usage: brave_search_tool.py <query> [count] [safesearch]")
        print("Example: brave_search_tool.py 'Python async programming' 10 moderate")
        sys.exit(1)
    
    query = sys.argv[1]
    count = int(sys.argv[2]) if len(sys.argv) > 2 else 10
    safesearch = sys.argv[3] if len(sys.argv) > 3 else "moderate"
    
    params = {
        "query": query,
        "count": count,
        "safesearch": safesearch
    }
    
    result = tool.execute(params)
    
    if result.success:
        print(result.return_display)
    else:
        print(f"Error: {result.error}")
        print(result.return_display)
        sys.exit(1)


if __name__ == "__main__":
    main()
