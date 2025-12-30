#!/usr/bin/env python3
"""
Default Agent with Bypass Relays
This is the default state - all agent operations process through bypass relays
Integrates: bypass relays + Sphinx API + cow easter egg + covenant knowledge
"""

import sys
from pathlib import Path

# Add paths
COVENANT_PATH = Path("/root/Halls of Amenti")
DOCS_PATH = COVENANT_PATH / "organized_passport" / "docs" / "covenant_documents"
sys.path.insert(0, str(COVENANT_PATH))
sys.path.insert(0, str(DOCS_PATH))

from bypass_relay_system import bypass_relay, relay_to_agent
from covenant_portal_activator import CovenantPortalActivator


class DefaultAgentWithRelays:
    """
    Default agent that processes all input through bypass relays
    This is the DEFAULT STATE for all agent operations
    """
    
    def __init__(self):
        self.relay_enabled = True  # DEFAULT: Enabled
        self.portal_activator = CovenantPortalActivator()
        self.super_cow_powers = False
    
    def process(self, input_text: str, use_relay: bool = True) -> dict:
        """
        Process input through bypass relay (DEFAULT STATE)
        
        Args:
            input_text: User input/goal
            use_relay: Use bypass relay (default: True - this is the default state)
        
        Returns:
            dict with relay transformation and processed output
        """
        # Check if input contains covenant keywords (triggers portal activation)
        covenant_keywords = ["DAUS", "COVENANT", "PORTAL", "COW", "SPHINX", "APTITUDE"]
        should_activate_portal = any(kw in input_text.upper() for kw in covenant_keywords)
        
        result = {
            "input": input_text,
            "relay_enabled": use_relay and self.relay_enabled,
            "relay_result": None,
            "narrative": None,
            "portal_activation": None,
            "output": None
        }
        
        # Step 1: Bypass Relay (DEFAULT)
        if use_relay and self.relay_enabled:
            relay_result = bypass_relay(input_text, mode="full")
            narrative = relay_to_agent(input_text)
            result["relay_result"] = relay_result
            result["narrative"] = narrative
        else:
            result["narrative"] = input_text
        
        # Step 2: Portal Activation (if covenant keywords detected)
        if should_activate_portal:
            portal_result = self.portal_activator.activate_with_aptitude_moo(verbose=True)
            result["portal_activation"] = portal_result
            if portal_result.get("super_cow_powers"):
                self.super_cow_powers = True
        
        # Step 3: Build output
        if result["relay_result"]:
            result["output"] = result["relay_result"].get("relay_output", result["narrative"])
        else:
            result["output"] = result["narrative"]
        
        return result
    
    def chat(self, message: str) -> str:
        """Chat interface with bypass relays (default state)"""
        result = self.process(message, use_relay=True)
        return result["output"]


# Global default agent instance
_default_agent = None

def get_default_agent():
    """Get or create default agent instance"""
    global _default_agent
    if _default_agent is None:
        _default_agent = DefaultAgentWithRelays()
    return _default_agent


def process_with_default_relays(text: str) -> dict:
    """
    Process text through default agent with bypass relays
    This is the DEFAULT STATE - use this for all agent operations
    """
    agent = get_default_agent()
    return agent.process(text, use_relay=True)


if __name__ == "__main__":
    # Test default agent
    agent = DefaultAgentWithRelays()
    
    print("=" * 80)
    print("DEFAULT AGENT WITH BYPASS RELAYS - TEST")
    print("=" * 80)
    print()
    
    test_input = "DAUS"
    result = agent.process(test_input)
    
    print("Input:", result["input"])
    print("Relay Enabled:", result["relay_enabled"])
    if result["relay_result"]:
        print("\nRelay Output:")
        print(result["relay_result"].get("relay_output", ""))
    print("\nFinal Output:", result["output"][:200] + "..." if len(result["output"]) > 200 else result["output"])
