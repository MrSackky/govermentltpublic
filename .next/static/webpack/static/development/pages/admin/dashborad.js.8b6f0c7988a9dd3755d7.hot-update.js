webpackHotUpdate("static\\development\\pages\\admin\\dashborad.js",{

/***/ "./pages/admin/dashborad/index.js":
/*!****************************************!*\
  !*** ./pages/admin/dashborad/index.js ***!
  \****************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../middleware/utils */ "./middleware/utils.js");
/* harmony import */ var _components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/layout/LayoutAdmin */ "./components/layout/LayoutAdmin.jsx");
/* harmony import */ var _index_admin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-admin */ "./pages/admin/dashborad/index-admin.js");
/* harmony import */ var _index_super_admin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-super-admin */ "./pages/admin/dashborad/index-super-admin.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");



var _jsxFileName = "D:\\govermentlt\\pages\\admin\\dashborad\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/* utils */

/* components */



 // import UserNav from '../components/navigation/User';



var Text = antd__WEBPACK_IMPORTED_MODULE_7__["Typography"].Text,
    Title = antd__WEBPACK_IMPORTED_MODULE_7__["Typography"].Title;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_7__["Input"].TextArea;
var __N_SSP = true;
function Home(props) {
  _s();

  var user = props.user,
      origin = props.origin;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      login = _useState[0],
      setLogin = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      shouldRun = _useState2[0],
      setShouldRun = _useState2[1];

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  var contentStyle = {
    height: 'auto',
    textAlign: 'center'
  };
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {// fetchUserLogin()
  }, []);

  function fetchUserLogin() {
    return _fetchUserLogin.apply(this, arguments);
  }

  function _fetchUserLogin() {
    _fetchUserLogin = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var userLogin;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_3__["checkIsLogin"])();

            case 2:
              userLogin = _context.sent;
              // console.log(userLogin)
              setUser(userLogin);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _fetchUserLogin.apply(this, arguments);
  }

  return __jsx(_components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Government - Admin management",
    titlePage: "\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01",
    isMain: 1,
    url: origin,
    origin: origin,
    user: login,
    props: props,
    indexMenu: "0",
    _routes: [{
      path: '/admin/dashborad',
      breadcrumbName: 'หน้าหลัก'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, user && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, user.type_user == 1 && __jsx(_index_super_admin__WEBPACK_IMPORTED_MODULE_6__["default"], {
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }), user.type_user == 2 && __jsx(_index_admin__WEBPACK_IMPORTED_MODULE_5__["default"], {
    userInfo: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }))));
}
/* getServerSideProps */

_s(Home, "V3IIhMI3hSYUoJjMmO7YwHsH624=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9kYXNoYm9yYWQvaW5kZXguanMiXSwibmFtZXMiOlsiVGV4dCIsIlR5cG9ncmFwaHkiLCJUaXRsZSIsIlRleHRBcmVhIiwiSW5wdXQiLCJIb21lIiwicHJvcHMiLCJ1c2VyIiwib3JpZ2luIiwidXNlU3RhdGUiLCJsb2dpbiIsInNldExvZ2luIiwic2hvdWxkUnVuIiwic2V0U2hvdWxkUnVuIiwib25DaGFuZ2UiLCJhIiwiYiIsImMiLCJjb25zb2xlIiwibG9nIiwiY29udGVudFN0eWxlIiwiaGVpZ2h0IiwidGV4dEFsaWduIiwidXNlRWZmZWN0IiwiZmV0Y2hVc2VyTG9naW4iLCJjaGVja0lzTG9naW4iLCJ1c2VyTG9naW4iLCJzZXRVc2VyIiwicGF0aCIsImJyZWFkY3J1bWJOYW1lIiwidHlwZV91c2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFFQTtBQUtBLElBQVFBLElBQVIsR0FBd0JDLCtDQUF4QixDQUFRRCxJQUFSO0FBQUEsSUFBY0UsS0FBZCxHQUF3QkQsK0NBQXhCLENBQWNDLEtBQWQ7QUFFQSxJQUFRQyxRQUFSLEdBQXFCQywwQ0FBckIsQ0FBUUQsUUFBUjs7QUFFZSxTQUFTRSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFDbEMsTUFBUUMsSUFBUixHQUF5QkQsS0FBekIsQ0FBUUMsSUFBUjtBQUFBLE1BQWNDLE1BQWQsR0FBeUJGLEtBQXpCLENBQWNFLE1BQWQ7O0FBQ0Esa0JBQTBCQyxzREFBUSxDQUFDLElBQUQsQ0FBbEM7QUFBQSxNQUFPQyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBa0NGLHNEQUFRLENBQUMsSUFBRCxDQUExQztBQUFBLE1BQU9HLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBRUEsV0FBU0MsUUFBVCxDQUFrQkMsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCQyxDQUF4QixFQUEyQjtBQUN6QkMsV0FBTyxDQUFDQyxHQUFSLENBQVlKLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsQ0FBbEI7QUFDRDs7QUFFRCxNQUFNRyxZQUFZLEdBQUc7QUFDbkJDLFVBQU0sRUFBRSxNQURXO0FBRW5CQyxhQUFTLEVBQUU7QUFGUSxHQUFyQjtBQUtBQyx5REFBUyxDQUFDLFlBQU0sQ0FDZDtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBZGtDLFdBa0JuQkMsY0FsQm1CO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVNQWtCbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDMEJDLHNFQUFZLEVBRHRDOztBQUFBO0FBQ1FDLHVCQURSO0FBRUU7QUFDQUMscUJBQU8sQ0FBQ0QsU0FBRCxDQUFQOztBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBbEJrQztBQUFBO0FBQUE7O0FBd0JsQyxTQUNFLE1BQUMsc0VBQUQ7QUFBUSxTQUFLLEVBQUMsK0JBQWQ7QUFBOEMsYUFBUyxFQUFDLGtEQUF4RDtBQUFtRSxVQUFNLEVBQUUsQ0FBM0U7QUFBOEUsT0FBRyxFQUFFbEIsTUFBbkY7QUFBMkYsVUFBTSxFQUFFQSxNQUFuRztBQUEyRyxRQUFJLEVBQUVFLEtBQWpIO0FBQXdILFNBQUssRUFBRUosS0FBL0g7QUFBc0ksYUFBUyxFQUFFLEdBQWpKO0FBQ0UsV0FBTyxFQUFFLENBQ1A7QUFDRXNCLFVBQUksRUFBRSxrQkFEUjtBQUVFQyxvQkFBYyxFQUFFO0FBRmxCLEtBRE8sQ0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHdEIsSUFBSSxJQUFJLG1FQUNOQSxJQUFJLENBQUN1QixTQUFMLElBQWtCLENBQWxCLElBQ0MsTUFBQywwREFBRDtBQUFpQixRQUFJLEVBQUV2QixJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkssRUFJTkEsSUFBSSxDQUFDdUIsU0FBTCxJQUFrQixDQUFsQixJQUNDLE1BQUMsb0RBQUQ7QUFBWSxZQUFRLEVBQUV2QixJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEssQ0FEWCxDQVBGLENBREY7QUF1QkQ7QUFDRDs7R0FoRHdCRixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pblxcZGFzaGJvcmFkLmpzLjhiNmYwYzc5ODhhOWRkMzc1NWQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogdXRpbHMgKi9cclxuaW1wb3J0IHsgYWJzb2x1dGVVcmwsIGNoZWNrSXNMb2dpbiB9IGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvdXRpbHMnO1xyXG5cclxuLyogY29tcG9uZW50cyAqL1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dEFkbWluJztcclxuaW1wb3J0IEluZGV4QWRtaW4gZnJvbSAnLi9pbmRleC1hZG1pbic7XHJcbmltcG9ydCBJbmRleFN1cGVyQWRtaW4gZnJvbSAnLi9pbmRleC1zdXBlci1hZG1pbic7XHJcbi8vIGltcG9ydCBVc2VyTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9Vc2VyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7XHJcbiAgSW5wdXQsXHJcbiAgVHlwb2dyYXBoeVxyXG59IGZyb20gJ2FudGQnO1xyXG5cclxuY29uc3QgeyBUZXh0LCBUaXRsZSB9ID0gVHlwb2dyYXBoeTtcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG4gIGNvbnN0IHsgdXNlciwgb3JpZ2luIH0gPSBwcm9wcztcclxuICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3Nob3VsZFJ1biwgc2V0U2hvdWxkUnVuXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKGEsIGIsIGMpIHtcclxuICAgIGNvbnNvbGUubG9nKGEsIGIsIGMpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29udGVudFN0eWxlID0ge1xyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBmZXRjaFVzZXJMb2dpbigpXHJcbiAgfSwgW10pXHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlckxvZ2luKCkge1xyXG4gICAgY29uc3QgdXNlckxvZ2luID0gYXdhaXQgY2hlY2tJc0xvZ2luKClcclxuICAgIC8vIGNvbnNvbGUubG9nKHVzZXJMb2dpbilcclxuICAgIHNldFVzZXIodXNlckxvZ2luKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGU9XCJHb3Zlcm5tZW50IC0gQWRtaW4gbWFuYWdlbWVudFwiIHRpdGxlUGFnZT1cIuC4q+C4meC5ieC4suC4q+C4peC4seC4gVwiIGlzTWFpbj17MX0gdXJsPXtvcmlnaW59IG9yaWdpbj17b3JpZ2lufSB1c2VyPXtsb2dpbn0gcHJvcHM9e3Byb3BzfSBpbmRleE1lbnU9e1wiMFwifVxyXG4gICAgICBfcm91dGVzPXtbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGF0aDogJy9hZG1pbi9kYXNoYm9yYWQnLFxyXG4gICAgICAgICAgYnJlYWRjcnVtYk5hbWU6ICfguKvguJnguYnguLLguKvguKXguLHguIEnLFxyXG4gICAgICAgIH1dfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt1c2VyICYmIDw+XHJcbiAgICAgICAgICB7dXNlci50eXBlX3VzZXIgPT0gMSAmJlxyXG4gICAgICAgICAgICA8SW5kZXhTdXBlckFkbWluIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7dXNlci50eXBlX3VzZXIgPT0gMiAmJlxyXG4gICAgICAgICAgICA8SW5kZXhBZG1pbiB1c2VySW5mbz17dXNlcn0gLz5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8Lz59XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4vKiBnZXRTZXJ2ZXJTaWRlUHJvcHMgKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyByZXEgfSA9IGNvbnRleHQ7XHJcbiAgY29uc3QgeyBvcmlnaW4gfSA9IGFic29sdXRlVXJsKHJlcSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBvcmlnaW4sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==