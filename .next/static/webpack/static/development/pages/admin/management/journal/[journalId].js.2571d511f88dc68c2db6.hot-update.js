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
    setPreviewVisibleImage(journalData.journal_ori);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9tYW5hZ2VtZW50L2pvdXJuYWwvW2pvdXJuYWxJZF0uanMiXSwibmFtZXMiOlsiVGV4dCIsIlR5cG9ncmFwaHkiLCJUaXRsZSIsIk9wdGlvbiIsIlNlbGVjdCIsIkhvbWUiLCJwcm9wcyIsInVzZXIiLCJvcmlnaW4iLCJ1c2VTdGF0ZSIsInVybCIsInNldFVybCIsImpvdXJuYWxEYXRhIiwic2V0Sm91cm5hbERhdGEiLCJwcmV2aWV3SW1hZ2UiLCJzZXRQcmV2aWV3SW1hZ2UiLCJpbWFnZUxhbmRpbmdQYWdlIiwic2V0SW1hZ2VMYW5kaW5nUGFnZSIsInByZXZpZXdWaXNpYmxlSW1hZ2UiLCJzZXRQcmV2aWV3VmlzaWJsZUltYWdlIiwicHJldmlld0ZpbGUiLCJzZXRQcmV2aWV3RmlsZSIsInByZXZpZXdWaXNpYmxlRmlsZSIsInNldFByZXZpZXdWaXNpYmxlRmlsZSIsImpvdXJuYWxfb3JpIiwic2V0Sm91cm5hbF9vcmkiLCJuYW1lIiwidmFsdWUiLCJmaWVsZHMiLCJzZXRGaWVsZHMiLCJub3RpZmljYXRpb24iLCJ1c2VOb3RpZmljYXRpb24iLCJhcGkiLCJjb250ZXh0SG9sZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiam91cm5hbElkIiwicXVlcnkiLCJEcmFnZ2VyIiwiVXBsb2FkIiwiZGF0ZSIsInNldERhdGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJKb2RpdEVkaXRvciIsImR5bmFtaWMiLCJzc3IiLCJjb25maWciLCJyZXF1aXJlIiwiZWRpdG9yIiwidXNlUmVmIiwiY29udGVudCIsInNldENvbnRlbnQiLCJhY2VwdCIsInNldEFjZXB0IiwiYWNlcHRlZCIsIm9uU3VibWl0SGFuZGxlciIsImRhdGEiLCJvcmdhbml6YXRpb25faWQiLCJqb3VybmFsX3N1YmplY3QiLCJqb3VybmFsX2RldGFpbCIsImpvdXJuYWxfZmlsZSIsImpvdXJuYWxfaW1nIiwiaXNfc2hvdyIsImlzX2RlbGV0ZWQiLCJhcGlJbnN0YW5jZSIsInB1dCIsInJlZ2lzdGVyRGF0YSIsInN0YXR1cyIsIm9wZW5Ob3RpZmljYXRpb25SZWdpc3RlclN1Y2Nlc3MiLCJmZXRjaEpvdXJuYWxEYXRhIiwic2V0VGltZW91dCIsInB1c2giLCJiaW5kIiwib3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbCIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZGVzY3JpcHRpb24iLCJwbGFjZW1lbnQiLCJtZXNzZ2FlIiwiZXJyb3IiLCJ2YWxpZGF0ZVVSTCIsImlucHV0VGV4dCIsInZhbGlkYXRvciIsInRyaW0iLCJ1c2VFZmZlY3QiLCJvblJlc2V0Rm9ybSIsImlzX3VzZSIsInNldFByZXZpZXdWaXNpYmxlIiwic2V0RmlsZV9uYW1lX29yaSIsImdldCIsIl9qb3VybmFsRGF0YSIsImpvdXJuYWwiLCJmaWxlVXBsb2FkcHJvcHMiLCJtdWx0aXBsZSIsImxpc3RUeXBlIiwibWF4Q291bnQiLCJhY3Rpb24iLCJwcmV2aWV3IiwiY3VzdG9tUmVxdWVzdCIsIm9wdGlvbnMiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZpbGUiLCJ0eXBlX3VzZXIiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzIiwibGlzdCIsIl9uYW1lIiwib25TdWNjZXNzIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm9uQ2hhbmdlIiwiaW5mbyIsImdldEJhc2U2NCIsIm9yaWdpbkZpbGVPYmoiLCJyZXNldEltYWdlUHJldmlldyIsIm9uUmVtb3ZlIiwiaW1hZ2VVcGxvYWRwcm9wcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJyZXN1bHQiLCJvbmVycm9yIiwicGF0aCIsImJyZWFkY3J1bWJOYW1lIiwicmVxdWlyZWQiLCJtaW5Sb3dzIiwibWF4Um93cyIsImNsZWFyIiwibWFyZ2luUmlnaHQiLCJuZXdDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJoZWlnaHQiLCJ3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QUFBO0FBQUEsS0FlRSxNQUFDLElBQUQ7QUFBTSxhQUFTLEVBQUMsb0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBZkYsQ0FERixFQWtCRSxNQUFDLDJDQUFELENBQ0U7QUFERjtBQUVFLFNBQUssRUFBRTtBQUNMTCxxQkFBZSxFQUFFLFNBRFo7QUFFTEMsaUJBQVcsRUFBRSxTQUZSO0FBR0xDLFlBQU0sRUFBRSxFQUhIO0FBSUxDLFdBQUssRUFBRSxHQUpGO0FBS0xDLGtCQUFZLEVBQUUsZ0JBTFQ7QUFNTEMsV0FBSyxFQUFFO0FBTkYsS0FGVDtBQVVFLFlBQVEsRUFBQyxRQVZYO0FBV0UsYUFBUyxFQUFDLDRJQVhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FhRSxNQUFDLElBQUQ7QUFBTSxhQUFTLEVBQUMsb0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBYkYsQ0FsQkYsQ0FURixDQURGLENBeElGLENBRkYsQ0FIRixDQTFCRixDQURGO0FBMk5EO0FBQ0Q7O0dBaGlCd0IzSSxJO1VBZ0JPeUIsaURBQVksQ0FBQ0MsZSxFQUMzQkksc0Q7OztLQWpCTzlCLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFkbWluXFxtYW5hZ2VtZW50XFxqb3VybmFsXFxbam91cm5hbElkXS5qcy4yNTcxZDUxMWY4OGRjNjhjMmRiNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmlsZVBkZlR3b1RvbmUsIEluYm94T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLCBGb3JtLCBJbWFnZSxcclxuICBSb3csIFNlbGVjdCxcclxuICBTd2l0Y2gsIFR5cG9ncmFwaHksIFVwbG9hZCxcclxuICBub3RpZmljYXRpb25cclxufSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFRleHRBcmVhIGZyb20gJ2FudGQvbGliL2lucHV0L1RleHRBcmVhJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG4vLyBpbXBvcnQgVXNlck5hdiBmcm9tICcuLi9jb21wb25lbnRzL25hdmlnYXRpb24vVXNlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHZhbGlkYXRvciBmcm9tICd2YWxpZGF0b3InO1xyXG4vKiBjb21wb25lbnRzICovXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0QWRtaW4nO1xyXG4vKiB1dGlscyAqL1xyXG5pbXBvcnQge1xyXG4gIGFic29sdXRlVXJsLCBhcGlJbnN0YW5jZVxyXG59IGZyb20gJy4uLy4uLy4uLy4uL21pZGRsZXdhcmUvdXRpbHMnO1xyXG5cclxuY29uc3QgeyBUZXh0LCBUaXRsZSB9ID0gVHlwb2dyYXBoeTtcclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuICBjb25zdCB7IHVzZXIsIG9yaWdpbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbam91cm5hbERhdGEsIHNldEpvdXJuYWxEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwcmV2aWV3SW1hZ2UsIHNldFByZXZpZXdJbWFnZV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtpbWFnZUxhbmRpbmdQYWdlLCBzZXRJbWFnZUxhbmRpbmdQYWdlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3ByZXZpZXdWaXNpYmxlSW1hZ2UsIHNldFByZXZpZXdWaXNpYmxlSW1hZ2VdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3ByZXZpZXdGaWxlLCBzZXRQcmV2aWV3RmlsZV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtwcmV2aWV3VmlzaWJsZUZpbGUsIHNldFByZXZpZXdWaXNpYmxlRmlsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbam91cm5hbF9vcmksIHNldEpvdXJuYWxfb3JpXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtmaWVsZHMsIHNldEZpZWxkc10gPSB1c2VTdGF0ZShbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFsncXVlc3Rpb25fdGl0bGUnXSxcclxuICAgICAgdmFsdWU6ICcnLFxyXG4gICAgfSxcclxuICBdKTtcclxuICBjb25zdCBbYXBpLCBjb250ZXh0SG9sZGVyXSA9IG5vdGlmaWNhdGlvbi51c2VOb3RpZmljYXRpb24oKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGpvdXJuYWxJZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHsgRHJhZ2dlciB9ID0gVXBsb2FkO1xyXG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgSm9kaXRFZGl0b3IgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnam9kaXQtcmVhY3QnKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG4gIGNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4uLy4uL2NvbmZpZycpO1xyXG4gIGNvbnN0IGVkaXRvciA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IFthY2VwdCwgc2V0QWNlcHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGFjZXB0ZWQgPSAoKSA9PiB7XHJcbiAgICBhY2VwdCA/IHNldEFjZXB0KDApIDogc2V0QWNlcHQoMSk7XHJcbiAgfTtcclxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdEhhbmRsZXIodmFsdWUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwidmFsdWVcIilcclxuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKVxyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgb3JnYW5pemF0aW9uX2lkOiB1c2VyLm9yZ2FuaXphdGlvbl9pZCxcclxuICAgICAgam91cm5hbF9zdWJqZWN0OiB2YWx1ZS5qb3VybmFsX3N1YmplY3QsXHJcbiAgICAgIGpvdXJuYWxfZGV0YWlsOiB2YWx1ZS5qb3VybmFsX2RldGFpbCxcclxuICAgICAgam91cm5hbF9maWxlOiB2YWx1ZS5qb3VybmFsX3N1YmplY3QsXHJcbiAgICAgIGpvdXJuYWxfb3JpOiBqb3VybmFsX29yaSxcclxuICAgICAgam91cm5hbF9pbWc6IGltYWdlTGFuZGluZ1BhZ2UsXHJcbiAgICAgIGlzX3Nob3c6IGFjdGl2ZSxcclxuICAgICAgaXNfZGVsZXRlZDogJzAnXHJcbiAgICB9O1xyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSlcclxuICAgIGNvbnN0IHJlZ2lzdGVyRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkucHV0KFxyXG4gICAgICAnL2pvdXJuYWwvJyArIGpvdXJuYWxJZCxcclxuICAgICAgZGF0YSxcclxuICAgICk7XHJcbiAgICBpZiAocmVnaXN0ZXJEYXRhLmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICBvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJTdWNjZXNzKCk7XHJcbiAgICAgIGZldGNoSm91cm5hbERhdGEoKTtcclxuICAgICAgc2V0VGltZW91dChcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAvL1N0YXJ0IHRoZSB0aW1lclxyXG4gICAgICAgICAgcm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50L2pvdXJuYWwnKTtcclxuICAgICAgICB9LmJpbmQodGhpcyksXHJcbiAgICAgICAgMjAwMCxcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9wZW5Ob3RpZmljYXRpb25SZWdpc3RlckZhaWwocmVnaXN0ZXJEYXRhLmRhdGEubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJTdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgYXBpLnN1Y2Nlc3Moe1xyXG4gICAgICBtZXNzYWdlOiBg4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIYCxcclxuICAgICAgZGVzY3JpcHRpb246ICfguJrguLHguJnguJfguLbguIHguILguYnguK3guKHguLnguKXguKrguLPguYDguKPguYfguIgnLFxyXG4gICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJGYWlsID0gbWVzc2dhZSA9PiB7XHJcbiAgICBhcGkuZXJyb3Ioe1xyXG4gICAgICBtZXNzYWdlOiBg4Lie4Lia4Lib4Lix4LiN4Lir4Liy4Lij4Liw4Lir4Lin4LmI4Liy4LiH4LiB4Liy4Lij4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54LilYCxcclxuICAgICAgZGVzY3JpcHRpb246IG1lc3NnYWUsXHJcbiAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgdmFsaWRhdGVVUkwgPSBpbnB1dFRleHQgPT4ge1xyXG4gICAgc2V0VXJsKHZhbGlkYXRvci50cmltKGlucHV0VGV4dCkpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaEpvdXJuYWxEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvblJlc2V0Rm9ybSA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZShqb3VybmFsRGF0YS5pc191c2UgPT0gMSA/IDEgOiAwKTtcclxuICAgIHNldEZpZWxkcyhbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2pvdXJuYWxfc3ViamVjdCddLFxyXG4gICAgICAgIHZhbHVlOiBqb3VybmFsRGF0YS5qb3VybmFsX3N1YmplY3QsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2pvdXJuYWxfZGV0YWlsJ10sXHJcbiAgICAgICAgdmFsdWU6IGpvdXJuYWxEYXRhLmpvdXJuYWxfZGV0YWlsLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydqb3VybmFsX2ZpbGUnXSxcclxuICAgICAgICB2YWx1ZTogam91cm5hbERhdGEuam91cm5hbF9maWxlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydqb3VybmFsX29yaSddLFxyXG4gICAgICAgIHZhbHVlOiBqb3VybmFsRGF0YS5qb3VybmFsX29yaSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnam91cm5hbF9pbWcnXSxcclxuICAgICAgICB2YWx1ZTogam91cm5hbERhdGEuam91cm5hbF9pbWcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2lzX3Nob3cnXSxcclxuICAgICAgICB2YWx1ZTogam91cm5hbERhdGEuaXNfc2hvdyxcclxuICAgICAgfSxcclxuICAgIF0pO1xyXG5cclxuICAgIHNldFByZXZpZXdGaWxlKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArIHVzZXIub3JnYW5pemF0aW9uX2lkICsgJ1xcXFxqb3VybmFsXFxcXCcgKyBqb3VybmFsRGF0YS5qb3VybmFsX29yaSk7XHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZUZpbGUodHJ1ZSk7XHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZUltYWdlKGpvdXJuYWxEYXRhLmpvdXJuYWxfb3JpKTtcclxuXHJcblxyXG4gICAgc2V0UHJldmlld1Zpc2libGUoJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICsgdXNlci5vcmdhbml6YXRpb25faWQgKyAnXFxcXGpvdXJuYWxcXFxcJyArIGpvdXJuYWxEYXRhLmpvdXJuYWxfaW1nKTtcclxuICAgIHNldFByZXZpZXdJbWFnZSh0cnVlKTtcclxuICAgIHNldEZpbGVfbmFtZV9vcmkoam91cm5hbERhdGEuam91cm5hbF9pbWcpO1xyXG4gIH07XHJcbiAgY29uc3QgZmV0Y2hKb3VybmFsRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IF9qb3VybmFsRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KCdqb3VybmFsLycgKyBqb3VybmFsSWQpO1xyXG4gICAgc2V0Sm91cm5hbERhdGEoX2pvdXJuYWxEYXRhLmRhdGEuam91cm5hbClcclxuICAgIHNldFByZXZpZXdJbWFnZShcclxuICAgICAgJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICtcclxuICAgICAgdXNlci5vcmdhbml6YXRpb25faWQgK1xyXG4gICAgICAnXFxcXGpvdXJuYWxcXFxcJyArXHJcbiAgICAgIF9qb3VybmFsRGF0YS5kYXRhLmpvdXJuYWwuam91cm5hbF9pbWcsXHJcbiAgICApO1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVJbWFnZSh0cnVlKTtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlRmlsZSh0cnVlKTtcclxuICAgIHNldEltYWdlTGFuZGluZ1BhZ2UoX2pvdXJuYWxEYXRhLmRhdGEuam91cm5hbC5qb3VybmFsX2ltZyk7XHJcbiAgICBzZXRBY3RpdmUoX2pvdXJuYWxEYXRhLmRhdGEuam91cm5hbC5pc19zaG93KTtcclxuICAgIHNldEZpZWxkcyhbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2pvdXJuYWxfc3ViamVjdCddLFxyXG4gICAgICAgIHZhbHVlOiBfam91cm5hbERhdGEuZGF0YS5qb3VybmFsLmpvdXJuYWxfc3ViamVjdCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnam91cm5hbF9kZXRhaWwnXSxcclxuICAgICAgICB2YWx1ZTogX2pvdXJuYWxEYXRhLmRhdGEuam91cm5hbC5qb3VybmFsX2RldGFpbCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnam91cm5hbF9maWxlJ10sXHJcbiAgICAgICAgdmFsdWU6IF9qb3VybmFsRGF0YS5kYXRhLmpvdXJuYWwuam91cm5hbF9maWxlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydqb3VybmFsX29yaSddLFxyXG4gICAgICAgIHZhbHVlOiBfam91cm5hbERhdGEuZGF0YS5qb3VybmFsLmpvdXJuYWxfb3JpLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydqb3VybmFsX2ltZyddLFxyXG4gICAgICAgIHZhbHVlOiBfam91cm5hbERhdGEuZGF0YS5qb3VybmFsLmpvdXJuYWxfaW1nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydpc19zaG93J10sXHJcbiAgICAgICAgdmFsdWU6IF9qb3VybmFsRGF0YS5kYXRhLmpvdXJuYWwuaXNfc2hvdyxcclxuICAgICAgfSxcclxuICAgIF0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpbGVVcGxvYWRwcm9wcyA9IHtcclxuICAgIG5hbWU6ICdmaWxlJyxcclxuICAgIG11bHRpcGxlOiBmYWxzZSxcclxuICAgIGxpc3RUeXBlOiAndGV4dCcsXHJcbiAgICBtYXhDb3VudDogMSxcclxuICAgIGFjdGlvbjogXCIvYXBpL3VwbG9hZC9qb3VybmFsXCIsXHJcbiAgICBwcmV2aWV3OiBmYWxzZSxcclxuICAgIC8vIHVpZDogdXNlci50eXBlX3VzZXIgPT0gMSA/IFwiYWRtaW5cIiA6IHVzZXIub3JnYW5pemF0aW9uX2lkLFxyXG4gICAgLy8gYmVmb3JlVXBsb2FkKGZpbGUpIHtcclxuICAgIC8vIFx0Y29uc3QgaXNMdDEwTSA9IGZpbGUuc2l6ZSAvIDEwMjQgLyAxMDI0IDwgMTBcclxuICAgIC8vIFx0aWYgKCFpc0x0MTBNKSB7XHJcbiAgICAvLyBcdFx0bm90aWZpY2F0aW9uLm9wZW4oe1xyXG4gICAgLy8gXHRcdFx0bWVzc2FnZTogJ1VwbG9hZCBlcnJvciEnLFxyXG4gICAgLy8gXHRcdFx0ZGVzY3JpcHRpb246IDxUZXh0IGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIj5JbWFnZSBtdXN0IHNtYWxsZXIgdGhhbiAxME1CITwvVGV4dD4sXHJcbiAgICAvLyBcdFx0fSlcclxuICAgIC8vIFx0fVxyXG4gICAgLy8gXHRyZXR1cm4gaXNMdDEwTVxyXG4gICAgLy8gfSxcclxuICAgIGN1c3RvbVJlcXVlc3Q6IChvcHRpb25zKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgZGF0YS5hcHBlbmQoJ2lkJywgdXNlci50eXBlX3VzZXIgPT0gMSA/IFwiYWRtaW5cIiA6IHVzZXIub3JnYW5pemF0aW9uX2lkKVxyXG4gICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgXCJoZWFkZXJzXCI6IHtcclxuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6ICdtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0tLS0tV2ViS2l0Rm9ybUJvdW5kYXJ5cVRxSkl4dmtXRllxdlA1cydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYXhpb3MucG9zdChvcHRpb25zLmFjdGlvbiwgZGF0YSwgY29uZmlnKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRKb3VybmFsX29yaShyZXMuZGF0YS5kYXRhLmxpc3RbMF0uX25hbWUpXHJcbiAgICAgICAgLy8gc2V0SW1hZ2VMYW5kaW5nUGFnZShyZXMuZGF0YS5kYXRhLmxpc3RbMF0uX25hbWUpXHJcbiAgICAgICAgb3B0aW9ucy5vblN1Y2Nlc3MocmVzLmRhdGEsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgfSlcclxuXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgb25DaGFuZ2UoaW5mbykge1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gaW5mby5maWxlXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXIpXHJcbiAgICAgIHN3aXRjaCAoaW5mby5maWxlLnN0YXR1cykge1xyXG4gICAgICAgIC8vIGNhc2UgXCJ1cGxvYWRpbmdcIjpcclxuICAgICAgICAvLyAgIG5leHRTdGF0ZS5zZWxlY3RlZEZpbGVMaXN0ID0gW2luZm8uZmlsZV07XHJcbiAgICAgICAgLy8gICBicmVhaztcclxuICAgICAgICBjYXNlIFwiZG9uZVwiOlxyXG4gICAgICAgICAgaWYgKCFpbmZvLmZpbGUudXJsICYmICFpbmZvLmZpbGUucHJldmlldykge1xyXG4gICAgICAgICAgICBpbmZvLmZpbGUucHJldmlldyA9IGF3YWl0IGdldEJhc2U2NChpbmZvLmZpbGUub3JpZ2luRmlsZU9iaik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRQcmV2aWV3RmlsZShpbmZvLmZpbGUudXJsIHx8IGluZm8uZmlsZS5wcmV2aWV3KVxyXG4gICAgICAgICAgc2V0UHJldmlld1Zpc2libGVGaWxlKHRydWUpXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIC8vIGVycm9yIG9yIHJlbW92ZWRcclxuICAgICAgICAgIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuICAgICAgfVxyXG4gICAgICAvL2NvbnNvbGUubG9nKGluZm8uZmlsZSlcclxuXHJcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAvLyAgIHByZXZpZXdJbWFnZTogZmlsZS51cmwgfHwgZmlsZS5wcmV2aWV3LFxyXG4gICAgICAvLyAgIHByZXZpZXdWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAvLyB9KTtcclxuXHJcbiAgICB9LFxyXG4gICAgb25SZW1vdmUoaW5mbykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9uUmVtb3ZlXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbWFnZVVwbG9hZHByb3BzID0ge1xyXG4gICAgbmFtZTogJ2ZpbGUnLFxyXG4gICAgbXVsdGlwbGU6IGZhbHNlLFxyXG4gICAgbGlzdFR5cGU6ICd0ZXh0JyxcclxuICAgIG1heENvdW50OiAxLFxyXG4gICAgYWN0aW9uOiBcIi9hcGkvdXBsb2FkL2pvdXJuYWxcIixcclxuICAgIHByZXZpZXc6IGZhbHNlLFxyXG4gICAgLy8gdWlkOiB1c2VyLnR5cGVfdXNlciA9PSAxID8gXCJhZG1pblwiIDogdXNlci5vcmdhbml6YXRpb25faWQsXHJcbiAgICAvLyBiZWZvcmVVcGxvYWQoZmlsZSkge1xyXG4gICAgLy8gXHRjb25zdCBpc0x0MTBNID0gZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgPCAxMFxyXG4gICAgLy8gXHRpZiAoIWlzTHQxME0pIHtcclxuICAgIC8vIFx0XHRub3RpZmljYXRpb24ub3Blbih7XHJcbiAgICAvLyBcdFx0XHRtZXNzYWdlOiAnVXBsb2FkIGVycm9yIScsXHJcbiAgICAvLyBcdFx0XHRkZXNjcmlwdGlvbjogPFRleHQgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiPkltYWdlIG11c3Qgc21hbGxlciB0aGFuIDEwTUIhPC9UZXh0PixcclxuICAgIC8vIFx0XHR9KVxyXG4gICAgLy8gXHR9XHJcbiAgICAvLyBcdHJldHVybiBpc0x0MTBNXHJcbiAgICAvLyB9LFxyXG4gICAgY3VzdG9tUmVxdWVzdDogKG9wdGlvbnMpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgb3B0aW9ucy5maWxlKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnaWQnLCB1c2VyLnR5cGVfdXNlciA9PSAxID8gXCJhZG1pblwiIDogdXNlci5vcmdhbml6YXRpb25faWQpXHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICBcImhlYWRlcnNcIjoge1xyXG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogJ211bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PS0tLS1XZWJLaXRGb3JtQm91bmRhcnlxVHFKSXh2a1dGWXF2UDVzJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBheGlvcy5wb3N0KG9wdGlvbnMuYWN0aW9uLCBkYXRhLCBjb25maWcpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIC8vIHNldEpvdXJuYWxfb3JpKHJlcy5kYXRhLmRhdGEubGlzdFswXS5fbmFtZSlcclxuICAgICAgICBzZXRJbWFnZUxhbmRpbmdQYWdlKHJlcy5kYXRhLmRhdGEubGlzdFswXS5fbmFtZSlcclxuICAgICAgICBvcHRpb25zLm9uU3VjY2VzcyhyZXMuZGF0YSwgb3B0aW9ucy5maWxlKVxyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICB9KVxyXG5cclxuICAgIH0sXHJcbiAgICBhc3luYyBvbkNoYW5nZShpbmZvKSB7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBpbmZvLmZpbGVcclxuICAgICAgLy8gY29uc29sZS5sb2codXNlcilcclxuICAgICAgc3dpdGNoIChpbmZvLmZpbGUuc3RhdHVzKSB7XHJcbiAgICAgICAgLy8gY2FzZSBcInVwbG9hZGluZ1wiOlxyXG4gICAgICAgIC8vICAgbmV4dFN0YXRlLnNlbGVjdGVkRmlsZUxpc3QgPSBbaW5mby5maWxlXTtcclxuICAgICAgICAvLyAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJkb25lXCI6XHJcbiAgICAgICAgICBpZiAoIWluZm8uZmlsZS51cmwgJiYgIWluZm8uZmlsZS5wcmV2aWV3KSB7XHJcbiAgICAgICAgICAgIGluZm8uZmlsZS5wcmV2aWV3ID0gYXdhaXQgZ2V0QmFzZTY0KGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFByZXZpZXdJbWFnZShpbmZvLmZpbGUudXJsIHx8IGluZm8uZmlsZS5wcmV2aWV3KVxyXG4gICAgICAgICAgc2V0UHJldmlld1Zpc2libGVJbWFnZSh0cnVlKVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAvLyBlcnJvciBvciByZW1vdmVkXHJcbiAgICAgICAgICByZXNldEltYWdlUHJldmlldygpXHJcbiAgICAgIH1cclxuICAgICAgLy9jb25zb2xlLmxvZyhpbmZvLmZpbGUpXHJcblxyXG4gICAgICAvLyB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgLy8gICBwcmV2aWV3SW1hZ2U6IGZpbGUudXJsIHx8IGZpbGUucHJldmlldyxcclxuICAgICAgLy8gICBwcmV2aWV3VmlzaWJsZTogdHJ1ZSxcclxuICAgICAgLy8gfSk7XHJcblxyXG4gICAgfSxcclxuICAgIG9uUmVtb3ZlKGluZm8pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJvblJlbW92ZVwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhpbmZvKVxyXG4gICAgICByZXNldEltYWdlUHJldmlldygpXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzZXRJbWFnZVByZXZpZXcgPSAoKSA9PiB7XHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZUZpbGUoZmFsc2UpXHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZUltYWdlKGZhbHNlKVxyXG4gICAgc2V0UHJldmlld0ZpbGUobnVsbClcclxuICAgIHNldFByZXZpZXdJbWFnZShudWxsKVxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGdldEJhc2U2NChmaWxlKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgIHJlYWRlci5vbmVycm9yID0gZXJyb3IgPT4gcmVqZWN0KGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXRcclxuICAgICAgdGl0bGU9XCJHb3Zlcm5tZW50IC0gQWRtaW4gbWFuYWdlbWVudFwiXHJcbiAgICAgIHRpdGxlUGFnZT17XHJcbiAgICAgICAgJ+C5geC4geC5ieC5hOC4guC4p+C4suC4o+C4quC4suC4oyAnICtcclxuICAgICAgICAoam91cm5hbERhdGEgPyBqb3VybmFsRGF0YS5qb3VybmFsX3N1YmplY3QgOiAnJylcclxuICAgICAgfVxyXG4gICAgICB1cmw9e29yaWdpbn1cclxuICAgICAgaW5kZXhTdWJNZW51PXtcIjFcIn1cclxuICAgICAgaW5kZXhNZW51PXtcInN1Yi0xLTdcIn1cclxuICAgICAgb3JpZ2luPXtvcmlnaW59XHJcbiAgICAgIHByb3BzPXtwcm9wc31cclxuICAgICAgX3JvdXRlcz17W1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhdGg6ICcvYWRtaW4vZGFzaGJvcmFkJyxcclxuICAgICAgICAgIGJyZWFkY3J1bWJOYW1lOiAn4Lir4LiZ4LmJ4Liy4Lir4Lil4Lix4LiBJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhdGg6ICcvYWRtaW4vbWFuYWdlbWVudC9qb3VybmFsJyxcclxuICAgICAgICAgIGJyZWFkY3J1bWJOYW1lOiAn4LiI4Lix4LiU4LiB4Liy4Lij4Lin4Liy4Lij4Liq4Liy4LijJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhdGg6ICcvYWRtaW4vbWFuYWdlbWVudC9hZGQtam91cm5hbCcsXHJcbiAgICAgICAgICBicmVhZGNydW1iTmFtZTogJ+C5geC4geC5ieC5hOC4guC4p+C4suC4o+C4quC4suC4oycsXHJcbiAgICAgICAgfSxcclxuICAgICAgXX1cclxuICAgID5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7Y29udGV4dEhvbGRlcn1cclxuICAgICAgICB7Lyoge0pTT04uc3RyaW5naWZ5KG9yZ2FuaXphdGlvbkRhdGEpfSAqL31cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgey8qIHtKU09OLnN0cmluZ2lmeShvcmdhbml6YXRpb25EYXRhKX0gKi99XHJcbiAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICBuYW1lPVwiYmFzaWNcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICAvLyBpbml0aWFsVmFsdWVzPXt7IGVtYWlsOiBlbWFpbCwgaW52aXRhdGlvbkNvZGU6IGNvZGUgfX1cclxuICAgICAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICBvbkZpbmlzaD17b25TdWJtaXRIYW5kbGVyfVxyXG4gICAgICAgICAgICAvLyBvbkZpbmlzaEZhaWxlZD17b25GaW5pc2hGYWlsZWR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkTWFyaz17dHJ1ZX1cclxuICAgICAgICAgICAgZmllbGRzPXtmaWVsZHN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICBuYW1lPVwiam91cm5hbF9zdWJqZWN0XCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIuC4iuC4t+C5iOC4reC4p+C4suC4o+C4quC4suC4oyA6XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4p+C4suC4o+C4quC4suC4oycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC4p+C4suC4o+C4quC4suC4o1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY2xlYXI6ICdib3RoJyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJqb3VybmFsX29yaVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCLguYHguJnguJrguYTguJ/guKXguYwgOlwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguYDguKXguLfguK3guIHguYDguK3guIHguKrguLLguKMnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPERyYWdnZXJcclxuICAgICAgICAgICAgICAgIG1heENvdW50PXsxfVxyXG4gICAgICAgICAgICAgICAgLy8gbGlzdFR5cGU9XCJwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5wZGZcIlxyXG4gICAgICAgICAgICAgICAgey4uLmZpbGVVcGxvYWRwcm9wc31cclxuICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAge3ByZXZpZXdWaXNpYmxlRmlsZSAmJiA8PiA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8RmlsZVBkZlR3b1RvbmUgLz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4Lit4Lix4Lie4LmC4Lir4Lil4LiU4LmE4Lif4Lil4LmM4LmA4Lij4Li14Lii4Lia4Lij4LmJ4Lit4LiiPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAg4LiE4Lil4Li04LiBIOC4q+C4o+C4t+C4rSDguKXguLLguIHguYTguJ/guKXguYzguKHguLLguJfguLXguYjguJrguKPguLTguYDguKfguJPguJnguLXguYnguYDguJ7guLfguYjguK3guK3guLHguJvguYLguKvguKXguJRcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IXByZXZpZXdWaXNpYmxlRmlsZSAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbmJveE91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4LiE4Lil4Li04LiBIOC4q+C4o+C4t+C4rSDguKXguLLguIHguYTguJ/guKXguYzguKHguLLguJfguLXguYjguJrguKPguLTguYDguKfguJPguJnguLXguYnguYDguJ7guLfguYjguK3guK3guLHguJvguYLguKvguKXguJRcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9EcmFnZ2VyPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjbGVhcjogJ2JvdGgnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIHtqb3VybmFsRGF0YSAmJiA8PlxyXG4gICAgICAgICAgICAgICAge2pvdXJuYWxEYXRhLmpvdXJuYWxfb3JpICYmIDw+PGRpdiBjbGFzcz1cImFudC11cGxvYWQtdGV4dC1pY29uXCIgc3R5bGU9e3sgZmxvYXQ6ICdsZWZ0JywgbWFyZ2luUmlnaHQ6ICcycHgnIH19PjxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwicGFwZXItY2xpcFwiIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLXBhcGVyLWNsaXBcIj48c3ZnIHZpZXdCb3g9XCI2NCA2NCA4OTYgODk2XCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLWljb249XCJwYXBlci1jbGlwXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiBmaWxsPVwiY3VycmVudENvbG9yXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHBhdGggZD1cIk03NzkuMyAxOTYuNmMtOTQuMi05NC4yLTI0Ny42LTk0LjItMzQxLjcgMGwtMjYxIDI2MC44Yy0xLjcgMS43LTIuNiA0LTIuNiA2LjRzLjkgNC43IDIuNiA2LjRsMzYuOSAzNi45YTkgOSAwIDAwMTIuNyAwbDI2MS0yNjAuOGMzMi40LTMyLjQgNzUuNS01MC4yIDEyMS4zLTUwLjJzODguOSAxNy44IDEyMS4yIDUwLjJjMzIuNCAzMi40IDUwLjIgNzUuNSA1MC4yIDEyMS4yIDAgNDUuOC0xNy44IDg4LjgtNTAuMiAxMjEuMmwtMjY2IDI2NS45LTQzLjEgNDMuMWMtNDAuMyA0MC4zLTEwNS44IDQwLjMtMTQ2LjEgMC0xOS41LTE5LjUtMzAuMi00NS40LTMwLjItNzNzMTAuNy01My41IDMwLjItNzNsMjYzLjktMjYzLjhjNi43LTYuNiAxNS41LTEwLjMgMjQuOS0xMC4zaC4xYzkuNCAwIDE4LjEgMy43IDI0LjcgMTAuMyA2LjcgNi43IDEwLjMgMTUuNSAxMC4zIDI0LjkgMCA5LjMtMy43IDE4LjEtMTAuMyAyNC43TDM3Mi40IDY1M2MtMS43IDEuNy0yLjYgNC0yLjYgNi40cy45IDQuNyAyLjYgNi40bDM2LjkgMzYuOWE5IDkgMCAwMDEyLjcgMGwyMTUuNi0yMTUuNmMxOS45LTE5LjkgMzAuOC00Ni4zIDMwLjgtNzQuNHMtMTEtNTQuNi0zMC44LTc0LjRjLTQxLjEtNDEuMS0xMDcuOS00MS0xNDkgMEw0NjMgMzY0IDIyNC44IDYwMi4xQTE3Mi4yMiAxNzIuMjIgMCAwMDE3NCA3MjQuOGMwIDQ2LjMgMTguMSA4OS44IDUwLjggMTIyLjUgMzMuOSAzMy44IDc4LjMgNTAuNyAxMjIuNyA1MC43IDQ0LjQgMCA4OC44LTE2LjkgMTIyLjYtNTAuN2wzMDkuMi0zMDlDODI0LjggNDkyLjcgODUwIDQzMiA4NTAgMzY3LjVjLjEtNjQuNi0yNS4xLTEyNS4zLTcwLjctMTcwLjl6XCI+PC9wYXRoPjwvc3ZnPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17Jy91cGxvYWRzL2MtJyArIHVzZXIub3JnYW5pemF0aW9uX2lkICsgJy9qb3VybmFsLycgKyBqb3VybmFsRGF0YS5qb3VybmFsX29yaX0gdGFyZ2V0PSdfYmxhbmsnPntqb3VybmFsRGF0YS5qb3VybmFsX29yaX08L2E+PC8+fVxyXG4gICAgICAgICAgICAgIDwvPn1cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY2xlYXI6ICdib3RoJyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJqb3VybmFsX2RldGFpbFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCLguKPguLLguKLguKXguLDguYDguK3guLXguKLguJQgOlwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguKPguLLguKLguKXguLDguYDguK3guLXguKLguJTguKfguLLguKPguKrguLLguKMnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEpvZGl0RWRpdG9yXHJcbiAgICAgICAgICAgICAgICByZWY9e2VkaXRvcn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb250ZW50fVxyXG4gICAgICAgICAgICAgICAgY29uZmlnPXtjb25maWcuY29uZmlnKHVzZXIpfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjcwMHB4XCJ9XHJcbiAgICAgICAgICAgICAgICB0YWJJbmRleD17MX0gLy8gdGFiSW5kZXggb2YgdGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIG9uQmx1cj17bmV3Q29udGVudCA9PiBzZXRDb250ZW50KG5ld0NvbnRlbnQpfSAvLyBwcmVmZXJyZWQgdG8gdXNlIG9ubHkgdGhpcyBvcHRpb24gdG8gdXBkYXRlIHRoZSBjb250ZW50IGZvciBwZXJmb3JtYW5jZSByZWFzb25zXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17bmV3Q29udGVudCA9PiB7IH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY2xlYXI6ICdib3RoJyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJqb3VybmFsX2ltZ1wiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCLguKDguLLguJ7guJvguIHguKfguLLguKPguKrguLLguKMgOlwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguYDguKXguLfguK3guIHguKDguLLguJ7guJvguIHguKfguLLguKPguKrguLLguKMnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgey8qIDxEcmFnZ2VyIHsuLi5kcm9waW1nfT4gKi99XHJcbiAgICAgICAgICAgICAgPERyYWdnZXJcclxuICAgICAgICAgICAgICAgIG1heENvdW50PXsxfVxyXG4gICAgICAgICAgICAgICAgLy8gbGlzdFR5cGU9XCJwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5qcGVnLCAucG5nXCJcclxuICAgICAgICAgICAgICAgIHsuLi5pbWFnZVVwbG9hZHByb3BzfVxyXG4gICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICB7cHJldmlld1Zpc2libGVJbWFnZSAmJiA8PjxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAvLyB3aWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICBwcmV2aWV3PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgc3JjPXtwcmV2aWV3SW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IXByZXZpZXdWaXNpYmxlSW1hZ2UgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC1kcmFnLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5ib3hPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIOC4hOC4peC4tOC4gSDguKvguKPguLfguK0g4Lil4Liy4LiB4LmE4Lif4Lil4LmM4Lih4Liy4LiX4Li14LmI4Lia4Lij4Li04LmA4Lin4LiT4LiZ4Li14LmJ4LmA4Lie4Li34LmI4Lit4Lit4Lix4Lib4LmC4Lir4Lil4LiUXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvRHJhZ2dlcj5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY2xlYXI6ICdib3RoJyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbSBjbGFzc05hbWU9XCJmbGV4IG10LTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB0ZXh0LWxlZnQgdy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3dC1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2FjdGl2ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt2YWx1ZSA9PiBzZXRBY3RpdmUodmFsdWUgPyAxIDogMCl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm14LTIgdGV4dC1zbVwiPuC4geC4suC4o+C5geC4quC4lOC4h+C4nOC4pTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBsZzp0ZXh0LXJpZ2h0IHctZnVsbCBsZzp3LTEvMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVzZXRGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjQzJDRkUwJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0MyQ0ZFMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMCxcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzBweCAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUgIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdy1mdWxsIGxnOnctMS80XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRleHQtY3VzdG9tLWJsYWNrIFwiPuC4o+C4teC5gOC4i+C5h+C4lzwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAvLyB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwNTk2NjknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMDU5NjY5JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMHB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSB3LWZ1bGwgbGc6dy0xLzRcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGV4dC1jdXN0b20td2hpdGUgXCI+4Lia4Lix4LiZ4LiX4Li24LiBPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dCA+XHJcbiAgKTtcclxufVxyXG4vKiBnZXRTZXJ2ZXJTaWRlUHJvcHMgKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyByZXEgfSA9IGNvbnRleHQ7XHJcbiAgY29uc3QgeyBvcmlnaW4gfSA9IGFic29sdXRlVXJsKHJlcSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBvcmlnaW4sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==