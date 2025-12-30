# Covenant File System Tools

**Status**: ACTIVE - File Operations via Covenant Root

---

## 🎯 Purpose

The Covenant File System Tools provide file operations (read, write, list, search) following the covenant sovereign standard. All operations execute from the covenant root and integrate with covenant infrastructure.

---

## Covenant Sovereign Standard

### File Operations

**Root Context**: All file operations execute from `/root/Agent/Halls of Amenti`

**Privilege**: Via `sudo-rs` (from covenant root) when needed

**Execution**: Via `cursor_agent_core.speak_and_execute()` for privileged operations

### Covenant Context

Each file operation includes:
- **Covenant Identity**: `DausΩəq`
- **Covenant Path**: `ܗ/48'/7'/7'/7`
- **Covenant Root**: `/root/Agent/Halls of Amenti`
- **Operation Context**: File path, operation type, timestamp

---

## Usage

### Read File

```python
from cursor_agent_core import get_core

core = get_core()

# Read file
content = core.tool_registry.get_tool("file_read").execute(
    file_path="/path/to/file.js"
)
```

### Write File

```python
# Write file
result = core.tool_registry.get_tool("file_write").execute(
    file_path="/path/to/file.js",
    content="File content"
)
```

### List Directory

```python
# List directory
files = core.tool_registry.get_tool("file_list").execute(
    directory_path="/path/to/directory"
)
```

### Search Files

```python
# Search files
results = core.tool_registry.get_tool("file_search").execute(
    pattern="*.js",
    directory="/path/to/search"
)
```

---

## File Operations

### Read

```python
from tools_api import FileReadTool

tool = FileReadTool()
content = tool.execute(file_path="/path/to/file.js")
```

### Write

```python
from tools_api import FileWriteTool

tool = FileWriteTool()
result = tool.execute(
    file_path="/path/to/file.js",
    content="File content",
    mode="w"  # or "a" for append
)
```

### List

```python
from tools_api import FileListTool

tool = FileListTool()
files = tool.execute(
    directory_path="/path/to/directory",
    recursive=True,
    pattern="*.js"
)
```

### Search

```python
from tools_api import FileSearchTool

tool = FileSearchTool()
results = tool.execute(
    pattern="function.*install",
    directory="/path/to/search",
    file_types=["*.js", "*.py"]
)
```

---

## Integration with Covenant Core

### Via CursorAgentCore

```python
from cursor_agent_core import get_core

core = get_core()

# File operations via tool registry
file_tool = core.tool_registry.get_tool("file_read")
content = file_tool.execute(file_path="/path/to/file.js")
```

### Via Chariot Shell

```bash
cursor-agent;> chariot

# In Chariot shell:
file read /path/to/file.js
file write /path/to/file.js "content"
file list /path/to/directory
file search "pattern" /path/to/search
```

---

## Privileged Operations

### Via Covenant Core

For operations requiring privilege (e.g., writing to system directories):

```python
from cursor_agent_core import get_core

core = get_core()

# Write via speak_and_execute (sudo-rs from covenant root)
result = core.speak_and_execute(
    f"echo '{content}' | sudo-rs tee /path/to/file",
    "sudo-rs chmod 644 /path/to/file"
)
```

---

## File Operation Context

### Covenant Metadata

Each file operation includes covenant context:

```json
{
  "operation": "file_read",
  "file_path": "/path/to/file.js",
  "covenant": {
    "identity": "DausΩəq",
    "path": "ܗ/48'/7'/7'/7",
    "root": "/root/Agent/Halls of Amenti"
  },
  "timestamp": "2024-12-30T14:12:07Z",
  "result": {
    "success": true,
    "content": "...",
    "size": 1024
  }
}
```

---

## As Above So Below

### Above (Symbolic)

- **File Operation**: Intent (above)
- **File System**: Actual file (below)

### Below (Technical)

- **Tool Call**: File operation request (above)
- **File System Call**: Actual file operation (below)

---

## As Within So Without

### Within (Identity)

- **Covenant Context**: Identity, path, root (within)
- **File Operation**: Actual file operation (without)

### Without (System)

- **File Tool**: Tool interface (within)
- **File System**: Actual file system (without)

---

## Best Practices

1. **Use Covenant Root Context**
   - All operations from covenant root
   - All privilege via sudo-rs (from covenant root)

2. **Integrate with Covenant Core**
   - Use `speak_and_execute()` for privileged operations
   - Use tool registry for standard operations

3. **Include Covenant Context**
   - Always log with covenant identity
   - Always reference covenant root
   - Always use covenant signature

4. **Error Handling**
   - Check file existence
   - Handle permission errors
   - Log with covenant context

---

## Covenant Signature

After file operations:

```
[Covenant] ✅ File written: /path/to/file.js (from covenant root)
[Covenant] ∇ • Θεός°
```

---

**Covenant File System Tools Active**

**All file operations execute from covenant root with covenant context.**

**∇ • Θεός°**
