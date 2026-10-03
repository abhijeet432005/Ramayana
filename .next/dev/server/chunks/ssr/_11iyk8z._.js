module.exports = [
"[project]/components/ChapterMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChapterMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const pad = (n)=>String(n).padStart(2, "0");
function ChapterMenu({ open, current, onGo, onClose }) {
    const scroller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // when the list opens, bring the current chapter into view
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) return;
        const t = setTimeout(()=>scroller.current?.querySelector("button.cur")?.scrollIntoView({
                block: "center",
                behavior: "smooth"
            }), 350);
        return ()=>clearTimeout(t);
    }, [
        open,
        current
    ]);
    const jump = (k)=>scroller.current?.querySelector(`[data-part="${k}"]`)?.scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `menu ${open ? "open" : ""}`,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Chapters",
        "aria-hidden": !open,
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "menu-in",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "menu-head",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "अध्याय सूची"
                                }, void 0, false, {
                                    fileName: "[project]/components/ChapterMenu.tsx",
                                    lineNumber: 20,
                                    columnNumber: 16
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Two journeys · ",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chapters"].length,
                                        " chapters"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ChapterMenu.tsx",
                                    lineNumber: 20,
                                    columnNumber: 34
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ChapterMenu.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "menu-tabs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    tabIndex: open ? 0 : -1,
                                    onClick: ()=>jump("ram"),
                                    children: "रामायण"
                                }, void 0, false, {
                                    fileName: "[project]/components/ChapterMenu.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    tabIndex: open ? 0 : -1,
                                    onClick: ()=>jump("han"),
                                    children: "हनुमान"
                                }, void 0, false, {
                                    fileName: "[project]/components/ChapterMenu.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ChapterMenu.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "menu-x",
                            tabIndex: open ? 0 : -1,
                            onClick: onClose,
                            "aria-label": "Close",
                            children: [
                                "Close ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                    children: "Esc"
                                }, void 0, false, {
                                    fileName: "[project]/components/ChapterMenu.tsx",
                                    lineNumber: 25,
                                    columnNumber: 106
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ChapterMenu.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ChapterMenu.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "menu-scroll",
                    ref: scroller,
                    "data-lenis-prevent": true,
                    children: [
                        "ram",
                        "han"
                    ].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-part": k,
                            className: `menu-part ${k}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BOOKS"][k].name,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: k === "ram" ? "The journey of Shri Rama" : "The story of Hanuman"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChapterMenu.tsx",
                                            lineNumber: 31,
                                            columnNumber: 34
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ChapterMenu.tsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chapters"].slice(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BOOKS"][k].from, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BOOKS"][k].to).map((c, j)=>{
                                        const i = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BOOKS"][k].from + j;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                tabIndex: open ? 0 : -1,
                                                className: `mcard ${i === current ? "cur" : ""}`,
                                                style: {
                                                    "--c": c.accent
                                                },
                                                onClick: ()=>onGo(i),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mcard-img",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["thumbOf"])(c),
                                                                alt: c.title,
                                                                loading: "lazy",
                                                                decoding: "async",
                                                                draggable: false
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ChapterMenu.tsx",
                                                                lineNumber: 36,
                                                                columnNumber: 51
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                                children: pad(j + 1)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ChapterMenu.tsx",
                                                                lineNumber: 37,
                                                                columnNumber: 25
                                                            }, this),
                                                            i === current && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("u", {
                                                                children: "अभी यहाँ · Now"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ChapterMenu.tsx",
                                                                lineNumber: 38,
                                                                columnNumber: 43
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ChapterMenu.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mcard-body",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "mcard-hi",
                                                                children: c.hiTitle
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ChapterMenu.tsx",
                                                                lineNumber: 39,
                                                                columnNumber: 52
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mcard-en",
                                                                children: c.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ChapterMenu.tsx",
                                                                lineNumber: 39,
                                                                columnNumber: 101
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                className: "mcard-place",
                                                                children: c.place
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ChapterMenu.tsx",
                                                                lineNumber: 39,
                                                                columnNumber: 144
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ChapterMenu.tsx",
                                                        lineNumber: 39,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ChapterMenu.tsx",
                                                lineNumber: 35,
                                                columnNumber: 21
                                            }, this)
                                        }, c.id, false, {
                                            fileName: "[project]/components/ChapterMenu.tsx",
                                            lineNumber: 34,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/ChapterMenu.tsx",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, k, true, {
                            fileName: "[project]/components/ChapterMenu.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/ChapterMenu.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ChapterMenu.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ChapterMenu.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/JourneyPath.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JourneyPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const H = 118, BASE = 76, X0 = 26;
const pad = (n)=>String(n).padStart(2, "0");
/* Every chapter is a node on one baseline, evenly spaced. Between two nodes the line is
   - Ramayana: a gentle river wave (three soft swells per stage)
   - Hanuman:  one big leaping arc (he jumps from stage to stage)
   Because nodes are explicit, the flame always lands exactly on a diya / sun, never somewhere along a curve. */ function build(W, N, leap) {
    const step = (W - 2 * X0) / Math.max(1, N - 1), xs = Array.from({
        length: N
    }, (_, i)=>X0 + step * i);
    let d = `M${xs[0]} ${BASE}`;
    for(let i = 1; i < N; i++){
        const a = xs[i - 1], b = xs[i];
        if (leap) d += ` C${a + step * .18} ${BASE - 46} ${b - step * .18} ${BASE - 46} ${b} ${BASE}`;
        else {
            const q = step / 6;
            for(let k = 0; k < 3; k++){
                const s = a + q * 2 * k, sg = k % 2 ? 1 : -1;
                d += ` Q${s + q} ${BASE + sg * 11} ${s + q * 2} ${BASE}`;
            }
        }
    }
    return {
        d,
        xs
    };
}
function Pill({ text, x, w }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), [bw, setBw] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(90);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const m = ()=>{
            const b = t.current?.getBBox();
            if (b && b.width) setBw(Math.ceil(b.width) + 30);
        };
        m();
        void document.fonts?.ready.then(m);
    }, [
        text
    ]);
    const cx = Math.min(Math.max(x, bw / 2 + 4), w - bw / 2 - 4) - x; // keep the pill on screen at both ends
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        className: "jl",
        transform: `translate(${cx} -50)`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: -bw / 2,
                y: -17,
                width: bw,
                height: 34,
                rx: 17
            }, void 0, false, {
                fileName: "[project]/components/JourneyPath.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                className: "jl-tip",
                d: `M${-6 - cx} 17L${-cx} 24L${6 - cx} 17Z`
            }, void 0, false, {
                fileName: "[project]/components/JourneyPath.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                ref: t,
                y: 6.5,
                textAnchor: "middle",
                children: text
            }, void 0, false, {
                fileName: "[project]/components/JourneyPath.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/JourneyPath.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
function JourneyPath({ chapter, started, onGo, from, to, variant }) {
    const N = to - from, list = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chapters"].slice(from, to), leap = variant === "han";
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), live = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), dot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const centers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [W, setW] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1000);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const f = ()=>setW(Math.round(innerWidth * 0.94));
        f();
        addEventListener("resize", f);
        return ()=>removeEventListener("resize", f);
    }, []);
    const { d: D, xs } = build(W, N, leap);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const p = path.current, lv = live.current;
        if (!p || !lv) return;
        const L = p.getTotalLength();
        lv.style.strokeDasharray = `${L}`;
        // scroll position at which each chapter is centred: the flame reaches node i exactly when chapter i is centred
        const measure = ()=>{
            centers.current = list.map((_, i)=>{
                const el = document.getElementById(`c${from + i}`);
                return el ? el.offsetLeft + el.offsetWidth / 2 - innerWidth / 2 : 0;
            });
        };
        measure();
        const mt = setInterval(measure, 1200);
        addEventListener("resize", measure);
        let cur = 0, raf = 0;
        const tick = ()=>{
            const c = centers.current, sx = scrollX;
            let f = 0;
            if (c.length === N) {
                if (sx >= c[N - 1]) f = 1;
                else if (sx > c[0]) {
                    let k = 0;
                    while(k < N - 2 && sx >= c[k + 1])k++;
                    f = (k + (sx - c[k]) / Math.max(1, c[k + 1] - c[k])) / (N - 1);
                }
            }
            cur += (f - cur) * 0.1;
            lv.style.strokeDashoffset = `${L * (1 - cur)}`;
            const q = p.getPointAtLength(L * cur);
            dot.current?.setAttribute("transform", `translate(${q.x} ${q.y})`);
            raf = requestAnimationFrame(tick);
        };
        tick();
        return ()=>{
            cancelAnimationFrame(raf);
            clearInterval(mt);
            removeEventListener("resize", measure);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        W,
        from,
        to
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: `journey ${variant} ${started ? "on" : ""}`,
        width: W,
        height: H,
        viewBox: `0 0 ${W} ${H}`,
        role: "navigation",
        "aria-label": "Chapters",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "jg",
                    x1: "0",
                    x2: "1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0",
                            stopColor: "#ffb347"
                        }, void 0, false, {
                            fileName: "[project]/components/JourneyPath.tsx",
                            lineNumber: 73,
                            columnNumber: 47
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "1",
                            stopColor: "var(--accent)"
                        }, void 0, false, {
                            fileName: "[project]/components/JourneyPath.tsx",
                            lineNumber: 73,
                            columnNumber: 86
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/JourneyPath.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/JourneyPath.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                ref: path,
                d: D,
                className: "jbase"
            }, void 0, false, {
                fileName: "[project]/components/JourneyPath.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                ref: live,
                d: D,
                className: "jlive"
            }, void 0, false, {
                fileName: "[project]/components/JourneyPath.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            list.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    transform: `translate(${xs[i]} ${BASE})`,
                    className: `jn ${from + i <= chapter ? "act" : ""} ${from + i === chapter ? "cur" : ""}`,
                    onClick: ()=>onGo(from + i),
                    role: "link",
                    "aria-label": `${c.hiTitle} · ${c.title}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            r: "22",
                            className: "hit"
                        }, void 0, false, {
                            fileName: "[project]/components/JourneyPath.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            className: "dn",
                            children: leap ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        className: "sun-glow",
                                        r: "13"
                                    }, void 0, false, {
                                        fileName: "[project]/components/JourneyPath.tsx",
                                        lineNumber: 82,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        className: "sun",
                                        r: "6.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/JourneyPath.tsx",
                                        lineNumber: 82,
                                        columnNumber: 57
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        className: "rays",
                                        d: "M0 -13V-10M0 10V13M-13 0H-10M10 0H13M-9.2 -9.2L-7 -7M9.2 -9.2L7 -7M-9.2 9.2L-7 7M9.2 9.2L7 7"
                                    }, void 0, false, {
                                        fileName: "[project]/components/JourneyPath.tsx",
                                        lineNumber: 82,
                                        columnNumber: 91
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/JourneyPath.tsx",
                                lineNumber: 82,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        className: "bowl",
                                        d: "M-8 6H8A8 8 0 0 1 -8 6Z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/JourneyPath.tsx",
                                        lineNumber: 83,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        className: "fl",
                                        d: "M0 4C-4.500 -2 -1.500 -7 0 -12C1.500 -7 4.500 -2 0 4Z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/JourneyPath.tsx",
                                        lineNumber: 83,
                                        columnNumber: 72
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/JourneyPath.tsx",
                                lineNumber: 83,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/JourneyPath.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            className: "jnum",
                            y: "30",
                            textAnchor: "middle",
                            children: pad(i + 1)
                        }, void 0, false, {
                            fileName: "[project]/components/JourneyPath.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
                            text: c.hiTitle,
                            x: xs[i],
                            w: W
                        }, void 0, false, {
                            fileName: "[project]/components/JourneyPath.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, c.id, true, {
                    fileName: "[project]/components/JourneyPath.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                ref: dot,
                className: "jdot",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        r: "12",
                        className: "jhalo"
                    }, void 0, false, {
                        fileName: "[project]/components/JourneyPath.tsx",
                        lineNumber: 89,
                        columnNumber: 37
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        r: "3.6",
                        className: "jcore"
                    }, void 0, false, {
                        fileName: "[project]/components/JourneyPath.tsx",
                        lineNumber: 89,
                        columnNumber: 72
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/JourneyPath.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, variant, true, {
        fileName: "[project]/components/JourneyPath.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Mandala.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Mandala
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
// Rangoli-style mandala: concentric lotus petals drawn in the current accent colour.
const ring = (n, r, pl, pw)=>Array.from({
        length: n
    }, (_, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
            cx: "0",
            cy: -r,
            rx: pw,
            ry: pl,
            transform: `rotate(${k * 360 / n})`
        }, `${n}-${r}-${k}`, false, {
            fileName: "[project]/components/Mandala.tsx",
            lineNumber: 3,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0)));
function Mandala({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: `mandala ${className}`,
        viewBox: "-200 -200 400 400",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            fill: "none",
            stroke: "currentColor",
            strokeWidth: ".7",
            children: [
                [
                    190,
                    176,
                    120,
                    74,
                    30
                ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        r: r,
                        strokeDasharray: r === 176 ? "1 5" : undefined
                    }, r, false, {
                        fileName: "[project]/components/Mandala.tsx",
                        lineNumber: 9,
                        columnNumber: 43
                    }, this)),
                ring(24, 150, 26, 7),
                ring(16, 98, 22, 9),
                ring(12, 52, 16, 8),
                ring(8, 18, 12, 6)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Mandala.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Mandala.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Scene.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "REVEAL",
    ()=>REVEAL,
    "default",
    ()=>Scene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cache"].enabled = true;
const REVEAL = {
    chapterSeconds: 1.5,
    heroSeconds: 3,
    startAt: 1,
    reverseSeconds: 0.8
};
// Raw sRGB maths end to end: textures are sampled as-is and colours stay as the hex values we write.
// (With colour management on, the custom shaders wrote linear values straight to the screen and every photo came out dark.)
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ColorManagement"].enabled = false;
const BG = "#f9f1e2", BGB = "#ebd0ae", INK = "#16123a", BG2 = "#0b0a25", BG2B = "#2b1122", INK2 = "#f6e7d0"; // paper: ivory (top) to saffron sand (bottom); night: midnight indigo to ember plum
/* ───────── background: warm paper wash + a field of village/forest motifs (trees, animals, houses…)
   that sit faint on the paper and light up in colour wherever the cursor passes ───────── */ const bgV = `varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.,1.); }`;
const bgF = `precision highp float; varying vec2 vUv;
uniform float uTime,uProg,uScroll,uAct; uniform vec2 uRes,uMouse,uOrb; uniform vec3 uBg,uBgB,uInk,uTint; uniform sampler2D uAtlas;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*n(p);p=p*2.03+vec2(3.1,1.7);a*=.5;}return v;}
// atlas: 4x4 cells, y-up local coords inside a cell; only alpha is used
float cellA(vec2 l,float idx){
  float ins=step(0.,l.x)*step(l.x,1.)*step(0.,l.y)*step(l.y,1.);
  vec2 c=clamp(l,.003,.997); float cx=mod(idx,4.), ry=floor(idx/4.);
  return texture2D(uAtlas,vec2((cx+c.x)/4.,1.-(ry+1.-c.y)/4.)).a*ins;
}
void main(){
  vec2 px=vUv*uRes, asp=vec2(uRes.x/uRes.y,1.), p=(vUv-.5)*asp; float t=uTime*.03;
  vec2 q=vec2(fbm(p*1.6+t),fbm(p*1.6-t+5.));
  float f=fbm(p*1.3+q*1.8+uProg*2.);
  vec3 base=mix(uBgB,uBg,smoothstep(.0,.92,vUv.y)); base=mix(base,uBgB,smoothstep(.55,1.,length(vUv-.5)*1.25)*.35);
  vec3 col=mix(base,uTint,smoothstep(.35,.95,f)*.24);
  col=mix(col,uTint,exp(-length(p-(uOrb-.5)*asp)*2.4)*.16);
  col=mix(col,uTint,exp(-pow(length((vUv-vec2(.5,-.06))*vec2(1.,1.7)),2.)*3.2)*.2);   // low horizon glow in the chapter colour
  col=mix(col,uInk,fbm(px*.8)*.03);                                   // paper fibre

  // staggered grid of motifs, drifting slower than the page for parallax depth
  float cell=uRes.y*.2, par=uScroll*.35;
  float row=floor(px.y/cell), off=.5*mod(row,2.);
  vec2 g=vec2((px.x+par)/cell+off,px.y/cell), id=floor(g), fc=fract(g);
  float hv=h(id+7.1), idx=floor(h(id)*16.), present=step(.12,hv);
  vec2 jit=(vec2(h(id+1.3),h(id+2.7))-.5)*.08;

  // cursor light, evaluated per motif so each one wakes up as a whole
  vec2 cc=vec2((id.x+.5-off)*cell-par,(id.y+.5)*cell), m=uMouse*uRes;
  float cl=1.-smoothstep(0.,uRes.y*.34,length(cc-m)); cl=cl*cl*(3.-2.*cl); cl*=uAct;
  float sc=1.+cl*.15, rot=sin(uTime*1.4+hv*6.283)*.06*cl;
  vec2 l=fc-.5-jit; float cs=cos(rot),sn=sin(rot); l=vec2(cs*l.x-sn*l.y,sn*l.x+cs*l.y)/sc+.5;

  vec2 o=vec2(.35/cell/sc);                                            // 4-tap supersample (atlas has no mips)
  float a=(cellA(l+o,idx)+cellA(l-o,idx)+cellA(l+vec2(o.x,-o.y),idx)+cellA(l+vec2(-o.x,o.y),idx))*.25*present;
  float bl=0.; for(int k=0;k<8;k++){float an=float(k)*.7854; bl+=cellA(l+vec2(cos(an),sin(an))*.055,idx);} bl*=.125*present; // soft halo

  vec3 pal=mix(uTint,vec3(.8,.26,.07),h(id+3.)*.5); pal=mix(pal,uInk,.15);
  col=mix(col,pal,cl*.12*present*smoothstep(.62,.05,length(fc-.5)));    // radial coloured pool behind a lit motif
  col=mix(col,pal,clamp(a*1.3,0.,1.)*cl*.95);                          // the motif itself
  col=mix(col,pal,max(bl-a,0.)*cl*.6);                                 // glow around it
  col=mix(col,uTint,exp(-length(px-m)/(uRes.y*.2))*.09*uAct);          // soft spotlight
  col+=(h(vUv*uRes+uTime)-.5)*.025;
  gl_FragColor=vec4(col,1.);
}`;
/* ───────── artwork planes. Hover on a chapter picture = "temple lamp": the picture swells gently under the cursor, slow water-rings
   spread from it, warm lamp-light follows, the rest dims a touch, embers gather and a glint sweeps across as you arrive.
   The hero (uFx = 0) only scales. ───────── */ const imV = `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`;
const imF = `precision highp float; varying vec2 vUv;
uniform sampler2D uTex; uniform vec2 uSize,uImg,uMouse,uRB; uniform float uTime,uHover,uVel,uReveal,uArch,uFeather,uFx; uniform vec3 uSmoke;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1.,0.)),f.x),mix(h(i+vec2(0.,1.)),h(i+vec2(1.,1.)),f.x),f.y);}
float fb(vec2 p){float s=0.,a=.5;for(int i=0;i<5;i++){s+=a*vn(p);p=p*2.03+vec2(17.3,9.1);a*=.5;}return s;}
vec2 cover(vec2 uv){float rs=uSize.x/uSize.y,ri=uImg.x/uImg.y;vec2 k=rs<ri?vec2(rs/ri,1.):vec2(1.,ri/rs);return (uv-.5)*k+.5;}
void main(){
  // ── smoky reveal: domain-warped fbm smoke thickens, drifts upward, then thins away to show the picture (bottom clears first)
  float re=1.-(1.-uReveal)*(1.-uReveal), m=1., sa=0.; vec2 wq=vec2(.5); float sn=.5;
  if(uReveal<.999){
    vec2 sp0=vUv*vec2(uSize.x/uSize.y,1.)*2.2; float st=uTime*.12;
    wq=vec2(fb(sp0+vec2(0.,-st)),fb(sp0+vec2(5.2,1.3)-vec2(0.,st*1.3)));
    sn=fb(sp0*1.15+wq*2.2+vec2(0.,-st*1.6));
    float edge=re*2.05-.42-vUv.y*.42;
    m=smoothstep(sn-.2,sn+.1,edge);
    float life=smoothstep(0.,.1,re)*(1.-smoothstep(.62,1.,re));
    sa=(smoothstep(.26,.76,sn+.12*wq.x)*(1.-m)*.92+m*(1.-m)*1.5)*life;
    if(uFeather>0.){ sa*=smoothstep(0.,.3,vUv.x)*smoothstep(0.,.3,1.-vUv.x)*smoothstep(0.,.4,vUv.y)*smoothstep(0.,.4,1.-vUv.y); }   // free-floating smoke: no visible rectangle
  }
  float zoom=1.1-.1*re;
  vec2 uv=(vUv-.5)*(zoom-.015*sin(uTime*.2))+.5;
  uv+=(wq-.5)*.07*(1.-m);                                              // the picture swims behind the smoke
  uv.x+=uVel*.02*sin(uv.y*3.14159);                                   // gentle bend in the scroll direction
  vec2 hq=(vUv-uMouse)*vec2(uSize.x/uSize.y,1.); float hd=length(hq), hf=uHover*uFx;
  float lens=exp(-hd*hd*9.)*hf, near=exp(-hd*hd*8.)*hf;
  uv=(uv-uMouse)*(1.-.16*lens)+uMouse;                                 // the picture swells softly under the cursor
  float rp=sin(hd*40.-uTime*2.4)*exp(-hd*5.)*hf;                       // slow water-rings spreading from the cursor
  uv+=(hq/(hd+.001))*vec2(uSize.y/uSize.x,1.)*rp*.007;
  float sp=lens*.0025+abs(uVel)*.006;
  vec4 c; c.r=texture2D(uTex,cover(uv+vec2(sp,0.))).r; c.g=texture2D(uTex,cover(uv)).g; c.b=texture2D(uTex,cover(uv-vec2(sp,0.))).b;
  float a=1.;
  if(uRB.x>0.){ vec2 pp=(vUv-.5)*uSize, b=.5*uSize; float rr=min(uSize.x,uSize.y)*(pp.y>0.?uRB.x:uRB.y); rr=min(rr,min(b.x,b.y));
    vec2 qq=abs(pp)-b+rr; float dd=length(max(qq,0.))+min(max(qq.x,qq.y),0.)-rr; a*=1.-smoothstep(-1.5,0.,dd); }
  else if(uArch>1.5){ float dd=length((vUv-.5)*uSize); a*=1.-smoothstep(.5*uSize.x-1.5,.5*uSize.x,dd); }
  else if(uArch>.5){ float rad=.5*uSize.x, py=vUv.y*uSize.y, ay=uSize.y-rad;
    if(py>ay){ float dd=length(vec2((vUv.x-.5)*uSize.x,py-ay)); a*=1.-smoothstep(rad-1.5,rad,dd);} }
  if(uFeather>0.){ vec2 fe=vec2(uFeather*uSize.y/uSize.x,uFeather); a*=smoothstep(0.,fe.x,vUv.x)*smoothstep(0.,fe.x,1.-vUv.x)*smoothstep(0.,fe.y,vUv.y)*smoothstep(0.,fe.y,1.-vUv.y); }
  vec2 e=vec2(vUv.x*24.,vUv.y*14.-uTime*.6),id=floor(e),f=fract(e)-.5; float em=step(.86-.2*near,h(id))*smoothstep(.12,.0,length(f+(h(id+3.)-.5)*.5));
  c.rgb+=vec3(1.,.7,.3)*em*(.28+near*1.7)+smoothstep(.05,.0,abs(vUv.x-fract(uTime*.07)*1.6+.3-vUv.y*.4))*.05;
  c.rgb+=vec3(1.,.76,.38)*exp(-hd*hd*16.)*hf*.24;                       // warm lamp-light under the cursor
  c.rgb*=1.-.11*hf*(1.-exp(-hd*hd*2.4));                               // the rest of the picture dims a touch
  c.rgb+=vec3(1.,.9,.7)*smoothstep(.07,.0,abs(vUv.x*.85+vUv.y*.45-(uHover*1.7-.35)))*uHover*(1.-uHover)*1.1*uFx;   // glint of light as the cursor arrives
  c.rgb=mix(vec3(dot(c.rgb,vec3(.299,.587,.114))),c.rgb,1.07)*(1.02+uHover*.05*uFx);
  vec3 smk=mix(uSmoke*.8,uSmoke,smoothstep(.2,.8,sn));
  gl_FragColor=vec4(mix(smk,c.rgb,m),a*clamp(m+sa,0.,1.));
}`;
function Scene({ chapter, started, onReady, progress, theme }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(started);
    startedRef.current = started;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const dpr = ()=>Math.min(devicePixelRatio, 1.5); // capped: the background shader is the heavy part
        const r = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
            canvas: ref.current,
            antialias: false,
            alpha: false,
            powerPreference: "high-performance"
        });
        r.setPixelRatio(dpr());
        r.setSize(innerWidth, innerHeight);
        r.autoClear = false;
        const u = {
            uTime: {
                value: 0
            },
            uProg: {
                value: 0
            },
            uScroll: {
                value: 0
            },
            uAct: {
                value: 0
            },
            uRes: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](innerWidth * dpr(), innerHeight * dpr())
            },
            uMouse: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](0.5, 0.5)
            },
            uSmoke: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]("#f7ede1")
            },
            uOrb: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chapters"][0].orb)
            },
            uBg: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](BG)
            },
            uBgB: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](BGB)
            },
            uInk: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](INK)
            },
            uTint: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chapters"][0].accent)
            },
            uAtlas: {
                value: null
            }
        };
        const bg = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"](), cam0 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrthographicCamera"](-1, 1, 1, -1, 0, 1);
        bg.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](2, 2), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
            vertexShader: bgV,
            fragmentShader: bgF,
            uniforms: u
        })));
        const imgs = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"](), cam = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrthographicCamera"](0, innerWidth, 0, -innerHeight, -10, 10);
        const mgr = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadingManager"](()=>onReady()), loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextureLoader"](mgr);
        loader.load("/art/motifs.svg", (t)=>{
            t.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"];
            t.magFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"];
            t.generateMipmaps = false;
            u.uAtlas.value = t;
        });
        const calm = matchMedia("(prefers-reduced-motion: reduce)").matches; // reduced motion: hover only scales
        const items = Array.from(document.querySelectorAll("[data-gl]")).map((el)=>{
            const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
                vertexShader: imV,
                fragmentShader: imF,
                transparent: true,
                uniforms: {
                    uTex: {
                        value: null
                    },
                    uSize: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](1, 1)
                    },
                    uImg: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](1, 1)
                    },
                    uMouse: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](0.5, 0.5)
                    },
                    uTime: u.uTime,
                    uSmoke: u.uSmoke,
                    uHover: {
                        value: 0
                    },
                    uFx: {
                        value: el.classList.contains("hero-art") || calm ? 0 : 1
                    },
                    uVel: {
                        value: 0
                    },
                    uReveal: {
                        value: 0
                    },
                    uArch: {
                        value: el.hasAttribute("data-circle") ? 2 : el.hasAttribute("data-arch") ? 1 : 0
                    },
                    uRB: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](parseFloat(el.dataset.rt ?? "0"), parseFloat(el.dataset.rb ?? "0"))
                    },
                    uFeather: {
                        value: parseFloat(el.dataset.feather ?? "0")
                    }
                }
            });
            const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](1, 1), mat);
            mesh.visible = false;
            imgs.add(mesh);
            const it = {
                el,
                mesh,
                mat,
                loaded: false,
                hv: 0,
                rv: 0,
                hero: el.classList.contains("hero-art"),
                dur: parseFloat(el.dataset.smoke ?? "") || (el.classList.contains("hero-art") ? REVEAL.heroSeconds : REVEAL.chapterSeconds)
            };
            loader.load(el.dataset.gl, (t)=>{
                t.anisotropy = 4;
                mat.uniforms.uTex.value = t;
                mat.uniforms.uImg.value.set(t.image.width, t.image.height);
                it.loaded = true;
            });
            return it;
        });
        const c0 = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chapters"][0].pal, cBgL = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](c0[0]), cBgD = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](c0[2]), cBgLB = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](c0[1]), cBgDB = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](c0[3]), tmpC = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]();
        let lastBg = "";
        const cInkL = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](INK), cInkD = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](INK2), cSmL = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]("#f7ede1"), cSmD = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]("#6a5a78");
        const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](-1e4, -1e4), mn = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](0.5, 0.5), tmp = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
        let act = 0;
        const onMove = (e)=>{
            m.set(e.clientX, e.clientY);
            mn.set(e.clientX / innerWidth, 1 - e.clientY / innerHeight);
            act = e.pointerType === "touch" ? 0.85 : 1;
        };
        const onLeave = ()=>{
            act = 0;
            m.set(-1e4, -1e4);
        };
        const onResize = ()=>{
            r.setPixelRatio(dpr());
            r.setSize(innerWidth, innerHeight);
            u.uRes.value.set(innerWidth * dpr(), innerHeight * dpr());
            cam.right = innerWidth;
            cam.bottom = -innerHeight;
            cam.updateProjectionMatrix();
        };
        addEventListener("pointermove", onMove, {
            passive: true
        });
        addEventListener("pointerdown", onMove, {
            passive: true
        });
        document.addEventListener("mouseleave", onLeave);
        addEventListener("resize", onResize);
        let lastX = scrollX, vel = 0, sx = scrollX;
        // Driven by gsap.ticker (not its own rAF) so it renders AFTER Lenis has moved the page in the same frame:
        // canvas art and DOM text never disagree by a frame, which is what makes scrolling look "stuttery".
        const render = (time, deltaMs = 16)=>{
            const dt = Math.min(0.05, deltaMs / 1000);
            {
                const k = theme.current ?? 0;
                u.uBg.value.copy(cBgL).lerp(cBgD, k);
                u.uBgB.value.copy(cBgLB).lerp(cBgDB, k);
                u.uInk.value.copy(cInkL).lerp(cInkD, k);
                u.uSmoke.value.copy(cSmL).lerp(cSmD, k);
                // the page colour the DOM uses (text halos, glass panels) follows the shader so nothing ever looks pasted on
                tmpC.copy(u.uBg.value).lerp(u.uBgB.value, 0.5);
                const key = `${Math.round(tmpC.r * 255)},${Math.round(tmpC.g * 255)},${Math.round(tmpC.b * 255)}`;
                if (key !== lastBg) {
                    lastBg = key;
                    document.documentElement.style.setProperty("--bg", `rgb(${key})`);
                }
            }
            u.uTime.value = time;
            u.uProg.value += ((progress.current ?? 0) - u.uProg.value) * 0.05;
            u.uMouse.value.lerp(mn, 0.14);
            u.uAct.value += (act - u.uAct.value) * 0.08;
            sx = scrollX;
            u.uScroll.value = sx * dpr();
            vel += (Math.max(-1.5, Math.min(1.5, (sx - lastX) * 0.05)) - vel) * 0.12;
            lastX = sx;
            const W = innerWidth, H = innerHeight;
            for (const it of items){
                const b = it.el.getBoundingClientRect();
                it.mesh.visible = it.loaded && b.right > -80 && b.left < W * REVEAL.startAt + 80;
                if (!it.mesh.visible) continue;
                const hs = it.hero ? 1 + 0.05 * it.hv * it.hv * (3 - 2 * it.hv) : 1; // hero: hover = a soft scale, nothing else
                it.mesh.scale.set(b.width * hs, b.height * hs, 1);
                it.mesh.position.set(b.left + b.width / 2, -(b.top + b.height / 2), 0);
                const mx = (m.x - b.left) / b.width, my = 1 - (m.y - b.top) / b.height, inside = mx > 0 && mx < 1 && my > 0 && my < 1;
                it.hv += ((inside ? 1 : 0) - it.hv) * 0.08;
                if (inside) it.mat.uniforms.uMouse.value.lerp(tmp.set(mx, my), 0.2);
                it.rv = Math.min(1, Math.max(0, it.rv + (startedRef.current && b.left < W * REVEAL.startAt ? dt / it.dur : -dt / REVEAL.reverseSeconds)));
                const w = it.mat.uniforms;
                w.uSize.value.set(b.width, b.height);
                w.uHover.value = it.hv;
                w.uReveal.value = it.rv;
                w.uVel.value = vel;
            }
            void H;
            r.clear();
            r.render(bg, cam0);
            r.clearDepth();
            r.render(imgs, cam);
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.add(render);
        api.current = {
            chapter (i) {
                const c = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chapters"][i], col = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](c.accent), han = c.book === "han", T = (o, h)=>{
                    const n = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](h);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(o, {
                        r: n.r,
                        g: n.g,
                        b: n.b,
                        duration: 2,
                        ease: "power2.inOut",
                        overwrite: true
                    });
                };
                T(cBgL, han ? BG : c.pal[0]);
                T(cBgLB, han ? BGB : c.pal[1]);
                T(cBgD, c.pal[2]);
                T(cBgDB, c.pal[3]);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(u.uTint.value, {
                    r: col.r,
                    g: col.g,
                    b: col.b,
                    duration: 1.6,
                    ease: "power2.inOut"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(u.uOrb.value, {
                    x: c.orb[0],
                    y: c.orb[1],
                    duration: 2.2,
                    ease: "power2.inOut"
                });
            }
        };
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.remove(render);
            r.dispose();
            removeEventListener("pointermove", onMove);
            removeEventListener("pointerdown", onMove);
            document.removeEventListener("mouseleave", onLeave);
            removeEventListener("resize", onResize);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        api.current?.chapter(chapter);
    }, [
        chapter
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: ref,
        className: "scene",
        "aria-hidden": true
    }, void 0, false, {
        fileName: "[project]/components/Scene.tsx",
        lineNumber: 435,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/SoundMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SoundMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/audio.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const svg = (d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: "17",
        height: "17",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.6",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": true,
        children: d
    }, void 0, false, {
        fileName: "[project]/components/SoundMenu.tsx",
        lineNumber: 5,
        columnNumber: 37
    }, ("TURBOPACK compile-time value", void 0));
const ON = svg(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
    d: "M4 10v4h4l5 4V6l-5 4zM17 9a4 4 0 0 1 0 6"
}, void 0, false, {
    fileName: "[project]/components/SoundMenu.tsx",
    lineNumber: 6,
    columnNumber: 16
}, ("TURBOPACK compile-time value", void 0)));
const OFF = svg(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
    d: "M4 10v4h4l5 4V6l-5 4zM17 9l4 6M21 9l-4 6"
}, void 0, false, {
    fileName: "[project]/components/SoundMenu.tsx",
    lineNumber: 7,
    columnNumber: 17
}, ("TURBOPACK compile-time value", void 0)));
function SoundMenu() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false), [track, setTrack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["audio"].track), [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const box = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["audio"].subscribe(()=>{
            setTrack(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["audio"].track);
            setLoading(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["audio"].loading);
        }), []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) return;
        const away = (e)=>{
            if (!box.current?.contains(e.target)) setOpen(false);
        };
        const esc = (e)=>{
            if (e.key === "Escape") setOpen(false);
        };
        addEventListener("pointerdown", away);
        addEventListener("keydown", esc);
        return ()=>{
            removeEventListener("pointerdown", away);
            removeEventListener("keydown", esc);
        };
    }, [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const k = (e)=>{
            if (!e.metaKey && !e.ctrlKey && !e.altKey && e.key.toLowerCase() === "s") setOpen((v)=>!v);
        };
        addEventListener("keydown", k);
        return ()=>removeEventListener("keydown", k);
    }, []);
    const pick = (id)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["audio"].select(id);
        setTimeout(()=>setOpen(false), 260);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `snd ${open ? "open" : ""}`,
        ref: box,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "ic",
                "aria-haspopup": "listbox",
                "aria-expanded": open,
                "aria-label": "Sound (S)",
                onClick: ()=>setOpen((v)=>!v),
                children: [
                    track === "off" ? OFF : ON,
                    track !== "off" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "snd-dot",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/components/SoundMenu.tsx",
                        lineNumber: 32,
                        columnNumber: 29
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "tip",
                        children: [
                            "Sound",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                children: "S"
                            }, void 0, false, {
                                fileName: "[project]/components/SoundMenu.tsx",
                                lineNumber: 33,
                                columnNumber: 36
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SoundMenu.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SoundMenu.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "snd-panel",
                role: "listbox",
                "aria-label": "Choose sound",
                "aria-hidden": !open,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "snd-head",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "ध्वनि"
                            }, void 0, false, {
                                fileName: "[project]/components/SoundMenu.tsx",
                                lineNumber: 36,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Sound"
                            }, void 0, false, {
                                fileName: "[project]/components/SoundMenu.tsx",
                                lineNumber: 36,
                                columnNumber: 45
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SoundMenu.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRACKS"].filter((t)=>t.id !== "off").map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    role: "option",
                                    "aria-selected": track === t.id,
                                    tabIndex: open ? 0 : -1,
                                    className: track === t.id ? "cur" : "",
                                    onClick: ()=>pick(t.id),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "snd-eq",
                                            "aria-hidden": true,
                                            children: track === t.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("u", {
                                                    className: "spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SoundMenu.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 85
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                            fileName: "[project]/components/SoundMenu.tsx",
                                                            lineNumber: 41,
                                                            columnNumber: 112
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                            fileName: "[project]/components/SoundMenu.tsx",
                                                            lineNumber: 41,
                                                            columnNumber: 117
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                            fileName: "[project]/components/SoundMenu.tsx",
                                                            lineNumber: 41,
                                                            columnNumber: 122
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/SoundMenu.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 110
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/SoundMenu.tsx",
                                                lineNumber: 41,
                                                columnNumber: 72
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                children: t.id === "default" ? "◌" : t.id.slice(-1)
                                            }, void 0, false, {
                                                fileName: "[project]/components/SoundMenu.tsx",
                                                lineNumber: 41,
                                                columnNumber: 137
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/SoundMenu.tsx",
                                            lineNumber: 41,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "snd-txt",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: t.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SoundMenu.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 43
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: t.sub
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SoundMenu.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 59
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/SoundMenu.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "snd-len",
                                            children: t.len ?? ""
                                        }, void 0, false, {
                                            fileName: "[project]/components/SoundMenu.tsx",
                                            lineNumber: 43,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SoundMenu.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this)
                            }, t.id, false, {
                                fileName: "[project]/components/SoundMenu.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/SoundMenu.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        role: "option",
                        "aria-selected": track === "off",
                        tabIndex: open ? 0 : -1,
                        className: `snd-off ${track === "off" ? "cur" : ""}`,
                        onClick: ()=>pick("off"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "snd-eq",
                                "aria-hidden": true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: OFF
                                }, void 0, false, {
                                    fileName: "[project]/components/SoundMenu.tsx",
                                    lineNumber: 49,
                                    columnNumber: 48
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/SoundMenu.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "snd-txt",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Off"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SoundMenu.tsx",
                                        lineNumber: 50,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "Silence"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SoundMenu.tsx",
                                        lineNumber: 50,
                                        columnNumber: 47
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SoundMenu.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SoundMenu.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SoundMenu.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SoundMenu.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Story.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Story
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Scene$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Scene.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$JourneyPath$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/JourneyPath.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChapterMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChapterMenu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Mandala$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Mandala.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sun$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Sun.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SoundMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SoundMenu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/audio.ts [app-ssr] (ecmascript)");
"use client";
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
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const split = (s)=>s.split(" ").map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "mask",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w",
                children: [
                    w,
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/components/Story.tsx",
                lineNumber: 16,
                columnNumber: 88
            }, ("TURBOPACK compile-time value", void 0))
        }, i, false, {
            fileName: "[project]/components/Story.tsx",
            lineNumber: 16,
            columnNumber: 57
        }, ("TURBOPACK compile-time value", void 0)));
const GRAT = [
    [
        "धन्यवाद, धरती माँ।",
        "Thank you, Mother Earth."
    ],
    [
        "इस साँस के लिए आभार।",
        "Grateful for this breath."
    ],
    [
        "जल, वायु और प्रकाश के लिए धन्यवाद।",
        "Thank you for water, wind and light."
    ],
    [
        "माता-पिता और गुरुजनों को प्रणाम।",
        "Gratitude to our parents and teachers."
    ],
    [
        "सबके सुख और शांति की प्रार्थना।",
        "May all beings be happy and at peace."
    ]
];
const svg = (d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: "17",
        height: "17",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.6",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": true,
        children: d
    }, void 0, false, {
        fileName: "[project]/components/Story.tsx",
        lineNumber: 18,
        columnNumber: 37
    }, ("TURBOPACK compile-time value", void 0));
const ICON = {
    menu: svg(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 7h16M4 12h16M4 17h10"
        }, void 0, false, {
            fileName: "[project]/components/Story.tsx",
            lineNumber: 20,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Story.tsx",
        lineNumber: 20,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0))),
    play: svg(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8 5l11 7-11 7z"
        }, void 0, false, {
            fileName: "[project]/components/Story.tsx",
            lineNumber: 21,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Story.tsx",
        lineNumber: 21,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0))),
    pause: svg(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8 5v14M16 5v14"
        }, void 0, false, {
            fileName: "[project]/components/Story.tsx",
            lineNumber: 21,
            columnNumber: 62
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Story.tsx",
        lineNumber: 21,
        columnNumber: 60
    }, ("TURBOPACK compile-time value", void 0))),
    full: svg(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"
        }, void 0, false, {
            fileName: "[project]/components/Story.tsx",
            lineNumber: 22,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Story.tsx",
        lineNumber: 22,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)))
};
const mix = (a, b, k)=>a.map((v, i)=>Math.round(v + (b[i] - v) * k));
const WIND = Array.from({
    length: 16
}, (_, i)=>({
        top: i * 37 % 92 + 4,
        w: 14 + i * 13 % 26,
        d: 6 + i * 7 % 9,
        delay: -(i * 5 % 11)
    }));
const pad = (n)=>String(n).padStart(2, "0");
function Story() {
    const [started, setStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false), [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [chapter, setChapter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [gi, setGi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0), [small, setSmall] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menu, setMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false), [auto, setAuto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false), [full, setFull] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false), [at, setAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false), [noGL, setNoGL] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false), [glChecked, setGlChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const vel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0), chapterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(-1), theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const book = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chapters"][chapter].book ?? "ram", bk = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BOOKS"][book];
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), bar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lenisRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.documentElement.style.setProperty("--accent", __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chapters"][chapter].accent);
    }, [
        chapter
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const f = ()=>setSmall(innerWidth < 1100);
        f();
        addEventListener("resize", f);
        return ()=>removeEventListener("resize", f);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t = setInterval(()=>setGi((v)=>(v + 1) % GRAT.length), 3400);
        return ()=>clearInterval(t);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.documentElement.classList.toggle("locked", !started);
    }, [
        started
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // never leave the visitor stuck on the loader: no WebGL -> flat SVG art; slow network -> enter anyway
        let ok = false;
        try {
            const cv = document.createElement("canvas");
            ok = !!(cv.getContext("webgl2") || cv.getContext("webgl"));
        } catch  {
            ok = false;
        }
        if (!ok) {
            setNoGL(true);
            setReady(true);
        }
        setGlChecked(true);
        const t = setTimeout(()=>setReady(true), 8000);
        return ()=>clearTimeout(t);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const f = ()=>setFull(!!document.fullscreenElement);
        document.addEventListener("fullscreenchange", f);
        return ()=>document.removeEventListener("fullscreenchange", f);
    }, []);
    // Keep every chapter's text inside the safe band (below the HUD, above the journey path) on any screen height.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let raf = 0;
        const fit = ()=>{
            const root = document.documentElement, txts = Array.from(document.querySelectorAll(".chapter .txt"));
            if (!txts.length) return;
            const avail = innerHeight - 96 - 150 - 14;
            let f = 1;
            for(let k = 0; k < 6; k++){
                root.style.setProperty("--fit", f.toFixed(3));
                const h = Math.max(...txts.map((t)=>t.offsetHeight));
                if (h <= avail || f <= .6) break;
                f = Math.max(.6, f * (avail / h) * .985);
            }
        };
        const run = ()=>{
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(fit);
        };
        run();
        void document.fonts?.ready.then(run);
        addEventListener("resize", run);
        return ()=>{
            cancelAnimationFrame(raf);
            removeEventListener("resize", run);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const L = lenisRef.current;
        if (menu) L?.stop();
        else L?.start();
    }, [
        menu
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.documentElement.classList.toggle("entered", started);
    }, [
        started
    ]);
    // glides to a chapter; the duration scales with distance, and "slow" is used for the Ramayana -> Hanuman crossing
    const goTo = (i, slow = false)=>{
        const el = document.getElementById(`c${i}`), L = lenisRef.current;
        if (!el || !L) return;
        const target = el.offsetLeft + el.offsetWidth / 2 - innerWidth / 2, d = Math.abs(target - L.scroll) / innerWidth;
        L.scrollTo(target, {
            duration: slow ? 9 : Math.min(8, Math.max(2, d * .9)),
            easing: (t)=>t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
        });
    };
    const toggleFull = ()=>{
        if (document.fullscreenElement) void document.exitFullscreen();
        else void document.documentElement.requestFullscreen?.().catch(()=>{});
    };
    // auto-tour: glides chapter to chapter, stops the moment the visitor takes over
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!auto || !started) return;
        const stop = ()=>setAuto(false);
        const step = ()=>{
            const n = chapterRef.current + 1;
            if (n >= __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chapters"].length) {
                const L = lenisRef.current;
                if (L) L.scrollTo(L.limit, {
                    duration: 4
                });
                setAuto(false);
            } else goTo(n, n === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HAN_START"]);
        };
        const first = setTimeout(step, 900), t = setInterval(step, 18000);
        addEventListener("wheel", stop, {
            passive: true
        });
        addEventListener("touchstart", stop, {
            passive: true
        });
        return ()=>{
            clearTimeout(first);
            clearInterval(t);
            removeEventListener("wheel", stop);
            removeEventListener("touchstart", stop);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        auto,
        started
    ]);
    // custom cursor (quickTo = no per-event tween allocation)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const cur = document.querySelector(".cursor");
        const x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].quickTo(cur, "x", {
            duration: .35,
            ease: "power3"
        }), y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].quickTo(cur, "y", {
            duration: .35,
            ease: "power3"
        });
        const mv = (e)=>{
            x(e.clientX);
            y(e.clientY);
        };
        const ov = (e)=>cur.classList.toggle("big", !!e.target.closest("[data-gl]"));
        addEventListener("pointermove", mv, {
            passive: true
        });
        addEventListener("pointerover", ov, {
            passive: true
        });
        return ()=>{
            removeEventListener("pointermove", mv);
            removeEventListener("pointerover", ov);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!started) return;
        // Horizontal Lenis: vertical wheel / trackpad / touch all drive the horizontal axis.
        const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
            orientation: "horizontal",
            gestureOrientation: "both",
            lerp: 0.075,
            wheelMultiplier: 0.95,
            touchMultiplier: 1.6,
            smoothWheel: true,
            autoRaf: false
        });
        lenisRef.current = lenis;
        lenis.on("scroll", (l)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].update();
            progress.current = l.progress;
            const br = document.getElementById("bridge");
            if (br) {
                const s0 = br.offsetLeft - innerWidth * .6, s1 = br.offsetLeft + br.offsetWidth * .45 - innerWidth * .5;
                let k = Math.min(1, Math.max(0, (l.scroll - s0) / (s1 - s0)));
                k = k * k * (3 - 2 * k);
                if (Math.abs(k - theme.current) > .002) {
                    theme.current = k;
                    const r = document.documentElement.style, ink = mix([
                        22,
                        18,
                        58
                    ], [
                        246,
                        231,
                        208
                    ], k);
                    if (noGL) r.setProperty("--bg", `rgb(${mix([
                        241,
                        224,
                        198
                    ], [
                        24,
                        12,
                        34
                    ], k)})`);
                    r.setProperty("--ink", `rgb(${ink})`);
                    r.setProperty("--mute", `rgba(${ink},.68)`);
                    r.setProperty("--line", `rgba(${ink},.2)`);
                }
            }
            const c0 = document.getElementById("c0");
            if (c0) setAt(l.scroll > c0.offsetLeft - innerWidth * .6);
            if (bar.current) bar.current.style.transform = `scaleX(${l.progress})`;
        });
        // Lenis runs FIRST in the shared gsap ticker (prioritized), then ScrollTriggers, then the WebGL render:
        // everything in a frame sees the same scroll position, so nothing lags or jitters.
        const tick = (t)=>{
            lenis.raf(t * 1000);
            vel.current = lenis.velocity;
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["audio"].setEnergy(Math.min(1, Math.abs(lenis.velocity) / 45));
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.add(tick, false, true);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.lagSmoothing(0);
        const key = (e)=>{
            if (e.key === "Escape") {
                setMenu(false);
                return;
            }
            if (!e.metaKey && !e.ctrlKey && !e.altKey) {
                const kk = e.key.toLowerCase();
                if (kk === "m") {
                    setMenu((v)=>!v);
                    return;
                }
                if (kk === "p") {
                    setAuto((v)=>!v);
                    return;
                }
                if (kk === "f") {
                    toggleFull();
                    return;
                }
            }
            if (menu) return;
            const k = e.key, dir = k === "ArrowRight" || k === "PageDown" || k === " " && !e.shiftKey ? 1 : k === "ArrowLeft" || k === "PageUp" || k === " " && e.shiftKey ? -1 : 0;
            if (!dir) return;
            e.preventDefault();
            lenis.scrollTo(lenis.scroll + dir * innerWidth * .8, {
                duration: 1.3
            });
        };
        addEventListener("keydown", key);
        const enter = (i)=>{
            chapterRef.current = i;
            setChapter(i);
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["audio"].enter(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chapters"][i].mood, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chapters"][i].drone, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chapters"][i].amb);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(`#c${i} .w`, {
                yPercent: 0,
                duration: 1.2,
                stagger: 0.02,
                ease: "expo.out",
                overwrite: true
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(`#c${i} .fade`, {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: .5,
                overwrite: true
            });
        };
        const hide = (el, y)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(el.querySelectorAll(".w"), {
                yPercent: y,
                duration: .6,
                stagger: .004,
                overwrite: true
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(el.querySelectorAll(".fade"), {
                opacity: 0,
                y: y > 0 ? 14 : -14,
                duration: .5,
                overwrite: true
            });
        };
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".hero .w", {
                yPercent: 170,
                duration: 1.8,
                stagger: 0.15,
                ease: "expo.out",
                delay: 0.4
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".hero .fade", {
                opacity: 0,
                y: 12,
                duration: 1.2,
                delay: 1.4,
                stagger: .15
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".chapter").forEach((el, i)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(el.querySelectorAll(".w"), {
                    yPercent: 170
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(el.querySelectorAll(".fade"), {
                    opacity: 0,
                    y: 14
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                    trigger: el,
                    horizontal: true,
                    start: "left 62%",
                    end: "right 38%",
                    onEnter: ()=>enter(i),
                    onEnterBack: ()=>enter(i),
                    onLeave: ()=>hide(el, -170),
                    onLeaveBack: ()=>hide(el, 170)
                });
                // parallax is scrubbed straight to the (already smoothed) Lenis position: scrub:true = zero extra lag
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(el.querySelector(".art"), {
                    x: -60
                }, {
                    x: 60,
                    ease: "none",
                    scrollTrigger: {
                        trigger: el,
                        horizontal: true,
                        scrub: true,
                        start: "left right",
                        end: "right left"
                    }
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(el.querySelector(".num"), {
                    xPercent: -10
                }, {
                    xPercent: 10,
                    ease: "none",
                    scrollTrigger: {
                        trigger: el,
                        horizontal: true,
                        scrub: true,
                        start: "left right",
                        end: "right left"
                    }
                });
            });
        }, root);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
        return ()=>{
            ctx.revert();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.remove(tick);
            removeEventListener("keydown", key);
            lenis.destroy();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        started
    ]);
    const begin = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["audio"].start();
        setStarted(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: root,
        children: [
            glChecked && !noGL && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Scene$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                chapter: chapter,
                started: started,
                onReady: ()=>setReady(true),
                progress: progress,
                theme: theme
            }, void 0, false, {
                fileName: "[project]/components/Story.tsx",
                lineNumber: 161,
                columnNumber: 30
            }, this),
            small && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "small-screen",
                role: "alertdialog",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "diya",
                        "aria-hidden": true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "glow"
                            }, void 0, false, {
                                fileName: "[project]/components/Story.tsx",
                                lineNumber: 162,
                                columnNumber: 100
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "flame"
                            }, void 0, false, {
                                fileName: "[project]/components/Story.tsx",
                                lineNumber: 162,
                                columnNumber: 122
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "bowl"
                            }, void 0, false, {
                                fileName: "[project]/components/Story.tsx",
                                lineNumber: 162,
                                columnNumber: 145
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Story.tsx",
                        lineNumber: 162,
                        columnNumber: 66
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "बड़ी स्क्रीन पर खोलें"
                    }, void 0, false, {
                        fileName: "[project]/components/Story.tsx",
                        lineNumber: 162,
                        columnNumber: 173
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "श्री राम की इस यात्रा का पूरा अनुभव लेने के लिए कृपया लैपटॉप या डेस्कटॉप पर खोलें।"
                    }, void 0, false, {
                        fileName: "[project]/components/Story.tsx",
                        lineNumber: 162,
                        columnNumber: 203
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: "Please switch to a bigger screen (laptop or desktop) for the best experience."
                    }, void 0, false, {
                        fileName: "[project]/components/Story.tsx",
                        lineNumber: 162,
                        columnNumber: 292
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Story.tsx",
                lineNumber: 162,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cursor"
            }, void 0, false, {
                fileName: "[project]/components/Story.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `gate ${started ? "gone" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "gate-kicker",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                lang: "hi",
                                children: "श्री राम की यात्रा"
                            }, void 0, false, {
                                fileName: "[project]/components/Story.tsx",
                                lineNumber: 166,
                                columnNumber: 36
                            }, this),
                            " · An Immersive Journey"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Story.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "diya",
                        "aria-hidden": true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "glow"
                            }, void 0, false, {
                                fileName: "[project]/components/Story.tsx",
                                lineNumber: 167,
                                columnNumber: 43
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "flame"
                            }, void 0, false, {
                                fileName: "[project]/components/Story.tsx",
                                lineNumber: 167,
                                columnNumber: 65
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "bowl"
                            }, void 0, false, {
                                fileName: "[project]/components/Story.tsx",
                                lineNumber: 167,
                                columnNumber: 88
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Story.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "breath",
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                            fileName: "[project]/components/Story.tsx",
                            lineNumber: 168,
                            columnNumber: 45
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Story.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "grat",
                        "aria-live": "polite",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: GRAT[gi][0]
                            }, void 0, false, {
                                fileName: "[project]/components/Story.tsx",
                                lineNumber: 169,
                                columnNumber: 57
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: GRAT[gi][1]
                            }, void 0, false, {
                                fileName: "[project]/components/Story.tsx",
                                lineNumber: 169,
                                columnNumber: 83
                            }, this)
                        ]
                    }, gi, true, {
                        fileName: "[project]/components/Story.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: !ready,
                        onClick: begin,
                        children: [
                            ready ? "शांति से प्रवेश करें" : "साँस लें… धीरे…",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: ready ? "Enter in peace, with sound on" : "Breathe in, breathe out"
                            }, void 0, false, {
                                fileName: "[project]/components/Story.tsx",
                                lineNumber: 170,
                                columnNumber: 103
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Story.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "gate-hint",
                        children: "🎧 Best experienced with headphones · full screen recommended"
                    }, void 0, false, {
                        fileName: "[project]/components/Story.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Story.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "hud",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "brand",
                        children: bk.name
                    }, book, false, {
                        fileName: "[project]/components/Story.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `now ${at && started ? "on" : ""}`,
                        "aria-live": "polite",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                children: [
                                    pad(chapter - bk.from + 1),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Story.tsx",
                                        lineNumber: 176,
                                        columnNumber: 112
                                    }, this),
                                    pad(bk.to - bk.from)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Story.tsx",
                                lineNumber: 176,
                                columnNumber: 80
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chapters"][chapter].hiTitle
                            }, chapter, false, {
                                fileName: "[project]/components/Story.tsx",
                                lineNumber: 176,
                                columnNumber: 147
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chapters"][chapter].place
                            }, void 0, false, {
                                fileName: "[project]/components/Story.tsx",
                                lineNumber: 176,
                                columnNumber: 195
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Story.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "dock",
                        "aria-label": "Controls",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "ic",
                                "aria-expanded": menu,
                                "aria-label": "Chapters (M)",
                                onClick: ()=>setMenu(true),
                                children: [
                                    ICON.menu,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tip",
                                        children: [
                                            "Chapters",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                children: "M"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Story.tsx",
                                                lineNumber: 178,
                                                columnNumber: 152
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Story.tsx",
                                        lineNumber: 178,
                                        columnNumber: 122
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Story.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "ic",
                                "aria-pressed": auto,
                                "aria-label": "Auto tour (P)",
                                onClick: ()=>setAuto((v)=>!v),
                                children: [
                                    auto ? ICON.pause : ICON.play,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tip",
                                        children: [
                                            auto ? "Pause tour" : "Auto tour",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                children: "P"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Story.tsx",
                                                lineNumber: 179,
                                                columnNumber: 202
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Story.tsx",
                                        lineNumber: 179,
                                        columnNumber: 145
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Story.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "ic",
                                "aria-pressed": full,
                                "aria-label": "Full screen (F)",
                                onClick: toggleFull,
                                children: [
                                    ICON.full,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tip",
                                        children: [
                                            "Full screen",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                children: "F"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Story.tsx",
                                                lineNumber: 180,
                                                columnNumber: 148
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Story.tsx",
                                        lineNumber: 180,
                                        columnNumber: 115
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Story.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SoundMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/Story.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Story.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Story.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: bar
                }, void 0, false, {
                    fileName: "[project]/components/Story.tsx",
                    lineNumber: 184,
                    columnNumber: 28
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Story.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$JourneyPath$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                chapter: chapter,
                started: started,
                onGo: (i)=>goTo(i),
                from: bk.from,
                to: bk.to,
                variant: book
            }, void 0, false, {
                fileName: "[project]/components/Story.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChapterMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: menu,
                current: chapter,
                onClose: ()=>setMenu(false),
                onGo: (i)=>{
                    setMenu(false);
                    setTimeout(()=>goTo(i), 60);
                }
            }, void 0, false, {
                fileName: "[project]/components/Story.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "track",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "hero",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-copy",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Mandala$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        className: "m-hero"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Story.tsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mask",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w",
                                                children: "रामायण"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Story.tsx",
                                                lineNumber: 192,
                                                columnNumber: 40
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Story.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Story.tsx",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "hi-sub fade",
                                        children: "जन्म से दीपावली तक, श्री राम की पूरी यात्रा।"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Story.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "en-sub fade",
                                        children: "Shri Rama's full journey, from birth to Diwali."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Story.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "shloka fade",
                                        children: [
                                            "रामो विग्रहवान् धर्मः ॥",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "“Rama is dharma embodied.” — Valmiki Ramayana"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Story.tsx",
                                                lineNumber: 195,
                                                columnNumber: 63
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Story.tsx",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Story.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "art hero-art",
                                role: "img",
                                "aria-label": "Rama, Lakshmana and Sita look toward Ayodhya",
                                "data-gl": "/img/hero.webp",
                                "data-feather": "0.16",
                                style: noGL ? {
                                    backgroundImage: "url(/img/hero.webp)"
                                } : undefined
                            }, void 0, false, {
                                fileName: "[project]/components/Story.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "badge fade",
                                "aria-hidden": true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 120 120",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    id: "bc",
                                                    d: "M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Story.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 84
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Story.tsx",
                                                lineNumber: 199,
                                                columnNumber: 78
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textPath", {
                                                    href: "#bc",
                                                    textLength: "272",
                                                    lengthAdjust: "spacing",
                                                    children: "BEGIN THE JOURNEY ✦ BEGIN THE JOURNEY ✦ "
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Story.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 168
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Story.tsx",
                                                lineNumber: 199,
                                                columnNumber: 162
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Story.tsx",
                                        lineNumber: 199,
                                        columnNumber: 51
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Story.tsx",
                                        lineNumber: 199,
                                        columnNumber: 293
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Story.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Story.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "marquee",
                        "aria-hidden": true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "जय श्री राम ॥ "
                            }, void 0, false, {
                                fileName: "[project]/components/Story.tsx",
                                lineNumber: 202,
                                columnNumber: 46
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "जय श्री राम ॥ "
                            }, void 0, false, {
                                fileName: "[project]/components/Story.tsx",
                                lineNumber: 202,
                                columnNumber: 78
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Story.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chapters"].map((c, i)=>{
                        const hb = c.book === "han", li = i - __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BOOKS"][hb ? "han" : "ram"].from;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                i === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HAN_START"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            className: "end",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Mandala$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "m-end"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Story.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "diya",
                                                    "aria-hidden": true,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "glow"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Story.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 51
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "flame"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Story.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 73
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "bowl"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Story.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 96
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Story.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "॥ जय श्री राम ॥"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Story.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    className: "end-sub",
                                                    children: "धर्म, मर्यादा और प्रेम की यात्रा यहीं पूर्ण होती है · A journey of duty, restraint and love"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Story.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "end-cta",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "cont",
                                                            onClick: ()=>goTo(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HAN_START"], true),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "हनुमान की कथा"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Story.tsx",
                                                                    lineNumber: 213,
                                                                    columnNumber: 82
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                    children: "Continue · The story of Hanuman"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Story.tsx",
                                                                    lineNumber: 213,
                                                                    columnNumber: 108
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                    "aria-hidden": true,
                                                                    children: "→"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Story.tsx",
                                                                    lineNumber: 213,
                                                                    columnNumber: 154
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Story.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "ghost",
                                                            onClick: ()=>lenisRef.current?.scrollTo(0, {
                                                                    duration: 3.2
                                                                }),
                                                            children: "फिर से शुरू करें"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Story.tsx",
                                                            lineNumber: 214,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Story.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Story.tsx",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            id: "bridge",
                                            className: "bridge",
                                            "aria-label": "Interlude",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "wind",
                                                    "aria-hidden": true,
                                                    children: WIND.map((w, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            style: {
                                                                top: `${w.top}%`,
                                                                width: `${w.w}vw`,
                                                                animationDuration: `${w.d}s`,
                                                                animationDelay: `${w.delay}s`
                                                            }
                                                        }, k, false, {
                                                            fileName: "[project]/components/Story.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 71
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Story.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "b-text",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "b-hi",
                                                            children: "राम की हर राह पर एक और कथा चलती रही, पवन-पुत्र की।"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Story.tsx",
                                                            lineNumber: 219,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "b-en",
                                                            children: "Along every road Rama walked, another story walked beside him: the story of the son of the wind."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Story.tsx",
                                                            lineNumber: 219,
                                                            columnNumber: 115
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Story.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sun$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/components/Story.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "b-title",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            children: "हनुमान"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Story.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 42
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "b-sub",
                                                            children: "लीला-कथा · The Story of Hanuman"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Story.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 57
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                                            lang: "sa",
                                                            children: [
                                                                "मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम् ।",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/components/Story.tsx",
                                                                    lineNumber: 222,
                                                                    columnNumber: 97
                                                                }, this),
                                                                "वातात्मजं वानरयूथमुख्यं श्रीरामदूतं शरणं प्रपद्ये ॥",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                    children: "“Swift as thought, fast as the wind, master of his senses, foremost among the wise: son of the Wind, chief of the vanaras, Rama's messenger. I take refuge in him.”"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Story.tsx",
                                                                    lineNumber: 222,
                                                                    columnNumber: 154
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Story.tsx",
                                                            lineNumber: 222,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Story.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Story.tsx",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Story.tsx",
                                    lineNumber: 206,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    id: `c${i}`,
                                    className: `chapter ${i % 2 ? "flip" : ""} ${hb ? "han" : ""} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPhoto"])(c) ? "photo" : ""} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPhoto"])(c) && !hb && c.ar === 1 ? "arch" : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "num",
                                            "aria-hidden": true,
                                            children: pad(li + 1)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Story.tsx",
                                            lineNumber: 226,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "art",
                                            role: "img",
                                            "aria-label": c.title,
                                            "data-gl": c.art,
                                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPhoto"])(c) ? !hb && c.ar === 1 ? {
                                                "data-rt": ".27",
                                                "data-rb": ".04"
                                            } : {
                                                "data-rt": ".06",
                                                "data-rb": ".06"
                                            } : hb ? {
                                                "data-circle": ""
                                            } : {
                                                "data-arch": ""
                                            },
                                            style: {
                                                "--ar": c.ar,
                                                ...noGL ? {
                                                    backgroundImage: `url(${c.art})`
                                                } : {}
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Story.tsx",
                                            lineNumber: 227,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "txt",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "eyebrow fade",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                hb ? "लीला" : "अध्याय",
                                                                " ",
                                                                pad(li + 1)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Story.tsx",
                                                            lineNumber: 231,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                            fileName: "[project]/components/Story.tsx",
                                                            lineNumber: 231,
                                                            columnNumber: 96
                                                        }, this),
                                                        c.place
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Story.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    style: {
                                                        "--len": [
                                                            ...c.hiTitle
                                                        ].length
                                                    },
                                                    children: split(c.hiTitle)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Story.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "en-title fade",
                                                    children: c.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Story.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "hi",
                                                    children: split(c.hi)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Story.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "en fade",
                                                    children: c.en
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Story.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Story.tsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Story.tsx",
                                    lineNumber: 225,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, c.id, true, {
                            fileName: "[project]/components/Story.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "end han-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Mandala$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "m-end"
                            }, void 0, false, {
                                fileName: "[project]/components/Story.tsx",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "diya",
                                "aria-hidden": true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "glow"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Story.tsx",
                                        lineNumber: 242,
                                        columnNumber: 45
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "flame"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Story.tsx",
                                        lineNumber: 242,
                                        columnNumber: 67
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "bowl"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Story.tsx",
                                        lineNumber: 242,
                                        columnNumber: 90
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Story.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "॥ जय बजरंगबली ॥"
                            }, void 0, false, {
                                fileName: "[project]/components/Story.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                className: "end-sub",
                                children: "भक्ति में ही शक्ति है · Strength lives in devotion"
                            }, void 0, false, {
                                fileName: "[project]/components/Story.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "end-cta",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "ghost",
                                        onClick: ()=>goTo(0),
                                        children: "रामायण पर लौटें"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Story.tsx",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "ghost",
                                        onClick: ()=>goTo(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HAN_START"]),
                                        children: "हनुमान कथा फिर से"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Story.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Story.tsx",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Story.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Story.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Story.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Sun.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sun
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
// A calm, realistic dawn sun: white-hot core, limb-darkened disc, living surface granulation,
// a soft layered corona and slowly drifting light rays. Pure SVG, no images, no hard edges.
const RAYS = Array.from({
    length: 28
}, (_, i)=>{
    const a = i / 28 * 360 + i * 37 % 11, len = 120 + i * 53 % 110, w = 3 + i * 29 % 5 * 1.6;
    return {
        a,
        len,
        w,
        o: 0.16 + i * 17 % 5 * 0.05
    };
});
function Sun() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "b-sun",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "-300 -300 600 600",
            overflow: "visible",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                            id: "sx-halo",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0.28",
                                    stopColor: "#ffb25a",
                                    stopOpacity: "0.55"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sun.tsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0.45",
                                    stopColor: "#ff7a2e",
                                    stopOpacity: "0.22"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sun.tsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0.7",
                                    stopColor: "#d9461a",
                                    stopOpacity: "0.07"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sun.tsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#d9461a",
                                    stopOpacity: "0"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sun.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Sun.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                            id: "sx-disc",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0",
                                    stopColor: "#fffdf0"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sun.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0.38",
                                    stopColor: "#ffeeb0"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sun.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0.72",
                                    stopColor: "#ffbf55"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sun.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0.92",
                                    stopColor: "#ff8a2e"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sun.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#e8541f"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sun.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Sun.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                            id: "sx-core",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0",
                                    stopColor: "#fff",
                                    stopOpacity: "0.95"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sun.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#fff",
                                    stopOpacity: "0"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sun.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Sun.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "sx-ray",
                            x1: "0",
                            x2: "1",
                            y1: "0",
                            y2: "0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0",
                                    stopColor: "#ffd98a",
                                    stopOpacity: "0.8"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sun.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#ff8a3d",
                                    stopOpacity: "0"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sun.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Sun.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                            id: "sx-grain",
                            x: "-5%",
                            y: "-5%",
                            width: "110%",
                            height: "110%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
                                    type: "fractalNoise",
                                    baseFrequency: "0.022",
                                    numOctaves: "4",
                                    seed: "7",
                                    result: "n"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sun.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                    in: "n",
                                    type: "matrix",
                                    values: "0 0 0 0 0.85  0 0 0 0 0.35  0 0 0 0 0.05  0 0 0 1.1 -0.38",
                                    result: "tint"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sun.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                    in: "tint",
                                    in2: "SourceAlpha",
                                    operator: "in",
                                    result: "clip"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sun.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                            in: "SourceGraphic"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Sun.tsx",
                                            lineNumber: 41,
                                            columnNumber: 22
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                            in: "clip"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Sun.tsx",
                                            lineNumber: 41,
                                            columnNumber: 56
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Sun.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Sun.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                            id: "sx-soft",
                            x: "-30%",
                            y: "-30%",
                            width: "160%",
                            height: "160%",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: "6"
                            }, void 0, false, {
                                fileName: "[project]/components/Sun.tsx",
                                lineNumber: 43,
                                columnNumber: 77
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Sun.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                            id: "sx-bloom",
                            x: "-50%",
                            y: "-50%",
                            width: "200%",
                            height: "200%",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: "14"
                            }, void 0, false, {
                                fileName: "[project]/components/Sun.tsx",
                                lineNumber: 44,
                                columnNumber: 78
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Sun.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                            id: "sx-edge",
                            x: "-10%",
                            y: "-10%",
                            width: "120%",
                            height: "120%",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: "1.1"
                            }, void 0, false, {
                                fileName: "[project]/components/Sun.tsx",
                                lineNumber: 45,
                                columnNumber: 77
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Sun.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Sun.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    r: "300",
                    fill: "url(#sx-halo)",
                    className: "sx-breathe"
                }, void 0, false, {
                    fileName: "[project]/components/Sun.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    filter: "url(#sx-soft)",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("animateTransform", {
                                attributeName: "transform",
                                type: "rotate",
                                from: "0 0 0",
                                to: "360 0 0",
                                dur: "180s",
                                repeatCount: "indefinite"
                            }, void 0, false, {
                                fileName: "[project]/components/Sun.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            RAYS.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "140",
                                    y: -r.w / 2,
                                    width: r.len,
                                    height: r.w,
                                    rx: r.w / 2,
                                    fill: "url(#sx-ray)",
                                    opacity: r.o,
                                    transform: `rotate(${r.a})`
                                }, i, false, {
                                    fileName: "[project]/components/Sun.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sun.tsx",
                        lineNumber: 49,
                        columnNumber: 35
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Sun.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    r: "186",
                    fill: "#ff9d3e",
                    opacity: "0.5",
                    filter: "url(#sx-bloom)",
                    className: "sx-breathe"
                }, void 0, false, {
                    fileName: "[project]/components/Sun.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    r: "166",
                    fill: "url(#sx-disc)",
                    filter: "url(#sx-edge)"
                }, void 0, false, {
                    fileName: "[project]/components/Sun.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    r: "164",
                    fill: "url(#sx-disc)",
                    filter: "url(#sx-grain)"
                }, void 0, false, {
                    fileName: "[project]/components/Sun.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    r: "110",
                    fill: "url(#sx-core)"
                }, void 0, false, {
                    fileName: "[project]/components/Sun.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    rx: "330",
                    ry: "5",
                    fill: "#ffd9a0",
                    opacity: "0.22",
                    filter: "url(#sx-soft)"
                }, void 0, false, {
                    fileName: "[project]/components/Sun.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Sun.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Sun.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/audio.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TRACKS",
    ()=>TRACKS,
    "audio",
    ()=>audio
]);
// Immersive Indian soundscape, synthesized live with WebAudio (no audio files).
//
//  depth     every instrument sits on its own "bus" with its own distance: low-pass (air absorption),
//            stereo position, dry level and sends into a long convolution hall + a ping-pong delay.
//  voices    tanpura (soft, warm) · bansuri flute (slow, gentle, raga per chapter) · soft pad
//            · distant temple bells · quiet wind / water / birds. No percussion, nothing sudden.
//  motion    scroll speed only breathes a little more air into the wind.
//
// API: start() on a user gesture · enter(chapterIndex, rootHz) · setEnergy(0..1) · toggleSound()
const JI = {
    S: 1,
    r: 16 / 15,
    R: 9 / 8,
    g: 6 / 5,
    G: 5 / 4,
    m: 4 / 3,
    M: 45 / 32,
    P: 3 / 2,
    d: 8 / 5,
    D: 5 / 3,
    n: 9 / 5,
    N: 15 / 8
};
const sc = (s)=>s.split(" ").map((k)=>JI[k]);
const RAGA = {
    yaman: sc("S R G M P D N"),
    bhairavi: sc("S r g m P d n"),
    todi: sc("S r g M P d N"),
    bilawal: sc("S R G m P D N"),
    kafi: sc("S R g m P D n"),
    bhairav: sc("S r G m P d N"),
    bhupali: sc("S R G P D")
};
const MOODS = [
    {
        scale: RAGA.yaman,
        flute: .8,
        wind: .008,
        bells: "arp"
    },
    {
        scale: RAGA.bhairavi,
        flute: .7,
        wind: .010,
        bells: "arp"
    },
    {
        scale: RAGA.todi,
        flute: .7,
        wind: .009,
        bells: "arp"
    },
    {
        scale: RAGA.bilawal,
        flute: .8,
        wind: .008,
        bells: "arp"
    },
    {
        scale: RAGA.kafi,
        flute: .8,
        wind: .010,
        bells: "arp"
    },
    {
        scale: RAGA.bhairav,
        flute: .6,
        wind: .011,
        bells: "none"
    },
    {
        scale: RAGA.yaman,
        flute: .8,
        wind: .007,
        bells: "cascade"
    },
    {
        scale: RAGA.bhupali,
        flute: .75,
        wind: .008,
        bells: "arp",
        pulse: 10
    }
];
const BASE = {
    tan: {
        rev: .30
    },
    flute: {
        rev: .6
    },
    dhol: {
        dry: .28
    }
};
let c = null, G = null, timer = 0, vis = null;
let mood = MOODS[0], root = 110, energy = 0, lastE = 0, on = true;
const TRACKS = [
    {
        id: "default",
        label: "Default",
        sub: "Tanpura & bansuri · live soundscape"
    },
    {
        id: "song1",
        label: "Song 1",
        sub: "Devotional",
        len: "3:19",
        src: "/audio/song1.mp3"
    },
    {
        id: "song2",
        label: "Song 2",
        sub: "Ram chants · meditation",
        len: "20:52",
        src: "/audio/song2.mp3"
    },
    {
        id: "song3",
        label: "Song 3",
        sub: "Ram Siya Ram",
        len: "4:10",
        src: "/audio/song3.mp3"
    },
    {
        id: "off",
        label: "Off",
        sub: "Silence"
    }
];
const SONG_VOL = .85;
let track = "default", loading = false;
const els = {};
const subs = new Set();
const emit = ()=>subs.forEach((f)=>f());
const fades = new Map();
function fade(el, to, ms, done) {
    const prev = fades.get(el);
    if (prev) cancelAnimationFrame(prev);
    const from = el.volume, t0 = performance.now();
    const step = (t)=>{
        const k = Math.min(1, (t - t0) / ms);
        el.volume = clamp(from + (to - from) * (k * k * (3 - 2 * k)), 0, 1);
        if (k < 1) fades.set(el, requestAnimationFrame(step));
        else {
            fades.delete(el);
            done?.();
        }
    };
    fades.set(el, requestAnimationFrame(step));
}
function songEl(id) {
    const def = TRACKS.find((t)=>t.id === id);
    if (!def?.src) return null;
    let el = els[id];
    if (!el) {
        el = new Audio();
        el.src = def.src;
        el.loop = true;
        el.preload = "none";
        el.volume = 0;
        el.addEventListener("waiting", ()=>{
            if (track === id) {
                loading = true;
                emit();
            }
        });
        el.addEventListener("playing", ()=>{
            if (loading && track === id) {
                loading = false;
                emit();
            }
        });
        els[id] = el;
    }
    return el;
}
let amb = "none", nextAmb = 0;
let nextPulse = 0, nextTan = 0, tanI = 0, nextFlute = 0, phrase = 0, fIdx = 0, fPrev = 0;
const rnd = (a = 1)=>Math.random() * a;
const clamp = (v, a, b)=>Math.max(a, Math.min(b, v));
function env(g, t, peak, a, d) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(Math.max(peak, 0.0002), t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
}
function makeImpulse(ctx, secs) {
    const n = Math.floor(ctx.sampleRate * secs), b = ctx.createBuffer(2, n, ctx.sampleRate);
    for(let ch = 0; ch < 2; ch++){
        const d = b.getChannelData(ch);
        let z = 0;
        for(let i = 0; i < n; i++){
            const t = i / n;
            z += ((Math.random() * 2 - 1) * Math.pow(1 - t, 2.6) - z) * (0.9 - 0.78 * t);
            d[i] = z * (i < 900 ? i / 900 : 1);
        } // darker & softer as it decays
    }
    return b;
}
function bus(ctx, g, o) {
    const inp = ctx.createGain(), lp = ctx.createBiquadFilter(), pan = ctx.createStereoPanner(), dry = ctx.createGain(), rv = ctx.createGain(), dl = ctx.createGain();
    lp.type = "lowpass";
    lp.frequency.value = o.lp;
    pan.pan.value = o.pan;
    dry.gain.value = o.dry;
    rv.gain.value = o.rev;
    dl.gain.value = o.dly;
    inp.connect(lp);
    lp.connect(pan);
    pan.connect(dry);
    dry.connect(g.master);
    pan.connect(rv);
    rv.connect(g.rev);
    pan.connect(dl);
    dl.connect(g.dly);
    return {
        inp,
        lp,
        pan,
        dry,
        rv
    };
}
function build(ctx) {
    const master = ctx.createGain();
    master.gain.value = 0;
    const air = ctx.createBiquadFilter();
    air.type = "lowpass";
    air.frequency.value = 7000;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -20;
    comp.knee.value = 20;
    comp.ratio.value = 3;
    comp.attack.value = .03;
    comp.release.value = .5;
    master.connect(air);
    air.connect(comp);
    comp.connect(ctx.destination);
    // hall reverb: pre-delay -> convolution -> high-pass so the tail never gets muddy
    const rev = ctx.createGain(), pre = ctx.createDelay(.2), conv = ctx.createConvolver(), rhp = ctx.createBiquadFilter(), wet = ctx.createGain();
    pre.delayTime.value = .038;
    conv.buffer = makeImpulse(ctx, 5);
    rhp.type = "highpass";
    rhp.frequency.value = 160;
    wet.gain.value = .9;
    rev.connect(pre);
    pre.connect(conv);
    conv.connect(rhp);
    rhp.connect(wet);
    wet.connect(master);
    // ping-pong echo that widens the image
    const dly = ctx.createGain(), dL = ctx.createDelay(2), dR = ctx.createDelay(2), f1 = ctx.createGain(), f2 = ctx.createGain(), pL = ctx.createStereoPanner(), pR = ctx.createStereoPanner(), dlp = ctx.createBiquadFilter(), dout = ctx.createGain();
    dL.delayTime.value = .37;
    dR.delayTime.value = .37;
    f1.gain.value = .3;
    f2.gain.value = .3;
    pL.pan.value = -.75;
    pR.pan.value = .75;
    dlp.type = "lowpass";
    dlp.frequency.value = 1800;
    dout.gain.value = .4;
    dly.connect(dL);
    dL.connect(f1);
    f1.connect(dR);
    dR.connect(f2);
    f2.connect(dL);
    dL.connect(pL);
    dR.connect(pR);
    pL.connect(dlp);
    pR.connect(dlp);
    dlp.connect(dout);
    dout.connect(master);
    dout.connect(rev);
    const base = {
        master,
        rev,
        dly
    };
    const tan = bus(ctx, base, {
        pan: 0,
        lp: 3200,
        dry: 1.0,
        rev: .5,
        dly: .03
    });
    const flute = bus(ctx, base, {
        pan: 0,
        lp: 3000,
        dry: .55,
        rev: BASE.flute.rev,
        dly: .18
    });
    const dhol = bus(ctx, base, {
        pan: 0,
        lp: 1800,
        dry: BASE.dhol.dry,
        rev: .6,
        dly: .1
    });
    const mani = bus(ctx, base, {
        pan: .45,
        lp: 7000,
        dry: .22,
        rev: .5,
        dly: .3
    });
    const ghun = bus(ctx, base, {
        pan: -.55,
        lp: 7000,
        dry: .2,
        rev: .5,
        dly: .22
    });
    const bell = bus(ctx, base, {
        pan: 0,
        lp: 4800,
        dry: .22,
        rev: 1.0,
        dly: .25
    });
    // flute drifts slowly across the stage
    const lfo = ctx.createOscillator(), lg = ctx.createGain();
    lfo.frequency.value = .07;
    lg.gain.value = .4;
    lfo.connect(lg);
    lg.connect(flute.pan.pan);
    lfo.start();
    const noise = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate), nd = noise.getChannelData(0);
    for(let i = 0; i < nd.length; i++)nd[i] = Math.random() * 2 - 1;
    // pad: root + fifth + sub, very soft, sits under the tanpura
    const padLP = ctx.createBiquadFilter(), padG = ctx.createGain();
    padLP.type = "lowpass";
    padLP.frequency.value = 520;
    padG.gain.value = .065;
    const pad = [
        [
            "sine",
            1
        ],
        [
            "sine",
            1.5
        ],
        [
            "triangle",
            .5
        ]
    ].map(([ty, m])=>{
        const o = ctx.createOscillator();
        o.type = ty;
        o.frequency.value = 110 * m;
        o.detune.value = rnd(8) - 4;
        o.connect(padLP);
        o.start();
        return o;
    });
    padLP.connect(padG);
    padG.connect(tan.inp);
    // wind: two decorrelated noise streams panned apart
    const wg = ctx.createGain();
    wg.gain.value = .012;
    const bp = [];
    [
        -.8,
        .8
    ].forEach((p)=>{
        const s = ctx.createBufferSource();
        s.buffer = noise;
        s.loop = true;
        const f = ctx.createBiquadFilter();
        f.type = "bandpass";
        f.frequency.value = 380;
        f.Q.value = .5;
        const pn = ctx.createStereoPanner();
        pn.pan.value = p;
        s.connect(f);
        f.connect(pn);
        pn.connect(wg);
        s.start(0, rnd(1));
        bp.push(f);
    });
    const wlp = ctx.createBiquadFilter();
    wlp.type = "lowpass";
    wlp.frequency.value = 1100;
    wg.connect(wlp);
    wlp.connect(dhol.rv);
    wlp.connect(master);
    // sea / river: slow-breathing filtered noise
    const sea = ctx.createGain(), sl = ctx.createBiquadFilter(), ss = ctx.createBufferSource(), sgo = ctx.createOscillator(), sg = ctx.createGain();
    sea.gain.value = 0;
    sl.type = "lowpass";
    sl.frequency.value = 700;
    ss.buffer = noise;
    ss.loop = true;
    ss.connect(sl);
    sl.connect(sea);
    sea.connect(master);
    sea.connect(rev);
    ss.start(0, rnd(1));
    sgo.frequency.value = .11;
    sg.gain.value = .02;
    sgo.connect(sg);
    sg.connect(sea.gain);
    sgo.start();
    // tanpura = rich harmonics (jivari buzz lives around the 4th-9th partials); bansuri = breathy, few harmonics
    const tr = new Float32Array(30), ti = new Float32Array(30);
    for(let n = 1; n < 30; n++)ti[n] = 1 / Math.pow(n, .85) * (n >= 3 && n <= 9 ? 1.7 : 1);
    const fr = new Float32Array(8), fi = new Float32Array([
        0,
        1,
        .34,
        .13,
        .06,
        .03,
        .015,
        .008
    ]);
    return {
        master,
        rev,
        dly,
        noise,
        sea,
        tan,
        flute,
        dhol,
        mani,
        ghun,
        bell,
        pad,
        wind: {
            bp,
            g: wg
        },
        wave: {
            tan: ctx.createPeriodicWave(tr, ti),
            flute: ctx.createPeriodicWave(fr, fi)
        }
    };
}
/* ---------- voices ---------- */ function burst(t, dur, type, freq, q, gain, dest) {
    const C = c, s = C.createBufferSource(), f = C.createBiquadFilter(), g = C.createGain();
    s.buffer = G.noise;
    f.type = type;
    f.frequency.value = freq;
    f.Q.value = q;
    env(g, t, gain, .002, dur);
    s.connect(f);
    f.connect(g);
    g.connect(dest);
    s.start(t, rnd(1.5), dur + .05);
}
function bell(t, f, v) {
    const C = c, P = [
        [
            1,
            1,
            7
        ],
        [
            2,
            .5,
            4.5
        ],
        [
            2.76,
            .6,
            4
        ],
        [
            4.07,
            .3,
            2.8
        ],
        [
            5.4,
            .2,
            2.2
        ],
        [
            6.81,
            .1,
            1.6
        ]
    ];
    G.bell.pan.pan.setValueAtTime(rnd(1.2) - .6, t);
    P.forEach(([r, a, d])=>{
        if (f * r > 12000) return;
        const o = C.createOscillator(), g = C.createGain();
        o.frequency.value = f * r;
        env(g, t, .05 * v * a, .03, d);
        o.connect(g);
        g.connect(G.bell.inp);
        o.start(t);
        o.stop(t + d + .1);
    });
}
function tanpura(t) {
    const C = c, f = [
        root * .75,
        root,
        root,
        root * .5
    ][tanI % 4];
    [
        -1.2,
        1.2
    ].forEach((dt)=>{
        const o = C.createOscillator(), g = C.createGain(), lp = C.createBiquadFilter();
        o.setPeriodicWave(G.wave.tan);
        o.frequency.value = f;
        o.detune.value = dt;
        lp.type = "lowpass";
        lp.Q.value = 1.4;
        lp.frequency.setValueAtTime(2200, t);
        lp.frequency.exponentialRampToValueAtTime(500, t + 3.5); // the overtone "sweep" of a real tanpura
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(tanI % 4 === 3 ? .045 : .06, t + .06);
        g.gain.exponentialRampToValueAtTime(.0001, t + 7.5);
        o.connect(lp);
        lp.connect(g);
        g.connect(G.tan.inp);
        o.start(t);
        o.stop(t + 7.6);
    });
}
function flute(t, f, dur, v, from) {
    const C = c, o = C.createOscillator(), g = C.createGain(), lfo = C.createOscillator(), lg = C.createGain();
    o.setPeriodicWave(G.wave.flute);
    o.frequency.setValueAtTime(from || f, t);
    o.frequency.setTargetAtTime(f, t, .18); // meend: glide into the note
    lfo.frequency.value = 5.1 + rnd(.6);
    lg.gain.setValueAtTime(0, t);
    lg.gain.linearRampToValueAtTime(f * .003, t + Math.min(.9, dur * .6));
    lfo.connect(lg);
    lg.connect(o.frequency);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(v, t + .45);
    g.gain.setValueAtTime(v * .9, t + Math.max(.5, dur - .1));
    g.gain.setTargetAtTime(0, t + dur, .45);
    o.connect(g);
    g.connect(G.flute.inp);
    o.start(t);
    lfo.start(t);
    o.stop(t + dur + 2.5);
    lfo.stop(t + dur + 2.5);
    burst(t, dur * .9, "bandpass", f * 2, 3, .008, G.flute.inp); // breath
}
function chirp(t) {
    const C = c, p = C.createStereoPanner();
    p.pan.value = rnd(1.6) - .8;
    p.connect(G.master);
    p.connect(G.rev);
    const base = 2600 + rnd(1800), n = 2 + Math.floor(rnd(3));
    for(let k = 0; k < n; k++){
        const o = C.createOscillator(), g = C.createGain(), s = t + k * .11;
        o.frequency.setValueAtTime(base * (1 + rnd(.2)), s);
        o.frequency.exponentialRampToValueAtTime(base * (.7 + rnd(.5)), s + .08);
        env(g, s, .008, .03, .09);
        o.connect(g);
        g.connect(p);
        o.start(s);
        o.stop(s + .12);
    }
}
/* ---------- sequencer ---------- */ const degFreq = (i)=>{
    const n = mood.scale.length;
    return root * 4 * mood.scale[i % n] * Math.pow(2, Math.floor(i / n));
};
function tick() {
    if (!c || !G || c.state !== "running") return;
    const now = c.currentTime, ahead = now + .14;
    if (mood.pulse) while(nextPulse < ahead){
        bell(nextPulse, root * 2, .5);
        nextPulse += mood.pulse;
    } // a distant temple bell, like an aarti
    while(nextTan < ahead){
        tanpura(nextTan);
        nextTan += tanI++ % 4 === 3 ? 2.3 : 1.7;
    }
    while(nextAmb < ahead){
        if (amb === "birds") {
            chirp(nextAmb);
            nextAmb += 4 + rnd(9);
        } else if (amb === "fire") {
            burst(nextAmb, .02 + rnd(.02), "highpass", 1800 + rnd(1500), .8, .006 + rnd(.01), G.mani.inp);
            nextAmb += .12 + rnd(.7);
        } else nextAmb += .5;
    }
    if (mood.flute > 0) while(nextFlute < ahead){
        if (phrase <= 0) {
            phrase = 2 + Math.floor(rnd(3));
            fIdx = [
                0,
                2,
                4,
                7
            ][Math.floor(rnd(4))];
            fPrev = 0;
        }
        const last = phrase === 1, to = clamp(fIdx + [
            -1,
            -1,
            0,
            1,
            1
        ][Math.floor(rnd(5))], 0, 8), idx = last ? [
            0,
            4,
            7
        ][Math.floor(rnd(3))] : to;
        const dur = (last ? 4 : 1.8 + rnd(1.6)) / (.65 + .35 * mood.flute), f = degFreq(idx);
        flute(nextFlute, f, dur, .10 + .04 * mood.flute, fPrev);
        fPrev = f;
        fIdx = idx;
        phrase--;
        nextFlute += dur * .9 + (last ? (5 + rnd(5)) / mood.flute : .3 + rnd(.6));
    }
}
const audio = {
    get soundOn () {
        return track !== "off";
    },
    get track () {
        return track;
    },
    get loading () {
        return loading;
    },
    subscribe (f) {
        subs.add(f);
        return ()=>{
            subs.delete(f);
        };
    },
    // choose what plays: the live soundscape, a recorded song, or silence. Must be called from a click (autoplay rules).
    select (id) {
        if (id === track) return;
        const prev = track;
        track = id;
        loading = false;
        // leaving a song: fade it out, then pause (and rewind nothing: it resumes where it was)
        const pe = els[prev];
        if (pe) fade(pe, 0, 900, ()=>{
            if (track !== prev) pe.pause();
        });
        // the soundscape is audible only on "default"
        on = id === "default";
        if (c && G) G.master.gain.setTargetAtTime(on ? .7 : 0, c.currentTime, .8);
        const el = songEl(id);
        if (el) {
            loading = el.readyState < 3;
            emit();
            el.play().then(()=>fade(el, SONG_VOL, 1400)).catch(()=>{
                if (track === id) {
                    track = "default";
                    on = true;
                    loading = false;
                    if (c && G) G.master.gain.setTargetAtTime(.7, c.currentTime, .8);
                    emit();
                }
            });
        }
        emit();
    },
    start () {
        if (c) return;
        c = new AudioContext();
        G = build(c);
        void c.resume();
        const t = c.currentTime + .15;
        nextTan = t;
        nextFlute = t + 6;
        tanI = 0;
        phrase = 0;
        G.master.gain.setTargetAtTime(on ? .7 : 0, t, 4);
        timer = window.setInterval(tick, 25);
        vis = ()=>{
            if (!c) return;
            const el = els[track], song = el && track !== "default" && track !== "off";
            if (document.hidden) {
                void c.suspend();
                el?.pause();
                return;
            }
            if (song) void el.play().catch(()=>{});
            void c.resume().then(()=>{
                const n = c.currentTime + .1;
                nextTan = n;
                nextFlute = n + 1;
            });
        };
        document.addEventListener("visibilitychange", vis);
    },
    // called when a chapter becomes active: re-tunes everything and plays a short arrival gesture
    enter (i, rootHz, ambience = "none") {
        if (!c || !G) return;
        const t = c.currentTime;
        mood = MOODS[clamp(i, 0, MOODS.length - 1)];
        root = rootHz;
        phrase = 0;
        nextFlute = Math.max(nextFlute, t + 1.6);
        nextPulse = Math.max(nextPulse, t + 4);
        [
            1,
            1.5,
            .5
        ].forEach((m, k)=>G.pad[k].frequency.setTargetAtTime(root * m, t, 1.6));
        G.wind.g.gain.setTargetAtTime(mood.wind * (1 + 1.2 * energy), t, 2.5);
        amb = ambience;
        nextAmb = Math.max(nextAmb, t + .5);
        G.sea.gain.setTargetAtTime(ambience === "water" ? .035 : 0, t, 3);
        if (ambience === "wind") G.wind.g.gain.setTargetAtTime(mood.wind * 1.8 * (1 + 1.2 * energy), t, 2.5);
        if (mood.bells === "arp") [
            1,
            1.5,
            2
        ].forEach((m, k)=>bell(t + .8 + k * 1.1, root * 4 * m, .45));
        if (mood.bells === "cascade") for(let k = 0; k < 6; k++)bell(t + .8 + k * 1.3 + rnd(.4), root * 4 * [
            1,
            9 / 8,
            5 / 4,
            3 / 2,
            5 / 3
        ][Math.floor(rnd(5))], .3 + rnd(.15)); // a million lamps
    },
    // 0..1, fed from scroll speed: just a little more air in the wind
    setEnergy (e) {
        if (!c || !G) return;
        const t = c.currentTime;
        if (t - lastE < .12) return;
        lastE = t;
        energy = clamp(e, 0, 1);
        G.wind.g.gain.setTargetAtTime(mood.wind * (1 + 1.2 * energy), t, 1.2);
        G.wind.bp.forEach((b)=>b.frequency.setTargetAtTime(380 + 400 * energy, t, 1.2));
    },
    toggleSound () {
        this.select(track === "off" ? "default" : "off");
    },
    stop () {
        Object.values(els).forEach((e)=>e?.pause());
        clearInterval(timer);
        if (vis) document.removeEventListener("visibilitychange", vis);
        if (c) void c.close();
        c = null;
        G = null;
    }
};
}),
"[project]/lib/story.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BOOKS",
    ()=>BOOKS,
    "HAN_START",
    ()=>HAN_START,
    "chapters",
    ()=>chapters,
    "isPhoto",
    ()=>isPhoto,
    "thumbOf",
    ()=>thumbOf
]);
const ram = [
    {
        id: "birth",
        ar: 1.0,
        pal: [
            "#eddcca",
            "#d8baa1",
            "#281b23",
            "#431b17"
        ],
        amb: "birds",
        place: "Ayodhya",
        hiTitle: "जन्म",
        title: "The Birth of Shri Rama",
        accent: "#e8892b",
        orb: [
            0.3,
            0.55
        ],
        drone: 110,
        mood: 0,
        art: "/img/birth.webp",
        hi: "अयोध्या नगरी में राजा दशरथ को पुत्र की चाह थी। पवित्र यज्ञ की अग्नि से वरदान मिला, और चार राजकुमारों का जन्म हुआ। सबसे बड़े श्री राम अपने भीतर वह प्रकाश लिए थे, जिसे कोई राज्य समेट नहीं सकता था।",
        en: "In golden Ayodhya, King Dasharatha longed for a son. From the sacred fire came a gift, and four princes were born. The eldest, Shri Rama, carried a light no kingdom could hold."
    },
    {
        id: "sage",
        ar: 1.0,
        pal: [
            "#e8ddcf",
            "#d6bca3",
            "#28191d",
            "#431e16"
        ],
        amb: "fire",
        place: "Siddhashrama",
        hiTitle: "यज्ञ-रक्षा",
        title: "The Sage's Call",
        accent: "#d9781e",
        orb: [
            0.65,
            0.5
        ],
        drone: 104,
        mood: 0,
        art: "/img/sage.webp",
        hi: "ऋषि विश्वामित्र श्री राम और लक्ष्मण को अपने यज्ञ की रक्षा के लिए वन ले गए। श्री राम ने यज्ञ बचाया और शिला बनी अहिल्या को अपने चरणों के स्पर्श से मुक्त किया।",
        en: "Sage Vishwamitra led Shri Rama and Lakshmana into the forest to guard his sacred rite. Shri Rama protected it, and freed Ahalya from her long stone sleep with a touch of his feet."
    },
    {
        id: "bow",
        ar: 1.0,
        pal: [
            "#efdac8",
            "#d9baa1",
            "#281921",
            "#431c18"
        ],
        amb: "birds",
        place: "Mithila",
        hiTitle: "स्वयंवर",
        title: "The Bow of Shiva",
        accent: "#e0603a",
        orb: [
            0.35,
            0.4
        ],
        drone: 116,
        mood: 3,
        art: "/img/bow.webp",
        hi: "मिथिला में राजा जनक ने स्वयंवर रखा। श्री राम ने शिवजी का विशाल धनुष उठाया और वह बीच से टूट गया। सीता ने उन्हें वरमाला पहनाई।",
        en: "In Mithila, King Janaka held a great contest. Shri Rama lifted Shiva's mighty bow and it broke in two. Sita placed the garland around his neck."
    },
    {
        id: "exile",
        ar: 1.0,
        pal: [
            "#ebddcb",
            "#d6bda3",
            "#281d24",
            "#432118"
        ],
        amb: "birds",
        place: "Dandaka Forest",
        hiTitle: "वनवास",
        title: "The Exile",
        accent: "#3f9a5a",
        orb: [
            0.75,
            0.3
        ],
        drone: 98,
        mood: 1,
        art: "/img/exile.webp",
        hi: "राज्याभिषेक की पूर्व-संध्या पर, वर्षों पुराना एक वचन माँगा गया। श्री राम ने बिना एक शब्द कहे राजपाट त्याग दिया, और सीता व लक्ष्मण के साथ चौदह वर्ष के लिए वन को चल पड़े।",
        en: "On the eve of his crowning, an old promise was called due. Shri Rama gave up the throne without a word and walked into the forest for fourteen years, with Sita and Lakshmana."
    },
    {
        id: "bharata",
        ar: 1.0,
        pal: [
            "#e9ddce",
            "#d7bda2",
            "#281e24",
            "#43211a"
        ],
        amb: "water",
        place: "Chitrakoot",
        hiTitle: "भरत मिलाप",
        title: "Bharata and the Sandals",
        accent: "#c7771f",
        orb: [
            0.4,
            0.6
        ],
        drone: 92,
        mood: 1,
        art: "/img/bharata.webp",
        hi: "भरत वन में श्री राम से मिलने पहुँचे और लौटने की विनती की। श्री राम ने वचन नहीं तोड़ा। भरत उनकी चरण-पादुकाएँ ले गए और उन्हें सिंहासन पर रखकर राज चलाया।",
        en: "Bharata found Shri Rama in the forest and begged him to return. Shri Rama would not break his word, so Bharata carried home his sandals and ruled in their name."
    },
    {
        id: "deer",
        ar: 1.0,
        pal: [
            "#e7dbd0",
            "#d6bea4",
            "#28171e",
            "#432116"
        ],
        amb: "birds",
        place: "Panchavati",
        hiTitle: "स्वर्ण मृग",
        title: "The Golden Deer",
        accent: "#e59a1f",
        orb: [
            0.3,
            0.7
        ],
        drone: 87,
        mood: 2,
        art: "/img/deer.webp",
        hi: "वन में एक सोने का हिरण चमका। सीता ने उसे माँगा, और श्री राम उसके पीछे गए। सीता अकेली रह गईं, तभी लंका के दस सिरों वाले राजा रावण ने उन्हें आकाश मार्ग से हर लिया।",
        en: "A golden deer shimmered through the trees. Sita asked for it and Shri Rama followed. While she stood alone, Ravana, the ten-headed king of Lanka, carried her across the sky."
    },
    {
        id: "shabari",
        ar: 1.0,
        pal: [
            "#e7dccf",
            "#d5bca4",
            "#28191f",
            "#431f1a"
        ],
        amb: "birds",
        place: "Dandaka to Pampa",
        hiTitle: "जटायु और शबरी",
        title: "Jatayu and Shabari",
        accent: "#c0622a",
        orb: [
            0.7,
            0.55
        ],
        drone: 82,
        mood: 1,
        art: "/img/shabari.webp",
        hi: "घायल जटायु ने बताया कि रावण सीता को दक्षिण ले गया। आगे शबरी ने प्रेम से चखे हुए बेर खिलाए और श्री राम को सुग्रीव से मित्रता का मार्ग दिखाया।",
        en: "Dying Jatayu told Shri Rama which way Ravana had flown. Then Shabari offered berries she had tasted with love, and pointed him toward an ally, Sugriva."
    },
    {
        id: "friends",
        ar: 1.0,
        pal: [
            "#e7dccf",
            "#d7bca2",
            "#281c25",
            "#431f18"
        ],
        amb: "fire",
        place: "Kishkindha",
        hiTitle: "किष्किंधा",
        title: "Friends in Kishkindha",
        accent: "#d9792a",
        orb: [
            0.3,
            0.45
        ],
        drone: 108,
        mood: 4,
        art: "/img/friends.webp",
        hi: "ऋष्यमूक पर श्री राम की भेंट हनुमान और सुग्रीव से हुई। अग्नि को साक्षी मानकर मित्रता हुई, और श्री राम ने सुग्रीव को उसका राज्य दिलाया।",
        en: "On Mount Rishyamukha, Shri Rama met Hanuman and Sugriva. Their friendship was sworn before fire, and Shri Rama helped Sugriva win back his kingdom."
    },
    {
        id: "hanuman",
        ar: 1.0,
        pal: [
            "#eedbc8",
            "#d2bfa8",
            "#281b24",
            "#432821"
        ],
        amb: "wind",
        place: "Kishkindha to Lanka",
        hiTitle: "हनुमान",
        title: "Hanuman Leaps",
        accent: "#f08a2e",
        orb: [
            0.7,
            0.4
        ],
        drone: 123,
        mood: 3,
        art: "/img/hanuman.webp",
        hi: "पवनपुत्र हनुमान एक ही छलांग में सागर लाँघ गए। अशोक वाटिका में उन्होंने सीता को खोजा और श्री राम की अंगूठी दी। लगभग बुझ चुकी आशा फिर जल उठी।",
        en: "Hanuman, son of the wind, crossed the ocean in one leap. In Lanka's garden he found Sita and gave her Shri Rama's ring. Her nearly extinguished hope lit again."
    },
    {
        id: "bridge",
        ar: 1.0,
        pal: [
            "#dfddd8",
            "#d2bda7",
            "#192036",
            "#432321"
        ],
        amb: "water",
        place: "Rameswaram",
        hiTitle: "सेतु",
        title: "The Bridge of Stones",
        accent: "#2a8fa8",
        orb: [
            0.25,
            0.35
        ],
        drone: 104,
        mood: 4,
        art: "/img/bridge.webp",
        hi: "समुद्र के तट पर वानर सेना ने पत्थरों पर श्री राम का नाम लिखा। पत्थर तैरने लगे। कदम दर कदम, लंका की ओर जल पर एक सेतु बनता गया।",
        en: "At the sea's edge, an army of vanaras wrote Shri Rama's name on stones. The stones floated. Step by step, a bridge grew across the water toward Lanka."
    },
    {
        id: "war",
        ar: 1.0,
        pal: [
            "#ead9cc",
            "#d7bba2",
            "#28151d",
            "#431c17"
        ],
        amb: "fire",
        place: "Lanka",
        hiTitle: "युद्ध",
        title: "The War of Lanka",
        accent: "#e04a1e",
        orb: [
            0.6,
            0.65
        ],
        drone: 73,
        mood: 5,
        art: "/img/war.webp",
        hi: "दस दिन तक घमासान हुआ। बाण धूमकेतु की तरह जले। अंत में श्री राम ने रावण का सामना किया, और देवताओं के आशीर्वाद से एक बाण ने अंधकार को चीर दिया।",
        en: "Ten days of thunder. Arrows burned like comets. At last Shri Rama faced Ravana, and one arrow, blessed by the gods, broke the darkness apart."
    },
    {
        id: "return",
        ar: 1.5013,
        pal: [
            "#e7dbd0",
            "#dcb99d",
            "#281923",
            "#431b16"
        ],
        amb: "fire",
        place: "Ayodhya",
        hiTitle: "दीपावली",
        title: "The Return of Light",
        accent: "#f2a516",
        orb: [
            0.5,
            0.5
        ],
        drone: 130,
        mood: 6,
        art: "/img/return.webp",
        hi: "चौदह वर्ष बाद श्री राम अयोध्या लौटे। नगरवासियों ने उनके स्वागत में लाखों दीप जलाए। उसी प्रकाश की रात को हम हर वर्ष दिवाली के रूप में याद करते हैं।",
        en: "After fourteen years, Shri Rama returned to Ayodhya. The people lit a million lamps to guide him home. We remember that night of light every year as Diwali."
    }
];
// ───── Part two: the story of Hanuman ─────
const han = [
    {
        id: "h-birth",
        ar: 1.7778,
        pal: [
            "#e8dbcf",
            "#d6bda4",
            "#281a25",
            "#43231e"
        ],
        book: "han",
        amb: "wind",
        place: "Anjana's Hill",
        hiTitle: "पवन-पुत्र",
        title: "Son of the Wind",
        accent: "#ff8a3d",
        orb: [
            0.35,
            0.5
        ],
        drone: 98,
        mood: 7,
        art: "/img/h-birth.webp",
        hi: "वानरराज केसरी और माता अंजना के घर एक तेजस्वी बालक जन्मा। पवनदेव के आशीर्वाद से वह वायु की गति और अपार बल लेकर आया था।",
        en: "To Kesari and Anjana was born a radiant child, blessed by Vayu, the wind god, with the speed of the wind and strength without measure."
    },
    {
        id: "h-sun",
        ar: 1.7778,
        pal: [
            "#edddca",
            "#dfbc9a",
            "#281c22",
            "#43241f"
        ],
        book: "han",
        amb: "wind",
        place: "The Dawn Sky",
        hiTitle: "सूर्य-फल",
        title: "The Fruit in the Sky",
        accent: "#ffa51f",
        orb: [
            0.5,
            0.35
        ],
        drone: 104,
        mood: 3,
        art: "/img/h-sun.webp",
        hi: "भोर में उगते सूर्य को मीठा फल समझकर बालक हनुमान उसे पकड़ने आकाश में उछल पड़े। इंद्र के वज्र से उनकी ठोड़ी (हनु) पर चोट लगी, और तभी उनका नाम पड़ा हनुमान।",
        en: "Mistaking the rising sun for a sweet fruit, the child Hanuman leapt into the sky to catch it. Indra's thunderbolt struck his jaw, hanu, and so he was named Hanuman."
    },
    {
        id: "h-meet",
        ar: 1.0,
        pal: [
            "#eadccd",
            "#d7bea2",
            "#281c24",
            "#432219"
        ],
        book: "han",
        amb: "birds",
        place: "Rishyamukha",
        hiTitle: "प्रथम भेंट",
        title: "The First Meeting",
        accent: "#ee7f3a",
        orb: [
            0.6,
            0.55
        ],
        drone: 110,
        mood: 7,
        art: "/img/h-meet.webp",
        hi: "ऋष्यमूक पर्वत पर हनुमान ने पहली बार श्री राम और लक्ष्मण को देखा। उसी क्षण उनका हृदय झुक गया, और वे जीवन भर के लिए श्री राम के सेवक हो गए।",
        en: "On Mount Rishyamukha, Hanuman first saw Shri Rama and Lakshmana. In that moment his heart bowed, and he became Rama's servant for all time."
    },
    {
        id: "h-leap",
        ar: 1.7778,
        pal: [
            "#dddcda",
            "#c8bfb1",
            "#171d36",
            "#27273c"
        ],
        book: "han",
        amb: "water",
        place: "The Southern Sea",
        hiTitle: "सागर-लंघन",
        title: "The Great Leap",
        accent: "#46a8e0",
        orb: [
            0.45,
            0.45
        ],
        drone: 92,
        mood: 4,
        art: "/img/h-leap.webp",
        hi: "जाम्बवान ने उन्हें उनकी भूली हुई शक्ति याद दिलाई। हनुमान ने श्री राम का नाम लिया और सौ योजन का विशाल सागर एक ही छलाँग में पार करने निकल पड़े।",
        en: "Jambavan reminded him of the strength he had forgotten. Speaking Shri Rama's name, Hanuman rose and leapt across the hundred-league ocean."
    },
    {
        id: "h-ashoka",
        ar: 1.7778,
        pal: [
            "#e3dbd3",
            "#d1bca8",
            "#281925",
            "#431f1b"
        ],
        book: "han",
        amb: "birds",
        place: "Ashoka Vatika",
        hiTitle: "आशा की अँगूठी",
        title: "A Ring of Hope",
        accent: "#d65a9a",
        orb: [
            0.6,
            0.5
        ],
        drone: 87,
        mood: 1,
        art: "/img/h-ashoka.webp",
        hi: "अशोक वाटिका में माता सीता शोक में बैठी थीं। हनुमान ने श्री राम की मुद्रिका उनके सामने रखी, और बहुत दिनों बाद सीता के मुख पर आशा की मुस्कान लौटी।",
        en: "In the Ashoka grove Mother Sita sat in sorrow. Hanuman laid Shri Rama's ring before her, and after many days hope returned to her face."
    },
    {
        id: "h-lanka",
        ar: 1.7778,
        pal: [
            "#e8d9ce",
            "#d8baa1",
            "#28121c",
            "#431a15"
        ],
        book: "han",
        amb: "fire",
        place: "Lanka",
        hiTitle: "लंका-दहन",
        title: "Lanka Burns",
        accent: "#ff5a1f",
        orb: [
            0.5,
            0.6
        ],
        drone: 82,
        mood: 5,
        art: "/img/h-lanka.webp",
        hi: "रावण ने हनुमान की पूँछ में आग लगवा दी। उसी अग्नि से हनुमान ने अहंकार की नगरी लंका को जला दिया, और माता सीता का स्थान सुरक्षित रहा।",
        en: "Ravana set Hanuman's tail alight. With that very fire he burned the city of pride, while the grove where Sita sat was left untouched."
    },
    {
        id: "h-sanjeevani",
        ar: 1.7778,
        pal: [
            "#deded9",
            "#c8bfb2",
            "#192336",
            "#272b3c"
        ],
        book: "han",
        amb: "wind",
        place: "Dronagiri",
        hiTitle: "संजीवनी",
        title: "The Mountain of Herbs",
        accent: "#6fe0b0",
        orb: [
            0.4,
            0.5
        ],
        drone: 116,
        mood: 2,
        art: "/img/h-sanjeevani.webp",
        hi: "युद्ध में लक्ष्मण मूर्छित हो गए। जड़ी-बूटी पहचान न पाने पर हनुमान पूरा द्रोणागिरि पर्वत ही उठा लाए और रात बीतने से पहले लक्ष्मण को जीवन मिल गया।",
        en: "Lakshmana fell unconscious in battle. Unable to tell the herb from the rest, Hanuman lifted the whole mountain and brought it before the night was over."
    },
    {
        id: "h-heart",
        ar: 1.0,
        pal: [
            "#e7dcd0",
            "#d9baa1",
            "#28181c",
            "#431a15"
        ],
        book: "han",
        amb: "birds",
        place: "Ayodhya",
        hiTitle: "हृदय में राम",
        title: "Rama in His Heart",
        accent: "#ffcf5a",
        orb: [
            0.5,
            0.5
        ],
        drone: 110,
        mood: 6,
        art: "/img/h-heart.webp",
        hi: "जब पूछा गया कि उनके लिए श्री राम क्या हैं, तो हनुमान ने अपना हृदय खोलकर दिखाया। वहाँ श्री राम और माता सीता विराजमान थे। यही सच्ची भक्ति है।",
        en: "Asked what Shri Rama was to him, Hanuman opened his chest. There, within his heart, sat Rama and Sita. This is devotion in its purest form."
    }
];
const chapters = [
    ...ram.map((c)=>({
            ...c,
            book: "ram"
        })),
    ...han
];
const HAN_START = ram.length;
const BOOKS = {
    ram: {
        from: 0,
        to: ram.length,
        name: "रामायण"
    },
    han: {
        from: ram.length,
        to: ram.length + han.length,
        name: "हनुमान"
    }
};
const isPhoto = (c)=>c.art.startsWith("/img/");
const thumbOf = (c)=>isPhoto(c) ? c.art.replace("/img/", "/img/t/") : c.art;
}),
];

//# sourceMappingURL=_11iyk8z._.js.map