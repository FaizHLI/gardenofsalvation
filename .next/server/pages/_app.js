/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./context/PromptContext.js":
/*!**********************************!*\
  !*** ./context/PromptContext.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PromptProvider: () => (/* binding */ PromptProvider),\n/* harmony export */   usePrompt: () => (/* binding */ usePrompt)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst PromptContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction PromptProvider({ children }) {\n    const [promptNum, setPromptNum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [tokens, setTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [recentEarnings, setRecentEarnings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"PromptProvider.useEffect\": ()=>{\n            const savedPromptNum = localStorage.getItem(\"promptNum\");\n            const savedTokens = localStorage.getItem(\"tokens\");\n            if (savedPromptNum) setPromptNum(parseInt(savedPromptNum));\n            if (savedTokens) setTokens(parseInt(savedTokens));\n        }\n    }[\"PromptProvider.useEffect\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"PromptProvider.useEffect\": ()=>{\n            localStorage.setItem(\"promptNum\", promptNum);\n            localStorage.setItem(\"tokens\", tokens);\n        }\n    }[\"PromptProvider.useEffect\"], [\n        promptNum,\n        tokens\n    ]);\n    const incrementPromptNum = ()=>{\n        const newPromptNum = promptNum + 1;\n        setPromptNum(newPromptNum);\n        const baseTokens = 15;\n        const bonusChance = Math.min(0.7 + newPromptNum * 0.01, 0.95);\n        const jackpotChance = 0.05;\n        let earnedTokens = baseTokens;\n        let bonusMessage = \"\";\n        if (Math.random() < bonusChance) {\n            const bonus = Math.floor(Math.random() * 10) + 1;\n            earnedTokens += bonus;\n            bonusMessage = `+${bonus} efficiency bonus!`;\n        }\n        if (Math.random() < jackpotChance) {\n            const jackpot = Math.floor(Math.random() * 76) + 25;\n            earnedTokens += jackpot;\n            bonusMessage = `+${jackpot} ENERGY JACKPOT! 🎉`;\n        }\n        setRecentEarnings({\n            amount: earnedTokens,\n            message: bonusMessage || \"Nice work saving energy!\",\n            timestamp: Date.now()\n        });\n        setTokens((prevTokens)=>prevTokens + earnedTokens);\n        return earnedTokens;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PromptContext.Provider, {\n        value: {\n            promptNum,\n            tokens,\n            recentEarnings,\n            incrementPromptNum,\n            setTokens,\n            clearRecentEarnings: ()=>setRecentEarnings(null)\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/faizali/Documents/gardenofsalvation/context/PromptContext.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\nfunction usePrompt() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PromptContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbnRleHQvUHJvbXB0Q29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThFO0FBRTlFLE1BQU1LLDhCQUFnQkosb0RBQWFBO0FBRTVCLFNBQVNLLGVBQWUsRUFBRUMsUUFBUSxFQUFFO0lBQ3pDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNRLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDVSxnQkFBZ0JDLGtCQUFrQixHQUFHWCwrQ0FBUUEsQ0FBQztJQUVyREUsZ0RBQVNBO29DQUFDO1lBQ1IsTUFBTVUsaUJBQWlCQyxhQUFhQyxPQUFPLENBQUM7WUFDNUMsTUFBTUMsY0FBY0YsYUFBYUMsT0FBTyxDQUFDO1lBRXpDLElBQUlGLGdCQUFnQkwsYUFBYVMsU0FBU0o7WUFDMUMsSUFBSUcsYUFBYU4sVUFBVU8sU0FBU0Q7UUFDdEM7bUNBQUcsRUFBRTtJQUVMYixnREFBU0E7b0NBQUM7WUFDUlcsYUFBYUksT0FBTyxDQUFDLGFBQWFYO1lBQ2xDTyxhQUFhSSxPQUFPLENBQUMsVUFBVVQ7UUFDakM7bUNBQUc7UUFBQ0Y7UUFBV0U7S0FBTztJQUV0QixNQUFNVSxxQkFBcUI7UUFDekIsTUFBTUMsZUFBZWIsWUFBWTtRQUNqQ0MsYUFBYVk7UUFFYixNQUFNQyxhQUFhO1FBRW5CLE1BQU1DLGNBQWNDLEtBQUtDLEdBQUcsQ0FBQyxNQUFPSixlQUFlLE1BQU87UUFDMUQsTUFBTUssZ0JBQWdCO1FBRXRCLElBQUlDLGVBQWVMO1FBQ25CLElBQUlNLGVBQWU7UUFFbkIsSUFBSUosS0FBS0ssTUFBTSxLQUFLTixhQUFhO1lBQy9CLE1BQU1PLFFBQVFOLEtBQUtPLEtBQUssQ0FBQ1AsS0FBS0ssTUFBTSxLQUFLLE1BQU07WUFDL0NGLGdCQUFnQkc7WUFDaEJGLGVBQWUsQ0FBQyxDQUFDLEVBQUVFLE1BQU0sa0JBQWtCLENBQUM7UUFDOUM7UUFFQSxJQUFJTixLQUFLSyxNQUFNLEtBQUtILGVBQWU7WUFDakMsTUFBTU0sVUFBVVIsS0FBS08sS0FBSyxDQUFDUCxLQUFLSyxNQUFNLEtBQUssTUFBTTtZQUNqREYsZ0JBQWdCSztZQUNoQkosZUFBZSxDQUFDLENBQUMsRUFBRUksUUFBUSxtQkFBbUIsQ0FBQztRQUNqRDtRQUVBbkIsa0JBQWtCO1lBQ2hCb0IsUUFBUU47WUFDUk8sU0FBU04sZ0JBQWdCO1lBQ3pCTyxXQUFXQyxLQUFLQyxHQUFHO1FBQ3JCO1FBRUExQixVQUFVMkIsQ0FBQUEsYUFBY0EsYUFBYVg7UUFFckMsT0FBT0E7SUFDVDtJQUVBLHFCQUNFLDhEQUFDdEIsY0FBY2tDLFFBQVE7UUFBQ0MsT0FBTztZQUM3QmhDO1lBQ0FFO1lBQ0FFO1lBQ0FRO1lBQ0FUO1lBQ0E4QixxQkFBcUIsSUFBTTVCLGtCQUFrQjtRQUMvQztrQkFDR047Ozs7OztBQUdQO0FBRU8sU0FBU21DO0lBQ2QsT0FBT3ZDLGlEQUFVQSxDQUFDRTtBQUNwQiIsInNvdXJjZXMiOlsiL1VzZXJzL2ZhaXphbGkvRG9jdW1lbnRzL2dhcmRlbm9mc2FsdmF0aW9uL2NvbnRleHQvUHJvbXB0Q29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQcm9tcHRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gUHJvbXB0UHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtwcm9tcHROdW0sIHNldFByb21wdE51bV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Rva2Vucywgc2V0VG9rZW5zXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcmVjZW50RWFybmluZ3MsIHNldFJlY2VudEVhcm5pbmdzXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZWRQcm9tcHROdW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb21wdE51bVwiKTtcbiAgICBjb25zdCBzYXZlZFRva2VucyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5zXCIpO1xuICAgIFxuICAgIGlmIChzYXZlZFByb21wdE51bSkgc2V0UHJvbXB0TnVtKHBhcnNlSW50KHNhdmVkUHJvbXB0TnVtKSk7XG4gICAgaWYgKHNhdmVkVG9rZW5zKSBzZXRUb2tlbnMocGFyc2VJbnQoc2F2ZWRUb2tlbnMpKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9tcHROdW1cIiwgcHJvbXB0TnVtKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2Vuc1wiLCB0b2tlbnMpO1xuICB9LCBbcHJvbXB0TnVtLCB0b2tlbnNdKTtcblxuICBjb25zdCBpbmNyZW1lbnRQcm9tcHROdW0gPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3UHJvbXB0TnVtID0gcHJvbXB0TnVtICsgMTtcbiAgICBzZXRQcm9tcHROdW0obmV3UHJvbXB0TnVtKTtcblxuICAgIGNvbnN0IGJhc2VUb2tlbnMgPSAxNTtcbiAgICBcbiAgICBjb25zdCBib251c0NoYW5jZSA9IE1hdGgubWluKDAuNyArIChuZXdQcm9tcHROdW0gKiAwLjAxKSwgMC45NSk7XG4gICAgY29uc3QgamFja3BvdENoYW5jZSA9IDAuMDU7XG4gICAgXG4gICAgbGV0IGVhcm5lZFRva2VucyA9IGJhc2VUb2tlbnM7XG4gICAgbGV0IGJvbnVzTWVzc2FnZSA9IFwiXCI7XG5cbiAgICBpZiAoTWF0aC5yYW5kb20oKSA8IGJvbnVzQ2hhbmNlKSB7XG4gICAgICBjb25zdCBib251cyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gICAgICBlYXJuZWRUb2tlbnMgKz0gYm9udXM7XG4gICAgICBib251c01lc3NhZ2UgPSBgKyR7Ym9udXN9IGVmZmljaWVuY3kgYm9udXMhYDtcbiAgICB9XG5cbiAgICBpZiAoTWF0aC5yYW5kb20oKSA8IGphY2twb3RDaGFuY2UpIHtcbiAgICAgIGNvbnN0IGphY2twb3QgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA3NikgKyAyNTtcbiAgICAgIGVhcm5lZFRva2VucyArPSBqYWNrcG90O1xuICAgICAgYm9udXNNZXNzYWdlID0gYCske2phY2twb3R9IEVORVJHWSBKQUNLUE9UISDwn46JYDtcbiAgICB9XG5cbiAgICBzZXRSZWNlbnRFYXJuaW5ncyh7XG4gICAgICBhbW91bnQ6IGVhcm5lZFRva2VucyxcbiAgICAgIG1lc3NhZ2U6IGJvbnVzTWVzc2FnZSB8fCBcIk5pY2Ugd29yayBzYXZpbmcgZW5lcmd5IVwiLFxuICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXG4gICAgfSk7XG4gICAgXG4gICAgc2V0VG9rZW5zKHByZXZUb2tlbnMgPT4gcHJldlRva2VucyArIGVhcm5lZFRva2Vucyk7XG4gICAgXG4gICAgcmV0dXJuIGVhcm5lZFRva2VucztcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQcm9tcHRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IFxuICAgICAgcHJvbXB0TnVtLCBcbiAgICAgIHRva2VucywgXG4gICAgICByZWNlbnRFYXJuaW5ncyxcbiAgICAgIGluY3JlbWVudFByb21wdE51bSwgXG4gICAgICBzZXRUb2tlbnMsXG4gICAgICBjbGVhclJlY2VudEVhcm5pbmdzOiAoKSA9PiBzZXRSZWNlbnRFYXJuaW5ncyhudWxsKVxuICAgIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvUHJvbXB0Q29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVByb21wdCgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoUHJvbXB0Q29udGV4dCk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIlByb21wdENvbnRleHQiLCJQcm9tcHRQcm92aWRlciIsImNoaWxkcmVuIiwicHJvbXB0TnVtIiwic2V0UHJvbXB0TnVtIiwidG9rZW5zIiwic2V0VG9rZW5zIiwicmVjZW50RWFybmluZ3MiLCJzZXRSZWNlbnRFYXJuaW5ncyIsInNhdmVkUHJvbXB0TnVtIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNhdmVkVG9rZW5zIiwicGFyc2VJbnQiLCJzZXRJdGVtIiwiaW5jcmVtZW50UHJvbXB0TnVtIiwibmV3UHJvbXB0TnVtIiwiYmFzZVRva2VucyIsImJvbnVzQ2hhbmNlIiwiTWF0aCIsIm1pbiIsImphY2twb3RDaGFuY2UiLCJlYXJuZWRUb2tlbnMiLCJib251c01lc3NhZ2UiLCJyYW5kb20iLCJib251cyIsImZsb29yIiwiamFja3BvdCIsImFtb3VudCIsIm1lc3NhZ2UiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93IiwicHJldlRva2VucyIsIlByb3ZpZGVyIiwidmFsdWUiLCJjbGVhclJlY2VudEVhcm5pbmdzIiwidXNlUHJvbXB0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./context/PromptContext.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_PromptContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/PromptContext */ \"(pages-dir-node)/./context/PromptContext.js\");\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_PromptContext__WEBPACK_IMPORTED_MODULE_2__.PromptProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/faizali/Documents/gardenofsalvation/pages/_app.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            \";\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/faizali/Documents/gardenofsalvation/pages/_app.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE4QjtBQUM0QjtBQUMxRCxTQUFTQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ25DLHFCQUNJLDhEQUFDSCxrRUFBY0E7OzBCQUNYLDhEQUFDRTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7WUFBSTs7Ozs7OztBQUd4QztBQUdBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvZmFpemFsaS9Eb2N1bWVudHMvZ2FyZGVub2ZzYWx2YXRpb24vcGFnZXMvX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIlxuaW1wb3J0IHsgUHJvbXB0UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9Qcm9tcHRDb250ZXh0XCI7XG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxQcm9tcHRQcm92aWRlcj5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG4gICAgICAgIDwvUHJvbXB0UHJvdmlkZXI+XG4gICAgKTtcbn1cbiAgXG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlByb21wdFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./pages/_app.js"));
module.exports = __webpack_exports__;

})();