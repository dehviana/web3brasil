"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4390);
/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6688);
/* harmony import */ var remark_rehype__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2509);
/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1871);
/* harmony import */ var rehype_stringify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5390);
/* harmony import */ var rehype_external_links__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3738);
/* harmony import */ var rehype_slug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7752);
/* harmony import */ var rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9847);
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3677);
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([unified__WEBPACK_IMPORTED_MODULE_2__, remark_parse__WEBPACK_IMPORTED_MODULE_3__, remark_rehype__WEBPACK_IMPORTED_MODULE_4__, rehype_raw__WEBPACK_IMPORTED_MODULE_5__, rehype_stringify__WEBPACK_IMPORTED_MODULE_6__, rehype_external_links__WEBPACK_IMPORTED_MODULE_7__, rehype_slug__WEBPACK_IMPORTED_MODULE_8__, rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_9__]);
([unified__WEBPACK_IMPORTED_MODULE_2__, remark_parse__WEBPACK_IMPORTED_MODULE_3__, remark_rehype__WEBPACK_IMPORTED_MODULE_4__, rehype_raw__WEBPACK_IMPORTED_MODULE_5__, rehype_stringify__WEBPACK_IMPORTED_MODULE_6__, rehype_external_links__WEBPACK_IMPORTED_MODULE_7__, rehype_slug__WEBPACK_IMPORTED_MODULE_8__, rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function Home({ content  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_11___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Web3 Brasil & Cripto - Uma curadoria de links incr\xedveis da Web3, bibliotecas, ferramentas e muito mais. "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "title",
                        content: "Web3 BR & Cripto - Uma curadoria de links incr\xedveis da Web3, Defi, NFTs e muito mais. "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Web3 BR & Cripto - Uma curadoria de links incr\xedveis da Web3, Defi, NFTs e muito mais. "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: "Web3 BR & Cripto"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:site_name",
                        content: "Web3 BR & Cripto - "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:url",
                        content: "https://web3br.com"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: "Web3 BR & Cripto - Uma curadoria de links incr\xedveis da Web3, Defi, NFTs e muito mais. "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:creator",
                        content: "@web3br"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:title",
                        content: "Web3 Brasil"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:description",
                        content: "Web3 Brasil & Cripto - Uma curadoria de links incr\xedveis da Web3, Defi, NFTs e muito mais. "
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "mx-4 my-12 lg:mx-0 flex flex-row justify-center bg-black text-white",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                    className: "prose prose-a:text-blue-700 prose-a:no-underline text-white hover:prose-a:underline prose-a:text-nowrap prose-a:font-mono prose-headings:text-gray prose-headings:my-0 prose-h2:mb-2 prose-h2:text-white prose-h3:text-white prose-h1:text-white prose-li:my-0",
                    children: react_render_html__WEBPACK_IMPORTED_MODULE_10___default()(content)
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                className: "flex flex-row justify-center mb-4 text-white bg-black",
                children: [
                    "by ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                        href: "https://github.com/dehviana",
                        passHref: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            target: "_blank",
                            rel: "noopener",
                            className: "mx-1 text-blue-700 no-underline hover:underline text-nowrap",
                            children: "Andr\xe9 L.F.V"
                        })
                    }),
                    " |",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                        href: "https://twitter.com/monomonio",
                        passHref: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            target: "_blank",
                            rel: "noopener",
                            className: "mx-1 text-blue-700 no-underline hover:underline text-nowrap",
                            children: "monomonio"
                        })
                    })
                ]
            })
        ]
    });
};
async function getStaticProps({ params  }) {
    let readmePath = "README.md";
    if ((params === null || params === void 0 ? void 0 : params.locale) && params.locale !== "en") {
        readmePath = join("locales", params.locale, "README.md");
    }
    const readmeFile = (0,fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync)(readmePath).toString();
    const content = await (0,unified__WEBPACK_IMPORTED_MODULE_2__.unified)().use(remark_parse__WEBPACK_IMPORTED_MODULE_3__["default"]).use(remark_rehype__WEBPACK_IMPORTED_MODULE_4__["default"], {
        allowDangerousHtml: true
    }).use(rehype_external_links__WEBPACK_IMPORTED_MODULE_7__["default"], {
        target: "_blank",
        rel: [
            "nofollow",
            "noopener"
        ]
    }).use(rehype_raw__WEBPACK_IMPORTED_MODULE_5__["default"]).use(rehype_slug__WEBPACK_IMPORTED_MODULE_8__["default"]).use(rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_9__["default"]).use(rehype_stringify__WEBPACK_IMPORTED_MODULE_6__["default"], {
        allowDangerousHtml: true
    }).process(readmeFile);
    return {
        props: {
            content: content.toString()
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3677:
/***/ ((module) => {

module.exports = require("react-render-html");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = import("rehype-autolink-headings");;

/***/ }),

/***/ 3738:
/***/ ((module) => {

module.exports = import("rehype-external-links");;

/***/ }),

/***/ 1871:
/***/ ((module) => {

module.exports = import("rehype-raw");;

/***/ }),

/***/ 7752:
/***/ ((module) => {

module.exports = import("rehype-slug");;

/***/ }),

/***/ 5390:
/***/ ((module) => {

module.exports = import("rehype-stringify");;

/***/ }),

/***/ 6688:
/***/ ((module) => {

module.exports = import("remark-parse");;

/***/ }),

/***/ 2509:
/***/ ((module) => {

module.exports = import("remark-rehype");;

/***/ }),

/***/ 4390:
/***/ ((module) => {

module.exports = import("unified");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,61], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();