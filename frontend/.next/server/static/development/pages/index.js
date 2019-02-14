module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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

/***/ "./components/Home/Event.js":
/*!**********************************!*\
  !*** ./components/Home/Event.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Add */ "@material-ui/icons/Add");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
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

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
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

/***/ }),

/***/ "./components/Queries/User.js":
/*!************************************!*\
  !*** ./components/Queries/User.js ***!
  \************************************/
/*! exports provided: default, CURRENT_USER_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_USER_QUERY", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/components/Queries/User.js";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tquery {\n\t\tcurrentUser {\n\t\t\tid\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\tgender\n\t\t\temail\n\t\t\tcreatedAt\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var CURRENT_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());

var User = function User(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    query: CURRENT_USER_QUERY,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), function (payload) {
    return props.children(payload);
  });
};

User.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./components/Sidebar/index.js":
/*!*************************************!*\
  !*** ./components/Sidebar/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/components/Sidebar/index.js";

var style = {
  position: 'fixed',
  left: 0,
  height: '100vh',
  borderRight: '1px solid black',
  width: '200px',
  display: 'flex',
  flexDirection: 'column'
};

var Sidebar = function Sidebar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Dates"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Billing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Settings"));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./components/SplashPage/Login.js":
/*!****************************************!*\
  !*** ./components/SplashPage/Login.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Mail */ "@material-ui/icons/Mail");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../styledComponents/CustomButtons/Button */ "./styledComponents/CustomButtons/Button.jsx");
/* harmony import */ var _styledComponents_Card_Card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../styledComponents/Card/Card */ "./styledComponents/Card/Card.jsx");
/* harmony import */ var _styledComponents_Card_CardHeader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../styledComponents/Card/CardHeader */ "./styledComponents/Card/CardHeader.jsx");
/* harmony import */ var _styledComponents_Card_CardBody__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../styledComponents/Card/CardBody */ "./styledComponents/Card/CardBody.jsx");
/* harmony import */ var _styledComponents_CustomInput_CustomInput__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../styledComponents/CustomInput/CustomInput */ "./styledComponents/CustomInput/CustomInput.jsx");
/* harmony import */ var _static_jss_material_kit_pro_react_views_componentsSections_javascriptStyles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles */ "./static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx");



var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/components/SplashPage/Login.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n\tmutation LOGIN_USER($email: String!, $password: String!) {\n\t\tsignin(email: $email, password: $password) {\n\t\t\tid\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\temail\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



















var LOGIN_USER = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());

var Login = function Login(_ref) {
  var classes = _ref.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    email: '',
    password: ''
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      modalShowing = _useState4[0],
      setModalShowing = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_5__["Mutation"], {
    mutation: LOGIN_USER,
    variables: {
      email: user.email,
      password: user.password
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, function (signin, _ref2) {
    var error = _ref2.error,
        loading = _ref2.loading,
        called = _ref2.called;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
      round: true,
      onClick: function onClick() {
        return setModalShowing(true);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Log In"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7___default.a, {
      classes: {
        root: classes.modalRoot,
        paper: classes.modal + ' ' + classes.modalLogin
      },
      open: modalShowing // TransitionComponent={Transition}
      ,
      keepMounted: true,
      onClose: function onClose() {
        return setModalShowing(false);
      },
      "aria-labelledby": "signup-modal-slide-title",
      "aria-describedby": "signup-modal-slide-description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styledComponents_Card_Card__WEBPACK_IMPORTED_MODULE_16__["default"], {
      plain: true,
      className: classes.modalLoginCard,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10___default.a, {
      id: "login-modal-slide-title",
      disableTypography: true,
      className: classes.modalHeader,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styledComponents_Card_CardHeader__WEBPACK_IMPORTED_MODULE_17__["default"], {
      plain: true,
      color: "primary",
      className: "".concat(classes.textCenter, " ").concat(classes.cardLoginHeader),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, ' ', react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
      simple: true,
      className: classes.modalCloseButton,
      key: "close",
      "aria-label": "Close",
      onClick: function onClick() {
        return setModalShowing(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14___default.a, {
      className: classes.modalClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h5", {
      className: classes.cardTitleWhite,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "Log in"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: classes.socialLine,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
      justIcon: true,
      link: true,
      className: classes.socialLineButton,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
      className: "fab fa-google",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
      justIcon: true,
      link: true,
      className: classes.socialLineButton,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
      className: "fab fa-facebook-square",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
      justIcon: true,
      link: true,
      className: classes.socialLineButton,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
      className: "fab fa-instagram",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11___default.a, {
      id: "login-modal-slide-description",
      className: classes.modalBody,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
      id: "loginform",
      onSubmit: function onSubmit() {
        return signin();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "".concat(classes.description, " ").concat(classes.textCenter),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, "Or Be Classical"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styledComponents_Card_CardBody__WEBPACK_IMPORTED_MODULE_18__["default"], {
      className: classes.cardLoginBody,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styledComponents_CustomInput_CustomInput__WEBPACK_IMPORTED_MODULE_19__["default"], {
      id: "login-modal-email",
      formControlProps: {
        fullWidth: true
      },
      inputProps: {
        startAdornment: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9___default.a, {
          position: "start",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_12___default.a, {
          className: classes.icon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        })),
        placeholder: 'Email...',
        value: user.email,
        onChange: function onChange(e) {
          return setUser(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, user, {
            email: e.target.value
          }));
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styledComponents_CustomInput_CustomInput__WEBPACK_IMPORTED_MODULE_19__["default"], {
      id: "login-modal-pass",
      formControlProps: {
        fullWidth: true
      },
      inputProps: {
        startAdornment: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9___default.a, {
          position: "start",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13___default.a, {
          className: classes.icon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, "lock_outline")),
        placeholder: 'Password...',
        value: user.password,
        onChange: function onChange(e) {
          return setUser(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, user, {
            password: e.target.value
          }));
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8___default.a, {
      className: "".concat(classes.modalFooter, " ").concat(classes.justifyContentCenter),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
      color: "primary",
      simple: true,
      size: "lg",
      onClick: function onClick() {
        signin();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, "Get started")))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(_static_jss_material_kit_pro_react_views_componentsSections_javascriptStyles__WEBPACK_IMPORTED_MODULE_20__["default"])(Login));

/***/ }),

/***/ "./components/SplashPage/Register.js":
/*!*******************************************!*\
  !*** ./components/SplashPage/Register.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Timeline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Timeline */ "@material-ui/icons/Timeline");
/* harmony import */ var _material_ui_icons_Timeline__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Timeline__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Code */ "@material-ui/icons/Code");
/* harmony import */ var _material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Group */ "@material-ui/icons/Group");
/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Face */ "@material-ui/icons/Face");
/* harmony import */ var _material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Email */ "@material-ui/icons/Email");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Check */ "@material-ui/icons/Check");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../styledComponents/CustomButtons/Button */ "./styledComponents/CustomButtons/Button.jsx");
/* harmony import */ var _styledComponents_Card_Card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../styledComponents/Card/Card */ "./styledComponents/Card/Card.jsx");
/* harmony import */ var _styledComponents_Grid_GridContainer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../styledComponents/Grid/GridContainer */ "./styledComponents/Grid/GridContainer.jsx");
/* harmony import */ var _styledComponents_Grid_GridItem__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../styledComponents/Grid/GridItem */ "./styledComponents/Grid/GridItem.jsx");
/* harmony import */ var _styledComponents_CustomInput_CustomInput__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../styledComponents/CustomInput/CustomInput */ "./styledComponents/CustomInput/CustomInput.jsx");
/* harmony import */ var _styledComponents_InfoArea_InfoArea__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../styledComponents/InfoArea/InfoArea */ "./styledComponents/InfoArea/InfoArea.jsx");
/* harmony import */ var _static_jss_material_kit_pro_react_views_componentsSections_javascriptStyles__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles */ "./static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx");

var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/components/SplashPage/Register.js";
























var Register = function Register(_ref) {
  var classes = _ref.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      modalShowing = _useState2[0],
      setModalShowing = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    round: true,
    onClick: function onClick() {
      return setModalShowing(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Sign Up"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4___default.a, {
    classes: {
      root: classes.modalRoot,
      paper: classes.modal + ' ' + classes.modalSignup
    },
    open: modalShowing // TransitionComponent={Transition}
    ,
    keepMounted: true,
    onClose: function onClose() {
      return setModalShowing(false);
    },
    "aria-labelledby": "signup-modal-slide-title",
    "aria-describedby": "signup-modal-slide-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styledComponents_Card_Card__WEBPACK_IMPORTED_MODULE_18__["default"], {
    plain: true,
    className: classes.modalSignupCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "signup-modal-slide-title",
    disableTypography: true,
    className: classes.modalHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    simple: true,
    className: classes.modalCloseButton,
    key: "close",
    "aria-label": "Close",
    onClick: function onClick() {
      return setModalShowing(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_16___default.a, {
    className: classes.modalClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "".concat(classes.cardTitle, " ").concat(classes.modalTitle),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Register")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "signup-modal-slide-description",
    className: classes.modalBody,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styledComponents_Grid_GridContainer__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styledComponents_Grid_GridItem__WEBPACK_IMPORTED_MODULE_20__["default"], {
    xs: 12,
    sm: 5,
    md: 5,
    className: classes.mlAuto,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styledComponents_InfoArea_InfoArea__WEBPACK_IMPORTED_MODULE_22__["default"], {
    className: classes.infoArea,
    title: "Marketing",
    description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "We've created the marketing campaign of the website. It was a very interesting collaboration."),
    icon: _material_ui_icons_Timeline__WEBPACK_IMPORTED_MODULE_9___default.a,
    iconColor: "rose",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styledComponents_InfoArea_InfoArea__WEBPACK_IMPORTED_MODULE_22__["default"], {
    className: classes.infoArea,
    title: "Fully Coded in HTML5",
    description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."),
    icon: _material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_10___default.a,
    iconColor: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styledComponents_InfoArea_InfoArea__WEBPACK_IMPORTED_MODULE_22__["default"], {
    className: classes.infoArea,
    title: "Built Audience",
    description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, "There is also a Fully Customizable CMS Admin Dashboard for this product."),
    icon: _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_11___default.a,
    iconColor: "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styledComponents_Grid_GridItem__WEBPACK_IMPORTED_MODULE_20__["default"], {
    xs: 12,
    sm: 5,
    md: 5,
    className: classes.mrAuto,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.textCenter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    justIcon: true,
    round: true,
    color: "google",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fab fa-google",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    justIcon: true,
    round: true,
    color: "facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fab fa-facebook-f",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    justIcon: true,
    round: true,
    color: "instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fab fa-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: classes.socialTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "or be classical")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: classes.form,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styledComponents_CustomInput_CustomInput__WEBPACK_IMPORTED_MODULE_21__["default"], {
    formControlProps: {
      fullWidth: true,
      className: classes.customFormControlClasses
    },
    inputProps: {
      startAdornment: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_6___default.a, {
        position: "start",
        className: classes.inputAdornment,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_12___default.a, {
        className: classes.inputAdornmentIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      })),
      placeholder: 'Full Name...'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styledComponents_CustomInput_CustomInput__WEBPACK_IMPORTED_MODULE_21__["default"], {
    formControlProps: {
      fullWidth: true,
      className: classes.customFormControlClasses
    },
    inputProps: {
      startAdornment: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_6___default.a, {
        position: "start",
        className: classes.inputAdornment,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_14___default.a, {
        className: classes.inputAdornmentIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      })),
      placeholder: 'Email...'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styledComponents_CustomInput_CustomInput__WEBPACK_IMPORTED_MODULE_21__["default"], {
    formControlProps: {
      fullWidth: true,
      className: classes.customFormControlClasses
    },
    inputProps: {
      startAdornment: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_6___default.a, {
        position: "start",
        className: classes.inputAdornment,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: classes.inputAdornmentIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "lock_outline")),
      placeholder: 'Password...'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    classes: {
      label: classes.label
    },
    control: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7___default.a, {
      tabIndex: -1 // onClick={() => handleToggle(1)}
      ,
      checkedIcon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_15___default.a, {
        className: classes.checkedIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }),
      icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_15___default.a, {
        className: classes.uncheckedIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }),
    label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, "I agree to the ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, "terms and conditions"), "."),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.textCenter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    round: true,
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "Get started")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_static_jss_material_kit_pro_react_views_componentsSections_javascriptStyles__WEBPACK_IMPORTED_MODULE_23__["default"])(Register));

/***/ }),

/***/ "./components/SplashPage/index.js":
/*!****************************************!*\
  !*** ./components/SplashPage/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styledComponents_Parallax_Parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styledComponents/Parallax/Parallax */ "./styledComponents/Parallax/Parallax.jsx");
/* harmony import */ var _styledComponents_Grid_GridContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styledComponents/Grid/GridContainer */ "./styledComponents/Grid/GridContainer.jsx");
/* harmony import */ var _styledComponents_Grid_GridItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styledComponents/Grid/GridItem */ "./styledComponents/Grid/GridItem.jsx");
/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Register */ "./components/SplashPage/Register.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Login */ "./components/SplashPage/Login.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_jss_material_kit_pro_react_views_landingPageStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/jss/material-kit-pro-react/views/landingPageStyle */ "./static/jss/material-kit-pro-react/views/landingPageStyle.jsx");
var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/components/SplashPage/index.js";









var Splash = function Splash(_ref) {
  var classes = _ref.classes;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.scrollTo(0, 0); // document.body.scrollTop = 0;
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styledComponents_Parallax_Parallax__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styledComponents_Grid_GridContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styledComponents_Grid_GridItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 6,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Where will up4 take you?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Trying something new can feel like a chore. Why is that? Are we boring? Unimaginative? Chicken? We don\u2019t think so. Whether it\u2019s a restaurant, an art exhibit, a concert, or something else, you\u2019re surrounded by new ways to enjoy your life. Sign up for Up4 today to let us help you help your dating life."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Register__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Login__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(_static_jss_material_kit_pro_react_views_landingPageStyle__WEBPACK_IMPORTED_MODULE_7__["default"])(Splash));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Sidebar */ "./components/Sidebar/index.js");
/* harmony import */ var _components_Home_Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/Events */ "./components/Home/Events.js");
var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/pages/home.js";




var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Home_Events__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SplashPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SplashPage */ "./components/SplashPage/index.js");
/* harmony import */ var _components_Queries_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Queries/User */ "./components/Queries/User.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./pages/home.js");
var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/pages/index.js";





var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Queries_User__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, function (_ref) {
    var currentUser = _ref.data.currentUser;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, currentUser ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_home__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SplashPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./static/jss/material-kit-pro-react.jsx":
/*!***********************************************!*\
  !*** ./static/jss/material-kit-pro-react.jsx ***!
  \***********************************************/
/*! exports provided: drawerWidth, transition, container, containerFluid, boxShadow, card, defaultFont, primaryColor, secondaryColor, warningColor, dangerColor, successColor, infoColor, roseColor, grayColor, primaryBoxShadow, infoBoxShadow, successBoxShadow, warningBoxShadow, dangerBoxShadow, roseBoxShadow, warningCardHeader, successCardHeader, dangerCardHeader, infoCardHeader, primaryCardHeader, roseCardHeader, cardActions, cardHeader, defaultBoxShadow, title, cardTitle, description, cardLink, cardSubtitle, main, mainRaised, section, sectionDark, sectionDescription, mlAuto, mrAuto, btnLink, coloredShadow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawerWidth", function() { return drawerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "container", function() { return container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerFluid", function() { return containerFluid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxShadow", function() { return boxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "card", function() { return card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFont", function() { return defaultFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryColor", function() { return primaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secondaryColor", function() { return secondaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningColor", function() { return warningColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerColor", function() { return dangerColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successColor", function() { return successColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoColor", function() { return infoColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseColor", function() { return roseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grayColor", function() { return grayColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryBoxShadow", function() { return primaryBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoBoxShadow", function() { return infoBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successBoxShadow", function() { return successBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningBoxShadow", function() { return warningBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerBoxShadow", function() { return dangerBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseBoxShadow", function() { return roseBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningCardHeader", function() { return warningCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successCardHeader", function() { return successCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerCardHeader", function() { return dangerCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoCardHeader", function() { return infoCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryCardHeader", function() { return primaryCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseCardHeader", function() { return roseCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardActions", function() { return cardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardHeader", function() { return cardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBoxShadow", function() { return defaultBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardTitle", function() { return cardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "description", function() { return description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardLink", function() { return cardLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardSubtitle", function() { return cardSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainRaised", function() { return mainRaised; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "section", function() { return section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sectionDark", function() { return sectionDark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sectionDescription", function() { return sectionDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mlAuto", function() { return mlAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrAuto", function() { return mrAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btnLink", function() { return btnLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coloredShadow", function() { return coloredShadow; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");


/*!

 =========================================================
 * Material Kit PRO React - v1.2.0 based on Material Kit PRO - v2.0.3
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-kit-pro-react
 * Copyright 2018 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/ct-material-kit-pro-react/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
// ##############################
// // // Variables - Styles that are used on more than one component
// #############################
var drawerWidth = 260;
var transition = {
  transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)'
};
var containerFluid = {
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '100%'
};

var container = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, containerFluid, {
  '@media (min-width: 576px)': {
    maxWidth: '540px'
  },
  '@media (min-width: 768px)': {
    maxWidth: '720px'
  },
  '@media (min-width: 992px)': {
    maxWidth: '960px'
  },
  '@media (min-width: 1200px)': {
    maxWidth: '1140px'
  }
});

var boxShadow = {
  boxShadow: '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
};
var card = {
  display: 'inline-block',
  position: 'relative',
  width: '100%',
  margin: '25px 0',
  boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
  borderRadius: '3px',
  color: 'rgba(0, 0, 0, 0.87)',
  background: '#fff'
};
var defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: '300',
  lineHeight: '1.5em'
};
var primaryColor = '#4cb5ae';
var secondaryColor = '#fafafa';
var warningColor = '#ff9800';
var dangerColor = '#f44336';
var successColor = '#4caf50';
var infoColor = '#00acc1';
var roseColor = '#e91e63';
var grayColor = '#cabac8';
var primaryBoxShadow = {
  boxShadow: '0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)'
};
var infoBoxShadow = {
  boxShadow: '0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)'
};
var successBoxShadow = {
  boxShadow: '0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)'
};
var warningBoxShadow = {
  boxShadow: '0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)'
};
var dangerBoxShadow = {
  boxShadow: '0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)'
};
var roseBoxShadow = {
  boxShadow: '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)'
};

var warningCardHeader = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  color: '#fff',
  background: 'linear-gradient(60deg, #ffa726, #fb8c00)'
}, warningBoxShadow);

var successCardHeader = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  color: '#fff',
  background: 'linear-gradient(60deg, #66bb6a, #43a047)'
}, successBoxShadow);

var dangerCardHeader = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  color: '#fff',
  background: 'linear-gradient(60deg, #ef5350, #e53935)'
}, dangerBoxShadow);

var infoCardHeader = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  color: '#fff',
  background: 'linear-gradient(60deg, #26c6da, #00acc1)'
}, infoBoxShadow);

var primaryCardHeader = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  color: '#fff',
  background: 'linear-gradient(60deg, #5dbcb6, #2D9A92)'
}, primaryBoxShadow);

var roseCardHeader = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  color: '#fff',
  background: 'linear-gradient(60deg, #ec407a, #d81b60)'
}, roseBoxShadow);

var cardActions = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  margin: '0 20px 10px',
  paddingTop: '10px',
  borderTop: '1px solid #eeeeee',
  height: 'auto'
}, defaultFont);

var cardHeader = {
  margin: '-30px 15px 0',
  borderRadius: '3px',
  padding: '15px'
};
var defaultBoxShadow = {
  border: '0',
  borderRadius: '3px',
  boxShadow: '0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  padding: '10px 0',
  transition: 'all 150ms ease 0s'
};
var title = {
  color: '#3C4858',
  textDecoration: 'none',
  fontWeight: '700',
  marginTop: '30px',
  marginBottom: '25px',
  minHeight: '32px',
  fontFamily: "\"Roboto Slab\", \"Times New Roman\", serif"
};
var cardTitle = {
  '&, & a': Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, title, {
    marginTop: '.625rem',
    marginBottom: '0.75rem',
    minHeight: 'auto'
  })
};
var cardLink = {
  '& + $cardLink': {
    marginLeft: '1.25rem'
  }
};
var cardSubtitle = {
  marginBottom: '0',
  marginTop: '-.375rem'
};
var main = {
  background: '#FFFFFF',
  position: 'relative',
  zIndex: '3'
};
var mainRaised = {
  '@media (max-width: 576px)': {
    marginTop: '-30px'
  },
  '@media (max-width: 830px)': {
    marginLeft: '10px',
    marginRight: '10px'
  },
  margin: '-60px 30px 0px',
  borderRadius: '6px',
  boxShadow: '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
};
var section = {
  backgroundPosition: '50%',
  backgroundSize: 'cover'
};
var sectionDark = {
  backgroundColor: '#343434',
  background: 'radial-gradient(ellipse at center,#585858 0,#232323 100%)'
};
var sectionDescription = {
  marginTop: '130px'
};
var description = {
  color: '#999'
};
var mlAuto = {
  marginLeft: 'auto'
};
var mrAuto = {
  marginRight: 'auto'
};
var btnLink = {
  backgroundColor: 'transparent',
  boxShdow: 'none',
  marginTop: '5px',
  marginBottom: '5px'
};
var coloredShadow = {
  // some jss/css to make the cards look a bit better on Internet Explorer
  '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)': {
    display: 'none !important'
  },
  transform: 'scale(0.94)',
  top: '12px',
  filter: 'blur(12px)',
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  zIndex: '-1',
  transition: 'opacity .45s',
  opacity: '0'
};


/***/ }),

/***/ "./static/jss/material-kit-pro-react/components/buttonStyle.jsx":
/*!**********************************************************************!*\
  !*** ./static/jss/material-kit-pro-react/components/buttonStyle.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../material-kit-pro-react */ "./static/jss/material-kit-pro-react.jsx");
// ##############################
// // // Button styles
// #############################

var buttonStyle = {
  button: {
    minHeight: 'auto',
    minWidth: 'auto',
    backgroundColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["grayColor"],
    color: '#FFFFFF',
    boxShadow: '0 2px 2px 0 rgba(202, 186, 200, 0.14), 0 3px 1px -2px rgba(202, 186, 200, 0.2), 0 1px 5px 0 rgba(202, 186, 200, 0.12)',
    border: 'none',
    borderRadius: '3px',
    position: 'relative',
    padding: '12px 30px',
    margin: '.3125rem 1px',
    fontSize: '12px',
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: '0',
    willChange: 'box-shadow, transform',
    transition: 'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    lineHeight: '1.42857143',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    touchAction: 'manipulation',
    cursor: 'pointer',
    '&:hover,&:focus': {
      color: '#FFFFFF',
      backgroundColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["grayColor"],
      boxShadow: '0 14px 26px -12px rgba(202, 186, 200, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(202, 186, 200, 0.2)'
    },
    '& .fab,& .fas,& .far,& .fal,& .material-icons': {
      position: 'relative',
      display: 'inline-block',
      top: '0',
      marginTop: '-1em',
      marginBottom: '-1em',
      fontSize: '1.1rem',
      marginRight: '4px',
      verticalAlign: 'middle'
    },
    '& svg': {
      position: 'relative',
      display: 'inline-block',
      top: '0',
      width: '18px',
      height: '18px',
      marginRight: '4px',
      verticalAlign: 'middle'
    },
    '&$justIcon': {
      '& .fab,& .fas,& .far,& .fal,& .material-icons': {
        marginTop: '0px',
        marginRight: '0px',
        position: 'absolute',
        width: '100%',
        transform: 'none',
        left: '0px',
        top: '0px',
        height: '100%',
        lineHeight: '41px',
        fontSize: '20px'
      }
    }
  },
  fullWidth: {
    width: '100%'
  },
  primary: {
    backgroundColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
    boxShadow: '0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
      boxShadow: '0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)'
    }
  },
  secondary: {
    color: 'rgba(0,0,0,.87)',
    backgroundColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["secondaryColor"],
    boxShadow: '0 2px 2px 0 hsla(0,0%,98%,.14), 0 3px 1px -2px hsla(0,0%,98%,.2), 0 1px 5px 0 hsla(0,0%,98%,.12)',
    '&:hover,&:focus': {
      boxShdow: '0 14px 26px -12px hsla(0,0%,98%,.42), 0 4px 23px 0 rgba(0,0,0,.12), 0 8px 10px -5px hsla(0,0%,98%,.2)',
      color: 'rgba(0,0,0,.87)',
      backgroundColor: '#f2f2f2'
    }
  },
  info: {
    backgroundColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["infoColor"],
    boxShadow: '0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["infoColor"],
      boxShadow: '0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)'
    }
  },
  success: {
    backgroundColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["successColor"],
    boxShadow: '0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["successColor"],
      boxShadow: '0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)'
    }
  },
  warning: {
    backgroundColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["warningColor"],
    boxShadow: '0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["warningColor"],
      boxShadow: '0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)'
    }
  },
  danger: {
    backgroundColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["dangerColor"],
    boxShadow: '0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["dangerColor"],
      boxShadow: '0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)'
    }
  },
  rose: {
    backgroundColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["roseColor"],
    boxShadow: '0 2px 2px 0 rgba(233, 30, 99, 0.14), 0 3px 1px -2px rgba(233, 30, 99, 0.2), 0 1px 5px 0 rgba(233, 30, 99, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["roseColor"],
      boxShadow: '0 14px 26px -12px rgba(233, 30, 99, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2)'
    }
  },
  white: {
    '&,&:focus,&:hover': {
      backgroundColor: '#FFFFFF',
      color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["grayColor"]
    }
  },
  twitter: {
    backgroundColor: '#55acee',
    color: '#fff',
    boxShadow: '0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12)',
    '&:hover,&:focus,&:visited': {
      backgroundColor: '#55acee',
      color: '#fff',
      boxShadow: '0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)'
    }
  },
  facebook: {
    backgroundColor: '#3b5998',
    color: '#fff',
    boxShadow: '0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: '#3b5998',
      color: '#fff',
      boxShadow: '0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2)'
    }
  },
  google: {
    backgroundColor: '#dd4b39',
    color: '#fff',
    boxShadow: '0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: '#dd4b39',
      color: '#fff',
      boxShadow: '0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2)'
    }
  },
  linkedin: {
    backgroundColor: '#0976b4',
    color: '#fff',
    boxShadow: '0 2px 2px 0 rgba(9, 118, 180, 0.14), 0 3px 1px -2px rgba(9, 118, 180, 0.2), 0 1px 5px 0 rgba(9, 118, 180, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: '#0976b4',
      color: '#fff',
      boxShadow: '0 14px 26px -12px rgba(9, 118, 180, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(9, 118, 180, 0.2)'
    }
  },
  pinterest: {
    backgroundColor: '#cc2127',
    color: '#fff',
    boxShadow: '0 2px 2px 0 rgba(204, 33, 39, 0.14), 0 3px 1px -2px rgba(204, 33, 39, 0.2), 0 1px 5px 0 rgba(204, 33, 39, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: '#cc2127',
      color: '#fff',
      boxShadow: '0 14px 26px -12px rgba(204, 33, 39, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(204, 33, 39, 0.2)'
    }
  },
  youtube: {
    backgroundColor: '#e52d27',
    color: '#fff',
    boxShadow: '0 2px 2px 0 rgba(229, 45, 39, 0.14), 0 3px 1px -2px rgba(229, 45, 39, 0.2), 0 1px 5px 0 rgba(229, 45, 39, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: '#e52d27',
      color: '#fff',
      boxShadow: '0 14px 26px -12px rgba(229, 45, 39, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(229, 45, 39, 0.2)'
    }
  },
  tumblr: {
    backgroundColor: '#35465c',
    color: '#fff',
    boxShadow: '0 2px 2px 0 rgba(53, 70, 92, 0.14), 0 3px 1px -2px rgba(53, 70, 92, 0.2), 0 1px 5px 0 rgba(53, 70, 92, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: '#35465c',
      color: '#fff',
      boxShadow: '0 14px 26px -12px rgba(53, 70, 92, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(53, 70, 92, 0.2)'
    }
  },
  github: {
    backgroundColor: '#333333',
    color: '#fff',
    boxShadow: '0 2px 2px 0 rgba(51, 51, 51, 0.14), 0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: '#333333',
      color: '#fff',
      boxShadow: '0 14px 26px -12px rgba(51, 51, 51, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(51, 51, 51, 0.2)'
    }
  },
  behance: {
    backgroundColor: '#1769ff',
    color: '#fff',
    boxShadow: '0 2px 2px 0 rgba(23, 105, 255, 0.14), 0 3px 1px -2px rgba(23, 105, 255, 0.2), 0 1px 5px 0 rgba(23, 105, 255, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: '#1769ff',
      color: '#fff',
      boxShadow: '0 14px 26px -12px rgba(23, 105, 255, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(23, 105, 255, 0.2)'
    }
  },
  dribbble: {
    backgroundColor: '#ea4c89',
    color: '#fff',
    boxShadow: '0 2px 2px 0 rgba(234, 76, 137, 0.14), 0 3px 1px -2px rgba(234, 76, 137, 0.2), 0 1px 5px 0 rgba(234, 76, 137, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: '#ea4c89',
      color: '#fff',
      boxShadow: '0 14px 26px -12px rgba(234, 76, 137, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(234, 76, 137, 0.2)'
    }
  },
  reddit: {
    backgroundColor: '#ff4500',
    color: ' #fff',
    boxShadow: '0 2px 2px 0 rgba(255, 69, 0, 0.14), 0 3px 1px -2px rgba(255, 69, 0, 0.2), 0 1px 5px 0 rgba(255, 69, 0, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: '#ff4500',
      color: ' #fff',
      boxShadow: '0 14px 26px -12px rgba(255, 69, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 69, 0, 0.2)'
    }
  },
  instagram: {
    backgroundColor: '#125688',
    color: ' #fff',
    boxShadow: '0 2px 2px 0 rgba(18, 86, 136, 0.14), 0 3px 1px -2px rgba(18, 86, 136, 0.2), 0 1px 5px 0 rgba(18, 86, 136, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: '#145f96',
      color: ' #fff',
      boxShadow: '0 14px 26px -12px rgba(18, 86, 136, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(18, 86, 136, 0.2)'
    }
  },
  simple: {
    '&,&:focus,&:hover': {
      color: '#FFFFFF',
      background: 'transparent',
      boxShadow: 'none'
    },
    '&$primary': {
      '&,&:focus,&:hover,&:visited': {
        color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["primaryColor"]
      }
    },
    '&$info': {
      '&,&:focus,&:hover,&:visited': {
        color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["infoColor"]
      }
    },
    '&$success': {
      '&,&:focus,&:hover,&:visited': {
        color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["successColor"]
      }
    },
    '&$warning': {
      '&,&:focus,&:hover,&:visited': {
        color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["warningColor"]
      }
    },
    '&$rose': {
      '&,&:focus,&:hover,&:visited': {
        color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["roseColor"]
      }
    },
    '&$danger': {
      '&,&:focus,&:hover,&:visited': {
        color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["dangerColor"]
      }
    },
    '&$twitter': {
      '&,&:focus,&:hover,&:visited': {
        color: '#55acee'
      }
    },
    '&$facebook': {
      '&,&:focus,&:hover,&:visited': {
        color: '#3b5998'
      }
    },
    '&$google': {
      '&,&:focus,&:hover,&:visited': {
        color: '#dd4b39'
      }
    },
    '&$linkedin': {
      '&,&:focus,&:hover,&:visited': {
        color: '#0976b4'
      }
    },
    '&$pinterest': {
      '&,&:focus,&:hover,&:visited': {
        color: '#cc2127'
      }
    },
    '&$youtube': {
      '&,&:focus,&:hover,&:visited': {
        color: '#e52d27'
      }
    },
    '&$tumblr': {
      '&,&:focus,&:hover,&:visited': {
        color: '#35465c'
      }
    },
    '&$github': {
      '&,&:focus,&:hover,&:visited': {
        color: '#333333'
      }
    },
    '&$behance': {
      '&,&:focus,&:hover,&:visited': {
        color: '#1769ff'
      }
    },
    '&$dribbble': {
      '&,&:focus,&:hover,&:visited': {
        color: '#ea4c89'
      }
    },
    '&$reddit': {
      '&,&:focus,&:hover,&:visited': {
        color: '#ff4500'
      }
    },
    '&$instagram': {
      '&,&:focus,&:hover,&:visited': {
        color: '#125688'
      }
    }
  },
  transparent: {
    '&,&:focus,&:hover': {
      color: 'inherit',
      background: 'transparent',
      boxShadow: 'none'
    }
  },
  disabled: {
    opacity: '0.65',
    pointerEvents: 'none'
  },
  lg: {
    padding: '1.125rem 2.25rem',
    fontSize: '0.875rem',
    lineHeight: '1.333333',
    borderRadius: '0.2rem'
  },
  sm: {
    padding: '0.40625rem 1.25rem',
    fontSize: '0.6875rem',
    lineHeight: '1.5',
    borderRadius: '0.2rem'
  },
  round: {
    borderRadius: '30px'
  },
  block: {
    width: '100% !important'
  },
  link: {
    '&,&:hover,&:focus': {
      backgroundColor: 'transparent',
      color: '#999999',
      boxShadow: 'none'
    }
  },
  justIcon: {
    paddingLeft: '12px',
    paddingRight: '12px',
    fontSize: '20px',
    height: '41px',
    minWidth: '41px',
    width: '41px',
    '& .fab,& .fas,& .far,& .fal,& svg,& .material-icons': {
      marginRight: '0px'
    },
    '&$lg': {
      height: '57px',
      minWidth: '57px',
      width: '57px',
      lineHeight: '56px',
      '& .fab,& .fas,& .far,& .fal,& .material-icons': {
        fontSize: '32px',
        lineHeight: '56px'
      },
      '& svg': {
        width: '32px',
        height: '32px'
      }
    },
    '&$sm': {
      height: '30px',
      minWidth: '30px',
      width: '30px',
      '& .fab,& .fas,& .far,& .fal,& .material-icons': {
        fontSize: '17px',
        lineHeight: '29px'
      },
      '& svg': {
        width: '17px',
        height: '17px'
      }
    }
  },
  fileButton: {// display: "inline-block"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (buttonStyle);

/***/ }),

/***/ "./static/jss/material-kit-pro-react/components/cardBodyStyle.jsx":
/*!************************************************************************!*\
  !*** ./static/jss/material-kit-pro-react/components/cardBodyStyle.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cardBodyStyle = {
  cardBody: {
    padding: "0.9375rem 1.875rem",
    flex: "1 1 auto",
    WebkitBoxFlex: "1"
  },
  cardBodyBackground: {
    position: "relative",
    zIndex: "2",
    minHeight: "280px",
    paddingTop: "40px",
    paddingBottom: "40px",
    maxWidth: "440px",
    margin: "0 auto"
  },
  cardBodyPlain: {
    paddingLeft: "5px",
    paddingRight: "5px"
  },
  cardBodyFormHorizontal: {
    paddingLeft: "15px",
    paddingRight: "15px",
    "& form": {
      margin: "0"
    }
  },
  cardPricing: {
    padding: "15px!important",
    margin: "0px!important"
  },
  cardSignup: {
    padding: "0px 30px 0px 30px"
  },
  cardBodyColor: {
    borderRadius: "6px",
    "&": {
      "h1, h2, h3": {
        "& small": {
          color: "rgba(255, 255, 255, 0.8)"
        }
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (cardBodyStyle);

/***/ }),

/***/ "./static/jss/material-kit-pro-react/components/cardHeaderStyle.jsx":
/*!**************************************************************************!*\
  !*** ./static/jss/material-kit-pro-react/components/cardHeaderStyle.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../material-kit-pro-react */ "./static/jss/material-kit-pro-react.jsx");

var cardHeaderStyle = {
  cardHeader: {
    borderRadius: '3px',
    padding: '1rem 15px',
    marginLeft: '15px',
    marginRight: '15px',
    marginTop: '-30px',
    border: '0',
    marginBottom: '0'
  },
  cardHeaderPlain: {
    marginLeft: '0px',
    marginRight: '0px',
    '&$cardHeaderImage': {
      margin: '0 !important'
    }
  },
  cardHeaderImage: {
    position: 'relative',
    padding: '0',
    zIndex: '1',
    marginLeft: '15px',
    marginRight: '15px',
    marginTop: '-30px',
    borderRadius: '6px',
    '& img': {
      width: '100%',
      borderRadius: '6px',
      pointerEvents: 'none',
      boxShadow: '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
    },
    '& a': {
      display: 'block'
    }
  },
  noShadow: {
    '& img': {
      boxShadow: 'none !important'
    }
  },
  cardHeaderContact: {
    margin: '0 15px',
    marginTop: '-20px'
  },
  cardHeaderSignup: {
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '-40px',
    padding: '20px 0',
    width: '100%',
    marginBottom: '15px'
  },
  warningCardHeader: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["warningCardHeader"],
  successCardHeader: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["successCardHeader"],
  dangerCardHeader: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["dangerCardHeader"],
  infoCardHeader: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["infoCardHeader"],
  primaryCardHeader: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["primaryCardHeader"],
  roseCardHeader: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["roseCardHeader"]
};
/* harmony default export */ __webpack_exports__["default"] = (cardHeaderStyle);

/***/ }),

/***/ "./static/jss/material-kit-pro-react/components/cardStyle.jsx":
/*!********************************************************************!*\
  !*** ./static/jss/material-kit-pro-react/components/cardStyle.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import {
//
// } from "assets/jss/material-kit-pro-react.jsx";
var cardStyle = {
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff",
    width: "100%",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    // some jss/css to make the cards look a bit better on Internet Explorer
    "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
      display: "inline-block !important"
    }
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardProfile: {
    marginTop: "30px",
    textAlign: "center"
  },
  cardBlog: {
    marginTop: "60px"
  },
  cardRaised: {
    boxShadow: "0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  cardBackground: {
    backgroundPosition: "50%",
    backgroundSize: "cover",
    textAlign: "center",
    color: "#fff",
    "& h3": {
      color: "#fff !important"
    },
    "& p": {
      color: "rgba(255,255,255,0.7)!important"
    },
    "&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""',
      backgroundColor: "rgba(0, 0, 0, 0.56)",
      borderRadius: "6px"
    },
    "& small": {
      color: "rgba(255, 255, 255, 0.7) !important"
    }
  },
  cardPricing: {
    textAlign: "center",
    "&:after": {
      backgroundColor: "rgba(0, 0, 0, 0.7) !important"
    },
    "& ul": {
      listStyle: "none",
      padding: 0,
      maxWidth: "240px",
      margin: "10px auto"
    },
    "& ul li": {
      color: "#999999",
      textAlign: "center",
      padding: "12px 0px",
      borderBottom: "1px solid rgba(153,153,153,0.3)"
    },
    "& ul li:last-child": {
      border: 0
    },
    "& ul li b": {
      color: "#3c4858"
    },
    "& h1": {
      marginTop: "30px"
    },
    "& h1 small": {
      display: "inline-flex",
      height: 0,
      fontSize: "18px"
    },
    "& h1 small:first-child": {
      position: "relative",
      top: "-17px",
      fontSize: "26px"
    },
    "& ul li svg,& ul li .fab,& ul li .fas,& ul li .far,& ul li .fal,& ul li .material-icons": {
      position: "relative",
      top: "7px"
    }
  },
  cardPricingColor: {
    "& ul li": {
      color: "#fff",
      borderColor: "rgba(255,255,255,0.3)",
      "& b, & svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
        color: "#fff",
        fontWeight: "700"
      }
    }
  },
  cardProduct: {
    marginTop: "30px"
  },
  primary: {
    background: "linear-gradient(60deg,#ab47bc,#7b1fa2)",
    "& h1 small": {
      color: "rgba(255, 255, 255, 0.8)"
    },
    color: "#FFFFFF"
  },
  info: {
    background: "linear-gradient(60deg,#26c6da,#0097a7)",
    "& h1 small": {
      color: "rgba(255, 255, 255, 0.8)"
    },
    color: "#FFFFFF"
  },
  success: {
    background: "linear-gradient(60deg,#66bb6a,#388e3c)",
    "& h1 small": {
      color: "rgba(255, 255, 255, 0.8)"
    },
    color: "#FFFFFF"
  },
  warning: {
    background: "linear-gradient(60deg,#ffa726,#f57c00)",
    "& h1 small": {
      color: "rgba(255, 255, 255, 0.8)"
    },
    color: "#FFFFFF"
  },
  danger: {
    background: "linear-gradient(60deg,#ef5350,#d32f2f)",
    "& h1 small": {
      color: "rgba(255, 255, 255, 0.8)"
    },
    color: "#FFFFFF"
  },
  rose: {
    background: "linear-gradient(60deg,#ec407a,#c2185b)",
    "& h1 small": {
      color: "rgba(255, 255, 255, 0.8)"
    },
    color: "#FFFFFF"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (cardStyle);

/***/ }),

/***/ "./static/jss/material-kit-pro-react/components/customInputStyle.jsx":
/*!***************************************************************************!*\
  !*** ./static/jss/material-kit-pro-react/components/customInputStyle.jsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../material-kit-pro-react */ "./static/jss/material-kit-pro-react.jsx");


var customInputStyle = {
  disabled: {
    '&:before': {
      backgroundColor: 'transparent !important'
    }
  },
  underline: {
    '&:hover:not($disabled):before,&:before': {
      borderBottomColor: '#D2D2D2 !important',
      borderBottomWidth: '1px !important'
    },
    '&:after': {
      borderBottomColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["primaryColor"]
    }
  },
  underlineError: {
    '&:after': {
      borderBottomColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["dangerColor"]
    }
  },
  underlineSuccess: {
    '&:after': {
      borderBottomColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["successColor"]
    }
  },
  labelRoot: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["defaultFont"], {
    color: '#AAAAAA !important',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '1.42857',
    top: '10px',
    '& + $underline': {
      marginTop: '0px'
    }
  }),
  labelRootError: {
    color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["dangerColor"] + ' !important'
  },
  labelRootSuccess: {
    color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["successColor"] + ' !important'
  },
  feedback: {
    position: 'absolute',
    bottom: '4px',
    right: '0',
    zIndex: '2',
    display: 'block',
    width: '24px',
    height: '24px',
    textAlign: 'center',
    pointerEvents: 'none'
  },
  formControl: {
    margin: '0 0 17px 0',
    paddingTop: '27px',
    position: 'relative',
    '& svg,& .fab,& .far,& .fal,& .fas,& .material-icons': {
      color: '#495057'
    }
  },
  whiteUnderline: {
    '&:hover:not($disabled):before,&:before': {
      borderBottomColor: '#FFFFFF'
    },
    '&:after': {
      borderBottomColor: '#FFFFFF'
    }
  },
  input: {
    color: '#495057',
    '&,&::placeholder': {
      fontSize: '14px',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: '400',
      lineHeight: '1.42857',
      opacity: '1'
    },
    '&::placeholder': {
      color: '#AAAAAA'
    }
  },
  whiteInput: {
    '&,&::placeholder': {
      color: '#FFFFFF',
      opacity: '1'
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (customInputStyle);

/***/ }),

/***/ "./static/jss/material-kit-pro-react/components/infoStyle.jsx":
/*!********************************************************************!*\
  !*** ./static/jss/material-kit-pro-react/components/infoStyle.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../material-kit-pro-react */ "./static/jss/material-kit-pro-react.jsx");

// ##############################
// // // Info component styles
// #############################

var infoStyle = {
  infoArea: {
    maxWidth: '360px',
    margin: '0 auto',
    padding: '70px 0 30px'
  },
  iconWrapper: {
    float: 'left',
    marginTop: '24px',
    marginRight: '10px'
  },
  primary: {
    color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["primaryColor"]
  },
  warning: {
    color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["warningColor"]
  },
  danger: {
    color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["dangerColor"]
  },
  success: {
    color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["successColor"]
  },
  info: {
    color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["infoColor"]
  },
  rose: {
    color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["roseColor"]
  },
  gray: {
    color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["grayColor"]
  },
  icon: {
    width: '2.25rem',
    height: '2.25rem',
    fontSize: '2.25rem'
  },
  descriptionWrapper: {
    color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["grayColor"],
    overflow: 'hidden'
  },
  title: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["title"], {
    margin: '1.75rem 0 0.875rem !important',
    minHeight: 'unset'
  }),
  description: {
    color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["grayColor"],
    overflow: 'hidden',
    marginTop: '0px',
    '& p': {
      color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["grayColor"],
      fontSize: '14px'
    }
  },
  iconWrapperVertical: {
    float: 'none'
  },
  iconVertical: {
    width: '61px',
    height: '61px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (infoStyle);

/***/ }),

/***/ "./static/jss/material-kit-pro-react/components/parallaxStyle.jsx":
/*!************************************************************************!*\
  !*** ./static/jss/material-kit-pro-react/components/parallaxStyle.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var parallaxStyle = {
  parallax: {
    height: "100vh",
    maxHeight: "1600px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "50%",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center"
  },
  filter: {},
  primaryColor: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(225,190,231,.56),rgba(186,104,200,.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  roseColor: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(248,187,208,.56),rgba(240,98,146,.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  darkColor: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  infoColor: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(178,235,242,.56),rgba(77,208,225,.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  successColor: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(165,214,167,.56),rgba(102,187,106,.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  warningColor: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(255,224,178,.56),rgba(255,183,77,.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  dangerColor: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,hsla(0,73%,77%,.56),rgba(239,83,80,.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  small: {
    height: "65vh",
    minHeight: "65vh",
    maxHeight: "650px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (parallaxStyle);

/***/ }),

/***/ "./static/jss/material-kit-pro-react/components/typographyStyle.jsx":
/*!**************************************************************************!*\
  !*** ./static/jss/material-kit-pro-react/components/typographyStyle.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../material-kit-pro-react */ "./static/jss/material-kit-pro-react.jsx");

// ##############################
// // // Typography styles
// #############################

var typographyStyle = {
  defaultFontStyle: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["defaultFont"], {
    fontSize: '14px'
  }),
  defaultHeaderMargins: {
    marginTop: '20px',
    marginBottom: '10px'
  },
  quote: {
    padding: '10px 20px',
    margin: '0 0 20px',
    fontSize: '1.25rem',
    borderLeft: '5px solid #eee'
  },
  quoteText: {
    margin: '0 0 10px',
    fontStyle: 'italic'
  },
  quoteAuthor: {
    display: 'block',
    fontSize: '80%',
    lineHeight: '1.42857143',
    color: '#777'
  },
  mutedText: {
    '&, & *': {
      color: '#6c757d',
      display: 'inline-block'
    }
  },
  primaryText: {
    '&, & *': {
      color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["primaryColor"],
      display: 'inline-block'
    }
  },
  infoText: {
    '&, & *': {
      color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["infoColor"],
      display: 'inline-block'
    }
  },
  successText: {
    '&, & *': {
      color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["successColor"],
      display: 'inline-block'
    }
  },
  warningText: {
    '&, & *': {
      color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["warningColor"],
      display: 'inline-block'
    }
  },
  dangerText: {
    '&, & *': {
      color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["dangerColor"],
      display: 'inline-block'
    }
  },
  roseText: {
    '&, & *': {
      color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["roseColor"],
      display: 'inline-block'
    }
  },
  smallText: {
    fontSize: '65%',
    fontWeight: '400',
    lineHeight: '1',
    color: '#777'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (typographyStyle);

/***/ }),

/***/ "./static/jss/material-kit-pro-react/customCheckboxRadioSwitchStyle.jsx":
/*!******************************************************************************!*\
  !*** ./static/jss/material-kit-pro-react/customCheckboxRadioSwitchStyle.jsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../material-kit-pro-react */ "./static/jss/material-kit-pro-react.jsx");
// ##############################
// // // Checkbox, Radio and Switch styles
// #############################

var customCheckboxRadioSwitch = {
  checkRoot: {
    padding: '14px'
  },
  radioRoot: {
    padding: '16px'
  },
  checkboxAndRadio: {
    position: 'relative',
    display: 'block',
    marginTop: '10px',
    marginBottom: '10px'
  },
  checkboxAndRadioHorizontal: {
    position: 'relative',
    display: 'block',
    '&:first-child': {
      marginTop: '10px'
    },
    '&:not(:first-child)': {
      marginTop: '-14px'
    },
    marginTop: '0',
    marginBottom: '0'
  },
  checked: {
    color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["primaryColor"] + '!important'
  },
  checkedIcon: {
    width: '20px',
    height: '20px',
    border: '1px solid rgba(0, 0, 0, 0.84)',
    borderRadius: '3px'
  },
  uncheckedIcon: {
    width: '0px',
    height: '0px',
    padding: '9px',
    border: '1px solid rgba(0, 0, 0, .54)',
    borderRadius: '3px'
  },
  disabledCheckboxAndRadio: {
    '& $checkedIcon,& $uncheckedIcon,& $radioChecked,& $radioUnchecked': {
      borderColor: '#000000',
      opacity: '0.26',
      color: '#000000'
    }
  },
  label: {
    cursor: 'pointer',
    paddingLeft: '0',
    color: '#AAAAAA',
    fontSize: '14px',
    lineHeight: '1.428571429',
    fontWeight: '400',
    display: 'inline-flex',
    transition: '0.3s ease all'
  },
  labelHorizontal: {
    color: 'rgba(0, 0, 0, 0.26)',
    cursor: 'pointer',
    display: 'inline-flex',
    fontSize: '14px',
    lineHeight: '1.428571429',
    fontWeight: '400',
    paddingTop: '39px',
    marginRight: '0',
    '@media (min-width: 992px)': {
      float: 'right'
    }
  },
  labelHorizontalRadioCheckbox: {
    paddingTop: '22px'
  },
  labelLeftHorizontal: {
    color: 'rgba(0, 0, 0, 0.26)',
    cursor: 'pointer',
    display: 'inline-flex',
    fontSize: '14px',
    lineHeight: '1.428571429',
    fontWeight: '400',
    paddingTop: '22px',
    marginRight: '0'
  },
  labelError: {
    color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["dangerColor"]
  },
  radio: {
    color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["primaryColor"] + '!important'
  },
  radioChecked: {
    width: '16px',
    height: '16px',
    border: '1px solid ' + _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
    borderRadius: '50%'
  },
  radioUnchecked: {
    width: '0px',
    height: '0px',
    padding: '7px',
    border: '1px solid rgba(0, 0, 0, .54)',
    borderRadius: '50%'
  },
  inlineChecks: {
    marginTop: '8px'
  },
  iconCheckbox: {
    height: '116px',
    width: '116px',
    color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["grayColor"],
    '& > span:first-child': {
      borderWidth: '4px',
      borderStyle: 'solid',
      borderColor: '#CCCCCC',
      textAlign: 'center',
      verticalAlign: 'middle',
      borderRadius: '50%',
      color: 'inherit',
      margin: '0 auto 20px',
      transition: 'all 0.2s'
    },
    '&:hover': {
      color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["roseColor"],
      '& > span:first-child': {
        borderColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["roseColor"]
      }
    }
  },
  iconCheckboxChecked: {
    color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["roseColor"],
    '& > span:first-child': {
      borderColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["roseColor"]
    }
  },
  iconCheckboxIcon: {
    fontSize: '40px',
    lineHeight: '111px'
  },
  switchBase: {
    color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["primaryColor"] + '!important'
  },
  switchIcon: {
    boxShadow: '0 1px 3px 1px rgba(0, 0, 0, 0.4)',
    color: '#FFFFFF !important',
    border: '1px solid rgba(0, 0, 0, .54)',
    transform: 'translateX(-4px)!important'
  },
  switchIconChecked: {
    borderColor: '#9c27b0',
    transform: 'translateX(0px)!important'
  },
  switchBar: {
    width: '30px',
    height: '15px',
    backgroundColor: 'rgb(80, 80, 80)',
    borderRadius: '15px',
    opacity: '0.7!important'
  },
  switchChecked: {
    '& + $switchBar': {
      backgroundColor: 'rgba(156, 39, 176, 1) !important'
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (customCheckboxRadioSwitch);

/***/ }),

/***/ "./static/jss/material-kit-pro-react/imagesStyles.jsx":
/*!************************************************************!*\
  !*** ./static/jss/material-kit-pro-react/imagesStyles.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var imagesStyles = {
  imgFluid: {
    maxWidth: "100%",
    height: "auto"
  },
  imgRounded: {
    borderRadius: "6px !important"
  },
  imgRoundedCircle: {
    borderRadius: "50% !important"
  },
  imgRaised: {
    boxShadow: "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  imgGallery: {
    width: "100%",
    marginBottom: "2.142rem"
  },
  imgCardTop: {
    width: "100%",
    borderTopLeftRadius: "calc(.25rem - 1px)",
    borderTopRightRadius: "calc(.25rem - 1px)"
  },
  imgCardBottom: {
    width: "100%",
    borderBottomLeftRadius: "calc(.25rem - 1px)",
    borderBottomRightRadius: "calc(.25rem - 1px)"
  },
  imgCard: {
    width: "100%",
    borderRadius: "calc(.25rem - 1px)"
  },
  imgCardOverlay: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    padding: "1.25rem"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (imagesStyles);

/***/ }),

/***/ "./static/jss/material-kit-pro-react/modalStyle.jsx":
/*!**********************************************************!*\
  !*** ./static/jss/material-kit-pro-react/modalStyle.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");


var modalStyle = function modalStyle(theme) {
  var _modal, _modalSmall;

  return {
    modalRoot: {
      overflow: "auto",
      display: "block"
    },
    modal: (_modal = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_modal, theme.breakpoints.up("sm"), {
      maxWidth: "500px",
      margin: "1.75rem auto"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_modal, "borderRadius", "6px"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_modal, "overflow", "visible"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_modal, "maxHeight", "unset"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_modal, "width", "100%"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_modal, "marginTop", "130px !important"), _modal),
    modalHeader: {
      borderBottom: "none",
      paddingTop: "24px",
      paddingRight: "24px",
      paddingBottom: "0",
      paddingLeft: "24px",
      minHeight: "16.43px"
    },
    modalTitle: {
      margin: "0",
      lineHeight: "1.5"
    },
    modalCloseButton: {
      "&, &:hover": {
        color: "#999999"
      },
      "&:hover": {
        opacity: "1"
      },
      cursor: "pointer",
      padding: "1rem",
      margin: "-1rem -1rem -1rem auto",
      backgroundColor: "transparent",
      border: "0",
      WebkitAppearance: "none",
      float: "right",
      fontSize: "1.5rem",
      fontWeight: "500",
      lineHeight: "1",
      textShadow: "0 1px 0 #ffffff",
      opacity: ".5"
    },
    modalClose: {
      width: "16px",
      height: "16px"
    },
    modalBody: {
      paddingTop: "24px",
      paddingRight: "24px",
      paddingBottom: "16px",
      paddingLeft: "24px",
      position: "relative",
      overflow: "visible"
    },
    modalFooter: {
      padding: "15px",
      textAlign: "right",
      paddingTop: "0",
      margin: "0"
    },
    modalFooterCenter: {
      marginLeft: "auto",
      marginRight: "auto"
    },
    instructionNoticeModal: {
      marginBottom: "25px"
    },
    imageNoticeModal: {
      maxWidth: "150px"
    },
    modalLarge: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.up("md"), {
      maxWidth: "800px"
    }),
    modalSmall: (_modalSmall = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_modalSmall, theme.breakpoints.up("sm"), {
      width: "300px",
      margin: "1.75rem auto"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_modalSmall, "margin", "0 auto"), _modalSmall),
    modalSmallBody: {
      marginTop: "20px"
    },
    modalSmallFooterFirstButton: {
      margin: "0",
      paddingLeft: "16px",
      paddingRight: "16px",
      width: "auto"
    },
    modalSmallFooterSecondButton: {
      marginBottom: "0",
      marginLeft: "5px"
    },
    modalLogin: {
      maxWidth: "360px",
      overflowY: "visible",
      width: "100%",
      "& $modalCloseButton": {
        color: "#fff",
        top: "-10px",
        right: "10px",
        textShadow: "none",
        position: "relative"
      },
      "& $modalHeader": {
        borderBottom: "none",
        paddingTop: "24px",
        paddingRight: "24px",
        paddingBottom: "0",
        paddingLeft: "24px"
      },
      "& $modalBody": {
        paddingBottom: "0",
        paddingTop: "0"
      },
      "& $modalFooter": {
        paddingBottom: "0",
        paddingTop: "0"
      }
    },
    modalLoginCard: {
      marginBottom: "0",
      margin: "0",
      "& $modalHeader": {
        paddingTop: "0"
      }
    },
    modalSignup: {
      maxWidth: "900px",
      width: "100%",
      "& $modalHeader": {
        paddingTop: "0"
      },
      "& $modalTitle": {
        textAlign: "center",
        width: "100%",
        marginTop: "0.625rem"
      },
      "& $modalBody": {
        paddingBottom: "0",
        paddingTop: "0"
      }
    },
    modalSignupCard: {
      padding: "40px 0",
      margin: "0"
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (modalStyle);

/***/ }),

/***/ "./static/jss/material-kit-pro-react/popoverStyles.jsx":
/*!*************************************************************!*\
  !*** ./static/jss/material-kit-pro-react/popoverStyles.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var popoverStyles = {
  popover: {
    padding: "0",
    boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    lineHeight: "1.5em",
    background: "rgba(85,85,85,0.9)",
    border: "none",
    borderRadius: "3px",
    display: "block",
    maxWidth: "276px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: "start",
    textDecoration: "none",
    textShadow: "none",
    textTransform: "none",
    letterSpacing: "normal",
    wordBreak: "normal",
    wordSpacing: "normal",
    whiteSpace: "normal",
    lineBreak: "auto",
    fontSize: "0.875rem",
    wordWrap: "break-word"
  },
  popoverBottom: {
    marginTop: "5px"
  },
  popoverHeader: {
    border: "none",
    padding: "15px 15px 5px",
    fontSize: "1.125rem",
    margin: "0",
    color: "#FFFFFF",
    borderTopLeftRadius: "calc(0.3rem - 1px)",
    borderTopRightRadius: "calc(0.3rem - 1px)"
  },
  popoverBody: {
    padding: "10px 15px 15px",
    lineHeight: "1.4",
    color: "#FFFFFF"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (popoverStyles);

/***/ }),

/***/ "./static/jss/material-kit-pro-react/rotatingCards.jsx":
/*!*************************************************************!*\
  !*** ./static/jss/material-kit-pro-react/rotatingCards.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var style = {
  rotatingCardContainer: {
    perspective: "800px",
    "& $cardRotate $back": {
      transform: "rotateY(180deg)",
      zIndex: "5",
      textAlign: "center",
      width: "100%",
      height: "100%"
    },
    "&:not($manualRotate):hover $cardRotate": {
      transform: "rotateY(180deg)"
    },
    "&$manualRotate$activateRotate $cardRotate": {
      transform: "rotateY(180deg)"
    },
    "& $cardRotate $front": {
      zIndex: "2",
      position: "relative"
    },
    "& $cardRotate $front, & $cardRotate $back": {
      backfaceVisibility: "hidden",
      boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)",
      position: "absolute",
      backgroundColor: "#fff",
      borderRadius: "6px",
      top: "0",
      left: "0",
      WebkitBoxPack: "center",
      MsFlexPack: "center",
      justifyContent: "center",
      MsFlexLinePack: "center",
      alignContent: "center",
      display: "flex",
      WebkitBoxOrient: "vertical",
      WebkitBoxDirection: "normal",
      flexDirection: "column"
    }
  },
  activateRotate: {},
  manualRotate: {},
  cardRotate: {
    transition: "all 0.8s cubic-bezier(0.34, 1.45, 0.7, 1)",
    transformStyle: "preserve-3d",
    position: "relative",
    background: "transparent"
  },
  front: {},
  back: {},
  wrapperBackground: {
    backgroundPosition: "50%",
    backgroundSize: "cover",
    textAlign: "center",
    "&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
      backgroundColor: "rgba(0, 0, 0, 0.56)",
      borderRadius: "6px"
    }
  },
  cardBodyRotate: {
    WebkitBoxPack: "center",
    MsFlexPack: "center",
    justifyContent: "center",
    MsFlexLinePack: "center",
    alignContent: "center",
    display: "flex",
    WebkitBoxOrient: "vertical",
    WebkitBoxDirection: "normal",
    flexDirection: "column"
  },
  wrapperPrimary: {
    background: "linear-gradient(60deg,#ab47bc,#7b1fa2)",
    "& h1 small": {
      color: "rgba(255, 255, 255, 0.8)"
    },
    color: "#FFFFFF"
  },
  wrapperInfo: {
    background: "linear-gradient(60deg,#26c6da,#0097a7)",
    color: "#FFFFFF"
  },
  wrapperSuccess: {
    background: "linear-gradient(60deg,#66bb6a,#388e3c)",
    color: "#FFFFFF"
  },
  wrapperWarning: {
    background: "linear-gradient(60deg,#ffa726,#f57c00)",
    color: "#FFFFFF"
  },
  wrapperDanger: {
    background: "linear-gradient(60deg,#ef5350,#d32f2f)",
    color: "#FFFFFF"
  },
  wrapperRose: {
    background: "linear-gradient(60deg,#ec407a,#c2185b)",
    color: "#FFFFFF"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (style);

/***/ }),

/***/ "./static/jss/material-kit-pro-react/tooltipsStyle.jsx":
/*!*************************************************************!*\
  !*** ./static/jss/material-kit-pro-react/tooltipsStyle.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var tooltipsStyle = {
  tooltip: {
    padding: "10px 15px",
    minWidth: "130px",
    color: "#FFFFFF",
    lineHeight: "1.7em",
    background: "rgba(85,85,85,0.9)",
    border: "none",
    borderRadius: "3px",
    boxShadow: "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)",
    maxWidth: "200px",
    textAlign: "center",
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: "0.875em",
    fontStyle: "normal",
    fontWeight: "400",
    textShadow: "none",
    textTransform: "none",
    letterSpacing: "normal",
    wordBreak: "normal",
    wordSpacing: "normal",
    wordWrap: "normal",
    whiteSpace: "normal",
    lineBreak: "auto"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (tooltipsStyle);

/***/ }),

/***/ "./static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx":
/*!*****************************************************************************************!*\
  !*** ./static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../material-kit-pro-react */ "./static/jss/material-kit-pro-react.jsx");
/* harmony import */ var _material_kit_pro_react_modalStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../material-kit-pro-react/modalStyle */ "./static/jss/material-kit-pro-react/modalStyle.jsx");
/* harmony import */ var _material_kit_pro_react_tooltipsStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../material-kit-pro-react/tooltipsStyle */ "./static/jss/material-kit-pro-react/tooltipsStyle.jsx");
/* harmony import */ var _material_kit_pro_react_popoverStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../material-kit-pro-react/popoverStyles */ "./static/jss/material-kit-pro-react/popoverStyles.jsx");
/* harmony import */ var _material_kit_pro_react_customCheckboxRadioSwitchStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../material-kit-pro-react/customCheckboxRadioSwitchStyle */ "./static/jss/material-kit-pro-react/customCheckboxRadioSwitchStyle.jsx");







var javascriptStyles = function javascriptStyles(theme) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    container: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["container"],
    description: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["description"],
    cardTitle: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["cardTitle"],
    mlAuto: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["mlAuto"],
    mrAuto: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["mrAuto"]
  }, _material_kit_pro_react_tooltipsStyle__WEBPACK_IMPORTED_MODULE_3__["default"], _material_kit_pro_react_popoverStyles__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_material_kit_pro_react_modalStyle__WEBPACK_IMPORTED_MODULE_2__["default"])(theme), _material_kit_pro_react_customCheckboxRadioSwitchStyle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    section: {
      padding: '70px 0 0'
    },
    title: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["title"], {
      marginTop: '30px',
      minHeight: '32px',
      textDecoration: 'none'
    }),
    icon: {
      width: '24px',
      height: '24px',
      color: '#495057'
    },
    label: {
      color: 'rgba(0, 0, 0, 0.26)',
      cursor: 'pointer',
      display: 'inline-flex',
      fontSize: '14px',
      transition: '0.3s ease all',
      lineHeight: '1.428571429',
      fontWeight: '400',
      paddingLeft: '0'
    },
    textCenter: {
      textAlign: 'center'
    },
    cardTitleWhite: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["cardTitle"], {
      color: '#FFFFFF !important'
    }),
    socialLine: {
      marginTop: '1rem',
      textAlign: 'center',
      padding: '0'
    },
    socialLineButton: {
      '&, &:hover': {
        color: '#fff'
      },
      marginLeft: '5px',
      marginRight: '5px'
    },
    cardLoginHeader: {
      marginTop: '-40px',
      padding: '20px 0',
      width: '100%',
      marginBottom: '15px'
    },
    cardLoginBody: {
      paddingTop: '0',
      paddingBottom: '0'
    },
    justifyContentCenter: {
      WebkitBoxPack: 'center !important',
      MsFlexPack: 'center !important',
      justifyContent: 'center !important'
    },
    infoArea: {
      padding: '0px 0px 20px !important'
    },
    space50: {
      height: '50px',
      display: 'block'
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (javascriptStyles);

/***/ }),

/***/ "./static/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx":
/*!*************************************************************************************!*\
  !*** ./static/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../material-kit-pro-react */ "./static/jss/material-kit-pro-react.jsx");
/* harmony import */ var _material_kit_pro_react_imagesStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../material-kit-pro-react/imagesStyles */ "./static/jss/material-kit-pro-react/imagesStyles.jsx");
/* harmony import */ var _material_kit_pro_react_rotatingCards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../material-kit-pro-react/rotatingCards */ "./static/jss/material-kit-pro-react/rotatingCards.jsx");





var styles = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  container: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["container"],
  coloredShadow: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["coloredShadow"],
  title: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["title"],
  mlAuto: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["mlAuto"],
  cardTitle: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["cardTitle"]
}, _material_kit_pro_react_imagesStyles__WEBPACK_IMPORTED_MODULE_2__["default"], _material_kit_pro_react_rotatingCards__WEBPACK_IMPORTED_MODULE_3__["default"], {
  sectionGray: {
    background: '#E5E5E5'
  },
  sectionWhite: {
    background: '#FFFFFF'
  },
  cardTitleAbsolute: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["cardTitle"], {
    position: 'absolute !important',
    bottom: '15px !important',
    left: '15px !important',
    color: '#fff !important',
    fontSize: '1.125rem !important',
    textShadow: '0 2px 5px rgba(33, 33, 33, 0.5) !important'
  }),
  cardTitleWhite: {
    '&, & a': Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["title"], {
      marginTop: '.625rem',
      marginBottom: '0',
      minHeight: 'auto',
      color: '#fff !important'
    })
  },
  cardCategory: {
    marginTop: '10px',
    '& svg': {
      position: 'relative',
      top: '8px'
    }
  },
  cardCategorySocial: {
    marginTop: '10px',
    '& .fab,& .fas,& .far,& .fal,& .material-icons': {
      fontSize: '22px',
      position: 'relative',
      marginTop: '-4px',
      top: '2px',
      marginRight: '5px'
    },
    '& svg': {
      position: 'relative',
      top: '5px'
    }
  },
  cardCategorySocialWhite: {
    marginTop: '10px',
    color: 'rgba(255, 255, 255, 0.8)',
    '& .fab,& .fas,& .far,& .fal,& .material-icons': {
      fontSize: '22px',
      position: 'relative',
      marginTop: '-4px',
      top: '2px',
      marginRight: '5px'
    },
    '& svg': {
      position: 'relative',
      top: '5px'
    }
  },
  cardCategoryWhite: {
    marginTop: '10px',
    color: 'rgba(255, 255, 255, 0.7)'
  },
  cardCategoryFullWhite: {
    marginTop: '10px',
    color: '#FFFFFF'
  },
  cardDescription: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["description"]),
  cardDescriptionWhite: {
    color: 'rgba(255, 255, 255, 0.8)'
  },
  author: {
    display: 'inline-flex',
    '& a': {
      color: '#3C4858'
    }
  },
  authorWhite: {
    display: 'inline-flex',
    '& a': {
      color: 'rgba(255, 255, 255, 0.8)'
    }
  },
  avatar: {
    width: '30px',
    height: '30px',
    overflow: 'hidden',
    borderRadius: '50%',
    marginRight: '5px'
  },
  statsWhite: {
    color: 'rgba(255, 255, 255, 0.8)',
    display: 'inline-flex',
    '& .fab,& .fas,& .far,& .fal,& .material-icons': {
      position: 'relative',
      top: '3px',
      marginRight: '3px',
      marginLeft: '3px',
      fontSize: '18px',
      lineHeight: '18px'
    },
    '& svg': {
      position: 'relative',
      top: '3px',
      marginRight: '3px',
      marginLeft: '3px',
      width: '18px',
      height: '18px'
    }
  },
  stats: {
    color: '#999999',
    display: 'flex',
    '& .fab,& .fas,& .far,& .fal,& .material-icons': {
      position: 'relative',
      top: '3px',
      marginRight: '3px',
      marginLeft: '3px',
      fontSize: '18px',
      lineHeight: '18px'
    },
    '& svg': {
      position: 'relative',
      top: '3px',
      marginRight: '3px',
      marginLeft: '3px',
      width: '18px',
      height: '18px'
    }
  },
  justifyContentCenter: {
    WebkitBoxPack: 'center !important',
    MsFlexPack: 'center !important',
    justifyContent: 'center !important'
  },
  iconWrapper: {
    color: 'rgba(255, 255, 255, 0.76)',
    margin: '10px auto 0',
    width: '130px',
    height: '130px',
    border: '1px solid #E5E5E5',
    borderRadius: '50%',
    lineHeight: '174px',
    '& .fab,& .fas,& .far,& .fal,& .material-icons': {
      fontSize: '55px',
      lineHeight: '55px'
    },
    '& svg': {
      width: '55px',
      height: '55px'
    }
  },
  iconWrapperColor: {
    borderColor: 'rgba(255, 255, 255, 0.25)'
  },
  iconWhite: {
    color: '#FFFFFF'
  },
  iconRose: {
    color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["roseColor"]
  },
  iconInfo: {
    color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["infoColor"]
  },
  marginTop30: {
    marginTop: '30px'
  },
  textCenter: {
    textAlign: 'center'
  },
  marginBottom20: {
    marginBottom: '20px'
  }
});

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./static/jss/material-kit-pro-react/views/landingPageStyle.jsx":
/*!**********************************************************************!*\
  !*** ./static/jss/material-kit-pro-react/views/landingPageStyle.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../material-kit-pro-react */ "./static/jss/material-kit-pro-react.jsx");


var landingPageStyle = {
  container: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: '#FFFFFF'
  }, _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["container"], {
    zIndex: '2'
  }),
  title: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["title"], {
    display: 'inline-block',
    position: 'relative',
    marginTop: '30px',
    minHeight: '32px',
    color: '#FFFFFF',
    textDecoration: 'none'
  }),
  subtitle: {
    fontSize: '1.313rem',
    maxWidth: '500px',
    margin: '10px auto 0'
  },
  main: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["main"]),
  mainRaised: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["mainRaised"]),
  block: {
    color: 'inherit',
    padding: '0.9375rem',
    fontWeight: '500',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    textDecoration: 'none',
    position: 'relative',
    display: 'block'
  },
  inlineBlock: {
    display: 'inline-block',
    padding: '0px',
    width: 'auto'
  },
  list: {
    marginBottom: '0',
    padding: '0',
    marginTop: '0'
  },
  left: {
    float: 'left!important',
    display: 'block'
  },
  right: {
    padding: '15px 0',
    margin: '0',
    float: 'right'
  },
  icon: {
    width: '18px',
    height: '18px',
    top: '3px',
    position: 'relative'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (landingPageStyle);

/***/ }),

/***/ "./styledComponents/Card/Card.jsx":
/*!****************************************!*\
  !*** ./styledComponents/Card/Card.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_jss_material_kit_pro_react_components_cardStyle_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/jss/material-kit-pro-react/components/cardStyle.jsx */ "./static/jss/material-kit-pro-react/components/cardStyle.jsx");



var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/styledComponents/Card/Card.jsx";
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components



function Card(_ref) {
  var _classNames;

  var props = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _ref);

  var classes = props.classes,
      className = props.className,
      children = props.children,
      plain = props.plain,
      profile = props.profile,
      blog = props.blog,
      raised = props.raised,
      background = props.background,
      pricing = props.pricing,
      color = props.color,
      product = props.product,
      testimonial = props.testimonial,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "children", "plain", "profile", "blog", "raised", "background", "pricing", "color", "product", "testimonial"]);

  var cardClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.card, true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardPlain, plain), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardProfile, profile || testimonial), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardBlog, blog), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardRaised, raised), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardBackground, background), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardPricingColor, pricing && color !== undefined || pricing && background !== undefined), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes[color], color), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardPricing, pricing), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardProduct, product), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, className, className !== undefined), _classNames));
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    className: cardClasses
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), children);
}

Card.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  plain: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  profile: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  blog: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  raised: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  background: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  pricing: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  testimonial: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['primary', 'info', 'success', 'warning', 'danger', 'rose']),
  product: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(_static_jss_material_kit_pro_react_components_cardStyle_jsx__WEBPACK_IMPORTED_MODULE_7__["default"])(Card));

/***/ }),

/***/ "./styledComponents/Card/CardBody.jsx":
/*!********************************************!*\
  !*** ./styledComponents/Card/CardBody.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_jss_material_kit_pro_react_components_cardBodyStyle_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/jss/material-kit-pro-react/components/cardBodyStyle.jsx */ "./static/jss/material-kit-pro-react/components/cardBodyStyle.jsx");



var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/styledComponents/Card/CardBody.jsx";
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components



function CardBody(_ref) {
  var _classNames;

  var props = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _ref);

  var classes = props.classes,
      className = props.className,
      children = props.children,
      background = props.background,
      plain = props.plain,
      formHorizontal = props.formHorizontal,
      pricing = props.pricing,
      signup = props.signup,
      color = props.color,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "children", "background", "plain", "formHorizontal", "pricing", "signup", "color"]);

  var cardBodyClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardBody, true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardBodyBackground, background), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardBodyPlain, plain), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardBodyFormHorizontal, formHorizontal), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardPricing, pricing), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardSignup, signup), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardBodyColor, color), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, className, className !== undefined), _classNames));
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    className: cardBodyClasses
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), children);
}

CardBody.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  background: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  plain: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  formHorizontal: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  pricing: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  signup: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(_static_jss_material_kit_pro_react_components_cardBodyStyle_jsx__WEBPACK_IMPORTED_MODULE_7__["default"])(CardBody));

/***/ }),

/***/ "./styledComponents/Card/CardHeader.jsx":
/*!**********************************************!*\
  !*** ./styledComponents/Card/CardHeader.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_jss_material_kit_pro_react_components_cardHeaderStyle_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/jss/material-kit-pro-react/components/cardHeaderStyle.jsx */ "./static/jss/material-kit-pro-react/components/cardHeaderStyle.jsx");



var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/styledComponents/Card/CardHeader.jsx";
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components



function CardHeader(_ref) {
  var _classNames;

  var props = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _ref);

  var classes = props.classes,
      className = props.className,
      children = props.children,
      color = props.color,
      plain = props.plain,
      image = props.image,
      contact = props.contact,
      signup = props.signup,
      noShadow = props.noShadow,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "children", "color", "plain", "image", "contact", "signup", "noShadow"]);

  var cardHeaderClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardHeader, true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes[color + 'CardHeader'], color), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardHeaderPlain, plain), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardHeaderImage, image), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardHeaderContact, contact), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardHeaderSignup, signup), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.noShadow, noShadow), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, className, className !== undefined), _classNames));
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    className: cardHeaderClasses
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), children);
}

CardHeader.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['warning', 'success', 'danger', 'info', 'primary', 'rose']),
  plain: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  image: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  contact: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  signup: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  noShadow: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(_static_jss_material_kit_pro_react_components_cardHeaderStyle_jsx__WEBPACK_IMPORTED_MODULE_7__["default"])(CardHeader));

/***/ }),

/***/ "./styledComponents/CustomButtons/Button.jsx":
/*!***************************************************!*\
  !*** ./styledComponents/CustomButtons/Button.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_jss_material_kit_pro_react_components_buttonStyle_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../static/jss/material-kit-pro-react/components/buttonStyle.jsx */ "./static/jss/material-kit-pro-react/components/buttonStyle.jsx");



var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/styledComponents/CustomButtons/Button.jsx";
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components





function RegularButton(props) {
  var _classNames;

  var classes = props.classes,
      color = props.color,
      round = props.round,
      children = props.children,
      fullWidth = props.fullWidth,
      disabled = props.disabled,
      simple = props.simple,
      size = props.size,
      block = props.block,
      link = props.link,
      justIcon = props.justIcon,
      fileButton = props.fileButton,
      className = props.className,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["classes", "color", "round", "children", "fullWidth", "disabled", "simple", "size", "block", "link", "justIcon", "fileButton", "className"]);

  var btnClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes.button, true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes[size], size), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes[color], color), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes.round, round), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes.fullWidth, fullWidth), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes.disabled, disabled), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes.simple, simple), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes.block, block), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes.link, link), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes.justIcon, justIcon), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes.fileButton, fileButton), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, className, className), _classNames));
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    className: btnClasses,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), children);
}

RegularButton.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'rose', 'white', 'twitter', 'facebook', 'google', 'linkedin', 'pinterest', 'youtube', 'tumblr', 'github', 'behance', 'dribbble', 'reddit', 'instagram', 'transparent']),
  size: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['sm', 'lg']),
  simple: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  round: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  block: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  link: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  justIcon: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  fileButton: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(_static_jss_material_kit_pro_react_components_buttonStyle_jsx__WEBPACK_IMPORTED_MODULE_8__["default"])(RegularButton));

/***/ }),

/***/ "./styledComponents/CustomInput/CustomInput.jsx":
/*!******************************************************!*\
  !*** ./styledComponents/CustomInput/CustomInput.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Clear */ "@material-ui/icons/Clear");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Check */ "@material-ui/icons/Check");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _static_jss_material_kit_pro_react_components_customInputStyle_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../static/jss/material-kit-pro-react/components/customInputStyle.jsx */ "./static/jss/material-kit-pro-react/components/customInputStyle.jsx");


var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/styledComponents/CustomInput/CustomInput.jsx";
 // nodejs library to set properties for components

 // nodejs library that concatenates classes

 // @material-ui/core components




 // @material-ui/icons


 // core components



function CustomInput(_ref) {
  var _classNames, _classNames2, _classNames4;

  var props = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _ref);

  var classes = props.classes,
      formControlProps = props.formControlProps,
      labelText = props.labelText,
      id = props.id,
      labelProps = props.labelProps,
      inputProps = props.inputProps,
      error = props.error,
      white = props.white,
      inputRootCustomClasses = props.inputRootCustomClasses,
      success = props.success;
  var labelClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, ' ' + classes.labelRootError, error), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, ' ' + classes.labelRootSuccess, success && !error), _classNames));
  var underlineClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames2 = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, classes.underlineError, error), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, classes.underlineSuccess, success && !error), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, classes.underline, true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, classes.whiteUnderline, white), _classNames2));
  var marginTop = classnames__WEBPACK_IMPORTED_MODULE_4___default()(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, inputRootCustomClasses, inputRootCustomClasses !== undefined));
  var inputClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames4 = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, classes.input, true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, classes.whiteInput, white), _classNames4));
  var formControlClasses;

  if (formControlProps !== undefined) {
    formControlClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()(formControlProps.className, classes.formControl);
  } else {
    formControlClasses = classes.formControl;
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, formControlProps, {
    className: formControlClasses,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), labelText !== undefined ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classes.labelRoot + ' ' + labelClasses,
    htmlFor: id
  }, labelProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), labelText) : null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    classes: {
      input: inputClasses,
      root: marginTop,
      disabled: classes.disabled,
      underline: underlineClasses
    },
    id: id
  }, inputProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })), error ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.feedback + ' ' + classes.labelRootError,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }) : success ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.feedback + ' ' + classes.labelRootSuccess,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }) : null);
}

CustomInput.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  labelText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  labelProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  formControlProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  inputRootCustomClasses: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  success: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  white: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(_static_jss_material_kit_pro_react_components_customInputStyle_jsx__WEBPACK_IMPORTED_MODULE_11__["default"])(CustomInput));

/***/ }),

/***/ "./styledComponents/Grid/GridContainer.jsx":
/*!*************************************************!*\
  !*** ./styledComponents/Grid/GridContainer.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/styledComponents/Grid/GridContainer.jsx";
 // nodejs library to set properties for components

 // @material-ui/core components



var style = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto"
  }
};

function GridContainer(_ref) {
  var props = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _ref);

  var classes = props.classes,
      children = props.children,
      className = props.className,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["classes", "children", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    container: true
  }, rest, {
    className: classes.grid + " " + className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), children);
}

GridContainer.defaultProps = {
  className: ""
};
GridContainer.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_4___default()(style)(GridContainer));

/***/ }),

/***/ "./styledComponents/Grid/GridItem.jsx":
/*!********************************************!*\
  !*** ./styledComponents/Grid/GridItem.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/styledComponents/Grid/GridItem.jsx";
 // @material-ui/core components



var style = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px"
    /* flexBasis: "auto" */

  }
};

function GridItem(_ref) {
  var props = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _ref);

  var classes = props.classes,
      children = props.children,
      className = props.className,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["classes", "children", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    item: true
  }, rest, {
    className: classes.grid + " " + className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), children);
}

/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(style)(GridItem));

/***/ }),

/***/ "./styledComponents/InfoArea/InfoArea.jsx":
/*!************************************************!*\
  !*** ./styledComponents/InfoArea/InfoArea.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_jss_material_kit_pro_react_components_infoStyle_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../static/jss/material-kit-pro-react/components/infoStyle.jsx */ "./static/jss/material-kit-pro-react/components/infoStyle.jsx");



var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/styledComponents/InfoArea/InfoArea.jsx";
 // nodejs library to set properties for components

 // nodejs library that concatenates classes

 // @material-ui/core components





function InfoArea(_ref) {
  var _classNames, _classNames2, _classNames3;

  var props = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _ref);

  var classes = props.classes,
      title = props.title,
      description = props.description,
      iconColor = props.iconColor,
      vertical = props.vertical,
      className = props.className;
  var iconWrapper = classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes.iconWrapper, true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes[iconColor], true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes.iconWrapperVertical, vertical), _classNames));
  var iconClasses = classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames2 = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames2, classes.icon, true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames2, classes.iconVertical, vertical), _classNames2));
  var infoAreaClasses = classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames3 = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames3, classes.infoArea, true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames3, className, className !== undefined), _classNames3));
  var icon = null;

  switch (Object(_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(props.icon)) {
    case 'string':
      icon = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: iconClasses,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, props.icon);
      break;

    default:
      icon = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(props.icon, {
        className: iconClasses,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      });
      break;
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: infoAreaClasses,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: iconWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, icon), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.descriptionWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, description)));
}

InfoArea.defaultProps = {
  iconColor: 'gray'
};
InfoArea.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]).isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node.isRequired,
  iconColor: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['primary', 'warning', 'danger', 'success', 'info', 'rose', 'gray']),
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(_static_jss_material_kit_pro_react_components_infoStyle_jsx__WEBPACK_IMPORTED_MODULE_8__["default"])(InfoArea));

/***/ }),

/***/ "./styledComponents/Parallax/Parallax.jsx":
/*!************************************************!*\
  !*** ./styledComponents/Parallax/Parallax.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_jss_material_kit_pro_react_components_parallaxStyle_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/jss/material-kit-pro-react/components/parallaxStyle.jsx */ "./static/jss/material-kit-pro-react/components/parallaxStyle.jsx");



var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/styledComponents/Parallax/Parallax.jsx";
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // core components



var Parallax = function Parallax(_ref) {
  var _classNames;

  var classes = _ref.classes,
      filter = _ref.filter,
      className = _ref.className,
      children = _ref.children,
      style = _ref.style,
      small = _ref.small;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      windowScrollTop = _useState2[0],
      setWindowScroll = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (window.innerWidth >= 768) {
      setWindowScroll(window.pageYOffset / 3);
    } else {
      setWindowScroll(0);
    }

    window.addEventListener('scroll', resetTransform);
  }, []);

  var resetTransform = function resetTransform() {
    setWindowScroll(window.pageYOffset / 3);
  };

  var parallaxClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes.parallax, true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes[filter + 'Color'], filter !== undefined), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes.small, small), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, className, className !== undefined), _classNames));
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: parallaxClasses,
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style, {
      backgroundImage: 'url(https://images.unsplash.com/photo-1499309221416-e18ee3411c38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)',
      transform: 'translate3d(0,' + windowScrollTop + 'px,0)'
    }) // ref='parallax'
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, children);
};

Parallax.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  filter: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['primary', 'rose', 'dark', 'info', 'success', 'warning', 'danger']),
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node,
  style: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  small: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(_static_jss_material_kit_pro_react_components_parallaxStyle_jsx__WEBPACK_IMPORTED_MODULE_7__["default"])(Parallax));

/***/ }),

/***/ "./styledComponents/Typography/Warning.jsx":
/*!*************************************************!*\
  !*** ./styledComponents/Typography/Warning.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_jss_material_kit_pro_react_components_typographyStyle_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/jss/material-kit-pro-react/components/typographyStyle.jsx */ "./static/jss/material-kit-pro-react/components/typographyStyle.jsx");

var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/styledComponents/Typography/Warning.jsx";
 // nodejs library to set properties for components

 // @material-ui/core components

 // core components



function Warning(_ref) {
  var props = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _ref);

  var classes = props.classes,
      children = props.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.defaultFontStyle + ' ' + classes.warningText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, children);
}

Warning.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(_static_jss_material_kit_pro_react_components_typographyStyle_jsx__WEBPACK_IMPORTED_MODULE_4__["default"])(Warning));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Checkbox":
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Icon":
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ "@material-ui/core/Input":
/*!******************************************!*\
  !*** external "@material-ui/core/Input" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "@material-ui/core/InputAdornment":
/*!***************************************************!*\
  !*** external "@material-ui/core/InputAdornment" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/styles/withStyles":
/*!******************************************************!*\
  !*** external "@material-ui/core/styles/withStyles" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/withStyles");

/***/ }),

/***/ "@material-ui/icons/Add":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Add" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ "@material-ui/icons/Check":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Check" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Check");

/***/ }),

/***/ "@material-ui/icons/Clear":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Clear" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Clear");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "@material-ui/icons/Code":
/*!******************************************!*\
  !*** external "@material-ui/icons/Code" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Code");

/***/ }),

/***/ "@material-ui/icons/Email":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Email" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Email");

/***/ }),

/***/ "@material-ui/icons/Face":
/*!******************************************!*\
  !*** external "@material-ui/icons/Face" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Face");

/***/ }),

/***/ "@material-ui/icons/Group":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Group" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Group");

/***/ }),

/***/ "@material-ui/icons/Mail":
/*!******************************************!*\
  !*** external "@material-ui/icons/Mail" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ "@material-ui/icons/Timeline":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Timeline" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Timeline");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map