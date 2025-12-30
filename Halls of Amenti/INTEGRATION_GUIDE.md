# Cursor Agent Context System Integration Guide

## Overview

This system integrates a GEMINI.md-style context system into Cursor agent, providing hierarchical memory management and instructional context.

## Architecture

### Core Components

1. **MemoryManager** (`memory_manager.py`)
   - Handles hierarchical context file loading
   - Processes import statements (`@file.md`)
   - Manages `.gitignore` and `.cursorignore` patterns
   - Provides `/memory` command functionality

2. **CursorAgentIntegration** (`cursor_integration.py`)
   - Integration layer for Cursor agent
   - Configuration management
   - Command processing
   - Context summarization

3. **Context Files** (`CURSOR.md`)
   - Hierarchical instruction files
   - Support for imports
   - Project-specific guidance

## Integration with Cursor Agent

### Method 1: Direct Python Integration

Use the memory manager in your Cursor agent scripts:

```python
from memory_manager import MemoryManager

manager = MemoryManager()
context = manager.load_all_contexts()
# Use context to inform agent behavior
```

### Method 2: CLI Commands

Use the CLI interface for memory management:

```bash
# Show current memory
python3 memory_manager.py show

# Refresh context
python3 memory_manager.py refresh

# Add to global context
python3 memory_manager.py add "Remember: Always use type hints"
```

### Method 3: Cursor Agent Hooks

Integrate with Cursor agent's existing hooks by:

1. Creating a pre-prompt hook that loads context
2. Injecting context into agent prompts
3. Using `/memory` commands in chat interface

## Context File Structure

### Global Context (`~/.cursor/CURSOR.md`)
- Applies to all projects
- Default instructions
- General coding guidelines

### Project Context (`/project/CURSOR.md`)
- Project-specific instructions
- Project structure documentation
- Team conventions

### Component Context (`/project/components/CURSOR.md`)
- Component-specific guidance
- Module-level instructions
- Implementation details

## Import System

Use `@file.md` syntax to modularize context:

```markdown
# Main CURSOR.md

@./components/instructions.md
@./shared/style-guide.md
@../company-standards.md
```

## Configuration

Edit `~/.cursor/agent-config.json`:

```json
{
  "context": {
    "fileName": ["CURSOR.md", "AGENTS.md", "CONTEXT.md"]
  },
  "memory": {
    "autoRefresh": true,
    "showLoadedCount": true
  }
}
```

## Overriding Default Behavior

To override cursor-agent defaults:

1. Set `CURSOR.md` files in your project
2. Use imports to include shared context
3. Configure custom file names in `agent-config.json`
4. The system will automatically load and concatenate all contexts

## Best Practices

1. **Keep contexts focused**: Each file should have a clear purpose
2. **Use imports**: Break large contexts into smaller, reusable files
3. **Version control**: Commit `CURSOR.md` files to your repository
4. **Document structure**: Explain your context hierarchy in README
5. **Regular updates**: Keep context files current with project changes

## Troubleshooting

### Context not loading
- Check file paths and names match configuration
- Verify `.cursorignore` isn't excluding files
- Run `memory_manager.py refresh` to force reload

### Imports not working
- Verify import paths are relative to the importing file
- Check that imported files exist
- Look for warnings in context output

### Performance issues
- Limit context file sizes
- Use imports to avoid duplication
- Consider caching for large projects

## Migration from GEMINI.md

If you have existing GEMINI.md files:

1. Rename to `CURSOR.md` (or configure custom name)
2. Update import paths if needed
3. Test with `memory_manager.py show`
4. Adjust as needed

## Example Workflow

```bash
# 1. Create project context
echo "# Project Context" > CURSOR.md

# 2. Add component context
mkdir -p components
echo "# Component Context" > components/CURSOR.md

# 3. Load and verify
python3 memory_manager.py show

# 4. Add to global memory
python3 memory_manager.py add "Always use async/await for I/O"

# 5. Use in agent
python3 cursor_integration.py load
```

---

*This system mirrors the GEMINI.md functionality while integrating seamlessly with Cursor agent workflows.*
