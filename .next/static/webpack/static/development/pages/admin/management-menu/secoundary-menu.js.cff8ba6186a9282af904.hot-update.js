webpackHotUpdate("static\\development\\pages\\admin\\management-menu\\secoundary-menu.js",{

/***/ "./components/managemnet/primary-menu/add-menu-sub.jsx":
false,

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
    title: "เพิ่มเมนูย่อยของเมนูหลัก " + (!dataEdit ? "" : dataEdit.menu_title),
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

/***/ }),

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_drag_listview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-drag-listview */ "./node_modules/react-drag-listview/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../middleware/utils */ "./middleware/utils.js");
/* harmony import */ var _components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/layout/LayoutAdmin */ "./components/layout/LayoutAdmin.jsx");
/* harmony import */ var _components_managemnet_secondary_menu_add_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/managemnet/secondary-menu/add-menu */ "./components/managemnet/secondary-menu/add-menu.jsx");
/* harmony import */ var _components_managemnet_secondary_menu_edit_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/managemnet/secondary-menu/edit-menu */ "./components/managemnet/secondary-menu/edit-menu.jsx");
/* harmony import */ var _components_managemnet_secondary_menu_add_menu_sub__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/managemnet/secondary-menu/add-menu-sub */ "./components/managemnet/secondary-menu/add-menu-sub.jsx");
/* harmony import */ var _components_managemnet_primary_menu_edit_menu_sub__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/managemnet/primary-menu/edit-menu-sub */ "./components/managemnet/primary-menu/edit-menu-sub.jsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! bcryptjs */ "./node_modules/bcryptjs/dist/bcrypt.js");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_14__);




var _jsxFileName = "D:\\govermentlt\\pages\\admin\\management-menu\\secoundary-menu\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;




/* utils */


/* components */





 // import UserNav from '../components/navigation/User';



var Text = antd__WEBPACK_IMPORTED_MODULE_13__["Typography"].Text,
    Title = antd__WEBPACK_IMPORTED_MODULE_13__["Typography"].Title;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_13__["Input"].TextArea;
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

  var _notification$useNoti = antd__WEBPACK_IMPORTED_MODULE_13__["notification"].useNotification(),
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
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["apiInstance"])().get('menu?is_primary_menu=0&organization_id=' + (!user ? 0 : user.organization_id));

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
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["apiInstance"])().put('menu/reorder-menu', _data);

            case 7:
              menuData = _context2.sent;
              _dataRevert = {
                "menu_id": menus[toIndex].menu_id,
                "menu_seq": fromIndex
              };
              _context2.next = 11;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["apiInstance"])().put('menu/reorder-menu', _dataRevert);

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
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["apiInstance"])().put('menu/reorder-menu-sub', _data2);

            case 26:
              _menuData = _context2.sent;
              _dataRevert2 = {
                "menu_sub_id": menus[index].menu_subs[toIndex].menu_sub_id,
                "menu_seq": fromIndex
              };
              _context2.next = 30;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["apiInstance"])().put('menu/reorder-menu-sub', _dataRevert2);

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
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["apiInstance"])()["delete"]('menu/' + dataDelete.menu_id, {});

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
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["apiInstance"])()["delete"]('menu-sub/' + dataDelete.menu_sub_id, {});

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

  return __jsx(_components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
      lineNumber: 294,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 7
    }
  }, contextHolder, __jsx(_components_managemnet_secondary_menu_add_menu__WEBPACK_IMPORTED_MODULE_9__["default"], {
    fetch: fetch,
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
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
      lineNumber: 311,
      columnNumber: 9
    }
  }), __jsx(_components_managemnet_primary_menu_edit_menu_sub__WEBPACK_IMPORTED_MODULE_12__["default"], {
    _visible: visibleEditMenuSubModal,
    hideModal: hideEditMenuSubModal,
    fetch: fetch,
    user: user,
    dataEdit: dataEdit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 9
    }
  }), __jsx(_components_managemnet_secondary_menu_add_menu_sub__WEBPACK_IMPORTED_MODULE_11__["default"], {
    _visible: visibleAddSubMenuModal,
    hideModal: hideSubMenuModal,
    fetch: fetch,
    user: user,
    dataEdit: dataEdit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Spin"], {
    spinning: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
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
      lineNumber: 315,
      columnNumber: 11
    }
  }, menus.length == 0 && __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Empty"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 35
    }
  }), menus.map(function (obj, index) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["List"], {
      header: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Typography"].Text, {
        strong: true,
        className: "grabbable",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 21
        }
      }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["DragOutlined"], {
        className: "icon",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 23
        }
      }), obj.menu_title), __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tag"], {
        color: obj.is_show == 1 ? "success" : "default",
        style: {
          marginLeft: "10px",
          marginRight: "0px"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332,
          columnNumber: 21
        }
      }, obj.is_show == 1 ? "ใช้งาน" : "ไม่ใช้งาน"), __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        className: "ml-2",
        type: "default",
        onClick: function onClick() {
          onclikEditModal(true, obj);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 21
        }
      }, "\u0E41\u0E01\u0E49\u0E44\u0E02"), obj.have_sub == 1 && __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Button"], {
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
          lineNumber: 334,
          columnNumber: 43
        }
      }, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E21\u0E19\u0E39\u0E22\u0E48\u0E2D\u0E22"), __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        className: "ml-2",
        type: "danger",
        onClick: function onClick() {
          return showModal(obj);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 21
        }
      }, "\u0E25\u0E1A")),
      key: index,
      className: "draggable",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
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
        lineNumber: 341,
        columnNumber: 17
      }
    }, obj.have_sub == 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, obj.menu_subs.map(function (item, index2) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["List"].Item, {
        key: index2,
        className: "draggable-item",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350,
          columnNumber: 23
        }
      }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["DragOutlined"], {
        className: "icon",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 25
        }
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["List"].Item.Meta, {
        title: item.menu_title,
        className: "grabbable",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 25
        }
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Tag"], {
        color: item.is_show == 1 ? "success" : "default",
        style: {
          marginLeft: "10px",
          marginRight: "10px"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 25
        }
      }, item.is_show == 1 ? "ใช้งาน" : "ไม่ใช้งาน"), __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        className: "mr-1",
        type: "default",
        onClick: function onClick() {
          onclikEditMenuSubModal(true, item);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 25
        }
      }, "\u0E41\u0E01\u0E49\u0E44\u0E02"), __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        className: "mr-2",
        type: "danger",
        onClick: function onClick() {
          return showDeletMenuSubModal(item);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 25
        }
      }, "\u0E25\u0E1A"));
    }))));
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Modal"], {
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
      lineNumber: 372,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 9
    }
  }, "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A \"", dataDelete ? dataDelete.menu_title : "", "\" \u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?  ")), __jsx(antd__WEBPACK_IMPORTED_MODULE_13__["Modal"], {
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
      lineNumber: 388,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 9
    }
  }, "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A \"", dataDelete ? dataDelete.menu_title : "", "\" \u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?  ")));
}
/* getServerSideProps */

_s(Home, "PowmPuSdz0cUTRClRU2Sp9+HKNI=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_13__["notification"].useNotification];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hbmFnZW1uZXQvc2Vjb25kYXJ5LW1lbnUvYWRkLW1lbnUtc3ViLmpzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9tYW5hZ2VtZW50LW1lbnUvc2Vjb3VuZGFyeS1tZW51L2luZGV4LmpzIl0sIm5hbWVzIjpbIk9wdGlvbiIsIlNlbGVjdCIsIlRleHRBcmVhIiwiSW5wdXQiLCJjb25maWciLCJyZXF1aXJlIiwiSm9kaXRFZGl0b3IiLCJkeW5hbWljIiwic3NyIiwiVGV4dCIsIlR5cG9ncmFwaHkiLCJUaXRsZSIsIm1vZGFsIiwiX3Zpc2libGUiLCJoaWRlTW9kYWwiLCJmZXRjaCIsInVzZXIiLCJkYXRhRWRpdCIsImRpdlJlZiIsInVzZVJlZiIsIm5vdGlmaWNhdGlvbiIsInVzZU5vdGlmaWNhdGlvbiIsImFwaSIsImNvbnRleHRIb2xkZXIiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwicGF0dGVybk1lbnVTZWxlY3RlZCIsInNldFBhdHRlcm5NZW51U2VsZWN0ZWQiLCJwYXR0ZXJuTWVudSIsInNldFBhdHRlcm5NZW51IiwiZWRpdG9yIiwiY29udGVudCIsInNldENvbnRlbnQiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJpc1N1Yk1lbnUiLCJzZXRJc1N1Yk1lbnUiLCJpc1BhdHRlcm5NZW51Iiwic2V0SVNQYXR0ZXJuTWVudSIsImlzU2hvdyIsInNldElzU2hvdyIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsImFjdGl2ZWQiLCJ1c2VFZmZlY3QiLCJmZXRjaFBhdHRlcm4iLCJhcGlJbnN0YW5jZSIsImdldCIsIm1lbnVEYXRhIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJyZXN1bHRzIiwib25TdWJtaXRIYW5kbGVyIiwidmFsdWUiLCJtZW51X2lkIiwibWVudV90aXRsZSIsIm1lbnVfZGV0YWlsIiwicGF0dGVybl9tZW51IiwicG9zdCIsInJlZ2lzdGVyRGF0YSIsInN0YXR1cyIsIm9wZW5Ob3RpZmljYXRpb25TdWNjZXNzIiwib3Blbk5vdGlmaWNhdGlvbkZhaWwiLCJtZXNzYWdlIiwib25SZXNldCIsInN1Y2Nlc3MiLCJkZXNjcmlwdGlvbiIsInBsYWNlbWVudCIsIm1lc3NnYWUiLCJlcnJvciIsInJlc2V0RmllbGRzIiwiaGFuZGxlQ2hhbmdlIiwicmVxdWlyZWQiLCJtYXJnaW5Cb3R0b20iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJjb2xvciIsIm1hcCIsIm9iamVjdCIsInBhdHRlcm5fbWVudV9pZCIsInBhdHRlcm5fdGl0bGUiLCJuZXdDb250ZW50IiwiY2xlYXIiLCJtb2NrRGF0YSIsImlkIiwic3ViTGlzdCIsIkhvbWUiLCJwcm9wcyIsIm1lbnVzIiwic2V0TWVudXMiLCJvcmlnaW4iLCJsb2dpbiIsInNldExvZ2luIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YURlbGV0ZSIsInNldERhdGFEZWxldGUiLCJzZXREYXRhRWRpdCIsInZpc2libGVNb2RhbERlbGV0ZSIsInNldFZpc2libGVNb2RhbERlbGV0ZSIsInZpc2libGVFZGl0TW9kYWwiLCJzZXRWaXNpYmxlRWRpdE1vZGFsIiwidmlzaWJsZUVkaXRNZW51U3ViTW9kYWwiLCJzZXRWaXNpYmxlRWRpdE1lbnVTdWJNb2RhbCIsInZpc2libGVBZGRTdWJNZW51TW9kYWwiLCJzZXRWaXNpYmxlQWRkU3ViTWVudU1vZGFsIiwidmlzaWJsZU1vZGFsTWVudVN1YkRlbGV0ZSIsInNldFZpc2libGVNb2RhbE1lbnVTdWJEZWxldGUiLCJwYXJhbXMiLCJvcmdhbml6YXRpb25faWQiLCJzZXRUaW1lb3V0IiwiYmluZCIsInJlb3JkZXIiLCJsaXN0Iiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwicmVzdWx0IiwiQXJyYXkiLCJmcm9tIiwic3BsaWNlIiwicmVtb3ZlZCIsIm9uRHJhZ0VuZCIsImZyb21JbmRleCIsInRvSW5kZXgiLCJ0eXBlIiwiaW5kZXgiLCJfZGF0YSIsInB1dCIsIl9kYXRhUmV2ZXJ0IiwibWVudURhdGFSZXZlcnQiLCJtZW51X3N1YnMiLCJtZW51X3N1Yl9pZCIsIkVycm9yIiwib25EZWxldGUiLCJvbk1lbnVTdWJEZWxldGUiLCJoaWRlTWVudVN1Yk1vZGFsIiwic2hvd01vZGFsIiwic2hvd0RlbGV0TWVudVN1Yk1vZGFsIiwib25jbGlrRWRpdE1vZGFsIiwib2JqIiwib25jbGlrRWRpdE1lbnVTdWJNb2RhbCIsIm9uY2xpa0FkZFN1Yk1lbnVNb2RhbCIsImhpZGVFZGl0TW9kYWwiLCJoaWRlU3ViTWVudU1vZGFsIiwiaGlkZUVkaXRNZW51U3ViTW9kYWwiLCJwYXRoIiwiYnJlYWRjcnVtYk5hbWUiLCJsZW5ndGgiLCJpc19zaG93IiwibWFyZ2luTGVmdCIsImhhdmVfc3ViIiwiaXRlbSIsImluZGV4MiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQVFBLE1BQVIsR0FBbUJDLDJDQUFuQixDQUFRRCxNQUFSO0FBQ0EsSUFBUUUsUUFBUixHQUFxQkMsMENBQXJCLENBQVFELFFBQVIsQyxDQUNBOztBQUNBLElBQU1FLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyw0REFBRCxDQUF0Qjs7QUFDQTtBQUNBLElBQU1DLFdBQVcsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sd0pBQU47QUFBQSxDQUFELEVBQThCO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUFoQixvRUFBZ0I7QUFBQTtBQUFBLGNBQWhCLGFBQWdCO0FBQUE7QUFBQSxDQUE5QixDQUEzQjtNQUFNRixXO0FBQ04sSUFBUUcsSUFBUixHQUF3QkMsK0NBQXhCLENBQVFELElBQVI7QUFBQSxJQUFjRSxLQUFkLEdBQXdCRCwrQ0FBeEIsQ0FBY0MsS0FBZDtBQUNlLFNBQVNDLEtBQVQsT0FBK0Q7QUFBQTs7QUFBQTs7QUFBQSxNQUE5Q0MsUUFBOEMs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QWpWd0JrQyxJO1VBQ094RSxrREFBWSxDQUFDQyxlOzs7S0FEcEJ1RSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pblxcbWFuYWdlbWVudC1tZW51XFxzZWNvdW5kYXJ5LW1lbnUuanMuY2ZmOGJhNjE4NmE5MjgyYWY5MDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uLCBGb3JtLCBJbnB1dCwgU3dpdGNoLCBUeXBvZ3JhcGh5LCBTZWxlY3QsIG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnO1xyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuLy8gY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi8uLi8uLi9jb25maWcnKTtcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vLi4vLi4vcGFnZXMvYWRtaW4vY29uZmlnJyk7XHJcbmltcG9ydCB7IGFic29sdXRlVXJsLCBjaGVja0lzTG9naW4sIGFwaUluc3RhbmNlLCBjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lIH0gZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS91dGlscyc7XHJcbmNvbnN0IEpvZGl0RWRpdG9yID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJqb2RpdC1yZWFjdFwiKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5jb25zdCB7IFRleHQsIFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbCh7IF92aXNpYmxlLCBoaWRlTW9kYWwsIGZldGNoLCB1c2VyLCBkYXRhRWRpdCB9KSB7XHJcbiAgICBsZXQgZGl2UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW2FwaSwgY29udGV4dEhvbGRlcl0gPSBub3RpZmljYXRpb24udXNlTm90aWZpY2F0aW9uKCk7XHJcbiAgICAvLyBjb25zdCBbZGl2UmVmXSA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwYXR0ZXJuTWVudVNlbGVjdGVkLCBzZXRQYXR0ZXJuTWVudVNlbGVjdGVkXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICAgIGNvbnN0IFtwYXR0ZXJuTWVudSwgc2V0UGF0dGVybk1lbnVdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgZWRpdG9yID0gdXNlUmVmKG51bGwpXHJcbiAgICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgxKVxyXG4gICAgY29uc3QgW2lzU3ViTWVudSwgc2V0SXNTdWJNZW51XSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbaXNQYXR0ZXJuTWVudSwgc2V0SVNQYXR0ZXJuTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNTaG93LCBzZXRJc1Nob3ddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuICAgIGNvbnN0IGFjdGl2ZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgYWN0aXZlID8gc2V0QWN0aXZlKDApIDogc2V0QWN0aXZlKDEpO1xyXG4gICAgICAgIC8vIGRpdlJlZi5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xyXG4gICAgICAgIC8vIGRpdlJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gICAgfTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hQYXR0ZXJuKClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGZldGNoUGF0dGVybiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBtZW51RGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAgICAgICAnbWVudS9wYXR0ZXJuLW1lbnUnXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtZW51RGF0YSlcclxuICAgICAgICBzZXRQYXR0ZXJuTWVudShtZW51RGF0YS5kYXRhLnJlc3VsdHMpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcblxyXG5cclxuICAgICAgICAvLyBvcmdhbml6YXRpb25faWQ6IG9yZ2FuaXphdGlvbl9pZCxcclxuICAgICAgICAvLyBtZW51X3RpdGxlOiBtZW51X3RpdGxlLFxyXG4gICAgICAgIC8vIG1lbnVfZGV0YWlsOiBtZW51X2RldGFpbCxcclxuICAgICAgICAvLyBtZW51X3NlcTogbWVudV9zZXEsXHJcbiAgICAgICAgLy8gaGF2ZV9zdWI6IGhhdmVfc3ViLFxyXG4gICAgICAgIC8vIGlzX3Nob3c6IGlzX3Nob3csXHJcbiAgICAgICAgLy8gaXNfcHJpbWFyeV9tZW51OiBpc19wcmltYXJ5X21lbnUsXHJcbiAgICAgICAgLy8gaXNfcGF0dGVybl9tZW51OiBpc19wYXR0ZXJuX21lbnUsXHJcbiAgICAgICAgLy8gcGF0dGVybl9tZW51OiBwYXR0ZXJuX21lbnUsXHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIFwibWVudV9pZFwiOiBkYXRhRWRpdC5tZW51X2lkLFxyXG4gICAgICAgICAgICBcIm1lbnVfdGl0bGVcIjogdmFsdWUubWVudV90aXRsZSxcclxuICAgICAgICAgICAgXCJtZW51X2RldGFpbFwiOiBjb250ZW50ID8gdmFsdWUubWVudV9kZXRhaWwgOiBcIlwiLFxyXG4gICAgICAgICAgICBcIm1lbnVfc2VxXCI6IDk5OTk5OSxcclxuICAgICAgICAgICAgXCJpc19zaG93XCI6IGFjdGl2ZSA/IDEgOiAwLFxyXG4gICAgICAgICAgICBcImlzX3BhdHRlcm5fbWVudVwiOiB2YWx1ZS5wYXR0ZXJuX21lbnUgPT0gMSA/IDAgOiAxLFxyXG4gICAgICAgICAgICBcInBhdHRlcm5fbWVudVwiOiBwYXR0ZXJuTWVudVNlbGVjdGVkLFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkucG9zdCgnL21lbnUvbWVudS1zdWInLCBkYXRhKTtcclxuICAgICAgICBpZiAocmVnaXN0ZXJEYXRhLmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICBvcGVuTm90aWZpY2F0aW9uU3VjY2VzcygpXHJcblxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvcGVuTm90aWZpY2F0aW9uRmFpbChyZWdpc3RlckRhdGEuZGF0YS5tZXNzYWdlKVxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9OIE9LXCIpXHJcblxyXG4gICAgICAgIGhpZGVNb2RhbCgpXHJcbiAgICAgICAgb25SZXNldCgpXHJcbiAgICAgICAgZmV0Y2goKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25TdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgIGFwaS5zdWNjZXNzKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogYOC4muC4seC4meC4l+C4tuC4geC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iGAsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn4Lia4Lix4LiZ4LiX4Li24LiB4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIJyxcclxuICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvcGVuTm90aWZpY2F0aW9uRmFpbCA9IChtZXNzZ2FlKSA9PiB7XHJcbiAgICAgICAgYXBpLmVycm9yKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogYOC4nuC4muC4m+C4seC4jeC4q+C4suC4o+C4sOC4q+C4p+C5iOC4suC4h+C4geC4suC4o+C4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4pWAsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBtZXNzZ2FlLFxyXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdCBvblJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEFjdGl2ZSgxKVxyXG4gICAgICAgIHNldElzU3ViTWVudSgwKVxyXG4gICAgICAgIHNldElTUGF0dGVybk1lbnUoZmFsc2UpXHJcbiAgICAgICAgc2V0UGF0dGVybk1lbnVTZWxlY3RlZCgxKVxyXG4gICAgICAgIHNldElzU2hvdyh0cnVlKVxyXG4gICAgICAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHNlbGVjdGVkICR7dmFsdWV9YCk7XHJcbiAgICAgICAgc2V0UGF0dGVybk1lbnVTZWxlY3RlZCh2YWx1ZSlcclxuICAgICAgICBpZiAoIWlzU3ViTWVudSkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gc2V0SXNTdWJNZW51KDEpXHJcbiAgICAgICAgICAgICAgICAvLyBzZXRJU1BhdHRlcm5NZW51KHRydWUpXHJcbiAgICAgICAgICAgICAgICBzZXRJc1Nob3coZmFsc2UpXHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gc2V0SXNTdWJNZW51KDApXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gc2V0SVNQYXR0ZXJuTWVudShmYWxzZSlcclxuICAgICAgICAgICAgICAgIHNldElzU2hvdyh0cnVlKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2V0TWVudSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuXHJcbiAgICAgICAgICAgIHtjb250ZXh0SG9sZGVyfVxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtcIuC5gOC4nuC4tOC5iOC4oeC5gOC4oeC4meC4ueC4ouC5iOC4reC4ouC4guC4reC4h+C5gOC4oeC4meC4ueC4q+C4peC4seC4gSBcIiArICghZGF0YUVkaXQgPyBcIlwiIDogZGF0YUVkaXQubWVudV90aXRsZSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICAgICAgICAgIGNlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlPXtfdmlzaWJsZX1cclxuICAgICAgICAgICAgICAgIC8vIG9uT2s9eygpID0+IG9uT0soKX1cclxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZU1vZGFsKClcclxuICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmUoMSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRJc1N1Yk1lbnUoMClcclxuICAgICAgICAgICAgICAgICAgICBmb3JtLnJlc2V0RmllbGRzKCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezEwMDB9XHJcbiAgICAgICAgICAgICAgICBmb290ZXI9e251bGx9XHJcbiAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uRmluaXNoPXtvblN1Ym1pdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRNYXJrPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVudV90aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi4LiK4Li34LmI4Lit4LmA4Lih4LiZ4Li54Lii4LmI4Lit4LiiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6IFwibGVmdFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LTIvM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC5gOC4oeC4meC4ueC4ouC5iOC4reC4oicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguIrguLfguYjguK3guYDguKHguJnguLnguKLguYjguK3guKJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gY2xhc3NOYW1lPVwiZmxleCBtdC02IG1iLTAgdy0xLzNcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsIG10LTZcIiA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBsZzp0ZXh0LXJpZ2h0IHctZnVsbCBsZzp3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25SZXNldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNDMkNGRTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQzJDRkUwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMHB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSB3LWZ1bGwgbGc6dy0xLzRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGV4dC1jdXN0b20tYmxhY2sgXCI+4Lij4Li14LmA4LiL4LmH4LiXPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzA1OTY2OScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyMwNTk2NjknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwcHggIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHctZnVsbCBsZzp3LTEvNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbS13aGl0ZSBcIj7guJrguLHguJnguJfguLbguIE8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhdHRlcm5fbWVudVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi4Lij4Li54Lib4LmB4Lia4Lia4LmA4Lih4LiZ4Li54Lii4LmI4Lit4LiiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxPcHRpb24gdmFsdWU9XCIwXCI+4LiB4Liz4Lir4LiZ4LiU4LmA4Lit4LiHPC9PcHRpb24+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhdHRlcm5NZW51ID8gcGF0dGVybk1lbnUubWFwKChvYmplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE9wdGlvbiB2YWx1ZT17b2JqZWN0LnBhdHRlcm5fbWVudV9pZH0+e29iamVjdC5wYXR0ZXJuX3RpdGxlfSAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gY2xhc3NOYW1lPVwiZmxleCBtdC02IG1iLTBcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IHRleHQtbGVmdCBsZzp3LTEvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImlubGluZS1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoIGNoZWNrZWQ9e2FjdGl2ZX0gb25DbGljaz17YWN0aXZlZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm14LTIgdGV4dC1zbVwiPuC4geC4suC4o+C5geC4quC4lOC4h+C4nOC4pTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc1Nob3cgPT0gdHJ1ZSAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVudV9kZXRhaWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLguKPguLLguKLguKXguLDguYDguK3guLXguKLguJQgOlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4Lij4Liy4Lii4Lil4Liw4LmA4Lit4Li14Lii4LiUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEpvZGl0RWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtlZGl0b3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnPXtjb25maWcuY29uZmlnKHVzZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17XCI3MDBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsxfSAvLyB0YWJJbmRleCBvZiB0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17bmV3Q29udGVudCA9PiBzZXRDb250ZW50KG5ld0NvbnRlbnQpfSAvLyBwcmVmZXJyZWQgdG8gdXNlIG9ubHkgdGhpcyBvcHRpb24gdG8gdXBkYXRlIHRoZSBjb250ZW50IGZvciBwZXJmb3JtYW5jZSByZWFzb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e25ld0NvbnRlbnQgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvPn1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6IFwibGVmdFwiLCBjbGVhcjogXCJib3RoXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e2RpdlJlZn0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERyYWdMaXN0VmlldyBmcm9tIFwicmVhY3QtZHJhZy1saXN0dmlld1wiO1xyXG5pbXBvcnQgeyBEcmFnT3V0bGluZWQsIENoZWNrQ2lyY2xlT3V0bGluZWQsIE1pbnVzQ2lyY2xlT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuLyogdXRpbHMgKi9cclxuaW1wb3J0IHsgYWJzb2x1dGVVcmwsIGNoZWNrSXNMb2dpbiwgYXBpSW5zdGFuY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9taWRkbGV3YXJlL3V0aWxzJztcclxuXHJcbi8qIGNvbXBvbmVudHMgKi9cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRBZG1pbic7XHJcbmltcG9ydCBNb2RhbEFkZE1lbnUgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9tYW5hZ2VtbmV0L3NlY29uZGFyeS1tZW51L2FkZC1tZW51JztcclxuaW1wb3J0IE1vZGFsRWRpdE1lbnUgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9tYW5hZ2VtbmV0L3NlY29uZGFyeS1tZW51L2VkaXQtbWVudSc7XHJcbmltcG9ydCBNb2RhbEFkZE1lbnVTdWIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9tYW5hZ2VtbmV0L3NlY29uZGFyeS1tZW51L2FkZC1tZW51LXN1Yic7XHJcbmltcG9ydCBNb2RhbEVkaXRNZW51U3ViIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbWFuYWdlbW5ldC9wcmltYXJ5LW1lbnUvZWRpdC1tZW51LXN1Yic7XHJcblxyXG5cclxuLy8gaW1wb3J0IFVzZXJOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL1VzZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICBDYXJvdXNlbCxcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgSW1hZ2UsXHJcbiAgQnV0dG9uLFxyXG4gIElucHV0LFxyXG4gIENhcmQsXHJcbiAgTGlzdCxcclxuICBub3RpZmljYXRpb24sXHJcbiAgU3BpbixcclxuICBNb2RhbCxcclxuICBUYWcsXHJcbiAgRW1wdHlcclxufSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgY29tcGFyZVN5bmMgfSBmcm9tICdiY3J5cHRqcyc7XHJcblxyXG5jb25zdCB7IFRleHQsIFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5cclxuLypcclxuICBUaGlzIGV4YW1wbGUgdXNlcyByZWFjdC1kcmFnLWxpc3R2aWV3LCBhbmQgQW50RGVzaWduIHdoaWNoIGNhbiBiZSBmb3VuZFxyXG4gIGF0IHRoZWlyIHJlc3BlY3RpdmUgbGlua3MgYmVsb3c6XHJcbiAgaHR0cHM6Ly9naXRodWIuY29tL3JhaXNlemhhbmcvcmVhY3QtZHJhZy1saXN0dmlldyNyZWFkbWVcclxuICBodHRwczovL2FudC5kZXNpZ24vZG9jcy9yZWFjdC9pbnRyb2R1Y2VcclxuKi9cclxuXHJcbi8qIE1PQ0sgREFUQTogcGFyZW50IGxpc3QgYXMgVmFsdWUsIHN1Ykxpc3QgYXMgc3ViTGlzdCAqL1xyXG5jb25zdCBtb2NrRGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogXCJjYXRlZ29yeS1vbmVcIixcclxuICAgIHZhbHVlOiBcIkNhdGVnb3J5IE9uZVwiLFxyXG4gICAgc3ViTGlzdDogW1xyXG4gICAgICBcIkVnZXQgb2RpbyBiaWJlbmR1bSBjb21tb2RvIG1hbGVzdWFkYSBNYXR0aXMgbW9udGVzLlwiLFxyXG4gICAgICBcIk51bGxhbSBhdCByaG9uY3VzLiBFcmF0IHByZXRpdW0gcGhhcmV0cmEgYXVjdG9yLlwiLFxyXG4gICAgICBcIkp1c3RvIHNlZCBpbnRlcmR1bSBzb2Npb3NxdSBhIG1vbGVzdGllIG5hc2NldHVyIG5vc3RyYSBtZXR1cy5cIlxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwiY2F0ZWdvcnktdHdvXCIsXHJcbiAgICB2YWx1ZTogXCJDYXRlZ29yeSBUd29cIixcclxuICAgIHN1Ykxpc3Q6IFtcclxuICAgICAgXCJTZW5lY3R1cyBsaWJlcm8gYmxhbmRpdCBjb25zZWN0ZXR1ZXIgcGVuYXRpYnVzIGdyYXZpZGEgcXVpc3F1ZSBsYWNpbmlhIGlkIG51bmMuXCIsXHJcbiAgICAgIFwiRWxpdC4gQWMuIE51bGxhIGp1c3RvIG5pYmguIEZyaW5naWxsYSwgY2xhc3MgVGVtcG9yIGNvbnNlcXVhdCBwcm9pbi5cIlxyXG4gICAgXVxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuICBjb25zdCBbYXBpLCBjb250ZXh0SG9sZGVyXSA9IG5vdGlmaWNhdGlvbi51c2VOb3RpZmljYXRpb24oKTtcclxuICBjb25zdCBbbWVudXMsIHNldE1lbnVzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IHsgdXNlciwgb3JpZ2luIH0gPSBwcm9wcztcclxuICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobW9ja0RhdGEpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZGF0YURlbGV0ZSwgc2V0RGF0YURlbGV0ZV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtkYXRhRWRpdCwgc2V0RGF0YUVkaXRdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbdmlzaWJsZU1vZGFsRGVsZXRlLCBzZXRWaXNpYmxlTW9kYWxEZWxldGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3Zpc2libGVFZGl0TW9kYWwsIHNldFZpc2libGVFZGl0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3Zpc2libGVFZGl0TWVudVN1Yk1vZGFsLCBzZXRWaXNpYmxlRWRpdE1lbnVTdWJNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdmlzaWJsZUFkZFN1Yk1lbnVNb2RhbCwgc2V0VmlzaWJsZUFkZFN1Yk1lbnVNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdmlzaWJsZU1vZGFsTWVudVN1YkRlbGV0ZSwgc2V0VmlzaWJsZU1vZGFsTWVudVN1YkRlbGV0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICBmZXRjaCgpXHJcbiAgfSwgW10pXHJcblxyXG5cclxuICBjb25zdCBmZXRjaCA9IGFzeW5jIChwYXJhbXMgPSB7fSkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgLy8gc2V0VmlzaWJsZUVkaXRNb2RhbChmYWxzZSlcclxuICAgIGNvbnN0IG1lbnVEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICdtZW51P2lzX3ByaW1hcnlfbWVudT0wJm9yZ2FuaXphdGlvbl9pZD0nICsgKCF1c2VyID8gMCA6IHVzZXIub3JnYW5pemF0aW9uX2lkKVxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKG1lbnVEYXRhKVxyXG4gICAgc2V0TWVudXMobWVudURhdGEuZGF0YS5yZXN1bHRzKVxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IC8vU3RhcnQgdGhlIHRpbWVyXHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICB9LmJpbmQodGhpcyksIDgwMClcclxuXHJcbiAgfTtcclxuICAvKlxyXG4gICAgUkVPUkRFUiBBQ0NFUFRTOlxyXG4gICAgICBsaXN0OiBhcnIsIGFjY2VwdHMgYXJyYXkgb2YgZGF0YSB0byBiZSByZW9yZGVyZWQsXHJcbiAgICAgIGZyb21JbmRleDogaW50LCBvbkRyYWdTdGFydCBpbmRleCxcclxuICAgICAgdG9JbmRleDogaW50LCBvbkRyYWdFbmQgaW5kZXgsXHJcbiAgKi9cclxuXHJcbiAgY29uc3QgcmVvcmRlciA9IChsaXN0LCBzdGFydEluZGV4LCBlbmRJbmRleCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gQXJyYXkuZnJvbShsaXN0KTtcclxuICAgIGNvbnN0IFtyZW1vdmVkXSA9IHJlc3VsdC5zcGxpY2Uoc3RhcnRJbmRleCwgMSk7XHJcbiAgICByZXN1bHQuc3BsaWNlKGVuZEluZGV4LCAwLCByZW1vdmVkKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxuXHJcbiAgLypcclxuICAgIE9OIERSQUcgRU5EIEVWRU5UIEhBTkRMRVIgQUNDRVBUUzpcclxuICAgICAgZnJvbUluZGV4OiBpbnQsIG9uRHJhZ1N0YXJ0IGluZGV4LFxyXG4gICAgICB0b0luZGV4OiBpbnQsIG9uRHJhZ0VuZCBpbmRleCxcclxuICAgICAgdHlwZTogc3RyLCBSZWFjdERyYWdMaXN0VmlldyBJZGVudGlmaWVyLFxyXG4gICAgICBpbmRleDogTVVTVCBiZSBwYXJlbnQgbGlzdCBpbmRleCxcclxuICAqL1xyXG5cclxuICBjb25zdCBvbkRyYWdFbmQgPSBhc3luYyAoZnJvbUluZGV4LCB0b0luZGV4LCB0eXBlLCBpbmRleCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgLyogSUdOT1JFUyBEUkFHIElGIE9VVFNJREUgREVTSUdOQVRFRCBBUkVBICovXHJcbiAgICBpZiAodG9JbmRleCA8IDApIHJldHVybjtcclxuXHJcbiAgICAvKiBSRU9SREVSIFBBUkVOVCBPUiBTVUJMSVNULCBFTFNFIFRIUk9XIEVSUk9SICovXHJcbiAgICBpZiAodHlwZSA9PT0gXCJMSVNULUlURU1cIikge1xyXG5cclxuICAgICAgY29uc3QgX2RhdGEgPSB7XHJcbiAgICAgICAgXCJtZW51X2lkXCI6IG1lbnVzW2Zyb21JbmRleF0ubWVudV9pZCxcclxuICAgICAgICBcIm1lbnVfc2VxXCI6IHRvSW5kZXgsXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbWVudURhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLnB1dChcclxuICAgICAgICAnbWVudS9yZW9yZGVyLW1lbnUnLCBfZGF0YVxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc3QgX2RhdGFSZXZlcnQgPSB7XHJcbiAgICAgICAgXCJtZW51X2lkXCI6IG1lbnVzW3RvSW5kZXhdLm1lbnVfaWQsXHJcbiAgICAgICAgXCJtZW51X3NlcVwiOiBmcm9tSW5kZXgsXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbWVudURhdGFSZXZlcnQgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLnB1dChcclxuICAgICAgICAnbWVudS9yZW9yZGVyLW1lbnUnLCBfZGF0YVJldmVydFxyXG4gICAgICApO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhtZW51RGF0YVJldmVydClcclxuICAgICAgcmV0dXJuIGZldGNoKClcclxuICAgICAgLy8gY29uc3QgY2F0ZWdvcmllcyA9IHJlb3JkZXIoZGF0YSwgZnJvbUluZGV4LCB0b0luZGV4KTtcclxuICAgICAgLy8gcmV0dXJuIHNldERhdGEoY2F0ZWdvcmllcyk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiU1VCTElTVC1JVEVNXCIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCIgb25EcmFnRW5kIExJU1QtSVRFTVwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhmcm9tSW5kZXgpXHJcbiAgICAgIGNvbnNvbGUubG9nKHRvSW5kZXgpXHJcbiAgICAgIGNvbnNvbGUubG9nKHR5cGUpXHJcbiAgICAgIGNvbnNvbGUubG9nKGluZGV4KVxyXG4gICAgICBjb25zb2xlLmxvZyhtZW51c1tpbmRleF0ubWVudV9zdWJzW2Zyb21JbmRleF0pXHJcbiAgICAgIGNvbnNvbGUubG9nKG1lbnVzW2luZGV4XS5tZW51X3N1YnNbdG9JbmRleF0pXHJcbiAgICAgIGNvbnN0IF9kYXRhID0ge1xyXG4gICAgICAgIFwibWVudV9zdWJfaWRcIjogbWVudXNbaW5kZXhdLm1lbnVfc3Vic1tmcm9tSW5kZXhdLm1lbnVfc3ViX2lkLFxyXG4gICAgICAgIFwibWVudV9zZXFcIjogdG9JbmRleCxcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBtZW51RGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkucHV0KFxyXG4gICAgICAgICdtZW51L3Jlb3JkZXItbWVudS1zdWInLCBfZGF0YVxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc3QgX2RhdGFSZXZlcnQgPSB7XHJcbiAgICAgICAgXCJtZW51X3N1Yl9pZFwiOiBtZW51c1tpbmRleF0ubWVudV9zdWJzW3RvSW5kZXhdLm1lbnVfc3ViX2lkLFxyXG4gICAgICAgIFwibWVudV9zZXFcIjogZnJvbUluZGV4LFxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG1lbnVEYXRhUmV2ZXJ0ID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5wdXQoXHJcbiAgICAgICAgJ21lbnUvcmVvcmRlci1tZW51LXN1YicsIF9kYXRhUmV2ZXJ0XHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyBjb25zdCBzdWJMaXN0ID0gcmVvcmRlcihkYXRhW2luZGV4XS5zdWJMaXN0LCBmcm9tSW5kZXgsIHRvSW5kZXgpO1xyXG4gICAgICAvLyBjb25zdCBjYXRlZ29yaWVzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgIC8vIGNhdGVnb3JpZXNbaW5kZXhdLnN1Ykxpc3QgPSBzdWJMaXN0O1xyXG4gICAgICAvLyByZXR1cm4gc2V0RGF0YShjYXRlZ29yaWVzKTtcclxuICAgICAgcmV0dXJuIGZldGNoKClcclxuICAgIH0gZWxzZSByZXR1cm4gbmV3IEVycm9yKFwiTk9UIEEgVkFMSUQgTElTVFwiKTtcclxuICB9O1xyXG4gIC8qXFxcclxuICAgIG5vZGVTZWxlY3Rvcj17fSwgRFJBR0dBQkxFIEVMRU1FTlQgSURFTlRJRklFUiwgaS5lICdsaScsIGFudC1saXN0LmRyYWdnYWJsZT5cclxuICAgIEFMTCBTVFlMRVMgQVBQTElFRCBUTyBsaW5lQ2xhc3NOYW1lIE1VU1QgQkUgT1ZFUlJJRERFTiBXSVRIICFpbXBvcnRhbnRcclxuICAqL1xyXG5cclxuICBjb25zdCBvbkRlbGV0ZSA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ0RFTEVURScpXHJcblxyXG4gICAgY29uc3QgcmVnaXN0ZXJEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5kZWxldGUoJ21lbnUvJyArIGRhdGFEZWxldGUubWVudV9pZCwge30pO1xyXG4gICAgaWYgKHJlZ2lzdGVyRGF0YS5kYXRhLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MoKVxyXG4gICAgICAvLyBmZXRjaE9yZ2FuaXphdGlvbkRhdGEoKTtcclxuICAgICAgc2V0VmlzaWJsZU1vZGFsRGVsZXRlKGZhbHNlKVxyXG4gICAgICBmZXRjaCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvbkZhaWwocmVnaXN0ZXJEYXRhLmRhdGEubWVzc2FnZSlcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IG9uTWVudVN1YkRlbGV0ZSA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ0RFTEVURScpXHJcblxyXG4gICAgY29uc3QgcmVnaXN0ZXJEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5kZWxldGUoJ21lbnUtc3ViLycgKyBkYXRhRGVsZXRlLm1lbnVfc3ViX2lkLCB7fSk7XHJcbiAgICBpZiAocmVnaXN0ZXJEYXRhLmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICBvcGVuTm90aWZpY2F0aW9uU3VjY2VzcygpXHJcbiAgICAgIC8vIGZldGNoT3JnYW5pemF0aW9uRGF0YSgpO1xyXG4gICAgICBzZXRWaXNpYmxlTW9kYWxNZW51U3ViRGVsZXRlKGZhbHNlKVxyXG4gICAgICBmZXRjaCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvbkZhaWwocmVnaXN0ZXJEYXRhLmRhdGEubWVzc2FnZSlcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBvcGVuTm90aWZpY2F0aW9uU3VjY2VzcyA9ICgpID0+IHtcclxuICAgIGFwaS5zdWNjZXNzKHtcclxuICAgICAgbWVzc2FnZTogYOC4peC4muC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iGAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAn4Lil4Lia4LiC4LmJ4Lit4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIJyxcclxuICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvbkZhaWwgPSAobWVzc2dhZSkgPT4ge1xyXG4gICAgYXBpLmVycm9yKHtcclxuICAgICAgbWVzc2FnZTogYOC4nuC4muC4m+C4seC4jeC4q+C4suC4o+C4sOC4q+C4p+C5iOC4suC4h+C4geC4suC4o+C4peC4muC4guC5ieC4reC4oeC4ueC4pWAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBtZXNzZ2FlLFxyXG4gICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoaWRlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRWaXNpYmxlTW9kYWxEZWxldGUoZmFsc2UpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGlkZU1lbnVTdWJNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldFZpc2libGVNb2RhbE1lbnVTdWJEZWxldGUoZmFsc2UpXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd01vZGFsID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdkYXRhIGRlbGV0ZCcpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgc2V0RGF0YURlbGV0ZShkYXRhKVxyXG4gICAgc2V0VmlzaWJsZU1vZGFsRGVsZXRlKHRydWUpXHJcbiAgfTtcclxuICBjb25zdCBzaG93RGVsZXRNZW51U3ViTW9kYWwgPSAoZGF0YSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2RhdGEgZGVsZXRkJylcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBzZXREYXRhRGVsZXRlKGRhdGEpXHJcbiAgICBzZXRWaXNpYmxlTW9kYWxNZW51U3ViRGVsZXRlKHRydWUpXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25jbGlrRWRpdE1vZGFsID0gKHZhbHVlLCBvYmopID0+IHtcclxuICAgIC8vIGNvbXBhcmVTeW5jXHJcbiAgICBjb25zb2xlLmxvZyhcIm9uY2xpa0VkaXRNb2RhbFwiKVxyXG4gICAgc2V0RGF0YUVkaXQob2JqKVxyXG4gICAgc2V0VmlzaWJsZUVkaXRNb2RhbCh2YWx1ZSlcclxuICB9O1xyXG5cclxuICBjb25zdCBvbmNsaWtFZGl0TWVudVN1Yk1vZGFsID0gKHZhbHVlLCBvYmopID0+IHtcclxuICAgIC8vIGNvbXBhcmVTeW5jXHJcbiAgICBzZXREYXRhRWRpdChvYmopXHJcbiAgICBzZXRWaXNpYmxlRWRpdE1lbnVTdWJNb2RhbCh2YWx1ZSlcclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3Qgb25jbGlrQWRkU3ViTWVudU1vZGFsID0gKHZhbHVlLCBvYmopID0+IHtcclxuICAgIC8vIGNvbXBhcmVTeW5jXHJcbiAgICBjb25zb2xlLmxvZyhcIm9uY2xpa0VkaXRNb2RhbFwiKVxyXG4gICAgc2V0RGF0YUVkaXQob2JqKVxyXG4gICAgc2V0VmlzaWJsZUFkZFN1Yk1lbnVNb2RhbCh2YWx1ZSlcclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3QgaGlkZUVkaXRNb2RhbCA9ICgpID0+IHtcclxuICAgIC8vIHNldFZpc2libGVNb2RhbERlbGV0ZShmYWxzZSlcclxuICAgIHNldFZpc2libGVFZGl0TW9kYWwoZmFsc2UpXHJcblxyXG4gIH07XHJcbiAgY29uc3QgaGlkZVN1Yk1lbnVNb2RhbCA9ICgpID0+IHtcclxuICAgIC8vIHNldFZpc2libGVNb2RhbERlbGV0ZShmYWxzZSlcclxuICAgIHNldFZpc2libGVBZGRTdWJNZW51TW9kYWwoZmFsc2UpXHJcblxyXG4gIH07XHJcbiAgY29uc3QgaGlkZUVkaXRNZW51U3ViTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAvLyBzZXRWaXNpYmxlTW9kYWxEZWxldGUoZmFsc2UpXHJcbiAgICBzZXRWaXNpYmxlRWRpdE1lbnVTdWJNb2RhbChmYWxzZSlcclxuXHJcbiAgfTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPVwiR292ZXJubWVudCAtIEFkbWluIG1hbmFnZW1lbnRcIiB1cmw9e29yaWdpbn0gb3JpZ2luPXtvcmlnaW59IHVzZXI9e2xvZ2lufVxyXG4gICAgICBpc01haW49e3RydWV9XHJcbiAgICAgIGluZGV4U3ViTWVudT17XCIyXCJ9XHJcbiAgICAgIGluZGV4TWVudT17XCJzdWItMi0xXCJ9XHJcbiAgICAgIHRpdGxlUGFnZT17XCLguYDguKHguJnguLnguKPguK3guIdcIn1cclxuICAgICAgX3JvdXRlcz17W1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhdGg6ICcvYWRtaW4vZGFzaGJvcmFkJyxcclxuICAgICAgICAgIGJyZWFkY3J1bWJOYW1lOiAn4Lir4LiZ4LmJ4Liy4Lir4Lil4Lix4LiBJyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICAgIGJyZWFkY3J1bWJOYW1lOiAn4LmA4Lih4LiZ4Li54Lij4Lit4LiHJyxcclxuICAgICAgICB9XX1cclxuICAgID5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7Y29udGV4dEhvbGRlcn1cclxuICAgICAgICA8TW9kYWxBZGRNZW51IGZldGNoPXtmZXRjaH0gdXNlcj17dXNlcn0gLz5cclxuICAgICAgICA8TW9kYWxFZGl0TWVudSBfdmlzaWJsZT17dmlzaWJsZUVkaXRNb2RhbH0gaGlkZUVkaXRNb2RhbD17aGlkZUVkaXRNb2RhbH0gZmV0Y2g9e2ZldGNofSB1c2VyPXt1c2VyfSBkYXRhRWRpdD17ZGF0YUVkaXR9IC8+XHJcbiAgICAgICAgPE1vZGFsRWRpdE1lbnVTdWIgX3Zpc2libGU9e3Zpc2libGVFZGl0TWVudVN1Yk1vZGFsfSBoaWRlTW9kYWw9e2hpZGVFZGl0TWVudVN1Yk1vZGFsfSBmZXRjaD17ZmV0Y2h9IHVzZXI9e3VzZXJ9IGRhdGFFZGl0PXtkYXRhRWRpdH0gLz5cclxuICAgICAgICA8TW9kYWxBZGRNZW51U3ViIF92aXNpYmxlPXt2aXNpYmxlQWRkU3ViTWVudU1vZGFsfSBoaWRlTW9kYWw9e2hpZGVTdWJNZW51TW9kYWx9IGZldGNoPXtmZXRjaH0gdXNlcj17dXNlcn0gZGF0YUVkaXQ9e2RhdGFFZGl0fSAvPlxyXG4gICAgICAgIDxTcGluIHNwaW5uaW5nPXtsb2FkaW5nfT5cclxuICAgICAgICAgIDxSZWFjdERyYWdMaXN0Vmlld1xyXG4gICAgICAgICAgICBub2RlU2VsZWN0b3I9XCIuYW50LWxpc3QuZHJhZ2dhYmxlXCJcclxuICAgICAgICAgICAgbGluZUNsYXNzTmFtZT1cImRyYWdMaW5lXCJcclxuICAgICAgICAgICAgb25EcmFnRW5kPXsoZnJvbUluZGV4LCB0b0luZGV4KSA9PlxyXG4gICAgICAgICAgICAgIG9uRHJhZ0VuZChmcm9tSW5kZXgsIHRvSW5kZXgsIFwiTElTVC1JVEVNXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge21lbnVzLmxlbmd0aCA9PSAwICYmIDxFbXB0eSAvPn1cclxuICAgICAgICAgICAge21lbnVzLm1hcCgob2JqLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9e1xyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5LlRleHQgc3Ryb25nIGNsYXNzTmFtZT1cImdyYWJiYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPERyYWdPdXRsaW5lZCBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIHtvYmoubWVudV90aXRsZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5LlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhZyBjb2xvcj17b2JqLmlzX3Nob3cgPT0gMSA/IFwic3VjY2Vzc1wiIDogXCJkZWZhdWx0XCJ9IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMTBweFwiLCBtYXJnaW5SaWdodDogXCIwcHhcIiB9fT57b2JqLmlzX3Nob3cgPT0gMSA/IFwi4LmD4LiK4LmJ4LiH4Liy4LiZXCIgOiBcIuC5hOC4oeC5iOC5g+C4iuC5ieC4h+C4suC4mVwifTwvVGFnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibWwtMlwiIHR5cGU9XCJkZWZhdWx0XCIgb25DbGljaz17KCkgPT4geyBvbmNsaWtFZGl0TW9kYWwodHJ1ZSwgb2JqKSB9fT7guYHguIHguYnguYTguII8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7b2JqLmhhdmVfc3ViID09IDEgJiYgPEJ1dHRvbiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzA1OTY2OVwiLCBjb2xvcjogXCJ3aGl0ZVwiLCBib3JkZXJDb2xvcjogXCIjMDU5NjY5XCIgfX0gb25DbGljaz17KCkgPT4geyBvbmNsaWtBZGRTdWJNZW51TW9kYWwodHJ1ZSwgb2JqKSB9fSBjbGFzc05hbWU9XCJtbC0yXCIgdHlwZT1cInN1Y2Nlc3NcIj7guYDguJ7guLTguYjguKHguYDguKHguJnguLnguKLguYjguK3guKI8L0J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtbC0yXCIgdHlwZT1cImRhbmdlclwiIG9uQ2xpY2s9eygpID0+IHNob3dNb2RhbChvYmopfT7guKXguJo8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJhZ2dhYmxlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UmVhY3REcmFnTGlzdFZpZXdcclxuICAgICAgICAgICAgICAgICAgbm9kZVNlbGVjdG9yPVwiLmFudC1saXN0LWl0ZW0uZHJhZ2dhYmxlLWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICBsaW5lQ2xhc3NOYW1lPVwiZHJhZ0xpbmVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkRyYWdFbmQ9eyhmcm9tSW5kZXgsIHRvSW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgb25EcmFnRW5kKGZyb21JbmRleCwgdG9JbmRleCwgXCJTVUJMSVNULUlURU1cIiwgaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge29iai5oYXZlX3N1YiA9PSAxICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgICAge29iai5tZW51X3N1YnMubWFwKChpdGVtLCBpbmRleDIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXtpbmRleDJ9IGNsYXNzTmFtZT1cImRyYWdnYWJsZS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnT3V0bGluZWQgY2xhc3NOYW1lPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YSB0aXRsZT17aXRlbS5tZW51X3RpdGxlfSBjbGFzc05hbWU9XCJncmFiYmFibGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFnIGNvbG9yPXtpdGVtLmlzX3Nob3cgPT0gMSA/IFwic3VjY2Vzc1wiIDogXCJkZWZhdWx0XCJ9IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMTBweFwiLCBtYXJnaW5SaWdodDogXCIxMHB4XCIgfX0+e2l0ZW0uaXNfc2hvdyA9PSAxID8gXCLguYPguIrguYnguIfguLLguJlcIiA6IFwi4LmE4Lih4LmI4LmD4LiK4LmJ4LiH4Liy4LiZXCJ9PC9UYWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibXItMVwiIHR5cGU9XCJkZWZhdWx0XCIgb25DbGljaz17KCkgPT4geyBvbmNsaWtFZGl0TWVudVN1Yk1vZGFsKHRydWUsIGl0ZW0pIH19PuC5geC4geC5ieC5hOC4gjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1yLTJcIiB0eXBlPVwiZGFuZ2VyXCIgb25DbGljaz17KCkgPT4gc2hvd0RlbGV0TWVudVN1Yk1vZGFsKGl0ZW0pfT7guKXguJo8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdERyYWdMaXN0Vmlldz5cclxuICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICkpfVxyXG5cclxuXHJcbiAgICAgICAgICA8L1JlYWN0RHJhZ0xpc3RWaWV3PlxyXG4gICAgICAgIDwvU3Bpbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIuC4hOC4uOC4k+C4leC5ieC4reC4h+C4geC4suC4o+C4peC4muC4guC5ieC4reC4oeC4ueC4peC4q+C4o+C4t+C4reC5hOC4oeC5iD9cIlxyXG4gICAgICAgIHZpc2libGU9e3Zpc2libGVNb2RhbERlbGV0ZX1cclxuICAgICAgICBvbk9rPXtvbkRlbGV0ZX1cclxuICAgICAgICBvbkNhbmNlbD17aGlkZU1vZGFsfVxyXG4gICAgICAgIG9rVGV4dD1cIuC4peC4mlwiXHJcbiAgICAgICAgY2FuY2VsVGV4dD1cIuC4ouC4geC5gOC4peC4tOC4gVwiXHJcbiAgICAgICAgb2tCdXR0b25Qcm9wcz17e1xyXG4gICAgICAgICAgJ3R5cGUnOiBcInByaW1hcnlcIixcclxuICAgICAgICAgICdkYW5nZXInOiB0cnVlXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxwPuC4hOC4uOC4k+C4leC5ieC4reC4h+C4geC4suC4o+C4peC4miBcIntkYXRhRGVsZXRlID8gZGF0YURlbGV0ZS5tZW51X3RpdGxlIDogXCJcIn1cIiDguKvguKPguLfguK3guYTguKHguYg/ICA8L3A+XHJcblxyXG4gICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCLguITguLjguJPguJXguYnguK3guIfguIHguLLguKPguKXguJrguILguYnguK3guKHguLnguKXguKvguKPguLfguK3guYTguKHguYg/XCJcclxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlTW9kYWxNZW51U3ViRGVsZXRlfVxyXG4gICAgICAgIG9uT2s9e29uTWVudVN1YkRlbGV0ZX1cclxuICAgICAgICBvbkNhbmNlbD17aGlkZU1lbnVTdWJNb2RhbH1cclxuICAgICAgICBva1RleHQ9XCLguKXguJpcIlxyXG4gICAgICAgIGNhbmNlbFRleHQ9XCLguKLguIHguYDguKXguLTguIFcIlxyXG4gICAgICAgIG9rQnV0dG9uUHJvcHM9e3tcclxuICAgICAgICAgICd0eXBlJzogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgICAnZGFuZ2VyJzogdHJ1ZVxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8cD7guITguLjguJPguJXguYnguK3guIfguIHguLLguKPguKXguJogXCJ7ZGF0YURlbGV0ZSA/IGRhdGFEZWxldGUubWVudV90aXRsZSA6IFwiXCJ9XCIg4Lir4Lij4Li34Lit4LmE4Lih4LmIPyAgPC9wPlxyXG5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuLyogZ2V0U2VydmVyU2lkZVByb3BzICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgcmVxIH0gPSBjb250ZXh0O1xyXG4gIGNvbnN0IHsgb3JpZ2luIH0gPSBhYnNvbHV0ZVVybChyZXEpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgb3JpZ2luLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=