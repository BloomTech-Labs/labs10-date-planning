webpackHotUpdate("static/development/pages/home.js",{

/***/ "./components/Home/Event.js":
/*!**********************************!*\
  !*** ./components/Home/Event.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styledComponents_Grid_GridItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styledComponents/Grid/GridItem */ "./styledComponents/Grid/GridItem.jsx");
/* harmony import */ var _styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styledComponents/CustomButtons/Button */ "./styledComponents/CustomButtons/Button.jsx");
/* harmony import */ var _styledComponents_Card_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styledComponents/Card/Card */ "./styledComponents/Card/Card.jsx");
/* harmony import */ var _styledComponents_Card_CardHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styledComponents/Card/CardHeader */ "./styledComponents/Card/CardHeader.jsx");
/* harmony import */ var _styledComponents_Card_CardBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styledComponents/Card/CardBody */ "./styledComponents/Card/CardBody.jsx");
/* harmony import */ var _styledComponents_Typography_Warning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styledComponents/Typography/Warning */ "./styledComponents/Typography/Warning.jsx");
/* harmony import */ var _static_jss_material_kit_pro_react_views_componentsSections_sectionCards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../static/jss/material-kit-pro-react/views/componentsSections/sectionCards */ "./static/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx");
var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/components/Home/Event.js";












var Event = function Event(_ref) {
  var event = _ref.event,
      classes = _ref.classes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styledComponents_Grid_GridItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xs: 12,
    sm: 4,
    md: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styledComponents_Card_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
    blog: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styledComponents_Card_CardHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    image: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#pablo",
    onClick: function onClick(e) {
      return e.preventDefault();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: event.image_url,
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: "url(".concat(event.image_url, ")"),
      opacity: '1'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styledComponents_Card_CardBody__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styledComponents_Typography_Warning__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: classes.cardCategory,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, event.location.venue)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: classes.cardTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#pablo",
    onClick: function onClick(e) {
      return e.preventDefault();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, event.title))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justIcon: true,
    round: true,
    color: "primary",
    style: {
      position: 'absolute',
      zIndex: 1,
      bottom: -18,
      left: 0,
      right: 0,
      margin: '0 auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(_static_jss_material_kit_pro_react_views_componentsSections_sectionCards__WEBPACK_IMPORTED_MODULE_10__["default"])(Event));

/***/ })

})
//# sourceMappingURL=home.js.33e98165b0b4b07d77ce.hot-update.js.map