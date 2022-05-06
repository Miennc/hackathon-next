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
            body: JSON.stringify(payload)
          });

        case 4:
          response = _context2.sent;
          _context2.next = 9;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](1);

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[1, 7]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NhZ2FzL3Byb2R1Y3QuanMiXSwibmFtZXMiOlsiZ2V0UHJvZHVjdHMiLCJwb3N0T3JkZXIiLCJnZXRTZWxsaW5nUHJvZHVjdHMiLCJnZXRIb3RQcm9kdWN0cyIsIlByb2R1Y3RTYWdhIiwiYWN0aW9uIiwidXJsIiwib2Zmc2V0IiwiaWRfY2FydCIsImlkX2ZpbHRlciIsImNhbGwiLCJSZXF1ZXN0IiwicmVzcG9uc2UiLCJwdXQiLCJnZXRQcm9kdWN0c1N1Y2Nlc3MiLCJnZXRQcm9kdWN0c0Vycm9yIiwibWVzc2FnZSIsInBheWxvYWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiY3JlZGVudGlhbHMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFNlbGxpbmdQcm9kdWN0c1N1Y2Nlc3MiLCJnZXRTZWxsaW5nUHJvZHVjdHNFcnJvciIsImdldEhvdFByb2R1Y3RzU3VjY2VzcyIsImdldEhvdFByb2R1Y3RzRXJyb3IiLCJhbGwiLCJ0YWtlTGF0ZXN0IiwiR0VUX1BST0RVQ1RTIiwiR0VUX1NFTExJTkdfUFJPRFVDVFMiLCJHRVRfSE9UX1BST0RVQ1RTIiwiUE9TVF9PUkRFUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRJQWlCaUJBLFc7NklBVUNDLFM7NklBa0JEQyxrQjs2SUFVQUMsYzs2SUFVUUMsVzs7QUFqRXpCO0FBRUE7QUFFQTtBQVdBO0FBRU8sU0FBVUosV0FBVixDQUFzQkssTUFBdEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0dDLGFBREgsMkRBQzBELGtCQUFBRCxNQUFNLENBQUNFLE1BQVAsMERBQWVDLE9BQWYsc0JBQXlCSCxNQUFNLENBQUNFLE1BQWhDLG9EQUF5QixnQkFBZUMsT0FBeEMsR0FBZ0QsRUFEMUcsd0JBQzBILG1CQUFBSCxNQUFNLENBQUNFLE1BQVAsNERBQWVFLFNBQWYsc0JBQTJCSixNQUFNLENBQUNFLE1BQWxDLG9EQUEyQixnQkFBZUUsU0FBMUMsR0FBcUQsRUFEL0s7QUFBQTtBQUFBO0FBR2tCLGlCQUFNQywrREFBSSxDQUFDQyxzREFBRCxFQUFVTCxHQUFWLENBQVY7O0FBSGxCO0FBR09NLGtCQUhQO0FBQUE7QUFJQyxpQkFBTUMsOERBQUcsQ0FBQ0MsMkVBQWtCLENBQUNGLFFBQUQsQ0FBbkIsQ0FBVDs7QUFKRDtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQyxpQkFBTUMsOERBQUcsQ0FBQ0UseUVBQWdCLENBQUMsWUFBTUMsT0FBUCxDQUFqQixDQUFUOztBQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUMsU0FBVWYsU0FBVixDQUFvQmdCLE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFWCxhQURGO0FBQUE7QUFBQTtBQUdpQixpQkFBTUksK0RBQUksQ0FBQ0Msc0RBQUQsRUFBVUwsR0FBVixFQUFlO0FBQ3RDWSxrQkFBTSxFQUFFLE1BRDhCO0FBRXRDQyxtQkFBTyxFQUFFO0FBQ1QsOEJBQWdCLGtCQURQO0FBRVRDLG9CQUFNLEVBQUUsbUNBRkM7QUFHVCxrQ0FBb0I7QUFIWCxhQUY2QjtBQU90Q0MsdUJBQVcsRUFBRSxhQVB5QjtBQVF0Q0MsZ0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVQLE9BQWY7QUFSZ0MsV0FBZixDQUFWOztBQUhqQjtBQUdNTCxrQkFITjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0JELFNBQVVWLGtCQUFWLENBQTZCRyxNQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDR0MsYUFESDtBQUFBO0FBQUE7QUFHa0IsaUJBQU1JLCtEQUFJLENBQUNDLHNEQUFELEVBQVVMLEdBQVYsQ0FBVjs7QUFIbEI7QUFHT00sa0JBSFA7QUFBQTtBQUlDLGlCQUFNQyw4REFBRyxDQUFDWSxrRkFBeUIsQ0FBQ2IsUUFBRCxDQUExQixDQUFUOztBQUpEO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1DLGlCQUFNQyw4REFBRyxDQUFDYSxnRkFBdUIsQ0FBQyxhQUFNVixPQUFQLENBQXhCLENBQVQ7O0FBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQSxTQUFVYixjQUFWLENBQXlCRSxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDR0MsYUFESDtBQUFBO0FBQUE7QUFHa0IsaUJBQU1JLCtEQUFJLENBQUNDLHNEQUFELEVBQVVMLEdBQVYsQ0FBVjs7QUFIbEI7QUFHT00sa0JBSFA7QUFBQTtBQUlDLGlCQUFNQyw4REFBRyxDQUFDYyw4RUFBcUIsQ0FBQ2YsUUFBRCxDQUF0QixDQUFUOztBQUpEO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1DLGlCQUFNQyw4REFBRyxDQUFDZSw0RUFBbUIsQ0FBQyxhQUFNWixPQUFQLENBQXBCLENBQVQ7O0FBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVUSxTQUFVWixXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFDTHlCLHNEQURLO0FBQUE7QUFFUCxpQkFBTUMscUVBQVUsQ0FBQ0MsOERBQUQsRUFBZS9CLFdBQWYsQ0FBaEI7O0FBRk87QUFBQTtBQUFBO0FBR1AsaUJBQU04QixxRUFBVSxDQUFDRSxzRUFBRCxFQUF1QjlCLGtCQUF2QixDQUFoQjs7QUFITztBQUFBO0FBQUE7QUFJUCxpQkFBTTRCLHFFQUFVLENBQUNHLGtFQUFELEVBQW1COUIsY0FBbkIsQ0FBaEI7O0FBSk87QUFBQTtBQUFBO0FBTVAsaUJBQU0yQixxRUFBVSxDQUFDSSw0REFBRCxFQUFhakMsU0FBYixDQUFoQjs7QUFOTztBQUFBO0FBQUE7QUFBQTtBQUNYOztBQURXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0tBQVVHLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hN2U3NGE4YzBkYjVlZmU2NGM3NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwdXQsIHRha2VMYXRlc3QsIGFsbCwgY2FsbH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IFJlcXVlc3QgZnJvbSBcIi4uL3V0aWxzL3JlcXVlc3RcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBnZXRQcm9kdWN0c1N1Y2Nlc3MsXHJcbiAgICBnZXRQcm9kdWN0c0Vycm9yLFxyXG4gICAgZ2V0U2VsbGluZ1Byb2R1Y3RzU3VjY2VzcyxcclxuICAgIGdldFNlbGxpbmdQcm9kdWN0c0Vycm9yLFxyXG4gICAgZ2V0SG90UHJvZHVjdHNTdWNjZXNzLFxyXG4gICAgZ2V0SG90UHJvZHVjdHNFcnJvcixcclxuICAgIHBvc3RPcmRlclN1Y2Nlc3MsXHJcbiAgICBwb3N0T3JkZXJFcnJvcixcclxufSBmcm9tIFwiLi4vYWN0aW9ucy9wcm9kdWN0XCI7XHJcblxyXG5pbXBvcnQge0dFVF9QUk9EVUNUUywgR0VUX1NFTExJTkdfUFJPRFVDVFMsIEdFVF9IT1RfUFJPRFVDVFMsIFBPU1RfT1JERVIgfSBmcm9tIFwiLi4vY29udGFudHMvcHJvZHVjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRQcm9kdWN0cyhhY3Rpb24pIHtcclxuICAgIGNvbnN0IHVybCA9IGBhcGkvcHJvZHVjdHMvZ2V0P2FjdGl2ZT0xJmlkX3dlYnNpdGU9NCZpZF9jYXQ9JHthY3Rpb24ub2Zmc2V0Py5pZF9jYXJ0ID8gYWN0aW9uLm9mZnNldD8uaWRfY2FydDonJ30maWRfZmlsdGVyPSR7YWN0aW9uLm9mZnNldD8uaWRfZmlsdGVyID8gYWN0aW9uLm9mZnNldD8uaWRfZmlsdGVyIDonJ31gO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUmVxdWVzdCwgdXJsKTtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0UHJvZHVjdHNTdWNjZXNzKHJlc3BvbnNlKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRQcm9kdWN0c0Vycm9yKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiogcG9zdE9yZGVyKHBheWxvYWQpIHtcclxuICAgIGNvbnN0IHVybCA9IGBhcGkvb3JkZXJzL2FkZC1mcm9tLXJlYWN0P2lkX3dlYnNpdGU9NGBcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFJlcXVlc3QsIHVybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC1wbGFpbiwgKi8qXCIsXHJcbiAgICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRTZWxsaW5nUHJvZHVjdHMoYWN0aW9uKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgYXBpL3Byb2R1Y3RzL2dldD9hY3RpdmU9MSZpZF93ZWJzaXRlPTQmZmVhdHVyZT0xYDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFJlcXVlc3QsIHVybCk7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldFNlbGxpbmdQcm9kdWN0c1N1Y2Nlc3MocmVzcG9uc2UpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldFNlbGxpbmdQcm9kdWN0c0Vycm9yKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRIb3RQcm9kdWN0cyhhY3Rpb24pIHtcclxuICAgIGNvbnN0IHVybCA9IGBhcGkvcHJvZHVjdHMvZ2V0P2FjdGl2ZT0xJmlkX3dlYnNpdGU9NCZoaWdobGlnaHQ9MSZvZmZzZXQ9NmA7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChSZXF1ZXN0LCB1cmwpO1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRIb3RQcm9kdWN0c1N1Y2Nlc3MocmVzcG9uc2UpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldEhvdFByb2R1Y3RzRXJyb3IoZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogUHJvZHVjdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIHlpZWxkIHRha2VMYXRlc3QoR0VUX1BST0RVQ1RTLCBnZXRQcm9kdWN0cyksXHJcbiAgICAgICAgeWllbGQgdGFrZUxhdGVzdChHRVRfU0VMTElOR19QUk9EVUNUUywgZ2V0U2VsbGluZ1Byb2R1Y3RzKSxcclxuICAgICAgICB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9IT1RfUFJPRFVDVFMsIGdldEhvdFByb2R1Y3RzKSxcclxuICAgICAgICAvLyB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9ERVRBSUwsIGdldERldGFpbCksXHJcbiAgICAgICAgeWllbGQgdGFrZUxhdGVzdChQT1NUX09SREVSLCBwb3N0T3JkZXIpLFxyXG4gICAgXSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==