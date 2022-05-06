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
                    lineNumber: 41,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    className: "text-left p-4 ",
                    children: "Product"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    className: "lg:text-right text-left pl-5 lg:pl-0",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: true,
                      title: "Quantity",
                      children: "S\u1ED1 L\u01B0\u1EE3ng"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 44,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 43,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    className: "hidden text-right md:table-cell",
                    children: "gi\xE1"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
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
                          lineNumber: 56,
                          columnNumber: 61
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 55,
                        columnNumber: 57
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 54,
                      columnNumber: 53
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          className: "mb-2 md:ml-4 text-3xl font-bold",
                          children: [" ", itemCart.name, " "]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 61,
                          columnNumber: 61
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "text-red-600 ml-3",
                          onClick: function onClick() {
                            return removeItemCart(itemCart.id);
                          },
                          children: "Remove item"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 62,
                          columnNumber: 61
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 60,
                        columnNumber: 57
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 59,
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
                            lineNumber: 68,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "mx-4 font-bold text-lg ",
                            children: [" ", itemCart.quantity]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 69,
                            columnNumber: 65
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "fa-solid fa-plus cursor-pointer",
                            onClick: function onClick() {
                              return updateQuantity(index, 1);
                            }
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 70,
                            columnNumber: 65
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 67,
                          columnNumber: 61
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 66,
                        columnNumber: 57
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 65,
                      columnNumber: 53
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: "hidden text-right md:table-cell mb-3",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "text-sm lg:text-base font-medium",
                        children: itemCart.price * itemCart.quantity
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 75,
                        columnNumber: 57
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 74,
                      columnNumber: 53
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      className: "text-right",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "text-sm lg:text-base font-medium"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 80,
                        columnNumber: 57
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 79,
                      columnNumber: 53
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 49
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 45
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 38,
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
                  lineNumber: 92,
                  columnNumber: 53
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 49
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "ml-2 mt-5px",
                children: "Procceed to checkout"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 49
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 54
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "kh\xF4ng c\xF3 s\u1EA3n ph\u1EA9m n\xE0o trong gi\u1ECF h\xE0ng"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 61
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                href: "/",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "ml-10 bg-blue-500 px-4 py-2 rounded text-white",
                  children: " goToHome "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 65
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 61
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 57
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NhcnQvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsImNhcnQiLCJzZXRDYXJ0IiwidXNlRWZmZWN0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInVwZGF0ZVF1YW50aXR5IiwiaW5kZXgiLCJxdWFudGl0eVVuaXQiLCJxdWFudGl0eSIsInNwbGljZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZW1vdmVJdGVtQ2FydCIsImlkIiwiZmluZCIsIml0ZW0iLCJhbGVydCIsIm1hcCIsIml0ZW1DYXJ0IiwidGh1bWIiLCJuYW1lIiwicHJpY2UiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBQyxFQUFELENBRGhCO0FBQUEsTUFDVEMsSUFEUztBQUFBLE1BQ0hDLE9BREc7O0FBSWhCQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBSixFQUFtQztBQUMvQkgsYUFBTyxDQUFDSSxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQVgsQ0FBRCxDQUFQO0FBQ0g7QUFDSixHQUpRLEVBSU4sRUFKTSxDQUFUOztBQU1BLE1BQU1HLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFRQyxZQUFSLEVBQXlCO0FBQzVDLFFBQUlULElBQUksQ0FBQ1EsS0FBRCxDQUFKLENBQVlFLFFBQVosR0FBdUJELFlBQXZCLElBQXVDLENBQTNDLEVBQThDO0FBQzFDVCxVQUFJLENBQUNXLE1BQUwsQ0FBWUgsS0FBWixFQUFtQixDQUFuQjtBQUNBTCxrQkFBWSxDQUFDUyxPQUFi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QUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBOEVILENBekdEOztHQUFNMUIsSzs7S0FBQUEsSztBQTJHU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC41MTFkMzdlZWIzY2E2ZGRlNmRkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0c1wiKSkge1xyXG4gICAgICAgICAgICBzZXRDYXJ0KEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0c1wiKSkpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVF1YW50aXR5ID0gKGluZGV4LCBxdWFudGl0eVVuaXQpID0+IHtcclxuICAgICAgICBpZiAoY2FydFtpbmRleF0ucXVhbnRpdHkgKyBxdWFudGl0eVVuaXQgPD0gMCkge1xyXG4gICAgICAgICAgICBjYXJ0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydHNcIiwgSlNPTi5zdHJpbmdpZnkoY2FydCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhcnRbaW5kZXhdLnF1YW50aXR5ICs9IHF1YW50aXR5VW5pdDtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnRzJywgSlNPTi5zdHJpbmdpZnkoY2FydCkpOyAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldENhcnQoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRzXCIpKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVJdGVtQ2FydCA9IChpZCkgPT4ge1xyXG4gICAgICAgIGNhcnQuc3BsaWNlKGNhcnQuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGlkKSwgMSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0c1wiLCBKU09OLnN0cmluZ2lmeShjYXJ0KSlcclxuICAgICAgICBhbGVydCgneMOzYSBz4bqjbiBwaOG6qW0ga2jhu49pIGdp4buPIGjDoG5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXktNiBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIHAtOCB0ZXh0LWdyYXktODAwIGJnLXdoaXRlIHNoYWRvdy1sZyBwaW4tciBwaW4teSBtZDp3LTQvNSBsZzp3LTQvNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXNtIGxnOnRleHQtYmFzZVwiIGNlbGxTcGFjaW5nPXswfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiaC0xMiB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6dGFibGUtY2VsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHAtNCBcIj5Qcm9kdWN0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJsZzp0ZXh0LXJpZ2h0IHRleHQtbGVmdCBwbC01IGxnOnBsLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWUgdGl0bGU9XCJRdWFudGl0eVwiPlPhu5EgTMaw4bujbmc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImhpZGRlbiB0ZXh0LXJpZ2h0IG1kOnRhYmxlLWNlbGxcIj5nacOhPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydD8ubWFwKChpdGVtQ2FydCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiaGlkZGVuIHBiLTQgbWQ6dGFibGUtY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtQ2FydD8udGh1bWIgPyBgaHR0cDovLzE5Mi4xNjguMS4yOC9zdG9yYWdlL2AgKyBpdGVtQ2FydD8udGh1bWJbMF0gOiBcImh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1Q2NUNYTGtFV0ZEbEhJSG5VMWhEbkhIVm4wR2RmekJSN0VqZyZ1c3FwPUNBVVwifSBjbGFzc05hbWU9XCJ3LTUyICByb3VuZGVkXCIgYWx0PVwiVGh1bWJuYWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTIgbWQ6bWwtNCB0ZXh0LTN4bCBmb250LWJvbGRcIj4ge2l0ZW1DYXJ0Lm5hbWV9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgbWwtM1wiIG9uQ2xpY2s9eygpID0+IHJlbW92ZUl0ZW1DYXJ0KGl0ZW1DYXJ0LmlkKX0+UmVtb3ZlIGl0ZW08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyIG1kOmp1c3RpZnktZW5kIG1kOmZsZXggbXQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yMCBoLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LXJvdyB3LWZ1bGwgaXRlbXMtY2VudGVyIHRvcC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtbWludXMgY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiB1cGRhdGVRdWFudGl0eShpbmRleCwgLTEpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtNCBmb250LWJvbGQgdGV4dC1sZyBcIj4ge2l0ZW1DYXJ0LnF1YW50aXR5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXBsdXMgY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiB1cGRhdGVRdWFudGl0eShpbmRleCwgMSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJoaWRkZW4gdGV4dC1yaWdodCBtZDp0YWJsZS1jZWxsIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxnOnRleHQtYmFzZSBmb250LW1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbUNhcnQucHJpY2UgKiBpdGVtQ2FydC5xdWFudGl0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxnOnRleHQtYmFzZSBmb250LW1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0Lmxlbmd0aCA+IDA/IDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCB3LTgwICBmbG9hdC1yaWdodCBweC0xMCBweS0zIG10LTYgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSB1cHBlcmNhc2UgYmctZ3JheS04MDAgcm91bmRlZC1mdWxsIHNoYWRvdyBpdGVtLWNlbnRlciBob3ZlcjpiZy1ncmF5LTcwMCBmb2N1czpzaGFkb3ctb3V0bGluZSBmb2N1czpvdXRsaW5lLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBkYXRhLXByZWZpeD1cImZhclwiIGRhdGEtaWNvbj1cImNyZWRpdC1jYXJkXCIgY2xhc3NOYW1lPVwidy04XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTc2IDUxMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNTI3LjkgMzJINDguMUMyMS41IDMyIDAgNTMuNSAwIDgwdjM1MmMwIDI2LjUgMjEuNSA0OCA0OC4xIDQ4aDQ3OS44YzI2LjYgMCA0OC4xLTIxLjUgNDguMS00OFY4MGMwLTI2LjUtMjEuNS00OC00OC4xLTQ4ek01NC4xIDgwaDQ2Ny44YzMuMyAwIDYgMi43IDYgNnY0Mkg0OC4xVjg2YzAtMy4zIDIuNy02IDYtNnptNDY3LjggMzUySDU0LjFjLTMuMyAwLTYtMi43LTYtNlYyNTZoNDc5Ljh2MTcwYzAgMy4zLTIuNyA2LTYgNnpNMTkyIDMzMnY0MGMwIDYuNi01LjQgMTItMTIgMTJoLTcyYy02LjYgMC0xMi01LjQtMTItMTJ2LTQwYzAtNi42IDUuNC0xMiAxMi0xMmg3MmM2LjYgMCAxMiA1LjQgMTIgMTJ6bTE5MiAwdjQwYzAgNi42LTUuNCAxMi0xMiAxMkgyMzZjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNDBjMC02LjYgNS40LTEyIDEyLTEyaDEzNmM2LjYgMCAxMiA1LjQgMTIgMTJ6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTIgbXQtNXB4XCI+UHJvY2NlZWQgdG8gY2hlY2tvdXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+IDogPGRpdiBjbGFzc05hbWU9XCJcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmtow7RuZyBjw7Mgc+G6o24gcGjhuqltIG7DoG8gdHJvbmcgZ2nhu48gaMOgbmc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1sLTEwIGJnLWJsdWUtNTAwIHB4LTQgcHktMiByb3VuZGVkIHRleHQtd2hpdGVcIj4gZ29Ub0hvbWUgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==