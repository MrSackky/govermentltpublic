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
                fetchOrganizationData(); // setTimeout(
                //   function () {
                //     //Start the timer
                //     router.push('/admin/setting/profile');
                //   }.bind(this),
                //   2000,);
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
    setTimeout(function () {
      //Start the timer
      router.push('/admin/setting/profile');
    }.bind(_this), 2000);
    window.location.reload();
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
              setImageLandingPagePerson2(_organizationData.data.organization.person02_image);
              setPreviewImagePerson3("..\\..\\..\\uploads\\c-" + user.organization_id + '\\organization\\' + _organizationData.data.organization.person03_image);
              setPreviewVisiblePerson3(true);
              setImageLandingPagePerson3(_organizationData.data.organization.person03_image); // if (_organizationData.data.organization.organization_logo) {
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
      lineNumber: 676,
      columnNumber: 5
    }
  }, contextHolder, __jsx("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "w-5/6 lg:w-full mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 700,
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
      lineNumber: 701,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 709,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inline-flex lg:w-1/6  pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 710,
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
      lineNumber: 711,
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
      lineNumber: 722,
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
      lineNumber: 730,
      columnNumber: 44
    }
  }), __jsx("p", {
    className: "text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 740,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 Logo \u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23")), !previewVisibleLogo && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746,
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 747,
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 749,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 Logo \u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23"))))), __jsx("div", {
    className: "lg:w-5/6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 757,
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
      lineNumber: 758,
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
      lineNumber: 769,
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
      lineNumber: 777,
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
      lineNumber: 788,
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
      lineNumber: 798,
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
      lineNumber: 809,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "lg:inline-flex lg:w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 817,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-full lg:w-1/3 mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 818,
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
      lineNumber: 819,
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
      lineNumber: 832,
      columnNumber: 17
    }
  }, __jsx(Option, {
    value: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 839,
      columnNumber: 19
    }
  }, "\u0E40\u0E25\u0E37\u0E2D\u0E01"), provinces ? provinces.map(function (object) {
    return __jsx(Option, {
      value: object.province_id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 841,
        columnNumber: 28
      }
    }, object.province_name, "  ");
  }) : ""))), __jsx("div", {
    className: "w-full lg:w-1/3 lg:mx-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 846,
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
      lineNumber: 847,
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
      lineNumber: 860,
      columnNumber: 17
    }
  }, __jsx(Option, {
    value: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 868,
      columnNumber: 19
    }
  }, "\u0E40\u0E25\u0E37\u0E2D\u0E01"), districts ? districts.map(function (object) {
    return __jsx(Option, {
      value: object.district_id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 870,
        columnNumber: 28
      }
    }, object.district_name, "  ");
  }) : ""))), __jsx("div", {
    className: "w-full lg:w-1/3 lg:ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 875,
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
      lineNumber: 876,
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
      lineNumber: 889,
      columnNumber: 17
    }
  }, __jsx(Option, {
    value: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 896,
      columnNumber: 19
    }
  }, "\u0E40\u0E25\u0E37\u0E2D\u0E01"), subDistricts ? subDistricts.map(function (object) {
    return __jsx(Option, {
      value: object.sub_district_id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 898,
        columnNumber: 28
      }
    }, object.sub_district_name, "  ");
  }) : "")))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 904,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 905,
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
      lineNumber: 906,
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
      lineNumber: 917,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 926,
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
      lineNumber: 927,
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
      lineNumber: 938,
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 948,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 949,
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
      lineNumber: 950,
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
      lineNumber: 961,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 970,
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
      lineNumber: 971,
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
      lineNumber: 982,
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 992,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 993,
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
      lineNumber: 994,
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
      lineNumber: 1005,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1014,
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
      lineNumber: 1015,
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
      lineNumber: 1026,
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
      lineNumber: 1036,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1044,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inline-flex lg:w-1/6 pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1045,
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
      lineNumber: 1046,
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
      lineNumber: 1057,
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
      lineNumber: 1064,
      columnNumber: 47
    }
  }), __jsx("p", {
    className: "text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1073,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 1")), !previewVisiblePerson1 && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1079,
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1080,
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1082,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 1"))))), __jsx("div", {
    className: "lg:w-5/6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1090,
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
      lineNumber: 1091,
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
      lineNumber: 1102,
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
      lineNumber: 1110,
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
      lineNumber: 1121,
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
      lineNumber: 1129,
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
      lineNumber: 1140,
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1150,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inline-flex lg:w-1/6 pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1151,
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
      lineNumber: 1152,
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
      lineNumber: 1163,
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
      lineNumber: 1170,
      columnNumber: 47
    }
  }), __jsx("p", {
    className: "text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1180,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 2")), !previewVisiblePerson2 && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1186,
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1187,
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1189,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 2"))))), __jsx("div", {
    className: "lg:w-5/6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1197,
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
      lineNumber: 1198,
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
      lineNumber: 1209,
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
      lineNumber: 1217,
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
      lineNumber: 1228,
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
      lineNumber: 1236,
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
      lineNumber: 1247,
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1257,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inline-flex lg:w-1/6 pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1258,
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
      lineNumber: 1259,
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
      lineNumber: 1270,
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
      lineNumber: 1277,
      columnNumber: 47
    }
  }), __jsx("p", {
    className: "text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1287,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 3")), !previewVisiblePerson3 && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1293,
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1294,
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1296,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 3"))))), __jsx("div", {
    className: "lg:w-5/6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1304,
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
      lineNumber: 1305,
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
      lineNumber: 1316,
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
      lineNumber: 1324,
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
      lineNumber: 1335,
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
      lineNumber: 1343,
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
      lineNumber: 1354,
      columnNumber: 17
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    className: "flex mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1364,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1365,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "text-center lg:text-right w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1366,
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
      lineNumber: 1367,
      columnNumber: 17
    }
  }, __jsx(Text, {
    className: "text-custom-black ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1382,
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
      lineNumber: 1384,
      columnNumber: 17
    }
  }, __jsx(Text, {
    className: "text-custom-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1397,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9zZXR0aW5nL3Byb2ZpbGUvaW5kZXguanMiXSwibmFtZXMiOlsiSm9kaXRFZGl0b3IiLCJkeW5hbWljIiwic3NyIiwiVGV4dCIsIlR5cG9ncmFwaHkiLCJUaXRsZSIsIk9wdGlvbiIsIlNlbGVjdCIsIlRleHRBcmVhIiwiSW5wdXQiLCJjb25maWciLCJyZXF1aXJlIiwiSG9tZSIsInByb3BzIiwibm90aWZpY2F0aW9uIiwidXNlTm90aWZpY2F0aW9uIiwiYXBpIiwiY29udGV4dEhvbGRlciIsInVzZXIiLCJvcmlnaW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwcm9maWxlSWQiLCJxdWVyeSIsInVzZVN0YXRlIiwicHJvdmluY2VzIiwic2V0UHJvdmluY2VzIiwiZGlzdHJpY3RzIiwic2V0RGlzdHJpY3RzIiwic3ViRGlzdHJpY3RzIiwic2V0U3ViRGlzdHJpY3RzIiwicHJldmlld0ltYWdlTG9nbyIsInNldFByZXZpZXdJbWFnZUxvZ28iLCJwcmV2aWV3SW1hZ2VQZXJzb24xIiwic2V0UHJldmlld0ltYWdlUGVyc29uMSIsInByZXZpZXdJbWFnZVBlcnNvbjIiLCJzZXRQcmV2aWV3SW1hZ2VQZXJzb24yIiwicHJldmlld0ltYWdlUGVyc29uMyIsInNldFByZXZpZXdJbWFnZVBlcnNvbjMiLCJpbWFnZUxhbmRpbmdQYWdlTG9nbyIsInNldEltYWdlTGFuZGluZ1BhZ2VMb2dvIiwiaW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjEiLCJzZXRJbWFnZUxhbmRpbmdQYWdlUGVyc29uMSIsImltYWdlTGFuZGluZ1BhZ2VQZXJzb24yIiwic2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjIiLCJpbWFnZUxhbmRpbmdQYWdlUGVyc29uMyIsInNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24zIiwicHJldmlld1Zpc2libGVMb2dvIiwic2V0UHJldmlld1Zpc2libGVMb2dvIiwicHJldmlld1Zpc2libGVQZXJzb24xIiwic2V0UHJldmlld1Zpc2libGVQZXJzb24xIiwicHJldmlld1Zpc2libGVQZXJzb24yIiwic2V0UHJldmlld1Zpc2libGVQZXJzb24yIiwicHJldmlld1Zpc2libGVQZXJzb24zIiwic2V0UHJldmlld1Zpc2libGVQZXJzb24zIiwibG9nbyIsInNldExvZ28iLCJmaWVsZHMiLCJzZXRGaWVsZHMiLCJvcmdhbml6YXRpb25EYXRhIiwic2V0T3JnYW5pemF0aW9uRGF0YSIsInVzZUVmZmVjdCIsImZldGNoT3JnYW5pemF0aW9uRGF0YSIsImZldGNoUHJvdmluY2VzRGF0YSIsIm9uU3VibWl0SGFuZGxlciIsInZhbHVlIiwiZGF0YSIsIm9yZ2FuaXphdGlvbl9pZCIsIm9yZ2FuaXphdGlvbl9uYW1lIiwib3JnYW5pemF0aW9uX25hbWVfZW5nIiwib3JnYW5pemF0aW9uX2xvZ28iLCJvcmdhbml6YXRpb25fYWRkcmVzcyIsIm9yZ2FuaXphdGlvbl9zdWJfZGlzdHJpY3RfaWQiLCJzdWJEaXN0cmljdFNlbGVjdGVkIiwib3JnYW5pemF0aW9uX2VtYWlsIiwib3JnYW5pemF0aW9uX2VtYWlsX2FsZXJ0Iiwib3JnYW5pemF0aW9uX3Bob25lIiwib3JnYW5pemF0aW9uX2ZheCIsInNvY2lhbF9mYl9wYWdlaWQiLCJyc3MiLCJwZXJzb24wMV9uYW1lIiwicGVyc29uMDFfcG9zaXRpb24iLCJwZXJzb24wMV9pbWFnZSIsInBlcnNvbjAxX3Bob25lIiwicGVyc29uMDJfbmFtZSIsInBlcnNvbjAyX3Bvc2l0aW9uIiwicGVyc29uMDJfaW1hZ2UiLCJwZXJzb24wMl9waG9uZSIsInBlcnNvbjAzX25hbWUiLCJwZXJzb24wM19wb3NpdGlvbiIsInBlcnNvbjAzX2ltYWdlIiwicGVyc29uMDNfcGhvbmUiLCJjb25zb2xlIiwibG9nIiwiYXBpSW5zdGFuY2UiLCJwdXQiLCJzdGF0dXMiLCJvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJTdWNjZXNzIiwib3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbCIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZGVzY3JpcHRpb24iLCJwbGFjZW1lbnQiLCJzZXRUaW1lb3V0IiwicHVzaCIsImJpbmQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsIm1lc3NnYWUiLCJlcnJvciIsIkRyYWdnZXIiLCJVcGxvYWQiLCJGb3JtIiwidXNlRm9ybSIsImZvcm0iLCJvblJlc2V0IiwiZmV0Y2hEaXN0cmljdHNEYXRhIiwic3ViX2Rpc3RyaWN0cyIsInByb3ZpbmNlX2lkIiwiZmV0Y2hTdWJEaXN0cmljdERhdGEiLCJkaXN0cmljdF9pZCIsIm5hbWUiLCJzdWJfZGlzdHJpY3RfaWQiLCJnZXQiLCJfb3JnYW5pemF0aW9uRGF0YSIsIm9yZ2FuaXphdGlvbiIsInRodW1ibmFpbF9saW5rIiwiX3Byb3ZpbmNlc0RhdGEiLCJfZGlzdHJpY3RzRGF0YSIsInN1YkRpc3RyaWN0SUQiLCJfc3ViRGlzdHJpY3RzRGF0YSIsImhhbmRsZVByb3ZpbmNlc0NoYW5nZSIsImhhbmRsZURpc3RyaWN0Q2hhbmdlIiwiaW1hZ2VVcGxvYWRwcm9wc0xvZ28iLCJtdWx0aXBsZSIsImxpc3RUeXBlIiwibWF4Q291bnQiLCJhY3Rpb24iLCJwcmV2aWV3IiwiY3VzdG9tUmVxdWVzdCIsIm9wdGlvbnMiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZpbGUiLCJ0eXBlX3VzZXIiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzIiwibGlzdCIsIl9uYW1lIiwib25TdWNjZXNzIiwiZXJyIiwib25DaGFuZ2UiLCJpbmZvIiwidXJsIiwiZ2V0QmFzZTY0Iiwib3JpZ2luRmlsZU9iaiIsIm9uUmVtb3ZlIiwicmVzZXRJbWFnZVByZXZpZXciLCJpbWFnZVVwbG9hZHByb3BzUGVyc29uMSIsImltYWdlVXBsb2FkcHJvcHNQZXJzb24yIiwiaW1hZ2VVcGxvYWRwcm9wc1BlcnNvbjMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwicmVzdWx0Iiwib25lcnJvciIsInBhdGgiLCJicmVhZGNydW1iTmFtZSIsImhlaWdodCIsIndpZHRoIiwib2JqZWN0Rml0IiwicmVxdWlyZWQiLCJtaW5Sb3dzIiwibWF4Um93cyIsInRleHRBbGlnbiIsIm1hcCIsIm9iamVjdCIsInByb3ZpbmNlX25hbWUiLCJkaXN0cmljdF9uYW1lIiwic3ViX2Rpc3RyaWN0X25hbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblJpZ2h0IiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFHQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBSUEsSUFBTUEsV0FBVyxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSx3SkFBTjtBQUFBLENBQUQsRUFBOEI7QUFBRUMsS0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBO0FBQUEsa0NBQWhCLG9FQUFnQjtBQUFBO0FBQUEsY0FBaEIsYUFBZ0I7QUFBQTtBQUFBLENBQTlCLENBQTNCO01BQU1GLFc7QUFDTixJQUFRRyxJQUFSLEdBQXdCQywrQ0FBeEIsQ0FBUUQsSUFBUjtBQUFBLElBQWNFLEtBQWQsR0FBd0JELCtDQUF4QixDQUFjQyxLQUFkO0FBQ0EsSUFBUUMsTUFBUixHQUFtQkMsMkNBQW5CLENBQVFELE1BQVI7QUFFQSxJQUFRRSxRQUFSLEdBQXFCQywwQ0FBckIsQ0FBUUQsUUFBUjs7QUFDQSxJQUFNRSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsNkNBQUQsQ0FBdEI7OztBQUVlLFNBQVNDLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBOztBQUNsQyw4QkFBNkJDLGlEQUFZLENBQUNDLGVBQWIsRUFBN0I7QUFBQTtBQUFBLE1BQU9DLEdBQVA7QUFBQSxNQUFZQyxhQUFaOztBQUNBLE1BQVFDLElBQVIsR0FBeUJMLEtBQXpCLENBQVFLLElBQVI7QUFBQSxNQUFjQyxNQUFkLEdBQXlCTixLQUF6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LEVBZ0dBNEYseUNBQUksQ0FBQ0MsTzs7O01BbkdFdEcsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWRtaW5cXHNldHRpbmdcXHByb2ZpbGUuanMuODBkYTRhMTBmY2YwYjliYjQ2Y2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBJbmJveE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbiwgRm9ybSwgSW1hZ2UsIElucHV0LCBub3RpZmljYXRpb24sIFNlbGVjdCwgVHlwb2dyYXBoeSwgVXBsb2FkXHJcbn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuLy8gaW1wb3J0IFVzZXJOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL1VzZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuLyogY29tcG9uZW50cyAqL1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dEFkbWluJztcclxuLyogdXRpbHMgKi9cclxuaW1wb3J0IHtcclxuICBhYnNvbHV0ZVVybCwgYXBpSW5zdGFuY2VcclxufSBmcm9tICcuLi8uLi8uLi8uLi9taWRkbGV3YXJlL3V0aWxzJztcclxuXHJcbmNvbnN0IEpvZGl0RWRpdG9yID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJqb2RpdC1yZWFjdFwiKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5jb25zdCB7IFRleHQsIFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4uLy4uL2NvbmZpZycpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG4gIGNvbnN0IFthcGksIGNvbnRleHRIb2xkZXJdID0gbm90aWZpY2F0aW9uLnVzZU5vdGlmaWNhdGlvbigpO1xyXG4gIGNvbnN0IHsgdXNlciwgb3JpZ2luIH0gPSBwcm9wcztcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHByb2ZpbGVJZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IFtwcm92aW5jZXMsIHNldFByb3ZpbmNlc10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtkaXN0cmljdHMsIHNldERpc3RyaWN0c10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtzdWJEaXN0cmljdHMsIHNldFN1YkRpc3RyaWN0c10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtwcmV2aWV3SW1hZ2VMb2dvLCBzZXRQcmV2aWV3SW1hZ2VMb2dvXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3ByZXZpZXdJbWFnZVBlcnNvbjEsIHNldFByZXZpZXdJbWFnZVBlcnNvbjFdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbcHJldmlld0ltYWdlUGVyc29uMiwgc2V0UHJldmlld0ltYWdlUGVyc29uMl0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtwcmV2aWV3SW1hZ2VQZXJzb24zLCBzZXRQcmV2aWV3SW1hZ2VQZXJzb24zXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2ltYWdlTGFuZGluZ1BhZ2VMb2dvLCBzZXRJbWFnZUxhbmRpbmdQYWdlTG9nb10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtpbWFnZUxhbmRpbmdQYWdlUGVyc29uMSwgc2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjFdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbaW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjIsIHNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24yXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2ltYWdlTGFuZGluZ1BhZ2VQZXJzb24zLCBzZXRJbWFnZUxhbmRpbmdQYWdlUGVyc29uM10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtwcmV2aWV3VmlzaWJsZUxvZ28sIHNldFByZXZpZXdWaXNpYmxlTG9nb10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbcHJldmlld1Zpc2libGVQZXJzb24xLCBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjFdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3ByZXZpZXdWaXNpYmxlUGVyc29uMiwgc2V0UHJldmlld1Zpc2libGVQZXJzb24yXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtwcmV2aWV3VmlzaWJsZVBlcnNvbjMsIHNldFByZXZpZXdWaXNpYmxlUGVyc29uM10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbG9nbywgc2V0TG9nb10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbZmllbGRzLCBzZXRGaWVsZHNdID0gdXNlU3RhdGUoW1xyXG4gIF0pO1xyXG4gIGNvbnN0IFtvcmdhbml6YXRpb25EYXRhLCBzZXRPcmdhbml6YXRpb25EYXRhXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaE9yZ2FuaXphdGlvbkRhdGEoKTtcclxuICAgIGZldGNoUHJvdmluY2VzRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXRIYW5kbGVyKHZhbHVlKSB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBvcmdhbml6YXRpb25faWQ6IHVzZXIub3JnYW5pemF0aW9uX2lkLFxyXG4gICAgICBvcmdhbml6YXRpb25fbmFtZTogdmFsdWUub3JnYW5pemF0aW9uX25hbWUsXHJcbiAgICAgIG9yZ2FuaXphdGlvbl9uYW1lX2VuZzogdmFsdWUub3JnYW5pemF0aW9uX25hbWVfZW5nLFxyXG4gICAgICBvcmdhbml6YXRpb25fbG9nbzogaW1hZ2VMYW5kaW5nUGFnZUxvZ28sXHJcbiAgICAgIG9yZ2FuaXphdGlvbl9hZGRyZXNzOiB2YWx1ZS5vcmdhbml6YXRpb25fYWRkcmVzcyxcclxuICAgICAgb3JnYW5pemF0aW9uX3N1Yl9kaXN0cmljdF9pZDogdmFsdWUuc3ViRGlzdHJpY3RTZWxlY3RlZCxcclxuICAgICAgb3JnYW5pemF0aW9uX2VtYWlsOiB2YWx1ZS5vcmdhbml6YXRpb25fZW1haWwsXHJcbiAgICAgIG9yZ2FuaXphdGlvbl9lbWFpbF9hbGVydDogdmFsdWUub3JnYW5pemF0aW9uX2VtYWlsX2FsZXJ0LFxyXG4gICAgICBvcmdhbml6YXRpb25fcGhvbmU6IHZhbHVlLm9yZ2FuaXphdGlvbl9waG9uZSxcclxuICAgICAgb3JnYW5pemF0aW9uX2ZheDogdmFsdWUub3JnYW5pemF0aW9uX2ZheCxcclxuICAgICAgc29jaWFsX2ZiX3BhZ2VpZDogdmFsdWUuc29jaWFsX2ZiX3BhZ2VpZCxcclxuICAgICAgcnNzOiB2YWx1ZS5yc3MsXHJcbiAgICAgIHBlcnNvbjAxX25hbWU6IHZhbHVlLnBlcnNvbjAxX25hbWUsXHJcbiAgICAgIHBlcnNvbjAxX3Bvc2l0aW9uOiB2YWx1ZS5wZXJzb24wMV9wb3NpdGlvbixcclxuICAgICAgcGVyc29uMDFfaW1hZ2U6IGltYWdlTGFuZGluZ1BhZ2VQZXJzb24xLFxyXG4gICAgICBwZXJzb24wMV9waG9uZTogdmFsdWUucGVyc29uMDFfcGhvbmUsXHJcbiAgICAgIHBlcnNvbjAyX25hbWU6IHZhbHVlLnBlcnNvbjAyX25hbWUsXHJcbiAgICAgIHBlcnNvbjAyX3Bvc2l0aW9uOiB2YWx1ZS5wZXJzb24wMl9wb3NpdGlvbixcclxuICAgICAgcGVyc29uMDJfaW1hZ2U6IGltYWdlTGFuZGluZ1BhZ2VQZXJzb24yLFxyXG4gICAgICBwZXJzb24wMl9waG9uZTogdmFsdWUucGVyc29uMDJfcGhvbmUsXHJcbiAgICAgIHBlcnNvbjAzX25hbWU6IHZhbHVlLnBlcnNvbjAzX25hbWUsXHJcbiAgICAgIHBlcnNvbjAzX3Bvc2l0aW9uOiB2YWx1ZS5wZXJzb24wM19wb3NpdGlvbixcclxuICAgICAgcGVyc29uMDNfaW1hZ2U6IGltYWdlTGFuZGluZ1BhZ2VQZXJzb24zLFxyXG4gICAgICBwZXJzb24wM19waG9uZTogdmFsdWUucGVyc29uMDNfcGhvbmUsXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIGNvbnN0IG9yZ2FuaXphdGlvbkRhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLnB1dCgnL3Byb2ZpbGUnLCBkYXRhKTtcclxuICAgIGlmIChvcmdhbml6YXRpb25EYXRhLmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICBvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJTdWNjZXNzKCk7XHJcbiAgICAgIGZldGNoT3JnYW5pemF0aW9uRGF0YSgpO1xyXG4gICAgICAvLyBzZXRUaW1lb3V0KFxyXG4gICAgICAvLyAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gICAgIC8vU3RhcnQgdGhlIHRpbWVyXHJcbiAgICAgIC8vICAgICByb3V0ZXIucHVzaCgnL2FkbWluL3NldHRpbmcvcHJvZmlsZScpO1xyXG4gICAgICAvLyAgIH0uYmluZCh0aGlzKSxcclxuICAgICAgLy8gICAyMDAwLCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJGYWlsKG9yZ2FuaXphdGlvbkRhdGEuZGF0YS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25SZWdpc3RlclN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICBub3RpZmljYXRpb24uc3VjY2Vzcyh7XHJcbiAgICAgIG1lc3NhZ2U6IGDguJrguLHguJnguJfguLbguIHguILguYnguK3guKHguLnguKXguKrguLPguYDguKPguYfguIhgLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ+C4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iCcsXHJcbiAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuXHJcbiAgICB9KTtcclxuICAgIHNldFRpbWVvdXQoXHJcbiAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL1N0YXJ0IHRoZSB0aW1lclxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvYWRtaW4vc2V0dGluZy9wcm9maWxlJyk7XHJcbiAgICAgIH0uYmluZCh0aGlzKSxcclxuICAgICAgMjAwMCwpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25SZWdpc3RlckZhaWwgPSBtZXNzZ2FlID0+IHtcclxuICAgIG5vdGlmaWNhdGlvbi5lcnJvcih7XHJcbiAgICAgIG1lc3NhZ2U6IGDguJ7guJrguJvguLHguI3guKvguLLguKPguLDguKvguKfguYjguLLguIfguIHguLLguKPguJrguLHguJnguJfguLbguIHguILguYnguK3guKHguLnguKVgLFxyXG4gICAgICBkZXNjcmlwdGlvbjogbWVzc2dhZSxcclxuICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgeyBEcmFnZ2VyIH0gPSBVcGxvYWQ7XHJcblxyXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG5cclxuICBjb25zdCBvblJlc2V0ID0gKCkgPT4ge1xyXG4gICAgZmV0Y2hEaXN0cmljdHNEYXRhKG9yZ2FuaXphdGlvbkRhdGEuc3ViX2Rpc3RyaWN0cyA/IG9yZ2FuaXphdGlvbkRhdGEuc3ViX2Rpc3RyaWN0cy5wcm92aW5jZXMucHJvdmluY2VfaWQgOiAwKVxyXG4gICAgZmV0Y2hTdWJEaXN0cmljdERhdGEob3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzID8gb3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzLmRpc3RyaWN0cy5kaXN0cmljdF9pZCA6IDApXHJcbiAgICBzZXRGaWVsZHMoW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fbG9nbyddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9sb2dvLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fbmFtZSddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9uYW1lLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fbmFtZV9lbmcnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fbmFtZV9lbmcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9waG9uZSddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9waG9uZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX2VtYWlsJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEub3JnYW5pemF0aW9uX2VtYWlsLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fZmF4J10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEub3JnYW5pemF0aW9uX2ZheFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fYWRkcmVzcyddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9hZGRyZXNzLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwcm92aW5jZXNTZWxlY3RlZCddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLnN1Yl9kaXN0cmljdHMgPyBvcmdhbml6YXRpb25EYXRhLnN1Yl9kaXN0cmljdHMucHJvdmluY2VzLnByb3ZpbmNlX2lkIDogXCIwXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnZGlzdHJpY3RTZWxlY3RlZCddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLnN1Yl9kaXN0cmljdHMgPyBvcmdhbml6YXRpb25EYXRhLnN1Yl9kaXN0cmljdHMuZGlzdHJpY3RzLmRpc3RyaWN0X2lkIDogXCIwXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnc3ViRGlzdHJpY3RTZWxlY3RlZCddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLnN1Yl9kaXN0cmljdHMgPyBvcmdhbml6YXRpb25EYXRhLnN1Yl9kaXN0cmljdHMuc3ViX2Rpc3RyaWN0X2lkIDogXCIwXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnc29jaWFsX2ZiX3BhZ2VpZCddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLnNvY2lhbF9mYl9wYWdlaWRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX2VtYWlsX2FsZXJ0J10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEub3JnYW5pemF0aW9uX2VtYWlsX2FsZXJ0XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3JzcyddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLnJzc1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wMV9uYW1lJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDFfbmFtZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDFfcG9zaXRpb24nXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5wZXJzb24wMV9wb3NpdGlvbixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDFfcGhvbmUnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5wZXJzb24wMV9waG9uZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDJfbmFtZSddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAyX25hbWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAyX3Bvc2l0aW9uJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDJfcG9zaXRpb24sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAyX3Bob25lJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDJfcGhvbmUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAzX25hbWUnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5wZXJzb24wM19uYW1lLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wM19wb3NpdGlvbiddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAzX3Bvc2l0aW9uLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wM19waG9uZSddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAzX3Bob25lLFxyXG4gICAgICB9XHJcbiAgICBdKTtcclxuICAgIHNldFByZXZpZXdJbWFnZUxvZ28oJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICsgdXNlci5vcmdhbml6YXRpb25faWQgKyAnXFxcXG9yZ2FuaXphdGlvblxcXFwnICsgb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fbG9nbyk7XHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZUxvZ28odHJ1ZSk7XHJcbiAgICBzZXRJbWFnZUxhbmRpbmdQYWdlTG9nbyhvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9sb2dvKTtcclxuXHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24xKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArIHVzZXIub3JnYW5pemF0aW9uX2lkICsgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArIG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDFfaW1hZ2UpO1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24xKHRydWUpO1xyXG4gICAgc2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjEob3JnYW5pemF0aW9uRGF0YS5wZXJzb24wMV9pbWFnZSk7XHJcblxyXG4gICAgc2V0UHJldmlld0ltYWdlUGVyc29uMignLi5cXFxcLi5cXFxcLi5cXFxcdXBsb2Fkc1xcXFxjLScgKyB1c2VyLm9yZ2FuaXphdGlvbl9pZCArICdcXFxcb3JnYW5pemF0aW9uXFxcXCcgKyBvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAyX2ltYWdlKTtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMih0cnVlKTtcclxuICAgIHNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24yKG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDJfaW1hZ2UpO1xyXG5cclxuICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjMoJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICsgdXNlci5vcmdhbml6YXRpb25faWQgKyAnXFxcXG9yZ2FuaXphdGlvblxcXFwnICsgb3JnYW5pemF0aW9uRGF0YS5wZXJzb24wM19pbWFnZSk7XHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjModHJ1ZSk7XHJcbiAgICBzZXRJbWFnZUxhbmRpbmdQYWdlUGVyc29uMyhvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAzX2ltYWdlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaE9yZ2FuaXphdGlvbkRhdGEgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgX29yZ2FuaXphdGlvbkRhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ29yZ2FuaXphdGlvbi8nICsgKHVzZXIgPyB1c2VyLm9yZ2FuaXphdGlvbl9pZCA6IDApXHJcbiAgICApO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uKVxyXG4gICAgc2V0T3JnYW5pemF0aW9uRGF0YShfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbilcclxuICAgIGZldGNoRGlzdHJpY3RzRGF0YShfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5zdWJfZGlzdHJpY3RzID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24uc3ViX2Rpc3RyaWN0cy5wcm92aW5jZXMucHJvdmluY2VfaWQgOiAwKVxyXG4gICAgZmV0Y2hTdWJEaXN0cmljdERhdGEoX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24uc3ViX2Rpc3RyaWN0cyA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnN1Yl9kaXN0cmljdHMuZGlzdHJpY3RzLmRpc3RyaWN0X2lkIDogMClcclxuXHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VMb2dvKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArIHVzZXIub3JnYW5pemF0aW9uX2lkICsgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArIF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9sb2dvKTtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlTG9nbyh0cnVlKTtcclxuICAgIHNldEltYWdlTGFuZGluZ1BhZ2VMb2dvKF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9sb2dvKTtcclxuXHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24xKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArIHVzZXIub3JnYW5pemF0aW9uX2lkICsgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArIF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAxX2ltYWdlKTtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMSh0cnVlKTtcclxuICAgIHNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24xKF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAxX2ltYWdlKTtcclxuXHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24yKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArIHVzZXIub3JnYW5pemF0aW9uX2lkICsgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArIF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAyX2ltYWdlKTtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMih0cnVlKTtcclxuICAgIHNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24yKF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAyX2ltYWdlKTtcclxuXHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24zKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArIHVzZXIub3JnYW5pemF0aW9uX2lkICsgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArIF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAzX2ltYWdlKTtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMyh0cnVlKTtcclxuICAgIHNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24zKF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAzX2ltYWdlKTtcclxuXHJcbiAgICAvLyBpZiAoX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2xvZ28pIHtcclxuICAgIC8vICAgc2V0UHJldmlld0ltYWdlTG9nbyhcclxuICAgIC8vICAgICAnLi5cXFxcLi5cXFxcLi5cXFxcdXBsb2Fkc1xcXFxjLScgK1xyXG4gICAgLy8gICAgIHVzZXIub3JnYW5pemF0aW9uX2lkICtcclxuICAgIC8vICAgICAnXFxcXG9yZ2FuaXphdGlvblxcXFwnICtcclxuICAgIC8vICAgICBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fbG9nbyxcclxuICAgIC8vICAgKVxyXG4gICAgLy8gICBzZXRQcmV2aWV3VmlzaWJsZUxvZ28odHJ1ZSlcclxuICAgIC8vIH1cclxuICAgIC8vIGlmIChfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMV9pbWFnZSkge1xyXG4gICAgLy8gICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24xKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArXHJcbiAgICAvLyAgICAgdXNlci5vcmdhbml6YXRpb25faWQgK1xyXG4gICAgLy8gICAgICdcXFxcb3JnYW5pemF0aW9uXFxcXCcgK1xyXG4gICAgLy8gICAgIF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAxX2ltYWdlKVxyXG4gICAgLy8gICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjEodHJ1ZSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaWYgKF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAyX2ltYWdlKSB7XHJcbiAgICAvLyAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjIoJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICtcclxuICAgIC8vICAgICB1c2VyLm9yZ2FuaXphdGlvbl9pZCArXHJcbiAgICAvLyAgICAgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArXHJcbiAgICAvLyAgICAgX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDJfaW1hZ2UpXHJcbiAgICAvLyAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMih0cnVlKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZiAoX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDNfaW1hZ2UpIHtcclxuICAgIC8vICAgc2V0UHJldmlld0ltYWdlUGVyc29uMygnLi5cXFxcLi5cXFxcLi5cXFxcdXBsb2Fkc1xcXFxjLScgK1xyXG4gICAgLy8gICAgIHVzZXIub3JnYW5pemF0aW9uX2lkICtcclxuICAgIC8vICAgICAnXFxcXG9yZ2FuaXphdGlvblxcXFwnICtcclxuICAgIC8vICAgICBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wM19pbWFnZSlcclxuICAgIC8vICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24zKHRydWUpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHNldFByZXZpZXdJbWFnZUxvZ28oJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICsgdXNlci5vcmdhbml6YXRpb25faWQgKyAnXFxcXG9yZ2FuaXphdGlvblxcXFwnICsgX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2xvZ28pO1xyXG4gICAgLy8gc2V0UHJldmlld1Zpc2libGVMb2dvKHRydWUpO1xyXG4gICAgLy8gc2V0SW1hZ2VMYW5kaW5nUGFnZUxvZ28oX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2xvZ28pO1xyXG4gICAgc2V0RmllbGRzKFtcclxuICAgICAgLy8ge1xyXG4gICAgICAvLyAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX2xvZ28nXSxcclxuICAgICAgLy8gICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2xvZ29cclxuICAgICAgLy8gfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX25hbWUnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX25hbWUgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fbmFtZSA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX25hbWVfZW5nJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9uYW1lX2VuZyA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9uYW1lX2VuZyA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX3Bob25lJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9waG9uZSA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9waG9uZSA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX2VtYWlsJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9lbWFpbCA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9lbWFpbCA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncHJvdmluY2VzU2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24uc3ViX2Rpc3RyaWN0cyA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnN1Yl9kaXN0cmljdHMucHJvdmluY2VzLnByb3ZpbmNlX2lkIDogXCIwXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnZGlzdHJpY3RTZWxlY3RlZCddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5zdWJfZGlzdHJpY3RzID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24uc3ViX2Rpc3RyaWN0cy5kaXN0cmljdHMuZGlzdHJpY3RfaWQgOiBcIjBcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydzdWJEaXN0cmljdFNlbGVjdGVkJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnN1Yl9kaXN0cmljdHMgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5zdWJfZGlzdHJpY3RzLnN1Yl9kaXN0cmljdF9pZCA6IFwiMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9mYXgnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2ZheCA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9mYXggOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3RodW1ibmFpbF9saW5rJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnRodW1ibmFpbF9saW5rID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24udGh1bWJuYWlsX2xpbmsgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9hZGRyZXNzJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9hZGRyZXNzID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2FkZHJlc3MgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9lbWFpbF9hbGVydCddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fZW1haWxfYWxlcnQgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fZW1haWxfYWxlcnQgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3NvY2lhbF9mYl9wYWdlaWQnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24uc29jaWFsX2ZiX3BhZ2VpZCA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnNvY2lhbF9mYl9wYWdlaWQgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3JzcyddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5yc3MgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5yc3MgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAxX25hbWUnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDFfbmFtZSA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAxX25hbWUgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAxX3Bvc2l0aW9uJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAxX3Bvc2l0aW9uID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDFfcG9zaXRpb24gOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAxX3Bob25lJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAxX3Bob25lID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDFfcGhvbmUgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAyX25hbWUnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDJfbmFtZSA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAyX25hbWUgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAyX3Bvc2l0aW9uJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAyX3Bvc2l0aW9uID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDJfcG9zaXRpb24gOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAyX3Bob25lJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAyX3Bob25lID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDJfcGhvbmUgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAzX25hbWUnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDNfbmFtZSA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAzX25hbWUgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAzX3Bvc2l0aW9uJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAzX3Bvc2l0aW9uID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDNfcG9zaXRpb24gOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAzX3Bob25lJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAzX3Bob25lID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDNfcGhvbmUgOiBcIlwiXHJcbiAgICAgIH0sXHJcblxyXG5cclxuICAgIF0pXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hQcm92aW5jZXNEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgX3Byb3ZpbmNlc0RhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ3Byb3ZpbmNlJ1xyXG4gICAgKTtcclxuXHJcbiAgICBzZXRQcm92aW5jZXMoX3Byb3ZpbmNlc0RhdGEuZGF0YS5kYXRhKVxyXG4gICAgLy8gY29uc29sZS5sb2coX3Byb3ZpbmNlc0RhdGEuZGF0YS5kYXRhKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmV0Y2hEaXN0cmljdHNEYXRhID0gYXN5bmMgKHByb3ZpbmNlX2lkKSA9PiB7XHJcbiAgICBjb25zdCBfZGlzdHJpY3RzRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAnZGlzdHJpY3QvJyArIHByb3ZpbmNlX2lkXHJcbiAgICApO1xyXG5cclxuICAgIHNldERpc3RyaWN0cyhfZGlzdHJpY3RzRGF0YS5kYXRhLmRhdGEpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhfZGlzdHJpY3RzRGF0YS5kYXRhLmRhdGEpXHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3QgZmV0Y2hTdWJEaXN0cmljdERhdGEgPSBhc3luYyAoc3ViRGlzdHJpY3RJRCkgPT4ge1xyXG4gICAgY29uc3QgX3N1YkRpc3RyaWN0c0RhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ3N1Yi1kaXN0cmljdC8nICsgc3ViRGlzdHJpY3RJRFxyXG4gICAgKTtcclxuXHJcbiAgICBzZXRTdWJEaXN0cmljdHMoX3N1YkRpc3RyaWN0c0RhdGEuZGF0YS5kYXRhKVxyXG4gICAgLy8gY29uc29sZS5sb2coX3N1YkRpc3RyaWN0c0RhdGEuZGF0YS5kYXRhKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvdmluY2VzQ2hhbmdlID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICBzZXRGaWVsZHMoW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwcm92aW5jZXNTZWxlY3RlZCddLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydkaXN0cmljdFNlbGVjdGVkJ10sXHJcbiAgICAgICAgdmFsdWU6IFwiMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3N1YkRpc3RyaWN0U2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogXCIwXCJcclxuICAgICAgfSxcclxuXHJcbiAgICBdKVxyXG4gICAgZmV0Y2hEaXN0cmljdHNEYXRhKHZhbHVlKTtcclxuICAgIHNldFN1YkRpc3RyaWN0cyhbXSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZURpc3RyaWN0Q2hhbmdlID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRGaWVsZHMoW1xyXG5cclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnZGlzdHJpY3RTZWxlY3RlZCddLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydzdWJEaXN0cmljdFNlbGVjdGVkJ10sXHJcbiAgICAgICAgdmFsdWU6IFwiMFwiXHJcbiAgICAgIH0sXHJcblxyXG4gICAgXSlcclxuICAgIGZldGNoU3ViRGlzdHJpY3REYXRhKHZhbHVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaW1hZ2VVcGxvYWRwcm9wc0xvZ28gPSB7XHJcbiAgICBuYW1lOiAnZmlsZScsXHJcbiAgICBtdWx0aXBsZTogZmFsc2UsXHJcbiAgICBsaXN0VHlwZTogJ3RleHQnLFxyXG4gICAgbWF4Q291bnQ6IDEsXHJcbiAgICBhY3Rpb246IFwiL2FwaS91cGxvYWQvb3JnYW5pemF0aW9uXCIsXHJcbiAgICBwcmV2aWV3OiBmYWxzZSxcclxuICAgIGN1c3RvbVJlcXVlc3Q6IChvcHRpb25zKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgZGF0YS5hcHBlbmQoJ2lkJywgdXNlci50eXBlX3VzZXIgPT0gMSA/IFwiYWRtaW5cIiA6IHVzZXIub3JnYW5pemF0aW9uX2lkKVxyXG4gICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgXCJoZWFkZXJzXCI6IHtcclxuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6ICdtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0tLS0tV2ViS2l0Rm9ybUJvdW5kYXJ5cVRxSkl4dmtXRllxdlA1cydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYXhpb3MucG9zdChvcHRpb25zLmFjdGlvbiwgZGF0YSwgY29uZmlnKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRJbWFnZUxhbmRpbmdQYWdlTG9nbyhyZXMuZGF0YS5kYXRhLmxpc3RbMF0uX25hbWUpXHJcbiAgICAgICAgb3B0aW9ucy5vblN1Y2Nlc3MocmVzLmRhdGEsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgfSlcclxuXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgb25DaGFuZ2UoaW5mbykge1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gaW5mby5maWxlXHJcbiAgICAgIHN3aXRjaCAoaW5mby5maWxlLnN0YXR1cykge1xyXG4gICAgICAgIGNhc2UgXCJkb25lXCI6XHJcbiAgICAgICAgICBpZiAoIWluZm8uZmlsZS51cmwgJiYgIWluZm8uZmlsZS5wcmV2aWV3KSB7XHJcbiAgICAgICAgICAgIGluZm8uZmlsZS5wcmV2aWV3ID0gYXdhaXQgZ2V0QmFzZTY0KGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFByZXZpZXdJbWFnZUxvZ28oaW5mby5maWxlLnVybCB8fCBpbmZvLmZpbGUucHJldmlldylcclxuICAgICAgICAgIHNldFByZXZpZXdWaXNpYmxlTG9nbyh0cnVlKVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgLy8gZXJyb3Igb3IgcmVtb3ZlZFxyXG4gICAgICAgIC8vIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBvblJlbW92ZShpbmZvKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwib25SZW1vdmVcIilcclxuICAgICAgY29uc29sZS5sb2coaW5mbylcclxuICAgICAgcmVzZXRJbWFnZVByZXZpZXcoKVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGltYWdlVXBsb2FkcHJvcHNQZXJzb24xID0ge1xyXG4gICAgbmFtZTogJ2ZpbGUnLFxyXG4gICAgbXVsdGlwbGU6IGZhbHNlLFxyXG4gICAgbGlzdFR5cGU6ICd0ZXh0JyxcclxuICAgIG1heENvdW50OiAxLFxyXG4gICAgYWN0aW9uOiBcIi9hcGkvdXBsb2FkL29yZ2FuaXphdGlvblwiLFxyXG4gICAgcHJldmlldzogZmFsc2UsXHJcbiAgICBjdXN0b21SZXF1ZXN0OiAob3B0aW9ucykgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdpZCcsIHVzZXIudHlwZV91c2VyID09IDEgPyBcImFkbWluXCIgOiB1c2VyLm9yZ2FuaXphdGlvbl9pZClcclxuICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgIFwiaGVhZGVyc1wiOiB7XHJcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9LS0tLVdlYktpdEZvcm1Cb3VuZGFyeXFUcUpJeHZrV0ZZcXZQNXMnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGF4aW9zLnBvc3Qob3B0aW9ucy5hY3Rpb24sIGRhdGEsIGNvbmZpZykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjEocmVzLmRhdGEuZGF0YS5saXN0WzBdLl9uYW1lKVxyXG4gICAgICAgIG9wdGlvbnMub25TdWNjZXNzKHJlcy5kYXRhLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfSxcclxuICAgIGFzeW5jIG9uQ2hhbmdlKGluZm8pIHtcclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGluZm8uZmlsZVxyXG4gICAgICBzd2l0Y2ggKGluZm8uZmlsZS5zdGF0dXMpIHtcclxuICAgICAgICBjYXNlIFwiZG9uZVwiOlxyXG4gICAgICAgICAgaWYgKCFpbmZvLmZpbGUudXJsICYmICFpbmZvLmZpbGUucHJldmlldykge1xyXG4gICAgICAgICAgICBpbmZvLmZpbGUucHJldmlldyA9IGF3YWl0IGdldEJhc2U2NChpbmZvLmZpbGUub3JpZ2luRmlsZU9iaik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24xKGluZm8uZmlsZS51cmwgfHwgaW5mby5maWxlLnByZXZpZXcpXHJcbiAgICAgICAgICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjEodHJ1ZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAvLyByZXNldEltYWdlUHJldmlldygpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgb25SZW1vdmUoaW5mbykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9uUmVtb3ZlXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbWFnZVVwbG9hZHByb3BzUGVyc29uMiA9IHtcclxuICAgIG5hbWU6ICdmaWxlJyxcclxuICAgIG11bHRpcGxlOiBmYWxzZSxcclxuICAgIGxpc3RUeXBlOiAndGV4dCcsXHJcbiAgICBtYXhDb3VudDogMSxcclxuICAgIGFjdGlvbjogXCIvYXBpL3VwbG9hZC9vcmdhbml6YXRpb25cIixcclxuICAgIHByZXZpZXc6IGZhbHNlLFxyXG4gICAgY3VzdG9tUmVxdWVzdDogKG9wdGlvbnMpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgb3B0aW9ucy5maWxlKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnaWQnLCB1c2VyLnR5cGVfdXNlciA9PSAxID8gXCJhZG1pblwiIDogdXNlci5vcmdhbml6YXRpb25faWQpXHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICBcImhlYWRlcnNcIjoge1xyXG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogJ211bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PS0tLS1XZWJLaXRGb3JtQm91bmRhcnlxVHFKSXh2a1dGWXF2UDVzJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBheGlvcy5wb3N0KG9wdGlvbnMuYWN0aW9uLCBkYXRhLCBjb25maWcpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24yKHJlcy5kYXRhLmRhdGEubGlzdFswXS5fbmFtZSlcclxuICAgICAgICBvcHRpb25zLm9uU3VjY2VzcyhyZXMuZGF0YSwgb3B0aW9ucy5maWxlKVxyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICB9KVxyXG5cclxuICAgIH0sXHJcbiAgICBhc3luYyBvbkNoYW5nZShpbmZvKSB7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBpbmZvLmZpbGVcclxuICAgICAgc3dpdGNoIChpbmZvLmZpbGUuc3RhdHVzKSB7XHJcbiAgICAgICAgY2FzZSBcImRvbmVcIjpcclxuICAgICAgICAgIGlmICghaW5mby5maWxlLnVybCAmJiAhaW5mby5maWxlLnByZXZpZXcpIHtcclxuICAgICAgICAgICAgaW5mby5maWxlLnByZXZpZXcgPSBhd2FpdCBnZXRCYXNlNjQoaW5mby5maWxlLm9yaWdpbkZpbGVPYmopO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0UHJldmlld0ltYWdlUGVyc29uMihpbmZvLmZpbGUudXJsIHx8IGluZm8uZmlsZS5wcmV2aWV3KVxyXG4gICAgICAgICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24yKHRydWUpXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAvLyByZXNldEltYWdlUHJldmlldygpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgb25SZW1vdmUoaW5mbykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9uUmVtb3ZlXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbWFnZVVwbG9hZHByb3BzUGVyc29uMyA9IHtcclxuICAgIG5hbWU6ICdmaWxlJyxcclxuICAgIG11bHRpcGxlOiBmYWxzZSxcclxuICAgIGxpc3RUeXBlOiAndGV4dCcsXHJcbiAgICBtYXhDb3VudDogMSxcclxuICAgIGFjdGlvbjogXCIvYXBpL3VwbG9hZC9vcmdhbml6YXRpb25cIixcclxuICAgIHByZXZpZXc6IGZhbHNlLFxyXG4gICAgY3VzdG9tUmVxdWVzdDogKG9wdGlvbnMpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgb3B0aW9ucy5maWxlKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnaWQnLCB1c2VyLnR5cGVfdXNlciA9PSAxID8gXCJhZG1pblwiIDogdXNlci5vcmdhbml6YXRpb25faWQpXHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICBcImhlYWRlcnNcIjoge1xyXG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogJ211bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PS0tLS1XZWJLaXRGb3JtQm91bmRhcnlxVHFKSXh2a1dGWXF2UDVzJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBheGlvcy5wb3N0KG9wdGlvbnMuYWN0aW9uLCBkYXRhLCBjb25maWcpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24zKHJlcy5kYXRhLmRhdGEubGlzdFswXS5fbmFtZSlcclxuICAgICAgICBvcHRpb25zLm9uU3VjY2VzcyhyZXMuZGF0YSwgb3B0aW9ucy5maWxlKVxyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICB9KVxyXG5cclxuICAgIH0sXHJcbiAgICBhc3luYyBvbkNoYW5nZShpbmZvKSB7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBpbmZvLmZpbGVcclxuICAgICAgc3dpdGNoIChpbmZvLmZpbGUuc3RhdHVzKSB7XHJcbiAgICAgICAgY2FzZSBcImRvbmVcIjpcclxuICAgICAgICAgIGlmICghaW5mby5maWxlLnVybCAmJiAhaW5mby5maWxlLnByZXZpZXcpIHtcclxuICAgICAgICAgICAgaW5mby5maWxlLnByZXZpZXcgPSBhd2FpdCBnZXRCYXNlNjQoaW5mby5maWxlLm9yaWdpbkZpbGVPYmopO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0UHJldmlld0ltYWdlUGVyc29uMyhpbmZvLmZpbGUudXJsIHx8IGluZm8uZmlsZS5wcmV2aWV3KVxyXG4gICAgICAgICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24zKHRydWUpXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAvLyByZXNldEltYWdlUHJldmlldygpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgb25SZW1vdmUoaW5mbykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9uUmVtb3ZlXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXNldEltYWdlUHJldmlldyA9ICgpID0+IHtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlTG9nbyhmYWxzZSk7XHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjEoZmFsc2UpO1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24yKGZhbHNlKTtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMyhmYWxzZSk7XHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VMb2dvKG51bGwpO1xyXG4gICAgc2V0UHJldmlld0ltYWdlUGVyc29uMShudWxsKTtcclxuICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjIobnVsbCk7XHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24zKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGdldEJhc2U2NChmaWxlKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgIHJlYWRlci5vbmVycm9yID0gZXJyb3IgPT4gcmVqZWN0KGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXRcclxuICAgICAgdGl0bGU9XCJHb3Zlcm5tZW50IC0gQWRtaW4gbWFuYWdlbWVudFwiXHJcbiAgICAgIHVybD17b3JpZ2lufVxyXG4gICAgICBvcmlnaW49e29yaWdpbn1cclxuICAgICAgLy8gdXNlcj17bG9naW59XHJcbiAgICAgIGluZGV4U3ViTWVudT17XCI2XCJ9XHJcbiAgICAgIGluZGV4TWVudT17XCJzdWItNi0wXCJ9XHJcbiAgICAgIHRpdGxlUGFnZT1cIuC4guC5ieC4reC4oeC4ueC4peC4reC4h+C4hOC5jOC4geC4o1wiXHJcbiAgICAgIF9yb3V0ZXM9e1tcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYXRoOiAnL2FkbWluL2Rhc2hib3JhZCcsXHJcbiAgICAgICAgICBicmVhZGNydW1iTmFtZTogJ+C4q+C4meC5ieC4suC4q+C4peC4seC4gScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYXRoOiAnL2FkbWluL3NldHRpbmcvcHJvZmlsZScsXHJcbiAgICAgICAgICBicmVhZGNydW1iTmFtZTogJ+C4guC5ieC4reC4oeC4ueC4peC4reC4h+C4hOC5jOC4geC4oycsXHJcbiAgICAgICAgfSxcclxuICAgICAgXX1cclxuICAgID5cclxuICAgICAge2NvbnRleHRIb2xkZXJ9XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3JlYWN0LXF1aWxsQDEuMy4zL2Rpc3QvcXVpbGwuc25vdy5jc3NcIlxyXG4gICAgICA+PC9saW5rPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNS82IGxnOnctZnVsbCBteC1hdXRvXCI+XHJcbiAgICAgICAgPEZvcm1cclxuICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXHJcbiAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICBvbkZpbmlzaD17b25TdWJtaXRIYW5kbGVyfVxyXG4gICAgICAgICAgcmVxdWlyZWRNYXJrPXt0cnVlfVxyXG4gICAgICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgICAgIGZpZWxkcz17ZmllbGRzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggbGc6dy0xLzYgIHByLTJcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwib3JnYW5pemF0aW9uX2xvZ29cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctYXV0byBoLWF1dG8gdGV4dC1jZW50ZXIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC5gOC4peC4t+C4reC4geC4oOC4suC4niBMb2dvIOC4reC4h+C4hOC5jOC4geC4oycsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgey8qIDxEcmFnZ2VyIHsuLi5kcm9waW1nfT4gKi99XHJcbiAgICAgICAgICAgICAgICA8RHJhZ2dlclxyXG4gICAgICAgICAgICAgICAgICBtYXhDb3VudD17MX1cclxuICAgICAgICAgICAgICAgICAgLy8gbGlzdFR5cGU9XCJwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLmpwZWcsIC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICB7Li4uaW1hZ2VVcGxvYWRwcm9wc0xvZ299XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7cHJldmlld1Zpc2libGVMb2dvICYmIDw+PEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3ByZXZpZXdJbWFnZUxvZ299XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzExNnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcidcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIOC4hOC4peC4tOC4gSDguKvguKPguLfguK0g4Lil4Liy4LiB4LmE4Lif4Lil4LmM4Lih4Liy4LiX4Li14LmI4Lia4Lij4Li04LmA4Lin4LiT4LiZ4Li14LmJ4LmA4Lie4Li34LmI4Lit4Lit4Lix4Lib4LmC4Lir4Lil4LiUIExvZ28g4Lit4LiH4LiE4LmM4LiB4LijXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB7IXByZXZpZXdWaXNpYmxlTG9nbyAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtZHJhZy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5ib3hPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIOC4hOC4peC4tOC4gSDguKvguKPguLfguK0g4Lil4Liy4LiB4LmE4Lif4Lil4LmM4Lih4Liy4LiX4Li14LmI4Lia4Lij4Li04LmA4Lin4LiT4LiZ4Li14LmJ4LmA4Lie4Li34LmI4Lit4Lit4Lix4Lib4LmC4Lir4Lil4LiUIExvZ28g4Lit4LiH4LiE4LmM4LiB4LijXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9EcmFnZ2VyPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTUvNiBcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwib3JnYW5pemF0aW9uX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguIrguLfguYjguK3guKvguJnguYjguKfguKLguIfguLLguJlcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4q+C4meC5iOC4p+C4ouC4h+C4suC4mScsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiK4Li34LmI4Lit4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJvcmdhbml6YXRpb25fbmFtZV9lbmdcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguIrguLfguYjguK3guKvguJnguYjguKfguKLguIfguLLguJkg4Lig4Liy4Lip4Liy4Lit4Lix4LiH4LiB4Lik4LipXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZ4Lig4Liy4Lip4Liy4Lit4Lix4LiH4LiB4Lik4LipJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC4q+C4meC5iOC4p+C4ouC4h+C4suC4mSDguKDguLLguKnguLLguK3guLHguIfguIHguKTguKlcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIG5hbWU9XCJvcmdhbml6YXRpb25fYWRkcmVzc1wiXHJcbiAgICAgICAgICAgIGxhYmVsPVwi4LiX4Li14LmI4Lit4Lii4Li54LmI4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiX4Li14LmI4Lit4Lii4Li54LmI4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4l+C4teC5iOC4reC4ouC4ueC5iOC4q+C4meC5iOC4p+C4ouC4h+C4suC4mVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDMsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCBsZzp3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzMgbXItNFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwcm92aW5jZXNTZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4iOC4seC4h+C4q+C4p+C4seC4lFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gdy1mdWxsIGZvbnQtYm9sZCBtYi0yIFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdCAhaW1wb3J0YW50XCIgfX1cclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiI4Lix4LiH4Lir4Lin4Lix4LiUJyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXsoKT0+cHJvdmluY2VzU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IHdpZHRoOiAxMjAgfX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVByb3ZpbmNlc0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb249e3RydWV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCIwXCI+4LmA4Lil4Li34Lit4LiBPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm92aW5jZXMgPyBwcm92aW5jZXMubWFwKChvYmplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE9wdGlvbiB2YWx1ZT17b2JqZWN0LnByb3ZpbmNlX2lkfT57b2JqZWN0LnByb3ZpbmNlX25hbWV9ICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgfSkgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTEvMyBsZzpteC00XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImRpc3RyaWN0U2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguK3guLPguYDguKDguK1cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbCBcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnQgIWltcG9ydGFudFwiIH19XHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4reC4s+C5gOC4oOC4rScsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17KCk9PnByb3ZpbmNlc1NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyB3aWR0aDogMTIwIH19XHJcbiAgICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEaXN0cmljdENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb249e3RydWV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCIwXCI+4LmA4Lil4Li34Lit4LiBPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIHtkaXN0cmljdHMgPyBkaXN0cmljdHMubWFwKChvYmplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE9wdGlvbiB2YWx1ZT17b2JqZWN0LmRpc3RyaWN0X2lkfT57b2JqZWN0LmRpc3RyaWN0X25hbWV9ICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgfSkgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTEvMyBsZzptbC00XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInN1YkRpc3RyaWN0U2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguJXguLPguJrguKVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbCBcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnQgIWltcG9ydGFudFwiIH19XHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4leC4s+C4muC4pScsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17KCk9PnByb3ZpbmNlc1NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyB3aWR0aDogMTIwIH19XHJcbiAgICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiMFwiPuC5gOC4peC4t+C4reC4gTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICB7c3ViRGlzdHJpY3RzID8gc3ViRGlzdHJpY3RzLm1hcCgob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxPcHRpb24gdmFsdWU9e29iamVjdC5zdWJfZGlzdHJpY3RfaWR9PntvYmplY3Quc3ViX2Rpc3RyaWN0X25hbWV9ICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgfSkgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IGxnOnctMS8yIGxnOm1yLTRcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwib3JnYW5pemF0aW9uX3Bob25lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LmA4Lia4Lit4Lij4LmM4LmC4LiX4LijXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguYDguJrguK3guKPguYzguYLguJfguKMnLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC5gOC4muC4reC4o+C5jOC5guC4l+C4o1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggbGc6dy0xLzIgbGc6bWwtNFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJvcmdhbml6YXRpb25fZmF4XCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LmA4Lia4Lit4Lij4LmMIGZheFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC5gOC4muC4reC4o+C5jCBmYXgnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LmA4Lia4Lit4Lij4LmMIGZheFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggbGc6dy0xLzIgbGc6bXItNFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJvcmdhbml6YXRpb25fZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguK3guLXguYDguKHguKXguKXguYxcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4reC4teC5gOC4oeC4peC4peC5jCcsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4Lit4Li14LmA4Lih4Lil4Lil4LmMXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCBsZzp3LTEvMiBsZzptbC00XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm9yZ2FuaXphdGlvbl9lbWFpbF9hbGVydFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4reC4teC5gOC4oeC4peC4peC5jOC4quC4s+C4q+C4o+C4seC4muC5geC4iOC5ieC4h+C5gOC4leC4t+C4reC4mVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4reC4teC5gOC4oeC4peC4peC5jOC4quC4s+C4q+C4o+C4seC4muC5geC4iOC5ieC4h+C5gOC4leC4t+C4reC4mScsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguK3guLXguYDguKHguKXguKXguYzguKrguLPguKvguKPguLHguJrguYHguIjguYnguIfguYDguJXguLfguK3guJlcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IGxnOnctMS8yIGxnOm1yLTRcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwic29jaWFsX2ZiX3BhZ2VpZFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cImZhY2Vib29rIHBhZ2UgaWRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIEgZmFjZWJvb2sgcGFnZSBpZCcsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJmYWNlYm9vayBwYWdlIGlkXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCBsZzp3LTEvMiBsZzptbC00XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInJzc1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4o+C4q+C4seC4quC4q+C4meC5iOC4p+C4ouC4h+C4suC4meC4oOC4suC4hOC4o+C4seC4kOC4quC4s+C4q+C4o+C4seC4muC5gOC4iuC4t+C4reC4oeC4leC5iOC4reC4o+C4sOC4muC4miBFLUdQXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4Lij4Lir4Lix4Liq4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZ4Lig4Liy4LiE4Lij4Lix4LiQ4Liq4Liz4Lir4Lij4Lix4Lia4LmA4LiK4Li34Lit4Lih4LiV4LmI4Lit4Lij4Liw4Lia4LiaIEUtR1AnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4Lij4Lir4Lix4Liq4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZ4Lig4Liy4LiE4Lij4Lix4LiQ4Liq4Liz4Lir4Lij4Lix4Lia4LmA4LiK4Li34Lit4Lih4LiV4LmI4Lit4Lij4Liw4Lia4LiaIEUtR1BcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aHJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjQzRDNEM0JyxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktNlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBsZzp3LTEvNiBwci0yXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAxX2ltYWdlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWF1dG8gaC1hdXRvIHRleHQtY2VudGVyIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguYDguKXguLfguK3guIHguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggMScsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgey8qIDxEcmFnZ2VyIHsuLi5kcm9waW1nfT4gKi99XHJcbiAgICAgICAgICAgICAgICA8RHJhZ2dlclxyXG4gICAgICAgICAgICAgICAgICBtYXhDb3VudD17MX1cclxuICAgICAgICAgICAgICAgICAgLy8gbGlzdFR5cGU9XCJwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLmpwZWcsIC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICB7Li4uaW1hZ2VVcGxvYWRwcm9wc1BlcnNvbjF9XHJcbiAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7cHJldmlld1Zpc2libGVQZXJzb24xICYmIDw+PEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcmV2aWV3SW1hZ2VQZXJzb24xfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCDguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggMVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgeyFwcmV2aWV3VmlzaWJsZVBlcnNvbjEgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEluYm94T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCDguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggMVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvRHJhZ2dlcj5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy01LzYgXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAxX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAxJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAxXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wMV9wb3NpdGlvblwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAxXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDEnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDFcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAxX3Bob25lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LmA4Lia4Lit4Lij4LmM4LmC4LiX4Lij4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDFcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guJXguLPguYHguKvguJnguYjguIfguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMScsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguYDguJrguK3guKPguYzguYLguJfguKPguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggbGc6dy0xLzYgcHItMlwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wMl9pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1hdXRvIGgtYXV0byB0ZXh0LWNlbnRlciB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LmA4Lil4Li34Lit4LiB4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDInLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsvKiA8RHJhZ2dlciB7Li4uZHJvcGltZ30+ICovfVxyXG4gICAgICAgICAgICAgICAgPERyYWdnZXJcclxuICAgICAgICAgICAgICAgICAgbWF4Q291bnQ9ezF9XHJcbiAgICAgICAgICAgICAgICAgIC8vIGxpc3RUeXBlPVwicGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5qcGVnLCAucG5nXCJcclxuICAgICAgICAgICAgICAgICAgey4uLmltYWdlVXBsb2FkcHJvcHNQZXJzb24yfVxyXG4gICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAge3ByZXZpZXdWaXNpYmxlUGVyc29uMiAmJiA8PjxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcmV2aWV3SW1hZ2VQZXJzb24yfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCDguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggMlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgeyFwcmV2aWV3VmlzaWJsZVBlcnNvbjIgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEluYm94T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCDguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggMlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvRHJhZ2dlcj5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy01LzYgXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAyX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMlwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAyJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAyXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wMl9wb3NpdGlvblwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAyXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDInLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDJcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAyX3Bob25lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LmA4Lia4Lit4Lij4LmM4LmC4LiX4Lij4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guJXguLPguYHguKvguJnguYjguIfguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMScsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguYDguJrguK3guKPguYzguYLguJfguKPguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMlwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggbGc6dy0xLzYgcHItMlwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wM19pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1hdXRvIGgtYXV0byB0ZXh0LWNlbnRlciB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LmA4Lil4Li34Lit4LiB4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDMnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsvKiA8RHJhZ2dlciB7Li4uZHJvcGltZ30+ICovfVxyXG4gICAgICAgICAgICAgICAgPERyYWdnZXJcclxuICAgICAgICAgICAgICAgICAgbWF4Q291bnQ9ezF9XHJcbiAgICAgICAgICAgICAgICAgIC8vIGxpc3RUeXBlPVwicGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5qcGVnLCAucG5nXCJcclxuICAgICAgICAgICAgICAgICAgey4uLmltYWdlVXBsb2FkcHJvcHNQZXJzb24zfVxyXG4gICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAge3ByZXZpZXdWaXNpYmxlUGVyc29uMyAmJiA8PjxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcmV2aWV3SW1hZ2VQZXJzb24zfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCDguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggM1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgeyFwcmV2aWV3VmlzaWJsZVBlcnNvbjMgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEluYm94T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCDguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggM1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvRHJhZ2dlcj5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy01LzYgXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAzX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggM1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAzJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAzXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wM19wb3NpdGlvblwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAzXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDMnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDNcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAzX3Bob25lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LmA4Lia4Lit4Lij4LmM4LmC4LiX4Lij4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guJXguLPguYHguKvguJnguYjguIfguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMScsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguYDguJrguK3guKPguYzguYLguJfguKPguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggM1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gY2xhc3NOYW1lPVwiZmxleCBtdC02XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBsZzp0ZXh0LXJpZ2h0IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBodG1sVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVzZXR9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0MyQ0ZFMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQzJDRkUwJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMHB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvLyBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHctZnVsbCBsZzp3LTEvNFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRleHQtY3VzdG9tLWJsYWNrIFwiPuC4o+C4teC5gOC4i+C5h+C4lzwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAvLyB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzA1OTY2OScsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMDU5NjY5JyxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMHB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUgIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdy1mdWxsIGxnOnctMS80XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGV4dC1jdXN0b20td2hpdGUgXCI+4Lia4Lix4LiZ4LiX4Li24LiBPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuLyogZ2V0U2VydmVyU2lkZVByb3BzICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgcmVxIH0gPSBjb250ZXh0O1xyXG4gIGNvbnN0IHsgb3JpZ2luIH0gPSBhYnNvbHV0ZVVybChyZXEpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgb3JpZ2luLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=