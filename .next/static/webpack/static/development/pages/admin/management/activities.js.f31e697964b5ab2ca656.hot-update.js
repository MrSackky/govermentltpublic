webpackHotUpdate("static\\development\\pages\\admin\\management\\activities.js",{

/***/ "./pages/admin/management/activities/index.js":
/*!****************************************************!*\
  !*** ./pages/admin/management/activities/index.js ***!
  \****************************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/layout/LayoutAdmin */ "./components/layout/LayoutAdmin.jsx");
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../middleware/utils */ "./middleware/utils.js");





var _jsxFileName = "D:\\govermentlt\\pages\\admin\\management\\activities\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // import UserNav from '../components/navigation/User';


/* components */


/* utils */


var Text = antd__WEBPACK_IMPORTED_MODULE_5__["Typography"].Text,
    Title = antd__WEBPACK_IMPORTED_MODULE_5__["Typography"].Title;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_5__["Input"].TextArea,
    Search = antd__WEBPACK_IMPORTED_MODULE_5__["Input"].Search;
var __N_SSP = true;
function Home(props) {
  _s();

  var _this = this;

  var _notification$useNoti = antd__WEBPACK_IMPORTED_MODULE_5__["notification"].useNotification(),
      _notification$useNoti2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_notification$useNoti, 2),
      api = _notification$useNoti2[0],
      contextHolder = _notification$useNoti2[1];

  var user = props.user,
      origin = props.origin;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      login = _useState[0],
      setLogin = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      shouldRun = _useState2[0],
      setShouldRun = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      data = _useState3[0],
      setData = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      search = _useState5[0],
      setSearch = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      visibleModalDelete = _useState6[0],
      setVisibleModalDelete = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      dataDelete = _useState7[0],
      setDataDelete = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      filters = _useState8[0],
      setFilters = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    current: 1,
    pageSize: 10
  }),
      pagination = _useState9[0],
      setPagination = _useState9[1];

  var columns = [{
    title: 'วันที่สร้าง',
    dataIndex: '',
    sorter: true,
    key: 'date_created',
    render: function render(data) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }
      }, " ", Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_9__["convertDatetoThaiDate"])(Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_9__["convertDateDBtoDatePickerNoTime"])(data.date_created)), " "));
    } // render: name => `${name.first} ${name.last}`,
    // width: '20%',
    // defaultSortOrder: 'descend',

  }, {
    title: 'ชื่อข่าวกิจกรรม',
    dataIndex: 'activities_title',
    sorter: true // render: name => `${name.first} ${name.last}`,
    // width: '20%',
    // defaultSortOrder: 'descend',

  }, {
    title: '',
    dataIndex: '',
    key: 'x',
    render: function render(data) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        type: "primary",
        size: "default",
        onClick: function onClick() {
          return gotoPage(data.activities_id);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 9
        }
      }, " \u0E41\u0E01\u0E49\u0E44\u0E02 "), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        className: "ml-1",
        type: "danger",
        onClick: function onClick() {
          return showModal(data);
        },
        size: "default",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 9
        }
      }, " \u0E25\u0E1A "));
    }
  }];

  var gotoPage = function gotoPage(id) {
    console.log(id);
    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/admin/management/activities/' + id);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var _filters = [];
    pagination.filters = _filters;
    fetch({
      pagination: pagination
    });
  }, []);

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

  var onSearch = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_search) {
      var addactivitiesData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              setSearch(_search);
              setPagination({
                pageSize: pagination.pageSize,
                current: 1
              });
              _context.next = 5;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_9__["apiInstance"])().get('activities?organization_id=' + (user ? user.organization_id : 0) + '&results=' + pagination.pageSize + '&page=1&search=' + _search + "&filters=" + filters);

            case 5:
              addactivitiesData = _context.sent;
              setData(addactivitiesData.data.results);
              setLoading(false);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSearch(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var fetch = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var params,
          addactivitiesData,
          _args2 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              params = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
              setLoading(true);
              _context2.next = 4;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_9__["apiInstance"])().get('activities?organization_id=' + (user ? user.organization_id : 0) + '&results=' + params.pagination.pageSize + '&page=' + params.pagination.current + "&search=" + search + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters);

            case 4:
              addactivitiesData = _context2.sent;
              setData(addactivitiesData.data.results);
              setPagination(_objectSpread(_objectSpread({}, params.pagination), {}, {
                total: addactivitiesData.data.totalCount // 200 is mock data, you should read it from server
                // total: data.totalCount,

              }));
              setLoading(false);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function fetch() {
      return _ref2.apply(this, arguments);
    };
  }();

  var showModal = function showModal(data) {
    setDataDelete(data);
    setVisibleModalDelete(true);
  };

  var hideModal = function hideModal() {
    setVisibleModalDelete(false);
  };

  var onDeleteOrganization = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var registerData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_9__["apiInstance"])()["delete"]('activities/' + dataDelete.activities_id, {});

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

    return function onDeleteOrganization() {
      return _ref3.apply(this, arguments);
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
      message: "\u0E1E\u0E1A\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25",
      description: messgae,
      placement: 'topRight'
    });
  };

  return __jsx(_components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_8__["default"], {
    key: "home-activities",
    titlePage: "จัดการข่าวกิจกรรม",
    title: "Government - Admin management",
    url: origin,
    origin: origin,
    isMain: true,
    indexSubMenu: "1",
    indexMenu: "sub-1-0",
    user: login,
    props: props,
    _routes: [{
      path: '/admin/dashborad',
      breadcrumbName: 'หน้าหลัก'
    }, {
      path: '/admin/management/activities',
      breadcrumbName: 'จัดการข่าวกิจกรรม'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }
  }, contextHolder, __jsx("div", {
    className: "w-full lg:inline-flex justify-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full lg:w-1/2 py-2 justify-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/admin/management/activities/add-activities",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }
  }, __jsx("a", {
    //onClick={(e) => handleLogout(e)}
    className: "lg:inline-flex lg:w-auto px-2 py-2 rounded h-8 text-white bg-ye-600 font-bold items-center justify-center hover:bg-green-600 hover:text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 15
    }
  }, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E48\u0E32\u0E27\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21"))), __jsx("div", {
    className: "text-right w-full justify-items-end lg:w-auto py-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 11
    }
  }, __jsx(Search, {
    placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E02\u0E48\u0E32\u0E27\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21",
    onSearch: onSearch,
    enterButton: true,
    allowClear: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Table"], {
    columns: columns,
    rowKey: function rowKey(record) {
      return record.activities_id;
    },
    dataSource: data,
    pagination: pagination,
    loading: loading,
    onChange: handleTableChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    title: "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?",
    visible: visibleModalDelete,
    onOk: onDeleteOrganization,
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
      lineNumber: 210,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 9
    }
  }, "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A \"", dataDelete ? dataDelete.activities_title : "", "\" \u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?  ")));
}
/* getServerSideProps */

_s(Home, "B/zpem81lA4iahYszi41VNhSPaY=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_5__["notification"].useNotification];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9tYW5hZ2VtZW50L2FjdGl2aXRpZXMvaW5kZXguanMiXSwibmFtZXMiOlsiVGV4dCIsIlR5cG9ncmFwaHkiLCJUaXRsZSIsIlRleHRBcmVhIiwiSW5wdXQiLCJTZWFyY2giLCJIb21lIiwicHJvcHMiLCJub3RpZmljYXRpb24iLCJ1c2VOb3RpZmljYXRpb24iLCJhcGkiLCJjb250ZXh0SG9sZGVyIiwidXNlciIsIm9yaWdpbiIsInVzZVN0YXRlIiwibG9naW4iLCJzZXRMb2dpbiIsInNob3VsZFJ1biIsInNldFNob3VsZFJ1biIsImRhdGEiLCJzZXREYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZWFyY2giLCJzZXRTZWFyY2giLCJ2aXNpYmxlTW9kYWxEZWxldGUiLCJzZXRWaXNpYmxlTW9kYWxEZWxldGUiLCJkYXRhRGVsZXRlIiwic2V0RGF0YURlbGV0ZSIsImZpbHRlcnMiLCJzZXRGaWx0ZXJzIiwiY3VycmVudCIsInBhZ2VTaXplIiwicGFnaW5hdGlvbiIsInNldFBhZ2luYXRpb24iLCJjb2x1bW5zIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJzb3J0ZXIiLCJrZXkiLCJyZW5kZXIiLCJjb252ZXJ0RGF0ZXRvVGhhaURhdGUiLCJjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lIiwiZGF0ZV9jcmVhdGVkIiwiZ290b1BhZ2UiLCJhY3Rpdml0aWVzX2lkIiwic2hvd01vZGFsIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiUm91dGVyIiwicHVzaCIsInVzZUVmZmVjdCIsIl9maWx0ZXJzIiwiZmV0Y2giLCJoYW5kbGVUYWJsZUNoYW5nZSIsInNvcnRGaWVsZCIsImNvbHVtbktleSIsInNvcnRPcmRlciIsIm9yZGVyIiwib25TZWFyY2giLCJfc2VhcmNoIiwiYXBpSW5zdGFuY2UiLCJnZXQiLCJvcmdhbml6YXRpb25faWQiLCJhZGRhY3Rpdml0aWVzRGF0YSIsInJlc3VsdHMiLCJwYXJhbXMiLCJ0b3RhbCIsInRvdGFsQ291bnQiLCJoaWRlTW9kYWwiLCJvbkRlbGV0ZU9yZ2FuaXphdGlvbiIsInJlZ2lzdGVyRGF0YSIsInN0YXR1cyIsIm9wZW5Ob3RpZmljYXRpb25TdWNjZXNzIiwib3Blbk5vdGlmaWNhdGlvbkZhaWwiLCJtZXNzYWdlIiwic3VjY2VzcyIsImRlc2NyaXB0aW9uIiwicGxhY2VtZW50IiwibWVzc2dhZSIsImVycm9yIiwicGF0aCIsImJyZWFkY3J1bWJOYW1lIiwicmVjb3JkIiwiYWN0aXZpdGllc190aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtDQUVBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUdBLElBQVFBLElBQVIsR0FBd0JDLCtDQUF4QixDQUFRRCxJQUFSO0FBQUEsSUFBY0UsS0FBZCxHQUF3QkQsK0NBQXhCLENBQWNDLEtBQWQ7QUFFQSxJQUFRQyxRQUFSLEdBQTZCQywwQ0FBN0IsQ0FBUUQsUUFBUjtBQUFBLElBQWtCRSxNQUFsQixHQUE2QkQsMENBQTdCLENBQWtCQyxNQUFsQjs7QUFHZSxTQUFTQyxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQTs7QUFDbEMsOEJBQTZCQyxpREFBWSxDQUFDQyxlQUFiLEVBQTdCO0FBQUE7QUFBQSxNQUFPQyxHQUFQO0FBQUEsTUFBWUMsYUFBWjs7QUFDQSxNQUFRQyxJQUFSLEdBQXlCTCxLQUF6QixDQUFRSyxJQUFSO0FBQUEsTUFBY0MsTUFBZCxHQUF5Qk4sS0FBekIsQ0FBY00sTUFBZDs7QUFDQSxrQkFBMEJDLHNEQUFRLENBQUMsSUFBRCxDQUFsQztBQUFBLE1BQU9DLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUFrQ0Ysc0RBQVEsQ0FBQyxJQUFELENBQTFDO0FBQUEsTUFBT0csU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBd0JKLHNEQUFRLENBQUMsRUFBRCxDQUFoQztBQUFBLE1BQU9LLElBQVA7QUFB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QUFNO0FBQUEsYUFBSUEsTUFBTSxDQUFDdkMsYUFBWDtBQUFBLEtBRmhCO0FBR0UsY0FBVSxFQUFFMUIsSUFIZDtBQUlFLGNBQVUsRUFBRWMsVUFKZDtBQUtFLFdBQU8sRUFBRVosT0FMWDtBQU1FLFlBQVEsRUFBRWtDLGlCQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4QkYsQ0FYRixFQTZDRSxNQUFDLDBDQUFEO0FBQ0UsU0FBSyxFQUFDLHlKQURSO0FBRUUsV0FBTyxFQUFFOUIsa0JBRlg7QUFHRSxRQUFJLEVBQUU4QyxvQkFIUjtBQUlFLFlBQVEsRUFBRUQsU0FKWjtBQUtFLFVBQU0sRUFBQyxjQUxUO0FBTUUsY0FBVSxFQUFDLHNDQU5iO0FBT0UsaUJBQWEsRUFBRTtBQUNiLGNBQVEsU0FESztBQUViLGdCQUFVO0FBRkcsS0FQakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0ZBQWtCM0MsVUFBVSxHQUFHQSxVQUFVLENBQUMwRCxnQkFBZCxHQUFpQyxFQUE3RCxxREFaRixDQTdDRixDQURGO0FBK0REO0FBQ0Q7O0dBaE53Qi9FLEk7VUFDT0UsaURBQVksQ0FBQ0MsZTs7O0tBRHBCSCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pblxcbWFuYWdlbWVudFxcYWN0aXZpdGllcy5qcy5mMzFlNjk3OTY0YjVhYjJjYTY1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBCdXR0b24sIElucHV0LCBNb2RhbCxcclxuICBub3RpZmljYXRpb24sIFRhYmxlLCBUeXBvZ3JhcGh5XHJcbn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG4vLyBpbXBvcnQgVXNlck5hdiBmcm9tICcuLi9jb21wb25lbnRzL25hdmlnYXRpb24vVXNlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbi8qIGNvbXBvbmVudHMgKi9cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRBZG1pbic7XHJcbi8qIHV0aWxzICovXHJcbmltcG9ydCB7IGFic29sdXRlVXJsLCBhcGlJbnN0YW5jZSwgY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZSwgY29udmVydERhdGV0b1RoYWlEYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbWlkZGxld2FyZS91dGlscyc7XHJcblxyXG5cclxuY29uc3QgeyBUZXh0LCBUaXRsZSB9ID0gVHlwb2dyYXBoeTtcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEsIFNlYXJjaCB9ID0gSW5wdXQ7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG4gIGNvbnN0IFthcGksIGNvbnRleHRIb2xkZXJdID0gbm90aWZpY2F0aW9uLnVzZU5vdGlmaWNhdGlvbigpO1xyXG4gIGNvbnN0IHsgdXNlciwgb3JpZ2luIH0gPSBwcm9wcztcclxuICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3Nob3VsZFJ1biwgc2V0U2hvdWxkUnVuXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW3Zpc2libGVNb2RhbERlbGV0ZSwgc2V0VmlzaWJsZU1vZGFsRGVsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtkYXRhRGVsZXRlLCBzZXREYXRhRGVsZXRlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbcGFnaW5hdGlvbiwgc2V0UGFnaW5hdGlvbl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBjdXJyZW50OiAxLFxyXG4gICAgcGFnZVNpemU6IDEwLFxyXG4gIH0pXHJcbiAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfguKfguLHguJnguJfguLXguYjguKrguKPguYnguLLguIcnLFxyXG4gICAgICBkYXRhSW5kZXg6ICcnLFxyXG4gICAgICBzb3J0ZXI6IHRydWUsXHJcbiAgICAgIGtleTogJ2RhdGVfY3JlYXRlZCcsXHJcbiAgICAgIHJlbmRlcjogKGRhdGEpID0+IDw+XHJcbiAgICAgICAgPHNwYW4gPiB7Y29udmVydERhdGV0b1RoYWlEYXRlKGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUoZGF0YS5kYXRlX2NyZWF0ZWQpKX0gPC9zcGFuPlxyXG4gICAgICA8Lz4sXHJcbiAgICAgIC8vIHJlbmRlcjogbmFtZSA9PiBgJHtuYW1lLmZpcnN0fSAke25hbWUubGFzdH1gLFxyXG4gICAgICAvLyB3aWR0aDogJzIwJScsXHJcbiAgICAgIC8vIGRlZmF1bHRTb3J0T3JkZXI6ICdkZXNjZW5kJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn4LiK4Li34LmI4Lit4LiC4LmI4Liy4Lin4LiB4Li04LiI4LiB4Lij4Lij4LihJyxcclxuICAgICAgZGF0YUluZGV4OiAnYWN0aXZpdGllc190aXRsZScsXHJcbiAgICAgIHNvcnRlcjogdHJ1ZSxcclxuICAgICAgLy8gcmVuZGVyOiBuYW1lID0+IGAke25hbWUuZmlyc3R9ICR7bmFtZS5sYXN0fWAsXHJcbiAgICAgIC8vIHdpZHRoOiAnMjAlJyxcclxuICAgICAgLy8gZGVmYXVsdFNvcnRPcmRlcjogJ2Rlc2NlbmQnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICBkYXRhSW5kZXg6ICcnLFxyXG4gICAgICBrZXk6ICd4JyxcclxuICAgICAgcmVuZGVyOiAoZGF0YSkgPT4gPD5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2l6ZT17XCJkZWZhdWx0XCJ9IG9uQ2xpY2s9eygpID0+IGdvdG9QYWdlKGRhdGEuYWN0aXZpdGllc19pZCl9ID4g4LmB4LiB4LmJ4LmE4LiCIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibWwtMVwiIHR5cGU9XCJkYW5nZXJcIiBvbkNsaWNrPXsoKSA9PiBzaG93TW9kYWwoZGF0YSl9IHNpemU9e1wiZGVmYXVsdFwifSA+IOC4peC4miA8L0J1dHRvbj5cclxuICAgICAgPC8+LFxyXG4gICAgfSxcclxuICBdO1xyXG4gIGNvbnN0IGdvdG9QYWdlID0gKGlkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpZClcclxuICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC9hY3Rpdml0aWVzLycgKyBpZCk7XHJcblxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2YXIgX2ZpbHRlcnMgPSBbXVxyXG4gICAgcGFnaW5hdGlvbi5maWx0ZXJzID0gX2ZpbHRlcnNcclxuICAgIGZldGNoKHsgcGFnaW5hdGlvbiB9KTtcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlVGFibGVDaGFuZ2UgPSAocGFnaW5hdGlvbiwgZmlsdGVycywgc29ydGVyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhzb3J0ZXIpXHJcbiAgICBzZXRQYWdpbmF0aW9uKHtcclxuICAgICAgcGFnZVNpemU6IHBhZ2luYXRpb24ucGFnZVNpemUsXHJcbiAgICAgIGN1cnJlbnQ6IHBhZ2luYXRpb24uY3VycmVudFxyXG4gICAgfSlcclxuICAgIHNldEZpbHRlcnMoZmlsdGVycy5wYWNrYWdlKVxyXG4gICAgZmV0Y2goe1xyXG4gICAgICBzb3J0RmllbGQ6IHNvcnRlci5jb2x1bW5LZXksXHJcbiAgICAgIHNvcnRPcmRlcjogc29ydGVyLm9yZGVyLFxyXG4gICAgICBwYWdpbmF0aW9uLFxyXG4gICAgICBmaWx0ZXJzOiBmaWx0ZXJzLnBhY2thZ2UsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IG9uU2VhcmNoID0gYXN5bmMgKF9zZWFyY2gpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIHNldFNlYXJjaChfc2VhcmNoKVxyXG4gICAgc2V0UGFnaW5hdGlvbih7XHJcbiAgICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICBjdXJyZW50OiAxXHJcbiAgICB9KVxyXG4gICAgY29uc3QgYWRkYWN0aXZpdGllc0RhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ2FjdGl2aXRpZXM/b3JnYW5pemF0aW9uX2lkPScgKyAodXNlciA/IHVzZXIub3JnYW5pemF0aW9uX2lkIDogMCkgKyAnJnJlc3VsdHM9JyArIHBhZ2luYXRpb24ucGFnZVNpemUgKyAnJnBhZ2U9MSZzZWFyY2g9JyArIF9zZWFyY2ggKyBcIiZmaWx0ZXJzPVwiICsgZmlsdGVyc1xyXG4gICAgKTtcclxuXHJcbiAgICBzZXREYXRhKGFkZGFjdGl2aXRpZXNEYXRhLmRhdGEucmVzdWx0cylcclxuICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgfVxyXG4gIGNvbnN0IGZldGNoID0gYXN5bmMgKHBhcmFtcyA9IHt9KSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBjb25zdCBhZGRhY3Rpdml0aWVzRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAnYWN0aXZpdGllcz9vcmdhbml6YXRpb25faWQ9JyArICh1c2VyID8gdXNlci5vcmdhbml6YXRpb25faWQgOiAwKSArICcmcmVzdWx0cz0nICsgcGFyYW1zLnBhZ2luYXRpb24ucGFnZVNpemUgKyAnJnBhZ2U9JyArIHBhcmFtcy5wYWdpbmF0aW9uLmN1cnJlbnQgKyBcIiZzZWFyY2g9XCIgKyBzZWFyY2ggKyBcIiZzb3J0RmllbGQ9XCIgKyBwYXJhbXMuc29ydEZpZWxkICsgXCImc29ydE9yZGVyPVwiICsgcGFyYW1zLnNvcnRPcmRlciArIFwiJmZpbHRlcnM9XCIgKyBwYXJhbXMuZmlsdGVyc1xyXG4gICAgKTtcclxuXHJcbiAgICBzZXREYXRhKGFkZGFjdGl2aXRpZXNEYXRhLmRhdGEucmVzdWx0cylcclxuICAgIHNldFBhZ2luYXRpb24oe1xyXG4gICAgICAuLi5wYXJhbXMucGFnaW5hdGlvbixcclxuICAgICAgdG90YWw6IGFkZGFjdGl2aXRpZXNEYXRhLmRhdGEudG90YWxDb3VudCxcclxuICAgICAgLy8gMjAwIGlzIG1vY2sgZGF0YSwgeW91IHNob3VsZCByZWFkIGl0IGZyb20gc2VydmVyXHJcbiAgICAgIC8vIHRvdGFsOiBkYXRhLnRvdGFsQ291bnQsXHJcbiAgICB9KVxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93TW9kYWwgPSAoZGF0YSkgPT4ge1xyXG4gICAgc2V0RGF0YURlbGV0ZShkYXRhKVxyXG4gICAgc2V0VmlzaWJsZU1vZGFsRGVsZXRlKHRydWUpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGlkZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0VmlzaWJsZU1vZGFsRGVsZXRlKGZhbHNlKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGVsZXRlT3JnYW5pemF0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ0RFTEVURScpXHJcbiAgICAvLyBjb25zdCBkYXRhID0ge1xyXG4gICAgLy8gICAnb3JnYW5pemF0aW9uX25hbWUnOiB2YWx1ZS5vcmdhbml6YXRpb25fbmFtZSxcclxuICAgIC8vIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBjb25zdCByZWdpc3RlckRhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmRlbGV0ZSgnYWN0aXZpdGllcy8nICsgZGF0YURlbGV0ZS5hY3Rpdml0aWVzX2lkLCB7fSk7XHJcbiAgICBpZiAocmVnaXN0ZXJEYXRhLmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICBvcGVuTm90aWZpY2F0aW9uU3VjY2VzcygpXHJcbiAgICAgIC8vIGZldGNoT3JnYW5pemF0aW9uRGF0YSgpO1xyXG4gICAgICBzZXRWaXNpYmxlTW9kYWxEZWxldGUoZmFsc2UpXHJcbiAgICAgIGZldGNoKHsgcGFnaW5hdGlvbiB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9wZW5Ob3RpZmljYXRpb25GYWlsKHJlZ2lzdGVyRGF0YS5kYXRhLm1lc3NhZ2UpXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICBhcGkuc3VjY2Vzcyh7XHJcbiAgICAgIG1lc3NhZ2U6IGDguKXguJrguILguYnguK3guKHguLnguKXguKrguLPguYDguKPguYfguIhgLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ+C4peC4muC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iCcsXHJcbiAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25GYWlsID0gKG1lc3NnYWUpID0+IHtcclxuICAgIGFwaS5lcnJvcih7XHJcbiAgICAgIG1lc3NhZ2U6IGDguJ7guJrguJvguLHguI3guKvguLLguKPguLDguKvguKfguYjguLLguIfguIHguLLguKPguJrguLHguJnguJfguLbguIHguILguYnguK3guKHguLnguKVgLFxyXG4gICAgICBkZXNjcmlwdGlvbjogbWVzc2dhZSxcclxuICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBrZXk9e1wiaG9tZS1hY3Rpdml0aWVzXCJ9IHRpdGxlUGFnZT17XCLguIjguLHguJTguIHguLLguKPguILguYjguLLguKfguIHguLTguIjguIHguKPguKPguKFcIn0gdGl0bGU9XCJHb3Zlcm5tZW50IC0gQWRtaW4gbWFuYWdlbWVudFwiIHVybD17b3JpZ2lufSBvcmlnaW49e29yaWdpbn0gaXNNYWluPXt0cnVlfVxyXG4gICAgICBpbmRleFN1Yk1lbnU9e1wiMVwifVxyXG4gICAgICBpbmRleE1lbnU9e1wic3ViLTEtMFwifVxyXG4gICAgICB1c2VyPXtsb2dpbn0gcHJvcHM9e3Byb3BzfSBfcm91dGVzPXtbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGF0aDogJy9hZG1pbi9kYXNoYm9yYWQnLFxyXG4gICAgICAgICAgYnJlYWRjcnVtYk5hbWU6ICfguKvguJnguYnguLLguKvguKXguLHguIEnLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIHBhdGg6ICcvYWRtaW4vbWFuYWdlbWVudC9hY3Rpdml0aWVzJyxcclxuICAgICAgICAgIGJyZWFkY3J1bWJOYW1lOiAn4LiI4Lix4LiU4LiB4Liy4Lij4LiC4LmI4Liy4Lin4LiB4Li04LiI4LiB4Lij4Lij4LihJyxcclxuICAgICAgICB9XX0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2NvbnRleHRIb2xkZXJ9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6aW5saW5lLWZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTEvMiBweS0yIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW4vbWFuYWdlbWVudC9hY3Rpdml0aWVzL2FkZC1hY3Rpdml0aWVzXCI+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIC8vb25DbGljaz17KGUpID0+IGhhbmRsZUxvZ291dChlKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IGxnOnctYXV0byBweC0yIHB5LTIgcm91bmRlZCBoLTggdGV4dC13aGl0ZSBiZy15ZS02MDAgZm9udC1ib2xkIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBob3ZlcjpiZy1ncmVlbi02MDAgaG92ZXI6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg4LmA4Lie4Li04LmI4Lih4LiC4LmI4Liy4Lin4LiB4Li04LiI4LiB4Lij4Lij4LihXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodCB3LWZ1bGwganVzdGlmeS1pdGVtcy1lbmQgbGc6dy1hdXRvIHB5LTJcIj5cclxuICAgICAgICAgICAgPFNlYXJjaCBwbGFjZWhvbGRlcj1cIuC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4guC5iOC4suC4p+C4geC4tOC4iOC4geC4o+C4o+C4oVwiXHJcbiAgICAgICAgICAgICAgb25TZWFyY2g9e29uU2VhcmNofVxyXG4gICAgICAgICAgICAgIGVudGVyQnV0dG9uXHJcbiAgICAgICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgcm93S2V5PXtyZWNvcmQgPT4gcmVjb3JkLmFjdGl2aXRpZXNfaWR9XHJcbiAgICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgICAgICAgcGFnaW5hdGlvbj17cGFnaW5hdGlvbn1cclxuICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGFibGVDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIuC4hOC4uOC4k+C4leC5ieC4reC4h+C4geC4suC4o+C4peC4muC4guC5ieC4reC4oeC4ueC4peC4q+C4o+C4t+C4reC5hOC4oeC5iD9cIlxyXG4gICAgICAgIHZpc2libGU9e3Zpc2libGVNb2RhbERlbGV0ZX1cclxuICAgICAgICBvbk9rPXtvbkRlbGV0ZU9yZ2FuaXphdGlvbn1cclxuICAgICAgICBvbkNhbmNlbD17aGlkZU1vZGFsfVxyXG4gICAgICAgIG9rVGV4dD1cIuC4peC4mlwiXHJcbiAgICAgICAgY2FuY2VsVGV4dD1cIuC4ouC4geC5gOC4peC4tOC4gVwiXHJcbiAgICAgICAgb2tCdXR0b25Qcm9wcz17e1xyXG4gICAgICAgICAgJ3R5cGUnOiBcInByaW1hcnlcIixcclxuICAgICAgICAgICdkYW5nZXInOiB0cnVlXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxwPuC4hOC4uOC4k+C4leC5ieC4reC4h+C4geC4suC4o+C4peC4miBcIntkYXRhRGVsZXRlID8gZGF0YURlbGV0ZS5hY3Rpdml0aWVzX3RpdGxlIDogXCJcIn1cIiDguKvguKPguLfguK3guYTguKHguYg/ICA8L3A+XHJcblxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4vKiBnZXRTZXJ2ZXJTaWRlUHJvcHMgKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyByZXEgfSA9IGNvbnRleHQ7XHJcbiAgY29uc3QgeyBvcmlnaW4gfSA9IGFic29sdXRlVXJsKHJlcSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBvcmlnaW4sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==