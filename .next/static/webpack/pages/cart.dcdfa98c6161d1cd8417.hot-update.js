webpackHotUpdate_N_E("pages/cart",{

/***/ "./src/pages/cart/index.js":
/*!*********************************!*\
  !*** ./src/pages/cart/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\MienNC\\Desktop\\NextJs\\src\\pages\\cart\\index.js",
    _this = undefined,
    _s = $RefreshSig$();






var Index = function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      cart = _useState[0],
      setCart = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (localStorage.getItem("carts")) {
      setCart(JSON.parse(localStorage.getItem("carts")));
    }
  }, []);

  var updateQuantity = function updateQuantity(index, quantityUnit) {
    if (cart[index].quantity + quantityUnit <= 0) {
      cart.splice(index, 1);
      localStorage.setItem("carts", JSON.stringify(cart));
    } else {
      cart[index].quantity += quantityUnit;
      localStorage.setItem('carts', JSON.stringify(cart));
    }

    setCart(JSON.parse(localStorage.getItem("carts")));
  };

  var removeItemCart = function removeItemCart(id) {
    cart.splice(cart.find(function (item) {
      return item.id === id;
    }), 1);
    localStorage.setItem("carts", JSON.stringify(cart));
    setCart(JSON.parse(localStorage.getItem("carts")));
    alert('xóa sản phẩm khỏi giỏ hàng');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container mx-auto",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex justify-center my-6 ",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex-1",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
              className: "w-full text-sm lg:text-base",
              cellSpacing: 0,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  className: "h-12 uppercase",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    className: "hidden md:table-cell"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    className: "text-left p-4 ",
                    children: "Product"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 41,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    className: "lg:text-right text-left pl-5 lg:pl-0",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: true,
                      title: "Quantity",
                      children: "S\u1ED1 L\u01B0\u1EE3ng"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 43,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    className: "hidden text-right md:table-cell",
                    children: "gi\xE1"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 45,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 33
              }, _this), cart === null || cart === void 0 ? void 0 : cart.map(function (itemCart, index) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: "hidden pb-4 md:table-cell",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          src: itemCart !== null && itemCart !== void 0 && itemCart.thumb ? "http://192.168.1.28/storage/" + (itemCart === null || itemCart === void 0 ? void 0 : itemCart.thumb[0]) : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT65CXLkEWFDlHIHnU1hDnHHVn0GdfzBR7Ejg&usqp=CAU",
                          className: "w-52  rounded",
                          alt: "Thumbnail"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 55,
                          columnNumber: 61
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 54,
                        columnNumber: 57
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 53,
                      columnNumber: 53
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          className: "mb-2 md:ml-4 text-3xl font-bold",
                          children: [" ", itemCart.name, " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 60,
                          columnNumber: 61
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "text-red-600 ml-3",
                          onClick: function onClick() {
                            return removeItemCart(itemCart.id);
                          },
                          children: "Remove item"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 61,
                          columnNumber: 61
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 59,
                        columnNumber: 57
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 58,
                      columnNumber: 53
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: "justify-center md:justify-end md:flex mt-6",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "w-20 h-10",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "relative flex flex-row w-full items-center top-10",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "fa-solid fa-minus cursor-pointer",
                            onClick: function onClick() {
                              return updateQuantity(index, -1);
                            }
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 67,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "mx-4 font-bold text-lg ",
                            children: [" ", itemCart.quantity]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 68,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "fa-solid fa-plus cursor-pointer",
                            onClick: function onClick() {
                              return updateQuantity(index, 1);
                            }
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 69,
                            columnNumber: 65
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 66,
                          columnNumber: 61
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 65,
                        columnNumber: 57
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 53
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: "hidden text-right md:table-cell mb-3",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "text-sm lg:text-base font-medium",
                        children: itemCart.price * itemCart.quantity
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 74,
                        columnNumber: 57
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 73,
                      columnNumber: 53
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: "text-right",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "text-sm lg:text-base font-medium"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 79,
                        columnNumber: 57
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 78,
                      columnNumber: 53
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 49
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 45
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 29
            }, _this), cart.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "flex justify-end w-80  float-right px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                "aria-hidden": "true",
                "data-prefix": "far",
                "data-icon": "credit-card",
                className: "w-8",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 576 512",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  fill: "currentColor",
                  d: "M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 53
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 49
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "ml-2 mt-5px",
                children: "Procceed to checkout"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 49
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 54
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "kh\xF4ng c\xF3 s\u1EA3n ph\u1EA9m n\xE0o trong gi\u1ECF h\xE0ng"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 61
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                href: "/",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "ml-10 bg-blue-500 px-4 py-2 rounded text-white",
                  children: " goToHome "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 65
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 61
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 57
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, _this);
};

_s(Index, "5+HPoxSo1E/C3go3F1eDhM/DDhE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NhcnQvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsImNhcnQiLCJzZXRDYXJ0IiwidXNlRWZmZWN0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInVwZGF0ZVF1YW50aXR5IiwiaW5kZXgiLCJxdWFudGl0eVVuaXQiLCJxdWFudGl0eSIsInNwbGljZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZW1vdmVJdGVtQ2FydCIsImlkIiwiZmluZCIsIml0ZW0iLCJhbGVydCIsIm1hcCIsIml0ZW1DYXJ0IiwidGh1bWIiLCJuYW1lIiwicHJpY2UiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBQyxFQUFELENBRGhCO0FBQUEsTUFDVEMsSUFEUztBQUFBLE1BQ0hDLE9BREc7O0FBRWhCQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBSixFQUFtQztBQUMvQkgsYUFBTyxDQUFDSSxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQVgsQ0FBRCxDQUFQO0FBQ0g7QUFDSixHQUpRLEVBSU4sRUFKTSxDQUFUOztBQU1BLE1BQU1HLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFRQyxZQUFSLEVBQXlCO0FBQzVDLFFBQUlULElBQUksQ0FBQ1EsS0FBRCxDQUFKLENBQVlFLFFBQVosR0FBdUJELFlBQXZCLElBQXVDLENBQTNDLEVBQThDO0FBQzFDVCxVQUFJLENBQUNXLE1BQUwsQ0FBWUgsS0FBWixFQUFtQixDQUFuQjtBQUNBTCxrQkFBWSxDQUFDUyxPQUFi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QTtBQUFBLHFCQTFEaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBOEVILENBeEdEOztHQUFNMUIsSzs7S0FBQUEsSztBQTBHU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC5kY2RmYTk4YzYxNjFkMWNkODQxNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydHNcIikpIHtcclxuICAgICAgICAgICAgc2V0Q2FydChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydHNcIikpKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVRdWFudGl0eSA9IChpbmRleCwgcXVhbnRpdHlVbml0KSA9PiB7XHJcbiAgICAgICAgaWYgKGNhcnRbaW5kZXhdLnF1YW50aXR5ICsgcXVhbnRpdHlVbml0IDw9IDApIHtcclxuICAgICAgICAgICAgY2FydC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRzXCIsIEpTT04uc3RyaW5naWZ5KGNhcnQpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYXJ0W2luZGV4XS5xdWFudGl0eSArPSBxdWFudGl0eVVuaXQ7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0cycsIEpTT04uc3RyaW5naWZ5KGNhcnQpKTsgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDYXJ0KEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0c1wiKSkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlSXRlbUNhcnQgPSAoaWQpID0+IHtcclxuICAgICAgICBjYXJ0LnNwbGljZShjYXJ0LmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBpZCksIDEpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydHNcIiwgSlNPTi5zdHJpbmdpZnkoY2FydCkpXHJcbiAgICAgICAgc2V0Q2FydChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydHNcIikpKVxyXG4gICAgICAgIGFsZXJ0KCd4w7NhIHPhuqNuIHBo4bqpbSBraOG7j2kgZ2nhu48gaMOgbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBteS02IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgcC04IHRleHQtZ3JheS04MDAgYmctd2hpdGUgc2hhZG93LWxnIHBpbi1yIHBpbi15IG1kOnctNC81IGxnOnctNC81XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtc20gbGc6dGV4dC1iYXNlXCIgY2VsbFNwYWNpbmc9ezB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJoLTEyIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImhpZGRlbiBtZDp0YWJsZS1jZWxsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgcC00IFwiPlByb2R1Y3Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImxnOnRleHQtcmlnaHQgdGV4dC1sZWZ0IHBsLTUgbGc6cGwtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZSB0aXRsZT1cIlF1YW50aXR5XCI+U+G7kSBMxrDhu6NuZzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiaGlkZGVuIHRleHQtcmlnaHQgbWQ6dGFibGUtY2VsbFwiPmdpw6E8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0Py5tYXAoKGl0ZW1DYXJ0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJoaWRkZW4gcGItNCBtZDp0YWJsZS1jZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW1DYXJ0Py50aHVtYiA/IGBodHRwOi8vMTkyLjE2OC4xLjI4L3N0b3JhZ2UvYCArIGl0ZW1DYXJ0Py50aHVtYlswXSA6IFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjVDY1Q1hMa0VXRkRsSElIblUxaERuSEhWbjBHZGZ6QlI3RWpnJnVzcXA9Q0FVXCJ9IGNsYXNzTmFtZT1cInctNTIgIHJvdW5kZWRcIiBhbHQ9XCJUaHVtYm5haWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMiBtZDptbC00IHRleHQtM3hsIGZvbnQtYm9sZFwiPiB7aXRlbUNhcnQubmFtZX0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCBtbC0zXCIgb25DbGljaz17KCkgPT4gcmVtb3ZlSXRlbUNhcnQoaXRlbUNhcnQuaWQpfT5SZW1vdmUgaXRlbTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgbWQ6anVzdGlmeS1lbmQgbWQ6ZmxleCBtdC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIwIGgtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtcm93IHctZnVsbCBpdGVtcy1jZW50ZXIgdG9wLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1taW51cyBjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVF1YW50aXR5KGluZGV4LCAtMSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC00IGZvbnQtYm9sZCB0ZXh0LWxnIFwiPiB7aXRlbUNhcnQucXVhbnRpdHl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtcGx1cyBjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVF1YW50aXR5KGluZGV4LCAxKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImhpZGRlbiB0ZXh0LXJpZ2h0IG1kOnRhYmxlLWNlbGwgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gbGc6dGV4dC1iYXNlIGZvbnQtbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtQ2FydC5wcmljZSAqIGl0ZW1DYXJ0LnF1YW50aXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gbGc6dGV4dC1iYXNlIGZvbnQtbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnQubGVuZ3RoID4gMD8gPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIHctODAgIGZsb2F0LXJpZ2h0IHB4LTEwIHB5LTMgbXQtNiBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIHVwcGVyY2FzZSBiZy1ncmF5LTgwMCByb3VuZGVkLWZ1bGwgc2hhZG93IGl0ZW0tY2VudGVyIGhvdmVyOmJnLWdyYXktNzAwIGZvY3VzOnNoYWRvdy1vdXRsaW5lIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGRhdGEtcHJlZml4PVwiZmFyXCIgZGF0YS1pY29uPVwiY3JlZGl0LWNhcmRcIiBjbGFzc05hbWU9XCJ3LThcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk01MjcuOSAzMkg0OC4xQzIxLjUgMzIgMCA1My41IDAgODB2MzUyYzAgMjYuNSAyMS41IDQ4IDQ4LjEgNDhoNDc5LjhjMjYuNiAwIDQ4LjEtMjEuNSA0OC4xLTQ4VjgwYzAtMjYuNS0yMS41LTQ4LTQ4LjEtNDh6TTU0LjEgODBoNDY3LjhjMy4zIDAgNiAyLjcgNiA2djQySDQ4LjFWODZjMC0zLjMgMi43LTYgNi02em00NjcuOCAzNTJINTQuMWMtMy4zIDAtNi0yLjctNi02VjI1Nmg0NzkuOHYxNzBjMCAzLjMtMi43IDYtNiA2ek0xOTIgMzMydjQwYzAgNi42LTUuNCAxMi0xMiAxMmgtNzJjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNDBjMC02LjYgNS40LTEyIDEyLTEyaDcyYzYuNiAwIDEyIDUuNCAxMiAxMnptMTkyIDB2NDBjMCA2LjYtNS40IDEyLTEyIDEySDIzNmMtNi42IDAtMTItNS40LTEyLTEydi00MGMwLTYuNiA1LjQtMTIgMTItMTJoMTM2YzYuNiAwIDEyIDUuNCAxMiAxMnpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMiBtdC01cHhcIj5Qcm9jY2VlZCB0byBjaGVja291dDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gOiA8ZGl2IGNsYXNzTmFtZT1cIlwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+a2jDtG5nIGPDsyBz4bqjbiBwaOG6qW0gbsOgbyB0cm9uZyBnaeG7jyBow6BuZzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWwtMTAgYmctYmx1ZS01MDAgcHgtNCBweS0yIHJvdW5kZWQgdGV4dC13aGl0ZVwiPiBnb1RvSG9tZSA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9