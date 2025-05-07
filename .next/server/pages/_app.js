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

/***/ "(pages-dir-node)/./context/WeatherContext.tsx":
/*!************************************!*\
  !*** ./context/WeatherContext.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WeatherProvider: () => (/* binding */ WeatherProvider),\n/* harmony export */   useWeather: () => (/* binding */ useWeather)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst WeatherContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst WeatherProvider = ({ children })=>{\n    const [weatherData, setWeatherData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const addWeatherData = (city, data)=>{\n        setWeatherData((prev)=>({\n                ...prev,\n                [city]: data\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WeatherContext.Provider, {\n        value: {\n            weatherData,\n            addWeatherData\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Asish\\\\weather-cities-app\\\\context\\\\WeatherContext.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\nconst useWeather = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(WeatherContext);\n    if (!context) throw new Error('useWeather must be used inside WeatherProvider');\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbnRleHQvV2VhdGhlckNvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUU7QUFlbkUsTUFBTUksK0JBQWlCSCxvREFBYUEsQ0FBaUNJO0FBRTlELE1BQU1DLGtCQUEyRCxDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUNuRixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQWMsQ0FBQztJQUU3RCxNQUFNUSxpQkFBaUIsQ0FBQ0MsTUFBY0M7UUFDcENILGVBQWVJLENBQUFBLE9BQVM7Z0JBQUUsR0FBR0EsSUFBSTtnQkFBRSxDQUFDRixLQUFLLEVBQUVDO1lBQUs7SUFDbEQ7SUFFQSxxQkFDRSw4REFBQ1IsZUFBZVUsUUFBUTtRQUFDQyxPQUFPO1lBQUVQO1lBQWFFO1FBQWU7a0JBQzNESDs7Ozs7O0FBR1AsRUFBRTtBQUVLLE1BQU1TLGFBQWE7SUFDeEIsTUFBTUMsVUFBVWQsaURBQVVBLENBQUNDO0lBQzNCLElBQUksQ0FBQ2EsU0FBUyxNQUFNLElBQUlDLE1BQU07SUFDOUIsT0FBT0Q7QUFDVCxFQUFFIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEFzaXNoXFx3ZWF0aGVyLWNpdGllcy1hcHBcXGNvbnRleHRcXFdlYXRoZXJDb250ZXh0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG50eXBlIFdlYXRoZXJJbmZvID0ge1xyXG4gIFtjaXR5TmFtZTogc3RyaW5nXToge1xyXG4gICAgbWluOiBudW1iZXI7XHJcbiAgICBtYXg6IG51bWJlcjtcclxuICAgIHdlYXRoZXI6IHN0cmluZzsgIC8vIOKchSBhZGRlZCB3ZWF0aGVyIGhlcmVcclxuICB9O1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIFdlYXRoZXJDb250ZXh0VHlwZSB7XHJcbiAgd2VhdGhlckRhdGE6IFdlYXRoZXJJbmZvO1xyXG4gIGFkZFdlYXRoZXJEYXRhOiAoY2l0eTogc3RyaW5nLCBkYXRhOiB7IG1pbjogbnVtYmVyOyBtYXg6IG51bWJlcjsgd2VhdGhlcjogc3RyaW5nIH0pID0+IHZvaWQ7IC8vIOKchSBhZGRlZCB3ZWF0aGVyIHBhcmFtXHJcbn1cclxuXHJcbmNvbnN0IFdlYXRoZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxXZWF0aGVyQ29udGV4dFR5cGUgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XHJcblxyXG5leHBvcnQgY29uc3QgV2VhdGhlclByb3ZpZGVyOiBSZWFjdC5GQzx7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3dlYXRoZXJEYXRhLCBzZXRXZWF0aGVyRGF0YV0gPSB1c2VTdGF0ZTxXZWF0aGVySW5mbz4oe30pO1xyXG5cclxuICBjb25zdCBhZGRXZWF0aGVyRGF0YSA9IChjaXR5OiBzdHJpbmcsIGRhdGE6IHsgbWluOiBudW1iZXI7IG1heDogbnVtYmVyOyB3ZWF0aGVyOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgc2V0V2VhdGhlckRhdGEocHJldiA9PiAoeyAuLi5wcmV2LCBbY2l0eV06IGRhdGEgfSkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V2VhdGhlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgd2VhdGhlckRhdGEsIGFkZFdlYXRoZXJEYXRhIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1dlYXRoZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlV2VhdGhlciA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChXZWF0aGVyQ29udGV4dCk7XHJcbiAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoJ3VzZVdlYXRoZXIgbXVzdCBiZSB1c2VkIGluc2lkZSBXZWF0aGVyUHJvdmlkZXInKTtcclxuICByZXR1cm4gY29udGV4dDtcclxufTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIldlYXRoZXJDb250ZXh0IiwidW5kZWZpbmVkIiwiV2VhdGhlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ3ZWF0aGVyRGF0YSIsInNldFdlYXRoZXJEYXRhIiwiYWRkV2VhdGhlckRhdGEiLCJjaXR5IiwiZGF0YSIsInByZXYiLCJQcm92aWRlciIsInZhbHVlIiwidXNlV2VhdGhlciIsImNvbnRleHQiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./context/WeatherContext.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_WeatherContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/WeatherContext */ \"(pages-dir-node)/./context/WeatherContext.tsx\");\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_WeatherContext__WEBPACK_IMPORTED_MODULE_2__.WeatherProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Asish\\\\weather-cities-app\\\\pages\\\\_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Asish\\\\weather-cities-app\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFFNkI7QUFHNUMsU0FBU0MsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUM1RCxxQkFDRSw4REFBQ0gsb0VBQWVBO2tCQUNoQiw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc1QiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxBc2lzaFxcd2VhdGhlci1jaXRpZXMtYXBwXFxwYWdlc1xcX2FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IFdlYXRoZXJQcm92aWRlciB9IGZyb20gJ0AvY29udGV4dC9XZWF0aGVyQ29udGV4dCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8V2VhdGhlclByb3ZpZGVyPlxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgPC9XZWF0aGVyUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiV2VhdGhlclByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();