webpackHotUpdate("static\\development\\pages\\admin\\setting\\general\\[holidayId].js",{

/***/ "./pages/admin/setting/general/[holidayId].js":
/*!****************************************************!*\
  !*** ./pages/admin/setting/general/[holidayId].js ***!
  \****************************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/layout/LayoutAdmin */ "./components/layout/LayoutAdmin.jsx");
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../middleware/utils */ "./middleware/utils.js");





var _jsxFileName = "D:\\govermentlt\\pages\\admin\\setting\\general\\[holidayId].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;




 // import UserNav from '../components/navigation/User';



/* components */


/* utils */


var Text = antd__WEBPACK_IMPORTED_MODULE_6__["Typography"].Text,
    Title = antd__WEBPACK_IMPORTED_MODULE_6__["Typography"].Title;
var Dragger = antd__WEBPACK_IMPORTED_MODULE_6__["Upload"].Dragger;
var __N_SSP = true;
function Home(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  var holidayId = router.query.holidayId;
  var user = props.user,
      origin = props.origin;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      url = _useState[0],
      setUrl = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      previewImage = _useState2[0],
      setPreviewImage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      imageLandingPage = _useState3[0],
      setImageLandingPage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      previewVisible = _useState4[0],
      setPreviewVisible = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      isHasBless = _useState5[0],
      setIsHasBless = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1),
      isUse = _useState6[0],
      setIsUse = _useState6[1];

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_6__["Form"].useForm(),
      _Form$useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _notification$useNoti = antd__WEBPACK_IMPORTED_MODULE_6__["notification"].useNotification(),
      _notification$useNoti2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_notification$useNoti, 2),
      api = _notification$useNoti2[0],
      contextHolder = _notification$useNoti2[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      introData = _useState7[0],
      setIntroData = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([{
    name: ['intro_title'],
    value: ''
  }]),
      fields = _useState8[0],
      setFields = _useState8[1];

  function onSubmitHandler(_x) {
    return _onSubmitHandler.apply(this, arguments);
  }

  function _onSubmitHandler() {
    _onSubmitHandler = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(value) {
      var date_s_Str, date_e_Str, data, registerData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // console.log("value")
              // console.log(value)
              date_s_Str = moment__WEBPACK_IMPORTED_MODULE_8___default()(value.intro_date_s).format();
              date_e_Str = moment__WEBPACK_IMPORTED_MODULE_8___default()(value.intro_date_e).format();
              data = {
                "organization_id": user.organization_id,
                "intro_title": value.intro_title,
                "intro_url": value.intro_url,
                "intro_btn": value.intro_btn,
                "intro_date_s": date_s_Str,
                "intro_date_e": date_e_Str,
                "intro_image": imageLandingPage,
                "is_has_bless": isHasBless,
                "is_use": isUse,
                "is_admin": 1
              };
              _context3.next = 5;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_12__["apiInstance"])().put('/holiday/' + holidayId, data);

            case 5:
              registerData = _context3.sent;

              if (registerData.data.status == 200) {
                openNotificationSuccess();
                fetch();
                setTimeout(function () {
                  //Start the timer
                  router.push('/admin/setting/general/management-holiday');
                }.bind(this), 2000);
              } else {
                openNotificationFail(registerData.data.message);
              }

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));
    return _onSubmitHandler.apply(this, arguments);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    fetch();
  }, []);

  var fetch = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var _introData;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_12__["apiInstance"])().get('/holiday/' + holidayId);

            case 2:
              _introData = _context.sent;
              console.log(_introData);
              console.log(_introData.data.introData.intro_date_s);
              setIntroData(_introData.data.introData);
              setPreviewImage("..\\..\\..\\uploads\\c-" + user.organization_id + '\\holiday\\' + _introData.data.introData.intro_image);
              setPreviewVisible(true);
              setImageLandingPage(_introData.data.introData.intro_image);
              setIsHasBless(_introData.data.introData.is_has_bless);
              setIsUse(_introData.data.introData.is_use);
              setFields([{
                name: ['intro_title'],
                value: _introData.data.introData ? _introData.data.introData.intro_title : ""
              }, {
                name: ['intro_date_s'],
                value: moment__WEBPACK_IMPORTED_MODULE_8___default()(Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_12__["convertDateDBtoDatePickerNoTime"])(_introData.data.introData.intro_date_s))
              }, {
                name: ['intro_date_e'],
                value: moment__WEBPACK_IMPORTED_MODULE_8___default()(Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_12__["convertDateDBtoDatePickerNoTime"])(_introData.data.introData.intro_date_e))
              }, {
                name: ['intro_image'],
                value: _introData.data.introData.intro_image
              }, {
                name: ['intro_btn'],
                value: _introData.data.introData.intro_btn
              }, {
                name: ['intro_url'],
                value: _introData.data.introData.intro_url
              }]);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetch() {
      return _ref.apply(this, arguments);
    };
  }();

  var openNotificationSuccess = function openNotificationSuccess() {
    api.success({
      message: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
      description: 'บันทึกข้อมูลสำเร็จ',
      placement: 'topRight'
    });
  };

  var openNotificationFail = function openNotificationFail(messgae) {
    api.error({
      message: "\u0E1E\u0E1A\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25",
      description: messgae,
      placement: 'topRight'
    });
  };

  var validateURL = function validateURL(inputText) {
    setUrl(validator__WEBPACK_IMPORTED_MODULE_10___default.a.trim(inputText));
  };

  var onResetForm = function onResetForm() {
    setIsHasBless(introData.is_has_bless == 1 ? 1 : 0);
    setIsUse(introData.is_use == 1 ? 1 : 0);
    setFields([{
      name: ['intro_title'],
      value: introData.intro_title
    }, {
      name: ['intro_url'],
      value: introData.intro_url
    }, {
      name: ['intro_btn'],
      value: introData.intro_btn
    }, {
      name: ['intro_image'],
      value: introData.intro_image
    }, {
      name: ['intro_date_s'],
      value: moment__WEBPACK_IMPORTED_MODULE_8___default()(Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_12__["convertDateDBtoDatePickerWithTime"])(introData.intro_date_s))
    }, {
      name: ['intro_date_e'],
      value: moment__WEBPACK_IMPORTED_MODULE_8___default()(Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_12__["convertDateDBtoDatePickerWithTime"])(introData.intro_date_e))
    }]);
  };

  var imageUploadprops = {
    name: 'file',
    multiple: false,
    listType: 'text',
    maxCount: 1,
    action: "/api/upload/holiday",
    preview: false,
    // uid: user.type_user == 1 ? "admin" : user.organization_id,
    // beforeUpload(file) {
    // 	const isLt10M = file.size / 1024 / 1024 < 10
    // 	if (!isLt10M) {
    // 		notification.open({
    // 			message: 'Upload error!',
    // 			description: <Text className="text-black">Image must smaller than 10MB!</Text>,
    // 		})
    // 	}
    // 	return isLt10M
    // },
    customRequest: function customRequest(options) {
      var data = new FormData();
      data.append('file', options.file);
      data.append('id', user.type_user == 1 ? "admin" : user.organization_id);
      var config = {
        headers: {
          'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s'
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(options.action, data, config).then(function (res) {
        // imageLandingPage
        // console.log(res.data.data.list[0]._name)
        setImageLandingPage(res.data.data.list[0]._name);
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
                status = info.file.status; // console.log(user)

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
                setPreviewImage(info.file.url || info.file.preview);
                setPreviewVisible(true);
                return _context2.abrupt("break", 12);

              case 11:
                // error or removed
                resetImagePreview();

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    onRemove: function onRemove(info) {
      console.log('onRemove');
      console.log(info);
      resetImagePreview();
    }
  };

  var resetImagePreview = function resetImagePreview() {
    setPreviewVisible(false);
    setPreviewImage(null);
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

  return __jsx(_components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_11__["default"], {
    title: "Government - Admin management",
    titlePage: introData ? "แก้ไขวันหยุด " + introData.intro_title : "แก้ไข landing page",
    indexSubMenu: "6",
    indexMenu: "sub-6-3",
    url: origin,
    origin: origin,
    props: props,
    _routes: [{
      path: '/admin/dashborad',
      breadcrumbName: 'หน้าหลัก'
    }, {
      path: '/admin/setting/general/management-holiday',
      breadcrumbName: 'จัดการวันหยุดพิเศษ'
    }, {
      path: '',
      breadcrumbName: 'แก้ไขวันหยุด'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 7
    }
  }, contextHolder, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"], {
    name: "basic",
    className: "w-full" // initialValues={{ email: email, invitationCode: code }}
    ,
    layout: "vertical",
    onFinish: onSubmitHandler // onFinishFailed={onFinishFailed}
    ,
    requiredMark: true,
    form: form,
    fields: fields,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    name: "intro_title",
    label: "\u0E0A\u0E37\u0E48\u0E2D\u0E27\u0E31\u0E19\u0E2B\u0E22\u0E38\u0E14",
    className: "block text-gray-700 text-sm font-bold mb-2 w-1/3 form-organization",
    style: {
      textAlign: "left !important"
    },
    rules: [{
      required: true,
      message: 'กรุณากรอก ชื่อวันหยุด!'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 13
    }
  }, __jsx("input", {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "#",
    type: "text",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E27\u0E31\u0E19\u0E2B\u0E22\u0E38\u0E14",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    name: "intro_date_s",
    label: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E23\u0E34\u0E48\u0E21\u0E41\u0E2A\u0E14\u0E07",
    className: "block text-gray-700 text-sm font-bold mb-2  w-1/3 form-organization",
    style: {
      textAlign: "left !important"
    },
    rules: [{
      required: true,
      message: 'กรุณากรอก วันที่เริ่มแสดง!'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["DatePicker"], {
    format: "YYYY-MM-DD",
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" // showTime={{ defaultValue: moment('00:00:00') }}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    name: "intro_date_e",
    label: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07",
    className: "block text-gray-700 text-sm font-bold mb-2  w-1/3 form-organization",
    style: {
      textAlign: "left !important"
    },
    rules: [{
      required: true,
      message: 'กรุณากรอก วันที่สิ้นสุดการแสดง!'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["DatePicker"], {
    format: "YYYY-MM-DD",
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" // showTime={{ defaultValue: moment('00:00:00') }}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 15
    }
  })), __jsx("div", {
    style: {
      clear: "both"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    name: "intro_image",
    label: "\u0E20\u0E32\u0E1E\u0E27\u0E31\u0E19\u0E2B\u0E22\u0E38\u0E14",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    rules: [{
      required: true,
      message: 'กรุณาเลือก ภาพวันหยุด'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 13
    }
  }, __jsx(Dragger, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    maxCount: 1 // listType="picture"
    ,
    accept: ".jpg, .jpeg, .png"
  }, imageUploadprops, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 15
    }
  }), previewVisible && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Image"] // width={200}
  , {
    preview: false,
    src: previewImage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 21
    }
  })), !previewVisible && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14")))), __jsx("div", {
    style: {
      clear: "both"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    name: "intro_btn",
    label: "\u0E04\u0E33\u0E17\u0E35\u0E48\u0E41\u0E2A\u0E14\u0E07\u0E1A\u0E19\u0E1B\u0E38\u0E48\u0E21",
    className: "block text-gray-700 text-sm font-bold mb-2  w-1/2 form-organization",
    style: {
      textAlign: "left !important"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 13
    }
  }, __jsx("input", {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    size: "large",
    placeholder: "\u0E04\u0E33\u0E17\u0E35\u0E48\u0E41\u0E2A\u0E14\u0E07\u0E1A\u0E19\u0E1B\u0E38\u0E48\u0E21",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    name: "intro_url",
    label: "url \u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E25\u0E34\u0E07\u0E04\u0E4C\u0E44\u0E1B",
    className: "block text-gray-700 text-sm font-bold mb-2  w-1/2 form-organization",
    style: {
      textAlign: "left !important"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 13
    }
  }, __jsx("input", {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    size: "large",
    placeholder: "url \u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E25\u0E34\u0E07\u0E04\u0E4C\u0E44\u0E1B" // onChange={() => setEmailText(event.target.value)}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 15
    }
  })), __jsx("div", {
    style: {
      clear: "both"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    className: "flex mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "lg:inline-flex text-left w-full lg:w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
    checked: isHasBless,
    onClick: setIsHasBless,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 19
    }
  }), __jsx("p", {
    className: "mx-2 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 19
    }
  }, "\u0E21\u0E35\u0E01\u0E32\u0E23\u0E16\u0E27\u0E32\u0E22\u0E1E\u0E23\u0E30\u0E1E\u0E23"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 19
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
    checked: isUse,
    onClick: setIsUse,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 19
    }
  }), __jsx("p", {
    className: "mx-2 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 19
    }
  }, "\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25")), __jsx("div", {
    className: "text-center lg:text-right w-full lg:w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    htmlType: "button",
    onClick: onResetForm,
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
      lineNumber: 428,
      columnNumber: 19
    }
  }, __jsx(Text, {
    className: "text-custom-black ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 21
    }
  }, "\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E17")), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Button"] // type="primary"
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
      lineNumber: 445,
      columnNumber: 19
    }
  }, __jsx(Text, {
    className: "text-custom-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 21
    }
  }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01")))))))));
}
/* getServerSideProps */

_s(Home, "h1kphARK7nwnjRKLWM1PFroRx10=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"], antd__WEBPACK_IMPORTED_MODULE_6__["Form"].useForm, antd__WEBPACK_IMPORTED_MODULE_6__["notification"].useNotification];
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9zZXR0aW5nL2dlbmVyYWwvW2hvbGlkYXlJZF0uanMiXSwibmFtZXMiOlsiVGV4dCIsIlR5cG9ncmFwaHkiLCJUaXRsZSIsIkRyYWdnZXIiLCJVcGxvYWQiLCJIb21lIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJob2xpZGF5SWQiLCJxdWVyeSIsInVzZXIiLCJvcmlnaW4iLCJ1c2VTdGF0ZSIsInVybCIsInNldFVybCIsInByZXZpZXdJbWFnZSIsInNldFByZXZpZXdJbWFnZSIsImltYWdlTGFuZGluZ1BhZ2UiLCJzZXRJbWFnZUxhbmRpbmdQYWdlIiwicHJldmlld1Zpc2libGUiLCJzZXRQcmV2aWV3VmlzaWJsZSIsImlzSGFzQmxlc3MiLCJzZXRJc0hhc0JsZXNzIiwiaXNVc2UiLCJzZXRJc1VzZSIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsIm5vdGlmaWNhdGlvbiIsInVzZU5vdGlmaWNhdGlvbiIsImFwaSIsImNvbnRleHRIb2xkZXIiLCJpbnRyb0RhdGEiLCJzZXRJbnRyb0RhdGEiLCJuYW1lIiwidmFsdWUiLCJmaWVsZHMiLCJzZXRGaWVsZHMiLCJvblN1Ym1pdEhhbmRsZXIiLCJkYXRlX3NfU3RyIiwibW9tZW50IiwiaW50cm9fZGF0ZV9zIiwiZm9ybWF0IiwiZGF0ZV9lX1N0ciIsImludHJvX2RhdGVfZSIsImRhdGEiLCJvcmdhbml6YXRpb25faWQiLCJpbnRyb190aXRsZSIsImludHJvX3VybCIsImludHJvX2J0biIsImFwaUluc3RhbmNlIiwicHV0IiwicmVnaXN0ZXJEYXRhIiwic3RhdHVzIiwib3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MiLCJmZXRjaCIsInNldFRpbWVvdXQiLCJwdXNoIiwiYmluZCIsIm9wZW5Ob3RpZmljYXRpb25GYWlsIiwibWVzc2FnZSIsInVzZUVmZmVjdCIsImdldCIsIl9pbnRyb0RhdGEiLCJjb25zb2xlIiwibG9nIiwiaW50cm9faW1hZ2UiLCJpc19oYXNfYmxlc3MiLCJpc191c2UiLCJjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lIiwic3VjY2VzcyIsImRlc2NyaXB0aW9uIiwicGxhY2VtZW50IiwibWVzc2dhZSIsImVycm9yIiwidmFsaWRhdGVVUkwiLCJpbnB1dFRleHQiLCJ2YWxpZGF0b3IiLCJ0cmltIiwib25SZXNldEZvcm0iLCJjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyV2l0aFRpbWUiLCJpbWFnZVVwbG9hZHByb3BzIiwibXVsdGlwbGUiLCJsaXN0VHlwZSIsIm1heENvdW50IiwiYWN0aW9uIiwicHJldmlldyIsImN1c3RvbVJlcXVlc3QiLCJvcHRpb25zIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmaWxlIiwidHlwZV91c2VyIiwiY29uZmlnIiwiaGVhZGVycyIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXMiLCJsaXN0IiwiX25hbWUiLCJvblN1Y2Nlc3MiLCJlcnIiLCJvbkNoYW5nZSIsImluZm8iLCJnZXRCYXNlNjQiLCJvcmlnaW5GaWxlT2JqIiwicmVzZXRJbWFnZVByZXZpZXciLCJvblJlbW92ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJyZXN1bHQiLCJvbmVycm9yIiwicGF0aCIsImJyZWFkY3J1bWJOYW1lIiwidGV4dEFsaWduIiwicmVxdWlyZWQiLCJjbGVhciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5SaWdodCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0EsSUFBUUEsSUFBUixHQUF3QkMsK0NBQXhCLENBQVFELElBQVI7QUFBQSxJQUFjRSxLQUFkLEdB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Q0FBRDtBQUNFLFlBQVEsRUFBQyxRQURYO0FBRUUsV0FBTyxFQUFFdUQsV0FGWDtBQUdFLFNBQUssRUFBRTtBQUNMNEMscUJBQWUsRUFBRSxTQURaO0FBRUxDLGlCQUFXLEVBQUUsU0FGUjtBQUdMQyxZQUFNLEVBQUUsRUFISDtBQUlMQyxXQUFLLEVBQUUsR0FKRjtBQUtMQyxrQkFBWSxFQUFFLGdCQUxUO0FBTUxDLGlCQUFXLEVBQUUsS0FOUjtBQU9MQyxXQUFLLEVBQUU7QUFQRixLQUhULENBWUU7QUFaRjtBQWFFLGFBQVMsRUFBQyw0SUFiWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBZUUsTUFBQyxJQUFEO0FBQU0sYUFBUyxFQUFDLG9CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQWZGLENBREYsRUFrQkUsTUFBQywyQ0FBRCxDQUNFO0FBREY7QUFFRSxTQUFLLEVBQUU7QUFDTE4scUJBQWUsRUFBRSxTQURaO0FBRUxDLGlCQUFXLEVBQUUsU0FGUjtBQUdMQyxZQUFNLEVBQUUsRUFISDtBQUlMQyxXQUFLLEVBQUUsR0FKRjtBQUtMQyxrQkFBWSxFQUFFLGdCQUxUO0FBTUxFLFdBQUssRUFBRTtBQU5GLEtBRlQ7QUFVRSxZQUFRLEVBQUMsUUFWWDtBQVdFLGFBQVMsRUFBQyw0SUFYWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBYUUsTUFBQyxJQUFEO0FBQU0sYUFBUyxFQUFDLG9CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQWJGLENBbEJGLENBUkYsQ0FERixDQTVJRixDQURGLENBRkYsQ0FiRixDQURGO0FBbU5EO0FBQ0Q7O0dBdmN3QjdILEk7VUFDUEcscUQsRUFVQWtCLHlDQUFJLENBQUNDLE8sRUFDU0UsaURBQVksQ0FBQ0MsZTs7O0tBWnBCekIsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWRtaW5cXHNldHRpbmdcXGdlbmVyYWxcXFtob2xpZGF5SWRdLmpzLjI3OThlYWRlYzQ2NmY2NjE4MmFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmJveE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbiwgRGF0ZVBpY2tlciwgRm9ybSwgSW1hZ2UsIG5vdGlmaWNhdGlvbiwgUm93LCBTd2l0Y2gsIFR5cG9ncmFwaHksIFVwbG9hZFxyXG59IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuLy8gaW1wb3J0IFVzZXJOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL1VzZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdmFsaWRhdG9yIGZyb20gJ3ZhbGlkYXRvcic7XHJcbi8qIGNvbXBvbmVudHMgKi9cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRBZG1pbic7XHJcbi8qIHV0aWxzICovXHJcbmltcG9ydCB7IGFic29sdXRlVXJsLCBhcGlJbnN0YW5jZSwgY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZSwgY29udmVydERhdGVEQnRvRGF0ZVBpY2tlcldpdGhUaW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vbWlkZGxld2FyZS91dGlscyc7XHJcbmNvbnN0IHsgVGV4dCwgVGl0bGUgfSA9IFR5cG9ncmFwaHk7XHJcbmNvbnN0IHsgRHJhZ2dlciB9ID0gVXBsb2FkO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaG9saWRheUlkIH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7IHVzZXIsIG9yaWdpbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW3ByZXZpZXdJbWFnZSwgc2V0UHJldmlld0ltYWdlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2ltYWdlTGFuZGluZ1BhZ2UsIHNldEltYWdlTGFuZGluZ1BhZ2VdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbcHJldmlld1Zpc2libGUsIHNldFByZXZpZXdWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtpc0hhc0JsZXNzLCBzZXRJc0hhc0JsZXNzXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW2lzVXNlLCBzZXRJc1VzZV0gPSB1c2VTdGF0ZSgxKVxyXG5cclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuICBjb25zdCBbYXBpLCBjb250ZXh0SG9sZGVyXSA9IG5vdGlmaWNhdGlvbi51c2VOb3RpZmljYXRpb24oKTtcclxuICBjb25zdCBbaW50cm9EYXRhLCBzZXRJbnRyb0RhdGFdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5cclxuICBjb25zdCBbZmllbGRzLCBzZXRGaWVsZHNdID0gdXNlU3RhdGUoW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBbJ2ludHJvX3RpdGxlJ10sXHJcbiAgICAgIHZhbHVlOiAnJyxcclxuICAgIH0sXHJcbiAgXSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0SGFuZGxlcih2YWx1ZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJ2YWx1ZVwiKVxyXG4gICAgLy8gY29uc29sZS5sb2codmFsdWUpXHJcbiAgICB2YXIgZGF0ZV9zX1N0ciA9IG1vbWVudCh2YWx1ZS5pbnRyb19kYXRlX3MpLmZvcm1hdCgpXHJcbiAgICB2YXIgZGF0ZV9lX1N0ciA9IG1vbWVudCh2YWx1ZS5pbnRyb19kYXRlX2UpLmZvcm1hdCgpXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBcIm9yZ2FuaXphdGlvbl9pZFwiOiB1c2VyLm9yZ2FuaXphdGlvbl9pZCxcclxuICAgICAgXCJpbnRyb190aXRsZVwiOiB2YWx1ZS5pbnRyb190aXRsZSxcclxuICAgICAgXCJpbnRyb191cmxcIjogdmFsdWUuaW50cm9fdXJsLFxyXG4gICAgICBcImludHJvX2J0blwiOiB2YWx1ZS5pbnRyb19idG4sXHJcbiAgICAgIFwiaW50cm9fZGF0ZV9zXCI6IGRhdGVfc19TdHIsXHJcbiAgICAgIFwiaW50cm9fZGF0ZV9lXCI6IGRhdGVfZV9TdHIsXHJcbiAgICAgIFwiaW50cm9faW1hZ2VcIjogaW1hZ2VMYW5kaW5nUGFnZSxcclxuICAgICAgXCJpc19oYXNfYmxlc3NcIjogaXNIYXNCbGVzcyxcclxuICAgICAgXCJpc191c2VcIjogaXNVc2UsXHJcbiAgICAgIFwiaXNfYWRtaW5cIjogMSxcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWdpc3RlckRhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLnB1dCgnL2hvbGlkYXkvJyArIGhvbGlkYXlJZCwgZGF0YSk7XHJcbiAgICBpZiAocmVnaXN0ZXJEYXRhLmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICBvcGVuTm90aWZpY2F0aW9uU3VjY2VzcygpXHJcbiAgICAgIGZldGNoKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyAvL1N0YXJ0IHRoZSB0aW1lclxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvYWRtaW4vc2V0dGluZy9nZW5lcmFsL21hbmFnZW1lbnQtaG9saWRheScpXHJcbiAgICAgIH0uYmluZCh0aGlzKSwgMjAwMClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9wZW5Ob3RpZmljYXRpb25GYWlsKHJlZ2lzdGVyRGF0YS5kYXRhLm1lc3NhZ2UpXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKCk7XHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGZldGNoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgX2ludHJvRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAnL2hvbGlkYXkvJyArIGhvbGlkYXlJZFxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKF9pbnRyb0RhdGEpXHJcbiAgICBjb25zb2xlLmxvZyhfaW50cm9EYXRhLmRhdGEuaW50cm9EYXRhLmludHJvX2RhdGVfcylcclxuICAgIHNldEludHJvRGF0YShfaW50cm9EYXRhLmRhdGEuaW50cm9EYXRhKVxyXG4gICAgc2V0UHJldmlld0ltYWdlKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArIHVzZXIub3JnYW5pemF0aW9uX2lkICsgJ1xcXFxob2xpZGF5XFxcXCcgKyBfaW50cm9EYXRhLmRhdGEuaW50cm9EYXRhLmludHJvX2ltYWdlKVxyXG4gICAgc2V0UHJldmlld1Zpc2libGUodHJ1ZSlcclxuICAgIHNldEltYWdlTGFuZGluZ1BhZ2UoX2ludHJvRGF0YS5kYXRhLmludHJvRGF0YS5pbnRyb19pbWFnZSlcclxuICAgIHNldElzSGFzQmxlc3MoX2ludHJvRGF0YS5kYXRhLmludHJvRGF0YS5pc19oYXNfYmxlc3MpXHJcbiAgICBzZXRJc1VzZShfaW50cm9EYXRhLmRhdGEuaW50cm9EYXRhLmlzX3VzZSlcclxuICAgIHNldEZpZWxkcyhbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2ludHJvX3RpdGxlJ10sXHJcbiAgICAgICAgdmFsdWU6IF9pbnRyb0RhdGEuZGF0YS5pbnRyb0RhdGEgPyBfaW50cm9EYXRhLmRhdGEuaW50cm9EYXRhLmludHJvX3RpdGxlIDogXCJcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnaW50cm9fZGF0ZV9zJ10sXHJcbiAgICAgICAgdmFsdWU6IG1vbWVudChjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lKF9pbnRyb0RhdGEuZGF0YS5pbnRyb0RhdGEuaW50cm9fZGF0ZV9zKSksXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2ludHJvX2RhdGVfZSddLFxyXG4gICAgICAgIHZhbHVlOiBtb21lbnQoY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZShfaW50cm9EYXRhLmRhdGEuaW50cm9EYXRhLmludHJvX2RhdGVfZSkpLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydpbnRyb19pbWFnZSddLFxyXG4gICAgICAgIHZhbHVlOiBfaW50cm9EYXRhLmRhdGEuaW50cm9EYXRhLmludHJvX2ltYWdlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydpbnRyb19idG4nXSxcclxuICAgICAgICB2YWx1ZTogX2ludHJvRGF0YS5kYXRhLmludHJvRGF0YS5pbnRyb19idG4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2ludHJvX3VybCddLFxyXG4gICAgICAgIHZhbHVlOiBfaW50cm9EYXRhLmRhdGEuaW50cm9EYXRhLmludHJvX3VybCxcclxuICAgICAgfSxcclxuICAgIF0pXHJcbiAgfTtcclxuICBjb25zdCBvcGVuTm90aWZpY2F0aW9uU3VjY2VzcyA9ICgpID0+IHtcclxuICAgIGFwaS5zdWNjZXNzKHtcclxuICAgICAgbWVzc2FnZTogYOC4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iGAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAn4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIJyxcclxuICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvbkZhaWwgPSAobWVzc2dhZSkgPT4ge1xyXG4gICAgYXBpLmVycm9yKHtcclxuICAgICAgbWVzc2FnZTogYOC4nuC4muC4m+C4seC4jeC4q+C4suC4o+C4sOC4q+C4p+C5iOC4suC4h+C4geC4suC4o+C4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4pWAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBtZXNzZ2FlLFxyXG4gICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB2YWxpZGF0ZVVSTCA9IChpbnB1dFRleHQpID0+IHtcclxuICAgIHNldFVybCh2YWxpZGF0b3IudHJpbShpbnB1dFRleHQpKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25SZXNldEZvcm0gPSAoKSA9PiB7XHJcbiAgICBzZXRJc0hhc0JsZXNzKGludHJvRGF0YS5pc19oYXNfYmxlc3MgPT0gMSA/IDEgOiAwKTtcclxuICAgIHNldElzVXNlKGludHJvRGF0YS5pc191c2UgPT0gMSA/IDEgOiAwKTtcclxuICAgIHNldEZpZWxkcyhbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2ludHJvX3RpdGxlJ10sXHJcbiAgICAgICAgdmFsdWU6IGludHJvRGF0YS5pbnRyb190aXRsZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnaW50cm9fdXJsJ10sXHJcbiAgICAgICAgdmFsdWU6IGludHJvRGF0YS5pbnRyb191cmwsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2ludHJvX2J0biddLFxyXG4gICAgICAgIHZhbHVlOiBpbnRyb0RhdGEuaW50cm9fYnRuLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydpbnRyb19pbWFnZSddLFxyXG4gICAgICAgIHZhbHVlOiBpbnRyb0RhdGEuaW50cm9faW1hZ2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2ludHJvX2RhdGVfcyddLFxyXG4gICAgICAgIHZhbHVlOiBtb21lbnQoXHJcbiAgICAgICAgICBjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyV2l0aFRpbWUoXHJcbiAgICAgICAgICAgIGludHJvRGF0YS5pbnRyb19kYXRlX3MsXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICksXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2ludHJvX2RhdGVfZSddLFxyXG4gICAgICAgIHZhbHVlOiBtb21lbnQoXHJcbiAgICAgICAgICBjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyV2l0aFRpbWUoXHJcbiAgICAgICAgICAgIGludHJvRGF0YS5pbnRyb19kYXRlX2UsXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICksXHJcbiAgICAgIH0sXHJcbiAgICBdKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGltYWdlVXBsb2FkcHJvcHMgPSB7XHJcbiAgICBuYW1lOiAnZmlsZScsXHJcbiAgICBtdWx0aXBsZTogZmFsc2UsXHJcbiAgICBsaXN0VHlwZTogJ3RleHQnLFxyXG4gICAgbWF4Q291bnQ6IDEsXHJcbiAgICBhY3Rpb246IFwiL2FwaS91cGxvYWQvaG9saWRheVwiLFxyXG4gICAgcHJldmlldzogZmFsc2UsXHJcbiAgICAvLyB1aWQ6IHVzZXIudHlwZV91c2VyID09IDEgPyBcImFkbWluXCIgOiB1c2VyLm9yZ2FuaXphdGlvbl9pZCxcclxuICAgIC8vIGJlZm9yZVVwbG9hZChmaWxlKSB7XHJcbiAgICAvLyBcdGNvbnN0IGlzTHQxME0gPSBmaWxlLnNpemUgLyAxMDI0IC8gMTAyNCA8IDEwXHJcbiAgICAvLyBcdGlmICghaXNMdDEwTSkge1xyXG4gICAgLy8gXHRcdG5vdGlmaWNhdGlvbi5vcGVuKHtcclxuICAgIC8vIFx0XHRcdG1lc3NhZ2U6ICdVcGxvYWQgZXJyb3IhJyxcclxuICAgIC8vIFx0XHRcdGRlc2NyaXB0aW9uOiA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCI+SW1hZ2UgbXVzdCBzbWFsbGVyIHRoYW4gMTBNQiE8L1RleHQ+LFxyXG4gICAgLy8gXHRcdH0pXHJcbiAgICAvLyBcdH1cclxuICAgIC8vIFx0cmV0dXJuIGlzTHQxME1cclxuICAgIC8vIH0sXHJcbiAgICBjdXN0b21SZXF1ZXN0OiAob3B0aW9ucykgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdpZCcsIHVzZXIudHlwZV91c2VyID09IDEgPyBcImFkbWluXCIgOiB1c2VyLm9yZ2FuaXphdGlvbl9pZClcclxuICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdjb250ZW50LXR5cGUnOlxyXG4gICAgICAgICAgICAnbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9LS0tLVdlYktpdEZvcm1Cb3VuZGFyeXFUcUpJeHZrV0ZZcXZQNXMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3Qob3B0aW9ucy5hY3Rpb24sIGRhdGEsIGNvbmZpZylcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgLy8gaW1hZ2VMYW5kaW5nUGFnZVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLmRhdGEuZGF0YS5saXN0WzBdLl9uYW1lKVxyXG4gICAgICAgICAgc2V0SW1hZ2VMYW5kaW5nUGFnZShyZXMuZGF0YS5kYXRhLmxpc3RbMF0uX25hbWUpO1xyXG4gICAgICAgICAgb3B0aW9ucy5vblN1Y2Nlc3MocmVzLmRhdGEsIG9wdGlvbnMuZmlsZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgb25DaGFuZ2UoaW5mbykge1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gaW5mby5maWxlXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXIpXHJcbiAgICAgIHN3aXRjaCAoaW5mby5maWxlLnN0YXR1cykge1xyXG4gICAgICAgIC8vIGNhc2UgXCJ1cGxvYWRpbmdcIjpcclxuICAgICAgICAvLyAgIG5leHRTdGF0ZS5zZWxlY3RlZEZpbGVMaXN0ID0gW2luZm8uZmlsZV07XHJcbiAgICAgICAgLy8gICBicmVhaztcclxuICAgICAgICBjYXNlIFwiZG9uZVwiOlxyXG4gICAgICAgICAgaWYgKCFpbmZvLmZpbGUudXJsICYmICFpbmZvLmZpbGUucHJldmlldykge1xyXG4gICAgICAgICAgICBpbmZvLmZpbGUucHJldmlldyA9IGF3YWl0IGdldEJhc2U2NChpbmZvLmZpbGUub3JpZ2luRmlsZU9iaik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRQcmV2aWV3SW1hZ2UoaW5mby5maWxlLnVybCB8fCBpbmZvLmZpbGUucHJldmlldylcclxuICAgICAgICAgIHNldFByZXZpZXdWaXNpYmxlKHRydWUpXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIC8vIGVycm9yIG9yIHJlbW92ZWRcclxuICAgICAgICAgIHJlc2V0SW1hZ2VQcmV2aWV3KCk7XHJcbiAgICAgIH1cclxuICAgICAgLy9jb25zb2xlLmxvZyhpbmZvLmZpbGUpXHJcblxyXG4gICAgICAvLyB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgLy8gICBwcmV2aWV3SW1hZ2U6IGZpbGUudXJsIHx8IGZpbGUucHJldmlldyxcclxuICAgICAgLy8gICBwcmV2aWV3VmlzaWJsZTogdHJ1ZSxcclxuICAgICAgLy8gfSk7XHJcbiAgICB9LFxyXG4gICAgb25SZW1vdmUoaW5mbykge1xyXG4gICAgICBjb25zb2xlLmxvZygnb25SZW1vdmUnKTtcclxuICAgICAgY29uc29sZS5sb2coaW5mbyk7XHJcbiAgICAgIHJlc2V0SW1hZ2VQcmV2aWV3KCk7XHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc2V0SW1hZ2VQcmV2aWV3ID0gKCkgPT4ge1xyXG4gICAgc2V0UHJldmlld1Zpc2libGUoZmFsc2UpO1xyXG4gICAgc2V0UHJldmlld0ltYWdlKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGdldEJhc2U2NChmaWxlKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgIHJlYWRlci5vbmVycm9yID0gZXJyb3IgPT4gcmVqZWN0KGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGU9XCJHb3Zlcm5tZW50IC0gQWRtaW4gbWFuYWdlbWVudFwiIHRpdGxlUGFnZT17aW50cm9EYXRhID8gXCLguYHguIHguYnguYTguILguKfguLHguJnguKvguKLguLjguJQgXCIgKyBpbnRyb0RhdGEuaW50cm9fdGl0bGUgOiBcIuC5geC4geC5ieC5hOC4giBsYW5kaW5nIHBhZ2VcIn1cclxuICAgICAgaW5kZXhTdWJNZW51PXtcIjZcIn1cclxuICAgICAgaW5kZXhNZW51PXtcInN1Yi02LTNcIn0gdXJsPXtvcmlnaW59IG9yaWdpbj17b3JpZ2lufSBwcm9wcz17cHJvcHN9IF9yb3V0ZXM9e1tcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYXRoOiAnL2FkbWluL2Rhc2hib3JhZCcsXHJcbiAgICAgICAgICBicmVhZGNydW1iTmFtZTogJ+C4q+C4meC5ieC4suC4q+C4peC4seC4gScsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgcGF0aDogJy9hZG1pbi9zZXR0aW5nL2dlbmVyYWwvbWFuYWdlbWVudC1ob2xpZGF5JyxcclxuICAgICAgICAgIGJyZWFkY3J1bWJOYW1lOiAn4LiI4Lix4LiU4LiB4Liy4Lij4Lin4Lix4LiZ4Lir4Lii4Li44LiU4Lie4Li04LmA4Lio4LipJyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICAgIGJyZWFkY3J1bWJOYW1lOiAn4LmB4LiB4LmJ4LmE4LiC4Lin4Lix4LiZ4Lir4Lii4Li44LiUJyxcclxuICAgICAgICB9XX0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2NvbnRleHRIb2xkZXJ9XHJcbiAgICAgICAgPFJvdyA+XHJcbiAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICBuYW1lPVwiYmFzaWNcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICAvLyBpbml0aWFsVmFsdWVzPXt7IGVtYWlsOiBlbWFpbCwgaW52aXRhdGlvbkNvZGU6IGNvZGUgfX1cclxuICAgICAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICBvbkZpbmlzaD17b25TdWJtaXRIYW5kbGVyfVxyXG4gICAgICAgICAgICAvLyBvbkZpbmlzaEZhaWxlZD17b25GaW5pc2hGYWlsZWR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkTWFyaz17dHJ1ZX1cclxuICAgICAgICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgICAgICAgZmllbGRzPXtmaWVsZHN9XHJcbiAgICAgICAgICA+XHJcblxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJpbnRyb190aXRsZVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCLguIrguLfguYjguK3guKfguLHguJnguKvguKLguLjguJRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LTEvMyBmb3JtLW9yZ2FuaXphdGlvblwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnQgIWltcG9ydGFudFwiIH19XHJcbiAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIEg4LiK4Li34LmI4Lit4Lin4Lix4LiZ4Lir4Lii4Li44LiUISdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiK4Li34LmI4Lit4Lin4Lix4LiZ4Lir4Lii4Li44LiUXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJpbnRyb19kYXRlX3NcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwi4Lin4Lix4LiZ4LiX4Li14LmI4LmA4Lij4Li04LmI4Lih4LmB4Liq4LiU4LiHXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgIHctMS8zIGZvcm0tb3JnYW5pemF0aW9uXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdCAhaW1wb3J0YW50XCIgfX1cclxuICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4gSDguKfguLHguJnguJfguLXguYjguYDguKPguLTguYjguKHguYHguKrguJTguIchJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ9XCJZWVlZLU1NLUREXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAvLyBzaG93VGltZT17eyBkZWZhdWx0VmFsdWU6IG1vbWVudCgnMDA6MDA6MDAnKSB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgbmFtZT1cImludHJvX2RhdGVfZVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCLguKfguLHguJnguJfguLXguYjguKrguLTguYnguJnguKrguLjguJTguIHguLLguKPguYHguKrguJTguIdcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiAgdy0xLzMgZm9ybS1vcmdhbml6YXRpb25cIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0ICFpbXBvcnRhbnRcIiB9fVxyXG4gICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiBIOC4p+C4seC4meC4l+C4teC5iOC4quC4tOC5ieC4meC4quC4uOC4lOC4geC4suC4o+C5geC4quC4lOC4hyEnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgZm9ybWF0PVwiWVlZWS1NTS1ERFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgLy8gc2hvd1RpbWU9e3sgZGVmYXVsdFZhbHVlOiBtb21lbnQoJzAwOjAwOjAwJykgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjbGVhcjogXCJib3RoXCIgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICBuYW1lPVwiaW50cm9faW1hZ2VcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwi4Lig4Liy4Lie4Lin4Lix4LiZ4Lir4Lii4Li44LiUXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC5gOC4peC4t+C4reC4gSDguKDguLLguJ7guKfguLHguJnguKvguKLguLjguJQnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgey8qIDxEcmFnZ2VyIHsuLi5kcm9waW1nfT4gKi99XHJcbiAgICAgICAgICAgICAgPERyYWdnZXJcclxuICAgICAgICAgICAgICAgIG1heENvdW50PXsxfVxyXG4gICAgICAgICAgICAgICAgLy8gbGlzdFR5cGU9XCJwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5qcGVnLCAucG5nXCJcclxuICAgICAgICAgICAgICAgIHsuLi5pbWFnZVVwbG9hZHByb3BzfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtwcmV2aWV3VmlzaWJsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcHJldmlldz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e3ByZXZpZXdJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7IXByZXZpZXdWaXNpYmxlICYmIChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEluYm94T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvRHJhZ2dlcj5cclxuXHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNsZWFyOiBcImJvdGhcIiB9fT48L2Rpdj5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJpbnRyb19idG5cIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwi4LiE4Liz4LiX4Li14LmI4LmB4Liq4LiU4LiH4Lia4LiZ4Lib4Li44LmI4LihXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgIHctMS8yIGZvcm0tb3JnYW5pemF0aW9uXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdCAhaW1wb3J0YW50XCIgfX1cclxuXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiIHBsYWNlaG9sZGVyPVwi4LiE4Liz4LiX4Li14LmI4LmB4Liq4LiU4LiH4Lia4LiZ4Lib4Li44LmI4LihXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICBuYW1lPVwiaW50cm9fdXJsXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cInVybCDguJfguLXguYjguJXguYnguK3guIfguIHguLLguKPguYPguKvguYnguKXguLTguIfguITguYzguYTguJtcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiAgdy0xLzIgZm9ybS1vcmdhbml6YXRpb25cIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0ICFpbXBvcnRhbnRcIiB9fVxyXG5cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiIHNpemU9XCJsYXJnZVwiIHBsYWNlaG9sZGVyPVwidXJsIOC4l+C4teC5iOC4leC5ieC4reC4h+C4geC4suC4o+C5g+C4q+C5ieC4peC4tOC4h+C4hOC5jOC5hOC4m1wiXHJcbiAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9eygpID0+IHNldEVtYWlsVGV4dChldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY2xlYXI6IFwiYm90aFwiIH19PjwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW0gY2xhc3NOYW1lPVwiZmxleCBtdC02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdGV4dC1sZWZ0IHctZnVsbCBsZzp3LTEvMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8U3dpdGNoIGNoZWNrZWQ9e2lzSGFzQmxlc3N9IG9uQ2xpY2s9e3NldElzSGFzQmxlc3N9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm14LTIgdGV4dC1zbVwiPuC4oeC4teC4geC4suC4o+C4luC4p+C4suC4ouC4nuC4o+C4sOC4nuC4ozwvcD5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggY2hlY2tlZD17aXNVc2V9IG9uQ2xpY2s9e3NldElzVXNlfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteC0yIHRleHQtc21cIj7guIHguLLguKPguYHguKrguJTguIfguJzguKU8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbGc6dGV4dC1yaWdodCB3LWZ1bGwgbGc6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlc2V0Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0MyQ0ZFMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDMkNGRTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwcHggIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHctZnVsbCBsZzp3LTEvNFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbS1ibGFjayBcIj7guKPguLXguYDguIvguYfguJc8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDU5NjY5JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzA1OTY2OScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMCxcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzBweCAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUgIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdy1mdWxsIGxnOnctMS80XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRleHQtY3VzdG9tLXdoaXRlIFwiPuC4muC4seC4meC4l+C4tuC4gTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuLyogZ2V0U2VydmVyU2lkZVByb3BzICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgcmVxIH0gPSBjb250ZXh0O1xyXG4gIGNvbnN0IHsgb3JpZ2luIH0gPSBhYnNvbHV0ZVVybChyZXEpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgb3JpZ2luLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=