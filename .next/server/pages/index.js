"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _perawallet_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @perawallet/connect */ \"@perawallet/connect\");\n/* harmony import */ var _perawallet_connect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_perawallet_connect__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// Create the PeraWalletConnect instance outside of the component\nconst peraWallet = new _perawallet_connect__WEBPACK_IMPORTED_MODULE_3__.PeraWalletConnect();\nconst Home = ()=>{\n    const { 0: accountAddress , 1: setAccountAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const isConnectedToPeraWallet = !!accountAddress;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Reconnect to the session when the component is mounted\n        peraWallet.reconnectSession().then((accounts)=>{\n            var // Setup the disconnect event listener\n            ref;\n            (ref = peraWallet.connector) === null || ref === void 0 ? void 0 : ref.on(\"disconnect\", handleDisconnectWalletClick);\n            if (accounts.length) {\n                setAccountAddress(accounts[0]);\n            }\n        });\n    }, []);\n    const optIn = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{}, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"name\",\n                    content: \"My dApp\"\n                }, void 0, false, {\n                    fileName: \"/home/shawn/algoplants/algofarm/pages/index.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 3\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/shawn/algoplants/algofarm/pages/index.tsx\",\n                lineNumber: 35,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: isConnectedToPeraWallet ? handleDisconnectWalletClick : handleConnectWalletClick,\n                children: isConnectedToPeraWallet ? \"Disconnect\" : \"Connect to Pera Wallet\"\n            }, void 0, false, {\n                fileName: \"/home/shawn/algoplants/algofarm/pages/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, undefined),\n            \",\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: optIn,\n                children: \"Opt In\"\n            }, void 0, false, {\n                fileName: \"/home/shawn/algoplants/algofarm/pages/index.tsx\",\n                lineNumber: 45,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n    function handleConnectWalletClick() {\n        peraWallet.connect().then((newAccounts)=>{\n            var // Setup the disconnect event listener\n            ref;\n            (ref = peraWallet.connector) === null || ref === void 0 ? void 0 : ref.on(\"disconnect\", handleDisconnectWalletClick);\n            console.log(\"got account \", newAccounts[0]);\n            setAccountAddress(newAccounts[0]);\n        });\n    }\n    function handleDisconnectWalletClick() {\n        peraWallet.disconnect();\n        setAccountAddress(null);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNEI7QUFFNEI7QUFHRjtBQUV0RCxpRUFBaUU7QUFDakUsTUFBTUssVUFBVSxHQUFHLElBQUlELGtFQUFpQixFQUFFO0FBRzFDLE1BQU1FLElBQUksR0FBYSxJQUFNO0lBRTNCLE1BQU0sS0FBQ0MsY0FBYyxNQUFFQyxpQkFBaUIsTUFBSUwsK0NBQVEsQ0FBZ0IsSUFBSSxDQUFDO0lBQ3pFLE1BQU1NLHVCQUF1QixHQUFHLENBQUMsQ0FBQ0YsY0FBYztJQUVoREwsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QseURBQXlEO1FBQ3pERyxVQUFVLENBQUNLLGdCQUFnQixFQUFFLENBQUNDLElBQUksQ0FBQyxDQUFDQyxRQUFRLEdBQUs7Z0JBQy9DLHNDQUFzQztZQUN0Q1AsR0FBb0I7WUFBcEJBLENBQUFBLEdBQW9CLEdBQXBCQSxVQUFVLENBQUNRLFNBQVMsY0FBcEJSLEdBQW9CLFdBQUksR0FBeEJBLEtBQUFBLENBQXdCLEdBQXhCQSxHQUFvQixDQUFFUyxFQUFFLENBQUMsWUFBWSxFQUFFQywyQkFBMkIsQ0FBQyxDQUFDO1lBRXBFLElBQUlILFFBQVEsQ0FBQ0ksTUFBTSxFQUFFO2dCQUNuQlIsaUJBQWlCLENBQUNJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hDO1NBQ0YsQ0FBQyxDQUFDO0tBQ0osRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE1BQU1LLEtBQUssR0FBR2hCLGtEQUFXLENBQUMsSUFBTSxFQUUvQixFQUFFLEVBQUUsQ0FBQztJQUVOLHFCQUFPOzswQkFDUCw4REFBQ0Qsa0RBQUk7MEJBQ0wsNEVBQUNrQixNQUFJO29CQUFDQyxJQUFJLEVBQUMsTUFBTTtvQkFBQ0MsT0FBTyxFQUFDLFNBQVM7Ozs7OzZCQUFHOzs7Ozt5QkFFL0I7MEJBQ0wsOERBQUNDLFFBQU07Z0JBQ0xDLE9BQU8sRUFDTGIsdUJBQXVCLEdBQUdNLDJCQUEyQixHQUFHUSx3QkFBd0I7MEJBRWpGZCx1QkFBdUIsR0FBRyxZQUFZLEdBQUcsd0JBQXdCOzs7Ozt5QkFDM0Q7WUFBQSxHQUNUOzBCQUFBLDhEQUFDWSxRQUFNO2dCQUFDQyxPQUFPLEVBQUVMLEtBQUs7MEJBQUUsUUFBTTs7Ozs7eUJBQVM7O29CQUN0QztJQUdGLFNBQVNNLHdCQUF3QixHQUFHO1FBQ25DbEIsVUFBVSxDQUNQbUIsT0FBTyxFQUFFLENBQ1RiLElBQUksQ0FBQyxDQUFDYyxXQUFXLEdBQUs7Z0JBQ3JCLHNDQUFzQztZQUN0Q3BCLEdBQW9CO1lBQXBCQSxDQUFBQSxHQUFvQixHQUFwQkEsVUFBVSxDQUFDUSxTQUFTLGNBQXBCUixHQUFvQixXQUFJLEdBQXhCQSxLQUFBQSxDQUF3QixHQUF4QkEsR0FBb0IsQ0FBRVMsRUFBRSxDQUFDLFlBQVksRUFBRUMsMkJBQTJCLENBQUMsQ0FBQztZQUNwRVcsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxFQUFFRixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0NqQixpQkFBaUIsQ0FBQ2lCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25DLENBQUM7S0FDTDtJQUVELFNBQVNWLDJCQUEyQixHQUFHO1FBQ3JDVixVQUFVLENBQUN1QixVQUFVLEVBQUUsQ0FBQztRQUV4QnBCLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pCO0NBQ0Y7QUFFRCxpRUFBZUYsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2FsZ29mYXJtLXd3dy8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQge1BlcmFXYWxsZXRDb25uZWN0fSBmcm9tIFwiQHBlcmF3YWxsZXQvY29ubmVjdFwiO1xuXG4vLyBDcmVhdGUgdGhlIFBlcmFXYWxsZXRDb25uZWN0IGluc3RhbmNlIG91dHNpZGUgb2YgdGhlIGNvbXBvbmVudFxuY29uc3QgcGVyYVdhbGxldCA9IG5ldyBQZXJhV2FsbGV0Q29ubmVjdCgpO1xuXG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuXG4gIGNvbnN0IFthY2NvdW50QWRkcmVzcywgc2V0QWNjb3VudEFkZHJlc3NdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IGlzQ29ubmVjdGVkVG9QZXJhV2FsbGV0ID0gISFhY2NvdW50QWRkcmVzcztcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFJlY29ubmVjdCB0byB0aGUgc2Vzc2lvbiB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZFxuICAgIHBlcmFXYWxsZXQucmVjb25uZWN0U2Vzc2lvbigpLnRoZW4oKGFjY291bnRzKSA9PiB7XG4gICAgICAvLyBTZXR1cCB0aGUgZGlzY29ubmVjdCBldmVudCBsaXN0ZW5lclxuICAgICAgcGVyYVdhbGxldC5jb25uZWN0b3I/Lm9uKFwiZGlzY29ubmVjdFwiLCBoYW5kbGVEaXNjb25uZWN0V2FsbGV0Q2xpY2spO1xuXG4gICAgICBpZiAoYWNjb3VudHMubGVuZ3RoKSB7XG4gICAgICAgIHNldEFjY291bnRBZGRyZXNzKGFjY291bnRzWzBdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9wdEluID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuXG4gIH0sIFtdKSBcblxuICByZXR1cm4gPD5cbiAgPEhlYWQ+XG4gIDxtZXRhIG5hbWU9XCJuYW1lXCIgY29udGVudD1cIk15IGRBcHBcIiAvPlxuXG4gIDwvSGVhZD5cbiAgICA8YnV0dG9uXG4gICAgICBvbkNsaWNrPXtcbiAgICAgICAgaXNDb25uZWN0ZWRUb1BlcmFXYWxsZXQgPyBoYW5kbGVEaXNjb25uZWN0V2FsbGV0Q2xpY2sgOiBoYW5kbGVDb25uZWN0V2FsbGV0Q2xpY2tcbiAgICAgIH0+XG4gICAgICB7aXNDb25uZWN0ZWRUb1BlcmFXYWxsZXQgPyBcIkRpc2Nvbm5lY3RcIiA6IFwiQ29ubmVjdCB0byBQZXJhIFdhbGxldFwifVxuICAgIDwvYnV0dG9uPixcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e29wdElufT5PcHQgSW48L2J1dHRvbj5cbiAgPC8+XG5cbiAgXG4gICBmdW5jdGlvbiBoYW5kbGVDb25uZWN0V2FsbGV0Q2xpY2soKSB7XG4gICAgcGVyYVdhbGxldFxuICAgICAgLmNvbm5lY3QoKVxuICAgICAgLnRoZW4oKG5ld0FjY291bnRzKSA9PiB7XG4gICAgICAgIC8vIFNldHVwIHRoZSBkaXNjb25uZWN0IGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIHBlcmFXYWxsZXQuY29ubmVjdG9yPy5vbihcImRpc2Nvbm5lY3RcIiwgaGFuZGxlRGlzY29ubmVjdFdhbGxldENsaWNrKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJnb3QgYWNjb3VudCBcIiwgbmV3QWNjb3VudHNbMF0pXG4gICAgICAgIHNldEFjY291bnRBZGRyZXNzKG5ld0FjY291bnRzWzBdKTtcbiAgICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVEaXNjb25uZWN0V2FsbGV0Q2xpY2soKSB7XG4gICAgcGVyYVdhbGxldC5kaXNjb25uZWN0KCk7XG5cbiAgICBzZXRBY2NvdW50QWRkcmVzcyhudWxsKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQZXJhV2FsbGV0Q29ubmVjdCIsInBlcmFXYWxsZXQiLCJIb21lIiwiYWNjb3VudEFkZHJlc3MiLCJzZXRBY2NvdW50QWRkcmVzcyIsImlzQ29ubmVjdGVkVG9QZXJhV2FsbGV0IiwicmVjb25uZWN0U2Vzc2lvbiIsInRoZW4iLCJhY2NvdW50cyIsImNvbm5lY3RvciIsIm9uIiwiaGFuZGxlRGlzY29ubmVjdFdhbGxldENsaWNrIiwibGVuZ3RoIiwib3B0SW4iLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJidXR0b24iLCJvbkNsaWNrIiwiaGFuZGxlQ29ubmVjdFdhbGxldENsaWNrIiwiY29ubmVjdCIsIm5ld0FjY291bnRzIiwiY29uc29sZSIsImxvZyIsImRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@perawallet/connect":
/*!**************************************!*\
  !*** external "@perawallet/connect" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@perawallet/connect");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();