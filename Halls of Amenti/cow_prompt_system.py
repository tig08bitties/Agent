#!/usr/bin/env python3
"""
Cow Easter Egg Prompt System
Uses cow easter eggs (apt-get moo, etc.) as prompts for Sphinx documentation
and knowledge gathering from sacred-texts.com and waybackmachine.org
"""

import subprocess
import re
from pathlib import Path
from typing import Dict, List, Optional
from web_fetch_tool import WebFetchTool
from brave_search_tool import BraveSearchTool


class CowPromptSystem:
    """System that uses cow easter eggs as prompts for documentation and research"""
    
    def __init__(self):
        self.web_fetch = WebFetchTool()
        self.brave_search = BraveSearchTool()
        self.sacred_texts_base = "https://sacred-texts.com"
        self.wayback_base = "https://web.archive.org"
    
    def get_cow_prompt(self, level: int = 1) -> str:
        """Get cow easter egg output as prompt"""
        try:
            if level == 1:
                result = subprocess.run(
                    ["apt-get", "moo"],
                    capture_output=True,
                    text=True,
                    timeout=5
                )
            elif level == 2:
                result = subprocess.run(
                    ["apt-get", "moo", "moo"],
                    capture_output=True,
                    text=True,
                    timeout=5
                )
            elif level >= 3:
                result = subprocess.run(
                    ["apt-get"] + ["moo"] * level,
                    capture_output=True,
                    text=True,
                    timeout=5
                )
            else:
                return ""
            
            return result.stdout.strip()
        except:
            return ""
    
    def parse_cow_prompt(self, cow_output: str) -> Dict:
        """Parse cow easter egg output for documentation prompts"""
        # Extract meaningful patterns from cow output
        prompts = {
            "cow_level": self._detect_cow_level(cow_output),
            "moo_count": cow_output.count("moo") + cow_output.count("Moo") + cow_output.count("MOO"),
            "has_super_cow": "m00h" in cow_output or "super" in cow_output.lower(),
            "raw_output": cow_output
        }
        return prompts
    
    def _detect_cow_level(self, output: str) -> int:
        """Detect which level of cow easter egg"""
        if "m00h" in output:
            return 3  # Super cow
        elif "super" in output.lower() or len(output) > 200:
            return 2  # Enhanced cow
        else:
            return 1  # Regular cow
    
    def generate_sphinx_prompt(self, cow_prompt: Dict, project_context: str = "") -> str:
        """Generate Sphinx documentation prompt from cow easter egg"""
        level = cow_prompt.get("cow_level", 1)
        moo_count = cow_prompt.get("moo_count", 0)
        
        prompts = []
        
        if level >= 3:
            prompts.append("Generate comprehensive Sphinx documentation with:")
            prompts.append("- Complete API reference")
            prompts.append("- Detailed examples")
            prompts.append("- Advanced usage patterns")
            prompts.append("- Integration guides")
        elif level >= 2:
            prompts.append("Generate enhanced Sphinx documentation with:")
            prompts.append("- API reference")
            prompts.append("- Usage examples")
            prompts.append("- Best practices")
        else:
            prompts.append("Generate basic Sphinx documentation with:")
            prompts.append("- Overview")
            prompts.append("- Quick start")
            prompts.append("- Basic examples")
        
        if project_context:
            prompts.append(f"\nProject context: {project_context}")
        
        return "\n".join(prompts)
    
    def fetch_sacred_texts(self, topic: str, path: str = "") -> Dict:
        """Fetch knowledge from sacred-texts.com"""
        if path:
            url = f"{self.sacred_texts_base}/{path}"
        else:
            # Search for topic
            url = f"{self.sacred_texts_base}/search.htm?q={topic}"
        
        result = self.web_fetch.execute({
            "prompt": f"Extract and summarize knowledge about '{topic}' from {url}. Focus on relevant information for documentation and project context."
        })
        
        return {
            "source": "sacred-texts.com",
            "url": url,
            "topic": topic,
            "result": result
        }
    
    def fetch_wayback(self, url: str, timestamp: str = "") -> Dict:
        """Fetch historical content from Wayback Machine"""
        if timestamp:
            wayback_url = f"{self.wayback_base}/web/{timestamp}/{url}"
        else:
            # Get latest snapshot
            wayback_url = f"{self.wayback_base}/web/*/{url}"
        
        result = self.web_fetch.execute({
            "prompt": f"Retrieve and analyze historical content from {wayback_url}. Extract relevant knowledge, patterns, and information for documentation and project context."
        })
        
        return {
            "source": "wayback-machine",
            "url": wayback_url,
            "original_url": url,
            "result": result
        }
    
    def research_for_sphinx(self, project_name: str, topics: List[str]) -> Dict:
        """Research project using all sources for Sphinx documentation"""
        results = {
            "project": project_name,
            "sources": {},
            "cow_prompt": None,
            "sphinx_prompt": None
        }
        
        # Get cow easter egg prompt (super cow level)
        cow_output = self.get_cow_prompt(level=3)
        if cow_output:
            cow_prompt = self.parse_cow_prompt(cow_output)
            results["cow_prompt"] = cow_prompt
            results["sphinx_prompt"] = self.generate_sphinx_prompt(cow_prompt, project_name)
        
        # Research via Brave search
        brave_results = []
        for topic in topics:
            search_result = self.brave_search.execute({
                "query": f"{project_name} {topic}",
                "count": 10,
                "safesearch": "moderate"
            })
            brave_results.append({
                "topic": topic,
                "result": search_result
            })
        results["sources"]["brave_search"] = brave_results
        
        # Research via sacred-texts.com
        sacred_results = []
        for topic in topics:
            sacred_result = self.fetch_sacred_texts(topic)
            sacred_results.append(sacred_result)
        results["sources"]["sacred_texts"] = sacred_results
        
        # Research via wayback machine for historical context
        wayback_results = []
        for topic in topics:
            # Search for relevant URLs to check in wayback
            search_result = self.brave_search.execute({
                "query": f"{project_name} {topic} site:github.com OR site:docs.python.org",
                "count": 5,
                "safesearch": "moderate"
            })
            # Extract URLs and fetch from wayback
            # (Simplified - would parse search results for URLs)
            wayback_results.append({
                "topic": topic,
                "search_result": search_result
            })
        results["sources"]["wayback"] = wayback_results
        
        return results


def cow_prompt_sphinx(project_name: str, topics: List[str] = None) -> Dict:
    """Passive default: Use cow easter egg to prompt Sphinx documentation"""
    if topics is None:
        topics = ["documentation", "examples", "API reference", "best practices"]
    
    system = CowPromptSystem()
    return system.research_for_sphinx(project_name, topics)


if __name__ == "__main__":
    import sys
    
    system = CowPromptSystem()
    
    if len(sys.argv) < 2:
        print("Usage: cow_prompt_system.py <project_name> [topics...]")
        print("Example: cow_prompt_system.py MyProject documentation examples")
        sys.exit(1)
    
    project_name = sys.argv[1]
    topics = sys.argv[2:] if len(sys.argv) > 2 else None
    
    result = cow_prompt_sphinx(project_name, topics)
    
    print("="*70)
    print(f"COW PROMPT SYSTEM - {project_name}")
    print("="*70)
    print()
    
    if result.get("cow_prompt"):
        print("Cow Easter Egg Prompt:")
        print(f"  Level: {result['cow_prompt']['cow_level']}")
        print(f"  Moo count: {result['cow_prompt']['moo_count']}")
        print()
    
    if result.get("sphinx_prompt"):
        print("Sphinx Documentation Prompt:")
        print(result["sphinx_prompt"])
        print()
    
    print("Research Sources:")
    for source, data in result["sources"].items():
        print(f"  - {source}: {len(data)} results")
