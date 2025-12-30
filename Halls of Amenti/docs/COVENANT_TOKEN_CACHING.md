# Covenant Token Caching System

**Status**: ACTIVE - API Optimization via Covenant Root

---

## 🎯 Purpose

The Covenant Token Caching System optimizes API usage by caching tokenized content, reducing API calls and costs. All caches are stored in the covenant root and follow the covenant sovereign standard.

---

## Covenant Sovereign Standard

### Cache Location

**Root**: `/root/Agent/Halls of Amenti/.covenant/token_cache/`

**Structure**:
```
/root/Agent/Halls of Amenti/
└── .covenant/
    └── token_cache/
        ├── cache-index.json
        ├── content-hash-abc123.json
        ├── content-hash-def456.json
        └── metadata.json
```

### Covenant Context

Each cache entry includes:
- **Covenant Identity**: `DausΩəq`
- **Covenant Path**: `ܗ/48'/7'/7'/7`
- **Covenant Root**: `/root/Agent/Halls of Amenti`
- **Cache Metadata**: Timestamp, hash, token count

---

## Usage

### Automatic Caching

The covenant agent automatically caches:

1. **File Content**
   - Source code files
   - Documentation
   - Configuration files

2. **API Responses**
   - Search results
   - Web fetch results
   - Tool outputs

3. **Context Data**
   - Research context
   - Memory context
   - Agent state

### Manual Caching

```python
from cursor_agent_core import get_core

core = get_core()

# Cache content
cache_key = core.token_cache.cache_content(
    content="File content or API response",
    metadata={
        "source": "file",
        "path": "/path/to/file.js"
    }
)

# Retrieve cached content
cached = core.token_cache.get_cached(cache_key)
```

---

## Cache Format

### Structure

```json
{
  "cache_key": "content-hash-abc123",
  "timestamp": "2024-12-30T14:12:07Z",
  "covenant": {
    "identity": "DausΩəq",
    "path": "ܗ/48'/7'/7'/7",
    "root": "/root/Agent/Halls of Amenti"
  },
  "content": "...",
  "tokens": {
    "input": 1500,
    "output": 500,
    "total": 2000
  },
  "metadata": {
    "source": "file",
    "path": "/path/to/file.js",
    "hash": "abc123..."
  }
}
```

---

## Integration with Covenant Core

### Via CursorAgentCore

```python
from cursor_agent_core import get_core

core = get_core()

# Automatic caching enabled
core.token_cache.enabled = True

# Cache content
cache_key = core.token_cache.cache_content(content)

# Get cached content
cached = core.token_cache.get_cached(cache_key)

# Check if cached
is_cached = core.token_cache.is_cached(cache_key)
```

### Cache Statistics

```python
stats = core.token_cache.get_stats()
# Returns: {
#   "total_entries": 150,
#   "total_tokens_saved": 50000,
#   "cache_hits": 1200,
#   "cache_misses": 300
# }
```

---

## Cache Operations

### Get Cache

```python
cached = core.token_cache.get_cached("content-hash-abc123")
# Returns: Cached content or None
```

### Set Cache

```python
core.token_cache.set_cache(
    key="content-hash-abc123",
    content="...",
    tokens={"input": 1500, "output": 500}
)
```

### Invalidate Cache

```python
# Invalidate specific cache
core.token_cache.invalidate("content-hash-abc123")

# Invalidate all caches
core.token_cache.invalidate_all()
```

### Cleanup Old Caches

```python
# Remove caches older than 7 days
core.token_cache.cleanup(days=7)
```

---

## Token Counting

### Count Tokens

```python
token_count = core.token_cache.count_tokens("Content to count")
# Returns: Token count
```

### Estimate Cost

```python
cost = core.token_cache.estimate_cost(
    input_tokens=1500,
    output_tokens=500,
    model="gemini-pro"
)
# Returns: Estimated cost
```

---

## As Above So Below

### Above (Symbolic)

- **Cache**: Stored knowledge (above)
- **Retrieval**: Retrieved knowledge (below)

### Below (Technical)

- **Cache File**: JSON cache file (above)
- **API Call**: Actual API request (below)

---

## As Within So Without

### Within (Identity)

- **Covenant Context**: Identity, path, root (within)
- **Cache Metadata**: Stored in cache (without)

### Without (System)

- **Token Cache**: Memory optimization (within)
- **API Usage**: Actual API calls (without)

---

## Best Practices

1. **Cache Frequently Accessed Content**
   - Source code files
   - Documentation
   - Configuration files

2. **Use Descriptive Metadata**
   - Source type
   - File path
   - Content hash

3. **Regular Cleanup**
   - Remove old caches
   - Keep frequently used caches
   - Monitor cache size

4. **Covenant Context**
   - Always includes covenant identity
   - Always includes covenant path
   - Always includes covenant root

---

## Covenant Signature

After cache operations:

```
[Covenant] ✅ Cache created: content-hash-abc123 (2000 tokens saved)
[Covenant] ∇ • Θεός°
```

---

**Covenant Token Caching System Active**

**All caches stored in covenant root with covenant context.**

**∇ • Θεός°**
