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
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_5__["apiInstance"])()["delete"]('orga' + dataDelete.organization_id, {});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9kYXNoYm9yYWQvaW5kZXgtc3VwZXItYWRtaW4uanMiXSwibmFtZXMiOlsiU2VhcmNoIiwiSW5wdXQiLCJUZXh0IiwiVHlwb2dyYXBoeSIsIlRpdGxlIiwiSG9tZSIsInByb3BzIiwib3JpZ2luIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsImN1cnJlbnQiLCJwYWdlU2l6ZSIsInBhZ2luYXRpb24iLCJzZXRQYWdpbmF0aW9uIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZWFyY2giLCJzZXRTZWFyY2giLCJmaWx0ZXJzIiwic2V0RmlsdGVycyIsInRvdGFsVXNlciIsInNldFRvdGFsVXNlciIsInRvdGFsV2lsbEV4cGlyZWQiLCJzZXRUb3RhbFdpbGxFeHBpcmVkIiwidG90YWxFeHBpcmVkIiwic2V0VG90YWxFeHBpcmVkIiwiYXBpVHh0Iiwic2V0QXBpVHh0IiwidG9kYXkiLCJzZXRUb2RheSIsIndpbGxFeHByaWVkIiwic2V0V2lsbEV4cHJpZWQiLCJleHByaWVkIiwic2V0RXhwcmllZCIsImFwaVR4dFdpbGxFeHByaWVkIiwic2V0QXBpVHh0V2lsbEV4cHJpZWQiLCJ0eHRNZW51Iiwic2V0VGV4dE1lbnUiLCJkYXRhRGVsZXRlIiwic2V0RGF0YURlbGV0ZSIsInZpc2libGVNb2RhbERlbGV0ZSIsInNldFZpc2libGVNb2RhbERlbGV0ZSIsInVzZUVmZmVjdCIsIl9maWx0ZXJzIiwiZmV0Y2giLCJmZXRjaFdpbGxFeHByaXJlZCIsImZldGNoRXhwcmlyZWQiLCJzaG93TW9kYWwiLCJjb25zb2xlIiwibG9nIiwib25EZWxldGUiLCJhcGlJbnN0YW5jZSIsIm9yZ2FuaXphdGlvbl9pZCIsInJlZ2lzdGVyRGF0YSIsInN0YXR1cyIsIm9wZW5Ob3RpZmljYXRpb25TdWNjZXNzIiwib3Blbk5vdGlmaWNhdGlvbkZhaWwiLCJtZXNzYWdlIiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4Iiwic29ydGVyIiwia2V5IiwicmVuZGVyIiwiY29udmVydERhdGV0b1RoYWlEYXRlIiwiY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZSIsImRhdGVfY3JlYXRlZCIsImRhdGVfZXhwaXJlZCIsImJ5dGVzVG9TaXplIiwic2l6ZV91c2VkIiwicGFja2FnZXMiLCJuYW1lX3BhY2thZ2UiLCJ0ZXh0IiwidmFsdWUiLCJpc191c2UiLCJnb3RvUGFnZSIsImlkIiwiUm91dGVyIiwicHVzaCIsInVzZWRTaXplIiwiYnl0ZXNUb01CIiwicGFyc2VJbnQiLCJfc2l6ZSIsImhhbmRsZVRhYmxlQ2hhbmdlIiwiZmV0Y2hXaWxsRXhwcmlyZWREYXRhIiwic29ydEZpZWxkIiwiY29sdW1uS2V5Iiwic29ydE9yZGVyIiwib3JkZXIiLCJmZXRjaEV4cHJpcmVkRGF0YSIsImZldGNoRGF0YSIsIm9uU2VhcmNoIiwiX3NlYXJjaCIsIl90b2RheSIsIm1vbWVudCIsImZvcm1hdCIsIl93aWxsRXhwcmllZCIsImFkZERheXMiLCJmb3JtYXREYXRlV2l0aG91dFRpbWUiLCJ3aWxsRXhwcmllZERhdGVTdHJpbmciLCJwYXJhbXMiLCJnZXQiLCJhZGRhY3Rpdml0aWVzRGF0YSIsInJlc3VsdHMiLCJ0b3RhbCIsInRvdGFsQ291bnQiLCJteUN1cnJlbnREYXRlIiwiRGF0ZSIsIl9EYXRhIiwiaGFuZGxlU3RhdGlzdGljQ2xpY2siLCJwcm9taXNlU3RhdGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm9uQ2hhbmdlU2VhcmNoIiwidGFyZ2V0IiwiY29sb3IiLCJmb250U2l6ZSIsInJlY29yZCIsImhpZGVNb2RhbCIsIm9yZ2FuaXphdGlvbl9uYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQVVBO0FBRUEsSUFBUUEsTUFBUixHQUFtQkMsMENBQW5CLENBQVFELE1BQVI7QUFDQSxJQUFRRSxJQUFSLEdBQXdCQywrQ0FBeEIsQ0FB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QUFBLEtBSGhCO0FBSUUsY0FBVSxFQUFFNUMsSUFKZDtBQUtFLGNBQVUsRUFBRUksVUFMZDtBQU1FLFdBQU8sRUFBRUUsT0FOWDtBQU9FLFlBQVEsRUFBRXFFLGlCQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBdEJGLEVBb0NFLE1BQUMsMENBQUQ7QUFDRSxTQUFLLEVBQUMseUpBRFI7QUFFRSxXQUFPLEVBQUUzQyxrQkFGWDtBQUdFLFFBQUksRUFBRVUsUUFIUjtBQUlFLFlBQVEsRUFBRW9FLFNBSlo7QUFLRSxVQUFNLEVBQUMsY0FMVDtBQU1FLGNBQVUsRUFBQyxzQ0FOYjtBQU9FLGlCQUFhLEVBQUU7QUFDYixjQUFRLFNBREs7QUFFYixnQkFBVTtBQUZHLEtBUGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9GQUFrQmhGLFVBQVUsR0FBR0EsVUFBVSxDQUFDaUYsaUJBQWQsR0FBa0MsRUFBOUQscURBWkYsQ0FwQ0YsQ0F6QkYsQ0FERjtBQWtGRDtBQUNEOztHQTNpQndCbkgsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWRtaW5cXGRhc2hib3JhZC5qcy4zNDBjNjVjN2Y0YjFkMjU0NmFkMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbi8qIHV0aWxzICovXHJcbmltcG9ydCB7IGFic29sdXRlVXJsLCBhZGREYXlzLCBhcGlJbnN0YW5jZSwgYnl0ZXNUb01CLCBieXRlc1RvU2l6ZSwgY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZSwgY29udmVydERhdGV0b1RoYWlEYXRlLCBmb3JtYXREYXRlV2l0aG91dFRpbWUgfSBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL3V0aWxzJztcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBMaWtlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIENvbCxcclxuICBJbnB1dCxcclxuICBNb2RhbCxcclxuICBSb3csXHJcbiAgU3RhdGlzdGljLFxyXG4gIFRhYmxlLFxyXG4gIFR5cG9ncmFwaHlcclxufSBmcm9tICdhbnRkJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuY29uc3QgeyBTZWFyY2ggfSA9IElucHV0O1xyXG5jb25zdCB7IFRleHQsIFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuICBjb25zdCB7IG9yaWdpbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW3BhZ2luYXRpb24sIHNldFBhZ2luYXRpb25dID0gdXNlU3RhdGUoe1xyXG4gICAgY3VycmVudDogMSxcclxuICAgIHBhZ2VTaXplOiAxMCxcclxuICB9KVxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFtmaWx0ZXJzLCBzZXRGaWx0ZXJzXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3RvdGFsVXNlciwgc2V0VG90YWxVc2VyXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW3RvdGFsV2lsbEV4cGlyZWQsIHNldFRvdGFsV2lsbEV4cGlyZWRdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbdG90YWxFeHBpcmVkLCBzZXRUb3RhbEV4cGlyZWRdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbYXBpVHh0LCBzZXRBcGlUeHRdID0gdXNlU3RhdGUoJ2Rhc2hib3JhZC1hbGwnKVxyXG4gIGNvbnN0IFt0b2RheSwgc2V0VG9kYXldID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbd2lsbEV4cHJpZWQsIHNldFdpbGxFeHByaWVkXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2V4cHJpZWQsIHNldEV4cHJpZWRdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbYXBpVHh0V2lsbEV4cHJpZWQsIHNldEFwaVR4dFdpbGxFeHByaWVkXSA9IHVzZVN0YXRlKCdkYXNoYm9yYWQtd2lsbC1leHByaWVkJylcclxuICBjb25zdCBbdHh0TWVudSwgc2V0VGV4dE1lbnVdID0gdXNlU3RhdGUoJ+C4nOC4ueC5ieC5g+C4iuC5ieC4l+C4seC5ieC4h+C4q+C4oeC4lCcpXHJcbiAgY29uc3QgW2RhdGFEZWxldGUsIHNldERhdGFEZWxldGVdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbdmlzaWJsZU1vZGFsRGVsZXRlLCBzZXRWaXNpYmxlTW9kYWxEZWxldGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2YXIgX2ZpbHRlcnMgPSBbXVxyXG4gICAgcGFnaW5hdGlvbi5maWx0ZXJzID0gX2ZpbHRlcnNcclxuICAgIGZldGNoKHsgcGFnaW5hdGlvbiB9KTtcclxuICAgIGZldGNoV2lsbEV4cHJpcmVkKHsgcGFnaW5hdGlvbiB9KVxyXG4gICAgZmV0Y2hFeHByaXJlZCh7IHBhZ2luYXRpb24gfSlcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3Qgc2hvd01vZGFsID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdkYXRhIGRlbGV0ZCcpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgc2V0RGF0YURlbGV0ZShkYXRhKVxyXG4gICAgc2V0VmlzaWJsZU1vZGFsRGVsZXRlKHRydWUpXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EZWxldGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnREVMRVRFJylcclxuICAgIC8vIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAvLyAgICdvcmdhbml6YXRpb25fbmFtZSc6IHZhbHVlLm9yZ2FuaXphdGlvbl9uYW1lLFxyXG4gICAgLy8gfVxyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSlcclxuICAgIGNvbnN0IHJlZ2lzdGVyRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZGVsZXRlKCdvcmdhJyArIGRhdGFEZWxldGUub3JnYW5pemF0aW9uX2lkLCB7fSk7XHJcbiAgICBpZiAocmVnaXN0ZXJEYXRhLmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICBvcGVuTm90aWZpY2F0aW9uU3VjY2VzcygpXHJcbiAgICAgIC8vIGZldGNoT3JnYW5pemF0aW9uRGF0YSgpO1xyXG4gICAgICBzZXRWaXNpYmxlTW9kYWxEZWxldGUoZmFsc2UpXHJcbiAgICAgIGZldGNoKHsgcGFnaW5hdGlvbiB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9wZW5Ob3RpZmljYXRpb25GYWlsKHJlZ2lzdGVyRGF0YS5kYXRhLm1lc3NhZ2UpXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfguKfguLHguJnguJfguLXguYjguKrguKHguLHguITguKMnLFxyXG4gICAgICBkYXRhSW5kZXg6ICcnLFxyXG4gICAgICBzb3J0ZXI6IHRydWUsXHJcbiAgICAgIGtleTogJ2RhdGVfY3JlYXRlZCcsXHJcbiAgICAgIHJlbmRlcjogKGRhdGEpID0+IDw+XHJcbiAgICAgICAgPHNwYW4gPiB7Y29udmVydERhdGV0b1RoYWlEYXRlKGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUoZGF0YS5kYXRlX2NyZWF0ZWQpKX0gPC9zcGFuPlxyXG4gICAgICA8Lz4sXHJcbiAgICAgIC8vIHJlbmRlcjogbmFtZSA9PiBgJHtuYW1lLmZpcnN0fSAke25hbWUubGFzdH1gLFxyXG4gICAgICAvLyB3aWR0aDogJzIwJScsXHJcbiAgICAgIC8vIGRlZmF1bHRTb3J0T3JkZXI6ICdkZXNjZW5kJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn4Lin4Lix4LiZ4LiX4Li14LmI4Lir4Lih4LiU4Lit4Liy4Lii4Li4JyxcclxuICAgICAgZGF0YUluZGV4OiAnJyxcclxuICAgICAgc29ydGVyOiB0cnVlLFxyXG4gICAgICBrZXk6ICdkYXRlX2V4cGlyZWQnLFxyXG4gICAgICByZW5kZXI6IChkYXRhKSA9PiA8PlxyXG4gICAgICAgIDxzcGFuID4ge2NvbnZlcnREYXRldG9UaGFpRGF0ZShjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lKGRhdGEuZGF0ZV9leHBpcmVkKSl9IDwvc3Bhbj5cclxuICAgICAgPC8+LFxyXG4gICAgICAvLyByZW5kZXI6IG5hbWUgPT4gYCR7bmFtZS5maXJzdH0gJHtuYW1lLmxhc3R9YCxcclxuICAgICAgLy8gd2lkdGg6ICcyMCUnLFxyXG4gICAgICAvLyBkZWZhdWx0U29ydE9yZGVyOiAnZGVzY2VuZCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+C4iuC4t+C5iOC4reC4q+C4meC5iOC4p+C4ouC4h+C4suC4mScsXHJcbiAgICAgIGRhdGFJbmRleDogJ29yZ2FuaXphdGlvbl9uYW1lJyxcclxuICAgICAgc29ydGVyOiB0cnVlLFxyXG4gICAgICAvLyByZW5kZXI6IG5hbWUgPT4gYCR7bmFtZS5maXJzdH0gJHtuYW1lLmxhc3R9YCxcclxuICAgICAgLy8gd2lkdGg6ICcyMCUnLFxyXG4gICAgICAvLyBkZWZhdWx0U29ydE9yZGVyOiAnZGVzY2VuZCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+C5g+C4iuC5ieC4nuC4t+C5ieC4meC4l+C4teC5iCcsXHJcbiAgICAgIGRhdGFJbmRleDogJycsXHJcbiAgICAgIHNvcnRlcjogdHJ1ZSxcclxuICAgICAga2V5OiAnc2l6ZV91c2VkJyxcclxuICAgICAgcmVuZGVyOiAoZGF0YSkgPT4gPD5cclxuICAgICAgICA8c3BhbiA+IHtieXRlc1RvU2l6ZShkYXRhLnNpemVfdXNlZCl9ICA8L3NwYW4+XHJcbiAgICAgIDwvPlxyXG4gICAgICAvLyByZW5kZXI6IG5hbWUgPT4gYCR7bmFtZS5maXJzdH0gJHtuYW1lLmxhc3R9YCxcclxuICAgICAgLy8gd2lkdGg6ICcyMCUnLFxyXG4gICAgICAvLyBkZWZhdWx0U29ydE9yZGVyOiAnZGVzY2VuZCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ3BhY2thZ2UnLFxyXG4gICAgICBkYXRhSW5kZXg6ICcnLFxyXG4gICAgICBrZXk6ICdwYWNrYWdlJyxcclxuICAgICAgc29ydGVyOiB0cnVlLFxyXG4gICAgICByZW5kZXI6IChkYXRhKSA9PiA8PlxyXG4gICAgICAgIDxzcGFuID4ge2RhdGEucGFja2FnZXMubmFtZV9wYWNrYWdlfSA8L3NwYW4+XHJcbiAgICAgIDwvPixcclxuICAgICAgZmlsdGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdGcmVlIFBhY2thZ2UnLFxyXG4gICAgICAgICAgdmFsdWU6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnQ29ubmVjdCBQYWNrYWdlJyxcclxuICAgICAgICAgIHZhbHVlOiAyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ1N0YW5kYXJkIFBhY2thZ2UnLFxyXG4gICAgICAgICAgdmFsdWU6IDMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnUHJlbWl1bSBQYWNrYWdlJyxcclxuICAgICAgICAgIHZhbHVlOiA0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIC8vIHJlbmRlcjogbmFtZSA9PiBgJHtuYW1lLmZpcnN0fSAke25hbWUubGFzdH1gLFxyXG4gICAgICAvLyB3aWR0aDogJzIwJScsXHJcbiAgICAgIC8vIGRlZmF1bHRTb3J0T3JkZXI6ICdkZXNjZW5kJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn4Liq4LiW4Liy4LiZ4LiwJyxcclxuICAgICAgZGF0YUluZGV4OiAnJyxcclxuICAgICAga2V5OiAnaXNfdXNlJyxcclxuICAgICAgc29ydGVyOiB0cnVlLFxyXG4gICAgICByZW5kZXI6IChkYXRhKSA9PiA8PlxyXG4gICAgICAgIDxzcGFuID4ge2RhdGEuaXNfdXNlID09IDEgPyBcIuC5g+C4iuC5ieC4h+C4suC4mVwiIDogXCLguYTguKHguYjguYPguIrguYnguIfguLLguJlcIn0gPC9zcGFuPlxyXG4gICAgICA8Lz4sXHJcbiAgICAgIC8vIHJlbmRlcjogbmFtZSA9PiBgJHtuYW1lLmZpcnN0fSAke25hbWUubGFzdH1gLFxyXG4gICAgICAvLyB3aWR0aDogJzIwJScsXHJcbiAgICAgIC8vIGRlZmF1bHRTb3J0T3JkZXI6ICdkZXNjZW5kJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgZGF0YUluZGV4OiAnJyxcclxuICAgICAga2V5OiAneCcsXHJcbiAgICAgIHJlbmRlcjogKGRhdGEpID0+IDw+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNpemU9e1wiZGVmYXVsdFwifSBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZShkYXRhLm9yZ2FuaXphdGlvbl9pZCl9ID4g4LmB4LiB4LmJ4LmE4LiCIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibWwtMVwiIHR5cGU9XCJkYW5nZXJcIiBvbkNsaWNrPXsoKSA9PiBzaG93TW9kYWwoZGF0YSl9IHNpemU9e1wiZGVmYXVsdFwifSA+IOC4peC4miA8L0J1dHRvbj5cclxuICAgICAgPC8+LFxyXG4gICAgfSxcclxuICAgIC8vIHtcclxuICAgIC8vICAgdGl0bGU6ICdHZW5kZXInLFxyXG4gICAgLy8gICBkYXRhSW5kZXg6ICdnZW5kZXInLFxyXG4gICAgLy8gICAvLyBmaWx0ZXJzOiBbXHJcbiAgICAvLyAgIC8vICAgeyB0ZXh0OiAnTWFsZScsIHZhbHVlOiAnbWFsZScgfSxcclxuICAgIC8vICAgLy8gICB7IHRleHQ6ICdGZW1hbGUnLCB2YWx1ZTogJ2ZlbWFsZScgfSxcclxuICAgIC8vICAgLy8gXSxcclxuICAgIC8vICAgd2lkdGg6ICcyMCUnLFxyXG4gICAgLy8gfSxcclxuICAgIC8vIHtcclxuICAgIC8vICAgdGl0bGU6ICdFbWFpbCcsXHJcbiAgICAvLyAgIGRhdGFJbmRleDogJ2VtYWlsJyxcclxuICAgIC8vIH0sXHJcbiAgXTtcclxuICBjb25zdCBnb3RvUGFnZSA9IChpZCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaWQpXHJcbiAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQtb3JnYW5pemF0aW9uL29yZ2FuaXphdGlvbi8nICsgaWQpO1xyXG5cclxuICB9O1xyXG5cclxuICBjb25zdCB1c2VkU2l6ZSA9IGFzeW5jIChzaXplX3VzZWQpID0+IHtcclxuICAgIHZhciBfc2l6ZSA9IGF3YWl0IGJ5dGVzVG9NQihwYXJzZUludChzaXplX3VzZWQpKVxyXG5cclxuICAgIHJldHVybiBfc2l6ZVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlVGFibGVDaGFuZ2UgPSAocGFnaW5hdGlvbiwgZmlsdGVycywgc29ydGVyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhzb3J0ZXIpXHJcbiAgICBzZXRQYWdpbmF0aW9uKHtcclxuICAgICAgcGFnZVNpemU6IHBhZ2luYXRpb24ucGFnZVNpemUsXHJcbiAgICAgIGN1cnJlbnQ6IHBhZ2luYXRpb24uY3VycmVudFxyXG4gICAgfSlcclxuICAgIHNldEZpbHRlcnMoZmlsdGVycy5wYWNrYWdlKVxyXG5cclxuICAgIHN3aXRjaCAoYXBpVHh0KSB7XHJcbiAgICAgIGNhc2UgXCJkYXNoYm9yYWQtd2lsbC1leHByaWVkXCI6XHJcbiAgICAgICAgZmV0Y2hXaWxsRXhwcmlyZWREYXRhKHtcclxuICAgICAgICAgIHNvcnRGaWVsZDogc29ydGVyLmNvbHVtbktleSxcclxuICAgICAgICAgIHNvcnRPcmRlcjogc29ydGVyLm9yZGVyLFxyXG4gICAgICAgICAgcGFnaW5hdGlvbixcclxuICAgICAgICAgIGZpbHRlcnM6IGZpbHRlcnMucGFja2FnZSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiZGFzaGJvcmFkLWV4cHJpZWRcIjpcclxuICAgICAgICBmZXRjaEV4cHJpcmVkRGF0YSh7XHJcbiAgICAgICAgICBzb3J0RmllbGQ6IHNvcnRlci5jb2x1bW5LZXksXHJcbiAgICAgICAgICBzb3J0T3JkZXI6IHNvcnRlci5vcmRlcixcclxuICAgICAgICAgIHBhZ2luYXRpb24sXHJcbiAgICAgICAgICBmaWx0ZXJzOiBmaWx0ZXJzLnBhY2thZ2UsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBmZXRjaERhdGEoe1xyXG4gICAgICAgICAgc29ydEZpZWxkOiBzb3J0ZXIuY29sdW1uS2V5LFxyXG4gICAgICAgICAgc29ydE9yZGVyOiBzb3J0ZXIub3JkZXIsXHJcbiAgICAgICAgICBwYWdpbmF0aW9uLFxyXG4gICAgICAgICAgZmlsdGVyczogZmlsdGVycy5wYWNrYWdlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICB9O1xyXG5cclxuICBjb25zdCBvblNlYXJjaCA9IGFzeW5jIChfc2VhcmNoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBzZXRTZWFyY2goX3NlYXJjaClcclxuICAgIHNldFBhZ2luYXRpb24oe1xyXG4gICAgICBwYWdlU2l6ZTogcGFnaW5hdGlvbi5wYWdlU2l6ZSxcclxuICAgICAgY3VycmVudDogMVxyXG4gICAgfSlcclxuICAgIHZhciBfdG9kYXkgPSBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuICAgIHZhciBfd2lsbEV4cHJpZWQgPSBhZGREYXlzKF90b2RheSwgMzEpO1xyXG4gICAgdmFyIHdpbGxFeHByaWVkRGF0ZVN0cmluZyA9IGF3YWl0IGZvcm1hdERhdGVXaXRob3V0VGltZShfd2lsbEV4cHJpZWQpXHJcblxyXG4gICAgc3dpdGNoIChhcGlUeHQpIHtcclxuXHJcbiAgICAgIGNhc2UgXCJkYXNoYm9yYWQtd2lsbC1leHByaWVkXCI6XHJcbiAgICAgICAgZmV0Y2hXaWxsRXhwcmlyZWREYXRhKHtcclxuICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgcGFnZVNpemU6IHBhZ2luYXRpb24ucGFnZVNpemUsXHJcbiAgICAgICAgICAgIGN1cnJlbnQ6IDFcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZWFyY2g6IF9zZWFyY2hcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImRhc2hib3JhZC1leHByaWVkXCI6XHJcbiAgICAgICAgZmV0Y2hFeHByaXJlZERhdGEoe1xyXG4gICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBwYWdlU2l6ZTogcGFnaW5hdGlvbi5wYWdlU2l6ZSxcclxuICAgICAgICAgICAgY3VycmVudDogMVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNlYXJjaDogX3NlYXJjaFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBcImRhc2hib3JhZC1hbGxcIjpcclxuICAgICAgICBmZXRjaERhdGEoe1xyXG4gICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBwYWdlU2l6ZTogcGFnaW5hdGlvbi5wYWdlU2l6ZSxcclxuICAgICAgICAgICAgY3VycmVudDogMVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNlYXJjaDogX3NlYXJjaFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgfVxyXG4gICAgLy8gY29uc3QgYWRkYWN0aXZpdGllc0RhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgIC8vICAgJ29yZ2FuaXphdGlvbi8nICsgYXBpVHh0ICsgJz9yZXN1bHRzPScgKyBwYWdpbmF0aW9uLnBhZ2VTaXplICsgJyZwYWdlPTEmc2VhcmNoPScgKyBfc2VhcmNoICsgXCImZmlsdGVycz1cIiArIGZpbHRlcnNcclxuICAgIC8vICk7XHJcblxyXG4gICAgLy8gc2V0RGF0YShhZGRhY3Rpdml0aWVzRGF0YS5kYXRhLnJlc3VsdHMpXHJcbiAgICAvLyBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gIH1cclxuICBjb25zdCBmZXRjaCA9IGFzeW5jIChwYXJhbXMgPSB7fSkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgY29uc3QgYWRkYWN0aXZpdGllc0RhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ29yZ2FuaXphdGlvbi8nICsgYXBpVHh0ICsgJz9yZXN1bHRzPScgKyBwYXJhbXMucGFnaW5hdGlvbi5wYWdlU2l6ZSArICcmcGFnZT0nICsgcGFyYW1zLnBhZ2luYXRpb24uY3VycmVudCArIFwiJnNlYXJjaD1cIiArIHNlYXJjaCArIFwiJnNvcnRGaWVsZD1cIiArIHBhcmFtcy5zb3J0RmllbGQgKyBcIiZzb3J0T3JkZXI9XCIgKyBwYXJhbXMuc29ydE9yZGVyICsgXCImZmlsdGVycz1cIiArIHBhcmFtcy5maWx0ZXJzXHJcbiAgICApO1xyXG5cclxuICAgIHNldERhdGEoYWRkYWN0aXZpdGllc0RhdGEuZGF0YS5yZXN1bHRzKVxyXG4gICAgc2V0UGFnaW5hdGlvbih7XHJcbiAgICAgIC4uLnBhcmFtcy5wYWdpbmF0aW9uLFxyXG4gICAgICB0b3RhbDogYWRkYWN0aXZpdGllc0RhdGEuZGF0YS50b3RhbENvdW50LFxyXG4gICAgICAvLyAyMDAgaXMgbW9jayBkYXRhLCB5b3Ugc2hvdWxkIHJlYWQgaXQgZnJvbSBzZXJ2ZXJcclxuICAgICAgLy8gdG90YWw6IGRhdGEudG90YWxDb3VudCxcclxuICAgIH0pXHJcbiAgICBzZXRUb3RhbFVzZXIoYWRkYWN0aXZpdGllc0RhdGEuZGF0YS50b3RhbENvdW50KVxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAocGFyYW1zID0ge30pID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGNvbnN0IGFkZGFjdGl2aXRpZXNEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICdvcmdhbml6YXRpb24vZGFzaGJvcmFkLWFsbD9yZXN1bHRzPScgKyBwYXJhbXMucGFnaW5hdGlvbi5wYWdlU2l6ZSArICcmcGFnZT0nICsgcGFyYW1zLnBhZ2luYXRpb24uY3VycmVudCArIFwiJnNlYXJjaD1cIiArIChwYXJhbXMuc2VhcmNoID8gcGFyYW1zLnNlYXJjaCA6IFwiXCIpICsgXCImc29ydEZpZWxkPVwiICsgcGFyYW1zLnNvcnRGaWVsZCArIFwiJnNvcnRPcmRlcj1cIiArIHBhcmFtcy5zb3J0T3JkZXIgKyBcIiZmaWx0ZXJzPVwiICsgcGFyYW1zLmZpbHRlcnNcclxuICAgICk7XHJcblxyXG4gICAgc2V0RGF0YShhZGRhY3Rpdml0aWVzRGF0YS5kYXRhLnJlc3VsdHMpXHJcbiAgICBzZXRQYWdpbmF0aW9uKHtcclxuICAgICAgLi4ucGFyYW1zLnBhZ2luYXRpb24sXHJcbiAgICAgIHRvdGFsOiBhZGRhY3Rpdml0aWVzRGF0YS5kYXRhLnRvdGFsQ291bnQsXHJcbiAgICAgIC8vIDIwMCBpcyBtb2NrIGRhdGEsIHlvdSBzaG91bGQgcmVhZCBpdCBmcm9tIHNlcnZlclxyXG4gICAgICAvLyB0b3RhbDogZGF0YS50b3RhbENvdW50LFxyXG4gICAgfSlcclxuICAgIC8vIHNldFRvdGFsVXNlcihhZGRhY3Rpdml0aWVzRGF0YS5kYXRhLnRvdGFsQ291bnQpXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoV2lsbEV4cHJpcmVkID0gYXN5bmMgKHBhcmFtcyA9IHt9KSA9PiB7XHJcbiAgICB2YXIgbXlDdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgX3RvZGF5ID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcbiAgICAvLyB2YXIgX3RvZGF5ID0gbXlDdXJyZW50RGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKFwiX3RvZGF5XCIpXHJcbiAgICBjb25zb2xlLmxvZyhfdG9kYXkpXHJcbiAgICB2YXIgX3dpbGxFeHByaWVkID0gYWRkRGF5cyhfdG9kYXksIDMxKTtcclxuICAgIGNvbnNvbGUubG9nKFwiX3dpbGxFeHByaWVkXCIpXHJcblxyXG4gICAgdmFyIHdpbGxFeHByaWVkRGF0ZVN0cmluZyA9IGF3YWl0IGZvcm1hdERhdGVXaXRob3V0VGltZShfd2lsbEV4cHJpZWQpXHJcblxyXG4gICAgcGFnaW5hdGlvbi50b2RheSA9IF90b2RheVxyXG4gICAgcGFnaW5hdGlvbi53aWxsRXhwcmllZCA9IHdpbGxFeHByaWVkRGF0ZVN0cmluZ1xyXG4gICAgLy8gc2V0RXhwcmllZChfZXhwcmllZClcclxuICAgIHNldFBhZ2luYXRpb24oe1xyXG4gICAgICBwYWdlU2l6ZTogcGFnaW5hdGlvbi5wYWdlU2l6ZSxcclxuICAgICAgY3VycmVudDogMVxyXG4gICAgfSlcclxuICAgIGNvbnN0IF9EYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICdvcmdhbml6YXRpb24vJyArIGFwaVR4dFdpbGxFeHByaWVkICsgJz9yZXN1bHRzPScgKyBwYXJhbXMucGFnaW5hdGlvbi5wYWdlU2l6ZSArIFwiJnBhZ2U9MSZzZWFyY2g9XCIgKyBzZWFyY2ggKyBcIiZzb3J0RmllbGQ9XCIgKyBwYXJhbXMuc29ydEZpZWxkICsgXCImc29ydE9yZGVyPVwiICsgcGFyYW1zLnNvcnRPcmRlciArIFwiJmZpbHRlcnM9XCIgKyBwYXJhbXMuZmlsdGVycyArIFwiJnRvZGF5PVwiICsgcGFyYW1zLnBhZ2luYXRpb24udG9kYXkgKyBcIiZ3aWxsRXhwcmllZD1cIiArIHBhcmFtcy5wYWdpbmF0aW9uLndpbGxFeHByaWVkXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coXCJfRGF0YSBmZXRjaFdpbGxFeHByaXJlZFwiKVxyXG4gICAgY29uc29sZS5sb2coX0RhdGEpXHJcblxyXG5cclxuICAgIHNldFRvdGFsV2lsbEV4cGlyZWQoX0RhdGEuZGF0YS50b3RhbENvdW50KVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoV2lsbEV4cHJpcmVkRGF0YSA9IGFzeW5jIChwYXJhbXMgPSB7fSkgPT4ge1xyXG4gICAgdmFyIG15Q3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFyIF90b2RheSA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gICAgLy8gdmFyIF90b2RheSA9IG15Q3VycmVudERhdGU7XHJcbiAgICBjb25zb2xlLmxvZyhcIl90b2RheVwiKVxyXG4gICAgY29uc29sZS5sb2coX3RvZGF5KVxyXG4gICAgdmFyIF93aWxsRXhwcmllZCA9IGFkZERheXMoX3RvZGF5LCAzMSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIl93aWxsRXhwcmllZFwiKVxyXG5cclxuICAgIHZhciB3aWxsRXhwcmllZERhdGVTdHJpbmcgPSBhd2FpdCBmb3JtYXREYXRlV2l0aG91dFRpbWUoX3dpbGxFeHByaWVkKVxyXG5cclxuICAgIHBhcmFtcy5wYWdpbmF0aW9uLnRvZGF5ID0gX3RvZGF5XHJcbiAgICBwYXJhbXMucGFnaW5hdGlvbi53aWxsRXhwcmllZCA9IHdpbGxFeHByaWVkRGF0ZVN0cmluZ1xyXG4gICAgLy8gc2V0RXhwcmllZChfZXhwcmllZClcclxuICAgIHNldFBhZ2luYXRpb24oe1xyXG4gICAgICBwYWdlU2l6ZTogcGFnaW5hdGlvbi5wYWdlU2l6ZSxcclxuICAgICAgY3VycmVudDogMVxyXG4gICAgfSlcclxuICAgIGNvbnN0IF9EYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICdvcmdhbml6YXRpb24vJyArIGFwaVR4dFdpbGxFeHByaWVkICsgJz9yZXN1bHRzPScgKyBwYXJhbXMucGFnaW5hdGlvbi5wYWdlU2l6ZSArIFwiJnBhZ2U9XCIgKyBwYXJhbXMucGFnaW5hdGlvbi5jdXJyZW50ICsgXCImc2VhcmNoPVwiICsgKHBhcmFtcy5zZWFyY2ggPyBwYXJhbXMuc2VhcmNoIDogXCJcIikgKyBcIiZzb3J0RmllbGQ9XCIgKyBwYXJhbXMuc29ydEZpZWxkICsgXCImc29ydE9yZGVyPVwiICsgcGFyYW1zLnNvcnRPcmRlciArIFwiJmZpbHRlcnM9XCIgKyBwYXJhbXMuZmlsdGVycyArIFwiJnRvZGF5PVwiICsgcGFyYW1zLnBhZ2luYXRpb24udG9kYXkgKyBcIiZ3aWxsRXhwcmllZD1cIiArIHBhcmFtcy5wYWdpbmF0aW9uLndpbGxFeHByaWVkXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coXCJfRGF0YSBmZXRjaFdpbGxFeHByaXJlZFwiKVxyXG4gICAgY29uc29sZS5sb2coX0RhdGEpXHJcblxyXG4gICAgc2V0RGF0YShfRGF0YS5kYXRhLnJlc3VsdHMpXHJcbiAgICBzZXRQYWdpbmF0aW9uKHtcclxuICAgICAgLi4ucGFyYW1zLnBhZ2luYXRpb24sXHJcbiAgICAgIHRvdGFsOiBfRGF0YS5kYXRhLnRvdGFsQ291bnQsXHJcbiAgICAgIC8vIDIwMCBpcyBtb2NrIGRhdGEsIHlvdSBzaG91bGQgcmVhZCBpdCBmcm9tIHNlcnZlclxyXG4gICAgICAvLyB0b3RhbDogZGF0YS50b3RhbENvdW50LFxyXG4gICAgfSlcclxuICAgIC8vIHNldFRvdGFsV2lsbEV4cGlyZWQoX0RhdGEuZGF0YS50b3RhbENvdW50KVxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaEV4cHJpcmVkID0gYXN5bmMgKHBhcmFtcyA9IHt9KSA9PiB7XHJcbiAgICB2YXIgbXlDdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgX3RvZGF5ID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcbiAgICAvLyB2YXIgX3RvZGF5ID0gbXlDdXJyZW50RGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKFwiX3RvZGF5XCIpXHJcbiAgICBjb25zb2xlLmxvZyhfdG9kYXkpXHJcbiAgICB2YXIgX3dpbGxFeHByaWVkID0gYWRkRGF5cyhfdG9kYXksIDMxKTtcclxuICAgIGNvbnNvbGUubG9nKFwiX3dpbGxFeHByaWVkXCIpXHJcblxyXG4gICAgdmFyIHdpbGxFeHByaWVkRGF0ZVN0cmluZyA9IGF3YWl0IGZvcm1hdERhdGVXaXRob3V0VGltZShfd2lsbEV4cHJpZWQpXHJcblxyXG4gICAgcGFyYW1zLnBhZ2luYXRpb24udG9kYXkgPSBfdG9kYXlcclxuICAgIHBhcmFtcy5wYWdpbmF0aW9uLndpbGxFeHByaWVkID0gd2lsbEV4cHJpZWREYXRlU3RyaW5nXHJcbiAgICAvLyBzZXRFeHByaWVkKF9leHByaWVkKVxyXG4gICAgc2V0UGFnaW5hdGlvbih7XHJcbiAgICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICBjdXJyZW50OiAxXHJcbiAgICB9KVxyXG4gICAgY29uc3QgX0RhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ29yZ2FuaXphdGlvbi9kYXNoYm9yYWQtZXhwcmllZD9yZXN1bHRzPScgKyBwYXJhbXMucGFnaW5hdGlvbi5wYWdlU2l6ZSArIFwiJnBhZ2U9XCIgKyBwYXJhbXMucGFnaW5hdGlvbi5jdXJyZW50ICsgXCImc2VhcmNoPVwiICsgc2VhcmNoICsgXCImc29ydEZpZWxkPVwiICsgcGFyYW1zLnNvcnRGaWVsZCArIFwiJnNvcnRPcmRlcj1cIiArIHBhcmFtcy5zb3J0T3JkZXIgKyBcIiZmaWx0ZXJzPVwiICsgcGFyYW1zLmZpbHRlcnMgKyBcIiZ0b2RheT1cIiArIHBhcmFtcy5wYWdpbmF0aW9uLnRvZGF5ICsgXCImd2lsbEV4cHJpZWQ9XCIgKyBwYXJhbXMucGFnaW5hdGlvbi53aWxsRXhwcmllZFxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKFwiX0RhdGEgZmV0Y2hXaWxsRXhwcmlyZWRcIilcclxuICAgIGNvbnNvbGUubG9nKF9EYXRhKVxyXG5cclxuXHJcbiAgICBzZXRUb3RhbEV4cGlyZWQoX0RhdGEuZGF0YS50b3RhbENvdW50KVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoRXhwcmlyZWREYXRhID0gYXN5bmMgKHBhcmFtcyA9IHt9KSA9PiB7XHJcbiAgICB2YXIgbXlDdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgX3RvZGF5ID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcbiAgICAvLyB2YXIgX3RvZGF5ID0gbXlDdXJyZW50RGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKFwiX3RvZGF5XCIpXHJcbiAgICBjb25zb2xlLmxvZyhfdG9kYXkpXHJcbiAgICB2YXIgX3dpbGxFeHByaWVkID0gYWRkRGF5cyhfdG9kYXksIDMxKTtcclxuICAgIGNvbnNvbGUubG9nKFwiX3dpbGxFeHByaWVkXCIpXHJcblxyXG4gICAgdmFyIHdpbGxFeHByaWVkRGF0ZVN0cmluZyA9IGF3YWl0IGZvcm1hdERhdGVXaXRob3V0VGltZShfd2lsbEV4cHJpZWQpXHJcblxyXG4gICAgcGFyYW1zLnBhZ2luYXRpb24udG9kYXkgPSBfdG9kYXlcclxuICAgIHBhcmFtcy5wYWdpbmF0aW9uLndpbGxFeHByaWVkID0gd2lsbEV4cHJpZWREYXRlU3RyaW5nXHJcbiAgICAvLyBzZXRFeHByaWVkKF9leHByaWVkKVxyXG4gICAgc2V0UGFnaW5hdGlvbih7XHJcbiAgICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICBjdXJyZW50OiAxXHJcbiAgICB9KVxyXG4gICAgY29uc3QgX0RhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ29yZ2FuaXphdGlvbi9kYXNoYm9yYWQtZXhwcmllZD9yZXN1bHRzPScgKyBwYXJhbXMucGFnaW5hdGlvbi5wYWdlU2l6ZSArIFwiJnBhZ2U9XCIgKyBwYXJhbXMucGFnaW5hdGlvbi5jdXJyZW50ICsgXCImc2VhcmNoPVwiICsgKHBhcmFtcy5zZWFyY2ggPyBwYXJhbXMuc2VhcmNoIDogXCJcIikgKyBcIiZzb3J0RmllbGQ9XCIgKyBwYXJhbXMuc29ydEZpZWxkICsgXCImc29ydE9yZGVyPVwiICsgcGFyYW1zLnNvcnRPcmRlciArIFwiJmZpbHRlcnM9XCIgKyBwYXJhbXMuZmlsdGVycyArIFwiJnRvZGF5PVwiICsgcGFyYW1zLnBhZ2luYXRpb24udG9kYXkgKyBcIiZ3aWxsRXhwcmllZD1cIiArIHBhcmFtcy5wYWdpbmF0aW9uLndpbGxFeHByaWVkXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coXCJfRGF0YSBmZXRjaFdpbGxFeHByaXJlZFwiKVxyXG4gICAgY29uc29sZS5sb2coX0RhdGEpXHJcblxyXG4gICAgc2V0RGF0YShfRGF0YS5kYXRhLnJlc3VsdHMpXHJcbiAgICBzZXRQYWdpbmF0aW9uKHtcclxuICAgICAgLi4ucGFyYW1zLnBhZ2luYXRpb24sXHJcbiAgICAgIHRvdGFsOiBfRGF0YS5kYXRhLnRvdGFsQ291bnQsXHJcbiAgICAgIC8vIDIwMCBpcyBtb2NrIGRhdGEsIHlvdSBzaG91bGQgcmVhZCBpdCBmcm9tIHNlcnZlclxyXG4gICAgICAvLyB0b3RhbDogZGF0YS50b3RhbENvdW50LFxyXG4gICAgfSlcclxuICAgIC8vIHNldFRvdGFsRXhwaXJlZChfRGF0YS5kYXRhLnRvdGFsQ291bnQpXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN0YXRpc3RpY0NsaWNrID0gKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRTZWFyY2goXCJcIilcclxuICAgIHN3aXRjaCAodmFsdWUpIHtcclxuXHJcbiAgICAgIGNhc2UgXCJ3aWxsRXhwcmllZFwiOlxyXG4gICAgICAgIHNldFRleHRNZW51KFwi4LiI4Liz4LiZ4Lin4LiZ4Lic4Li54LmJ4LmD4LiK4LmJ4LiH4Liy4LiZ4LiX4Li14LmI4LiB4Liz4Lil4Lix4LiH4LiI4Liw4Lir4Lih4LiU4Lit4Liy4Lii4Li4XCIpXHJcbiAgICAgICAgc2V0QXBpVHh0KFwiZGFzaGJvcmFkLXdpbGwtZXhwcmllZFwiKVxyXG5cclxuICAgICAgICBmZXRjaFdpbGxFeHByaXJlZERhdGEoe1xyXG4gICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBwYWdlU2l6ZTogcGFnaW5hdGlvbi5wYWdlU2l6ZSxcclxuICAgICAgICAgICAgY3VycmVudDogMVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiZXhwcmllZFwiOlxyXG4gICAgICAgIHNldFRleHRNZW51KFwi4LiI4Liz4LiZ4Lin4LiZ4Lic4Li54LmJ4LmD4LiK4LmJ4LiH4Liy4LiZ4LiX4Li14LmI4Lir4Lih4LiU4Lit4Liy4Lii4Li4XCIpXHJcbiAgICAgICAgc2V0QXBpVHh0KFwiZGFzaGJvcmFkLWV4cHJpZWRcIilcclxuICAgICAgICBmZXRjaEV4cHJpcmVkRGF0YSh7XHJcbiAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICAgICAgICBjdXJyZW50OiAxXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHNldFRleHRNZW51KFwi4LiI4Liz4LiZ4Lin4LiZ4Lic4Li54LmJ4LmD4LiK4LmJ4LiH4Liy4LiZ4LiX4Lix4LmJ4LiH4Lir4Lih4LiUXCIpXHJcbiAgICAgICAgc2V0QXBpVHh0KFwiZGFzaGJvcmFkLWFsbFwiKVxyXG4gICAgICAgIGZldGNoRGF0YSh7XHJcbiAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICAgICAgICBjdXJyZW50OiAxXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBjb25zdCBwcm9taXNlU3RhdGUgPSBhc3luYyB2YWx1ZSA9PlxyXG4gICAgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRBcGlUeHQodmFsdWUsIHJlc29sdmUpKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VTZWFyY2ggPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKVxyXG4gICAgc2V0U2VhcmNoKHZhbHVlLnRhcmdldC52YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxSb3c+XHJcblxyXG4gICAgICAgIDxDb2wgc3Bhbj17NH0gY2xhc3NOYW1lPVwibGc6Y29sLTMgbWQ6Y29sLTEyIHAtNCByb3VuZGVkLWxnIHRleHQtd2hpdGUgYmctZ3JlZW4tNjAwIG1yLTQgbXQtMlwiPlxyXG4gICAgICAgICAgPGEgb25DbGljaz17KCkgPT4geyBoYW5kbGVTdGF0aXN0aWNDbGljaygnYWxsJykgfX0+IDxTdGF0aXN0aWMgdGl0bGU9XCLguIjguLPguJnguKfguJnguJzguLnguYnguYPguIrguYnguIfguLLguJnguJfguLHguYnguIfguKvguKHguJRcIiB2YWx1ZT17dG90YWxVc2VyfSBwcmVmaXg9ezxMaWtlT3V0bGluZWQgLz59IHZhbHVlU3R5bGU9e3tcclxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMnJlbVwiXHJcbiAgICAgICAgICB9fSAvPjwvYT5cclxuICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgPENvbCBzcGFuPXs0fSBjbGFzc05hbWU9XCJsZzpjb2wtMyBtZDpjb2wtMTIgcC00IHJvdW5kZWQtbGcgdGV4dC13aGl0ZSBiZy15ZWxsb3ctNjAwIG1yLTQgbXQtMlwiPlxyXG4gICAgICAgICAgPGEgb25DbGljaz17KCkgPT4geyBoYW5kbGVTdGF0aXN0aWNDbGljaygnd2lsbEV4cHJpZWQnKSB9fT48U3RhdGlzdGljIHRpdGxlPVwi4LiI4Liz4LiZ4Lin4LiZ4Lic4Li54LmJ4LmD4LiK4LmJ4LiH4Liy4LiZ4LiX4Li14LmI4LiB4Liz4Lil4Lix4LiH4LiI4Liw4Lir4Lih4LiU4Lit4Liy4Lii4Li4XCIgdmFsdWU9e3RvdGFsV2lsbEV4cGlyZWR9IHByZWZpeD17PExpa2VPdXRsaW5lZCAvPn0gdmFsdWVTdHlsZT17e1xyXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIycmVtXCJcclxuICAgICAgICAgIH19IC8+PC9hPlxyXG4gICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICA8Q29sIHNwYW49ezR9IGNsYXNzTmFtZT1cImxnOmNvbC0zIG1kOmNvbC0xMiBwLTQgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIGJnLXJlZC02MDAgbXItNCBtdC0yXCI+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZVN0YXRpc3RpY0NsaWNrKCdleHByaWVkJykgfX0+IDxTdGF0aXN0aWMgdGl0bGU9XCLguIjguLPguJnguKfguJnguJzguLnguYnguYPguIrguYnguIfguLLguJnguJfguLXguYjguKvguKHguJTguK3guLLguKLguLhcIiB2YWx1ZT17dG90YWxFeHBpcmVkfSBwcmVmaXg9ezxMaWtlT3V0bGluZWQgLz59IHZhbHVlU3R5bGU9e3tcclxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMnJlbVwiXHJcbiAgICAgICAgICB9fSAvPjwvYT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICA8Um93IGNsYXNzTmFtZT1cInctZnVsbCBtdC00XCI+XHJcblxyXG4gICAgICAgIDxSb3cgPlxyXG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9XCIgcGItMVwiPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8VGl0bGUgbGV2ZWw9ezJ9IGNsYXNzTmFtZT1cIm1yLTJcIj57dHh0TWVudX08L1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIGp1c3RpZnktaXRlbXMtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoIHBsYWNlaG9sZGVyPVwi4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4Lic4Li54LmJ4LmD4LiK4LmJ4LiH4Liy4LiZXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gb25DaGFuZ2VTZWFyY2godmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgIGVudGVyQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGFsbG93Q2xlYXJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgcm93S2V5PXtyZWNvcmQgPT4gcmVjb3JkLm9yZ2FuaXphdGlvbl9pZH1cclxuICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgICAgICAgICAgIHBhZ2luYXRpb249e3BhZ2luYXRpb259XHJcbiAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGFibGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICB0aXRsZT1cIuC4hOC4uOC4k+C4leC5ieC4reC4h+C4geC4suC4o+C4peC4muC4guC5ieC4reC4oeC4ueC4peC4q+C4o+C4t+C4reC5hOC4oeC5iD9cIlxyXG4gICAgICAgICAgdmlzaWJsZT17dmlzaWJsZU1vZGFsRGVsZXRlfVxyXG4gICAgICAgICAgb25Paz17b25EZWxldGV9XHJcbiAgICAgICAgICBvbkNhbmNlbD17aGlkZU1vZGFsfVxyXG4gICAgICAgICAgb2tUZXh0PVwi4Lil4LiaXCJcclxuICAgICAgICAgIGNhbmNlbFRleHQ9XCLguKLguIHguYDguKXguLTguIFcIlxyXG4gICAgICAgICAgb2tCdXR0b25Qcm9wcz17e1xyXG4gICAgICAgICAgICAndHlwZSc6IFwicHJpbWFyeVwiLFxyXG4gICAgICAgICAgICAnZGFuZ2VyJzogdHJ1ZVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cD7guITguLjguJPguJXguYnguK3guIfguIHguLLguKPguKXguJogXCJ7ZGF0YURlbGV0ZSA/IGRhdGFEZWxldGUub3JnYW5pemF0aW9uX25hbWUgOiBcIlwifVwiIOC4q+C4o+C4t+C4reC5hOC4oeC5iD8gIDwvcD5cclxuXHJcbiAgICAgICAgPC9Nb2RhbD5cclxuXHJcblxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuLyogZ2V0U2VydmVyU2lkZVByb3BzICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgcmVxIH0gPSBjb250ZXh0O1xyXG4gIGNvbnN0IHsgb3JpZ2luIH0gPSBhYnNvbHV0ZVVybChyZXEpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgb3JpZ2luLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=