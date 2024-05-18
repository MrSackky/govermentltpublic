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
    indexSubMenu: "6",
    indexMenu: "sub-1-0",
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
      lineNumber: 186,
      columnNumber: 4
    }
  }, contextHolder, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
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
      lineNumber: 189,
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
      lineNumber: 201,
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
      lineNumber: 213,
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
      lineNumber: 220,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["DatePicker"], {
    format: "YYYY-MM-DD",
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" // showTime={{ defaultValue: moment('00:00:00') }}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
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
      lineNumber: 239,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["DatePicker"], {
    format: "YYYY-MM-DD",
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" // showTime={{ defaultValue: moment('00:00:00') }}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 8
    }
  })), __jsx("div", {
    style: {
      clear: "both"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
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
      lineNumber: 259,
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
      lineNumber: 271,
      columnNumber: 8
    }
  }), previewVisible && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Image"] // width={200}
  , {
    preview: false,
    src: previewImage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 30
    }
  })), !previewVisible && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 10
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 11
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 10
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14")))), __jsx("div", {
    style: {
      clear: "both"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
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
      lineNumber: 298,
      columnNumber: 7
    }
  }, __jsx("input", {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    size: "large",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D \u0E04\u0E33\u0E17\u0E35\u0E48\u0E41\u0E2A\u0E14\u0E07\u0E1A\u0E19\u0E1B\u0E38\u0E48\u0E21",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
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
      lineNumber: 311,
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
      lineNumber: 318,
      columnNumber: 8
    }
  })), __jsx("div", {
    style: {
      clear: "both"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    className: "flex mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "lg:inline-flex text-left w-full lg:w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
    checked: isHasBless,
    onClick: setIsHasBless,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 10
    }
  }), __jsx("p", {
    className: "mx-2 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 10
    }
  }, "\u0E21\u0E35\u0E01\u0E32\u0E23\u0E16\u0E27\u0E32\u0E22\u0E1E\u0E23\u0E30\u0E1E\u0E23"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 10
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
    checked: isUse,
    onClick: setIsUse,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 10
    }
  }), __jsx("p", {
    className: "mx-2 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 10
    }
  }, "\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25")), __jsx("div", {
    className: "text-center lg:text-right w-full lg:w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
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
      lineNumber: 337,
      columnNumber: 10
    }
  }, __jsx(Text, {
    className: "text-custom-black ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
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
      lineNumber: 354,
      columnNumber: 10
    }
  }, __jsx(Text, {
    className: "text-custom-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9zZXR0aW5nL2dlbmVyYWwvYWRkLWhvbGlkYXkuanMiXSwibmFtZXMiOlsiVGV4dCIsIlR5cG9ncmFwaHkiLCJUaXRsZSIsIkRyYWdnZXIiLCJVcGxvYWQiLCJIb21lIiwicHJvcHMiLCJ1c2VyIiwib3JpZ2luIiwidXNlU3RhdGUiLCJ1cmwiLCJzZXRVcmwiLCJwcmV2aWV3SW1hZ2UiLCJzZXRQcmV2aWV3SW1hZ2UiLCJpbWFnZUxhbmRpbmdQYWdlIiwic2V0SW1hZ2VMYW5kaW5nUGFnZSIsInByZXZpZXdWaXNpYmxlIiwic2V0UHJldmlld1Zpc2libGUiLCJpc0hhc0JsZXNzIiwic2V0SXNIYXNCbGVzcyIsImlzVXNlIiwic2V0SXNVc2UiLCJGb3JtIiwidXNlRm9ybSIsImZvcm0iLCJub3RpZmljYXRpb24iLCJ1c2VOb3RpZmljYXRpb24iLCJhcGkiLCJjb250ZXh0SG9sZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwib25TdWJtaXRIYW5kbGVyIiwidmFsdWUiLCJkYXRlX3NfU3RyIiwibW9tZW50IiwiaW50cm9fZGF0ZV9zIiwiZm9ybWF0IiwiZGF0ZV9lX1N0ciIsImludHJvX2RhdGVfZSIsImRhdGEiLCJvcmdhbml6YXRpb25faWQiLCJpbnRyb190aXRsZSIsImludHJvX3VybCIsImludHJvX2J0biIsImFwaUluc3RhbmNlIiwicG9zdCIsImludHJvRGF0YSIsInN0YXR1cyIsIm9wZW5Ob3RpZmljYXRpb25TdWNjZXNzIiwic2V0VGltZW91dCIsInB1c2giLCJiaW5kIiwib3Blbk5vdGlmaWNhdGlvbkZhaWwiLCJtZXNzYWdlIiwidXNlRWZmZWN0Iiwic3VjY2VzcyIsImRlc2NyaXB0aW9uIiwicGxhY2VtZW50IiwibWVzc2dhZSIsImVycm9yIiwidmFsaWRhdGVVUkwiLCJpbnB1dFRleHQiLCJ2YWxpZGF0b3IiLCJ0cmltIiwib25SZXNldEZvcm0iLCJyZXNldEZpZWxkcyIsInJlc2V0SW1hZ2VQcmV2aWV3IiwiaW1hZ2VVcGxvYWRwcm9wcyIsIm5hbWUiLCJtdWx0aXBsZSIsImxpc3RUeXBlIiwibWF4Q291bnQiLCJhY3Rpb24iLCJwcmV2aWV3IiwiY3VzdG9tUmVxdWVzdCIsIm9wdGlvbnMiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZpbGUiLCJ0eXBlX3VzZXIiLCJjb25maWciLCJheGlvcyIsInRoZW4iLCJyZXMiLCJsaXN0IiwiX25hbWUiLCJvblN1Y2Nlc3MiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwib25DaGFuZ2UiLCJpbmZvIiwiZ2V0QmFzZTY0Iiwib3JpZ2luRmlsZU9iaiIsIm9uUmVtb3ZlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJwYXRoIiwiYnJlYWRjcnVtYk5hbWUiLCJ0ZXh0QWxpZ24iLCJyZXF1aXJlZCIsImNsZWFyIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblJpZ2h0IiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxJQUFRQSxJQUFSLEdBQXdCQywrQ0FBeEIsQ0FBUUQsSUFBUjtBQUFBLElBQWNFLEtBQWQsR0FBd0JELCtDQUF4QixDQUFjQyxLQUFkO0FBQ0EsSUFBUUMsT0FBUixHQUFvQkMsMkNBQXBCLENBQVFELE9BQVI7O0FBRWUsU0FBU0UsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQ25DLE1BQVFDLElBQVIsR0FBeUJELEtBQXpCLENBQVFDLElBQVI7QUFBQSxNQUFjQyxNQUFkLEdBQXlCRixLQUF6QixDQUFjRSxNQUFkOztBQUNBLGtCQUFzQkMsc0RBQVEsQ0FB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RUFBQyxRQURWO0FBRUMsV0FBTyxFQUFFMkMsV0FGVjtBQUdDLFNBQUssRUFBRTtBQUNONkMscUJBQWUsRUFBRSxTQURYO0FBRU5DLGlCQUFXLEVBQUUsU0FGUDtBQUdOQyxZQUFNLEVBQUUsRUFIRjtBQUlOQyxXQUFLLEVBQUUsR0FKRDtBQUtOQyxrQkFBWSxFQUFFLGdCQUxSO0FBTU5DLGlCQUFXLEVBQUUsS0FOUDtBQU9OQyxXQUFLLEVBQUU7QUFQRCxLQUhSLENBWUM7QUFaRDtBQWFDLGFBQVMsRUFBQyw0SUFiWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBZUMsTUFBQyxJQUFEO0FBQU0sYUFBUyxFQUFDLG9CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQWZELENBREQsRUFrQkMsTUFBQywyQ0FBRCxDQUNDO0FBREQ7QUFFQyxTQUFLLEVBQUU7QUFDTk4scUJBQWUsRUFBRSxTQURYO0FBRU5DLGlCQUFXLEVBQUUsU0FGUDtBQUdOQyxZQUFNLEVBQUUsRUFIRjtBQUlOQyxXQUFLLEVBQUUsR0FKRDtBQUtOQyxrQkFBWSxFQUFFLGdCQUxSO0FBTU5FLFdBQUssRUFBRTtBQU5ELEtBRlI7QUFVQyxZQUFRLEVBQUMsUUFWVjtBQVdDLGFBQVMsRUFBQyw0SUFYWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBYUMsTUFBQyxJQUFEO0FBQU0sYUFBUyxFQUFDLG9CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQWJELENBbEJELENBUkQsQ0FERCxDQTFJRCxDQURELENBRkQsQ0FiRCxDQUREO0FBaU5BO0FBQ0Q7O0dBNVd3QjlHLEk7VUFRUmlCLHlDQUFJLENBQUNDLE8sRUFDU0UsaURBQVksQ0FBQ0MsZSxFQUMzQkkscUQ7OztLQVZRekIsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWRtaW5cXHNldHRpbmdcXGdlbmVyYWxcXGFkZC1ob2xpZGF5LmpzLmZiYWFlYjY0MmM4NmU0MzFkMDIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmJveE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQge1xyXG5cdEJ1dHRvbiwgRGF0ZVBpY2tlciwgRm9ybSwgSW1hZ2UsIG5vdGlmaWNhdGlvbiwgUm93LCBTd2l0Y2gsIFR5cG9ncmFwaHksIFVwbG9hZFxyXG59IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuLy8gaW1wb3J0IFVzZXJOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL1VzZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdmFsaWRhdG9yIGZyb20gJ3ZhbGlkYXRvcic7XHJcbi8qIGNvbXBvbmVudHMgKi9cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRBZG1pbic7XHJcbi8qIHV0aWxzICovXHJcbmltcG9ydCB7IGFic29sdXRlVXJsLCBhcGlJbnN0YW5jZSB9IGZyb20gJy4uLy4uLy4uLy4uL21pZGRsZXdhcmUvdXRpbHMnO1xyXG5jb25zdCB7IFRleHQsIFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xyXG5jb25zdCB7IERyYWdnZXIgfSA9IFVwbG9hZDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuXHRjb25zdCB7IHVzZXIsIG9yaWdpbiB9ID0gcHJvcHM7XHJcblx0Y29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKFwiXCIpXHJcblx0Y29uc3QgW3ByZXZpZXdJbWFnZSwgc2V0UHJldmlld0ltYWdlXSA9IHVzZVN0YXRlKG51bGwpXHJcblx0Y29uc3QgW2ltYWdlTGFuZGluZ1BhZ2UsIHNldEltYWdlTGFuZGluZ1BhZ2VdID0gdXNlU3RhdGUobnVsbClcclxuXHRjb25zdCBbcHJldmlld1Zpc2libGUsIHNldFByZXZpZXdWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IFtpc0hhc0JsZXNzLCBzZXRJc0hhc0JsZXNzXSA9IHVzZVN0YXRlKDApXHJcblx0Y29uc3QgW2lzVXNlLCBzZXRJc1VzZV0gPSB1c2VTdGF0ZSgxKVxyXG5cdGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG5cdGNvbnN0IFthcGksIGNvbnRleHRIb2xkZXJdID0gbm90aWZpY2F0aW9uLnVzZU5vdGlmaWNhdGlvbigpO1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0SGFuZGxlcih2YWx1ZSkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJ2YWx1ZVwiKVxyXG5cdFx0Ly8gY29uc29sZS5sb2codmFsdWUpXHJcblx0XHR2YXIgZGF0ZV9zX1N0ciA9IG1vbWVudCh2YWx1ZS5pbnRyb19kYXRlX3MpLmZvcm1hdCgpXHJcblx0XHR2YXIgZGF0ZV9lX1N0ciA9IG1vbWVudCh2YWx1ZS5pbnRyb19kYXRlX2UpLmZvcm1hdCgpXHJcblx0XHRjb25zdCBkYXRhID0ge1xyXG5cdFx0XHRcIm9yZ2FuaXphdGlvbl9pZFwiOiB1c2VyLm9yZ2FuaXphdGlvbl9pZCxcclxuXHRcdFx0XCJpbnRyb190aXRsZVwiOiB2YWx1ZS5pbnRyb190aXRsZSxcclxuXHRcdFx0XCJpbnRyb191cmxcIjogdmFsdWUuaW50cm9fdXJsLFxyXG5cdFx0XHRcImludHJvX2J0blwiOiB2YWx1ZS5pbnRyb19idG4sXHJcblx0XHRcdFwiaW50cm9fZGF0ZV9zXCI6IGRhdGVfc19TdHIsXHJcblx0XHRcdFwiaW50cm9fZGF0ZV9lXCI6IGRhdGVfZV9TdHIsXHJcblx0XHRcdFwiaW50cm9faW1hZ2VcIjogaW1hZ2VMYW5kaW5nUGFnZSxcclxuXHRcdFx0XCJpc19oYXNfYmxlc3NcIjogaXNIYXNCbGVzcyxcclxuXHRcdFx0XCJpc191c2VcIjogaXNVc2UsXHJcblx0XHRcdFwiaXNfYWRtaW5cIjogMSxcclxuXHRcdH1cclxuXHRcdGNvbnN0IGludHJvRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkucG9zdCgnL2hvbGlkYXknLCBkYXRhKTtcclxuXHRcdGlmIChpbnRyb0RhdGEuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcblx0XHRcdG9wZW5Ob3RpZmljYXRpb25TdWNjZXNzKClcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7IC8vU3RhcnQgdGhlIHRpbWVyXHJcblx0XHRcdFx0cm91dGVyLnB1c2goJy9hZG1pbi9zZXR0aW5nL2dlbmVyYWwvbWFuYWdlbWVudC1ob2xpZGF5JylcclxuXHRcdFx0fS5iaW5kKHRoaXMpLCAyMDAwKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0b3Blbk5vdGlmaWNhdGlvbkZhaWwoaW50cm9EYXRhLmRhdGEubWVzc2FnZSlcclxuXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuXHR9LCBbXSlcclxuXHJcblx0Y29uc3Qgb3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MgPSAoKSA9PiB7XHJcblx0XHRhcGkuc3VjY2Vzcyh7XHJcblx0XHRcdG1lc3NhZ2U6IGDguJrguLHguJnguJfguLbguIHguILguYnguK3guKHguLnguKXguKrguLPguYDguKPguYfguIhgLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjogJ+C4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iCcsXHJcblx0XHRcdHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9wZW5Ob3RpZmljYXRpb25GYWlsID0gKG1lc3NnYWUpID0+IHtcclxuXHRcdGFwaS5lcnJvcih7XHJcblx0XHRcdG1lc3NhZ2U6IGDguJ7guJrguJvguLHguI3guKvguLLguKPguLDguKvguKfguYjguLLguIfguIHguLLguKPguJrguLHguJnguJfguLbguIHguILguYnguK3guKHguLnguKVgLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjogbWVzc2dhZSxcclxuXHRcdFx0cGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHRjb25zdCB2YWxpZGF0ZVVSTCA9IChpbnB1dFRleHQpID0+IHtcclxuXHRcdHNldFVybCh2YWxpZGF0b3IudHJpbShpbnB1dFRleHQpKVxyXG5cdH1cclxuXHRjb25zdCBvblJlc2V0Rm9ybSA9ICgpID0+IHtcclxuXHRcdGZvcm0ucmVzZXRGaWVsZHMoKTtcclxuXHRcdHNldFVybChcIlwiKTtcclxuXHRcdHJlc2V0SW1hZ2VQcmV2aWV3KCk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBpbWFnZVVwbG9hZHByb3BzID0ge1xyXG5cdFx0bmFtZTogJ2ZpbGUnLFxyXG5cdFx0bXVsdGlwbGU6IGZhbHNlLFxyXG5cdFx0bGlzdFR5cGU6ICd0ZXh0JyxcclxuXHRcdG1heENvdW50OiAxLFxyXG5cdFx0YWN0aW9uOiBcIi9hcGkvdXBsb2FkL2hvbGlkYXlcIixcclxuXHRcdHByZXZpZXc6IGZhbHNlLFxyXG5cdFx0Ly8gdWlkOiB1c2VyLnR5cGVfdXNlciA9PSAxID8gXCJhZG1pblwiIDogdXNlci5vcmdhbml6YXRpb25faWQsXHJcblx0XHQvLyBiZWZvcmVVcGxvYWQoZmlsZSkge1xyXG5cdFx0Ly8gXHRjb25zdCBpc0x0MTBNID0gZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgPCAxMFxyXG5cdFx0Ly8gXHRpZiAoIWlzTHQxME0pIHtcclxuXHRcdC8vIFx0XHRub3RpZmljYXRpb24ub3Blbih7XHJcblx0XHQvLyBcdFx0XHRtZXNzYWdlOiAnVXBsb2FkIGVycm9yIScsXHJcblx0XHQvLyBcdFx0XHRkZXNjcmlwdGlvbjogPFRleHQgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiPkltYWdlIG11c3Qgc21hbGxlciB0aGFuIDEwTUIhPC9UZXh0PixcclxuXHRcdC8vIFx0XHR9KVxyXG5cdFx0Ly8gXHR9XHJcblx0XHQvLyBcdHJldHVybiBpc0x0MTBNXHJcblx0XHQvLyB9LFxyXG5cdFx0Y3VzdG9tUmVxdWVzdDogKG9wdGlvbnMpID0+IHtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcblx0XHRcdGRhdGEuYXBwZW5kKCdmaWxlJywgb3B0aW9ucy5maWxlKVxyXG5cdFx0XHRkYXRhLmFwcGVuZCgnaWQnLCB1c2VyLnR5cGVfdXNlciA9PSAxID8gXCJhZG1pblwiIDogdXNlci5vcmdhbml6YXRpb25faWQpXHJcblx0XHRcdGNvbnN0IGNvbmZpZyA9IHtcclxuXHRcdFx0XHRcImhlYWRlcnNcIjoge1xyXG5cdFx0XHRcdFx0XCJjb250ZW50LXR5cGVcIjogJ211bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PS0tLS1XZWJLaXRGb3JtQm91bmRhcnlxVHFKSXh2a1dGWXF2UDVzJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRheGlvcy5wb3N0KG9wdGlvbnMuYWN0aW9uLCBkYXRhLCBjb25maWcpLnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdC8vIGltYWdlTGFuZGluZ1BhZ2VcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhyZXMuZGF0YS5kYXRhLmxpc3RbMF0uX25hbWUpXHJcblx0XHRcdFx0c2V0SW1hZ2VMYW5kaW5nUGFnZShyZXMuZGF0YS5kYXRhLmxpc3RbMF0uX25hbWUpXHJcblx0XHRcdFx0b3B0aW9ucy5vblN1Y2Nlc3MocmVzLmRhdGEsIG9wdGlvbnMuZmlsZSlcclxuXHRcdFx0fSkuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycilcclxuXHRcdFx0fSlcclxuXHJcblx0XHR9LFxyXG5cdFx0YXN5bmMgb25DaGFuZ2UoaW5mbykge1xyXG5cdFx0XHRjb25zdCB7IHN0YXR1cyB9ID0gaW5mby5maWxlXHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKHVzZXIpXHJcblx0XHRcdHN3aXRjaCAoaW5mby5maWxlLnN0YXR1cykge1xyXG5cdFx0XHRcdC8vIGNhc2UgXCJ1cGxvYWRpbmdcIjpcclxuXHRcdFx0XHQvLyAgIG5leHRTdGF0ZS5zZWxlY3RlZEZpbGVMaXN0ID0gW2luZm8uZmlsZV07XHJcblx0XHRcdFx0Ly8gICBicmVhaztcclxuXHRcdFx0XHRjYXNlIFwiZG9uZVwiOlxyXG5cdFx0XHRcdFx0aWYgKCFpbmZvLmZpbGUudXJsICYmICFpbmZvLmZpbGUucHJldmlldykge1xyXG5cdFx0XHRcdFx0XHRpbmZvLmZpbGUucHJldmlldyA9IGF3YWl0IGdldEJhc2U2NChpbmZvLmZpbGUub3JpZ2luRmlsZU9iaik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRzZXRQcmV2aWV3SW1hZ2UoaW5mby5maWxlLnVybCB8fCBpbmZvLmZpbGUucHJldmlldylcclxuXHRcdFx0XHRcdHNldFByZXZpZXdWaXNpYmxlKHRydWUpXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdC8vIGVycm9yIG9yIHJlbW92ZWRcclxuXHRcdFx0XHRcdHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuXHRcdFx0fVxyXG5cdFx0XHQvL2NvbnNvbGUubG9nKGluZm8uZmlsZSlcclxuXHJcblx0XHRcdC8vIHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHQvLyAgIHByZXZpZXdJbWFnZTogZmlsZS51cmwgfHwgZmlsZS5wcmV2aWV3LFxyXG5cdFx0XHQvLyAgIHByZXZpZXdWaXNpYmxlOiB0cnVlLFxyXG5cdFx0XHQvLyB9KTtcclxuXHJcblx0XHR9LFxyXG5cdFx0b25SZW1vdmUoaW5mbykge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIm9uUmVtb3ZlXCIpXHJcblx0XHRcdGNvbnNvbGUubG9nKGluZm8pXHJcblx0XHRcdHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCByZXNldEltYWdlUHJldmlldyA9ICgpID0+IHtcclxuXHRcdHNldFByZXZpZXdWaXNpYmxlKGZhbHNlKVxyXG5cdFx0c2V0UHJldmlld0ltYWdlKG51bGwpXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRCYXNlNjQoZmlsZSkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0Y29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHRcdFx0cmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcblx0XHRcdHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xyXG5cdFx0XHRyZWFkZXIub25lcnJvciA9IGVycm9yID0+IHJlamVjdChlcnJvcik7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TGF5b3V0IHRpdGxlPVwiR292ZXJubWVudCAtIEFkbWluIG1hbmFnZW1lbnRcIiB0aXRsZVBhZ2U9e1wi4LmA4Lie4Li04LmI4Lih4Lin4Lix4LiZ4Lir4Lii4Li44LiUXCJ9XHJcblx0XHRpbmRleFN1Yk1lbnU9e1wiNlwifVxyXG5cdFx0aW5kZXhNZW51PXtcInN1Yi0xLTBcIn11cmw9e29yaWdpbn0gb3JpZ2luPXtvcmlnaW59IHByb3BzPXtwcm9wc30gX3JvdXRlcz17W1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogJy9hZG1pbi9kYXNoYm9yYWQnLFxyXG5cdFx0XHRcdGJyZWFkY3J1bWJOYW1lOiAn4Lir4LiZ4LmJ4Liy4Lir4Lil4Lix4LiBJyxcclxuXHRcdFx0fSwge1xyXG5cdFx0XHRcdHBhdGg6ICcvYWRtaW4vc2V0dGluZy9nZW5lcmFsL21hbmFnZW1lbnQtaG9saWRheScsXHJcblx0XHRcdFx0YnJlYWRjcnVtYk5hbWU6ICfguIjguLHguJTguIHguLLguKPguKvguJnguYnguLLguKfguLHguJnguKvguKLguLjguJTguJ7guLTguYDguKjguKknLFxyXG5cdFx0XHR9LCB7XHJcblx0XHRcdFx0cGF0aDogJy9hZG1pbi9zZXR0aW5nL2dlbmVyYWwvYWRkLWhvbGlkYXknLFxyXG5cdFx0XHRcdGJyZWFkY3J1bWJOYW1lOiAn4LmA4Lie4Li04LmI4Lih4Lin4Lix4LiZ4Lir4Lii4Li44LiUJyxcclxuXHRcdFx0fV19PlxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdHtjb250ZXh0SG9sZGVyfVxyXG5cdFx0XHRcdDxSb3cgPlxyXG5cdFx0XHRcdFx0PEZvcm1cclxuXHRcdFx0XHRcdFx0bmFtZT1cImJhc2ljXCJcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsXCJcclxuXHRcdFx0XHRcdFx0Ly8gaW5pdGlhbFZhbHVlcz17eyBlbWFpbDogZW1haWwsIGludml0YXRpb25Db2RlOiBjb2RlIH19XHJcblx0XHRcdFx0XHRcdGxheW91dD1cInZlcnRpY2FsXCJcclxuXHRcdFx0XHRcdFx0b25GaW5pc2g9e29uU3VibWl0SGFuZGxlcn1cclxuXHRcdFx0XHRcdFx0Ly8gb25GaW5pc2hGYWlsZWQ9e29uRmluaXNoRmFpbGVkfVxyXG5cdFx0XHRcdFx0XHRyZXF1aXJlZE1hcms9e3RydWV9XHJcblx0XHRcdFx0XHRcdGZvcm09e2Zvcm19XHJcblx0XHRcdFx0XHQ+XHJcblxyXG5cclxuXHRcdFx0XHRcdFx0PEZvcm0uSXRlbVxyXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJpbnRyb190aXRsZVwiXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCLguIrguLfguYjguK3guKfguLHguJnguKvguKLguLjguJRcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LTEvMyBmb3JtLW9yZ2FuaXphdGlvblwiXHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnQgIWltcG9ydGFudFwiIH19XHJcblx0XHRcdFx0XHRcdFx0cnVsZXM9e1tcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIEg4LiK4Li34LmI4Lit4Lin4Lix4LiZ4Lir4Lii4Li44LiUISdcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCIjXCJcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi4LiK4Li34LmI4Lit4Lin4Lix4LiZ4Lir4Lii4Li44LiUXCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0Zvcm0uSXRlbT5cclxuXHRcdFx0XHRcdFx0PEZvcm0uSXRlbVxyXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJpbnRyb19kYXRlX3NcIlxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwi4Lin4Lix4LiZ4LiX4Li14LmI4LmA4Lij4Li04LmI4Lih4LmB4Liq4LiU4LiHXCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgIHctMS8zIGZvcm0tb3JnYW5pemF0aW9uXCJcclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdCAhaW1wb3J0YW50XCIgfX1cclxuXHRcdFx0XHRcdFx0XHRydWxlcz17W1xyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4gSDguKfguLHguJnguJfguLXguYjguYDguKPguLTguYjguKHguYHguKrguJTguIchJ1xyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRdfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxEYXRlUGlja2VyXHJcblx0XHRcdFx0XHRcdFx0XHRmb3JtYXQ9XCJZWVlZLU1NLUREXCJcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuXHRcdFx0XHRcdFx0XHQvLyBzaG93VGltZT17eyBkZWZhdWx0VmFsdWU6IG1vbWVudCgnMDA6MDA6MDAnKSB9fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvRm9ybS5JdGVtPlxyXG5cdFx0XHRcdFx0XHQ8Rm9ybS5JdGVtXHJcblx0XHRcdFx0XHRcdFx0bmFtZT1cImludHJvX2RhdGVfZVwiXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCLguKfguLHguJnguJfguLXguYjguKrguLTguYnguJnguKrguLjguJTguIHguLLguKPguYHguKrguJTguIdcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiAgdy0xLzMgZm9ybS1vcmdhbml6YXRpb25cIlxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0ICFpbXBvcnRhbnRcIiB9fVxyXG5cdFx0XHRcdFx0XHRcdHJ1bGVzPXtbXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiBIOC4p+C4seC4meC4l+C4teC5iOC4quC4tOC5ieC4meC4quC4uOC4lOC4geC4suC4o+C5geC4quC4lOC4hyEnXHJcblx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdF19XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8RGF0ZVBpY2tlclxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9ybWF0PVwiWVlZWS1NTS1ERFwiXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcblx0XHRcdFx0XHRcdFx0Ly8gc2hvd1RpbWU9e3sgZGVmYXVsdFZhbHVlOiBtb21lbnQoJzAwOjAwOjAwJykgfX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0Zvcm0uSXRlbT5cclxuXHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBjbGVhcjogXCJib3RoXCIgfX0+PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8Rm9ybS5JdGVtXHJcblx0XHRcdFx0XHRcdFx0bmFtZT1cImludHJvX2ltYWdlXCJcclxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIuC4oOC4suC4nuC4p+C4seC4meC4q+C4ouC4uOC4lFwiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcblx0XHRcdFx0XHRcdFx0cnVsZXM9e1tcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguYDguKXguLfguK3guIEg4Lig4Liy4Lie4Lin4Lix4LiZ4Lir4Lii4Li44LiUJyxcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdHsvKiA8RHJhZ2dlciB7Li4uZHJvcGltZ30+ICovfVxyXG5cdFx0XHRcdFx0XHRcdDxEcmFnZ2VyXHJcblx0XHRcdFx0XHRcdFx0XHRtYXhDb3VudD17MX1cclxuXHRcdFx0XHRcdFx0XHRcdC8vIGxpc3RUeXBlPVwicGljdHVyZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRhY2NlcHQ9XCIuanBnLCAuanBlZywgLnBuZ1wiXHJcblx0XHRcdFx0XHRcdFx0XHR7Li4uaW1hZ2VVcGxvYWRwcm9wc31cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0e3ByZXZpZXdWaXNpYmxlICYmIDw+PEltYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vIHdpZHRoPXsyMDB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByZXZpZXc9e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9e3ByZXZpZXdJbWFnZX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHshcHJldmlld1Zpc2libGUgJiYgPD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC1kcmFnLWljb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5ib3hPdXRsaW5lZCAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdOC4hOC4peC4tOC4gSDguKvguKPguLfguK0g4Lil4Liy4LiB4LmE4Lif4Lil4LmM4Lih4Liy4LiX4Li14LmI4Lia4Lij4Li04LmA4Lin4LiT4LiZ4Li14LmJ4LmA4Lie4Li34LmI4Lit4Lit4Lix4Lib4LmC4Lir4Lil4LiUXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdDwvRHJhZ2dlcj5cclxuXHJcblx0XHRcdFx0XHRcdDwvRm9ybS5JdGVtPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGNsZWFyOiBcImJvdGhcIiB9fT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PEZvcm0uSXRlbVxyXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJpbnRyb19idG5cIlxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwi4LiE4Liz4LiX4Li14LmI4LmB4Liq4LiU4LiH4Lia4LiZ4Lib4Li44LmI4LihXCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgIHctMS8yIGZvcm0tb3JnYW5pemF0aW9uXCJcclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdCAhaW1wb3J0YW50XCIgfX1cclxuXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuXHRcdFx0XHRcdFx0XHRcdHNpemU9XCJsYXJnZVwiIHBsYWNlaG9sZGVyPVwi4LiK4Li34LmI4LitIOC4hOC4s+C4l+C4teC5iOC5geC4quC4lOC4h+C4muC4meC4m+C4uOC5iOC4oVwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9Gb3JtLkl0ZW0+XHJcblxyXG5cdFx0XHRcdFx0XHQ8Rm9ybS5JdGVtXHJcblx0XHRcdFx0XHRcdFx0bmFtZT1cImludHJvX3VybFwiXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJ1cmwg4LiX4Li14LmI4LiV4LmJ4Lit4LiH4LiB4Liy4Lij4LmD4Lir4LmJ4Lil4Li04LiH4LiE4LmM4LmE4LibXCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgIHctMS8yIGZvcm0tb3JnYW5pemF0aW9uXCJcclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdCAhaW1wb3J0YW50XCIgfX1cclxuXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIiBzaXplPVwibGFyZ2VcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuXHRcdFx0XHRcdFx0XHQvLyBvbkNoYW5nZT17KCkgPT4gc2V0RW1haWxUZXh0KGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9Gb3JtLkl0ZW0+XHJcblxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBjbGVhcjogXCJib3RoXCIgfX0+PC9kaXY+XHJcblxyXG5cclxuXHRcdFx0XHRcdFx0PEZvcm0uSXRlbSBjbGFzc05hbWU9XCJmbGV4IG10LTZcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB0ZXh0LWxlZnQgdy1mdWxsIGxnOnctMS8yXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxTd2l0Y2ggY2hlY2tlZD17aXNIYXNCbGVzc30gb25DbGljaz17c2V0SXNIYXNCbGVzc30gLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibXgtMiB0ZXh0LXNtXCI+4Lih4Li14LiB4Liy4Lij4LiW4Lin4Liy4Lii4Lie4Lij4Liw4Lie4LijPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFN3aXRjaCBjaGVja2VkPXtpc1VzZX0gb25DbGljaz17c2V0SXNVc2V9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm14LTIgdGV4dC1zbVwiPuC4geC4suC4o+C5geC4quC4lOC4h+C4nOC4pTwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBsZzp0ZXh0LXJpZ2h0IHctZnVsbCBsZzp3LTEvMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aHRtbFR5cGU9XCJidXR0b25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e29uUmVzZXRGb3JtfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjQzJDRkUwJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckNvbG9yOiAnI0MyQ0ZFMCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDQwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDExMCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogJzBweCAhaW1wb3J0YW50JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpblJpZ2h0OiAnMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAnd2hpdGUgIWltcG9ydGFudCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBodG1sVHlwZT1cInN1Ym1pdFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdy1mdWxsIGxnOnctMS80XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0IGNsYXNzTmFtZT1cInRleHQtY3VzdG9tLWJsYWNrIFwiPuC4o+C4teC5gOC4i+C5h+C4lzwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyB0eXBlPVwicHJpbWFyeVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJyMwNTk2NjknLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQ29sb3I6ICcjMDU5NjY5JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogNDAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTEwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luQm90dG9tOiAnMHB4ICFpbXBvcnRhbnQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICd3aGl0ZSAhaW1wb3J0YW50JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGh0bWxUeXBlPVwic3VibWl0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSB3LWZ1bGwgbGc6dy0xLzRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgY2xhc3NOYW1lPVwidGV4dC1jdXN0b20td2hpdGUgXCI+4Lia4Lix4LiZ4LiX4Li24LiBPC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L0Zvcm0uSXRlbT5cclxuXHJcblx0XHRcdFx0XHQ8L0Zvcm0+XHJcblx0XHRcdFx0PC9Sb3c+XHJcblxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KTtcclxufVxyXG4vKiBnZXRTZXJ2ZXJTaWRlUHJvcHMgKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcblx0Y29uc3QgeyByZXEgfSA9IGNvbnRleHQ7XHJcblx0Y29uc3QgeyBvcmlnaW4gfSA9IGFic29sdXRlVXJsKHJlcSk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRvcmlnaW4sXHJcblx0XHR9LFxyXG5cdH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==