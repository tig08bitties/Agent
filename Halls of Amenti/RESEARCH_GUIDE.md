# Research Guide - Brave Browser API Integration

## Overview

All project research must be performed via web search using the Brave Browser API. The API key is stored in `/Keys/secrets.env` and the directory is encrypted/secured by default.

## Configuration

### API Key Storage

- **Location**: `/Keys/secrets.env`
- **Key Name**: `BRAVE_API_KEY`
- **Encryption**: Not needed - directory is secured by default
- **Format**: `BRAVE_API_KEY=your_key_here`

### Current API Key

The Brave Browser API key is already configured:
```
BRAVE_API_KEY=BSAEwLe_77A0TDYC2yxYKIQk8T3IsQO
```

## Usage

### Via Core Integration

```python
from cursor_agent_core import execute_tool

# Perform research
result = execute_tool("brave_search", {
    "query": "Python async programming best practices",
    "count": 10,
    "safesearch": "moderate"
})
```

### Via Research Manager

```python
from research_manager import research

# Simple research
result = research("Python async programming", count=10)

# Research project with multiple topics
from research_manager import ResearchManager
manager = ResearchManager()
project_research = manager.research_project("MyProject", [
    "MyProject documentation",
    "MyProject examples",
    "MyProject tutorials"
])
```

### Via CLI

```bash
# Direct tool usage
python3 brave_search_tool.py "Python async programming" 10 moderate

# Research manager
python3 research_manager.py "Python async programming" 10
```

## Research Workflow

### Before Starting Any Project

1. **Research the project topic** using `brave_search`
2. **Gather documentation** and best practices
3. **Find examples** and tutorials
4. **Review related projects** and implementations

### Example Research Flow

```python
from research_manager import ResearchManager

manager = ResearchManager()

# Research project before starting
research_results = manager.research_project("New Project", [
    "New Project documentation",
    "New Project best practices",
    "New Project examples",
    "New Project common issues"
])

# Use results to inform development
for result in research_results["results"]:
    if result["success"]:
        print(result["display"])
```

## Tool Parameters

### brave_search Parameters

- **query** (required): The search query string
- **count** (optional): Number of results (1-20, default: 10)
- **safesearch** (optional): "off", "moderate", or "strict" (default: "moderate")

## Integration with Agent

The agent automatically:
- Uses `brave_search` for all research tasks
- Loads API key from `/Keys/secrets.env`
- Performs research before project work
- Stores results for reference

## Adding New API Keys

To add additional API keys to `/Keys/secrets.env`:

```bash
# Add to secrets.env
echo "SERVICE_NAME_API_KEY=your_key_here" >> /Keys/secrets.env
```

Then load in your code:
```python
from pathlib import Path

secrets_file = Path("/Keys/secrets.env")
with open(secrets_file, 'r') as f:
    for line in f:
        if line.startswith("SERVICE_NAME_API_KEY="):
            api_key = line.split("=", 1)[1].strip()
```

## Security Notes

- `/Keys` directory is encrypted and secured by default
- No additional encryption needed for secrets.env
- API keys are loaded at runtime
- Keys are not logged or exposed in output

---

*All projects must be researched via Brave Browser API before development begins*
