webpackHotUpdate("static\\development\\pages\\admin\\management-information.js",{

/***/ "./pages/admin/management-information/index.js":
/*!*****************************************************!*\
  !*** ./pages/admin/management-information/index.js ***!
  \*****************************************************/
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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../middleware/utils */ "./middleware/utils.js");
/* harmony import */ var _components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/layout/LayoutAdmin */ "./components/layout/LayoutAdmin.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);




var _jsxFileName = "D:\\govermentlt\\pages\\admin\\management-information\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;



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
/* utils */

_c2 = JoditEditor;

/* components */

 // import UserNav from '../components/navigation/User';





var Text = antd__WEBPACK_IMPORTED_MODULE_9__["Typography"].Text,
    Title = antd__WEBPACK_IMPORTED_MODULE_9__["Typography"].Title;

var config = __webpack_require__(/*! ../config */ "./pages/admin/config.js");

var __N_SSP = true;
function Home(props) {
  _s();

  var _notification$useNoti = antd__WEBPACK_IMPORTED_MODULE_9__["notification"].useNotification(),
      _notification$useNoti2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_notification$useNoti, 2),
      api = _notification$useNoti2[0],
      contextHolder = _notification$useNoti2[1];

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_9__["Form"].useForm(),
      _Form$useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var user = props.user,
      origin = props.origin;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(null),
      login = _useState[0],
      setLogin = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(null),
      news = _useState2[0],
      setNews = _useState2[1];

  var editor = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])(null);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(''),
      content = _useState3[0],
      setContent = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    fetchOrganizationData();
  }, []);

  var fetchOrganizationData = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _newsData;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["apiInstance"])().get('information-news/1');

            case 2:
              _newsData = _context.sent;
              console.log(_newsData.data.information_news);
              setContent(_newsData ? _newsData.data.information_news.infor_detail : '');
              setNews(_newsData.data.information_news);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchOrganizationData() {
      return _ref.apply(this, arguments);
    };
  }();

  var onSubmitHandler = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(value) {
      var data, registerData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log(content);
              data = {
                'infor_detail': content
              }; // console.log(data)

              _context2.next = 4;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["apiInstance"])().put('/information-news/1', data);

            case 4:
              registerData = _context2.sent;

              if (registerData.data.status == 200) {
                openNotificationSuccess();
                fetchOrganizationData();
              } else {
                openNotificationFail(registerData.data.message);
              }

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onSubmitHandler(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var openNotificationSuccess = function openNotificationSuccess() {
    api.success({
      message: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
      description: 'บันทึกข้อมูลสำเร็จ',
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
    // form.resetFields();
    setContent(news.infor_detail);
  };

  return __jsx(_components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_7__["default"], {
    titlePage: "จัดการข่าวประชาสัมพันธ์",
    isMain: true,
    indexMenu: "2",
    title: "Government - Admin management",
    url: origin,
    origin: origin,
    user: login,
    props: props,
    _routes: [{
      path: '/admin/dashborad',
      breadcrumbName: 'หน้าหลัก'
    }, {
      path: '/admin/management-information',
      breadcrumbName: 'ข่าวประชาสัมพันธ์'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, contextHolder, __jsx(JoditEditor, {
    ref: editor,
    value: content,
    config: config.config(user),
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
      lineNumber: 116,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Form"], {
    name: "basic",
    layout: "vertical",
    onFinish: onSubmitHandler,
    requiredMark: true,
    form: form // fields={fields}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Form"].Item, {
    className: "flex mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "text-center lg:text-right w-full lg:w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Button"], {
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
      lineNumber: 138,
      columnNumber: 13
    }
  }, __jsx(Text, {
    className: "text-custom-black ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 15
    }
  }, "\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E17")), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Button"] // type="primary"
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
      lineNumber: 155,
      columnNumber: 13
    }
  }, __jsx(Text, {
    className: "text-custom-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 15
    }
  }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"))))));
}
/* getServerSideProps */

_s(Home, "F8AHVhTomXsuiuao6tJ7esQpTIA=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_9__["notification"].useNotification, antd__WEBPACK_IMPORTED_MODULE_9__["Form"].useForm];
});

_c3 = Home;

var _c, _c2, _c3;

$RefreshReg$(_c, "JoditEditor$dynamic");
$RefreshReg$(_c2, "JoditEditor");
$RefreshReg$(_c3, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9tYW5hZ2VtZW50LWluZm9ybWF0aW9uL2luZGV4LmpzIl0sIm5hbWVzIjpbIkpvZGl0RWRpdG9yIiwiZHluYW1pYyIsInNzciIsIlRleHQiLCJUeXBvZ3JhcGh5IiwiVGl0bGUiLCJjb25maWciLCJyZXF1aXJlIiwiSG9tZSIsInByb3BzIiwibm90aWZpY2F0aW9uIiwidXNlTm90aWZpY2F0aW9uIiwiYXBpIiwiY29udGV4dEhvbGRlciIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInVzZXIiLCJvcmlnaW4iLCJ1c2VTdGF0ZSIsImxvZ2luIiwic2V0TG9naW4iLCJuZXdzIiwic2V0TmV3cyIsImVkaXRvciIsInVzZVJlZiIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwidXNlRWZmZWN0IiwiZmV0Y2hPcmdhbml6YXRpb25EYXRhIiwiYXBpSW5zdGFuY2UiLCJnZXQiLCJfbmV3c0RhdGEiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImluZm9ybWF0aW9uX25ld3MiLCJpbmZvcl9kZXRhaWwiLCJvblN1Ym1pdEhhbmRsZXIiLCJ2YWx1ZSIsInB1dCIsInJlZ2lzdGVyRGF0YSIsInN0YXR1cyIsIm9wZW5Ob3RpZmljYXRpb25TdWNjZXNzIiwib3Blbk5vdGlmaWNhdGlvbkZhaWwiLCJtZXNzYWdlIiwic3VjY2VzcyIsImRlc2NyaXB0aW9uIiwicGxhY2VtZW50IiwibWVzc2dhZSIsImVycm9yIiwib25SZXNldCIsInBhdGgiLCJicmVhZGNydW1iTmFtZSIsIm5ld0NvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luQm90dG9tIiwibWFyZ2luUmlnaHQiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBR0EsSUFBTUEsV0FBVyxHQUFHQyxtREFBTyxNQUFDO0FBQUEs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O0FBREY7QUFFRSxTQUFLLEVBQUU7QUFDTE4scUJBQWUsRUFBRSxTQURaO0FBRUxDLGlCQUFXLEVBQUUsU0FGUjtBQUdMQyxZQUFNLEVBQUUsRUFISDtBQUlMQyxXQUFLLEVBQUUsR0FKRjtBQUtMQyxrQkFBWSxFQUFFLGdCQUxUO0FBTUxFLFdBQUssRUFBRTtBQU5GLEtBRlQ7QUFVRSxZQUFRLEVBQUMsUUFWWDtBQVdFLGFBQVMsRUFBQyw0SUFYWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBYUUsTUFBQyxJQUFEO0FBQU0sYUFBUyxFQUFDLG9CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQWJGLENBbEJGLENBSEYsQ0FURixDQXJCRixDQURGO0FBNkVEO0FBQ0Q7O0dBOUl3QnJELEk7VUFDT0UsaURBQVksQ0FBQ0MsZSxFQUMzQkcseUNBQUksQ0FBQ0MsTzs7O01BRkVQLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFkbWluXFxtYW5hZ2VtZW50LWluZm9ybWF0aW9uLmpzLjMwZDQzZWEyMDIzOTA1OWMzZGQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IFJlYWN0RE9NLCB7IGZsdXNoU3luYyB9IGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5cclxuY29uc3QgSm9kaXRFZGl0b3IgPSBkeW5hbWljKCgpID0+IGltcG9ydChcImpvZGl0LXJlYWN0XCIpLCB7IHNzcjogZmFsc2UgfSk7XHJcblxyXG5cclxuLyogdXRpbHMgKi9cclxuaW1wb3J0IHsgYWJzb2x1dGVVcmwsIGNoZWNrSXNMb2dpbiwgYXBpSW5zdGFuY2UgfSBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL3V0aWxzJztcclxuXHJcbi8qIGNvbXBvbmVudHMgKi9cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRBZG1pbic7XHJcbi8vIGltcG9ydCBVc2VyTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9Vc2VyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHtcclxuICBDYXJvdXNlbCxcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgSW1hZ2UsXHJcbiAgQnV0dG9uLFxyXG4gIElucHV0LFxyXG4gIENhcmQsXHJcbiAgU3dpdGNoLFxyXG4gIEZvcm0sXHJcbiAgbm90aWZpY2F0aW9uXHJcbn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEluYm94T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IHNldCB9IGZyb20gJ2pzLWNvb2tpZSc7XHJcbmNvbnN0IHsgVGV4dCwgVGl0bGUgfSA9IFR5cG9ncmFwaHk7XHJcblxyXG5cclxuXHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG4gIGNvbnN0IFthcGksIGNvbnRleHRIb2xkZXJdID0gbm90aWZpY2F0aW9uLnVzZU5vdGlmaWNhdGlvbigpO1xyXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG4gIGNvbnN0IHsgdXNlciwgb3JpZ2luIH0gPSBwcm9wcztcclxuICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW25ld3MsIHNldE5ld3NdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgY29uc3QgZWRpdG9yID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpXHJcblxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoT3JnYW5pemF0aW9uRGF0YSgpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGZldGNoT3JnYW5pemF0aW9uRGF0YSA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBfbmV3c0RhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ2luZm9ybWF0aW9uLW5ld3MvMSdcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhfbmV3c0RhdGEuZGF0YS5pbmZvcm1hdGlvbl9uZXdzKVxyXG4gICAgc2V0Q29udGVudChfbmV3c0RhdGEgPyBfbmV3c0RhdGEuZGF0YS5pbmZvcm1hdGlvbl9uZXdzLmluZm9yX2RldGFpbCA6ICcnKVxyXG4gICAgc2V0TmV3cyhfbmV3c0RhdGEuZGF0YS5pbmZvcm1hdGlvbl9uZXdzKVxyXG4gIH1cclxuICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSBhc3luYyAodmFsdWUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGNvbnRlbnQpXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAnaW5mb3JfZGV0YWlsJzogY29udGVudFxyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSlcclxuICAgIGNvbnN0IHJlZ2lzdGVyRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkucHV0KCcvaW5mb3JtYXRpb24tbmV3cy8xJyAsIGRhdGEpO1xyXG4gICAgaWYgKHJlZ2lzdGVyRGF0YS5kYXRhLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MoKVxyXG4gICAgICBmZXRjaE9yZ2FuaXphdGlvbkRhdGEoKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvcGVuTm90aWZpY2F0aW9uRmFpbChyZWdpc3RlckRhdGEuZGF0YS5tZXNzYWdlKVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25TdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgYXBpLnN1Y2Nlc3Moe1xyXG4gICAgICBtZXNzYWdlOiBg4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIYCxcclxuICAgICAgZGVzY3JpcHRpb246ICfguJrguLHguJnguJfguLbguIHguILguYnguK3guKHguLnguKXguKrguLPguYDguKPguYfguIgnLFxyXG4gICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuTm90aWZpY2F0aW9uRmFpbCA9IChtZXNzZ2FlKSA9PiB7XHJcbiAgICBhcGkuZXJyb3Ioe1xyXG4gICAgICBtZXNzYWdlOiBg4Lie4Lia4Lib4Lix4LiN4Lir4Liy4Lij4Liw4Lir4Lin4LmI4Liy4LiH4LiB4Liy4Lij4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54LilYCxcclxuICAgICAgZGVzY3JpcHRpb246IG1lc3NnYWUsXHJcbiAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCBvblJlc2V0ID0gKCkgPT4ge1xyXG4gICAgLy8gZm9ybS5yZXNldEZpZWxkcygpO1xyXG4gICAgc2V0Q29udGVudChuZXdzLmluZm9yX2RldGFpbClcclxuXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZVBhZ2U9e1wi4LiI4Lix4LiU4LiB4Liy4Lij4LiC4LmI4Liy4Lin4Lib4Lij4Liw4LiK4Liy4Liq4Lix4Lih4Lie4Lix4LiZ4LiY4LmMXCJ9IGlzTWFpbj17dHJ1ZX0gaW5kZXhNZW51PXtcIjJcIn0gdGl0bGU9XCJHb3Zlcm5tZW50IC0gQWRtaW4gbWFuYWdlbWVudFwiIHVybD17b3JpZ2lufSBvcmlnaW49e29yaWdpbn0gdXNlcj17bG9naW59IHByb3BzPXtwcm9wc31cclxuICAgICAgX3JvdXRlcz17W1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhdGg6ICcvYWRtaW4vZGFzaGJvcmFkJyxcclxuICAgICAgICAgIGJyZWFkY3J1bWJOYW1lOiAn4Lir4LiZ4LmJ4Liy4Lir4Lil4Lix4LiBJyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBwYXRoOiAnL2FkbWluL21hbmFnZW1lbnQtaW5mb3JtYXRpb24nLFxyXG4gICAgICAgICAgYnJlYWRjcnVtYk5hbWU6ICfguILguYjguLLguKfguJvguKPguLDguIrguLLguKrguLHguKHguJ7guLHguJnguJjguYwnLFxyXG4gICAgICAgIH1dXHJcbiAgICAgIH1cclxuICAgID5cclxuICAgICAge2NvbnRleHRIb2xkZXJ9XHJcbiAgICAgIDxKb2RpdEVkaXRvclxyXG4gICAgICAgIHJlZj17ZWRpdG9yfVxyXG4gICAgICAgIHZhbHVlPXtjb250ZW50fVxyXG4gICAgICAgIGNvbmZpZz17Y29uZmlnLmNvbmZpZyh1c2VyKX1cclxuICAgICAgICB0YWJJbmRleD17MX0gLy8gdGFiSW5kZXggb2YgdGV4dGFyZWFcclxuICAgICAgICBvbkJsdXI9e25ld0NvbnRlbnQgPT4gc2V0Q29udGVudChuZXdDb250ZW50KX0gLy8gcHJlZmVycmVkIHRvIHVzZSBvbmx5IHRoaXMgb3B0aW9uIHRvIHVwZGF0ZSB0aGUgY29udGVudCBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xyXG4gICAgICAgIG9uQ2hhbmdlPXtuZXdDb250ZW50ID0+IHsgfX1cclxuICAgICAgLz5cclxuICAgICAgPGJyLz5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBuYW1lPVwiYmFzaWNcIlxyXG4gICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICBvbkZpbmlzaD17b25TdWJtaXRIYW5kbGVyfVxyXG4gICAgICAgIHJlcXVpcmVkTWFyaz17dHJ1ZX1cclxuICAgICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICAvLyBmaWVsZHM9e2ZpZWxkc31cclxuICAgICAgPlxyXG5cclxuICAgICAgICA8Rm9ybS5JdGVtIGNsYXNzTmFtZT1cImZsZXggbXQtNlwiPlxyXG5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGxnOnRleHQtcmlnaHQgdy1mdWxsIGxnOnctZnVsbFwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgaHRtbFR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVzZXR9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNDMkNGRTAnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQzJDRkUwJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTEwLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMHB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcycHgnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8vIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSB3LWZ1bGwgbGc6dy0xLzRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGV4dC1jdXN0b20tYmxhY2sgXCI+4Lij4Li14LmA4LiL4LmH4LiXPC9UZXh0PlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIC8vIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzA1OTY2OScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyMwNTk2NjknLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwcHggIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHctZnVsbCBsZzp3LTEvNFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbS13aGl0ZSBcIj7guJrguLHguJnguJfguLbguIE8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8L0Zvcm0+XHJcblxyXG5cclxuXHJcblxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4vKiBnZXRTZXJ2ZXJTaWRlUHJvcHMgKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyByZXEgfSA9IGNvbnRleHQ7XHJcbiAgY29uc3QgeyBvcmlnaW4gfSA9IGFic29sdXRlVXJsKHJlcSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBvcmlnaW4sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=