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

    setPreviewVisible(false);
    setPreviewImage(null);
    setFile_name_ori(documentsData.fil); // รีเซ็ตรูปภาพกลับไปยังภาพเดิมบนฐานข้อมูล

    setPreviewImage("..\\..\\..\\uploads\\c-" + user.organization_id + '\\activities\\' + activitiesData.activities_image);
    setPreviewVisible(true);
    setImageLandingPage(activitiesData.activities_image);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9tYW5hZ2VtZW50L2RvY3VtZW50cy9bZG9jdW1lbnRzSWRdLmpzIl0sIm5hbWVzIjpbIlRleHQiLCJUeXBvZ3JhcGh5IiwiVGl0bGUiLCJPcHRpb24iLCJTZWxlY3QiLCJIb21lIiwicHJvcHMiLCJ1c2VyIiwib3JpZ2luIiwidXNlU3RhdGUiLCJ1cmwiLCJzZXRVcmwiLCJkb2N1bWVudHNEYXRhIiwic2V0RG9jdW1lbnRzRGF0YSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInByZXZpZXdJbWFnZSIsInNldFByZXZpZXdJbWFnZSIsImltYWdlTGFuZGluZ1BhZ2UiLCJzZXRJbWFnZUxhbmRpbmdQYWdlIiwicHJldmlld1Zpc2libGUiLCJzZXRQcmV2aWV3VmlzaWJsZSIsImZpbGVfbmFtZV9vcmkiLCJzZXRGaWxlX25hbWVfb3JpIiwibmFtZSIsInZhbHVlIiwiZmllbGRzIiwic2V0RmllbGRzIiwibm90aWZpY2F0aW9uIiwidXNlTm90aWZpY2F0aW9uIiwiYXBpIiwiY29udGV4dEhvbGRlciIsInJvdXRlciIsInVzZVJvdXRlciIsImRvY3VtZW50c0lkIiwicXVlcnkiLCJEcmFnZ2VyIiwiVXBsb2FkIiwib25TdWJtaXRIYW5kbGVyIiwiZGF0YSIsIm9yZ2FuaXphdGlvbl9pZCIsImZpbGVfbmFtZSIsImZpbGVfc3ViamVjdCIsImZpbGVfdXJsIiwiaXNfc2hvdyIsImRvd25sb2FkIiwiaXNfZGVsZXRlZCIsImFwaUluc3RhbmNlIiwicHV0IiwicmVnaXN0ZXJEYXRhIiwic3RhdHVzIiwib3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyU3VjY2VzcyIsImZldGNoRG9jdW1lbnRzRGF0YSIsInNldFRpbWVvdXQiLCJwdXNoIiwiYmluZCIsIm9wZW5Ob3RpZmljYXRpb25SZWdpc3RlckZhaWwiLCJtZXNzYWdlIiwic3VjY2VzcyIsImRlc2NyaXB0aW9uIiwicGxhY2VtZW50IiwibWVzc2dhZSIsImVycm9yIiwidmFsaWRhdGVVUkwiLCJpbnB1dFRleHQiLCJ2YWxpZGF0b3IiLCJ0cmltIiwidXNlRWZmZWN0Iiwib25SZXNldEZvcm0iLCJmaWwiLCJhY3Rpdml0aWVzRGF0YSIsImFjdGl2aXRpZXNfaW1hZ2UiLCJnZXQiLCJfZG9jdW1lbnRzRGF0YSIsImRvY3VtZW50cyIsImltYWdlVXBsb2FkcHJvcHMiLCJtdWx0aXBsZSIsImxpc3RUeXBlIiwibWF4Q291bnQiLCJhY3Rpb24iLCJwcmV2aWV3IiwiY3VzdG9tUmVxdWVzdCIsIm9wdGlvbnMiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZpbGUiLCJ0eXBlX3VzZXIiLCJjb25maWciLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzIiwibGlzdCIsIl9uYW1lIiwib25TdWNjZXNzIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm9uQ2hhbmdlIiwiaW5mbyIsImdldEJhc2U2NCIsIm9yaWdpbkZpbGVPYmoiLCJyZXNldEltYWdlUHJldmlldyIsIm9uUmVtb3ZlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJwYXRoIiwiYnJlYWRjcnVtYk5hbWUiLCJyZXF1aXJlZCIsIm1pblJvd3MiLCJtYXhSb3dzIiwiY2xlYXIiLCJtYXJnaW5SaWdodCIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsIndpZHRoIiwiYm9yZGVyQ29sb3IiLCJtYXJnaW5Cb3R0b20iLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1BO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUlBLElBQVFBLElBQVIsR0FBd0JDLCtDQUF4QixDQUFRRCxJQUFSO0FBQUEsSUFBY0UsS0FBZCxHQUF3QkQsK0NBQXhCLENBQWNDLEtBQWQ7QUFDQSxJQUFRQyxNQUFSLEdBQW1C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QUFRLEVBQUMsUUFWWDtBQVdFLGFBQVMsRUFBQyw0SUFYWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBYUUsTUFBQyxJQUFEO0FBQU0sYUFBUyxFQUFDLG9CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQWJGLENBbEJGLENBVEYsQ0FERixDQXhHRixDQUZGLENBSEYsQ0F6QkYsQ0FERjtBQTBMRDtBQUNEOztHQXZad0J4SCxJO1VBZU91QixpREFBWSxDQUFDQyxlLEVBQzNCSSxxRDs7O0tBaEJPNUIsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWRtaW5cXG1hbmFnZW1lbnRcXGRvY3VtZW50c1xcW2RvY3VtZW50c0lkXS5qcy40N2RmZDA0NTA1NmE5NTZlMWQwZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmlsZVBkZlR3b1RvbmUsIEluYm94T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLCBGb3JtLFxyXG4gIFJvdywgU2VsZWN0LFxyXG4gIFN3aXRjaCwgVHlwb2dyYXBoeSwgVXBsb2FkLFxyXG4gIG5vdGlmaWNhdGlvblxyXG59IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnYW50ZC9saWIvaW5wdXQvVGV4dEFyZWEnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbi8vIGltcG9ydCBVc2VyTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9Vc2VyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHZhbGlkYXRvciBmcm9tICd2YWxpZGF0b3InO1xyXG4vKiBjb21wb25lbnRzICovXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0QWRtaW4nO1xyXG4vKiB1dGlscyAqL1xyXG5pbXBvcnQge1xyXG4gIGFic29sdXRlVXJsLCBhcGlJbnN0YW5jZVxyXG59IGZyb20gJy4uLy4uLy4uLy4uL21pZGRsZXdhcmUvdXRpbHMnO1xyXG5cclxuY29uc3QgeyBUZXh0LCBUaXRsZSB9ID0gVHlwb2dyYXBoeTtcclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuICBjb25zdCB7IHVzZXIsIG9yaWdpbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZG9jdW1lbnRzRGF0YSwgc2V0RG9jdW1lbnRzRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW3ByZXZpZXdJbWFnZSwgc2V0UHJldmlld0ltYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpbWFnZUxhbmRpbmdQYWdlLCBzZXRJbWFnZUxhbmRpbmdQYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwcmV2aWV3VmlzaWJsZSwgc2V0UHJldmlld1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmaWxlX25hbWVfb3JpLCBzZXRGaWxlX25hbWVfb3JpXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtmaWVsZHMsIHNldEZpZWxkc10gPSB1c2VTdGF0ZShbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFsnZmlsZV9zdWJqZWN0J10sXHJcbiAgICAgIHZhbHVlOiAnJyxcclxuICAgIH0sXHJcbiAgXSk7XHJcbiAgY29uc3QgW2FwaSwgY29udGV4dEhvbGRlcl0gPSBub3RpZmljYXRpb24udXNlTm90aWZpY2F0aW9uKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBkb2N1bWVudHNJZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHsgRHJhZ2dlciB9ID0gVXBsb2FkO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdEhhbmRsZXIodmFsdWUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwidmFsdWVcIilcclxuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKVxyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgb3JnYW5pemF0aW9uX2lkOiB1c2VyLm9yZ2FuaXphdGlvbl9pZCxcclxuICAgICAgZmlsZV9uYW1lOiB2YWx1ZS5maWxlX3N1YmplY3QsXHJcbiAgICAgIGZpbGVfbmFtZV9vcmk6IGZpbGVfbmFtZV9vcmksXHJcbiAgICAgIGZpbGVfc3ViamVjdDogdmFsdWUuZmlsZV9zdWJqZWN0LFxyXG4gICAgICBmaWxlX3VybDogdmFsdWUuZmlsZV91cmwgPyB2YWx1ZS5maWxlX3VybCA6IFwiXCIsXHJcbiAgICAgIGlzX3Nob3c6IGFjdGl2ZSxcclxuICAgICAgZG93bmxvYWQ6ICcwJyxcclxuICAgICAgaXNfZGVsZXRlZDogJzAnXHJcbiAgICB9O1xyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSlcclxuICAgIGNvbnN0IHJlZ2lzdGVyRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkucHV0KFxyXG4gICAgICAnL2RvY3VtZW50cy8nICsgZG9jdW1lbnRzSWQsXHJcbiAgICAgIGRhdGEsXHJcbiAgICApO1xyXG4gICAgaWYgKHJlZ2lzdGVyRGF0YS5kYXRhLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyU3VjY2VzcygpO1xyXG4gICAgICBmZXRjaERvY3VtZW50c0RhdGEoKTtcclxuICAgICAgc2V0VGltZW91dChcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAvL1N0YXJ0IHRoZSB0aW1lclxyXG4gICAgICAgICAgcm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50L2RvY3VtZW50cycpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSxcclxuICAgICAgICAyMDAwLFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbChyZWdpc3RlckRhdGEuZGF0YS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25SZWdpc3RlclN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICBhcGkuc3VjY2Vzcyh7XHJcbiAgICAgIG1lc3NhZ2U6IGDguJrguLHguJnguJfguLbguIHguILguYnguK3guKHguLnguKXguKrguLPguYDguKPguYfguIhgLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ+C4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iCcsXHJcbiAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25SZWdpc3RlckZhaWwgPSBtZXNzZ2FlID0+IHtcclxuICAgIGFwaS5lcnJvcih7XHJcbiAgICAgIG1lc3NhZ2U6IGDguJ7guJrguJvguLHguI3guKvguLLguKPguLDguKvguKfguYjguLLguIfguIHguLLguKPguJrguLHguJnguJfguLbguIHguILguYnguK3guKHguLnguKVgLFxyXG4gICAgICBkZXNjcmlwdGlvbjogbWVzc2dhZSxcclxuICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCB2YWxpZGF0ZVVSTCA9IGlucHV0VGV4dCA9PiB7XHJcbiAgICBzZXRVcmwodmFsaWRhdG9yLnRyaW0oaW5wdXRUZXh0KSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoRG9jdW1lbnRzRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25SZXNldEZvcm0gPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmUoZG9jdW1lbnRzRGF0YS5pc19zaG93ID09IDEgPyAxIDogMCk7XHJcbiAgICBzZXRGaWVsZHMoW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydmaWxlX3N1YmplY3QnXSxcclxuICAgICAgICB2YWx1ZTogZG9jdW1lbnRzRGF0YS5maWxlX3N1YmplY3QsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2ZpbGVfdXJsJ10sXHJcbiAgICAgICAgdmFsdWU6IGRvY3VtZW50c0RhdGEuZmlsZV91cmwsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2ZpbGVfbmFtZV9vcmknXSxcclxuICAgICAgICB2YWx1ZTogZG9jdW1lbnRzRGF0YS5maWxlX25hbWVfb3JpLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydpc19zaG93J10sXHJcbiAgICAgICAgdmFsdWU6IGRvY3VtZW50c0RhdGEuaXNfc2hvdyxcclxuICAgICAgfSxcclxuICAgIF0pO1xyXG4gICAgLy8g4Lil4LmJ4Liy4LiH4LiE4LmI4Liy4LmD4LiZIHN0YXRlIOC5gOC4nuC4t+C5iOC4reC5hOC4oeC5iOC5g+C4q+C5ieC5geC4quC4lOC4h+C4guC5ieC4reC4oeC4ueC4peC5gOC4lOC4tOC4oVxyXG4gICAgc2V0UHJldmlld1Zpc2libGUoZmFsc2UpO1xyXG4gICAgc2V0UHJldmlld0ltYWdlKG51bGwpO1xyXG4gICAgc2V0RmlsZV9uYW1lX29yaShkb2N1bWVudHNEYXRhLmZpbCk7XHJcblxyXG5cclxuICAgIC8vIOC4o+C4teC5gOC4i+C5h+C4leC4o+C4ueC4m+C4oOC4suC4nuC4geC4peC4seC4muC5hOC4m+C4ouC4seC4h+C4oOC4suC4nuC5gOC4lOC4tOC4oeC4muC4meC4kOC4suC4meC4guC5ieC4reC4oeC4ueC4pVxyXG4gICAgc2V0UHJldmlld0ltYWdlKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArIHVzZXIub3JnYW5pemF0aW9uX2lkICsgJ1xcXFxhY3Rpdml0aWVzXFxcXCcgKyBhY3Rpdml0aWVzRGF0YS5hY3Rpdml0aWVzX2ltYWdlKTtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlKHRydWUpO1xyXG4gICAgc2V0SW1hZ2VMYW5kaW5nUGFnZShhY3Rpdml0aWVzRGF0YS5hY3Rpdml0aWVzX2ltYWdlKTtcclxuXHJcbiAgfTtcclxuICBjb25zdCBmZXRjaERvY3VtZW50c0RhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBfZG9jdW1lbnRzRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KCdkb2N1bWVudHMvJyArIGRvY3VtZW50c0lkKTtcclxuICAgIHNldERvY3VtZW50c0RhdGEoX2RvY3VtZW50c0RhdGEuZGF0YS5kb2N1bWVudHMpXHJcbiAgICBzZXRBY3RpdmUoX2RvY3VtZW50c0RhdGEuZGF0YS5kb2N1bWVudHMuaXNfc2hvdyk7XHJcbiAgICBzZXRGaWVsZHMoW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydmaWxlX3N1YmplY3QnXSxcclxuICAgICAgICB2YWx1ZTogX2RvY3VtZW50c0RhdGEuZGF0YS5kb2N1bWVudHMuZmlsZV9zdWJqZWN0LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydmaWxlX3VybCddLFxyXG4gICAgICAgIHZhbHVlOiBfZG9jdW1lbnRzRGF0YS5kYXRhLmRvY3VtZW50cy5maWxlX3VybCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnZmlsZV9uYW1lX29yaSddLFxyXG4gICAgICAgIHZhbHVlOiBfZG9jdW1lbnRzRGF0YS5kYXRhLmRvY3VtZW50cy5maWxlX25hbWVfb3JpLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydpc19zaG93J10sXHJcbiAgICAgICAgdmFsdWU6IF9kb2N1bWVudHNEYXRhLmRhdGEuZG9jdW1lbnRzLmlzX3Nob3csXHJcbiAgICAgIH0sXHJcbiAgICBdKTtcclxuICAgIC8vIHNldFByZXZpZXdJbWFnZShpbmZvLmZpbGUudXJsIHx8IGluZm8uZmlsZS5wcmV2aWV3KVxyXG4gICAgc2V0UHJldmlld1Zpc2libGUodHJ1ZSlcclxuXHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0IGltYWdlVXBsb2FkcHJvcHMgPSB7XHJcbiAgICBuYW1lOiAnZmlsZScsXHJcbiAgICBtdWx0aXBsZTogZmFsc2UsXHJcbiAgICBsaXN0VHlwZTogJ3RleHQnLFxyXG4gICAgbWF4Q291bnQ6IDEsXHJcbiAgICBhY3Rpb246IFwiL2FwaS91cGxvYWQvZG9jdW1lbnRzXCIsXHJcbiAgICBwcmV2aWV3OiBmYWxzZSxcclxuICAgIC8vIHVpZDogdXNlci50eXBlX3VzZXIgPT0gMSA/IFwiYWRtaW5cIiA6IHVzZXIub3JnYW5pemF0aW9uX2lkLFxyXG4gICAgLy8gYmVmb3JlVXBsb2FkKGZpbGUpIHtcclxuICAgIC8vIFx0Y29uc3QgaXNMdDEwTSA9IGZpbGUuc2l6ZSAvIDEwMjQgLyAxMDI0IDwgMTBcclxuICAgIC8vIFx0aWYgKCFpc0x0MTBNKSB7XHJcbiAgICAvLyBcdFx0bm90aWZpY2F0aW9uLm9wZW4oe1xyXG4gICAgLy8gXHRcdFx0bWVzc2FnZTogJ1VwbG9hZCBlcnJvciEnLFxyXG4gICAgLy8gXHRcdFx0ZGVzY3JpcHRpb246IDxUZXh0IGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIj5JbWFnZSBtdXN0IHNtYWxsZXIgdGhhbiAxME1CITwvVGV4dD4sXHJcbiAgICAvLyBcdFx0fSlcclxuICAgIC8vIFx0fVxyXG4gICAgLy8gXHRyZXR1cm4gaXNMdDEwTVxyXG4gICAgLy8gfSxcclxuICAgIGN1c3RvbVJlcXVlc3Q6IChvcHRpb25zKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgZGF0YS5hcHBlbmQoJ2lkJywgdXNlci50eXBlX3VzZXIgPT0gMSA/IFwiYWRtaW5cIiA6IHVzZXIub3JnYW5pemF0aW9uX2lkKVxyXG4gICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgXCJoZWFkZXJzXCI6IHtcclxuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6ICdtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0tLS0tV2ViS2l0Rm9ybUJvdW5kYXJ5cVRxSkl4dmtXRllxdlA1cydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYXhpb3MucG9zdChvcHRpb25zLmFjdGlvbiwgZGF0YSwgY29uZmlnKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRGaWxlX25hbWVfb3JpKHJlcy5kYXRhLmRhdGEubGlzdFswXS5fbmFtZSlcclxuICAgICAgICBvcHRpb25zLm9uU3VjY2VzcyhyZXMuZGF0YSwgb3B0aW9ucy5maWxlKVxyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICB9KVxyXG5cclxuICAgIH0sXHJcbiAgICBhc3luYyBvbkNoYW5nZShpbmZvKSB7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBpbmZvLmZpbGVcclxuICAgICAgLy8gY29uc29sZS5sb2codXNlcilcclxuICAgICAgc3dpdGNoIChpbmZvLmZpbGUuc3RhdHVzKSB7XHJcbiAgICAgICAgLy8gY2FzZSBcInVwbG9hZGluZ1wiOlxyXG4gICAgICAgIC8vICAgbmV4dFN0YXRlLnNlbGVjdGVkRmlsZUxpc3QgPSBbaW5mby5maWxlXTtcclxuICAgICAgICAvLyAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJkb25lXCI6XHJcbiAgICAgICAgICBpZiAoIWluZm8uZmlsZS51cmwgJiYgIWluZm8uZmlsZS5wcmV2aWV3KSB7XHJcbiAgICAgICAgICAgIGluZm8uZmlsZS5wcmV2aWV3ID0gYXdhaXQgZ2V0QmFzZTY0KGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFByZXZpZXdJbWFnZShpbmZvLmZpbGUudXJsIHx8IGluZm8uZmlsZS5wcmV2aWV3KVxyXG4gICAgICAgICAgc2V0UHJldmlld1Zpc2libGUodHJ1ZSlcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgLy8gZXJyb3Igb3IgcmVtb3ZlZFxyXG4gICAgICAgICAgcmVzZXRJbWFnZVByZXZpZXcoKVxyXG4gICAgICB9XHJcbiAgICAgIC8vY29uc29sZS5sb2coaW5mby5maWxlKVxyXG5cclxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIC8vICAgcHJldmlld0ltYWdlOiBmaWxlLnVybCB8fCBmaWxlLnByZXZpZXcsXHJcbiAgICAgIC8vICAgcHJldmlld1Zpc2libGU6IHRydWUsXHJcbiAgICAgIC8vIH0pO1xyXG5cclxuICAgIH0sXHJcbiAgICBvblJlbW92ZShpbmZvKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwib25SZW1vdmVcIilcclxuICAgICAgY29uc29sZS5sb2coaW5mbylcclxuICAgICAgcmVzZXRJbWFnZVByZXZpZXcoKVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc2V0SW1hZ2VQcmV2aWV3ID0gKCkgPT4ge1xyXG4gICAgc2V0UHJldmlld1Zpc2libGUoZmFsc2UpXHJcbiAgICBzZXRQcmV2aWV3SW1hZ2UobnVsbClcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldEJhc2U2NChmaWxlKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgIHJlYWRlci5vbmVycm9yID0gZXJyb3IgPT4gcmVqZWN0KGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXRcclxuICAgICAgdGl0bGU9XCJHb3Zlcm5tZW50IC0gQWRtaW4gbWFuYWdlbWVudFwiXHJcbiAgICAgIHRpdGxlUGFnZT17XHJcbiAgICAgICAgJ+C5geC4geC5ieC5hOC4guC5gOC4reC4geC4quC4suC4oyAnICsgKGRvY3VtZW50c0RhdGEgPyBkb2N1bWVudHNEYXRhLmZpbGVfc3ViamVjdCA6ICcnKVxyXG4gICAgICB9XHJcbiAgICAgIHVybD17b3JpZ2lufVxyXG4gICAgICBpbmRleFN1Yk1lbnU9e1wiMVwifVxyXG4gICAgICBpbmRleE1lbnU9e1wic3ViLTEtNVwifVxyXG4gICAgICBvcmlnaW49e29yaWdpbn1cclxuICAgICAgcHJvcHM9e3Byb3BzfVxyXG4gICAgICBfcm91dGVzPXtbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGF0aDogJy9hZG1pbi9kYXNoYm9yYWQnLFxyXG4gICAgICAgICAgYnJlYWRjcnVtYk5hbWU6ICfguKvguJnguYnguLLguKvguKXguLHguIEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGF0aDogJy9hZG1pbi9tYW5hZ2VtZW50L2RvY3VtZW50cycsXHJcbiAgICAgICAgICBicmVhZGNydW1iTmFtZTogJ+C4iOC4seC4lOC4geC4suC4o+C4hOC4peC4seC4h+C5gOC4reC4geC4quC4suC4oycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYXRoOiAnL2FkbWluL21hbmFnZW1lbnQvYWRkLWRvY3VtZW50cycsXHJcbiAgICAgICAgICBicmVhZGNydW1iTmFtZTogJ+C5geC4geC5ieC5hOC4guC5gOC4reC4geC4quC4suC4oycsXHJcbiAgICAgICAgfSxcclxuICAgICAgXX1cclxuICAgID5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7Y29udGV4dEhvbGRlcn1cclxuICAgICAgICB7Lyoge0pTT04uc3RyaW5naWZ5KG9yZ2FuaXphdGlvbkRhdGEpfSAqL31cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgey8qIHtKU09OLnN0cmluZ2lmeShvcmdhbml6YXRpb25EYXRhKX0gKi99XHJcbiAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICBuYW1lPVwiYmFzaWNcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgIG9uRmluaXNoPXtvblN1Ym1pdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkTWFyaz17dHJ1ZX1cclxuICAgICAgICAgICAgZmllbGRzPXtmaWVsZHN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICBuYW1lPVwiZmlsZV9zdWJqZWN0XCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIuC4iuC4t+C5iOC4reC5gOC4reC4geC4quC4suC4oyA6XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC5gOC4reC4geC4quC4suC4oycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC5gOC4reC4geC4quC4suC4o1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY2xlYXI6ICdib3RoJyB9fT48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICBuYW1lPVwiZmlsZV9uYW1lXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIuC5geC4meC4muC5hOC4n+C4peC5jCA6XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC5gOC4peC4t+C4reC4geC5gOC4reC4geC4quC4suC4oycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8RHJhZ2dlclxyXG4gICAgICAgICAgICAgICAgbWF4Q291bnQ9ezF9XHJcbiAgICAgICAgICAgICAgICAvLyBsaXN0VHlwZT1cInBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiLnBkZlwiXHJcbiAgICAgICAgICAgICAgICB7Li4uaW1hZ2VVcGxvYWRwcm9wc31cclxuICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAge3ByZXZpZXdWaXNpYmxlICYmIDw+IDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtZHJhZy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWxlUGRmVHdvVG9uZSAvPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICDguK3guLHguJ7guYLguKvguKXguJTguYTguJ/guKXguYzguYDguKPguLXguKLguJrguKPguYnguK3guKI8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lFxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHshcHJldmlld1Zpc2libGUgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC1kcmFnLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5ib3hPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIOC4hOC4peC4tOC4gSDguKvguKPguLfguK0g4Lil4Liy4LiB4LmE4Lif4Lil4LmM4Lih4Liy4LiX4Li14LmI4Lia4Lij4Li04LmA4Lin4LiT4LiZ4Li14LmJ4LmA4Lie4Li34LmI4Lit4Lit4Lix4Lib4LmC4Lir4Lil4LiUXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvRHJhZ2dlcj5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY2xlYXI6ICdib3RoJyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICB7ZG9jdW1lbnRzRGF0YSAmJiA8PlxyXG4gICAgICAgICAgICAgICAge2RvY3VtZW50c0RhdGEuZmlsZV91cmwgJiYgPD48ZGl2IGNsYXNzPVwiYW50LXVwbG9hZC10ZXh0LWljb25cIiBzdHlsZT17eyBmbG9hdDogJ2xlZnQnLCBtYXJnaW5SaWdodDogJzJweCcgfX0+PHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJwYXBlci1jbGlwXCIgY2xhc3M9XCJhbnRpY29uIGFudGljb24tcGFwZXItY2xpcFwiPjxzdmcgdmlld0JveD1cIjY0IDY0IDg5NiA4OTZcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtaWNvbj1cInBhcGVyLWNsaXBcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48cGF0aCBkPVwiTTc3OS4zIDE5Ni42Yy05NC4yLTk0LjItMjQ3LjYtOTQuMi0zNDEuNyAwbC0yNjEgMjYwLjhjLTEuNyAxLjctMi42IDQtMi42IDYuNHMuOSA0LjcgMi42IDYuNGwzNi45IDM2LjlhOSA5IDAgMDAxMi43IDBsMjYxLTI2MC44YzMyLjQtMzIuNCA3NS41LTUwLjIgMTIxLjMtNTAuMnM4OC45IDE3LjggMTIxLjIgNTAuMmMzMi40IDMyLjQgNTAuMiA3NS41IDUwLjIgMTIxLjIgMCA0NS44LTE3LjggODguOC01MC4yIDEyMS4ybC0yNjYgMjY1LjktNDMuMSA0My4xYy00MC4zIDQwLjMtMTA1LjggNDAuMy0xNDYuMSAwLTE5LjUtMTkuNS0zMC4yLTQ1LjQtMzAuMi03M3MxMC43LTUzLjUgMzAuMi03M2wyNjMuOS0yNjMuOGM2LjctNi42IDE1LjUtMTAuMyAyNC45LTEwLjNoLjFjOS40IDAgMTguMSAzLjcgMjQuNyAxMC4zIDYuNyA2LjcgMTAuMyAxNS41IDEwLjMgMjQuOSAwIDkuMy0zLjcgMTguMS0xMC4zIDI0LjdMMzcyLjQgNjUzYy0xLjcgMS43LTIuNiA0LTIuNiA2LjRzLjkgNC43IDIuNiA2LjRsMzYuOSAzNi45YTkgOSAwIDAwMTIuNyAwbDIxNS42LTIxNS42YzE5LjktMTkuOSAzMC44LTQ2LjMgMzAuOC03NC40cy0xMS01NC42LTMwLjgtNzQuNGMtNDEuMS00MS4xLTEwNy45LTQxLTE0OSAwTDQ2MyAzNjQgMjI0LjggNjAyLjFBMTcyLjIyIDE3Mi4yMiAwIDAwMTc0IDcyNC44YzAgNDYuMyAxOC4xIDg5LjggNTAuOCAxMjIuNSAzMy45IDMzLjggNzguMyA1MC43IDEyMi43IDUwLjcgNDQuNCAwIDg4LjgtMTYuOSAxMjIuNi01MC43bDMwOS4yLTMwOUM4MjQuOCA0OTIuNyA4NTAgNDMyIDg1MCAzNjcuNWMuMS02NC42LTI1LjEtMTI1LjMtNzAuNy0xNzAuOXpcIj48L3BhdGg+PC9zdmc+PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXsnL3VwbG9hZHMvYy0nICsgdXNlci5vcmdhbml6YXRpb25faWQgKyAnL2RvY3VtZW50cy8nICsgZG9jdW1lbnRzRGF0YS5maWxlX25hbWVfb3JpfSB0YXJnZXQ9J19ibGFuayc+e2RvY3VtZW50c0RhdGEuZmlsZV9uYW1lX29yaX08L2E+PC8+fVxyXG4gICAgICAgICAgICAgIDwvPn1cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY2xlYXI6ICdib3RoJyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgPGhyXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHA+4Lir4Lij4Li34LitIERvd25sb2FkIOC4iOC4suC4gSB1cmw8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY2xlYXI6ICdib3RoJyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJmaWxlX3VybFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCLguJfguLXguYjguK3guKLguLnguYggdXJsIDpcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiX4Li14LmI4Lit4Lii4Li54LmIIHVybCDguILguK3guIfguYDguK3guIHguKrguLLguKMnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguJfguLXguYjguK3guKLguLnguYggdXJsXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjbGVhcjogJ2JvdGgnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtIGNsYXNzTmFtZT1cImZsZXggbXQtNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHRleHQtbGVmdCB3LTEvMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3d0LWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17YWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3ZhbHVlID0+IHNldEFjdGl2ZSh2YWx1ZSA/IDEgOiAwKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXgtMiB0ZXh0LXNtXCI+4Liq4LiW4Liy4LiZ4Liw4LiB4Liy4Lij4LmD4LiK4LmJ4LiH4Liy4LiZPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGxnOnRleHQtcmlnaHQgdy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBodG1sVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25SZXNldEZvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNDMkNGRTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQzJDRkUwJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMHB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSB3LWZ1bGwgbGc6dy0xLzRcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGV4dC1jdXN0b20tYmxhY2sgXCI+4Lij4Li14LmA4LiL4LmH4LiXPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzA1OTY2OScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyMwNTk2NjknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwcHggIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHctZnVsbCBsZzp3LTEvNFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbS13aGl0ZSBcIj7guJrguLHguJnguJfguLbguIE8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuLyogZ2V0U2VydmVyU2lkZVByb3BzICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgcmVxIH0gPSBjb250ZXh0O1xyXG4gIGNvbnN0IHsgb3JpZ2luIH0gPSBhYnNvbHV0ZVVybChyZXEpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgb3JpZ2luLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=