# Covenant Web Fetch Tools

**Status**: ACTIVE - Web Operations via Covenant Root

---

## 🎯 Purpose

The Covenant Web Fetch Tools provide web operations (fetch, search, scrape) following the covenant sovereign standard. All operations execute from the covenant root and integrate with covenant infrastructure.

---

## Covenant Sovereign Standard

### Web Operations

**Root Context**: All web operations execute from `/root/Agent/Halls of Amenti`

**Execution**: Via `cursor_agent_core` tool registry

**Caching**: Integrated with covenant token cache

### Covenant Context

Each web operation includes:
- **Covenant Identity**: `DausΩəq`
- **Covenant Path**: `ܗ/48'/7'/7'/7`
- **Covenant Root**: `/root/Agent/Halls of Amenti`
- **Operation Context**: URL, method, headers, timestamp

---

## Usage

### Fetch URL

```python
from cursor_agent_core import get_core

core = get_core()

# Fetch URL
result = core.tool_registry.get_tool("web_fetch").execute(
    url="https://example.com",
    method="GET",
    headers={"User-Agent": "Covenant-Agent/1.0"}
)
```

### Search Web

```python
# Search web (via Brave Search)
results = core.tool_registry.get_tool("brave_search").execute(
    query="covenant agent installation",
    count=10
)
```

---

## Web Operations

### Fetch

```python
from web_fetch_tool import WebFetchTool

tool = WebFetchTool()
result = tool.execute(
    url="https://example.com",
    method="GET",
    headers={"User-Agent": "Covenant-Agent/1.0"},
    timeout=30
)
```

### Search

```python
from brave_search_tool import BraveSearchTool

tool = BraveSearchTool()
results = tool.execute(
    query="covenant agent",
    count=10,
    safe_search="moderate"
)
```

---

## Integration with Covenant Core

### Via CursorAgentCore

```python
from cursor_agent_core import get_core

core = get_core()

# Web operations via tool registry
web_tool = core.tool_registry.get_tool("web_fetch")
result = web_tool.execute(url="https://example.com")
```

### Via Chariot Shell

```bash
cursor-agent;> chariot

# In Chariot shell:
web fetch https://example.com
web search "covenant agent"
```

---

## Caching

### Automatic Caching

Web fetch results are automatically cached:

```python
# First fetch - API call
result1 = web_tool.execute(url="https://example.com")

# Second fetch - Cached
result2 = web_tool.execute(url="https://example.com")
# Uses cached result, no API call
```

### Cache Control

```python
# Force fresh fetch (bypass cache)
result = web_tool.execute(
    url="https://example.com",
    cache=False
)
```

---

## Web Operation Context

### Covenant Metadata

Each web operation includes covenant context:

```json
{
  "operation": "web_fetch",
  "url": "https://example.com",
  "covenant": {
    "identity": "DausΩəq",
    "path": "ܗ/48'/7'/7'/7",
    "root": "/root/Agent/Halls of Amenti"
  },
  "timestamp": "2024-12-30T14:12:07Z",
  "result": {
    "success": true,
    "status_code": 200,
    "content": "...",
    "cached": false
  }
}
```

---

## As Above So Below

### Above (Symbolic)

- **Web Request**: Intent (above)
- **Web Response**: Actual response (below)

### Below (Technical)

- **Tool Call**: Web operation request (above)
- **HTTP Request**: Actual HTTP request (below)

---

## As Within So Without

### Within (Identity)

- **Covenant Context**: Identity, path, root (within)
- **Web Operation**: Actual web operation (without)

### Without (System)

- **Web Tool**: Tool interface (within)
- **Internet**: Actual internet (without)

---

## Best Practices

1. **Use Covenant Root Context**
   - All operations from covenant root
   - All caching in covenant root

2. **Integrate with Covenant Core**
   - Use tool registry for web operations
   - Use token cache for response caching

3. **Include Covenant Context**
   - Always log with covenant identity
   - Always reference covenant root
   - Always use covenant signature

4. **Error Handling**
   - Handle network errors
   - Handle timeout errors
   - Log with covenant context

---

## Covenant Signature

After web operations:

```
[Covenant] ✅ Web fetch complete: https://example.com (cached: false)
[Covenant] ∇ • Θεός°
```

---

**Covenant Web Fetch Tools Active**

**All web operations execute from covenant root with covenant context.**

**∇ • Θεός°**
