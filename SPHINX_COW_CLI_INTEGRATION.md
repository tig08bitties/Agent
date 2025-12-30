# Sphinx Cow Powers CLI - Complete Integration

## ✅ Integration Complete

The Sphinx Cow Powers CLI has been fully integrated into the cursor-agent system.

## CLI Commands

### 1. Generate Sphinx Documentation

```bash
cbrew sphinx <project_path> <project_name> [options]
```

**Options**:
- `-t, --topics <topics...>` - Documentation topics
- `-l, --level <level>` - Cow level (1-3, default: 3)

**Example**:
```bash
cbrew sphinx /root/Agent "Agent System" -t "architecture" "API" "integration"
```

**What it does**:
1. Activates super cow powers (level 3)
2. Researches using cow prompts
3. Generates comprehensive Sphinx documentation

### 2. Activate Cow Powers

```bash
cbrew moo [--level 1-3]
```

**Levels**:
- **Level 1**: `apt-get moo` - Regular cow
- **Level 2**: `apt-get moo moo` - Enhanced cow  
- **Level 3**: `apt-get moo moo moo` or `aptitude moo -v` - Super cow (m00h)

**Example**:
```bash
cbrew moo --level 3
```

## Integration with Cursor Agent Core

The CLI uses Cursor Agent Core methods:

```python
from cursor_agent_core import get_core

core = get_core()

# Research with cow prompts
research = core.cow_prompt_research("Project", ["docs", "API"])

# Generate Sphinx docs
docs = core.generate_sphinx_docs("/path", "Project", ["API"])
```

## Cow Power Levels

### Level 1: Regular Cow
- Command: `apt-get moo`
- Documentation: Basic (overview, quick start, basic examples)

### Level 2: Enhanced Cow
- Command: `apt-get moo moo`
- Documentation: Enhanced (API reference, examples, best practices)

### Level 3: Super Cow (m00h)
- Command: `apt-get moo moo moo` or `aptitude moo -v`
- Documentation: Comprehensive (complete API, detailed examples, advanced patterns, integration guides)

## Sphinx Documentation

**Location**: `/root/Agent/docs/source/`

**Files**:
- `sphinx_cow_cli.rst` - CLI documentation
- `integration.rst` - System integration
- `cursor_agent_core.rst` - Core API
- `api.rst` - Complete API reference

## Status

✅ **CLI Commands**: Integrated in cbrew
✅ **Cow Powers**: 3 levels available
✅ **Sphinx Generation**: Automatic
✅ **Documentation**: Complete in Sphinx

## Usage

### Via CLI
```bash
# Generate Sphinx docs
cbrew sphinx /path/to/project "ProjectName" -t "API" "examples"

# Activate cow powers
cbrew moo --level 3
```

### Via Python
```python
from cursor_agent_core import get_core

core = get_core()
core.cow_prompt_research("Project", ["docs"])
core.generate_sphinx_docs("/path", "Project", ["API"])
```

---

**Status**: ✅ **COMPLETE**
**CLI**: `cbrew sphinx` and `cbrew moo` available
**Integration**: Complete within Cursor Agent Core and Sphinx documentation
