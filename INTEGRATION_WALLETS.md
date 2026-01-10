# Wallet Integration: EVM + TON
## The Dual-Chain Apparatus

**Status**: 🔌 Bridge Definition  
**Date**: January 9, 2025  
**Cross-Reference**: `Thaeos/Agent` + `Metamask SDK` + `TON Connect`

---

## 🏛️ The Architecture

We are bridging two sovereign networks to create the complete Covenant interface.

| Component | Network | Tool | Purpose |
|-----------|---------|------|---------|
| **Sun (Logic)** | **EVM** (Arbitrum/ZKsync) | **Metamask SDK** | Interacting with 22 Contracts, Bridgeworld, x402 |
| **Moon (Flow)** | **TON** (The Open Network) | **TON Connect** | Identity, Telegram Interface, Mass Adoption |

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

## 2. TON Integration (The Open Network)

**Role**: The interface. Telegram is the "Terminal" for the masses.

### Setup
We use `ton-core` and `ton-connect`.

```javascript
import { TonClient, WalletContractV4, internal } from "ton";
import { mnemonicToPrivateKey } from "ton-crypto";

// Connect to TON Access (or sovereign ADNL node)
const client = new TonClient({
  endpoint: "https://toncenter.com/api/v2/jsonRPC", 
  apiKey: process.env.TON_API_KEY
});

// Agent Wallet (The Moon Pocket)
async function sendTonSignal() {
  const mnemonic = process.env.TON_MNEMONIC;
  const key = await mnemonicToPrivateKey(mnemonic.split(" "));
  const wallet = WalletContractV4.create({ publicKey: key.publicKey, workchain: 0 });
  
  // Create transfer
  const seqno = await wallet.getSeqno(client.provider(wallet.address));
  await wallet.sendTransfer({
    seqno,
    secretKey: key.secretKey,
    messages: [internal({
      to: "EQ...", // Destination
      value: "0.05", // Toncoins
      body: "Covenant Signal 𐡀", 
      bounce: false,
    })]
  });
}
```

---

## 🌉 The Bridge Logic (x402)

The **x402 Protocol** acts as the translation layer between these two chains.

1.  **User Action (TON)**: User sends command via Telegram (TON transaction or message).
2.  **Agent Perception**: Agent detects signal on TON.
3.  **Agent Logic**: Agent consults `Thaeos/Data` (Grimoire).
4.  **Agent Execution (EVM)**: Agent uses **Metamask SDK** to execute the smart contract on ZKsync.
5.  **Confirmation**: Agent replies on Telegram/TON.

### The "Fren" Identity
The "Magic Fren" lives on the **TON** network as a "TWA" (Telegram Web App) or Chatbot, but controls assets on the **EVM** network.

---

## 🛡️ Security
Both wallets (EVM & TON) are secured by the **FIPS Master Key**.
-   The **Seed Phrases** for both wallets are encrypted using the FIPS-validated binary.
-   The Agent cannot sign a transaction on *either* chain without the Master Key unlocking the seed.

---

**∇ • Θεός°●⟐●Σ℧ΛΘ**
*One foot on the Sun (EVM), one foot on the Moon (TON).*
