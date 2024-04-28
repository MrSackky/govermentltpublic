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
    _onSubmitHandler = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(value) {
      var data, organizationData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              data = {
                organization_id: user.organization_id,
                organization_name: value.organization_name,
                organization_name_eng: value.organization_name_eng,
                organization_logo: imageLandingPageLogo
              };
              console.log(data);
              _context6.next = 4;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_11__["apiInstance"])().put('/profile', data);

            case 4:
              organizationData = _context6.sent;

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
              return _context6.stop();
          }
        }
      }, _callee6, this);
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
      return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
        var status;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                status = info.file.status;
                _context3.t0 = info.file.status;
                _context3.next = _context3.t0 === "done" ? 4 : 11;
                break;

              case 4:
                if (!(!info.file.url && !info.file.preview)) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 7;
                return getBase64(info.file.originFileObj);

              case 7:
                info.file.preview = _context3.sent;

              case 8:
                setPreviewImagePerson1(info.file.url || info.file.preview);
                setPreviewVisiblePerson1(true);
                return _context3.abrupt("break", 11);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
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
      return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
        var status;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                status = info.file.status;
                _context4.t0 = info.file.status;
                _context4.next = _context4.t0 === "done" ? 4 : 11;
                break;

              case 4:
                if (!(!info.file.url && !info.file.preview)) {
                  _context4.next = 8;
                  break;
                }

                _context4.next = 7;
                return getBase64(info.file.originFileObj);

              case 7:
                info.file.preview = _context4.sent;

              case 8:
                setPreviewImagePerson2(info.file.url || info.file.preview);
                setPreviewVisiblePerson2(true);
                return _context4.abrupt("break", 11);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
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
      return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
        var status;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                status = info.file.status;
                _context5.t0 = info.file.status;
                _context5.next = _context5.t0 === "done" ? 4 : 11;
                break;

              case 4:
                if (!(!info.file.url && !info.file.preview)) {
                  _context5.next = 8;
                  break;
                }

                _context5.next = 7;
                return getBase64(info.file.originFileObj);

              case 7:
                info.file.preview = _context5.sent;

              case 8:
                setPreviewImagePerson3(info.file.url || info.file.preview);
                setPreviewVisiblePerson3(true);
                return _context5.abrupt("break", 11);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
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
      lineNumber: 354,
      columnNumber: 5
    }
  }, contextHolder, __jsx("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "w-5/6 lg:w-full mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
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
      lineNumber: 379,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inline-flex lg:w-1/6  pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
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
      lineNumber: 389,
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
      lineNumber: 400,
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
      lineNumber: 408,
      columnNumber: 44
    }
  }), __jsx("p", {
    className: "text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 Logo \u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23")), !previewVisibleLogo && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 Logo \u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23"))))), __jsx("div", {
    className: "lg:w-5/6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
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
      lineNumber: 436,
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
      lineNumber: 447,
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
      lineNumber: 455,
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
      lineNumber: 466,
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
      lineNumber: 476,
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
      lineNumber: 487,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "lg:inline-flex lg:w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-full lg:w-1/3 mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
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
      lineNumber: 497,
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
      lineNumber: 510,
      columnNumber: 17
    }
  }, __jsx(Option, {
    value: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 19
    }
  }, "\u0E40\u0E25\u0E37\u0E2D\u0E01"), provinces ? provinces.map(function (object) {
    return __jsx(Option, {
      value: object.province_id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 519,
        columnNumber: 28
      }
    }, object.province_name, "  ");
  }) : ""))), __jsx("div", {
    className: "w-full lg:w-1/3 lg:mx-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
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
      lineNumber: 525,
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
      lineNumber: 538,
      columnNumber: 17
    }
  }, __jsx(Option, {
    value: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 19
    }
  }, "\u0E40\u0E25\u0E37\u0E2D\u0E01"), districts ? districts.map(function (object) {
    return __jsx(Option, {
      value: object.district_id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 548,
        columnNumber: 28
      }
    }, object.district_name, "  ");
  }) : ""))), __jsx("div", {
    className: "w-full lg:w-1/3 lg:ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
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
      lineNumber: 554,
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
      lineNumber: 567,
      columnNumber: 17
    }
  }, __jsx(Option, {
    value: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574,
      columnNumber: 19
    }
  }, "\u0E40\u0E25\u0E37\u0E2D\u0E01"), subDistricts ? subDistricts.map(function (object) {
    return __jsx(Option, {
      value: object.sub_district_id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 576,
        columnNumber: 28
      }
    }, object.sub_district_name, "  ");
  }) : "")))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
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
      lineNumber: 584,
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
      lineNumber: 595,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604,
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
      lineNumber: 605,
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
      lineNumber: 616,
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627,
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
      lineNumber: 628,
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
      lineNumber: 639,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 648,
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
      lineNumber: 649,
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
      lineNumber: 660,
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 670,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671,
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
      lineNumber: 672,
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
      lineNumber: 683,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 692,
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
      lineNumber: 693,
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
      lineNumber: 704,
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
      lineNumber: 714,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 722,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inline-flex lg:w-1/6 pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
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
      lineNumber: 724,
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
      lineNumber: 735,
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
      lineNumber: 742,
      columnNumber: 47
    }
  }), __jsx("p", {
    className: "text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 751,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 1")), !previewVisiblePerson1 && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 757,
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 758,
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 760,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 1"))))), __jsx("div", {
    className: "lg:w-5/6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 768,
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
      lineNumber: 769,
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
      lineNumber: 780,
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
      lineNumber: 788,
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
      lineNumber: 799,
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
      lineNumber: 807,
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
      lineNumber: 818,
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 828,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inline-flex lg:w-1/6 pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 829,
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
      lineNumber: 830,
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
      lineNumber: 841,
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
      lineNumber: 848,
      columnNumber: 47
    }
  }), __jsx("p", {
    className: "text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 858,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 2")), !previewVisiblePerson2 && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 864,
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 865,
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 867,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 2"))))), __jsx("div", {
    className: "lg:w-5/6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 875,
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
      lineNumber: 876,
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
      lineNumber: 887,
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
      lineNumber: 895,
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
      lineNumber: 906,
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
      lineNumber: 914,
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
      lineNumber: 925,
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 935,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inline-flex lg:w-1/6 pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 936,
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
      lineNumber: 937,
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
      lineNumber: 948,
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
      lineNumber: 955,
      columnNumber: 47
    }
  }), __jsx("p", {
    className: "text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 965,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 3")), !previewVisiblePerson3 && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 971,
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 972,
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 974,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 3"))))), __jsx("div", {
    className: "lg:w-5/6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 982,
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
      lineNumber: 983,
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
      lineNumber: 994,
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
      lineNumber: 1002,
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
      lineNumber: 1013,
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
      lineNumber: 1021,
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
      lineNumber: 1032,
      columnNumber: 17
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
    className: "flex mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1042,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1043,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "text-center lg:text-right w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1044,
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
      lineNumber: 1045,
      columnNumber: 17
    }
  }, __jsx(Text, {
    className: "text-custom-black ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1060,
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
      lineNumber: 1062,
      columnNumber: 17
    }
  }, __jsx(Text, {
    className: "text-custom-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1075,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9zZXR0aW5nL3Byb2ZpbGUvaW5kZXguanMiXSwibmFtZXMiOlsiSm9kaXRFZGl0b3IiLCJkeW5hbWljIiwic3NyIiwiVGV4dCIsIlR5cG9ncmFwaHkiLCJUaXRsZSIsIk9wdGlvbiIsIlNlbGVjdCIsIlRleHRBcmVhIiwiSW5wdXQiLCJjb25maWciLCJyZXF1aXJlIiwiSG9tZSIsInByb3BzIiwibm90aWZpY2F0aW9uIiwidXNlTm90aWZpY2F0aW9uIiwiYXBpIiwiY29udGV4dEhvbGRlciIsInVzZXIiLCJvcmlnaW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwcm9maWxlSWQiLCJxdWVyeSIsInVzZVN0YXRlIiwicHJvdmluY2VzIiwic2V0UHJvdmluY2VzIiwiZGlzdHJpY3RzIiwic2V0RGlzdHJpY3RzIiwic3ViRGlzdHJpY3RzIiwic2V0U3ViRGlzdHJpY3RzIiwicHJldmlld0ltYWdlTG9nbyIsInNldFByZXZpZXdJbWFnZUxvZ28iLCJpbWFnZUxhbmRpbmdQYWdlTG9nbyIsInNldEltYWdlTGFuZGluZ1BhZ2VMb2dvIiwicHJldmlld1Zpc2libGVMb2dvIiwic2V0UHJldmlld1Zpc2libGVMb2dvIiwibG9nbyIsInNldExvZ28iLCJmaWVsZHMiLCJzZXRGaWVsZHMiLCJvcmdhbml6YXRpb25EYXRhIiwic2V0T3JnYW5pemF0aW9uRGF0YSIsInVzZUVmZmVjdCIsImZldGNoT3JnYW5pemF0aW9uRGF0YSIsImZldGNoUHJvdmluY2VzRGF0YSIsIm9uU3VibWl0SGFuZGxlciIsInZhbHVlIiwiZGF0YSIsIm9yZ2FuaXphdGlvbl9pZCIsIm9yZ2FuaXphdGlvbl9uYW1lIiwib3JnYW5pemF0aW9uX25hbWVfZW5nIiwib3JnYW5pemF0aW9uX2xvZ28iLCJjb25zb2xlIiwibG9nIiwiYXBpSW5zdGFuY2UiLCJwdXQiLCJzdGF0dXMiLCJvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJTdWNjZXNzIiwic2V0VGltZW91dCIsInB1c2giLCJiaW5kIiwib3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbCIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZGVzY3JpcHRpb24iLCJwbGFjZW1lbnQiLCJtZXNzZ2FlIiwiZXJyb3IiLCJEcmFnZ2VyIiwiVXBsb2FkIiwiRm9ybSIsInVzZUZvcm0iLCJmb3JtIiwib25SZXNldCIsIm5hbWUiLCJnZXQiLCJfb3JnYW5pemF0aW9uRGF0YSIsIm9yZ2FuaXphdGlvbiIsImltYWdlVXBsb2FkcHJvcHNMb2dvIiwibXVsdGlwbGUiLCJsaXN0VHlwZSIsIm1heENvdW50IiwiYWN0aW9uIiwicHJldmlldyIsImN1c3RvbVJlcXVlc3QiLCJvcHRpb25zIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmaWxlIiwidHlwZV91c2VyIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsImxpc3QiLCJfbmFtZSIsIm9uU3VjY2VzcyIsImVyciIsIm9uQ2hhbmdlIiwiaW5mbyIsInVybCIsImdldEJhc2U2NCIsIm9yaWdpbkZpbGVPYmoiLCJvblJlbW92ZSIsInJlc2V0SW1hZ2VQcmV2aWV3IiwiaW1hZ2VVcGxvYWRwcm9wc1BlcnNvbjEiLCJzZXRJbWFnZUxhbmRpbmdQYWdlUGVyc29uMSIsInNldFByZXZpZXdJbWFnZVBlcnNvbjEiLCJzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjEiLCJpbWFnZVVwbG9hZHByb3BzUGVyc29uMiIsInNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24yIiwic2V0UHJldmlld0ltYWdlUGVyc29uMiIsInNldFByZXZpZXdWaXNpYmxlUGVyc29uMiIsImltYWdlVXBsb2FkcHJvcHNQZXJzb24zIiwic2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjMiLCJzZXRQcmV2aWV3SW1hZ2VQZXJzb24zIiwic2V0UHJldmlld1Zpc2libGVQZXJzb24zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJwYXRoIiwiYnJlYWRjcnVtYk5hbWUiLCJoZWlnaHQiLCJ3aWR0aCIsIm9iamVjdEZpdCIsInJlcXVpcmVkIiwibWluUm93cyIsIm1heFJvd3MiLCJ0ZXh0QWxpZ24iLCJoYW5kbGVQcm92aW5jZXNDaGFuZ2UiLCJtYXAiLCJvYmplY3QiLCJwcm92aW5jZV9pZCIsInByb3ZpbmNlX25hbWUiLCJoYW5kbGVEaXN0cmljdENoYW5nZSIsImRpc3RyaWN0X2lkIiwiZGlzdHJpY3RfbmFtZSIsInN1Yl9kaXN0cmljdF9pZCIsInN1Yl9kaXN0cmljdF9uYW1lIiwiYmFja2dyb3VuZENvbG9yIiwicHJldmlld1Zpc2libGVQZXJzb24xIiwicHJldmlld0ltYWdlUGVyc29uMSIsInByZXZpZXdWaXNpYmxlUGVyc29uMiIsInByZXZpZXdJbWFnZVBlcnNvbjIiLCJwcmV2aWV3VmlzaWJsZVBlcnNvbjMiLCJwcmV2aWV3SW1hZ2VQZXJzb24zIiwiYm9yZGVyQ29sb3IiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5SaWdodCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUlBLElBQU1BLFdBQVcsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sd0pBQU47QUFBQSxDQUFELEVBQThCO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUFoQixvRUFBZ0I7QUFBQTtBQUFBLGNBQWhCLGFBQWdCO0FBQUE7QUFBQSxDQUE5QixDQUEzQjtNQUFNRixXO0FBQ04sSUFBUUcsSUFBUixHQUF3QkMsK0NBQXhCLENBQVFELElBQVI7QUFBQSxJQUFjRSxLQUFkLEdBQXdCRCwrQ0FBeEIsQ0FBY0MsS0FBZDtBQUNBLElBQVFDLE1BQVIsR0FBbUJDLDJDQUFuQixDQUFRRCxNQUFSO0FBRUEsSUFBUUUsUUFBUixHQUFxQkMsMENBQXJC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LG9CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQWZGLENBREYsRUFrQkUsTUFBQywyQ0FBRCxDQUNFO0FBREY7QUFFRSxTQUFLLEVBQUU7QUFDTFYscUJBQWUsRUFBRSxTQURaO0FBRUxPLGlCQUFXLEVBQUUsU0FGUjtBQUdMeEIsWUFBTSxFQUFFLEVBSEg7QUFJTEMsV0FBSyxFQUFFLEdBSkY7QUFLTHdCLGtCQUFZLEVBQUUsZ0JBTFQ7QUFNTEUsV0FBSyxFQUFFO0FBTkYsS0FGVDtBQVVFLFlBQVEsRUFBQyxRQVZYO0FBV0UsYUFBUyxFQUFDLDRJQVhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FhRSxNQUFDLElBQUQ7QUFBTSxhQUFTLEVBQUMsb0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBYkYsQ0FsQkYsQ0FERixDQURGLENBdnBCRixDQURGLENBeEJGLENBREY7QUEydEJEO0FBQ0Q7O0dBcmlDd0JoSixJO1VBQ09FLGlEQUFZLENBQUNDLGUsRUFFM0JNLHFELEVBNkRBa0QseUNBQUksQ0FBQ0MsTzs7O01BaEVFNUQsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWRtaW5cXHNldHRpbmdcXHByb2ZpbGUuanMuMTUwOTRhZjVkNDY5ZDg1ZmVmZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluYm94T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLCBGb3JtLCBJbWFnZSwgSW5wdXQsIG5vdGlmaWNhdGlvbiwgU2VsZWN0LCBUeXBvZ3JhcGh5LCBVcGxvYWRcclxufSBmcm9tICdhbnRkJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG4vLyBpbXBvcnQgVXNlck5hdiBmcm9tICcuLi9jb21wb25lbnRzL25hdmlnYXRpb24vVXNlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG4vKiBjb21wb25lbnRzICovXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0QWRtaW4nO1xyXG4vKiB1dGlscyAqL1xyXG5pbXBvcnQge1xyXG4gIGFic29sdXRlVXJsLCBhcGlJbnN0YW5jZVxyXG59IGZyb20gJy4uLy4uLy4uLy4uL21pZGRsZXdhcmUvdXRpbHMnO1xyXG5cclxuY29uc3QgSm9kaXRFZGl0b3IgPSBkeW5hbWljKCgpID0+IGltcG9ydChcImpvZGl0LXJlYWN0XCIpLCB7IHNzcjogZmFsc2UgfSk7XHJcbmNvbnN0IHsgVGV4dCwgVGl0bGUgfSA9IFR5cG9ncmFwaHk7XHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vLi4vY29uZmlnJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcbiAgY29uc3QgW2FwaSwgY29udGV4dEhvbGRlcl0gPSBub3RpZmljYXRpb24udXNlTm90aWZpY2F0aW9uKCk7XHJcbiAgY29uc3QgeyB1c2VyLCBvcmlnaW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgcHJvZmlsZUlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgW3Byb3ZpbmNlcywgc2V0UHJvdmluY2VzXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2Rpc3RyaWN0cywgc2V0RGlzdHJpY3RzXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3N1YkRpc3RyaWN0cywgc2V0U3ViRGlzdHJpY3RzXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3ByZXZpZXdJbWFnZUxvZ28sIHNldFByZXZpZXdJbWFnZUxvZ29dID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbaW1hZ2VMYW5kaW5nUGFnZUxvZ28sIHNldEltYWdlTGFuZGluZ1BhZ2VMb2dvXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3ByZXZpZXdWaXNpYmxlTG9nbywgc2V0UHJldmlld1Zpc2libGVMb2dvXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtsb2dvLCBzZXRMb2dvXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtmaWVsZHMsIHNldEZpZWxkc10gPSB1c2VTdGF0ZShbXHJcbiAgXSk7XHJcbiAgY29uc3QgW29yZ2FuaXphdGlvbkRhdGEsIHNldE9yZ2FuaXphdGlvbkRhdGFdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoT3JnYW5pemF0aW9uRGF0YSgpO1xyXG4gICAgZmV0Y2hQcm92aW5jZXNEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdEhhbmRsZXIodmFsdWUpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIG9yZ2FuaXphdGlvbl9pZDogdXNlci5vcmdhbml6YXRpb25faWQsXHJcbiAgICAgIG9yZ2FuaXphdGlvbl9uYW1lOiB2YWx1ZS5vcmdhbml6YXRpb25fbmFtZSxcclxuICAgICAgb3JnYW5pemF0aW9uX25hbWVfZW5nOiB2YWx1ZS5vcmdhbml6YXRpb25fbmFtZV9lbmcsXHJcbiAgICAgIG9yZ2FuaXphdGlvbl9sb2dvOiBpbWFnZUxhbmRpbmdQYWdlTG9nbyxcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgY29uc3Qgb3JnYW5pemF0aW9uRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkucHV0KCcvcHJvZmlsZScsIGRhdGEpO1xyXG4gICAgaWYgKG9yZ2FuaXphdGlvbkRhdGEuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgIG9wZW5Ob3RpZmljYXRpb25SZWdpc3RlclN1Y2Nlc3MoKTtcclxuICAgICAgZmV0Y2hPcmdhbml6YXRpb25EYXRhKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgLy9TdGFydCB0aGUgdGltZXJcclxuICAgICAgICAgIHJvdXRlci5wdXNoKCcvYWRtaW4vc2V0dGluZy9wcm9maWxlJyk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICAgIDIwMDAsXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJGYWlsKG9yZ2FuaXphdGlvbkRhdGEuZGF0YS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBjb25zdCBvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJTdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgYXBpLnN1Y2Nlc3Moe1xyXG4gICAgICBtZXNzYWdlOiBg4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIYCxcclxuICAgICAgZGVzY3JpcHRpb246ICfguJrguLHguJnguJfguLbguIHguILguYnguK3guKHguLnguKXguKrguLPguYDguKPguYfguIjguYHguKXguYnguKcnLFxyXG4gICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJGYWlsID0gbWVzc2dhZSA9PiB7XHJcbiAgICBhcGkuZXJyb3Ioe1xyXG4gICAgICBtZXNzYWdlOiBg4Lie4Lia4Lib4Lix4LiN4Lir4Liy4Lij4Liw4Lir4Lin4LmI4Liy4LiH4LiB4Liy4Lij4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54LilYCxcclxuICAgICAgZGVzY3JpcHRpb246IG1lc3NnYWUsXHJcbiAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHsgRHJhZ2dlciB9ID0gVXBsb2FkO1xyXG5cclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuXHJcbiAgY29uc3Qgb25SZXNldCA9ICgpID0+IHtcclxuICAgIHNldEZpZWxkcyhbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9sb2dvJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEub3JnYW5pemF0aW9uX2xvZ28sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9uYW1lJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEub3JnYW5pemF0aW9uX25hbWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9uYW1lX2VuZyddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9uYW1lX2VuZyxcclxuICAgICAgfSxcclxuICAgIF0pO1xyXG4gICAgc2V0UHJldmlld0ltYWdlTG9nbygnLi5cXFxcLi5cXFxcLi5cXFxcdXBsb2Fkc1xcXFxjLScgKyB1c2VyLm9yZ2FuaXphdGlvbl9pZCArICdcXFxcb3JnYW5pemF0aW9uXFxcXCcgKyBvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9sb2dvKTtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlTG9nbyh0cnVlKTtcclxuICAgIHNldEltYWdlTGFuZGluZ1BhZ2VMb2dvKG9yZ2FuaXphdGlvbkRhdGEub3JnYW5pemF0aW9uX2xvZ28pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoT3JnYW5pemF0aW9uRGF0YSA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBfb3JnYW5pemF0aW9uRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAnb3JnYW5pemF0aW9uLycgKyAodXNlciA/IHVzZXIub3JnYW5pemF0aW9uX2lkIDogMClcclxuICAgICk7XHJcbiAgICBzZXRPcmdhbml6YXRpb25EYXRhKF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uKVxyXG4gICAgaWYgKF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9sb2dvKSB7XHJcbiAgICAgIHNldFByZXZpZXdJbWFnZUxvZ28oXHJcbiAgICAgICAgJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICtcclxuICAgICAgICB1c2VyLm9yZ2FuaXphdGlvbl9pZCArXHJcbiAgICAgICAgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArXHJcbiAgICAgICAgX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2xvZ28sXHJcbiAgICAgIClcclxuICAgICAgc2V0UHJldmlld1Zpc2libGVMb2dvKHRydWUpXHJcbiAgICB9XHJcbiAgICBzZXRGaWVsZHMoW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fbmFtZSddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fbmFtZSA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9uYW1lIDogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fbmFtZV9lbmcnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX25hbWVfZW5nID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX25hbWVfZW5nIDogXCJcIlxyXG4gICAgICB9XHJcblxyXG5cclxuICAgIF0pXHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0IGltYWdlVXBsb2FkcHJvcHNMb2dvID0ge1xyXG4gICAgbmFtZTogJ2ZpbGUnLFxyXG4gICAgbXVsdGlwbGU6IGZhbHNlLFxyXG4gICAgbGlzdFR5cGU6ICd0ZXh0JyxcclxuICAgIG1heENvdW50OiAxLFxyXG4gICAgYWN0aW9uOiBcIi9hcGkvdXBsb2FkL29yZ2FuaXphdGlvblwiLFxyXG4gICAgcHJldmlldzogZmFsc2UsXHJcbiAgICBjdXN0b21SZXF1ZXN0OiAob3B0aW9ucykgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdpZCcsIHVzZXIudHlwZV91c2VyID09IDEgPyBcImFkbWluXCIgOiB1c2VyLm9yZ2FuaXphdGlvbl9pZClcclxuICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgIFwiaGVhZGVyc1wiOiB7XHJcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9LS0tLVdlYktpdEZvcm1Cb3VuZGFyeXFUcUpJeHZrV0ZZcXZQNXMnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGF4aW9zLnBvc3Qob3B0aW9ucy5hY3Rpb24sIGRhdGEsIGNvbmZpZykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0SW1hZ2VMYW5kaW5nUGFnZUxvZ28ocmVzLmRhdGEuZGF0YS5saXN0WzBdLl9uYW1lKVxyXG4gICAgICAgIG9wdGlvbnMub25TdWNjZXNzKHJlcy5kYXRhLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfSxcclxuICAgIGFzeW5jIG9uQ2hhbmdlKGluZm8pIHtcclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGluZm8uZmlsZVxyXG4gICAgICBzd2l0Y2ggKGluZm8uZmlsZS5zdGF0dXMpIHtcclxuICAgICAgICBjYXNlIFwiZG9uZVwiOlxyXG4gICAgICAgICAgaWYgKCFpbmZvLmZpbGUudXJsICYmICFpbmZvLmZpbGUucHJldmlldykge1xyXG4gICAgICAgICAgICBpbmZvLmZpbGUucHJldmlldyA9IGF3YWl0IGdldEJhc2U2NChpbmZvLmZpbGUub3JpZ2luRmlsZU9iaik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRQcmV2aWV3SW1hZ2VMb2dvKGluZm8uZmlsZS51cmwgfHwgaW5mby5maWxlLnByZXZpZXcpXHJcbiAgICAgICAgICBzZXRQcmV2aWV3VmlzaWJsZUxvZ28odHJ1ZSlcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIC8vIGVycm9yIG9yIHJlbW92ZWRcclxuICAgICAgICAvLyByZXNldEltYWdlUHJldmlldygpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgb25SZW1vdmUoaW5mbykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9uUmVtb3ZlXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbWFnZVVwbG9hZHByb3BzUGVyc29uMSA9IHtcclxuICAgIG5hbWU6ICdmaWxlJyxcclxuICAgIG11bHRpcGxlOiBmYWxzZSxcclxuICAgIGxpc3RUeXBlOiAndGV4dCcsXHJcbiAgICBtYXhDb3VudDogMSxcclxuICAgIGFjdGlvbjogXCIvYXBpL3VwbG9hZC9vcmdhbml6YXRpb25cIixcclxuICAgIHByZXZpZXc6IGZhbHNlLFxyXG4gICAgY3VzdG9tUmVxdWVzdDogKG9wdGlvbnMpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgb3B0aW9ucy5maWxlKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnaWQnLCB1c2VyLnR5cGVfdXNlciA9PSAxID8gXCJhZG1pblwiIDogdXNlci5vcmdhbml6YXRpb25faWQpXHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICBcImhlYWRlcnNcIjoge1xyXG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogJ211bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PS0tLS1XZWJLaXRGb3JtQm91bmRhcnlxVHFKSXh2a1dGWXF2UDVzJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBheGlvcy5wb3N0KG9wdGlvbnMuYWN0aW9uLCBkYXRhLCBjb25maWcpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24xKHJlcy5kYXRhLmRhdGEubGlzdFswXS5fbmFtZSlcclxuICAgICAgICBvcHRpb25zLm9uU3VjY2VzcyhyZXMuZGF0YSwgb3B0aW9ucy5maWxlKVxyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICB9KVxyXG5cclxuICAgIH0sXHJcbiAgICBhc3luYyBvbkNoYW5nZShpbmZvKSB7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBpbmZvLmZpbGVcclxuICAgICAgc3dpdGNoIChpbmZvLmZpbGUuc3RhdHVzKSB7XHJcbiAgICAgICAgY2FzZSBcImRvbmVcIjpcclxuICAgICAgICAgIGlmICghaW5mby5maWxlLnVybCAmJiAhaW5mby5maWxlLnByZXZpZXcpIHtcclxuICAgICAgICAgICAgaW5mby5maWxlLnByZXZpZXcgPSBhd2FpdCBnZXRCYXNlNjQoaW5mby5maWxlLm9yaWdpbkZpbGVPYmopO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0UHJldmlld0ltYWdlUGVyc29uMShpbmZvLmZpbGUudXJsIHx8IGluZm8uZmlsZS5wcmV2aWV3KVxyXG4gICAgICAgICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24xKHRydWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgLy8gcmVzZXRJbWFnZVByZXZpZXcoKVxyXG4gICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIG9uUmVtb3ZlKGluZm8pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJvblJlbW92ZVwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhpbmZvKVxyXG4gICAgICByZXNldEltYWdlUHJldmlldygpXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaW1hZ2VVcGxvYWRwcm9wc1BlcnNvbjIgPSB7XHJcbiAgICBuYW1lOiAnZmlsZScsXHJcbiAgICBtdWx0aXBsZTogZmFsc2UsXHJcbiAgICBsaXN0VHlwZTogJ3RleHQnLFxyXG4gICAgbWF4Q291bnQ6IDEsXHJcbiAgICBhY3Rpb246IFwiL2FwaS91cGxvYWQvb3JnYW5pemF0aW9uXCIsXHJcbiAgICBwcmV2aWV3OiBmYWxzZSxcclxuICAgIGN1c3RvbVJlcXVlc3Q6IChvcHRpb25zKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgZGF0YS5hcHBlbmQoJ2lkJywgdXNlci50eXBlX3VzZXIgPT0gMSA/IFwiYWRtaW5cIiA6IHVzZXIub3JnYW5pemF0aW9uX2lkKVxyXG4gICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgXCJoZWFkZXJzXCI6IHtcclxuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6ICdtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0tLS0tV2ViS2l0Rm9ybUJvdW5kYXJ5cVRxSkl4dmtXRllxdlA1cydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYXhpb3MucG9zdChvcHRpb25zLmFjdGlvbiwgZGF0YSwgY29uZmlnKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRJbWFnZUxhbmRpbmdQYWdlUGVyc29uMihyZXMuZGF0YS5kYXRhLmxpc3RbMF0uX25hbWUpXHJcbiAgICAgICAgb3B0aW9ucy5vblN1Y2Nlc3MocmVzLmRhdGEsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgfSlcclxuXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgb25DaGFuZ2UoaW5mbykge1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gaW5mby5maWxlXHJcbiAgICAgIHN3aXRjaCAoaW5mby5maWxlLnN0YXR1cykge1xyXG4gICAgICAgIGNhc2UgXCJkb25lXCI6XHJcbiAgICAgICAgICBpZiAoIWluZm8uZmlsZS51cmwgJiYgIWluZm8uZmlsZS5wcmV2aWV3KSB7XHJcbiAgICAgICAgICAgIGluZm8uZmlsZS5wcmV2aWV3ID0gYXdhaXQgZ2V0QmFzZTY0KGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjIoaW5mby5maWxlLnVybCB8fCBpbmZvLmZpbGUucHJldmlldylcclxuICAgICAgICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMih0cnVlKVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgLy8gcmVzZXRJbWFnZVByZXZpZXcoKVxyXG4gICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIG9uUmVtb3ZlKGluZm8pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJvblJlbW92ZVwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhpbmZvKVxyXG4gICAgICByZXNldEltYWdlUHJldmlldygpXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaW1hZ2VVcGxvYWRwcm9wc1BlcnNvbjMgPSB7XHJcbiAgICBuYW1lOiAnZmlsZScsXHJcbiAgICBtdWx0aXBsZTogZmFsc2UsXHJcbiAgICBsaXN0VHlwZTogJ3RleHQnLFxyXG4gICAgbWF4Q291bnQ6IDEsXHJcbiAgICBhY3Rpb246IFwiL2FwaS91cGxvYWQvb3JnYW5pemF0aW9uXCIsXHJcbiAgICBwcmV2aWV3OiBmYWxzZSxcclxuICAgIGN1c3RvbVJlcXVlc3Q6IChvcHRpb25zKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgZGF0YS5hcHBlbmQoJ2lkJywgdXNlci50eXBlX3VzZXIgPT0gMSA/IFwiYWRtaW5cIiA6IHVzZXIub3JnYW5pemF0aW9uX2lkKVxyXG4gICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgXCJoZWFkZXJzXCI6IHtcclxuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6ICdtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0tLS0tV2ViS2l0Rm9ybUJvdW5kYXJ5cVRxSkl4dmtXRllxdlA1cydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYXhpb3MucG9zdChvcHRpb25zLmFjdGlvbiwgZGF0YSwgY29uZmlnKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRJbWFnZUxhbmRpbmdQYWdlUGVyc29uMyhyZXMuZGF0YS5kYXRhLmxpc3RbMF0uX25hbWUpXHJcbiAgICAgICAgb3B0aW9ucy5vblN1Y2Nlc3MocmVzLmRhdGEsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgfSlcclxuXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgb25DaGFuZ2UoaW5mbykge1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gaW5mby5maWxlXHJcbiAgICAgIHN3aXRjaCAoaW5mby5maWxlLnN0YXR1cykge1xyXG4gICAgICAgIGNhc2UgXCJkb25lXCI6XHJcbiAgICAgICAgICBpZiAoIWluZm8uZmlsZS51cmwgJiYgIWluZm8uZmlsZS5wcmV2aWV3KSB7XHJcbiAgICAgICAgICAgIGluZm8uZmlsZS5wcmV2aWV3ID0gYXdhaXQgZ2V0QmFzZTY0KGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjMoaW5mby5maWxlLnVybCB8fCBpbmZvLmZpbGUucHJldmlldylcclxuICAgICAgICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMyh0cnVlKVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgLy8gcmVzZXRJbWFnZVByZXZpZXcoKVxyXG4gICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIG9uUmVtb3ZlKGluZm8pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJvblJlbW92ZVwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhpbmZvKVxyXG4gICAgICByZXNldEltYWdlUHJldmlldygpXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzZXRJbWFnZVByZXZpZXcgPSAoKSA9PiB7XHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZUxvZ28oZmFsc2UpO1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24xKGZhbHNlKTtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMihmYWxzZSk7XHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjMoZmFsc2UpO1xyXG4gICAgc2V0UHJldmlld0ltYWdlTG9nbyhudWxsKTtcclxuICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjEobnVsbCk7XHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24yKG51bGwpO1xyXG4gICAgc2V0UHJldmlld0ltYWdlUGVyc29uMyhudWxsKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBnZXRCYXNlNjQoZmlsZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICByZWFkZXIub25lcnJvciA9IGVycm9yID0+IHJlamVjdChlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0XHJcbiAgICAgIHRpdGxlPVwiR292ZXJubWVudCAtIEFkbWluIG1hbmFnZW1lbnRcIlxyXG4gICAgICB1cmw9e29yaWdpbn1cclxuICAgICAgb3JpZ2luPXtvcmlnaW59XHJcbiAgICAgIC8vIHVzZXI9e2xvZ2lufVxyXG4gICAgICBpbmRleFN1Yk1lbnU9e1wiNlwifVxyXG4gICAgICBpbmRleE1lbnU9e1wic3ViLTYtMFwifVxyXG4gICAgICB0aXRsZVBhZ2U9XCLguILguYnguK3guKHguLnguKXguK3guIfguITguYzguIHguKNcIlxyXG4gICAgICBfcm91dGVzPXtbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGF0aDogJy9hZG1pbi9kYXNoYm9yYWQnLFxyXG4gICAgICAgICAgYnJlYWRjcnVtYk5hbWU6ICfguKvguJnguYnguLLguKvguKXguLHguIEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGF0aDogJy9hZG1pbi9zZXR0aW5nL3Byb2ZpbGUnLFxyXG4gICAgICAgICAgYnJlYWRjcnVtYk5hbWU6ICfguILguYnguK3guKHguLnguKXguK3guIfguITguYzguIHguKMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF19XHJcbiAgICA+XHJcbiAgICAgIHtjb250ZXh0SG9sZGVyfVxyXG4gICAgICA8bGlua1xyXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9yZWFjdC1xdWlsbEAxLjMuMy9kaXN0L3F1aWxsLnNub3cuY3NzXCJcclxuICAgICAgPjwvbGluaz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTUvNiBsZzp3LWZ1bGwgbXgtYXV0b1wiPlxyXG4gICAgICAgIDxGb3JtXHJcbiAgICAgICAgICBuYW1lPVwiYmFzaWNcIlxyXG4gICAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgb25GaW5pc2g9e29uU3VibWl0SGFuZGxlcn1cclxuICAgICAgICAgIHJlcXVpcmVkTWFyaz17dHJ1ZX1cclxuICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICBmaWVsZHM9e2ZpZWxkc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGxnOnctMS82ICBwci0yXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm9yZ2FuaXphdGlvbl9sb2dvXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWF1dG8gaC1hdXRvIHRleHQtY2VudGVyIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguYDguKXguLfguK3guIHguKDguLLguJ4gTG9nbyDguK3guIfguITguYzguIHguKMnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsvKiA8RHJhZ2dlciB7Li4uZHJvcGltZ30+ICovfVxyXG4gICAgICAgICAgICAgICAgPERyYWdnZXJcclxuICAgICAgICAgICAgICAgICAgbWF4Q291bnQ9ezF9XHJcbiAgICAgICAgICAgICAgICAgIC8vIGxpc3RUeXBlPVwicGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5qcGVnLCAucG5nXCJcclxuICAgICAgICAgICAgICAgICAgey4uLmltYWdlVXBsb2FkcHJvcHNMb2dvfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAge3ByZXZpZXdWaXNpYmxlTG9nbyAmJiA8PjxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcmV2aWV3SW1hZ2VMb2dvfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCBMb2dvIOC4reC4h+C4hOC5jOC4geC4o1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgeyFwcmV2aWV3VmlzaWJsZUxvZ28gJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEluYm94T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCBMb2dvIOC4reC4h+C4hOC5jOC4geC4o1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvRHJhZ2dlcj5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy01LzYgXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm9yZ2FuaXphdGlvbl9uYW1lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LiK4Li34LmI4Lit4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guKvguJnguYjguKfguKLguIfguLLguJknLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC4q+C4meC5iOC4p+C4ouC4h+C4suC4mVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwib3JnYW5pemF0aW9uX25hbWVfZW5nXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LiK4Li34LmI4Lit4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZIOC4oOC4suC4qeC4suC4reC4seC4h+C4geC4pOC4qVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4q+C4meC5iOC4p+C4ouC4h+C4suC4meC4oOC4suC4qeC4suC4reC4seC4h+C4geC4pOC4qScsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguIrguLfguYjguK3guKvguJnguYjguKfguKLguIfguLLguJkg4Lig4Liy4Lip4Liy4Lit4Lix4LiH4LiB4Lik4LipXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBuYW1lPVwib3JnYW5pemF0aW9uX2FkZHJlc3NcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIuC4l+C4teC5iOC4reC4ouC4ueC5iOC4q+C4meC5iOC4p+C4ouC4h+C4suC4mVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4l+C4teC5iOC4reC4ouC4ueC5iOC4q+C4meC5iOC4p+C4ouC4h+C4suC4mScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguJfguLXguYjguK3guKLguLnguYjguKvguJnguYjguKfguKLguIfguLLguJlcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAzLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggbGc6dy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctMS8zIG1yLTRcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicHJvdmluY2VzU2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguIjguLHguIfguKvguKfguLHguJRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIHctZnVsbCBmb250LWJvbGQgbWItMiBcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnQgIWltcG9ydGFudFwiIH19XHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iOC4seC4h+C4q+C4p+C4seC4lCcsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17KCk9PnByb3ZpbmNlc1NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyB3aWR0aDogMTIwIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQcm92aW5jZXNDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiMFwiPuC5gOC4peC4t+C4reC4gTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICB7cHJvdmluY2VzID8gcHJvdmluY2VzLm1hcCgob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxPcHRpb24gdmFsdWU9e29iamVjdC5wcm92aW5jZV9pZH0+e29iamVjdC5wcm92aW5jZV9uYW1lfSAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIH0pIDogXCJcIn1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzMgbGc6bXgtNFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJkaXN0cmljdFNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4Lit4Liz4LmA4Lig4LitXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGwgXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0ICFpbXBvcnRhbnRcIiB9fVxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguK3guLPguYDguKDguK0nLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9eygpPT5wcm92aW5jZXNTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3sgd2lkdGg6IDEyMCB9fVxyXG4gICAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRGlzdHJpY3RDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiMFwiPuC5gOC4peC4t+C4reC4gTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICB7ZGlzdHJpY3RzID8gZGlzdHJpY3RzLm1hcCgob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxPcHRpb24gdmFsdWU9e29iamVjdC5kaXN0cmljdF9pZH0+e29iamVjdC5kaXN0cmljdF9uYW1lfSAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIH0pIDogXCJcIn1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzMgbGc6bWwtNFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdWJEaXN0cmljdFNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LiV4Liz4Lia4LilXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGwgXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0ICFpbXBvcnRhbnRcIiB9fVxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguJXguLPguJrguKUnLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0VmFsdWU9eygpPT5wcm92aW5jZXNTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3sgd2lkdGg6IDEyMCB9fVxyXG4gICAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgIGZpbHRlck9wdGlvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIjBcIj7guYDguKXguLfguK3guIE8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAge3N1YkRpc3RyaWN0cyA/IHN1YkRpc3RyaWN0cy5tYXAoKG9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8T3B0aW9uIHZhbHVlPXtvYmplY3Quc3ViX2Rpc3RyaWN0X2lkfT57b2JqZWN0LnN1Yl9kaXN0cmljdF9uYW1lfSAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIH0pIDogXCJcIn1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCBsZzp3LTEvMiBsZzptci00XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm9yZ2FuaXphdGlvbl9waG9uZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC5gOC4muC4reC4o+C5jOC5guC4l+C4o1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LmA4Lia4Lit4Lij4LmM4LmC4LiX4LijJyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguYDguJrguK3guKPguYzguYLguJfguKNcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IGxnOnctMS8yIGxnOm1sLTRcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwib3JnYW5pemF0aW9uX2ZheFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC5gOC4muC4reC4o+C5jCBmYXhcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguYDguJrguK3guKPguYwgZmF4JyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC5gOC4muC4reC4o+C5jCBmYXhcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IGxnOnctMS8yIGxnOm1yLTRcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwib3JnYW5pemF0aW9uX2VtYWlsXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4Lit4Li14LmA4Lih4Lil4Lil4LmMXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguK3guLXguYDguKHguKXguKXguYwnLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4reC4teC5gOC4oeC4peC4peC5jFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggbGc6dy0xLzIgbGc6bWwtNFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJvcmdhbml6YXRpb25fZW1haWxfYWxlcnRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguK3guLXguYDguKHguKXguKXguYzguKrguLPguKvguKPguLHguJrguYHguIjguYnguIfguYDguJXguLfguK3guJlcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguK3guLXguYDguKHguKXguKXguYzguKrguLPguKvguKPguLHguJrguYHguIjguYnguIfguYDguJXguLfguK3guJknLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4Lit4Li14LmA4Lih4Lil4Lil4LmM4Liq4Liz4Lir4Lij4Lix4Lia4LmB4LiI4LmJ4LiH4LmA4LiV4Li34Lit4LiZXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCBsZzp3LTEvMiBsZzptci00XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInNvY2lhbF9mYl9wYWdlaWRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJmYWNlYm9vayBwYWdlIGlkXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiBIGZhY2Vib29rIHBhZ2UgaWQnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZmFjZWJvb2sgcGFnZSBpZFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggbGc6dy0xLzIgbGc6bWwtNFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJyc3NcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguKPguKvguLHguKrguKvguJnguYjguKfguKLguIfguLLguJnguKDguLLguITguKPguLHguJDguKrguLPguKvguKPguLHguJrguYDguIrguLfguK3guKHguJXguYjguK3guKPguLDguJrguJogRS1HUFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4o+C4q+C4seC4quC4q+C4meC5iOC4p+C4ouC4h+C4suC4meC4oOC4suC4hOC4o+C4seC4kOC4quC4s+C4q+C4o+C4seC4muC5gOC4iuC4t+C4reC4oeC4leC5iOC4reC4o+C4sOC4muC4miBFLUdQJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4o+C4q+C4seC4quC4q+C4meC5iOC4p+C4ouC4h+C4suC4meC4oOC4suC4hOC4o+C4seC4kOC4quC4s+C4q+C4o+C4seC4muC5gOC4iuC4t+C4reC4oeC4leC5iOC4reC4o+C4sOC4muC4miBFLUdQXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGhyXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0M0QzRDNCcsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTZcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggbGc6dy0xLzYgcHItMlwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wMV9pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1hdXRvIGgtYXV0byB0ZXh0LWNlbnRlciB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LmA4Lil4Li34Lit4LiB4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDEnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsvKiA8RHJhZ2dlciB7Li4uZHJvcGltZ30+ICovfVxyXG4gICAgICAgICAgICAgICAgPERyYWdnZXJcclxuICAgICAgICAgICAgICAgICAgbWF4Q291bnQ9ezF9XHJcbiAgICAgICAgICAgICAgICAgIC8vIGxpc3RUeXBlPVwicGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5qcGVnLCAucG5nXCJcclxuICAgICAgICAgICAgICAgICAgey4uLmltYWdlVXBsb2FkcHJvcHNQZXJzb24xfVxyXG4gICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAge3ByZXZpZXdWaXNpYmxlUGVyc29uMSAmJiA8PjxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJldmlld0ltYWdlUGVyc29uMX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTU2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4LiE4Lil4Li04LiBIOC4q+C4o+C4t+C4rSDguKXguLLguIHguYTguJ/guKXguYzguKHguLLguJfguLXguYjguJrguKPguLTguYDguKfguJPguJnguLXguYnguYDguJ7guLfguYjguK3guK3guLHguJvguYLguKvguKXguJQg4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDFcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHshcHJldmlld1Zpc2libGVQZXJzb24xICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC1kcmFnLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbmJveE91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4LiE4Lil4Li04LiBIOC4q+C4o+C4t+C4rSDguKXguLLguIHguYTguJ/guKXguYzguKHguLLguJfguLXguYjguJrguKPguLTguYDguKfguJPguJnguLXguYnguYDguJ7guLfguYjguK3guK3guLHguJvguYLguKvguKXguJQg4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDFcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0RyYWdnZXI+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctNS82IFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wMV9uYW1lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LiK4Li34LmI4Lit4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDFcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMScsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGVyc29uMDFfcG9zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguJXguLPguYHguKvguJnguYjguIfguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAxJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAxXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wMV9waG9uZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC5gOC4muC4reC4o+C5jOC5guC4l+C4o+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAxXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDEnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LmA4Lia4Lit4Lij4LmM4LmC4LiX4Lij4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDFcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGxnOnctMS82IHByLTJcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGVyc29uMDJfaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctYXV0byBoLWF1dG8gdGV4dC1jZW50ZXIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC5gOC4peC4t+C4reC4geC4oOC4suC4nuC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4l+C4teC5iCAyJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7LyogPERyYWdnZXIgey4uLmRyb3BpbWd9PiAqL31cclxuICAgICAgICAgICAgICAgIDxEcmFnZ2VyXHJcbiAgICAgICAgICAgICAgICAgIG1heENvdW50PXsxfVxyXG4gICAgICAgICAgICAgICAgICAvLyBsaXN0VHlwZT1cInBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAuanBlZywgLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIHsuLi5pbWFnZVVwbG9hZHByb3BzUGVyc29uMn1cclxuICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtwcmV2aWV3VmlzaWJsZVBlcnNvbjIgJiYgPD48SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJldmlld0ltYWdlUGVyc29uMn1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTU2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4LiE4Lil4Li04LiBIOC4q+C4o+C4t+C4rSDguKXguLLguIHguYTguJ/guKXguYzguKHguLLguJfguLXguYjguJrguKPguLTguYDguKfguJPguJnguLXguYnguYDguJ7guLfguYjguK3guK3guLHguJvguYLguKvguKXguJQg4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDJcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHshcHJldmlld1Zpc2libGVQZXJzb24yICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC1kcmFnLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbmJveE91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4LiE4Lil4Li04LiBIOC4q+C4o+C4t+C4rSDguKXguLLguIHguYTguJ/guKXguYzguKHguLLguJfguLXguYjguJrguKPguLTguYDguKfguJPguJnguLXguYnguYDguJ7guLfguYjguK3guK3guLHguJvguYLguKvguKXguJQg4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDJcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0RyYWdnZXI+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctNS82IFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wMl9uYW1lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LiK4Li34LmI4Lit4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMicsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMlwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGVyc29uMDJfcG9zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguJXguLPguYHguKvguJnguYjguIfguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMlwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAyJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAyXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wMl9waG9uZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC5gOC4muC4reC4o+C5jOC5guC4l+C4o+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAyXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDEnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LmA4Lia4Lit4Lij4LmM4LmC4LiX4Lij4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDJcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGxnOnctMS82IHByLTJcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGVyc29uMDNfaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctYXV0byBoLWF1dG8gdGV4dC1jZW50ZXIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC5gOC4peC4t+C4reC4geC4oOC4suC4nuC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4l+C4teC5iCAzJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7LyogPERyYWdnZXIgey4uLmRyb3BpbWd9PiAqL31cclxuICAgICAgICAgICAgICAgIDxEcmFnZ2VyXHJcbiAgICAgICAgICAgICAgICAgIG1heENvdW50PXsxfVxyXG4gICAgICAgICAgICAgICAgICAvLyBsaXN0VHlwZT1cInBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAuanBlZywgLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIHsuLi5pbWFnZVVwbG9hZHByb3BzUGVyc29uM31cclxuICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtwcmV2aWV3VmlzaWJsZVBlcnNvbjMgJiYgPD48SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJldmlld0ltYWdlUGVyc29uM31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTU2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4LiE4Lil4Li04LiBIOC4q+C4o+C4t+C4rSDguKXguLLguIHguYTguJ/guKXguYzguKHguLLguJfguLXguYjguJrguKPguLTguYDguKfguJPguJnguLXguYnguYDguJ7guLfguYjguK3guK3guLHguJvguYLguKvguKXguJQg4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDNcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHshcHJldmlld1Zpc2libGVQZXJzb24zICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC1kcmFnLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbmJveE91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4LiE4Lil4Li04LiBIOC4q+C4o+C4t+C4rSDguKXguLLguIHguYTguJ/guKXguYzguKHguLLguJfguLXguYjguJrguKPguLTguYDguKfguJPguJnguLXguYnguYDguJ7guLfguYjguK3guK3guLHguJvguYLguKvguKXguJQg4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDNcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0RyYWdnZXI+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctNS82IFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wM19uYW1lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LiK4Li34LmI4Lit4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMycsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggM1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGVyc29uMDNfcG9zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguJXguLPguYHguKvguJnguYjguIfguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggM1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAzJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAzXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wM19waG9uZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC5gOC4muC4reC4o+C5jOC5guC4l+C4o+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAzXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDEnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LmA4Lia4Lit4Lij4LmM4LmC4LiX4Lij4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDNcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIGNsYXNzTmFtZT1cImZsZXggbXQtNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbGc6dGV4dC1yaWdodCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlc2V0fVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNDMkNGRTAnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0MyQ0ZFMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzBweCAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLy8gaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSB3LWZ1bGwgbGc6dy0xLzRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbS1ibGFjayBcIj7guKPguLXguYDguIvguYfguJc8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgLy8gdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwNTk2NjknLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzA1OTY2OScsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzBweCAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHctZnVsbCBsZzp3LTEvNFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRleHQtY3VzdG9tLXdoaXRlIFwiPuC4muC4seC4meC4l+C4tuC4gTwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcbi8qIGdldFNlcnZlclNpZGVQcm9wcyAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHJlcSB9ID0gY29udGV4dDtcclxuICBjb25zdCB7IG9yaWdpbiB9ID0gYWJzb2x1dGVVcmwocmVxKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG9yaWdpbixcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9