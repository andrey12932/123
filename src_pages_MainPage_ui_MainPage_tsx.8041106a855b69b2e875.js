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
}`, "",{"version":3,"sources":["webpack://./src/pages/MainPage/ui/MainPage.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,8BAAA;EACA,gBAAA;AACJ;AACI;EALJ;IAMQ,2BAAA;EAEN;AACF;;AACA;EACI,aAAA;EACA,YAAA;EACA,oBAAA;EACA,gBAAA;EACA,SAAA;EACA,oBAAA;AAEJ;;AACA;EACI;IACI,eAAA;IACA,cAAA;IACA,UAAA;IACA,gCAAA;IACA,mBAAA;IACA,WAAA;IACA,6CAAA;IACA,WAAA;EAEN;EAAM;IACI,aAAA;IACA,WAAA;EAEV;AACF;AAGI;EACI,WAAA;EACA,YAAA;EACA,gCAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;EACA,WAAA;EACA,6BAAA;EACA,qCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AADR","sourcesContent":[".main {\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n    column-gap: 15px;\r\n\r\n    @media screen and (max-width: 1224px) {\r\n        grid-template-columns: auto;\r\n    }\r\n}\r\n\r\n.sidebar {\r\n    display: grid;\r\n    height: 65vh;\r\n    align-content: start;\r\n    position: sticky;\r\n    top: 20px;\r\n    transition: all 0.3s;\r\n}\r\n\r\n@media screen and (max-width: 1224px) {\r\n    .sidebar {\r\n        position: fixed;\r\n        bottom: -100vh;\r\n        top: unset;\r\n        background-color: var(--bg-card);\r\n        border-radius: 15px;\r\n        z-index: 10;\r\n        border: var(--color-border-default) 1px solid;\r\n        right: 60px;\r\n\r\n        &.opened {\r\n            bottom: 120px;\r\n            right: 60px;\r\n        }\r\n    }\r\n}\r\n\r\n.settings {\r\n    &__button {\r\n        width: 60px;\r\n        height: 60px;\r\n        background-color: var(--bg-card);\r\n        border-radius: 50%;\r\n        position: fixed;\r\n        bottom: 50px;\r\n        right: 50px;\r\n        box-shadow: var(--box-shadow);\r\n        border: 1px solid var(--button-color);\r\n        display: grid;\r\n        justify-content: center;\r\n        align-items: center;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"main": `src-pages-MainPage-ui-MainPage-module__main`,
	"sidebar": `src-pages-MainPage-ui-MainPage-module__sidebar`,
	"opened": `src-pages-MainPage-ui-MainPage-module__opened`,
	"settings__button": `src-pages-MainPage-ui-MainPage-module__settings__button`
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
  background-color: #fff;
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
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}`, "",{"version":3,"sources":["webpack://./src/shared/ui/Checkbox/Checkbox.module.scss"],"names":[],"mappings":"AAIA;EACI,aAAA;EACA,sBAAA;AAHJ;;AAMA,kBAAA;AACA;EACI,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,eAAA;EACA,yBAAA;EACA,sBAAA;EACA,qBAAA;EACA,iBAAA;EACA,yBAAA;AAHJ;;AAMA,wCAAA;AACA;EACI,kBAAA;EACA,UAAA;EACA,eAAA;EACA,SAAA;EACA,QAAA;AAHJ;;AAMA,6BAAA;AACA;EACI,kBAAA;EACA,qBAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,sBAAA;EACA,sBAAA;EACA,kBAAA;EACA,yBAAA;AAHJ;;AAMA,kBAAA;AACA;EACI,6BAAA;EACA,oCAAA;AAHJ;;AAMA,iCAAA;AACA;EACI,6BAAA;EACA,oCAAA;AAHJ;;AAMA,yCAAA;AACA;EACI,WAAA;EACA,kBAAA;EACA,aAAA;EACA,yBAAA;AAHJ;;AAMA,+BAAA;AACA;EACI,cAAA;AAHJ;;AAMA,mBAAA;AACA;EACI,qBAAA;EACA,oBAAA;EACA,UAAA;EACA,WAAA;EACA,oCAAA;EACA,yBAAA;EACA,gCAAA;EACA,4BAAA;EACA,wBAAA;AAHJ","sourcesContent":[".Checkbox {\r\n\r\n}\r\n\r\n.inputContainer {\r\n    display: grid;\r\n    grid-auto-flow: column;\r\n}\r\n\r\n/* The container */\r\n.checkbox {\r\n    display: grid;\r\n    position: relative;\r\n    padding-left: 35px;\r\n    cursor: pointer;\r\n    align-items: center;\r\n    font-size: 16px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    transition: all 0.2s ease;\r\n}\r\n\r\n/* Hide the browser's default checkbox */\r\n.checkbox input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 0;\r\n    width: 0;\r\n}\r\n\r\n/* Create a custom checkbox */\r\n.checkbox--tick {\r\n    position: absolute;\r\n    top: calc(50% - 10px);\r\n    left: 0;\r\n    height: 20px;\r\n    width: 20px;\r\n    background-color: #fff;\r\n    border: 2px solid #ccc;\r\n    border-radius: 4px;\r\n    transition: all 0.2s ease;\r\n}\r\n\r\n/* On mouse-over */\r\n.checkbox:hover input ~ .checkbox--tick {\r\n    background-color: transparent;\r\n    border-color: var(--secondary-color);\r\n}\r\n\r\n/* When the checkbox is checked */\r\n.checkbox input:checked ~ .checkbox--tick {\r\n    background-color: transparent;\r\n    border-color: var(--secondary-color);\r\n}\r\n\r\n/* The \"tick\" (hidden when not checked) */\r\n.checkbox--tick:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n    transition: all 0.2s ease;\r\n}\r\n\r\n/* Show the tick when checked */\r\n.checkbox input:checked ~ .checkbox--tick:after {\r\n    display: block;\r\n}\r\n\r\n/* Style the tick */\r\n.checkbox .checkbox--tick:after {\r\n    left: calc(50% - 3px);\r\n    top: calc(50% - 6px);\r\n    width: 4px;\r\n    height: 7px;\r\n    border: solid var(--secondary-color);\r\n    border-width: 0 2px 2px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    -ms-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}\r\n\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX01haW5QYWdlX3VpX01haW5QYWdlX3RzeC44MDQxMTA2YTg1NWI2OWIyZTg3NS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLHNCQUFzQixzRUFBc0UsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELGlDQUFpQyxrQkFBa0I7QUFDM1E7QUFDL0I7QUFDQSxzQkFBc0IsZ0RBQW1CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLEdBQUcseUNBQXlDLGdEQUFtQjtBQUMvRDtBQUNBLEdBQUc7QUFDSDtBQUNBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWjREO0FBQ3JEO0FBQ2M7QUFDSjtBQUNPO0FBQ1Q7QUFDMkI7QUFDbkI7QUFDSztBQUNRO0FBQzlELElBQUllLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFBLEVBQWU7RUFDdkIsSUFBSUMsRUFBRTtFQUNOLElBQUlDLENBQUMsR0FBR1YsNkRBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQ1UsQ0FBQztFQUNoQyxJQUFJQyxRQUFRLEdBQUdOLCtEQUFhLENBQUM7SUFBRU8sS0FBSyxFQUFFO0VBQXNCLENBQUMsQ0FBQztFQUM5RCxJQUFJQyxFQUFFLEdBQUdkLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUVlLFlBQVksR0FBR0QsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUFFRSxlQUFlLEdBQUdGLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDdkUsT0FBUWpCLHVEQUFLLENBQUMsS0FBSyxFQUFFO0lBQUVvQixTQUFTLEVBQUViLDZEQUFHLENBQUNjLElBQUk7SUFBRUMsUUFBUSxFQUFFLENBQUNQLFFBQVEsR0FDbkRmLHVEQUFLLENBQUNFLHVEQUFTLEVBQUU7TUFBRW9CLFFBQVEsRUFBRSxDQUFDeEIsc0RBQUksQ0FBQyxRQUFRLEVBQUU7UUFBRXlCLE9BQU8sRUFBRSxTQUFBQSxRQUFBLEVBQVk7VUFBRSxPQUFPSixlQUFlLENBQUMsVUFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtLQUFPO0FBQ2hDLG9DQUFvQyx1SkFBVyxHQUFHLGtLQUFPOztBQUV6RCxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLGtVQUEySjtBQUNqSyxNQUFNO0FBQUE7QUFDTixzREFBc0QsdUpBQVcsR0FBRyxrS0FBTztBQUMzRSxnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQSwwQ0FBMEMsdUpBQVcsR0FBRyxrS0FBTzs7QUFFL0QscUJBQXFCLGtLQUFPO0FBQzVCLE9BQU87QUFDUDtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOzs7QUFHMEs7QUFDMUssT0FBTyxpRUFBZSxrS0FBTyxJQUFJLGtLQUFPLFVBQVUsa0tBQU8sbUJBQW1CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0Ly4vc3JjL3NoYXJlZC9hc3NldHMvc2V0dGluZ3Muc3ZnIiwid2VicGFjazovL3Rlc3QvLi9zcmMvcGFnZXMvTWFpblBhZ2UvdWkvTWFpblBhZ2UudHN4Iiwid2VicGFjazovL3Rlc3QvLi9zcmMvc2hhcmVkL3VpL0NoZWNrYm94L0NoZWNrYm94LnRzeCIsIndlYnBhY2s6Ly90ZXN0Ly4vc3JjL3dpZGdldHMvRmlsdGVyL3VpL0ZpbHRlci50c3giLCJ3ZWJwYWNrOi8vdGVzdC8uL3NyYy93aWRnZXRzL1N0b3BDaGVja2JveGVzL3VpL1N0b3BDaGVja2JveGVzLnRzeCIsIndlYnBhY2s6Ly90ZXN0Ly4vc3JjL3dpZGdldHMvVGhlbWVUb2dnbGVyL3VpL1RoZW1lVG9nZ2xlci50c3giLCJ3ZWJwYWNrOi8vdGVzdC8uL3NyYy9wYWdlcy9NYWluUGFnZS91aS9NYWluUGFnZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly90ZXN0Ly4vc3JjL3NoYXJlZC91aS9DaGVja2JveC9DaGVja2JveC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly90ZXN0Ly4vc3JjL3dpZGdldHMvRmlsdGVyL3VpL0ZpbHRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly90ZXN0Ly4vc3JjL3dpZGdldHMvU3RvcENoZWNrYm94ZXMvdWkvU3RvcENoZWNrYm94ZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdGVzdC8uL3NyYy93aWRnZXRzL1RoZW1lVG9nZ2xlci91aS9UaGVtZVRvZ2dsZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdGVzdC8uL3NyYy9wYWdlcy9NYWluUGFnZS91aS9NYWluUGFnZS5tb2R1bGUuc2Nzcz9iNjNmIiwid2VicGFjazovL3Rlc3QvLi9zcmMvc2hhcmVkL3VpL0NoZWNrYm94L0NoZWNrYm94Lm1vZHVsZS5zY3NzPzdjMDkiLCJ3ZWJwYWNrOi8vdGVzdC8uL3NyYy93aWRnZXRzL0ZpbHRlci91aS9GaWx0ZXIubW9kdWxlLnNjc3M/MTJlMiIsIndlYnBhY2s6Ly90ZXN0Ly4vc3JjL3dpZGdldHMvU3RvcENoZWNrYm94ZXMvdWkvU3RvcENoZWNrYm94ZXMubW9kdWxlLnNjc3M/ZGZhYSIsIndlYnBhY2s6Ly90ZXN0Ly4vc3JjL3dpZGdldHMvVGhlbWVUb2dnbGVyL3VpL1RoZW1lVG9nZ2xlci5tb2R1bGUuc2Nzcz8zZDliIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfcGF0aDtcbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG52YXIgU3ZnU2V0dGluZ3MgPSBmdW5jdGlvbiBTdmdTZXR0aW5ncyhwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgaGVpZ2h0OiBcIjEuMmVtXCIsXG4gICAgdmlld0JveDogXCIwIDAgNTEyIDUxMlwiXG4gIH0sIHByb3BzKSwgX3BhdGggfHwgKF9wYXRoID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0wIDQxNmMwIDE3LjcgMTQuMyAzMiAzMiAzMmg1NC43YzEyLjMgMjguMyA0MC41IDQ4IDczLjMgNDhzNjEtMTkuNyA3My4zLTQ4SDQ4MGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMkgyMzMuM2MtMTIuMy0yOC4zLTQwLjUtNDgtNzMuMy00OHMtNjEgMTkuNy03My4zIDQ4SDMyYy0xNy43IDAtMzIgMTQuMy0zMiAzMnptMTI4IDBhMzIgMzIgMCAxIDEgNjQgMCAzMiAzMiAwIDEgMS02NCAwem0xOTItMTYwYTMyIDMyIDAgMSAxIDY0IDAgMzIgMzIgMCAxIDEtNjQgMHptMzItODBjLTMyLjggMC02MSAxOS43LTczLjMgNDhIMzJjLTE3LjcgMC0zMiAxNC4zLTMyIDMyczE0LjMgMzIgMzIgMzJoMjQ2LjdjMTIuMyAyOC4zIDQwLjUgNDggNzMuMyA0OHM2MS0xOS43IDczLjMtNDhINDgwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMyaC01NC43Yy0xMi4zLTI4LjMtNDAuNS00OC03My4zLTQ4em0tMTYwLTQ4YTMyIDMyIDAgMSAxIDAtNjQgMzIgMzIgMCAxIDEgMCA2NHptNzMuMy02NEMyNTMgMzUuNyAyMjQuOCAxNiAxOTIgMTZzLTYxIDE5LjctNzMuMyA0OEgzMkMxNC4zIDY0IDAgNzguMyAwIDk2czE0LjMgMzIgMzIgMzJoODYuN2MxMi4zIDI4LjMgNDAuNSA0OCA3My4zIDQ4czYxLTE5LjcgNzMuMy00OEg0ODBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJIMjY1LjN6XCJcbiAgfSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTdmdTZXR0aW5nczsiLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cywgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBGbGlnaHRzIH0gZnJvbSBcImVudGl0aWVzL0ZsaWdodHNcIjtcbmltcG9ydCB7IEZpbHRlciB9IGZyb20gXCJ3aWRnZXRzL0ZpbHRlci91aS9GaWx0ZXJcIjtcbmltcG9ydCBjbHMgZnJvbSBcIi4vTWFpblBhZ2UubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IFRoZW1lVG9nZ2xlciB9IGZyb20gXCJ3aWRnZXRzL1RoZW1lVG9nZ2xlci91aS9UaGVtZVRvZ2dsZXJcIjtcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlJztcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnc2hhcmVkL2Fzc2V0cy9zZXR0aW5ncy5zdmcnO1xuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gXCJzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lc1wiO1xudmFyIE1haW5QYWdlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYTtcbiAgICB2YXIgdCA9IHVzZVRyYW5zbGF0aW9uKCdtYWluJykudDtcbiAgICB2YXIgaXNUYWJsZXQgPSB1c2VNZWRpYVF1ZXJ5KHsgcXVlcnk6ICcobWF4LXdpZHRoOiAxMjI0cHgpJyB9KTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShmYWxzZSksIHNob3dTZXR0aW5ncyA9IF9iWzBdLCBzZXRTaG93U2V0dGluZ3MgPSBfYlsxXTtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbHMubWFpbiwgY2hpbGRyZW46IFtpc1RhYmxldCA/XG4gICAgICAgICAgICAgICAgX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChcImJ1dHRvblwiLCB7IG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldFNob3dTZXR0aW5ncyhmdW5jdGlvbiAocHJldikgeyByZXR1cm4gIXByZXY7IH0pOyB9LCBjbGFzc05hbWU6IGNscy5zZXR0aW5nc19fYnV0dG9uLCBjaGlsZHJlbjogX2pzeChTZXR0aW5nc0ljb24sIHsgY2xhc3NOYW1lOiBjbHMuc2V0dGluZ3NfX2ljb24gfSkgfSksIF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNscy5zaWRlYmFyLCAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2FbY2xzLm9wZW5lZF0gPSBzaG93U2V0dGluZ3MgfHwgIWlzVGFibGV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYSkpLCBjaGlsZHJlbjogW19qc3goRmlsdGVyLCB7fSksIF9qc3goVGhlbWVUb2dnbGVyLCB7fSldIH0pXSB9KVxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgX2pzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xzLnNpZGViYXIpLCBjaGlsZHJlbjogW19qc3goRmlsdGVyLCB7fSksIF9qc3goVGhlbWVUb2dnbGVyLCB7fSldIH0pLCBfanN4KEZsaWdodHMsIHt9KV0gfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSBcInNoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVzXCI7XG5pbXBvcnQgY2xzIGZyb20gJy4vQ2hlY2tib3gubW9kdWxlLnNjc3MnO1xuZXhwb3J0IHZhciBDaGVja2JveCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sIG90aGVyUHJvcHMgPSBfX3Jlc3QocHJvcHMsIFtcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCJdKTtcbiAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy5pbnB1dENvbnRhaW5lciwgY2hpbGRyZW46IF9qc3hzKFwibGFiZWxcIiwgeyBjbGFzc05hbWU6IGNscy5jaGVja2JveCwgaHRtbEZvcjogb3RoZXJQcm9wcy5pZCwgY2hpbGRyZW46IFtfanN4KFwiaW5wdXRcIiwgX19hc3NpZ24oeyB0eXBlOiAnY2hlY2tib3gnIH0sIG90aGVyUHJvcHMsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKCcnLCB7fSwgW2NsYXNzTmFtZV0pIH0pKSwgX2pzeChcInNwYW5cIiwgeyBjbGFzc05hbWU6IGNsc1snY2hlY2tib3gtLXRpY2snXSB9KSwgY2hpbGRyZW5dIH0pIH0pKTtcbn07XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gXCJzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lc1wiO1xuaW1wb3J0IGNscyBmcm9tICcuL0ZpbHRlci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBDdXJyZW5jeSB9IGZyb20gXCJlbnRpdGllcy9DdXJyZW5jaWVzL2luZGV4XCI7XG5pbXBvcnQgeyBTdG9wQ2hlY2tib3hlcyB9IGZyb20gXCJ3aWRnZXRzL1N0b3BDaGVja2JveGVzL3VpL1N0b3BDaGVja2JveGVzXCI7XG5leHBvcnQgdmFyIEZpbHRlciA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuRmlsdGVyLCB7fSwgW2NsYXNzTmFtZV0pLCBjaGlsZHJlbjogW19qc3goQ3VycmVuY3ksIHt9KSwgX2pzeChTdG9wQ2hlY2tib3hlcywge30pXSB9KSk7XG59O1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tIFwic2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZXNcIjtcbmltcG9ydCBjbHMgZnJvbSAnLi9TdG9wQ2hlY2tib3hlcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCJzaGFyZWQvdWkvQ2hlY2tib3gvQ2hlY2tib3hcIjtcbmltcG9ydCB7IFBvc3NpYmxlU3RvcEZpbHRlclZhbHVlcyB9IGZyb20gXCJlbnRpdGllcy9GbGlnaHRzL21vZGVsL3R5cGVzL2ZsaWdodHNTY2hlbWFcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgZmxpZ2h0c0FjdGlvbnMgfSBmcm9tIFwiZW50aXRpZXMvRmxpZ2h0cy9tb2RlbC9zbGljZS9GbGlnaHRzU2xpY2VcIjtcbmltcG9ydCB7IGdldFN0b3BGaWx0ZXIgfSBmcm9tIFwiZW50aXRpZXMvRmxpZ2h0cy9tb2RlbC9zZWxlY3RvcnMvZ2V0U3RvcEZpbHRlci9nZXRTdG9wRmlsdGVyXCI7XG5leHBvcnQgdmFyIFN0b3BDaGVja2JveGVzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcbiAgICB2YXIgZGlzcGF0aCA9IHVzZURpc3BhdGNoKCk7XG4gICAgdmFyIHN0b3BGaWx0ZXJBcnIgPSB1c2VTZWxlY3RvcihnZXRTdG9wRmlsdGVyKTtcbiAgICB2YXIgUG9zc2libGVWYWx1ZXNBcnIgPSBPYmplY3QudmFsdWVzKFBvc3NpYmxlU3RvcEZpbHRlclZhbHVlcyk7XG4gICAgdmFyIHNlbGVjdEhhbmRsZXIgPSBmdW5jdGlvbiAoZSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBQb3NzaWJsZVN0b3BGaWx0ZXJWYWx1ZXMuQUxMKSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGRpc3BhdGgoZmxpZ2h0c0FjdGlvbnMuYWRkU3RvcEZpbHRlclZhbHVlKHZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRoKGZsaWdodHNBY3Rpb25zLmRlbGV0ZVN0b3BGaWx0ZXIodmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0aChmbGlnaHRzQWN0aW9ucy5zZXRBbGxTdG9wRmlsdGVyKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0aChmbGlnaHRzQWN0aW9ucy5zaG93T25seVN0b3BGaWx0ZXIoUG9zc2libGVTdG9wRmlsdGVyVmFsdWVzLk5VTEwpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIHNob3dPbmVGaWx0ZXIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgZGlzcGF0aChmbGlnaHRzQWN0aW9ucy5zaG93T25seVN0b3BGaWx0ZXIodmFsdWUpKTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xzLlN0b3BDaGVja2JveGVzLCB7fSwgW2NsYXNzTmFtZV0pLCBjaGlsZHJlbjogW19qc3goXCJoM1wiLCB7IGNoaWxkcmVuOiBcIlxcdTA0MUFcXHUwNDNFXFx1MDQzQlxcdTA0MzhcXHUwNDQ3XFx1MDQzNVxcdTA0NDFcXHUwNDQyXFx1MDQzMlxcdTA0M0UgXFx1MDQzRlxcdTA0MzVcXHUwNDQwXFx1MDQzNVxcdTA0NDFcXHUwNDMwXFx1MDQzNFxcdTA0M0VcXHUwNDNBXCIgfSksIFBvc3NpYmxlVmFsdWVzQXJyLm1hcChmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLmNoZWNrYm94Q29udGFpbmVyLCBjaGlsZHJlbjogW19qc3goQ2hlY2tib3gsIHsgY2hlY2tlZDogc3RvcEZpbHRlckFyci5pbmNsdWRlcyh2YWx1ZSksIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gc2VsZWN0SGFuZGxlcihlLCB2YWx1ZSk7IH0sIGNoaWxkcmVuOiB2YWx1ZSB9KSwgdmFsdWUgIT09IFBvc3NpYmxlU3RvcEZpbHRlclZhbHVlcy5BTEwgP1xuICAgICAgICAgICAgICAgICAgICAgICAgX2pzeChcInNwYW5cIiwgeyBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzaG93T25lRmlsdGVyKHZhbHVlKTsgfSwgY2xhc3NOYW1lOiBjbHMub25seSwgY2hpbGRyZW46IFwiXFx1MDQyMlxcdTA0MUVcXHUwNDFCXFx1MDQyQ1xcdTA0MUFcXHUwNDFFXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJyddIH0sIHZhbHVlKSk7IH0pXSB9KSk7XG59O1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tIFwic2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZXNcIjtcbmltcG9ydCBjbHMgZnJvbSAnLi9UaGVtZVRvZ2dsZXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgVGhlbWUsIHVzZVRoZW1lIH0gZnJvbSBcImFwcC9wcm92aWRlcnMvVGhlbWVQcm92aWRlclwiO1xuZXhwb3J0IHZhciBUaGVtZVRvZ2dsZXIgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lO1xuICAgIHZhciBfYSA9IHVzZVRoZW1lKCksIHRoZW1lID0gX2EudGhlbWUsIHRvZ2dsZVRoZW1lID0gX2EudG9nZ2xlVGhlbWU7XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuVGhlbWVUb2dnbGVyLCB7fSwgW2NsYXNzTmFtZV0pLCBjaGlsZHJlbjogW19qc3hzKFwibGFiZWxcIiwgeyBjbGFzc05hbWU6IGNscy5zd2l0Y2gsIGNoaWxkcmVuOiBbX2pzeChcImlucHV0XCIsIHsgY2hlY2tlZDogdGhlbWUgPT09IFRoZW1lLkRBUkssIG9uSW5wdXQ6IHRvZ2dsZVRoZW1lLCB0eXBlOiBcImNoZWNrYm94XCIgfSksIF9qc3goXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNscy5zbGlkZXIsIHt9LCBbY2xzWydyb3VuZCddXSkgfSldIH0pLCBfanN4KFwic3BhblwiLCB7IGNoaWxkcmVuOiBcIlxcdTA0MjJcXHUwNDM1XFx1MDQzQ1xcdTA0M0RcXHUwNDMwXFx1MDQ0RiBcXHUwNDQyXFx1MDQzNVxcdTA0M0NcXHUwNDMwXCIgfSldIH0pKTtcbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy1wYWdlcy1NYWluUGFnZS11aS1NYWluUGFnZS1tb2R1bGVfX21haW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG4gIGNvbHVtbi1nYXA6IDE1cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjI0cHgpIHtcbiAgLnNyYy1wYWdlcy1NYWluUGFnZS11aS1NYWluUGFnZS1tb2R1bGVfX21haW4ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgfVxufVxuXG4uc3JjLXBhZ2VzLU1haW5QYWdlLXVpLU1haW5QYWdlLW1vZHVsZV9fc2lkZWJhciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogNjV2aDtcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMjBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMjRweCkge1xuICAuc3JjLXBhZ2VzLU1haW5QYWdlLXVpLU1haW5QYWdlLW1vZHVsZV9fc2lkZWJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogLTEwMHZoO1xuICAgIHRvcDogdW5zZXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY2FyZCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBib3JkZXI6IHZhcigtLWNvbG9yLWJvcmRlci1kZWZhdWx0KSAxcHggc29saWQ7XG4gICAgcmlnaHQ6IDYwcHg7XG4gIH1cbiAgLnNyYy1wYWdlcy1NYWluUGFnZS11aS1NYWluUGFnZS1tb2R1bGVfX3NpZGViYXIuc3JjLXBhZ2VzLU1haW5QYWdlLXVpLU1haW5QYWdlLW1vZHVsZV9fb3BlbmVkIHtcbiAgICBib3R0b206IDEyMHB4O1xuICAgIHJpZ2h0OiA2MHB4O1xuICB9XG59XG4uc3JjLXBhZ2VzLU1haW5QYWdlLXVpLU1haW5QYWdlLW1vZHVsZV9fc2V0dGluZ3NfX2J1dHRvbiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNhcmQpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA1MHB4O1xuICByaWdodDogNTBweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1jb2xvcik7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhZ2VzL01haW5QYWdlL3VpL01haW5QYWdlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNJO0VBTEo7SUFNUSwyQkFBQTtFQUVOO0FBQ0Y7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7QUFFSjs7QUFDQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLGNBQUE7SUFDQSxVQUFBO0lBQ0EsZ0NBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7SUFDQSw2Q0FBQTtJQUNBLFdBQUE7RUFFTjtFQUFNO0lBQ0ksYUFBQTtJQUNBLFdBQUE7RUFFVjtBQUNGO0FBR0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFEUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXHJcXG4gICAgY29sdW1uLWdhcDogMTVweDtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIyNHB4KSB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBoZWlnaHQ6IDY1dmg7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgICB0b3A6IDIwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjI0cHgpIHtcXHJcXG4gICAgLnNpZGViYXIge1xcclxcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgICAgYm90dG9tOiAtMTAwdmg7XFxyXFxuICAgICAgICB0b3A6IHVuc2V0O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY2FyZCk7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICAgICAgei1pbmRleDogMTA7XFxyXFxuICAgICAgICBib3JkZXI6IHZhcigtLWNvbG9yLWJvcmRlci1kZWZhdWx0KSAxcHggc29saWQ7XFxyXFxuICAgICAgICByaWdodDogNjBweDtcXHJcXG5cXHJcXG4gICAgICAgICYub3BlbmVkIHtcXHJcXG4gICAgICAgICAgICBib3R0b206IDEyMHB4O1xcclxcbiAgICAgICAgICAgIHJpZ2h0OiA2MHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zZXR0aW5ncyB7XFxyXFxuICAgICZfX2J1dHRvbiB7XFxyXFxuICAgICAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNhcmQpO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgICAgYm90dG9tOiA1MHB4O1xcclxcbiAgICAgICAgcmlnaHQ6IDUwcHg7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1jb2xvcik7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm1haW5cIjogYHNyYy1wYWdlcy1NYWluUGFnZS11aS1NYWluUGFnZS1tb2R1bGVfX21haW5gLFxuXHRcInNpZGViYXJcIjogYHNyYy1wYWdlcy1NYWluUGFnZS11aS1NYWluUGFnZS1tb2R1bGVfX3NpZGViYXJgLFxuXHRcIm9wZW5lZFwiOiBgc3JjLXBhZ2VzLU1haW5QYWdlLXVpLU1haW5QYWdlLW1vZHVsZV9fb3BlbmVkYCxcblx0XCJzZXR0aW5nc19fYnV0dG9uXCI6IGBzcmMtcGFnZXMtTWFpblBhZ2UtdWktTWFpblBhZ2UtbW9kdWxlX19zZXR0aW5nc19fYnV0dG9uYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtc2hhcmVkLXVpLUNoZWNrYm94LUNoZWNrYm94LW1vZHVsZV9faW5wdXRDb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xufVxuXG4vKiBUaGUgY29udGFpbmVyICovXG4uc3JjLXNoYXJlZC11aS1DaGVja2JveC1DaGVja2JveC1tb2R1bGVfX2NoZWNrYm94IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4vKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xuLnNyYy1zaGFyZWQtdWktQ2hlY2tib3gtQ2hlY2tib3gtbW9kdWxlX19jaGVja2JveCBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xufVxuXG4vKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cbi5zcmMtc2hhcmVkLXVpLUNoZWNrYm94LUNoZWNrYm94LW1vZHVsZV9fY2hlY2tib3gtLXRpY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4vKiBPbiBtb3VzZS1vdmVyICovXG4uc3JjLXNoYXJlZC11aS1DaGVja2JveC1DaGVja2JveC1tb2R1bGVfX2NoZWNrYm94OmhvdmVyIGlucHV0IH4gLnNyYy1zaGFyZWQtdWktQ2hlY2tib3gtQ2hlY2tib3gtbW9kdWxlX19jaGVja2JveC0tdGljayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQgKi9cbi5zcmMtc2hhcmVkLXVpLUNoZWNrYm94LUNoZWNrYm94LW1vZHVsZV9fY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5zcmMtc2hhcmVkLXVpLUNoZWNrYm94LUNoZWNrYm94LW1vZHVsZV9fY2hlY2tib3gtLXRpY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG4vKiBUaGUgXCJ0aWNrXCIgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xuLnNyYy1zaGFyZWQtdWktQ2hlY2tib3gtQ2hlY2tib3gtbW9kdWxlX19jaGVja2JveC0tdGljazphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cblxuLyogU2hvdyB0aGUgdGljayB3aGVuIGNoZWNrZWQgKi9cbi5zcmMtc2hhcmVkLXVpLUNoZWNrYm94LUNoZWNrYm94LW1vZHVsZV9fY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5zcmMtc2hhcmVkLXVpLUNoZWNrYm94LUNoZWNrYm94LW1vZHVsZV9fY2hlY2tib3gtLXRpY2s6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogU3R5bGUgdGhlIHRpY2sgKi9cbi5zcmMtc2hhcmVkLXVpLUNoZWNrYm94LUNoZWNrYm94LW1vZHVsZV9fY2hlY2tib3ggLnNyYy1zaGFyZWQtdWktQ2hlY2tib3gtQ2hlY2tib3gtbW9kdWxlX19jaGVja2JveC0tdGljazphZnRlciB7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gM3B4KTtcbiAgdG9wOiBjYWxjKDUwJSAtIDZweCk7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogN3B4O1xuICBib3JkZXI6IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2hhcmVkL3VpL0NoZWNrYm94L0NoZWNrYm94Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBSEo7O0FBTUEsa0JBQUE7QUFDQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFISjs7QUFNQSx3Q0FBQTtBQUNBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBSEo7O0FBTUEsNkJBQUE7QUFDQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUhKOztBQU1BLGtCQUFBO0FBQ0E7RUFDSSw2QkFBQTtFQUNBLG9DQUFBO0FBSEo7O0FBTUEsaUNBQUE7QUFDQTtFQUNJLDZCQUFBO0VBQ0Esb0NBQUE7QUFISjs7QUFNQSx5Q0FBQTtBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBSEo7O0FBTUEsK0JBQUE7QUFDQTtFQUNJLGNBQUE7QUFISjs7QUFNQSxtQkFBQTtBQUNBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtBQUhKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5DaGVja2JveCB7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5pbnB1dENvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi8qIFRoZSBjb250YWluZXIgKi9cXHJcXG4uY2hlY2tib3gge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMzVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXFxyXFxuLmNoZWNrYm94IGlucHV0IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xcclxcbi5jaGVja2JveC0tdGljayB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDEwcHgpO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi8qIE9uIG1vdXNlLW92ZXIgKi9cXHJcXG4uY2hlY2tib3g6aG92ZXIgaW5wdXQgfiAuY2hlY2tib3gtLXRpY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkICovXFxyXFxuLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuY2hlY2tib3gtLXRpY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUaGUgXFxcInRpY2tcXFwiIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cXHJcXG4uY2hlY2tib3gtLXRpY2s6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTaG93IHRoZSB0aWNrIHdoZW4gY2hlY2tlZCAqL1xcclxcbi5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrYm94LS10aWNrOmFmdGVyIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qIFN0eWxlIHRoZSB0aWNrICovXFxyXFxuLmNoZWNrYm94IC5jaGVja2JveC0tdGljazphZnRlciB7XFxyXFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gM3B4KTtcXHJcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDZweCk7XFxyXFxuICAgIHdpZHRoOiA0cHg7XFxyXFxuICAgIGhlaWdodDogN3B4O1xcclxcbiAgICBib3JkZXI6IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImlucHV0Q29udGFpbmVyXCI6IGBzcmMtc2hhcmVkLXVpLUNoZWNrYm94LUNoZWNrYm94LW1vZHVsZV9faW5wdXRDb250YWluZXJgLFxuXHRcImNoZWNrYm94XCI6IGBzcmMtc2hhcmVkLXVpLUNoZWNrYm94LUNoZWNrYm94LW1vZHVsZV9fY2hlY2tib3hgLFxuXHRcImNoZWNrYm94LS10aWNrXCI6IGBzcmMtc2hhcmVkLXVpLUNoZWNrYm94LUNoZWNrYm94LW1vZHVsZV9fY2hlY2tib3gtLXRpY2tgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy13aWRnZXRzLUZpbHRlci11aS1GaWx0ZXItbW9kdWxlX19GaWx0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jYXJkKTtcbiAgaGVpZ2h0OiA1MHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy93aWRnZXRzL0ZpbHRlci91aS9GaWx0ZXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuRmlsdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY2FyZCk7XFxyXFxuICAgIGhlaWdodDogNTB2aDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIkZpbHRlclwiOiBgc3JjLXdpZGdldHMtRmlsdGVyLXVpLUZpbHRlci1tb2R1bGVfX0ZpbHRlcmBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLXdpZGdldHMtU3RvcENoZWNrYm94ZXMtdWktU3RvcENoZWNrYm94ZXMtbW9kdWxlX19jaGVja2JveENvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4uc3JjLXdpZGdldHMtU3RvcENoZWNrYm94ZXMtdWktU3RvcENoZWNrYm94ZXMtbW9kdWxlX19jaGVja2JveENvbnRhaW5lcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcbn1cbi5zcmMtd2lkZ2V0cy1TdG9wQ2hlY2tib3hlcy11aS1TdG9wQ2hlY2tib3hlcy1tb2R1bGVfX2NoZWNrYm94Q29udGFpbmVyOmhvdmVyIC5zcmMtd2lkZ2V0cy1TdG9wQ2hlY2tib3hlcy11aS1TdG9wQ2hlY2tib3hlcy1tb2R1bGVfX29ubHkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNyYy13aWRnZXRzLVN0b3BDaGVja2JveGVzLXVpLVN0b3BDaGVja2JveGVzLW1vZHVsZV9fb25seSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvd2lkZ2V0cy9TdG9wQ2hlY2tib3hlcy91aS9TdG9wQ2hlY2tib3hlcy5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUhKO0FBS0k7RUFDSSxvQ0FBQTtBQUhSO0FBS1E7RUFDSSxjQUFBO0FBSFo7O0FBUUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBTEpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLlN0b3BDaGVja2JveGVzIHtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94Q29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XFxyXFxuXFxyXFxuICAgICAgICAmIC5vbmx5IHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ub25seSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNoZWNrYm94Q29udGFpbmVyXCI6IGBzcmMtd2lkZ2V0cy1TdG9wQ2hlY2tib3hlcy11aS1TdG9wQ2hlY2tib3hlcy1tb2R1bGVfX2NoZWNrYm94Q29udGFpbmVyYCxcblx0XCJvbmx5XCI6IGBzcmMtd2lkZ2V0cy1TdG9wQ2hlY2tib3hlcy11aS1TdG9wQ2hlY2tib3hlcy1tb2R1bGVfX29ubHlgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy13aWRnZXRzLVRoZW1lVG9nZ2xlci11aS1UaGVtZVRvZ2dsZXItbW9kdWxlX19UaGVtZVRvZ2dsZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIHBhZGRpbmc6IDE5cHggMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY2FyZCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xufVxuXG4uc3JjLXdpZGdldHMtVGhlbWVUb2dnbGVyLXVpLVRoZW1lVG9nZ2xlci1tb2R1bGVfX3N3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4uc3JjLXdpZGdldHMtVGhlbWVUb2dnbGVyLXVpLVRoZW1lVG9nZ2xlci1tb2R1bGVfX3N3aXRjaCBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi5zcmMtd2lkZ2V0cy1UaGVtZVRvZ2dsZXItdWktVGhlbWVUb2dnbGVyLW1vZHVsZV9fc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uc3JjLXdpZGdldHMtVGhlbWVUb2dnbGVyLXVpLVRoZW1lVG9nZ2xlci1tb2R1bGVfX3NsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMjZweDtcbiAgd2lkdGg6IDI2cHg7XG4gIGxlZnQ6IDRweDtcbiAgYm90dG9tOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc3JjLXdpZGdldHMtVGhlbWVUb2dnbGVyLXVpLVRoZW1lVG9nZ2xlci1tb2R1bGVfX3NsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbmlucHV0OmZvY3VzICsgLnNyYy13aWRnZXRzLVRoZW1lVG9nZ2xlci11aS1UaGVtZVRvZ2dsZXItbW9kdWxlX19zbGlkZXIge1xuICBib3gtc2hhZG93OiAwIDAgMXB4IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc3JjLXdpZGdldHMtVGhlbWVUb2dnbGVyLXVpLVRoZW1lVG9nZ2xlci1tb2R1bGVfX3NsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufVxuXG4uc3JjLXdpZGdldHMtVGhlbWVUb2dnbGVyLXVpLVRoZW1lVG9nZ2xlci1tb2R1bGVfX3NsaWRlci5zcmMtd2lkZ2V0cy1UaGVtZVRvZ2dsZXItdWktVGhlbWVUb2dnbGVyLW1vZHVsZV9fcm91bmQge1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xufVxuXG4uc3JjLXdpZGdldHMtVGhlbWVUb2dnbGVyLXVpLVRoZW1lVG9nZ2xlci1tb2R1bGVfX3NsaWRlci5zcmMtd2lkZ2V0cy1UaGVtZVRvZ2dsZXItdWktVGhlbWVUb2dnbGVyLW1vZHVsZV9fcm91bmQ6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3dpZGdldHMvVGhlbWVUb2dnbGVyL3VpL1RoZW1lVG9nZ2xlci5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHdDQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQ0FBQTtBQUNKOztBQUVBO0VBQ0ksbUNBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuVGhlbWVUb2dnbGVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcclxcbiAgICBwYWRkaW5nOiAxOXB4IDI1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNhcmQpO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXRjaCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgaGVpZ2h0OiAzNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpdGNoIGlucHV0IHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXI6YmVmb3JlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgaGVpZ2h0OiAyNnB4O1xcclxcbiAgICB3aWR0aDogMjZweDtcXHJcXG4gICAgbGVmdDogNHB4O1xcclxcbiAgICBib3R0b206IDRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXHJcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLnJvdW5kIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIlRoZW1lVG9nZ2xlclwiOiBgc3JjLXdpZGdldHMtVGhlbWVUb2dnbGVyLXVpLVRoZW1lVG9nZ2xlci1tb2R1bGVfX1RoZW1lVG9nZ2xlcmAsXG5cdFwic3dpdGNoXCI6IGBzcmMtd2lkZ2V0cy1UaGVtZVRvZ2dsZXItdWktVGhlbWVUb2dnbGVyLW1vZHVsZV9fc3dpdGNoYCxcblx0XCJzbGlkZXJcIjogYHNyYy13aWRnZXRzLVRoZW1lVG9nZ2xlci11aS1UaGVtZVRvZ2dsZXItbW9kdWxlX19zbGlkZXJgLFxuXHRcInJvdW5kXCI6IGBzcmMtd2lkZ2V0cy1UaGVtZVRvZ2dsZXItdWktVGhlbWVUb2dnbGVyLW1vZHVsZV9fcm91bmRgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9NYWluUGFnZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL01haW5QYWdlLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL01haW5QYWdlLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQ2hlY2tib3gubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9DaGVja2JveC5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9DaGVja2JveC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0ZpbHRlci5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0ZpbHRlci5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9GaWx0ZXIubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdG9wQ2hlY2tib3hlcy5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0b3BDaGVja2JveGVzLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0b3BDaGVja2JveGVzLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vVGhlbWVUb2dnbGVyLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vVGhlbWVUb2dnbGVyLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1RoZW1lVG9nZ2xlci5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJqc3giLCJfanN4IiwianN4cyIsIl9qc3hzIiwiRnJhZ21lbnQiLCJfRnJhZ21lbnQiLCJ1c2VTdGF0ZSIsInVzZVRyYW5zbGF0aW9uIiwiRmxpZ2h0cyIsIkZpbHRlciIsImNscyIsIlRoZW1lVG9nZ2xlciIsInVzZU1lZGlhUXVlcnkiLCJTZXR0aW5nc0ljb24iLCJjbGFzc05hbWVzIiwiTWFpblBhZ2UiLCJfYSIsInQiLCJpc1RhYmxldCIsInF1ZXJ5IiwiX2IiLCJzaG93U2V0dGluZ3MiLCJzZXRTaG93U2V0dGluZ3MiLCJjbGFzc05hbWUiLCJtYWluIiwiY2hpbGRyZW4iLCJvbkNsaWNrIiwicHJldiIsInNldHRpbmdzX19idXR0b24iLCJzZXR0aW5nc19faWNvbiIsInNpZGViYXIiLCJvcGVuZWQiLCJfX2Fzc2lnbiIsIk9iamVjdCIsImFzc2lnbiIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsIl9fcmVzdCIsImUiLCJpbmRleE9mIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJDaGVja2JveCIsInByb3BzIiwib3RoZXJQcm9wcyIsImlucHV0Q29udGFpbmVyIiwiY2hlY2tib3giLCJodG1sRm9yIiwiaWQiLCJ0eXBlIiwiQ3VycmVuY3kiLCJTdG9wQ2hlY2tib3hlcyIsIlBvc3NpYmxlU3RvcEZpbHRlclZhbHVlcyIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJmbGlnaHRzQWN0aW9ucyIsImdldFN0b3BGaWx0ZXIiLCJkaXNwYXRoIiwic3RvcEZpbHRlckFyciIsIlBvc3NpYmxlVmFsdWVzQXJyIiwidmFsdWVzIiwic2VsZWN0SGFuZGxlciIsInZhbHVlIiwiQUxMIiwidGFyZ2V0IiwiY2hlY2tlZCIsImFkZFN0b3BGaWx0ZXJWYWx1ZSIsImRlbGV0ZVN0b3BGaWx0ZXIiLCJzZXRBbGxTdG9wRmlsdGVyIiwic2hvd09ubHlTdG9wRmlsdGVyIiwiTlVMTCIsInNob3dPbmVGaWx0ZXIiLCJtYXAiLCJjaGVja2JveENvbnRhaW5lciIsImluY2x1ZGVzIiwib25DaGFuZ2UiLCJvbmx5IiwiVGhlbWUiLCJ1c2VUaGVtZSIsInRoZW1lIiwidG9nZ2xlVGhlbWUiLCJEQVJLIiwib25JbnB1dCIsInNsaWRlciJdLCJzb3VyY2VSb290IjoiIn0=