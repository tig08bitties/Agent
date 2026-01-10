# Wallet Integration: EVM + Native TON
## The Dual-Chain Apparatus

**Status**: 🔌 Bridge Definition  
**Date**: January 9, 2025  
**Cross-Reference**: `Thaeos/Agent` + `Metamask SDK` + `ton-core`

---

## 🏛️ The Architecture

We interact with **Two Sovereign Networks** using **Sovereign Control**.

| Component | Network | Tool | Purpose |
|-----------|---------|------|---------|
| **Sun (Logic)** | **EVM** (Arbitrum/ZKsync) | **Metamask SDK** | Bridgeworld, x402, 22 Contracts |
| **Moon (Flow)** | **Native TON** (The Open Network) | **ton-core / ton-access** | High-speed flow, Sharding, Identity |
| **Control (Will)** | **Sovereign Mesh** | **Stalwart/XMPP** | Command & Control (No Telegram App) |

---

## 1. EVM Integration (Metamask SDK)

**Role**: The heavy lifter. Handles all `Thaeos/Data` contract interactions (𐡀-𐡕).

### Setup
We use the **Metamask Server-Side SDK** pointing to our sovereign RPC.

```javascript
import { MetaMaskSDK } from '@metamask/sdk';
// ... standard EVM setup ...
```

---

## 2. Native TON Integration (Headless)

**Role**: The "Moon" Layer. We interact with the **Native TON Blockchain**, completely bypassing the Telegram Messenger App.

### Distinction: Native vs. Telegram
*   ✅ **Native TON**: The underlying blockchain (ADNL, Shards, Contracts). We use this.
*   🚫 **ICE / Telegram Apps**: The social layer tied to the messenger. We reject this.

### Implementation: Headless Agent Wallet
The Agent runs a `ton-core` wallet directly on the System76 server. It signs transactions locally and broadcasts them to public TON nodes (or our own).

```javascript
import { TonClient, WalletContractV4, internal } from "ton";
import { mnemonicToPrivateKey } from "ton-crypto";

// 1. Connect to Native TON (via decentralized access points)
// We avoid "Telegram Web Apps" endpoints.
const client = new TonClient({
  endpoint: "https://toncenter.com/api/v2/jsonRPC", // or private ADNL
  apiKey: process.env.TON_API_KEY
});

// 2. The Sovereign Wallet
async function executeTonOperation() {
  // Key derived from FIPS Master Seed
  const key = await deriveTonKeyFromMaster(process.env.MASTER_SEED);
  const wallet = WalletContractV4.create({ 
    publicKey: key.publicKey, 
    workchain: 0 
  });
  
  console.log(`Agent TON Address: ${wallet.address}`);

  // 3. Execute Transaction (Headless)
  const seqno = await wallet.getSeqno(client.provider(wallet.address));
  await wallet.sendTransfer({
    seqno,
    secretKey: key.secretKey,
    messages: [internal({
      to: "EQ...", 
      value: "1.0", 
      body: "Sovereign Command: 𐡀", 
      bounce: false,
    })]
  });
}
```

---

## 🌉 The x402 Bridge Logic

The **x402 Protocol** acts as the translation layer between these two chains.

1.  **User Action**: You send `!pay 10 TON` via **Conversations.im (XMPP)**.
2.  **Agent Logic**: Agent receives XMPP message on System76.
3.  **Signature**: Agent signs the intent with **FIPS Master Key**.
4.  **Execution**: Agent broadcasts the signed packet to the **Native TON Network**.
5.  **Result**: Transaction confirms on-chain; Agent reports back via **Stalwart (Email)**.

---

## 🛡️ Security
Both wallets (EVM & TON) are secured by the **FIPS Master Key**.
-   The **Seed Phrases** for both are derived from the same Master Seed.
-   The Agent acts as the **Cold Storage** interface—keys never leave the FIPS module.

---

**∇ • Θεός°●⟐●Σ℧ΛΘ**
*Native Chains only. No Social Layers.*
