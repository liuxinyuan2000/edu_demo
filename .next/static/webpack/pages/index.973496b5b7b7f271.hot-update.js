"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api */ \"./api.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setUserId(()=>Math.floor(Math.random() * 100001));\n    }, []);\n    const handleSubmit = async ()=>{\n        if (email) {\n            console.log(\"enter email check,userid:,uuid:\", userId, (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)());\n            try {\n                const { data , error  } = await _api__WEBPACK_IMPORTED_MODULE_4__.supabase.from(\"email_list\").insert([\n                    {\n                        user_email: email,\n                        user_id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)()\n                    }\n                ]);\n                if (error) {\n                    throw error;\n                }\n                console.log(\"Email added:\", data);\n            } catch (error) {\n                console.log(\"Error adding email:\", error.message);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"w-full py-6 md:py-12 lg:py-16\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container px-4 md:px-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-32 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"md:w-1/3 space-y-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-4xl sm:text-8xl\",\n                                        children: \"Your Personal AI Video Partner\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/troyyliu/Desktop/toydemo/character_web/pages/index.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400\",\n                                        children: \"120k+ users in 14 days. Something new is brewing...\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/troyyliu/Desktop/toydemo/character_web/pages/index.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"max-w-sm space-y-8 w-full ml-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Control, {\n                                                className: \"max-w-sm w-full text-sm\",\n                                                placeholder: \"Enter your email\",\n                                                type: \"email\",\n                                                value: email,\n                                                onChange: (e)=>setEmail(e.target.value)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/troyyliu/Desktop/toydemo/character_web/pages/index.js\",\n                                                lineNumber: 42,\n                                                columnNumber: 11\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                                size: \"md\",\n                                                onClick: handleSubmit,\n                                                children: \"Make an Appointment\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/troyyliu/Desktop/toydemo/character_web/pages/index.js\",\n                                                lineNumber: 49,\n                                                columnNumber: 11\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/troyyliu/Desktop/toydemo/character_web/pages/index.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 9\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/troyyliu/Desktop/toydemo/character_web/pages/index.js\",\n                                lineNumber: 36,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"md:w-2/3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                    className: \"rounded-xl w-full aspect-square object-cover md:w-[1000px] md:h-[800px]\",\n                                    src: \"/output.mp4\",\n                                    controls: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/troyyliu/Desktop/toydemo/character_web/pages/index.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 9\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/troyyliu/Desktop/toydemo/character_web/pages/index.js\",\n                                lineNumber: 52,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/troyyliu/Desktop/toydemo/character_web/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 5\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/troyyliu/Desktop/toydemo/character_web/pages/index.js\",\n                    lineNumber: 34,\n                    columnNumber: 3\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/troyyliu/Desktop/toydemo/character_web/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"w-full py-12 md:py-24 lg:py-32\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container px-4 md:px-6\"\n                }, void 0, false, {\n                    fileName: \"/Users/troyyliu/Desktop/toydemo/character_web/pages/index.js\",\n                    lineNumber: 130,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/troyyliu/Desktop/toydemo/character_web/pages/index.js\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"Dh9MhND4pV/BidhkE3UgcMBpEo4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNrQjtBQUNDO0FBQ0g7QUFDWDtBQUNDO0FBQ25CLFNBQVNROztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUSxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQSxDQUFDO0lBRXJDQyxnREFBU0EsQ0FBQztRQUNSUSxVQUFVLElBQU1DLEtBQUtDLE1BQU1ELEtBQUtFLFdBQVc7SUFDN0MsR0FBRyxFQUFFO0lBRUwsTUFBTUMsZUFBZTtRQUNuQixJQUFJUCxPQUFPO1lBQ1RRLFFBQVFDLElBQUksbUNBQWtDUCxRQUFPSix3Q0FBSUE7WUFDekQsSUFBSTtnQkFDRixNQUFNLEVBQUVZLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQUcsTUFBTWYsK0NBQ3ZCZ0IsQ0FBQyxjQUNMQyxPQUFPO29CQUFDO3dCQUFFQyxZQUFXZDt3QkFBT2UsU0FBU2pCLHdDQUFJQTtvQkFBRztpQkFBRTtnQkFDakQsSUFBSWEsT0FBTztvQkFDVCxNQUFNQTtnQkFDUjtnQkFDQUgsUUFBUUMsSUFBSSxnQkFBZ0JDO1lBQzlCLEVBQUUsT0FBT0MsT0FBTztnQkFDZEgsUUFBUUMsSUFBSSx1QkFBdUJFLE1BQU1LO1lBQzNDO1FBQ0Y7SUFDRjtJQUNBLHFCQUNFOzswQkFDSiw4REFBQ0M7Z0JBQVFDLFdBQVU7MEJBQ2pCLDRFQUFDQztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNFO3dDQUFHRixXQUFVO2tEQUF1Qjs7Ozs7O2tEQUNyQyw4REFBQ0c7d0NBQUVILFdBQVU7a0RBQTRHOzs7Ozs7a0RBR3pILDhEQUFDQzt3Q0FBSUQsV0FBVTs7MERBQ2IsOERBQUN6Qix5REFBWTZCO2dEQUNYSixXQUFVO2dEQUNWSyxhQUFZO2dEQUNaQyxNQUFLO2dEQUNMQyxPQUFPekI7Z0RBQ1AwQixVQUFVLENBQUNDLElBQU0xQixTQUFTMEIsRUFBRUMsT0FBT0g7Ozs7OzswREFFckMsOERBQUNqQyxtREFBTUE7Z0RBQUNxQyxNQUFLO2dEQUFLQyxTQUFTdkI7MERBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHN0MsOERBQUNZO2dDQUFJRCxXQUFVOzBDQUNiLDRFQUFDYTtvQ0FDQ2IsV0FBVTtvQ0FDVmMsS0FBSTtvQ0FDSkMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQXlFWiw4REFBQ2hCO2dCQUFRQyxXQUFVOzBCQUNqQiw0RUFBQ0M7b0JBQUlELFdBQVU7Ozs7Ozs7Ozs7Ozs7QUFNdkI7R0FqSXdCbkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gJy4uL2FwaSdcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VXNlcklkKCgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMSkpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChlbWFpbCkge1xuICAgICAgY29uc29sZS5sb2coXCJlbnRlciBlbWFpbCBjaGVjayx1c2VyaWQ6LHV1aWQ6XCIsdXNlcklkLHV1aWQoKSlcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgICAgLmZyb20oJ2VtYWlsX2xpc3QnKVxuICAgICAgICAgIC5pbnNlcnQoW3sgdXNlcl9lbWFpbDplbWFpbCwgdXNlcl9pZDogdXVpZCgpIH1dKTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ0VtYWlsIGFkZGVkOicsIGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGFkZGluZyBlbWFpbDonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbjxzZWN0aW9uIGNsYXNzTmFtZT1cInctZnVsbCBweS02IG1kOnB5LTEyIGxnOnB5LTE2XCI+XG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTQgbWQ6cHgtNlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteS00IG1kOnNwYWNlLXktMCBtZDpzcGFjZS14LTMyIHRleHQtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctMS8zIHNwYWNlLXktMTBcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIHNtOnRleHQtOHhsXCI+WW91ciBQZXJzb25hbCBBSSBWaWRlbyBQYXJ0bmVyPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWF4LXctWzYwMHB4XSB0ZXh0LWdyYXktNTAwIG1kOnRleHQteGwvcmVsYXhlZCBsZzp0ZXh0LWJhc2UvcmVsYXhlZCB4bDp0ZXh0LXhsL3JlbGF4ZWQgZGFyazp0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgMTIwaysgdXNlcnMgaW4gMTQgZGF5cy4gU29tZXRoaW5nIG5ldyBpcyBicmV3aW5nLi4uICAgICAgICAgICAgICBcbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNtIHNwYWNlLXktOCB3LWZ1bGwgbWwtMlwiPlxuICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1heC13LXNtIHctZnVsbCB0ZXh0LXNtXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uIHNpemU9XCJtZFwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+TWFrZSBhbiBBcHBvaW50bWVudDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTIvM1wiPlxuICAgICAgICA8dmlkZW9cbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIHctZnVsbCBhc3BlY3Qtc3F1YXJlIG9iamVjdC1jb3ZlciBtZDp3LVsxMDAwcHhdIG1kOmgtWzgwMHB4XVwiXG4gICAgICAgICAgc3JjPVwiL291dHB1dC5tcDRcIlxuICAgICAgICAgIGNvbnRyb2xzXG4gICAgICAgID48L3ZpZGVvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuICAgICAgey8qIDxzZWN0aW9uIGNsYXNzTmFtZT1cInctZnVsbCBweS02IG1kOnB5LTEyIGxnOnB5LTE2XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTQgbWQ6cHgtNiBzcGFjZS15LTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodGVyIHNtOnRleHQtNXhsXCI+R2V0IHlvdXIgb3duIGN1c3RvbWl6ZWQgdmlkZW8gY2hhcmFjdGVyPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1heC13LVs4MDBweF0gdGV4dC1ncmF5LTUwMCBtZDp0ZXh0LXhsL3JlbGF4ZWQgbGc6dGV4dC1iYXNlL3JlbGF4ZWQgeGw6dGV4dC14bC9yZWxheGVkIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICBFbnRlciB0aGUgd29ybGQgb2YgcGVyc29uYWxpemVkIHZpZGVvIGNoYXQuIFlvdXIgQUkgcGFydG5lciB3aWxsIHJlZmxlY3QgeW91ciBzdHlsZSwgbW9vZCwgYW5kXG4gICAgICAgICAgICAgIHBlcnNvbmFsaXR5LiBXaGV0aGVyIHlvdSB3YW50IGEgY2xhc3NpYyBhdmF0YXIgb3IgYSBjdXR0aW5nLWVkZ2UgZGlnaXRhbCBjb21wYW5pb24sIHRoZSBjaG9pY2UgaXMgeW91cnMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1heC13LXNtIGdhcC00IG14LWF1dG8gbGc6bWF4LXctbm9uZSBsZzpncmlkLWNvbHMtMyBsZzpnYXAtNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICA8dmlkZW9cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC14bCB3LWZ1bGwgYXNwZWN0LXNxdWFyZSBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjIwMFwiXG4gICAgICAgICAgICAgIHNyYz1cIi9vdXRwdXQubXA0XCJcbiAgICAgICAgICAgICAgY29udHJvbHNcbiAgICAgICAgICAgID48L3ZpZGVvPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+Q2xhc3NpYzwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+VGltZWxlc3Mgc3R5bGU8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgIDx2aWRlb1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIHctZnVsbCBhc3BlY3Qtc3F1YXJlIG9iamVjdC1jb3ZlclwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjIwMFwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMjAwXCJcbiAgICAgICAgICAgICAgc3JjPVwiL291dHB1dC5tcDRcIlxuICAgICAgICAgICAgICBjb250cm9sc1xuICAgICAgICAgICAgPjwvdmlkZW8+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj5UcmVuZHk8L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPkFsd2F5cyB1cCB0byBkYXRlPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICA8dmlkZW9cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC14bCB3LWZ1bGwgYXNwZWN0LXNxdWFyZSBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjIwMFwiXG4gICAgICAgICAgICAgIHNyYz1cIi9vdXRwdXQubXA0XCJcbiAgICAgICAgICAgICAgY29udHJvbHNcbiAgICAgICAgICAgID48L3ZpZGVvPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+RGlnaXRhbDwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+VGhlIGZ1dHVyZSBpcyBub3c8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj4gKi99XG4gICAgICB7LyogPHNlY3Rpb24gY2xhc3NOYW1lPVwidy1mdWxsIHB5LTEyIG1kOnB5LTI0IGxnOnB5LTMyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTQgbWQ6cHgtNiBzcGFjZS15LTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodGVyIHNtOnRleHQtNXhsXCI+TWFrZSBhbiBBcHBvaW50bWVudDwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYXgtdy1bNjAwcHhdIHRleHQtZ3JheS01MDAgbWQ6dGV4dC14bC9yZWxheGVkIGxnOnRleHQtYmFzZS9yZWxheGVkIHhsOnRleHQteGwvcmVsYXhlZCBkYXJrOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgICAgRW50ZXIgeW91ciBlbWFpbCB0byBtYWtlIGFuIGFwcG9pbnRtZW50IHRvIGV4cGVyaWVuY2UgdGhlIGZ1dHVyZSBvZiB2aWRlbyBjaGF0IHdpdGggeW91ciBvd24gY3VzdG9taXplZCBBSVxuICAgICAgICAgICAgICBjaGFyYWN0ZXIuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zbSBzcGFjZS15LTQgdy1mdWxsXCI+XG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy1zbSB3LWZ1bGwgdGV4dC1zbVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgIDxCdXR0b24gc2l6ZT1cIm1kXCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5NYWtlIGFuIEFwcG9pbnRtZW50PC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPiAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInctZnVsbCBweS0xMiBtZDpweS0yNCBsZzpweS0zMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC00IG1kOnB4LTZcIj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKVxufVxuXG4iXSwibmFtZXMiOlsiTGluayIsIkJ1dHRvbiIsIkZvcm0iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN1cGFiYXNlIiwidjQiLCJ1dWlkIiwiSG9tZSIsImVtYWlsIiwic2V0RW1haWwiLCJ1c2VySWQiLCJzZXRVc2VySWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJoYW5kbGVTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVycm9yIiwiZnJvbSIsImluc2VydCIsInVzZXJfZW1haWwiLCJ1c2VyX2lkIiwibWVzc2FnZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsInAiLCJDb250cm9sIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJzaXplIiwib25DbGljayIsInZpZGVvIiwic3JjIiwiY29udHJvbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});