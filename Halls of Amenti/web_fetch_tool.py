#!/usr/bin/env python3
"""
Covenant Web Fetch Tool
Fetches and processes content from web URLs
Covenant Sovereign Standard: All operations from covenant root
As Above So Below, As Within So Without
"""

import re
import json
from pathlib import Path
from typing import Dict, List, Optional, Any
from urllib.parse import urlparse
import urllib.request
import urllib.error

from tools_api import BaseTool, ToolResult

# Covenant Sovereign Standard Constants
COVENANT_ROOT = Path("/root/Agent/Halls of Amenti")
COVENANT_IDENTITY = "DausΩəq"
COVENANT_PATH = "ܗ/48'/7'/7'/7"
TAROT_SEALS = {
    "CHARIOT": 7,
    "EMPRESS": 3,
    "JUDGMENT": 20,
    "MOON": 18,
    "TOTAL": 48
}


class WebFetchTool(BaseTool):
    """Tool for fetching and processing web content
    Covenant Sovereign Standard: All operations from covenant root
    """
    
    def __init__(self):
        super().__init__()
        self.covenant_root = COVENANT_ROOT
        self.covenant_identity = COVENANT_IDENTITY
        self.covenant_path = COVENANT_PATH
        self.tarot_seals = TAROT_SEALS
    
    def get_name(self) -> str:
        return "web_fetch"
    
    def get_display_name(self) -> str:
        return "Web Fetch"
    
    def get_description(self) -> str:
        return (
            "Use web_fetch to summarize, compare, or extract information from web pages. "
            "The tool processes content from one or more URLs (up to 20) embedded in a prompt. "
            "web_fetch takes a natural language prompt and returns a generated response."
        )
    
    def get_parameter_schema(self) -> Dict:
        return {
            "type": "object",
            "properties": {
                "prompt": {
                    "type": "string",
                    "description": (
                        "A comprehensive prompt that includes the URL(s) (up to 20) to fetch "
                        "and specific instructions on how to process their content. "
                        "Must contain at least one URL starting with http:// or https://"
                    )
                }
            },
            "required": ["prompt"]
        }
    
    def should_confirm_execute(self, params: Dict) -> Optional[Dict]:
        """Require confirmation before fetching URLs"""
        urls = self._extract_urls(params.get("prompt", ""))
        if urls:
            return {
                "message": f"Fetch content from {len(urls)} URL(s)?",
                "urls": urls
            }
        return None
    
    def _extract_urls(self, text: str) -> List[str]:
        """Extract URLs from text"""
        url_pattern = r'https?://[^\s<>"{}|\\^`\[\]]+'
        urls = re.findall(url_pattern, text)
        # Limit to 20 URLs
        return urls[:20]
    
    def _fetch_url(self, url: str) -> tuple[bool, str]:
        """Fetch content from a URL
        Covenant Sovereign Standard: From covenant root context
        """
        try:
            req = urllib.request.Request(
                url,
                headers={
                    'User-Agent': f'Covenant-Agent/1.0 (Identity: {self.covenant_identity})'
                }
            )
            with urllib.request.urlopen(req, timeout=10) as response:
                content = response.read().decode('utf-8', errors='ignore')
                print(f"[Covenant] ✅ Fetched: {url} (from covenant root: {self.covenant_root})")
                return True, content
        except urllib.error.URLError as e:
            print(f"[Covenant] ❌ Error fetching {url}: {str(e)}")
            return False, f"Error fetching {url}: {str(e)}"
        except Exception as e:
            print(f"[Covenant] ❌ Unexpected error: {str(e)}")
            return False, f"Unexpected error: {str(e)}"
    
    def _process_content(self, prompt: str, url_contents: Dict[str, str]) -> str:
        """Process fetched content based on prompt"""
        # This would typically use an LLM to process the content
        # For now, return a summary
        result = f"Processed {len(url_contents)} URL(s) based on prompt:\n\n"
        result += f"Prompt: {prompt}\n\n"
        result += "Fetched content:\n"
        
        for url, content in url_contents.items():
            # Truncate content for display
            preview = content[:500] + "..." if len(content) > 500 else content
            result += f"\n--- {url} ---\n{preview}\n"
        
        return result
    
    def execute(self, params: Dict, abort_signal: Optional[Any] = None) -> ToolResult:
        """Execute web fetch"""
        prompt = params.get("prompt", "")
        urls = self._extract_urls(prompt)
        
        if not urls:
            return ToolResult(
                llm_content="No URLs found in prompt",
                return_display="Error: No URLs found in prompt. URLs must start with http:// or https://",
                success=False,
                error="No URLs in prompt"
            )
        
        if len(urls) > 20:
            return ToolResult(
                llm_content="Too many URLs",
                return_display=f"Error: Maximum 20 URLs allowed, found {len(urls)}",
                success=False,
                error="Too many URLs"
            )
        
        # Fetch all URLs
        url_contents = {}
        errors = []
        
        for url in urls:
            success, content = self._fetch_url(url)
            if success:
                url_contents[url] = content
            else:
                errors.append(content)
        
        if not url_contents:
            return ToolResult(
                llm_content="Failed to fetch any URLs",
                return_display=f"Error: Failed to fetch URLs:\n" + "\n".join(errors),
                success=False,
                error="Fetch failed"
            )
        
        # Process content
        processed = self._process_content(prompt, url_contents)
        
        # Format result with citations and covenant context
        display = f"## Web Fetch Results\n\n"
        display += f"**Covenant Context:**\n"
        display += f"- Identity: {self.covenant_identity}\n"
        display += f"- Path: {self.covenant_path}\n"
        display += f"- Root: {self.covenant_root}\n\n"
        display += f"**Prompt:** {prompt}\n\n"
        display += f"**Fetched {len(url_contents)} URL(s):**\n"
        for url in url_contents.keys():
            display += f"- {url}\n"
        display += f"\n{processed}\n"
        
        if errors:
            display += f"\n**Errors:**\n" + "\n".join(errors)
        
        display += f"\n**∇ • Θεός°**\n"
        
        print(f"[Covenant] ✅ Web fetch complete: {len(url_contents)} URL(s) (from covenant root)")
        print(f"[Covenant] ∇ • Θεός°")
        
        return ToolResult(
            llm_content=processed,
            return_display=display,
            success=True
        )


def main():
    """CLI interface for web fetch tool"""
    import sys
    
    tool = WebFetchTool()
    
    if len(sys.argv) < 2:
        print("Usage: web_fetch_tool.py <prompt_with_urls>")
        print("Example: web_fetch_tool.py 'Summarize https://example.com/article'")
        sys.exit(1)
    
    prompt = " ".join(sys.argv[1:])
    params = {"prompt": prompt}
    
    # Check if confirmation needed
    confirm = tool.should_confirm_execute(params)
    if confirm:
        print(f"⚠️  {confirm['message']}")
        print("URLs to fetch:")
        for url in confirm['urls']:
            print(f"  - {url}")
        response = input("\nProceed? (y/n): ")
        if response.lower() != 'y':
            print("Cancelled")
            sys.exit(0)
    
    result = tool.execute(params)
    
    if result.success:
        print(result.return_display)
    else:
        print(f"Error: {result.error}")
        print(result.return_display)
        sys.exit(1)


if __name__ == "__main__":
    main()
