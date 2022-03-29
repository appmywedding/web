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

/***/ "./containers/PagesWrapper/PagesWrapper.jsx":
/*!**************************************************!*\
  !*** ./containers/PagesWrapper/PagesWrapper.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PagesWrapper)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction PagesWrapper({ children  }) {\n    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((reducers)=>reducers.auth.user\n    );\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (!user) {\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().push('login');\n        }\n    });\n    return user ? children : '';\n};\nPagesWrapper.propTypes = {\n    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired)\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250YWluZXJzL1BhZ2VzV3JhcHBlci9QYWdlc1dyYXBwZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpQztBQUNRO0FBQ1A7QUFDRjtBQUVqQixRQUFRLENBQUNJLFlBQVksQ0FBQyxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUNoRCxLQUFLLENBQUNDLElBQUksR0FBR0wsd0RBQVcsRUFBRU0sUUFBUSxHQUFLQSxRQUFRLENBQUNDLElBQUksQ0FBQ0YsSUFBSTs7SUFFekROLGdEQUFTLEtBQU8sQ0FBQztRQUNiLEVBQUUsR0FBR00sSUFBSSxFQUFFLENBQUM7WUFDUkgsdURBQVcsQ0FBQyxDQUFPLE9BQUMsQ0FBQztRQUN6QixDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU0sQ0FDRkcsSUFBSSxHQUFHRCxRQUFRLEdBQUcsQ0FBRTtBQUc1QixDQUFDO0FBRURELFlBQVksQ0FBQ00sU0FBUyxHQUFHLENBQUM7SUFDdEJMLFFBQVEsRUFBRUgsbUVBQXlCO0FBQ3ZDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215d2VkZGluZy13ZWIvLi9jb250YWluZXJzL1BhZ2VzV3JhcHBlci9QYWdlc1dyYXBwZXIuanN4P2UyYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VzV3JhcHBlcih7IGNoaWxkcmVuIH0pIHtcclxuICAgIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcigocmVkdWNlcnMpID0+IHJlZHVjZXJzLmF1dGgudXNlcik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJ2xvZ2luJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHVzZXIgPyBjaGlsZHJlbiA6ICcnXHJcbiAgICApXHJcblxyXG59XHJcblxyXG5QYWdlc1dyYXBwZXIucHJvcFR5cGVzID0ge1xyXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTZWxlY3RvciIsIlByb3BUeXBlcyIsIlJvdXRlciIsIlBhZ2VzV3JhcHBlciIsImNoaWxkcmVuIiwidXNlciIsInJlZHVjZXJzIiwiYXV0aCIsInB1c2giLCJwcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./containers/PagesWrapper/PagesWrapper.jsx\n");

/***/ }),

/***/ "./containers/PagesWrapper/index.js":
/*!******************************************!*\
  !*** ./containers/PagesWrapper/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _PagesWrapper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _PagesWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PagesWrapper */ \"./containers/PagesWrapper/PagesWrapper.jsx\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250YWluZXJzL1BhZ2VzV3JhcHBlci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3QyIsInNvdXJjZXMiOlsid2VicGFjazovL215d2VkZGluZy13ZWIvLi9jb250YWluZXJzL1BhZ2VzV3JhcHBlci9pbmRleC5qcz9iMzFiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1BhZ2VzV3JhcHBlcic7Il0sIm5hbWVzIjpbImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./containers/PagesWrapper/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _containers_PagesWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/PagesWrapper */ \"./containers/PagesWrapper/index.js\");\n\n\n\n\n\nfunction Home() {\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().push('login');\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center min-h-screen py-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: \"My Wedding\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\orels\\\\wedding\\\\web-app\\\\mywedding-web\\\\pages\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\orels\\\\wedding\\\\web-app\\\\mywedding-web\\\\pages\\\\index.js\",\n            lineNumber: 14,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\orels\\\\wedding\\\\web-app\\\\mywedding-web\\\\pages\\\\index.js\",\n        lineNumber: 13,\n        columnNumber: 7\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNZO0FBQ1I7QUFDcUI7QUFFdEMsUUFBUSxDQUFDSyxJQUFJLEdBQUcsQ0FBQztJQUU5QkgsZ0RBQVMsS0FBTyxDQUFDO1FBQ2ZDLHVEQUFXLENBQUMsQ0FBTyxPQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELE1BQU0sNkVBQ0RJLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQTZEOzhGQUN6RVIsa0RBQUk7a0dBQ0ZTLENBQUs7MEJBQUMsQ0FBVTs7Ozs7Ozs7Ozs7Ozs7OztBQUkzQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXl3ZWRkaW5nLXdlYi8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFBhZ2VzV3JhcHBlciBmcm9tICcuLi9jb250YWluZXJzL1BhZ2VzV3JhcHBlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBSb3V0ZXIucHVzaCgnbG9naW4nKTtcbiAgfSlcblxuICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gcHktMlwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+TXkgV2VkZGluZzwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbIkhlYWQiLCJSZWFjdCIsInVzZUVmZmVjdCIsIlJvdXRlciIsIlBhZ2VzV3JhcHBlciIsIkhvbWUiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();