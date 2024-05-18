webpackHotUpdate("static\\development\\pages\\admin\\setting\\cover.js",{

/***/ "./pages/admin/setting/cover/index.js":
/*!********************************************!*\
  !*** ./pages/admin/setting/cover/index.js ***!
  \********************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_drag_listview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-drag-listview */ "./node_modules/react-drag-listview/es/index.js");
/* harmony import */ var _components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/layout/LayoutAdmin */ "./components/layout/LayoutAdmin.jsx");
/* harmony import */ var _components_managemnet_cover_menu_add_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/managemnet/cover-menu/add-menu */ "./components/managemnet/cover-menu/add-menu.jsx");
/* harmony import */ var _components_managemnet_cover_menu_edit_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/managemnet/cover-menu/edit-menu */ "./components/managemnet/cover-menu/edit-menu.jsx");
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../middleware/utils */ "./middleware/utils.js");




var _jsxFileName = "D:\\govermentlt\\pages\\admin\\setting\\cover\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



 // import UserNav from '../components/navigation/User';



/* components */




/* utils */


var JoditEditor = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(_c = function _c() {
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
var Text = antd__WEBPACK_IMPORTED_MODULE_4__["Typography"].Text,
    Title = antd__WEBPACK_IMPORTED_MODULE_4__["Typography"].Title;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_4__["Input"].TextArea;

var config = __webpack_require__(/*! ./../../config */ "./pages/admin/config.js");

var __N_SSP = true;
function Home(props) {
  _s();

  var _this = this;

  var _notification$useNoti = antd__WEBPACK_IMPORTED_MODULE_4__["notification"].useNotification(),
      _notification$useNoti2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_notification$useNoti, 2),
      api = _notification$useNoti2[0],
      contextHolder = _notification$useNoti2[1];

  var user = props.user,
      origin = props.origin;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]),
      questions = _useState2[0],
      setQuestions = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      visibleEditModal = _useState3[0],
      setVisibleEditModal = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(null),
      dataEdit = _useState4[0],
      setDataEdit = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      visibleModalDelete = _useState5[0],
      setVisibleModalDelete = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(null),
      dataDelete = _useState6[0],
      setDataDelete = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    fetchCoverData();
  }, []);

  var fetchCoverData = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _pollQuestionData;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.next = 3;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_12__["apiInstance"])().get('/covermenu?organization_id=' + (user ? user.organization_id : 0));

            case 3:
              _pollQuestionData = _context.sent;
              console.log(_pollQuestionData);
              setQuestions(_pollQuestionData.data.results);
              setLoading(false);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchCoverData() {
      return _ref.apply(this, arguments);
    };
  }();

  var onDelete = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(value) {
      var registerData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_12__["apiInstance"])()["delete"]('covermenu/' + dataDelete.customer_headers, {});

            case 2:
              registerData = _context2.sent;

              if (registerData.data.status == 200) {
                openNotificationSuccess(); // fetchOrganizationData();

                setVisibleModalDelete(false);
                fetchCoverData(); // fetchPollQuestionData();
              } else {
                openNotificationFail(registerData.data.message);
              }

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onDelete(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onclikEditModal = function onclikEditModal(value, obj) {
    // compareSync
    console.log('onclikEditModal');
    setDataEdit(obj);
    setVisibleEditModal(value);
  };

  var hideEditModal = function hideEditModal(data) {
    // setVisibleModalDelete(false)
    setVisibleEditModal(false);

    if (data.status == 200) {
      openNotificationSuccess();
    } else {
      openNotificationFail(data.message);
    }

    fetchCoverData();
  };

  var openNotificationSuccess = function openNotificationSuccess() {
    api.success({
      message: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E21\u0E39\u0E25\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
      description: 'บันทึกมูลสำเร็จ',
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

  var showModal = function showModal(data) {
    setDataDelete(data);
    setVisibleModalDelete(true);
  };

  var openNotificationDeleteSuccess = function openNotificationDeleteSuccess() {
    api.success({
      message: "\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
      description: 'ลบข้อมูลสำเร็จ',
      placement: 'topRight'
    });
  };

  var onDeleteHeader = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var registerData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_12__["apiInstance"])()["delete"]('covermenu/' + dataDelete.header_id, {});

            case 2:
              registerData = _context3.sent;

              if (registerData.data.status == 200) {
                openNotificationDeleteSuccess(); // fetchOrganizationData();

                setVisibleModalDelete(false);
                fetchCoverData();
              } else {
                openNotificationFail(registerData.data.message);
              }

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function onDeleteHeader() {
      return _ref3.apply(this, arguments);
    };
  }();

  var hideModal = function hideModal() {
    setVisibleModalDelete(false);
  };

  var _onDragEnd = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(fromIndex, toIndex, type, index) {
      var _data, menuData, _dataRevert, menuDataRevert;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              setLoading(true);
              /* IGNORES DRAG IF OUTSIDE DESIGNATED AREA */

              if (!(toIndex < 0)) {
                _context4.next = 3;
                break;
              }

              return _context4.abrupt("return");

            case 3:
              if (!(type === 'LIST-ITEM')) {
                _context4.next = 15;
                break;
              }

              _data = {
                header_id: questions[fromIndex].header_id,
                seq: toIndex
              };
              _context4.next = 7;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_12__["apiInstance"])().put('covermenu/reorder-menu', _data);

            case 7:
              menuData = _context4.sent;
              _dataRevert = {
                header_id: questions[toIndex].header_id,
                seq: fromIndex
              };
              _context4.next = 11;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_12__["apiInstance"])().put('covermenu/reorder-menu', _dataRevert);

            case 11:
              menuDataRevert = _context4.sent;
              return _context4.abrupt("return", fetchCoverData());

            case 15:
              if (!(type === 'SUBLIST-ITEM')) {
                _context4.next = 18;
                break;
              }

              _context4.next = 19;
              break;

            case 18:
              return _context4.abrupt("return", new Error('NOT A VALID LIST'));

            case 19:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function onDragEnd(_x2, _x3, _x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }();

  return __jsx(_components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Government - Admin management",
    url: origin,
    origin: origin // user={login}
    ,
    indexMenu: "sub-6-2",
    indexSubMenu: "6",
    titlePage: "\u0E2A\u0E48\u0E27\u0E19\u0E2B\u0E31\u0E27\u0E40\u0E27\u0E47\u0E1A\u0E44\u0E0B\u0E15\u0E4C",
    _routes: [{
      path: '/admin/dashborad',
      breadcrumbName: 'หน้าหลัก'
    }, {
      path: '/admin/setting/cover',
      breadcrumbName: 'ส่วนหัวเว็บไซต์'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 5
    }
  }, contextHolder, __jsx("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 7
    }
  }, __jsx(_components_managemnet_cover_menu_add_menu__WEBPACK_IMPORTED_MODULE_10__["default"], {
    fetch: fetchCoverData,
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 9
    }
  }), __jsx(_components_managemnet_cover_menu_edit_menu__WEBPACK_IMPORTED_MODULE_11__["default"], {
    _visible: visibleEditModal,
    hideEditModal: hideEditModal,
    fetch: fetchCoverData,
    user: user,
    dataEdit: dataEdit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Spin"], {
    spinning: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 9
    }
  }, __jsx(react_drag_listview__WEBPACK_IMPORTED_MODULE_8__["default"], {
    nodeSelector: ".ant-list.draggable",
    lineClassName: "dragLine",
    onDragEnd: function onDragEnd(fromIndex, toIndex) {
      return _onDragEnd(fromIndex, toIndex, 'LIST-ITEM');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 11
    }
  }, questions.map(function (obj, index) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["List"], {
      header: __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Typography"].Text, {
        strong: true,
        className: "grabbable ",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 21
        }
      }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["DragOutlined"], {
        className: "icon",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 23
        }
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Image"] // width={200}
      , {
        preview: false,
        src: "..\\..\\..\\uploads\\c-" + user.organization_id + '\\cover\\' + obj.header_image,
        style: {
          paddingRight: '5px'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 23
        }
      }), obj.header_link && __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("br", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 25
        }
      }), __jsx("span", {
        className: "ml-8 ml-2 mb-4",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 31
        }
      }, "[ ", __jsx("a", {
        href: obj.header_link,
        target: "_blank",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 66
        }
      }, obj.header_link), " ]"), __jsx("br", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 138
        }
      })), __jsx("br", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 23
        }
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        className: "ml-8 ml-2",
        type: "default",
        onClick: function onClick() {
          onclikEditModal(true, obj);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 23
        }
      }, "\u0E41\u0E01\u0E49\u0E44\u0E02"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        className: "ml-2 mr-2",
        type: "danger",
        onClick: function onClick() {
          return showModal(obj);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 23
        }
      }, "\u0E25\u0E1A"))),
      key: index,
      className: "draggable",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 15
      }
    }, __jsx(react_drag_listview__WEBPACK_IMPORTED_MODULE_8__["default"], {
      nodeSelector: ".ant-list-item.draggable-item",
      lineClassName: "dragLine",
      onDragEnd: function onDragEnd(fromIndex, toIndex) {
        return _onDragEnd(fromIndex, toIndex, 'SUBLIST-ITEM', index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 17
      }
    }));
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    title: "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?",
    visible: visibleModalDelete,
    onOk: onDeleteHeader,
    onCancel: hideModal,
    okText: "\u0E25\u0E1A",
    cancelText: "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",
    okButtonProps: {
      'type': "primary",
      'danger': true
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 9
    }
  }, "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A \"", dataDelete ? dataDelete.header_image : "", "\" \u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?  ")));
}
/* getServerSideProps */

_s(Home, "UtJB6QcdDwILzhixBttlo7iBn6w=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_4__["notification"].useNotification, next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9zZXR0aW5nL2NvdmVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIkpvZGl0RWRpdG9yIiwiZHluYW1pYyIsInNzciIsIlRleHQiLCJUeXBvZ3JhcGh5IiwiVGl0bGUiLCJUZXh0QXJlYSIsIklucHV0IiwiY29uZmlnIiwicmVxdWlyZSIsIkhvbWUiLCJwcm9wcyIsIm5vdGlmaWNhdGlvbiIsInVzZU5vdGlmaWNhdGlvbiIsImFwaSIsImNvbnRleHRIb2xkZXIiLCJ1c2VyIiwib3JpZ2luIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInF1ZXN0aW9ucyIsInNldFF1ZXN0aW9ucyIsInZpc2libGVFZGl0TW9kYWwiLCJzZXRWaXNpYmxlRWRpdE1vZGFsIiwiZGF0YUVkaXQiLCJzZXREYXRhRWRpdCIsInZpc2libGVNb2RhbERlbGV0ZSIsInNldFZpc2libGVNb2RhbERlbGV0ZSIsImRhdGFEZWxldGUiLCJzZXREYXRhRGVsZXRlIiwidXNlRWZmZWN0IiwiZmV0Y2hDb3ZlckRhdGEiLCJhcGlJbnN0YW5jZSIsImdldCIsIm9yZ2FuaXphdGlvbl9pZCIsIl9wb2xsUXVlc3Rpb25EYXRhIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJyZXN1bHRzIiwib25EZWxldGUiLCJ2YWx1ZSIsImN1c3RvbWVyX2hlYWRlcnMiLCJyZWdpc3RlckRhdGEiLCJzdGF0dXMiLCJvcGVuTm90aWZpY2F0aW9uU3VjY2VzcyIsIm9wZW5Ob3RpZmljYXRpb25GYWlsIiwibWVzc2FnZSIsIm9uY2xpa0VkaXRNb2RhbCIsIm9iaiIsImhpZGVFZGl0TW9kYWwiLCJzdWNjZXNzIiwiZGVzY3JpcHRpb24iLCJwbGFjZW1lbnQiLCJtZXNzZ2FlIiwiZXJyb3IiLCJzaG93TW9kYWwiLCJvcGVuTm90aWZpY2F0aW9uRGVsZXRlU3VjY2VzcyIsIm9uRGVsZXRlSGVhZGVyIiwiaGVhZGVyX2lkIiwiaGlkZU1vZGFsIiwib25EcmFnRW5kIiwiZnJvbUluZGV4IiwidG9JbmRleCIsInR5cGUiLCJpbmRleCIsIl9kYXRhIiwic2VxIiwicHV0IiwibWVudURhdGEiLCJfZGF0YVJldmVydCIsIm1lbnVEYXRhUmV2ZXJ0IiwiRXJyb3IiLCJwYXRoIiwiYnJlYWRjcnVtYk5hbWUiLCJtYXAiLCJoZWFkZXJfaW1hZ2UiLCJwYWRkaW5nUmlnaHQiLCJoZWFkZXJfbGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFPQSxJQUFNQSxXQUFXLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLHdKQUFOO0FBQUEsQ0FBRCxFQUE4QjtBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUE7QUFBQSxrQ0FBaEIsb0VBQWdCO0FBQUE7QUFBQSxjQUFoQixhQUFnQjtBQUFBO0FBQUEsQ0FBOUIsQ0FBM0I7TUFBTUYsVztBQUNOLElBQVFHLElBQVIsR0FBd0JDLCtDQUF4QixDQUFRRCxJQUFSO0FBQUEsSUFBY0UsS0FBZCxHQUF3QkQsK0NBQXhCLENBQWNDLEtBQWQ7QUFFQSxJQUFRQyxRQUFSLEdBQXFCQywwQ0FBckIsQ0FBUUQsUUFBUjs7QUFDQSxJQUFNRSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsK0NBQUQsQ0FBdEI7OztBQUVlLFNBQVNDLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBOztBQUNsQyw4QkFBNkJDLGlEQUFZLENBQUNDLGVBQWIsRUFBN0I7QUFBQTtBQUFBLE1BQU9DLEdBQVA7QUFBQSxNQUFZQyxhQUFaOztBQUNBLE1BQVFDLElBQVIsR0FBeUJMLEtBQXpCLENBQVFLLElBQVI7QUFBQSxNQUFjQyxNQUFkLEdBQXlCTixLQUF6QixDQUFjTSxNQUFkO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFDQSxrQkFBOEJD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LGNBQVUsRUFBQyxzQ0FOYjtBQU9FLGlCQUFhLEVBQUU7QUFDYixjQUFRLFNBREs7QUFFYixnQkFBVTtBQUZHLEtBUGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9GQUFrQmhDLFVBQVUsR0FBR0EsVUFBVSxDQUFDZ0QsWUFBZCxHQUE2QixFQUF6RCxxREFaRixDQXZHRixDQURGO0FBMEhEO0FBQ0Q7O0dBeFN3QnJFLEk7VUFDT0UsaURBQVksQ0FBQ0MsZSxFQUUzQk0scUQ7OztNQUhPVCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pblxcc2V0dGluZ1xcY292ZXIuanMuNjBjYmJjNWI3ODU0ZDkzYjZlMGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERyYWdPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgQnV0dG9uLCBJbWFnZSwgSW5wdXQsIExpc3QsIE1vZGFsLCBub3RpZmljYXRpb24sIFNwaW4sIFR5cG9ncmFwaHkgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG4vLyBpbXBvcnQgVXNlck5hdiBmcm9tICcuLi9jb21wb25lbnRzL25hdmlnYXRpb24vVXNlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3REcmFnTGlzdFZpZXcgZnJvbSAncmVhY3QtZHJhZy1saXN0dmlldyc7XHJcbi8qIGNvbXBvbmVudHMgKi9cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRBZG1pbic7XHJcbmltcG9ydCBNb2RhbEFkZE1lbnUgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9tYW5hZ2VtbmV0L2NvdmVyLW1lbnUvYWRkLW1lbnUnO1xyXG5pbXBvcnQgTW9kYWxFZGl0TWVudSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL21hbmFnZW1uZXQvY292ZXItbWVudS9lZGl0LW1lbnUnO1xyXG4vKiB1dGlscyAqL1xyXG5pbXBvcnQge1xyXG4gIGFic29sdXRlVXJsLFxyXG4gIGFwaUluc3RhbmNlXHJcbn0gZnJvbSAnLi4vLi4vLi4vLi4vbWlkZGxld2FyZS91dGlscyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IEpvZGl0RWRpdG9yID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJqb2RpdC1yZWFjdFwiKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5jb25zdCB7IFRleHQsIFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4vLi4vLi4vY29uZmlnJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcbiAgY29uc3QgW2FwaSwgY29udGV4dEhvbGRlcl0gPSBub3RpZmljYXRpb24udXNlTm90aWZpY2F0aW9uKCk7XHJcbiAgY29uc3QgeyB1c2VyLCBvcmlnaW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcXVlc3Rpb25zLCBzZXRRdWVzdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt2aXNpYmxlRWRpdE1vZGFsLCBzZXRWaXNpYmxlRWRpdE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZGF0YUVkaXQsIHNldERhdGFFZGl0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt2aXNpYmxlTW9kYWxEZWxldGUsIHNldFZpc2libGVNb2RhbERlbGV0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbZGF0YURlbGV0ZSwgc2V0RGF0YURlbGV0ZV0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoQ292ZXJEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuXHJcbiAgY29uc3QgZmV0Y2hDb3ZlckRhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBjb25zdCBfcG9sbFF1ZXN0aW9uRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KCcvY292ZXJtZW51P29yZ2FuaXphdGlvbl9pZD0nICsgKHVzZXIgPyB1c2VyLm9yZ2FuaXphdGlvbl9pZCA6IDApKTtcclxuICAgIGNvbnNvbGUubG9nKF9wb2xsUXVlc3Rpb25EYXRhKVxyXG4gICAgc2V0UXVlc3Rpb25zKF9wb2xsUXVlc3Rpb25EYXRhLmRhdGEucmVzdWx0cylcclxuICAgIHNldExvYWRpbmcoZmFsc2UpXHJcblxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGVsZXRlID0gYXN5bmMgdmFsdWUgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ0RFTEVURScpXHJcblxyXG4gICAgY29uc3QgcmVnaXN0ZXJEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5kZWxldGUoXHJcbiAgICAgICdjb3Zlcm1lbnUvJyArIGRhdGFEZWxldGUuY3VzdG9tZXJfaGVhZGVycyxcclxuICAgICAge30sXHJcbiAgICApO1xyXG4gICAgaWYgKHJlZ2lzdGVyRGF0YS5kYXRhLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MoKTtcclxuICAgICAgLy8gZmV0Y2hPcmdhbml6YXRpb25EYXRhKCk7XHJcbiAgICAgIHNldFZpc2libGVNb2RhbERlbGV0ZShmYWxzZSk7XHJcbiAgICAgIGZldGNoQ292ZXJEYXRhKCk7XHJcbiAgICAgIC8vIGZldGNoUG9sbFF1ZXN0aW9uRGF0YSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvbkZhaWwocmVnaXN0ZXJEYXRhLmRhdGEubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25jbGlrRWRpdE1vZGFsID0gKHZhbHVlLCBvYmopID0+IHtcclxuICAgIC8vIGNvbXBhcmVTeW5jXHJcbiAgICBjb25zb2xlLmxvZygnb25jbGlrRWRpdE1vZGFsJyk7XHJcbiAgICBzZXREYXRhRWRpdChvYmopO1xyXG4gICAgc2V0VmlzaWJsZUVkaXRNb2RhbCh2YWx1ZSk7XHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0IGhpZGVFZGl0TW9kYWwgPSAoZGF0YSkgPT4ge1xyXG4gICAgLy8gc2V0VmlzaWJsZU1vZGFsRGVsZXRlKGZhbHNlKVxyXG4gICAgc2V0VmlzaWJsZUVkaXRNb2RhbChmYWxzZSk7XHJcbiAgICBpZiAoZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgIG9wZW5Ob3RpZmljYXRpb25TdWNjZXNzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvcGVuTm90aWZpY2F0aW9uRmFpbChkYXRhLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgZmV0Y2hDb3ZlckRhdGEoKTtcclxuXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICBhcGkuc3VjY2Vzcyh7XHJcbiAgICAgIG1lc3NhZ2U6IGDguJrguLHguJnguJfguLbguIHguKHguLnguKXguKrguLPguYDguKPguYfguIhgLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ+C4muC4seC4meC4l+C4tuC4geC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iCcsXHJcbiAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25GYWlsID0gbWVzc2dhZSA9PiB7XHJcbiAgICBhcGkuZXJyb3Ioe1xyXG4gICAgICBtZXNzYWdlOiBg4Lie4Lia4Lib4Lix4LiN4Lir4Liy4Lij4Liw4Lir4Lin4LmI4Liy4LiH4LiB4Liy4Lij4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54LilYCxcclxuICAgICAgZGVzY3JpcHRpb246IG1lc3NnYWUsXHJcbiAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dNb2RhbCA9IChkYXRhKSA9PiB7XHJcbiAgICBzZXREYXRhRGVsZXRlKGRhdGEpXHJcbiAgICBzZXRWaXNpYmxlTW9kYWxEZWxldGUodHJ1ZSlcclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvbkRlbGV0ZVN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICBhcGkuc3VjY2Vzcyh7XHJcbiAgICAgIG1lc3NhZ2U6IGDguKXguJrguILguYnguK3guKHguLnguKXguKrguLPguYDguKPguYfguIhgLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ+C4peC4muC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iCcsXHJcbiAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGVsZXRlSGVhZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ0RFTEVURScpXHJcbiAgICAvLyBjb25zdCBkYXRhID0ge1xyXG4gICAgLy8gICAnb3JnYW5pemF0aW9uX25hbWUnOiB2YWx1ZS5vcmdhbml6YXRpb25fbmFtZSxcclxuICAgIC8vIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBjb25zdCByZWdpc3RlckRhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmRlbGV0ZSgnY292ZXJtZW51LycgKyBkYXRhRGVsZXRlLmhlYWRlcl9pZCwge30pO1xyXG4gICAgaWYgKHJlZ2lzdGVyRGF0YS5kYXRhLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvbkRlbGV0ZVN1Y2Nlc3MoKVxyXG4gICAgICAvLyBmZXRjaE9yZ2FuaXphdGlvbkRhdGEoKTtcclxuICAgICAgc2V0VmlzaWJsZU1vZGFsRGVsZXRlKGZhbHNlKVxyXG4gICAgICBmZXRjaENvdmVyRGF0YSgpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9wZW5Ob3RpZmljYXRpb25GYWlsKHJlZ2lzdGVyRGF0YS5kYXRhLm1lc3NhZ2UpXHJcblxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBoaWRlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRWaXNpYmxlTW9kYWxEZWxldGUoZmFsc2UpXHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0IG9uRHJhZ0VuZCA9IGFzeW5jIChmcm9tSW5kZXgsIHRvSW5kZXgsIHR5cGUsIGluZGV4KSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgLyogSUdOT1JFUyBEUkFHIElGIE9VVFNJREUgREVTSUdOQVRFRCBBUkVBICovXHJcbiAgICBpZiAodG9JbmRleCA8IDApIHJldHVybjtcclxuXHJcbiAgICAvKiBSRU9SREVSIFBBUkVOVCBPUiBTVUJMSVNULCBFTFNFIFRIUk9XIEVSUk9SICovXHJcbiAgICBpZiAodHlwZSA9PT0gJ0xJU1QtSVRFTScpIHtcclxuICAgICAgY29uc3QgX2RhdGEgPSB7XHJcbiAgICAgICAgaGVhZGVyX2lkOiBxdWVzdGlvbnNbZnJvbUluZGV4XS5oZWFkZXJfaWQsXHJcbiAgICAgICAgc2VxOiB0b0luZGV4LFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBtZW51RGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkucHV0KCdjb3Zlcm1lbnUvcmVvcmRlci1tZW51JywgX2RhdGEpO1xyXG5cclxuICAgICAgY29uc3QgX2RhdGFSZXZlcnQgPSB7XHJcbiAgICAgICAgaGVhZGVyX2lkOiBxdWVzdGlvbnNbdG9JbmRleF0uaGVhZGVyX2lkLFxyXG4gICAgICAgIHNlcTogZnJvbUluZGV4LFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBtZW51RGF0YVJldmVydCA9IGF3YWl0IGFwaUluc3RhbmNlKCkucHV0KFxyXG4gICAgICAgICdjb3Zlcm1lbnUvcmVvcmRlci1tZW51JyxcclxuICAgICAgICBfZGF0YVJldmVydCxcclxuICAgICAgKTtcclxuICAgICAgLy8gY29uc29sZS5sb2cobWVudURhdGFSZXZlcnQpXHJcbiAgICAgIHJldHVybiBmZXRjaENvdmVyRGF0YSgpO1xyXG4gICAgICAvLyBjb25zdCBjYXRlZ29yaWVzID0gcmVvcmRlcihkYXRhLCBmcm9tSW5kZXgsIHRvSW5kZXgpO1xyXG4gICAgICAvLyByZXR1cm4gc2V0RGF0YShjYXRlZ29yaWVzKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1NVQkxJU1QtSVRFTScpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJyBvbkRyYWdFbmQgTElTVC1JVEVNJyk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZyb21JbmRleCk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRvSW5kZXgpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0eXBlKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhtZW51c1tpbmRleF0ubWVudV9zdWJzW2Zyb21JbmRleF0pO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhtZW51c1tpbmRleF0ubWVudV9zdWJzW3RvSW5kZXhdKTtcclxuICAgICAgLy8gY29uc3QgX2RhdGEgPSB7XHJcbiAgICAgIC8vICAgbWVudV9zdWJfaWQ6IG1lbnVzW2luZGV4XS5tZW51X3N1YnNbZnJvbUluZGV4XS5tZW51X3N1Yl9pZCxcclxuICAgICAgLy8gICBtZW51X3NlcTogdG9JbmRleCxcclxuICAgICAgLy8gfTtcclxuICAgICAgLy8gY29uc3QgbWVudURhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLnB1dCgnbWVudS9yZW9yZGVyLW1lbnUtc3ViJywgX2RhdGEpO1xyXG5cclxuICAgICAgLy8gY29uc3QgX2RhdGFSZXZlcnQgPSB7XHJcbiAgICAgIC8vICAgbWVudV9zdWJfaWQ6IG1lbnVzW2luZGV4XS5tZW51X3N1YnNbdG9JbmRleF0ubWVudV9zdWJfaWQsXHJcbiAgICAgIC8vICAgbWVudV9zZXE6IGZyb21JbmRleCxcclxuICAgICAgLy8gfTtcclxuICAgICAgLy8gY29uc3QgbWVudURhdGFSZXZlcnQgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLnB1dChcclxuICAgICAgLy8gICAnbWVudS9yZW9yZGVyLW1lbnUtc3ViJyxcclxuICAgICAgLy8gICBfZGF0YVJldmVydCxcclxuICAgICAgLy8gKTtcclxuXHJcbiAgICAgIC8vIC8vIGNvbnN0IHN1Ykxpc3QgPSByZW9yZGVyKGRhdGFbaW5kZXhdLnN1Ykxpc3QsIGZyb21JbmRleCwgdG9JbmRleCk7XHJcbiAgICAgIC8vIC8vIGNvbnN0IGNhdGVnb3JpZXMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgLy8gLy8gY2F0ZWdvcmllc1tpbmRleF0uc3ViTGlzdCA9IHN1Ykxpc3Q7XHJcbiAgICAgIC8vIC8vIHJldHVybiBzZXREYXRhKGNhdGVnb3JpZXMpO1xyXG4gICAgICAvLyByZXR1cm4gZmV0Y2goKTtcclxuICAgIH0gZWxzZSByZXR1cm4gbmV3IEVycm9yKCdOT1QgQSBWQUxJRCBMSVNUJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXRcclxuICAgICAgdGl0bGU9XCJHb3Zlcm5tZW50IC0gQWRtaW4gbWFuYWdlbWVudFwiXHJcbiAgICAgIHVybD17b3JpZ2lufVxyXG4gICAgICBvcmlnaW49e29yaWdpbn1cclxuICAgICAgLy8gdXNlcj17bG9naW59XHJcbiAgICAgIGluZGV4TWVudT17XCJzdWItNi0yXCJ9XHJcbiAgICAgIGluZGV4U3ViTWVudT17XCI2XCJ9XHJcbiAgICAgIHRpdGxlUGFnZT1cIuC4quC5iOC4p+C4meC4q+C4seC4p+C5gOC4p+C5h+C4muC5hOC4i+C4leC5jFwiXHJcbiAgICAgIF9yb3V0ZXM9e1tcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYXRoOiAnL2FkbWluL2Rhc2hib3JhZCcsXHJcbiAgICAgICAgICBicmVhZGNydW1iTmFtZTogJ+C4q+C4meC5ieC4suC4q+C4peC4seC4gScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYXRoOiAnL2FkbWluL3NldHRpbmcvY292ZXInLFxyXG4gICAgICAgICAgYnJlYWRjcnVtYk5hbWU6ICfguKrguYjguKfguJnguKvguLHguKfguYDguKfguYfguJrguYTguIvguJXguYwnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF19XHJcbiAgICA+XHJcbiAgICAgIHtjb250ZXh0SG9sZGVyfVxyXG4gICAgICA8bGlua1xyXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9yZWFjdC1xdWlsbEAxLjMuMy9kaXN0L3F1aWxsLnNub3cuY3NzXCJcclxuICAgICAgPjwvbGluaz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TW9kYWxBZGRNZW51IGZldGNoPXtmZXRjaENvdmVyRGF0YX0gdXNlcj17dXNlcn0gLz5cclxuICAgICAgICA8TW9kYWxFZGl0TWVudVxyXG4gICAgICAgICAgX3Zpc2libGU9e3Zpc2libGVFZGl0TW9kYWx9XHJcbiAgICAgICAgICBoaWRlRWRpdE1vZGFsPXtoaWRlRWRpdE1vZGFsfVxyXG4gICAgICAgICAgZmV0Y2g9e2ZldGNoQ292ZXJEYXRhfVxyXG4gICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgIGRhdGFFZGl0PXtkYXRhRWRpdH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxTcGluIHNwaW5uaW5nPXtsb2FkaW5nfT5cclxuICAgICAgICAgIDxSZWFjdERyYWdMaXN0Vmlld1xyXG4gICAgICAgICAgICBub2RlU2VsZWN0b3I9XCIuYW50LWxpc3QuZHJhZ2dhYmxlXCJcclxuICAgICAgICAgICAgbGluZUNsYXNzTmFtZT1cImRyYWdMaW5lXCJcclxuICAgICAgICAgICAgb25EcmFnRW5kPXsoZnJvbUluZGV4LCB0b0luZGV4KSA9PlxyXG4gICAgICAgICAgICAgIG9uRHJhZ0VuZChmcm9tSW5kZXgsIHRvSW5kZXgsICdMSVNULUlURU0nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsvKiB7cXVlc3Rpb25zLmxlbmd0aCA9PSAwICYmIDxFbXB0eSAvPn0gKi99XHJcbiAgICAgICAgICAgIHtxdWVzdGlvbnMubWFwKChvYmosIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgIGhlYWRlcj17XHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkuVGV4dCBzdHJvbmcgY2xhc3NOYW1lPVwiZ3JhYmJhYmxlIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPERyYWdPdXRsaW5lZCBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB7Lyoge29iai5oZWFkZXJfaW1hZ2V9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpZXc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9eycuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5vcmdhbml6YXRpb25faWQgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdcXFxcY292ZXJcXFxcJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmhlYWRlcl9pbWFnZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnNXB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIHtvYmouaGVhZGVyX2xpbmsgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+PHNwYW4gY2xhc3NOYW1lPVwibWwtOCBtbC0yIG1iLTRcIj5bIDxhIGhyZWY9e29iai5oZWFkZXJfbGlua30gdGFyZ2V0PSdfYmxhbmsnPntvYmouaGVhZGVyX2xpbmt9PC9hPiBdPC9zcGFuPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtOCBtbC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25jbGlrRWRpdE1vZGFsKHRydWUsIG9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOC5geC4geC5ieC5hOC4glxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIG1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2hvd01vZGFsKG9iail9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOC4peC4mlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5LlRleHQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcmFnZ2FibGVcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxSZWFjdERyYWdMaXN0Vmlld1xyXG4gICAgICAgICAgICAgICAgICBub2RlU2VsZWN0b3I9XCIuYW50LWxpc3QtaXRlbS5kcmFnZ2FibGUtaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgIGxpbmVDbGFzc05hbWU9XCJkcmFnTGluZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uRHJhZ0VuZD17KGZyb21JbmRleCwgdG9JbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBvbkRyYWdFbmQoZnJvbUluZGV4LCB0b0luZGV4LCAnU1VCTElTVC1JVEVNJywgaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID48L1JlYWN0RHJhZ0xpc3RWaWV3PlxyXG4gICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1JlYWN0RHJhZ0xpc3RWaWV3PlxyXG4gICAgICAgIDwvU3Bpbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwi4LiE4Li44LiT4LiV4LmJ4Lit4LiH4LiB4Liy4Lij4Lil4Lia4LiC4LmJ4Lit4Lih4Li54Lil4Lir4Lij4Li34Lit4LmE4Lih4LmIP1wiXHJcbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZU1vZGFsRGVsZXRlfVxyXG4gICAgICAgIG9uT2s9e29uRGVsZXRlSGVhZGVyfVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoaWRlTW9kYWx9XHJcbiAgICAgICAgb2tUZXh0PVwi4Lil4LiaXCJcclxuICAgICAgICBjYW5jZWxUZXh0PVwi4Lii4LiB4LmA4Lil4Li04LiBXCJcclxuICAgICAgICBva0J1dHRvblByb3BzPXt7XHJcbiAgICAgICAgICAndHlwZSc6IFwicHJpbWFyeVwiLFxyXG4gICAgICAgICAgJ2Rhbmdlcic6IHRydWVcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPHA+4LiE4Li44LiT4LiV4LmJ4Lit4LiH4LiB4Liy4Lij4Lil4LiaIFwie2RhdGFEZWxldGUgPyBkYXRhRGVsZXRlLmhlYWRlcl9pbWFnZSA6IFwiXCJ9XCIg4Lir4Lij4Li34Lit4LmE4Lih4LmIPyAgPC9wPlxyXG5cclxuICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcbi8qIGdldFNlcnZlclNpZGVQcm9wcyAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHJlcSB9ID0gY29udGV4dDtcclxuICBjb25zdCB7IG9yaWdpbiB9ID0gYWJzb2x1dGVVcmwocmVxKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG9yaWdpbixcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9