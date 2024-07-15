webpackHotUpdate("static\\development\\pages\\admin\\setting\\general\\management-holiday.js",{

/***/ "./pages/admin/setting/general/management-holiday.js":
/*!***********************************************************!*\
  !*** ./pages/admin/setting/general/management-holiday.js ***!
  \***********************************************************/
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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/layout/LayoutAdmin */ "./components/layout/LayoutAdmin.jsx");
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../middleware/utils */ "./middleware/utils.js");





var _jsxFileName = "D:\\govermentlt\\pages\\admin\\setting\\general\\management-holiday.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // import UserNav from '../components/navigation/User';


/* components */


/* utils */


var Search = antd__WEBPACK_IMPORTED_MODULE_5__["Input"].Search;
var __N_SSP = true;
function Home(props) {
  _s();

  var _this = this;

  var user = props.user,
      origin = props.origin;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      login = _useState[0],
      setLogin = _useState[1];

  var _notification$useNoti = antd__WEBPACK_IMPORTED_MODULE_5__["notification"].useNotification(),
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
    title: 'ชื่อวันหยุด',
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
          lineNumber: 45,
          columnNumber: 5
        }
      }, " ", Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_9__["convertDatetoThaiDate"])(Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_9__["convertDateDBtoDatePickerNoTime"])(data.intro_date_s)), " \u0E16\u0E36\u0E07 ", Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_9__["convertDatetoThaiDate"])(Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_9__["convertDateDBtoDatePickerNoTime"])(data.intro_date_e))));
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
          lineNumber: 57,
          columnNumber: 5
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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        type: "primary",
        size: "default",
        onClick: function onClick() {
          return gotoPage(data.intro_id);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 5
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
          lineNumber: 69,
          columnNumber: 5
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
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_9__["apiInstance"])().get('admin/management/landing-page?isAdmin=1&results=' + params.pagination.pageSize + '&page=' + params.pagination.current + "&search=" + search + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters);

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
    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/admin/setting/general/' + id);
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
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_9__["apiInstance"])().get('admin/management/landing-page?isAdmin=1&results=' + pagination.pageSize + '&page=1&search=' + _search + "&filters=" + filters);

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
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_9__["apiInstance"])()["delete"]('admin/management/landing-page/' + dataDelete.intro_id, {});

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
    titlePage: "จัดการวันหยุด",
    isMain: true,
    indexMenu: "sub-6-3",
    title: "Government - Admin management",
    url: origin,
    origin: origin,
    user: login,
    props: props,
    _routes: [{
      path: '/admin/dashborad',
      breadcrumbName: 'หน้าหลัก'
    }, {
      path: '/admin/setting/general/management-holiday',
      breadcrumbName: 'จัดการวันหยุดพิเศษ'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 3
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 4
    }
  }, contextHolder, __jsx("div", {
    className: "w-full lg:inline-flex justify-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full lg:w-1/2 py-2 justify-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 6
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/admin/setting/general/add-holiday",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 7
    }
  }, __jsx("a", {
    //onClick={(e) => handleLogout(e)}
    className: "lg:inline-flex lg:w-auto px-2 py-2 rounded h-8 text-white bg-green-600 font-bold items-center justify-center hover:bg-green-600 hover:text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 8
    }
  }, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E27\u0E31\u0E19\u0E2B\u0E22\u0E38\u0E14"))), __jsx("div", {
    className: "text-right w-full justify-items-end lg:w-auto py-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 6
    }
  }, __jsx(Search, {
    placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E27\u0E31\u0E19\u0E2B\u0E22\u0E38\u0E14",
    onSearch: onSearch,
    enterButton: true,
    allowClear: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 7
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Table"], {
    columns: columns,
    rowKey: function rowKey(record) {
      return record.organization_id;
    },
    dataSource: data,
    pagination: pagination,
    loading: loading,
    onChange: handleTableChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 5
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
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
      lineNumber: 230,
      columnNumber: 4
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 5
    }
  }, "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A \"", dataDelete ? dataDelete.intro_title : "", "\" \u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?  ")));
}
/* getServerSideProps */

_s(Home, "qskOsnV2pkk4GSiHmIq9riaBXtQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9zZXR0aW5nL2dlbmVyYWwvbWFuYWdlbWVudC1ob2xpZGF5LmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsIklucHV0IiwiSG9tZSIsInByb3BzIiwidXNlciIsIm9yaWdpbiIsInVzZVN0YXRlIiwibG9naW4iLCJzZXRMb2dpbiIsIm5vdGlmaWNhdGlvbiIsInVzZU5vdGlmaWNhdGlvbiIsImFwaSIsImNvbnRleHRIb2xkZXIiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJkYXRhIiwic2V0RGF0YSIsImRhdGFEZWxldGUiLCJzZXREYXRhRGVsZXRlIiwiZmlsdGVycyIsInNldEZpbHRlcnMiLCJjdXJyZW50IiwicGFnZVNpemUiLCJwYWdpbmF0aW9uIiwic2V0UGFnaW5hdGlvbiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidmlzaWJsZU1vZGFsRGVsZXRlIiwic2V0VmlzaWJsZU1vZGFsRGVsZXRlIiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4Iiwic29ydGVyIiwia2V5IiwicmVuZGVyIiwiY29udmVydERhdGV0b1RoYWlEYXRlIiwiY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZSIsImludHJvX2RhdGVfcyIsImludHJvX2RhdGVfZSIsImlzX3VzZSIsImdvdG9QYWdlIiwiaW50cm9faWQiLCJzaG93TW9kYWwiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInBhcmFtcyIsImFwaUluc3RhbmNlIiwiZ2V0Iiwic29ydEZpZWxkIiwic29ydE9yZGVyIiwiYWRkYWN0aXZpdGllc0RhdGEiLCJyZXN1bHRzIiwidG90YWwiLCJ0b3RhbENvdW50IiwiY29uc29sZSIsImxvZyIsImlkIiwiUm91dGVyIiwicHVzaCIsIm9uU2VhcmNoIiwiX3NlYXJjaCIsImFuZGluZ19wYWdlRGF0YSIsImhhbmRsZVRhYmxlQ2hhbmdlIiwiY29sdW1uS2V5Iiwib3JkZXIiLCJvbkRlbGV0ZSIsInJlZ2lzdGVyRGF0YSIsInN0YXR1cyIsIm9wZW5Ob3RpZmljYXRpb25TdWNjZXNzIiwib3Blbk5vdGlmaWNhdGlvbkZhaWwiLCJtZXNzYWdlIiwiaGlkZU1vZGFsIiwic3VjY2VzcyIsImRlc2NyaXB0aW9uIiwicGxhY2VtZW50IiwibWVzc2dhZSIsImVycm9yIiwicGF0aCIsImJyZWFkY3J1bWJOYW1lIiwicmVjb3JkIiwib3JnYW5pemF0aW9uX2lkIiwiaW50cm9fdGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7Q0FFQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFHQSxJQUFRQSxNQUFSLEdBQW1CQywwQ0FBbkIsQ0FBUUQsTUFBUjs7QUFFZSxTQUFTRSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQTs7QUFDbkMsTUFBUUMsSUFBUixHQUF5QkQsS0FBekIsQ0FBUUMsSUFBUjtBQUFBLE1BQWNDLE1BQWQsR0FBeUJGLEtBQXpCLENBQWNFLE1BQWQ7O0FBQ0Esa0JBQTBCQyxzREFBUSxDQUFDLElBQUQsQ0FBbEM7QUFBQSxNQUFPQyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSw4QkFBNkJDLGlEQUFZLENBQUNDLGVBQWIsRUFBN0I7QUFBQTtBQUFBLE1BQU9DLEdBQVA7QUFBQSxNQUFZQyxhQUFaOztBQUNBLG1CQUE0Qk4sc0RBQVEsQ0FBQyxFQUFELENBQXBDO0FBQUEsTUFBT08sTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQXdCUixzREFBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQSxNQUFPUyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBb0NWLHNEQUFRLENBQUMsSUFBRCxDQUE1QztBQUFBLE1BQU9XLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0EsbUJBQThCWixzREFBUSxDQUFDLElBQUQsQ0FBdEM7QUFBQSxNQUFPYSxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUFvQ2Qsc0RBQVEsQ0FBQztB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QUFVLEVBQUVqRSxJQUhiO0FBSUMsY0FBVSxFQUFFUSxVQUpiO0FBS0MsV0FBTyxFQUFFRSxPQUxWO0FBTUMsWUFBUSxFQUFFcUMsaUJBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRCRCxDQVZELEVBMENDLE1BQUMsMENBQUQ7QUFDQyxTQUFLLEVBQUMseUpBRFA7QUFFQyxXQUFPLEVBQUVuQyxrQkFGVjtBQUdDLFFBQUksRUFBRXNDLFFBSFA7QUFJQyxZQUFRLEVBQUVNLFNBSlg7QUFLQyxVQUFNLEVBQUMsY0FMUjtBQU1DLGNBQVUsRUFBQyxzQ0FOWjtBQU9DLGlCQUFhLEVBQUU7QUFDZCxjQUFRLFNBRE07QUFFZCxnQkFBVTtBQUZJLEtBUGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FZQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9GQUFrQnRELFVBQVUsR0FBR0EsVUFBVSxDQUFDZ0UsV0FBZCxHQUE0QixFQUF4RCxxREFaRCxDQTFDRCxDQUREO0FBOERBO0FBQ0Q7O0dBMU93Qi9FLEk7VUFHTU8saURBQVksQ0FBQ0MsZTs7O0tBSG5CUixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pblxcc2V0dGluZ1xcZ2VuZXJhbFxcbWFuYWdlbWVudC1ob2xpZGF5LmpzLmFiMzAxMmQ2ZTVjM2VlOTM0MDlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG5cdEJ1dHRvbiwgSW5wdXQsIE1vZGFsLCBub3RpZmljYXRpb24sIFRhYmxlXHJcbn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG4vLyBpbXBvcnQgVXNlck5hdiBmcm9tICcuLi9jb21wb25lbnRzL25hdmlnYXRpb24vVXNlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbi8qIGNvbXBvbmVudHMgKi9cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRBZG1pbic7XHJcbi8qIHV0aWxzICovXHJcbmltcG9ydCB7IGFic29sdXRlVXJsLCBhcGlJbnN0YW5jZSwgY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZSwgY29udmVydERhdGV0b1RoYWlEYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbWlkZGxld2FyZS91dGlscyc7XHJcblxyXG5cclxuY29uc3QgeyBTZWFyY2ggfSA9IElucHV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG5cdGNvbnN0IHsgdXNlciwgb3JpZ2luIH0gPSBwcm9wcztcclxuXHRjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKG51bGwpXHJcblx0Y29uc3QgW2FwaSwgY29udGV4dEhvbGRlcl0gPSBub3RpZmljYXRpb24udXNlTm90aWZpY2F0aW9uKCk7XHJcblx0Y29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpXHJcblx0Y29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXHJcblx0Y29uc3QgW2RhdGFEZWxldGUsIHNldERhdGFEZWxldGVdID0gdXNlU3RhdGUobnVsbClcclxuXHRjb25zdCBbZmlsdGVycywgc2V0RmlsdGVyc10gPSB1c2VTdGF0ZShudWxsKVxyXG5cdGNvbnN0IFtwYWdpbmF0aW9uLCBzZXRQYWdpbmF0aW9uXSA9IHVzZVN0YXRlKHtcclxuXHRcdGN1cnJlbnQ6IDEsXHJcblx0XHRwYWdlU2l6ZTogMTAsXHJcblx0fSlcclxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHRjb25zdCBbdmlzaWJsZU1vZGFsRGVsZXRlLCBzZXRWaXNpYmxlTW9kYWxEZWxldGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblx0Y29uc3QgY29sdW1ucyA9IFtcclxuXHRcdHtcclxuXHRcdFx0dGl0bGU6ICfguIrguLfguYjguK3guKfguLHguJnguKvguKLguLjguJQnLFxyXG5cdFx0XHRkYXRhSW5kZXg6ICdpbnRyb190aXRsZScsXHJcblx0XHRcdHNvcnRlcjogdHJ1ZSxcclxuXHRcdFx0Ly8gcmVuZGVyOiBuYW1lID0+IGAke25hbWUuZmlyc3R9ICR7bmFtZS5sYXN0fWAsXHJcblx0XHRcdC8vIHdpZHRoOiAnMjAlJyxcclxuXHRcdFx0Ly8gZGVmYXVsdFNvcnRPcmRlcjogJ2Rlc2NlbmQnLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0dGl0bGU6ICfguIrguYjguKfguIfguYDguKfguKXguLLguJfguLXguYjguYHguKrguJTguIcnLFxyXG5cdFx0XHRkYXRhSW5kZXg6ICcnLFxyXG5cdFx0XHRzb3J0ZXI6IHRydWUsXHJcblx0XHRcdGtleTogJ2ludHJvX2RhdGVfcycsXHJcblx0XHRcdHJlbmRlcjogKGRhdGEpID0+IDw+XHJcblx0XHRcdFx0PHNwYW4gPiB7Y29udmVydERhdGV0b1RoYWlEYXRlKGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUoZGF0YS5pbnRyb19kYXRlX3MpKX0g4LiW4Li24LiHIHtjb252ZXJ0RGF0ZXRvVGhhaURhdGUoY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZShkYXRhLmludHJvX2RhdGVfZSkpfTwvc3Bhbj5cclxuXHRcdFx0PC8+LFxyXG5cdFx0XHQvLyByZW5kZXI6IG5hbWUgPT4gYCR7bmFtZS5maXJzdH0gJHtuYW1lLmxhc3R9YCxcclxuXHRcdFx0Ly8gd2lkdGg6ICcyMCUnLFxyXG5cdFx0XHQvLyBkZWZhdWx0U29ydE9yZGVyOiAnZGVzY2VuZCcsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHR0aXRsZTogJ+C4quC4luC4suC4meC4sOC4geC4suC4o+C5g+C4iuC5ieC4h+C4suC4mScsXHJcblx0XHRcdGRhdGFJbmRleDogJycsXHJcblx0XHRcdHNvcnRlcjogdHJ1ZSxcclxuXHRcdFx0a2V5OiAnaXNfdXNlJyxcclxuXHRcdFx0cmVuZGVyOiAoZGF0YSkgPT4gPD5cclxuXHRcdFx0XHQ8c3BhbiA+IHtkYXRhLmlzX3VzZSA/IFwi4LmD4LiK4LmJ4LiH4Liy4LiZXCIgOiBcIuC5hOC4oeC5iOC5g+C4iuC5ieC4h+C4suC4mVwifTwvc3Bhbj5cclxuXHRcdFx0PC8+LFxyXG5cdFx0XHQvLyByZW5kZXI6IG5hbWUgPT4gYCR7bmFtZS5maXJzdH0gJHtuYW1lLmxhc3R9YCxcclxuXHRcdFx0Ly8gd2lkdGg6ICcyMCUnLFxyXG5cdFx0XHQvLyBkZWZhdWx0U29ydE9yZGVyOiAnZGVzY2VuZCcsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHR0aXRsZTogJycsXHJcblx0XHRcdGRhdGFJbmRleDogJycsXHJcblx0XHRcdGtleTogJ3gnLFxyXG5cdFx0XHRyZW5kZXI6IChkYXRhKSA9PiA8PlxyXG5cdFx0XHRcdDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaXplPXtcImRlZmF1bHRcIn0gb25DbGljaz17KCkgPT4gZ290b1BhZ2UoZGF0YS5pbnRyb19pZCl9ID4g4LmB4LiB4LmJ4LmE4LiCIDwvQnV0dG9uPlxyXG5cdFx0XHRcdDxCdXR0b24gY2xhc3NOYW1lPVwibWwtMVwiIHR5cGU9XCJkYW5nZXJcIiBvbkNsaWNrPXsoKSA9PiBzaG93TW9kYWwoZGF0YSl9IHNpemU9e1wiZGVmYXVsdFwifSA+IOC4peC4miA8L0J1dHRvbj5cclxuXHRcdFx0PC8+LFxyXG5cdFx0fSxcclxuXHRcdC8vIHtcclxuXHRcdC8vICAgdGl0bGU6ICdHZW5kZXInLFxyXG5cdFx0Ly8gICBkYXRhSW5kZXg6ICdnZW5kZXInLFxyXG5cdFx0Ly8gICAvLyBmaWx0ZXJzOiBbXHJcblx0XHQvLyAgIC8vICAgeyB0ZXh0OiAnTWFsZScsIHZhbHVlOiAnbWFsZScgfSxcclxuXHRcdC8vICAgLy8gICB7IHRleHQ6ICdGZW1hbGUnLCB2YWx1ZTogJ2ZlbWFsZScgfSxcclxuXHRcdC8vICAgLy8gXSxcclxuXHRcdC8vICAgd2lkdGg6ICcyMCUnLFxyXG5cdFx0Ly8gfSxcclxuXHRcdC8vIHtcclxuXHRcdC8vICAgdGl0bGU6ICdFbWFpbCcsXHJcblx0XHQvLyAgIGRhdGFJbmRleDogJ2VtYWlsJyxcclxuXHRcdC8vIH0sXHJcblx0XTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGZldGNoKHsgcGFnaW5hdGlvbiB9KTtcclxuXHR9LCBbXSlcclxuXHJcblx0Y29uc3QgZmV0Y2ggPSBhc3luYyAocGFyYW1zID0ge30pID0+IHtcclxuXHRcdHNldExvYWRpbmcodHJ1ZSlcclxuXHRcdGNvbnN0IGFkZGFjdGl2aXRpZXNEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcblx0XHRcdCdhZG1pbi9tYW5hZ2VtZW50L2xhbmRpbmctcGFnZT9pc0FkbWluPTEmcmVzdWx0cz0nICsgcGFyYW1zLnBhZ2luYXRpb24ucGFnZVNpemUgKyAnJnBhZ2U9JyArIHBhcmFtcy5wYWdpbmF0aW9uLmN1cnJlbnQgKyBcIiZzZWFyY2g9XCIgKyBzZWFyY2ggKyBcIiZzb3J0RmllbGQ9XCIgKyBwYXJhbXMuc29ydEZpZWxkICsgXCImc29ydE9yZGVyPVwiICsgcGFyYW1zLnNvcnRPcmRlciArIFwiJmZpbHRlcnM9XCIgKyBwYXJhbXMuZmlsdGVyc1xyXG5cdFx0KTtcclxuXHJcblx0XHRzZXREYXRhKGFkZGFjdGl2aXRpZXNEYXRhLmRhdGEucmVzdWx0cylcclxuXHRcdHNldFBhZ2luYXRpb24oe1xyXG5cdFx0XHQuLi5wYXJhbXMucGFnaW5hdGlvbixcclxuXHRcdFx0dG90YWw6IGFkZGFjdGl2aXRpZXNEYXRhLmRhdGEudG90YWxDb3VudCxcclxuXHRcdFx0Ly8gMjAwIGlzIG1vY2sgZGF0YSwgeW91IHNob3VsZCByZWFkIGl0IGZyb20gc2VydmVyXHJcblx0XHRcdC8vIHRvdGFsOiBkYXRhLnRvdGFsQ291bnQsXHJcblx0XHR9KVxyXG5cdFx0c2V0TG9hZGluZyhmYWxzZSlcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzaG93TW9kYWwgPSAoZGF0YSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coJ2RhdGEgZGVsZXRkJylcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpXHJcblx0XHRzZXREYXRhRGVsZXRlKGRhdGEpXHJcblx0XHRzZXRWaXNpYmxlTW9kYWxEZWxldGUodHJ1ZSlcclxuXHR9O1xyXG5cclxuXHRjb25zdCBnb3RvUGFnZSA9IChpZCkgPT4ge1xyXG5cdFx0Um91dGVyLnB1c2goJy9hZG1pbi9zZXR0aW5nL2dlbmVyYWwvJyArIGlkKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvblNlYXJjaCA9IGFzeW5jIChfc2VhcmNoKSA9PiB7XHJcblx0XHRzZXRMb2FkaW5nKHRydWUpXHJcblx0XHRzZXRTZWFyY2goX3NlYXJjaClcclxuXHRcdHNldFBhZ2luYXRpb24oe1xyXG5cdFx0XHRwYWdlU2l6ZTogcGFnaW5hdGlvbi5wYWdlU2l6ZSxcclxuXHRcdFx0Y3VycmVudDogMVxyXG5cdFx0fSlcclxuXHRcdGNvbnN0IGFuZGluZ19wYWdlRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG5cdFx0XHQnYWRtaW4vbWFuYWdlbWVudC9sYW5kaW5nLXBhZ2U/aXNBZG1pbj0xJnJlc3VsdHM9JyArIHBhZ2luYXRpb24ucGFnZVNpemUgKyAnJnBhZ2U9MSZzZWFyY2g9JyArIF9zZWFyY2ggKyBcIiZmaWx0ZXJzPVwiICsgZmlsdGVyc1xyXG5cdFx0KTtcclxuXHJcblx0XHRzZXREYXRhKGFuZGluZ19wYWdlRGF0YS5kYXRhLnJlc3VsdHMpXHJcblx0XHRzZXRMb2FkaW5nKGZhbHNlKVxyXG5cdH1cclxuXHJcblx0Y29uc3QgaGFuZGxlVGFibGVDaGFuZ2UgPSAocGFnaW5hdGlvbiwgZmlsdGVycywgc29ydGVyKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhzb3J0ZXIpXHJcblx0XHRzZXRQYWdpbmF0aW9uKHtcclxuXHRcdFx0cGFnZVNpemU6IHBhZ2luYXRpb24ucGFnZVNpemUsXHJcblx0XHRcdGN1cnJlbnQ6IHBhZ2luYXRpb24uY3VycmVudFxyXG5cdFx0fSlcclxuXHRcdHNldEZpbHRlcnMoZmlsdGVycy5wYWNrYWdlKVxyXG5cdFx0ZmV0Y2goe1xyXG5cdFx0XHRzb3J0RmllbGQ6IHNvcnRlci5jb2x1bW5LZXksXHJcblx0XHRcdHNvcnRPcmRlcjogc29ydGVyLm9yZGVyLFxyXG5cdFx0XHRwYWdpbmF0aW9uLFxyXG5cdFx0XHRmaWx0ZXJzOiBmaWx0ZXJzLnBhY2thZ2UsXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvbkRlbGV0ZSA9IGFzeW5jICgpID0+IHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdERUxFVEUnKVxyXG5cdFx0Ly8gY29uc3QgZGF0YSA9IHtcclxuXHRcdC8vICAgJ29yZ2FuaXphdGlvbl9uYW1lJzogdmFsdWUub3JnYW5pemF0aW9uX25hbWUsXHJcblx0XHQvLyB9XHJcblx0XHQvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG5cdFx0Y29uc3QgcmVnaXN0ZXJEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5kZWxldGUoJ2FkbWluL21hbmFnZW1lbnQvbGFuZGluZy1wYWdlLycgKyBkYXRhRGVsZXRlLmludHJvX2lkLCB7fSk7XHJcblx0XHRpZiAocmVnaXN0ZXJEYXRhLmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG5cdFx0XHRvcGVuTm90aWZpY2F0aW9uU3VjY2VzcygpXHJcblx0XHRcdC8vIGZldGNoT3JnYW5pemF0aW9uRGF0YSgpO1xyXG5cdFx0XHRzZXRWaXNpYmxlTW9kYWxEZWxldGUoZmFsc2UpXHJcblx0XHRcdGZldGNoKHsgcGFnaW5hdGlvbiB9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG9wZW5Ob3RpZmljYXRpb25GYWlsKHJlZ2lzdGVyRGF0YS5kYXRhLm1lc3NhZ2UpXHJcblxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgaGlkZU1vZGFsID0gKCkgPT4ge1xyXG5cdFx0c2V0VmlzaWJsZU1vZGFsRGVsZXRlKGZhbHNlKVxyXG5cdH07XHJcblxyXG5cclxuXHRjb25zdCBvcGVuTm90aWZpY2F0aW9uU3VjY2VzcyA9ICgpID0+IHtcclxuXHRcdGFwaS5zdWNjZXNzKHtcclxuXHRcdFx0bWVzc2FnZTogYOC4peC4muC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iGAsXHJcblx0XHRcdGRlc2NyaXB0aW9uOiAn4Lil4Lia4LiC4LmJ4Lit4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIJyxcclxuXHRcdFx0cGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb3Blbk5vdGlmaWNhdGlvbkZhaWwgPSAobWVzc2dhZSkgPT4ge1xyXG5cdFx0YXBpLmVycm9yKHtcclxuXHRcdFx0bWVzc2FnZTogYOC4nuC4muC4m+C4seC4jeC4q+C4suC4o+C4sOC4q+C4p+C5iOC4suC4h+C4geC4suC4o+C4peC4muC4guC5ieC4reC4oeC4ueC4pWAsXHJcblx0XHRcdGRlc2NyaXB0aW9uOiBtZXNzZ2FlLFxyXG5cdFx0XHRwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dCB0aXRsZVBhZ2U9e1wi4LiI4Lix4LiU4LiB4Liy4Lij4Lin4Lix4LiZ4Lir4Lii4Li44LiUXCJ9IGlzTWFpbj17dHJ1ZX0gaW5kZXhNZW51PXtcInN1Yi02LTNcIn0gdGl0bGU9XCJHb3Zlcm5tZW50IC0gQWRtaW4gbWFuYWdlbWVudFwiIHVybD17b3JpZ2lufSBvcmlnaW49e29yaWdpbn0gdXNlcj17bG9naW59IHByb3BzPXtwcm9wc31cclxuXHRcdFx0X3JvdXRlcz17W1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHBhdGg6ICcvYWRtaW4vZGFzaGJvcmFkJyxcclxuXHRcdFx0XHRcdGJyZWFkY3J1bWJOYW1lOiAn4Lir4LiZ4LmJ4Liy4Lir4Lil4Lix4LiBJyxcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRwYXRoOiAnL2FkbWluL3NldHRpbmcvZ2VuZXJhbC9tYW5hZ2VtZW50LWhvbGlkYXknLFxyXG5cdFx0XHRcdFx0YnJlYWRjcnVtYk5hbWU6ICfguIjguLHguJTguIHguLLguKPguKfguLHguJnguKvguKLguLjguJTguJ7guLTguYDguKjguKknLFxyXG5cdFx0XHRcdH1dfVxyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdHtjb250ZXh0SG9sZGVyfVxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOmlubGluZS1mbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzIgcHktMiBqdXN0aWZ5LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2FkbWluL3NldHRpbmcvZ2VuZXJhbC9hZGQtaG9saWRheVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHQvL29uQ2xpY2s9eyhlKSA9PiBoYW5kbGVMb2dvdXQoZSl9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCBsZzp3LWF1dG8gcHgtMiBweS0yIHJvdW5kZWQgaC04IHRleHQtd2hpdGUgYmctZ3JlZW4tNjAwIGZvbnQtYm9sZCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaG92ZXI6YmctZ3JlZW4tNjAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdOC5gOC4nuC4tOC5iOC4oeC4p+C4seC4meC4q+C4ouC4uOC4lFxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHQgdy1mdWxsIGp1c3RpZnktaXRlbXMtZW5kIGxnOnctYXV0byBweS0yXCI+XHJcblx0XHRcdFx0XHRcdDxTZWFyY2ggcGxhY2Vob2xkZXI9XCLguIHguKPguK3guIHguIrguLfguYjguK3guKfguLHguJnguKvguKLguLjguJRcIlxyXG5cdFx0XHRcdFx0XHRcdG9uU2VhcmNoPXtvblNlYXJjaH1cclxuXHRcdFx0XHRcdFx0XHRlbnRlckJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGFsbG93Q2xlYXJcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8VGFibGVcclxuXHRcdFx0XHRcdGNvbHVtbnM9e2NvbHVtbnN9XHJcblx0XHRcdFx0XHRyb3dLZXk9e3JlY29yZCA9PiByZWNvcmQub3JnYW5pemF0aW9uX2lkfVxyXG5cdFx0XHRcdFx0ZGF0YVNvdXJjZT17ZGF0YX1cclxuXHRcdFx0XHRcdHBhZ2luYXRpb249e3BhZ2luYXRpb259XHJcblx0XHRcdFx0XHRsb2FkaW5nPXtsb2FkaW5nfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZVRhYmxlQ2hhbmdlfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PE1vZGFsXHJcblx0XHRcdFx0dGl0bGU9XCLguITguLjguJPguJXguYnguK3guIfguIHguLLguKPguKXguJrguILguYnguK3guKHguLnguKXguKvguKPguLfguK3guYTguKHguYg/XCJcclxuXHRcdFx0XHR2aXNpYmxlPXt2aXNpYmxlTW9kYWxEZWxldGV9XHJcblx0XHRcdFx0b25Paz17b25EZWxldGV9XHJcblx0XHRcdFx0b25DYW5jZWw9e2hpZGVNb2RhbH1cclxuXHRcdFx0XHRva1RleHQ9XCLguKXguJpcIlxyXG5cdFx0XHRcdGNhbmNlbFRleHQ9XCLguKLguIHguYDguKXguLTguIFcIlxyXG5cdFx0XHRcdG9rQnV0dG9uUHJvcHM9e3tcclxuXHRcdFx0XHRcdCd0eXBlJzogXCJwcmltYXJ5XCIsXHJcblx0XHRcdFx0XHQnZGFuZ2VyJzogdHJ1ZVxyXG5cdFx0XHRcdH19XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8cD7guITguLjguJPguJXguYnguK3guIfguIHguLLguKPguKXguJogXCJ7ZGF0YURlbGV0ZSA/IGRhdGFEZWxldGUuaW50cm9fdGl0bGUgOiBcIlwifVwiIOC4q+C4o+C4t+C4reC5hOC4oeC5iD8gIDwvcD5cclxuXHJcblx0XHRcdDwvTW9kYWw+XHJcblxyXG5cclxuXHRcdDwvTGF5b3V0ID5cclxuXHQpO1xyXG59XHJcbi8qIGdldFNlcnZlclNpZGVQcm9wcyAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuXHRjb25zdCB7IHJlcSB9ID0gY29udGV4dDtcclxuXHRjb25zdCB7IG9yaWdpbiB9ID0gYWJzb2x1dGVVcmwocmVxKTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdG9yaWdpbixcclxuXHRcdH0sXHJcblx0fTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9