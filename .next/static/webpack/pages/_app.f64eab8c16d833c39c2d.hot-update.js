webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/sagas/product.js":
/*!******************************!*\
  !*** ./src/sagas/product.js ***!
  \******************************/
/*! exports provided: getProducts, postOrder, getSellingProducts, getHotProducts, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postOrder", function() { return postOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSellingProducts", function() { return getSellingProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHotProducts", function() { return getHotProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductSaga; });
/* harmony import */ var C_Users_MienNC_Desktop_NextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_MienNC_Desktop_NextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_MienNC_Desktop_NextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.js");
/* harmony import */ var _actions_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/product */ "./src/actions/product.js");
/* harmony import */ var _contants_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contants/product */ "./src/contants/product.js");


var _marked = /*#__PURE__*/C_Users_MienNC_Desktop_NextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getProducts),
    _marked2 = /*#__PURE__*/C_Users_MienNC_Desktop_NextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postOrder),
    _marked3 = /*#__PURE__*/C_Users_MienNC_Desktop_NextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getSellingProducts),
    _marked4 = /*#__PURE__*/C_Users_MienNC_Desktop_NextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getHotProducts),
    _marked5 = /*#__PURE__*/C_Users_MienNC_Desktop_NextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(ProductSaga);





function getProducts(action) {
  var _action$offset, _action$offset2, _action$offset3, _action$offset4;

  var url, response;
  return C_Users_MienNC_Desktop_NextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getProducts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = "api/products/get?active=1&id_website=4&id_cat=".concat((_action$offset = action.offset) !== null && _action$offset !== void 0 && _action$offset.id_cart ? (_action$offset2 = action.offset) === null || _action$offset2 === void 0 ? void 0 : _action$offset2.id_cart : '', "&id_filter=").concat((_action$offset3 = action.offset) !== null && _action$offset3 !== void 0 && _action$offset3.id_filter ? (_action$offset4 = action.offset) === null || _action$offset4 === void 0 ? void 0 : _action$offset4.id_filter : '');
          _context.prev = 1;
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"], url);

        case 4:
          response = _context.sent;
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_3__["getProductsSuccess"])(response));

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_3__["getProductsError"])(_context.t0.message));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 9]]);
}
function postOrder(payload) {
  var url, response;
  return C_Users_MienNC_Desktop_NextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postOrder$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          url = "api/orders/add-from-react?id_website=4";
          _context2.prev = 1;
          _context2.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"], url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json, text-plain, */*",
              "X-Requested-With": "XMLHttpRequest"
            },
            credentials: "same-origin",
            body: JSON.stringify(payload.payload)
          });

        case 4:
          response = _context2.sent;
          _context2.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_3__["postOrderSuccess"])(response));

        case 7:
          _context2.next = 13;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](1);
          _context2.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_3__["postOrderError"])(_context2.t0.message));

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[1, 9]]);
}
function getSellingProducts(action) {
  var url, response;
  return C_Users_MienNC_Desktop_NextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getSellingProducts$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          url = "api/products/get?active=1&id_website=4&feature=1";
          _context3.prev = 1;
          _context3.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"], url);

        case 4:
          response = _context3.sent;
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_3__["getSellingProductsSuccess"])(response));

        case 7:
          _context3.next = 13;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](1);
          _context3.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_3__["getSellingProductsError"])(_context3.t0.message));

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[1, 9]]);
}
function getHotProducts(action) {
  var url, response;
  return C_Users_MienNC_Desktop_NextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getHotProducts$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          url = "api/products/get?active=1&id_website=4&highlight=1&offset=6";
          _context4.prev = 1;
          _context4.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"], url);

        case 4:
          response = _context4.sent;
          _context4.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_3__["getHotProductsSuccess"])(response));

        case 7:
          _context4.next = 13;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](1);
          _context4.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_3__["getHotProductsError"])(_context4.t0.message));

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[1, 9]]);
}
function ProductSaga() {
  return C_Users_MienNC_Desktop_NextJs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function ProductSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.t0 = redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"];
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_contants_product__WEBPACK_IMPORTED_MODULE_4__["GET_PRODUCTS"], getProducts);

        case 3:
          _context5.t1 = _context5.sent;
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_contants_product__WEBPACK_IMPORTED_MODULE_4__["GET_SELLING_PRODUCTS"], getSellingProducts);

        case 6:
          _context5.t2 = _context5.sent;
          _context5.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_contants_product__WEBPACK_IMPORTED_MODULE_4__["GET_HOT_PRODUCTS"], getHotProducts);

        case 9:
          _context5.t3 = _context5.sent;
          _context5.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_contants_product__WEBPACK_IMPORTED_MODULE_4__["POST_ORDER"], postOrder);

        case 12:
          _context5.t4 = _context5.sent;
          _context5.t5 = [_context5.t1, _context5.t2, _context5.t3, _context5.t4];
          _context5.next = 16;
          return (0, _context5.t0)(_context5.t5);

        case 16:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}
_c = ProductSaga;

var _c;

$RefreshReg$(_c, "ProductSaga");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NhZ2FzL3Byb2R1Y3QuanMiXSwibmFtZXMiOlsiZ2V0UHJvZHVjdHMiLCJwb3N0T3JkZXIiLCJnZXRTZWxsaW5nUHJvZHVjdHMiLCJnZXRIb3RQcm9kdWN0cyIsIlByb2R1Y3RTYWdhIiwiYWN0aW9uIiwidXJsIiwib2Zmc2V0IiwiaWRfY2FydCIsImlkX2ZpbHRlciIsImNhbGwiLCJSZXF1ZXN0IiwicmVzcG9uc2UiLCJwdXQiLCJnZXRQcm9kdWN0c1N1Y2Nlc3MiLCJnZXRQcm9kdWN0c0Vycm9yIiwibWVzc2FnZSIsInBheWxvYWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiY3JlZGVudGlhbHMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInBvc3RPcmRlclN1Y2Nlc3MiLCJwb3N0T3JkZXJFcnJvciIsImdldFNlbGxpbmdQcm9kdWN0c1N1Y2Nlc3MiLCJnZXRTZWxsaW5nUHJvZHVjdHNFcnJvciIsImdldEhvdFByb2R1Y3RzU3VjY2VzcyIsImdldEhvdFByb2R1Y3RzRXJyb3IiLCJhbGwiLCJ0YWtlTGF0ZXN0IiwiR0VUX1BST0RVQ1RTIiwiR0VUX1NFTExJTkdfUFJPRFVDVFMiLCJHRVRfSE9UX1BST0RVQ1RTIiwiUE9TVF9PUkRFUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRJQWlCaUJBLFc7NklBVUFDLFM7NklBb0JBQyxrQjs2SUFVQUMsYzs2SUFVUUMsVzs7QUFuRXpCO0FBRUE7QUFFQTtBQVdBO0FBRU8sU0FBVUosV0FBVixDQUFzQkssTUFBdEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0dDLGFBREgsMkRBQzBELGtCQUFBRCxNQUFNLENBQUNFLE1BQVAsMERBQWVDLE9BQWYsc0JBQXlCSCxNQUFNLENBQUNFLE1BQWhDLG9EQUF5QixnQkFBZUMsT0FBeEMsR0FBZ0QsRUFEMUcsd0JBQzBILG1CQUFBSCxNQUFNLENBQUNFLE1BQVAsNERBQWVF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QUFVLENBQUNJLDREQUFELEVBQWFuQyxTQUFiLENBQWhCOztBQU5PO0FBQUE7QUFBQTtBQUFBO0FBQ1g7O0FBRFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7S0FBVUcsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmY2NGVhYjhjMTZkODMzYzM5YzJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3B1dCwgdGFrZUxhdGVzdCwgYWxsLCBjYWxsfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgUmVxdWVzdCBmcm9tIFwiLi4vdXRpbHMvcmVxdWVzdFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIGdldFByb2R1Y3RzU3VjY2VzcyxcclxuICAgIGdldFByb2R1Y3RzRXJyb3IsXHJcbiAgICBnZXRTZWxsaW5nUHJvZHVjdHNTdWNjZXNzLFxyXG4gICAgZ2V0U2VsbGluZ1Byb2R1Y3RzRXJyb3IsXHJcbiAgICBnZXRIb3RQcm9kdWN0c1N1Y2Nlc3MsXHJcbiAgICBnZXRIb3RQcm9kdWN0c0Vycm9yLFxyXG4gICAgcG9zdE9yZGVyU3VjY2VzcyxcclxuICAgIHBvc3RPcmRlckVycm9yLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zL3Byb2R1Y3RcIjtcclxuXHJcbmltcG9ydCB7R0VUX1BST0RVQ1RTLCBHRVRfU0VMTElOR19QUk9EVUNUUywgR0VUX0hPVF9QUk9EVUNUUywgUE9TVF9PUkRFUiB9IGZyb20gXCIuLi9jb250YW50cy9wcm9kdWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGdldFByb2R1Y3RzKGFjdGlvbikge1xyXG4gICAgY29uc3QgdXJsID0gYGFwaS9wcm9kdWN0cy9nZXQ/YWN0aXZlPTEmaWRfd2Vic2l0ZT00JmlkX2NhdD0ke2FjdGlvbi5vZmZzZXQ/LmlkX2NhcnQgPyBhY3Rpb24ub2Zmc2V0Py5pZF9jYXJ0OicnfSZpZF9maWx0ZXI9JHthY3Rpb24ub2Zmc2V0Py5pZF9maWx0ZXIgPyBhY3Rpb24ub2Zmc2V0Py5pZF9maWx0ZXIgOicnfWA7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChSZXF1ZXN0LCB1cmwpO1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRQcm9kdWN0c1N1Y2Nlc3MocmVzcG9uc2UpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldFByb2R1Y3RzRXJyb3IoZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHBvc3RPcmRlcihwYXlsb2FkKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgYXBpL29yZGVycy9hZGQtZnJvbS1yZWFjdD9pZF93ZWJzaXRlPTRgO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUmVxdWVzdCwgdXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQtcGxhaW4sICovKlwiLFxyXG4gICAgICAgICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZC5wYXlsb2FkKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB5aWVsZCBwdXQocG9zdE9yZGVyU3VjY2VzcyhyZXNwb25zZSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQocG9zdE9yZGVyRXJyb3IoZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRTZWxsaW5nUHJvZHVjdHMoYWN0aW9uKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgYXBpL3Byb2R1Y3RzL2dldD9hY3RpdmU9MSZpZF93ZWJzaXRlPTQmZmVhdHVyZT0xYDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFJlcXVlc3QsIHVybCk7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldFNlbGxpbmdQcm9kdWN0c1N1Y2Nlc3MocmVzcG9uc2UpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldFNlbGxpbmdQcm9kdWN0c0Vycm9yKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRIb3RQcm9kdWN0cyhhY3Rpb24pIHtcclxuICAgIGNvbnN0IHVybCA9IGBhcGkvcHJvZHVjdHMvZ2V0P2FjdGl2ZT0xJmlkX3dlYnNpdGU9NCZoaWdobGlnaHQ9MSZvZmZzZXQ9NmA7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChSZXF1ZXN0LCB1cmwpO1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRIb3RQcm9kdWN0c1N1Y2Nlc3MocmVzcG9uc2UpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldEhvdFByb2R1Y3RzRXJyb3IoZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogUHJvZHVjdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIHlpZWxkIHRha2VMYXRlc3QoR0VUX1BST0RVQ1RTLCBnZXRQcm9kdWN0cyksXHJcbiAgICAgICAgeWllbGQgdGFrZUxhdGVzdChHRVRfU0VMTElOR19QUk9EVUNUUywgZ2V0U2VsbGluZ1Byb2R1Y3RzKSxcclxuICAgICAgICB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9IT1RfUFJPRFVDVFMsIGdldEhvdFByb2R1Y3RzKSxcclxuICAgICAgICAvLyB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9ERVRBSUwsIGdldERldGFpbCksXHJcbiAgICAgICAgeWllbGQgdGFrZUxhdGVzdChQT1NUX09SREVSLCBwb3N0T3JkZXIpLFxyXG4gICAgXSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==