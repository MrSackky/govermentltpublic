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
  }, []);

  function onSubmitHandler(_x) {
    return _onSubmitHandler.apply(this, arguments);
  }

  function _onSubmitHandler() {
    _onSubmitHandler = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(value) {
      var data, organizationData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              data = {
                organization_id: user.organization_id,
                organization_name: value.organization_name,
                organization_name_eng: value.organization_name_eng,
                organization_logo: imageLandingPageLogo
              };
              console.log(data);
              _context3.next = 4;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_11__["apiInstance"])().put('/profile', data);

            case 4:
              organizationData = _context3.sent;

              if (organizationData.data.status == 200) {
                openNotificationRegisterSuccess();
                fetchOrganizationData();
                setTimeout(function () {
                  //Start the timer
                  router.push('/admin/setting/profile');
                }.bind(this), 2000);
              } else {
                openNotificationRegisterFail(organizationData.data.message);
              }

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));
    return _onSubmitHandler.apply(this, arguments);
  }

  var openNotificationRegisterSuccess = function openNotificationRegisterSuccess() {
    api.success({
      message: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
      description: 'บันทึกข้อมูลสำเร็จแล้ว',
      placement: 'topRight'
    });
  };

  var openNotificationRegisterFail = function openNotificationRegisterFail(messgae) {
    api.error({
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
    setFields([{
      name: ['organization_logo'],
      value: organizationData.organization_logo
    }, {
      name: ['organization_name'],
      value: organizationData.organization_name
    }, {
      name: ['organization_name_eng'],
      value: organizationData.organization_name_eng
    }]);
    setPreviewImageLogo("..\\..\\..\\uploads\\c-" + user.organization_id + '\\organization\\' + organizationData.organization_logo);
    setPreviewVisibleLogo(true);
    setImageLandingPageLogo(organizationData.organization_logo);
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
              setOrganizationData(_organizationData.data.organization);

              if (_organizationData.data.organization.organization_logo) {
                setPreviewImageLogo("..\\..\\..\\uploads\\c-" + user.organization_id + '\\organization\\' + _organizationData.data.organization.organization_logo);
                setPreviewVisibleLogo(true);
                setPreviewImage("..\\..\\..\\uploads\\c-" + user.organization_id + '\\activities\\' + _activitiesData.data.activities.activities_image);
                setPreviewVisible(true);
                setImageLandingPage(_activitiesData.data.activities.activities_image);
              }

              setFields([{
                name: ['organization_name'],
                value: _organizationData.data.organization.organization_name ? _organizationData.data.organization.organization_name : ""
              }, {
                name: ['organization_name_eng'],
                value: _organizationData.data.organization.organization_name_eng ? _organizationData.data.organization.organization_name_eng : ""
              }]);

            case 6:
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
      return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var status;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                status = info.file.status;
                _context2.t0 = info.file.status;
                _context2.next = _context2.t0 === "done" ? 4 : 11;
                break;

              case 4:
                if (!(!info.file.url && !info.file.preview)) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 7;
                return getBase64(info.file.originFileObj);

              case 7:
                info.file.preview = _context2.sent;

              case 8:
                setPreviewImageLogo(info.file.url || info.file.preview);
                setPreviewVisibleLogo(true);
                return _context2.abrupt("break", 11);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
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
    setPreviewImageLogo(null);
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
      lineNumber: 213,
      columnNumber: 5
    }
  }, contextHolder, __jsx("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "w-5/6 lg:w-full mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
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
      lineNumber: 238,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inline-flex lg:w-1/6  pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
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
      lineNumber: 248,
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
      lineNumber: 259,
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
      lineNumber: 267,
      columnNumber: 44
    }
  }), __jsx("p", {
    className: "text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 Logo \u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23")), !previewVisibleLogo && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 Logo \u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23"))))), __jsx("div", {
    className: "lg:w-5/6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
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
      lineNumber: 295,
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
      lineNumber: 306,
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
      lineNumber: 314,
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
      lineNumber: 325,
      columnNumber: 17
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    className: "flex mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "text-center lg:text-right w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
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
      lineNumber: 338,
      columnNumber: 17
    }
  }, __jsx(Text, {
    className: "text-custom-black ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
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
      lineNumber: 355,
      columnNumber: 17
    }
  }, __jsx(Text, {
    className: "text-custom-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9zZXR0aW5nL3Byb2ZpbGUvaW5kZXguanMiXSwibmFtZXMiOlsiSm9kaXRFZGl0b3IiLCJkeW5hbWljIiwic3NyIiwiVGV4dCIsIlR5cG9ncmFwaHkiLCJUaXRsZSIsIk9wdGlvbiIsIlNlbGVjdCIsIlRleHRBcmVhIiwiSW5wdXQiLCJjb25maWciLCJyZXF1aXJlIiwiSG9tZSIsInByb3BzIiwibm90aWZpY2F0aW9uIiwidXNlTm90aWZpY2F0aW9uIiwiYXBpIiwiY29udGV4dEhvbGRlciIsInVzZXIiLCJvcmlnaW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwcm9maWxlSWQiLCJxdWVyeSIsInVzZVN0YXRlIiwicHJvdmluY2VzIiwic2V0UHJvdmluY2VzIiwiZGlzdHJpY3RzIiwic2V0RGlzdHJpY3RzIiwic3ViRGlzdHJpY3RzIiwic2V0U3ViRGlzdHJpY3RzIiwicHJldmlld0ltYWdlTG9nbyIsInNldFByZXZpZXdJbWFnZUxvZ28iLCJpbWFnZUxhbmRpbmdQYWdlTG9nbyIsInNldEltYWdlTGFuZGluZ1BhZ2VMb2dvIiwicHJldmlld1Zpc2libGVMb2dvIiwic2V0UHJldmlld1Zpc2libGVMb2dvIiwibG9nbyIsInNldExvZ28iLCJmaWVsZHMiLCJzZXRGaWVsZHMiLCJvcmdhbml6YXRpb25EYXRhIiwic2V0T3JnYW5pemF0aW9uRGF0YSIsInVzZUVmZmVjdCIsImZldGNoT3JnYW5pemF0aW9uRGF0YSIsIm9uU3VibWl0SGFuZGxlciIsInZhbHVlIiwiZGF0YSIsIm9yZ2FuaXphdGlvbl9pZCIsIm9yZ2FuaXphdGlvbl9uYW1lIiwib3JnYW5pemF0aW9uX25hbWVfZW5nIiwib3JnYW5pemF0aW9uX2xvZ28iLCJjb25zb2xlIiwibG9nIiwiYXBpSW5zdGFuY2UiLCJwdXQiLCJzdGF0dXMiLCJvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJTdWNjZXNzIiwic2V0VGltZW91dCIsInB1c2giLCJiaW5kIiwib3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbCIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZGVzY3JpcHRpb24iLCJwbGFjZW1lbnQiLCJtZXNzZ2FlIiwiZXJyb3IiLCJEcmFnZ2VyIiwiVXBsb2FkIiwiRm9ybSIsInVzZUZvcm0iLCJmb3JtIiwib25SZXNldCIsIm5hbWUiLCJnZXQiLCJfb3JnYW5pemF0aW9uRGF0YSIsIm9yZ2FuaXphdGlvbiIsInNldFByZXZpZXdJbWFnZSIsIl9hY3Rpdml0aWVzRGF0YSIsImFjdGl2aXRpZXMiLCJhY3Rpdml0aWVzX2ltYWdlIiwic2V0UHJldmlld1Zpc2libGUiLCJzZXRJbWFnZUxhbmRpbmdQYWdlIiwiaW1hZ2VVcGxvYWRwcm9wc0xvZ28iLCJtdWx0aXBsZSIsImxpc3RUeXBlIiwibWF4Q291bnQiLCJhY3Rpb24iLCJwcmV2aWV3IiwiY3VzdG9tUmVxdWVzdCIsIm9wdGlvbnMiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZpbGUiLCJ0eXBlX3VzZXIiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzIiwibGlzdCIsIl9uYW1lIiwib25TdWNjZXNzIiwiZXJyIiwib25DaGFuZ2UiLCJpbmZvIiwidXJsIiwiZ2V0QmFzZTY0Iiwib3JpZ2luRmlsZU9iaiIsIm9uUmVtb3ZlIiwicmVzZXRJbWFnZVByZXZpZXciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwicmVzdWx0Iiwib25lcnJvciIsInBhdGgiLCJicmVhZGNydW1iTmFtZSIsImhlaWdodCIsIndpZHRoIiwib2JqZWN0Rml0IiwicmVxdWlyZWQiLCJtaW5Sb3dzIiwibWF4Um93cyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwibWFyZ2luQm90dG9tIiwibWFyZ2luUmlnaHQiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdB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T0xDLFdBQUssRUFBRTtBQVBGLEtBSFQsQ0FZRTtBQVpGO0FBYUUsYUFBUyxFQUFDLDRJQWJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FlRSxNQUFDLElBQUQ7QUFBTSxhQUFTLEVBQUMsb0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBZkYsQ0FERixFQWtCRSxNQUFDLDJDQUFELENBQ0U7QUFERjtBQUVFLFNBQUssRUFBRTtBQUNMSixxQkFBZSxFQUFFLFNBRFo7QUFFTEMsaUJBQVcsRUFBRSxTQUZSO0FBR0xQLFlBQU0sRUFBRSxFQUhIO0FBSUxDLFdBQUssRUFBRSxHQUpGO0FBS0xPLGtCQUFZLEVBQUUsZ0JBTFQ7QUFNTEUsV0FBSyxFQUFFO0FBTkYsS0FGVDtBQVVFLFlBQVEsRUFBQyxRQVZYO0FBV0UsYUFBUyxFQUFDLDRJQVhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FhRSxNQUFDLElBQUQ7QUFBTSxhQUFTLEVBQUMsb0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBYkYsQ0FsQkYsQ0FERixDQURGLENBakdGLENBREYsQ0F4QkYsQ0FERjtBQXFLRDtBQUNEOztHQWxXd0J4SCxJO1VBQ09FLGlEQUFZLENBQUNDLGUsRUFFM0JNLHFELEVBNERBaUQseUNBQUksQ0FBQ0MsTzs7O01BL0RFM0QsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWRtaW5cXHNldHRpbmdcXHByb2ZpbGUuanMuYmYzMjEzY2E1NjUwMTEzZWQxZGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluYm94T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLCBGb3JtLCBJbWFnZSwgSW5wdXQsIG5vdGlmaWNhdGlvbiwgU2VsZWN0LCBUeXBvZ3JhcGh5LCBVcGxvYWRcclxufSBmcm9tICdhbnRkJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG4vLyBpbXBvcnQgVXNlck5hdiBmcm9tICcuLi9jb21wb25lbnRzL25hdmlnYXRpb24vVXNlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG4vKiBjb21wb25lbnRzICovXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0QWRtaW4nO1xyXG4vKiB1dGlscyAqL1xyXG5pbXBvcnQge1xyXG4gIGFic29sdXRlVXJsLCBhcGlJbnN0YW5jZVxyXG59IGZyb20gJy4uLy4uLy4uLy4uL21pZGRsZXdhcmUvdXRpbHMnO1xyXG5cclxuY29uc3QgSm9kaXRFZGl0b3IgPSBkeW5hbWljKCgpID0+IGltcG9ydChcImpvZGl0LXJlYWN0XCIpLCB7IHNzcjogZmFsc2UgfSk7XHJcbmNvbnN0IHsgVGV4dCwgVGl0bGUgfSA9IFR5cG9ncmFwaHk7XHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vLi4vY29uZmlnJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcbiAgY29uc3QgW2FwaSwgY29udGV4dEhvbGRlcl0gPSBub3RpZmljYXRpb24udXNlTm90aWZpY2F0aW9uKCk7XHJcbiAgY29uc3QgeyB1c2VyLCBvcmlnaW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgcHJvZmlsZUlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgW3Byb3ZpbmNlcywgc2V0UHJvdmluY2VzXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2Rpc3RyaWN0cywgc2V0RGlzdHJpY3RzXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3N1YkRpc3RyaWN0cywgc2V0U3ViRGlzdHJpY3RzXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3ByZXZpZXdJbWFnZUxvZ28sIHNldFByZXZpZXdJbWFnZUxvZ29dID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbaW1hZ2VMYW5kaW5nUGFnZUxvZ28sIHNldEltYWdlTGFuZGluZ1BhZ2VMb2dvXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3ByZXZpZXdWaXNpYmxlTG9nbywgc2V0UHJldmlld1Zpc2libGVMb2dvXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtsb2dvLCBzZXRMb2dvXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtmaWVsZHMsIHNldEZpZWxkc10gPSB1c2VTdGF0ZShbXHJcbiAgXSk7XHJcbiAgY29uc3QgW29yZ2FuaXphdGlvbkRhdGEsIHNldE9yZ2FuaXphdGlvbkRhdGFdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoT3JnYW5pemF0aW9uRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXRIYW5kbGVyKHZhbHVlKSB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBvcmdhbml6YXRpb25faWQ6IHVzZXIub3JnYW5pemF0aW9uX2lkLFxyXG4gICAgICBvcmdhbml6YXRpb25fbmFtZTogdmFsdWUub3JnYW5pemF0aW9uX25hbWUsXHJcbiAgICAgIG9yZ2FuaXphdGlvbl9uYW1lX2VuZzogdmFsdWUub3JnYW5pemF0aW9uX25hbWVfZW5nLFxyXG4gICAgICBvcmdhbml6YXRpb25fbG9nbzogaW1hZ2VMYW5kaW5nUGFnZUxvZ28sXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIGNvbnN0IG9yZ2FuaXphdGlvbkRhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLnB1dCgnL3Byb2ZpbGUnLCBkYXRhKTtcclxuICAgIGlmIChvcmdhbml6YXRpb25EYXRhLmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICBvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJTdWNjZXNzKCk7XHJcbiAgICAgIGZldGNoT3JnYW5pemF0aW9uRGF0YSgpO1xyXG4gICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIC8vU3RhcnQgdGhlIHRpbWVyXHJcbiAgICAgICAgICByb3V0ZXIucHVzaCgnL2FkbWluL3NldHRpbmcvcHJvZmlsZScpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSxcclxuICAgICAgICAyMDAwLFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbChvcmdhbml6YXRpb25EYXRhLmRhdGEubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyU3VjY2VzcyA9ICgpID0+IHtcclxuICAgIGFwaS5zdWNjZXNzKHtcclxuICAgICAgbWVzc2FnZTogYOC4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iGAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAn4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiI4LmB4Lil4LmJ4LinJyxcclxuICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbCA9IG1lc3NnYWUgPT4ge1xyXG4gICAgYXBpLmVycm9yKHtcclxuICAgICAgbWVzc2FnZTogYOC4nuC4muC4m+C4seC4jeC4q+C4suC4o+C4sOC4q+C4p+C5iOC4suC4h+C4geC4suC4o+C4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4pWAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBtZXNzZ2FlLFxyXG4gICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB7IERyYWdnZXIgfSA9IFVwbG9hZDtcclxuXHJcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcblxyXG4gIGNvbnN0IG9uUmVzZXQgPSAoKSA9PiB7XHJcbiAgICBzZXRGaWVsZHMoW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fbG9nbyddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9sb2dvLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fbmFtZSddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9uYW1lLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fbmFtZV9lbmcnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fbmFtZV9lbmcsXHJcbiAgICAgIH0sXHJcbiAgICBdKTtcclxuICAgIHNldFByZXZpZXdJbWFnZUxvZ28oJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICsgdXNlci5vcmdhbml6YXRpb25faWQgKyAnXFxcXG9yZ2FuaXphdGlvblxcXFwnICsgb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fbG9nbyk7XHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZUxvZ28odHJ1ZSk7XHJcbiAgICBzZXRJbWFnZUxhbmRpbmdQYWdlTG9nbyhvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9sb2dvKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaE9yZ2FuaXphdGlvbkRhdGEgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgX29yZ2FuaXphdGlvbkRhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ29yZ2FuaXphdGlvbi8nICsgKHVzZXIgPyB1c2VyLm9yZ2FuaXphdGlvbl9pZCA6IDApXHJcbiAgICApO1xyXG4gICAgc2V0T3JnYW5pemF0aW9uRGF0YShfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbilcclxuICAgIGlmIChfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fbG9nbykge1xyXG4gICAgICBzZXRQcmV2aWV3SW1hZ2VMb2dvKFxyXG4gICAgICAgICcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArXHJcbiAgICAgICAgdXNlci5vcmdhbml6YXRpb25faWQgK1xyXG4gICAgICAgICdcXFxcb3JnYW5pemF0aW9uXFxcXCcgK1xyXG4gICAgICAgIF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9sb2dvLFxyXG4gICAgICApXHJcbiAgICAgIHNldFByZXZpZXdWaXNpYmxlTG9nbyh0cnVlKVxyXG5cclxuXHJcblxyXG4gICAgc2V0UHJldmlld0ltYWdlKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArIHVzZXIub3JnYW5pemF0aW9uX2lkICsgJ1xcXFxhY3Rpdml0aWVzXFxcXCcgKyBfYWN0aXZpdGllc0RhdGEuZGF0YS5hY3Rpdml0aWVzLmFjdGl2aXRpZXNfaW1hZ2UpO1xyXG4gICAgc2V0UHJldmlld1Zpc2libGUodHJ1ZSk7XHJcbiAgICBzZXRJbWFnZUxhbmRpbmdQYWdlKF9hY3Rpdml0aWVzRGF0YS5kYXRhLmFjdGl2aXRpZXMuYWN0aXZpdGllc19pbWFnZSk7XHJcblxyXG5cclxuXHJcbiAgICBcclxuICAgIH1cclxuICAgIHNldEZpZWxkcyhbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9uYW1lJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9uYW1lID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX25hbWUgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9uYW1lX2VuZyddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fbmFtZV9lbmcgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fbmFtZV9lbmcgOiBcIlwiXHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgXSlcclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3QgaW1hZ2VVcGxvYWRwcm9wc0xvZ28gPSB7XHJcbiAgICBuYW1lOiAnZmlsZScsXHJcbiAgICBtdWx0aXBsZTogZmFsc2UsXHJcbiAgICBsaXN0VHlwZTogJ3RleHQnLFxyXG4gICAgbWF4Q291bnQ6IDEsXHJcbiAgICBhY3Rpb246IFwiL2FwaS91cGxvYWQvb3JnYW5pemF0aW9uXCIsXHJcbiAgICBwcmV2aWV3OiBmYWxzZSxcclxuICAgIGN1c3RvbVJlcXVlc3Q6IChvcHRpb25zKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgZGF0YS5hcHBlbmQoJ2lkJywgdXNlci50eXBlX3VzZXIgPT0gMSA/IFwiYWRtaW5cIiA6IHVzZXIub3JnYW5pemF0aW9uX2lkKVxyXG4gICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgXCJoZWFkZXJzXCI6IHtcclxuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6ICdtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0tLS0tV2ViS2l0Rm9ybUJvdW5kYXJ5cVRxSkl4dmtXRllxdlA1cydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYXhpb3MucG9zdChvcHRpb25zLmFjdGlvbiwgZGF0YSwgY29uZmlnKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRJbWFnZUxhbmRpbmdQYWdlTG9nbyhyZXMuZGF0YS5kYXRhLmxpc3RbMF0uX25hbWUpXHJcbiAgICAgICAgb3B0aW9ucy5vblN1Y2Nlc3MocmVzLmRhdGEsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgfSlcclxuXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgb25DaGFuZ2UoaW5mbykge1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gaW5mby5maWxlXHJcbiAgICAgIHN3aXRjaCAoaW5mby5maWxlLnN0YXR1cykge1xyXG4gICAgICAgIGNhc2UgXCJkb25lXCI6XHJcbiAgICAgICAgICBpZiAoIWluZm8uZmlsZS51cmwgJiYgIWluZm8uZmlsZS5wcmV2aWV3KSB7XHJcbiAgICAgICAgICAgIGluZm8uZmlsZS5wcmV2aWV3ID0gYXdhaXQgZ2V0QmFzZTY0KGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFByZXZpZXdJbWFnZUxvZ28oaW5mby5maWxlLnVybCB8fCBpbmZvLmZpbGUucHJldmlldylcclxuICAgICAgICAgIHNldFByZXZpZXdWaXNpYmxlTG9nbyh0cnVlKVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgLy8gZXJyb3Igb3IgcmVtb3ZlZFxyXG4gICAgICAgIC8vIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBvblJlbW92ZShpbmZvKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwib25SZW1vdmVcIilcclxuICAgICAgY29uc29sZS5sb2coaW5mbylcclxuICAgICAgcmVzZXRJbWFnZVByZXZpZXcoKVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc2V0SW1hZ2VQcmV2aWV3ID0gKCkgPT4ge1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVMb2dvKGZhbHNlKTtcclxuICAgIHNldFByZXZpZXdJbWFnZUxvZ28obnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0QmFzZTY0KGZpbGUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcclxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBlcnJvciA9PiByZWplY3QoZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dFxyXG4gICAgICB0aXRsZT1cIkdvdmVybm1lbnQgLSBBZG1pbiBtYW5hZ2VtZW50XCJcclxuICAgICAgdXJsPXtvcmlnaW59XHJcbiAgICAgIG9yaWdpbj17b3JpZ2lufVxyXG4gICAgICAvLyB1c2VyPXtsb2dpbn1cclxuICAgICAgaW5kZXhTdWJNZW51PXtcIjZcIn1cclxuICAgICAgaW5kZXhNZW51PXtcInN1Yi02LTBcIn1cclxuICAgICAgdGl0bGVQYWdlPVwi4LiC4LmJ4Lit4Lih4Li54Lil4Lit4LiH4LiE4LmM4LiB4LijXCJcclxuICAgICAgX3JvdXRlcz17W1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhdGg6ICcvYWRtaW4vZGFzaGJvcmFkJyxcclxuICAgICAgICAgIGJyZWFkY3J1bWJOYW1lOiAn4Lir4LiZ4LmJ4Liy4Lir4Lil4Lix4LiBJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhdGg6ICcvYWRtaW4vc2V0dGluZy9wcm9maWxlJyxcclxuICAgICAgICAgIGJyZWFkY3J1bWJOYW1lOiAn4LiC4LmJ4Lit4Lih4Li54Lil4Lit4LiH4LiE4LmM4LiB4LijJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdfVxyXG4gICAgPlxyXG4gICAgICB7Y29udGV4dEhvbGRlcn1cclxuICAgICAgPGxpbmtcclxuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vcmVhY3QtcXVpbGxAMS4zLjMvZGlzdC9xdWlsbC5zbm93LmNzc1wiXHJcbiAgICAgID48L2xpbms+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy01LzYgbGc6dy1mdWxsIG14LWF1dG9cIj5cclxuICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgbmFtZT1cImJhc2ljXCJcclxuICAgICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICAgIG9uRmluaXNoPXtvblN1Ym1pdEhhbmRsZXJ9XHJcbiAgICAgICAgICByZXF1aXJlZE1hcms9e3RydWV9XHJcbiAgICAgICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICAgICAgZmllbGRzPXtmaWVsZHN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBsZzp3LTEvNiAgcHItMlwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJvcmdhbml6YXRpb25fbG9nb1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1hdXRvIGgtYXV0byB0ZXh0LWNlbnRlciB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LmA4Lil4Li34Lit4LiB4Lig4Liy4LieIExvZ28g4Lit4LiH4LiE4LmM4LiB4LijJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7LyogPERyYWdnZXIgey4uLmRyb3BpbWd9PiAqL31cclxuICAgICAgICAgICAgICAgIDxEcmFnZ2VyXHJcbiAgICAgICAgICAgICAgICAgIG1heENvdW50PXsxfVxyXG4gICAgICAgICAgICAgICAgICAvLyBsaXN0VHlwZT1cInBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAuanBlZywgLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIHsuLi5pbWFnZVVwbG9hZHByb3BzTG9nb31cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtwcmV2aWV3VmlzaWJsZUxvZ28gJiYgPD48SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJldmlld0ltYWdlTG9nb31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTE2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4LiE4Lil4Li04LiBIOC4q+C4o+C4t+C4rSDguKXguLLguIHguYTguJ/guKXguYzguKHguLLguJfguLXguYjguJrguKPguLTguYDguKfguJPguJnguLXguYnguYDguJ7guLfguYjguK3guK3guLHguJvguYLguKvguKXguJQgTG9nbyDguK3guIfguITguYzguIHguKNcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHshcHJldmlld1Zpc2libGVMb2dvICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC1kcmFnLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbmJveE91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4LiE4Lil4Li04LiBIOC4q+C4o+C4t+C4rSDguKXguLLguIHguYTguJ/guKXguYzguKHguLLguJfguLXguYjguJrguKPguLTguYDguKfguJPguJnguLXguYnguYDguJ7guLfguYjguK3guK3guLHguJvguYLguKvguKXguJQgTG9nbyDguK3guIfguITguYzguIHguKNcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0RyYWdnZXI+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctNS82IFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJvcmdhbml6YXRpb25fbmFtZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4iuC4t+C5iOC4reC4q+C4meC5iOC4p+C4ouC4h+C4suC4mVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZJyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguIrguLfguYjguK3guKvguJnguYjguKfguKLguIfguLLguJlcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm9yZ2FuaXphdGlvbl9uYW1lX2VuZ1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4iuC4t+C5iOC4reC4q+C4meC5iOC4p+C4ouC4h+C4suC4mSDguKDguLLguKnguLLguK3guLHguIfguIHguKTguKlcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guKvguJnguYjguKfguKLguIfguLLguJnguKDguLLguKnguLLguK3guLHguIfguIHguKTguKknLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiK4Li34LmI4Lit4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZIOC4oOC4suC4qeC4suC4reC4seC4h+C4geC4pOC4qVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gY2xhc3NOYW1lPVwiZmxleCBtdC02XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBsZzp0ZXh0LXJpZ2h0IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBodG1sVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVzZXR9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0MyQ0ZFMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQzJDRkUwJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMHB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvLyBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHctZnVsbCBsZzp3LTEvNFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRleHQtY3VzdG9tLWJsYWNrIFwiPuC4o+C4teC5gOC4i+C5h+C4lzwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAvLyB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzA1OTY2OScsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMDU5NjY5JyxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMHB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUgIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdy1mdWxsIGxnOnctMS80XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGV4dC1jdXN0b20td2hpdGUgXCI+4Lia4Lix4LiZ4LiX4Li24LiBPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuLyogZ2V0U2VydmVyU2lkZVByb3BzICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgcmVxIH0gPSBjb250ZXh0O1xyXG4gIGNvbnN0IHsgb3JpZ2luIH0gPSBhYnNvbHV0ZVVybChyZXEpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgb3JpZ2luLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=