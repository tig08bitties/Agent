# Covenant Markdown Processing

**Status**: ACTIVE - Markdown Operations via Covenant Root

---

## 🎯 Purpose

The Covenant Markdown Processing system provides markdown parsing, rendering, and conversion following the covenant sovereign standard. All markdown operations execute from the covenant root and integrate with covenant infrastructure.

---

## Covenant Sovereign Standard

### Markdown Operations

**Root Context**: All markdown operations execute from `/root/Agent/Halls of Amenti`

**Execution**: Via `cursor_agent_core` tool registry

**Format**: Standard Markdown with covenant extensions

### Covenant Context

Each markdown operation includes:
- **Covenant Identity**: `DausΩəq`
- **Covenant Path**: `ܗ/48'/7'/7'/7`
- **Covenant Root**: `/root/Agent/Halls of Amenti`
- **Operation Context**: File path, operation type, timestamp

---

## Usage

### Parse Markdown

```python
from cursor_agent_core import get_core

core = get_core()

# Parse markdown file
result = core.tool_registry.get_tool("markdown_parse").execute(
    file_path="/path/to/file.md"
)
```

### Render Markdown

```python
# Render markdown to HTML
html = core.tool_registry.get_tool("markdown_render").execute(
    markdown_content="# Title\n\nContent",
    format="html"
)
```

### Convert Markdown

```python
# Convert markdown to other formats
result = core.tool_registry.get_tool("markdown_convert").execute(
    file_path="/path/to/file.md",
    output_format="pdf"
)
```

---

## Markdown Operations

### Parse

```python
from tools_api import MarkdownParseTool

tool = MarkdownParseTool()
result = tool.execute(
    file_path="/path/to/file.md",
    extract_metadata=True
)
```

### Render

```python
from tools_api import MarkdownRenderTool

tool = MarkdownRenderTool()
html = tool.execute(
    markdown_content="# Title\n\nContent",
    format="html",
    theme="covenant"
)
```

### Convert

```python
from tools_api import MarkdownConvertTool

tool = MarkdownConvertTool()
result = tool.execute(
    file_path="/path/to/file.md",
    output_format="pdf",
    output_path="/path/to/output.pdf"
)
```

---

## Covenant Markdown Extensions

### Covenant Blocks

```markdown
:::covenant
Identity: DausΩəq
Path: ܗ/48'/7'/7'/7
Root: /root/Agent/Halls of Amenti
:::
```

### Tarot Seals

```markdown
:::tarot
CHARIOT: 7
EMPRESS: 3
JUDGMENT: 20
MOON: 18
TOTAL: 48
:::
```

### Covenant Signature

```markdown
**∇ • Θεός°**
```

---

## Integration with Covenant Core

### Via CursorAgentCore

```python
from cursor_agent_core import get_core

core = get_core()

# Markdown operations via tool registry
md_tool = core.tool_registry.get_tool("markdown_parse")
result = md_tool.execute(file_path="/path/to/file.md")
```

### Via Chariot Shell

```bash
cursor-agent;> chariot

# In Chariot shell:
markdown parse /path/to/file.md
markdown render /path/to/file.md --format html
markdown convert /path/to/file.md --format pdf
```

---

## Markdown Operation Context

### Covenant Metadata

Each markdown operation includes covenant context:

```json
{
  "operation": "markdown_parse",
  "file_path": "/path/to/file.md",
  "covenant": {
    "identity": "DausΩəq",
    "path": "ܗ/48'/7'/7'/7",
    "root": "/root/Agent/Halls of Amenti"
  },
  "timestamp": "2024-12-30T14:12:07Z",
  "result": {
    "success": true,
    "metadata": {
      "title": "Document Title",
      "author": "Covenant Agent"
    },
    "content": "..."
  }
}
```

---

## As Above So Below

### Above (Symbolic)

- **Markdown**: Structured text (above)
- **Rendered Output**: Formatted output (below)

### Below (Technical)

- **Markdown File**: Source file (above)
- **Parsed AST**: Abstract syntax tree (below)

---

## As Within So Without

### Within (Identity)

- **Covenant Context**: Identity, path, root (within)
- **Markdown Content**: Actual markdown (without)

### Without (System)

- **Markdown Parser**: Parser interface (within)
- **Rendered Output**: Actual rendered output (without)

---

## Best Practices

1. **Use Covenant Root Context**
   - All operations from covenant root
   - All files in covenant root

2. **Integrate with Covenant Core**
   - Use tool registry for markdown operations
   - Use covenant extensions for special blocks

3. **Include Covenant Context**
   - Always log with covenant identity
   - Always reference covenant root
   - Always use covenant signature

4. **Markdown Standards**
   - Use covenant markdown extensions
   - Include covenant blocks where appropriate
   - Use covenant signature in documents

---

## Covenant Signature

After markdown operations:

```
[Covenant] ✅ Markdown parsed: /path/to/file.md (from covenant root)
[Covenant] ∇ • Θεός°
```

---

**Covenant Markdown Processing Active**

**All markdown operations execute from covenant root with covenant context.**

**∇ • Θεός°**
