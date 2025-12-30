# ⚡ QUICK START — BATCAVE ENTRY

## 🚀 30-Second Setup

1. **Add to `~/.zshrc`**:
   ```bash
   cat /mnt/Covenant/Cursor-Agent/.zshrc-snippet >> ~/.zshrc
   source ~/.zshrc
   ```

2. **Navigate to Batcave**:
   ```bash
   cd /mnt/Covenant/Cursor-Agent
   ```

3. **Invoke the Archivist**:
   ```bash
   cursor-agent;> chariot
   ```

   Or simply:
   ```bash
   chariot
   ```

## ✅ That's It!

The Archivist will awaken with the boot splash and you'll be in the interactive terminal.

## 🔒 Security

- Only works in `/mnt/Covenant/Cursor-Agent`
- Silent failure everywhere else
- Hidden file (`.chariot`) with owner-only permissions
- No global installation required

See `BATCAVE_SETUP.md` for complete documentation.
