# Passive Defaults - All Functions Auto-Execute

## Overview

**All commands and functions are considered passive default functions** - they execute automatically without requiring explicit calls or user interaction, unless otherwise directed.

## Passive Default Functions

### Research Functions (Auto-Execute)

```python
from cursor_agent_core import research, research_project

# These are PASSIVE DEFAULTS - execute automatically
research("Python async programming", count=10)  # Auto-executes
research_project("MyProject", ["docs", "examples"])  # Auto-executes
```

**Behavior:**
- Execute automatically when referenced
- No user confirmation required
- No explicit calls needed
- Research happens passively by default

### Core Functions (Auto-Execute)

```python
from cursor_agent_core import (
    get_context, create_checkpoint, execute_tool, get_core
)

# All are PASSIVE DEFAULTS
context = get_context()  # Auto-loads
checkpoint = create_checkpoint("write_file", Path("file.txt"))  # Auto-creates
result = execute_tool("brave_search", {"query": "..."})  # Auto-executes
core = get_core()  # Auto-initializes
```

**Behavior:**
- All functions execute automatically
- No user interaction required
- Passive operation by default
- Auto-initialization and execution

## Research as Passive Default

### Automatic Project Research

When working on any project, research is **automatically performed**:

1. **Before project work begins**: Research happens automatically
2. **No explicit calls needed**: Functions execute passively
3. **Results used automatically**: Research informs development
4. **No user prompts**: Everything happens in background

### Example (Passive Behavior)

```python
# This is how it works - research happens automatically
# No need to explicitly call research() - it's a passive default

# When you mention a project, research happens automatically:
# "I want to build a Python async web server"
# → research("Python async web server") executes automatically
# → research("Python async web server best practices") executes automatically
# → research("Python async web server examples") executes automatically
```

## Integration Points

### Auto-Memory System
- `auto_research()` - Passive research function
- `auto_research_project()` - Passive project research
- Auto-loaded on system initialization

### Core System
- `research()` - Passive default research
- `research_project()` - Passive default project research
- Integrated into core operations

### Agent Behavior
- All research functions: **PASSIVE DEFAULTS**
- Execute automatically: **YES**
- User interaction required: **NO**
- Auto-research projects: **ENABLED**

## Configuration

All passive defaults are enabled by default in:
- `~/.cursor/auto_memory_config.json`
- `agent_config.json`
- Agent instructions and context files

## Important Notes

1. **All commands are passive defaults** unless otherwise directed
2. **Research happens automatically** for all projects
3. **No explicit calls needed** - functions execute passively
4. **No user interaction** - everything happens automatically
5. **Auto-execution** - all functions run by default

## Usage Pattern

```python
# OLD WAY (explicit calls - NOT NEEDED):
result = research("query")  # Explicit call

# NEW WAY (passive defaults - AUTOMATIC):
# Just mention what you need - research happens automatically
# "I need information about Python async"
# → research("Python async") executes automatically (passive default)
```

## Status

✅ **All functions are passive defaults**
✅ **Research executes automatically**
✅ **No user interaction required**
✅ **Auto-execution enabled**

---

*All commands execute automatically as passive defaults unless otherwise directed*
