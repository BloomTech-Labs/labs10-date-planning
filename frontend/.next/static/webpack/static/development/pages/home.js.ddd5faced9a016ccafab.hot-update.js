webpackHotUpdate("static/development/pages/home.js",{

/***/ "./components/Home/Events.js":
/*!***********************************!*\
  !*** ./components/Home/Events.js ***!
  \***********************************/
/*! exports provided: ALL_EVENTS_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_EVENTS_QUERY", function() { return ALL_EVENTS_QUERY; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Event */ "./components/Home/Event.js");
/* harmony import */ var _styledComponents_Grid_GridContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styledComponents/Grid/GridContainer */ "./styledComponents/Grid/GridContainer.jsx");

var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/components/Home/Events.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tquery ALL_EVENTS_QUERY($genre: String! = \"music\") {\n\t\tgetEvents(genre: $genre) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdetails {\n\t\t\t\turl\n\t\t\t\tdescription\n\t\t\t\tstart_time\n\t\t\t\tbio\n\t\t\t\ttags {\n\t\t\t\t\ttitle\n\t\t\t\t\towner\n\t\t\t\t}\n\t\t\t}\n\t\t\tlocation {\n\t\t\t\tvenue\n\t\t\t}\n\t\t\timage_url\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var ALL_EVENTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());

var Events = function Events() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styledComponents_Grid_GridContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      maxWidth: 'calc(100% - 200px)',
      marginLeft: '200px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Upcoming Events Near You"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
    query: ALL_EVENTS_QUERY,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data,
        error = _ref.error,
        loading = _ref.loading;
    if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Loading...");
    if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Error: ", error.message);
    return data.getEvents.map(function (event) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Event__WEBPACK_IMPORTED_MODULE_4__["default"], {
        event: event,
        key: event.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      });
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Events);

/***/ })

})
//# sourceMappingURL=home.js.ddd5faced9a016ccafab.hot-update.js.map