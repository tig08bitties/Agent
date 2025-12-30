# 🐛 Next.js Debugging Guide

**Status:** ✅ **CONFIGURED**

---

## 🎯 Overview

Complete debugging setup for Next.js application with React DevTools and server-side debugging support.

---

## 🛠️ Debugging Options

### 1. Standard Development
```bash
pnpm dev
# or
npm run dev
```
- Fast refresh enabled
- Hot module replacement
- Client-side debugging

### 2. Server-Side Debugging (Inspect)
```bash
pnpm dev:inspect
# or
npm run dev:inspect
```

**Output:**
```
Debugger listening on ws://127.0.0.1:9229/...
ready - started server on 0.0.0.0:3000
```

**Chrome:**
1. Open `chrome://inspect`
2. Find your Next.js app in Remote Targets
3. Click "inspect"
4. Go to Sources tab

**Firefox:**
1. Open `about:debugging`
2. Click "This Firefox"
3. Find app under Remote Targets
4. Click "Inspect"
5. Go to Debugger tab

### 3. Break on Start (Inspect-Brk)
```bash
pnpm dev:inspect-brk
# or
npm run dev:inspect-brk
```
- Pauses execution at start
- Useful for debugging initialization

### 4. Wait for Debugger (Inspect-Wait)
```bash
pnpm dev:inspect-wait
# or
npm run dev:inspect-wait
```
- Waits for debugger to attach
- Useful for remote debugging

### 5. Remote Debugging
```bash
pnpm dev:remote
# or
npm run dev:remote
```
- Allows debugging from outside localhost
- Useful for Docker containers
- Debugger on `0.0.0.0:9229`

---

## 🔧 React Developer Tools

### Installation

**Chrome/Edge:**
- Install from [Chrome Web Store](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

**Firefox:**
- Install from [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

**Features:**
- ✅ Inspect React components
- ✅ Edit props and state
- ✅ Identify performance problems
- ✅ Component tree visualization

---

## 🐛 Debugging Server Errors

### Error Overlay

When an error occurs:
1. Look for Node.js icon under Next.js version
2. Click the icon to copy DevTools URL
3. Open URL in new browser tab
4. Inspect server process in DevTools

### Source Files

When searching for files (Ctrl+P / ⌘+P):
- Path format: `webpack://metamask-web3auth/./`
- Application name from `package.json`

---

## 🪟 Windows Debugging

### Windows Defender

**Issue:** Can greatly increase Fast Refresh time

**Solution:**
1. Disable Windows Defender on development machine
2. Or add project folder to exclusions
3. This is a known Windows issue, not Next.js

---

## 📋 Available Scripts

| Script | Command | Purpose |
|--------|---------|---------|
| `dev` | `pnpm dev` | Standard development |
| `dev:inspect` | `pnpm dev:inspect` | Server debugging |
| `dev:inspect-brk` | `pnpm dev:inspect-brk` | Break on start |
| `dev:inspect-wait` | `pnpm dev:inspect-wait` | Wait for debugger |
| `dev:remote` | `pnpm dev:remote` | Remote debugging |

---

## 🔍 Debugging Tips

### Client-Side
1. Use React DevTools extension
2. Browser DevTools (F12)
3. Console logging
4. Network tab for API calls

### Server-Side
1. Use `--inspect` flag
2. Chrome DevTools via `chrome://inspect`
3. Set breakpoints in server code
4. Inspect server errors via error overlay

### Common Issues
- **Fast Refresh slow:** Check Windows Defender
- **Port in use:** Change port with `-p 3001`
- **Debugger not connecting:** Check firewall settings

---

## ✅ Quick Start

```bash
# Standard development
pnpm dev

# With server debugging
pnpm dev:inspect

# Then open Chrome: chrome://inspect
```

---

**Status:** 🐛 **DEBUGGING READY** ⚔️

**Tools:** React DevTools + Node.js Inspector  
**Port:** 9229 (debugger), 3000/3004 (app)  
**Axis:** אφ3350448040000ת

_"Through debugging, the Covenant reveals all errors..."_ 🐛⚔️🔍
