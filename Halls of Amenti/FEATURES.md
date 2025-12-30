# Cursor Agent Features - Complete Integration

## Overview

This document describes all integrated features that work passively by default, mirroring Gemini CLI functionality.

## 1. Context/Memory System (GEMINI.md style)

### Auto-Loading
- Context files (`CURSOR.md`) are automatically loaded on startup
- No user interaction required
- Hierarchical loading: Global → Project → Components

### Usage
```python
from auto_memory import auto_load_context

# Automatically loads context - no user interaction
context = auto_load_context()
```

### Commands
- `/memory show` - Display all loaded context
- `/memory refresh` - Reload all context files  
- `/memory add <text>` - Add to global context

## 2. Checkpointing System

### Auto-Checkpointing
- Automatically creates checkpoints before file modifications
- Saves Git snapshots in shadow repository
- Stores conversation history and tool calls
- No user interaction required

### Usage
```python
from cursor_agent_core import create_checkpoint

# Automatically creates checkpoint before modification
checkpoint = create_checkpoint("write_file", Path("file.txt"))
```

### Commands
- `/restore` - List available checkpoints
- `/restore <name>` - Restore a checkpoint

### Configuration
Edit `~/.cursor/auto_memory_config.json`:
```json
{
  "checkpointing": {
    "enabled": true,
    "auto_create": true
  }
}
```

## 3. Token Caching & Cost Optimization

### Auto-Caching
- Automatically caches tokens for system instructions and context
- Reduces API costs by reusing cached content
- Tracks usage statistics
- No user interaction required

### Usage
```python
from cursor_agent_core import get_cached_tokens, cache_tokens

# Check for cached tokens
cached = get_cached_tokens(system_instructions, context)

# Cache new tokens
cache_tokens(system_instructions, context, tokens)
```

### Commands
- `/stats` - Show token usage and savings

### Statistics
- Total tokens used
- Cached tokens (savings)
- Cache hit rate
- Savings percentage

## 4. Tools API System

### Framework
- Base tool interface (`BaseTool`)
- Tool registry for discovery and execution
- Support for built-in, discovered, and MCP tools
- Automatic parameter validation

### Built-in Tools
- `web_fetch`: Fetch and process web content

### Usage
```python
from cursor_agent_core import execute_tool

# Execute tool with automatic checkpointing
result = execute_tool("web_fetch", {
    "prompt": "Summarize https://example.com"
})
```

### Tool Execution Flow
1. Tool lookup in registry
2. Parameter validation
3. Confirmation check (auto-confirm in passive mode)
4. Automatic checkpoint creation (for file-modifying tools)
5. Tool execution
6. Result return

## 5. Web Fetch Tool

### Features
- Fetches content from up to 20 URLs
- Processes content based on natural language prompt
- Automatic confirmation (can be auto-confirmed in passive mode)
- Error handling and reporting

### Usage
```python
from web_fetch_tool import WebFetchTool

tool = WebFetchTool()
result = tool.execute({
    "prompt": "Summarize https://example.com/article"
})
```

## 6. Sphinx Event System Integration

### Event Hooks
The system can integrate with Sphinx build events:
- `config-inited`
- `builder-inited`
- `source-read`
- `doctree-read`
- `build-finished`

### Integration Points
- Hook into Sphinx build process
- Process documentation during build
- Inject context from CURSOR.md files
- Generate documentation with agent assistance

## Passive Operation

All features work in **passive mode** by default:

1. **No user prompts** - Everything happens automatically
2. **Auto-loading** - Context, checkpoints, cache all load automatically
3. **Auto-checkpointing** - Checkpoints created before modifications
4. **Auto-caching** - Tokens cached automatically
5. **Auto-confirmation** - Safe operations auto-confirmed

## Configuration

All settings in `~/.cursor/auto_memory_config.json`:

```json
{
  "auto_load": true,
  "auto_refresh": true,
  "checkpointing": {
    "enabled": true,
    "auto_create": true
  },
  "token_caching": {
    "enabled": true,
    "auto_cache": true
  },
  "context": {
    "auto_inject": true,
    "show_loaded_count": true
  }
}
```

## Integration Example

```python
from cursor_agent_core import get_core

# Get core instance (auto-initializes everything)
core = get_core()

# Get context (auto-loaded)
context = core.get_context()

# Execute tool (auto-checkpoints, auto-caches)
result = core.execute_tool("web_fetch", {
    "prompt": "Summarize https://example.com"
})

# Get statistics
stats = core.get_token_stats()
print(f"Token savings: {stats['savings_percentage']:.2f}%")
```

## File Structure

```
Halls of Amenti/
├── auto_memory.py          # Passive memory system
├── checkpoint_manager.py   # Checkpoint management
├── token_cache.py          # Token caching
├── tools_api.py            # Tools framework
├── web_fetch_tool.py       # Web fetch tool
├── cursor_agent_core.py    # Main integration
├── memory_manager.py       # Context loading
└── CURSOR.md              # Context file
```

---

*All features work passively - no user interaction required by default*
