# Covenant Context Builder - Complete

## ✅ Created and Tailored to Covenant Logic

I've created `covenant_context_builder.py` - a context builder specifically tailored to Covenant system logic, adapted from the original `_build_context` method.

## 🎯 Key Adaptations

### **Original Code Purpose:**
- Build context from similar past sessions
- Show session outcomes and learnings
- Session-based memory system

### **Covenant-Tailored Purpose:**
- Build context from similar Covenant components
- Show component outcomes and learned patterns
- Component-based relationship system
- Integrate Tarot → Technical mappings

## 🔧 Features

### 1. **Component-Based Context**
Instead of sessions, uses Covenant components:
- Tarot seals (Chariot, Empress, Judgment, Moon)
- THEOSID components (Kernel, Identity, Witness Chain)
- Technical components (code, configs, docs)

### 2. **Enriched Information**
For each similar component, shows:
- **Component Type**: Tarot Seal, THEOSID Component, Code, etc.
- **Outcome**: What this component achieved
- **Key Patterns**: Learned patterns/constraints
- **Connections**: Related components with similarity scores

### 3. **Tarot → Technical Mapping**
Automatically includes Tarot mappings when relevant:
- CHARIOT → Portal gateway code
- EMPRESS → Development process
- JUDGMENT → System activation
- MOON → Synthesis tools

### 4. **Covenant-Specific Insights**
Provides Covenant-focused guidance:
- How components relate to current work
- What patterns from Tarot → Technical mapping apply
- How symbolic framework informs technical implementation

## 📊 Comparison

### **Original `_build_context`:**
```python
def _build_context(self, similar_sessions: list) -> str:
    # Shows similar goals from past sessions
    # Displays session outcomes
    # Shows learned constraints
```

### **Covenant `build_context`:**
```python
def build_context(self, similar_components: list, query: str = None) -> str:
    # Shows similar Covenant components
    # Displays component outcomes
    # Shows learned patterns
    # Includes Tarot → Technical mappings
    # Provides Covenant-specific insights
```

## 🚀 Usage

### **Basic Usage**
```python
from covenant_context_builder import CovenantContextBuilder
from covenant_analyzer import CovenantAnalyzer

analyzer = CovenantAnalyzer()
analyzer.build_component_index()

builder = CovenantContextBuilder(analyzer)

# Find similar components
similar = analyzer.find_similar_components("portal gateway", threshold=0.25)

# Build enriched context
context = builder.build_context(similar, query="portal gateway")
print(context)
```

### **Complete Context**
```python
# Get complete enriched context in one call
context = builder.get_enriched_context("portal gateway agent orchestration")
print(context)
```

### **CLI Usage**
```bash
python3 covenant_context_builder.py "portal gateway agent orchestration"
```

## 📝 Example Output

```
🔮 RELEVANT COVENANT COMPONENTS:

1. CHARIOT (VII) - Victory through Unified Forces (Tarot Seal) - Similarity: 85%
   ✦ Outcome: Portal gateway enables agent orchestration and cross-world traversal
   ✦ Key Pattern: BIP-48 path ܗ/48'/7'/7'/7 connects symbolic to technical
   ✦ Connected to: Code: Portal (82% match)

2. Code: Portal Gateway (Code Component) - Similarity: 72%
   ✦ Outcome: Implements cross-world traversal and agent orchestration
   ✦ Connected to: CHARIOT (VII) (85% match)

💡 Covenant Insight:
   Consider: How do these components relate to your current work?
   What patterns from the Tarot → Technical mapping apply?
   How does the symbolic framework inform the technical implementation?

🎴 Tarot → Technical Mapping:
   CHARIOT (VII) - Victory through Unified Forces → Code: Portal (82%)
```

## 🔗 Integration

The context builder integrates with:
- `covenant_analyzer.py` - Gets similar components
- `project_synthesis.py` - Provides context for synthesis
- Component profiles - Stores learned patterns

## 💾 Component Profiles

The builder maintains `covenant_component_profiles.json`:
```json
{
  "tarot_chariot": {
    "learned_patterns": [
      "BIP-48 path connects symbolic to technical",
      "Portal gateway requires unified forces"
    ],
    "outcomes": [
      "Portal gateway enables agent orchestration"
    ]
  }
}
```

## ✨ Key Methods

### **`build_context(similar_components, query=None)`**
Builds enriched context from similar components

### **`get_enriched_context(query, threshold=0.25)`**
Complete context in one call - finds similar and builds context

### **`record_learning(component_id, pattern, outcome=None)`**
Records learned patterns for future use

## 🎨 Covenant Logic Tailoring

### **Component Outcomes**
- Tarot components have symbolic outcomes
- THEOSID components have cryptographic outcomes
- Technical components have implementation outcomes

### **Learned Patterns**
- Patterns from component relationships
- Constraints discovered during development
- Insights from Tarot → Technical mappings

### **Covenant Insights**
- How symbolic informs technical
- What patterns apply to current work
- Guidance from the complete system

---

*The context builder is ready - tailored to Covenant logic, not verbatim. It builds enriched context from Covenant component relationships instead of session history.*
