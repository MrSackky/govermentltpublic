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
    setPreviewFile("..\\..\\..\\uploads\\c-" + user.organization_id + '\\journal\\' + journalData.journal_ori);
    setPreviewVisibleFile(true);
    setJournal_ori(journalData.journal_ori);
    setPreviewVisible("..\\..\\..\\uploads\\c-" + user.organization_id + '\\journal\\' + journalData.journal_img);
    setPreviewImage(true);
    setFile_name_ori(journalData.journal_img);
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
      lineNumber: 350,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 7
    }
  }, contextHolder, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
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
      lineNumber: 381,
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
      lineNumber: 391,
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
      lineNumber: 402,
      columnNumber: 15
    }
  })), __jsx("div", {
    style: {
      clear: 'both'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
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
      lineNumber: 411,
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
      lineNumber: 422,
      columnNumber: 15
    }
  }), previewVisibleFile && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, " ", __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 43
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["FilePdfTwoTone"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 19
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 19
    }
  }, "\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E1F\u0E25\u0E4C\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 41
    }
  }), "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14")), !previewVisibleFile && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 19
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 21
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 19
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14")))), __jsx("div", {
    style: {
      clear: 'both'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
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
      lineNumber: 452,
      columnNumber: 47
    }
  }, __jsx("span", {
    role: "img",
    "aria-label": "paper-clip",
    "class": "anticon anticon-paper-clip",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
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
      lineNumber: 452,
      columnNumber: 203
    }
  }, __jsx("path", {
    d: "M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 337
    }
  })))), __jsx("a", {
    href: '/uploads/c-' + user.organization_id + '/journal/' + journalData.journal_ori,
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 19
    }
  }, journalData.journal_ori)))), __jsx("div", {
    style: {
      clear: 'both'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
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
      lineNumber: 457,
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
      lineNumber: 468,
      columnNumber: 15
    }
  })), __jsx("div", {
    style: {
      clear: 'both'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
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
      lineNumber: 479,
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
      lineNumber: 491,
      columnNumber: 15
    }
  }), previewVisibleImage && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Image"] // width={200}
  , {
    preview: false,
    src: previewImage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 43
    }
  })), !previewVisibleImage && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 19
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 21
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 19
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14")))), __jsx("div", {
    style: {
      clear: 'both'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    className: "flex mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "lg:inline-flex text-left w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
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
      lineNumber: 520,
      columnNumber: 19
    }
  }), __jsx("p", {
    className: "mx-2 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 19
    }
  }, "\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25")), __jsx("div", {
    className: "text-center lg:text-right w-full lg:w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
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
      lineNumber: 528,
      columnNumber: 19
    }
  }, __jsx(Text, {
    className: "text-custom-black ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
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
      lineNumber: 545,
      columnNumber: 19
    }
  }, __jsx(Text, {
    className: "text-custom-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9tYW5hZ2VtZW50L2pvdXJuYWwvW2pvdXJuYWxJZF0uanMiXSwibmFtZXMiOlsiVGV4dCIsIlR5cG9ncmFwaHkiLCJUaXRsZSIsIk9wdGlvbiIsIlNlbGVjdCIsIkhvbWUiLCJwcm9wcyIsInVzZXIiLCJvcmlnaW4iLCJ1c2VTdGF0ZSIsInVybCIsInNldFVybCIsImpvdXJuYWxEYXRhIiwic2V0Sm91cm5hbERhdGEiLCJwcmV2aWV3SW1hZ2UiLCJzZXRQcmV2aWV3SW1hZ2UiLCJpbWFnZUxhbmRpbmdQYWdlIiwic2V0SW1hZ2VMYW5kaW5nUGFnZSIsInByZXZpZXdWaXNpYmxlSW1hZ2UiLCJzZXRQcmV2aWV3VmlzaWJsZUltYWdlIiwicHJldmlld0ZpbGUiLCJzZXRQcmV2aWV3RmlsZSIsInByZXZpZXdWaXNpYmxlRmlsZSIsInNldFByZXZpZXdWaXNpYmxlRmlsZSIsImpvdXJuYWxfb3JpIiwic2V0Sm91cm5hbF9vcmkiLCJuYW1lIiwidmFsdWUiLCJmaWVsZHMiLCJzZXRGaWVsZHMiLCJub3RpZmljYXRpb24iLCJ1c2VOb3RpZmljYXRpb24iLCJhcGkiLCJjb250ZXh0SG9sZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiam91cm5hbElkIiwicXVlcnkiLCJEcmFnZ2VyIiwiVXBsb2FkIiwiZGF0ZSIsInNldERhdGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJKb2RpdEVkaXRvciIsImR5bmFtaWMiLCJzc3IiLCJjb25maWciLCJyZXF1aXJlIiwiZWRpdG9yIiwidXNlUmVmIiwiY29udGVudCIsInNldENvbnRlbnQiLCJhY2VwdCIsInNldEFjZXB0IiwiYWNlcHRlZCIsIm9uU3VibWl0SGFuZGxlciIsImRhdGEiLCJvcmdhbml6YXRpb25faWQiLCJqb3VybmFsX3N1YmplY3QiLCJqb3VybmFsX2RldGFpbCIsImpvdXJuYWxfZmlsZSIsImpvdXJuYWxfaW1nIiwiaXNfc2hvdyIsImlzX2RlbGV0ZWQiLCJhcGlJbnN0YW5jZSIsInB1dCIsInJlZ2lzdGVyRGF0YSIsInN0YXR1cyIsIm9wZW5Ob3RpZmljYXRpb25SZWdpc3RlclN1Y2Nlc3MiLCJmZXRjaEpvdXJuYWxEYXRhIiwic2V0VGltZW91dCIsInB1c2giLCJiaW5kIiwib3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbCIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZGVzY3JpcHRpb24iLCJwbGFjZW1lbnQiLCJtZXNzZ2FlIiwiZXJyb3IiLCJ2YWxpZGF0ZVVSTCIsImlucHV0VGV4dCIsInZhbGlkYXRvciIsInRyaW0iLCJ1c2VFZmZlY3QiLCJvblJlc2V0Rm9ybSIsImlzX3VzZSIsInNldFByZXZpZXdWaXNpYmxlIiwic2V0RmlsZV9uYW1lX29yaSIsImdldCIsIl9qb3VybmFsRGF0YSIsImpvdXJuYWwiLCJmaWxlVXBsb2FkcHJvcHMiLCJtdWx0aXBsZSIsImxpc3RUeXBlIiwibWF4Q291bnQiLCJhY3Rpb24iLCJwcmV2aWV3IiwiY3VzdG9tUmVxdWVzdCIsIm9wdGlvbnMiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZpbGUiLCJ0eXBlX3VzZXIiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzIiwibGlzdCIsIl9uYW1lIiwib25TdWNjZXNzIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm9uQ2hhbmdlIiwiaW5mbyIsImdldEJhc2U2NCIsIm9yaWdpbkZpbGVPYmoiLCJyZXNldEltYWdlUHJldmlldyIsIm9uUmVtb3ZlIiwiaW1hZ2VVcGxvYWRwcm9wcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJyZXN1bHQiLCJvbmVycm9yIiwicGF0aCIsImJyZWFkY3J1bWJOYW1lIiwicmVxdWlyZWQiLCJtaW5Sb3dzIiwibWF4Um93cyIsImNsZWFyIiwibWFyZ2luUmlnaHQiLCJuZXdDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJoZWlnaHQiLCJ3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QTtBQUFBLEtBZUUsTUFBQyxJQUFEO0FBQU0sYUFBUyxFQUFDLG9CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQWZGLENBREYsRUFrQkUsTUFBQywyQ0FBRCxDQUNFO0FBREY7QUFFRSxTQUFLLEVBQUU7QUFDTEwscUJBQWUsRUFBRSxTQURaO0FBRUxDLGlCQUFXLEVBQUUsU0FGUjtBQUdMQyxZQUFNLEVBQUUsRUFISDtBQUlMQyxXQUFLLEVBQUUsR0FKRjtBQUtMQyxrQkFBWSxFQUFFLGdCQUxUO0FBTUxDLFdBQUssRUFBRTtBQU5GLEtBRlQ7QUFVRSxZQUFRLEVBQUMsUUFWWDtBQVdFLGFBQVMsRUFBQyw0SUFYWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBYUUsTUFBQyxJQUFEO0FBQU0sYUFBUyxFQUFDLG9CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQWJGLENBbEJGLENBVEYsQ0FERixDQXhJRixDQUZGLENBSEYsQ0ExQkYsQ0FERjtBQTJORDtBQUNEOztHQWhpQndCM0ksSTtVQWdCT3lCLGlEQUFZLENBQUNDLGUsRUFDM0JJLHNEOzs7S0FqQk85QixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pblxcbWFuYWdlbWVudFxcam91cm5hbFxcW2pvdXJuYWxJZF0uanMuNjA2ZGUwZDU4OWRiZDdjYzgxYWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpbGVQZGZUd29Ub25lLCBJbmJveE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbiwgRm9ybSwgSW1hZ2UsXHJcbiAgUm93LCBTZWxlY3QsXHJcbiAgU3dpdGNoLCBUeXBvZ3JhcGh5LCBVcGxvYWQsXHJcbiAgbm90aWZpY2F0aW9uXHJcbn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tICdhbnRkL2xpYi9pbnB1dC9UZXh0QXJlYSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuLy8gaW1wb3J0IFVzZXJOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL1VzZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB2YWxpZGF0b3IgZnJvbSAndmFsaWRhdG9yJztcclxuLyogY29tcG9uZW50cyAqL1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dEFkbWluJztcclxuLyogdXRpbHMgKi9cclxuaW1wb3J0IHtcclxuICBhYnNvbHV0ZVVybCwgYXBpSW5zdGFuY2VcclxufSBmcm9tICcuLi8uLi8uLi8uLi9taWRkbGV3YXJlL3V0aWxzJztcclxuXHJcbmNvbnN0IHsgVGV4dCwgVGl0bGUgfSA9IFR5cG9ncmFwaHk7XHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcbiAgY29uc3QgeyB1c2VyLCBvcmlnaW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2pvdXJuYWxEYXRhLCBzZXRKb3VybmFsRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcHJldmlld0ltYWdlLCBzZXRQcmV2aWV3SW1hZ2VdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbaW1hZ2VMYW5kaW5nUGFnZSwgc2V0SW1hZ2VMYW5kaW5nUGFnZV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtwcmV2aWV3VmlzaWJsZUltYWdlLCBzZXRQcmV2aWV3VmlzaWJsZUltYWdlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtwcmV2aWV3RmlsZSwgc2V0UHJldmlld0ZpbGVdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbcHJldmlld1Zpc2libGVGaWxlLCBzZXRQcmV2aWV3VmlzaWJsZUZpbGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2pvdXJuYWxfb3JpLCBzZXRKb3VybmFsX29yaV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbZmllbGRzLCBzZXRGaWVsZHNdID0gdXNlU3RhdGUoW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBbJ3F1ZXN0aW9uX3RpdGxlJ10sXHJcbiAgICAgIHZhbHVlOiAnJyxcclxuICAgIH0sXHJcbiAgXSk7XHJcbiAgY29uc3QgW2FwaSwgY29udGV4dEhvbGRlcl0gPSBub3RpZmljYXRpb24udXNlTm90aWZpY2F0aW9uKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBqb3VybmFsSWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCB7IERyYWdnZXIgfSA9IFVwbG9hZDtcclxuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IEpvZGl0RWRpdG9yID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ2pvZGl0LXJlYWN0JyksIHsgc3NyOiBmYWxzZSB9KTtcclxuICBjb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi8uLi9jb25maWcnKTtcclxuICBjb25zdCBlZGl0b3IgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBbYWNlcHQsIHNldEFjZXB0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBhY2VwdGVkID0gKCkgPT4ge1xyXG4gICAgYWNlcHQgPyBzZXRBY2VwdCgwKSA6IHNldEFjZXB0KDEpO1xyXG4gIH07XHJcbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXRIYW5kbGVyKHZhbHVlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInZhbHVlXCIpXHJcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIG9yZ2FuaXphdGlvbl9pZDogdXNlci5vcmdhbml6YXRpb25faWQsXHJcbiAgICAgIGpvdXJuYWxfc3ViamVjdDogdmFsdWUuam91cm5hbF9zdWJqZWN0LFxyXG4gICAgICBqb3VybmFsX2RldGFpbDogdmFsdWUuam91cm5hbF9kZXRhaWwsXHJcbiAgICAgIGpvdXJuYWxfZmlsZTogdmFsdWUuam91cm5hbF9zdWJqZWN0LFxyXG4gICAgICBqb3VybmFsX29yaTogam91cm5hbF9vcmksXHJcbiAgICAgIGpvdXJuYWxfaW1nOiBpbWFnZUxhbmRpbmdQYWdlLFxyXG4gICAgICBpc19zaG93OiBhY3RpdmUsXHJcbiAgICAgIGlzX2RlbGV0ZWQ6ICcwJ1xyXG4gICAgfTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBjb25zdCByZWdpc3RlckRhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLnB1dChcclxuICAgICAgJy9qb3VybmFsLycgKyBqb3VybmFsSWQsXHJcbiAgICAgIGRhdGEsXHJcbiAgICApO1xyXG4gICAgaWYgKHJlZ2lzdGVyRGF0YS5kYXRhLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyU3VjY2VzcygpO1xyXG4gICAgICBmZXRjaEpvdXJuYWxEYXRhKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgLy9TdGFydCB0aGUgdGltZXJcclxuICAgICAgICAgIHJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC9qb3VybmFsJyk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICAgIDIwMDAsXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJGYWlsKHJlZ2lzdGVyRGF0YS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyU3VjY2VzcyA9ICgpID0+IHtcclxuICAgIGFwaS5zdWNjZXNzKHtcclxuICAgICAgbWVzc2FnZTogYOC4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iGAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAn4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIJyxcclxuICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbCA9IG1lc3NnYWUgPT4ge1xyXG4gICAgYXBpLmVycm9yKHtcclxuICAgICAgbWVzc2FnZTogYOC4nuC4muC4m+C4seC4jeC4q+C4suC4o+C4sOC4q+C4p+C5iOC4suC4h+C4geC4suC4o+C4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4pWAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBtZXNzZ2FlLFxyXG4gICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IHZhbGlkYXRlVVJMID0gaW5wdXRUZXh0ID0+IHtcclxuICAgIHNldFVybCh2YWxpZGF0b3IudHJpbShpbnB1dFRleHQpKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hKb3VybmFsRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25SZXNldEZvcm0gPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmUoam91cm5hbERhdGEuaXNfdXNlID09IDEgPyAxIDogMCk7XHJcbiAgICBzZXRGaWVsZHMoW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydqb3VybmFsX3N1YmplY3QnXSxcclxuICAgICAgICB2YWx1ZTogam91cm5hbERhdGEuam91cm5hbF9zdWJqZWN0LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydqb3VybmFsX2RldGFpbCddLFxyXG4gICAgICAgIHZhbHVlOiBqb3VybmFsRGF0YS5qb3VybmFsX2RldGFpbCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnam91cm5hbF9maWxlJ10sXHJcbiAgICAgICAgdmFsdWU6IGpvdXJuYWxEYXRhLmpvdXJuYWxfZmlsZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnam91cm5hbF9vcmknXSxcclxuICAgICAgICB2YWx1ZTogam91cm5hbERhdGEuam91cm5hbF9vcmksXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2pvdXJuYWxfaW1nJ10sXHJcbiAgICAgICAgdmFsdWU6IGpvdXJuYWxEYXRhLmpvdXJuYWxfaW1nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydpc19zaG93J10sXHJcbiAgICAgICAgdmFsdWU6IGpvdXJuYWxEYXRhLmlzX3Nob3csXHJcbiAgICAgIH0sXHJcbiAgICBdKTtcclxuXHJcbiAgICBzZXRQcmV2aWV3RmlsZSgnLi5cXFxcLi5cXFxcLi5cXFxcdXBsb2Fkc1xcXFxjLScgKyB1c2VyLm9yZ2FuaXphdGlvbl9pZCArICdcXFxcam91cm5hbFxcXFwnICsgam91cm5hbERhdGEuam91cm5hbF9vcmkpO1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVGaWxlKHRydWUpO1xyXG4gICAgc2V0Sm91cm5hbF9vcmkoam91cm5hbERhdGEuam91cm5hbF9vcmkpO1xyXG5cclxuXHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZSgnLi5cXFxcLi5cXFxcLi5cXFxcdXBsb2Fkc1xcXFxjLScgKyB1c2VyLm9yZ2FuaXphdGlvbl9pZCArICdcXFxcam91cm5hbFxcXFwnICsgam91cm5hbERhdGEuam91cm5hbF9pbWcpO1xyXG4gICAgc2V0UHJldmlld0ltYWdlKHRydWUpO1xyXG4gICAgc2V0RmlsZV9uYW1lX29yaShqb3VybmFsRGF0YS5qb3VybmFsX2ltZyk7XHJcbiAgfTtcclxuICBjb25zdCBmZXRjaEpvdXJuYWxEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgX2pvdXJuYWxEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoJ2pvdXJuYWwvJyArIGpvdXJuYWxJZCk7XHJcbiAgICBzZXRKb3VybmFsRGF0YShfam91cm5hbERhdGEuZGF0YS5qb3VybmFsKVxyXG4gICAgc2V0UHJldmlld0ltYWdlKFxyXG4gICAgICAnLi5cXFxcLi5cXFxcLi5cXFxcdXBsb2Fkc1xcXFxjLScgK1xyXG4gICAgICB1c2VyLm9yZ2FuaXphdGlvbl9pZCArXHJcbiAgICAgICdcXFxcam91cm5hbFxcXFwnICtcclxuICAgICAgX2pvdXJuYWxEYXRhLmRhdGEuam91cm5hbC5qb3VybmFsX2ltZyxcclxuICAgICk7XHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZUltYWdlKHRydWUpO1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVGaWxlKHRydWUpO1xyXG4gICAgc2V0SW1hZ2VMYW5kaW5nUGFnZShfam91cm5hbERhdGEuZGF0YS5qb3VybmFsLmpvdXJuYWxfaW1nKTtcclxuICAgIHNldEFjdGl2ZShfam91cm5hbERhdGEuZGF0YS5qb3VybmFsLmlzX3Nob3cpO1xyXG4gICAgc2V0RmllbGRzKFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnam91cm5hbF9zdWJqZWN0J10sXHJcbiAgICAgICAgdmFsdWU6IF9qb3VybmFsRGF0YS5kYXRhLmpvdXJuYWwuam91cm5hbF9zdWJqZWN0LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydqb3VybmFsX2RldGFpbCddLFxyXG4gICAgICAgIHZhbHVlOiBfam91cm5hbERhdGEuZGF0YS5qb3VybmFsLmpvdXJuYWxfZGV0YWlsLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydqb3VybmFsX2ZpbGUnXSxcclxuICAgICAgICB2YWx1ZTogX2pvdXJuYWxEYXRhLmRhdGEuam91cm5hbC5qb3VybmFsX2ZpbGUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2pvdXJuYWxfb3JpJ10sXHJcbiAgICAgICAgdmFsdWU6IF9qb3VybmFsRGF0YS5kYXRhLmpvdXJuYWwuam91cm5hbF9vcmksXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2pvdXJuYWxfaW1nJ10sXHJcbiAgICAgICAgdmFsdWU6IF9qb3VybmFsRGF0YS5kYXRhLmpvdXJuYWwuam91cm5hbF9pbWcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2lzX3Nob3cnXSxcclxuICAgICAgICB2YWx1ZTogX2pvdXJuYWxEYXRhLmRhdGEuam91cm5hbC5pc19zaG93LFxyXG4gICAgICB9LFxyXG4gICAgXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmlsZVVwbG9hZHByb3BzID0ge1xyXG4gICAgbmFtZTogJ2ZpbGUnLFxyXG4gICAgbXVsdGlwbGU6IGZhbHNlLFxyXG4gICAgbGlzdFR5cGU6ICd0ZXh0JyxcclxuICAgIG1heENvdW50OiAxLFxyXG4gICAgYWN0aW9uOiBcIi9hcGkvdXBsb2FkL2pvdXJuYWxcIixcclxuICAgIHByZXZpZXc6IGZhbHNlLFxyXG4gICAgLy8gdWlkOiB1c2VyLnR5cGVfdXNlciA9PSAxID8gXCJhZG1pblwiIDogdXNlci5vcmdhbml6YXRpb25faWQsXHJcbiAgICAvLyBiZWZvcmVVcGxvYWQoZmlsZSkge1xyXG4gICAgLy8gXHRjb25zdCBpc0x0MTBNID0gZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgPCAxMFxyXG4gICAgLy8gXHRpZiAoIWlzTHQxME0pIHtcclxuICAgIC8vIFx0XHRub3RpZmljYXRpb24ub3Blbih7XHJcbiAgICAvLyBcdFx0XHRtZXNzYWdlOiAnVXBsb2FkIGVycm9yIScsXHJcbiAgICAvLyBcdFx0XHRkZXNjcmlwdGlvbjogPFRleHQgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiPkltYWdlIG11c3Qgc21hbGxlciB0aGFuIDEwTUIhPC9UZXh0PixcclxuICAgIC8vIFx0XHR9KVxyXG4gICAgLy8gXHR9XHJcbiAgICAvLyBcdHJldHVybiBpc0x0MTBNXHJcbiAgICAvLyB9LFxyXG4gICAgY3VzdG9tUmVxdWVzdDogKG9wdGlvbnMpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgb3B0aW9ucy5maWxlKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnaWQnLCB1c2VyLnR5cGVfdXNlciA9PSAxID8gXCJhZG1pblwiIDogdXNlci5vcmdhbml6YXRpb25faWQpXHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICBcImhlYWRlcnNcIjoge1xyXG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogJ211bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PS0tLS1XZWJLaXRGb3JtQm91bmRhcnlxVHFKSXh2a1dGWXF2UDVzJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBheGlvcy5wb3N0KG9wdGlvbnMuYWN0aW9uLCBkYXRhLCBjb25maWcpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldEpvdXJuYWxfb3JpKHJlcy5kYXRhLmRhdGEubGlzdFswXS5fbmFtZSlcclxuICAgICAgICAvLyBzZXRJbWFnZUxhbmRpbmdQYWdlKHJlcy5kYXRhLmRhdGEubGlzdFswXS5fbmFtZSlcclxuICAgICAgICBvcHRpb25zLm9uU3VjY2VzcyhyZXMuZGF0YSwgb3B0aW9ucy5maWxlKVxyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICB9KVxyXG5cclxuICAgIH0sXHJcbiAgICBhc3luYyBvbkNoYW5nZShpbmZvKSB7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBpbmZvLmZpbGVcclxuICAgICAgLy8gY29uc29sZS5sb2codXNlcilcclxuICAgICAgc3dpdGNoIChpbmZvLmZpbGUuc3RhdHVzKSB7XHJcbiAgICAgICAgLy8gY2FzZSBcInVwbG9hZGluZ1wiOlxyXG4gICAgICAgIC8vICAgbmV4dFN0YXRlLnNlbGVjdGVkRmlsZUxpc3QgPSBbaW5mby5maWxlXTtcclxuICAgICAgICAvLyAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJkb25lXCI6XHJcbiAgICAgICAgICBpZiAoIWluZm8uZmlsZS51cmwgJiYgIWluZm8uZmlsZS5wcmV2aWV3KSB7XHJcbiAgICAgICAgICAgIGluZm8uZmlsZS5wcmV2aWV3ID0gYXdhaXQgZ2V0QmFzZTY0KGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFByZXZpZXdGaWxlKGluZm8uZmlsZS51cmwgfHwgaW5mby5maWxlLnByZXZpZXcpXHJcbiAgICAgICAgICBzZXRQcmV2aWV3VmlzaWJsZUZpbGUodHJ1ZSlcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgLy8gZXJyb3Igb3IgcmVtb3ZlZFxyXG4gICAgICAgICAgcmVzZXRJbWFnZVByZXZpZXcoKVxyXG4gICAgICB9XHJcbiAgICAgIC8vY29uc29sZS5sb2coaW5mby5maWxlKVxyXG5cclxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIC8vICAgcHJldmlld0ltYWdlOiBmaWxlLnVybCB8fCBmaWxlLnByZXZpZXcsXHJcbiAgICAgIC8vICAgcHJldmlld1Zpc2libGU6IHRydWUsXHJcbiAgICAgIC8vIH0pO1xyXG5cclxuICAgIH0sXHJcbiAgICBvblJlbW92ZShpbmZvKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwib25SZW1vdmVcIilcclxuICAgICAgY29uc29sZS5sb2coaW5mbylcclxuICAgICAgcmVzZXRJbWFnZVByZXZpZXcoKVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGltYWdlVXBsb2FkcHJvcHMgPSB7XHJcbiAgICBuYW1lOiAnZmlsZScsXHJcbiAgICBtdWx0aXBsZTogZmFsc2UsXHJcbiAgICBsaXN0VHlwZTogJ3RleHQnLFxyXG4gICAgbWF4Q291bnQ6IDEsXHJcbiAgICBhY3Rpb246IFwiL2FwaS91cGxvYWQvam91cm5hbFwiLFxyXG4gICAgcHJldmlldzogZmFsc2UsXHJcbiAgICAvLyB1aWQ6IHVzZXIudHlwZV91c2VyID09IDEgPyBcImFkbWluXCIgOiB1c2VyLm9yZ2FuaXphdGlvbl9pZCxcclxuICAgIC8vIGJlZm9yZVVwbG9hZChmaWxlKSB7XHJcbiAgICAvLyBcdGNvbnN0IGlzTHQxME0gPSBmaWxlLnNpemUgLyAxMDI0IC8gMTAyNCA8IDEwXHJcbiAgICAvLyBcdGlmICghaXNMdDEwTSkge1xyXG4gICAgLy8gXHRcdG5vdGlmaWNhdGlvbi5vcGVuKHtcclxuICAgIC8vIFx0XHRcdG1lc3NhZ2U6ICdVcGxvYWQgZXJyb3IhJyxcclxuICAgIC8vIFx0XHRcdGRlc2NyaXB0aW9uOiA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCI+SW1hZ2UgbXVzdCBzbWFsbGVyIHRoYW4gMTBNQiE8L1RleHQ+LFxyXG4gICAgLy8gXHRcdH0pXHJcbiAgICAvLyBcdH1cclxuICAgIC8vIFx0cmV0dXJuIGlzTHQxME1cclxuICAgIC8vIH0sXHJcbiAgICBjdXN0b21SZXF1ZXN0OiAob3B0aW9ucykgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdpZCcsIHVzZXIudHlwZV91c2VyID09IDEgPyBcImFkbWluXCIgOiB1c2VyLm9yZ2FuaXphdGlvbl9pZClcclxuICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgIFwiaGVhZGVyc1wiOiB7XHJcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9LS0tLVdlYktpdEZvcm1Cb3VuZGFyeXFUcUpJeHZrV0ZZcXZQNXMnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGF4aW9zLnBvc3Qob3B0aW9ucy5hY3Rpb24sIGRhdGEsIGNvbmZpZykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgLy8gc2V0Sm91cm5hbF9vcmkocmVzLmRhdGEuZGF0YS5saXN0WzBdLl9uYW1lKVxyXG4gICAgICAgIHNldEltYWdlTGFuZGluZ1BhZ2UocmVzLmRhdGEuZGF0YS5saXN0WzBdLl9uYW1lKVxyXG4gICAgICAgIG9wdGlvbnMub25TdWNjZXNzKHJlcy5kYXRhLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfSxcclxuICAgIGFzeW5jIG9uQ2hhbmdlKGluZm8pIHtcclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGluZm8uZmlsZVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyh1c2VyKVxyXG4gICAgICBzd2l0Y2ggKGluZm8uZmlsZS5zdGF0dXMpIHtcclxuICAgICAgICAvLyBjYXNlIFwidXBsb2FkaW5nXCI6XHJcbiAgICAgICAgLy8gICBuZXh0U3RhdGUuc2VsZWN0ZWRGaWxlTGlzdCA9IFtpbmZvLmZpbGVdO1xyXG4gICAgICAgIC8vICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImRvbmVcIjpcclxuICAgICAgICAgIGlmICghaW5mby5maWxlLnVybCAmJiAhaW5mby5maWxlLnByZXZpZXcpIHtcclxuICAgICAgICAgICAgaW5mby5maWxlLnByZXZpZXcgPSBhd2FpdCBnZXRCYXNlNjQoaW5mby5maWxlLm9yaWdpbkZpbGVPYmopO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0UHJldmlld0ltYWdlKGluZm8uZmlsZS51cmwgfHwgaW5mby5maWxlLnByZXZpZXcpXHJcbiAgICAgICAgICBzZXRQcmV2aWV3VmlzaWJsZUltYWdlKHRydWUpXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIC8vIGVycm9yIG9yIHJlbW92ZWRcclxuICAgICAgICAgIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuICAgICAgfVxyXG4gICAgICAvL2NvbnNvbGUubG9nKGluZm8uZmlsZSlcclxuXHJcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAvLyAgIHByZXZpZXdJbWFnZTogZmlsZS51cmwgfHwgZmlsZS5wcmV2aWV3LFxyXG4gICAgICAvLyAgIHByZXZpZXdWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAvLyB9KTtcclxuXHJcbiAgICB9LFxyXG4gICAgb25SZW1vdmUoaW5mbykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9uUmVtb3ZlXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXNldEltYWdlUHJldmlldyA9ICgpID0+IHtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlRmlsZShmYWxzZSlcclxuICAgIHNldFByZXZpZXdWaXNpYmxlSW1hZ2UoZmFsc2UpXHJcbiAgICBzZXRQcmV2aWV3RmlsZShudWxsKVxyXG4gICAgc2V0UHJldmlld0ltYWdlKG51bGwpXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0QmFzZTY0KGZpbGUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcclxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBlcnJvciA9PiByZWplY3QoZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dFxyXG4gICAgICB0aXRsZT1cIkdvdmVybm1lbnQgLSBBZG1pbiBtYW5hZ2VtZW50XCJcclxuICAgICAgdGl0bGVQYWdlPXtcclxuICAgICAgICAn4LmB4LiB4LmJ4LmE4LiC4Lin4Liy4Lij4Liq4Liy4LijICcgK1xyXG4gICAgICAgIChqb3VybmFsRGF0YSA/IGpvdXJuYWxEYXRhLmpvdXJuYWxfc3ViamVjdCA6ICcnKVxyXG4gICAgICB9XHJcbiAgICAgIHVybD17b3JpZ2lufVxyXG4gICAgICBpbmRleFN1Yk1lbnU9e1wiMVwifVxyXG4gICAgICBpbmRleE1lbnU9e1wic3ViLTEtN1wifVxyXG4gICAgICBvcmlnaW49e29yaWdpbn1cclxuICAgICAgcHJvcHM9e3Byb3BzfVxyXG4gICAgICBfcm91dGVzPXtbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGF0aDogJy9hZG1pbi9kYXNoYm9yYWQnLFxyXG4gICAgICAgICAgYnJlYWRjcnVtYk5hbWU6ICfguKvguJnguYnguLLguKvguKXguLHguIEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGF0aDogJy9hZG1pbi9tYW5hZ2VtZW50L2pvdXJuYWwnLFxyXG4gICAgICAgICAgYnJlYWRjcnVtYk5hbWU6ICfguIjguLHguJTguIHguLLguKPguKfguLLguKPguKrguLLguKMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGF0aDogJy9hZG1pbi9tYW5hZ2VtZW50L2FkZC1qb3VybmFsJyxcclxuICAgICAgICAgIGJyZWFkY3J1bWJOYW1lOiAn4LmB4LiB4LmJ4LmE4LiC4Lin4Liy4Lij4Liq4Liy4LijJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtjb250ZXh0SG9sZGVyfVxyXG4gICAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkob3JnYW5pemF0aW9uRGF0YSl9ICovfVxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICB7Lyoge0pTT04uc3RyaW5naWZ5KG9yZ2FuaXphdGlvbkRhdGEpfSAqL31cclxuICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgIC8vIGluaXRpYWxWYWx1ZXM9e3sgZW1haWw6IGVtYWlsLCBpbnZpdGF0aW9uQ29kZTogY29kZSB9fVxyXG4gICAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgIG9uRmluaXNoPXtvblN1Ym1pdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgIC8vIG9uRmluaXNoRmFpbGVkPXtvbkZpbmlzaEZhaWxlZH1cclxuICAgICAgICAgICAgcmVxdWlyZWRNYXJrPXt0cnVlfVxyXG4gICAgICAgICAgICBmaWVsZHM9e2ZpZWxkc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJqb3VybmFsX3N1YmplY3RcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwi4LiK4Li34LmI4Lit4Lin4Liy4Lij4Liq4Liy4LijIDpcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4Lin4Liy4Lij4Liq4Liy4LijJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiK4Li34LmI4Lit4Lin4Liy4Lij4Liq4Liy4LijXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjbGVhcjogJ2JvdGgnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgbmFtZT1cImpvdXJuYWxfb3JpXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIuC5geC4meC4muC5hOC4n+C4peC5jCA6XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC5gOC4peC4t+C4reC4geC5gOC4reC4geC4quC4suC4oycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8RHJhZ2dlclxyXG4gICAgICAgICAgICAgICAgbWF4Q291bnQ9ezF9XHJcbiAgICAgICAgICAgICAgICAvLyBsaXN0VHlwZT1cInBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiLnBkZlwiXHJcbiAgICAgICAgICAgICAgICB7Li4uZmlsZVVwbG9hZHByb3BzfVxyXG4gICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICB7cHJldmlld1Zpc2libGVGaWxlICYmIDw+IDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtZHJhZy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWxlUGRmVHdvVG9uZSAvPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICDguK3guLHguJ7guYLguKvguKXguJTguYTguJ/guKXguYzguYDguKPguLXguKLguJrguKPguYnguK3guKI8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lFxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHshcHJldmlld1Zpc2libGVGaWxlICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtZHJhZy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluYm94T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lFxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L0RyYWdnZXI+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNsZWFyOiAnYm90aCcgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAge2pvdXJuYWxEYXRhICYmIDw+XHJcbiAgICAgICAgICAgICAgICB7am91cm5hbERhdGEuam91cm5hbF9vcmkgJiYgPD48ZGl2IGNsYXNzPVwiYW50LXVwbG9hZC10ZXh0LWljb25cIiBzdHlsZT17eyBmbG9hdDogJ2xlZnQnLCBtYXJnaW5SaWdodDogJzJweCcgfX0+PHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJwYXBlci1jbGlwXCIgY2xhc3M9XCJhbnRpY29uIGFudGljb24tcGFwZXItY2xpcFwiPjxzdmcgdmlld0JveD1cIjY0IDY0IDg5NiA4OTZcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtaWNvbj1cInBhcGVyLWNsaXBcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48cGF0aCBkPVwiTTc3OS4zIDE5Ni42Yy05NC4yLTk0LjItMjQ3LjYtOTQuMi0zNDEuNyAwbC0yNjEgMjYwLjhjLTEuNyAxLjctMi42IDQtMi42IDYuNHMuOSA0LjcgMi42IDYuNGwzNi45IDM2LjlhOSA5IDAgMDAxMi43IDBsMjYxLTI2MC44YzMyLjQtMzIuNCA3NS41LTUwLjIgMTIxLjMtNTAuMnM4OC45IDE3LjggMTIxLjIgNTAuMmMzMi40IDMyLjQgNTAuMiA3NS41IDUwLjIgMTIxLjIgMCA0NS44LTE3LjggODguOC01MC4yIDEyMS4ybC0yNjYgMjY1LjktNDMuMSA0My4xYy00MC4zIDQwLjMtMTA1LjggNDAuMy0xNDYuMSAwLTE5LjUtMTkuNS0zMC4yLTQ1LjQtMzAuMi03M3MxMC43LTUzLjUgMzAuMi03M2wyNjMuOS0yNjMuOGM2LjctNi42IDE1LjUtMTAuMyAyNC45LTEwLjNoLjFjOS40IDAgMTguMSAzLjcgMjQuNyAxMC4zIDYuNyA2LjcgMTAuMyAxNS41IDEwLjMgMjQuOSAwIDkuMy0zLjcgMTguMS0xMC4zIDI0LjdMMzcyLjQgNjUzYy0xLjcgMS43LTIuNiA0LTIuNiA2LjRzLjkgNC43IDIuNiA2LjRsMzYuOSAzNi45YTkgOSAwIDAwMTIuNyAwbDIxNS42LTIxNS42YzE5LjktMTkuOSAzMC44LTQ2LjMgMzAuOC03NC40cy0xMS01NC42LTMwLjgtNzQuNGMtNDEuMS00MS4xLTEwNy45LTQxLTE0OSAwTDQ2MyAzNjQgMjI0LjggNjAyLjFBMTcyLjIyIDE3Mi4yMiAwIDAwMTc0IDcyNC44YzAgNDYuMyAxOC4xIDg5LjggNTAuOCAxMjIuNSAzMy45IDMzLjggNzguMyA1MC43IDEyMi43IDUwLjcgNDQuNCAwIDg4LjgtMTYuOSAxMjIuNi01MC43bDMwOS4yLTMwOUM4MjQuOCA0OTIuNyA4NTAgNDMyIDg1MCAzNjcuNWMuMS02NC42LTI1LjEtMTI1LjMtNzAuNy0xNzAuOXpcIj48L3BhdGg+PC9zdmc+PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXsnL3VwbG9hZHMvYy0nICsgdXNlci5vcmdhbml6YXRpb25faWQgKyAnL2pvdXJuYWwvJyArIGpvdXJuYWxEYXRhLmpvdXJuYWxfb3JpfSB0YXJnZXQ9J19ibGFuayc+e2pvdXJuYWxEYXRhLmpvdXJuYWxfb3JpfTwvYT48Lz59XHJcbiAgICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjbGVhcjogJ2JvdGgnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgbmFtZT1cImpvdXJuYWxfZGV0YWlsXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIuC4o+C4suC4ouC4peC4sOC5gOC4reC4teC4ouC4lCA6XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4o+C4suC4ouC4peC4sOC5gOC4reC4teC4ouC4lOC4p+C4suC4o+C4quC4suC4oycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Sm9kaXRFZGl0b3JcclxuICAgICAgICAgICAgICAgIHJlZj17ZWRpdG9yfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICBjb25maWc9e2NvbmZpZy5jb25maWcodXNlcil9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiNzAwcHhcIn1cclxuICAgICAgICAgICAgICAgIHRhYkluZGV4PXsxfSAvLyB0YWJJbmRleCBvZiB0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgb25CbHVyPXtuZXdDb250ZW50ID0+IHNldENvbnRlbnQobmV3Q29udGVudCl9IC8vIHByZWZlcnJlZCB0byB1c2Ugb25seSB0aGlzIG9wdGlvbiB0byB1cGRhdGUgdGhlIGNvbnRlbnQgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtuZXdDb250ZW50ID0+IHsgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjbGVhcjogJ2JvdGgnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgbmFtZT1cImpvdXJuYWxfaW1nXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIuC4oOC4suC4nuC4m+C4geC4p+C4suC4o+C4quC4suC4oyA6XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC5gOC4peC4t+C4reC4geC4oOC4suC4nuC4m+C4geC4p+C4suC4o+C4quC4suC4oycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7LyogPERyYWdnZXIgey4uLmRyb3BpbWd9PiAqL31cclxuICAgICAgICAgICAgICA8RHJhZ2dlclxyXG4gICAgICAgICAgICAgICAgbWF4Q291bnQ9ezF9XHJcbiAgICAgICAgICAgICAgICAvLyBsaXN0VHlwZT1cInBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLmpwZWcsIC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgey4uLmltYWdlVXBsb2FkcHJvcHN9XHJcbiAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgIHtwcmV2aWV3VmlzaWJsZUltYWdlICYmIDw+PEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIC8vIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgIHByZXZpZXc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e3ByZXZpZXdJbWFnZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHshcHJldmlld1Zpc2libGVJbWFnZSAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbmJveE91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4LiE4Lil4Li04LiBIOC4q+C4o+C4t+C4rSDguKXguLLguIHguYTguJ/guKXguYzguKHguLLguJfguLXguYjguJrguKPguLTguYDguKfguJPguJnguLXguYnguYDguJ7guLfguYjguK3guK3guLHguJvguYLguKvguKXguJRcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9EcmFnZ2VyPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjbGVhcjogJ2JvdGgnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtIGNsYXNzTmFtZT1cImZsZXggbXQtNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHRleHQtbGVmdCB3LTEvMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3d0LWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17YWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3ZhbHVlID0+IHNldEFjdGl2ZSh2YWx1ZSA/IDEgOiAwKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXgtMiB0ZXh0LXNtXCI+4LiB4Liy4Lij4LmB4Liq4LiU4LiH4Lic4LilPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGxnOnRleHQtcmlnaHQgdy1mdWxsIGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBodG1sVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25SZXNldEZvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNDMkNGRTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQzJDRkUwJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMHB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSB3LWZ1bGwgbGc6dy0xLzRcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGV4dC1jdXN0b20tYmxhY2sgXCI+4Lij4Li14LmA4LiL4LmH4LiXPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzA1OTY2OScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyMwNTk2NjknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwcHggIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHctZnVsbCBsZzp3LTEvNFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbS13aGl0ZSBcIj7guJrguLHguJnguJfguLbguIE8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0ID5cclxuICApO1xyXG59XHJcbi8qIGdldFNlcnZlclNpZGVQcm9wcyAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHJlcSB9ID0gY29udGV4dDtcclxuICBjb25zdCB7IG9yaWdpbiB9ID0gYWJzb2x1dGVVcmwocmVxKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG9yaWdpbixcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9