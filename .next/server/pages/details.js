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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/details/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/product.js":
/*!********************************!*\
  !*** ./src/actions/product.js ***!
  \********************************/
/*! exports provided: getProducts, getProductsSuccess, getProductsError, getSellingProducts, getSellingProductsSuccess, getSellingProductsError, getHotProducts, getHotProductsSuccess, getHotProductsError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsSuccess", function() { return getProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsError", function() { return getProductsError; });
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

/***/ "./src/contants/product.js":
/*!*********************************!*\
  !*** ./src/contants/product.js ***!
  \*********************************/
/*! exports provided: GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, GET_SELLING_PRODUCTS, GET_SELLING_PRODUCTS_SUCCESS, GET_SELLING_PRODUCTS_ERROR, GET_HOT_PRODUCTS, GET_HOT_PRODUCTS_SUCCESS, GET_HOT_PRODUCTS_ERROR */
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
const GET_PRODUCTS = "PRODUCT/GET_PRODUCT";
const GET_PRODUCTS_SUCCESS = "PRODUCT/GET_PRODUCT_SUCCESS";
const GET_PRODUCTS_ERROR = "PRODUCT/GET_PRODUCT_ERROR";
const GET_SELLING_PRODUCTS = "PRODUCT/GET_SELLING_PRODUCTS";
const GET_SELLING_PRODUCTS_SUCCESS = "PRODUCT/GET_SELLING_PRODUCTS_SUCCESS";
const GET_SELLING_PRODUCTS_ERROR = "PRODUCT/GET_SELLING_PRODUCTS_ERROR";
const GET_HOT_PRODUCTS = "PRODUCT/GET_HOT_PRODUCTS";
const GET_HOT_PRODUCTS_SUCCESS = "PRODUCT/GET_HOT_PRODUCTS_SUCCESS";
const GET_HOT_PRODUCTS_ERROR = "PRODUCT/GET_HOT_PRODUCTS_ERROR";

/***/ }),

/***/ "./src/pages/details/index.js":
/*!************************************!*\
  !*** ./src/pages/details/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/product */ "./src/actions/product.js");

var _jsxFileName = "C:\\Users\\MienNC\\Desktop\\NextJs\\src\\pages\\details\\index.js";






const Index = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    console.log('rrrrrr', router.query.alias);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      class: "text-gray-700 body-font overflow-hidden bg-white",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "container px-5 py-24 mx-auto",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "lg:w-4/5 mx-auto flex flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            alt: "ecommerce",
            class: "lg:w-1/2 w-full object-cover object-center rounded border border-gray-200",
            src: "https://www.whitmorerarebooks.com/pictures/medium/2465.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              class: "text-sm title-font text-gray-500 tracking-widest",
              children: "BRAND NAME"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              class: "text-gray-900 text-3xl title-font font-medium mb-1",
              children: "The Catcher in the Rye"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "flex mb-4",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                class: "flex items-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  fill: "currentColor",
                  stroke: "currentColor",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  class: "w-4 h-4 text-red-500",
                  viewBox: "0 0 24 24",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 41,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  fill: "currentColor",
                  stroke: "currentColor",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  class: "w-4 h-4 text-red-500",
                  viewBox: "0 0 24 24",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  fill: "currentColor",
                  stroke: "currentColor",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  class: "w-4 h-4 text-red-500",
                  viewBox: "0 0 24 24",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  fill: "currentColor",
                  stroke: "currentColor",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  class: "w-4 h-4 text-red-500",
                  viewBox: "0 0 24 24",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  class: "w-4 h-4 text-red-500",
                  viewBox: "0 0 24 24",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  class: "text-gray-600 ml-3",
                  children: "4 Reviews"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                class: "flex ml-3 pl-3 py-2 border-l-2 border-gray-200",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  class: "text-gray-500",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    fill: "currentColor",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    class: "w-5 h-5",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 99,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  class: "ml-2 text-gray-500",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    fill: "currentColor",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    class: "w-5 h-5",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 111,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  class: "ml-2 text-gray-500",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    fill: "currentColor",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    class: "w-5 h-5",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      d: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 123,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              class: "leading-relaxed",
              children: "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                class: "flex",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  class: "mr-3",
                  children: "Color"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  class: "border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  class: "border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 1
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  class: "border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                class: "flex ml-6 items-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  class: "mr-3",
                  children: "Size"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  class: "relative",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                    class: "rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                      children: "SM"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 147,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                      children: "M"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 148,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                      children: "L"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 149,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                      children: "XL"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 150,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    class: "absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      class: "w-4 h-4",
                      viewBox: "0 0 24 24",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                        d: "M6 9l6 6 6-6"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 162,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 153,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 152,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "flex",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                class: "title-font font-medium text-2xl text-gray-900",
                children: "$58.00"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                class: "flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded",
                children: "Button"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                class: "rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  fill: "currentColor",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  class: "w-5 h-5",
                  viewBox: "0 0 24 24",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFudHMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvZGV0YWlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJnZXRQcm9kdWN0cyIsIm9mZnNldCIsInBhZ2UiLCJ0eXBlIiwiVFlQRSIsImdldFByb2R1Y3RzU3VjY2VzcyIsImRhdGEiLCJ0b3RhbCIsImdldFByb2R1Y3RzRXJyb3IiLCJlcnJNZXNzIiwiZ2V0U2VsbGluZ1Byb2R1Y3RzIiwiZ2V0U2VsbGluZ1Byb2R1Y3RzU3VjY2VzcyIsImdldFNlbGxpbmdQcm9kdWN0c0Vycm9yIiwiZ2V0SG90UHJvZHVjdHMiLCJnZXRIb3RQcm9kdWN0c1N1Y2Nlc3MiLCJnZXRIb3RQcm9kdWN0c0Vycm9yIiwiR0VUX1BST0RVQ1RTIiwiR0VUX1BST0RVQ1RTX1NVQ0NFU1MiLCJHRVRfUFJPRFVDVFNfRVJST1IiLCJHRVRfU0VMTElOR19QUk9EVUNUUyIsIkdFVF9TRUxMSU5HX1BST0RVQ1RTX1NVQ0NFU1MiLCJHRVRfU0VMTElOR19QUk9EVUNUU19FUlJPUiIsIkdFVF9IT1RfUFJPRFVDVFMiLCJHRVRfSE9UX1BST0RVQ1RTX1NVQ0NFU1MiLCJHRVRfSE9UX1BST0RVQ1RTX0VSUk9SIiwiSW5kZXgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiYWxpYXMiXSwi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QUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBdUxILENBN0xEOztBQStMZVQsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUNwTUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvZGV0YWlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2RldGFpbHMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgKiBhcyBUWVBFIGZyb20gXCIuLi9jb250YW50cy9wcm9kdWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHMgPSAob2Zmc2V0LCBwYWdlKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX1BST0RVQ1RTLFxyXG4gIG9mZnNldCxcclxuICBwYWdlLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzU3VjY2VzcyA9IChkYXRhLCB0b3RhbCkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9QUk9EVUNUU19TVUNDRVNTLFxyXG4gIGRhdGE6IGRhdGEsXHJcbiAgdG90YWw6IHRvdGFsLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzRXJyb3IgPSAoZXJyTWVzcykgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9QUk9EVUNUU19FUlJPUixcclxuICBlcnJNZXNzLFxyXG59KTtcclxuXHJcbi8vU2VsbGluZz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlbGxpbmdQcm9kdWN0cyA9IChvZmZzZXQsIHBhZ2UpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfU0VMTElOR19QUk9EVUNUUyxcclxuICBvZmZzZXQsXHJcbiAgcGFnZSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRTZWxsaW5nUHJvZHVjdHNTdWNjZXNzID0gKGRhdGEsIHRvdGFsKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX1NFTExJTkdfUFJPRFVDVFNfU1VDQ0VTUyxcclxuICBkYXRhOiBkYXRhLFxyXG4gIHRvdGFsOiB0b3RhbCxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRTZWxsaW5nUHJvZHVjdHNFcnJvciA9IChlcnJNZXNzKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX1NFTExJTkdfUFJPRFVDVFNfRVJST1IsXHJcbiAgZXJyTWVzcyxcclxufSk7XHJcblxyXG4vL0hvdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEhvdFByb2R1Y3RzID0gKG9mZnNldCwgcGFnZSkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9IT1RfUFJPRFVDVFMsXHJcbiAgb2Zmc2V0LFxyXG4gIHBhZ2UsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0SG90UHJvZHVjdHNTdWNjZXNzID0gKGRhdGEsIHRvdGFsKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0hPVF9QUk9EVUNUU19TVUNDRVNTLFxyXG4gIGRhdGE6IGRhdGEsXHJcbiAgdG90YWw6IHRvdGFsLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldEhvdFByb2R1Y3RzRXJyb3IgPSAoZXJyTWVzcykgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9IT1RfUFJPRFVDVFNfRVJST1IsXHJcbiAgZXJyTWVzcyxcclxufSk7XHJcblxyXG4iLCJleHBvcnQgY29uc3QgR0VUX1BST0RVQ1RTID0gXCJQUk9EVUNUL0dFVF9QUk9EVUNUXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVFNfU1VDQ0VTUyA9IFwiUFJPRFVDVC9HRVRfUFJPRFVDVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVFNfRVJST1IgPSBcIlBST0RVQ1QvR0VUX1BST0RVQ1RfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfU0VMTElOR19QUk9EVUNUUyA9IFwiUFJPRFVDVC9HRVRfU0VMTElOR19QUk9EVUNUU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX1NFTExJTkdfUFJPRFVDVFNfU1VDQ0VTUyA9IFwiUFJPRFVDVC9HRVRfU0VMTElOR19QUk9EVUNUU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfU0VMTElOR19QUk9EVUNUU19FUlJPUiA9IFwiUFJPRFVDVC9HRVRfU0VMTElOR19QUk9EVUNUU19FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9IT1RfUFJPRFVDVFMgPSBcIlBST0RVQ1QvR0VUX0hPVF9QUk9EVUNUU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0hPVF9QUk9EVUNUU19TVUNDRVNTID0gXCJQUk9EVUNUL0dFVF9IT1RfUFJPRFVDVFNfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0hPVF9QUk9EVUNUU19FUlJPUiA9IFwiUFJPRFVDVC9HRVRfSE9UX1BST0RVQ1RTX0VSUk9SXCI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtnZXRQcm9kdWN0RGV0YWlsfSBmcm9tICcuLi8uLi9hY3Rpb25zL3Byb2R1Y3QnO1xyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygncnJycnJyJyxyb3V0ZXIucXVlcnkuYWxpYXMpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICA8c2VjdGlvbiBjbGFzcz1cInRleHQtZ3JheS03MDAgYm9keS1mb250IG92ZXJmbG93LWhpZGRlbiBiZy13aGl0ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgcHgtNSBweS0yNCBteC1hdXRvXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGc6dy00LzUgbXgtYXV0byBmbGV4IGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBhbHQ9XCJlY29tbWVyY2VcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwibGc6dy0xLzIgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMFwiXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cud2hpdG1vcmVyYXJlYm9va3MuY29tL3BpY3R1cmVzL21lZGl1bS8yNDY1LmpwZ1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZzp3LTEvMiB3LWZ1bGwgbGc6cGwtMTAgbGc6cHktNiBtdC02IGxnOm10LTBcIj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LXNtIHRpdGxlLWZvbnQgdGV4dC1ncmF5LTUwMCB0cmFja2luZy13aWRlc3RcIj5cclxuICAgICAgICAgICAgICAgIEJSQU5EIE5BTUVcclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzcz1cInRleHQtZ3JheS05MDAgdGV4dC0zeGwgdGl0bGUtZm9udCBmb250LW1lZGl1bSBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICBUaGUgQ2F0Y2hlciBpbiB0aGUgUnllXHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInctNCBoLTQgdGV4dC1yZWQtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMmwzLjA5IDYuMjZMMjIgOS4yN2wtNSA0Ljg3IDEuMTggNi44OEwxMiAxNy43N2wtNi4xOCAzLjI1TDcgMTQuMTQgMiA5LjI3bDYuOTEtMS4wMUwxMiAyelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInctNCBoLTQgdGV4dC1yZWQtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMmwzLjA5IDYuMjZMMjIgOS4yN2wtNSA0Ljg3IDEuMTggNi44OEwxMiAxNy43N2wtNi4xOCAzLjI1TDcgMTQuMTQgMiA5LjI3bDYuOTEtMS4wMUwxMiAyelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInctNCBoLTQgdGV4dC1yZWQtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMmwzLjA5IDYuMjZMMjIgOS4yN2wtNSA0Ljg3IDEuMTggNi44OEwxMiAxNy43N2wtNi4xOCAzLjI1TDcgMTQuMTQgMiA5LjI3bDYuOTEtMS4wMUwxMiAyelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInctNCBoLTQgdGV4dC1yZWQtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMmwzLjA5IDYuMjZMMjIgOS4yN2wtNSA0Ljg3IDEuMTggNi44OEwxMiAxNy43N2wtNi4xOCAzLjI1TDcgMTQuMTQgMiA5LjI3bDYuOTEtMS4wMUwxMiAyelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInctNCBoLTQgdGV4dC1yZWQtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMmwzLjA5IDYuMjZMMjIgOS4yN2wtNSA0Ljg3IDEuMTggNi44OEwxMiAxNy43N2wtNi4xOCAzLjI1TDcgMTQuMTQgMiA5LjI3bDYuOTEtMS4wMUwxMiAyelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1ncmF5LTYwMCBtbC0zXCI+NCBSZXZpZXdzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbGV4IG1sLTMgcGwtMyBweS0yIGJvcmRlci1sLTIgYm9yZGVyLWdyYXktMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwidGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy01IGgtNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE4IDJoLTNhNSA1IDAgMDAtNSA1djNIN3Y0aDN2OGg0di04aDNsMS00aC00VjdhMSAxIDAgMDExLTFoM3pcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtbC0yIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInctNSBoLTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMyAzYTEwLjkgMTAuOSAwIDAxLTMuMTQgMS41MyA0LjQ4IDQuNDggMCAwMC03Ljg2IDN2MUExMC42NiAxMC42NiAwIDAxMyA0cy00IDkgNSAxM2ExMS42NCAxMS42NCAwIDAxLTcgMmM5IDUgMjAgMCAyMC0xMS41YTQuNSA0LjUgMCAwMC0uMDgtLjgzQTcuNzIgNy43MiAwIDAwMjMgM3pcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtbC0yIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInctNSBoLTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMSAxMS41YTguMzggOC4zOCAwIDAxLS45IDMuOCA4LjUgOC41IDAgMDEtNy42IDQuNyA4LjM4IDguMzggMCAwMS0zLjgtLjlMMyAyMWwxLjktNS43YTguMzggOC4zOCAwIDAxLS45LTMuOCA4LjUgOC41IDAgMDE0LjctNy42IDguMzggOC4zOCAwIDAxMy44LS45aC41YTguNDggOC40OCAwIDAxOCA4di41elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwibGVhZGluZy1yZWxheGVkXCI+XHJcbiAgICAgICAgICAgICAgICBGYW0gbG9jYXZvcmUga2lja3N0YXJ0ZXIgZGlzdGlsbGVyeS4gTWl4dGFwZSBjaGlsbHdhdmUgdHVtZXJpY1xyXG4gICAgICAgICAgICAgICAgc3JpcmFjaGEgdGF4aW15IGNoaWEgbWljcm9kb3NpbmcgdGlsZGUgRElZLiBYT1hPIGZhbSBpbmR4Z29cclxuICAgICAgICAgICAgICAgIGp1aWNlcmFtcHMgY29ybmhvbGUgcmF3IGRlbmltIGZvcmFnZSBicm9va2x5bi4gRXZlcnlkYXkgY2FycnkgKzFcclxuICAgICAgICAgICAgICAgIHNlaXRhbiBwb3V0aW5lIHR1bWVyaWMuIEdhc3Ryb3B1YiBibHVlIGJvdHRsZSBhdXN0aW4gbGlzdGljbGVcclxuICAgICAgICAgICAgICAgIHBvdXItb3ZlciwgbmV1dHJhIGplYW4gc2hvcnRzIGtleXRhciBiYW5qbyB0YXR0b29lZCB1bWFtaVxyXG4gICAgICAgICAgICAgICAgY2FyZGlnYW4uXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IG10LTYgaXRlbXMtY2VudGVyIHBiLTUgYm9yZGVyLWItMiBib3JkZXItZ3JheS0yMDAgbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtci0zXCI+Q29sb3I8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJib3JkZXItMiBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1mdWxsIHctNiBoLTYgZm9jdXM6b3V0bGluZS1ub25lXCI+PC9idXR0b24+XHJcbjxidXR0b24gY2xhc3M9XCJib3JkZXItMiBib3JkZXItZ3JheS0zMDAgbWwtMSBiZy1ncmF5LTcwMCByb3VuZGVkLWZ1bGwgdy02IGgtNiBmb2N1czpvdXRsaW5lLW5vbmVcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCBtbC0xIGJnLXJlZC01MDAgcm91bmRlZC1mdWxsIHctNiBoLTYgZm9jdXM6b3V0bGluZS1ub25lXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IG1sLTYgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibXItM1wiPlNpemU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJyb3VuZGVkIGJvcmRlciBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyLWdyYXktNDAwIHB5LTIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1yZWQtNTAwIHRleHQtYmFzZSBwbC0zIHByLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlNNPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPk08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+TDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5YTDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWJzb2x1dGUgcmlnaHQtMCB0b3AtMCBoLWZ1bGwgdy0xMCB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNjAwIHBvaW50ZXItZXZlbnRzLW5vbmUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ3LTQgaC00XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNiA5bDYgNiA2LTZcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGUtZm9udCBmb250LW1lZGl1bSB0ZXh0LTJ4bCB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICQ1OC4wMFxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImZsZXggbWwtYXV0byB0ZXh0LXdoaXRlIGJnLXJlZC01MDAgYm9yZGVyLTAgcHktMiBweC02IGZvY3VzOm91dGxpbmUtbm9uZSBob3ZlcjpiZy1yZWQtNjAwIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgICAgQnV0dG9uXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyb3VuZGVkLWZ1bGwgdy0xMCBoLTEwIGJnLWdyYXktMjAwIHAtMCBib3JkZXItMCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1ncmF5LTUwMCBtbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ3LTUgaC01XCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjAuODQgNC42MWE1LjUgNS41IDAgMDAtNy43OCAwTDEyIDUuNjdsLTEuMDYtMS4wNmE1LjUgNS41IDAgMDAtNy43OCA3Ljc4bDEuMDYgMS4wNkwxMiAyMS4yM2w3Ljc4LTcuNzggMS4wNi0xLjA2YTUuNSA1LjUgMCAwMDAtNy43OHpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=