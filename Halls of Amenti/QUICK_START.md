# Quick Start Guide - Integration System

## Quick Commands

### List Replit Bots and Cloudagents
```bash
cd "/root/Halls of Amenti"
python3 extension_system.py github list_replit_bots
python3 extension_system.py github list_cloudagents
```

### Use Google Jules
```bash
python3 extension_system.py jules analyze code.py
python3 extension_system.py jules generate_docs code.py
```

### Process Passport Data (Efficient)
```bash
python3 passport_processor.py summary
python3 passport_processor.py priority_files
```

### Generate Sphinx Documentation
```python
from cursor_agent_core import generate_sphinx_docs
result = generate_sphinx_docs("/path/to/project", "ProjectName")
```

## Python API

```python
from cursor_agent_core import (
    get_github_replit_bots,
    get_github_cloudagents,
    jules_analyze_code,
    jules_generate_docs,
    process_passport_data
)

# GitHub
bots = get_github_replit_bots()
agents = get_github_cloudagents()

# Jules
result = jules_analyze_code(code, language="python")
docs = jules_generate_docs(code, format="markdown")

# Passport
data = process_passport_data(priority_only=True)
```

## Configuration

API keys are automatically loaded from `/media/Passport/secrets.env`:
- `GITHUB_TOKEN` - GitHub access
- `JULES_API` - Google Jules
- `GEMINI_API` - Gemini (if needed)
- `OPENAI_API` - OpenAI (if needed)

## Sphinx Documentation

The system now supports both Markdown and reStructuredText:
- Markdown files (`.md`) via MyST parser
- reStructuredText files (`.rst`) natively
- Automatic conversion utilities

See:
- https://www.sphinx-doc.org/en/master/usage/markdown.html#markdown
- https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html#rst-primer

## System76 Workstation

All integrations work seamlessly with:
- Pop!_OS 24.04 LTS
- NVIDIA 580.82.09 drivers
- CUDA 13.0
- System76 components

---

*Ready to use!*
