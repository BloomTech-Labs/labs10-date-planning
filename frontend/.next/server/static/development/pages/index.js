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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Add */ "@material-ui/icons/Add");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styledComponents_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styledComponents/Grid/GridItem */ "./styledComponents/Grid/GridItem.jsx");
/* harmony import */ var _styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styledComponents/CustomButtons/Button */ "./styledComponents/CustomButtons/Button.jsx");
/* harmony import */ var _styledComponents_Card_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styledComponents/Card/Card */ "./styledComponents/Card/Card.jsx");
/* harmony import */ var _styledComponents_Card_CardHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styledComponents/Card/CardHeader */ "./styledComponents/Card/CardHeader.jsx");
/* harmony import */ var _styledComponents_Card_CardFooter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styledComponents/Card/CardFooter */ "./styledComponents/Card/CardFooter.jsx");
/* harmony import */ var _styledComponents_Card_CardBody__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styledComponents/Card/CardBody */ "./styledComponents/Card/CardBody.jsx");
/* harmony import */ var _styledComponents_Typography_Warning__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../styledComponents/Typography/Warning */ "./styledComponents/Typography/Warning.jsx");
/* harmony import */ var _static_jss_material_kit_pro_react_views_componentsSections_sectionCards__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../static/jss/material-kit-pro-react/views/componentsSections/sectionCards */ "./static/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx");
var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/components/Home/Event.js";














var Event = function Event(_ref) {
  var event = _ref.event,
      classes = _ref.classes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styledComponents_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styledComponents_Card_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
    blog: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styledComponents_Card_CardHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
    image: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#pablo",
    onClick: function onClick(e) {
      return e.preventDefault();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: event.image_url,
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
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
      lineNumber: 26
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styledComponents_Card_CardBody__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.cardBodyRotate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styledComponents_Typography_Warning__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: classes.cardCategory,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, event.location.venue)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: classes.cardTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#pablo",
    onClick: function onClick(e) {
      return e.preventDefault();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, event.title))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styledComponents_Card_CardFooter__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(classes.stats, " ").concat(classes.mlAuto),
    style: {
      display: 'block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, event.times.map(function (ev) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: ev,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, moment__WEBPACK_IMPORTED_MODULE_2___default()(ev).format('dddd, MMMM Do, h:mm a'));
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_4___default()(_static_jss_material_kit_pro_react_views_componentsSections_sectionCards__WEBPACK_IMPORTED_MODULE_12__["default"])(Event));

/***/ }),

/***/ "./components/Home/Events.js":
/*!***********************************!*\
  !*** ./components/Home/Events.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Queries_AllEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Queries/AllEvents */ "./components/Queries/AllEvents.js");
/* harmony import */ var _Filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Filters */ "./components/Home/Filters.js");
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Event */ "./components/Home/Event.js");
/* harmony import */ var _Queries_Location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Queries/Location */ "./components/Queries/Location.js");
/* harmony import */ var _styledComponents_Grid_GridContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styledComponents/Grid/GridContainer */ "./styledComponents/Grid/GridContainer.jsx");
/* harmony import */ var _styledComponents_Grid_GridItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styledComponents/Grid/GridItem */ "./styledComponents/Grid/GridItem.jsx");
/* harmony import */ var _styledComponents_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styledComponents/Pagination/Pagination */ "./styledComponents/Pagination/Pagination.jsx");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _static_jss_material_kit_pro_react_views_ecommerceSections_productsStyle_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../static/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.jsx */ "./static/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.jsx");

var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/components/Home/Events.js";











var Events = function Events(_ref) {
  var classes = _ref.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Queries_Location__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, function (_ref2) {
    var data = _ref2.data;
    var getLocation = data.getLocation;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.section,
      style: {
        paddingTop: '40px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      style: {
        textAlign: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Upcoming Events Near You"), data.getLocation ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Queries_AllEvents__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variables: {
        location: getLocation.location,
        page: page,
        categories: [],
        dates: []
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, function (_ref3) {
      var data = _ref3.data,
          error = _ref3.error,
          loading = _ref3.loading,
          refetch = _ref3.refetch;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styledComponents_Grid_GridContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Filters__WEBPACK_IMPORTED_MODULE_3__["default"], {
        refetch: refetch,
        location: getLocation.location,
        page: page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styledComponents_Grid_GridItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        md: 9,
        sm: 9,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Loading..."), error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Error: ", error.message), !loading && !error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styledComponents_Grid_GridContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, data.getEvents.events.map(function (event) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Event__WEBPACK_IMPORTED_MODULE_4__["default"], {
          event: event,
          key: event.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        });
      }))), !loading && !error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styledComponents_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_8__["default"], {
        pages: [{
          text: 'PREV'
        }, {
          text: data.getEvents.page_number > 2 && data.getEvents.page_number - 2,
          onClick: function onClick() {
            return setPage(data.getEvents.page_number - 2);
          }
        }, {
          text: data.getEvents.page_number > 1 && data.getEvents.page_number - 1,
          onClick: function onClick() {
            return setPage(data.getEvents.page_number - 1);
          }
        }, {
          active: true,
          text: data.getEvents.page_number
        }, {
          text: data.getEvents.page_number + 1,
          onClick: function onClick() {
            return setPage(data.getEvents.page_number + 1);
          }
        }, {
          text: data.getEvents.page_number + 2,
          onClick: function onClick() {
            return setPage(data.getEvents.page_number + 2);
          }
        }, {
          text: '...'
        }, {
          text: data.getEvents.page_count
        }, {
          text: 'NEXT'
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })));
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, "getting location")));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_9___default()(_static_jss_material_kit_pro_react_views_ecommerceSections_productsStyle_jsx__WEBPACK_IMPORTED_MODULE_10__["default"])(Events));

/***/ }),

/***/ "./components/Home/Filters.js":
/*!************************************!*\
  !*** ./components/Home/Filters.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Cached__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Cached */ "@material-ui/icons/Cached");
/* harmony import */ var _material_ui_icons_Cached__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cached__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styledComponents_Accordion_Accordion_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styledComponents/Accordion/Accordion.jsx */ "./styledComponents/Accordion/Accordion.jsx");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "@material-ui/core/Tooltip");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Check */ "@material-ui/icons/Check");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styledComponents_Clearfix_Clearfix_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../styledComponents/Clearfix/Clearfix.jsx */ "./styledComponents/Clearfix/Clearfix.jsx");
/* harmony import */ var _styledComponents_Card_Card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../styledComponents/Card/Card */ "./styledComponents/Card/Card.jsx");
/* harmony import */ var _styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../styledComponents/CustomButtons/Button */ "./styledComponents/CustomButtons/Button.jsx");
/* harmony import */ var _styledComponents_Card_CardBody__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../styledComponents/Card/CardBody */ "./styledComponents/Card/CardBody.jsx");
/* harmony import */ var _styledComponents_Grid_GridItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../styledComponents/Grid/GridItem */ "./styledComponents/Grid/GridItem.jsx");
/* harmony import */ var _static_jss_material_kit_pro_react_views_ecommerceSections_productsStyle_jsx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../static/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.jsx */ "./static/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.jsx");


var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/components/Home/Filters.js";





 // @material-ui/core components




 // @material-ui icons









var Filters = function Filters(_ref) {
  var classes = _ref.classes,
      refetch = _ref.refetch,
      location = _ref.location,
      page = _ref.page;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      categoryFilters = _useState2[0],
      setCategeoryFilters = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      dateFilters = _useState4[0],
      setDateFilters = _useState4[1];

  var handleCategoryFilters = function handleCategoryFilters(_ref2) {
    var id = _ref2.target.id;
    categoryFilters.indexOf(id) !== -1 ? setCategeoryFilters(categoryFilters.filter(function (i) {
      return i !== id;
    })) : setCategeoryFilters([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(categoryFilters), [id]));
  };

  var handleDateFilters = function handleDateFilters(_ref3) {
    var id = _ref3.target.id;
    dateFilters.indexOf(id) !== -1 ? setDateFilters(dateFilters.filter(function (i) {
      return i !== id;
    })) : setDateFilters([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(dateFilters), [id]));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log(categoryFilters, dateFilters);
    refetch({
      variables: {
        location: location,
        page: page,
        categories: categoryFilters,
        dates: dateFilters
      }
    });
  }, [categoryFilters, dateFilters]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents_Grid_GridItem__WEBPACK_IMPORTED_MODULE_17__["default"], {
    md: 3,
    sm: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents_Card_Card__WEBPACK_IMPORTED_MODULE_14__["default"], {
    plain: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents_Card_CardBody__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.cardBodyRefine,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
    className: "".concat(classes.cardTitle, " ").concat(classes.textLeft),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Refine", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_10___default.a, {
    id: "tooltip-top",
    title: "Reset Filter",
    placement: "top",
    classes: {
      tooltip: classes.tooltip
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    link: true,
    justIcon: true,
    size: "sm",
    className: "".concat(classes.pullRight, " ").concat(classes.refineButton),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Cached__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents_Clearfix_Clearfix_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styledComponents_Accordion_Accordion_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    active: [0, 2],
    activeColor: "rose",
    collapses: [{
      title: 'Category',
      content: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: classes.customExpandPanel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: classes.checkboxAndRadio + ' ' + classes.checkboxAndRadioHorizontal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_11___default.a, {
        control: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          tabIndex: -1,
          onClick: handleCategoryFilters,
          checked: categoryFilters.indexOf('music') !== -1 ? true : false,
          id: "music",
          checkedIcon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
            className: classes.checkedIcon,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107
            },
            __self: this
          }),
          icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
            className: classes.uncheckedIcon,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            },
            __self: this
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }),
        classes: {
          label: classes.label
        },
        label: "Music",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_11___default.a, {
        control: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          tabIndex: -1,
          onClick: handleCategoryFilters,
          checked: categoryFilters.indexOf('comedy') !== -1 ? true : false,
          id: "comedy",
          checkedIcon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
            className: classes.checkedIcon,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 140
            },
            __self: this
          }),
          icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
            className: classes.uncheckedIcon,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 145
            },
            __self: this
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }),
        classes: {
          label: classes.label
        },
        label: "Comedy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_11___default.a, {
        control: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          tabIndex: -1,
          onClick: handleCategoryFilters,
          checked: categoryFilters.indexOf('performing_arts') !== -1 ? true : false,
          id: "performing_arts",
          checkedIcon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
            className: classes.checkedIcon,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 174
            },
            __self: this
          }),
          icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
            className: classes.uncheckedIcon,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 179
            },
            __self: this
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        }),
        classes: {
          label: classes.label
        },
        label: "Performing Arts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_11___default.a, {
        control: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          tabIndex: -1,
          onClick: handleCategoryFilters,
          checked: categoryFilters.indexOf('sports') !== -1 ? true : false,
          id: "sports",
          checkedIcon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
            className: classes.checkedIcon,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 207
            },
            __self: this
          }),
          icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
            className: classes.uncheckedIcon,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 212
            },
            __self: this
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          },
          __self: this
        }),
        classes: {
          label: classes.label
        },
        label: "Sports",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      })))
    }, {
      title: 'Date',
      content: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: classes.customExpandPanel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: classes.checkboxAndRadio + ' ' + classes.checkboxAndRadioHorizontal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "date",
        label: "Select a date",
        type: "date",
        defaultValue: moment__WEBPACK_IMPORTED_MODULE_3___default()().format('L'),
        className: classes.textField,
        InputLabelProps: {
          shrink: true
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, "or"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_11___default.a, {
        control: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          tabIndex: -1,
          onClick: handleDateFilters,
          checked: dateFilters.indexOf('All') !== -1 ? true : false,
          id: "All",
          checkedIcon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
            className: classes.checkedIcon,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 265
            },
            __self: this
          }),
          icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
            className: classes.uncheckedIcon,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 270
            },
            __self: this
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 253
          },
          __self: this
        }),
        classes: {
          label: classes.label
        },
        label: "All",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_11___default.a, {
        control: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          tabIndex: -1,
          onClick: handleDateFilters,
          checked: dateFilters.indexOf('Today') !== -1 ? true : false,
          id: "Today",
          checkedIcon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
            className: classes.checkedIcon,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 297
            },
            __self: this
          }),
          icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
            className: classes.uncheckedIcon,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 302
            },
            __self: this
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 285
          },
          __self: this
        }),
        classes: {
          label: classes.label
        },
        label: "Today",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_11___default.a, {
        control: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          tabIndex: -1,
          onClick: handleDateFilters,
          checked: dateFilters.indexOf('This Weekend') !== -1 ? true : false,
          id: "This Weekend",
          checkedIcon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
            className: classes.checkedIcon,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 330
            },
            __self: this
          }),
          icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
            className: classes.uncheckedIcon,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 335
            },
            __self: this
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 317
          },
          __self: this
        }),
        classes: {
          label: classes.label
        },
        label: "This weekend",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_11___default.a, {
        control: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
          tabIndex: -1,
          onClick: handleDateFilters,
          checked: dateFilters.indexOf('next week') !== -1 ? true : false,
          id: "next week",
          checkedIcon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
            className: classes.checkedIcon,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 363
            },
            __self: this
          }),
          icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
            className: classes.uncheckedIcon,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 368
            },
            __self: this
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 350
          },
          __self: this
        }),
        classes: {
          label: classes.label
        },
        label: "Next week",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      })))
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_8___default()(_static_jss_material_kit_pro_react_views_ecommerceSections_productsStyle_jsx__WEBPACK_IMPORTED_MODULE_18__["default"])(Filters));

/***/ }),

/***/ "./components/Queries/AllEvents.js":
/*!*****************************************!*\
  !*** ./components/Queries/AllEvents.js ***!
  \*****************************************/
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

var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/components/Queries/AllEvents.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tquery ALL_EVENTS_QUERY(\n\t\t$location: String!\n\t\t$page: Int\n\t\t$categories: [String]\n\t\t$dates: [String]\n\t) {\n\t\tgetEvents(location: $location, page: $page, categories: $categories, dates: $dates) {\n\t\t\tpage_count\n\t\t\ttotal_items\n\t\t\tpage_number\n\t\t\tevents {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\turl\n\t\t\t\tdescription\n\t\t\t\ttimes\n\t\t\t\tlocation {\n\t\t\t\t\tvenue\n\t\t\t\t\tcity\n\t\t\t\t\taddress\n\t\t\t\t}\n\t\t\t\timage_url\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var ALL_EVENTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());

var Events = function Events(_ref) {
  var children = _ref.children,
      variables = _ref.variables;
  console.log(variables);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
    query: ALL_EVENTS_QUERY,
    variables: variables,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, function (payload) {
    return children(payload);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Events);

/***/ }),

/***/ "./components/Queries/Location.js":
/*!****************************************!*\
  !*** ./components/Queries/Location.js ***!
  \****************************************/
/*! exports provided: default, CURRENT_LOCATION_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_LOCATION_QUERY", function() { return CURRENT_LOCATION_QUERY; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/components/Queries/Location.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tquery($latitude: Float!, $longitude: Float!) {\n\t\tgetLocation(latitude: $latitude, longitude: $longitude) {\n\t\t\tlocation\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var CURRENT_LOCATION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());

var Location = function Location(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      location = _useState2[0],
      setLocation = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    navigator.geolocation.getCurrentPosition(function (position) {
      var _position$coords = position.coords,
          latitude = _position$coords.latitude,
          longitude = _position$coords.longitude;
      setLocation({
        latitude: latitude,
        longitude: longitude
      });
    });
  }, []);

  if (location.latitude && location.longitude) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
      query: CURRENT_LOCATION_QUERY,
      variables: location,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, function (payload) {
      return children(payload);
    });
  } else return children({
    data: {}
  });
};

Location.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Location);


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
/* harmony import */ var _Queries_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Queries/User */ "./components/Queries/User.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Mail */ "@material-ui/icons/Mail");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../styledComponents/CustomButtons/Button */ "./styledComponents/CustomButtons/Button.jsx");
/* harmony import */ var _styledComponents_Card_Card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../styledComponents/Card/Card */ "./styledComponents/Card/Card.jsx");
/* harmony import */ var _styledComponents_Card_CardHeader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../styledComponents/Card/CardHeader */ "./styledComponents/Card/CardHeader.jsx");
/* harmony import */ var _styledComponents_Card_CardBody__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../styledComponents/Card/CardBody */ "./styledComponents/Card/CardBody.jsx");
/* harmony import */ var _styledComponents_CustomInput_CustomInput__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../styledComponents/CustomInput/CustomInput */ "./styledComponents/CustomInput/CustomInput.jsx");
/* harmony import */ var _static_jss_material_kit_pro_react_views_componentsSections_javascriptStyles__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles */ "./static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx");



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
    refetchQueries: [{
      query: _Queries_User__WEBPACK_IMPORTED_MODULE_6__["CURRENT_USER_QUERY"]
    }],
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
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
      round: true,
      onClick: function onClick() {
        return setModalShowing(true);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Log In"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_8___default.a, {
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
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styledComponents_Card_Card__WEBPACK_IMPORTED_MODULE_17__["default"], {
      plain: true,
      className: classes.modalLoginCard,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11___default.a, {
      id: "login-modal-slide-title",
      disableTypography: true,
      className: classes.modalHeader,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styledComponents_Card_CardHeader__WEBPACK_IMPORTED_MODULE_18__["default"], {
      plain: true,
      color: "primary",
      className: "".concat(classes.textCenter, " ").concat(classes.cardLoginHeader),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, ' ', react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
      simple: true,
      className: classes.modalCloseButton,
      key: "close",
      "aria-label": "Close",
      onClick: function onClick() {
        return setModalShowing(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15___default.a, {
      className: classes.modalClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h5", {
      className: classes.cardTitleWhite,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "Log in"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: classes.socialLine,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
      justIcon: true,
      link: true,
      className: classes.socialLineButton,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
      className: "fab fa-google",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
      justIcon: true,
      link: true,
      className: classes.socialLineButton,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
      className: "fab fa-facebook-square",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
      justIcon: true,
      link: true,
      className: classes.socialLineButton,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
      className: "fab fa-instagram",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12___default.a, {
      id: "login-modal-slide-description",
      className: classes.modalBody,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
      id: "loginform",
      onSubmit: function onSubmit() {
        return signin();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "".concat(classes.description, " ").concat(classes.textCenter),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, "Or Be Classical"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styledComponents_Card_CardBody__WEBPACK_IMPORTED_MODULE_19__["default"], {
      className: classes.cardLoginBody,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styledComponents_CustomInput_CustomInput__WEBPACK_IMPORTED_MODULE_20__["default"], {
      id: "login-modal-email",
      formControlProps: {
        fullWidth: true
      },
      inputProps: {
        startAdornment: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_10___default.a, {
          position: "start",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_13___default.a, {
          className: classes.icon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
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
        lineNumber: 122
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styledComponents_CustomInput_CustomInput__WEBPACK_IMPORTED_MODULE_20__["default"], {
      id: "login-modal-pass",
      formControlProps: {
        fullWidth: true
      },
      inputProps: {
        startAdornment: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_10___default.a, {
          position: "start",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_14___default.a, {
          className: classes.icon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
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
        lineNumber: 139
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_9___default.a, {
      className: "".concat(classes.modalFooter, " ").concat(classes.justifyContentCenter),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
      color: "primary",
      simple: true,
      size: "lg",
      onClick: function onClick() {
        signin();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, "Get started")))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_7___default()(_static_jss_material_kit_pro_react_views_componentsSections_javascriptStyles__WEBPACK_IMPORTED_MODULE_21__["default"])(Login));

/***/ }),

/***/ "./components/SplashPage/Register.js":
/*!*******************************************!*\
  !*** ./components/SplashPage/Register.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Queries_User__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Queries/User */ "./components/Queries/User.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "@material-ui/core/ButtonBase");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_MusicNote__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/MusicNote */ "@material-ui/icons/MusicNote");
/* harmony import */ var _material_ui_icons_MusicNote__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MusicNote__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _static_img_icons_TheaterMasks__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../static/img/icons/TheaterMasks */ "./static/img/icons/TheaterMasks.js");
/* harmony import */ var _material_ui_icons_Restaurant__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/Restaurant */ "@material-ui/icons/Restaurant");
/* harmony import */ var _material_ui_icons_Restaurant__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Restaurant__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/Face */ "@material-ui/icons/Face");
/* harmony import */ var _material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/icons/Email */ "@material-ui/icons/Email");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/Check */ "@material-ui/icons/Check");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../styledComponents/CustomButtons/Button */ "./styledComponents/CustomButtons/Button.jsx");
/* harmony import */ var _styledComponents_Card_Card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../styledComponents/Card/Card */ "./styledComponents/Card/Card.jsx");
/* harmony import */ var _styledComponents_Grid_GridContainer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../styledComponents/Grid/GridContainer */ "./styledComponents/Grid/GridContainer.jsx");
/* harmony import */ var _styledComponents_Grid_GridItem__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../styledComponents/Grid/GridItem */ "./styledComponents/Grid/GridItem.jsx");
/* harmony import */ var _styledComponents_CustomInput_CustomInput__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../styledComponents/CustomInput/CustomInput */ "./styledComponents/CustomInput/CustomInput.jsx");
/* harmony import */ var _styledComponents_InfoArea_InfoArea__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../styledComponents/InfoArea/InfoArea */ "./styledComponents/InfoArea/InfoArea.jsx");
/* harmony import */ var _static_jss_material_kit_pro_react_views_componentsSections_javascriptStyles__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles */ "./static/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx");
/* harmony import */ var _components_SplashPage_Terms__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../components/SplashPage/Terms */ "./components/SplashPage/Terms.js");






var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/components/SplashPage/Register.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n\tmutation REGISTER_USER(\n\t\t$firstName: String!\n\t\t$lastName: String!\n\t\t$email: String!\n\t\t$password: String!\n\t) {\n\t\tsignup(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {\n\t\t\tid\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\temail\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






























var REGISTER_USER = graphql_tag__WEBPACK_IMPORTED_MODULE_7___default()(_templateObject());

var Register = function Register(_ref) {
  var classes = _ref.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      modalShowing = _useState2[0],
      setModalShowing = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
      termsShowing = _useState4[0],
      setTermsShowing = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState5, 2),
      terms = _useState6[0],
      setTerms = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({
    name: undefined,
    email: undefined,
    password: undefined
  }),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState7, 2),
      user = _useState8[0],
      setUser = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({
    name: undefined,
    email: undefined,
    password: undefined
  }),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState9, 2),
      err = _useState10[0],
      setError = _useState10[1];

  var handleChange = function handleChange(_ref2) {
    var _ref2$target = _ref2.target,
        name = _ref2$target.name,
        value = _ref2$target.value;
    setUser(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, user, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, name, value)));
  };

  var handleSubmit =
  /*#__PURE__*/
  function () {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e, signup) {
      var nameArray, newUser;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              nameArray = user.name.split(' ');

              if (!(nameArray.length < 2)) {
                _context.next = 6;
                break;
              }

              setError(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, err, {
                name: 'First name and last name required.'
              }));
              _context.next = 10;
              break;

            case 6:
              _context.next = 8;
              return signup({
                variables: {
                  email: user.email,
                  password: user.password,
                  firstName: nameArray[0],
                  lastName: nameArray[1]
                }
              }).catch(function (err) {
                return console.log(err);
              });

            case 8:
              newUser = _context.sent;
              if (newUser) next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/settings');

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function handleSubmit(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_27__["default"], {
    round: true,
    onClick: function onClick() {
      return setModalShowing(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Sign Up"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_13___default.a, {
    classes: {
      root: classes.modalRoot,
      paper: classes.modal + ' ' + classes.modalSignup
    },
    open: modalShowing // TransitionComponent={Transition}
    ,
    keepMounted: true,
    onClose: function onClose() {
      setModalShowing(false);
    },
    "aria-labelledby": "signup-modal-slide-title",
    "aria-describedby": "signup-modal-slide-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styledComponents_Card_Card__WEBPACK_IMPORTED_MODULE_28__["default"], {
    plain: true,
    className: classes.modalSignupCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, termsShowing ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_SplashPage_Terms__WEBPACK_IMPORTED_MODULE_34__["default"], {
    setTermsShowing: setTermsShowing,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12___default.a, {
    id: "signup-modal-slide-title",
    disableTypography: true,
    className: classes.modalHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_27__["default"], {
    simple: true,
    className: classes.modalCloseButton,
    key: "close",
    "aria-label": "Close",
    onClick: function onClick() {
      return setModalShowing(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, ' ', react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_26___default.a, {
    className: classes.modalClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
    className: "".concat(classes.cardTitle, " ").concat(classes.modalTitle),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Register")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_14___default.a, {
    id: "signup-modal-slide-description",
    className: classes.modalBody,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styledComponents_Grid_GridContainer__WEBPACK_IMPORTED_MODULE_29__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styledComponents_Grid_GridItem__WEBPACK_IMPORTED_MODULE_30__["default"], {
    xs: 12,
    sm: 5,
    md: 5,
    className: classes.mlAuto,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styledComponents_InfoArea_InfoArea__WEBPACK_IMPORTED_MODULE_32__["default"], {
    className: classes.infoArea,
    title: "Concerts",
    description: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, "Find shows near you according to your tastes and get notified when your favorite performers are in town."),
    icon: _material_ui_icons_MusicNote__WEBPACK_IMPORTED_MODULE_19___default.a,
    iconColor: "rose",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styledComponents_InfoArea_InfoArea__WEBPACK_IMPORTED_MODULE_32__["default"], {
    className: classes.infoArea,
    title: "Comedy and Theater",
    description: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, "Get the scoop on nearby comedy and theatrical events as well as other kind of live performances."),
    icon: _static_img_icons_TheaterMasks__WEBPACK_IMPORTED_MODULE_20__["default"],
    iconColor: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styledComponents_InfoArea_InfoArea__WEBPACK_IMPORTED_MODULE_32__["default"], {
    className: classes.infoArea,
    title: "Epicurean Adventures",
    description: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, "Be the first to make a reservation at nearby restaurant grand openings or prix fixe events."),
    icon: _material_ui_icons_Restaurant__WEBPACK_IMPORTED_MODULE_21___default.a,
    iconColor: "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styledComponents_Grid_GridItem__WEBPACK_IMPORTED_MODULE_30__["default"], {
    xs: 12,
    sm: 5,
    md: 5,
    className: classes.mrAuto,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: classes.textCenter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_27__["default"], {
    justIcon: true,
    round: true,
    color: "google",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
    className: "fab fa-google",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_27__["default"], {
    justIcon: true,
    round: true,
    color: "facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
    className: "fab fa-facebook-f",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_27__["default"], {
    justIcon: true,
    round: true,
    color: "instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
    className: "fab fa-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
    className: classes.socialTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "or be classical")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_8__["Mutation"], {
    mutation: REGISTER_USER // refetchQueries={[ { query: CURRENT_USER_QUERY } ]}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, function (signup, _ref4) {
    var error = _ref4.error,
        loading = _ref4.loading;
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
      className: classes.form,
      onSubmit: function onSubmit(e) {
        return handleSubmit(e, signup);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("fieldset", {
      style: {
        border: 'none'
      },
      disabled: loading,
      "aria-busy": loading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styledComponents_CustomInput_CustomInput__WEBPACK_IMPORTED_MODULE_31__["default"], {
      error: err.name,
      id: "name",
      formControlProps: {
        fullWidth: true,
        className: classes.customFormControlClasses
      },
      inputProps: {
        startAdornment: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_15___default.a, {
          position: "start",
          className: classes.inputAdornment,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_22___default.a, {
          className: classes.inputAdornmentIcon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223
          },
          __self: this
        })),
        placeholder: 'Full Name...',
        autoComplete: 'name',
        autoFocus: true,
        required: true,
        name: 'name',
        value: user.name,
        onChange: handleChange
      },
      labelText: err.name,
      labelProps: {
        error: true
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styledComponents_CustomInput_CustomInput__WEBPACK_IMPORTED_MODULE_31__["default"], {
      error: err.email,
      id: "email",
      formControlProps: {
        fullWidth: true,
        className: classes.customFormControlClasses
      },
      inputProps: {
        startAdornment: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_15___default.a, {
          position: "start",
          className: classes.inputAdornment,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 253
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_24___default.a, {
          className: classes.inputAdornmentIcon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259
          },
          __self: this
        })),
        placeholder: 'Email...',
        required: true,
        name: 'email',
        value: user.email,
        onChange: handleChange
      },
      label: err.email,
      labelProps: {
        error: true
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styledComponents_CustomInput_CustomInput__WEBPACK_IMPORTED_MODULE_31__["default"], {
      error: err.password,
      id: "password",
      formControlProps: {
        fullWidth: true,
        className: classes.customFormControlClasses
      },
      inputProps: {
        startAdornment: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_15___default.a, {
          position: "start",
          className: classes.inputAdornment,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 287
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_23___default.a, {
          className: classes.inputAdornmentIcon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 293
          },
          __self: this
        }, "lock_outline")),
        placeholder: 'Password...',
        autoComplete: 'new-password',
        required: true,
        name: 'password',
        value: user.password,
        onChange: handleChange,
        error: err.password
      },
      label: err.password,
      labelProps: {
        error: true
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_17___default.a, {
      classes: {
        label: classes.label
      },
      control: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16___default.a, {
        tabIndex: -1,
        checked: terms,
        required: true,
        onClick: function onClick() {
          return setTerms(!terms);
        },
        checkedIcon: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_25___default.a, {
          className: classes.checkedIcon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 327
          },
          __self: this
        }),
        icon: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_25___default.a, {
          className: classes.uncheckedIcon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 334
          },
          __self: this
        }),
        classes: {
          checked: classes.checked,
          root: classes.checkRoot
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }),
      label: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }, "I agree to the", ' ', react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        onClick: function onClick() {
          return setTermsShowing(true);
        },
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }, "terms and conditions"), "."),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: classes.textCenter,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_18___default.a, {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styledComponents_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_27__["default"], {
      round: true,
      color: "primary",
      component: "div",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365
      },
      __self: this
    }, "Get Started")), ' ')));
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_10___default()(_static_jss_material_kit_pro_react_views_componentsSections_javascriptStyles__WEBPACK_IMPORTED_MODULE_33__["default"])(Register));

/***/ }),

/***/ "./components/SplashPage/Terms.js":
/*!****************************************!*\
  !*** ./components/SplashPage/Terms.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styledComponents_CustomButtons_Button_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styledComponents/CustomButtons/Button.jsx */ "./styledComponents/CustomButtons/Button.jsx");
var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/components/SplashPage/Terms.js";



var Terms = function Terms(_ref) {
  var setTermsShowing = _ref.setTermsShowing;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: '15px',
      height: '600px',
      overflow: 'scroll'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styledComponents_CustomButtons_Button_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClick: function onClick() {
      return setTermsShowing(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Go Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Welcome to Up4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "These terms and conditions outline the rules and regulations for the use of Up4's Website."), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "By accessing this website we assume you accept these terms and conditions in full. Do not continue to use Up4's website if you do not accept all of the terms and conditions stated on this page."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: \u201CClient\u201D, \u201CYou\u201D and \u201CYour\u201D refers to you, the person accessing this website and accepting the Company\u2019s terms and conditions. \u201CThe Company\u201D, \u201COurselves\u201D, \u201CWe\u201D, \u201COur\u201D and \u201CUs\u201D, refers to our Company. \u201CParty\u201D, \u201CParties\u201D, or \u201CUs\u201D, refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client\u2019s needs in respect of provision of the Company\u2019s stated services/products, in accordance with and subject to, prevailing law of . Any use of the above terminology or other words in the singular, plural, capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Cookies"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "We employ the use of cookies. By using Up4's website you consent to the use of cookies in accordance with Up4\u2019s privacy policy."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Most of the modern day interactive web sites use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site to enable the functionality of this area and ease of use for those people visiting. Some of our affiliate / advertising partners may also use cookies."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "License"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Unless otherwise stated, Up4 and/or it\u2019s licensors own the intellectual property rights for all material on Up4. All intellectual property rights are reserved. You may view and/or print pages from http://www.up4.life for your own personal use subject to restrictions set in these terms and conditions."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "You must not:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Republish material from http://www.up4.life"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Sell, rent or sub-license material from http://www.up4.life"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Reproduce, duplicate or copy material from http://www.up4.life")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Redistribute content from Up4 (unless content is specifically made for redistribution)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "User Comments"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "This Agreement shall begin on the date hereof."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Certain parts of this website offer the opportunity for users to post and exchange opinions, information, material and data ('Comments') in areas of the website. Up4 does not screen, edit, publish or review Comments prior to their appearance on the website and Comments do not reflect the views or opinions ofUp4, its agents or affiliates. Comments reflect the view and opinion of the person who posts such view or opinion. To the extent permitted by applicable laws Up4shall not be responsible or liable for the Comments or for any loss cost, liability, damages or expenses caused and or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Up4reserves the right to monitor all Comments and to remove any Comments which it considers in its absolute discretion to be inappropriate, offensive or otherwise in breach of these Terms and Conditions."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "You warrant and represent that:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "The Comments do not infringe any intellectual property right, including without limitation copyright, patent or trademark, or other proprietary right of any third party;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material or material which is an invasion of privacy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "You hereby grant to ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Up4"), " a non-exclusive royalty-free license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "Hyperlinking to our Content"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "The following organizations may link to our Web site without prior written approval:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Government agencies;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Search engines;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "News organizations;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "Online directory distributors when they list us in the directory may link to our Web site in the same manner as they hyperlink to the Web sites of other listed businesses; and"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    start: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "These organizations may link to our home page, to publications or to other Web site information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "We may consider and approve in our sole discretion other link requests from the following types of organizations:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "commonly-known consumer and/or business information sources such as Chambers of Commerce, American Automobile Association, AARP and Consumers Union;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "dot.com community sites;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "associations or other groups representing charities, including charity giving sites,"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "online directory distributors;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "internet portals;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "accounting, law and consulting firms whose primary clients are businesses; and"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "educational institutions and trade associations.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "We will approve link requests from these organizations if we determine that: (a) the link would not reflect unfavorably on us or our accredited businesses (for example, trade associations or other organizations representing inherently suspect types of business, such as work-at-home opportunities, shall not be allowed to link); (b)the organization does not have an unsatisfactory record with us; (c) the benefit to us from the visibility associated with the hyperlink outweighs the absence of Up4; and (d) where the link is in the context of general resource information or is otherwise consistent with editorial content in a newsletter or similar product furthering the mission of the organization."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "These organizations may link to our home page, to publications or to other Web site information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and it products or services; and (c) fits within the context of the linking party's site."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, "If you are among the organizations listed in paragraph 2 above and are interested in linking to our website, you must notify us by sending an e-mail to", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:us@cooltable.io",
    title: "send an email to us@cooltable.io",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "us@cooltable.io"), ". Please include your name, your organization name, contact information (such as a phone number and/or e-mail address) as well as the URL of your site, a list of any URLs from which you intend to link to our Web site, and a list of the URL(s) on our site to which you would like to link. Allow 2-3 weeks for a response."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "Approved organizations may hyperlink to our Web site as follows:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, "By use of our corporate name; or"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "By use of the uniform resource locator (Web address) being linked to; or"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, "By use of any other description of our Web site or material being linked to that makes sense within the context and format of content on the linking party's site.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, "No use of Up4\u2019s logo or other artwork will be allowed for linking absent a trademark license agreement."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, "Iframes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, "Without prior approval and express written permission, you may not create frames around our Web pages or use other techniques that alter in any way the visual presentation or appearance of our Web site."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, "Reservation of Rights"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, "We reserve the right at any time and in its sole discretion to request that you remove all links or any particular link to our Web site. You agree to immediately remove all links to our Web site upon such request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuing to link to our Web site, you agree to be bound to and abide by these linking terms and conditions."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "Removal of links from our website"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, "If you find any link on our Web site or any linked web site objectionable for any reason, you may contact us about this. We will consider requests to remove links but will have no obligation to do so or to respond directly to you."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, "Whilst we endeavour to ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we commit to ensuring that the website remains available or that the material on the website is kept up to date."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, "Content Liability"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, "We shall have no responsibility or liability for any content appearing on your Web site. You agree to indemnify and defend us against all claims arising out of or based upon your Website. No link(s) may appear on any page on your Web site or within any context containing content or materials that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, "Disclaimer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, "To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill). Nothing in this disclaimer will:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, "limit or exclude our or your liability for death or personal injury resulting from negligence;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, "limit or exclude our or your liability for fraud or fraudulent misrepresentation;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, "limit any of our or your liabilities in any way that is not permitted under applicable law; or"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, "exclude any of our or your liabilities that may not be excluded under applicable law.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, "The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer or in relation to the subject matter of this disclaimer, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, "To the extent that the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, "Credit & Contact Information"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, "This Terms and conditions page was created at", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://termsandconditionstemplate.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, "termsandconditionstemplate.com"), ' ', "generator. If you have any queries regarding any of our terms, please contact us."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styledComponents_CustomButtons_Button_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClick: function onClick() {
      return setTermsShowing(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, "Go Back"));
};

/* harmony default export */ __webpack_exports__["default"] = (Terms);

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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Music. Food.  Special Events.  Your city is alive.  What are you up for?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Exciting events are all around you but they can be hard to find.  Up4 helps ensure you'll never miss another adventure."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Register__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Login__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(_static_jss_material_kit_pro_react_views_landingPageStyle__WEBPACK_IMPORTED_MODULE_7__["default"])(Splash));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "core-js/library/fn/is-iterable");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "./node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Home_Events__WEBPACK_IMPORTED_MODULE_2__["default"], {
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

/***/ "./static/img/icons/TheaterMasks.js":
/*!******************************************!*\
  !*** ./static/img/icons/TheaterMasks.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/static/img/icons/TheaterMasks.js";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    height: "2.25rem",
    width: "2.25rem",
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "theater-masks",
    class: "svg-inline--fa fa-theater-masks fa-w-20",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "currentColor",
    d: "M206.86 245.15c-35.88 10.45-59.95 41.2-57.53 74.1 11.4-12.72 28.81-23.7 49.9-30.92l7.63-43.18zM95.81 295L64.08 115.49c-.29-1.62.28-2.62.24-2.65 57.76-32.06 123.12-49.01 189.01-49.01 1.61 0 3.23.17 4.85.19 13.95-13.47 31.73-22.83 51.59-26 18.89-3.02 38.05-4.55 57.18-5.32-9.99-13.95-24.48-24.23-41.77-27C301.27 1.89 277.24 0 253.32 0 176.66 0 101.02 19.42 33.2 57.06 9.03 70.48-3.92 98.48 1.05 126.58l31.73 179.51c14.23 80.52 136.33 142.08 204.45 142.08 3.59 0 6.75-.46 10.01-.8-13.52-17.08-28.94-40.48-39.5-67.58-47.61-12.98-106.06-51.62-111.93-84.79zm97.55-137.46c-.73-4.12-2.23-7.87-4.07-11.4-8.25 8.91-20.67 15.75-35.32 18.32-14.65 2.58-28.67.4-39.48-5.17-.52 3.94-.64 7.98.09 12.1 3.84 21.7 24.58 36.19 46.34 32.37 21.75-3.82 36.28-24.52 32.44-46.22zM606.8 120.9c-88.98-49.38-191.43-67.41-291.98-51.35-27.31 4.36-49.08 26.26-54.04 54.36l-31.73 179.51c-15.39 87.05 95.28 196.27 158.31 207.35 63.03 11.09 204.47-53.79 219.86-140.84l31.73-179.51c4.97-28.11-7.98-56.11-32.15-69.52zm-273.24 96.8c3.84-21.7 24.58-36.19 46.34-32.36 21.76 3.83 36.28 24.52 32.45 46.22-.73 4.12-2.23 7.87-4.07 11.4-8.25-8.91-20.67-15.75-35.32-18.32-14.65-2.58-28.67-.4-39.48 5.17-.53-3.95-.65-7.99.08-12.11zm70.47 198.76c-55.68-9.79-93.52-59.27-89.04-112.9 20.6 25.54 56.21 46.17 99.49 53.78 43.28 7.61 83.82.37 111.93-16.6-14.18 51.94-66.71 85.51-122.38 75.72zm130.3-151.34c-8.25-8.91-20.68-15.75-35.33-18.32-14.65-2.58-28.67-.4-39.48 5.17-.52-3.94-.64-7.98.09-12.1 3.84-21.7 24.58-36.19 46.34-32.37 21.75 3.83 36.28 24.52 32.45 46.22-.73 4.13-2.23 7.88-4.07 11.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }));
});

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

/***/ "./static/jss/material-kit-pro-react/components/accordionStyle.jsx":
/*!*************************************************************************!*\
  !*** ./static/jss/material-kit-pro-react/components/accordionStyle.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../material-kit-pro-react */ "./static/jss/material-kit-pro-react.jsx");

// ##############################
// // // Accordion component style
// #############################


var accordionStyle = function accordionStyle(theme) {
  var _$expansionPanelSum, _expansionPanelSummar;

  return {
    root: {
      flexGrow: 1,
      marginBottom: '20px'
    },
    expansionPanel: {
      boxShadow: 'none',
      '&:before': {
        display: 'none !important'
      }
    },
    expansionPanelExpanded: {
      margin: '0'
    },
    expansionPanelSummary: {
      minHeight: 'auto !important',
      backgroundColor: 'transparent',
      borderBottom: '1px solid #ddd',
      padding: '25px 10px 5px 0px',
      borderTopLeftRadius: '3px',
      borderTopRightRadius: '3px',
      color: '#3C4858'
    },
    primaryExpansionPanelSummary: {
      '&:hover': {
        color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["primaryColor"]
      }
    },
    secondaryExpansionPanelSummary: {
      '&:hover': {
        color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["secondaryColor"]
      }
    },
    warningExpansionPanelSummary: {
      '&:hover': {
        color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["warningColor"]
      }
    },
    dangerExpansionPanelSummary: {
      '&:hover': {
        color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["dangerColor"]
      }
    },
    successExpansionPanelSummary: {
      '&:hover': {
        color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["successColor"]
      }
    },
    infoExpansionPanelSummary: {
      '&:hover': {
        color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["infoColor"]
      }
    },
    roseExpansionPanelSummary: {
      '&:hover': {
        color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["roseColor"]
      }
    },
    expansionPanelSummaryExpaned: {
      '& $expansionPanelSummaryExpandIcon': (_$expansionPanelSum = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_$expansionPanelSum, theme.breakpoints.up('md'), {
        top: 'auto !important'
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_$expansionPanelSum, "transform", 'rotate(180deg)'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_$expansionPanelSum, theme.breakpoints.down('sm'), {
        top: '10px !important'
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_$expansionPanelSum, '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)', {
        display: 'inline-block !important',
        top: '10px !important'
      }), _$expansionPanelSum)
    },
    primaryExpansionPanelSummaryExpaned: {
      color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["primaryColor"]
    },
    secondaryExpansionPanelSummaryExpaned: {
      color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["secondaryColor"]
    },
    warningExpansionPanelSummaryExpaned: {
      color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["warningColor"]
    },
    dangerExpansionPanelSummaryExpaned: {
      color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["dangerColor"]
    },
    successExpansionPanelSummaryExpaned: {
      color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["successColor"]
    },
    infoExpansionPanelSummaryExpaned: {
      color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["infoColor"]
    },
    roseExpansionPanelSummaryExpaned: {
      color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["roseColor"]
    },
    expansionPanelSummaryContent: {
      margin: '0 !important'
    },
    expansionPanelSummaryExpandIcon: (_expansionPanelSummar = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_expansionPanelSummar, theme.breakpoints.up('md'), {
      top: 'auto !important'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_expansionPanelSummar, "transform", 'rotate(0deg)'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_expansionPanelSummar, "color", 'inherit'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_expansionPanelSummar, "right", '-2px'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_expansionPanelSummar, theme.breakpoints.down('sm'), {
      top: '10px !important'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_expansionPanelSummar, '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)', {
      display: 'inline-block !important'
    }), _expansionPanelSummar),
    expansionPanelSummaryExpandIconExpanded: {},
    title: {
      fontSize: '15px',
      fontWeight: 'bolder',
      marginTop: '0',
      marginBottom: '0',
      color: 'inherit'
    },
    expansionPanelDetails: {
      display: 'block',
      padding: '15px 0px 5px',
      fontSize: '.875rem'
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (accordionStyle);

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

/***/ "./static/jss/material-kit-pro-react/components/cardFooterStyle.jsx":
/*!**************************************************************************!*\
  !*** ./static/jss/material-kit-pro-react/components/cardFooterStyle.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cardFooterStyle = {
  cardFooter: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: "0.9375rem 1.875rem",
    paddingTop: "0"
  },
  cardFooterProfile: {
    marginTop: "-15px"
  },
  cardFooterPlain: {
    paddingLeft: "5px",
    paddingRight: "5px",
    backgroundColor: "transparent"
  },
  cardFooterPricing: {
    zIndex: "2"
  },
  cardFooterTestimonial: {
    display: "block"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (cardFooterStyle);

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

/***/ "./static/jss/material-kit-pro-react/components/paginationStyle.jsx":
/*!**************************************************************************!*\
  !*** ./static/jss/material-kit-pro-react/components/paginationStyle.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../material-kit-pro-react */ "./static/jss/material-kit-pro-react.jsx");
// ##############################
// // // Pagination component styles
// #############################

var paginationStyle = {
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '0',
    listStyle: 'none',
    borderRadius: '0.25rem'
  },
  paginationItem: {
    display: 'inline'
  },
  paginationLink: {
    ':first-of-type': {
      marginleft: '0'
    },
    border: '0',
    borderRadius: '30px !important',
    transition: 'all .3s',
    padding: '0px 11px',
    margin: '0 3px',
    minWidth: '30px',
    height: '30px',
    minHeight: 'auto',
    lineHeight: '30px',
    fontWeight: '400',
    fontSize: '12px',
    textTransform: 'uppercase',
    background: 'transparent',
    position: 'relative',
    float: 'left',
    textDecoration: 'none',
    boxSizing: 'border-box',
    '&,&:hover,&:focus': {
      color: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["grayColor"]
    },
    '&:hover,&:focus': {
      zIndex: '3',
      backgroundColor: '#eee',
      borderColor: '#ddd'
    },
    '&:hover': {
      cursor: 'pointer'
    }
  },
  primary: {
    '&,&:hover,&:focus': {
      backgroundColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
      borderColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
      color: '#FFFFFF',
      boxShadow: '0 4px 5px 0 rgba(156, 39, 176, 0.14), 0 1px 10px 0 rgba(156, 39, 176, 0.12), 0 2px 4px -1px rgba(156, 39, 176, 0.2)'
    },
    '&:hover,&:focus': {
      zIndex: '2',
      cursor: 'default'
    }
  },
  info: {
    '&,&:hover,&:focus': {
      backgroundColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["infoColor"],
      borderColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["infoColor"],
      color: '#FFFFFF',
      boxShadow: '0 4px 5px 0 rgba(0, 188, 212, 0.14), 0 1px 10px 0 rgba(0, 188, 212, 0.12), 0 2px 4px -1px rgba(0, 188, 212, 0.2)'
    },
    '&:hover,&:focus': {
      zIndex: '2',
      cursor: 'default'
    }
  },
  success: {
    '&,&:hover,&:focus': {
      backgroundColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["successColor"],
      borderColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["successColor"],
      color: '#FFFFFF',
      boxShadow: '0 4px 5px 0 rgba(76, 175, 80, 0.14), 0 1px 10px 0 rgba(76, 175, 80, 0.12), 0 2px 4px -1px rgba(76, 175, 80, 0.2)'
    },
    '&:hover,&:focus': {
      zIndex: '2',
      cursor: 'default'
    }
  },
  warning: {
    '&,&:hover,&:focus': {
      backgroundColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["warningColor"],
      borderColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["warningColor"],
      color: '#FFFFFF',
      boxShadow: '0 4px 5px 0 rgba(255, 152, 0, 0.14), 0 1px 10px 0 rgba(255, 152, 0, 0.12), 0 2px 4px -1px rgba(255, 152, 0, 0.2)'
    },
    '&:hover,&:focus': {
      zIndex: '2',
      cursor: 'default'
    }
  },
  danger: {
    '&,&:hover,&:focus': {
      backgroundColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["dangerColor"],
      borderColor: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_0__["dangerColor"],
      color: '#FFFFFF',
      boxShadow: '0 4px 5px 0 rgba(244, 67, 54, 0.14), 0 1px 10px 0 rgba(244, 67, 54, 0.12), 0 2px 4px -1px rgba(244, 67, 54, 0.2)'
    },
    '&:hover,&:focus': {
      zIndex: '2',
      cursor: 'default'
    }
  },
  disabled: {
    '&,&:hover,&:focus': {
      color: '#777',
      cursor: 'not-allowed',
      backgroundColor: '#fff',
      borderColor: '#ddd'
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (paginationStyle);

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

/***/ "./static/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.jsx":
/*!*************************************************************************************!*\
  !*** ./static/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.jsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../material-kit-pro-react */ "./static/jss/material-kit-pro-react.jsx");
/* harmony import */ var _material_kit_pro_react_customCheckboxRadioSwitchStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../material-kit-pro-react/customCheckboxRadioSwitchStyle */ "./static/jss/material-kit-pro-react/customCheckboxRadioSwitchStyle.jsx");
/* harmony import */ var _material_kit_pro_react_tooltipsStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../material-kit-pro-react/tooltipsStyle */ "./static/jss/material-kit-pro-react/tooltipsStyle.jsx");





var styles = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _material_kit_pro_react_customCheckboxRadioSwitchStyle__WEBPACK_IMPORTED_MODULE_2__["default"], _material_kit_pro_react_tooltipsStyle__WEBPACK_IMPORTED_MODULE_3__["default"], {
  coloredShadow: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["coloredShadow"],
  mlAuto: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["mlAuto"],
  mrAuto: _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["mrAuto"],
  cardTitle: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["cardTitle"], {
    textAlign: 'center',
    marginBottom: '0px !important'
  }),
  cardDescription: {
    color: '#999',
    textAlign: 'center'
  },
  container: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["container"]),
  description: {
    color: '#999'
  },
  section: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _material_kit_pro_react__WEBPACK_IMPORTED_MODULE_1__["section"], {
    padding: '70px 0px'
  }),
  priceContainer: {
    display: 'inline-flex'
  },
  price: {
    fontSize: '18px',
    color: '#9a9a9a'
  },
  pullRight: {
    float: 'right'
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
      pointerEvents: 'none'
    },
    '& a': {
      display: 'block'
    }
  },
  justifyContentBetween: {
    WebkitBoxPack: 'justify!important',
    justifyContent: 'space-between !important'
  },
  customExpandPanel: {
    maxHeight: '273px',
    overflowY: 'scroll',
    '&  label': {
      display: 'block'
    }
  },
  priceSlider: {
    fontWeight: '500'
  },
  refineButton: {
    margin: '-3px 0'
  },
  cardBodyRefine: {
    paddingLeft: '15px',
    paddingRight: '15px'
  },
  textLeft: {
    textAlign: 'left'
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

/***/ "./styledComponents/Accordion/Accordion.jsx":
/*!**************************************************!*\
  !*** ./styledComponents/Accordion/Accordion.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ExpansionPanel */ "@material-ui/core/ExpansionPanel");
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ "@material-ui/core/ExpansionPanelSummary");
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ "@material-ui/core/ExpansionPanelDetails");
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _static_jss_material_kit_pro_react_components_accordionStyle_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../static/jss/material-kit-pro-react/components/accordionStyle.jsx */ "./static/jss/material-kit-pro-react/components/accordionStyle.jsx");








var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/styledComponents/Accordion/Accordion.jsx";

 // @material-ui/core components




 // @material-ui/icons




var Accordion =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Accordion, _React$Component);

  function Accordion(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Accordion);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Accordion).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)), "handleChange", function (panel) {
      return function (event, expanded) {
        var newArray;

        if (_this.state.single) {
          if (_this.state.active[0] === panel) {
            newArray = [];
          } else {
            newArray = [panel];
          }
        } else {
          if (_this.state.active.indexOf(panel) === -1) {
            newArray = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.state.active), [panel]);
          } else {
            newArray = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.state.active);
            newArray.splice(_this.state.active.indexOf(panel), 1);
          }
        }

        _this.setState({
          active: newArray
        });
      };
    });

    _this.state = {
      active: props.active,
      single: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Accordion, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // am facut array din numar ca metoda .find sa functioneze indiferent de ce se intampla.
      if (this.state.active.length === undefined) {
        this.setState({
          active: [this.state.active],
          single: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          collapses = _this$props.collapses,
          activeColor = _this$props.activeColor;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, collapses.map(function (prop, key) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_11___default.a, {
          expanded: _this2.state.active === key || _this2.state.active.indexOf(key) !== -1,
          onChange: _this2.handleChange(key),
          key: key,
          classes: {
            root: classes.expansionPanel,
            expanded: classes.expansionPanelExpanded
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_12___default.a, {
          expandIcon: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_14___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            },
            __self: this
          }),
          classes: {
            root: "".concat(classes.expansionPanelSummary, " ").concat(classes[activeColor + 'ExpansionPanelSummary']),
            expanded: "".concat(classes.expansionPanelSummaryExpaned, " ").concat(classes[activeColor + 'ExpansionPanelSummaryExpaned']),
            content: classes.expansionPanelSummaryContent,
            expandIcon: classes.expansionPanelSummaryExpandIcon
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
          className: classes.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, prop.title)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_13___default.a, {
          className: classes.expansionPanelDetails,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, prop.content));
      }));
    }
  }]);

  return Accordion;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

Accordion.defaultProps = {
  active: -1,
  activeColor: 'primary'
};
Accordion.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired,
  // index of the default active collapse
  active: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number)]),
  collapses: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.shape({
    title: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
    content: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.node
  })).isRequired,
  activeColor: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOf(['primary', 'secondary', 'warning', 'danger', 'success', 'info', 'rose'])
};
/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_10___default()(_static_jss_material_kit_pro_react_components_accordionStyle_jsx__WEBPACK_IMPORTED_MODULE_15__["default"])(Accordion));

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

/***/ "./styledComponents/Card/CardFooter.jsx":
/*!**********************************************!*\
  !*** ./styledComponents/Card/CardFooter.jsx ***!
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
/* harmony import */ var _static_jss_material_kit_pro_react_components_cardFooterStyle_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/jss/material-kit-pro-react/components/cardFooterStyle.jsx */ "./static/jss/material-kit-pro-react/components/cardFooterStyle.jsx");



var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/styledComponents/Card/CardFooter.jsx";
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components



function CardFooter(_ref) {
  var _classNames;

  var props = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _ref);

  var classes = props.classes,
      className = props.className,
      children = props.children,
      plain = props.plain,
      profile = props.profile,
      pricing = props.pricing,
      testimonial = props.testimonial,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "children", "plain", "profile", "pricing", "testimonial"]);

  var cardFooterClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardFooter, true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardFooterPlain, plain), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardFooterProfile, profile || testimonial), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardFooterPricing, pricing), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardFooterTestimonial, testimonial), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, className, className !== undefined), _classNames));
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    className: cardFooterClasses
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), children);
}

CardFooter.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  plain: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  profile: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  pricing: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  testimonial: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(_static_jss_material_kit_pro_react_components_cardFooterStyle_jsx__WEBPACK_IMPORTED_MODULE_7__["default"])(CardFooter));

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

/***/ "./styledComponents/Clearfix/Clearfix.jsx":
/*!************************************************!*\
  !*** ./styledComponents/Clearfix/Clearfix.jsx ***!
  \************************************************/
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

var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/styledComponents/Clearfix/Clearfix.jsx";
 // nodejs library to set properties for components

 // mterial-ui components


var style = {
  clearfix: {
    '&:after,&:before': {
      display: 'table',
      content: '" "'
    },
    '&:after': {
      clear: 'both'
    }
  }
};

function Clearfix(_ref) {
  var props = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _ref);

  var classes = props.classes;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.clearfix,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  });
}

Clearfix.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(style)(Clearfix));

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

/***/ "./styledComponents/Pagination/Pagination.jsx":
/*!****************************************************!*\
  !*** ./styledComponents/Pagination/Pagination.jsx ***!
  \****************************************************/
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
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_jss_material_kit_pro_react_components_paginationStyle_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/jss/material-kit-pro-react/components/paginationStyle.jsx */ "./static/jss/material-kit-pro-react/components/paginationStyle.jsx");


var _jsxFileName = "/Users/lauren/Lambda-School/Labs/labs10-date-planning/frontend/styledComponents/Pagination/Pagination.jsx";
 // nodejs library to set properties for components

 // nodejs library that concatenates classes

 // @material-ui/core components





function Pagination(_ref) {
  var props = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _ref);

  var classes = props.classes,
      pages = props.pages,
      color = props.color,
      className = props.className;
  var paginationClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.pagination, className);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: paginationClasses,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, pages.map(function (prop, key) {
    var _classNames;

    var paginationLink = classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.paginationLink, true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes[color], prop.active), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.disabled, prop.disabled), _classNames));
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      className: classes.paginationItem,
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, prop.onClick !== undefined ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
      onClick: prop.onClick,
      className: paginationLink,
      disabled: prop.disabled,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, prop.text) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
      onClick: function onClick() {
        return console.log("you've clicked " + prop.text);
      },
      className: paginationLink,
      disabled: prop.disabled,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, prop.text));
  }));
}

Pagination.defaultProps = {
  color: 'primary'
};
Pagination.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  pages: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    active: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
    disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
    text: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]).isRequired,
    onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
  })).isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'info', 'success', 'warning', 'danger'])
};
/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(_static_jss_material_kit_pro_react_components_paginationStyle_jsx__WEBPACK_IMPORTED_MODULE_7__["default"])(Pagination));

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

/***/ 4:
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

/***/ "@material-ui/core/ButtonBase":
/*!***********************************************!*\
  !*** external "@material-ui/core/ButtonBase" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ButtonBase");

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

/***/ "@material-ui/core/ExpansionPanel":
/*!***************************************************!*\
  !*** external "@material-ui/core/ExpansionPanel" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanel");

/***/ }),

/***/ "@material-ui/core/ExpansionPanelDetails":
/*!**********************************************************!*\
  !*** external "@material-ui/core/ExpansionPanelDetails" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelDetails");

/***/ }),

/***/ "@material-ui/core/ExpansionPanelSummary":
/*!**********************************************************!*\
  !*** external "@material-ui/core/ExpansionPanelSummary" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelSummary");

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

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Tooltip":
/*!********************************************!*\
  !*** external "@material-ui/core/Tooltip" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

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

/***/ "@material-ui/icons/Cached":
/*!********************************************!*\
  !*** external "@material-ui/icons/Cached" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Cached");

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

/***/ "@material-ui/icons/Email":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Email" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Email");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "@material-ui/icons/Face":
/*!******************************************!*\
  !*** external "@material-ui/icons/Face" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Face");

/***/ }),

/***/ "@material-ui/icons/Mail":
/*!******************************************!*\
  !*** external "@material-ui/icons/Mail" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ "@material-ui/icons/MusicNote":
/*!***********************************************!*\
  !*** external "@material-ui/icons/MusicNote" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MusicNote");

/***/ }),

/***/ "@material-ui/icons/Restaurant":
/*!************************************************!*\
  !*** external "@material-ui/icons/Restaurant" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Restaurant");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

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

/***/ "core-js/library/fn/is-iterable":
/*!*************************************************!*\
  !*** external "core-js/library/fn/is-iterable" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

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

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

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

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map