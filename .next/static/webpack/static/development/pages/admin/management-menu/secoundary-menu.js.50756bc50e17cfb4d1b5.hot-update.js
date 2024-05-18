webpackHotUpdate("static\\development\\pages\\admin\\management-menu\\secoundary-menu.js",{

/***/ "./components/managemnet/secondary-menu/edit-menu.jsx":
/*!************************************************************!*\
  !*** ./components/managemnet/secondary-menu/edit-menu.jsx ***!
  \************************************************************/
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




var _jsxFileName = "D:\\govermentlt\\components\\managemnet\\secondary-menu\\edit-menu.jsx",
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
      hideEditModal = _ref.hideEditModal,
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
                "is_primary_menu": 0,
                "is_pattern_menu": value.pattern_menu == 1 ? 0 : 1,
                "pattern_menu": patternMenuSelected
              };
              console.log(data);
              _context3.next = 4;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["apiInstance"])().put('/menu/' + (dataEdit ? dataEdit.menu_id : 0), data);

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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, contextHolder, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    title: "แก้ไขเมนูรอง " + (!dataEdit ? "" : dataEdit.menu_title),
    className: "mt-4",
    centered: true,
    visible: _visible // onOk={() => onOK()}
    ,
    onCancel: function onCancel() {
      hideEditModal();
      setActive(1);
      setIsSubMenu(0);
      form.resetFields();
    },
    width: 1000,
    footer: null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
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
      lineNumber: 219,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    name: "menu_title",
    label: "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E19\u0E39",
    className: "block text-gray-700 text-sm font-bold mb-2 w-2/3",
    style: {
      "float": "left"
    },
    rules: [{
      required: true,
      message: 'กรุณากรอกชื่อเมนู'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
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
      lineNumber: 239,
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
      lineNumber: 246,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "text-center lg:text-right w-full lg:w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
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
      lineNumber: 250,
      columnNumber: 33
    }
  }, __jsx(Text, {
    className: "text-custom-black ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
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
      lineNumber: 267,
      columnNumber: 33
    }
  }, __jsx(Text, {
    className: "text-custom-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 37
    }
  }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    name: "pattern_menu",
    label: "\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E40\u0E21\u0E19\u0E39",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Select"], {
    defaultValue: 1,
    className: "w-full",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 25
    }
  }, patternMenu ? patternMenu.map(function (object) {
    return __jsx(Option, {
      value: object.pattern_menu_id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
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
    className: "inline-flex text-left lg:w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 29
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 33
    }
  }, __jsx("li", {
    className: "inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 37
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
    checked: active,
    onClick: actived,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "mx-2 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 41
    }
  }, "\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25")), __jsx("li", {
    className: "inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
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
      lineNumber: 310,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "mx-2 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
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
      lineNumber: 323,
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
      lineNumber: 335,
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
      lineNumber: 351,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hbmFnZW1uZXQvc2Vjb25kYXJ5LW1lbnUvZWRpdC1tZW51LmpzeCJdLCJuYW1lcyI6WyJPcHRpb24iLCJTZWxlY3QiLCJUZXh0QXJlYSIsIklucHV0IiwiY29uZmlnIiwicmVxdWlyZSIsIkpvZGl0RWRpdG9yIiwiZHluYW1pYyIsInNzciIsIlRleHQiLCJUeXBvZ3JhcGh5IiwiVGl0bGUiLCJtb2RhbCIsIl92aXNpYmxlIiwiaGlkZUVkaXRNb2RhbCIsImZldGNoIiwidXNlciIsImRhdGFFZGl0IiwiZGl2UmVmIiwidXNlUmVmIiwibm90aWZpY2F0aW9uIiwidXNlTm90aWZpY2F0aW9uIiwiYXBpIiwiY29udGV4dEhvbGRlciIsInVzZVN0YXRlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJwYXR0ZXJuTWVudVNlbGVjdGVkIiwic2V0UGF0dGVybk1lbnVTZWxlY3RlZCIsInBhdHRlcm5NZW51Iiwic2V0UGF0dGVybk1lbnUiLCJlZGl0b3IiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImlzU3ViTWVudSIsInNldElzU3ViTWVudSIsImlzU2hvdyIsInNldElzU2hvdyIsIm5hbWUiLCJ2YWx1ZSIsImZpZWxkcyIsInNldEZpZWxkcyIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsImFjdGl2ZWQiLCJ1c2VFZmZlY3QiLCJmZXRjaFBhdHRlcm4iLCJmZXRjaEVkaXREYXRhIiwiYXBpSW5zdGFuY2UiLCJnZXQiLCJtZW51RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwicmVzdWx0cyIsImlzX3Nob3ciLCJoYXZlX3N1YiIsInBhdHRlcm5fbWVudSIsIm1lbnVfdGl0bGUiLCJtZW51X2RldGFpbCIsIm9uU3VibWl0SGFuZGxlciIsInB1dCIsIm1lbnVfaWQiLCJyZWdpc3RlckRhdGEiLCJzdGF0dXMiLCJvcGVuTm90aWZpY2F0aW9uU3VjY2VzcyIsIm9wZW5Ob3RpZmljYXRpb25GYWlsIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJkZXNjcmlwdGlvbiIsInBsYWNlbWVudCIsIm1lc3NnYWUiLCJlcnJvciIsIm9uUmVzZXQiLCJoYW5kbGVDaGFuZ2UiLCJyZXNldEZpZWxkcyIsInJlcXVpcmVkIiwibWFyZ2luQm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJtYXAiLCJvYmplY3QiLCJwYXR0ZXJuX21lbnVfaWQiLCJwYXR0ZXJuX3RpdGxlIiwibmV3Q29udGVudCIsImNsZWFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBUUEsTUFBUixHQUFtQkMsMkNBQW5CLENBQVFELE1BQVI7QUFDQSxJQUFRRSxRQUFSLEdBQXFCQywwQ0FBckIsQ0FBUUQsUUFBUixDLENBQ0E7O0FBQ0EsSUFBTUUsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDREQUFELENBQXRCOztBQUNBO0FBQ0EsSUFBTUMsV0FBVyxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSx3SkFBTjtBQUFBLENBQUQsRUFBOEI7QUFBRUMsS0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBO0FBQUEsa0NBQWhCLG9FQUFnQjtBQUFBO0FBQUEsY0FBaEIsYUFBZ0I7QUFBQTtBQUFBLENBQTlCLENBQTNCO01BQU1GLFc7QUFDTixJQUFRRyxJQUFSLEdBQXdCQywrQ0FBeEIsQ0FBUUQsSUFBUjtBQUFBLElBQWNFLEtBQWQsR0FBd0JELCtDQUF4QixDQUFjQyxLQUFkO0FBQ2UsU0FBU0MsS0FBVCxPQUFtRTtBQUFBOztBQUFBOztBQUFBLE1BQWxEQyxRQUFrRCxRQUFsREEsUUFBa0Q7QUFBQSxNQUF4Q0MsYUFBd0MsUUFBeENBLGFBQXdDO0FBQUEsTUFBekJDLEtBQXlCLFFBQXpCQSxLQUF5QjtBQUFBLE1BQWxCQyxJQUFrQixRQUFsQkEsSUFBa0I7QUFBQSxNQUFa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T0FBRyxFQUFFdkMsTUFEVDtBQUVJLFNBQUssRUFBRUMsT0FGWDtBQUdJLFVBQU0sRUFBRTVCLE1BQU0sQ0FBQ0EsTUFBUCxDQUFjWSxJQUFkLENBSFo7QUFJSSxVQUFNLEVBQUUsT0FKWjtBQUtJLFlBQVEsRUFBRSxDQUxkLENBS2lCO0FBTGpCO0FBTUksVUFBTSxFQUFFLGdCQUFBMkUsVUFBVTtBQUFBLGFBQUkxRCxVQUFVLENBQUMwRCxVQUFELENBQWQ7QUFBQSxLQU50QixDQU1rRDtBQU5sRDtBQU9JLFlBQVEsRUFBRSxrQkFBQUEsVUFBVSxFQUFJLENBQUcsQ0FQL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpKLENBRGUsQ0F2R3ZCLENBaEJKLEVBb0pJO0FBQUssU0FBSyxFQUFFO0FBQUUsZUFBTyxNQUFUO0FBQWlCQyxXQUFLLEVBQUU7QUFBeEIsS0FBWjtBQUNJLE9BQUcsRUFBRTFFLE1BRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBKSixDQUZKLENBREo7QUE4Skg7O0dBMVZ1Qk4sSztVQUVTUSxpREFBWSxDQUFDQyxlLEVBaUIzQnVCLHlDQUFJLENBQUNDLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFkbWluXFxtYW5hZ2VtZW50LW1lbnVcXHNlY291bmRhcnktbWVudS5qcy41MDc1NmJjNTBlMTdjZmI0ZDFiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24sIEZvcm0sIElucHV0LCBTd2l0Y2gsIFR5cG9ncmFwaHksIFNlbGVjdCwgbm90aWZpY2F0aW9uIH0gZnJvbSAnYW50ZCc7XHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG4vLyBjb25zdCBjb25maWcgPSByZXF1aXJlKCcuLy4uLy4uL2NvbmZpZycpO1xyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi8uLi8uLi9wYWdlcy9hZG1pbi9jb25maWcnKTtcclxuaW1wb3J0IHsgYWJzb2x1dGVVcmwsIGNoZWNrSXNMb2dpbiwgYXBpSW5zdGFuY2UsIGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUgfSBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL3V0aWxzJztcclxuY29uc3QgSm9kaXRFZGl0b3IgPSBkeW5hbWljKCgpID0+IGltcG9ydChcImpvZGl0LXJlYWN0XCIpLCB7IHNzcjogZmFsc2UgfSk7XHJcbmNvbnN0IHsgVGV4dCwgVGl0bGUgfSA9IFR5cG9ncmFwaHk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsKHsgX3Zpc2libGUsIGhpZGVFZGl0TW9kYWwsIGZldGNoLCB1c2VyLCBkYXRhRWRpdCB9KSB7XHJcbiAgICBsZXQgZGl2UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW2FwaSwgY29udGV4dEhvbGRlcl0gPSBub3RpZmljYXRpb24udXNlTm90aWZpY2F0aW9uKCk7XHJcbiAgICAvLyBjb25zdCBbZGl2UmVmXSA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwYXR0ZXJuTWVudVNlbGVjdGVkLCBzZXRQYXR0ZXJuTWVudVNlbGVjdGVkXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICAgIGNvbnN0IFtwYXR0ZXJuTWVudSwgc2V0UGF0dGVybk1lbnVdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgZWRpdG9yID0gdXNlUmVmKG51bGwpXHJcbiAgICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgxKVxyXG4gICAgY29uc3QgW2lzU3ViTWVudSwgc2V0SXNTdWJNZW51XSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbaXNTaG93LCBzZXRJc1Nob3ddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbZmllbGRzLCBzZXRGaWVsZHNdID0gdXNlU3RhdGUoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogWydpbnRyb190aXRsZSddLFxyXG4gICAgICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgfSxcclxuICAgIF0pO1xyXG4gICAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcbiAgICBjb25zdCBhY3RpdmVkID0gKCkgPT4ge1xyXG4gICAgICAgIGFjdGl2ZSA/IHNldEFjdGl2ZSgwKSA6IHNldEFjdGl2ZSgxKTtcclxuICAgICAgICAvLyBkaXZSZWYuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuICAgICAgICAvLyBkaXZSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICAgIH07XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFZpc2libGUoX3Zpc2libGUpXHJcbiAgICAgICAgZmV0Y2hQYXR0ZXJuKClcclxuICAgICAgICBmZXRjaEVkaXREYXRhKClcclxuICAgIH0sIFtkYXRhRWRpdF0pXHJcblxyXG4gICAgY29uc3QgZmV0Y2hQYXR0ZXJuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lbnVEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICAgICAgICdtZW51L3BhdHRlcm4tbWVudSdcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1lbnVEYXRhKVxyXG4gICAgICAgIHNldFBhdHRlcm5NZW51KG1lbnVEYXRhLmRhdGEucmVzdWx0cylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmZXRjaEVkaXREYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhRWRpdCkge1xyXG4gICAgICAgICAgICBzZXRBY3RpdmUoZGF0YUVkaXQuaXNfc2hvdylcclxuICAgICAgICAgICAgc2V0SXNTdWJNZW51KGRhdGFFZGl0LmhhdmVfc3ViKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGFFZGl0IHVzZUVmZmVjdFwiKVxyXG4gICAgICAgICAgICBzZXRQYXR0ZXJuTWVudVNlbGVjdGVkKGRhdGFFZGl0LnBhdHRlcm5fbWVudSlcclxuICAgICAgICAgICAgaWYgKGRhdGFFZGl0LmhhdmVfc3ViID09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhRWRpdC5wYXR0ZXJuX21lbnUgIT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldElzU2hvdyhmYWxzZSlcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldElzU2hvdyh0cnVlKVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldElzU2hvdyhmYWxzZSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBzZXRGaWVsZHMoW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFsnbWVudV90aXRsZSddLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAoIWRhdGFFZGl0ID8gXCJcIiA6IGRhdGFFZGl0Lm1lbnVfdGl0bGUpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBbJ3BhdHRlcm5fbWVudSddLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAoIWRhdGFFZGl0ID8gXCJcIiA6IGRhdGFFZGl0LnBhdHRlcm5fbWVudSksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFsnbWVudV9kZXRhaWwnXSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKCFkYXRhRWRpdCA/IFwiXCIgOiBkYXRhRWRpdC5tZW51X2RldGFpbCksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcblxyXG5cclxuICAgICAgICAvLyBvcmdhbml6YXRpb25faWQ6IG9yZ2FuaXphdGlvbl9pZCxcclxuICAgICAgICAvLyBtZW51X3RpdGxlOiBtZW51X3RpdGxlLFxyXG4gICAgICAgIC8vIG1lbnVfZGV0YWlsOiBtZW51X2RldGFpbCxcclxuICAgICAgICAvLyBtZW51X3NlcTogbWVudV9zZXEsXHJcbiAgICAgICAgLy8gaGF2ZV9zdWI6IGhhdmVfc3ViLFxyXG4gICAgICAgIC8vIGlzX3Nob3c6IGlzX3Nob3csXHJcbiAgICAgICAgLy8gaXNfcHJpbWFyeV9tZW51OiBpc19wcmltYXJ5X21lbnUsXHJcbiAgICAgICAgLy8gaXNfcGF0dGVybl9tZW51OiBpc19wYXR0ZXJuX21lbnUsXHJcbiAgICAgICAgLy8gcGF0dGVybl9tZW51OiBwYXR0ZXJuX21lbnUsXHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIFwibWVudV90aXRsZVwiOiB2YWx1ZS5tZW51X3RpdGxlLFxyXG4gICAgICAgICAgICBcIm1lbnVfZGV0YWlsXCI6IGNvbnRlbnQgPyB2YWx1ZS5tZW51X2RldGFpbCA6IFwiXCIsXHJcbiAgICAgICAgICAgIC8vIFwibWVudV9zZXFcIjogMCxcclxuICAgICAgICAgICAgXCJoYXZlX3N1YlwiOiBpc1N1Yk1lbnUgPyAxIDogMCxcclxuICAgICAgICAgICAgXCJpc19zaG93XCI6IGFjdGl2ZSA/IDEgOiAwLFxyXG4gICAgICAgICAgICBcImlzX3ByaW1hcnlfbWVudVwiOiAwLFxyXG4gICAgICAgICAgICBcImlzX3BhdHRlcm5fbWVudVwiOiB2YWx1ZS5wYXR0ZXJuX21lbnUgPT0gMSA/IDAgOiAxLFxyXG4gICAgICAgICAgICBcInBhdHRlcm5fbWVudVwiOiBwYXR0ZXJuTWVudVNlbGVjdGVkLFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkucHV0KCcvbWVudS8nICsgKGRhdGFFZGl0ID8gZGF0YUVkaXQubWVudV9pZCA6IDApLCBkYXRhKTtcclxuICAgICAgICBpZiAocmVnaXN0ZXJEYXRhLmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICBvcGVuTm90aWZpY2F0aW9uU3VjY2VzcygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3Blbk5vdGlmaWNhdGlvbkZhaWwocmVnaXN0ZXJEYXRhLmRhdGEubWVzc2FnZSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9OIE9LXCIpXHJcbiAgICAgICAgLy8gc2V0VmlzaWJsZShmYWxzZSlcclxuICAgICAgICAvLyBvblJlc2V0KClcclxuICAgICAgICBmZXRjaCgpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgYXBpLnN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBg4Lia4Lix4LiZ4LiX4Li24LiB4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIYCxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICfguJrguLHguJnguJfguLbguIHguKHguLnguKXguKrguLPguYDguKPguYfguIgnLFxyXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25GYWlsID0gKG1lc3NnYWUpID0+IHtcclxuICAgICAgICBhcGkuZXJyb3Ioe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBg4Lie4Lia4Lib4Lix4LiN4Lir4Liy4Lij4Liw4Lir4Lin4LmI4Liy4LiH4LiB4Liy4Lij4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54LilYCxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IG1lc3NnYWUsXHJcbiAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IG9uUmVzZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QWN0aXZlKGRhdGFFZGl0LmlzX3Nob3cpXHJcbiAgICAgICAgc2V0SXNTdWJNZW51KGRhdGFFZGl0LmhhdmVfc3ViKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YUVkaXQgdXNlRWZmZWN0XCIpXHJcbiAgICAgICAgc2V0UGF0dGVybk1lbnVTZWxlY3RlZChkYXRhRWRpdC5wYXR0ZXJuX21lbnUpXHJcbiAgICAgICAgaWYgKGRhdGFFZGl0LmhhdmVfc3ViID09IDApIHtcclxuICAgICAgICAgICAgaWYgKGRhdGFFZGl0LnBhdHRlcm5fbWVudSAhPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1Nob3coZmFsc2UpXHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNTaG93KHRydWUpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0SXNTaG93KGZhbHNlKVxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBzZXRGaWVsZHMoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBbJ21lbnVfdGl0bGUnXSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAoIWRhdGFFZGl0ID8gXCJcIiA6IGRhdGFFZGl0Lm1lbnVfdGl0bGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBbJ3BhdHRlcm5fbWVudSddLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICghZGF0YUVkaXQgPyBcIlwiIDogZGF0YUVkaXQucGF0dGVybl9tZW51KSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogWydtZW51X2RldGFpbCddLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICghZGF0YUVkaXQgPyBcIlwiIDogZGF0YUVkaXQubWVudV9kZXRhaWwpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZCAke3ZhbHVlfWApO1xyXG4gICAgICAgIHNldFBhdHRlcm5NZW51U2VsZWN0ZWQodmFsdWUpXHJcbiAgICAgICAgaWYgKCFpc1N1Yk1lbnUpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vIHNldElzU3ViTWVudSgxKVxyXG4gICAgICAgICAgICAgICAgLy8gc2V0SVNQYXR0ZXJuTWVudSh0cnVlKVxyXG4gICAgICAgICAgICAgICAgc2V0SXNTaG93KGZhbHNlKVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHNldElzU3ViTWVudSgwKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNldElTUGF0dGVybk1lbnUoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBzZXRJc1Nob3codHJ1ZSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2V0TWVudSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7Y29udGV4dEhvbGRlcn1cclxuICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17XCLguYHguIHguYnguYTguILguYDguKHguJnguLnguKPguK3guIcgXCIgKyAoIWRhdGFFZGl0ID8gXCJcIiA6IGRhdGFFZGl0Lm1lbnVfdGl0bGUpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJlZFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZT17X3Zpc2libGV9XHJcbiAgICAgICAgICAgICAgICAvLyBvbk9rPXsoKSA9PiBvbk9LKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVFZGl0TW9kYWwoKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZSgxKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldElzU3ViTWVudSgwKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17MTAwMH1cclxuICAgICAgICAgICAgICAgIGZvb3Rlcj17bnVsbH1cclxuICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2ljXCJcclxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25GaW5pc2g9e29uU3VibWl0SGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZE1hcms9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgICAgICAgICAgICAgICBmaWVsZHM9e2ZpZWxkc31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZW51X3RpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLguIrguLfguYjguK3guYDguKHguJnguLlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy0yLzNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Zsb2F0OlwibGVmdFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4LmA4Lih4LiZ4Li5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC5gOC4oeC4meC4uVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBjbGFzc05hbWU9XCJmbGV4IG10LTYgbWItMCB3LTEvM1wiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGwgbXQtNlwiID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGxnOnRleHQtcmlnaHQgdy1mdWxsIGxnOnctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0MyQ0ZFMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDMkNGRTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwcHggIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHctZnVsbCBsZzp3LTEvNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbS1ibGFjayBcIj7guKPguLXguYDguIvguYfguJc8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDU5NjY5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzA1OTY2OScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzBweCAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUgIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdy1mdWxsIGxnOnctMS80XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRleHQtY3VzdG9tLXdoaXRlIFwiPuC4muC4seC4meC4l+C4tuC4gTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXR0ZXJuX21lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuC4o+C4ueC4m+C5geC4muC4muC5gOC4oeC4meC4uVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8T3B0aW9uIHZhbHVlPVwiMFwiPuC4geC4s+C4q+C4meC4lOC5gOC4reC4hzwvT3B0aW9uPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXR0ZXJuTWVudSA/IHBhdHRlcm5NZW51Lm1hcCgob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxPcHRpb24gdmFsdWU9e29iamVjdC5wYXR0ZXJuX21lbnVfaWR9PntvYmplY3QucGF0dGVybl90aXRsZX0gIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGNsYXNzTmFtZT1cImZsZXggbXQtNiBtYi0wXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCB0ZXh0LWxlZnQgbGc6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpbmxpbmUtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXthY3RpdmV9IG9uQ2xpY2s9e2FjdGl2ZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteC0yIHRleHQtc21cIj7guIHguLLguKPguYHguKrguJTguIfguJzguKU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpbmxpbmUtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXtpc1N1Yk1lbnV9IG9uQ2xpY2s9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzU3ViTWVudSh2YWx1ZSA/IDEgOiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXR0ZXJuTWVudVNlbGVjdGVkID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNTaG93KHZhbHVlID8gZmFsc2UgOiB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteC0yIHRleHQtc21cIj7guJXguYnguK3guIfguIHguLLguKPguKrguKPguYnguLLguIcg4LmA4Lih4LiZ4Li54Lii4LmI4Lit4LiiPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzU2hvdyA9PSB0cnVlICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZW51X2RldGFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuC4o+C4suC4ouC4peC4sOC5gOC4reC4teC4ouC4lCA6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguKPguLLguKLguKXguLDguYDguK3guLXguKLguJQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Sm9kaXRFZGl0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2VkaXRvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWc9e2NvbmZpZy5jb25maWcodXNlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjcwMHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9IC8vIHRhYkluZGV4IG9mIHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtuZXdDb250ZW50ID0+IHNldENvbnRlbnQobmV3Q29udGVudCl9IC8vIHByZWZlcnJlZCB0byB1c2Ugb25seSB0aGlzIG9wdGlvbiB0byB1cGRhdGUgdGhlIGNvbnRlbnQgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17bmV3Q29udGVudCA9PiB7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC8+fVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogXCJsZWZ0XCIsIGNsZWFyOiBcImJvdGhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17ZGl2UmVmfT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==