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
              setPreviewImageLogo("..\\..\\..\\uploads\\c-" + user.organization_id + '\\organization\\' + _organizationData.data.organization.organization_logo);
              setPreviewVisibleLogo(true);
              setImageLandingPageLogo(_organizationData.data.activities.organization_logo);
              setFields([{
                name: ['organization_name'],
                value: _organizationData.data.organization.organization_name ? _organizationData.data.organization.organization_name : ""
              }, {
                name: ['organization_name_eng'],
                value: _organizationData.data.organization.organization_name_eng ? _organizationData.data.organization.organization_name_eng : ""
              }]);

            case 8:
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
      lineNumber: 198,
      columnNumber: 5
    }
  }, contextHolder, __jsx("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "w-5/6 lg:w-full mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
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
      lineNumber: 223,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inline-flex lg:w-1/6  pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
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
      lineNumber: 233,
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
      lineNumber: 244,
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
      lineNumber: 252,
      columnNumber: 44
    }
  }), __jsx("p", {
    className: "text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 Logo \u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23")), !previewVisibleLogo && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 Logo \u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23"))))), __jsx("div", {
    className: "lg:w-5/6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
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
      lineNumber: 280,
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
      lineNumber: 291,
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
      lineNumber: 299,
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
      lineNumber: 310,
      columnNumber: 17
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    className: "flex mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "text-center lg:text-right w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
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
      lineNumber: 323,
      columnNumber: 17
    }
  }, __jsx(Text, {
    className: "text-custom-black ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
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
      lineNumber: 340,
      columnNumber: 17
    }
  }, __jsx(Text, {
    className: "text-custom-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9zZXR0aW5nL3Byb2ZpbGUvaW5kZXguanMiXSwibmFtZXMiOlsiSm9kaXRFZGl0b3IiLCJkeW5hbWljIiwic3NyIiwiVGV4dCIsIlR5cG9ncmFwaHkiLCJUaXRsZSIsIk9wdGlvbiIsIlNlbGVjdCIsIlRleHRBcmVhIiwiSW5wdXQiLCJjb25maWciLCJyZXF1aXJlIiwiSG9tZSIsInByb3BzIiwibm90aWZpY2F0aW9uIiwidXNlTm90aWZpY2F0aW9uIiwiYXBpIiwiY29udGV4dEhvbGRlciIsInVzZXIiLCJvcmlnaW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwcm9maWxlSWQiLCJxdWVyeSIsInVzZVN0YXRlIiwicHJvdmluY2VzIiwic2V0UHJvdmluY2VzIiwiZGlzdHJpY3RzIiwic2V0RGlzdHJpY3RzIiwic3ViRGlzdHJpY3RzIiwic2V0U3ViRGlzdHJpY3RzIiwicHJldmlld0ltYWdlTG9nbyIsInNldFByZXZpZXdJbWFnZUxvZ28iLCJpbWFnZUxhbmRpbmdQYWdlTG9nbyIsInNldEltYWdlTGFuZGluZ1BhZ2VMb2dvIiwicHJldmlld1Zpc2libGVMb2dvIiwic2V0UHJldmlld1Zpc2libGVMb2dvIiwibG9nbyIsInNldExvZ28iLCJmaWVsZHMiLCJzZXRGaWVsZHMiLCJvcmdhbml6YXRpb25EYXRhIiwic2V0T3JnYW5pemF0aW9uRGF0YSIsInVzZUVmZmVjdCIsImZldGNoT3JnYW5pemF0aW9uRGF0YSIsIm9uU3VibWl0SGFuZGxlciIsInZhbHVlIiwiZGF0YSIsIm9yZ2FuaXphdGlvbl9pZCIsIm9yZ2FuaXphdGlvbl9uYW1lIiwib3JnYW5pemF0aW9uX25hbWVfZW5nIiwib3JnYW5pemF0aW9uX2xvZ28iLCJjb25zb2xlIiwibG9nIiwiYXBpSW5zdGFuY2UiLCJwdXQiLCJzdGF0dXMiLCJvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJTdWNjZXNzIiwic2V0VGltZW91dCIsInB1c2giLCJiaW5kIiwib3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbCIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZGVzY3JpcHRpb24iLCJwbGFjZW1lbnQiLCJtZXNzZ2FlIiwiZXJyb3IiLCJEcmFnZ2VyIiwiVXBsb2FkIiwiRm9ybSIsInVzZUZvcm0iLCJmb3JtIiwib25SZXNldCIsIm5hbWUiLCJnZXQiLCJfb3JnYW5pemF0aW9uRGF0YSIsIm9yZ2FuaXphdGlvbiIsImFjdGl2aXRpZXMiLCJpbWFnZVVwbG9hZHByb3BzTG9nbyIsIm11bHRpcGxlIiwibGlzdFR5cGUiLCJtYXhDb3VudCIsImFjdGlvbiIsInByZXZpZXciLCJjdXN0b21SZXF1ZXN0Iiwib3B0aW9ucyIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZmlsZSIsInR5cGVfdXNlciIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXMiLCJsaXN0IiwiX25hbWUiLCJvblN1Y2Nlc3MiLCJlcnIiLCJvbkNoYW5nZSIsImluZm8iLCJ1cmwiLCJnZXRCYXNlNjQiLCJvcmlnaW5GaWxlT2JqIiwib25SZW1vdmUiLCJyZXNldEltYWdlUHJldmlldyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJyZXN1bHQiLCJvbmVycm9yIiwicGF0aCIsImJyZWFkY3J1bWJOYW1lIiwiaGVpZ2h0Iiwid2lkdGgiLCJvYmplY3RGaXQiLCJyZXF1aXJlZCIsIm1pblJvd3MiLCJtYXhSb3dzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5SaWdodCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUlBLElBQU1BLFdBQVcsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sd0pBQU47QUFBQSxDQUFE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LEVBQUUsZ0JBTFQ7QUFNTEUsV0FBSyxFQUFFO0FBTkYsS0FGVDtBQVVFLFlBQVEsRUFBQyxRQVZYO0FBV0UsYUFBUyxFQUFDLDRJQVhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FhRSxNQUFDLElBQUQ7QUFBTSxhQUFTLEVBQUMsb0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBYkYsQ0FsQkYsQ0FERixDQURGLENBakdGLENBREYsQ0F4QkYsQ0FERjtBQXFLRDtBQUNEOztHQW5Wd0JuSCxJO1VBQ09FLGlEQUFZLENBQUNDLGUsRUFFM0JNLHFELEVBNERBaUQseUNBQUksQ0FBQ0MsTzs7O01BL0RFM0QsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWRtaW5cXHNldHRpbmdcXHByb2ZpbGUuanMuMjg5NmQxOGQ5NGNlMTU3MmQ0OWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluYm94T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLCBGb3JtLCBJbWFnZSwgSW5wdXQsIG5vdGlmaWNhdGlvbiwgU2VsZWN0LCBUeXBvZ3JhcGh5LCBVcGxvYWRcclxufSBmcm9tICdhbnRkJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG4vLyBpbXBvcnQgVXNlck5hdiBmcm9tICcuLi9jb21wb25lbnRzL25hdmlnYXRpb24vVXNlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG4vKiBjb21wb25lbnRzICovXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0QWRtaW4nO1xyXG4vKiB1dGlscyAqL1xyXG5pbXBvcnQge1xyXG4gIGFic29sdXRlVXJsLCBhcGlJbnN0YW5jZVxyXG59IGZyb20gJy4uLy4uLy4uLy4uL21pZGRsZXdhcmUvdXRpbHMnO1xyXG5cclxuY29uc3QgSm9kaXRFZGl0b3IgPSBkeW5hbWljKCgpID0+IGltcG9ydChcImpvZGl0LXJlYWN0XCIpLCB7IHNzcjogZmFsc2UgfSk7XHJcbmNvbnN0IHsgVGV4dCwgVGl0bGUgfSA9IFR5cG9ncmFwaHk7XHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vLi4vY29uZmlnJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcbiAgY29uc3QgW2FwaSwgY29udGV4dEhvbGRlcl0gPSBub3RpZmljYXRpb24udXNlTm90aWZpY2F0aW9uKCk7XHJcbiAgY29uc3QgeyB1c2VyLCBvcmlnaW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgcHJvZmlsZUlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgW3Byb3ZpbmNlcywgc2V0UHJvdmluY2VzXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2Rpc3RyaWN0cywgc2V0RGlzdHJpY3RzXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3N1YkRpc3RyaWN0cywgc2V0U3ViRGlzdHJpY3RzXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3ByZXZpZXdJbWFnZUxvZ28sIHNldFByZXZpZXdJbWFnZUxvZ29dID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbaW1hZ2VMYW5kaW5nUGFnZUxvZ28sIHNldEltYWdlTGFuZGluZ1BhZ2VMb2dvXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3ByZXZpZXdWaXNpYmxlTG9nbywgc2V0UHJldmlld1Zpc2libGVMb2dvXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtsb2dvLCBzZXRMb2dvXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtmaWVsZHMsIHNldEZpZWxkc10gPSB1c2VTdGF0ZShbXHJcbiAgXSk7XHJcbiAgY29uc3QgW29yZ2FuaXphdGlvbkRhdGEsIHNldE9yZ2FuaXphdGlvbkRhdGFdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoT3JnYW5pemF0aW9uRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXRIYW5kbGVyKHZhbHVlKSB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBvcmdhbml6YXRpb25faWQ6IHVzZXIub3JnYW5pemF0aW9uX2lkLFxyXG4gICAgICBvcmdhbml6YXRpb25fbmFtZTogdmFsdWUub3JnYW5pemF0aW9uX25hbWUsXHJcbiAgICAgIG9yZ2FuaXphdGlvbl9uYW1lX2VuZzogdmFsdWUub3JnYW5pemF0aW9uX25hbWVfZW5nLFxyXG4gICAgICBvcmdhbml6YXRpb25fbG9nbzogaW1hZ2VMYW5kaW5nUGFnZUxvZ28sXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIGNvbnN0IG9yZ2FuaXphdGlvbkRhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLnB1dCgnL3Byb2ZpbGUnLCBkYXRhKTtcclxuICAgIGlmIChvcmdhbml6YXRpb25EYXRhLmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICBvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJTdWNjZXNzKCk7XHJcbiAgICAgIGZldGNoT3JnYW5pemF0aW9uRGF0YSgpO1xyXG4gICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIC8vU3RhcnQgdGhlIHRpbWVyXHJcbiAgICAgICAgICByb3V0ZXIucHVzaCgnL2FkbWluL3NldHRpbmcvcHJvZmlsZScpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSxcclxuICAgICAgICAyMDAwLFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbChvcmdhbml6YXRpb25EYXRhLmRhdGEubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyU3VjY2VzcyA9ICgpID0+IHtcclxuICAgIGFwaS5zdWNjZXNzKHtcclxuICAgICAgbWVzc2FnZTogYOC4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iGAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAn4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiI4LmB4Lil4LmJ4LinJyxcclxuICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbCA9IG1lc3NnYWUgPT4ge1xyXG4gICAgYXBpLmVycm9yKHtcclxuICAgICAgbWVzc2FnZTogYOC4nuC4muC4m+C4seC4jeC4q+C4suC4o+C4sOC4q+C4p+C5iOC4suC4h+C4geC4suC4o+C4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4pWAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBtZXNzZ2FlLFxyXG4gICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB7IERyYWdnZXIgfSA9IFVwbG9hZDtcclxuXHJcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcblxyXG4gIGNvbnN0IG9uUmVzZXQgPSAoKSA9PiB7XHJcbiAgICBzZXRGaWVsZHMoW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fbG9nbyddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9sb2dvLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fbmFtZSddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9uYW1lLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fbmFtZV9lbmcnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fbmFtZV9lbmcsXHJcbiAgICAgIH0sXHJcbiAgICBdKTtcclxuICAgIHNldFByZXZpZXdJbWFnZUxvZ28oJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICsgdXNlci5vcmdhbml6YXRpb25faWQgKyAnXFxcXG9yZ2FuaXphdGlvblxcXFwnICsgb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fbG9nbyk7XHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZUxvZ28odHJ1ZSk7XHJcbiAgICBzZXRJbWFnZUxhbmRpbmdQYWdlTG9nbyhvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9sb2dvKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaE9yZ2FuaXphdGlvbkRhdGEgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgX29yZ2FuaXphdGlvbkRhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ29yZ2FuaXphdGlvbi8nICsgKHVzZXIgPyB1c2VyLm9yZ2FuaXphdGlvbl9pZCA6IDApXHJcbiAgICApO1xyXG4gICAgc2V0T3JnYW5pemF0aW9uRGF0YShfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbilcclxuXHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VMb2dvKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArIHVzZXIub3JnYW5pemF0aW9uX2lkICsgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArIF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9sb2dvKTtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlTG9nbyh0cnVlKTtcclxuICAgIHNldEltYWdlTGFuZGluZ1BhZ2VMb2dvKF9vcmdhbml6YXRpb25EYXRhLmRhdGEuYWN0aXZpdGllcy5vcmdhbml6YXRpb25fbG9nbyk7XHJcbiAgICBzZXRGaWVsZHMoW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fbmFtZSddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fbmFtZSA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9uYW1lIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fbmFtZV9lbmcnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX25hbWVfZW5nID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX25hbWVfZW5nIDogXCJcIlxyXG4gICAgICB9XHJcblxyXG5cclxuICAgIF0pXHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0IGltYWdlVXBsb2FkcHJvcHNMb2dvID0ge1xyXG4gICAgbmFtZTogJ2ZpbGUnLFxyXG4gICAgbXVsdGlwbGU6IGZhbHNlLFxyXG4gICAgbGlzdFR5cGU6ICd0ZXh0JyxcclxuICAgIG1heENvdW50OiAxLFxyXG4gICAgYWN0aW9uOiBcIi9hcGkvdXBsb2FkL29yZ2FuaXphdGlvblwiLFxyXG4gICAgcHJldmlldzogZmFsc2UsXHJcbiAgICBjdXN0b21SZXF1ZXN0OiAob3B0aW9ucykgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdpZCcsIHVzZXIudHlwZV91c2VyID09IDEgPyBcImFkbWluXCIgOiB1c2VyLm9yZ2FuaXphdGlvbl9pZClcclxuICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgIFwiaGVhZGVyc1wiOiB7XHJcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9LS0tLVdlYktpdEZvcm1Cb3VuZGFyeXFUcUpJeHZrV0ZZcXZQNXMnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGF4aW9zLnBvc3Qob3B0aW9ucy5hY3Rpb24sIGRhdGEsIGNvbmZpZykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0SW1hZ2VMYW5kaW5nUGFnZUxvZ28ocmVzLmRhdGEuZGF0YS5saXN0WzBdLl9uYW1lKVxyXG4gICAgICAgIG9wdGlvbnMub25TdWNjZXNzKHJlcy5kYXRhLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfSxcclxuICAgIGFzeW5jIG9uQ2hhbmdlKGluZm8pIHtcclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGluZm8uZmlsZVxyXG4gICAgICBzd2l0Y2ggKGluZm8uZmlsZS5zdGF0dXMpIHtcclxuICAgICAgICBjYXNlIFwiZG9uZVwiOlxyXG4gICAgICAgICAgaWYgKCFpbmZvLmZpbGUudXJsICYmICFpbmZvLmZpbGUucHJldmlldykge1xyXG4gICAgICAgICAgICBpbmZvLmZpbGUucHJldmlldyA9IGF3YWl0IGdldEJhc2U2NChpbmZvLmZpbGUub3JpZ2luRmlsZU9iaik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRQcmV2aWV3SW1hZ2VMb2dvKGluZm8uZmlsZS51cmwgfHwgaW5mby5maWxlLnByZXZpZXcpXHJcbiAgICAgICAgICBzZXRQcmV2aWV3VmlzaWJsZUxvZ28odHJ1ZSlcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIC8vIGVycm9yIG9yIHJlbW92ZWRcclxuICAgICAgICAvLyByZXNldEltYWdlUHJldmlldygpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgb25SZW1vdmUoaW5mbykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9uUmVtb3ZlXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXNldEltYWdlUHJldmlldyA9ICgpID0+IHtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlTG9nbyhmYWxzZSk7XHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VMb2dvKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGdldEJhc2U2NChmaWxlKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgIHJlYWRlci5vbmVycm9yID0gZXJyb3IgPT4gcmVqZWN0KGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXRcclxuICAgICAgdGl0bGU9XCJHb3Zlcm5tZW50IC0gQWRtaW4gbWFuYWdlbWVudFwiXHJcbiAgICAgIHVybD17b3JpZ2lufVxyXG4gICAgICBvcmlnaW49e29yaWdpbn1cclxuICAgICAgLy8gdXNlcj17bG9naW59XHJcbiAgICAgIGluZGV4U3ViTWVudT17XCI2XCJ9XHJcbiAgICAgIGluZGV4TWVudT17XCJzdWItNi0wXCJ9XHJcbiAgICAgIHRpdGxlUGFnZT1cIuC4guC5ieC4reC4oeC4ueC4peC4reC4h+C4hOC5jOC4geC4o1wiXHJcbiAgICAgIF9yb3V0ZXM9e1tcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYXRoOiAnL2FkbWluL2Rhc2hib3JhZCcsXHJcbiAgICAgICAgICBicmVhZGNydW1iTmFtZTogJ+C4q+C4meC5ieC4suC4q+C4peC4seC4gScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYXRoOiAnL2FkbWluL3NldHRpbmcvcHJvZmlsZScsXHJcbiAgICAgICAgICBicmVhZGNydW1iTmFtZTogJ+C4guC5ieC4reC4oeC4ueC4peC4reC4h+C4hOC5jOC4geC4oycsXHJcbiAgICAgICAgfSxcclxuICAgICAgXX1cclxuICAgID5cclxuICAgICAge2NvbnRleHRIb2xkZXJ9XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3JlYWN0LXF1aWxsQDEuMy4zL2Rpc3QvcXVpbGwuc25vdy5jc3NcIlxyXG4gICAgICA+PC9saW5rPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNS82IGxnOnctZnVsbCBteC1hdXRvXCI+XHJcbiAgICAgICAgPEZvcm1cclxuICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXHJcbiAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICBvbkZpbmlzaD17b25TdWJtaXRIYW5kbGVyfVxyXG4gICAgICAgICAgcmVxdWlyZWRNYXJrPXt0cnVlfVxyXG4gICAgICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgICAgIGZpZWxkcz17ZmllbGRzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggbGc6dy0xLzYgIHByLTJcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwib3JnYW5pemF0aW9uX2xvZ29cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctYXV0byBoLWF1dG8gdGV4dC1jZW50ZXIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC5gOC4peC4t+C4reC4geC4oOC4suC4niBMb2dvIOC4reC4h+C4hOC5jOC4geC4oycsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgey8qIDxEcmFnZ2VyIHsuLi5kcm9waW1nfT4gKi99XHJcbiAgICAgICAgICAgICAgICA8RHJhZ2dlclxyXG4gICAgICAgICAgICAgICAgICBtYXhDb3VudD17MX1cclxuICAgICAgICAgICAgICAgICAgLy8gbGlzdFR5cGU9XCJwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLmpwZWcsIC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICB7Li4uaW1hZ2VVcGxvYWRwcm9wc0xvZ299XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7cHJldmlld1Zpc2libGVMb2dvICYmIDw+PEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3ByZXZpZXdJbWFnZUxvZ299XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzExNnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcidcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIOC4hOC4peC4tOC4gSDguKvguKPguLfguK0g4Lil4Liy4LiB4LmE4Lif4Lil4LmM4Lih4Liy4LiX4Li14LmI4Lia4Lij4Li04LmA4Lin4LiT4LiZ4Li14LmJ4LmA4Lie4Li34LmI4Lit4Lit4Lix4Lib4LmC4Lir4Lil4LiUIExvZ28g4Lit4LiH4LiE4LmM4LiB4LijXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB7IXByZXZpZXdWaXNpYmxlTG9nbyAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtZHJhZy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5ib3hPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIOC4hOC4peC4tOC4gSDguKvguKPguLfguK0g4Lil4Liy4LiB4LmE4Lif4Lil4LmM4Lih4Liy4LiX4Li14LmI4Lia4Lij4Li04LmA4Lin4LiT4LiZ4Li14LmJ4LmA4Lie4Li34LmI4Lit4Lit4Lix4Lib4LmC4Lir4Lil4LiUIExvZ28g4Lit4LiH4LiE4LmM4LiB4LijXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9EcmFnZ2VyPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTUvNiBcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwib3JnYW5pemF0aW9uX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguIrguLfguYjguK3guKvguJnguYjguKfguKLguIfguLLguJlcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4q+C4meC5iOC4p+C4ouC4h+C4suC4mScsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiK4Li34LmI4Lit4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJvcmdhbml6YXRpb25fbmFtZV9lbmdcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguIrguLfguYjguK3guKvguJnguYjguKfguKLguIfguLLguJkg4Lig4Liy4Lip4Liy4Lit4Lix4LiH4LiB4Lik4LipXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZ4Lig4Liy4Lip4Liy4Lit4Lix4LiH4LiB4Lik4LipJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC4q+C4meC5iOC4p+C4ouC4h+C4suC4mSDguKDguLLguKnguLLguK3guLHguIfguIHguKTguKlcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIGNsYXNzTmFtZT1cImZsZXggbXQtNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbGc6dGV4dC1yaWdodCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlc2V0fVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNDMkNGRTAnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0MyQ0ZFMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzBweCAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLy8gaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSB3LWZ1bGwgbGc6dy0xLzRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbS1ibGFjayBcIj7guKPguLXguYDguIvguYfguJc8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgLy8gdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwNTk2NjknLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzA1OTY2OScsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzBweCAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHctZnVsbCBsZzp3LTEvNFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRleHQtY3VzdG9tLXdoaXRlIFwiPuC4muC4seC4meC4l+C4tuC4gTwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcbi8qIGdldFNlcnZlclNpZGVQcm9wcyAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHJlcSB9ID0gY29udGV4dDtcclxuICBjb25zdCB7IG9yaWdpbiB9ID0gYWJzb2x1dGVVcmwocmVxKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG9yaWdpbixcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9