# Sovereign Document AI - Updated ✅

## ✅ Default Directories Updated

**All default directories changed to `/root/Agent` for consistency.**

---

## 🎯 Updated Usage

### Build Knowledge Base:
```bash
cd /root/Agent
python3 build_sovereign_knowledge.py
```

**Default paths:**
- Documents: `/root/Agent/documents`
- Knowledge base: `/root/Agent/sovereign_db`

### Query Knowledge Base:
```bash
# Single query
python3 sovereign_query_engine.py --query "What is the covenant principle?"

# Interactive mode
python3 sovereign_query_engine.py
```

**Default path:**
- Knowledge base: `/root/Agent/sovereign_db`

---

## 🔧 Changes Made

### 1. **build_sovereign_knowledge.py**
- Default `--documents-dir`: `/root/Agent/documents`
- Default `--persist-dir`: `/root/Agent/sovereign_db`
- Still loads from `/home/tig0_0bitties/Documents` if it exists
- Still loads covenant documents automatically

### 2. **sovereign_query_engine.py**
- Default `--kb-path`: `/root/Agent/sovereign_db`
- Can be used without arguments (uses defaults)

### 3. **Directory Structure**
- Created `/root/Agent/documents/` for user documents
- Knowledge base in `/root/Agent/sovereign_db/`
- All paths relative to `/root/Agent`

---

## 📁 Directory Structure

```
/root/Agent/
├── documents/                  # User documents (default source)
├── sovereign_db/               # Knowledge base storage
│   └── sovereign_knowledge.json
├── build_sovereign_knowledge.py
├── sovereign_query_engine.py
└── [other files]
```

---

## ✅ Status

- ✅ Default directories: Updated to `/root/Agent`
- ✅ Document loading: Works from `/root/Agent/documents`
- ✅ Knowledge base: Built and ready
- ✅ Query engine: Working with defaults
- ✅ All changes: Committed and pushed

---

*Sovereign document AI updated. All defaults point to /root/Agent.*
