webpackHotUpdate("static\\development\\pages\\admin\\management-organization.js",{

/***/ "./pages/admin/management-organization/index.js":
/*!******************************************************!*\
  !*** ./pages/admin/management-organization/index.js ***!
  \******************************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reqwest */ "./node_modules/reqwest/reqwest.js");
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reqwest__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../middleware/utils */ "./middleware/utils.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/layout/LayoutAdmin */ "./components/layout/LayoutAdmin.jsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");





var _jsxFileName = "D:\\govermentlt\\pages\\admin\\management-organization\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* utils */



/* components */

 // import UserNav from '../components/navigation/User';



var Text = antd__WEBPACK_IMPORTED_MODULE_10__["Typography"].Text,
    Title = antd__WEBPACK_IMPORTED_MODULE_10__["Typography"].Title;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_10__["Input"].TextArea,
    Search = antd__WEBPACK_IMPORTED_MODULE_10__["Input"].Search;
var __N_SSP = true;
function Home(props) {
  _s();

  var _this = this;

  var _notification$useNoti = antd__WEBPACK_IMPORTED_MODULE_10__["notification"].useNotification(),
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
    title: 'วันที่สมัคร',
    dataIndex: '',
    sorter: true,
    key: 'date_created',
    render: function render(data) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }
      }, " ", Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["convertDatetoThaiDate"])(Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["convertDateDBtoDatePickerNoTime"])(data.date_created)), " "));
    } // render: name => `${name.first} ${name.last}`,
    // width: '20%',
    // defaultSortOrder: 'descend',

  }, {
    title: 'วันที่หมดอายุ',
    dataIndex: '',
    sorter: true,
    key: 'date_expired',
    render: function render(data) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 9
        }
      }, " ", Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["convertDatetoThaiDate"])(Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["convertDateDBtoDatePickerNoTime"])(data.date_expired)), " "));
    } // render: name => `${name.first} ${name.last}`,
    // width: '20%',
    // defaultSortOrder: 'descend',

  }, {
    title: 'ชื่อหน่วยงาน',
    dataIndex: 'organization_name',
    sorter: true // render: name => `${name.first} ${name.last}`,
    // width: '20%',
    // defaultSortOrder: 'descend',

  }, {
    title: 'ใช้พื้นที่',
    dataIndex: '',
    sorter: true,
    key: 'size_used',
    render: function render(data) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 9
        }
      }, " ", Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["bytesToSize"])(data.size_used), "  "));
    } // defaultSortOrder: 'descend',

  }, {
    title: 'package',
    dataIndex: '',
    key: 'package',
    sorter: true,
    render: function render(data) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 9
        }
      }, " ", data.packages.name_package, " "));
    },
    filters: [{
      text: 'Free Package',
      value: 1
    }, {
      text: 'Connect Package',
      value: 2
    }, {
      text: 'Standard Package',
      value: 3
    }, {
      text: 'Premium Package',
      value: 4
    }] // render: name => `${name.first} ${name.last}`,
    // width: '20%',
    // defaultSortOrder: 'descend',

  }, {
    title: 'สถานะ',
    dataIndex: '',
    key: 'is_use',
    sorter: true,
    render: function render(data) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 9
        }
      }, " ", data.is_use == 1 ? "ใช้งาน" : "ไม่ใช้งาน", " "));
    } // render: name => `${name.first} ${name.last}`,
    // width: '20%',
    // defaultSortOrder: 'descend',

  }, {
    title: '',
    dataIndex: '',
    key: 'x',
    render: function render(data) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        type: "primary",
        size: "default",
        onClick: function onClick() {
          return gotoPage(data.organization_id);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 9
        }
      }, " \u0E41\u0E01\u0E49\u0E44\u0E02 "), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        className: "ml-1",
        type: "danger",
        onClick: function onClick() {
          return showModal(data);
        },
        size: "default",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
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

  var gotoPage = function gotoPage(id) {
    console.log(id);
    next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/admin/management-organization/organization/' + id);
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
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["apiInstance"])().get('organization?results=' + pagination.pageSize + '&page=1&search=' + _search + "&filters=" + filters);

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
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["apiInstance"])().get('organization?results=' + params.pagination.pageSize + '&page=' + params.pagination.current + "&search=" + search + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters);

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
  }(); // const fetch = (params = {}) => {
  //   setLoading(true)
  //   reqwest({
  //     url: 'https://randomuser.me/api',
  //     method: 'get',
  //     type: 'json',
  //     data: getRandomuserParams(params),
  //   }).then(data => {
  //     console.log(data);
  //     setLoading(false)
  //     setData(data.results)
  //     setPagination({
  //       ...params.pagination,
  //       total: 200,
  //       // 200 is mock data, you should read it from server
  //       // total: data.totalCount,
  //     })
  //   });
  // };


  var showModal = function showModal(data) {
    console.log('data deletd');
    console.log(data);
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
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["apiInstance"])()["delete"]('/organization/' + dataDelete.organization_id, {});

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
      message: "\u0E1E\u0E1A\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25",
      description: messgae,
      placement: 'topRight'
    });
  };

  return __jsx(_components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_9__["default"], {
    key: "home-organization",
    titlePage: "หน่วยงาน",
    title: "Government - Admin management",
    url: origin,
    origin: origin,
    isMain: true,
    indexMenu: "1",
    user: login,
    props: props,
    _routes: [{
      path: '/admin/dashborad',
      breadcrumbName: 'หน้าหลัก'
    }, {
      path: '/admin/management-organization',
      breadcrumbName: 'จัดการหน่วยงาน'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 7
    }
  }, contextHolder, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Col"], {
    span: 24,
    className: " pb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Col"], {
    span: 18,
    className: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Row"], {
    className: "items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/admin/management-organization/add-organization",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 19
    }
  }, __jsx("a", {
    //onClick={(e) => handleLogout(e)}
    className: "lg:inline-flex lg:w-auto w-full px-2 py-2 rounded h-8 text-white bg-green-600 font-bold items-center justify-center hover:bg-green-600 hover:text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 21
    }
  }, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Col"], {
    span: 6,
    className: "flex items-center justify-end justify-items-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Row"], {
    className: " justify-end justify-items-end ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
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
      lineNumber: 300,
      columnNumber: 19
    }
  })))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Table"], {
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
      lineNumber: 315,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Modal"], {
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
      lineNumber: 325,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 9
    }
  }, "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A \"", dataDelete ? dataDelete.organization_name : "", "\" \u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?  ")));
}
/* getServerSideProps */

_s(Home, "B/zpem81lA4iahYszi41VNhSPaY=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_10__["notification"].useNotification];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9tYW5hZ2VtZW50LW9yZ2FuaXphdGlvbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJUZXh0IiwiVHlwb2dyYXBoeSIsIlRpdGxlIiwiVGV4dEFyZWEiLCJJbnB1dCIsIlNlYXJjaCIsIkhvbWUiLCJwcm9wcyIsIm5vdGlmaWNhdGlvbiIsInVzZU5vdGlmaWNhdGlvbiIsImFwaSIsImNvbnRleHRIb2xkZXIiLCJ1c2VyIiwib3JpZ2luIiwidXNlU3RhdGUiLCJsb2dpbiIsInNldExvZ2luIiwic2hvdWxkUnVuIiwic2V0U2hvdWxkUnVuIiwiZGF0YSIsInNldERhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNlYXJjaCIsInNldFNlYXJjaCIsInZpc2libGVNb2RhbERlbGV0ZSIsInNldFZpc2libGVNb2RhbERlbGV0ZSIsImRhdGFEZWxldGUiLCJzZXREYXRhRGVsZXRlIiwiZmlsdGVycyIsInNldEZpbHRlcnMiLCJjdXJyZW50IiwicGFnZVNpemUiLCJwYWdpbmF0aW9uIiwic2V0UGFnaW5hdGlvbiIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsInNvcnRlciIsImtleSIsInJlbmRlciIsImNvbnZlcnREYXRldG9UaGFpRGF0ZSIsImNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUiLCJkYXRlX2NyZWF0ZWQiLCJkYXRlX2V4cGlyZWQiLCJieXRlc1RvU2l6ZSIsInNpemVfdXNlZCIsInBhY2thZ2VzIiwibmFtZV9wYWNrYWdlIiwidGV4dCIsInZhbHVlIiwiaXNfdXNlIiwiZ290b1BhZ2UiLCJvcmdhbml6YXRpb25faWQiLCJzaG93TW9kYWwiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJSb3V0ZXIiLCJwdXNoIiwidXNlRWZmZWN0IiwiX2ZpbHRlcnMiLCJmZXRjaCIsImhhbmRsZVRhYmxlQ2hhbmdlIiwic29ydEZpZWxkIiwiY29sdW1uS2V5Iiwic29ydE9yZGVyIiwib3JkZXIiLCJvblNlYXJjaCIsIl9zZWFyY2giLCJhcGlJbnN0YW5jZSIsImdldCIsImFkZGFjdGl2aXRpZXNEYXRhIiwicmVzdWx0cyIsInBhcmFtcyIsInRvdGFsIiwidG90YWxDb3VudCIsImhpZGVNb2RhbCIsIm9uRGVsZXRlT3JnYW5pemF0aW9uIiwicmVnaXN0ZXJEYXRhIiwic3RhdHVzIiwib3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MiLCJvcGVuTm90aWZpY2F0aW9uRmFpbCIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZGVzY3JpcHRpb24iLCJwbGFjZW1lbnQiLCJtZXNzZ2FlIiwiZXJyb3IiLCJwYXRoIiwiYnJlYWRjcnVtYk5hbWUiLCJyZWNvcmQiLCJvcmdhbml6YXRpb25fbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztDQUVBOztBQUNBO0FBRUE7QUFhQSxJQUFRQSxJQUFSLEdBQXdCQyxnREFBeEIsQ0FBUUQsSUFBUjtBQUFBLElBQWNFLEtBQWQsR0FBd0JELGdEQUF4QixDQUFjQyxLQUFkO0FBRUEsSUFBUUMsUUFBUixHQUE2QkMsMkNBQTdCLENBQVFELFFBQVI7QUFBQSxJQUFrQkUsTUFBbEIsR0FBNkJELDJDQUE3QixDQUFrQkMsTUFBbEI7O0FBR2UsU0FBU0MsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQUE7O0FBQ2xDLDhCQUE2QkMsa0RBQVksQ0FBQ0MsZUFBYixFQUE3QjtBQUFBO0FBQUEsTUFBT0MsR0FBUDtBQUFBLE1BQVlDLGFBQVo7O0FBQ0EsTUFBUUMsSUFBUixHQUF5QkwsS0FBekIsQ0FBUUssSUFBUjtBQUFBLE1BQWNDLE1BQWQsR0FBeUJOLEtBQXpCLENBQWNNLE1BQWQ7O0FBQ0Esa0JBQTBCQyxzREFBUSxDQUFDLElBQUQsQ0FBbEM7QUFBQSxNQUFPQyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBa0NGLHNEQUFRLENBQUMsSUFBRCxDQUExQztBQUFB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QUFEO0FBQ0UsV0FBTyxFQUFFakMsT0FEWDtBQUVFLFVBQU0sRUFBRSxnQkFBQXdELE1BQU07QUFBQSxhQUFJQSxNQUFNLENBQUN0QyxlQUFYO0FBQUEsS0FGaEI7QUFHRSxjQUFVLEVBQUVsQyxJQUhkO0FBSUUsY0FBVSxFQUFFYyxVQUpkO0FBS0UsV0FBTyxFQUFFWixPQUxYO0FBTUUsWUFBUSxFQUFFMEMsaUJBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxDRixDQVJGLEVBb0RFLE1BQUMsMkNBQUQ7QUFDRSxTQUFLLEVBQUMseUpBRFI7QUFFRSxXQUFPLEVBQUV0QyxrQkFGWDtBQUdFLFFBQUksRUFBRXFELG9CQUhSO0FBSUUsWUFBUSxFQUFFRCxTQUpaO0FBS0UsVUFBTSxFQUFDLGNBTFQ7QUFNRSxjQUFVLEVBQUMsc0NBTmI7QUFPRSxpQkFBYSxFQUFFO0FBQ2IsY0FBUSxTQURLO0FBRWIsZ0JBQVU7QUFGRyxLQVBqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvRkFBa0JsRCxVQUFVLEdBQUdBLFVBQVUsQ0FBQ2lFLGlCQUFkLEdBQWtDLEVBQTlELHFEQVpGLENBcERGLENBREY7QUFzRUQ7QUFDRDs7R0ExVHdCdEYsSTtVQUNPRSxrREFBWSxDQUFDQyxlOzs7S0FEcEJILEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFkbWluXFxtYW5hZ2VtZW50LW9yZ2FuaXphdGlvbi5qcy45NjFkNDM5ZDgwNTc0NmI3ZTczYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHJlcXdlc3QgZnJvbSAncmVxd2VzdCc7XHJcbi8qIHV0aWxzICovXHJcbmltcG9ydCB7IGFic29sdXRlVXJsLCBjaGVja0lzTG9naW4sIGFwaUluc3RhbmNlLCBjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lLCBieXRlc1RvU2l6ZSwgY29udmVydERhdGV0b1RoYWlEYXRlICB9IGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvdXRpbHMnO1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuLyogY29tcG9uZW50cyAqL1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dEFkbWluJztcclxuLy8gaW1wb3J0IFVzZXJOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL1VzZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQge1xyXG4gIENhcm91c2VsLFxyXG4gIFJvdyxcclxuICBDb2wsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBJbWFnZSxcclxuICBCdXR0b24sXHJcbiAgSW5wdXQsXHJcbiAgQ2FyZCxcclxuICBUYWJsZSxcclxuICBNb2RhbCxcclxuICBub3RpZmljYXRpb25cclxufSBmcm9tICdhbnRkJztcclxuY29uc3QgeyBUZXh0LCBUaXRsZSB9ID0gVHlwb2dyYXBoeTtcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEsIFNlYXJjaCB9ID0gSW5wdXQ7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG4gIGNvbnN0IFthcGksIGNvbnRleHRIb2xkZXJdID0gbm90aWZpY2F0aW9uLnVzZU5vdGlmaWNhdGlvbigpO1xyXG4gIGNvbnN0IHsgdXNlciwgb3JpZ2luIH0gPSBwcm9wcztcclxuICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3Nob3VsZFJ1biwgc2V0U2hvdWxkUnVuXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW3Zpc2libGVNb2RhbERlbGV0ZSwgc2V0VmlzaWJsZU1vZGFsRGVsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtkYXRhRGVsZXRlLCBzZXREYXRhRGVsZXRlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbcGFnaW5hdGlvbiwgc2V0UGFnaW5hdGlvbl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBjdXJyZW50OiAxLFxyXG4gICAgcGFnZVNpemU6IDEwLFxyXG4gIH0pXHJcbiAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfguKfguLHguJnguJfguLXguYjguKrguKHguLHguITguKMnLFxyXG4gICAgICBkYXRhSW5kZXg6ICcnLFxyXG4gICAgICBzb3J0ZXI6IHRydWUsXHJcbiAgICAgIGtleTogJ2RhdGVfY3JlYXRlZCcsXHJcbiAgICAgIHJlbmRlcjogKGRhdGEpID0+IDw+XHJcbiAgICAgICAgPHNwYW4gPiB7Y29udmVydERhdGV0b1RoYWlEYXRlKGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUoZGF0YS5kYXRlX2NyZWF0ZWQpKX0gPC9zcGFuPlxyXG4gICAgICA8Lz4sXHJcbiAgICAgIC8vIHJlbmRlcjogbmFtZSA9PiBgJHtuYW1lLmZpcnN0fSAke25hbWUubGFzdH1gLFxyXG4gICAgICAvLyB3aWR0aDogJzIwJScsXHJcbiAgICAgIC8vIGRlZmF1bHRTb3J0T3JkZXI6ICdkZXNjZW5kJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn4Lin4Lix4LiZ4LiX4Li14LmI4Lir4Lih4LiU4Lit4Liy4Lii4Li4JyxcclxuICAgICAgZGF0YUluZGV4OiAnJyxcclxuICAgICAgc29ydGVyOiB0cnVlLFxyXG4gICAgICBrZXk6ICdkYXRlX2V4cGlyZWQnLFxyXG4gICAgICByZW5kZXI6IChkYXRhKSA9PiA8PlxyXG4gICAgICAgIDxzcGFuID4ge2NvbnZlcnREYXRldG9UaGFpRGF0ZShjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lKGRhdGEuZGF0ZV9leHBpcmVkKSl9IDwvc3Bhbj5cclxuICAgICAgPC8+LFxyXG4gICAgICAvLyByZW5kZXI6IG5hbWUgPT4gYCR7bmFtZS5maXJzdH0gJHtuYW1lLmxhc3R9YCxcclxuICAgICAgLy8gd2lkdGg6ICcyMCUnLFxyXG4gICAgICAvLyBkZWZhdWx0U29ydE9yZGVyOiAnZGVzY2VuZCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+C4iuC4t+C5iOC4reC4q+C4meC5iOC4p+C4ouC4h+C4suC4mScsXHJcbiAgICAgIGRhdGFJbmRleDogJ29yZ2FuaXphdGlvbl9uYW1lJyxcclxuICAgICAgc29ydGVyOiB0cnVlLFxyXG4gICAgICAvLyByZW5kZXI6IG5hbWUgPT4gYCR7bmFtZS5maXJzdH0gJHtuYW1lLmxhc3R9YCxcclxuICAgICAgLy8gd2lkdGg6ICcyMCUnLFxyXG4gICAgICAvLyBkZWZhdWx0U29ydE9yZGVyOiAnZGVzY2VuZCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+C5g+C4iuC5ieC4nuC4t+C5ieC4meC4l+C4teC5iCcsXHJcbiAgICAgIGRhdGFJbmRleDogJycsXHJcbiAgICAgIHNvcnRlcjogdHJ1ZSxcclxuICAgICAga2V5OiAnc2l6ZV91c2VkJyxcclxuICAgICAgcmVuZGVyOiAoZGF0YSkgPT4gPD5cclxuICAgICAgICA8c3BhbiA+IHtieXRlc1RvU2l6ZShkYXRhLnNpemVfdXNlZCl9ICA8L3NwYW4+XHJcbiAgICAgIDwvPlxyXG4gICAgICAvLyBkZWZhdWx0U29ydE9yZGVyOiAnZGVzY2VuZCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ3BhY2thZ2UnLFxyXG4gICAgICBkYXRhSW5kZXg6ICcnLFxyXG4gICAgICBrZXk6ICdwYWNrYWdlJyxcclxuICAgICAgc29ydGVyOiB0cnVlLFxyXG4gICAgICByZW5kZXI6IChkYXRhKSA9PiA8PlxyXG4gICAgICAgIDxzcGFuID4ge2RhdGEucGFja2FnZXMubmFtZV9wYWNrYWdlfSA8L3NwYW4+XHJcbiAgICAgIDwvPixcclxuICAgICAgZmlsdGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdGcmVlIFBhY2thZ2UnLFxyXG4gICAgICAgICAgdmFsdWU6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnQ29ubmVjdCBQYWNrYWdlJyxcclxuICAgICAgICAgIHZhbHVlOiAyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ1N0YW5kYXJkIFBhY2thZ2UnLFxyXG4gICAgICAgICAgdmFsdWU6IDMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnUHJlbWl1bSBQYWNrYWdlJyxcclxuICAgICAgICAgIHZhbHVlOiA0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIC8vIHJlbmRlcjogbmFtZSA9PiBgJHtuYW1lLmZpcnN0fSAke25hbWUubGFzdH1gLFxyXG4gICAgICAvLyB3aWR0aDogJzIwJScsXHJcbiAgICAgIC8vIGRlZmF1bHRTb3J0T3JkZXI6ICdkZXNjZW5kJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn4Liq4LiW4Liy4LiZ4LiwJyxcclxuICAgICAgZGF0YUluZGV4OiAnJyxcclxuICAgICAga2V5OiAnaXNfdXNlJyxcclxuICAgICAgc29ydGVyOiB0cnVlLFxyXG4gICAgICByZW5kZXI6IChkYXRhKSA9PiA8PlxyXG4gICAgICAgIDxzcGFuID4ge2RhdGEuaXNfdXNlID09IDEgPyBcIuC5g+C4iuC5ieC4h+C4suC4mVwiIDogXCLguYTguKHguYjguYPguIrguYnguIfguLLguJlcIn0gPC9zcGFuPlxyXG4gICAgICA8Lz4sXHJcbiAgICAgIC8vIHJlbmRlcjogbmFtZSA9PiBgJHtuYW1lLmZpcnN0fSAke25hbWUubGFzdH1gLFxyXG4gICAgICAvLyB3aWR0aDogJzIwJScsXHJcbiAgICAgIC8vIGRlZmF1bHRTb3J0T3JkZXI6ICdkZXNjZW5kJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgZGF0YUluZGV4OiAnJyxcclxuICAgICAga2V5OiAneCcsXHJcbiAgICAgIHJlbmRlcjogKGRhdGEpID0+IDw+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNpemU9e1wiZGVmYXVsdFwifSBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZShkYXRhLm9yZ2FuaXphdGlvbl9pZCl9ID4g4LmB4LiB4LmJ4LmE4LiCIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibWwtMVwiIHR5cGU9XCJkYW5nZXJcIiBvbkNsaWNrPXsoKSA9PiBzaG93TW9kYWwoZGF0YSl9IHNpemU9e1wiZGVmYXVsdFwifSA+IOC4peC4miA8L0J1dHRvbj5cclxuICAgICAgPC8+LFxyXG4gICAgfSxcclxuICAgIC8vIHtcclxuICAgIC8vICAgdGl0bGU6ICdHZW5kZXInLFxyXG4gICAgLy8gICBkYXRhSW5kZXg6ICdnZW5kZXInLFxyXG4gICAgLy8gICAvLyBmaWx0ZXJzOiBbXHJcbiAgICAvLyAgIC8vICAgeyB0ZXh0OiAnTWFsZScsIHZhbHVlOiAnbWFsZScgfSxcclxuICAgIC8vICAgLy8gICB7IHRleHQ6ICdGZW1hbGUnLCB2YWx1ZTogJ2ZlbWFsZScgfSxcclxuICAgIC8vICAgLy8gXSxcclxuICAgIC8vICAgd2lkdGg6ICcyMCUnLFxyXG4gICAgLy8gfSxcclxuICAgIC8vIHtcclxuICAgIC8vICAgdGl0bGU6ICdFbWFpbCcsXHJcbiAgICAvLyAgIGRhdGFJbmRleDogJ2VtYWlsJyxcclxuICAgIC8vIH0sXHJcbiAgXTtcclxuICBjb25zdCBnb3RvUGFnZSA9IChpZCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaWQpXHJcbiAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQtb3JnYW5pemF0aW9uL29yZ2FuaXphdGlvbi8nICsgaWQpO1xyXG5cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdmFyIF9maWx0ZXJzID0gW11cclxuICAgIHBhZ2luYXRpb24uZmlsdGVycyA9IF9maWx0ZXJzXHJcbiAgICBmZXRjaCh7IHBhZ2luYXRpb24gfSk7XHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhYmxlQ2hhbmdlID0gKHBhZ2luYXRpb24sIGZpbHRlcnMsIHNvcnRlcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coc29ydGVyKVxyXG4gICAgc2V0UGFnaW5hdGlvbih7XHJcbiAgICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICBjdXJyZW50OiBwYWdpbmF0aW9uLmN1cnJlbnRcclxuICAgIH0pXHJcbiAgICBzZXRGaWx0ZXJzKGZpbHRlcnMucGFja2FnZSlcclxuICAgIGZldGNoKHtcclxuICAgICAgc29ydEZpZWxkOiBzb3J0ZXIuY29sdW1uS2V5LFxyXG4gICAgICBzb3J0T3JkZXI6IHNvcnRlci5vcmRlcixcclxuICAgICAgcGFnaW5hdGlvbixcclxuICAgICAgZmlsdGVyczogZmlsdGVycy5wYWNrYWdlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBvblNlYXJjaCA9IGFzeW5jIChfc2VhcmNoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBzZXRTZWFyY2goX3NlYXJjaClcclxuICAgIHNldFBhZ2luYXRpb24oe1xyXG4gICAgICBwYWdlU2l6ZTogcGFnaW5hdGlvbi5wYWdlU2l6ZSxcclxuICAgICAgY3VycmVudDogMVxyXG4gICAgfSlcclxuICAgIGNvbnN0IGFkZGFjdGl2aXRpZXNEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICdvcmdhbml6YXRpb24/cmVzdWx0cz0nICsgcGFnaW5hdGlvbi5wYWdlU2l6ZSArICcmcGFnZT0xJnNlYXJjaD0nICsgX3NlYXJjaCArIFwiJmZpbHRlcnM9XCIgKyBmaWx0ZXJzXHJcbiAgICApO1xyXG5cclxuICAgIHNldERhdGEoYWRkYWN0aXZpdGllc0RhdGEuZGF0YS5yZXN1bHRzKVxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICB9XHJcbiAgY29uc3QgZmV0Y2ggPSBhc3luYyAocGFyYW1zID0ge30pID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGNvbnN0IGFkZGFjdGl2aXRpZXNEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICdvcmdhbml6YXRpb24/cmVzdWx0cz0nICsgcGFyYW1zLnBhZ2luYXRpb24ucGFnZVNpemUgKyAnJnBhZ2U9JyArIHBhcmFtcy5wYWdpbmF0aW9uLmN1cnJlbnQgKyBcIiZzZWFyY2g9XCIgKyBzZWFyY2ggKyBcIiZzb3J0RmllbGQ9XCIgKyBwYXJhbXMuc29ydEZpZWxkICsgXCImc29ydE9yZGVyPVwiICsgcGFyYW1zLnNvcnRPcmRlciArIFwiJmZpbHRlcnM9XCIgKyBwYXJhbXMuZmlsdGVyc1xyXG4gICAgKTtcclxuXHJcbiAgICBzZXREYXRhKGFkZGFjdGl2aXRpZXNEYXRhLmRhdGEucmVzdWx0cylcclxuICAgIHNldFBhZ2luYXRpb24oe1xyXG4gICAgICAuLi5wYXJhbXMucGFnaW5hdGlvbixcclxuICAgICAgdG90YWw6IGFkZGFjdGl2aXRpZXNEYXRhLmRhdGEudG90YWxDb3VudCxcclxuICAgICAgLy8gMjAwIGlzIG1vY2sgZGF0YSwgeW91IHNob3VsZCByZWFkIGl0IGZyb20gc2VydmVyXHJcbiAgICAgIC8vIHRvdGFsOiBkYXRhLnRvdGFsQ291bnQsXHJcbiAgICB9KVxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICB9O1xyXG4gIC8vIGNvbnN0IGZldGNoID0gKHBhcmFtcyA9IHt9KSA9PiB7XHJcbiAgLy8gICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgLy8gICByZXF3ZXN0KHtcclxuICAvLyAgICAgdXJsOiAnaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaScsXHJcbiAgLy8gICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgLy8gICAgIHR5cGU6ICdqc29uJyxcclxuICAvLyAgICAgZGF0YTogZ2V0UmFuZG9tdXNlclBhcmFtcyhwYXJhbXMpLFxyXG4gIC8vICAgfSkudGhlbihkYXRhID0+IHtcclxuICAvLyAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgLy8gICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgLy8gICAgIHNldERhdGEoZGF0YS5yZXN1bHRzKVxyXG4gIC8vICAgICBzZXRQYWdpbmF0aW9uKHtcclxuICAvLyAgICAgICAuLi5wYXJhbXMucGFnaW5hdGlvbixcclxuICAvLyAgICAgICB0b3RhbDogMjAwLFxyXG4gIC8vICAgICAgIC8vIDIwMCBpcyBtb2NrIGRhdGEsIHlvdSBzaG91bGQgcmVhZCBpdCBmcm9tIHNlcnZlclxyXG4gIC8vICAgICAgIC8vIHRvdGFsOiBkYXRhLnRvdGFsQ291bnQsXHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICB9KTtcclxuICAvLyB9O1xyXG5cclxuXHJcbiAgY29uc3Qgc2hvd01vZGFsID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdkYXRhIGRlbGV0ZCcpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgc2V0RGF0YURlbGV0ZShkYXRhKVxyXG4gICAgc2V0VmlzaWJsZU1vZGFsRGVsZXRlKHRydWUpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGlkZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0VmlzaWJsZU1vZGFsRGVsZXRlKGZhbHNlKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGVsZXRlT3JnYW5pemF0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ0RFTEVURScpXHJcbiAgICAvLyBjb25zdCBkYXRhID0ge1xyXG4gICAgLy8gICAnb3JnYW5pemF0aW9uX25hbWUnOiB2YWx1ZS5vcmdhbml6YXRpb25fbmFtZSxcclxuICAgIC8vIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBjb25zdCByZWdpc3RlckRhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmRlbGV0ZSgnL29yZ2FuaXphdGlvbi8nICsgZGF0YURlbGV0ZS5vcmdhbml6YXRpb25faWQsIHt9KTtcclxuICAgIGlmIChyZWdpc3RlckRhdGEuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgIG9wZW5Ob3RpZmljYXRpb25TdWNjZXNzKClcclxuICAgICAgLy8gZmV0Y2hPcmdhbml6YXRpb25EYXRhKCk7XHJcbiAgICAgIHNldFZpc2libGVNb2RhbERlbGV0ZShmYWxzZSlcclxuICAgICAgZmV0Y2goeyBwYWdpbmF0aW9uIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvbkZhaWwocmVnaXN0ZXJEYXRhLmRhdGEubWVzc2FnZSlcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBvcGVuTm90aWZpY2F0aW9uU3VjY2VzcyA9ICgpID0+IHtcclxuICAgIGFwaS5zdWNjZXNzKHtcclxuICAgICAgbWVzc2FnZTogYOC4peC4muC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iGAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAn4Lil4Lia4LiC4LmJ4Lit4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIJyxcclxuICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvbkZhaWwgPSAobWVzc2dhZSkgPT4ge1xyXG4gICAgYXBpLmVycm9yKHtcclxuICAgICAgbWVzc2FnZTogYOC4nuC4muC4m+C4seC4jeC4q+C4suC4o+C4sOC4q+C4p+C5iOC4suC4h+C4geC4suC4o+C4peC4muC4guC5ieC4reC4oeC4ueC4pWAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBtZXNzZ2FlLFxyXG4gICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IGtleT17XCJob21lLW9yZ2FuaXphdGlvblwifSB0aXRsZVBhZ2U9e1wi4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZXCJ9IHRpdGxlPVwiR292ZXJubWVudCAtIEFkbWluIG1hbmFnZW1lbnRcIiB1cmw9e29yaWdpbn0gb3JpZ2luPXtvcmlnaW59IGlzTWFpbj17dHJ1ZX0gaW5kZXhNZW51PXtcIjFcIn0gdXNlcj17bG9naW59IHByb3BzPXtwcm9wc30gX3JvdXRlcz17W1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy9hZG1pbi9kYXNoYm9yYWQnLFxyXG4gICAgICAgIGJyZWFkY3J1bWJOYW1lOiAn4Lir4LiZ4LmJ4Liy4Lir4Lil4Lix4LiBJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgIHBhdGg6ICcvYWRtaW4vbWFuYWdlbWVudC1vcmdhbml6YXRpb24nLFxyXG4gICAgICAgIGJyZWFkY3J1bWJOYW1lOiAn4LiI4Lix4LiU4LiB4Liy4Lij4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZJyxcclxuICAgICAgfV19PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtjb250ZXh0SG9sZGVyfVxyXG4gICAgICAgIDxSb3cgPlxyXG4gICAgICAgICAgPENvbCBzcGFuPXsyNH0gY2xhc3NOYW1lPVwiIHBiLTFcIj5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezE4fSBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW4vbWFuYWdlbWVudC1vcmdhbml6YXRpb24vYWRkLW9yZ2FuaXphdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAvL29uQ2xpY2s9eyhlKSA9PiBoYW5kbGVMb2dvdXQoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCBsZzp3LWF1dG8gdy1mdWxsIHB4LTIgcHktMiByb3VuZGVkIGgtOCB0ZXh0LXdoaXRlIGJnLWdyZWVuLTYwMCBmb250LWJvbGQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGhvdmVyOmJnLWdyZWVuLTYwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguYDguJ7guLTguYjguKHguKvguJnguYjguKfguKLguIfguLLguJlcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17Nn0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQganVzdGlmeS1pdGVtcy1lbmRcIj5cclxuICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiIGp1c3RpZnktZW5kIGp1c3RpZnktaXRlbXMtZW5kIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8U2VhcmNoIHBsYWNlaG9sZGVyPVwiaW5wdXQgc2VhcmNoIHRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICBlbnRlckJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93Q2xlYXJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIHsvKiA8Q29sIHNwYW49ezEyfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktaXRlbXMtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvQ29sPiAqL31cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgcm93S2V5PXtyZWNvcmQgPT4gcmVjb3JkLm9yZ2FuaXphdGlvbl9pZH1cclxuICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XHJcbiAgICAgICAgICBwYWdpbmF0aW9uPXtwYWdpbmF0aW9ufVxyXG4gICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUYWJsZUNoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwi4LiE4Li44LiT4LiV4LmJ4Lit4LiH4LiB4Liy4Lij4Lil4Lia4LiC4LmJ4Lit4Lih4Li54Lil4Lir4Lij4Li34Lit4LmE4Lih4LmIP1wiXHJcbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZU1vZGFsRGVsZXRlfVxyXG4gICAgICAgIG9uT2s9e29uRGVsZXRlT3JnYW5pemF0aW9ufVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoaWRlTW9kYWx9XHJcbiAgICAgICAgb2tUZXh0PVwi4Lil4LiaXCJcclxuICAgICAgICBjYW5jZWxUZXh0PVwi4Lii4LiB4LmA4Lil4Li04LiBXCJcclxuICAgICAgICBva0J1dHRvblByb3BzPXt7XHJcbiAgICAgICAgICAndHlwZSc6IFwicHJpbWFyeVwiLFxyXG4gICAgICAgICAgJ2Rhbmdlcic6IHRydWVcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPHA+4LiE4Li44LiT4LiV4LmJ4Lit4LiH4LiB4Liy4Lij4Lil4LiaIFwie2RhdGFEZWxldGUgPyBkYXRhRGVsZXRlLm9yZ2FuaXphdGlvbl9uYW1lIDogXCJcIn1cIiDguKvguKPguLfguK3guYTguKHguYg/ICA8L3A+XHJcblxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4vKiBnZXRTZXJ2ZXJTaWRlUHJvcHMgKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyByZXEgfSA9IGNvbnRleHQ7XHJcbiAgY29uc3QgeyBvcmlnaW4gfSA9IGFic29sdXRlVXJsKHJlcSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBvcmlnaW4sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==