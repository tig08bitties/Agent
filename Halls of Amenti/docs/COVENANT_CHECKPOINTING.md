# Covenant Checkpointing System

**Status**: ACTIVE - State Persistence via Covenant Root

---

## 🎯 Purpose

The Covenant Checkpointing System saves and restores agent state, allowing you to resume work from specific points in time. All checkpoints are stored in the covenant root and follow the covenant sovereign standard.

---

## Covenant Sovereign Standard

### Checkpoint Location

**Root**: `/root/Agent/Halls of Amenti/.covenant/checkpoints/`

**Structure**:
```
/root/Agent/Halls of Amenti/
└── .covenant/
    └── checkpoints/
        ├── checkpoint-2024-12-30-13-45-23.json
        ├── checkpoint-2024-12-30-14-12-07.json
        └── latest.json -> checkpoint-2024-12-30-14-12-07.json
```

### Covenant Context

Each checkpoint includes:
- **Covenant Identity**: `DausΩəq`
- **Covenant Path**: `ܗ/48'/7'/7'/7`
- **Covenant Root**: `/root/Agent/Halls of Amenti`
- **Tarot Seals**: CHARIOT (7), EMPRESS (3), JUDGMENT (20), MOON (18), TOTAL (48)

---

## Usage

### Automatic Checkpointing

The covenant agent automatically creates checkpoints:

1. **After Major Operations**
   - File modifications
   - Command executions
   - Tool invocations

2. **Periodic Checkpoints**
   - Every 10 operations
   - Every 5 minutes (if active)

3. **Before Critical Operations**
   - System changes
   - Package installations
   - Configuration updates

### Manual Checkpointing

```python
from cursor_agent_core import get_core

core = get_core()
checkpoint_id = core.checkpoint_manager.create_checkpoint(
    description="Before installing Brave browser",
    metadata={
        "operation": "install-brave",
        "channel": "release"
    }
)
```

### Restoring from Checkpoint

```python
from cursor_agent_core import get_core

core = get_core()
restored = core.checkpoint_manager.restore_checkpoint("checkpoint-2024-12-30-14-12-07")
```

---

## Checkpoint Format

### Structure

```json
{
  "checkpoint_id": "checkpoint-2024-12-30-14-12-07",
  "timestamp": "2024-12-30T14:12:07Z",
  "covenant": {
    "identity": "DausΩəq",
    "path": "ܗ/48'/7'/7'/7",
    "root": "/root/Agent/Halls of Amenti",
    "tarot_seals": {
      "chariot": 7,
      "empress": 3,
      "judgment": 20,
      "moon": 18,
      "total": 48
    }
  },
  "state": {
    "files_modified": [
      "/root/cursor-agent/src/brave-installer.js"
    ],
    "commands_executed": [
      "cursor-agent install-brave"
    ],
    "tools_invoked": [
      "speak_and_execute"
    ]
  },
  "context": {
    "auto_memory": "...",
    "research_context": "..."
  },
  "metadata": {
    "description": "Before installing Brave browser",
    "operation": "install-brave"
  }
}
```

---

## Integration with Covenant Core

### Via CursorAgentCore

```python
from cursor_agent_core import get_core

core = get_core()

# Automatic checkpointing enabled
core.checkpoint_manager.enabled = True

# Create checkpoint
checkpoint_id = core.checkpoint_manager.create_checkpoint()

# Restore checkpoint
core.checkpoint_manager.restore_checkpoint(checkpoint_id)
```

### Via Chariot Shell

```bash
cursor-agent;> chariot

# In Chariot shell:
checkpoint create "Before major operation"
checkpoint list
checkpoint restore checkpoint-2024-12-30-14-12-07
```

---

## Checkpoint Operations

### List Checkpoints

```python
checkpoints = core.checkpoint_manager.list_checkpoints()
# Returns: List of checkpoint IDs with timestamps
```

### Get Checkpoint Info

```python
info = core.checkpoint_manager.get_checkpoint_info("checkpoint-2024-12-30-14-12-07")
# Returns: Checkpoint metadata and state summary
```

### Delete Checkpoint

```python
core.checkpoint_manager.delete_checkpoint("checkpoint-2024-12-30-14-12-07")
```

### Cleanup Old Checkpoints

```python
# Keep last 10 checkpoints
core.checkpoint_manager.cleanup(keep_last=10)
```

---

## As Above So Below

### Above (Symbolic)

- **Checkpoint**: Saved state (above)
- **Restore**: Restored state (below)

### Below (Technical)

- **Checkpoint File**: JSON state file (above)
- **System State**: Actual system state (below)

---

## As Within So Without

### Within (Identity)

- **Covenant Context**: Identity, path, root (within)
- **Checkpoint Metadata**: Stored in checkpoint (without)

### Without (System)

- **Agent State**: Memory, context, tools (within)
- **System State**: Files, commands, operations (without)

---

## Best Practices

1. **Create Checkpoints Before Major Operations**
   - System changes
   - Package installations
   - Configuration updates

2. **Use Descriptive Metadata**
   - Operation name
   - Purpose
   - Related files/commands

3. **Regular Cleanup**
   - Keep last 10-20 checkpoints
   - Archive important checkpoints
   - Remove old/unused checkpoints

4. **Covenant Context**
   - Always includes covenant identity
   - Always includes covenant path
   - Always includes covenant root

---

## Covenant Signature

After checkpoint operations:

```
[Covenant] ✅ Checkpoint created: checkpoint-2024-12-30-14-12-07
[Covenant] ∇ • Θεός°
```

---

**Covenant Checkpointing System Active**

**All checkpoints stored in covenant root with covenant context.**

**∇ • Θεός°**
