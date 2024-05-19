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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../middleware/utils */ "./middleware/utils.js");
/* harmony import */ var _components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/layout/LayoutAdmin */ "./components/layout/LayoutAdmin.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");




var _jsxFileName = "D:\\govermentlt\\pages\\admin\\management-information\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

var JoditEditor = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {
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



var Text = antd__WEBPACK_IMPORTED_MODULE_7__["Typography"].Text,
    Title = antd__WEBPACK_IMPORTED_MODULE_7__["Typography"].Title;

var config = __webpack_require__(/*! ../config */ "./pages/admin/config.js");

var __N_SSP = true;
function Home(props) {
  _s();

  var _notification$useNoti = antd__WEBPACK_IMPORTED_MODULE_7__["notification"].useNotification(),
      _notification$useNoti2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_notification$useNoti, 2),
      api = _notification$useNoti2[0],
      contextHolder = _notification$useNoti2[1];

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_7__["Form"].useForm(),
      _Form$useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var user = props.user,
      origin = props.origin;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null),
      login = _useState[0],
      setLogin = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null),
      news = _useState2[0],
      setNews = _useState2[1];

  var editor = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(''),
      content = _useState3[0],
      setContent = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
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
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_4__["apiInstance"])().get('information-news/1');

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
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_4__["apiInstance"])().put('/information-news/1', data);

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

  return __jsx(_components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
      breadcrumbName: 'จัดการข่าวประชาสัมพันธ์'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
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
      lineNumber: 105,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Form"], {
    name: "basic",
    layout: "vertical",
    onFinish: onSubmitHandler,
    requiredMark: true,
    form: form // fields={fields}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Form"].Item, {
    className: "flex mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "text-center lg:text-right w-full lg:w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Button"], {
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
      lineNumber: 127,
      columnNumber: 13
    }
  }, __jsx(Text, {
    className: "text-custom-black ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 15
    }
  }, "\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E17")), __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Button"] // type="primary"
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
      lineNumber: 144,
      columnNumber: 13
    }
  }, __jsx(Text, {
    className: "text-custom-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"))))));
}
/* getServerSideProps */

_s(Home, "F8AHVhTomXsuiuao6tJ7esQpTIA=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_7__["notification"].useNotification, antd__WEBPACK_IMPORTED_MODULE_7__["Form"].useForm];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9tYW5hZ2VtZW50LWluZm9ybWF0aW9uL2luZGV4LmpzIl0sIm5hbWVzIjpbIkpvZGl0RWRpdG9yIiwiZHluYW1pYyIsInNzciIsIlRleHQiLCJUeXBvZ3JhcGh5IiwiVGl0bGUiLCJjb25maWciLCJyZXF1aXJlIiwiSG9tZSIsInByb3BzIiwibm90aWZpY2F0aW9uIiwidXNlTm90aWZpY2F0aW9uIiwiYXBpIiwiY29udGV4dEhvbGRlciIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInVzZXIiLCJvcmlnaW4iLCJ1c2VTdGF0ZSIsImxvZ2luIiwic2V0TG9naW4iLCJuZXdzIiwic2V0TmV3cyIsImVkaXRvciIsInVzZVJlZiIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwidXNlRWZmZWN0IiwiZmV0Y2hPcmdhbml6YXRpb25EYXRhIiwiYXBpSW5zdGFuY2UiLCJnZXQiLCJfbmV3c0RhdGEiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImluZm9ybWF0aW9uX25ld3MiLCJpbmZvcl9kZXRhaWwiLCJvblN1Ym1pdEhhbmRsZXIiLCJ2YWx1ZSIsInB1dCIsInJlZ2lzdGVyRGF0YSIsInN0YXR1cyIsIm9wZW5Ob3RpZmljYXRpb25TdWNjZXNzIiwib3Blbk5vdGlmaWNhdGlvbkZhaWwiLCJtZXNzYWdlIiwic3VjY2VzcyIsImRlc2NyaXB0aW9uIiwicGxhY2VtZW50IiwibWVzc2dhZSIsImVycm9yIiwib25SZXNldCIsInBhdGgiLCJicmVhZGNydW1iTmFtZSIsIm5ld0NvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luQm90dG9tIiwibWFyZ2luUmlnaHQiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUdBLElBQU1BLFdBQVcsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sd0pBQU47QUFBQSxD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cUJBQWUsRUFBRSxTQURaO0FBRUxDLGlCQUFXLEVBQUUsU0FGUjtBQUdMQyxZQUFNLEVBQUUsRUFISDtBQUlMQyxXQUFLLEVBQUUsR0FKRjtBQUtMQyxrQkFBWSxFQUFFLGdCQUxUO0FBTUxFLFdBQUssRUFBRTtBQU5GLEtBRlQ7QUFVRSxZQUFRLEVBQUMsUUFWWDtBQVdFLGFBQVMsRUFBQyw0SUFYWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBYUUsTUFBQyxJQUFEO0FBQU0sYUFBUyxFQUFDLG9CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQWJGLENBbEJGLENBSEYsQ0FURixDQXJCRixDQURGO0FBNkVEO0FBQ0Q7O0dBOUl3QnJELEk7VUFDT0UsaURBQVksQ0FBQ0MsZSxFQUMzQkcseUNBQUksQ0FBQ0MsTzs7O01BRkVQLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFkbWluXFxtYW5hZ2VtZW50LWluZm9ybWF0aW9uLmpzLjAxNmEwZDY3MDIzNTY5NmRhNjZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuXHJcblxyXG5jb25zdCBKb2RpdEVkaXRvciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiam9kaXQtcmVhY3RcIiksIHsgc3NyOiBmYWxzZSB9KTtcclxuXHJcblxyXG4vKiB1dGlscyAqL1xyXG5pbXBvcnQgeyBhYnNvbHV0ZVVybCwgYXBpSW5zdGFuY2UgfSBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL3V0aWxzJztcclxuXHJcbi8qIGNvbXBvbmVudHMgKi9cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRBZG1pbic7XHJcbi8vIGltcG9ydCBVc2VyTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9Vc2VyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIEZvcm0sXHJcbiAgVHlwb2dyYXBoeSxcclxuICBub3RpZmljYXRpb25cclxufSBmcm9tICdhbnRkJztcclxuY29uc3QgeyBUZXh0LCBUaXRsZSB9ID0gVHlwb2dyYXBoeTtcclxuXHJcblxyXG5cclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcbiAgY29uc3QgW2FwaSwgY29udGV4dEhvbGRlcl0gPSBub3RpZmljYXRpb24udXNlTm90aWZpY2F0aW9uKCk7XHJcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcbiAgY29uc3QgeyB1c2VyLCBvcmlnaW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbbmV3cywgc2V0TmV3c10gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBjb25zdCBlZGl0b3IgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hPcmdhbml6YXRpb25EYXRhKClcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgZmV0Y2hPcmdhbml6YXRpb25EYXRhID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IF9uZXdzRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAnaW5mb3JtYXRpb24tbmV3cy8xJ1xyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKF9uZXdzRGF0YS5kYXRhLmluZm9ybWF0aW9uX25ld3MpXHJcbiAgICBzZXRDb250ZW50KF9uZXdzRGF0YSA/IF9uZXdzRGF0YS5kYXRhLmluZm9ybWF0aW9uX25ld3MuaW5mb3JfZGV0YWlsIDogJycpXHJcbiAgICBzZXROZXdzKF9uZXdzRGF0YS5kYXRhLmluZm9ybWF0aW9uX25ld3MpXHJcbiAgfVxyXG4gIGNvbnN0IG9uU3VibWl0SGFuZGxlciA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coY29udGVudClcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICdpbmZvcl9kZXRhaWwnOiBjb250ZW50XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgY29uc3QgcmVnaXN0ZXJEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5wdXQoJy9pbmZvcm1hdGlvbi1uZXdzLzEnLCBkYXRhKTtcclxuICAgIGlmIChyZWdpc3RlckRhdGEuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgIG9wZW5Ob3RpZmljYXRpb25TdWNjZXNzKClcclxuICAgICAgZmV0Y2hPcmdhbml6YXRpb25EYXRhKCk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvbkZhaWwocmVnaXN0ZXJEYXRhLmRhdGEubWVzc2FnZSlcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBvcGVuTm90aWZpY2F0aW9uU3VjY2VzcyA9ICgpID0+IHtcclxuICAgIGFwaS5zdWNjZXNzKHtcclxuICAgICAgbWVzc2FnZTogYOC4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iGAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAn4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIJyxcclxuICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvbkZhaWwgPSAobWVzc2dhZSkgPT4ge1xyXG4gICAgYXBpLmVycm9yKHtcclxuICAgICAgbWVzc2FnZTogYOC4nuC4muC4m+C4seC4jeC4q+C4suC4o+C4sOC4q+C4p+C5iOC4suC4h+C4geC4suC4o+C4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4pWAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBtZXNzZ2FlLFxyXG4gICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3Qgb25SZXNldCA9ICgpID0+IHtcclxuICAgIC8vIGZvcm0ucmVzZXRGaWVsZHMoKTtcclxuICAgIHNldENvbnRlbnQobmV3cy5pbmZvcl9kZXRhaWwpXHJcblxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGVQYWdlPXtcIuC4iOC4seC4lOC4geC4suC4o+C4guC5iOC4suC4p+C4m+C4o+C4sOC4iuC4suC4quC4seC4oeC4nuC4seC4meC4mOC5jFwifSBpc01haW49e3RydWV9IGluZGV4TWVudT17XCIyXCJ9IHRpdGxlPVwiR292ZXJubWVudCAtIEFkbWluIG1hbmFnZW1lbnRcIiB1cmw9e29yaWdpbn0gb3JpZ2luPXtvcmlnaW59IHVzZXI9e2xvZ2lufSBwcm9wcz17cHJvcHN9XHJcbiAgICAgIF9yb3V0ZXM9e1tcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYXRoOiAnL2FkbWluL2Rhc2hib3JhZCcsXHJcbiAgICAgICAgICBicmVhZGNydW1iTmFtZTogJ+C4q+C4meC5ieC4suC4q+C4peC4seC4gScsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgcGF0aDogJy9hZG1pbi9tYW5hZ2VtZW50LWluZm9ybWF0aW9uJyxcclxuICAgICAgICAgIGJyZWFkY3J1bWJOYW1lOiAn4LiI4Lix4LiU4LiB4Liy4Lij4LiC4LmI4Liy4Lin4Lib4Lij4Liw4LiK4Liy4Liq4Lix4Lih4Lie4Lix4LiZ4LiY4LmMJyxcclxuICAgICAgICB9XVxyXG4gICAgICB9XHJcbiAgICA+XHJcbiAgICAgIHtjb250ZXh0SG9sZGVyfVxyXG4gICAgICA8Sm9kaXRFZGl0b3JcclxuICAgICAgICByZWY9e2VkaXRvcn1cclxuICAgICAgICB2YWx1ZT17Y29udGVudH1cclxuICAgICAgICBjb25maWc9e2NvbmZpZy5jb25maWcodXNlcil9XHJcbiAgICAgICAgdGFiSW5kZXg9ezF9IC8vIHRhYkluZGV4IG9mIHRleHRhcmVhXHJcbiAgICAgICAgb25CbHVyPXtuZXdDb250ZW50ID0+IHNldENvbnRlbnQobmV3Q29udGVudCl9IC8vIHByZWZlcnJlZCB0byB1c2Ugb25seSB0aGlzIG9wdGlvbiB0byB1cGRhdGUgdGhlIGNvbnRlbnQgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcclxuICAgICAgICBvbkNoYW5nZT17bmV3Q29udGVudCA9PiB7IH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIG5hbWU9XCJiYXNpY1wiXHJcbiAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgIG9uRmluaXNoPXtvblN1Ym1pdEhhbmRsZXJ9XHJcbiAgICAgICAgcmVxdWlyZWRNYXJrPXt0cnVlfVxyXG4gICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgIC8vIGZpZWxkcz17ZmllbGRzfVxyXG4gICAgICA+XHJcblxyXG4gICAgICAgIDxGb3JtLkl0ZW0gY2xhc3NOYW1lPVwiZmxleCBtdC02XCI+XHJcblxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbGc6dGV4dC1yaWdodCB3LWZ1bGwgbGc6dy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBodG1sVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17b25SZXNldH1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0MyQ0ZFMCcsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDMkNGRTAnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwcHggIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzJweCcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLy8gaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHctZnVsbCBsZzp3LTEvNFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbS1ibGFjayBcIj7guKPguLXguYDguIvguYfguJc8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgLy8gdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDU5NjY5JyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzA1OTY2OScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDExMCxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzBweCAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUgIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdy1mdWxsIGxnOnctMS80XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRleHQtY3VzdG9tLXdoaXRlIFwiPuC4muC4seC4meC4l+C4tuC4gTwvVGV4dD5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDwvRm9ybT5cclxuXHJcblxyXG5cclxuXHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcbi8qIGdldFNlcnZlclNpZGVQcm9wcyAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHJlcSB9ID0gY29udGV4dDtcclxuICBjb25zdCB7IG9yaWdpbiB9ID0gYWJzb2x1dGVVcmwocmVxKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG9yaWdpbixcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==