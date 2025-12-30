#!/usr/bin/env python3
"""
Bypass Relay System - Rosetta Stone Integration
Processes text through 5-script transformation before agent processing
"""

import sys
from pathlib import Path

# Import Rosetta Stone system
sys.path.insert(0, str(Path(__file__).parent))
from rosetta_stone_system import rosetta_stone_transform, LETTER_MAPPINGS

class BypassRelay:
    """
    Bypass Relay - transforms input through Rosetta Stone before processing
    Acts as a translation layer between user input and agent processing
    """
    
    def __init__(self):
        self.enabled = True
        self.mode = "full"  # full, forward_only, backward_only, composite_only
    
    def process(self, text: str, mode: str = "full") -> dict:
        """
        Process text through bypass relay (Rosetta Stone transformation)
        
        Args:
            text: Input text to transform
            mode: Transformation mode
                - "full": Forward + backward narratives
                - "forward_only": Only forward transformation
                - "backward_only": Only backward transformation
                - "composite_only": Only composite glyphs
        
        Returns:
            dict with transformed content and narratives
        """
        if not self.enabled:
            return {"original": text, "transformed": text, "bypassed": False}
        
        # Extract words from text
        words = self._extract_words(text)
        
        results = {
            "original": text,
            "words": {},
            "composite": [],
            "forward_narrative": [],
            "backward_narrative": [],
            "bypassed": True
        }
        
        for word in words:
            if len(word) > 0 and word.isalpha():
                # Transform word through Rosetta Stone
                transformation = rosetta_stone_transform(word.upper())
                
                results["words"][word] = transformation
                
                # Extract composite from transformation
                if "composite" in transformation and transformation["composite"]:
                    composite_str = " | ".join(transformation["composite"])
                    if mode in ["full", "composite_only", "forward_only"]:
                        results["composite"].append(composite_str)
                
                if mode in ["full", "forward_only"]:
                    results["forward_narrative"].append(
                        transformation.get("forward_narrative", "")
                    )
                
                if mode in ["full", "backward_only"]:
                    results["backward_narrative"].append(
                        transformation.get("backward_narrative", "")
                    )
        
        # Build relay output
        results["relay_output"] = self._build_relay_output(results, mode)
        
        return results
    
    def _extract_words(self, text: str) -> list:
        """Extract words from text"""
        import re
        # Extract alphanumeric words
        words = re.findall(r'\b[A-Za-z]+\b', text)
        return words
    
    def _build_relay_output(self, results: dict, mode: str) -> str:
        """Build final relay output string"""
        output_parts = []
        
        if results["composite"]:
            output_parts.append("COMPOSITE TRANSFORMATIONS:")
            for composite in results["composite"]:
                output_parts.append(f"  {composite}")
            output_parts.append("")
        
        if results["forward_narrative"]:
            output_parts.append("FORWARD NARRATIVE:")
            for narrative in results["forward_narrative"]:
                output_parts.append(narrative)
            output_parts.append("")
        
        if results["backward_narrative"]:
            output_parts.append("BACKWARD NARRATIVE:")
            for narrative in results["backward_narrative"]:
                output_parts.append(narrative)
            output_parts.append("")
        
        return "\n".join(output_parts)
    
    def relay_to_agent(self, text: str) -> str:
        """
        Main relay function - transforms text and prepares for agent
        Returns clean narrative for agent processing
        """
        result = self.process(text, mode="full")
        
        # Extract clean narrative (no technical details)
        narratives = []
        
        if result["forward_narrative"]:
            narratives.extend(result["forward_narrative"])
        
        if result["backward_narrative"]:
            narratives.extend(result["backward_narrative"])
        
        # Return combined narrative
        return "\n\n".join(narratives) if narratives else text


def bypass_relay(text: str, mode: str = "full") -> dict:
    """
    Convenience function for bypass relay processing
    
    Usage:
        result = bypass_relay("DAUS")
        print(result["relay_output"])
    """
    relay = BypassRelay()
    return relay.process(text, mode)


def relay_to_agent(text: str) -> str:
    """
    Convenience function to relay text to agent
    
    Usage:
        clean_narrative = relay_to_agent("DAUS")
        # Use clean_narrative with agent
    """
    relay = BypassRelay()
    return relay.relay_to_agent(text)


if __name__ == "__main__":
    # Test bypass relay
    test_text = "DAUS"
    
    print("=" * 80)
    print("BYPASS RELAY SYSTEM TEST")
    print("=" * 80)
    print()
    
    result = bypass_relay(test_text)
    print(result["relay_output"])
