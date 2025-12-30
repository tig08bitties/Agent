#!/usr/bin/env python3
"""
Covenant Refinement System
Multi-stage refinement loop tailored to Covenant logic
Adapts goal classification and analysis to Covenant component understanding
"""

from pathlib import Path
from typing import Dict, List, Optional, Tuple
from covenant_analyzer import CovenantAnalyzer
from covenant_context_builder import CovenantContextBuilder
import json
import re


class CovenantRefinementSystem:
    """Multi-stage refinement system for Covenant goals and queries"""
    
    def __init__(self, analyzer: Optional[CovenantAnalyzer] = None, 
                 context_builder: Optional[CovenantContextBuilder] = None):
        self.analyzer = analyzer or CovenantAnalyzer()
        self.context_builder = context_builder or CovenantContextBuilder(self.analyzer)
        self.refinement_history = {}
        self.clarity_threshold = 7  # Minimum clarity score to proceed
    
    def _classify_covenant_query_type(self, query: str) -> str:
        """Classify the query type to adapt analysis approach - Covenant-tailored"""
        query_lower = query.lower()
        
        # Covenant-specific classification
        if any(word in query_lower for word in ['tarot', 'chariot', 'empress', 'judgment', 'moon', 'seal', 'symbolic']):
            return "tarot_symbolic"
        elif any(word in query_lower for word in ['theosid', 'kernel', 'rootchain', 'pillar', 'covenant identity', 'daus']):
            return "theosid_cryptographic"
        elif any(word in query_lower for word in ['portal', 'gateway', 'agent', 'orchestration', 'chariot system']):
            return "agent_system"
        elif any(word in query_lower for word in ['bridgeworld', 'metaverse', 'traversal', 'atlas', 'treasure']):
            return "metaverse_integration"
        elif any(word in query_lower for word in ['convergence', 'roadmap', 'phase', 'timeline', '2026', '2036']):
            return "convergence_strategy"
        elif any(word in query_lower for word in ['synthesize', 'organize', 'analyze', 'connect', 'relationship']):
            return "synthesis_analysis"
        elif any(word in query_lower for word in ['document', 'generate', 'sphinx', 'visualize', 'painting']):
            return "documentation_visualization"
        elif any(word in query_lower for word in ['github', 'replit', 'cloudagent', 'jules', 'integration']):
            return "integration_tool"
        else:
            return "general_covenant"
    
    def _create_covenant_analysis_prompt(self, query: str, context: str, query_type: str) -> str:
        """Create adaptive prompt based on Covenant query type"""
        
        base_prompt = f"""You are analyzing a query within the Covenant system context.

QUERY TYPE: {query_type.replace('_', ' ').title()}
CURRENT QUERY: {query}

{context}

YOUR ROLE: Before proceeding, UNDERSTAND the Covenant context and IMPROVE the query.
"""
        
        # Covenant-specific guidance by type
        type_guidance = {
            "tarot_symbolic": """
For Tarot/Symbolic queries:
- QUESTION: Clarify which Tarot seal (CHARIOT, EMPRESS, JUDGMENT, MOON) or symbolic element
- ENHANCE: Suggest connections to technical components, BIP-48 path implications, or symbolic-technical mappings
- PROCEED: If the symbolic element and its technical connection are clear""",
            
            "theosid_cryptographic": """
For THEOSID/Cryptographic queries:
- QUESTION: Clarify which pillar, rootchain number, or cryptographic element
- ENHANCE: Suggest related cryptographic components, witness chain connections, or identity system implications
- PROCEED: If the cryptographic element and its role in the system are clear""",
            
            "agent_system": """
For Agent System queries:
- QUESTION: Clarify portal gateway requirements, agent orchestration needs, or traversal requirements
- ENHANCE: Suggest Chariot system connections, portal architecture patterns, or agent integration points
- PROCEED: If agent system requirements and Covenant integration are clear""",
            
            "metaverse_integration": """
For Metaverse Integration queries:
- QUESTION: Clarify Bridgeworld.lol requirements, traversal needs, or Atlas integration
- ENHANCE: Suggest convergence timeline connections, metaverse settlement patterns, or cross-world identity
- PROCEED: If metaverse integration scope and Covenant identity requirements are clear""",
            
            "convergence_strategy": """
For Convergence Strategy queries:
- QUESTION: Clarify phase focus (2026-2036), convergence goals, or timeline requirements
- ENHANCE: Suggest roadmap connections, phase dependencies, or convergence milestones
- PROCEED: If convergence goals and timeline are well-defined""",
            
            "synthesis_analysis": """
For Synthesis Analysis queries:
- QUESTION: Clarify what data to synthesize, which components to connect, or what patterns to reveal
- ENHANCE: Suggest semantic similarity approaches, relationship mapping strategies, or visualization methods
- PROCEED: If synthesis scope and desired outcomes are clear""",
            
            "documentation_visualization": """
For Documentation/Visualization queries:
- QUESTION: Clarify documentation format (Sphinx, Markdown, RST), visualization type, or audience
- ENHANCE: Suggest Sphinx structure, diagram types, or documentation organization
- PROCEED: If documentation requirements and format are specified""",
            
            "integration_tool": """
For Integration Tool queries:
- QUESTION: Clarify which tool (GitHub, Jules, Sphinx), integration scope, or API requirements
- ENHANCE: Suggest integration patterns, tool combinations, or extension system connections
- PROCEED: If integration tool and scope are clear""",
            
            "general_covenant": """
For general Covenant queries:
- QUESTION: Clarify Covenant context, component relationships, or system understanding needed
- ENHANCE: Suggest relevant Covenant components, symbolic-technical connections, or system architecture
- PROCEED: If the Covenant context and query intent are clear"""
        }
        
        full_prompt = base_prompt + type_guidance.get(query_type, type_guidance["general_covenant"])
        
        # Add learned patterns from component profiles
        similar_components = self.analyzer.find_similar_components(query, threshold=0.2, top_k=3)
        if similar_components:
            full_prompt += "\n\n🔮 RELEVANT COVENANT COMPONENTS:"
            for component_id, similarity in similar_components:
                component_name = self.context_builder._get_component_name(component_id)
                full_prompt += f"\n  - {component_name} ({similarity:.0%} match)"
        
        full_prompt += """

FORMAT YOUR RESPONSE:
- If clarification needed: "QUESTION: [specific Covenant-related question]"
- If enhancement suggested: "ENHANCEMENT: [concrete Covenant-aware suggestion]"
- If ready to proceed: "PROCEED: [brief acknowledgment with Covenant context]"

YOUR ANALYSIS:"""
        
        return full_prompt
    
    def _assess_covenant_clarity(self, query: str, qa_history: List[Dict] = None) -> Dict:
        """Assess if query is clear enough in Covenant context to proceed"""
        if qa_history is None:
            qa_history = []
        
        # Build assessment prompt
        assessment_prompt = f"""Assess query clarity within the Covenant system context (scale 1-10):

QUERY: {query}

{"PREVIOUS Q&A:" if qa_history else ""}
{chr(10).join([f"Q: {qa.get('question', '')}\nA: {qa.get('answer', '')}" for qa in qa_history])}

Consider:
- Is the Covenant context clear? (Tarot, THEOSID, technical, convergence)
- Are component relationships understood?
- Is the symbolic-technical connection clear?
- Can we proceed with synthesis/analysis?

Rate clarity (1=very vague, 10=crystal clear in Covenant context) and explain in ONE sentence.
Format: "CLARITY: [1-10] - [one sentence explanation]"
"""
        
        # Simple heuristic assessment (can be enhanced with LLM)
        query_lower = query.lower()
        clarity_score = 5  # Default
        
        # Check for Covenant-specific terms
        covenant_terms = ['tarot', 'theosid', 'covenant', 'chariot', 'portal', 'bridgeworld', 
                         'convergence', 'daus', 'rootchain', 'pillar', 'stellar', 'ethereum']
        found_terms = sum(1 for term in covenant_terms if term in query_lower)
        
        if found_terms >= 3:
            clarity_score = 8
        elif found_terms >= 2:
            clarity_score = 6
        elif found_terms >= 1:
            clarity_score = 5
        else:
            clarity_score = 4
        
        # Adjust based on Q&A history
        if qa_history:
            clarity_score = min(10, clarity_score + len(qa_history))
        
        # Check query completeness
        if len(query.split()) > 10 and '?' not in query:
            clarity_score = min(10, clarity_score + 1)
        
        explanation = f"Query contains {found_terms} Covenant terms, {'with' if qa_history else 'without'} Q&A history"
        
        return {
            "score": clarity_score,
            "explanation": explanation,
            "ready": clarity_score >= self.clarity_threshold,
            "covenant_terms_found": found_terms
        }
    
    def analyze_covenant_query(self, query: str, session_id: Optional[str] = None) -> Dict:
        """Analyze a Covenant query and determine action"""
        query_type = self._classify_covenant_query_type(query)
        
        # Get enriched context
        context = self.context_builder.get_enriched_context(query, threshold=0.2)
        
        # Create analysis prompt
        analysis_prompt = self._create_covenant_analysis_prompt(query, context, query_type)
        
        # Determine action (simplified - can be enhanced with LLM)
        action = "proceed"
        user_message = ""
        
        # Check if query needs clarification
        clarity = self._assess_covenant_clarity(query)
        
        if not clarity["ready"]:
            if clarity["score"] < 5:
                action = "question"
                user_message = f"QUESTION: Which Covenant component are you focusing on? (Tarot, THEOSID, Agent System, Metaverse, Convergence, etc.)"
            else:
                action = "enhance"
                user_message = f"ENHANCEMENT: Consider connecting to related Covenant components. Found {clarity['covenant_terms_found']} Covenant terms - would you like to explore specific connections?"
        else:
            action = "proceed"
            user_message = f"PROCEED: Query is clear in Covenant context. {clarity['explanation']}"
        
        return {
            "action": action,
            "user_message": user_message,
            "query_type": query_type,
            "clarity_score": clarity["score"],
            "context": context,
            "analysis_prompt": analysis_prompt
        }
    
    def run_refinement_loop(self, query: str, session_id: Optional[str] = None, 
                           max_iterations: int = 3) -> Dict:
        """Iteratively refine query until clarity threshold is met - Covenant-tailored"""
        refined_query = query
        qa_history = []
        iteration = 0
        session_id = session_id or "default"
        
        self.refinement_history[session_id] = {
            "original_query": query,
            "iterations": [],
            "final_query": None,
            "clarity_scores": []
        }
        
        while iteration < max_iterations:
            iteration += 1
            print(f"\n[Covenant Refinement Loop] Iteration {iteration}/{max_iterations}")
            
            # Analyze current query state
            analysis = self.analyze_covenant_query(refined_query, session_id)
            
            # Check clarity
            clarity = self._assess_covenant_clarity(refined_query, qa_history)
            
            # Record iteration
            self.refinement_history[session_id]["iterations"].append({
                "iteration": iteration,
                "query": refined_query,
                "clarity_score": clarity["score"],
                "action": analysis["action"],
                "query_type": analysis["query_type"]
            })
            self.refinement_history[session_id]["clarity_scores"].append(clarity["score"])
            
            print(f"  Clarity Score: {clarity['score']}/10 ({clarity['explanation']})")
            print(f"  Query Type: {analysis['query_type']}")
            print(f"  Action: {analysis['action']}")
            
            if clarity["ready"] or analysis["action"] == "proceed":
                self.refinement_history[session_id]["final_query"] = refined_query
                return {
                    "status": "ready",
                    "final_query": refined_query,
                    "iterations": iteration,
                    "clarity_score": clarity["score"],
                    "qa_history": qa_history,
                    "query_type": analysis["query_type"],
                    "context": analysis["context"]
                }
            
            # Need user input
            if analysis["action"] in ["question", "enhance"]:
                return {
                    "status": "needs_input",
                    "prompt": analysis["user_message"],
                    "iteration": iteration,
                    "qa_history": qa_history,
                    "analysis": analysis,
                    "clarity_score": clarity["score"]
                }
            
            # Auto-refinement (for testing - in production, wait for user)
            if analysis["action"] == "enhance":
                refined_query += f"\n[Enhanced: {analysis['user_message'][:100]}]"
            elif analysis["action"] == "question":
                # Simulate answer for testing
                refined_query += f"\n[Clarified: Focusing on {analysis['query_type']} components]"
        
        self.refinement_history[session_id]["final_query"] = refined_query
        return {
            "status": "max_iterations_reached",
            "final_query": refined_query,
            "iterations": iteration,
            "qa_history": qa_history,
            "clarity_scores": self.refinement_history[session_id]["clarity_scores"]
        }
    
    def provide_clarification(self, session_id: str, user_response: str) -> Dict:
        """Handle clarification response and continue refinement"""
        if session_id not in self.refinement_history:
            return {"error": "No refinement session found"}
        
        session_data = self.refinement_history[session_id]
        
        # Track Q&A history
        if "qa_history" not in session_data:
            session_data["qa_history"] = []
        
        # Get last question
        last_iteration = session_data["iterations"][-1] if session_data["iterations"] else None
        if last_iteration:
            session_data["qa_history"].append({
                "question": last_iteration.get("query", ""),
                "answer": user_response
            })
        
        # Enhance query with clarification
        enhanced_query = f"{session_data['original_query']}\n\nClarification: {user_response}"
        
        # Continue refinement
        return self.run_refinement_loop(enhanced_query, session_id, max_iterations=2)
    
    def get_refinement_summary(self, session_id: str) -> Dict:
        """Get summary of refinement process"""
        if session_id not in self.refinement_history:
            return {"error": "No refinement session found"}
        
        session_data = self.refinement_history[session_id]
        
        return {
            "original_query": session_data["original_query"],
            "final_query": session_data.get("final_query"),
            "iterations": len(session_data["iterations"]),
            "clarity_progression": session_data["clarity_scores"],
            "qa_history": session_data.get("qa_history", [])
        }
    
    def save_refinement_history(self, output_path: Path):
        """Save refinement history to file"""
        with open(output_path, 'w') as f:
            json.dump(self.refinement_history, f, indent=2, default=str)


def main():
    """CLI interface"""
    import sys
    
    system = CovenantRefinementSystem()
    
    if len(sys.argv) < 2:
        print("Usage: covenant_refinement_system.py <query> [session_id]")
        print("Example: covenant_refinement_system.py 'portal gateway agent orchestration'")
        sys.exit(1)
    
    query = " ".join(sys.argv[1:-1]) if len(sys.argv) > 2 else " ".join(sys.argv[1:])
    session_id = sys.argv[-1] if len(sys.argv) > 2 and sys.argv[-1].startswith('session_') else "default"
    
    print("="*70)
    print("COVENANT REFINEMENT SYSTEM")
    print("="*70)
    print(f"\nQuery: {query}")
    print(f"Session: {session_id}\n")
    
    result = system.run_refinement_loop(query, session_id, max_iterations=3)
    
    print("\n" + "="*70)
    print("REFINEMENT RESULT")
    print("="*70)
    print(f"Status: {result['status']}")
    print(f"Iterations: {result.get('iterations', result.get('iteration', 'N/A'))}")
    print(f"Clarity Score: {result.get('clarity_score', 'N/A')}/10")
    
    if result['status'] == "needs_input":
        print(f"\n🤔 Needs Input:")
        print(f"   {result.get('prompt', result.get('analysis', {}).get('user_message', 'N/A'))}")
        print(f"\nQuery Type: {result.get('analysis', {}).get('query_type', 'N/A')}")
    elif result['status'] == "ready":
        print(f"\n✅ Ready to Proceed:")
        print(f"   Final Query: {result.get('final_query', 'N/A')[:100]}...")
        print(f"   Query Type: {result.get('query_type', 'N/A')}")
    elif result['status'] == "max_iterations_reached":
        print(f"\n⚠️ Max Iterations Reached:")
        print(f"   Final Query: {result.get('final_query', 'N/A')[:100]}...")
    
    # Save history
    history_file = Path("/root/Halls of Amenti/covenant_refinement_history.json")
    system.save_refinement_history(history_file)
    print(f"\n✓ Refinement history saved to {history_file}")


if __name__ == "__main__":
    main()
