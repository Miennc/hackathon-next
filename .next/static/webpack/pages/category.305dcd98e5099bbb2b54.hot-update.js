webpackHotUpdate_N_E("pages/category",{

/***/ "./src/pages/category/index.js":
/*!*************************************!*\
  !*** ./src/pages/category/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_MienNC_Desktop_NextJs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/NavBar */ "./src/components/NavBar.js");
/* harmony import */ var _components_Slide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Slide */ "./src/components/Slide.js");
/* harmony import */ var _components_CheckboxItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/CheckboxItem */ "./src/components/CheckboxItem.js");
/* harmony import */ var _components_ProductItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ProductItem */ "./src/components/ProductItem.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/product */ "./src/actions/product.js");
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions/category */ "./src/actions/category.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);



var _jsxFileName = "C:\\Users\\MienNC\\Desktop\\NextJs\\src\\pages\\category\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_MienNC_Desktop_NextJs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











function Index() {
  _s();

  var _category$data,
      _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.category;
  }),
      category = _useSelector.category,
      categoryFilter = _useSelector.categoryFilter;

  var listProduct = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.product.product.data.data;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      showFilter = _useState[0],
      setShowFilter = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      currentFilter = _useState2[0],
      setCurrentFilter = _useState2[1];

  var catSelectHandle = function catSelectHandle(id) {
    router.push("/category?id_cat=".concat(id));
    setCurrentFilter([]);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    dispatch(Object(_actions_category__WEBPACK_IMPORTED_MODULE_9__["getCategory"])());
    dispatch(Object(_actions_product__WEBPACK_IMPORTED_MODULE_8__["getProducts"])());
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var idCat = router.query.id_cat;
    idCat && dispatch(Object(_actions_category__WEBPACK_IMPORTED_MODULE_9__["getFilterCategory"])(idCat));
  }, [router]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (currentFilter.length > 0) {
      var idCat = router.query.id_cat;
      var idFilter = currentFilter.toString();
      dispatch(Object(_actions_product__WEBPACK_IMPORTED_MODULE_8__["getProducts"])({
        id_cart: idCat,
        id_filter: idFilter
      }));
    }
  }, [currentFilter]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "container mx-auto space-y-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "mx-12",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Slide__WEBPACK_IMPORTED_MODULE_4__["default"], {
        page_type: 2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 14
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 14
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "flex flex-no-wrap mx-12",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "w-64 absolute sm:relative bg-gray-800 shadow flex-col justify-between hidden sm:flex my-12",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "px-8",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
            className: "mt-12",
            children: ((category === null || category === void 0 ? void 0 : (_category$data = category.data) === null || _category$data === void 0 ? void 0 : _category$data.data) || []).map(function (cat, index) {
              var _categoryFilter$data;

              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
                className: "w-full text-gray-300 cursor-pointer items-center mb-6",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "flex items-center  hover:text-gray-500",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                    onClick: function onClick() {
                      catSelectHandle(cat.id);
                      setShowFilter({
                        cate: "cat".concat(cat.id)
                      });
                    },
                    className: "text-sm  ml-2",
                    children: cat.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 45
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 41
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
                  className: "list-disc ml-8",
                  children: (showFilter === null || showFilter === void 0 ? void 0 : showFilter.cate) === "cat".concat(cat.id) && ((categoryFilter === null || categoryFilter === void 0 ? void 0 : (_categoryFilter$data = categoryFilter.data) === null || _categoryFilter$data === void 0 ? void 0 : _categoryFilter$data.data) || []).map(function (filter, index) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
                        onClick: function onClick() {
                          setShowFilter(_objectSpread(_objectSpread({}, showFilter), {}, Object(C_Users_MienNC_Desktop_NextJs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, filter.id, true)));
                        },
                        children: filter.name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 72,
                        columnNumber: 57
                      }, _this), showFilter[filter.id] === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
                        className: "list-decimal ml-8",
                        children: (filter.childs || []).map(function (lab, index) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_CheckboxItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
                              handleFunc: function handleFunc(selected) {
                                return setCurrentFilter(selected);
                              },
                              item: lab,
                              current: currentFilter
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 80,
                              columnNumber: 73
                            }, _this)
                          }, index, false, {
                            fileName: _jsxFileName,
                            lineNumber: 79,
                            columnNumber: 69
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 77,
                        columnNumber: 61
                      }, _this) : null]
                    }, index, true, {
                      fileName: _jsxFileName,
                      lineNumber: 71,
                      columnNumber: 53
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 41
                }, _this)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 37
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "container mx-auto py-10 md:w-4/5 w-11/12 px-6",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "w-full h-full rounded border-dashed border-2 border-gray-300",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full",
            children: (listProduct || []).map(function (item, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_ProductItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
                product: item
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 37
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, this);
}

_s(Index, "6q4gTLtccAxs7s8MgLVEO86hpnk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"]];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NhdGVnb3J5L2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4Iiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJjYXRlZ29yeSIsImNhdGVnb3J5RmlsdGVyIiwibGlzdFByb2R1Y3QiLCJwcm9kdWN0IiwiZGF0YSIsInVzZVN0YXRlIiwic2hvd0ZpbHRlciIsInNldFNob3dGaWx0ZXIiLCJjdXJyZW50RmlsdGVyIiwic2V0Q3VycmVudEZpbHRlciIsImNhdFNlbGVjdEhhbmRsZSIsImlkIiwicHVzaCIsInVzZUVmZmVjdCIsImdldENhdGVnb3J5IiwiZ2V0UHJvZHVjdHMiLCJpZENhdCIsInF1ZXJ5IiwiaWRfY2F0IiwiZ2V0RmlsdGVyQ2F0ZWdvcnkiLCJsZW5ndGgiLCJpZEZpbHRlciIsInRvU3RyaW5nIiwiaWRfY2FydCIsImlkX2ZpbHRlciIsIm1hcCIsImNhdCIsImluZGV4IiwiY2F0ZSIsIm5hbWUiLCJmaWx0ZXIiLCJjaGlsZHMiLCJsYWIiLCJzZWxlY3RlZCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQTtBQUFBOztBQUNiLE1BQU1DLE1BQU0sR0FBR0MsOERBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUZhLHFCQUlzQkMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxRQUFWO0FBQUEsR0FBTixDQUpqQztBQUFBLE1BSU5BLFFBSk0sZ0JBSU5BLFFBSk07QUFBQSxNQUlJQyxjQUpKLGdCQUlJQSxjQUpKOztBQUtiLE1BQU1DLFdBQVcsR0FBR0osK0RBQVcs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QUEseUJBVEo7QUFBQSxpQkFDU0EsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKO0FBbUNILGFBcENBO0FBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUErQ0k7QUFBSyxpQkFBUyxFQUFDLCtDQUFmO0FBQUEsK0JBQ0k7QUFDSSxtQkFBUyxFQUFDLDhEQURkO0FBQUEsaUNBRUk7QUFBSyxxQkFBUyxFQUFDLDRFQUFmO0FBQUEsc0JBRVEsQ0FBQ3pCLFdBQVcsSUFBSSxFQUFoQixFQUFvQnVCLEdBQXBCLENBQXdCLFVBQUNTLElBQUQsRUFBT1AsS0FBUDtBQUFBLGtDQUNwQixxRUFBQywrREFBRDtBQUF5Qix1QkFBTyxFQUFFTztBQUFsQyxpQkFBa0JQLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRG9CO0FBQUEsYUFBeEI7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EvQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFxRUg7O0dBckdRbEMsSztVQUNVRSxzRCxFQUNFRSx1RCxFQUVrQkMsdUQsRUFDZkEsdUQ7OztLQUxmTCxLO0FBdUdNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXRlZ29yeS4zMDVkY2Q5OGU1MDk5YmJiMmI1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05hdkJhclwiO1xyXG5pbXBvcnQgU2xpZGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2xpZGVcIjtcclxuaW1wb3J0IENoZWNrYm94SXRlbSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9DaGVja2JveEl0ZW1cIjtcclxuaW1wb3J0IFByb2R1Y3RJdGVtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RJdGVtXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtnZXRQcm9kdWN0c30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvcHJvZHVjdFwiO1xyXG5pbXBvcnQge2dldENhdGVnb3J5LCBnZXRGaWx0ZXJDYXRlZ29yeX0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2F0ZWdvcnlcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCB7Y2F0ZWdvcnksIGNhdGVnb3J5RmlsdGVyfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNhdGVnb3J5KTtcclxuICAgIGNvbnN0IGxpc3RQcm9kdWN0ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucHJvZHVjdC5wcm9kdWN0LmRhdGEuZGF0YSk7XHJcbiAgICBjb25zdCBbc2hvd0ZpbHRlciwgc2V0U2hvd0ZpbHRlcl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbY3VycmVudEZpbHRlciwgc2V0Q3VycmVudEZpbHRlcl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgY2F0U2VsZWN0SGFuZGxlID0gKGlkKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9jYXRlZ29yeT9pZF9jYXQ9JHtpZH1gKTtcclxuICAgICAgICBzZXRDdXJyZW50RmlsdGVyKFtdKTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChnZXRDYXRlZ29yeSgpKTtcclxuICAgICAgICBkaXNwYXRjaChnZXRQcm9kdWN0cygpKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBpZENhdCA9IHJvdXRlci5xdWVyeS5pZF9jYXQ7XHJcbiAgICAgICAgaWRDYXQgJiYgZGlzcGF0Y2goZ2V0RmlsdGVyQ2F0ZWdvcnkoaWRDYXQpKTtcclxuICAgIH0sIFtyb3V0ZXJdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50RmlsdGVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGlkQ2F0ID0gcm91dGVyLnF1ZXJ5LmlkX2NhdDtcclxuICAgICAgICAgICAgbGV0IGlkRmlsdGVyID0gY3VycmVudEZpbHRlci50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChnZXRQcm9kdWN0cyh7aWRfY2FydDppZENhdCxpZF9maWx0ZXI6aWRGaWx0ZXJ9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2N1cnJlbnRGaWx0ZXJdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgPE5hdkJhci8+XHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTEyXCI+XHJcbiAgICAgICAgICAgICA8U2xpZGUgcGFnZV90eXBlPXsyfS8+XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LW5vLXdyYXAgbXgtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTY0IGFic29sdXRlIHNtOnJlbGF0aXZlIGJnLWdyYXktODAwIHNoYWRvdyBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gaGlkZGVuIHNtOmZsZXggbXktMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm10LTEyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhjYXRlZ29yeT8uZGF0YT8uZGF0YSB8fCBbXSkubWFwKChjYXQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWdyYXktMzAwIGN1cnNvci1wb2ludGVyIGl0ZW1zLWNlbnRlciBtYi02XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciAgaG92ZXI6dGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0U2VsZWN0SGFuZGxlKGNhdC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dGaWx0ZXIoe2NhdGU6IGBjYXQke2NhdC5pZH1gfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjbGFzc05hbWU9XCJ0ZXh0LXNtICBtbC0yXCI+e2NhdC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBtbC04XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93RmlsdGVyPy5jYXRlID09PSBgY2F0JHtjYXQuaWR9YCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2F0ZWdvcnlGaWx0ZXI/LmRhdGE/LmRhdGEgfHwgW10pLm1hcCgoZmlsdGVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93RmlsdGVyKHsuLi5zaG93RmlsdGVyLCBbZmlsdGVyLmlkXTogdHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PntmaWx0ZXIubmFtZX08L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0ZpbHRlcltmaWx0ZXIuaWRdID09PSB0cnVlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kZWNpbWFsIG1sLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoZmlsdGVyLmNoaWxkcyB8fCBbXSkubWFwKChsYWIsaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUZ1bmM9eyhzZWxlY3RlZCkgPT4gc2V0Q3VycmVudEZpbHRlcihzZWxlY3RlZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtPXtsYWJ9IGN1cnJlbnQ9e2N1cnJlbnRGaWx0ZXJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweS0xMCBtZDp3LTQvNSB3LTExLzEyIHB4LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgcm91bmRlZCBib3JkZXItZGFzaGVkIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgZ2FwLTYgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGxpc3RQcm9kdWN0IHx8IFtdKS5tYXAoKGl0ZW0sIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdEl0ZW0ga2V5PXtpbmRleH0gcHJvZHVjdD17aXRlbX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9