webpackHotUpdate("static\\development\\pages\\admin\\management\\journal\\[journalId].js",{

/***/ "./pages/admin/management/journal/[journalId].js":
/*!*******************************************************!*\
  !*** ./pages/admin/management/journal/[journalId].js ***!
  \*******************************************************/
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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/layout/LayoutAdmin */ "./components/layout/LayoutAdmin.jsx");
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../middleware/utils */ "./middleware/utils.js");





var _jsxFileName = "D:\\govermentlt\\pages\\admin\\management\\journal\\[journalId].js",
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
      journalData = _useState2[0],
      setJournalData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      previewImage = _useState3[0],
      setPreviewImage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      imageLandingPage = _useState4[0],
      setImageLandingPage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      previewVisibleImage = _useState5[0],
      setPreviewVisibleImage = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      previewFile = _useState6[0],
      setPreviewFile = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      previewVisibleFile = _useState7[0],
      setPreviewVisibleFile = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      journal_ori = _useState8[0],
      setJournal_ori = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([{
    name: ['question_title'],
    value: ''
  }]),
      fields = _useState9[0],
      setFields = _useState9[1];

  var _notification$useNoti = antd__WEBPACK_IMPORTED_MODULE_6__["notification"].useNotification(),
      _notification$useNoti2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_notification$useNoti, 2),
      api = _notification$useNoti2[0],
      contextHolder = _notification$useNoti2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();
  var journalId = router.query.journalId;
  var Dragger = antd__WEBPACK_IMPORTED_MODULE_6__["Upload"].Dragger;

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      date = _useState10[0],
      setDate = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1),
      active = _useState11[0],
      setActive = _useState11[1];

  var JoditEditor = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function () {
    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! jodit-react */ "./node_modules/jodit-react/build/jodit-react.js", 7));
  }, {
    ssr: false,
    loadableGenerated: {
      webpack: function webpack() {
        return [/*require.resolve*/(/*! jodit-react */ "./node_modules/jodit-react/build/jodit-react.js")];
      },
      modules: ['jodit-react']
    }
  });

  var config = __webpack_require__(/*! ../../config */ "./pages/admin/config.js");

  var editor = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      content = _useState12[0],
      setContent = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      acept = _useState13[0],
      setAcept = _useState13[1];

  var acepted = function acepted() {
    acept ? setAcept(0) : setAcept(1);
  };

  function onSubmitHandler(_x) {
    return _onSubmitHandler.apply(this, arguments);
  }

  function _onSubmitHandler() {
    _onSubmitHandler = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(value) {
      var data, registerData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              // console.log("value")
              // console.log(value)
              data = {
                organization_id: user.organization_id,
                journal_subject: value.journal_subject,
                journal_detail: value.journal_detail,
                journal_file: value.journal_subject,
                journal_ori: journal_ori,
                journal_img: imageLandingPage,
                is_show: active,
                is_deleted: '0'
              }; // console.log(data)

              _context4.next = 3;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_13__["apiInstance"])().put('/journal/' + journalId, data);

            case 3:
              registerData = _context4.sent;

              if (registerData.data.status == 200) {
                openNotificationRegisterSuccess();
                fetchJournalData();
                setTimeout(function () {
                  //Start the timer
                  router.push('/admin/management/journal');
                }.bind(this), 2000);
              } else {
                openNotificationRegisterFail(registerData.data.message);
              }

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
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
    setUrl(validator__WEBPACK_IMPORTED_MODULE_11___default.a.trim(inputText));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    fetchJournalData();
  }, []);

  var onResetForm = function onResetForm() {
    setActive(journalData.is_use == 1 ? 1 : 0);
    setFields([{
      name: ['journal_subject'],
      value: journalData.journal_subject
    }, {
      name: ['journal_detail'],
      value: journalData.journal_detail
    }, {
      name: ['journal_file'],
      value: journalData.journal_file
    }, {
      name: ['journal_ori'],
      value: journalData.journal_ori
    }, {
      name: ['journal_img'],
      value: journalData.journal_img
    }, {
      name: ['is_show'],
      value: journalData.is_show
    }]);
    setPreviewVisible("..\\..\\..\\uploads\\c-" + user.organization_id + '\\journal\\' + documentsData.file_name_ori);
    setPreviewImage(true);
    setFile_name_ori(documentsData.file_name_ori);
    setPreviewVisible("..\\..\\..\\uploads\\c-" + user.organization_id + '\\documents\\' + documentsData.file_name_ori);
    setPreviewImage(true);
    setFile_name_ori(documentsData.file_name_ori);
  };

  var fetchJournalData = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var _journalData;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_13__["apiInstance"])().get('journal/' + journalId);

            case 2:
              _journalData = _context.sent;
              setJournalData(_journalData.data.journal);
              setPreviewImage("..\\..\\..\\uploads\\c-" + user.organization_id + '\\journal\\' + _journalData.data.journal.journal_img);
              setPreviewVisibleImage(true);
              setPreviewVisibleFile(true);
              setImageLandingPage(_journalData.data.journal.journal_img);
              setActive(_journalData.data.journal.is_show);
              setFields([{
                name: ['journal_subject'],
                value: _journalData.data.journal.journal_subject
              }, {
                name: ['journal_detail'],
                value: _journalData.data.journal.journal_detail
              }, {
                name: ['journal_file'],
                value: _journalData.data.journal.journal_file
              }, {
                name: ['journal_ori'],
                value: _journalData.data.journal.journal_ori
              }, {
                name: ['journal_img'],
                value: _journalData.data.journal.journal_img
              }, {
                name: ['is_show'],
                value: _journalData.data.journal.is_show
              }]);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchJournalData() {
      return _ref.apply(this, arguments);
    };
  }();

  var fileUploadprops = {
    name: 'file',
    multiple: false,
    listType: 'text',
    maxCount: 1,
    action: "/api/upload/journal",
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
        setJournal_ori(res.data.data.list[0]._name); // setImageLandingPage(res.data.data.list[0]._name)

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
                setPreviewFile(info.file.url || info.file.preview);
                setPreviewVisibleFile(true);
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
  var imageUploadprops = {
    name: 'file',
    multiple: false,
    listType: 'text',
    maxCount: 1,
    action: "/api/upload/journal",
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
        // setJournal_ori(res.data.data.list[0]._name)
        setImageLandingPage(res.data.data.list[0]._name);
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
                status = info.file.status; // console.log(user)

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
                setPreviewImage(info.file.url || info.file.preview);
                setPreviewVisibleImage(true);
                return _context3.abrupt("break", 12);

              case 11:
                // error or removed
                resetImagePreview();

              case 12:
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

  var resetImagePreview = function resetImagePreview() {
    setPreviewVisibleFile(false);
    setPreviewVisibleImage(false);
    setPreviewFile(null);
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

  return __jsx(_components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_12__["default"], {
    title: "Government - Admin management",
    titlePage: 'แก้ไขวารสาร ' + (journalData ? journalData.journal_subject : ''),
    url: origin,
    indexSubMenu: "1",
    indexMenu: "sub-1-7",
    origin: origin,
    props: props,
    _routes: [{
      path: '/admin/dashborad',
      breadcrumbName: 'หน้าหลัก'
    }, {
      path: '/admin/management/journal',
      breadcrumbName: 'จัดการวารสาร'
    }, {
      path: '/admin/management/add-journal',
      breadcrumbName: 'แก้ไขวารสาร'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 7
    }
  }, contextHolder, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
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
    fields: fields,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    name: "journal_subject",
    label: "\u0E0A\u0E37\u0E48\u0E2D\u0E27\u0E32\u0E23\u0E2A\u0E32\u0E23 :",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    rules: [{
      required: true,
      message: 'กรุณากรอกชื่อวารสาร'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 13
    }
  }, __jsx(antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "#",
    type: "text",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E27\u0E32\u0E23\u0E2A\u0E32\u0E23",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 15
    }
  })), __jsx("div", {
    style: {
      clear: 'both'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    name: "journal_ori",
    label: "\u0E41\u0E19\u0E1A\u0E44\u0E1F\u0E25\u0E4C :",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    rules: [{
      required: true,
      message: 'กรุณากรอกเลือกเอกสาร'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 13
    }
  }, __jsx(Dragger, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    maxCount: 1 // listType="picture"
    ,
    accept: ".pdf"
  }, fileUploadprops, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 15
    }
  }), previewVisibleFile && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, " ", __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 43
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["FilePdfTwoTone"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 19
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 19
    }
  }, "\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E1F\u0E25\u0E4C\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 41
    }
  }), "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14")), !previewVisibleFile && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 19
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 21
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 19
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14")))), __jsx("div", {
    style: {
      clear: 'both'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 13
    }
  }, journalData && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, journalData.journal_ori && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("div", {
    "class": "ant-upload-text-icon",
    style: {
      "float": 'left',
      marginRight: '2px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 47
    }
  }, __jsx("span", {
    role: "img",
    "aria-label": "paper-clip",
    "class": "anticon anticon-paper-clip",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 127
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
      lineNumber: 450,
      columnNumber: 203
    }
  }, __jsx("path", {
    d: "M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 337
    }
  })))), __jsx("a", {
    href: '/uploads/c-' + user.organization_id + '/journal/' + journalData.journal_ori,
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 19
    }
  }, journalData.journal_ori)))), __jsx("div", {
    style: {
      clear: 'both'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    name: "journal_detail",
    label: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14 :",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    rules: [{
      required: true,
      message: 'กรุณากรอกรายละเอียดวารสาร'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 13
    }
  }, __jsx(JoditEditor, {
    ref: editor,
    value: content,
    config: config.config(user),
    height: "700px",
    tabIndex: 1 // tabIndex of textarea
    ,
    onBlur: function onBlur(newContent) {
      return setContent(newContent);
    } // preferred to use only this option to update the content for performance reasons
    ,
    onChange: function onChange(newContent) {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 15
    }
  })), __jsx("div", {
    style: {
      clear: 'both'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    name: "journal_img",
    label: "\u0E20\u0E32\u0E1E\u0E1B\u0E01\u0E27\u0E32\u0E23\u0E2A\u0E32\u0E23 :",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    rules: [{
      required: true,
      message: 'กรุณากรอกเลือกภาพปกวารสาร'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
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
      lineNumber: 489,
      columnNumber: 15
    }
  }), previewVisibleImage && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Image"] // width={200}
  , {
    preview: false,
    src: previewImage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 43
    }
  })), !previewVisibleImage && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 19
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 21
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 19
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14")))), __jsx("div", {
    style: {
      clear: 'both'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    className: "flex mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "lg:inline-flex text-left w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
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
      lineNumber: 518,
      columnNumber: 19
    }
  }), __jsx("p", {
    className: "mx-2 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 19
    }
  }, "\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25")), __jsx("div", {
    className: "text-center lg:text-right w-full lg:w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
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
      lineNumber: 526,
      columnNumber: 19
    }
  }, __jsx(Text, {
    className: "text-custom-black ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
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
      lineNumber: 543,
      columnNumber: 19
    }
  }, __jsx(Text, {
    className: "text-custom-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 21
    }
  }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01")))))))));
}
/* getServerSideProps */

_s(Home, "XgM8XG+mWU8Hu8DT1WaiCnb2wLw=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_6__["notification"].useNotification, next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9tYW5hZ2VtZW50L2pvdXJuYWwvW2pvdXJuYWxJZF0uanMiXSwibmFtZXMiOlsiVGV4dCIsIlR5cG9ncmFwaHkiLCJUaXRsZSIsIk9wdGlvbiIsIlNlbGVjdCIsIkhvbWUiLCJwcm9wcyIsInVzZXIiLCJvcmlnaW4iLCJ1c2VTdGF0ZSIsInVybCIsInNldFVybCIsImpvdXJuYWxEYXRhIiwic2V0Sm91cm5hbERhdGEiLCJwcmV2aWV3SW1hZ2UiLCJzZXRQcmV2aWV3SW1hZ2UiLCJpbWFnZUxhbmRpbmdQYWdlIiwic2V0SW1hZ2VMYW5kaW5nUGFnZSIsInByZXZpZXdWaXNpYmxlSW1hZ2UiLCJzZXRQcmV2aWV3VmlzaWJsZUltYWdlIiwicHJldmlld0ZpbGUiLCJzZXRQcmV2aWV3RmlsZSIsInByZXZpZXdWaXNpYmxlRmlsZSIsInNldFByZXZpZXdWaXNpYmxlRmlsZSIsImpvdXJuYWxfb3JpIiwic2V0Sm91cm5hbF9vcmkiLCJuYW1lIiwidmFsdWUiLCJmaWVsZHMiLCJzZXRGaWVsZHMiLCJub3RpZmljYXRpb24iLCJ1c2VOb3RpZmljYXRpb24iLCJhcGkiLCJjb250ZXh0SG9sZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiam91cm5hbElkIiwicXVlcnkiLCJEcmFnZ2VyIiwiVXBsb2FkIiwiZGF0ZSIsInNldERhdGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJKb2RpdEVkaXRvciIsImR5bmFtaWMiLCJzc3IiLCJjb25maWciLCJyZXF1aXJlIiwiZWRpdG9yIiwidXNlUmVmIiwiY29udGVudCIsInNldENvbnRlbnQiLCJhY2VwdCIsInNldEFjZXB0IiwiYWNlcHRlZCIsIm9uU3VibWl0SGFuZGxlciIsImRhdGEiLCJvcmdhbml6YXRpb25faWQiLCJqb3VybmFsX3N1YmplY3QiLCJqb3VybmFsX2RldGFpbCIsImpvdXJuYWxfZmlsZSIsImpvdXJuYWxfaW1nIiwiaXNfc2hvdyIsImlzX2RlbGV0ZWQiLCJhcGlJbnN0YW5jZSIsInB1dCIsInJlZ2lzdGVyRGF0YSIsInN0YXR1cyIsIm9wZW5Ob3RpZmljYXRpb25SZWdpc3RlclN1Y2Nlc3MiLCJmZXRjaEpvdXJuYWxEYXRhIiwic2V0VGltZW91dCIsInB1c2giLCJiaW5kIiwib3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbCIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZGVzY3JpcHRpb24iLCJwbGFjZW1lbnQiLCJtZXNzZ2FlIiwiZXJyb3IiLCJ2YWxpZGF0ZVVSTCIsImlucHV0VGV4dCIsInZhbGlkYXRvciIsInRyaW0iLCJ1c2VFZmZlY3QiLCJvblJlc2V0Rm9ybSIsImlzX3VzZSIsInNldFByZXZpZXdWaXNpYmxlIiwiZG9jdW1lbnRzRGF0YSIsImZpbGVfbmFtZV9vcmkiLCJzZXRGaWxlX25hbWVfb3JpIiwiZ2V0IiwiX2pvdXJuYWxEYXRhIiwiam91cm5hbCIsImZpbGVVcGxvYWRwcm9wcyIsIm11bHRpcGxlIiwibGlzdFR5cGUiLCJtYXhDb3VudCIsImFjdGlvbiIsInByZXZpZXciLCJjdXN0b21SZXF1ZXN0Iiwib3B0aW9ucyIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZmlsZSIsInR5cGVfdXNlciIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXMiLCJsaXN0IiwiX25hbWUiLCJvblN1Y2Nlc3MiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwib25DaGFuZ2UiLCJpbmZvIiwiZ2V0QmFzZTY0Iiwib3JpZ2luRmlsZU9iaiIsInJlc2V0SW1hZ2VQcmV2aWV3Iiwib25SZW1vdmUiLCJpbWFnZVVwbG9hZHByb3BzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJwYXRoIiwiYnJlYWRjcnVtYk5hbWUiLCJyZXF1aXJlZCIsIm1pblJvd3MiLCJtYXhSb3dzIiwiY2xlYXIiLCJtYXJnaW5SaWdodCIsIm5ld0NvbnRlbnQiLCJiYWNrZ3JvdW5k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NElBYlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWVFLE1BQUMsSUFBRDtBQUFNLGFBQVMsRUFBQyxvQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FmRixDQURGLEVBa0JFLE1BQUMsMkNBQUQsQ0FDRTtBQURGO0FBRUUsU0FBSyxFQUFFO0FBQ0xMLHFCQUFlLEVBQUUsU0FEWjtBQUVMQyxpQkFBVyxFQUFFLFNBRlI7QUFHTEMsWUFBTSxFQUFFLEVBSEg7QUFJTEMsV0FBSyxFQUFFLEdBSkY7QUFLTEMsa0JBQVksRUFBRSxnQkFMVDtBQU1MQyxXQUFLLEVBQUU7QUFORixLQUZUO0FBVUUsWUFBUSxFQUFDLFFBVlg7QUFXRSxhQUFTLEVBQUMsNElBWFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWFFLE1BQUMsSUFBRDtBQUFNLGFBQVMsRUFBQyxvQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FiRixDQWxCRixDQVRGLENBREYsQ0F4SUYsQ0FGRixDQUhGLENBMUJGLENBREY7QUEyTkQ7QUFDRDs7R0FoaUJ3QjdJLEk7VUFnQk95QixpREFBWSxDQUFDQyxlLEVBQzNCSSxzRDs7O0tBakJPOUIsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWRtaW5cXG1hbmFnZW1lbnRcXGpvdXJuYWxcXFtqb3VybmFsSWRdLmpzLjcwMzAxZWNiZTlhMWNiYTIxZWFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWxlUGRmVHdvVG9uZSwgSW5ib3hPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHtcclxuICBCdXR0b24sIEZvcm0sIEltYWdlLCBub3RpZmljYXRpb24sIFJvdywgU2VsZWN0LFxyXG4gIFN3aXRjaCwgVHlwb2dyYXBoeSwgVXBsb2FkXHJcbn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tICdhbnRkL2xpYi9pbnB1dC9UZXh0QXJlYSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuLy8gaW1wb3J0IFVzZXJOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL1VzZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB2YWxpZGF0b3IgZnJvbSAndmFsaWRhdG9yJztcclxuLyogY29tcG9uZW50cyAqL1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dEFkbWluJztcclxuLyogdXRpbHMgKi9cclxuaW1wb3J0IHtcclxuICBhYnNvbHV0ZVVybCwgYXBpSW5zdGFuY2VcclxufSBmcm9tICcuLi8uLi8uLi8uLi9taWRkbGV3YXJlL3V0aWxzJztcclxuXHJcbmNvbnN0IHsgVGV4dCwgVGl0bGUgfSA9IFR5cG9ncmFwaHk7XHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcbiAgY29uc3QgeyB1c2VyLCBvcmlnaW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2pvdXJuYWxEYXRhLCBzZXRKb3VybmFsRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcHJldmlld0ltYWdlLCBzZXRQcmV2aWV3SW1hZ2VdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbaW1hZ2VMYW5kaW5nUGFnZSwgc2V0SW1hZ2VMYW5kaW5nUGFnZV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtwcmV2aWV3VmlzaWJsZUltYWdlLCBzZXRQcmV2aWV3VmlzaWJsZUltYWdlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtwcmV2aWV3RmlsZSwgc2V0UHJldmlld0ZpbGVdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbcHJldmlld1Zpc2libGVGaWxlLCBzZXRQcmV2aWV3VmlzaWJsZUZpbGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2pvdXJuYWxfb3JpLCBzZXRKb3VybmFsX29yaV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbZmllbGRzLCBzZXRGaWVsZHNdID0gdXNlU3RhdGUoW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBbJ3F1ZXN0aW9uX3RpdGxlJ10sXHJcbiAgICAgIHZhbHVlOiAnJyxcclxuICAgIH0sXHJcbiAgXSk7XHJcbiAgY29uc3QgW2FwaSwgY29udGV4dEhvbGRlcl0gPSBub3RpZmljYXRpb24udXNlTm90aWZpY2F0aW9uKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBqb3VybmFsSWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCB7IERyYWdnZXIgfSA9IFVwbG9hZDtcclxuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IEpvZGl0RWRpdG9yID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ2pvZGl0LXJlYWN0JyksIHsgc3NyOiBmYWxzZSB9KTtcclxuICBjb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi8uLi9jb25maWcnKTtcclxuICBjb25zdCBlZGl0b3IgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBbYWNlcHQsIHNldEFjZXB0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBhY2VwdGVkID0gKCkgPT4ge1xyXG4gICAgYWNlcHQgPyBzZXRBY2VwdCgwKSA6IHNldEFjZXB0KDEpO1xyXG4gIH07XHJcbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXRIYW5kbGVyKHZhbHVlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInZhbHVlXCIpXHJcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIG9yZ2FuaXphdGlvbl9pZDogdXNlci5vcmdhbml6YXRpb25faWQsXHJcbiAgICAgIGpvdXJuYWxfc3ViamVjdDogdmFsdWUuam91cm5hbF9zdWJqZWN0LFxyXG4gICAgICBqb3VybmFsX2RldGFpbDogdmFsdWUuam91cm5hbF9kZXRhaWwsXHJcbiAgICAgIGpvdXJuYWxfZmlsZTogdmFsdWUuam91cm5hbF9zdWJqZWN0LFxyXG4gICAgICBqb3VybmFsX29yaTogam91cm5hbF9vcmksXHJcbiAgICAgIGpvdXJuYWxfaW1nOiBpbWFnZUxhbmRpbmdQYWdlLFxyXG4gICAgICBpc19zaG93OiBhY3RpdmUsXHJcbiAgICAgIGlzX2RlbGV0ZWQ6ICcwJ1xyXG4gICAgfTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBjb25zdCByZWdpc3RlckRhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLnB1dChcclxuICAgICAgJy9qb3VybmFsLycgKyBqb3VybmFsSWQsXHJcbiAgICAgIGRhdGEsXHJcbiAgICApO1xyXG4gICAgaWYgKHJlZ2lzdGVyRGF0YS5kYXRhLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyU3VjY2VzcygpO1xyXG4gICAgICBmZXRjaEpvdXJuYWxEYXRhKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgLy9TdGFydCB0aGUgdGltZXJcclxuICAgICAgICAgIHJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC9qb3VybmFsJyk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICAgIDIwMDAsXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJGYWlsKHJlZ2lzdGVyRGF0YS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyU3VjY2VzcyA9ICgpID0+IHtcclxuICAgIGFwaS5zdWNjZXNzKHtcclxuICAgICAgbWVzc2FnZTogYOC4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iGAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAn4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIJyxcclxuICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbCA9IG1lc3NnYWUgPT4ge1xyXG4gICAgYXBpLmVycm9yKHtcclxuICAgICAgbWVzc2FnZTogYOC4nuC4muC4m+C4seC4jeC4q+C4suC4o+C4sOC4q+C4p+C5iOC4suC4h+C4geC4suC4o+C4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4pWAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBtZXNzZ2FlLFxyXG4gICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IHZhbGlkYXRlVVJMID0gaW5wdXRUZXh0ID0+IHtcclxuICAgIHNldFVybCh2YWxpZGF0b3IudHJpbShpbnB1dFRleHQpKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hKb3VybmFsRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25SZXNldEZvcm0gPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmUoam91cm5hbERhdGEuaXNfdXNlID09IDEgPyAxIDogMCk7XHJcbiAgICBzZXRGaWVsZHMoW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydqb3VybmFsX3N1YmplY3QnXSxcclxuICAgICAgICB2YWx1ZTogam91cm5hbERhdGEuam91cm5hbF9zdWJqZWN0LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydqb3VybmFsX2RldGFpbCddLFxyXG4gICAgICAgIHZhbHVlOiBqb3VybmFsRGF0YS5qb3VybmFsX2RldGFpbCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnam91cm5hbF9maWxlJ10sXHJcbiAgICAgICAgdmFsdWU6IGpvdXJuYWxEYXRhLmpvdXJuYWxfZmlsZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnam91cm5hbF9vcmknXSxcclxuICAgICAgICB2YWx1ZTogam91cm5hbERhdGEuam91cm5hbF9vcmksXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2pvdXJuYWxfaW1nJ10sXHJcbiAgICAgICAgdmFsdWU6IGpvdXJuYWxEYXRhLmpvdXJuYWxfaW1nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydpc19zaG93J10sXHJcbiAgICAgICAgdmFsdWU6IGpvdXJuYWxEYXRhLmlzX3Nob3csXHJcbiAgICAgIH0sXHJcbiAgICBdKTtcclxuXHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZSgnLi5cXFxcLi5cXFxcLi5cXFxcdXBsb2Fkc1xcXFxjLScgKyB1c2VyLm9yZ2FuaXphdGlvbl9pZCArICdcXFxcam91cm5hbFxcXFwnICsgZG9jdW1lbnRzRGF0YS5maWxlX25hbWVfb3JpKTtcclxuICAgIHNldFByZXZpZXdJbWFnZSh0cnVlKTtcclxuICAgIHNldEZpbGVfbmFtZV9vcmkoZG9jdW1lbnRzRGF0YS5maWxlX25hbWVfb3JpKTtcclxuXHJcblxyXG4gICAgc2V0UHJldmlld1Zpc2libGUoJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICsgdXNlci5vcmdhbml6YXRpb25faWQgKyAnXFxcXGRvY3VtZW50c1xcXFwnICsgZG9jdW1lbnRzRGF0YS5maWxlX25hbWVfb3JpKTtcclxuICAgIHNldFByZXZpZXdJbWFnZSh0cnVlKTtcclxuICAgIHNldEZpbGVfbmFtZV9vcmkoZG9jdW1lbnRzRGF0YS5maWxlX25hbWVfb3JpKTtcclxuICB9O1xyXG4gIGNvbnN0IGZldGNoSm91cm5hbERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBfam91cm5hbERhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldCgnam91cm5hbC8nICsgam91cm5hbElkKTtcclxuICAgIHNldEpvdXJuYWxEYXRhKF9qb3VybmFsRGF0YS5kYXRhLmpvdXJuYWwpXHJcbiAgICBzZXRQcmV2aWV3SW1hZ2UoXHJcbiAgICAgICcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArXHJcbiAgICAgIHVzZXIub3JnYW5pemF0aW9uX2lkICtcclxuICAgICAgJ1xcXFxqb3VybmFsXFxcXCcgK1xyXG4gICAgICBfam91cm5hbERhdGEuZGF0YS5qb3VybmFsLmpvdXJuYWxfaW1nLFxyXG4gICAgKTtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlSW1hZ2UodHJ1ZSk7XHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZUZpbGUodHJ1ZSk7XHJcbiAgICBzZXRJbWFnZUxhbmRpbmdQYWdlKF9qb3VybmFsRGF0YS5kYXRhLmpvdXJuYWwuam91cm5hbF9pbWcpO1xyXG4gICAgc2V0QWN0aXZlKF9qb3VybmFsRGF0YS5kYXRhLmpvdXJuYWwuaXNfc2hvdyk7XHJcbiAgICBzZXRGaWVsZHMoW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydqb3VybmFsX3N1YmplY3QnXSxcclxuICAgICAgICB2YWx1ZTogX2pvdXJuYWxEYXRhLmRhdGEuam91cm5hbC5qb3VybmFsX3N1YmplY3QsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2pvdXJuYWxfZGV0YWlsJ10sXHJcbiAgICAgICAgdmFsdWU6IF9qb3VybmFsRGF0YS5kYXRhLmpvdXJuYWwuam91cm5hbF9kZXRhaWwsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2pvdXJuYWxfZmlsZSddLFxyXG4gICAgICAgIHZhbHVlOiBfam91cm5hbERhdGEuZGF0YS5qb3VybmFsLmpvdXJuYWxfZmlsZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnam91cm5hbF9vcmknXSxcclxuICAgICAgICB2YWx1ZTogX2pvdXJuYWxEYXRhLmRhdGEuam91cm5hbC5qb3VybmFsX29yaSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnam91cm5hbF9pbWcnXSxcclxuICAgICAgICB2YWx1ZTogX2pvdXJuYWxEYXRhLmRhdGEuam91cm5hbC5qb3VybmFsX2ltZyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnaXNfc2hvdyddLFxyXG4gICAgICAgIHZhbHVlOiBfam91cm5hbERhdGEuZGF0YS5qb3VybmFsLmlzX3Nob3csXHJcbiAgICAgIH0sXHJcbiAgICBdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmaWxlVXBsb2FkcHJvcHMgPSB7XHJcbiAgICBuYW1lOiAnZmlsZScsXHJcbiAgICBtdWx0aXBsZTogZmFsc2UsXHJcbiAgICBsaXN0VHlwZTogJ3RleHQnLFxyXG4gICAgbWF4Q291bnQ6IDEsXHJcbiAgICBhY3Rpb246IFwiL2FwaS91cGxvYWQvam91cm5hbFwiLFxyXG4gICAgcHJldmlldzogZmFsc2UsXHJcbiAgICAvLyB1aWQ6IHVzZXIudHlwZV91c2VyID09IDEgPyBcImFkbWluXCIgOiB1c2VyLm9yZ2FuaXphdGlvbl9pZCxcclxuICAgIC8vIGJlZm9yZVVwbG9hZChmaWxlKSB7XHJcbiAgICAvLyBcdGNvbnN0IGlzTHQxME0gPSBmaWxlLnNpemUgLyAxMDI0IC8gMTAyNCA8IDEwXHJcbiAgICAvLyBcdGlmICghaXNMdDEwTSkge1xyXG4gICAgLy8gXHRcdG5vdGlmaWNhdGlvbi5vcGVuKHtcclxuICAgIC8vIFx0XHRcdG1lc3NhZ2U6ICdVcGxvYWQgZXJyb3IhJyxcclxuICAgIC8vIFx0XHRcdGRlc2NyaXB0aW9uOiA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCI+SW1hZ2UgbXVzdCBzbWFsbGVyIHRoYW4gMTBNQiE8L1RleHQ+LFxyXG4gICAgLy8gXHRcdH0pXHJcbiAgICAvLyBcdH1cclxuICAgIC8vIFx0cmV0dXJuIGlzTHQxME1cclxuICAgIC8vIH0sXHJcbiAgICBjdXN0b21SZXF1ZXN0OiAob3B0aW9ucykgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdpZCcsIHVzZXIudHlwZV91c2VyID09IDEgPyBcImFkbWluXCIgOiB1c2VyLm9yZ2FuaXphdGlvbl9pZClcclxuICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgIFwiaGVhZGVyc1wiOiB7XHJcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9LS0tLVdlYktpdEZvcm1Cb3VuZGFyeXFUcUpJeHZrV0ZZcXZQNXMnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGF4aW9zLnBvc3Qob3B0aW9ucy5hY3Rpb24sIGRhdGEsIGNvbmZpZykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0Sm91cm5hbF9vcmkocmVzLmRhdGEuZGF0YS5saXN0WzBdLl9uYW1lKVxyXG4gICAgICAgIC8vIHNldEltYWdlTGFuZGluZ1BhZ2UocmVzLmRhdGEuZGF0YS5saXN0WzBdLl9uYW1lKVxyXG4gICAgICAgIG9wdGlvbnMub25TdWNjZXNzKHJlcy5kYXRhLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfSxcclxuICAgIGFzeW5jIG9uQ2hhbmdlKGluZm8pIHtcclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGluZm8uZmlsZVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyh1c2VyKVxyXG4gICAgICBzd2l0Y2ggKGluZm8uZmlsZS5zdGF0dXMpIHtcclxuICAgICAgICAvLyBjYXNlIFwidXBsb2FkaW5nXCI6XHJcbiAgICAgICAgLy8gICBuZXh0U3RhdGUuc2VsZWN0ZWRGaWxlTGlzdCA9IFtpbmZvLmZpbGVdO1xyXG4gICAgICAgIC8vICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImRvbmVcIjpcclxuICAgICAgICAgIGlmICghaW5mby5maWxlLnVybCAmJiAhaW5mby5maWxlLnByZXZpZXcpIHtcclxuICAgICAgICAgICAgaW5mby5maWxlLnByZXZpZXcgPSBhd2FpdCBnZXRCYXNlNjQoaW5mby5maWxlLm9yaWdpbkZpbGVPYmopO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0UHJldmlld0ZpbGUoaW5mby5maWxlLnVybCB8fCBpbmZvLmZpbGUucHJldmlldylcclxuICAgICAgICAgIHNldFByZXZpZXdWaXNpYmxlRmlsZSh0cnVlKVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAvLyBlcnJvciBvciByZW1vdmVkXHJcbiAgICAgICAgICByZXNldEltYWdlUHJldmlldygpXHJcbiAgICAgIH1cclxuICAgICAgLy9jb25zb2xlLmxvZyhpbmZvLmZpbGUpXHJcblxyXG4gICAgICAvLyB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgLy8gICBwcmV2aWV3SW1hZ2U6IGZpbGUudXJsIHx8IGZpbGUucHJldmlldyxcclxuICAgICAgLy8gICBwcmV2aWV3VmlzaWJsZTogdHJ1ZSxcclxuICAgICAgLy8gfSk7XHJcblxyXG4gICAgfSxcclxuICAgIG9uUmVtb3ZlKGluZm8pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJvblJlbW92ZVwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhpbmZvKVxyXG4gICAgICByZXNldEltYWdlUHJldmlldygpXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaW1hZ2VVcGxvYWRwcm9wcyA9IHtcclxuICAgIG5hbWU6ICdmaWxlJyxcclxuICAgIG11bHRpcGxlOiBmYWxzZSxcclxuICAgIGxpc3RUeXBlOiAndGV4dCcsXHJcbiAgICBtYXhDb3VudDogMSxcclxuICAgIGFjdGlvbjogXCIvYXBpL3VwbG9hZC9qb3VybmFsXCIsXHJcbiAgICBwcmV2aWV3OiBmYWxzZSxcclxuICAgIC8vIHVpZDogdXNlci50eXBlX3VzZXIgPT0gMSA/IFwiYWRtaW5cIiA6IHVzZXIub3JnYW5pemF0aW9uX2lkLFxyXG4gICAgLy8gYmVmb3JlVXBsb2FkKGZpbGUpIHtcclxuICAgIC8vIFx0Y29uc3QgaXNMdDEwTSA9IGZpbGUuc2l6ZSAvIDEwMjQgLyAxMDI0IDwgMTBcclxuICAgIC8vIFx0aWYgKCFpc0x0MTBNKSB7XHJcbiAgICAvLyBcdFx0bm90aWZpY2F0aW9uLm9wZW4oe1xyXG4gICAgLy8gXHRcdFx0bWVzc2FnZTogJ1VwbG9hZCBlcnJvciEnLFxyXG4gICAgLy8gXHRcdFx0ZGVzY3JpcHRpb246IDxUZXh0IGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIj5JbWFnZSBtdXN0IHNtYWxsZXIgdGhhbiAxME1CITwvVGV4dD4sXHJcbiAgICAvLyBcdFx0fSlcclxuICAgIC8vIFx0fVxyXG4gICAgLy8gXHRyZXR1cm4gaXNMdDEwTVxyXG4gICAgLy8gfSxcclxuICAgIGN1c3RvbVJlcXVlc3Q6IChvcHRpb25zKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgZGF0YS5hcHBlbmQoJ2lkJywgdXNlci50eXBlX3VzZXIgPT0gMSA/IFwiYWRtaW5cIiA6IHVzZXIub3JnYW5pemF0aW9uX2lkKVxyXG4gICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgXCJoZWFkZXJzXCI6IHtcclxuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6ICdtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0tLS0tV2ViS2l0Rm9ybUJvdW5kYXJ5cVRxSkl4dmtXRllxdlA1cydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYXhpb3MucG9zdChvcHRpb25zLmFjdGlvbiwgZGF0YSwgY29uZmlnKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAvLyBzZXRKb3VybmFsX29yaShyZXMuZGF0YS5kYXRhLmxpc3RbMF0uX25hbWUpXHJcbiAgICAgICAgc2V0SW1hZ2VMYW5kaW5nUGFnZShyZXMuZGF0YS5kYXRhLmxpc3RbMF0uX25hbWUpXHJcbiAgICAgICAgb3B0aW9ucy5vblN1Y2Nlc3MocmVzLmRhdGEsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgfSlcclxuXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgb25DaGFuZ2UoaW5mbykge1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gaW5mby5maWxlXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXIpXHJcbiAgICAgIHN3aXRjaCAoaW5mby5maWxlLnN0YXR1cykge1xyXG4gICAgICAgIC8vIGNhc2UgXCJ1cGxvYWRpbmdcIjpcclxuICAgICAgICAvLyAgIG5leHRTdGF0ZS5zZWxlY3RlZEZpbGVMaXN0ID0gW2luZm8uZmlsZV07XHJcbiAgICAgICAgLy8gICBicmVhaztcclxuICAgICAgICBjYXNlIFwiZG9uZVwiOlxyXG4gICAgICAgICAgaWYgKCFpbmZvLmZpbGUudXJsICYmICFpbmZvLmZpbGUucHJldmlldykge1xyXG4gICAgICAgICAgICBpbmZvLmZpbGUucHJldmlldyA9IGF3YWl0IGdldEJhc2U2NChpbmZvLmZpbGUub3JpZ2luRmlsZU9iaik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRQcmV2aWV3SW1hZ2UoaW5mby5maWxlLnVybCB8fCBpbmZvLmZpbGUucHJldmlldylcclxuICAgICAgICAgIHNldFByZXZpZXdWaXNpYmxlSW1hZ2UodHJ1ZSlcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgLy8gZXJyb3Igb3IgcmVtb3ZlZFxyXG4gICAgICAgICAgcmVzZXRJbWFnZVByZXZpZXcoKVxyXG4gICAgICB9XHJcbiAgICAgIC8vY29uc29sZS5sb2coaW5mby5maWxlKVxyXG5cclxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIC8vICAgcHJldmlld0ltYWdlOiBmaWxlLnVybCB8fCBmaWxlLnByZXZpZXcsXHJcbiAgICAgIC8vICAgcHJldmlld1Zpc2libGU6IHRydWUsXHJcbiAgICAgIC8vIH0pO1xyXG5cclxuICAgIH0sXHJcbiAgICBvblJlbW92ZShpbmZvKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwib25SZW1vdmVcIilcclxuICAgICAgY29uc29sZS5sb2coaW5mbylcclxuICAgICAgcmVzZXRJbWFnZVByZXZpZXcoKVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc2V0SW1hZ2VQcmV2aWV3ID0gKCkgPT4ge1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVGaWxlKGZhbHNlKVxyXG4gICAgc2V0UHJldmlld1Zpc2libGVJbWFnZShmYWxzZSlcclxuICAgIHNldFByZXZpZXdGaWxlKG51bGwpXHJcbiAgICBzZXRQcmV2aWV3SW1hZ2UobnVsbClcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBnZXRCYXNlNjQoZmlsZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICByZWFkZXIub25lcnJvciA9IGVycm9yID0+IHJlamVjdChlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0XHJcbiAgICAgIHRpdGxlPVwiR292ZXJubWVudCAtIEFkbWluIG1hbmFnZW1lbnRcIlxyXG4gICAgICB0aXRsZVBhZ2U9e1xyXG4gICAgICAgICfguYHguIHguYnguYTguILguKfguLLguKPguKrguLLguKMgJyArXHJcbiAgICAgICAgKGpvdXJuYWxEYXRhID8gam91cm5hbERhdGEuam91cm5hbF9zdWJqZWN0IDogJycpXHJcbiAgICAgIH1cclxuICAgICAgdXJsPXtvcmlnaW59XHJcbiAgICAgIGluZGV4U3ViTWVudT17XCIxXCJ9XHJcbiAgICAgIGluZGV4TWVudT17XCJzdWItMS03XCJ9XHJcbiAgICAgIG9yaWdpbj17b3JpZ2lufVxyXG4gICAgICBwcm9wcz17cHJvcHN9XHJcbiAgICAgIF9yb3V0ZXM9e1tcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYXRoOiAnL2FkbWluL2Rhc2hib3JhZCcsXHJcbiAgICAgICAgICBicmVhZGNydW1iTmFtZTogJ+C4q+C4meC5ieC4suC4q+C4peC4seC4gScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYXRoOiAnL2FkbWluL21hbmFnZW1lbnQvam91cm5hbCcsXHJcbiAgICAgICAgICBicmVhZGNydW1iTmFtZTogJ+C4iOC4seC4lOC4geC4suC4o+C4p+C4suC4o+C4quC4suC4oycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYXRoOiAnL2FkbWluL21hbmFnZW1lbnQvYWRkLWpvdXJuYWwnLFxyXG4gICAgICAgICAgYnJlYWRjcnVtYk5hbWU6ICfguYHguIHguYnguYTguILguKfguLLguKPguKrguLLguKMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF19XHJcbiAgICA+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2NvbnRleHRIb2xkZXJ9XHJcbiAgICAgICAgey8qIHtKU09OLnN0cmluZ2lmeShvcmdhbml6YXRpb25EYXRhKX0gKi99XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkob3JnYW5pemF0aW9uRGF0YSl9ICovfVxyXG4gICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgbmFtZT1cImJhc2ljXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgICAgLy8gaW5pdGlhbFZhbHVlcz17eyBlbWFpbDogZW1haWwsIGludml0YXRpb25Db2RlOiBjb2RlIH19XHJcbiAgICAgICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgb25GaW5pc2g9e29uU3VibWl0SGFuZGxlcn1cclxuICAgICAgICAgICAgLy8gb25GaW5pc2hGYWlsZWQ9e29uRmluaXNoRmFpbGVkfVxyXG4gICAgICAgICAgICByZXF1aXJlZE1hcms9e3RydWV9XHJcbiAgICAgICAgICAgIGZpZWxkcz17ZmllbGRzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgbmFtZT1cImpvdXJuYWxfc3ViamVjdFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCLguIrguLfguYjguK3guKfguLLguKPguKrguLLguKMgOlwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guKfguLLguKPguKrguLLguKMnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguIrguLfguYjguK3guKfguLLguKPguKrguLLguKNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNsZWFyOiAnYm90aCcgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICBuYW1lPVwiam91cm5hbF9vcmlcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwi4LmB4LiZ4Lia4LmE4Lif4Lil4LmMIDpcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LmA4Lil4Li34Lit4LiB4LmA4Lit4LiB4Liq4Liy4LijJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxEcmFnZ2VyXHJcbiAgICAgICAgICAgICAgICBtYXhDb3VudD17MX1cclxuICAgICAgICAgICAgICAgIC8vIGxpc3RUeXBlPVwicGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICBhY2NlcHQ9XCIucGRmXCJcclxuICAgICAgICAgICAgICAgIHsuLi5maWxlVXBsb2FkcHJvcHN9XHJcbiAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgIHtwcmV2aWV3VmlzaWJsZUZpbGUgJiYgPD4gPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC1kcmFnLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPEZpbGVQZGZUd29Ub25lIC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIOC4reC4seC4nuC5guC4q+C4peC4lOC5hOC4n+C4peC5jOC5gOC4o+C4teC4ouC4muC4o+C5ieC4reC4ojxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIOC4hOC4peC4tOC4gSDguKvguKPguLfguK0g4Lil4Liy4LiB4LmE4Lif4Lil4LmM4Lih4Liy4LiX4Li14LmI4Lia4Lij4Li04LmA4Lin4LiT4LiZ4Li14LmJ4LmA4Lie4Li34LmI4Lit4Lit4Lix4Lib4LmC4Lir4Lil4LiUXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeyFwcmV2aWV3VmlzaWJsZUZpbGUgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC1kcmFnLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5ib3hPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIOC4hOC4peC4tOC4gSDguKvguKPguLfguK0g4Lil4Liy4LiB4LmE4Lif4Lil4LmM4Lih4Liy4LiX4Li14LmI4Lia4Lij4Li04LmA4Lin4LiT4LiZ4Li14LmJ4LmA4Lie4Li34LmI4Lit4Lit4Lix4Lib4LmC4Lir4Lil4LiUXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvRHJhZ2dlcj5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY2xlYXI6ICdib3RoJyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICB7am91cm5hbERhdGEgJiYgPD5cclxuICAgICAgICAgICAgICAgIHtqb3VybmFsRGF0YS5qb3VybmFsX29yaSAmJiA8PjxkaXYgY2xhc3M9XCJhbnQtdXBsb2FkLXRleHQtaWNvblwiIHN0eWxlPXt7IGZsb2F0OiAnbGVmdCcsIG1hcmdpblJpZ2h0OiAnMnB4JyB9fT48c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cInBhcGVyLWNsaXBcIiBjbGFzcz1cImFudGljb24gYW50aWNvbi1wYXBlci1jbGlwXCI+PHN2ZyB2aWV3Qm94PVwiNjQgNjQgODk2IDg5NlwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1pY29uPVwicGFwZXItY2xpcFwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxwYXRoIGQ9XCJNNzc5LjMgMTk2LjZjLTk0LjItOTQuMi0yNDcuNi05NC4yLTM0MS43IDBsLTI2MSAyNjAuOGMtMS43IDEuNy0yLjYgNC0yLjYgNi40cy45IDQuNyAyLjYgNi40bDM2LjkgMzYuOWE5IDkgMCAwMDEyLjcgMGwyNjEtMjYwLjhjMzIuNC0zMi40IDc1LjUtNTAuMiAxMjEuMy01MC4yczg4LjkgMTcuOCAxMjEuMiA1MC4yYzMyLjQgMzIuNCA1MC4yIDc1LjUgNTAuMiAxMjEuMiAwIDQ1LjgtMTcuOCA4OC44LTUwLjIgMTIxLjJsLTI2NiAyNjUuOS00My4xIDQzLjFjLTQwLjMgNDAuMy0xMDUuOCA0MC4zLTE0Ni4xIDAtMTkuNS0xOS41LTMwLjItNDUuNC0zMC4yLTczczEwLjctNTMuNSAzMC4yLTczbDI2My45LTI2My44YzYuNy02LjYgMTUuNS0xMC4zIDI0LjktMTAuM2guMWM5LjQgMCAxOC4xIDMuNyAyNC43IDEwLjMgNi43IDYuNyAxMC4zIDE1LjUgMTAuMyAyNC45IDAgOS4zLTMuNyAxOC4xLTEwLjMgMjQuN0wzNzIuNCA2NTNjLTEuNyAxLjctMi42IDQtMi42IDYuNHMuOSA0LjcgMi42IDYuNGwzNi45IDM2LjlhOSA5IDAgMDAxMi43IDBsMjE1LjYtMjE1LjZjMTkuOS0xOS45IDMwLjgtNDYuMyAzMC44LTc0LjRzLTExLTU0LjYtMzAuOC03NC40Yy00MS4xLTQxLjEtMTA3LjktNDEtMTQ5IDBMNDYzIDM2NCAyMjQuOCA2MDIuMUExNzIuMjIgMTcyLjIyIDAgMDAxNzQgNzI0LjhjMCA0Ni4zIDE4LjEgODkuOCA1MC44IDEyMi41IDMzLjkgMzMuOCA3OC4zIDUwLjcgMTIyLjcgNTAuNyA0NC40IDAgODguOC0xNi45IDEyMi42LTUwLjdsMzA5LjItMzA5QzgyNC44IDQ5Mi43IDg1MCA0MzIgODUwIDM2Ny41Yy4xLTY0LjYtMjUuMS0xMjUuMy03MC43LTE3MC45elwiPjwvcGF0aD48L3N2Zz48L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eycvdXBsb2Fkcy9jLScgKyB1c2VyLm9yZ2FuaXphdGlvbl9pZCArICcvam91cm5hbC8nICsgam91cm5hbERhdGEuam91cm5hbF9vcml9IHRhcmdldD0nX2JsYW5rJz57am91cm5hbERhdGEuam91cm5hbF9vcml9PC9hPjwvPn1cclxuICAgICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNsZWFyOiAnYm90aCcgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICBuYW1lPVwiam91cm5hbF9kZXRhaWxcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwi4Lij4Liy4Lii4Lil4Liw4LmA4Lit4Li14Lii4LiUIDpcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4Lij4Liy4Lii4Lil4Liw4LmA4Lit4Li14Lii4LiU4Lin4Liy4Lij4Liq4Liy4LijJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxKb2RpdEVkaXRvclxyXG4gICAgICAgICAgICAgICAgcmVmPXtlZGl0b3J9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29udGVudH1cclxuICAgICAgICAgICAgICAgIGNvbmZpZz17Y29uZmlnLmNvbmZpZyh1c2VyKX1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17XCI3MDBweFwifVxyXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9IC8vIHRhYkluZGV4IG9mIHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICBvbkJsdXI9e25ld0NvbnRlbnQgPT4gc2V0Q29udGVudChuZXdDb250ZW50KX0gLy8gcHJlZmVycmVkIHRvIHVzZSBvbmx5IHRoaXMgb3B0aW9uIHRvIHVwZGF0ZSB0aGUgY29udGVudCBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e25ld0NvbnRlbnQgPT4geyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNsZWFyOiAnYm90aCcgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICBuYW1lPVwiam91cm5hbF9pbWdcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwi4Lig4Liy4Lie4Lib4LiB4Lin4Liy4Lij4Liq4Liy4LijIDpcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LmA4Lil4Li34Lit4LiB4Lig4Liy4Lie4Lib4LiB4Lin4Liy4Lij4Liq4Liy4LijJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHsvKiA8RHJhZ2dlciB7Li4uZHJvcGltZ30+ICovfVxyXG4gICAgICAgICAgICAgIDxEcmFnZ2VyXHJcbiAgICAgICAgICAgICAgICBtYXhDb3VudD17MX1cclxuICAgICAgICAgICAgICAgIC8vIGxpc3RUeXBlPVwicGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLCAuanBlZywgLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB7Li4uaW1hZ2VVcGxvYWRwcm9wc31cclxuICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAge3ByZXZpZXdWaXNpYmxlSW1hZ2UgJiYgPD48SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgLy8gd2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgcHJldmlldz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIHNyYz17cHJldmlld0ltYWdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeyFwcmV2aWV3VmlzaWJsZUltYWdlICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtZHJhZy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluYm94T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lFxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L0RyYWdnZXI+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNsZWFyOiAnYm90aCcgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW0gY2xhc3NOYW1lPVwiZmxleCBtdC02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdGV4dC1sZWZ0IHctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzd3QtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXthY3RpdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dmFsdWUgPT4gc2V0QWN0aXZlKHZhbHVlID8gMSA6IDApfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteC0yIHRleHQtc21cIj7guIHguLLguKPguYHguKrguJTguIfguJzguKU8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbGc6dGV4dC1yaWdodCB3LWZ1bGwgbGc6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlc2V0Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0MyQ0ZFMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDMkNGRTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwcHggIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHctZnVsbCBsZzp3LTEvNFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbS1ibGFjayBcIj7guKPguLXguYDguIvguYfguJc8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDU5NjY5JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzA1OTY2OScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMCxcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzBweCAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUgIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdy1mdWxsIGxnOnctMS80XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRleHQtY3VzdG9tLXdoaXRlIFwiPuC4muC4seC4meC4l+C4tuC4gTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQgPlxyXG4gICk7XHJcbn1cclxuLyogZ2V0U2VydmVyU2lkZVByb3BzICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgcmVxIH0gPSBjb250ZXh0O1xyXG4gIGNvbnN0IHsgb3JpZ2luIH0gPSBhYnNvbHV0ZVVybChyZXEpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgb3JpZ2luLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=