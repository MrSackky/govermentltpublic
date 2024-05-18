webpackHotUpdate("static\\development\\pages\\admin\\management-menu\\secoundary-menu.js",{

/***/ "./components/managemnet/secondary-menu/add-menu.jsx":
/*!***********************************************************!*\
  !*** ./components/managemnet/secondary-menu/add-menu.jsx ***!
  \***********************************************************/
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




var _jsxFileName = "D:\\govermentlt\\components\\managemnet\\secondary-menu\\add-menu.jsx",
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

  var fetch = _ref.fetch,
      user = _ref.user;
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
                "organization_id": user.organization_id,
                "menu_title": value.menu_title,
                "menu_detail": content ? value.menu_detail : "",
                "menu_seq": 999999,
                "have_sub": isSubMenu ? 1 : 0,
                "is_show": active ? 1 : 0,
                "is_primary_menu": 0,
                "is_pattern_menu": value.pattern_menu == 1 ? 0 : 1,
                "pattern_menu": patternMenuSelected
              };
              console.log(data);
              _context2.next = 4;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["apiInstance"])().post('/menu', data);

            case 4:
              registerData = _context2.sent;

              if (registerData.data.status == 200) {
                openNotificationSuccess();
              } else {
                openNotificationFail(registerData.data.message);
              }

              console.log("ON OK");
              setVisible(false);
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("a", {
    onClick: function onClick() {
      return setVisible(true);
    },
    className: "ml-4 lg:inline-flex lg:w-auto w-full px-2 py-2 rounded h-8 text-white bg-green-600 font-bold items-center justify-center hover:bg-green-600 hover:text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E21\u0E19\u0E39\u0E23\u0E2D\u0E07"), contextHolder, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    title: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E21\u0E19\u0E39\u0E23\u0E2D\u0E07",
    className: "mt-4",
    centered: true,
    visible: visible // onOk={() => onOK()}
    ,
    onCancel: function onCancel() {
      setVisible(false);
      setActive(1);
      setIsSubMenu(0);
      form.resetFields();
    },
    width: 1000,
    footer: null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
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
      lineNumber: 159,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    name: "menu_title",
    label: "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E19\u0E39\u0E23\u0E2D\u0E07",
    style: {
      "float": "left"
    },
    className: "block text-gray-700 text-sm font-bold mb-2 w-2/3",
    rules: [{
      required: true,
      message: 'กรุณากรอกชื่อเมนูรอง'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    id: "#",
    type: "text",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E19\u0E39\u0E23\u0E2D\u0E07",
    className: "resize-none border rounded-md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
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
      lineNumber: 185,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "text-center lg:text-right w-full lg:w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
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
      lineNumber: 189,
      columnNumber: 33
    }
  }, __jsx(Text, {
    className: "text-custom-black ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
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
      lineNumber: 206,
      columnNumber: 33
    }
  }, __jsx(Text, {
    className: "text-custom-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 37
    }
  }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    name: "pattern_menu",
    label: "\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E40\u0E21\u0E19\u0E39\u0E23\u0E2D\u0E07",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Select"], {
    defaultValue: 1,
    className: "w-full",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 25
    }
  }, patternMenu ? patternMenu.map(function (object) {
    return __jsx(Option, {
      value: object.pattern_menu_id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
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
      lineNumber: 241,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "inline-flex text-left lg:w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 29
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 33
    }
  }, __jsx("li", {
    className: "inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 37
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
    checked: active,
    onClick: actived,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "mx-2 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 41
    }
  }, "\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25")), __jsx("li", {
    className: "inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 37
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
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
      lineNumber: 250,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "mx-2 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 41
    }
  }, "\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07 \u0E40\u0E21\u0E19\u0E39\u0E22\u0E48\u0E2D\u0E22")))))), isShow == true && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
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
      lineNumber: 264,
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
      lineNumber: 276,
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
      lineNumber: 292,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hbmFnZW1uZXQvc2Vjb25kYXJ5LW1lbnUvYWRkLW1lbnUuanN4Il0sIm5hbWVzIjpbIk9wdGlvbiIsIlNlbGVjdCIsIlRleHRBcmVhIiwiSW5wdXQiLCJjb25maWciLCJyZXF1aXJlIiwiSm9kaXRFZGl0b3IiLCJkeW5hbWljIiwic3NyIiwiVGV4dCIsIlR5cG9ncmFwaHkiLCJUaXRsZSIsIm1vZGFsIiwiZmV0Y2giLCJ1c2VyIiwiZGl2UmVmIiwidXNlUmVmIiwibm90aWZpY2F0aW9uIiwidXNlTm90aWZpY2F0aW9uIiwiYXBpIiwiY29udGV4dEhvbGRlciIsInVzZVN0YXRlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJwYXR0ZXJuTWVudVNlbGVjdGVkIiwic2V0UGF0dGVybk1lbnVTZWxlY3RlZCIsInBhdHRlcm5NZW51Iiwic2V0UGF0dGVybk1lbnUiLCJlZGl0b3IiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImlzU3ViTWVudSIsInNldElzU3ViTWVudSIsImlzUGF0dGVybk1lbnUiLCJzZXRJU1BhdHRlcm5NZW51IiwiaXNTaG93Iiwic2V0SXNTaG93IiwiRm9ybSIsInVzZUZvcm0iLCJmb3JtIiwiYWN0aXZlZCIsInVzZUVmZmVjdCIsImZldGNoUGF0dGVybiIsImFwaUluc3RhbmNlIiwiZ2V0IiwibWVudURhdGEiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInJlc3VsdHMiLCJvblN1Ym1pdEhhbmRsZXIiLCJ2YWx1ZSIsIm9yZ2FuaXphdGlvbl9pZCIsIm1lbnVfdGl0bGUiLCJtZW51X2RldGFpbCIsInBhdHRlcm5fbWVudSIsInBvc3QiLCJyZWdpc3RlckRhdGEiLCJzdGF0dXMiLCJvcGVuTm90aWZpY2F0aW9uU3VjY2VzcyIsIm9wZW5Ob3RpZmljYXRpb25GYWlsIiwibWVzc2FnZSIsIm9uUmVzZXQiLCJzdWNjZXNzIiwiZGVzY3JpcHRpb24iLCJwbGFjZW1lbnQiLCJtZXNzZ2FlIiwiZXJyb3IiLCJyZXNldEZpZWxkcyIsImhhbmRsZUNoYW5nZSIsInJlcXVpcmVkIiwibWFyZ2luQm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJtYXAiLCJvYmplY3QiLCJwYXR0ZXJuX21lbnVfaWQiLCJwYXR0ZXJuX3RpdGxlIiwibmV3Q29udGVudCIsImNsZWFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBUUEsTUFBUixHQUFtQkMsMkNBQW5CLENBQVFELE1BQVI7QUFDQSxJQUFRRSxRQUFSLEdBQXFCQywwQ0FBckIsQ0FBUUQsUUFBUixDLENBQ0E7O0FBQ0EsSUFBTUUsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDREQUFELENBQXRCOztBQUNBO0FBQ0EsSUFBTUMsV0FBVyxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSx3SkFBTjtBQUFBLENBQUQsRUFBOEI7QUFBRUMsS0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBO0FBQUEsa0NBQWhCLG9FQUFnQjtBQUFBO0FBQUEsY0FBaEIsYUFBZ0I7QUFBQTtBQUFBLENBQTlCLENBQTNCO01BQU1GLFc7QUFDTixJQUFRRyxJQUFSLEdBQXdCQywrQ0FBeEIsQ0FBUUQsSUFBUjtBQUFBLElBQWNFLEtBQWQsR0FBd0JELCtDQUF4QixDQUFjQyxLQUFkO0FBQ2UsU0FBU0MsS0FBVCxPQUFnQztBQUFBOztBQUFBOztBQUFBLE1BQWZDLEtBQWUsUUFBZkEsS0FBZTtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUMzQyxNQUFJQyxNQUFNLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFuQjs7QUFDQSw4QkFBNkJDLGlEQUFZLENBQUNDLGVBQWIsRUFBN0I7QUFBQTtBQUFBLE1BQU9DLEdBQVA7QUFBQSxNQUFZQyxhQUFaLDZCQUYyQyxDQUczQzs7O0FBQ0Es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QUFDLG1EQUhkO0FBSUksV0FBTyxFQUFFLEtBSmI7QUFLSSxTQUFLLEVBQUUsQ0FDSDtBQUNJbUMsY0FBUSxFQUFFLElBRGQ7QUFFSVQsYUFBTyxFQUFFO0FBRmIsS0FERyxDQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FZSSxNQUFDLFdBQUQ7QUFDSSxPQUFHLEVBQUVuQyxNQURUO0FBRUksU0FBSyxFQUFFQyxPQUZYO0FBR0ksVUFBTSxFQUFFekIsTUFBTSxDQUFDQSxNQUFQLENBQWNVLElBQWQsQ0FIWjtBQUlJLFVBQU0sRUFBRSxPQUpaO0FBS0ksWUFBUSxFQUFFLENBTGQsQ0FLaUI7QUFMakI7QUFNSSxVQUFNLEVBQUUsZ0JBQUFzRSxVQUFVO0FBQUEsYUFBSXRELFVBQVUsQ0FBQ3NELFVBQUQsQ0FBZDtBQUFBLEtBTnRCLENBTWtEO0FBTmxEO0FBT0ksWUFBUSxFQUFFLGtCQUFBQSxVQUFVLEVBQUksQ0FBRyxDQVAvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkosQ0FEZSxDQXhHdkIsQ0FoQkosRUFxSkk7QUFBSyxTQUFLLEVBQUU7QUFBRSxlQUFPLE1BQVQ7QUFBaUJDLFdBQUssRUFBRTtBQUF4QixLQUFaO0FBQ0ksT0FBRyxFQUFFdEUsTUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckpKLENBUkosQ0FESjtBQXFLSDs7R0EvUnVCSCxLO1VBRVNLLGlEQUFZLENBQUNDLGUsRUFZM0JxQix5Q0FBSSxDQUFDQyxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pblxcbWFuYWdlbWVudC1tZW51XFxzZWNvdW5kYXJ5LW1lbnUuanMuYzdkNWYxM2MzMGRlYzdiNWY0Y2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uLCBGb3JtLCBJbnB1dCwgU3dpdGNoLCBUeXBvZ3JhcGh5LCBTZWxlY3QsIG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnO1xyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuLy8gY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi8uLi8uLi9jb25maWcnKTtcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vLi4vLi4vcGFnZXMvYWRtaW4vY29uZmlnJyk7XHJcbmltcG9ydCB7IGFic29sdXRlVXJsLCBjaGVja0lzTG9naW4sIGFwaUluc3RhbmNlLCBjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lIH0gZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS91dGlscyc7XHJcbmNvbnN0IEpvZGl0RWRpdG9yID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJqb2RpdC1yZWFjdFwiKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5jb25zdCB7IFRleHQsIFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbCh7IGZldGNoLCB1c2VyIH0pIHtcclxuICAgIGxldCBkaXZSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbYXBpLCBjb250ZXh0SG9sZGVyXSA9IG5vdGlmaWNhdGlvbi51c2VOb3RpZmljYXRpb24oKTtcclxuICAgIC8vIGNvbnN0IFtkaXZSZWZdID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3BhdHRlcm5NZW51U2VsZWN0ZWQsIHNldFBhdHRlcm5NZW51U2VsZWN0ZWRdID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gICAgY29uc3QgW3BhdHRlcm5NZW51LCBzZXRQYXR0ZXJuTWVudV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBlZGl0b3IgPSB1c2VSZWYobnVsbClcclxuICAgIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDEpXHJcbiAgICBjb25zdCBbaXNTdWJNZW51LCBzZXRJc1N1Yk1lbnVdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtpc1BhdHRlcm5NZW51LCBzZXRJU1BhdHRlcm5NZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc1Nob3csIHNldElzU2hvd10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG4gICAgY29uc3QgYWN0aXZlZCA9ICgpID0+IHtcclxuICAgICAgICBhY3RpdmUgPyBzZXRBY3RpdmUoMCkgOiBzZXRBY3RpdmUoMSk7XHJcbiAgICAgICAgLy8gZGl2UmVmLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgICAgICAgLy8gZGl2UmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICB9O1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaFBhdHRlcm4oKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgZmV0Y2hQYXR0ZXJuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lbnVEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICAgICAgICdtZW51L3BhdHRlcm4tbWVudSdcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1lbnVEYXRhKVxyXG4gICAgICAgIHNldFBhdHRlcm5NZW51KG1lbnVEYXRhLmRhdGEucmVzdWx0cylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSBhc3luYyAodmFsdWUpID0+IHtcclxuXHJcblxyXG4gICAgICAgIC8vIG9yZ2FuaXphdGlvbl9pZDogb3JnYW5pemF0aW9uX2lkLFxyXG4gICAgICAgIC8vIG1lbnVfdGl0bGU6IG1lbnVfdGl0bGUsXHJcbiAgICAgICAgLy8gbWVudV9kZXRhaWw6IG1lbnVfZGV0YWlsLFxyXG4gICAgICAgIC8vIG1lbnVfc2VxOiBtZW51X3NlcSxcclxuICAgICAgICAvLyBoYXZlX3N1YjogaGF2ZV9zdWIsXHJcbiAgICAgICAgLy8gaXNfc2hvdzogaXNfc2hvdyxcclxuICAgICAgICAvLyBpc19wcmltYXJ5X21lbnU6IGlzX3ByaW1hcnlfbWVudSxcclxuICAgICAgICAvLyBpc19wYXR0ZXJuX21lbnU6IGlzX3BhdHRlcm5fbWVudSxcclxuICAgICAgICAvLyBwYXR0ZXJuX21lbnU6IHBhdHRlcm5fbWVudSxcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgXCJvcmdhbml6YXRpb25faWRcIjogdXNlci5vcmdhbml6YXRpb25faWQsXHJcbiAgICAgICAgICAgIFwibWVudV90aXRsZVwiOiB2YWx1ZS5tZW51X3RpdGxlLFxyXG4gICAgICAgICAgICBcIm1lbnVfZGV0YWlsXCI6IGNvbnRlbnQgPyB2YWx1ZS5tZW51X2RldGFpbCA6IFwiXCIsXHJcbiAgICAgICAgICAgIFwibWVudV9zZXFcIjogOTk5OTk5LFxyXG4gICAgICAgICAgICBcImhhdmVfc3ViXCI6IGlzU3ViTWVudSA/IDEgOiAwLFxyXG4gICAgICAgICAgICBcImlzX3Nob3dcIjogYWN0aXZlID8gMSA6IDAsXHJcbiAgICAgICAgICAgIFwiaXNfcHJpbWFyeV9tZW51XCI6IDAsXHJcbiAgICAgICAgICAgIFwiaXNfcGF0dGVybl9tZW51XCI6IHZhbHVlLnBhdHRlcm5fbWVudSA9PSAxID8gMCA6IDEsXHJcbiAgICAgICAgICAgIFwicGF0dGVybl9tZW51XCI6IHBhdHRlcm5NZW51U2VsZWN0ZWQsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5wb3N0KCcvbWVudScsIGRhdGEpO1xyXG4gICAgICAgIGlmIChyZWdpc3RlckRhdGEuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIG9wZW5Ob3RpZmljYXRpb25TdWNjZXNzKClcclxuXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9wZW5Ob3RpZmljYXRpb25GYWlsKHJlZ2lzdGVyRGF0YS5kYXRhLm1lc3NhZ2UpXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT04gT0tcIilcclxuICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKVxyXG4gICAgICAgIG9uUmVzZXQoKVxyXG4gICAgICAgIGZldGNoKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcGVuTm90aWZpY2F0aW9uU3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICBhcGkuc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGDguJrguLHguJnguJfguLbguIHguKHguLnguKXguKrguLPguYDguKPguYfguIhgLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ+C4muC4seC4meC4l+C4tuC4geC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iCcsXHJcbiAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvbkZhaWwgPSAobWVzc2dhZSkgPT4ge1xyXG4gICAgICAgIGFwaS5lcnJvcih7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGDguJ7guJrguJvguLHguI3guKvguLLguKPguLDguKvguKfguYjguLLguIfguIHguLLguKPguJrguLHguJnguJfguLbguIHguILguYnguK3guKHguLnguKVgLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogbWVzc2dhZSxcclxuICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3Qgb25SZXNldCA9ICgpID0+IHtcclxuICAgICAgICBzZXRBY3RpdmUoMSlcclxuICAgICAgICBzZXRJc1N1Yk1lbnUoMClcclxuICAgICAgICBzZXRJU1BhdHRlcm5NZW51KGZhbHNlKVxyXG4gICAgICAgIHNldFBhdHRlcm5NZW51U2VsZWN0ZWQoMSlcclxuICAgICAgICBzZXRJc1Nob3codHJ1ZSlcclxuICAgICAgICBmb3JtLnJlc2V0RmllbGRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZCAke3ZhbHVlfWApO1xyXG4gICAgICAgIHNldFBhdHRlcm5NZW51U2VsZWN0ZWQodmFsdWUpXHJcbiAgICAgICAgaWYgKCFpc1N1Yk1lbnUpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vIHNldElzU3ViTWVudSgxKVxyXG4gICAgICAgICAgICAgICAgLy8gc2V0SVNQYXR0ZXJuTWVudSh0cnVlKVxyXG4gICAgICAgICAgICAgICAgc2V0SXNTaG93KGZhbHNlKVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHNldElzU3ViTWVudSgwKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNldElTUGF0dGVybk1lbnUoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBzZXRJc1Nob3codHJ1ZSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNldE1lbnUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGUodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC00IGxnOmlubGluZS1mbGV4IGxnOnctYXV0byB3LWZ1bGwgcHgtMiBweS0yIHJvdW5kZWQgaC04IHRleHQtd2hpdGUgYmctZ3JlZW4tNjAwIGZvbnQtYm9sZCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaG92ZXI6YmctZ3JlZW4tNjAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDguYDguJ7guLTguYjguKHguYDguKHguJnguLnguKPguK3guIdcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICB7Y29udGV4dEhvbGRlcn1cclxuICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIuC5gOC4nuC4tOC5iOC4oeC5gOC4oeC4meC4ueC4o+C4reC4h1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICAgICAgICAgIGNlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgLy8gb25Paz17KCkgPT4gb25PSygpfVxyXG4gICAgICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZSgxKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldElzU3ViTWVudSgwKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17MTAwMH1cclxuICAgICAgICAgICAgICAgIGZvb3Rlcj17bnVsbH1cclxuICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2ljXCJcclxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25GaW5pc2g9e29uU3VibWl0SGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZE1hcms9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZW51X3RpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLguIrguLfguYjguK3guYDguKHguJnguLnguKPguK3guIdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Zsb2F0OlwibGVmdFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctMi8zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4LmA4Lih4LiZ4Li54Lij4Lit4LiHJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC5gOC4oeC4meC4ueC4o+C4reC4h1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBjbGFzc05hbWU9XCJmbGV4IG10LTYgbWItMCB3LTEvM1wiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGwgbXQtNlwiID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGxnOnRleHQtcmlnaHQgdy1mdWxsIGxnOnctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0MyQ0ZFMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDMkNGRTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwcHggIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHctZnVsbCBsZzp3LTEvNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbS1ibGFjayBcIj7guKPguLXguYDguIvguYfguJc8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDU5NjY5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzA1OTY2OScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzBweCAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUgIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdy1mdWxsIGxnOnctMS80XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRleHQtY3VzdG9tLXdoaXRlIFwiPuC4muC4seC4meC4l+C4tuC4gTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGF0dGVybl9tZW51XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLguKPguLnguJvguYHguJrguJrguYDguKHguJnguLnguKPguK3guIdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPE9wdGlvbiB2YWx1ZT1cIjBcIj7guIHguLPguKvguJnguJTguYDguK3guIc8L09wdGlvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGF0dGVybk1lbnUgPyBwYXR0ZXJuTWVudS5tYXAoKG9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8T3B0aW9uIHZhbHVlPXtvYmplY3QucGF0dGVybl9tZW51X2lkfT57b2JqZWN0LnBhdHRlcm5fdGl0bGV9ICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBjbGFzc05hbWU9XCJmbGV4IG10LTYgbWItMFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggdGV4dC1sZWZ0IGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggY2hlY2tlZD17YWN0aXZlfSBvbkNsaWNrPXthY3RpdmVkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXgtMiB0ZXh0LXNtXCI+4LiB4Liy4Lij4LmB4Liq4LiU4LiH4Lic4LilPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggY2hlY2tlZD17aXNTdWJNZW51fSBvbkNsaWNrPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc1N1Yk1lbnUodmFsdWUgPyAxIDogMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGF0dGVybk1lbnVTZWxlY3RlZCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzU2hvdyh2YWx1ZSA/IGZhbHNlIDogdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm14LTIgdGV4dC1zbVwiPuC4leC5ieC4reC4h+C4geC4suC4o+C4quC4o+C5ieC4suC4hyDguYDguKHguJnguLnguKLguYjguK3guKI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICB7aXNTaG93ID09IHRydWUgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lbnVfZGV0YWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi4Lij4Liy4Lii4Lil4Liw4LmA4Lit4Li14Lii4LiUIDpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4o+C4suC4ouC4peC4sOC5gOC4reC4teC4ouC4lCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxKb2RpdEVkaXRvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZWRpdG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZz17Y29uZmlnLmNvbmZpZyh1c2VyKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiNzAwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MX0gLy8gdGFiSW5kZXggb2YgdGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e25ld0NvbnRlbnQgPT4gc2V0Q29udGVudChuZXdDb250ZW50KX0gLy8gcHJlZmVycmVkIHRvIHVzZSBvbmx5IHRoaXMgb3B0aW9uIHRvIHVwZGF0ZSB0aGUgY29udGVudCBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtuZXdDb250ZW50ID0+IHsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Lz59XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiBcImxlZnRcIiwgY2xlYXI6IFwiYm90aFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtkaXZSZWZ9PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9