# 🚀 Quick Start Guide

## Installation

If you see `next: not found` or missing `node_modules`:

```bash
# Install dependencies
pnpm install

# Or with npm
npm install
```

## Running the App

```bash
# Start development server
pnpm dev

# Or with npm
npm run dev
```

The app will be available at: **http://localhost:3000**

## Available Pages

- **/** - Main page with Web3Auth integration
- **/metamask** - MetaMask SDK page with Gas API
- **/treasure** - Treasure DAO contracts and balances

## Troubleshooting

### "next: not found"
Run `pnpm install` to install dependencies.

### "node_modules missing"
Run `pnpm install` to install all packages.

### Port already in use
Change the port:
```bash
pnpm dev -- -p 3001
```

## Environment Variables

Make sure `.env.local` exists with:
```
NEXT_PUBLIC_WEB3AUTH_CLIENT_ID=OWuCNGSkoAHYrxWhW2IgAUK1MnmmvU+qMDaB+MmzV1+zoGNl2wS1Rg
```

---

**Status:** ✅ Ready to run!
