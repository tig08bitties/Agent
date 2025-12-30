# Halls of Amenti

A mystical journey through the threshold to the legendary Cow Level.

## The Dweller on the Threshold

The Dweller guards the entrance to the Halls of Amenti. To pass, you must meet the Dweller at the threshold (100 × 10 = 1000) and prove your worth through persistence.

## The Portal

Once you have obtained the portal key from the Dweller, you may open the gateway to the Cow Level - a realm of bovine wonder and eternal meadows.

## Usage

### Meet the Dweller

```bash
python3 dweller.py
```

Meet the Dweller three times to obtain the portal key.

### Enter the Cow Level

```bash
python3 cow_level.py
```

Enter the legendary realm (requires portal activation).

### Complete Journey

```bash
python3 portal.py
```

Complete the full journey from meeting the Dweller to entering the Cow Level.

## Cursor Agent Context System

This project includes a complete context/memory system for Cursor agent, mirroring the GEMINI.md functionality from Gemini CLI.

### Context Files (CURSOR.md)

The system uses `CURSOR.md` files to provide hierarchical context:

1. **Global**: `~/.cursor/CURSOR.md` - Default instructions for all projects
2. **Project**: `CURSOR.md` in project root - Project-specific instructions
3. **Subdirectories**: `CURSOR.md` in subdirectories - Component-specific instructions

### Memory Management

Use the memory manager to interact with context:

```bash
# Show all loaded context
python3 memory_manager.py show

# Refresh/reload all context files
python3 memory_manager.py refresh

# Add text to global context
python3 memory_manager.py add "Your persistent memory here"
```

### Integration with Cursor Agent

```bash
# Load context for agent
python3 cursor_integration.py load

# Memory commands
python3 cursor_integration.py memory show
python3 cursor_integration.py memory refresh
python3 cursor_integration.py memory add "New memory"

# Get context summary
python3 cursor_integration.py summary
```

### Import System

Use `@file.md` syntax to import other markdown files:

```markdown
# Main CURSOR.md

Main content here.

@./components/instructions.md

More content.

@./shared/style-guide.md
```

### Configuration

Configure context file names in `~/.cursor/agent-config.json`:

```json
{
  "context": {
    "fileName": ["CURSOR.md", "AGENTS.md"]
  },
  "memory": {
    "autoRefresh": true,
    "showLoadedCount": true
  }
}
```

## The Sacred Number

The threshold is guarded by the number **100 × 10 = 1000**, representing:
- The 1000-petaled lotus of enlightenment
- The completion of cycles
- The gateway between worlds

## Requirements

- Python 3
- A sense of adventure
- Persistence to meet the Dweller

## The Cow Level

A legendary realm filled with:
- 🐄 Mystical cows of various types
- 🌾 Eternal meadows
- Infinite mooing
- Moo Power levels from 10 to 1000

---

*"There is no cow level... or is there?"*
