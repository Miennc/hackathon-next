webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/actions/product.js":
/*!********************************!*\
  !*** ./src/actions/product.js ***!
  \********************************/
/*! exports provided: getProducts, getProductsSuccess, getProductsError, postOrder, postOrderSuccess, postOrderError, getSellingProducts, getSellingProductsSuccess, getSellingProductsError, getHotProducts, getHotProductsSuccess, getHotProductsError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsSuccess", function() { return getProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsError", function() { return getProductsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postOrder", function() { return postOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postOrderSuccess", function() { return postOrderSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postOrderError", function() { return postOrderError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSellingProducts", function() { return getSellingProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSellingProductsSuccess", function() { return getSellingProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSellingProductsError", function() { return getSellingProductsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHotProducts", function() { return getHotProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHotProductsSuccess", function() { return getHotProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHotProductsError", function() { return getHotProductsError; });
/* harmony import */ var _contants_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contants/product */ "./src/contants/product.js");

var getProducts = function getProducts(offset, page) {
  return {
    type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCTS"],
    offset: offset,
    page: page
  };
};
var getProductsSuccess = function getProductsSuccess(data, total) {
  return {
    type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCTS_SUCCESS"],
    data: data,
    total: total
  };
};
var getProductsError = function getProductsError(errMess) {
  return {
    type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCTS_ERROR"],
    errMess: errMess
  };
};
var postOrder = function postOrder(payload) {
  return {
    type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["POST_ORDER"],
    payload: payload
  };
};
var postOrderSuccess = function postOrderSuccess(data, total) {
  return {
    type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["POST_ORDER_SUCCESS"],
    data: data,
    total: total
  };
};
var postOrderError = function postOrderError(errMess) {
  return {
    type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["POST_ORDER_ERROR"],
    errMess: errMess
  };
}; //Selling===============================================================

var getSellingProducts = function getSellingProducts(offset, page) {
  return {
    type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SELLING_PRODUCTS"],
    offset: offset,
    page: page
  };
};
var getSellingProductsSuccess = function getSellingProductsSuccess(data, total) {
  return {
    type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SELLING_PRODUCTS_SUCCESS"],
    data: data,
    total: total
  };
};
var getSellingProductsError = function getSellingProductsError(errMess) {
  return {
    type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SELLING_PRODUCTS_ERROR"],
    errMess: errMess
  };
}; //Hot===============================================================

var getHotProducts = function getHotProducts(offset, page) {
  return {
    type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOT_PRODUCTS"],
    offset: offset,
    page: page
  };
};
var getHotProductsSuccess = function getHotProductsSuccess(data, total) {
  return {
    type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOT_PRODUCTS_SUCCESS"],
    data: data,
    total: total
  };
};
var getHotProductsError = function getHotProductsError(errMess) {
  return {
    type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOT_PRODUCTS_ERROR"],
    errMess: errMess
  };
};

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

/***/ }),

/***/ "./src/contants/product.js":
/*!*********************************!*\
  !*** ./src/contants/product.js ***!
  \*********************************/
/*! exports provided: GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, GET_SELLING_PRODUCTS, GET_SELLING_PRODUCTS_SUCCESS, GET_SELLING_PRODUCTS_ERROR, GET_HOT_PRODUCTS, GET_HOT_PRODUCTS_SUCCESS, GET_HOT_PRODUCTS_ERROR, POST_ORDER, POST_ORDER_SUCCESS, POST_ORDER_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCTS", function() { return GET_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCTS_SUCCESS", function() { return GET_PRODUCTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCTS_ERROR", function() { return GET_PRODUCTS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SELLING_PRODUCTS", function() { return GET_SELLING_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SELLING_PRODUCTS_SUCCESS", function() { return GET_SELLING_PRODUCTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SELLING_PRODUCTS_ERROR", function() { return GET_SELLING_PRODUCTS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOT_PRODUCTS", function() { return GET_HOT_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOT_PRODUCTS_SUCCESS", function() { return GET_HOT_PRODUCTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOT_PRODUCTS_ERROR", function() { return GET_HOT_PRODUCTS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ORDER", function() { return POST_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ORDER_SUCCESS", function() { return POST_ORDER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ORDER_ERROR", function() { return POST_ORDER_ERROR; });
var GET_PRODUCTS = "PRODUCT/GET_PRODUCT";
var GET_PRODUCTS_SUCCESS = "PRODUCT/GET_PRODUCT_SUCCESS";
var GET_PRODUCTS_ERROR = "PRODUCT/GET_PRODUCT_ERROR";
var GET_SELLING_PRODUCTS = "PRODUCT/GET_SELLING_PRODUCTS";
var GET_SELLING_PRODUCTS_SUCCESS = "PRODUCT/GET_SELLING_PRODUCTS_SUCCESS";
var GET_SELLING_PRODUCTS_ERROR = "PRODUCT/GET_SELLING_PRODUCTS_ERROR";
var GET_HOT_PRODUCTS = "PRODUCT/GET_HOT_PRODUCTS";
var GET_HOT_PRODUCTS_SUCCESS = "PRODUCT/GET_HOT_PRODUCTS_SUCCESS";
var GET_HOT_PRODUCTS_ERROR = "PRODUCT/GET_HOT_PRODUCTS_ERROR";
var POST_ORDER = "PRODUCT/POST_ORDER";
var POST_ORDER_SUCCESS = "PRODUCT/POST_ORDER_SUCCESS";
var POST_ORDER_ERROR = "PRODUCT/POST_ORDER_ERROR";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FjdGlvbnMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhbnRzL3Byb2R1Y3QuanMiXSwibmFtZXMiOlsiZ2V0UHJvZHVjdHMiLCJvZmZzZXQiLCJwYWdlIiwidHlwZSIsIlRZUEUiLCJnZXRQcm9kdWN0c1N1Y2Nlc3MiLCJkYXRhIiwidG90YWwiLCJnZXRQcm9kdWN0c0Vycm9yIiwiZXJyTWVzcyIsInBvc3RPcmRlciIsInBheWxvYWQiLCJwb3N0T3JkZXJTdWNjZXNzIiwicG9zdE9yZGVyRXJyb3IiLCJnZXRTZWxsaW5nUHJvZHVjdHMiLCJnZXRTZWxsaW5nUHJvZHVjdHNTdWNjZXNzIiwiZ2V0U2VsbGluZ1Byb2R1Y3RzRXJyb3IiLCJnZXRIb3RQcm9kdWN0cyIsImdldEhvdFByb2R1Y3RzU3VjY2VzcyIsImdldEhvdFByb2R1Y3RzRXJyb3IiLCJHRVRfUFJPRFVDVFMiLCJHRVRfUFJPRFVDVFNfU1VDQ0VTUyIsIkdFVF9QUk9EVUNUU19FUlJPUiIsIkdFVF9TRUxMSU5HX1BST0RVQ1RTIiwiR0VUX1NFTExJTkdfUFJPRFVDVFNfU1VDQ0VTUyIsIkdFVF9TRUxMSU5HX1BST0RVQ1RTX0VSUk9SIiwiR0VUX0hPVF9QUk9EVUNUUyIsIkdFVF9IT1RfUFJPRFVDVFNfU1VDQ0VTUyIsIkdFVF9IT1RfUFJPRFVDVFNfRVJST1IiLCJQT1NUX09SREVSIiwiUE9TVF9PUkRFUl9TVUNDRVNTIiwiUE9TVF9PUkRFUl9FUlJPUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLE1BQUQsRUFBU0MsSUFBVDtBQUFBLFNBQW1CO0FBQzVDQyxRQUFJLEVBQUVDLDhEQURzQztBQUU1Q0gsVUFBTSxFQUFOQSxNQUY0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QUFvQixHQUFHLDZCQUE3QjtBQUNBLElBQU1DLGtCQUFrQixHQUFHLDJCQUEzQjtBQUVBLElBQU1DLG9CQUFvQixHQUFHLDhCQUE3QjtBQUNBLElBQU1DLDRCQUE0QixHQUFHLHNDQUFyQztBQUNBLElBQU1DLDBCQUEwQixHQUFHLG9DQUFuQztBQUVBLElBQU1DLGdCQUFnQixHQUFHLDBCQUF6QjtBQUNBLElBQU1DLHdCQUF3QixHQUFHLGtDQUFqQztBQUNBLElBQU1DLHNCQUFzQixHQUFHLGdDQUEvQjtBQUdBLElBQU1DLFVBQVUsR0FBRyxvQkFBbkI7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyw0QkFBM0I7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRywwQkFBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40MjYxYjhjM2IxMDcyYzhkYzk0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVFlQRSBmcm9tIFwiLi4vY29udGFudHMvcHJvZHVjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzID0gKG9mZnNldCwgcGFnZSkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9QUk9EVUNUUyxcclxuICBvZmZzZXQsXHJcbiAgcGFnZSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0c1N1Y2Nlc3MgPSAoZGF0YSwgdG90YWwpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfUFJPRFVDVFNfU1VDQ0VTUyxcclxuICBkYXRhOiBkYXRhLFxyXG4gIHRvdGFsOiB0b3RhbCxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0c0Vycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfUFJPRFVDVFNfRVJST1IsXHJcbiAgZXJyTWVzcyxcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RPcmRlciA9IChwYXlsb2FkKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuUE9TVF9PUkRFUixcclxuICBwYXlsb2FkLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHBvc3RPcmRlclN1Y2Nlc3MgPSAoZGF0YSwgdG90YWwpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5QT1NUX09SREVSX1NVQ0NFU1MsXHJcbiAgZGF0YTogZGF0YSxcclxuICB0b3RhbDogdG90YWwsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgcG9zdE9yZGVyRXJyb3IgPSAoZXJyTWVzcykgPT4gKHtcclxuICB0eXBlOiBUWVBFLlBPU1RfT1JERVJfRVJST1IsXHJcbiAgZXJyTWVzcyxcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4vL1NlbGxpbmc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZWxsaW5nUHJvZHVjdHMgPSAob2Zmc2V0LCBwYWdlKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX1NFTExJTkdfUFJPRFVDVFMsXHJcbiAgb2Zmc2V0LFxyXG4gIHBhZ2UsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0U2VsbGluZ1Byb2R1Y3RzU3VjY2VzcyA9IChkYXRhLCB0b3RhbCkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9TRUxMSU5HX1BST0RVQ1RTX1NVQ0NFU1MsXHJcbiAgZGF0YTogZGF0YSxcclxuICB0b3RhbDogdG90YWwsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0U2VsbGluZ1Byb2R1Y3RzRXJyb3IgPSAoZXJyTWVzcykgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9TRUxMSU5HX1BST0RVQ1RTX0VSUk9SLFxyXG4gIGVyck1lc3MsXHJcbn0pO1xyXG5cclxuLy9Ib3Q9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRIb3RQcm9kdWN0cyA9IChvZmZzZXQsIHBhZ2UpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfSE9UX1BST0RVQ1RTLFxyXG4gIG9mZnNldCxcclxuICBwYWdlLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldEhvdFByb2R1Y3RzU3VjY2VzcyA9IChkYXRhLCB0b3RhbCkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9IT1RfUFJPRFVDVFNfU1VDQ0VTUyxcclxuICBkYXRhOiBkYXRhLFxyXG4gIHRvdGFsOiB0b3RhbCxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRIb3RQcm9kdWN0c0Vycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfSE9UX1BST0RVQ1RTX0VSUk9SLFxyXG4gIGVyck1lc3MsXHJcbn0pO1xyXG5cclxuIiwiZXhwb3J0IGNvbnN0IEdFVF9QUk9EVUNUUyA9IFwiUFJPRFVDVC9HRVRfUFJPRFVDVFwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RTX1NVQ0NFU1MgPSBcIlBST0RVQ1QvR0VUX1BST0RVQ1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RTX0VSUk9SID0gXCJQUk9EVUNUL0dFVF9QUk9EVUNUX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1NFTExJTkdfUFJPRFVDVFMgPSBcIlBST0RVQ1QvR0VUX1NFTExJTkdfUFJPRFVDVFNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9TRUxMSU5HX1BST0RVQ1RTX1NVQ0NFU1MgPSBcIlBST0RVQ1QvR0VUX1NFTExJTkdfUFJPRFVDVFNfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX1NFTExJTkdfUFJPRFVDVFNfRVJST1IgPSBcIlBST0RVQ1QvR0VUX1NFTExJTkdfUFJPRFVDVFNfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfSE9UX1BST0RVQ1RTID0gXCJQUk9EVUNUL0dFVF9IT1RfUFJPRFVDVFNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9IT1RfUFJPRFVDVFNfU1VDQ0VTUyA9IFwiUFJPRFVDVC9HRVRfSE9UX1BST0RVQ1RTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9IT1RfUFJPRFVDVFNfRVJST1IgPSBcIlBST0RVQ1QvR0VUX0hPVF9QUk9EVUNUU19FUlJPUlwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQT1NUX09SREVSID0gXCJQUk9EVUNUL1BPU1RfT1JERVJcIjtcclxuZXhwb3J0IGNvbnN0IFBPU1RfT1JERVJfU1VDQ0VTUyA9IFwiUFJPRFVDVC9QT1NUX09SREVSX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFBPU1RfT1JERVJfRVJST1IgPSBcIlBST0RVQ1QvUE9TVF9PUkRFUl9FUlJPUlwiOyJdLCJzb3VyY2VSb290IjoiIn0=