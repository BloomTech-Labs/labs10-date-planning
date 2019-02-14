webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/InputAdornment/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/Icon/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
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
      className: "fab fa-facebook-square",
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
      className: "fab fa-twitter",
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
      className: "fab fa-google-plus-g",
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
      onSubmit: login,
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

/***/ })

})
//# sourceMappingURL=index.js.58e0d8cfe86eeec8e073.hot-update.js.map