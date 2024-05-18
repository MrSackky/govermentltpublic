webpackHotUpdate("static\\development\\pages\\admin\\setting\\cover.js",{

/***/ "./components/managemnet/cover-menu/edit-menu.jsx":
/*!********************************************************!*\
  !*** ./components/managemnet/cover-menu/edit-menu.jsx ***!
  \********************************************************/
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





var _jsxFileName = "D:\\govermentlt\\components\\managemnet\\cover-menu\\edit-menu.jsx",
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
var Dragger = antd__WEBPACK_IMPORTED_MODULE_5__["Upload"].Dragger;
function modal(_ref) {
  _s();

  var _visible = _ref._visible,
      hideEditModal = _ref.hideEditModal,
      fetch = _ref.fetch,
      user = _ref.user,
      dataEdit = _ref.dataEdit;
  var divRef = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])(null);

  var _notification$useNoti = antd__WEBPACK_IMPORTED_MODULE_5__["notification"].useNotification(),
      _notification$useNoti2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_notification$useNoti, 2),
      api2 = _notification$useNoti2[0],
      contextHolder2 = _notification$useNoti2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      previewVisible = _useState[0],
      setPreviewVisible = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(null),
      previewImage = _useState2[0],
      setPreviewImage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(null),
      imageLandingPage = _useState3[0],
      setImageLandingPage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(0),
      active = _useState4[0],
      setActive = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([{
    name: ['intro_title'],
    value: ''
  }]),
      fields = _useState5[0],
      setFields = _useState5[1];

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_5__["Form"].useForm(),
      _Form$useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    fetchEditData();
  }, [dataEdit]);

  var fetchEditData = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (dataEdit) {
                setPreviewImage("..\\..\\..\\uploads\\c-" + user.organization_id + '\\cover\\' + dataEdit.header_image);
                setPreviewVisible(true);
                setImageLandingPage(dataEdit.header_image);
                setActive(dataEdit.is_show ? 1 : 0);
                setFields([{
                  name: ['header_link'],
                  value: !dataEdit ? '' : dataEdit.header_link
                }]);
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchEditData() {
      return _ref2.apply(this, arguments);
    };
  }();

  var onSubmitHandler = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(value) {
      var data, registerData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              data = {
                header_image: imageLandingPage,
                header_link: value.header_link,
                is_show: active
              };
              console.log(data);
              _context2.next = 4;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_9__["apiInstance"])().put('/covermenu/' + (dataEdit ? dataEdit.header_id : 0), data);

            case 4:
              registerData = _context2.sent;
              // if (registerData.data.status == 200) {
              //   openNotificationSuccess();
              // } else {
              //   openNotificationFail(registerData.data.message);
              // }
              // fetch();
              form.resetFields();
              hideEditModal(registerData.data);

            case 7:
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
    api2.success({
      message: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E21\u0E39\u0E25\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
      description: 'บันทึกมูลสำเร็จ',
      placement: 'topRight'
    });
  };

  var openNotificationFail = function openNotificationFail(messgae) {
    api2.error({
      message: "\u0E1E\u0E1A\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39dddd\u0E25",
      description: messgae,
      placement: 'topRight'
    });
  };

  var onReset = function onReset() {
    setPreviewImage("..\\..\\..\\uploads\\c-" + user.organization_id + '\\cover\\' + dataEdit.header_image);
    setPreviewVisible(true);
    setImageLandingPage(dataEdit.header_image);
    setActive(dataEdit.is_show ? 1 : 0);
    setFields([{
      name: ['header_link'],
      value: !dataEdit ? '' : dataEdit.header_link
    }]);
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
      return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
        var status;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                status = info.file.status; // console.log(user)

                _context3.t0 = info.file.status;
                _context3.next = _context3.t0 === "done" ? 4 : 11;
                break;

              case 4:
                if (!(!info.file.url && !info.file.preview)) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 7;
                return getBase64(info.file.originFileObj);

              case 7:
                info.file.preview = _context3.sent;

              case 8:
                setPreviewImage(info.file.url || info.file.preview);
                setPreviewVisible(true);
                return _context3.abrupt("break", 12);

              case 11:
                // error or removed
                resetImagePreview();

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    onRemove: function onRemove(info) {
      console.log("onRemove");
      console.log(info);
      resetImagePreview();
    }
  };

  var resetImagePreview = function resetImagePreview() {
    setPreviewImage("..\\..\\..\\uploads\\c-" + user.organization_id + '\\cover\\' + dataEdit.header_image);
    setPreviewVisible(true);
    setImageLandingPage(dataEdit.header_image);
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, contextHolder2, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    title: "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E2B\u0E31\u0E27\u0E40\u0E27\u0E47\u0E1A\u0E44\u0E0B\u0E15\u0E4C",
    className: "mt-4",
    centered: true,
    visible: _visible // onOk={() => onOK()}
    ,
    onCancel: function onCancel() {
      // form.resetFields();
      resetImagePreview();
      hideEditModal(false);
    },
    width: 1000,
    footer: null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    name: "basic",
    layout: "vertical",
    onFinish: onSubmitHandler,
    requiredMark: true,
    form: form,
    fields: fields,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    name: "##",
    label: "\u0E20\u0E32\u0E1E\u0E25\u0E34\u0E07\u0E04\u0E4C\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07 :",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกเลือกภาพลิงค์หน่วยงานที่เกี่ยวข้อง',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
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
      lineNumber: 247,
      columnNumber: 13
    }
  }), previewVisible && __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Image"] // width={200}
  , {
    preview: false,
    src: previewImage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 36
    }
  })), !previewVisible && __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 19
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
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
      lineNumber: 272,
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
      lineNumber: 284,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    className: " text-gray-700 text-sm font-bold mb-2 w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "lg:inline-flex text-left w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Switch"], {
    className: "swt-btn",
    checked: active,
    onClick: function onClick(value) {
      return setActive(value ? 1 : 0);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 15
    }
  }), __jsx("p", {
    className: "mx-2 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 15
    }
  }, "\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25")), __jsx("div", {
    className: "lg:inline-flex w-1/2 mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "text-center lg:text-right w-full lg:w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
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
      lineNumber: 305,
      columnNumber: 17
    }
  }, __jsx(Text, {
    className: "text-custom-black ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
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
      lineNumber: 322,
      columnNumber: 17
    }
  }, __jsx(Text, {
    className: "text-custom-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
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
      lineNumber: 341,
      columnNumber: 9
    }
  })));
}

_s(modal, "qVpiTcnTP1xgjNOgiu9XT+jHGdA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hbmFnZW1uZXQvY292ZXItbWVudS9lZGl0LW1lbnUuanN4Il0sIm5hbWVzIjpbIk9wdGlvbiIsIlNlbGVjdCIsIlRleHRBcmVhIiwiSW5wdXQiLCJjb25maWciLCJyZXF1aXJlIiwiSm9kaXRFZGl0b3IiLCJkeW5hbWljIiwic3NyIiwiVGV4dCIsIlR5cG9ncmFwaHkiLCJUaXRsZSIsIkRyYWdnZXIiLCJVcGxvYWQiLCJtb2RhbCIsIl92aXNpYmxlIiwiaGlkZUVkaXRNb2RhbCIsImZldGNoIiwidXNlciIsImRhdGFFZGl0IiwiZGl2UmVmIiwidXNlUmVmIiwibm90aWZpY2F0aW9uIiwidXNlTm90aWZpY2F0aW9uIiwiYXBpMiIsImNvbnRleHRIb2xkZXIyIiwidXNlU3RhdGUiLCJwcmV2aWV3VmlzaWJsZSIsInNldFByZXZpZXdWaXNpYmxlIiwicHJldmlld0ltYWdlIiwic2V0UHJldmlld0ltYWdlIiwiaW1hZ2VMYW5kaW5nUGFnZSIsInNldEltYWdlTGFuZGluZ1BhZ2UiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJuYW1lIiwidmFsdWUiLCJmaWVsZHMiLCJzZXRGaWVsZHMiLCJGb3JtIiwidXNlRm9ybSIsImZvcm0iLCJ1c2VFZmZlY3QiLCJmZXRjaEVkaXREYXRhIiwib3JnYW5pemF0aW9uX2lkIiwiaGVhZGVyX2ltYWdlIiwiaXNfc2hvdyIsImhlYWRlcl9saW5rIiwib25TdWJtaXRIYW5kbGVyIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJhcGlJbnN0YW5jZSIsInB1dCIsImhlYWRlcl9pZCIsInJlZ2lzdGVyRGF0YSIsInJlc2V0RmllbGRzIiwib3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MiLCJzdWNjZXNzIiwibWVzc2FnZSIsImRlc2NyaXB0aW9uIiwicGxhY2VtZW50Iiwib3Blbk5vdGlmaWNhdGlvbkZhaWwiLCJtZXNzZ2FlIiwiZXJyb3IiLCJvblJlc2V0IiwiaW1hZ2VVcGxvYWRwcm9wcyIsIm11bHRpcGxlIiwibGlzdFR5cGUiLCJtYXhDb3VudCIsImFjdGlvbiIsInByZXZpZXciLCJjdXN0b21SZXF1ZXN0Iiwib3B0aW9ucyIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZmlsZSIsInR5cGVfdXNlciIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXMiLCJsaXN0IiwiX25hbWUiLCJvblN1Y2Nlc3MiLCJlcnIiLCJvbkNoYW5nZSIsImluZm8iLCJzdGF0dXMiLCJ1cmwiLCJnZXRCYXNlNjQiLCJvcmlnaW5GaWxlT2JqIiwicmVzZXRJbWFnZVByZXZpZXciLCJvblJlbW92ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJyZXN1bHQiLCJvbmVycm9yIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJjbGVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFRQSxNQUFSLEdBQW1CQywyQ0FBbkIsQ0FBUUQsTUFBUjtBQUNBLElBQVFFLFFBQVIsR0FBcUJDLDBDQUFyQixDQUFRRCxRQUFSLEMsQ0FDQTs7QUFDQSxJQUFNRSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsNERBQUQsQ0FBdEI7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSx3SkFBTjtBQUFBLENBQUQsRUFBOEI7QUFBRUMsS0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBO0FBQUEsa0NBQWhCLG9FQUFnQjtBQUFBO0FBQUEsY0FBaEIsYUFBZ0I7QUFBQTtBQUFBLENBQTlCLENBQTNCO01BQU1GLFc7QUFDTixJQUFRRyxJQUFSLEdBQXdCQywrQ0FBeEIsQ0FBUUQsSUFBUjtBQUFBLElBQWNFLEtBQWQsR0FBd0JE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QUFDTE4scUJBQWUsRUFBRSxTQURaO0FBRUxDLGlCQUFXLEVBQUUsU0FGUjtBQUdMQyxZQUFNLEVBQUUsRUFISDtBQUlMQyxXQUFLLEVBQUUsR0FKRjtBQUtMQyxrQkFBWSxFQUFFLGdCQUxUO0FBTUxFLFdBQUssRUFBRTtBQU5GLEtBRlQ7QUFVRSxZQUFRLEVBQUMsUUFWWDtBQVdFLGFBQVMsRUFBQyw0SUFYWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBYUUsTUFBQyxJQUFEO0FBQU0sYUFBUyxFQUFDLG9CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQWJGLENBbEJGLENBREYsQ0FaRixDQS9ERixDQWRGLEVBK0hFO0FBQUssU0FBSyxFQUFFO0FBQUUsZUFBTyxNQUFUO0FBQWlCQyxXQUFLLEVBQUU7QUFBeEIsS0FBWjtBQUE4QyxPQUFHLEVBQUUxRixNQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBL0hGLENBRkYsQ0FERjtBQXNJRDs7R0FyVXVCTixLO1VBUVNRLGlEQUFZLENBQUNDLGUsRUFXN0JnQix5Q0FBSSxDQUFDQyxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pblxcc2V0dGluZ1xcY292ZXIuanMuYWViY2QzODVmNzQxYWJmNjEyYTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluYm94T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLCBGb3JtLCBJbWFnZSwgSW5wdXQsXHJcbiAgTW9kYWwsXHJcbiAgbm90aWZpY2F0aW9uLFxyXG4gIFNlbGVjdCwgU3dpdGNoLCBUeXBvZ3JhcGh5LCBVcGxvYWRcclxufSBmcm9tICdhbnRkJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYXBpSW5zdGFuY2UgfSBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL3V0aWxzJztcclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcbi8vIGNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4vLi4vLi4vY29uZmlnJyk7XHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4uLy4uLy4uL3BhZ2VzL2FkbWluL2NvbmZpZycpO1xyXG5jb25zdCBKb2RpdEVkaXRvciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdqb2RpdC1yZWFjdCcpLCB7IHNzcjogZmFsc2UgfSk7XHJcbmNvbnN0IHsgVGV4dCwgVGl0bGUgfSA9IFR5cG9ncmFwaHk7XHJcbmNvbnN0IHsgRHJhZ2dlciB9ID0gVXBsb2FkO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWwoe1xyXG4gIF92aXNpYmxlLFxyXG4gIGhpZGVFZGl0TW9kYWwsXHJcbiAgZmV0Y2gsXHJcbiAgdXNlcixcclxuICBkYXRhRWRpdCxcclxufSkge1xyXG4gIGxldCBkaXZSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW2FwaTIsIGNvbnRleHRIb2xkZXIyXSA9IG5vdGlmaWNhdGlvbi51c2VOb3RpZmljYXRpb24oKTtcclxuICBjb25zdCBbcHJldmlld1Zpc2libGUsIHNldFByZXZpZXdWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtwcmV2aWV3SW1hZ2UsIHNldFByZXZpZXdJbWFnZV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtpbWFnZUxhbmRpbmdQYWdlLCBzZXRJbWFnZUxhbmRpbmdQYWdlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW2ZpZWxkcywgc2V0RmllbGRzXSA9IHVzZVN0YXRlKFtcclxuICAgIHtcclxuICAgICAgbmFtZTogWydpbnRyb190aXRsZSddLFxyXG4gICAgICB2YWx1ZTogJycsXHJcbiAgICB9LFxyXG4gIF0pO1xyXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hFZGl0RGF0YSgpO1xyXG4gIH0sIFtkYXRhRWRpdF0pO1xyXG5cclxuICBjb25zdCBmZXRjaEVkaXREYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKGRhdGFFZGl0KSB7XHJcbiAgICAgIHNldFByZXZpZXdJbWFnZSgnLi5cXFxcLi5cXFxcLi5cXFxcdXBsb2Fkc1xcXFxjLScgK1xyXG4gICAgICAgIHVzZXIub3JnYW5pemF0aW9uX2lkICtcclxuICAgICAgICAnXFxcXGNvdmVyXFxcXCcgK1xyXG4gICAgICAgIGRhdGFFZGl0LmhlYWRlcl9pbWFnZSlcclxuICAgICAgc2V0UHJldmlld1Zpc2libGUodHJ1ZSlcclxuICAgICAgc2V0SW1hZ2VMYW5kaW5nUGFnZShkYXRhRWRpdC5oZWFkZXJfaW1hZ2UpXHJcbiAgICAgIHNldEFjdGl2ZShkYXRhRWRpdC5pc19zaG93ID8gMSA6IDApXHJcbiAgICAgIHNldEZpZWxkcyhbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogWydoZWFkZXJfbGluayddLFxyXG4gICAgICAgICAgdmFsdWU6ICFkYXRhRWRpdCA/ICcnIDogZGF0YUVkaXQuaGVhZGVyX2xpbmssXHJcbiAgICAgICAgfSxcclxuICAgICAgXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gYXN5bmMgdmFsdWUgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaGVhZGVyX2ltYWdlOiBpbWFnZUxhbmRpbmdQYWdlLFxyXG4gICAgICBoZWFkZXJfbGluazogdmFsdWUuaGVhZGVyX2xpbmssXHJcbiAgICAgIGlzX3Nob3c6IGFjdGl2ZSxcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGNvbnN0IHJlZ2lzdGVyRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkucHV0KFxyXG4gICAgICAnL2NvdmVybWVudS8nICsgKGRhdGFFZGl0ID8gZGF0YUVkaXQuaGVhZGVyX2lkIDogMCksXHJcbiAgICAgIGRhdGEsXHJcbiAgICApO1xyXG4gICAgLy8gaWYgKHJlZ2lzdGVyRGF0YS5kYXRhLnN0YXR1cyA9PSAyMDApIHtcclxuICAgIC8vICAgb3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MoKTtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAvLyAgIG9wZW5Ob3RpZmljYXRpb25GYWlsKHJlZ2lzdGVyRGF0YS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGZldGNoKCk7XHJcbiAgICBmb3JtLnJlc2V0RmllbGRzKCk7XHJcbiAgICBoaWRlRWRpdE1vZGFsKHJlZ2lzdGVyRGF0YS5kYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuTm90aWZpY2F0aW9uU3VjY2VzcyA9ICgpID0+IHtcclxuICAgIGFwaTIuc3VjY2Vzcyh7XHJcbiAgICAgIG1lc3NhZ2U6IGDguJrguLHguJnguJfguLbguIHguKHguLnguKXguKrguLPguYDguKPguYfguIhgLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ+C4muC4seC4meC4l+C4tuC4geC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iCcsXHJcbiAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25GYWlsID0gbWVzc2dhZSA9PiB7XHJcbiAgICBhcGkyLmVycm9yKHtcclxuICAgICAgbWVzc2FnZTogYOC4nuC4muC4m+C4seC4jeC4q+C4suC4o+C4sOC4q+C4p+C5iOC4suC4h+C4geC4suC4o+C4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4uWRkZGTguKVgLFxyXG4gICAgICBkZXNjcmlwdGlvbjogbWVzc2dhZSxcclxuICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25SZXNldCA9ICgpID0+IHtcclxuXHJcbiAgICBzZXRQcmV2aWV3SW1hZ2UoJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICtcclxuICAgICAgdXNlci5vcmdhbml6YXRpb25faWQgK1xyXG4gICAgICAnXFxcXGNvdmVyXFxcXCcgK1xyXG4gICAgICBkYXRhRWRpdC5oZWFkZXJfaW1hZ2UpXHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZSh0cnVlKVxyXG4gICAgc2V0SW1hZ2VMYW5kaW5nUGFnZShkYXRhRWRpdC5oZWFkZXJfaW1hZ2UpXHJcbiAgICBzZXRBY3RpdmUoZGF0YUVkaXQuaXNfc2hvdyA/IDEgOiAwKVxyXG5cclxuICAgIHNldEZpZWxkcyhbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2hlYWRlcl9saW5rJ10sXHJcbiAgICAgICAgdmFsdWU6ICFkYXRhRWRpdCA/ICcnIDogZGF0YUVkaXQuaGVhZGVyX2xpbmssXHJcbiAgICAgIH0sXHJcbiAgICBdKTtcclxuXHJcbiAgICBmb3JtLnJlc2V0RmllbGRzKCk7XHJcblxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGltYWdlVXBsb2FkcHJvcHMgPSB7XHJcbiAgICBuYW1lOiAnZmlsZScsXHJcbiAgICBtdWx0aXBsZTogZmFsc2UsXHJcbiAgICBsaXN0VHlwZTogJ3RleHQnLFxyXG4gICAgbWF4Q291bnQ6IDEsXHJcbiAgICBhY3Rpb246IFwiL2FwaS91cGxvYWQvY292ZXJcIixcclxuICAgIHByZXZpZXc6IGZhbHNlLFxyXG4gICAgLy8gdWlkOiB1c2VyLnR5cGVfdXNlciA9PSAxID8gXCJhZG1pblwiIDogdXNlci5vcmdhbml6YXRpb25faWQsXHJcbiAgICAvLyBiZWZvcmVVcGxvYWQoZmlsZSkge1xyXG4gICAgLy8gXHRjb25zdCBpc0x0MTBNID0gZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgPCAxMFxyXG4gICAgLy8gXHRpZiAoIWlzTHQxME0pIHtcclxuICAgIC8vIFx0XHRub3RpZmljYXRpb24ub3Blbih7XHJcbiAgICAvLyBcdFx0XHRtZXNzYWdlOiAnVXBsb2FkIGVycm9yIScsXHJcbiAgICAvLyBcdFx0XHRkZXNjcmlwdGlvbjogPFRleHQgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiPkltYWdlIG11c3Qgc21hbGxlciB0aGFuIDEwTUIhPC9UZXh0PixcclxuICAgIC8vIFx0XHR9KVxyXG4gICAgLy8gXHR9XHJcbiAgICAvLyBcdHJldHVybiBpc0x0MTBNXHJcbiAgICAvLyB9LFxyXG4gICAgY3VzdG9tUmVxdWVzdDogKG9wdGlvbnMpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgb3B0aW9ucy5maWxlKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnaWQnLCB1c2VyLnR5cGVfdXNlciA9PSAxID8gXCJhZG1pblwiIDogdXNlci5vcmdhbml6YXRpb25faWQpXHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICBcImhlYWRlcnNcIjoge1xyXG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogJ211bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PS0tLS1XZWJLaXRGb3JtQm91bmRhcnlxVHFKSXh2a1dGWXF2UDVzJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBheGlvcy5wb3N0KG9wdGlvbnMuYWN0aW9uLCBkYXRhLCBjb25maWcpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIC8vIGltYWdlTGFuZGluZ1BhZ2VcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMuZGF0YS5kYXRhLmxpc3RbMF0uX25hbWUpXHJcbiAgICAgICAgc2V0SW1hZ2VMYW5kaW5nUGFnZShyZXMuZGF0YS5kYXRhLmxpc3RbMF0uX25hbWUpXHJcbiAgICAgICAgb3B0aW9ucy5vblN1Y2Nlc3MocmVzLmRhdGEsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgfSlcclxuXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgb25DaGFuZ2UoaW5mbykge1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gaW5mby5maWxlXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXIpXHJcbiAgICAgIHN3aXRjaCAoaW5mby5maWxlLnN0YXR1cykge1xyXG4gICAgICAgIC8vIGNhc2UgXCJ1cGxvYWRpbmdcIjpcclxuICAgICAgICAvLyAgIG5leHRTdGF0ZS5zZWxlY3RlZEZpbGVMaXN0ID0gW2luZm8uZmlsZV07XHJcbiAgICAgICAgLy8gICBicmVhaztcclxuICAgICAgICBjYXNlIFwiZG9uZVwiOlxyXG4gICAgICAgICAgaWYgKCFpbmZvLmZpbGUudXJsICYmICFpbmZvLmZpbGUucHJldmlldykge1xyXG4gICAgICAgICAgICBpbmZvLmZpbGUucHJldmlldyA9IGF3YWl0IGdldEJhc2U2NChpbmZvLmZpbGUub3JpZ2luRmlsZU9iaik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRQcmV2aWV3SW1hZ2UoaW5mby5maWxlLnVybCB8fCBpbmZvLmZpbGUucHJldmlldylcclxuICAgICAgICAgIHNldFByZXZpZXdWaXNpYmxlKHRydWUpXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIC8vIGVycm9yIG9yIHJlbW92ZWRcclxuICAgICAgICAgIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuICAgICAgfVxyXG4gICAgICAvL2NvbnNvbGUubG9nKGluZm8uZmlsZSlcclxuXHJcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAvLyAgIHByZXZpZXdJbWFnZTogZmlsZS51cmwgfHwgZmlsZS5wcmV2aWV3LFxyXG4gICAgICAvLyAgIHByZXZpZXdWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAvLyB9KTtcclxuXHJcbiAgICB9LFxyXG4gICAgb25SZW1vdmUoaW5mbykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9uUmVtb3ZlXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IHJlc2V0SW1hZ2VQcmV2aWV3ID0gKCkgPT4ge1xyXG4gICAgc2V0UHJldmlld0ltYWdlKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArXHJcbiAgICAgIHVzZXIub3JnYW5pemF0aW9uX2lkICtcclxuICAgICAgJ1xcXFxjb3ZlclxcXFwnICtcclxuICAgICAgZGF0YUVkaXQuaGVhZGVyX2ltYWdlKVxyXG4gICAgc2V0UHJldmlld1Zpc2libGUodHJ1ZSlcclxuICAgIHNldEltYWdlTGFuZGluZ1BhZ2UoZGF0YUVkaXQuaGVhZGVyX2ltYWdlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0QmFzZTY0KGZpbGUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcclxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBlcnJvciA9PiByZWplY3QoZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2NvbnRleHRIb2xkZXIyfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIuC5geC4geC5ieC5hOC4guC4q+C4seC4p+C5gOC4p+C5h+C4muC5hOC4i+C4leC5jFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgY2VudGVyZWRcclxuICAgICAgICB2aXNpYmxlPXtfdmlzaWJsZX1cclxuICAgICAgICAvLyBvbk9rPXsoKSA9PiBvbk9LKCl9XHJcbiAgICAgICAgb25DYW5jZWw9eygpID0+IHtcclxuICAgICAgICAgIC8vIGZvcm0ucmVzZXRGaWVsZHMoKTtcclxuICAgICAgICAgIHJlc2V0SW1hZ2VQcmV2aWV3KCk7XHJcbiAgICAgICAgICBoaWRlRWRpdE1vZGFsKGZhbHNlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIHdpZHRoPXsxMDAwfVxyXG4gICAgICAgIGZvb3Rlcj17bnVsbH1cclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtXHJcbiAgICAgICAgICBuYW1lPVwiYmFzaWNcIlxyXG4gICAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgb25GaW5pc2g9e29uU3VibWl0SGFuZGxlcn1cclxuICAgICAgICAgIHJlcXVpcmVkTWFyaz17dHJ1ZX1cclxuICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICBmaWVsZHM9e2ZpZWxkc31cclxuICAgICAgICA+PEZvcm0uSXRlbVxyXG4gICAgICAgICAgbmFtZT1cIiMjXCJcclxuICAgICAgICAgIGxhYmVsPVwi4Lig4Liy4Lie4Lil4Li04LiH4LiE4LmM4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZ4LiX4Li14LmI4LmA4LiB4Li14LmI4Lii4Lin4LiC4LmJ4Lit4LiHIDpcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAvLyAgIHtcclxuICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguYDguKXguLfguK3guIHguKDguLLguJ7guKXguLTguIfguITguYzguKvguJnguYjguKfguKLguIfguLLguJnguJfguLXguYjguYDguIHguLXguYjguKLguKfguILguYnguK3guIcnLFxyXG4gICAgICAgIC8vICAgfSxcclxuICAgICAgICAvLyBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgey8qIDxEcmFnZ2VyIHsuLi5kcm9waW1nfT4gKi99XHJcbiAgICAgICAgICAgIDxEcmFnZ2VyXHJcbiAgICAgICAgICAgICAgbWF4Q291bnQ9ezF9XHJcbiAgICAgICAgICAgICAgLy8gbGlzdFR5cGU9XCJwaWN0dXJlXCJcclxuICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAuanBlZywgLnBuZ1wiXHJcbiAgICAgICAgICAgICAgey4uLmltYWdlVXBsb2FkcHJvcHN9XHJcbiAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAge3ByZXZpZXdWaXNpYmxlICYmIDw+PEltYWdlXHJcbiAgICAgICAgICAgICAgICAvLyB3aWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgICAgcHJldmlldz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBzcmM9e3ByZXZpZXdJbWFnZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB7IXByZXZpZXdWaXNpYmxlICYmIDw+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW5ib3hPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgIOC4hOC4peC4tOC4gSDguKvguKPguLfguK0g4Lil4Liy4LiB4LmE4Lif4Lil4LmM4Lih4Liy4LiX4Li14LmI4Lia4Lij4Li04LmA4Lin4LiT4LiZ4Li14LmJ4LmA4Lie4Li34LmI4Lit4Lit4Lix4Lib4LmC4Lir4Lil4LiUXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0RyYWdnZXI+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgbmFtZT1cImhlYWRlcl9saW5rXCJcclxuICAgICAgICAgICAgbGFiZWw9XCLguKXguLTguIfguITguYxcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBmbG9hdDogJ2xlZnQnIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguKXguLTguIfguITguYwgVVJMJyxcclxuICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4Lil4Li04LiH4LiE4LmMXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHRleHQtbGVmdCB3LTEvMlwiPlxyXG4gICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3dC1idG5cIlxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17YWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dmFsdWUgPT4gc2V0QWN0aXZlKHZhbHVlID8gMSA6IDApfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXgtMiB0ZXh0LXNtXCI+4LiB4Liy4Lij4LmB4Liq4LiU4LiH4Lic4LilPC9wPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy0xLzIgbXQtNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbGc6dGV4dC1yaWdodCB3LWZ1bGwgbGc6dy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17b25SZXNldH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjQzJDRkUwJyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDMkNGRTAnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMCxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwcHggIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUgIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8vIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdy1mdWxsIGxnOnctMS80XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGV4dC1jdXN0b20tYmxhY2sgXCI+4Lij4Li14LmA4LiL4LmH4LiXPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIC8vIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDU5NjY5JyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyMwNTk2NjknLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMCxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwcHggIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSB3LWZ1bGwgbGc6dy0xLzRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbS13aGl0ZSBcIj7guJrguLHguJnguJfguLbguIE8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogJ2xlZnQnLCBjbGVhcjogJ2JvdGgnIH19IHJlZj17ZGl2UmVmfT48L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==