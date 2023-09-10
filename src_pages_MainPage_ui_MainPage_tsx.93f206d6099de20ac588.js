"use strict";
(self["webpackChunktest"] = self["webpackChunktest"] || []).push([["src_pages_MainPage_ui_MainPage_tsx"],{

/***/ "./src/shared/assets/settings.svg":
/*!****************************************!*\
  !*** ./src/shared/assets/settings.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSettings = function SvgSettings(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    height: "1.2em",
    viewBox: "0 0 512 512"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M0 416c0 17.7 14.3 32 32 32h54.7c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H233.3c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48H32c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0zm192-160a32 32 0 1 1 64 0 32 32 0 1 1-64 0zm32-80c-32.8 0-61 19.7-73.3 48H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h246.7c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48H480c17.7 0 32-14.3 32-32s-14.3-32-32-32h-54.7c-12.3-28.3-40.5-48-73.3-48zm-160-48a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48H32C14.3 64 0 78.3 0 96s14.3 32 32 32h86.7c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H265.3z"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgSettings);

/***/ }),

/***/ "./src/pages/MainPage/ui/MainPage.tsx":
/*!********************************************!*\
  !*** ./src/pages/MainPage/ui/MainPage.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var entities_Flights__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! entities/Flights */ "./src/entities/Flights/index.ts");
/* harmony import */ var widgets_Filter_ui_Filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! widgets/Filter/ui/Filter */ "./src/widgets/Filter/ui/Filter.tsx");
/* harmony import */ var _MainPage_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MainPage.module.scss */ "./src/pages/MainPage/ui/MainPage.module.scss");
/* harmony import */ var widgets_ThemeToggler_ui_ThemeToggler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! widgets/ThemeToggler/ui/ThemeToggler */ "./src/widgets/ThemeToggler/ui/ThemeToggler.tsx");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-responsive */ "./node_modules/react-responsive/dist/react-responsive.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var shared_assets_settings_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/assets/settings.svg */ "./src/shared/assets/settings.svg");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");










var MainPage = function MainPage() {
  var _a;
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('main').t;
  var isTablet = (0,react_responsive__WEBPACK_IMPORTED_MODULE_9__.useMediaQuery)({
    query: '(max-width: 1224px)'
  });
  var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    showSettings = _b[0],
    setShowSettings = _b[1];
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: _MainPage_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].main,
    children: [isTablet ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
        onClick: function onClick() {
          return setShowSettings(function (prev) {
            return !prev;
          });
        },
        className: _MainPage_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].settings__button,
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_assets_settings_svg__WEBPACK_IMPORTED_MODULE_7__["default"], {
          className: _MainPage_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].settings__icon
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_8__.classNames)(_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].sidebar, (_a = {}, _a[_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].opened] = showSettings || !isTablet, _a)),
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(widgets_Filter_ui_Filter__WEBPACK_IMPORTED_MODULE_4__.Filter, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(widgets_ThemeToggler_ui_ThemeToggler__WEBPACK_IMPORTED_MODULE_6__.ThemeToggler, {})]
      })]
    }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_8__.classNames)(_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].sidebar),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(widgets_Filter_ui_Filter__WEBPACK_IMPORTED_MODULE_4__.Filter, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(widgets_ThemeToggler_ui_ThemeToggler__WEBPACK_IMPORTED_MODULE_6__.ThemeToggler, {})]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Flights__WEBPACK_IMPORTED_MODULE_3__.Flights, {})]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);

/***/ }),

/***/ "./src/shared/ui/Checkbox/Checkbox.tsx":
/*!*********************************************!*\
  !*** ./src/shared/ui/Checkbox/Checkbox.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Checkbox: () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checkbox.module.scss */ "./src/shared/ui/Checkbox/Checkbox.module.scss");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



var Checkbox = function Checkbox(props) {
  var className = props.className,
    children = props.children,
    otherProps = __rest(props, ["className", "children"]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: _Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].inputContainer,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
      className: _Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].checkbox,
      htmlFor: otherProps.id,
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", __assign({
        type: 'checkbox'
      }, otherProps, {
        className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)('', {}, [className])
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: _Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]['checkbox--tick']
      }), children]
    })
  });
};

/***/ }),

/***/ "./src/widgets/Filter/ui/Filter.tsx":
/*!******************************************!*\
  !*** ./src/widgets/Filter/ui/Filter.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Filter: () => (/* binding */ Filter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _Filter_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Filter.module.scss */ "./src/widgets/Filter/ui/Filter.module.scss");
/* harmony import */ var entities_Currencies_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! entities/Currencies/index */ "./src/entities/Currencies/index.ts");
/* harmony import */ var widgets_StopCheckboxes_ui_StopCheckboxes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! widgets/StopCheckboxes/ui/StopCheckboxes */ "./src/widgets/StopCheckboxes/ui/StopCheckboxes.tsx");





var Filter = function Filter(props) {
  var className = props.className;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_Filter_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Filter, {}, [className]),
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Currencies_index__WEBPACK_IMPORTED_MODULE_3__.Currency, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(widgets_StopCheckboxes_ui_StopCheckboxes__WEBPACK_IMPORTED_MODULE_4__.StopCheckboxes, {})]
  });
};

/***/ }),

/***/ "./src/widgets/StopCheckboxes/ui/StopCheckboxes.tsx":
/*!**********************************************************!*\
  !*** ./src/widgets/StopCheckboxes/ui/StopCheckboxes.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StopCheckboxes: () => (/* binding */ StopCheckboxes)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _StopCheckboxes_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StopCheckboxes.module.scss */ "./src/widgets/StopCheckboxes/ui/StopCheckboxes.module.scss");
/* harmony import */ var shared_ui_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/ui/Checkbox/Checkbox */ "./src/shared/ui/Checkbox/Checkbox.tsx");
/* harmony import */ var entities_Flights_model_types_flightsSchema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! entities/Flights/model/types/flightsSchema */ "./src/entities/Flights/model/types/flightsSchema.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var entities_Flights_model_slice_FlightsSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! entities/Flights/model/slice/FlightsSlice */ "./src/entities/Flights/model/slice/FlightsSlice.ts");
/* harmony import */ var entities_Flights_model_selectors_getStopFilter_getStopFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! entities/Flights/model/selectors/getStopFilter/getStopFilter */ "./src/entities/Flights/model/selectors/getStopFilter/getStopFilter.ts");








var StopCheckboxes = function StopCheckboxes(props) {
  var className = props.className;
  var dispath = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  var stopFilterArr = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(entities_Flights_model_selectors_getStopFilter_getStopFilter__WEBPACK_IMPORTED_MODULE_7__.getStopFilter);
  var PossibleValuesArr = Object.values(entities_Flights_model_types_flightsSchema__WEBPACK_IMPORTED_MODULE_4__.PossibleStopFilterValues);
  var selectHandler = function selectHandler(e, value) {
    if (value !== entities_Flights_model_types_flightsSchema__WEBPACK_IMPORTED_MODULE_4__.PossibleStopFilterValues.ALL) {
      if (e.target.checked) {
        dispath(entities_Flights_model_slice_FlightsSlice__WEBPACK_IMPORTED_MODULE_6__.flightsActions.addStopFilterValue(value));
      } else {
        dispath(entities_Flights_model_slice_FlightsSlice__WEBPACK_IMPORTED_MODULE_6__.flightsActions.deleteStopFilter(value));
      }
    } else {
      if (e.target.checked) {
        dispath(entities_Flights_model_slice_FlightsSlice__WEBPACK_IMPORTED_MODULE_6__.flightsActions.setAllStopFilter());
      } else {
        dispath(entities_Flights_model_slice_FlightsSlice__WEBPACK_IMPORTED_MODULE_6__.flightsActions.showOnlyStopFilter(entities_Flights_model_types_flightsSchema__WEBPACK_IMPORTED_MODULE_4__.PossibleStopFilterValues.NULL));
      }
    }
  };
  var showOneFilter = function showOneFilter(value) {
    dispath(entities_Flights_model_slice_FlightsSlice__WEBPACK_IMPORTED_MODULE_6__.flightsActions.showOnlyStopFilter(value));
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_StopCheckboxes_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].StopCheckboxes, {}, [className]),
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
      children: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u0435\u0440\u0435\u0441\u0430\u0434\u043E\u043A"
    }), PossibleValuesArr.map(function (value) {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: _StopCheckboxes_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].checkboxContainer,
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {
          checked: stopFilterArr.includes(value),
          onChange: function onChange(e) {
            return selectHandler(e, value);
          },
          children: value
        }), value !== entities_Flights_model_types_flightsSchema__WEBPACK_IMPORTED_MODULE_4__.PossibleStopFilterValues.ALL ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          onClick: function onClick() {
            return showOneFilter(value);
          },
          className: _StopCheckboxes_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].only,
          children: "\u0422\u041E\u041B\u042C\u041A\u041E"
        }) : '']
      }, value);
    })]
  });
};

/***/ }),

/***/ "./src/widgets/ThemeToggler/ui/ThemeToggler.tsx":
/*!******************************************************!*\
  !*** ./src/widgets/ThemeToggler/ui/ThemeToggler.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeToggler: () => (/* binding */ ThemeToggler)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _ThemeToggler_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThemeToggler.module.scss */ "./src/widgets/ThemeToggler/ui/ThemeToggler.module.scss");
/* harmony import */ var app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/providers/ThemeProvider */ "./src/app/providers/ThemeProvider/index.ts");




var ThemeToggler = function ThemeToggler(props) {
  var className = props.className;
  var _a = (0,app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useTheme)(),
    theme = _a.theme,
    toggleTheme = _a.toggleTheme;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_ThemeToggler_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].ThemeToggler, {}, [className]),
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
      className: _ThemeToggler_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["switch"],
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
        checked: theme === app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.Theme.DARK,
        onInput: toggleTheme,
        type: "checkbox"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_ThemeToggler_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].slider, {}, [_ThemeToggler_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]['round']])
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
      children: "\u0422\u0435\u043C\u043D\u0430\u044F \u0442\u0435\u043C\u0430"
    })]
  });
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/MainPage/ui/MainPage.module.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/MainPage/ui/MainPage.module.scss ***!
  \*************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-pages-MainPage-ui-MainPage-module__main {
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 15px;
}
@media screen and (max-width: 1224px) {
  .src-pages-MainPage-ui-MainPage-module__main {
    grid-template-columns: auto;
  }
}

.src-pages-MainPage-ui-MainPage-module__sidebar {
  display: grid;
  height: 65vh;
  align-content: start;
  position: sticky;
  top: 20px;
  transition: all 0.3s;
}

@media screen and (max-width: 1224px) {
  .src-pages-MainPage-ui-MainPage-module__sidebar {
    position: fixed;
    bottom: -100vh;
    top: unset;
    background-color: var(--bg-card);
    border-radius: 15px;
    z-index: 10;
    border: var(--color-border-default) 1px solid;
    right: 60px;
  }
  .src-pages-MainPage-ui-MainPage-module__sidebar.src-pages-MainPage-ui-MainPage-module__opened {
    bottom: 120px;
    right: 60px;
  }
}
.src-pages-MainPage-ui-MainPage-module__settings__button {
  width: 60px;
  height: 60px;
  background-color: var(--bg-card);
  border-radius: 50%;
  position: fixed;
  bottom: 50px;
  right: 50px;
  box-shadow: var(--box-shadow);
  border: 1px solid var(--button-color);
  display: grid;
  justify-content: center;
  align-items: center;
}
.src-pages-MainPage-ui-MainPage-module__settings__icon {
  fill: var(--text-color);
}`, "",{"version":3,"sources":["webpack://./src/pages/MainPage/ui/MainPage.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,8BAAA;EACA,gBAAA;AACJ;AACI;EALJ;IAMQ,2BAAA;EAEN;AACF;;AACA;EACI,aAAA;EACA,YAAA;EACA,oBAAA;EACA,gBAAA;EACA,SAAA;EACA,oBAAA;AAEJ;;AACA;EACI;IACI,eAAA;IACA,cAAA;IACA,UAAA;IACA,gCAAA;IACA,mBAAA;IACA,WAAA;IACA,6CAAA;IACA,WAAA;EAEN;EAAM;IACI,aAAA;IACA,WAAA;EAEV;AACF;AAGI;EACI,WAAA;EACA,YAAA;EACA,gCAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;EACA,WAAA;EACA,6BAAA;EACA,qCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AADR;AAII;EACI,uBAAA;AAFR","sourcesContent":[".main {\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n    column-gap: 15px;\r\n\r\n    @media screen and (max-width: 1224px) {\r\n        grid-template-columns: auto;\r\n    }\r\n}\r\n\r\n.sidebar {\r\n    display: grid;\r\n    height: 65vh;\r\n    align-content: start;\r\n    position: sticky;\r\n    top: 20px;\r\n    transition: all 0.3s;\r\n}\r\n\r\n@media screen and (max-width: 1224px) {\r\n    .sidebar {\r\n        position: fixed;\r\n        bottom: -100vh;\r\n        top: unset;\r\n        background-color: var(--bg-card);\r\n        border-radius: 15px;\r\n        z-index: 10;\r\n        border: var(--color-border-default) 1px solid;\r\n        right: 60px;\r\n\r\n        &.opened {\r\n            bottom: 120px;\r\n            right: 60px;\r\n        }\r\n    }\r\n}\r\n\r\n.settings {\r\n    &__button {\r\n        width: 60px;\r\n        height: 60px;\r\n        background-color: var(--bg-card);\r\n        border-radius: 50%;\r\n        position: fixed;\r\n        bottom: 50px;\r\n        right: 50px;\r\n        box-shadow: var(--box-shadow);\r\n        border: 1px solid var(--button-color);\r\n        display: grid;\r\n        justify-content: center;\r\n        align-items: center;\r\n    }\r\n\r\n    &__icon {\r\n        fill: var(--text-color);\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"main": `src-pages-MainPage-ui-MainPage-module__main`,
	"sidebar": `src-pages-MainPage-ui-MainPage-module__sidebar`,
	"opened": `src-pages-MainPage-ui-MainPage-module__opened`,
	"settings__button": `src-pages-MainPage-ui-MainPage-module__settings__button`,
	"settings__icon": `src-pages-MainPage-ui-MainPage-module__settings__icon`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Checkbox/Checkbox.module.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Checkbox/Checkbox.module.scss ***!
  \**************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-shared-ui-Checkbox-Checkbox-module__inputContainer {
  display: grid;
  grid-auto-flow: column;
}

/* The container */
.src-shared-ui-Checkbox-Checkbox-module__checkbox {
  display: grid;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  align-items: center;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: all 0.2s ease;
}

/* Hide the browser's default checkbox */
.src-shared-ui-Checkbox-Checkbox-module__checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.src-shared-ui-Checkbox-Checkbox-module__checkbox--tick {
  position: absolute;
  top: calc(50% - 10px);
  left: 0;
  height: 20px;
  width: 20px;
  background-color: transparent;
  border: 2px solid #ccc;
  border-radius: 4px;
  transition: all 0.2s ease;
}

/* On mouse-over */
.src-shared-ui-Checkbox-Checkbox-module__checkbox:hover input ~ .src-shared-ui-Checkbox-Checkbox-module__checkbox--tick {
  background-color: transparent;
  border-color: var(--secondary-color);
}

/* When the checkbox is checked */
.src-shared-ui-Checkbox-Checkbox-module__checkbox input:checked ~ .src-shared-ui-Checkbox-Checkbox-module__checkbox--tick {
  background-color: transparent;
  border-color: var(--secondary-color);
}

/* The "tick" (hidden when not checked) */
.src-shared-ui-Checkbox-Checkbox-module__checkbox--tick:after {
  content: "";
  position: absolute;
  display: none;
  transition: all 0.2s ease;
}

/* Show the tick when checked */
.src-shared-ui-Checkbox-Checkbox-module__checkbox input:checked ~ .src-shared-ui-Checkbox-Checkbox-module__checkbox--tick:after {
  display: block;
}

/* Style the tick */
.src-shared-ui-Checkbox-Checkbox-module__checkbox .src-shared-ui-Checkbox-Checkbox-module__checkbox--tick:after {
  left: calc(50% - 3px);
  top: calc(50% - 6px);
  width: 4px;
  height: 7px;
  border: solid var(--secondary-color);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}`, "",{"version":3,"sources":["webpack://./src/shared/ui/Checkbox/Checkbox.module.scss"],"names":[],"mappings":"AAIA;EACI,aAAA;EACA,sBAAA;AAHJ;;AAMA,kBAAA;AACA;EACI,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,eAAA;EACA,yBAAA;EACA,sBAAA;EACA,qBAAA;EACA,iBAAA;EACA,yBAAA;AAHJ;;AAMA,wCAAA;AACA;EACI,kBAAA;EACA,UAAA;EACA,eAAA;EACA,SAAA;EACA,QAAA;AAHJ;;AAMA,6BAAA;AACA;EACI,kBAAA;EACA,qBAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,6BAAA;EACA,sBAAA;EACA,kBAAA;EACA,yBAAA;AAHJ;;AAMA,kBAAA;AACA;EACI,6BAAA;EACA,oCAAA;AAHJ;;AAMA,iCAAA;AACA;EACI,6BAAA;EACA,oCAAA;AAHJ;;AAMA,yCAAA;AACA;EACI,WAAA;EACA,kBAAA;EACA,aAAA;EACA,yBAAA;AAHJ;;AAMA,+BAAA;AACA;EACI,cAAA;AAHJ;;AAMA,mBAAA;AACA;EACI,qBAAA;EACA,oBAAA;EACA,UAAA;EACA,WAAA;EACA,oCAAA;EACA,yBAAA;EACA,wBAAA;AAHJ","sourcesContent":[".Checkbox {\r\n\r\n}\r\n\r\n.inputContainer {\r\n    display: grid;\r\n    grid-auto-flow: column;\r\n}\r\n\r\n/* The container */\r\n.checkbox {\r\n    display: grid;\r\n    position: relative;\r\n    padding-left: 35px;\r\n    cursor: pointer;\r\n    align-items: center;\r\n    font-size: 16px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    transition: all 0.2s ease;\r\n}\r\n\r\n/* Hide the browser's default checkbox */\r\n.checkbox input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 0;\r\n    width: 0;\r\n}\r\n\r\n/* Create a custom checkbox */\r\n.checkbox--tick {\r\n    position: absolute;\r\n    top: calc(50% - 10px);\r\n    left: 0;\r\n    height: 20px;\r\n    width: 20px;\r\n    background-color: transparent;\r\n    border: 2px solid #ccc;\r\n    border-radius: 4px;\r\n    transition: all 0.2s ease;\r\n}\r\n\r\n/* On mouse-over */\r\n.checkbox:hover input ~ .checkbox--tick {\r\n    background-color: transparent;\r\n    border-color: var(--secondary-color);\r\n}\r\n\r\n/* When the checkbox is checked */\r\n.checkbox input:checked ~ .checkbox--tick {\r\n    background-color: transparent;\r\n    border-color: var(--secondary-color);\r\n}\r\n\r\n/* The \"tick\" (hidden when not checked) */\r\n.checkbox--tick:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n    transition: all 0.2s ease;\r\n}\r\n\r\n/* Show the tick when checked */\r\n.checkbox input:checked ~ .checkbox--tick:after {\r\n    display: block;\r\n}\r\n\r\n/* Style the tick */\r\n.checkbox .checkbox--tick:after {\r\n    left: calc(50% - 3px);\r\n    top: calc(50% - 6px);\r\n    width: 4px;\r\n    height: 7px;\r\n    border: solid var(--secondary-color);\r\n    border-width: 0 2px 2px 0;\r\n    transform: rotate(45deg);\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"inputContainer": `src-shared-ui-Checkbox-Checkbox-module__inputContainer`,
	"checkbox": `src-shared-ui-Checkbox-Checkbox-module__checkbox`,
	"checkbox--tick": `src-shared-ui-Checkbox-Checkbox-module__checkbox--tick`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Filter/ui/Filter.module.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Filter/ui/Filter.module.scss ***!
  \***********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-widgets-Filter-ui-Filter-module__Filter {
  background-color: var(--bg-card);
  height: 50vh;
  display: grid;
  padding: 30px;
  border-radius: 15px;
  box-shadow: var(--box-shadow);
}`, "",{"version":3,"sources":["webpack://./src/widgets/Filter/ui/Filter.module.scss"],"names":[],"mappings":"AAAA;EACI,gCAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;AACJ","sourcesContent":[".Filter {\r\n    background-color: var(--bg-card);\r\n    height: 50vh;\r\n    display: grid;\r\n    padding: 30px;\r\n    border-radius: 15px;\r\n    box-shadow: var(--box-shadow);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Filter": `src-widgets-Filter-ui-Filter-module__Filter`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/StopCheckboxes/ui/StopCheckboxes.module.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/StopCheckboxes/ui/StopCheckboxes.module.scss ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-widgets-StopCheckboxes-ui-StopCheckboxes-module__checkboxContainer {
  width: 100%;
  padding: 10px;
  display: grid;
  justify-content: space-between;
  grid-auto-flow: column;
  transition: 0.3s;
}
.src-widgets-StopCheckboxes-ui-StopCheckboxes-module__checkboxContainer:hover {
  background-color: var(--hover-color);
}
.src-widgets-StopCheckboxes-ui-StopCheckboxes-module__checkboxContainer:hover .src-widgets-StopCheckboxes-ui-StopCheckboxes-module__only {
  display: block;
}

.src-widgets-StopCheckboxes-ui-StopCheckboxes-module__only {
  display: none;
  cursor: pointer;
  color: var(--secondary-color);
}`, "",{"version":3,"sources":["webpack://./src/widgets/StopCheckboxes/ui/StopCheckboxes.module.scss"],"names":[],"mappings":"AAIA;EACI,WAAA;EACA,aAAA;EACA,aAAA;EACA,8BAAA;EACA,sBAAA;EACA,gBAAA;AAHJ;AAKI;EACI,oCAAA;AAHR;AAKQ;EACI,cAAA;AAHZ;;AAQA;EACI,aAAA;EACA,eAAA;EACA,6BAAA;AALJ","sourcesContent":[".StopCheckboxes {\r\n\r\n}\r\n\r\n.checkboxContainer {\r\n    width: 100%;\r\n    padding: 10px;\r\n    display: grid;\r\n    justify-content: space-between;\r\n    grid-auto-flow: column;\r\n    transition: 0.3s;\r\n\r\n    &:hover {\r\n        background-color: var(--hover-color);\r\n\r\n        & .only {\r\n            display: block;\r\n        }\r\n    }\r\n}\r\n\r\n.only {\r\n    display: none;\r\n    cursor: pointer;\r\n    color: var(--secondary-color);\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"checkboxContainer": `src-widgets-StopCheckboxes-ui-StopCheckboxes-module__checkboxContainer`,
	"only": `src-widgets-StopCheckboxes-ui-StopCheckboxes-module__only`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/ThemeToggler/ui/ThemeToggler.module.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/ThemeToggler/ui/ThemeToggler.module.scss ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-widgets-ThemeToggler-ui-ThemeToggler-module__ThemeToggler {
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  justify-self: center;
  column-gap: 20px;
  align-items: center;
  margin-top: 16px;
  padding: 19px 25px;
  border-radius: 55px;
  background-color: var(--bg-card);
  box-shadow: var(--box-shadow);
}

.src-widgets-ThemeToggler-ui-ThemeToggler-module__switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.src-widgets-ThemeToggler-ui-ThemeToggler-module__switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.src-widgets-ThemeToggler-ui-ThemeToggler-module__slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.src-widgets-ThemeToggler-ui-ThemeToggler-module__slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .src-widgets-ThemeToggler-ui-ThemeToggler-module__slider {
  background-color: var(--secondary-color);
}

input:focus + .src-widgets-ThemeToggler-ui-ThemeToggler-module__slider {
  box-shadow: 0 0 1px var(--secondary-color);
}

input:checked + .src-widgets-ThemeToggler-ui-ThemeToggler-module__slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.src-widgets-ThemeToggler-ui-ThemeToggler-module__slider.src-widgets-ThemeToggler-ui-ThemeToggler-module__round {
  border-radius: 34px;
}

.src-widgets-ThemeToggler-ui-ThemeToggler-module__slider.src-widgets-ThemeToggler-ui-ThemeToggler-module__round:before {
  border-radius: 50%;
}`, "",{"version":3,"sources":["webpack://./src/widgets/ThemeToggler/ui/ThemeToggler.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,oBAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;EACA,gCAAA;EACA,6BAAA;AACJ;;AAEA;EACI,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;AACJ;;AAEA;EACI,UAAA;EACA,QAAA;EACA,SAAA;AACJ;;AAEA;EACI,kBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,sBAAA;EACA,wBAAA;EACA,gBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,SAAA;EACA,WAAA;EACA,uBAAA;EACA,wBAAA;EACA,gBAAA;AACJ;;AAEA;EACI,wCAAA;AACJ;;AAEA;EACI,0CAAA;AACJ;;AAEA;EACI,mCAAA;EACA,+BAAA;EACA,2BAAA;AACJ;;AAEA;EACI,mBAAA;AACJ;;AAEA;EACI,kBAAA;AACJ","sourcesContent":[".ThemeToggler {\r\n    display: grid;\r\n    grid-auto-flow: column;\r\n    justify-content: center;\r\n    justify-self: center;\r\n    column-gap: 20px;\r\n    align-items: center;\r\n    margin-top: 16px;\r\n    padding: 19px 25px;\r\n    border-radius: 55px;\r\n    background-color: var(--bg-card);\r\n    box-shadow: var(--box-shadow);\r\n}\r\n\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 60px;\r\n    height: 34px;\r\n}\r\n\r\n.switch input {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n}\r\n\r\n.slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 26px;\r\n    width: 26px;\r\n    left: 4px;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n}\r\n\r\ninput:checked + .slider {\r\n    background-color: var(--secondary-color);\r\n}\r\n\r\ninput:focus + .slider {\r\n    box-shadow: 0 0 1px var(--secondary-color);\r\n}\r\n\r\ninput:checked + .slider:before {\r\n    -webkit-transform: translateX(26px);\r\n    -ms-transform: translateX(26px);\r\n    transform: translateX(26px);\r\n}\r\n\r\n.slider.round {\r\n    border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n    border-radius: 50%;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ThemeToggler": `src-widgets-ThemeToggler-ui-ThemeToggler-module__ThemeToggler`,
	"switch": `src-widgets-ThemeToggler-ui-ThemeToggler-module__switch`,
	"slider": `src-widgets-ThemeToggler-ui-ThemeToggler-module__slider`,
	"round": `src-widgets-ThemeToggler-ui-ThemeToggler-module__round`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/MainPage/ui/MainPage.module.scss":
/*!****************************************************!*\
  !*** ./src/pages/MainPage/ui/MainPage.module.scss ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./MainPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/MainPage/ui/MainPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./MainPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/MainPage/ui/MainPage.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./MainPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/MainPage/ui/MainPage.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/shared/ui/Checkbox/Checkbox.module.scss":
/*!*****************************************************!*\
  !*** ./src/shared/ui/Checkbox/Checkbox.module.scss ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Checkbox.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Checkbox/Checkbox.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Checkbox.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Checkbox/Checkbox.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Checkbox.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Checkbox/Checkbox.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/widgets/Filter/ui/Filter.module.scss":
/*!**************************************************!*\
  !*** ./src/widgets/Filter/ui/Filter.module.scss ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Filter_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Filter.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Filter/ui/Filter.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Filter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Filter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Filter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Filter_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Filter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Filter.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Filter/ui/Filter.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Filter_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Filter.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Filter/ui/Filter.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Filter_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Filter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Filter_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Filter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Filter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Filter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Filter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Filter_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/widgets/StopCheckboxes/ui/StopCheckboxes.module.scss":
/*!******************************************************************!*\
  !*** ./src/widgets/StopCheckboxes/ui/StopCheckboxes.module.scss ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_StopCheckboxes_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./StopCheckboxes.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/StopCheckboxes/ui/StopCheckboxes.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_StopCheckboxes_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_StopCheckboxes_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_StopCheckboxes_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_StopCheckboxes_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_StopCheckboxes_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./StopCheckboxes.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/StopCheckboxes/ui/StopCheckboxes.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_StopCheckboxes_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./StopCheckboxes.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/StopCheckboxes/ui/StopCheckboxes.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_StopCheckboxes_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_StopCheckboxes_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_StopCheckboxes_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_StopCheckboxes_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_StopCheckboxes_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_StopCheckboxes_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_StopCheckboxes_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_StopCheckboxes_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/widgets/ThemeToggler/ui/ThemeToggler.module.scss":
/*!**************************************************************!*\
  !*** ./src/widgets/ThemeToggler/ui/ThemeToggler.module.scss ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ThemeToggler_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./ThemeToggler.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/ThemeToggler/ui/ThemeToggler.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ThemeToggler_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ThemeToggler_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ThemeToggler_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ThemeToggler_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ThemeToggler_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./ThemeToggler.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/ThemeToggler/ui/ThemeToggler.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ThemeToggler_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./ThemeToggler.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/ThemeToggler/ui/ThemeToggler.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ThemeToggler_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ThemeToggler_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ThemeToggler_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ThemeToggler_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ThemeToggler_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ThemeToggler_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ThemeToggler_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ThemeToggler_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX01haW5QYWdlX3VpX01haW5QYWdlX3RzeC45M2YyMDZkNjA5OWRlMjBhYzU4OC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLHNCQUFzQixzRUFBc0UsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELGlDQUFpQyxrQkFBa0I7QUFDM1E7QUFDL0I7QUFDQSxzQkFBc0IsZ0RBQW1CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLEdBQUcseUNBQXlDLGdEQUFtQjtBQUMvRDtBQUNBLEdBQUc7QUFDSDtBQUNBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWjREO0FBQ3JEO0FBQ2M7QUFDSjtBQUNPO0FBQ1Q7QUFDMkI7QUFDbkI7QUFDSztBQUNRO0FBQzlELElBQUllLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFBLEVBQWU7RUFDdkIsSUFBSUMsRUFBRTtFQUNOLElBQUlDLENBQUMsR0FBR1YsNkRBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQ1UsQ0FBQztFQUNoQyxJQUFJQyxRQUFRLEdBQUdOLCtEQUFhLENBQUM7SUFBRU8sS0FBSyxFQUFFO0VBQXNCLENBQUMsQ0FBQztFQUM5RCxJQUFJQyxFQUFFLEdBQUdkLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUVlLFlBQVksR0FBR0QsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUFFRSxlQUFlLEdBQUdGLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDdkUsT0FBUWpCLHVEQUFLLENBQUMsS0FBSyxFQUFFO0lBQUVvQixTQUFTLEVBQUViLDZEQUFHLENBQUNjLElBQUk7SUFBRUMsUUFBUSxFQUFFLENBQUNQLFFBQVEsR0FDbkRmLHVEQUFLLENBQUNFLHVEQUFTLEVBQUU7TUFBRW9CLFFBQVEsRUFBRSxDQUFDeEIsc0RBQUksQ0FBQyxRQUFRLEVBQUU7UUFBRXlCLE9BQU8sRUFBRSxTQUFBQSxRQUFBLEVBQVk7VUFBRSxPQUFPSixlQUFlLENBQUMsVUFBVUssSUFBSSxFQUFFO1lBQUUsT0FBTyxDQUFDQSxJQUFJO1VBQUUsQ0FBQyxDQUFDO1FBQUUsQ0FBQztRQUFFSixTQUFTLEVBQUViLDZEQUFHLENBQUNrQixnQkFBZ0I7UUFBRUgsUUFBUSxFQUFFeEIsc0RBQUksQ0FBQ1ksa0VBQVksRUFBRTtVQUFFVSxTQUFTLEVBQUViLDZEQUFHLENBQUNtQjtRQUFlLENBQUM7TUFBRSxDQUFDLENBQUMsRUFBRTFCLHVEQUFLLENBQUMsS0FBSyxFQUFFO1FBQUVvQixTQUFTLEVBQUVULDRFQUFVLENBQUNKLDZEQUFHLENBQUNvQixPQUFPLEdBQUdkLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDblJBLEVBQUUsQ0FBQ04sNkRBQUcsQ0FBQ3FCLE1BQU0sQ0FBQyxHQUFHVixZQUFZLElBQUksQ0FBQ0gsUUFBUSxFQUMxQ0YsRUFBRSxDQUFDLENBQUM7UUFBRVMsUUFBUSxFQUFFLENBQUN4QixzREFBSSxDQUFDUSw0REFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUVSLHNEQUFJLENBQUNVLDhFQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7TUFBRSxDQUFDLENBQUM7SUFBRSxDQUFDLENBQUMsR0FFN0VSLHVEQUFLLENBQUMsS0FBSyxFQUFFO01BQUVvQixTQUFTLEVBQUVULDRFQUFVLENBQUNKLDZEQUFHLENBQUNvQixPQUFPLENBQUM7TUFBRUwsUUFBUSxFQUFFLENBQUN4QixzREFBSSxDQUFDUSw0REFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUVSLHNEQUFJLENBQUNVLDhFQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFBRSxDQUFDLENBQUMsRUFBRVYsc0RBQUksQ0FBQ08scURBQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztFQUFFLENBQUMsQ0FBQztBQUNySixDQUFDO0FBQ0QsaUVBQWVPLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ2QixJQUFJaUIsUUFBUSxHQUFJLFNBQUksSUFBSSxTQUFJLENBQUNBLFFBQVEsSUFBSyxZQUFZO0VBQ2xEQSxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTSxJQUFJLFVBQVNqQixDQUFDLEVBQUU7SUFDcEMsS0FBSyxJQUFJa0IsQ0FBQyxFQUFFQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBTSxFQUFFSCxDQUFDLEdBQUdDLENBQUMsRUFBRUQsQ0FBQyxFQUFFLEVBQUU7TUFDakRELENBQUMsR0FBR0csU0FBUyxDQUFDRixDQUFDLENBQUM7TUFDaEIsS0FBSyxJQUFJSSxDQUFDLElBQUlMLENBQUMsRUFBRSxJQUFJRixNQUFNLENBQUNRLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNSLENBQUMsRUFBRUssQ0FBQyxDQUFDLEVBQzNEdkIsQ0FBQyxDQUFDdUIsQ0FBQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ0ssQ0FBQyxDQUFDO0lBQ25CO0lBQ0EsT0FBT3ZCLENBQUM7RUFDWixDQUFDO0VBQ0QsT0FBT2UsUUFBUSxDQUFDWSxLQUFLLENBQUMsSUFBSSxFQUFFTixTQUFTLENBQUM7QUFDMUMsQ0FBQztBQUNELElBQUlPLE1BQU0sR0FBSSxTQUFJLElBQUksU0FBSSxDQUFDQSxNQUFNLElBQUssVUFBVVYsQ0FBQyxFQUFFVyxDQUFDLEVBQUU7RUFDbEQsSUFBSTdCLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDVixLQUFLLElBQUl1QixDQUFDLElBQUlMLENBQUMsRUFBRSxJQUFJRixNQUFNLENBQUNRLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNSLENBQUMsRUFBRUssQ0FBQyxDQUFDLElBQUlNLENBQUMsQ0FBQ0MsT0FBTyxDQUFDUCxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQy9FdkIsQ0FBQyxDQUFDdUIsQ0FBQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ0ssQ0FBQyxDQUFDO0VBQ2YsSUFBSUwsQ0FBQyxJQUFJLElBQUksSUFBSSxPQUFPRixNQUFNLENBQUNlLHFCQUFxQixLQUFLLFVBQVUsRUFDL0QsS0FBSyxJQUFJWixDQUFDLEdBQUcsQ0FBQyxFQUFFSSxDQUFDLEdBQUdQLE1BQU0sQ0FBQ2UscUJBQXFCLENBQUNiLENBQUMsQ0FBQyxFQUFFQyxDQUFDLEdBQUdJLENBQUMsQ0FBQ0QsTUFBTSxFQUFFSCxDQUFDLEVBQUUsRUFBRTtJQUNwRSxJQUFJVSxDQUFDLENBQUNDLE9BQU8sQ0FBQ1AsQ0FBQyxDQUFDSixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSUgsTUFBTSxDQUFDUSxTQUFTLENBQUNRLG9CQUFvQixDQUFDTixJQUFJLENBQUNSLENBQUMsRUFBRUssQ0FBQyxDQUFDSixDQUFDLENBQUMsQ0FBQyxFQUMxRW5CLENBQUMsQ0FBQ3VCLENBQUMsQ0FBQ0osQ0FBQyxDQUFDLENBQUMsR0FBR0QsQ0FBQyxDQUFDSyxDQUFDLENBQUNKLENBQUMsQ0FBQyxDQUFDO0VBQ3pCO0VBQ0osT0FBT25CLENBQUM7QUFDWixDQUFDO0FBQzhEO0FBQ0Q7QUFDckI7QUFDbEMsSUFBSWlDLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFhQyxLQUFLLEVBQUU7RUFDbkMsSUFBSTVCLFNBQVMsR0FBRzRCLEtBQUssQ0FBQzVCLFNBQVM7SUFBRUUsUUFBUSxHQUFHMEIsS0FBSyxDQUFDMUIsUUFBUTtJQUFFMkIsVUFBVSxHQUFHUCxNQUFNLENBQUNNLEtBQUssRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztFQUNqSCxPQUFRbEQsc0RBQUksQ0FBQyxLQUFLLEVBQUU7SUFBRXNCLFNBQVMsRUFBRWIsNkRBQUcsQ0FBQzJDLGNBQWM7SUFBRTVCLFFBQVEsRUFBRXRCLHVEQUFLLENBQUMsT0FBTyxFQUFFO01BQUVvQixTQUFTLEVBQUViLDZEQUFHLENBQUM0QyxRQUFRO01BQUVDLE9BQU8sRUFBRUgsVUFBVSxDQUFDSSxFQUFFO01BQUUvQixRQUFRLEVBQUUsQ0FBQ3hCLHNEQUFJLENBQUMsT0FBTyxFQUFFK0IsUUFBUSxDQUFDO1FBQUV5QixJQUFJLEVBQUU7TUFBVyxDQUFDLEVBQUVMLFVBQVUsRUFBRTtRQUFFN0IsU0FBUyxFQUFFVCw0RUFBVSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDUyxTQUFTLENBQUM7TUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFdEIsc0RBQUksQ0FBQyxNQUFNLEVBQUU7UUFBRXNCLFNBQVMsRUFBRWIsNkRBQUcsQ0FBQyxnQkFBZ0I7TUFBRSxDQUFDLENBQUMsRUFBRWUsUUFBUTtJQUFFLENBQUM7RUFBRSxDQUFDLENBQUM7QUFDOVQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCOEQ7QUFDRDtBQUN2QjtBQUNjO0FBQ3FCO0FBQ25FLElBQUloQixNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBYTBDLEtBQUssRUFBRTtFQUNqQyxJQUFJNUIsU0FBUyxHQUFHNEIsS0FBSyxDQUFDNUIsU0FBUztFQUMvQixPQUFRcEIsdURBQUssQ0FBQyxLQUFLLEVBQUU7SUFBRW9CLFNBQVMsRUFBRVQsNEVBQVUsQ0FBQ0osMkRBQUcsQ0FBQ0QsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUNjLFNBQVMsQ0FBQyxDQUFDO0lBQUVFLFFBQVEsRUFBRSxDQUFDeEIsc0RBQUksQ0FBQ3lELCtEQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRXpELHNEQUFJLENBQUMwRCxvRkFBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0VBQUUsQ0FBQyxDQUFDO0FBQzFJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSOEQ7QUFDRDtBQUNmO0FBQ1E7QUFDK0I7QUFDL0I7QUFDb0I7QUFDa0I7QUFDdEYsSUFBSUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFhUixLQUFLLEVBQUU7RUFDekMsSUFBSTVCLFNBQVMsR0FBRzRCLEtBQUssQ0FBQzVCLFNBQVM7RUFDL0IsSUFBSTBDLE9BQU8sR0FBR0osd0RBQVcsQ0FBQyxDQUFDO0VBQzNCLElBQUlLLGFBQWEsR0FBR0osd0RBQVcsQ0FBQ0UsdUdBQWEsQ0FBQztFQUM5QyxJQUFJRyxpQkFBaUIsR0FBR2xDLE1BQU0sQ0FBQ21DLE1BQU0sQ0FBQ1IsZ0dBQXdCLENBQUM7RUFDL0QsSUFBSVMsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFhdkIsQ0FBQyxFQUFFd0IsS0FBSyxFQUFFO0lBQ3BDLElBQUlBLEtBQUssS0FBS1YsZ0dBQXdCLENBQUNXLEdBQUcsRUFBRTtNQUN4QyxJQUFJekIsQ0FBQyxDQUFDMEIsTUFBTSxDQUFDQyxPQUFPLEVBQUU7UUFDbEJSLE9BQU8sQ0FBQ0YscUZBQWMsQ0FBQ1csa0JBQWtCLENBQUNKLEtBQUssQ0FBQyxDQUFDO01BQ3JELENBQUMsTUFDSTtRQUNETCxPQUFPLENBQUNGLHFGQUFjLENBQUNZLGdCQUFnQixDQUFDTCxLQUFLLENBQUMsQ0FBQztNQUNuRDtJQUNKLENBQUMsTUFDSTtNQUNELElBQUl4QixDQUFDLENBQUMwQixNQUFNLENBQUNDLE9BQU8sRUFBRTtRQUNsQlIsT0FBTyxDQUFDRixxRkFBYyxDQUFDYSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7TUFDOUMsQ0FBQyxNQUNJO1FBQ0RYLE9BQU8sQ0FBQ0YscUZBQWMsQ0FBQ2Msa0JBQWtCLENBQUNqQixnR0FBd0IsQ0FBQ2tCLElBQUksQ0FBQyxDQUFDO01BQzdFO0lBQ0o7RUFDSixDQUFDO0VBQ0QsSUFBSUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFhVCxLQUFLLEVBQUU7SUFDakNMLE9BQU8sQ0FBQ0YscUZBQWMsQ0FBQ2Msa0JBQWtCLENBQUNQLEtBQUssQ0FBQyxDQUFDO0VBQ3JELENBQUM7RUFDRCxPQUFRbkUsdURBQUssQ0FBQyxLQUFLLEVBQUU7SUFBRW9CLFNBQVMsRUFBRVQsNEVBQVUsQ0FBQ0osbUVBQUcsQ0FBQ2lELGNBQWMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDcEMsU0FBUyxDQUFDLENBQUM7SUFBRUUsUUFBUSxFQUFFLENBQUN4QixzREFBSSxDQUFDLElBQUksRUFBRTtNQUFFd0IsUUFBUSxFQUFFO0lBQXNILENBQUMsQ0FBQyxFQUFFMEMsaUJBQWlCLENBQUNhLEdBQUcsQ0FBQyxVQUFVVixLQUFLLEVBQUU7TUFBRSxPQUFRbkUsdURBQUssQ0FBQyxLQUFLLEVBQUU7UUFBRW9CLFNBQVMsRUFBRWIsbUVBQUcsQ0FBQ3VFLGlCQUFpQjtRQUFFeEQsUUFBUSxFQUFFLENBQUN4QixzREFBSSxDQUFDaUQsaUVBQVEsRUFBRTtVQUFFdUIsT0FBTyxFQUFFUCxhQUFhLENBQUNnQixRQUFRLENBQUNaLEtBQUssQ0FBQztVQUFFYSxRQUFRLEVBQUUsU0FBQUEsU0FBVXJDLENBQUMsRUFBRTtZQUFFLE9BQU91QixhQUFhLENBQUN2QixDQUFDLEVBQUV3QixLQUFLLENBQUM7VUFBRSxDQUFDO1VBQUU3QyxRQUFRLEVBQUU2QztRQUFNLENBQUMsQ0FBQyxFQUFFQSxLQUFLLEtBQUtWLGdHQUF3QixDQUFDVyxHQUFHLEdBQ3ZmdEUsc0RBQUksQ0FBQyxNQUFNLEVBQUU7VUFBRXlCLE9BQU8sRUFBRSxTQUFBQSxRQUFBLEVBQVk7WUFBRSxPQUFPcUQsYUFBYSxDQUFDVCxLQUFLLENBQUM7VUFBRSxDQUFDO1VBQUUvQyxTQUFTLEVBQUViLG1FQUFHLENBQUMwRSxJQUFJO1VBQUUzRCxRQUFRLEVBQUU7UUFBdUMsQ0FBQyxDQUFDLEdBQzVJLEVBQUU7TUFBRSxDQUFDLEVBQUU2QyxLQUFLLENBQUM7SUFBRyxDQUFDLENBQUM7RUFBRSxDQUFDLENBQUM7QUFDaEQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckM4RDtBQUNEO0FBQ2pCO0FBQ2lCO0FBQ3ZELElBQUkzRCxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBYXdDLEtBQUssRUFBRTtFQUN2QyxJQUFJNUIsU0FBUyxHQUFHNEIsS0FBSyxDQUFDNUIsU0FBUztFQUMvQixJQUFJUCxFQUFFLEdBQUdzRSxxRUFBUSxDQUFDLENBQUM7SUFBRUMsS0FBSyxHQUFHdkUsRUFBRSxDQUFDdUUsS0FBSztJQUFFQyxXQUFXLEdBQUd4RSxFQUFFLENBQUN3RSxXQUFXO0VBQ25FLE9BQVFyRix1REFBSyxDQUFDLEtBQUssRUFBRTtJQUFFb0IsU0FBUyxFQUFFVCw0RUFBVSxDQUFDSixpRUFBRyxDQUFDQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQ1ksU0FBUyxDQUFDLENBQUM7SUFBRUUsUUFBUSxFQUFFLENBQUN0Qix1REFBSyxDQUFDLE9BQU8sRUFBRTtNQUFFb0IsU0FBUyxFQUFFYixpRUFBRyxVQUFPO01BQUVlLFFBQVEsRUFBRSxDQUFDeEIsc0RBQUksQ0FBQyxPQUFPLEVBQUU7UUFBRXdFLE9BQU8sRUFBRWMsS0FBSyxLQUFLRiw4REFBSyxDQUFDSSxJQUFJO1FBQUVDLE9BQU8sRUFBRUYsV0FBVztRQUFFL0IsSUFBSSxFQUFFO01BQVcsQ0FBQyxDQUFDLEVBQUV4RCxzREFBSSxDQUFDLE1BQU0sRUFBRTtRQUFFc0IsU0FBUyxFQUFFVCw0RUFBVSxDQUFDSixpRUFBRyxDQUFDaUYsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUNqRixpRUFBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO01BQUUsQ0FBQyxDQUFDO0lBQUUsQ0FBQyxDQUFDLEVBQUVULHNEQUFJLENBQUMsTUFBTSxFQUFFO01BQUV3QixRQUFRLEVBQUU7SUFBZ0UsQ0FBQyxDQUFDO0VBQUUsQ0FBQyxDQUFDO0FBQ3paLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JEO0FBQ21IO0FBQ2pCO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sNkdBQTZHLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsZ0NBQWdDLHNCQUFzQix1Q0FBdUMseUJBQXlCLG1EQUFtRCx3Q0FBd0MsU0FBUyxLQUFLLGtCQUFrQixzQkFBc0IscUJBQXFCLDZCQUE2Qix5QkFBeUIsa0JBQWtCLDZCQUE2QixLQUFLLCtDQUErQyxrQkFBa0IsNEJBQTRCLDJCQUEyQix1QkFBdUIsNkNBQTZDLGdDQUFnQyx3QkFBd0IsMERBQTBELHdCQUF3QiwwQkFBMEIsOEJBQThCLDRCQUE0QixhQUFhLFNBQVMsS0FBSyxtQkFBbUIsbUJBQW1CLHdCQUF3Qix5QkFBeUIsNkNBQTZDLCtCQUErQiw0QkFBNEIseUJBQXlCLHdCQUF3QiwwQ0FBMEMsa0RBQWtELDBCQUEwQixvQ0FBb0MsZ0NBQWdDLFNBQVMscUJBQXFCLG9DQUFvQyxTQUFTLEtBQUssdUJBQXVCO0FBQzcyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRXZDO0FBQ21IO0FBQ2pCO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sOEdBQThHLFVBQVUsV0FBVyxNQUFNLFdBQVcsS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxXQUFXLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sV0FBVyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sV0FBVyxLQUFLLFdBQVcsV0FBVyxNQUFNLFdBQVcsS0FBSyxXQUFXLFdBQVcsTUFBTSxXQUFXLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLFdBQVcsS0FBSyxVQUFVLE1BQU0sV0FBVyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsb0NBQW9DLFNBQVMseUJBQXlCLHNCQUFzQiwrQkFBK0IsS0FBSywwQ0FBMEMsc0JBQXNCLDJCQUEyQiwyQkFBMkIsd0JBQXdCLDRCQUE0Qix3QkFBd0Isa0NBQWtDLCtCQUErQiw4QkFBOEIsMEJBQTBCLGtDQUFrQyxLQUFLLHNFQUFzRSwyQkFBMkIsbUJBQW1CLHdCQUF3QixrQkFBa0IsaUJBQWlCLEtBQUssMkRBQTJELDJCQUEyQiw4QkFBOEIsZ0JBQWdCLHFCQUFxQixvQkFBb0Isc0NBQXNDLCtCQUErQiwyQkFBMkIsa0NBQWtDLEtBQUssd0VBQXdFLHNDQUFzQyw2Q0FBNkMsS0FBSyx5RkFBeUYsc0NBQXNDLDZDQUE2QyxLQUFLLCtFQUErRSxzQkFBc0IsMkJBQTJCLHNCQUFzQixrQ0FBa0MsS0FBSyw2RkFBNkYsdUJBQXVCLEtBQUssaUVBQWlFLDhCQUE4Qiw2QkFBNkIsbUJBQW1CLG9CQUFvQiw2Q0FBNkMsa0NBQWtDLGlDQUFpQyxLQUFLLDJCQUEyQjtBQUNubkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RnZDO0FBQ21IO0FBQ2pCO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywyR0FBMkcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsa0NBQWtDLHlDQUF5QyxxQkFBcUIsc0JBQXNCLHNCQUFzQiw0QkFBNEIsc0NBQXNDLEtBQUssdUJBQXVCO0FBQzVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQnZDO0FBQ21IO0FBQ2pCO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDJIQUEySCxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsMENBQTBDLFNBQVMsNEJBQTRCLG9CQUFvQixzQkFBc0Isc0JBQXNCLHVDQUF1QywrQkFBK0IseUJBQXlCLHFCQUFxQixpREFBaUQseUJBQXlCLCtCQUErQixhQUFhLFNBQVMsS0FBSyxlQUFlLHNCQUFzQix3QkFBd0Isc0NBQXNDLEtBQUssbUJBQW1CO0FBQ3Z4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QnZDO0FBQ21IO0FBQ2pCO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVIQUF1SCxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLHdDQUF3QyxzQkFBc0IsK0JBQStCLGdDQUFnQyw2QkFBNkIseUJBQXlCLDRCQUE0Qix5QkFBeUIsMkJBQTJCLDRCQUE0Qix5Q0FBeUMsc0NBQXNDLEtBQUssaUJBQWlCLDJCQUEyQiw4QkFBOEIsb0JBQW9CLHFCQUFxQixLQUFLLHVCQUF1QixtQkFBbUIsaUJBQWlCLGtCQUFrQixLQUFLLGlCQUFpQiwyQkFBMkIsd0JBQXdCLGVBQWUsZ0JBQWdCLGlCQUFpQixrQkFBa0IsK0JBQStCLGdDQUFnQyx3QkFBd0IsS0FBSyx3QkFBd0IsMkJBQTJCLHNCQUFzQixxQkFBcUIsb0JBQW9CLGtCQUFrQixvQkFBb0IsZ0NBQWdDLGdDQUFnQyx3QkFBd0IsS0FBSyxpQ0FBaUMsaURBQWlELEtBQUssK0JBQStCLG1EQUFtRCxLQUFLLHdDQUF3Qyw0Q0FBNEMsd0NBQXdDLG9DQUFvQyxLQUFLLHVCQUF1Qiw0QkFBNEIsS0FBSyw4QkFBOEIsMkJBQTJCLEtBQUssbUJBQW1CO0FBQzNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GdkMsTUFBd0c7QUFDeEcsTUFBOEY7QUFDOUYsTUFBcUc7QUFDckcsTUFBd0g7QUFDeEgsTUFBaUg7QUFDakgsTUFBaUg7QUFDakgsTUFBb007QUFDcE07QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw4SkFBTzs7O0FBR3hCLElBQUksSUFBVTtBQUNkLE9BQU8sOEpBQU8sV0FBVyxVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDhKQUFPO0FBQ2hDLG9DQUFvQyxtSkFBVyxHQUFHLDhKQUFPOztBQUV6RCxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLG9UQUF1SjtBQUM3SixNQUFNO0FBQUE7QUFDTixzREFBc0QsbUpBQVcsR0FBRyw4SkFBTztBQUMzRSxnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQSwwQ0FBMEMsbUpBQVcsR0FBRyw4SkFBTzs7QUFFL0QscUJBQXFCLDhKQUFPO0FBQzVCLE9BQU87QUFDUDtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOzs7QUFHc0s7QUFDdEssT0FBTyxpRUFBZSw4SkFBTyxJQUFJLDhKQUFPLFVBQVUsOEpBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUU3RSxNQUF3RztBQUN4RyxNQUE4RjtBQUM5RixNQUFxRztBQUNyRyxNQUF3SDtBQUN4SCxNQUFpSDtBQUNqSCxNQUFpSDtBQUNqSCxNQUFvTTtBQUNwTTtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDhKQUFPOzs7QUFHeEIsSUFBSSxJQUFVO0FBQ2QsT0FBTyw4SkFBTyxXQUFXLFVBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsOEpBQU87QUFDaEMsb0NBQW9DLG1KQUFXLEdBQUcsOEpBQU87O0FBRXpELElBQUksaUJBQWlCO0FBQ3JCLE1BQU0scVRBQXVKO0FBQzdKLE1BQU07QUFBQTtBQUNOLHNEQUFzRCxtSkFBVyxHQUFHLDhKQUFPO0FBQzNFLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBLDBDQUEwQyxtSkFBVyxHQUFHLDhKQUFPOztBQUUvRCxxQkFBcUIsOEpBQU87QUFDNUIsT0FBTztBQUNQO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7OztBQUdzSztBQUN0SyxPQUFPLGlFQUFlLDhKQUFPLElBQUksOEpBQU8sVUFBVSw4SkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RTdFLE1BQXdHO0FBQ3hHLE1BQThGO0FBQzlGLE1BQXFHO0FBQ3JHLE1BQXdIO0FBQ3hILE1BQWlIO0FBQ2pILE1BQWlIO0FBQ2pILE1BQWtNO0FBQ2xNO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNEpBQU87OztBQUd4QixJQUFJLElBQVU7QUFDZCxPQUFPLDRKQUFPLFdBQVcsVUFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0SkFBTztBQUNoQyxvQ0FBb0MsaUpBQVcsR0FBRyw0SkFBTzs7QUFFekQsSUFBSSxpQkFBaUI7QUFDckIsTUFBTSxnVEFBcUo7QUFDM0osTUFBTTtBQUFBO0FBQ04sc0RBQXNELGlKQUFXLEdBQUcsNEpBQU87QUFDM0UsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUEsMENBQTBDLGlKQUFXLEdBQUcsNEpBQU87O0FBRS9ELHFCQUFxQiw0SkFBTztBQUM1QixPQUFPO0FBQ1A7QUFDQTs7QUFFQSxFQUFFLFVBQVU7QUFDWjtBQUNBLEdBQUc7QUFDSDs7O0FBR29LO0FBQ3BLLE9BQU8saUVBQWUsNEpBQU8sSUFBSSw0SkFBTyxVQUFVLDRKQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFN0UsTUFBd0c7QUFDeEcsTUFBOEY7QUFDOUYsTUFBcUc7QUFDckcsTUFBd0g7QUFDeEgsTUFBaUg7QUFDakgsTUFBaUg7QUFDakgsTUFBME07QUFDMU07QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxvS0FBTzs7O0FBR3hCLElBQUksSUFBVTtBQUNkLE9BQU8sb0tBQU8sV0FBVyxVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9LQUFPO0FBQ2hDLG9DQUFvQyx5SkFBVyxHQUFHLG9LQUFPOztBQUV6RCxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLHdVQUE2SjtBQUNuSyxNQUFNO0FBQUE7QUFDTixzREFBc0QseUpBQVcsR0FBRyxvS0FBTztBQUMzRSxnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQSwwQ0FBMEMseUpBQVcsR0FBRyxvS0FBTzs7QUFFL0QscUJBQXFCLG9LQUFPO0FBQzVCLE9BQU87QUFDUDtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOzs7QUFHNEs7QUFDNUssT0FBTyxpRUFBZSxvS0FBTyxJQUFJLG9LQUFPLFVBQVUsb0tBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUU3RSxNQUF3RztBQUN4RyxNQUE4RjtBQUM5RixNQUFxRztBQUNyRyxNQUF3SDtBQUN4SCxNQUFpSDtBQUNqSCxNQUFpSDtBQUNqSCxNQUF3TTtBQUN4TTtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLGtLQUFPOzs7QUFHeEIsSUFBSSxJQUFVO0FBQ2QsT0FBTyxrS0FBTyxXQUFXLFVBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsa0tBQU87QUFDaEMsb0NBQW9DLHVKQUFXLEdBQUcsa0tBQU87O0FBRXpELElBQUksaUJBQWlCO0FBQ3JCLE1BQU0sa1VBQTJKO0FBQ2pLLE1BQU07QUFBQTtBQUNOLHNEQUFzRCx1SkFBVyxHQUFHLGtLQUFPO0FBQzNFLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBLDBDQUEwQyx1SkFBVyxHQUFHLGtLQUFPOztBQUUvRCxxQkFBcUIsa0tBQU87QUFDNUIsT0FBTztBQUNQO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7OztBQUcwSztBQUMxSyxPQUFPLGlFQUFlLGtLQUFPLElBQUksa0tBQU8sVUFBVSxrS0FBTyxtQkFBbUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QvLi9zcmMvc2hhcmVkL2Fzc2V0cy9zZXR0aW5ncy5zdmciLCJ3ZWJwYWNrOi8vdGVzdC8uL3NyYy9wYWdlcy9NYWluUGFnZS91aS9NYWluUGFnZS50c3giLCJ3ZWJwYWNrOi8vdGVzdC8uL3NyYy9zaGFyZWQvdWkvQ2hlY2tib3gvQ2hlY2tib3gudHN4Iiwid2VicGFjazovL3Rlc3QvLi9zcmMvd2lkZ2V0cy9GaWx0ZXIvdWkvRmlsdGVyLnRzeCIsIndlYnBhY2s6Ly90ZXN0Ly4vc3JjL3dpZGdldHMvU3RvcENoZWNrYm94ZXMvdWkvU3RvcENoZWNrYm94ZXMudHN4Iiwid2VicGFjazovL3Rlc3QvLi9zcmMvd2lkZ2V0cy9UaGVtZVRvZ2dsZXIvdWkvVGhlbWVUb2dnbGVyLnRzeCIsIndlYnBhY2s6Ly90ZXN0Ly4vc3JjL3BhZ2VzL01haW5QYWdlL3VpL01haW5QYWdlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3Rlc3QvLi9zcmMvc2hhcmVkL3VpL0NoZWNrYm94L0NoZWNrYm94Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL3Rlc3QvLi9zcmMvd2lkZ2V0cy9GaWx0ZXIvdWkvRmlsdGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3Rlc3QvLi9zcmMvd2lkZ2V0cy9TdG9wQ2hlY2tib3hlcy91aS9TdG9wQ2hlY2tib3hlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly90ZXN0Ly4vc3JjL3dpZGdldHMvVGhlbWVUb2dnbGVyL3VpL1RoZW1lVG9nZ2xlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly90ZXN0Ly4vc3JjL3BhZ2VzL01haW5QYWdlL3VpL01haW5QYWdlLm1vZHVsZS5zY3NzP2I2M2YiLCJ3ZWJwYWNrOi8vdGVzdC8uL3NyYy9zaGFyZWQvdWkvQ2hlY2tib3gvQ2hlY2tib3gubW9kdWxlLnNjc3M/N2MwOSIsIndlYnBhY2s6Ly90ZXN0Ly4vc3JjL3dpZGdldHMvRmlsdGVyL3VpL0ZpbHRlci5tb2R1bGUuc2Nzcz8xMmUyIiwid2VicGFjazovL3Rlc3QvLi9zcmMvd2lkZ2V0cy9TdG9wQ2hlY2tib3hlcy91aS9TdG9wQ2hlY2tib3hlcy5tb2R1bGUuc2Nzcz9kZmFhIiwid2VicGFjazovL3Rlc3QvLi9zcmMvd2lkZ2V0cy9UaGVtZVRvZ2dsZXIvdWkvVGhlbWVUb2dnbGVyLm1vZHVsZS5zY3NzPzNkOWIiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9wYXRoO1xuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbnZhciBTdmdTZXR0aW5ncyA9IGZ1bmN0aW9uIFN2Z1NldHRpbmdzKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICBoZWlnaHQ6IFwiMS4yZW1cIixcbiAgICB2aWV3Qm94OiBcIjAgMCA1MTIgNTEyXCJcbiAgfSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTAgNDE2YzAgMTcuNyAxNC4zIDMyIDMyIDMyaDU0LjdjMTIuMyAyOC4zIDQwLjUgNDggNzMuMyA0OHM2MS0xOS43IDczLjMtNDhINDgwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMySDIzMy4zYy0xMi4zLTI4LjMtNDAuNS00OC03My4zLTQ4cy02MSAxOS43LTczLjMgNDhIMzJjLTE3LjcgMC0zMiAxNC4zLTMyIDMyem0xMjggMGEzMiAzMiAwIDEgMSA2NCAwIDMyIDMyIDAgMSAxLTY0IDB6bTE5Mi0xNjBhMzIgMzIgMCAxIDEgNjQgMCAzMiAzMiAwIDEgMS02NCAwem0zMi04MGMtMzIuOCAwLTYxIDE5LjctNzMuMyA0OEgzMmMtMTcuNyAwLTMyIDE0LjMtMzIgMzJzMTQuMyAzMiAzMiAzMmgyNDYuN2MxMi4zIDI4LjMgNDAuNSA0OCA3My4zIDQ4czYxLTE5LjcgNzMuMy00OEg0ODBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJoLTU0LjdjLTEyLjMtMjguMy00MC41LTQ4LTczLjMtNDh6bS0xNjAtNDhhMzIgMzIgMCAxIDEgMC02NCAzMiAzMiAwIDEgMSAwIDY0em03My4zLTY0QzI1MyAzNS43IDIyNC44IDE2IDE5MiAxNnMtNjEgMTkuNy03My4zIDQ4SDMyQzE0LjMgNjQgMCA3OC4zIDAgOTZzMTQuMyAzMiAzMiAzMmg4Ni43YzEyLjMgMjguMyA0MC41IDQ4IDczLjMgNDhzNjEtMTkuNyA3My4zLTQ4SDQ4MGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMkgyNjUuM3pcIlxuICB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFN2Z1NldHRpbmdzOyIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzLCBGcmFnbWVudCBhcyBfRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IEZsaWdodHMgfSBmcm9tIFwiZW50aXRpZXMvRmxpZ2h0c1wiO1xuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSBcIndpZGdldHMvRmlsdGVyL3VpL0ZpbHRlclwiO1xuaW1wb3J0IGNscyBmcm9tIFwiLi9NYWluUGFnZS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgVGhlbWVUb2dnbGVyIH0gZnJvbSBcIndpZGdldHMvVGhlbWVUb2dnbGVyL3VpL1RoZW1lVG9nZ2xlclwiO1xuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUnO1xuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tICdzaGFyZWQvYXNzZXRzL3NldHRpbmdzLnN2Zyc7XG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSBcInNoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVzXCI7XG52YXIgTWFpblBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hO1xuICAgIHZhciB0ID0gdXNlVHJhbnNsYXRpb24oJ21haW4nKS50O1xuICAgIHZhciBpc1RhYmxldCA9IHVzZU1lZGlhUXVlcnkoeyBxdWVyeTogJyhtYXgtd2lkdGg6IDEyMjRweCknIH0pO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKGZhbHNlKSwgc2hvd1NldHRpbmdzID0gX2JbMF0sIHNldFNob3dTZXR0aW5ncyA9IF9iWzFdO1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy5tYWluLCBjaGlsZHJlbjogW2lzVGFibGV0ID9cbiAgICAgICAgICAgICAgICBfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KFwiYnV0dG9uXCIsIHsgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0U2hvd1NldHRpbmdzKGZ1bmN0aW9uIChwcmV2KSB7IHJldHVybiAhcHJldjsgfSk7IH0sIGNsYXNzTmFtZTogY2xzLnNldHRpbmdzX19idXR0b24sIGNoaWxkcmVuOiBfanN4KFNldHRpbmdzSWNvbiwgeyBjbGFzc05hbWU6IGNscy5zZXR0aW5nc19faWNvbiB9KSB9KSwgX2pzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xzLnNpZGViYXIsIChfYSA9IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYVtjbHMub3BlbmVkXSA9IHNob3dTZXR0aW5ncyB8fCAhaXNUYWJsZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hKSksIGNoaWxkcmVuOiBbX2pzeChGaWx0ZXIsIHt9KSwgX2pzeChUaGVtZVRvZ2dsZXIsIHt9KV0gfSldIH0pXG4gICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICBfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuc2lkZWJhciksIGNoaWxkcmVuOiBbX2pzeChGaWx0ZXIsIHt9KSwgX2pzeChUaGVtZVRvZ2dsZXIsIHt9KV0gfSksIF9qc3goRmxpZ2h0cywge30pXSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTWFpblBhZ2U7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tIFwic2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZXNcIjtcbmltcG9ydCBjbHMgZnJvbSAnLi9DaGVja2JveC5tb2R1bGUuc2Nzcyc7XG5leHBvcnQgdmFyIENoZWNrYm94ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSwgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbiwgb3RoZXJQcm9wcyA9IF9fcmVzdChwcm9wcywgW1wiY2xhc3NOYW1lXCIsIFwiY2hpbGRyZW5cIl0pO1xuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLmlucHV0Q29udGFpbmVyLCBjaGlsZHJlbjogX2pzeHMoXCJsYWJlbFwiLCB7IGNsYXNzTmFtZTogY2xzLmNoZWNrYm94LCBodG1sRm9yOiBvdGhlclByb3BzLmlkLCBjaGlsZHJlbjogW19qc3goXCJpbnB1dFwiLCBfX2Fzc2lnbih7IHR5cGU6ICdjaGVja2JveCcgfSwgb3RoZXJQcm9wcywgeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoJycsIHt9LCBbY2xhc3NOYW1lXSkgfSkpLCBfanN4KFwic3BhblwiLCB7IGNsYXNzTmFtZTogY2xzWydjaGVja2JveC0tdGljayddIH0pLCBjaGlsZHJlbl0gfSkgfSkpO1xufTtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSBcInNoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVzXCI7XG5pbXBvcnQgY2xzIGZyb20gJy4vRmlsdGVyLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IEN1cnJlbmN5IH0gZnJvbSBcImVudGl0aWVzL0N1cnJlbmNpZXMvaW5kZXhcIjtcbmltcG9ydCB7IFN0b3BDaGVja2JveGVzIH0gZnJvbSBcIndpZGdldHMvU3RvcENoZWNrYm94ZXMvdWkvU3RvcENoZWNrYm94ZXNcIjtcbmV4cG9ydCB2YXIgRmlsdGVyID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNscy5GaWx0ZXIsIHt9LCBbY2xhc3NOYW1lXSksIGNoaWxkcmVuOiBbX2pzeChDdXJyZW5jeSwge30pLCBfanN4KFN0b3BDaGVja2JveGVzLCB7fSldIH0pKTtcbn07XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gXCJzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lc1wiO1xuaW1wb3J0IGNscyBmcm9tICcuL1N0b3BDaGVja2JveGVzLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSBcInNoYXJlZC91aS9DaGVja2JveC9DaGVja2JveFwiO1xuaW1wb3J0IHsgUG9zc2libGVTdG9wRmlsdGVyVmFsdWVzIH0gZnJvbSBcImVudGl0aWVzL0ZsaWdodHMvbW9kZWwvdHlwZXMvZmxpZ2h0c1NjaGVtYVwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBmbGlnaHRzQWN0aW9ucyB9IGZyb20gXCJlbnRpdGllcy9GbGlnaHRzL21vZGVsL3NsaWNlL0ZsaWdodHNTbGljZVwiO1xuaW1wb3J0IHsgZ2V0U3RvcEZpbHRlciB9IGZyb20gXCJlbnRpdGllcy9GbGlnaHRzL21vZGVsL3NlbGVjdG9ycy9nZXRTdG9wRmlsdGVyL2dldFN0b3BGaWx0ZXJcIjtcbmV4cG9ydCB2YXIgU3RvcENoZWNrYm94ZXMgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lO1xuICAgIHZhciBkaXNwYXRoID0gdXNlRGlzcGF0Y2goKTtcbiAgICB2YXIgc3RvcEZpbHRlckFyciA9IHVzZVNlbGVjdG9yKGdldFN0b3BGaWx0ZXIpO1xuICAgIHZhciBQb3NzaWJsZVZhbHVlc0FyciA9IE9iamVjdC52YWx1ZXMoUG9zc2libGVTdG9wRmlsdGVyVmFsdWVzKTtcbiAgICB2YXIgc2VsZWN0SGFuZGxlciA9IGZ1bmN0aW9uIChlLCB2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgIT09IFBvc3NpYmxlU3RvcEZpbHRlclZhbHVlcy5BTEwpIHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0aChmbGlnaHRzQWN0aW9ucy5hZGRTdG9wRmlsdGVyVmFsdWUodmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpc3BhdGgoZmxpZ2h0c0FjdGlvbnMuZGVsZXRlU3RvcEZpbHRlcih2YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRoKGZsaWdodHNBY3Rpb25zLnNldEFsbFN0b3BGaWx0ZXIoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRoKGZsaWdodHNBY3Rpb25zLnNob3dPbmx5U3RvcEZpbHRlcihQb3NzaWJsZVN0b3BGaWx0ZXJWYWx1ZXMuTlVMTCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgc2hvd09uZUZpbHRlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBkaXNwYXRoKGZsaWdodHNBY3Rpb25zLnNob3dPbmx5U3RvcEZpbHRlcih2YWx1ZSkpO1xuICAgIH07XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuU3RvcENoZWNrYm94ZXMsIHt9LCBbY2xhc3NOYW1lXSksIGNoaWxkcmVuOiBbX2pzeChcImgzXCIsIHsgY2hpbGRyZW46IFwiXFx1MDQxQVxcdTA0M0VcXHUwNDNCXFx1MDQzOFxcdTA0NDdcXHUwNDM1XFx1MDQ0MVxcdTA0NDJcXHUwNDMyXFx1MDQzRSBcXHUwNDNGXFx1MDQzNVxcdTA0NDBcXHUwNDM1XFx1MDQ0MVxcdTA0MzBcXHUwNDM0XFx1MDQzRVxcdTA0M0FcIiB9KSwgUG9zc2libGVWYWx1ZXNBcnIubWFwKGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbHMuY2hlY2tib3hDb250YWluZXIsIGNoaWxkcmVuOiBbX2pzeChDaGVja2JveCwgeyBjaGVja2VkOiBzdG9wRmlsdGVyQXJyLmluY2x1ZGVzKHZhbHVlKSwgb25DaGFuZ2U6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBzZWxlY3RIYW5kbGVyKGUsIHZhbHVlKTsgfSwgY2hpbGRyZW46IHZhbHVlIH0pLCB2YWx1ZSAhPT0gUG9zc2libGVTdG9wRmlsdGVyVmFsdWVzLkFMTCA/XG4gICAgICAgICAgICAgICAgICAgICAgICBfanN4KFwic3BhblwiLCB7IG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNob3dPbmVGaWx0ZXIodmFsdWUpOyB9LCBjbGFzc05hbWU6IGNscy5vbmx5LCBjaGlsZHJlbjogXCJcXHUwNDIyXFx1MDQxRVxcdTA0MUJcXHUwNDJDXFx1MDQxQVxcdTA0MUVcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ10gfSwgdmFsdWUpKTsgfSldIH0pKTtcbn07XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gXCJzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lc1wiO1xuaW1wb3J0IGNscyBmcm9tICcuL1RoZW1lVG9nZ2xlci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBUaGVtZSwgdXNlVGhlbWUgfSBmcm9tIFwiYXBwL3Byb3ZpZGVycy9UaGVtZVByb3ZpZGVyXCI7XG5leHBvcnQgdmFyIFRoZW1lVG9nZ2xlciA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XG4gICAgdmFyIF9hID0gdXNlVGhlbWUoKSwgdGhlbWUgPSBfYS50aGVtZSwgdG9nZ2xlVGhlbWUgPSBfYS50b2dnbGVUaGVtZTtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNscy5UaGVtZVRvZ2dsZXIsIHt9LCBbY2xhc3NOYW1lXSksIGNoaWxkcmVuOiBbX2pzeHMoXCJsYWJlbFwiLCB7IGNsYXNzTmFtZTogY2xzLnN3aXRjaCwgY2hpbGRyZW46IFtfanN4KFwiaW5wdXRcIiwgeyBjaGVja2VkOiB0aGVtZSA9PT0gVGhlbWUuREFSSywgb25JbnB1dDogdG9nZ2xlVGhlbWUsIHR5cGU6IFwiY2hlY2tib3hcIiB9KSwgX2pzeChcInNwYW5cIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xzLnNsaWRlciwge30sIFtjbHNbJ3JvdW5kJ11dKSB9KV0gfSksIF9qc3goXCJzcGFuXCIsIHsgY2hpbGRyZW46IFwiXFx1MDQyMlxcdTA0MzVcXHUwNDNDXFx1MDQzRFxcdTA0MzBcXHUwNDRGIFxcdTA0NDJcXHUwNDM1XFx1MDQzQ1xcdTA0MzBcIiB9KV0gfSkpO1xufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLXBhZ2VzLU1haW5QYWdlLXVpLU1haW5QYWdlLW1vZHVsZV9fbWFpbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbiAgY29sdW1uLWdhcDogMTVweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMjRweCkge1xuICAuc3JjLXBhZ2VzLU1haW5QYWdlLXVpLU1haW5QYWdlLW1vZHVsZV9fbWFpbiB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuICB9XG59XG5cbi5zcmMtcGFnZXMtTWFpblBhZ2UtdWktTWFpblBhZ2UtbW9kdWxlX19zaWRlYmFyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiA2NXZoO1xuICBhbGlnbi1jb250ZW50OiBzdGFydDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAyMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIyNHB4KSB7XG4gIC5zcmMtcGFnZXMtTWFpblBhZ2UtdWktTWFpblBhZ2UtbW9kdWxlX19zaWRlYmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAtMTAwdmg7XG4gICAgdG9wOiB1bnNldDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jYXJkKTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJvcmRlcjogdmFyKC0tY29sb3ItYm9yZGVyLWRlZmF1bHQpIDFweCBzb2xpZDtcbiAgICByaWdodDogNjBweDtcbiAgfVxuICAuc3JjLXBhZ2VzLU1haW5QYWdlLXVpLU1haW5QYWdlLW1vZHVsZV9fc2lkZWJhci5zcmMtcGFnZXMtTWFpblBhZ2UtdWktTWFpblBhZ2UtbW9kdWxlX19vcGVuZWQge1xuICAgIGJvdHRvbTogMTIwcHg7XG4gICAgcmlnaHQ6IDYwcHg7XG4gIH1cbn1cbi5zcmMtcGFnZXMtTWFpblBhZ2UtdWktTWFpblBhZ2UtbW9kdWxlX19zZXR0aW5nc19fYnV0dG9uIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY2FyZCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDUwcHg7XG4gIHJpZ2h0OiA1MHB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnV0dG9uLWNvbG9yKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc3JjLXBhZ2VzLU1haW5QYWdlLXVpLU1haW5QYWdlLW1vZHVsZV9fc2V0dGluZ3NfX2ljb24ge1xuICBmaWxsOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9NYWluUGFnZS91aS9NYWluUGFnZS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDSTtFQUxKO0lBTVEsMkJBQUE7RUFFTjtBQUNGOztBQUNBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0FBRUo7O0FBQ0E7RUFDSTtJQUNJLGVBQUE7SUFDQSxjQUFBO0lBQ0EsVUFBQTtJQUNBLGdDQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsNkNBQUE7SUFDQSxXQUFBO0VBRU47RUFBTTtJQUNJLGFBQUE7SUFDQSxXQUFBO0VBRVY7QUFDRjtBQUdJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRFI7QUFJSTtFQUNJLHVCQUFBO0FBRlJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDE1cHg7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMjRweCkge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgaGVpZ2h0OiA2NXZoO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgdG9wOiAyMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIyNHB4KSB7XFxyXFxuICAgIC5zaWRlYmFyIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgIGJvdHRvbTogLTEwMHZoO1xcclxcbiAgICAgICAgdG9wOiB1bnNldDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNhcmQpO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICAgICAgYm9yZGVyOiB2YXIoLS1jb2xvci1ib3JkZXItZGVmYXVsdCkgMXB4IHNvbGlkO1xcclxcbiAgICAgICAgcmlnaHQ6IDYwcHg7XFxyXFxuXFxyXFxuICAgICAgICAmLm9wZW5lZCB7XFxyXFxuICAgICAgICAgICAgYm90dG9tOiAxMjBweDtcXHJcXG4gICAgICAgICAgICByaWdodDogNjBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2V0dGluZ3Mge1xcclxcbiAgICAmX19idXR0b24ge1xcclxcbiAgICAgICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jYXJkKTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgIGJvdHRvbTogNTBweDtcXHJcXG4gICAgICAgIHJpZ2h0OiA1MHB4O1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1idXR0b24tY29sb3IpO1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pY29uIHtcXHJcXG4gICAgICAgIGZpbGw6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm1haW5cIjogYHNyYy1wYWdlcy1NYWluUGFnZS11aS1NYWluUGFnZS1tb2R1bGVfX21haW5gLFxuXHRcInNpZGViYXJcIjogYHNyYy1wYWdlcy1NYWluUGFnZS11aS1NYWluUGFnZS1tb2R1bGVfX3NpZGViYXJgLFxuXHRcIm9wZW5lZFwiOiBgc3JjLXBhZ2VzLU1haW5QYWdlLXVpLU1haW5QYWdlLW1vZHVsZV9fb3BlbmVkYCxcblx0XCJzZXR0aW5nc19fYnV0dG9uXCI6IGBzcmMtcGFnZXMtTWFpblBhZ2UtdWktTWFpblBhZ2UtbW9kdWxlX19zZXR0aW5nc19fYnV0dG9uYCxcblx0XCJzZXR0aW5nc19faWNvblwiOiBgc3JjLXBhZ2VzLU1haW5QYWdlLXVpLU1haW5QYWdlLW1vZHVsZV9fc2V0dGluZ3NfX2ljb25gXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy1zaGFyZWQtdWktQ2hlY2tib3gtQ2hlY2tib3gtbW9kdWxlX19pbnB1dENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG59XG5cbi8qIFRoZSBjb250YWluZXIgKi9cbi5zcmMtc2hhcmVkLXVpLUNoZWNrYm94LUNoZWNrYm94LW1vZHVsZV9fY2hlY2tib3gge1xuICBkaXNwbGF5OiBncmlkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMzVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXG4uc3JjLXNoYXJlZC11aS1DaGVja2JveC1DaGVja2JveC1tb2R1bGVfX2NoZWNrYm94IGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG59XG5cbi8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xuLnNyYy1zaGFyZWQtdWktQ2hlY2tib3gtQ2hlY2tib3gtbW9kdWxlX19jaGVja2JveC0tdGljayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDUwJSAtIDEwcHgpO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4vKiBPbiBtb3VzZS1vdmVyICovXG4uc3JjLXNoYXJlZC11aS1DaGVja2JveC1DaGVja2JveC1tb2R1bGVfX2NoZWNrYm94OmhvdmVyIGlucHV0IH4gLnNyYy1zaGFyZWQtdWktQ2hlY2tib3gtQ2hlY2tib3gtbW9kdWxlX19jaGVja2JveC0tdGljayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQgKi9cbi5zcmMtc2hhcmVkLXVpLUNoZWNrYm94LUNoZWNrYm94LW1vZHVsZV9fY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5zcmMtc2hhcmVkLXVpLUNoZWNrYm94LUNoZWNrYm94LW1vZHVsZV9fY2hlY2tib3gtLXRpY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG4vKiBUaGUgXCJ0aWNrXCIgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xuLnNyYy1zaGFyZWQtdWktQ2hlY2tib3gtQ2hlY2tib3gtbW9kdWxlX19jaGVja2JveC0tdGljazphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cblxuLyogU2hvdyB0aGUgdGljayB3aGVuIGNoZWNrZWQgKi9cbi5zcmMtc2hhcmVkLXVpLUNoZWNrYm94LUNoZWNrYm94LW1vZHVsZV9fY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5zcmMtc2hhcmVkLXVpLUNoZWNrYm94LUNoZWNrYm94LW1vZHVsZV9fY2hlY2tib3gtLXRpY2s6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogU3R5bGUgdGhlIHRpY2sgKi9cbi5zcmMtc2hhcmVkLXVpLUNoZWNrYm94LUNoZWNrYm94LW1vZHVsZV9fY2hlY2tib3ggLnNyYy1zaGFyZWQtdWktQ2hlY2tib3gtQ2hlY2tib3gtbW9kdWxlX19jaGVja2JveC0tdGljazphZnRlciB7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gM3B4KTtcbiAgdG9wOiBjYWxjKDUwJSAtIDZweCk7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogN3B4O1xuICBib3JkZXI6IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zaGFyZWQvdWkvQ2hlY2tib3gvQ2hlY2tib3gubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFISjs7QUFNQSxrQkFBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUhKOztBQU1BLHdDQUFBO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFISjs7QUFNQSw2QkFBQTtBQUNBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBSEo7O0FBTUEsa0JBQUE7QUFDQTtFQUNJLDZCQUFBO0VBQ0Esb0NBQUE7QUFISjs7QUFNQSxpQ0FBQTtBQUNBO0VBQ0ksNkJBQUE7RUFDQSxvQ0FBQTtBQUhKOztBQU1BLHlDQUFBO0FBQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFISjs7QUFNQSwrQkFBQTtBQUNBO0VBQ0ksY0FBQTtBQUhKOztBQU1BLG1CQUFBO0FBQ0E7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUFISlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuQ2hlY2tib3gge1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUaGUgY29udGFpbmVyICovXFxyXFxuLmNoZWNrYm94IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xcclxcbi5jaGVja2JveCBpbnB1dCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cXHJcXG4uY2hlY2tib3gtLXRpY2sge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogY2FsYyg1MCUgLSAxMHB4KTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogT24gbW91c2Utb3ZlciAqL1xcclxcbi5jaGVja2JveDpob3ZlciBpbnB1dCB+IC5jaGVja2JveC0tdGljayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQgKi9cXHJcXG4uY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja2JveC0tdGljayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi8qIFRoZSBcXFwidGlja1xcXCIgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xcclxcbi5jaGVja2JveC0tdGljazphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi8qIFNob3cgdGhlIHRpY2sgd2hlbiBjaGVja2VkICovXFxyXFxuLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuY2hlY2tib3gtLXRpY2s6YWZ0ZXIge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLyogU3R5bGUgdGhlIHRpY2sgKi9cXHJcXG4uY2hlY2tib3ggLmNoZWNrYm94LS10aWNrOmFmdGVyIHtcXHJcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAzcHgpO1xcclxcbiAgICB0b3A6IGNhbGMoNTAlIC0gNnB4KTtcXHJcXG4gICAgd2lkdGg6IDRweDtcXHJcXG4gICAgaGVpZ2h0OiA3cHg7XFxyXFxuICAgIGJvcmRlcjogc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJpbnB1dENvbnRhaW5lclwiOiBgc3JjLXNoYXJlZC11aS1DaGVja2JveC1DaGVja2JveC1tb2R1bGVfX2lucHV0Q29udGFpbmVyYCxcblx0XCJjaGVja2JveFwiOiBgc3JjLXNoYXJlZC11aS1DaGVja2JveC1DaGVja2JveC1tb2R1bGVfX2NoZWNrYm94YCxcblx0XCJjaGVja2JveC0tdGlja1wiOiBgc3JjLXNoYXJlZC11aS1DaGVja2JveC1DaGVja2JveC1tb2R1bGVfX2NoZWNrYm94LS10aWNrYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtd2lkZ2V0cy1GaWx0ZXItdWktRmlsdGVyLW1vZHVsZV9fRmlsdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY2FyZCk7XG4gIGhlaWdodDogNTB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvd2lkZ2V0cy9GaWx0ZXIvdWkvRmlsdGVyLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkZpbHRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNhcmQpO1xcclxcbiAgICBoZWlnaHQ6IDUwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJGaWx0ZXJcIjogYHNyYy13aWRnZXRzLUZpbHRlci11aS1GaWx0ZXItbW9kdWxlX19GaWx0ZXJgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy13aWRnZXRzLVN0b3BDaGVja2JveGVzLXVpLVN0b3BDaGVja2JveGVzLW1vZHVsZV9fY2hlY2tib3hDb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLnNyYy13aWRnZXRzLVN0b3BDaGVja2JveGVzLXVpLVN0b3BDaGVja2JveGVzLW1vZHVsZV9fY2hlY2tib3hDb250YWluZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XG59XG4uc3JjLXdpZGdldHMtU3RvcENoZWNrYm94ZXMtdWktU3RvcENoZWNrYm94ZXMtbW9kdWxlX19jaGVja2JveENvbnRhaW5lcjpob3ZlciAuc3JjLXdpZGdldHMtU3RvcENoZWNrYm94ZXMtdWktU3RvcENoZWNrYm94ZXMtbW9kdWxlX19vbmx5IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zcmMtd2lkZ2V0cy1TdG9wQ2hlY2tib3hlcy11aS1TdG9wQ2hlY2tib3hlcy1tb2R1bGVfX29ubHkge1xuICBkaXNwbGF5OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3dpZGdldHMvU3RvcENoZWNrYm94ZXMvdWkvU3RvcENoZWNrYm94ZXMubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQUtJO0VBQ0ksb0NBQUE7QUFIUjtBQUtRO0VBQ0ksY0FBQTtBQUhaOztBQVFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQUxKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5TdG9wQ2hlY2tib3hlcyB7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveENvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcclxcblxcclxcbiAgICAgICAgJiAub25seSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLm9ubHkge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjaGVja2JveENvbnRhaW5lclwiOiBgc3JjLXdpZGdldHMtU3RvcENoZWNrYm94ZXMtdWktU3RvcENoZWNrYm94ZXMtbW9kdWxlX19jaGVja2JveENvbnRhaW5lcmAsXG5cdFwib25seVwiOiBgc3JjLXdpZGdldHMtU3RvcENoZWNrYm94ZXMtdWktU3RvcENoZWNrYm94ZXMtbW9kdWxlX19vbmx5YFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtd2lkZ2V0cy1UaGVtZVRvZ2dsZXItdWktVGhlbWVUb2dnbGVyLW1vZHVsZV9fVGhlbWVUb2dnbGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwYWRkaW5nOiAxOXB4IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDU1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNhcmQpO1xuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbn1cblxuLnNyYy13aWRnZXRzLVRoZW1lVG9nZ2xlci11aS1UaGVtZVRvZ2dsZXItbW9kdWxlX19zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLnNyYy13aWRnZXRzLVRoZW1lVG9nZ2xlci11aS1UaGVtZVRvZ2dsZXItbW9kdWxlX19zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4uc3JjLXdpZGdldHMtVGhlbWVUb2dnbGVyLXVpLVRoZW1lVG9nZ2xlci1tb2R1bGVfX3NsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLnNyYy13aWRnZXRzLVRoZW1lVG9nZ2xlci11aS1UaGVtZVRvZ2dsZXItbW9kdWxlX19zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDI2cHg7XG4gIHdpZHRoOiAyNnB4O1xuICBsZWZ0OiA0cHg7XG4gIGJvdHRvbTogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNyYy13aWRnZXRzLVRoZW1lVG9nZ2xlci11aS1UaGVtZVRvZ2dsZXItbW9kdWxlX19zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG5pbnB1dDpmb2N1cyArIC5zcmMtd2lkZ2V0cy1UaGVtZVRvZ2dsZXItdWktVGhlbWVUb2dnbGVyLW1vZHVsZV9fc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNyYy13aWRnZXRzLVRoZW1lVG9nZ2xlci11aS1UaGVtZVRvZ2dsZXItbW9kdWxlX19zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cblxuLnNyYy13aWRnZXRzLVRoZW1lVG9nZ2xlci11aS1UaGVtZVRvZ2dsZXItbW9kdWxlX19zbGlkZXIuc3JjLXdpZGdldHMtVGhlbWVUb2dnbGVyLXVpLVRoZW1lVG9nZ2xlci1tb2R1bGVfX3JvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cblxuLnNyYy13aWRnZXRzLVRoZW1lVG9nZ2xlci11aS1UaGVtZVRvZ2dsZXItbW9kdWxlX19zbGlkZXIuc3JjLXdpZGdldHMtVGhlbWVUb2dnbGVyLXVpLVRoZW1lVG9nZ2xlci1tb2R1bGVfX3JvdW5kOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy93aWRnZXRzL1RoZW1lVG9nZ2xlci91aS9UaGVtZVRvZ2dsZXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx3Q0FBQTtBQUNKOztBQUVBO0VBQ0ksMENBQUE7QUFDSjs7QUFFQTtFQUNJLG1DQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLlRoZW1lVG9nZ2xlciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgY29sdW1uLWdhcDogMjBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXHJcXG4gICAgcGFkZGluZzogMTlweCAyNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1NXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jYXJkKTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi5zd2l0Y2gge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgIGhlaWdodDogMzRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXRjaCBpbnB1dCB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXHJcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyOmJlZm9yZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIGhlaWdodDogMjZweDtcXHJcXG4gICAgd2lkdGg6IDI2cHg7XFxyXFxuICAgIGxlZnQ6IDRweDtcXHJcXG4gICAgYm90dG9tOiA0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXHJcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxyXFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci5yb3VuZCB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJUaGVtZVRvZ2dsZXJcIjogYHNyYy13aWRnZXRzLVRoZW1lVG9nZ2xlci11aS1UaGVtZVRvZ2dsZXItbW9kdWxlX19UaGVtZVRvZ2dsZXJgLFxuXHRcInN3aXRjaFwiOiBgc3JjLXdpZGdldHMtVGhlbWVUb2dnbGVyLXVpLVRoZW1lVG9nZ2xlci1tb2R1bGVfX3N3aXRjaGAsXG5cdFwic2xpZGVyXCI6IGBzcmMtd2lkZ2V0cy1UaGVtZVRvZ2dsZXItdWktVGhlbWVUb2dnbGVyLW1vZHVsZV9fc2xpZGVyYCxcblx0XCJyb3VuZFwiOiBgc3JjLXdpZGdldHMtVGhlbWVUb2dnbGVyLXVpLVRoZW1lVG9nZ2xlci1tb2R1bGVfX3JvdW5kYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTWFpblBhZ2UubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9NYWluUGFnZS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9NYWluUGFnZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0NoZWNrYm94Lm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQ2hlY2tib3gubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQ2hlY2tib3gubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9GaWx0ZXIubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9GaWx0ZXIubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRmlsdGVyLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3RvcENoZWNrYm94ZXMubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdG9wQ2hlY2tib3hlcy5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdG9wQ2hlY2tib3hlcy5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1RoZW1lVG9nZ2xlci5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1RoZW1lVG9nZ2xlci5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9UaGVtZVRvZ2dsZXIubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOlsianN4IiwiX2pzeCIsImpzeHMiLCJfanN4cyIsIkZyYWdtZW50IiwiX0ZyYWdtZW50IiwidXNlU3RhdGUiLCJ1c2VUcmFuc2xhdGlvbiIsIkZsaWdodHMiLCJGaWx0ZXIiLCJjbHMiLCJUaGVtZVRvZ2dsZXIiLCJ1c2VNZWRpYVF1ZXJ5IiwiU2V0dGluZ3NJY29uIiwiY2xhc3NOYW1lcyIsIk1haW5QYWdlIiwiX2EiLCJ0IiwiaXNUYWJsZXQiLCJxdWVyeSIsIl9iIiwic2hvd1NldHRpbmdzIiwic2V0U2hvd1NldHRpbmdzIiwiY2xhc3NOYW1lIiwibWFpbiIsImNoaWxkcmVuIiwib25DbGljayIsInByZXYiLCJzZXR0aW5nc19fYnV0dG9uIiwic2V0dGluZ3NfX2ljb24iLCJzaWRlYmFyIiwib3BlbmVkIiwiX19hc3NpZ24iLCJPYmplY3QiLCJhc3NpZ24iLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwbHkiLCJfX3Jlc3QiLCJlIiwiaW5kZXhPZiIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiQ2hlY2tib3giLCJwcm9wcyIsIm90aGVyUHJvcHMiLCJpbnB1dENvbnRhaW5lciIsImNoZWNrYm94IiwiaHRtbEZvciIsImlkIiwidHlwZSIsIkN1cnJlbmN5IiwiU3RvcENoZWNrYm94ZXMiLCJQb3NzaWJsZVN0b3BGaWx0ZXJWYWx1ZXMiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiZmxpZ2h0c0FjdGlvbnMiLCJnZXRTdG9wRmlsdGVyIiwiZGlzcGF0aCIsInN0b3BGaWx0ZXJBcnIiLCJQb3NzaWJsZVZhbHVlc0FyciIsInZhbHVlcyIsInNlbGVjdEhhbmRsZXIiLCJ2YWx1ZSIsIkFMTCIsInRhcmdldCIsImNoZWNrZWQiLCJhZGRTdG9wRmlsdGVyVmFsdWUiLCJkZWxldGVTdG9wRmlsdGVyIiwic2V0QWxsU3RvcEZpbHRlciIsInNob3dPbmx5U3RvcEZpbHRlciIsIk5VTEwiLCJzaG93T25lRmlsdGVyIiwibWFwIiwiY2hlY2tib3hDb250YWluZXIiLCJpbmNsdWRlcyIsIm9uQ2hhbmdlIiwib25seSIsIlRoZW1lIiwidXNlVGhlbWUiLCJ0aGVtZSIsInRvZ2dsZVRoZW1lIiwiREFSSyIsIm9uSW5wdXQiLCJzbGlkZXIiXSwic291cmNlUm9vdCI6IiJ9