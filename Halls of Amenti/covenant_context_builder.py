#!/usr/bin/env python3
"""
Covenant Context Builder
Tailored version of _build_context for Covenant system
Builds enriched context from similar Covenant components
"""

from pathlib import Path
from typing import List, Tuple, Dict, Optional
from covenant_analyzer import CovenantAnalyzer
import json


class CovenantContextBuilder:
    """Builds enriched context from Covenant component relationships"""
    
    def __init__(self, analyzer: Optional[CovenantAnalyzer] = None):
        self.analyzer = analyzer or CovenantAnalyzer()
        self.component_profiles = {}  # Cache for learned patterns
        self._load_component_profiles()
    
    def _load_component_profiles(self):
        """Load learned patterns from component profiles"""
        profile_file = Path("/root/Halls of Amenti/covenant_component_profiles.json")
        if profile_file.exists():
            try:
                with open(profile_file) as f:
                    self.component_profiles = json.load(f)
            except:
                self.component_profiles = {}
    
    def _save_component_profiles(self):
        """Save learned patterns"""
        profile_file = Path("/root/Halls of Amenti/covenant_component_profiles.json")
        with open(profile_file, 'w') as f:
            json.dump(self.component_profiles, f, indent=2, default=str)
    
    def _get_component_outcome(self, component_id: str) -> Optional[str]:
        """Get outcome/result information for a component"""
        # Check if component has documented outcome
        outcomes = {
            "tarot_chariot": "Portal gateway enables agent orchestration and cross-world traversal",
            "tarot_empress": "3 years of development created fertile ground for system architecture",
            "tarot_judgment": "Index 24 completion activated sovereignty and system convergence",
            "tarot_moon": "Synthesis process revealed complete painting from overwhelming data",
            "theosid_kernel": "24-pillar rootchain provides cryptographic foundation for identity",
            "covenant_identity": "DausΩəq identity anchored on Stellar with BIP-48 derivation path"
        }
        return outcomes.get(component_id)
    
    def _get_component_learnings(self, component_id: str) -> List[str]:
        """Get learned patterns/constraints for a component"""
        profile = self.component_profiles.get(component_id, {})
        return profile.get("learned_patterns", [])
    
    def _get_component_connections(self, component_id: str) -> Dict[str, List[Tuple[str, float]]]:
        """Get all connections for a component"""
        if self.analyzer.component_vectors is None:
            return {}
        return self.analyzer.find_connections(component_id, threshold=0.25)
    
    def build_context(
        self,
        similar_components: List[Tuple[str, float]],
        query: Optional[str] = None
    ) -> str:
        """Build enriched context with outcomes and learned patterns - Covenant-tailored"""
        if not similar_components:
            return "No directly similar Covenant components found."
        
        context_parts = ["🔮 RELEVANT COVENANT COMPONENTS:"]
        
        for i, (component_id, similarity) in enumerate(similar_components[:3], 1):
            # Get component type and name
            component_type = self._get_component_type(component_id)
            component_name = self._get_component_name(component_id)
            
            # Get outcome data
            outcome = self._get_component_outcome(component_id)
            
            # Get key learnings
            learnings = self._get_component_learnings(component_id)
            
            # Get connections
            connections = self._get_component_connections(component_id)
            
            context_parts.append(
                f"\n{i}. {component_name} ({component_type}) - Similarity: {similarity:.0%}"
            )
            
            if outcome:
                context_parts.append(f"   ✦ Outcome: {outcome}")
            
            if learnings:
                context_parts.append(f"   ✦ Key Pattern: {learnings[0][:120]}...")
            
            # Show top connection
            if connections:
                top_category = max(connections.items(), key=lambda x: len(x[1]))[0] if connections else None
                if top_category and connections[top_category]:
                    top_connection = connections[top_category][0]
                    context_parts.append(
                        f"   ✦ Connected to: {self._get_component_name(top_connection[0])} "
                        f"({top_connection[1]:.0%} match)"
                    )
        
        context_parts.append("\n💡 Covenant Insight:")
        context_parts.append("   Consider: How do these components relate to your current work?")
        context_parts.append("   What patterns from the Tarot → Technical mapping apply?")
        context_parts.append("   How does the symbolic framework inform the technical implementation?")
        
        # Add Tarot mapping if relevant
        if query and any('tarot' in comp[0] for comp in similar_components):
            context_parts.append("\n🎴 Tarot → Technical Mapping:")
            tarot_mappings = self.analyzer.map_tarot_to_technical(threshold=0.25)
            for tarot_id, technical in list(tarot_mappings.items())[:2]:
                if technical:
                    tarot_name = self._get_component_name(tarot_id)
                    tech_name = self._get_component_name(technical[0][0])
                    context_parts.append(f"   {tarot_name} → {tech_name} ({technical[0][1]:.0%})")
        
        return "\n".join(context_parts)
    
    def _get_component_type(self, component_id: str) -> str:
        """Get human-readable component type"""
        if component_id.startswith('tarot_'):
            return "Tarot Seal"
        elif component_id.startswith('theosid_') or component_id.startswith('covenant_'):
            return "THEOSID Component"
        elif component_id.startswith('code_'):
            return "Code Component"
        elif component_id.startswith('doc_') or component_id.startswith('docs_'):
            return "Documentation"
        elif component_id.startswith('config_'):
            return "Configuration"
        else:
            return "Component"
    
    def _get_component_name(self, component_id: str) -> str:
        """Get human-readable component name"""
        name_map = {
            "tarot_chariot": "CHARIOT (VII) - Victory through Unified Forces",
            "tarot_empress": "EMPRESS (III) - Fertility and Creation",
            "tarot_judgment": "JUDGMENT (XX) - Resurrection and Awakening",
            "tarot_moon": "MOON (XVIII) - Hidden Path Navigation",
            "theosid_kernel": "THEOSID Kernel (24-Pillar Rootchain)",
            "covenant_identity": "Covenant Identity (DausΩəq)",
            "witness_chain": "Witness Chain (Cryptographic Signatures)"
        }
        
        if component_id in name_map:
            return name_map[component_id]
        
        # Extract readable name from ID
        name = component_id.replace('_', ' ').title()
        if component_id.startswith('doc_'):
            name = f"Document: {name[4:]}"
        elif component_id.startswith('code_'):
            name = f"Code: {name[5:]}"
        elif component_id.startswith('config_'):
            name = f"Config: {name[7:]}"
        
        return name
    
    def record_learning(self, component_id: str, pattern: str, outcome: Optional[str] = None):
        """Record a learned pattern for a component"""
        if component_id not in self.component_profiles:
            self.component_profiles[component_id] = {
                "learned_patterns": [],
                "outcomes": []
            }
        
        if pattern not in self.component_profiles[component_id]["learned_patterns"]:
            self.component_profiles[component_id]["learned_patterns"].append(pattern)
        
        if outcome and outcome not in self.component_profiles[component_id]["outcomes"]:
            self.component_profiles[component_id]["outcomes"].append(outcome)
        
        self._save_component_profiles()
    
    def get_enriched_context(self, query: str, threshold: float = 0.25) -> str:
        """Get complete enriched context for a query"""
        # Ensure analyzer is built
        if self.analyzer.component_vectors is None:
            self.analyzer.build_component_index()
        
        # Find similar components
        similar = self.analyzer.find_similar_components(query, threshold=threshold, top_k=5)
        
        # Build context
        context = self.build_context(similar, query=query)
        
        return context


def main():
    """CLI interface"""
    import sys
    
    builder = CovenantContextBuilder()
    
    if len(sys.argv) < 2:
        print("Usage: covenant_context_builder.py <query>")
        print("Example: covenant_context_builder.py 'portal gateway agent orchestration'")
        sys.exit(1)
    
    query = " ".join(sys.argv[1:])
    
    print("="*70)
    print("COVENANT CONTEXT BUILDER")
    print("="*70)
    print(f"\nQuery: {query}\n")
    
    context = builder.get_enriched_context(query)
    print(context)
    
    print("\n" + "="*70)


if __name__ == "__main__":
    main()
