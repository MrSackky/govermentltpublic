webpackHotUpdate("static\\development\\pages\\admin\\management-menu\\secoundary-menu.js",{

/***/ "./components/managemnet/primary-menu/edit-menu-sub.jsx":
/*!**************************************************************!*\
  !*** ./components/managemnet/primary-menu/edit-menu-sub.jsx ***!
  \**************************************************************/
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




var _jsxFileName = "D:\\govermentlt\\components\\managemnet\\primary-menu\\edit-menu-sub.jsx",
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
      hideModal = _ref.hideModal,
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
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["apiInstance"])().put('/menu-sub/' + (dataEdit ? dataEdit.menu_sub_id : 0), data);

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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, contextHolder, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    title: "แก้ไขเมนูย่อย " + (!dataEdit ? "" : dataEdit.menu_title),
    className: "mt-4",
    centered: true,
    visible: _visible // onOk={() => onOK()}
    ,
    onCancel: function onCancel() {
      hideModal();
      setActive(dataEdit.is_show); // setIsSubMenu(0)
      // form.resetFields();
    },
    width: 1000,
    footer: null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
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
      lineNumber: 209,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "menu_title",
    label: "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E19\u0E39\u0E22\u0E48\u0E2D\u0E22",
    className: "block text-gray-700 text-sm font-bold mb-2 w-2/3",
    style: {
      "float": "left"
    },
    rules: [{
      required: true,
      message: 'กรุณากรอกชื่อเมนูย่อย'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    id: "#",
    type: "text",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E19\u0E39\u0E22\u0E48\u0E2D\u0E22",
    className: "resize-none border rounded-md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 25
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    className: "flex mt-6 mb-0 w-1/3",
    style: {
      marginBottom: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "text-center lg:text-right w-full lg:w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
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
      lineNumber: 241,
      columnNumber: 33
    }
  }, __jsx(Text, {
    className: "text-custom-black ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
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
      lineNumber: 258,
      columnNumber: 33
    }
  }, __jsx(Text, {
    className: "text-custom-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 37
    }
  }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "pattern_menu",
    label: "\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E40\u0E21\u0E19\u0E39\u0E22\u0E48\u0E2D\u0E22",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    defaultValue: 1,
    className: "w-full",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 25
    }
  }, patternMenu ? patternMenu.map(function (object) {
    return __jsx(Option, {
      value: object.pattern_menu_id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
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
      lineNumber: 292,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "inline-flex text-left lg:w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 29
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 33
    }
  }, __jsx("li", {
    className: "inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 37
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
    checked: active,
    onClick: actived,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "mx-2 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 41
    }
  }, "\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25")))))), isShow == true && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
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
      lineNumber: 314,
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
      lineNumber: 326,
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
      lineNumber: 342,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hbmFnZW1uZXQvcHJpbWFyeS1tZW51L2VkaXQtbWVudS1zdWIuanN4Il0sIm5hbWVzIjpbIk9wdGlvbiIsIlNlbGVjdCIsIlRleHRBcmVhIiwiSW5wdXQiLCJjb25maWciLCJyZXF1aXJlIiwiSm9kaXRFZGl0b3IiLCJkeW5hbWljIiwic3NyIiwiVGV4dCIsIlR5cG9ncmFwaHkiLCJUaXRsZSIsIm1vZGFsIiwiX3Zpc2libGUiLCJoaWRlTW9kYWwiLCJmZXRjaCIsInVzZXIiLCJkYXRhRWRpdCIsImRpdlJlZiIsInVzZVJlZiIsIm5vdGlmaWNhdGlvbiIsInVzZU5vdGlmaWNhdGlvbiIsImFwaSIsImNvbnRleHRIb2xkZXIiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwicGF0dGVybk1lbnVTZWxlY3RlZCIsInNldFBhdHRlcm5NZW51U2VsZWN0ZWQiLCJwYXR0ZXJuTWVudSIsInNldFBhdHRlcm5NZW51IiwiZWRpdG9yIiwiY29udGVudCIsInNldENvbnRlbnQiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJpc1N1Yk1lbnUiLCJzZXRJc1N1Yk1lbnUiLCJpc1Nob3ciLCJzZXRJc1Nob3ciLCJuYW1lIiwidmFsdWUiLCJmaWVsZHMiLCJzZXRGaWVsZHMiLCJGb3JtIiwidXNlRm9ybSIsImZvcm0iLCJhY3RpdmVkIiwidXNlRWZmZWN0IiwiZmV0Y2hQYXR0ZXJuIiwiZmV0Y2hFZGl0RGF0YSIsImFwaUluc3RhbmNlIiwiZ2V0IiwibWVudURhdGEiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInJlc3VsdHMiLCJpc19zaG93IiwiaGF2ZV9zdWIiLCJwYXR0ZXJuX21lbnUiLCJtZW51X3RpdGxlIiwibWVudV9kZXRhaWwiLCJvblN1Ym1pdEhhbmRsZXIiLCJwdXQiLCJtZW51X3N1Yl9pZCIsInJlZ2lzdGVyRGF0YSIsInN0YXR1cyIsIm9wZW5Ob3RpZmljYXRpb25TdWNjZXNzIiwib3Blbk5vdGlmaWNhdGlvbkZhaWwiLCJtZXNzYWdlIiwic3VjY2VzcyIsImRlc2NyaXB0aW9uIiwicGxhY2VtZW50IiwibWVzc2dhZSIsImVycm9yIiwib25SZXNldCIsImhhbmRsZUNoYW5nZSIsInJlcXVpcmVkIiwibWFyZ2luQm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJtYXAiLCJvYmplY3QiLCJwYXR0ZXJuX21lbnVfaWQiLCJwYXR0ZXJuX3RpdGxlIiwibmV3Q29udGVudCIsImNsZWFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQVFBLE1BQVIsR0FBbUJDLDJDQUFuQixDQUFRRCxNQUFSO0FBQ0EsSUFBUUUsUUFBUixHQUFxQkMsMENBQXJCLENBQVFELFFBQVIsQyxDQUNBOztBQUNBLElBQU1FLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyw0REFBRCxDQUF0Qjs7QUFDQSxJQUFNQyxXQUFXLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLHdKQUFOO0FBQUEsQ0FBRCxFQUE4QjtBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUE7QUFBQSxrQ0FBaEIsb0VBQWdCO0FBQUE7QUFBQSxjQUFoQixhQUFnQjtBQUFBO0FBQUEsQ0FBOUIsQ0FBM0I7TUFBTUYsVztBQUNOLElBQVFHLElBQVIsR0FBd0JDLCtDQUF4QixDQUFRRCxJQUFSO0FBQUEsSUFBY0UsS0FBZCxHQUF3QkQsK0NBQXhCLENBQWNDLEtBQWQ7QUFDZSxTQUFTQyxLQUFULE9BQStEO0FBQUE7O0FBQUE7O0FBQUEsTUFBOUNDLFFBQThDLFFBQTlDQSxRQUE4QztBQUFBLE1BQXBDQyxTQUFvQyxRQUFwQ0EsU0FBb0M7QUFBQSxNQUF6QkMsS0FBeUIsUUFBekJBLEtBQXlCO0FBQUEsTUFBbEJDLElBQWtCLFFBQWxCQSxJQUFrQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtB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LFNBQUssRUFBQyxnRUFGVjtBQUdJLGFBQVMsRUFBQyxtREFIZDtBQUlJLFdBQU8sRUFBRSxLQUpiO0FBS0ksU0FBSyxFQUFFLENBQ0g7QUFDSXdDLGNBQVEsRUFBRSxJQURkO0FBRUlSLGFBQU8sRUFBRTtBQUZiLEtBREcsQ0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWUksTUFBQyxXQUFEO0FBQ0ksT0FBRyxFQUFFdkMsTUFEVDtBQUVJLFNBQUssRUFBRUMsT0FGWDtBQUdJLFVBQU0sRUFBRTVCLE1BQU0sQ0FBQ0EsTUFBUCxDQUFjWSxJQUFkLENBSFo7QUFJSSxVQUFNLEVBQUUsT0FKWjtBQUtJLFlBQVEsRUFBRSxDQUxkLENBS2lCO0FBTGpCO0FBTUksVUFBTSxFQUFFLGdCQUFBMEUsVUFBVTtBQUFBLGFBQUl6RCxVQUFVLENBQUN5RCxVQUFELENBQWQ7QUFBQSxLQU50QixDQU1rRDtBQU5sRDtBQU9JLFlBQVEsRUFBRSxrQkFBQUEsVUFBVSxFQUFJLENBQUcsQ0FQL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpKLENBRGUsQ0F4R3ZCLENBaEJKLEVBcUpJO0FBQUssU0FBSyxFQUFFO0FBQUUsZUFBTyxNQUFUO0FBQWlCQyxXQUFLLEVBQUU7QUFBeEIsS0FBWjtBQUNJLE9BQUcsRUFBRXpFLE1BRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJKSixDQUZKLENBREo7QUErSkg7O0dBbFZ1Qk4sSztVQUVTUSxpREFBWSxDQUFDQyxlLEVBaUIzQnVCLHlDQUFJLENBQUNDLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFkbWluXFxtYW5hZ2VtZW50LW1lbnVcXHNlY291bmRhcnktbWVudS5qcy5jYTFmOTAxYWZiNTgyZjQ2ZGViMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCwgTW9kYWwsIG5vdGlmaWNhdGlvbiwgU2VsZWN0LCBTd2l0Y2gsIFR5cG9ncmFwaHkgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYXBpSW5zdGFuY2UgfSBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL3V0aWxzJztcclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcbi8vIGNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4vLi4vLi4vY29uZmlnJyk7XHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4uLy4uLy4uL3BhZ2VzL2FkbWluL2NvbmZpZycpO1xyXG5jb25zdCBKb2RpdEVkaXRvciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiam9kaXQtcmVhY3RcIiksIHsgc3NyOiBmYWxzZSB9KTtcclxuY29uc3QgeyBUZXh0LCBUaXRsZSB9ID0gVHlwb2dyYXBoeTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWwoeyBfdmlzaWJsZSwgaGlkZU1vZGFsLCBmZXRjaCwgdXNlciwgZGF0YUVkaXQgfSkge1xyXG4gICAgbGV0IGRpdlJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFthcGksIGNvbnRleHRIb2xkZXJdID0gbm90aWZpY2F0aW9uLnVzZU5vdGlmaWNhdGlvbigpO1xyXG4gICAgLy8gY29uc3QgW2RpdlJlZl0gPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcGF0dGVybk1lbnVTZWxlY3RlZCwgc2V0UGF0dGVybk1lbnVTZWxlY3RlZF0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgICBjb25zdCBbcGF0dGVybk1lbnUsIHNldFBhdHRlcm5NZW51XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IGVkaXRvciA9IHVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMSlcclxuICAgIGNvbnN0IFtpc1N1Yk1lbnUsIHNldElzU3ViTWVudV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW2lzU2hvdywgc2V0SXNTaG93XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2ZpZWxkcywgc2V0RmllbGRzXSA9IHVzZVN0YXRlKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFsnaW50cm9fdGl0bGUnXSxcclxuICAgICAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdKTtcclxuICAgIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG4gICAgY29uc3QgYWN0aXZlZCA9ICgpID0+IHtcclxuICAgICAgICBhY3RpdmUgPyBzZXRBY3RpdmUoMCkgOiBzZXRBY3RpdmUoMSk7XHJcbiAgICAgICAgLy8gZGl2UmVmLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgICAgICAgLy8gZGl2UmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICB9O1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRWaXNpYmxlKF92aXNpYmxlKVxyXG4gICAgICAgIGZldGNoUGF0dGVybigpXHJcbiAgICAgICAgZmV0Y2hFZGl0RGF0YSgpXHJcbiAgICB9LCBbZGF0YUVkaXRdKVxyXG5cclxuICAgIGNvbnN0IGZldGNoUGF0dGVybiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBtZW51RGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAgICAgICAnbWVudS9wYXR0ZXJuLW1lbnUnXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtZW51RGF0YSlcclxuICAgICAgICBzZXRQYXR0ZXJuTWVudShtZW51RGF0YS5kYXRhLnJlc3VsdHMpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmV0Y2hFZGl0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAoZGF0YUVkaXQpIHtcclxuICAgICAgICAgICAgc2V0QWN0aXZlKGRhdGFFZGl0LmlzX3Nob3cpXHJcbiAgICAgICAgICAgIHNldElzU3ViTWVudShkYXRhRWRpdC5oYXZlX3N1YilcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhRWRpdCB1c2VFZmZlY3RcIilcclxuICAgICAgICAgICAgc2V0UGF0dGVybk1lbnVTZWxlY3RlZChkYXRhRWRpdC5wYXR0ZXJuX21lbnUpXHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YUVkaXQucGF0dGVybl9tZW51ICE9IDEpIHtcclxuICAgICAgICAgICAgICAgIHNldElzU2hvdyhmYWxzZSlcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1Nob3codHJ1ZSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgc2V0RmllbGRzKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBbJ21lbnVfdGl0bGUnXSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKCFkYXRhRWRpdCA/IFwiXCIgOiBkYXRhRWRpdC5tZW51X3RpdGxlKSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogWydwYXR0ZXJuX21lbnUnXSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKCFkYXRhRWRpdCA/IFwiXCIgOiBkYXRhRWRpdC5wYXR0ZXJuX21lbnUpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBbJ21lbnVfZGV0YWlsJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICghZGF0YUVkaXQgPyBcIlwiIDogZGF0YUVkaXQubWVudV9kZXRhaWwpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0SGFuZGxlciA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG5cclxuXHJcbiAgICAgICAgLy8gb3JnYW5pemF0aW9uX2lkOiBvcmdhbml6YXRpb25faWQsXHJcbiAgICAgICAgLy8gbWVudV90aXRsZTogbWVudV90aXRsZSxcclxuICAgICAgICAvLyBtZW51X2RldGFpbDogbWVudV9kZXRhaWwsXHJcbiAgICAgICAgLy8gbWVudV9zZXE6IG1lbnVfc2VxLFxyXG4gICAgICAgIC8vIGhhdmVfc3ViOiBoYXZlX3N1YixcclxuICAgICAgICAvLyBpc19zaG93OiBpc19zaG93LFxyXG4gICAgICAgIC8vIGlzX3ByaW1hcnlfbWVudTogaXNfcHJpbWFyeV9tZW51LFxyXG4gICAgICAgIC8vIGlzX3BhdHRlcm5fbWVudTogaXNfcGF0dGVybl9tZW51LFxyXG4gICAgICAgIC8vIHBhdHRlcm5fbWVudTogcGF0dGVybl9tZW51LFxyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBcIm1lbnVfdGl0bGVcIjogdmFsdWUubWVudV90aXRsZSxcclxuICAgICAgICAgICAgXCJtZW51X2RldGFpbFwiOiBjb250ZW50ID8gdmFsdWUubWVudV9kZXRhaWwgOiBcIlwiLFxyXG4gICAgICAgICAgICAvLyBcIm1lbnVfc2VxXCI6IDAsXHJcbiAgICAgICAgICAgIFwiaXNfc2hvd1wiOiBhY3RpdmUgPyAxIDogMCxcclxuICAgICAgICAgICAgXCJpc19wYXR0ZXJuX21lbnVcIjogdmFsdWUucGF0dGVybl9tZW51ID09IDEgPyAwIDogMSxcclxuICAgICAgICAgICAgXCJwYXR0ZXJuX21lbnVcIjogcGF0dGVybk1lbnVTZWxlY3RlZCxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICBjb25zdCByZWdpc3RlckRhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLnB1dCgnL21lbnUtc3ViLycgKyAoZGF0YUVkaXQgPyBkYXRhRWRpdC5tZW51X3N1Yl9pZCA6IDApLCBkYXRhKTtcclxuICAgICAgICBpZiAocmVnaXN0ZXJEYXRhLmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICBvcGVuTm90aWZpY2F0aW9uU3VjY2VzcygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3Blbk5vdGlmaWNhdGlvbkZhaWwocmVnaXN0ZXJEYXRhLmRhdGEubWVzc2FnZSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9OIE9LXCIpXHJcbiAgICAgICAgLy8gc2V0VmlzaWJsZShmYWxzZSlcclxuICAgICAgICAvLyBvblJlc2V0KClcclxuICAgICAgICBmZXRjaCgpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgYXBpLnN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBg4Lia4Lix4LiZ4LiX4Li24LiB4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIYCxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICfguJrguLHguJnguJfguLbguIHguKHguLnguKXguKrguLPguYDguKPguYfguIgnLFxyXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25GYWlsID0gKG1lc3NnYWUpID0+IHtcclxuICAgICAgICBhcGkuZXJyb3Ioe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBg4Lie4Lia4Lib4Lix4LiN4Lir4Liy4Lij4Liw4Lir4Lin4LmI4Liy4LiH4LiB4Liy4Lij4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54LilYCxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IG1lc3NnYWUsXHJcbiAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IG9uUmVzZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QWN0aXZlKGRhdGFFZGl0LmlzX3Nob3cpXHJcbiAgICAgICAgc2V0SXNTdWJNZW51KGRhdGFFZGl0LmhhdmVfc3ViKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YUVkaXQgdXNlRWZmZWN0XCIpXHJcbiAgICAgICAgc2V0UGF0dGVybk1lbnVTZWxlY3RlZChkYXRhRWRpdC5wYXR0ZXJuX21lbnUpXHJcblxyXG4gICAgICAgIGlmIChkYXRhRWRpdC5wYXR0ZXJuX21lbnUgIT0gMSkge1xyXG4gICAgICAgICAgICBzZXRJc1Nob3coZmFsc2UpXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldElzU2hvdyh0cnVlKVxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgc2V0RmllbGRzKFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogWydtZW51X3RpdGxlJ10sXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogKCFkYXRhRWRpdCA/IFwiXCIgOiBkYXRhRWRpdC5tZW51X3RpdGxlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogWydwYXR0ZXJuX21lbnUnXSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAoIWRhdGFFZGl0ID8gXCJcIiA6IGRhdGFFZGl0LnBhdHRlcm5fbWVudSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFsnbWVudV9kZXRhaWwnXSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAoIWRhdGFFZGl0ID8gXCJcIiA6IGRhdGFFZGl0Lm1lbnVfZGV0YWlsKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWQgJHt2YWx1ZX1gKTtcclxuICAgICAgICBzZXRQYXR0ZXJuTWVudVNlbGVjdGVkKHZhbHVlKVxyXG5cclxuICAgICAgICBpZiAodmFsdWUgIT0gMSkge1xyXG4gICAgICAgICAgICAvLyBzZXRJc1N1Yk1lbnUoMSlcclxuICAgICAgICAgICAgLy8gc2V0SVNQYXR0ZXJuTWVudSh0cnVlKVxyXG4gICAgICAgICAgICBzZXRJc1Nob3coZmFsc2UpXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHNldElzU3ViTWVudSgwKVxyXG5cclxuICAgICAgICAgICAgLy8gc2V0SVNQYXR0ZXJuTWVudShmYWxzZSlcclxuICAgICAgICAgICAgc2V0SXNTaG93KHRydWUpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzZXRNZW51KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtjb250ZXh0SG9sZGVyfVxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtcIuC5geC4geC5ieC5hOC4guC5gOC4oeC4meC4ueC4ouC5iOC4reC4oiBcIiArICghZGF0YUVkaXQgPyBcIlwiIDogZGF0YUVkaXQubWVudV90aXRsZSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICAgICAgICAgIGNlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlPXtfdmlzaWJsZX1cclxuICAgICAgICAgICAgICAgIC8vIG9uT2s9eygpID0+IG9uT0soKX1cclxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZU1vZGFsKClcclxuICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmUoZGF0YUVkaXQuaXNfc2hvdylcclxuICAgICAgICAgICAgICAgICAgICAvLyBzZXRJc1N1Yk1lbnUoMClcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb3JtLnJlc2V0RmllbGRzKCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezEwMDB9XHJcbiAgICAgICAgICAgICAgICBmb290ZXI9e251bGx9XHJcbiAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uRmluaXNoPXtvblN1Ym1pdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRNYXJrPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzPXtmaWVsZHN9XHJcbiAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lbnVfdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuC4iuC4t+C5iOC4reC5gOC4oeC4meC4ueC4ouC5iOC4reC4olwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LTIvM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZsb2F0OiBcImxlZnRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guYDguKHguJnguLnguKLguYjguK3guKInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiK4Li34LmI4Lit4LmA4Lih4LiZ4Li54Lii4LmI4Lit4LiiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGNsYXNzTmFtZT1cImZsZXggbXQtNiBtYi0wIHctMS8zXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbCBtdC02XCIgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbGc6dGV4dC1yaWdodCB3LWZ1bGwgbGc6dy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVzZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjQzJDRkUwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0MyQ0ZFMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzBweCAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUgIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdy1mdWxsIGxnOnctMS80XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRleHQtY3VzdG9tLWJsYWNrIFwiPuC4o+C4teC5gOC4i+C5h+C4lzwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwNTk2NjknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMDU5NjY5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMHB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSB3LWZ1bGwgbGc6dy0xLzRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGV4dC1jdXN0b20td2hpdGUgXCI+4Lia4Lix4LiZ4LiX4Li24LiBPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhdHRlcm5fbWVudVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi4Lij4Li54Lib4LmB4Lia4Lia4LmA4Lih4LiZ4Li54Lii4LmI4Lit4LiiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxPcHRpb24gdmFsdWU9XCIwXCI+4LiB4Liz4Lir4LiZ4LiU4LmA4Lit4LiHPC9PcHRpb24+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhdHRlcm5NZW51ID8gcGF0dGVybk1lbnUubWFwKChvYmplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE9wdGlvbiB2YWx1ZT17b2JqZWN0LnBhdHRlcm5fbWVudV9pZH0+e29iamVjdC5wYXR0ZXJuX3RpdGxlfSAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gY2xhc3NOYW1lPVwiZmxleCBtdC02IG1iLTBcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IHRleHQtbGVmdCBsZzp3LTEvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImlubGluZS1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoIGNoZWNrZWQ9e2FjdGl2ZX0gb25DbGljaz17YWN0aXZlZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm14LTIgdGV4dC1zbVwiPuC4geC4suC4o+C5geC4quC4lOC4h+C4nOC4pTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9XCJpbmxpbmUtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXtpc1N1Yk1lbnV9IG9uQ2xpY2s9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzU3ViTWVudSh2YWx1ZSA/IDEgOiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXR0ZXJuTWVudVNlbGVjdGVkID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNTaG93KHZhbHVlID8gZmFsc2UgOiB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteC0yIHRleHQtc21cIj7guJXguYnguK3guIfguIHguLLguKPguKrguKPguYnguLLguIcg4LmA4Lih4LiZ4Li54Lii4LmI4Lit4LiiPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc1Nob3cgPT0gdHJ1ZSAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVudV9kZXRhaWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLguKPguLLguKLguKXguLDguYDguK3guLXguKLguJQgOlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4Lij4Liy4Lii4Lil4Liw4LmA4Lit4Li14Lii4LiUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEpvZGl0RWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtlZGl0b3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnPXtjb25maWcuY29uZmlnKHVzZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17XCI3MDBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsxfSAvLyB0YWJJbmRleCBvZiB0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17bmV3Q29udGVudCA9PiBzZXRDb250ZW50KG5ld0NvbnRlbnQpfSAvLyBwcmVmZXJyZWQgdG8gdXNlIG9ubHkgdGhpcyBvcHRpb24gdG8gdXBkYXRlIHRoZSBjb250ZW50IGZvciBwZXJmb3JtYW5jZSByZWFzb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e25ld0NvbnRlbnQgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvPn1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6IFwibGVmdFwiLCBjbGVhcjogXCJib3RoXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e2RpdlJlZn0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=