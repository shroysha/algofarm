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
exports.id = "pages/api/harvest";
exports.ids = ["pages/api/harvest"];
exports.modules = {

/***/ "algosdk":
/*!**************************!*\
  !*** external "algosdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("algosdk");

/***/ }),

/***/ "(api)/./pages/api/harvest.ts":
/*!******************************!*\
  !*** ./pages/api/harvest.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var algosdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! algosdk */ \"algosdk\");\n/* harmony import */ var algosdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(algosdk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/constants */ \"(api)/./src/constants.ts\");\n\n\nfunction handler(req, res) {\n    const {} = req.body;\n    const monic = process.env.MONIC;\n    if (monic == null) {\n        throw new Error(\"Monic not defined\");\n    }\n    console.log(monic);\n    const sk = algosdk__WEBPACK_IMPORTED_MODULE_0___default().mnemonicToSecretKey(monic).sk;\n    const nonce = 0;\n    const message = \"ProgData\" + (0,algosdk__WEBPACK_IMPORTED_MODULE_0__.decodeAddress)(_src_constants__WEBPACK_IMPORTED_MODULE_1__.minterContract) + nonce + _src_constants__WEBPACK_IMPORTED_MODULE_1__.nft1;\n    const toSign = new Uint8Array(Buffer.from(message));\n    const signature = algosdk__WEBPACK_IMPORTED_MODULE_0___default().signBytes(toSign, sk);\n    console.log(signature);\n    res.status(200).json({\n        signature\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaGFydmVzdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWlEO0FBRVU7QUFHNUMsU0FBU0ksT0FBTyxDQUM3QkMsR0FBbUIsRUFDbkJDLEdBQXFDLEVBQ3JDO0lBQ0EsTUFBTSxFQUFFLEdBQUdELEdBQUcsQ0FBQ0UsSUFBSTtJQUNuQixNQUFNQyxLQUFLLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxLQUFLO0lBQy9CLElBQUlILEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDakIsTUFBTSxJQUFJSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztLQUN0QztJQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sS0FBSyxDQUFDLENBQUM7SUFDbkIsTUFBTU8sRUFBRSxHQUFHZixrRUFBMkIsQ0FBQ1EsS0FBSyxDQUFDLENBQUNPLEVBQUU7SUFFaEQsTUFBTUUsS0FBSyxHQUFHLENBQUM7SUFDZixNQUFNQyxPQUFPLEdBQUcsVUFBVSxHQUFHakIsc0RBQWEsQ0FBQ0MsMERBQWMsQ0FBQyxHQUFHZSxLQUFLLEdBQUdkLGdEQUFJO0lBQ3pFLE1BQU1nQixNQUFNLEdBQUcsSUFBSUMsVUFBVSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0osT0FBTyxDQUFDLENBQUM7SUFDbkQsTUFBTUssU0FBUyxHQUFHdkIsd0RBQWlCLENBQUNtQixNQUFNLEVBQUVKLEVBQUUsQ0FBQztJQUUvQ0YsT0FBTyxDQUFDQyxHQUFHLENBQUNTLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZCakIsR0FBRyxDQUFDbUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUgsU0FBUztLQUFFLENBQUMsQ0FBQztDQUNyQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FsZ29mYXJtLXd3dy8uL3BhZ2VzL2FwaS9oYXJ2ZXN0LnRzPzgzOGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFsZ29zZGssIHsgZGVjb2RlQWRkcmVzcyB9IGZyb20gJ2FsZ29zZGsnO1xuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBtaW50ZXJDb250cmFjdCwgbmZ0MSB9IGZyb20gJy4uLy4uL3NyYy9jb25zdGFudHMnO1xuaW1wb3J0IHsgSGFydmVzdEJvZHksIEhhcnZlc3RSZXNwb25zZSB9IGZyb20gJy4uLy4uL3NyYy90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPEhhcnZlc3RSZXNwb25zZT5cbikge1xuICBjb25zdCB7fSA9IHJlcS5ib2R5IGFzIEhhcnZlc3RCb2R5O1xuICBjb25zdCBtb25pYyA9IHByb2Nlc3MuZW52Lk1PTklDO1xuICBpZiAobW9uaWMgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTW9uaWMgbm90IGRlZmluZWQnKTtcbiAgfVxuICBjb25zb2xlLmxvZyhtb25pYyk7XG4gIGNvbnN0IHNrID0gYWxnb3Nkay5tbmVtb25pY1RvU2VjcmV0S2V5KG1vbmljKS5zaztcblxuICBjb25zdCBub25jZSA9IDA7XG4gIGNvbnN0IG1lc3NhZ2UgPSAnUHJvZ0RhdGEnICsgZGVjb2RlQWRkcmVzcyhtaW50ZXJDb250cmFjdCkgKyBub25jZSArIG5mdDE7XG4gIGNvbnN0IHRvU2lnbiA9IG5ldyBVaW50OEFycmF5KEJ1ZmZlci5mcm9tKG1lc3NhZ2UpKTtcbiAgY29uc3Qgc2lnbmF0dXJlID0gYWxnb3Nkay5zaWduQnl0ZXModG9TaWduLCBzayk7XG5cbiAgY29uc29sZS5sb2coc2lnbmF0dXJlKTtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzaWduYXR1cmUgfSk7XG59XG4iXSwibmFtZXMiOlsiYWxnb3NkayIsImRlY29kZUFkZHJlc3MiLCJtaW50ZXJDb250cmFjdCIsIm5mdDEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiYm9keSIsIm1vbmljIiwicHJvY2VzcyIsImVudiIsIk1PTklDIiwiRXJyb3IiLCJjb25zb2xlIiwibG9nIiwic2siLCJtbmVtb25pY1RvU2VjcmV0S2V5Iiwibm9uY2UiLCJtZXNzYWdlIiwidG9TaWduIiwiVWludDhBcnJheSIsIkJ1ZmZlciIsImZyb20iLCJzaWduYXR1cmUiLCJzaWduQnl0ZXMiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/harvest.ts\n");

/***/ }),

/***/ "(api)/./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"minterContract\": () => (/* binding */ minterContract),\n/* harmony export */   \"minterId\": () => (/* binding */ minterId),\n/* harmony export */   \"nft1\": () => (/* binding */ nft1),\n/* harmony export */   \"nft2\": () => (/* binding */ nft2)\n/* harmony export */ });\nconst minterId = 105061239;\nconst minterContract = \"34RYJJ52VXNBPL3HMZ6AOQCNV3RS73T756SNGVKFRMUN5WI7WVSQTNWAKY\";\nconst nft1 = 105011818;\nconst nft2 = 105040567;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvY29uc3RhbnRzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxNQUFNQSxRQUFRLEdBQUcsU0FBUyxDQUFDO0FBQzNCLE1BQU1DLGNBQWMsR0FDekIsNERBQTRELENBQUM7QUFDeEQsTUFBTUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztBQUN2QixNQUFNQyxJQUFJLEdBQUcsU0FBUyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWxnb2Zhcm0td3d3Ly4vc3JjL2NvbnN0YW50cy50cz8zN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBtaW50ZXJJZCA9IDEwNTA2MTIzOTtcbmV4cG9ydCBjb25zdCBtaW50ZXJDb250cmFjdCA9XG4gICczNFJZSko1MlZYTkJQTDNITVo2QU9RQ05WM1JTNzNUNzU2U05HVktGUk1VTjVXSTdXVlNRVE5XQUtZJztcbmV4cG9ydCBjb25zdCBuZnQxID0gMTA1MDExODE4O1xuZXhwb3J0IGNvbnN0IG5mdDIgPSAxMDUwNDA1Njc7XG4iXSwibmFtZXMiOlsibWludGVySWQiLCJtaW50ZXJDb250cmFjdCIsIm5mdDEiLCJuZnQyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/constants.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/harvest.ts"));
module.exports = __webpack_exports__;

})();