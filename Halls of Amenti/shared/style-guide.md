# Shared Style Guide

## Python Style for Halls of Amenti

### Documentation
- All modules must have module-level docstrings
- All classes must have class-level docstrings
- All public functions must have docstrings with:
  - Brief description
  - Parameters (if any)
  - Returns (if any)
  - Example usage (when helpful)

### Error Handling
- Use descriptive exception messages
- Catch specific exceptions, not bare `except:`
- Provide helpful error messages to users

### Code Organization
- One class per file when possible
- Group related functions together
- Use clear, descriptive names
- Keep functions under 50 lines when possible
