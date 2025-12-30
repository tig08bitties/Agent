(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/utils/error.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "serializeError": ()=>serializeError
});
const serializeError = async (error)=>{
    // Find first Error or create an "unknown" Error to keep stack trace.
    const isError = error instanceof Error;
    const isString = typeof error === "string";
    const isApiErrorIndex = error && typeof error === "object" && "status" in error && "type" in error;
    let err;
    if (isApiErrorIndex) {
        const apiError = error;
        const contentType = apiError.headers.get("content-type");
        if (contentType.includes("application/json")) {
            const errJson = await apiError.json();
            err = new Error((errJson === null || errJson === void 0 ? void 0 : errJson.error) || (errJson === null || errJson === void 0 ? void 0 : errJson.message) || JSON.stringify(errJson));
        } else if (contentType.includes("text/plain")) {
            err = new Error(await apiError.text());
        } else {
            err = new Error("".concat(apiError.status, " ").concat(apiError.type.toString(), " ").concat(apiError.statusText));
        }
    } else if (isString) {
        err = new Error(error);
    } else if (isError) {
        err = error;
    } else {
        err = new Error("Unknown error");
    }
    return err;
};
;
}),
"[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/utils/enums.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "AUTH_CONNECTION": ()=>AUTH_CONNECTION,
    "REDIRECT_PARAMS_STORAGE_METHOD": ()=>REDIRECT_PARAMS_STORAGE_METHOD,
    "SENTRY_TXNS": ()=>SENTRY_TXNS,
    "UX_MODE": ()=>UX_MODE
});
const AUTH_CONNECTION = {
    // start - byoa
    GOOGLE: "google",
    TWITTER: "twitter",
    FACEBOOK: "facebook",
    DISCORD: "discord",
    FARCASTER: "farcaster",
    APPLE: "apple",
    GITHUB: "github",
    REDDIT: "reddit",
    LINE: "line",
    KAKAO: "kakao",
    LINKEDIN: "linkedin",
    TWITCH: "twitch",
    TELEGRAM: "telegram",
    WECHAT: "wechat",
    EMAIL_PASSWORDLESS: "email_passwordless",
    SMS_PASSWORDLESS: "sms_passwordless",
    // end - byoa
    CUSTOM: "custom",
    PASSKEYS: "passkeys",
    AUTHENTICATOR: "authenticator"
};
const UX_MODE = {
    POPUP: "popup",
    REDIRECT: "redirect"
};
const REDIRECT_PARAMS_STORAGE_METHOD = {
    LOCAL_STORAGE: "localStorage",
    SESSION_STORAGE: "sessionStorage",
    SERVER: "server"
};
const SENTRY_TXNS = {
    FETCH_NODE_DETAILS: "fetchNodeDetails",
    PUB_ADDRESS_LOOKUP: "pubAddressLookup",
    FETCH_SHARES: "fetchShares"
};
;
}),
"[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/utils/loglevel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>log
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$loglevel$40$1$2e$9$2e$2$2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/loglevel@1.9.2/node_modules/loglevel/lib/loglevel.js [app-client] (ecmascript)");
;
var log = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$loglevel$40$1$2e$9$2e$2$2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getLogger("customauth");
;
}),
"[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/utils/helpers.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "broadcastChannelOptions": ()=>broadcastChannelOptions,
    "constructURL": ()=>constructURL,
    "decodeToken": ()=>decodeToken,
    "eventToPromise": ()=>eventToPromise,
    "getPopupFeatures": ()=>getPopupFeatures,
    "getTimeout": ()=>getTimeout,
    "getUserId": ()=>getUserId,
    "handleRedirectParameters": ()=>handleRedirectParameters,
    "isFirefox": ()=>isFirefox,
    "isMobileOrTablet": ()=>isMobileOrTablet,
    "loginToConnectionMap": ()=>loginToConnectionMap,
    "objectToAuthDataMap": ()=>objectToAuthDataMap,
    "padUrlString": ()=>padUrlString,
    "randomId": ()=>randomId,
    "storageAvailable": ()=>storageAvailable,
    "validateAndConstructUrl": ()=>validateAndConstructUrl
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$base64url$40$3$2e$0$2e$1$2f$node_modules$2f$base64url$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/base64url@3.0.1/node_modules/base64url/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bowser$40$2$2e$13$2e$1$2f$node_modules$2f$bowser$2f$es5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/bowser@2.13.1/node_modules/bowser/es5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/utils/enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/utils/loglevel.js [app-client] (ecmascript)");
;
;
;
;
function eventToPromise(emitter) {
    return new Promise((resolve, reject)=>{
        const handler = (ev)=>{
            const { error = "", data } = ev;
            emitter.removeEventListener("message", handler);
            if (error) return reject(new Error(error));
            return resolve(data);
        };
        emitter.addEventListener("message", handler);
    });
}
// These are the default connection names used by auth0
const loginToConnectionMap = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].APPLE]: "apple",
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].GITHUB]: "github",
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].LINKEDIN]: "linkedin",
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].TWITTER]: "twitter",
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].LINE]: "line",
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].EMAIL_PASSWORDLESS]: "email",
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].SMS_PASSWORDLESS]: "sms"
};
const padUrlString = (url)=>url.href.endsWith("/") ? url.href : "".concat(url.href, "/");
/**
 * Returns a random number. Don't use for cryptographic purposes.
 * @returns a random number
 */ const randomId = ()=>Math.random().toString(36).slice(2);
const broadcastChannelOptions = {
    // type: 'localstorage', // (optional) enforce a type, oneOf['native', 'idb', 'localstorage', 'node']
    webWorkerSupport: false // (optional) set this to false if you know that your channel will never be used in a WebWorker (increases performance)
};
function caseSensitiveField(field, isCaseSensitive) {
    return isCaseSensitive ? field : field.toLowerCase();
}
const getUserId = function(userInfo, authConnection, userIdField) {
    let isUserIdCaseSensitive = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
    const { name, sub } = userInfo;
    if (userIdField) return caseSensitiveField(userInfo[userIdField], isUserIdCaseSensitive);
    switch(authConnection){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].EMAIL_PASSWORDLESS:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].SMS_PASSWORDLESS:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].AUTHENTICATOR:
            return caseSensitiveField(name, isUserIdCaseSensitive);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].GITHUB:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].TWITTER:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].APPLE:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].LINKEDIN:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].LINE:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].WECHAT:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].KAKAO:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].FARCASTER:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].CUSTOM:
            return caseSensitiveField(sub, isUserIdCaseSensitive);
        default:
            throw new Error("Invalid login type to get auth connection id");
    }
};
const handleRedirectParameters = (hash, queryParameters)=>{
    const hashParameters = hash.split("&").reduce((result, item)=>{
        const [part0, part1] = item.split("=");
        result[part0] = part1;
        return result;
    }, {});
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].info(hashParameters, queryParameters);
    let instanceParameters = {};
    let error = "";
    if (Object.keys(hashParameters).length > 0 && hashParameters.state) {
        instanceParameters = JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$base64url$40$3$2e$0$2e$1$2f$node_modules$2f$base64url$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].decode(decodeURIComponent(decodeURIComponent(hashParameters.state)))) || {};
        error = hashParameters.error_description || hashParameters.error || error;
    } else if (Object.keys(queryParameters).length > 0 && queryParameters.state) {
        instanceParameters = JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$base64url$40$3$2e$0$2e$1$2f$node_modules$2f$base64url$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].decode(decodeURIComponent(decodeURIComponent(queryParameters.state)))) || {};
        if (queryParameters.error) error = queryParameters.error;
    }
    return {
        error,
        instanceParameters,
        hashParameters
    };
};
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (error) {
        const e = error;
        return e && (// everything except Firefox
        e.code === 22 || // Firefox
        e.code === 1014 || // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" || // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") && // acknowledge QuotaExceededError only if there's something already stored
        storage && storage.length !== 0;
    }
}
function getPopupFeatures() {
    // Fixes dual-screen position                             Most browsers      Firefox
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
    const w = 1200;
    const h = 700;
    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : window.screen.width;
    const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : window.screen.height;
    const systemZoom = 1; // No reliable estimate
    const left = Math.abs((width - w) / 2 / systemZoom + dualScreenLeft);
    const top = Math.abs((height - h) / 2 / systemZoom + dualScreenTop);
    const features = "titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=".concat(h / systemZoom, ",width=").concat(w / systemZoom, ",top=").concat(top, ",left=").concat(left);
    return features;
}
const isFirefox = ()=>{
    var _window;
    return ((_window = window) === null || _window === void 0 || (_window = _window.navigator) === null || _window === void 0 ? void 0 : _window.userAgent.toLowerCase().indexOf("firefox")) > -1 || false;
};
function constructURL(params) {
    const { baseURL, query, hash } = params;
    const url = new URL(baseURL);
    if (query) {
        Object.keys(query).forEach((key)=>{
            url.searchParams.append(key, query[key]);
        });
    }
    if (hash) {
        const h = new URL(constructURL({
            baseURL,
            query: hash
        })).searchParams.toString();
        url.hash = h;
    }
    return url.toString();
}
// export function are3PCSupported(): boolean {
//   const browserInfo = Bowser.parse(navigator.userAgent);
//   log.info(JSON.stringify(browserInfo), "current browser info");
//   let thirdPartyCookieSupport = true;
//   // brave
//   if ((navigator as unknown as { brave: boolean })?.brave) {
//     thirdPartyCookieSupport = false;
//   }
//   // All webkit & gecko engine instances use itp (intelligent tracking prevention -
//   // https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp)
//   if (browserInfo.engine.name === Bowser.ENGINE_MAP.WebKit || browserInfo.engine.name === Bowser.ENGINE_MAP.Gecko) {
//     thirdPartyCookieSupport = false;
//   }
//   return thirdPartyCookieSupport;
// }
const validateAndConstructUrl = (domain)=>{
    try {
        const url = new URL(decodeURIComponent(domain));
        return url;
    } catch (error) {
        throw new Error("".concat((error === null || error === void 0 ? void 0 : error.message) || "", ", Note: Your jwt domain: (i.e ").concat(domain, ") must have http:// or https:// prefix"));
    }
};
const objectToAuthDataMap = (tgAuthenticationResult)=>{
    return JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$base64url$40$3$2e$0$2e$1$2f$node_modules$2f$base64url$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].decode(tgAuthenticationResult));
};
function isMobileOrTablet() {
    const browser = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bowser$40$2$2e$13$2e$1$2f$node_modules$2f$bowser$2f$es5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getParser(navigator.userAgent);
    const platform = browser.getPlatform();
    return platform.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bowser$40$2$2e$13$2e$1$2f$node_modules$2f$bowser$2f$es5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PLATFORMS_MAP.tablet || platform.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bowser$40$2$2e$13$2e$1$2f$node_modules$2f$bowser$2f$es5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PLATFORMS_MAP.mobile;
}
function getTimeout(authConnection) {
    if ((authConnection === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].FACEBOOK || authConnection === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].LINE) && isMobileOrTablet()) {
        return 1000 * 30; // 30 seconds to finish the login
    }
    return 1000 * 1; // 1 second
}
function decodeToken(token) {
    const [header, payload] = token.split(".");
    return {
        header: JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$base64url$40$3$2e$0$2e$1$2f$node_modules$2f$base64url$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].decode(header)),
        payload: JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$base64url$40$3$2e$0$2e$1$2f$node_modules$2f$base64url$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].decode(payload))
    };
}
;
}),
"[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/utils/PopupHandler.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "PopupHandler": ()=>PopupHandler
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$events$40$3$2e$3$2e$0$2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/events@3.3.0/node_modules/events/events.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/utils/helpers.js [app-client] (ecmascript)");
;
;
;
class PopupHandler extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$events$40$3$2e$3$2e$0$2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventEmitter"] {
    _setupTimer() {
        this.windowTimer = Number(setInterval(()=>{
            if (this.window && this.window.closed) {
                clearInterval(this.windowTimer);
                setTimeout(()=>{
                    if (!this.iClosedWindow) {
                        this.emit("close");
                    }
                    this.iClosedWindow = false;
                    this.window = undefined;
                }, this.timeout);
            }
            if (this.window === undefined) clearInterval(this.windowTimer);
        }, 500));
    }
    open() {
        var _this$window;
        this.window = window.open(this.url.href, this.target, this.features);
        if (!this.window) throw new Error("popup window is blocked");
        if ((_this$window = this.window) !== null && _this$window !== void 0 && _this$window.focus) this.window.focus();
        return Promise.resolve();
    }
    close() {
        this.iClosedWindow = true;
        if (this.window) this.window.close();
    }
    redirect(locationReplaceOnRedirect) {
        if (locationReplaceOnRedirect) {
            window.location.replace(this.url.href);
        } else {
            window.location.href = this.url.href;
        }
    }
    constructor({ url, target, features, timeout = 30000 }){
        super();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "url", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "target", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "features", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "window", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "windowTimer", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "iClosedWindow", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "timeout", void 0);
        this.url = url;
        this.target = target || "_blank";
        this.features = features || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPopupFeatures"])();
        this.window = undefined;
        this.windowTimer = undefined;
        this.iClosedWindow = false;
        this.timeout = timeout;
        this._setupTimer();
    }
}
;
}),
"[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/AbstractLoginHandler.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>AbstractLoginHandler
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$base64url$40$3$2e$0$2e$1$2f$node_modules$2f$base64url$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/base64url@3.0.1/node_modules/base64url/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/utils/enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/utils/helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/utils/loglevel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$PopupHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/utils/PopupHandler.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const _excluded = [
    "access_token",
    "id_token"
];
class AbstractLoginHandler {
    get state() {
        return encodeURIComponent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$base64url$40$3$2e$0$2e$1$2f$node_modules$2f$base64url$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].encode(JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, this.params.customState || {}), {}, {
            instanceId: this.nonce,
            authConnectionId: this.params.authConnectionId,
            authConnection: this.params.authConnection,
            groupedAuthConnectionId: this.params.groupedAuthConnectionId,
            redirectToOpener: this.params.redirectToOpener || false
        }))));
    }
    async handleLoginWindow(params) {
        const authConnectionWindow = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$PopupHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopupHandler"]({
            url: this.finalURL,
            features: params.popupFeatures,
            timeout: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimeout"])(this.params.authConnection)
        });
        if (this.params.uxMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UX_MODE"].REDIRECT) {
            authConnectionWindow.redirect(params.locationReplaceOnRedirect);
        } else {
            const { RedundantAdaptiveBroadcastChannel: BroadcastChannel } = await __turbopack_context__.r("[project]/node_modules/.pnpm/@toruslabs+broadcast-channel@12.0.0_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/broadcast-channel/dist/lib.esm/index.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
            return new Promise((resolve, reject)=>{
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                let bc;
                const handleData = async (ev)=>{
                    try {
                        const { error, data } = ev;
                        const _ref = data || {}, { instanceParams, hashParams: { access_token: accessToken, id_token: idToken } } = _ref, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_ref.hashParams, _excluded);
                        if (error) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(ev);
                            reject(new Error("Error: ".concat(error, ". Info: ").concat(JSON.stringify(ev.data || {}))));
                            return;
                        }
                        if (ev.data && instanceParams.authConnectionId === this.params.authConnectionId) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].info(ev.data);
                            if (!this.params.redirectToOpener && bc) await bc.postMessage({
                                success: true
                            });
                            resolve((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                                accessToken,
                                idToken: idToken || ""
                            }, rest), {}, {
                                // State has to be last here otherwise it will be overwritten
                                state: instanceParams
                            }));
                        }
                    } catch (error) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(error);
                        reject(error);
                    }
                };
                if (!this.params.redirectToOpener) {
                    bc = new BroadcastChannel("redirect_channel_".concat(this.nonce), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["broadcastChannelOptions"]);
                    bc.addEventListener("message", async (ev)=>{
                        await handleData(ev);
                        bc.close();
                        authConnectionWindow.close();
                    });
                } else {
                    const postMessageEventHandler = async (postMessageEvent)=>{
                        if (!postMessageEvent.data) return;
                        const ev = postMessageEvent.data;
                        if (ev.channel !== "redirect_channel_".concat(this.nonce)) return;
                        window.removeEventListener("message", postMessageEventHandler);
                        handleData(ev);
                        authConnectionWindow.close();
                    };
                    window.addEventListener("message", postMessageEventHandler);
                }
                try {
                    authConnectionWindow.open();
                } catch (error) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(error);
                    reject(error);
                    return;
                }
                authConnectionWindow.once("close", ()=>{
                    if (bc) bc.close();
                    reject(new Error("user closed popup"));
                });
            });
        }
        return null;
    }
    // Not using object constructor because of this issue
    // https://github.com/microsoft/TypeScript/issues/5326
    constructor(params){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "nonce", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomId"])());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "finalURL", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "params", void 0);
        this.params = params;
    }
}
;
}),
"[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/DiscordHandler.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>DiscordHandler
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$http$2d$helpers$40$8$2e$1$2e$1_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0$2f$node_modules$2f40$toruslabs$2f$http$2d$helpers$2f$dist$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+http-helpers@8.1.1_@babel+runtime@7.28.4_@sentry+core@9.22.0/node_modules/@toruslabs/http-helpers/dist/lib.esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$AbstractLoginHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/AbstractLoginHandler.js [app-client] (ecmascript)");
;
;
;
;
class DiscordHandler extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$AbstractLoginHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    setFinalUrl() {
        const finalUrl = new URL("https://discord.com/api/oauth2/authorize");
        const clonedParams = JSON.parse(JSON.stringify(this.params.jwtParams || {}));
        const finalJwtParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            state: this.state,
            response_type: this.RESPONSE_TYPE,
            client_id: this.params.clientId,
            redirect_uri: this.params.redirect_uri,
            scope: this.SCOPE
        }, clonedParams);
        Object.keys(finalJwtParams).forEach((key)=>{
            const localKey = key;
            if (finalJwtParams[localKey]) finalUrl.searchParams.append(localKey, finalJwtParams[localKey]);
        });
        this.finalURL = finalUrl;
    }
    async getUserInfo(params) {
        const { accessToken } = params;
        const userInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$http$2d$helpers$40$8$2e$1$2e$1_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0$2f$node_modules$2f40$toruslabs$2f$http$2d$helpers$2f$dist$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])("https://discord.com/api/users/@me", {
            headers: {
                Authorization: "Bearer ".concat(accessToken)
            }
        });
        const { id, avatar, email = "", username: name = "", discriminator = "" } = userInfo;
        const profileImage = avatar === null ? "https://cdn.discordapp.com/embed/avatars/".concat(Number(discriminator) % 5, ".png") : "https://cdn.discordapp.com/avatars/".concat(id, "/").concat(avatar, ".png?size=2048");
        return {
            profileImage,
            name: "".concat(name, "#").concat(discriminator),
            email,
            userId: id,
            authConnectionId: this.params.authConnectionId,
            authConnection: this.params.authConnection,
            groupedAuthConnectionId: this.params.groupedAuthConnectionId
        };
    }
    constructor(params){
        super(params);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "RESPONSE_TYPE", "token");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "SCOPE", "identify email");
        this.setFinalUrl();
    }
}
;
}),
"[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/FacebookHandler.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>FacebookHandler
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$http$2d$helpers$40$8$2e$1$2e$1_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0$2f$node_modules$2f40$toruslabs$2f$http$2d$helpers$2f$dist$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+http-helpers@8.1.1_@babel+runtime@7.28.4_@sentry+core@9.22.0/node_modules/@toruslabs/http-helpers/dist/lib.esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$AbstractLoginHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/AbstractLoginHandler.js [app-client] (ecmascript)");
;
;
;
;
class FacebookHandler extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$AbstractLoginHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    setFinalUrl() {
        const finalUrl = new URL("https://www.facebook.com/v20.0/dialog/oauth");
        const clonedParams = JSON.parse(JSON.stringify(this.params.jwtParams || {}));
        const finalJwtParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            state: this.state,
            response_type: this.RESPONSE_TYPE,
            client_id: this.params.clientId,
            redirect_uri: this.params.redirect_uri,
            scope: this.SCOPE
        }, clonedParams);
        Object.keys(finalJwtParams).forEach((key)=>{
            const localKey = key;
            if (finalJwtParams[localKey]) finalUrl.searchParams.append(localKey, finalJwtParams[localKey]);
        });
        this.finalURL = finalUrl;
    }
    async getUserInfo(params) {
        const { accessToken } = params;
        const userInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$http$2d$helpers$40$8$2e$1$2e$1_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0$2f$node_modules$2f40$toruslabs$2f$http$2d$helpers$2f$dist$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])("https://graph.facebook.com/me?fields=name,email,picture.type(large)", {
            headers: {
                Authorization: "Bearer ".concat(accessToken)
            }
        });
        const { name = "", id, picture, email = "" } = userInfo;
        return {
            email,
            name,
            profileImage: picture.data.url || "",
            authConnectionId: this.params.authConnectionId,
            authConnection: this.params.authConnection,
            groupedAuthConnectionId: this.params.groupedAuthConnectionId,
            userId: id
        };
    }
    constructor(params){
        super(params);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "RESPONSE_TYPE", "token");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "SCOPE", "public_profile email");
        this.setFinalUrl();
    }
}
;
}),
"[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/GoogleHandler.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>GoogleHandler
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$http$2d$helpers$40$8$2e$1$2e$1_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0$2f$node_modules$2f40$toruslabs$2f$http$2d$helpers$2f$dist$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+http-helpers@8.1.1_@babel+runtime@7.28.4_@sentry+core@9.22.0/node_modules/@toruslabs/http-helpers/dist/lib.esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$AbstractLoginHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/AbstractLoginHandler.js [app-client] (ecmascript)");
;
;
;
;
class GoogleHandler extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$AbstractLoginHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    setFinalUrl() {
        const finalUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
        const clonedParams = JSON.parse(JSON.stringify(this.params.jwtParams || {}));
        const finalJwtParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            state: this.state,
            response_type: this.RESPONSE_TYPE,
            client_id: this.params.clientId,
            prompt: this.PROMPT,
            redirect_uri: this.params.redirect_uri,
            scope: this.SCOPE,
            nonce: this.nonce
        }, clonedParams);
        Object.keys(finalJwtParams).forEach((key)=>{
            const localKey = key;
            if (finalJwtParams[localKey]) finalUrl.searchParams.append(localKey, finalJwtParams[localKey]);
        });
        this.finalURL = finalUrl;
    }
    async getUserInfo(params) {
        const { accessToken } = params;
        const userInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$http$2d$helpers$40$8$2e$1$2e$1_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0$2f$node_modules$2f40$toruslabs$2f$http$2d$helpers$2f$dist$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])("https://www.googleapis.com/userinfo/v2/me", {
            headers: {
                Authorization: "Bearer ".concat(accessToken)
            }
        });
        const { picture: profileImage = "", email = "", name = "" } = userInfo;
        return {
            email,
            name,
            profileImage,
            authConnectionId: this.params.authConnectionId,
            authConnection: this.params.authConnection,
            groupedAuthConnectionId: this.params.groupedAuthConnectionId,
            userId: email.toLowerCase()
        };
    }
    constructor(params){
        super(params);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "RESPONSE_TYPE", "token id_token");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "SCOPE", "profile email openid");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "PROMPT", "select_account");
        this.setFinalUrl();
    }
}
;
}),
"[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/JwtHandler.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>JwtHandler
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$http$2d$helpers$40$8$2e$1$2e$1_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0$2f$node_modules$2f40$toruslabs$2f$http$2d$helpers$2f$dist$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+http-helpers@8.1.1_@babel+runtime@7.28.4_@sentry+core@9.22.0/node_modules/@toruslabs/http-helpers/dist/lib.esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$loglevel$40$1$2e$9$2e$2$2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/loglevel@1.9.2/node_modules/loglevel/lib/loglevel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/utils/helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$AbstractLoginHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/AbstractLoginHandler.js [app-client] (ecmascript)");
;
;
;
;
;
;
class JwtHandler extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$AbstractLoginHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    setFinalUrl() {
        const { domain } = this.params.jwtParams;
        const finalUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateAndConstructUrl"])(domain);
        finalUrl.pathname += finalUrl.pathname.endsWith("/") ? "authorize" : "/authorize";
        const clonedParams = JSON.parse(JSON.stringify(this.params.jwtParams));
        delete clonedParams.domain;
        const finalJwtParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            state: this.state,
            response_type: this.RESPONSE_TYPE,
            client_id: this.params.clientId,
            prompt: this.PROMPT,
            redirect_uri: this.params.redirect_uri,
            scope: this.SCOPE,
            connection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginToConnectionMap"][this.params.authConnection],
            nonce: this.nonce
        }, clonedParams);
        Object.keys(finalJwtParams).forEach((key)=>{
            const localKey = key;
            if (finalJwtParams[localKey]) finalUrl.searchParams.append(localKey, finalJwtParams[localKey]);
        });
        this.finalURL = finalUrl;
    }
    async getUserInfo(params) {
        const { idToken, accessToken } = params;
        const { domain, userIdField, isUserIdCaseSensitive, user_info_route = "userinfo" } = this.params.jwtParams;
        if (idToken) {
            const decodedToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeToken"])(idToken).payload;
            const { name, email, picture } = decodedToken;
            return {
                profileImage: picture,
                name,
                email,
                userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserId"])(decodedToken, this.params.authConnection, userIdField, isUserIdCaseSensitive),
                authConnectionId: this.params.authConnectionId,
                authConnection: this.params.authConnection,
                groupedAuthConnectionId: this.params.groupedAuthConnectionId
            };
        }
        if (accessToken) {
            try {
                const domainUrl = new URL(domain);
                const userInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$http$2d$helpers$40$8$2e$1$2e$1_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0$2f$node_modules$2f40$toruslabs$2f$http$2d$helpers$2f$dist$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])("".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padUrlString"])(domainUrl)).concat(user_info_route), {
                    headers: {
                        Authorization: "Bearer ".concat(accessToken)
                    }
                });
                const { picture, name, email } = userInfo;
                return {
                    email,
                    name,
                    profileImage: picture,
                    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserId"])(userInfo, this.params.authConnection, userIdField, isUserIdCaseSensitive),
                    authConnectionId: this.params.authConnectionId,
                    authConnection: this.params.authConnection,
                    groupedAuthConnectionId: this.params.groupedAuthConnectionId
                };
            } catch (error) {
                // ignore
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$loglevel$40$1$2e$9$2e$2$2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].warn(error, "Unable to get userinfo from endpoint");
            }
        }
        throw new Error("Access/id token not available");
    }
    constructor(params){
        super(params);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "SCOPE", "openid profile email");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "RESPONSE_TYPE", "token id_token");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "PROMPT", "login");
        this.setFinalUrl();
    }
}
;
}),
"[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/MockLoginHandler.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>MockLoginHandler
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$http$2d$helpers$40$8$2e$1$2e$1_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0$2f$node_modules$2f40$toruslabs$2f$http$2d$helpers$2f$dist$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+http-helpers@8.1.1_@babel+runtime@7.28.4_@sentry+core@9.22.0/node_modules/@toruslabs/http-helpers/dist/lib.esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$loglevel$40$1$2e$9$2e$2$2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/loglevel@1.9.2/node_modules/loglevel/lib/loglevel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/utils/enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/utils/helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$PopupHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/utils/PopupHandler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$AbstractLoginHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/AbstractLoginHandler.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
class MockLoginHandler extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$AbstractLoginHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    setFinalUrl() {
        const clonedParams = JSON.parse(JSON.stringify(this.params.jwtParams));
        delete clonedParams.domain;
        const finalJwtParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            state: this.state,
            client_id: this.params.clientId,
            nonce: this.nonce
        }, clonedParams);
        this.finalURL = new URL((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructURL"])({
            baseURL: this.params.redirect_uri,
            query: null,
            hash: finalJwtParams
        }));
    }
    async getUserInfo(params) {
        const { idToken, accessToken } = params;
        const { domain, userIdField, isUserIdCaseSensitive, user_info_route = "userinfo" } = this.params.jwtParams;
        if (idToken) {
            const decodedToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeToken"])(idToken).payload;
            const { name, email, picture } = decodedToken;
            return {
                profileImage: picture,
                name,
                email,
                userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserId"])(decodedToken, this.params.authConnection, userIdField, isUserIdCaseSensitive),
                authConnectionId: this.params.authConnectionId,
                authConnection: this.params.authConnection,
                groupedAuthConnectionId: this.params.groupedAuthConnectionId
            };
        }
        if (accessToken) {
            try {
                const domainUrl = new URL(domain);
                const userInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$http$2d$helpers$40$8$2e$1$2e$1_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0$2f$node_modules$2f40$toruslabs$2f$http$2d$helpers$2f$dist$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])("".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padUrlString"])(domainUrl)).concat(user_info_route), {
                    headers: {
                        Authorization: "Bearer ".concat(accessToken)
                    }
                });
                const { picture, name, email } = userInfo;
                return {
                    email,
                    name,
                    profileImage: picture,
                    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserId"])(userInfo, this.params.authConnection, userIdField, isUserIdCaseSensitive),
                    authConnectionId: this.params.authConnectionId,
                    authConnection: this.params.authConnection,
                    groupedAuthConnectionId: this.params.groupedAuthConnectionId
                };
            } catch (error) {
                // ignore
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$loglevel$40$1$2e$9$2e$2$2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].warn(error, "Unable to get userinfo from endpoint");
            }
        }
        throw new Error("Access/id token not available");
    }
    handleLoginWindow(params) {
        const { id_token: idToken, access_token: accessToken } = this.params.jwtParams;
        const authConnectionWindow = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$PopupHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopupHandler"]({
            url: this.finalURL,
            features: params.popupFeatures
        });
        if (this.params.uxMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UX_MODE"].REDIRECT) {
            authConnectionWindow.redirect(params.locationReplaceOnRedirect);
        } else {
            return Promise.resolve({
                state: {},
                idToken,
                accessToken
            });
        }
        return null;
    }
    constructor(params){
        super(params);
        this.setFinalUrl();
    }
}
;
}),
"[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/utils/sessionHelper.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "fetchDataFromBroadcastServer": ()=>fetchDataFromBroadcastServer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$session$2d$manager$40$4$2e$0$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0$2f$node_modules$2f40$toruslabs$2f$session$2d$manager$2f$dist$2f$lib$2e$esm$2f$sessionManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+session-manager@4.0.2_@babel+runtime@7.28.4_@sentry+core@9.22.0/node_modules/@toruslabs/session-manager/dist/lib.esm/sessionManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$loglevel$40$1$2e$9$2e$2$2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/loglevel@1.9.2/node_modules/loglevel/lib/loglevel.js [app-client] (ecmascript)");
;
;
async function fetchDataFromBroadcastServer(identifier, storageServerUrl) {
    try {
        const configManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$session$2d$manager$40$4$2e$0$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0$2f$node_modules$2f40$toruslabs$2f$session$2d$manager$2f$dist$2f$lib$2e$esm$2f$sessionManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionManager"]({
            sessionId: identifier,
            sessionServerBaseUrl: storageServerUrl,
            allowedOrigin: true
        });
        const data = await configManager.authorizeSession();
        return data;
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$loglevel$40$1$2e$9$2e$2$2f$node_modules$2f$loglevel$2f$lib$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("fetch data from storage server error", error);
        throw new Error("Unable to retrieve data from storage server, invalid key or key expired.");
    }
}
;
}),
"[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/PasskeysHandler.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>PasskeysHandler
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$base64url$40$3$2e$0$2e$1$2f$node_modules$2f$base64url$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/base64url@3.0.1/node_modules/base64url/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$sessionHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/utils/sessionHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$AbstractLoginHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/AbstractLoginHandler.js [app-client] (ecmascript)");
;
;
;
;
class PasskeysHandler extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$AbstractLoginHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    setFinalUrl() {
        const { passkeysHostUrl } = this.params.customState || {};
        if (!passkeysHostUrl) throw new Error("Invalid passkeys url.");
        const finalUrl = new URL(passkeysHostUrl);
        const clonedParams = JSON.parse(JSON.stringify(this.params.jwtParams || {}));
        const finalJwtParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            state: this.state,
            client_id: this.params.clientId,
            redirect_uri: this.params.redirect_uri
        }, clonedParams);
        Object.keys(finalJwtParams).forEach((key)=>{
            const localKey = key;
            if (finalJwtParams[localKey]) finalUrl.searchParams.append(localKey, finalJwtParams[localKey]);
        });
        this.finalURL = finalUrl;
    }
    async getUserInfo(parameters, storageServerUrl) {
        const { idToken, extraParams } = parameters;
        const { sessionId } = JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$base64url$40$3$2e$0$2e$1$2f$node_modules$2f$base64url$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].decode(extraParams)) || {};
        if (!sessionId) {
            throw new Error("sessionId not found");
        }
        const { verifier_id: verifierId, signature, clientDataJSON, authenticatorData, publicKey, challenge, rpOrigin, rpId, credId, transports, username } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$sessionHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDataFromBroadcastServer"])(sessionId, storageServerUrl);
        if (signature !== idToken) {
            throw new Error("idtoken should be equal to signature");
        }
        return {
            email: "",
            name: "Passkeys Login",
            profileImage: "",
            authConnectionId: this.params.authConnectionId,
            userId: verifierId,
            authConnection: this.params.authConnection,
            groupedAuthConnectionId: this.params.groupedAuthConnectionId,
            extraConnectionParams: {
                signature,
                clientDataJSON,
                authenticatorData,
                publicKey,
                challenge,
                rpOrigin,
                rpId,
                credId,
                transports,
                username
            }
        };
    }
    constructor(params){
        super(params);
        this.setFinalUrl();
    }
}
;
}),
"[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/TelegramHandler.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>TelegramHandler
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$base64url$40$3$2e$0$2e$1$2f$node_modules$2f$base64url$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/base64url@3.0.1/node_modules/base64url/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/utils/enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/utils/helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/utils/loglevel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$PopupHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/utils/PopupHandler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$AbstractLoginHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/AbstractLoginHandler.js [app-client] (ecmascript)");
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
const _excluded = [
    "event",
    "origin",
    "result"
];
class TelegramHandler extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$AbstractLoginHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    setFinalUrl() {
        const { domain } = this.params.jwtParams;
        const finalUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateAndConstructUrl"])(domain || "https://oauth.telegram.org/auth");
        const clonedParams = JSON.parse(JSON.stringify(this.params.jwtParams || {}));
        clonedParams.origin = "".concat(this.params.redirect_uri, "?state=").concat(this.state, "&nonce=").concat(this.nonce);
        const finalJwtParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            state: this.state,
            response_type: this.RESPONSE_TYPE,
            bot_id: this.params.clientId,
            prompt: this.PROMPT,
            redirect_uri: "".concat(this.params.redirect_uri, "?state=").concat(this.state, "&nonce=").concat(this.nonce),
            scope: this.SCOPE,
            nonce: this.nonce
        }, clonedParams);
        Object.keys(finalJwtParams).forEach((key)=>{
            const localKey = key;
            if (finalJwtParams[localKey]) finalUrl.searchParams.append(localKey, finalJwtParams[localKey]);
        });
        this.finalURL = finalUrl;
    }
    async getUserInfo(params) {
        const { idToken } = params;
        const userInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectToAuthDataMap"])(idToken);
        const { photo_url: profileImage = "", first_name = "", last_name = "", id } = userInfo;
        return {
            email: "",
            // Telegram does not provide email
            name: "".concat(first_name, " ").concat(last_name),
            profileImage,
            authConnectionId: this.params.authConnectionId,
            userId: id.toString(),
            authConnection: this.params.authConnection,
            groupedAuthConnectionId: this.params.groupedAuthConnectionId
        };
    }
    async handleLoginWindow(params) {
        const authConnectionWindow = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$PopupHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopupHandler"]({
            url: this.finalURL,
            features: params.popupFeatures,
            timeout: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimeout"])(this.params.authConnection)
        });
        if (this.params.uxMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UX_MODE"].REDIRECT) {
            authConnectionWindow.redirect(params.locationReplaceOnRedirect);
        } else {
            return new Promise((resolve, reject)=>{
                const handleData = async (ev)=>{
                    try {
                        const _ref = JSON.parse(ev) || {}, { event, origin, result } = _ref, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_ref, _excluded);
                        // 1. Parse URL
                        const parsedUrl = new URL(origin);
                        // 2. Get state param
                        const stateParam = parsedUrl.searchParams.get("state");
                        if (event && event === "auth_result") {
                            // properly resolve the data
                            resolve((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                                accessToken: ""
                            }, rest), {}, {
                                idToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$base64url$40$3$2e$0$2e$1$2f$node_modules$2f$base64url$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].encode(JSON.stringify(result)) || "",
                                state: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$base64url$40$3$2e$0$2e$1$2f$node_modules$2f$base64url$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].decode(stateParam)
                            }));
                        }
                    } catch (error) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(error);
                        reject(error);
                    }
                };
                const postMessageEventHandler = async (postMessageEvent)=>{
                    if (!postMessageEvent.data) {
                        throw new Error("Invalid data received");
                    }
                    if (this.finalURL.origin !== postMessageEvent.origin) {
                        throw new Error("Invalid origin received");
                    }
                    // make sure event is auth_result from telegram
                    const ev = postMessageEvent.data;
                    if (typeof ev != "string") {
                        throw new Error("Invalid data type received");
                    }
                    const { event } = JSON.parse(ev) || {};
                    if (event && event !== "auth_result") {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].info("Invalid event received");
                    }
                    window.removeEventListener("message", postMessageEventHandler);
                    handleData(ev);
                    authConnectionWindow.close();
                };
                window.addEventListener("message", postMessageEventHandler);
                try {
                    authConnectionWindow.open();
                } catch (error) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$loglevel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(error);
                    reject(error);
                    return;
                }
                authConnectionWindow.once("close", ()=>{
                    reject(new Error("user closed popup"));
                });
            });
        }
        return null;
    }
    constructor(params){
        super(params);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "RESPONSE_TYPE", "token");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "SCOPE", "profile");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "PROMPT", "select_account");
        this.setFinalUrl();
    }
}
;
}),
"[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/TwitchHandler.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>TwitchHandler
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$http$2d$helpers$40$8$2e$1$2e$1_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0$2f$node_modules$2f40$toruslabs$2f$http$2d$helpers$2f$dist$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+http-helpers@8.1.1_@babel+runtime@7.28.4_@sentry+core@9.22.0/node_modules/@toruslabs/http-helpers/dist/lib.esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$AbstractLoginHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/AbstractLoginHandler.js [app-client] (ecmascript)");
;
;
;
;
class TwitchHandler extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$AbstractLoginHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    setFinalUrl() {
        const finalUrl = new URL("https://id.twitch.tv/oauth2/authorize");
        const clonedParams = JSON.parse(JSON.stringify(this.params.jwtParams || {}));
        const finalJwtParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            state: this.state,
            response_type: this.RESPONSE_TYPE,
            client_id: this.params.clientId,
            redirect_uri: this.params.redirect_uri,
            scope: this.SCOPE,
            force_verify: "true"
        }, clonedParams);
        Object.keys(finalJwtParams).forEach((key)=>{
            const localKey = key;
            if (finalJwtParams[localKey]) finalUrl.searchParams.append(localKey, finalJwtParams[localKey]);
        });
        this.finalURL = finalUrl;
    }
    async getUserInfo(params) {
        const { accessToken } = params;
        const userInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$http$2d$helpers$40$8$2e$1$2e$1_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0$2f$node_modules$2f40$toruslabs$2f$http$2d$helpers$2f$dist$2f$lib$2e$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])("https://api.twitch.tv/helix/users", {
            headers: {
                Authorization: "Bearer ".concat(accessToken),
                "Client-ID": this.params.clientId
            }
        });
        const [{ profile_image_url: profileImage = "", display_name: name = "", email = "", id: userId }] = userInfo.data || [];
        return {
            profileImage,
            name,
            email,
            userId: userId,
            authConnectionId: this.params.authConnectionId,
            authConnection: this.params.authConnection,
            groupedAuthConnectionId: this.params.groupedAuthConnectionId
        };
    }
    constructor(params){
        super(params);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "RESPONSE_TYPE", "token");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "SCOPE", "user:read:email");
        this.setFinalUrl();
    }
}
;
}),
"[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/utils/interfaces.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// REGION: AUTH0 PARAMS
__turbopack_context__.s({
    "EMAIL_FLOW": ()=>EMAIL_FLOW
});
const EMAIL_FLOW = {
    link: "link",
    code: "code"
};
;
}),
"[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/Web3AuthPasswordlessHandler.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>Web3AuthPasswordlessHandler
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/utils/helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/utils/interfaces.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$AbstractLoginHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/AbstractLoginHandler.js [app-client] (ecmascript)");
;
;
;
;
;
;
class Web3AuthPasswordlessHandler extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$AbstractLoginHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    setFinalUrl() {
        const { domain } = this.params.jwtParams || {};
        const finalUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateAndConstructUrl"])(domain || "https://passwordless.web3auth.io/v7");
        finalUrl.pathname += finalUrl.pathname.endsWith("/") ? "authorize" : "/authorize";
        const clonedParams = JSON.parse(JSON.stringify(this.params.jwtParams || {}));
        delete clonedParams.domain;
        this.params.customState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, this.params.customState || {}), {}, {
            client: this.params.web3AuthClientId
        });
        const finalJwtParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            state: this.state,
            client_id: this.params.clientId || this.params.web3AuthClientId,
            redirect_uri: this.params.redirect_uri,
            nonce: this.nonce,
            network: this.params.web3AuthNetwork,
            connection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginToConnectionMap"][this.params.authConnection],
            scope: this.SCOPE,
            response_type: this.RESPONSE_TYPE,
            prompt: this.PROMPT,
            flow_type: (clonedParams === null || clonedParams === void 0 ? void 0 : clonedParams.flow_type) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMAIL_FLOW"].code
        }, clonedParams);
        Object.keys(finalJwtParams).forEach((key)=>{
            const localKey = key;
            if (finalJwtParams[localKey]) finalUrl.searchParams.append(localKey, finalJwtParams[localKey]);
        });
        this.finalURL = finalUrl;
    }
    async getUserInfo(params) {
        const { idToken } = params;
        const decodedToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeToken"])(idToken).payload;
        const { name, email, picture } = decodedToken;
        return {
            profileImage: picture,
            name,
            email,
            userId: name.toLowerCase(),
            authConnectionId: this.params.authConnectionId,
            authConnection: this.params.authConnection,
            groupedAuthConnectionId: this.params.groupedAuthConnectionId
        };
    }
    constructor(params){
        super(params);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "SCOPE", "openid profile email");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "RESPONSE_TYPE", "token id_token");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, "PROMPT", "login");
        this.setFinalUrl();
    }
}
;
}),
"[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/HandlerFactory.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "createHandler": ()=>createHandler
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/utils/enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$DiscordHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/DiscordHandler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$FacebookHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/FacebookHandler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$GoogleHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/GoogleHandler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$JwtHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/JwtHandler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$MockLoginHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/MockLoginHandler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$PasskeysHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/PasskeysHandler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$TelegramHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/TelegramHandler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$TwitchHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/TwitchHandler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$Web3AuthPasswordlessHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@toruslabs+customauth@21.3.2_@babel+runtime@7.28.4_@sentry+core@9.22.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@toruslabs/customauth/dist/lib.esm/handlers/Web3AuthPasswordlessHandler.js [app-client] (ecmascript)");
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
const createHandler = (params)=>{
    const { authConnectionId, authConnection, clientId, jwtParams } = params;
    if (!authConnectionId || !authConnection || !clientId) {
        throw new Error("Invalid params. Missing authConnectionId, authConnection or clientId");
    }
    const { domain, login_hint, id_token, access_token } = jwtParams || {};
    switch(authConnection){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].GOOGLE:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$GoogleHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](params);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].TELEGRAM:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$TelegramHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](params);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].FACEBOOK:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$FacebookHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](params);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].TWITCH:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$TwitchHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](params);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].DISCORD:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$DiscordHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](params);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].EMAIL_PASSWORDLESS:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].SMS_PASSWORDLESS:
            if (!login_hint) throw new Error("Invalid params. Missing login_hint for web3auth passwordless login");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$Web3AuthPasswordlessHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](params);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].APPLE:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].GITHUB:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].LINKEDIN:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].TWITTER:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].LINE:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].CUSTOM:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].REDDIT:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].WECHAT:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].KAKAO:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].FARCASTER:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].AUTHENTICATOR:
            if (id_token || access_token) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$MockLoginHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](params);
            }
            if (!domain) throw new Error("Invalid params for jwt login. Missing domain");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$JwtHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](params);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$utils$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTH_CONNECTION"].PASSKEYS:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$toruslabs$2b$customauth$40$21$2e$3$2e$2_$40$babel$2b$runtime$40$7$2e$28$2e$4_$40$sentry$2b$core$40$9$2e$22$2e$0_bufferutil$40$4$2e$0$2e$9_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$toruslabs$2f$customauth$2f$dist$2f$lib$2e$esm$2f$handlers$2f$PasskeysHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](params);
        default:
            throw new Error("Unsupported login type");
    }
};
;
}),
}]);

//# sourceMappingURL=1b3f1_%40toruslabs_customauth_dist_lib_esm_637b862e._.js.map