webpackHotUpdate("static\\development\\pages\\admin\\setting\\profile.js",{

/***/ "./pages/admin/setting/profile/index.js":
/*!**********************************************!*\
  !*** ./pages/admin/setting/profile/index.js ***!
  \**********************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/layout/LayoutAdmin */ "./components/layout/LayoutAdmin.jsx");
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../middleware/utils */ "./middleware/utils.js");





var _jsxFileName = "D:\\govermentlt\\pages\\admin\\setting\\profile\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;




 // import UserNav from '../components/navigation/User';


/* components */


/* utils */


var JoditEditor = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! jodit-react */ "./node_modules/jodit-react/build/jodit-react.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! jodit-react */ "./node_modules/jodit-react/build/jodit-react.js")];
    },
    modules: ["jodit-react"]
  }
});
_c2 = JoditEditor;
var Text = antd__WEBPACK_IMPORTED_MODULE_5__["Typography"].Text,
    Title = antd__WEBPACK_IMPORTED_MODULE_5__["Typography"].Title;
var Option = antd__WEBPACK_IMPORTED_MODULE_5__["Select"].Option;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_5__["Input"].TextArea;

var config = __webpack_require__(/*! ../../config */ "./pages/admin/config.js");

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
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  var profileId = router.query.profileId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(null),
      provinces = _useState[0],
      setProvinces = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(null),
      districts = _useState2[0],
      setDistricts = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(null),
      subDistricts = _useState3[0],
      setSubDistricts = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(null),
      previewImageLogo = _useState4[0],
      setPreviewImageLogo = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(null),
      imageLandingPageLogo = _useState5[0],
      setImageLandingPageLogo = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false),
      previewVisibleLogo = _useState6[0],
      setPreviewVisibleLogo = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false),
      logo = _useState7[0],
      setLogo = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])([]),
      fields = _useState8[0],
      setFields = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(null),
      organizationData = _useState9[0],
      setOrganizationData = _useState9[1];

  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {
    fetchOrganizationData();
    fetchProvincesData();
  }, []);

  function onSubmitHandler(_x) {
    return _onSubmitHandler.apply(this, arguments);
  }

  function _onSubmitHandler() {
    _onSubmitHandler = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee11(value) {
      var data, organizationData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              data = {
                organization_id: user.organization_id,
                organization_name: value.organization_name,
                organization_name_eng: value.organization_name_eng,
                organization_logo: imageLandingPageLogo,
                organization_address: value.organization_address,
                organization_sub_district_id: value.subDistrictSelected,
                organization_email: value.organization_email,
                organization_email_alert: value.organization_email_alert,
                organization_phone: value.organization_phone,
                organization_fax: value.organization_fax,
                social_fb_pageid: value.social_fb_pageid,
                rss: value.rss,
                person01_name: value.person01_name,
                person01_position: value.person01_position,
                person01_image: imageLandingPagePerson1,
                person01_phone: value.person01_phone,
                person02_name: value.person02_name,
                person02_position: value.person02_position,
                person02_image: imageLandingPagePerson2,
                person02_phone: value.person02_phone,
                person03_name: value.person03_name,
                person03_position: value.person03_position,
                person03_image: imageLandingPagePerson3,
                person03_phone: value.person03_phone
              };
              console.log(data);
              _context11.next = 4;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_11__["apiInstance"])().put('/profile', data);

            case 4:
              organizationData = _context11.sent;

              if (organizationData.data.status == 200) {
                openNotificationRegisterSuccess();
                fetchOrganizationData();
              } else {
                openNotificationRegisterFail(organizationData.data.message);
              }

            case 6:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));
    return _onSubmitHandler.apply(this, arguments);
  }

  var openNotificationRegisterSuccess = function openNotificationRegisterSuccess() {
    antd__WEBPACK_IMPORTED_MODULE_5__["notification"].success({
      message: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
      description: 'บันทึกข้อมูลสำเร็จ',
      placement: 'topRight'
    });
  };

  var openNotificationRegisterFail = function openNotificationRegisterFail(messgae) {
    antd__WEBPACK_IMPORTED_MODULE_5__["notification"].error({
      message: "\u0E1E\u0E1A\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25",
      description: messgae,
      placement: 'topRight'
    });
  };

  var Dragger = antd__WEBPACK_IMPORTED_MODULE_5__["Upload"].Dragger;

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_5__["Form"].useForm(),
      _Form$useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var onReset = function onReset() {
    fetchDistrictsData(organizationData.sub_districts ? organizationData.sub_districts.provinces.province_id : 0);
    fetchSubDistrictData(organizationData.sub_districts ? organizationData.sub_districts.districts.district_id : 0);
    setFields([{
      name: ['organization_logo'],
      value: organizationData.organization_logo
    }, {
      name: ['organization_name'],
      value: organizationData.organization_name
    }, {
      name: ['organization_name_eng'],
      value: organizationData.organization_name_eng
    }, {
      name: ['organization_phone'],
      value: organizationData.organization_phone
    }, {
      name: ['organization_email'],
      value: organizationData.organization_email
    }, {
      name: ['organization_fax'],
      value: organizationData.organization_fax
    }, {
      name: ['organization_address'],
      value: organizationData.organization_address
    }, {
      name: ['provincesSelected'],
      value: organizationData.sub_districts ? organizationData.sub_districts.provinces.province_id : "0"
    }, {
      name: ['districtSelected'],
      value: organizationData.sub_districts ? organizationData.sub_districts.districts.district_id : "0"
    }, {
      name: ['subDistrictSelected'],
      value: organizationData.sub_districts ? organizationData.sub_districts.sub_district_id : "0"
    }, {
      name: ['social_fb_pageid'],
      value: organizationData.social_fb_pageid
    }, {
      name: ['organization_email_alert'],
      value: organizationData.organization_email_alert
    }, {
      name: ['rss'],
      value: organizationData.rss
    }, {
      name: ['person01_name'],
      value: organizationData.person01_name
    }, {
      name: ['person01_position'],
      value: organizationData.person01_position
    }, {
      name: ['person01_phone'],
      value: organizationData.person01_phone
    }, {
      name: ['person02_name'],
      value: organizationData.person02_name
    }, {
      name: ['person02_position'],
      value: organizationData.person02_position
    }, {
      name: ['person02_phone'],
      value: organizationData.person02_phone
    }, {
      name: ['person03_name'],
      value: organizationData.person03_name
    }, {
      name: ['person03_position'],
      value: organizationData.person03_position
    }, {
      name: ['person03_phone'],
      value: organizationData.person03_phone
    }]);
    setPreviewImageLogo("..\\..\\..\\uploads\\c-" + user.organization_id + '\\organization\\' + organizationData.organization_logo);
    setPreviewVisibleLogo(true);
    setImageLandingPageLogo(organizationData.organization_logo);
    setPreviewImagePerson1("..\\..\\..\\uploads\\c-" + user.organization_id + '\\organization\\' + organizationData.person01_image);
    setPreviewVisiblePerson1(true);
    setImageLandingPagePerson1(organizationData.person01_image);
    setPreviewImagePerson2("..\\..\\..\\uploads\\c-" + user.organization_id + '\\organization\\' + organizationData.person02_image);
    setPreviewVisiblePerson2(true);
    setImageLandingPagePerson2(organizationData.person02_image);
    setPreviewImagePerson3("..\\..\\..\\uploads\\c-" + user.organization_id + '\\organization\\' + organizationData.person03_image);
    setPreviewVisiblePerson3(true);
    setImageLandingPagePerson3(organizationData.person03_image);
  };

  var fetchOrganizationData = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var _organizationData;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_11__["apiInstance"])().get('organization/' + (user ? user.organization_id : 0));

            case 2:
              _organizationData = _context.sent;
              // console.log(_organizationData.data.organization)
              setOrganizationData(_organizationData.data.organization);
              fetchDistrictsData(_organizationData.data.organization.sub_districts ? _organizationData.data.organization.sub_districts.provinces.province_id : 0);
              fetchSubDistrictData(_organizationData.data.organization.sub_districts ? _organizationData.data.organization.sub_districts.districts.district_id : 0);
              setPreviewImage("..\\..\\..\\uploads\\c-" + user.organization_id + '\\organization\\' + _organizationData.data.organization.organization_logo);
              setPreviewVisible(true);
              setImageLandingPage(_organizationData.data.organization.organization_logo); // if (_organizationData.data.organization.organization_logo) {
              //   setPreviewImageLogo(
              //     '..\\..\\..\\uploads\\c-' +
              //     user.organization_id +
              //     '\\organization\\' +
              //     _organizationData.data.organization.organization_logo,
              //   )
              //   setPreviewVisibleLogo(true)
              // }
              // if (_organizationData.data.organization.person01_image) {
              //   setPreviewImagePerson1('..\\..\\..\\uploads\\c-' +
              //     user.organization_id +
              //     '\\organization\\' +
              //     _organizationData.data.organization.person01_image)
              //   setPreviewVisiblePerson1(true);
              // }
              // if (_organizationData.data.organization.person02_image) {
              //   setPreviewImagePerson2('..\\..\\..\\uploads\\c-' +
              //     user.organization_id +
              //     '\\organization\\' +
              //     _organizationData.data.organization.person02_image)
              //   setPreviewVisiblePerson2(true);
              // }
              // if (_organizationData.data.organization.person03_image) {
              //   setPreviewImagePerson3('..\\..\\..\\uploads\\c-' +
              //     user.organization_id +
              //     '\\organization\\' +
              //     _organizationData.data.organization.person03_image)
              //   setPreviewVisiblePerson3(true);
              // }
              // setPreviewImageLogo('..\\..\\..\\uploads\\c-' + user.organization_id + '\\organization\\' + _organizationData.data.organization.organization_logo);
              // setPreviewVisibleLogo(true);
              // setImageLandingPageLogo(_organizationData.data.organization.organization_logo);

              setFields([// {
              //   name: ['organization_logo'],
              //   value: _organizationData.data.organization.organization_logo
              // },
              {
                name: ['organization_name'],
                value: _organizationData.data.organization.organization_name ? _organizationData.data.organization.organization_name : ""
              }, {
                name: ['organization_name_eng'],
                value: _organizationData.data.organization.organization_name_eng ? _organizationData.data.organization.organization_name_eng : ""
              }, {
                name: ['organization_phone'],
                value: _organizationData.data.organization.organization_phone ? _organizationData.data.organization.organization_phone : ""
              }, {
                name: ['organization_email'],
                value: _organizationData.data.organization.organization_email ? _organizationData.data.organization.organization_email : ""
              }, {
                name: ['provincesSelected'],
                value: _organizationData.data.organization.sub_districts ? _organizationData.data.organization.sub_districts.provinces.province_id : "0"
              }, {
                name: ['districtSelected'],
                value: _organizationData.data.organization.sub_districts ? _organizationData.data.organization.sub_districts.districts.district_id : "0"
              }, {
                name: ['subDistrictSelected'],
                value: _organizationData.data.organization.sub_districts ? _organizationData.data.organization.sub_districts.sub_district_id : "0"
              }, {
                name: ['organization_fax'],
                value: _organizationData.data.organization.organization_fax ? _organizationData.data.organization.organization_fax : ""
              }, {
                name: ['thumbnail_link'],
                value: _organizationData.data.organization.thumbnail_link ? _organizationData.data.organization.thumbnail_link : ""
              }, {
                name: ['organization_address'],
                value: _organizationData.data.organization.organization_address ? _organizationData.data.organization.organization_address : ""
              }, {
                name: ['organization_email_alert'],
                value: _organizationData.data.organization.organization_email_alert ? _organizationData.data.organization.organization_email_alert : ""
              }, {
                name: ['social_fb_pageid'],
                value: _organizationData.data.organization.social_fb_pageid ? _organizationData.data.organization.social_fb_pageid : ""
              }, {
                name: ['rss'],
                value: _organizationData.data.organization.rss ? _organizationData.data.organization.rss : ""
              }, {
                name: ['person01_name'],
                value: _organizationData.data.organization.person01_name ? _organizationData.data.organization.person01_name : ""
              }, {
                name: ['person01_position'],
                value: _organizationData.data.organization.person01_position ? _organizationData.data.organization.person01_position : ""
              }, {
                name: ['person01_phone'],
                value: _organizationData.data.organization.person01_phone ? _organizationData.data.organization.person01_phone : ""
              }, {
                name: ['person02_name'],
                value: _organizationData.data.organization.person02_name ? _organizationData.data.organization.person02_name : ""
              }, {
                name: ['person02_position'],
                value: _organizationData.data.organization.person02_position ? _organizationData.data.organization.person02_position : ""
              }, {
                name: ['person02_phone'],
                value: _organizationData.data.organization.person02_phone ? _organizationData.data.organization.person02_phone : ""
              }, {
                name: ['person03_name'],
                value: _organizationData.data.organization.person03_name ? _organizationData.data.organization.person03_name : ""
              }, {
                name: ['person03_position'],
                value: _organizationData.data.organization.person03_position ? _organizationData.data.organization.person03_position : ""
              }, {
                name: ['person03_phone'],
                value: _organizationData.data.organization.person03_phone ? _organizationData.data.organization.person03_phone : ""
              }]);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchOrganizationData() {
      return _ref.apply(this, arguments);
    };
  }();

  var fetchProvincesData = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var _provincesData;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_11__["apiInstance"])().get('province');

            case 2:
              _provincesData = _context2.sent;
              setProvinces(_provincesData.data.data); // console.log(_provincesData.data.data)

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function fetchProvincesData() {
      return _ref2.apply(this, arguments);
    };
  }();

  var fetchDistrictsData = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(province_id) {
      var _districtsData;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_11__["apiInstance"])().get('district/' + province_id);

            case 2:
              _districtsData = _context3.sent;
              setDistricts(_districtsData.data.data); // console.log(_districtsData.data.data)

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function fetchDistrictsData(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var fetchSubDistrictData = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(subDistrictID) {
      var _subDistrictsData;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_11__["apiInstance"])().get('sub-district/' + subDistrictID);

            case 2:
              _subDistrictsData = _context4.sent;
              setSubDistricts(_subDistrictsData.data.data); // console.log(_subDistrictsData.data.data)

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function fetchSubDistrictData(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleProvincesChange = /*#__PURE__*/function () {
    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(value) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              // console.log(value);
              setFields([{
                name: ['provincesSelected'],
                value: value
              }, {
                name: ['districtSelected'],
                value: "0"
              }, {
                name: ['subDistrictSelected'],
                value: "0"
              }]);
              fetchDistrictsData(value);
              setSubDistricts([]);

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function handleProvincesChange(_x4) {
      return _ref5.apply(this, arguments);
    };
  }();

  var handleDistrictChange = /*#__PURE__*/function () {
    var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(value) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              setFields([{
                name: ['districtSelected'],
                value: value
              }, {
                name: ['subDistrictSelected'],
                value: "0"
              }]);
              fetchSubDistrictData(value);

            case 2:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function handleDistrictChange(_x5) {
      return _ref6.apply(this, arguments);
    };
  }();

  var imageUploadpropsLogo = {
    name: 'file',
    multiple: false,
    listType: 'text',
    maxCount: 1,
    action: "/api/upload/organization",
    preview: false,
    customRequest: function customRequest(options) {
      var data = new FormData();
      data.append('file', options.file);
      data.append('id', user.type_user == 1 ? "admin" : user.organization_id);
      var config = {
        "headers": {
          "content-type": 'multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s'
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(options.action, data, config).then(function (res) {
        setImageLandingPageLogo(res.data.data.list[0]._name);
        options.onSuccess(res.data, options.file);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    onChange: function onChange(info) {
      return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7() {
        var status;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                status = info.file.status;
                _context7.t0 = info.file.status;
                _context7.next = _context7.t0 === "done" ? 4 : 11;
                break;

              case 4:
                if (!(!info.file.url && !info.file.preview)) {
                  _context7.next = 8;
                  break;
                }

                _context7.next = 7;
                return getBase64(info.file.originFileObj);

              case 7:
                info.file.preview = _context7.sent;

              case 8:
                setPreviewImageLogo(info.file.url || info.file.preview);
                setPreviewVisibleLogo(true);
                return _context7.abrupt("break", 11);

              case 11:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    onRemove: function onRemove(info) {
      console.log("onRemove");
      console.log(info);
      resetImagePreview();
    }
  };
  var imageUploadpropsPerson1 = {
    name: 'file',
    multiple: false,
    listType: 'text',
    maxCount: 1,
    action: "/api/upload/organization",
    preview: false,
    customRequest: function customRequest(options) {
      var data = new FormData();
      data.append('file', options.file);
      data.append('id', user.type_user == 1 ? "admin" : user.organization_id);
      var config = {
        "headers": {
          "content-type": 'multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s'
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(options.action, data, config).then(function (res) {
        setImageLandingPagePerson1(res.data.data.list[0]._name);
        options.onSuccess(res.data, options.file);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    onChange: function onChange(info) {
      return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8() {
        var status;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                status = info.file.status;
                _context8.t0 = info.file.status;
                _context8.next = _context8.t0 === "done" ? 4 : 11;
                break;

              case 4:
                if (!(!info.file.url && !info.file.preview)) {
                  _context8.next = 8;
                  break;
                }

                _context8.next = 7;
                return getBase64(info.file.originFileObj);

              case 7:
                info.file.preview = _context8.sent;

              case 8:
                setPreviewImagePerson1(info.file.url || info.file.preview);
                setPreviewVisiblePerson1(true);
                return _context8.abrupt("break", 11);

              case 11:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    onRemove: function onRemove(info) {
      console.log("onRemove");
      console.log(info);
      resetImagePreview();
    }
  };
  var imageUploadpropsPerson2 = {
    name: 'file',
    multiple: false,
    listType: 'text',
    maxCount: 1,
    action: "/api/upload/organization",
    preview: false,
    customRequest: function customRequest(options) {
      var data = new FormData();
      data.append('file', options.file);
      data.append('id', user.type_user == 1 ? "admin" : user.organization_id);
      var config = {
        "headers": {
          "content-type": 'multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s'
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(options.action, data, config).then(function (res) {
        setImageLandingPagePerson2(res.data.data.list[0]._name);
        options.onSuccess(res.data, options.file);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    onChange: function onChange(info) {
      return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee9() {
        var status;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                status = info.file.status;
                _context9.t0 = info.file.status;
                _context9.next = _context9.t0 === "done" ? 4 : 11;
                break;

              case 4:
                if (!(!info.file.url && !info.file.preview)) {
                  _context9.next = 8;
                  break;
                }

                _context9.next = 7;
                return getBase64(info.file.originFileObj);

              case 7:
                info.file.preview = _context9.sent;

              case 8:
                setPreviewImagePerson2(info.file.url || info.file.preview);
                setPreviewVisiblePerson2(true);
                return _context9.abrupt("break", 11);

              case 11:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    onRemove: function onRemove(info) {
      console.log("onRemove");
      console.log(info);
      resetImagePreview();
    }
  };
  var imageUploadpropsPerson3 = {
    name: 'file',
    multiple: false,
    listType: 'text',
    maxCount: 1,
    action: "/api/upload/organization",
    preview: false,
    customRequest: function customRequest(options) {
      var data = new FormData();
      data.append('file', options.file);
      data.append('id', user.type_user == 1 ? "admin" : user.organization_id);
      var config = {
        "headers": {
          "content-type": 'multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s'
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(options.action, data, config).then(function (res) {
        setImageLandingPagePerson3(res.data.data.list[0]._name);
        options.onSuccess(res.data, options.file);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    onChange: function onChange(info) {
      return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee10() {
        var status;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                status = info.file.status;
                _context10.t0 = info.file.status;
                _context10.next = _context10.t0 === "done" ? 4 : 11;
                break;

              case 4:
                if (!(!info.file.url && !info.file.preview)) {
                  _context10.next = 8;
                  break;
                }

                _context10.next = 7;
                return getBase64(info.file.originFileObj);

              case 7:
                info.file.preview = _context10.sent;

              case 8:
                setPreviewImagePerson3(info.file.url || info.file.preview);
                setPreviewVisiblePerson3(true);
                return _context10.abrupt("break", 11);

              case 11:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    },
    onRemove: function onRemove(info) {
      console.log("onRemove");
      console.log(info);
      resetImagePreview();
    }
  };

  var resetImagePreview = function resetImagePreview() {
    setPreviewVisibleLogo(false);
    setPreviewVisiblePerson1(false);
    setPreviewVisiblePerson2(false);
    setPreviewVisiblePerson3(false);
    setPreviewImageLogo(null);
    setPreviewImagePerson1(null);
    setPreviewImagePerson2(null);
    setPreviewImagePerson3(null);
  };

  function getBase64(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function () {
        return resolve(reader.result);
      };

      reader.onerror = function (error) {
        return reject(error);
      };
    });
  }

  return __jsx(_components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Government - Admin management",
    url: origin,
    origin: origin // user={login}
    ,
    indexSubMenu: "6",
    indexMenu: "sub-6-0",
    titlePage: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23",
    _routes: [{
      path: '/admin/dashborad',
      breadcrumbName: 'หน้าหลัก'
    }, {
      path: '/admin/setting/profile',
      breadcrumbName: 'ข้อมูลองค์กร'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 643,
========
      lineNumber: 649,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 5
    }
  }, contextHolder, __jsx("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 663,
========
      lineNumber: 669,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "w-5/6 lg:w-full mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 667,
========
      lineNumber: 673,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    name: "basic",
    layout: "vertical",
    onFinish: onSubmitHandler,
    requiredMark: true,
    form: form,
    fields: fields,
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 668,
========
      lineNumber: 674,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 676,
========
      lineNumber: 682,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inline-flex lg:w-1/6  pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 677,
========
      lineNumber: 683,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    name: "organization_logo",
    className: "block text-gray-700 text-sm font-bold mb-2 w-auto h-auto text-center w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกเลือกภาพ Logo องค์กร',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 678,
========
      lineNumber: 684,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 15
    }
  }, __jsx(Dragger, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    maxCount: 1 // listType="picture"
    ,
    accept: ".jpg, .jpeg, .png"
  }, imageUploadpropsLogo, {
    className: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 689,
========
      lineNumber: 695,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 17
    }
  }), previewVisibleLogo && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Image"] // width={200}
  , {
    preview: false,
    src: previewImageLogo,
    style: {
      height: '116px',
      width: 'auto',
      objectFit: 'cover'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 697,
========
      lineNumber: 703,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 44
    }
  }), __jsx("p", {
    className: "text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 707,
========
      lineNumber: 713,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 Logo \u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23")), !previewVisibleLogo && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 713,
========
      lineNumber: 719,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 714,
========
      lineNumber: 720,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 716,
========
      lineNumber: 722,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 Logo \u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23"))))), __jsx("div", {
    className: "lg:w-5/6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 724,
========
      lineNumber: 730,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    name: "organization_name",
    label: "\u0E0A\u0E37\u0E48\u0E2D\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    rules: [{
      required: true,
      message: 'กรุณากรอกชื่อหน่วยงาน'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 725,
========
      lineNumber: 731,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 736,
========
      lineNumber: 742,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    name: "organization_name_eng",
    label: "\u0E0A\u0E37\u0E48\u0E2D\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19 \u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกชื่อหน่วยงานภาษาอังกฤษ',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 744,
========
      lineNumber: 750,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19 \u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 755,
========
      lineNumber: 761,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 17
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    name: "organization_address",
    label: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    rules: [{
      required: true,
      message: 'กรุณากรอกที่อยู่หน่วยงาน'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 765,
========
      lineNumber: 771,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 11
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 3,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 776,
========
      lineNumber: 782,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "lg:inline-flex lg:w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 784,
========
      lineNumber: 790,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-full lg:w-1/3 mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 785,
========
      lineNumber: 791,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    name: "provincesSelected",
    label: "\u0E08\u0E31\u0E07\u0E2B\u0E27\u0E31\u0E14",
    className: "block text-gray-700 text-sm w-full font-bold mb-2 ",
    style: {
      textAlign: "left !important"
    },
    rules: [{
      required: true,
      message: 'กรุณากรอกจังหวัด'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 786,
========
      lineNumber: 792,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Select"] // defaultValue={()=>provincesSelected}
  // style={{ width: 120 }}
  , {
    onChange: handleProvincesChange,
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    filterOption: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 799,
========
      lineNumber: 805,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 17
    }
  }, __jsx(Option, {
    value: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 806,
========
      lineNumber: 812,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 19
    }
  }, "\u0E40\u0E25\u0E37\u0E2D\u0E01"), provinces ? provinces.map(function (object) {
    return __jsx(Option, {
      value: object.province_id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
        lineNumber: 808,
========
        lineNumber: 814,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
        columnNumber: 28
      }
    }, object.province_name, "  ");
  }) : ""))), __jsx("div", {
    className: "w-full lg:w-1/3 lg:mx-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 813,
========
      lineNumber: 819,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    name: "districtSelected",
    label: "\u0E2D\u0E33\u0E40\u0E20\u0E2D",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full ",
    style: {
      textAlign: "left !important"
    },
    rules: [{
      required: true,
      message: 'กรุณากรอกอำเภอ'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 814,
========
      lineNumber: 820,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Select"] // defaultValue={()=>provincesSelected}
  // style={{ width: 120 }}
  // onChange={handleChange}
  , {
    onChange: handleDistrictChange,
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    filterOption: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 827,
========
      lineNumber: 833,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 17
    }
  }, __jsx(Option, {
    value: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 835,
========
      lineNumber: 841,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 19
    }
  }, "\u0E40\u0E25\u0E37\u0E2D\u0E01"), districts ? districts.map(function (object) {
    return __jsx(Option, {
      value: object.district_id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
        lineNumber: 837,
========
        lineNumber: 843,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
        columnNumber: 28
      }
    }, object.district_name, "  ");
  }) : ""))), __jsx("div", {
    className: "w-full lg:w-1/3 lg:ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 842,
========
      lineNumber: 848,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    name: "subDistrictSelected",
    label: "\u0E15\u0E33\u0E1A\u0E25",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full ",
    style: {
      textAlign: "left !important"
    },
    rules: [{
      required: true,
      message: 'กรุณากรอกตำบล'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 843,
========
      lineNumber: 849,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Select"] // defaultValue={()=>provincesSelected}
  // style={{ width: 120 }}
  // onChange={handleChange}
  , {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    filterOption: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 856,
========
      lineNumber: 862,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 17
    }
  }, __jsx(Option, {
    value: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 863,
========
      lineNumber: 869,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 19
    }
  }, "\u0E40\u0E25\u0E37\u0E2D\u0E01"), subDistricts ? subDistricts.map(function (object) {
    return __jsx(Option, {
      value: object.sub_district_id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
        lineNumber: 865,
========
        lineNumber: 871,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
        columnNumber: 28
      }
    }, object.sub_district_name, "  ");
  }) : "")))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 871,
========
      lineNumber: 877,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 872,
========
      lineNumber: 878,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    name: "organization_phone",
    label: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    rules: [{
      required: true,
      message: 'กรุณากรอกเบอร์โทร'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 873,
========
      lineNumber: 879,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 884,
========
      lineNumber: 890,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 893,
========
      lineNumber: 899,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    name: "organization_fax",
    label: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C fax",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกเบอร์ fax',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 894,
========
      lineNumber: 900,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C fax",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 905,
========
      lineNumber: 911,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 915,
========
      lineNumber: 921,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 916,
========
      lineNumber: 922,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    name: "organization_email",
    label: "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E25\u0E4C",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    rules: [{
      required: true,
      message: 'กรุณากรอกอีเมลล์'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 917,
========
      lineNumber: 923,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E25\u0E4C",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 928,
========
      lineNumber: 934,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 937,
========
      lineNumber: 943,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    name: "organization_email_alert",
    label: "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E25\u0E4C\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกอีเมลล์สำหรับแจ้งเตือน',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 938,
========
      lineNumber: 944,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E25\u0E4C\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 949,
========
      lineNumber: 955,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 959,
========
      lineNumber: 965,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 960,
========
      lineNumber: 966,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    name: "social_fb_pageid",
    label: "facebook page id",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอก facebook page id',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 961,
========
      lineNumber: 967,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "facebook page id",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 972,
========
      lineNumber: 978,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 981,
========
      lineNumber: 987,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    name: "rss",
    label: "\u0E23\u0E2B\u0E31\u0E2A\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19\u0E20\u0E32\u0E04\u0E23\u0E31\u0E10\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E40\u0E0A\u0E37\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E23\u0E30\u0E1A\u0E1A E-GP",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกรหัสหน่วยงานภาครัฐสำหรับเชือมต่อระบบ E-GP',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 982,
========
      lineNumber: 988,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E23\u0E2B\u0E31\u0E2A\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19\u0E20\u0E32\u0E04\u0E23\u0E31\u0E10\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E40\u0E0A\u0E37\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E23\u0E30\u0E1A\u0E1A E-GP",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 993,
========
      lineNumber: 999,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 17
    }
  })))), __jsx("hr", {
    style: {
      backgroundColor: '#C4C4C4',
      height: 2,
      width: '100%'
    },
    className: "my-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1003,
========
      lineNumber: 1009,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1011,
========
      lineNumber: 1017,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inline-flex lg:w-1/6 pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1012,
========
      lineNumber: 1018,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    name: "person01_image",
    className: "block text-gray-700 text-sm font-bold mb-2 w-auto h-auto text-center w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกเลือกภาพผู้บริหารที่ 1',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1013,
========
      lineNumber: 1019,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 15
    }
  }, __jsx(Dragger, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    maxCount: 1 // listType="picture"
    ,
    accept: ".jpg, .jpeg, .png"
  }, imageUploadpropsPerson1, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1024,
========
      lineNumber: 1030,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 17
    }
  }), previewVisiblePerson1 && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    preview: false,
    src: previewImagePerson1,
    style: {
      height: '156px',
      width: 'auto',
      objectFit: 'cover'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1031,
========
      lineNumber: 1037,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 47
    }
  }), __jsx("p", {
    className: "text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1040,
========
      lineNumber: 1046,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 1")), !previewVisiblePerson1 && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1046,
========
      lineNumber: 1052,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1047,
========
      lineNumber: 1053,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1049,
========
      lineNumber: 1055,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 1"))))), __jsx("div", {
    className: "lg:w-5/6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1057,
========
      lineNumber: 1063,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    name: "person01_name",
    label: "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 1",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกชื่อผู้บริหารคนที่ 1',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1058,
========
      lineNumber: 1064,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 1",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1069,
========
      lineNumber: 1075,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    name: "person01_position",
    label: "\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 1",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกชื่อตำแหน่งผู้บริหารคนที่ 1',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1077,
========
      lineNumber: 1083,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 1",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1088,
========
      lineNumber: 1094,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    name: "person01_phone",
    label: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 1",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกชื่อตำแหน่งผู้บริหารคนที่ 1',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1096,
========
      lineNumber: 1102,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 1",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1107,
========
      lineNumber: 1113,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1117,
========
      lineNumber: 1123,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inline-flex lg:w-1/6 pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1118,
========
      lineNumber: 1124,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    name: "person02_image",
    className: "block text-gray-700 text-sm font-bold mb-2 w-auto h-auto text-center w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกเลือกภาพผู้บริหารที่ 2',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1119,
========
      lineNumber: 1125,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 15
    }
  }, __jsx(Dragger, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    maxCount: 1 // listType="picture"
    ,
    accept: ".jpg, .jpeg, .png"
  }, imageUploadpropsPerson2, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1130,
========
      lineNumber: 1136,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 17
    }
  }), previewVisiblePerson2 && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Image"] // width={200}
  , {
    preview: false,
    src: previewImagePerson2,
    style: {
      height: '156px',
      width: 'auto',
      objectFit: 'cover'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1137,
========
      lineNumber: 1143,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 47
    }
  }), __jsx("p", {
    className: "text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1147,
========
      lineNumber: 1153,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 2")), !previewVisiblePerson2 && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1153,
========
      lineNumber: 1159,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1154,
========
      lineNumber: 1160,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1156,
========
      lineNumber: 1162,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 2"))))), __jsx("div", {
    className: "lg:w-5/6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1164,
========
      lineNumber: 1170,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    name: "person02_name",
    label: "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 2",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกชื่อผู้บริหารคนที่ 2',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1165,
========
      lineNumber: 1171,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 2",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1176,
========
      lineNumber: 1182,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    name: "person02_position",
    label: "\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 2",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกชื่อตำแหน่งผู้บริหารคนที่ 2',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1184,
========
      lineNumber: 1190,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 2",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1195,
========
      lineNumber: 1201,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    name: "person02_phone",
    label: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 2",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกชื่อตำแหน่งผู้บริหารคนที่ 1',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1203,
========
      lineNumber: 1209,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 2",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1214,
========
      lineNumber: 1220,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1224,
========
      lineNumber: 1230,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inline-flex lg:w-1/6 pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1225,
========
      lineNumber: 1231,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    name: "person03_image",
    className: "block text-gray-700 text-sm font-bold mb-2 w-auto h-auto text-center w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกเลือกภาพผู้บริหารที่ 3',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1226,
========
      lineNumber: 1232,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 15
    }
  }, __jsx(Dragger, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    maxCount: 1 // listType="picture"
    ,
    accept: ".jpg, .jpeg, .png"
  }, imageUploadpropsPerson3, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1237,
========
      lineNumber: 1243,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 17
    }
  }), previewVisiblePerson3 && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Image"] // width={200}
  , {
    preview: false,
    src: previewImagePerson3,
    style: {
      height: '156px',
      width: 'auto',
      objectFit: 'cover'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1244,
========
      lineNumber: 1250,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 47
    }
  }), __jsx("p", {
    className: "text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1254,
========
      lineNumber: 1260,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 3")), !previewVisiblePerson3 && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1260,
========
      lineNumber: 1266,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1261,
========
      lineNumber: 1267,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1263,
========
      lineNumber: 1269,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 3"))))), __jsx("div", {
    className: "lg:w-5/6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1271,
========
      lineNumber: 1277,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    name: "person03_name",
    label: "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 3",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกชื่อผู้บริหารคนที่ 3',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1272,
========
      lineNumber: 1278,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 3",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1283,
========
      lineNumber: 1289,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    name: "person03_position",
    label: "\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 3",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกชื่อตำแหน่งผู้บริหารคนที่ 3',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1291,
========
      lineNumber: 1297,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 3",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1302,
========
      lineNumber: 1308,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    name: "person03_phone",
    label: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 3",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกชื่อตำแหน่งผู้บริหารคนที่ 1',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1310,
========
      lineNumber: 1316,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 3",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1321,
========
      lineNumber: 1327,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 17
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    className: "flex mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1331,
========
      lineNumber: 1337,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1332,
========
      lineNumber: 1338,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "text-center lg:text-right w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1333,
========
      lineNumber: 1339,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    htmlType: "button",
    onClick: onReset,
    style: {
      backgroundColor: '#C2CFE0',
      borderColor: '#C2CFE0',
      height: 40,
      width: 110,
      marginBottom: '0px !important',
      marginRight: '2px',
      color: 'white !important'
    } // htmlType="submit"
    ,
    className: "text-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full lg:w-1/4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1334,
========
      lineNumber: 1340,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 17
    }
  }, __jsx(Text, {
    className: "text-custom-black ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1349,
========
      lineNumber: 1355,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 19
    }
  }, "\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E17")), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Button"] // type="primary"
  , {
    style: {
      backgroundColor: '#059669',
      borderColor: '#059669',
      height: 40,
      width: 110,
      marginBottom: '0px !important',
      color: 'white !important'
    },
    htmlType: "submit",
    className: "text-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full lg:w-1/4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1351,
========
      lineNumber: 1357,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 17
    }
  }, __jsx(Text, {
    className: "text-custom-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
      lineNumber: 1364,
========
      lineNumber: 1370,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
      columnNumber: 19
    }
  }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"))))))));
}
/* getServerSideProps */

_s(Home, "UdaDFi8RY6budXcuB1Ui/7Jp9is=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_5__["notification"].useNotification, next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"], antd__WEBPACK_IMPORTED_MODULE_5__["Form"].useForm];
});

_c3 = Home;

var _c, _c2, _c3;

$RefreshReg$(_c, "JoditEditor$dynamic");
$RefreshReg$(_c2, "JoditEditor");
$RefreshReg$(_c3, "Home");

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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.702ee24692df134898ec.hot-update.js
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9zZXR0aW5nL3Byb2ZpbGUvaW5kZXguanMiXSwibmFtZXMiOlsiSm9kaXRFZGl0b3IiLCJkeW5hbWljIiwic3NyIiwiVGV4dCIsIlR5cG9ncmFwaHkiLCJUaXRsZSIsIk9wdGlvbiIsIlNlbGVjdCIsIlRleHRBcmVhIiwiSW5wdXQiLCJjb25maWciLCJyZXF1aXJlIiwiSG9tZSIsInByb3BzIiwibm90aWZpY2F0aW9uIiwidXNlTm90aWZpY2F0aW9uIiwiYXBpIiwiY29udGV4dEhvbGRlciIsInVzZXIiLCJvcmlnaW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwcm9maWxlSWQiLCJxdWVyeSIsInVzZVN0YXRlIiwicHJvdmluY2VzIiwic2V0UHJvdmluY2VzIiwiZGlzdHJpY3RzIiwic2V0RGlzdHJpY3RzIiwic3ViRGlzdHJpY3RzIiwic2V0U3ViRGlzdHJpY3RzIiwicHJldmlld0ltYWdlTG9nbyIsInNldFByZXZpZXdJbWFnZUxvZ28iLCJpbWFnZUxhbmRpbmdQYWdlTG9nbyIsInNldEltYWdlTGFuZGluZ1BhZ2VMb2dvIiwicHJldmlld1Zpc2libGVMb2dvIiwic2V0UHJldmlld1Zpc2libGVMb2dvIiwibG9nbyIsInNldExvZ28iLCJmaWVsZHMiLCJzZXRGaWVsZHMiLCJvcmdhbml6YXRpb25EYXRhIiwic2V0T3JnYW5pemF0aW9uRGF0YSIsInVzZUVmZmVjdCIsImZldGNoT3JnYW5pemF0aW9uRGF0YSIsImZldGNoUHJvdmluY2VzRGF0YSIsIm9uU3VibWl0SGFuZGxlciIsInZhbHVlIiwiZGF0YSIsIm9yZ2FuaXphdGlvbl9pZCIsIm9yZ2FuaXphdGlvbl9uYW1lIiwib3JnYW5pemF0aW9uX25hbWVfZW5nIiwib3JnYW5pemF0aW9uX2xvZ28iLCJvcmdhbml6YXRpb25fYWRkcmVzcyIsIm9yZ2FuaXphdGlvbl9zdWJfZGlzdHJpY3RfaWQiLCJzdWJEaXN0cmljdFNlbGVjdGVkIiwib3JnYW5pemF0aW9uX2VtYWlsIiwib3JnYW5pemF0aW9uX2VtYWlsX2FsZXJ0Iiwib3JnYW5pemF0aW9uX3Bob25lIiwib3JnYW5pemF0aW9uX2ZheCIsInNvY2lhbF9mYl9wYWdlaWQiLCJyc3MiLCJwZXJzb24wMV9uYW1lIiwicGVyc29uMDFfcG9zaXRpb24iLCJwZXJzb24wMV9pbWFnZSIsImltYWdlTGFuZGluZ1BhZ2VQZXJzb24xIiwicGVyc29uMDFfcGhvbmUiLCJwZXJzb24wMl9uYW1lIiwicGVyc29uMDJfcG9zaXRpb24iLCJwZXJzb24wMl9pbWFnZSIsImltYWdlTGFuZGluZ1BhZ2VQZXJzb24yIiwicGVyc29uMDJfcGhvbmUiLCJwZXJzb24wM19uYW1lIiwicGVyc29uMDNfcG9zaXRpb24iLCJwZXJzb24wM19pbWFnZSIsImltYWdlTGFuZGluZ1BhZ2VQZXJzb24zIiwicGVyc29uMDNfcGhvbmUiLCJjb25zb2xlIiwibG9nIiwiYXBpSW5zdGFuY2UiLCJwdXQiLCJzdGF0dXMiLCJvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJTdWNjZXNzIiwic2V0VGltZW91dCIsInB1c2giLCJiaW5kIiwib3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbCIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZGVzY3JpcHRpb24iLCJwbGFjZW1lbnQiLCJtZXNzZ2FlIiwiZXJyb3IiLCJEcmFnZ2VyIiwiVXBsb2FkIiwiRm9ybSIsInVzZUZvcm0iLCJmb3JtIiwib25SZXNldCIsImZldGNoRGlzdHJpY3RzRGF0YSIsInN1Yl9kaXN0cmljdHMiLCJwcm92aW5jZV9pZCIsImZldGNoU3ViRGlzdHJpY3REYXRhIiwiZGlzdHJpY3RfaWQiLCJuYW1lIiwic3ViX2Rpc3RyaWN0X2lkIiwic2V0UHJldmlld0ltYWdlUGVyc29uMSIsInNldFByZXZpZXdWaXNpYmxlUGVyc29uMSIsInNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24xIiwic2V0UHJldmlld0ltYWdlUGVyc29uMiIsInNldFByZXZpZXdWaXNpYmxlUGVyc29uMiIsInNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24yIiwic2V0UHJldmlld0ltYWdlUGVyc29uMyIsInNldFByZXZpZXdWaXNpYmxlUGVyc29uMyIsInNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24zIiwiZ2V0IiwiX29yZ2FuaXphdGlvbkRhdGEiLCJvcmdhbml6YXRpb24iLCJ0aHVtYm5haWxfbGluayIsIl9wcm92aW5jZXNEYXRhIiwiX2Rpc3RyaWN0c0RhdGEiLCJzdWJEaXN0cmljdElEIiwiX3N1YkRpc3RyaWN0c0RhdGEiLCJoYW5kbGVQcm92aW5jZXNDaGFuZ2UiLCJoYW5kbGVEaXN0cmljdENoYW5nZSIsImltYWdlVXBsb2FkcHJvcHNMb2dvIiwibXVsdGlwbGUiLCJsaXN0VHlwZSIsIm1heENvdW50IiwiYWN0aW9uIiwicHJldmlldyIsImN1c3RvbVJlcXVlc3QiLCJvcHRpb25zIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmaWxlIiwidHlwZV91c2VyIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsImxpc3QiLCJfbmFtZSIsIm9uU3VjY2VzcyIsImVyciIsIm9uQ2hhbmdlIiwiaW5mbyIsInVybCIsImdldEJhc2U2NCIsIm9yaWdpbkZpbGVPYmoiLCJvblJlbW92ZSIsInJlc2V0SW1hZ2VQcmV2aWV3IiwiaW1hZ2VVcGxvYWRwcm9wc1BlcnNvbjEiLCJpbWFnZVVwbG9hZHByb3BzUGVyc29uMiIsImltYWdlVXBsb2FkcHJvcHNQZXJzb24zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJwYXRoIiwiYnJlYWRjcnVtYk5hbWUiLCJoZWlnaHQiLCJ3aWR0aCIsIm9iamVjdEZpdCIsInJlcXVpcmVkIiwibWluUm93cyIsIm1heFJvd3MiLCJ0ZXh0QWxpZ24iLCJtYXAiLCJvYmplY3QiLCJwcm92aW5jZV9uYW1lIiwiZGlzdHJpY3RfbmFtZSIsInN1Yl9kaXN0cmljdF9uYW1lIiwiYmFja2dyb3VuZENvbG9yIiwicHJldmlld1Zpc2libGVQZXJzb24xIiwicHJldmlld0ltYWdlUGVyc29uMSIsInByZXZpZXdWaXNpYmxlUGVyc29uMiIsInByZXZpZXdJbWFnZVBlcnNvbjIiLCJwcmV2aWV3VmlzaWJsZVBlcnNvbjMiLCJwcmV2aWV3SW1hZ2VQZXJzb24zIiwiYm9yZGVyQ29sb3IiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5SaWdodCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUlBLElBQU1BLFdBQVcsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sd0pBQU47QUFBQSxDQUFELEVBQThCO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUFoQixvRUFBZ0I7QUFBQTtBQUFBLGNBQWhCLGFBQWdCO0FBQUE7QUFBQSxDQUE5QixDQUEzQjtNQUFNRixXO0FBQ04sSUFBUUcsSUFBUixHQUF3QkMsK0NBQXhCLENBQVFELElBQVI7QUFBQSxJQUFjRSxLQUFkLEdBQXdCRCwrQ0FBeEIsQ0FBY0MsS0FBZDtBQUNBLElBQVFDLE1BQVIsR0FBbUJDLDJDQUFuQixDQUFRRCxNQUFSO0FBRUEsSUFBUUUsUUFBUixHQUFxQkMsMENBQXJCLENBQVFELFFBQVI7O0FBQ0EsSUFBTUUsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDZDQUFELENBQXRCOzs7QUFFZSxTQUFTQyxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQTs7QUFDbEMsOEJBQTZCQyxpREFBWSxDQUFDQyxlQUFiLEVBQTdCO0FBQUE7QUFBQSxNQUFPQyxHQUFQO0FBQUEsTUFBWUMsYUFBWjs7QUFDQSxNQUFRQyxJQUFSLEdBQXlCTCxLQUF6QixDQUFRSyxJQUFSO0FBQUEsTUFBY0MsTUFBZCxHQUF5Qk4sS0FBekIsQ0FBY00sTUFBZDtBQUNBLE1BQU1DLE1BQU0s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QUNDLE87OztNQXBGRXBGLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFkbWluXFxzZXR0aW5nXFxwcm9maWxlLmpzLjcwMmVlMjQ2OTJkZjEzNDg5OGVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmJveE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbiwgRm9ybSwgSW1hZ2UsIElucHV0LCBub3RpZmljYXRpb24sIFNlbGVjdCwgVHlwb2dyYXBoeSwgVXBsb2FkXHJcbn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuLy8gaW1wb3J0IFVzZXJOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL1VzZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuLyogY29tcG9uZW50cyAqL1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dEFkbWluJztcclxuLyogdXRpbHMgKi9cclxuaW1wb3J0IHtcclxuICBhYnNvbHV0ZVVybCwgYXBpSW5zdGFuY2VcclxufSBmcm9tICcuLi8uLi8uLi8uLi9taWRkbGV3YXJlL3V0aWxzJztcclxuXHJcbmNvbnN0IEpvZGl0RWRpdG9yID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJqb2RpdC1yZWFjdFwiKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5jb25zdCB7IFRleHQsIFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4uLy4uL2NvbmZpZycpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG4gIGNvbnN0IFthcGksIGNvbnRleHRIb2xkZXJdID0gbm90aWZpY2F0aW9uLnVzZU5vdGlmaWNhdGlvbigpO1xyXG4gIGNvbnN0IHsgdXNlciwgb3JpZ2luIH0gPSBwcm9wcztcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHByb2ZpbGVJZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IFtwcm92aW5jZXMsIHNldFByb3ZpbmNlc10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtkaXN0cmljdHMsIHNldERpc3RyaWN0c10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtzdWJEaXN0cmljdHMsIHNldFN1YkRpc3RyaWN0c10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtwcmV2aWV3SW1hZ2VMb2dvLCBzZXRQcmV2aWV3SW1hZ2VMb2dvXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2ltYWdlTGFuZGluZ1BhZ2VMb2dvLCBzZXRJbWFnZUxhbmRpbmdQYWdlTG9nb10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtwcmV2aWV3VmlzaWJsZUxvZ28sIHNldFByZXZpZXdWaXNpYmxlTG9nb10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbG9nbywgc2V0TG9nb10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbZmllbGRzLCBzZXRGaWVsZHNdID0gdXNlU3RhdGUoW1xyXG4gIF0pO1xyXG4gIGNvbnN0IFtvcmdhbml6YXRpb25EYXRhLCBzZXRPcmdhbml6YXRpb25EYXRhXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaE9yZ2FuaXphdGlvbkRhdGEoKTtcclxuICAgIGZldGNoUHJvdmluY2VzRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXRIYW5kbGVyKHZhbHVlKSB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBvcmdhbml6YXRpb25faWQ6IHVzZXIub3JnYW5pemF0aW9uX2lkLFxyXG4gICAgICBvcmdhbml6YXRpb25fbmFtZTogdmFsdWUub3JnYW5pemF0aW9uX25hbWUsXHJcbiAgICAgIG9yZ2FuaXphdGlvbl9uYW1lX2VuZzogdmFsdWUub3JnYW5pemF0aW9uX25hbWVfZW5nLFxyXG4gICAgICBvcmdhbml6YXRpb25fbG9nbzogaW1hZ2VMYW5kaW5nUGFnZUxvZ28sXHJcbiAgICAgIG9yZ2FuaXphdGlvbl9hZGRyZXNzOiB2YWx1ZS5vcmdhbml6YXRpb25fYWRkcmVzcyxcclxuICAgICAgb3JnYW5pemF0aW9uX3N1Yl9kaXN0cmljdF9pZDogdmFsdWUuc3ViRGlzdHJpY3RTZWxlY3RlZCxcclxuICAgICAgb3JnYW5pemF0aW9uX2VtYWlsOiB2YWx1ZS5vcmdhbml6YXRpb25fZW1haWwsXHJcbiAgICAgIG9yZ2FuaXphdGlvbl9lbWFpbF9hbGVydDogdmFsdWUub3JnYW5pemF0aW9uX2VtYWlsX2FsZXJ0LFxyXG4gICAgICBvcmdhbml6YXRpb25fcGhvbmU6IHZhbHVlLm9yZ2FuaXphdGlvbl9waG9uZSxcclxuICAgICAgb3JnYW5pemF0aW9uX2ZheDogdmFsdWUub3JnYW5pemF0aW9uX2ZheCxcclxuICAgICAgc29jaWFsX2ZiX3BhZ2VpZDogdmFsdWUuc29jaWFsX2ZiX3BhZ2VpZCxcclxuICAgICAgcnNzOiB2YWx1ZS5yc3MsXHJcbiAgICAgIHBlcnNvbjAxX25hbWU6IHZhbHVlLnBlcnNvbjAxX25hbWUsXHJcbiAgICAgIHBlcnNvbjAxX3Bvc2l0aW9uOiB2YWx1ZS5wZXJzb24wMV9wb3NpdGlvbixcclxuICAgICAgcGVyc29uMDFfaW1hZ2U6IGltYWdlTGFuZGluZ1BhZ2VQZXJzb24xLFxyXG4gICAgICBwZXJzb24wMV9waG9uZTogdmFsdWUucGVyc29uMDFfcGhvbmUsXHJcbiAgICAgIHBlcnNvbjAyX25hbWU6IHZhbHVlLnBlcnNvbjAyX25hbWUsXHJcbiAgICAgIHBlcnNvbjAyX3Bvc2l0aW9uOiB2YWx1ZS5wZXJzb24wMl9wb3NpdGlvbixcclxuICAgICAgcGVyc29uMDJfaW1hZ2U6IGltYWdlTGFuZGluZ1BhZ2VQZXJzb24yLFxyXG4gICAgICBwZXJzb24wMl9waG9uZTogdmFsdWUucGVyc29uMDJfcGhvbmUsXHJcbiAgICAgIHBlcnNvbjAzX25hbWU6IHZhbHVlLnBlcnNvbjAzX25hbWUsXHJcbiAgICAgIHBlcnNvbjAzX3Bvc2l0aW9uOiB2YWx1ZS5wZXJzb24wM19wb3NpdGlvbixcclxuICAgICAgcGVyc29uMDNfaW1hZ2U6IGltYWdlTGFuZGluZ1BhZ2VQZXJzb24zLFxyXG4gICAgICBwZXJzb24wM19waG9uZTogdmFsdWUucGVyc29uMDNfcGhvbmUsXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIGNvbnN0IG9yZ2FuaXphdGlvbkRhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLnB1dCgnL3Byb2ZpbGUnLCBkYXRhKTtcclxuICAgIGlmIChvcmdhbml6YXRpb25EYXRhLmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICBvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJTdWNjZXNzKCk7XHJcbiAgICAgIGZldGNoT3JnYW5pemF0aW9uRGF0YSgpO1xyXG4gICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIC8vU3RhcnQgdGhlIHRpbWVyXHJcbiAgICAgICAgICByb3V0ZXIucHVzaCgnL2FkbWluL3NldHRpbmcvcHJvZmlsZScpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSxcclxuICAgICAgICAyMDAwLFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbChvcmdhbml6YXRpb25EYXRhLmRhdGEubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyU3VjY2VzcyA9ICgpID0+IHtcclxuICAgIGFwaS5zdWNjZXNzKHtcclxuICAgICAgbWVzc2FnZTogYOC4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iGAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAn4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiI4LmB4Lil4LmJ4LinJyxcclxuICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbCA9IG1lc3NnYWUgPT4ge1xyXG4gICAgYXBpLmVycm9yKHtcclxuICAgICAgbWVzc2FnZTogYOC4nuC4muC4m+C4seC4jeC4q+C4suC4o+C4sOC4q+C4p+C5iOC4suC4h+C4geC4suC4o+C4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4pWAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBtZXNzZ2FlLFxyXG4gICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB7IERyYWdnZXIgfSA9IFVwbG9hZDtcclxuXHJcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcblxyXG4gIGNvbnN0IG9uUmVzZXQgPSAoKSA9PiB7XHJcbiAgICBmZXRjaERpc3RyaWN0c0RhdGEob3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzID8gb3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzLnByb3ZpbmNlcy5wcm92aW5jZV9pZCA6IDApXHJcbiAgICBmZXRjaFN1YkRpc3RyaWN0RGF0YShvcmdhbml6YXRpb25EYXRhLnN1Yl9kaXN0cmljdHMgPyBvcmdhbml6YXRpb25EYXRhLnN1Yl9kaXN0cmljdHMuZGlzdHJpY3RzLmRpc3RyaWN0X2lkIDogMClcclxuICAgIHNldEZpZWxkcyhbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9sb2dvJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEub3JnYW5pemF0aW9uX2xvZ28sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9uYW1lJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEub3JnYW5pemF0aW9uX25hbWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9uYW1lX2VuZyddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9uYW1lX2VuZyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX3Bob25lJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEub3JnYW5pemF0aW9uX3Bob25lLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fZW1haWwnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fZW1haWwsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9mYXgnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fZmF4XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9hZGRyZXNzJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEub3JnYW5pemF0aW9uX2FkZHJlc3MsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3Byb3ZpbmNlc1NlbGVjdGVkJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEuc3ViX2Rpc3RyaWN0cyA/IG9yZ2FuaXphdGlvbkRhdGEuc3ViX2Rpc3RyaWN0cy5wcm92aW5jZXMucHJvdmluY2VfaWQgOiBcIjBcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydkaXN0cmljdFNlbGVjdGVkJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEuc3ViX2Rpc3RyaWN0cyA/IG9yZ2FuaXphdGlvbkRhdGEuc3ViX2Rpc3RyaWN0cy5kaXN0cmljdHMuZGlzdHJpY3RfaWQgOiBcIjBcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydzdWJEaXN0cmljdFNlbGVjdGVkJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEuc3ViX2Rpc3RyaWN0cyA/IG9yZ2FuaXphdGlvbkRhdGEuc3ViX2Rpc3RyaWN0cy5zdWJfZGlzdHJpY3RfaWQgOiBcIjBcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydzb2NpYWxfZmJfcGFnZWlkJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEuc29jaWFsX2ZiX3BhZ2VpZFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fZW1haWxfYWxlcnQnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fZW1haWxfYWxlcnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncnNzJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEucnNzXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAxX25hbWUnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5wZXJzb24wMV9uYW1lLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wMV9wb3NpdGlvbiddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAxX3Bvc2l0aW9uLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wMV9waG9uZSddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAxX3Bob25lLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wMl9uYW1lJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDJfbmFtZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDJfcG9zaXRpb24nXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5wZXJzb24wMl9wb3NpdGlvbixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDJfcGhvbmUnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5wZXJzb24wMl9waG9uZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDNfbmFtZSddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAzX25hbWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAzX3Bvc2l0aW9uJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDNfcG9zaXRpb24sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAzX3Bob25lJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDNfcGhvbmUsXHJcbiAgICAgIH1cclxuICAgIF0pO1xyXG4gICAgc2V0UHJldmlld0ltYWdlTG9nbygnLi5cXFxcLi5cXFxcLi5cXFxcdXBsb2Fkc1xcXFxjLScgKyB1c2VyLm9yZ2FuaXphdGlvbl9pZCArICdcXFxcb3JnYW5pemF0aW9uXFxcXCcgKyBvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9sb2dvKTtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlTG9nbyh0cnVlKTtcclxuICAgIHNldEltYWdlTGFuZGluZ1BhZ2VMb2dvKG9yZ2FuaXphdGlvbkRhdGEub3JnYW5pemF0aW9uX2xvZ28pO1xyXG5cclxuICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjEoJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICsgdXNlci5vcmdhbml6YXRpb25faWQgKyAnXFxcXG9yZ2FuaXphdGlvblxcXFwnICsgb3JnYW5pemF0aW9uRGF0YS5wZXJzb24wMV9pbWFnZSk7XHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjEodHJ1ZSk7XHJcbiAgICBzZXRJbWFnZUxhbmRpbmdQYWdlUGVyc29uMShvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAxX2ltYWdlKTtcclxuXHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24yKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArIHVzZXIub3JnYW5pemF0aW9uX2lkICsgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArIG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDJfaW1hZ2UpO1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24yKHRydWUpO1xyXG4gICAgc2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjIob3JnYW5pemF0aW9uRGF0YS5wZXJzb24wMl9pbWFnZSk7XHJcblxyXG4gICAgc2V0UHJldmlld0ltYWdlUGVyc29uMygnLi5cXFxcLi5cXFxcLi5cXFxcdXBsb2Fkc1xcXFxjLScgKyB1c2VyLm9yZ2FuaXphdGlvbl9pZCArICdcXFxcb3JnYW5pemF0aW9uXFxcXCcgKyBvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAzX2ltYWdlKTtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMyh0cnVlKTtcclxuICAgIHNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24zKG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDNfaW1hZ2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoT3JnYW5pemF0aW9uRGF0YSA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBfb3JnYW5pemF0aW9uRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAnb3JnYW5pemF0aW9uLycgKyAodXNlciA/IHVzZXIub3JnYW5pemF0aW9uX2lkIDogMClcclxuICAgICk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24pXHJcbiAgICBzZXRPcmdhbml6YXRpb25EYXRhKF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uKVxyXG4gICAgZmV0Y2hEaXN0cmljdHNEYXRhKF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnN1Yl9kaXN0cmljdHMgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5zdWJfZGlzdHJpY3RzLnByb3ZpbmNlcy5wcm92aW5jZV9pZCA6IDApXHJcbiAgICBmZXRjaFN1YkRpc3RyaWN0RGF0YShfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5zdWJfZGlzdHJpY3RzID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24uc3ViX2Rpc3RyaWN0cy5kaXN0cmljdHMuZGlzdHJpY3RfaWQgOiAwKVxyXG4gICAgaWYgKF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9sb2dvKSB7XHJcbiAgICAgIHNldFByZXZpZXdJbWFnZUxvZ28oXHJcbiAgICAgICAgJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICtcclxuICAgICAgICB1c2VyLm9yZ2FuaXphdGlvbl9pZCArXHJcbiAgICAgICAgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArXHJcbiAgICAgICAgX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2xvZ28sXHJcbiAgICAgIClcclxuICAgICAgc2V0UHJldmlld1Zpc2libGVMb2dvKHRydWUpXHJcbiAgICB9XHJcbiAgICBpZiAoX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDFfaW1hZ2UpIHtcclxuICAgICAgc2V0UHJldmlld0ltYWdlUGVyc29uMSgnLi5cXFxcLi5cXFxcLi5cXFxcdXBsb2Fkc1xcXFxjLScgK1xyXG4gICAgICAgIHVzZXIub3JnYW5pemF0aW9uX2lkICtcclxuICAgICAgICAnXFxcXG9yZ2FuaXphdGlvblxcXFwnICtcclxuICAgICAgICBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMV9pbWFnZSlcclxuICAgICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24xKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMl9pbWFnZSkge1xyXG4gICAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24yKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArXHJcbiAgICAgICAgdXNlci5vcmdhbml6YXRpb25faWQgK1xyXG4gICAgICAgICdcXFxcb3JnYW5pemF0aW9uXFxcXCcgK1xyXG4gICAgICAgIF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAyX2ltYWdlKVxyXG4gICAgICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjIodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAzX2ltYWdlKSB7XHJcbiAgICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjMoJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICtcclxuICAgICAgICB1c2VyLm9yZ2FuaXphdGlvbl9pZCArXHJcbiAgICAgICAgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArXHJcbiAgICAgICAgX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDNfaW1hZ2UpXHJcbiAgICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXRQcmV2aWV3SW1hZ2VMb2dvKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArIHVzZXIub3JnYW5pemF0aW9uX2lkICsgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArIF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9sb2dvKTtcclxuICAgIC8vIHNldFByZXZpZXdWaXNpYmxlTG9nbyh0cnVlKTtcclxuICAgIC8vIHNldEltYWdlTGFuZGluZ1BhZ2VMb2dvKF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9sb2dvKTtcclxuICAgIHNldEZpZWxkcyhbXHJcbiAgICAgIC8vIHtcclxuICAgICAgLy8gICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9sb2dvJ10sXHJcbiAgICAgIC8vICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9sb2dvXHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9uYW1lJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9uYW1lID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX25hbWUgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9uYW1lX2VuZyddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fbmFtZV9lbmcgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fbmFtZV9lbmcgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9waG9uZSddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fcGhvbmUgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fcGhvbmUgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9lbWFpbCddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fZW1haWwgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fZW1haWwgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3Byb3ZpbmNlc1NlbGVjdGVkJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnN1Yl9kaXN0cmljdHMgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5zdWJfZGlzdHJpY3RzLnByb3ZpbmNlcy5wcm92aW5jZV9pZCA6IFwiMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2Rpc3RyaWN0U2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24uc3ViX2Rpc3RyaWN0cyA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnN1Yl9kaXN0cmljdHMuZGlzdHJpY3RzLmRpc3RyaWN0X2lkIDogXCIwXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnc3ViRGlzdHJpY3RTZWxlY3RlZCddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5zdWJfZGlzdHJpY3RzID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24uc3ViX2Rpc3RyaWN0cy5zdWJfZGlzdHJpY3RfaWQgOiBcIjBcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fZmF4J10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9mYXggPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fZmF4IDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWyd0aHVtYm5haWxfbGluayddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi50aHVtYm5haWxfbGluayA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnRodW1ibmFpbF9saW5rIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fYWRkcmVzcyddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fYWRkcmVzcyA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9hZGRyZXNzIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fZW1haWxfYWxlcnQnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2VtYWlsX2FsZXJ0ID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2VtYWlsX2FsZXJ0IDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydzb2NpYWxfZmJfcGFnZWlkJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnNvY2lhbF9mYl9wYWdlaWQgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5zb2NpYWxfZmJfcGFnZWlkIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydyc3MnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucnNzID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucnNzIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wMV9uYW1lJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAxX25hbWUgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMV9uYW1lIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wMV9wb3NpdGlvbiddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMV9wb3NpdGlvbiA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAxX3Bvc2l0aW9uIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wMV9waG9uZSddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMV9waG9uZSA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAxX3Bob25lIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wMl9uYW1lJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAyX25hbWUgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMl9uYW1lIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wMl9wb3NpdGlvbiddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMl9wb3NpdGlvbiA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAyX3Bvc2l0aW9uIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wMl9waG9uZSddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMl9waG9uZSA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAyX3Bob25lIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wM19uYW1lJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAzX25hbWUgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wM19uYW1lIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wM19wb3NpdGlvbiddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wM19wb3NpdGlvbiA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAzX3Bvc2l0aW9uIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wM19waG9uZSddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wM19waG9uZSA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAzX3Bob25lIDogXCJcIlxyXG4gICAgICB9LFxyXG5cclxuXHJcbiAgICBdKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoUHJvdmluY2VzRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IF9wcm92aW5jZXNEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICdwcm92aW5jZSdcclxuICAgICk7XHJcblxyXG4gICAgc2V0UHJvdmluY2VzKF9wcm92aW5jZXNEYXRhLmRhdGEuZGF0YSlcclxuICAgIC8vIGNvbnNvbGUubG9nKF9wcm92aW5jZXNEYXRhLmRhdGEuZGF0YSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGZldGNoRGlzdHJpY3RzRGF0YSA9IGFzeW5jIChwcm92aW5jZV9pZCkgPT4ge1xyXG4gICAgY29uc3QgX2Rpc3RyaWN0c0RhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ2Rpc3RyaWN0LycgKyBwcm92aW5jZV9pZFxyXG4gICAgKTtcclxuXHJcbiAgICBzZXREaXN0cmljdHMoX2Rpc3RyaWN0c0RhdGEuZGF0YS5kYXRhKVxyXG4gICAgLy8gY29uc29sZS5sb2coX2Rpc3RyaWN0c0RhdGEuZGF0YS5kYXRhKVxyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0IGZldGNoU3ViRGlzdHJpY3REYXRhID0gYXN5bmMgKHN1YkRpc3RyaWN0SUQpID0+IHtcclxuICAgIGNvbnN0IF9zdWJEaXN0cmljdHNEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICdzdWItZGlzdHJpY3QvJyArIHN1YkRpc3RyaWN0SURcclxuICAgICk7XHJcblxyXG4gICAgc2V0U3ViRGlzdHJpY3RzKF9zdWJEaXN0cmljdHNEYXRhLmRhdGEuZGF0YSlcclxuICAgIC8vIGNvbnNvbGUubG9nKF9zdWJEaXN0cmljdHNEYXRhLmRhdGEuZGF0YSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByb3ZpbmNlc0NoYW5nZSA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgc2V0RmllbGRzKFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncHJvdmluY2VzU2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnZGlzdHJpY3RTZWxlY3RlZCddLFxyXG4gICAgICAgIHZhbHVlOiBcIjBcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydzdWJEaXN0cmljdFNlbGVjdGVkJ10sXHJcbiAgICAgICAgdmFsdWU6IFwiMFwiXHJcbiAgICAgIH0sXHJcblxyXG4gICAgXSlcclxuICAgIGZldGNoRGlzdHJpY3RzRGF0YSh2YWx1ZSk7XHJcbiAgICBzZXRTdWJEaXN0cmljdHMoW10pXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVEaXN0cmljdENoYW5nZSA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0RmllbGRzKFtcclxuXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2Rpc3RyaWN0U2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnc3ViRGlzdHJpY3RTZWxlY3RlZCddLFxyXG4gICAgICAgIHZhbHVlOiBcIjBcIlxyXG4gICAgICB9LFxyXG5cclxuICAgIF0pXHJcbiAgICBmZXRjaFN1YkRpc3RyaWN0RGF0YSh2YWx1ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGltYWdlVXBsb2FkcHJvcHNMb2dvID0ge1xyXG4gICAgbmFtZTogJ2ZpbGUnLFxyXG4gICAgbXVsdGlwbGU6IGZhbHNlLFxyXG4gICAgbGlzdFR5cGU6ICd0ZXh0JyxcclxuICAgIG1heENvdW50OiAxLFxyXG4gICAgYWN0aW9uOiBcIi9hcGkvdXBsb2FkL29yZ2FuaXphdGlvblwiLFxyXG4gICAgcHJldmlldzogZmFsc2UsXHJcbiAgICBjdXN0b21SZXF1ZXN0OiAob3B0aW9ucykgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdpZCcsIHVzZXIudHlwZV91c2VyID09IDEgPyBcImFkbWluXCIgOiB1c2VyLm9yZ2FuaXphdGlvbl9pZClcclxuICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgIFwiaGVhZGVyc1wiOiB7XHJcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9LS0tLVdlYktpdEZvcm1Cb3VuZGFyeXFUcUpJeHZrV0ZZcXZQNXMnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGF4aW9zLnBvc3Qob3B0aW9ucy5hY3Rpb24sIGRhdGEsIGNvbmZpZykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0SW1hZ2VMYW5kaW5nUGFnZUxvZ28ocmVzLmRhdGEuZGF0YS5saXN0WzBdLl9uYW1lKVxyXG4gICAgICAgIG9wdGlvbnMub25TdWNjZXNzKHJlcy5kYXRhLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfSxcclxuICAgIGFzeW5jIG9uQ2hhbmdlKGluZm8pIHtcclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGluZm8uZmlsZVxyXG4gICAgICBzd2l0Y2ggKGluZm8uZmlsZS5zdGF0dXMpIHtcclxuICAgICAgICBjYXNlIFwiZG9uZVwiOlxyXG4gICAgICAgICAgaWYgKCFpbmZvLmZpbGUudXJsICYmICFpbmZvLmZpbGUucHJldmlldykge1xyXG4gICAgICAgICAgICBpbmZvLmZpbGUucHJldmlldyA9IGF3YWl0IGdldEJhc2U2NChpbmZvLmZpbGUub3JpZ2luRmlsZU9iaik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRQcmV2aWV3SW1hZ2VMb2dvKGluZm8uZmlsZS51cmwgfHwgaW5mby5maWxlLnByZXZpZXcpXHJcbiAgICAgICAgICBzZXRQcmV2aWV3VmlzaWJsZUxvZ28odHJ1ZSlcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIC8vIGVycm9yIG9yIHJlbW92ZWRcclxuICAgICAgICAvLyByZXNldEltYWdlUHJldmlldygpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgb25SZW1vdmUoaW5mbykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9uUmVtb3ZlXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbWFnZVVwbG9hZHByb3BzUGVyc29uMSA9IHtcclxuICAgIG5hbWU6ICdmaWxlJyxcclxuICAgIG11bHRpcGxlOiBmYWxzZSxcclxuICAgIGxpc3RUeXBlOiAndGV4dCcsXHJcbiAgICBtYXhDb3VudDogMSxcclxuICAgIGFjdGlvbjogXCIvYXBpL3VwbG9hZC9vcmdhbml6YXRpb25cIixcclxuICAgIHByZXZpZXc6IGZhbHNlLFxyXG4gICAgY3VzdG9tUmVxdWVzdDogKG9wdGlvbnMpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgb3B0aW9ucy5maWxlKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnaWQnLCB1c2VyLnR5cGVfdXNlciA9PSAxID8gXCJhZG1pblwiIDogdXNlci5vcmdhbml6YXRpb25faWQpXHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICBcImhlYWRlcnNcIjoge1xyXG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogJ211bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PS0tLS1XZWJLaXRGb3JtQm91bmRhcnlxVHFKSXh2a1dGWXF2UDVzJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBheGlvcy5wb3N0KG9wdGlvbnMuYWN0aW9uLCBkYXRhLCBjb25maWcpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24xKHJlcy5kYXRhLmRhdGEubGlzdFswXS5fbmFtZSlcclxuICAgICAgICBvcHRpb25zLm9uU3VjY2VzcyhyZXMuZGF0YSwgb3B0aW9ucy5maWxlKVxyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICB9KVxyXG5cclxuICAgIH0sXHJcbiAgICBhc3luYyBvbkNoYW5nZShpbmZvKSB7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBpbmZvLmZpbGVcclxuICAgICAgc3dpdGNoIChpbmZvLmZpbGUuc3RhdHVzKSB7XHJcbiAgICAgICAgY2FzZSBcImRvbmVcIjpcclxuICAgICAgICAgIGlmICghaW5mby5maWxlLnVybCAmJiAhaW5mby5maWxlLnByZXZpZXcpIHtcclxuICAgICAgICAgICAgaW5mby5maWxlLnByZXZpZXcgPSBhd2FpdCBnZXRCYXNlNjQoaW5mby5maWxlLm9yaWdpbkZpbGVPYmopO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0UHJldmlld0ltYWdlUGVyc29uMShpbmZvLmZpbGUudXJsIHx8IGluZm8uZmlsZS5wcmV2aWV3KVxyXG4gICAgICAgICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24xKHRydWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgLy8gcmVzZXRJbWFnZVByZXZpZXcoKVxyXG4gICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIG9uUmVtb3ZlKGluZm8pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJvblJlbW92ZVwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhpbmZvKVxyXG4gICAgICByZXNldEltYWdlUHJldmlldygpXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaW1hZ2VVcGxvYWRwcm9wc1BlcnNvbjIgPSB7XHJcbiAgICBuYW1lOiAnZmlsZScsXHJcbiAgICBtdWx0aXBsZTogZmFsc2UsXHJcbiAgICBsaXN0VHlwZTogJ3RleHQnLFxyXG4gICAgbWF4Q291bnQ6IDEsXHJcbiAgICBhY3Rpb246IFwiL2FwaS91cGxvYWQvb3JnYW5pemF0aW9uXCIsXHJcbiAgICBwcmV2aWV3OiBmYWxzZSxcclxuICAgIGN1c3RvbVJlcXVlc3Q6IChvcHRpb25zKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgZGF0YS5hcHBlbmQoJ2lkJywgdXNlci50eXBlX3VzZXIgPT0gMSA/IFwiYWRtaW5cIiA6IHVzZXIub3JnYW5pemF0aW9uX2lkKVxyXG4gICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgXCJoZWFkZXJzXCI6IHtcclxuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6ICdtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0tLS0tV2ViS2l0Rm9ybUJvdW5kYXJ5cVRxSkl4dmtXRllxdlA1cydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYXhpb3MucG9zdChvcHRpb25zLmFjdGlvbiwgZGF0YSwgY29uZmlnKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRJbWFnZUxhbmRpbmdQYWdlUGVyc29uMihyZXMuZGF0YS5kYXRhLmxpc3RbMF0uX25hbWUpXHJcbiAgICAgICAgb3B0aW9ucy5vblN1Y2Nlc3MocmVzLmRhdGEsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgfSlcclxuXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgb25DaGFuZ2UoaW5mbykge1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gaW5mby5maWxlXHJcbiAgICAgIHN3aXRjaCAoaW5mby5maWxlLnN0YXR1cykge1xyXG4gICAgICAgIGNhc2UgXCJkb25lXCI6XHJcbiAgICAgICAgICBpZiAoIWluZm8uZmlsZS51cmwgJiYgIWluZm8uZmlsZS5wcmV2aWV3KSB7XHJcbiAgICAgICAgICAgIGluZm8uZmlsZS5wcmV2aWV3ID0gYXdhaXQgZ2V0QmFzZTY0KGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjIoaW5mby5maWxlLnVybCB8fCBpbmZvLmZpbGUucHJldmlldylcclxuICAgICAgICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMih0cnVlKVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgLy8gcmVzZXRJbWFnZVByZXZpZXcoKVxyXG4gICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIG9uUmVtb3ZlKGluZm8pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJvblJlbW92ZVwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhpbmZvKVxyXG4gICAgICByZXNldEltYWdlUHJldmlldygpXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaW1hZ2VVcGxvYWRwcm9wc1BlcnNvbjMgPSB7XHJcbiAgICBuYW1lOiAnZmlsZScsXHJcbiAgICBtdWx0aXBsZTogZmFsc2UsXHJcbiAgICBsaXN0VHlwZTogJ3RleHQnLFxyXG4gICAgbWF4Q291bnQ6IDEsXHJcbiAgICBhY3Rpb246IFwiL2FwaS91cGxvYWQvb3JnYW5pemF0aW9uXCIsXHJcbiAgICBwcmV2aWV3OiBmYWxzZSxcclxuICAgIGN1c3RvbVJlcXVlc3Q6IChvcHRpb25zKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgZGF0YS5hcHBlbmQoJ2lkJywgdXNlci50eXBlX3VzZXIgPT0gMSA/IFwiYWRtaW5cIiA6IHVzZXIub3JnYW5pemF0aW9uX2lkKVxyXG4gICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgXCJoZWFkZXJzXCI6IHtcclxuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6ICdtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0tLS0tV2ViS2l0Rm9ybUJvdW5kYXJ5cVRxSkl4dmtXRllxdlA1cydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYXhpb3MucG9zdChvcHRpb25zLmFjdGlvbiwgZGF0YSwgY29uZmlnKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRJbWFnZUxhbmRpbmdQYWdlUGVyc29uMyhyZXMuZGF0YS5kYXRhLmxpc3RbMF0uX25hbWUpXHJcbiAgICAgICAgb3B0aW9ucy5vblN1Y2Nlc3MocmVzLmRhdGEsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgfSlcclxuXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgb25DaGFuZ2UoaW5mbykge1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gaW5mby5maWxlXHJcbiAgICAgIHN3aXRjaCAoaW5mby5maWxlLnN0YXR1cykge1xyXG4gICAgICAgIGNhc2UgXCJkb25lXCI6XHJcbiAgICAgICAgICBpZiAoIWluZm8uZmlsZS51cmwgJiYgIWluZm8uZmlsZS5wcmV2aWV3KSB7XHJcbiAgICAgICAgICAgIGluZm8uZmlsZS5wcmV2aWV3ID0gYXdhaXQgZ2V0QmFzZTY0KGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjMoaW5mby5maWxlLnVybCB8fCBpbmZvLmZpbGUucHJldmlldylcclxuICAgICAgICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMyh0cnVlKVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgLy8gcmVzZXRJbWFnZVByZXZpZXcoKVxyXG4gICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIG9uUmVtb3ZlKGluZm8pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJvblJlbW92ZVwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhpbmZvKVxyXG4gICAgICByZXNldEltYWdlUHJldmlldygpXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzZXRJbWFnZVByZXZpZXcgPSAoKSA9PiB7XHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZUxvZ28oZmFsc2UpO1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24xKGZhbHNlKTtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMihmYWxzZSk7XHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjMoZmFsc2UpO1xyXG4gICAgc2V0UHJldmlld0ltYWdlTG9nbyhudWxsKTtcclxuICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjEobnVsbCk7XHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24yKG51bGwpO1xyXG4gICAgc2V0UHJldmlld0ltYWdlUGVyc29uMyhudWxsKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBnZXRCYXNlNjQoZmlsZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICByZWFkZXIub25lcnJvciA9IGVycm9yID0+IHJlamVjdChlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0XHJcbiAgICAgIHRpdGxlPVwiR292ZXJubWVudCAtIEFkbWluIG1hbmFnZW1lbnRcIlxyXG4gICAgICB1cmw9e29yaWdpbn1cclxuICAgICAgb3JpZ2luPXtvcmlnaW59XHJcbiAgICAgIC8vIHVzZXI9e2xvZ2lufVxyXG4gICAgICBpbmRleFN1Yk1lbnU9e1wiNlwifVxyXG4gICAgICBpbmRleE1lbnU9e1wic3ViLTYtMFwifVxyXG4gICAgICB0aXRsZVBhZ2U9XCLguILguYnguK3guKHguLnguKXguK3guIfguITguYzguIHguKNcIlxyXG4gICAgICBfcm91dGVzPXtbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGF0aDogJy9hZG1pbi9kYXNoYm9yYWQnLFxyXG4gICAgICAgICAgYnJlYWRjcnVtYk5hbWU6ICfguKvguJnguYnguLLguKvguKXguLHguIEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGF0aDogJy9hZG1pbi9zZXR0aW5nL3Byb2ZpbGUnLFxyXG4gICAgICAgICAgYnJlYWRjcnVtYk5hbWU6ICfguILguYnguK3guKHguLnguKXguK3guIfguITguYzguIHguKMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF19XHJcbiAgICA+XHJcbiAgICAgIHtjb250ZXh0SG9sZGVyfVxyXG4gICAgICA8bGlua1xyXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9yZWFjdC1xdWlsbEAxLjMuMy9kaXN0L3F1aWxsLnNub3cuY3NzXCJcclxuICAgICAgPjwvbGluaz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTUvNiBsZzp3LWZ1bGwgbXgtYXV0b1wiPlxyXG4gICAgICAgIDxGb3JtXHJcbiAgICAgICAgICBuYW1lPVwiYmFzaWNcIlxyXG4gICAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgb25GaW5pc2g9e29uU3VibWl0SGFuZGxlcn1cclxuICAgICAgICAgIHJlcXVpcmVkTWFyaz17dHJ1ZX1cclxuICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICBmaWVsZHM9e2ZpZWxkc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGxnOnctMS82ICBwci0yXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm9yZ2FuaXphdGlvbl9sb2dvXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWF1dG8gaC1hdXRvIHRleHQtY2VudGVyIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguYDguKXguLfguK3guIHguKDguLLguJ4gTG9nbyDguK3guIfguITguYzguIHguKMnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsvKiA8RHJhZ2dlciB7Li4uZHJvcGltZ30+ICovfVxyXG4gICAgICAgICAgICAgICAgPERyYWdnZXJcclxuICAgICAgICAgICAgICAgICAgbWF4Q291bnQ9ezF9XHJcbiAgICAgICAgICAgICAgICAgIC8vIGxpc3RUeXBlPVwicGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5qcGVnLCAucG5nXCJcclxuICAgICAgICAgICAgICAgICAgey4uLmltYWdlVXBsb2FkcHJvcHNMb2dvfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAge3ByZXZpZXdWaXNpYmxlTG9nbyAmJiA8PjxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcmV2aWV3SW1hZ2VMb2dvfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCBMb2dvIOC4reC4h+C4hOC5jOC4geC4o1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgeyFwcmV2aWV3VmlzaWJsZUxvZ28gJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEluYm94T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCBMb2dvIOC4reC4h+C4hOC5jOC4geC4o1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvRHJhZ2dlcj5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy01LzYgXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm9yZ2FuaXphdGlvbl9uYW1lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LiK4Li34LmI4Lit4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guKvguJnguYjguKfguKLguIfguLLguJknLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC4q+C4meC5iOC4p+C4ouC4h+C4suC4mVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwib3JnYW5pemF0aW9uX25hbWVfZW5nXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LiK4Li34LmI4Lit4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZIOC4oOC4suC4qeC4suC4reC4seC4h+C4geC4pOC4qVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4q+C4meC5iOC4p+C4ouC4h+C4suC4meC4oOC4suC4qeC4suC4reC4seC4h+C4geC4pOC4qScsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguIrguLfguYjguK3guKvguJnguYjguKfguKLguIfguLLguJkg4Lig4Liy4Lip4Liy4Lit4Lix4LiH4LiB4Lik4LipXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBuYW1lPVwib3JnYW5pemF0aW9uX2FkZHJlc3NcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIuC4l+C4teC5iOC4reC4ouC4ueC5iOC4q+C4meC5iOC4p+C4ouC4h+C4suC4mVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4l+C4teC5iOC4reC4ouC4ueC5iOC4q+C4meC5iOC4p+C4ouC4h+C4suC4mScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguJfguLXguYjguK3guKLguLnguYjguKvguJnguYjguKfguKLguIfguLLguJlcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAzLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggbGc6dy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctMS8zIG1yLTRcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicHJvdmluY2VzU2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguIjguLHguIfguKvguKfguLHguJRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIHctZnVsbCBmb250LWJvbGQgbWItMiBcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnQgIWltcG9ydGFudFwiIH19XHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iOC4seC4h+C4q+C4p+C4seC4lCcsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17KCk9PnByb3ZpbmNlc1NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyB3aWR0aDogMTIwIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQcm92aW5jZXNDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiMFwiPuC5gOC4peC4t+C4reC4gTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICB7cHJvdmluY2VzID8gcHJvdmluY2VzLm1hcCgob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxPcHRpb24gdmFsdWU9e29iamVjdC5wcm92aW5jZV9pZH0+e29iamVjdC5wcm92aW5jZV9uYW1lfSAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIH0pIDogXCJcIn1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzMgbGc6bXgtNFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJkaXN0cmljdFNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4Lit4Liz4LmA4Lig4LitXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGwgXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0ICFpbXBvcnRhbnRcIiB9fVxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguK3guLPguYDguKDguK0nLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9eygpPT5wcm92aW5jZXNTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3sgd2lkdGg6IDEyMCB9fVxyXG4gICAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRGlzdHJpY3RDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiMFwiPuC5gOC4peC4t+C4reC4gTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICB7ZGlzdHJpY3RzID8gZGlzdHJpY3RzLm1hcCgob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxPcHRpb24gdmFsdWU9e29iamVjdC5kaXN0cmljdF9pZH0+e29iamVjdC5kaXN0cmljdF9uYW1lfSAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIH0pIDogXCJcIn1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzMgbGc6bWwtNFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdWJEaXN0cmljdFNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LiV4Liz4Lia4LilXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGwgXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0ICFpbXBvcnRhbnRcIiB9fVxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguJXguLPguJrguKUnLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9eygpPT5wcm92aW5jZXNTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3sgd2lkdGg6IDEyMCB9fVxyXG4gICAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgIGZpbHRlck9wdGlvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIjBcIj7guYDguKXguLfguK3guIE8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAge3N1YkRpc3RyaWN0cyA/IHN1YkRpc3RyaWN0cy5tYXAoKG9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8T3B0aW9uIHZhbHVlPXtvYmplY3Quc3ViX2Rpc3RyaWN0X2lkfT57b2JqZWN0LnN1Yl9kaXN0cmljdF9uYW1lfSAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIH0pIDogXCJcIn1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCBsZzp3LTEvMiBsZzptci00XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm9yZ2FuaXphdGlvbl9waG9uZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC5gOC4muC4reC4o+C5jOC5guC4l+C4o1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LmA4Lia4Lit4Lij4LmM4LmC4LiX4LijJyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguYDguJrguK3guKPguYzguYLguJfguKNcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IGxnOnctMS8yIGxnOm1sLTRcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwib3JnYW5pemF0aW9uX2ZheFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC5gOC4muC4reC4o+C5jCBmYXhcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguYDguJrguK3guKPguYwgZmF4JyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC5gOC4muC4reC4o+C5jCBmYXhcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IGxnOnctMS8yIGxnOm1yLTRcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwib3JnYW5pemF0aW9uX2VtYWlsXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4Lit4Li14LmA4Lih4Lil4Lil4LmMXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguK3guLXguYDguKHguKXguKXguYwnLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4reC4teC5gOC4oeC4peC4peC5jFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggbGc6dy0xLzIgbGc6bWwtNFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJvcmdhbml6YXRpb25fZW1haWxfYWxlcnRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguK3guLXguYDguKHguKXguKXguYzguKrguLPguKvguKPguLHguJrguYHguIjguYnguIfguYDguJXguLfguK3guJlcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguK3guLXguYDguKHguKXguKXguYzguKrguLPguKvguKPguLHguJrguYHguIjguYnguIfguYDguJXguLfguK3guJknLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4Lit4Li14LmA4Lih4Lil4Lil4LmM4Liq4Liz4Lir4Lij4Lix4Lia4LmB4LiI4LmJ4LiH4LmA4LiV4Li34Lit4LiZXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCBsZzp3LTEvMiBsZzptci00XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInNvY2lhbF9mYl9wYWdlaWRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJmYWNlYm9vayBwYWdlIGlkXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiBIGZhY2Vib29rIHBhZ2UgaWQnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZmFjZWJvb2sgcGFnZSBpZFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggbGc6dy0xLzIgbGc6bWwtNFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJyc3NcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguKPguKvguLHguKrguKvguJnguYjguKfguKLguIfguLLguJnguKDguLLguITguKPguLHguJDguKrguLPguKvguKPguLHguJrguYDguIrguLfguK3guKHguJXguYjguK3guKPguLDguJrguJogRS1HUFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4o+C4q+C4seC4quC4q+C4meC5iOC4p+C4ouC4h+C4suC4meC4oOC4suC4hOC4o+C4seC4kOC4quC4s+C4q+C4o+C4seC4muC5gOC4iuC4t+C4reC4oeC4leC5iOC4reC4o+C4sOC4muC4miBFLUdQJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4o+C4q+C4seC4quC4q+C4meC5iOC4p+C4ouC4h+C4suC4meC4oOC4suC4hOC4o+C4seC4kOC4quC4s+C4q+C4o+C4seC4muC5gOC4iuC4t+C4reC4oeC4leC5iOC4reC4o+C4sOC4muC4miBFLUdQXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGhyXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0M0QzRDNCcsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTZcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggbGc6dy0xLzYgcHItMlwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wMV9pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1hdXRvIGgtYXV0byB0ZXh0LWNlbnRlciB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LmA4Lil4Li34Lit4LiB4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDEnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsvKiA8RHJhZ2dlciB7Li4uZHJvcGltZ30+ICovfVxyXG4gICAgICAgICAgICAgICAgPERyYWdnZXJcclxuICAgICAgICAgICAgICAgICAgbWF4Q291bnQ9ezF9XHJcbiAgICAgICAgICAgICAgICAgIC8vIGxpc3RUeXBlPVwicGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5qcGVnLCAucG5nXCJcclxuICAgICAgICAgICAgICAgICAgey4uLmltYWdlVXBsb2FkcHJvcHNQZXJzb24xfVxyXG4gICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAge3ByZXZpZXdWaXNpYmxlUGVyc29uMSAmJiA8PjxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJldmlld0ltYWdlUGVyc29uMX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTU2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4LiE4Lil4Li04LiBIOC4q+C4o+C4t+C4rSDguKXguLLguIHguYTguJ/guKXguYzguKHguLLguJfguLXguYjguJrguKPguLTguYDguKfguJPguJnguLXguYnguYDguJ7guLfguYjguK3guK3guLHguJvguYLguKvguKXguJQg4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDFcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHshcHJldmlld1Zpc2libGVQZXJzb24xICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC1kcmFnLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbmJveE91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4LiE4Lil4Li04LiBIOC4q+C4o+C4t+C4rSDguKXguLLguIHguYTguJ/guKXguYzguKHguLLguJfguLXguYjguJrguKPguLTguYDguKfguJPguJnguLXguYnguYDguJ7guLfguYjguK3guK3guLHguJvguYLguKvguKXguJQg4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDFcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0RyYWdnZXI+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctNS82IFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wMV9uYW1lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LiK4Li34LmI4Lit4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDFcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMScsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGVyc29uMDFfcG9zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguJXguLPguYHguKvguJnguYjguIfguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAxJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAxXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wMV9waG9uZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC5gOC4muC4reC4o+C5jOC5guC4l+C4o+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAxXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDEnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LmA4Lia4Lit4Lij4LmM4LmC4LiX4Lij4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDFcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGxnOnctMS82IHByLTJcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGVyc29uMDJfaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctYXV0byBoLWF1dG8gdGV4dC1jZW50ZXIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC5gOC4peC4t+C4reC4geC4oOC4suC4nuC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4l+C4teC5iCAyJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7LyogPERyYWdnZXIgey4uLmRyb3BpbWd9PiAqL31cclxuICAgICAgICAgICAgICAgIDxEcmFnZ2VyXHJcbiAgICAgICAgICAgICAgICAgIG1heENvdW50PXsxfVxyXG4gICAgICAgICAgICAgICAgICAvLyBsaXN0VHlwZT1cInBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAuanBlZywgLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIHsuLi5pbWFnZVVwbG9hZHByb3BzUGVyc29uMn1cclxuICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtwcmV2aWV3VmlzaWJsZVBlcnNvbjIgJiYgPD48SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJldmlld0ltYWdlUGVyc29uMn1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTU2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4LiE4Lil4Li04LiBIOC4q+C4o+C4t+C4rSDguKXguLLguIHguYTguJ/guKXguYzguKHguLLguJfguLXguYjguJrguKPguLTguYDguKfguJPguJnguLXguYnguYDguJ7guLfguYjguK3guK3guLHguJvguYLguKvguKXguJQg4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDJcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHshcHJldmlld1Zpc2libGVQZXJzb24yICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC1kcmFnLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbmJveE91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4LiE4Lil4Li04LiBIOC4q+C4o+C4t+C4rSDguKXguLLguIHguYTguJ/guKXguYzguKHguLLguJfguLXguYjguJrguKPguLTguYDguKfguJPguJnguLXguYnguYDguJ7guLfguYjguK3guK3guLHguJvguYLguKvguKXguJQg4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDJcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0RyYWdnZXI+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctNS82IFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wMl9uYW1lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LiK4Li34LmI4Lit4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMicsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMlwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGVyc29uMDJfcG9zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguJXguLPguYHguKvguJnguYjguIfguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMlwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAyJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAyXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wMl9waG9uZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC5gOC4muC4reC4o+C5jOC5guC4l+C4o+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAyXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDEnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LmA4Lia4Lit4Lij4LmM4LmC4LiX4Lij4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDJcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGxnOnctMS82IHByLTJcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGVyc29uMDNfaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctYXV0byBoLWF1dG8gdGV4dC1jZW50ZXIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC5gOC4peC4t+C4reC4geC4oOC4suC4nuC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4l+C4teC5iCAzJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7LyogPERyYWdnZXIgey4uLmRyb3BpbWd9PiAqL31cclxuICAgICAgICAgICAgICAgIDxEcmFnZ2VyXHJcbiAgICAgICAgICAgICAgICAgIG1heENvdW50PXsxfVxyXG4gICAgICAgICAgICAgICAgICAvLyBsaXN0VHlwZT1cInBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAuanBlZywgLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIHsuLi5pbWFnZVVwbG9hZHByb3BzUGVyc29uM31cclxuICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtwcmV2aWV3VmlzaWJsZVBlcnNvbjMgJiYgPD48SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJldmlld0ltYWdlUGVyc29uM31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTU2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4LiE4Lil4Li04LiBIOC4q+C4o+C4t+C4rSDguKXguLLguIHguYTguJ/guKXguYzguKHguLLguJfguLXguYjguJrguKPguLTguYDguKfguJPguJnguLXguYnguYDguJ7guLfguYjguK3guK3guLHguJvguYLguKvguKXguJQg4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDNcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHshcHJldmlld1Zpc2libGVQZXJzb24zICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC1kcmFnLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbmJveE91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4LiE4Lil4Li04LiBIOC4q+C4o+C4t+C4rSDguKXguLLguIHguYTguJ/guKXguYzguKHguLLguJfguLXguYjguJrguKPguLTguYDguKfguJPguJnguLXguYnguYDguJ7guLfguYjguK3guK3guLHguJvguYLguKvguKXguJQg4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDNcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0RyYWdnZXI+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctNS82IFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wM19uYW1lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LiK4Li34LmI4Lit4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMycsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggM1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGVyc29uMDNfcG9zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguJXguLPguYHguKvguJnguYjguIfguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggM1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAzJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAzXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wM19waG9uZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC5gOC4muC4reC4o+C5jOC5guC4l+C4o+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAzXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDEnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LmA4Lia4Lit4Lij4LmM4LmC4LiX4Lij4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDNcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIGNsYXNzTmFtZT1cImZsZXggbXQtNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbGc6dGV4dC1yaWdodCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlc2V0fVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNDMkNGRTAnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0MyQ0ZFMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzBweCAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLy8gaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSB3LWZ1bGwgbGc6dy0xLzRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbS1ibGFjayBcIj7guKPguLXguYDguIvguYfguJc8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgLy8gdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwNTk2NjknLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzA1OTY2OScsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzBweCAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHctZnVsbCBsZzp3LTEvNFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRleHQtY3VzdG9tLXdoaXRlIFwiPuC4muC4seC4meC4l+C4tuC4gTwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcbi8qIGdldFNlcnZlclNpZGVQcm9wcyAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHJlcSB9ID0gY29udGV4dDtcclxuICBjb25zdCB7IG9yaWdpbiB9ID0gYWJzb2x1dGVVcmwocmVxKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG9yaWdpbixcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
========
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9zZXR0aW5nL3Byb2ZpbGUvaW5kZXguanMiXSwibmFtZXMiOlsiSm9kaXRFZGl0b3IiLCJkeW5hbWljIiwic3NyIiwiVGV4dCIsIlR5cG9ncmFwaHkiLCJUaXRsZSIsIk9wdGlvbiIsIlNlbGVjdCIsIlRleHRBcmVhIiwiSW5wdXQiLCJjb25maWciLCJyZXF1aXJlIiwiSG9tZSIsInByb3BzIiwibm90aWZpY2F0aW9uIiwidXNlTm90aWZpY2F0aW9uIiwiYXBpIiwiY29udGV4dEhvbGRlciIsInVzZXIiLCJvcmlnaW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwcm9maWxlSWQiLCJxdWVyeSIsInVzZVN0YXRlIiwicHJvdmluY2VzIiwic2V0UHJvdmluY2VzIiwiZGlzdHJpY3RzIiwic2V0RGlzdHJpY3RzIiwic3ViRGlzdHJpY3RzIiwic2V0U3ViRGlzdHJpY3RzIiwicHJldmlld0ltYWdlTG9nbyIsInNldFByZXZpZXdJbWFnZUxvZ28iLCJwcmV2aWV3SW1hZ2VQZXJzb24xIiwic2V0UHJldmlld0ltYWdlUGVyc29uMSIsInByZXZpZXdJbWFnZVBlcnNvbjIiLCJzZXRQcmV2aWV3SW1hZ2VQZXJzb24yIiwicHJldmlld0ltYWdlUGVyc29uMyIsInNldFByZXZpZXdJbWFnZVBlcnNvbjMiLCJpbWFnZUxhbmRpbmdQYWdlTG9nbyIsInNldEltYWdlTGFuZGluZ1BhZ2VMb2dvIiwiaW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjEiLCJzZXRJbWFnZUxhbmRpbmdQYWdlUGVyc29uMSIsImltYWdlTGFuZGluZ1BhZ2VQZXJzb24yIiwic2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjIiLCJpbWFnZUxhbmRpbmdQYWdlUGVyc29uMyIsInNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24zIiwicHJldmlld1Zpc2libGVMb2dvIiwic2V0UHJldmlld1Zpc2libGVMb2dvIiwicHJldmlld1Zpc2libGVQZXJzb24xIiwic2V0UHJldmlld1Zpc2libGVQZXJzb24xIiwicHJldmlld1Zpc2libGVQZXJzb24yIiwic2V0UHJldmlld1Zpc2libGVQZXJzb24yIiwicHJldmlld1Zpc2libGVQZXJzb24zIiwic2V0UHJldmlld1Zpc2libGVQZXJzb24zIiwibG9nbyIsInNldExvZ28iLCJmaWVsZHMiLCJzZXRGaWVsZHMiLCJvcmdhbml6YXRpb25EYXRhIiwic2V0T3JnYW5pemF0aW9uRGF0YSIsInVzZUVmZmVjdCIsImZldGNoT3JnYW5pemF0aW9uRGF0YSIsImZldGNoUHJvdmluY2VzRGF0YSIsIm9uU3VibWl0SGFuZGxlciIsInZhbHVlIiwiZGF0YSIsIm9yZ2FuaXphdGlvbl9pZCIsIm9yZ2FuaXphdGlvbl9uYW1lIiwib3JnYW5pemF0aW9uX25hbWVfZW5nIiwib3JnYW5pemF0aW9uX2xvZ28iLCJvcmdhbml6YXRpb25fYWRkcmVzcyIsIm9yZ2FuaXphdGlvbl9zdWJfZGlzdHJpY3RfaWQiLCJzdWJEaXN0cmljdFNlbGVjdGVkIiwib3JnYW5pemF0aW9uX2VtYWlsIiwib3JnYW5pemF0aW9uX2VtYWlsX2FsZXJ0Iiwib3JnYW5pemF0aW9uX3Bob25lIiwib3JnYW5pemF0aW9uX2ZheCIsInNvY2lhbF9mYl9wYWdlaWQiLCJyc3MiLCJwZXJzb24wMV9uYW1lIiwicGVyc29uMDFfcG9zaXRpb24iLCJwZXJzb24wMV9pbWFnZSIsInBlcnNvbjAxX3Bob25lIiwicGVyc29uMDJfbmFtZSIsInBlcnNvbjAyX3Bvc2l0aW9uIiwicGVyc29uMDJfaW1hZ2UiLCJwZXJzb24wMl9waG9uZSIsInBlcnNvbjAzX25hbWUiLCJwZXJzb24wM19wb3NpdGlvbiIsInBlcnNvbjAzX2ltYWdlIiwicGVyc29uMDNfcGhvbmUiLCJjb25zb2xlIiwibG9nIiwiYXBpSW5zdGFuY2UiLCJwdXQiLCJzdGF0dXMiLCJvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJTdWNjZXNzIiwib3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbCIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZGVzY3JpcHRpb24iLCJwbGFjZW1lbnQiLCJtZXNzZ2FlIiwiZXJyb3IiLCJEcmFnZ2VyIiwiVXBsb2FkIiwiRm9ybSIsInVzZUZvcm0iLCJmb3JtIiwib25SZXNldCIsImZldGNoRGlzdHJpY3RzRGF0YSIsInN1Yl9kaXN0cmljdHMiLCJwcm92aW5jZV9pZCIsImZldGNoU3ViRGlzdHJpY3REYXRhIiwiZGlzdHJpY3RfaWQiLCJuYW1lIiwic3ViX2Rpc3RyaWN0X2lkIiwiZ2V0IiwiX29yZ2FuaXphdGlvbkRhdGEiLCJvcmdhbml6YXRpb24iLCJzZXRQcmV2aWV3SW1hZ2UiLCJzZXRQcmV2aWV3VmlzaWJsZSIsInNldEltYWdlTGFuZGluZ1BhZ2UiLCJ0aHVtYm5haWxfbGluayIsIl9wcm92aW5jZXNEYXRhIiwiX2Rpc3RyaWN0c0RhdGEiLCJzdWJEaXN0cmljdElEIiwiX3N1YkRpc3RyaWN0c0RhdGEiLCJoYW5kbGVQcm92aW5jZXNDaGFuZ2UiLCJoYW5kbGVEaXN0cmljdENoYW5nZSIsImltYWdlVXBsb2FkcHJvcHNMb2dvIiwibXVsdGlwbGUiLCJsaXN0VHlwZSIsIm1heENvdW50IiwiYWN0aW9uIiwicHJldmlldyIsImN1c3RvbVJlcXVlc3QiLCJvcHRpb25zIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmaWxlIiwidHlwZV91c2VyIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsImxpc3QiLCJfbmFtZSIsIm9uU3VjY2VzcyIsImVyciIsIm9uQ2hhbmdlIiwiaW5mbyIsInVybCIsImdldEJhc2U2NCIsIm9yaWdpbkZpbGVPYmoiLCJvblJlbW92ZSIsInJlc2V0SW1hZ2VQcmV2aWV3IiwiaW1hZ2VVcGxvYWRwcm9wc1BlcnNvbjEiLCJpbWFnZVVwbG9hZHByb3BzUGVyc29uMiIsImltYWdlVXBsb2FkcHJvcHNQZXJzb24zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJwYXRoIiwiYnJlYWRjcnVtYk5hbWUiLCJoZWlnaHQiLCJ3aWR0aCIsIm9iamVjdEZpdCIsInJlcXVpcmVkIiwibWluUm93cyIsIm1heFJvd3MiLCJ0ZXh0QWxpZ24iLCJtYXAiLCJvYmplY3QiLCJwcm92aW5jZV9uYW1lIiwiZGlzdHJpY3RfbmFtZSIsInN1Yl9kaXN0cmljdF9uYW1lIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5SaWdodCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUlBLElBQU1BLFdBQVcsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sd0pBQU47QUFBQSxDQUFELEVBQThCO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUFoQixvRUFBZ0I7QUFBQTtBQUFBLGNBQWhCLGFBQWdCO0FBQUE7QUFBQSxDQUE5QixDQUEzQjtNQUFNRixXO0FBQ04sSUFBUUcsSUFBUixHQUF3QkMsK0NBQXhCLENBQVFELElBQVI7QUFBQSxJQUFjRSxLQUFkLEdBQXdCRCwrQ0FBeEIsQ0FBY0MsS0FBZDtBQUNBLElBQVFDLE1BQVIsR0FBbUJDLDJDQUFuQixDQUFRRCxNQUFSO0FBRUEsSUFBUUUsUUFBUixHQUFxQkMsMENBQXJCLENBQVFELFFBQVI7O0FBQ0EsSUFBTUUsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDZDQUFELENBQXRCOzs7QUFFZSxTQUFTQyxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQTs7QUFDbEMsOEJBQTZCQyxpREFBWSxDQUFDQyxlQUFiLEVBQTdCO0FBQUE7QUFBQSxNQUFPQyxHQUFQO0FBQUEsTUFBWUMsYUFBWjs7QUFDQSxNQUFRQyxJQUFSLEdBQXlCTCxLQUF6QixDQUFRSyxJQUFSO0FBQUEsTUFBY0MsTUFBZCxHQUF5Qk4s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OztHQTUwQ3dCaEwsSTtVQUNPRSxpREFBWSxDQUFDQyxlLEVBRTNCTSxxRCxFQWtGQXNGLHlDQUFJLENBQUNDLE87OztNQXJGRWhHLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFkbWluXFxzZXR0aW5nXFxwcm9maWxlLmpzLmFiZjk5NTBiOWEwOTI1ZGRjMmY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmJveE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbiwgRm9ybSwgSW1hZ2UsIElucHV0LCBub3RpZmljYXRpb24sIFNlbGVjdCwgVHlwb2dyYXBoeSwgVXBsb2FkXHJcbn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuLy8gaW1wb3J0IFVzZXJOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL1VzZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuLyogY29tcG9uZW50cyAqL1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dEFkbWluJztcclxuLyogdXRpbHMgKi9cclxuaW1wb3J0IHtcclxuICBhYnNvbHV0ZVVybCwgYXBpSW5zdGFuY2VcclxufSBmcm9tICcuLi8uLi8uLi8uLi9taWRkbGV3YXJlL3V0aWxzJztcclxuXHJcbmNvbnN0IEpvZGl0RWRpdG9yID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJqb2RpdC1yZWFjdFwiKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5jb25zdCB7IFRleHQsIFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4uLy4uL2NvbmZpZycpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG4gIGNvbnN0IFthcGksIGNvbnRleHRIb2xkZXJdID0gbm90aWZpY2F0aW9uLnVzZU5vdGlmaWNhdGlvbigpO1xyXG4gIGNvbnN0IHsgdXNlciwgb3JpZ2luIH0gPSBwcm9wcztcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHByb2ZpbGVJZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IFtwcm92aW5jZXMsIHNldFByb3ZpbmNlc10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtkaXN0cmljdHMsIHNldERpc3RyaWN0c10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtzdWJEaXN0cmljdHMsIHNldFN1YkRpc3RyaWN0c10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtwcmV2aWV3SW1hZ2VMb2dvLCBzZXRQcmV2aWV3SW1hZ2VMb2dvXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3ByZXZpZXdJbWFnZVBlcnNvbjEsIHNldFByZXZpZXdJbWFnZVBlcnNvbjFdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbcHJldmlld0ltYWdlUGVyc29uMiwgc2V0UHJldmlld0ltYWdlUGVyc29uMl0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtwcmV2aWV3SW1hZ2VQZXJzb24zLCBzZXRQcmV2aWV3SW1hZ2VQZXJzb24zXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2ltYWdlTGFuZGluZ1BhZ2VMb2dvLCBzZXRJbWFnZUxhbmRpbmdQYWdlTG9nb10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtpbWFnZUxhbmRpbmdQYWdlUGVyc29uMSwgc2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjFdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbaW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjIsIHNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24yXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2ltYWdlTGFuZGluZ1BhZ2VQZXJzb24zLCBzZXRJbWFnZUxhbmRpbmdQYWdlUGVyc29uM10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtwcmV2aWV3VmlzaWJsZUxvZ28sIHNldFByZXZpZXdWaXNpYmxlTG9nb10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbcHJldmlld1Zpc2libGVQZXJzb24xLCBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjFdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3ByZXZpZXdWaXNpYmxlUGVyc29uMiwgc2V0UHJldmlld1Zpc2libGVQZXJzb24yXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtwcmV2aWV3VmlzaWJsZVBlcnNvbjMsIHNldFByZXZpZXdWaXNpYmxlUGVyc29uM10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbG9nbywgc2V0TG9nb10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbZmllbGRzLCBzZXRGaWVsZHNdID0gdXNlU3RhdGUoW1xyXG4gIF0pO1xyXG4gIGNvbnN0IFtvcmdhbml6YXRpb25EYXRhLCBzZXRPcmdhbml6YXRpb25EYXRhXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaE9yZ2FuaXphdGlvbkRhdGEoKTtcclxuICAgIGZldGNoUHJvdmluY2VzRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXRIYW5kbGVyKHZhbHVlKSB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBvcmdhbml6YXRpb25faWQ6IHVzZXIub3JnYW5pemF0aW9uX2lkLFxyXG4gICAgICBvcmdhbml6YXRpb25fbmFtZTogdmFsdWUub3JnYW5pemF0aW9uX25hbWUsXHJcbiAgICAgIG9yZ2FuaXphdGlvbl9uYW1lX2VuZzogdmFsdWUub3JnYW5pemF0aW9uX25hbWVfZW5nLFxyXG4gICAgICBvcmdhbml6YXRpb25fbG9nbzogaW1hZ2VMYW5kaW5nUGFnZUxvZ28sXHJcbiAgICAgIG9yZ2FuaXphdGlvbl9hZGRyZXNzOiB2YWx1ZS5vcmdhbml6YXRpb25fYWRkcmVzcyxcclxuICAgICAgb3JnYW5pemF0aW9uX3N1Yl9kaXN0cmljdF9pZDogdmFsdWUuc3ViRGlzdHJpY3RTZWxlY3RlZCxcclxuICAgICAgb3JnYW5pemF0aW9uX2VtYWlsOiB2YWx1ZS5vcmdhbml6YXRpb25fZW1haWwsXHJcbiAgICAgIG9yZ2FuaXphdGlvbl9lbWFpbF9hbGVydDogdmFsdWUub3JnYW5pemF0aW9uX2VtYWlsX2FsZXJ0LFxyXG4gICAgICBvcmdhbml6YXRpb25fcGhvbmU6IHZhbHVlLm9yZ2FuaXphdGlvbl9waG9uZSxcclxuICAgICAgb3JnYW5pemF0aW9uX2ZheDogdmFsdWUub3JnYW5pemF0aW9uX2ZheCxcclxuICAgICAgc29jaWFsX2ZiX3BhZ2VpZDogdmFsdWUuc29jaWFsX2ZiX3BhZ2VpZCxcclxuICAgICAgcnNzOiB2YWx1ZS5yc3MsXHJcbiAgICAgIHBlcnNvbjAxX25hbWU6IHZhbHVlLnBlcnNvbjAxX25hbWUsXHJcbiAgICAgIHBlcnNvbjAxX3Bvc2l0aW9uOiB2YWx1ZS5wZXJzb24wMV9wb3NpdGlvbixcclxuICAgICAgcGVyc29uMDFfaW1hZ2U6IGltYWdlTGFuZGluZ1BhZ2VQZXJzb24xLFxyXG4gICAgICBwZXJzb24wMV9waG9uZTogdmFsdWUucGVyc29uMDFfcGhvbmUsXHJcbiAgICAgIHBlcnNvbjAyX25hbWU6IHZhbHVlLnBlcnNvbjAyX25hbWUsXHJcbiAgICAgIHBlcnNvbjAyX3Bvc2l0aW9uOiB2YWx1ZS5wZXJzb24wMl9wb3NpdGlvbixcclxuICAgICAgcGVyc29uMDJfaW1hZ2U6IGltYWdlTGFuZGluZ1BhZ2VQZXJzb24yLFxyXG4gICAgICBwZXJzb24wMl9waG9uZTogdmFsdWUucGVyc29uMDJfcGhvbmUsXHJcbiAgICAgIHBlcnNvbjAzX25hbWU6IHZhbHVlLnBlcnNvbjAzX25hbWUsXHJcbiAgICAgIHBlcnNvbjAzX3Bvc2l0aW9uOiB2YWx1ZS5wZXJzb24wM19wb3NpdGlvbixcclxuICAgICAgcGVyc29uMDNfaW1hZ2U6IGltYWdlTGFuZGluZ1BhZ2VQZXJzb24zLFxyXG4gICAgICBwZXJzb24wM19waG9uZTogdmFsdWUucGVyc29uMDNfcGhvbmUsXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIGNvbnN0IG9yZ2FuaXphdGlvbkRhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLnB1dCgnL3Byb2ZpbGUnLCBkYXRhKTtcclxuICAgIGlmIChvcmdhbml6YXRpb25EYXRhLmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICBvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJTdWNjZXNzKCk7XHJcbiAgICAgIGZldGNoT3JnYW5pemF0aW9uRGF0YSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbChvcmdhbml6YXRpb25EYXRhLmRhdGEubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJTdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgbm90aWZpY2F0aW9uLnN1Y2Nlc3Moe1xyXG4gICAgICBtZXNzYWdlOiBg4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIYCxcclxuICAgICAgZGVzY3JpcHRpb246ICfguJrguLHguJnguJfguLbguIHguILguYnguK3guKHguLnguKXguKrguLPguYDguKPguYfguIgnLFxyXG4gICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJGYWlsID0gbWVzc2dhZSA9PiB7XHJcbiAgICBub3RpZmljYXRpb24uZXJyb3Ioe1xyXG4gICAgICBtZXNzYWdlOiBg4Lie4Lia4Lib4Lix4LiN4Lir4Liy4Lij4Liw4Lir4Lin4LmI4Liy4LiH4LiB4Liy4Lij4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54LilYCxcclxuICAgICAgZGVzY3JpcHRpb246IG1lc3NnYWUsXHJcbiAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHsgRHJhZ2dlciB9ID0gVXBsb2FkO1xyXG5cclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuXHJcbiAgY29uc3Qgb25SZXNldCA9ICgpID0+IHtcclxuICAgIGZldGNoRGlzdHJpY3RzRGF0YShvcmdhbml6YXRpb25EYXRhLnN1Yl9kaXN0cmljdHMgPyBvcmdhbml6YXRpb25EYXRhLnN1Yl9kaXN0cmljdHMucHJvdmluY2VzLnByb3ZpbmNlX2lkIDogMClcclxuICAgIGZldGNoU3ViRGlzdHJpY3REYXRhKG9yZ2FuaXphdGlvbkRhdGEuc3ViX2Rpc3RyaWN0cyA/IG9yZ2FuaXphdGlvbkRhdGEuc3ViX2Rpc3RyaWN0cy5kaXN0cmljdHMuZGlzdHJpY3RfaWQgOiAwKVxyXG4gICAgc2V0RmllbGRzKFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX2xvZ28nXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fbG9nbyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX25hbWUnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fbmFtZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX25hbWVfZW5nJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEub3JnYW5pemF0aW9uX25hbWVfZW5nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fcGhvbmUnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fcGhvbmUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9lbWFpbCddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9lbWFpbCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX2ZheCddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9mYXhcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX2FkZHJlc3MnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fYWRkcmVzcyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncHJvdmluY2VzU2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzID8gb3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzLnByb3ZpbmNlcy5wcm92aW5jZV9pZCA6IFwiMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2Rpc3RyaWN0U2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzID8gb3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzLmRpc3RyaWN0cy5kaXN0cmljdF9pZCA6IFwiMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3N1YkRpc3RyaWN0U2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzID8gb3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzLnN1Yl9kaXN0cmljdF9pZCA6IFwiMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3NvY2lhbF9mYl9wYWdlaWQnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5zb2NpYWxfZmJfcGFnZWlkXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9lbWFpbF9hbGVydCddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9lbWFpbF9hbGVydFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydyc3MnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5yc3NcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDFfbmFtZSddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAxX25hbWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAxX3Bvc2l0aW9uJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDFfcG9zaXRpb24sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAxX3Bob25lJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDFfcGhvbmUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAyX25hbWUnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5wZXJzb24wMl9uYW1lLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wMl9wb3NpdGlvbiddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAyX3Bvc2l0aW9uLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wMl9waG9uZSddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAyX3Bob25lLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wM19uYW1lJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDNfbmFtZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDNfcG9zaXRpb24nXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5wZXJzb24wM19wb3NpdGlvbixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDNfcGhvbmUnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5wZXJzb24wM19waG9uZSxcclxuICAgICAgfVxyXG4gICAgXSk7XHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VMb2dvKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArIHVzZXIub3JnYW5pemF0aW9uX2lkICsgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArIG9yZ2FuaXphdGlvbkRhdGEub3JnYW5pemF0aW9uX2xvZ28pO1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVMb2dvKHRydWUpO1xyXG4gICAgc2V0SW1hZ2VMYW5kaW5nUGFnZUxvZ28ob3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fbG9nbyk7XHJcblxyXG4gICAgc2V0UHJldmlld0ltYWdlUGVyc29uMSgnLi5cXFxcLi5cXFxcLi5cXFxcdXBsb2Fkc1xcXFxjLScgKyB1c2VyLm9yZ2FuaXphdGlvbl9pZCArICdcXFxcb3JnYW5pemF0aW9uXFxcXCcgKyBvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAxX2ltYWdlKTtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMSh0cnVlKTtcclxuICAgIHNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24xKG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDFfaW1hZ2UpO1xyXG5cclxuICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjIoJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICsgdXNlci5vcmdhbml6YXRpb25faWQgKyAnXFxcXG9yZ2FuaXphdGlvblxcXFwnICsgb3JnYW5pemF0aW9uRGF0YS5wZXJzb24wMl9pbWFnZSk7XHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjIodHJ1ZSk7XHJcbiAgICBzZXRJbWFnZUxhbmRpbmdQYWdlUGVyc29uMihvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAyX2ltYWdlKTtcclxuXHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24zKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArIHVzZXIub3JnYW5pemF0aW9uX2lkICsgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArIG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDNfaW1hZ2UpO1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24zKHRydWUpO1xyXG4gICAgc2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjMob3JnYW5pemF0aW9uRGF0YS5wZXJzb24wM19pbWFnZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hPcmdhbml6YXRpb25EYXRhID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IF9vcmdhbml6YXRpb25EYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICdvcmdhbml6YXRpb24vJyArICh1c2VyID8gdXNlci5vcmdhbml6YXRpb25faWQgOiAwKVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbilcclxuICAgIHNldE9yZ2FuaXphdGlvbkRhdGEoX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24pXHJcbiAgICBmZXRjaERpc3RyaWN0c0RhdGEoX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24uc3ViX2Rpc3RyaWN0cyA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnN1Yl9kaXN0cmljdHMucHJvdmluY2VzLnByb3ZpbmNlX2lkIDogMClcclxuICAgIGZldGNoU3ViRGlzdHJpY3REYXRhKF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnN1Yl9kaXN0cmljdHMgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5zdWJfZGlzdHJpY3RzLmRpc3RyaWN0cy5kaXN0cmljdF9pZCA6IDApXHJcblxyXG4gICAgc2V0UHJldmlld0ltYWdlKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArIHVzZXIub3JnYW5pemF0aW9uX2lkICsgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArIF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9sb2dvKTtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlKHRydWUpO1xyXG4gICAgc2V0SW1hZ2VMYW5kaW5nUGFnZShfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fbG9nbyk7XHJcblxyXG4gICAgLy8gaWYgKF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9sb2dvKSB7XHJcbiAgICAvLyAgIHNldFByZXZpZXdJbWFnZUxvZ28oXHJcbiAgICAvLyAgICAgJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICtcclxuICAgIC8vICAgICB1c2VyLm9yZ2FuaXphdGlvbl9pZCArXHJcbiAgICAvLyAgICAgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArXHJcbiAgICAvLyAgICAgX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2xvZ28sXHJcbiAgICAvLyAgIClcclxuICAgIC8vICAgc2V0UHJldmlld1Zpc2libGVMb2dvKHRydWUpXHJcbiAgICAvLyB9XHJcbiAgICAvLyBpZiAoX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDFfaW1hZ2UpIHtcclxuICAgIC8vICAgc2V0UHJldmlld0ltYWdlUGVyc29uMSgnLi5cXFxcLi5cXFxcLi5cXFxcdXBsb2Fkc1xcXFxjLScgK1xyXG4gICAgLy8gICAgIHVzZXIub3JnYW5pemF0aW9uX2lkICtcclxuICAgIC8vICAgICAnXFxcXG9yZ2FuaXphdGlvblxcXFwnICtcclxuICAgIC8vICAgICBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMV9pbWFnZSlcclxuICAgIC8vICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24xKHRydWUpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGlmIChfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMl9pbWFnZSkge1xyXG4gICAgLy8gICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24yKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArXHJcbiAgICAvLyAgICAgdXNlci5vcmdhbml6YXRpb25faWQgK1xyXG4gICAgLy8gICAgICdcXFxcb3JnYW5pemF0aW9uXFxcXCcgK1xyXG4gICAgLy8gICAgIF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAyX2ltYWdlKVxyXG4gICAgLy8gICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjIodHJ1ZSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaWYgKF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAzX2ltYWdlKSB7XHJcbiAgICAvLyAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjMoJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICtcclxuICAgIC8vICAgICB1c2VyLm9yZ2FuaXphdGlvbl9pZCArXHJcbiAgICAvLyAgICAgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArXHJcbiAgICAvLyAgICAgX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDNfaW1hZ2UpXHJcbiAgICAvLyAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMyh0cnVlKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBzZXRQcmV2aWV3SW1hZ2VMb2dvKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArIHVzZXIub3JnYW5pemF0aW9uX2lkICsgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArIF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9sb2dvKTtcclxuICAgIC8vIHNldFByZXZpZXdWaXNpYmxlTG9nbyh0cnVlKTtcclxuICAgIC8vIHNldEltYWdlTGFuZGluZ1BhZ2VMb2dvKF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9sb2dvKTtcclxuICAgIHNldEZpZWxkcyhbXHJcbiAgICAgIC8vIHtcclxuICAgICAgLy8gICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9sb2dvJ10sXHJcbiAgICAgIC8vICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9sb2dvXHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9uYW1lJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9uYW1lID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX25hbWUgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9uYW1lX2VuZyddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fbmFtZV9lbmcgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fbmFtZV9lbmcgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9waG9uZSddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fcGhvbmUgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fcGhvbmUgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9lbWFpbCddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fZW1haWwgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fZW1haWwgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3Byb3ZpbmNlc1NlbGVjdGVkJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnN1Yl9kaXN0cmljdHMgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5zdWJfZGlzdHJpY3RzLnByb3ZpbmNlcy5wcm92aW5jZV9pZCA6IFwiMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2Rpc3RyaWN0U2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24uc3ViX2Rpc3RyaWN0cyA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnN1Yl9kaXN0cmljdHMuZGlzdHJpY3RzLmRpc3RyaWN0X2lkIDogXCIwXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnc3ViRGlzdHJpY3RTZWxlY3RlZCddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5zdWJfZGlzdHJpY3RzID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24uc3ViX2Rpc3RyaWN0cy5zdWJfZGlzdHJpY3RfaWQgOiBcIjBcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fZmF4J10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9mYXggPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fZmF4IDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWyd0aHVtYm5haWxfbGluayddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi50aHVtYm5haWxfbGluayA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnRodW1ibmFpbF9saW5rIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fYWRkcmVzcyddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fYWRkcmVzcyA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9hZGRyZXNzIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fZW1haWxfYWxlcnQnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2VtYWlsX2FsZXJ0ID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2VtYWlsX2FsZXJ0IDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydzb2NpYWxfZmJfcGFnZWlkJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnNvY2lhbF9mYl9wYWdlaWQgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5zb2NpYWxfZmJfcGFnZWlkIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydyc3MnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucnNzID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucnNzIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wMV9uYW1lJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAxX25hbWUgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMV9uYW1lIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wMV9wb3NpdGlvbiddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMV9wb3NpdGlvbiA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAxX3Bvc2l0aW9uIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wMV9waG9uZSddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMV9waG9uZSA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAxX3Bob25lIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wMl9uYW1lJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAyX25hbWUgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMl9uYW1lIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wMl9wb3NpdGlvbiddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMl9wb3NpdGlvbiA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAyX3Bvc2l0aW9uIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wMl9waG9uZSddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMl9waG9uZSA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAyX3Bob25lIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wM19uYW1lJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAzX25hbWUgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wM19uYW1lIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wM19wb3NpdGlvbiddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wM19wb3NpdGlvbiA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAzX3Bvc2l0aW9uIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wM19waG9uZSddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wM19waG9uZSA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAzX3Bob25lIDogXCJcIlxyXG4gICAgICB9LFxyXG5cclxuXHJcbiAgICBdKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoUHJvdmluY2VzRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IF9wcm92aW5jZXNEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICdwcm92aW5jZSdcclxuICAgICk7XHJcblxyXG4gICAgc2V0UHJvdmluY2VzKF9wcm92aW5jZXNEYXRhLmRhdGEuZGF0YSlcclxuICAgIC8vIGNvbnNvbGUubG9nKF9wcm92aW5jZXNEYXRhLmRhdGEuZGF0YSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGZldGNoRGlzdHJpY3RzRGF0YSA9IGFzeW5jIChwcm92aW5jZV9pZCkgPT4ge1xyXG4gICAgY29uc3QgX2Rpc3RyaWN0c0RhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ2Rpc3RyaWN0LycgKyBwcm92aW5jZV9pZFxyXG4gICAgKTtcclxuXHJcbiAgICBzZXREaXN0cmljdHMoX2Rpc3RyaWN0c0RhdGEuZGF0YS5kYXRhKVxyXG4gICAgLy8gY29uc29sZS5sb2coX2Rpc3RyaWN0c0RhdGEuZGF0YS5kYXRhKVxyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0IGZldGNoU3ViRGlzdHJpY3REYXRhID0gYXN5bmMgKHN1YkRpc3RyaWN0SUQpID0+IHtcclxuICAgIGNvbnN0IF9zdWJEaXN0cmljdHNEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICdzdWItZGlzdHJpY3QvJyArIHN1YkRpc3RyaWN0SURcclxuICAgICk7XHJcblxyXG4gICAgc2V0U3ViRGlzdHJpY3RzKF9zdWJEaXN0cmljdHNEYXRhLmRhdGEuZGF0YSlcclxuICAgIC8vIGNvbnNvbGUubG9nKF9zdWJEaXN0cmljdHNEYXRhLmRhdGEuZGF0YSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByb3ZpbmNlc0NoYW5nZSA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgc2V0RmllbGRzKFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncHJvdmluY2VzU2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnZGlzdHJpY3RTZWxlY3RlZCddLFxyXG4gICAgICAgIHZhbHVlOiBcIjBcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydzdWJEaXN0cmljdFNlbGVjdGVkJ10sXHJcbiAgICAgICAgdmFsdWU6IFwiMFwiXHJcbiAgICAgIH0sXHJcblxyXG4gICAgXSlcclxuICAgIGZldGNoRGlzdHJpY3RzRGF0YSh2YWx1ZSk7XHJcbiAgICBzZXRTdWJEaXN0cmljdHMoW10pXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVEaXN0cmljdENoYW5nZSA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0RmllbGRzKFtcclxuXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2Rpc3RyaWN0U2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnc3ViRGlzdHJpY3RTZWxlY3RlZCddLFxyXG4gICAgICAgIHZhbHVlOiBcIjBcIlxyXG4gICAgICB9LFxyXG5cclxuICAgIF0pXHJcbiAgICBmZXRjaFN1YkRpc3RyaWN0RGF0YSh2YWx1ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGltYWdlVXBsb2FkcHJvcHNMb2dvID0ge1xyXG4gICAgbmFtZTogJ2ZpbGUnLFxyXG4gICAgbXVsdGlwbGU6IGZhbHNlLFxyXG4gICAgbGlzdFR5cGU6ICd0ZXh0JyxcclxuICAgIG1heENvdW50OiAxLFxyXG4gICAgYWN0aW9uOiBcIi9hcGkvdXBsb2FkL29yZ2FuaXphdGlvblwiLFxyXG4gICAgcHJldmlldzogZmFsc2UsXHJcbiAgICBjdXN0b21SZXF1ZXN0OiAob3B0aW9ucykgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdpZCcsIHVzZXIudHlwZV91c2VyID09IDEgPyBcImFkbWluXCIgOiB1c2VyLm9yZ2FuaXphdGlvbl9pZClcclxuICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgIFwiaGVhZGVyc1wiOiB7XHJcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9LS0tLVdlYktpdEZvcm1Cb3VuZGFyeXFUcUpJeHZrV0ZZcXZQNXMnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGF4aW9zLnBvc3Qob3B0aW9ucy5hY3Rpb24sIGRhdGEsIGNvbmZpZykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0SW1hZ2VMYW5kaW5nUGFnZUxvZ28ocmVzLmRhdGEuZGF0YS5saXN0WzBdLl9uYW1lKVxyXG4gICAgICAgIG9wdGlvbnMub25TdWNjZXNzKHJlcy5kYXRhLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfSxcclxuICAgIGFzeW5jIG9uQ2hhbmdlKGluZm8pIHtcclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGluZm8uZmlsZVxyXG4gICAgICBzd2l0Y2ggKGluZm8uZmlsZS5zdGF0dXMpIHtcclxuICAgICAgICBjYXNlIFwiZG9uZVwiOlxyXG4gICAgICAgICAgaWYgKCFpbmZvLmZpbGUudXJsICYmICFpbmZvLmZpbGUucHJldmlldykge1xyXG4gICAgICAgICAgICBpbmZvLmZpbGUucHJldmlldyA9IGF3YWl0IGdldEJhc2U2NChpbmZvLmZpbGUub3JpZ2luRmlsZU9iaik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRQcmV2aWV3SW1hZ2VMb2dvKGluZm8uZmlsZS51cmwgfHwgaW5mby5maWxlLnByZXZpZXcpXHJcbiAgICAgICAgICBzZXRQcmV2aWV3VmlzaWJsZUxvZ28odHJ1ZSlcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIC8vIGVycm9yIG9yIHJlbW92ZWRcclxuICAgICAgICAvLyByZXNldEltYWdlUHJldmlldygpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgb25SZW1vdmUoaW5mbykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9uUmVtb3ZlXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbWFnZVVwbG9hZHByb3BzUGVyc29uMSA9IHtcclxuICAgIG5hbWU6ICdmaWxlJyxcclxuICAgIG11bHRpcGxlOiBmYWxzZSxcclxuICAgIGxpc3RUeXBlOiAndGV4dCcsXHJcbiAgICBtYXhDb3VudDogMSxcclxuICAgIGFjdGlvbjogXCIvYXBpL3VwbG9hZC9vcmdhbml6YXRpb25cIixcclxuICAgIHByZXZpZXc6IGZhbHNlLFxyXG4gICAgY3VzdG9tUmVxdWVzdDogKG9wdGlvbnMpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgb3B0aW9ucy5maWxlKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnaWQnLCB1c2VyLnR5cGVfdXNlciA9PSAxID8gXCJhZG1pblwiIDogdXNlci5vcmdhbml6YXRpb25faWQpXHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICBcImhlYWRlcnNcIjoge1xyXG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogJ211bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PS0tLS1XZWJLaXRGb3JtQm91bmRhcnlxVHFKSXh2a1dGWXF2UDVzJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBheGlvcy5wb3N0KG9wdGlvbnMuYWN0aW9uLCBkYXRhLCBjb25maWcpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24xKHJlcy5kYXRhLmRhdGEubGlzdFswXS5fbmFtZSlcclxuICAgICAgICBvcHRpb25zLm9uU3VjY2VzcyhyZXMuZGF0YSwgb3B0aW9ucy5maWxlKVxyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICB9KVxyXG5cclxuICAgIH0sXHJcbiAgICBhc3luYyBvbkNoYW5nZShpbmZvKSB7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBpbmZvLmZpbGVcclxuICAgICAgc3dpdGNoIChpbmZvLmZpbGUuc3RhdHVzKSB7XHJcbiAgICAgICAgY2FzZSBcImRvbmVcIjpcclxuICAgICAgICAgIGlmICghaW5mby5maWxlLnVybCAmJiAhaW5mby5maWxlLnByZXZpZXcpIHtcclxuICAgICAgICAgICAgaW5mby5maWxlLnByZXZpZXcgPSBhd2FpdCBnZXRCYXNlNjQoaW5mby5maWxlLm9yaWdpbkZpbGVPYmopO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0UHJldmlld0ltYWdlUGVyc29uMShpbmZvLmZpbGUudXJsIHx8IGluZm8uZmlsZS5wcmV2aWV3KVxyXG4gICAgICAgICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24xKHRydWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgLy8gcmVzZXRJbWFnZVByZXZpZXcoKVxyXG4gICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIG9uUmVtb3ZlKGluZm8pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJvblJlbW92ZVwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhpbmZvKVxyXG4gICAgICByZXNldEltYWdlUHJldmlldygpXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaW1hZ2VVcGxvYWRwcm9wc1BlcnNvbjIgPSB7XHJcbiAgICBuYW1lOiAnZmlsZScsXHJcbiAgICBtdWx0aXBsZTogZmFsc2UsXHJcbiAgICBsaXN0VHlwZTogJ3RleHQnLFxyXG4gICAgbWF4Q291bnQ6IDEsXHJcbiAgICBhY3Rpb246IFwiL2FwaS91cGxvYWQvb3JnYW5pemF0aW9uXCIsXHJcbiAgICBwcmV2aWV3OiBmYWxzZSxcclxuICAgIGN1c3RvbVJlcXVlc3Q6IChvcHRpb25zKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgZGF0YS5hcHBlbmQoJ2lkJywgdXNlci50eXBlX3VzZXIgPT0gMSA/IFwiYWRtaW5cIiA6IHVzZXIub3JnYW5pemF0aW9uX2lkKVxyXG4gICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgXCJoZWFkZXJzXCI6IHtcclxuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6ICdtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0tLS0tV2ViS2l0Rm9ybUJvdW5kYXJ5cVRxSkl4dmtXRllxdlA1cydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYXhpb3MucG9zdChvcHRpb25zLmFjdGlvbiwgZGF0YSwgY29uZmlnKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRJbWFnZUxhbmRpbmdQYWdlUGVyc29uMihyZXMuZGF0YS5kYXRhLmxpc3RbMF0uX25hbWUpXHJcbiAgICAgICAgb3B0aW9ucy5vblN1Y2Nlc3MocmVzLmRhdGEsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgfSlcclxuXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgb25DaGFuZ2UoaW5mbykge1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gaW5mby5maWxlXHJcbiAgICAgIHN3aXRjaCAoaW5mby5maWxlLnN0YXR1cykge1xyXG4gICAgICAgIGNhc2UgXCJkb25lXCI6XHJcbiAgICAgICAgICBpZiAoIWluZm8uZmlsZS51cmwgJiYgIWluZm8uZmlsZS5wcmV2aWV3KSB7XHJcbiAgICAgICAgICAgIGluZm8uZmlsZS5wcmV2aWV3ID0gYXdhaXQgZ2V0QmFzZTY0KGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjIoaW5mby5maWxlLnVybCB8fCBpbmZvLmZpbGUucHJldmlldylcclxuICAgICAgICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMih0cnVlKVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgLy8gcmVzZXRJbWFnZVByZXZpZXcoKVxyXG4gICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIG9uUmVtb3ZlKGluZm8pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJvblJlbW92ZVwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhpbmZvKVxyXG4gICAgICByZXNldEltYWdlUHJldmlldygpXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaW1hZ2VVcGxvYWRwcm9wc1BlcnNvbjMgPSB7XHJcbiAgICBuYW1lOiAnZmlsZScsXHJcbiAgICBtdWx0aXBsZTogZmFsc2UsXHJcbiAgICBsaXN0VHlwZTogJ3RleHQnLFxyXG4gICAgbWF4Q291bnQ6IDEsXHJcbiAgICBhY3Rpb246IFwiL2FwaS91cGxvYWQvb3JnYW5pemF0aW9uXCIsXHJcbiAgICBwcmV2aWV3OiBmYWxzZSxcclxuICAgIGN1c3RvbVJlcXVlc3Q6IChvcHRpb25zKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgZGF0YS5hcHBlbmQoJ2lkJywgdXNlci50eXBlX3VzZXIgPT0gMSA/IFwiYWRtaW5cIiA6IHVzZXIub3JnYW5pemF0aW9uX2lkKVxyXG4gICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgXCJoZWFkZXJzXCI6IHtcclxuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6ICdtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0tLS0tV2ViS2l0Rm9ybUJvdW5kYXJ5cVRxSkl4dmtXRllxdlA1cydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYXhpb3MucG9zdChvcHRpb25zLmFjdGlvbiwgZGF0YSwgY29uZmlnKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRJbWFnZUxhbmRpbmdQYWdlUGVyc29uMyhyZXMuZGF0YS5kYXRhLmxpc3RbMF0uX25hbWUpXHJcbiAgICAgICAgb3B0aW9ucy5vblN1Y2Nlc3MocmVzLmRhdGEsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgfSlcclxuXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgb25DaGFuZ2UoaW5mbykge1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gaW5mby5maWxlXHJcbiAgICAgIHN3aXRjaCAoaW5mby5maWxlLnN0YXR1cykge1xyXG4gICAgICAgIGNhc2UgXCJkb25lXCI6XHJcbiAgICAgICAgICBpZiAoIWluZm8uZmlsZS51cmwgJiYgIWluZm8uZmlsZS5wcmV2aWV3KSB7XHJcbiAgICAgICAgICAgIGluZm8uZmlsZS5wcmV2aWV3ID0gYXdhaXQgZ2V0QmFzZTY0KGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjMoaW5mby5maWxlLnVybCB8fCBpbmZvLmZpbGUucHJldmlldylcclxuICAgICAgICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMyh0cnVlKVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgLy8gcmVzZXRJbWFnZVByZXZpZXcoKVxyXG4gICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIG9uUmVtb3ZlKGluZm8pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJvblJlbW92ZVwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhpbmZvKVxyXG4gICAgICByZXNldEltYWdlUHJldmlldygpXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzZXRJbWFnZVByZXZpZXcgPSAoKSA9PiB7XHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZUxvZ28oZmFsc2UpO1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24xKGZhbHNlKTtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMihmYWxzZSk7XHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjMoZmFsc2UpO1xyXG4gICAgc2V0UHJldmlld0ltYWdlTG9nbyhudWxsKTtcclxuICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjEobnVsbCk7XHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24yKG51bGwpO1xyXG4gICAgc2V0UHJldmlld0ltYWdlUGVyc29uMyhudWxsKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBnZXRCYXNlNjQoZmlsZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICByZWFkZXIub25lcnJvciA9IGVycm9yID0+IHJlamVjdChlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0XHJcbiAgICAgIHRpdGxlPVwiR292ZXJubWVudCAtIEFkbWluIG1hbmFnZW1lbnRcIlxyXG4gICAgICB1cmw9e29yaWdpbn1cclxuICAgICAgb3JpZ2luPXtvcmlnaW59XHJcbiAgICAgIC8vIHVzZXI9e2xvZ2lufVxyXG4gICAgICBpbmRleFN1Yk1lbnU9e1wiNlwifVxyXG4gICAgICBpbmRleE1lbnU9e1wic3ViLTYtMFwifVxyXG4gICAgICB0aXRsZVBhZ2U9XCLguILguYnguK3guKHguLnguKXguK3guIfguITguYzguIHguKNcIlxyXG4gICAgICBfcm91dGVzPXtbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGF0aDogJy9hZG1pbi9kYXNoYm9yYWQnLFxyXG4gICAgICAgICAgYnJlYWRjcnVtYk5hbWU6ICfguKvguJnguYnguLLguKvguKXguLHguIEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGF0aDogJy9hZG1pbi9zZXR0aW5nL3Byb2ZpbGUnLFxyXG4gICAgICAgICAgYnJlYWRjcnVtYk5hbWU6ICfguILguYnguK3guKHguLnguKXguK3guIfguITguYzguIHguKMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF19XHJcbiAgICA+XHJcbiAgICAgIHtjb250ZXh0SG9sZGVyfVxyXG4gICAgICA8bGlua1xyXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9yZWFjdC1xdWlsbEAxLjMuMy9kaXN0L3F1aWxsLnNub3cuY3NzXCJcclxuICAgICAgPjwvbGluaz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTUvNiBsZzp3LWZ1bGwgbXgtYXV0b1wiPlxyXG4gICAgICAgIDxGb3JtXHJcbiAgICAgICAgICBuYW1lPVwiYmFzaWNcIlxyXG4gICAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgb25GaW5pc2g9e29uU3VibWl0SGFuZGxlcn1cclxuICAgICAgICAgIHJlcXVpcmVkTWFyaz17dHJ1ZX1cclxuICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICBmaWVsZHM9e2ZpZWxkc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGxnOnctMS82ICBwci0yXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm9yZ2FuaXphdGlvbl9sb2dvXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWF1dG8gaC1hdXRvIHRleHQtY2VudGVyIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguYDguKXguLfguK3guIHguKDguLLguJ4gTG9nbyDguK3guIfguITguYzguIHguKMnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsvKiA8RHJhZ2dlciB7Li4uZHJvcGltZ30+ICovfVxyXG4gICAgICAgICAgICAgICAgPERyYWdnZXJcclxuICAgICAgICAgICAgICAgICAgbWF4Q291bnQ9ezF9XHJcbiAgICAgICAgICAgICAgICAgIC8vIGxpc3RUeXBlPVwicGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5qcGVnLCAucG5nXCJcclxuICAgICAgICAgICAgICAgICAgey4uLmltYWdlVXBsb2FkcHJvcHNMb2dvfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAge3ByZXZpZXdWaXNpYmxlTG9nbyAmJiA8PjxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcmV2aWV3SW1hZ2VMb2dvfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCBMb2dvIOC4reC4h+C4hOC5jOC4geC4o1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgeyFwcmV2aWV3VmlzaWJsZUxvZ28gJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEluYm94T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCBMb2dvIOC4reC4h+C4hOC5jOC4geC4o1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvRHJhZ2dlcj5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy01LzYgXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm9yZ2FuaXphdGlvbl9uYW1lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LiK4Li34LmI4Lit4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guKvguJnguYjguKfguKLguIfguLLguJknLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC4q+C4meC5iOC4p+C4ouC4h+C4suC4mVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwib3JnYW5pemF0aW9uX25hbWVfZW5nXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LiK4Li34LmI4Lit4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZIOC4oOC4suC4qeC4suC4reC4seC4h+C4geC4pOC4qVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4q+C4meC5iOC4p+C4ouC4h+C4suC4meC4oOC4suC4qeC4suC4reC4seC4h+C4geC4pOC4qScsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguIrguLfguYjguK3guKvguJnguYjguKfguKLguIfguLLguJkg4Lig4Liy4Lip4Liy4Lit4Lix4LiH4LiB4Lik4LipXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBuYW1lPVwib3JnYW5pemF0aW9uX2FkZHJlc3NcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIuC4l+C4teC5iOC4reC4ouC4ueC5iOC4q+C4meC5iOC4p+C4ouC4h+C4suC4mVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4l+C4teC5iOC4reC4ouC4ueC5iOC4q+C4meC5iOC4p+C4ouC4h+C4suC4mScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguJfguLXguYjguK3guKLguLnguYjguKvguJnguYjguKfguKLguIfguLLguJlcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAzLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggbGc6dy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctMS8zIG1yLTRcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicHJvdmluY2VzU2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguIjguLHguIfguKvguKfguLHguJRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIHctZnVsbCBmb250LWJvbGQgbWItMiBcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnQgIWltcG9ydGFudFwiIH19XHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iOC4seC4h+C4q+C4p+C4seC4lCcsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17KCk9PnByb3ZpbmNlc1NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyB3aWR0aDogMTIwIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQcm92aW5jZXNDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiMFwiPuC5gOC4peC4t+C4reC4gTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICB7cHJvdmluY2VzID8gcHJvdmluY2VzLm1hcCgob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxPcHRpb24gdmFsdWU9e29iamVjdC5wcm92aW5jZV9pZH0+e29iamVjdC5wcm92aW5jZV9uYW1lfSAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIH0pIDogXCJcIn1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzMgbGc6bXgtNFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJkaXN0cmljdFNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4Lit4Liz4LmA4Lig4LitXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGwgXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0ICFpbXBvcnRhbnRcIiB9fVxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguK3guLPguYDguKDguK0nLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9eygpPT5wcm92aW5jZXNTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3sgd2lkdGg6IDEyMCB9fVxyXG4gICAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRGlzdHJpY3RDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiMFwiPuC5gOC4peC4t+C4reC4gTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICB7ZGlzdHJpY3RzID8gZGlzdHJpY3RzLm1hcCgob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxPcHRpb24gdmFsdWU9e29iamVjdC5kaXN0cmljdF9pZH0+e29iamVjdC5kaXN0cmljdF9uYW1lfSAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIH0pIDogXCJcIn1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzMgbGc6bWwtNFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdWJEaXN0cmljdFNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LiV4Liz4Lia4LilXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGwgXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0ICFpbXBvcnRhbnRcIiB9fVxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguJXguLPguJrguKUnLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9eygpPT5wcm92aW5jZXNTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3sgd2lkdGg6IDEyMCB9fVxyXG4gICAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgIGZpbHRlck9wdGlvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIjBcIj7guYDguKXguLfguK3guIE8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAge3N1YkRpc3RyaWN0cyA/IHN1YkRpc3RyaWN0cy5tYXAoKG9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8T3B0aW9uIHZhbHVlPXtvYmplY3Quc3ViX2Rpc3RyaWN0X2lkfT57b2JqZWN0LnN1Yl9kaXN0cmljdF9uYW1lfSAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIH0pIDogXCJcIn1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCBsZzp3LTEvMiBsZzptci00XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm9yZ2FuaXphdGlvbl9waG9uZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC5gOC4muC4reC4o+C5jOC5guC4l+C4o1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LmA4Lia4Lit4Lij4LmM4LmC4LiX4LijJyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguYDguJrguK3guKPguYzguYLguJfguKNcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IGxnOnctMS8yIGxnOm1sLTRcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwib3JnYW5pemF0aW9uX2ZheFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC5gOC4muC4reC4o+C5jCBmYXhcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguYDguJrguK3guKPguYwgZmF4JyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC5gOC4muC4reC4o+C5jCBmYXhcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IGxnOnctMS8yIGxnOm1yLTRcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwib3JnYW5pemF0aW9uX2VtYWlsXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4Lit4Li14LmA4Lih4Lil4Lil4LmMXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguK3guLXguYDguKHguKXguKXguYwnLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4reC4teC5gOC4oeC4peC4peC5jFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggbGc6dy0xLzIgbGc6bWwtNFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJvcmdhbml6YXRpb25fZW1haWxfYWxlcnRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguK3guLXguYDguKHguKXguKXguYzguKrguLPguKvguKPguLHguJrguYHguIjguYnguIfguYDguJXguLfguK3guJlcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguK3guLXguYDguKHguKXguKXguYzguKrguLPguKvguKPguLHguJrguYHguIjguYnguIfguYDguJXguLfguK3guJknLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4Lit4Li14LmA4Lih4Lil4Lil4LmM4Liq4Liz4Lir4Lij4Lix4Lia4LmB4LiI4LmJ4LiH4LmA4LiV4Li34Lit4LiZXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCBsZzp3LTEvMiBsZzptci00XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInNvY2lhbF9mYl9wYWdlaWRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJmYWNlYm9vayBwYWdlIGlkXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiBIGZhY2Vib29rIHBhZ2UgaWQnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZmFjZWJvb2sgcGFnZSBpZFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggbGc6dy0xLzIgbGc6bWwtNFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJyc3NcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguKPguKvguLHguKrguKvguJnguYjguKfguKLguIfguLLguJnguKDguLLguITguKPguLHguJDguKrguLPguKvguKPguLHguJrguYDguIrguLfguK3guKHguJXguYjguK3guKPguLDguJrguJogRS1HUFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4o+C4q+C4seC4quC4q+C4meC5iOC4p+C4ouC4h+C4suC4meC4oOC4suC4hOC4o+C4seC4kOC4quC4s+C4q+C4o+C4seC4muC5gOC4iuC4t+C4reC4oeC4leC5iOC4reC4o+C4sOC4muC4miBFLUdQJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4o+C4q+C4seC4quC4q+C4meC5iOC4p+C4ouC4h+C4suC4meC4oOC4suC4hOC4o+C4seC4kOC4quC4s+C4q+C4o+C4seC4muC5gOC4iuC4t+C4reC4oeC4leC5iOC4reC4o+C4sOC4muC4miBFLUdQXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGhyXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0M0QzRDNCcsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTZcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggbGc6dy0xLzYgcHItMlwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wMV9pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1hdXRvIGgtYXV0byB0ZXh0LWNlbnRlciB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LmA4Lil4Li34Lit4LiB4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDEnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsvKiA8RHJhZ2dlciB7Li4uZHJvcGltZ30+ICovfVxyXG4gICAgICAgICAgICAgICAgPERyYWdnZXJcclxuICAgICAgICAgICAgICAgICAgbWF4Q291bnQ9ezF9XHJcbiAgICAgICAgICAgICAgICAgIC8vIGxpc3RUeXBlPVwicGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5qcGVnLCAucG5nXCJcclxuICAgICAgICAgICAgICAgICAgey4uLmltYWdlVXBsb2FkcHJvcHNQZXJzb24xfVxyXG4gICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAge3ByZXZpZXdWaXNpYmxlUGVyc29uMSAmJiA8PjxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJldmlld0ltYWdlUGVyc29uMX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTU2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4LiE4Lil4Li04LiBIOC4q+C4o+C4t+C4rSDguKXguLLguIHguYTguJ/guKXguYzguKHguLLguJfguLXguYjguJrguKPguLTguYDguKfguJPguJnguLXguYnguYDguJ7guLfguYjguK3guK3guLHguJvguYLguKvguKXguJQg4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDFcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHshcHJldmlld1Zpc2libGVQZXJzb24xICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC1kcmFnLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbmJveE91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4LiE4Lil4Li04LiBIOC4q+C4o+C4t+C4rSDguKXguLLguIHguYTguJ/guKXguYzguKHguLLguJfguLXguYjguJrguKPguLTguYDguKfguJPguJnguLXguYnguYDguJ7guLfguYjguK3guK3guLHguJvguYLguKvguKXguJQg4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDFcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0RyYWdnZXI+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctNS82IFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wMV9uYW1lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LiK4Li34LmI4Lit4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDFcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMScsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGVyc29uMDFfcG9zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguJXguLPguYHguKvguJnguYjguIfguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAxJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAxXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wMV9waG9uZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC5gOC4muC4reC4o+C5jOC5guC4l+C4o+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAxXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDEnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LmA4Lia4Lit4Lij4LmM4LmC4LiX4Lij4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDFcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGxnOnctMS82IHByLTJcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGVyc29uMDJfaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctYXV0byBoLWF1dG8gdGV4dC1jZW50ZXIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC5gOC4peC4t+C4reC4geC4oOC4suC4nuC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4l+C4teC5iCAyJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7LyogPERyYWdnZXIgey4uLmRyb3BpbWd9PiAqL31cclxuICAgICAgICAgICAgICAgIDxEcmFnZ2VyXHJcbiAgICAgICAgICAgICAgICAgIG1heENvdW50PXsxfVxyXG4gICAgICAgICAgICAgICAgICAvLyBsaXN0VHlwZT1cInBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAuanBlZywgLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIHsuLi5pbWFnZVVwbG9hZHByb3BzUGVyc29uMn1cclxuICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtwcmV2aWV3VmlzaWJsZVBlcnNvbjIgJiYgPD48SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJldmlld0ltYWdlUGVyc29uMn1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTU2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4LiE4Lil4Li04LiBIOC4q+C4o+C4t+C4rSDguKXguLLguIHguYTguJ/guKXguYzguKHguLLguJfguLXguYjguJrguKPguLTguYDguKfguJPguJnguLXguYnguYDguJ7guLfguYjguK3guK3guLHguJvguYLguKvguKXguJQg4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDJcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHshcHJldmlld1Zpc2libGVQZXJzb24yICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC1kcmFnLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbmJveE91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4LiE4Lil4Li04LiBIOC4q+C4o+C4t+C4rSDguKXguLLguIHguYTguJ/guKXguYzguKHguLLguJfguLXguYjguJrguKPguLTguYDguKfguJPguJnguLXguYnguYDguJ7guLfguYjguK3guK3guLHguJvguYLguKvguKXguJQg4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDJcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0RyYWdnZXI+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctNS82IFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wMl9uYW1lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LiK4Li34LmI4Lit4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMicsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMlwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGVyc29uMDJfcG9zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguJXguLPguYHguKvguJnguYjguIfguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMlwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAyJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAyXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wMl9waG9uZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC5gOC4muC4reC4o+C5jOC5guC4l+C4o+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAyXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDEnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LmA4Lia4Lit4Lij4LmM4LmC4LiX4Lij4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDJcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGxnOnctMS82IHByLTJcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGVyc29uMDNfaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctYXV0byBoLWF1dG8gdGV4dC1jZW50ZXIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC5gOC4peC4t+C4reC4geC4oOC4suC4nuC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4l+C4teC5iCAzJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7LyogPERyYWdnZXIgey4uLmRyb3BpbWd9PiAqL31cclxuICAgICAgICAgICAgICAgIDxEcmFnZ2VyXHJcbiAgICAgICAgICAgICAgICAgIG1heENvdW50PXsxfVxyXG4gICAgICAgICAgICAgICAgICAvLyBsaXN0VHlwZT1cInBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAuanBlZywgLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIHsuLi5pbWFnZVVwbG9hZHByb3BzUGVyc29uM31cclxuICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtwcmV2aWV3VmlzaWJsZVBlcnNvbjMgJiYgPD48SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJldmlld0ltYWdlUGVyc29uM31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTU2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4LiE4Lil4Li04LiBIOC4q+C4o+C4t+C4rSDguKXguLLguIHguYTguJ/guKXguYzguKHguLLguJfguLXguYjguJrguKPguLTguYDguKfguJPguJnguLXguYnguYDguJ7guLfguYjguK3guK3guLHguJvguYLguKvguKXguJQg4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDNcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHshcHJldmlld1Zpc2libGVQZXJzb24zICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC1kcmFnLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbmJveE91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4LiE4Lil4Li04LiBIOC4q+C4o+C4t+C4rSDguKXguLLguIHguYTguJ/guKXguYzguKHguLLguJfguLXguYjguJrguKPguLTguYDguKfguJPguJnguLXguYnguYDguJ7guLfguYjguK3guK3guLHguJvguYLguKvguKXguJQg4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDNcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0RyYWdnZXI+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctNS82IFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wM19uYW1lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LiK4Li34LmI4Lit4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMycsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggM1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGVyc29uMDNfcG9zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguJXguLPguYHguKvguJnguYjguIfguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggM1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAzJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAzXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wM19waG9uZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC5gOC4muC4reC4o+C5jOC5guC4l+C4o+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAzXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDEnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LmA4Lia4Lit4Lij4LmM4LmC4LiX4Lij4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDNcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIGNsYXNzTmFtZT1cImZsZXggbXQtNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbGc6dGV4dC1yaWdodCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlc2V0fVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNDMkNGRTAnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0MyQ0ZFMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzBweCAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLy8gaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSB3LWZ1bGwgbGc6dy0xLzRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbS1ibGFjayBcIj7guKPguLXguYDguIvguYfguJc8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgLy8gdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwNTk2NjknLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzA1OTY2OScsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzBweCAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHctZnVsbCBsZzp3LTEvNFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRleHQtY3VzdG9tLXdoaXRlIFwiPuC4muC4seC4meC4l+C4tuC4gTwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcbi8qIGdldFNlcnZlclNpZGVQcm9wcyAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHJlcSB9ID0gY29udGV4dDtcclxuICBjb25zdCB7IG9yaWdpbiB9ID0gYWJzb2x1dGVVcmwocmVxKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG9yaWdpbixcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.abf9950b9a0925ddc2f9.hot-update.js
