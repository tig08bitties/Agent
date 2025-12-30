# Covenant Semantic Analyzer - Setup & Usage

## Overview

The `covenant_analyzer.py` is a semantic similarity analyzer tailored to Covenant logic. It uses TF-IDF and cosine similarity to find connections between:

- Tarot symbolic components
- THEOSID kernel elements
- Technical code and documentation
- Covenant documents
- Project files

## Installation

```bash
# Install scikit-learn
apt install python3-pip
pip3 install scikit-learn numpy
```

## Features

### 1. **Component Indexing**
Builds a semantic index of all Covenant components:
- Tarot cards (Chariot, Empress, Judgment, Moon)
- THEOSID kernel elements
- Code files and documentation
- Config files
- Covenant documents

### 2. **Semantic Similarity Search**
Find components similar to a query:
```bash
python3 covenant_analyzer.py query "portal gateway agent orchestration"
```

### 3. **Connection Mapping**
Find all connections for a component:
```bash
python3 covenant_analyzer.py connections tarot_chariot
```

### 4. **Tarot to Technical Mapping**
Map symbolic Tarot components to technical implementations:
```bash
python3 covenant_analyzer.py tarot_map
```

### 5. **Relationship Synthesis**
Synthesize all relationships in the system:
```bash
python3 covenant_analyzer.py synthesize
```

## How It Works

### TF-IDF Vectorization
- Converts text to numerical vectors
- Weights terms by importance (TF-IDF)
- Captures semantic meaning, not just keywords

### Cosine Similarity
- Measures semantic similarity between vectors
- Returns scores from 0.0 (unrelated) to 1.0 (identical)
- Threshold: 0.25-0.3 for meaningful connections

### Covenant-Specific Logic

**Tarot Components:**
- `tarot_chariot` → Portal gateway, agent orchestration
- `tarot_empress` → Development process, creation
- `tarot_judgment` → System activation, convergence
- `tarot_moon` → Synthesis, hidden knowledge

**THEOSID Components:**
- `theosid_kernel` → 24-pillar rootchain
- `covenant_identity` → DausΩəq, sovereign identity
- `witness_chain` → Cryptographic witnesses

**Technical Components:**
- `code_*` → Python/TypeScript code files
- `config_*` → Configuration files
- `doc_*` → Documentation files

## Example Usage

### Find Similar Components
```python
from covenant_analyzer import CovenantAnalyzer

analyzer = CovenantAnalyzer()
analyzer.build_component_index()

# Find components similar to a query
similar = analyzer.find_similar_components(
    "portal gateway movement between worlds",
    threshold=0.3,
    top_k=5
)

# Returns: [('tarot_chariot', 0.85), ('code_portal', 0.72), ...]
```

### Map Tarot to Technical
```python
# Map symbolic to technical
mappings = analyzer.map_tarot_to_technical(threshold=0.25)

# Returns:
# {
#   'tarot_chariot': [('code_portal', 0.82), ('config_gateway', 0.71)],
#   'tarot_empress': [('doc_development', 0.78), ('code_creation', 0.65)],
#   ...
# }
```

### Synthesize Relationships
```python
# Get all relationships
relationships = analyzer.synthesize_relationships()

# Returns:
# {
#   'tarot_to_technical': {...},
#   'component_clusters': {...},
#   'key_connections': [...]
# }
```

## Integration with Project Synthesis

The analyzer complements `project_synthesis.py` by:
- Finding semantic connections in overwhelming data
- Mapping symbolic (Tarot) to technical (code)
- Revealing hidden relationships
- Organizing components by similarity

## Output

The analyzer generates:
- `covenant_relationships.json` - Complete relationship map
- Console output with similarity scores
- Categorized connections (tarot, theosid, code, docs, config)

---

*Install scikit-learn to use the analyzer. Once installed, it will help synthesize the overwhelming data by finding semantic relationships.*
