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
    setPreviewVisible("..\\..\\..\\uploads\\c-" + user.organization_id + '\\journal\\' + documentsData.journal_img);
    setPreviewImage(true);
    setFile_name_ori(documentsData.journal_img);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9tYW5hZ2VtZW50L2pvdXJuYWwvW2pvdXJuYWxJZF0uanMiXSwibmFtZXMiOlsiVGV4dCIsIlR5cG9ncmFwaHkiLCJUaXRsZSIsIk9wdGlvbiIsIlNlbGVjdCIsIkhvbWUiLCJwcm9wcyIsInVzZXIiLCJvcmlnaW4iLCJ1c2VTdGF0ZSIsInVybCIsInNldFVybCIsImpvdXJuYWxEYXRhIiwic2V0Sm91cm5hbERhdGEiLCJwcmV2aWV3SW1hZ2UiLCJzZXRQcmV2aWV3SW1hZ2UiLCJpbWFnZUxhbmRpbmdQYWdlIiwic2V0SW1hZ2VMYW5kaW5nUGFnZSIsInByZXZpZXdWaXNpYmxlSW1hZ2UiLCJzZXRQcmV2aWV3VmlzaWJsZUltYWdlIiwicHJldmlld0ZpbGUiLCJzZXRQcmV2aWV3RmlsZSIsInByZXZpZXdWaXNpYmxlRmlsZSIsInNldFByZXZpZXdWaXNpYmxlRmlsZSIsImpvdXJuYWxfb3JpIiwic2V0Sm91cm5hbF9vcmkiLCJuYW1lIiwidmFsdWUiLCJmaWVsZHMiLCJzZXRGaWVsZHMiLCJub3RpZmljYXRpb24iLCJ1c2VOb3RpZmljYXRpb24iLCJhcGkiLCJjb250ZXh0SG9sZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiam91cm5hbElkIiwicXVlcnkiLCJEcmFnZ2VyIiwiVXBsb2FkIiwiZGF0ZSIsInNldERhdGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJKb2RpdEVkaXRvciIsImR5bmFtaWMiLCJzc3IiLCJjb25maWciLCJyZXF1aXJlIiwiZWRpdG9yIiwidXNlUmVmIiwiY29udGVudCIsInNldENvbnRlbnQiLCJhY2VwdCIsInNldEFjZXB0IiwiYWNlcHRlZCIsIm9uU3VibWl0SGFuZGxlciIsImRhdGEiLCJvcmdhbml6YXRpb25faWQiLCJqb3VybmFsX3N1YmplY3QiLCJqb3VybmFsX2RldGFpbCIsImpvdXJuYWxfZmlsZSIsImpvdXJuYWxfaW1nIiwiaXNfc2hvdyIsImlzX2RlbGV0ZWQiLCJhcGlJbnN0YW5jZSIsInB1dCIsInJlZ2lzdGVyRGF0YSIsInN0YXR1cyIsIm9wZW5Ob3RpZmljYXRpb25SZWdpc3RlclN1Y2Nlc3MiLCJmZXRjaEpvdXJuYWxEYXRhIiwic2V0VGltZW91dCIsInB1c2giLCJiaW5kIiwib3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbCIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZGVzY3JpcHRpb24iLCJwbGFjZW1lbnQiLCJtZXNzZ2FlIiwiZXJyb3IiLCJ2YWxpZGF0ZVVSTCIsImlucHV0VGV4dCIsInZhbGlkYXRvciIsInRyaW0iLCJ1c2VFZmZlY3QiLCJvblJlc2V0Rm9ybSIsImlzX3VzZSIsInNldFByZXZpZXdWaXNpYmxlIiwiZG9jdW1lbnRzRGF0YSIsImZpbGVfbmFtZV9vcmkiLCJzZXRGaWxlX25hbWVfb3JpIiwiZ2V0IiwiX2pvdXJuYWxEYXRhIiwiam91cm5hbCIsImZpbGVVcGxvYWRwcm9wcyIsIm11bHRpcGxlIiwibGlzdFR5cGUiLCJtYXhDb3VudCIsImFjdGlvbiIsInByZXZpZXciLCJjdXN0b21SZXF1ZXN0Iiwib3B0aW9ucyIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZmlsZSIsInR5cGVfdXNlciIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXMiLCJsaXN0IiwiX25hbWUiLCJvblN1Y2Nlc3MiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwib25DaGFuZ2UiLCJpbmZvIiwiZ2V0QmFzZTY0Iiwib3JpZ2luRmlsZU9iaiIsInJlc2V0SW1hZ2VQcmV2aWV3Iiwib25SZW1vdmUiLCJpbWFnZVVwbG9hZHByb3BzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJwYXRoIiwiYnJlYWRjcnVtYk5hbWUiLCJyZXF1aXJlZCIsIm1pblJvd3MiLCJtYXhSb3dzIiwiY2xlYXIiLCJtYXJnaW5SaWdodCIsIm5ld0NvbnRlbnQiLCJiYWNrZ3JvdW5k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LDRJQWJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FlRSxNQUFDLElBQUQ7QUFBTSxhQUFTLEVBQUMsb0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBZkYsQ0FERixFQWtCRSxNQUFDLDJDQUFELENBQ0U7QUFERjtBQUVFLFNBQUssRUFBRTtBQUNMTCxxQkFBZSxFQUFFLFNBRFo7QUFFTEMsaUJBQVcsRUFBRSxTQUZSO0FBR0xDLFlBQU0sRUFBRSxFQUhIO0FBSUxDLFdBQUssRUFBRSxHQUpGO0FBS0xDLGtCQUFZLEVBQUUsZ0JBTFQ7QUFNTEMsV0FBSyxFQUFFO0FBTkYsS0FGVDtBQVVFLFlBQVEsRUFBQyxRQVZYO0FBV0UsYUFBUyxFQUFDLDRJQVhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FhRSxNQUFDLElBQUQ7QUFBTSxhQUFTLEVBQUMsb0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBYkYsQ0FsQkYsQ0FURixDQURGLENBeElGLENBRkYsQ0FIRixDQTFCRixDQURGO0FBMk5EO0FBQ0Q7O0dBaGlCd0I3SSxJO1VBZ0JPeUIsaURBQVksQ0FBQ0MsZSxFQUMzQkksc0Q7OztLQWpCTzlCLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFkbWluXFxtYW5hZ2VtZW50XFxqb3VybmFsXFxbam91cm5hbElkXS5qcy5lZTkzYzg4NWEyYjUyNzlkZGM5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmlsZVBkZlR3b1RvbmUsIEluYm94T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLCBGb3JtLCBJbWFnZSwgbm90aWZpY2F0aW9uLCBSb3csIFNlbGVjdCxcclxuICBTd2l0Y2gsIFR5cG9ncmFwaHksIFVwbG9hZFxyXG59IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnYW50ZC9saWIvaW5wdXQvVGV4dEFyZWEnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbi8vIGltcG9ydCBVc2VyTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9Vc2VyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdmFsaWRhdG9yIGZyb20gJ3ZhbGlkYXRvcic7XHJcbi8qIGNvbXBvbmVudHMgKi9cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRBZG1pbic7XHJcbi8qIHV0aWxzICovXHJcbmltcG9ydCB7XHJcbiAgYWJzb2x1dGVVcmwsIGFwaUluc3RhbmNlXHJcbn0gZnJvbSAnLi4vLi4vLi4vLi4vbWlkZGxld2FyZS91dGlscyc7XHJcblxyXG5jb25zdCB7IFRleHQsIFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG4gIGNvbnN0IHsgdXNlciwgb3JpZ2luIH0gPSBwcm9wcztcclxuICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtqb3VybmFsRGF0YSwgc2V0Sm91cm5hbERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3ByZXZpZXdJbWFnZSwgc2V0UHJldmlld0ltYWdlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2ltYWdlTGFuZGluZ1BhZ2UsIHNldEltYWdlTGFuZGluZ1BhZ2VdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbcHJldmlld1Zpc2libGVJbWFnZSwgc2V0UHJldmlld1Zpc2libGVJbWFnZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbcHJldmlld0ZpbGUsIHNldFByZXZpZXdGaWxlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3ByZXZpZXdWaXNpYmxlRmlsZSwgc2V0UHJldmlld1Zpc2libGVGaWxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtqb3VybmFsX29yaSwgc2V0Sm91cm5hbF9vcmldID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2ZpZWxkcywgc2V0RmllbGRzXSA9IHVzZVN0YXRlKFtcclxuICAgIHtcclxuICAgICAgbmFtZTogWydxdWVzdGlvbl90aXRsZSddLFxyXG4gICAgICB2YWx1ZTogJycsXHJcbiAgICB9LFxyXG4gIF0pO1xyXG4gIGNvbnN0IFthcGksIGNvbnRleHRIb2xkZXJdID0gbm90aWZpY2F0aW9uLnVzZU5vdGlmaWNhdGlvbigpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgam91cm5hbElkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgeyBEcmFnZ2VyIH0gPSBVcGxvYWQ7XHJcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBKb2RpdEVkaXRvciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdqb2RpdC1yZWFjdCcpLCB7IHNzcjogZmFsc2UgfSk7XHJcbiAgY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vLi4vY29uZmlnJyk7XHJcbiAgY29uc3QgZWRpdG9yID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgW2FjZXB0LCBzZXRBY2VwdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgYWNlcHRlZCA9ICgpID0+IHtcclxuICAgIGFjZXB0ID8gc2V0QWNlcHQoMCkgOiBzZXRBY2VwdCgxKTtcclxuICB9O1xyXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0SGFuZGxlcih2YWx1ZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJ2YWx1ZVwiKVxyXG4gICAgLy8gY29uc29sZS5sb2codmFsdWUpXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBvcmdhbml6YXRpb25faWQ6IHVzZXIub3JnYW5pemF0aW9uX2lkLFxyXG4gICAgICBqb3VybmFsX3N1YmplY3Q6IHZhbHVlLmpvdXJuYWxfc3ViamVjdCxcclxuICAgICAgam91cm5hbF9kZXRhaWw6IHZhbHVlLmpvdXJuYWxfZGV0YWlsLFxyXG4gICAgICBqb3VybmFsX2ZpbGU6IHZhbHVlLmpvdXJuYWxfc3ViamVjdCxcclxuICAgICAgam91cm5hbF9vcmk6IGpvdXJuYWxfb3JpLFxyXG4gICAgICBqb3VybmFsX2ltZzogaW1hZ2VMYW5kaW5nUGFnZSxcclxuICAgICAgaXNfc2hvdzogYWN0aXZlLFxyXG4gICAgICBpc19kZWxldGVkOiAnMCdcclxuICAgIH07XHJcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgY29uc3QgcmVnaXN0ZXJEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5wdXQoXHJcbiAgICAgICcvam91cm5hbC8nICsgam91cm5hbElkLFxyXG4gICAgICBkYXRhLFxyXG4gICAgKTtcclxuICAgIGlmIChyZWdpc3RlckRhdGEuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgIG9wZW5Ob3RpZmljYXRpb25SZWdpc3RlclN1Y2Nlc3MoKTtcclxuICAgICAgZmV0Y2hKb3VybmFsRGF0YSgpO1xyXG4gICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIC8vU3RhcnQgdGhlIHRpbWVyXHJcbiAgICAgICAgICByb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQvam91cm5hbCcpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSxcclxuICAgICAgICAyMDAwLFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbChyZWdpc3RlckRhdGEuZGF0YS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25SZWdpc3RlclN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICBhcGkuc3VjY2Vzcyh7XHJcbiAgICAgIG1lc3NhZ2U6IGDguJrguLHguJnguJfguLbguIHguILguYnguK3guKHguLnguKXguKrguLPguYDguKPguYfguIhgLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ+C4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iCcsXHJcbiAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25SZWdpc3RlckZhaWwgPSBtZXNzZ2FlID0+IHtcclxuICAgIGFwaS5lcnJvcih7XHJcbiAgICAgIG1lc3NhZ2U6IGDguJ7guJrguJvguLHguI3guKvguLLguKPguLDguKvguKfguYjguLLguIfguIHguLLguKPguJrguLHguJnguJfguLbguIHguILguYnguK3guKHguLnguKVgLFxyXG4gICAgICBkZXNjcmlwdGlvbjogbWVzc2dhZSxcclxuICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCB2YWxpZGF0ZVVSTCA9IGlucHV0VGV4dCA9PiB7XHJcbiAgICBzZXRVcmwodmFsaWRhdG9yLnRyaW0oaW5wdXRUZXh0KSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoSm91cm5hbERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uUmVzZXRGb3JtID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlKGpvdXJuYWxEYXRhLmlzX3VzZSA9PSAxID8gMSA6IDApO1xyXG4gICAgc2V0RmllbGRzKFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnam91cm5hbF9zdWJqZWN0J10sXHJcbiAgICAgICAgdmFsdWU6IGpvdXJuYWxEYXRhLmpvdXJuYWxfc3ViamVjdCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnam91cm5hbF9kZXRhaWwnXSxcclxuICAgICAgICB2YWx1ZTogam91cm5hbERhdGEuam91cm5hbF9kZXRhaWwsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2pvdXJuYWxfZmlsZSddLFxyXG4gICAgICAgIHZhbHVlOiBqb3VybmFsRGF0YS5qb3VybmFsX2ZpbGUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2pvdXJuYWxfb3JpJ10sXHJcbiAgICAgICAgdmFsdWU6IGpvdXJuYWxEYXRhLmpvdXJuYWxfb3JpLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydqb3VybmFsX2ltZyddLFxyXG4gICAgICAgIHZhbHVlOiBqb3VybmFsRGF0YS5qb3VybmFsX2ltZyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnaXNfc2hvdyddLFxyXG4gICAgICAgIHZhbHVlOiBqb3VybmFsRGF0YS5pc19zaG93LFxyXG4gICAgICB9LFxyXG4gICAgXSk7XHJcblxyXG4gICAgc2V0UHJldmlld1Zpc2libGUoJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICsgdXNlci5vcmdhbml6YXRpb25faWQgKyAnXFxcXGpvdXJuYWxcXFxcJyArIGRvY3VtZW50c0RhdGEuZmlsZV9uYW1lX29yaSk7XHJcbiAgICBzZXRQcmV2aWV3SW1hZ2UodHJ1ZSk7XHJcbiAgICBzZXRGaWxlX25hbWVfb3JpKGRvY3VtZW50c0RhdGEuZmlsZV9uYW1lX29yaSk7XHJcblxyXG5cclxuICAgIHNldFByZXZpZXdWaXNpYmxlKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArIHVzZXIub3JnYW5pemF0aW9uX2lkICsgJ1xcXFxqb3VybmFsXFxcXCcgKyBkb2N1bWVudHNEYXRhLmpvdXJuYWxfaW1nKTtcclxuICAgIHNldFByZXZpZXdJbWFnZSh0cnVlKTtcclxuICAgIHNldEZpbGVfbmFtZV9vcmkoZG9jdW1lbnRzRGF0YS5qb3VybmFsX2ltZyk7XHJcbiAgfTtcclxuICBjb25zdCBmZXRjaEpvdXJuYWxEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgX2pvdXJuYWxEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoJ2pvdXJuYWwvJyArIGpvdXJuYWxJZCk7XHJcbiAgICBzZXRKb3VybmFsRGF0YShfam91cm5hbERhdGEuZGF0YS5qb3VybmFsKVxyXG4gICAgc2V0UHJldmlld0ltYWdlKFxyXG4gICAgICAnLi5cXFxcLi5cXFxcLi5cXFxcdXBsb2Fkc1xcXFxjLScgK1xyXG4gICAgICB1c2VyLm9yZ2FuaXphdGlvbl9pZCArXHJcbiAgICAgICdcXFxcam91cm5hbFxcXFwnICtcclxuICAgICAgX2pvdXJuYWxEYXRhLmRhdGEuam91cm5hbC5qb3VybmFsX2ltZyxcclxuICAgICk7XHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZUltYWdlKHRydWUpO1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVGaWxlKHRydWUpO1xyXG4gICAgc2V0SW1hZ2VMYW5kaW5nUGFnZShfam91cm5hbERhdGEuZGF0YS5qb3VybmFsLmpvdXJuYWxfaW1nKTtcclxuICAgIHNldEFjdGl2ZShfam91cm5hbERhdGEuZGF0YS5qb3VybmFsLmlzX3Nob3cpO1xyXG4gICAgc2V0RmllbGRzKFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnam91cm5hbF9zdWJqZWN0J10sXHJcbiAgICAgICAgdmFsdWU6IF9qb3VybmFsRGF0YS5kYXRhLmpvdXJuYWwuam91cm5hbF9zdWJqZWN0LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydqb3VybmFsX2RldGFpbCddLFxyXG4gICAgICAgIHZhbHVlOiBfam91cm5hbERhdGEuZGF0YS5qb3VybmFsLmpvdXJuYWxfZGV0YWlsLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydqb3VybmFsX2ZpbGUnXSxcclxuICAgICAgICB2YWx1ZTogX2pvdXJuYWxEYXRhLmRhdGEuam91cm5hbC5qb3VybmFsX2ZpbGUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2pvdXJuYWxfb3JpJ10sXHJcbiAgICAgICAgdmFsdWU6IF9qb3VybmFsRGF0YS5kYXRhLmpvdXJuYWwuam91cm5hbF9vcmksXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2pvdXJuYWxfaW1nJ10sXHJcbiAgICAgICAgdmFsdWU6IF9qb3VybmFsRGF0YS5kYXRhLmpvdXJuYWwuam91cm5hbF9pbWcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2lzX3Nob3cnXSxcclxuICAgICAgICB2YWx1ZTogX2pvdXJuYWxEYXRhLmRhdGEuam91cm5hbC5pc19zaG93LFxyXG4gICAgICB9LFxyXG4gICAgXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmlsZVVwbG9hZHByb3BzID0ge1xyXG4gICAgbmFtZTogJ2ZpbGUnLFxyXG4gICAgbXVsdGlwbGU6IGZhbHNlLFxyXG4gICAgbGlzdFR5cGU6ICd0ZXh0JyxcclxuICAgIG1heENvdW50OiAxLFxyXG4gICAgYWN0aW9uOiBcIi9hcGkvdXBsb2FkL2pvdXJuYWxcIixcclxuICAgIHByZXZpZXc6IGZhbHNlLFxyXG4gICAgLy8gdWlkOiB1c2VyLnR5cGVfdXNlciA9PSAxID8gXCJhZG1pblwiIDogdXNlci5vcmdhbml6YXRpb25faWQsXHJcbiAgICAvLyBiZWZvcmVVcGxvYWQoZmlsZSkge1xyXG4gICAgLy8gXHRjb25zdCBpc0x0MTBNID0gZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgPCAxMFxyXG4gICAgLy8gXHRpZiAoIWlzTHQxME0pIHtcclxuICAgIC8vIFx0XHRub3RpZmljYXRpb24ub3Blbih7XHJcbiAgICAvLyBcdFx0XHRtZXNzYWdlOiAnVXBsb2FkIGVycm9yIScsXHJcbiAgICAvLyBcdFx0XHRkZXNjcmlwdGlvbjogPFRleHQgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiPkltYWdlIG11c3Qgc21hbGxlciB0aGFuIDEwTUIhPC9UZXh0PixcclxuICAgIC8vIFx0XHR9KVxyXG4gICAgLy8gXHR9XHJcbiAgICAvLyBcdHJldHVybiBpc0x0MTBNXHJcbiAgICAvLyB9LFxyXG4gICAgY3VzdG9tUmVxdWVzdDogKG9wdGlvbnMpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgb3B0aW9ucy5maWxlKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnaWQnLCB1c2VyLnR5cGVfdXNlciA9PSAxID8gXCJhZG1pblwiIDogdXNlci5vcmdhbml6YXRpb25faWQpXHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICBcImhlYWRlcnNcIjoge1xyXG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogJ211bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PS0tLS1XZWJLaXRGb3JtQm91bmRhcnlxVHFKSXh2a1dGWXF2UDVzJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBheGlvcy5wb3N0KG9wdGlvbnMuYWN0aW9uLCBkYXRhLCBjb25maWcpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldEpvdXJuYWxfb3JpKHJlcy5kYXRhLmRhdGEubGlzdFswXS5fbmFtZSlcclxuICAgICAgICAvLyBzZXRJbWFnZUxhbmRpbmdQYWdlKHJlcy5kYXRhLmRhdGEubGlzdFswXS5fbmFtZSlcclxuICAgICAgICBvcHRpb25zLm9uU3VjY2VzcyhyZXMuZGF0YSwgb3B0aW9ucy5maWxlKVxyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICB9KVxyXG5cclxuICAgIH0sXHJcbiAgICBhc3luYyBvbkNoYW5nZShpbmZvKSB7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBpbmZvLmZpbGVcclxuICAgICAgLy8gY29uc29sZS5sb2codXNlcilcclxuICAgICAgc3dpdGNoIChpbmZvLmZpbGUuc3RhdHVzKSB7XHJcbiAgICAgICAgLy8gY2FzZSBcInVwbG9hZGluZ1wiOlxyXG4gICAgICAgIC8vICAgbmV4dFN0YXRlLnNlbGVjdGVkRmlsZUxpc3QgPSBbaW5mby5maWxlXTtcclxuICAgICAgICAvLyAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJkb25lXCI6XHJcbiAgICAgICAgICBpZiAoIWluZm8uZmlsZS51cmwgJiYgIWluZm8uZmlsZS5wcmV2aWV3KSB7XHJcbiAgICAgICAgICAgIGluZm8uZmlsZS5wcmV2aWV3ID0gYXdhaXQgZ2V0QmFzZTY0KGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFByZXZpZXdGaWxlKGluZm8uZmlsZS51cmwgfHwgaW5mby5maWxlLnByZXZpZXcpXHJcbiAgICAgICAgICBzZXRQcmV2aWV3VmlzaWJsZUZpbGUodHJ1ZSlcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgLy8gZXJyb3Igb3IgcmVtb3ZlZFxyXG4gICAgICAgICAgcmVzZXRJbWFnZVByZXZpZXcoKVxyXG4gICAgICB9XHJcbiAgICAgIC8vY29uc29sZS5sb2coaW5mby5maWxlKVxyXG5cclxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIC8vICAgcHJldmlld0ltYWdlOiBmaWxlLnVybCB8fCBmaWxlLnByZXZpZXcsXHJcbiAgICAgIC8vICAgcHJldmlld1Zpc2libGU6IHRydWUsXHJcbiAgICAgIC8vIH0pO1xyXG5cclxuICAgIH0sXHJcbiAgICBvblJlbW92ZShpbmZvKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwib25SZW1vdmVcIilcclxuICAgICAgY29uc29sZS5sb2coaW5mbylcclxuICAgICAgcmVzZXRJbWFnZVByZXZpZXcoKVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGltYWdlVXBsb2FkcHJvcHMgPSB7XHJcbiAgICBuYW1lOiAnZmlsZScsXHJcbiAgICBtdWx0aXBsZTogZmFsc2UsXHJcbiAgICBsaXN0VHlwZTogJ3RleHQnLFxyXG4gICAgbWF4Q291bnQ6IDEsXHJcbiAgICBhY3Rpb246IFwiL2FwaS91cGxvYWQvam91cm5hbFwiLFxyXG4gICAgcHJldmlldzogZmFsc2UsXHJcbiAgICAvLyB1aWQ6IHVzZXIudHlwZV91c2VyID09IDEgPyBcImFkbWluXCIgOiB1c2VyLm9yZ2FuaXphdGlvbl9pZCxcclxuICAgIC8vIGJlZm9yZVVwbG9hZChmaWxlKSB7XHJcbiAgICAvLyBcdGNvbnN0IGlzTHQxME0gPSBmaWxlLnNpemUgLyAxMDI0IC8gMTAyNCA8IDEwXHJcbiAgICAvLyBcdGlmICghaXNMdDEwTSkge1xyXG4gICAgLy8gXHRcdG5vdGlmaWNhdGlvbi5vcGVuKHtcclxuICAgIC8vIFx0XHRcdG1lc3NhZ2U6ICdVcGxvYWQgZXJyb3IhJyxcclxuICAgIC8vIFx0XHRcdGRlc2NyaXB0aW9uOiA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCI+SW1hZ2UgbXVzdCBzbWFsbGVyIHRoYW4gMTBNQiE8L1RleHQ+LFxyXG4gICAgLy8gXHRcdH0pXHJcbiAgICAvLyBcdH1cclxuICAgIC8vIFx0cmV0dXJuIGlzTHQxME1cclxuICAgIC8vIH0sXHJcbiAgICBjdXN0b21SZXF1ZXN0OiAob3B0aW9ucykgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdpZCcsIHVzZXIudHlwZV91c2VyID09IDEgPyBcImFkbWluXCIgOiB1c2VyLm9yZ2FuaXphdGlvbl9pZClcclxuICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgIFwiaGVhZGVyc1wiOiB7XHJcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9LS0tLVdlYktpdEZvcm1Cb3VuZGFyeXFUcUpJeHZrV0ZZcXZQNXMnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGF4aW9zLnBvc3Qob3B0aW9ucy5hY3Rpb24sIGRhdGEsIGNvbmZpZykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgLy8gc2V0Sm91cm5hbF9vcmkocmVzLmRhdGEuZGF0YS5saXN0WzBdLl9uYW1lKVxyXG4gICAgICAgIHNldEltYWdlTGFuZGluZ1BhZ2UocmVzLmRhdGEuZGF0YS5saXN0WzBdLl9uYW1lKVxyXG4gICAgICAgIG9wdGlvbnMub25TdWNjZXNzKHJlcy5kYXRhLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfSxcclxuICAgIGFzeW5jIG9uQ2hhbmdlKGluZm8pIHtcclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGluZm8uZmlsZVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyh1c2VyKVxyXG4gICAgICBzd2l0Y2ggKGluZm8uZmlsZS5zdGF0dXMpIHtcclxuICAgICAgICAvLyBjYXNlIFwidXBsb2FkaW5nXCI6XHJcbiAgICAgICAgLy8gICBuZXh0U3RhdGUuc2VsZWN0ZWRGaWxlTGlzdCA9IFtpbmZvLmZpbGVdO1xyXG4gICAgICAgIC8vICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImRvbmVcIjpcclxuICAgICAgICAgIGlmICghaW5mby5maWxlLnVybCAmJiAhaW5mby5maWxlLnByZXZpZXcpIHtcclxuICAgICAgICAgICAgaW5mby5maWxlLnByZXZpZXcgPSBhd2FpdCBnZXRCYXNlNjQoaW5mby5maWxlLm9yaWdpbkZpbGVPYmopO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0UHJldmlld0ltYWdlKGluZm8uZmlsZS51cmwgfHwgaW5mby5maWxlLnByZXZpZXcpXHJcbiAgICAgICAgICBzZXRQcmV2aWV3VmlzaWJsZUltYWdlKHRydWUpXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIC8vIGVycm9yIG9yIHJlbW92ZWRcclxuICAgICAgICAgIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuICAgICAgfVxyXG4gICAgICAvL2NvbnNvbGUubG9nKGluZm8uZmlsZSlcclxuXHJcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAvLyAgIHByZXZpZXdJbWFnZTogZmlsZS51cmwgfHwgZmlsZS5wcmV2aWV3LFxyXG4gICAgICAvLyAgIHByZXZpZXdWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAvLyB9KTtcclxuXHJcbiAgICB9LFxyXG4gICAgb25SZW1vdmUoaW5mbykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9uUmVtb3ZlXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXNldEltYWdlUHJldmlldyA9ICgpID0+IHtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlRmlsZShmYWxzZSlcclxuICAgIHNldFByZXZpZXdWaXNpYmxlSW1hZ2UoZmFsc2UpXHJcbiAgICBzZXRQcmV2aWV3RmlsZShudWxsKVxyXG4gICAgc2V0UHJldmlld0ltYWdlKG51bGwpXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0QmFzZTY0KGZpbGUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcclxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBlcnJvciA9PiByZWplY3QoZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dFxyXG4gICAgICB0aXRsZT1cIkdvdmVybm1lbnQgLSBBZG1pbiBtYW5hZ2VtZW50XCJcclxuICAgICAgdGl0bGVQYWdlPXtcclxuICAgICAgICAn4LmB4LiB4LmJ4LmE4LiC4Lin4Liy4Lij4Liq4Liy4LijICcgK1xyXG4gICAgICAgIChqb3VybmFsRGF0YSA/IGpvdXJuYWxEYXRhLmpvdXJuYWxfc3ViamVjdCA6ICcnKVxyXG4gICAgICB9XHJcbiAgICAgIHVybD17b3JpZ2lufVxyXG4gICAgICBpbmRleFN1Yk1lbnU9e1wiMVwifVxyXG4gICAgICBpbmRleE1lbnU9e1wic3ViLTEtN1wifVxyXG4gICAgICBvcmlnaW49e29yaWdpbn1cclxuICAgICAgcHJvcHM9e3Byb3BzfVxyXG4gICAgICBfcm91dGVzPXtbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGF0aDogJy9hZG1pbi9kYXNoYm9yYWQnLFxyXG4gICAgICAgICAgYnJlYWRjcnVtYk5hbWU6ICfguKvguJnguYnguLLguKvguKXguLHguIEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGF0aDogJy9hZG1pbi9tYW5hZ2VtZW50L2pvdXJuYWwnLFxyXG4gICAgICAgICAgYnJlYWRjcnVtYk5hbWU6ICfguIjguLHguJTguIHguLLguKPguKfguLLguKPguKrguLLguKMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGF0aDogJy9hZG1pbi9tYW5hZ2VtZW50L2FkZC1qb3VybmFsJyxcclxuICAgICAgICAgIGJyZWFkY3J1bWJOYW1lOiAn4LmB4LiB4LmJ4LmE4LiC4Lin4Liy4Lij4Liq4Liy4LijJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtjb250ZXh0SG9sZGVyfVxyXG4gICAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkob3JnYW5pemF0aW9uRGF0YSl9ICovfVxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICB7Lyoge0pTT04uc3RyaW5naWZ5KG9yZ2FuaXphdGlvbkRhdGEpfSAqL31cclxuICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgIC8vIGluaXRpYWxWYWx1ZXM9e3sgZW1haWw6IGVtYWlsLCBpbnZpdGF0aW9uQ29kZTogY29kZSB9fVxyXG4gICAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgIG9uRmluaXNoPXtvblN1Ym1pdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgIC8vIG9uRmluaXNoRmFpbGVkPXtvbkZpbmlzaEZhaWxlZH1cclxuICAgICAgICAgICAgcmVxdWlyZWRNYXJrPXt0cnVlfVxyXG4gICAgICAgICAgICBmaWVsZHM9e2ZpZWxkc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJqb3VybmFsX3N1YmplY3RcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwi4LiK4Li34LmI4Lit4Lin4Liy4Lij4Liq4Liy4LijIDpcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4Lin4Liy4Lij4Liq4Liy4LijJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiK4Li34LmI4Lit4Lin4Liy4Lij4Liq4Liy4LijXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjbGVhcjogJ2JvdGgnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgbmFtZT1cImpvdXJuYWxfb3JpXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIuC5geC4meC4muC5hOC4n+C4peC5jCA6XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC5gOC4peC4t+C4reC4geC5gOC4reC4geC4quC4suC4oycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8RHJhZ2dlclxyXG4gICAgICAgICAgICAgICAgbWF4Q291bnQ9ezF9XHJcbiAgICAgICAgICAgICAgICAvLyBsaXN0VHlwZT1cInBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiLnBkZlwiXHJcbiAgICAgICAgICAgICAgICB7Li4uZmlsZVVwbG9hZHByb3BzfVxyXG4gICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICB7cHJldmlld1Zpc2libGVGaWxlICYmIDw+IDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtZHJhZy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWxlUGRmVHdvVG9uZSAvPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICDguK3guLHguJ7guYLguKvguKXguJTguYTguJ/guKXguYzguYDguKPguLXguKLguJrguKPguYnguK3guKI8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lFxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHshcHJldmlld1Zpc2libGVGaWxlICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtZHJhZy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluYm94T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lFxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L0RyYWdnZXI+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNsZWFyOiAnYm90aCcgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAge2pvdXJuYWxEYXRhICYmIDw+XHJcbiAgICAgICAgICAgICAgICB7am91cm5hbERhdGEuam91cm5hbF9vcmkgJiYgPD48ZGl2IGNsYXNzPVwiYW50LXVwbG9hZC10ZXh0LWljb25cIiBzdHlsZT17eyBmbG9hdDogJ2xlZnQnLCBtYXJnaW5SaWdodDogJzJweCcgfX0+PHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJwYXBlci1jbGlwXCIgY2xhc3M9XCJhbnRpY29uIGFudGljb24tcGFwZXItY2xpcFwiPjxzdmcgdmlld0JveD1cIjY0IDY0IDg5NiA4OTZcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtaWNvbj1cInBhcGVyLWNsaXBcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48cGF0aCBkPVwiTTc3OS4zIDE5Ni42Yy05NC4yLTk0LjItMjQ3LjYtOTQuMi0zNDEuNyAwbC0yNjEgMjYwLjhjLTEuNyAxLjctMi42IDQtMi42IDYuNHMuOSA0LjcgMi42IDYuNGwzNi45IDM2LjlhOSA5IDAgMDAxMi43IDBsMjYxLTI2MC44YzMyLjQtMzIuNCA3NS41LTUwLjIgMTIxLjMtNTAuMnM4OC45IDE3LjggMTIxLjIgNTAuMmMzMi40IDMyLjQgNTAuMiA3NS41IDUwLjIgMTIxLjIgMCA0NS44LTE3LjggODguOC01MC4yIDEyMS4ybC0yNjYgMjY1LjktNDMuMSA0My4xYy00MC4zIDQwLjMtMTA1LjggNDAuMy0xNDYuMSAwLTE5LjUtMTkuNS0zMC4yLTQ1LjQtMzAuMi03M3MxMC43LTUzLjUgMzAuMi03M2wyNjMuOS0yNjMuOGM2LjctNi42IDE1LjUtMTAuMyAyNC45LTEwLjNoLjFjOS40IDAgMTguMSAzLjcgMjQuNyAxMC4zIDYuNyA2LjcgMTAuMyAxNS41IDEwLjMgMjQuOSAwIDkuMy0zLjcgMTguMS0xMC4zIDI0LjdMMzcyLjQgNjUzYy0xLjcgMS43LTIuNiA0LTIuNiA2LjRzLjkgNC43IDIuNiA2LjRsMzYuOSAzNi45YTkgOSAwIDAwMTIuNyAwbDIxNS42LTIxNS42YzE5LjktMTkuOSAzMC44LTQ2LjMgMzAuOC03NC40cy0xMS01NC42LTMwLjgtNzQuNGMtNDEuMS00MS4xLTEwNy45LTQxLTE0OSAwTDQ2MyAzNjQgMjI0LjggNjAyLjFBMTcyLjIyIDE3Mi4yMiAwIDAwMTc0IDcyNC44YzAgNDYuMyAxOC4xIDg5LjggNTAuOCAxMjIuNSAzMy45IDMzLjggNzguMyA1MC43IDEyMi43IDUwLjcgNDQuNCAwIDg4LjgtMTYuOSAxMjIuNi01MC43bDMwOS4yLTMwOUM4MjQuOCA0OTIuNyA4NTAgNDMyIDg1MCAzNjcuNWMuMS02NC42LTI1LjEtMTI1LjMtNzAuNy0xNzAuOXpcIj48L3BhdGg+PC9zdmc+PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXsnL3VwbG9hZHMvYy0nICsgdXNlci5vcmdhbml6YXRpb25faWQgKyAnL2pvdXJuYWwvJyArIGpvdXJuYWxEYXRhLmpvdXJuYWxfb3JpfSB0YXJnZXQ9J19ibGFuayc+e2pvdXJuYWxEYXRhLmpvdXJuYWxfb3JpfTwvYT48Lz59XHJcbiAgICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjbGVhcjogJ2JvdGgnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgbmFtZT1cImpvdXJuYWxfZGV0YWlsXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIuC4o+C4suC4ouC4peC4sOC5gOC4reC4teC4ouC4lCA6XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4o+C4suC4ouC4peC4sOC5gOC4reC4teC4ouC4lOC4p+C4suC4o+C4quC4suC4oycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Sm9kaXRFZGl0b3JcclxuICAgICAgICAgICAgICAgIHJlZj17ZWRpdG9yfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICBjb25maWc9e2NvbmZpZy5jb25maWcodXNlcil9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiNzAwcHhcIn1cclxuICAgICAgICAgICAgICAgIHRhYkluZGV4PXsxfSAvLyB0YWJJbmRleCBvZiB0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgb25CbHVyPXtuZXdDb250ZW50ID0+IHNldENvbnRlbnQobmV3Q29udGVudCl9IC8vIHByZWZlcnJlZCB0byB1c2Ugb25seSB0aGlzIG9wdGlvbiB0byB1cGRhdGUgdGhlIGNvbnRlbnQgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtuZXdDb250ZW50ID0+IHsgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjbGVhcjogJ2JvdGgnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgbmFtZT1cImpvdXJuYWxfaW1nXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIuC4oOC4suC4nuC4m+C4geC4p+C4suC4o+C4quC4suC4oyA6XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC5gOC4peC4t+C4reC4geC4oOC4suC4nuC4m+C4geC4p+C4suC4o+C4quC4suC4oycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7LyogPERyYWdnZXIgey4uLmRyb3BpbWd9PiAqL31cclxuICAgICAgICAgICAgICA8RHJhZ2dlclxyXG4gICAgICAgICAgICAgICAgbWF4Q291bnQ9ezF9XHJcbiAgICAgICAgICAgICAgICAvLyBsaXN0VHlwZT1cInBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLmpwZWcsIC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgey4uLmltYWdlVXBsb2FkcHJvcHN9XHJcbiAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgIHtwcmV2aWV3VmlzaWJsZUltYWdlICYmIDw+PEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIC8vIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgIHByZXZpZXc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e3ByZXZpZXdJbWFnZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHshcHJldmlld1Zpc2libGVJbWFnZSAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbmJveE91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4LiE4Lil4Li04LiBIOC4q+C4o+C4t+C4rSDguKXguLLguIHguYTguJ/guKXguYzguKHguLLguJfguLXguYjguJrguKPguLTguYDguKfguJPguJnguLXguYnguYDguJ7guLfguYjguK3guK3guLHguJvguYLguKvguKXguJRcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9EcmFnZ2VyPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjbGVhcjogJ2JvdGgnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtIGNsYXNzTmFtZT1cImZsZXggbXQtNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHRleHQtbGVmdCB3LTEvMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3d0LWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17YWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3ZhbHVlID0+IHNldEFjdGl2ZSh2YWx1ZSA/IDEgOiAwKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXgtMiB0ZXh0LXNtXCI+4LiB4Liy4Lij4LmB4Liq4LiU4LiH4Lic4LilPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGxnOnRleHQtcmlnaHQgdy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBodG1sVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25SZXNldEZvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNDMkNGRTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQzJDRkUwJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMHB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSB3LWZ1bGwgbGc6dy0xLzRcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGV4dC1jdXN0b20tYmxhY2sgXCI+4Lij4Li14LmA4LiL4LmH4LiXPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzA1OTY2OScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyMwNTk2NjknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwcHggIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHctZnVsbCBsZzp3LTEvNFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbS13aGl0ZSBcIj7guJrguLHguJnguJfguLbguIE8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0ID5cclxuICApO1xyXG59XHJcbi8qIGdldFNlcnZlclNpZGVQcm9wcyAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHJlcSB9ID0gY29udGV4dDtcclxuICBjb25zdCB7IG9yaWdpbiB9ID0gYWJzb2x1dGVVcmwocmVxKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG9yaWdpbixcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9