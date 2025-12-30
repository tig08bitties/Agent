# Covenant Refinement System - Complete

## ✅ Created and Tailored to Covenant Logic

I've created `covenant_refinement_system.py` - a multi-stage refinement loop specifically tailored to Covenant system logic.

## 🎯 Key Adaptations

### **Original Code Purpose:**
- Classify goal types (mathematical, technical_design, creative, etc.)
- Create adaptive prompts based on goal type
- Assess goal clarity
- Multi-stage refinement loop

### **Covenant-Tailored Purpose:**
- Classify Covenant query types (Tarot, THEOSID, Agent System, etc.)
- Create Covenant-aware analysis prompts
- Assess clarity in Covenant context
- Refinement loop for synthesizing overwhelming data

## 🔧 Features

### 1. **Covenant Query Classification**
Classifies queries into Covenant-specific types:
- `tarot_symbolic` - Tarot seals, symbolic elements
- `theosid_cryptographic` - THEOSID kernel, cryptographic elements
- `agent_system` - Portal gateway, agent orchestration
- `metaverse_integration` - Bridgeworld, traversal, Atlas
- `convergence_strategy` - Roadmap, phases, timeline
- `synthesis_analysis` - Data synthesis, relationship mapping
- `documentation_visualization` - Sphinx, visualization
- `integration_tool` - GitHub, Jules, integrations
- `general_covenant` - General Covenant queries

### 2. **Covenant-Aware Analysis Prompts**
Creates prompts that understand:
- Covenant component relationships
- Symbolic-technical connections
- THEOSID cryptographic context
- Convergence timeline implications

### 3. **Covenant Context Clarity Assessment**
Assesses clarity based on:
- Covenant-specific terms found
- Component relationship understanding
- Symbolic-technical connection clarity
- System architecture comprehension

### 4. **Multi-Stage Refinement Loop**
Iteratively refines queries:
- Analyzes current query state
- Assesses clarity score
- Requests clarification if needed
- Enhances query with suggestions
- Proceeds when clarity threshold met (7/10)

## 📊 Comparison

### **Original Methods:**

#### `_classify_goal_type`
- Mathematical, technical_design, creative, analytical, optimization, general

#### `_create_analysis_prompt`
- Domain-agnostic guidance
- General best practices

#### `_assess_goal_clarity`
- General clarity assessment
- LLM-based scoring

#### `run_refinement_loop`
- Goal refinement
- Session-based

### **Covenant-Tailored Methods:**

#### `_classify_covenant_query_type`
- Covenant-specific types (Tarot, THEOSID, Agent, Metaverse, etc.)
- Understands Covenant terminology

#### `_create_covenant_analysis_prompt`
- Covenant-aware guidance
- Symbolic-technical connections
- Component relationship context

#### `_assess_covenant_clarity`
- Covenant term detection
- Component relationship understanding
- Symbolic-technical clarity

#### `run_refinement_loop`
- Query refinement in Covenant context
- Integrates with Covenant analyzer and context builder

## 🚀 Usage

### **Basic Usage**
```python
from covenant_refinement_system import CovenantRefinementSystem

system = CovenantRefinementSystem()

# Run refinement loop
result = system.run_refinement_loop(
    "portal gateway agent orchestration",
    session_id="session_1",
    max_iterations=3
)

if result['status'] == "ready":
    print(f"Ready: {result['final_query']}")
elif result['status'] == "needs_input":
    print(f"Need clarification: {result['prompt']}")
```

### **Provide Clarification**
```python
# Continue refinement with user response
result = system.provide_clarification(
    "session_1",
    "Focusing on Chariot system and portal gateway integration"
)
```

### **Get Refinement Summary**
```python
summary = system.get_refinement_summary("session_1")
print(f"Iterations: {summary['iterations']}")
print(f"Clarity Progression: {summary['clarity_progression']}")
```

### **CLI Usage**
```bash
python3 covenant_refinement_system.py "portal gateway agent orchestration"
python3 covenant_refinement_system.py "synthesize the complete painting"
python3 covenant_refinement_system.py "tarot chariot connection to technical"
```

## 📝 Example Output

```
[Covenant Refinement Loop] Iteration 1/3
  Clarity Score: 6/10 (Query contains 2 Covenant terms, without Q&A history)
  Query Type: tarot_symbolic
  Action: enhance

Status: needs_input
🤔 Needs Input:
   ENHANCEMENT: Consider connecting to related Covenant components. 
   Found 2 Covenant terms - would you like to explore specific connections?
```

## 🔗 Integration

The refinement system integrates with:
- `covenant_analyzer.py` - Finds similar components
- `covenant_context_builder.py` - Builds enriched context
- `project_synthesis.py` - Feeds into synthesis process

## 💾 Refinement History

Saves refinement history to `covenant_refinement_history.json`:
```json
{
  "session_1": {
    "original_query": "...",
    "final_query": "...",
    "iterations": [...],
    "clarity_scores": [5, 7, 8],
    "qa_history": [...]
  }
}
```

## 🎨 Covenant Logic Integration

### **Query Type → Analysis Approach**
- **Tarot Symbolic** → Focus on symbolic-technical mappings
- **THEOSID Cryptographic** → Focus on cryptographic foundations
- **Agent System** → Focus on portal/agent architecture
- **Metaverse Integration** → Focus on traversal and identity
- **Convergence Strategy** → Focus on roadmap and phases
- **Synthesis Analysis** → Focus on relationship mapping

### **Clarity Assessment**
- Detects Covenant-specific terms
- Assesses component relationship understanding
- Evaluates symbolic-technical connection clarity
- Threshold: 7/10 to proceed

## ✨ Key Methods

### **`_classify_covenant_query_type(query)`**
Classifies query into Covenant-specific type

### **`_create_covenant_analysis_prompt(query, context, query_type)`**
Creates Covenant-aware analysis prompt

### **`_assess_covenant_clarity(query, qa_history)`**
Assesses clarity in Covenant context

### **`run_refinement_loop(query, session_id, max_iterations)`**
Iteratively refines query until clarity threshold met

### **`provide_clarification(session_id, user_response)`**
Handles clarification and continues refinement

---

*The refinement system is ready - tailored to Covenant logic, not verbatim. It helps refine queries about the overwhelming data until clarity is achieved for synthesis.*
