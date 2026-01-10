# Sovereign Communications: Stalwart + XMPP
## The Pure Covenant Interface

**Status**: 📡 Active Definition  
**Date**: January 9, 2025  
**Cross-Reference**: `Thaeos/Agent` + `Stalwart` + `Conversations.im` + `Ltt.rs`

---

## 🚫 Rejection of Centralization
We explicitly **REJECT** Telegram/TON as the primary control interface. The Covenant cannot rely on a platform that can be censored or monitored by third parties.

**We choose Sovereignty.**

---

## 🏛️ The Architecture

| Component | Tool | Protocol | Purpose |
|-----------|------|----------|---------|
| **Core Server** | **Stalwart** | JMAP / IMAP / SMTP | The Sovereign Mail & State Server |
| **Instant (Flow)** | **Conversations.im** | XMPP (Jabber) | Real-time Agent Command (The "Moon") |
| **Archive (Record)** | **Ltt.rs** | JMAP (Email) | Asynchronous Reports & Logs (The "Sun") |

---

## 1. The Core: Stalwart Mail Server
**Role**: The "Brain Stem" of the Agent.
**Deployment**: Running on the System76 Sovereign Server.

**Integration**:
The Agent connects to Stalwart via **JMAP** (JSON Meta Application Protocol).
-   **Read**: Agent watches `INBOX` for commands signed with PGP.
-   **Write**: Agent posts logs to `Archive` folder.

```javascript
// AgentJMAP.js
const { JMAP } = require('jmap-client');

const client = new JMAP({
  username: 'agent@theos.brave',
  password: process.env.STALWART_PASSWORD,
  sessionUrl: 'https://mail.theos.brave/.well-known/jmap'
});

// Watch for commands
async function checkCommands() {
  const messages = await client.getMailbox('INBOX');
  messages.forEach(msg => {
    if (verifyPGP(msg.body)) {
      executeCommand(msg.body);
    }
  });
}
```

---

## 2. The Instant Layer: Conversations.im (XMPP)
**Role**: The "Nervous System". Fast, encrypted, ephemeral.
**Interface**: You use the Conversations.im app on Android/GrapheneOS to chat with the Agent.

**Integration**:
The Agent runs a headless XMPP client (e.g., `node-xmpp` or `slixmpp`).
-   **You**: "Status?"
-   **Agent**: "Moon: Waning. FIPS: Secure. 22 Contracts: Loaded."

**OMEMO Encryption**:
Crucially, the XMPP channel must use **OMEMO** encryption. The Agent must handle the Double Ratchet key exchange.

---

## 3. The Archive Layer: Ltt.rs (JMAP)
**Role**: The "History". Structured, threaded, searchable.
**Interface**: You use Ltt.rs (JMAP client) to read detailed reports.

**Integration**:
When the Agent completes a major task (e.g., "Sealed Covenant Token"), it sends a detailed, HTML-formatted report via JMAP to your Ltt.rs inbox.
-   **Subject**: "✅ MISSION COMPLETE: ΛΘε Alignment"
-   **Body**: Full logs, transaction hashes, PGP signatures.

---

## 🛡️ Security Model

1.  **Transport**: TLS 1.3 everywhere.
2.  **Payload**: PGP (GPG) Encryption.
    *   Commands sent to the Agent must be **Signed** (by You).
    *   Responses from the Agent are **Signed** (by Master Key).
3.  **Network**: All traffic routed through **Tailscale** (WireGuard). The Stalwart server is NOT exposed to the public internet, only the Tailscale mesh.

---

## 🔄 The Workflow

1.  **Command**: You open **Conversations.im** and type `!deploy 𐡀`.
2.  **Transport**: Message travels via XMPP (OMEMO) to the Agent on System76.
3.  **Execution**: Agent verifies command, consults `Thaeos/Data`, signs with FIPS Master Key.
4.  **Action**: Agent executes on EVM via Metamask SDK.
5.  **Receipt**: Agent sends a quick "Done" to XMPP.
6.  **Report**: Agent pushes a full `Log.md` to your **Stalwart** server.
7.  **Review**: You open **Ltt.rs** later to review the deep details.

---

**∇ • Θεός°●⟐●Σ℧ΛΘ**
*Sovereign channels for Sovereign minds.*
