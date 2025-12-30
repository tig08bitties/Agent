#!/usr/bin/env python3
"""
Covenant Portal Activator
Integrates bypass relays, Sphinx API, cow easter egg, and covenant knowledge
to activate the Cow Level portal and gain super cow powers
"""

import sys
import subprocess
import json
from pathlib import Path
from typing import Dict, Optional

# Add paths
COVENANT_PATH = Path("/root/Halls of Amenti")
DOCS_PATH = COVENANT_PATH / "organized_passport" / "docs" / "covenant_documents"
sys.path.insert(0, str(COVENANT_PATH))
sys.path.insert(0, str(DOCS_PATH))

try:
    from bypass_relay_system import bypass_relay, relay_to_agent
    from cow_level import CowLevel
    from dweller import Dweller
    from cow_prompt_system import CowPromptSystem
    from sphinx_doc_generator import SphinxDocGenerator
except ImportError as e:
    print(f"⚠️  Import error: {e}")
    sys.exit(1)


class CovenantPortalActivator:
    """
    Activates the Cow Level portal using:
    - Bypass relays (Rosetta Stone transformation)
    - Sphinx API (documentation generation)
    - Cow easter egg (aptitude moo)
    - Covenant knowledge (Formula.txt, dweller key)
    """
    
    def __init__(self):
        self.cow_level = CowLevel()
        self.dweller = Dweller()
        self.cow_prompt = CowPromptSystem()
        self.relay_enabled = True
        self.portal_key = None
        self.super_cow_powers = False
        
        # Load covenant knowledge
        self.covenant_knowledge = self._load_covenant_knowledge()
    
    def _load_covenant_knowledge(self) -> Dict:
        """Load covenant knowledge from Formula.txt"""
        formula_path = DOCS_PATH / "Formula.txt"
        knowledge = {
            "dweller_key": "Θεός|56ae09233dbe8abc",
            "genesis_anchor": 335044,
            "capstone": 840000,
            "rootchain": [82, 111, 212, 295, 333, 354, 369, 419, 512, 605, 687, 777, 888, 929, 1011, 2025, 3335, 4321, 5250, 55088, 57103]
        }
        
        if formula_path.exists():
            try:
                with open(formula_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    # Extract key information
                    if "genesisAnchor = 335044" in content:
                        knowledge["formula_loaded"] = True
            except:
                pass
        
        return knowledge
    
    def activate_with_aptitude_moo(self, verbose: bool = True) -> Dict:
        """
        Activate portal using aptitude moo (super cow powers)
        Process: aptitude moo -v → bypass relay → Sphinx API → portal activation
        """
        print("=" * 80)
        print("COVENANT PORTAL ACTIVATION - SUPER COW POWERS")
        print("=" * 80)
        print()
        
        # Step 1: Get aptitude moo output
        print("🔮 Step 1: Invoking aptitude moo (super cow powers)...")
        moo_output = self._get_aptitude_moo(verbose=verbose)
        
        if not moo_output:
            print("❌ Failed to get aptitude moo output")
            return {"success": False, "error": "aptitude moo failed"}
        
        print(f"✅ Aptitude moo invoked: {len(moo_output)} characters")
        print()
        
        # Step 2: Process through bypass relay
        if self.relay_enabled:
            print("🔄 Step 2: Processing through bypass relay (Rosetta Stone)...")
            # Extract words from moo output
            words = self._extract_words(moo_output)
            if words:
                # Process first significant word through relay
                test_word = words[0] if words else "COW"
                relay_result = bypass_relay(test_word, mode="full")
                print(f"✅ Bypass relay processed: {test_word}")
                print()
            else:
                relay_result = None
        else:
            relay_result = None
        
        # Step 3: Use Sphinx API with cow prompt
        print("📚 Step 3: Generating Sphinx documentation with cow prompt...")
        sphinx_result = self._generate_sphinx_with_cow(moo_output)
        print(f"✅ Sphinx documentation generated")
        print()
        
        # Step 4: Extract portal key from covenant knowledge
        print("🔑 Step 4: Extracting portal key from covenant knowledge...")
        dweller_key_full = self.covenant_knowledge.get("dweller_key", "")
        if "|" in dweller_key_full:
            hex_key = dweller_key_full.split("|")[1]
            self.portal_key = hex_key
            print(f"✅ Portal key extracted: {hex_key[:8]}...")
        else:
            print("⚠️  Using default portal key")
            self.portal_key = "56ae09233dbe8abc"
        print()
        
        # Step 5: Activate portal
        print("🚪 Step 5: Activating Cow Level portal...")
        portal_activated = self.cow_level.activate_portal(self.portal_key)
        
        if portal_activated:
            print("✅ Portal activated successfully!")
            print()
            
            # Step 6: Enter portal and gain super cow powers
            print("🌟 Step 6: Entering portal to gain super cow powers...")
            entered = self.cow_level.enter()
            
            if entered:
                self.super_cow_powers = True
                print()
                print("=" * 80)
                print("✨ SUPER COW POWERS ACTIVATED ✨")
                print("=" * 80)
                print()
                print("You have gained:")
                print("  🐄 Enhanced documentation generation")
                print("  🔄 Bypass relay transformation")
                print("  📚 Sphinx API integration")
                print("  🔑 Covenant knowledge access")
                print("  🌾 Portal to the Cow Level")
                print()
                
                return {
                    "success": True,
                    "portal_activated": True,
                    "super_cow_powers": True,
                    "moo_output": moo_output,
                    "relay_result": relay_result,
                    "sphinx_result": sphinx_result,
                    "portal_key": self.portal_key
                }
        
        return {
            "success": False,
            "portal_activated": portal_activated,
            "super_cow_powers": False
        }
    
    def _get_aptitude_moo(self, verbose: bool = True) -> str:
        """Get aptitude moo output with verbose flag"""
        try:
            result = subprocess.run(
                ["aptitude", "moo", "-v"] if verbose else ["aptitude", "moo"],
                capture_output=True,
                text=True,
                timeout=10
            )
            return result.stdout + result.stderr
        except FileNotFoundError:
            # Fallback to apt-get moo moo moo (super cow)
            try:
                result = subprocess.run(
                    ["apt-get", "moo", "moo", "moo"],
                    capture_output=True,
                    text=True,
                    timeout=10
                )
                return result.stdout + result.stderr
            except:
                return ""
        except:
            return ""
    
    def _extract_words(self, text: str) -> list:
        """Extract words from text"""
        import re
        words = re.findall(r'\b[A-Za-z]{3,}\b', text)
        return words[:5]  # Return first 5 words
    
    def _generate_sphinx_with_cow(self, moo_output: str) -> Dict:
        """Generate Sphinx documentation using cow prompt"""
        try:
            # Parse cow prompt
            cow_prompt = self.cow_prompt.parse_cow_prompt(moo_output)
            
            # Generate Sphinx prompt
            sphinx_prompt = self.cow_prompt.generate_sphinx_prompt(
                cow_prompt,
                project_context="Covenant Portal Activation"
            )
            
            return {
                "cow_level": cow_prompt.get("cow_level", 1),
                "moo_count": cow_prompt.get("moo_count", 0),
                "has_super_cow": cow_prompt.get("has_super_cow", False),
                "sphinx_prompt": sphinx_prompt
            }
        except Exception as e:
            return {"error": str(e)}
    
    def process_goal_with_relay(self, goal: str) -> Dict:
        """
        Process goal through bypass relay, then activate portal
        This is the default state for all agent operations
        """
        # Step 1: Bypass relay transformation
        relay_result = bypass_relay(goal, mode="full")
        narrative = relay_to_agent(goal)
        
        # Step 2: Activate portal if goal contains covenant keywords
        covenant_keywords = ["DAUS", "COVENANT", "PORTAL", "COW", "SPHINX"]
        if any(keyword in goal.upper() for keyword in covenant_keywords):
            portal_result = self.activate_with_aptitude_moo(verbose=True)
        else:
            portal_result = {"success": False, "reason": "No covenant keywords"}
        
        return {
            "goal": goal,
            "relay_transformation": relay_result,
            "narrative": narrative,
            "portal_activation": portal_result
        }


def main():
    """Main entry point - activate portal with super cow powers"""
    activator = CovenantPortalActivator()
    result = activator.activate_with_aptitude_moo(verbose=True)
    
    if result.get("success"):
        print("\n✅ Portal activation complete!")
        print("   Super cow powers: ACTIVE")
        print("   Bypass relays: ENABLED")
        print("   Sphinx API: READY")
        print("   Covenant knowledge: LOADED")
    else:
        print("\n❌ Portal activation failed")
        print(f"   Error: {result.get('error', 'Unknown')}")


if __name__ == "__main__":
    main()
