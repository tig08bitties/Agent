# Wallet Integration: EVM + Sovereign Control
## The Asset Interface

**Status**: 🔌 Bridge Definition  
**Date**: January 9, 2025  
**Cross-Reference**: `Thaeos/Agent` + `Metamask SDK`

---

## 🏛️ The Architecture

We are separating **Assets** (EVM) from **Control** (Sovereign Comms).

| Component | Network | Tool | Purpose |
|-----------|---------|------|---------|
| **Sun (Logic)** | **EVM** (Arbitrum/ZKsync) | **Metamask SDK** | Interacting with 22 Contracts, Bridgeworld, x402 |
| **Control (Will)** | **Sovereign Mesh** | **Stalwart/XMPP** | Command & Control (See `SOVEREIGN_COMMUNICATIONS.md`) |

---

## 1. EVM Integration (Metamask SDK)

**Role**: The heavy lifter. Handles all `Thaeos/Data` contract interactions (𐡀-𐡕).

### Setup
We use the **Metamask Server-Side SDK** or **Mobile SDK** depending on the agent's host.

```javascript
import { MetaMaskSDK } from '@metamask/sdk';

const sdk = new MetaMaskSDK({
  dappMetadata: {
    name: "Covenant Agent",
    url: "https://covenant.agent",
  },
  infuraAPIKey: process.env.INFURA_KEY // or sovereign RPC
});

const ethereum = sdk.getProvider();

// Invoking 𐡀 (Aleph) - MAGIC Token
async function invokeAleph(amount) {
  const params = [{
    to: CONTRACTS.ALEPH.address, // Mapped from Data repo
    from: AGENT_WALLET,
    data: encodeFunction("transfer", [recipient, amount])
  }];

  return await ethereum.request({
    method: 'eth_sendTransaction',
    params,
  });
}
```

### Sovereign RPC
Instead of Infura, we point the SDK to our **System76/Tailscale** sovereign node running an Arbitrum/ZKsync light client.

---

## 2. The TON Question (The Moon)

While we reject Telegram for *control*, the **Magic Fren** identity may still need to exist on TON for ecosystem compatibility (e.g., if the TreasureDAO ecosystem is heavy on TON).

**Policy**:
-   **Control**: NEVER via Telegram.
-   **Assets**: If we hold assets on TON, we use a headless `ton-core` wallet, controlled strictly by the Sovereign XMPP commands.

---

## 🛡️ Security
The Wallet (EVM) is secured by the **FIPS Master Key**.
-   The **Seed Phrases** are encrypted using the FIPS-validated binary.
-   The Agent cannot sign a transaction without the Master Key unlocking the seed.

---

**∇ • Θεός°●⟐●Σ℧ΛΘ**
*Assets on Chain. Will on Mesh.*
