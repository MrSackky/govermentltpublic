webpackHotUpdate("static\\development\\pages\\admin\\management-menu\\secoundary-menu.js",{

/***/ "./components/managemnet/primary-menu/add-menu-sub.jsx":
/*!*************************************************************!*\
  !*** ./components/managemnet/primary-menu/add-menu-sub.jsx ***!
  \*************************************************************/
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




var _jsxFileName = "D:\\govermentlt\\components\\managemnet\\primary-menu\\add-menu-sub.jsx",
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

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isPatternMenu = _useState7[0],
      setISPatternMenu = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      isShow = _useState8[0],
      setIsShow = _useState8[1];

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_6__["Form"].useForm(),
      _Form$useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var actived = function actived() {
    active ? setActive(0) : setActive(1); // divRef.scrollIntoView({ behavior: "smooth" });
    // divRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    fetchPattern();
  }, []);

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

  var onSubmitHandler = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(value) {
      var data, registerData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
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
                "menu_id": dataEdit.menu_id,
                "menu_title": value.menu_title,
                "menu_detail": content ? value.menu_detail : "",
                "menu_seq": 999999,
                "is_show": active ? 1 : 0,
                "is_pattern_menu": value.pattern_menu == 1 ? 0 : 1,
                "pattern_menu": patternMenuSelected
              };
              console.log(data);
              _context2.next = 4;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["apiInstance"])().post('/menu/menu-sub', data);

            case 4:
              registerData = _context2.sent;

              if (registerData.data.status == 200) {
                openNotificationSuccess();
              } else {
                openNotificationFail(registerData.data.message);
              }

              console.log("ON OK");
              hideModal();
              onReset();
              fetch();

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onSubmitHandler(_x) {
      return _ref3.apply(this, arguments);
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
    setActive(1);
    setIsSubMenu(0);
    setISPatternMenu(false);
    setPatternMenuSelected(1);
    setIsShow(true);
    form.resetFields();
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, contextHolder, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    title: "เพิ่มเมนูย่อยของเมนูห" + (!dataEdit ? "" : dataEdit.menu_title),
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
      lineNumber: 138,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"], {
    name: "basic",
    layout: "vertical",
    onFinish: onSubmitHandler,
    requiredMark: true,
    form: form,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    name: "menu_title",
    label: "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E19\u0E39",
    style: {
      "float": "left"
    },
    className: "block text-gray-700 text-sm font-bold mb-2 w-2/3",
    rules: [{
      required: true,
      message: 'กรุณากรอกชื่อเมนู'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
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
      lineNumber: 173,
      columnNumber: 25
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    className: "flex mt-6 mb-0 w-1/3",
    style: {
      marginBottom: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "text-center lg:text-right w-full lg:w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
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
      lineNumber: 184,
      columnNumber: 33
    }
  }, __jsx(Text, {
    className: "text-custom-black ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
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
      lineNumber: 201,
      columnNumber: 33
    }
  }, __jsx(Text, {
    className: "text-custom-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 37
    }
  }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    name: "pattern_menu",
    label: "\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E40\u0E21\u0E19\u0E39",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Select"], {
    defaultValue: 1,
    className: "w-full",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 25
    }
  }, patternMenu ? patternMenu.map(function (object) {
    return __jsx(Option, {
      value: object.pattern_menu_id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
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
      lineNumber: 236,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "inline-flex text-left lg:w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 29
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 33
    }
  }, __jsx("li", {
    className: "inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 37
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
    checked: active,
    onClick: actived,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "mx-2 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
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
      lineNumber: 249,
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
      lineNumber: 261,
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
      lineNumber: 277,
      columnNumber: 17
    }
  })));
}

_s(modal, "TGjbJ2ASsl9N4mbS/VYW4IDPyUQ=", false, function () {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hbmFnZW1uZXQvcHJpbWFyeS1tZW51L2FkZC1tZW51LXN1Yi5qc3giXSwibmFtZXMiOlsiT3B0aW9uIiwiU2VsZWN0IiwiVGV4dEFyZWEiLCJJbnB1dCIsImNvbmZpZyIsInJlcXVpcmUiLCJKb2RpdEVkaXRvciIsImR5bmFtaWMiLCJzc3IiLCJUZXh0IiwiVHlwb2dyYXBoeSIsIlRpdGxlIiwibW9kYWwiLCJfdmlzaWJsZSIsImhpZGVNb2RhbCIsImZldGNoIiwidXNlciIsImRhdGFFZGl0IiwiZGl2UmVmIiwidXNlUmVmIiwibm90aWZpY2F0aW9uIiwidXNlTm90aWZpY2F0aW9uIiwiYXBpIiwiY29udGV4dEhvbGRlciIsInVzZVN0YXRlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJwYXR0ZXJuTWVudVNlbGVjdGVkIiwic2V0UGF0dGVybk1lbnVTZWxlY3RlZCIsInBhdHRlcm5NZW51Iiwic2V0UGF0dGVybk1lbnUiLCJlZGl0b3IiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImlzU3ViTWVudSIsInNldElzU3ViTWVudSIsImlzUGF0dGVybk1lbnUiLCJzZXRJU1BhdHRlcm5NZW51IiwiaXNTaG93Iiwic2V0SXNTaG93IiwiRm9ybSIsInVzZUZvcm0iLCJmb3JtIiwiYWN0aXZlZCIsInVzZUVmZmVjdCIsImZldGNoUGF0dGVybiIsImFwaUluc3RhbmNlIiwiZ2V0IiwibWVudURhdGEiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInJlc3VsdHMiLCJvblN1Ym1pdEhhbmRsZXIiLCJ2YWx1ZSIsIm1lbnVfaWQiLCJtZW51X3RpdGxlIiwibWVudV9kZXRhaWwiLCJwYXR0ZXJuX21lbnUiLCJwb3N0IiwicmVnaXN0ZXJEYXRhIiwic3RhdHVzIiwib3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MiLCJvcGVuTm90aWZpY2F0aW9uRmFpbCIsIm1lc3NhZ2UiLCJvblJlc2V0Iiwic3VjY2VzcyIsImRlc2NyaXB0aW9uIiwicGxhY2VtZW50IiwibWVzc2dhZSIsImVycm9yIiwicmVzZXRGaWVsZHMiLCJoYW5kbGVDaGFuZ2UiLCJyZXF1aXJlZCIsIm1hcmdpbkJvdHRvbSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW5SaWdodCIsImNvbG9yIiwibWFwIiwib2JqZWN0IiwicGF0dGVybl9tZW51X2lkIiwicGF0dGVybl90aXRsZSIsIm5ld0NvbnRlbnQiLCJjbGVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQVFBLE1BQVIsR0FBbUJDLDJDQUFuQixDQUFRRCxNQUFSO0FBQ0EsSUFBUUUsUUFBUixHQUFxQkMsMENBQXJCLENBQVFELFFBQVIsQyxDQUNBOztBQUNBLElBQU1FLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyw0REFBRCxDQUF0Qjs7QUFDQTtBQUNBLElBQU1DLFdBQVcsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sd0pBQU47QUFBQSxDQUFELEVBQThCO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUFoQixvRUFBZ0I7QUFBQTtBQUFBLGNBQWhCLGFBQWdCO0FBQUE7QUFBQSxDQUE5QixDQUEzQjtNQUFNRixXO0FBQ04sSUFBUUcsSUFBUixHQUF3QkMsK0NBQXhCLENBQVFELElBQVI7QUFBQSxJQUFjRSxLQUFkLEdBQXdCRCwrQ0FBeEIsQ0FBY0MsS0FBZDtBQUNlLFNBQVNDLEtBQVQsT0FBK0Q7QUFBQTs7QUFBQTs7QUFBQSxNQUE5Q0MsUUFBOEMsUUFBOUNBLFFBQThDO0FBQUEsTUFBcENDLFNBQW9DLFFBQXBDQSxTQUFvQztBQUFBLE1BQXpCQyxLQUF5QixRQUF6QkEsS0FBeUI7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQzFFLE1BQUlDLE1B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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaSixDQURlLENBOUZ2QixDQWhCSixFQTJJSTtBQUFLLFNBQUssRUFBRTtBQUFFLGVBQU8sTUFBVDtBQUFpQkMsV0FBSyxFQUFFO0FBQXhCLEtBQVo7QUFDSSxPQUFHLEVBQUV0RSxNQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzSUosQ0FISixDQURKO0FBc0pIOztHQWhSdUJOLEs7VUFFU1EsaURBQVksQ0FBQ0MsZSxFQVkzQnFCLHlDQUFJLENBQUNDLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFkbWluXFxtYW5hZ2VtZW50LW1lbnVcXHNlY291bmRhcnktbWVudS5qcy44ZjdlMDJmYzMyMjljNDdhNjhhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24sIEZvcm0sIElucHV0LCBTd2l0Y2gsIFR5cG9ncmFwaHksIFNlbGVjdCwgbm90aWZpY2F0aW9uIH0gZnJvbSAnYW50ZCc7XHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG4vLyBjb25zdCBjb25maWcgPSByZXF1aXJlKCcuLy4uLy4uL2NvbmZpZycpO1xyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi8uLi8uLi9wYWdlcy9hZG1pbi9jb25maWcnKTtcclxuaW1wb3J0IHsgYWJzb2x1dGVVcmwsIGNoZWNrSXNMb2dpbiwgYXBpSW5zdGFuY2UsIGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUgfSBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL3V0aWxzJztcclxuY29uc3QgSm9kaXRFZGl0b3IgPSBkeW5hbWljKCgpID0+IGltcG9ydChcImpvZGl0LXJlYWN0XCIpLCB7IHNzcjogZmFsc2UgfSk7XHJcbmNvbnN0IHsgVGV4dCwgVGl0bGUgfSA9IFR5cG9ncmFwaHk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsKHsgX3Zpc2libGUsIGhpZGVNb2RhbCwgZmV0Y2gsIHVzZXIsIGRhdGFFZGl0IH0pIHtcclxuICAgIGxldCBkaXZSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbYXBpLCBjb250ZXh0SG9sZGVyXSA9IG5vdGlmaWNhdGlvbi51c2VOb3RpZmljYXRpb24oKTtcclxuICAgIC8vIGNvbnN0IFtkaXZSZWZdID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3BhdHRlcm5NZW51U2VsZWN0ZWQsIHNldFBhdHRlcm5NZW51U2VsZWN0ZWRdID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gICAgY29uc3QgW3BhdHRlcm5NZW51LCBzZXRQYXR0ZXJuTWVudV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBlZGl0b3IgPSB1c2VSZWYobnVsbClcclxuICAgIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDEpXHJcbiAgICBjb25zdCBbaXNTdWJNZW51LCBzZXRJc1N1Yk1lbnVdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtpc1BhdHRlcm5NZW51LCBzZXRJU1BhdHRlcm5NZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc1Nob3csIHNldElzU2hvd10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG4gICAgY29uc3QgYWN0aXZlZCA9ICgpID0+IHtcclxuICAgICAgICBhY3RpdmUgPyBzZXRBY3RpdmUoMCkgOiBzZXRBY3RpdmUoMSk7XHJcbiAgICAgICAgLy8gZGl2UmVmLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgICAgICAgLy8gZGl2UmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICB9O1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaFBhdHRlcm4oKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgZmV0Y2hQYXR0ZXJuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lbnVEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICAgICAgICdtZW51L3BhdHRlcm4tbWVudSdcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1lbnVEYXRhKVxyXG4gICAgICAgIHNldFBhdHRlcm5NZW51KG1lbnVEYXRhLmRhdGEucmVzdWx0cylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSBhc3luYyAodmFsdWUpID0+IHtcclxuXHJcblxyXG4gICAgICAgIC8vIG9yZ2FuaXphdGlvbl9pZDogb3JnYW5pemF0aW9uX2lkLFxyXG4gICAgICAgIC8vIG1lbnVfdGl0bGU6IG1lbnVfdGl0bGUsXHJcbiAgICAgICAgLy8gbWVudV9kZXRhaWw6IG1lbnVfZGV0YWlsLFxyXG4gICAgICAgIC8vIG1lbnVfc2VxOiBtZW51X3NlcSxcclxuICAgICAgICAvLyBoYXZlX3N1YjogaGF2ZV9zdWIsXHJcbiAgICAgICAgLy8gaXNfc2hvdzogaXNfc2hvdyxcclxuICAgICAgICAvLyBpc19wcmltYXJ5X21lbnU6IGlzX3ByaW1hcnlfbWVudSxcclxuICAgICAgICAvLyBpc19wYXR0ZXJuX21lbnU6IGlzX3BhdHRlcm5fbWVudSxcclxuICAgICAgICAvLyBwYXR0ZXJuX21lbnU6IHBhdHRlcm5fbWVudSxcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgXCJtZW51X2lkXCI6IGRhdGFFZGl0Lm1lbnVfaWQsXHJcbiAgICAgICAgICAgIFwibWVudV90aXRsZVwiOiB2YWx1ZS5tZW51X3RpdGxlLFxyXG4gICAgICAgICAgICBcIm1lbnVfZGV0YWlsXCI6IGNvbnRlbnQgPyB2YWx1ZS5tZW51X2RldGFpbCA6IFwiXCIsXHJcbiAgICAgICAgICAgIFwibWVudV9zZXFcIjogOTk5OTk5LFxyXG4gICAgICAgICAgICBcImlzX3Nob3dcIjogYWN0aXZlID8gMSA6IDAsXHJcbiAgICAgICAgICAgIFwiaXNfcGF0dGVybl9tZW51XCI6IHZhbHVlLnBhdHRlcm5fbWVudSA9PSAxID8gMCA6IDEsXHJcbiAgICAgICAgICAgIFwicGF0dGVybl9tZW51XCI6IHBhdHRlcm5NZW51U2VsZWN0ZWQsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5wb3N0KCcvbWVudS9tZW51LXN1YicsIGRhdGEpO1xyXG4gICAgICAgIGlmIChyZWdpc3RlckRhdGEuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIG9wZW5Ob3RpZmljYXRpb25TdWNjZXNzKClcclxuXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9wZW5Ob3RpZmljYXRpb25GYWlsKHJlZ2lzdGVyRGF0YS5kYXRhLm1lc3NhZ2UpXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT04gT0tcIilcclxuXHJcbiAgICAgICAgaGlkZU1vZGFsKClcclxuICAgICAgICBvblJlc2V0KClcclxuICAgICAgICBmZXRjaCgpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgYXBpLnN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBg4Lia4Lix4LiZ4LiX4Li24LiB4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIYCxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICfguJrguLHguJnguJfguLbguIHguKHguLnguKXguKrguLPguYDguKPguYfguIgnLFxyXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25GYWlsID0gKG1lc3NnYWUpID0+IHtcclxuICAgICAgICBhcGkuZXJyb3Ioe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBg4Lie4Lia4Lib4Lix4LiN4Lir4Liy4Lij4Liw4Lir4Lin4LmI4Liy4LiH4LiB4Liy4Lij4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54LilYCxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IG1lc3NnYWUsXHJcbiAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IG9uUmVzZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QWN0aXZlKDEpXHJcbiAgICAgICAgc2V0SXNTdWJNZW51KDApXHJcbiAgICAgICAgc2V0SVNQYXR0ZXJuTWVudShmYWxzZSlcclxuICAgICAgICBzZXRQYXR0ZXJuTWVudVNlbGVjdGVkKDEpXHJcbiAgICAgICAgc2V0SXNTaG93KHRydWUpXHJcbiAgICAgICAgZm9ybS5yZXNldEZpZWxkcygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWQgJHt2YWx1ZX1gKTtcclxuICAgICAgICBzZXRQYXR0ZXJuTWVudVNlbGVjdGVkKHZhbHVlKVxyXG4gICAgICAgIGlmICghaXNTdWJNZW51KSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzZXRJc1N1Yk1lbnUoMSlcclxuICAgICAgICAgICAgICAgIC8vIHNldElTUGF0dGVybk1lbnUodHJ1ZSlcclxuICAgICAgICAgICAgICAgIHNldElzU2hvdyhmYWxzZSlcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzZXRJc1N1Yk1lbnUoMClcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBzZXRJU1BhdHRlcm5NZW51KGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgc2V0SXNTaG93KHRydWUpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzZXRNZW51KHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG5cclxuICAgICAgICAgICAge2NvbnRleHRIb2xkZXJ9XHJcbiAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e1wi4LmA4Lie4Li04LmI4Lih4LmA4Lih4LiZ4Li54Lii4LmI4Lit4Lii4LiC4Lit4LiH4LmA4Lih4LiZ4Li54LirXCIgKyAoIWRhdGFFZGl0ID8gXCJcIiA6IGRhdGFFZGl0Lm1lbnVfdGl0bGUpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJlZFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZT17X3Zpc2libGV9XHJcbiAgICAgICAgICAgICAgICAvLyBvbk9rPXsoKSA9PiBvbk9LKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVNb2RhbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlKDEpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNTdWJNZW51KDApXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXNldEZpZWxkcygpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsxMDAwfVxyXG4gICAgICAgICAgICAgICAgZm9vdGVyPXtudWxsfVxyXG4gICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkZpbmlzaD17b25TdWJtaXRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkTWFyaz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lbnVfdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuC4iuC4t+C5iOC4reC5gOC4oeC4meC4uVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZsb2F0OiBcImxlZnRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy0yLzNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guYDguKHguJnguLknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiK4Li34LmI4Lit4LmA4Lih4LiZ4Li5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGNsYXNzTmFtZT1cImZsZXggbXQtNiBtYi0wIHctMS8zXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbCBtdC02XCIgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbGc6dGV4dC1yaWdodCB3LWZ1bGwgbGc6dy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVzZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjQzJDRkUwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0MyQ0ZFMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzBweCAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUgIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdy1mdWxsIGxnOnctMS80XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRleHQtY3VzdG9tLWJsYWNrIFwiPuC4o+C4teC5gOC4i+C5h+C4lzwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwNTk2NjknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMDU5NjY5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMHB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSB3LWZ1bGwgbGc6dy0xLzRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGV4dC1jdXN0b20td2hpdGUgXCI+4Lia4Lix4LiZ4LiX4Li24LiBPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXR0ZXJuX21lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuC4o+C4ueC4m+C5geC4muC4muC5gOC4oeC4meC4uVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8T3B0aW9uIHZhbHVlPVwiMFwiPuC4geC4s+C4q+C4meC4lOC5gOC4reC4hzwvT3B0aW9uPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXR0ZXJuTWVudSA/IHBhdHRlcm5NZW51Lm1hcCgob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxPcHRpb24gdmFsdWU9e29iamVjdC5wYXR0ZXJuX21lbnVfaWR9PntvYmplY3QucGF0dGVybl90aXRsZX0gIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGNsYXNzTmFtZT1cImZsZXggbXQtNiBtYi0wXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCB0ZXh0LWxlZnQgbGc6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpbmxpbmUtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXthY3RpdmV9IG9uQ2xpY2s9e2FjdGl2ZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteC0yIHRleHQtc21cIj7guIHguLLguKPguYHguKrguJTguIfguJzguKU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICB7aXNTaG93ID09IHRydWUgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lbnVfZGV0YWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi4Lij4Liy4Lii4Lil4Liw4LmA4Lit4Li14Lii4LiUIDpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4o+C4suC4ouC4peC4sOC5gOC4reC4teC4ouC4lCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxKb2RpdEVkaXRvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZWRpdG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZz17Y29uZmlnLmNvbmZpZyh1c2VyKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiNzAwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MX0gLy8gdGFiSW5kZXggb2YgdGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e25ld0NvbnRlbnQgPT4gc2V0Q29udGVudChuZXdDb250ZW50KX0gLy8gcHJlZmVycmVkIHRvIHVzZSBvbmx5IHRoaXMgb3B0aW9uIHRvIHVwZGF0ZSB0aGUgY29udGVudCBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtuZXdDb250ZW50ID0+IHsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Lz59XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiBcImxlZnRcIiwgY2xlYXI6IFwiYm90aFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtkaXZSZWZ9PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9