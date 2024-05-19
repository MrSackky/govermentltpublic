webpackHotUpdate("static\\development\\pages\\admin\\management-auto-landingpage.js",{

/***/ "./pages/admin/management-auto-landingpage/index.js":
/*!**********************************************************!*\
  !*** ./pages/admin/management-auto-landingpage/index.js ***!
  \**********************************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../middleware/utils */ "./middleware/utils.js");
/* harmony import */ var _components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/layout/LayoutAdmin */ "./components/layout/LayoutAdmin.jsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");





var _jsxFileName = "D:\\govermentlt\\pages\\admin\\management-auto-landingpage\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* utils */


/* components */

 // import UserNav from '../components/navigation/User';



var Search = antd__WEBPACK_IMPORTED_MODULE_9__["Input"].Search;
var __N_SSP = true;
function Home(props) {
  _s();

  var _this = this;

  var user = props.user,
      origin = props.origin;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      login = _useState[0],
      setLogin = _useState[1];

  var _notification$useNoti = antd__WEBPACK_IMPORTED_MODULE_9__["notification"].useNotification(),
      _notification$useNoti2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_notification$useNoti, 2),
      api = _notification$useNoti2[0],
      contextHolder = _notification$useNoti2[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      search = _useState2[0],
      setSearch = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      data = _useState3[0],
      setData = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      dataDelete = _useState4[0],
      setDataDelete = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      filters = _useState5[0],
      setFilters = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    current: 1,
    pageSize: 10
  }),
      pagination = _useState6[0],
      setPagination = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      loading = _useState7[0],
      setLoading = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      visibleModalDelete = _useState8[0],
      setVisibleModalDelete = _useState8[1];

  var columns = [{
    title: 'ชื่อ landing page',
    dataIndex: 'intro_title',
    sorter: true // render: name => `${name.first} ${name.last}`,
    // width: '20%',
    // defaultSortOrder: 'descend',

  }, {
    title: 'ช่วงเวลาที่แสดง',
    dataIndex: '',
    sorter: true,
    key: 'intro_date_s',
    render: function render(data) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }
      }, " ", Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["convertDatetoThaiDate"])(Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["convertDateDBtoDatePickerNoTime"])(data.intro_date_s)), " \u0E16\u0E36\u0E07 ", Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["convertDatetoThaiDate"])(Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["convertDateDBtoDatePickerNoTime"])(data.intro_date_e))));
    } // render: name => `${name.first} ${name.last}`,
    // width: '20%',
    // defaultSortOrder: 'descend',

  }, {
    title: 'สถานะการใช้งาน',
    dataIndex: '',
    sorter: true,
    key: 'is_use',
    render: function render(data) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 9
        }
      }, " ", data.is_use ? "ใช้งาน" : "ไม่ใช้งาน"));
    } // render: name => `${name.first} ${name.last}`,
    // width: '20%',
    // defaultSortOrder: 'descend',

  }, {
    title: '',
    dataIndex: '',
    key: 'x',
    render: function render(data) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        type: "primary",
        size: "default",
        onClick: function onClick() {
          return gotoPage(data.intro_id);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 9
        }
      }, " \u0E41\u0E01\u0E49\u0E44\u0E02 "), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        className: "ml-1",
        type: "danger",
        onClick: function onClick() {
          return showModal(data);
        },
        size: "default",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 9
        }
      }, " \u0E25\u0E1A "));
    }
  } // {
  //   title: 'Gender',
  //   dataIndex: 'gender',
  //   // filters: [
  //   //   { text: 'Male', value: 'male' },
  //   //   { text: 'Female', value: 'female' },
  //   // ],
  //   width: '20%',
  // },
  // {
  //   title: 'Email',
  //   dataIndex: 'email',
  // },
  ];
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    fetch({
      pagination: pagination
    });
  }, []);

  var fetch = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var params,
          addactivitiesData,
          _args = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              setLoading(true);
              _context.next = 4;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["apiInstance"])().get('admin/management/landing-page?isAdmin=1&results=' + params.pagination.pageSize + '&page=' + params.pagination.current + "&search=" + search + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters);

            case 4:
              addactivitiesData = _context.sent;
              setData(addactivitiesData.data.results);
              setPagination(_objectSpread(_objectSpread({}, params.pagination), {}, {
                total: addactivitiesData.data.totalCount // 200 is mock data, you should read it from server
                // total: data.totalCount,

              }));
              setLoading(false);

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

  var showModal = function showModal(data) {
    console.log('data deletd');
    console.log(data);
    setDataDelete(data);
    setVisibleModalDelete(true);
  };

  var gotoPage = function gotoPage(id) {
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/admin/management-auto-landingpage/landing-page/' + id);
  };

  var onSearch = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_search) {
      var anding_pageData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setLoading(true);
              setSearch(_search);
              setPagination({
                pageSize: pagination.pageSize,
                current: 1
              });
              _context2.next = 5;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["apiInstance"])().get('admin/management/landing-page?isAdmin=1&results=' + pagination.pageSize + '&page=1&search=' + _search + "&filters=" + filters);

            case 5:
              anding_pageData = _context2.sent;
              setData(anding_pageData.data.results);
              setLoading(false);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onSearch(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleTableChange = function handleTableChange(pagination, filters, sorter) {
    console.log(sorter);
    setPagination({
      pageSize: pagination.pageSize,
      current: pagination.current
    });
    setFilters(filters["package"]);
    fetch({
      sortField: sorter.columnKey,
      sortOrder: sorter.order,
      pagination: pagination,
      filters: filters["package"]
    });
  };

  var onDelete = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var registerData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["apiInstance"])()["delete"]('admin/management/landing-page/' + dataDelete.intro_id, {});

            case 2:
              registerData = _context3.sent;

              if (registerData.data.status == 200) {
                openNotificationSuccess(); // fetchOrganizationData();

                setVisibleModalDelete(false);
                fetch({
                  pagination: pagination
                });
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

    return function onDelete() {
      return _ref3.apply(this, arguments);
    };
  }();

  var hideModal = function hideModal() {
    setVisibleModalDelete(false);
  };

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

  return __jsx(_components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_8__["default"], {
    titlePage: "จัดการหยุดพิเศษ",
    isMain: true,
    indexMenu: "3",
    title: "Government - Admin management",
    url: origin,
    origin: origin,
    user: login,
    props: props,
    _routes: [{
      path: '/admin/dashborad',
      breadcrumbName: 'หน้าหลัก'
    }, {
      path: '/admin/management-auto-landingpage',
      breadcrumbName: 'จัดการหน้าวันหยุดพิเศษ'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }
  }, contextHolder, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    span: 24,
    className: " pb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    span: 18,
    className: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    className: "items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/admin/management-auto-landingpage/add-landingpage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 19
    }
  }, __jsx("a", {
    //onClick={(e) => handleLogout(e)}
    className: "lg:inline-flex lg:w-auto w-full px-2 py-2 rounded h-8 text-white bg-green-600 font-bold items-center justify-center hover:bg-green-600 hover:text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 21
    }
  }, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E27\u0E31\u0E19\u0E2B\u0E22\u0E38\u0E14\u0E1E\u0E34\u0E40\u0E28\u0E29")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    span: 6,
    className: "flex items-center justify-end justify-items-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    className: " justify-end justify-items-end ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 17
    }
  }, __jsx(Search, {
    placeholder: "input search text",
    onSearch: onSearch,
    enterButton: true,
    allowClear: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 19
    }
  })))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Table"], {
    columns: columns,
    rowKey: function rowKey(record) {
      return record.intro_id;
    },
    dataSource: data,
    pagination: pagination,
    loading: loading,
    onChange: handleTableChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
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
      lineNumber: 249,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 9
    }
  }, "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A \"", dataDelete ? dataDelete.intro_title : "", "\" \u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?  ")));
}
/* getServerSideProps */

_s(Home, "poS+b8GwKXo9SwGWiaitpzaeLzU=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_9__["notification"].useNotification];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9tYW5hZ2VtZW50LWF1dG8tbGFuZGluZ3BhZ2UvaW5kZXguanMiXSwibmFtZXMiOlsiU2VhcmNoIiwiSW5wdXQiLCJIb21lIiwicHJvcHMiLCJ1c2VyIiwib3JpZ2luIiwidXNlU3RhdGUiLCJsb2dpbiIsInNldExvZ2luIiwibm90aWZpY2F0aW9uIiwidXNlTm90aWZpY2F0aW9uIiwiYXBpIiwiY29udGV4dEhvbGRlciIsInNlYXJjaCIsInNldFNlYXJjaCIsImRhdGEiLCJzZXREYXRhIiwiZGF0YURlbGV0ZSIsInNldERhdGFEZWxldGUiLCJmaWx0ZXJzIiwic2V0RmlsdGVycyIsImN1cnJlbnQiLCJwYWdlU2l6ZSIsInBhZ2luYXRpb24iLCJzZXRQYWdpbmF0aW9uIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ2aXNpYmxlTW9kYWxEZWxldGUiLCJzZXRWaXNpYmxlTW9kYWxEZWxldGUiLCJjb2x1bW5zIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJzb3J0ZXIiLCJrZXkiLCJyZW5kZXIiLCJjb252ZXJ0RGF0ZXRvVGhhaURhdGUiLCJjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lIiwiaW50cm9fZGF0ZV9zIiwiaW50cm9fZGF0ZV9lIiwiaXNfdXNlIiwiZ290b1BhZ2UiLCJpbnRyb19pZCIsInNob3dNb2RhbCIsInVzZUVmZmVjdCIsImZldGNoIiwicGFyYW1zIiwiYXBpSW5zdGFuY2UiLCJnZXQiLCJzb3J0RmllbGQiLCJzb3J0T3JkZXIiLCJhZGRhY3Rpdml0aWVzRGF0YSIsInJlc3VsdHMiLCJ0b3RhbCIsInRvdGFsQ291bnQiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJSb3V0ZXIiLCJwdXNoIiwib25TZWFyY2giLCJfc2VhcmNoIiwiYW5kaW5nX3BhZ2VEYXRhIiwiaGFuZGxlVGFibGVDaGFuZ2UiLCJjb2x1bW5LZXkiLCJvcmRlciIsIm9uRGVsZXRlIiwicmVnaXN0ZXJEYXRhIiwic3RhdHVzIiwib3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MiLCJvcGVuTm90aWZpY2F0aW9uRmFpbCIsIm1lc3NhZ2UiLCJoaWRlTW9kYWwiLCJzdWNjZXNzIiwiZGVzY3JpcHRpb24iLCJwbGFjZW1lbnQiLCJtZXNzZ2FlIiwiZXJyb3IiLCJwYXRoIiwiYnJlYWRjcnVtYk5hbWUiLCJyZWNvcmQiLCJpbnRyb190aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBRUE7O0NBRUE7O0FBQ0E7QUFFQTtBQVNBLElBQVFBLE1BQVIsR0FBbUJDLDBDQUFuQixDQUFRRCxNQUFSOztBQUVlLFNBQVNFLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBOztBQUNsQyxNQUFRQyxJQUFSLEdBQXlCRCxLQUF6QixDQUFRQyxJQUFSO0FBQUEsTUFBY0MsTUFBZCxHQUF5QkYsS0FBekIsQ0FBY0UsTUFBZDs7QUFDQSxrQkFBMEJDLHNEQUFRLENBQUMsSUFBRCxDQUFsQztBQUFBLE1BQU9DLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLDhCQUE2QkMsaURBQVksQ0FBQ0MsZUFBYixFQUE3QjtBQUFBO0FBQUEsTUFBT0MsR0FBUDtBQUFBLE1BQVlDLGFBQVo7O0FBQ0EsbUJBQTRCTixzREFBUSxDQUFDLEVBQUQsQ0FBcEM7QUFBQSxNQUFPTyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBd0JSLHNEQUFRLENBQUMsRUFBRCxDQUFoQztBQUFBLE1BQU9TLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG1CQUFvQ1Ysc0RBQVEsQ0FBQyxJQUFELENBQTVDO0FBQUEsTUFBT1csVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBOEJaLHNEQUFRLENBQUMsSUFBRCxDQUF0QztBQUFBLE1BQU9hLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQW9DZCxzREFBUSxDQUFDO0FBQzNDZSxXQUFPLEVBQUUsQ0FE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bnRcXHBhZ2VzXFxhZG1pblxcbWFuYWdlbWVudC1hdXRvLWxhbmRpbmdwYWdlLmpzLmVjNDBjYWMxNWUxY2IzYWNkZGFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuLyogdXRpbHMgKi9cclxuaW1wb3J0IHsgYWJzb2x1dGVVcmwsIGFwaUluc3RhbmNlLCBjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lLCBjb252ZXJ0RGF0ZXRvVGhhaURhdGUgfSBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL3V0aWxzJztcclxuXHJcbi8qIGNvbXBvbmVudHMgKi9cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRBZG1pbic7XHJcbi8vIGltcG9ydCBVc2VyTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9Vc2VyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIENvbCxcclxuICBJbnB1dCxcclxuICBNb2RhbCxcclxuICBSb3csXHJcbiAgVGFibGUsXHJcbiAgbm90aWZpY2F0aW9uXHJcbn0gZnJvbSAnYW50ZCc7XHJcbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuICBjb25zdCB7IHVzZXIsIG9yaWdpbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFthcGksIGNvbnRleHRIb2xkZXJdID0gbm90aWZpY2F0aW9uLnVzZU5vdGlmaWNhdGlvbigpO1xyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtkYXRhRGVsZXRlLCBzZXREYXRhRGVsZXRlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbcGFnaW5hdGlvbiwgc2V0UGFnaW5hdGlvbl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBjdXJyZW50OiAxLFxyXG4gICAgcGFnZVNpemU6IDEwLFxyXG4gIH0pXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3Zpc2libGVNb2RhbERlbGV0ZSwgc2V0VmlzaWJsZU1vZGFsRGVsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn4LiK4Li34LmI4LitIGxhbmRpbmcgcGFnZScsXHJcbiAgICAgIGRhdGFJbmRleDogJ2ludHJvX3RpdGxlJyxcclxuICAgICAgc29ydGVyOiB0cnVlLFxyXG4gICAgICAvLyByZW5kZXI6IG5hbWUgPT4gYCR7bmFtZS5maXJzdH0gJHtuYW1lLmxhc3R9YCxcclxuICAgICAgLy8gd2lkdGg6ICcyMCUnLFxyXG4gICAgICAvLyBkZWZhdWx0U29ydE9yZGVyOiAnZGVzY2VuZCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+C4iuC5iOC4p+C4h+C5gOC4p+C4peC4suC4l+C4teC5iOC5geC4quC4lOC4hycsXHJcbiAgICAgIGRhdGFJbmRleDogJycsXHJcbiAgICAgIHNvcnRlcjogdHJ1ZSxcclxuICAgICAga2V5OiAnaW50cm9fZGF0ZV9zJyxcclxuICAgICAgcmVuZGVyOiAoZGF0YSkgPT4gPD5cclxuICAgICAgICA8c3BhbiA+IHtjb252ZXJ0RGF0ZXRvVGhhaURhdGUoY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZShkYXRhLmludHJvX2RhdGVfcykpfSDguJbguLbguIcge2NvbnZlcnREYXRldG9UaGFpRGF0ZShjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lKGRhdGEuaW50cm9fZGF0ZV9lKSl9PC9zcGFuPlxyXG4gICAgICA8Lz4sXHJcbiAgICAgIC8vIHJlbmRlcjogbmFtZSA9PiBgJHtuYW1lLmZpcnN0fSAke25hbWUubGFzdH1gLFxyXG4gICAgICAvLyB3aWR0aDogJzIwJScsXHJcbiAgICAgIC8vIGRlZmF1bHRTb3J0T3JkZXI6ICdkZXNjZW5kJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn4Liq4LiW4Liy4LiZ4Liw4LiB4Liy4Lij4LmD4LiK4LmJ4LiH4Liy4LiZJyxcclxuICAgICAgZGF0YUluZGV4OiAnJyxcclxuICAgICAgc29ydGVyOiB0cnVlLFxyXG4gICAgICBrZXk6ICdpc191c2UnLFxyXG4gICAgICByZW5kZXI6IChkYXRhKSA9PiA8PlxyXG4gICAgICAgIDxzcGFuID4ge2RhdGEuaXNfdXNlID8gXCLguYPguIrguYnguIfguLLguJlcIiA6IFwi4LmE4Lih4LmI4LmD4LiK4LmJ4LiH4Liy4LiZXCJ9PC9zcGFuPlxyXG4gICAgICA8Lz4sXHJcbiAgICAgIC8vIHJlbmRlcjogbmFtZSA9PiBgJHtuYW1lLmZpcnN0fSAke25hbWUubGFzdH1gLFxyXG4gICAgICAvLyB3aWR0aDogJzIwJScsXHJcbiAgICAgIC8vIGRlZmF1bHRTb3J0T3JkZXI6ICdkZXNjZW5kJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgZGF0YUluZGV4OiAnJyxcclxuICAgICAga2V5OiAneCcsXHJcbiAgICAgIHJlbmRlcjogKGRhdGEpID0+IDw+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNpemU9e1wiZGVmYXVsdFwifSBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZShkYXRhLmludHJvX2lkKX0gPiDguYHguIHguYnguYTguIIgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtbC0xXCIgdHlwZT1cImRhbmdlclwiIG9uQ2xpY2s9eygpID0+IHNob3dNb2RhbChkYXRhKX0gc2l6ZT17XCJkZWZhdWx0XCJ9ID4g4Lil4LiaIDwvQnV0dG9uPlxyXG4gICAgICA8Lz4sXHJcbiAgICB9LFxyXG4gICAgLy8ge1xyXG4gICAgLy8gICB0aXRsZTogJ0dlbmRlcicsXHJcbiAgICAvLyAgIGRhdGFJbmRleDogJ2dlbmRlcicsXHJcbiAgICAvLyAgIC8vIGZpbHRlcnM6IFtcclxuICAgIC8vICAgLy8gICB7IHRleHQ6ICdNYWxlJywgdmFsdWU6ICdtYWxlJyB9LFxyXG4gICAgLy8gICAvLyAgIHsgdGV4dDogJ0ZlbWFsZScsIHZhbHVlOiAnZmVtYWxlJyB9LFxyXG4gICAgLy8gICAvLyBdLFxyXG4gICAgLy8gICB3aWR0aDogJzIwJScsXHJcbiAgICAvLyB9LFxyXG4gICAgLy8ge1xyXG4gICAgLy8gICB0aXRsZTogJ0VtYWlsJyxcclxuICAgIC8vICAgZGF0YUluZGV4OiAnZW1haWwnLFxyXG4gICAgLy8gfSxcclxuICBdO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goeyBwYWdpbmF0aW9uIH0pO1xyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBmZXRjaCA9IGFzeW5jIChwYXJhbXMgPSB7fSkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgY29uc3QgYWRkYWN0aXZpdGllc0RhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ2FkbWluL21hbmFnZW1lbnQvbGFuZGluZy1wYWdlP2lzQWRtaW49MSZyZXN1bHRzPScgKyBwYXJhbXMucGFnaW5hdGlvbi5wYWdlU2l6ZSArICcmcGFnZT0nICsgcGFyYW1zLnBhZ2luYXRpb24uY3VycmVudCArIFwiJnNlYXJjaD1cIiArIHNlYXJjaCArIFwiJnNvcnRGaWVsZD1cIiArIHBhcmFtcy5zb3J0RmllbGQgKyBcIiZzb3J0T3JkZXI9XCIgKyBwYXJhbXMuc29ydE9yZGVyICsgXCImZmlsdGVycz1cIiArIHBhcmFtcy5maWx0ZXJzXHJcbiAgICApO1xyXG5cclxuICAgIHNldERhdGEoYWRkYWN0aXZpdGllc0RhdGEuZGF0YS5yZXN1bHRzKVxyXG4gICAgc2V0UGFnaW5hdGlvbih7XHJcbiAgICAgIC4uLnBhcmFtcy5wYWdpbmF0aW9uLFxyXG4gICAgICB0b3RhbDogYWRkYWN0aXZpdGllc0RhdGEuZGF0YS50b3RhbENvdW50LFxyXG4gICAgICAvLyAyMDAgaXMgbW9jayBkYXRhLCB5b3Ugc2hvdWxkIHJlYWQgaXQgZnJvbSBzZXJ2ZXJcclxuICAgICAgLy8gdG90YWw6IGRhdGEudG90YWxDb3VudCxcclxuICAgIH0pXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dNb2RhbCA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnZGF0YSBkZWxldGQnKVxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHNldERhdGFEZWxldGUoZGF0YSlcclxuICAgIHNldFZpc2libGVNb2RhbERlbGV0ZSh0cnVlKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdvdG9QYWdlID0gKGlkKSA9PiB7XHJcbiAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQtYXV0by1sYW5kaW5ncGFnZS9sYW5kaW5nLXBhZ2UvJyArIGlkKTtcclxuXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TZWFyY2ggPSBhc3luYyAoX3NlYXJjaCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgc2V0U2VhcmNoKF9zZWFyY2gpXHJcbiAgICBzZXRQYWdpbmF0aW9uKHtcclxuICAgICAgcGFnZVNpemU6IHBhZ2luYXRpb24ucGFnZVNpemUsXHJcbiAgICAgIGN1cnJlbnQ6IDFcclxuICAgIH0pXHJcbiAgICBjb25zdCBhbmRpbmdfcGFnZURhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ2FkbWluL21hbmFnZW1lbnQvbGFuZGluZy1wYWdlP2lzQWRtaW49MSZyZXN1bHRzPScgKyBwYWdpbmF0aW9uLnBhZ2VTaXplICsgJyZwYWdlPTEmc2VhcmNoPScgKyBfc2VhcmNoICsgXCImZmlsdGVycz1cIiArIGZpbHRlcnNcclxuICAgICk7XHJcblxyXG4gICAgc2V0RGF0YShhbmRpbmdfcGFnZURhdGEuZGF0YS5yZXN1bHRzKVxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhYmxlQ2hhbmdlID0gKHBhZ2luYXRpb24sIGZpbHRlcnMsIHNvcnRlcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coc29ydGVyKVxyXG4gICAgc2V0UGFnaW5hdGlvbih7XHJcbiAgICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICBjdXJyZW50OiBwYWdpbmF0aW9uLmN1cnJlbnRcclxuICAgIH0pXHJcbiAgICBzZXRGaWx0ZXJzKGZpbHRlcnMucGFja2FnZSlcclxuICAgIGZldGNoKHtcclxuICAgICAgc29ydEZpZWxkOiBzb3J0ZXIuY29sdW1uS2V5LFxyXG4gICAgICBzb3J0T3JkZXI6IHNvcnRlci5vcmRlcixcclxuICAgICAgcGFnaW5hdGlvbixcclxuICAgICAgZmlsdGVyczogZmlsdGVycy5wYWNrYWdlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EZWxldGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnREVMRVRFJylcclxuICAgIC8vIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAvLyAgICdvcmdhbml6YXRpb25fbmFtZSc6IHZhbHVlLm9yZ2FuaXphdGlvbl9uYW1lLFxyXG4gICAgLy8gfVxyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSlcclxuICAgIGNvbnN0IHJlZ2lzdGVyRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZGVsZXRlKCdhZG1pbi9tYW5hZ2VtZW50L2xhbmRpbmctcGFnZS8nICsgZGF0YURlbGV0ZS5pbnRyb19pZCwge30pO1xyXG4gICAgaWYgKHJlZ2lzdGVyRGF0YS5kYXRhLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MoKVxyXG4gICAgICAvLyBmZXRjaE9yZ2FuaXphdGlvbkRhdGEoKTtcclxuICAgICAgc2V0VmlzaWJsZU1vZGFsRGVsZXRlKGZhbHNlKVxyXG4gICAgICBmZXRjaCh7IHBhZ2luYXRpb24gfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvcGVuTm90aWZpY2F0aW9uRmFpbChyZWdpc3RlckRhdGEuZGF0YS5tZXNzYWdlKVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGhpZGVNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldFZpc2libGVNb2RhbERlbGV0ZShmYWxzZSlcclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICBhcGkuc3VjY2Vzcyh7XHJcbiAgICAgIG1lc3NhZ2U6IGDguKXguJrguILguYnguK3guKHguLnguKXguKrguLPguYDguKPguYfguIhgLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ+C4peC4muC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iCcsXHJcbiAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25GYWlsID0gKG1lc3NnYWUpID0+IHtcclxuICAgIGFwaS5lcnJvcih7XHJcbiAgICAgIG1lc3NhZ2U6IGDguJ7guJrguJvguLHguI3guKvguLLguKPguLDguKvguKfguYjguLLguIfguIHguLLguKPguKXguJrguILguYnguK3guKHguLnguKVgLFxyXG4gICAgICBkZXNjcmlwdGlvbjogbWVzc2dhZSxcclxuICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGVQYWdlPXtcIuC4iOC4seC4lOC4geC4suC4o+C4q+C4ouC4uOC4lOC4nuC4tOC5gOC4qOC4qVwifSBpc01haW49e3RydWV9IGluZGV4TWVudT17XCIzXCJ9IHRpdGxlPVwiR292ZXJubWVudCAtIEFkbWluIG1hbmFnZW1lbnRcIiB1cmw9e29yaWdpbn0gb3JpZ2luPXtvcmlnaW59IHVzZXI9e2xvZ2lufSBwcm9wcz17cHJvcHN9XHJcbiAgICAgIF9yb3V0ZXM9e1tcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYXRoOiAnL2FkbWluL2Rhc2hib3JhZCcsXHJcbiAgICAgICAgICBicmVhZGNydW1iTmFtZTogJ+C4q+C4meC5ieC4suC4q+C4peC4seC4gScsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgcGF0aDogJy9hZG1pbi9tYW5hZ2VtZW50LWF1dG8tbGFuZGluZ3BhZ2UnLFxyXG4gICAgICAgICAgYnJlYWRjcnVtYk5hbWU6ICfguIjguLHguJTguIHguLLguKPguKvguJnguYnguLLguKfguLHguJnguKvguKLguLjguJTguJ7guLTguYDguKjguKknLFxyXG4gICAgICAgIH1dfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtjb250ZXh0SG9sZGVyfVxyXG4gICAgICAgIDxSb3cgPlxyXG4gICAgICAgICAgPENvbCBzcGFuPXsyNH0gY2xhc3NOYW1lPVwiIHBiLTFcIj5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezE4fSBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW4vbWFuYWdlbWVudC1hdXRvLWxhbmRpbmdwYWdlL2FkZC1sYW5kaW5ncGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAvL29uQ2xpY2s9eyhlKSA9PiBoYW5kbGVMb2dvdXQoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCBsZzp3LWF1dG8gdy1mdWxsIHB4LTIgcHktMiByb3VuZGVkIGgtOCB0ZXh0LXdoaXRlIGJnLWdyZWVuLTYwMCBmb250LWJvbGQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGhvdmVyOmJnLWdyZWVuLTYwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguYDguJ7guLTguYjguKHguKfguLHguJnguKvguKLguLjguJTguJ7guLTguYDguKjguKlcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17Nn0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQganVzdGlmeS1pdGVtcy1lbmRcIj5cclxuICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiIGp1c3RpZnktZW5kIGp1c3RpZnktaXRlbXMtZW5kIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8U2VhcmNoIHBsYWNlaG9sZGVyPVwiaW5wdXQgc2VhcmNoIHRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICBlbnRlckJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93Q2xlYXJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIHsvKiA8Q29sIHNwYW49ezEyfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktaXRlbXMtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvQ29sPiAqL31cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgcm93S2V5PXtyZWNvcmQgPT4gcmVjb3JkLmludHJvX2lkfVxyXG4gICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YX1cclxuICAgICAgICAgIHBhZ2luYXRpb249e3BhZ2luYXRpb259XHJcbiAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRhYmxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCLguITguLjguJPguJXguYnguK3guIfguIHguLLguKPguKXguJrguILguYnguK3guKHguLnguKXguKvguKPguLfguK3guYTguKHguYg/XCJcclxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlTW9kYWxEZWxldGV9XHJcbiAgICAgICAgb25Paz17b25EZWxldGV9XHJcbiAgICAgICAgb25DYW5jZWw9e2hpZGVNb2RhbH1cclxuICAgICAgICBva1RleHQ9XCLguKXguJpcIlxyXG4gICAgICAgIGNhbmNlbFRleHQ9XCLguKLguIHguYDguKXguLTguIFcIlxyXG4gICAgICAgIG9rQnV0dG9uUHJvcHM9e3tcclxuICAgICAgICAgICd0eXBlJzogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgICAnZGFuZ2VyJzogdHJ1ZVxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8cD7guITguLjguJPguJXguYnguK3guIfguIHguLLguKPguKXguJogXCJ7ZGF0YURlbGV0ZSA/IGRhdGFEZWxldGUuaW50cm9fdGl0bGUgOiBcIlwifVwiIOC4q+C4o+C4t+C4reC5hOC4oeC5iD8gIDwvcD5cclxuXHJcbiAgICAgIDwvTW9kYWw+XHJcblxyXG5cclxuICAgIDwvTGF5b3V0ID5cclxuICApO1xyXG59XHJcbi8qIGdldFNlcnZlclNpZGVQcm9wcyAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHJlcSB9ID0gY29udGV4dDtcclxuICBjb25zdCB7IG9yaWdpbiB9ID0gYWJzb2x1dGVVcmwocmVxKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG9yaWdpbixcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9