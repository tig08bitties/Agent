# Covenant MCP Server Integration

**Status**: ACTIVE - Model Context Protocol via Covenant Root

---

## 🎯 Purpose

The Covenant MCP Server provides Model Context Protocol integration, allowing external tools and services to interact with the covenant agent. All MCP operations execute from the covenant root and follow the covenant sovereign standard.

---

## Covenant Sovereign Standard

### MCP Server

**Root Context**: All MCP operations execute from `/root/Agent/Halls of Amenti`

**Execution**: Via `cursor_agent_core` for all tool calls

**Protocol**: Model Context Protocol (MCP) standard

### Covenant Context

Each MCP operation includes:
- **Covenant Identity**: `DausΩəq`
- **Covenant Path**: `ܗ/48'/7'/7'/7`
- **Covenant Root**: `/root/Agent/Halls of Amenti`
- **MCP Context**: Server name, tool name, parameters

---

## Usage

### Register MCP Server

```python
from cursor_agent_core import get_core

core = get_core()

# Register MCP server
core.extension_system.register_mcp_server(
    name="covenant-tools",
    server_url="mcp://localhost:8080",
    tools=["file_read", "file_write", "web_fetch"]
)
```

### Call MCP Tool

```python
# Call MCP tool
result = core.extension_system.call_mcp_tool(
    server="covenant-tools",
    tool="file_read",
    parameters={"file_path": "/path/to/file.js"}
)
```

---

## MCP Server Configuration

### Server Definition

```json
{
  "name": "covenant-tools",
  "url": "mcp://localhost:8080",
  "covenant": {
    "identity": "DausΩəq",
    "path": "ܗ/48'/7'/7'/7",
    "root": "/root/Agent/Halls of Amenti"
  },
  "tools": [
    {
      "name": "file_read",
      "description": "Read file from covenant root",
      "parameters": {
        "file_path": "string"
      }
    },
    {
      "name": "file_write",
      "description": "Write file to covenant root",
      "parameters": {
        "file_path": "string",
        "content": "string"
      }
    }
  ]
}
```

---

## Integration with Covenant Core

### Via CursorAgentCore

```python
from cursor_agent_core import get_core

core = get_core()

# MCP operations via extension system
mcp_result = core.extension_system.call_mcp_tool(
    server="covenant-tools",
    tool="file_read",
    parameters={"file_path": "/path/to/file.js"}
)
```

### Via Chariot Shell

```bash
cursor-agent;> chariot

# In Chariot shell:
mcp register covenant-tools mcp://localhost:8080
mcp call covenant-tools file_read /path/to/file.js
mcp list
```

---

## MCP Tool Execution

### Tool Call Flow

1. **Receive MCP Request**
   - Server name
   - Tool name
   - Parameters

2. **Route to Covenant Core**
   - Via `cursor_agent_core`
   - Via `speak_and_execute()` if needed

3. **Execute Tool**
   - From covenant root
   - With covenant context

4. **Return Result**
   - With covenant metadata
   - With covenant signature

---

## MCP Operation Context

### Covenant Metadata

Each MCP operation includes covenant context:

```json
{
  "operation": "mcp_tool_call",
  "server": "covenant-tools",
  "tool": "file_read",
  "covenant": {
    "identity": "DausΩəq",
    "path": "ܗ/48'/7'/7'/7",
    "root": "/root/Agent/Halls of Amenti"
  },
  "timestamp": "2024-12-30T14:12:07Z",
  "result": {
    "success": true,
    "data": "..."
  }
}
```

---

## As Above So Below

### Above (Symbolic)

- **MCP Request**: Intent (above)
- **MCP Response**: Actual response (below)

### Below (Technical)

- **MCP Protocol**: Protocol request (above)
- **Tool Execution**: Actual tool execution (below)

---

## As Within So Without

### Within (Identity)

- **Covenant Context**: Identity, path, root (within)
- **MCP Operation**: Actual MCP operation (without)

### Without (System)

- **MCP Server**: Server interface (within)
- **External Tools**: Actual external tools (without)

---

## Best Practices

1. **Use Covenant Root Context**
   - All operations from covenant root
   - All tool calls via covenant core

2. **Integrate with Covenant Core**
   - Use `speak_and_execute()` for privileged operations
   - Use tool registry for standard operations

3. **Include Covenant Context**
   - Always log with covenant identity
   - Always reference covenant root
   - Always use covenant signature

4. **Error Handling**
   - Handle MCP protocol errors
   - Handle tool execution errors
   - Log with covenant context

---

## Covenant Signature

After MCP operations:

```
[Covenant] ✅ MCP tool executed: file_read (server: covenant-tools)
[Covenant] ∇ • Θεός°
```

---

**Covenant MCP Server Active**

**All MCP operations execute from covenant root with covenant context.**

**∇ • Θεός°**
