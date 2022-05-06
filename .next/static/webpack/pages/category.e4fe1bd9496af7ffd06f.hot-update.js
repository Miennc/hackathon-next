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
    }, this), "div", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "flex flex-no-wrap",
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
                    lineNumber: 59,
                    columnNumber: 45
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
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
                        lineNumber: 70,
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
                              lineNumber: 78,
                              columnNumber: 73
                            }, _this)
                          }, index, false, {
                            fileName: _jsxFileName,
                            lineNumber: 77,
                            columnNumber: 69
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 75,
                        columnNumber: 61
                      }, _this) : null]
                    }, index, true, {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                      columnNumber: 53
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 41
                }, _this)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 37
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
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
                lineNumber: 101,
                columnNumber: 37
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NhdGVnb3J5L2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4Iiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJjYXRlZ29yeSIsImNhdGVnb3J5RmlsdGVyIiwibGlzdFByb2R1Y3QiLCJwcm9kdWN0IiwiZGF0YSIsInVzZVN0YXRlIiwic2hvd0ZpbHRlciIsInNldFNob3dGaWx0ZXIiLCJjdXJyZW50RmlsdGVyIiwic2V0Q3VycmVudEZpbHRlciIsImNhdFNlbGVjdEhhbmRsZSIsImlkIiwicHVzaCIsInVzZUVmZmVjdCIsImdldENhdGVnb3J5IiwiZ2V0UHJvZHVjdHMiLCJpZENhdCIsInF1ZXJ5IiwiaWRfY2F0IiwiZ2V0RmlsdGVyQ2F0ZWdvcnkiLCJsZW5ndGgiLCJpZEZpbHRlciIsInRvU3RyaW5nIiwiaWRfY2FydCIsImlkX2ZpbHRlciIsIm1hcCIsImNhdCIsImluZGV4IiwiY2F0ZSIsIm5hbWUiLCJmaWx0ZXIiLCJjaGlsZHMiLCJsYWIiLCJzZWxlY3RlZCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQTtBQUFBOztBQUNiLE1BQU1DLE1BQU0sR0FBR0MsOERBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUZhLHFCQUlzQkMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxRQUFWO0FBQUEsR0FBTixDQUpqQztBQUFBLE1BSU5BLFFBSk0sZ0JBSU5BLFFBSk07QUFBQSxNQUlJQyxjQUpKLGdCQUlJQSxjQUpKOztBQUtiLE1BQU1DLFdBQVcsR0FBR0osK0RBQVcs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QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBK0NJO0FBQUssaUJBQVMsRUFBQywrQ0FBZjtBQUFBLCtCQUNJO0FBQ0ksbUJBQVMsRUFBQyw4REFEZDtBQUFBLGlDQUVJO0FBQUsscUJBQVMsRUFBQyw0RUFBZjtBQUFBLHNCQUVRLENBQUN6QixXQUFXLElBQUksRUFBaEIsRUFBb0J1QixHQUFwQixDQUF3QixVQUFDUyxJQUFELEVBQU9QLEtBQVA7QUFBQSxrQ0FDcEIscUVBQUMsK0RBQUQ7QUFBeUIsdUJBQU8sRUFBRU87QUFBbEMsaUJBQWtCUCxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURvQjtBQUFBLGFBQXhCO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBL0NKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUVIOztHQW5HUWxDLEs7VUFDVUUsc0QsRUFDRUUsdUQsRUFFa0JDLHVELEVBQ2ZBLHVEOzs7S0FMZkwsSztBQXFHTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2F0ZWdvcnkuZTRmZTFiZDk0OTZhZjdmZmQwNmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcclxuaW1wb3J0IFNsaWRlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NsaWRlXCI7XHJcbmltcG9ydCBDaGVja2JveEl0ZW0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2hlY2tib3hJdGVtXCI7XHJcbmltcG9ydCBQcm9kdWN0SXRlbSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0SXRlbVwiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7Z2V0UHJvZHVjdHN9IGZyb20gXCIuLi8uLi9hY3Rpb25zL3Byb2R1Y3RcIjtcclxuaW1wb3J0IHtnZXRDYXRlZ29yeSwgZ2V0RmlsdGVyQ2F0ZWdvcnl9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2NhdGVnb3J5XCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIEluZGV4KCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3Qge2NhdGVnb3J5LCBjYXRlZ29yeUZpbHRlcn0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jYXRlZ29yeSk7XHJcbiAgICBjb25zdCBsaXN0UHJvZHVjdCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnByb2R1Y3QucHJvZHVjdC5kYXRhLmRhdGEpO1xyXG4gICAgY29uc3QgW3Nob3dGaWx0ZXIsIHNldFNob3dGaWx0ZXJdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW2N1cnJlbnRGaWx0ZXIsIHNldEN1cnJlbnRGaWx0ZXJdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IGNhdFNlbGVjdEhhbmRsZSA9IChpZCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvY2F0ZWdvcnk/aWRfY2F0PSR7aWR9YCk7XHJcbiAgICAgICAgc2V0Q3VycmVudEZpbHRlcihbXSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goZ2V0Q2F0ZWdvcnkoKSk7XHJcbiAgICAgICAgZGlzcGF0Y2goZ2V0UHJvZHVjdHMoKSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaWRDYXQgPSByb3V0ZXIucXVlcnkuaWRfY2F0O1xyXG4gICAgICAgIGlkQ2F0ICYmIGRpc3BhdGNoKGdldEZpbHRlckNhdGVnb3J5KGlkQ2F0KSk7XHJcbiAgICB9LCBbcm91dGVyXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudEZpbHRlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBpZENhdCA9IHJvdXRlci5xdWVyeS5pZF9jYXQ7XHJcbiAgICAgICAgICAgIGxldCBpZEZpbHRlciA9IGN1cnJlbnRGaWx0ZXIudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZ2V0UHJvZHVjdHMoe2lkX2NhcnQ6aWRDYXQsaWRfZmlsdGVyOmlkRmlsdGVyfSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtjdXJyZW50RmlsdGVyXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gc3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgIDxOYXZCYXIvPlxyXG4gICAgICAgICAgICAgZGl2XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1uby13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02NCBhYnNvbHV0ZSBzbTpyZWxhdGl2ZSBiZy1ncmF5LTgwMCBzaGFkb3cgZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGhpZGRlbiBzbTpmbGV4IG15LTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtdC0xMlwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoY2F0ZWdvcnk/LmRhdGE/LmRhdGEgfHwgW10pLm1hcCgoY2F0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1ncmF5LTMwMCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIgbWItNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgIGhvdmVyOnRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdFNlbGVjdEhhbmRsZShjYXQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93RmlsdGVyKHtjYXRlOiBgY2F0JHtjYXQuaWR9YH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2xhc3NOYW1lPVwidGV4dC1zbSAgbWwtMlwiPntjYXQubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgbWwtOFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0ZpbHRlcj8uY2F0ZSA9PT0gYGNhdCR7Y2F0LmlkfWAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhdGVnb3J5RmlsdGVyPy5kYXRhPy5kYXRhIHx8IFtdKS5tYXAoKGZpbHRlciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0ZpbHRlcih7Li4uc2hvd0ZpbHRlciwgW2ZpbHRlci5pZF06IHRydWV9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT57ZmlsdGVyLm5hbWV9PC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dGaWx0ZXJbZmlsdGVyLmlkXSA9PT0gdHJ1ZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGVjaW1hbCBtbC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGZpbHRlci5jaGlsZHMgfHwgW10pLm1hcCgobGFiLGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVGdW5jPXsoc2VsZWN0ZWQpID0+IHNldEN1cnJlbnRGaWx0ZXIoc2VsZWN0ZWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT17bGFifSBjdXJyZW50PXtjdXJyZW50RmlsdGVyfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHktMTAgbWQ6dy00LzUgdy0xMS8xMiBweC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIHJvdW5kZWQgYm9yZGVyLWRhc2hlZCBib3JkZXItMiBib3JkZXItZ3JheS0zMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIHhsOmdyaWQtY29scy00IGdhcC02IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsaXN0UHJvZHVjdCB8fCBbXSkubWFwKChpdGVtLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RJdGVtIGtleT17aW5kZXh9IHByb2R1Y3Q9e2l0ZW19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==