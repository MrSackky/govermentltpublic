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





var _jsxFileName = "C:\\Users\\Sackky\\Desktop\\govermentlt\\pages\\admin\\setting\\profile\\index.js",
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
              setPreviewImageLogo("..\\..\\..\\uploads\\c-" + user.organization_id + '\\organization\\' + _organizationData.data.organization.organization_logo);
              setPreviewVisibleLogo(true);
              setImageLandingPageLogo(_organizationData.data.organization.organization_logo);
              setPreviewImagePerson1("..\\..\\..\\uploads\\c-" + user.organization_id + '\\organization\\' + _organizationData.data.organization.person01_image);
              setPreviewVisiblePerson1(true);
              setImageLandingPagePerson1(_organizationData.data.organization.person01_image);
              setPreviewImagePerson2("..\\..\\..\\uploads\\c-" + user.organization_id + '\\organization\\' + _organizationData.data.organization.person02_image);
              setPreviewVisiblePerson2(true);
              setImageLandingPagePerson2(_organizationData.data.organization.organization_logo);
              setPreviewImagePerson3("..\\..\\..\\uploads\\c-" + user.organization_id + '\\organization\\' + _organizationData.data.organization.organization_logo);
              setPreviewVisiblePerson3(true);
              setImageLandingPagePerson3(_organizationData.data.organization.organization_logo); // if (_organizationData.data.organization.organization_logo) {
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

            case 19:
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
      lineNumber: 661,
      columnNumber: 5
    }
  }, contextHolder, __jsx("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "w-5/6 lg:w-full mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685,
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
      lineNumber: 686,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inline-flex lg:w-1/6  pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 695,
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
      lineNumber: 696,
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
      lineNumber: 707,
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
      lineNumber: 715,
      columnNumber: 44
    }
  }), __jsx("p", {
    className: "text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 725,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 Logo \u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23")), !previewVisibleLogo && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 731,
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 732,
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 Logo \u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23"))))), __jsx("div", {
    className: "lg:w-5/6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 742,
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
      lineNumber: 743,
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
      lineNumber: 754,
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
      lineNumber: 762,
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
      lineNumber: 773,
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
      lineNumber: 783,
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
      lineNumber: 794,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "lg:inline-flex lg:w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 802,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-full lg:w-1/3 mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 803,
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
      lineNumber: 804,
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
      lineNumber: 817,
      columnNumber: 17
    }
  }, __jsx(Option, {
    value: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 824,
      columnNumber: 19
    }
  }, "\u0E40\u0E25\u0E37\u0E2D\u0E01"), provinces ? provinces.map(function (object) {
    return __jsx(Option, {
      value: object.province_id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 826,
        columnNumber: 28
      }
    }, object.province_name, "  ");
  }) : ""))), __jsx("div", {
    className: "w-full lg:w-1/3 lg:mx-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 831,
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
      lineNumber: 832,
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
      lineNumber: 845,
      columnNumber: 17
    }
  }, __jsx(Option, {
    value: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 853,
      columnNumber: 19
    }
  }, "\u0E40\u0E25\u0E37\u0E2D\u0E01"), districts ? districts.map(function (object) {
    return __jsx(Option, {
      value: object.district_id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 855,
        columnNumber: 28
      }
    }, object.district_name, "  ");
  }) : ""))), __jsx("div", {
    className: "w-full lg:w-1/3 lg:ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 860,
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
      lineNumber: 861,
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
      lineNumber: 874,
      columnNumber: 17
    }
  }, __jsx(Option, {
    value: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 881,
      columnNumber: 19
    }
  }, "\u0E40\u0E25\u0E37\u0E2D\u0E01"), subDistricts ? subDistricts.map(function (object) {
    return __jsx(Option, {
      value: object.sub_district_id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 883,
        columnNumber: 28
      }
    }, object.sub_district_name, "  ");
  }) : "")))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 889,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 890,
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
      lineNumber: 891,
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
      lineNumber: 902,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 911,
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
      lineNumber: 912,
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
      lineNumber: 923,
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 933,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 934,
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
      lineNumber: 935,
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
      lineNumber: 946,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 955,
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
      lineNumber: 956,
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
      lineNumber: 967,
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 977,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 978,
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
      lineNumber: 979,
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
      lineNumber: 990,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 999,
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
      lineNumber: 1000,
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
      lineNumber: 1011,
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
      lineNumber: 1021,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1029,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inline-flex lg:w-1/6 pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1030,
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
      lineNumber: 1031,
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
      lineNumber: 1042,
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
      lineNumber: 1049,
      columnNumber: 47
    }
  }), __jsx("p", {
    className: "text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1058,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 1")), !previewVisiblePerson1 && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1064,
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1065,
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1067,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 1"))))), __jsx("div", {
    className: "lg:w-5/6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1075,
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
      lineNumber: 1076,
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
      lineNumber: 1087,
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
      lineNumber: 1095,
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
      lineNumber: 1106,
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
      lineNumber: 1114,
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
      lineNumber: 1125,
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1135,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inline-flex lg:w-1/6 pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1136,
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
      lineNumber: 1137,
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
      lineNumber: 1148,
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
      lineNumber: 1155,
      columnNumber: 47
    }
  }), __jsx("p", {
    className: "text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1165,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 2")), !previewVisiblePerson2 && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1171,
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1172,
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1174,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 2"))))), __jsx("div", {
    className: "lg:w-5/6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1182,
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
      lineNumber: 1183,
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
      lineNumber: 1194,
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
      lineNumber: 1202,
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
      lineNumber: 1213,
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
      lineNumber: 1221,
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
      lineNumber: 1232,
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1242,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inline-flex lg:w-1/6 pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1243,
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
      lineNumber: 1244,
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
      lineNumber: 1255,
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
      lineNumber: 1262,
      columnNumber: 47
    }
  }), __jsx("p", {
    className: "text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1272,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 3")), !previewVisiblePerson3 && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1278,
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1279,
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1281,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 3"))))), __jsx("div", {
    className: "lg:w-5/6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1289,
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
      lineNumber: 1290,
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
      lineNumber: 1301,
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
      lineNumber: 1309,
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
      lineNumber: 1320,
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
      lineNumber: 1328,
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
      lineNumber: 1339,
      columnNumber: 17
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    className: "flex mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1349,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1350,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "text-center lg:text-right w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1351,
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
      lineNumber: 1352,
      columnNumber: 17
    }
  }, __jsx(Text, {
    className: "text-custom-black ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1367,
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
      lineNumber: 1369,
      columnNumber: 17
    }
  }, __jsx(Text, {
    className: "text-custom-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1382,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9zZXR0aW5nL3Byb2ZpbGUvaW5kZXguanMiXSwibmFtZXMiOlsiSm9kaXRFZGl0b3IiLCJkeW5hbWljIiwic3NyIiwiVGV4dCIsIlR5cG9ncmFwaHkiLCJUaXRsZSIsIk9wdGlvbiIsIlNlbGVjdCIsIlRleHRBcmVhIiwiSW5wdXQiLCJjb25maWciLCJyZXF1aXJlIiwiSG9tZSIsInByb3BzIiwibm90aWZpY2F0aW9uIiwidXNlTm90aWZpY2F0aW9uIiwiYXBpIiwiY29udGV4dEhvbGRlciIsInVzZXIiLCJvcmlnaW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwcm9maWxlSWQiLCJxdWVyeSIsInVzZVN0YXRlIiwicHJvdmluY2VzIiwic2V0UHJvdmluY2VzIiwiZGlzdHJpY3RzIiwic2V0RGlzdHJpY3RzIiwic3ViRGlzdHJpY3RzIiwic2V0U3ViRGlzdHJpY3RzIiwicHJldmlld0ltYWdlTG9nbyIsInNldFByZXZpZXdJbWFnZUxvZ28iLCJwcmV2aWV3SW1hZ2VQZXJzb24xIiwic2V0UHJldmlld0ltYWdlUGVyc29uMSIsInByZXZpZXdJbWFnZVBlcnNvbjIiLCJzZXRQcmV2aWV3SW1hZ2VQZXJzb24yIiwicHJldmlld0ltYWdlUGVyc29uMyIsInNldFByZXZpZXdJbWFnZVBlcnNvbjMiLCJpbWFnZUxhbmRpbmdQYWdlTG9nbyIsInNldEltYWdlTGFuZGluZ1BhZ2VMb2dvIiwiaW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjEiLCJzZXRJbWFnZUxhbmRpbmdQYWdlUGVyc29uMSIsImltYWdlTGFuZGluZ1BhZ2VQZXJzb24yIiwic2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjIiLCJpbWFnZUxhbmRpbmdQYWdlUGVyc29uMyIsInNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24zIiwicHJldmlld1Zpc2libGVMb2dvIiwic2V0UHJldmlld1Zpc2libGVMb2dvIiwicHJldmlld1Zpc2libGVQZXJzb24xIiwic2V0UHJldmlld1Zpc2libGVQZXJzb24xIiwicHJldmlld1Zpc2libGVQZXJzb24yIiwic2V0UHJldmlld1Zpc2libGVQZXJzb24yIiwicHJldmlld1Zpc2libGVQZXJzb24zIiwic2V0UHJldmlld1Zpc2libGVQZXJzb24zIiwibG9nbyIsInNldExvZ28iLCJmaWVsZHMiLCJzZXRGaWVsZHMiLCJvcmdhbml6YXRpb25EYXRhIiwic2V0T3JnYW5pemF0aW9uRGF0YSIsInVzZUVmZmVjdCIsImZldGNoT3JnYW5pemF0aW9uRGF0YSIsImZldGNoUHJvdmluY2VzRGF0YSIsIm9uU3VibWl0SGFuZGxlciIsInZhbHVlIiwiZGF0YSIsIm9yZ2FuaXphdGlvbl9pZCIsIm9yZ2FuaXphdGlvbl9uYW1lIiwib3JnYW5pemF0aW9uX25hbWVfZW5nIiwib3JnYW5pemF0aW9uX2xvZ28iLCJvcmdhbml6YXRpb25fYWRkcmVzcyIsIm9yZ2FuaXphdGlvbl9zdWJfZGlzdHJpY3RfaWQiLCJzdWJEaXN0cmljdFNlbGVjdGVkIiwib3JnYW5pemF0aW9uX2VtYWlsIiwib3JnYW5pemF0aW9uX2VtYWlsX2FsZXJ0Iiwib3JnYW5pemF0aW9uX3Bob25lIiwib3JnYW5pemF0aW9uX2ZheCIsInNvY2lhbF9mYl9wYWdlaWQiLCJyc3MiLCJwZXJzb24wMV9uYW1lIiwicGVyc29uMDFfcG9zaXRpb24iLCJwZXJzb24wMV9pbWFnZSIsInBlcnNvbjAxX3Bob25lIiwicGVyc29uMDJfbmFtZSIsInBlcnNvbjAyX3Bvc2l0aW9uIiwicGVyc29uMDJfaW1hZ2UiLCJwZXJzb24wMl9waG9uZSIsInBlcnNvbjAzX25hbWUiLCJwZXJzb24wM19wb3NpdGlvbiIsInBlcnNvbjAzX2ltYWdlIiwicGVyc29uMDNfcGhvbmUiLCJjb25zb2xlIiwibG9nIiwiYXBpSW5zdGFuY2UiLCJwdXQiLCJzdGF0dXMiLCJvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJTdWNjZXNzIiwib3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbCIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZGVzY3JpcHRpb24iLCJwbGFjZW1lbnQiLCJtZXNzZ2FlIiwiZXJyb3IiLCJEcmFnZ2VyIiwiVXBsb2FkIiwiRm9ybSIsInVzZUZvcm0iLCJmb3JtIiwib25SZXNldCIsImZldGNoRGlzdHJpY3RzRGF0YSIsInN1Yl9kaXN0cmljdHMiLCJwcm92aW5jZV9pZCIsImZldGNoU3ViRGlzdHJpY3REYXRhIiwiZGlzdHJpY3RfaWQiLCJuYW1lIiwic3ViX2Rpc3RyaWN0X2lkIiwiZ2V0IiwiX29yZ2FuaXphdGlvbkRhdGEiLCJvcmdhbml6YXRpb24iLCJ0aHVtYm5haWxfbGluayIsIl9wcm92aW5jZXNEYXRhIiwiX2Rpc3RyaWN0c0RhdGEiLCJzdWJEaXN0cmljdElEIiwiX3N1YkRpc3RyaWN0c0RhdGEiLCJoYW5kbGVQcm92aW5jZXNDaGFuZ2UiLCJoYW5kbGVEaXN0cmljdENoYW5nZSIsImltYWdlVXBsb2FkcHJvcHNMb2dvIiwibXVsdGlwbGUiLCJsaXN0VHlwZSIsIm1heENvdW50IiwiYWN0aW9uIiwicHJldmlldyIsImN1c3RvbVJlcXVlc3QiLCJvcHRpb25zIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmaWxlIiwidHlwZV91c2VyIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsImxpc3QiLCJfbmFtZSIsIm9uU3VjY2VzcyIsImVyciIsIm9uQ2hhbmdlIiwiaW5mbyIsInVybCIsImdldEJhc2U2NCIsIm9yaWdpbkZpbGVPYmoiLCJvblJlbW92ZSIsInJlc2V0SW1hZ2VQcmV2aWV3IiwiaW1hZ2VVcGxvYWRwcm9wc1BlcnNvbjEiLCJpbWFnZVVwbG9hZHByb3BzUGVyc29uMiIsImltYWdlVXBsb2FkcHJvcHNQZXJzb24zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJwYXRoIiwiYnJlYWRjcnVtYk5hbWUiLCJoZWlnaHQiLCJ3aWR0aCIsIm9iamVjdEZpdCIsInJlcXVpcmVkIiwibWluUm93cyIsIm1heFJvd3MiLCJ0ZXh0QWxpZ24iLCJtYXAiLCJvYmplY3QiLCJwcm92aW5jZV9uYW1lIiwiZGlzdHJpY3RfbmFtZSIsInN1Yl9kaXN0cmljdF9uYW1lIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5SaWdodCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUlBLElBQU1BLFdBQVcsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sd0pBQU47QUFBQSxDQUFELEVBQThCO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUFoQixvRUFBZ0I7QUFBQTtBQUFBLGNBQWhCLGFBQWdCO0FBQUE7QUFBQSxDQUE5QixDQUEzQjtNQUFNRixXO0FBQ04sSUFBUUcsSUFBUixHQUF3QkMsK0NBQXhCLENBQVFELElBQVI7QUFBQSxJQUFjRSxLQUFkLEdBQXdCRCwrQ0FBeEIsQ0FBY0MsS0FBZDtBQUNBLElBQVFDLE1BQVIsR0FBbUJDLDJDQUFuQixDQUFRRCxNQUFSO0FBRUEsSUFBUUUsUUFBUixHQUFxQkMsMENBQXJCLENBQVFELFFBQVI7O0FBQ0EsSUFBTUUsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDZDQUFELENBQXRCOzs7QUFFZSxTQUFTQyxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQTs7QUFDbEMsOEJBQTZCQyxpREFBWSxDQUFDQyxlQUFiLEVBQTdCO0FBQUE7QUFBQSxNQUFPQyxHQUFQO0FBQUEsTUFBWUMsYUFBWjs7QUFDQSxNQUFRQyxJQUFSLEdBQXlCTCxLQUF6QixDQUFRSyxJQUFSO0FBQUEsTUFBY0MsTUFBZCxHQUF5Qk4sS0FBekIsQ0FBY00sTUFBZDtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFR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TEMsV0FBSyxFQUFFLEdBSkY7QUFLTGEsa0JBQVksRUFBRSxnQkFMVDtBQU1MQyxpQkFBVyxFQUFFLEtBTlI7QUFPTEMsV0FBSyxFQUFFO0FBUEYsS0FIVCxDQVlFO0FBWkY7QUFhRSxhQUFTLEVBQUMsNElBYlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWVFLE1BQUMsSUFBRDtBQUFNLGFBQVMsRUFBQyxvQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FmRixDQURGLEVBa0JFLE1BQUMsMkNBQUQsQ0FDRTtBQURGO0FBRUUsU0FBSyxFQUFFO0FBQ0xKLHFCQUFlLEVBQUUsU0FEWjtBQUVMQyxpQkFBVyxFQUFFLFNBRlI7QUFHTGIsWUFBTSxFQUFFLEVBSEg7QUFJTEMsV0FBSyxFQUFFLEdBSkY7QUFLTGEsa0JBQVksRUFBRSxnQkFMVDtBQU1MRSxXQUFLLEVBQUU7QUFORixLQUZUO0FBVUUsWUFBUSxFQUFDLFFBVlg7QUFXRSxhQUFTLEVBQUMsNElBWFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWFFLE1BQUMsSUFBRDtBQUFNLGFBQVMsRUFBQyxvQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FiRixDQWxCRixDQURGLENBREYsQ0F2cEJGLENBREYsQ0F4QkYsQ0FERjtBQTJ0QkQ7QUFDRDs7R0F4MUN3QjdLLEk7VUFDT0UsaURBQVksQ0FBQ0MsZSxFQUUzQk0scUQsRUFrRkFzRix5Q0FBSSxDQUFDQyxPOzs7TUFyRkVoRyxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pblxcc2V0dGluZ1xccHJvZmlsZS5qcy5iMTczZTI1OGI1Mjg0MGEwZWMzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5ib3hPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHtcclxuICBCdXR0b24sIEZvcm0sIEltYWdlLCBJbnB1dCwgbm90aWZpY2F0aW9uLCBTZWxlY3QsIFR5cG9ncmFwaHksIFVwbG9hZFxyXG59IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbi8vIGltcG9ydCBVc2VyTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9Vc2VyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbi8qIGNvbXBvbmVudHMgKi9cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRBZG1pbic7XHJcbi8qIHV0aWxzICovXHJcbmltcG9ydCB7XHJcbiAgYWJzb2x1dGVVcmwsIGFwaUluc3RhbmNlXHJcbn0gZnJvbSAnLi4vLi4vLi4vLi4vbWlkZGxld2FyZS91dGlscyc7XHJcblxyXG5jb25zdCBKb2RpdEVkaXRvciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiam9kaXQtcmVhY3RcIiksIHsgc3NyOiBmYWxzZSB9KTtcclxuY29uc3QgeyBUZXh0LCBUaXRsZSB9ID0gVHlwb2dyYXBoeTtcclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi8uLi9jb25maWcnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuICBjb25zdCBbYXBpLCBjb250ZXh0SG9sZGVyXSA9IG5vdGlmaWNhdGlvbi51c2VOb3RpZmljYXRpb24oKTtcclxuICBjb25zdCB7IHVzZXIsIG9yaWdpbiB9ID0gcHJvcHM7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBwcm9maWxlSWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBbcHJvdmluY2VzLCBzZXRQcm92aW5jZXNdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbZGlzdHJpY3RzLCBzZXREaXN0cmljdHNdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbc3ViRGlzdHJpY3RzLCBzZXRTdWJEaXN0cmljdHNdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbcHJldmlld0ltYWdlTG9nbywgc2V0UHJldmlld0ltYWdlTG9nb10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtwcmV2aWV3SW1hZ2VQZXJzb24xLCBzZXRQcmV2aWV3SW1hZ2VQZXJzb24xXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3ByZXZpZXdJbWFnZVBlcnNvbjIsIHNldFByZXZpZXdJbWFnZVBlcnNvbjJdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbcHJldmlld0ltYWdlUGVyc29uMywgc2V0UHJldmlld0ltYWdlUGVyc29uM10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtpbWFnZUxhbmRpbmdQYWdlTG9nbywgc2V0SW1hZ2VMYW5kaW5nUGFnZUxvZ29dID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbaW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjEsIHNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24xXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2ltYWdlTGFuZGluZ1BhZ2VQZXJzb24yLCBzZXRJbWFnZUxhbmRpbmdQYWdlUGVyc29uMl0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtpbWFnZUxhbmRpbmdQYWdlUGVyc29uMywgc2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjNdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbcHJldmlld1Zpc2libGVMb2dvLCBzZXRQcmV2aWV3VmlzaWJsZUxvZ29dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3ByZXZpZXdWaXNpYmxlUGVyc29uMSwgc2V0UHJldmlld1Zpc2libGVQZXJzb24xXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtwcmV2aWV3VmlzaWJsZVBlcnNvbjIsIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbcHJldmlld1Zpc2libGVQZXJzb24zLCBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2xvZ28sIHNldExvZ29dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2ZpZWxkcywgc2V0RmllbGRzXSA9IHVzZVN0YXRlKFtcclxuICBdKTtcclxuICBjb25zdCBbb3JnYW5pemF0aW9uRGF0YSwgc2V0T3JnYW5pemF0aW9uRGF0YV0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hPcmdhbml6YXRpb25EYXRhKCk7XHJcbiAgICBmZXRjaFByb3ZpbmNlc0RhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0SGFuZGxlcih2YWx1ZSkge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgb3JnYW5pemF0aW9uX2lkOiB1c2VyLm9yZ2FuaXphdGlvbl9pZCxcclxuICAgICAgb3JnYW5pemF0aW9uX25hbWU6IHZhbHVlLm9yZ2FuaXphdGlvbl9uYW1lLFxyXG4gICAgICBvcmdhbml6YXRpb25fbmFtZV9lbmc6IHZhbHVlLm9yZ2FuaXphdGlvbl9uYW1lX2VuZyxcclxuICAgICAgb3JnYW5pemF0aW9uX2xvZ286IGltYWdlTGFuZGluZ1BhZ2VMb2dvLFxyXG4gICAgICBvcmdhbml6YXRpb25fYWRkcmVzczogdmFsdWUub3JnYW5pemF0aW9uX2FkZHJlc3MsXHJcbiAgICAgIG9yZ2FuaXphdGlvbl9zdWJfZGlzdHJpY3RfaWQ6IHZhbHVlLnN1YkRpc3RyaWN0U2VsZWN0ZWQsXHJcbiAgICAgIG9yZ2FuaXphdGlvbl9lbWFpbDogdmFsdWUub3JnYW5pemF0aW9uX2VtYWlsLFxyXG4gICAgICBvcmdhbml6YXRpb25fZW1haWxfYWxlcnQ6IHZhbHVlLm9yZ2FuaXphdGlvbl9lbWFpbF9hbGVydCxcclxuICAgICAgb3JnYW5pemF0aW9uX3Bob25lOiB2YWx1ZS5vcmdhbml6YXRpb25fcGhvbmUsXHJcbiAgICAgIG9yZ2FuaXphdGlvbl9mYXg6IHZhbHVlLm9yZ2FuaXphdGlvbl9mYXgsXHJcbiAgICAgIHNvY2lhbF9mYl9wYWdlaWQ6IHZhbHVlLnNvY2lhbF9mYl9wYWdlaWQsXHJcbiAgICAgIHJzczogdmFsdWUucnNzLFxyXG4gICAgICBwZXJzb24wMV9uYW1lOiB2YWx1ZS5wZXJzb24wMV9uYW1lLFxyXG4gICAgICBwZXJzb24wMV9wb3NpdGlvbjogdmFsdWUucGVyc29uMDFfcG9zaXRpb24sXHJcbiAgICAgIHBlcnNvbjAxX2ltYWdlOiBpbWFnZUxhbmRpbmdQYWdlUGVyc29uMSxcclxuICAgICAgcGVyc29uMDFfcGhvbmU6IHZhbHVlLnBlcnNvbjAxX3Bob25lLFxyXG4gICAgICBwZXJzb24wMl9uYW1lOiB2YWx1ZS5wZXJzb24wMl9uYW1lLFxyXG4gICAgICBwZXJzb24wMl9wb3NpdGlvbjogdmFsdWUucGVyc29uMDJfcG9zaXRpb24sXHJcbiAgICAgIHBlcnNvbjAyX2ltYWdlOiBpbWFnZUxhbmRpbmdQYWdlUGVyc29uMixcclxuICAgICAgcGVyc29uMDJfcGhvbmU6IHZhbHVlLnBlcnNvbjAyX3Bob25lLFxyXG4gICAgICBwZXJzb24wM19uYW1lOiB2YWx1ZS5wZXJzb24wM19uYW1lLFxyXG4gICAgICBwZXJzb24wM19wb3NpdGlvbjogdmFsdWUucGVyc29uMDNfcG9zaXRpb24sXHJcbiAgICAgIHBlcnNvbjAzX2ltYWdlOiBpbWFnZUxhbmRpbmdQYWdlUGVyc29uMyxcclxuICAgICAgcGVyc29uMDNfcGhvbmU6IHZhbHVlLnBlcnNvbjAzX3Bob25lLFxyXG4gICAgfTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBjb25zdCBvcmdhbml6YXRpb25EYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5wdXQoJy9wcm9maWxlJywgZGF0YSk7XHJcbiAgICBpZiAob3JnYW5pemF0aW9uRGF0YS5kYXRhLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyU3VjY2VzcygpO1xyXG4gICAgICBmZXRjaE9yZ2FuaXphdGlvbkRhdGEoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9wZW5Ob3RpZmljYXRpb25SZWdpc3RlckZhaWwob3JnYW5pemF0aW9uRGF0YS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyU3VjY2VzcyA9ICgpID0+IHtcclxuICAgIG5vdGlmaWNhdGlvbi5zdWNjZXNzKHtcclxuICAgICAgbWVzc2FnZTogYOC4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iGAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAn4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIJyxcclxuICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbCA9IG1lc3NnYWUgPT4ge1xyXG4gICAgbm90aWZpY2F0aW9uLmVycm9yKHtcclxuICAgICAgbWVzc2FnZTogYOC4nuC4muC4m+C4seC4jeC4q+C4suC4o+C4sOC4q+C4p+C5iOC4suC4h+C4geC4suC4o+C4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4pWAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBtZXNzZ2FlLFxyXG4gICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB7IERyYWdnZXIgfSA9IFVwbG9hZDtcclxuXHJcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcblxyXG4gIGNvbnN0IG9uUmVzZXQgPSAoKSA9PiB7XHJcbiAgICBmZXRjaERpc3RyaWN0c0RhdGEob3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzID8gb3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzLnByb3ZpbmNlcy5wcm92aW5jZV9pZCA6IDApXHJcbiAgICBmZXRjaFN1YkRpc3RyaWN0RGF0YShvcmdhbml6YXRpb25EYXRhLnN1Yl9kaXN0cmljdHMgPyBvcmdhbml6YXRpb25EYXRhLnN1Yl9kaXN0cmljdHMuZGlzdHJpY3RzLmRpc3RyaWN0X2lkIDogMClcclxuICAgIHNldEZpZWxkcyhbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9sb2dvJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEub3JnYW5pemF0aW9uX2xvZ28sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9uYW1lJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEub3JnYW5pemF0aW9uX25hbWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9uYW1lX2VuZyddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9uYW1lX2VuZyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX3Bob25lJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEub3JnYW5pemF0aW9uX3Bob25lLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fZW1haWwnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fZW1haWwsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9mYXgnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fZmF4XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9hZGRyZXNzJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEub3JnYW5pemF0aW9uX2FkZHJlc3MsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3Byb3ZpbmNlc1NlbGVjdGVkJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEuc3ViX2Rpc3RyaWN0cyA/IG9yZ2FuaXphdGlvbkRhdGEuc3ViX2Rpc3RyaWN0cy5wcm92aW5jZXMucHJvdmluY2VfaWQgOiBcIjBcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydkaXN0cmljdFNlbGVjdGVkJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEuc3ViX2Rpc3RyaWN0cyA/IG9yZ2FuaXphdGlvbkRhdGEuc3ViX2Rpc3RyaWN0cy5kaXN0cmljdHMuZGlzdHJpY3RfaWQgOiBcIjBcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydzdWJEaXN0cmljdFNlbGVjdGVkJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEuc3ViX2Rpc3RyaWN0cyA/IG9yZ2FuaXphdGlvbkRhdGEuc3ViX2Rpc3RyaWN0cy5zdWJfZGlzdHJpY3RfaWQgOiBcIjBcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydzb2NpYWxfZmJfcGFnZWlkJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEuc29jaWFsX2ZiX3BhZ2VpZFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fZW1haWxfYWxlcnQnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fZW1haWxfYWxlcnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncnNzJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEucnNzXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAxX25hbWUnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5wZXJzb24wMV9uYW1lLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wMV9wb3NpdGlvbiddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAxX3Bvc2l0aW9uLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wMV9waG9uZSddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAxX3Bob25lLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wMl9uYW1lJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDJfbmFtZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDJfcG9zaXRpb24nXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5wZXJzb24wMl9wb3NpdGlvbixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDJfcGhvbmUnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5wZXJzb24wMl9waG9uZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDNfbmFtZSddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAzX25hbWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAzX3Bvc2l0aW9uJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDNfcG9zaXRpb24sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAzX3Bob25lJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDNfcGhvbmUsXHJcbiAgICAgIH1cclxuICAgIF0pO1xyXG4gICAgc2V0UHJldmlld0ltYWdlTG9nbygnLi5cXFxcLi5cXFxcLi5cXFxcdXBsb2Fkc1xcXFxjLScgKyB1c2VyLm9yZ2FuaXphdGlvbl9pZCArICdcXFxcb3JnYW5pemF0aW9uXFxcXCcgKyBvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9sb2dvKTtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlTG9nbyh0cnVlKTtcclxuICAgIHNldEltYWdlTGFuZGluZ1BhZ2VMb2dvKG9yZ2FuaXphdGlvbkRhdGEub3JnYW5pemF0aW9uX2xvZ28pO1xyXG5cclxuICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjEoJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICsgdXNlci5vcmdhbml6YXRpb25faWQgKyAnXFxcXG9yZ2FuaXphdGlvblxcXFwnICsgb3JnYW5pemF0aW9uRGF0YS5wZXJzb24wMV9pbWFnZSk7XHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjEodHJ1ZSk7XHJcbiAgICBzZXRJbWFnZUxhbmRpbmdQYWdlUGVyc29uMShvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAxX2ltYWdlKTtcclxuXHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24yKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArIHVzZXIub3JnYW5pemF0aW9uX2lkICsgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArIG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDJfaW1hZ2UpO1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24yKHRydWUpO1xyXG4gICAgc2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjIob3JnYW5pemF0aW9uRGF0YS5wZXJzb24wMl9pbWFnZSk7XHJcblxyXG4gICAgc2V0UHJldmlld0ltYWdlUGVyc29uMygnLi5cXFxcLi5cXFxcLi5cXFxcdXBsb2Fkc1xcXFxjLScgKyB1c2VyLm9yZ2FuaXphdGlvbl9pZCArICdcXFxcb3JnYW5pemF0aW9uXFxcXCcgKyBvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAzX2ltYWdlKTtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMyh0cnVlKTtcclxuICAgIHNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24zKG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDNfaW1hZ2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoT3JnYW5pemF0aW9uRGF0YSA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBfb3JnYW5pemF0aW9uRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAnb3JnYW5pemF0aW9uLycgKyAodXNlciA/IHVzZXIub3JnYW5pemF0aW9uX2lkIDogMClcclxuICAgICk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24pXHJcbiAgICBzZXRPcmdhbml6YXRpb25EYXRhKF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uKVxyXG4gICAgZmV0Y2hEaXN0cmljdHNEYXRhKF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnN1Yl9kaXN0cmljdHMgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5zdWJfZGlzdHJpY3RzLnByb3ZpbmNlcy5wcm92aW5jZV9pZCA6IDApXHJcbiAgICBmZXRjaFN1YkRpc3RyaWN0RGF0YShfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5zdWJfZGlzdHJpY3RzID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24uc3ViX2Rpc3RyaWN0cy5kaXN0cmljdHMuZGlzdHJpY3RfaWQgOiAwKVxyXG5cclxuICAgIHNldFByZXZpZXdJbWFnZUxvZ28oJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICsgdXNlci5vcmdhbml6YXRpb25faWQgKyAnXFxcXG9yZ2FuaXphdGlvblxcXFwnICsgX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2xvZ28pO1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVMb2dvKHRydWUpO1xyXG4gICAgc2V0SW1hZ2VMYW5kaW5nUGFnZUxvZ28oX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2xvZ28pO1xyXG5cclxuICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjEoJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICsgdXNlci5vcmdhbml6YXRpb25faWQgKyAnXFxcXG9yZ2FuaXphdGlvblxcXFwnICsgX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDFfaW1hZ2UpO1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24xKHRydWUpO1xyXG4gICAgc2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjEoX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDFfaW1hZ2UpO1xyXG5cclxuICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjIoJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICsgdXNlci5vcmdhbml6YXRpb25faWQgKyAnXFxcXG9yZ2FuaXphdGlvblxcXFwnICsgX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDJfaW1hZ2UpO1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24yKHRydWUpO1xyXG4gICAgc2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjIoX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2xvZ28pO1xyXG5cclxuICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjMoJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICsgdXNlci5vcmdhbml6YXRpb25faWQgKyAnXFxcXG9yZ2FuaXphdGlvblxcXFwnICsgX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2xvZ28pO1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24zKHRydWUpO1xyXG4gICAgc2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjMoX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2xvZ28pO1xyXG5cclxuICAgIC8vIGlmIChfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fbG9nbykge1xyXG4gICAgLy8gICBzZXRQcmV2aWV3SW1hZ2VMb2dvKFxyXG4gICAgLy8gICAgICcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArXHJcbiAgICAvLyAgICAgdXNlci5vcmdhbml6YXRpb25faWQgK1xyXG4gICAgLy8gICAgICdcXFxcb3JnYW5pemF0aW9uXFxcXCcgK1xyXG4gICAgLy8gICAgIF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9sb2dvLFxyXG4gICAgLy8gICApXHJcbiAgICAvLyAgIHNldFByZXZpZXdWaXNpYmxlTG9nbyh0cnVlKVxyXG4gICAgLy8gfVxyXG4gICAgLy8gaWYgKF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAxX2ltYWdlKSB7XHJcbiAgICAvLyAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjEoJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICtcclxuICAgIC8vICAgICB1c2VyLm9yZ2FuaXphdGlvbl9pZCArXHJcbiAgICAvLyAgICAgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArXHJcbiAgICAvLyAgICAgX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDFfaW1hZ2UpXHJcbiAgICAvLyAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMSh0cnVlKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZiAoX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDJfaW1hZ2UpIHtcclxuICAgIC8vICAgc2V0UHJldmlld0ltYWdlUGVyc29uMignLi5cXFxcLi5cXFxcLi5cXFxcdXBsb2Fkc1xcXFxjLScgK1xyXG4gICAgLy8gICAgIHVzZXIub3JnYW5pemF0aW9uX2lkICtcclxuICAgIC8vICAgICAnXFxcXG9yZ2FuaXphdGlvblxcXFwnICtcclxuICAgIC8vICAgICBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMl9pbWFnZSlcclxuICAgIC8vICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24yKHRydWUpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGlmIChfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wM19pbWFnZSkge1xyXG4gICAgLy8gICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24zKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArXHJcbiAgICAvLyAgICAgdXNlci5vcmdhbml6YXRpb25faWQgK1xyXG4gICAgLy8gICAgICdcXFxcb3JnYW5pemF0aW9uXFxcXCcgK1xyXG4gICAgLy8gICAgIF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAzX2ltYWdlKVxyXG4gICAgLy8gICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjModHJ1ZSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gc2V0UHJldmlld0ltYWdlTG9nbygnLi5cXFxcLi5cXFxcLi5cXFxcdXBsb2Fkc1xcXFxjLScgKyB1c2VyLm9yZ2FuaXphdGlvbl9pZCArICdcXFxcb3JnYW5pemF0aW9uXFxcXCcgKyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fbG9nbyk7XHJcbiAgICAvLyBzZXRQcmV2aWV3VmlzaWJsZUxvZ28odHJ1ZSk7XHJcbiAgICAvLyBzZXRJbWFnZUxhbmRpbmdQYWdlTG9nbyhfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fbG9nbyk7XHJcbiAgICBzZXRGaWVsZHMoW1xyXG4gICAgICAvLyB7XHJcbiAgICAgIC8vICAgbmFtZTogWydvcmdhbml6YXRpb25fbG9nbyddLFxyXG4gICAgICAvLyAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fbG9nb1xyXG4gICAgICAvLyB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fbmFtZSddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fbmFtZSA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9uYW1lIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fbmFtZV9lbmcnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX25hbWVfZW5nID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX25hbWVfZW5nIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fcGhvbmUnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX3Bob25lID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX3Bob25lIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fZW1haWwnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2VtYWlsID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2VtYWlsIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwcm92aW5jZXNTZWxlY3RlZCddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5zdWJfZGlzdHJpY3RzID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24uc3ViX2Rpc3RyaWN0cy5wcm92aW5jZXMucHJvdmluY2VfaWQgOiBcIjBcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydkaXN0cmljdFNlbGVjdGVkJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnN1Yl9kaXN0cmljdHMgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5zdWJfZGlzdHJpY3RzLmRpc3RyaWN0cy5kaXN0cmljdF9pZCA6IFwiMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3N1YkRpc3RyaWN0U2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24uc3ViX2Rpc3RyaWN0cyA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnN1Yl9kaXN0cmljdHMuc3ViX2Rpc3RyaWN0X2lkIDogXCIwXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX2ZheCddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fZmF4ID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2ZheCA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsndGh1bWJuYWlsX2xpbmsnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24udGh1bWJuYWlsX2xpbmsgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi50aHVtYm5haWxfbGluayA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX2FkZHJlc3MnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2FkZHJlc3MgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fYWRkcmVzcyA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX2VtYWlsX2FsZXJ0J10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9lbWFpbF9hbGVydCA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9lbWFpbF9hbGVydCA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnc29jaWFsX2ZiX3BhZ2VpZCddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5zb2NpYWxfZmJfcGFnZWlkID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24uc29jaWFsX2ZiX3BhZ2VpZCA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncnNzJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnJzcyA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnJzcyA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDFfbmFtZSddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMV9uYW1lID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDFfbmFtZSA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDFfcG9zaXRpb24nXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDFfcG9zaXRpb24gPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMV9wb3NpdGlvbiA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDFfcGhvbmUnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDFfcGhvbmUgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMV9waG9uZSA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDJfbmFtZSddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMl9uYW1lID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDJfbmFtZSA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDJfcG9zaXRpb24nXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDJfcG9zaXRpb24gPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMl9wb3NpdGlvbiA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDJfcGhvbmUnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDJfcGhvbmUgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMl9waG9uZSA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDNfbmFtZSddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wM19uYW1lID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDNfbmFtZSA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDNfcG9zaXRpb24nXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDNfcG9zaXRpb24gPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wM19wb3NpdGlvbiA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDNfcGhvbmUnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDNfcGhvbmUgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wM19waG9uZSA6IFwiXCJcclxuICAgICAgfSxcclxuXHJcblxyXG4gICAgXSlcclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaFByb3ZpbmNlc0RhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBfcHJvdmluY2VzRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAncHJvdmluY2UnXHJcbiAgICApO1xyXG5cclxuICAgIHNldFByb3ZpbmNlcyhfcHJvdmluY2VzRGF0YS5kYXRhLmRhdGEpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhfcHJvdmluY2VzRGF0YS5kYXRhLmRhdGEpXHJcbiAgfVxyXG5cclxuICBjb25zdCBmZXRjaERpc3RyaWN0c0RhdGEgPSBhc3luYyAocHJvdmluY2VfaWQpID0+IHtcclxuICAgIGNvbnN0IF9kaXN0cmljdHNEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICdkaXN0cmljdC8nICsgcHJvdmluY2VfaWRcclxuICAgICk7XHJcblxyXG4gICAgc2V0RGlzdHJpY3RzKF9kaXN0cmljdHNEYXRhLmRhdGEuZGF0YSlcclxuICAgIC8vIGNvbnNvbGUubG9nKF9kaXN0cmljdHNEYXRhLmRhdGEuZGF0YSlcclxuICB9XHJcblxyXG5cclxuICBjb25zdCBmZXRjaFN1YkRpc3RyaWN0RGF0YSA9IGFzeW5jIChzdWJEaXN0cmljdElEKSA9PiB7XHJcbiAgICBjb25zdCBfc3ViRGlzdHJpY3RzRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAnc3ViLWRpc3RyaWN0LycgKyBzdWJEaXN0cmljdElEXHJcbiAgICApO1xyXG5cclxuICAgIHNldFN1YkRpc3RyaWN0cyhfc3ViRGlzdHJpY3RzRGF0YS5kYXRhLmRhdGEpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhfc3ViRGlzdHJpY3RzRGF0YS5kYXRhLmRhdGEpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVQcm92aW5jZXNDaGFuZ2UgPSBhc3luYyAodmFsdWUpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIHNldEZpZWxkcyhbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3Byb3ZpbmNlc1NlbGVjdGVkJ10sXHJcbiAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2Rpc3RyaWN0U2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogXCIwXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnc3ViRGlzdHJpY3RTZWxlY3RlZCddLFxyXG4gICAgICAgIHZhbHVlOiBcIjBcIlxyXG4gICAgICB9LFxyXG5cclxuICAgIF0pXHJcbiAgICBmZXRjaERpc3RyaWN0c0RhdGEodmFsdWUpO1xyXG4gICAgc2V0U3ViRGlzdHJpY3RzKFtdKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRGlzdHJpY3RDaGFuZ2UgPSBhc3luYyAodmFsdWUpID0+IHtcclxuICAgIHNldEZpZWxkcyhbXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydkaXN0cmljdFNlbGVjdGVkJ10sXHJcbiAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3N1YkRpc3RyaWN0U2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogXCIwXCJcclxuICAgICAgfSxcclxuXHJcbiAgICBdKVxyXG4gICAgZmV0Y2hTdWJEaXN0cmljdERhdGEodmFsdWUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBpbWFnZVVwbG9hZHByb3BzTG9nbyA9IHtcclxuICAgIG5hbWU6ICdmaWxlJyxcclxuICAgIG11bHRpcGxlOiBmYWxzZSxcclxuICAgIGxpc3RUeXBlOiAndGV4dCcsXHJcbiAgICBtYXhDb3VudDogMSxcclxuICAgIGFjdGlvbjogXCIvYXBpL3VwbG9hZC9vcmdhbml6YXRpb25cIixcclxuICAgIHByZXZpZXc6IGZhbHNlLFxyXG4gICAgY3VzdG9tUmVxdWVzdDogKG9wdGlvbnMpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgb3B0aW9ucy5maWxlKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnaWQnLCB1c2VyLnR5cGVfdXNlciA9PSAxID8gXCJhZG1pblwiIDogdXNlci5vcmdhbml6YXRpb25faWQpXHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICBcImhlYWRlcnNcIjoge1xyXG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogJ211bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PS0tLS1XZWJLaXRGb3JtQm91bmRhcnlxVHFKSXh2a1dGWXF2UDVzJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBheGlvcy5wb3N0KG9wdGlvbnMuYWN0aW9uLCBkYXRhLCBjb25maWcpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldEltYWdlTGFuZGluZ1BhZ2VMb2dvKHJlcy5kYXRhLmRhdGEubGlzdFswXS5fbmFtZSlcclxuICAgICAgICBvcHRpb25zLm9uU3VjY2VzcyhyZXMuZGF0YSwgb3B0aW9ucy5maWxlKVxyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICB9KVxyXG5cclxuICAgIH0sXHJcbiAgICBhc3luYyBvbkNoYW5nZShpbmZvKSB7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBpbmZvLmZpbGVcclxuICAgICAgc3dpdGNoIChpbmZvLmZpbGUuc3RhdHVzKSB7XHJcbiAgICAgICAgY2FzZSBcImRvbmVcIjpcclxuICAgICAgICAgIGlmICghaW5mby5maWxlLnVybCAmJiAhaW5mby5maWxlLnByZXZpZXcpIHtcclxuICAgICAgICAgICAgaW5mby5maWxlLnByZXZpZXcgPSBhd2FpdCBnZXRCYXNlNjQoaW5mby5maWxlLm9yaWdpbkZpbGVPYmopO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0UHJldmlld0ltYWdlTG9nbyhpbmZvLmZpbGUudXJsIHx8IGluZm8uZmlsZS5wcmV2aWV3KVxyXG4gICAgICAgICAgc2V0UHJldmlld1Zpc2libGVMb2dvKHRydWUpXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAvLyBlcnJvciBvciByZW1vdmVkXHJcbiAgICAgICAgLy8gcmVzZXRJbWFnZVByZXZpZXcoKVxyXG4gICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIG9uUmVtb3ZlKGluZm8pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJvblJlbW92ZVwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhpbmZvKVxyXG4gICAgICByZXNldEltYWdlUHJldmlldygpXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaW1hZ2VVcGxvYWRwcm9wc1BlcnNvbjEgPSB7XHJcbiAgICBuYW1lOiAnZmlsZScsXHJcbiAgICBtdWx0aXBsZTogZmFsc2UsXHJcbiAgICBsaXN0VHlwZTogJ3RleHQnLFxyXG4gICAgbWF4Q291bnQ6IDEsXHJcbiAgICBhY3Rpb246IFwiL2FwaS91cGxvYWQvb3JnYW5pemF0aW9uXCIsXHJcbiAgICBwcmV2aWV3OiBmYWxzZSxcclxuICAgIGN1c3RvbVJlcXVlc3Q6IChvcHRpb25zKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgZGF0YS5hcHBlbmQoJ2lkJywgdXNlci50eXBlX3VzZXIgPT0gMSA/IFwiYWRtaW5cIiA6IHVzZXIub3JnYW5pemF0aW9uX2lkKVxyXG4gICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgXCJoZWFkZXJzXCI6IHtcclxuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6ICdtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0tLS0tV2ViS2l0Rm9ybUJvdW5kYXJ5cVRxSkl4dmtXRllxdlA1cydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYXhpb3MucG9zdChvcHRpb25zLmFjdGlvbiwgZGF0YSwgY29uZmlnKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRJbWFnZUxhbmRpbmdQYWdlUGVyc29uMShyZXMuZGF0YS5kYXRhLmxpc3RbMF0uX25hbWUpXHJcbiAgICAgICAgb3B0aW9ucy5vblN1Y2Nlc3MocmVzLmRhdGEsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgfSlcclxuXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgb25DaGFuZ2UoaW5mbykge1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gaW5mby5maWxlXHJcbiAgICAgIHN3aXRjaCAoaW5mby5maWxlLnN0YXR1cykge1xyXG4gICAgICAgIGNhc2UgXCJkb25lXCI6XHJcbiAgICAgICAgICBpZiAoIWluZm8uZmlsZS51cmwgJiYgIWluZm8uZmlsZS5wcmV2aWV3KSB7XHJcbiAgICAgICAgICAgIGluZm8uZmlsZS5wcmV2aWV3ID0gYXdhaXQgZ2V0QmFzZTY0KGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjEoaW5mby5maWxlLnVybCB8fCBpbmZvLmZpbGUucHJldmlldylcclxuICAgICAgICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMSh0cnVlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIC8vIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBvblJlbW92ZShpbmZvKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwib25SZW1vdmVcIilcclxuICAgICAgY29uc29sZS5sb2coaW5mbylcclxuICAgICAgcmVzZXRJbWFnZVByZXZpZXcoKVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGltYWdlVXBsb2FkcHJvcHNQZXJzb24yID0ge1xyXG4gICAgbmFtZTogJ2ZpbGUnLFxyXG4gICAgbXVsdGlwbGU6IGZhbHNlLFxyXG4gICAgbGlzdFR5cGU6ICd0ZXh0JyxcclxuICAgIG1heENvdW50OiAxLFxyXG4gICAgYWN0aW9uOiBcIi9hcGkvdXBsb2FkL29yZ2FuaXphdGlvblwiLFxyXG4gICAgcHJldmlldzogZmFsc2UsXHJcbiAgICBjdXN0b21SZXF1ZXN0OiAob3B0aW9ucykgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdpZCcsIHVzZXIudHlwZV91c2VyID09IDEgPyBcImFkbWluXCIgOiB1c2VyLm9yZ2FuaXphdGlvbl9pZClcclxuICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgIFwiaGVhZGVyc1wiOiB7XHJcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9LS0tLVdlYktpdEZvcm1Cb3VuZGFyeXFUcUpJeHZrV0ZZcXZQNXMnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGF4aW9zLnBvc3Qob3B0aW9ucy5hY3Rpb24sIGRhdGEsIGNvbmZpZykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjIocmVzLmRhdGEuZGF0YS5saXN0WzBdLl9uYW1lKVxyXG4gICAgICAgIG9wdGlvbnMub25TdWNjZXNzKHJlcy5kYXRhLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfSxcclxuICAgIGFzeW5jIG9uQ2hhbmdlKGluZm8pIHtcclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGluZm8uZmlsZVxyXG4gICAgICBzd2l0Y2ggKGluZm8uZmlsZS5zdGF0dXMpIHtcclxuICAgICAgICBjYXNlIFwiZG9uZVwiOlxyXG4gICAgICAgICAgaWYgKCFpbmZvLmZpbGUudXJsICYmICFpbmZvLmZpbGUucHJldmlldykge1xyXG4gICAgICAgICAgICBpbmZvLmZpbGUucHJldmlldyA9IGF3YWl0IGdldEJhc2U2NChpbmZvLmZpbGUub3JpZ2luRmlsZU9iaik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24yKGluZm8uZmlsZS51cmwgfHwgaW5mby5maWxlLnByZXZpZXcpXHJcbiAgICAgICAgICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjIodHJ1ZSlcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIC8vIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBvblJlbW92ZShpbmZvKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwib25SZW1vdmVcIilcclxuICAgICAgY29uc29sZS5sb2coaW5mbylcclxuICAgICAgcmVzZXRJbWFnZVByZXZpZXcoKVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGltYWdlVXBsb2FkcHJvcHNQZXJzb24zID0ge1xyXG4gICAgbmFtZTogJ2ZpbGUnLFxyXG4gICAgbXVsdGlwbGU6IGZhbHNlLFxyXG4gICAgbGlzdFR5cGU6ICd0ZXh0JyxcclxuICAgIG1heENvdW50OiAxLFxyXG4gICAgYWN0aW9uOiBcIi9hcGkvdXBsb2FkL29yZ2FuaXphdGlvblwiLFxyXG4gICAgcHJldmlldzogZmFsc2UsXHJcbiAgICBjdXN0b21SZXF1ZXN0OiAob3B0aW9ucykgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdpZCcsIHVzZXIudHlwZV91c2VyID09IDEgPyBcImFkbWluXCIgOiB1c2VyLm9yZ2FuaXphdGlvbl9pZClcclxuICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgIFwiaGVhZGVyc1wiOiB7XHJcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9LS0tLVdlYktpdEZvcm1Cb3VuZGFyeXFUcUpJeHZrV0ZZcXZQNXMnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGF4aW9zLnBvc3Qob3B0aW9ucy5hY3Rpb24sIGRhdGEsIGNvbmZpZykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjMocmVzLmRhdGEuZGF0YS5saXN0WzBdLl9uYW1lKVxyXG4gICAgICAgIG9wdGlvbnMub25TdWNjZXNzKHJlcy5kYXRhLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfSxcclxuICAgIGFzeW5jIG9uQ2hhbmdlKGluZm8pIHtcclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGluZm8uZmlsZVxyXG4gICAgICBzd2l0Y2ggKGluZm8uZmlsZS5zdGF0dXMpIHtcclxuICAgICAgICBjYXNlIFwiZG9uZVwiOlxyXG4gICAgICAgICAgaWYgKCFpbmZvLmZpbGUudXJsICYmICFpbmZvLmZpbGUucHJldmlldykge1xyXG4gICAgICAgICAgICBpbmZvLmZpbGUucHJldmlldyA9IGF3YWl0IGdldEJhc2U2NChpbmZvLmZpbGUub3JpZ2luRmlsZU9iaik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24zKGluZm8uZmlsZS51cmwgfHwgaW5mby5maWxlLnByZXZpZXcpXHJcbiAgICAgICAgICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjModHJ1ZSlcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIC8vIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBvblJlbW92ZShpbmZvKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwib25SZW1vdmVcIilcclxuICAgICAgY29uc29sZS5sb2coaW5mbylcclxuICAgICAgcmVzZXRJbWFnZVByZXZpZXcoKVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc2V0SW1hZ2VQcmV2aWV3ID0gKCkgPT4ge1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVMb2dvKGZhbHNlKTtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMShmYWxzZSk7XHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjIoZmFsc2UpO1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24zKGZhbHNlKTtcclxuICAgIHNldFByZXZpZXdJbWFnZUxvZ28obnVsbCk7XHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24xKG51bGwpO1xyXG4gICAgc2V0UHJldmlld0ltYWdlUGVyc29uMihudWxsKTtcclxuICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjMobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0QmFzZTY0KGZpbGUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcclxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBlcnJvciA9PiByZWplY3QoZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dFxyXG4gICAgICB0aXRsZT1cIkdvdmVybm1lbnQgLSBBZG1pbiBtYW5hZ2VtZW50XCJcclxuICAgICAgdXJsPXtvcmlnaW59XHJcbiAgICAgIG9yaWdpbj17b3JpZ2lufVxyXG4gICAgICAvLyB1c2VyPXtsb2dpbn1cclxuICAgICAgaW5kZXhTdWJNZW51PXtcIjZcIn1cclxuICAgICAgaW5kZXhNZW51PXtcInN1Yi02LTBcIn1cclxuICAgICAgdGl0bGVQYWdlPVwi4LiC4LmJ4Lit4Lih4Li54Lil4Lit4LiH4LiE4LmM4LiB4LijXCJcclxuICAgICAgX3JvdXRlcz17W1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhdGg6ICcvYWRtaW4vZGFzaGJvcmFkJyxcclxuICAgICAgICAgIGJyZWFkY3J1bWJOYW1lOiAn4Lir4LiZ4LmJ4Liy4Lir4Lil4Lix4LiBJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhdGg6ICcvYWRtaW4vc2V0dGluZy9wcm9maWxlJyxcclxuICAgICAgICAgIGJyZWFkY3J1bWJOYW1lOiAn4LiC4LmJ4Lit4Lih4Li54Lil4Lit4LiH4LiE4LmM4LiB4LijJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdfVxyXG4gICAgPlxyXG4gICAgICB7Y29udGV4dEhvbGRlcn1cclxuICAgICAgPGxpbmtcclxuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vcmVhY3QtcXVpbGxAMS4zLjMvZGlzdC9xdWlsbC5zbm93LmNzc1wiXHJcbiAgICAgID48L2xpbms+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy01LzYgbGc6dy1mdWxsIG14LWF1dG9cIj5cclxuICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgbmFtZT1cImJhc2ljXCJcclxuICAgICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICAgIG9uRmluaXNoPXtvblN1Ym1pdEhhbmRsZXJ9XHJcbiAgICAgICAgICByZXF1aXJlZE1hcms9e3RydWV9XHJcbiAgICAgICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICAgICAgZmllbGRzPXtmaWVsZHN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBsZzp3LTEvNiAgcHItMlwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJvcmdhbml6YXRpb25fbG9nb1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1hdXRvIGgtYXV0byB0ZXh0LWNlbnRlciB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LmA4Lil4Li34Lit4LiB4Lig4Liy4LieIExvZ28g4Lit4LiH4LiE4LmM4LiB4LijJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7LyogPERyYWdnZXIgey4uLmRyb3BpbWd9PiAqL31cclxuICAgICAgICAgICAgICAgIDxEcmFnZ2VyXHJcbiAgICAgICAgICAgICAgICAgIG1heENvdW50PXsxfVxyXG4gICAgICAgICAgICAgICAgICAvLyBsaXN0VHlwZT1cInBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAuanBlZywgLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIHsuLi5pbWFnZVVwbG9hZHByb3BzTG9nb31cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtwcmV2aWV3VmlzaWJsZUxvZ28gJiYgPD48SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJldmlld0ltYWdlTG9nb31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTE2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4LiE4Lil4Li04LiBIOC4q+C4o+C4t+C4rSDguKXguLLguIHguYTguJ/guKXguYzguKHguLLguJfguLXguYjguJrguKPguLTguYDguKfguJPguJnguLXguYnguYDguJ7guLfguYjguK3guK3guLHguJvguYLguKvguKXguJQgTG9nbyDguK3guIfguITguYzguIHguKNcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHshcHJldmlld1Zpc2libGVMb2dvICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC1kcmFnLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbmJveE91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4LiE4Lil4Li04LiBIOC4q+C4o+C4t+C4rSDguKXguLLguIHguYTguJ/guKXguYzguKHguLLguJfguLXguYjguJrguKPguLTguYDguKfguJPguJnguLXguYnguYDguJ7guLfguYjguK3guK3guLHguJvguYLguKvguKXguJQgTG9nbyDguK3guIfguITguYzguIHguKNcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0RyYWdnZXI+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctNS82IFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJvcmdhbml6YXRpb25fbmFtZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4iuC4t+C5iOC4reC4q+C4meC5iOC4p+C4ouC4h+C4suC4mVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZJyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguIrguLfguYjguK3guKvguJnguYjguKfguKLguIfguLLguJlcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm9yZ2FuaXphdGlvbl9uYW1lX2VuZ1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4iuC4t+C5iOC4reC4q+C4meC5iOC4p+C4ouC4h+C4suC4mSDguKDguLLguKnguLLguK3guLHguIfguIHguKTguKlcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guKvguJnguYjguKfguKLguIfguLLguJnguKDguLLguKnguLLguK3guLHguIfguIHguKTguKknLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiK4Li34LmI4Lit4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZIOC4oOC4suC4qeC4suC4reC4seC4h+C4geC4pOC4qVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgbmFtZT1cIm9yZ2FuaXphdGlvbl9hZGRyZXNzXCJcclxuICAgICAgICAgICAgbGFiZWw9XCLguJfguLXguYjguK3guKLguLnguYjguKvguJnguYjguKfguKLguIfguLLguJlcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguJfguLXguYjguK3guKLguLnguYjguKvguJnguYjguKfguKLguIfguLLguJknLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiX4Li14LmI4Lit4Lii4Li54LmI4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMywgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IGxnOnctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTEvMyBtci00XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInByb3ZpbmNlc1NlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LiI4Lix4LiH4Lir4Lin4Lix4LiUXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSB3LWZ1bGwgZm9udC1ib2xkIG1iLTIgXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0ICFpbXBvcnRhbnRcIiB9fVxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIjguLHguIfguKvguKfguLHguJQnLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9eygpPT5wcm92aW5jZXNTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3sgd2lkdGg6IDEyMCB9fVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUHJvdmluY2VzQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgIGZpbHRlck9wdGlvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIjBcIj7guYDguKXguLfguK3guIE8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAge3Byb3ZpbmNlcyA/IHByb3ZpbmNlcy5tYXAoKG9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8T3B0aW9uIHZhbHVlPXtvYmplY3QucHJvdmluY2VfaWR9PntvYmplY3QucHJvdmluY2VfbmFtZX0gIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICB9KSA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctMS8zIGxnOm14LTRcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZGlzdHJpY3RTZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4reC4s+C5gOC4oOC4rVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsIFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdCAhaW1wb3J0YW50XCIgfX1cclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4Lit4Liz4LmA4Lig4LitJyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXsoKT0+cHJvdmluY2VzU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IHdpZHRoOiAxMjAgfX1cclxuICAgICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZURpc3RyaWN0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgIGZpbHRlck9wdGlvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIjBcIj7guYDguKXguLfguK3guIE8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAge2Rpc3RyaWN0cyA/IGRpc3RyaWN0cy5tYXAoKG9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8T3B0aW9uIHZhbHVlPXtvYmplY3QuZGlzdHJpY3RfaWR9PntvYmplY3QuZGlzdHJpY3RfbmFtZX0gIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICB9KSA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctMS8zIGxnOm1sLTRcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwic3ViRGlzdHJpY3RTZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4leC4s+C4muC4pVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsIFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdCAhaW1wb3J0YW50XCIgfX1cclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiV4Liz4Lia4LilJyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXsoKT0+cHJvdmluY2VzU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IHdpZHRoOiAxMjAgfX1cclxuICAgICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb249e3RydWV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCIwXCI+4LmA4Lil4Li34Lit4LiBPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIHtzdWJEaXN0cmljdHMgPyBzdWJEaXN0cmljdHMubWFwKChvYmplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE9wdGlvbiB2YWx1ZT17b2JqZWN0LnN1Yl9kaXN0cmljdF9pZH0+e29iamVjdC5zdWJfZGlzdHJpY3RfbmFtZX0gIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICB9KSA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggbGc6dy0xLzIgbGc6bXItNFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJvcmdhbml6YXRpb25fcGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguYDguJrguK3guKPguYzguYLguJfguKNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC5gOC4muC4reC4o+C5jOC5guC4l+C4oycsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LmA4Lia4Lit4Lij4LmM4LmC4LiX4LijXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCBsZzp3LTEvMiBsZzptbC00XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm9yZ2FuaXphdGlvbl9mYXhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguYDguJrguK3guKPguYwgZmF4XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LmA4Lia4Lit4Lij4LmMIGZheCcsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguYDguJrguK3guKPguYwgZmF4XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCBsZzp3LTEvMiBsZzptci00XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm9yZ2FuaXphdGlvbl9lbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4reC4teC5gOC4oeC4peC4peC5jFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4Lit4Li14LmA4Lih4Lil4Lil4LmMJyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguK3guLXguYDguKHguKXguKXguYxcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IGxnOnctMS8yIGxnOm1sLTRcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwib3JnYW5pemF0aW9uX2VtYWlsX2FsZXJ0XCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4Lit4Li14LmA4Lih4Lil4Lil4LmM4Liq4Liz4Lir4Lij4Lix4Lia4LmB4LiI4LmJ4LiH4LmA4LiV4Li34Lit4LiZXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4Lit4Li14LmA4Lih4Lil4Lil4LmM4Liq4Liz4Lir4Lij4Lix4Lia4LmB4LiI4LmJ4LiH4LmA4LiV4Li34Lit4LiZJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4reC4teC5gOC4oeC4peC4peC5jOC4quC4s+C4q+C4o+C4seC4muC5geC4iOC5ieC4h+C5gOC4leC4t+C4reC4mVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggbGc6dy0xLzIgbGc6bXItNFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJzb2NpYWxfZmJfcGFnZWlkXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiZmFjZWJvb2sgcGFnZSBpZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4gSBmYWNlYm9vayBwYWdlIGlkJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImZhY2Vib29rIHBhZ2UgaWRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IGxnOnctMS8yIGxnOm1sLTRcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicnNzXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4Lij4Lir4Lix4Liq4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZ4Lig4Liy4LiE4Lij4Lix4LiQ4Liq4Liz4Lir4Lij4Lix4Lia4LmA4LiK4Li34Lit4Lih4LiV4LmI4Lit4Lij4Liw4Lia4LiaIEUtR1BcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguKPguKvguLHguKrguKvguJnguYjguKfguKLguIfguLLguJnguKDguLLguITguKPguLHguJDguKrguLPguKvguKPguLHguJrguYDguIrguLfguK3guKHguJXguYjguK3guKPguLDguJrguJogRS1HUCcsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguKPguKvguLHguKrguKvguJnguYjguKfguKLguIfguLLguJnguKDguLLguITguKPguLHguJDguKrguLPguKvguKPguLHguJrguYDguIrguLfguK3guKHguJXguYjguK3guKPguLDguJrguJogRS1HUFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoclxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNDNEM0QzQnLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogMixcclxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJteS02XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGxnOnctMS82IHByLTJcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGVyc29uMDFfaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctYXV0byBoLWF1dG8gdGV4dC1jZW50ZXIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC5gOC4peC4t+C4reC4geC4oOC4suC4nuC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4l+C4teC5iCAxJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7LyogPERyYWdnZXIgey4uLmRyb3BpbWd9PiAqL31cclxuICAgICAgICAgICAgICAgIDxEcmFnZ2VyXHJcbiAgICAgICAgICAgICAgICAgIG1heENvdW50PXsxfVxyXG4gICAgICAgICAgICAgICAgICAvLyBsaXN0VHlwZT1cInBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAuanBlZywgLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIHsuLi5pbWFnZVVwbG9hZHByb3BzUGVyc29uMX1cclxuICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtwcmV2aWV3VmlzaWJsZVBlcnNvbjEgJiYgPD48SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3ByZXZpZXdJbWFnZVBlcnNvbjF9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzE1NnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcidcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIOC4hOC4peC4tOC4gSDguKvguKPguLfguK0g4Lil4Liy4LiB4LmE4Lif4Lil4LmM4Lih4Liy4LiX4Li14LmI4Lia4Lij4Li04LmA4Lin4LiT4LiZ4Li14LmJ4LmA4Lie4Li34LmI4Lit4Lit4Lix4Lib4LmC4Lir4Lil4LiUIOC4oOC4suC4nuC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4l+C4teC5iCAxXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB7IXByZXZpZXdWaXNpYmxlUGVyc29uMSAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtZHJhZy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5ib3hPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIOC4hOC4peC4tOC4gSDguKvguKPguLfguK0g4Lil4Liy4LiB4LmE4Lif4Lil4LmM4Lih4Liy4LiX4Li14LmI4Lia4Lij4Li04LmA4Lin4LiT4LiZ4Li14LmJ4LmA4Lie4Li34LmI4Lit4Lit4Lix4Lib4LmC4Lir4Lil4LiUIOC4oOC4suC4nuC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4l+C4teC5iCAxXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9EcmFnZ2VyPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTUvNiBcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGVyc29uMDFfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4iuC4t+C5iOC4reC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAxXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDEnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiK4Li34LmI4Lit4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDFcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAxX3Bvc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDFcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guJXguLPguYHguKvguJnguYjguIfguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMScsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguJXguLPguYHguKvguJnguYjguIfguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGVyc29uMDFfcGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguYDguJrguK3guKPguYzguYLguJfguKPguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAxJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC5gOC4muC4reC4o+C5jOC5guC4l+C4o+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAxXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBsZzp3LTEvNiBwci0yXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAyX2ltYWdlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWF1dG8gaC1hdXRvIHRleHQtY2VudGVyIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguYDguKXguLfguK3guIHguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggMicsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgey8qIDxEcmFnZ2VyIHsuLi5kcm9waW1nfT4gKi99XHJcbiAgICAgICAgICAgICAgICA8RHJhZ2dlclxyXG4gICAgICAgICAgICAgICAgICBtYXhDb3VudD17MX1cclxuICAgICAgICAgICAgICAgICAgLy8gbGlzdFR5cGU9XCJwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLmpwZWcsIC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICB7Li4uaW1hZ2VVcGxvYWRwcm9wc1BlcnNvbjJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7cHJldmlld1Zpc2libGVQZXJzb24yICYmIDw+PEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3ByZXZpZXdJbWFnZVBlcnNvbjJ9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzE1NnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcidcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIOC4hOC4peC4tOC4gSDguKvguKPguLfguK0g4Lil4Liy4LiB4LmE4Lif4Lil4LmM4Lih4Liy4LiX4Li14LmI4Lia4Lij4Li04LmA4Lin4LiT4LiZ4Li14LmJ4LmA4Lie4Li34LmI4Lit4Lit4Lix4Lib4LmC4Lir4Lil4LiUIOC4oOC4suC4nuC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4l+C4teC5iCAyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB7IXByZXZpZXdWaXNpYmxlUGVyc29uMiAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtZHJhZy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5ib3hPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIOC4hOC4peC4tOC4gSDguKvguKPguLfguK0g4Lil4Liy4LiB4LmE4Lif4Lil4LmM4Lih4Liy4LiX4Li14LmI4Lia4Lij4Li04LmA4Lin4LiT4LiZ4Li14LmJ4LmA4Lie4Li34LmI4Lit4Lit4Lix4Lib4LmC4Lir4Lil4LiUIOC4oOC4suC4nuC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4l+C4teC5iCAyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9EcmFnZ2VyPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTUvNiBcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGVyc29uMDJfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4iuC4t+C5iOC4reC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAyXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDInLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiK4Li34LmI4Lit4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDJcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAyX3Bvc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guJXguLPguYHguKvguJnguYjguIfguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMicsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguJXguLPguYHguKvguJnguYjguIfguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMlwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGVyc29uMDJfcGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguYDguJrguK3guKPguYzguYLguJfguKPguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMlwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAxJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC5gOC4muC4reC4o+C5jOC5guC4l+C4o+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAyXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBsZzp3LTEvNiBwci0yXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAzX2ltYWdlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWF1dG8gaC1hdXRvIHRleHQtY2VudGVyIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguYDguKXguLfguK3guIHguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggMycsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgey8qIDxEcmFnZ2VyIHsuLi5kcm9waW1nfT4gKi99XHJcbiAgICAgICAgICAgICAgICA8RHJhZ2dlclxyXG4gICAgICAgICAgICAgICAgICBtYXhDb3VudD17MX1cclxuICAgICAgICAgICAgICAgICAgLy8gbGlzdFR5cGU9XCJwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLmpwZWcsIC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICB7Li4uaW1hZ2VVcGxvYWRwcm9wc1BlcnNvbjN9XHJcbiAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7cHJldmlld1Zpc2libGVQZXJzb24zICYmIDw+PEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3ByZXZpZXdJbWFnZVBlcnNvbjN9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzE1NnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcidcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIOC4hOC4peC4tOC4gSDguKvguKPguLfguK0g4Lil4Liy4LiB4LmE4Lif4Lil4LmM4Lih4Liy4LiX4Li14LmI4Lia4Lij4Li04LmA4Lin4LiT4LiZ4Li14LmJ4LmA4Lie4Li34LmI4Lit4Lit4Lix4Lib4LmC4Lir4Lil4LiUIOC4oOC4suC4nuC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4l+C4teC5iCAzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB7IXByZXZpZXdWaXNpYmxlUGVyc29uMyAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtZHJhZy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5ib3hPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIOC4hOC4peC4tOC4gSDguKvguKPguLfguK0g4Lil4Liy4LiB4LmE4Lif4Lil4LmM4Lih4Liy4LiX4Li14LmI4Lia4Lij4Li04LmA4Lin4LiT4LiZ4Li14LmJ4LmA4Lie4Li34LmI4Lit4Lit4Lix4Lib4LmC4Lir4Lil4LiUIOC4oOC4suC4nuC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4l+C4teC5iCAzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9EcmFnZ2VyPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTUvNiBcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGVyc29uMDNfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4iuC4t+C5iOC4reC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAzXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDMnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiK4Li34LmI4Lit4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDNcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAzX3Bvc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guJXguLPguYHguKvguJnguYjguIfguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMycsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguJXguLPguYHguKvguJnguYjguIfguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggM1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGVyc29uMDNfcGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguYDguJrguK3guKPguYzguYLguJfguKPguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggM1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAxJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC5gOC4muC4reC4o+C5jOC5guC4l+C4o+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAzXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBjbGFzc05hbWU9XCJmbGV4IG10LTZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGxnOnRleHQtcmlnaHQgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17b25SZXNldH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjQzJDRkUwJyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDMkNGRTAnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMCxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwcHggIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUgIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8vIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdy1mdWxsIGxnOnctMS80XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGV4dC1jdXN0b20tYmxhY2sgXCI+4Lij4Li14LmA4LiL4LmH4LiXPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIC8vIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDU5NjY5JyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyMwNTk2NjknLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMCxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwcHggIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSB3LWZ1bGwgbGc6dy0xLzRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbS13aGl0ZSBcIj7guJrguLHguJnguJfguLbguIE8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4vKiBnZXRTZXJ2ZXJTaWRlUHJvcHMgKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyByZXEgfSA9IGNvbnRleHQ7XHJcbiAgY29uc3QgeyBvcmlnaW4gfSA9IGFic29sdXRlVXJsKHJlcSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBvcmlnaW4sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==