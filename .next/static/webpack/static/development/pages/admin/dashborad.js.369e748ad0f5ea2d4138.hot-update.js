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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../middleware/utils */ "./middleware/utils.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);




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
          lineNumber: 63,
          columnNumber: 9
        }
      }, " ", Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["convertDatetoThaiDate"])(Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["convertDateDBtoDatePickerNoTime"])(data.date_created)), " "));
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
          lineNumber: 75,
          columnNumber: 9
        }
      }, " ", Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["convertDatetoThaiDate"])(Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["convertDateDBtoDatePickerNoTime"])(data.date_expired)), " "));
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
          lineNumber: 95,
          columnNumber: 9
        }
      }, " ", Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["bytesToSize"])(data.size_used), "  "));
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
          lineNumber: 107,
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
          lineNumber: 137,
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
          lineNumber: 148,
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
          lineNumber: 149,
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
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/admin/management-organization/organization/' + id);
  };

  var usedSize = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(size_used) {
      var _size;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["bytesToMB"])(parseInt(size_used));

            case 2:
              _size = _context.sent;
              return _context.abrupt("return", _size);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function usedSize(_x) {
      return _ref.apply(this, arguments);
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
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_search) {
      var _today, _willExpried, willExpriedDateString;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setLoading(true);
              setSearch(_search);
              setPagination({
                pageSize: pagination.pageSize,
                current: 1
              });
              _today = moment__WEBPACK_IMPORTED_MODULE_9___default()().format('YYYY-MM-DD');
              _willExpried = Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["addDays"])(_today, 31);
              _context2.next = 7;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["formatDateWithoutTime"])(_willExpried);

            case 7:
              willExpriedDateString = _context2.sent;
              _context2.t0 = apiTxt;
              _context2.next = _context2.t0 === "dashborad-will-expried" ? 11 : _context2.t0 === "dashborad-expried" ? 13 : _context2.t0 === "dashborad-all" ? 15 : 17;
              break;

            case 11:
              fetchWillExpriredData({
                pagination: {
                  pageSize: pagination.pageSize,
                  current: 1
                },
                search: _search
              });
              return _context2.abrupt("break", 17);

            case 13:
              fetchExpriredData({
                pagination: {
                  pageSize: pagination.pageSize,
                  current: 1
                },
                search: _search
              });
              return _context2.abrupt("break", 17);

            case 15:
              fetchData({
                pagination: {
                  pageSize: pagination.pageSize,
                  current: 1
                },
                search: _search
              });
              return _context2.abrupt("break", 17);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onSearch(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var fetch = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var params,
          addactivitiesData,
          _args3 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              params = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
              setLoading(true);
              _context3.next = 4;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["apiInstance"])().get('organization/' + apiTxt + '?results=' + params.pagination.pageSize + '&page=' + params.pagination.current + "&search=" + search + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters);

            case 4:
              addactivitiesData = _context3.sent;
              setData(addactivitiesData.data.results);
              setPagination(_objectSpread(_objectSpread({}, params.pagination), {}, {
                total: addactivitiesData.data.totalCount // 200 is mock data, you should read it from server
                // total: data.totalCount,

              }));
              setTotalUser(addactivitiesData.data.totalCount);
              setLoading(false);

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function fetch() {
      return _ref3.apply(this, arguments);
    };
  }();

  var fetchData = /*#__PURE__*/function () {
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
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["apiInstance"])().get('organization/dashborad-all?results=' + params.pagination.pageSize + '&page=' + params.pagination.current + "&search=" + (params.search ? params.search : "") + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters);

            case 4:
              addactivitiesData = _context4.sent;
              setData(addactivitiesData.data.results);
              setPagination(_objectSpread(_objectSpread({}, params.pagination), {}, {
                total: addactivitiesData.data.totalCount // 200 is mock data, you should read it from server
                // total: data.totalCount,

              })); // setTotalUser(addactivitiesData.data.totalCount)

              setLoading(false);

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function fetchData() {
      return _ref4.apply(this, arguments);
    };
  }();

  var fetchWillExprired = /*#__PURE__*/function () {
    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
      var params,
          myCurrentDate,
          _today,
          _willExpried,
          willExpriedDateString,
          _Data,
          _args5 = arguments;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              params = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {};
              myCurrentDate = new Date();
              _today = moment__WEBPACK_IMPORTED_MODULE_9___default()().format('YYYY-MM-DD'); // var _today = myCurrentDate;

              console.log("_today");
              console.log(_today);
              _willExpried = Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["addDays"])(_today, 31);
              console.log("_willExpried");
              _context5.next = 9;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["formatDateWithoutTime"])(_willExpried);

            case 9:
              willExpriedDateString = _context5.sent;
              pagination.today = _today;
              pagination.willExpried = willExpriedDateString; // setExpried(_expried)

              setPagination({
                pageSize: pagination.pageSize,
                current: 1
              });
              _context5.next = 15;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["apiInstance"])().get('organization/' + apiTxtWillExpried + '?results=' + params.pagination.pageSize + "&page=1&search=" + search + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters + "&today=" + params.pagination.today + "&willExpried=" + params.pagination.willExpried);

            case 15:
              _Data = _context5.sent;
              console.log("_Data fetchWillExprired");
              console.log(_Data);
              setTotalWillExpired(_Data.data.totalCount);

            case 19:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function fetchWillExprired() {
      return _ref5.apply(this, arguments);
    };
  }();

  var fetchWillExpriredData = /*#__PURE__*/function () {
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
              _today = moment__WEBPACK_IMPORTED_MODULE_9___default()().format('YYYY-MM-DD'); // var _today = myCurrentDate;

              console.log("_today");
              console.log(_today);
              _willExpried = Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["addDays"])(_today, 31);
              console.log("_willExpried");
              _context6.next = 9;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["formatDateWithoutTime"])(_willExpried);

            case 9:
              willExpriedDateString = _context6.sent;
              params.pagination.today = _today;
              params.pagination.willExpried = willExpriedDateString; // setExpried(_expried)

              setPagination({
                pageSize: pagination.pageSize,
                current: 1
              });
              _context6.next = 15;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["apiInstance"])().get('organization/' + apiTxtWillExpried + '?results=' + params.pagination.pageSize + "&page=" + params.pagination.current + "&search=" + (params.search ? params.search : "") + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters + "&today=" + params.pagination.today + "&willExpried=" + params.pagination.willExpried);

            case 15:
              _Data = _context6.sent;
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
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function fetchWillExpriredData() {
      return _ref6.apply(this, arguments);
    };
  }();

  var fetchExprired = /*#__PURE__*/function () {
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
              _today = moment__WEBPACK_IMPORTED_MODULE_9___default()().format('YYYY-MM-DD'); // var _today = myCurrentDate;

              console.log("_today");
              console.log(_today);
              _willExpried = Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["addDays"])(_today, 31);
              console.log("_willExpried");
              _context7.next = 9;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["formatDateWithoutTime"])(_willExpried);

            case 9:
              willExpriedDateString = _context7.sent;
              params.pagination.today = _today;
              params.pagination.willExpried = willExpriedDateString; // setExpried(_expried)

              setPagination({
                pageSize: pagination.pageSize,
                current: 1
              });
              _context7.next = 15;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["apiInstance"])().get('organization/dashborad-expried?results=' + params.pagination.pageSize + "&page=" + params.pagination.current + "&search=" + search + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters + "&today=" + params.pagination.today + "&willExpried=" + params.pagination.willExpried);

            case 15:
              _Data = _context7.sent;
              console.log("_Data fetchWillExprired");
              console.log(_Data);
              setTotalExpired(_Data.data.totalCount);

            case 19:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function fetchExprired() {
      return _ref7.apply(this, arguments);
    };
  }();

  var fetchExpriredData = /*#__PURE__*/function () {
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
              _today = moment__WEBPACK_IMPORTED_MODULE_9___default()().format('YYYY-MM-DD'); // var _today = myCurrentDate;

              console.log("_today");
              console.log(_today);
              _willExpried = Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["addDays"])(_today, 31);
              console.log("_willExpried");
              _context8.next = 9;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["formatDateWithoutTime"])(_willExpried);

            case 9:
              willExpriedDateString = _context8.sent;
              params.pagination.today = _today;
              params.pagination.willExpried = willExpriedDateString; // setExpried(_expried)

              setPagination({
                pageSize: pagination.pageSize,
                current: 1
              });
              _context8.next = 15;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["apiInstance"])().get('organization/dashborad-expried?results=' + params.pagination.pageSize + "&page=" + params.pagination.current + "&search=" + (params.search ? params.search : "") + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters + "&today=" + params.pagination.today + "&willExpried=" + params.pagination.willExpried);

            case 15:
              _Data = _context8.sent;
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
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function fetchExpriredData() {
      return _ref8.apply(this, arguments);
    };
  }();

  var handleStatisticClick = function handleStatisticClick(value) {
    setSearch("");

    switch (value) {
      case "willExpried":
        setTextMenu("ผู้ใช้ที่กำลังจะหมดอายุ");
        setApiTxt("dashborad-will-expried");
        fetchWillExpriredData({
          pagination: {
            pageSize: pagination.pageSize,
            current: 1
          }
        });
        break;

      case "expried":
        setTextMenu("ผู้ใช้ที่หมดอายุ");
        setApiTxt("dashborad-expried");
        fetchExpriredData({
          pagination: {
            pageSize: pagination.pageSize,
            current: 1
          }
        });
        break;

      default:
        setTextMenu("ผู้ใช้ทั้งหมด");
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
    var _ref9 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee9(value) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              return _context9.abrupt("return", new Promise(function (resolve) {
                return setApiTxt(value, resolve);
              }));

            case 1:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function promiseState(_x3) {
      return _ref9.apply(this, arguments);
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
      lineNumber: 474,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    span: 4,
    className: "lg:col-3 md:col-12 p-4 rounded-lg text-white bg-green-600 mr-4 mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 9
    }
  }, __jsx("a", {
    onClick: function onClick() {
      handleStatisticClick('all');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 11
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Statistic"], {
    title: "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
    value: totalUser,
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["LikeOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 478,
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
      lineNumber: 478,
      columnNumber: 63
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    span: 4,
    className: "lg:col-3 md:col-12 p-4 rounded-lg text-white bg-yellow-600 mr-4 mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 9
    }
  }, __jsx("a", {
    onClick: function onClick() {
      handleStatisticClick('willExpried');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Statistic"], {
    title: "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E08\u0E30\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38",
    value: totalWillExpired,
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["LikeOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 485,
        columnNumber: 137
      }
    }),
    valueStyle: {
      color: "white",
      fontSize: "2rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 70
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    span: 4,
    className: "lg:col-3 md:col-12 p-4 rounded-lg text-white bg-red-600 mr-4 mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 9
    }
  }, __jsx("a", {
    onClick: function onClick() {
      handleStatisticClick('expried');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 11
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Statistic"], {
    title: "\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38",
    value: totalExpired,
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["LikeOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 492,
        columnNumber: 123
      }
    }),
    valueStyle: {
      color: "white",
      fontSize: "2rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 67
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    className: "w-full mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    className: "w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    className: "lg:col-3 md:col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 11
    }
  }, __jsx(Title, {
    level: 2,
    className: "mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 13
    }
  }, txtMenu)), __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    className: "lg:col-9 md:col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 11
    }
  }, __jsx(Search, {
    placeholder: "input search text",
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
      lineNumber: 506,
      columnNumber: 13
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    className: "w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    span: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
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
      lineNumber: 517,
      columnNumber: 13
    }
  })))));
}
/* getServerSideProps */

_s(Home, "pLHt1v67KMnPUEgZdD/GuyUIPak=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9kYXNoYm9yYWQvaW5kZXgtc3VwZXItYWRtaW4uanMiXSwibmFtZXMiOlsiU2VhcmNoIiwiSW5wdXQiLCJUZXh0IiwiVHlwb2dyYXBoeSIsIlRpdGxlIiwiSG9tZSIsInByb3BzIiwib3JpZ2luIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsImN1cnJlbnQiLCJwYWdlU2l6ZSIsInBhZ2luYXRpb24iLCJzZXRQYWdpbmF0aW9uIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZWFyY2giLCJzZXRTZWFyY2giLCJmaWx0ZXJzIiwic2V0RmlsdGVycyIsInRvdGFsVXNlciIsInNldFRvdGFsVXNlciIsInRvdGFsV2lsbEV4cGlyZWQiLCJzZXRUb3RhbFdpbGxFeHBpcmVkIiwidG90YWxFeHBpcmVkIiwic2V0VG90YWxFeHBpcmVkIiwiYXBpVHh0Iiwic2V0QXBpVHh0IiwidG9kYXkiLCJzZXRUb2RheSIsIndpbGxFeHByaWVkIiwic2V0V2lsbEV4cHJpZWQiLCJleHByaWVkIiwic2V0RXhwcmllZCIsImFwaVR4dFdpbGxFeHByaWVkIiwic2V0QXBpVHh0V2lsbEV4cHJpZWQiLCJ0eHRNZW51Iiwic2V0VGV4dE1lbnUiLCJ1c2VFZmZlY3QiLCJfZmlsdGVycyIsImZldGNoIiwiZmV0Y2hXaWxsRXhwcmlyZWQiLCJmZXRjaEV4cHJpcmVkIiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4Iiwic29ydGVyIiwia2V5IiwicmVuZGVyIiwiY29udmVydERhdGV0b1RoYWlEYXRlIiwiY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZSIsImRhdGVfY3JlYXRlZCIsImRhdGVfZXhwaXJlZCIsImJ5dGVzVG9TaXplIiwic2l6ZV91c2VkIiwicGFja2FnZXMiLCJuYW1lX3BhY2thZ2UiLCJ0ZXh0IiwidmFsdWUiLCJpc191c2UiLCJnb3RvUGFnZSIsIm9yZ2FuaXphdGlvbl9pZCIsInNob3dNb2RhbCIsImlkIiwiY29uc29sZSIsImxvZyIsIlJvdXRlciIsInB1c2giLCJ1c2VkU2l6ZSIsImJ5dGVzVG9NQiIsInBhcnNlSW50IiwiX3NpemUiLCJoYW5kbGVUYWJsZUNoYW5nZSIsImZldGNoV2lsbEV4cHJpcmVkRGF0YSIsInNvcnRGaWVsZCIsImNvbHVtbktleSIsInNvcnRPcmRlciIsIm9yZGVyIiwiZmV0Y2hFeHByaXJlZERhdGEiLCJmZXRjaERhdGEiLCJvblNlYXJjaCIsIl9zZWFyY2giLCJfdG9kYXkiLCJtb21lbnQiLCJmb3JtYXQiLCJfd2lsbEV4cHJpZWQiLCJhZGREYXlzIiwiZm9ybWF0RGF0ZVdpdGhvdXRUaW1lIiwid2lsbEV4cHJpZWREYXRlU3RyaW5nIiwicGFyYW1zIiwiYXBpSW5zdGFuY2UiLCJnZXQiLCJhZGRhY3Rpdml0aWVzRGF0YSIsInJlc3VsdHMiLCJ0b3RhbCIsInRvdGFsQ291bnQiLCJteUN1cnJlbnREYXRlIiwiRGF0ZSIsIl9EYXRhIiwiaGFuZGxlU3RhdGlzdGljQ2xpY2siLCJwcm9taXNlU3RhdGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm9uQ2hhbmdlU2VhcmNoIiwidGFyZ2V0IiwiY29sb3IiLCJmb250U2l6ZSIsInJlY29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFFQTtBQWNBLElBQVFBLE1BQVIsR0FBbUJDLDBDQUFuQixDQUFRRCxNQUFSO0FBQ0E7QUFDQSxJQUFRRSxJQUFSLEdBQXdCQywrQ0FBeEIsQ0FBUUQsSUFBUjtBQUFBLElBQWNFLEtBQWQsR0FBd0JELCtDQUF4QixDQUFjQyxLQUFkO0FBQ0E7O0FBR2UsU0FBU0MsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQUE7O0FBQ2xDLE1BQVFDLE1BQVIsR0FBbUJELEtBQW5CLENBQVFDLE1BQVI7O0FBQ0Esa0JBQXdCQyxzREFBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQSxNQUFPQyxJQUFQO0FBQUEs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QTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUN0RSxPQUFuQyxDQURGLENBREYsRUFJRSxNQUFDLHdDQUFEO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE1BQUQ7QUFBUSxlQUFXLEVBQUMsbUJBQXBCO0FBQ0UsU0FBSyxFQUFFcEIsTUFEVDtBQUVFLFlBQVEsRUFBRSxrQkFBQzBDLEtBQUQ7QUFBQSxhQUFXNkMsY0FBYyxDQUFDN0MsS0FBRCxDQUF6QjtBQUFBLEtBRlo7QUFHRSxZQUFRLEVBQUVzQixRQUhaO0FBSUUsZUFBVyxNQUpiO0FBS0UsY0FBVSxNQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLENBRkYsRUFnQkUsTUFBQyx3Q0FBRDtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFFLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMENBQUQ7QUFDRSxhQUFTLEVBQUMsUUFEWjtBQUVFLFdBQU8sRUFBRXJDLE9BRlg7QUFHRSxVQUFNLEVBQUUsZ0JBQUFnRSxNQUFNO0FBQUEsYUFBSUEsTUFBTSxDQUFDOUMsZUFBWDtBQUFBLEtBSGhCO0FBSUUsY0FBVSxFQUFFckQsSUFKZDtBQUtFLGNBQVUsRUFBRUksVUFMZDtBQU1FLFdBQU8sRUFBRUUsT0FOWDtBQU9FLFlBQVEsRUFBRTBELGlCQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBaEJGLENBekJGLENBREY7QUE2REQ7QUFDRDs7R0EzZndCcEUsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWRtaW5cXGRhc2hib3JhZC5qcy4zNjllNzQ4YWQwZjVlYTJkNDEzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbi8qIHV0aWxzICovXHJcbmltcG9ydCB7IGFic29sdXRlVXJsLCBjaGVja0lzTG9naW4sIGFwaUluc3RhbmNlLCBjb252ZXJ0RGF0ZXRvVGhhaURhdGUsIGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUsIGFkZERheXMsIGZvcm1hdERhdGVXaXRob3V0VGltZSwgYnl0ZXNUb01CLCBieXRlc1RvU2l6ZSB9IGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvdXRpbHMnO1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHtcclxuICBDYXJvdXNlbCxcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgSW1hZ2UsXHJcbiAgQnV0dG9uLFxyXG4gIElucHV0LFxyXG4gIENhcmQsXHJcbiAgU3RhdGlzdGljLFxyXG4gIFRhYmxlLFxyXG5cclxufSBmcm9tICdhbnRkJztcclxuXHJcbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dDtcclxuaW1wb3J0IHsgTGlrZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5jb25zdCB7IFRleHQsIFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG4gIGNvbnN0IHsgb3JpZ2luIH0gPSBwcm9wcztcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbcGFnaW5hdGlvbiwgc2V0UGFnaW5hdGlvbl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBjdXJyZW50OiAxLFxyXG4gICAgcGFnZVNpemU6IDEwLFxyXG4gIH0pXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbdG90YWxVc2VyLCBzZXRUb3RhbFVzZXJdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbdG90YWxXaWxsRXhwaXJlZCwgc2V0VG90YWxXaWxsRXhwaXJlZF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFt0b3RhbEV4cGlyZWQsIHNldFRvdGFsRXhwaXJlZF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFthcGlUeHQsIHNldEFwaVR4dF0gPSB1c2VTdGF0ZSgnZGFzaGJvcmFkLWFsbCcpXHJcbiAgY29uc3QgW3RvZGF5LCBzZXRUb2RheV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFt3aWxsRXhwcmllZCwgc2V0V2lsbEV4cHJpZWRdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbZXhwcmllZCwgc2V0RXhwcmllZF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFthcGlUeHRXaWxsRXhwcmllZCwgc2V0QXBpVHh0V2lsbEV4cHJpZWRdID0gdXNlU3RhdGUoJ2Rhc2hib3JhZC13aWxsLWV4cHJpZWQnKVxyXG4gIGNvbnN0IFt0eHRNZW51LCBzZXRUZXh0TWVudV0gPSB1c2VTdGF0ZSgn4Lic4Li54LmJ4LmD4LiK4LmJ4LiX4Lix4LmJ4LiH4Lir4Lih4LiUJylcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHZhciBfZmlsdGVycyA9IFtdXHJcbiAgICBwYWdpbmF0aW9uLmZpbHRlcnMgPSBfZmlsdGVyc1xyXG4gICAgZmV0Y2goeyBwYWdpbmF0aW9uIH0pO1xyXG4gICAgZmV0Y2hXaWxsRXhwcmlyZWQoeyBwYWdpbmF0aW9uIH0pXHJcbiAgICBmZXRjaEV4cHJpcmVkKHsgcGFnaW5hdGlvbiB9KVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+C4p+C4seC4meC4l+C4teC5iOC4quC4oeC4seC4hOC4oycsXHJcbiAgICAgIGRhdGFJbmRleDogJycsXHJcbiAgICAgIHNvcnRlcjogdHJ1ZSxcclxuICAgICAga2V5OiAnZGF0ZV9jcmVhdGVkJyxcclxuICAgICAgcmVuZGVyOiAoZGF0YSkgPT4gPD5cclxuICAgICAgICA8c3BhbiA+IHtjb252ZXJ0RGF0ZXRvVGhhaURhdGUoY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZShkYXRhLmRhdGVfY3JlYXRlZCkpfSA8L3NwYW4+XHJcbiAgICAgIDwvPixcclxuICAgICAgLy8gcmVuZGVyOiBuYW1lID0+IGAke25hbWUuZmlyc3R9ICR7bmFtZS5sYXN0fWAsXHJcbiAgICAgIC8vIHdpZHRoOiAnMjAlJyxcclxuICAgICAgLy8gZGVmYXVsdFNvcnRPcmRlcjogJ2Rlc2NlbmQnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfguKfguLHguJnguJfguLXguYjguKvguKHguJTguK3guLLguKLguLgnLFxyXG4gICAgICBkYXRhSW5kZXg6ICcnLFxyXG4gICAgICBzb3J0ZXI6IHRydWUsXHJcbiAgICAgIGtleTogJ2RhdGVfZXhwaXJlZCcsXHJcbiAgICAgIHJlbmRlcjogKGRhdGEpID0+IDw+XHJcbiAgICAgICAgPHNwYW4gPiB7Y29udmVydERhdGV0b1RoYWlEYXRlKGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUoZGF0YS5kYXRlX2V4cGlyZWQpKX0gPC9zcGFuPlxyXG4gICAgICA8Lz4sXHJcbiAgICAgIC8vIHJlbmRlcjogbmFtZSA9PiBgJHtuYW1lLmZpcnN0fSAke25hbWUubGFzdH1gLFxyXG4gICAgICAvLyB3aWR0aDogJzIwJScsXHJcbiAgICAgIC8vIGRlZmF1bHRTb3J0T3JkZXI6ICdkZXNjZW5kJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn4LiK4Li34LmI4Lit4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZJyxcclxuICAgICAgZGF0YUluZGV4OiAnb3JnYW5pemF0aW9uX25hbWUnLFxyXG4gICAgICBzb3J0ZXI6IHRydWUsXHJcbiAgICAgIC8vIHJlbmRlcjogbmFtZSA9PiBgJHtuYW1lLmZpcnN0fSAke25hbWUubGFzdH1gLFxyXG4gICAgICAvLyB3aWR0aDogJzIwJScsXHJcbiAgICAgIC8vIGRlZmF1bHRTb3J0T3JkZXI6ICdkZXNjZW5kJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn4LmD4LiK4LmJ4Lie4Li34LmJ4LiZ4LiX4Li14LmIJyxcclxuICAgICAgZGF0YUluZGV4OiAnJyxcclxuICAgICAgc29ydGVyOiB0cnVlLFxyXG4gICAgICBrZXk6ICdzaXplX3VzZWQnLFxyXG4gICAgICByZW5kZXI6IChkYXRhKSA9PiA8PlxyXG4gICAgICAgIDxzcGFuID4ge2J5dGVzVG9TaXplKGRhdGEuc2l6ZV91c2VkKX0gIDwvc3Bhbj5cclxuICAgICAgPC8+XHJcbiAgICAgIC8vIHJlbmRlcjogbmFtZSA9PiBgJHtuYW1lLmZpcnN0fSAke25hbWUubGFzdH1gLFxyXG4gICAgICAvLyB3aWR0aDogJzIwJScsXHJcbiAgICAgIC8vIGRlZmF1bHRTb3J0T3JkZXI6ICdkZXNjZW5kJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAncGFja2FnZScsXHJcbiAgICAgIGRhdGFJbmRleDogJycsXHJcbiAgICAgIGtleTogJ3BhY2thZ2UnLFxyXG4gICAgICBzb3J0ZXI6IHRydWUsXHJcbiAgICAgIHJlbmRlcjogKGRhdGEpID0+IDw+XHJcbiAgICAgICAgPHNwYW4gPiB7ZGF0YS5wYWNrYWdlcy5uYW1lX3BhY2thZ2V9IDwvc3Bhbj5cclxuICAgICAgPC8+LFxyXG4gICAgICBmaWx0ZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ0ZyZWUgUGFja2FnZScsXHJcbiAgICAgICAgICB2YWx1ZTogMSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdDb25uZWN0IFBhY2thZ2UnLFxyXG4gICAgICAgICAgdmFsdWU6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnU3RhbmRhcmQgUGFja2FnZScsXHJcbiAgICAgICAgICB2YWx1ZTogMyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdQcmVtaXVtIFBhY2thZ2UnLFxyXG4gICAgICAgICAgdmFsdWU6IDQsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgLy8gcmVuZGVyOiBuYW1lID0+IGAke25hbWUuZmlyc3R9ICR7bmFtZS5sYXN0fWAsXHJcbiAgICAgIC8vIHdpZHRoOiAnMjAlJyxcclxuICAgICAgLy8gZGVmYXVsdFNvcnRPcmRlcjogJ2Rlc2NlbmQnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfguKrguJbguLLguJnguLAnLFxyXG4gICAgICBkYXRhSW5kZXg6ICcnLFxyXG4gICAgICBrZXk6ICdpc191c2UnLFxyXG4gICAgICBzb3J0ZXI6IHRydWUsXHJcbiAgICAgIHJlbmRlcjogKGRhdGEpID0+IDw+XHJcbiAgICAgICAgPHNwYW4gPiB7ZGF0YS5pc191c2UgPT0gMSA/IFwi4LmD4LiK4LmJ4LiH4Liy4LiZXCIgOiBcIuC5hOC4oeC5iOC5g+C4iuC5ieC4h+C4suC4mVwifSA8L3NwYW4+XHJcbiAgICAgIDwvPixcclxuICAgICAgLy8gcmVuZGVyOiBuYW1lID0+IGAke25hbWUuZmlyc3R9ICR7bmFtZS5sYXN0fWAsXHJcbiAgICAgIC8vIHdpZHRoOiAnMjAlJyxcclxuICAgICAgLy8gZGVmYXVsdFNvcnRPcmRlcjogJ2Rlc2NlbmQnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICBkYXRhSW5kZXg6ICcnLFxyXG4gICAgICBrZXk6ICd4JyxcclxuICAgICAgcmVuZGVyOiAoZGF0YSkgPT4gPD5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2l6ZT17XCJkZWZhdWx0XCJ9IG9uQ2xpY2s9eygpID0+IGdvdG9QYWdlKGRhdGEub3JnYW5pemF0aW9uX2lkKX0gPiDguYHguIHguYnguYTguIIgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtbC0xXCIgdHlwZT1cImRhbmdlclwiIG9uQ2xpY2s9eygpID0+IHNob3dNb2RhbChkYXRhKX0gc2l6ZT17XCJkZWZhdWx0XCJ9ID4g4Lil4LiaIDwvQnV0dG9uPlxyXG4gICAgICA8Lz4sXHJcbiAgICB9LFxyXG4gICAgLy8ge1xyXG4gICAgLy8gICB0aXRsZTogJ0dlbmRlcicsXHJcbiAgICAvLyAgIGRhdGFJbmRleDogJ2dlbmRlcicsXHJcbiAgICAvLyAgIC8vIGZpbHRlcnM6IFtcclxuICAgIC8vICAgLy8gICB7IHRleHQ6ICdNYWxlJywgdmFsdWU6ICdtYWxlJyB9LFxyXG4gICAgLy8gICAvLyAgIHsgdGV4dDogJ0ZlbWFsZScsIHZhbHVlOiAnZmVtYWxlJyB9LFxyXG4gICAgLy8gICAvLyBdLFxyXG4gICAgLy8gICB3aWR0aDogJzIwJScsXHJcbiAgICAvLyB9LFxyXG4gICAgLy8ge1xyXG4gICAgLy8gICB0aXRsZTogJ0VtYWlsJyxcclxuICAgIC8vICAgZGF0YUluZGV4OiAnZW1haWwnLFxyXG4gICAgLy8gfSxcclxuICBdO1xyXG4gIGNvbnN0IGdvdG9QYWdlID0gKGlkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpZClcclxuICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC1vcmdhbml6YXRpb24vb3JnYW5pemF0aW9uLycgKyBpZCk7XHJcblxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVzZWRTaXplID0gYXN5bmMgKHNpemVfdXNlZCkgPT4ge1xyXG4gICAgdmFyIF9zaXplID0gYXdhaXQgYnl0ZXNUb01CKHBhcnNlSW50KHNpemVfdXNlZCkpXHJcblxyXG4gICAgcmV0dXJuIF9zaXplXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVUYWJsZUNoYW5nZSA9IChwYWdpbmF0aW9uLCBmaWx0ZXJzLCBzb3J0ZXIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHNvcnRlcilcclxuICAgIHNldFBhZ2luYXRpb24oe1xyXG4gICAgICBwYWdlU2l6ZTogcGFnaW5hdGlvbi5wYWdlU2l6ZSxcclxuICAgICAgY3VycmVudDogcGFnaW5hdGlvbi5jdXJyZW50XHJcbiAgICB9KVxyXG4gICAgc2V0RmlsdGVycyhmaWx0ZXJzLnBhY2thZ2UpXHJcblxyXG4gICAgc3dpdGNoIChhcGlUeHQpIHtcclxuICAgICAgY2FzZSBcImRhc2hib3JhZC13aWxsLWV4cHJpZWRcIjpcclxuICAgICAgICBmZXRjaFdpbGxFeHByaXJlZERhdGEoe1xyXG4gICAgICAgICAgc29ydEZpZWxkOiBzb3J0ZXIuY29sdW1uS2V5LFxyXG4gICAgICAgICAgc29ydE9yZGVyOiBzb3J0ZXIub3JkZXIsXHJcbiAgICAgICAgICBwYWdpbmF0aW9uLFxyXG4gICAgICAgICAgZmlsdGVyczogZmlsdGVycy5wYWNrYWdlLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJkYXNoYm9yYWQtZXhwcmllZFwiOlxyXG4gICAgICAgIGZldGNoRXhwcmlyZWREYXRhKHtcclxuICAgICAgICAgIHNvcnRGaWVsZDogc29ydGVyLmNvbHVtbktleSxcclxuICAgICAgICAgIHNvcnRPcmRlcjogc29ydGVyLm9yZGVyLFxyXG4gICAgICAgICAgcGFnaW5hdGlvbixcclxuICAgICAgICAgIGZpbHRlcnM6IGZpbHRlcnMucGFja2FnZSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGZldGNoRGF0YSh7XHJcbiAgICAgICAgICBzb3J0RmllbGQ6IHNvcnRlci5jb2x1bW5LZXksXHJcbiAgICAgICAgICBzb3J0T3JkZXI6IHNvcnRlci5vcmRlcixcclxuICAgICAgICAgIHBhZ2luYXRpb24sXHJcbiAgICAgICAgICBmaWx0ZXJzOiBmaWx0ZXJzLnBhY2thZ2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uU2VhcmNoID0gYXN5bmMgKF9zZWFyY2gpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIHNldFNlYXJjaChfc2VhcmNoKVxyXG4gICAgc2V0UGFnaW5hdGlvbih7XHJcbiAgICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICBjdXJyZW50OiAxXHJcbiAgICB9KVxyXG4gICAgdmFyIF90b2RheSA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gICAgdmFyIF93aWxsRXhwcmllZCA9IGFkZERheXMoX3RvZGF5LCAzMSk7XHJcbiAgICB2YXIgd2lsbEV4cHJpZWREYXRlU3RyaW5nID0gYXdhaXQgZm9ybWF0RGF0ZVdpdGhvdXRUaW1lKF93aWxsRXhwcmllZClcclxuXHJcbiAgICBzd2l0Y2ggKGFwaVR4dCkge1xyXG5cclxuICAgICAgY2FzZSBcImRhc2hib3JhZC13aWxsLWV4cHJpZWRcIjpcclxuICAgICAgICBmZXRjaFdpbGxFeHByaXJlZERhdGEoe1xyXG4gICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBwYWdlU2l6ZTogcGFnaW5hdGlvbi5wYWdlU2l6ZSxcclxuICAgICAgICAgICAgY3VycmVudDogMVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNlYXJjaDogX3NlYXJjaFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiZGFzaGJvcmFkLWV4cHJpZWRcIjpcclxuICAgICAgICBmZXRjaEV4cHJpcmVkRGF0YSh7XHJcbiAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICAgICAgICBjdXJyZW50OiAxXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2VhcmNoOiBfc2VhcmNoXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwiZGFzaGJvcmFkLWFsbFwiOlxyXG4gICAgICAgIGZldGNoRGF0YSh7XHJcbiAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICAgICAgICBjdXJyZW50OiAxXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2VhcmNoOiBfc2VhcmNoXHJcbiAgICAgICAgfSlcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICB9XHJcbiAgICAvLyBjb25zdCBhZGRhY3Rpdml0aWVzRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgLy8gICAnb3JnYW5pemF0aW9uLycgKyBhcGlUeHQgKyAnP3Jlc3VsdHM9JyArIHBhZ2luYXRpb24ucGFnZVNpemUgKyAnJnBhZ2U9MSZzZWFyY2g9JyArIF9zZWFyY2ggKyBcIiZmaWx0ZXJzPVwiICsgZmlsdGVyc1xyXG4gICAgLy8gKTtcclxuXHJcbiAgICAvLyBzZXREYXRhKGFkZGFjdGl2aXRpZXNEYXRhLmRhdGEucmVzdWx0cylcclxuICAgIC8vIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgfVxyXG4gIGNvbnN0IGZldGNoID0gYXN5bmMgKHBhcmFtcyA9IHt9KSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBjb25zdCBhZGRhY3Rpdml0aWVzRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAnb3JnYW5pemF0aW9uLycgKyBhcGlUeHQgKyAnP3Jlc3VsdHM9JyArIHBhcmFtcy5wYWdpbmF0aW9uLnBhZ2VTaXplICsgJyZwYWdlPScgKyBwYXJhbXMucGFnaW5hdGlvbi5jdXJyZW50ICsgXCImc2VhcmNoPVwiICsgc2VhcmNoICsgXCImc29ydEZpZWxkPVwiICsgcGFyYW1zLnNvcnRGaWVsZCArIFwiJnNvcnRPcmRlcj1cIiArIHBhcmFtcy5zb3J0T3JkZXIgKyBcIiZmaWx0ZXJzPVwiICsgcGFyYW1zLmZpbHRlcnNcclxuICAgICk7XHJcblxyXG4gICAgc2V0RGF0YShhZGRhY3Rpdml0aWVzRGF0YS5kYXRhLnJlc3VsdHMpXHJcbiAgICBzZXRQYWdpbmF0aW9uKHtcclxuICAgICAgLi4ucGFyYW1zLnBhZ2luYXRpb24sXHJcbiAgICAgIHRvdGFsOiBhZGRhY3Rpdml0aWVzRGF0YS5kYXRhLnRvdGFsQ291bnQsXHJcbiAgICAgIC8vIDIwMCBpcyBtb2NrIGRhdGEsIHlvdSBzaG91bGQgcmVhZCBpdCBmcm9tIHNlcnZlclxyXG4gICAgICAvLyB0b3RhbDogZGF0YS50b3RhbENvdW50LFxyXG4gICAgfSlcclxuICAgIHNldFRvdGFsVXNlcihhZGRhY3Rpdml0aWVzRGF0YS5kYXRhLnRvdGFsQ291bnQpXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jIChwYXJhbXMgPSB7fSkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgY29uc3QgYWRkYWN0aXZpdGllc0RhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ29yZ2FuaXphdGlvbi9kYXNoYm9yYWQtYWxsP3Jlc3VsdHM9JyArIHBhcmFtcy5wYWdpbmF0aW9uLnBhZ2VTaXplICsgJyZwYWdlPScgKyBwYXJhbXMucGFnaW5hdGlvbi5jdXJyZW50ICsgXCImc2VhcmNoPVwiICsgKHBhcmFtcy5zZWFyY2ggPyBwYXJhbXMuc2VhcmNoIDogXCJcIikgKyBcIiZzb3J0RmllbGQ9XCIgKyBwYXJhbXMuc29ydEZpZWxkICsgXCImc29ydE9yZGVyPVwiICsgcGFyYW1zLnNvcnRPcmRlciArIFwiJmZpbHRlcnM9XCIgKyBwYXJhbXMuZmlsdGVyc1xyXG4gICAgKTtcclxuXHJcbiAgICBzZXREYXRhKGFkZGFjdGl2aXRpZXNEYXRhLmRhdGEucmVzdWx0cylcclxuICAgIHNldFBhZ2luYXRpb24oe1xyXG4gICAgICAuLi5wYXJhbXMucGFnaW5hdGlvbixcclxuICAgICAgdG90YWw6IGFkZGFjdGl2aXRpZXNEYXRhLmRhdGEudG90YWxDb3VudCxcclxuICAgICAgLy8gMjAwIGlzIG1vY2sgZGF0YSwgeW91IHNob3VsZCByZWFkIGl0IGZyb20gc2VydmVyXHJcbiAgICAgIC8vIHRvdGFsOiBkYXRhLnRvdGFsQ291bnQsXHJcbiAgICB9KVxyXG4gICAgLy8gc2V0VG90YWxVc2VyKGFkZGFjdGl2aXRpZXNEYXRhLmRhdGEudG90YWxDb3VudClcclxuICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hXaWxsRXhwcmlyZWQgPSBhc3luYyAocGFyYW1zID0ge30pID0+IHtcclxuICAgIHZhciBteUN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgIHZhciBfdG9kYXkgPSBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuICAgIC8vIHZhciBfdG9kYXkgPSBteUN1cnJlbnREYXRlO1xyXG4gICAgY29uc29sZS5sb2coXCJfdG9kYXlcIilcclxuICAgIGNvbnNvbGUubG9nKF90b2RheSlcclxuICAgIHZhciBfd2lsbEV4cHJpZWQgPSBhZGREYXlzKF90b2RheSwgMzEpO1xyXG4gICAgY29uc29sZS5sb2coXCJfd2lsbEV4cHJpZWRcIilcclxuXHJcbiAgICB2YXIgd2lsbEV4cHJpZWREYXRlU3RyaW5nID0gYXdhaXQgZm9ybWF0RGF0ZVdpdGhvdXRUaW1lKF93aWxsRXhwcmllZClcclxuXHJcbiAgICBwYWdpbmF0aW9uLnRvZGF5ID0gX3RvZGF5XHJcbiAgICBwYWdpbmF0aW9uLndpbGxFeHByaWVkID0gd2lsbEV4cHJpZWREYXRlU3RyaW5nXHJcbiAgICAvLyBzZXRFeHByaWVkKF9leHByaWVkKVxyXG4gICAgc2V0UGFnaW5hdGlvbih7XHJcbiAgICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICBjdXJyZW50OiAxXHJcbiAgICB9KVxyXG4gICAgY29uc3QgX0RhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ29yZ2FuaXphdGlvbi8nICsgYXBpVHh0V2lsbEV4cHJpZWQgKyAnP3Jlc3VsdHM9JyArIHBhcmFtcy5wYWdpbmF0aW9uLnBhZ2VTaXplICsgXCImcGFnZT0xJnNlYXJjaD1cIiArIHNlYXJjaCArIFwiJnNvcnRGaWVsZD1cIiArIHBhcmFtcy5zb3J0RmllbGQgKyBcIiZzb3J0T3JkZXI9XCIgKyBwYXJhbXMuc29ydE9yZGVyICsgXCImZmlsdGVycz1cIiArIHBhcmFtcy5maWx0ZXJzICsgXCImdG9kYXk9XCIgKyBwYXJhbXMucGFnaW5hdGlvbi50b2RheSArIFwiJndpbGxFeHByaWVkPVwiICsgcGFyYW1zLnBhZ2luYXRpb24ud2lsbEV4cHJpZWRcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhcIl9EYXRhIGZldGNoV2lsbEV4cHJpcmVkXCIpXHJcbiAgICBjb25zb2xlLmxvZyhfRGF0YSlcclxuXHJcblxyXG4gICAgc2V0VG90YWxXaWxsRXhwaXJlZChfRGF0YS5kYXRhLnRvdGFsQ291bnQpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hXaWxsRXhwcmlyZWREYXRhID0gYXN5bmMgKHBhcmFtcyA9IHt9KSA9PiB7XHJcbiAgICB2YXIgbXlDdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgX3RvZGF5ID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcbiAgICAvLyB2YXIgX3RvZGF5ID0gbXlDdXJyZW50RGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKFwiX3RvZGF5XCIpXHJcbiAgICBjb25zb2xlLmxvZyhfdG9kYXkpXHJcbiAgICB2YXIgX3dpbGxFeHByaWVkID0gYWRkRGF5cyhfdG9kYXksIDMxKTtcclxuICAgIGNvbnNvbGUubG9nKFwiX3dpbGxFeHByaWVkXCIpXHJcblxyXG4gICAgdmFyIHdpbGxFeHByaWVkRGF0ZVN0cmluZyA9IGF3YWl0IGZvcm1hdERhdGVXaXRob3V0VGltZShfd2lsbEV4cHJpZWQpXHJcblxyXG4gICAgcGFyYW1zLnBhZ2luYXRpb24udG9kYXkgPSBfdG9kYXlcclxuICAgIHBhcmFtcy5wYWdpbmF0aW9uLndpbGxFeHByaWVkID0gd2lsbEV4cHJpZWREYXRlU3RyaW5nXHJcbiAgICAvLyBzZXRFeHByaWVkKF9leHByaWVkKVxyXG4gICAgc2V0UGFnaW5hdGlvbih7XHJcbiAgICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICBjdXJyZW50OiAxXHJcbiAgICB9KVxyXG4gICAgY29uc3QgX0RhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ29yZ2FuaXphdGlvbi8nICsgYXBpVHh0V2lsbEV4cHJpZWQgKyAnP3Jlc3VsdHM9JyArIHBhcmFtcy5wYWdpbmF0aW9uLnBhZ2VTaXplICsgXCImcGFnZT1cIiArIHBhcmFtcy5wYWdpbmF0aW9uLmN1cnJlbnQgKyBcIiZzZWFyY2g9XCIgKyAocGFyYW1zLnNlYXJjaCA/IHBhcmFtcy5zZWFyY2ggOiBcIlwiKSArIFwiJnNvcnRGaWVsZD1cIiArIHBhcmFtcy5zb3J0RmllbGQgKyBcIiZzb3J0T3JkZXI9XCIgKyBwYXJhbXMuc29ydE9yZGVyICsgXCImZmlsdGVycz1cIiArIHBhcmFtcy5maWx0ZXJzICsgXCImdG9kYXk9XCIgKyBwYXJhbXMucGFnaW5hdGlvbi50b2RheSArIFwiJndpbGxFeHByaWVkPVwiICsgcGFyYW1zLnBhZ2luYXRpb24ud2lsbEV4cHJpZWRcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhcIl9EYXRhIGZldGNoV2lsbEV4cHJpcmVkXCIpXHJcbiAgICBjb25zb2xlLmxvZyhfRGF0YSlcclxuXHJcbiAgICBzZXREYXRhKF9EYXRhLmRhdGEucmVzdWx0cylcclxuICAgIHNldFBhZ2luYXRpb24oe1xyXG4gICAgICAuLi5wYXJhbXMucGFnaW5hdGlvbixcclxuICAgICAgdG90YWw6IF9EYXRhLmRhdGEudG90YWxDb3VudCxcclxuICAgICAgLy8gMjAwIGlzIG1vY2sgZGF0YSwgeW91IHNob3VsZCByZWFkIGl0IGZyb20gc2VydmVyXHJcbiAgICAgIC8vIHRvdGFsOiBkYXRhLnRvdGFsQ291bnQsXHJcbiAgICB9KVxyXG4gICAgLy8gc2V0VG90YWxXaWxsRXhwaXJlZChfRGF0YS5kYXRhLnRvdGFsQ291bnQpXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoRXhwcmlyZWQgPSBhc3luYyAocGFyYW1zID0ge30pID0+IHtcclxuICAgIHZhciBteUN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgIHZhciBfdG9kYXkgPSBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuICAgIC8vIHZhciBfdG9kYXkgPSBteUN1cnJlbnREYXRlO1xyXG4gICAgY29uc29sZS5sb2coXCJfdG9kYXlcIilcclxuICAgIGNvbnNvbGUubG9nKF90b2RheSlcclxuICAgIHZhciBfd2lsbEV4cHJpZWQgPSBhZGREYXlzKF90b2RheSwgMzEpO1xyXG4gICAgY29uc29sZS5sb2coXCJfd2lsbEV4cHJpZWRcIilcclxuXHJcbiAgICB2YXIgd2lsbEV4cHJpZWREYXRlU3RyaW5nID0gYXdhaXQgZm9ybWF0RGF0ZVdpdGhvdXRUaW1lKF93aWxsRXhwcmllZClcclxuXHJcbiAgICBwYXJhbXMucGFnaW5hdGlvbi50b2RheSA9IF90b2RheVxyXG4gICAgcGFyYW1zLnBhZ2luYXRpb24ud2lsbEV4cHJpZWQgPSB3aWxsRXhwcmllZERhdGVTdHJpbmdcclxuICAgIC8vIHNldEV4cHJpZWQoX2V4cHJpZWQpXHJcbiAgICBzZXRQYWdpbmF0aW9uKHtcclxuICAgICAgcGFnZVNpemU6IHBhZ2luYXRpb24ucGFnZVNpemUsXHJcbiAgICAgIGN1cnJlbnQ6IDFcclxuICAgIH0pXHJcbiAgICBjb25zdCBfRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAnb3JnYW5pemF0aW9uL2Rhc2hib3JhZC1leHByaWVkP3Jlc3VsdHM9JyArIHBhcmFtcy5wYWdpbmF0aW9uLnBhZ2VTaXplICsgXCImcGFnZT1cIiArIHBhcmFtcy5wYWdpbmF0aW9uLmN1cnJlbnQgKyBcIiZzZWFyY2g9XCIgKyBzZWFyY2ggKyBcIiZzb3J0RmllbGQ9XCIgKyBwYXJhbXMuc29ydEZpZWxkICsgXCImc29ydE9yZGVyPVwiICsgcGFyYW1zLnNvcnRPcmRlciArIFwiJmZpbHRlcnM9XCIgKyBwYXJhbXMuZmlsdGVycyArIFwiJnRvZGF5PVwiICsgcGFyYW1zLnBhZ2luYXRpb24udG9kYXkgKyBcIiZ3aWxsRXhwcmllZD1cIiArIHBhcmFtcy5wYWdpbmF0aW9uLndpbGxFeHByaWVkXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coXCJfRGF0YSBmZXRjaFdpbGxFeHByaXJlZFwiKVxyXG4gICAgY29uc29sZS5sb2coX0RhdGEpXHJcblxyXG5cclxuICAgIHNldFRvdGFsRXhwaXJlZChfRGF0YS5kYXRhLnRvdGFsQ291bnQpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hFeHByaXJlZERhdGEgPSBhc3luYyAocGFyYW1zID0ge30pID0+IHtcclxuICAgIHZhciBteUN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgIHZhciBfdG9kYXkgPSBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuICAgIC8vIHZhciBfdG9kYXkgPSBteUN1cnJlbnREYXRlO1xyXG4gICAgY29uc29sZS5sb2coXCJfdG9kYXlcIilcclxuICAgIGNvbnNvbGUubG9nKF90b2RheSlcclxuICAgIHZhciBfd2lsbEV4cHJpZWQgPSBhZGREYXlzKF90b2RheSwgMzEpO1xyXG4gICAgY29uc29sZS5sb2coXCJfd2lsbEV4cHJpZWRcIilcclxuXHJcbiAgICB2YXIgd2lsbEV4cHJpZWREYXRlU3RyaW5nID0gYXdhaXQgZm9ybWF0RGF0ZVdpdGhvdXRUaW1lKF93aWxsRXhwcmllZClcclxuXHJcbiAgICBwYXJhbXMucGFnaW5hdGlvbi50b2RheSA9IF90b2RheVxyXG4gICAgcGFyYW1zLnBhZ2luYXRpb24ud2lsbEV4cHJpZWQgPSB3aWxsRXhwcmllZERhdGVTdHJpbmdcclxuICAgIC8vIHNldEV4cHJpZWQoX2V4cHJpZWQpXHJcbiAgICBzZXRQYWdpbmF0aW9uKHtcclxuICAgICAgcGFnZVNpemU6IHBhZ2luYXRpb24ucGFnZVNpemUsXHJcbiAgICAgIGN1cnJlbnQ6IDFcclxuICAgIH0pXHJcbiAgICBjb25zdCBfRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAnb3JnYW5pemF0aW9uL2Rhc2hib3JhZC1leHByaWVkP3Jlc3VsdHM9JyArIHBhcmFtcy5wYWdpbmF0aW9uLnBhZ2VTaXplICsgXCImcGFnZT1cIiArIHBhcmFtcy5wYWdpbmF0aW9uLmN1cnJlbnQgKyBcIiZzZWFyY2g9XCIgKyAocGFyYW1zLnNlYXJjaCA/IHBhcmFtcy5zZWFyY2ggOiBcIlwiKSArIFwiJnNvcnRGaWVsZD1cIiArIHBhcmFtcy5zb3J0RmllbGQgKyBcIiZzb3J0T3JkZXI9XCIgKyBwYXJhbXMuc29ydE9yZGVyICsgXCImZmlsdGVycz1cIiArIHBhcmFtcy5maWx0ZXJzICsgXCImdG9kYXk9XCIgKyBwYXJhbXMucGFnaW5hdGlvbi50b2RheSArIFwiJndpbGxFeHByaWVkPVwiICsgcGFyYW1zLnBhZ2luYXRpb24ud2lsbEV4cHJpZWRcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhcIl9EYXRhIGZldGNoV2lsbEV4cHJpcmVkXCIpXHJcbiAgICBjb25zb2xlLmxvZyhfRGF0YSlcclxuXHJcbiAgICBzZXREYXRhKF9EYXRhLmRhdGEucmVzdWx0cylcclxuICAgIHNldFBhZ2luYXRpb24oe1xyXG4gICAgICAuLi5wYXJhbXMucGFnaW5hdGlvbixcclxuICAgICAgdG90YWw6IF9EYXRhLmRhdGEudG90YWxDb3VudCxcclxuICAgICAgLy8gMjAwIGlzIG1vY2sgZGF0YSwgeW91IHNob3VsZCByZWFkIGl0IGZyb20gc2VydmVyXHJcbiAgICAgIC8vIHRvdGFsOiBkYXRhLnRvdGFsQ291bnQsXHJcbiAgICB9KVxyXG4gICAgLy8gc2V0VG90YWxFeHBpcmVkKF9EYXRhLmRhdGEudG90YWxDb3VudClcclxuICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3RhdGlzdGljQ2xpY2sgPSAodmFsdWUpID0+IHtcclxuICAgIHNldFNlYXJjaChcIlwiKVxyXG4gICAgc3dpdGNoICh2YWx1ZSkge1xyXG5cclxuICAgICAgY2FzZSBcIndpbGxFeHByaWVkXCI6XHJcbiAgICAgICAgc2V0VGV4dE1lbnUoXCLguJzguLnguYnguYPguIrguYnguJfguLXguYjguIHguLPguKXguLHguIfguIjguLDguKvguKHguJTguK3guLLguKLguLhcIilcclxuICAgICAgICBzZXRBcGlUeHQoXCJkYXNoYm9yYWQtd2lsbC1leHByaWVkXCIpXHJcblxyXG4gICAgICAgIGZldGNoV2lsbEV4cHJpcmVkRGF0YSh7XHJcbiAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICAgICAgICBjdXJyZW50OiAxXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJleHByaWVkXCI6XHJcbiAgICAgICAgc2V0VGV4dE1lbnUoXCLguJzguLnguYnguYPguIrguYnguJfguLXguYjguKvguKHguJTguK3guLLguKLguLhcIilcclxuICAgICAgICBzZXRBcGlUeHQoXCJkYXNoYm9yYWQtZXhwcmllZFwiKVxyXG4gICAgICAgIGZldGNoRXhwcmlyZWREYXRhKHtcclxuICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgcGFnZVNpemU6IHBhZ2luYXRpb24ucGFnZVNpemUsXHJcbiAgICAgICAgICAgIGN1cnJlbnQ6IDFcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgc2V0VGV4dE1lbnUoXCLguJzguLnguYnguYPguIrguYnguJfguLHguYnguIfguKvguKHguJRcIilcclxuICAgICAgICBzZXRBcGlUeHQoXCJkYXNoYm9yYWQtYWxsXCIpXHJcbiAgICAgICAgZmV0Y2hEYXRhKHtcclxuICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgcGFnZVNpemU6IHBhZ2luYXRpb24ucGFnZVNpemUsXHJcbiAgICAgICAgICAgIGN1cnJlbnQ6IDFcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIGNvbnN0IHByb21pc2VTdGF0ZSA9IGFzeW5jIHZhbHVlID0+XHJcbiAgICBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldEFwaVR4dCh2YWx1ZSwgcmVzb2x2ZSkpO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVNlYXJjaCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpXHJcbiAgICBzZXRTZWFyY2godmFsdWUudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFJvdz5cclxuXHJcbiAgICAgICAgPENvbCBzcGFuPXs0fSBjbGFzc05hbWU9XCJsZzpjb2wtMyBtZDpjb2wtMTIgcC00IHJvdW5kZWQtbGcgdGV4dC13aGl0ZSBiZy1ncmVlbi02MDAgbXItNCBtdC0yXCI+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZVN0YXRpc3RpY0NsaWNrKCdhbGwnKSB9fT4gPFN0YXRpc3RpYyB0aXRsZT1cIuC4iOC4s+C4meC4p+C4meC4nOC4ueC5ieC5g+C4iuC5ieC4h+C4suC4meC4l+C4seC5ieC4h+C4q+C4oeC4lFwiIHZhbHVlPXt0b3RhbFVzZXJ9IHByZWZpeD17PExpa2VPdXRsaW5lZCAvPn0gdmFsdWVTdHlsZT17e1xyXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIycmVtXCJcclxuICAgICAgICAgIH19IC8+PC9hPlxyXG4gICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICA8Q29sIHNwYW49ezR9IGNsYXNzTmFtZT1cImxnOmNvbC0zIG1kOmNvbC0xMiBwLTQgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIGJnLXllbGxvdy02MDAgbXItNCBtdC0yXCI+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZVN0YXRpc3RpY0NsaWNrKCd3aWxsRXhwcmllZCcpIH19PjxTdGF0aXN0aWMgdGl0bGU9XCLguIHguLPguKXguLHguIfguIjguLDguKvguKHguJTguK3guLLguKLguLhcIiB2YWx1ZT17dG90YWxXaWxsRXhwaXJlZH0gcHJlZml4PXs8TGlrZU91dGxpbmVkIC8+fSB2YWx1ZVN0eWxlPXt7XHJcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjJyZW1cIlxyXG4gICAgICAgICAgfX0gLz48L2E+XHJcbiAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgIDxDb2wgc3Bhbj17NH0gY2xhc3NOYW1lPVwibGc6Y29sLTMgbWQ6Y29sLTEyIHAtNCByb3VuZGVkLWxnIHRleHQtd2hpdGUgYmctcmVkLTYwMCBtci00IG10LTJcIj5cclxuICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlU3RhdGlzdGljQ2xpY2soJ2V4cHJpZWQnKSB9fT4gPFN0YXRpc3RpYyB0aXRsZT1cIuC4q+C4oeC4lOC4reC4suC4ouC4uFwiIHZhbHVlPXt0b3RhbEV4cGlyZWR9IHByZWZpeD17PExpa2VPdXRsaW5lZCAvPn0gdmFsdWVTdHlsZT17e1xyXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIycmVtXCJcclxuICAgICAgICAgIH19IC8+PC9hPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuXHJcbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwidy1mdWxsIG10LTRcIj5cclxuXHJcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibGc6Y29sLTMgbWQ6Y29sLTEyXCI+XHJcbiAgICAgICAgICAgIDxUaXRsZSBsZXZlbD17Mn0gY2xhc3NOYW1lPVwibXItMlwiPnt0eHRNZW51fTwvVGl0bGU+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibGc6Y29sLTkgbWQ6Y29sLTEyXCI+XHJcbiAgICAgICAgICAgIDxTZWFyY2ggcGxhY2Vob2xkZXI9XCJpbnB1dCBzZWFyY2ggdGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZVNlYXJjaCh2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgb25TZWFyY2g9e29uU2VhcmNofVxyXG4gICAgICAgICAgICAgIGVudGVyQnV0dG9uXHJcbiAgICAgICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgcm93S2V5PXtyZWNvcmQgPT4gcmVjb3JkLm9yZ2FuaXphdGlvbl9pZH1cclxuICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgICAgICAgICAgIHBhZ2luYXRpb249e3BhZ2luYXRpb259XHJcbiAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGFibGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuXHJcblxyXG5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbi8qIGdldFNlcnZlclNpZGVQcm9wcyAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHJlcSB9ID0gY29udGV4dDtcclxuICBjb25zdCB7IG9yaWdpbiB9ID0gYWJzb2x1dGVVcmwocmVxKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG9yaWdpbixcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9