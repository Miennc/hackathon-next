module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/article.js":
/*!********************************!*\
  !*** ./src/actions/article.js ***!
  \********************************/
/*! exports provided: getArticle, getArticleSuccess, getArticleError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticle", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticleSuccess", function() { return getArticleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticleError", function() { return getArticleError; });
/* harmony import */ var _contants_article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contants/article */ "./src/contants/article.js");

const getArticle = (offset, page) => ({
  type: _contants_article__WEBPACK_IMPORTED_MODULE_0__["GET_ARTICLE"],
  offset,
  page
});
const getArticleSuccess = (data, total) => ({
  type: _contants_article__WEBPACK_IMPORTED_MODULE_0__["GET_ARTICLE_SUCCESS"],
  data: data,
  total: total
});
const getArticleError = errMess => ({
  type: _contants_article__WEBPACK_IMPORTED_MODULE_0__["GET_ARTICLE_ERROR"],
  errMess
});

/***/ }),

/***/ "./src/actions/category.js":
/*!*********************************!*\
  !*** ./src/actions/category.js ***!
  \*********************************/
/*! exports provided: getCategory, getCategorySuccess, getCategoryError, getFilterCategory, getFilterCategorySuccess, getFilterCategoryError, getFilter, getFilterSuccess, getFilterError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategory", function() { return getCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategorySuccess", function() { return getCategorySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategoryError", function() { return getCategoryError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterCategory", function() { return getFilterCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterCategorySuccess", function() { return getFilterCategorySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterCategoryError", function() { return getFilterCategoryError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilter", function() { return getFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterSuccess", function() { return getFilterSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterError", function() { return getFilterError; });
/* harmony import */ var _contants_category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contants/category */ "./src/contants/category.js");

const getCategory = (offset, page) => ({
  type: _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORY"],
  offset,
  page
});
const getCategorySuccess = (data, total) => ({
  type: _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORY_SUCCESS"],
  data: data,
  total: total
});
const getCategoryError = errMess => ({
  type: _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORY_ERROR"],
  errMess
}); //filter cat parent ==============================

const getFilterCategory = idCat => ({
  type: _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_FILTER_CATEGORY"],
  idCat: idCat
});
const getFilterCategorySuccess = (data, total) => ({
  type: _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_FILTER_CATEGORY_SUCCESS"],
  data: data,
  total: total
});
const getFilterCategoryError = errMess => ({
  type: _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_FILTER_CATEGORY_ERROR"],
  errMess
}); //filter cat child ==============================

const getFilter = (offset, page) => ({
  type: _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_FILTER"],
  offset,
  page
});
const getFilterSuccess = (data, total) => ({
  type: _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_FILTER_SUCCESS"],
  data: data,
  total: total
});
const getFilterError = errMess => ({
  type: _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_FILTER_ERROR"],
  errMess
});

/***/ }),

/***/ "./src/actions/product.js":
/*!********************************!*\
  !*** ./src/actions/product.js ***!
  \********************************/
/*! exports provided: getProducts, getProductsSuccess, getProductsError, postOrder, postOrderSuccess, postOrderError, getSellingProducts, getSellingProductsSuccess, getSellingProductsError, getHotProducts, getHotProductsSuccess, getHotProductsError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
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

const getProducts = (offset, page) => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCTS"],
  offset,
  page
});
const getProductsSuccess = (data, total) => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCTS_SUCCESS"],
  data: data,
  total: total
});
const getProductsError = errMess => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCTS_ERROR"],
  errMess
});
const postOrder = payload => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["POST_ORDER"],
  payload
});
const postOrderSuccess = (data, total) => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["POST_ORDER_SUCCESS"],
  data: data,
  total: total
});
const postOrderError = errMess => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["POST_ORDER_ERROR"],
  errMess
}); //Selling===============================================================

const getSellingProducts = (offset, page) => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SELLING_PRODUCTS"],
  offset,
  page
});
const getSellingProductsSuccess = (data, total) => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SELLING_PRODUCTS_SUCCESS"],
  data: data,
  total: total
});
const getSellingProductsError = errMess => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SELLING_PRODUCTS_ERROR"],
  errMess
}); //Hot===============================================================

const getHotProducts = (offset, page) => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOT_PRODUCTS"],
  offset,
  page
});
const getHotProductsSuccess = (data, total) => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOT_PRODUCTS_SUCCESS"],
  data: data,
  total: total
});
const getHotProductsError = errMess => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOT_PRODUCTS_ERROR"],
  errMess
});

/***/ }),

/***/ "./src/actions/slide.js":
/*!******************************!*\
  !*** ./src/actions/slide.js ***!
  \******************************/
/*! exports provided: getSlide, getSlideSuccess, getSlideError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlide", function() { return getSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlideSuccess", function() { return getSlideSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlideError", function() { return getSlideError; });
/* harmony import */ var _contants_slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contants/slide */ "./src/contants/slide.js");

const getSlide = (offset, page) => ({
  type: _contants_slide__WEBPACK_IMPORTED_MODULE_0__["GET_SLIDE"],
  offset,
  page
});
const getSlideSuccess = (data, total) => ({
  type: _contants_slide__WEBPACK_IMPORTED_MODULE_0__["GET_SLIDE_SUCCESS"],
  data: data,
  total: total
});
const getSlideError = errMess => ({
  type: _contants_slide__WEBPACK_IMPORTED_MODULE_0__["GET_SLIDE_ERROR"],
  errMess
});

/***/ }),

/***/ "./src/contants/article.js":
/*!*********************************!*\
  !*** ./src/contants/article.js ***!
  \*********************************/
/*! exports provided: GET_ARTICLE, GET_ARTICLE_SUCCESS, GET_ARTICLE_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ARTICLE", function() { return GET_ARTICLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ARTICLE_SUCCESS", function() { return GET_ARTICLE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ARTICLE_ERROR", function() { return GET_ARTICLE_ERROR; });
const GET_ARTICLE = "CATEGORY/GET_ARTICLE";
const GET_ARTICLE_SUCCESS = "CATEGORY/GET_ARTICLE_SUCCESS";
const GET_ARTICLE_ERROR = "CATEGORY/GET_ARTICLE_ERROR";

/***/ }),

/***/ "./src/contants/category.js":
/*!**********************************!*\
  !*** ./src/contants/category.js ***!
  \**********************************/
/*! exports provided: GET_CATEGORY, GET_CATEGORY_SUCCESS, GET_CATEGORY_ERROR, GET_FILTER_CATEGORY, GET_FILTER_CATEGORY_SUCCESS, GET_FILTER_CATEGORY_ERROR, GET_FILTER, GET_FILTER_SUCCESS, GET_FILTER_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORY", function() { return GET_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORY_SUCCESS", function() { return GET_CATEGORY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORY_ERROR", function() { return GET_CATEGORY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FILTER_CATEGORY", function() { return GET_FILTER_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FILTER_CATEGORY_SUCCESS", function() { return GET_FILTER_CATEGORY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FILTER_CATEGORY_ERROR", function() { return GET_FILTER_CATEGORY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FILTER", function() { return GET_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FILTER_SUCCESS", function() { return GET_FILTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FILTER_ERROR", function() { return GET_FILTER_ERROR; });
const GET_CATEGORY = "CATEGORY/GET_CATEGORY";
const GET_CATEGORY_SUCCESS = "CATEGORY/GET_CATEGORY_SUCCESS";
const GET_CATEGORY_ERROR = "CATEGORY/GET_CATEGORY_ERROR";
const GET_FILTER_CATEGORY = "CATEGORY/GET_FILTER_CATEGORY";
const GET_FILTER_CATEGORY_SUCCESS = "CATEGORY/GET_FILTER_CATEGORY_SUCCESS";
const GET_FILTER_CATEGORY_ERROR = "CATEGORY/GET_FILTER_CATEGORY_ERROR";
const GET_FILTER = "CATEGORY/GET_FILTER";
const GET_FILTER_SUCCESS = "CATEGORY/GET_FILTER_SUCCESS";
const GET_FILTER_ERROR = "CATEGORY/GET_FILTER_ERROR";

/***/ }),

/***/ "./src/contants/product.js":
/*!*********************************!*\
  !*** ./src/contants/product.js ***!
  \*********************************/
/*! exports provided: GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, GET_SELLING_PRODUCTS, GET_SELLING_PRODUCTS_SUCCESS, GET_SELLING_PRODUCTS_ERROR, GET_HOT_PRODUCTS, GET_HOT_PRODUCTS_SUCCESS, GET_HOT_PRODUCTS_ERROR, POST_ORDER, POST_ORDER_SUCCESS, POST_ORDER_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCTS", function() { return GET_PRODUCTS; });
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
const GET_PRODUCTS = "PRODUCT/GET_PRODUCT";
const GET_PRODUCTS_SUCCESS = "PRODUCT/GET_PRODUCT_SUCCESS";
const GET_PRODUCTS_ERROR = "PRODUCT/GET_PRODUCT_ERROR";
const GET_SELLING_PRODUCTS = "PRODUCT/GET_SELLING_PRODUCTS";
const GET_SELLING_PRODUCTS_SUCCESS = "PRODUCT/GET_SELLING_PRODUCTS_SUCCESS";
const GET_SELLING_PRODUCTS_ERROR = "PRODUCT/GET_SELLING_PRODUCTS_ERROR";
const GET_HOT_PRODUCTS = "PRODUCT/GET_HOT_PRODUCTS";
const GET_HOT_PRODUCTS_SUCCESS = "PRODUCT/GET_HOT_PRODUCTS_SUCCESS";
const GET_HOT_PRODUCTS_ERROR = "PRODUCT/GET_HOT_PRODUCTS_ERROR";
const POST_ORDER = "PRODUCT/POST_ORDER";
const POST_ORDER_SUCCESS = "PRODUCT/POST_ORDER_SUCCESS";
const POST_ORDER_ERROR = "PRODUCT/POST_ORDER_ERROR";

/***/ }),

/***/ "./src/contants/slide.js":
/*!*******************************!*\
  !*** ./src/contants/slide.js ***!
  \*******************************/
/*! exports provided: GET_SLIDE, GET_SLIDE_SUCCESS, GET_SLIDE_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SLIDE", function() { return GET_SLIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SLIDE_SUCCESS", function() { return GET_SLIDE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SLIDE_ERROR", function() { return GET_SLIDE_ERROR; });
const GET_SLIDE = "CATEGORY/GET_SLIDE";
const GET_SLIDE_SUCCESS = "CATEGORY/GET_SLIDE_SUCCESS";
const GET_SLIDE_ERROR = "CATEGORY/GET_SLIDE_ERROR";

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./src/store.js");


var _jsxFileName = "C:\\Users\\MienNC\\Desktop\\NextJs\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

MyApp.getInitialProps = async ({
  Component,
  ctx
}) => {
  const pageProps = _objectSpread({}, Component.getInitialProps ? await Component.getInitialProps(ctx) : {});

  if (ctx.req) {
    ctx.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_3__["END"]);
    await ctx.store.sagaTask.toPromise();
  }

  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = (_store__WEBPACK_IMPORTED_MODULE_5__["wrapper"].withRedux(MyApp));

/***/ }),

/***/ "./src/reducers/article.js":
/*!*********************************!*\
  !*** ./src/reducers/article.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contants_article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contants/article */ "./src/contants/article.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/cloneDeep */ "lodash/cloneDeep");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  article: {
    loading: false,
    data: [],
    errMess: null
  }
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(action.payload.article));

    case _contants_article__WEBPACK_IMPORTED_MODULE_0__["GET_ARTICLE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        article: _objectSpread(_objectSpread({}, state.article), {}, {
          loading: true
        })
      });

    case _contants_article__WEBPACK_IMPORTED_MODULE_0__["GET_ARTICLE_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        article: _objectSpread(_objectSpread({}, state.article), {}, {
          loading: false,
          data: action.data,
          total: action.total
        })
      });

    case _contants_article__WEBPACK_IMPORTED_MODULE_0__["GET_ARTICLE_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        article: _objectSpread(_objectSpread({}, state.article), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (articleReducer);

/***/ }),

/***/ "./src/reducers/category.js":
/*!**********************************!*\
  !*** ./src/reducers/category.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contants_category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contants/category */ "./src/contants/category.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/cloneDeep */ "lodash/cloneDeep");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  category: {
    loading: false,
    data: [],
    errMess: null
  },
  categoryFilter: {
    loading: false,
    data: [],
    errMess: null
  },
  filter: {
    loading: false,
    data: [],
    errMess: null
  }
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(action.payload.category));

    case _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORY"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        category: _objectSpread(_objectSpread({}, state.category), {}, {
          loading: true
        })
      });

    case _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORY_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        category: _objectSpread(_objectSpread({}, state.category), {}, {
          loading: false,
          data: action.data,
          total: action.total
        })
      });

    case _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORY_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        category: _objectSpread(_objectSpread({}, state.category), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    case _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_FILTER_CATEGORY"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        categoryFilter: _objectSpread(_objectSpread({}, state.categoryFilter), {}, {
          loading: true
        })
      });

    case _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_FILTER_CATEGORY_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        categoryFilter: _objectSpread(_objectSpread({}, state.categoryFilter), {}, {
          loading: false,
          data: action.data,
          total: action.total
        })
      });

    case _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_FILTER_CATEGORY_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        categoryFilter: _objectSpread(_objectSpread({}, state.categoryFilter), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    case _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_FILTER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        filter: _objectSpread(_objectSpread({}, state.filter), {}, {
          loading: true
        })
      });

    case _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_FILTER_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        filter: _objectSpread(_objectSpread({}, state.filter), {}, {
          loading: false,
          data: action.data,
          total: action.total
        })
      });

    case _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_FILTER_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        filter: _objectSpread(_objectSpread({}, state.filter), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (categoryReducer);

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product */ "./src/reducers/product.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category */ "./src/reducers/category.js");
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slide */ "./src/reducers/slide.js");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article */ "./src/reducers/article.js");





const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  product: _product__WEBPACK_IMPORTED_MODULE_1__["default"],
  category: _category__WEBPACK_IMPORTED_MODULE_2__["default"],
  slide: _slide__WEBPACK_IMPORTED_MODULE_3__["default"],
  article: _article__WEBPACK_IMPORTED_MODULE_4__["default"],
  productDetails: _product__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/reducers/product.js":
/*!*********************************!*\
  !*** ./src/reducers/product.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contants_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contants/product */ "./src/contants/product.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/cloneDeep */ "lodash/cloneDeep");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  product: {
    loading: false,
    data: [],
    total: 0,
    errMess: null
  },
  productSelling: {
    loading: false,
    data: [],
    errMess: null
  },
  productHot: {
    loading: false,
    data: [],
    errMess: null
  }
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(action.payload.product));

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCTS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        product: _objectSpread(_objectSpread({}, state.product), {}, {
          loading: true
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCTS_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        product: _objectSpread(_objectSpread({}, state.product), {}, {
          loading: false,
          data: action.data,
          total: action.total
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCTS_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        product: _objectSpread(_objectSpread({}, state.product), {}, {
          loading: false,
          errMess: action.errMess
        })
      });
    //   case TYPE.GET_DETAIL:
    //     return {
    //         ...state,
    //         productDetail: {
    //             ...state.productDetail,
    //             loading: true,
    //         },
    //     };
    // case TYPE.GET_DETAIL_SUCCESS:
    //     return {
    //         ...state,
    //         productDetail: {
    //             ...state.productDetail,
    //             loading: false,
    //             data: action.data,
    //         },
    //     };
    // case TYPE.GET_DETAIL_ERROR:
    //     return {
    //         ...state,
    //         productDetail: {
    //             ...state.productDetail,
    //             loading: false,
    //             errMess: action.errMess,
    //         },
    //     };

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SELLING_PRODUCTS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productSelling: _objectSpread(_objectSpread({}, state.productSelling), {}, {
          loading: true
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SELLING_PRODUCTS_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productSelling: _objectSpread(_objectSpread({}, state.productSelling), {}, {
          loading: false,
          data: action.data,
          total: action.total
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SELLING_PRODUCTS_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productSelling: _objectSpread(_objectSpread({}, state.productSelling), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOT_PRODUCTS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productHot: _objectSpread(_objectSpread({}, state.productHot), {}, {
          loading: true
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOT_PRODUCTS_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productHot: _objectSpread(_objectSpread({}, state.productHot), {}, {
          loading: false,
          data: action.data,
          total: action.total
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOT_PRODUCTS_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productHot: _objectSpread(_objectSpread({}, state.productHot), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (productReducer);

/***/ }),

/***/ "./src/reducers/slide.js":
/*!*******************************!*\
  !*** ./src/reducers/slide.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contants_slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contants/slide */ "./src/contants/slide.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/cloneDeep */ "lodash/cloneDeep");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  slide: {
    loading: false,
    data: [],
    errMess: null
  }
};

const slideReducer = (state = initialState, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(action.payload.slide));

    case _contants_slide__WEBPACK_IMPORTED_MODULE_0__["GET_SLIDE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        slide: _objectSpread(_objectSpread({}, state.slide), {}, {
          loading: true
        })
      });

    case _contants_slide__WEBPACK_IMPORTED_MODULE_0__["GET_SLIDE_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        slide: _objectSpread(_objectSpread({}, state.slide), {}, {
          loading: false,
          data: action.data,
          total: action.total
        })
      });

    case _contants_slide__WEBPACK_IMPORTED_MODULE_0__["GET_SLIDE_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        slide: _objectSpread(_objectSpread({}, state.slide), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (slideReducer);

/***/ }),

/***/ "./src/sagas/article.js":
/*!******************************!*\
  !*** ./src/sagas/article.js ***!
  \******************************/
/*! exports provided: getArticle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticle", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlideSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.js");
/* harmony import */ var _actions_article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/article */ "./src/actions/article.js");
/* harmony import */ var _contants_article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contants/article */ "./src/contants/article.js");




function* getArticle(action) {
  const url = `api/articles/get?active=1&id_website=4`;

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"], url);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_article__WEBPACK_IMPORTED_MODULE_2__["getArticleSuccess"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_article__WEBPACK_IMPORTED_MODULE_2__["getArticleError"])(error.message));
  }
}
function* SlideSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contants_article__WEBPACK_IMPORTED_MODULE_3__["GET_ARTICLE"], getArticle)]);
}

/***/ }),

/***/ "./src/sagas/category.js":
/*!*******************************!*\
  !*** ./src/sagas/category.js ***!
  \*******************************/
/*! exports provided: getCategory, getFilterCategory, getFilter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategory", function() { return getCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterCategory", function() { return getFilterCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilter", function() { return getFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CategorySaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.js");
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/category */ "./src/actions/category.js");
/* harmony import */ var _contants_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contants/category */ "./src/contants/category.js");




function* getCategory(action) {
  const url = `api/categories/get?id_website=4&active=1`;

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"], url);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_category__WEBPACK_IMPORTED_MODULE_2__["getCategorySuccess"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_category__WEBPACK_IMPORTED_MODULE_2__["getCategoryError"])(error.message));
  }
}
function* getFilterCategory(action) {
  const url = `api/filters/get?active=1$&id_cat=${action.idCat}&page=1&id_website=4&id_parent=0`;

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"], url);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_category__WEBPACK_IMPORTED_MODULE_2__["getFilterCategorySuccess"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_category__WEBPACK_IMPORTED_MODULE_2__["getFilterCategoryError"])(error.message));
  }
}
function* getFilter(action) {
  const url = `api/filters/get?active=1&id_cat=${action.offset.id}&page=1&id_website=4&id_parent=${action.offset.id_parent ? action.offset.id_parent : 0}`;

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"], url);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_category__WEBPACK_IMPORTED_MODULE_2__["getFilterSuccess"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_category__WEBPACK_IMPORTED_MODULE_2__["getFilterError"])(error.message));
  }
}
function* CategorySaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contants_category__WEBPACK_IMPORTED_MODULE_3__["GET_CATEGORY"], getCategory), yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contants_category__WEBPACK_IMPORTED_MODULE_3__["GET_FILTER_CATEGORY"], getFilterCategory), yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contants_category__WEBPACK_IMPORTED_MODULE_3__["GET_FILTER"], getFilter)]);
}

/***/ }),

/***/ "./src/sagas/index.js":
/*!****************************!*\
  !*** ./src/sagas/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product */ "./src/sagas/product.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category */ "./src/sagas/category.js");
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slide */ "./src/sagas/slide.js");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article */ "./src/sagas/article.js");





function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_product__WEBPACK_IMPORTED_MODULE_1__["default"])(), Object(_slide__WEBPACK_IMPORTED_MODULE_3__["default"])(), Object(_category__WEBPACK_IMPORTED_MODULE_2__["default"])(), Object(_article__WEBPACK_IMPORTED_MODULE_4__["default"])()]);
}

/***/ }),

/***/ "./src/sagas/product.js":
/*!******************************!*\
  !*** ./src/sagas/product.js ***!
  \******************************/
/*! exports provided: getProducts, postOrder, getSellingProducts, getHotProducts, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postOrder", function() { return postOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSellingProducts", function() { return getSellingProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHotProducts", function() { return getHotProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.js");
/* harmony import */ var _actions_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/product */ "./src/actions/product.js");
/* harmony import */ var _contants_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contants/product */ "./src/contants/product.js");




function* getProducts(action) {
  var _action$offset, _action$offset2, _action$offset3, _action$offset4;

  const url = `api/products/get?active=1&id_website=4&id_cat=${(_action$offset = action.offset) !== null && _action$offset !== void 0 && _action$offset.id_cart ? (_action$offset2 = action.offset) === null || _action$offset2 === void 0 ? void 0 : _action$offset2.id_cart : ''}&id_filter=${(_action$offset3 = action.offset) !== null && _action$offset3 !== void 0 && _action$offset3.id_filter ? (_action$offset4 = action.offset) === null || _action$offset4 === void 0 ? void 0 : _action$offset4.id_filter : ''}`;

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"], url);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["getProductsSuccess"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["getProductsError"])(error.message));
  }
}
function* postOrder(payload) {
  const url = `api/orders/add-from-react?id_website=4`;

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"], url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text-plain, */*",
        "X-Requested-With": "XMLHttpRequest"
      },
      credentials: "same-origin",
      body: JSON.stringify(payload.payload)
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["postOrderSuccess"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["postOrderError"])(error.message));
  }
}
function* getSellingProducts(action) {
  const url = `api/products/get?active=1&id_website=4&feature=1`;

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"], url);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["getSellingProductsSuccess"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["getSellingProductsError"])(error.message));
  }
}
function* getHotProducts(action) {
  const url = `api/products/get?active=1&id_website=4&highlight=1&offset=6`;

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"], url);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["getHotProductsSuccess"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["getHotProductsError"])(error.message));
  }
}
function* ProductSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contants_product__WEBPACK_IMPORTED_MODULE_3__["GET_PRODUCTS"], getProducts), yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contants_product__WEBPACK_IMPORTED_MODULE_3__["GET_SELLING_PRODUCTS"], getSellingProducts), yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contants_product__WEBPACK_IMPORTED_MODULE_3__["GET_HOT_PRODUCTS"], getHotProducts), // yield takeLatest(GET_DETAIL, getDetail),
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contants_product__WEBPACK_IMPORTED_MODULE_3__["POST_ORDER"], postOrder)]);
}

/***/ }),

/***/ "./src/sagas/slide.js":
/*!****************************!*\
  !*** ./src/sagas/slide.js ***!
  \****************************/
/*! exports provided: getSlide, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlide", function() { return getSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlideSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.js");
/* harmony import */ var _actions_slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/slide */ "./src/actions/slide.js");
/* harmony import */ var _contants_slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contants/slide */ "./src/contants/slide.js");




function* getSlide(action) {
  const url = `api/banners/get?active=1&id_website=4&&page_type=${action.offset.page_type}`;

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"], url);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_slide__WEBPACK_IMPORTED_MODULE_2__["getSlideSuccess"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_slide__WEBPACK_IMPORTED_MODULE_2__["getSlideError"])(error.message));
  }
}
function* SlideSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contants_slide__WEBPACK_IMPORTED_MODULE_3__["GET_SLIDE"], getSlide)]);
}

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: makeStore, wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStore", function() { return makeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sagas */ "./src/sagas/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");






const makeStore = context => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_2___default()();
  const middleware = [sagaMiddleware];
  middleware.push(redux_logger__WEBPACK_IMPORTED_MODULE_3___default.a);
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_5__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__["default"]);
  return store;
};
const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["createWrapper"])(makeStore, {
  debug: true
});

/***/ }),

/***/ "./src/utils/request.js":
/*!******************************!*\
  !*** ./src/utils/request.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return request; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

__webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");

async function parseJSON(response) {
  const data = await response.json();

  if (response.status >= 400) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
}

const isNode = true;
const nodeOptions = !isNode ? {} : {
  agent: new (__webpack_require__(/*! https */ "https").Agent)({
    rejectUnauthorized: false
  }),
  headers: {
    "Content-Type": "application/json",
    Cookie: global.cookie
  }
};
function request(path, options = {}) {
  const url = `${"http://192.168.1.28:80"}/${path}`;
  return fetch(url, _objectSpread(_objectSpread({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  }, nodeOptions), options)).then(parseJSON);
}

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "lodash/cloneDeep":
/*!***********************************!*\
  !*** external "lodash/cloneDeep" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3NsaWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YW50cy9hcnRpY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YW50cy9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFudHMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFudHMvc2xpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2FydGljbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2NhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvc2xpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL2FydGljbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL2NhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvc2xpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9yZXF1ZXN0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaC9jbG9uZURlZXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbImdldEFydGljbGUiLCJvZmZzZXQiLCJwYWdlIiwidHlwZSIsIlRZUEUiLCJnZXRBcnRpY2xlU3VjY2VzcyIsImRhdGEiLCJ0b3RhbCIsImdldEFydGljbGVFcnJvciIsImVyck1lc3MiLCJnZXRDYXRlZ29yeSIsImdldENhdGVnb3J5U3VjY2VzcyIsImdldENhdGVnb3J5RXJyb3IiLCJnZXRGaWx0ZXJDYXRlZ29yeSIsImlkQ2F0IiwiZ2V0RmlsdGVyQ2F0ZWdvcnlTdWNjZXNzIiwiZ2V0RmlsdGVyQ2F0ZWdvcnlFcnJvciIsImdldEZpbHRlciIsImdldEZpbHRlclN1Y2Nlc3MiLCJnZXRGaWx0ZXJFcnJvciIsImdldFByb2R1Y3RzIiwiZ2V0UHJvZHVjdHNTdWNjZXNzIiwiZ2V0UHJvZHVjdHNFcnJvciIsInBvc3RPcmRlciIsInBheWxvYWQiLCJwb3N0T3JkZXJTdWNjZXNzIiwicG9zdE9yZGVyRXJyb3IiLCJnZXRTZWxsaW5nUHJvZHVjdHMiLCJnZXRTZWxsaW5nUHJvZHVjdHNTdWNjZXNzIiwiZ2V0U2VsbGluZ1Byb2R1Y3RzRXJyb3IiLCJnZXRIb3RQcm9kdWN0cyIsImdldEhvdFByb2R1Y3RzU3VjY2VzcyIsImdldEhvdFByb2R1Y3RzRXJyb3IiLCJnZXRTbGlkZSIsImdldFNsaWRlU3VjY2VzcyIsImdldFNsaWRlRXJyb3IiLCJHRVRfQVJUSUNMRSIsIkdFVF9BUlRJQ0xFX1NVQ0NFU1MiLCJHRVRfQVJUSUNMRV9FUlJPUiIsIkdFVF9DQVRFR09SWSIsIkdFVF9DQVRFR09SWV9TVUNDRVNTIiwiR0VUX0NBVEVHT1JZX0VSUk9SIiwiR0VUX0ZJTFRFUl9DQVRFR09SWSIsIkdFVF9GSUxURVJfQ0FURUdPUllfU1VDQ0VTUyIsIkdFVF9GSUxURVJfQ0FURUdPUllfRVJST1IiLCJHRVRfRklMVEVSIiwiR0VUX0ZJTFRFUl9TVUNDRVNTIiwiR0VUX0ZJTFRFUl9FUlJPUiIsIkdFVF9QUk9EVUNUUyIsIkdFVF9QUk9EVUNUU19TVUNDRVNTIiwiR0VUX1BST0RVQ1RTX0VSUk9SIiwiR0VUX1NFTExJTkdfUFJPRFVDVFMiLCJHRVRfU0VMTElOR19QUk9EVUNUU19TVUNDRVNTIiwiR0VUX1NFTExJTkdfUFJPRFVDVFNfRVJST1IiLCJHRVRfSE9UX1BST0RVQ1RTIiwiR0VUX0hPVF9QUk9EVUNUU19TVUNDRVNTIiwiR0VUX0hPVF9QUk9EVUNUU19FUlJPUiIsIlBPU1RfT1JERVIiLCJQT1NUX09SREVSX1NVQ0NFU1MiLCJQT1NUX09SREVSX0VSUk9SIiwiR0VUX1NMSURFIiwiR0VUX1NMSURFX1NVQ0NFU1MiLCJHRVRfU0xJREVfRVJST1IiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcSIsInN0b3JlIiwiZGlzcGF0Y2giLCJFTkQiLCJzYWdhVGFzayIsInRvUHJvbWlzZSIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJpbml0aWFsU3RhdGUiLCJhcnRpY2xlIiwibG9hZGluZyIsImFydGljbGVSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJIWURSQVRFIiwiY2xvbmVEZWVwIiwiY2F0ZWdvcnkiLCJjYXRlZ29yeUZpbHRlciIsImZpbHRlciIsImNhdGVnb3J5UmVkdWNlciIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwicHJvZHVjdCIsInByb2R1Y3RSZWR1Y2VyIiwic2xpZGUiLCJzbGlkZVJlZHVjZXIiLCJwcm9kdWN0RGV0YWlscyIsInByb2R1Y3RTZWxsaW5nIiwicHJvZHVjdEhvdCIsInVybCIsInJlc3BvbnNlIiwiY2FsbCIsIlJlcXVlc3QiLCJwdXQiLCJlcnJvciIsIm1lc3NhZ2UiLCJTbGlkZVNhZ2EiLCJhbGwiLCJ0YWtlTGF0ZXN0IiwiaWQiLCJpZF9wYXJlbnQiLCJDYXRlZ29yeVNhZ2EiLCJyb290U2FnYSIsIlByb2R1Y3RTYWdhIiwiQXJ0aWNsZVNhZ2EiLCJpZF9jYXJ0IiwiaWRfZmlsdGVyIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImNyZWRlbnRpYWxzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYWdlX3R5cGUiLCJtYWtlU3RvcmUiLCJjb250ZXh0Iiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJwdXNoIiwibG9nZ2VyIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJyZXF1aXJlIiwicGFyc2VKU09OIiwianNvbiIsInN0YXR1cyIsIkVycm9yIiwiaXNOb2RlIiwibm9kZU9wdGlvbnMiLCJhZ2VudCIsIkFnZW50IiwicmVqZWN0VW5hdXRob3JpemVkIiwiQ29va2llIiwiZ2xvYmFsIiwiY29va2llIiwicmVxdWVzdCIsInBhdGgiLCJvcHRpb25zIiwicHJvY2VzcyIsImZldGNoIiwidGhlbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVB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T0FBWjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxDQUFDRCxNQUFELEdBQ2hCLEVBRGdCLEdBRWhCO0FBQ0VFLE9BQUssRUFBRSxLQUFLUCxtQkFBTyxDQUFDLG9CQUFELENBQVAsQ0FBaUJRLEtBQXRCLEVBQTZCO0FBQ2xDQyxzQkFBa0IsRUFBRTtBQURjLEdBQTdCLENBRFQ7QUFJRTVCLFNBQU8sRUFBRTtBQUNQLG9CQUFnQixrQkFEVDtBQUVQNkIsVUFBTSxFQUFFQyxNQUFNLENBQUNDO0FBRlI7QUFKWCxDQUZKO0FBWWUsU0FBU0MsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUJDLE9BQU8sR0FBRyxFQUFqQyxFQUFxQztBQUNsRCxRQUFNckQsR0FBRyxHQUFJLEdBQUVzRCx3QkFBb0IsSUFBR0YsSUFBSyxFQUEzQztBQUNBLFNBQU9HLEtBQUssQ0FBQ3ZELEdBQUQ7QUFDVm1CLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUUsa0JBREQ7QUFFUCxzQkFBZ0I7QUFGVCxLQURDO0FBS1ZDLGVBQVcsRUFBRTtBQUxILEtBTVB1QixXQU5PLEdBT1BTLE9BUE8sRUFBTCxDQVFKRyxJQVJJLENBUUNqQixTQVJELENBQVA7QUFTRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNELGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgKiBhcyBUWVBFIGZyb20gXCIuLi9jb250YW50cy9hcnRpY2xlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QXJ0aWNsZSA9IChvZmZzZXQsIHBhZ2UpID0+ICh7XHJcbiAgICB0eXBlOiBUWVBFLkdFVF9BUlRJQ0xFLFxyXG4gICAgb2Zmc2V0LFxyXG4gICAgcGFnZSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRBcnRpY2xlU3VjY2VzcyA9IChkYXRhLCB0b3RhbCkgPT4gKHtcclxuICAgIHR5cGU6IFRZUEUuR0VUX0FSVElDTEVfU1VDQ0VTUyxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICB0b3RhbDogdG90YWwsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0QXJ0aWNsZUVycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgICB0eXBlOiBUWVBFLkdFVF9BUlRJQ0xFX0VSUk9SLFxyXG4gICAgZXJyTWVzcyxcclxufSk7XHJcbiIsImltcG9ydCAqIGFzIFRZUEUgZnJvbSBcIi4uL2NvbnRhbnRzL2NhdGVnb3J5XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2F0ZWdvcnkgPSAob2Zmc2V0LCBwYWdlKSA9PiAoe1xyXG4gICAgdHlwZTogVFlQRS5HRVRfQ0FURUdPUlksXHJcbiAgICBvZmZzZXQsXHJcbiAgICBwYWdlLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldENhdGVnb3J5U3VjY2VzcyA9IChkYXRhLCB0b3RhbCkgPT4gKHtcclxuICAgIHR5cGU6IFRZUEUuR0VUX0NBVEVHT1JZX1NVQ0NFU1MsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgdG90YWw6IHRvdGFsLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldENhdGVnb3J5RXJyb3IgPSAoZXJyTWVzcykgPT4gKHtcclxuICAgIHR5cGU6IFRZUEUuR0VUX0NBVEVHT1JZX0VSUk9SLFxyXG4gICAgZXJyTWVzcyxcclxufSk7XHJcblxyXG4vL2ZpbHRlciBjYXQgcGFyZW50ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZpbHRlckNhdGVnb3J5ID0gKGlkQ2F0KSA9PiAoe1xyXG4gICAgdHlwZTogVFlQRS5HRVRfRklMVEVSX0NBVEVHT1JZLFxyXG4gICAgaWRDYXQ6IGlkQ2F0LFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldEZpbHRlckNhdGVnb3J5U3VjY2VzcyA9IChkYXRhLCB0b3RhbCkgPT4gKHtcclxuICAgIHR5cGU6IFRZUEUuR0VUX0ZJTFRFUl9DQVRFR09SWV9TVUNDRVNTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIHRvdGFsOiB0b3RhbCxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRGaWx0ZXJDYXRlZ29yeUVycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgICB0eXBlOiBUWVBFLkdFVF9GSUxURVJfQ0FURUdPUllfRVJST1IsXHJcbiAgICBlcnJNZXNzLFxyXG59KTtcclxuXHJcbi8vZmlsdGVyIGNhdCBjaGlsZCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNvbnN0IGdldEZpbHRlciA9IChvZmZzZXQsIHBhZ2UpID0+ICh7XHJcbiAgICB0eXBlOiBUWVBFLkdFVF9GSUxURVIsXHJcbiAgICBvZmZzZXQsXHJcbiAgICBwYWdlLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldEZpbHRlclN1Y2Nlc3MgPSAoZGF0YSwgdG90YWwpID0+ICh7XHJcbiAgICB0eXBlOiBUWVBFLkdFVF9GSUxURVJfU1VDQ0VTUyxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICB0b3RhbDogdG90YWwsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0RmlsdGVyRXJyb3IgPSAoZXJyTWVzcykgPT4gKHtcclxuICAgIHR5cGU6IFRZUEUuR0VUX0ZJTFRFUl9FUlJPUixcclxuICAgIGVyck1lc3MsXHJcbn0pOyIsImltcG9ydCAqIGFzIFRZUEUgZnJvbSBcIi4uL2NvbnRhbnRzL3Byb2R1Y3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0cyA9IChvZmZzZXQsIHBhZ2UpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfUFJPRFVDVFMsXHJcbiAgb2Zmc2V0LFxyXG4gIHBhZ2UsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNTdWNjZXNzID0gKGRhdGEsIHRvdGFsKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX1BST0RVQ1RTX1NVQ0NFU1MsXHJcbiAgZGF0YTogZGF0YSxcclxuICB0b3RhbDogdG90YWwsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNFcnJvciA9IChlcnJNZXNzKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX1BST0RVQ1RTX0VSUk9SLFxyXG4gIGVyck1lc3MsXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0T3JkZXIgPSAocGF5bG9hZCkgPT4gKHtcclxuICB0eXBlOiBUWVBFLlBPU1RfT1JERVIsXHJcbiAgcGF5bG9hZCxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBwb3N0T3JkZXJTdWNjZXNzID0gKGRhdGEsIHRvdGFsKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuUE9TVF9PUkRFUl9TVUNDRVNTLFxyXG4gIGRhdGE6IGRhdGEsXHJcbiAgdG90YWw6IHRvdGFsLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHBvc3RPcmRlckVycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5QT1NUX09SREVSX0VSUk9SLFxyXG4gIGVyck1lc3MsXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuLy9TZWxsaW5nPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VsbGluZ1Byb2R1Y3RzID0gKG9mZnNldCwgcGFnZSkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9TRUxMSU5HX1BST0RVQ1RTLFxyXG4gIG9mZnNldCxcclxuICBwYWdlLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFNlbGxpbmdQcm9kdWN0c1N1Y2Nlc3MgPSAoZGF0YSwgdG90YWwpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfU0VMTElOR19QUk9EVUNUU19TVUNDRVNTLFxyXG4gIGRhdGE6IGRhdGEsXHJcbiAgdG90YWw6IHRvdGFsLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFNlbGxpbmdQcm9kdWN0c0Vycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfU0VMTElOR19QUk9EVUNUU19FUlJPUixcclxuICBlcnJNZXNzLFxyXG59KTtcclxuXHJcbi8vSG90PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SG90UHJvZHVjdHMgPSAob2Zmc2V0LCBwYWdlKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0hPVF9QUk9EVUNUUyxcclxuICBvZmZzZXQsXHJcbiAgcGFnZSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRIb3RQcm9kdWN0c1N1Y2Nlc3MgPSAoZGF0YSwgdG90YWwpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfSE9UX1BST0RVQ1RTX1NVQ0NFU1MsXHJcbiAgZGF0YTogZGF0YSxcclxuICB0b3RhbDogdG90YWwsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0SG90UHJvZHVjdHNFcnJvciA9IChlcnJNZXNzKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0hPVF9QUk9EVUNUU19FUlJPUixcclxuICBlcnJNZXNzLFxyXG59KTtcclxuXHJcbiIsImltcG9ydCAqIGFzIFRZUEUgZnJvbSBcIi4uL2NvbnRhbnRzL3NsaWRlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2xpZGUgPSAob2Zmc2V0LCBwYWdlKSA9PiAoe1xyXG4gICAgdHlwZTogVFlQRS5HRVRfU0xJREUsXHJcbiAgICBvZmZzZXQsXHJcbiAgICBwYWdlLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFNsaWRlU3VjY2VzcyA9IChkYXRhLCB0b3RhbCkgPT4gKHtcclxuICAgIHR5cGU6IFRZUEUuR0VUX1NMSURFX1NVQ0NFU1MsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgdG90YWw6IHRvdGFsLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFNsaWRlRXJyb3IgPSAoZXJyTWVzcykgPT4gKHtcclxuICAgIHR5cGU6IFRZUEUuR0VUX1NMSURFX0VSUk9SLFxyXG4gICAgZXJyTWVzcyxcclxufSk7XHJcbiIsImV4cG9ydCBjb25zdCBHRVRfQVJUSUNMRSA9IFwiQ0FURUdPUlkvR0VUX0FSVElDTEVcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9BUlRJQ0xFX1NVQ0NFU1MgPSBcIkNBVEVHT1JZL0dFVF9BUlRJQ0xFX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9BUlRJQ0xFX0VSUk9SID0gXCJDQVRFR09SWS9HRVRfQVJUSUNMRV9FUlJPUlwiOyIsImV4cG9ydCBjb25zdCBHRVRfQ0FURUdPUlkgPSBcIkNBVEVHT1JZL0dFVF9DQVRFR09SWVwiO1xyXG5leHBvcnQgY29uc3QgR0VUX0NBVEVHT1JZX1NVQ0NFU1MgPSBcIkNBVEVHT1JZL0dFVF9DQVRFR09SWV9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ0FURUdPUllfRVJST1IgPSBcIkNBVEVHT1JZL0dFVF9DQVRFR09SWV9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9GSUxURVJfQ0FURUdPUlkgPSBcIkNBVEVHT1JZL0dFVF9GSUxURVJfQ0FURUdPUllcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9GSUxURVJfQ0FURUdPUllfU1VDQ0VTUyA9IFwiQ0FURUdPUlkvR0VUX0ZJTFRFUl9DQVRFR09SWV9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRklMVEVSX0NBVEVHT1JZX0VSUk9SID0gXCJDQVRFR09SWS9HRVRfRklMVEVSX0NBVEVHT1JZX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0ZJTFRFUiA9IFwiQ0FURUdPUlkvR0VUX0ZJTFRFUlwiO1xyXG5leHBvcnQgY29uc3QgR0VUX0ZJTFRFUl9TVUNDRVNTID0gXCJDQVRFR09SWS9HRVRfRklMVEVSX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9GSUxURVJfRVJST1IgPSBcIkNBVEVHT1JZL0dFVF9GSUxURVJfRVJST1JcIjsiLCJleHBvcnQgY29uc3QgR0VUX1BST0RVQ1RTID0gXCJQUk9EVUNUL0dFVF9QUk9EVUNUXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVFNfU1VDQ0VTUyA9IFwiUFJPRFVDVC9HRVRfUFJPRFVDVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVFNfRVJST1IgPSBcIlBST0RVQ1QvR0VUX1BST0RVQ1RfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfU0VMTElOR19QUk9EVUNUUyA9IFwiUFJPRFVDVC9HRVRfU0VMTElOR19QUk9EVUNUU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX1NFTExJTkdfUFJPRFVDVFNfU1VDQ0VTUyA9IFwiUFJPRFVDVC9HRVRfU0VMTElOR19QUk9EVUNUU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfU0VMTElOR19QUk9EVUNUU19FUlJPUiA9IFwiUFJPRFVDVC9HRVRfU0VMTElOR19QUk9EVUNUU19FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9IT1RfUFJPRFVDVFMgPSBcIlBST0RVQ1QvR0VUX0hPVF9QUk9EVUNUU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0hPVF9QUk9EVUNUU19TVUNDRVNTID0gXCJQUk9EVUNUL0dFVF9IT1RfUFJPRFVDVFNfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0hPVF9QUk9EVUNUU19FUlJPUiA9IFwiUFJPRFVDVC9HRVRfSE9UX1BST0RVQ1RTX0VSUk9SXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFBPU1RfT1JERVIgPSBcIlBST0RVQ1QvUE9TVF9PUkRFUlwiO1xyXG5leHBvcnQgY29uc3QgUE9TVF9PUkRFUl9TVUNDRVNTID0gXCJQUk9EVUNUL1BPU1RfT1JERVJfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUE9TVF9PUkRFUl9FUlJPUiA9IFwiUFJPRFVDVC9QT1NUX09SREVSX0VSUk9SXCI7IiwiZXhwb3J0IGNvbnN0IEdFVF9TTElERSA9IFwiQ0FURUdPUlkvR0VUX1NMSURFXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfU0xJREVfU1VDQ0VTUyA9IFwiQ0FURUdPUlkvR0VUX1NMSURFX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9TTElERV9FUlJPUiA9IFwiQ0FURUdPUlkvR0VUX1NMSURFX0VSUk9SXCI7IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5cclxuaW1wb3J0IHtFTkR9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7d3JhcHBlcn0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5jb25zdCBNeUFwcCA9ICh7Q29tcG9uZW50LCBwYWdlUHJvcHN9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidXNlci1zY2FsYWJsZT1ubywgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHtDb21wb25lbnQsIGN0eH0pID0+IHtcclxuICAgIGNvbnN0IHBhZ2VQcm9wcyA9IHtcclxuICAgICAgICAuLi4oQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA/IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KSA6IHt9KSxcclxuICAgIH07XHJcbiAgICBpZiAoY3R4LnJlcSkge1xyXG4gICAgICAgIGN0eC5zdG9yZS5kaXNwYXRjaChFTkQpO1xyXG4gICAgICAgIGF3YWl0IGN0eC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7cGFnZVByb3BzfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKTtcclxuIiwiaW1wb3J0ICogYXMgVFlQRSBmcm9tIFwiLi4vY29udGFudHMvYXJ0aWNsZVwiO1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gXCJsb2Rhc2gvY2xvbmVEZWVwXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBhcnRpY2xlOiB7XHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgZXJyTWVzczogbnVsbCxcclxuICAgIH0sXHJcbn07XHJcblxyXG5jb25zdCBhcnRpY2xlUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uY2xvbmVEZWVwKGFjdGlvbi5wYXlsb2FkLmFydGljbGUpIH07XHJcblxyXG4gICAgICAgIGNhc2UgVFlQRS5HRVRfQVJUSUNMRTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFydGljbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5hcnRpY2xlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgVFlQRS5HRVRfQVJUSUNMRV9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuYXJ0aWNsZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogYWN0aW9uLnRvdGFsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFRZUEUuR0VUX0FSVElDTEVfRVJST1I6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFydGljbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5hcnRpY2xlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVyck1lc3M6IGFjdGlvbi5lcnJNZXNzLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcnRpY2xlUmVkdWNlcjtcclxuIiwiaW1wb3J0ICogYXMgVFlQRSBmcm9tIFwiLi4vY29udGFudHMvY2F0ZWdvcnlcIjtcclxuaW1wb3J0IHtIWURSQVRFfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCBjbG9uZURlZXAgZnJvbSBcImxvZGFzaC9jbG9uZURlZXBcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgZXJyTWVzczogbnVsbCxcclxuICAgIH0sXHJcbiAgICBjYXRlZ29yeUZpbHRlcjoge1xyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgIGVyck1lc3M6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgZmlsdGVyOiB7XHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgZXJyTWVzczogbnVsbCxcclxuICAgIH0sXHJcbn07XHJcblxyXG5jb25zdCBjYXRlZ29yeVJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgLi4uY2xvbmVEZWVwKGFjdGlvbi5wYXlsb2FkLmNhdGVnb3J5KX07XHJcblxyXG4gICAgICAgIGNhc2UgVFlQRS5HRVRfQ0FURUdPUlk6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBUWVBFLkdFVF9DQVRFR09SWV9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiBhY3Rpb24udG90YWwsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgVFlQRS5HRVRfQ0FURUdPUllfRVJST1I6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyTWVzczogYWN0aW9uLmVyck1lc3MsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjYXNlIFRZUEUuR0VUX0ZJTFRFUl9DQVRFR09SWTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlGaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5jYXRlZ29yeUZpbHRlcixcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFRZUEUuR0VUX0ZJTFRFUl9DQVRFR09SWV9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmNhdGVnb3J5RmlsdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiBhY3Rpb24udG90YWwsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgVFlQRS5HRVRfRklMVEVSX0NBVEVHT1JZX0VSUk9SOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmNhdGVnb3J5RmlsdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVyck1lc3M6IGFjdGlvbi5lcnJNZXNzLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2FzZSBUWVBFLkdFVF9GSUxURVI6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmZpbHRlcixcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFRZUEUuR0VUX0ZJTFRFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5maWx0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IGFjdGlvbi50b3RhbCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBUWVBFLkdFVF9GSUxURVJfRVJST1I6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmZpbHRlcixcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJNZXNzOiBhY3Rpb24uZXJyTWVzcyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhdGVnb3J5UmVkdWNlcjsiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmltcG9ydCBwcm9kdWN0UmVkdWNlciBmcm9tIFwiLi9wcm9kdWN0XCI7XHJcbmltcG9ydCBjYXRlZ29yeVJlZHVjZXIgZnJvbSBcIi4vY2F0ZWdvcnlcIjtcclxuaW1wb3J0IHNsaWRlUmVkdWNlciBmcm9tIFwiLi9zbGlkZVwiO1xyXG5pbXBvcnQgYXJ0aWNsZVJlZHVjZXIgZnJvbSBcIi4vYXJ0aWNsZVwiO1xyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgcHJvZHVjdDogcHJvZHVjdFJlZHVjZXIsXHJcbiAgY2F0ZWdvcnk6IGNhdGVnb3J5UmVkdWNlcixcclxuICBzbGlkZTogc2xpZGVSZWR1Y2VyLFxyXG4gIGFydGljbGUgOiBhcnRpY2xlUmVkdWNlcixcclxuICBwcm9kdWN0RGV0YWlsczpwcm9kdWN0UmVkdWNlclxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgKiBhcyBUWVBFIGZyb20gXCIuLi9jb250YW50cy9wcm9kdWN0XCI7XHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCBjbG9uZURlZXAgZnJvbSBcImxvZGFzaC9jbG9uZURlZXBcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBwcm9kdWN0OiB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGRhdGE6IFtdLFxyXG4gICAgdG90YWw6IDAsXHJcbiAgICBlcnJNZXNzOiBudWxsLFxyXG4gIH0sXHJcbiAgcHJvZHVjdFNlbGxpbmc6IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgZGF0YTogW10sXHJcbiAgICBlcnJNZXNzOiBudWxsLFxyXG4gIH0sXHJcblxyXG4gIHByb2R1Y3RIb3Q6IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgZGF0YTogW10sXHJcbiAgICBlcnJNZXNzOiBudWxsLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBwcm9kdWN0UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uY2xvbmVEZWVwKGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QpIH07XHJcblxyXG4gICAgY2FzZSBUWVBFLkdFVF9QUk9EVUNUUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0OiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0LFxyXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9QUk9EVUNUU19TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3Q6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3QsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgdG90YWw6IGFjdGlvbi50b3RhbCxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9QUk9EVUNUU19FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0OiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0LFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBlcnJNZXNzOiBhY3Rpb24uZXJyTWVzcyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuXHJcbiAgICAvLyAgIGNhc2UgVFlQRS5HRVRfREVUQUlMOlxyXG4gICAgLy8gICAgIHJldHVybiB7XHJcbiAgICAvLyAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgLy8gICAgICAgICBwcm9kdWN0RGV0YWlsOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0RGV0YWlsLFxyXG4gICAgLy8gICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgIC8vICAgICAgICAgfSxcclxuICAgIC8vICAgICB9O1xyXG4gICAgLy8gY2FzZSBUWVBFLkdFVF9ERVRBSUxfU1VDQ0VTUzpcclxuICAgIC8vICAgICByZXR1cm4ge1xyXG4gICAgLy8gICAgICAgICAuLi5zdGF0ZSxcclxuICAgIC8vICAgICAgICAgcHJvZHVjdERldGFpbDoge1xyXG4gICAgLy8gICAgICAgICAgICAgLi4uc3RhdGUucHJvZHVjdERldGFpbCxcclxuICAgIC8vICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgLy8gICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgfTtcclxuICAgIC8vIGNhc2UgVFlQRS5HRVRfREVUQUlMX0VSUk9SOlxyXG4gICAgLy8gICAgIHJldHVybiB7XHJcbiAgICAvLyAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgLy8gICAgICAgICBwcm9kdWN0RGV0YWlsOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0RGV0YWlsLFxyXG4gICAgLy8gICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAvLyAgICAgICAgICAgICBlcnJNZXNzOiBhY3Rpb24uZXJyTWVzcyxcclxuICAgIC8vICAgICAgICAgfSxcclxuICAgIC8vICAgICB9O1xyXG5cclxuXHJcbiAgICBjYXNlIFRZUEUuR0VUX1NFTExJTkdfUFJPRFVDVFM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdFNlbGxpbmc6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3RTZWxsaW5nLFxyXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9TRUxMSU5HX1BST0RVQ1RTX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdFNlbGxpbmc6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3RTZWxsaW5nLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgIHRvdGFsOiBhY3Rpb24udG90YWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVFlQRS5HRVRfU0VMTElOR19QUk9EVUNUU19FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0U2VsbGluZzoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdFNlbGxpbmcsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGVyck1lc3M6IGFjdGlvbi5lcnJNZXNzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBUWVBFLkdFVF9IT1RfUFJPRFVDVFM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdEhvdDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdEhvdCxcclxuICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVFlQRS5HRVRfSE9UX1BST0RVQ1RTX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdEhvdDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdEhvdCxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICB0b3RhbDogYWN0aW9uLnRvdGFsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEUuR0VUX0hPVF9QUk9EVUNUU19FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0SG90OiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0SG90LFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBlcnJNZXNzOiBhY3Rpb24uZXJyTWVzcyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdFJlZHVjZXI7XHJcbiIsImltcG9ydCAqIGFzIFRZUEUgZnJvbSBcIi4uL2NvbnRhbnRzL3NsaWRlXCI7XHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCBjbG9uZURlZXAgZnJvbSBcImxvZGFzaC9jbG9uZURlZXBcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHNsaWRlOiB7XHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgZXJyTWVzczogbnVsbCxcclxuICAgIH0sXHJcbn07XHJcblxyXG5jb25zdCBzbGlkZVJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmNsb25lRGVlcChhY3Rpb24ucGF5bG9hZC5zbGlkZSkgfTtcclxuXHJcbiAgICAgICAgY2FzZSBUWVBFLkdFVF9TTElERTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5zbGlkZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFRZUEUuR0VUX1NMSURFX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNsaWRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuc2xpZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IGFjdGlvbi50b3RhbCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBUWVBFLkdFVF9TTElERV9FUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5zbGlkZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJNZXNzOiBhY3Rpb24uZXJyTWVzcyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2xpZGVSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBwdXQsIHRha2VMYXRlc3QsIGFsbCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCBSZXF1ZXN0IGZyb20gXCIuLi91dGlscy9yZXF1ZXN0XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgZ2V0QXJ0aWNsZVN1Y2Nlc3MsXHJcbiAgICBnZXRBcnRpY2xlRXJyb3IsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvYXJ0aWNsZVwiO1xyXG5cclxuaW1wb3J0IHsgR0VUX0FSVElDTEV9IGZyb20gXCIuLi9jb250YW50cy9hcnRpY2xlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGdldEFydGljbGUoYWN0aW9uKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgYXBpL2FydGljbGVzL2dldD9hY3RpdmU9MSZpZF93ZWJzaXRlPTRgO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUmVxdWVzdCwgdXJsKTtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0QXJ0aWNsZVN1Y2Nlc3MocmVzcG9uc2UpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldEFydGljbGVFcnJvcihlcnJvci5tZXNzYWdlKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBTbGlkZVNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIHlpZWxkIHRha2VMYXRlc3QoR0VUX0FSVElDTEUsIGdldEFydGljbGUpLFxyXG4gICAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgcHV0LCB0YWtlTGF0ZXN0LCBhbGwsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgUmVxdWVzdCBmcm9tIFwiLi4vdXRpbHMvcmVxdWVzdFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIGdldENhdGVnb3J5U3VjY2VzcyxcclxuICAgIGdldENhdGVnb3J5RXJyb3IsXHJcbiAgICBnZXRGaWx0ZXJDYXRlZ29yeVN1Y2Nlc3MsXHJcbiAgICBnZXRGaWx0ZXJDYXRlZ29yeUVycm9yLFxyXG4gICAgZ2V0RmlsdGVyU3VjY2VzcyxcclxuICAgIGdldEZpbHRlckVycm9yLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zL2NhdGVnb3J5XCI7XHJcblxyXG5pbXBvcnQgeyBHRVRfQ0FURUdPUlkgLCBHRVRfRklMVEVSX0NBVEVHT1JZICwgR0VUX0ZJTFRFUn0gZnJvbSBcIi4uL2NvbnRhbnRzL2NhdGVnb3J5XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGdldENhdGVnb3J5KGFjdGlvbikge1xyXG4gICAgY29uc3QgdXJsID0gYGFwaS9jYXRlZ29yaWVzL2dldD9pZF93ZWJzaXRlPTQmYWN0aXZlPTFgO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUmVxdWVzdCwgdXJsKTtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0Q2F0ZWdvcnlTdWNjZXNzKHJlc3BvbnNlKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRDYXRlZ29yeUVycm9yKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRGaWx0ZXJDYXRlZ29yeShhY3Rpb24pIHtcclxuICAgIGNvbnN0IHVybCA9IGBhcGkvZmlsdGVycy9nZXQ/YWN0aXZlPTEkJmlkX2NhdD0ke2FjdGlvbi5pZENhdH0mcGFnZT0xJmlkX3dlYnNpdGU9NCZpZF9wYXJlbnQ9MGA7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChSZXF1ZXN0LCB1cmwpO1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRGaWx0ZXJDYXRlZ29yeVN1Y2Nlc3MocmVzcG9uc2UpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldEZpbHRlckNhdGVnb3J5RXJyb3IoZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGdldEZpbHRlcihhY3Rpb24pIHtcclxuICAgIGNvbnN0IHVybCA9IGBhcGkvZmlsdGVycy9nZXQ/YWN0aXZlPTEmaWRfY2F0PSR7YWN0aW9uLm9mZnNldC5pZH0mcGFnZT0xJmlkX3dlYnNpdGU9NCZpZF9wYXJlbnQ9JHthY3Rpb24ub2Zmc2V0LmlkX3BhcmVudCA/IGFjdGlvbi5vZmZzZXQuaWRfcGFyZW50IDogMH1gO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUmVxdWVzdCwgdXJsKTtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0RmlsdGVyU3VjY2VzcyhyZXNwb25zZSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0RmlsdGVyRXJyb3IoZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogQ2F0ZWdvcnlTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9DQVRFR09SWSwgZ2V0Q2F0ZWdvcnkpLFxyXG4gICAgICAgIHlpZWxkIHRha2VMYXRlc3QoR0VUX0ZJTFRFUl9DQVRFR09SWSwgZ2V0RmlsdGVyQ2F0ZWdvcnkpLFxyXG4gICAgICAgIHlpZWxkIHRha2VMYXRlc3QoR0VUX0ZJTFRFUiwgZ2V0RmlsdGVyKSxcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHsgYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgUHJvZHVjdFNhZ2EgZnJvbSBcIi4vcHJvZHVjdFwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnlTYWdhIGZyb20gXCIuL2NhdGVnb3J5XCI7XHJcbmltcG9ydCBTbGlkZVNhZ2EgZnJvbSBcIi4vc2xpZGVcIjtcclxuaW1wb3J0IEFydGljbGVTYWdhIGZyb20gXCIuL2FydGljbGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgUHJvZHVjdFNhZ2EoKSxcclxuICAgIFNsaWRlU2FnYSgpLFxyXG4gICAgQ2F0ZWdvcnlTYWdhKCksXHJcbiAgICBBcnRpY2xlU2FnYSgpLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCB7cHV0LCB0YWtlTGF0ZXN0LCBhbGwsIGNhbGx9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCBSZXF1ZXN0IGZyb20gXCIuLi91dGlscy9yZXF1ZXN0XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgZ2V0UHJvZHVjdHNTdWNjZXNzLFxyXG4gICAgZ2V0UHJvZHVjdHNFcnJvcixcclxuICAgIGdldFNlbGxpbmdQcm9kdWN0c1N1Y2Nlc3MsXHJcbiAgICBnZXRTZWxsaW5nUHJvZHVjdHNFcnJvcixcclxuICAgIGdldEhvdFByb2R1Y3RzU3VjY2VzcyxcclxuICAgIGdldEhvdFByb2R1Y3RzRXJyb3IsXHJcbiAgICBwb3N0T3JkZXJTdWNjZXNzLFxyXG4gICAgcG9zdE9yZGVyRXJyb3IsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvcHJvZHVjdFwiO1xyXG5cclxuaW1wb3J0IHtHRVRfUFJPRFVDVFMsIEdFVF9TRUxMSU5HX1BST0RVQ1RTLCBHRVRfSE9UX1BST0RVQ1RTLCBQT1NUX09SREVSIH0gZnJvbSBcIi4uL2NvbnRhbnRzL3Byb2R1Y3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZ2V0UHJvZHVjdHMoYWN0aW9uKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgYXBpL3Byb2R1Y3RzL2dldD9hY3RpdmU9MSZpZF93ZWJzaXRlPTQmaWRfY2F0PSR7YWN0aW9uLm9mZnNldD8uaWRfY2FydCA/IGFjdGlvbi5vZmZzZXQ/LmlkX2NhcnQ6Jyd9JmlkX2ZpbHRlcj0ke2FjdGlvbi5vZmZzZXQ/LmlkX2ZpbHRlciA/IGFjdGlvbi5vZmZzZXQ/LmlkX2ZpbHRlciA6Jyd9YDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFJlcXVlc3QsIHVybCk7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldFByb2R1Y3RzU3VjY2VzcyhyZXNwb25zZSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0UHJvZHVjdHNFcnJvcihlcnJvci5tZXNzYWdlKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogcG9zdE9yZGVyKHBheWxvYWQpIHtcclxuICAgIGNvbnN0IHVybCA9IGBhcGkvb3JkZXJzL2FkZC1mcm9tLXJlYWN0P2lkX3dlYnNpdGU9NGA7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChSZXF1ZXN0LCB1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC1wbGFpbiwgKi8qXCIsXHJcbiAgICAgICAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkLnBheWxvYWQpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dChwb3N0T3JkZXJTdWNjZXNzKHJlc3BvbnNlKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dChwb3N0T3JkZXJFcnJvcihlcnJvci5tZXNzYWdlKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGdldFNlbGxpbmdQcm9kdWN0cyhhY3Rpb24pIHtcclxuICAgIGNvbnN0IHVybCA9IGBhcGkvcHJvZHVjdHMvZ2V0P2FjdGl2ZT0xJmlkX3dlYnNpdGU9NCZmZWF0dXJlPTFgO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUmVxdWVzdCwgdXJsKTtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0U2VsbGluZ1Byb2R1Y3RzU3VjY2VzcyhyZXNwb25zZSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0U2VsbGluZ1Byb2R1Y3RzRXJyb3IoZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGdldEhvdFByb2R1Y3RzKGFjdGlvbikge1xyXG4gICAgY29uc3QgdXJsID0gYGFwaS9wcm9kdWN0cy9nZXQ/YWN0aXZlPTEmaWRfd2Vic2l0ZT00JmhpZ2hsaWdodD0xJm9mZnNldD02YDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFJlcXVlc3QsIHVybCk7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldEhvdFByb2R1Y3RzU3VjY2VzcyhyZXNwb25zZSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0SG90UHJvZHVjdHNFcnJvcihlcnJvci5tZXNzYWdlKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBQcm9kdWN0U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgeWllbGQgdGFrZUxhdGVzdChHRVRfUFJPRFVDVFMsIGdldFByb2R1Y3RzKSxcclxuICAgICAgICB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9TRUxMSU5HX1BST0RVQ1RTLCBnZXRTZWxsaW5nUHJvZHVjdHMpLFxyXG4gICAgICAgIHlpZWxkIHRha2VMYXRlc3QoR0VUX0hPVF9QUk9EVUNUUywgZ2V0SG90UHJvZHVjdHMpLFxyXG4gICAgICAgIC8vIHlpZWxkIHRha2VMYXRlc3QoR0VUX0RFVEFJTCwgZ2V0RGV0YWlsKSxcclxuICAgICAgICB5aWVsZCB0YWtlTGF0ZXN0KFBPU1RfT1JERVIsIHBvc3RPcmRlciksXHJcbiAgICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBwdXQsIHRha2VMYXRlc3QsIGFsbCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCBSZXF1ZXN0IGZyb20gXCIuLi91dGlscy9yZXF1ZXN0XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgZ2V0U2xpZGVTdWNjZXNzLFxyXG4gICAgZ2V0U2xpZGVFcnJvcixcclxufSBmcm9tIFwiLi4vYWN0aW9ucy9zbGlkZVwiO1xyXG5cclxuaW1wb3J0IHsgR0VUX1NMSURFfSBmcm9tIFwiLi4vY29udGFudHMvc2xpZGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZ2V0U2xpZGUoYWN0aW9uKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgYXBpL2Jhbm5lcnMvZ2V0P2FjdGl2ZT0xJmlkX3dlYnNpdGU9NCYmcGFnZV90eXBlPSR7YWN0aW9uLm9mZnNldC5wYWdlX3R5cGV9YDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFJlcXVlc3QsIHVybCk7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldFNsaWRlU3VjY2VzcyhyZXNwb25zZSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0U2xpZGVFcnJvcihlcnJvci5tZXNzYWdlKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBTbGlkZVNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIHlpZWxkIHRha2VMYXRlc3QoR0VUX1NMSURFLCBnZXRTbGlkZSksXHJcbiAgICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJyZWR1eC1sb2dnZXJcIjtcclxuXHJcbmltcG9ydCByb290U2FnYSBmcm9tIFwiLi9zYWdhc1wiO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBtYWtlU3RvcmUgPSAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICBjb25zdCBtaWRkbGV3YXJlID0gW3NhZ2FNaWRkbGV3YXJlXTtcclxuICBtaWRkbGV3YXJlLnB1c2gobG9nZ2VyKTtcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpO1xyXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlLCB7IGRlYnVnOiB0cnVlIH0pO1xyXG4iLCJyZXF1aXJlKFwiaXNvbW9ycGhpYy1mZXRjaFwiKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHBhcnNlSlNPTihyZXNwb25zZSkge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSA0MDApIHtcclxuICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGRhdGEubWVzc2FnZSk7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmNvbnN0IGlzTm9kZSA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCI7XHJcbmNvbnN0IG5vZGVPcHRpb25zID0gIWlzTm9kZVxyXG4gID8ge31cclxuICA6IHtcclxuICAgICAgYWdlbnQ6IG5ldyAocmVxdWlyZShcImh0dHBzXCIpLkFnZW50KSh7XHJcbiAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSxcclxuICAgICAgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBDb29raWU6IGdsb2JhbC5jb29raWUsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWVzdChwYXRoLCBvcHRpb25zID0ge30pIHtcclxuICBjb25zdCB1cmwgPSBgJHtwcm9jZXNzLmVudi5BUElfVVJMfS8ke3BhdGh9YDtcclxuICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXHJcbiAgICAuLi5ub2RlT3B0aW9ucyxcclxuICAgIC4uLm9wdGlvbnMsXHJcbiAgfSkudGhlbihwYXJzZUpTT04pO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL2Nsb25lRGVlcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1sb2dnZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==