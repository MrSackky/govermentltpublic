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
    titlePage: "จัดการหน้า landing page",
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
      breadcrumbName: 'จัดการหน้า landing page'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 3
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 5
    }
  }, contextHolder, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    span: 24,
    className: " pb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    span: 18,
    className: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    className: "items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/admin/management-auto-landingpage/add-landingpage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 17
    }
  }, __jsx("a", {
    //onClick={(e) => handleLogout(e)}
    className: "lg:inline-flex lg:w-auto w-full px-2 py-2 rounded h-8 text-white bg-green-600 font-bold items-center justify-center hover:bg-green-600 hover:text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 19
    }
  }, "\u0E40\u0E1E\u0E34\u0E48\u0E21 landing page")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    span: 6,
    className: "flex items-center justify-end justify-items-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    className: " justify-end justify-items-end ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 15
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
      columnNumber: 17
    }
  })))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Table"], {
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
      lineNumber: 239,
      columnNumber: 7
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
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9tYW5hZ2VtZW50LWF1dG8tbGFuZGluZ3BhZ2UvaW5kZXguanMiXSwibmFtZXMiOlsiU2VhcmNoIiwiSW5wdXQiLCJIb21lIiwicHJvcHMiLCJ1c2VyIiwib3JpZ2luIiwidXNlU3RhdGUiLCJsb2dpbiIsInNldExvZ2luIiwibm90aWZpY2F0aW9uIiwidXNlTm90aWZpY2F0aW9uIiwiYXBpIiwiY29udGV4dEhvbGRlciIsInNlYXJjaCIsInNldFNlYXJjaCIsImRhdGEiLCJzZXREYXRhIiwiZGF0YURlbGV0ZSIsInNldERhdGFEZWxldGUiLCJmaWx0ZXJzIiwic2V0RmlsdGVycyIsImN1cnJlbnQiLCJwYWdlU2l6ZSIsInBhZ2luYXRpb24iLCJzZXRQYWdpbmF0aW9uIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ2aXNpYmxlTW9kYWxEZWxldGUiLCJzZXRWaXNpYmxlTW9kYWxEZWxldGUiLCJjb2x1bW5zIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJzb3J0ZXIiLCJrZXkiLCJyZW5kZXIiLCJjb252ZXJ0RGF0ZXRvVGhhaURhdGUiLCJjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lIiwiaW50cm9fZGF0ZV9zIiwiaW50cm9fZGF0ZV9lIiwiaXNfdXNlIiwiZ290b1BhZ2UiLCJpbnRyb19pZCIsInNob3dNb2RhbCIsInVzZUVmZmVjdCIsImZldGNoIiwicGFyYW1zIiwiYXBpSW5zdGFuY2UiLCJnZXQiLCJzb3J0RmllbGQiLCJzb3J0T3JkZXIiLCJhZGRhY3Rpdml0aWVzRGF0YSIsInJlc3VsdHMiLCJ0b3RhbCIsInRvdGFsQ291bnQiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJSb3V0ZXIiLCJwdXNoIiwib25TZWFyY2giLCJfc2VhcmNoIiwiYW5kaW5nX3BhZ2VEYXRhIiwiaGFuZGxlVGFibGVDaGFuZ2UiLCJjb2x1bW5LZXkiLCJvcmRlciIsIm9uRGVsZXRlIiwicmVnaXN0ZXJEYXRhIiwic3RhdHVzIiwib3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MiLCJvcGVuTm90aWZpY2F0aW9uRmFpbCIsIm1lc3NhZ2UiLCJoaWRlTW9kYWwiLCJzdWNjZXNzIiwiZGVzY3JpcHRpb24iLCJwbGFjZW1lbnQiLCJtZXNzZ2FlIiwiZXJyb3IiLCJwYXRoIiwiYnJlYWRjcnVtYk5hbWUiLCJyZWNvcmQiLCJvcmdhbml6YXRpb25faWQiLCJpbnRyb190aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBRUE7O0NBRUE7O0FBQ0E7QUFFQTtBQVNBLElBQVFBLE1BQVIsR0FBbUJDLDBDQUFuQixDQUFRRCxNQUFSOztBQUVlLFNBQVNFLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBOztBQUNsQyxNQUFRQyxJQUFSLEdBQXlCRCxLQUF6QixDQUFRQyxJQUFSO0FBQUEsTUFBY0MsTUFBZCxHQUF5QkYsS0FBekIsQ0FBY0UsTUFBZDs7QUFDQSxrQkFBMEJDLHNEQUFRLENBQUMsSUFBRCxDQUFsQztBQUFBLE1BQU9DLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLDhCQUE2QkMsaURBQVksQ0FBQ0MsZUFBYixFQUE3QjtBQUFBO0FBQUEsTUFBT0MsR0FBUDtBQUFBLE1BQVlDLGFBQVo7O0FBQ0EsbUJBQTRCTixzREFBUSxDQUFDLEVBQUQsQ0FBcEM7QUFBQSxNQUFPTyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBd0JSLHNEQUFRLENBQUMsRUFBRCxDQUFoQztBQUFBLE1BQU9TLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG1CQUFvQ1Ysc0RBQVEsQ0FBQyxJQUFELENBQTVDO0FBQUEsTUFBT1csVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBOEJaLHNEQUFRLENBQUMsSUFBRCxDQUF0QztBQUFBLE1BQU9hLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQW9DZCxzREFBUSxDQUFDO0FB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c3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFkbWluXFxtYW5hZ2VtZW50LWF1dG8tbGFuZGluZ3BhZ2UuanMuODI1NzZmYzBjNThkOWM1MmI3ZTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG4vKiB1dGlscyAqL1xyXG5pbXBvcnQgeyBhYnNvbHV0ZVVybCwgYXBpSW5zdGFuY2UsIGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUsIGNvbnZlcnREYXRldG9UaGFpRGF0ZSB9IGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvdXRpbHMnO1xyXG5cclxuLyogY29tcG9uZW50cyAqL1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dEFkbWluJztcclxuLy8gaW1wb3J0IFVzZXJOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL1VzZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgQ29sLFxyXG4gIElucHV0LFxyXG4gIE1vZGFsLFxyXG4gIFJvdyxcclxuICBUYWJsZSxcclxuICBub3RpZmljYXRpb25cclxufSBmcm9tICdhbnRkJztcclxuY29uc3QgeyBTZWFyY2ggfSA9IElucHV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG4gIGNvbnN0IHsgdXNlciwgb3JpZ2luIH0gPSBwcm9wcztcclxuICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2FwaSwgY29udGV4dEhvbGRlcl0gPSBub3RpZmljYXRpb24udXNlTm90aWZpY2F0aW9uKCk7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2RhdGFEZWxldGUsIHNldERhdGFEZWxldGVdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbZmlsdGVycywgc2V0RmlsdGVyc10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtwYWdpbmF0aW9uLCBzZXRQYWdpbmF0aW9uXSA9IHVzZVN0YXRlKHtcclxuICAgIGN1cnJlbnQ6IDEsXHJcbiAgICBwYWdlU2l6ZTogMTAsXHJcbiAgfSlcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdmlzaWJsZU1vZGFsRGVsZXRlLCBzZXRWaXNpYmxlTW9kYWxEZWxldGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfguIrguLfguYjguK0gbGFuZGluZyBwYWdlJyxcclxuICAgICAgZGF0YUluZGV4OiAnaW50cm9fdGl0bGUnLFxyXG4gICAgICBzb3J0ZXI6IHRydWUsXHJcbiAgICAgIC8vIHJlbmRlcjogbmFtZSA9PiBgJHtuYW1lLmZpcnN0fSAke25hbWUubGFzdH1gLFxyXG4gICAgICAvLyB3aWR0aDogJzIwJScsXHJcbiAgICAgIC8vIGRlZmF1bHRTb3J0T3JkZXI6ICdkZXNjZW5kJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn4LiK4LmI4Lin4LiH4LmA4Lin4Lil4Liy4LiX4Li14LmI4LmB4Liq4LiU4LiHJyxcclxuICAgICAgZGF0YUluZGV4OiAnJyxcclxuICAgICAgc29ydGVyOiB0cnVlLFxyXG4gICAgICBrZXk6ICdpbnRyb19kYXRlX3MnLFxyXG4gICAgICByZW5kZXI6IChkYXRhKSA9PiA8PlxyXG4gICAgICAgIDxzcGFuID4ge2NvbnZlcnREYXRldG9UaGFpRGF0ZShjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lKGRhdGEuaW50cm9fZGF0ZV9zKSl9IOC4luC4tuC4hyB7Y29udmVydERhdGV0b1RoYWlEYXRlKGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUoZGF0YS5pbnRyb19kYXRlX2UpKX08L3NwYW4+XHJcbiAgICAgIDwvPixcclxuICAgICAgLy8gcmVuZGVyOiBuYW1lID0+IGAke25hbWUuZmlyc3R9ICR7bmFtZS5sYXN0fWAsXHJcbiAgICAgIC8vIHdpZHRoOiAnMjAlJyxcclxuICAgICAgLy8gZGVmYXVsdFNvcnRPcmRlcjogJ2Rlc2NlbmQnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfguKrguJbguLLguJnguLDguIHguLLguKPguYPguIrguYnguIfguLLguJknLFxyXG4gICAgICBkYXRhSW5kZXg6ICcnLFxyXG4gICAgICBzb3J0ZXI6IHRydWUsXHJcbiAgICAgIGtleTogJ2lzX3VzZScsXHJcbiAgICAgIHJlbmRlcjogKGRhdGEpID0+IDw+XHJcbiAgICAgICAgPHNwYW4gPiB7ZGF0YS5pc191c2UgPyBcIuC5g+C4iuC5ieC4h+C4suC4mVwiIDogXCLguYTguKHguYjguYPguIrguYnguIfguLLguJlcIn08L3NwYW4+XHJcbiAgICAgIDwvPixcclxuICAgICAgLy8gcmVuZGVyOiBuYW1lID0+IGAke25hbWUuZmlyc3R9ICR7bmFtZS5sYXN0fWAsXHJcbiAgICAgIC8vIHdpZHRoOiAnMjAlJyxcclxuICAgICAgLy8gZGVmYXVsdFNvcnRPcmRlcjogJ2Rlc2NlbmQnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICBkYXRhSW5kZXg6ICcnLFxyXG4gICAgICBrZXk6ICd4JyxcclxuICAgICAgcmVuZGVyOiAoZGF0YSkgPT4gPD5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2l6ZT17XCJkZWZhdWx0XCJ9IG9uQ2xpY2s9eygpID0+IGdvdG9QYWdlKGRhdGEuaW50cm9faWQpfSA+IOC5geC4geC5ieC5hOC4giA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1sLTFcIiB0eXBlPVwiZGFuZ2VyXCIgb25DbGljaz17KCkgPT4gc2hvd01vZGFsKGRhdGEpfSBzaXplPXtcImRlZmF1bHRcIn0gPiDguKXguJogPC9CdXR0b24+XHJcbiAgICAgIDwvPixcclxuICAgIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgIHRpdGxlOiAnR2VuZGVyJyxcclxuICAgIC8vICAgZGF0YUluZGV4OiAnZ2VuZGVyJyxcclxuICAgIC8vICAgLy8gZmlsdGVyczogW1xyXG4gICAgLy8gICAvLyAgIHsgdGV4dDogJ01hbGUnLCB2YWx1ZTogJ21hbGUnIH0sXHJcbiAgICAvLyAgIC8vICAgeyB0ZXh0OiAnRmVtYWxlJywgdmFsdWU6ICdmZW1hbGUnIH0sXHJcbiAgICAvLyAgIC8vIF0sXHJcbiAgICAvLyAgIHdpZHRoOiAnMjAlJyxcclxuICAgIC8vIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgIHRpdGxlOiAnRW1haWwnLFxyXG4gICAgLy8gICBkYXRhSW5kZXg6ICdlbWFpbCcsXHJcbiAgICAvLyB9LFxyXG4gIF07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaCh7IHBhZ2luYXRpb24gfSk7XHJcbiAgfSwgW10pXHJcblxyXG5jb25zdCBmZXRjaCA9IGFzeW5jIChwYXJhbXMgPSB7fSkgPT4ge1xyXG4gIHNldExvYWRpbmcodHJ1ZSlcclxuICBjb25zdCBhZGRhY3Rpdml0aWVzRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgJ2FkbWluL21hbmFnZW1lbnQvbGFuZGluZy1wYWdlP2lzQWRtaW49MSZyZXN1bHRzPScgKyBwYXJhbXMucGFnaW5hdGlvbi5wYWdlU2l6ZSArICcmcGFnZT0nICsgcGFyYW1zLnBhZ2luYXRpb24uY3VycmVudCArIFwiJnNlYXJjaD1cIiArIHNlYXJjaCArIFwiJnNvcnRGaWVsZD1cIiArIHBhcmFtcy5zb3J0RmllbGQgKyBcIiZzb3J0T3JkZXI9XCIgKyBwYXJhbXMuc29ydE9yZGVyICsgXCImZmlsdGVycz1cIiArIHBhcmFtcy5maWx0ZXJzXHJcbiAgKTtcclxuXHJcbiAgc2V0RGF0YShhZGRhY3Rpdml0aWVzRGF0YS5kYXRhLnJlc3VsdHMpXHJcbiAgc2V0UGFnaW5hdGlvbih7XHJcbiAgICAuLi5wYXJhbXMucGFnaW5hdGlvbixcclxuICAgIHRvdGFsOiBhZGRhY3Rpdml0aWVzRGF0YS5kYXRhLnRvdGFsQ291bnQsXHJcbiAgICAvLyAyMDAgaXMgbW9jayBkYXRhLCB5b3Ugc2hvdWxkIHJlYWQgaXQgZnJvbSBzZXJ2ZXJcclxuICAgIC8vIHRvdGFsOiBkYXRhLnRvdGFsQ291bnQsXHJcbiAgfSlcclxuICBzZXRMb2FkaW5nKGZhbHNlKVxyXG59O1xyXG5cclxuY29uc3Qgc2hvd01vZGFsID0gKGRhdGEpID0+IHtcclxuICBjb25zb2xlLmxvZygnZGF0YSBkZWxldGQnKVxyXG4gIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgc2V0RGF0YURlbGV0ZShkYXRhKVxyXG4gIHNldFZpc2libGVNb2RhbERlbGV0ZSh0cnVlKVxyXG59O1xyXG5cclxuY29uc3QgZ290b1BhZ2UgPSAoaWQpID0+IHtcclxuICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQtYXV0by1sYW5kaW5ncGFnZS9sYW5kaW5nLXBhZ2UvJyArIGlkKTtcclxuXHJcbn07XHJcblxyXG5jb25zdCBvblNlYXJjaCA9IGFzeW5jIChfc2VhcmNoKSA9PiB7XHJcbiAgc2V0TG9hZGluZyh0cnVlKVxyXG4gIHNldFNlYXJjaChfc2VhcmNoKVxyXG4gIHNldFBhZ2luYXRpb24oe1xyXG4gICAgcGFnZVNpemU6IHBhZ2luYXRpb24ucGFnZVNpemUsXHJcbiAgICBjdXJyZW50OiAxXHJcbiAgfSlcclxuICBjb25zdCBhbmRpbmdfcGFnZURhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICdhZG1pbi9tYW5hZ2VtZW50L2xhbmRpbmctcGFnZT9pc0FkbWluPTEmcmVzdWx0cz0nICsgcGFnaW5hdGlvbi5wYWdlU2l6ZSArICcmcGFnZT0xJnNlYXJjaD0nICsgX3NlYXJjaCArIFwiJmZpbHRlcnM9XCIgKyBmaWx0ZXJzXHJcbiAgKTtcclxuXHJcbiAgc2V0RGF0YShhbmRpbmdfcGFnZURhdGEuZGF0YS5yZXN1bHRzKVxyXG4gIHNldExvYWRpbmcoZmFsc2UpXHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZVRhYmxlQ2hhbmdlID0gKHBhZ2luYXRpb24sIGZpbHRlcnMsIHNvcnRlcikgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHNvcnRlcilcclxuICBzZXRQYWdpbmF0aW9uKHtcclxuICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgY3VycmVudDogcGFnaW5hdGlvbi5jdXJyZW50XHJcbiAgfSlcclxuICBzZXRGaWx0ZXJzKGZpbHRlcnMucGFja2FnZSlcclxuICBmZXRjaCh7XHJcbiAgICBzb3J0RmllbGQ6IHNvcnRlci5jb2x1bW5LZXksXHJcbiAgICBzb3J0T3JkZXI6IHNvcnRlci5vcmRlcixcclxuICAgIHBhZ2luYXRpb24sXHJcbiAgICBmaWx0ZXJzOiBmaWx0ZXJzLnBhY2thZ2UsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBvbkRlbGV0ZSA9IGFzeW5jICgpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZygnREVMRVRFJylcclxuICAvLyBjb25zdCBkYXRhID0ge1xyXG4gIC8vICAgJ29yZ2FuaXphdGlvbl9uYW1lJzogdmFsdWUub3JnYW5pemF0aW9uX25hbWUsXHJcbiAgLy8gfVxyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgY29uc3QgcmVnaXN0ZXJEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5kZWxldGUoJ2FkbWluL21hbmFnZW1lbnQvbGFuZGluZy1wYWdlLycgKyBkYXRhRGVsZXRlLmludHJvX2lkLCB7fSk7XHJcbiAgaWYgKHJlZ2lzdGVyRGF0YS5kYXRhLnN0YXR1cyA9PSAyMDApIHtcclxuICAgIG9wZW5Ob3RpZmljYXRpb25TdWNjZXNzKClcclxuICAgIC8vIGZldGNoT3JnYW5pemF0aW9uRGF0YSgpO1xyXG4gICAgc2V0VmlzaWJsZU1vZGFsRGVsZXRlKGZhbHNlKVxyXG4gICAgZmV0Y2goeyBwYWdpbmF0aW9uIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBvcGVuTm90aWZpY2F0aW9uRmFpbChyZWdpc3RlckRhdGEuZGF0YS5tZXNzYWdlKVxyXG5cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGhpZGVNb2RhbCA9ICgpID0+IHtcclxuICBzZXRWaXNpYmxlTW9kYWxEZWxldGUoZmFsc2UpXHJcbn07XHJcblxyXG5cclxuY29uc3Qgb3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgYXBpLnN1Y2Nlc3Moe1xyXG4gICAgbWVzc2FnZTogYOC4peC4muC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iGAsXHJcbiAgICBkZXNjcmlwdGlvbjogJ+C4peC4muC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iCcsXHJcbiAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBvcGVuTm90aWZpY2F0aW9uRmFpbCA9IChtZXNzZ2FlKSA9PiB7XHJcbiAgYXBpLmVycm9yKHtcclxuICAgIG1lc3NhZ2U6IGDguJ7guJrguJvguLHguI3guKvguLLguKPguLDguKvguKfguYjguLLguIfguIHguLLguKPguKXguJrguILguYnguK3guKHguLnguKVgLFxyXG4gICAgZGVzY3JpcHRpb246IG1lc3NnYWUsXHJcbiAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5yZXR1cm4gKFxyXG4gIDxMYXlvdXQgdGl0bGVQYWdlPXtcIuC4iOC4seC4lOC4geC4suC4o+C4q+C4meC5ieC4siBsYW5kaW5nIHBhZ2VcIn0gaXNNYWluPXt0cnVlfSBpbmRleE1lbnU9e1wiM1wifSB0aXRsZT1cIkdvdmVybm1lbnQgLSBBZG1pbiBtYW5hZ2VtZW50XCIgdXJsPXtvcmlnaW59IG9yaWdpbj17b3JpZ2lufSB1c2VyPXtsb2dpbn0gcHJvcHM9e3Byb3BzfVxyXG4gICAgX3JvdXRlcz17W1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy9hZG1pbi9kYXNoYm9yYWQnLFxyXG4gICAgICAgIGJyZWFkY3J1bWJOYW1lOiAn4Lir4LiZ4LmJ4Liy4Lir4Lil4Lix4LiBJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgIHBhdGg6ICcvYWRtaW4vbWFuYWdlbWVudC1hdXRvLWxhbmRpbmdwYWdlJyxcclxuICAgICAgICBicmVhZGNydW1iTmFtZTogJ+C4iOC4seC4lOC4geC4suC4o+C4q+C4meC5ieC4siBsYW5kaW5nIHBhZ2UnLFxyXG4gICAgICB9XX1cclxuICA+XHJcbiAgICA8ZGl2PlxyXG4gICAgICB7Y29udGV4dEhvbGRlcn1cclxuICAgICAgPFJvdyA+XHJcbiAgICAgICAgPENvbCBzcGFuPXsyNH0gY2xhc3NOYW1lPVwiIHBiLTFcIj5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgc3Bhbj17MTh9IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluL21hbmFnZW1lbnQtYXV0by1sYW5kaW5ncGFnZS9hZGQtbGFuZGluZ3BhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAvL29uQ2xpY2s9eyhlKSA9PiBoYW5kbGVMb2dvdXQoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggbGc6dy1hdXRvIHctZnVsbCBweC0yIHB5LTIgcm91bmRlZCBoLTggdGV4dC13aGl0ZSBiZy1ncmVlbi02MDAgZm9udC1ib2xkIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBob3ZlcjpiZy1ncmVlbi02MDAgaG92ZXI6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDguYDguJ7guLTguYjguKEgbGFuZGluZyBwYWdlXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgc3Bhbj17Nn0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQganVzdGlmeS1pdGVtcy1lbmRcIj5cclxuICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIiBqdXN0aWZ5LWVuZCBqdXN0aWZ5LWl0ZW1zLWVuZCBcIj5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2ggcGxhY2Vob2xkZXI9XCJpbnB1dCBzZWFyY2ggdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgZW50ZXJCdXR0b25cclxuICAgICAgICAgICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIHsvKiA8Q29sIHNwYW49ezEyfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktaXRlbXMtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvQ29sPiAqL31cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuXHJcbiAgICAgIDxUYWJsZVxyXG4gICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgcm93S2V5PXtyZWNvcmQgPT4gcmVjb3JkLm9yZ2FuaXphdGlvbl9pZH1cclxuICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgICAgIHBhZ2luYXRpb249e3BhZ2luYXRpb259XHJcbiAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGFibGVDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8TW9kYWxcclxuICAgICAgdGl0bGU9XCLguITguLjguJPguJXguYnguK3guIfguIHguLLguKPguKXguJrguILguYnguK3guKHguLnguKXguKvguKPguLfguK3guYTguKHguYg/XCJcclxuICAgICAgdmlzaWJsZT17dmlzaWJsZU1vZGFsRGVsZXRlfVxyXG4gICAgICBvbk9rPXtvbkRlbGV0ZX1cclxuICAgICAgb25DYW5jZWw9e2hpZGVNb2RhbH1cclxuICAgICAgb2tUZXh0PVwi4Lil4LiaXCJcclxuICAgICAgY2FuY2VsVGV4dD1cIuC4ouC4geC5gOC4peC4tOC4gVwiXHJcbiAgICAgIG9rQnV0dG9uUHJvcHM9e3tcclxuICAgICAgICAndHlwZSc6IFwicHJpbWFyeVwiLFxyXG4gICAgICAgICdkYW5nZXInOiB0cnVlXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxwPuC4hOC4uOC4k+C4leC5ieC4reC4h+C4geC4suC4o+C4peC4miBcIntkYXRhRGVsZXRlID8gZGF0YURlbGV0ZS5pbnRyb190aXRsZSA6IFwiXCJ9XCIg4Lir4Lij4Li34Lit4LmE4Lih4LmIPyAgPC9wPlxyXG5cclxuICAgIDwvTW9kYWw+XHJcblxyXG5cclxuICA8L0xheW91dCA+XHJcbik7XHJcbn1cclxuLyogZ2V0U2VydmVyU2lkZVByb3BzICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgcmVxIH0gPSBjb250ZXh0O1xyXG4gIGNvbnN0IHsgb3JpZ2luIH0gPSBhYnNvbHV0ZVVybChyZXEpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgb3JpZ2luLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=