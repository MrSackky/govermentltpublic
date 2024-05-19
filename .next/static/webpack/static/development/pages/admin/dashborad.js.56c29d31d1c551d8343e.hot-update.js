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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../middleware/utils */ "./middleware/utils.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "D:\\govermentlt\\pages\\admin\\dashborad\\index-super-admin.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* utils */






var Search = antd__WEBPACK_IMPORTED_MODULE_8__["Input"].Search;
var Text = antd__WEBPACK_IMPORTED_MODULE_8__["Typography"].Text,
    Title = antd__WEBPACK_IMPORTED_MODULE_8__["Typography"].Title;
var __N_SSP = true;
function Home(props) {
  _s();

  var _this = this;

  var origin = props.origin;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    current: 1,
    pageSize: 10
  }),
      pagination = _useState2[0],
      setPagination = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      loading = _useState3[0],
      setLoading = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      search = _useState4[0],
      setSearch = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      filters = _useState5[0],
      setFilters = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      totalUser = _useState6[0],
      setTotalUser = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      totalWillExpired = _useState7[0],
      setTotalWillExpired = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      totalExpired = _useState8[0],
      setTotalExpired = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('dashborad-all'),
      apiTxt = _useState9[0],
      setApiTxt = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      today = _useState10[0],
      setToday = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      willExpried = _useState11[0],
      setWillExpried = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      expried = _useState12[0],
      setExpried = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('dashborad-will-expried'),
      apiTxtWillExpried = _useState13[0],
      setApiTxtWillExpried = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('ผู้ใช้ทั้งหมด'),
      txtMenu = _useState14[0],
      setTextMenu = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      dataDelete = _useState15[0],
      setDataDelete = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      visibleModalDelete = _useState16[0],
      setVisibleModalDelete = _useState16[1];

  var _notification$useNoti = antd__WEBPACK_IMPORTED_MODULE_8__["notification"].useNotification(),
      _notification$useNoti2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_notification$useNoti, 2),
      api = _notification$useNoti2[0],
      contextHolder = _notification$useNoti2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
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

  var hideModal = function hideModal() {
    setVisibleModalDelete(false);
  };

  var onDelete = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var registerData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["apiInstance"])()["delete"]('organization/' + dataDelete.organization_id, {});

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

  var openNotificationSuccess = function openNotificationSuccess() {
    antd__WEBPACK_IMPORTED_MODULE_8__["notification"].success({
      message: "\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
      description: 'ลบข้อมูลสำเร็จ',
      placement: 'topRight'
    });
  };

  var openNotificationFail = function openNotificationFail(messgae) {
    antd__WEBPACK_IMPORTED_MODULE_8__["notification"].error({
      message: "\u0E1E\u0E1A\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25",
      description: messgae,
      placement: 'topRight'
    });
  };

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
          lineNumber: 109,
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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
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
          lineNumber: 183,
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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        type: "primary",
        size: "default",
        onClick: function onClick() {
          return gotoPage(data.organization_id);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 9
        }
      }, " \u0E41\u0E01\u0E49\u0E44\u0E02 "), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        className: "ml-1",
        type: "danger",
        onClick: function onClick() {
          return showModal(data);
        },
        size: "default",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
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
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(size_used) {
      var _size;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["bytesToMB"])(parseInt(size_used));

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
              _today = moment__WEBPACK_IMPORTED_MODULE_9___default()().format('YYYY-MM-DD');
              _willExpried = Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["addDays"])(_today, 31);
              _context3.next = 7;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["formatDateWithoutTime"])(_willExpried);

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
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["apiInstance"])().get('organization/' + apiTxt + '?results=' + params.pagination.pageSize + '&page=' + params.pagination.current + "&search=" + search + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters);

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
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["apiInstance"])().get('organization/dashborad-all?results=' + params.pagination.pageSize + '&page=' + params.pagination.current + "&search=" + (params.search ? params.search : "") + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters);

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
              _today = moment__WEBPACK_IMPORTED_MODULE_9___default()().format('YYYY-MM-DD'); // var _today = myCurrentDate;

              console.log("_today");
              console.log(_today);
              _willExpried = Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["addDays"])(_today, 31);
              console.log("_willExpried");
              _context6.next = 9;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["formatDateWithoutTime"])(_willExpried);

            case 9:
              willExpriedDateString = _context6.sent;
              pagination.today = _today;
              pagination.willExpried = willExpriedDateString; // setExpried(_expried)

              setPagination({
                pageSize: pagination.pageSize,
                current: 1
              });
              _context6.next = 15;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["apiInstance"])().get('organization/' + apiTxtWillExpried + '?results=' + params.pagination.pageSize + "&page=1&search=" + search + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters + "&today=" + params.pagination.today + "&willExpried=" + params.pagination.willExpried);

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
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["apiInstance"])().get('organization/' + apiTxtWillExpried + '?results=' + params.pagination.pageSize + "&page=" + params.pagination.current + "&search=" + (params.search ? params.search : "") + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters + "&today=" + params.pagination.today + "&willExpried=" + params.pagination.willExpried);

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
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["apiInstance"])().get('organization/dashborad-expried?results=' + params.pagination.pageSize + "&page=" + params.pagination.current + "&search=" + search + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters + "&today=" + params.pagination.today + "&willExpried=" + params.pagination.willExpried);

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
              _today = moment__WEBPACK_IMPORTED_MODULE_9___default()().format('YYYY-MM-DD'); // var _today = myCurrentDate;

              console.log("_today");
              console.log(_today);
              _willExpried = Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["addDays"])(_today, 31);
              console.log("_willExpried");
              _context9.next = 9;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["formatDateWithoutTime"])(_willExpried);

            case 9:
              willExpriedDateString = _context9.sent;
              params.pagination.today = _today;
              params.pagination.willExpried = willExpriedDateString; // setExpried(_expried)

              setPagination({
                pageSize: pagination.pageSize,
                current: 1
              });
              _context9.next = 15;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["apiInstance"])().get('organization/dashborad-expried?results=' + params.pagination.pageSize + "&page=" + params.pagination.current + "&search=" + (params.search ? params.search : "") + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters + "&today=" + params.pagination.today + "&willExpried=" + params.pagination.willExpried);

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
      lineNumber: 520,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    span: 4,
    className: "lg:col-3 md:col-12 p-4 rounded-lg text-white bg-green-600 mr-4 mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 9
    }
  }, __jsx("a", {
    onClick: function onClick() {
      handleStatisticClick('all');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 11
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Statistic"], {
    title: "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
    value: totalUser,
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["LikeOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 524,
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
      lineNumber: 524,
      columnNumber: 63
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    span: 4,
    className: "lg:col-3 md:col-12 p-4 rounded-lg text-white bg-yellow-600 mr-4 mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
      columnNumber: 9
    }
  }, __jsx("a", {
    onClick: function onClick() {
      handleStatisticClick('willExpried');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Statistic"], {
    title: "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E25\u0E31\u0E07\u0E08\u0E30\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38",
    value: totalWillExpired,
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["LikeOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 531,
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
      lineNumber: 531,
      columnNumber: 70
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    span: 4,
    className: "lg:col-3 md:col-12 p-4 rounded-lg text-white bg-red-600 mr-4 mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 9
    }
  }, __jsx("a", {
    onClick: function onClick() {
      handleStatisticClick('expried');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 11
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Statistic"], {
    title: "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38",
    value: totalExpired,
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["LikeOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 538,
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
      lineNumber: 538,
      columnNumber: 67
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Row"], {
    className: "w-full mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    className: " pb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Row"], {
    className: "items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 17
    }
  }, __jsx(Title, {
    level: 2,
    className: "mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 19
    }
  }, txtMenu))), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    className: "flex justify-end justify-items-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
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
      lineNumber: 556,
      columnNumber: 17
    }
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Row"], {
    className: "w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    span: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Table"], {
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
      lineNumber: 569,
      columnNumber: 13
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
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
      lineNumber: 581,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593,
      columnNumber: 11
    }
  }, "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A \"", dataDelete ? dataDelete.organization_name : "", "\" \u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?  "))));
}
/* getServerSideProps */

_s(Home, "iunCSm5Tv0SIGl9jMSU6rB2fz+g=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_8__["notification"].useNotification];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9kYXNoYm9yYWQvaW5kZXgtc3VwZXItYWRtaW4uanMiXSwibmFtZXMiOlsiU2VhcmNoIiwiSW5wdXQiLCJUZXh0IiwiVHlwb2dyYXBoeSIsIlRpdGxlIiwiSG9tZSIsInByb3BzIiwib3JpZ2luIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsImN1cnJlbnQiLCJwYWdlU2l6ZSIsInBhZ2luYXRpb24iLCJzZXRQYWdpbmF0aW9uIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZWFyY2giLCJzZXRTZWFyY2giLCJmaWx0ZXJzIiwic2V0RmlsdGVycyIsInRvdGFsVXNlciIsInNldFRvdGFsVXNlciIsInRvdGFsV2lsbEV4cGlyZWQiLCJzZXRUb3RhbFdpbGxFeHBpcmVkIiwidG90YWxFeHBpcmVkIiwic2V0VG90YWxFeHBpcmVkIiwiYXBpVHh0Iiwic2V0QXBpVHh0IiwidG9kYXkiLCJzZXRUb2RheSIsIndpbGxFeHByaWVkIiwic2V0V2lsbEV4cHJpZWQiLCJleHByaWVkIiwic2V0RXhwcmllZCIsImFwaVR4dFdpbGxFeHByaWVkIiwic2V0QXBpVHh0V2lsbEV4cHJpZWQiLCJ0eHRNZW51Iiwic2V0VGV4dE1lbnUiLCJkYXRhRGVsZXRlIiwic2V0RGF0YURlbGV0ZSIsInZpc2libGVNb2RhbERlbGV0ZSIsInNldFZpc2libGVNb2RhbERlbGV0ZSIsIm5vdGlmaWNhdGlvbiIsInVzZU5vdGlmaWNhdGlvbiIsImFwaSIsImNvbnRleHRIb2xkZXIiLCJ1c2VFZmZlY3QiLCJfZmlsdGVycyIsImZldGNoIiwiZmV0Y2hXaWxsRXhwcmlyZWQiLCJmZXRjaEV4cHJpcmVkIiwic2hvd01vZGFsIiwiY29uc29sZSIsImxvZyIsImhpZGVNb2RhbCIsIm9uRGVsZXRlIiwiYXBpSW5zdGFuY2UiLCJvcmdhbml6YXRpb25faWQiLCJyZWdpc3RlckRhdGEiLCJzdGF0dXMiLCJvcGVuTm90aWZpY2F0aW9uU3VjY2VzcyIsIm9wZW5Ob3RpZmljYXRpb25GYWlsIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJkZXNjcmlwdGlvbiIsInBsYWNlbWVudCIsIm1lc3NnYWUiLCJlcnJvciIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsInNvcnRlciIsImtleSIsInJlbmRlciIsImNvbnZlcnREYXRldG9UaGFpRGF0ZSIsImNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUiLCJkYXRlX2NyZWF0ZWQiLCJkYXRlX2V4cGlyZWQiLCJieXRlc1RvU2l6ZSIsInNpemVfdXNlZCIsInBhY2thZ2VzIiwibmFtZV9wYWNrYWdlIiwidGV4dCIsInZhbHVlIiwiaXNfdXNlIiwiZ290b1BhZ2UiLCJpZCIsIlJvdXRlciIsInB1c2giLCJ1c2VkU2l6ZSIsImJ5dGVzVG9NQiIsInBhcnNlSW50IiwiX3NpemUiLCJoYW5kbGVUYWJsZUNoYW5nZSIsImZldGNoV2lsbEV4cHJpcmVkRGF0YSIsInNvcnRGaWVsZCIsImNvbHVtbktleSIsInNvcnRPcmRlciIsIm9yZGVyIiwiZmV0Y2hFeHByaXJlZERhdGEiLCJmZXRjaERhdGEiLCJvblNlYXJjaCIsIl9zZWFyY2giLCJfdG9kYXkiLCJtb21lbnQiLCJmb3JtYXQiLCJfd2lsbEV4cHJpZWQiLCJhZGREYXlzIiwiZm9ybWF0RGF0ZVdpdGhvdXRUaW1lIiwid2lsbEV4cHJpZWREYXRlU3RyaW5nIiwicGFyYW1zIiwiZ2V0IiwiYWRkYWN0aXZpdGllc0RhdGEiLCJyZXN1bHRzIiwidG90YWwiLCJ0b3RhbENvdW50IiwibXlDdXJyZW50RGF0ZSIsIkRhdGUiLCJfRGF0YSIsImhhbmRsZVN0YXRpc3RpY0NsaWNrIiwicHJvbWlzZVN0YXRlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJvbkNoYW5nZVNlYXJjaCIsInRhcmdldCIsImNvbG9yIiwiZm9udFNpemUiLCJyZWNvcmQiLCJvcmdhbml6YXRpb25fbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUNiLGNBQVEsU0FESztBQUViLGdCQUFVO0FBRkcsS0FQakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0ZBQWtCaEIsVUFBVSxHQUFHQSxVQUFVLENBQUMwRixpQkFBZCxHQUFrQyxFQUE5RCxxREFaRixDQXBDRixDQXpCRixDQURGO0FBa0ZEO0FBQ0Q7O0dBamtCd0I1SCxJO1VBcUJPc0MsaURBQVksQ0FBQ0MsZTs7O0tBckJwQnZDLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFkbWluXFxkYXNoYm9yYWQuanMuNTZjMjlkMzFkMWM1NTFkODM0M2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG4vKiB1dGlscyAqL1xyXG5pbXBvcnQgeyBhYnNvbHV0ZVVybCwgYWRkRGF5cywgYXBpSW5zdGFuY2UsIGJ5dGVzVG9NQiwgYnl0ZXNUb1NpemUsIGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUsIGNvbnZlcnREYXRldG9UaGFpRGF0ZSwgZm9ybWF0RGF0ZVdpdGhvdXRUaW1lIH0gZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS91dGlscyc7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgTGlrZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBDb2wsXHJcbiAgSW5wdXQsXHJcbiAgTW9kYWwsXHJcbiAgUm93LFxyXG4gIFN0YXRpc3RpYyxcclxuICBUYWJsZSxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIG5vdGlmaWNhdGlvblxyXG59IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCB7IFNlYXJjaCB9ID0gSW5wdXQ7XHJcbmNvbnN0IHsgVGV4dCwgVGl0bGUgfSA9IFR5cG9ncmFwaHk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG4gIGNvbnN0IHsgb3JpZ2luIH0gPSBwcm9wcztcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbcGFnaW5hdGlvbiwgc2V0UGFnaW5hdGlvbl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBjdXJyZW50OiAxLFxyXG4gICAgcGFnZVNpemU6IDEwLFxyXG4gIH0pXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbdG90YWxVc2VyLCBzZXRUb3RhbFVzZXJdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbdG90YWxXaWxsRXhwaXJlZCwgc2V0VG90YWxXaWxsRXhwaXJlZF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFt0b3RhbEV4cGlyZWQsIHNldFRvdGFsRXhwaXJlZF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFthcGlUeHQsIHNldEFwaVR4dF0gPSB1c2VTdGF0ZSgnZGFzaGJvcmFkLWFsbCcpXHJcbiAgY29uc3QgW3RvZGF5LCBzZXRUb2RheV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFt3aWxsRXhwcmllZCwgc2V0V2lsbEV4cHJpZWRdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbZXhwcmllZCwgc2V0RXhwcmllZF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFthcGlUeHRXaWxsRXhwcmllZCwgc2V0QXBpVHh0V2lsbEV4cHJpZWRdID0gdXNlU3RhdGUoJ2Rhc2hib3JhZC13aWxsLWV4cHJpZWQnKVxyXG4gIGNvbnN0IFt0eHRNZW51LCBzZXRUZXh0TWVudV0gPSB1c2VTdGF0ZSgn4Lic4Li54LmJ4LmD4LiK4LmJ4LiX4Lix4LmJ4LiH4Lir4Lih4LiUJylcclxuICBjb25zdCBbZGF0YURlbGV0ZSwgc2V0RGF0YURlbGV0ZV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFt2aXNpYmxlTW9kYWxEZWxldGUsIHNldFZpc2libGVNb2RhbERlbGV0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbYXBpLCBjb250ZXh0SG9sZGVyXSA9IG5vdGlmaWNhdGlvbi51c2VOb3RpZmljYXRpb24oKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHZhciBfZmlsdGVycyA9IFtdXHJcbiAgICBwYWdpbmF0aW9uLmZpbHRlcnMgPSBfZmlsdGVyc1xyXG4gICAgZmV0Y2goeyBwYWdpbmF0aW9uIH0pO1xyXG4gICAgZmV0Y2hXaWxsRXhwcmlyZWQoeyBwYWdpbmF0aW9uIH0pXHJcbiAgICBmZXRjaEV4cHJpcmVkKHsgcGFnaW5hdGlvbiB9KVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBzaG93TW9kYWwgPSAoZGF0YSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2RhdGEgZGVsZXRkJylcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBzZXREYXRhRGVsZXRlKGRhdGEpXHJcbiAgICBzZXRWaXNpYmxlTW9kYWxEZWxldGUodHJ1ZSlcclxuICB9O1xyXG5cclxuICBjb25zdCBoaWRlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRWaXNpYmxlTW9kYWxEZWxldGUoZmFsc2UpXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EZWxldGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnREVMRVRFJylcclxuICAgIC8vIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAvLyAgICdvcmdhbml6YXRpb25fbmFtZSc6IHZhbHVlLm9yZ2FuaXphdGlvbl9uYW1lLFxyXG4gICAgLy8gfVxyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSlcclxuICAgIGNvbnN0IHJlZ2lzdGVyRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZGVsZXRlKCdvcmdhbml6YXRpb24vJyArIGRhdGFEZWxldGUub3JnYW5pemF0aW9uX2lkLCB7fSk7XHJcbiAgICBpZiAocmVnaXN0ZXJEYXRhLmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICBvcGVuTm90aWZpY2F0aW9uU3VjY2VzcygpXHJcbiAgICAgIC8vIGZldGNoT3JnYW5pemF0aW9uRGF0YSgpO1xyXG4gICAgICBzZXRWaXNpYmxlTW9kYWxEZWxldGUoZmFsc2UpXHJcbiAgICAgIGZldGNoKHsgcGFnaW5hdGlvbiB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9wZW5Ob3RpZmljYXRpb25GYWlsKHJlZ2lzdGVyRGF0YS5kYXRhLm1lc3NhZ2UpXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25TdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgbm90aWZpY2F0aW9uLnN1Y2Nlc3Moe1xyXG4gICAgICBtZXNzYWdlOiBg4Lil4Lia4LiC4LmJ4Lit4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIYCxcclxuICAgICAgZGVzY3JpcHRpb246ICfguKXguJrguILguYnguK3guKHguLnguKXguKrguLPguYDguKPguYfguIgnLFxyXG4gICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuTm90aWZpY2F0aW9uRmFpbCA9IChtZXNzZ2FlKSA9PiB7XHJcbiAgICBub3RpZmljYXRpb24uZXJyb3Ioe1xyXG4gICAgICBtZXNzYWdlOiBg4Lie4Lia4Lib4Lix4LiN4Lir4Liy4Lij4Liw4Lir4Lin4LmI4Liy4LiH4LiB4Liy4Lij4Lil4Lia4LiC4LmJ4Lit4Lih4Li54LilYCxcclxuICAgICAgZGVzY3JpcHRpb246IG1lc3NnYWUsXHJcbiAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn4Lin4Lix4LiZ4LiX4Li14LmI4Liq4Lih4Lix4LiE4LijJyxcclxuICAgICAgZGF0YUluZGV4OiAnJyxcclxuICAgICAgc29ydGVyOiB0cnVlLFxyXG4gICAgICBrZXk6ICdkYXRlX2NyZWF0ZWQnLFxyXG4gICAgICByZW5kZXI6IChkYXRhKSA9PiA8PlxyXG4gICAgICAgIDxzcGFuID4ge2NvbnZlcnREYXRldG9UaGFpRGF0ZShjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lKGRhdGEuZGF0ZV9jcmVhdGVkKSl9IDwvc3Bhbj5cclxuICAgICAgPC8+LFxyXG4gICAgICAvLyByZW5kZXI6IG5hbWUgPT4gYCR7bmFtZS5maXJzdH0gJHtuYW1lLmxhc3R9YCxcclxuICAgICAgLy8gd2lkdGg6ICcyMCUnLFxyXG4gICAgICAvLyBkZWZhdWx0U29ydE9yZGVyOiAnZGVzY2VuZCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+C4p+C4seC4meC4l+C4teC5iOC4q+C4oeC4lOC4reC4suC4ouC4uCcsXHJcbiAgICAgIGRhdGFJbmRleDogJycsXHJcbiAgICAgIHNvcnRlcjogdHJ1ZSxcclxuICAgICAga2V5OiAnZGF0ZV9leHBpcmVkJyxcclxuICAgICAgcmVuZGVyOiAoZGF0YSkgPT4gPD5cclxuICAgICAgICA8c3BhbiA+IHtjb252ZXJ0RGF0ZXRvVGhhaURhdGUoY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZShkYXRhLmRhdGVfZXhwaXJlZCkpfSA8L3NwYW4+XHJcbiAgICAgIDwvPixcclxuICAgICAgLy8gcmVuZGVyOiBuYW1lID0+IGAke25hbWUuZmlyc3R9ICR7bmFtZS5sYXN0fWAsXHJcbiAgICAgIC8vIHdpZHRoOiAnMjAlJyxcclxuICAgICAgLy8gZGVmYXVsdFNvcnRPcmRlcjogJ2Rlc2NlbmQnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfguIrguLfguYjguK3guKvguJnguYjguKfguKLguIfguLLguJknLFxyXG4gICAgICBkYXRhSW5kZXg6ICdvcmdhbml6YXRpb25fbmFtZScsXHJcbiAgICAgIHNvcnRlcjogdHJ1ZSxcclxuICAgICAgLy8gcmVuZGVyOiBuYW1lID0+IGAke25hbWUuZmlyc3R9ICR7bmFtZS5sYXN0fWAsXHJcbiAgICAgIC8vIHdpZHRoOiAnMjAlJyxcclxuICAgICAgLy8gZGVmYXVsdFNvcnRPcmRlcjogJ2Rlc2NlbmQnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfguYPguIrguYnguJ7guLfguYnguJnguJfguLXguYgnLFxyXG4gICAgICBkYXRhSW5kZXg6ICcnLFxyXG4gICAgICBzb3J0ZXI6IHRydWUsXHJcbiAgICAgIGtleTogJ3NpemVfdXNlZCcsXHJcbiAgICAgIHJlbmRlcjogKGRhdGEpID0+IDw+XHJcbiAgICAgICAgPHNwYW4gPiB7Ynl0ZXNUb1NpemUoZGF0YS5zaXplX3VzZWQpfSAgPC9zcGFuPlxyXG4gICAgICA8Lz5cclxuICAgICAgLy8gcmVuZGVyOiBuYW1lID0+IGAke25hbWUuZmlyc3R9ICR7bmFtZS5sYXN0fWAsXHJcbiAgICAgIC8vIHdpZHRoOiAnMjAlJyxcclxuICAgICAgLy8gZGVmYXVsdFNvcnRPcmRlcjogJ2Rlc2NlbmQnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdwYWNrYWdlJyxcclxuICAgICAgZGF0YUluZGV4OiAnJyxcclxuICAgICAga2V5OiAncGFja2FnZScsXHJcbiAgICAgIHNvcnRlcjogdHJ1ZSxcclxuICAgICAgcmVuZGVyOiAoZGF0YSkgPT4gPD5cclxuICAgICAgICA8c3BhbiA+IHtkYXRhLnBhY2thZ2VzLm5hbWVfcGFja2FnZX0gPC9zcGFuPlxyXG4gICAgICA8Lz4sXHJcbiAgICAgIGZpbHRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnRnJlZSBQYWNrYWdlJyxcclxuICAgICAgICAgIHZhbHVlOiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ0Nvbm5lY3QgUGFja2FnZScsXHJcbiAgICAgICAgICB2YWx1ZTogMixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdTdGFuZGFyZCBQYWNrYWdlJyxcclxuICAgICAgICAgIHZhbHVlOiAzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ1ByZW1pdW0gUGFja2FnZScsXHJcbiAgICAgICAgICB2YWx1ZTogNCxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICAvLyByZW5kZXI6IG5hbWUgPT4gYCR7bmFtZS5maXJzdH0gJHtuYW1lLmxhc3R9YCxcclxuICAgICAgLy8gd2lkdGg6ICcyMCUnLFxyXG4gICAgICAvLyBkZWZhdWx0U29ydE9yZGVyOiAnZGVzY2VuZCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+C4quC4luC4suC4meC4sCcsXHJcbiAgICAgIGRhdGFJbmRleDogJycsXHJcbiAgICAgIGtleTogJ2lzX3VzZScsXHJcbiAgICAgIHNvcnRlcjogdHJ1ZSxcclxuICAgICAgcmVuZGVyOiAoZGF0YSkgPT4gPD5cclxuICAgICAgICA8c3BhbiA+IHtkYXRhLmlzX3VzZSA9PSAxID8gXCLguYPguIrguYnguIfguLLguJlcIiA6IFwi4LmE4Lih4LmI4LmD4LiK4LmJ4LiH4Liy4LiZXCJ9IDwvc3Bhbj5cclxuICAgICAgPC8+LFxyXG4gICAgICAvLyByZW5kZXI6IG5hbWUgPT4gYCR7bmFtZS5maXJzdH0gJHtuYW1lLmxhc3R9YCxcclxuICAgICAgLy8gd2lkdGg6ICcyMCUnLFxyXG4gICAgICAvLyBkZWZhdWx0U29ydE9yZGVyOiAnZGVzY2VuZCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJycsXHJcbiAgICAgIGRhdGFJbmRleDogJycsXHJcbiAgICAgIGtleTogJ3gnLFxyXG4gICAgICByZW5kZXI6IChkYXRhKSA9PiA8PlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaXplPXtcImRlZmF1bHRcIn0gb25DbGljaz17KCkgPT4gZ290b1BhZ2UoZGF0YS5vcmdhbml6YXRpb25faWQpfSA+IOC5geC4geC5ieC5hOC4giA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1sLTFcIiB0eXBlPVwiZGFuZ2VyXCIgb25DbGljaz17KCkgPT4gc2hvd01vZGFsKGRhdGEpfSBzaXplPXtcImRlZmF1bHRcIn0gPiDguKXguJogPC9CdXR0b24+XHJcbiAgICAgIDwvPixcclxuICAgIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgIHRpdGxlOiAnR2VuZGVyJyxcclxuICAgIC8vICAgZGF0YUluZGV4OiAnZ2VuZGVyJyxcclxuICAgIC8vICAgLy8gZmlsdGVyczogW1xyXG4gICAgLy8gICAvLyAgIHsgdGV4dDogJ01hbGUnLCB2YWx1ZTogJ21hbGUnIH0sXHJcbiAgICAvLyAgIC8vICAgeyB0ZXh0OiAnRmVtYWxlJywgdmFsdWU6ICdmZW1hbGUnIH0sXHJcbiAgICAvLyAgIC8vIF0sXHJcbiAgICAvLyAgIHdpZHRoOiAnMjAlJyxcclxuICAgIC8vIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgIHRpdGxlOiAnRW1haWwnLFxyXG4gICAgLy8gICBkYXRhSW5kZXg6ICdlbWFpbCcsXHJcbiAgICAvLyB9LFxyXG4gIF07XHJcbiAgY29uc3QgZ290b1BhZ2UgPSAoaWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50LW9yZ2FuaXphdGlvbi9vcmdhbml6YXRpb24vJyArIGlkKTtcclxuXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXNlZFNpemUgPSBhc3luYyAoc2l6ZV91c2VkKSA9PiB7XHJcbiAgICB2YXIgX3NpemUgPSBhd2FpdCBieXRlc1RvTUIocGFyc2VJbnQoc2l6ZV91c2VkKSlcclxuXHJcbiAgICByZXR1cm4gX3NpemVcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhYmxlQ2hhbmdlID0gKHBhZ2luYXRpb24sIGZpbHRlcnMsIHNvcnRlcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coc29ydGVyKVxyXG4gICAgc2V0UGFnaW5hdGlvbih7XHJcbiAgICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICBjdXJyZW50OiBwYWdpbmF0aW9uLmN1cnJlbnRcclxuICAgIH0pXHJcbiAgICBzZXRGaWx0ZXJzKGZpbHRlcnMucGFja2FnZSlcclxuXHJcbiAgICBzd2l0Y2ggKGFwaVR4dCkge1xyXG4gICAgICBjYXNlIFwiZGFzaGJvcmFkLXdpbGwtZXhwcmllZFwiOlxyXG4gICAgICAgIGZldGNoV2lsbEV4cHJpcmVkRGF0YSh7XHJcbiAgICAgICAgICBzb3J0RmllbGQ6IHNvcnRlci5jb2x1bW5LZXksXHJcbiAgICAgICAgICBzb3J0T3JkZXI6IHNvcnRlci5vcmRlcixcclxuICAgICAgICAgIHBhZ2luYXRpb24sXHJcbiAgICAgICAgICBmaWx0ZXJzOiBmaWx0ZXJzLnBhY2thZ2UsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImRhc2hib3JhZC1leHByaWVkXCI6XHJcbiAgICAgICAgZmV0Y2hFeHByaXJlZERhdGEoe1xyXG4gICAgICAgICAgc29ydEZpZWxkOiBzb3J0ZXIuY29sdW1uS2V5LFxyXG4gICAgICAgICAgc29ydE9yZGVyOiBzb3J0ZXIub3JkZXIsXHJcbiAgICAgICAgICBwYWdpbmF0aW9uLFxyXG4gICAgICAgICAgZmlsdGVyczogZmlsdGVycy5wYWNrYWdlLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgZmV0Y2hEYXRhKHtcclxuICAgICAgICAgIHNvcnRGaWVsZDogc29ydGVyLmNvbHVtbktleSxcclxuICAgICAgICAgIHNvcnRPcmRlcjogc29ydGVyLm9yZGVyLFxyXG4gICAgICAgICAgcGFnaW5hdGlvbixcclxuICAgICAgICAgIGZpbHRlcnM6IGZpbHRlcnMucGFja2FnZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TZWFyY2ggPSBhc3luYyAoX3NlYXJjaCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgc2V0U2VhcmNoKF9zZWFyY2gpXHJcbiAgICBzZXRQYWdpbmF0aW9uKHtcclxuICAgICAgcGFnZVNpemU6IHBhZ2luYXRpb24ucGFnZVNpemUsXHJcbiAgICAgIGN1cnJlbnQ6IDFcclxuICAgIH0pXHJcbiAgICB2YXIgX3RvZGF5ID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcbiAgICB2YXIgX3dpbGxFeHByaWVkID0gYWRkRGF5cyhfdG9kYXksIDMxKTtcclxuICAgIHZhciB3aWxsRXhwcmllZERhdGVTdHJpbmcgPSBhd2FpdCBmb3JtYXREYXRlV2l0aG91dFRpbWUoX3dpbGxFeHByaWVkKVxyXG5cclxuICAgIHN3aXRjaCAoYXBpVHh0KSB7XHJcblxyXG4gICAgICBjYXNlIFwiZGFzaGJvcmFkLXdpbGwtZXhwcmllZFwiOlxyXG4gICAgICAgIGZldGNoV2lsbEV4cHJpcmVkRGF0YSh7XHJcbiAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICAgICAgICBjdXJyZW50OiAxXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2VhcmNoOiBfc2VhcmNoXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJkYXNoYm9yYWQtZXhwcmllZFwiOlxyXG4gICAgICAgIGZldGNoRXhwcmlyZWREYXRhKHtcclxuICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgcGFnZVNpemU6IHBhZ2luYXRpb24ucGFnZVNpemUsXHJcbiAgICAgICAgICAgIGN1cnJlbnQ6IDFcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZWFyY2g6IF9zZWFyY2hcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgXCJkYXNoYm9yYWQtYWxsXCI6XHJcbiAgICAgICAgZmV0Y2hEYXRhKHtcclxuICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgcGFnZVNpemU6IHBhZ2luYXRpb24ucGFnZVNpemUsXHJcbiAgICAgICAgICAgIGN1cnJlbnQ6IDFcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZWFyY2g6IF9zZWFyY2hcclxuICAgICAgICB9KVxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgIH1cclxuICAgIC8vIGNvbnN0IGFkZGFjdGl2aXRpZXNEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAvLyAgICdvcmdhbml6YXRpb24vJyArIGFwaVR4dCArICc/cmVzdWx0cz0nICsgcGFnaW5hdGlvbi5wYWdlU2l6ZSArICcmcGFnZT0xJnNlYXJjaD0nICsgX3NlYXJjaCArIFwiJmZpbHRlcnM9XCIgKyBmaWx0ZXJzXHJcbiAgICAvLyApO1xyXG5cclxuICAgIC8vIHNldERhdGEoYWRkYWN0aXZpdGllc0RhdGEuZGF0YS5yZXN1bHRzKVxyXG4gICAgLy8gc2V0TG9hZGluZyhmYWxzZSlcclxuICB9XHJcbiAgY29uc3QgZmV0Y2ggPSBhc3luYyAocGFyYW1zID0ge30pID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGNvbnN0IGFkZGFjdGl2aXRpZXNEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICdvcmdhbml6YXRpb24vJyArIGFwaVR4dCArICc/cmVzdWx0cz0nICsgcGFyYW1zLnBhZ2luYXRpb24ucGFnZVNpemUgKyAnJnBhZ2U9JyArIHBhcmFtcy5wYWdpbmF0aW9uLmN1cnJlbnQgKyBcIiZzZWFyY2g9XCIgKyBzZWFyY2ggKyBcIiZzb3J0RmllbGQ9XCIgKyBwYXJhbXMuc29ydEZpZWxkICsgXCImc29ydE9yZGVyPVwiICsgcGFyYW1zLnNvcnRPcmRlciArIFwiJmZpbHRlcnM9XCIgKyBwYXJhbXMuZmlsdGVyc1xyXG4gICAgKTtcclxuXHJcbiAgICBzZXREYXRhKGFkZGFjdGl2aXRpZXNEYXRhLmRhdGEucmVzdWx0cylcclxuICAgIHNldFBhZ2luYXRpb24oe1xyXG4gICAgICAuLi5wYXJhbXMucGFnaW5hdGlvbixcclxuICAgICAgdG90YWw6IGFkZGFjdGl2aXRpZXNEYXRhLmRhdGEudG90YWxDb3VudCxcclxuICAgICAgLy8gMjAwIGlzIG1vY2sgZGF0YSwgeW91IHNob3VsZCByZWFkIGl0IGZyb20gc2VydmVyXHJcbiAgICAgIC8vIHRvdGFsOiBkYXRhLnRvdGFsQ291bnQsXHJcbiAgICB9KVxyXG4gICAgc2V0VG90YWxVc2VyKGFkZGFjdGl2aXRpZXNEYXRhLmRhdGEudG90YWxDb3VudClcclxuICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHBhcmFtcyA9IHt9KSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBjb25zdCBhZGRhY3Rpdml0aWVzRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAnb3JnYW5pemF0aW9uL2Rhc2hib3JhZC1hbGw/cmVzdWx0cz0nICsgcGFyYW1zLnBhZ2luYXRpb24ucGFnZVNpemUgKyAnJnBhZ2U9JyArIHBhcmFtcy5wYWdpbmF0aW9uLmN1cnJlbnQgKyBcIiZzZWFyY2g9XCIgKyAocGFyYW1zLnNlYXJjaCA/IHBhcmFtcy5zZWFyY2ggOiBcIlwiKSArIFwiJnNvcnRGaWVsZD1cIiArIHBhcmFtcy5zb3J0RmllbGQgKyBcIiZzb3J0T3JkZXI9XCIgKyBwYXJhbXMuc29ydE9yZGVyICsgXCImZmlsdGVycz1cIiArIHBhcmFtcy5maWx0ZXJzXHJcbiAgICApO1xyXG5cclxuICAgIHNldERhdGEoYWRkYWN0aXZpdGllc0RhdGEuZGF0YS5yZXN1bHRzKVxyXG4gICAgc2V0UGFnaW5hdGlvbih7XHJcbiAgICAgIC4uLnBhcmFtcy5wYWdpbmF0aW9uLFxyXG4gICAgICB0b3RhbDogYWRkYWN0aXZpdGllc0RhdGEuZGF0YS50b3RhbENvdW50LFxyXG4gICAgICAvLyAyMDAgaXMgbW9jayBkYXRhLCB5b3Ugc2hvdWxkIHJlYWQgaXQgZnJvbSBzZXJ2ZXJcclxuICAgICAgLy8gdG90YWw6IGRhdGEudG90YWxDb3VudCxcclxuICAgIH0pXHJcbiAgICAvLyBzZXRUb3RhbFVzZXIoYWRkYWN0aXZpdGllc0RhdGEuZGF0YS50b3RhbENvdW50KVxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaFdpbGxFeHByaXJlZCA9IGFzeW5jIChwYXJhbXMgPSB7fSkgPT4ge1xyXG4gICAgdmFyIG15Q3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFyIF90b2RheSA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gICAgLy8gdmFyIF90b2RheSA9IG15Q3VycmVudERhdGU7XHJcbiAgICBjb25zb2xlLmxvZyhcIl90b2RheVwiKVxyXG4gICAgY29uc29sZS5sb2coX3RvZGF5KVxyXG4gICAgdmFyIF93aWxsRXhwcmllZCA9IGFkZERheXMoX3RvZGF5LCAzMSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIl93aWxsRXhwcmllZFwiKVxyXG5cclxuICAgIHZhciB3aWxsRXhwcmllZERhdGVTdHJpbmcgPSBhd2FpdCBmb3JtYXREYXRlV2l0aG91dFRpbWUoX3dpbGxFeHByaWVkKVxyXG5cclxuICAgIHBhZ2luYXRpb24udG9kYXkgPSBfdG9kYXlcclxuICAgIHBhZ2luYXRpb24ud2lsbEV4cHJpZWQgPSB3aWxsRXhwcmllZERhdGVTdHJpbmdcclxuICAgIC8vIHNldEV4cHJpZWQoX2V4cHJpZWQpXHJcbiAgICBzZXRQYWdpbmF0aW9uKHtcclxuICAgICAgcGFnZVNpemU6IHBhZ2luYXRpb24ucGFnZVNpemUsXHJcbiAgICAgIGN1cnJlbnQ6IDFcclxuICAgIH0pXHJcbiAgICBjb25zdCBfRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAnb3JnYW5pemF0aW9uLycgKyBhcGlUeHRXaWxsRXhwcmllZCArICc/cmVzdWx0cz0nICsgcGFyYW1zLnBhZ2luYXRpb24ucGFnZVNpemUgKyBcIiZwYWdlPTEmc2VhcmNoPVwiICsgc2VhcmNoICsgXCImc29ydEZpZWxkPVwiICsgcGFyYW1zLnNvcnRGaWVsZCArIFwiJnNvcnRPcmRlcj1cIiArIHBhcmFtcy5zb3J0T3JkZXIgKyBcIiZmaWx0ZXJzPVwiICsgcGFyYW1zLmZpbHRlcnMgKyBcIiZ0b2RheT1cIiArIHBhcmFtcy5wYWdpbmF0aW9uLnRvZGF5ICsgXCImd2lsbEV4cHJpZWQ9XCIgKyBwYXJhbXMucGFnaW5hdGlvbi53aWxsRXhwcmllZFxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKFwiX0RhdGEgZmV0Y2hXaWxsRXhwcmlyZWRcIilcclxuICAgIGNvbnNvbGUubG9nKF9EYXRhKVxyXG5cclxuXHJcbiAgICBzZXRUb3RhbFdpbGxFeHBpcmVkKF9EYXRhLmRhdGEudG90YWxDb3VudClcclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaFdpbGxFeHByaXJlZERhdGEgPSBhc3luYyAocGFyYW1zID0ge30pID0+IHtcclxuICAgIHZhciBteUN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgIHZhciBfdG9kYXkgPSBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuICAgIC8vIHZhciBfdG9kYXkgPSBteUN1cnJlbnREYXRlO1xyXG4gICAgY29uc29sZS5sb2coXCJfdG9kYXlcIilcclxuICAgIGNvbnNvbGUubG9nKF90b2RheSlcclxuICAgIHZhciBfd2lsbEV4cHJpZWQgPSBhZGREYXlzKF90b2RheSwgMzEpO1xyXG4gICAgY29uc29sZS5sb2coXCJfd2lsbEV4cHJpZWRcIilcclxuXHJcbiAgICB2YXIgd2lsbEV4cHJpZWREYXRlU3RyaW5nID0gYXdhaXQgZm9ybWF0RGF0ZVdpdGhvdXRUaW1lKF93aWxsRXhwcmllZClcclxuXHJcbiAgICBwYXJhbXMucGFnaW5hdGlvbi50b2RheSA9IF90b2RheVxyXG4gICAgcGFyYW1zLnBhZ2luYXRpb24ud2lsbEV4cHJpZWQgPSB3aWxsRXhwcmllZERhdGVTdHJpbmdcclxuICAgIC8vIHNldEV4cHJpZWQoX2V4cHJpZWQpXHJcbiAgICBzZXRQYWdpbmF0aW9uKHtcclxuICAgICAgcGFnZVNpemU6IHBhZ2luYXRpb24ucGFnZVNpemUsXHJcbiAgICAgIGN1cnJlbnQ6IDFcclxuICAgIH0pXHJcbiAgICBjb25zdCBfRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAnb3JnYW5pemF0aW9uLycgKyBhcGlUeHRXaWxsRXhwcmllZCArICc/cmVzdWx0cz0nICsgcGFyYW1zLnBhZ2luYXRpb24ucGFnZVNpemUgKyBcIiZwYWdlPVwiICsgcGFyYW1zLnBhZ2luYXRpb24uY3VycmVudCArIFwiJnNlYXJjaD1cIiArIChwYXJhbXMuc2VhcmNoID8gcGFyYW1zLnNlYXJjaCA6IFwiXCIpICsgXCImc29ydEZpZWxkPVwiICsgcGFyYW1zLnNvcnRGaWVsZCArIFwiJnNvcnRPcmRlcj1cIiArIHBhcmFtcy5zb3J0T3JkZXIgKyBcIiZmaWx0ZXJzPVwiICsgcGFyYW1zLmZpbHRlcnMgKyBcIiZ0b2RheT1cIiArIHBhcmFtcy5wYWdpbmF0aW9uLnRvZGF5ICsgXCImd2lsbEV4cHJpZWQ9XCIgKyBwYXJhbXMucGFnaW5hdGlvbi53aWxsRXhwcmllZFxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKFwiX0RhdGEgZmV0Y2hXaWxsRXhwcmlyZWRcIilcclxuICAgIGNvbnNvbGUubG9nKF9EYXRhKVxyXG5cclxuICAgIHNldERhdGEoX0RhdGEuZGF0YS5yZXN1bHRzKVxyXG4gICAgc2V0UGFnaW5hdGlvbih7XHJcbiAgICAgIC4uLnBhcmFtcy5wYWdpbmF0aW9uLFxyXG4gICAgICB0b3RhbDogX0RhdGEuZGF0YS50b3RhbENvdW50LFxyXG4gICAgICAvLyAyMDAgaXMgbW9jayBkYXRhLCB5b3Ugc2hvdWxkIHJlYWQgaXQgZnJvbSBzZXJ2ZXJcclxuICAgICAgLy8gdG90YWw6IGRhdGEudG90YWxDb3VudCxcclxuICAgIH0pXHJcbiAgICAvLyBzZXRUb3RhbFdpbGxFeHBpcmVkKF9EYXRhLmRhdGEudG90YWxDb3VudClcclxuICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hFeHByaXJlZCA9IGFzeW5jIChwYXJhbXMgPSB7fSkgPT4ge1xyXG4gICAgdmFyIG15Q3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFyIF90b2RheSA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gICAgLy8gdmFyIF90b2RheSA9IG15Q3VycmVudERhdGU7XHJcbiAgICBjb25zb2xlLmxvZyhcIl90b2RheVwiKVxyXG4gICAgY29uc29sZS5sb2coX3RvZGF5KVxyXG4gICAgdmFyIF93aWxsRXhwcmllZCA9IGFkZERheXMoX3RvZGF5LCAzMSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIl93aWxsRXhwcmllZFwiKVxyXG5cclxuICAgIHZhciB3aWxsRXhwcmllZERhdGVTdHJpbmcgPSBhd2FpdCBmb3JtYXREYXRlV2l0aG91dFRpbWUoX3dpbGxFeHByaWVkKVxyXG5cclxuICAgIHBhcmFtcy5wYWdpbmF0aW9uLnRvZGF5ID0gX3RvZGF5XHJcbiAgICBwYXJhbXMucGFnaW5hdGlvbi53aWxsRXhwcmllZCA9IHdpbGxFeHByaWVkRGF0ZVN0cmluZ1xyXG4gICAgLy8gc2V0RXhwcmllZChfZXhwcmllZClcclxuICAgIHNldFBhZ2luYXRpb24oe1xyXG4gICAgICBwYWdlU2l6ZTogcGFnaW5hdGlvbi5wYWdlU2l6ZSxcclxuICAgICAgY3VycmVudDogMVxyXG4gICAgfSlcclxuICAgIGNvbnN0IF9EYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICdvcmdhbml6YXRpb24vZGFzaGJvcmFkLWV4cHJpZWQ/cmVzdWx0cz0nICsgcGFyYW1zLnBhZ2luYXRpb24ucGFnZVNpemUgKyBcIiZwYWdlPVwiICsgcGFyYW1zLnBhZ2luYXRpb24uY3VycmVudCArIFwiJnNlYXJjaD1cIiArIHNlYXJjaCArIFwiJnNvcnRGaWVsZD1cIiArIHBhcmFtcy5zb3J0RmllbGQgKyBcIiZzb3J0T3JkZXI9XCIgKyBwYXJhbXMuc29ydE9yZGVyICsgXCImZmlsdGVycz1cIiArIHBhcmFtcy5maWx0ZXJzICsgXCImdG9kYXk9XCIgKyBwYXJhbXMucGFnaW5hdGlvbi50b2RheSArIFwiJndpbGxFeHByaWVkPVwiICsgcGFyYW1zLnBhZ2luYXRpb24ud2lsbEV4cHJpZWRcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhcIl9EYXRhIGZldGNoV2lsbEV4cHJpcmVkXCIpXHJcbiAgICBjb25zb2xlLmxvZyhfRGF0YSlcclxuXHJcblxyXG4gICAgc2V0VG90YWxFeHBpcmVkKF9EYXRhLmRhdGEudG90YWxDb3VudClcclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaEV4cHJpcmVkRGF0YSA9IGFzeW5jIChwYXJhbXMgPSB7fSkgPT4ge1xyXG4gICAgdmFyIG15Q3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFyIF90b2RheSA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gICAgLy8gdmFyIF90b2RheSA9IG15Q3VycmVudERhdGU7XHJcbiAgICBjb25zb2xlLmxvZyhcIl90b2RheVwiKVxyXG4gICAgY29uc29sZS5sb2coX3RvZGF5KVxyXG4gICAgdmFyIF93aWxsRXhwcmllZCA9IGFkZERheXMoX3RvZGF5LCAzMSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIl93aWxsRXhwcmllZFwiKVxyXG5cclxuICAgIHZhciB3aWxsRXhwcmllZERhdGVTdHJpbmcgPSBhd2FpdCBmb3JtYXREYXRlV2l0aG91dFRpbWUoX3dpbGxFeHByaWVkKVxyXG5cclxuICAgIHBhcmFtcy5wYWdpbmF0aW9uLnRvZGF5ID0gX3RvZGF5XHJcbiAgICBwYXJhbXMucGFnaW5hdGlvbi53aWxsRXhwcmllZCA9IHdpbGxFeHByaWVkRGF0ZVN0cmluZ1xyXG4gICAgLy8gc2V0RXhwcmllZChfZXhwcmllZClcclxuICAgIHNldFBhZ2luYXRpb24oe1xyXG4gICAgICBwYWdlU2l6ZTogcGFnaW5hdGlvbi5wYWdlU2l6ZSxcclxuICAgICAgY3VycmVudDogMVxyXG4gICAgfSlcclxuICAgIGNvbnN0IF9EYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICdvcmdhbml6YXRpb24vZGFzaGJvcmFkLWV4cHJpZWQ/cmVzdWx0cz0nICsgcGFyYW1zLnBhZ2luYXRpb24ucGFnZVNpemUgKyBcIiZwYWdlPVwiICsgcGFyYW1zLnBhZ2luYXRpb24uY3VycmVudCArIFwiJnNlYXJjaD1cIiArIChwYXJhbXMuc2VhcmNoID8gcGFyYW1zLnNlYXJjaCA6IFwiXCIpICsgXCImc29ydEZpZWxkPVwiICsgcGFyYW1zLnNvcnRGaWVsZCArIFwiJnNvcnRPcmRlcj1cIiArIHBhcmFtcy5zb3J0T3JkZXIgKyBcIiZmaWx0ZXJzPVwiICsgcGFyYW1zLmZpbHRlcnMgKyBcIiZ0b2RheT1cIiArIHBhcmFtcy5wYWdpbmF0aW9uLnRvZGF5ICsgXCImd2lsbEV4cHJpZWQ9XCIgKyBwYXJhbXMucGFnaW5hdGlvbi53aWxsRXhwcmllZFxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKFwiX0RhdGEgZmV0Y2hXaWxsRXhwcmlyZWRcIilcclxuICAgIGNvbnNvbGUubG9nKF9EYXRhKVxyXG5cclxuICAgIHNldERhdGEoX0RhdGEuZGF0YS5yZXN1bHRzKVxyXG4gICAgc2V0UGFnaW5hdGlvbih7XHJcbiAgICAgIC4uLnBhcmFtcy5wYWdpbmF0aW9uLFxyXG4gICAgICB0b3RhbDogX0RhdGEuZGF0YS50b3RhbENvdW50LFxyXG4gICAgICAvLyAyMDAgaXMgbW9jayBkYXRhLCB5b3Ugc2hvdWxkIHJlYWQgaXQgZnJvbSBzZXJ2ZXJcclxuICAgICAgLy8gdG90YWw6IGRhdGEudG90YWxDb3VudCxcclxuICAgIH0pXHJcbiAgICAvLyBzZXRUb3RhbEV4cGlyZWQoX0RhdGEuZGF0YS50b3RhbENvdW50KVxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdGF0aXN0aWNDbGljayA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0U2VhcmNoKFwiXCIpXHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcblxyXG4gICAgICBjYXNlIFwid2lsbEV4cHJpZWRcIjpcclxuICAgICAgICBzZXRUZXh0TWVudShcIuC4iOC4s+C4meC4p+C4meC4nOC4ueC5ieC5g+C4iuC5ieC4h+C4suC4meC4l+C4teC5iOC4geC4s+C4peC4seC4h+C4iOC4sOC4q+C4oeC4lOC4reC4suC4ouC4uFwiKVxyXG4gICAgICAgIHNldEFwaVR4dChcImRhc2hib3JhZC13aWxsLWV4cHJpZWRcIilcclxuXHJcbiAgICAgICAgZmV0Y2hXaWxsRXhwcmlyZWREYXRhKHtcclxuICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgcGFnZVNpemU6IHBhZ2luYXRpb24ucGFnZVNpemUsXHJcbiAgICAgICAgICAgIGN1cnJlbnQ6IDFcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImV4cHJpZWRcIjpcclxuICAgICAgICBzZXRUZXh0TWVudShcIuC4iOC4s+C4meC4p+C4meC4nOC4ueC5ieC5g+C4iuC5ieC4h+C4suC4meC4l+C4teC5iOC4q+C4oeC4lOC4reC4suC4ouC4uFwiKVxyXG4gICAgICAgIHNldEFwaVR4dChcImRhc2hib3JhZC1leHByaWVkXCIpXHJcbiAgICAgICAgZmV0Y2hFeHByaXJlZERhdGEoe1xyXG4gICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBwYWdlU2l6ZTogcGFnaW5hdGlvbi5wYWdlU2l6ZSxcclxuICAgICAgICAgICAgY3VycmVudDogMVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBzZXRUZXh0TWVudShcIuC4iOC4s+C4meC4p+C4meC4nOC4ueC5ieC5g+C4iuC5ieC4h+C4suC4meC4l+C4seC5ieC4h+C4q+C4oeC4lFwiKVxyXG4gICAgICAgIHNldEFwaVR4dChcImRhc2hib3JhZC1hbGxcIilcclxuICAgICAgICBmZXRjaERhdGEoe1xyXG4gICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBwYWdlU2l6ZTogcGFnaW5hdGlvbi5wYWdlU2l6ZSxcclxuICAgICAgICAgICAgY3VycmVudDogMVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgY29uc3QgcHJvbWlzZVN0YXRlID0gYXN5bmMgdmFsdWUgPT5cclxuICAgIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0QXBpVHh0KHZhbHVlLCByZXNvbHZlKSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlU2VhcmNoID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgIHNldFNlYXJjaCh2YWx1ZS50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Um93PlxyXG5cclxuICAgICAgICA8Q29sIHNwYW49ezR9IGNsYXNzTmFtZT1cImxnOmNvbC0zIG1kOmNvbC0xMiBwLTQgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIGJnLWdyZWVuLTYwMCBtci00IG10LTJcIj5cclxuICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlU3RhdGlzdGljQ2xpY2soJ2FsbCcpIH19PiA8U3RhdGlzdGljIHRpdGxlPVwi4LiI4Liz4LiZ4Lin4LiZ4Lic4Li54LmJ4LmD4LiK4LmJ4LiH4Liy4LiZ4LiX4Lix4LmJ4LiH4Lir4Lih4LiUXCIgdmFsdWU9e3RvdGFsVXNlcn0gcHJlZml4PXs8TGlrZU91dGxpbmVkIC8+fSB2YWx1ZVN0eWxlPXt7XHJcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjJyZW1cIlxyXG4gICAgICAgICAgfX0gLz48L2E+XHJcbiAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgIDxDb2wgc3Bhbj17NH0gY2xhc3NOYW1lPVwibGc6Y29sLTMgbWQ6Y29sLTEyIHAtNCByb3VuZGVkLWxnIHRleHQtd2hpdGUgYmcteWVsbG93LTYwMCBtci00IG10LTJcIj5cclxuICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlU3RhdGlzdGljQ2xpY2soJ3dpbGxFeHByaWVkJykgfX0+PFN0YXRpc3RpYyB0aXRsZT1cIuC4iOC4s+C4meC4p+C4meC4nOC4ueC5ieC5g+C4iuC5ieC4h+C4suC4meC4l+C4teC5iOC4geC4s+C4peC4seC4h+C4iOC4sOC4q+C4oeC4lOC4reC4suC4ouC4uFwiIHZhbHVlPXt0b3RhbFdpbGxFeHBpcmVkfSBwcmVmaXg9ezxMaWtlT3V0bGluZWQgLz59IHZhbHVlU3R5bGU9e3tcclxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMnJlbVwiXHJcbiAgICAgICAgICB9fSAvPjwvYT5cclxuICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgPENvbCBzcGFuPXs0fSBjbGFzc05hbWU9XCJsZzpjb2wtMyBtZDpjb2wtMTIgcC00IHJvdW5kZWQtbGcgdGV4dC13aGl0ZSBiZy1yZWQtNjAwIG1yLTQgbXQtMlwiPlxyXG4gICAgICAgICAgPGEgb25DbGljaz17KCkgPT4geyBoYW5kbGVTdGF0aXN0aWNDbGljaygnZXhwcmllZCcpIH19PiA8U3RhdGlzdGljIHRpdGxlPVwi4LiI4Liz4LiZ4Lin4LiZ4Lic4Li54LmJ4LmD4LiK4LmJ4LiH4Liy4LiZ4LiX4Li14LmI4Lir4Lih4LiU4Lit4Liy4Lii4Li4XCIgdmFsdWU9e3RvdGFsRXhwaXJlZH0gcHJlZml4PXs8TGlrZU91dGxpbmVkIC8+fSB2YWx1ZVN0eWxlPXt7XHJcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjJyZW1cIlxyXG4gICAgICAgICAgfX0gLz48L2E+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG5cclxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtNFwiPlxyXG5cclxuICAgICAgICA8Um93ID5cclxuICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiIHBiLTFcIj5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPFRpdGxlIGxldmVsPXsyfSBjbGFzc05hbWU9XCJtci0yXCI+e3R4dE1lbnV9PC9UaXRsZT5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBqdXN0aWZ5LWl0ZW1zLWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaCBwbGFjZWhvbGRlcj1cIuC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4nOC4ueC5ieC5g+C4iuC5ieC4h+C4suC4mVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IG9uQ2hhbmdlU2VhcmNoKHZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgb25TZWFyY2g9e29uU2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICBlbnRlckJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBhbGxvd0NsZWFyXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cclxuICAgICAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgICAgIHJvd0tleT17cmVjb3JkID0+IHJlY29yZC5vcmdhbml6YXRpb25faWR9XHJcbiAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YX1cclxuICAgICAgICAgICAgICBwYWdpbmF0aW9uPXtwYWdpbmF0aW9ufVxyXG4gICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRhYmxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgdGl0bGU9XCLguITguLjguJPguJXguYnguK3guIfguIHguLLguKPguKXguJrguILguYnguK3guKHguLnguKXguKvguKPguLfguK3guYTguKHguYg/XCJcclxuICAgICAgICAgIHZpc2libGU9e3Zpc2libGVNb2RhbERlbGV0ZX1cclxuICAgICAgICAgIG9uT2s9e29uRGVsZXRlfVxyXG4gICAgICAgICAgb25DYW5jZWw9e2hpZGVNb2RhbH1cclxuICAgICAgICAgIG9rVGV4dD1cIuC4peC4mlwiXHJcbiAgICAgICAgICBjYW5jZWxUZXh0PVwi4Lii4LiB4LmA4Lil4Li04LiBXCJcclxuICAgICAgICAgIG9rQnV0dG9uUHJvcHM9e3tcclxuICAgICAgICAgICAgJ3R5cGUnOiBcInByaW1hcnlcIixcclxuICAgICAgICAgICAgJ2Rhbmdlcic6IHRydWVcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHA+4LiE4Li44LiT4LiV4LmJ4Lit4LiH4LiB4Liy4Lij4Lil4LiaIFwie2RhdGFEZWxldGUgPyBkYXRhRGVsZXRlLm9yZ2FuaXphdGlvbl9uYW1lIDogXCJcIn1cIiDguKvguKPguLfguK3guYTguKHguYg/ICA8L3A+XHJcblxyXG4gICAgICAgIDwvTW9kYWw+XHJcblxyXG5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbi8qIGdldFNlcnZlclNpZGVQcm9wcyAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHJlcSB9ID0gY29udGV4dDtcclxuICBjb25zdCB7IG9yaWdpbiB9ID0gYWJzb2x1dGVVcmwocmVxKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG9yaWdpbixcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9