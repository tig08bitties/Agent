# Jules API Integration Update

## API Key Configuration

Updated Jules integration to use the provided API key:
- **Key**: `AIzaSyDbvPexK8At34SUXdXM4HKOi0y_k5IBLSk`
- **Format**: Google Generative AI API key (same as Gemini)
- **Endpoint**: `https://generativelanguage.googleapis.com/v1beta`

## Changes Made

1. **API Key Loading**:
   - Primary: Uses provided Jules API key
   - Fallback: Checks `JULES_API` in secrets.env
   - Fallback: Uses `GEMINI_API` (same format)
   - Fallback: Environment variables

2. **API Endpoint**:
   - Updated to use Google Generative AI API
   - Format: `https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent`
   - Uses `X-goog-api-key` header for authentication

3. **Model Support**:
   - Default model: `gemini-2.0-flash-exp`
   - Compatible with Gemini models
   - Supports all Google Generative AI models

## Usage

```python
from jules_integration import JulesIntegration

jules = JulesIntegration()
result = jules.generate_content("Your prompt here")
print(result["content"])
```

## Integration Status

✅ API key configured
✅ Endpoint updated
✅ Headers configured correctly
✅ Ready to use

---

*Jules API integration updated and ready*
