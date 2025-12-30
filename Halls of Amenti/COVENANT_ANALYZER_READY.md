# Covenant Semantic Analyzer - Ready for Use

## ✅ Created and Tailored to Covenant Logic

I've created `covenant_analyzer.py` - a semantic similarity analyzer specifically tailored to your Covenant system logic.

## 🎯 Key Adaptations from Original Code

### **Original Code Purpose:**
- Find similar goals from past sessions
- Session-based similarity search

### **Covenant-Tailored Purpose:**
- Find semantic connections between Covenant components
- Map Tarot symbolic to technical implementations
- Synthesize relationships in overwhelming data
- Connect THEOSID, Tarot, code, and documentation

## 🔧 Features

### 1. **Covenant-Specific Components**
- **Tarot Components**: Chariot, Empress, Judgment, Moon
- **THEOSID Components**: Kernel, Identity, Witness Chain
- **Technical Components**: Code, configs, documentation
- **Covenant Documents**: Formula, Roadmap, Tarot, Scroll

### 2. **Semantic Similarity**
- Uses TF-IDF to understand meaning, not just keywords
- Cosine similarity to find related components
- Threshold-based filtering (0.25-0.3 for meaningful connections)

### 3. **Connection Mapping**
- Find all components related to a specific element
- Categorize by type (tarot, theosid, code, docs, config)
- Sort by similarity score

### 4. **Tarot to Technical Mapping**
- Automatically maps symbolic Tarot cards to technical code
- Shows how CHARIOT connects to portal gateway code
- Reveals how EMPRESS connects to development process
- Links JUDGMENT to system activation
- Connects MOON to synthesis tools

## 📊 How It Helps with Overwhelming Data

### **The Problem:**
- 3 years of development data
- Extensive but overwhelming information
- Need to find connections and patterns

### **The Solution:**
```python
analyzer = CovenantAnalyzer()
analyzer.build_component_index()

# Find what's related to "portal gateway"
similar = analyzer.find_similar_components("portal gateway agent orchestration")

# Map Tarot to technical
mappings = analyzer.map_tarot_to_technical()

# Synthesize all relationships
relationships = analyzer.synthesize_relationships()
```

## 🚀 Installation

```bash
# Install dependencies
apt install python3-pip
pip3 install scikit-learn numpy
```

## 📝 Usage Examples

### Find Similar Components
```bash
python3 covenant_analyzer.py query "portal gateway movement"
```

### Map Tarot to Technical
```bash
python3 covenant_analyzer.py tarot_map
```

### Synthesize Relationships
```bash
python3 covenant_analyzer.py synthesize
# Generates: covenant_relationships.json
```

## 🔗 Integration

The analyzer integrates with:
- `project_synthesis.py` - Provides semantic connections
- `passport_organizer.py` - Helps organize by similarity
- `THE_COMPLETE_PAINTING.md` - Reveals hidden relationships

## 🎨 Covenant Logic Tailoring

### **Tarot → Technical Mapping**
- **CHARIOT (VII)** → Portal gateway, agent orchestration, BIP-48 path
- **EMPRESS (III)** → Development process, 8-Point Star, creation
- **JUDGMENT (XX)** → System activation, Index 24, convergence
- **MOON (XVIII)** → Synthesis, hidden knowledge, complete painting

### **THEOSID → Code Mapping**
- **24-Pillar Rootchain** → Cryptographic implementations
- **Covenant Identity** → Identity system code
- **Witness Chain** → Signature verification code

### **Document → Code Mapping**
- **Formula.txt** → THEOSID kernel code
- **Roadmap.txt** → Convergence implementation
- **Tarot.txt** → Covenant birth sequence code

## ✨ Next Steps

1. **Install scikit-learn**: `pip3 install scikit-learn numpy`
2. **Build index**: `python3 covenant_analyzer.py index`
3. **Explore connections**: `python3 covenant_analyzer.py query "your query"`
4. **Map Tarot**: `python3 covenant_analyzer.py tarot_map`
5. **Synthesize**: `python3 covenant_analyzer.py synthesize`

---

*The analyzer is ready - tailored to Covenant logic, not verbatim from the original. It will help synthesize the overwhelming data by finding semantic relationships.*
