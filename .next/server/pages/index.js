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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_pera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/pera */ \"./src/pera/index.ts\");\n/* harmony import */ var _src_algofarm_callbacks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/algofarm/callbacks */ \"./src/algofarm/callbacks/index.ts\");\n\n\n\n\n// Create the PeraWalletConnect instance outside of the component\nconst Home = ()=>{\n    const { accountAddress , isConnectedToPeraWallet , handleConnectWalletClick , handleDisconnectWalletClick ,  } = (0,_src_pera__WEBPACK_IMPORTED_MODULE_2__.usePeraWallet)();\n    const optIn = (0,_src_algofarm_callbacks__WEBPACK_IMPORTED_MODULE_3__.useOptInCallback)(accountAddress);\n    const doBurn = (0,_src_algofarm_callbacks__WEBPACK_IMPORTED_MODULE_3__.useDoBurnCallback)(accountAddress);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"name\",\n                    content: \"My dApp\"\n                }, void 0, false, {\n                    fileName: \"/home/shawn/algoplants/algofarm/pages/index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/shawn/algoplants/algofarm/pages/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: isConnectedToPeraWallet ? handleDisconnectWalletClick : handleConnectWalletClick,\n                children: isConnectedToPeraWallet ? \"Disconnect\" : \"Connect to Pera Wallet\"\n            }, void 0, false, {\n                fileName: \"/home/shawn/algoplants/algofarm/pages/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            \",\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: optIn,\n                children: \"Opt In\"\n            }, void 0, false, {\n                fileName: \"/home/shawn/algoplants/algofarm/pages/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 8\n            }, undefined),\n            \",\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: doBurn,\n                children: \"Burn\"\n            }, void 0, false, {\n                fileName: \"/home/shawn/algoplants/algofarm/pages/index.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQzZCO0FBR2U7QUFDb0M7QUFFaEYsaUVBQWlFO0FBRWpFLE1BQU1JLElBQUksR0FBYSxJQUFNO0lBQzNCLE1BQU0sRUFDSkMsY0FBYyxHQUNkQyx1QkFBdUIsR0FDdkJDLHdCQUF3QixHQUN4QkMsMkJBQTJCLEtBQzVCLEdBQUdQLHdEQUFhLEVBQUU7SUFDbkIsTUFBTVEsS0FBSyxHQUFHTix5RUFBZ0IsQ0FBQ0UsY0FBYyxDQUFDO0lBQzlDLE1BQU1LLE1BQU0sR0FBR1IsMEVBQWlCLENBQUNHLGNBQWMsQ0FBQztJQUVoRCxxQkFDRTs7MEJBQ0UsOERBQUNMLGtEQUFJOzBCQUNILDRFQUFDVyxNQUFJO29CQUFDQyxJQUFJLEVBQUMsTUFBTTtvQkFBQ0MsT0FBTyxFQUFDLFNBQVM7Ozs7OzZCQUFHOzs7Ozt5QkFDakM7MEJBQ1AsOERBQUNDLFFBQU07Z0JBQ0xDLE9BQU8sRUFDTFQsdUJBQXVCLEdBQ25CRSwyQkFBMkIsR0FDM0JELHdCQUF3QjswQkFHN0JELHVCQUF1QixHQUFHLFlBQVksR0FBRyx3QkFBd0I7Ozs7O3lCQUMzRDtZQUFBLEdBQ1I7MEJBQUEsOERBQUNRLFFBQU07Z0JBQUNDLE9BQU8sRUFBRU4sS0FBSzswQkFBRSxRQUFNOzs7Ozt5QkFBUztZQUFBLEdBQ3hDOzBCQUFBLDhEQUFDSyxRQUFNO2dCQUFDQyxPQUFPLEVBQUVMLE1BQU07MEJBQUUsTUFBSTs7Ozs7eUJBQVM7O29CQUNyQyxDQUNIO0NBQ0g7QUFFRCxpRUFBZU4sSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWxnb2Zhcm0td3d3Ly4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGFsZ29zZGsgZnJvbSAnYWxnb3Nkayc7XG5pbXBvcnQgeyB1c2VQZXJhV2FsbGV0IH0gZnJvbSAnLi4vc3JjL3BlcmEnO1xuaW1wb3J0IHsgdXNlRG9CdXJuQ2FsbGJhY2ssIHVzZU9wdEluQ2FsbGJhY2sgfSBmcm9tICcuLi9zcmMvYWxnb2Zhcm0vY2FsbGJhY2tzJztcblxuLy8gQ3JlYXRlIHRoZSBQZXJhV2FsbGV0Q29ubmVjdCBpbnN0YW5jZSBvdXRzaWRlIG9mIHRoZSBjb21wb25lbnRcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhY2NvdW50QWRkcmVzcyxcbiAgICBpc0Nvbm5lY3RlZFRvUGVyYVdhbGxldCxcbiAgICBoYW5kbGVDb25uZWN0V2FsbGV0Q2xpY2ssXG4gICAgaGFuZGxlRGlzY29ubmVjdFdhbGxldENsaWNrLFxuICB9ID0gdXNlUGVyYVdhbGxldCgpO1xuICBjb25zdCBvcHRJbiA9IHVzZU9wdEluQ2FsbGJhY2soYWNjb3VudEFkZHJlc3MpO1xuICBjb25zdCBkb0J1cm4gPSB1c2VEb0J1cm5DYWxsYmFjayhhY2NvdW50QWRkcmVzcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJuYW1lXCIgY29udGVudD1cIk15IGRBcHBcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICBpc0Nvbm5lY3RlZFRvUGVyYVdhbGxldFxuICAgICAgICAgICAgPyBoYW5kbGVEaXNjb25uZWN0V2FsbGV0Q2xpY2tcbiAgICAgICAgICAgIDogaGFuZGxlQ29ubmVjdFdhbGxldENsaWNrXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAge2lzQ29ubmVjdGVkVG9QZXJhV2FsbGV0ID8gJ0Rpc2Nvbm5lY3QnIDogJ0Nvbm5lY3QgdG8gUGVyYSBXYWxsZXQnfVxuICAgICAgPC9idXR0b24+XG4gICAgICAsPGJ1dHRvbiBvbkNsaWNrPXtvcHRJbn0+T3B0IEluPC9idXR0b24+LFxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkb0J1cm59PkJ1cm48L2J1dHRvbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVBlcmFXYWxsZXQiLCJ1c2VEb0J1cm5DYWxsYmFjayIsInVzZU9wdEluQ2FsbGJhY2siLCJIb21lIiwiYWNjb3VudEFkZHJlc3MiLCJpc0Nvbm5lY3RlZFRvUGVyYVdhbGxldCIsImhhbmRsZUNvbm5lY3RXYWxsZXRDbGljayIsImhhbmRsZURpc2Nvbm5lY3RXYWxsZXRDbGljayIsIm9wdEluIiwiZG9CdXJuIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./src/algofarm/callbacks/index.ts":
/*!*****************************************!*\
  !*** ./src/algofarm/callbacks/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useDoBurnCallback\": () => (/* binding */ useDoBurnCallback),\n/* harmony export */   \"useOptInCallback\": () => (/* binding */ useOptInCallback)\n/* harmony export */ });\n/* harmony import */ var algosdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! algosdk */ \"algosdk\");\n/* harmony import */ var algosdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(algosdk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _algosdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../algosdk */ \"./src/algosdk/index.ts\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api */ \"./src/api/index.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ \"./src/constants.ts\");\n/* harmony import */ var _pera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pera */ \"./src/pera/index.ts\");\n\n\n\n\n\n\nconst useOptInCallback = (accountAddress)=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{\n        if (accountAddress == null) {\n            return;\n        }\n        const { algod , suggestedParams  } = await (0,_algosdk__WEBPACK_IMPORTED_MODULE_2__.makeSdk)();\n        // Setting up Transactions\n        const opt1 = algosdk__WEBPACK_IMPORTED_MODULE_0___default().makeAssetTransferTxnWithSuggestedParamsFromObject({\n            from: accountAddress,\n            to: accountAddress,\n            assetIndex: _constants__WEBPACK_IMPORTED_MODULE_4__.nft1,\n            amount: 0,\n            suggestedParams\n        });\n        const opt2 = algosdk__WEBPACK_IMPORTED_MODULE_0___default().makeAssetTransferTxnWithSuggestedParamsFromObject({\n            from: accountAddress,\n            to: accountAddress,\n            assetIndex: _constants__WEBPACK_IMPORTED_MODULE_4__.nft2,\n            amount: 0,\n            suggestedParams\n        });\n        algosdk__WEBPACK_IMPORTED_MODULE_0___default().assignGroupID([\n            opt1,\n            opt2\n        ]);\n        const multipleTxnGroups = [\n            {\n                txn: opt1,\n                signers: [\n                    accountAddress\n                ]\n            },\n            {\n                txn: opt2,\n                signers: [\n                    accountAddress\n                ]\n            }, \n        ];\n        await (0,_pera__WEBPACK_IMPORTED_MODULE_5__.signAndSend)(multipleTxnGroups, algod);\n    }, [\n        accountAddress\n    ]);\n};\nconst useDoBurnCallback = (accountAddress)=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{\n        const s = await (0,_api__WEBPACK_IMPORTED_MODULE_3__.fetchSignature)();\n        console.log(s);\n        if (accountAddress == null) {\n            return;\n        }\n        const { algod , suggestedParams  } = await (0,_algosdk__WEBPACK_IMPORTED_MODULE_2__.makeSdk)();\n        const signature = await (0,_api__WEBPACK_IMPORTED_MODULE_3__.fetchSignature)();\n        console.log({\n            signature\n        });\n        const opContract = algosdk__WEBPACK_IMPORTED_MODULE_0___default().makeApplicationNoOpTxn(accountAddress, suggestedParams, _constants__WEBPACK_IMPORTED_MODULE_4__.minterId, [\n            new Uint8Array(Buffer.from(\"harvest\")),\n            new Uint8Array(Buffer.from(\"\" + _constants__WEBPACK_IMPORTED_MODULE_4__.nft1)),\n            new Uint8Array(Buffer.from(\"0\")),\n            new Uint8Array(Buffer.from(signature)), \n        ], undefined, undefined, [\n            _constants__WEBPACK_IMPORTED_MODULE_4__.nft1,\n            _constants__WEBPACK_IMPORTED_MODULE_4__.nft2\n        ]);\n        const burnTxn = algosdk__WEBPACK_IMPORTED_MODULE_0___default().makeAssetTransferTxnWithSuggestedParamsFromObject({\n            from: accountAddress,\n            to: _constants__WEBPACK_IMPORTED_MODULE_4__.minterContract,\n            assetIndex: _constants__WEBPACK_IMPORTED_MODULE_4__.nft1,\n            amount: 1,\n            suggestedParams\n        });\n        algosdk__WEBPACK_IMPORTED_MODULE_0___default().assignGroupID([\n            opContract,\n            burnTxn\n        ]);\n        const multipleTxnGroups = [\n            {\n                txn: opContract,\n                signers: [\n                    accountAddress\n                ]\n            },\n            {\n                txn: burnTxn,\n                signers: [\n                    accountAddress\n                ]\n            }, \n        ];\n        await (0,_pera__WEBPACK_IMPORTED_MODULE_5__.signAndSend)(multipleTxnGroups, algod);\n    }, [\n        accountAddress\n    ]);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7WUFDVE4sZUFBZTtTQUNoQixDQUFDO1FBRUZaLDREQUFxQixDQUFDO1lBQUM2QixVQUFVO1lBQUVLLE9BQU87U0FBQyxDQUFDLENBQUM7UUFFN0MsTUFBTWIsaUJBQWlCLEdBQUc7WUFDeEI7Z0JBQUVDLEdBQUcsRUFBRU8sVUFBVTtnQkFBRU4sT0FBTyxFQUFFO29CQUFDYixjQUFjO2lCQUFDO2FBQUU7WUFDOUM7Z0JBQUVZLEdBQUcsRUFBRVksT0FBTztnQkFBRVgsT0FBTyxFQUFFO29CQUFDYixjQUFjO2lCQUFDO2FBQUU7U0FDNUM7UUFFRCxNQUFNRixrREFBVyxDQUFDYSxpQkFBaUIsRUFBRVYsS0FBSyxDQUFDLENBQUM7S0FDN0MsRUFBRTtRQUFDRCxjQUFjO0tBQUMsQ0FBQyxDQUFDO0NBQ3RCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbGdvZmFybS13d3cvLi9zcmMvYWxnb2Zhcm0vY2FsbGJhY2tzL2luZGV4LnRzP2ZlMTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFsZ29zZGsgZnJvbSAnYWxnb3Nkayc7XG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTZGsgfSBmcm9tICcuLi8uLi9hbGdvc2RrJztcbmltcG9ydCB7IGZldGNoU2lnbmF0dXJlIH0gZnJvbSAnLi4vLi4vYXBpJztcbmltcG9ydCB7IG1pbnRlckNvbnRyYWN0LCBtaW50ZXJJZCwgbmZ0MSwgbmZ0MiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBzaWduQW5kU2VuZCB9IGZyb20gJy4uLy4uL3BlcmEnO1xuXG5leHBvcnQgY29uc3QgdXNlT3B0SW5DYWxsYmFjayA9IChhY2NvdW50QWRkcmVzczogc3RyaW5nIHwgbnVsbCkgPT4ge1xuICByZXR1cm4gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGlmIChhY2NvdW50QWRkcmVzcyA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBhbGdvZCwgc3VnZ2VzdGVkUGFyYW1zIH0gPSBhd2FpdCBtYWtlU2RrKCk7XG5cbiAgICAvLyBTZXR0aW5nIHVwIFRyYW5zYWN0aW9uc1xuICAgIGNvbnN0IG9wdDEgPSBhbGdvc2RrLm1ha2VBc3NldFRyYW5zZmVyVHhuV2l0aFN1Z2dlc3RlZFBhcmFtc0Zyb21PYmplY3Qoe1xuICAgICAgZnJvbTogYWNjb3VudEFkZHJlc3MsXG4gICAgICB0bzogYWNjb3VudEFkZHJlc3MsXG4gICAgICBhc3NldEluZGV4OiBuZnQxLFxuICAgICAgYW1vdW50OiAwLFxuICAgICAgc3VnZ2VzdGVkUGFyYW1zLFxuICAgIH0pO1xuICAgIGNvbnN0IG9wdDIgPSBhbGdvc2RrLm1ha2VBc3NldFRyYW5zZmVyVHhuV2l0aFN1Z2dlc3RlZFBhcmFtc0Zyb21PYmplY3Qoe1xuICAgICAgZnJvbTogYWNjb3VudEFkZHJlc3MsXG4gICAgICB0bzogYWNjb3VudEFkZHJlc3MsXG4gICAgICBhc3NldEluZGV4OiBuZnQyLFxuICAgICAgYW1vdW50OiAwLFxuICAgICAgc3VnZ2VzdGVkUGFyYW1zLFxuICAgIH0pO1xuXG4gICAgYWxnb3Nkay5hc3NpZ25Hcm91cElEKFtvcHQxLCBvcHQyXSk7XG5cbiAgICBjb25zdCBtdWx0aXBsZVR4bkdyb3VwcyA9IFtcbiAgICAgIHsgdHhuOiBvcHQxLCBzaWduZXJzOiBbYWNjb3VudEFkZHJlc3NdIH0sXG4gICAgICB7IHR4bjogb3B0Miwgc2lnbmVyczogW2FjY291bnRBZGRyZXNzXSB9LFxuICAgIF07XG5cbiAgICBhd2FpdCBzaWduQW5kU2VuZChtdWx0aXBsZVR4bkdyb3VwcywgYWxnb2QpO1xuICB9LCBbYWNjb3VudEFkZHJlc3NdKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VEb0J1cm5DYWxsYmFjayA9IChhY2NvdW50QWRkcmVzczogc3RyaW5nIHwgbnVsbCkgPT4ge1xuICByZXR1cm4gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHMgPSBhd2FpdCBmZXRjaFNpZ25hdHVyZSgpO1xuICAgIGNvbnNvbGUubG9nKHMpO1xuICAgIGlmIChhY2NvdW50QWRkcmVzcyA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBhbGdvZCwgc3VnZ2VzdGVkUGFyYW1zIH0gPSBhd2FpdCBtYWtlU2RrKCk7XG5cbiAgICBjb25zdCBzaWduYXR1cmUgPSBhd2FpdCBmZXRjaFNpZ25hdHVyZSgpO1xuICAgIGNvbnNvbGUubG9nKHsgc2lnbmF0dXJlIH0pO1xuXG4gICAgY29uc3Qgb3BDb250cmFjdCA9IGFsZ29zZGsubWFrZUFwcGxpY2F0aW9uTm9PcFR4bihcbiAgICAgIGFjY291bnRBZGRyZXNzLFxuICAgICAgc3VnZ2VzdGVkUGFyYW1zLFxuICAgICAgbWludGVySWQsXG4gICAgICBbXG4gICAgICAgIG5ldyBVaW50OEFycmF5KEJ1ZmZlci5mcm9tKCdoYXJ2ZXN0JykpLFxuICAgICAgICBuZXcgVWludDhBcnJheShCdWZmZXIuZnJvbSgnJyArIG5mdDEpKSxcbiAgICAgICAgbmV3IFVpbnQ4QXJyYXkoQnVmZmVyLmZyb20oJzAnKSksXG4gICAgICAgIG5ldyBVaW50OEFycmF5KEJ1ZmZlci5mcm9tKHNpZ25hdHVyZSkpLFxuICAgICAgXSxcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgIFtuZnQxLCBuZnQyXVxuICAgICk7XG4gICAgY29uc3QgYnVyblR4biA9IGFsZ29zZGsubWFrZUFzc2V0VHJhbnNmZXJUeG5XaXRoU3VnZ2VzdGVkUGFyYW1zRnJvbU9iamVjdCh7XG4gICAgICBmcm9tOiBhY2NvdW50QWRkcmVzcyxcbiAgICAgIHRvOiBtaW50ZXJDb250cmFjdCxcbiAgICAgIGFzc2V0SW5kZXg6IG5mdDEsXG4gICAgICBhbW91bnQ6IDEsXG4gICAgICBzdWdnZXN0ZWRQYXJhbXMsXG4gICAgfSk7XG5cbiAgICBhbGdvc2RrLmFzc2lnbkdyb3VwSUQoW29wQ29udHJhY3QsIGJ1cm5UeG5dKTtcblxuICAgIGNvbnN0IG11bHRpcGxlVHhuR3JvdXBzID0gW1xuICAgICAgeyB0eG46IG9wQ29udHJhY3QsIHNpZ25lcnM6IFthY2NvdW50QWRkcmVzc10gfSxcbiAgICAgIHsgdHhuOiBidXJuVHhuLCBzaWduZXJzOiBbYWNjb3VudEFkZHJlc3NdIH0sXG4gICAgXTtcblxuICAgIGF3YWl0IHNpZ25BbmRTZW5kKG11bHRpcGxlVHhuR3JvdXBzLCBhbGdvZCk7XG4gIH0sIFthY2NvdW50QWRkcmVzc10pO1xufTtcbiJdLCJuYW1lcyI6WyJhbGdvc2RrIiwidXNlQ2FsbGJhY2siLCJtYWtlU2RrIiwiZmV0Y2hTaWduYXR1cmUiLCJtaW50ZXJDb250cmFjdCIsIm1pbnRlcklkIiwibmZ0MSIsIm5mdDIiLCJzaWduQW5kU2VuZCIsInVzZU9wdEluQ2FsbGJhY2siLCJhY2NvdW50QWRkcmVzcyIsImFsZ29kIiwic3VnZ2VzdGVkUGFyYW1zIiwib3B0MSIsIm1ha2VBc3NldFRyYW5zZmVyVHhuV2l0aFN1Z2dlc3RlZFBhcmFtc0Zyb21PYmplY3QiLCJmcm9tIiwidG8iLCJhc3NldEluZGV4IiwiYW1vdW50Iiwib3B0MiIsImFzc2lnbkdyb3VwSUQiLCJtdWx0aXBsZVR4bkdyb3VwcyIsInR4biIsInNpZ25lcnMiLCJ1c2VEb0J1cm5DYWxsYmFjayIsInMiLCJjb25zb2xlIiwibG9nIiwic2lnbmF0dXJlIiwib3BDb250cmFjdCIsIm1ha2VBcHBsaWNhdGlvbk5vT3BUeG4iLCJVaW50OEFycmF5IiwiQnVmZmVyIiwidW5kZWZpbmVkIiwiYnVyblR4biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/algofarm/callbacks/index.ts\n");

/***/ }),

/***/ "./src/algosdk/index.ts":
/*!******************************!*\
  !*** ./src/algosdk/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeSdk\": () => (/* binding */ makeSdk)\n/* harmony export */ });\n/* harmony import */ var algosdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! algosdk */ \"algosdk\");\n/* harmony import */ var algosdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(algosdk__WEBPACK_IMPORTED_MODULE_0__);\n\nconst makeSdk = async ()=>{\n    // Setting up algosdk client\n    const algod = new (algosdk__WEBPACK_IMPORTED_MODULE_0___default().Algodv2)(\"\", \"https://node.testnet.algoexplorerapi.io/\", 443);\n    const suggestedParams = await algod.getTransactionParams().do();\n    return {\n        algod,\n        suggestedParams\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWxnb3Nkay9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEI7QUFFdkIsTUFBTUMsT0FBTyxHQUFHLFVBQVk7SUFDakMsNEJBQTRCO0lBQzVCLE1BQU1DLEtBQUssR0FBRyxJQUFJRix3REFBZSxDQUMvQixFQUFFLEVBQ0YsMENBQTBDLEVBQzFDLEdBQUcsQ0FDSjtJQUNELE1BQU1JLGVBQWUsR0FBRyxNQUFNRixLQUFLLENBQUNHLG9CQUFvQixFQUFFLENBQUNDLEVBQUUsRUFBRTtJQUUvRCxPQUFPO1FBQUVKLEtBQUs7UUFBRUUsZUFBZTtLQUFFLENBQUM7Q0FDbkMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FsZ29mYXJtLXd3dy8uL3NyYy9hbGdvc2RrL2luZGV4LnRzPzY4ODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFsZ29zZGsgZnJvbSAnYWxnb3Nkayc7XG5cbmV4cG9ydCBjb25zdCBtYWtlU2RrID0gYXN5bmMgKCkgPT4ge1xuICAvLyBTZXR0aW5nIHVwIGFsZ29zZGsgY2xpZW50XG4gIGNvbnN0IGFsZ29kID0gbmV3IGFsZ29zZGsuQWxnb2R2MihcbiAgICAnJyxcbiAgICAnaHR0cHM6Ly9ub2RlLnRlc3RuZXQuYWxnb2V4cGxvcmVyYXBpLmlvLycsXG4gICAgNDQzXG4gICk7XG4gIGNvbnN0IHN1Z2dlc3RlZFBhcmFtcyA9IGF3YWl0IGFsZ29kLmdldFRyYW5zYWN0aW9uUGFyYW1zKCkuZG8oKTtcblxuICByZXR1cm4geyBhbGdvZCwgc3VnZ2VzdGVkUGFyYW1zIH07XG59O1xuIl0sIm5hbWVzIjpbImFsZ29zZGsiLCJtYWtlU2RrIiwiYWxnb2QiLCJBbGdvZHYyIiwic3VnZ2VzdGVkUGFyYW1zIiwiZ2V0VHJhbnNhY3Rpb25QYXJhbXMiLCJkbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/algosdk/index.ts\n");

/***/ }),

/***/ "./src/api/index.ts":
/*!**************************!*\
  !*** ./src/api/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchSignature\": () => (/* binding */ fetchSignature)\n/* harmony export */ });\nconst fetchSignature = async ()=>{\n    const response = await fetch(\"api/harvest\", {\n        method: \"POST\"\n    });\n    const res = await response.json();\n    return res.signature;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFTyxNQUFNQSxjQUFjLEdBQUcsVUFBWTtJQUN4QyxNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtRQUMxQ0MsTUFBTSxFQUFFLE1BQU07S0FDZixDQUFDO0lBQ0YsTUFBTUMsR0FBRyxHQUFJLE1BQU1ILFFBQVEsQ0FBQ0ksSUFBSSxFQUFFO0lBQ2xDLE9BQU9ELEdBQUcsQ0FBQ0UsU0FBUyxDQUFDO0NBQ3RCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbGdvZmFybS13d3cvLi9zcmMvYXBpL2luZGV4LnRzPzAyNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGFydmVzdFJlc3BvbnNlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hTaWduYXR1cmUgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2FwaS9oYXJ2ZXN0Jywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICB9KTtcbiAgY29uc3QgcmVzID0gKGF3YWl0IHJlc3BvbnNlLmpzb24oKSkgYXMgSGFydmVzdFJlc3BvbnNlO1xuICByZXR1cm4gcmVzLnNpZ25hdHVyZTtcbn07XG4iXSwibmFtZXMiOlsiZmV0Y2hTaWduYXR1cmUiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwicmVzIiwianNvbiIsInNpZ25hdHVyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/index.ts\n");

/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"minterContract\": () => (/* binding */ minterContract),\n/* harmony export */   \"minterId\": () => (/* binding */ minterId),\n/* harmony export */   \"nft1\": () => (/* binding */ nft1),\n/* harmony export */   \"nft2\": () => (/* binding */ nft2)\n/* harmony export */ });\nconst minterId = 105061239;\nconst minterContract = \"34RYJJ52VXNBPL3HMZ6AOQCNV3RS73T756SNGVKFRMUN5WI7WVSQTNWAKY\";\nconst nft1 = 105011818;\nconst nft2 = 105040567;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxNQUFNQSxRQUFRLEdBQUcsU0FBUyxDQUFDO0FBQzNCLE1BQU1DLGNBQWMsR0FDekIsNERBQTRELENBQUM7QUFDeEQsTUFBTUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztBQUN2QixNQUFNQyxJQUFJLEdBQUcsU0FBUyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWxnb2Zhcm0td3d3Ly4vc3JjL2NvbnN0YW50cy50cz8zN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBtaW50ZXJJZCA9IDEwNTA2MTIzOTtcbmV4cG9ydCBjb25zdCBtaW50ZXJDb250cmFjdCA9XG4gICczNFJZSko1MlZYTkJQTDNITVo2QU9RQ05WM1JTNzNUNzU2U05HVktGUk1VTjVXSTdXVlNRVE5XQUtZJztcbmV4cG9ydCBjb25zdCBuZnQxID0gMTA1MDExODE4O1xuZXhwb3J0IGNvbnN0IG5mdDIgPSAxMDUwNDA1Njc7XG4iXSwibmFtZXMiOlsibWludGVySWQiLCJtaW50ZXJDb250cmFjdCIsIm5mdDEiLCJuZnQyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/constants.ts\n");

/***/ }),

/***/ "./src/pera/index.ts":
/*!***************************!*\
  !*** ./src/pera/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signAndSend\": () => (/* binding */ signAndSend),\n/* harmony export */   \"usePeraWallet\": () => (/* binding */ usePeraWallet)\n/* harmony export */ });\n/* harmony import */ var _perawallet_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @perawallet/connect */ \"@perawallet/connect\");\n/* harmony import */ var _perawallet_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_perawallet_connect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst peraWallet = new _perawallet_connect__WEBPACK_IMPORTED_MODULE_0__.PeraWalletConnect();\nconst usePeraWallet = ()=>{\n    const { 0: accountAddress , 1: setAccountAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const isConnectedToPeraWallet = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>!!accountAddress, [\n        accountAddress\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Reconnect to the session when the component is mounted\n        peraWallet.reconnectSession().then((accounts)=>{\n            var // Setup the disconnect event listener\n            ref;\n            (ref = peraWallet.connector) === null || ref === void 0 ? void 0 : ref.on(\"disconnect\", handleDisconnectWalletClick);\n            if (accounts.length) {\n                setAccountAddress(accounts[0]);\n            }\n        });\n    }, []);\n    return {\n        accountAddress,\n        isConnectedToPeraWallet,\n        handleConnectWalletClick,\n        handleDisconnectWalletClick\n    };\n    function handleConnectWalletClick() {\n        peraWallet.connect().then((newAccounts)=>{\n            var // Setup the disconnect event listener\n            ref;\n            (ref = peraWallet.connector) === null || ref === void 0 ? void 0 : ref.on(\"disconnect\", handleDisconnectWalletClick);\n            console.log(\"got account \", newAccounts[0]);\n            setAccountAddress(newAccounts[0]);\n        });\n    }\n    function handleDisconnectWalletClick() {\n        peraWallet.disconnect();\n        setAccountAddress(null);\n    }\n};\nconst signAndSend = async (txns, algod)=>{\n    try {\n        const signedTxns = await peraWallet.signTransaction([\n            txns\n        ]);\n        const { txId  } = await algod.sendRawTransaction(signedTxns).do();\n        console.log({\n            txId\n        });\n    //const completedTx = await verboseWaitForConfirmation(algod, createTxId);\n    } catch (error) {\n        console.log(\"Couldn't sign Opt-in txns\", error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGVyYS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0Q7QUFDSDtBQUVyRCxNQUFNSSxVQUFVLEdBQUcsSUFBSUosa0VBQWlCLEVBQUU7QUFFbkMsTUFBTUssYUFBYSxHQUFHLElBQU07SUFDakMsTUFBTSxLQUFDQyxjQUFjLE1BQUVDLGlCQUFpQixNQUFJSiwrQ0FBUSxDQUFnQixJQUFJLENBQUM7SUFDekUsTUFBTUssdUJBQXVCLEdBQUdOLDhDQUFPLENBQ3JDLElBQU0sQ0FBQyxDQUFDSSxjQUFjLEVBQ3RCO1FBQUNBLGNBQWM7S0FBQyxDQUNqQjtJQUNETCxnREFBUyxDQUFDLElBQU07UUFDZCx5REFBeUQ7UUFDekRHLFVBQVUsQ0FBQ0ssZ0JBQWdCLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLFFBQVEsR0FBSztnQkFDL0Msc0NBQXNDO1lBQ3RDUCxHQUFvQjtZQUFwQkEsQ0FBQUEsR0FBb0IsR0FBcEJBLFVBQVUsQ0FBQ1EsU0FBUyxjQUFwQlIsR0FBb0IsV0FBSSxHQUF4QkEsS0FBQUEsQ0FBd0IsR0FBeEJBLEdBQW9CLENBQUVTLEVBQUUsQ0FBQyxZQUFZLEVBQUVDLDJCQUEyQixDQUFDLENBQUM7WUFFcEUsSUFBSUgsUUFBUSxDQUFDSSxNQUFNLEVBQUU7Z0JBQ25CUixpQkFBaUIsQ0FBQ0ksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEM7U0FDRixDQUFDLENBQUM7S0FDSixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsT0FBTztRQUNMTCxjQUFjO1FBQ2RFLHVCQUF1QjtRQUN2QlEsd0JBQXdCO1FBQ3hCRiwyQkFBMkI7S0FDNUIsQ0FBQztJQUNGLFNBQVNFLHdCQUF3QixHQUFHO1FBQ2xDWixVQUFVLENBQUNhLE9BQU8sRUFBRSxDQUFDUCxJQUFJLENBQUMsQ0FBQ1EsV0FBVyxHQUFLO2dCQUN6QyxzQ0FBc0M7WUFDdENkLEdBQW9CO1lBQXBCQSxDQUFBQSxHQUFvQixHQUFwQkEsVUFBVSxDQUFDUSxTQUFTLGNBQXBCUixHQUFvQixXQUFJLEdBQXhCQSxLQUFBQSxDQUF3QixHQUF4QkEsR0FBb0IsQ0FBRVMsRUFBRSxDQUFDLFlBQVksRUFBRUMsMkJBQTJCLENBQUMsQ0FBQztZQUNwRUssT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxFQUFFRixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1Q1gsaUJBQWlCLENBQUNXLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25DLENBQUMsQ0FBQztLQUNKO0lBRUQsU0FBU0osMkJBQTJCLEdBQUc7UUFDckNWLFVBQVUsQ0FBQ2lCLFVBQVUsRUFBRSxDQUFDO1FBRXhCZCxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN6QjtDQUNGLENBQUM7QUFFSyxNQUFNZSxXQUFXLEdBQUcsT0FBT0MsSUFBVyxFQUFFQyxLQUFVLEdBQUs7SUFDNUQsSUFBSTtRQUNGLE1BQU1DLFVBQVUsR0FBRyxNQUFNckIsVUFBVSxDQUFDc0IsZUFBZSxDQUFDO1lBQUNILElBQUk7U0FBQyxDQUFDO1FBQzNELE1BQU0sRUFBRUksSUFBSSxHQUFFLEdBQUcsTUFBTUgsS0FBSyxDQUFDSSxrQkFBa0IsQ0FBQ0gsVUFBVSxDQUFDLENBQUNJLEVBQUUsRUFBRTtRQUNoRVYsT0FBTyxDQUFDQyxHQUFHLENBQUM7WUFBRU8sSUFBSTtTQUFFLENBQUMsQ0FBQztJQUN0QiwwRUFBMEU7S0FDM0UsQ0FBQyxPQUFPRyxLQUFLLEVBQUU7UUFDZFgsT0FBTyxDQUFDQyxHQUFHLENBQUMsMkJBQTJCLEVBQUVVLEtBQUssQ0FBQyxDQUFDO0tBQ2pEO0NBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FsZ29mYXJtLXd3dy8uL3NyYy9wZXJhL2luZGV4LnRzPzhmYjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGVyYVdhbGxldENvbm5lY3QgfSBmcm9tICdAcGVyYXdhbGxldC9jb25uZWN0JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHBlcmFXYWxsZXQgPSBuZXcgUGVyYVdhbGxldENvbm5lY3QoKTtcblxuZXhwb3J0IGNvbnN0IHVzZVBlcmFXYWxsZXQgPSAoKSA9PiB7XG4gIGNvbnN0IFthY2NvdW50QWRkcmVzcywgc2V0QWNjb3VudEFkZHJlc3NdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IGlzQ29ubmVjdGVkVG9QZXJhV2FsbGV0ID0gdXNlTWVtbyhcbiAgICAoKSA9PiAhIWFjY291bnRBZGRyZXNzLFxuICAgIFthY2NvdW50QWRkcmVzc11cbiAgKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBSZWNvbm5lY3QgdG8gdGhlIHNlc3Npb24gd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWRcbiAgICBwZXJhV2FsbGV0LnJlY29ubmVjdFNlc3Npb24oKS50aGVuKChhY2NvdW50cykgPT4ge1xuICAgICAgLy8gU2V0dXAgdGhlIGRpc2Nvbm5lY3QgZXZlbnQgbGlzdGVuZXJcbiAgICAgIHBlcmFXYWxsZXQuY29ubmVjdG9yPy5vbignZGlzY29ubmVjdCcsIGhhbmRsZURpc2Nvbm5lY3RXYWxsZXRDbGljayk7XG5cbiAgICAgIGlmIChhY2NvdW50cy5sZW5ndGgpIHtcbiAgICAgICAgc2V0QWNjb3VudEFkZHJlc3MoYWNjb3VudHNbMF0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBhY2NvdW50QWRkcmVzcyxcbiAgICBpc0Nvbm5lY3RlZFRvUGVyYVdhbGxldCxcbiAgICBoYW5kbGVDb25uZWN0V2FsbGV0Q2xpY2ssXG4gICAgaGFuZGxlRGlzY29ubmVjdFdhbGxldENsaWNrLFxuICB9O1xuICBmdW5jdGlvbiBoYW5kbGVDb25uZWN0V2FsbGV0Q2xpY2soKSB7XG4gICAgcGVyYVdhbGxldC5jb25uZWN0KCkudGhlbigobmV3QWNjb3VudHMpID0+IHtcbiAgICAgIC8vIFNldHVwIHRoZSBkaXNjb25uZWN0IGV2ZW50IGxpc3RlbmVyXG4gICAgICBwZXJhV2FsbGV0LmNvbm5lY3Rvcj8ub24oJ2Rpc2Nvbm5lY3QnLCBoYW5kbGVEaXNjb25uZWN0V2FsbGV0Q2xpY2spO1xuICAgICAgY29uc29sZS5sb2coJ2dvdCBhY2NvdW50ICcsIG5ld0FjY291bnRzWzBdKTtcbiAgICAgIHNldEFjY291bnRBZGRyZXNzKG5ld0FjY291bnRzWzBdKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZURpc2Nvbm5lY3RXYWxsZXRDbGljaygpIHtcbiAgICBwZXJhV2FsbGV0LmRpc2Nvbm5lY3QoKTtcblxuICAgIHNldEFjY291bnRBZGRyZXNzKG51bGwpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc2lnbkFuZFNlbmQgPSBhc3luYyAodHhuczogYW55W10sIGFsZ29kOiBhbnkpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzaWduZWRUeG5zID0gYXdhaXQgcGVyYVdhbGxldC5zaWduVHJhbnNhY3Rpb24oW3R4bnNdKTtcbiAgICBjb25zdCB7IHR4SWQgfSA9IGF3YWl0IGFsZ29kLnNlbmRSYXdUcmFuc2FjdGlvbihzaWduZWRUeG5zKS5kbygpO1xuICAgIGNvbnNvbGUubG9nKHsgdHhJZCB9KTtcbiAgICAvL2NvbnN0IGNvbXBsZXRlZFR4ID0gYXdhaXQgdmVyYm9zZVdhaXRGb3JDb25maXJtYXRpb24oYWxnb2QsIGNyZWF0ZVR4SWQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiQ291bGRuJ3Qgc2lnbiBPcHQtaW4gdHhuc1wiLCBlcnJvcik7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiUGVyYVdhbGxldENvbm5lY3QiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJwZXJhV2FsbGV0IiwidXNlUGVyYVdhbGxldCIsImFjY291bnRBZGRyZXNzIiwic2V0QWNjb3VudEFkZHJlc3MiLCJpc0Nvbm5lY3RlZFRvUGVyYVdhbGxldCIsInJlY29ubmVjdFNlc3Npb24iLCJ0aGVuIiwiYWNjb3VudHMiLCJjb25uZWN0b3IiLCJvbiIsImhhbmRsZURpc2Nvbm5lY3RXYWxsZXRDbGljayIsImxlbmd0aCIsImhhbmRsZUNvbm5lY3RXYWxsZXRDbGljayIsImNvbm5lY3QiLCJuZXdBY2NvdW50cyIsImNvbnNvbGUiLCJsb2ciLCJkaXNjb25uZWN0Iiwic2lnbkFuZFNlbmQiLCJ0eG5zIiwiYWxnb2QiLCJzaWduZWRUeG5zIiwic2lnblRyYW5zYWN0aW9uIiwidHhJZCIsInNlbmRSYXdUcmFuc2FjdGlvbiIsImRvIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pera/index.ts\n");

/***/ }),

/***/ "@perawallet/connect":
/*!**************************************!*\
  !*** external "@perawallet/connect" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@perawallet/connect");

/***/ }),

/***/ "algosdk":
/*!**************************!*\
  !*** external "algosdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("algosdk");

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