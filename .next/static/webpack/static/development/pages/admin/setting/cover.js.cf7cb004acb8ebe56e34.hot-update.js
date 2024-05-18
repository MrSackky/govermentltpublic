webpackHotUpdate("static\\development\\pages\\admin\\setting\\cover.js",{

/***/ "./components/managemnet/cover-menu/add-menu.jsx":
/*!*******************************************************!*\
  !*** ./components/managemnet/cover-menu/add-menu.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modal; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../middleware/utils */ "./middleware/utils.js");





var _jsxFileName = "D:\\govermentlt\\components\\managemnet\\cover-menu\\add-menu.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






var Option = antd__WEBPACK_IMPORTED_MODULE_5__["Select"].Option;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_5__["Input"].TextArea; // const config = require('./../../config');

var config = __webpack_require__(/*! ../../../pages/admin/config */ "./pages/admin/config.js");

var JoditEditor = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! jodit-react */ "./node_modules/jodit-react/build/jodit-react.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! jodit-react */ "./node_modules/jodit-react/build/jodit-react.js")];
    },
    modules: ['jodit-react']
  }
});
_c2 = JoditEditor;
var Text = antd__WEBPACK_IMPORTED_MODULE_5__["Typography"].Text,
    Title = antd__WEBPACK_IMPORTED_MODULE_5__["Typography"].Title;
function modal(_ref) {
  _s();

  var fetch = _ref.fetch,
      user = _ref.user,
      pollId = _ref.pollId;
  var divRef = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])(null);

  var _notification$useNoti = antd__WEBPACK_IMPORTED_MODULE_5__["notification"].useNotification(),
      _notification$useNoti2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_notification$useNoti, 2),
      api = _notification$useNoti2[0],
      contextHolder = _notification$useNoti2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      visible = _useState[0],
      setVisible = _useState[1];

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_5__["Form"].useForm(),
      _Form$useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(null),
      previewImage = _useState2[0],
      setPreviewImage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(null),
      imageLandingPage = _useState3[0],
      setImageLandingPage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      previewVisible = _useState4[0],
      setPreviewVisible = _useState4[1];

  var onSubmitHandler = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(value) {
      var data, registerData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = {
                organization_id: user.organization_id,
                header_image: imageLandingPage,
                header_link: value.header_link
              };
              _context.next = 3;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_9__["apiInstance"])().post('/covermenu', data);

            case 3:
              registerData = _context.sent;

              if (registerData.data.status == 200) {
                openNotificationSuccess();
              } else {
                openNotificationFail(registerData.data.message);
              }

              setVisible(false);
              fetch();
              onReset();

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmitHandler(_x) {
      return _ref2.apply(this, arguments);
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

  var Dragger = antd__WEBPACK_IMPORTED_MODULE_5__["Upload"].Dragger;

  var onReset = function onReset() {
    resetImagePreview();
    form.resetFields();
  };

  var imageUploadprops = {
    name: 'file',
    multiple: false,
    listType: 'text',
    maxCount: 1,
    action: "/api/upload/cover",
    preview: false,
    // uid: user.type_user == 1 ? "admin" : user.organization_id,
    // beforeUpload(file) {
    // 	const isLt10M = file.size / 1024 / 1024 < 10
    // 	if (!isLt10M) {
    // 		notification.open({
    // 			message: 'Upload error!',
    // 			description: <Text className="text-black">Image must smaller than 10MB!</Text>,
    // 		})
    // 	}
    // 	return isLt10M
    // },
    customRequest: function customRequest(options) {
      var data = new FormData();
      data.append('file', options.file);
      data.append('id', user.type_user == 1 ? "admin" : user.organization_id);
      var config = {
        "headers": {
          "content-type": 'multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s'
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(options.action, data, config).then(function (res) {
        // imageLandingPage
        // console.log(res.data.data.list[0]._name)
        setImageLandingPage(res.data.data.list[0]._name);
        options.onSuccess(res.data, options.file);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    onChange: function onChange(info) {
      return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var status;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                status = info.file.status; // console.log(user)

                _context2.t0 = info.file.status;
                _context2.next = _context2.t0 === "done" ? 4 : 11;
                break;

              case 4:
                if (!(!info.file.url && !info.file.preview)) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 7;
                return getBase64(info.file.originFileObj);

              case 7:
                info.file.preview = _context2.sent;

              case 8:
                setPreviewImage(info.file.url || info.file.preview);
                setPreviewVisible(true);
                return _context2.abrupt("break", 12);

              case 11:
                // error or removed
                resetImagePreview();

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    onRemove: function onRemove(info) {
      resetImagePreview();
    }
  };

  var resetImagePreview = function resetImagePreview() {
    setPreviewVisible(false);
    setPreviewImage(null);
  };

  function getBase64(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function () {
        return resolve(reader.result);
      };

      reader.onerror = function (error) {
        return reject(error);
      };
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("a", {
    onClick: function onClick() {
      return setVisible(true);
    },
    className: "ml-4 lg:inline-flex lg:w-auto w-full px-2 py-2 rounded h-8 text-white bg-green-600 font-bold items-center justify-center hover:bg-green-600 hover:text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }
  }, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2B\u0E31\u0E27\u0E40\u0E27\u0E47\u0E1A\u0E44\u0E0B\u0E15\u0E4C"), contextHolder, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    title: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2B\u0E31\u0E27\u0E40\u0E27\u0E47\u0E1A\u0E44\u0E0B\u0E15\u0E4C",
    className: "mt-4",
    centered: true,
    visible: visible // onOk={() => onOK()}
    ,
    onCancel: function onCancel() {
      // form.resetFields();
      setVisible(false);
    },
    width: 1000,
    footer: null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    name: "basic",
    layout: "vertical",
    onFinish: onSubmitHandler,
    requiredMark: true,
    form: form,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    name: "##",
    label: "\u0E20\u0E32\u0E1E\u0E25\u0E34\u0E07\u0E04\u0E4C\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07 :",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    rules: [{
      required: true,
      message: 'กรุณากรอกเลือกภาพลิงค์หน่วยงานที่เกี่ยวข้อง'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 10
    }
  }, __jsx(Dragger, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    maxCount: 1 // listType="picture"
    ,
    accept: ".jpg, .jpeg, .png"
  }, imageUploadprops, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }), previewVisible && __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Image"] // width={200}
  , {
    preview: false,
    src: previewImage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 36
    }
  })), !previewVisible && __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 19
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 17
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    name: "header_link",
    label: "\u0E25\u0E34\u0E07\u0E04\u0E4C",
    style: {
      "float": 'left'
    },
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกลิงค์ URL',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    id: "#",
    type: "text",
    placeholder: "\u0E25\u0E34\u0E07\u0E04\u0E4C",
    className: "resize-none border rounded-md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    className: " text-gray-700 text-sm font-bold mb-2 w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "text-center lg:text-right w-full lg:w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
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
      lineNumber: 244,
      columnNumber: 17
    }
  }, __jsx(Text, {
    className: "text-custom-black ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 19
    }
  }, "\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E17")), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Button"] // type="primary"
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
      lineNumber: 261,
      columnNumber: 17
    }
  }, __jsx(Text, {
    className: "text-custom-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 19
    }
  }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01")))))), __jsx("div", {
    style: {
      "float": 'left',
      clear: 'both'
    },
    ref: divRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 9
    }
  })));
}

_s(modal, "4Yc/b4AmcpwvWude1yDeRVBvNWc=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_5__["notification"].useNotification, antd__WEBPACK_IMPORTED_MODULE_5__["Form"].useForm];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hbmFnZW1uZXQvY292ZXItbWVudS9hZGQtbWVudS5qc3giXSwibmFtZXMiOlsiT3B0aW9uIiwiU2VsZWN0IiwiVGV4dEFyZWEiLCJJbnB1dCIsImNvbmZpZyIsInJlcXVpcmUiLCJKb2RpdEVkaXRvciIsImR5bmFtaWMiLCJzc3IiLCJUZXh0IiwiVHlwb2dyYXBoeSIsIlRpdGxlIiwibW9kYWwiLCJmZXRjaCIsInVzZXIiLCJwb2xsSWQiLCJkaXZSZWYiLCJ1c2VSZWYiLCJub3RpZmljYXRpb24iLCJ1c2VOb3RpZmljYXRpb24iLCJhcGkiLCJjb250ZXh0SG9sZGVyIiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInByZXZpZXdJbWFnZSIsInNldFByZXZpZXdJbWFnZSIsImltYWdlTGFuZGluZ1BhZ2UiLCJzZXRJbWFnZUxhbmRpbmdQYWdlIiwicHJldmlld1Zpc2libGUiLCJzZXRQcmV2aWV3VmlzaWJsZSIsIm9uU3VibWl0SGFuZGxlciIsInZhbHVlIiwiZGF0YSIsIm9yZ2FuaXphdGlvbl9pZCIsImhlYWRlcl9pbWFnZSIsImhlYWRlcl9saW5rIiwiYXBpSW5zdGFuY2UiLCJwb3N0IiwicmVnaXN0ZXJEYXRhIiwic3RhdHVzIiwib3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MiLCJvcGVuTm90aWZpY2F0aW9uRmFpbCIsIm1lc3NhZ2UiLCJvblJlc2V0Iiwic3VjY2VzcyIsImRlc2NyaXB0aW9uIiwicGxhY2VtZW50IiwibWVzc2dhZSIsImVycm9yIiwiRHJhZ2dlciIsIlVwbG9hZCIsInJlc2V0SW1hZ2VQcmV2aWV3IiwicmVzZXRGaWVsZHMiLCJpbWFnZVVwbG9hZHByb3BzIiwibmFtZSIsIm11bHRpcGxlIiwibGlzdFR5cGUiLCJtYXhDb3VudCIsImFjdGlvbiIsInByZXZpZXciLCJjdXN0b21SZXF1ZXN0Iiwib3B0aW9ucyIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZmlsZSIsInR5cGVfdXNlciIsImF4aW9zIiwidGhlbiIsInJlcyIsImxpc3QiLCJfbmFtZSIsIm9uU3VjY2VzcyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZSIsImluZm8iLCJ1cmwiLCJnZXRCYXNlNjQiLCJvcmlnaW5GaWxlT2JqIiwib25SZW1vdmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwicmVzdWx0Iiwib25lcnJvciIsInJlcXVpcmVkIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJjbGVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFRQSxNQUFSLEdBQW1CQywyQ0FBbkIsQ0FBUUQsTUFBUjtBQUNBLElBQVFFLFFBQVIsR0FBcUJDLDBDQUFyQixDQUFRRCxRQUFSLEMsQ0FDQTs7QUFDQSxJQUFNRSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsNERBQUQsQ0FBdEI7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSx3SkFBTjtBQUFBLENBQUQsRUFBOEI7QUFBRUMsS0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBO0FBQUEsa0NBQWhCLG9FQUFnQjtBQUFBO0FBQUEsY0FBaEIsYUFBZ0I7QUFBQTtBQUFBLENBQTlCLENBQTNCO01BQU1GLFc7QUFDTixJQUFRRyxJQUFSLEdBQXdCQywrQ0FBeEIsQ0FBUUQsSUFBUjtBQUFBLElBQWNFLEtBQWQsR0FBd0JELCtDQUF4QixDQUFjQyxLQUFkO0FBQ2UsU0FBU0MsS0FBVCxPQUF3QztBQUFBOztBQUFBLE1BQXZCQyxLQUF1QixRQUF2QkEsS0FBdUI7QUFBQSxNQUFoQkMsSUFBZ0Is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QUFNLEVBQUUsRUFISDtBQUlMQyxXQUFLLEVBQUUsR0FKRjtBQUtMQyxrQkFBWSxFQUFFLGdCQUxUO0FBTUxDLGlCQUFXLEVBQUUsS0FOUjtBQU9MQyxXQUFLLEVBQUU7QUFQRixLQUhULENBWUU7QUFaRjtBQWFFLGFBQVMsRUFBQyw0SUFiWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBZUUsTUFBQyxJQUFEO0FBQU0sYUFBUyxFQUFDLG9CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQWZGLENBREYsRUFrQkUsTUFBQywyQ0FBRCxDQUNFO0FBREY7QUFFRSxTQUFLLEVBQUU7QUFDTE4scUJBQWUsRUFBRSxTQURaO0FBRUxDLGlCQUFXLEVBQUUsU0FGUjtBQUdMQyxZQUFNLEVBQUUsRUFISDtBQUlMQyxXQUFLLEVBQUUsR0FKRjtBQUtMQyxrQkFBWSxFQUFFLGdCQUxUO0FBTUxFLFdBQUssRUFBRTtBQU5GLEtBRlQ7QUFVRSxZQUFRLEVBQUMsUUFWWDtBQVdFLGFBQVMsRUFBQyw0SUFYWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBYUUsTUFBQyxJQUFEO0FBQU0sYUFBUyxFQUFDLG9CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQWJGLENBbEJGLENBREYsQ0FIRixDQTlERixDQWJGLEVBb0hFO0FBQUssU0FBSyxFQUFFO0FBQUUsZUFBTyxNQUFUO0FBQWlCQyxXQUFLLEVBQUU7QUFBeEIsS0FBWjtBQUE4QyxPQUFHLEVBQUV0RixNQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEhGLENBUkYsQ0FERjtBQWlJRDs7R0F2UXVCSixLO1VBRU9NLGlEQUFZLENBQUNDLGUsRUFFM0JNLHlDQUFJLENBQUNDLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFkbWluXFxzZXR0aW5nXFxjb3Zlci5qcy5jZjdjYjAwNGFjYjhlYmU1NmUzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5ib3hPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgRm9ybSwgSW1hZ2UsIElucHV0LFxyXG4gIE1vZGFsLFxyXG4gIG5vdGlmaWNhdGlvbixcclxuICBTZWxlY3QsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBVcGxvYWRcclxufSBmcm9tICdhbnRkJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGFwaUluc3RhbmNlIH0gZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS91dGlscyc7XHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG4vLyBjb25zdCBjb25maWcgPSByZXF1aXJlKCcuLy4uLy4uL2NvbmZpZycpO1xyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi8uLi8uLi9wYWdlcy9hZG1pbi9jb25maWcnKTtcclxuY29uc3QgSm9kaXRFZGl0b3IgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnam9kaXQtcmVhY3QnKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5jb25zdCB7IFRleHQsIFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbCh7IGZldGNoLCB1c2VyLCBwb2xsSWQgfSkge1xyXG4gIGxldCBkaXZSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW2FwaSwgY29udGV4dEhvbGRlcl0gPSBub3RpZmljYXRpb24udXNlTm90aWZpY2F0aW9uKCk7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG4gIGNvbnN0IFtwcmV2aWV3SW1hZ2UsIHNldFByZXZpZXdJbWFnZV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtpbWFnZUxhbmRpbmdQYWdlLCBzZXRJbWFnZUxhbmRpbmdQYWdlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3ByZXZpZXdWaXNpYmxlLCBzZXRQcmV2aWV3VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gYXN5bmMgdmFsdWUgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgb3JnYW5pemF0aW9uX2lkOiB1c2VyLm9yZ2FuaXphdGlvbl9pZCxcclxuICAgICAgaGVhZGVyX2ltYWdlOiBpbWFnZUxhbmRpbmdQYWdlLFxyXG4gICAgICBoZWFkZXJfbGluazogdmFsdWUuaGVhZGVyX2xpbmssXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVnaXN0ZXJEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5wb3N0KCcvY292ZXJtZW51JywgZGF0YSk7XHJcbiAgICBpZiAocmVnaXN0ZXJEYXRhLmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICBvcGVuTm90aWZpY2F0aW9uU3VjY2VzcygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvbkZhaWwocmVnaXN0ZXJEYXRhLmRhdGEubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBzZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgIGZldGNoKCk7XHJcbiAgICBvblJlc2V0KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICBhcGkuc3VjY2Vzcyh7XHJcbiAgICAgIG1lc3NhZ2U6IGDguJrguLHguJnguJfguLbguIHguKHguLnguKXguKrguLPguYDguKPguYfguIhgLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ+C4muC4seC4meC4l+C4tuC4geC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iCcsXHJcbiAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25GYWlsID0gbWVzc2dhZSA9PiB7XHJcbiAgICBhcGkuZXJyb3Ioe1xyXG4gICAgICBtZXNzYWdlOiBg4Lie4Lia4Lib4Lix4LiN4Lir4Liy4Lij4Liw4Lir4Lin4LmI4Liy4LiH4LiB4Liy4Lij4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54LilYCxcclxuICAgICAgZGVzY3JpcHRpb246IG1lc3NnYWUsXHJcbiAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHsgRHJhZ2dlciB9ID0gVXBsb2FkO1xyXG5cclxuICBjb25zdCBvblJlc2V0ID0gKCkgPT4ge1xyXG4gICAgcmVzZXRJbWFnZVByZXZpZXcoKVxyXG4gICAgZm9ybS5yZXNldEZpZWxkcygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGltYWdlVXBsb2FkcHJvcHMgPSB7XHJcbiAgICBuYW1lOiAnZmlsZScsXHJcbiAgICBtdWx0aXBsZTogZmFsc2UsXHJcbiAgICBsaXN0VHlwZTogJ3RleHQnLFxyXG4gICAgbWF4Q291bnQ6IDEsXHJcbiAgICBhY3Rpb246IFwiL2FwaS91cGxvYWQvY292ZXJcIixcclxuICAgIHByZXZpZXc6IGZhbHNlLFxyXG4gICAgLy8gdWlkOiB1c2VyLnR5cGVfdXNlciA9PSAxID8gXCJhZG1pblwiIDogdXNlci5vcmdhbml6YXRpb25faWQsXHJcbiAgICAvLyBiZWZvcmVVcGxvYWQoZmlsZSkge1xyXG4gICAgLy8gXHRjb25zdCBpc0x0MTBNID0gZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgPCAxMFxyXG4gICAgLy8gXHRpZiAoIWlzTHQxME0pIHtcclxuICAgIC8vIFx0XHRub3RpZmljYXRpb24ub3Blbih7XHJcbiAgICAvLyBcdFx0XHRtZXNzYWdlOiAnVXBsb2FkIGVycm9yIScsXHJcbiAgICAvLyBcdFx0XHRkZXNjcmlwdGlvbjogPFRleHQgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiPkltYWdlIG11c3Qgc21hbGxlciB0aGFuIDEwTUIhPC9UZXh0PixcclxuICAgIC8vIFx0XHR9KVxyXG4gICAgLy8gXHR9XHJcbiAgICAvLyBcdHJldHVybiBpc0x0MTBNXHJcbiAgICAvLyB9LFxyXG4gICAgY3VzdG9tUmVxdWVzdDogKG9wdGlvbnMpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgb3B0aW9ucy5maWxlKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnaWQnLCB1c2VyLnR5cGVfdXNlciA9PSAxID8gXCJhZG1pblwiIDogdXNlci5vcmdhbml6YXRpb25faWQpXHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICBcImhlYWRlcnNcIjoge1xyXG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogJ211bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PS0tLS1XZWJLaXRGb3JtQm91bmRhcnlxVHFKSXh2a1dGWXF2UDVzJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBheGlvcy5wb3N0KG9wdGlvbnMuYWN0aW9uLCBkYXRhLCBjb25maWcpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIC8vIGltYWdlTGFuZGluZ1BhZ2VcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMuZGF0YS5kYXRhLmxpc3RbMF0uX25hbWUpXHJcbiAgICAgICAgc2V0SW1hZ2VMYW5kaW5nUGFnZShyZXMuZGF0YS5kYXRhLmxpc3RbMF0uX25hbWUpXHJcbiAgICAgICAgb3B0aW9ucy5vblN1Y2Nlc3MocmVzLmRhdGEsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgfSlcclxuXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgb25DaGFuZ2UoaW5mbykge1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gaW5mby5maWxlXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXIpXHJcbiAgICAgIHN3aXRjaCAoaW5mby5maWxlLnN0YXR1cykge1xyXG4gICAgICAgIC8vIGNhc2UgXCJ1cGxvYWRpbmdcIjpcclxuICAgICAgICAvLyAgIG5leHRTdGF0ZS5zZWxlY3RlZEZpbGVMaXN0ID0gW2luZm8uZmlsZV07XHJcbiAgICAgICAgLy8gICBicmVhaztcclxuICAgICAgICBjYXNlIFwiZG9uZVwiOlxyXG4gICAgICAgICAgaWYgKCFpbmZvLmZpbGUudXJsICYmICFpbmZvLmZpbGUucHJldmlldykge1xyXG4gICAgICAgICAgICBpbmZvLmZpbGUucHJldmlldyA9IGF3YWl0IGdldEJhc2U2NChpbmZvLmZpbGUub3JpZ2luRmlsZU9iaik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRQcmV2aWV3SW1hZ2UoaW5mby5maWxlLnVybCB8fCBpbmZvLmZpbGUucHJldmlldylcclxuICAgICAgICAgIHNldFByZXZpZXdWaXNpYmxlKHRydWUpXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIC8vIGVycm9yIG9yIHJlbW92ZWRcclxuICAgICAgICAgIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuICAgICAgfVxyXG4gICAgICAvL2NvbnNvbGUubG9nKGluZm8uZmlsZSlcclxuXHJcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAvLyAgIHByZXZpZXdJbWFnZTogZmlsZS51cmwgfHwgZmlsZS5wcmV2aWV3LFxyXG4gICAgICAvLyAgIHByZXZpZXdWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAvLyB9KTtcclxuXHJcbiAgICB9LFxyXG4gICAgb25SZW1vdmUoaW5mbykge1xyXG5cclxuICAgICAgcmVzZXRJbWFnZVByZXZpZXcoKVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc2V0SW1hZ2VQcmV2aWV3ID0gKCkgPT4ge1xyXG4gICAgc2V0UHJldmlld1Zpc2libGUoZmFsc2UpXHJcbiAgICBzZXRQcmV2aWV3SW1hZ2UobnVsbClcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldEJhc2U2NChmaWxlKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgIHJlYWRlci5vbmVycm9yID0gZXJyb3IgPT4gcmVqZWN0KGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZSh0cnVlKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJtbC00IGxnOmlubGluZS1mbGV4IGxnOnctYXV0byB3LWZ1bGwgcHgtMiBweS0yIHJvdW5kZWQgaC04IHRleHQtd2hpdGUgYmctZ3JlZW4tNjAwIGZvbnQtYm9sZCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaG92ZXI6YmctZ3JlZW4tNjAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICA+XHJcbiAgICAgICAg4LmA4Lie4Li04LmI4Lih4Lir4Lix4Lin4LmA4Lin4LmH4Lia4LmE4LiL4LiV4LmMXHJcbiAgICAgIDwvYT5cclxuICAgICAge2NvbnRleHRIb2xkZXJ9XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwi4LmA4Lie4Li04LmI4Lih4Lir4Lix4Lin4LmA4Lin4LmH4Lia4LmE4LiL4LiV4LmMXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICBjZW50ZXJlZFxyXG4gICAgICAgIHZpc2libGU9e3Zpc2libGV9XHJcbiAgICAgICAgLy8gb25Paz17KCkgPT4gb25PSygpfVxyXG4gICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XHJcbiAgICAgICAgICAvLyBmb3JtLnJlc2V0RmllbGRzKCk7XHJcbiAgICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIHdpZHRoPXsxMDAwfVxyXG4gICAgICAgIGZvb3Rlcj17bnVsbH1cclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtXHJcbiAgICAgICAgICBuYW1lPVwiYmFzaWNcIlxyXG4gICAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgb25GaW5pc2g9e29uU3VibWl0SGFuZGxlcn1cclxuICAgICAgICAgIHJlcXVpcmVkTWFyaz17dHJ1ZX1cclxuICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgPjxGb3JtLkl0ZW1cclxuICAgICAgICAgIG5hbWU9XCIjI1wiXHJcbiAgICAgICAgICBsYWJlbD1cIuC4oOC4suC4nuC4peC4tOC4h+C4hOC5jOC4q+C4meC5iOC4p+C4ouC4h+C4suC4meC4l+C4teC5iOC5gOC4geC4teC5iOC4ouC4p+C4guC5ieC4reC4hyA6XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguYDguKXguLfguK3guIHguKDguLLguJ7guKXguLTguIfguITguYzguKvguJnguYjguKfguKLguIfguLLguJnguJfguLXguYjguYDguIHguLXguYjguKLguKfguILguYnguK3guIcnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHsvKiA8RHJhZ2dlciB7Li4uZHJvcGltZ30+ICovfVxyXG4gICAgICAgICAgICA8RHJhZ2dlclxyXG4gICAgICAgICAgICAgIG1heENvdW50PXsxfVxyXG4gICAgICAgICAgICAgIC8vIGxpc3RUeXBlPVwicGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLmpwZWcsIC5wbmdcIlxyXG4gICAgICAgICAgICAgIHsuLi5pbWFnZVVwbG9hZHByb3BzfVxyXG4gICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgIHtwcmV2aWV3VmlzaWJsZSAmJiA8PjxJbWFnZVxyXG4gICAgICAgICAgICAgICAgLy8gd2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgIHByZXZpZXc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgc3JjPXtwcmV2aWV3SW1hZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgeyFwcmV2aWV3VmlzaWJsZSAmJiA8PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC1kcmFnLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPEluYm94T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9EcmFnZ2VyPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIG5hbWU9XCJoZWFkZXJfbGlua1wiXHJcbiAgICAgICAgICAgIGxhYmVsPVwi4Lil4Li04LiH4LiE4LmMXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6ICdsZWZ0JyB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4Lil4Li04LiH4LiE4LmMIFVSTCcsXHJcbiAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4peC4tOC4h+C4hOC5jFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGwgbXQtNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbGc6dGV4dC1yaWdodCB3LWZ1bGwgbGc6dy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17b25SZXNldH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjQzJDRkUwJyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDMkNGRTAnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMCxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwcHggIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUgIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8vIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdy1mdWxsIGxnOnctMS80XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGV4dC1jdXN0b20tYmxhY2sgXCI+4Lij4Li14LmA4LiL4LmH4LiXPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIC8vIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDU5NjY5JyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyMwNTk2NjknLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMCxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwcHggIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSB3LWZ1bGwgbGc6dy0xLzRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbS13aGl0ZSBcIj7guJrguLHguJnguJfguLbguIE8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogJ2xlZnQnLCBjbGVhcjogJ2JvdGgnIH19IHJlZj17ZGl2UmVmfT48L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==