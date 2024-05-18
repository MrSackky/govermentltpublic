webpackHotUpdate("static\\development\\pages\\admin\\management-menu\\secoundary-menu.js",{

/***/ "./components/managemnet/secondary-menu/add-menu-sub.jsx":
/*!***************************************************************!*\
  !*** ./components/managemnet/secondary-menu/add-menu-sub.jsx ***!
  \***************************************************************/
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




var _jsxFileName = "D:\\govermentlt\\components\\managemnet\\secondary-menu\\add-menu-sub.jsx",
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
    title: "เพิ่มเมนูย่อยของเมนูรอง " + (!dataEdit ? "" : dataEdit.menu_title),
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
    label: "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E19\u0E39\u0E22\u0E48\u0E2D\u0E22",
    style: {
      "float": "left"
    },
    className: "block text-gray-700 text-sm font-bold mb-2 w-2/3",
    rules: [{
      required: true,
      message: 'กรุณากรอกชื่อเมนูย่อย'
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
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E19\u0E39\u0E22\u0E48\u0E2D\u0E22",
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
    label: "\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E40\u0E21\u0E19\u0E39\u0E22\u0E48\u0E2D\u0E22",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hbmFnZW1uZXQvc2Vjb25kYXJ5LW1lbnUvYWRkLW1lbnUtc3ViLmpzeCJdLCJuYW1lcyI6WyJPcHRpb24iLCJTZWxlY3QiLCJUZXh0QXJlYSIsIklucHV0IiwiY29uZmlnIiwicmVxdWlyZSIsIkpvZGl0RWRpdG9yIiwiZHluYW1pYyIsInNzciIsIlRleHQiLCJUeXBvZ3JhcGh5IiwiVGl0bGUiLCJtb2RhbCIsIl92aXNpYmxlIiwiaGlkZU1vZGFsIiwiZmV0Y2giLCJ1c2VyIiwiZGF0YUVkaXQiLCJkaXZSZWYiLCJ1c2VSZWYiLCJub3RpZmljYXRpb24iLCJ1c2VOb3RpZmljYXRpb24iLCJhcGkiLCJjb250ZXh0SG9sZGVyIiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInBhdHRlcm5NZW51U2VsZWN0ZWQiLCJzZXRQYXR0ZXJuTWVudVNlbGVjdGVkIiwicGF0dGVybk1lbnUiLCJzZXRQYXR0ZXJuTWVudSIsImVkaXRvciIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiaXNTdWJNZW51Iiwic2V0SXNTdWJNZW51IiwiaXNQYXR0ZXJuTWVudSIsInNldElTUGF0dGVybk1lbnUiLCJpc1Nob3ciLCJzZXRJc1Nob3ciLCJGb3JtIiwidXNlRm9ybSIsImZvcm0iLCJhY3RpdmVkIiwidXNlRWZmZWN0IiwiZmV0Y2hQYXR0ZXJuIiwiYXBpSW5zdGFuY2UiLCJnZXQiLCJtZW51RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwicmVzdWx0cyIsIm9uU3VibWl0SGFuZGxlciIsInZhbHVlIiwibWVudV9pZCIsIm1lbnVfdGl0bGUiLCJtZW51X2RldGFpbCIsInBhdHRlcm5fbWVudSIsInBvc3QiLCJyZWdpc3RlckRhdGEiLCJzdGF0dXMiLCJvcGVuTm90aWZpY2F0aW9uU3VjY2VzcyIsIm9wZW5Ob3RpZmljYXRpb25GYWlsIiwibWVzc2FnZSIsIm9uUmVzZXQiLCJzdWNjZXNzIiwiZGVzY3JpcHRpb24iLCJwbGFjZW1lbnQiLCJtZXNzZ2FlIiwiZXJyb3IiLCJyZXNldEZpZWxkcyIsImhhbmRsZUNoYW5nZSIsInJlcXVpcmVkIiwibWFyZ2luQm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJtYXAiLCJvYmplY3QiLCJwYXR0ZXJuX21lbnVfaWQiLCJwYXR0ZXJuX3RpdGxlIiwibmV3Q29udGVudCIsImNsZWFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBUUEsTUFBUixHQUFtQkMsMkNBQW5CLENBQVFELE1BQVI7QUFDQSxJQUFRRSxRQUFSLEdBQXFCQywwQ0FBckIsQ0FBUUQsUUFBUixDLENBQ0E7O0FBQ0EsSUFBTUUsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDREQUFELENBQXRCOztBQUNBO0FBQ0EsSUFBTUMsV0FBVyxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSx3SkFBTjtBQUFBLENBQUQsRUFBOEI7QUFBRUMsS0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBO0FBQUEsa0NBQWhCLG9FQUFnQjtBQUFBO0FBQUEsY0FBaEIsYUFBZ0I7QUFBQTtBQUFBLENBQTlCLENBQTNCO01BQU1GLFc7QUFDTixJQUFRRyxJQUFSLEdBQXdCQywrQ0FBeEIsQ0FBUUQsSUFBUjtBQUFBLElBQWNFLEtBQWQsR0FBd0JELCtDQUF4QixDQUFjQyxLQUFkO0FBQ2UsU0FBU0MsS0FBVCxPQUErRDtBQUFBOztBQUFBOztBQUFBLE1BQTlDQyxRQUE4QyxRQUE5Q0EsUUFBOEM7QUFBQSxNQUFwQ0MsU0FBb0MsUUFBcENBLFNBQW9DO0FBQUEsTUFBekJDLEtBQXlCLFFBQXpCQSxLQUF5QjtBQUFBLE1BQWxCQyxJQUFrQixRQUFsQkEsSUFBa0I7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDMUUsTUFBSUMs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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpKLENBRGUsQ0E5RnZCLENBaEJKLEVBMklJO0FBQUssU0FBSyxFQUFFO0FBQUUsZUFBTyxNQUFUO0FBQWlCQyxXQUFLLEVBQUU7QUFBeEIsS0FBWjtBQUNJLE9BQUcsRUFBRXRFLE1BRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNJSixDQUhKLENBREo7QUFzSkg7O0dBaFJ1Qk4sSztVQUVTUSxpREFBWSxDQUFDQyxlLEVBWTNCcUIseUNBQUksQ0FBQ0MsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWRtaW5cXG1hbmFnZW1lbnQtbWVudVxcc2Vjb3VuZGFyeS1tZW51LmpzLmJkNzljYzYzYmUzYWVjZTA0NzljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiwgRm9ybSwgSW5wdXQsIFN3aXRjaCwgVHlwb2dyYXBoeSwgU2VsZWN0LCBub3RpZmljYXRpb24gfSBmcm9tICdhbnRkJztcclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcbi8vIGNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4vLi4vLi4vY29uZmlnJyk7XHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4uLy4uLy4uL3BhZ2VzL2FkbWluL2NvbmZpZycpO1xyXG5pbXBvcnQgeyBhYnNvbHV0ZVVybCwgY2hlY2tJc0xvZ2luLCBhcGlJbnN0YW5jZSwgY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZSB9IGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvdXRpbHMnO1xyXG5jb25zdCBKb2RpdEVkaXRvciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiam9kaXQtcmVhY3RcIiksIHsgc3NyOiBmYWxzZSB9KTtcclxuY29uc3QgeyBUZXh0LCBUaXRsZSB9ID0gVHlwb2dyYXBoeTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWwoeyBfdmlzaWJsZSwgaGlkZU1vZGFsLCBmZXRjaCwgdXNlciwgZGF0YUVkaXQgfSkge1xyXG4gICAgbGV0IGRpdlJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFthcGksIGNvbnRleHRIb2xkZXJdID0gbm90aWZpY2F0aW9uLnVzZU5vdGlmaWNhdGlvbigpO1xyXG4gICAgLy8gY29uc3QgW2RpdlJlZl0gPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcGF0dGVybk1lbnVTZWxlY3RlZCwgc2V0UGF0dGVybk1lbnVTZWxlY3RlZF0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgICBjb25zdCBbcGF0dGVybk1lbnUsIHNldFBhdHRlcm5NZW51XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IGVkaXRvciA9IHVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMSlcclxuICAgIGNvbnN0IFtpc1N1Yk1lbnUsIHNldElzU3ViTWVudV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW2lzUGF0dGVybk1lbnUsIHNldElTUGF0dGVybk1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzU2hvdywgc2V0SXNTaG93XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcbiAgICBjb25zdCBhY3RpdmVkID0gKCkgPT4ge1xyXG4gICAgICAgIGFjdGl2ZSA/IHNldEFjdGl2ZSgwKSA6IHNldEFjdGl2ZSgxKTtcclxuICAgICAgICAvLyBkaXZSZWYuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuICAgICAgICAvLyBkaXZSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICAgIH07XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoUGF0dGVybigpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBmZXRjaFBhdHRlcm4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWVudURhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgICAgICAgJ21lbnUvcGF0dGVybi1tZW51J1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobWVudURhdGEpXHJcbiAgICAgICAgc2V0UGF0dGVybk1lbnUobWVudURhdGEuZGF0YS5yZXN1bHRzKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0SGFuZGxlciA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG5cclxuXHJcbiAgICAgICAgLy8gb3JnYW5pemF0aW9uX2lkOiBvcmdhbml6YXRpb25faWQsXHJcbiAgICAgICAgLy8gbWVudV90aXRsZTogbWVudV90aXRsZSxcclxuICAgICAgICAvLyBtZW51X2RldGFpbDogbWVudV9kZXRhaWwsXHJcbiAgICAgICAgLy8gbWVudV9zZXE6IG1lbnVfc2VxLFxyXG4gICAgICAgIC8vIGhhdmVfc3ViOiBoYXZlX3N1YixcclxuICAgICAgICAvLyBpc19zaG93OiBpc19zaG93LFxyXG4gICAgICAgIC8vIGlzX3ByaW1hcnlfbWVudTogaXNfcHJpbWFyeV9tZW51LFxyXG4gICAgICAgIC8vIGlzX3BhdHRlcm5fbWVudTogaXNfcGF0dGVybl9tZW51LFxyXG4gICAgICAgIC8vIHBhdHRlcm5fbWVudTogcGF0dGVybl9tZW51LFxyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBcIm1lbnVfaWRcIjogZGF0YUVkaXQubWVudV9pZCxcclxuICAgICAgICAgICAgXCJtZW51X3RpdGxlXCI6IHZhbHVlLm1lbnVfdGl0bGUsXHJcbiAgICAgICAgICAgIFwibWVudV9kZXRhaWxcIjogY29udGVudCA/IHZhbHVlLm1lbnVfZGV0YWlsIDogXCJcIixcclxuICAgICAgICAgICAgXCJtZW51X3NlcVwiOiA5OTk5OTksXHJcbiAgICAgICAgICAgIFwiaXNfc2hvd1wiOiBhY3RpdmUgPyAxIDogMCxcclxuICAgICAgICAgICAgXCJpc19wYXR0ZXJuX21lbnVcIjogdmFsdWUucGF0dGVybl9tZW51ID09IDEgPyAwIDogMSxcclxuICAgICAgICAgICAgXCJwYXR0ZXJuX21lbnVcIjogcGF0dGVybk1lbnVTZWxlY3RlZCxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICBjb25zdCByZWdpc3RlckRhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLnBvc3QoJy9tZW51L21lbnUtc3ViJywgZGF0YSk7XHJcbiAgICAgICAgaWYgKHJlZ2lzdGVyRGF0YS5kYXRhLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgb3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MoKVxyXG5cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3Blbk5vdGlmaWNhdGlvbkZhaWwocmVnaXN0ZXJEYXRhLmRhdGEubWVzc2FnZSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPTiBPS1wiKVxyXG5cclxuICAgICAgICBoaWRlTW9kYWwoKVxyXG4gICAgICAgIG9uUmVzZXQoKVxyXG4gICAgICAgIGZldGNoKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcGVuTm90aWZpY2F0aW9uU3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICBhcGkuc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGDguJrguLHguJnguJfguLbguIHguKHguLnguKXguKrguLPguYDguKPguYfguIhgLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ+C4muC4seC4meC4l+C4tuC4geC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iCcsXHJcbiAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvbkZhaWwgPSAobWVzc2dhZSkgPT4ge1xyXG4gICAgICAgIGFwaS5lcnJvcih7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGDguJ7guJrguJvguLHguI3guKvguLLguKPguLDguKvguKfguYjguLLguIfguIHguLLguKPguJrguLHguJnguJfguLbguIHguILguYnguK3guKHguLnguKVgLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogbWVzc2dhZSxcclxuICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3Qgb25SZXNldCA9ICgpID0+IHtcclxuICAgICAgICBzZXRBY3RpdmUoMSlcclxuICAgICAgICBzZXRJc1N1Yk1lbnUoMClcclxuICAgICAgICBzZXRJU1BhdHRlcm5NZW51KGZhbHNlKVxyXG4gICAgICAgIHNldFBhdHRlcm5NZW51U2VsZWN0ZWQoMSlcclxuICAgICAgICBzZXRJc1Nob3codHJ1ZSlcclxuICAgICAgICBmb3JtLnJlc2V0RmllbGRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZCAke3ZhbHVlfWApO1xyXG4gICAgICAgIHNldFBhdHRlcm5NZW51U2VsZWN0ZWQodmFsdWUpXHJcbiAgICAgICAgaWYgKCFpc1N1Yk1lbnUpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vIHNldElzU3ViTWVudSgxKVxyXG4gICAgICAgICAgICAgICAgLy8gc2V0SVNQYXR0ZXJuTWVudSh0cnVlKVxyXG4gICAgICAgICAgICAgICAgc2V0SXNTaG93KGZhbHNlKVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHNldElzU3ViTWVudSgwKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNldElTUGF0dGVybk1lbnUoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBzZXRJc1Nob3codHJ1ZSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNldE1lbnUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcblxyXG4gICAgICAgICAgICB7Y29udGV4dEhvbGRlcn1cclxuICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17XCLguYDguJ7guLTguYjguKHguYDguKHguJnguLnguKLguYjguK3guKLguILguK3guIfguYDguKHguJnguLnguKPguK3guIcgXCIgKyAoIWRhdGFFZGl0ID8gXCJcIiA6IGRhdGFFZGl0Lm1lbnVfdGl0bGUpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJlZFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZT17X3Zpc2libGV9XHJcbiAgICAgICAgICAgICAgICAvLyBvbk9rPXsoKSA9PiBvbk9LKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVNb2RhbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlKDEpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNTdWJNZW51KDApXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXNldEZpZWxkcygpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsxMDAwfVxyXG4gICAgICAgICAgICAgICAgZm9vdGVyPXtudWxsfVxyXG4gICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkZpbmlzaD17b25TdWJtaXRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkTWFyaz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lbnVfdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuC4iuC4t+C5iOC4reC5gOC4oeC4meC4ueC4ouC5iOC4reC4olwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZsb2F0OiBcImxlZnRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy0yLzNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guYDguKHguJnguLnguKLguYjguK3guKInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiK4Li34LmI4Lit4LmA4Lih4LiZ4Li54Lii4LmI4Lit4LiiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGNsYXNzTmFtZT1cImZsZXggbXQtNiBtYi0wIHctMS8zXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbCBtdC02XCIgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbGc6dGV4dC1yaWdodCB3LWZ1bGwgbGc6dy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVzZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjQzJDRkUwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0MyQ0ZFMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzBweCAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUgIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdy1mdWxsIGxnOnctMS80XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRleHQtY3VzdG9tLWJsYWNrIFwiPuC4o+C4teC5gOC4i+C5h+C4lzwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwNTk2NjknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMDU5NjY5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMHB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSB3LWZ1bGwgbGc6dy0xLzRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGV4dC1jdXN0b20td2hpdGUgXCI+4Lia4Lix4LiZ4LiX4Li24LiBPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXR0ZXJuX21lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuC4o+C4ueC4m+C5geC4muC4muC5gOC4oeC4meC4ueC4ouC5iOC4reC4olwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8T3B0aW9uIHZhbHVlPVwiMFwiPuC4geC4s+C4q+C4meC4lOC5gOC4reC4hzwvT3B0aW9uPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXR0ZXJuTWVudSA/IHBhdHRlcm5NZW51Lm1hcCgob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxPcHRpb24gdmFsdWU9e29iamVjdC5wYXR0ZXJuX21lbnVfaWR9PntvYmplY3QucGF0dGVybl90aXRsZX0gIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGNsYXNzTmFtZT1cImZsZXggbXQtNiBtYi0wXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCB0ZXh0LWxlZnQgbGc6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpbmxpbmUtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXthY3RpdmV9IG9uQ2xpY2s9e2FjdGl2ZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteC0yIHRleHQtc21cIj7guIHguLLguKPguYHguKrguJTguIfguJzguKU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICB7aXNTaG93ID09IHRydWUgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lbnVfZGV0YWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi4Lij4Liy4Lii4Lil4Liw4LmA4Lit4Li14Lii4LiUIDpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4o+C4suC4ouC4peC4sOC5gOC4reC4teC4ouC4lCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxKb2RpdEVkaXRvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZWRpdG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZz17Y29uZmlnLmNvbmZpZyh1c2VyKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiNzAwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MX0gLy8gdGFiSW5kZXggb2YgdGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e25ld0NvbnRlbnQgPT4gc2V0Q29udGVudChuZXdDb250ZW50KX0gLy8gcHJlZmVycmVkIHRvIHVzZSBvbmx5IHRoaXMgb3B0aW9uIHRvIHVwZGF0ZSB0aGUgY29udGVudCBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtuZXdDb250ZW50ID0+IHsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Lz59XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiBcImxlZnRcIiwgY2xlYXI6IFwiYm90aFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtkaXZSZWZ9PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9