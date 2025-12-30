# CURSOR.md Files Status

## Files Located

### 1. Global CURSOR.md
- **Location**: `/root/.cursor/CURSOR.md`
- **Status**: ✅ Exists and configured
- **Purpose**: Global context for all projects
- **Content**: Default instructions, general guidelines, memory system info

### 2. Project CURSOR.md
- **Location**: `/root/Halls of Amenti/CURSOR.md`
- **Status**: ✅ Exists and updated
- **Purpose**: Project-specific context for Halls of Amenti
- **Content**: 
  - Project-specific instructions
  - Passive defaults configuration
  - Integration information (GitHub, Jules, Passport)
  - Project structure
  - Commands reference

## Recent Updates

✅ Updated project CURSOR.md to include:
- GitHub integration details
- Google Jules integration details
- Passport data organization information
- Sphinx documentation (Markdown & RST support)
- Updated project structure

## Context System

The CURSOR.md files are part of the hierarchical context system:
1. Global: `~/.cursor/CURSOR.md` (applies to all projects)
2. Project: `CURSOR.md` in project root (project-specific)
3. Subdirectories: `CURSOR.md` in subdirectories (component-specific)

## Memory Management

Use `/memory` commands to interact with CURSOR.md files:
- `/memory show` - Display all loaded context
- `/memory refresh` - Reload all CURSOR.md files
- `/memory add <text>` - Add to global CURSOR.md

## Import System

CURSOR.md files support imports using `@file.md` syntax:
```markdown
@./components/instructions.md
@./shared/style-guide.md
```

## Status

✅ Both CURSOR.md files are properly configured
✅ Project CURSOR.md updated with latest integrations
✅ Ready for use by Cursor agent

---

*CURSOR.md files verified and up to date*
