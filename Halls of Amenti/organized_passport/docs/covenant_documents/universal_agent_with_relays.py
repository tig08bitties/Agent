#!/usr/bin/env python3
"""
Universal Goal Agent with Bypass Relays
Integrates Rosetta Stone transformation into agent processing
"""

import json
import sys
from pathlib import Path
from typing import Dict, List, Optional, Any

# Import bypass relay system
sys.path.insert(0, str(Path(__file__).parent))
from bypass_relay_system import BypassRelay, relay_to_agent

class UniversalAgentWithRelays:
    """
    Universal Goal Agent with integrated bypass relays
    Processes goals through Rosetta Stone before agent analysis
    """
    
    def __init__(self, config: Optional[Dict] = None):
        self.config = config or {}
        self.relay = BypassRelay()
        self.memory = []
        self.relay_enabled = self.config.get("relay_enabled", True)
        self.relay_mode = self.config.get("relay_mode", "full")
    
    def process_goal(self, goal: str, use_relay: bool = True) -> Dict:
        """
        Process goal through bypass relay, then through agent
        
        Args:
            goal: User's goal/request
            use_relay: Whether to use bypass relay transformation
        
        Returns:
            dict with relay transformation and agent analysis
        """
        result = {
            "original_goal": goal,
            "relay_transformation": None,
            "agent_analysis": None,
            "final_output": None
        }
        
        # Step 1: Bypass Relay Transformation
        if use_relay and self.relay_enabled:
            relay_result = self.relay.process(goal, mode=self.relay_mode)
            result["relay_transformation"] = relay_result
            
            # Extract clean narrative for agent
            narrative = relay_to_agent(goal)
            result["relay_narrative"] = narrative
        else:
            result["relay_narrative"] = goal
        
        # Step 2: Agent Processing (with relay context)
        agent_input = result["relay_narrative"]
        agent_result = self._agent_process(agent_input, goal)
        result["agent_analysis"] = agent_result
        
        # Step 3: Combine relay + agent output
        result["final_output"] = self._combine_output(result)
        
        return result
    
    def _agent_process(self, narrative: str, original_goal: str) -> Dict:
        """
        Process narrative through agent (placeholder for actual agent logic)
        """
        return {
            "input": narrative,
            "original": original_goal,
            "analysis": f"Agent processed: {narrative[:100]}...",
            "recommendations": [],
            "next_steps": []
        }
    
    def _combine_output(self, result: Dict) -> str:
        """Combine relay transformation and agent analysis"""
        output_parts = []
        
        if result.get("relay_transformation"):
            relay = result["relay_transformation"]
            if relay.get("relay_output"):
                output_parts.append("ROSETTA STONE TRANSFORMATION:")
                output_parts.append(relay["relay_output"])
                output_parts.append("")
        
        if result.get("agent_analysis"):
            agent = result["agent_analysis"]
            output_parts.append("AGENT ANALYSIS:")
            output_parts.append(agent.get("analysis", ""))
            output_parts.append("")
        
        return "\n".join(output_parts)
    
    def chat_with_relay(self, message: str) -> str:
        """
        Chat interface with bypass relay integration
        """
        result = self.process_goal(message, use_relay=True)
        return result["final_output"]


def main():
    """CLI interface for Universal Agent with Relays"""
    import argparse
    
    parser = argparse.ArgumentParser(description="Universal Goal Agent with Bypass Relays")
    parser.add_argument("goal", help="Goal or message to process")
    parser.add_argument("--no-relay", action="store_true", help="Disable bypass relay")
    parser.add_argument("--relay-mode", choices=["full", "forward_only", "backward_only", "composite_only"],
                       default="full", help="Relay transformation mode")
    
    args = parser.parse_args()
    
    config = {
        "relay_enabled": not args.no_relay,
        "relay_mode": args.relay_mode
    }
    
    agent = UniversalAgentWithRelays(config)
    result = agent.process_goal(args.goal, use_relay=not args.no_relay)
    
    print(result["final_output"])


if __name__ == "__main__":
    main()
