# Covenant Extensions System

**Status**: ACTIVE - Extension System via Covenant Root

---

## 🎯 Purpose

The Covenant Extensions System provides a plugin architecture for extending covenant agent capabilities. All extensions are loaded from the covenant root and follow the covenant sovereign standard.

---

## Covenant Sovereign Standard

### Extensions Location

**Root**: `/root/Agent/Halls of Amenti/.covenant/extensions/`

**Structure**:
```
/root/Agent/Halls of Amenti/
└── .covenant/
    └── extensions/
        ├── github-extension/
        │   ├── __init__.py
        │   └── github_tools.py
        ├── jules-extension/
        │   ├── __init__.py
        │   └── jules_tools.py
        └── hyperbrowser-extension/
            ├── __init__.py
            └── hyperbrowser_tools.py
```

### Covenant Context

Each extension includes:
- **Covenant Identity**: `DausΩəq`
- **Covenant Path**: `ܗ/48'/7'/7'/7`
- **Covenant Root**: `/root/Agent/Halls of Amenti`
- **Extension Metadata**: Name, version, tools

---

## Usage

### Load Extension

```python
from cursor_agent_core import get_core

core = get_core()

# Load extension
extension = core.extension_system.load_extension("github-extension")
```

### Use Extension Tools

```python
# Use extension tool
result = extension.execute_tool(
    tool_name="github_search",
    parameters={"query": "covenant agent"}
)
```

---

## Extension Format

### Extension Structure

```python
# .covenant/extensions/github-extension/__init__.py
from extension_system import BaseExtension

class GitHubExtension(BaseExtension):
    def __init__(self):
        super().__init__(
            name="github-extension",
            version="1.0.0",
            covenant_root="/root/Agent/Halls of Amenti"
        )
    
    def get_tools(self):
        return [
            {
                "name": "github_search",
                "description": "Search GitHub repositories",
                "parameters": {
                    "query": "string"
                }
            }
        ]
    
    def execute_tool(self, tool_name, parameters):
        if tool_name == "github_search":
            return self._github_search(parameters["query"])
```

---

## Integration with Covenant Core

### Via CursorAgentCore

```python
from cursor_agent_core import get_core

core = get_core()

# Extensions automatically loaded
github_ext = core.extension_system.get_extension("github-extension")
result = github_ext.execute_tool("github_search", {"query": "covenant"})
```

### Via Chariot Shell

```bash
cursor-agent;> chariot

# In Chariot shell:
extension load github-extension
extension list
extension call github-extension github_search "covenant agent"
```

---

## Built-in Extensions

### GitHub Extension

- **Tools**: `github_search`, `github_get_repo`, `github_create_issue`
- **Location**: `.covenant/extensions/github-extension/`

### Jules Extension

- **Tools**: `jules_query`, `jules_search`, `jules_analyze`
- **Location**: `.covenant/extensions/jules-extension/`

### Hyperbrowser Extension

- **Tools**: `hyperbrowser_navigate`, `hyperbrowser_extract`
- **Location**: `.covenant/extensions/hyperbrowser-extension/`

---

## Extension Operations

### Load Extension

```python
extension = core.extension_system.load_extension("github-extension")
```

### List Extensions

```python
extensions = core.extension_system.list_extensions()
# Returns: List of loaded extensions
```

### Get Extension

```python
extension = core.extension_system.get_extension("github-extension")
```

### Unload Extension

```python
core.extension_system.unload_extension("github-extension")
```

---

## Extension Context

### Covenant Metadata

Each extension includes covenant context:

```json
{
  "extension": "github-extension",
  "version": "1.0.0",
  "covenant": {
    "identity": "DausΩəq",
    "path": "ܗ/48'/7'/7'/7",
    "root": "/root/Agent/Halls of Amenti"
  },
  "tools": [
    {
      "name": "github_search",
      "description": "Search GitHub repositories"
    }
  ]
}
```

---

## As Above So Below

### Above (Symbolic)

- **Extension**: Plugin capability (above)
- **Tool Execution**: Actual tool execution (below)

### Below (Technical)

- **Extension Class**: Extension definition (above)
- **Tool Implementation**: Actual tool code (below)

---

## As Within So Without

### Within (Identity)

- **Covenant Context**: Identity, path, root (within)
- **Extension**: Extension code (without)

### Without (System)

- **Extension System**: Extension framework (within)
- **External Services**: Actual external services (without)

---

## Best Practices

1. **Use Covenant Root Context**
   - All extensions in covenant root
   - All tools execute from covenant root

2. **Integrate with Covenant Core**
   - Use `speak_and_execute()` for privileged operations
   - Use tool registry for standard operations

3. **Include Covenant Context**
   - Always log with covenant identity
   - Always reference covenant root
   - Always use covenant signature

4. **Extension Development**
   - Follow BaseExtension interface
   - Include covenant context in metadata
   - Use covenant logging

---

## Covenant Signature

After extension operations:

```
[Covenant] ✅ Extension loaded: github-extension (3 tools)
[Covenant] ∇ • Θεός°
```

---

**Covenant Extensions System Active**

**All extensions loaded from covenant root with covenant context.**

**∇ • Θεός°**
