webpackHotUpdate("static\\development\\pages\\admin\\management-menu\\primary-menu.js",{

/***/ "./components/managemnet/primary-menu/edit-menu.jsx":
/*!**********************************************************!*\
  !*** ./components/managemnet/primary-menu/edit-menu.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modal; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../middleware/utils */ "./middleware/utils.js");




var _jsxFileName = "D:\\govermentlt\\components\\managemnet\\primary-menu\\edit-menu.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var Option = antd__WEBPACK_IMPORTED_MODULE_3__["Select"].Option;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_3__["Input"].TextArea; // const config = require('./../../config');

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
var Text = antd__WEBPACK_IMPORTED_MODULE_3__["Typography"].Text,
    Title = antd__WEBPACK_IMPORTED_MODULE_3__["Typography"].Title;
function modal(_ref) {
  _s();

  var _this = this;

  var _visible = _ref._visible,
      hideEditModal = _ref.hideEditModal,
      fetch = _ref.fetch,
      user = _ref.user,
      dataEdit = _ref.dataEdit;
  var divRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);

  var _notification$useNoti = antd__WEBPACK_IMPORTED_MODULE_3__["notification"].useNotification(),
      _notification$useNoti2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_notification$useNoti, 2),
      api = _notification$useNoti2[0],
      contextHolder = _notification$useNoti2[1]; // const [divRef] = useRef(null);


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      visible = _useState[0],
      setVisible = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(1),
      patternMenuSelected = _useState2[0],
      setPatternMenuSelected = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      patternMenu = _useState3[0],
      setPatternMenu = _useState3[1];

  var editor = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      content = _useState4[0],
      setContent = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(1),
      active = _useState5[0],
      setActive = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      isSubMenu = _useState6[0],
      setIsSubMenu = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(true),
      isShow = _useState7[0],
      setIsShow = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([{
    name: ['intro_title'],
    value: ''
  }]),
      fields = _useState8[0],
      setFields = _useState8[1];

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_3__["Form"].useForm(),
      _Form$useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var actived = function actived() {
    active ? setActive(0) : setActive(1); // divRef.scrollIntoView({ behavior: "smooth" });
    // divRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
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
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["apiInstance"])().get('menu/pattern-menu');

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

                if (dataEdit.have_sub == 0) {
                  if (dataEdit.pattern_menu != 1) {
                    setIsShow(false);
                  } else {
                    setIsShow(true);
                  }
                } else {
                  setIsShow(false);
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
                "have_sub": isSubMenu ? 1 : 0,
                "is_show": active ? 1 : 0,
                "is_primary_menu": 1,
                "is_pattern_menu": value.pattern_menu == 1 ? 0 : 1,
                "pattern_menu": patternMenuSelected
              };
              console.log(data);
              _context3.next = 4;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["apiInstance"])().put('/menu/' + (dataEdit ? dataEdit.menu_id : 0), data);

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

    if (dataEdit.have_sub == 0) {
      if (dataEdit.pattern_menu != 1) {
        setIsShow(false);
      } else {
        setIsShow(true);
      }
    } else {
      setIsShow(false);
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

    if (!isSubMenu) {
      if (value != 1) {
        // setIsSubMenu(1)
        // setISPatternMenu(true)
        setIsShow(false);
      } else {
        // setIsSubMenu(0)
        // setISPatternMenu(false)
        setIsShow(true);
      }
    } // setMenu(value);

  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, contextHolder, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    title: "แก้ไขเมนูหลัก " + (!dataEdit ? "" : dataEdit.menu_title),
    className: "mt-4",
    centered: true,
    visible: _visible // onOk={() => onOK()}
    ,
    onCancel: function onCancel() {
      hideEditModal();
      setActive(dataEdit.is_show);
      setIsSubMenu(dataEdit.have_sub); // form.resetFields();
    },
    width: 1000,
    footer: null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    name: "basic",
    layout: "vertical",
    onFinish: onSubmitHandler,
    requiredMark: true,
    form: form,
    fields: fields,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "menu_title",
    label: "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E19\u0E39\u0E2B\u0E25\u0E31\u0E01",
    className: "block text-gray-700 text-sm font-bold mb-2 w-2/3",
    style: {
      "float": "left"
    },
    rules: [{
      required: true,
      message: 'กรุณากรอกชื่อเมนูหลัก'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    id: "#",
    type: "text",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E19\u0E39",
    className: "resize-none border rounded-md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 25
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    className: "flex mt-6 mb-0 w1/3",
    style: {
      marginBottom: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "text-center lg:text-right w-full lg:w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 29
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
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
      lineNumber: 251,
      columnNumber: 33
    }
  }, __jsx(Text, {
    className: "text-custom-black ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 37
    }
  }, "\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E17")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"] // type="primary"
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
      lineNumber: 268,
      columnNumber: 33
    }
  }, __jsx(Text, {
    className: "text-custom-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 37
    }
  }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "pattern_menu",
    label: "\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E40\u0E21\u0E19\u0E39",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    defaultValue: 1,
    className: "w-full",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 25
    }
  }, patternMenu ? patternMenu.map(function (object) {
    return __jsx(Option, {
      value: object.pattern_menu_id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 40
      }
    }, object.pattern_title, "  ");
  }) : "")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    className: "flex mt-6 mb-0",
    style: {
      marginBottom: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "inline-flex text-left lg:w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 29
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 33
    }
  }, __jsx("li", {
    className: "inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 37
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
    checked: active,
    onClick: actived,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "mx-2 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 41
    }
  }, "\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25")), __jsx("li", {
    className: "inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 37
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
    checked: isSubMenu,
    onClick: function onClick(value) {
      setIsSubMenu(value ? 1 : 0);

      if (patternMenuSelected == 1) {
        setIsShow(value ? false : true);
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "mx-2 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 41
    }
  }, "\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07 \u0E40\u0E21\u0E19\u0E39\u0E22\u0E48\u0E2D\u0E22")))))), isShow == true && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
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
      lineNumber: 324,
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
      lineNumber: 336,
      columnNumber: 29
    }
  })))), __jsx("div", {
    style: {
      "float": "left",
      clear: "both"
    },
    ref: divRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 17
    }
  })));
}

_s(modal, "3MrDowG9PRNvSrI2gyJ90xI7e7k=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_3__["notification"].useNotification, antd__WEBPACK_IMPORTED_MODULE_3__["Form"].useForm];
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hbmFnZW1uZXQvcHJpbWFyeS1tZW51L2VkaXQtbWVudS5qc3giXSwibmFtZXMiOlsiT3B0aW9uIiwiU2VsZWN0IiwiVGV4dEFyZWEiLCJJbnB1dCIsImNvbmZpZyIsInJlcXVpcmUiLCJKb2RpdEVkaXRvciIsImR5bmFtaWMiLCJzc3IiLCJUZXh0IiwiVHlwb2dyYXBoeSIsIlRpdGxlIiwibW9kYWwiLCJfdmlzaWJsZSIsImhpZGVFZGl0TW9kYWwiLCJmZXRjaCIsInVzZXIiLCJkYXRhRWRpdCIsImRpdlJlZiIsInVzZVJlZiIsIm5vdGlmaWNhdGlvbiIsInVzZU5vdGlmaWNhdGlvbiIsImFwaSIsImNvbnRleHRIb2xkZXIiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwicGF0dGVybk1lbnVTZWxlY3RlZCIsInNldFBhdHRlcm5NZW51U2VsZWN0ZWQiLCJwYXR0ZXJuTWVudSIsInNldFBhdHRlcm5NZW51IiwiZWRpdG9yIiwiY29udGVudCIsInNldENvbnRlbnQiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJpc1N1Yk1lbnUiLCJzZXRJc1N1Yk1lbnUiLCJpc1Nob3ciLCJzZXRJc1Nob3ciLCJuYW1lIiwidmFsdWUiLCJmaWVsZHMiLCJzZXRGaWVsZHMiLCJGb3JtIiwidXNlRm9ybSIsImZvcm0iLCJhY3RpdmVkIiwidXNlRWZmZWN0IiwiZmV0Y2hQYXR0ZXJuIiwiZmV0Y2hFZGl0RGF0YSIsImFwaUluc3RhbmNlIiwiZ2V0IiwibWVudURhdGEiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInJlc3VsdHMiLCJpc19zaG93IiwiaGF2ZV9zdWIiLCJwYXR0ZXJuX21lbnUiLCJtZW51X3RpdGxlIiwibWVudV9kZXRhaWwiLCJvblN1Ym1pdEhhbmRsZXIiLCJwdXQiLCJtZW51X2lkIiwicmVnaXN0ZXJEYXRhIiwic3RhdHVzIiwib3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MiLCJvcGVuTm90aWZpY2F0aW9uRmFpbCIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZGVzY3JpcHRpb24iLCJwbGFjZW1lbnQiLCJtZXNzZ2FlIiwiZXJyb3IiLCJvblJlc2V0IiwiaGFuZGxlQ2hhbmdlIiwicmVxdWlyZWQiLCJtYXJnaW5Cb3R0b20iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJjb2xvciIsIm1hcCIsIm9iamVjdCIsInBhdHRlcm5fbWVudV9pZCIsInBhdHRlcm5fdGl0bGUiLCJuZXdDb250ZW50IiwiY2xlYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBUUEsTUFBUixHQUFtQkMsMkNBQW5CLENBQVFELE1BQVI7QUFDQSxJQUFRRSxRQUFSLEdBQXFCQywwQ0FBckIsQ0FBUUQsUUFBUixDLENBQ0E7O0FBQ0EsSUFBTUUsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDREQUFELENBQXRCOztBQUNBLElBQU1DLFdBQVcsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sd0pBQU47QUFBQSxDQUFELEVBQThCO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUFoQixvRUFBZ0I7QUFBQTtBQUFBLGNBQWhCLGFBQWdCO0FBQUE7QUFBQSxDQUE5QixDQUEzQjtNQUFNRixXO0FBQ04sSUFBUUcsSUFBUixHQUF3QkMsK0NBQXhCLENBQVFELElBQVI7QUFBQSxJQUFjRSxLQUFkLEdBQXdCRCwrQ0FBeEIsQ0FBY0MsS0FBZDtBQUNlLFNBQVNDLEtBQVQsT0FBbUU7QUFBQTs7QUFBQTs7QUFBQSxNQUFsREMsUUFBa0QsUUFBbERBLFFBQWtEO0FBQUEsTUFBeENDLGFBQXdDLFFBQXhDQSxhQUF3QztBQUFBLE1BQXpCQyxLQUF5QixRQUF6QkEsS0FBeUI7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQzlF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QUV2QyxNQURUO0FBRUksU0FBSyxFQUFFQyxPQUZYO0FBR0ksVUFBTSxFQUFFNUIsTUFBTSxDQUFDQSxNQUFQLENBQWNZLElBQWQsQ0FIWjtBQUlJLFVBQU0sRUFBRSxPQUpaO0FBS0ksWUFBUSxFQUFFLENBTGQsQ0FLaUI7QUFMakI7QUFNSSxVQUFNLEVBQUUsZ0JBQUEwRSxVQUFVO0FBQUEsYUFBSXpELFVBQVUsQ0FBQ3lELFVBQUQsQ0FBZDtBQUFBLEtBTnRCLENBTWtEO0FBTmxEO0FBT0ksWUFBUSxFQUFFLGtCQUFBQSxVQUFVLEVBQUksQ0FBRyxDQVAvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkosQ0FEZSxDQXZHdkIsQ0FoQkosRUFvSkk7QUFBSyxTQUFLLEVBQUU7QUFBRSxlQUFPLE1BQVQ7QUFBaUJDLFdBQUssRUFBRTtBQUF4QixLQUFaO0FBQ0ksT0FBRyxFQUFFekUsTUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEpKLENBSkosQ0FESjtBQWdLSDs7R0E1VnVCTixLO1VBRVNRLGlEQUFZLENBQUNDLGUsRUFpQjNCdUIseUNBQUksQ0FBQ0MsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWRtaW5cXG1hbmFnZW1lbnQtbWVudVxccHJpbWFyeS1tZW51LmpzLjI0YmU4OWMyNWU3YTVmNWQ0NWNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0LCBNb2RhbCwgbm90aWZpY2F0aW9uLCBTZWxlY3QsIFN3aXRjaCwgVHlwb2dyYXBoeSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBhcGlJbnN0YW5jZSB9IGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvdXRpbHMnO1xyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuLy8gY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi8uLi8uLi9jb25maWcnKTtcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vLi4vLi4vcGFnZXMvYWRtaW4vY29uZmlnJyk7XHJcbmNvbnN0IEpvZGl0RWRpdG9yID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJqb2RpdC1yZWFjdFwiKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5jb25zdCB7IFRleHQsIFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbCh7IF92aXNpYmxlLCBoaWRlRWRpdE1vZGFsLCBmZXRjaCwgdXNlciwgZGF0YUVkaXQgfSkge1xyXG4gICAgbGV0IGRpdlJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFthcGksIGNvbnRleHRIb2xkZXJdID0gbm90aWZpY2F0aW9uLnVzZU5vdGlmaWNhdGlvbigpO1xyXG4gICAgLy8gY29uc3QgW2RpdlJlZl0gPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcGF0dGVybk1lbnVTZWxlY3RlZCwgc2V0UGF0dGVybk1lbnVTZWxlY3RlZF0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgICBjb25zdCBbcGF0dGVybk1lbnUsIHNldFBhdHRlcm5NZW51XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IGVkaXRvciA9IHVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMSlcclxuICAgIGNvbnN0IFtpc1N1Yk1lbnUsIHNldElzU3ViTWVudV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW2lzU2hvdywgc2V0SXNTaG93XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2ZpZWxkcywgc2V0RmllbGRzXSA9IHVzZVN0YXRlKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFsnaW50cm9fdGl0bGUnXSxcclxuICAgICAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdKTtcclxuICAgIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG4gICAgY29uc3QgYWN0aXZlZCA9ICgpID0+IHtcclxuICAgICAgICBhY3RpdmUgPyBzZXRBY3RpdmUoMCkgOiBzZXRBY3RpdmUoMSk7XHJcbiAgICAgICAgLy8gZGl2UmVmLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgICAgICAgLy8gZGl2UmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICB9O1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRWaXNpYmxlKF92aXNpYmxlKVxyXG4gICAgICAgIGZldGNoUGF0dGVybigpXHJcbiAgICAgICAgZmV0Y2hFZGl0RGF0YSgpXHJcbiAgICB9LCBbZGF0YUVkaXRdKVxyXG5cclxuICAgIGNvbnN0IGZldGNoUGF0dGVybiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBtZW51RGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAgICAgICAnbWVudS9wYXR0ZXJuLW1lbnUnXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtZW51RGF0YSlcclxuICAgICAgICBzZXRQYXR0ZXJuTWVudShtZW51RGF0YS5kYXRhLnJlc3VsdHMpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmV0Y2hFZGl0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAoZGF0YUVkaXQpIHtcclxuICAgICAgICAgICAgc2V0QWN0aXZlKGRhdGFFZGl0LmlzX3Nob3cpXHJcbiAgICAgICAgICAgIHNldElzU3ViTWVudShkYXRhRWRpdC5oYXZlX3N1YilcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhRWRpdCB1c2VFZmZlY3RcIilcclxuICAgICAgICAgICAgc2V0UGF0dGVybk1lbnVTZWxlY3RlZChkYXRhRWRpdC5wYXR0ZXJuX21lbnUpXHJcbiAgICAgICAgICAgIGlmIChkYXRhRWRpdC5oYXZlX3N1YiA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YUVkaXQucGF0dGVybl9tZW51ICE9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJc1Nob3coZmFsc2UpXHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJc1Nob3codHJ1ZSlcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1Nob3coZmFsc2UpXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgc2V0RmllbGRzKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBbJ21lbnVfdGl0bGUnXSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKCFkYXRhRWRpdCA/IFwiXCIgOiBkYXRhRWRpdC5tZW51X3RpdGxlKSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogWydwYXR0ZXJuX21lbnUnXSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKCFkYXRhRWRpdCA/IFwiXCIgOiBkYXRhRWRpdC5wYXR0ZXJuX21lbnUpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBbJ21lbnVfZGV0YWlsJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICghZGF0YUVkaXQgPyBcIlwiIDogZGF0YUVkaXQubWVudV9kZXRhaWwpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0SGFuZGxlciA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG5cclxuXHJcbiAgICAgICAgLy8gb3JnYW5pemF0aW9uX2lkOiBvcmdhbml6YXRpb25faWQsXHJcbiAgICAgICAgLy8gbWVudV90aXRsZTogbWVudV90aXRsZSxcclxuICAgICAgICAvLyBtZW51X2RldGFpbDogbWVudV9kZXRhaWwsXHJcbiAgICAgICAgLy8gbWVudV9zZXE6IG1lbnVfc2VxLFxyXG4gICAgICAgIC8vIGhhdmVfc3ViOiBoYXZlX3N1YixcclxuICAgICAgICAvLyBpc19zaG93OiBpc19zaG93LFxyXG4gICAgICAgIC8vIGlzX3ByaW1hcnlfbWVudTogaXNfcHJpbWFyeV9tZW51LFxyXG4gICAgICAgIC8vIGlzX3BhdHRlcm5fbWVudTogaXNfcGF0dGVybl9tZW51LFxyXG4gICAgICAgIC8vIHBhdHRlcm5fbWVudTogcGF0dGVybl9tZW51LFxyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBcIm1lbnVfdGl0bGVcIjogdmFsdWUubWVudV90aXRsZSxcclxuICAgICAgICAgICAgXCJtZW51X2RldGFpbFwiOiBjb250ZW50ID8gdmFsdWUubWVudV9kZXRhaWwgOiBcIlwiLFxyXG4gICAgICAgICAgICAvLyBcIm1lbnVfc2VxXCI6IDAsXHJcbiAgICAgICAgICAgIFwiaGF2ZV9zdWJcIjogaXNTdWJNZW51ID8gMSA6IDAsXHJcbiAgICAgICAgICAgIFwiaXNfc2hvd1wiOiBhY3RpdmUgPyAxIDogMCxcclxuICAgICAgICAgICAgXCJpc19wcmltYXJ5X21lbnVcIjogMSxcclxuICAgICAgICAgICAgXCJpc19wYXR0ZXJuX21lbnVcIjogdmFsdWUucGF0dGVybl9tZW51ID09IDEgPyAwIDogMSxcclxuICAgICAgICAgICAgXCJwYXR0ZXJuX21lbnVcIjogcGF0dGVybk1lbnVTZWxlY3RlZCxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICBjb25zdCByZWdpc3RlckRhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLnB1dCgnL21lbnUvJyArIChkYXRhRWRpdCA/IGRhdGFFZGl0Lm1lbnVfaWQgOiAwKSwgZGF0YSk7XHJcbiAgICAgICAgaWYgKHJlZ2lzdGVyRGF0YS5kYXRhLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgb3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9wZW5Ob3RpZmljYXRpb25GYWlsKHJlZ2lzdGVyRGF0YS5kYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPTiBPS1wiKVxyXG4gICAgICAgIC8vIHNldFZpc2libGUoZmFsc2UpXHJcbiAgICAgICAgLy8gb25SZXNldCgpXHJcbiAgICAgICAgZmV0Y2goKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25TdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgIGFwaS5zdWNjZXNzKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogYOC4muC4seC4meC4l+C4tuC4geC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iGAsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn4Lia4Lix4LiZ4LiX4Li24LiB4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIJyxcclxuICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvcGVuTm90aWZpY2F0aW9uRmFpbCA9IChtZXNzZ2FlKSA9PiB7XHJcbiAgICAgICAgYXBpLmVycm9yKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogYOC4nuC4muC4m+C4seC4jeC4q+C4suC4o+C4sOC4q+C4p+C5iOC4suC4h+C4geC4suC4o+C4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4pWAsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBtZXNzZ2FlLFxyXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdCBvblJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEFjdGl2ZShkYXRhRWRpdC5pc19zaG93KVxyXG4gICAgICAgIHNldElzU3ViTWVudShkYXRhRWRpdC5oYXZlX3N1YilcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRhdGFFZGl0IHVzZUVmZmVjdFwiKVxyXG4gICAgICAgIHNldFBhdHRlcm5NZW51U2VsZWN0ZWQoZGF0YUVkaXQucGF0dGVybl9tZW51KVxyXG4gICAgICAgIGlmIChkYXRhRWRpdC5oYXZlX3N1YiA9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhRWRpdC5wYXR0ZXJuX21lbnUgIT0gMSkge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNTaG93KGZhbHNlKVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldElzU2hvdyh0cnVlKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldElzU2hvdyhmYWxzZSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgc2V0RmllbGRzKFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogWydtZW51X3RpdGxlJ10sXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogKCFkYXRhRWRpdCA/IFwiXCIgOiBkYXRhRWRpdC5tZW51X3RpdGxlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogWydwYXR0ZXJuX21lbnUnXSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAoIWRhdGFFZGl0ID8gXCJcIiA6IGRhdGFFZGl0LnBhdHRlcm5fbWVudSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFsnbWVudV9kZXRhaWwnXSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAoIWRhdGFFZGl0ID8gXCJcIiA6IGRhdGFFZGl0Lm1lbnVfZGV0YWlsKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWQgJHt2YWx1ZX1gKTtcclxuICAgICAgICBzZXRQYXR0ZXJuTWVudVNlbGVjdGVkKHZhbHVlKVxyXG4gICAgICAgIGlmICghaXNTdWJNZW51KSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzZXRJc1N1Yk1lbnUoMSlcclxuICAgICAgICAgICAgICAgIC8vIHNldElTUGF0dGVybk1lbnUodHJ1ZSlcclxuICAgICAgICAgICAgICAgIHNldElzU2hvdyhmYWxzZSlcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzZXRJc1N1Yk1lbnUoMClcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBzZXRJU1BhdHRlcm5NZW51KGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgc2V0SXNTaG93KHRydWUpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNldE1lbnUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2NvbnRleHRIb2xkZXJ9XHJcblxyXG5cclxuICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17XCLguYHguIHguYnguYTguILguYDguKHguJnguLnguKvguKXguLHguIEgXCIgKyAoIWRhdGFFZGl0ID8gXCJcIiA6IGRhdGFFZGl0Lm1lbnVfdGl0bGUpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJlZFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZT17X3Zpc2libGV9XHJcbiAgICAgICAgICAgICAgICAvLyBvbk9rPXsoKSA9PiBvbk9LKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVFZGl0TW9kYWwoKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZShkYXRhRWRpdC5pc19zaG93KVxyXG4gICAgICAgICAgICAgICAgICAgIHNldElzU3ViTWVudShkYXRhRWRpdC5oYXZlX3N1YilcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb3JtLnJlc2V0RmllbGRzKCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezEwMDB9XHJcbiAgICAgICAgICAgICAgICBmb290ZXI9e251bGx9XHJcbiAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uRmluaXNoPXtvblN1Ym1pdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRNYXJrPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzPXtmaWVsZHN9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVudV90aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi4LiK4Li34LmI4Lit4LmA4Lih4LiZ4Li54Lir4Lil4Lix4LiBXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctMi8zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6IFwibGVmdFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC5gOC4oeC4meC4ueC4q+C4peC4seC4gScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguIrguLfguYjguK3guYDguKHguJnguLlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gY2xhc3NOYW1lPVwiZmxleCBtdC02IG1iLTAgdzEvM1wiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGwgbXQtNlwiID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGxnOnRleHQtcmlnaHQgdy1mdWxsIGxnOnctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0MyQ0ZFMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDMkNGRTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwcHggIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHctZnVsbCBsZzp3LTEvNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbS1ibGFjayBcIj7guKPguLXguYDguIvguYfguJc8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDU5NjY5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzA1OTY2OScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzBweCAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUgIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdy1mdWxsIGxnOnctMS80XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRleHQtY3VzdG9tLXdoaXRlIFwiPuC4muC4seC4meC4l+C4tuC4gTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXR0ZXJuX21lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuC4o+C4ueC4m+C5geC4muC4muC5gOC4oeC4meC4uVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8T3B0aW9uIHZhbHVlPVwiMFwiPuC4geC4s+C4q+C4meC4lOC5gOC4reC4hzwvT3B0aW9uPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXR0ZXJuTWVudSA/IHBhdHRlcm5NZW51Lm1hcCgob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxPcHRpb24gdmFsdWU9e29iamVjdC5wYXR0ZXJuX21lbnVfaWR9PntvYmplY3QucGF0dGVybl90aXRsZX0gIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGNsYXNzTmFtZT1cImZsZXggbXQtNiBtYi0wXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCB0ZXh0LWxlZnQgbGc6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpbmxpbmUtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXthY3RpdmV9IG9uQ2xpY2s9e2FjdGl2ZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteC0yIHRleHQtc21cIj7guIHguLLguKPguYHguKrguJTguIfguJzguKU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpbmxpbmUtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXtpc1N1Yk1lbnV9IG9uQ2xpY2s9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzU3ViTWVudSh2YWx1ZSA/IDEgOiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXR0ZXJuTWVudVNlbGVjdGVkID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNTaG93KHZhbHVlID8gZmFsc2UgOiB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteC0yIHRleHQtc21cIj7guJXguYnguK3guIfguIHguLLguKPguKrguKPguYnguLLguIcg4LmA4Lih4LiZ4Li54Lii4LmI4Lit4LiiPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzU2hvdyA9PSB0cnVlICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZW51X2RldGFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuC4o+C4suC4ouC4peC4sOC5gOC4reC4teC4ouC4lCA6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguKPguLLguKLguKXguLDguYDguK3guLXguKLguJQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Sm9kaXRFZGl0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2VkaXRvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWc9e2NvbmZpZy5jb25maWcodXNlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjcwMHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9IC8vIHRhYkluZGV4IG9mIHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtuZXdDb250ZW50ID0+IHNldENvbnRlbnQobmV3Q29udGVudCl9IC8vIHByZWZlcnJlZCB0byB1c2Ugb25seSB0aGlzIG9wdGlvbiB0byB1cGRhdGUgdGhlIGNvbnRlbnQgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17bmV3Q29udGVudCA9PiB7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC8+fVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogXCJsZWZ0XCIsIGNsZWFyOiBcImJvdGhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17ZGl2UmVmfT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==