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
exports.id = "pages/_error";
exports.ids = ["pages/_error"];
exports.modules = {

/***/ "(pages-dir-node)/./context/PromptContext.js":
/*!**********************************!*\
  !*** ./context/PromptContext.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PromptProvider: () => (/* binding */ PromptProvider),\n/* harmony export */   usePrompt: () => (/* binding */ usePrompt)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst PromptContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction PromptProvider({ children }) {\n    const [promptNum, setPromptNum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [tokens, setTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [recentEarnings, setRecentEarnings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // Load data from localStorage on mount\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"PromptProvider.useEffect\": ()=>{\n            const savedPromptNum = localStorage.getItem(\"promptNum\");\n            const savedTokens = localStorage.getItem(\"tokens\");\n            if (savedPromptNum) setPromptNum(parseInt(savedPromptNum));\n            if (savedTokens) setTokens(parseInt(savedTokens));\n        }\n    }[\"PromptProvider.useEffect\"], []);\n    // Save data to localStorage when it changes\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"PromptProvider.useEffect\": ()=>{\n            localStorage.setItem(\"promptNum\", promptNum);\n            localStorage.setItem(\"tokens\", tokens);\n        }\n    }[\"PromptProvider.useEffect\"], [\n        promptNum,\n        tokens\n    ]);\n    const incrementPromptNum = ()=>{\n        const newPromptNum = promptNum + 1;\n        setPromptNum(newPromptNum);\n        // Calculate tokens earned with fun randomness\n        const baseTokens = 15; // Base tokens per prompt\n        // Random bonus based on:\n        // 1. Base chance (70%) to get bonus tokens\n        // 2. Prompt number influences bonus chance (more prompts = more experience = better rewards)\n        // 3. Random \"jackpot\" chance for big rewards\n        const bonusChance = Math.min(0.7 + newPromptNum * 0.01, 0.95); // Increases with usage but caps at 95%\n        const jackpotChance = 0.05; // 5% chance of jackpot\n        let earnedTokens = baseTokens;\n        let bonusMessage = \"\";\n        // Regular bonus (1-10 extra tokens)\n        if (Math.random() < bonusChance) {\n            const bonus = Math.floor(Math.random() * 10) + 1;\n            earnedTokens += bonus;\n            bonusMessage = `+${bonus} efficiency bonus!`;\n        }\n        // Jackpot chance (25-100 tokens)\n        if (Math.random() < jackpotChance) {\n            const jackpot = Math.floor(Math.random() * 76) + 25;\n            earnedTokens += jackpot;\n            bonusMessage = `+${jackpot} ENERGY JACKPOT! 🎉`;\n        }\n        // Set recent earnings with the bonus message for display\n        setRecentEarnings({\n            amount: earnedTokens,\n            message: bonusMessage || \"Nice work saving energy!\",\n            timestamp: Date.now()\n        });\n        setTokens((prevTokens)=>prevTokens + earnedTokens);\n        return earnedTokens;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PromptContext.Provider, {\n        value: {\n            promptNum,\n            tokens,\n            recentEarnings,\n            incrementPromptNum,\n            setTokens,\n            clearRecentEarnings: ()=>setRecentEarnings(null)\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/faizali/Documents/gardenofsalvation/context/PromptContext.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\nfunction usePrompt() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PromptContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbnRleHQvUHJvbXB0Q29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThFO0FBRTlFLE1BQU1LLDhCQUFnQkosb0RBQWFBO0FBRTVCLFNBQVNLLGVBQWUsRUFBRUMsUUFBUSxFQUFFO0lBQ3pDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNRLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDVSxnQkFBZ0JDLGtCQUFrQixHQUFHWCwrQ0FBUUEsQ0FBQztJQUVyRCx1Q0FBdUM7SUFDdkNFLGdEQUFTQTtvQ0FBQztZQUNSLE1BQU1VLGlCQUFpQkMsYUFBYUMsT0FBTyxDQUFDO1lBQzVDLE1BQU1DLGNBQWNGLGFBQWFDLE9BQU8sQ0FBQztZQUV6QyxJQUFJRixnQkFBZ0JMLGFBQWFTLFNBQVNKO1lBQzFDLElBQUlHLGFBQWFOLFVBQVVPLFNBQVNEO1FBQ3RDO21DQUFHLEVBQUU7SUFFTCw0Q0FBNEM7SUFDNUNiLGdEQUFTQTtvQ0FBQztZQUNSVyxhQUFhSSxPQUFPLENBQUMsYUFBYVg7WUFDbENPLGFBQWFJLE9BQU8sQ0FBQyxVQUFVVDtRQUNqQzttQ0FBRztRQUFDRjtRQUFXRTtLQUFPO0lBRXRCLE1BQU1VLHFCQUFxQjtRQUN6QixNQUFNQyxlQUFlYixZQUFZO1FBQ2pDQyxhQUFhWTtRQUViLDhDQUE4QztRQUM5QyxNQUFNQyxhQUFhLElBQUkseUJBQXlCO1FBRWhELHlCQUF5QjtRQUN6QiwyQ0FBMkM7UUFDM0MsNkZBQTZGO1FBQzdGLDZDQUE2QztRQUU3QyxNQUFNQyxjQUFjQyxLQUFLQyxHQUFHLENBQUMsTUFBT0osZUFBZSxNQUFPLE9BQU8sdUNBQXVDO1FBQ3hHLE1BQU1LLGdCQUFnQixNQUFNLHVCQUF1QjtRQUVuRCxJQUFJQyxlQUFlTDtRQUNuQixJQUFJTSxlQUFlO1FBRW5CLG9DQUFvQztRQUNwQyxJQUFJSixLQUFLSyxNQUFNLEtBQUtOLGFBQWE7WUFDL0IsTUFBTU8sUUFBUU4sS0FBS08sS0FBSyxDQUFDUCxLQUFLSyxNQUFNLEtBQUssTUFBTTtZQUMvQ0YsZ0JBQWdCRztZQUNoQkYsZUFBZSxDQUFDLENBQUMsRUFBRUUsTUFBTSxrQkFBa0IsQ0FBQztRQUM5QztRQUVBLGlDQUFpQztRQUNqQyxJQUFJTixLQUFLSyxNQUFNLEtBQUtILGVBQWU7WUFDakMsTUFBTU0sVUFBVVIsS0FBS08sS0FBSyxDQUFDUCxLQUFLSyxNQUFNLEtBQUssTUFBTTtZQUNqREYsZ0JBQWdCSztZQUNoQkosZUFBZSxDQUFDLENBQUMsRUFBRUksUUFBUSxtQkFBbUIsQ0FBQztRQUNqRDtRQUVBLHlEQUF5RDtRQUN6RG5CLGtCQUFrQjtZQUNoQm9CLFFBQVFOO1lBQ1JPLFNBQVNOLGdCQUFnQjtZQUN6Qk8sV0FBV0MsS0FBS0MsR0FBRztRQUNyQjtRQUVBMUIsVUFBVTJCLENBQUFBLGFBQWNBLGFBQWFYO1FBRXJDLE9BQU9BO0lBQ1Q7SUFFQSxxQkFDRSw4REFBQ3RCLGNBQWNrQyxRQUFRO1FBQUNDLE9BQU87WUFDN0JoQztZQUNBRTtZQUNBRTtZQUNBUTtZQUNBVDtZQUNBOEIscUJBQXFCLElBQU01QixrQkFBa0I7UUFDL0M7a0JBQ0dOOzs7Ozs7QUFHUDtBQUVPLFNBQVNtQztJQUNkLE9BQU92QyxpREFBVUEsQ0FBQ0U7QUFDcEIiLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWl6YWxpL0RvY3VtZW50cy9nYXJkZW5vZnNhbHZhdGlvbi9jb250ZXh0L1Byb21wdENvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUHJvbXB0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIFByb21wdFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbcHJvbXB0TnVtLCBzZXRQcm9tcHROdW1dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt0b2tlbnMsIHNldFRva2Vuc10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3JlY2VudEVhcm5pbmdzLCBzZXRSZWNlbnRFYXJuaW5nc10gPSB1c2VTdGF0ZShudWxsKTtcblxuICAvLyBMb2FkIGRhdGEgZnJvbSBsb2NhbFN0b3JhZ2Ugb24gbW91bnRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzYXZlZFByb21wdE51bSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvbXB0TnVtXCIpO1xuICAgIGNvbnN0IHNhdmVkVG9rZW5zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlbnNcIik7XG4gICAgXG4gICAgaWYgKHNhdmVkUHJvbXB0TnVtKSBzZXRQcm9tcHROdW0ocGFyc2VJbnQoc2F2ZWRQcm9tcHROdW0pKTtcbiAgICBpZiAoc2F2ZWRUb2tlbnMpIHNldFRva2VucyhwYXJzZUludChzYXZlZFRva2VucykpO1xuICB9LCBbXSk7XG5cbiAgLy8gU2F2ZSBkYXRhIHRvIGxvY2FsU3RvcmFnZSB3aGVuIGl0IGNoYW5nZXNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb21wdE51bVwiLCBwcm9tcHROdW0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5zXCIsIHRva2Vucyk7XG4gIH0sIFtwcm9tcHROdW0sIHRva2Vuc10pO1xuXG4gIGNvbnN0IGluY3JlbWVudFByb21wdE51bSA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdQcm9tcHROdW0gPSBwcm9tcHROdW0gKyAxO1xuICAgIHNldFByb21wdE51bShuZXdQcm9tcHROdW0pO1xuICAgIFxuICAgIC8vIENhbGN1bGF0ZSB0b2tlbnMgZWFybmVkIHdpdGggZnVuIHJhbmRvbW5lc3NcbiAgICBjb25zdCBiYXNlVG9rZW5zID0gMTU7IC8vIEJhc2UgdG9rZW5zIHBlciBwcm9tcHRcbiAgICBcbiAgICAvLyBSYW5kb20gYm9udXMgYmFzZWQgb246XG4gICAgLy8gMS4gQmFzZSBjaGFuY2UgKDcwJSkgdG8gZ2V0IGJvbnVzIHRva2Vuc1xuICAgIC8vIDIuIFByb21wdCBudW1iZXIgaW5mbHVlbmNlcyBib251cyBjaGFuY2UgKG1vcmUgcHJvbXB0cyA9IG1vcmUgZXhwZXJpZW5jZSA9IGJldHRlciByZXdhcmRzKVxuICAgIC8vIDMuIFJhbmRvbSBcImphY2twb3RcIiBjaGFuY2UgZm9yIGJpZyByZXdhcmRzXG4gICAgXG4gICAgY29uc3QgYm9udXNDaGFuY2UgPSBNYXRoLm1pbigwLjcgKyAobmV3UHJvbXB0TnVtICogMC4wMSksIDAuOTUpOyAvLyBJbmNyZWFzZXMgd2l0aCB1c2FnZSBidXQgY2FwcyBhdCA5NSVcbiAgICBjb25zdCBqYWNrcG90Q2hhbmNlID0gMC4wNTsgLy8gNSUgY2hhbmNlIG9mIGphY2twb3RcbiAgICBcbiAgICBsZXQgZWFybmVkVG9rZW5zID0gYmFzZVRva2VucztcbiAgICBsZXQgYm9udXNNZXNzYWdlID0gXCJcIjtcbiAgICBcbiAgICAvLyBSZWd1bGFyIGJvbnVzICgxLTEwIGV4dHJhIHRva2VucylcbiAgICBpZiAoTWF0aC5yYW5kb20oKSA8IGJvbnVzQ2hhbmNlKSB7XG4gICAgICBjb25zdCBib251cyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gICAgICBlYXJuZWRUb2tlbnMgKz0gYm9udXM7XG4gICAgICBib251c01lc3NhZ2UgPSBgKyR7Ym9udXN9IGVmZmljaWVuY3kgYm9udXMhYDtcbiAgICB9XG4gICAgXG4gICAgLy8gSmFja3BvdCBjaGFuY2UgKDI1LTEwMCB0b2tlbnMpXG4gICAgaWYgKE1hdGgucmFuZG9tKCkgPCBqYWNrcG90Q2hhbmNlKSB7XG4gICAgICBjb25zdCBqYWNrcG90ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNzYpICsgMjU7XG4gICAgICBlYXJuZWRUb2tlbnMgKz0gamFja3BvdDtcbiAgICAgIGJvbnVzTWVzc2FnZSA9IGArJHtqYWNrcG90fSBFTkVSR1kgSkFDS1BPVCEg8J+OiWA7XG4gICAgfVxuICAgIFxuICAgIC8vIFNldCByZWNlbnQgZWFybmluZ3Mgd2l0aCB0aGUgYm9udXMgbWVzc2FnZSBmb3IgZGlzcGxheVxuICAgIHNldFJlY2VudEVhcm5pbmdzKHtcbiAgICAgIGFtb3VudDogZWFybmVkVG9rZW5zLFxuICAgICAgbWVzc2FnZTogYm9udXNNZXNzYWdlIHx8IFwiTmljZSB3b3JrIHNhdmluZyBlbmVyZ3khXCIsXG4gICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcbiAgICB9KTtcbiAgICBcbiAgICBzZXRUb2tlbnMocHJldlRva2VucyA9PiBwcmV2VG9rZW5zICsgZWFybmVkVG9rZW5zKTtcbiAgICBcbiAgICByZXR1cm4gZWFybmVkVG9rZW5zO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFByb21wdENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgXG4gICAgICBwcm9tcHROdW0sIFxuICAgICAgdG9rZW5zLCBcbiAgICAgIHJlY2VudEVhcm5pbmdzLFxuICAgICAgaW5jcmVtZW50UHJvbXB0TnVtLCBcbiAgICAgIHNldFRva2VucywgLy8gRXhwb3NlIGZvciBwdXJjaGFzZXNcbiAgICAgIGNsZWFyUmVjZW50RWFybmluZ3M6ICgpID0+IHNldFJlY2VudEVhcm5pbmdzKG51bGwpXG4gICAgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Qcm9tcHRDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlUHJvbXB0KCkge1xuICByZXR1cm4gdXNlQ29udGV4dChQcm9tcHRDb250ZXh0KTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiUHJvbXB0Q29udGV4dCIsIlByb21wdFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJwcm9tcHROdW0iLCJzZXRQcm9tcHROdW0iLCJ0b2tlbnMiLCJzZXRUb2tlbnMiLCJyZWNlbnRFYXJuaW5ncyIsInNldFJlY2VudEVhcm5pbmdzIiwic2F2ZWRQcm9tcHROdW0iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2F2ZWRUb2tlbnMiLCJwYXJzZUludCIsInNldEl0ZW0iLCJpbmNyZW1lbnRQcm9tcHROdW0iLCJuZXdQcm9tcHROdW0iLCJiYXNlVG9rZW5zIiwiYm9udXNDaGFuY2UiLCJNYXRoIiwibWluIiwiamFja3BvdENoYW5jZSIsImVhcm5lZFRva2VucyIsImJvbnVzTWVzc2FnZSIsInJhbmRvbSIsImJvbnVzIiwiZmxvb3IiLCJqYWNrcG90IiwiYW1vdW50IiwibWVzc2FnZSIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJwcmV2VG9rZW5zIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNsZWFyUmVjZW50RWFybmluZ3MiLCJ1c2VQcm9tcHQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./context/PromptContext.js\n");

/***/ }),

/***/ "(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=private-next-pages%2F_error&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=private-next-pages%2F_error&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages/module.compiled */ \"(pages-dir-node)/./node_modules/next/dist/server/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(pages-dir-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(pages-dir-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"(pages-dir-node)/./node_modules/next/dist/pages/_document.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"(pages-dir-node)/./pages/_app.js\");\n/* harmony import */ var private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! private-next-pages/_error */ \"(pages-dir-node)/./node_modules/next/dist/pages/_error.js\");\n/* harmony import */ var private_next_pages_error__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, 'default'));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, 'config');\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/_error\",\n        pathname: \"/_error\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    components: {\n        // default export might not exist when optimized for data only\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: (private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default())\n    },\n    userland: private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__\n});\n\n//# sourceMappingURL=pages.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVMmcGFnZT0lMkZfZXJyb3ImcHJlZmVycmVkUmVnaW9uPSZhYnNvbHV0ZVBhZ2VQYXRoPXByaXZhdGUtbmV4dC1wYWdlcyUyRl9lcnJvciZhYnNvbHV0ZUFwcFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2FwcCZhYnNvbHV0ZURvY3VtZW50UGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfZG9jdW1lbnQmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RjtBQUNoQztBQUNFO0FBQzFEO0FBQ3lEO0FBQ1Y7QUFDL0M7QUFDc0Q7QUFDdEQ7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLHFEQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLHVCQUF1Qix3RUFBSyxDQUFDLHFEQUFRO0FBQ3JDLHVCQUF1Qix3RUFBSyxDQUFDLHFEQUFRO0FBQ3JDLDJCQUEyQix3RUFBSyxDQUFDLHFEQUFRO0FBQ3pDLGVBQWUsd0VBQUssQ0FBQyxxREFBUTtBQUM3Qix3QkFBd0Isd0VBQUssQ0FBQyxxREFBUTtBQUM3QztBQUNPLGdDQUFnQyx3RUFBSyxDQUFDLHFEQUFRO0FBQzlDLGdDQUFnQyx3RUFBSyxDQUFDLHFEQUFRO0FBQzlDLGlDQUFpQyx3RUFBSyxDQUFDLHFEQUFRO0FBQy9DLGdDQUFnQyx3RUFBSyxDQUFDLHFEQUFRO0FBQzlDLG9DQUFvQyx3RUFBSyxDQUFDLHFEQUFRO0FBQ3pEO0FBQ08sd0JBQXdCLGtHQUFnQjtBQUMvQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBYSw4REFBVztBQUN4QixrQkFBa0Isb0VBQWdCO0FBQ2xDLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL3BhZ2VzL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIGFwcCBhbmQgZG9jdW1lbnQgbW9kdWxlcy5cbmltcG9ydCAqIGFzIGRvY3VtZW50IGZyb20gXCJwcml2YXRlLW5leHQtcGFnZXMvX2RvY3VtZW50XCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19lcnJvclwiO1xuLy8gUmUtZXhwb3J0IHRoZSBjb21wb25lbnQgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsICdkZWZhdWx0Jyk7XG4vLyBSZS1leHBvcnQgbWV0aG9kcy5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAnZ2V0U3RhdGljUHJvcHMnKTtcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCAnZ2V0U3RhdGljUGF0aHMnKTtcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ2dldFNlcnZlclNpZGVQcm9wcycpO1xuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCAnY29uZmlnJyk7XG5leHBvcnQgY29uc3QgcmVwb3J0V2ViVml0YWxzID0gaG9pc3QodXNlcmxhbmQsICdyZXBvcnRXZWJWaXRhbHMnKTtcbi8vIFJlLWV4cG9ydCBsZWdhY3kgbWV0aG9kcy5cbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U3RhdGljUHJvcHMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U3RhdGljUGF0aHMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFN0YXRpY1BhcmFtcycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclByb3BzID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTZXJ2ZXJQcm9wcycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U2VydmVyU2lkZVByb3BzJyk7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc1JvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFUyxcbiAgICAgICAgcGFnZTogXCIvX2Vycm9yXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9fZXJyb3JcIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiAnJyxcbiAgICAgICAgZmlsZW5hbWU6ICcnXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIC8vIGRlZmF1bHQgZXhwb3J0IG1pZ2h0IG5vdCBleGlzdCB3aGVuIG9wdGltaXplZCBmb3IgZGF0YSBvbmx5XG4gICAgICAgIEFwcDogYXBwLmRlZmF1bHQsXG4gICAgICAgIERvY3VtZW50OiBkb2N1bWVudC5kZWZhdWx0XG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=private-next-pages%2F_error&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

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

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=private-next-pages%2F_error&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();