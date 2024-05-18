webpackHotUpdate("static\\development\\pages\\admin\\setting\\general\\add-holiday.js",{

/***/ "./pages/admin/setting/general/add-holiday.js":
/*!****************************************************!*\
  !*** ./pages/admin/setting/general/add-holiday.js ***!
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





var _jsxFileName = "D:\\govermentlt\\pages\\admin\\setting\\general\\add-holiday.js",
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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();

  function onSubmitHandler(_x) {
    return _onSubmitHandler.apply(this, arguments);
  }

  function _onSubmitHandler() {
    _onSubmitHandler = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(value) {
      var date_s_Str, date_e_Str, data, introData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
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
              _context2.next = 5;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_12__["apiInstance"])().post('/holiday', data);

            case 5:
              introData = _context2.sent;

              if (introData.data.status == 200) {
                openNotificationSuccess();
                setTimeout(function () {
                  //Start the timer
                  router.push('/admin/setting/general/management-holiday');
                }.bind(this), 2000);
              } else {
                openNotificationFail(introData.data.message);
              }

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));
    return _onSubmitHandler.apply(this, arguments);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {}, []);

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
    form.resetFields();
    setUrl("");
    resetImagePreview();
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
        "headers": {
          "content-type": 'multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s'
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
      return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var status;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                status = info.file.status; // console.log(user)

                _context.t0 = info.file.status;
                _context.next = _context.t0 === "done" ? 4 : 11;
                break;

              case 4:
                if (!(!info.file.url && !info.file.preview)) {
                  _context.next = 8;
                  break;
                }

                _context.next = 7;
                return getBase64(info.file.originFileObj);

              case 7:
                info.file.preview = _context.sent;

              case 8:
                setPreviewImage(info.file.url || info.file.preview);
                setPreviewVisible(true);
                return _context.abrupt("break", 12);

              case 11:
                // error or removed
                resetImagePreview();

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    onRemove: function onRemove(info) {
      console.log("onRemove");
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
    titlePage: "เพิ่มวันหยุด",
    indexMenu: "6",
    url: origin,
    origin: origin,
    props: props,
    _routes: [{
      path: '/admin/dashborad',
      breadcrumbName: 'หน้าหลัก'
    }, {
      path: '/admin/setting/general/management-holiday',
      breadcrumbName: 'จัดการหน้าวันหยุดพิเศษ'
    }, {
      path: '/admin/setting/general/add-holiday',
      breadcrumbName: 'เพิ่มวันหยุด'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 3
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 4
    }
  }, contextHolder, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 5
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 6
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
      lineNumber: 199,
      columnNumber: 7
    }
  }, __jsx("input", {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "#",
    type: "text",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E27\u0E31\u0E19\u0E2B\u0E22\u0E38\u0E14",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 8
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
      lineNumber: 218,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["DatePicker"], {
    format: "YYYY-MM-DD",
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" // showTime={{ defaultValue: moment('00:00:00') }}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 8
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
      lineNumber: 237,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["DatePicker"], {
    format: "YYYY-MM-DD",
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" // showTime={{ defaultValue: moment('00:00:00') }}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 8
    }
  })), __jsx("div", {
    style: {
      clear: "both"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 7
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
      lineNumber: 257,
      columnNumber: 7
    }
  }, __jsx(Dragger, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    maxCount: 1 // listType="picture"
    ,
    accept: ".jpg, .jpeg, .png"
  }, imageUploadprops, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 8
    }
  }), previewVisible && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Image"] // width={200}
  , {
    preview: false,
    src: previewImage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 30
    }
  })), !previewVisible && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 10
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 11
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 10
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14")))), __jsx("div", {
    style: {
      clear: "both"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 7
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
      lineNumber: 296,
      columnNumber: 7
    }
  }, __jsx("input", {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    size: "large",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D \u0E04\u0E33\u0E17\u0E35\u0E48\u0E41\u0E2A\u0E14\u0E07\u0E1A\u0E19\u0E1B\u0E38\u0E48\u0E21",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 8
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
      lineNumber: 309,
      columnNumber: 7
    }
  }, __jsx("input", {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    size: "large",
    placeholder: "Email" // onChange={() => setEmailText(event.target.value)}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 8
    }
  })), __jsx("div", {
    style: {
      clear: "both"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    className: "flex mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "lg:inline-flex text-left w-full lg:w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
    checked: isHasBless,
    onClick: setIsHasBless,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 10
    }
  }), __jsx("p", {
    className: "mx-2 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 10
    }
  }, "\u0E21\u0E35\u0E01\u0E32\u0E23\u0E16\u0E27\u0E32\u0E22\u0E1E\u0E23\u0E30\u0E1E\u0E23"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 10
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
    checked: isUse,
    onClick: setIsUse,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 10
    }
  }), __jsx("p", {
    className: "mx-2 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 10
    }
  }, "\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25")), __jsx("div", {
    className: "text-center lg:text-right w-full lg:w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 9
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
      lineNumber: 335,
      columnNumber: 10
    }
  }, __jsx(Text, {
    className: "text-custom-black ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 11
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
      lineNumber: 352,
      columnNumber: 10
    }
  }, __jsx(Text, {
    className: "text-custom-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 11
    }
  }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01")))))))));
}
/* getServerSideProps */

_s(Home, "R3vZH9snXXgQ/o+2dmAscP8Yt8g=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_6__["Form"].useForm, antd__WEBPACK_IMPORTED_MODULE_6__["notification"].useNotification, next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9zZXR0aW5nL2dlbmVyYWwvYWRkLWhvbGlkYXkuanMiXSwibmFtZXMiOlsiVGV4dCIsIlR5cG9ncmFwaHkiLCJUaXRsZSIsIkRyYWdnZXIiLCJVcGxvYWQiLCJIb21lIiwicHJvcHMiLCJ1c2VyIiwib3JpZ2luIiwidXNlU3RhdGUiLCJ1cmwiLCJzZXRVcmwiLCJwcmV2aWV3SW1hZ2UiLCJzZXRQcmV2aWV3SW1hZ2UiLCJpbWFnZUxhbmRpbmdQYWdlIiwic2V0SW1hZ2VMYW5kaW5nUGFnZSIsInByZXZpZXdWaXNpYmxlIiwic2V0UHJldmlld1Zpc2libGUiLCJpc0hhc0JsZXNzIiwic2V0SXNIYXNCbGVzcyIsImlzVXNlIiwic2V0SXNVc2UiLCJGb3JtIiwidXNlRm9ybSIsImZvcm0iLCJub3RpZmljYXRpb24iLCJ1c2VOb3RpZmljYXRpb24iLCJhcGkiLCJjb250ZXh0SG9sZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwib25TdWJtaXRIYW5kbGVyIiwidmFsdWUiLCJkYXRlX3NfU3RyIiwibW9tZW50IiwiaW50cm9fZGF0ZV9zIiwiZm9ybWF0IiwiZGF0ZV9lX1N0ciIsImludHJvX2RhdGVfZSIsImRhdGEiLCJvcmdhbml6YXRpb25faWQiLCJpbnRyb190aXRsZSIsImludHJvX3VybCIsImludHJvX2J0biIsImFwaUluc3RhbmNlIiwicG9zdCIsImludHJvRGF0YSIsInN0YXR1cyIsIm9wZW5Ob3RpZmljYXRpb25TdWNjZXNzIiwic2V0VGltZW91dCIsInB1c2giLCJiaW5kIiwib3Blbk5vdGlmaWNhdGlvbkZhaWwiLCJtZXNzYWdlIiwidXNlRWZmZWN0Iiwic3VjY2VzcyIsImRlc2NyaXB0aW9uIiwicGxhY2VtZW50IiwibWVzc2dhZSIsImVycm9yIiwidmFsaWRhdGVVUkwiLCJpbnB1dFRleHQiLCJ2YWxpZGF0b3IiLCJ0cmltIiwib25SZXNldEZvcm0iLCJyZXNldEZpZWxkcyIsInJlc2V0SW1hZ2VQcmV2aWV3IiwiaW1hZ2VVcGxvYWRwcm9wcyIsIm5hbWUiLCJtdWx0aXBsZSIsImxpc3RUeXBlIiwibWF4Q291bnQiLCJhY3Rpb24iLCJwcmV2aWV3IiwiY3VzdG9tUmVxdWVzdCIsIm9wdGlvbnMiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZpbGUiLCJ0eXBlX3VzZXIiLCJjb25maWciLCJheGlvcyIsInRoZW4iLCJyZXMiLCJsaXN0IiwiX25hbWUiLCJvblN1Y2Nlc3MiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwib25DaGFuZ2UiLCJpbmZvIiwiZ2V0QmFzZTY0Iiwib3JpZ2luRmlsZU9iaiIsIm9uUmVtb3ZlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJwYXRoIiwiYnJlYWRjcnVtYk5hbWUiLCJ0ZXh0QWxpZ24iLCJyZXF1aXJlZCIsImNsZWFyIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblJpZ2h0IiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxJQUFRQSxJQUFSLEdBQXdCQywrQ0FBeEIsQ0FBUUQsSUFBUjtBQUFBLElBQWNFLEtBQWQsR0FBd0JELCtDQUF4QixDQUFjQyxLQUFkO0FBQ0EsSUFBUUMsT0FBUixHQUFvQkMsMkNBQXBCLENBQVFELE9BQVI7O0FBRWUsU0FBU0UsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQ25DLE1BQVFDLElBQVIsR0FBeUJELEtBQXpCLENBQVFDLElBQVI7QUFBQSxNQUFjQyxNQUFkLEdBQXlCRixLQUF6QixDQUFjRSxNQUFkOztBQUNBLGtCQUFzQkMsc0RBQVEsQ0FB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LEVBQUUyQyxXQUZWO0FBR0MsU0FBSyxFQUFFO0FBQ042QyxxQkFBZSxFQUFFLFNBRFg7QUFFTkMsaUJBQVcsRUFBRSxTQUZQO0FBR05DLFlBQU0sRUFBRSxFQUhGO0FBSU5DLFdBQUssRUFBRSxHQUpEO0FBS05DLGtCQUFZLEVBQUUsZ0JBTFI7QUFNTkMsaUJBQVcsRUFBRSxLQU5QO0FBT05DLFdBQUssRUFBRTtBQVBELEtBSFIsQ0FZQztBQVpEO0FBYUMsYUFBUyxFQUFDLDRJQWJYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FlQyxNQUFDLElBQUQ7QUFBTSxhQUFTLEVBQUMsb0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBZkQsQ0FERCxFQWtCQyxNQUFDLDJDQUFELENBQ0M7QUFERDtBQUVDLFNBQUssRUFBRTtBQUNOTixxQkFBZSxFQUFFLFNBRFg7QUFFTkMsaUJBQVcsRUFBRSxTQUZQO0FBR05DLFlBQU0sRUFBRSxFQUhGO0FBSU5DLFdBQUssRUFBRSxHQUpEO0FBS05DLGtCQUFZLEVBQUUsZ0JBTFI7QUFNTkUsV0FBSyxFQUFFO0FBTkQsS0FGUjtBQVVDLFlBQVEsRUFBQyxRQVZWO0FBV0MsYUFBUyxFQUFDLDRJQVhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FhQyxNQUFDLElBQUQ7QUFBTSxhQUFTLEVBQUMsb0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBYkQsQ0FsQkQsQ0FSRCxDQURELENBMUlELENBREQsQ0FGRCxDQVhELENBREQ7QUErTUE7QUFDRDs7R0ExV3dCOUcsSTtVQVFSaUIseUNBQUksQ0FBQ0MsTyxFQUNTRSxpREFBWSxDQUFDQyxlLEVBQzNCSSxxRDs7O0tBVlF6QixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pblxcc2V0dGluZ1xcZ2VuZXJhbFxcYWRkLWhvbGlkYXkuanMuMzUxNzc4YmMwYjY1ODZjNGIwMTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluYm94T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7XHJcblx0QnV0dG9uLCBEYXRlUGlja2VyLCBGb3JtLCBJbWFnZSwgbm90aWZpY2F0aW9uLCBSb3csIFN3aXRjaCwgVHlwb2dyYXBoeSwgVXBsb2FkXHJcbn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG4vLyBpbXBvcnQgVXNlck5hdiBmcm9tICcuLi9jb21wb25lbnRzL25hdmlnYXRpb24vVXNlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB2YWxpZGF0b3IgZnJvbSAndmFsaWRhdG9yJztcclxuLyogY29tcG9uZW50cyAqL1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dEFkbWluJztcclxuLyogdXRpbHMgKi9cclxuaW1wb3J0IHsgYWJzb2x1dGVVcmwsIGFwaUluc3RhbmNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbWlkZGxld2FyZS91dGlscyc7XHJcbmNvbnN0IHsgVGV4dCwgVGl0bGUgfSA9IFR5cG9ncmFwaHk7XHJcbmNvbnN0IHsgRHJhZ2dlciB9ID0gVXBsb2FkO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG5cdGNvbnN0IHsgdXNlciwgb3JpZ2luIH0gPSBwcm9wcztcclxuXHRjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoXCJcIilcclxuXHRjb25zdCBbcHJldmlld0ltYWdlLCBzZXRQcmV2aWV3SW1hZ2VdID0gdXNlU3RhdGUobnVsbClcclxuXHRjb25zdCBbaW1hZ2VMYW5kaW5nUGFnZSwgc2V0SW1hZ2VMYW5kaW5nUGFnZV0gPSB1c2VTdGF0ZShudWxsKVxyXG5cdGNvbnN0IFtwcmV2aWV3VmlzaWJsZSwgc2V0UHJldmlld1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblx0Y29uc3QgW2lzSGFzQmxlc3MsIHNldElzSGFzQmxlc3NdID0gdXNlU3RhdGUoMClcclxuXHRjb25zdCBbaXNVc2UsIHNldElzVXNlXSA9IHVzZVN0YXRlKDEpXHJcblx0Y29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcblx0Y29uc3QgW2FwaSwgY29udGV4dEhvbGRlcl0gPSBub3RpZmljYXRpb24udXNlTm90aWZpY2F0aW9uKCk7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0YXN5bmMgZnVuY3Rpb24gb25TdWJtaXRIYW5kbGVyKHZhbHVlKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhcInZhbHVlXCIpXHJcblx0XHQvLyBjb25zb2xlLmxvZyh2YWx1ZSlcclxuXHRcdHZhciBkYXRlX3NfU3RyID0gbW9tZW50KHZhbHVlLmludHJvX2RhdGVfcykuZm9ybWF0KClcclxuXHRcdHZhciBkYXRlX2VfU3RyID0gbW9tZW50KHZhbHVlLmludHJvX2RhdGVfZSkuZm9ybWF0KClcclxuXHRcdGNvbnN0IGRhdGEgPSB7XHJcblx0XHRcdFwib3JnYW5pemF0aW9uX2lkXCI6IHVzZXIub3JnYW5pemF0aW9uX2lkLFxyXG5cdFx0XHRcImludHJvX3RpdGxlXCI6IHZhbHVlLmludHJvX3RpdGxlLFxyXG5cdFx0XHRcImludHJvX3VybFwiOiB2YWx1ZS5pbnRyb191cmwsXHJcblx0XHRcdFwiaW50cm9fYnRuXCI6IHZhbHVlLmludHJvX2J0bixcclxuXHRcdFx0XCJpbnRyb19kYXRlX3NcIjogZGF0ZV9zX1N0cixcclxuXHRcdFx0XCJpbnRyb19kYXRlX2VcIjogZGF0ZV9lX1N0cixcclxuXHRcdFx0XCJpbnRyb19pbWFnZVwiOiBpbWFnZUxhbmRpbmdQYWdlLFxyXG5cdFx0XHRcImlzX2hhc19ibGVzc1wiOiBpc0hhc0JsZXNzLFxyXG5cdFx0XHRcImlzX3VzZVwiOiBpc1VzZSxcclxuXHRcdFx0XCJpc19hZG1pblwiOiAxLFxyXG5cdFx0fVxyXG5cdFx0Y29uc3QgaW50cm9EYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5wb3N0KCcvaG9saWRheScsIGRhdGEpO1xyXG5cdFx0aWYgKGludHJvRGF0YS5kYXRhLnN0YXR1cyA9PSAyMDApIHtcclxuXHRcdFx0b3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MoKVxyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgLy9TdGFydCB0aGUgdGltZXJcclxuXHRcdFx0XHRyb3V0ZXIucHVzaCgnL2FkbWluL3NldHRpbmcvZ2VuZXJhbC9tYW5hZ2VtZW50LWhvbGlkYXknKVxyXG5cdFx0XHR9LmJpbmQodGhpcyksIDIwMDApXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRvcGVuTm90aWZpY2F0aW9uRmFpbChpbnRyb0RhdGEuZGF0YS5tZXNzYWdlKVxyXG5cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG5cdH0sIFtdKVxyXG5cclxuXHRjb25zdCBvcGVuTm90aWZpY2F0aW9uU3VjY2VzcyA9ICgpID0+IHtcclxuXHRcdGFwaS5zdWNjZXNzKHtcclxuXHRcdFx0bWVzc2FnZTogYOC4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iGAsXHJcblx0XHRcdGRlc2NyaXB0aW9uOiAn4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIJyxcclxuXHRcdFx0cGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb3Blbk5vdGlmaWNhdGlvbkZhaWwgPSAobWVzc2dhZSkgPT4ge1xyXG5cdFx0YXBpLmVycm9yKHtcclxuXHRcdFx0bWVzc2FnZTogYOC4nuC4muC4m+C4seC4jeC4q+C4suC4o+C4sOC4q+C4p+C5iOC4suC4h+C4geC4suC4o+C4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4pWAsXHJcblx0XHRcdGRlc2NyaXB0aW9uOiBtZXNzZ2FlLFxyXG5cdFx0XHRwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cdGNvbnN0IHZhbGlkYXRlVVJMID0gKGlucHV0VGV4dCkgPT4ge1xyXG5cdFx0c2V0VXJsKHZhbGlkYXRvci50cmltKGlucHV0VGV4dCkpXHJcblx0fVxyXG5cdGNvbnN0IG9uUmVzZXRGb3JtID0gKCkgPT4ge1xyXG5cdFx0Zm9ybS5yZXNldEZpZWxkcygpO1xyXG5cdFx0c2V0VXJsKFwiXCIpO1xyXG5cdFx0cmVzZXRJbWFnZVByZXZpZXcoKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGltYWdlVXBsb2FkcHJvcHMgPSB7XHJcblx0XHRuYW1lOiAnZmlsZScsXHJcblx0XHRtdWx0aXBsZTogZmFsc2UsXHJcblx0XHRsaXN0VHlwZTogJ3RleHQnLFxyXG5cdFx0bWF4Q291bnQ6IDEsXHJcblx0XHRhY3Rpb246IFwiL2FwaS91cGxvYWQvaG9saWRheVwiLFxyXG5cdFx0cHJldmlldzogZmFsc2UsXHJcblx0XHQvLyB1aWQ6IHVzZXIudHlwZV91c2VyID09IDEgPyBcImFkbWluXCIgOiB1c2VyLm9yZ2FuaXphdGlvbl9pZCxcclxuXHRcdC8vIGJlZm9yZVVwbG9hZChmaWxlKSB7XHJcblx0XHQvLyBcdGNvbnN0IGlzTHQxME0gPSBmaWxlLnNpemUgLyAxMDI0IC8gMTAyNCA8IDEwXHJcblx0XHQvLyBcdGlmICghaXNMdDEwTSkge1xyXG5cdFx0Ly8gXHRcdG5vdGlmaWNhdGlvbi5vcGVuKHtcclxuXHRcdC8vIFx0XHRcdG1lc3NhZ2U6ICdVcGxvYWQgZXJyb3IhJyxcclxuXHRcdC8vIFx0XHRcdGRlc2NyaXB0aW9uOiA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCI+SW1hZ2UgbXVzdCBzbWFsbGVyIHRoYW4gMTBNQiE8L1RleHQ+LFxyXG5cdFx0Ly8gXHRcdH0pXHJcblx0XHQvLyBcdH1cclxuXHRcdC8vIFx0cmV0dXJuIGlzTHQxME1cclxuXHRcdC8vIH0sXHJcblx0XHRjdXN0b21SZXF1ZXN0OiAob3B0aW9ucykgPT4ge1xyXG5cdFx0XHRjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcclxuXHRcdFx0ZGF0YS5hcHBlbmQoJ2ZpbGUnLCBvcHRpb25zLmZpbGUpXHJcblx0XHRcdGRhdGEuYXBwZW5kKCdpZCcsIHVzZXIudHlwZV91c2VyID09IDEgPyBcImFkbWluXCIgOiB1c2VyLm9yZ2FuaXphdGlvbl9pZClcclxuXHRcdFx0Y29uc3QgY29uZmlnID0ge1xyXG5cdFx0XHRcdFwiaGVhZGVyc1wiOiB7XHJcblx0XHRcdFx0XHRcImNvbnRlbnQtdHlwZVwiOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9LS0tLVdlYktpdEZvcm1Cb3VuZGFyeXFUcUpJeHZrV0ZZcXZQNXMnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGF4aW9zLnBvc3Qob3B0aW9ucy5hY3Rpb24sIGRhdGEsIGNvbmZpZykudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0Ly8gaW1hZ2VMYW5kaW5nUGFnZVxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhLmRhdGEubGlzdFswXS5fbmFtZSlcclxuXHRcdFx0XHRzZXRJbWFnZUxhbmRpbmdQYWdlKHJlcy5kYXRhLmRhdGEubGlzdFswXS5fbmFtZSlcclxuXHRcdFx0XHRvcHRpb25zLm9uU3VjY2VzcyhyZXMuZGF0YSwgb3B0aW9ucy5maWxlKVxyXG5cdFx0XHR9KS5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyKVxyXG5cdFx0XHR9KVxyXG5cclxuXHRcdH0sXHJcblx0XHRhc3luYyBvbkNoYW5nZShpbmZvKSB7XHJcblx0XHRcdGNvbnN0IHsgc3RhdHVzIH0gPSBpbmZvLmZpbGVcclxuXHRcdFx0Ly8gY29uc29sZS5sb2codXNlcilcclxuXHRcdFx0c3dpdGNoIChpbmZvLmZpbGUuc3RhdHVzKSB7XHJcblx0XHRcdFx0Ly8gY2FzZSBcInVwbG9hZGluZ1wiOlxyXG5cdFx0XHRcdC8vICAgbmV4dFN0YXRlLnNlbGVjdGVkRmlsZUxpc3QgPSBbaW5mby5maWxlXTtcclxuXHRcdFx0XHQvLyAgIGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgXCJkb25lXCI6XHJcblx0XHRcdFx0XHRpZiAoIWluZm8uZmlsZS51cmwgJiYgIWluZm8uZmlsZS5wcmV2aWV3KSB7XHJcblx0XHRcdFx0XHRcdGluZm8uZmlsZS5wcmV2aWV3ID0gYXdhaXQgZ2V0QmFzZTY0KGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHNldFByZXZpZXdJbWFnZShpbmZvLmZpbGUudXJsIHx8IGluZm8uZmlsZS5wcmV2aWV3KVxyXG5cdFx0XHRcdFx0c2V0UHJldmlld1Zpc2libGUodHJ1ZSlcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0Ly8gZXJyb3Igb3IgcmVtb3ZlZFxyXG5cdFx0XHRcdFx0cmVzZXRJbWFnZVByZXZpZXcoKVxyXG5cdFx0XHR9XHJcblx0XHRcdC8vY29uc29sZS5sb2coaW5mby5maWxlKVxyXG5cclxuXHRcdFx0Ly8gdGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdC8vICAgcHJldmlld0ltYWdlOiBmaWxlLnVybCB8fCBmaWxlLnByZXZpZXcsXHJcblx0XHRcdC8vICAgcHJldmlld1Zpc2libGU6IHRydWUsXHJcblx0XHRcdC8vIH0pO1xyXG5cclxuXHRcdH0sXHJcblx0XHRvblJlbW92ZShpbmZvKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwib25SZW1vdmVcIilcclxuXHRcdFx0Y29uc29sZS5sb2coaW5mbylcclxuXHRcdFx0cmVzZXRJbWFnZVByZXZpZXcoKVxyXG5cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IHJlc2V0SW1hZ2VQcmV2aWV3ID0gKCkgPT4ge1xyXG5cdFx0c2V0UHJldmlld1Zpc2libGUoZmFsc2UpXHJcblx0XHRzZXRQcmV2aWV3SW1hZ2UobnVsbClcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdldEJhc2U2NChmaWxlKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cdFx0XHRyZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuXHRcdFx0cmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XHJcblx0XHRcdHJlYWRlci5vbmVycm9yID0gZXJyb3IgPT4gcmVqZWN0KGVycm9yKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQgdGl0bGU9XCJHb3Zlcm5tZW50IC0gQWRtaW4gbWFuYWdlbWVudFwiIHRpdGxlUGFnZT17XCLguYDguJ7guLTguYjguKHguKfguLHguJnguKvguKLguLjguJRcIn0gaW5kZXhNZW51PXtcIjZcIn0gdXJsPXtvcmlnaW59IG9yaWdpbj17b3JpZ2lufSBwcm9wcz17cHJvcHN9IF9yb3V0ZXM9e1tcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6ICcvYWRtaW4vZGFzaGJvcmFkJyxcclxuXHRcdFx0XHRicmVhZGNydW1iTmFtZTogJ+C4q+C4meC5ieC4suC4q+C4peC4seC4gScsXHJcblx0XHRcdH0sIHtcclxuXHRcdFx0XHRwYXRoOiAnL2FkbWluL3NldHRpbmcvZ2VuZXJhbC9tYW5hZ2VtZW50LWhvbGlkYXknLFxyXG5cdFx0XHRcdGJyZWFkY3J1bWJOYW1lOiAn4LiI4Lix4LiU4LiB4Liy4Lij4Lir4LiZ4LmJ4Liy4Lin4Lix4LiZ4Lir4Lii4Li44LiU4Lie4Li04LmA4Lio4LipJyxcclxuXHRcdFx0fSwge1xyXG5cdFx0XHRcdHBhdGg6ICcvYWRtaW4vc2V0dGluZy9nZW5lcmFsL2FkZC1ob2xpZGF5JyxcclxuXHRcdFx0XHRicmVhZGNydW1iTmFtZTogJ+C5gOC4nuC4tOC5iOC4oeC4p+C4seC4meC4q+C4ouC4uOC4lCcsXHJcblx0XHRcdH1dfT5cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHR7Y29udGV4dEhvbGRlcn1cclxuXHRcdFx0XHQ8Um93ID5cclxuXHRcdFx0XHRcdDxGb3JtXHJcblx0XHRcdFx0XHRcdG5hbWU9XCJiYXNpY1wiXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbFwiXHJcblx0XHRcdFx0XHRcdC8vIGluaXRpYWxWYWx1ZXM9e3sgZW1haWw6IGVtYWlsLCBpbnZpdGF0aW9uQ29kZTogY29kZSB9fVxyXG5cdFx0XHRcdFx0XHRsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcblx0XHRcdFx0XHRcdG9uRmluaXNoPXtvblN1Ym1pdEhhbmRsZXJ9XHJcblx0XHRcdFx0XHRcdC8vIG9uRmluaXNoRmFpbGVkPXtvbkZpbmlzaEZhaWxlZH1cclxuXHRcdFx0XHRcdFx0cmVxdWlyZWRNYXJrPXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRmb3JtPXtmb3JtfVxyXG5cdFx0XHRcdFx0PlxyXG5cclxuXHJcblx0XHRcdFx0XHRcdDxGb3JtLkl0ZW1cclxuXHRcdFx0XHRcdFx0XHRuYW1lPVwiaW50cm9fdGl0bGVcIlxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwi4LiK4Li34LmI4Lit4Lin4Lix4LiZ4Lir4Lii4Li44LiUXCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy0xLzMgZm9ybS1vcmdhbml6YXRpb25cIlxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0ICFpbXBvcnRhbnRcIiB9fVxyXG5cdFx0XHRcdFx0XHRcdHJ1bGVzPXtbXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiBIOC4iuC4t+C5iOC4reC4p+C4seC4meC4q+C4ouC4uOC4lCEnXHJcblx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdF19XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuXHRcdFx0XHRcdFx0XHRcdGlkPVwiI1wiXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC4p+C4seC4meC4q+C4ouC4uOC4lFwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9Gb3JtLkl0ZW0+XHJcblx0XHRcdFx0XHRcdDxGb3JtLkl0ZW1cclxuXHRcdFx0XHRcdFx0XHRuYW1lPVwiaW50cm9fZGF0ZV9zXCJcclxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIuC4p+C4seC4meC4l+C4teC5iOC5gOC4o+C4tOC5iOC4oeC5geC4quC4lOC4h1wiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yICB3LTEvMyBmb3JtLW9yZ2FuaXphdGlvblwiXHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnQgIWltcG9ydGFudFwiIH19XHJcblx0XHRcdFx0XHRcdFx0cnVsZXM9e1tcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIEg4Lin4Lix4LiZ4LiX4Li14LmI4LmA4Lij4Li04LmI4Lih4LmB4Liq4LiU4LiHISdcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8RGF0ZVBpY2tlclxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9ybWF0PVwiWVlZWS1NTS1ERFwiXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcblx0XHRcdFx0XHRcdFx0Ly8gc2hvd1RpbWU9e3sgZGVmYXVsdFZhbHVlOiBtb21lbnQoJzAwOjAwOjAwJykgfX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0Zvcm0uSXRlbT5cclxuXHRcdFx0XHRcdFx0PEZvcm0uSXRlbVxyXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJpbnRyb19kYXRlX2VcIlxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwi4Lin4Lix4LiZ4LiX4Li14LmI4Liq4Li04LmJ4LiZ4Liq4Li44LiU4LiB4Liy4Lij4LmB4Liq4LiU4LiHXCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgIHctMS8zIGZvcm0tb3JnYW5pemF0aW9uXCJcclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdCAhaW1wb3J0YW50XCIgfX1cclxuXHRcdFx0XHRcdFx0XHRydWxlcz17W1xyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4gSDguKfguLHguJnguJfguLXguYjguKrguLTguYnguJnguKrguLjguJTguIHguLLguKPguYHguKrguJTguIchJ1xyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRdfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PERhdGVQaWNrZXJcclxuXHRcdFx0XHRcdFx0XHRcdGZvcm1hdD1cIllZWVktTU0tRERcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG5cdFx0XHRcdFx0XHRcdC8vIHNob3dUaW1lPXt7IGRlZmF1bHRWYWx1ZTogbW9tZW50KCcwMDowMDowMCcpIH19XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9Gb3JtLkl0ZW0+XHJcblx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgY2xlYXI6IFwiYm90aFwiIH19PjwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PEZvcm0uSXRlbVxyXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJpbnRyb19pbWFnZVwiXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCLguKDguLLguJ7guKfguLHguJnguKvguKLguLjguJRcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG5cdFx0XHRcdFx0XHRcdHJ1bGVzPXtbXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LmA4Lil4Li34Lit4LiBIOC4oOC4suC4nuC4p+C4seC4meC4q+C4ouC4uOC4lCcsXHJcblx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdF19XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHR7LyogPERyYWdnZXIgey4uLmRyb3BpbWd9PiAqL31cclxuXHRcdFx0XHRcdFx0XHQ8RHJhZ2dlclxyXG5cdFx0XHRcdFx0XHRcdFx0bWF4Q291bnQ9ezF9XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBsaXN0VHlwZT1cInBpY3R1cmVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0YWNjZXB0PVwiLmpwZywgLmpwZWcsIC5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0ey4uLmltYWdlVXBsb2FkcHJvcHN9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHtwcmV2aWV3VmlzaWJsZSAmJiA8PjxJbWFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyB3aWR0aD17MjAwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcmV2aWV3PXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtwcmV2aWV3SW1hZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR7IXByZXZpZXdWaXNpYmxlICYmIDw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtZHJhZy1pY29uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEluYm94T3V0bGluZWQgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLXRleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHTguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQ8L0RyYWdnZXI+XHJcblxyXG5cdFx0XHRcdFx0XHQ8L0Zvcm0uSXRlbT5cclxuXHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBjbGVhcjogXCJib3RoXCIgfX0+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxGb3JtLkl0ZW1cclxuXHRcdFx0XHRcdFx0XHRuYW1lPVwiaW50cm9fYnRuXCJcclxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIuC4hOC4s+C4l+C4teC5iOC5geC4quC4lOC4h+C4muC4meC4m+C4uOC5iOC4oVwiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yICB3LTEvMiBmb3JtLW9yZ2FuaXphdGlvblwiXHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnQgIWltcG9ydGFudFwiIH19XHJcblxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRzaXplPVwibGFyZ2VcIiBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4rSDguITguLPguJfguLXguYjguYHguKrguJTguIfguJrguJnguJvguLjguYjguKFcIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvRm9ybS5JdGVtPlxyXG5cclxuXHRcdFx0XHRcdFx0PEZvcm0uSXRlbVxyXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJpbnRyb191cmxcIlxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwidXJsIOC4l+C4teC5iOC4leC5ieC4reC4h+C4geC4suC4o+C5g+C4q+C5ieC4peC4tOC4h+C4hOC5jOC5hOC4m1wiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yICB3LTEvMiBmb3JtLW9yZ2FuaXphdGlvblwiXHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnQgIWltcG9ydGFudFwiIH19XHJcblxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCIgc2l6ZT1cImxhcmdlXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcblx0XHRcdFx0XHRcdFx0Ly8gb25DaGFuZ2U9eygpID0+IHNldEVtYWlsVGV4dChldmVudC50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvRm9ybS5JdGVtPlxyXG5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgY2xlYXI6IFwiYm90aFwiIH19PjwvZGl2PlxyXG5cclxuXHJcblx0XHRcdFx0XHRcdDxGb3JtLkl0ZW0gY2xhc3NOYW1lPVwiZmxleCBtdC02XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGxcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdGV4dC1sZWZ0IHctZnVsbCBsZzp3LTEvMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8U3dpdGNoIGNoZWNrZWQ9e2lzSGFzQmxlc3N9IG9uQ2xpY2s9e3NldElzSGFzQmxlc3N9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm14LTIgdGV4dC1zbVwiPuC4oeC4teC4geC4suC4o+C4luC4p+C4suC4ouC4nuC4o+C4sOC4nuC4ozwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxTd2l0Y2ggY2hlY2tlZD17aXNVc2V9IG9uQ2xpY2s9e3NldElzVXNlfSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJteC0yIHRleHQtc21cIj7guIHguLLguKPguYHguKrguJTguIfguJzguKU8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbGc6dGV4dC1yaWdodCB3LWZ1bGwgbGc6dy0xLzJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGh0bWxUeXBlPVwiYnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtvblJlc2V0Rm9ybX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAnI0MyQ0ZFMCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJDb2xvcjogJyNDMkNGRTAnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA0MCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxMTAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Cb3R0b206ICcwcHggIWltcG9ydGFudCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5SaWdodDogJzJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHctZnVsbCBsZzp3LTEvNFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbS1ibGFjayBcIj7guKPguLXguYDguIvguYfguJc8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gdHlwZT1cInByaW1hcnlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjMDU5NjY5JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckNvbG9yOiAnIzA1OTY2OScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDQwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDExMCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogJzBweCAhaW1wb3J0YW50JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAnd2hpdGUgIWltcG9ydGFudCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRodG1sVHlwZT1cInN1Ym1pdFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdy1mdWxsIGxnOnctMS80XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0IGNsYXNzTmFtZT1cInRleHQtY3VzdG9tLXdoaXRlIFwiPuC4muC4seC4meC4l+C4tuC4gTwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9Gb3JtLkl0ZW0+XHJcblxyXG5cdFx0XHRcdFx0PC9Gb3JtPlxyXG5cdFx0XHRcdDwvUm93PlxyXG5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cclxuXHRcdDwvTGF5b3V0PlxyXG5cdCk7XHJcbn1cclxuLyogZ2V0U2VydmVyU2lkZVByb3BzICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG5cdGNvbnN0IHsgcmVxIH0gPSBjb250ZXh0O1xyXG5cdGNvbnN0IHsgb3JpZ2luIH0gPSBhYnNvbHV0ZVVybChyZXEpO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0b3JpZ2luLFxyXG5cdFx0fSxcclxuXHR9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=