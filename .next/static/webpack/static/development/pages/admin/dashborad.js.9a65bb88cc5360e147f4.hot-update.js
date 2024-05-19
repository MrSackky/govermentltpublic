webpackHotUpdate("static\\development\\pages\\admin\\dashborad.js",{

/***/ "./pages/admin/dashborad/index-super-admin.js":
/*!****************************************************!*\
  !*** ./pages/admin/dashborad/index-super-admin.js ***!
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../middleware/utils */ "./middleware/utils.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "D:\\govermentlt\\pages\\admin\\dashborad\\index-super-admin.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* utils */






var Search = antd__WEBPACK_IMPORTED_MODULE_7__["Input"].Search;
var Text = antd__WEBPACK_IMPORTED_MODULE_7__["Typography"].Text,
    Title = antd__WEBPACK_IMPORTED_MODULE_7__["Typography"].Title;
var __N_SSP = true;
function Home(props) {
  _s();

  var _this = this;

  var origin = props.origin;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    current: 1,
    pageSize: 10
  }),
      pagination = _useState2[0],
      setPagination = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loading = _useState3[0],
      setLoading = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      search = _useState4[0],
      setSearch = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      filters = _useState5[0],
      setFilters = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      totalUser = _useState6[0],
      setTotalUser = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      totalWillExpired = _useState7[0],
      setTotalWillExpired = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      totalExpired = _useState8[0],
      setTotalExpired = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('dashborad-all'),
      apiTxt = _useState9[0],
      setApiTxt = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      today = _useState10[0],
      setToday = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      willExpried = _useState11[0],
      setWillExpried = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      expried = _useState12[0],
      setExpried = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('dashborad-will-expried'),
      apiTxtWillExpried = _useState13[0],
      setApiTxtWillExpried = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('ผู้ใช้ทั้งหมด'),
      txtMenu = _useState14[0],
      setTextMenu = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      dataDelete = _useState15[0],
      setDataDelete = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      visibleModalDelete = _useState16[0],
      setVisibleModalDelete = _useState16[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var _filters = [];
    pagination.filters = _filters;
    fetch({
      pagination: pagination
    });
    fetchWillExprired({
      pagination: pagination
    });
    fetchExprired({
      pagination: pagination
    });
  }, []);

  var showModal = function showModal(data) {
    console.log('data deletd');
    console.log(data);
    setDataDelete(data);
    setVisibleModalDelete(true);
  };

  var onDelete = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var registerData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_5__["apiInstance"])()["delete"]('admin/management/landing-page/' + dataDelete.intro_id, {});

            case 2:
              registerData = _context.sent;

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
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onDelete() {
      return _ref.apply(this, arguments);
    };
  }();

  var columns = [{
    title: 'วันที่สมัคร',
    dataIndex: '',
    sorter: true,
    key: 'date_created',
    render: function render(data) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 9
        }
      }, " ", Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_5__["convertDatetoThaiDate"])(Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_5__["convertDateDBtoDatePickerNoTime"])(data.date_created)), " "));
    } // render: name => `${name.first} ${name.last}`,
    // width: '20%',
    // defaultSortOrder: 'descend',

  }, {
    title: 'วันที่หมดอายุ',
    dataIndex: '',
    sorter: true,
    key: 'date_expired',
    render: function render(data) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 9
        }
      }, " ", Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_5__["convertDatetoThaiDate"])(Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_5__["convertDateDBtoDatePickerNoTime"])(data.date_expired)), " "));
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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 9
        }
      }, " ", Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_5__["bytesToSize"])(data.size_used), "  "));
    } // render: name => `${name.first} ${name.last}`,
    // width: '20%',
    // defaultSortOrder: 'descend',

  }, {
    title: 'package',
    dataIndex: '',
    key: 'package',
    sorter: true,
    render: function render(data) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        type: "primary",
        size: "default",
        onClick: function onClick() {
          return gotoPage(data.organization_id);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 9
        }
      }, " \u0E41\u0E01\u0E49\u0E44\u0E02 "), __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "ml-1",
        type: "danger",
        onClick: function onClick() {
          return showModal(data);
        },
        size: "default",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
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
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/admin/management-organization/organization/' + id);
  };

  var usedSize = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(size_used) {
      var _size;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_5__["bytesToMB"])(parseInt(size_used));

            case 2:
              _size = _context2.sent;
              return _context2.abrupt("return", _size);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function usedSize(_x) {
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

    switch (apiTxt) {
      case "dashborad-will-expried":
        fetchWillExpriredData({
          sortField: sorter.columnKey,
          sortOrder: sorter.order,
          pagination: pagination,
          filters: filters["package"]
        });
        break;

      case "dashborad-expried":
        fetchExpriredData({
          sortField: sorter.columnKey,
          sortOrder: sorter.order,
          pagination: pagination,
          filters: filters["package"]
        });
        break;

      default:
        fetchData({
          sortField: sorter.columnKey,
          sortOrder: sorter.order,
          pagination: pagination,
          filters: filters["package"]
        });
        break;
    }
  };

  var onSearch = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(_search) {
      var _today, _willExpried, willExpriedDateString;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setLoading(true);
              setSearch(_search);
              setPagination({
                pageSize: pagination.pageSize,
                current: 1
              });
              _today = moment__WEBPACK_IMPORTED_MODULE_8___default()().format('YYYY-MM-DD');
              _willExpried = Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_5__["addDays"])(_today, 31);
              _context3.next = 7;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_5__["formatDateWithoutTime"])(_willExpried);

            case 7:
              willExpriedDateString = _context3.sent;
              _context3.t0 = apiTxt;
              _context3.next = _context3.t0 === "dashborad-will-expried" ? 11 : _context3.t0 === "dashborad-expried" ? 13 : _context3.t0 === "dashborad-all" ? 15 : 17;
              break;

            case 11:
              fetchWillExpriredData({
                pagination: {
                  pageSize: pagination.pageSize,
                  current: 1
                },
                search: _search
              });
              return _context3.abrupt("break", 17);

            case 13:
              fetchExpriredData({
                pagination: {
                  pageSize: pagination.pageSize,
                  current: 1
                },
                search: _search
              });
              return _context3.abrupt("break", 17);

            case 15:
              fetchData({
                pagination: {
                  pageSize: pagination.pageSize,
                  current: 1
                },
                search: _search
              });
              return _context3.abrupt("break", 17);

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function onSearch(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var fetch = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
      var params,
          addactivitiesData,
          _args4 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              params = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
              setLoading(true);
              _context4.next = 4;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_5__["apiInstance"])().get('organization/' + apiTxt + '?results=' + params.pagination.pageSize + '&page=' + params.pagination.current + "&search=" + search + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters);

            case 4:
              addactivitiesData = _context4.sent;
              setData(addactivitiesData.data.results);
              setPagination(_objectSpread(_objectSpread({}, params.pagination), {}, {
                total: addactivitiesData.data.totalCount // 200 is mock data, you should read it from server
                // total: data.totalCount,

              }));
              setTotalUser(addactivitiesData.data.totalCount);
              setLoading(false);

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function fetch() {
      return _ref4.apply(this, arguments);
    };
  }();

  var fetchData = /*#__PURE__*/function () {
    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
      var params,
          addactivitiesData,
          _args5 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              params = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {};
              setLoading(true);
              _context5.next = 4;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_5__["apiInstance"])().get('organization/dashborad-all?results=' + params.pagination.pageSize + '&page=' + params.pagination.current + "&search=" + (params.search ? params.search : "") + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters);

            case 4:
              addactivitiesData = _context5.sent;
              setData(addactivitiesData.data.results);
              setPagination(_objectSpread(_objectSpread({}, params.pagination), {}, {
                total: addactivitiesData.data.totalCount // 200 is mock data, you should read it from server
                // total: data.totalCount,

              })); // setTotalUser(addactivitiesData.data.totalCount)

              setLoading(false);

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function fetchData() {
      return _ref5.apply(this, arguments);
    };
  }();

  var fetchWillExprired = /*#__PURE__*/function () {
    var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6() {
      var params,
          myCurrentDate,
          _today,
          _willExpried,
          willExpriedDateString,
          _Data,
          _args6 = arguments;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              params = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {};
              myCurrentDate = new Date();
              _today = moment__WEBPACK_IMPORTED_MODULE_8___default()().format('YYYY-MM-DD'); // var _today = myCurrentDate;

              console.log("_today");
              console.log(_today);
              _willExpried = Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_5__["addDays"])(_today, 31);
              console.log("_willExpried");
              _context6.next = 9;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_5__["formatDateWithoutTime"])(_willExpried);

            case 9:
              willExpriedDateString = _context6.sent;
              pagination.today = _today;
              pagination.willExpried = willExpriedDateString; // setExpried(_expried)

              setPagination({
                pageSize: pagination.pageSize,
                current: 1
              });
              _context6.next = 15;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_5__["apiInstance"])().get('organization/' + apiTxtWillExpried + '?results=' + params.pagination.pageSize + "&page=1&search=" + search + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters + "&today=" + params.pagination.today + "&willExpried=" + params.pagination.willExpried);

            case 15:
              _Data = _context6.sent;
              console.log("_Data fetchWillExprired");
              console.log(_Data);
              setTotalWillExpired(_Data.data.totalCount);

            case 19:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function fetchWillExprired() {
      return _ref6.apply(this, arguments);
    };
  }();

  var fetchWillExpriredData = /*#__PURE__*/function () {
    var _ref7 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7() {
      var params,
          myCurrentDate,
          _today,
          _willExpried,
          willExpriedDateString,
          _Data,
          _args7 = arguments;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              params = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {};
              myCurrentDate = new Date();
              _today = moment__WEBPACK_IMPORTED_MODULE_8___default()().format('YYYY-MM-DD'); // var _today = myCurrentDate;

              console.log("_today");
              console.log(_today);
              _willExpried = Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_5__["addDays"])(_today, 31);
              console.log("_willExpried");
              _context7.next = 9;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_5__["formatDateWithoutTime"])(_willExpried);

            case 9:
              willExpriedDateString = _context7.sent;
              params.pagination.today = _today;
              params.pagination.willExpried = willExpriedDateString; // setExpried(_expried)

              setPagination({
                pageSize: pagination.pageSize,
                current: 1
              });
              _context7.next = 15;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_5__["apiInstance"])().get('organization/' + apiTxtWillExpried + '?results=' + params.pagination.pageSize + "&page=" + params.pagination.current + "&search=" + (params.search ? params.search : "") + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters + "&today=" + params.pagination.today + "&willExpried=" + params.pagination.willExpried);

            case 15:
              _Data = _context7.sent;
              console.log("_Data fetchWillExprired");
              console.log(_Data);
              setData(_Data.data.results);
              setPagination(_objectSpread(_objectSpread({}, params.pagination), {}, {
                total: _Data.data.totalCount // 200 is mock data, you should read it from server
                // total: data.totalCount,

              })); // setTotalWillExpired(_Data.data.totalCount)

              setLoading(false);

            case 21:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function fetchWillExpriredData() {
      return _ref7.apply(this, arguments);
    };
  }();

  var fetchExprired = /*#__PURE__*/function () {
    var _ref8 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8() {
      var params,
          myCurrentDate,
          _today,
          _willExpried,
          willExpriedDateString,
          _Data,
          _args8 = arguments;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              params = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : {};
              myCurrentDate = new Date();
              _today = moment__WEBPACK_IMPORTED_MODULE_8___default()().format('YYYY-MM-DD'); // var _today = myCurrentDate;

              console.log("_today");
              console.log(_today);
              _willExpried = Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_5__["addDays"])(_today, 31);
              console.log("_willExpried");
              _context8.next = 9;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_5__["formatDateWithoutTime"])(_willExpried);

            case 9:
              willExpriedDateString = _context8.sent;
              params.pagination.today = _today;
              params.pagination.willExpried = willExpriedDateString; // setExpried(_expried)

              setPagination({
                pageSize: pagination.pageSize,
                current: 1
              });
              _context8.next = 15;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_5__["apiInstance"])().get('organization/dashborad-expried?results=' + params.pagination.pageSize + "&page=" + params.pagination.current + "&search=" + search + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters + "&today=" + params.pagination.today + "&willExpried=" + params.pagination.willExpried);

            case 15:
              _Data = _context8.sent;
              console.log("_Data fetchWillExprired");
              console.log(_Data);
              setTotalExpired(_Data.data.totalCount);

            case 19:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function fetchExprired() {
      return _ref8.apply(this, arguments);
    };
  }();

  var fetchExpriredData = /*#__PURE__*/function () {
    var _ref9 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee9() {
      var params,
          myCurrentDate,
          _today,
          _willExpried,
          willExpriedDateString,
          _Data,
          _args9 = arguments;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              params = _args9.length > 0 && _args9[0] !== undefined ? _args9[0] : {};
              myCurrentDate = new Date();
              _today = moment__WEBPACK_IMPORTED_MODULE_8___default()().format('YYYY-MM-DD'); // var _today = myCurrentDate;

              console.log("_today");
              console.log(_today);
              _willExpried = Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_5__["addDays"])(_today, 31);
              console.log("_willExpried");
              _context9.next = 9;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_5__["formatDateWithoutTime"])(_willExpried);

            case 9:
              willExpriedDateString = _context9.sent;
              params.pagination.today = _today;
              params.pagination.willExpried = willExpriedDateString; // setExpried(_expried)

              setPagination({
                pageSize: pagination.pageSize,
                current: 1
              });
              _context9.next = 15;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_5__["apiInstance"])().get('organization/dashborad-expried?results=' + params.pagination.pageSize + "&page=" + params.pagination.current + "&search=" + (params.search ? params.search : "") + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters + "&today=" + params.pagination.today + "&willExpried=" + params.pagination.willExpried);

            case 15:
              _Data = _context9.sent;
              console.log("_Data fetchWillExprired");
              console.log(_Data);
              setData(_Data.data.results);
              setPagination(_objectSpread(_objectSpread({}, params.pagination), {}, {
                total: _Data.data.totalCount // 200 is mock data, you should read it from server
                // total: data.totalCount,

              })); // setTotalExpired(_Data.data.totalCount)

              setLoading(false);

            case 21:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function fetchExpriredData() {
      return _ref9.apply(this, arguments);
    };
  }();

  var handleStatisticClick = function handleStatisticClick(value) {
    setSearch("");

    switch (value) {
      case "willExpried":
        setTextMenu("จำนวนผู้ใช้งานที่กำลังจะหมดอายุ");
        setApiTxt("dashborad-will-expried");
        fetchWillExpriredData({
          pagination: {
            pageSize: pagination.pageSize,
            current: 1
          }
        });
        break;

      case "expried":
        setTextMenu("จำนวนผู้ใช้งานที่หมดอายุ");
        setApiTxt("dashborad-expried");
        fetchExpriredData({
          pagination: {
            pageSize: pagination.pageSize,
            current: 1
          }
        });
        break;

      default:
        setTextMenu("จำนวนผู้ใช้งานทั้งหมด");
        setApiTxt("dashborad-all");
        fetchData({
          pagination: {
            pageSize: pagination.pageSize,
            current: 1
          }
        });
        break;
    }
  };

  var promiseState = /*#__PURE__*/function () {
    var _ref10 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee10(value) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              return _context10.abrupt("return", new Promise(function (resolve) {
                return setApiTxt(value, resolve);
              }));

            case 1:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function promiseState(_x3) {
      return _ref10.apply(this, arguments);
    };
  }();

  var onChangeSearch = function onChangeSearch(value) {
    console.log(value);
    setSearch(value.target.value);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    span: 4,
    className: "lg:col-3 md:col-12 p-4 rounded-lg text-white bg-green-600 mr-4 mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 9
    }
  }, __jsx("a", {
    onClick: function onClick() {
      handleStatisticClick('all');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 11
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Statistic"], {
    title: "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
    value: totalUser,
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LikeOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 501,
        columnNumber: 130
      }
    }),
    valueStyle: {
      color: "white",
      fontSize: "2rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 63
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    span: 4,
    className: "lg:col-3 md:col-12 p-4 rounded-lg text-white bg-yellow-600 mr-4 mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 9
    }
  }, __jsx("a", {
    onClick: function onClick() {
      handleStatisticClick('willExpried');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Statistic"], {
    title: "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E25\u0E31\u0E07\u0E08\u0E30\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38",
    value: totalWillExpired,
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LikeOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 508,
        columnNumber: 154
      }
    }),
    valueStyle: {
      color: "white",
      fontSize: "2rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 70
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    span: 4,
    className: "lg:col-3 md:col-12 p-4 rounded-lg text-white bg-red-600 mr-4 mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 9
    }
  }, __jsx("a", {
    onClick: function onClick() {
      handleStatisticClick('expried');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 11
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Statistic"], {
    title: "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38",
    value: totalExpired,
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LikeOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 515,
        columnNumber: 140
      }
    }),
    valueStyle: {
      color: "white",
      fontSize: "2rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 67
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    className: "w-full mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    className: " pb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    className: "items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 17
    }
  }, __jsx(Title, {
    level: 2,
    className: "mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 19
    }
  }, txtMenu))), __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    className: "flex justify-end justify-items-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532,
      columnNumber: 15
    }
  }, __jsx(Search, {
    placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",
    value: search,
    onChange: function onChange(value) {
      return onChangeSearch(value);
    },
    onSearch: onSearch,
    enterButton: true,
    allowClear: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 17
    }
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    className: "w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    span: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Table"], {
    className: "w-full",
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
      lineNumber: 546,
      columnNumber: 13
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Modal"], {
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
      lineNumber: 558,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570,
      columnNumber: 11
    }
  }, "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A \"", dataDelete ? dataDelete.organization_name : "", "\" \u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?  "))));
}
/* getServerSideProps */

_s(Home, "WUNWNIbDKCj7wPwOMzp2CwCsl2c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9kYXNoYm9yYWQvaW5kZXgtc3VwZXItYWRtaW4uanMiXSwibmFtZXMiOlsiU2VhcmNoIiwiSW5wdXQiLCJUZXh0IiwiVHlwb2dyYXBoeSIsIlRpdGxlIiwiSG9tZSIsInByb3BzIiwib3JpZ2luIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsImN1cnJlbnQiLCJwYWdlU2l6ZSIsInBhZ2luYXRpb24iLCJzZXRQYWdpbmF0aW9uIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZWFyY2giLCJzZXRTZWFyY2giLCJmaWx0ZXJzIiwic2V0RmlsdGVycyIsInRvdGFsVXNlciIsInNldFRvdGFsVXNlciIsInRvdGFsV2lsbEV4cGlyZWQiLCJzZXRUb3RhbFdpbGxFeHBpcmVkIiwidG90YWxFeHBpcmVkIiwic2V0VG90YWxFeHBpcmVkIiwiYXBpVHh0Iiwic2V0QXBpVHh0IiwidG9kYXkiLCJzZXRUb2RheSIsIndpbGxFeHByaWVkIiwic2V0V2lsbEV4cHJpZWQiLCJleHByaWVkIiwic2V0RXhwcmllZCIsImFwaVR4dFdpbGxFeHByaWVkIiwic2V0QXBpVHh0V2lsbEV4cHJpZWQiLCJ0eHRNZW51Iiwic2V0VGV4dE1lbnUiLCJkYXRhRGVsZXRlIiwic2V0RGF0YURlbGV0ZSIsInZpc2libGVNb2RhbERlbGV0ZSIsInNldFZpc2libGVNb2RhbERlbGV0ZSIsInVzZUVmZmVjdCIsIl9maWx0ZXJzIiwiZmV0Y2giLCJmZXRjaFdpbGxFeHByaXJlZCIsImZldGNoRXhwcmlyZWQiLCJzaG93TW9kYWwiLCJjb25zb2xlIiwibG9nIiwib25EZWxldGUiLCJhcGlJbnN0YW5jZSIsImludHJvX2lkIiwicmVnaXN0ZXJEYXRhIiwic3RhdHVzIiwib3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MiLCJvcGVuTm90aWZpY2F0aW9uRmFpbCIsIm1lc3NhZ2UiLCJjb2x1bW5zIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJzb3J0ZXIiLCJrZXkiLCJyZW5kZXIiLCJjb252ZXJ0RGF0ZXRvVGhhaURhdGUiLCJjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lIiwiZGF0ZV9jcmVhdGVkIiwiZGF0ZV9leHBpcmVkIiwiYnl0ZXNUb1NpemUiLCJzaXplX3VzZWQiLCJwYWNrYWdlcyIsIm5hbWVfcGFja2FnZSIsInRleHQiLCJ2YWx1ZSIsImlzX3VzZSIsImdvdG9QYWdlIiwib3JnYW5pemF0aW9uX2lkIiwiaWQiLCJSb3V0ZXIiLCJwdXNoIiwidXNlZFNpemUiLCJieXRlc1RvTUIiLCJwYXJzZUludCIsIl9zaXplIiwiaGFuZGxlVGFibGVDaGFuZ2UiLCJmZXRjaFdpbGxFeHByaXJlZERhdGEiLCJzb3J0RmllbGQiLCJjb2x1bW5LZXkiLCJzb3J0T3JkZXIiLCJvcmRlciIsImZldGNoRXhwcmlyZWREYXRhIiwiZmV0Y2hEYXRhIiwib25TZWFyY2giLCJfc2VhcmNoIiwiX3RvZGF5IiwibW9tZW50IiwiZm9ybWF0IiwiX3dpbGxFeHByaWVkIiwiYWRkRGF5cyIsImZvcm1hdERhdGVXaXRob3V0VGltZSIsIndpbGxFeHByaWVkRGF0ZVN0cmluZyIsInBhcmFtcyIsImdldCIsImFkZGFjdGl2aXRpZXNEYXRhIiwicmVzdWx0cyIsInRvdGFsIiwidG90YWxDb3VudCIsIm15Q3VycmVudERhdGUiLCJEYXRlIiwiX0RhdGEiLCJoYW5kbGVTdGF0aXN0aWNDbGljayIsInByb21pc2VTdGF0ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwib25DaGFuZ2VTZWFyY2giLCJ0YXJnZXQiLCJjb2xvciIsImZvbnRTaXplIiwicmVjb3JkIiwiaGlkZU1vZGFsIiwib3JnYW5pemF0aW9uX25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBO0FBRUE7QUFFQTtBQUNBO0FBVUE7QUFFQSxJQUFRQSxNQUFSLEdBQW1CQywwQ0FBbkIsQ0FBUUQsTUFBUjtBQUNBLElBQVFFLElBQVIsR0FBd0JD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LENBQUMxQyxlQUFYO0FBQUEsS0FIaEI7QUFJRSxjQUFVLEVBQUVwRSxJQUpkO0FBS0UsY0FBVSxFQUFFSSxVQUxkO0FBTUUsV0FBTyxFQUFFRSxPQU5YO0FBT0UsWUFBUSxFQUFFc0UsaUJBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0F0QkYsRUFvQ0UsTUFBQywwQ0FBRDtBQUNFLFNBQUssRUFBQyx5SkFEUjtBQUVFLFdBQU8sRUFBRTVDLGtCQUZYO0FBR0UsUUFBSSxFQUFFVSxRQUhSO0FBSUUsWUFBUSxFQUFFcUUsU0FKWjtBQUtFLFVBQU0sRUFBQyxjQUxUO0FBTUUsY0FBVSxFQUFDLHNDQU5iO0FBT0UsaUJBQWEsRUFBRTtBQUNiLGNBQVEsU0FESztBQUViLGdCQUFVO0FBRkcsS0FQakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0ZBQWtCakYsVUFBVSxHQUFHQSxVQUFVLENBQUNrRixpQkFBZCxHQUFrQyxFQUE5RCxxREFaRixDQXBDRixDQXpCRixDQURGO0FBa0ZEO0FBQ0Q7O0dBM2lCd0JwSCxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pblxcZGFzaGJvcmFkLmpzLjlhNjViYjg4Y2M1MzYwZTE0N2Y0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuLyogdXRpbHMgKi9cclxuaW1wb3J0IHsgYWJzb2x1dGVVcmwsIGFkZERheXMsIGFwaUluc3RhbmNlLCBieXRlc1RvTUIsIGJ5dGVzVG9TaXplLCBjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lLCBjb252ZXJ0RGF0ZXRvVGhhaURhdGUsIGZvcm1hdERhdGVXaXRob3V0VGltZSB9IGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvdXRpbHMnO1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IExpa2VPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgQ29sLFxyXG4gIElucHV0LFxyXG4gIE1vZGFsLFxyXG4gIFJvdyxcclxuICBTdGF0aXN0aWMsXHJcbiAgVGFibGUsXHJcbiAgVHlwb2dyYXBoeVxyXG59IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCB7IFNlYXJjaCB9ID0gSW5wdXQ7XHJcbmNvbnN0IHsgVGV4dCwgVGl0bGUgfSA9IFR5cG9ncmFwaHk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG4gIGNvbnN0IHsgb3JpZ2luIH0gPSBwcm9wcztcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbcGFnaW5hdGlvbiwgc2V0UGFnaW5hdGlvbl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBjdXJyZW50OiAxLFxyXG4gICAgcGFnZVNpemU6IDEwLFxyXG4gIH0pXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbdG90YWxVc2VyLCBzZXRUb3RhbFVzZXJdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbdG90YWxXaWxsRXhwaXJlZCwgc2V0VG90YWxXaWxsRXhwaXJlZF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFt0b3RhbEV4cGlyZWQsIHNldFRvdGFsRXhwaXJlZF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFthcGlUeHQsIHNldEFwaVR4dF0gPSB1c2VTdGF0ZSgnZGFzaGJvcmFkLWFsbCcpXHJcbiAgY29uc3QgW3RvZGF5LCBzZXRUb2RheV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFt3aWxsRXhwcmllZCwgc2V0V2lsbEV4cHJpZWRdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbZXhwcmllZCwgc2V0RXhwcmllZF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFthcGlUeHRXaWxsRXhwcmllZCwgc2V0QXBpVHh0V2lsbEV4cHJpZWRdID0gdXNlU3RhdGUoJ2Rhc2hib3JhZC13aWxsLWV4cHJpZWQnKVxyXG4gIGNvbnN0IFt0eHRNZW51LCBzZXRUZXh0TWVudV0gPSB1c2VTdGF0ZSgn4Lic4Li54LmJ4LmD4LiK4LmJ4LiX4Lix4LmJ4LiH4Lir4Lih4LiUJylcclxuICBjb25zdCBbZGF0YURlbGV0ZSwgc2V0RGF0YURlbGV0ZV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFt2aXNpYmxlTW9kYWxEZWxldGUsIHNldFZpc2libGVNb2RhbERlbGV0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHZhciBfZmlsdGVycyA9IFtdXHJcbiAgICBwYWdpbmF0aW9uLmZpbHRlcnMgPSBfZmlsdGVyc1xyXG4gICAgZmV0Y2goeyBwYWdpbmF0aW9uIH0pO1xyXG4gICAgZmV0Y2hXaWxsRXhwcmlyZWQoeyBwYWdpbmF0aW9uIH0pXHJcbiAgICBmZXRjaEV4cHJpcmVkKHsgcGFnaW5hdGlvbiB9KVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBzaG93TW9kYWwgPSAoZGF0YSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2RhdGEgZGVsZXRkJylcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBzZXREYXRhRGVsZXRlKGRhdGEpXHJcbiAgICBzZXRWaXNpYmxlTW9kYWxEZWxldGUodHJ1ZSlcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IG9uRGVsZXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ0RFTEVURScpXHJcbiAgICAvLyBjb25zdCBkYXRhID0ge1xyXG4gICAgLy8gICAnb3JnYW5pemF0aW9uX25hbWUnOiB2YWx1ZS5vcmdhbml6YXRpb25fbmFtZSxcclxuICAgIC8vIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBjb25zdCByZWdpc3RlckRhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmRlbGV0ZSgnYWRtaW4vbWFuYWdlbWVudC9sYW5kaW5nLXBhZ2UvJyArIGRhdGFEZWxldGUuaW50cm9faWQsIHt9KTtcclxuICAgIGlmIChyZWdpc3RlckRhdGEuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgIG9wZW5Ob3RpZmljYXRpb25TdWNjZXNzKClcclxuICAgICAgLy8gZmV0Y2hPcmdhbml6YXRpb25EYXRhKCk7XHJcbiAgICAgIHNldFZpc2libGVNb2RhbERlbGV0ZShmYWxzZSlcclxuICAgICAgZmV0Y2goeyBwYWdpbmF0aW9uIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvbkZhaWwocmVnaXN0ZXJEYXRhLmRhdGEubWVzc2FnZSlcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+C4p+C4seC4meC4l+C4teC5iOC4quC4oeC4seC4hOC4oycsXHJcbiAgICAgIGRhdGFJbmRleDogJycsXHJcbiAgICAgIHNvcnRlcjogdHJ1ZSxcclxuICAgICAga2V5OiAnZGF0ZV9jcmVhdGVkJyxcclxuICAgICAgcmVuZGVyOiAoZGF0YSkgPT4gPD5cclxuICAgICAgICA8c3BhbiA+IHtjb252ZXJ0RGF0ZXRvVGhhaURhdGUoY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZShkYXRhLmRhdGVfY3JlYXRlZCkpfSA8L3NwYW4+XHJcbiAgICAgIDwvPixcclxuICAgICAgLy8gcmVuZGVyOiBuYW1lID0+IGAke25hbWUuZmlyc3R9ICR7bmFtZS5sYXN0fWAsXHJcbiAgICAgIC8vIHdpZHRoOiAnMjAlJyxcclxuICAgICAgLy8gZGVmYXVsdFNvcnRPcmRlcjogJ2Rlc2NlbmQnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfguKfguLHguJnguJfguLXguYjguKvguKHguJTguK3guLLguKLguLgnLFxyXG4gICAgICBkYXRhSW5kZXg6ICcnLFxyXG4gICAgICBzb3J0ZXI6IHRydWUsXHJcbiAgICAgIGtleTogJ2RhdGVfZXhwaXJlZCcsXHJcbiAgICAgIHJlbmRlcjogKGRhdGEpID0+IDw+XHJcbiAgICAgICAgPHNwYW4gPiB7Y29udmVydERhdGV0b1RoYWlEYXRlKGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUoZGF0YS5kYXRlX2V4cGlyZWQpKX0gPC9zcGFuPlxyXG4gICAgICA8Lz4sXHJcbiAgICAgIC8vIHJlbmRlcjogbmFtZSA9PiBgJHtuYW1lLmZpcnN0fSAke25hbWUubGFzdH1gLFxyXG4gICAgICAvLyB3aWR0aDogJzIwJScsXHJcbiAgICAgIC8vIGRlZmF1bHRTb3J0T3JkZXI6ICdkZXNjZW5kJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn4LiK4Li34LmI4Lit4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZJyxcclxuICAgICAgZGF0YUluZGV4OiAnb3JnYW5pemF0aW9uX25hbWUnLFxyXG4gICAgICBzb3J0ZXI6IHRydWUsXHJcbiAgICAgIC8vIHJlbmRlcjogbmFtZSA9PiBgJHtuYW1lLmZpcnN0fSAke25hbWUubGFzdH1gLFxyXG4gICAgICAvLyB3aWR0aDogJzIwJScsXHJcbiAgICAgIC8vIGRlZmF1bHRTb3J0T3JkZXI6ICdkZXNjZW5kJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn4LmD4LiK4LmJ4Lie4Li34LmJ4LiZ4LiX4Li14LmIJyxcclxuICAgICAgZGF0YUluZGV4OiAnJyxcclxuICAgICAgc29ydGVyOiB0cnVlLFxyXG4gICAgICBrZXk6ICdzaXplX3VzZWQnLFxyXG4gICAgICByZW5kZXI6IChkYXRhKSA9PiA8PlxyXG4gICAgICAgIDxzcGFuID4ge2J5dGVzVG9TaXplKGRhdGEuc2l6ZV91c2VkKX0gIDwvc3Bhbj5cclxuICAgICAgPC8+XHJcbiAgICAgIC8vIHJlbmRlcjogbmFtZSA9PiBgJHtuYW1lLmZpcnN0fSAke25hbWUubGFzdH1gLFxyXG4gICAgICAvLyB3aWR0aDogJzIwJScsXHJcbiAgICAgIC8vIGRlZmF1bHRTb3J0T3JkZXI6ICdkZXNjZW5kJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAncGFja2FnZScsXHJcbiAgICAgIGRhdGFJbmRleDogJycsXHJcbiAgICAgIGtleTogJ3BhY2thZ2UnLFxyXG4gICAgICBzb3J0ZXI6IHRydWUsXHJcbiAgICAgIHJlbmRlcjogKGRhdGEpID0+IDw+XHJcbiAgICAgICAgPHNwYW4gPiB7ZGF0YS5wYWNrYWdlcy5uYW1lX3BhY2thZ2V9IDwvc3Bhbj5cclxuICAgICAgPC8+LFxyXG4gICAgICBmaWx0ZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ0ZyZWUgUGFja2FnZScsXHJcbiAgICAgICAgICB2YWx1ZTogMSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdDb25uZWN0IFBhY2thZ2UnLFxyXG4gICAgICAgICAgdmFsdWU6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnU3RhbmRhcmQgUGFja2FnZScsXHJcbiAgICAgICAgICB2YWx1ZTogMyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdQcmVtaXVtIFBhY2thZ2UnLFxyXG4gICAgICAgICAgdmFsdWU6IDQsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgLy8gcmVuZGVyOiBuYW1lID0+IGAke25hbWUuZmlyc3R9ICR7bmFtZS5sYXN0fWAsXHJcbiAgICAgIC8vIHdpZHRoOiAnMjAlJyxcclxuICAgICAgLy8gZGVmYXVsdFNvcnRPcmRlcjogJ2Rlc2NlbmQnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfguKrguJbguLLguJnguLAnLFxyXG4gICAgICBkYXRhSW5kZXg6ICcnLFxyXG4gICAgICBrZXk6ICdpc191c2UnLFxyXG4gICAgICBzb3J0ZXI6IHRydWUsXHJcbiAgICAgIHJlbmRlcjogKGRhdGEpID0+IDw+XHJcbiAgICAgICAgPHNwYW4gPiB7ZGF0YS5pc191c2UgPT0gMSA/IFwi4LmD4LiK4LmJ4LiH4Liy4LiZXCIgOiBcIuC5hOC4oeC5iOC5g+C4iuC5ieC4h+C4suC4mVwifSA8L3NwYW4+XHJcbiAgICAgIDwvPixcclxuICAgICAgLy8gcmVuZGVyOiBuYW1lID0+IGAke25hbWUuZmlyc3R9ICR7bmFtZS5sYXN0fWAsXHJcbiAgICAgIC8vIHdpZHRoOiAnMjAlJyxcclxuICAgICAgLy8gZGVmYXVsdFNvcnRPcmRlcjogJ2Rlc2NlbmQnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICBkYXRhSW5kZXg6ICcnLFxyXG4gICAgICBrZXk6ICd4JyxcclxuICAgICAgcmVuZGVyOiAoZGF0YSkgPT4gPD5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2l6ZT17XCJkZWZhdWx0XCJ9IG9uQ2xpY2s9eygpID0+IGdvdG9QYWdlKGRhdGEub3JnYW5pemF0aW9uX2lkKX0gPiDguYHguIHguYnguYTguIIgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtbC0xXCIgdHlwZT1cImRhbmdlclwiIG9uQ2xpY2s9eygpID0+IHNob3dNb2RhbChkYXRhKX0gc2l6ZT17XCJkZWZhdWx0XCJ9ID4g4Lil4LiaIDwvQnV0dG9uPlxyXG4gICAgICA8Lz4sXHJcbiAgICB9LFxyXG4gICAgLy8ge1xyXG4gICAgLy8gICB0aXRsZTogJ0dlbmRlcicsXHJcbiAgICAvLyAgIGRhdGFJbmRleDogJ2dlbmRlcicsXHJcbiAgICAvLyAgIC8vIGZpbHRlcnM6IFtcclxuICAgIC8vICAgLy8gICB7IHRleHQ6ICdNYWxlJywgdmFsdWU6ICdtYWxlJyB9LFxyXG4gICAgLy8gICAvLyAgIHsgdGV4dDogJ0ZlbWFsZScsIHZhbHVlOiAnZmVtYWxlJyB9LFxyXG4gICAgLy8gICAvLyBdLFxyXG4gICAgLy8gICB3aWR0aDogJzIwJScsXHJcbiAgICAvLyB9LFxyXG4gICAgLy8ge1xyXG4gICAgLy8gICB0aXRsZTogJ0VtYWlsJyxcclxuICAgIC8vICAgZGF0YUluZGV4OiAnZW1haWwnLFxyXG4gICAgLy8gfSxcclxuICBdO1xyXG4gIGNvbnN0IGdvdG9QYWdlID0gKGlkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpZClcclxuICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC1vcmdhbml6YXRpb24vb3JnYW5pemF0aW9uLycgKyBpZCk7XHJcblxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVzZWRTaXplID0gYXN5bmMgKHNpemVfdXNlZCkgPT4ge1xyXG4gICAgdmFyIF9zaXplID0gYXdhaXQgYnl0ZXNUb01CKHBhcnNlSW50KHNpemVfdXNlZCkpXHJcblxyXG4gICAgcmV0dXJuIF9zaXplXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVUYWJsZUNoYW5nZSA9IChwYWdpbmF0aW9uLCBmaWx0ZXJzLCBzb3J0ZXIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHNvcnRlcilcclxuICAgIHNldFBhZ2luYXRpb24oe1xyXG4gICAgICBwYWdlU2l6ZTogcGFnaW5hdGlvbi5wYWdlU2l6ZSxcclxuICAgICAgY3VycmVudDogcGFnaW5hdGlvbi5jdXJyZW50XHJcbiAgICB9KVxyXG4gICAgc2V0RmlsdGVycyhmaWx0ZXJzLnBhY2thZ2UpXHJcblxyXG4gICAgc3dpdGNoIChhcGlUeHQpIHtcclxuICAgICAgY2FzZSBcImRhc2hib3JhZC13aWxsLWV4cHJpZWRcIjpcclxuICAgICAgICBmZXRjaFdpbGxFeHByaXJlZERhdGEoe1xyXG4gICAgICAgICAgc29ydEZpZWxkOiBzb3J0ZXIuY29sdW1uS2V5LFxyXG4gICAgICAgICAgc29ydE9yZGVyOiBzb3J0ZXIub3JkZXIsXHJcbiAgICAgICAgICBwYWdpbmF0aW9uLFxyXG4gICAgICAgICAgZmlsdGVyczogZmlsdGVycy5wYWNrYWdlLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJkYXNoYm9yYWQtZXhwcmllZFwiOlxyXG4gICAgICAgIGZldGNoRXhwcmlyZWREYXRhKHtcclxuICAgICAgICAgIHNvcnRGaWVsZDogc29ydGVyLmNvbHVtbktleSxcclxuICAgICAgICAgIHNvcnRPcmRlcjogc29ydGVyLm9yZGVyLFxyXG4gICAgICAgICAgcGFnaW5hdGlvbixcclxuICAgICAgICAgIGZpbHRlcnM6IGZpbHRlcnMucGFja2FnZSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGZldGNoRGF0YSh7XHJcbiAgICAgICAgICBzb3J0RmllbGQ6IHNvcnRlci5jb2x1bW5LZXksXHJcbiAgICAgICAgICBzb3J0T3JkZXI6IHNvcnRlci5vcmRlcixcclxuICAgICAgICAgIHBhZ2luYXRpb24sXHJcbiAgICAgICAgICBmaWx0ZXJzOiBmaWx0ZXJzLnBhY2thZ2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uU2VhcmNoID0gYXN5bmMgKF9zZWFyY2gpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIHNldFNlYXJjaChfc2VhcmNoKVxyXG4gICAgc2V0UGFnaW5hdGlvbih7XHJcbiAgICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICBjdXJyZW50OiAxXHJcbiAgICB9KVxyXG4gICAgdmFyIF90b2RheSA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gICAgdmFyIF93aWxsRXhwcmllZCA9IGFkZERheXMoX3RvZGF5LCAzMSk7XHJcbiAgICB2YXIgd2lsbEV4cHJpZWREYXRlU3RyaW5nID0gYXdhaXQgZm9ybWF0RGF0ZVdpdGhvdXRUaW1lKF93aWxsRXhwcmllZClcclxuXHJcbiAgICBzd2l0Y2ggKGFwaVR4dCkge1xyXG5cclxuICAgICAgY2FzZSBcImRhc2hib3JhZC13aWxsLWV4cHJpZWRcIjpcclxuICAgICAgICBmZXRjaFdpbGxFeHByaXJlZERhdGEoe1xyXG4gICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBwYWdlU2l6ZTogcGFnaW5hdGlvbi5wYWdlU2l6ZSxcclxuICAgICAgICAgICAgY3VycmVudDogMVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNlYXJjaDogX3NlYXJjaFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiZGFzaGJvcmFkLWV4cHJpZWRcIjpcclxuICAgICAgICBmZXRjaEV4cHJpcmVkRGF0YSh7XHJcbiAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICAgICAgICBjdXJyZW50OiAxXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2VhcmNoOiBfc2VhcmNoXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwiZGFzaGJvcmFkLWFsbFwiOlxyXG4gICAgICAgIGZldGNoRGF0YSh7XHJcbiAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICAgICAgICBjdXJyZW50OiAxXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2VhcmNoOiBfc2VhcmNoXHJcbiAgICAgICAgfSlcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICB9XHJcbiAgICAvLyBjb25zdCBhZGRhY3Rpdml0aWVzRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgLy8gICAnb3JnYW5pemF0aW9uLycgKyBhcGlUeHQgKyAnP3Jlc3VsdHM9JyArIHBhZ2luYXRpb24ucGFnZVNpemUgKyAnJnBhZ2U9MSZzZWFyY2g9JyArIF9zZWFyY2ggKyBcIiZmaWx0ZXJzPVwiICsgZmlsdGVyc1xyXG4gICAgLy8gKTtcclxuXHJcbiAgICAvLyBzZXREYXRhKGFkZGFjdGl2aXRpZXNEYXRhLmRhdGEucmVzdWx0cylcclxuICAgIC8vIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgfVxyXG4gIGNvbnN0IGZldGNoID0gYXN5bmMgKHBhcmFtcyA9IHt9KSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBjb25zdCBhZGRhY3Rpdml0aWVzRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAnb3JnYW5pemF0aW9uLycgKyBhcGlUeHQgKyAnP3Jlc3VsdHM9JyArIHBhcmFtcy5wYWdpbmF0aW9uLnBhZ2VTaXplICsgJyZwYWdlPScgKyBwYXJhbXMucGFnaW5hdGlvbi5jdXJyZW50ICsgXCImc2VhcmNoPVwiICsgc2VhcmNoICsgXCImc29ydEZpZWxkPVwiICsgcGFyYW1zLnNvcnRGaWVsZCArIFwiJnNvcnRPcmRlcj1cIiArIHBhcmFtcy5zb3J0T3JkZXIgKyBcIiZmaWx0ZXJzPVwiICsgcGFyYW1zLmZpbHRlcnNcclxuICAgICk7XHJcblxyXG4gICAgc2V0RGF0YShhZGRhY3Rpdml0aWVzRGF0YS5kYXRhLnJlc3VsdHMpXHJcbiAgICBzZXRQYWdpbmF0aW9uKHtcclxuICAgICAgLi4ucGFyYW1zLnBhZ2luYXRpb24sXHJcbiAgICAgIHRvdGFsOiBhZGRhY3Rpdml0aWVzRGF0YS5kYXRhLnRvdGFsQ291bnQsXHJcbiAgICAgIC8vIDIwMCBpcyBtb2NrIGRhdGEsIHlvdSBzaG91bGQgcmVhZCBpdCBmcm9tIHNlcnZlclxyXG4gICAgICAvLyB0b3RhbDogZGF0YS50b3RhbENvdW50LFxyXG4gICAgfSlcclxuICAgIHNldFRvdGFsVXNlcihhZGRhY3Rpdml0aWVzRGF0YS5kYXRhLnRvdGFsQ291bnQpXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jIChwYXJhbXMgPSB7fSkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgY29uc3QgYWRkYWN0aXZpdGllc0RhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ29yZ2FuaXphdGlvbi9kYXNoYm9yYWQtYWxsP3Jlc3VsdHM9JyArIHBhcmFtcy5wYWdpbmF0aW9uLnBhZ2VTaXplICsgJyZwYWdlPScgKyBwYXJhbXMucGFnaW5hdGlvbi5jdXJyZW50ICsgXCImc2VhcmNoPVwiICsgKHBhcmFtcy5zZWFyY2ggPyBwYXJhbXMuc2VhcmNoIDogXCJcIikgKyBcIiZzb3J0RmllbGQ9XCIgKyBwYXJhbXMuc29ydEZpZWxkICsgXCImc29ydE9yZGVyPVwiICsgcGFyYW1zLnNvcnRPcmRlciArIFwiJmZpbHRlcnM9XCIgKyBwYXJhbXMuZmlsdGVyc1xyXG4gICAgKTtcclxuXHJcbiAgICBzZXREYXRhKGFkZGFjdGl2aXRpZXNEYXRhLmRhdGEucmVzdWx0cylcclxuICAgIHNldFBhZ2luYXRpb24oe1xyXG4gICAgICAuLi5wYXJhbXMucGFnaW5hdGlvbixcclxuICAgICAgdG90YWw6IGFkZGFjdGl2aXRpZXNEYXRhLmRhdGEudG90YWxDb3VudCxcclxuICAgICAgLy8gMjAwIGlzIG1vY2sgZGF0YSwgeW91IHNob3VsZCByZWFkIGl0IGZyb20gc2VydmVyXHJcbiAgICAgIC8vIHRvdGFsOiBkYXRhLnRvdGFsQ291bnQsXHJcbiAgICB9KVxyXG4gICAgLy8gc2V0VG90YWxVc2VyKGFkZGFjdGl2aXRpZXNEYXRhLmRhdGEudG90YWxDb3VudClcclxuICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hXaWxsRXhwcmlyZWQgPSBhc3luYyAocGFyYW1zID0ge30pID0+IHtcclxuICAgIHZhciBteUN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgIHZhciBfdG9kYXkgPSBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuICAgIC8vIHZhciBfdG9kYXkgPSBteUN1cnJlbnREYXRlO1xyXG4gICAgY29uc29sZS5sb2coXCJfdG9kYXlcIilcclxuICAgIGNvbnNvbGUubG9nKF90b2RheSlcclxuICAgIHZhciBfd2lsbEV4cHJpZWQgPSBhZGREYXlzKF90b2RheSwgMzEpO1xyXG4gICAgY29uc29sZS5sb2coXCJfd2lsbEV4cHJpZWRcIilcclxuXHJcbiAgICB2YXIgd2lsbEV4cHJpZWREYXRlU3RyaW5nID0gYXdhaXQgZm9ybWF0RGF0ZVdpdGhvdXRUaW1lKF93aWxsRXhwcmllZClcclxuXHJcbiAgICBwYWdpbmF0aW9uLnRvZGF5ID0gX3RvZGF5XHJcbiAgICBwYWdpbmF0aW9uLndpbGxFeHByaWVkID0gd2lsbEV4cHJpZWREYXRlU3RyaW5nXHJcbiAgICAvLyBzZXRFeHByaWVkKF9leHByaWVkKVxyXG4gICAgc2V0UGFnaW5hdGlvbih7XHJcbiAgICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICBjdXJyZW50OiAxXHJcbiAgICB9KVxyXG4gICAgY29uc3QgX0RhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ29yZ2FuaXphdGlvbi8nICsgYXBpVHh0V2lsbEV4cHJpZWQgKyAnP3Jlc3VsdHM9JyArIHBhcmFtcy5wYWdpbmF0aW9uLnBhZ2VTaXplICsgXCImcGFnZT0xJnNlYXJjaD1cIiArIHNlYXJjaCArIFwiJnNvcnRGaWVsZD1cIiArIHBhcmFtcy5zb3J0RmllbGQgKyBcIiZzb3J0T3JkZXI9XCIgKyBwYXJhbXMuc29ydE9yZGVyICsgXCImZmlsdGVycz1cIiArIHBhcmFtcy5maWx0ZXJzICsgXCImdG9kYXk9XCIgKyBwYXJhbXMucGFnaW5hdGlvbi50b2RheSArIFwiJndpbGxFeHByaWVkPVwiICsgcGFyYW1zLnBhZ2luYXRpb24ud2lsbEV4cHJpZWRcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhcIl9EYXRhIGZldGNoV2lsbEV4cHJpcmVkXCIpXHJcbiAgICBjb25zb2xlLmxvZyhfRGF0YSlcclxuXHJcblxyXG4gICAgc2V0VG90YWxXaWxsRXhwaXJlZChfRGF0YS5kYXRhLnRvdGFsQ291bnQpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hXaWxsRXhwcmlyZWREYXRhID0gYXN5bmMgKHBhcmFtcyA9IHt9KSA9PiB7XHJcbiAgICB2YXIgbXlDdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgX3RvZGF5ID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcbiAgICAvLyB2YXIgX3RvZGF5ID0gbXlDdXJyZW50RGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKFwiX3RvZGF5XCIpXHJcbiAgICBjb25zb2xlLmxvZyhfdG9kYXkpXHJcbiAgICB2YXIgX3dpbGxFeHByaWVkID0gYWRkRGF5cyhfdG9kYXksIDMxKTtcclxuICAgIGNvbnNvbGUubG9nKFwiX3dpbGxFeHByaWVkXCIpXHJcblxyXG4gICAgdmFyIHdpbGxFeHByaWVkRGF0ZVN0cmluZyA9IGF3YWl0IGZvcm1hdERhdGVXaXRob3V0VGltZShfd2lsbEV4cHJpZWQpXHJcblxyXG4gICAgcGFyYW1zLnBhZ2luYXRpb24udG9kYXkgPSBfdG9kYXlcclxuICAgIHBhcmFtcy5wYWdpbmF0aW9uLndpbGxFeHByaWVkID0gd2lsbEV4cHJpZWREYXRlU3RyaW5nXHJcbiAgICAvLyBzZXRFeHByaWVkKF9leHByaWVkKVxyXG4gICAgc2V0UGFnaW5hdGlvbih7XHJcbiAgICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICBjdXJyZW50OiAxXHJcbiAgICB9KVxyXG4gICAgY29uc3QgX0RhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ29yZ2FuaXphdGlvbi8nICsgYXBpVHh0V2lsbEV4cHJpZWQgKyAnP3Jlc3VsdHM9JyArIHBhcmFtcy5wYWdpbmF0aW9uLnBhZ2VTaXplICsgXCImcGFnZT1cIiArIHBhcmFtcy5wYWdpbmF0aW9uLmN1cnJlbnQgKyBcIiZzZWFyY2g9XCIgKyAocGFyYW1zLnNlYXJjaCA/IHBhcmFtcy5zZWFyY2ggOiBcIlwiKSArIFwiJnNvcnRGaWVsZD1cIiArIHBhcmFtcy5zb3J0RmllbGQgKyBcIiZzb3J0T3JkZXI9XCIgKyBwYXJhbXMuc29ydE9yZGVyICsgXCImZmlsdGVycz1cIiArIHBhcmFtcy5maWx0ZXJzICsgXCImdG9kYXk9XCIgKyBwYXJhbXMucGFnaW5hdGlvbi50b2RheSArIFwiJndpbGxFeHByaWVkPVwiICsgcGFyYW1zLnBhZ2luYXRpb24ud2lsbEV4cHJpZWRcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhcIl9EYXRhIGZldGNoV2lsbEV4cHJpcmVkXCIpXHJcbiAgICBjb25zb2xlLmxvZyhfRGF0YSlcclxuXHJcbiAgICBzZXREYXRhKF9EYXRhLmRhdGEucmVzdWx0cylcclxuICAgIHNldFBhZ2luYXRpb24oe1xyXG4gICAgICAuLi5wYXJhbXMucGFnaW5hdGlvbixcclxuICAgICAgdG90YWw6IF9EYXRhLmRhdGEudG90YWxDb3VudCxcclxuICAgICAgLy8gMjAwIGlzIG1vY2sgZGF0YSwgeW91IHNob3VsZCByZWFkIGl0IGZyb20gc2VydmVyXHJcbiAgICAgIC8vIHRvdGFsOiBkYXRhLnRvdGFsQ291bnQsXHJcbiAgICB9KVxyXG4gICAgLy8gc2V0VG90YWxXaWxsRXhwaXJlZChfRGF0YS5kYXRhLnRvdGFsQ291bnQpXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoRXhwcmlyZWQgPSBhc3luYyAocGFyYW1zID0ge30pID0+IHtcclxuICAgIHZhciBteUN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgIHZhciBfdG9kYXkgPSBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuICAgIC8vIHZhciBfdG9kYXkgPSBteUN1cnJlbnREYXRlO1xyXG4gICAgY29uc29sZS5sb2coXCJfdG9kYXlcIilcclxuICAgIGNvbnNvbGUubG9nKF90b2RheSlcclxuICAgIHZhciBfd2lsbEV4cHJpZWQgPSBhZGREYXlzKF90b2RheSwgMzEpO1xyXG4gICAgY29uc29sZS5sb2coXCJfd2lsbEV4cHJpZWRcIilcclxuXHJcbiAgICB2YXIgd2lsbEV4cHJpZWREYXRlU3RyaW5nID0gYXdhaXQgZm9ybWF0RGF0ZVdpdGhvdXRUaW1lKF93aWxsRXhwcmllZClcclxuXHJcbiAgICBwYXJhbXMucGFnaW5hdGlvbi50b2RheSA9IF90b2RheVxyXG4gICAgcGFyYW1zLnBhZ2luYXRpb24ud2lsbEV4cHJpZWQgPSB3aWxsRXhwcmllZERhdGVTdHJpbmdcclxuICAgIC8vIHNldEV4cHJpZWQoX2V4cHJpZWQpXHJcbiAgICBzZXRQYWdpbmF0aW9uKHtcclxuICAgICAgcGFnZVNpemU6IHBhZ2luYXRpb24ucGFnZVNpemUsXHJcbiAgICAgIGN1cnJlbnQ6IDFcclxuICAgIH0pXHJcbiAgICBjb25zdCBfRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAnb3JnYW5pemF0aW9uL2Rhc2hib3JhZC1leHByaWVkP3Jlc3VsdHM9JyArIHBhcmFtcy5wYWdpbmF0aW9uLnBhZ2VTaXplICsgXCImcGFnZT1cIiArIHBhcmFtcy5wYWdpbmF0aW9uLmN1cnJlbnQgKyBcIiZzZWFyY2g9XCIgKyBzZWFyY2ggKyBcIiZzb3J0RmllbGQ9XCIgKyBwYXJhbXMuc29ydEZpZWxkICsgXCImc29ydE9yZGVyPVwiICsgcGFyYW1zLnNvcnRPcmRlciArIFwiJmZpbHRlcnM9XCIgKyBwYXJhbXMuZmlsdGVycyArIFwiJnRvZGF5PVwiICsgcGFyYW1zLnBhZ2luYXRpb24udG9kYXkgKyBcIiZ3aWxsRXhwcmllZD1cIiArIHBhcmFtcy5wYWdpbmF0aW9uLndpbGxFeHByaWVkXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coXCJfRGF0YSBmZXRjaFdpbGxFeHByaXJlZFwiKVxyXG4gICAgY29uc29sZS5sb2coX0RhdGEpXHJcblxyXG5cclxuICAgIHNldFRvdGFsRXhwaXJlZChfRGF0YS5kYXRhLnRvdGFsQ291bnQpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hFeHByaXJlZERhdGEgPSBhc3luYyAocGFyYW1zID0ge30pID0+IHtcclxuICAgIHZhciBteUN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgIHZhciBfdG9kYXkgPSBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuICAgIC8vIHZhciBfdG9kYXkgPSBteUN1cnJlbnREYXRlO1xyXG4gICAgY29uc29sZS5sb2coXCJfdG9kYXlcIilcclxuICAgIGNvbnNvbGUubG9nKF90b2RheSlcclxuICAgIHZhciBfd2lsbEV4cHJpZWQgPSBhZGREYXlzKF90b2RheSwgMzEpO1xyXG4gICAgY29uc29sZS5sb2coXCJfd2lsbEV4cHJpZWRcIilcclxuXHJcbiAgICB2YXIgd2lsbEV4cHJpZWREYXRlU3RyaW5nID0gYXdhaXQgZm9ybWF0RGF0ZVdpdGhvdXRUaW1lKF93aWxsRXhwcmllZClcclxuXHJcbiAgICBwYXJhbXMucGFnaW5hdGlvbi50b2RheSA9IF90b2RheVxyXG4gICAgcGFyYW1zLnBhZ2luYXRpb24ud2lsbEV4cHJpZWQgPSB3aWxsRXhwcmllZERhdGVTdHJpbmdcclxuICAgIC8vIHNldEV4cHJpZWQoX2V4cHJpZWQpXHJcbiAgICBzZXRQYWdpbmF0aW9uKHtcclxuICAgICAgcGFnZVNpemU6IHBhZ2luYXRpb24ucGFnZVNpemUsXHJcbiAgICAgIGN1cnJlbnQ6IDFcclxuICAgIH0pXHJcbiAgICBjb25zdCBfRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAnb3JnYW5pemF0aW9uL2Rhc2hib3JhZC1leHByaWVkP3Jlc3VsdHM9JyArIHBhcmFtcy5wYWdpbmF0aW9uLnBhZ2VTaXplICsgXCImcGFnZT1cIiArIHBhcmFtcy5wYWdpbmF0aW9uLmN1cnJlbnQgKyBcIiZzZWFyY2g9XCIgKyAocGFyYW1zLnNlYXJjaCA/IHBhcmFtcy5zZWFyY2ggOiBcIlwiKSArIFwiJnNvcnRGaWVsZD1cIiArIHBhcmFtcy5zb3J0RmllbGQgKyBcIiZzb3J0T3JkZXI9XCIgKyBwYXJhbXMuc29ydE9yZGVyICsgXCImZmlsdGVycz1cIiArIHBhcmFtcy5maWx0ZXJzICsgXCImdG9kYXk9XCIgKyBwYXJhbXMucGFnaW5hdGlvbi50b2RheSArIFwiJndpbGxFeHByaWVkPVwiICsgcGFyYW1zLnBhZ2luYXRpb24ud2lsbEV4cHJpZWRcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhcIl9EYXRhIGZldGNoV2lsbEV4cHJpcmVkXCIpXHJcbiAgICBjb25zb2xlLmxvZyhfRGF0YSlcclxuXHJcbiAgICBzZXREYXRhKF9EYXRhLmRhdGEucmVzdWx0cylcclxuICAgIHNldFBhZ2luYXRpb24oe1xyXG4gICAgICAuLi5wYXJhbXMucGFnaW5hdGlvbixcclxuICAgICAgdG90YWw6IF9EYXRhLmRhdGEudG90YWxDb3VudCxcclxuICAgICAgLy8gMjAwIGlzIG1vY2sgZGF0YSwgeW91IHNob3VsZCByZWFkIGl0IGZyb20gc2VydmVyXHJcbiAgICAgIC8vIHRvdGFsOiBkYXRhLnRvdGFsQ291bnQsXHJcbiAgICB9KVxyXG4gICAgLy8gc2V0VG90YWxFeHBpcmVkKF9EYXRhLmRhdGEudG90YWxDb3VudClcclxuICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3RhdGlzdGljQ2xpY2sgPSAodmFsdWUpID0+IHtcclxuICAgIHNldFNlYXJjaChcIlwiKVxyXG4gICAgc3dpdGNoICh2YWx1ZSkge1xyXG5cclxuICAgICAgY2FzZSBcIndpbGxFeHByaWVkXCI6XHJcbiAgICAgICAgc2V0VGV4dE1lbnUoXCLguIjguLPguJnguKfguJnguJzguLnguYnguYPguIrguYnguIfguLLguJnguJfguLXguYjguIHguLPguKXguLHguIfguIjguLDguKvguKHguJTguK3guLLguKLguLhcIilcclxuICAgICAgICBzZXRBcGlUeHQoXCJkYXNoYm9yYWQtd2lsbC1leHByaWVkXCIpXHJcblxyXG4gICAgICAgIGZldGNoV2lsbEV4cHJpcmVkRGF0YSh7XHJcbiAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICAgICAgICBjdXJyZW50OiAxXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJleHByaWVkXCI6XHJcbiAgICAgICAgc2V0VGV4dE1lbnUoXCLguIjguLPguJnguKfguJnguJzguLnguYnguYPguIrguYnguIfguLLguJnguJfguLXguYjguKvguKHguJTguK3guLLguKLguLhcIilcclxuICAgICAgICBzZXRBcGlUeHQoXCJkYXNoYm9yYWQtZXhwcmllZFwiKVxyXG4gICAgICAgIGZldGNoRXhwcmlyZWREYXRhKHtcclxuICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgcGFnZVNpemU6IHBhZ2luYXRpb24ucGFnZVNpemUsXHJcbiAgICAgICAgICAgIGN1cnJlbnQ6IDFcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgc2V0VGV4dE1lbnUoXCLguIjguLPguJnguKfguJnguJzguLnguYnguYPguIrguYnguIfguLLguJnguJfguLHguYnguIfguKvguKHguJRcIilcclxuICAgICAgICBzZXRBcGlUeHQoXCJkYXNoYm9yYWQtYWxsXCIpXHJcbiAgICAgICAgZmV0Y2hEYXRhKHtcclxuICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgcGFnZVNpemU6IHBhZ2luYXRpb24ucGFnZVNpemUsXHJcbiAgICAgICAgICAgIGN1cnJlbnQ6IDFcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIGNvbnN0IHByb21pc2VTdGF0ZSA9IGFzeW5jIHZhbHVlID0+XHJcbiAgICBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldEFwaVR4dCh2YWx1ZSwgcmVzb2x2ZSkpO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVNlYXJjaCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpXHJcbiAgICBzZXRTZWFyY2godmFsdWUudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFJvdz5cclxuXHJcbiAgICAgICAgPENvbCBzcGFuPXs0fSBjbGFzc05hbWU9XCJsZzpjb2wtMyBtZDpjb2wtMTIgcC00IHJvdW5kZWQtbGcgdGV4dC13aGl0ZSBiZy1ncmVlbi02MDAgbXItNCBtdC0yXCI+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZVN0YXRpc3RpY0NsaWNrKCdhbGwnKSB9fT4gPFN0YXRpc3RpYyB0aXRsZT1cIuC4iOC4s+C4meC4p+C4meC4nOC4ueC5ieC5g+C4iuC5ieC4h+C4suC4meC4l+C4seC5ieC4h+C4q+C4oeC4lFwiIHZhbHVlPXt0b3RhbFVzZXJ9IHByZWZpeD17PExpa2VPdXRsaW5lZCAvPn0gdmFsdWVTdHlsZT17e1xyXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIycmVtXCJcclxuICAgICAgICAgIH19IC8+PC9hPlxyXG4gICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICA8Q29sIHNwYW49ezR9IGNsYXNzTmFtZT1cImxnOmNvbC0zIG1kOmNvbC0xMiBwLTQgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIGJnLXllbGxvdy02MDAgbXItNCBtdC0yXCI+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZVN0YXRpc3RpY0NsaWNrKCd3aWxsRXhwcmllZCcpIH19PjxTdGF0aXN0aWMgdGl0bGU9XCLguIjguLPguJnguKfguJnguJzguLnguYnguYPguIrguYnguIfguLLguJnguJfguLXguYjguIHguLPguKXguLHguIfguIjguLDguKvguKHguJTguK3guLLguKLguLhcIiB2YWx1ZT17dG90YWxXaWxsRXhwaXJlZH0gcHJlZml4PXs8TGlrZU91dGxpbmVkIC8+fSB2YWx1ZVN0eWxlPXt7XHJcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjJyZW1cIlxyXG4gICAgICAgICAgfX0gLz48L2E+XHJcbiAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgIDxDb2wgc3Bhbj17NH0gY2xhc3NOYW1lPVwibGc6Y29sLTMgbWQ6Y29sLTEyIHAtNCByb3VuZGVkLWxnIHRleHQtd2hpdGUgYmctcmVkLTYwMCBtci00IG10LTJcIj5cclxuICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlU3RhdGlzdGljQ2xpY2soJ2V4cHJpZWQnKSB9fT4gPFN0YXRpc3RpYyB0aXRsZT1cIuC4iOC4s+C4meC4p+C4meC4nOC4ueC5ieC5g+C4iuC5ieC4h+C4suC4meC4l+C4teC5iOC4q+C4oeC4lOC4reC4suC4ouC4uFwiIHZhbHVlPXt0b3RhbEV4cGlyZWR9IHByZWZpeD17PExpa2VPdXRsaW5lZCAvPn0gdmFsdWVTdHlsZT17e1xyXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIycmVtXCJcclxuICAgICAgICAgIH19IC8+PC9hPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuXHJcbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwidy1mdWxsIG10LTRcIj5cclxuXHJcbiAgICAgICAgPFJvdyA+XHJcbiAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIiBwYi0xXCI+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxUaXRsZSBsZXZlbD17Mn0gY2xhc3NOYW1lPVwibXItMlwiPnt0eHRNZW51fTwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmQganVzdGlmeS1pdGVtcy1lbmRcIj5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2ggcGxhY2Vob2xkZXI9XCLguIHguKPguK3guIHguIrguLfguYjguK3guJzguLnguYnguYPguIrguYnguIfguLLguJlcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZVNlYXJjaCh2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgZW50ZXJCdXR0b25cclxuICAgICAgICAgICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgPENvbCBzcGFuPXsyNH0+XHJcbiAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgICByb3dLZXk9e3JlY29yZCA9PiByZWNvcmQub3JnYW5pemF0aW9uX2lkfVxyXG4gICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XHJcbiAgICAgICAgICAgICAgcGFnaW5hdGlvbj17cGFnaW5hdGlvbn1cclxuICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUYWJsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgIHRpdGxlPVwi4LiE4Li44LiT4LiV4LmJ4Lit4LiH4LiB4Liy4Lij4Lil4Lia4LiC4LmJ4Lit4Lih4Li54Lil4Lir4Lij4Li34Lit4LmE4Lih4LmIP1wiXHJcbiAgICAgICAgICB2aXNpYmxlPXt2aXNpYmxlTW9kYWxEZWxldGV9XHJcbiAgICAgICAgICBvbk9rPXtvbkRlbGV0ZX1cclxuICAgICAgICAgIG9uQ2FuY2VsPXtoaWRlTW9kYWx9XHJcbiAgICAgICAgICBva1RleHQ9XCLguKXguJpcIlxyXG4gICAgICAgICAgY2FuY2VsVGV4dD1cIuC4ouC4geC5gOC4peC4tOC4gVwiXHJcbiAgICAgICAgICBva0J1dHRvblByb3BzPXt7XHJcbiAgICAgICAgICAgICd0eXBlJzogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgICAgICdkYW5nZXInOiB0cnVlXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwPuC4hOC4uOC4k+C4leC5ieC4reC4h+C4geC4suC4o+C4peC4miBcIntkYXRhRGVsZXRlID8gZGF0YURlbGV0ZS5vcmdhbml6YXRpb25fbmFtZSA6IFwiXCJ9XCIg4Lir4Lij4Li34Lit4LmE4Lih4LmIPyAgPC9wPlxyXG5cclxuICAgICAgICA8L01vZGFsPlxyXG5cclxuXHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4vKiBnZXRTZXJ2ZXJTaWRlUHJvcHMgKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyByZXEgfSA9IGNvbnRleHQ7XHJcbiAgY29uc3QgeyBvcmlnaW4gfSA9IGFic29sdXRlVXJsKHJlcSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBvcmlnaW4sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==