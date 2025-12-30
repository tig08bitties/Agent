# 🐛 Quick Debug Start

## Start Debugging

```bash
cd /mnt/Covenant/Cursor-Agent/metamask-web3auth
pnpm dev:inspect
```

## Connect Debugger

### Chrome
1. Open new tab: `chrome://inspect`
2. Find "Next.js" in Remote Targets
3. Click **inspect**
4. Go to **Sources** tab
5. Set breakpoints in your code

### Firefox
1. Open new tab: `about:debugging`
2. Click **This Firefox**
3. Find app under Remote Targets
4. Click **Inspect**
5. Go to **Debugger** tab

## Debug Output

When you run `pnpm dev:inspect`, you'll see:
```
Debugger listening on ws://127.0.0.1:9229/...
ready - started server on 0.0.0.0:3000
```

The debugger is now available at port **9229**.

## Other Debug Modes

```bash
# Break on start
pnpm dev:inspect-brk

# Wait for debugger
pnpm dev:inspect-wait

# Remote debugging (Docker)
pnpm dev:remote
```

---

**Ready to debug!** 🐛🔍
