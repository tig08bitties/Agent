#!/usr/bin/env python3
"""
Google Jules Integration
Integrates Google Jules API as an extension of the agent system
"""

import os
import json
import requests
from pathlib import Path
from typing import Dict, List, Optional, Any
from tools_api import BaseTool, ToolResult


class JulesIntegration:
    """Google Jules API integration"""
    
    def __init__(self, api_key: Optional[str] = None):
        self.api_key = api_key or self._load_api_key()
        # Jules uses Google API format - try both endpoints
        self.base_url = "https://generativelanguage.googleapis.com/v1beta"
        self.jules_url = "https://jules.google.com/api"
        self.headers = {
            "Content-Type": "application/json"
        }
        # Add API key to headers (Google API format)
        if self.api_key.startswith("AIza"):
            self.headers["X-goog-api-key"] = self.api_key
        else:
            self.headers["Authorization"] = f"Bearer {self.api_key}"
    
    def _load_api_key(self) -> str:
        """Load Jules API key - uses Google Generative AI API key"""
        # Jules API key provided by user (same as Gemini API)
        jules_key = "AIzaSyDbvPexK8At34SUXdXM4HKOi0y_k5IBLSk"
        
        # Try secrets.env first
        secrets_file = Path("/media/Passport/secrets.env")
        if secrets_file.exists():
            content = secrets_file.read_text()
            # Check for JULES_API first
            for line in content.split('\n'):
                if line.startswith('JULES_API='):
                    key = line.split('=', 1)[1].strip().strip('"')
                    if key and key.startswith('AIza'):
                        return key
            # Fallback to GEMINI_API (same format)
            for line in content.split('\n'):
                if line.startswith('GEMINI_API='):
                    key = line.split('=', 1)[1].strip().strip('"')
                    if key and key.startswith('AIza'):
                        return key
        
        # Use provided key or environment variable
        return os.getenv("JULES_API", os.getenv("GEMINI_API", jules_key))
    
    def generate_content(self, prompt: str, context: Optional[str] = None, 
                        model: str = "gemini-2.0-flash-exp", **kwargs) -> Dict:
        """Generate content using Jules API (via Google Generative AI)"""
        # Use Google Generative AI API format
        url = f"{self.base_url}/models/{model}:generateContent"
        
        # Build contents array
        parts = [{"text": prompt}]
        if context:
            parts.append({"text": f"\n\nContext: {context}"})
        
        payload = {
            "contents": [{
                "parts": parts
            }],
            **kwargs
        }
        
        try:
            response = requests.post(url, headers=self.headers, json=payload)
            response.raise_for_status()
            result = response.json()
            
            # Extract text from response
            if "candidates" in result and len(result["candidates"]) > 0:
                content = result["candidates"][0].get("content", {})
                parts = content.get("parts", [])
                if parts:
                    text = parts[0].get("text", "")
                    return {
                        "content": text,
                        "success": True,
                        "full_response": result
                    }
            
            return {"success": True, "content": str(result), "full_response": result}
        except Exception as e:
            print(f"Error calling Jules API: {e}")
            return {"error": str(e), "success": False}
    
    def analyze_code(self, code: str, language: Optional[str] = None) -> Dict:
        """Analyze code using Jules"""
        prompt = f"Analyze this code{' in ' + language if language else ''}:\n\n{code}"
        return self.generate_content(prompt, model="jules-code-analyzer")
    
    def generate_documentation(self, code: str, format: str = "markdown") -> Dict:
        """Generate documentation for code"""
        prompt = f"Generate {format} documentation for this code:\n\n{code}"
        return self.generate_content(prompt, model="jules-doc-generator")
    
    def suggest_improvements(self, code: str, context: Optional[str] = None) -> Dict:
        """Suggest code improvements"""
        prompt = f"Suggest improvements for this code:\n\n{code}"
        if context:
            prompt += f"\n\nContext: {context}"
        return self.generate_content(prompt, model="jules-code-reviewer")
    
    def translate_code(self, code: str, target_language: str) -> Dict:
        """Translate code to another language"""
        prompt = f"Translate this code to {target_language}:\n\n{code}"
        return self.generate_content(prompt, model="jules-code-translator")
    
    def explain_code(self, code: str, level: str = "intermediate") -> Dict:
        """Explain code at specified level"""
        prompt = f"Explain this code at {level} level:\n\n{code}"
        return self.generate_content(prompt, model="jules-code-explainer")
    
    def generate_tests(self, code: str, framework: Optional[str] = None) -> Dict:
        """Generate tests for code"""
        prompt = f"Generate tests for this code"
        if framework:
            prompt += f" using {framework}"
        prompt += f":\n\n{code}"
        return self.generate_content(prompt, model="jules-test-generator")
    
    def refactor_code(self, code: str, style: Optional[str] = None) -> Dict:
        """Refactor code"""
        prompt = f"Refactor this code"
        if style:
            prompt += f" following {style} style"
        prompt += f":\n\n{code}"
        return self.generate_content(prompt, model="jules-refactorer")
    
    def chat(self, message: str, conversation_history: Optional[List[Dict]] = None) -> Dict:
        """Chat with Jules"""
        url = f"{self.base_url}/v1/chat"
        
        payload = {
            "message": message,
            "conversation_history": conversation_history or []
        }
        
        try:
            response = requests.post(url, headers=self.headers, json=payload)
            response.raise_for_status()
            return response.json()
        except Exception as e:
            print(f"Error in Jules chat: {e}")
            return {"error": str(e), "success": False}


class JulesTool(BaseTool):
    """Tool for Google Jules operations"""
    
    def __init__(self):
        self.jules = JulesIntegration()
        super().__init__()
    
    def get_name(self) -> str:
        return "jules"
    
    def get_display_name(self) -> str:
        return "Google Jules Integration"
    
    def get_description(self) -> str:
        return "Use Google Jules for code analysis, documentation, and AI assistance"
    
    def get_parameter_schema(self) -> Dict:
        return {
            "type": "object",
            "properties": {
                "action": {
                    "type": "string",
                    "enum": ["generate", "analyze_code", "generate_docs", "suggest_improvements",
                            "translate_code", "explain_code", "generate_tests", "refactor", "chat"],
                    "description": "Action to perform"
                },
                "prompt": {
                    "type": "string",
                    "description": "Prompt for generation"
                },
                "code": {
                    "type": "string",
                    "description": "Code to analyze/process"
                },
                "context": {
                    "type": "string",
                    "description": "Additional context"
                },
                "language": {
                    "type": "string",
                    "description": "Programming language"
                },
                "format": {
                    "type": "string",
                    "description": "Output format (markdown, rst, etc.)"
                },
                "target_language": {
                    "type": "string",
                    "description": "Target language for translation"
                },
                "level": {
                    "type": "string",
                    "description": "Explanation level (beginner, intermediate, advanced)"
                },
                "framework": {
                    "type": "string",
                    "description": "Testing framework"
                },
                "style": {
                    "type": "string",
                    "description": "Code style guide"
                },
                "message": {
                    "type": "string",
                    "description": "Chat message"
                },
                "model": {
                    "type": "string",
                    "description": "Jules model to use"
                }
            },
            "required": ["action"]
        }
    
    def execute(self, params: Dict, abort_signal: Optional[Any] = None) -> ToolResult:
        """Execute Jules operation"""
        action = params.get("action")
        
        try:
            if action == "generate":
                result = self.jules.generate_content(
                    params.get("prompt", ""),
                    params.get("context"),
                    params.get("model", "jules-1.0")
                )
                return ToolResult(
                    llm_content=json.dumps(result, indent=2),
                    return_display=result.get("content", str(result)),
                    success=result.get("success", True)
                )
            
            elif action == "analyze_code":
                result = self.jules.analyze_code(
                    params.get("code", ""),
                    params.get("language")
                )
                return ToolResult(
                    llm_content=json.dumps(result, indent=2),
                    return_display=result.get("analysis", str(result)),
                    success=result.get("success", True)
                )
            
            elif action == "generate_docs":
                result = self.jules.generate_documentation(
                    params.get("code", ""),
                    params.get("format", "markdown")
                )
                return ToolResult(
                    llm_content=json.dumps(result, indent=2),
                    return_display=result.get("documentation", str(result)),
                    success=result.get("success", True)
                )
            
            elif action == "suggest_improvements":
                result = self.jules.suggest_improvements(
                    params.get("code", ""),
                    params.get("context")
                )
                return ToolResult(
                    llm_content=json.dumps(result, indent=2),
                    return_display=result.get("suggestions", str(result)),
                    success=result.get("success", True)
                )
            
            elif action == "translate_code":
                result = self.jules.translate_code(
                    params.get("code", ""),
                    params.get("target_language", "")
                )
                return ToolResult(
                    llm_content=json.dumps(result, indent=2),
                    return_display=result.get("translated_code", str(result)),
                    success=result.get("success", True)
                )
            
            elif action == "explain_code":
                result = self.jules.explain_code(
                    params.get("code", ""),
                    params.get("level", "intermediate")
                )
                return ToolResult(
                    llm_content=json.dumps(result, indent=2),
                    return_display=result.get("explanation", str(result)),
                    success=result.get("success", True)
                )
            
            elif action == "generate_tests":
                result = self.jules.generate_tests(
                    params.get("code", ""),
                    params.get("framework")
                )
                return ToolResult(
                    llm_content=json.dumps(result, indent=2),
                    return_display=result.get("tests", str(result)),
                    success=result.get("success", True)
                )
            
            elif action == "refactor":
                result = self.jules.refactor_code(
                    params.get("code", ""),
                    params.get("style")
                )
                return ToolResult(
                    llm_content=json.dumps(result, indent=2),
                    return_display=result.get("refactored_code", str(result)),
                    success=result.get("success", True)
                )
            
            elif action == "chat":
                result = self.jules.chat(
                    params.get("message", ""),
                    params.get("conversation_history")
                )
                return ToolResult(
                    llm_content=json.dumps(result, indent=2),
                    return_display=result.get("response", str(result)),
                    success=result.get("success", True)
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
    
    jules = JulesIntegration()
    
    if len(sys.argv) < 3:
        print("Usage: jules_integration.py <action> <input>")
        print("Actions:")
        print("  generate <prompt>")
        print("  analyze_code <code_file>")
        print("  generate_docs <code_file>")
        sys.exit(1)
    
    action = sys.argv[1]
    input_data = sys.argv[2]
    
    if action == "generate":
        result = jules.generate_content(input_data)
        print(json.dumps(result, indent=2))
    
    elif action == "analyze_code":
        code = Path(input_data).read_text() if Path(input_data).exists() else input_data
        result = jules.analyze_code(code)
        print(json.dumps(result, indent=2))
    
    elif action == "generate_docs":
        code = Path(input_data).read_text() if Path(input_data).exists() else input_data
        result = jules.generate_documentation(code)
        print(json.dumps(result, indent=2))
    
    else:
        print(f"Unknown action: {action}")


if __name__ == "__main__":
    main()
