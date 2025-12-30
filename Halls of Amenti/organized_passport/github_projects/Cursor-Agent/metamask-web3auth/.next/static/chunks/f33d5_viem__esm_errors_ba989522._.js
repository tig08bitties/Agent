(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/abi.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "AbiConstructorNotFoundError": ()=>AbiConstructorNotFoundError,
    "AbiConstructorParamsNotFoundError": ()=>AbiConstructorParamsNotFoundError,
    "AbiDecodingDataSizeInvalidError": ()=>AbiDecodingDataSizeInvalidError,
    "AbiDecodingDataSizeTooSmallError": ()=>AbiDecodingDataSizeTooSmallError,
    "AbiDecodingZeroDataError": ()=>AbiDecodingZeroDataError,
    "AbiEncodingArrayLengthMismatchError": ()=>AbiEncodingArrayLengthMismatchError,
    "AbiEncodingBytesSizeMismatchError": ()=>AbiEncodingBytesSizeMismatchError,
    "AbiEncodingLengthMismatchError": ()=>AbiEncodingLengthMismatchError,
    "AbiErrorInputsNotFoundError": ()=>AbiErrorInputsNotFoundError,
    "AbiErrorNotFoundError": ()=>AbiErrorNotFoundError,
    "AbiErrorSignatureNotFoundError": ()=>AbiErrorSignatureNotFoundError,
    "AbiEventNotFoundError": ()=>AbiEventNotFoundError,
    "AbiEventSignatureEmptyTopicsError": ()=>AbiEventSignatureEmptyTopicsError,
    "AbiEventSignatureNotFoundError": ()=>AbiEventSignatureNotFoundError,
    "AbiFunctionNotFoundError": ()=>AbiFunctionNotFoundError,
    "AbiFunctionOutputsNotFoundError": ()=>AbiFunctionOutputsNotFoundError,
    "AbiFunctionSignatureNotFoundError": ()=>AbiFunctionSignatureNotFoundError,
    "AbiItemAmbiguityError": ()=>AbiItemAmbiguityError,
    "BytesSizeMismatchError": ()=>BytesSizeMismatchError,
    "DecodeLogDataMismatch": ()=>DecodeLogDataMismatch,
    "DecodeLogTopicsMismatch": ()=>DecodeLogTopicsMismatch,
    "InvalidAbiDecodingTypeError": ()=>InvalidAbiDecodingTypeError,
    "InvalidAbiEncodingTypeError": ()=>InvalidAbiEncodingTypeError,
    "InvalidArrayError": ()=>InvalidArrayError,
    "InvalidDefinitionTypeError": ()=>InvalidDefinitionTypeError,
    "UnsupportedPackedAbiType": ()=>UnsupportedPackedAbiType
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/formatAbiItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/data/size.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
;
;
;
class AbiConstructorNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ docsPath }){
        super([
            'A constructor was not found on the ABI.',
            'Make sure you are using the correct ABI and that the constructor exists on it.'
        ].join('\n'), {
            docsPath,
            name: 'AbiConstructorNotFoundError'
        });
    }
}
class AbiConstructorParamsNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ docsPath }){
        super([
            'Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.',
            'Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.'
        ].join('\n'), {
            docsPath,
            name: 'AbiConstructorParamsNotFoundError'
        });
    }
}
class AbiDecodingDataSizeInvalidError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ data, size }){
        super([
            "Data size of ".concat(size, " bytes is invalid."),
            'Size must be in increments of 32 bytes (size % 32 === 0).'
        ].join('\n'), {
            metaMessages: [
                "Data: ".concat(data, " (").concat(size, " bytes)")
            ],
            name: 'AbiDecodingDataSizeInvalidError'
        });
    }
}
class AbiDecodingDataSizeTooSmallError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ data, params, size }){
        super([
            "Data size of ".concat(size, " bytes is too small for given parameters.")
        ].join('\n'), {
            metaMessages: [
                "Params: (".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAbiParams"])(params, {
                    includeName: true
                }), ")"),
                "Data:   ".concat(data, " (").concat(size, " bytes)")
            ],
            name: 'AbiDecodingDataSizeTooSmallError'
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = data;
        this.params = params;
        this.size = size;
    }
}
class AbiDecodingZeroDataError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Cannot decode zero data ("0x") with ABI parameters.', {
            name: 'AbiDecodingZeroDataError'
        });
    }
}
class AbiEncodingArrayLengthMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ expectedLength, givenLength, type }){
        super([
            "ABI encoding array length mismatch for type ".concat(type, "."),
            "Expected length: ".concat(expectedLength),
            "Given length: ".concat(givenLength)
        ].join('\n'), {
            name: 'AbiEncodingArrayLengthMismatchError'
        });
    }
}
class AbiEncodingBytesSizeMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ expectedSize, value }){
        super('Size of bytes "'.concat(value, '" (bytes').concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"])(value), ") does not match expected size (bytes").concat(expectedSize, ")."), {
            name: 'AbiEncodingBytesSizeMismatchError'
        });
    }
}
class AbiEncodingLengthMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ expectedLength, givenLength }){
        super([
            'ABI encoding params/values length mismatch.',
            "Expected length (params): ".concat(expectedLength),
            "Given length (values): ".concat(givenLength)
        ].join('\n'), {
            name: 'AbiEncodingLengthMismatchError'
        });
    }
}
class AbiErrorInputsNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(errorName, { docsPath }){
        super([
            'Arguments (`args`) were provided to "'.concat(errorName, '", but "').concat(errorName, '" on the ABI does not contain any parameters (`inputs`).'),
            'Cannot encode error result without knowing what the parameter types are.',
            'Make sure you are using the correct ABI and that the inputs exist on it.'
        ].join('\n'), {
            docsPath,
            name: 'AbiErrorInputsNotFoundError'
        });
    }
}
class AbiErrorNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(errorName, { docsPath } = {}){
        super([
            "Error ".concat(errorName ? '"'.concat(errorName, '" ') : '', "not found on ABI."),
            'Make sure you are using the correct ABI and that the error exists on it.'
        ].join('\n'), {
            docsPath,
            name: 'AbiErrorNotFoundError'
        });
    }
}
class AbiErrorSignatureNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(signature, { docsPath }){
        super([
            'Encoded error signature "'.concat(signature, '" not found on ABI.'),
            'Make sure you are using the correct ABI and that the error exists on it.',
            "You can look up the decoded signature here: https://openchain.xyz/signatures?query=".concat(signature, ".")
        ].join('\n'), {
            docsPath,
            name: 'AbiErrorSignatureNotFoundError'
        });
        Object.defineProperty(this, "signature", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.signature = signature;
    }
}
class AbiEventSignatureEmptyTopicsError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ docsPath }){
        super('Cannot extract event signature from empty topics.', {
            docsPath,
            name: 'AbiEventSignatureEmptyTopicsError'
        });
    }
}
class AbiEventSignatureNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(signature, { docsPath }){
        super([
            'Encoded event signature "'.concat(signature, '" not found on ABI.'),
            'Make sure you are using the correct ABI and that the event exists on it.',
            "You can look up the signature here: https://openchain.xyz/signatures?query=".concat(signature, ".")
        ].join('\n'), {
            docsPath,
            name: 'AbiEventSignatureNotFoundError'
        });
    }
}
class AbiEventNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(eventName, { docsPath } = {}){
        super([
            "Event ".concat(eventName ? '"'.concat(eventName, '" ') : '', "not found on ABI."),
            'Make sure you are using the correct ABI and that the event exists on it.'
        ].join('\n'), {
            docsPath,
            name: 'AbiEventNotFoundError'
        });
    }
}
class AbiFunctionNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(functionName, { docsPath } = {}){
        super([
            "Function ".concat(functionName ? '"'.concat(functionName, '" ') : '', "not found on ABI."),
            'Make sure you are using the correct ABI and that the function exists on it.'
        ].join('\n'), {
            docsPath,
            name: 'AbiFunctionNotFoundError'
        });
    }
}
class AbiFunctionOutputsNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(functionName, { docsPath }){
        super([
            'Function "'.concat(functionName, '" does not contain any `outputs` on ABI.'),
            'Cannot decode function result without knowing what the parameter types are.',
            'Make sure you are using the correct ABI and that the function exists on it.'
        ].join('\n'), {
            docsPath,
            name: 'AbiFunctionOutputsNotFoundError'
        });
    }
}
class AbiFunctionSignatureNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(signature, { docsPath }){
        super([
            'Encoded function signature "'.concat(signature, '" not found on ABI.'),
            'Make sure you are using the correct ABI and that the function exists on it.',
            "You can look up the signature here: https://openchain.xyz/signatures?query=".concat(signature, ".")
        ].join('\n'), {
            docsPath,
            name: 'AbiFunctionSignatureNotFoundError'
        });
    }
}
class AbiItemAmbiguityError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(x, y){
        super('Found ambiguous types in overloaded ABI items.', {
            metaMessages: [
                "`".concat(x.type, "` in `").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAbiItem"])(x.abiItem), "`, and"),
                "`".concat(y.type, "` in `").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAbiItem"])(y.abiItem), "`"),
                '',
                'These types encode differently and cannot be distinguished at runtime.',
                'Remove one of the ambiguous items in the ABI.'
            ],
            name: 'AbiItemAmbiguityError'
        });
    }
}
class BytesSizeMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ expectedSize, givenSize }){
        super("Expected bytes".concat(expectedSize, ", got bytes").concat(givenSize, "."), {
            name: 'BytesSizeMismatchError'
        });
    }
}
class DecodeLogDataMismatch extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ abiItem, data, params, size }){
        super([
            "Data size of ".concat(size, " bytes is too small for non-indexed event parameters.")
        ].join('\n'), {
            metaMessages: [
                "Params: (".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAbiParams"])(params, {
                    includeName: true
                }), ")"),
                "Data:   ".concat(data, " (").concat(size, " bytes)")
            ],
            name: 'DecodeLogDataMismatch'
        });
        Object.defineProperty(this, "abiItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.abiItem = abiItem;
        this.data = data;
        this.params = params;
        this.size = size;
    }
}
class DecodeLogTopicsMismatch extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ abiItem, param }){
        super([
            "Expected a topic for indexed event parameter".concat(param.name ? ' "'.concat(param.name, '"') : '', ' on event "').concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAbiItem"])(abiItem, {
                includeName: true
            }), '".')
        ].join('\n'), {
            name: 'DecodeLogTopicsMismatch'
        });
        Object.defineProperty(this, "abiItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.abiItem = abiItem;
    }
}
class InvalidAbiEncodingTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(type, { docsPath }){
        super([
            'Type "'.concat(type, '" is not a valid encoding type.'),
            'Please provide a valid ABI type.'
        ].join('\n'), {
            docsPath,
            name: 'InvalidAbiEncodingType'
        });
    }
}
class InvalidAbiDecodingTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(type, { docsPath }){
        super([
            'Type "'.concat(type, '" is not a valid decoding type.'),
            'Please provide a valid ABI type.'
        ].join('\n'), {
            docsPath,
            name: 'InvalidAbiDecodingType'
        });
    }
}
class InvalidArrayError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(value){
        super([
            'Value "'.concat(value, '" is not a valid array.')
        ].join('\n'), {
            name: 'InvalidArrayError'
        });
    }
}
class InvalidDefinitionTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(type){
        super([
            '"'.concat(type, '" is not a valid definition type.'),
            'Valid types: "function", "event", "error"'
        ].join('\n'), {
            name: 'InvalidDefinitionTypeError'
        });
    }
}
class UnsupportedPackedAbiType extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(type){
        super('Type "'.concat(type, '" is not supported for packed encoding.'), {
            name: 'UnsupportedPackedAbiType'
        });
    }
} //# sourceMappingURL=abi.js.map
}),
"[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/cursor.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "NegativeOffsetError": ()=>NegativeOffsetError,
    "PositionOutOfBoundsError": ()=>PositionOutOfBoundsError,
    "RecursiveReadLimitExceededError": ()=>RecursiveReadLimitExceededError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
;
class NegativeOffsetError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ offset }){
        super("Offset `".concat(offset, "` cannot be negative."), {
            name: 'NegativeOffsetError'
        });
    }
}
class PositionOutOfBoundsError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ length, position }){
        super("Position `".concat(position, "` is out of bounds (`0 < position < ").concat(length, "`)."), {
            name: 'PositionOutOfBoundsError'
        });
    }
}
class RecursiveReadLimitExceededError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ count, limit }){
        super("Recursive read limit of `".concat(limit, "` exceeded (recursive read count: `").concat(count, "`)."), {
            name: 'RecursiveReadLimitExceededError'
        });
    }
} //# sourceMappingURL=cursor.js.map
}),
"[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/chain.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ChainDoesNotSupportContract": ()=>ChainDoesNotSupportContract,
    "ChainMismatchError": ()=>ChainMismatchError,
    "ChainNotFoundError": ()=>ChainNotFoundError,
    "ClientChainNotConfiguredError": ()=>ClientChainNotConfiguredError,
    "InvalidChainIdError": ()=>InvalidChainIdError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
;
class ChainDoesNotSupportContract extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ blockNumber, chain, contract }){
        super('Chain "'.concat(chain.name, '" does not support contract "').concat(contract.name, '".'), {
            metaMessages: [
                'This could be due to any of the following:',
                ...blockNumber && contract.blockCreated && contract.blockCreated > blockNumber ? [
                    '- The contract "'.concat(contract.name, '" was not deployed until block ').concat(contract.blockCreated, " (current block ").concat(blockNumber, ").")
                ] : [
                    '- The chain does not have the contract "'.concat(contract.name, '" configured.')
                ]
            ],
            name: 'ChainDoesNotSupportContract'
        });
    }
}
class ChainMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ chain, currentChainId }){
        super("The current chain of the wallet (id: ".concat(currentChainId, ") does not match the target chain for the transaction (id: ").concat(chain.id, " – ").concat(chain.name, ")."), {
            metaMessages: [
                "Current Chain ID:  ".concat(currentChainId),
                "Expected Chain ID: ".concat(chain.id, " – ").concat(chain.name)
            ],
            name: 'ChainMismatchError'
        });
    }
}
class ChainNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super([
            'No chain was provided to the request.',
            'Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.'
        ].join('\n'), {
            name: 'ChainNotFoundError'
        });
    }
}
class ClientChainNotConfiguredError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('No chain was provided to the Client.', {
            name: 'ClientChainNotConfiguredError'
        });
    }
}
class InvalidChainIdError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ chainId }){
        super(typeof chainId === 'number' ? 'Chain ID "'.concat(chainId, '" is invalid.') : 'Chain ID is invalid.', {
            name: 'InvalidChainIdError'
        });
    }
} //# sourceMappingURL=chain.js.map
}),
"[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/stateOverride.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "AccountStateConflictError": ()=>AccountStateConflictError,
    "StateAssignmentConflictError": ()=>StateAssignmentConflictError,
    "prettyStateMapping": ()=>prettyStateMapping,
    "prettyStateOverride": ()=>prettyStateOverride
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
;
class AccountStateConflictError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ address }){
        super('State for account "'.concat(address, '" is set multiple times.'), {
            name: 'AccountStateConflictError'
        });
    }
}
class StateAssignmentConflictError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('state and stateDiff are set on the same account.', {
            name: 'StateAssignmentConflictError'
        });
    }
}
function prettyStateMapping(stateMapping) {
    return stateMapping.reduce((pretty, param)=>{
        let { slot, value } = param;
        return "".concat(pretty, "        ").concat(slot, ": ").concat(value, "\n");
    }, '');
}
function prettyStateOverride(stateOverride) {
    return stateOverride.reduce((pretty, param)=>{
        let { address, ...state } = param;
        let val = "".concat(pretty, "    ").concat(address, ":\n");
        if (state.nonce) val += "      nonce: ".concat(state.nonce, "\n");
        if (state.balance) val += "      balance: ".concat(state.balance, "\n");
        if (state.code) val += "      code: ".concat(state.code, "\n");
        if (state.state) {
            val += '      state:\n';
            val += prettyStateMapping(state.state);
        }
        if (state.stateDiff) {
            val += '      stateDiff:\n';
            val += prettyStateMapping(state.stateDiff);
        }
        return val;
    }, '  State Override:\n').slice(0, -1);
} //# sourceMappingURL=stateOverride.js.map
}),
"[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/transaction.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "FeeConflictError": ()=>FeeConflictError,
    "InvalidLegacyVError": ()=>InvalidLegacyVError,
    "InvalidSerializableTransactionError": ()=>InvalidSerializableTransactionError,
    "InvalidSerializedTransactionError": ()=>InvalidSerializedTransactionError,
    "InvalidSerializedTransactionTypeError": ()=>InvalidSerializedTransactionTypeError,
    "InvalidStorageKeySizeError": ()=>InvalidStorageKeySizeError,
    "TransactionExecutionError": ()=>TransactionExecutionError,
    "TransactionNotFoundError": ()=>TransactionNotFoundError,
    "TransactionReceiptNotFoundError": ()=>TransactionReceiptNotFoundError,
    "WaitForTransactionReceiptTimeoutError": ()=>WaitForTransactionReceiptTimeoutError,
    "prettyPrint": ()=>prettyPrint
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/unit/formatEther.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/unit/formatGwei.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
;
;
;
function prettyPrint(args) {
    const entries = Object.entries(args).map((param)=>{
        let [key, value] = param;
        if (value === undefined || value === false) return null;
        return [
            key,
            value
        ];
    }).filter(Boolean);
    const maxLength = entries.reduce((acc, param)=>{
        let [key] = param;
        return Math.max(acc, key.length);
    }, 0);
    return entries.map((param)=>{
        let [key, value] = param;
        return "  ".concat("".concat(key, ":").padEnd(maxLength + 1), "  ").concat(value);
    }).join('\n');
}
class FeeConflictError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super([
            'Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.',
            'Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.'
        ].join('\n'), {
            name: 'FeeConflictError'
        });
    }
}
class InvalidLegacyVError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ v }){
        super('Invalid `v` value "'.concat(v, '". Expected 27 or 28.'), {
            name: 'InvalidLegacyVError'
        });
    }
}
class InvalidSerializableTransactionError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ transaction }){
        super('Cannot infer a transaction type from provided transaction.', {
            metaMessages: [
                'Provided Transaction:',
                '{',
                prettyPrint(transaction),
                '}',
                '',
                'To infer the type, either provide:',
                '- a `type` to the Transaction, or',
                '- an EIP-1559 Transaction with `maxFeePerGas`, or',
                '- an EIP-2930 Transaction with `gasPrice` & `accessList`, or',
                '- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or',
                '- an EIP-7702 Transaction with `authorizationList`, or',
                '- a Legacy Transaction with `gasPrice`'
            ],
            name: 'InvalidSerializableTransactionError'
        });
    }
}
class InvalidSerializedTransactionTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ serializedType }){
        super('Serialized transaction type "'.concat(serializedType, '" is invalid.'), {
            name: 'InvalidSerializedTransactionType'
        });
        Object.defineProperty(this, "serializedType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.serializedType = serializedType;
    }
}
class InvalidSerializedTransactionError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ attributes, serializedTransaction, type }){
        const missing = Object.entries(attributes).map((param)=>{
            let [key, value] = param;
            return typeof value === 'undefined' ? key : undefined;
        }).filter(Boolean);
        super('Invalid serialized transaction of type "'.concat(type, '" was provided.'), {
            metaMessages: [
                'Serialized Transaction: "'.concat(serializedTransaction, '"'),
                missing.length > 0 ? "Missing Attributes: ".concat(missing.join(', ')) : ''
            ].filter(Boolean),
            name: 'InvalidSerializedTransactionError'
        });
        Object.defineProperty(this, "serializedTransaction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.serializedTransaction = serializedTransaction;
        this.type = type;
    }
}
class InvalidStorageKeySizeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ storageKey }){
        super('Size for storage key "'.concat(storageKey, '" is invalid. Expected 32 bytes. Got ').concat(Math.floor((storageKey.length - 2) / 2), " bytes."), {
            name: 'InvalidStorageKeySizeError'
        });
    }
}
class TransactionExecutionError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(cause, { account, docsPath, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value }){
        var _chain_nativeCurrency;
        const prettyArgs = prettyPrint({
            chain: chain && "".concat(chain === null || chain === void 0 ? void 0 : chain.name, " (id: ").concat(chain === null || chain === void 0 ? void 0 : chain.id, ")"),
            from: account === null || account === void 0 ? void 0 : account.address,
            to,
            value: typeof value !== 'undefined' && "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatEther"])(value), " ").concat((chain === null || chain === void 0 ? void 0 : (_chain_nativeCurrency = chain.nativeCurrency) === null || _chain_nativeCurrency === void 0 ? void 0 : _chain_nativeCurrency.symbol) || 'ETH'),
            data,
            gas,
            gasPrice: typeof gasPrice !== 'undefined' && "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatGwei"])(gasPrice), " gwei"),
            maxFeePerGas: typeof maxFeePerGas !== 'undefined' && "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatGwei"])(maxFeePerGas), " gwei"),
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== 'undefined' && "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatGwei"])(maxPriorityFeePerGas), " gwei"),
            nonce
        });
        super(cause.shortMessage, {
            cause,
            docsPath,
            metaMessages: [
                ...cause.metaMessages ? [
                    ...cause.metaMessages,
                    ' '
                ] : [],
                'Request Arguments:',
                prettyArgs
            ].filter(Boolean),
            name: 'TransactionExecutionError'
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.cause = cause;
    }
}
class TransactionNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ blockHash, blockNumber, blockTag, hash, index }){
        let identifier = 'Transaction';
        if (blockTag && index !== undefined) identifier = 'Transaction at block time "'.concat(blockTag, '" at index "').concat(index, '"');
        if (blockHash && index !== undefined) identifier = 'Transaction at block hash "'.concat(blockHash, '" at index "').concat(index, '"');
        if (blockNumber && index !== undefined) identifier = 'Transaction at block number "'.concat(blockNumber, '" at index "').concat(index, '"');
        if (hash) identifier = 'Transaction with hash "'.concat(hash, '"');
        super("".concat(identifier, " could not be found."), {
            name: 'TransactionNotFoundError'
        });
    }
}
class TransactionReceiptNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ hash }){
        super('Transaction receipt with hash "'.concat(hash, '" could not be found. The Transaction may not be processed on a block yet.'), {
            name: 'TransactionReceiptNotFoundError'
        });
    }
}
class WaitForTransactionReceiptTimeoutError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ hash }){
        super('Timed out while waiting for transaction with hash "'.concat(hash, '" to be confirmed.'), {
            name: 'WaitForTransactionReceiptTimeoutError'
        });
    }
} //# sourceMappingURL=transaction.js.map
}),
"[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/contract.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "CallExecutionError": ()=>CallExecutionError,
    "ContractFunctionExecutionError": ()=>ContractFunctionExecutionError,
    "ContractFunctionRevertedError": ()=>ContractFunctionRevertedError,
    "ContractFunctionZeroDataError": ()=>ContractFunctionZeroDataError,
    "CounterfactualDeploymentFailedError": ()=>CounterfactualDeploymentFailedError,
    "RawContractError": ()=>RawContractError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$solidity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/constants/solidity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeErrorResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/decodeErrorResult.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/formatAbiItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItemWithArgs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/formatAbiItemWithArgs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$getAbiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/getAbiItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/unit/formatEther.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/unit/formatGwei.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/abi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$stateOverride$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/stateOverride.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/utils.js [app-client] (ecmascript)");
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
class CallExecutionError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(cause, { account: account_, docsPath, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, stateOverride }){
        var _chain_nativeCurrency;
        const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : undefined;
        let prettyArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prettyPrint"])({
            from: account === null || account === void 0 ? void 0 : account.address,
            to,
            value: typeof value !== 'undefined' && "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatEther"])(value), " ").concat((chain === null || chain === void 0 ? void 0 : (_chain_nativeCurrency = chain.nativeCurrency) === null || _chain_nativeCurrency === void 0 ? void 0 : _chain_nativeCurrency.symbol) || 'ETH'),
            data,
            gas,
            gasPrice: typeof gasPrice !== 'undefined' && "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatGwei"])(gasPrice), " gwei"),
            maxFeePerGas: typeof maxFeePerGas !== 'undefined' && "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatGwei"])(maxFeePerGas), " gwei"),
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== 'undefined' && "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatGwei"])(maxPriorityFeePerGas), " gwei"),
            nonce
        });
        if (stateOverride) {
            prettyArgs += "\n".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$stateOverride$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prettyStateOverride"])(stateOverride));
        }
        super(cause.shortMessage, {
            cause,
            docsPath,
            metaMessages: [
                ...cause.metaMessages ? [
                    ...cause.metaMessages,
                    ' '
                ] : [],
                'Raw Call Arguments:',
                prettyArgs
            ].filter(Boolean),
            name: 'CallExecutionError'
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.cause = cause;
    }
}
class ContractFunctionExecutionError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(cause, { abi, args, contractAddress, docsPath, functionName, sender }){
        const abiItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$getAbiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAbiItem"])({
            abi,
            args,
            name: functionName
        });
        const formattedArgs = abiItem ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItemWithArgs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAbiItemWithArgs"])({
            abiItem,
            args,
            includeFunctionName: false,
            includeName: false
        }) : undefined;
        const functionWithParams = abiItem ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAbiItem"])(abiItem, {
            includeName: true
        }) : undefined;
        var _functionName_length;
        const prettyArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prettyPrint"])({
            address: contractAddress && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContractAddress"])(contractAddress),
            function: functionWithParams,
            args: formattedArgs && formattedArgs !== '()' && "".concat([
                ...Array((_functionName_length = functionName === null || functionName === void 0 ? void 0 : functionName.length) !== null && _functionName_length !== void 0 ? _functionName_length : 0).keys()
            ].map(()=>' ').join('')).concat(formattedArgs),
            sender
        });
        super(cause.shortMessage || 'An unknown error occurred while executing the contract function "'.concat(functionName, '".'), {
            cause,
            docsPath,
            metaMessages: [
                ...cause.metaMessages ? [
                    ...cause.metaMessages,
                    ' '
                ] : [],
                prettyArgs && 'Contract Call:',
                prettyArgs
            ].filter(Boolean),
            name: 'ContractFunctionExecutionError'
        });
        Object.defineProperty(this, "abi", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "args", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "contractAddress", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "formattedArgs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "functionName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sender", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.abi = abi;
        this.args = args;
        this.cause = cause;
        this.contractAddress = contractAddress;
        this.functionName = functionName;
        this.sender = sender;
    }
}
class ContractFunctionRevertedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ abi, data, functionName, message }){
        let cause;
        let decodedData = undefined;
        let metaMessages;
        let reason;
        if (data && data !== '0x') {
            try {
                decodedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeErrorResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeErrorResult"])({
                    abi,
                    data
                });
                const { abiItem, errorName, args: errorArgs } = decodedData;
                if (errorName === 'Error') {
                    reason = errorArgs[0];
                } else if (errorName === 'Panic') {
                    const [firstArg] = errorArgs;
                    reason = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$solidity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["panicReasons"][firstArg];
                } else {
                    const errorWithParams = abiItem ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAbiItem"])(abiItem, {
                        includeName: true
                    }) : undefined;
                    const formattedArgs = abiItem && errorArgs ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItemWithArgs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAbiItemWithArgs"])({
                        abiItem,
                        args: errorArgs,
                        includeFunctionName: false,
                        includeName: false
                    }) : undefined;
                    var _errorName_length;
                    metaMessages = [
                        errorWithParams ? "Error: ".concat(errorWithParams) : '',
                        formattedArgs && formattedArgs !== '()' ? "       ".concat([
                            ...Array((_errorName_length = errorName === null || errorName === void 0 ? void 0 : errorName.length) !== null && _errorName_length !== void 0 ? _errorName_length : 0).keys()
                        ].map(()=>' ').join('')).concat(formattedArgs) : ''
                    ];
                }
            } catch (err) {
                cause = err;
            }
        } else if (message) reason = message;
        let signature;
        if (cause instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbiErrorSignatureNotFoundError"]) {
            signature = cause.signature;
            metaMessages = [
                'Unable to decode signature "'.concat(signature, '" as it was not found on the provided ABI.'),
                'Make sure you are using the correct ABI and that the error exists on it.',
                "You can look up the decoded signature here: https://openchain.xyz/signatures?query=".concat(signature, ".")
            ];
        }
        super(reason && reason !== 'execution reverted' || signature ? [
            'The contract function "'.concat(functionName, '" reverted with the following ').concat(signature ? 'signature' : 'reason', ":"),
            reason || signature
        ].join('\n') : 'The contract function "'.concat(functionName, '" reverted.'), {
            cause,
            metaMessages,
            name: 'ContractFunctionRevertedError'
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "raw", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "reason", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "signature", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = decodedData;
        this.raw = data;
        this.reason = reason;
        this.signature = signature;
    }
}
class ContractFunctionZeroDataError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ functionName }){
        super('The contract function "'.concat(functionName, '" returned no data ("0x").'), {
            metaMessages: [
                'This could be due to any of the following:',
                '  - The contract does not have the function "'.concat(functionName, '",'),
                '  - The parameters passed to the contract function may be invalid, or',
                '  - The address is not a contract.'
            ],
            name: 'ContractFunctionZeroDataError'
        });
    }
}
class CounterfactualDeploymentFailedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ factory }){
        super("Deployment for counterfactual contract call failed".concat(factory ? ' for factory "'.concat(factory, '".') : ''), {
            metaMessages: [
                'Please ensure:',
                '- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).',
                '- The `factoryData` is a valid encoded function call for contract deployment function on the factory.'
            ],
            name: 'CounterfactualDeploymentFailedError'
        });
    }
}
class RawContractError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ data, message }){
        super(message || '', {
            name: 'RawContractError'
        });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 3
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = data;
    }
} //# sourceMappingURL=contract.js.map
}),
"[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/node.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ExecutionRevertedError": ()=>ExecutionRevertedError,
    "FeeCapTooHighError": ()=>FeeCapTooHighError,
    "FeeCapTooLowError": ()=>FeeCapTooLowError,
    "InsufficientFundsError": ()=>InsufficientFundsError,
    "IntrinsicGasTooHighError": ()=>IntrinsicGasTooHighError,
    "IntrinsicGasTooLowError": ()=>IntrinsicGasTooLowError,
    "NonceMaxValueError": ()=>NonceMaxValueError,
    "NonceTooHighError": ()=>NonceTooHighError,
    "NonceTooLowError": ()=>NonceTooLowError,
    "TipAboveFeeCapError": ()=>TipAboveFeeCapError,
    "TransactionTypeNotSupportedError": ()=>TransactionTypeNotSupportedError,
    "UnknownNodeError": ()=>UnknownNodeError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/unit/formatGwei.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
;
;
class ExecutionRevertedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause, message } = {}){
        var _message_replace;
        const reason = message === null || message === void 0 ? void 0 : (_message_replace = message.replace('execution reverted: ', '')) === null || _message_replace === void 0 ? void 0 : _message_replace.replace('execution reverted', '');
        super("Execution reverted ".concat(reason ? "with reason: ".concat(reason) : 'for an unknown reason', "."), {
            cause,
            name: 'ExecutionRevertedError'
        });
    }
}
Object.defineProperty(ExecutionRevertedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 3
});
Object.defineProperty(ExecutionRevertedError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /execution reverted/
});
class FeeCapTooHighError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause, maxFeePerGas } = {}){
        super("The fee cap (`maxFeePerGas`".concat(maxFeePerGas ? " = ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatGwei"])(maxFeePerGas), " gwei") : '', ") cannot be higher than the maximum allowed value (2^256-1)."), {
            cause,
            name: 'FeeCapTooHighError'
        });
    }
}
Object.defineProperty(FeeCapTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});
class FeeCapTooLowError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause, maxFeePerGas } = {}){
        super("The fee cap (`maxFeePerGas`".concat(maxFeePerGas ? " = ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatGwei"])(maxFeePerGas)) : '', " gwei) cannot be lower than the block base fee."), {
            cause,
            name: 'FeeCapTooLowError'
        });
    }
}
Object.defineProperty(FeeCapTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
});
class NonceTooHighError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause, nonce } = {}){
        super("Nonce provided for the transaction ".concat(nonce ? "(".concat(nonce, ") ") : '', "is higher than the next one expected."), {
            cause,
            name: 'NonceTooHighError'
        });
    }
}
Object.defineProperty(NonceTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce too high/
});
class NonceTooLowError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause, nonce } = {}){
        super([
            "Nonce provided for the transaction ".concat(nonce ? "(".concat(nonce, ") ") : '', "is lower than the current nonce of the account."),
            'Try increasing the nonce or find the latest nonce with `getTransactionCount`.'
        ].join('\n'), {
            cause,
            name: 'NonceTooLowError'
        });
    }
}
Object.defineProperty(NonceTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce too low|transaction already imported|already known/
});
class NonceMaxValueError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause, nonce } = {}){
        super("Nonce provided for the transaction ".concat(nonce ? "(".concat(nonce, ") ") : '', "exceeds the maximum allowed nonce."), {
            cause,
            name: 'NonceMaxValueError'
        });
    }
}
Object.defineProperty(NonceMaxValueError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce has max value/
});
class InsufficientFundsError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause } = {}){
        super([
            'The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.'
        ].join('\n'), {
            cause,
            metaMessages: [
                'This error could arise when the account does not have enough funds to:',
                ' - pay for the total gas fee,',
                ' - pay for the value to send.',
                ' ',
                'The cost of the transaction is calculated as `gas * gas fee + value`, where:',
                ' - `gas` is the amount of gas needed for transaction to execute,',
                ' - `gas fee` is the gas fee,',
                ' - `value` is the amount of ether to send to the recipient.'
            ],
            name: 'InsufficientFundsError'
        });
    }
}
Object.defineProperty(InsufficientFundsError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /insufficient funds|exceeds transaction sender account balance/
});
class IntrinsicGasTooHighError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause, gas } = {}){
        super("The amount of gas ".concat(gas ? "(".concat(gas, ") ") : '', "provided for the transaction exceeds the limit allowed for the block."), {
            cause,
            name: 'IntrinsicGasTooHighError'
        });
    }
}
Object.defineProperty(IntrinsicGasTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /intrinsic gas too high|gas limit reached/
});
class IntrinsicGasTooLowError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause, gas } = {}){
        super("The amount of gas ".concat(gas ? "(".concat(gas, ") ") : '', "provided for the transaction is too low."), {
            cause,
            name: 'IntrinsicGasTooLowError'
        });
    }
}
Object.defineProperty(IntrinsicGasTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /intrinsic gas too low/
});
class TransactionTypeNotSupportedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super('The transaction type is not supported for this chain.', {
            cause,
            name: 'TransactionTypeNotSupportedError'
        });
    }
}
Object.defineProperty(TransactionTypeNotSupportedError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /transaction type not valid/
});
class TipAboveFeeCapError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause, maxPriorityFeePerGas, maxFeePerGas } = {}){
        super([
            "The provided tip (`maxPriorityFeePerGas`".concat(maxPriorityFeePerGas ? " = ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatGwei"])(maxPriorityFeePerGas), " gwei") : '', ") cannot be higher than the fee cap (`maxFeePerGas`").concat(maxFeePerGas ? " = ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatGwei"])(maxFeePerGas), " gwei") : '', ").")
        ].join('\n'), {
            cause,
            name: 'TipAboveFeeCapError'
        });
    }
}
Object.defineProperty(TipAboveFeeCapError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});
class UnknownNodeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ cause }){
        super("An error occurred while executing: ".concat(cause === null || cause === void 0 ? void 0 : cause.shortMessage), {
            cause,
            name: 'UnknownNodeError'
        });
    }
} //# sourceMappingURL=node.js.map
}),
"[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/ens.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "EnsAvatarInvalidMetadataError": ()=>EnsAvatarInvalidMetadataError,
    "EnsAvatarInvalidNftUriError": ()=>EnsAvatarInvalidNftUriError,
    "EnsAvatarUnsupportedNamespaceError": ()=>EnsAvatarUnsupportedNamespaceError,
    "EnsAvatarUriResolutionError": ()=>EnsAvatarUriResolutionError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
;
class EnsAvatarInvalidMetadataError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ data }){
        super('Unable to extract image from metadata. The metadata may be malformed or invalid.', {
            metaMessages: [
                '- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.',
                '',
                "Provided data: ".concat(JSON.stringify(data))
            ],
            name: 'EnsAvatarInvalidMetadataError'
        });
    }
}
class EnsAvatarInvalidNftUriError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ reason }){
        super("ENS NFT avatar URI is invalid. ".concat(reason), {
            name: 'EnsAvatarInvalidNftUriError'
        });
    }
}
class EnsAvatarUriResolutionError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ uri }){
        super('Unable to resolve ENS avatar URI "'.concat(uri, '". The URI may be malformed, invalid, or does not respond with a valid image.'), {
            name: 'EnsAvatarUriResolutionError'
        });
    }
}
class EnsAvatarUnsupportedNamespaceError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ namespace }){
        super('ENS NFT avatar namespace "'.concat(namespace, '" is not supported. Must be "erc721" or "erc1155".'), {
            name: 'EnsAvatarUnsupportedNamespaceError'
        });
    }
} //# sourceMappingURL=ens.js.map
}),
"[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/log.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "FilterTypeNotSupportedError": ()=>FilterTypeNotSupportedError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
;
class FilterTypeNotSupportedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(type){
        super('Filter type "'.concat(type, '" is not supported.'), {
            name: 'FilterTypeNotSupportedError'
        });
    }
} //# sourceMappingURL=log.js.map
}),
"[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/estimateGas.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "EstimateGasExecutionError": ()=>EstimateGasExecutionError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/unit/formatEther.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/unit/formatGwei.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/transaction.js [app-client] (ecmascript)");
;
;
;
;
class EstimateGasExecutionError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(cause, { account, docsPath, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value }){
        var _chain_nativeCurrency;
        const prettyArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prettyPrint"])({
            from: account === null || account === void 0 ? void 0 : account.address,
            to,
            value: typeof value !== 'undefined' && "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatEther"])(value), " ").concat((chain === null || chain === void 0 ? void 0 : (_chain_nativeCurrency = chain.nativeCurrency) === null || _chain_nativeCurrency === void 0 ? void 0 : _chain_nativeCurrency.symbol) || 'ETH'),
            data,
            gas,
            gasPrice: typeof gasPrice !== 'undefined' && "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatGwei"])(gasPrice), " gwei"),
            maxFeePerGas: typeof maxFeePerGas !== 'undefined' && "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatGwei"])(maxFeePerGas), " gwei"),
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== 'undefined' && "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatGwei"])(maxPriorityFeePerGas), " gwei"),
            nonce
        });
        super(cause.shortMessage, {
            cause,
            docsPath,
            metaMessages: [
                ...cause.metaMessages ? [
                    ...cause.metaMessages,
                    ' '
                ] : [],
                'Estimate Gas Arguments:',
                prettyArgs
            ].filter(Boolean),
            name: 'EstimateGasExecutionError'
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.cause = cause;
    }
} //# sourceMappingURL=estimateGas.js.map
}),
"[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/fee.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "BaseFeeScalarError": ()=>BaseFeeScalarError,
    "Eip1559FeesNotSupportedError": ()=>Eip1559FeesNotSupportedError,
    "MaxFeePerGasTooLowError": ()=>MaxFeePerGasTooLowError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/unit/formatGwei.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
;
;
class BaseFeeScalarError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('`baseFeeMultiplier` must be greater than 1.', {
            name: 'BaseFeeScalarError'
        });
    }
}
class Eip1559FeesNotSupportedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Chain does not support EIP-1559 fees.', {
            name: 'Eip1559FeesNotSupportedError'
        });
    }
}
class MaxFeePerGasTooLowError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ maxPriorityFeePerGas }){
        super("`maxFeePerGas` cannot be less than the `maxPriorityFeePerGas` (".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatGwei$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatGwei"])(maxPriorityFeePerGas), " gwei)."), {
            name: 'MaxFeePerGasTooLowError'
        });
    }
} //# sourceMappingURL=fee.js.map
}),
"[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/block.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "BlockNotFoundError": ()=>BlockNotFoundError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
;
class BlockNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ blockHash, blockNumber }){
        let identifier = 'Block';
        if (blockHash) identifier = 'Block at hash "'.concat(blockHash, '"');
        if (blockNumber) identifier = 'Block at number "'.concat(blockNumber, '"');
        super("".concat(identifier, " could not be found."), {
            name: 'BlockNotFoundError'
        });
    }
} //# sourceMappingURL=block.js.map
}),
"[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/blob.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "BlobSizeTooLargeError": ()=>BlobSizeTooLargeError,
    "EmptyBlobError": ()=>EmptyBlobError,
    "InvalidVersionedHashSizeError": ()=>InvalidVersionedHashSizeError,
    "InvalidVersionedHashVersionError": ()=>InvalidVersionedHashVersionError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$kzg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/constants/kzg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
;
;
class BlobSizeTooLargeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ maxSize, size }){
        super('Blob size is too large.', {
            metaMessages: [
                "Max: ".concat(maxSize, " bytes"),
                "Given: ".concat(size, " bytes")
            ],
            name: 'BlobSizeTooLargeError'
        });
    }
}
class EmptyBlobError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Blob data must not be empty.', {
            name: 'EmptyBlobError'
        });
    }
}
class InvalidVersionedHashSizeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ hash, size }){
        super('Versioned hash "'.concat(hash, '" size is invalid.'), {
            metaMessages: [
                'Expected: 32',
                "Received: ".concat(size)
            ],
            name: 'InvalidVersionedHashSizeError'
        });
    }
}
class InvalidVersionedHashVersionError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ hash, version }){
        super('Versioned hash "'.concat(hash, '" version is invalid.'), {
            metaMessages: [
                "Expected: ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$kzg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["versionedHashVersionKzg"]),
                "Received: ".concat(version)
            ],
            name: 'InvalidVersionedHashVersionError'
        });
    }
} //# sourceMappingURL=blob.js.map
}),
"[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/eip712.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Eip712DomainNotFoundError": ()=>Eip712DomainNotFoundError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
;
class Eip712DomainNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ address }){
        super('No EIP-712 domain found on contract "'.concat(address, '".'), {
            metaMessages: [
                'Ensure that:',
                '- The contract is deployed at the address "'.concat(address, '".'),
                '- `eip712Domain()` function exists on the contract.',
                '- `eip712Domain()` function matches signature to ERC-5267 specification.'
            ],
            name: 'Eip712DomainNotFoundError'
        });
    }
} //# sourceMappingURL=eip712.js.map
}),
"[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/typedData.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "InvalidDomainError": ()=>InvalidDomainError,
    "InvalidPrimaryTypeError": ()=>InvalidPrimaryTypeError,
    "InvalidStructTypeError": ()=>InvalidStructTypeError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/stringify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
;
;
class InvalidDomainError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ domain }){
        super('Invalid domain "'.concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(domain), '".'), {
            metaMessages: [
                'Must be a valid EIP-712 domain.'
            ]
        });
    }
}
class InvalidPrimaryTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ primaryType, types }){
        super("Invalid primary type `".concat(primaryType, "` must be one of `").concat(JSON.stringify(Object.keys(types)), "`."), {
            docsPath: '/api/glossary/Errors#typeddatainvalidprimarytypeerror',
            metaMessages: [
                'Check that the primary type is a key in `types`.'
            ]
        });
    }
}
class InvalidStructTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ type }){
        super('Struct type "'.concat(type, '" is invalid.'), {
            metaMessages: [
                'Struct type must not be a Solidity type.'
            ],
            name: 'InvalidStructTypeError'
        });
    }
} //# sourceMappingURL=typedData.js.map
}),
"[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/account.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "AccountNotFoundError": ()=>AccountNotFoundError,
    "AccountTypeNotSupportedError": ()=>AccountTypeNotSupportedError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.30.0_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
;
class AccountNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ docsPath } = {}){
        super([
            'Could not find an Account to execute with this Action.',
            'Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.'
        ].join('\n'), {
            docsPath,
            docsSlug: 'account',
            name: 'AccountNotFoundError'
        });
    }
}
class AccountTypeNotSupportedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$30$2e$0_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ docsPath, metaMessages, type }){
        super('Account type "'.concat(type, '" is not supported.'), {
            docsPath,
            metaMessages,
            name: 'AccountTypeNotSupportedError'
        });
    }
} //# sourceMappingURL=account.js.map
}),
}]);

//# sourceMappingURL=f33d5_viem__esm_errors_ba989522._.js.map