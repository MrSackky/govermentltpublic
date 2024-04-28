webpackHotUpdate("static\\development\\pages\\admin\\management\\documents\\[documentsId].js",{

/***/ "./pages/admin/management/documents/[documentsId].js":
/*!***********************************************************!*\
  !*** ./pages/admin/management/documents/[documentsId].js ***!
  \***********************************************************/
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
/* harmony import */ var antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/input/TextArea */ "./node_modules/antd/lib/input/TextArea.js");
/* harmony import */ var antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/layout/LayoutAdmin */ "./components/layout/LayoutAdmin.jsx");
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../middleware/utils */ "./middleware/utils.js");





var _jsxFileName = "D:\\govermentlt\\pages\\admin\\management\\documents\\[documentsId].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;




 // import UserNav from '../components/navigation/User';



/* components */


/* utils */


var Text = antd__WEBPACK_IMPORTED_MODULE_6__["Typography"].Text,
    Title = antd__WEBPACK_IMPORTED_MODULE_6__["Typography"].Title;
var Option = antd__WEBPACK_IMPORTED_MODULE_6__["Select"].Option;
var __N_SSP = true;
function Home(props) {
  _s();

  var user = props.user,
      origin = props.origin;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      url = _useState[0],
      setUrl = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      documentsData = _useState2[0],
      setDocumentsData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1),
      active = _useState3[0],
      setActive = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      previewImage = _useState4[0],
      setPreviewImage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      imageLandingPage = _useState5[0],
      setImageLandingPage = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      previewVisible = _useState6[0],
      setPreviewVisible = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      file_name_ori = _useState7[0],
      setFile_name_ori = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([{
    name: ['file_subject'],
    value: ''
  }]),
      fields = _useState8[0],
      setFields = _useState8[1];

  var _notification$useNoti = antd__WEBPACK_IMPORTED_MODULE_6__["notification"].useNotification(),
      _notification$useNoti2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_notification$useNoti, 2),
      api = _notification$useNoti2[0],
      contextHolder = _notification$useNoti2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  var documentsId = router.query.documentsId;
  var Dragger = antd__WEBPACK_IMPORTED_MODULE_6__["Upload"].Dragger;

  function onSubmitHandler(_x) {
    return _onSubmitHandler.apply(this, arguments);
  }

  function _onSubmitHandler() {
    _onSubmitHandler = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(value) {
      var data, registerData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // console.log("value")
              // console.log(value)
              data = {
                organization_id: user.organization_id,
                file_name: value.file_subject,
                file_name_ori: file_name_ori,
                file_subject: value.file_subject,
                file_url: value.file_url ? value.file_url : "",
                is_show: active,
                download: '0',
                is_deleted: '0'
              }; // console.log(data)

              _context3.next = 3;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_12__["apiInstance"])().put('/documents/' + documentsId, data);

            case 3:
              registerData = _context3.sent;

              if (registerData.data.status == 200) {
                openNotificationRegisterSuccess();
                fetchDocumentsData();
                setTimeout(function () {
                  //Start the timer
                  router.push('/admin/management/documents');
                }.bind(this), 2000);
              } else {
                openNotificationRegisterFail(registerData.data.message);
              }

            case 5:
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
      description: 'บันทึกข้อมูลสำเร็จ',
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

  var validateURL = function validateURL(inputText) {
    setUrl(validator__WEBPACK_IMPORTED_MODULE_10___default.a.trim(inputText));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    fetchDocumentsData();
  }, []);

  var onResetForm = function onResetForm() {
    setActive(documentsData.is_show == 1 ? 1 : 0);
    setFields([{
      name: ['file_subject'],
      value: documentsData.file_subject
    }, {
      name: ['file_url'],
      value: documentsData.file_url
    }, {
      name: ['file_name_ori'],
      value: documentsData.file_name_ori
    }, {
      name: ['is_show'],
      value: documentsData.is_show
    }]); // ล้างค่าใน state เพื่อไม่ให้แสดงข้อมูลเดิม

    setPreviewVisible("..\\..\\..\\uploads\\c-" + user.organization_id + '\\documents\\' + documentsData.activities_image);
    setPreviewImage(true);
    setFile_name_ori(documentsData.file_name_ori); // รีเซ็ตรูปภาพกลับไปยังภาพเดิมบนฐานข้อมูล
    // setPreviewImage('..\\..\\..\\uploads\\c-' + user.organization_id + '\\activities\\' + activitiesData.activities_image);
    // setPreviewVisible(true);
    // setImageLandingPage(activitiesData.activities_image);
  };

  var fetchDocumentsData = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var _documentsData;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_12__["apiInstance"])().get('documents/' + documentsId);

            case 2:
              _documentsData = _context.sent;
              setDocumentsData(_documentsData.data.documents);
              setActive(_documentsData.data.documents.is_show);
              setFields([{
                name: ['file_subject'],
                value: _documentsData.data.documents.file_subject
              }, {
                name: ['file_url'],
                value: _documentsData.data.documents.file_url
              }, {
                name: ['file_name_ori'],
                value: _documentsData.data.documents.file_name_ori
              }, {
                name: ['is_show'],
                value: _documentsData.data.documents.is_show
              }]); // setPreviewImage(info.file.url || info.file.preview)

              setPreviewVisible(true);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchDocumentsData() {
      return _ref.apply(this, arguments);
    };
  }();

  var imageUploadprops = {
    name: 'file',
    multiple: false,
    listType: 'text',
    maxCount: 1,
    action: "/api/upload/documents",
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
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(options.action, data, config).then(function (res) {
        setFile_name_ori(res.data.data.list[0]._name);
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
    titlePage: 'แก้ไขเอกสาร ' + (documentsData ? documentsData.file_subject : ''),
    url: origin,
    indexSubMenu: "1",
    indexMenu: "sub-1-5",
    origin: origin,
    props: props,
    _routes: [{
      path: '/admin/dashborad',
      breadcrumbName: 'หน้าหลัก'
    }, {
      path: '/admin/management/documents',
      breadcrumbName: 'จัดการคลังเอกสาร'
    }, {
      path: '/admin/management/add-documents',
      breadcrumbName: 'แก้ไขเอกสาร'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 7
    }
  }, contextHolder, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"], {
    name: "basic",
    className: "w-full",
    layout: "vertical",
    onFinish: onSubmitHandler,
    requiredMark: true,
    fields: fields,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    name: "file_subject",
    label: "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23 :",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    rules: [{
      required: true,
      message: 'กรุณากรอกชื่อเอกสาร'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 13
    }
  }, __jsx(antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "#",
    type: "text",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 15
    }
  })), __jsx("div", {
    style: {
      clear: 'both'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    name: "file_name",
    label: "\u0E41\u0E19\u0E1A\u0E44\u0E1F\u0E25\u0E4C :",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    rules: [{
      required: true,
      message: 'กรุณากรอกเลือกเอกสาร'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 13
    }
  }, __jsx(Dragger, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    maxCount: 1 // listType="picture"
    ,
    accept: ".pdf"
  }, imageUploadprops, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 15
    }
  }), previewVisible && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, " ", __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 39
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["FilePdfTwoTone"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 19
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 19
    }
  }, "\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E1F\u0E25\u0E4C\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 41
    }
  }), "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14")), !previewVisible && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 19
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 21
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 19
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14")))), __jsx("div", {
    style: {
      clear: 'both'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 13
    }
  }, documentsData && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, documentsData.file_url && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("div", {
    "class": "ant-upload-text-icon",
    style: {
      "float": 'left',
      marginRight: '2px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 46
    }
  }, __jsx("span", {
    role: "img",
    "aria-label": "paper-clip",
    "class": "anticon anticon-paper-clip",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 126
    }
  }, __jsx("svg", {
    viewBox: "64 64 896 896",
    focusable: "false",
    "data-icon": "paper-clip",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 202
    }
  }, __jsx("path", {
    d: "M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 336
    }
  })))), __jsx("a", {
    href: '/uploads/c-' + user.organization_id + '/documents/' + documentsData.file_name_ori,
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 19
    }
  }, documentsData.file_name_ori)))), __jsx("div", {
    style: {
      clear: 'both'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 13
    }
  }), __jsx("hr", {
    style: {
      backgroundColor: 'black',
      height: 2,
      width: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 13
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 13
    }
  }, "\u0E2B\u0E23\u0E37\u0E2D Download \u0E08\u0E32\u0E01 url"), __jsx("div", {
    style: {
      clear: 'both'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    name: "file_url",
    label: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 url :",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    rules: [{
      required: true,
      message: 'กรุณากรอกที่อยู่ url ของเอกสาร'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 13
    }
  }, __jsx(antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "#",
    type: "text",
    placeholder: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 url",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 15
    }
  })), __jsx("div", {
    style: {
      clear: 'both'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    className: "flex mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "lg:inline-flex text-left w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
    className: "swt-btn",
    checked: active,
    onClick: function onClick(value) {
      return setActive(value ? 1 : 0);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 19
    }
  }), __jsx("p", {
    className: "mx-2 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 19
    }
  }, "\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19")), __jsx("div", {
    className: "text-center lg:text-right w-full lg:w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
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
      lineNumber: 390,
      columnNumber: 19
    }
  }, __jsx(Text, {
    className: "text-custom-black ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
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
      lineNumber: 407,
      columnNumber: 19
    }
  }, __jsx(Text, {
    className: "text-custom-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 21
    }
  }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01")))))))));
}
/* getServerSideProps */

_s(Home, "RaTwl6+xL38Go+XSWmnI5b3V9U0=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_6__["notification"].useNotification, next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9tYW5hZ2VtZW50L2RvY3VtZW50cy9bZG9jdW1lbnRzSWRdLmpzIl0sIm5hbWVzIjpbIlRleHQiLCJUeXBvZ3JhcGh5IiwiVGl0bGUiLCJPcHRpb24iLCJTZWxlY3QiLCJIb21lIiwicHJvcHMiLCJ1c2VyIiwib3JpZ2luIiwidXNlU3RhdGUiLCJ1cmwiLCJzZXRVcmwiLCJkb2N1bWVudHNEYXRhIiwic2V0RG9jdW1lbnRzRGF0YSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInByZXZpZXdJbWFnZSIsInNldFByZXZpZXdJbWFnZSIsImltYWdlTGFuZGluZ1BhZ2UiLCJzZXRJbWFnZUxhbmRpbmdQYWdlIiwicHJldmlld1Zpc2libGUiLCJzZXRQcmV2aWV3VmlzaWJsZSIsImZpbGVfbmFtZV9vcmkiLCJzZXRGaWxlX25hbWVfb3JpIiwibmFtZSIsInZhbHVlIiwiZmllbGRzIiwic2V0RmllbGRzIiwibm90aWZpY2F0aW9uIiwidXNlTm90aWZpY2F0aW9uIiwiYXBpIiwiY29udGV4dEhvbGRlciIsInJvdXRlciIsInVzZVJvdXRlciIsImRvY3VtZW50c0lkIiwicXVlcnkiLCJEcmFnZ2VyIiwiVXBsb2FkIiwib25TdWJtaXRIYW5kbGVyIiwiZGF0YSIsIm9yZ2FuaXphdGlvbl9pZCIsImZpbGVfbmFtZSIsImZpbGVfc3ViamVjdCIsImZpbGVfdXJsIiwiaXNfc2hvdyIsImRvd25sb2FkIiwiaXNfZGVsZXRlZCIsImFwaUluc3RhbmNlIiwicHV0IiwicmVnaXN0ZXJEYXRhIiwic3RhdHVzIiwib3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyU3VjY2VzcyIsImZldGNoRG9jdW1lbnRzRGF0YSIsInNldFRpbWVvdXQiLCJwdXNoIiwiYmluZCIsIm9wZW5Ob3RpZmljYXRpb25SZWdpc3RlckZhaWwiLCJtZXNzYWdlIiwic3VjY2VzcyIsImRlc2NyaXB0aW9uIiwicGxhY2VtZW50IiwibWVzc2dhZSIsImVycm9yIiwidmFsaWRhdGVVUkwiLCJpbnB1dFRleHQiLCJ2YWxpZGF0b3IiLCJ0cmltIiwidXNlRWZmZWN0Iiwib25SZXNldEZvcm0iLCJhY3Rpdml0aWVzX2ltYWdlIiwiZ2V0IiwiX2RvY3VtZW50c0RhdGEiLCJkb2N1bWVudHMiLCJpbWFnZVVwbG9hZHByb3BzIiwibXVsdGlwbGUiLCJsaXN0VHlwZSIsIm1heENvdW50IiwiYWN0aW9uIiwicHJldmlldyIsImN1c3RvbVJlcXVlc3QiLCJvcHRpb25zIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmaWxlIiwidHlwZV91c2VyIiwiY29uZmlnIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsImxpc3QiLCJfbmFtZSIsIm9uU3VjY2VzcyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZSIsImluZm8iLCJnZXRCYXNlNjQiLCJvcmlnaW5GaWxlT2JqIiwicmVzZXRJbWFnZVByZXZpZXciLCJvblJlbW92ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJyZXN1bHQiLCJvbmVycm9yIiwicGF0aCIsImJyZWFkY3J1bWJOYW1lIiwicmVxdWlyZWQiLCJtaW5Sb3dzIiwibWF4Um93cyIsImNsZWFyIiwibWFyZ2luUmlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlckNvbG9yIiwibWFyZ2luQm90dG9tIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFNQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFJQSxJQUFRQSxJQUFSLEdBQXdCQywrQ0FBeEIsQ0FBUUQsSUFBUjtBQUFBLElBQWNFLEtBQWQsR0FBd0JELCtDQUF4QixDQUFjQyxLQUFkO0FBQ0EsSUFBUUMsTUFBUixHQUFtQkMsMkNBQW5CLENBQVFELE1BQVI7O0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQWJGLENBbEJGLENBVEYsQ0FERixDQXhHRixDQUZGLENBSEYsQ0F6QkYsQ0FERjtBQTBMRDtBQUNEOztHQXZad0J0SCxJO1VBZU91QixpREFBWSxDQUFDQyxlLEVBQzNCSSxxRDs7O0tBaEJPNUIsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWRtaW5cXG1hbmFnZW1lbnRcXGRvY3VtZW50c1xcW2RvY3VtZW50c0lkXS5qcy5iMTJhM2U0YjM4OTMyMWQ5MjYzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmlsZVBkZlR3b1RvbmUsIEluYm94T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLCBGb3JtLFxyXG4gIFJvdywgU2VsZWN0LFxyXG4gIFN3aXRjaCwgVHlwb2dyYXBoeSwgVXBsb2FkLFxyXG4gIG5vdGlmaWNhdGlvblxyXG59IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnYW50ZC9saWIvaW5wdXQvVGV4dEFyZWEnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbi8vIGltcG9ydCBVc2VyTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9Vc2VyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHZhbGlkYXRvciBmcm9tICd2YWxpZGF0b3InO1xyXG4vKiBjb21wb25lbnRzICovXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0QWRtaW4nO1xyXG4vKiB1dGlscyAqL1xyXG5pbXBvcnQge1xyXG4gIGFic29sdXRlVXJsLCBhcGlJbnN0YW5jZVxyXG59IGZyb20gJy4uLy4uLy4uLy4uL21pZGRsZXdhcmUvdXRpbHMnO1xyXG5cclxuY29uc3QgeyBUZXh0LCBUaXRsZSB9ID0gVHlwb2dyYXBoeTtcclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuICBjb25zdCB7IHVzZXIsIG9yaWdpbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZG9jdW1lbnRzRGF0YSwgc2V0RG9jdW1lbnRzRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW3ByZXZpZXdJbWFnZSwgc2V0UHJldmlld0ltYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpbWFnZUxhbmRpbmdQYWdlLCBzZXRJbWFnZUxhbmRpbmdQYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwcmV2aWV3VmlzaWJsZSwgc2V0UHJldmlld1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmaWxlX25hbWVfb3JpLCBzZXRGaWxlX25hbWVfb3JpXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtmaWVsZHMsIHNldEZpZWxkc10gPSB1c2VTdGF0ZShbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFsnZmlsZV9zdWJqZWN0J10sXHJcbiAgICAgIHZhbHVlOiAnJyxcclxuICAgIH0sXHJcbiAgXSk7XHJcbiAgY29uc3QgW2FwaSwgY29udGV4dEhvbGRlcl0gPSBub3RpZmljYXRpb24udXNlTm90aWZpY2F0aW9uKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBkb2N1bWVudHNJZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHsgRHJhZ2dlciB9ID0gVXBsb2FkO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdEhhbmRsZXIodmFsdWUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwidmFsdWVcIilcclxuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKVxyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgb3JnYW5pemF0aW9uX2lkOiB1c2VyLm9yZ2FuaXphdGlvbl9pZCxcclxuICAgICAgZmlsZV9uYW1lOiB2YWx1ZS5maWxlX3N1YmplY3QsXHJcbiAgICAgIGZpbGVfbmFtZV9vcmk6IGZpbGVfbmFtZV9vcmksXHJcbiAgICAgIGZpbGVfc3ViamVjdDogdmFsdWUuZmlsZV9zdWJqZWN0LFxyXG4gICAgICBmaWxlX3VybDogdmFsdWUuZmlsZV91cmwgPyB2YWx1ZS5maWxlX3VybCA6IFwiXCIsXHJcbiAgICAgIGlzX3Nob3c6IGFjdGl2ZSxcclxuICAgICAgZG93bmxvYWQ6ICcwJyxcclxuICAgICAgaXNfZGVsZXRlZDogJzAnXHJcbiAgICB9O1xyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSlcclxuICAgIGNvbnN0IHJlZ2lzdGVyRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkucHV0KFxyXG4gICAgICAnL2RvY3VtZW50cy8nICsgZG9jdW1lbnRzSWQsXHJcbiAgICAgIGRhdGEsXHJcbiAgICApO1xyXG4gICAgaWYgKHJlZ2lzdGVyRGF0YS5kYXRhLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyU3VjY2VzcygpO1xyXG4gICAgICBmZXRjaERvY3VtZW50c0RhdGEoKTtcclxuICAgICAgc2V0VGltZW91dChcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAvL1N0YXJ0IHRoZSB0aW1lclxyXG4gICAgICAgICAgcm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50L2RvY3VtZW50cycpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSxcclxuICAgICAgICAyMDAwLFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbChyZWdpc3RlckRhdGEuZGF0YS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25SZWdpc3RlclN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICBhcGkuc3VjY2Vzcyh7XHJcbiAgICAgIG1lc3NhZ2U6IGDguJrguLHguJnguJfguLbguIHguILguYnguK3guKHguLnguKXguKrguLPguYDguKPguYfguIhgLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ+C4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iCcsXHJcbiAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25SZWdpc3RlckZhaWwgPSBtZXNzZ2FlID0+IHtcclxuICAgIGFwaS5lcnJvcih7XHJcbiAgICAgIG1lc3NhZ2U6IGDguJ7guJrguJvguLHguI3guKvguLLguKPguLDguKvguKfguYjguLLguIfguIHguLLguKPguJrguLHguJnguJfguLbguIHguILguYnguK3guKHguLnguKVgLFxyXG4gICAgICBkZXNjcmlwdGlvbjogbWVzc2dhZSxcclxuICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCB2YWxpZGF0ZVVSTCA9IGlucHV0VGV4dCA9PiB7XHJcbiAgICBzZXRVcmwodmFsaWRhdG9yLnRyaW0oaW5wdXRUZXh0KSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoRG9jdW1lbnRzRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25SZXNldEZvcm0gPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmUoZG9jdW1lbnRzRGF0YS5pc19zaG93ID09IDEgPyAxIDogMCk7XHJcbiAgICBzZXRGaWVsZHMoW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydmaWxlX3N1YmplY3QnXSxcclxuICAgICAgICB2YWx1ZTogZG9jdW1lbnRzRGF0YS5maWxlX3N1YmplY3QsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2ZpbGVfdXJsJ10sXHJcbiAgICAgICAgdmFsdWU6IGRvY3VtZW50c0RhdGEuZmlsZV91cmwsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2ZpbGVfbmFtZV9vcmknXSxcclxuICAgICAgICB2YWx1ZTogZG9jdW1lbnRzRGF0YS5maWxlX25hbWVfb3JpLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydpc19zaG93J10sXHJcbiAgICAgICAgdmFsdWU6IGRvY3VtZW50c0RhdGEuaXNfc2hvdyxcclxuICAgICAgfSxcclxuICAgIF0pO1xyXG4gICAgLy8g4Lil4LmJ4Liy4LiH4LiE4LmI4Liy4LmD4LiZIHN0YXRlIOC5gOC4nuC4t+C5iOC4reC5hOC4oeC5iOC5g+C4q+C5ieC5geC4quC4lOC4h+C4guC5ieC4reC4oeC4ueC4peC5gOC4lOC4tOC4oVxyXG4gICAgc2V0UHJldmlld1Zpc2libGUoJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICsgdXNlci5vcmdhbml6YXRpb25faWQgKyAnXFxcXGRvY3VtZW50c1xcXFwnICsgZG9jdW1lbnRzRGF0YS5hY3Rpdml0aWVzX2ltYWdlKTtcclxuICAgIHNldFByZXZpZXdJbWFnZSh0cnVlKTtcclxuICAgIHNldEZpbGVfbmFtZV9vcmkoZG9jdW1lbnRzRGF0YS5maWxlX25hbWVfb3JpKTtcclxuXHJcblxyXG4gICAgLy8g4Lij4Li14LmA4LiL4LmH4LiV4Lij4Li54Lib4Lig4Liy4Lie4LiB4Lil4Lix4Lia4LmE4Lib4Lii4Lix4LiH4Lig4Liy4Lie4LmA4LiU4Li04Lih4Lia4LiZ4LiQ4Liy4LiZ4LiC4LmJ4Lit4Lih4Li54LilXHJcbiAgICAvLyBzZXRQcmV2aWV3SW1hZ2UoJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICsgdXNlci5vcmdhbml6YXRpb25faWQgKyAnXFxcXGFjdGl2aXRpZXNcXFxcJyArIGFjdGl2aXRpZXNEYXRhLmFjdGl2aXRpZXNfaW1hZ2UpO1xyXG4gICAgLy8gc2V0UHJldmlld1Zpc2libGUodHJ1ZSk7XHJcbiAgICAvLyBzZXRJbWFnZUxhbmRpbmdQYWdlKGFjdGl2aXRpZXNEYXRhLmFjdGl2aXRpZXNfaW1hZ2UpO1xyXG5cclxuICB9O1xyXG4gIGNvbnN0IGZldGNoRG9jdW1lbnRzRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IF9kb2N1bWVudHNEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoJ2RvY3VtZW50cy8nICsgZG9jdW1lbnRzSWQpO1xyXG4gICAgc2V0RG9jdW1lbnRzRGF0YShfZG9jdW1lbnRzRGF0YS5kYXRhLmRvY3VtZW50cylcclxuICAgIHNldEFjdGl2ZShfZG9jdW1lbnRzRGF0YS5kYXRhLmRvY3VtZW50cy5pc19zaG93KTtcclxuICAgIHNldEZpZWxkcyhbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2ZpbGVfc3ViamVjdCddLFxyXG4gICAgICAgIHZhbHVlOiBfZG9jdW1lbnRzRGF0YS5kYXRhLmRvY3VtZW50cy5maWxlX3N1YmplY3QsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2ZpbGVfdXJsJ10sXHJcbiAgICAgICAgdmFsdWU6IF9kb2N1bWVudHNEYXRhLmRhdGEuZG9jdW1lbnRzLmZpbGVfdXJsLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydmaWxlX25hbWVfb3JpJ10sXHJcbiAgICAgICAgdmFsdWU6IF9kb2N1bWVudHNEYXRhLmRhdGEuZG9jdW1lbnRzLmZpbGVfbmFtZV9vcmksXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2lzX3Nob3cnXSxcclxuICAgICAgICB2YWx1ZTogX2RvY3VtZW50c0RhdGEuZGF0YS5kb2N1bWVudHMuaXNfc2hvdyxcclxuICAgICAgfSxcclxuICAgIF0pO1xyXG4gICAgLy8gc2V0UHJldmlld0ltYWdlKGluZm8uZmlsZS51cmwgfHwgaW5mby5maWxlLnByZXZpZXcpXHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZSh0cnVlKVxyXG5cclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3QgaW1hZ2VVcGxvYWRwcm9wcyA9IHtcclxuICAgIG5hbWU6ICdmaWxlJyxcclxuICAgIG11bHRpcGxlOiBmYWxzZSxcclxuICAgIGxpc3RUeXBlOiAndGV4dCcsXHJcbiAgICBtYXhDb3VudDogMSxcclxuICAgIGFjdGlvbjogXCIvYXBpL3VwbG9hZC9kb2N1bWVudHNcIixcclxuICAgIHByZXZpZXc6IGZhbHNlLFxyXG4gICAgLy8gdWlkOiB1c2VyLnR5cGVfdXNlciA9PSAxID8gXCJhZG1pblwiIDogdXNlci5vcmdhbml6YXRpb25faWQsXHJcbiAgICAvLyBiZWZvcmVVcGxvYWQoZmlsZSkge1xyXG4gICAgLy8gXHRjb25zdCBpc0x0MTBNID0gZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgPCAxMFxyXG4gICAgLy8gXHRpZiAoIWlzTHQxME0pIHtcclxuICAgIC8vIFx0XHRub3RpZmljYXRpb24ub3Blbih7XHJcbiAgICAvLyBcdFx0XHRtZXNzYWdlOiAnVXBsb2FkIGVycm9yIScsXHJcbiAgICAvLyBcdFx0XHRkZXNjcmlwdGlvbjogPFRleHQgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiPkltYWdlIG11c3Qgc21hbGxlciB0aGFuIDEwTUIhPC9UZXh0PixcclxuICAgIC8vIFx0XHR9KVxyXG4gICAgLy8gXHR9XHJcbiAgICAvLyBcdHJldHVybiBpc0x0MTBNXHJcbiAgICAvLyB9LFxyXG4gICAgY3VzdG9tUmVxdWVzdDogKG9wdGlvbnMpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgb3B0aW9ucy5maWxlKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnaWQnLCB1c2VyLnR5cGVfdXNlciA9PSAxID8gXCJhZG1pblwiIDogdXNlci5vcmdhbml6YXRpb25faWQpXHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICBcImhlYWRlcnNcIjoge1xyXG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogJ211bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PS0tLS1XZWJLaXRGb3JtQm91bmRhcnlxVHFKSXh2a1dGWXF2UDVzJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBheGlvcy5wb3N0KG9wdGlvbnMuYWN0aW9uLCBkYXRhLCBjb25maWcpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldEZpbGVfbmFtZV9vcmkocmVzLmRhdGEuZGF0YS5saXN0WzBdLl9uYW1lKVxyXG4gICAgICAgIG9wdGlvbnMub25TdWNjZXNzKHJlcy5kYXRhLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfSxcclxuICAgIGFzeW5jIG9uQ2hhbmdlKGluZm8pIHtcclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGluZm8uZmlsZVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyh1c2VyKVxyXG4gICAgICBzd2l0Y2ggKGluZm8uZmlsZS5zdGF0dXMpIHtcclxuICAgICAgICAvLyBjYXNlIFwidXBsb2FkaW5nXCI6XHJcbiAgICAgICAgLy8gICBuZXh0U3RhdGUuc2VsZWN0ZWRGaWxlTGlzdCA9IFtpbmZvLmZpbGVdO1xyXG4gICAgICAgIC8vICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImRvbmVcIjpcclxuICAgICAgICAgIGlmICghaW5mby5maWxlLnVybCAmJiAhaW5mby5maWxlLnByZXZpZXcpIHtcclxuICAgICAgICAgICAgaW5mby5maWxlLnByZXZpZXcgPSBhd2FpdCBnZXRCYXNlNjQoaW5mby5maWxlLm9yaWdpbkZpbGVPYmopO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0UHJldmlld0ltYWdlKGluZm8uZmlsZS51cmwgfHwgaW5mby5maWxlLnByZXZpZXcpXHJcbiAgICAgICAgICBzZXRQcmV2aWV3VmlzaWJsZSh0cnVlKVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAvLyBlcnJvciBvciByZW1vdmVkXHJcbiAgICAgICAgICByZXNldEltYWdlUHJldmlldygpXHJcbiAgICAgIH1cclxuICAgICAgLy9jb25zb2xlLmxvZyhpbmZvLmZpbGUpXHJcblxyXG4gICAgICAvLyB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgLy8gICBwcmV2aWV3SW1hZ2U6IGZpbGUudXJsIHx8IGZpbGUucHJldmlldyxcclxuICAgICAgLy8gICBwcmV2aWV3VmlzaWJsZTogdHJ1ZSxcclxuICAgICAgLy8gfSk7XHJcblxyXG4gICAgfSxcclxuICAgIG9uUmVtb3ZlKGluZm8pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJvblJlbW92ZVwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhpbmZvKVxyXG4gICAgICByZXNldEltYWdlUHJldmlldygpXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzZXRJbWFnZVByZXZpZXcgPSAoKSA9PiB7XHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZShmYWxzZSlcclxuICAgIHNldFByZXZpZXdJbWFnZShudWxsKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0QmFzZTY0KGZpbGUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcclxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBlcnJvciA9PiByZWplY3QoZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dFxyXG4gICAgICB0aXRsZT1cIkdvdmVybm1lbnQgLSBBZG1pbiBtYW5hZ2VtZW50XCJcclxuICAgICAgdGl0bGVQYWdlPXtcclxuICAgICAgICAn4LmB4LiB4LmJ4LmE4LiC4LmA4Lit4LiB4Liq4Liy4LijICcgKyAoZG9jdW1lbnRzRGF0YSA/IGRvY3VtZW50c0RhdGEuZmlsZV9zdWJqZWN0IDogJycpXHJcbiAgICAgIH1cclxuICAgICAgdXJsPXtvcmlnaW59XHJcbiAgICAgIGluZGV4U3ViTWVudT17XCIxXCJ9XHJcbiAgICAgIGluZGV4TWVudT17XCJzdWItMS01XCJ9XHJcbiAgICAgIG9yaWdpbj17b3JpZ2lufVxyXG4gICAgICBwcm9wcz17cHJvcHN9XHJcbiAgICAgIF9yb3V0ZXM9e1tcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYXRoOiAnL2FkbWluL2Rhc2hib3JhZCcsXHJcbiAgICAgICAgICBicmVhZGNydW1iTmFtZTogJ+C4q+C4meC5ieC4suC4q+C4peC4seC4gScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYXRoOiAnL2FkbWluL21hbmFnZW1lbnQvZG9jdW1lbnRzJyxcclxuICAgICAgICAgIGJyZWFkY3J1bWJOYW1lOiAn4LiI4Lix4LiU4LiB4Liy4Lij4LiE4Lil4Lix4LiH4LmA4Lit4LiB4Liq4Liy4LijJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhdGg6ICcvYWRtaW4vbWFuYWdlbWVudC9hZGQtZG9jdW1lbnRzJyxcclxuICAgICAgICAgIGJyZWFkY3J1bWJOYW1lOiAn4LmB4LiB4LmJ4LmE4LiC4LmA4Lit4LiB4Liq4Liy4LijJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtjb250ZXh0SG9sZGVyfVxyXG4gICAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkob3JnYW5pemF0aW9uRGF0YSl9ICovfVxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICB7Lyoge0pTT04uc3RyaW5naWZ5KG9yZ2FuaXphdGlvbkRhdGEpfSAqL31cclxuICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgb25GaW5pc2g9e29uU3VibWl0SGFuZGxlcn1cclxuICAgICAgICAgICAgcmVxdWlyZWRNYXJrPXt0cnVlfVxyXG4gICAgICAgICAgICBmaWVsZHM9e2ZpZWxkc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJmaWxlX3N1YmplY3RcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwi4LiK4Li34LmI4Lit4LmA4Lit4LiB4Liq4Liy4LijIDpcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4LmA4Lit4LiB4Liq4Liy4LijJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiK4Li34LmI4Lit4LmA4Lit4LiB4Liq4Liy4LijXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjbGVhcjogJ2JvdGgnIH19PjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJmaWxlX25hbWVcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwi4LmB4LiZ4Lia4LmE4Lif4Lil4LmMIDpcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LmA4Lil4Li34Lit4LiB4LmA4Lit4LiB4Liq4Liy4LijJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxEcmFnZ2VyXHJcbiAgICAgICAgICAgICAgICBtYXhDb3VudD17MX1cclxuICAgICAgICAgICAgICAgIC8vIGxpc3RUeXBlPVwicGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICBhY2NlcHQ9XCIucGRmXCJcclxuICAgICAgICAgICAgICAgIHsuLi5pbWFnZVVwbG9hZHByb3BzfVxyXG4gICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICB7cHJldmlld1Zpc2libGUgJiYgPD4gPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC1kcmFnLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPEZpbGVQZGZUd29Ub25lIC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIOC4reC4seC4nuC5guC4q+C4peC4lOC5hOC4n+C4peC5jOC5gOC4o+C4teC4ouC4muC4o+C5ieC4reC4ojxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIOC4hOC4peC4tOC4gSDguKvguKPguLfguK0g4Lil4Liy4LiB4LmE4Lif4Lil4LmM4Lih4Liy4LiX4Li14LmI4Lia4Lij4Li04LmA4Lin4LiT4LiZ4Li14LmJ4LmA4Lie4Li34LmI4Lit4Lit4Lix4Lib4LmC4Lir4Lil4LiUXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeyFwcmV2aWV3VmlzaWJsZSAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbmJveE91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4LiE4Lil4Li04LiBIOC4q+C4o+C4t+C4rSDguKXguLLguIHguYTguJ/guKXguYzguKHguLLguJfguLXguYjguJrguKPguLTguYDguKfguJPguJnguLXguYnguYDguJ7guLfguYjguK3guK3guLHguJvguYLguKvguKXguJRcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9EcmFnZ2VyPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjbGVhcjogJ2JvdGgnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIHtkb2N1bWVudHNEYXRhICYmIDw+XHJcbiAgICAgICAgICAgICAgICB7ZG9jdW1lbnRzRGF0YS5maWxlX3VybCAmJiA8PjxkaXYgY2xhc3M9XCJhbnQtdXBsb2FkLXRleHQtaWNvblwiIHN0eWxlPXt7IGZsb2F0OiAnbGVmdCcsIG1hcmdpblJpZ2h0OiAnMnB4JyB9fT48c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cInBhcGVyLWNsaXBcIiBjbGFzcz1cImFudGljb24gYW50aWNvbi1wYXBlci1jbGlwXCI+PHN2ZyB2aWV3Qm94PVwiNjQgNjQgODk2IDg5NlwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1pY29uPVwicGFwZXItY2xpcFwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxwYXRoIGQ9XCJNNzc5LjMgMTk2LjZjLTk0LjItOTQuMi0yNDcuNi05NC4yLTM0MS43IDBsLTI2MSAyNjAuOGMtMS43IDEuNy0yLjYgNC0yLjYgNi40cy45IDQuNyAyLjYgNi40bDM2LjkgMzYuOWE5IDkgMCAwMDEyLjcgMGwyNjEtMjYwLjhjMzIuNC0zMi40IDc1LjUtNTAuMiAxMjEuMy01MC4yczg4LjkgMTcuOCAxMjEuMiA1MC4yYzMyLjQgMzIuNCA1MC4yIDc1LjUgNTAuMiAxMjEuMiAwIDQ1LjgtMTcuOCA4OC44LTUwLjIgMTIxLjJsLTI2NiAyNjUuOS00My4xIDQzLjFjLTQwLjMgNDAuMy0xMDUuOCA0MC4zLTE0Ni4xIDAtMTkuNS0xOS41LTMwLjItNDUuNC0zMC4yLTczczEwLjctNTMuNSAzMC4yLTczbDI2My45LTI2My44YzYuNy02LjYgMTUuNS0xMC4zIDI0LjktMTAuM2guMWM5LjQgMCAxOC4xIDMuNyAyNC43IDEwLjMgNi43IDYuNyAxMC4zIDE1LjUgMTAuMyAyNC45IDAgOS4zLTMuNyAxOC4xLTEwLjMgMjQuN0wzNzIuNCA2NTNjLTEuNyAxLjctMi42IDQtMi42IDYuNHMuOSA0LjcgMi42IDYuNGwzNi45IDM2LjlhOSA5IDAgMDAxMi43IDBsMjE1LjYtMjE1LjZjMTkuOS0xOS45IDMwLjgtNDYuMyAzMC44LTc0LjRzLTExLTU0LjYtMzAuOC03NC40Yy00MS4xLTQxLjEtMTA3LjktNDEtMTQ5IDBMNDYzIDM2NCAyMjQuOCA2MDIuMUExNzIuMjIgMTcyLjIyIDAgMDAxNzQgNzI0LjhjMCA0Ni4zIDE4LjEgODkuOCA1MC44IDEyMi41IDMzLjkgMzMuOCA3OC4zIDUwLjcgMTIyLjcgNTAuNyA0NC40IDAgODguOC0xNi45IDEyMi42LTUwLjdsMzA5LjItMzA5QzgyNC44IDQ5Mi43IDg1MCA0MzIgODUwIDM2Ny41Yy4xLTY0LjYtMjUuMS0xMjUuMy03MC43LTE3MC45elwiPjwvcGF0aD48L3N2Zz48L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eycvdXBsb2Fkcy9jLScgKyB1c2VyLm9yZ2FuaXphdGlvbl9pZCArICcvZG9jdW1lbnRzLycgKyBkb2N1bWVudHNEYXRhLmZpbGVfbmFtZV9vcml9IHRhcmdldD0nX2JsYW5rJz57ZG9jdW1lbnRzRGF0YS5maWxlX25hbWVfb3JpfTwvYT48Lz59XHJcbiAgICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjbGVhcjogJ2JvdGgnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICA8aHJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cD7guKvguKPguLfguK0gRG93bmxvYWQg4LiI4Liy4LiBIHVybDwvcD5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjbGVhcjogJ2JvdGgnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgbmFtZT1cImZpbGVfdXJsXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIuC4l+C4teC5iOC4reC4ouC4ueC5iCB1cmwgOlwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguJfguLXguYjguK3guKLguLnguYggdXJsIOC4guC4reC4h+C5gOC4reC4geC4quC4suC4oycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4l+C4teC5iOC4reC4ouC4ueC5iCB1cmxcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNsZWFyOiAnYm90aCcgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW0gY2xhc3NOYW1lPVwiZmxleCBtdC02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdGV4dC1sZWZ0IHctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzd3QtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXthY3RpdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dmFsdWUgPT4gc2V0QWN0aXZlKHZhbHVlID8gMSA6IDApfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteC0yIHRleHQtc21cIj7guKrguJbguLLguJnguLDguIHguLLguKPguYPguIrguYnguIfguLLguJk8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbGc6dGV4dC1yaWdodCB3LWZ1bGwgbGc6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlc2V0Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0MyQ0ZFMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDMkNGRTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwcHggIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHctZnVsbCBsZzp3LTEvNFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbS1ibGFjayBcIj7guKPguLXguYDguIvguYfguJc8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDU5NjY5JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzA1OTY2OScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMCxcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzBweCAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUgIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdy1mdWxsIGxnOnctMS80XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRleHQtY3VzdG9tLXdoaXRlIFwiPuC4muC4seC4meC4l+C4tuC4gTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4vKiBnZXRTZXJ2ZXJTaWRlUHJvcHMgKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyByZXEgfSA9IGNvbnRleHQ7XHJcbiAgY29uc3QgeyBvcmlnaW4gfSA9IGFic29sdXRlVXJsKHJlcSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBvcmlnaW4sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==