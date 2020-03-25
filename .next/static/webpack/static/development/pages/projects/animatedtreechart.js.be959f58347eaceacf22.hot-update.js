webpackHotUpdate("static/development/pages/projects/animatedtreechart.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./pages/projects/animatedtreechart.js":
/*!*********************************************!*\
  !*** ./pages/projects/animatedtreechart.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _components_useResizeObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/useResizeObserver */ "./components/useResizeObserver.js");
var _this = undefined,
    _jsxFileName = "/home/achraf/Documents/coding/dataviz-portfolio/pages/projects/animatedtreechart.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var TreeChart = function TreeChart(_ref) {
  var data = _ref.data;
  var svgRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var wrapperRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var dimensions = Object(_components_useResizeObserver__WEBPACK_IMPORTED_MODULE_2__["default"])(wrapperRef);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var svg = Object(d3__WEBPACK_IMPORTED_MODULE_1__["select"])(svgRef.current);
    if (!dimensions) return;
    var root = Object(d3__WEBPACK_IMPORTED_MODULE_1__["hierarchy"])(data);
    var treeLayout = Object(d3__WEBPACK_IMPORTED_MODULE_1__["tree"])().size([dimensions.height, dimensions.width]);
    treeLayout(root);
    console.log(root.descendants());
    var linkGenerator = Object(d3__WEBPACK_IMPORTED_MODULE_1__["linkHorizontal"])() //   .source(link => link.source)
    //   .target(link => link.target)
    .x(function (node) {
      return node.y;
    }).y(function (node) {
      return node.x;
    }); // rendering nodes

    svg.selectAll('.node').data(root.descendants()).join('circle').attr('class', 'node').attr('r', 4).attr('fill', 'black').attr('cx', function (node) {
      return node.y;
    }).attr('cy', function (node) {
      return node.x;
    }).attr('opacity', 0).transition().delay(function (node) {
      return node.depth * 500;
    }).attr('opacity', 1); // rendering links

    svg.selectAll('.link').data(root.links()).join('path').attr('class', 'link').attr('fill', 'none').attr('stroke', 'black').attr('d', linkGenerator).attr('stroke-dasharray', function () {
      var length = this.getTotalLength();
      return "".concat(length, " ").concat(length);
    }).attr('stroke-dashoffset', function () {
      return this.getTotalLength();
    }).transition().duration(500).delay(function (linkObj) {
      return linkObj.source.depth * 500;
    }).attr('stroke-dashoffset', 0); // labels

    svg.selectAll('.label').data(root.descendants()).join('text').attr('class', 'label').text(function (node) {
      return node.data.name;
    }).attr('x', function (node) {
      return node.y;
    }).attr('y', function (node) {
      return node.x - 10;
    }).attr('text-anchor', 'middle').attr('font-size', '24px').attr('opacity', 0).transition().delay(function (node) {
      return node.depth * 500;
    }).attr('opacity', 1);
  }, [data, dimensions]);
  return __jsx("div", {
    className: "wrapper",
    ref: wrapperRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, __jsx("svg", {
    ref: svgRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }));
};

function AnimatedTreeChartProject() {
  var initialData = {
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialData),
      data = _useState[0],
      setData = _useState[1];

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
    onClick: function onClick() {
      return setData(initialData.children[0]);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, "Update Data"), __jsx("button", {
    onClick: function onClick() {
      return setData(initialData);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, "Back To Start"));
}

/* harmony default export */ __webpack_exports__["default"] = (AnimatedTreeChartProject);

/***/ })

})
//# sourceMappingURL=animatedtreechart.js.be959f58347eaceacf22.hot-update.js.map