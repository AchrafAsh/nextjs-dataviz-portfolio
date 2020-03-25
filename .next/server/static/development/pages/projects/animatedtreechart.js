module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/useResizeObserver.js":
/*!*****************************************!*\
  !*** ./components/useResizeObserver.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (ref => {
  const {
    0: dimensions,
    1: setDimensions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver(entries => {
      entries.forEach(entry => {
        setDimensions(entry.contentRect);
      });
    });
    resizeObserver.observe(observeTarget);
    return () => {
      resizeObserver.unobserve(observeTarget);
    };
  }, [ref]);
  return dimensions;
});

/***/ }),

/***/ "./pages/projects/animatedtreechart.js":
/*!*********************************************!*\
  !*** ./pages/projects/animatedtreechart.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_useResizeObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/useResizeObserver */ "./components/useResizeObserver.js");
var _jsxFileName = "/home/achraf/Documents/coding/dataviz-portfolio/pages/projects/animatedtreechart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const TreeChart = ({
  data
}) => {
  const svgRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const wrapperRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const dimensions = Object(_components_useResizeObserver__WEBPACK_IMPORTED_MODULE_2__["default"])(wrapperRef);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const svg = Object(d3__WEBPACK_IMPORTED_MODULE_1__["select"])(svgRef.current);
    if (!dimensions) return;
    const root = Object(d3__WEBPACK_IMPORTED_MODULE_1__["hierarchy"])(data);
    const treeLayout = Object(d3__WEBPACK_IMPORTED_MODULE_1__["tree"])().size([dimensions.height, dimensions.width]);
    treeLayout(root);
    console.log(root.descendants());
    const linkGenerator = Object(d3__WEBPACK_IMPORTED_MODULE_1__["linkHorizontal"])() //   .source(link => link.source)
    //   .target(link => link.target)
    .x(node => node.y).y(node => node.x); // rendering nodes

    svg.selectAll('.node').data(root.descendants()).join('circle').attr('class', 'node').attr('r', 4).attr('fill', 'black').attr('cx', node => node.y).attr('cy', node => node.x).attr('opacity', 0).transition().delay(node => node.depth * 500).attr('opacity', 1); // rendering links

    svg.selectAll('.link').data(root.links()).join('path').attr('class', 'link').attr('fill', 'none').attr('stroke', 'black').attr('d', linkGenerator).attr('stroke-dasharray', function () {
      const length = this.getTotalLength();
      return `${length} ${length}`;
    }).attr('stroke-dashoffset', function () {
      return this.getTotalLength();
    }).transition().duration(500).delay(linkObj => linkObj.source.depth * 500).attr('stroke-dashoffset', 0); // labels

    svg.selectAll('.label').data(root.descendants()).join('text').attr('class', 'label').text(node => node.data.name).attr('x', node => node.y).attr('y', node => node.x - 10).attr('text-anchor', 'middle').attr('font-size', '24px').attr('opacity', 0).transition().delay(node => node.depth * 500).attr('opacity', 1);
  }, [data, dimensions]);
  return __jsx("div", {
    className: "wrapper",
    ref: wrapperRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, __jsx("svg", {
    ref: svgRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }));
};

function AnimatedTreeChartProject() {
  const initialData = {
    name: '👨',
    children: [{
      name: '👧',
      children: [{
        name: '👦'
      }, {
        name: '👦👦'
      }, {
        name: '👦👧'
      }]
    }, {
      name: '👦'
    }]
  };
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialData);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, "Animated Tree Chart"), __jsx(TreeChart, {
    data: data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }), __jsx("button", {
    onClick: () => setData(initialData.children[0]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, "Update Data"), __jsx("button", {
    onClick: () => setData(initialData),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, "Back To Start"));
}

/* harmony default export */ __webpack_exports__["default"] = (AnimatedTreeChartProject);

/***/ }),

/***/ 3:
/*!***************************************************!*\
  !*** multi ./pages/projects/animatedtreechart.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/achraf/Documents/coding/dataviz-portfolio/pages/projects/animatedtreechart.js */"./pages/projects/animatedtreechart.js");


/***/ }),

/***/ "d3":
/*!*********************!*\
  !*** external "d3" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=animatedtreechart.js.map