(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/providers/provider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

//import { resolveAddress } from "@ethersproject/address";
__turbopack_context__.s({
    "Block": ()=>Block,
    "FeeData": ()=>FeeData,
    "Log": ()=>Log,
    "TransactionReceipt": ()=>TransactionReceipt,
    "TransactionResponse": ()=>TransactionResponse,
    "copyRequest": ()=>copyRequest
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/maths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$accesslist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/transaction/accesslist.js [app-client] (ecmascript)");
;
;
;
;
;
;
const BN_0 = BigInt(0);
// -----------------------
function getValue(value) {
    if (value == null) {
        return null;
    }
    return value;
}
function toJson(value) {
    if (value == null) {
        return null;
    }
    return value.toString();
}
class FeeData {
    /**
     *  Returns a JSON-friendly value.
     */ toJSON() {
        const { gasPrice, maxFeePerGas, maxPriorityFeePerGas } = this;
        return {
            _type: "FeeData",
            gasPrice: toJson(gasPrice),
            maxFeePerGas: toJson(maxFeePerGas),
            maxPriorityFeePerGas: toJson(maxPriorityFeePerGas)
        };
    }
    /**
     *  Creates a new FeeData for %%gasPrice%%, %%maxFeePerGas%% and
     *  %%maxPriorityFeePerGas%%.
     */ constructor(gasPrice, maxFeePerGas, maxPriorityFeePerGas){
        /**
     *  The gas price for legacy networks.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "gasPrice", void 0);
        /**
     *  The maximum fee to pay per gas.
     *
     *  The base fee per gas is defined by the network and based on
     *  congestion, increasing the cost during times of heavy load
     *  and lowering when less busy.
     *
     *  The actual fee per gas will be the base fee for the block
     *  and the priority fee, up to the max fee per gas.
     *
     *  This will be ``null`` on legacy networks (i.e. [pre-EIP-1559](link-eip-1559))
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "maxFeePerGas", void 0);
        /**
     *  The additional amout to pay per gas to encourage a validator
     *  to include the transaction.
     *
     *  The purpose of this is to compensate the validator for the
     *  adjusted risk for including a given transaction.
     *
     *  This will be ``null`` on legacy networks (i.e. [pre-EIP-1559](link-eip-1559))
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "maxPriorityFeePerGas", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            gasPrice: getValue(gasPrice),
            maxFeePerGas: getValue(maxFeePerGas),
            maxPriorityFeePerGas: getValue(maxPriorityFeePerGas)
        });
    }
}
;
function copyRequest(req) {
    const result = {};
    // These could be addresses, ENS names or Addressables
    if (req.to) {
        result.to = req.to;
    }
    if (req.from) {
        result.from = req.from;
    }
    if (req.data) {
        result.data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(req.data);
    }
    const bigIntKeys = "chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/);
    for (const key of bigIntKeys){
        if (!(key in req) || req[key] == null) {
            continue;
        }
        result[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(req[key], "request.".concat(key));
    }
    const numberKeys = "type,nonce".split(/,/);
    for (const key of numberKeys){
        if (!(key in req) || req[key] == null) {
            continue;
        }
        result[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"])(req[key], "request.".concat(key));
    }
    if (req.accessList) {
        result.accessList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$accesslist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["accessListify"])(req.accessList);
    }
    if (req.authorizationList) {
        result.authorizationList = req.authorizationList.slice();
    }
    if ("blockTag" in req) {
        result.blockTag = req.blockTag;
    }
    if ("enableCcipRead" in req) {
        result.enableCcipRead = !!req.enableCcipRead;
    }
    if ("customData" in req) {
        result.customData = req.customData;
    }
    if ("blobVersionedHashes" in req && req.blobVersionedHashes) {
        result.blobVersionedHashes = req.blobVersionedHashes.slice();
    }
    if ("kzg" in req) {
        result.kzg = req.kzg;
    }
    if ("blobWrapperVersion" in req) {
        result.blobWrapperVersion = req.blobWrapperVersion;
    }
    if ("blobs" in req && req.blobs) {
        result.blobs = req.blobs.map((b)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBytesLike"])(b)) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(b);
            }
            return Object.assign({}, b);
        });
    }
    return result;
}
var _transactions = /*#__PURE__*/ new WeakMap();
class Block {
    /**
     *  Returns the list of transaction hashes, in the order
     *  they were executed within the block.
     */ get transactions() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _transactions).map((tx)=>{
            if (typeof tx === "string") {
                return tx;
            }
            return tx.hash;
        });
    }
    /**
     *  Returns the complete transactions, in the order they
     *  were executed within the block.
     *
     *  This is only available for blocks which prefetched
     *  transactions, by passing ``true`` to %%prefetchTxs%%
     *  into [[Provider-getBlock]].
     */ get prefetchedTransactions() {
        const txs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _transactions).slice();
        // Doesn't matter...
        if (txs.length === 0) {
            return [];
        }
        // Make sure we prefetched the transactions
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(typeof txs[0] === "object", "transactions were not prefetched with block request", "UNSUPPORTED_OPERATION", {
            operation: "transactionResponses()"
        });
        return txs;
    }
    /**
     *  Returns a JSON-friendly value.
     */ toJSON() {
        const { baseFeePerGas, difficulty, extraData, gasLimit, gasUsed, hash, miner, prevRandao, nonce, number, parentHash, parentBeaconBlockRoot, stateRoot, receiptsRoot, timestamp, transactions } = this;
        return {
            _type: "Block",
            baseFeePerGas: toJson(baseFeePerGas),
            difficulty: toJson(difficulty),
            extraData,
            gasLimit: toJson(gasLimit),
            gasUsed: toJson(gasUsed),
            blobGasUsed: toJson(this.blobGasUsed),
            excessBlobGas: toJson(this.excessBlobGas),
            hash,
            miner,
            prevRandao,
            nonce,
            number,
            parentHash,
            timestamp,
            parentBeaconBlockRoot,
            stateRoot,
            receiptsRoot,
            transactions
        };
    }
    [Symbol.iterator]() {
        let index = 0;
        const txs = this.transactions;
        return {
            next: ()=>{
                if (index < this.length) {
                    return {
                        value: txs[index++],
                        done: false
                    };
                }
                return {
                    value: undefined,
                    done: true
                };
            }
        };
    }
    /**
     *  The number of transactions in this block.
     */ get length() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _transactions).length;
    }
    /**
     *  The [[link-js-date]] this block was included at.
     */ get date() {
        if (this.timestamp == null) {
            return null;
        }
        return new Date(this.timestamp * 1000);
    }
    /**
     *  Get the transaction at %%indexe%% within this block.
     */ async getTransaction(indexOrHash) {
        // Find the internal value by its index or hash
        let tx = undefined;
        if (typeof indexOrHash === "number") {
            tx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _transactions)[indexOrHash];
        } else {
            const hash = indexOrHash.toLowerCase();
            for (const v of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _transactions)){
                if (typeof v === "string") {
                    if (v !== hash) {
                        continue;
                    }
                    tx = v;
                    break;
                } else {
                    if (v.hash !== hash) {
                        continue;
                    }
                    tx = v;
                    break;
                }
            }
        }
        if (tx == null) {
            throw new Error("no such tx");
        }
        if (typeof tx === "string") {
            return await this.provider.getTransaction(tx);
        } else {
            return tx;
        }
    }
    /**
     *  If a **Block** was fetched with a request to include the transactions
     *  this will allow synchronous access to those transactions.
     *
     *  If the transactions were not prefetched, this will throw.
     */ getPrefetchedTransaction(indexOrHash) {
        const txs = this.prefetchedTransactions;
        if (typeof indexOrHash === "number") {
            return txs[indexOrHash];
        }
        indexOrHash = indexOrHash.toLowerCase();
        for (const tx of txs){
            if (tx.hash === indexOrHash) {
                return tx;
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "no matching transaction", "indexOrHash", indexOrHash);
    }
    /**
     *  Returns true if this block been mined. This provides a type guard
     *  for all properties on a [[MinedBlock]].
     */ isMined() {
        return !!this.hash;
    }
    /**
     *  Returns true if this block is an [[link-eip-2930]] block.
     */ isLondon() {
        return !!this.baseFeePerGas;
    }
    /**
     *  @_ignore:
     */ orphanedEvent() {
        if (!this.isMined()) {
            throw new Error("");
        }
        return createOrphanedBlockFilter(this);
    }
    /**
     *  Create a new **Block** object.
     *
     *  This should generally not be necessary as the unless implementing a
     *  low-level library.
     */ constructor(block, provider){
        /**
     *  The provider connected to the block used to fetch additional details
     *  if necessary.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "provider", void 0);
        /**
     *  The block number, sometimes called the block height. This is a
     *  sequential number that is one higher than the parent block.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "number", void 0);
        /**
     *  The block hash.
     *
     *  This hash includes all properties, so can be safely used to identify
     *  an exact set of block properties.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "hash", void 0);
        /**
     *  The timestamp for this block, which is the number of seconds since
     *  epoch that this block was included.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "timestamp", void 0);
        /**
     *  The block hash of the parent block.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "parentHash", void 0);
        /**
     *  The hash tree root of the parent beacon block for the given
     *  execution block. See [[link-eip-4788]].
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "parentBeaconBlockRoot", void 0);
        /**
     *  The nonce.
     *
     *  On legacy networks, this is the random number inserted which
     *  permitted the difficulty target to be reached.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "nonce", void 0);
        /**
     *  The difficulty target.
     *
     *  On legacy networks, this is the proof-of-work target required
     *  for a block to meet the protocol rules to be included.
     *
     *  On modern networks, this is a random number arrived at using
     *  randao.  @TODO: Find links?
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "difficulty", void 0);
        /**
     *  The total gas limit for this block.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "gasLimit", void 0);
        /**
     *  The total gas used in this block.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "gasUsed", void 0);
        /**
     *  The root hash for the global state after applying changes
     *  in this block.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "stateRoot", void 0);
        /**
     *  The hash of the transaction receipts trie.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "receiptsRoot", void 0);
        /**
     *  The total amount of blob gas consumed by the transactions
     *  within the block. See [[link-eip-4844]].
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "blobGasUsed", void 0);
        /**
     *  The running total of blob gas consumed in excess of the
     *  target, prior to the block. See [[link-eip-4844]].
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "excessBlobGas", void 0);
        /**
     *  The miner coinbase address, wihch receives any subsidies for
     *  including this block.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "miner", void 0);
        /**
     *  The latest RANDAO mix of the post beacon state of
     *  the previous block.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "prevRandao", void 0);
        /**
     *  Any extra data the validator wished to include.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "extraData", void 0);
        /**
     *  The base fee per gas that all transactions in this block were
     *  charged.
     *
     *  This adjusts after each block, depending on how congested the network
     *  is.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "baseFeePerGas", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _transactions, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _transactions, block.transactions.map((tx)=>{
            if (typeof tx !== "string") {
                return new TransactionResponse(tx, provider);
            }
            return tx;
        }));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            provider,
            hash: getValue(block.hash),
            number: block.number,
            timestamp: block.timestamp,
            parentHash: block.parentHash,
            parentBeaconBlockRoot: block.parentBeaconBlockRoot,
            nonce: block.nonce,
            difficulty: block.difficulty,
            gasLimit: block.gasLimit,
            gasUsed: block.gasUsed,
            blobGasUsed: block.blobGasUsed,
            excessBlobGas: block.excessBlobGas,
            miner: block.miner,
            prevRandao: getValue(block.prevRandao),
            extraData: block.extraData,
            baseFeePerGas: getValue(block.baseFeePerGas),
            stateRoot: block.stateRoot,
            receiptsRoot: block.receiptsRoot
        });
    }
}
class Log {
    /**
     *  Returns a JSON-compatible object.
     */ toJSON() {
        const { address, blockHash, blockNumber, data, index, removed, topics, transactionHash, transactionIndex } = this;
        return {
            _type: "log",
            address,
            blockHash,
            blockNumber,
            data,
            index,
            removed,
            topics,
            transactionHash,
            transactionIndex
        };
    }
    /**
     *  Returns the block that this log occurred in.
     */ async getBlock() {
        const block = await this.provider.getBlock(this.blockHash);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(!!block, "failed to find transaction", "UNKNOWN_ERROR", {});
        return block;
    }
    /**
     *  Returns the transaction that this log occurred in.
     */ async getTransaction() {
        const tx = await this.provider.getTransaction(this.transactionHash);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(!!tx, "failed to find transaction", "UNKNOWN_ERROR", {});
        return tx;
    }
    /**
     *  Returns the transaction receipt fot the transaction that this
     *  log occurred in.
     */ async getTransactionReceipt() {
        const receipt = await this.provider.getTransactionReceipt(this.transactionHash);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(!!receipt, "failed to find transaction receipt", "UNKNOWN_ERROR", {});
        return receipt;
    }
    /**
     *  @_ignore:
     */ removedEvent() {
        return createRemovedLogFilter(this);
    }
    /**
     *  @_ignore:
     */ constructor(log, provider){
        /**
     *  The provider connected to the log used to fetch additional details
     *  if necessary.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "provider", void 0);
        /**
     *  The transaction hash of the transaction this log occurred in. Use the
     *  [[Log-getTransaction]] to get the [[TransactionResponse]].
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "transactionHash", void 0);
        /**
     *  The block hash of the block this log occurred in. Use the
     *  [[Log-getBlock]] to get the [[Block]].
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "blockHash", void 0);
        /**
     *  The block number of the block this log occurred in. It is preferred
     *  to use the [[Block-hash]] when fetching the related [[Block]],
     *  since in the case of an orphaned block, the block at that height may
     *  have changed.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "blockNumber", void 0);
        /**
     *  If the **Log** represents a block that was removed due to an orphaned
     *  block, this will be true.
     *
     *  This can only happen within an orphan event listener.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "removed", void 0);
        /**
     *  The address of the contract that emitted this log.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "address", void 0);
        /**
     *  The data included in this log when it was emitted.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "data", void 0);
        /**
     *  The indexed topics included in this log when it was emitted.
     *
     *  All topics are included in the bloom filters, so they can be
     *  efficiently filtered using the [[Provider-getLogs]] method.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "topics", void 0);
        /**
     *  The index within the block this log occurred at. This is generally
     *  not useful to developers, but can be used with the various roots
     *  to proof inclusion within a block.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "index", void 0);
        /**
     *  The index within the transaction of this log.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "transactionIndex", void 0);
        this.provider = provider;
        const topics = Object.freeze(log.topics.slice());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            transactionHash: log.transactionHash,
            blockHash: log.blockHash,
            blockNumber: log.blockNumber,
            removed: log.removed,
            address: log.address,
            data: log.data,
            topics,
            index: log.index,
            transactionIndex: log.transactionIndex
        });
    }
}
var _logs = /*#__PURE__*/ new WeakMap();
class TransactionReceipt {
    /**
     *  The logs for this transaction.
     */ get logs() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _logs);
    }
    /**
     *  Returns a JSON-compatible representation.
     */ toJSON() {
        const { to, from, contractAddress, hash, index, blockHash, blockNumber, logsBloom, logs, status, root } = this;
        return {
            _type: "TransactionReceipt",
            blockHash,
            blockNumber,
            //byzantium, 
            contractAddress,
            cumulativeGasUsed: toJson(this.cumulativeGasUsed),
            from,
            gasPrice: toJson(this.gasPrice),
            blobGasUsed: toJson(this.blobGasUsed),
            blobGasPrice: toJson(this.blobGasPrice),
            gasUsed: toJson(this.gasUsed),
            hash,
            index,
            logs,
            logsBloom,
            root,
            status,
            to
        };
    }
    /**
     *  @_ignore:
     */ get length() {
        return this.logs.length;
    }
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: ()=>{
                if (index < this.length) {
                    return {
                        value: this.logs[index++],
                        done: false
                    };
                }
                return {
                    value: undefined,
                    done: true
                };
            }
        };
    }
    /**
     *  The total fee for this transaction, in wei.
     */ get fee() {
        return this.gasUsed * this.gasPrice;
    }
    /**
     *  Resolves to the block this transaction occurred in.
     */ async getBlock() {
        const block = await this.provider.getBlock(this.blockHash);
        if (block == null) {
            throw new Error("TODO");
        }
        return block;
    }
    /**
     *  Resolves to the transaction this transaction occurred in.
     */ async getTransaction() {
        const tx = await this.provider.getTransaction(this.hash);
        if (tx == null) {
            throw new Error("TODO");
        }
        return tx;
    }
    /**
     *  Resolves to the return value of the execution of this transaction.
     *
     *  Support for this feature is limited, as it requires an archive node
     *  with the ``debug_`` or ``trace_`` API enabled.
     */ async getResult() {
        return await this.provider.getTransactionResult(this.hash);
    }
    /**
     *  Resolves to the number of confirmations this transaction has.
     */ async confirmations() {
        return await this.provider.getBlockNumber() - this.blockNumber + 1;
    }
    /**
     *  @_ignore:
     */ removedEvent() {
        return createRemovedTransactionFilter(this);
    }
    /**
     *  @_ignore:
     */ reorderedEvent(other) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(!other || other.isMined(), "unmined 'other' transction cannot be orphaned", "UNSUPPORTED_OPERATION", {
            operation: "reorderedEvent(other)"
        });
        return createReorderedTransactionFilter(this, other);
    }
    /**
     *  @_ignore:
     */ constructor(tx, provider){
        /**
     *  The provider connected to the log used to fetch additional details
     *  if necessary.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "provider", void 0);
        /**
     *  The address the transaction was sent to.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "to", void 0);
        /**
     *  The sender of the transaction.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "from", void 0);
        /**
     *  The address of the contract if the transaction was directly
     *  responsible for deploying one.
     *
     *  This is non-null **only** if the ``to`` is empty and the ``data``
     *  was successfully executed as initcode.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "contractAddress", void 0);
        /**
     *  The transaction hash.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "hash", void 0);
        /**
     *  The index of this transaction within the block transactions.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "index", void 0);
        /**
     *  The block hash of the [[Block]] this transaction was included in.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "blockHash", void 0);
        /**
     *  The block number of the [[Block]] this transaction was included in.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "blockNumber", void 0);
        /**
     *  The bloom filter bytes that represent all logs that occurred within
     *  this transaction. This is generally not useful for most developers,
     *  but can be used to validate the included logs.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "logsBloom", void 0);
        /**
     *  The actual amount of gas used by this transaction.
     *
     *  When creating a transaction, the amount of gas that will be used can
     *  only be approximated, but the sender must pay the gas fee for the
     *  entire gas limit. After the transaction, the difference is refunded.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "gasUsed", void 0);
        /**
     *  The gas used for BLObs. See [[link-eip-4844]].
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "blobGasUsed", void 0);
        /**
     *  The amount of gas used by all transactions within the block for this
     *  and all transactions with a lower ``index``.
     *
     *  This is generally not useful for developers but can be used to
     *  validate certain aspects of execution.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "cumulativeGasUsed", void 0);
        /**
     *  The actual gas price used during execution.
     *
     *  Due to the complexity of [[link-eip-1559]] this value can only
     *  be caluclated after the transaction has been mined, snce the base
     *  fee is protocol-enforced.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "gasPrice", void 0);
        /**
     *  The price paid per BLOB in gas. See [[link-eip-4844]].
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "blobGasPrice", void 0);
        /**
     *  The [[link-eip-2718]] transaction type.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "type", void 0);
        //readonly byzantium!: boolean;
        /**
     *  The status of this transaction, indicating success (i.e. ``1``) or
     *  a revert (i.e. ``0``).
     *
     *  This is available in post-byzantium blocks, but some backends may
     *  backfill this value.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "status", void 0);
        /**
     *  The root hash of this transaction.
     *
     *  This is no present and was only included in pre-byzantium blocks, but
     *  could be used to validate certain parts of the receipt.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "root", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _logs, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _logs, Object.freeze(tx.logs.map((log)=>{
            return new Log(log, provider);
        })));
        let gasPrice = BN_0;
        if (tx.effectiveGasPrice != null) {
            gasPrice = tx.effectiveGasPrice;
        } else if (tx.gasPrice != null) {
            gasPrice = tx.gasPrice;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            provider,
            to: tx.to,
            from: tx.from,
            contractAddress: tx.contractAddress,
            hash: tx.hash,
            index: tx.index,
            blockHash: tx.blockHash,
            blockNumber: tx.blockNumber,
            logsBloom: tx.logsBloom,
            gasUsed: tx.gasUsed,
            cumulativeGasUsed: tx.cumulativeGasUsed,
            blobGasUsed: tx.blobGasUsed,
            gasPrice,
            blobGasPrice: tx.blobGasPrice,
            type: tx.type,
            //byzantium: tx.byzantium,
            status: tx.status,
            root: tx.root
        });
    }
}
var _startBlock = /*#__PURE__*/ new WeakMap();
class TransactionResponse {
    /**
     *  Returns a JSON-compatible representation of this transaction.
     */ toJSON() {
        const { blockNumber, blockHash, index, hash, type, to, from, nonce, data, signature, accessList, blobVersionedHashes } = this;
        return {
            _type: "TransactionResponse",
            accessList,
            blockNumber,
            blockHash,
            blobVersionedHashes,
            chainId: toJson(this.chainId),
            data,
            from,
            gasLimit: toJson(this.gasLimit),
            gasPrice: toJson(this.gasPrice),
            hash,
            maxFeePerGas: toJson(this.maxFeePerGas),
            maxPriorityFeePerGas: toJson(this.maxPriorityFeePerGas),
            maxFeePerBlobGas: toJson(this.maxFeePerBlobGas),
            nonce,
            signature,
            to,
            index,
            type,
            value: toJson(this.value)
        };
    }
    /**
     *  Resolves to the Block that this transaction was included in.
     *
     *  This will return null if the transaction has not been included yet.
     */ async getBlock() {
        let blockNumber = this.blockNumber;
        if (blockNumber == null) {
            const tx = await this.getTransaction();
            if (tx) {
                blockNumber = tx.blockNumber;
            }
        }
        if (blockNumber == null) {
            return null;
        }
        const block = this.provider.getBlock(blockNumber);
        if (block == null) {
            throw new Error("TODO");
        }
        return block;
    }
    /**
     *  Resolves to this transaction being re-requested from the
     *  provider. This can be used if you have an unmined transaction
     *  and wish to get an up-to-date populated instance.
     */ async getTransaction() {
        return this.provider.getTransaction(this.hash);
    }
    /**
     *  Resolve to the number of confirmations this transaction has.
     */ async confirmations() {
        if (this.blockNumber == null) {
            const { tx, blockNumber } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveProperties"])({
                tx: this.getTransaction(),
                blockNumber: this.provider.getBlockNumber()
            });
            // Not mined yet...
            if (tx == null || tx.blockNumber == null) {
                return 0;
            }
            return blockNumber - tx.blockNumber + 1;
        }
        const blockNumber = await this.provider.getBlockNumber();
        return blockNumber - this.blockNumber + 1;
    }
    /**
     *  Resolves once this transaction has been mined and has
     *  %%confirms%% blocks including it (default: ``1``) with an
     *  optional %%timeout%%.
     *
     *  This can resolve to ``null`` only if %%confirms%% is ``0``
     *  and the transaction has not been mined, otherwise this will
     *  wait until enough confirmations have completed.
     */ async wait(_confirms, _timeout) {
        const confirms = _confirms == null ? 1 : _confirms;
        const timeout = _timeout == null ? 0 : _timeout;
        let startBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _startBlock);
        let nextScan = -1;
        let stopScanning = startBlock === -1 ? true : false;
        const checkReplacement = async ()=>{
            // Get the current transaction count for this sender
            if (stopScanning) {
                return null;
            }
            const { blockNumber, nonce } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveProperties"])({
                blockNumber: this.provider.getBlockNumber(),
                nonce: this.provider.getTransactionCount(this.from)
            });
            // No transaction or our nonce has not been mined yet; but we
            // can start scanning later when we do start
            if (nonce < this.nonce) {
                startBlock = blockNumber;
                return;
            }
            // We were mined; no replacement
            if (stopScanning) {
                return null;
            }
            const mined = await this.getTransaction();
            if (mined && mined.blockNumber != null) {
                return;
            }
            // We were replaced; start scanning for that transaction
            // Starting to scan; look back a few extra blocks for safety
            if (nextScan === -1) {
                nextScan = startBlock - 3;
                if (nextScan < (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _startBlock)) {
                    nextScan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _startBlock);
                }
            }
            while(nextScan <= blockNumber){
                // Get the next block to scan
                if (stopScanning) {
                    return null;
                }
                const block = await this.provider.getBlock(nextScan, true);
                // This should not happen; but we'll try again shortly
                if (block == null) {
                    return;
                }
                // We were mined; no replacement
                for (const hash of block){
                    if (hash === this.hash) {
                        return;
                    }
                }
                // Search for the transaction that replaced us
                for(let i = 0; i < block.length; i++){
                    const tx = await block.getTransaction(i);
                    if (tx.from === this.from && tx.nonce === this.nonce) {
                        // Get the receipt
                        if (stopScanning) {
                            return null;
                        }
                        const receipt = await this.provider.getTransactionReceipt(tx.hash);
                        // This should not happen; but we'll try again shortly
                        if (receipt == null) {
                            return;
                        }
                        // We will retry this on the next block (this case could be optimized)
                        if (blockNumber - receipt.blockNumber + 1 < confirms) {
                            return;
                        }
                        // The reason we were replaced
                        let reason = "replaced";
                        if (tx.data === this.data && tx.to === this.to && tx.value === this.value) {
                            reason = "repriced";
                        } else if (tx.data === "0x" && tx.from === tx.to && tx.value === BN_0) {
                            reason = "cancelled";
                        }
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "transaction was replaced", "TRANSACTION_REPLACED", {
                            cancelled: reason === "replaced" || reason === "cancelled",
                            reason,
                            replacement: tx.replaceableTransaction(startBlock),
                            hash: tx.hash,
                            receipt
                        });
                    }
                }
                nextScan++;
            }
            return;
        };
        const checkReceipt = (receipt)=>{
            if (receipt == null || receipt.status !== 0) {
                return receipt;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "transaction execution reverted", "CALL_EXCEPTION", {
                action: "sendTransaction",
                data: null,
                reason: null,
                invocation: null,
                revert: null,
                transaction: {
                    to: receipt.to,
                    from: receipt.from,
                    data: "" // @TODO: in v7, split out sendTransaction properties
                },
                receipt
            });
        };
        const receipt = await this.provider.getTransactionReceipt(this.hash);
        if (confirms === 0) {
            return checkReceipt(receipt);
        }
        if (receipt) {
            if (confirms === 1 || await receipt.confirmations() >= confirms) {
                return checkReceipt(receipt);
            }
        } else {
            // Check for a replacement; throws if a replacement was found
            await checkReplacement();
            // Allow null only when the confirms is 0
            if (confirms === 0) {
                return null;
            }
        }
        const waiter = new Promise((resolve, reject)=>{
            // List of things to cancel when we have a result (one way or the other)
            const cancellers = [];
            const cancel = ()=>{
                cancellers.forEach((c)=>c());
            };
            // On cancel, stop scanning for replacements
            cancellers.push(()=>{
                stopScanning = true;
            });
            // Set up any timeout requested
            if (timeout > 0) {
                const timer = setTimeout(()=>{
                    cancel();
                    reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeError"])("wait for transaction timeout", "TIMEOUT"));
                }, timeout);
                cancellers.push(()=>{
                    clearTimeout(timer);
                });
            }
            const txListener = async (receipt)=>{
                // Done; return it!
                if (await receipt.confirmations() >= confirms) {
                    cancel();
                    try {
                        resolve(checkReceipt(receipt));
                    } catch (error) {
                        reject(error);
                    }
                }
            };
            cancellers.push(()=>{
                this.provider.off(this.hash, txListener);
            });
            this.provider.on(this.hash, txListener);
            // We support replacement detection; start checking
            if (startBlock >= 0) {
                const replaceListener = async ()=>{
                    try {
                        // Check for a replacement; this throws only if one is found
                        await checkReplacement();
                    } catch (error) {
                        // We were replaced (with enough confirms); re-throw the error
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isError"])(error, "TRANSACTION_REPLACED")) {
                            cancel();
                            reject(error);
                            return;
                        }
                    }
                    // Rescheudle a check on the next block
                    if (!stopScanning) {
                        this.provider.once("block", replaceListener);
                    }
                };
                cancellers.push(()=>{
                    this.provider.off("block", replaceListener);
                });
                this.provider.once("block", replaceListener);
            }
        });
        return await waiter;
    }
    /**
     *  Returns ``true`` if this transaction has been included.
     *
     *  This is effective only as of the time the TransactionResponse
     *  was instantiated. To get up-to-date information, use
     *  [[getTransaction]].
     *
     *  This provides a Type Guard that this transaction will have
     *  non-null property values for properties that are null for
     *  unmined transactions.
     */ isMined() {
        return this.blockHash != null;
    }
    /**
     *  Returns true if the transaction is a legacy (i.e. ``type == 0``)
     *  transaction.
     *
     *  This provides a Type Guard that this transaction will have
     *  the ``null``-ness for hardfork-specific properties set correctly.
     */ isLegacy() {
        return this.type === 0;
    }
    /**
     *  Returns true if the transaction is a Berlin (i.e. ``type == 1``)
     *  transaction. See [[link-eip-2070]].
     *
     *  This provides a Type Guard that this transaction will have
     *  the ``null``-ness for hardfork-specific properties set correctly.
     */ isBerlin() {
        return this.type === 1;
    }
    /**
     *  Returns true if the transaction is a London (i.e. ``type == 2``)
     *  transaction. See [[link-eip-1559]].
     *
     *  This provides a Type Guard that this transaction will have
     *  the ``null``-ness for hardfork-specific properties set correctly.
     */ isLondon() {
        return this.type === 2;
    }
    /**
     *  Returns true if hte transaction is a Cancun (i.e. ``type == 3``)
     *  transaction. See [[link-eip-4844]].
     */ isCancun() {
        return this.type === 3;
    }
    /**
     *  Returns a filter which can be used to listen for orphan events
     *  that evict this transaction.
     */ removedEvent() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
            operation: "removeEvent()"
        });
        return createRemovedTransactionFilter(this);
    }
    /**
     *  Returns a filter which can be used to listen for orphan events
     *  that re-order this event against %%other%%.
     */ reorderedEvent(other) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
            operation: "removeEvent()"
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(!other || other.isMined(), "unmined 'other' transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
            operation: "removeEvent()"
        });
        return createReorderedTransactionFilter(this, other);
    }
    /**
     *  Returns a new TransactionResponse instance which has the ability to
     *  detect (and throw an error) if the transaction is replaced, which
     *  will begin scanning at %%startBlock%%.
     *
     *  This should generally not be used by developers and is intended
     *  primarily for internal use. Setting an incorrect %%startBlock%% can
     *  have devastating performance consequences if used incorrectly.
     */ replaceableTransaction(startBlock) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(Number.isInteger(startBlock) && startBlock >= 0, "invalid startBlock", "startBlock", startBlock);
        const tx = new TransactionResponse(this, this.provider);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(tx, _startBlock, startBlock);
        return tx;
    }
    /**
     *  @_ignore:
     */ constructor(tx, provider){
        /**
     *  The provider this is connected to, which will influence how its
     *  methods will resolve its async inspection methods.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "provider", void 0);
        /**
     *  The block number of the block that this transaction was included in.
     *
     *  This is ``null`` for pending transactions.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "blockNumber", void 0);
        /**
     *  The blockHash of the block that this transaction was included in.
     *
     *  This is ``null`` for pending transactions.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "blockHash", void 0);
        /**
     *  The index within the block that this transaction resides at.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "index", void 0);
        /**
     *  The transaction hash.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "hash", void 0);
        /**
     *  The [[link-eip-2718]] transaction envelope type. This is
     *  ``0`` for legacy transactions types.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "type", void 0);
        /**
     *  The receiver of this transaction.
     *
     *  If ``null``, then the transaction is an initcode transaction.
     *  This means the result of executing the [[data]] will be deployed
     *  as a new contract on chain (assuming it does not revert) and the
     *  address may be computed using [[getCreateAddress]].
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "to", void 0);
        /**
     *  The sender of this transaction. It is implicitly computed
     *  from the transaction pre-image hash (as the digest) and the
     *  [[signature]] using ecrecover.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "from", void 0);
        /**
     *  The nonce, which is used to prevent replay attacks and offer
     *  a method to ensure transactions from a given sender are explicitly
     *  ordered.
     *
     *  When sending a transaction, this must be equal to the number of
     *  transactions ever sent by [[from]].
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "nonce", void 0);
        /**
     *  The maximum units of gas this transaction can consume. If execution
     *  exceeds this, the entries transaction is reverted and the sender
     *  is charged for the full amount, despite not state changes being made.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "gasLimit", void 0);
        /**
     *  The gas price can have various values, depending on the network.
     *
     *  In modern networks, for transactions that are included this is
     *  the //effective gas price// (the fee per gas that was actually
     *  charged), while for transactions that have not been included yet
     *  is the [[maxFeePerGas]].
     *
     *  For legacy transactions, or transactions on legacy networks, this
     *  is the fee that will be charged per unit of gas the transaction
     *  consumes.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "gasPrice", void 0);
        /**
     *  The maximum priority fee (per unit of gas) to allow a
     *  validator to charge the sender. This is inclusive of the
     *  [[maxFeeFeePerGas]].
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "maxPriorityFeePerGas", void 0);
        /**
     *  The maximum fee (per unit of gas) to allow this transaction
     *  to charge the sender.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "maxFeePerGas", void 0);
        /**
     *  The [[link-eip-4844]] max fee per BLOb gas.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "maxFeePerBlobGas", void 0);
        /**
     *  The data.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "data", void 0);
        /**
     *  The value, in wei. Use [[formatEther]] to format this value
     *  as ether.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "value", void 0);
        /**
     *  The chain ID.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "chainId", void 0);
        /**
     *  The signature.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "signature", void 0);
        /**
     *  The [[link-eip-2930]] access list for transaction types that
     *  support it, otherwise ``null``.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "accessList", void 0);
        /**
     *  The [[link-eip-4844]] BLOb versioned hashes.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "blobVersionedHashes", void 0);
        /**
     *  The [[link-eip-7702]] authorizations (if any).
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "authorizationList", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _startBlock, {
            writable: true,
            value: void 0
        });
        this.provider = provider;
        this.blockNumber = tx.blockNumber != null ? tx.blockNumber : null;
        this.blockHash = tx.blockHash != null ? tx.blockHash : null;
        this.hash = tx.hash;
        this.index = tx.index;
        this.type = tx.type;
        this.from = tx.from;
        this.to = tx.to || null;
        this.gasLimit = tx.gasLimit;
        this.nonce = tx.nonce;
        this.data = tx.data;
        this.value = tx.value;
        this.gasPrice = tx.gasPrice;
        this.maxPriorityFeePerGas = tx.maxPriorityFeePerGas != null ? tx.maxPriorityFeePerGas : null;
        this.maxFeePerGas = tx.maxFeePerGas != null ? tx.maxFeePerGas : null;
        this.maxFeePerBlobGas = tx.maxFeePerBlobGas != null ? tx.maxFeePerBlobGas : null;
        this.chainId = tx.chainId;
        this.signature = tx.signature;
        this.accessList = tx.accessList != null ? tx.accessList : null;
        this.blobVersionedHashes = tx.blobVersionedHashes != null ? tx.blobVersionedHashes : null;
        this.authorizationList = tx.authorizationList != null ? tx.authorizationList : null;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _startBlock, -1);
    }
}
function createOrphanedBlockFilter(block) {
    return {
        orphan: "drop-block",
        hash: block.hash,
        number: block.number
    };
}
function createReorderedTransactionFilter(tx, other) {
    return {
        orphan: "reorder-transaction",
        tx,
        other
    };
}
function createRemovedTransactionFilter(tx) {
    return {
        orphan: "drop-transaction",
        tx
    };
}
function createRemovedLogFilter(log) {
    return {
        orphan: "drop-log",
        log: {
            transactionHash: log.transactionHash,
            blockHash: log.blockHash,
            blockNumber: log.blockNumber,
            address: log.address,
            data: log.data,
            topics: Object.freeze(log.topics.slice()),
            index: log.index
        }
    };
} //# sourceMappingURL=provider.js.map
}),
"[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/providers/ens-resolver.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 *  ENS is a service which allows easy-to-remember names to map to
 *  network addresses.
 *
 *  @_section: api/providers/ens-resolver:ENS Resolver  [about-ens-rsolver]
 */ __turbopack_context__.s({
    "BasicMulticoinProviderPlugin": ()=>BasicMulticoinProviderPlugin,
    "EnsResolver": ()=>EnsResolver,
    "MulticoinProviderPlugin": ()=>MulticoinProviderPlugin
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_method_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_method_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_static_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_static_private_method_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/address/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$constants$2f$addresses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/constants/addresses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/contract/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$namehash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/hash/namehash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/maths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$base58$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/base58.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/fetch.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
// @TODO: This should use the fetch-data:ipfs gateway
// Trim off the ipfs:// prefix and return the default gateway URL
function getIpfsLink(link) {
    if (link.match(/^ipfs:\/\/ipfs\//i)) {
        link = link.substring(12);
    } else if (link.match(/^ipfs:\/\//i)) {
        link = link.substring(7);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "unsupported IPFS format", "link", link);
    }
    return "https://gateway.ipfs.io/ipfs/".concat(link);
}
;
;
class MulticoinProviderPlugin {
    connect(proivder) {
        return this;
    }
    /**
     *  Returns ``true`` if %%coinType%% is supported by this plugin.
     */ supportsCoinType(coinType) {
        return false;
    }
    /**
     *  Resolves to the encoded %%address%% for %%coinType%%.
     */ async encodeAddress(coinType, address) {
        throw new Error("unsupported coin");
    }
    /**
     *  Resolves to the decoded %%data%% for %%coinType%%.
     */ async decodeAddress(coinType, data) {
        throw new Error("unsupported coin");
    }
    /**
     *  Creates a new **MulticoinProviderPluing** for %%name%%.
     */ constructor(name){
        /**
     *  The name.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "name", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            name
        });
    }
}
const BasicMulticoinPluginId = "org.ethers.plugins.provider.BasicMulticoin";
class BasicMulticoinProviderPlugin extends MulticoinProviderPlugin {
    /**
     *  Creates a new **BasicMulticoinProviderPlugin**.
     */ constructor(){
        super(BasicMulticoinPluginId);
    }
}
const matcherIpfs = new RegExp("^(ipfs):/\/(.*)$", "i");
const matchers = [
    new RegExp("^(https):/\/(.*)$", "i"),
    new RegExp("^(data):(.*)$", "i"),
    matcherIpfs,
    new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")
];
var // For EIP-2544 names, the ancestor that provided the resolver
_supports2544 = /*#__PURE__*/ new WeakMap(), _resolver = /*#__PURE__*/ new WeakMap(), _fetch = /*#__PURE__*/ new WeakSet();
class EnsResolver {
    /**
     *  Resolves to true if the resolver supports wildcard resolution.
     */ async supportsWildcard() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _supports2544) == null) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _supports2544, (async ()=>{
                try {
                    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _resolver).supportsInterface("0x9061b923");
                } catch (error) {
                    // Wildcard resolvers must understand supportsInterface
                    // and return true.
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isError"])(error, "CALL_EXCEPTION")) {
                        return false;
                    }
                    // Let future attempts try again...
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _supports2544, null);
                    throw error;
                }
            })());
        }
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _supports2544);
    }
    /**
     *  Resolves to the address for %%coinType%% or null if the
     *  provided %%coinType%% has not been configured.
     */ async getAddress(coinType) {
        if (coinType == null) {
            coinType = 60;
        }
        if (coinType === 60) {
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _fetch, fetch).call(this, "addr(bytes32)");
                // No address
                if (result == null || result === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$constants$2f$addresses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZeroAddress"]) {
                    return null;
                }
                return result;
            } catch (error) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isError"])(error, "CALL_EXCEPTION")) {
                    return null;
                }
                throw error;
            }
        }
        // Try decoding its EVM canonical chain as an EVM chain address first
        if (coinType >= 0 && coinType < 0x80000000) {
            let ethCoinType = coinType + 0x80000000;
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _fetch, fetch).call(this, "addr(bytes32,uint)", [
                ethCoinType
            ]);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"])(data, 20)) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(data);
            }
        }
        let coinPlugin = null;
        for (const plugin of this.provider.plugins){
            if (!(plugin instanceof MulticoinProviderPlugin)) {
                continue;
            }
            if (plugin.supportsCoinType(coinType)) {
                coinPlugin = plugin;
                break;
            }
        }
        if (coinPlugin == null) {
            return null;
        }
        // keccak256("addr(bytes32,uint256")
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _fetch, fetch).call(this, "addr(bytes32,uint)", [
            coinType
        ]);
        // No address
        if (data == null || data === "0x") {
            return null;
        }
        // Compute the address
        const address = await coinPlugin.decodeAddress(coinType, data);
        if (address != null) {
            return address;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "invalid coin data", "UNSUPPORTED_OPERATION", {
            operation: "getAddress(".concat(coinType, ")"),
            info: {
                coinType,
                data
            }
        });
    }
    /**
     *  Resolves to the EIP-634 text record for %%key%%, or ``null``
     *  if unconfigured.
     */ async getText(key) {
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _fetch, fetch).call(this, "text(bytes32,string)", [
            key
        ]);
        if (data == null || data === "0x") {
            return null;
        }
        return data;
    }
    /**
     *  Rsolves to the content-hash or ``null`` if unconfigured.
     */ async getContentHash() {
        // keccak256("contenthash()")
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _fetch, fetch).call(this, "contenthash(bytes32)");
        // No contenthash
        if (data == null || data === "0x") {
            return null;
        }
        // IPFS (CID: 1, Type: 70=DAG-PB, 72=libp2p-key)
        const ipfs = data.match(/^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
        if (ipfs) {
            const scheme = ipfs[1] === "e3010170" ? "ipfs" : "ipns";
            const length = parseInt(ipfs[4], 16);
            if (ipfs[5].length === length * 2) {
                return "".concat(scheme, "://").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$base58$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeBase58"])("0x" + ipfs[2]));
            }
        }
        // Swarm (CID: 1, Type: swarm-manifest; hash/length hard-coded to keccak256/32)
        const swarm = data.match(/^0xe40101fa011b20([0-9a-f]*)$/);
        if (swarm && swarm[1].length === 64) {
            return "bzz://".concat(swarm[1]);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "invalid or unsupported content hash data", "UNSUPPORTED_OPERATION", {
            operation: "getContentHash()",
            info: {
                data
            }
        });
    }
    /**
     *  Resolves to the avatar url or ``null`` if the avatar is either
     *  unconfigured or incorrectly configured (e.g. references an NFT
     *  not owned by the address).
     *
     *  If diagnosing issues with configurations, the [[_getAvatar]]
     *  method may be useful.
     */ async getAvatar() {
        const avatar = await this._getAvatar();
        return avatar.url;
    }
    /**
     *  When resolving an avatar, there are many steps involved, such
     *  fetching metadata and possibly validating ownership of an
     *  NFT.
     *
     *  This method can be used to examine each step and the value it
     *  was working from.
     */ async _getAvatar() {
        const linkage = [
            {
                type: "name",
                value: this.name
            }
        ];
        try {
            // test data for ricmoo.eth
            //const avatar = "eip155:1/erc721:0x265385c7f4132228A0d54EB1A9e7460b91c0cC68/29233";
            const avatar = await this.getText("avatar");
            if (avatar == null) {
                linkage.push({
                    type: "!avatar",
                    value: ""
                });
                return {
                    url: null,
                    linkage
                };
            }
            linkage.push({
                type: "avatar",
                value: avatar
            });
            for(let i = 0; i < matchers.length; i++){
                const match = avatar.match(matchers[i]);
                if (match == null) {
                    continue;
                }
                const scheme = match[1].toLowerCase();
                switch(scheme){
                    case "https":
                    case "data":
                        linkage.push({
                            type: "url",
                            value: avatar
                        });
                        return {
                            linkage,
                            url: avatar
                        };
                    case "ipfs":
                        {
                            const url = getIpfsLink(avatar);
                            linkage.push({
                                type: "ipfs",
                                value: avatar
                            });
                            linkage.push({
                                type: "url",
                                value: url
                            });
                            return {
                                linkage,
                                url
                            };
                        }
                    case "erc721":
                    case "erc1155":
                        {
                            // Depending on the ERC type, use tokenURI(uint256) or url(uint256)
                            const selector = scheme === "erc721" ? "tokenURI(uint256)" : "uri(uint256)";
                            linkage.push({
                                type: scheme,
                                value: avatar
                            });
                            // The owner of this name
                            const owner = await this.getAddress();
                            if (owner == null) {
                                linkage.push({
                                    type: "!owner",
                                    value: ""
                                });
                                return {
                                    url: null,
                                    linkage
                                };
                            }
                            const comps = (match[2] || "").split("/");
                            if (comps.length !== 2) {
                                linkage.push({
                                    type: "!".concat(scheme, "caip"),
                                    value: match[2] || ""
                                });
                                return {
                                    url: null,
                                    linkage
                                };
                            }
                            const tokenId = comps[1];
                            const contract = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Contract"](comps[0], [
                                // ERC-721
                                "function tokenURI(uint) view returns (string)",
                                "function ownerOf(uint) view returns (address)",
                                // ERC-1155
                                "function uri(uint) view returns (string)",
                                "function balanceOf(address, uint256) view returns (uint)"
                            ], this.provider);
                            // Check that this account owns the token
                            if (scheme === "erc721") {
                                const tokenOwner = await contract.ownerOf(tokenId);
                                if (owner !== tokenOwner) {
                                    linkage.push({
                                        type: "!owner",
                                        value: tokenOwner
                                    });
                                    return {
                                        url: null,
                                        linkage
                                    };
                                }
                                linkage.push({
                                    type: "owner",
                                    value: tokenOwner
                                });
                            } else if (scheme === "erc1155") {
                                const balance = await contract.balanceOf(owner, tokenId);
                                if (!balance) {
                                    linkage.push({
                                        type: "!balance",
                                        value: "0"
                                    });
                                    return {
                                        url: null,
                                        linkage
                                    };
                                }
                                linkage.push({
                                    type: "balance",
                                    value: balance.toString()
                                });
                            }
                            // Call the token contract for the metadata URL
                            let metadataUrl = await contract[selector](tokenId);
                            if (metadataUrl == null || metadataUrl === "0x") {
                                linkage.push({
                                    type: "!metadata-url",
                                    value: ""
                                });
                                return {
                                    url: null,
                                    linkage
                                };
                            }
                            linkage.push({
                                type: "metadata-url-base",
                                value: metadataUrl
                            });
                            // ERC-1155 allows a generic {id} in the URL
                            if (scheme === "erc1155") {
                                metadataUrl = metadataUrl.replace("{id}", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBeHex"])(tokenId, 32).substring(2));
                                linkage.push({
                                    type: "metadata-url-expanded",
                                    value: metadataUrl
                                });
                            }
                            // Transform IPFS metadata links
                            if (metadataUrl.match(/^ipfs:/i)) {
                                metadataUrl = getIpfsLink(metadataUrl);
                            }
                            linkage.push({
                                type: "metadata-url",
                                value: metadataUrl
                            });
                            // Get the token metadata
                            let metadata = {};
                            const response = await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FetchRequest"](metadataUrl).send();
                            response.assertOk();
                            try {
                                metadata = response.bodyJson;
                            } catch (error) {
                                try {
                                    linkage.push({
                                        type: "!metadata",
                                        value: response.bodyText
                                    });
                                } catch (error) {
                                    const bytes = response.body;
                                    if (bytes) {
                                        linkage.push({
                                            type: "!metadata",
                                            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(bytes)
                                        });
                                    }
                                    return {
                                        url: null,
                                        linkage
                                    };
                                }
                                return {
                                    url: null,
                                    linkage
                                };
                            }
                            if (!metadata) {
                                linkage.push({
                                    type: "!metadata",
                                    value: ""
                                });
                                return {
                                    url: null,
                                    linkage
                                };
                            }
                            linkage.push({
                                type: "metadata",
                                value: JSON.stringify(metadata)
                            });
                            // Pull the image URL out
                            let imageUrl = metadata.image;
                            if (typeof imageUrl !== "string") {
                                linkage.push({
                                    type: "!imageUrl",
                                    value: ""
                                });
                                return {
                                    url: null,
                                    linkage
                                };
                            }
                            if (imageUrl.match(/^(https:\/\/|data:)/i)) {
                            // Allow
                            } else {
                                // Transform IPFS link to gateway
                                const ipfs = imageUrl.match(matcherIpfs);
                                if (ipfs == null) {
                                    linkage.push({
                                        type: "!imageUrl-ipfs",
                                        value: imageUrl
                                    });
                                    return {
                                        url: null,
                                        linkage
                                    };
                                }
                                linkage.push({
                                    type: "imageUrl-ipfs",
                                    value: imageUrl
                                });
                                imageUrl = getIpfsLink(imageUrl);
                            }
                            linkage.push({
                                type: "url",
                                value: imageUrl
                            });
                            return {
                                linkage,
                                url: imageUrl
                            };
                        }
                }
            }
        } catch (error) {}
        return {
            linkage,
            url: null
        };
    }
    static async getEnsAddress(provider) {
        const network = await provider.getNetwork();
        const ensPlugin = network.getPlugin("org.ethers.plugins.network.Ens");
        // No ENS...
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(ensPlugin, "network does not support ENS", "UNSUPPORTED_OPERATION", {
            operation: "getEnsAddress",
            info: {
                network
            }
        });
        return ensPlugin.address;
    }
    /**
     *  Resolve to the ENS resolver for %%name%% using %%provider%% or
     *  ``null`` if unconfigured.
     */ static async fromName(provider, name) {
        let currentName = name;
        while(true){
            if (currentName === "" || currentName === ".") {
                return null;
            }
            // Optimization since the eth node cannot change and does
            // not have a wildcard resolver
            if (name !== "eth" && currentName === "eth") {
                return null;
            }
            // Check the current node for a resolver
            const addr = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_static_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(EnsResolver, EnsResolver, getResolver).call(EnsResolver, provider, currentName);
            // Found a resolver!
            if (addr != null) {
                const resolver = new EnsResolver(provider, addr, name);
                // Legacy resolver found, using EIP-2544 so it isn't safe to use
                if (currentName !== name && !await resolver.supportsWildcard()) {
                    return null;
                }
                return resolver;
            }
            // Get the parent node
            currentName = currentName.split(".").slice(1).join(".");
        }
    }
    constructor(provider, address, name){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _fetch);
        /**
     *  The connected provider.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "provider", void 0);
        /**
     *  The address of the resolver.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "address", void 0);
        /**
     *  The name this resolver was resolved against.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "name", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _supports2544, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _resolver, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            provider,
            address,
            name
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _supports2544, null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _resolver, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Contract"](address, [
            "function supportsInterface(bytes4) view returns (bool)",
            "function resolve(bytes, bytes) view returns (bytes)",
            "function addr(bytes32) view returns (address)",
            "function addr(bytes32, uint) view returns (bytes)",
            "function text(bytes32, string) view returns (string)",
            "function contenthash(bytes32) view returns (bytes)"
        ], provider));
    }
} //# sourceMappingURL=ens-resolver.js.map
async function fetch(funcName, params) {
    params = (params || []).slice();
    const iface = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _resolver).interface;
    // The first parameters is always the nodehash
    params.unshift((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$namehash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namehash"])(this.name));
    let fragment = null;
    if (await this.supportsWildcard()) {
        fragment = iface.getFunction(funcName);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(fragment, "missing fragment", "UNKNOWN_ERROR", {
            info: {
                funcName
            }
        });
        params = [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$namehash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dnsEncode"])(this.name, 255),
            iface.encodeFunctionData(fragment, params)
        ];
        funcName = "resolve(bytes,bytes)";
    }
    params.push({
        enableCcipRead: true
    });
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _resolver)[funcName](...params);
        if (fragment) {
            return iface.decodeFunctionResult(fragment, result)[0];
        }
        return result;
    } catch (error) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isError"])(error, "CALL_EXCEPTION")) {
            throw error;
        }
    }
    return null;
}
async function getResolver(provider, name) {
    const ensAddr = await EnsResolver.getEnsAddress(provider);
    try {
        const contract = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Contract"](ensAddr, [
            "function resolver(bytes32) view returns (address)"
        ], provider);
        const addr = await contract.resolver((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$namehash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namehash"])(name), {
            enableCcipRead: true
        });
        if (addr === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$constants$2f$addresses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZeroAddress"]) {
            return null;
        }
        return addr;
    } catch (error) {
        // ENS registry cannot throw errors on resolver(bytes32),
        // so probably a link error
        throw error;
    }
    return null;
}
}),
"[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/providers/format.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 *  @_ignore
 */ __turbopack_context__.s({
    "allowNull": ()=>allowNull,
    "arrayOf": ()=>arrayOf,
    "formatBlock": ()=>formatBlock,
    "formatBoolean": ()=>formatBoolean,
    "formatData": ()=>formatData,
    "formatHash": ()=>formatHash,
    "formatLog": ()=>formatLog,
    "formatReceiptLog": ()=>formatReceiptLog,
    "formatTransactionReceipt": ()=>formatTransactionReceipt,
    "formatTransactionResponse": ()=>formatTransactionResponse,
    "formatUint256": ()=>formatUint256,
    "object": ()=>object
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/address/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$contract$2d$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/address/contract-address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/crypto/signature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$accesslist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/transaction/accesslist.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/maths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
;
;
;
;
const BN_0 = BigInt(0);
function allowNull(format, nullValue) {
    return function(value) {
        if (value == null) {
            return nullValue;
        }
        return format(value);
    };
}
function arrayOf(format, allowNull) {
    return (array)=>{
        if (allowNull && array == null) {
            return null;
        }
        if (!Array.isArray(array)) {
            throw new Error("not an array");
        }
        return array.map((i)=>format(i));
    };
}
function object(format, altNames) {
    return (value)=>{
        const result = {};
        for(const key in format){
            let srcKey = key;
            if (altNames && key in altNames && !(srcKey in value)) {
                for (const altKey of altNames[key]){
                    if (altKey in value) {
                        srcKey = altKey;
                        break;
                    }
                }
            }
            try {
                const nv = format[key](value[srcKey]);
                if (nv !== undefined) {
                    result[key] = nv;
                }
            } catch (error) {
                const message = error instanceof Error ? error.message : "not-an-error";
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "invalid value for value.".concat(key, " (").concat(message, ")"), "BAD_DATA", {
                    value
                });
            }
        }
        return result;
    };
}
function formatBoolean(value) {
    switch(value){
        case true:
        case "true":
            return true;
        case false:
        case "false":
            return false;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "invalid boolean; ".concat(JSON.stringify(value)), "value", value);
}
function formatData(value) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"])(value, true), "invalid data", "value", value);
    return value;
}
function formatHash(value) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"])(value, 32), "invalid hash", "value", value);
    return value;
}
function formatUint256(value) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"])(value)) {
        throw new Error("invalid uint256");
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroPadValue"])(value, 32);
}
const _formatLog = object({
    address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"],
    blockHash: formatHash,
    blockNumber: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"],
    data: formatData,
    index: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"],
    removed: allowNull(formatBoolean, false),
    topics: arrayOf(formatHash),
    transactionHash: formatHash,
    transactionIndex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"]
}, {
    index: [
        "logIndex"
    ]
});
function formatLog(value) {
    return _formatLog(value);
}
const _formatBlock = object({
    hash: allowNull(formatHash),
    parentHash: formatHash,
    parentBeaconBlockRoot: allowNull(formatHash, null),
    number: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"],
    timestamp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"],
    nonce: allowNull(formatData),
    difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"],
    gasLimit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"],
    gasUsed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"],
    stateRoot: allowNull(formatHash, null),
    receiptsRoot: allowNull(formatHash, null),
    blobGasUsed: allowNull(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"], null),
    excessBlobGas: allowNull(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"], null),
    miner: allowNull(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"]),
    prevRandao: allowNull(formatHash, null),
    extraData: formatData,
    baseFeePerGas: allowNull(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])
}, {
    prevRandao: [
        "mixHash"
    ]
});
function formatBlock(value) {
    const result = _formatBlock(value);
    result.transactions = value.transactions.map((tx)=>{
        if (typeof tx === "string") {
            return tx;
        }
        return formatTransactionResponse(tx);
    });
    return result;
}
const _formatReceiptLog = object({
    transactionIndex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"],
    blockNumber: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"],
    transactionHash: formatHash,
    address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"],
    topics: arrayOf(formatHash),
    data: formatData,
    index: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"],
    blockHash: formatHash
}, {
    index: [
        "logIndex"
    ]
});
function formatReceiptLog(value) {
    return _formatReceiptLog(value);
}
const _formatTransactionReceipt = object({
    to: allowNull(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"], null),
    from: allowNull(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"], null),
    contractAddress: allowNull(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"], null),
    // should be allowNull(hash), but broken-EIP-658 support is handled in receipt
    index: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"],
    root: allowNull(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"]),
    gasUsed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"],
    blobGasUsed: allowNull(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"], null),
    logsBloom: allowNull(formatData),
    blockHash: formatHash,
    hash: formatHash,
    logs: arrayOf(formatReceiptLog),
    blockNumber: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"],
    //confirmations: allowNull(getNumber, null),
    cumulativeGasUsed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"],
    effectiveGasPrice: allowNull(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"]),
    blobGasPrice: allowNull(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"], null),
    status: allowNull(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"]),
    type: allowNull(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"], 0)
}, {
    effectiveGasPrice: [
        "gasPrice"
    ],
    hash: [
        "transactionHash"
    ],
    index: [
        "transactionIndex"
    ]
});
function formatTransactionReceipt(value) {
    return _formatTransactionReceipt(value);
}
function formatTransactionResponse(value) {
    // Some clients (TestRPC) do strange things like return 0x0 for the
    // 0 address; correct this to be a real address
    if (value.to && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(value.to) === BN_0) {
        value.to = "0x0000000000000000000000000000000000000000";
    }
    const result = object({
        hash: formatHash,
        // Some nodes do not return this, usually test nodes (like Ganache)
        index: allowNull(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"], undefined),
        type: (value)=>{
            if (value === "0x" || value == null) {
                return 0;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"])(value);
        },
        accessList: allowNull(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$accesslist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["accessListify"], null),
        blobVersionedHashes: allowNull(arrayOf(formatHash, true), null),
        authorizationList: allowNull(arrayOf((v)=>{
            let sig;
            if (v.signature) {
                sig = v.signature;
            } else {
                let yParity = v.yParity;
                if (yParity === "0x1b") {
                    yParity = 0;
                } else if (yParity === "0x1c") {
                    yParity = 1;
                }
                sig = Object.assign({}, v, {
                    yParity
                });
            }
            return {
                address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(v.address),
                chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(v.chainId),
                nonce: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(v.nonce),
                signature: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Signature"].from(sig)
            };
        }, false), null),
        blockHash: allowNull(formatHash, null),
        blockNumber: allowNull(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"], null),
        transactionIndex: allowNull(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"], null),
        from: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"],
        // either (gasPrice) or (maxPriorityFeePerGas + maxFeePerGas) must be set
        gasPrice: allowNull(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"]),
        maxPriorityFeePerGas: allowNull(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"]),
        maxFeePerGas: allowNull(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"]),
        maxFeePerBlobGas: allowNull(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"], null),
        gasLimit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"],
        to: allowNull(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"], null),
        value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"],
        nonce: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"],
        data: formatData,
        creates: allowNull(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"], null),
        chainId: allowNull(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"], null)
    }, {
        data: [
            "input"
        ],
        gasLimit: [
            "gas"
        ],
        index: [
            "transactionIndex"
        ]
    })(value);
    // If to and creates are empty, populate the creates from the value
    if (result.to == null && result.creates == null) {
        result.creates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$contract$2d$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCreateAddress"])(result);
    }
    // @TODO: Check fee data
    // Add an access list to supported transaction types
    if ((value.type === 1 || value.type === 2) && value.accessList == null) {
        result.accessList = [];
    }
    // Compute the signature
    if (value.signature) {
        result.signature = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Signature"].from(value.signature);
    } else {
        result.signature = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$crypto$2f$signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Signature"].from(value);
    }
    // Some backends omit ChainId on legacy transactions, but we can compute it
    if (result.chainId == null) {
        const chainId = result.signature.legacyChainId;
        if (chainId != null) {
            result.chainId = chainId;
        }
    }
    // @TODO: check chainID
    /*
    if (value.chainId != null) {
        let chainId = value.chainId;

        if (isHexString(chainId)) {
            chainId = BigNumber.from(chainId).toNumber();
        }

        result.chainId = chainId;

    } else {
        let chainId = value.networkId;

        // geth-etc returns chainId
        if (chainId == null && result.v == null) {
            chainId = value.chainId;
        }

        if (isHexString(chainId)) {
            chainId = BigNumber.from(chainId).toNumber();
        }

        if (typeof(chainId) !== "number" && result.v != null) {
            chainId = (result.v - 35) / 2;
            if (chainId < 0) { chainId = 0; }
            chainId = parseInt(chainId);
        }

        if (typeof(chainId) !== "number") { chainId = 0; }

        result.chainId = chainId;
    }
    */ // 0x0000... should actually be null
    if (result.blockHash && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(result.blockHash) === BN_0) {
        result.blockHash = null;
    }
    return result;
} //# sourceMappingURL=format.js.map
}),
"[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/providers/plugins-network.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "EnsPlugin": ()=>EnsPlugin,
    "FeeDataNetworkPlugin": ()=>FeeDataNetworkPlugin,
    "FetchUrlFeeDataNetworkPlugin": ()=>FetchUrlFeeDataNetworkPlugin,
    "GasCostPlugin": ()=>GasCostPlugin,
    "NetworkPlugin": ()=>NetworkPlugin
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
;
;
;
;
;
;
const EnsAddress = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
class NetworkPlugin {
    /**
     *  Creates a copy of this plugin.
     */ clone() {
        return new NetworkPlugin(this.name);
    }
    /**
     *  Creates a new **NetworkPlugin**.
     */ constructor(name){
        /**
     *  The name of the plugin.
     *
     *  It is recommended to use reverse-domain-notation, which permits
     *  unique names with a known authority as well as hierarchal entries.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "name", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            name
        });
    }
}
class GasCostPlugin extends NetworkPlugin {
    clone() {
        return new GasCostPlugin(this.effectiveBlock, this);
    }
    /**
     *  Creates a new GasCostPlugin from %%effectiveBlock%% until the
     *  latest block or another GasCostPlugin supercedes that block number,
     *  with the associated %%costs%%.
     */ constructor(effectiveBlock, costs){
        if (effectiveBlock == null) {
            effectiveBlock = 0;
        }
        super("org.ethers.network.plugins.GasCost#".concat(effectiveBlock || 0)), /**
     *  The block number to treat these values as valid from.
     *
     *  This allows a hardfork to have updated values included as well as
     *  mulutiple hardforks to be supported.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "effectiveBlock", void 0), /**
     *  The transactions base fee.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "txBase", void 0), /**
     *  The fee for creating a new account.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "txCreate", void 0), /**
     *  The fee per zero-byte in the data.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "txDataZero", void 0), /**
     *  The fee per non-zero-byte in the data.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "txDataNonzero", void 0), /**
     *  The fee per storage key in the [[link-eip-2930]] access list.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "txAccessListStorageKey", void 0), /**
     *  The fee per address in the [[link-eip-2930]] access list.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "txAccessListAddress", void 0);
        const props = {
            effectiveBlock
        };
        function set(name, nullish) {
            let value = (costs || {})[name];
            if (value == null) {
                value = nullish;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(typeof value === "number", "invalud value for ".concat(name), "costs", costs);
            props[name] = value;
        }
        set("txBase", 21000);
        set("txCreate", 32000);
        set("txDataZero", 4);
        set("txDataNonzero", 16);
        set("txAccessListStorageKey", 1900);
        set("txAccessListAddress", 2400);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, props);
    }
}
class EnsPlugin extends NetworkPlugin {
    clone() {
        return new EnsPlugin(this.address, this.targetNetwork);
    }
    /**
     *  Creates a new **EnsPlugin** connected to %%address%% on the
     *  %%targetNetwork%%. The default ENS address and mainnet is used
     *  if unspecified.
     */ constructor(address, targetNetwork){
        super("org.ethers.plugins.network.Ens"), /**
     *  The ENS Registrty Contract address.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "address", void 0), /**
     *  The chain ID that the ENS contract lives on.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "targetNetwork", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            address: address || EnsAddress,
            targetNetwork: targetNetwork == null ? 1 : targetNetwork
        });
    }
}
var _feeDataFunc = /*#__PURE__*/ new WeakMap();
class FeeDataNetworkPlugin extends NetworkPlugin {
    /**
     *  The fee data function provided to the constructor.
     */ get feeDataFunc() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _feeDataFunc);
    }
    /**
     *  Resolves to the fee data.
     */ async getFeeData(provider) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _feeDataFunc).call(this, provider);
    }
    clone() {
        return new FeeDataNetworkPlugin((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _feeDataFunc));
    }
    /**
     *  Creates a new **FeeDataNetworkPlugin**.
     */ constructor(feeDataFunc){
        super("org.ethers.plugins.network.FeeData"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _feeDataFunc, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _feeDataFunc, feeDataFunc);
    }
}
var _url = /*#__PURE__*/ new WeakMap(), _processFunc = /*#__PURE__*/ new WeakMap();
class FetchUrlFeeDataNetworkPlugin extends NetworkPlugin {
    /**
     *  The URL to initialize the FetchRequest with in %%processFunc%%.
     */ get url() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _url);
    }
    /**
     *  The callback to use when computing the FeeData.
     */ get processFunc() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processFunc);
    }
    // We are immutable, so we can serve as our own clone
    clone() {
        return this;
    }
    /**
     *  Creates a new **FetchUrlFeeDataNetworkPlugin** which will
     *  be used when computing the fee data for the network.
     */ constructor(url, processFunc){
        super("org.ethers.plugins.network.FetchUrlFeeDataPlugin"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _url, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processFunc, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _url, url);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _processFunc, processFunc);
    }
} /*
export class CustomBlockNetworkPlugin extends NetworkPlugin {
    readonly #blockFunc: (provider: Provider, block: BlockParams<string>) => Block<string>;
    readonly #blockWithTxsFunc: (provider: Provider, block: BlockParams<TransactionResponseParams>) => Block<TransactionResponse>;

    constructor(blockFunc: (provider: Provider, block: BlockParams<string>) => Block<string>, blockWithTxsFunc: (provider: Provider, block: BlockParams<TransactionResponseParams>) => Block<TransactionResponse>) {
        super("org.ethers.network-plugins.custom-block");
        this.#blockFunc = blockFunc;
        this.#blockWithTxsFunc = blockWithTxsFunc;
    }

    async getBlock(provider: Provider, block: BlockParams<string>): Promise<Block<string>> {
        return await this.#blockFunc(provider, block);
    }

    async getBlockions(provider: Provider, block: BlockParams<TransactionResponseParams>): Promise<Block<TransactionResponse>> {
        return await this.#blockWithTxsFunc(provider, block);
    }

    clone(): CustomBlockNetworkPlugin {
        return new CustomBlockNetworkPlugin(this.#blockFunc, this.#blockWithTxsFunc);
    }
}
*/  //# sourceMappingURL=plugins-network.js.map
}),
"[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/providers/network.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 *  A **Network** encapsulates the various properties required to
 *  interact with a specific chain.
 *
 *  @_subsection: api/providers:Networks  [networks]
 */ __turbopack_context__.s({
    "Network": ()=>Network
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$accesslist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/transaction/accesslist.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/maths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$plugins$2d$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/providers/plugins-network.js [app-client] (ecmascript)");
;
;
;
;
;
;
/* * * *
// Networks which operation against an L2 can use this plugin to
// specify how to access L1, for the purpose of resolving ENS,
// for example.
export class LayerOneConnectionPlugin extends NetworkPlugin {
    readonly provider!: Provider;
// @TODO: Rename to ChainAccess and allow for connecting to any chain
    constructor(provider: Provider) {
        super("org.ethers.plugins.layer-one-connection");
        defineProperties<LayerOneConnectionPlugin>(this, { provider });
    }

    clone(): LayerOneConnectionPlugin {
        return new LayerOneConnectionPlugin(this.provider);
    }
}
*/ const Networks = new Map();
var _name = /*#__PURE__*/ new WeakMap(), _chainId = /*#__PURE__*/ new WeakMap(), _plugins = /*#__PURE__*/ new WeakMap();
class Network {
    /**
     *  Returns a JSON-compatible representation of a Network.
     */ toJSON() {
        return {
            name: this.name,
            chainId: String(this.chainId)
        };
    }
    /**
     *  The network common name.
     *
     *  This is the canonical name, as networks migh have multiple
     *  names.
     */ get name() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _name);
    }
    set name(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _name, value);
    }
    /**
     *  The network chain ID.
     */ get chainId() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _chainId);
    }
    set chainId(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _chainId, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(value, "chainId"));
    }
    /**
     *  Returns true if %%other%% matches this network. Any chain ID
     *  must match, and if no chain ID is present, the name must match.
     *
     *  This method does not currently check for additional properties,
     *  such as ENS address or plug-in compatibility.
     */ matches(other) {
        if (other == null) {
            return false;
        }
        if (typeof other === "string") {
            try {
                return this.chainId === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(other);
            } catch (error) {}
            return this.name === other;
        }
        if (typeof other === "number" || typeof other === "bigint") {
            try {
                return this.chainId === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(other);
            } catch (error) {}
            return false;
        }
        if (typeof other === "object") {
            if (other.chainId != null) {
                try {
                    return this.chainId === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(other.chainId);
                } catch (error) {}
                return false;
            }
            if (other.name != null) {
                return this.name === other.name;
            }
            return false;
        }
        return false;
    }
    /**
     *  Returns the list of plugins currently attached to this Network.
     */ get plugins() {
        return Array.from((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _plugins).values());
    }
    /**
     *  Attach a new %%plugin%% to this Network. The network name
     *  must be unique, excluding any fragment.
     */ attachPlugin(plugin) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _plugins).get(plugin.name)) {
            throw new Error("cannot replace existing plugin: ".concat(plugin.name, " "));
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _plugins).set(plugin.name, plugin.clone());
        return this;
    }
    /**
     *  Return the plugin, if any, matching %%name%% exactly. Plugins
     *  with fragments will not be returned unless %%name%% includes
     *  a fragment.
     */ getPlugin(name) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _plugins).get(name) || null;
    }
    /**
     *  Gets a list of all plugins that match %%name%%, with otr without
     *  a fragment.
     */ getPlugins(basename) {
        return this.plugins.filter((p)=>p.name.split("#")[0] === basename);
    }
    /**
     *  Create a copy of this Network.
     */ clone() {
        const clone = new Network(this.name, this.chainId);
        this.plugins.forEach((plugin)=>{
            clone.attachPlugin(plugin.clone());
        });
        return clone;
    }
    /**
     *  Compute the intrinsic gas required for a transaction.
     *
     *  A GasCostPlugin can be attached to override the default
     *  values.
     */ computeIntrinsicGas(tx) {
        const costs = this.getPlugin("org.ethers.plugins.network.GasCost") || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$plugins$2d$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GasCostPlugin"]();
        let gas = costs.txBase;
        if (tx.to == null) {
            gas += costs.txCreate;
        }
        if (tx.data) {
            for(let i = 2; i < tx.data.length; i += 2){
                if (tx.data.substring(i, i + 2) === "00") {
                    gas += costs.txDataZero;
                } else {
                    gas += costs.txDataNonzero;
                }
            }
        }
        if (tx.accessList) {
            const accessList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$accesslist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["accessListify"])(tx.accessList);
            for(const addr in accessList){
                gas += costs.txAccessListAddress + costs.txAccessListStorageKey * accessList[addr].storageKeys.length;
            }
        }
        return gas;
    }
    /**
     *  Returns a new Network for the %%network%% name or chainId.
     */ static from(network) {
        injectCommonNetworks();
        // Default network
        if (network == null) {
            return Network.from("mainnet");
        }
        // Canonical name or chain ID
        if (typeof network === "number") {
            network = BigInt(network);
        }
        if (typeof network === "string" || typeof network === "bigint") {
            const networkFunc = Networks.get(network);
            if (networkFunc) {
                return networkFunc();
            }
            if (typeof network === "bigint") {
                return new Network("unknown", network);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "unknown network", "network", network);
        }
        // Clonable with network-like abilities
        if (typeof network.clone === "function") {
            const clone = network.clone();
            //if (typeof(network.name) !== "string" || typeof(network.chainId) !== "number") {
            //}
            return clone;
        }
        // Networkish
        if (typeof network === "object") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(typeof network.name === "string" && typeof network.chainId === "number", "invalid network object name or chainId", "network", network);
            const custom = new Network(network.name, network.chainId);
            if (network.ensAddress || network.ensNetwork != null) {
                custom.attachPlugin(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$plugins$2d$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EnsPlugin"](network.ensAddress, network.ensNetwork));
            }
            //if ((<any>network).layerOneConnection) {
            //    custom.attachPlugin(new LayerOneConnectionPlugin((<any>network).layerOneConnection));
            //}
            return custom;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "invalid network", "network", network);
    }
    /**
     *  Register %%nameOrChainId%% with a function which returns
     *  an instance of a Network representing that chain.
     */ static register(nameOrChainId, networkFunc) {
        if (typeof nameOrChainId === "number") {
            nameOrChainId = BigInt(nameOrChainId);
        }
        const existing = Networks.get(nameOrChainId);
        if (existing) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "conflicting network for ".concat(JSON.stringify(existing.name)), "nameOrChainId", nameOrChainId);
        }
        Networks.set(nameOrChainId, networkFunc);
    }
    /**
     *  Creates a new **Network** for %%name%% and %%chainId%%.
     */ constructor(name, chainId){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _name, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _chainId, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _plugins, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _name, name);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _chainId, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(chainId));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _plugins, new Map());
    }
}
// We don't want to bring in formatUnits because it is backed by
// FixedNumber and we want to keep Networks tiny. The values
// included by the Gas Stations are also IEEE 754 with lots of
// rounding issues and exceed the strict checks formatUnits has.
function parseUnits(_value, decimals) {
    const value = String(_value);
    if (!value.match(/^[0-9.]+$/)) {
        throw new Error("invalid gwei value: ".concat(_value));
    }
    // Break into [ whole, fraction ]
    const comps = value.split(".");
    if (comps.length === 1) {
        comps.push("");
    }
    // More than 1 decimal point or too many fractional positions
    if (comps.length !== 2) {
        throw new Error("invalid gwei value: ".concat(_value));
    }
    // Pad the fraction to 9 decimalplaces
    while(comps[1].length < decimals){
        comps[1] += "0";
    }
    // Too many decimals and some non-zero ending, take the ceiling
    if (comps[1].length > 9) {
        let frac = BigInt(comps[1].substring(0, 9));
        if (!comps[1].substring(9).match(/^0+$/)) {
            frac++;
        }
        comps[1] = frac.toString();
    }
    return BigInt(comps[0] + comps[1]);
}
// Used by Polygon to use a gas station for fee data
function getGasStationPlugin(url) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$plugins$2d$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FetchUrlFeeDataNetworkPlugin"](url, async (fetchFeeData, provider, request)=>{
        // Prevent Cloudflare from blocking our request in node.js
        request.setHeader("User-Agent", "ethers");
        let response;
        try {
            const [_response, _feeData] = await Promise.all([
                request.send(),
                fetchFeeData()
            ]);
            response = _response;
            const payload = response.bodyJson.standard;
            const feeData = {
                gasPrice: _feeData.gasPrice,
                maxFeePerGas: parseUnits(payload.maxFee, 9),
                maxPriorityFeePerGas: parseUnits(payload.maxPriorityFee, 9)
            };
            return feeData;
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "error encountered with polygon gas station (".concat(JSON.stringify(request.url), ")"), "SERVER_ERROR", {
                request,
                response,
                error
            });
        }
    });
}
// See: https://chainlist.org
let injected = false;
function injectCommonNetworks() {
    if (injected) {
        return;
    }
    injected = true;
    /// Register popular Ethereum networks
    function registerEth(name, chainId, options) {
        const func = function() {
            const network = new Network(name, chainId);
            // We use 0 to disable ENS
            if (options.ensNetwork != null) {
                network.attachPlugin(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$plugins$2d$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EnsPlugin"](null, options.ensNetwork));
            }
            network.attachPlugin(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$plugins$2d$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GasCostPlugin"]());
            (options.plugins || []).forEach((plugin)=>{
                network.attachPlugin(plugin);
            });
            return network;
        };
        // Register the network by name and chain ID
        Network.register(name, func);
        Network.register(chainId, func);
        if (options.altNames) {
            options.altNames.forEach((name)=>{
                Network.register(name, func);
            });
        }
    }
    registerEth("mainnet", 1, {
        ensNetwork: 1,
        altNames: [
            "homestead"
        ]
    });
    registerEth("ropsten", 3, {
        ensNetwork: 3
    });
    registerEth("rinkeby", 4, {
        ensNetwork: 4
    });
    registerEth("goerli", 5, {
        ensNetwork: 5
    });
    registerEth("kovan", 42, {
        ensNetwork: 42
    });
    registerEth("sepolia", 11155111, {
        ensNetwork: 11155111
    });
    registerEth("holesky", 17000, {
        ensNetwork: 17000
    });
    registerEth("classic", 61, {});
    registerEth("classicKotti", 6, {});
    registerEth("arbitrum", 42161, {
        ensNetwork: 1
    });
    registerEth("arbitrum-goerli", 421613, {});
    registerEth("arbitrum-sepolia", 421614, {});
    registerEth("base", 8453, {
        ensNetwork: 1
    });
    registerEth("base-goerli", 84531, {});
    registerEth("base-sepolia", 84532, {});
    registerEth("bnb", 56, {
        ensNetwork: 1
    });
    registerEth("bnbt", 97, {});
    registerEth("filecoin", 314, {});
    registerEth("filecoin-calibration", 314159, {});
    registerEth("linea", 59144, {
        ensNetwork: 1
    });
    registerEth("linea-goerli", 59140, {});
    registerEth("linea-sepolia", 59141, {});
    registerEth("matic", 137, {
        ensNetwork: 1,
        plugins: [
            getGasStationPlugin("https:/\/gasstation.polygon.technology/v2")
        ]
    });
    registerEth("matic-amoy", 80002, {});
    registerEth("matic-mumbai", 80001, {
        altNames: [
            "maticMumbai",
            "maticmum"
        ],
        plugins: [
            getGasStationPlugin("https:/\/gasstation-testnet.polygon.technology/v2")
        ]
    });
    registerEth("optimism", 10, {
        ensNetwork: 1,
        plugins: []
    });
    registerEth("optimism-goerli", 420, {});
    registerEth("optimism-sepolia", 11155420, {});
    registerEth("xdai", 100, {
        ensNetwork: 1
    });
} //# sourceMappingURL=network.js.map
}),
"[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/providers/subscriber-polling.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "OnBlockSubscriber": ()=>OnBlockSubscriber,
    "PollingBlockSubscriber": ()=>PollingBlockSubscriber,
    "PollingBlockTagSubscriber": ()=>PollingBlockTagSubscriber,
    "PollingEventSubscriber": ()=>PollingEventSubscriber,
    "PollingOrphanSubscriber": ()=>PollingOrphanSubscriber,
    "PollingTransactionSubscriber": ()=>PollingTransactionSubscriber,
    "getPollingSubscriber": ()=>getPollingSubscriber
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_method_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_method_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/data.js [app-client] (ecmascript)");
;
;
;
;
;
;
function copy(obj) {
    return JSON.parse(JSON.stringify(obj));
}
function getPollingSubscriber(provider, event) {
    if (event === "block") {
        return new PollingBlockSubscriber(provider);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"])(event, 32)) {
        return new PollingTransactionSubscriber(provider, event);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "unsupported polling event", "UNSUPPORTED_OPERATION", {
        operation: "getPollingSubscriber",
        info: {
            event
        }
    });
}
var _provider = /*#__PURE__*/ new WeakMap(), _poller = /*#__PURE__*/ new WeakMap(), _interval = /*#__PURE__*/ new WeakMap(), // The most recent block we have scanned for events. The value -2
// indicates we still need to fetch an initial block number
_blockNumber = /*#__PURE__*/ new WeakMap(), _poll = /*#__PURE__*/ new WeakSet();
class PollingBlockSubscriber {
    /**
     *  The polling interval.
     */ get pollingInterval() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _interval);
    }
    set pollingInterval(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _interval, value);
    }
    start() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poller)) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poller, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider)._setTimeout((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poll, poll).bind(this), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _interval)));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poll, poll).call(this);
    }
    stop() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poller)) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider)._clearTimeout((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poller));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poller, null);
    }
    pause(dropWhilePaused) {
        this.stop();
        if (dropWhilePaused) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _blockNumber, -2);
        }
    }
    resume() {
        this.start();
    }
    /**
     *  Create a new **PollingBlockSubscriber** attached to %%provider%%.
     */ constructor(provider){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poll);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poller, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _interval, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _blockNumber, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider, provider);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poller, null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _interval, 4000);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _blockNumber, -2);
    }
}
async function poll() {
    try {
        const blockNumber = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider).getBlockNumber();
        // Bootstrap poll to setup our initial block number
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _blockNumber) === -2) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _blockNumber, blockNumber);
            return;
        }
        // @TODO: Put a cap on the maximum number of events per loop?
        if (blockNumber !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _blockNumber)) {
            for(let b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _blockNumber) + 1; b <= blockNumber; b++){
                // We have been stopped
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poller) == null) {
                    return;
                }
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider).emit("block", b);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _blockNumber, blockNumber);
        }
    } catch (error) {
    // @TODO: Minor bump, add an "error" event to let subscribers
    //        know things went awry.
    //console.log(error);
    }
    // We have been stopped
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poller) == null) {
        return;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poller, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider)._setTimeout((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poll, poll).bind(this), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _interval)));
}
var _provider1 = /*#__PURE__*/ new WeakMap(), _poll1 = /*#__PURE__*/ new WeakMap(), _running = /*#__PURE__*/ new WeakMap();
class OnBlockSubscriber {
    /**
     *  Called on every new block.
     */ async _poll(blockNumber, provider) {
        throw new Error("sub-classes must override this");
    }
    start() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _running)) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _running, true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poll1).call(this, -2);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider1).on("block", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poll1));
    }
    stop() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _running)) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _running, false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider1).off("block", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poll1));
    }
    pause(dropWhilePaused) {
        this.stop();
    }
    resume() {
        this.start();
    }
    /**
     *  Create a new **OnBlockSubscriber** attached to %%provider%%.
     */ constructor(provider){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poll1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _running, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider1, provider);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _running, false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poll1, (blockNumber)=>{
            this._poll(blockNumber, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider1));
        });
    }
}
var _tag = /*#__PURE__*/ new WeakMap(), _lastBlock = /*#__PURE__*/ new WeakMap();
class PollingBlockTagSubscriber extends OnBlockSubscriber {
    pause(dropWhilePaused) {
        if (dropWhilePaused) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _lastBlock, -2);
        }
        super.pause(dropWhilePaused);
    }
    async _poll(blockNumber, provider) {
        const block = await provider.getBlock((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tag));
        if (block == null) {
            return;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _lastBlock) === -2) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _lastBlock, block.number);
        } else if (block.number > (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _lastBlock)) {
            provider.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tag), block.number);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _lastBlock, block.number);
        }
    }
    constructor(provider, tag){
        super(provider), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tag, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _lastBlock, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _tag, tag);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _lastBlock, -2);
    }
}
var _filter = /*#__PURE__*/ new WeakMap();
class PollingOrphanSubscriber extends OnBlockSubscriber {
    async _poll(blockNumber, provider) {
        throw new Error("@TODO");
        console.log((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _filter));
    }
    constructor(provider, filter){
        super(provider), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _filter, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _filter, copy(filter));
    }
}
var _hash = /*#__PURE__*/ new WeakMap();
class PollingTransactionSubscriber extends OnBlockSubscriber {
    async _poll(blockNumber, provider) {
        const tx = await provider.getTransactionReceipt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hash));
        if (tx) {
            provider.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hash), tx);
        }
    }
    /**
     *  Create a new **PollingTransactionSubscriber** attached to
     *  %%provider%%, listening for %%hash%%.
     */ constructor(provider, hash){
        super(provider), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hash, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hash, hash);
    }
}
var _provider2 = /*#__PURE__*/ new WeakMap(), _filter1 = /*#__PURE__*/ new WeakMap(), _poller1 = /*#__PURE__*/ new WeakMap(), _running1 = /*#__PURE__*/ new WeakMap(), // The most recent block we have scanned for events. The value -2
// indicates we still need to fetch an initial block number
_blockNumber1 = /*#__PURE__*/ new WeakMap(), _poll2 = /*#__PURE__*/ new WeakSet();
class PollingEventSubscriber {
    start() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _running1)) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _running1, true);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _blockNumber1) === -2) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider2).getBlockNumber().then((blockNumber)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _blockNumber1, blockNumber);
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider2).on("block", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poller1));
    }
    stop() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _running1)) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _running1, false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider2).off("block", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poller1));
    }
    pause(dropWhilePaused) {
        this.stop();
        if (dropWhilePaused) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _blockNumber1, -2);
        }
    }
    resume() {
        this.start();
    }
    /**
     *  Create a new **PollingTransactionSubscriber** attached to
     *  %%provider%%, listening for %%filter%%.
     */ constructor(provider, filter){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poll2);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider2, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _filter1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poller1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _running1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _blockNumber1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider2, provider);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _filter1, copy(filter));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poller1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poll2, poll1).bind(this));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _running1, false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _blockNumber1, -2);
    }
} //# sourceMappingURL=subscriber-polling.js.map
async function poll1(blockNumber) {
    // The initial block hasn't been determined yet
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _blockNumber1) === -2) {
        return;
    }
    const filter = copy((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _filter1));
    filter.fromBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _blockNumber1) + 1;
    filter.toBlock = blockNumber;
    const logs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider2).getLogs(filter);
    // No logs could just mean the node has not indexed them yet,
    // so we keep a sliding window of 60 blocks to keep scanning
    if (logs.length === 0) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _blockNumber1) < blockNumber - 60) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _blockNumber1, blockNumber - 60);
        }
        return;
    }
    for (const log of logs){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider2).emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _filter1), log);
        // Only advance the block number when logs were found to
        // account for networks (like BNB and Polygon) which may
        // sacrifice event consistency for block event speed
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _blockNumber1, log.blockNumber);
    }
}
}),
"[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/providers/abstract-provider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 *  The available providers should suffice for most developers purposes,
 *  but the [[AbstractProvider]] class has many features which enable
 *  sub-classing it for specific purposes.
 *
 *  @_section: api/providers/abstract-provider: Subclassing Provider  [abstract-provider]
 */ // @TODO
// Event coalescence
//   When we register an event with an async value (e.g. address is a Signer
//   or ENS name), we need to add it immeidately for the Event API, but also
//   need time to resolve the address. Upon resolving the address, we need to
//   migrate the listener to the static event. We also need to maintain a map
//   of Signer/ENS name to address so we can sync respond to listenerCount.
__turbopack_context__.s({
    "AbstractProvider": ()=>AbstractProvider,
    "UnmanagedSubscriber": ()=>UnmanagedSubscriber
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_update$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_update.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_method_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_method_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/address/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/address/checks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$constants$2f$addresses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/constants/addresses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/contract/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$namehash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/hash/namehash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/transaction/transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/maths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/events.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$utf8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/utf8.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$ens$2d$resolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/providers/ens-resolver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/providers/format.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/providers/network.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/providers/provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$subscriber$2d$polling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/providers/subscriber-polling.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Constants
const BN_2 = BigInt(2);
const MAX_CCIP_REDIRECTS = 10;
function isPromise(value) {
    return value && typeof value.then === "function";
}
function getTag(prefix, value) {
    return prefix + ":" + JSON.stringify(value, (k, v)=>{
        if (v == null) {
            return "null";
        }
        if (typeof v === "bigint") {
            return "bigint:".concat(v.toString());
        }
        if (typeof v === "string") {
            return v.toLowerCase();
        }
        // Sort object keys
        if (typeof v === "object" && !Array.isArray(v)) {
            const keys = Object.keys(v);
            keys.sort();
            return keys.reduce((accum, key)=>{
                accum[key] = v[key];
                return accum;
            }, {});
        }
        return v;
    });
}
class UnmanagedSubscriber {
    start() {}
    stop() {}
    pause(dropWhilePaused) {}
    resume() {}
    /**
     *  Create a new UnmanagedSubscriber with %%name%%.
     */ constructor(name){
        /**
     *  The name fof the event.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "name", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            name
        });
    }
}
function copy(value) {
    return JSON.parse(JSON.stringify(value));
}
function concisify(items) {
    items = Array.from(new Set(items).values());
    items.sort();
    return items;
}
async function getSubscription(_event, provider) {
    if (_event == null) {
        throw new Error("invalid event");
    }
    // Normalize topic array info an EventFilter
    if (Array.isArray(_event)) {
        _event = {
            topics: _event
        };
    }
    if (typeof _event === "string") {
        switch(_event){
            case "block":
            case "debug":
            case "error":
            case "finalized":
            case "network":
            case "pending":
            case "safe":
                {
                    return {
                        type: _event,
                        tag: _event
                    };
                }
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"])(_event, 32)) {
        const hash = _event.toLowerCase();
        return {
            type: "transaction",
            tag: getTag("tx", {
                hash
            }),
            hash
        };
    }
    if (_event.orphan) {
        const event = _event;
        // @TODO: Should lowercase and whatnot things here instead of copy...
        return {
            type: "orphan",
            tag: getTag("orphan", event),
            filter: copy(event)
        };
    }
    if (_event.address || _event.topics) {
        const event = _event;
        const filter = {
            topics: (event.topics || []).map((t)=>{
                if (t == null) {
                    return null;
                }
                if (Array.isArray(t)) {
                    return concisify(t.map((t)=>t.toLowerCase()));
                }
                return t.toLowerCase();
            })
        };
        if (event.address) {
            const addresses = [];
            const promises = [];
            const addAddress = (addr)=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"])(addr)) {
                    addresses.push(addr);
                } else {
                    promises.push((async ()=>{
                        addresses.push(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAddress"])(addr, provider));
                    })());
                }
            };
            if (Array.isArray(event.address)) {
                event.address.forEach(addAddress);
            } else {
                addAddress(event.address);
            }
            if (promises.length) {
                await Promise.all(promises);
            }
            filter.address = concisify(addresses.map((a)=>a.toLowerCase()));
        }
        return {
            filter,
            tag: getTag("event", filter),
            type: "event"
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "unknown ProviderEvent", "event", _event);
}
function getTime() {
    return new Date().getTime();
}
const defaultOptions = {
    cacheTimeout: 250,
    pollingInterval: 4000
};
var _subs = /*#__PURE__*/ new WeakMap(), _plugins = /*#__PURE__*/ new WeakMap(), // null=unpaused, true=paused+dropWhilePaused, false=paused
_pausedState = /*#__PURE__*/ new WeakMap(), _destroyed = /*#__PURE__*/ new WeakMap(), _networkPromise = /*#__PURE__*/ new WeakMap(), _anyNetwork = /*#__PURE__*/ new WeakMap(), _performCache = /*#__PURE__*/ new WeakMap(), // The most recent block number if running an event or -1 if no "block" event
_lastBlockNumber = /*#__PURE__*/ new WeakMap(), _nextTimer = /*#__PURE__*/ new WeakMap(), _timers = /*#__PURE__*/ new WeakMap(), _disableCcipRead = /*#__PURE__*/ new WeakMap(), _options = /*#__PURE__*/ new WeakMap(), _perform = /*#__PURE__*/ new WeakSet(), _call = /*#__PURE__*/ new WeakSet(), _checkNetwork = /*#__PURE__*/ new WeakSet(), _getAccountValue = /*#__PURE__*/ new WeakSet(), _getBlock = /*#__PURE__*/ new WeakSet(), _hasSub = /*#__PURE__*/ new WeakSet(), _getSub = /*#__PURE__*/ new WeakSet();
class AbstractProvider {
    get pollingInterval() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _options).pollingInterval;
    }
    /**
     *  Returns ``this``, to allow an **AbstractProvider** to implement
     *  the [[ContractRunner]] interface.
     */ get provider() {
        return this;
    }
    /**
     *  Returns all the registered plug-ins.
     */ get plugins() {
        return Array.from((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _plugins).values());
    }
    /**
     *  Attach a new plug-in.
     */ attachPlugin(plugin) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _plugins).get(plugin.name)) {
            throw new Error("cannot replace existing plugin: ".concat(plugin.name, " "));
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _plugins).set(plugin.name, plugin.connect(this));
        return this;
    }
    /**
     *  Get a plugin by name.
     */ getPlugin(name) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _plugins).get(name) || null;
    }
    /**
     *  Prevent any CCIP-read operation, regardless of whether requested
     *  in a [[call]] using ``enableCcipRead``.
     */ get disableCcipRead() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _disableCcipRead);
    }
    set disableCcipRead(value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _disableCcipRead, !!value);
    }
    /**
     *  Resolves to the data for executing the CCIP-read operations.
     */ async ccipReadFetch(tx, calldata, urls) {
        if (this.disableCcipRead || urls.length === 0 || tx.to == null) {
            return null;
        }
        const sender = tx.to.toLowerCase();
        const data = calldata.toLowerCase();
        const errorMessages = [];
        for(let i = 0; i < urls.length; i++){
            const url = urls[i];
            // URL expansion
            const href = url.replace("{sender}", sender).replace("{data}", data);
            // If no {data} is present, use POST; otherwise GET
            //const json: string | null = (url.indexOf("{data}") >= 0) ? null: JSON.stringify({ data, sender });
            //const result = await fetchJson({ url: href, errorPassThrough: true }, json, (value, response) => {
            //    value.status = response.statusCode;
            //    return value;
            //});
            const request = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FetchRequest"](href);
            if (url.indexOf("{data}") === -1) {
                request.body = {
                    data,
                    sender
                };
            }
            this.emit("debug", {
                action: "sendCcipReadFetchRequest",
                request,
                index: i,
                urls
            });
            let errorMessage = "unknown error";
            // Fetch the resource...
            let resp;
            try {
                resp = await request.send();
            } catch (error) {
                // ...low-level fetch error (missing host, bad SSL, etc.),
                // so try next URL
                errorMessages.push(error.message);
                this.emit("debug", {
                    action: "receiveCcipReadFetchError",
                    request,
                    result: {
                        error
                    }
                });
                continue;
            }
            try {
                const result = resp.bodyJson;
                if (result.data) {
                    this.emit("debug", {
                        action: "receiveCcipReadFetchResult",
                        request,
                        result
                    });
                    return result.data;
                }
                if (result.message) {
                    errorMessage = result.message;
                }
                this.emit("debug", {
                    action: "receiveCcipReadFetchError",
                    request,
                    result
                });
            } catch (error) {}
            // 4xx indicates the result is not present; stop
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(resp.statusCode < 400 || resp.statusCode >= 500, "response not found during CCIP fetch: ".concat(errorMessage), "OFFCHAIN_FAULT", {
                reason: "404_MISSING_RESOURCE",
                transaction: tx,
                info: {
                    url,
                    errorMessage
                }
            });
            // 5xx indicates server issue; try the next url
            errorMessages.push(errorMessage);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "error encountered during CCIP fetch: ".concat(errorMessages.map((m)=>JSON.stringify(m)).join(", ")), "OFFCHAIN_FAULT", {
            reason: "500_SERVER_ERROR",
            transaction: tx,
            info: {
                urls,
                errorMessages
            }
        });
    }
    /**
     *  Provides the opportunity for a sub-class to wrap a block before
     *  returning it, to add additional properties or an alternate
     *  sub-class of [[Block]].
     */ _wrapBlock(value, network) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Block"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBlock"])(value), this);
    }
    /**
     *  Provides the opportunity for a sub-class to wrap a log before
     *  returning it, to add additional properties or an alternate
     *  sub-class of [[Log]].
     */ _wrapLog(value, network) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Log"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLog"])(value), this);
    }
    /**
     *  Provides the opportunity for a sub-class to wrap a transaction
     *  receipt before returning it, to add additional properties or an
     *  alternate sub-class of [[TransactionReceipt]].
     */ _wrapTransactionReceipt(value, network) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionReceipt"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTransactionReceipt"])(value), this);
    }
    /**
     *  Provides the opportunity for a sub-class to wrap a transaction
     *  response before returning it, to add additional properties or an
     *  alternate sub-class of [[TransactionResponse]].
     */ _wrapTransactionResponse(tx, network) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionResponse"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTransactionResponse"])(tx), this);
    }
    /**
     *  Resolves to the Network, forcing a network detection using whatever
     *  technique the sub-class requires.
     *
     *  Sub-classes **must** override this.
     */ _detectNetwork() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "sub-classes must implement this", "UNSUPPORTED_OPERATION", {
            operation: "_detectNetwork"
        });
    }
    /**
     *  Sub-classes should use this to perform all built-in operations. All
     *  methods sanitizes and normalizes the values passed into this.
     *
     *  Sub-classes **must** override this.
     */ async _perform(req) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "unsupported method: ".concat(req.method), "UNSUPPORTED_OPERATION", {
            operation: req.method,
            info: req
        });
    }
    // State
    async getBlockNumber() {
        const blockNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _perform, perform).call(this, {
            method: "getBlockNumber"
        }), "%response");
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _lastBlockNumber) >= 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _lastBlockNumber, blockNumber);
        }
        return blockNumber;
    }
    /**
     *  Returns or resolves to the address for %%address%%, resolving ENS
     *  names and [[Addressable]] objects and returning if already an
     *  address.
     */ _getAddress(address) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAddress"])(address, this);
    }
    /**
     *  Returns or resolves to a valid block tag for %%blockTag%%, resolving
     *  negative values and returning if already a valid block tag.
     */ _getBlockTag(blockTag) {
        if (blockTag == null) {
            return "latest";
        }
        switch(blockTag){
            case "earliest":
                return "0x0";
            case "finalized":
            case "latest":
            case "pending":
            case "safe":
                return blockTag;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"])(blockTag)) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"])(blockTag, 32)) {
                return blockTag;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toQuantity"])(blockTag);
        }
        if (typeof blockTag === "bigint") {
            blockTag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"])(blockTag, "blockTag");
        }
        if (typeof blockTag === "number") {
            if (blockTag >= 0) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toQuantity"])(blockTag);
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _lastBlockNumber) >= 0) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toQuantity"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _lastBlockNumber) + blockTag);
            }
            return this.getBlockNumber().then((b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toQuantity"])(b + blockTag));
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "invalid blockTag", "blockTag", blockTag);
    }
    /**
     *  Returns or resolves to a filter for %%filter%%, resolving any ENS
     *  names or [[Addressable]] object and returning if already a valid
     *  filter.
     */ _getFilter(filter) {
        // Create a canonical representation of the topics
        const topics = (filter.topics || []).map((t)=>{
            if (t == null) {
                return null;
            }
            if (Array.isArray(t)) {
                return concisify(t.map((t)=>t.toLowerCase()));
            }
            return t.toLowerCase();
        });
        const blockHash = "blockHash" in filter ? filter.blockHash : undefined;
        const resolve = (_address, fromBlock, toBlock)=>{
            let address = undefined;
            switch(_address.length){
                case 0:
                    break;
                case 1:
                    address = _address[0];
                    break;
                default:
                    _address.sort();
                    address = _address;
            }
            if (blockHash) {
                if (fromBlock != null || toBlock != null) {
                    throw new Error("invalid filter");
                }
            }
            const filter = {};
            if (address) {
                filter.address = address;
            }
            if (topics.length) {
                filter.topics = topics;
            }
            if (fromBlock) {
                filter.fromBlock = fromBlock;
            }
            if (toBlock) {
                filter.toBlock = toBlock;
            }
            if (blockHash) {
                filter.blockHash = blockHash;
            }
            return filter;
        };
        // Addresses could be async (ENS names or Addressables)
        let address = [];
        if (filter.address) {
            if (Array.isArray(filter.address)) {
                for (const addr of filter.address){
                    address.push(this._getAddress(addr));
                }
            } else {
                address.push(this._getAddress(filter.address));
            }
        }
        let fromBlock = undefined;
        if ("fromBlock" in filter) {
            fromBlock = this._getBlockTag(filter.fromBlock);
        }
        let toBlock = undefined;
        if ("toBlock" in filter) {
            toBlock = this._getBlockTag(filter.toBlock);
        }
        if (address.filter((a)=>typeof a !== "string").length || fromBlock != null && typeof fromBlock !== "string" || toBlock != null && typeof toBlock !== "string") {
            return Promise.all([
                Promise.all(address),
                fromBlock,
                toBlock
            ]).then((result)=>{
                return resolve(result[0], result[1], result[2]);
            });
        }
        return resolve(address, fromBlock, toBlock);
    }
    /**
     *  Returns or resolves to a transaction for %%request%%, resolving
     *  any ENS names or [[Addressable]] and returning if already a valid
     *  transaction.
     */ _getTransactionRequest(_request) {
        const request = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyRequest"])(_request);
        const promises = [];
        [
            "to",
            "from"
        ].forEach((key)=>{
            if (request[key] == null) {
                return;
            }
            const addr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAddress"])(request[key], this);
            if (isPromise(addr)) {
                promises.push(async function() {
                    request[key] = await addr;
                }());
            } else {
                request[key] = addr;
            }
        });
        if (request.blockTag != null) {
            const blockTag = this._getBlockTag(request.blockTag);
            if (isPromise(blockTag)) {
                promises.push(async function() {
                    request.blockTag = await blockTag;
                }());
            } else {
                request.blockTag = blockTag;
            }
        }
        if (promises.length) {
            return async function() {
                await Promise.all(promises);
                return request;
            }();
        }
        return request;
    }
    async getNetwork() {
        // No explicit network was set and this is our first time
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _networkPromise) == null) {
            // Detect the current network (shared with all calls)
            const detectNetwork = (async ()=>{
                try {
                    const network = await this._detectNetwork();
                    this.emit("network", network, null);
                    return network;
                } catch (error) {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _networkPromise) === detectNetwork) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _networkPromise, null);
                    }
                    throw error;
                }
            })();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _networkPromise, detectNetwork);
            return (await detectNetwork).clone();
        }
        const networkPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _networkPromise);
        const [expected, actual] = await Promise.all([
            networkPromise,
            this._detectNetwork() // The actual connected network
        ]);
        if (expected.chainId !== actual.chainId) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _anyNetwork)) {
                // The "any" network can change, so notify listeners
                this.emit("network", actual, expected);
                // Update the network if something else hasn't already changed it
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _networkPromise) === networkPromise) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _networkPromise, Promise.resolve(actual));
                }
            } else {
                // Otherwise, we do not allow changes to the underlying network
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "network changed: ".concat(expected.chainId, " => ").concat(actual.chainId, " "), "NETWORK_ERROR", {
                    event: "changed"
                });
            }
        }
        return expected.clone();
    }
    async getFeeData() {
        const network = await this.getNetwork();
        const getFeeDataFunc = async ()=>{
            const { _block, gasPrice, priorityFee } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveProperties"])({
                _block: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getBlock, getBlock).call(this, "latest", false),
                gasPrice: (async ()=>{
                    try {
                        const value = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _perform, perform).call(this, {
                            method: "getGasPrice"
                        });
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(value, "%response");
                    } catch (error) {}
                    return null;
                })(),
                priorityFee: (async ()=>{
                    try {
                        const value = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _perform, perform).call(this, {
                            method: "getPriorityFee"
                        });
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(value, "%response");
                    } catch (error) {}
                    return null;
                })()
            });
            let maxFeePerGas = null;
            let maxPriorityFeePerGas = null;
            // These are the recommended EIP-1559 heuristics for fee data
            const block = this._wrapBlock(_block, network);
            if (block && block.baseFeePerGas) {
                maxPriorityFeePerGas = priorityFee != null ? priorityFee : BigInt("1000000000");
                maxFeePerGas = block.baseFeePerGas * BN_2 + maxPriorityFeePerGas;
            }
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeeData"](gasPrice, maxFeePerGas, maxPriorityFeePerGas);
        };
        // Check for a FeeDataNetWorkPlugin
        const plugin = network.getPlugin("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
        if (plugin) {
            const req = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FetchRequest"](plugin.url);
            const feeData = await plugin.processFunc(getFeeDataFunc, this, req);
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeeData"](feeData.gasPrice, feeData.maxFeePerGas, feeData.maxPriorityFeePerGas);
        }
        return await getFeeDataFunc();
    }
    async estimateGas(_tx) {
        let tx = this._getTransactionRequest(_tx);
        if (isPromise(tx)) {
            tx = await tx;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _perform, perform).call(this, {
            method: "estimateGas",
            transaction: tx
        }), "%response");
    }
    async call(_tx) {
        const { tx, blockTag } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveProperties"])({
            tx: this._getTransactionRequest(_tx),
            blockTag: this._getBlockTag(_tx.blockTag)
        });
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _checkNetwork, checkNetwork).call(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _call, call).call(this, tx, blockTag, _tx.enableCcipRead ? 0 : -1));
    }
    async getBalance(address, blockTag) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getAccountValue, getAccountValue).call(this, {
            method: "getBalance"
        }, address, blockTag), "%response");
    }
    async getTransactionCount(address, blockTag) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getAccountValue, getAccountValue).call(this, {
            method: "getTransactionCount"
        }, address, blockTag), "%response");
    }
    async getCode(address, blockTag) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getAccountValue, getAccountValue).call(this, {
            method: "getCode"
        }, address, blockTag));
    }
    async getStorage(address, _position, blockTag) {
        const position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(_position, "position");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getAccountValue, getAccountValue).call(this, {
            method: "getStorage",
            position
        }, address, blockTag));
    }
    // Write
    async broadcastTransaction(signedTx) {
        const { blockNumber, hash, network } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveProperties"])({
            blockNumber: this.getBlockNumber(),
            hash: this._perform({
                method: "broadcastTransaction",
                signedTransaction: signedTx
            }),
            network: this.getNetwork()
        });
        const tx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"].from(signedTx);
        if (tx.hash !== hash) {
            throw new Error("@TODO: the returned hash did not match");
        }
        return this._wrapTransactionResponse(tx, network).replaceableTransaction(blockNumber);
    }
    // Queries
    async getBlock(block, prefetchTxs) {
        const { network, params } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveProperties"])({
            network: this.getNetwork(),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getBlock, getBlock).call(this, block, !!prefetchTxs)
        });
        if (params == null) {
            return null;
        }
        return this._wrapBlock(params, network);
    }
    async getTransaction(hash) {
        const { network, params } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveProperties"])({
            network: this.getNetwork(),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _perform, perform).call(this, {
                method: "getTransaction",
                hash
            })
        });
        if (params == null) {
            return null;
        }
        return this._wrapTransactionResponse(params, network);
    }
    async getTransactionReceipt(hash) {
        const { network, params } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveProperties"])({
            network: this.getNetwork(),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _perform, perform).call(this, {
                method: "getTransactionReceipt",
                hash
            })
        });
        if (params == null) {
            return null;
        }
        // Some backends did not backfill the effectiveGasPrice into old transactions
        // in the receipt, so we look it up manually and inject it.
        if (params.gasPrice == null && params.effectiveGasPrice == null) {
            const tx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _perform, perform).call(this, {
                method: "getTransaction",
                hash
            });
            if (tx == null) {
                throw new Error("report this; could not find tx or effectiveGasPrice");
            }
            params.effectiveGasPrice = tx.gasPrice;
        }
        return this._wrapTransactionReceipt(params, network);
    }
    async getTransactionResult(hash) {
        const { result } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveProperties"])({
            network: this.getNetwork(),
            result: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _perform, perform).call(this, {
                method: "getTransactionResult",
                hash
            })
        });
        if (result == null) {
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(result);
    }
    // Bloom-filter Queries
    async getLogs(_filter) {
        let filter = this._getFilter(_filter);
        if (isPromise(filter)) {
            filter = await filter;
        }
        const { network, params } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveProperties"])({
            network: this.getNetwork(),
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _perform, perform).call(this, {
                method: "getLogs",
                filter
            })
        });
        return params.map((p)=>this._wrapLog(p, network));
    }
    // ENS
    _getProvider(chainId) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "provider cannot connect to target network", "UNSUPPORTED_OPERATION", {
            operation: "_getProvider()"
        });
    }
    async getResolver(name) {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$ens$2d$resolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EnsResolver"].fromName(this, name);
    }
    async getAvatar(name) {
        const resolver = await this.getResolver(name);
        if (resolver) {
            return await resolver.getAvatar();
        }
        return null;
    }
    async resolveName(name) {
        const resolver = await this.getResolver(name);
        if (resolver) {
            return await resolver.getAddress();
        }
        return null;
    }
    async lookupAddress(address) {
        address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(address);
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$namehash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namehash"])(address.substring(2).toLowerCase() + ".addr.reverse");
        try {
            const ensAddr = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$ens$2d$resolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EnsResolver"].getEnsAddress(this);
            const ensContract = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Contract"](ensAddr, [
                "function resolver(bytes32) view returns (address)"
            ], this);
            const resolver = await ensContract.resolver(node);
            if (resolver == null || resolver === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$constants$2f$addresses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZeroAddress"]) {
                return null;
            }
            const resolverContract = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Contract"](resolver, [
                "function name(bytes32) view returns (string)"
            ], this);
            const name = await resolverContract.name(node);
            // Failed forward resolution
            const check = await this.resolveName(name);
            if (check !== address) {
                return null;
            }
            return name;
        } catch (error) {
            // No data was returned from the resolver
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isError"])(error, "BAD_DATA") && error.value === "0x") {
                return null;
            }
            // Something reerted
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isError"])(error, "CALL_EXCEPTION")) {
                return null;
            }
            throw error;
        }
        return null;
    }
    async waitForTransaction(hash, _confirms, timeout) {
        const confirms = _confirms != null ? _confirms : 1;
        if (confirms === 0) {
            return this.getTransactionReceipt(hash);
        }
        return new Promise(async (resolve, reject)=>{
            let timer = null;
            const listener = async (blockNumber)=>{
                try {
                    const receipt = await this.getTransactionReceipt(hash);
                    if (receipt != null) {
                        if (blockNumber - receipt.blockNumber + 1 >= confirms) {
                            resolve(receipt);
                            //this.off("block", listener);
                            if (timer) {
                                clearTimeout(timer);
                                timer = null;
                            }
                            return;
                        }
                    }
                } catch (error) {
                    console.log("EEE", error);
                }
                this.once("block", listener);
            };
            if (timeout != null) {
                timer = setTimeout(()=>{
                    if (timer == null) {
                        return;
                    }
                    timer = null;
                    this.off("block", listener);
                    reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeError"])("timeout", "TIMEOUT", {
                        reason: "timeout"
                    }));
                }, timeout);
            }
            listener(await this.getBlockNumber());
        });
    }
    async waitForBlock(blockTag) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "not implemented yet", "NOT_IMPLEMENTED", {
            operation: "waitForBlock"
        });
    }
    /**
     *  Clear a timer created using the [[_setTimeout]] method.
     */ _clearTimeout(timerId) {
        const timer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _timers).get(timerId);
        if (!timer) {
            return;
        }
        if (timer.timer) {
            clearTimeout(timer.timer);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _timers).delete(timerId);
    }
    /**
     *  Create a timer that will execute %%func%% after at least %%timeout%%
     *  (in ms). If %%timeout%% is unspecified, then %%func%% will execute
     *  in the next event loop.
     *
     *  [Pausing](AbstractProvider-paused) the provider will pause any
     *  associated timers.
     */ _setTimeout(_func, timeout) {
        if (timeout == null) {
            timeout = 0;
        }
        const timerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_update$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _nextTimer).value++;
        const func = ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _timers).delete(timerId);
            _func();
        };
        if (this.paused) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _timers).set(timerId, {
                timer: null,
                func,
                time: timeout
            });
        } else {
            const timer = setTimeout(func, timeout);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _timers).set(timerId, {
                timer,
                func,
                time: getTime()
            });
        }
        return timerId;
    }
    /**
     *  Perform %%func%% on each subscriber.
     */ _forEachSubscriber(func) {
        for (const sub of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _subs).values()){
            func(sub.subscriber);
        }
    }
    /**
     *  Sub-classes may override this to customize subscription
     *  implementations.
     */ _getSubscriber(sub) {
        switch(sub.type){
            case "debug":
            case "error":
            case "network":
                return new UnmanagedSubscriber(sub.type);
            case "block":
                {
                    const subscriber = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$subscriber$2d$polling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PollingBlockSubscriber"](this);
                    subscriber.pollingInterval = this.pollingInterval;
                    return subscriber;
                }
            case "safe":
            case "finalized":
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$subscriber$2d$polling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PollingBlockTagSubscriber"](this, sub.type);
            case "event":
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$subscriber$2d$polling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PollingEventSubscriber"](this, sub.filter);
            case "transaction":
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$subscriber$2d$polling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PollingTransactionSubscriber"](this, sub.hash);
            case "orphan":
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$subscriber$2d$polling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PollingOrphanSubscriber"](this, sub.filter);
        }
        throw new Error("unsupported event: ".concat(sub.type));
    }
    /**
     *  If a [[Subscriber]] fails and needs to replace itself, this
     *  method may be used.
     *
     *  For example, this is used for providers when using the
     *  ``eth_getFilterChanges`` method, which can return null if state
     *  filters are not supported by the backend, allowing the Subscriber
     *  to swap in a [[PollingEventSubscriber]].
     */ _recoverSubscriber(oldSub, newSub) {
        for (const sub of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _subs).values()){
            if (sub.subscriber === oldSub) {
                if (sub.started) {
                    sub.subscriber.stop();
                }
                sub.subscriber = newSub;
                if (sub.started) {
                    newSub.start();
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pausedState) != null) {
                    newSub.pause((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pausedState));
                }
                break;
            }
        }
    }
    async on(event, listener) {
        const sub = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getSub, getSub).call(this, event);
        sub.listeners.push({
            listener,
            once: false
        });
        if (!sub.started) {
            sub.subscriber.start();
            sub.started = true;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pausedState) != null) {
                sub.subscriber.pause((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pausedState));
            }
        }
        return this;
    }
    async once(event, listener) {
        const sub = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getSub, getSub).call(this, event);
        sub.listeners.push({
            listener,
            once: true
        });
        if (!sub.started) {
            sub.subscriber.start();
            sub.started = true;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pausedState) != null) {
                sub.subscriber.pause((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pausedState));
            }
        }
        return this;
    }
    async emit(event) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        const sub = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hasSub, hasSub).call(this, event, args);
        // If there is not subscription or if a recent emit removed
        // the last of them (which also deleted the sub) do nothing
        if (!sub || sub.listeners.length === 0) {
            return false;
        }
        ;
        const count = sub.listeners.length;
        sub.listeners = sub.listeners.filter((param)=>{
            let { listener, once } = param;
            const payload = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventPayload"](this, once ? null : listener, event);
            try {
                listener.call(this, ...args, payload);
            } catch (error) {}
            return !once;
        });
        if (sub.listeners.length === 0) {
            if (sub.started) {
                sub.subscriber.stop();
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _subs).delete(sub.tag);
        }
        return count > 0;
    }
    async listenerCount(event) {
        if (event) {
            const sub = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hasSub, hasSub).call(this, event);
            if (!sub) {
                return 0;
            }
            return sub.listeners.length;
        }
        let total = 0;
        for (const { listeners } of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _subs).values()){
            total += listeners.length;
        }
        return total;
    }
    async listeners(event) {
        if (event) {
            const sub = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hasSub, hasSub).call(this, event);
            if (!sub) {
                return [];
            }
            return sub.listeners.map((param)=>{
                let { listener } = param;
                return listener;
            });
        }
        let result = [];
        for (const { listeners } of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _subs).values()){
            result = result.concat(listeners.map((param)=>{
                let { listener } = param;
                return listener;
            }));
        }
        return result;
    }
    async off(event, listener) {
        const sub = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hasSub, hasSub).call(this, event);
        if (!sub) {
            return this;
        }
        if (listener) {
            const index = sub.listeners.map((param)=>{
                let { listener } = param;
                return listener;
            }).indexOf(listener);
            if (index >= 0) {
                sub.listeners.splice(index, 1);
            }
        }
        if (!listener || sub.listeners.length === 0) {
            if (sub.started) {
                sub.subscriber.stop();
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _subs).delete(sub.tag);
        }
        return this;
    }
    async removeAllListeners(event) {
        if (event) {
            const { tag, started, subscriber } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getSub, getSub).call(this, event);
            if (started) {
                subscriber.stop();
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _subs).delete(tag);
        } else {
            for (const [tag, { started, subscriber }] of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _subs)){
                if (started) {
                    subscriber.stop();
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _subs).delete(tag);
            }
        }
        return this;
    }
    // Alias for "on"
    async addListener(event, listener) {
        return await this.on(event, listener);
    }
    // Alias for "off"
    async removeListener(event, listener) {
        return this.off(event, listener);
    }
    /**
     *  If this provider has been destroyed using the [[destroy]] method.
     *
     *  Once destroyed, all resources are reclaimed, internal event loops
     *  and timers are cleaned up and no further requests may be sent to
     *  the provider.
     */ get destroyed() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _destroyed);
    }
    /**
     *  Sub-classes may use this to shutdown any sockets or release their
     *  resources and reject any pending requests.
     *
     *  Sub-classes **must** call ``super.destroy()``.
     */ destroy() {
        // Stop all listeners
        this.removeAllListeners();
        // Shut down all tiemrs
        for (const timerId of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _timers).keys()){
            this._clearTimeout(timerId);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _destroyed, true);
    }
    /**
     *  Whether the provider is currently paused.
     *
     *  A paused provider will not emit any events, and generally should
     *  not make any requests to the network, but that is up to sub-classes
     *  to manage.
     *
     *  Setting ``paused = true`` is identical to calling ``.pause(false)``,
     *  which will buffer any events that occur while paused until the
     *  provider is unpaused.
     */ get paused() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pausedState) != null;
    }
    set paused(pause) {
        if (!!pause === this.paused) {
            return;
        }
        if (this.paused) {
            this.resume();
        } else {
            this.pause(false);
        }
    }
    /**
     *  Pause the provider. If %%dropWhilePaused%%, any events that occur
     *  while paused are dropped, otherwise all events will be emitted once
     *  the provider is unpaused.
     */ pause(dropWhilePaused) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _lastBlockNumber, -1);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pausedState) != null) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pausedState) == !!dropWhilePaused) {
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "cannot change pause type; resume first", "UNSUPPORTED_OPERATION", {
                operation: "pause"
            });
        }
        this._forEachSubscriber((s)=>s.pause(dropWhilePaused));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pausedState, !!dropWhilePaused);
        for (const timer of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _timers).values()){
            // Clear the timer
            if (timer.timer) {
                clearTimeout(timer.timer);
            }
            // Remaining time needed for when we become unpaused
            timer.time = getTime() - timer.time;
        }
    }
    /**
     *  Resume the provider.
     */ resume() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pausedState) == null) {
            return;
        }
        this._forEachSubscriber((s)=>s.resume());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pausedState, null);
        for (const timer of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _timers).values()){
            // Remaining time when we were paused
            let timeout = timer.time;
            if (timeout < 0) {
                timeout = 0;
            }
            // Start time (in cause paused, so we con compute remaininf time)
            timer.time = getTime();
            // Start the timer
            setTimeout(timer.func, timeout);
        }
    }
    /**
     *  Create a new **AbstractProvider** connected to %%network%%, or
     *  use the various network detection capabilities to discover the
     *  [[Network]] if necessary.
     */ constructor(_network, options){
        // Shares multiple identical requests made during the same 250ms
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _perform);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _call);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _checkNetwork);
        // Account
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getAccountValue);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getBlock);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hasSub);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _getSub);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _subs, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _plugins, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pausedState, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _destroyed, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _networkPromise, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _anyNetwork, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _performCache, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _lastBlockNumber, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _nextTimer, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _timers, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _disableCcipRead, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _options, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _options, Object.assign({}, defaultOptions, options || {}));
        if (_network === "any") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _anyNetwork, true);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _networkPromise, null);
        } else if (_network) {
            const network = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Network"].from(_network);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _anyNetwork, false);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _networkPromise, Promise.resolve(network));
            setTimeout(()=>{
                this.emit("network", network, null);
            }, 0);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _anyNetwork, false);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _networkPromise, null);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _lastBlockNumber, -1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _performCache, new Map());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _subs, new Map());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _plugins, new Map());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pausedState, null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _destroyed, false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _nextTimer, 1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _timers, new Map());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _disableCcipRead, false);
    }
}
async function perform(req) {
    const timeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _options).cacheTimeout;
    // Caching disabled
    if (timeout < 0) {
        return await this._perform(req);
    }
    // Create a tag
    const tag = getTag(req.method, req);
    let perform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _performCache).get(tag);
    if (!perform) {
        perform = this._perform(req);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _performCache).set(tag, perform);
        setTimeout(()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _performCache).get(tag) === perform) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _performCache).delete(tag);
            }
        }, timeout);
    }
    return await perform;
}
async function call(tx, blockTag, attempt) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(attempt < MAX_CCIP_REDIRECTS, "CCIP read exceeded maximum redirections", "OFFCHAIN_FAULT", {
        reason: "TOO_MANY_REDIRECTS",
        transaction: Object.assign({}, tx, {
            blockTag,
            enableCcipRead: true
        })
    });
    // This came in as a PerformActionTransaction, so to/from are safe; we can cast
    const transaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyRequest"])(tx);
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(await this._perform({
            method: "call",
            transaction,
            blockTag
        }));
    } catch (error) {
        // CCIP Read OffchainLookup
        if (!this.disableCcipRead && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCallException"])(error) && error.data && attempt >= 0 && blockTag === "latest" && transaction.to != null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataSlice"])(error.data, 0, 4) === "0x556f1830") {
            const data = error.data;
            const txSender = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAddress"])(transaction.to, this);
            // Parse the CCIP Read Arguments
            let ccipArgs;
            try {
                ccipArgs = parseOffchainLookup((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataSlice"])(error.data, 4));
            } catch (error) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, error.message, "OFFCHAIN_FAULT", {
                    reason: "BAD_DATA",
                    transaction,
                    info: {
                        data
                    }
                });
            }
            // Check the sender of the OffchainLookup matches the transaction
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(ccipArgs.sender.toLowerCase() === txSender.toLowerCase(), "CCIP Read sender mismatch", "CALL_EXCEPTION", {
                action: "call",
                data,
                reason: "OffchainLookup",
                transaction: transaction,
                invocation: null,
                revert: {
                    signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                    name: "OffchainLookup",
                    args: ccipArgs.errorArgs
                }
            });
            const ccipResult = await this.ccipReadFetch(transaction, ccipArgs.calldata, ccipArgs.urls);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(ccipResult != null, "CCIP Read failed to fetch data", "OFFCHAIN_FAULT", {
                reason: "FETCH_FAILED",
                transaction,
                info: {
                    data: error.data,
                    errorArgs: ccipArgs.errorArgs
                }
            });
            const tx = {
                to: txSender,
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
                    ccipArgs.selector,
                    encodeBytes([
                        ccipResult,
                        ccipArgs.extraData
                    ])
                ])
            };
            this.emit("debug", {
                action: "sendCcipReadCall",
                transaction: tx
            });
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _call, call).call(this, tx, blockTag, attempt + 1);
                this.emit("debug", {
                    action: "receiveCcipReadCallResult",
                    transaction: Object.assign({}, tx),
                    result
                });
                return result;
            } catch (error) {
                this.emit("debug", {
                    action: "receiveCcipReadCallError",
                    transaction: Object.assign({}, tx),
                    error
                });
                throw error;
            }
        }
        throw error;
    }
}
async function checkNetwork(promise) {
    const { value } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveProperties"])({
        network: this.getNetwork(),
        value: promise
    });
    return value;
}
async function getAccountValue(request, _address, _blockTag) {
    let address = this._getAddress(_address);
    let blockTag = this._getBlockTag(_blockTag);
    if (typeof address !== "string" || typeof blockTag !== "string") {
        [address, blockTag] = await Promise.all([
            address,
            blockTag
        ]);
    }
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _checkNetwork, checkNetwork).call(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _perform, perform).call(this, Object.assign(request, {
        address,
        blockTag
    })));
}
async function getBlock(block, includeTransactions) {
    // @TODO: Add CustomBlockPlugin check
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"])(block, 32)) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _perform, perform).call(this, {
            method: "getBlock",
            blockHash: block,
            includeTransactions
        });
    }
    let blockTag = this._getBlockTag(block);
    if (typeof blockTag !== "string") {
        blockTag = await blockTag;
    }
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _perform, perform).call(this, {
        method: "getBlock",
        blockTag,
        includeTransactions
    });
}
async function hasSub(event, emitArgs) {
    let sub = await getSubscription(event, this);
    // This is a log that is removing an existing log; we actually want
    // to emit an orphan event for the removed log
    if (sub.type === "event" && emitArgs && emitArgs.length > 0 && emitArgs[0].removed === true) {
        sub = await getSubscription({
            orphan: "drop-log",
            log: emitArgs[0]
        }, this);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _subs).get(sub.tag) || null;
}
async function getSub(event) {
    const subscription = await getSubscription(event, this);
    // Prevent tampering with our tag in any subclass' _getSubscriber
    const tag = subscription.tag;
    let sub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _subs).get(tag);
    if (!sub) {
        const subscriber = this._getSubscriber(subscription);
        const addressableMap = new WeakMap();
        const nameMap = new Map();
        sub = {
            subscriber,
            tag,
            addressableMap,
            nameMap,
            started: false,
            listeners: []
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _subs).set(tag, sub);
    }
    return sub;
}
function _parseString(result, start) {
    try {
        const bytes = _parseBytes(result, start);
        if (bytes) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$utf8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUtf8String"])(bytes);
        }
    } catch (error) {}
    return null;
}
function _parseBytes(result, start) {
    if (result === "0x") {
        return null;
    }
    try {
        const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataSlice"])(result, start, start + 32));
        const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataSlice"])(result, offset, offset + 32));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataSlice"])(result, offset + 32, offset + 32 + length);
    } catch (error) {}
    return null;
}
function numPad(value) {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBeArray"])(value);
    if (result.length > 32) {
        throw new Error("internal; should not happen");
    }
    const padded = new Uint8Array(32);
    padded.set(result, 32 - result.length);
    return padded;
}
function bytesPad(value) {
    if (value.length % 32 === 0) {
        return value;
    }
    const result = new Uint8Array(Math.ceil(value.length / 32) * 32);
    result.set(value);
    return result;
}
const empty = new Uint8Array([]);
// ABI Encodes a series of (bytes, bytes, ...)
function encodeBytes(datas) {
    const result = [];
    let byteCount = 0;
    // Add place-holders for pointers as we add items
    for(let i = 0; i < datas.length; i++){
        result.push(empty);
        byteCount += 32;
    }
    for(let i = 0; i < datas.length; i++){
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytes"])(datas[i]);
        // Update the bytes offset
        result[i] = numPad(byteCount);
        // The length and padded value of data
        result.push(numPad(data.length));
        result.push(bytesPad(data));
        byteCount += 32 + Math.ceil(data.length / 32) * 32;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])(result);
}
const zeros = "0x0000000000000000000000000000000000000000000000000000000000000000";
function parseOffchainLookup(data) {
    const result = {
        sender: "",
        urls: [],
        calldata: "",
        selector: "",
        extraData: "",
        errorArgs: []
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataLength"])(data) >= 5 * 32, "insufficient OffchainLookup data", "OFFCHAIN_FAULT", {
        reason: "insufficient OffchainLookup data"
    });
    const sender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataSlice"])(data, 0, 32);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataSlice"])(sender, 0, 12) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataSlice"])(zeros, 0, 12), "corrupt OffchainLookup sender", "OFFCHAIN_FAULT", {
        reason: "corrupt OffchainLookup sender"
    });
    result.sender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataSlice"])(sender, 12);
    // Read the URLs from the response
    try {
        const urls = [];
        const urlsOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataSlice"])(data, 32, 64));
        const urlsLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataSlice"])(data, urlsOffset, urlsOffset + 32));
        const urlsData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataSlice"])(data, urlsOffset + 32);
        for(let u = 0; u < urlsLength; u++){
            const url = _parseString(urlsData, u * 32);
            if (url == null) {
                throw new Error("abort");
            }
            urls.push(url);
        }
        result.urls = urls;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "corrupt OffchainLookup urls", "OFFCHAIN_FAULT", {
            reason: "corrupt OffchainLookup urls"
        });
    }
    // Get the CCIP calldata to forward
    try {
        const calldata = _parseBytes(data, 64);
        if (calldata == null) {
            throw new Error("abort");
        }
        result.calldata = calldata;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "corrupt OffchainLookup calldata", "OFFCHAIN_FAULT", {
            reason: "corrupt OffchainLookup calldata"
        });
    }
    // Get the callbackSelector (bytes4)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataSlice"])(data, 100, 128) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataSlice"])(zeros, 0, 28), "corrupt OffchainLookup callbaackSelector", "OFFCHAIN_FAULT", {
        reason: "corrupt OffchainLookup callbaackSelector"
    });
    result.selector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataSlice"])(data, 96, 100);
    // Get the extra data to send back to the contract as context
    try {
        const extraData = _parseBytes(data, 128);
        if (extraData == null) {
            throw new Error("abort");
        }
        result.extraData = extraData;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "corrupt OffchainLookup extraData", "OFFCHAIN_FAULT", {
            reason: "corrupt OffchainLookup extraData"
        });
    }
    result.errorArgs = "sender,urls,calldata,selector,extraData".split(/,/).map((k)=>result[k]);
    return result;
} //# sourceMappingURL=abstract-provider.js.map
}),
"[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/providers/abstract-signer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 *  Generally the [[Wallet]] and [[JsonRpcSigner]] and their sub-classes
 *  are sufficient for most developers, but this is provided to
 *  fascilitate more complex Signers.
 *
 *  @_section: api/providers/abstract-signer: Subclassing Signer [abstract-signer]
 */ __turbopack_context__.s({
    "AbstractSigner": ()=>AbstractSigner,
    "VoidSigner": ()=>VoidSigner
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_method_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_method_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/address/checks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/transaction/transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/maths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/providers/provider.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function checkProvider(signer, operation) {
    if (signer.provider) {
        return signer.provider;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "missing provider", "UNSUPPORTED_OPERATION", {
        operation
    });
}
async function populate(signer, tx) {
    let pop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyRequest"])(tx);
    if (pop.to != null) {
        pop.to = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAddress"])(pop.to, signer);
    }
    if (pop.from != null) {
        const from = pop.from;
        pop.from = Promise.all([
            signer.getAddress(),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAddress"])(from, signer)
        ]).then((param)=>{
            let [address, from] = param;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(address.toLowerCase() === from.toLowerCase(), "transaction from mismatch", "tx.from", from);
            return address;
        });
    } else {
        pop.from = signer.getAddress();
    }
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveProperties"])(pop);
}
class AbstractSigner {
    async getNonce(blockTag) {
        return checkProvider(this, "getTransactionCount").getTransactionCount(await this.getAddress(), blockTag);
    }
    async populateCall(tx) {
        const pop = await populate(this, tx);
        return pop;
    }
    async populateTransaction(tx) {
        const provider = checkProvider(this, "populateTransaction");
        const pop = await populate(this, tx);
        if (pop.nonce == null) {
            pop.nonce = await this.getNonce("pending");
        }
        if (pop.gasLimit == null) {
            pop.gasLimit = await this.estimateGas(pop);
        }
        // Populate the chain ID
        const network = await this.provider.getNetwork();
        if (pop.chainId != null) {
            const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(pop.chainId);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(chainId === network.chainId, "transaction chainId mismatch", "tx.chainId", tx.chainId);
        } else {
            pop.chainId = network.chainId;
        }
        // Do not allow mixing pre-eip-1559 and eip-1559 properties
        const hasEip1559 = pop.maxFeePerGas != null || pop.maxPriorityFeePerGas != null;
        if (pop.gasPrice != null && (pop.type === 2 || hasEip1559)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "eip-1559 transaction do not support gasPrice", "tx", tx);
        } else if ((pop.type === 0 || pop.type === 1) && hasEip1559) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(false, "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "tx", tx);
        }
        if ((pop.type === 2 || pop.type == null) && pop.maxFeePerGas != null && pop.maxPriorityFeePerGas != null) {
            // Fully-formed EIP-1559 transaction (skip getFeeData)
            pop.type = 2;
        } else if (pop.type === 0 || pop.type === 1) {
            // Explicit Legacy or EIP-2930 transaction
            // We need to get fee data to determine things
            const feeData = await provider.getFeeData();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(feeData.gasPrice != null, "network does not support gasPrice", "UNSUPPORTED_OPERATION", {
                operation: "getGasPrice"
            });
            // Populate missing gasPrice
            if (pop.gasPrice == null) {
                pop.gasPrice = feeData.gasPrice;
            }
        } else {
            // We need to get fee data to determine things
            const feeData = await provider.getFeeData();
            if (pop.type == null) {
                // We need to auto-detect the intended type of this transaction...
                if (feeData.maxFeePerGas != null && feeData.maxPriorityFeePerGas != null) {
                    // The network supports EIP-1559!
                    // Upgrade transaction from null to eip-1559
                    if (pop.authorizationList && pop.authorizationList.length) {
                        pop.type = 4;
                    } else {
                        pop.type = 2;
                    }
                    if (pop.gasPrice != null) {
                        // Using legacy gasPrice property on an eip-1559 network,
                        // so use gasPrice as both fee properties
                        const gasPrice = pop.gasPrice;
                        delete pop.gasPrice;
                        pop.maxFeePerGas = gasPrice;
                        pop.maxPriorityFeePerGas = gasPrice;
                    } else {
                        // Populate missing fee data
                        if (pop.maxFeePerGas == null) {
                            pop.maxFeePerGas = feeData.maxFeePerGas;
                        }
                        if (pop.maxPriorityFeePerGas == null) {
                            pop.maxPriorityFeePerGas = feeData.maxPriorityFeePerGas;
                        }
                    }
                } else if (feeData.gasPrice != null) {
                    // Network doesn't support EIP-1559...
                    // ...but they are trying to use EIP-1559 properties
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(!hasEip1559, "network does not support EIP-1559", "UNSUPPORTED_OPERATION", {
                        operation: "populateTransaction"
                    });
                    // Populate missing fee data
                    if (pop.gasPrice == null) {
                        pop.gasPrice = feeData.gasPrice;
                    }
                    // Explicitly set untyped transaction to legacy
                    // @TODO: Maybe this shold allow type 1?
                    pop.type = 0;
                } else {
                    // getFeeData has failed us.
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "failed to get consistent fee data", "UNSUPPORTED_OPERATION", {
                        operation: "signer.getFeeData"
                    });
                }
            } else if (pop.type === 2 || pop.type === 3 || pop.type === 4) {
                // Explicitly using EIP-1559 or EIP-4844
                // Populate missing fee data
                if (pop.maxFeePerGas == null) {
                    pop.maxFeePerGas = feeData.maxFeePerGas;
                }
                if (pop.maxPriorityFeePerGas == null) {
                    pop.maxPriorityFeePerGas = feeData.maxPriorityFeePerGas;
                }
            }
        }
        //@TOOD: Don't await all over the place; save them up for
        // the end for better batching
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveProperties"])(pop);
    }
    async populateAuthorization(_auth) {
        const auth = Object.assign({}, _auth);
        // Add a chain ID if not explicitly set to 0
        if (auth.chainId == null) {
            auth.chainId = (await checkProvider(this, "getNetwork").getNetwork()).chainId;
        }
        // @TODO: Take chain ID into account when populating noce?
        if (auth.nonce == null) {
            auth.nonce = await this.getNonce();
        }
        return auth;
    }
    async estimateGas(tx) {
        return checkProvider(this, "estimateGas").estimateGas(await this.populateCall(tx));
    }
    async call(tx) {
        return checkProvider(this, "call").call(await this.populateCall(tx));
    }
    async resolveName(name) {
        const provider = checkProvider(this, "resolveName");
        return await provider.resolveName(name);
    }
    async sendTransaction(tx) {
        const provider = checkProvider(this, "sendTransaction");
        const pop = await this.populateTransaction(tx);
        delete pop.from;
        const txObj = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"].from(pop);
        return await provider.broadcastTransaction(await this.signTransaction(txObj));
    }
    // @TODO: in v7 move this to be abstract
    authorize(authorization) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "authorization not implemented for this signer", "UNSUPPORTED_OPERATION", {
            operation: "authorize"
        });
    }
    /**
     *  Creates a new Signer connected to %%provider%%.
     */ constructor(provider){
        /**
     *  The provider this signer is connected to.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "provider", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            provider: provider || null
        });
    }
}
var _throwUnsupported = /*#__PURE__*/ new WeakSet();
class VoidSigner extends AbstractSigner {
    async getAddress() {
        return this.address;
    }
    connect(provider) {
        return new VoidSigner(this.address, provider);
    }
    async signTransaction(tx) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _throwUnsupported, throwUnsupported).call(this, "transactions", "signTransaction");
    }
    async signMessage(message) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _throwUnsupported, throwUnsupported).call(this, "messages", "signMessage");
    }
    async signTypedData(domain, types, value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _throwUnsupported, throwUnsupported).call(this, "typed-data", "signTypedData");
    }
    /**
     *  Creates a new **VoidSigner** with %%address%% attached to
     *  %%provider%%.
     */ constructor(address, provider){
        super(provider), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _throwUnsupported), /**
     *  The signer address.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "address", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            address
        });
    }
} //# sourceMappingURL=abstract-signer.js.map
function throwUnsupported(suffix, operation) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "VoidSigner cannot sign ".concat(suffix), "UNSUPPORTED_OPERATION", {
        operation
    });
}
}),
"[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/providers/subscriber-filterid.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "FilterIdEventSubscriber": ()=>FilterIdEventSubscriber,
    "FilterIdPendingSubscriber": ()=>FilterIdPendingSubscriber,
    "FilterIdSubscriber": ()=>FilterIdSubscriber
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_method_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_method_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$subscriber$2d$polling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/providers/subscriber-polling.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function copy(obj) {
    return JSON.parse(JSON.stringify(obj));
}
var _provider = /*#__PURE__*/ new WeakMap(), _filterIdPromise = /*#__PURE__*/ new WeakMap(), _poller = /*#__PURE__*/ new WeakMap(), _running = /*#__PURE__*/ new WeakMap(), _network = /*#__PURE__*/ new WeakMap(), _hault = /*#__PURE__*/ new WeakMap(), _poll = /*#__PURE__*/ new WeakSet(), _teardown = /*#__PURE__*/ new WeakSet();
class FilterIdSubscriber {
    /**
     *  Sub-classes **must** override this to begin the subscription.
     */ _subscribe(provider) {
        throw new Error("subclasses must override this");
    }
    /**
     *  Sub-classes **must** override this handle the events.
     */ _emitResults(provider, result) {
        throw new Error("subclasses must override this");
    }
    /**
     *  Sub-classes **must** override this handle recovery on errors.
     */ _recover(provider) {
        throw new Error("subclasses must override this");
    }
    start() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _running)) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _running, true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poll, poll).call(this, -2);
    }
    stop() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _running)) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _running, false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hault, true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _teardown, teardown).call(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider).off("block", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poller));
    }
    pause(dropWhilePaused) {
        if (dropWhilePaused) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _teardown, teardown).call(this);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider).off("block", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poller));
    }
    resume() {
        this.start();
    }
    /**
     *  Creates a new **FilterIdSubscriber** which will used [[_subscribe]]
     *  and [[_emitResults]] to setup the subscription and provide the event
     *  to the %%provider%%.
     */ constructor(provider){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poll);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _teardown);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _filterIdPromise, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poller, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _running, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _network, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hault, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider, provider);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _filterIdPromise, null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poller, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poll, poll).bind(this));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _running, false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _network, null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hault, false);
    }
}
async function poll(blockNumber) {
    try {
        // Subscribe if necessary
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _filterIdPromise) == null) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _filterIdPromise, this._subscribe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider)));
        }
        // Get the Filter ID
        let filterId = null;
        try {
            filterId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _filterIdPromise);
        } catch (error) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isError"])(error, "UNSUPPORTED_OPERATION") || error.operation !== "eth_newFilter") {
                throw error;
            }
        }
        // The backend does not support Filter ID; downgrade to
        // polling
        if (filterId == null) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _filterIdPromise, null);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider)._recoverSubscriber(this, this._recover((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider)));
            return;
        }
        const network = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider).getNetwork();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _network)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _network, network);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _network).chainId !== network.chainId) {
            throw new Error("chaid changed");
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _hault)) {
            return;
        }
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider).send("eth_getFilterChanges", [
            filterId
        ]);
        await this._emitResults((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider), result);
    } catch (error) {
        console.log("@TODO", error);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider).once("block", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _poller));
}
function teardown() {
    const filterIdPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _filterIdPromise);
    if (filterIdPromise) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _filterIdPromise, null);
        filterIdPromise.then((filterId)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider).destroyed) {
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider).send("eth_uninstallFilter", [
                filterId
            ]);
        });
    }
}
var _event = /*#__PURE__*/ new WeakMap();
class FilterIdEventSubscriber extends FilterIdSubscriber {
    _recover(provider) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$subscriber$2d$polling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PollingEventSubscriber"](provider, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _event));
    }
    async _subscribe(provider) {
        const filterId = await provider.send("eth_newFilter", [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _event)
        ]);
        return filterId;
    }
    async _emitResults(provider, results) {
        for (const result of results){
            provider.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _event), provider._wrapLog(result, provider._network));
        }
    }
    /**
     *  Creates a new **FilterIdEventSubscriber** attached to %%provider%%
     *  listening for %%filter%%.
     */ constructor(provider, filter){
        super(provider), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _event, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _event, copy(filter));
    }
}
class FilterIdPendingSubscriber extends FilterIdSubscriber {
    async _subscribe(provider) {
        return await provider.send("eth_newPendingTransactionFilter", []);
    }
    async _emitResults(provider, results) {
        for (const result of results){
            provider.emit("pending", result);
        }
    }
} //# sourceMappingURL=subscriber-filterid.js.map
}),
"[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/providers/provider-jsonrpc.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 *  One of the most common ways to interact with the blockchain is
 *  by a node running a JSON-RPC interface which can be connected to,
 *  based on the transport, using:
 *
 *  - HTTP or HTTPS - [[JsonRpcProvider]]
 *  - WebSocket - [[WebSocketProvider]]
 *  - IPC - [[IpcSocketProvider]]
 *
 * @_section: api/providers/jsonrpc:JSON-RPC Provider  [about-jsonrpcProvider]
 */ // @TODO:
// - Add the batching API
// https://playground.open-rpc.org/?schemaUrl=https://raw.githubusercontent.com/ethereum/eth1.0-apis/assembled-spec/openrpc.json&uiSchema%5BappBar%5D%5Bui:splitView%5D=true&uiSchema%5BappBar%5D%5Bui:input%5D=false&uiSchema%5BappBar%5D%5Bui:examplesDropdown%5D=false
__turbopack_context__.s({
    "JsonRpcApiPollingProvider": ()=>JsonRpcApiPollingProvider,
    "JsonRpcApiProvider": ()=>JsonRpcApiProvider,
    "JsonRpcProvider": ()=>JsonRpcProvider,
    "JsonRpcSigner": ()=>JsonRpcSigner
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_update$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_update.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_method_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_method_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$abi$2d$coder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/abi/abi-coder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/address/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/address/checks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$typed$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/hash/typed-data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$accesslist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/transaction/accesslist.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$authorization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/transaction/authorization.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/maths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$utf8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/utf8.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$abstract$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/providers/abstract-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$abstract$2d$signer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/providers/abstract-signer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/providers/network.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$subscriber$2d$filterid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/providers/subscriber-filterid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$subscriber$2d$polling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/providers/subscriber-polling.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const Primitive = "bigint,boolean,function,number,string,symbol".split(/,/g);
//const Methods = "getAddress,then".split(/,/g);
function deepCopy(value) {
    if (value == null || Primitive.indexOf(typeof value) >= 0) {
        return value;
    }
    // Keep any Addressable
    if (typeof value.getAddress === "function") {
        return value;
    }
    if (Array.isArray(value)) {
        return value.map(deepCopy);
    }
    if (typeof value === "object") {
        return Object.keys(value).reduce((accum, key)=>{
            accum[key] = value[key];
            return accum;
        }, {});
    }
    throw new Error("should not happen: ".concat(value, " (").concat(typeof value, ")"));
}
function stall(duration) {
    return new Promise((resolve)=>{
        setTimeout(resolve, duration);
    });
}
function getLowerCase(value) {
    if (value) {
        return value.toLowerCase();
    }
    return value;
}
function isPollable(value) {
    return value && typeof value.pollingInterval === "number";
}
const defaultOptions = {
    polling: false,
    staticNetwork: null,
    batchStallTime: 10,
    batchMaxSize: 1 << 20,
    batchMaxCount: 100,
    cacheTimeout: 250,
    pollingInterval: 4000
};
class JsonRpcSigner extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$abstract$2d$signer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractSigner"] {
    connect(provider) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false, "cannot reconnect JsonRpcSigner", "UNSUPPORTED_OPERATION", {
            operation: "signer.connect"
        });
    }
    async getAddress() {
        return this.address;
    }
    // JSON-RPC will automatially fill in nonce, etc. so we just check from
    async populateTransaction(tx) {
        return await this.populateCall(tx);
    }
    // Returns just the hash of the transaction after sent, which is what
    // the bare JSON-RPC API does;
    async sendUncheckedTransaction(_tx) {
        const tx = deepCopy(_tx);
        const promises = [];
        // Make sure the from matches the sender
        if (tx.from) {
            const _from = tx.from;
            promises.push((async ()=>{
                const from = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAddress"])(_from, this.provider);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(from != null && from.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", _tx);
                tx.from = from;
            })());
        } else {
            tx.from = this.address;
        }
        // The JSON-RPC for eth_sendTransaction uses 90000 gas; if the user
        // wishes to use this, it is easy to specify explicitly, otherwise
        // we look it up for them.
        if (tx.gasLimit == null) {
            promises.push((async ()=>{
                tx.gasLimit = await this.provider.estimateGas({
                    ...tx,
                    from: this.address
                });
            })());
        }
        // The address may be an ENS name or Addressable
        if (tx.to != null) {
            const _to = tx.to;
            promises.push((async ()=>{
                tx.to = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAddress"])(_to, this.provider);
            })());
        }
        // Wait until all of our properties are filled in
        if (promises.length) {
            await Promise.all(promises);
        }
        const hexTx = this.provider.getRpcTransaction(tx);
        return this.provider.send("eth_sendTransaction", [
            hexTx
        ]);
    }
    async sendTransaction(tx) {
        // This cannot be mined any earlier than any recent block
        const blockNumber = await this.provider.getBlockNumber();
        // Send the transaction
        const hash = await this.sendUncheckedTransaction(tx);
        // Unfortunately, JSON-RPC only provides and opaque transaction hash
        // for a response, and we need the actual transaction, so we poll
        // for it; it should show up very quickly
        return await new Promise((resolve, reject)=>{
            const timeouts = [
                1000,
                100
            ];
            let invalids = 0;
            const checkTx = async ()=>{
                try {
                    // Try getting the transaction
                    const tx = await this.provider.getTransaction(hash);
                    if (tx != null) {
                        resolve(tx.replaceableTransaction(blockNumber));
                        return;
                    }
                } catch (error) {
                    // If we were cancelled: stop polling.
                    // If the data is bad: the node returns bad transactions
                    // If the network changed: calling again will also fail
                    // If unsupported: likely destroyed
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isError"])(error, "CANCELLED") || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isError"])(error, "BAD_DATA") || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isError"])(error, "NETWORK_ERROR") || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isError"])(error, "UNSUPPORTED_OPERATION")) {
                        if (error.info == null) {
                            error.info = {};
                        }
                        error.info.sendTransactionHash = hash;
                        reject(error);
                        return;
                    }
                    // Stop-gap for misbehaving backends; see #4513
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isError"])(error, "INVALID_ARGUMENT")) {
                        invalids++;
                        if (error.info == null) {
                            error.info = {};
                        }
                        error.info.sendTransactionHash = hash;
                        if (invalids > 10) {
                            reject(error);
                            return;
                        }
                    }
                    // Notify anyone that cares; but we will try again, since
                    // it is likely an intermittent service error
                    this.provider.emit("error", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeError"])("failed to fetch transation after sending (will try again)", "UNKNOWN_ERROR", {
                        error
                    }));
                }
                // Wait another 4 seconds
                this.provider._setTimeout(()=>{
                    checkTx();
                }, timeouts.pop() || 4000);
            };
            checkTx();
        });
    }
    async signTransaction(_tx) {
        const tx = deepCopy(_tx);
        // Make sure the from matches the sender
        if (tx.from) {
            const from = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAddress"])(tx.from, this.provider);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(from != null && from.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", _tx);
            tx.from = from;
        } else {
            tx.from = this.address;
        }
        const hexTx = this.provider.getRpcTransaction(tx);
        return await this.provider.send("eth_signTransaction", [
            hexTx
        ]);
    }
    async signMessage(_message) {
        const message = typeof _message === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$utf8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUtf8Bytes"])(_message) : _message;
        return await this.provider.send("personal_sign", [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(message),
            this.address.toLowerCase()
        ]);
    }
    async signTypedData(domain, types, _value) {
        const value = deepCopy(_value);
        // Populate any ENS names (in-place)
        const populated = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$typed$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypedDataEncoder"].resolveNames(domain, types, value, async (value)=>{
            const address = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAddress"])(value);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(address != null, "TypedData does not support null address", "value", value);
            return address;
        });
        return await this.provider.send("eth_signTypedData_v4", [
            this.address.toLowerCase(),
            JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$hash$2f$typed$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypedDataEncoder"].getPayload(populated.domain, types, populated.value))
        ]);
    }
    async unlock(password) {
        return this.provider.send("personal_unlockAccount", [
            this.address.toLowerCase(),
            password,
            null
        ]);
    }
    // https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_sign
    async _legacySignMessage(_message) {
        const message = typeof _message === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$utf8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUtf8Bytes"])(_message) : _message;
        return await this.provider.send("eth_sign", [
            this.address.toLowerCase(),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(message)
        ]);
    }
    constructor(provider, address){
        super(provider), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "address", void 0);
        address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(address);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProperties"])(this, {
            address
        });
    }
}
var _options = /*#__PURE__*/ new WeakMap(), // The next ID to use for the JSON-RPC ID field
_nextId = /*#__PURE__*/ new WeakMap(), // Payloads are queued and triggered in batches using the drainTimer
_payloads = /*#__PURE__*/ new WeakMap(), _drainTimer = /*#__PURE__*/ new WeakMap(), _notReady = /*#__PURE__*/ new WeakMap(), _network = /*#__PURE__*/ new WeakMap(), _pendingDetectNetwork = /*#__PURE__*/ new WeakMap(), _scheduleDrain = /*#__PURE__*/ new WeakSet();
class JsonRpcApiProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$abstract$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractProvider"] {
    /**
     *  Returns the value associated with the option %%key%%.
     *
     *  Sub-classes can use this to inquire about configuration options.
     */ _getOption(key) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _options)[key];
    }
    /**
     *  Gets the [[Network]] this provider has committed to. On each call, the network
     *  is detected, and if it has changed, the call will reject.
     */ get _network() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _network), "network is not available yet", "NETWORK_ERROR");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _network);
    }
    /**
     *  Resolves to the non-normalized value by performing %%req%%.
     *
     *  Sub-classes may override this to modify behavior of actions,
     *  and should generally call ``super._perform`` as a fallback.
     */ async _perform(req) {
        // Legacy networks do not like the type field being passed along (which
        // is fair), so we delete type if it is 0 and a non-EIP-1559 network
        if (req.method === "call" || req.method === "estimateGas") {
            let tx = req.transaction;
            if (tx && tx.type != null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(tx.type)) {
                // If there are no EIP-1559 or newer properties, it might be pre-EIP-1559
                if (tx.maxFeePerGas == null && tx.maxPriorityFeePerGas == null) {
                    const feeData = await this.getFeeData();
                    if (feeData.maxFeePerGas == null && feeData.maxPriorityFeePerGas == null) {
                        // Network doesn't know about EIP-1559 (and hence type)
                        req = Object.assign({}, req, {
                            transaction: Object.assign({}, tx, {
                                type: undefined
                            })
                        });
                    }
                }
            }
        }
        const request = this.getRpcRequest(req);
        if (request != null) {
            return await this.send(request.method, request.args);
        }
        return super._perform(req);
    }
    /**
     *  Sub-classes may override this; it detects the *actual* network that
     *  we are **currently** connected to.
     *
     *  Keep in mind that [[send]] may only be used once [[ready]], otherwise the
     *  _send primitive must be used instead.
     */ async _detectNetwork() {
        const network = this._getOption("staticNetwork");
        if (network) {
            if (network === true) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _network)) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _network);
                }
            } else {
                return network;
            }
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pendingDetectNetwork)) {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pendingDetectNetwork);
        }
        // If we are ready, use ``send``, which enabled requests to be batched
        if (this.ready) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pendingDetectNetwork, (async ()=>{
                try {
                    const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Network"].from((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(await this.send("eth_chainId", [])));
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pendingDetectNetwork, null);
                    return result;
                } catch (error) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pendingDetectNetwork, null);
                    throw error;
                }
            })());
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pendingDetectNetwork);
        }
        // We are not ready yet; use the primitive _send
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pendingDetectNetwork, (async ()=>{
            const payload = {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_update$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _nextId).value++,
                method: "eth_chainId",
                params: [],
                jsonrpc: "2.0"
            };
            this.emit("debug", {
                action: "sendRpcPayload",
                payload
            });
            let result;
            try {
                result = (await this._send(payload))[0];
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pendingDetectNetwork, null);
            } catch (error) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pendingDetectNetwork, null);
                this.emit("debug", {
                    action: "receiveRpcError",
                    error
                });
                throw error;
            }
            this.emit("debug", {
                action: "receiveRpcResult",
                result
            });
            if ("result" in result) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Network"].from((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(result.result));
            }
            throw this.getRpcError(payload, result);
        })());
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pendingDetectNetwork);
    }
    /**
     *  Sub-classes **MUST** call this. Until [[_start]] has been called, no calls
     *  will be passed to [[_send]] from [[send]]. If it is overridden, then
     *  ``super._start()`` **MUST** be called.
     *
     *  Calling it multiple times is safe and has no effect.
     */ _start() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _notReady) == null || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _notReady).resolve == null) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _notReady).resolve();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _notReady, null);
        (async ()=>{
            // Bootstrap the network
            while((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _network) == null && !this.destroyed){
                try {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _network, await this._detectNetwork());
                } catch (error) {
                    if (this.destroyed) {
                        break;
                    }
                    console.log("JsonRpcProvider failed to detect network and cannot start up; retry in 1s (perhaps the URL is wrong or the node is not started)");
                    this.emit("error", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeError"])("failed to bootstrap network detection", "NETWORK_ERROR", {
                        event: "initial-network-discovery",
                        info: {
                            error
                        }
                    }));
                    await stall(1000);
                }
            }
            // Start dispatching requests
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _scheduleDrain, scheduleDrain).call(this);
        })();
    }
    /**
     *  Resolves once the [[_start]] has been called. This can be used in
     *  sub-classes to defer sending data until the connection has been
     *  established.
     */ async _waitUntilReady() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _notReady) == null) {
            return;
        }
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _notReady).promise;
    }
    /**
     *  Return a Subscriber that will manage the %%sub%%.
     *
     *  Sub-classes may override this to modify the behavior of
     *  subscription management.
     */ _getSubscriber(sub) {
        // Pending Filters aren't availble via polling
        if (sub.type === "pending") {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$subscriber$2d$filterid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterIdPendingSubscriber"](this);
        }
        if (sub.type === "event") {
            if (this._getOption("polling")) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$subscriber$2d$polling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PollingEventSubscriber"](this, sub.filter);
            }
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$subscriber$2d$filterid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterIdEventSubscriber"](this, sub.filter);
        }
        // Orphaned Logs are handled automatically, by the filter, since
        // logs with removed are emitted by it
        if (sub.type === "orphan" && sub.filter.orphan === "drop-log") {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$abstract$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnmanagedSubscriber"]("orphan");
        }
        return super._getSubscriber(sub);
    }
    /**
     *  Returns true only if the [[_start]] has been called.
     */ get ready() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _notReady) == null;
    }
    /**
     *  Returns %%tx%% as a normalized JSON-RPC transaction request,
     *  which has all values hexlified and any numeric values converted
     *  to Quantity values.
     */ getRpcTransaction(tx) {
        const result = {};
        // JSON-RPC now requires numeric values to be "quantity" values
        [
            "chainId",
            "gasLimit",
            "gasPrice",
            "type",
            "maxFeePerGas",
            "maxPriorityFeePerGas",
            "nonce",
            "value"
        ].forEach((key)=>{
            if (tx[key] == null) {
                return;
            }
            let dstKey = key;
            if (key === "gasLimit") {
                dstKey = "gas";
            }
            result[dstKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toQuantity"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigInt"])(tx[key], "tx.".concat(key)));
        });
        // Make sure addresses and data are lowercase
        [
            "from",
            "to",
            "data"
        ].forEach((key)=>{
            if (tx[key] == null) {
                return;
            }
            result[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexlify"])(tx[key]);
        });
        // Normalize the access list object
        if (tx.accessList) {
            result["accessList"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$accesslist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["accessListify"])(tx.accessList);
        }
        if (tx.blobVersionedHashes) {
            // @TODO: Remove this <any> case once EIP-4844 added to prepared tx
            result["blobVersionedHashes"] = tx.blobVersionedHashes.map((h)=>h.toLowerCase());
        }
        if (tx.authorizationList) {
            result["authorizationList"] = tx.authorizationList.map((_a)=>{
                const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$transaction$2f$authorization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authorizationify"])(_a);
                return {
                    address: a.address,
                    nonce: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toQuantity"])(a.nonce),
                    chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toQuantity"])(a.chainId),
                    yParity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toQuantity"])(a.signature.yParity),
                    r: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toQuantity"])(a.signature.r),
                    s: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$maths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toQuantity"])(a.signature.s)
                };
            });
        }
        // @TODO: blobs should probably also be copied over, optionally
        // accounting for the kzg property to backfill blobVersionedHashes
        // using the commitment. Or should that be left as an exercise to
        // the caller?
        return result;
    }
    /**
     *  Returns the request method and arguments required to perform
     *  %%req%%.
     */ getRpcRequest(req) {
        switch(req.method){
            case "chainId":
                return {
                    method: "eth_chainId",
                    args: []
                };
            case "getBlockNumber":
                return {
                    method: "eth_blockNumber",
                    args: []
                };
            case "getGasPrice":
                return {
                    method: "eth_gasPrice",
                    args: []
                };
            case "getPriorityFee":
                return {
                    method: "eth_maxPriorityFeePerGas",
                    args: []
                };
            case "getBalance":
                return {
                    method: "eth_getBalance",
                    args: [
                        getLowerCase(req.address),
                        req.blockTag
                    ]
                };
            case "getTransactionCount":
                return {
                    method: "eth_getTransactionCount",
                    args: [
                        getLowerCase(req.address),
                        req.blockTag
                    ]
                };
            case "getCode":
                return {
                    method: "eth_getCode",
                    args: [
                        getLowerCase(req.address),
                        req.blockTag
                    ]
                };
            case "getStorage":
                return {
                    method: "eth_getStorageAt",
                    args: [
                        getLowerCase(req.address),
                        "0x" + req.position.toString(16),
                        req.blockTag
                    ]
                };
            case "broadcastTransaction":
                return {
                    method: "eth_sendRawTransaction",
                    args: [
                        req.signedTransaction
                    ]
                };
            case "getBlock":
                if ("blockTag" in req) {
                    return {
                        method: "eth_getBlockByNumber",
                        args: [
                            req.blockTag,
                            !!req.includeTransactions
                        ]
                    };
                } else if ("blockHash" in req) {
                    return {
                        method: "eth_getBlockByHash",
                        args: [
                            req.blockHash,
                            !!req.includeTransactions
                        ]
                    };
                }
                break;
            case "getTransaction":
                return {
                    method: "eth_getTransactionByHash",
                    args: [
                        req.hash
                    ]
                };
            case "getTransactionReceipt":
                return {
                    method: "eth_getTransactionReceipt",
                    args: [
                        req.hash
                    ]
                };
            case "call":
                return {
                    method: "eth_call",
                    args: [
                        this.getRpcTransaction(req.transaction),
                        req.blockTag
                    ]
                };
            case "estimateGas":
                {
                    return {
                        method: "eth_estimateGas",
                        args: [
                            this.getRpcTransaction(req.transaction)
                        ]
                    };
                }
            case "getLogs":
                if (req.filter && req.filter.address != null) {
                    if (Array.isArray(req.filter.address)) {
                        req.filter.address = req.filter.address.map(getLowerCase);
                    } else {
                        req.filter.address = getLowerCase(req.filter.address);
                    }
                }
                return {
                    method: "eth_getLogs",
                    args: [
                        req.filter
                    ]
                };
        }
        return null;
    }
    /**
     *  Returns an ethers-style Error for the given JSON-RPC error
     *  %%payload%%, coalescing the various strings and error shapes
     *  that different nodes return, coercing them into a machine-readable
     *  standardized error.
     */ getRpcError(payload, _error) {
        const { method } = payload;
        const { error } = _error;
        if (method === "eth_estimateGas" && error.message) {
            const msg = error.message;
            if (!msg.match(/revert/i) && msg.match(/insufficient funds/i)) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeError"])("insufficient funds", "INSUFFICIENT_FUNDS", {
                    transaction: payload.params[0],
                    info: {
                        payload,
                        error
                    }
                });
            } else if (msg.match(/nonce/i) && msg.match(/too low/i)) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeError"])("nonce has already been used", "NONCE_EXPIRED", {
                    transaction: payload.params[0],
                    info: {
                        payload,
                        error
                    }
                });
            }
        }
        if (method === "eth_call" || method === "eth_estimateGas") {
            const result = spelunkData(error);
            const e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$abi$2d$coder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbiCoder"].getBuiltinCallException(method === "eth_call" ? "call" : "estimateGas", payload.params[0], result ? result.data : null);
            e.info = {
                error,
                payload
            };
            return e;
        }
        // Only estimateGas and call can return arbitrary contract-defined text, so now we
        // we can process text safely.
        const message = JSON.stringify(spelunkMessage(error));
        if (typeof error.message === "string" && error.message.match(/user denied|ethers-user-denied/i)) {
            const actionMap = {
                eth_sign: "signMessage",
                personal_sign: "signMessage",
                eth_signTypedData_v4: "signTypedData",
                eth_signTransaction: "signTransaction",
                eth_sendTransaction: "sendTransaction",
                eth_requestAccounts: "requestAccess",
                wallet_requestAccounts: "requestAccess"
            };
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeError"])("user rejected action", "ACTION_REJECTED", {
                action: actionMap[method] || "unknown",
                reason: "rejected",
                info: {
                    payload,
                    error
                }
            });
        }
        if (method === "eth_sendRawTransaction" || method === "eth_sendTransaction") {
            const transaction = payload.params[0];
            if (message.match(/insufficient funds|base fee exceeds gas limit/i)) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeError"])("insufficient funds for intrinsic transaction cost", "INSUFFICIENT_FUNDS", {
                    transaction,
                    info: {
                        error
                    }
                });
            }
            if (message.match(/nonce/i) && message.match(/too low/i)) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeError"])("nonce has already been used", "NONCE_EXPIRED", {
                    transaction,
                    info: {
                        error
                    }
                });
            }
            // "replacement transaction underpriced"
            if (message.match(/replacement transaction/i) && message.match(/underpriced/i)) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeError"])("replacement fee too low", "REPLACEMENT_UNDERPRICED", {
                    transaction,
                    info: {
                        error
                    }
                });
            }
            if (message.match(/only replay-protected/i)) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeError"])("legacy pre-eip-155 transactions not supported", "UNSUPPORTED_OPERATION", {
                    operation: method,
                    info: {
                        transaction,
                        info: {
                            error
                        }
                    }
                });
            }
        }
        let unsupported = !!message.match(/the method .* does not exist/i);
        if (!unsupported) {
            if (error && error.details && error.details.startsWith("Unauthorized method:")) {
                unsupported = true;
            }
        }
        if (unsupported) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeError"])("unsupported operation", "UNSUPPORTED_OPERATION", {
                operation: payload.method,
                info: {
                    error,
                    payload
                }
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeError"])("could not coalesce error", "UNKNOWN_ERROR", {
            error,
            payload
        });
    }
    /**
     *  Requests the %%method%% with %%params%% via the JSON-RPC protocol
     *  over the underlying channel. This can be used to call methods
     *  on the backend that do not have a high-level API within the Provider
     *  API.
     *
     *  This method queues requests according to the batch constraints
     *  in the options, assigns the request a unique ID.
     *
     *  **Do NOT override** this method in sub-classes; instead
     *  override [[_send]] or force the options values in the
     *  call to the constructor to modify this method's behavior.
     */ send(method, params) {
        // @TODO: cache chainId?? purge on switch_networks
        // We have been destroyed; no operations are supported anymore
        if (this.destroyed) {
            return Promise.reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeError"])("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", {
                operation: method
            }));
        }
        const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_update$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _nextId).value++;
        const promise = new Promise((resolve, reject)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _payloads).push({
                resolve,
                reject,
                payload: {
                    method,
                    params,
                    id,
                    jsonrpc: "2.0"
                }
            });
        });
        // If there is not a pending drainTimer, set one
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _scheduleDrain, scheduleDrain).call(this);
        return promise;
    }
    /**
     *  Resolves to the [[Signer]] account for  %%address%% managed by
     *  the client.
     *
     *  If the %%address%% is a number, it is used as an index in the
     *  the accounts from [[listAccounts]].
     *
     *  This can only be used on clients which manage accounts (such as
     *  Geth with imported account or MetaMask).
     *
     *  Throws if the account doesn't exist.
     */ async getSigner(address) {
        if (address == null) {
            address = 0;
        }
        const accountsPromise = this.send("eth_accounts", []);
        // Account index
        if (typeof address === "number") {
            const accounts = await accountsPromise;
            if (address >= accounts.length) {
                throw new Error("no such account");
            }
            return new JsonRpcSigner(this, accounts[address]);
        }
        const { accounts } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveProperties"])({
            network: this.getNetwork(),
            accounts: accountsPromise
        });
        // Account address
        address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(address);
        for (const account of accounts){
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(account) === address) {
                return new JsonRpcSigner(this, address);
            }
        }
        throw new Error("invalid account");
    }
    async listAccounts() {
        const accounts = await this.send("eth_accounts", []);
        return accounts.map((a)=>new JsonRpcSigner(this, a));
    }
    destroy() {
        // Stop processing requests
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _drainTimer)) {
            clearTimeout((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _drainTimer));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _drainTimer, null);
        }
        // Cancel all pending requests
        for (const { payload, reject } of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _payloads)){
            reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeError"])("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", {
                operation: payload.method
            }));
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _payloads, []);
        // Parent clean-up
        super.destroy();
    }
    constructor(network, options){
        super(network, options), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _scheduleDrain), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _options, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _nextId, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _payloads, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _drainTimer, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _notReady, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _network, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pendingDetectNetwork, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _nextId, 1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _options, Object.assign({}, defaultOptions, options || {}));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _payloads, []);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _drainTimer, null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _network, null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pendingDetectNetwork, null);
        {
            let resolve = null;
            const promise = new Promise((_resolve)=>{
                resolve = _resolve;
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _notReady, {
                promise,
                resolve
            });
        }
        const staticNetwork = this._getOption("staticNetwork");
        if (typeof staticNetwork === "boolean") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(!staticNetwork || network !== "any", "staticNetwork cannot be used on special network 'any'", "options", options);
            if (staticNetwork && network != null) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _network, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Network"].from(network));
            }
        } else if (staticNetwork) {
            // Make sure any static network is compatbile with the provided netwrok
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(network == null || staticNetwork.matches(network), "staticNetwork MUST match network object", "options", options);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _network, staticNetwork);
        }
    }
}
function scheduleDrain() {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _drainTimer)) {
        return;
    }
    // If we aren't using batching, no harm in sending it immediately
    const stallTime = this._getOption("batchMaxCount") === 1 ? 0 : this._getOption("batchStallTime");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _drainTimer, setTimeout(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _drainTimer, null);
        const payloads = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _payloads);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _payloads, []);
        while(payloads.length){
            // Create payload batches that satisfy our batch constraints
            const batch = [
                payloads.shift()
            ];
            while(payloads.length){
                if (batch.length === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _options).batchMaxCount) {
                    break;
                }
                batch.push(payloads.shift());
                const bytes = JSON.stringify(batch.map((p)=>p.payload));
                if (bytes.length > (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _options).batchMaxSize) {
                    payloads.unshift(batch.pop());
                    break;
                }
            }
            // Process the result to each payload
            (async ()=>{
                const payload = batch.length === 1 ? batch[0].payload : batch.map((p)=>p.payload);
                this.emit("debug", {
                    action: "sendRpcPayload",
                    payload
                });
                try {
                    const result = await this._send(payload);
                    this.emit("debug", {
                        action: "receiveRpcResult",
                        result
                    });
                    // Process results in batch order
                    for (const { resolve, reject, payload } of batch){
                        if (this.destroyed) {
                            reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeError"])("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", {
                                operation: payload.method
                            }));
                            continue;
                        }
                        // Find the matching result
                        const resp = result.filter((r)=>r.id === payload.id)[0];
                        // No result; the node failed us in unexpected ways
                        if (resp == null) {
                            const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeError"])("missing response for request", "BAD_DATA", {
                                value: result,
                                info: {
                                    payload
                                }
                            });
                            this.emit("error", error);
                            reject(error);
                            continue;
                        }
                        // The response is an error
                        if ("error" in resp) {
                            reject(this.getRpcError(payload, resp));
                            continue;
                        }
                        // All good; send the result
                        resolve(resp.result);
                    }
                } catch (error) {
                    this.emit("debug", {
                        action: "receiveRpcError",
                        error
                    });
                    for (const { reject } of batch){
                        // @TODO: augment the error with the payload
                        reject(error);
                    }
                }
            })();
        }
    }, stallTime));
}
var _pollingInterval = /*#__PURE__*/ new WeakMap();
class JsonRpcApiPollingProvider extends JsonRpcApiProvider {
    _getSubscriber(sub) {
        const subscriber = super._getSubscriber(sub);
        if (isPollable(subscriber)) {
            subscriber.pollingInterval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pollingInterval);
        }
        return subscriber;
    }
    /**
     *  The polling interval (default: 4000 ms)
     */ get pollingInterval() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pollingInterval);
    }
    set pollingInterval(value) {
        if (!Number.isInteger(value) || value < 0) {
            throw new Error("invalid interval");
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pollingInterval, value);
        this._forEachSubscriber((sub)=>{
            if (isPollable(sub)) {
                sub.pollingInterval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pollingInterval);
            }
        });
    }
    constructor(network, options){
        super(network, options), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pollingInterval, {
            writable: true,
            value: void 0
        });
        let pollingInterval = this._getOption("pollingInterval");
        if (pollingInterval == null) {
            pollingInterval = defaultOptions.pollingInterval;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _pollingInterval, pollingInterval);
    }
}
var _connect = /*#__PURE__*/ new WeakMap();
class JsonRpcProvider extends JsonRpcApiPollingProvider {
    _getConnection() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _connect).clone();
    }
    async send(method, params) {
        // All requests are over HTTP, so we can just start handling requests
        // We do this here rather than the constructor so that we don't send any
        // requests to the network (i.e. eth_chainId) until we absolutely have to.
        await this._start();
        return await super.send(method, params);
    }
    async _send(payload) {
        // Configure a POST connection for the requested method
        const request = this._getConnection();
        request.body = JSON.stringify(payload);
        request.setHeader("content-type", "application/json");
        const response = await request.send();
        response.assertOk();
        let resp = response.bodyJson;
        if (!Array.isArray(resp)) {
            resp = [
                resp
            ];
        }
        return resp;
    }
    constructor(url, network, options){
        if (url == null) {
            url = "http:/\/localhost:8545";
        }
        super(network, options), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _connect, {
            writable: true,
            value: void 0
        });
        if (typeof url === "string") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _connect, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FetchRequest"](url));
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _connect, url.clone());
        }
    }
}
function spelunkData(value) {
    if (value == null) {
        return null;
    }
    // These *are* the droids we're looking for.
    if (typeof value.message === "string" && value.message.match(/revert/i) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexString"])(value.data)) {
        return {
            message: value.message,
            data: value.data
        };
    }
    // Spelunk further...
    if (typeof value === "object") {
        for(const key in value){
            const result = spelunkData(value[key]);
            if (result) {
                return result;
            }
        }
        return null;
    }
    // Might be a JSON string we can further descend...
    if (typeof value === "string") {
        try {
            return spelunkData(JSON.parse(value));
        } catch (error) {}
    }
    return null;
}
function _spelunkMessage(value, result) {
    if (value == null) {
        return;
    }
    // These *are* the droids we're looking for.
    if (typeof value.message === "string") {
        result.push(value.message);
    }
    // Spelunk further...
    if (typeof value === "object") {
        for(const key in value){
            _spelunkMessage(value[key], result);
        }
    }
    // Might be a JSON string we can further descend...
    if (typeof value === "string") {
        try {
            return _spelunkMessage(JSON.parse(value), result);
        } catch (error) {}
    }
}
function spelunkMessage(value) {
    const result = [];
    _spelunkMessage(value, result);
    return result;
} //# sourceMappingURL=provider-jsonrpc.js.map
}),
"[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/providers/provider-browser.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "BrowserProvider": ()=>BrowserProvider
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ethers@6.16.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/ethers/lib.esm/providers/provider-jsonrpc.js [app-client] (ecmascript)");
;
;
;
;
;
;
var _request = /*#__PURE__*/ new WeakMap(), _providerInfo = /*#__PURE__*/ new WeakMap();
class BrowserProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcApiPollingProvider"] {
    get providerInfo() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _providerInfo);
    }
    async send(method, params) {
        await this._start();
        return await super.send(method, params);
    }
    async _send(payload) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(!Array.isArray(payload), "EIP-1193 does not support batch request", "payload", payload);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _request).call(this, payload.method, payload.params || []);
            return [
                {
                    id: payload.id,
                    result
                }
            ];
        } catch (e) {
            return [
                {
                    id: payload.id,
                    error: {
                        code: e.code,
                        data: e.data,
                        message: e.message
                    }
                }
            ];
        }
    }
    getRpcError(payload, error) {
        error = JSON.parse(JSON.stringify(error));
        // EIP-1193 gives us some machine-readable error codes, so rewrite
        // them into Ethers standard errors.
        switch(error.error.code || -1){
            case 4001:
                error.error.message = "ethers-user-denied: ".concat(error.error.message);
                break;
            case 4200:
                error.error.message = "ethers-unsupported: ".concat(error.error.message);
                break;
        }
        return super.getRpcError(payload, error);
    }
    /**
     *  Resolves to ``true`` if the provider manages the %%address%%.
     */ async hasSigner(address) {
        if (address == null) {
            address = 0;
        }
        const accounts = await this.send("eth_accounts", []);
        if (typeof address === "number") {
            return accounts.length > address;
        }
        address = address.toLowerCase();
        return accounts.filter((a)=>a.toLowerCase() === address).length !== 0;
    }
    async getSigner(address) {
        if (address == null) {
            address = 0;
        }
        if (!await this.hasSigner(address)) {
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _request).call(this, "eth_requestAccounts", []);
            } catch (error) {
                const payload = error.payload;
                throw this.getRpcError(payload, {
                    id: payload.id,
                    error
                });
            }
        }
        return await super.getSigner(address);
    }
    /**
     *  Discover and connect to a Provider in the Browser using the
     *  [[link-eip-6963]] discovery mechanism. If no providers are
     *  present, ``null`` is resolved.
     */ static async discover(options) {
        if (options == null) {
            options = {};
        }
        if (options.provider) {
            return new BrowserProvider(options.provider);
        }
        const context = options.window ? options.window : typeof window !== "undefined" ? window : null;
        if (context == null) {
            return null;
        }
        const anyProvider = options.anyProvider;
        if (anyProvider && context.ethereum) {
            return new BrowserProvider(context.ethereum);
        }
        if (!("addEventListener" in context && "dispatchEvent" in context && "removeEventListener" in context)) {
            return null;
        }
        const timeout = options.timeout ? options.timeout : 300;
        if (timeout === 0) {
            return null;
        }
        return await new Promise((resolve, reject)=>{
            let found = [];
            const addProvider = (event)=>{
                found.push(event.detail);
                if (anyProvider) {
                    finalize();
                }
            };
            const finalize = ()=>{
                clearTimeout(timer);
                if (found.length) {
                    // If filtering is provided:
                    if (options && options.filter) {
                        // Call filter, with a copies of found provider infos
                        const filtered = options.filter(found.map((i)=>Object.assign({}, i.info)));
                        if (filtered == null) {
                            // No provider selected
                            resolve(null);
                        } else if (filtered instanceof BrowserProvider) {
                            // Custom provider created
                            resolve(filtered);
                        } else {
                            // Find the matching provider
                            let match = null;
                            if (filtered.uuid) {
                                const matches = found.filter((f)=>filtered.uuid === f.info.uuid);
                                // @TODO: What should happen if multiple values
                                //        for the same UUID?
                                match = matches[0];
                            }
                            if (match) {
                                const { provider, info } = match;
                                resolve(new BrowserProvider(provider, undefined, {
                                    providerInfo: info
                                }));
                            } else {
                                reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeError"])("filter returned unknown info", "UNSUPPORTED_OPERATION", {
                                    value: filtered
                                }));
                            }
                        }
                    } else {
                        // Pick the first found provider
                        const { provider, info } = found[0];
                        resolve(new BrowserProvider(provider, undefined, {
                            providerInfo: info
                        }));
                    }
                } else {
                    // Nothing found
                    resolve(null);
                }
                context.removeEventListener("eip6963:announceProvider", addProvider);
            };
            const timer = setTimeout(()=>{
                finalize();
            }, timeout);
            context.addEventListener("eip6963:announceProvider", addProvider);
            context.dispatchEvent(new Event("eip6963:requestProvider"));
        });
    }
    /**
     *  Connect to the %%ethereum%% provider, optionally forcing the
     *  %%network%%.
     */ constructor(ethereum, network, _options){
        // Copy the options
        const options = Object.assign({}, _options != null ? _options : {}, {
            batchMaxCount: 1
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ethers$40$6$2e$16$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertArgument"])(ethereum && ethereum.request, "invalid EIP-1193 provider", "ethereum", ethereum);
        super(network, options), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _request, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _providerInfo, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _providerInfo, null);
        if (_options && _options.providerInfo) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _providerInfo, _options.providerInfo);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _request, async (method, params)=>{
            const payload = {
                method,
                params
            };
            this.emit("debug", {
                action: "sendEip1193Request",
                payload
            });
            try {
                const result = await ethereum.request(payload);
                this.emit("debug", {
                    action: "receiveEip1193Result",
                    result
                });
                return result;
            } catch (e) {
                const error = new Error(e.message);
                error.code = e.code;
                error.data = e.data;
                error.payload = payload;
                this.emit("debug", {
                    action: "receiveEip1193Error",
                    error
                });
                throw error;
            }
        });
    }
} //# sourceMappingURL=provider-browser.js.map
}),
}]);

//# sourceMappingURL=d3aa0_ethers_lib_esm_providers_da576f72._.js.map