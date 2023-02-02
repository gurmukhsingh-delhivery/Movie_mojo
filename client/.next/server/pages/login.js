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
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./src/pages/login.js":
/*!****************************!*\
  !*** ./src/pages/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var tailwindcss_base_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tailwindcss/base.css */ \"./node_modules/tailwindcss/base.css\");\n/* harmony import */ var tailwindcss_base_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_base_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var tailwindcss_components_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tailwindcss/components.css */ \"./node_modules/tailwindcss/components.css\");\n/* harmony import */ var tailwindcss_components_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_components_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var tailwindcss_utilities_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tailwindcss/utilities.css */ \"./node_modules/tailwindcss/utilities.css\");\n/* harmony import */ var tailwindcss_utilities_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_utilities_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst Login = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    let { id  } = router.query;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        class: \"bg-gray-50 dark:bg-gray-900\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"p-6 space-y-4 md:space-y-6 sm:p-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            class: \"text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white\",\n                            children: \"LOGIN\"\n                        }, void 0, false, {\n                            fileName: \"/home/delhivery/movie_mojo/Movie_mojo/client/src/pages/login.js\",\n                            lineNumber: 19,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            class: \"space-y-4 md:space-y-6\",\n                            action: \"#\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            for: \"email\",\n                                            class: \"block mb-2 text-sm font-medium text-gray-900 dark:text-white\",\n                                            children: \"Your email\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/delhivery/movie_mojo/Movie_mojo/client/src/pages/login.js\",\n                                            lineNumber: 24,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            name: \"email\",\n                                            id: \"email\",\n                                            class: \"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\",\n                                            placeholder: \"name@company.com\",\n                                            required: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/delhivery/movie_mojo/Movie_mojo/client/src/pages/login.js\",\n                                            lineNumber: 25,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/delhivery/movie_mojo/Movie_mojo/client/src/pages/login.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            for: \"password\",\n                                            class: \"block mb-2 text-sm font-medium text-gray-900 dark:text-white\",\n                                            children: \"Password\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/delhivery/movie_mojo/Movie_mojo/client/src/pages/login.js\",\n                                            lineNumber: 28,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"password\",\n                                            name: \"password\",\n                                            id: \"password\",\n                                            placeholder: \"••••••••\",\n                                            class: \"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\",\n                                            required: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/delhivery/movie_mojo/Movie_mojo/client/src/pages/login.js\",\n                                            lineNumber: 29,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/delhivery/movie_mojo/Movie_mojo/client/src/pages/login.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    class: \"w-full text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800\",\n                                    children: \"LOGIN\"\n                                }, void 0, false, {\n                                    fileName: \"/home/delhivery/movie_mojo/Movie_mojo/client/src/pages/login.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/delhivery/movie_mojo/Movie_mojo/client/src/pages/login.js\",\n                            lineNumber: 22,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/delhivery/movie_mojo/Movie_mojo/client/src/pages/login.js\",\n                    lineNumber: 18,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/delhivery/movie_mojo/Movie_mojo/client/src/pages/login.js\",\n                lineNumber: 17,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/delhivery/movie_mojo/Movie_mojo/client/src/pages/login.js\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/delhivery/movie_mojo/Movie_mojo/client/src/pages/login.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDVztBQUVyQjtBQUNNO0FBQ0Q7QUFFbkMsTUFBTUksUUFBUSxJQUFJO0lBQ2QsTUFBTUMsU0FBU0wsc0RBQVNBO0lBQ3hCLElBQUksRUFBQ00sR0FBRSxFQUFDLEdBQUdELE9BQU9FLEtBQUs7SUFHdkIscUJBQ0ksOERBQUNDO1FBQVFDLE9BQU07a0JBQ1gsNEVBQUNDO1lBQUlELE9BQU07c0JBRVAsNEVBQUNDO2dCQUFJRCxPQUFNOzBCQUNQLDRFQUFDQztvQkFBSUQsT0FBTTs7c0NBQ1AsOERBQUNFOzRCQUFHRixPQUFNO3NDQUF1Rzs7Ozs7O3NDQUdqSCw4REFBQ0c7NEJBQUtILE9BQU07NEJBQXlCSSxRQUFPOzs4Q0FDeEMsOERBQUNIOztzREFDRyw4REFBQ0k7NENBQU1DLEtBQUk7NENBQVFOLE9BQU07c0RBQStEOzs7Ozs7c0RBQ3hGLDhEQUFDTzs0Q0FBTUMsTUFBSzs0Q0FBUUMsTUFBSzs0Q0FBUVosSUFBRzs0Q0FBUUcsT0FBTTs0Q0FBK1FVLGFBQVk7NENBQW1CQyxVQUFTOzs7Ozs7Ozs7Ozs7OENBRTdXLDhEQUFDVjs7c0RBQ0csOERBQUNJOzRDQUFNQyxLQUFJOzRDQUFXTixPQUFNO3NEQUErRDs7Ozs7O3NEQUMzRiw4REFBQ087NENBQU1DLE1BQUs7NENBQVdDLE1BQUs7NENBQVdaLElBQUc7NENBQVdhLGFBQVk7NENBQVdWLE9BQU07NENBQStRVyxVQUFTOzs7Ozs7Ozs7Ozs7OENBRzlXLDhEQUFDQztvQ0FBT0osTUFBSztvQ0FBU1IsT0FBTTs4Q0FBME87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9sUztBQUVBLGlFQUFlTCxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtb19wcm9qZWN0Ly4vc3JjL3BhZ2VzL2xvZ2luLmpzP2U1YmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAndGFpbHdpbmRjc3MvYmFzZS5jc3MnO1xuaW1wb3J0ICd0YWlsd2luZGNzcy9jb21wb25lbnRzLmNzcyc7XG5pbXBvcnQgJ3RhaWx3aW5kY3NzL3V0aWxpdGllcy5jc3MnO1xuXG5jb25zdCBMb2dpbiA9ICgpPT57XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgbGV0IHtpZH0gPSByb3V0ZXIucXVlcnlcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJiZy1ncmF5LTUwIGRhcms6YmctZ3JheS05MDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC02IHB5LTggbXgtYXV0byBtZDpoLXNjcmVlbiBsZzpweS0wXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93IGRhcms6Ym9yZGVyIG1kOm10LTAgc206bWF4LXctbWQgeGw6cC0wIGRhcms6YmctZ3JheS04MDAgZGFyazpib3JkZXItZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtNiBzcGFjZS15LTQgbWQ6c3BhY2UteS02IHNtOnAtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwidGV4dC14bCB0ZXh0LWNlbnRlciBmb250LWJvbGQgbGVhZGluZy10aWdodCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIG1kOnRleHQtMnhsIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExPR0lOXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJzcGFjZS15LTQgbWQ6c3BhY2UteS02XCIgYWN0aW9uPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiIGNsYXNzPVwiYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+WW91ciBlbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgY2xhc3M9XCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1wcmltYXJ5LTYwMCBmb2N1czpib3JkZXItcHJpbWFyeS02MDAgYmxvY2sgdy1mdWxsIHAtMi41IGRhcms6YmctZ3JheS03MDAgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCBkYXJrOnRleHQtd2hpdGUgZGFyazpmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCIgcGxhY2Vob2xkZXI9XCJuYW1lQGNvbXBhbnkuY29tXCIgcmVxdWlyZWQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiIGNsYXNzPVwiYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCiXCIgY2xhc3M9XCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1wcmltYXJ5LTYwMCBmb2N1czpib3JkZXItcHJpbWFyeS02MDAgYmxvY2sgdy1mdWxsIHAtMi41IGRhcms6YmctZ3JheS03MDAgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCBkYXJrOnRleHQtd2hpdGUgZGFyazpmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCIgcmVxdWlyZWQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwidy1mdWxsIHRleHQtd2hpdGUgYmctY3lhbi01MDAgaG92ZXI6YmctY3lhbi02MDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLXByaW1hcnktMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTIuNSB0ZXh0LWNlbnRlciBkYXJrOmJnLXByaW1hcnktNjAwIGRhcms6aG92ZXI6YmctcHJpbWFyeS03MDAgZGFyazpmb2N1czpyaW5nLXByaW1hcnktODAwXCI+TE9HSU48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbjwvc2VjdGlvbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTG9naW4iLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5Iiwic2VjdGlvbiIsImNsYXNzIiwiZGl2IiwiaDEiLCJmb3JtIiwiYWN0aW9uIiwibGFiZWwiLCJmb3IiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/login.js\n");

/***/ }),

/***/ "./node_modules/tailwindcss/base.css":
/*!*******************************************!*\
  !*** ./node_modules/tailwindcss/base.css ***!
  \*******************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/tailwindcss/components.css":
/*!*************************************************!*\
  !*** ./node_modules/tailwindcss/components.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/tailwindcss/utilities.css":
/*!************************************************!*\
  !*** ./node_modules/tailwindcss/utilities.css ***!
  \************************************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!*******************************************!*\
  !*** external "next/dist/compiled/react" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!***********************************************************!*\
  !*** external "next/dist/compiled/react/jsx-dev-runtime" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-dev-runtime");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/login.js"));
module.exports = __webpack_exports__;

})();