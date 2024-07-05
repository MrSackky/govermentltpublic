webpackHotUpdate("static\\development\\pages\\admin\\management-contact\\[contactId].js",{

/***/ "./pages/admin/management-contact/[contactId].js":
/*!*******************************************************!*\
  !*** ./pages/admin/management-contact/[contactId].js ***!
  \*******************************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/layout/LayoutAdmin */ "./components/layout/LayoutAdmin.jsx");
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../middleware/utils */ "./middleware/utils.js");





var _jsxFileName = "D:\\govermentlt\\pages\\admin\\management-contact\\[contactId].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

 // import UserNav from '../components/navigation/User';



/* components */


/* utils */

 // import { data } from 'autoprefixer';

var Text = antd__WEBPACK_IMPORTED_MODULE_5__["Typography"].Text,
    Title = antd__WEBPACK_IMPORTED_MODULE_5__["Typography"].Title;
var Option = antd__WEBPACK_IMPORTED_MODULE_5__["Select"].Option;
var __N_SSP = true;
function Home(props) {
  _s();

  var _jsx;

  var user = props.user,
      origin = props.origin;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      url = _useState[0],
      setUrl = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      contactData = _useState2[0],
      setContactData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([{
    name: ['question_title'],
    value: ''
  }]),
      fields = _useState3[0],
      setFields = _useState3[1];

  var _notification$useNoti = antd__WEBPACK_IMPORTED_MODULE_5__["notification"].useNotification(),
      _notification$useNoti2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_notification$useNoti, 2),
      api = _notification$useNoti2[0],
      contextHolder = _notification$useNoti2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var contactId = router.query.contactId;

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      data = _useState4[0],
      setData = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1),
      active = _useState5[0],
      setActive = _useState5[1];

  var actived = function actived() {
    active ? setActive(0) : setActive(1);
  };

  var validateURL = function validateURL(inputText) {
    setUrl(validator__WEBPACK_IMPORTED_MODULE_7___default.a.trim(inputText));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    fetchContactData();
  }, []);

  var fetchContactData = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var _contactData;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_9__["apiInstance"])().get('contact/' + contactId);

            case 2:
              _contactData = _context.sent;
              setData(_contactData.data.contact);
              setActive(_contactData.data.contact.is_done);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchContactData() {
      return _ref.apply(this, arguments);
    };
  }();

  function disabledDateTime() {
    return {
      disabledHours: function disabledHours() {
        return range(0, 24).splice(4, 20);
      },
      disabledMinutes: function disabledMinutes() {
        return range(30, 60);
      },
      disabledSeconds: function disabledSeconds() {
        return [55, 56];
      }
    };
  }

  function range(start, end) {
    var result = [];

    for (var i = start; i < end; i++) {
      result.push(i);
    }

    return result;
  }

  function onChange(_x) {
    return _onChange.apply(this, arguments);
  }

  function _onChange() {
    _onChange = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(active) {
      var data, contactData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              data = {
                organization_id: user.organization_id,
                is_done: active
              };
              _context2.next = 3;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_9__["apiInstance"])().put('/contact/' + contactId, data);

            case 3:
              contactData = _context2.sent;

              if (contactData.data.status == 200) {
                openNotificationRegisterSuccess();
                setTimeout(function () {
                  //Start the timer
                  router.push('/admin/management-contact');
                }.bind(this), 2000);
              } else {
                openNotificationRegisterFail(contactData.data.message);
              }

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));
    return _onChange.apply(this, arguments);
  }

  var openNotificationRegisterSuccess = function openNotificationRegisterSuccess() {
    api.success({
      message: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
      description: 'บันทึกข้อมูลสำเร็จ',
      placement: 'topRight'
    });
  };

  var openNotificationRegisterFail = function openNotificationRegisterFail(messgae) {
    api.error({
      message: "\u0E1E\u0E1A\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25",
      description: messgae,
      placement: 'topRight'
    });
  };

  return __jsx(_components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Government - Admin management",
    titlePage: 'แสดงรายละเอียดข้อมูลเมนูติดต่อเรา ' + (contactData ? contactData.contact_post : ''),
    url: origin,
    indexMenu: '4',
    origin: origin,
    props: props,
    _routes: [{
      path: '/admin/dashborad',
      breadcrumbName: 'หน้าหลัก'
    }, {
      path: '/admin/management-contact',
      breadcrumbName: 'จัดการข้อมูลเมนูติดต่อเรา'
    }, {
      path: '/admin/management-contact/contact',
      breadcrumbName: 'แสดงรายละเอียดข้อมูลเมนูติดต่อเรา'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, contextHolder, __jsx("div", {
    className: "text-base",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }, "\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D : ", data ? data.contact_post : '')), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14 : ", data ? data.contact_detail : '')), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, "\u0E1C\u0E39\u0E49\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D : ", data ? data.contact_name_posted : '')), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23 : ", data ? data.contact_telephone : '')), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, "email : ", data ? data.contact_email : '')), __jsx("ul", {
    className: "inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Switch"], (_jsx = {
    checked: active,
    onClick: actived
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "onClick", function onClick(value) {
    return setActive(value ? 1 : 0);
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "onChange", onChange), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 144,
    columnNumber: 13
  }), _jsx)), __jsx("p", {
    className: "mx-2 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, "\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23")))));
}
/* getServerSideProps */

_s(Home, "UVITdqt3yBc3dFwBnuvcAwQ+Ty8=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_5__["notification"].useNotification, next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9tYW5hZ2VtZW50LWNvbnRhY3QvW2NvbnRhY3RJZF0uanMiXSwibmFtZXMiOlsiVGV4dCIsIlR5cG9ncmFwaHkiLCJUaXRsZSIsIk9wdGlvbiIsIlNlbGVjdCIsIkhvbWUiLCJwcm9wcyIsInVzZXIiLCJvcmlnaW4iLCJ1c2VTdGF0ZSIsInVybCIsInNldFVybCIsImNvbnRhY3REYXRhIiwic2V0Q29udGFjdERhdGEiLCJuYW1lIiwidmFsdWUiLCJmaWVsZHMiLCJzZXRGaWVsZHMiLCJub3RpZmljYXRpb24iLCJ1c2VOb3RpZmljYXRpb24iLCJhcGkiLCJjb250ZXh0SG9sZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29udGFjdElkIiwicXVlcnkiLCJkYXRhIiwic2V0RGF0YSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImFjdGl2ZWQiLCJ2YWxpZGF0ZVVSTCIsImlucHV0VGV4dCIsInZhbGlkYXRvciIsInRyaW0iLCJ1c2VFZmZlY3QiLCJmZXRjaENvbnRhY3REYXRhIiwiYXBpSW5zdGFuY2UiLCJnZXQiLCJfY29udGFjdERhdGEiLCJjb250YWN0IiwiaXNfZG9uZSIsImRpc2FibGVkRGF0ZVRpbWUiLCJkaXNhYmxlZEhvdXJzIiwicmFuZ2UiLCJzcGxpY2UiLCJkaXNhYmxlZE1pbnV0ZXMiLCJkaXNhYmxlZFNlY29uZHMiLCJzdGFydCIsImVuZCIsInJlc3VsdCIsImkiLCJwdXNoIiwib25DaGFuZ2UiLCJvcmdhbml6YXRpb25faWQiLCJwdXQiLCJzdGF0dXMiLCJvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJTdWNjZXNzIiwic2V0VGltZW91dCIsImJpbmQiLCJvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJGYWlsIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJkZXNjcmlwdGlvbiIsInBsYWNlbWVudCIsIm1lc3NnYWUiLCJlcnJvciIsImNvbnRhY3RfcG9zdCIsInBhdGgiLCJicmVhZGNydW1iTmFtZSIsImNvbnRhY3RfZGV0YWlsIiwiY29udGFjdF9uYW1lX3Bvc3RlZCIsImNvbnRhY3RfdGVsZXBob25lIiwiY29udGFjdF9lbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0NBR0E7O0FBQ0EsSUFBUUEsSUFBUixHQUF3QkMsK0NBQXhCLENBQVFELElBQVI7QUFBQSxJQUFjRSxLQUFkLEdBQXdCRCwrQ0FBeEIsQ0FBY0MsS0FBZDtBQUNBLElBQVFDLE1BQVIsR0FBbUJDLDJDQUFuQixDQUFRRCxNQUFSOztBQUVlLFNBQVNFLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBOztBQUNsQyxNQUFRQyxJQUFSLEdBQXlCRCxLQUF6QixDQUFRQyxJQUFSO0FBQUEsTUFBY0MsTUFBZCxHQUF5QkYsS0FBekIsQ0FBY0UsTUFBZDs7QUFDQSxrQkFBc0JDLHNEQUFRLENBQUMsRUFBRCxDQUE5QjtBQUFBLE1BQU9DLEdBQVA7QUFBQSxNQUFZQyxNQUFaOztBQUNBLG1CQUFzQ0Ysc0RBQVEsQ0FBQyxJQUFELENBQTlDO0FBQUEsTUFBT0csV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxtQkFBNEJKLHNEQUFRLENBQUMsQ0FDbkM7QUFDRUssUUFBSSxFQUFFLENBQUMsZ0JBQUQsQ0FEUjtBQUVFQyxTQUFLLEVBQUU7QUFGVCxHQURtQyxDQUFELENBQXBDO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBTUEsOEJBQTZCQyxpREFBWSxDQUFDQyxlQUFiLEVBQTdCO0FBQUE7QUFBQSxNQUFPQyxHQUFQO0FBQUEsTUFBWUMsYUFBWjs7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBUUMsU0FBUixHQUFzQkYsTUFBTSxDQUFDRyxLQUE3QixDQUFRRCxTQUFSOztBQUNBLG1CQUF3QmYsc0RBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUEsTUFBT2lCLElBQVA7QUFB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0ZBRkYsQ0FoQkYsQ0FGRixDQXpCRixDQURGO0FBb0REO0FBQ0Q7O0dBekl3QmhELEk7VUFVT2EsaURBQVksQ0FBQ0MsZSxFQUMzQkkscUQ7OztLQVhPbEIsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWRtaW5cXG1hbmFnZW1lbnQtY29udGFjdFxcW2NvbnRhY3RJZF0uanMuZjQ2NmI5Nzc4ZTA1ZWUyOGMyNDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5vdGlmaWNhdGlvbiwgU2VsZWN0LCBTd2l0Y2gsIFR5cG9ncmFwaHkgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG4vLyBpbXBvcnQgVXNlck5hdiBmcm9tICcuLi9jb21wb25lbnRzL25hdmlnYXRpb24vVXNlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB2YWxpZGF0b3IgZnJvbSAndmFsaWRhdG9yJztcclxuLyogY29tcG9uZW50cyAqL1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dEFkbWluJztcclxuLyogdXRpbHMgKi9cclxuaW1wb3J0IHsgYWJzb2x1dGVVcmwsIGFwaUluc3RhbmNlIH0gZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS91dGlscyc7XHJcblxyXG4vLyBpbXBvcnQgeyBkYXRhIH0gZnJvbSAnYXV0b3ByZWZpeGVyJztcclxuY29uc3QgeyBUZXh0LCBUaXRsZSB9ID0gVHlwb2dyYXBoeTtcclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuICBjb25zdCB7IHVzZXIsIG9yaWdpbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29udGFjdERhdGEsIHNldENvbnRhY3REYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtmaWVsZHMsIHNldEZpZWxkc10gPSB1c2VTdGF0ZShbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFsncXVlc3Rpb25fdGl0bGUnXSxcclxuICAgICAgdmFsdWU6ICcnLFxyXG4gICAgfSxcclxuICBdKTtcclxuICBjb25zdCBbYXBpLCBjb250ZXh0SG9sZGVyXSA9IG5vdGlmaWNhdGlvbi51c2VOb3RpZmljYXRpb24oKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGNvbnRhY3RJZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgYWN0aXZlZCA9ICgpID0+IHtcclxuICAgIGFjdGl2ZSA/IHNldEFjdGl2ZSgwKSA6IHNldEFjdGl2ZSgxKTtcclxuICB9O1xyXG4gIGNvbnN0IHZhbGlkYXRlVVJMID0gaW5wdXRUZXh0ID0+IHtcclxuICAgIHNldFVybCh2YWxpZGF0b3IudHJpbShpbnB1dFRleHQpKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hDb250YWN0RGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hDb250YWN0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IF9jb250YWN0RGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KCdjb250YWN0LycgKyBjb250YWN0SWQpO1xyXG4gICAgc2V0RGF0YShfY29udGFjdERhdGEuZGF0YS5jb250YWN0KTtcclxuICAgIHNldEFjdGl2ZShfY29udGFjdERhdGEuZGF0YS5jb250YWN0LmlzX2RvbmUpO1xyXG4gIH07XHJcbiAgZnVuY3Rpb24gZGlzYWJsZWREYXRlVGltZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRpc2FibGVkSG91cnM6ICgpID0+IHJhbmdlKDAsIDI0KS5zcGxpY2UoNCwgMjApLFxyXG4gICAgICBkaXNhYmxlZE1pbnV0ZXM6ICgpID0+IHJhbmdlKDMwLCA2MCksXHJcbiAgICAgIGRpc2FibGVkU2Vjb25kczogKCkgPT4gWzU1LCA1Nl0sXHJcbiAgICB9O1xyXG4gIH1cclxuICBmdW5jdGlvbiByYW5nZShzdGFydCwgZW5kKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XHJcbiAgICAgIHJlc3VsdC5wdXNoKGkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG9uQ2hhbmdlKGFjdGl2ZSkge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgb3JnYW5pemF0aW9uX2lkOiB1c2VyLm9yZ2FuaXphdGlvbl9pZCxcclxuICAgICAgaXNfZG9uZTogYWN0aXZlLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IGNvbnRhY3REYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5wdXQoXHJcbiAgICAgICcvY29udGFjdC8nICsgY29udGFjdElkLFxyXG4gICAgICBkYXRhXHJcbiAgICApO1xyXG4gICAgaWYgKGNvbnRhY3REYXRhLmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICBvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJTdWNjZXNzKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyAvL1N0YXJ0IHRoZSB0aW1lclxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC1jb250YWN0JylcclxuICAgICAgfS5iaW5kKHRoaXMpLCAyMDAwKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbChjb250YWN0RGF0YS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25SZWdpc3RlclN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICBhcGkuc3VjY2Vzcyh7XHJcbiAgICAgIG1lc3NhZ2U6IGDguJrguLHguJnguJfguLbguIHguILguYnguK3guKHguLnguKXguKrguLPguYDguKPguYfguIhgLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ+C4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iCcsXHJcbiAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25SZWdpc3RlckZhaWwgPSBtZXNzZ2FlID0+IHtcclxuICAgIGFwaS5lcnJvcih7XHJcbiAgICAgIG1lc3NhZ2U6IGDguJ7guJrguJvguLHguI3guKvguLLguKPguLDguKvguKfguYjguLLguIfguIHguLLguKPguJrguLHguJnguJfguLbguIHguILguYnguK3guKHguLnguKVgLFxyXG4gICAgICBkZXNjcmlwdGlvbjogbWVzc2dhZSxcclxuICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dFxyXG4gICAgICB0aXRsZT1cIkdvdmVybm1lbnQgLSBBZG1pbiBtYW5hZ2VtZW50XCJcclxuICAgICAgdGl0bGVQYWdlPXtcclxuICAgICAgICAn4LmB4Liq4LiU4LiH4Lij4Liy4Lii4Lil4Liw4LmA4Lit4Li14Lii4LiU4LiC4LmJ4Lit4Lih4Li54Lil4LmA4Lih4LiZ4Li54LiV4Li04LiU4LiV4LmI4Lit4LmA4Lij4LiyICcgK1xyXG4gICAgICAgIChjb250YWN0RGF0YSA/IGNvbnRhY3REYXRhLmNvbnRhY3RfcG9zdCA6ICcnKVxyXG4gICAgICB9XHJcbiAgICAgIHVybD17b3JpZ2lufVxyXG4gICAgICBpbmRleE1lbnU9eyc0J31cclxuICAgICAgb3JpZ2luPXtvcmlnaW59XHJcbiAgICAgIHByb3BzPXtwcm9wc31cclxuICAgICAgX3JvdXRlcz17W1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhdGg6ICcvYWRtaW4vZGFzaGJvcmFkJyxcclxuICAgICAgICAgIGJyZWFkY3J1bWJOYW1lOiAn4Lir4LiZ4LmJ4Liy4Lir4Lil4Lix4LiBJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhdGg6ICcvYWRtaW4vbWFuYWdlbWVudC1jb250YWN0JyxcclxuICAgICAgICAgIGJyZWFkY3J1bWJOYW1lOiAn4LiI4Lix4LiU4LiB4Liy4Lij4LiC4LmJ4Lit4Lih4Li54Lil4LmA4Lih4LiZ4Li54LiV4Li04LiU4LiV4LmI4Lit4LmA4Lij4LiyJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhdGg6ICcvYWRtaW4vbWFuYWdlbWVudC1jb250YWN0L2NvbnRhY3QnLFxyXG4gICAgICAgICAgYnJlYWRjcnVtYk5hbWU6ICfguYHguKrguJTguIfguKPguLLguKLguKXguLDguYDguK3guLXguKLguJTguILguYnguK3guKHguLnguKXguYDguKHguJnguLnguJXguLTguJTguJXguYjguK3guYDguKPguLInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF19XHJcbiAgICA+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2NvbnRleHRIb2xkZXJ9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2VcIj5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPHA+4LmA4Lij4Li34LmI4Lit4LiH4LiV4Li04LiU4LiV4LmI4LitIDoge2RhdGEgPyBkYXRhLmNvbnRhY3RfcG9zdCA6ICcnfTwvcD5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxwPuC4o+C4suC4ouC4peC4sOC5gOC4reC4teC4ouC4lCA6IHtkYXRhID8gZGF0YS5jb250YWN0X2RldGFpbCA6ICcnfTwvcD5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxwPuC4nOC4ueC5ieC4leC4tOC4lOC4leC5iOC4rSA6IHtkYXRhID8gZGF0YS5jb250YWN0X25hbWVfcG9zdGVkIDogJyd9PC9wPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPHA+4LmA4Lia4Lit4Lij4LmM4LmC4LiX4LijIDoge2RhdGEgPyBkYXRhLmNvbnRhY3RfdGVsZXBob25lIDogJyd9PC9wPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPHA+ZW1haWwgOiB7ZGF0YSA/IGRhdGEuY29udGFjdF9lbWFpbCA6ICcnfTwvcD5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXhcIj5cclxuICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXthY3RpdmV9IG9uQ2xpY2s9e2FjdGl2ZWR9IG9uQ2xpY2s9e3ZhbHVlID0+IHNldEFjdGl2ZSh2YWx1ZSA/IDEgOiAwKX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteC0yIHRleHQtc21cIj7guIHguLLguKPguJTguLPguYDguJnguLTguJnguIHguLLguKM8L3A+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuLyogZ2V0U2VydmVyU2lkZVByb3BzICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgcmVxIH0gPSBjb250ZXh0O1xyXG4gIGNvbnN0IHsgb3JpZ2luIH0gPSBhYnNvbHV0ZVVybChyZXEpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgb3JpZ2luLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=