webpackHotUpdate("static\\development\\pages\\admin\\management-menu\\secoundary-menu.js",{

/***/ "./components/managemnet/primary-menu/edit-menu-sub.jsx":
false,

/***/ "./components/managemnet/secondary-menu/edit-menu-sub.jsx":
/*!****************************************************************!*\
  !*** ./components/managemnet/secondary-menu/edit-menu-sub.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modal; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../middleware/utils */ "./middleware/utils.js");




var _jsxFileName = "D:\\govermentlt\\components\\managemnet\\secondary-menu\\edit-menu-sub.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var Option = antd__WEBPACK_IMPORTED_MODULE_6__["Select"].Option;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_6__["Input"].TextArea; // const config = require('./../../config');

var config = __webpack_require__(/*! ../../../pages/admin/config */ "./pages/admin/config.js");


var JoditEditor = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! jodit-react */ "./node_modules/jodit-react/build/jodit-react.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! jodit-react */ "./node_modules/jodit-react/build/jodit-react.js")];
    },
    modules: ["jodit-react"]
  }
});
_c2 = JoditEditor;
var Text = antd__WEBPACK_IMPORTED_MODULE_6__["Typography"].Text,
    Title = antd__WEBPACK_IMPORTED_MODULE_6__["Typography"].Title;
function modal(_ref) {
  _s();

  var _this = this;

  var _visible = _ref._visible,
      hideModal = _ref.hideModal,
      fetch = _ref.fetch,
      user = _ref.user,
      dataEdit = _ref.dataEdit;
  var divRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var _notification$useNoti = antd__WEBPACK_IMPORTED_MODULE_6__["notification"].useNotification(),
      _notification$useNoti2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_notification$useNoti, 2),
      api = _notification$useNoti2[0],
      contextHolder = _notification$useNoti2[1]; // const [divRef] = useRef(null);


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      visible = _useState[0],
      setVisible = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1),
      patternMenuSelected = _useState2[0],
      setPatternMenuSelected = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      patternMenu = _useState3[0],
      setPatternMenu = _useState3[1];

  var editor = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      content = _useState4[0],
      setContent = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1),
      active = _useState5[0],
      setActive = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      isSubMenu = _useState6[0],
      setIsSubMenu = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      isShow = _useState7[0],
      setIsShow = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([{
    name: ['intro_title'],
    value: ''
  }]),
      fields = _useState8[0],
      setFields = _useState8[1];

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_6__["Form"].useForm(),
      _Form$useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var actived = function actived() {
    active ? setActive(0) : setActive(1); // divRef.scrollIntoView({ behavior: "smooth" });
    // divRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setVisible(_visible);
    fetchPattern();
    fetchEditData();
  }, [dataEdit]);

  var fetchPattern = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var menuData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["apiInstance"])().get('menu/pattern-menu');

            case 2:
              menuData = _context.sent;
              console.log(menuData);
              setPatternMenu(menuData.data.results);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchPattern() {
      return _ref2.apply(this, arguments);
    };
  }();

  var fetchEditData = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (dataEdit) {
                setActive(dataEdit.is_show);
                setIsSubMenu(dataEdit.have_sub);
                console.log("dataEdit useEffect");
                setPatternMenuSelected(dataEdit.pattern_menu);

                if (dataEdit.pattern_menu != 1) {
                  setIsShow(false);
                } else {
                  setIsShow(true);
                }

                setFields([{
                  name: ['menu_title'],
                  value: !dataEdit ? "" : dataEdit.menu_title
                }, {
                  name: ['pattern_menu'],
                  value: !dataEdit ? "" : dataEdit.pattern_menu
                }, {
                  name: ['menu_detail'],
                  value: !dataEdit ? "" : dataEdit.menu_detail
                }]);
              }

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function fetchEditData() {
      return _ref3.apply(this, arguments);
    };
  }();

  var onSubmitHandler = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(value) {
      var data, registerData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // organization_id: organization_id,
              // menu_title: menu_title,
              // menu_detail: menu_detail,
              // menu_seq: menu_seq,
              // have_sub: have_sub,
              // is_show: is_show,
              // is_primary_menu: is_primary_menu,
              // is_pattern_menu: is_pattern_menu,
              // pattern_menu: pattern_menu,
              data = {
                "menu_title": value.menu_title,
                "menu_detail": content ? value.menu_detail : "",
                // "menu_seq": 0,
                "is_show": active ? 1 : 0,
                "is_pattern_menu": value.pattern_menu == 1 ? 0 : 1,
                "pattern_menu": patternMenuSelected
              };
              console.log(data);
              _context3.next = 4;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["apiInstance"])().put('/menu-sub/' + (dataEdit ? dataEdit.menu_sub_id : 0), data);

            case 4:
              registerData = _context3.sent;

              if (registerData.data.status == 200) {
                openNotificationSuccess();
              } else {
                openNotificationFail(registerData.data.message);
              }

              console.log("ON OK"); // setVisible(false)
              // onReset()

              fetch();

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function onSubmitHandler(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  var openNotificationSuccess = function openNotificationSuccess() {
    api.success({
      message: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E21\u0E39\u0E25\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
      description: 'บันทึกมูลสำเร็จ',
      placement: 'topRight'
    });
  };

  var openNotificationFail = function openNotificationFail(messgae) {
    api.error({
      message: "\u0E1E\u0E1A\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25",
      description: messgae,
      placement: 'topRight'
    });
  };

  var onReset = function onReset() {
    setActive(dataEdit.is_show);
    setIsSubMenu(dataEdit.have_sub);
    console.log("dataEdit useEffect");
    setPatternMenuSelected(dataEdit.pattern_menu);

    if (dataEdit.pattern_menu != 1) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }

    setFields([{
      name: ['menu_title'],
      value: !dataEdit ? "" : dataEdit.menu_title
    }, {
      name: ['pattern_menu'],
      value: !dataEdit ? "" : dataEdit.pattern_menu
    }, {
      name: ['menu_detail'],
      value: !dataEdit ? "" : dataEdit.menu_detail
    }]);
  };

  function handleChange(value) {
    console.log("selected ".concat(value));
    setPatternMenuSelected(value);

    if (value != 1) {
      // setIsSubMenu(1)
      // setISPatternMenu(true)
      setIsShow(false);
    } else {
      // setIsSubMenu(0)
      // setISPatternMenu(false)
      setIsShow(true);
    } // setMenu(value);

  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, contextHolder, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    title: "แก้ไขเมนู " + (!dataEdit ? "" : dataEdit.menu_title),
    className: "mt-4",
    centered: true,
    visible: _visible // onOk={() => onOK()}
    ,
    onCancel: function onCancel() {
      hideModal();
      setActive(1);
      setIsSubMenu(0);
      form.resetFields();
    },
    width: 1000,
    footer: null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"], {
    name: "basic",
    layout: "vertical",
    onFinish: onSubmitHandler,
    requiredMark: true,
    form: form,
    fields: fields,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    name: "menu_title",
    label: "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E19\u0E39",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    rules: [{
      required: true,
      message: 'กรุณากรอกชื่อเมนู'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    id: "#",
    type: "text",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E19\u0E39",
    className: "resize-none border rounded-md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 25
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    name: "pattern_menu",
    label: "\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E40\u0E21\u0E19\u0E39",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Select"], {
    defaultValue: 1,
    className: "w-full",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 25
    }
  }, patternMenu ? patternMenu.map(function (object) {
    return __jsx(Option, {
      value: object.pattern_menu_id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 40
      }
    }, object.pattern_title, "  ");
  }) : "")), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    className: "flex mt-6 mb-0",
    style: {
      marginBottom: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "inline-flex text-left lg:w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 29
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 33
    }
  }, __jsx("li", {
    className: "inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 37
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
    checked: active,
    onClick: actived,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "mx-2 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 41
    }
  }, "\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25")))))), isShow == true && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    name: "menu_detail",
    label: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14 :",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    visible: false,
    rules: [{
      required: true,
      message: 'กรุณากรอกรายละเอียด'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 25
    }
  }, __jsx(JoditEditor, {
    ref: editor,
    value: content,
    config: config.config(user),
    height: "700px",
    tabIndex: 1 // tabIndex of textarea
    ,
    onBlur: function onBlur(newContent) {
      return setContent(newContent);
    } // preferred to use only this option to update the content for performance reasons
    ,
    onChange: function onChange(newContent) {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 29
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    className: "flex mt-6 mb-0",
    style: {
      marginBottom: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "text-center lg:text-right w-full lg:w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 29
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    htmlType: "button",
    onClick: onReset,
    style: {
      backgroundColor: '#C2CFE0',
      borderColor: '#C2CFE0',
      height: 40,
      width: 110,
      marginBottom: '0px !important',
      marginRight: '2px',
      color: 'white !important'
    } // htmlType="submit"
    ,
    className: "text-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full lg:w-1/4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 33
    }
  }, __jsx(Text, {
    className: "text-custom-black ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 37
    }
  }, "\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E17")), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Button"] // type="primary"
  , {
    style: {
      backgroundColor: '#059669',
      borderColor: '#059669',
      height: 40,
      width: 110,
      marginBottom: '0px !important',
      color: 'white !important'
    },
    htmlType: "submit",
    className: "text-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full lg:w-1/4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 33
    }
  }, __jsx(Text, {
    className: "text-custom-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 37
    }
  }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01")))))), __jsx("div", {
    style: {
      "float": "left",
      clear: "both"
    },
    ref: divRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 17
    }
  })));
}

_s(modal, "3MrDowG9PRNvSrI2gyJ90xI7e7k=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_6__["notification"].useNotification, antd__WEBPACK_IMPORTED_MODULE_6__["Form"].useForm];
});

var _c, _c2;

$RefreshReg$(_c, "JoditEditor$dynamic");
$RefreshReg$(_c2, "JoditEditor");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/bcryptjs/dist/bcrypt.js":
false,

/***/ "./pages/admin/management-menu/secoundary-menu/index.js":
/*!**************************************************************!*\
  !*** ./pages/admin/management-menu/secoundary-menu/index.js ***!
  \**************************************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_drag_listview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-drag-listview */ "./node_modules/react-drag-listview/es/index.js");
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../middleware/utils */ "./middleware/utils.js");
/* harmony import */ var _components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/layout/LayoutAdmin */ "./components/layout/LayoutAdmin.jsx");
/* harmony import */ var _components_managemnet_secondary_menu_add_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/managemnet/secondary-menu/add-menu */ "./components/managemnet/secondary-menu/add-menu.jsx");
/* harmony import */ var _components_managemnet_secondary_menu_add_menu_sub__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/managemnet/secondary-menu/add-menu-sub */ "./components/managemnet/secondary-menu/add-menu-sub.jsx");
/* harmony import */ var _components_managemnet_secondary_menu_edit_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/managemnet/secondary-menu/edit-menu */ "./components/managemnet/secondary-menu/edit-menu.jsx");
/* harmony import */ var _components_managemnet_secondary_menu_edit_menu_sub__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/managemnet/secondary-menu/edit-menu-sub */ "./components/managemnet/secondary-menu/edit-menu-sub.jsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");




var _jsxFileName = "D:\\govermentlt\\pages\\admin\\management-menu\\secoundary-menu\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



/* utils */


/* components */





 // import UserNav from '../components/navigation/User';


var Text = antd__WEBPACK_IMPORTED_MODULE_12__["Typography"].Text,
    Title = antd__WEBPACK_IMPORTED_MODULE_12__["Typography"].Title;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_12__["Input"].TextArea;
/*
  This example uses react-drag-listview, and AntDesign which can be found
  at their respective links below:
  https://github.com/raisezhang/react-drag-listview#readme
  https://ant.design/docs/react/introduce
*/

/* MOCK DATA: parent list as Value, subList as subList */

var mockData = [{
  id: "category-one",
  value: "Category One",
  subList: ["Eget odio bibendum commodo malesuada Mattis montes.", "Nullam at rhoncus. Erat pretium pharetra auctor.", "Justo sed interdum sociosqu a molestie nascetur nostra metus."]
}, {
  id: "category-two",
  value: "Category Two",
  subList: ["Senectus libero blandit consectetuer penatibus gravida quisque lacinia id nunc.", "Elit. Ac. Nulla justo nibh. Fringilla, class Tempor consequat proin."]
}];
var __N_SSP = true;
function Home(props) {
  _s();

  var _this = this;

  var _notification$useNoti = antd__WEBPACK_IMPORTED_MODULE_12__["notification"].useNotification(),
      _notification$useNoti2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_notification$useNoti, 2),
      api = _notification$useNoti2[0],
      contextHolder = _notification$useNoti2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      menus = _useState[0],
      setMenus = _useState[1];

  var user = props.user,
      origin = props.origin;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      login = _useState2[0],
      setLogin = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(mockData),
      data = _useState3[0],
      setData = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      dataDelete = _useState5[0],
      setDataDelete = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      dataEdit = _useState6[0],
      setDataEdit = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      visibleModalDelete = _useState7[0],
      setVisibleModalDelete = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      visibleEditModal = _useState8[0],
      setVisibleEditModal = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      visibleEditMenuSubModal = _useState9[0],
      setVisibleEditMenuSubModal = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      visibleAddSubMenuModal = _useState10[0],
      setVisibleAddSubMenuModal = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      visibleModalMenuSubDelete = _useState11[0],
      setVisibleModalMenuSubDelete = _useState11[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    fetch();
  }, []);

  var fetch = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var params,
          menuData,
          _args = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              setLoading(true); // setVisibleEditModal(false)

              _context.next = 4;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["apiInstance"])().get('menu?is_primary_menu=0&organization_id=' + (!user ? 0 : user.organization_id));

            case 4:
              menuData = _context.sent;
              console.log(menuData);
              setMenus(menuData.data.results);
              setTimeout(function () {
                //Start the timer
                setLoading(false);
              }.bind(_this), 800);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetch() {
      return _ref.apply(this, arguments);
    };
  }();
  /*
    REORDER ACCEPTS:
      list: arr, accepts array of data to be reordered,
      fromIndex: int, onDragStart index,
      toIndex: int, onDragEnd index,
  */


  var reorder = function reorder(list, startIndex, endIndex) {
    var result = Array.from(list);

    var _result$splice = result.splice(startIndex, 1),
        _result$splice2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_result$splice, 1),
        removed = _result$splice2[0];

    result.splice(endIndex, 0, removed);
    return result;
  };
  /*
    ON DRAG END EVENT HANDLER ACCEPTS:
      fromIndex: int, onDragStart index,
      toIndex: int, onDragEnd index,
      type: str, ReactDragListView Identifier,
      index: MUST be parent list index,
  */


  var _onDragEnd = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(fromIndex, toIndex, type, index) {
      var _data, menuData, _dataRevert, menuDataRevert, _data2, _menuData, _dataRevert2, _menuDataRevert;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setLoading(true);
              /* IGNORES DRAG IF OUTSIDE DESIGNATED AREA */

              if (!(toIndex < 0)) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return");

            case 3:
              if (!(type === "LIST-ITEM")) {
                _context2.next = 15;
                break;
              }

              _data = {
                "menu_id": menus[fromIndex].menu_id,
                "menu_seq": toIndex
              };
              _context2.next = 7;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["apiInstance"])().put('menu/reorder-menu', _data);

            case 7:
              menuData = _context2.sent;
              _dataRevert = {
                "menu_id": menus[toIndex].menu_id,
                "menu_seq": fromIndex
              };
              _context2.next = 11;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["apiInstance"])().put('menu/reorder-menu', _dataRevert);

            case 11:
              menuDataRevert = _context2.sent;
              return _context2.abrupt("return", fetch());

            case 15:
              if (!(type === "SUBLIST-ITEM")) {
                _context2.next = 34;
                break;
              }

              console.log(" onDragEnd LIST-ITEM");
              console.log(fromIndex);
              console.log(toIndex);
              console.log(type);
              console.log(index);
              console.log(menus[index].menu_subs[fromIndex]);
              console.log(menus[index].menu_subs[toIndex]);
              _data2 = {
                "menu_sub_id": menus[index].menu_subs[fromIndex].menu_sub_id,
                "menu_seq": toIndex
              };
              _context2.next = 26;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["apiInstance"])().put('menu/reorder-menu-sub', _data2);

            case 26:
              _menuData = _context2.sent;
              _dataRevert2 = {
                "menu_sub_id": menus[index].menu_subs[toIndex].menu_sub_id,
                "menu_seq": fromIndex
              };
              _context2.next = 30;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["apiInstance"])().put('menu/reorder-menu-sub', _dataRevert2);

            case 30:
              _menuDataRevert = _context2.sent;
              return _context2.abrupt("return", fetch());

            case 34:
              return _context2.abrupt("return", new Error("NOT A VALID LIST"));

            case 35:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onDragEnd(_x, _x2, _x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
  /*\
    nodeSelector={}, DRAGGABLE ELEMENT IDENTIFIER, i.e 'li', ant-list.draggable>
    ALL STYLES APPLIED TO lineClassName MUST BE OVERRIDDEN WITH !important
  */


  var onDelete = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(value) {
      var registerData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["apiInstance"])()["delete"]('menu/' + dataDelete.menu_id, {});

            case 2:
              registerData = _context3.sent;

              if (registerData.data.status == 200) {
                openNotificationSuccess(); // fetchOrganizationData();

                setVisibleModalDelete(false);
                fetch();
              } else {
                openNotificationFail(registerData.data.message);
              }

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function onDelete(_x5) {
      return _ref3.apply(this, arguments);
    };
  }();

  var onMenuSubDelete = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(value) {
      var registerData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["apiInstance"])()["delete"]('menu-sub/' + dataDelete.menu_sub_id, {});

            case 2:
              registerData = _context4.sent;

              if (registerData.data.status == 200) {
                openNotificationSuccess(); // fetchOrganizationData();

                setVisibleModalMenuSubDelete(false);
                fetch();
              } else {
                openNotificationFail(registerData.data.message);
              }

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function onMenuSubDelete(_x6) {
      return _ref4.apply(this, arguments);
    };
  }();

  var openNotificationSuccess = function openNotificationSuccess() {
    api.success({
      message: "\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
      description: 'ลบข้อมูลสำเร็จ',
      placement: 'topRight'
    });
  };

  var openNotificationFail = function openNotificationFail(messgae) {
    api.error({
      message: "\u0E1E\u0E1A\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25",
      description: messgae,
      placement: 'topRight'
    });
  };

  var hideModal = function hideModal() {
    setVisibleModalDelete(false);
  };

  var hideMenuSubModal = function hideMenuSubModal() {
    setVisibleModalMenuSubDelete(false);
  };

  var showModal = function showModal(data) {
    console.log('data deletd');
    console.log(data);
    setDataDelete(data);
    setVisibleModalDelete(true);
  };

  var showDeletMenuSubModal = function showDeletMenuSubModal(data) {
    console.log('data deletd');
    console.log(data);
    setDataDelete(data);
    setVisibleModalMenuSubDelete(true);
  };

  var onclikEditModal = function onclikEditModal(value, obj) {
    // compareSync
    console.log("onclikEditModal");
    setDataEdit(obj);
    setVisibleEditModal(value);
  };

  var onclikEditMenuSubModal = function onclikEditMenuSubModal(value, obj) {
    // compareSync
    setDataEdit(obj);
    setVisibleEditMenuSubModal(value);
  };

  var onclikAddSubMenuModal = function onclikAddSubMenuModal(value, obj) {
    // compareSync
    console.log("onclikEditModal");
    setDataEdit(obj);
    setVisibleAddSubMenuModal(value);
  };

  var hideEditModal = function hideEditModal() {
    // setVisibleModalDelete(false)
    setVisibleEditModal(false);
  };

  var hideSubMenuModal = function hideSubMenuModal() {
    // setVisibleModalDelete(false)
    setVisibleAddSubMenuModal(false);
  };

  var hideEditMenuSubModal = function hideEditMenuSubModal() {
    // setVisibleModalDelete(false)
    setVisibleEditMenuSubModal(false);
  };

  return __jsx(_components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Government - Admin management",
    url: origin,
    origin: origin,
    user: login,
    isMain: true,
    indexSubMenu: "2",
    indexMenu: "sub-2-1",
    titlePage: "เมนูรอง",
    _routes: [{
      path: '/admin/dashborad',
      breadcrumbName: 'หน้าหลัก'
    }, {
      path: '',
      breadcrumbName: 'เมนูรอง'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 7
    }
  }, contextHolder, __jsx(_components_managemnet_secondary_menu_add_menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fetch: fetch,
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 9
    }
  }), __jsx(_components_managemnet_secondary_menu_edit_menu__WEBPACK_IMPORTED_MODULE_10__["default"], {
    _visible: visibleEditModal,
    hideEditModal: hideEditModal,
    fetch: fetch,
    user: user,
    dataEdit: dataEdit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 9
    }
  }), __jsx(_components_managemnet_secondary_menu_edit_menu_sub__WEBPACK_IMPORTED_MODULE_11__["default"], {
    _visible: visibleEditMenuSubModal,
    hideModal: hideEditMenuSubModal,
    fetch: fetch,
    user: user,
    dataEdit: dataEdit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 9
    }
  }), __jsx(_components_managemnet_secondary_menu_add_menu_sub__WEBPACK_IMPORTED_MODULE_9__["default"], {
    _visible: visibleAddSubMenuModal,
    hideModal: hideSubMenuModal,
    fetch: fetch,
    user: user,
    dataEdit: dataEdit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["Spin"], {
    spinning: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 9
    }
  }, __jsx(react_drag_listview__WEBPACK_IMPORTED_MODULE_5__["default"], {
    nodeSelector: ".ant-list.draggable",
    lineClassName: "dragLine",
    onDragEnd: function onDragEnd(fromIndex, toIndex) {
      return _onDragEnd(fromIndex, toIndex, "LIST-ITEM");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 11
    }
  }, menus.length == 0 && __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["Empty"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 35
    }
  }), menus.map(function (obj, index) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["List"], {
      header: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["Typography"].Text, {
        strong: true,
        className: "grabbable",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 21
        }
      }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["DragOutlined"], {
        className: "icon",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 23
        }
      }), obj.menu_title), __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["Tag"], {
        color: obj.is_show == 1 ? "success" : "default",
        style: {
          marginLeft: "10px",
          marginRight: "0px"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 21
        }
      }, obj.is_show == 1 ? "ใช้งาน" : "ไม่ใช้งาน"), __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        className: "ml-2",
        type: "default",
        onClick: function onClick() {
          onclikEditModal(true, obj);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 21
        }
      }, "\u0E41\u0E01\u0E49\u0E44\u0E02"), obj.have_sub == 1 && __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        style: {
          backgroundColor: "#059669",
          color: "white",
          borderColor: "#059669"
        },
        onClick: function onClick() {
          onclikAddSubMenuModal(true, obj);
        },
        className: "ml-2",
        type: "success",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 43
        }
      }, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E21\u0E19\u0E39\u0E22\u0E48\u0E2D\u0E22"), __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        className: "ml-2",
        type: "danger",
        onClick: function onClick() {
          return showModal(obj);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 21
        }
      }, "\u0E25\u0E1A")),
      key: index,
      className: "draggable",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 15
      }
    }, __jsx(react_drag_listview__WEBPACK_IMPORTED_MODULE_5__["default"], {
      nodeSelector: ".ant-list-item.draggable-item",
      lineClassName: "dragLine",
      onDragEnd: function onDragEnd(fromIndex, toIndex) {
        return _onDragEnd(fromIndex, toIndex, "SUBLIST-ITEM", index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 17
      }
    }, obj.have_sub == 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, obj.menu_subs.map(function (item, index2) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["List"].Item, {
        key: index2,
        className: "draggable-item",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 23
        }
      }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["DragOutlined"], {
        className: "icon",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344,
          columnNumber: 25
        }
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["List"].Item.Meta, {
        title: item.menu_title,
        className: "grabbable",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 25
        }
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["Tag"], {
        color: item.is_show == 1 ? "success" : "default",
        style: {
          marginLeft: "10px",
          marginRight: "10px"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 25
        }
      }, item.is_show == 1 ? "ใช้งาน" : "ไม่ใช้งาน"), __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        className: "mr-1",
        type: "default",
        onClick: function onClick() {
          onclikEditMenuSubModal(true, item);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 25
        }
      }, "\u0E41\u0E01\u0E49\u0E44\u0E02"), __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        className: "mr-2",
        type: "danger",
        onClick: function onClick() {
          return showDeletMenuSubModal(item);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 25
        }
      }, "\u0E25\u0E1A"));
    }))));
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["Modal"], {
    title: "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?",
    visible: visibleModalDelete,
    onOk: onDelete,
    onCancel: hideModal,
    okText: "\u0E25\u0E1A",
    cancelText: "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",
    okButtonProps: {
      'type': "primary",
      'danger': true
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 9
    }
  }, "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A \"", dataDelete ? dataDelete.menu_title : "", "\" \u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?  ")), __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["Modal"], {
    title: "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?",
    visible: visibleModalMenuSubDelete,
    onOk: onMenuSubDelete,
    onCancel: hideMenuSubModal,
    okText: "\u0E25\u0E1A",
    cancelText: "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",
    okButtonProps: {
      'type': "primary",
      'danger': true
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 9
    }
  }, "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A \"", dataDelete ? dataDelete.menu_title : "", "\" \u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?  ")));
}
/* getServerSideProps */

_s(Home, "PowmPuSdz0cUTRClRU2Sp9+HKNI=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_12__["notification"].useNotification];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hbmFnZW1uZXQvc2Vjb25kYXJ5LW1lbnUvZWRpdC1tZW51LXN1Yi5qc3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4vbWFuYWdlbWVudC1tZW51L3NlY291bmRhcnktbWVudS9pbmRleC5qcyJdLCJuYW1lcyI6WyJPcHRpb24iLCJTZWxlY3QiLCJUZXh0QXJlYSIsIklucHV0IiwiY29uZmlnIiwicmVxdWlyZSIsIkpvZGl0RWRpdG9yIiwiZHluYW1pYyIsInNzciIsIlRleHQiLCJUeXBvZ3JhcGh5IiwiVGl0bGUiLCJtb2RhbCIsIl92aXNpYmxlIiwiaGlkZU1vZGFsIiwiZmV0Y2giLCJ1c2VyIiwiZGF0YUVkaXQiLCJkaXZSZWYiLCJ1c2VSZWYiLCJub3RpZmljYXRpb24iLCJ1c2VOb3RpZmljYXRpb24iLCJhcGkiLCJjb250ZXh0SG9sZGVyIiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInBhdHRlcm5NZW51U2VsZWN0ZWQiLCJzZXRQYXR0ZXJuTWVudVNlbGVjdGVkIiwicGF0dGVybk1lbnUiLCJzZXRQYXR0ZXJuTWVudSIsImVkaXRvciIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiaXNTdWJNZW51Iiwic2V0SXNTdWJNZW51IiwiaXNTaG93Iiwic2V0SXNTaG93IiwibmFtZSIsInZhbHVlIiwiZmllbGRzIiwic2V0RmllbGRzIiwiRm9ybSIsInVzZUZvcm0iLCJmb3JtIiwiYWN0aXZlZCIsInVzZUVmZmVjdCIsImZldGNoUGF0dGVybiIsImZldGNoRWRpdERhdGEiLCJhcGlJbnN0YW5jZSIsImdldCIsIm1lbnVEYXRhIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJyZXN1bHRzIiwiaXNfc2hvdyIsImhhdmVfc3ViIiwicGF0dGVybl9tZW51IiwibWVudV90aXRsZSIsIm1lbnVfZGV0YWlsIiwib25TdWJtaXRIYW5kbGVyIiwicHV0IiwibWVudV9zdWJfaWQiLCJyZWdpc3RlckRhdGEiLCJzdGF0dXMiLCJvcGVuTm90aWZpY2F0aW9uU3VjY2VzcyIsIm9wZW5Ob3RpZmljYXRpb25GYWlsIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJkZXNjcmlwdGlvbiIsInBsYWNlbWVudCIsIm1lc3NnYWUiLCJlcnJvciIsIm9uUmVzZXQiLCJoYW5kbGVDaGFuZ2UiLCJyZXNldEZpZWxkcyIsInJlcXVpcmVkIiwibWFwIiwib2JqZWN0IiwicGF0dGVybl9tZW51X2lkIiwicGF0dGVybl90aXRsZSIsIm1hcmdpbkJvdHRvbSIsIm5ld0NvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJjb2xvciIsImNsZWFyIiwibW9ja0RhdGEiLCJpZCIsInN1Ykxpc3QiLCJIb21lIiwicHJvcHMiLCJtZW51cyIsInNldE1lbnVzIiwib3JpZ2luIiwibG9naW4iLCJzZXRMb2dpbiIsInNldERhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImRhdGFEZWxldGUiLCJzZXREYXRhRGVsZXRlIiwic2V0RGF0YUVkaXQiLCJ2aXNpYmxlTW9kYWxEZWxldGUiLCJzZXRWaXNpYmxlTW9kYWxEZWxldGUiLCJ2aXNpYmxlRWRpdE1vZGFsIiwic2V0VmlzaWJsZUVkaXRNb2RhbCIsInZpc2libGVFZGl0TWVudVN1Yk1vZGFsIiwic2V0VmlzaWJsZUVkaXRNZW51U3ViTW9kYWwiLCJ2aXNpYmxlQWRkU3ViTWVudU1vZGFsIiwic2V0VmlzaWJsZUFkZFN1Yk1lbnVNb2RhbCIsInZpc2libGVNb2RhbE1lbnVTdWJEZWxldGUiLCJzZXRWaXNpYmxlTW9kYWxNZW51U3ViRGVsZXRlIiwicGFyYW1zIiwib3JnYW5pemF0aW9uX2lkIiwic2V0VGltZW91dCIsImJpbmQiLCJyZW9yZGVyIiwibGlzdCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsInJlc3VsdCIsIkFycmF5IiwiZnJvbSIsInNwbGljZSIsInJlbW92ZWQiLCJvbkRyYWdFbmQiLCJmcm9tSW5kZXgiLCJ0b0luZGV4IiwidHlwZSIsImluZGV4IiwiX2RhdGEiLCJtZW51X2lkIiwiX2RhdGFSZXZlcnQiLCJtZW51RGF0YVJldmVydCIsIm1lbnVfc3VicyIsIkVycm9yIiwib25EZWxldGUiLCJvbk1lbnVTdWJEZWxldGUiLCJoaWRlTWVudVN1Yk1vZGFsIiwic2hvd01vZGFsIiwic2hvd0RlbGV0TWVudVN1Yk1vZGFsIiwib25jbGlrRWRpdE1vZGFsIiwib2JqIiwib25jbGlrRWRpdE1lbnVTdWJNb2RhbCIsIm9uY2xpa0FkZFN1Yk1lbnVNb2RhbCIsImhpZGVFZGl0TW9kYWwiLCJoaWRlU3ViTWVudU1vZGFsIiwiaGlkZUVkaXRNZW51U3ViTW9kYWwiLCJwYXRoIiwiYnJlYWRjcnVtYk5hbWUiLCJsZW5ndGgiLCJtYXJnaW5MZWZ0IiwiaXRlbSIsImluZGV4MiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQVFBLE1BQVIsR0FBbUJDLDJDQUFuQixDQUFRRCxNQUFSO0FBQ0EsSUFBUUUsUUFBUixHQUFxQkMsMENBQXJCLENBQVFELFFBQVIsQyxDQUNBOztBQUNBLElBQU1FLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyw0REFBRCxDQUF0Qjs7QUFDQTtBQUNBLElBQU1DLFdBQVcsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sd0pBQU47QUFBQSxDQUFELEVBQThCO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUFoQixvRUFBZ0I7QUFBQTtBQUFBLGNBQWhCLGFBQWdCO0FBQUE7QUFBQSxDQUE5QixDQUEzQjtNQUFNRixXO0FBQ04sSUFBUUcsSUFBUixHQUF3QkMsK0NBQXhCLENBQVFELElBQVI7QUFBQSxJQUFjRSxLQUFkLEdBQXdCRCwrQ0FBeEIsQ0FBY0MsS0FBZDtBQUNlLFNBQVNDLEtBQVQsT0FBK0Q7QUFBQTs7QUFBQTs7QUFBQSxNQUE5Q0MsUUFB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QUE7QUFBQTtBQUFBO0FBQUEsb0ZBQWtCNEYsVUFBVSxHQUFHQSxVQUFVLENBQUM3QyxVQUFkLEdBQTJCLEVBQXZELHFEQVpGLENBOUVGLEVBOEZFLE1BQUMsMkNBQUQ7QUFDRSxTQUFLLEVBQUMseUpBRFI7QUFFRSxXQUFPLEVBQUV3RCx5QkFGWDtBQUdFLFFBQUksRUFBRTJCLGVBSFI7QUFJRSxZQUFRLEVBQUVDLGdCQUpaO0FBS0UsVUFBTSxFQUFDLGNBTFQ7QUFNRSxjQUFVLEVBQUMsc0NBTmI7QUFPRSxpQkFBYSxFQUFFO0FBQ2IsY0FBUSxTQURLO0FBRWIsZ0JBQVU7QUFGRyxLQVBqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvRkFBa0J2QyxVQUFVLEdBQUdBLFVBQVUsQ0FBQzdDLFVBQWQsR0FBMkIsRUFBdkQscURBWkYsQ0E5RkYsQ0FERjtBQWdIRDtBQUNEOztHQWpWd0JtQyxJO1VBQ081RSxrREFBWSxDQUFDQyxlOzs7S0FEcEIyRSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pblxcbWFuYWdlbWVudC1tZW51XFxzZWNvdW5kYXJ5LW1lbnUuanMuMmY0NDMzYmQ0ODBhYjNmMjFkMmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uLCBGb3JtLCBJbnB1dCwgU3dpdGNoLCBUeXBvZ3JhcGh5LCBTZWxlY3QsIG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnO1xyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuLy8gY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi8uLi8uLi9jb25maWcnKTtcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vLi4vLi4vcGFnZXMvYWRtaW4vY29uZmlnJyk7XHJcbmltcG9ydCB7IGFic29sdXRlVXJsLCBjaGVja0lzTG9naW4sIGFwaUluc3RhbmNlLCBjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lIH0gZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS91dGlscyc7XHJcbmNvbnN0IEpvZGl0RWRpdG9yID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJqb2RpdC1yZWFjdFwiKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5jb25zdCB7IFRleHQsIFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbCh7IF92aXNpYmxlLCBoaWRlTW9kYWwsIGZldGNoLCB1c2VyLCBkYXRhRWRpdCB9KSB7XHJcbiAgICBsZXQgZGl2UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW2FwaSwgY29udGV4dEhvbGRlcl0gPSBub3RpZmljYXRpb24udXNlTm90aWZpY2F0aW9uKCk7XHJcbiAgICAvLyBjb25zdCBbZGl2UmVmXSA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwYXR0ZXJuTWVudVNlbGVjdGVkLCBzZXRQYXR0ZXJuTWVudVNlbGVjdGVkXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICAgIGNvbnN0IFtwYXR0ZXJuTWVudSwgc2V0UGF0dGVybk1lbnVdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgZWRpdG9yID0gdXNlUmVmKG51bGwpXHJcbiAgICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgxKVxyXG4gICAgY29uc3QgW2lzU3ViTWVudSwgc2V0SXNTdWJNZW51XSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbaXNTaG93LCBzZXRJc1Nob3ddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbZmllbGRzLCBzZXRGaWVsZHNdID0gdXNlU3RhdGUoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogWydpbnRyb190aXRsZSddLFxyXG4gICAgICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgfSxcclxuICAgIF0pO1xyXG4gICAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcbiAgICBjb25zdCBhY3RpdmVkID0gKCkgPT4ge1xyXG4gICAgICAgIGFjdGl2ZSA/IHNldEFjdGl2ZSgwKSA6IHNldEFjdGl2ZSgxKTtcclxuICAgICAgICAvLyBkaXZSZWYuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuICAgICAgICAvLyBkaXZSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICAgIH07XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFZpc2libGUoX3Zpc2libGUpXHJcbiAgICAgICAgZmV0Y2hQYXR0ZXJuKClcclxuICAgICAgICBmZXRjaEVkaXREYXRhKClcclxuICAgIH0sIFtkYXRhRWRpdF0pXHJcblxyXG4gICAgY29uc3QgZmV0Y2hQYXR0ZXJuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lbnVEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICAgICAgICdtZW51L3BhdHRlcm4tbWVudSdcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1lbnVEYXRhKVxyXG4gICAgICAgIHNldFBhdHRlcm5NZW51KG1lbnVEYXRhLmRhdGEucmVzdWx0cylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmZXRjaEVkaXREYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhRWRpdCkge1xyXG4gICAgICAgICAgICBzZXRBY3RpdmUoZGF0YUVkaXQuaXNfc2hvdylcclxuICAgICAgICAgICAgc2V0SXNTdWJNZW51KGRhdGFFZGl0LmhhdmVfc3ViKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGFFZGl0IHVzZUVmZmVjdFwiKVxyXG4gICAgICAgICAgICBzZXRQYXR0ZXJuTWVudVNlbGVjdGVkKGRhdGFFZGl0LnBhdHRlcm5fbWVudSlcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhRWRpdC5wYXR0ZXJuX21lbnUgIT0gMSkge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNTaG93KGZhbHNlKVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldElzU2hvdyh0cnVlKVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBzZXRGaWVsZHMoW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFsnbWVudV90aXRsZSddLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAoIWRhdGFFZGl0ID8gXCJcIiA6IGRhdGFFZGl0Lm1lbnVfdGl0bGUpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBbJ3BhdHRlcm5fbWVudSddLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAoIWRhdGFFZGl0ID8gXCJcIiA6IGRhdGFFZGl0LnBhdHRlcm5fbWVudSksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFsnbWVudV9kZXRhaWwnXSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKCFkYXRhRWRpdCA/IFwiXCIgOiBkYXRhRWRpdC5tZW51X2RldGFpbCksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcblxyXG5cclxuICAgICAgICAvLyBvcmdhbml6YXRpb25faWQ6IG9yZ2FuaXphdGlvbl9pZCxcclxuICAgICAgICAvLyBtZW51X3RpdGxlOiBtZW51X3RpdGxlLFxyXG4gICAgICAgIC8vIG1lbnVfZGV0YWlsOiBtZW51X2RldGFpbCxcclxuICAgICAgICAvLyBtZW51X3NlcTogbWVudV9zZXEsXHJcbiAgICAgICAgLy8gaGF2ZV9zdWI6IGhhdmVfc3ViLFxyXG4gICAgICAgIC8vIGlzX3Nob3c6IGlzX3Nob3csXHJcbiAgICAgICAgLy8gaXNfcHJpbWFyeV9tZW51OiBpc19wcmltYXJ5X21lbnUsXHJcbiAgICAgICAgLy8gaXNfcGF0dGVybl9tZW51OiBpc19wYXR0ZXJuX21lbnUsXHJcbiAgICAgICAgLy8gcGF0dGVybl9tZW51OiBwYXR0ZXJuX21lbnUsXHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIFwibWVudV90aXRsZVwiOiB2YWx1ZS5tZW51X3RpdGxlLFxyXG4gICAgICAgICAgICBcIm1lbnVfZGV0YWlsXCI6IGNvbnRlbnQgPyB2YWx1ZS5tZW51X2RldGFpbCA6IFwiXCIsXHJcbiAgICAgICAgICAgIC8vIFwibWVudV9zZXFcIjogMCxcclxuICAgICAgICAgICAgXCJpc19zaG93XCI6IGFjdGl2ZSA/IDEgOiAwLFxyXG4gICAgICAgICAgICBcImlzX3BhdHRlcm5fbWVudVwiOiB2YWx1ZS5wYXR0ZXJuX21lbnUgPT0gMSA/IDAgOiAxLFxyXG4gICAgICAgICAgICBcInBhdHRlcm5fbWVudVwiOiBwYXR0ZXJuTWVudVNlbGVjdGVkLFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkucHV0KCcvbWVudS1zdWIvJyArIChkYXRhRWRpdCA/IGRhdGFFZGl0Lm1lbnVfc3ViX2lkIDogMCksIGRhdGEpO1xyXG4gICAgICAgIGlmIChyZWdpc3RlckRhdGEuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIG9wZW5Ob3RpZmljYXRpb25TdWNjZXNzKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvcGVuTm90aWZpY2F0aW9uRmFpbChyZWdpc3RlckRhdGEuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT04gT0tcIilcclxuICAgICAgICAvLyBzZXRWaXNpYmxlKGZhbHNlKVxyXG4gICAgICAgIC8vIG9uUmVzZXQoKVxyXG4gICAgICAgIGZldGNoKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcGVuTm90aWZpY2F0aW9uU3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICBhcGkuc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGDguJrguLHguJnguJfguLbguIHguKHguLnguKXguKrguLPguYDguKPguYfguIhgLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ+C4muC4seC4meC4l+C4tuC4geC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iCcsXHJcbiAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvbkZhaWwgPSAobWVzc2dhZSkgPT4ge1xyXG4gICAgICAgIGFwaS5lcnJvcih7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGDguJ7guJrguJvguLHguI3guKvguLLguKPguLDguKvguKfguYjguLLguIfguIHguLLguKPguJrguLHguJnguJfguLbguIHguILguYnguK3guKHguLnguKVgLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogbWVzc2dhZSxcclxuICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3Qgb25SZXNldCA9ICgpID0+IHtcclxuICAgICAgICBzZXRBY3RpdmUoZGF0YUVkaXQuaXNfc2hvdylcclxuICAgICAgICBzZXRJc1N1Yk1lbnUoZGF0YUVkaXQuaGF2ZV9zdWIpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkYXRhRWRpdCB1c2VFZmZlY3RcIilcclxuICAgICAgICBzZXRQYXR0ZXJuTWVudVNlbGVjdGVkKGRhdGFFZGl0LnBhdHRlcm5fbWVudSlcclxuXHJcbiAgICAgICAgaWYgKGRhdGFFZGl0LnBhdHRlcm5fbWVudSAhPSAxKSB7XHJcbiAgICAgICAgICAgIHNldElzU2hvdyhmYWxzZSlcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0SXNTaG93KHRydWUpXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICBzZXRGaWVsZHMoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBbJ21lbnVfdGl0bGUnXSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAoIWRhdGFFZGl0ID8gXCJcIiA6IGRhdGFFZGl0Lm1lbnVfdGl0bGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBbJ3BhdHRlcm5fbWVudSddLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICghZGF0YUVkaXQgPyBcIlwiIDogZGF0YUVkaXQucGF0dGVybl9tZW51KSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogWydtZW51X2RldGFpbCddLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICghZGF0YUVkaXQgPyBcIlwiIDogZGF0YUVkaXQubWVudV9kZXRhaWwpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZCAke3ZhbHVlfWApO1xyXG4gICAgICAgIHNldFBhdHRlcm5NZW51U2VsZWN0ZWQodmFsdWUpXHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAhPSAxKSB7XHJcbiAgICAgICAgICAgIC8vIHNldElzU3ViTWVudSgxKVxyXG4gICAgICAgICAgICAvLyBzZXRJU1BhdHRlcm5NZW51KHRydWUpXHJcbiAgICAgICAgICAgIHNldElzU2hvdyhmYWxzZSlcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gc2V0SXNTdWJNZW51KDApXHJcblxyXG4gICAgICAgICAgICAvLyBzZXRJU1BhdHRlcm5NZW51KGZhbHNlKVxyXG4gICAgICAgICAgICBzZXRJc1Nob3codHJ1ZSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNldE1lbnUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2NvbnRleHRIb2xkZXJ9XHJcbiAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e1wi4LmB4LiB4LmJ4LmE4LiC4LmA4Lih4LiZ4Li5IFwiICsgKCFkYXRhRWRpdCA/IFwiXCIgOiBkYXRhRWRpdC5tZW51X3RpdGxlKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxyXG4gICAgICAgICAgICAgICAgY2VudGVyZWRcclxuICAgICAgICAgICAgICAgIHZpc2libGU9e192aXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgLy8gb25Paz17KCkgPT4gb25PSygpfVxyXG4gICAgICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBoaWRlTW9kYWwoKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZSgxKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldElzU3ViTWVudSgwKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17MTAwMH1cclxuICAgICAgICAgICAgICAgIGZvb3Rlcj17bnVsbH1cclxuICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2ljXCJcclxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25GaW5pc2g9e29uU3VibWl0SGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZE1hcms9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgICAgICAgICAgICAgICBmaWVsZHM9e2ZpZWxkc31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZW51X3RpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLguIrguLfguYjguK3guYDguKHguJnguLlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4LmA4Lih4LiZ4Li5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC5gOC4oeC4meC4uVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGF0dGVybl9tZW51XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLguKPguLnguJvguYHguJrguJrguYDguKHguJnguLlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPE9wdGlvbiB2YWx1ZT1cIjBcIj7guIHguLPguKvguJnguJTguYDguK3guIc8L09wdGlvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGF0dGVybk1lbnUgPyBwYXR0ZXJuTWVudS5tYXAoKG9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8T3B0aW9uIHZhbHVlPXtvYmplY3QucGF0dGVybl9tZW51X2lkfT57b2JqZWN0LnBhdHRlcm5fdGl0bGV9ICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBjbGFzc05hbWU9XCJmbGV4IG10LTYgbWItMFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggdGV4dC1sZWZ0IGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggY2hlY2tlZD17YWN0aXZlfSBvbkNsaWNrPXthY3RpdmVkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXgtMiB0ZXh0LXNtXCI+4LiB4Liy4Lij4LmB4Liq4LiU4LiH4Lic4LilPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cImlubGluZS1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoIGNoZWNrZWQ9e2lzU3ViTWVudX0gb25DbGljaz17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNTdWJNZW51KHZhbHVlID8gMSA6IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhdHRlcm5NZW51U2VsZWN0ZWQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc1Nob3codmFsdWUgPyBmYWxzZSA6IHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm14LTIgdGV4dC1zbVwiPuC4leC5ieC4reC4h+C4geC4suC4o+C4quC4o+C5ieC4suC4hyDguYDguKHguJnguLnguKLguYjguK3guKI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzU2hvdyA9PSB0cnVlICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZW51X2RldGFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuC4o+C4suC4ouC4peC4sOC5gOC4reC4teC4ouC4lCA6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguKPguLLguKLguKXguLDguYDguK3guLXguKLguJQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Sm9kaXRFZGl0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2VkaXRvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWc9e2NvbmZpZy5jb25maWcodXNlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjcwMHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9IC8vIHRhYkluZGV4IG9mIHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtuZXdDb250ZW50ID0+IHNldENvbnRlbnQobmV3Q29udGVudCl9IC8vIHByZWZlcnJlZCB0byB1c2Ugb25seSB0aGlzIG9wdGlvbiB0byB1cGRhdGUgdGhlIGNvbnRlbnQgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17bmV3Q29udGVudCA9PiB7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC8+fVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBjbGFzc05hbWU9XCJmbGV4IG10LTYgbWItMFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGxcIiA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBsZzp0ZXh0LXJpZ2h0IHctZnVsbCBsZzp3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25SZXNldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNDMkNGRTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQzJDRkUwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMHB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSB3LWZ1bGwgbGc6dy0xLzRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGV4dC1jdXN0b20tYmxhY2sgXCI+4Lij4Li14LmA4LiL4LmH4LiXPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzA1OTY2OScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyMwNTk2NjknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwcHggIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHctZnVsbCBsZzp3LTEvNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbS13aGl0ZSBcIj7guJrguLHguJnguJfguLbguIE8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiBcImxlZnRcIiwgY2xlYXI6IFwiYm90aFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtkaXZSZWZ9PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBEcmFnT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RHJhZ0xpc3RWaWV3IGZyb20gXCJyZWFjdC1kcmFnLWxpc3R2aWV3XCI7XHJcbi8qIHV0aWxzICovXHJcbmltcG9ydCB7IGFic29sdXRlVXJsLCBhcGlJbnN0YW5jZSB9IGZyb20gJy4uLy4uLy4uLy4uL21pZGRsZXdhcmUvdXRpbHMnO1xyXG5cclxuLyogY29tcG9uZW50cyAqL1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dEFkbWluJztcclxuaW1wb3J0IE1vZGFsQWRkTWVudSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL21hbmFnZW1uZXQvc2Vjb25kYXJ5LW1lbnUvYWRkLW1lbnUnO1xyXG5pbXBvcnQgTW9kYWxBZGRNZW51U3ViIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbWFuYWdlbW5ldC9zZWNvbmRhcnktbWVudS9hZGQtbWVudS1zdWInO1xyXG5pbXBvcnQgTW9kYWxFZGl0TWVudSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL21hbmFnZW1uZXQvc2Vjb25kYXJ5LW1lbnUvZWRpdC1tZW51JztcclxuaW1wb3J0IE1vZGFsRWRpdE1lbnVTdWIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9tYW5hZ2VtbmV0L3NlY29uZGFyeS1tZW51L2VkaXQtbWVudS1zdWInO1xyXG5cclxuXHJcbi8vIGltcG9ydCBVc2VyTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9Vc2VyJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIEVtcHR5LFxyXG4gIElucHV0LFxyXG4gIExpc3QsXHJcbiAgTW9kYWwsXHJcbiAgU3BpbixcclxuICBUYWcsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBub3RpZmljYXRpb25cclxufSBmcm9tICdhbnRkJztcclxuXHJcbmNvbnN0IHsgVGV4dCwgVGl0bGUgfSA9IFR5cG9ncmFwaHk7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcblxyXG4vKlxyXG4gIFRoaXMgZXhhbXBsZSB1c2VzIHJlYWN0LWRyYWctbGlzdHZpZXcsIGFuZCBBbnREZXNpZ24gd2hpY2ggY2FuIGJlIGZvdW5kXHJcbiAgYXQgdGhlaXIgcmVzcGVjdGl2ZSBsaW5rcyBiZWxvdzpcclxuICBodHRwczovL2dpdGh1Yi5jb20vcmFpc2V6aGFuZy9yZWFjdC1kcmFnLWxpc3R2aWV3I3JlYWRtZVxyXG4gIGh0dHBzOi8vYW50LmRlc2lnbi9kb2NzL3JlYWN0L2ludHJvZHVjZVxyXG4qL1xyXG5cclxuLyogTU9DSyBEQVRBOiBwYXJlbnQgbGlzdCBhcyBWYWx1ZSwgc3ViTGlzdCBhcyBzdWJMaXN0ICovXHJcbmNvbnN0IG1vY2tEYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiBcImNhdGVnb3J5LW9uZVwiLFxyXG4gICAgdmFsdWU6IFwiQ2F0ZWdvcnkgT25lXCIsXHJcbiAgICBzdWJMaXN0OiBbXHJcbiAgICAgIFwiRWdldCBvZGlvIGJpYmVuZHVtIGNvbW1vZG8gbWFsZXN1YWRhIE1hdHRpcyBtb250ZXMuXCIsXHJcbiAgICAgIFwiTnVsbGFtIGF0IHJob25jdXMuIEVyYXQgcHJldGl1bSBwaGFyZXRyYSBhdWN0b3IuXCIsXHJcbiAgICAgIFwiSnVzdG8gc2VkIGludGVyZHVtIHNvY2lvc3F1IGEgbW9sZXN0aWUgbmFzY2V0dXIgbm9zdHJhIG1ldHVzLlwiXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJjYXRlZ29yeS10d29cIixcclxuICAgIHZhbHVlOiBcIkNhdGVnb3J5IFR3b1wiLFxyXG4gICAgc3ViTGlzdDogW1xyXG4gICAgICBcIlNlbmVjdHVzIGxpYmVybyBibGFuZGl0IGNvbnNlY3RldHVlciBwZW5hdGlidXMgZ3JhdmlkYSBxdWlzcXVlIGxhY2luaWEgaWQgbnVuYy5cIixcclxuICAgICAgXCJFbGl0LiBBYy4gTnVsbGEganVzdG8gbmliaC4gRnJpbmdpbGxhLCBjbGFzcyBUZW1wb3IgY29uc2VxdWF0IHByb2luLlwiXHJcbiAgICBdXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG4gIGNvbnN0IFthcGksIGNvbnRleHRIb2xkZXJdID0gbm90aWZpY2F0aW9uLnVzZU5vdGlmaWNhdGlvbigpO1xyXG4gIGNvbnN0IFttZW51cywgc2V0TWVudXNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgeyB1c2VyLCBvcmlnaW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShtb2NrRGF0YSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtkYXRhRGVsZXRlLCBzZXREYXRhRGVsZXRlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2RhdGFFZGl0LCBzZXREYXRhRWRpdF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFt2aXNpYmxlTW9kYWxEZWxldGUsIHNldFZpc2libGVNb2RhbERlbGV0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdmlzaWJsZUVkaXRNb2RhbCwgc2V0VmlzaWJsZUVkaXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdmlzaWJsZUVkaXRNZW51U3ViTW9kYWwsIHNldFZpc2libGVFZGl0TWVudVN1Yk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFt2aXNpYmxlQWRkU3ViTWVudU1vZGFsLCBzZXRWaXNpYmxlQWRkU3ViTWVudU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFt2aXNpYmxlTW9kYWxNZW51U3ViRGVsZXRlLCBzZXRWaXNpYmxlTW9kYWxNZW51U3ViRGVsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgIGZldGNoKClcclxuICB9LCBbXSlcclxuXHJcblxyXG4gIGNvbnN0IGZldGNoID0gYXN5bmMgKHBhcmFtcyA9IHt9KSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAvLyBzZXRWaXNpYmxlRWRpdE1vZGFsKGZhbHNlKVxyXG4gICAgY29uc3QgbWVudURhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ21lbnU/aXNfcHJpbWFyeV9tZW51PTAmb3JnYW5pemF0aW9uX2lkPScgKyAoIXVzZXIgPyAwIDogdXNlci5vcmdhbml6YXRpb25faWQpXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2cobWVudURhdGEpXHJcbiAgICBzZXRNZW51cyhtZW51RGF0YS5kYXRhLnJlc3VsdHMpXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgLy9TdGFydCB0aGUgdGltZXJcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgIH0uYmluZCh0aGlzKSwgODAwKVxyXG5cclxuICB9O1xyXG4gIC8qXHJcbiAgICBSRU9SREVSIEFDQ0VQVFM6XHJcbiAgICAgIGxpc3Q6IGFyciwgYWNjZXB0cyBhcnJheSBvZiBkYXRhIHRvIGJlIHJlb3JkZXJlZCxcclxuICAgICAgZnJvbUluZGV4OiBpbnQsIG9uRHJhZ1N0YXJ0IGluZGV4LFxyXG4gICAgICB0b0luZGV4OiBpbnQsIG9uRHJhZ0VuZCBpbmRleCxcclxuICAqL1xyXG5cclxuICBjb25zdCByZW9yZGVyID0gKGxpc3QsIHN0YXJ0SW5kZXgsIGVuZEluZGV4KSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBBcnJheS5mcm9tKGxpc3QpO1xyXG4gICAgY29uc3QgW3JlbW92ZWRdID0gcmVzdWx0LnNwbGljZShzdGFydEluZGV4LCAxKTtcclxuICAgIHJlc3VsdC5zcGxpY2UoZW5kSW5kZXgsIDAsIHJlbW92ZWQpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9O1xyXG5cclxuICAvKlxyXG4gICAgT04gRFJBRyBFTkQgRVZFTlQgSEFORExFUiBBQ0NFUFRTOlxyXG4gICAgICBmcm9tSW5kZXg6IGludCwgb25EcmFnU3RhcnQgaW5kZXgsXHJcbiAgICAgIHRvSW5kZXg6IGludCwgb25EcmFnRW5kIGluZGV4LFxyXG4gICAgICB0eXBlOiBzdHIsIFJlYWN0RHJhZ0xpc3RWaWV3IElkZW50aWZpZXIsXHJcbiAgICAgIGluZGV4OiBNVVNUIGJlIHBhcmVudCBsaXN0IGluZGV4LFxyXG4gICovXHJcblxyXG4gIGNvbnN0IG9uRHJhZ0VuZCA9IGFzeW5jIChmcm9tSW5kZXgsIHRvSW5kZXgsIHR5cGUsIGluZGV4KSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAvKiBJR05PUkVTIERSQUcgSUYgT1VUU0lERSBERVNJR05BVEVEIEFSRUEgKi9cclxuICAgIGlmICh0b0luZGV4IDwgMCkgcmV0dXJuO1xyXG5cclxuICAgIC8qIFJFT1JERVIgUEFSRU5UIE9SIFNVQkxJU1QsIEVMU0UgVEhST1cgRVJST1IgKi9cclxuICAgIGlmICh0eXBlID09PSBcIkxJU1QtSVRFTVwiKSB7XHJcblxyXG4gICAgICBjb25zdCBfZGF0YSA9IHtcclxuICAgICAgICBcIm1lbnVfaWRcIjogbWVudXNbZnJvbUluZGV4XS5tZW51X2lkLFxyXG4gICAgICAgIFwibWVudV9zZXFcIjogdG9JbmRleCxcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBtZW51RGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkucHV0KFxyXG4gICAgICAgICdtZW51L3Jlb3JkZXItbWVudScsIF9kYXRhXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBfZGF0YVJldmVydCA9IHtcclxuICAgICAgICBcIm1lbnVfaWRcIjogbWVudXNbdG9JbmRleF0ubWVudV9pZCxcclxuICAgICAgICBcIm1lbnVfc2VxXCI6IGZyb21JbmRleCxcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBtZW51RGF0YVJldmVydCA9IGF3YWl0IGFwaUluc3RhbmNlKCkucHV0KFxyXG4gICAgICAgICdtZW51L3Jlb3JkZXItbWVudScsIF9kYXRhUmV2ZXJ0XHJcbiAgICAgICk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKG1lbnVEYXRhUmV2ZXJ0KVxyXG4gICAgICByZXR1cm4gZmV0Y2goKVxyXG4gICAgICAvLyBjb25zdCBjYXRlZ29yaWVzID0gcmVvcmRlcihkYXRhLCBmcm9tSW5kZXgsIHRvSW5kZXgpO1xyXG4gICAgICAvLyByZXR1cm4gc2V0RGF0YShjYXRlZ29yaWVzKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTVUJMSVNULUlURU1cIikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIiBvbkRyYWdFbmQgTElTVC1JVEVNXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGZyb21JbmRleClcclxuICAgICAgY29uc29sZS5sb2codG9JbmRleClcclxuICAgICAgY29uc29sZS5sb2codHlwZSlcclxuICAgICAgY29uc29sZS5sb2coaW5kZXgpXHJcbiAgICAgIGNvbnNvbGUubG9nKG1lbnVzW2luZGV4XS5tZW51X3N1YnNbZnJvbUluZGV4XSlcclxuICAgICAgY29uc29sZS5sb2cobWVudXNbaW5kZXhdLm1lbnVfc3Vic1t0b0luZGV4XSlcclxuICAgICAgY29uc3QgX2RhdGEgPSB7XHJcbiAgICAgICAgXCJtZW51X3N1Yl9pZFwiOiBtZW51c1tpbmRleF0ubWVudV9zdWJzW2Zyb21JbmRleF0ubWVudV9zdWJfaWQsXHJcbiAgICAgICAgXCJtZW51X3NlcVwiOiB0b0luZGV4LFxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG1lbnVEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5wdXQoXHJcbiAgICAgICAgJ21lbnUvcmVvcmRlci1tZW51LXN1YicsIF9kYXRhXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBfZGF0YVJldmVydCA9IHtcclxuICAgICAgICBcIm1lbnVfc3ViX2lkXCI6IG1lbnVzW2luZGV4XS5tZW51X3N1YnNbdG9JbmRleF0ubWVudV9zdWJfaWQsXHJcbiAgICAgICAgXCJtZW51X3NlcVwiOiBmcm9tSW5kZXgsXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbWVudURhdGFSZXZlcnQgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLnB1dChcclxuICAgICAgICAnbWVudS9yZW9yZGVyLW1lbnUtc3ViJywgX2RhdGFSZXZlcnRcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIGNvbnN0IHN1Ykxpc3QgPSByZW9yZGVyKGRhdGFbaW5kZXhdLnN1Ykxpc3QsIGZyb21JbmRleCwgdG9JbmRleCk7XHJcbiAgICAgIC8vIGNvbnN0IGNhdGVnb3JpZXMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgLy8gY2F0ZWdvcmllc1tpbmRleF0uc3ViTGlzdCA9IHN1Ykxpc3Q7XHJcbiAgICAgIC8vIHJldHVybiBzZXREYXRhKGNhdGVnb3JpZXMpO1xyXG4gICAgICByZXR1cm4gZmV0Y2goKVxyXG4gICAgfSBlbHNlIHJldHVybiBuZXcgRXJyb3IoXCJOT1QgQSBWQUxJRCBMSVNUXCIpO1xyXG4gIH07XHJcbiAgLypcXFxyXG4gICAgbm9kZVNlbGVjdG9yPXt9LCBEUkFHR0FCTEUgRUxFTUVOVCBJREVOVElGSUVSLCBpLmUgJ2xpJywgYW50LWxpc3QuZHJhZ2dhYmxlPlxyXG4gICAgQUxMIFNUWUxFUyBBUFBMSUVEIFRPIGxpbmVDbGFzc05hbWUgTVVTVCBCRSBPVkVSUklEREVOIFdJVEggIWltcG9ydGFudFxyXG4gICovXHJcblxyXG4gIGNvbnN0IG9uRGVsZXRlID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnREVMRVRFJylcclxuXHJcbiAgICBjb25zdCByZWdpc3RlckRhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmRlbGV0ZSgnbWVudS8nICsgZGF0YURlbGV0ZS5tZW51X2lkLCB7fSk7XHJcbiAgICBpZiAocmVnaXN0ZXJEYXRhLmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICBvcGVuTm90aWZpY2F0aW9uU3VjY2VzcygpXHJcbiAgICAgIC8vIGZldGNoT3JnYW5pemF0aW9uRGF0YSgpO1xyXG4gICAgICBzZXRWaXNpYmxlTW9kYWxEZWxldGUoZmFsc2UpXHJcbiAgICAgIGZldGNoKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvcGVuTm90aWZpY2F0aW9uRmFpbChyZWdpc3RlckRhdGEuZGF0YS5tZXNzYWdlKVxyXG5cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3Qgb25NZW51U3ViRGVsZXRlID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnREVMRVRFJylcclxuXHJcbiAgICBjb25zdCByZWdpc3RlckRhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmRlbGV0ZSgnbWVudS1zdWIvJyArIGRhdGFEZWxldGUubWVudV9zdWJfaWQsIHt9KTtcclxuICAgIGlmIChyZWdpc3RlckRhdGEuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgIG9wZW5Ob3RpZmljYXRpb25TdWNjZXNzKClcclxuICAgICAgLy8gZmV0Y2hPcmdhbml6YXRpb25EYXRhKCk7XHJcbiAgICAgIHNldFZpc2libGVNb2RhbE1lbnVTdWJEZWxldGUoZmFsc2UpXHJcbiAgICAgIGZldGNoKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvcGVuTm90aWZpY2F0aW9uRmFpbChyZWdpc3RlckRhdGEuZGF0YS5tZXNzYWdlKVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25TdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgYXBpLnN1Y2Nlc3Moe1xyXG4gICAgICBtZXNzYWdlOiBg4Lil4Lia4LiC4LmJ4Lit4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIYCxcclxuICAgICAgZGVzY3JpcHRpb246ICfguKXguJrguILguYnguK3guKHguLnguKXguKrguLPguYDguKPguYfguIgnLFxyXG4gICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuTm90aWZpY2F0aW9uRmFpbCA9IChtZXNzZ2FlKSA9PiB7XHJcbiAgICBhcGkuZXJyb3Ioe1xyXG4gICAgICBtZXNzYWdlOiBg4Lie4Lia4Lib4Lix4LiN4Lir4Liy4Lij4Liw4Lir4Lin4LmI4Liy4LiH4LiB4Liy4Lij4Lil4Lia4LiC4LmJ4Lit4Lih4Li54LilYCxcclxuICAgICAgZGVzY3JpcHRpb246IG1lc3NnYWUsXHJcbiAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhpZGVNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldFZpc2libGVNb2RhbERlbGV0ZShmYWxzZSlcclxuICB9O1xyXG5cclxuICBjb25zdCBoaWRlTWVudVN1Yk1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0VmlzaWJsZU1vZGFsTWVudVN1YkRlbGV0ZShmYWxzZSlcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93TW9kYWwgPSAoZGF0YSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2RhdGEgZGVsZXRkJylcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBzZXREYXRhRGVsZXRlKGRhdGEpXHJcbiAgICBzZXRWaXNpYmxlTW9kYWxEZWxldGUodHJ1ZSlcclxuICB9O1xyXG4gIGNvbnN0IHNob3dEZWxldE1lbnVTdWJNb2RhbCA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnZGF0YSBkZWxldGQnKVxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHNldERhdGFEZWxldGUoZGF0YSlcclxuICAgIHNldFZpc2libGVNb2RhbE1lbnVTdWJEZWxldGUodHJ1ZSlcclxuICB9O1xyXG5cclxuICBjb25zdCBvbmNsaWtFZGl0TW9kYWwgPSAodmFsdWUsIG9iaikgPT4ge1xyXG4gICAgLy8gY29tcGFyZVN5bmNcclxuICAgIGNvbnNvbGUubG9nKFwib25jbGlrRWRpdE1vZGFsXCIpXHJcbiAgICBzZXREYXRhRWRpdChvYmopXHJcbiAgICBzZXRWaXNpYmxlRWRpdE1vZGFsKHZhbHVlKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uY2xpa0VkaXRNZW51U3ViTW9kYWwgPSAodmFsdWUsIG9iaikgPT4ge1xyXG4gICAgLy8gY29tcGFyZVN5bmNcclxuICAgIHNldERhdGFFZGl0KG9iailcclxuICAgIHNldFZpc2libGVFZGl0TWVudVN1Yk1vZGFsKHZhbHVlKVxyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCBvbmNsaWtBZGRTdWJNZW51TW9kYWwgPSAodmFsdWUsIG9iaikgPT4ge1xyXG4gICAgLy8gY29tcGFyZVN5bmNcclxuICAgIGNvbnNvbGUubG9nKFwib25jbGlrRWRpdE1vZGFsXCIpXHJcbiAgICBzZXREYXRhRWRpdChvYmopXHJcbiAgICBzZXRWaXNpYmxlQWRkU3ViTWVudU1vZGFsKHZhbHVlKVxyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCBoaWRlRWRpdE1vZGFsID0gKCkgPT4ge1xyXG4gICAgLy8gc2V0VmlzaWJsZU1vZGFsRGVsZXRlKGZhbHNlKVxyXG4gICAgc2V0VmlzaWJsZUVkaXRNb2RhbChmYWxzZSlcclxuXHJcbiAgfTtcclxuICBjb25zdCBoaWRlU3ViTWVudU1vZGFsID0gKCkgPT4ge1xyXG4gICAgLy8gc2V0VmlzaWJsZU1vZGFsRGVsZXRlKGZhbHNlKVxyXG4gICAgc2V0VmlzaWJsZUFkZFN1Yk1lbnVNb2RhbChmYWxzZSlcclxuXHJcbiAgfTtcclxuICBjb25zdCBoaWRlRWRpdE1lbnVTdWJNb2RhbCA9ICgpID0+IHtcclxuICAgIC8vIHNldFZpc2libGVNb2RhbERlbGV0ZShmYWxzZSlcclxuICAgIHNldFZpc2libGVFZGl0TWVudVN1Yk1vZGFsKGZhbHNlKVxyXG5cclxuICB9O1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGU9XCJHb3Zlcm5tZW50IC0gQWRtaW4gbWFuYWdlbWVudFwiIHVybD17b3JpZ2lufSBvcmlnaW49e29yaWdpbn0gdXNlcj17bG9naW59XHJcbiAgICAgIGlzTWFpbj17dHJ1ZX1cclxuICAgICAgaW5kZXhTdWJNZW51PXtcIjJcIn1cclxuICAgICAgaW5kZXhNZW51PXtcInN1Yi0yLTFcIn1cclxuICAgICAgdGl0bGVQYWdlPXtcIuC5gOC4oeC4meC4ueC4o+C4reC4h1wifVxyXG4gICAgICBfcm91dGVzPXtbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGF0aDogJy9hZG1pbi9kYXNoYm9yYWQnLFxyXG4gICAgICAgICAgYnJlYWRjcnVtYk5hbWU6ICfguKvguJnguYnguLLguKvguKXguLHguIEnLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgICAgYnJlYWRjcnVtYk5hbWU6ICfguYDguKHguJnguLnguKPguK3guIcnLFxyXG4gICAgICAgIH1dfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtjb250ZXh0SG9sZGVyfVxyXG4gICAgICAgIDxNb2RhbEFkZE1lbnUgZmV0Y2g9e2ZldGNofSB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgIDxNb2RhbEVkaXRNZW51IF92aXNpYmxlPXt2aXNpYmxlRWRpdE1vZGFsfSBoaWRlRWRpdE1vZGFsPXtoaWRlRWRpdE1vZGFsfSBmZXRjaD17ZmV0Y2h9IHVzZXI9e3VzZXJ9IGRhdGFFZGl0PXtkYXRhRWRpdH0gLz5cclxuICAgICAgICA8TW9kYWxFZGl0TWVudVN1YiBfdmlzaWJsZT17dmlzaWJsZUVkaXRNZW51U3ViTW9kYWx9IGhpZGVNb2RhbD17aGlkZUVkaXRNZW51U3ViTW9kYWx9IGZldGNoPXtmZXRjaH0gdXNlcj17dXNlcn0gZGF0YUVkaXQ9e2RhdGFFZGl0fSAvPlxyXG4gICAgICAgIDxNb2RhbEFkZE1lbnVTdWIgX3Zpc2libGU9e3Zpc2libGVBZGRTdWJNZW51TW9kYWx9IGhpZGVNb2RhbD17aGlkZVN1Yk1lbnVNb2RhbH0gZmV0Y2g9e2ZldGNofSB1c2VyPXt1c2VyfSBkYXRhRWRpdD17ZGF0YUVkaXR9IC8+XHJcbiAgICAgICAgPFNwaW4gc3Bpbm5pbmc9e2xvYWRpbmd9PlxyXG4gICAgICAgICAgPFJlYWN0RHJhZ0xpc3RWaWV3XHJcbiAgICAgICAgICAgIG5vZGVTZWxlY3Rvcj1cIi5hbnQtbGlzdC5kcmFnZ2FibGVcIlxyXG4gICAgICAgICAgICBsaW5lQ2xhc3NOYW1lPVwiZHJhZ0xpbmVcIlxyXG4gICAgICAgICAgICBvbkRyYWdFbmQ9eyhmcm9tSW5kZXgsIHRvSW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgb25EcmFnRW5kKGZyb21JbmRleCwgdG9JbmRleCwgXCJMSVNULUlURU1cIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bWVudXMubGVuZ3RoID09IDAgJiYgPEVtcHR5IC8+fVxyXG4gICAgICAgICAgICB7bWVudXMubWFwKChvYmosIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgIGhlYWRlcj17XHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkuVGV4dCBzdHJvbmcgY2xhc3NOYW1lPVwiZ3JhYmJhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RHJhZ091dGxpbmVkIGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAge29iai5tZW51X3RpdGxlfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHkuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFnIGNvbG9yPXtvYmouaXNfc2hvdyA9PSAxID8gXCJzdWNjZXNzXCIgOiBcImRlZmF1bHRcIn0gc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxMHB4XCIsIG1hcmdpblJpZ2h0OiBcIjBweFwiIH19PntvYmouaXNfc2hvdyA9PSAxID8gXCLguYPguIrguYnguIfguLLguJlcIiA6IFwi4LmE4Lih4LmI4LmD4LiK4LmJ4LiH4Liy4LiZXCJ9PC9UYWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtbC0yXCIgdHlwZT1cImRlZmF1bHRcIiBvbkNsaWNrPXsoKSA9PiB7IG9uY2xpa0VkaXRNb2RhbCh0cnVlLCBvYmopIH19PuC5geC4geC5ieC5hOC4gjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtvYmouaGF2ZV9zdWIgPT0gMSAmJiA8QnV0dG9uIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMDU5NjY5XCIsIGNvbG9yOiBcIndoaXRlXCIsIGJvcmRlckNvbG9yOiBcIiMwNTk2NjlcIiB9fSBvbkNsaWNrPXsoKSA9PiB7IG9uY2xpa0FkZFN1Yk1lbnVNb2RhbCh0cnVlLCBvYmopIH19IGNsYXNzTmFtZT1cIm1sLTJcIiB0eXBlPVwic3VjY2Vzc1wiPuC5gOC4nuC4tOC5iOC4oeC5gOC4oeC4meC4ueC4ouC5iOC4reC4ojwvQnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1sLTJcIiB0eXBlPVwiZGFuZ2VyXCIgb25DbGljaz17KCkgPT4gc2hvd01vZGFsKG9iail9PuC4peC4mjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcmFnZ2FibGVcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxSZWFjdERyYWdMaXN0Vmlld1xyXG4gICAgICAgICAgICAgICAgICBub2RlU2VsZWN0b3I9XCIuYW50LWxpc3QtaXRlbS5kcmFnZ2FibGUtaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgIGxpbmVDbGFzc05hbWU9XCJkcmFnTGluZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uRHJhZ0VuZD17KGZyb21JbmRleCwgdG9JbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBvbkRyYWdFbmQoZnJvbUluZGV4LCB0b0luZGV4LCBcIlNVQkxJU1QtSVRFTVwiLCBpbmRleClcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7b2JqLmhhdmVfc3ViID09IDEgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICB7b2JqLm1lbnVfc3Vicy5tYXAoKGl0ZW0sIGluZGV4MikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9e2luZGV4Mn0gY2xhc3NOYW1lPVwiZHJhZ2dhYmxlLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdPdXRsaW5lZCBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhIHRpdGxlPXtpdGVtLm1lbnVfdGl0bGV9IGNsYXNzTmFtZT1cImdyYWJiYWJsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWcgY29sb3I9e2l0ZW0uaXNfc2hvdyA9PSAxID8gXCJzdWNjZXNzXCIgOiBcImRlZmF1bHRcIn0gc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxMHB4XCIsIG1hcmdpblJpZ2h0OiBcIjEwcHhcIiB9fT57aXRlbS5pc19zaG93ID09IDEgPyBcIuC5g+C4iuC5ieC4h+C4suC4mVwiIDogXCLguYTguKHguYjguYPguIrguYnguIfguLLguJlcIn08L1RhZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtci0xXCIgdHlwZT1cImRlZmF1bHRcIiBvbkNsaWNrPXsoKSA9PiB7IG9uY2xpa0VkaXRNZW51U3ViTW9kYWwodHJ1ZSwgaXRlbSkgfX0+4LmB4LiB4LmJ4LmE4LiCPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibXItMlwiIHR5cGU9XCJkYW5nZXJcIiBvbkNsaWNrPXsoKSA9PiBzaG93RGVsZXRNZW51U3ViTW9kYWwoaXRlbSl9PuC4peC4mjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0RHJhZ0xpc3RWaWV3PlxyXG4gICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgKSl9XHJcblxyXG5cclxuICAgICAgICAgIDwvUmVhY3REcmFnTGlzdFZpZXc+XHJcbiAgICAgICAgPC9TcGluPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwi4LiE4Li44LiT4LiV4LmJ4Lit4LiH4LiB4Liy4Lij4Lil4Lia4LiC4LmJ4Lit4Lih4Li54Lil4Lir4Lij4Li34Lit4LmE4Lih4LmIP1wiXHJcbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZU1vZGFsRGVsZXRlfVxyXG4gICAgICAgIG9uT2s9e29uRGVsZXRlfVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoaWRlTW9kYWx9XHJcbiAgICAgICAgb2tUZXh0PVwi4Lil4LiaXCJcclxuICAgICAgICBjYW5jZWxUZXh0PVwi4Lii4LiB4LmA4Lil4Li04LiBXCJcclxuICAgICAgICBva0J1dHRvblByb3BzPXt7XHJcbiAgICAgICAgICAndHlwZSc6IFwicHJpbWFyeVwiLFxyXG4gICAgICAgICAgJ2Rhbmdlcic6IHRydWVcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPHA+4LiE4Li44LiT4LiV4LmJ4Lit4LiH4LiB4Liy4Lij4Lil4LiaIFwie2RhdGFEZWxldGUgPyBkYXRhRGVsZXRlLm1lbnVfdGl0bGUgOiBcIlwifVwiIOC4q+C4o+C4t+C4reC5hOC4oeC5iD8gIDwvcD5cclxuXHJcbiAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIuC4hOC4uOC4k+C4leC5ieC4reC4h+C4geC4suC4o+C4peC4muC4guC5ieC4reC4oeC4ueC4peC4q+C4o+C4t+C4reC5hOC4oeC5iD9cIlxyXG4gICAgICAgIHZpc2libGU9e3Zpc2libGVNb2RhbE1lbnVTdWJEZWxldGV9XHJcbiAgICAgICAgb25Paz17b25NZW51U3ViRGVsZXRlfVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoaWRlTWVudVN1Yk1vZGFsfVxyXG4gICAgICAgIG9rVGV4dD1cIuC4peC4mlwiXHJcbiAgICAgICAgY2FuY2VsVGV4dD1cIuC4ouC4geC5gOC4peC4tOC4gVwiXHJcbiAgICAgICAgb2tCdXR0b25Qcm9wcz17e1xyXG4gICAgICAgICAgJ3R5cGUnOiBcInByaW1hcnlcIixcclxuICAgICAgICAgICdkYW5nZXInOiB0cnVlXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxwPuC4hOC4uOC4k+C4leC5ieC4reC4h+C4geC4suC4o+C4peC4miBcIntkYXRhRGVsZXRlID8gZGF0YURlbGV0ZS5tZW51X3RpdGxlIDogXCJcIn1cIiDguKvguKPguLfguK3guYTguKHguYg/ICA8L3A+XHJcblxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4vKiBnZXRTZXJ2ZXJTaWRlUHJvcHMgKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyByZXEgfSA9IGNvbnRleHQ7XHJcbiAgY29uc3QgeyBvcmlnaW4gfSA9IGFic29sdXRlVXJsKHJlcSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBvcmlnaW4sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==