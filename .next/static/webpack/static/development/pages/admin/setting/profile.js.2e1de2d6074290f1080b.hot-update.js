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
      previewImagePerson1 = _useState5[0],
      setPreviewImagePerson1 = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(null),
      previewImagePerson2 = _useState6[0],
      setPreviewImagePerson2 = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(null),
      previewImagePerson3 = _useState7[0],
      setPreviewImagePerson3 = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(null),
      imageLandingPageLogo = _useState8[0],
      setImageLandingPageLogo = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(null),
      imageLandingPagePerson1 = _useState9[0],
      setImageLandingPagePerson1 = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(null),
      imageLandingPagePerson2 = _useState10[0],
      setImageLandingPagePerson2 = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(null),
      imageLandingPagePerson3 = _useState11[0],
      setImageLandingPagePerson3 = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false),
      previewVisibleLogo = _useState12[0],
      setPreviewVisibleLogo = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false),
      previewVisiblePerson1 = _useState13[0],
      setPreviewVisiblePerson1 = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false),
      previewVisiblePerson2 = _useState14[0],
      setPreviewVisiblePerson2 = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false),
      previewVisiblePerson3 = _useState15[0],
      setPreviewVisiblePerson3 = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false),
      logo = _useState16[0],
      setLogo = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])([]),
      fields = _useState17[0],
      setFields = _useState17[1];

  var _useState18 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(null),
      organizationData = _useState18[0],
      setOrganizationData = _useState18[1];

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

              if (_organizationData.data.organization.organization_logo) {
                setPreviewImageLogo("..\\..\\..\\uploads\\c-" + user.organization_id + '\\organization\\' + organizationData.organization_logo);
                setPreviewVisibleLogo(true);
              }

              if (_organizationData.data.organization.person01_image) {
                setPreviewImagePerson1("..\\..\\..\\uploads\\c-" + user.organization_id + '\\organization\\' + _organizationData.data.organization.person01_image);
                setPreviewVisiblePerson1(true);
              }

              if (_organizationData.data.organization.person02_image) {
                setPreviewImagePerson2("..\\..\\..\\uploads\\c-" + user.organization_id + '\\organization\\' + _organizationData.data.organization.person02_image);
                setPreviewVisiblePerson2(true);
              }

              if (_organizationData.data.organization.person03_image) {
                setPreviewImagePerson3("..\\..\\..\\uploads\\c-" + user.organization_id + '\\organization\\' + _organizationData.data.organization.person03_image);
                setPreviewVisiblePerson3(true);
              } // setPreviewImageLogo('..\\..\\..\\uploads\\c-' + user.organization_id + '\\organization\\' + _organizationData.data.organization.organization_logo);
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

            case 11:
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
                return _context7.abrupt("break", 12);

              case 11:
                // error or removed
                resetImagePreview();

              case 12:
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
                return _context8.abrupt("break", 12);

              case 11:
                resetImagePreview();

              case 12:
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
                return _context9.abrupt("break", 12);

              case 11:
                resetImagePreview();

              case 12:
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
                return _context10.abrupt("break", 12);

              case 11:
                resetImagePreview();

              case 12:
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 648,
========
      lineNumber: 644,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 5
    }
  }, contextHolder, __jsx("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 668,
========
      lineNumber: 664,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "w-5/6 lg:w-full mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 672,
========
      lineNumber: 668,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 673,
========
      lineNumber: 669,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 681,
========
      lineNumber: 677,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inline-flex lg:w-1/6  pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 682,
========
      lineNumber: 678,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 683,
========
      lineNumber: 679,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 694,
========
      lineNumber: 690,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 702,
========
      lineNumber: 698,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 44
    }
  }), __jsx("p", {
    className: "text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 712,
========
      lineNumber: 708,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 Logo \u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23")), !previewVisibleLogo && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 718,
========
      lineNumber: 714,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 719,
========
      lineNumber: 715,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 721,
========
      lineNumber: 717,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 Logo \u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23"))))), __jsx("div", {
    className: "lg:w-5/6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 729,
========
      lineNumber: 725,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 730,
========
      lineNumber: 726,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 741,
========
      lineNumber: 737,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 749,
========
      lineNumber: 745,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 760,
========
      lineNumber: 756,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 770,
========
      lineNumber: 766,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 781,
========
      lineNumber: 777,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "lg:inline-flex lg:w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 789,
========
      lineNumber: 785,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-full lg:w-1/3 mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 790,
========
      lineNumber: 786,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 791,
========
      lineNumber: 787,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 804,
========
      lineNumber: 800,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 17
    }
  }, __jsx(Option, {
    value: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 811,
========
      lineNumber: 807,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 19
    }
  }, "\u0E40\u0E25\u0E37\u0E2D\u0E01"), provinces ? provinces.map(function (object) {
    return __jsx(Option, {
      value: object.province_id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
        lineNumber: 813,
========
        lineNumber: 809,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
        columnNumber: 28
      }
    }, object.province_name, "  ");
  }) : ""))), __jsx("div", {
    className: "w-full lg:w-1/3 lg:mx-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 818,
========
      lineNumber: 814,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 819,
========
      lineNumber: 815,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 832,
========
      lineNumber: 828,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 17
    }
  }, __jsx(Option, {
    value: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 840,
========
      lineNumber: 836,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 19
    }
  }, "\u0E40\u0E25\u0E37\u0E2D\u0E01"), districts ? districts.map(function (object) {
    return __jsx(Option, {
      value: object.district_id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
        lineNumber: 842,
========
        lineNumber: 838,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
        columnNumber: 28
      }
    }, object.district_name, "  ");
  }) : ""))), __jsx("div", {
    className: "w-full lg:w-1/3 lg:ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 847,
========
      lineNumber: 843,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 848,
========
      lineNumber: 844,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 861,
========
      lineNumber: 857,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 17
    }
  }, __jsx(Option, {
    value: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 868,
========
      lineNumber: 864,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 19
    }
  }, "\u0E40\u0E25\u0E37\u0E2D\u0E01"), subDistricts ? subDistricts.map(function (object) {
    return __jsx(Option, {
      value: object.sub_district_id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
        lineNumber: 870,
========
        lineNumber: 866,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
        columnNumber: 28
      }
    }, object.sub_district_name, "  ");
  }) : "")))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 876,
========
      lineNumber: 872,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 877,
========
      lineNumber: 873,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 878,
========
      lineNumber: 874,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 889,
========
      lineNumber: 885,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 898,
========
      lineNumber: 894,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 899,
========
      lineNumber: 895,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 910,
========
      lineNumber: 906,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 920,
========
      lineNumber: 916,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 921,
========
      lineNumber: 917,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 922,
========
      lineNumber: 918,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 933,
========
      lineNumber: 929,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 942,
========
      lineNumber: 938,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 943,
========
      lineNumber: 939,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 954,
========
      lineNumber: 950,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 964,
========
      lineNumber: 960,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 965,
========
      lineNumber: 961,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 966,
========
      lineNumber: 962,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 977,
========
      lineNumber: 973,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 986,
========
      lineNumber: 982,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 987,
========
      lineNumber: 983,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 998,
========
      lineNumber: 994,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1008,
========
      lineNumber: 1004,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1016,
========
      lineNumber: 1012,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inline-flex lg:w-1/6 pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1017,
========
      lineNumber: 1013,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1018,
========
      lineNumber: 1014,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1029,
========
      lineNumber: 1025,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1036,
========
      lineNumber: 1032,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 47
    }
  }), __jsx("p", {
    className: "text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1045,
========
      lineNumber: 1041,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 1")), !previewVisiblePerson1 && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1051,
========
      lineNumber: 1047,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1052,
========
      lineNumber: 1048,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1054,
========
      lineNumber: 1050,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 1"))))), __jsx("div", {
    className: "lg:w-5/6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1062,
========
      lineNumber: 1058,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1063,
========
      lineNumber: 1059,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1074,
========
      lineNumber: 1070,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1082,
========
      lineNumber: 1078,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1093,
========
      lineNumber: 1089,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1101,
========
      lineNumber: 1097,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1112,
========
      lineNumber: 1108,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1122,
========
      lineNumber: 1118,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inline-flex lg:w-1/6 pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1123,
========
      lineNumber: 1119,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1124,
========
      lineNumber: 1120,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1135,
========
      lineNumber: 1131,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1142,
========
      lineNumber: 1138,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 47
    }
  }), __jsx("p", {
    className: "text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1152,
========
      lineNumber: 1148,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 2")), !previewVisiblePerson2 && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1158,
========
      lineNumber: 1154,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1159,
========
      lineNumber: 1155,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1161,
========
      lineNumber: 1157,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 2"))))), __jsx("div", {
    className: "lg:w-5/6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1169,
========
      lineNumber: 1165,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1170,
========
      lineNumber: 1166,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1181,
========
      lineNumber: 1177,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1189,
========
      lineNumber: 1185,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1200,
========
      lineNumber: 1196,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1208,
========
      lineNumber: 1204,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1219,
========
      lineNumber: 1215,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1229,
========
      lineNumber: 1225,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inline-flex lg:w-1/6 pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1230,
========
      lineNumber: 1226,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1231,
========
      lineNumber: 1227,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1242,
========
      lineNumber: 1238,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1249,
========
      lineNumber: 1245,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 47
    }
  }), __jsx("p", {
    className: "text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1259,
========
      lineNumber: 1255,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 3")), !previewVisiblePerson3 && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1265,
========
      lineNumber: 1261,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1266,
========
      lineNumber: 1262,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1268,
========
      lineNumber: 1264,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 3"))))), __jsx("div", {
    className: "lg:w-5/6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1276,
========
      lineNumber: 1272,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1277,
========
      lineNumber: 1273,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1288,
========
      lineNumber: 1284,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1296,
========
      lineNumber: 1292,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1307,
========
      lineNumber: 1303,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1315,
========
      lineNumber: 1311,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1326,
========
      lineNumber: 1322,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 17
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    className: "flex mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1336,
========
      lineNumber: 1332,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1337,
========
      lineNumber: 1333,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "text-center lg:text-right w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1338,
========
      lineNumber: 1334,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1339,
========
      lineNumber: 1335,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 17
    }
  }, __jsx(Text, {
    className: "text-custom-black ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1354,
========
      lineNumber: 1350,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1356,
========
      lineNumber: 1352,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 17
    }
  }, __jsx(Text, {
    className: "text-custom-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
      lineNumber: 1369,
========
      lineNumber: 1365,
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
      columnNumber: 19
    }
  }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"))))))));
}
/* getServerSideProps */

_s(Home, "pVnNqLoSDfg2AvEXPIgd/TMIvO4=", false, function () {
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
<<<<<<<< HEAD:.next/static/webpack/static/development/pages/admin/setting/profile.js.f894af3d8fdad223c313.hot-update.js
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9zZXR0aW5nL3Byb2ZpbGUvaW5kZXguanMiXSwibmFtZXMiOlsiSm9kaXRFZGl0b3IiLCJkeW5hbWljIiwic3NyIiwiVGV4dCIsIlR5cG9ncmFwaHkiLCJUaXRsZSIsIk9wdGlvbiIsIlNlbGVjdCIsIlRleHRBcmVhIiwiSW5wdXQiLCJjb25maWciLCJyZXF1aXJlIiwiSG9tZSIsInByb3BzIiwibm90aWZpY2F0aW9uIiwidXNlTm90aWZpY2F0aW9uIiwiYXBpIiwiY29udGV4dEhvbGRlciIsInVzZXIiLCJvcmlnaW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwcm9maWxlSWQiLCJxdWVyeSIsInVzZVN0YXRlIiwicHJvdmluY2VzIiwic2V0UHJvdmluY2VzIiwiZGlzdHJpY3RzIiwic2V0RGlzdHJpY3RzIiwic3ViRGlzdHJpY3RzIiwic2V0U3ViRGlzdHJpY3RzIiwicHJldmlld0ltYWdlTG9nbyIsInNldFByZXZpZXdJbWFnZUxvZ28iLCJwcmV2aWV3SW1hZ2VQZXJzb24xIiwic2V0UHJldmlld0ltYWdlUGVyc29uMSIsInByZXZpZXdJbWFnZVBlcnNvbjIiLCJzZXRQcmV2aWV3SW1hZ2VQZXJzb24yIiwicHJldmlld0ltYWdlUGVyc29uMyIsInNldFByZXZpZXdJbWFnZVBlcnNvbjMiLCJpbWFnZUxhbmRpbmdQYWdlTG9nbyIsInNldEltYWdlTGFuZGluZ1BhZ2VMb2dvIiwiaW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjEiLCJzZXRJbWFnZUxhbmRpbmdQYWdlUGVyc29uMSIsImltYWdlTGFuZGluZ1BhZ2VQZXJzb24yIiwic2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjIiLCJpbWFnZUxhbmRpbmdQYWdlUGVyc29uMyIsInNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24zIiwicHJldmlld1Zpc2libGVMb2dvIiwic2V0UHJldmlld1Zpc2libGVMb2dvIiwicHJldmlld1Zpc2libGVQZXJzb24xIiwic2V0UHJldmlld1Zpc2libGVQZXJzb24xIiwicHJldmlld1Zpc2libGVQZXJzb24yIiwic2V0UHJldmlld1Zpc2libGVQZXJzb24yIiwicHJldmlld1Zpc2libGVQZXJzb24zIiwic2V0UHJldmlld1Zpc2libGVQZXJzb24zIiwibG9nbyIsInNldExvZ28iLCJmaWVsZHMiLCJzZXRGaWVsZHMiLCJvcmdhbml6YXRpb25EYXRhIiwic2V0T3JnYW5pemF0aW9uRGF0YSIsInVzZUVmZmVjdCIsImZldGNoT3JnYW5pemF0aW9uRGF0YSIsImZldGNoUHJvdmluY2VzRGF0YSIsIm9uU3VibWl0SGFuZGxlciIsInZhbHVlIiwiZGF0YSIsIm9yZ2FuaXphdGlvbl9pZCIsIm9yZ2FuaXphdGlvbl9uYW1lIiwib3JnYW5pemF0aW9uX25hbWVfZW5nIiwib3JnYW5pemF0aW9uX2xvZ28iLCJvcmdhbml6YXRpb25fYWRkcmVzcyIsIm9yZ2FuaXphdGlvbl9zdWJfZGlzdHJpY3RfaWQiLCJzdWJEaXN0cmljdFNlbGVjdGVkIiwib3JnYW5pemF0aW9uX2VtYWlsIiwib3JnYW5pemF0aW9uX2VtYWlsX2FsZXJ0Iiwib3JnYW5pemF0aW9uX3Bob25lIiwib3JnYW5pemF0aW9uX2ZheCIsInNvY2lhbF9mYl9wYWdlaWQiLCJyc3MiLCJwZXJzb24wMV9uYW1lIiwicGVyc29uMDFfcG9zaXRpb24iLCJwZXJzb24wMV9pbWFnZSIsInBlcnNvbjAxX3Bob25lIiwicGVyc29uMDJfbmFtZSIsInBlcnNvbjAyX3Bvc2l0aW9uIiwicGVyc29uMDJfaW1hZ2UiLCJwZXJzb24wMl9waG9uZSIsInBlcnNvbjAzX25hbWUiLCJwZXJzb24wM19wb3NpdGlvbiIsInBlcnNvbjAzX2ltYWdlIiwicGVyc29uMDNfcGhvbmUiLCJjb25zb2xlIiwibG9nIiwiYXBpSW5zdGFuY2UiLCJwdXQiLCJzdGF0dXMiLCJvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJTdWNjZXNzIiwic2V0VGltZW91dCIsInB1c2giLCJiaW5kIiwib3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbCIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZGVzY3JpcHRpb24iLCJwbGFjZW1lbnQiLCJtZXNzZ2FlIiwiZXJyb3IiLCJEcmFnZ2VyIiwiVXBsb2FkIiwiRm9ybSIsInVzZUZvcm0iLCJmb3JtIiwib25SZXNldCIsImZldGNoRGlzdHJpY3RzRGF0YSIsInN1Yl9kaXN0cmljdHMiLCJwcm92aW5jZV9pZCIsImZldGNoU3ViRGlzdHJpY3REYXRhIiwiZGlzdHJpY3RfaWQiLCJuYW1lIiwic3ViX2Rpc3RyaWN0X2lkIiwiZ2V0IiwiX29yZ2FuaXphdGlvbkRhdGEiLCJvcmdhbml6YXRpb24iLCJ0aHVtYm5haWxfbGluayIsIl9wcm92aW5jZXNEYXRhIiwiX2Rpc3RyaWN0c0RhdGEiLCJzdWJEaXN0cmljdElEIiwiX3N1YkRpc3RyaWN0c0RhdGEiLCJoYW5kbGVQcm92aW5jZXNDaGFuZ2UiLCJoYW5kbGVEaXN0cmljdENoYW5nZSIsImltYWdlVXBsb2FkcHJvcHNMb2dvIiwibXVsdGlwbGUiLCJsaXN0VHlwZSIsIm1heENvdW50IiwiYWN0aW9uIiwicHJldmlldyIsImN1c3RvbVJlcXVlc3QiLCJvcHRpb25zIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmaWxlIiwidHlwZV91c2VyIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsImxpc3QiLCJfbmFtZSIsIm9uU3VjY2VzcyIsImVyciIsIm9uQ2hhbmdlIiwiaW5mbyIsInVybCIsImdldEJhc2U2NCIsIm9yaWdpbkZpbGVPYmoiLCJyZXNldEltYWdlUHJldmlldyIsIm9uUmVtb3ZlIiwiaW1hZ2VVcGxvYWRwcm9wc1BlcnNvbjEiLCJpbWFnZVVwbG9hZHByb3BzUGVyc29uMiIsImltYWdlVXBsb2FkcHJvcHNQZXJzb24zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJwYXRoIiwiYnJlYWRjcnVtYk5hbWUiLCJoZWlnaHQiLCJ3aWR0aCIsIm9iamVjdEZpdCIsInJlcXVpcmVkIiwibWluUm93cyIsIm1heFJvd3MiLCJ0ZXh0QWxpZ24iLCJtYXAiLCJvYmplY3QiLCJwcm92aW5jZV9uYW1lIiwiZGlzdHJpY3RfbmFtZSIsInN1Yl9kaXN0cmljdF9uYW1lIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5SaWdodCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUlBLElBQU1BLFdBQVcsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sd0pBQU47QUFBQSxDQUFELEVBQThCO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUFoQixvRUFBZ0I7QUFBQTtBQUFBLGNBQWhCLGFBQWdCO0FBQUE7QUFBQSxDQUE5QixDQUEzQjtNQUFNRixXO0FBQ04sSUFBUUcsSUFBUixHQUF3QkMsK0NBQXhCLENBQVFELElBQVI7QUFBQSxJQUFjRSxLQUFkLEdBQXdCRCwrQ0FBeEIsQ0FBY0MsS0FBZDtBQUNBLElBQVFDLE1BQVIsR0FBbUJDLDJDQUFuQixDQUFRRCxNQUFSO0FBRUEsSUFBUUUsUUFBUixHQUFxQkMsMENBQXJCLENBQVFELFFBQVI7O0FBQ0EsSUFBTUUsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDZDQUFELENBQXRCOzs7QUFFZSxTQUFTQyxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQTs7QUFDbEMsOEJBQTZCQyxpREFBWSxDQUFDQyxlQUFiLEVBQTdCO0FBQUE7QUFBQSxNQUFPQyxHQUFQO0FBQUEsTUFBWUMsYUFBWjs7QUFDQSxNQUFRQyxJQUFSLEdBQXlCTCxLQUF6QixDQUFRSyxJQUFSO0FBQUEsTUFBY0MsTUFBZCxHQUF5Qk4sS0FBekIsQ0FBY00sTUFBZDtBQUNBLE1BQU1DLE1BQU0s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QUZSO0FBR0xiLFlBQU0sRUFBRSxFQUhIO0FBSUxDLFdBQUssRUFBRSxHQUpGO0FBS0xhLGtCQUFZLEVBQUUsZ0JBTFQ7QUFNTEMsaUJBQVcsRUFBRSxLQU5SO0FBT0xDLFdBQUssRUFBRTtBQVBGLEtBSFQsQ0FZRTtBQVpGO0FBYUUsYUFBUyxFQUFDLDRJQWJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FlRSxNQUFDLElBQUQ7QUFBTSxhQUFTLEVBQUMsb0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBZkYsQ0FERixFQWtCRSxNQUFDLDJDQUFELENBQ0U7QUFERjtBQUVFLFNBQUssRUFBRTtBQUNMSixxQkFBZSxFQUFFLFNBRFo7QUFFTEMsaUJBQVcsRUFBRSxTQUZSO0FBR0xiLFlBQU0sRUFBRSxFQUhIO0FBSUxDLFdBQUssRUFBRSxHQUpGO0FBS0xhLGtCQUFZLEVBQUUsZ0JBTFQ7QUFNTEUsV0FBSyxFQUFFO0FBTkYsS0FGVDtBQVVFLFlBQVEsRUFBQyxRQVZYO0FBV0UsYUFBUyxFQUFDLDRJQVhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FhRSxNQUFDLElBQUQ7QUFBTSxhQUFTLEVBQUMsb0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBYkYsQ0FsQkYsQ0FERixDQURGLENBdnBCRixDQURGLENBeEJGLENBREY7QUEydEJEO0FBQ0Q7O0dBMzBDd0JoTCxJO1VBQ09FLGlEQUFZLENBQUNDLGUsRUFFM0JNLHFELEVBMEZBeUYseUNBQUksQ0FBQ0MsTzs7O01BN0ZFbkcsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWRtaW5cXHNldHRpbmdcXHByb2ZpbGUuanMuZjg5NGFmM2Q4ZmRhZDIyM2MzMTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluYm94T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLCBGb3JtLCBJbWFnZSwgSW5wdXQsIG5vdGlmaWNhdGlvbiwgU2VsZWN0LCBUeXBvZ3JhcGh5LCBVcGxvYWRcclxufSBmcm9tICdhbnRkJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG4vLyBpbXBvcnQgVXNlck5hdiBmcm9tICcuLi9jb21wb25lbnRzL25hdmlnYXRpb24vVXNlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG4vKiBjb21wb25lbnRzICovXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0QWRtaW4nO1xyXG4vKiB1dGlscyAqL1xyXG5pbXBvcnQge1xyXG4gIGFic29sdXRlVXJsLCBhcGlJbnN0YW5jZVxyXG59IGZyb20gJy4uLy4uLy4uLy4uL21pZGRsZXdhcmUvdXRpbHMnO1xyXG5cclxuY29uc3QgSm9kaXRFZGl0b3IgPSBkeW5hbWljKCgpID0+IGltcG9ydChcImpvZGl0LXJlYWN0XCIpLCB7IHNzcjogZmFsc2UgfSk7XHJcbmNvbnN0IHsgVGV4dCwgVGl0bGUgfSA9IFR5cG9ncmFwaHk7XHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vLi4vY29uZmlnJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcbiAgY29uc3QgW2FwaSwgY29udGV4dEhvbGRlcl0gPSBub3RpZmljYXRpb24udXNlTm90aWZpY2F0aW9uKCk7XHJcbiAgY29uc3QgeyB1c2VyLCBvcmlnaW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgcHJvZmlsZUlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgW3Byb3ZpbmNlcywgc2V0UHJvdmluY2VzXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2Rpc3RyaWN0cywgc2V0RGlzdHJpY3RzXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3N1YkRpc3RyaWN0cywgc2V0U3ViRGlzdHJpY3RzXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3ByZXZpZXdJbWFnZUxvZ28sIHNldFByZXZpZXdJbWFnZUxvZ29dID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbcHJldmlld0ltYWdlUGVyc29uMSwgc2V0UHJldmlld0ltYWdlUGVyc29uMV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtwcmV2aWV3SW1hZ2VQZXJzb24yLCBzZXRQcmV2aWV3SW1hZ2VQZXJzb24yXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3ByZXZpZXdJbWFnZVBlcnNvbjMsIHNldFByZXZpZXdJbWFnZVBlcnNvbjNdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbaW1hZ2VMYW5kaW5nUGFnZUxvZ28sIHNldEltYWdlTGFuZGluZ1BhZ2VMb2dvXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2ltYWdlTGFuZGluZ1BhZ2VQZXJzb24xLCBzZXRJbWFnZUxhbmRpbmdQYWdlUGVyc29uMV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtpbWFnZUxhbmRpbmdQYWdlUGVyc29uMiwgc2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjJdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbaW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjMsIHNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24zXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3ByZXZpZXdWaXNpYmxlTG9nbywgc2V0UHJldmlld1Zpc2libGVMb2dvXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtwcmV2aWV3VmlzaWJsZVBlcnNvbjEsIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbcHJldmlld1Zpc2libGVQZXJzb24yLCBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3ByZXZpZXdWaXNpYmxlUGVyc29uMywgc2V0UHJldmlld1Zpc2libGVQZXJzb24zXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtsb2dvLCBzZXRMb2dvXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtmaWVsZHMsIHNldEZpZWxkc10gPSB1c2VTdGF0ZShbXHJcbiAgXSk7XHJcbiAgY29uc3QgW29yZ2FuaXphdGlvbkRhdGEsIHNldE9yZ2FuaXphdGlvbkRhdGFdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoT3JnYW5pemF0aW9uRGF0YSgpO1xyXG4gICAgZmV0Y2hQcm92aW5jZXNEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdEhhbmRsZXIodmFsdWUpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIG9yZ2FuaXphdGlvbl9pZDogdXNlci5vcmdhbml6YXRpb25faWQsXHJcbiAgICAgIG9yZ2FuaXphdGlvbl9uYW1lOiB2YWx1ZS5vcmdhbml6YXRpb25fbmFtZSxcclxuICAgICAgb3JnYW5pemF0aW9uX25hbWVfZW5nOiB2YWx1ZS5vcmdhbml6YXRpb25fbmFtZV9lbmcsXHJcbiAgICAgIG9yZ2FuaXphdGlvbl9sb2dvOiBpbWFnZUxhbmRpbmdQYWdlTG9nbyxcclxuICAgICAgb3JnYW5pemF0aW9uX2FkZHJlc3M6IHZhbHVlLm9yZ2FuaXphdGlvbl9hZGRyZXNzLFxyXG4gICAgICBvcmdhbml6YXRpb25fc3ViX2Rpc3RyaWN0X2lkOiB2YWx1ZS5zdWJEaXN0cmljdFNlbGVjdGVkLFxyXG4gICAgICBvcmdhbml6YXRpb25fZW1haWw6IHZhbHVlLm9yZ2FuaXphdGlvbl9lbWFpbCxcclxuICAgICAgb3JnYW5pemF0aW9uX2VtYWlsX2FsZXJ0OiB2YWx1ZS5vcmdhbml6YXRpb25fZW1haWxfYWxlcnQsXHJcbiAgICAgIG9yZ2FuaXphdGlvbl9waG9uZTogdmFsdWUub3JnYW5pemF0aW9uX3Bob25lLFxyXG4gICAgICBvcmdhbml6YXRpb25fZmF4OiB2YWx1ZS5vcmdhbml6YXRpb25fZmF4LFxyXG4gICAgICBzb2NpYWxfZmJfcGFnZWlkOiB2YWx1ZS5zb2NpYWxfZmJfcGFnZWlkLFxyXG4gICAgICByc3M6IHZhbHVlLnJzcyxcclxuICAgICAgcGVyc29uMDFfbmFtZTogdmFsdWUucGVyc29uMDFfbmFtZSxcclxuICAgICAgcGVyc29uMDFfcG9zaXRpb246IHZhbHVlLnBlcnNvbjAxX3Bvc2l0aW9uLFxyXG4gICAgICBwZXJzb24wMV9pbWFnZTogaW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjEsXHJcbiAgICAgIHBlcnNvbjAxX3Bob25lOiB2YWx1ZS5wZXJzb24wMV9waG9uZSxcclxuICAgICAgcGVyc29uMDJfbmFtZTogdmFsdWUucGVyc29uMDJfbmFtZSxcclxuICAgICAgcGVyc29uMDJfcG9zaXRpb246IHZhbHVlLnBlcnNvbjAyX3Bvc2l0aW9uLFxyXG4gICAgICBwZXJzb24wMl9pbWFnZTogaW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjIsXHJcbiAgICAgIHBlcnNvbjAyX3Bob25lOiB2YWx1ZS5wZXJzb24wMl9waG9uZSxcclxuICAgICAgcGVyc29uMDNfbmFtZTogdmFsdWUucGVyc29uMDNfbmFtZSxcclxuICAgICAgcGVyc29uMDNfcG9zaXRpb246IHZhbHVlLnBlcnNvbjAzX3Bvc2l0aW9uLFxyXG4gICAgICBwZXJzb24wM19pbWFnZTogaW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjMsXHJcbiAgICAgIHBlcnNvbjAzX3Bob25lOiB2YWx1ZS5wZXJzb24wM19waG9uZSxcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgY29uc3Qgb3JnYW5pemF0aW9uRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkucHV0KCcvcHJvZmlsZScsIGRhdGEpO1xyXG4gICAgaWYgKG9yZ2FuaXphdGlvbkRhdGEuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgIG9wZW5Ob3RpZmljYXRpb25SZWdpc3RlclN1Y2Nlc3MoKTtcclxuICAgICAgZmV0Y2hPcmdhbml6YXRpb25EYXRhKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgLy9TdGFydCB0aGUgdGltZXJcclxuICAgICAgICAgIHJvdXRlci5wdXNoKCcvYWRtaW4vc2V0dGluZy9wcm9maWxlJyk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICAgIDIwMDAsXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJGYWlsKG9yZ2FuaXphdGlvbkRhdGEuZGF0YS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBjb25zdCBvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJTdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgYXBpLnN1Y2Nlc3Moe1xyXG4gICAgICBtZXNzYWdlOiBg4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIYCxcclxuICAgICAgZGVzY3JpcHRpb246ICfguJrguLHguJnguJfguLbguIHguILguYnguK3guKHguLnguKXguKrguLPguYDguKPguYfguIjguYHguKXguYnguKcnLFxyXG4gICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJGYWlsID0gbWVzc2dhZSA9PiB7XHJcbiAgICBhcGkuZXJyb3Ioe1xyXG4gICAgICBtZXNzYWdlOiBg4Lie4Lia4Lib4Lix4LiN4Lir4Liy4Lij4Liw4Lir4Lin4LmI4Liy4LiH4LiB4Liy4Lij4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54LilYCxcclxuICAgICAgZGVzY3JpcHRpb246IG1lc3NnYWUsXHJcbiAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHsgRHJhZ2dlciB9ID0gVXBsb2FkO1xyXG5cclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuXHJcbiAgY29uc3Qgb25SZXNldCA9ICgpID0+IHtcclxuICAgIGZldGNoRGlzdHJpY3RzRGF0YShvcmdhbml6YXRpb25EYXRhLnN1Yl9kaXN0cmljdHMgPyBvcmdhbml6YXRpb25EYXRhLnN1Yl9kaXN0cmljdHMucHJvdmluY2VzLnByb3ZpbmNlX2lkIDogMClcclxuICAgIGZldGNoU3ViRGlzdHJpY3REYXRhKG9yZ2FuaXphdGlvbkRhdGEuc3ViX2Rpc3RyaWN0cyA/IG9yZ2FuaXphdGlvbkRhdGEuc3ViX2Rpc3RyaWN0cy5kaXN0cmljdHMuZGlzdHJpY3RfaWQgOiAwKVxyXG4gICAgc2V0RmllbGRzKFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX2xvZ28nXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fbG9nbyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX25hbWUnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fbmFtZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX25hbWVfZW5nJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEub3JnYW5pemF0aW9uX25hbWVfZW5nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fcGhvbmUnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fcGhvbmUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9lbWFpbCddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9lbWFpbCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX2ZheCddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9mYXhcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX2FkZHJlc3MnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fYWRkcmVzcyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncHJvdmluY2VzU2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzID8gb3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzLnByb3ZpbmNlcy5wcm92aW5jZV9pZCA6IFwiMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2Rpc3RyaWN0U2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzID8gb3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzLmRpc3RyaWN0cy5kaXN0cmljdF9pZCA6IFwiMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3N1YkRpc3RyaWN0U2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzID8gb3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzLnN1Yl9kaXN0cmljdF9pZCA6IFwiMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3NvY2lhbF9mYl9wYWdlaWQnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5zb2NpYWxfZmJfcGFnZWlkXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9lbWFpbF9hbGVydCddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9lbWFpbF9hbGVydFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydyc3MnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5yc3NcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDFfbmFtZSddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAxX25hbWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAxX3Bvc2l0aW9uJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDFfcG9zaXRpb24sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAxX3Bob25lJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDFfcGhvbmUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAyX25hbWUnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5wZXJzb24wMl9uYW1lLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wMl9wb3NpdGlvbiddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAyX3Bvc2l0aW9uLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wMl9waG9uZSddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAyX3Bob25lLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wM19uYW1lJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDNfbmFtZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDNfcG9zaXRpb24nXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5wZXJzb24wM19wb3NpdGlvbixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDNfcGhvbmUnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5wZXJzb24wM19waG9uZSxcclxuICAgICAgfVxyXG4gICAgXSk7XHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VMb2dvKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArIHVzZXIub3JnYW5pemF0aW9uX2lkICsgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArIG9yZ2FuaXphdGlvbkRhdGEub3JnYW5pemF0aW9uX2xvZ28pO1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVMb2dvKHRydWUpO1xyXG4gICAgc2V0SW1hZ2VMYW5kaW5nUGFnZUxvZ28ob3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fbG9nbyk7XHJcblxyXG4gICAgc2V0UHJldmlld0ltYWdlUGVyc29uMSgnLi5cXFxcLi5cXFxcLi5cXFxcdXBsb2Fkc1xcXFxjLScgKyB1c2VyLm9yZ2FuaXphdGlvbl9pZCArICdcXFxcb3JnYW5pemF0aW9uXFxcXCcgKyBvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAxX2ltYWdlKTtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMSh0cnVlKTtcclxuICAgIHNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24xKG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDFfaW1hZ2UpO1xyXG5cclxuICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjIoJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICsgdXNlci5vcmdhbml6YXRpb25faWQgKyAnXFxcXG9yZ2FuaXphdGlvblxcXFwnICsgb3JnYW5pemF0aW9uRGF0YS5wZXJzb24wMl9pbWFnZSk7XHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjIodHJ1ZSk7XHJcbiAgICBzZXRJbWFnZUxhbmRpbmdQYWdlUGVyc29uMihvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAyX2ltYWdlKTtcclxuXHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24zKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArIHVzZXIub3JnYW5pemF0aW9uX2lkICsgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArIG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDNfaW1hZ2UpO1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24zKHRydWUpO1xyXG4gICAgc2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjMob3JnYW5pemF0aW9uRGF0YS5wZXJzb24wM19pbWFnZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hPcmdhbml6YXRpb25EYXRhID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IF9vcmdhbml6YXRpb25EYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICdvcmdhbml6YXRpb24vJyArICh1c2VyID8gdXNlci5vcmdhbml6YXRpb25faWQgOiAwKVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbilcclxuICAgIHNldE9yZ2FuaXphdGlvbkRhdGEoX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24pXHJcbiAgICBmZXRjaERpc3RyaWN0c0RhdGEoX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24uc3ViX2Rpc3RyaWN0cyA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnN1Yl9kaXN0cmljdHMucHJvdmluY2VzLnByb3ZpbmNlX2lkIDogMClcclxuICAgIGZldGNoU3ViRGlzdHJpY3REYXRhKF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnN1Yl9kaXN0cmljdHMgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5zdWJfZGlzdHJpY3RzLmRpc3RyaWN0cy5kaXN0cmljdF9pZCA6IDApXHJcblxyXG4gICAgaWYgKF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9sb2dvKSB7XHJcbiAgICAgIHNldFByZXZpZXdJbWFnZUxvZ28oJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICsgdXNlci5vcmdhbml6YXRpb25faWQgKyAnXFxcXG9yZ2FuaXphdGlvblxcXFwnICsgb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fbG9nbyk7XHJcbiAgICAgIHNldFByZXZpZXdWaXNpYmxlTG9nbyh0cnVlKTtcclxuICAgIH1cclxuICAgIGlmIChfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMV9pbWFnZSkge1xyXG4gICAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24xKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArIHVzZXIub3JnYW5pemF0aW9uX2lkICtcclxuICAgICAgICAnXFxcXG9yZ2FuaXphdGlvblxcXFwnICtcclxuICAgICAgICBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMV9pbWFnZSlcclxuICAgICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24xKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMl9pbWFnZSkge1xyXG4gICAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24yKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArXHJcbiAgICAgICAgdXNlci5vcmdhbml6YXRpb25faWQgK1xyXG4gICAgICAgICdcXFxcb3JnYW5pemF0aW9uXFxcXCcgK1xyXG4gICAgICAgIF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAyX2ltYWdlKVxyXG4gICAgICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjIodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAzX2ltYWdlKSB7XHJcbiAgICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjMoJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICtcclxuICAgICAgICB1c2VyLm9yZ2FuaXphdGlvbl9pZCArXHJcbiAgICAgICAgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArXHJcbiAgICAgICAgX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDNfaW1hZ2UpXHJcbiAgICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMyh0cnVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gc2V0UHJldmlld0ltYWdlTG9nbygnLi5cXFxcLi5cXFxcLi5cXFxcdXBsb2Fkc1xcXFxjLScgKyB1c2VyLm9yZ2FuaXphdGlvbl9pZCArICdcXFxcb3JnYW5pemF0aW9uXFxcXCcgKyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fbG9nbyk7XHJcbiAgICAvLyBzZXRQcmV2aWV3VmlzaWJsZUxvZ28odHJ1ZSk7XHJcbiAgICAvLyBzZXRJbWFnZUxhbmRpbmdQYWdlTG9nbyhfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fbG9nbyk7XHJcbiAgICBzZXRGaWVsZHMoW1xyXG4gICAgICAvLyB7XHJcbiAgICAgIC8vICAgbmFtZTogWydvcmdhbml6YXRpb25fbG9nbyddLFxyXG4gICAgICAvLyAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fbG9nb1xyXG4gICAgICAvLyB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fbmFtZSddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fbmFtZSA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9uYW1lIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fbmFtZV9lbmcnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX25hbWVfZW5nID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX25hbWVfZW5nIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fcGhvbmUnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX3Bob25lID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX3Bob25lIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fZW1haWwnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2VtYWlsID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2VtYWlsIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwcm92aW5jZXNTZWxlY3RlZCddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5zdWJfZGlzdHJpY3RzID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24uc3ViX2Rpc3RyaWN0cy5wcm92aW5jZXMucHJvdmluY2VfaWQgOiBcIjBcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydkaXN0cmljdFNlbGVjdGVkJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnN1Yl9kaXN0cmljdHMgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5zdWJfZGlzdHJpY3RzLmRpc3RyaWN0cy5kaXN0cmljdF9pZCA6IFwiMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3N1YkRpc3RyaWN0U2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24uc3ViX2Rpc3RyaWN0cyA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnN1Yl9kaXN0cmljdHMuc3ViX2Rpc3RyaWN0X2lkIDogXCIwXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX2ZheCddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fZmF4ID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2ZheCA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsndGh1bWJuYWlsX2xpbmsnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24udGh1bWJuYWlsX2xpbmsgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi50aHVtYm5haWxfbGluayA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX2FkZHJlc3MnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2FkZHJlc3MgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fYWRkcmVzcyA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX2VtYWlsX2FsZXJ0J10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9lbWFpbF9hbGVydCA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9lbWFpbF9hbGVydCA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnc29jaWFsX2ZiX3BhZ2VpZCddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5zb2NpYWxfZmJfcGFnZWlkID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24uc29jaWFsX2ZiX3BhZ2VpZCA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncnNzJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnJzcyA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnJzcyA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDFfbmFtZSddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMV9uYW1lID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDFfbmFtZSA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDFfcG9zaXRpb24nXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDFfcG9zaXRpb24gPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMV9wb3NpdGlvbiA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDFfcGhvbmUnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDFfcGhvbmUgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMV9waG9uZSA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDJfbmFtZSddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMl9uYW1lID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDJfbmFtZSA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDJfcG9zaXRpb24nXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDJfcG9zaXRpb24gPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMl9wb3NpdGlvbiA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDJfcGhvbmUnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDJfcGhvbmUgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMl9waG9uZSA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDNfbmFtZSddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wM19uYW1lID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDNfbmFtZSA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDNfcG9zaXRpb24nXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDNfcG9zaXRpb24gPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wM19wb3NpdGlvbiA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDNfcGhvbmUnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDNfcGhvbmUgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wM19waG9uZSA6IFwiXCJcclxuICAgICAgfSxcclxuXHJcblxyXG4gICAgXSlcclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaFByb3ZpbmNlc0RhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBfcHJvdmluY2VzRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAncHJvdmluY2UnXHJcbiAgICApO1xyXG5cclxuICAgIHNldFByb3ZpbmNlcyhfcHJvdmluY2VzRGF0YS5kYXRhLmRhdGEpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhfcHJvdmluY2VzRGF0YS5kYXRhLmRhdGEpXHJcbiAgfVxyXG5cclxuICBjb25zdCBmZXRjaERpc3RyaWN0c0RhdGEgPSBhc3luYyAocHJvdmluY2VfaWQpID0+IHtcclxuICAgIGNvbnN0IF9kaXN0cmljdHNEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICdkaXN0cmljdC8nICsgcHJvdmluY2VfaWRcclxuICAgICk7XHJcblxyXG4gICAgc2V0RGlzdHJpY3RzKF9kaXN0cmljdHNEYXRhLmRhdGEuZGF0YSlcclxuICAgIC8vIGNvbnNvbGUubG9nKF9kaXN0cmljdHNEYXRhLmRhdGEuZGF0YSlcclxuICB9XHJcblxyXG5cclxuICBjb25zdCBmZXRjaFN1YkRpc3RyaWN0RGF0YSA9IGFzeW5jIChzdWJEaXN0cmljdElEKSA9PiB7XHJcbiAgICBjb25zdCBfc3ViRGlzdHJpY3RzRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAnc3ViLWRpc3RyaWN0LycgKyBzdWJEaXN0cmljdElEXHJcbiAgICApO1xyXG5cclxuICAgIHNldFN1YkRpc3RyaWN0cyhfc3ViRGlzdHJpY3RzRGF0YS5kYXRhLmRhdGEpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhfc3ViRGlzdHJpY3RzRGF0YS5kYXRhLmRhdGEpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVQcm92aW5jZXNDaGFuZ2UgPSBhc3luYyAodmFsdWUpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIHNldEZpZWxkcyhbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3Byb3ZpbmNlc1NlbGVjdGVkJ10sXHJcbiAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2Rpc3RyaWN0U2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogXCIwXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnc3ViRGlzdHJpY3RTZWxlY3RlZCddLFxyXG4gICAgICAgIHZhbHVlOiBcIjBcIlxyXG4gICAgICB9LFxyXG5cclxuICAgIF0pXHJcbiAgICBmZXRjaERpc3RyaWN0c0RhdGEodmFsdWUpO1xyXG4gICAgc2V0U3ViRGlzdHJpY3RzKFtdKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRGlzdHJpY3RDaGFuZ2UgPSBhc3luYyAodmFsdWUpID0+IHtcclxuICAgIHNldEZpZWxkcyhbXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydkaXN0cmljdFNlbGVjdGVkJ10sXHJcbiAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3N1YkRpc3RyaWN0U2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogXCIwXCJcclxuICAgICAgfSxcclxuXHJcbiAgICBdKVxyXG4gICAgZmV0Y2hTdWJEaXN0cmljdERhdGEodmFsdWUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBpbWFnZVVwbG9hZHByb3BzTG9nbyA9IHtcclxuICAgIG5hbWU6ICdmaWxlJyxcclxuICAgIG11bHRpcGxlOiBmYWxzZSxcclxuICAgIGxpc3RUeXBlOiAndGV4dCcsXHJcbiAgICBtYXhDb3VudDogMSxcclxuICAgIGFjdGlvbjogXCIvYXBpL3VwbG9hZC9vcmdhbml6YXRpb25cIixcclxuICAgIHByZXZpZXc6IGZhbHNlLFxyXG4gICAgY3VzdG9tUmVxdWVzdDogKG9wdGlvbnMpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgb3B0aW9ucy5maWxlKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnaWQnLCB1c2VyLnR5cGVfdXNlciA9PSAxID8gXCJhZG1pblwiIDogdXNlci5vcmdhbml6YXRpb25faWQpXHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICBcImhlYWRlcnNcIjoge1xyXG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogJ211bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PS0tLS1XZWJLaXRGb3JtQm91bmRhcnlxVHFKSXh2a1dGWXF2UDVzJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBheGlvcy5wb3N0KG9wdGlvbnMuYWN0aW9uLCBkYXRhLCBjb25maWcpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldEltYWdlTGFuZGluZ1BhZ2VMb2dvKHJlcy5kYXRhLmRhdGEubGlzdFswXS5fbmFtZSlcclxuICAgICAgICBvcHRpb25zLm9uU3VjY2VzcyhyZXMuZGF0YSwgb3B0aW9ucy5maWxlKVxyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICB9KVxyXG5cclxuICAgIH0sXHJcbiAgICBhc3luYyBvbkNoYW5nZShpbmZvKSB7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBpbmZvLmZpbGVcclxuICAgICAgc3dpdGNoIChpbmZvLmZpbGUuc3RhdHVzKSB7XHJcbiAgICAgICAgY2FzZSBcImRvbmVcIjpcclxuICAgICAgICAgIGlmICghaW5mby5maWxlLnVybCAmJiAhaW5mby5maWxlLnByZXZpZXcpIHtcclxuICAgICAgICAgICAgaW5mby5maWxlLnByZXZpZXcgPSBhd2FpdCBnZXRCYXNlNjQoaW5mby5maWxlLm9yaWdpbkZpbGVPYmopO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0UHJldmlld0ltYWdlTG9nbyhpbmZvLmZpbGUudXJsIHx8IGluZm8uZmlsZS5wcmV2aWV3KVxyXG4gICAgICAgICAgc2V0UHJldmlld1Zpc2libGVMb2dvKHRydWUpXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIC8vIGVycm9yIG9yIHJlbW92ZWRcclxuICAgICAgICAgIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBvblJlbW92ZShpbmZvKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwib25SZW1vdmVcIilcclxuICAgICAgY29uc29sZS5sb2coaW5mbylcclxuICAgICAgcmVzZXRJbWFnZVByZXZpZXcoKVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGltYWdlVXBsb2FkcHJvcHNQZXJzb24xID0ge1xyXG4gICAgbmFtZTogJ2ZpbGUnLFxyXG4gICAgbXVsdGlwbGU6IGZhbHNlLFxyXG4gICAgbGlzdFR5cGU6ICd0ZXh0JyxcclxuICAgIG1heENvdW50OiAxLFxyXG4gICAgYWN0aW9uOiBcIi9hcGkvdXBsb2FkL29yZ2FuaXphdGlvblwiLFxyXG4gICAgcHJldmlldzogZmFsc2UsXHJcbiAgICBjdXN0b21SZXF1ZXN0OiAob3B0aW9ucykgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdpZCcsIHVzZXIudHlwZV91c2VyID09IDEgPyBcImFkbWluXCIgOiB1c2VyLm9yZ2FuaXphdGlvbl9pZClcclxuICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgIFwiaGVhZGVyc1wiOiB7XHJcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9LS0tLVdlYktpdEZvcm1Cb3VuZGFyeXFUcUpJeHZrV0ZZcXZQNXMnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGF4aW9zLnBvc3Qob3B0aW9ucy5hY3Rpb24sIGRhdGEsIGNvbmZpZykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjEocmVzLmRhdGEuZGF0YS5saXN0WzBdLl9uYW1lKVxyXG4gICAgICAgIG9wdGlvbnMub25TdWNjZXNzKHJlcy5kYXRhLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfSxcclxuICAgIGFzeW5jIG9uQ2hhbmdlKGluZm8pIHtcclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGluZm8uZmlsZVxyXG4gICAgICBzd2l0Y2ggKGluZm8uZmlsZS5zdGF0dXMpIHtcclxuICAgICAgICBjYXNlIFwiZG9uZVwiOlxyXG4gICAgICAgICAgaWYgKCFpbmZvLmZpbGUudXJsICYmICFpbmZvLmZpbGUucHJldmlldykge1xyXG4gICAgICAgICAgICBpbmZvLmZpbGUucHJldmlldyA9IGF3YWl0IGdldEJhc2U2NChpbmZvLmZpbGUub3JpZ2luRmlsZU9iaik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24xKGluZm8uZmlsZS51cmwgfHwgaW5mby5maWxlLnByZXZpZXcpXHJcbiAgICAgICAgICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjEodHJ1ZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBvblJlbW92ZShpbmZvKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwib25SZW1vdmVcIilcclxuICAgICAgY29uc29sZS5sb2coaW5mbylcclxuICAgICAgcmVzZXRJbWFnZVByZXZpZXcoKVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGltYWdlVXBsb2FkcHJvcHNQZXJzb24yID0ge1xyXG4gICAgbmFtZTogJ2ZpbGUnLFxyXG4gICAgbXVsdGlwbGU6IGZhbHNlLFxyXG4gICAgbGlzdFR5cGU6ICd0ZXh0JyxcclxuICAgIG1heENvdW50OiAxLFxyXG4gICAgYWN0aW9uOiBcIi9hcGkvdXBsb2FkL29yZ2FuaXphdGlvblwiLFxyXG4gICAgcHJldmlldzogZmFsc2UsXHJcbiAgICBjdXN0b21SZXF1ZXN0OiAob3B0aW9ucykgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdpZCcsIHVzZXIudHlwZV91c2VyID09IDEgPyBcImFkbWluXCIgOiB1c2VyLm9yZ2FuaXphdGlvbl9pZClcclxuICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgIFwiaGVhZGVyc1wiOiB7XHJcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9LS0tLVdlYktpdEZvcm1Cb3VuZGFyeXFUcUpJeHZrV0ZZcXZQNXMnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGF4aW9zLnBvc3Qob3B0aW9ucy5hY3Rpb24sIGRhdGEsIGNvbmZpZykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjIocmVzLmRhdGEuZGF0YS5saXN0WzBdLl9uYW1lKVxyXG4gICAgICAgIG9wdGlvbnMub25TdWNjZXNzKHJlcy5kYXRhLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfSxcclxuICAgIGFzeW5jIG9uQ2hhbmdlKGluZm8pIHtcclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGluZm8uZmlsZVxyXG4gICAgICBzd2l0Y2ggKGluZm8uZmlsZS5zdGF0dXMpIHtcclxuICAgICAgICBjYXNlIFwiZG9uZVwiOlxyXG4gICAgICAgICAgaWYgKCFpbmZvLmZpbGUudXJsICYmICFpbmZvLmZpbGUucHJldmlldykge1xyXG4gICAgICAgICAgICBpbmZvLmZpbGUucHJldmlldyA9IGF3YWl0IGdldEJhc2U2NChpbmZvLmZpbGUub3JpZ2luRmlsZU9iaik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24yKGluZm8uZmlsZS51cmwgfHwgaW5mby5maWxlLnByZXZpZXcpXHJcbiAgICAgICAgICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjIodHJ1ZSlcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmVzZXRJbWFnZVByZXZpZXcoKVxyXG4gICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIG9uUmVtb3ZlKGluZm8pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJvblJlbW92ZVwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhpbmZvKVxyXG4gICAgICByZXNldEltYWdlUHJldmlldygpXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaW1hZ2VVcGxvYWRwcm9wc1BlcnNvbjMgPSB7XHJcbiAgICBuYW1lOiAnZmlsZScsXHJcbiAgICBtdWx0aXBsZTogZmFsc2UsXHJcbiAgICBsaXN0VHlwZTogJ3RleHQnLFxyXG4gICAgbWF4Q291bnQ6IDEsXHJcbiAgICBhY3Rpb246IFwiL2FwaS91cGxvYWQvb3JnYW5pemF0aW9uXCIsXHJcbiAgICBwcmV2aWV3OiBmYWxzZSxcclxuICAgIGN1c3RvbVJlcXVlc3Q6IChvcHRpb25zKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgZGF0YS5hcHBlbmQoJ2lkJywgdXNlci50eXBlX3VzZXIgPT0gMSA/IFwiYWRtaW5cIiA6IHVzZXIub3JnYW5pemF0aW9uX2lkKVxyXG4gICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgXCJoZWFkZXJzXCI6IHtcclxuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6ICdtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0tLS0tV2ViS2l0Rm9ybUJvdW5kYXJ5cVRxSkl4dmtXRllxdlA1cydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYXhpb3MucG9zdChvcHRpb25zLmFjdGlvbiwgZGF0YSwgY29uZmlnKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRJbWFnZUxhbmRpbmdQYWdlUGVyc29uMyhyZXMuZGF0YS5kYXRhLmxpc3RbMF0uX25hbWUpXHJcbiAgICAgICAgb3B0aW9ucy5vblN1Y2Nlc3MocmVzLmRhdGEsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgfSlcclxuXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgb25DaGFuZ2UoaW5mbykge1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gaW5mby5maWxlXHJcbiAgICAgIHN3aXRjaCAoaW5mby5maWxlLnN0YXR1cykge1xyXG4gICAgICAgIGNhc2UgXCJkb25lXCI6XHJcbiAgICAgICAgICBpZiAoIWluZm8uZmlsZS51cmwgJiYgIWluZm8uZmlsZS5wcmV2aWV3KSB7XHJcbiAgICAgICAgICAgIGluZm8uZmlsZS5wcmV2aWV3ID0gYXdhaXQgZ2V0QmFzZTY0KGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjMoaW5mby5maWxlLnVybCB8fCBpbmZvLmZpbGUucHJldmlldylcclxuICAgICAgICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMyh0cnVlKVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXNldEltYWdlUHJldmlldygpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgb25SZW1vdmUoaW5mbykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9uUmVtb3ZlXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXNldEltYWdlUHJldmlldyA9ICgpID0+IHtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlTG9nbyhmYWxzZSk7XHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjEoZmFsc2UpO1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24yKGZhbHNlKTtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMyhmYWxzZSk7XHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VMb2dvKG51bGwpO1xyXG4gICAgc2V0UHJldmlld0ltYWdlUGVyc29uMShudWxsKTtcclxuICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjIobnVsbCk7XHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24zKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGdldEJhc2U2NChmaWxlKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgIHJlYWRlci5vbmVycm9yID0gZXJyb3IgPT4gcmVqZWN0KGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXRcclxuICAgICAgdGl0bGU9XCJHb3Zlcm5tZW50IC0gQWRtaW4gbWFuYWdlbWVudFwiXHJcbiAgICAgIHVybD17b3JpZ2lufVxyXG4gICAgICBvcmlnaW49e29yaWdpbn1cclxuICAgICAgLy8gdXNlcj17bG9naW59XHJcbiAgICAgIGluZGV4U3ViTWVudT17XCI2XCJ9XHJcbiAgICAgIGluZGV4TWVudT17XCJzdWItNi0wXCJ9XHJcbiAgICAgIHRpdGxlUGFnZT1cIuC4guC5ieC4reC4oeC4ueC4peC4reC4h+C4hOC5jOC4geC4o1wiXHJcbiAgICAgIF9yb3V0ZXM9e1tcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYXRoOiAnL2FkbWluL2Rhc2hib3JhZCcsXHJcbiAgICAgICAgICBicmVhZGNydW1iTmFtZTogJ+C4q+C4meC5ieC4suC4q+C4peC4seC4gScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYXRoOiAnL2FkbWluL3NldHRpbmcvcHJvZmlsZScsXHJcbiAgICAgICAgICBicmVhZGNydW1iTmFtZTogJ+C4guC5ieC4reC4oeC4ueC4peC4reC4h+C4hOC5jOC4geC4oycsXHJcbiAgICAgICAgfSxcclxuICAgICAgXX1cclxuICAgID5cclxuICAgICAge2NvbnRleHRIb2xkZXJ9XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3JlYWN0LXF1aWxsQDEuMy4zL2Rpc3QvcXVpbGwuc25vdy5jc3NcIlxyXG4gICAgICA+PC9saW5rPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNS82IGxnOnctZnVsbCBteC1hdXRvXCI+XHJcbiAgICAgICAgPEZvcm1cclxuICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXHJcbiAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICBvbkZpbmlzaD17b25TdWJtaXRIYW5kbGVyfVxyXG4gICAgICAgICAgcmVxdWlyZWRNYXJrPXt0cnVlfVxyXG4gICAgICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgICAgIGZpZWxkcz17ZmllbGRzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggbGc6dy0xLzYgIHByLTJcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwib3JnYW5pemF0aW9uX2xvZ29cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctYXV0byBoLWF1dG8gdGV4dC1jZW50ZXIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC5gOC4peC4t+C4reC4geC4oOC4suC4niBMb2dvIOC4reC4h+C4hOC5jOC4geC4oycsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgey8qIDxEcmFnZ2VyIHsuLi5kcm9waW1nfT4gKi99XHJcbiAgICAgICAgICAgICAgICA8RHJhZ2dlclxyXG4gICAgICAgICAgICAgICAgICBtYXhDb3VudD17MX1cclxuICAgICAgICAgICAgICAgICAgLy8gbGlzdFR5cGU9XCJwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLmpwZWcsIC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICB7Li4uaW1hZ2VVcGxvYWRwcm9wc0xvZ299XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7cHJldmlld1Zpc2libGVMb2dvICYmIDw+PEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3ByZXZpZXdJbWFnZUxvZ299XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzExNnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcidcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIOC4hOC4peC4tOC4gSDguKvguKPguLfguK0g4Lil4Liy4LiB4LmE4Lif4Lil4LmM4Lih4Liy4LiX4Li14LmI4Lia4Lij4Li04LmA4Lin4LiT4LiZ4Li14LmJ4LmA4Lie4Li34LmI4Lit4Lit4Lix4Lib4LmC4Lir4Lil4LiUIExvZ28g4Lit4LiH4LiE4LmM4LiB4LijXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB7IXByZXZpZXdWaXNpYmxlTG9nbyAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtZHJhZy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5ib3hPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIOC4hOC4peC4tOC4gSDguKvguKPguLfguK0g4Lil4Liy4LiB4LmE4Lif4Lil4LmM4Lih4Liy4LiX4Li14LmI4Lia4Lij4Li04LmA4Lin4LiT4LiZ4Li14LmJ4LmA4Lie4Li34LmI4Lit4Lit4Lix4Lib4LmC4Lir4Lil4LiUIExvZ28g4Lit4LiH4LiE4LmM4LiB4LijXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9EcmFnZ2VyPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTUvNiBcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwib3JnYW5pemF0aW9uX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguIrguLfguYjguK3guKvguJnguYjguKfguKLguIfguLLguJlcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4q+C4meC5iOC4p+C4ouC4h+C4suC4mScsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiK4Li34LmI4Lit4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJvcmdhbml6YXRpb25fbmFtZV9lbmdcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguIrguLfguYjguK3guKvguJnguYjguKfguKLguIfguLLguJkg4Lig4Liy4Lip4Liy4Lit4Lix4LiH4LiB4Lik4LipXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZ4Lig4Liy4Lip4Liy4Lit4Lix4LiH4LiB4Lik4LipJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC4q+C4meC5iOC4p+C4ouC4h+C4suC4mSDguKDguLLguKnguLLguK3guLHguIfguIHguKTguKlcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIG5hbWU9XCJvcmdhbml6YXRpb25fYWRkcmVzc1wiXHJcbiAgICAgICAgICAgIGxhYmVsPVwi4LiX4Li14LmI4Lit4Lii4Li54LmI4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiX4Li14LmI4Lit4Lii4Li54LmI4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4l+C4teC5iOC4reC4ouC4ueC5iOC4q+C4meC5iOC4p+C4ouC4h+C4suC4mVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDMsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCBsZzp3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzMgbXItNFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwcm92aW5jZXNTZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4iOC4seC4h+C4q+C4p+C4seC4lFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gdy1mdWxsIGZvbnQtYm9sZCBtYi0yIFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdCAhaW1wb3J0YW50XCIgfX1cclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiI4Lix4LiH4Lir4Lin4Lix4LiUJyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXsoKT0+cHJvdmluY2VzU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IHdpZHRoOiAxMjAgfX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVByb3ZpbmNlc0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb249e3RydWV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCIwXCI+4LmA4Lil4Li34Lit4LiBPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm92aW5jZXMgPyBwcm92aW5jZXMubWFwKChvYmplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE9wdGlvbiB2YWx1ZT17b2JqZWN0LnByb3ZpbmNlX2lkfT57b2JqZWN0LnByb3ZpbmNlX25hbWV9ICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgfSkgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTEvMyBsZzpteC00XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImRpc3RyaWN0U2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguK3guLPguYDguKDguK1cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbCBcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnQgIWltcG9ydGFudFwiIH19XHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4reC4s+C5gOC4oOC4rScsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17KCk9PnByb3ZpbmNlc1NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyB3aWR0aDogMTIwIH19XHJcbiAgICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEaXN0cmljdENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb249e3RydWV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCIwXCI+4LmA4Lil4Li34Lit4LiBPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIHtkaXN0cmljdHMgPyBkaXN0cmljdHMubWFwKChvYmplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE9wdGlvbiB2YWx1ZT17b2JqZWN0LmRpc3RyaWN0X2lkfT57b2JqZWN0LmRpc3RyaWN0X25hbWV9ICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgfSkgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTEvMyBsZzptbC00XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInN1YkRpc3RyaWN0U2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguJXguLPguJrguKVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbCBcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnQgIWltcG9ydGFudFwiIH19XHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4leC4s+C4muC4pScsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17KCk9PnByb3ZpbmNlc1NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyB3aWR0aDogMTIwIH19XHJcbiAgICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiMFwiPuC5gOC4peC4t+C4reC4gTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICB7c3ViRGlzdHJpY3RzID8gc3ViRGlzdHJpY3RzLm1hcCgob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxPcHRpb24gdmFsdWU9e29iamVjdC5zdWJfZGlzdHJpY3RfaWR9PntvYmplY3Quc3ViX2Rpc3RyaWN0X25hbWV9ICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgfSkgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IGxnOnctMS8yIGxnOm1yLTRcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwib3JnYW5pemF0aW9uX3Bob25lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LmA4Lia4Lit4Lij4LmM4LmC4LiX4LijXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguYDguJrguK3guKPguYzguYLguJfguKMnLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC5gOC4muC4reC4o+C5jOC5guC4l+C4o1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggbGc6dy0xLzIgbGc6bWwtNFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJvcmdhbml6YXRpb25fZmF4XCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LmA4Lia4Lit4Lij4LmMIGZheFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC5gOC4muC4reC4o+C5jCBmYXgnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LmA4Lia4Lit4Lij4LmMIGZheFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggbGc6dy0xLzIgbGc6bXItNFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJvcmdhbml6YXRpb25fZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguK3guLXguYDguKHguKXguKXguYxcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4reC4teC5gOC4oeC4peC4peC5jCcsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4Lit4Li14LmA4Lih4Lil4Lil4LmMXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCBsZzp3LTEvMiBsZzptbC00XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm9yZ2FuaXphdGlvbl9lbWFpbF9hbGVydFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4reC4teC5gOC4oeC4peC4peC5jOC4quC4s+C4q+C4o+C4seC4muC5geC4iOC5ieC4h+C5gOC4leC4t+C4reC4mVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4reC4teC5gOC4oeC4peC4peC5jOC4quC4s+C4q+C4o+C4seC4muC5geC4iOC5ieC4h+C5gOC4leC4t+C4reC4mScsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguK3guLXguYDguKHguKXguKXguYzguKrguLPguKvguKPguLHguJrguYHguIjguYnguIfguYDguJXguLfguK3guJlcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IGxnOnctMS8yIGxnOm1yLTRcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwic29jaWFsX2ZiX3BhZ2VpZFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cImZhY2Vib29rIHBhZ2UgaWRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIEgZmFjZWJvb2sgcGFnZSBpZCcsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJmYWNlYm9vayBwYWdlIGlkXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCBsZzp3LTEvMiBsZzptbC00XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInJzc1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4o+C4q+C4seC4quC4q+C4meC5iOC4p+C4ouC4h+C4suC4meC4oOC4suC4hOC4o+C4seC4kOC4quC4s+C4q+C4o+C4seC4muC5gOC4iuC4t+C4reC4oeC4leC5iOC4reC4o+C4sOC4muC4miBFLUdQXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4Lij4Lir4Lix4Liq4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZ4Lig4Liy4LiE4Lij4Lix4LiQ4Liq4Liz4Lir4Lij4Lix4Lia4LmA4LiK4Li34Lit4Lih4LiV4LmI4Lit4Lij4Liw4Lia4LiaIEUtR1AnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4Lij4Lir4Lix4Liq4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZ4Lig4Liy4LiE4Lij4Lix4LiQ4Liq4Liz4Lir4Lij4Lix4Lia4LmA4LiK4Li34Lit4Lih4LiV4LmI4Lit4Lij4Liw4Lia4LiaIEUtR1BcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aHJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjQzRDNEM0JyxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktNlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBsZzp3LTEvNiBwci0yXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAxX2ltYWdlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWF1dG8gaC1hdXRvIHRleHQtY2VudGVyIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguYDguKXguLfguK3guIHguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggMScsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgey8qIDxEcmFnZ2VyIHsuLi5kcm9waW1nfT4gKi99XHJcbiAgICAgICAgICAgICAgICA8RHJhZ2dlclxyXG4gICAgICAgICAgICAgICAgICBtYXhDb3VudD17MX1cclxuICAgICAgICAgICAgICAgICAgLy8gbGlzdFR5cGU9XCJwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLmpwZWcsIC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICB7Li4uaW1hZ2VVcGxvYWRwcm9wc1BlcnNvbjF9XHJcbiAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7cHJldmlld1Zpc2libGVQZXJzb24xICYmIDw+PEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcmV2aWV3SW1hZ2VQZXJzb24xfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCDguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggMVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgeyFwcmV2aWV3VmlzaWJsZVBlcnNvbjEgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEluYm94T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCDguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggMVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvRHJhZ2dlcj5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy01LzYgXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAxX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAxJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAxXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wMV9wb3NpdGlvblwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAxXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDEnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDFcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAxX3Bob25lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LmA4Lia4Lit4Lij4LmM4LmC4LiX4Lij4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDFcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guJXguLPguYHguKvguJnguYjguIfguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMScsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguYDguJrguK3guKPguYzguYLguJfguKPguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggbGc6dy0xLzYgcHItMlwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wMl9pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1hdXRvIGgtYXV0byB0ZXh0LWNlbnRlciB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LmA4Lil4Li34Lit4LiB4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDInLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsvKiA8RHJhZ2dlciB7Li4uZHJvcGltZ30+ICovfVxyXG4gICAgICAgICAgICAgICAgPERyYWdnZXJcclxuICAgICAgICAgICAgICAgICAgbWF4Q291bnQ9ezF9XHJcbiAgICAgICAgICAgICAgICAgIC8vIGxpc3RUeXBlPVwicGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5qcGVnLCAucG5nXCJcclxuICAgICAgICAgICAgICAgICAgey4uLmltYWdlVXBsb2FkcHJvcHNQZXJzb24yfVxyXG4gICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAge3ByZXZpZXdWaXNpYmxlUGVyc29uMiAmJiA8PjxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcmV2aWV3SW1hZ2VQZXJzb24yfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCDguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggMlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgeyFwcmV2aWV3VmlzaWJsZVBlcnNvbjIgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEluYm94T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCDguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggMlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvRHJhZ2dlcj5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy01LzYgXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAyX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMlwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAyJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAyXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wMl9wb3NpdGlvblwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAyXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDInLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDJcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAyX3Bob25lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LmA4Lia4Lit4Lij4LmM4LmC4LiX4Lij4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guJXguLPguYHguKvguJnguYjguIfguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMScsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguYDguJrguK3guKPguYzguYLguJfguKPguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMlwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggbGc6dy0xLzYgcHItMlwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wM19pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1hdXRvIGgtYXV0byB0ZXh0LWNlbnRlciB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LmA4Lil4Li34Lit4LiB4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDMnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsvKiA8RHJhZ2dlciB7Li4uZHJvcGltZ30+ICovfVxyXG4gICAgICAgICAgICAgICAgPERyYWdnZXJcclxuICAgICAgICAgICAgICAgICAgbWF4Q291bnQ9ezF9XHJcbiAgICAgICAgICAgICAgICAgIC8vIGxpc3RUeXBlPVwicGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5qcGVnLCAucG5nXCJcclxuICAgICAgICAgICAgICAgICAgey4uLmltYWdlVXBsb2FkcHJvcHNQZXJzb24zfVxyXG4gICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAge3ByZXZpZXdWaXNpYmxlUGVyc29uMyAmJiA8PjxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcmV2aWV3SW1hZ2VQZXJzb24zfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCDguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggM1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgeyFwcmV2aWV3VmlzaWJsZVBlcnNvbjMgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEluYm94T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCDguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggM1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvRHJhZ2dlcj5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy01LzYgXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAzX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggM1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAzJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAzXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wM19wb3NpdGlvblwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAzXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDMnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDNcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAzX3Bob25lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LmA4Lia4Lit4Lij4LmM4LmC4LiX4Lij4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guJXguLPguYHguKvguJnguYjguIfguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMScsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguYDguJrguK3guKPguYzguYLguJfguKPguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggM1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gY2xhc3NOYW1lPVwiZmxleCBtdC02XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBsZzp0ZXh0LXJpZ2h0IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBodG1sVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVzZXR9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0MyQ0ZFMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQzJDRkUwJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMHB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvLyBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHctZnVsbCBsZzp3LTEvNFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRleHQtY3VzdG9tLWJsYWNrIFwiPuC4o+C4teC5gOC4i+C5h+C4lzwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAvLyB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzA1OTY2OScsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMDU5NjY5JyxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMHB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUgIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdy1mdWxsIGxnOnctMS80XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGV4dC1jdXN0b20td2hpdGUgXCI+4Lia4Lix4LiZ4LiX4Li24LiBPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuLyogZ2V0U2VydmVyU2lkZVByb3BzICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgcmVxIH0gPSBjb250ZXh0O1xyXG4gIGNvbnN0IHsgb3JpZ2luIH0gPSBhYnNvbHV0ZVVybChyZXEpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgb3JpZ2luLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
========
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9zZXR0aW5nL3Byb2ZpbGUvaW5kZXguanMiXSwibmFtZXMiOlsiSm9kaXRFZGl0b3IiLCJkeW5hbWljIiwic3NyIiwiVGV4dCIsIlR5cG9ncmFwaHkiLCJUaXRsZSIsIk9wdGlvbiIsIlNlbGVjdCIsIlRleHRBcmVhIiwiSW5wdXQiLCJjb25maWciLCJyZXF1aXJlIiwiSG9tZSIsInByb3BzIiwibm90aWZpY2F0aW9uIiwidXNlTm90aWZpY2F0aW9uIiwiYXBpIiwiY29udGV4dEhvbGRlciIsInVzZXIiLCJvcmlnaW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwcm9maWxlSWQiLCJxdWVyeSIsInVzZVN0YXRlIiwicHJvdmluY2VzIiwic2V0UHJvdmluY2VzIiwiZGlzdHJpY3RzIiwic2V0RGlzdHJpY3RzIiwic3ViRGlzdHJpY3RzIiwic2V0U3ViRGlzdHJpY3RzIiwicHJldmlld0ltYWdlTG9nbyIsInNldFByZXZpZXdJbWFnZUxvZ28iLCJwcmV2aWV3SW1hZ2VQZXJzb24xIiwic2V0UHJldmlld0ltYWdlUGVyc29uMSIsInByZXZpZXdJbWFnZVBlcnNvbjIiLCJzZXRQcmV2aWV3SW1hZ2VQZXJzb24yIiwicHJldmlld0ltYWdlUGVyc29uMyIsInNldFByZXZpZXdJbWFnZVBlcnNvbjMiLCJpbWFnZUxhbmRpbmdQYWdlTG9nbyIsInNldEltYWdlTGFuZGluZ1BhZ2VMb2dvIiwiaW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjEiLCJzZXRJbWFnZUxhbmRpbmdQYWdlUGVyc29uMSIsImltYWdlTGFuZGluZ1BhZ2VQZXJzb24yIiwic2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjIiLCJpbWFnZUxhbmRpbmdQYWdlUGVyc29uMyIsInNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24zIiwicHJldmlld1Zpc2libGVMb2dvIiwic2V0UHJldmlld1Zpc2libGVMb2dvIiwicHJldmlld1Zpc2libGVQZXJzb24xIiwic2V0UHJldmlld1Zpc2libGVQZXJzb24xIiwicHJldmlld1Zpc2libGVQZXJzb24yIiwic2V0UHJldmlld1Zpc2libGVQZXJzb24yIiwicHJldmlld1Zpc2libGVQZXJzb24zIiwic2V0UHJldmlld1Zpc2libGVQZXJzb24zIiwibG9nbyIsInNldExvZ28iLCJmaWVsZHMiLCJzZXRGaWVsZHMiLCJvcmdhbml6YXRpb25EYXRhIiwic2V0T3JnYW5pemF0aW9uRGF0YSIsInVzZUVmZmVjdCIsImZldGNoT3JnYW5pemF0aW9uRGF0YSIsImZldGNoUHJvdmluY2VzRGF0YSIsIm9uU3VibWl0SGFuZGxlciIsInZhbHVlIiwiZGF0YSIsIm9yZ2FuaXphdGlvbl9pZCIsIm9yZ2FuaXphdGlvbl9uYW1lIiwib3JnYW5pemF0aW9uX25hbWVfZW5nIiwib3JnYW5pemF0aW9uX2xvZ28iLCJvcmdhbml6YXRpb25fYWRkcmVzcyIsIm9yZ2FuaXphdGlvbl9zdWJfZGlzdHJpY3RfaWQiLCJzdWJEaXN0cmljdFNlbGVjdGVkIiwib3JnYW5pemF0aW9uX2VtYWlsIiwib3JnYW5pemF0aW9uX2VtYWlsX2FsZXJ0Iiwib3JnYW5pemF0aW9uX3Bob25lIiwib3JnYW5pemF0aW9uX2ZheCIsInNvY2lhbF9mYl9wYWdlaWQiLCJyc3MiLCJwZXJzb24wMV9uYW1lIiwicGVyc29uMDFfcG9zaXRpb24iLCJwZXJzb24wMV9pbWFnZSIsInBlcnNvbjAxX3Bob25lIiwicGVyc29uMDJfbmFtZSIsInBlcnNvbjAyX3Bvc2l0aW9uIiwicGVyc29uMDJfaW1hZ2UiLCJwZXJzb24wMl9waG9uZSIsInBlcnNvbjAzX25hbWUiLCJwZXJzb24wM19wb3NpdGlvbiIsInBlcnNvbjAzX2ltYWdlIiwicGVyc29uMDNfcGhvbmUiLCJjb25zb2xlIiwibG9nIiwiYXBpSW5zdGFuY2UiLCJwdXQiLCJzdGF0dXMiLCJvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJTdWNjZXNzIiwib3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbCIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZGVzY3JpcHRpb24iLCJwbGFjZW1lbnQiLCJtZXNzZ2FlIiwiZXJyb3IiLCJEcmFnZ2VyIiwiVXBsb2FkIiwiRm9ybSIsInVzZUZvcm0iLCJmb3JtIiwib25SZXNldCIsImZldGNoRGlzdHJpY3RzRGF0YSIsInN1Yl9kaXN0cmljdHMiLCJwcm92aW5jZV9pZCIsImZldGNoU3ViRGlzdHJpY3REYXRhIiwiZGlzdHJpY3RfaWQiLCJuYW1lIiwic3ViX2Rpc3RyaWN0X2lkIiwiZ2V0IiwiX29yZ2FuaXphdGlvbkRhdGEiLCJvcmdhbml6YXRpb24iLCJ0aHVtYm5haWxfbGluayIsIl9wcm92aW5jZXNEYXRhIiwiX2Rpc3RyaWN0c0RhdGEiLCJzdWJEaXN0cmljdElEIiwiX3N1YkRpc3RyaWN0c0RhdGEiLCJoYW5kbGVQcm92aW5jZXNDaGFuZ2UiLCJoYW5kbGVEaXN0cmljdENoYW5nZSIsImltYWdlVXBsb2FkcHJvcHNMb2dvIiwibXVsdGlwbGUiLCJsaXN0VHlwZSIsIm1heENvdW50IiwiYWN0aW9uIiwicHJldmlldyIsImN1c3RvbVJlcXVlc3QiLCJvcHRpb25zIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmaWxlIiwidHlwZV91c2VyIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsImxpc3QiLCJfbmFtZSIsIm9uU3VjY2VzcyIsImVyciIsIm9uQ2hhbmdlIiwiaW5mbyIsInVybCIsImdldEJhc2U2NCIsIm9yaWdpbkZpbGVPYmoiLCJvblJlbW92ZSIsInJlc2V0SW1hZ2VQcmV2aWV3IiwiaW1hZ2VVcGxvYWRwcm9wc1BlcnNvbjEiLCJpbWFnZVVwbG9hZHByb3BzUGVyc29uMiIsImltYWdlVXBsb2FkcHJvcHNQZXJzb24zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJwYXRoIiwiYnJlYWRjcnVtYk5hbWUiLCJoZWlnaHQiLCJ3aWR0aCIsIm9iamVjdEZpdCIsInJlcXVpcmVkIiwibWluUm93cyIsIm1heFJvd3MiLCJ0ZXh0QWxpZ24iLCJtYXAiLCJvYmplY3QiLCJwcm92aW5jZV9uYW1lIiwiZGlzdHJpY3RfbmFtZSIsInN1Yl9kaXN0cmljdF9uYW1lIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5SaWdodCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUlBLElBQU1BLFdBQVcsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sd0pBQU47QUFBQSxDQUFELEVBQThCO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUFoQixvRUFBZ0I7QUFBQTtBQUFBLGNBQWhCLGFBQWdCO0FBQUE7QUFBQSxDQUE5QixDQUEzQjtNQUFNRixXO0FBQ04sSUFBUUcsSUFBUixHQUF3QkMsK0NBQXhCLENBQVFELElBQVI7QUFBQSxJQUFjRSxLQUFkLEdBQXdCRCwrQ0FBeEIsQ0FBY0MsS0FBZDtBQUNBLElBQVFDLE1BQVIsR0FBbUJDLDJDQUFuQixDQUFRRCxNQUFSO0FBRUEsSUFBUUUsUUFBUixHQUFxQkMsMENBQXJCLENBQVFELFFBQVI7O0FBQ0EsSUFBTUUsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDZDQUFELENBQXRCOzs7QUFFZSxTQUFTQyxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQTs7QUFDbEMsOEJBQTZCQyxpREFBWSxDQUFDQyxlQUFiLEVBQTdCO0FBQUE7QUFBQSxNQUFPQyxHQUFQO0FBQUEsTUFBWUMsYUFBWjs7QUFDQSxNQUFRQyxJQUFSLEdBQXlCTCxLQUF6QixDQUFRSyxJQUFSO0FBQUEsTUFBY0MsTUFBZCxHQUF5Qk4sS0FBekIsQ0FBY00sTUFBZDtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFR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ZUUsTUFBQyxJQUFEO0FBQU0sYUFBUyxFQUFDLG9CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQWZGLENBREYsRUFrQkUsTUFBQywyQ0FBRCxDQUNFO0FBREY7QUFFRSxTQUFLLEVBQUU7QUFDTEoscUJBQWUsRUFBRSxTQURaO0FBRUxDLGlCQUFXLEVBQUUsU0FGUjtBQUdMYixZQUFNLEVBQUUsRUFISDtBQUlMQyxXQUFLLEVBQUUsR0FKRjtBQUtMYSxrQkFBWSxFQUFFLGdCQUxUO0FBTUxFLFdBQUssRUFBRTtBQU5GLEtBRlQ7QUFVRSxZQUFRLEVBQUMsUUFWWDtBQVdFLGFBQVMsRUFBQyw0SUFYWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBYUUsTUFBQyxJQUFEO0FBQU0sYUFBUyxFQUFDLG9CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQWJGLENBbEJGLENBREYsQ0FERixDQXZwQkYsQ0FERixDQXhCRixDQURGO0FBMnRCRDtBQUNEOztHQXYwQ3dCN0ssSTtVQUNPRSxpREFBWSxDQUFDQyxlLEVBRTNCTSxxRCxFQWtGQXNGLHlDQUFJLENBQUNDLE87OztNQXJGRWhHLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFkbWluXFxzZXR0aW5nXFxwcm9maWxlLmpzLjJlMWRlMmQ2MDc0MjkwZjEwODBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmJveE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbiwgRm9ybSwgSW1hZ2UsIElucHV0LCBub3RpZmljYXRpb24sIFNlbGVjdCwgVHlwb2dyYXBoeSwgVXBsb2FkXHJcbn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuLy8gaW1wb3J0IFVzZXJOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL1VzZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuLyogY29tcG9uZW50cyAqL1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dEFkbWluJztcclxuLyogdXRpbHMgKi9cclxuaW1wb3J0IHtcclxuICBhYnNvbHV0ZVVybCwgYXBpSW5zdGFuY2VcclxufSBmcm9tICcuLi8uLi8uLi8uLi9taWRkbGV3YXJlL3V0aWxzJztcclxuXHJcbmNvbnN0IEpvZGl0RWRpdG9yID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJqb2RpdC1yZWFjdFwiKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5jb25zdCB7IFRleHQsIFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4uLy4uL2NvbmZpZycpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG4gIGNvbnN0IFthcGksIGNvbnRleHRIb2xkZXJdID0gbm90aWZpY2F0aW9uLnVzZU5vdGlmaWNhdGlvbigpO1xyXG4gIGNvbnN0IHsgdXNlciwgb3JpZ2luIH0gPSBwcm9wcztcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHByb2ZpbGVJZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IFtwcm92aW5jZXMsIHNldFByb3ZpbmNlc10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtkaXN0cmljdHMsIHNldERpc3RyaWN0c10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtzdWJEaXN0cmljdHMsIHNldFN1YkRpc3RyaWN0c10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtwcmV2aWV3SW1hZ2VMb2dvLCBzZXRQcmV2aWV3SW1hZ2VMb2dvXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3ByZXZpZXdJbWFnZVBlcnNvbjEsIHNldFByZXZpZXdJbWFnZVBlcnNvbjFdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbcHJldmlld0ltYWdlUGVyc29uMiwgc2V0UHJldmlld0ltYWdlUGVyc29uMl0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtwcmV2aWV3SW1hZ2VQZXJzb24zLCBzZXRQcmV2aWV3SW1hZ2VQZXJzb24zXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2ltYWdlTGFuZGluZ1BhZ2VMb2dvLCBzZXRJbWFnZUxhbmRpbmdQYWdlTG9nb10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtpbWFnZUxhbmRpbmdQYWdlUGVyc29uMSwgc2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjFdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbaW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjIsIHNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24yXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2ltYWdlTGFuZGluZ1BhZ2VQZXJzb24zLCBzZXRJbWFnZUxhbmRpbmdQYWdlUGVyc29uM10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtwcmV2aWV3VmlzaWJsZUxvZ28sIHNldFByZXZpZXdWaXNpYmxlTG9nb10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbcHJldmlld1Zpc2libGVQZXJzb24xLCBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjFdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3ByZXZpZXdWaXNpYmxlUGVyc29uMiwgc2V0UHJldmlld1Zpc2libGVQZXJzb24yXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtwcmV2aWV3VmlzaWJsZVBlcnNvbjMsIHNldFByZXZpZXdWaXNpYmxlUGVyc29uM10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbG9nbywgc2V0TG9nb10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbZmllbGRzLCBzZXRGaWVsZHNdID0gdXNlU3RhdGUoW1xyXG4gIF0pO1xyXG4gIGNvbnN0IFtvcmdhbml6YXRpb25EYXRhLCBzZXRPcmdhbml6YXRpb25EYXRhXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaE9yZ2FuaXphdGlvbkRhdGEoKTtcclxuICAgIGZldGNoUHJvdmluY2VzRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXRIYW5kbGVyKHZhbHVlKSB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBvcmdhbml6YXRpb25faWQ6IHVzZXIub3JnYW5pemF0aW9uX2lkLFxyXG4gICAgICBvcmdhbml6YXRpb25fbmFtZTogdmFsdWUub3JnYW5pemF0aW9uX25hbWUsXHJcbiAgICAgIG9yZ2FuaXphdGlvbl9uYW1lX2VuZzogdmFsdWUub3JnYW5pemF0aW9uX25hbWVfZW5nLFxyXG4gICAgICBvcmdhbml6YXRpb25fbG9nbzogaW1hZ2VMYW5kaW5nUGFnZUxvZ28sXHJcbiAgICAgIG9yZ2FuaXphdGlvbl9hZGRyZXNzOiB2YWx1ZS5vcmdhbml6YXRpb25fYWRkcmVzcyxcclxuICAgICAgb3JnYW5pemF0aW9uX3N1Yl9kaXN0cmljdF9pZDogdmFsdWUuc3ViRGlzdHJpY3RTZWxlY3RlZCxcclxuICAgICAgb3JnYW5pemF0aW9uX2VtYWlsOiB2YWx1ZS5vcmdhbml6YXRpb25fZW1haWwsXHJcbiAgICAgIG9yZ2FuaXphdGlvbl9lbWFpbF9hbGVydDogdmFsdWUub3JnYW5pemF0aW9uX2VtYWlsX2FsZXJ0LFxyXG4gICAgICBvcmdhbml6YXRpb25fcGhvbmU6IHZhbHVlLm9yZ2FuaXphdGlvbl9waG9uZSxcclxuICAgICAgb3JnYW5pemF0aW9uX2ZheDogdmFsdWUub3JnYW5pemF0aW9uX2ZheCxcclxuICAgICAgc29jaWFsX2ZiX3BhZ2VpZDogdmFsdWUuc29jaWFsX2ZiX3BhZ2VpZCxcclxuICAgICAgcnNzOiB2YWx1ZS5yc3MsXHJcbiAgICAgIHBlcnNvbjAxX25hbWU6IHZhbHVlLnBlcnNvbjAxX25hbWUsXHJcbiAgICAgIHBlcnNvbjAxX3Bvc2l0aW9uOiB2YWx1ZS5wZXJzb24wMV9wb3NpdGlvbixcclxuICAgICAgcGVyc29uMDFfaW1hZ2U6IGltYWdlTGFuZGluZ1BhZ2VQZXJzb24xLFxyXG4gICAgICBwZXJzb24wMV9waG9uZTogdmFsdWUucGVyc29uMDFfcGhvbmUsXHJcbiAgICAgIHBlcnNvbjAyX25hbWU6IHZhbHVlLnBlcnNvbjAyX25hbWUsXHJcbiAgICAgIHBlcnNvbjAyX3Bvc2l0aW9uOiB2YWx1ZS5wZXJzb24wMl9wb3NpdGlvbixcclxuICAgICAgcGVyc29uMDJfaW1hZ2U6IGltYWdlTGFuZGluZ1BhZ2VQZXJzb24yLFxyXG4gICAgICBwZXJzb24wMl9waG9uZTogdmFsdWUucGVyc29uMDJfcGhvbmUsXHJcbiAgICAgIHBlcnNvbjAzX25hbWU6IHZhbHVlLnBlcnNvbjAzX25hbWUsXHJcbiAgICAgIHBlcnNvbjAzX3Bvc2l0aW9uOiB2YWx1ZS5wZXJzb24wM19wb3NpdGlvbixcclxuICAgICAgcGVyc29uMDNfaW1hZ2U6IGltYWdlTGFuZGluZ1BhZ2VQZXJzb24zLFxyXG4gICAgICBwZXJzb24wM19waG9uZTogdmFsdWUucGVyc29uMDNfcGhvbmUsXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIGNvbnN0IG9yZ2FuaXphdGlvbkRhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLnB1dCgnL3Byb2ZpbGUnLCBkYXRhKTtcclxuICAgIGlmIChvcmdhbml6YXRpb25EYXRhLmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICBvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJTdWNjZXNzKCk7XHJcbiAgICAgIGZldGNoT3JnYW5pemF0aW9uRGF0YSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbChvcmdhbml6YXRpb25EYXRhLmRhdGEubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJTdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgbm90aWZpY2F0aW9uLnN1Y2Nlc3Moe1xyXG4gICAgICBtZXNzYWdlOiBg4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIYCxcclxuICAgICAgZGVzY3JpcHRpb246ICfguJrguLHguJnguJfguLbguIHguILguYnguK3guKHguLnguKXguKrguLPguYDguKPguYfguIgnLFxyXG4gICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJGYWlsID0gbWVzc2dhZSA9PiB7XHJcbiAgICBub3RpZmljYXRpb24uZXJyb3Ioe1xyXG4gICAgICBtZXNzYWdlOiBg4Lie4Lia4Lib4Lix4LiN4Lir4Liy4Lij4Liw4Lir4Lin4LmI4Liy4LiH4LiB4Liy4Lij4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54LilYCxcclxuICAgICAgZGVzY3JpcHRpb246IG1lc3NnYWUsXHJcbiAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHsgRHJhZ2dlciB9ID0gVXBsb2FkO1xyXG5cclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuXHJcbiAgY29uc3Qgb25SZXNldCA9ICgpID0+IHtcclxuICAgIGZldGNoRGlzdHJpY3RzRGF0YShvcmdhbml6YXRpb25EYXRhLnN1Yl9kaXN0cmljdHMgPyBvcmdhbml6YXRpb25EYXRhLnN1Yl9kaXN0cmljdHMucHJvdmluY2VzLnByb3ZpbmNlX2lkIDogMClcclxuICAgIGZldGNoU3ViRGlzdHJpY3REYXRhKG9yZ2FuaXphdGlvbkRhdGEuc3ViX2Rpc3RyaWN0cyA/IG9yZ2FuaXphdGlvbkRhdGEuc3ViX2Rpc3RyaWN0cy5kaXN0cmljdHMuZGlzdHJpY3RfaWQgOiAwKVxyXG4gICAgc2V0RmllbGRzKFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX2xvZ28nXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fbG9nbyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX25hbWUnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fbmFtZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX25hbWVfZW5nJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEub3JnYW5pemF0aW9uX25hbWVfZW5nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fcGhvbmUnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fcGhvbmUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9lbWFpbCddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9lbWFpbCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX2ZheCddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9mYXhcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX2FkZHJlc3MnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fYWRkcmVzcyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncHJvdmluY2VzU2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzID8gb3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzLnByb3ZpbmNlcy5wcm92aW5jZV9pZCA6IFwiMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2Rpc3RyaWN0U2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzID8gb3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzLmRpc3RyaWN0cy5kaXN0cmljdF9pZCA6IFwiMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3N1YkRpc3RyaWN0U2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzID8gb3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzLnN1Yl9kaXN0cmljdF9pZCA6IFwiMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3NvY2lhbF9mYl9wYWdlaWQnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5zb2NpYWxfZmJfcGFnZWlkXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9lbWFpbF9hbGVydCddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9lbWFpbF9hbGVydFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydyc3MnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5yc3NcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDFfbmFtZSddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAxX25hbWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAxX3Bvc2l0aW9uJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDFfcG9zaXRpb24sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAxX3Bob25lJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDFfcGhvbmUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAyX25hbWUnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5wZXJzb24wMl9uYW1lLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wMl9wb3NpdGlvbiddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAyX3Bvc2l0aW9uLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wMl9waG9uZSddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAyX3Bob25lLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wM19uYW1lJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDNfbmFtZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDNfcG9zaXRpb24nXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5wZXJzb24wM19wb3NpdGlvbixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDNfcGhvbmUnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5wZXJzb24wM19waG9uZSxcclxuICAgICAgfVxyXG4gICAgXSk7XHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VMb2dvKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArIHVzZXIub3JnYW5pemF0aW9uX2lkICsgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArIG9yZ2FuaXphdGlvbkRhdGEub3JnYW5pemF0aW9uX2xvZ28pO1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVMb2dvKHRydWUpO1xyXG4gICAgc2V0SW1hZ2VMYW5kaW5nUGFnZUxvZ28ob3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fbG9nbyk7XHJcblxyXG4gICAgc2V0UHJldmlld0ltYWdlUGVyc29uMSgnLi5cXFxcLi5cXFxcLi5cXFxcdXBsb2Fkc1xcXFxjLScgKyB1c2VyLm9yZ2FuaXphdGlvbl9pZCArICdcXFxcb3JnYW5pemF0aW9uXFxcXCcgKyBvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAxX2ltYWdlKTtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMSh0cnVlKTtcclxuICAgIHNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24xKG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDFfaW1hZ2UpO1xyXG5cclxuICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjIoJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICsgdXNlci5vcmdhbml6YXRpb25faWQgKyAnXFxcXG9yZ2FuaXphdGlvblxcXFwnICsgb3JnYW5pemF0aW9uRGF0YS5wZXJzb24wMl9pbWFnZSk7XHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjIodHJ1ZSk7XHJcbiAgICBzZXRJbWFnZUxhbmRpbmdQYWdlUGVyc29uMihvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAyX2ltYWdlKTtcclxuXHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24zKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArIHVzZXIub3JnYW5pemF0aW9uX2lkICsgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArIG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDNfaW1hZ2UpO1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24zKHRydWUpO1xyXG4gICAgc2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjMob3JnYW5pemF0aW9uRGF0YS5wZXJzb24wM19pbWFnZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hPcmdhbml6YXRpb25EYXRhID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IF9vcmdhbml6YXRpb25EYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICdvcmdhbml6YXRpb24vJyArICh1c2VyID8gdXNlci5vcmdhbml6YXRpb25faWQgOiAwKVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbilcclxuICAgIHNldE9yZ2FuaXphdGlvbkRhdGEoX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24pXHJcbiAgICBmZXRjaERpc3RyaWN0c0RhdGEoX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24uc3ViX2Rpc3RyaWN0cyA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnN1Yl9kaXN0cmljdHMucHJvdmluY2VzLnByb3ZpbmNlX2lkIDogMClcclxuICAgIGZldGNoU3ViRGlzdHJpY3REYXRhKF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnN1Yl9kaXN0cmljdHMgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5zdWJfZGlzdHJpY3RzLmRpc3RyaWN0cy5kaXN0cmljdF9pZCA6IDApXHJcbiAgICBpZiAoX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2xvZ28pIHtcclxuICAgICAgc2V0UHJldmlld0ltYWdlTG9nbyhcclxuICAgICAgICAnLi5cXFxcLi5cXFxcLi5cXFxcdXBsb2Fkc1xcXFxjLScgK1xyXG4gICAgICAgIHVzZXIub3JnYW5pemF0aW9uX2lkICtcclxuICAgICAgICAnXFxcXG9yZ2FuaXphdGlvblxcXFwnICtcclxuICAgICAgICBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fbG9nbyxcclxuICAgICAgKVxyXG4gICAgICBzZXRQcmV2aWV3VmlzaWJsZUxvZ28odHJ1ZSlcclxuICAgIH1cclxuICAgIGlmIChfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMV9pbWFnZSkge1xyXG4gICAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24xKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArXHJcbiAgICAgICAgdXNlci5vcmdhbml6YXRpb25faWQgK1xyXG4gICAgICAgICdcXFxcb3JnYW5pemF0aW9uXFxcXCcgK1xyXG4gICAgICAgIF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAxX2ltYWdlKVxyXG4gICAgICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjEodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAyX2ltYWdlKSB7XHJcbiAgICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjIoJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICtcclxuICAgICAgICB1c2VyLm9yZ2FuaXphdGlvbl9pZCArXHJcbiAgICAgICAgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArXHJcbiAgICAgICAgX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDJfaW1hZ2UpXHJcbiAgICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMih0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDNfaW1hZ2UpIHtcclxuICAgICAgc2V0UHJldmlld0ltYWdlUGVyc29uMygnLi5cXFxcLi5cXFxcLi5cXFxcdXBsb2Fkc1xcXFxjLScgK1xyXG4gICAgICAgIHVzZXIub3JnYW5pemF0aW9uX2lkICtcclxuICAgICAgICAnXFxcXG9yZ2FuaXphdGlvblxcXFwnICtcclxuICAgICAgICBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wM19pbWFnZSlcclxuICAgICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24zKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldFByZXZpZXdJbWFnZUxvZ28oJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICsgdXNlci5vcmdhbml6YXRpb25faWQgKyAnXFxcXG9yZ2FuaXphdGlvblxcXFwnICsgX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2xvZ28pO1xyXG4gICAgLy8gc2V0UHJldmlld1Zpc2libGVMb2dvKHRydWUpO1xyXG4gICAgLy8gc2V0SW1hZ2VMYW5kaW5nUGFnZUxvZ28oX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2xvZ28pO1xyXG4gICAgc2V0RmllbGRzKFtcclxuICAgICAgLy8ge1xyXG4gICAgICAvLyAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX2xvZ28nXSxcclxuICAgICAgLy8gICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2xvZ29cclxuICAgICAgLy8gfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX25hbWUnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX25hbWUgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fbmFtZSA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX25hbWVfZW5nJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9uYW1lX2VuZyA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9uYW1lX2VuZyA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX3Bob25lJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9waG9uZSA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9waG9uZSA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX2VtYWlsJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9lbWFpbCA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9lbWFpbCA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncHJvdmluY2VzU2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24uc3ViX2Rpc3RyaWN0cyA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnN1Yl9kaXN0cmljdHMucHJvdmluY2VzLnByb3ZpbmNlX2lkIDogXCIwXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnZGlzdHJpY3RTZWxlY3RlZCddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5zdWJfZGlzdHJpY3RzID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24uc3ViX2Rpc3RyaWN0cy5kaXN0cmljdHMuZGlzdHJpY3RfaWQgOiBcIjBcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydzdWJEaXN0cmljdFNlbGVjdGVkJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnN1Yl9kaXN0cmljdHMgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5zdWJfZGlzdHJpY3RzLnN1Yl9kaXN0cmljdF9pZCA6IFwiMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9mYXgnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2ZheCA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9mYXggOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3RodW1ibmFpbF9saW5rJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnRodW1ibmFpbF9saW5rID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24udGh1bWJuYWlsX2xpbmsgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9hZGRyZXNzJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9hZGRyZXNzID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2FkZHJlc3MgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9lbWFpbF9hbGVydCddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fZW1haWxfYWxlcnQgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fZW1haWxfYWxlcnQgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3NvY2lhbF9mYl9wYWdlaWQnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24uc29jaWFsX2ZiX3BhZ2VpZCA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnNvY2lhbF9mYl9wYWdlaWQgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3JzcyddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5yc3MgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5yc3MgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAxX25hbWUnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDFfbmFtZSA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAxX25hbWUgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAxX3Bvc2l0aW9uJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAxX3Bvc2l0aW9uID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDFfcG9zaXRpb24gOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAxX3Bob25lJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAxX3Bob25lID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDFfcGhvbmUgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAyX25hbWUnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDJfbmFtZSA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAyX25hbWUgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAyX3Bvc2l0aW9uJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAyX3Bvc2l0aW9uID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDJfcG9zaXRpb24gOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAyX3Bob25lJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAyX3Bob25lID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDJfcGhvbmUgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAzX25hbWUnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDNfbmFtZSA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAzX25hbWUgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAzX3Bvc2l0aW9uJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAzX3Bvc2l0aW9uID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDNfcG9zaXRpb24gOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAzX3Bob25lJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAzX3Bob25lID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDNfcGhvbmUgOiBcIlwiXHJcbiAgICAgIH0sXHJcblxyXG5cclxuICAgIF0pXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hQcm92aW5jZXNEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgX3Byb3ZpbmNlc0RhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ3Byb3ZpbmNlJ1xyXG4gICAgKTtcclxuXHJcbiAgICBzZXRQcm92aW5jZXMoX3Byb3ZpbmNlc0RhdGEuZGF0YS5kYXRhKVxyXG4gICAgLy8gY29uc29sZS5sb2coX3Byb3ZpbmNlc0RhdGEuZGF0YS5kYXRhKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmV0Y2hEaXN0cmljdHNEYXRhID0gYXN5bmMgKHByb3ZpbmNlX2lkKSA9PiB7XHJcbiAgICBjb25zdCBfZGlzdHJpY3RzRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAnZGlzdHJpY3QvJyArIHByb3ZpbmNlX2lkXHJcbiAgICApO1xyXG5cclxuICAgIHNldERpc3RyaWN0cyhfZGlzdHJpY3RzRGF0YS5kYXRhLmRhdGEpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhfZGlzdHJpY3RzRGF0YS5kYXRhLmRhdGEpXHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3QgZmV0Y2hTdWJEaXN0cmljdERhdGEgPSBhc3luYyAoc3ViRGlzdHJpY3RJRCkgPT4ge1xyXG4gICAgY29uc3QgX3N1YkRpc3RyaWN0c0RhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ3N1Yi1kaXN0cmljdC8nICsgc3ViRGlzdHJpY3RJRFxyXG4gICAgKTtcclxuXHJcbiAgICBzZXRTdWJEaXN0cmljdHMoX3N1YkRpc3RyaWN0c0RhdGEuZGF0YS5kYXRhKVxyXG4gICAgLy8gY29uc29sZS5sb2coX3N1YkRpc3RyaWN0c0RhdGEuZGF0YS5kYXRhKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvdmluY2VzQ2hhbmdlID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICBzZXRGaWVsZHMoW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwcm92aW5jZXNTZWxlY3RlZCddLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydkaXN0cmljdFNlbGVjdGVkJ10sXHJcbiAgICAgICAgdmFsdWU6IFwiMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3N1YkRpc3RyaWN0U2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogXCIwXCJcclxuICAgICAgfSxcclxuXHJcbiAgICBdKVxyXG4gICAgZmV0Y2hEaXN0cmljdHNEYXRhKHZhbHVlKTtcclxuICAgIHNldFN1YkRpc3RyaWN0cyhbXSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZURpc3RyaWN0Q2hhbmdlID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRGaWVsZHMoW1xyXG5cclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnZGlzdHJpY3RTZWxlY3RlZCddLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydzdWJEaXN0cmljdFNlbGVjdGVkJ10sXHJcbiAgICAgICAgdmFsdWU6IFwiMFwiXHJcbiAgICAgIH0sXHJcblxyXG4gICAgXSlcclxuICAgIGZldGNoU3ViRGlzdHJpY3REYXRhKHZhbHVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaW1hZ2VVcGxvYWRwcm9wc0xvZ28gPSB7XHJcbiAgICBuYW1lOiAnZmlsZScsXHJcbiAgICBtdWx0aXBsZTogZmFsc2UsXHJcbiAgICBsaXN0VHlwZTogJ3RleHQnLFxyXG4gICAgbWF4Q291bnQ6IDEsXHJcbiAgICBhY3Rpb246IFwiL2FwaS91cGxvYWQvb3JnYW5pemF0aW9uXCIsXHJcbiAgICBwcmV2aWV3OiBmYWxzZSxcclxuICAgIGN1c3RvbVJlcXVlc3Q6IChvcHRpb25zKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgZGF0YS5hcHBlbmQoJ2lkJywgdXNlci50eXBlX3VzZXIgPT0gMSA/IFwiYWRtaW5cIiA6IHVzZXIub3JnYW5pemF0aW9uX2lkKVxyXG4gICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgXCJoZWFkZXJzXCI6IHtcclxuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6ICdtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0tLS0tV2ViS2l0Rm9ybUJvdW5kYXJ5cVRxSkl4dmtXRllxdlA1cydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYXhpb3MucG9zdChvcHRpb25zLmFjdGlvbiwgZGF0YSwgY29uZmlnKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRJbWFnZUxhbmRpbmdQYWdlTG9nbyhyZXMuZGF0YS5kYXRhLmxpc3RbMF0uX25hbWUpXHJcbiAgICAgICAgb3B0aW9ucy5vblN1Y2Nlc3MocmVzLmRhdGEsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgfSlcclxuXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgb25DaGFuZ2UoaW5mbykge1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gaW5mby5maWxlXHJcbiAgICAgIHN3aXRjaCAoaW5mby5maWxlLnN0YXR1cykge1xyXG4gICAgICAgIGNhc2UgXCJkb25lXCI6XHJcbiAgICAgICAgICBpZiAoIWluZm8uZmlsZS51cmwgJiYgIWluZm8uZmlsZS5wcmV2aWV3KSB7XHJcbiAgICAgICAgICAgIGluZm8uZmlsZS5wcmV2aWV3ID0gYXdhaXQgZ2V0QmFzZTY0KGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFByZXZpZXdJbWFnZUxvZ28oaW5mby5maWxlLnVybCB8fCBpbmZvLmZpbGUucHJldmlldylcclxuICAgICAgICAgIHNldFByZXZpZXdWaXNpYmxlTG9nbyh0cnVlKVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgLy8gZXJyb3Igb3IgcmVtb3ZlZFxyXG4gICAgICAgIC8vIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBvblJlbW92ZShpbmZvKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwib25SZW1vdmVcIilcclxuICAgICAgY29uc29sZS5sb2coaW5mbylcclxuICAgICAgcmVzZXRJbWFnZVByZXZpZXcoKVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGltYWdlVXBsb2FkcHJvcHNQZXJzb24xID0ge1xyXG4gICAgbmFtZTogJ2ZpbGUnLFxyXG4gICAgbXVsdGlwbGU6IGZhbHNlLFxyXG4gICAgbGlzdFR5cGU6ICd0ZXh0JyxcclxuICAgIG1heENvdW50OiAxLFxyXG4gICAgYWN0aW9uOiBcIi9hcGkvdXBsb2FkL29yZ2FuaXphdGlvblwiLFxyXG4gICAgcHJldmlldzogZmFsc2UsXHJcbiAgICBjdXN0b21SZXF1ZXN0OiAob3B0aW9ucykgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdpZCcsIHVzZXIudHlwZV91c2VyID09IDEgPyBcImFkbWluXCIgOiB1c2VyLm9yZ2FuaXphdGlvbl9pZClcclxuICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgIFwiaGVhZGVyc1wiOiB7XHJcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9LS0tLVdlYktpdEZvcm1Cb3VuZGFyeXFUcUpJeHZrV0ZZcXZQNXMnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGF4aW9zLnBvc3Qob3B0aW9ucy5hY3Rpb24sIGRhdGEsIGNvbmZpZykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjEocmVzLmRhdGEuZGF0YS5saXN0WzBdLl9uYW1lKVxyXG4gICAgICAgIG9wdGlvbnMub25TdWNjZXNzKHJlcy5kYXRhLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfSxcclxuICAgIGFzeW5jIG9uQ2hhbmdlKGluZm8pIHtcclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGluZm8uZmlsZVxyXG4gICAgICBzd2l0Y2ggKGluZm8uZmlsZS5zdGF0dXMpIHtcclxuICAgICAgICBjYXNlIFwiZG9uZVwiOlxyXG4gICAgICAgICAgaWYgKCFpbmZvLmZpbGUudXJsICYmICFpbmZvLmZpbGUucHJldmlldykge1xyXG4gICAgICAgICAgICBpbmZvLmZpbGUucHJldmlldyA9IGF3YWl0IGdldEJhc2U2NChpbmZvLmZpbGUub3JpZ2luRmlsZU9iaik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24xKGluZm8uZmlsZS51cmwgfHwgaW5mby5maWxlLnByZXZpZXcpXHJcbiAgICAgICAgICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjEodHJ1ZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAvLyByZXNldEltYWdlUHJldmlldygpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgb25SZW1vdmUoaW5mbykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9uUmVtb3ZlXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbWFnZVVwbG9hZHByb3BzUGVyc29uMiA9IHtcclxuICAgIG5hbWU6ICdmaWxlJyxcclxuICAgIG11bHRpcGxlOiBmYWxzZSxcclxuICAgIGxpc3RUeXBlOiAndGV4dCcsXHJcbiAgICBtYXhDb3VudDogMSxcclxuICAgIGFjdGlvbjogXCIvYXBpL3VwbG9hZC9vcmdhbml6YXRpb25cIixcclxuICAgIHByZXZpZXc6IGZhbHNlLFxyXG4gICAgY3VzdG9tUmVxdWVzdDogKG9wdGlvbnMpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgb3B0aW9ucy5maWxlKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnaWQnLCB1c2VyLnR5cGVfdXNlciA9PSAxID8gXCJhZG1pblwiIDogdXNlci5vcmdhbml6YXRpb25faWQpXHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICBcImhlYWRlcnNcIjoge1xyXG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogJ211bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PS0tLS1XZWJLaXRGb3JtQm91bmRhcnlxVHFKSXh2a1dGWXF2UDVzJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBheGlvcy5wb3N0KG9wdGlvbnMuYWN0aW9uLCBkYXRhLCBjb25maWcpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24yKHJlcy5kYXRhLmRhdGEubGlzdFswXS5fbmFtZSlcclxuICAgICAgICBvcHRpb25zLm9uU3VjY2VzcyhyZXMuZGF0YSwgb3B0aW9ucy5maWxlKVxyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICB9KVxyXG5cclxuICAgIH0sXHJcbiAgICBhc3luYyBvbkNoYW5nZShpbmZvKSB7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBpbmZvLmZpbGVcclxuICAgICAgc3dpdGNoIChpbmZvLmZpbGUuc3RhdHVzKSB7XHJcbiAgICAgICAgY2FzZSBcImRvbmVcIjpcclxuICAgICAgICAgIGlmICghaW5mby5maWxlLnVybCAmJiAhaW5mby5maWxlLnByZXZpZXcpIHtcclxuICAgICAgICAgICAgaW5mby5maWxlLnByZXZpZXcgPSBhd2FpdCBnZXRCYXNlNjQoaW5mby5maWxlLm9yaWdpbkZpbGVPYmopO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0UHJldmlld0ltYWdlUGVyc29uMihpbmZvLmZpbGUudXJsIHx8IGluZm8uZmlsZS5wcmV2aWV3KVxyXG4gICAgICAgICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24yKHRydWUpXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAvLyByZXNldEltYWdlUHJldmlldygpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgb25SZW1vdmUoaW5mbykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9uUmVtb3ZlXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbWFnZVVwbG9hZHByb3BzUGVyc29uMyA9IHtcclxuICAgIG5hbWU6ICdmaWxlJyxcclxuICAgIG11bHRpcGxlOiBmYWxzZSxcclxuICAgIGxpc3RUeXBlOiAndGV4dCcsXHJcbiAgICBtYXhDb3VudDogMSxcclxuICAgIGFjdGlvbjogXCIvYXBpL3VwbG9hZC9vcmdhbml6YXRpb25cIixcclxuICAgIHByZXZpZXc6IGZhbHNlLFxyXG4gICAgY3VzdG9tUmVxdWVzdDogKG9wdGlvbnMpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgb3B0aW9ucy5maWxlKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnaWQnLCB1c2VyLnR5cGVfdXNlciA9PSAxID8gXCJhZG1pblwiIDogdXNlci5vcmdhbml6YXRpb25faWQpXHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICBcImhlYWRlcnNcIjoge1xyXG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogJ211bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PS0tLS1XZWJLaXRGb3JtQm91bmRhcnlxVHFKSXh2a1dGWXF2UDVzJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBheGlvcy5wb3N0KG9wdGlvbnMuYWN0aW9uLCBkYXRhLCBjb25maWcpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24zKHJlcy5kYXRhLmRhdGEubGlzdFswXS5fbmFtZSlcclxuICAgICAgICBvcHRpb25zLm9uU3VjY2VzcyhyZXMuZGF0YSwgb3B0aW9ucy5maWxlKVxyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICB9KVxyXG5cclxuICAgIH0sXHJcbiAgICBhc3luYyBvbkNoYW5nZShpbmZvKSB7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBpbmZvLmZpbGVcclxuICAgICAgc3dpdGNoIChpbmZvLmZpbGUuc3RhdHVzKSB7XHJcbiAgICAgICAgY2FzZSBcImRvbmVcIjpcclxuICAgICAgICAgIGlmICghaW5mby5maWxlLnVybCAmJiAhaW5mby5maWxlLnByZXZpZXcpIHtcclxuICAgICAgICAgICAgaW5mby5maWxlLnByZXZpZXcgPSBhd2FpdCBnZXRCYXNlNjQoaW5mby5maWxlLm9yaWdpbkZpbGVPYmopO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0UHJldmlld0ltYWdlUGVyc29uMyhpbmZvLmZpbGUudXJsIHx8IGluZm8uZmlsZS5wcmV2aWV3KVxyXG4gICAgICAgICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24zKHRydWUpXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAvLyByZXNldEltYWdlUHJldmlldygpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgb25SZW1vdmUoaW5mbykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9uUmVtb3ZlXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXNldEltYWdlUHJldmlldyA9ICgpID0+IHtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlTG9nbyhmYWxzZSk7XHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjEoZmFsc2UpO1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24yKGZhbHNlKTtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMyhmYWxzZSk7XHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VMb2dvKG51bGwpO1xyXG4gICAgc2V0UHJldmlld0ltYWdlUGVyc29uMShudWxsKTtcclxuICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjIobnVsbCk7XHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24zKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGdldEJhc2U2NChmaWxlKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgIHJlYWRlci5vbmVycm9yID0gZXJyb3IgPT4gcmVqZWN0KGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXRcclxuICAgICAgdGl0bGU9XCJHb3Zlcm5tZW50IC0gQWRtaW4gbWFuYWdlbWVudFwiXHJcbiAgICAgIHVybD17b3JpZ2lufVxyXG4gICAgICBvcmlnaW49e29yaWdpbn1cclxuICAgICAgLy8gdXNlcj17bG9naW59XHJcbiAgICAgIGluZGV4U3ViTWVudT17XCI2XCJ9XHJcbiAgICAgIGluZGV4TWVudT17XCJzdWItNi0wXCJ9XHJcbiAgICAgIHRpdGxlUGFnZT1cIuC4guC5ieC4reC4oeC4ueC4peC4reC4h+C4hOC5jOC4geC4o1wiXHJcbiAgICAgIF9yb3V0ZXM9e1tcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYXRoOiAnL2FkbWluL2Rhc2hib3JhZCcsXHJcbiAgICAgICAgICBicmVhZGNydW1iTmFtZTogJ+C4q+C4meC5ieC4suC4q+C4peC4seC4gScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYXRoOiAnL2FkbWluL3NldHRpbmcvcHJvZmlsZScsXHJcbiAgICAgICAgICBicmVhZGNydW1iTmFtZTogJ+C4guC5ieC4reC4oeC4ueC4peC4reC4h+C4hOC5jOC4geC4oycsXHJcbiAgICAgICAgfSxcclxuICAgICAgXX1cclxuICAgID5cclxuICAgICAge2NvbnRleHRIb2xkZXJ9XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3JlYWN0LXF1aWxsQDEuMy4zL2Rpc3QvcXVpbGwuc25vdy5jc3NcIlxyXG4gICAgICA+PC9saW5rPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNS82IGxnOnctZnVsbCBteC1hdXRvXCI+XHJcbiAgICAgICAgPEZvcm1cclxuICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXHJcbiAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICBvbkZpbmlzaD17b25TdWJtaXRIYW5kbGVyfVxyXG4gICAgICAgICAgcmVxdWlyZWRNYXJrPXt0cnVlfVxyXG4gICAgICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgICAgIGZpZWxkcz17ZmllbGRzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggbGc6dy0xLzYgIHByLTJcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwib3JnYW5pemF0aW9uX2xvZ29cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctYXV0byBoLWF1dG8gdGV4dC1jZW50ZXIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC5gOC4peC4t+C4reC4geC4oOC4suC4niBMb2dvIOC4reC4h+C4hOC5jOC4geC4oycsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgey8qIDxEcmFnZ2VyIHsuLi5kcm9waW1nfT4gKi99XHJcbiAgICAgICAgICAgICAgICA8RHJhZ2dlclxyXG4gICAgICAgICAgICAgICAgICBtYXhDb3VudD17MX1cclxuICAgICAgICAgICAgICAgICAgLy8gbGlzdFR5cGU9XCJwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLmpwZWcsIC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICB7Li4uaW1hZ2VVcGxvYWRwcm9wc0xvZ299XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7cHJldmlld1Zpc2libGVMb2dvICYmIDw+PEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3ByZXZpZXdJbWFnZUxvZ299XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzExNnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcidcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIOC4hOC4peC4tOC4gSDguKvguKPguLfguK0g4Lil4Liy4LiB4LmE4Lif4Lil4LmM4Lih4Liy4LiX4Li14LmI4Lia4Lij4Li04LmA4Lin4LiT4LiZ4Li14LmJ4LmA4Lie4Li34LmI4Lit4Lit4Lix4Lib4LmC4Lir4Lil4LiUIExvZ28g4Lit4LiH4LiE4LmM4LiB4LijXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB7IXByZXZpZXdWaXNpYmxlTG9nbyAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtZHJhZy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5ib3hPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIOC4hOC4peC4tOC4gSDguKvguKPguLfguK0g4Lil4Liy4LiB4LmE4Lif4Lil4LmM4Lih4Liy4LiX4Li14LmI4Lia4Lij4Li04LmA4Lin4LiT4LiZ4Li14LmJ4LmA4Lie4Li34LmI4Lit4Lit4Lix4Lib4LmC4Lir4Lil4LiUIExvZ28g4Lit4LiH4LiE4LmM4LiB4LijXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9EcmFnZ2VyPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTUvNiBcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwib3JnYW5pemF0aW9uX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguIrguLfguYjguK3guKvguJnguYjguKfguKLguIfguLLguJlcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4q+C4meC5iOC4p+C4ouC4h+C4suC4mScsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiK4Li34LmI4Lit4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJvcmdhbml6YXRpb25fbmFtZV9lbmdcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguIrguLfguYjguK3guKvguJnguYjguKfguKLguIfguLLguJkg4Lig4Liy4Lip4Liy4Lit4Lix4LiH4LiB4Lik4LipXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZ4Lig4Liy4Lip4Liy4Lit4Lix4LiH4LiB4Lik4LipJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC4q+C4meC5iOC4p+C4ouC4h+C4suC4mSDguKDguLLguKnguLLguK3guLHguIfguIHguKTguKlcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIG5hbWU9XCJvcmdhbml6YXRpb25fYWRkcmVzc1wiXHJcbiAgICAgICAgICAgIGxhYmVsPVwi4LiX4Li14LmI4Lit4Lii4Li54LmI4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiX4Li14LmI4Lit4Lii4Li54LmI4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4l+C4teC5iOC4reC4ouC4ueC5iOC4q+C4meC5iOC4p+C4ouC4h+C4suC4mVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDMsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCBsZzp3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzMgbXItNFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwcm92aW5jZXNTZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4iOC4seC4h+C4q+C4p+C4seC4lFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gdy1mdWxsIGZvbnQtYm9sZCBtYi0yIFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdCAhaW1wb3J0YW50XCIgfX1cclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiI4Lix4LiH4Lir4Lin4Lix4LiUJyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXsoKT0+cHJvdmluY2VzU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IHdpZHRoOiAxMjAgfX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVByb3ZpbmNlc0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb249e3RydWV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCIwXCI+4LmA4Lil4Li34Lit4LiBPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm92aW5jZXMgPyBwcm92aW5jZXMubWFwKChvYmplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE9wdGlvbiB2YWx1ZT17b2JqZWN0LnByb3ZpbmNlX2lkfT57b2JqZWN0LnByb3ZpbmNlX25hbWV9ICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgfSkgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTEvMyBsZzpteC00XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImRpc3RyaWN0U2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguK3guLPguYDguKDguK1cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbCBcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnQgIWltcG9ydGFudFwiIH19XHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4reC4s+C5gOC4oOC4rScsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17KCk9PnByb3ZpbmNlc1NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyB3aWR0aDogMTIwIH19XHJcbiAgICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEaXN0cmljdENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb249e3RydWV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCIwXCI+4LmA4Lil4Li34Lit4LiBPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIHtkaXN0cmljdHMgPyBkaXN0cmljdHMubWFwKChvYmplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE9wdGlvbiB2YWx1ZT17b2JqZWN0LmRpc3RyaWN0X2lkfT57b2JqZWN0LmRpc3RyaWN0X25hbWV9ICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgfSkgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTEvMyBsZzptbC00XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInN1YkRpc3RyaWN0U2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguJXguLPguJrguKVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbCBcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnQgIWltcG9ydGFudFwiIH19XHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4leC4s+C4muC4pScsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17KCk9PnByb3ZpbmNlc1NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyB3aWR0aDogMTIwIH19XHJcbiAgICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiMFwiPuC5gOC4peC4t+C4reC4gTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICB7c3ViRGlzdHJpY3RzID8gc3ViRGlzdHJpY3RzLm1hcCgob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxPcHRpb24gdmFsdWU9e29iamVjdC5zdWJfZGlzdHJpY3RfaWR9PntvYmplY3Quc3ViX2Rpc3RyaWN0X25hbWV9ICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgfSkgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IGxnOnctMS8yIGxnOm1yLTRcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwib3JnYW5pemF0aW9uX3Bob25lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LmA4Lia4Lit4Lij4LmM4LmC4LiX4LijXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguYDguJrguK3guKPguYzguYLguJfguKMnLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC5gOC4muC4reC4o+C5jOC5guC4l+C4o1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggbGc6dy0xLzIgbGc6bWwtNFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJvcmdhbml6YXRpb25fZmF4XCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LmA4Lia4Lit4Lij4LmMIGZheFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC5gOC4muC4reC4o+C5jCBmYXgnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LmA4Lia4Lit4Lij4LmMIGZheFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggbGc6dy0xLzIgbGc6bXItNFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJvcmdhbml6YXRpb25fZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguK3guLXguYDguKHguKXguKXguYxcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4reC4teC5gOC4oeC4peC4peC5jCcsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4Lit4Li14LmA4Lih4Lil4Lil4LmMXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCBsZzp3LTEvMiBsZzptbC00XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm9yZ2FuaXphdGlvbl9lbWFpbF9hbGVydFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4reC4teC5gOC4oeC4peC4peC5jOC4quC4s+C4q+C4o+C4seC4muC5geC4iOC5ieC4h+C5gOC4leC4t+C4reC4mVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4reC4teC5gOC4oeC4peC4peC5jOC4quC4s+C4q+C4o+C4seC4muC5geC4iOC5ieC4h+C5gOC4leC4t+C4reC4mScsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguK3guLXguYDguKHguKXguKXguYzguKrguLPguKvguKPguLHguJrguYHguIjguYnguIfguYDguJXguLfguK3guJlcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IGxnOnctMS8yIGxnOm1yLTRcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwic29jaWFsX2ZiX3BhZ2VpZFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cImZhY2Vib29rIHBhZ2UgaWRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIEgZmFjZWJvb2sgcGFnZSBpZCcsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJmYWNlYm9vayBwYWdlIGlkXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCBsZzp3LTEvMiBsZzptbC00XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInJzc1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4o+C4q+C4seC4quC4q+C4meC5iOC4p+C4ouC4h+C4suC4meC4oOC4suC4hOC4o+C4seC4kOC4quC4s+C4q+C4o+C4seC4muC5gOC4iuC4t+C4reC4oeC4leC5iOC4reC4o+C4sOC4muC4miBFLUdQXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4Lij4Lir4Lix4Liq4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZ4Lig4Liy4LiE4Lij4Lix4LiQ4Liq4Liz4Lir4Lij4Lix4Lia4LmA4LiK4Li34Lit4Lih4LiV4LmI4Lit4Lij4Liw4Lia4LiaIEUtR1AnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4Lij4Lir4Lix4Liq4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZ4Lig4Liy4LiE4Lij4Lix4LiQ4Liq4Liz4Lir4Lij4Lix4Lia4LmA4LiK4Li34Lit4Lih4LiV4LmI4Lit4Lij4Liw4Lia4LiaIEUtR1BcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aHJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjQzRDNEM0JyxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktNlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBsZzp3LTEvNiBwci0yXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAxX2ltYWdlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWF1dG8gaC1hdXRvIHRleHQtY2VudGVyIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguYDguKXguLfguK3guIHguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggMScsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgey8qIDxEcmFnZ2VyIHsuLi5kcm9waW1nfT4gKi99XHJcbiAgICAgICAgICAgICAgICA8RHJhZ2dlclxyXG4gICAgICAgICAgICAgICAgICBtYXhDb3VudD17MX1cclxuICAgICAgICAgICAgICAgICAgLy8gbGlzdFR5cGU9XCJwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLmpwZWcsIC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICB7Li4uaW1hZ2VVcGxvYWRwcm9wc1BlcnNvbjF9XHJcbiAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7cHJldmlld1Zpc2libGVQZXJzb24xICYmIDw+PEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcmV2aWV3SW1hZ2VQZXJzb24xfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCDguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggMVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgeyFwcmV2aWV3VmlzaWJsZVBlcnNvbjEgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEluYm94T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCDguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggMVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvRHJhZ2dlcj5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy01LzYgXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAxX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAxJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAxXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wMV9wb3NpdGlvblwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAxXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDEnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDFcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAxX3Bob25lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LmA4Lia4Lit4Lij4LmM4LmC4LiX4Lij4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDFcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guJXguLPguYHguKvguJnguYjguIfguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMScsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguYDguJrguK3guKPguYzguYLguJfguKPguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggbGc6dy0xLzYgcHItMlwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wMl9pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1hdXRvIGgtYXV0byB0ZXh0LWNlbnRlciB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LmA4Lil4Li34Lit4LiB4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDInLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsvKiA8RHJhZ2dlciB7Li4uZHJvcGltZ30+ICovfVxyXG4gICAgICAgICAgICAgICAgPERyYWdnZXJcclxuICAgICAgICAgICAgICAgICAgbWF4Q291bnQ9ezF9XHJcbiAgICAgICAgICAgICAgICAgIC8vIGxpc3RUeXBlPVwicGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5qcGVnLCAucG5nXCJcclxuICAgICAgICAgICAgICAgICAgey4uLmltYWdlVXBsb2FkcHJvcHNQZXJzb24yfVxyXG4gICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAge3ByZXZpZXdWaXNpYmxlUGVyc29uMiAmJiA8PjxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcmV2aWV3SW1hZ2VQZXJzb24yfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCDguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggMlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgeyFwcmV2aWV3VmlzaWJsZVBlcnNvbjIgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEluYm94T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCDguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggMlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvRHJhZ2dlcj5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy01LzYgXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAyX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMlwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAyJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAyXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wMl9wb3NpdGlvblwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAyXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDInLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDJcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAyX3Bob25lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LmA4Lia4Lit4Lij4LmM4LmC4LiX4Lij4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guJXguLPguYHguKvguJnguYjguIfguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMScsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguYDguJrguK3guKPguYzguYLguJfguKPguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMlwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggbGc6dy0xLzYgcHItMlwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wM19pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1hdXRvIGgtYXV0byB0ZXh0LWNlbnRlciB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LmA4Lil4Li34Lit4LiB4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDMnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsvKiA8RHJhZ2dlciB7Li4uZHJvcGltZ30+ICovfVxyXG4gICAgICAgICAgICAgICAgPERyYWdnZXJcclxuICAgICAgICAgICAgICAgICAgbWF4Q291bnQ9ezF9XHJcbiAgICAgICAgICAgICAgICAgIC8vIGxpc3RUeXBlPVwicGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5qcGVnLCAucG5nXCJcclxuICAgICAgICAgICAgICAgICAgey4uLmltYWdlVXBsb2FkcHJvcHNQZXJzb24zfVxyXG4gICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAge3ByZXZpZXdWaXNpYmxlUGVyc29uMyAmJiA8PjxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcmV2aWV3SW1hZ2VQZXJzb24zfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCDguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggM1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgeyFwcmV2aWV3VmlzaWJsZVBlcnNvbjMgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEluYm94T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCDguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggM1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvRHJhZ2dlcj5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy01LzYgXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAzX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggM1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAzJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAzXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wM19wb3NpdGlvblwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAzXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDMnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDNcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAzX3Bob25lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LmA4Lia4Lit4Lij4LmM4LmC4LiX4Lij4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guJXguLPguYHguKvguJnguYjguIfguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMScsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguYDguJrguK3guKPguYzguYLguJfguKPguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggM1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gY2xhc3NOYW1lPVwiZmxleCBtdC02XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBsZzp0ZXh0LXJpZ2h0IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBodG1sVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVzZXR9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0MyQ0ZFMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQzJDRkUwJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMHB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvLyBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHctZnVsbCBsZzp3LTEvNFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRleHQtY3VzdG9tLWJsYWNrIFwiPuC4o+C4teC5gOC4i+C5h+C4lzwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAvLyB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzA1OTY2OScsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMDU5NjY5JyxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMHB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUgIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdy1mdWxsIGxnOnctMS80XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGV4dC1jdXN0b20td2hpdGUgXCI+4Lia4Lix4LiZ4LiX4Li24LiBPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuLyogZ2V0U2VydmVyU2lkZVByb3BzICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgcmVxIH0gPSBjb250ZXh0O1xyXG4gIGNvbnN0IHsgb3JpZ2luIH0gPSBhYnNvbHV0ZVVybChyZXEpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgb3JpZ2luLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
>>>>>>>> a588bba41416f8e98cb4413e5559086c17972e4b:.next/static/webpack/static/development/pages/admin/setting/profile.js.2e1de2d6074290f1080b.hot-update.js
