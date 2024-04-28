module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/NavBar/NavBar.js":
/*!*************************************!*\
  !*** ./components/NavBar/NavBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\govermentlt\\components\\NavBar\\NavBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // import "./NavBar.module.css";
// import logo from "./../../logo.svg";



const NavBar = ({
  menu,
  user
}) => {
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx("nav", {
    className: "navbar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "menu-t",
    type: "primary",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MenuOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 23
      }
    }),
    onClick: () => setVisible(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
    title: "\u0E40\u0E21\u0E19\u0E39",
    className: "h-screen",
    placement: "left" // onClick={() => setVisible(false)}
    ,
    onClose: () => setVisible(false),
    visible: visible,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, menu), __jsx("a", {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Image"] // width={200}
  , {
    preview: false,
    className: "h-7 w-auto",
    src: '\\images\\logo-government.png',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "flex flex-row ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "pt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    size: 30,
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UserOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 45
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, !user ? "" : user.type_user == 1 ? "ผู้ดูแลระบบ" : user.name_organizations), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, "User: ", !user ? "" : user.email))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./components/SideBar/SideBar.js":
/*!***************************************!*\
  !*** ./components/SideBar/SideBar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\govermentlt\\components\\SideBar\\SideBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import "./SideBar.module.css"

const SideBar = ({
  menu
}) => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Sider, {
    className: "sidebar h-auto",
    breakpoint: "lg",
    theme: "light",
    collapsedWidth: 0,
    trigger: null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, menu);
};

/* harmony default export */ __webpack_exports__["default"] = (SideBar);

/***/ }),

/***/ "./components/layout/LayoutAdmin.jsx":
/*!*******************************************!*\
  !*** ./components/layout/LayoutAdmin.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LayoutAdmin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../middleware/utils */ "./middleware/utils.js");
/* harmony import */ var _components_menu_TopicMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../components/menu/TopicMenu */ "./components/menu/TopicMenu.js");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../components/NavBar/NavBar */ "./components/NavBar/NavBar.js");
/* harmony import */ var _components_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../components/SideBar/SideBar */ "./components/SideBar/SideBar.js");
var _jsxFileName = "D:\\govermentlt\\components\\layout\\LayoutAdmin.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* Components */



 // import TopicMenu from "./components/TopicMenu";

 // import "./App.css";
//  import "./App.module.css";


 // import Footer from '../footer/FooterDefault';

const {
  Header,
  Footer,
  Sider,
  Content
} = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"];
const {
  SubMenu
} = antd__WEBPACK_IMPORTED_MODULE_2__["Menu"];
function LayoutAdmin({
  children,
  title = 'Government',
  description = 'Next.js with Sequelize | A boilerplate Next.js and Sequelize from dyarfi.github.io',
  keywords = 'Next.js, Sequelize, ORM, JWT, Json Web Tokens, Authentication, Application',
  type = 'object',
  url = '/',
  image = '/nextjs.svg',
  origin = '',
  index,
  props,
  _routes = [],
  indexMenu = "1",
  isMain = false,
  titlePage = "titlePage",
  indexSubMenu = ""
}) {
  const {
    0: collapsed,
    1: setCollapsed
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const topics = [{
    title: "หน้าหลัก",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["DashboardOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 32
      }
    })
  }, {
    title: "จัดการหน่วยงาน",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["ToolOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 38
      }
    })
  }, {
    title: "จัดการข่าวประชาสัมพันธ์",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["ToolOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 47
      }
    })
  }, {
    title: "จัดการวันหยุดพิเศษ",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["ToolOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 42
      }
    })
  }];
  const topics2 = [{
    title: "หน้าหลัก",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["DashboardOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 32
      }
    })
  }, {
    title: "จัดการเนื้อหา",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MailOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 37
      }
    }),
    children: [{
      title: "ข่าวกิจกรรม",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MailOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 39
        }
      })
    }, {
      title: "ข่าวประชาสัมพันธ์",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MailOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 45
        }
      })
    }, {
      title: "ข่าวจัดซื้อจัดจ้าง",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MailOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 46
        }
      })
    }, {
      title: "ลิงค์หน่วยงานที่เกี่ยวข้อง",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MailOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 54
        }
      })
    }, {
      title: "กระดานข่าว",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MailOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 38
        }
      })
    }, {
      title: "คลังเอกสาร",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MailOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 38
        }
      })
    }, {
      title: "สำรวจความคิดเห็น",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MailOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 44
        }
      })
    }, {
      title: "วารสาร",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MailOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 34
        }
      })
    }, {
      title: "รายชื่อถวายพระพร",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MailOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 44
        }
      })
    }]
  }, {
    title: "จัดการเมนู",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MailOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 34
      }
    }),
    children: [{
      title: "เมนูหลัก",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MailOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 36
        }
      })
    }, {
      title: "เมนูรอง",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MailOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 35
        }
      })
    }]
  }, {
    title: "ข้อมูลเมนูร้องทุกข์",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MailOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 43
      }
    })
  }, {
    title: "ข้อมูลเมนูติดต่อเรา",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MailOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 43
      }
    })
  }, {
    title: "รายงานสรุป",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MailOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 34
      }
    })
  }, {
    title: "ตั้งค่าระบบ",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MailOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 35
      }
    }),
    children: [{
      title: "ข้อมูลองค์กร(จัดการโลโก้)",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MailOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 53
        }
      })
    }, {
      title: "จัดการธีม",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MailOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 37
        }
      })
    }, {
      title: "ส่วนหัวเว็บไซต์",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MailOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 43
        }
      })
    }, {
      title: "จัดการอื่นๆ",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MailOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 39
        }
      })
    }]
  }];
  const {
    0: contentIndex,
    1: setContentIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: selectedKey,
    1: setSelectedKey
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("0");

  const changeSelectedKey = event => {
    const key = event.key;
    setSelectedKey(key);
    gotoPage(key); // setContentIndex(+key);
  };

  const gotoPage = key => {
    if (user.type_user == 1) {
      switch (key) {
        case "0":
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/admin/dashborad');
          break;

        case "1":
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/admin/management-organization');
          break;

        case "2":
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/admin/management-information');
          break;

        case "3":
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/admin/management-auto-landingpage');
          break;

        default:
          break;
      }
    } else {
      switch (key) {
        case "0":
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/admin/dashborad');
          break;

        case "sub-1-0":
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/admin/management/activities');
          break;

        case "sub-1-1":
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/admin/management/information');
          break;

        case "sub-1-2":
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/admin/management/purchase-news');
          break;

        case "sub-1-3":
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/admin/management/banner');
          break;

        case "sub-1-4":
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/admin/management/webboard');
          break;

        case "sub-1-5":
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/admin/management/documents');
          break;

        case "sub-1-6":
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/admin/management/polls');
          break;

        case "sub-1-7":
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/admin/management/journal');
          break;

        case "sub-1-8":
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/admin/management/blessing-list');
          break;

        case "sub-2-0":
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/admin/management-menu/primary-menu');
          break;

        case "sub-2-1":
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/admin/management-menu/secoundary-menu');
          break;

        case "3":
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/admin/management-complain');
          break;

        case "4":
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/admin/management-contact');
          break;

        case "5":
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/admin/report');
          break;

        case "sub-6-0":
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/admin/setting/profile');
          break;

        case "sub-6-1":
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/admin/setting/theme');
          break;

        case "sub-6-2":
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/admin/setting/cover');
          break;

        case "sub-6-3":
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/admin/setting/general');
          break;

        default:
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/error-404');
          break;
      }
    }
  };

  const Menu = __jsx(_components_menu_TopicMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
    topics: !user ? [] : user.type_user == 1 ? topics : topics2,
    selectedKey: indexMenu,
    changeSelectedKey: changeSelectedKey,
    selectedSubKey: indexSubMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 5
    }
  });

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchUserLogin(); // renderKeyMenu(props.asPath);
  }, []);
  const routes2 = [{
    path: 'index',
    breadcrumbName: 'home'
  }, {
    path: 'first',
    breadcrumbName: 'first'
  }, {
    path: 'second',
    breadcrumbName: 'second'
  }];

  function itemRender(route, params, routes, paths) {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 19
      }
    }, route.breadcrumbName) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      to: paths.join('/'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 57
      }
    }, route.breadcrumbName);
  }

  async function fetchUserLogin() {
    const userLogin = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["checkIsLogin"])(); // console.log(userLogin)

    setUser(userLogin);
  }

  const handleClick = () => {
    setActive(!active);
  };

  return __jsx("div", {
    className: "h-screen",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 7
    }
  }, __jsx("meta", {
    charSet: "utf-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 9
    }
  }), __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 9
    }
  }, title), __jsx("link", {
    rel: "icon",
    href: "/favicon.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "robots",
    content: "index, follow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "description",
    content: description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "keywords",
    content: keywords,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "twitter:image:src",
    content: `${origin}${image}?v=${Math.floor(Date.now() / 100)}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "twitter:card",
    content: "summary_large_image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "twitter:url",
    content: url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "twitter:title",
    content: title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "twitter:description",
    content: description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image",
    content: `${origin}${image}?v=${Math.floor(Date.now() / 100)}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:site_name",
    content: url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:type",
    content: type,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:title",
    content: title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:url",
    content: url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:description",
    content: description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 9
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap",
    rel: "stylesheet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 7
    }
  }, __jsx(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    menu: Menu,
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 9
    }
  }, __jsx(_components_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    menu: Menu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Content, {
    className: "content w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 11
    }
  }, __jsx(Content, {
    className: "w-full",
    style: {
      paddingTop: 0,
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingBottom: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 24,
    className: "pb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 19
    }
  }, isMain && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 12,
    className: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 23
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "p-1.5 items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 25
    }
  }, __jsx("h1", {
    className: "mt-4 text-4xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 27
    }
  }, titlePage))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 12,
    className: "flex items-center justify-end justify-items-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 23
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "p-1.5  justify-end justify-items-end pt-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 27
    }
  }, _routes.map((obj, index, {
    length
  }) => {
    if (index + 1 === length) {
      //last element
      return __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 40
        }
      }, obj.breadcrumbName);
    }

    return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"].Item, {
      href: obj.path,
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 38
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 33
      }
    }, obj.breadcrumbName));
  }))))), !isMain && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 24,
    className: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 23
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["PageHeader"] // ghost={false}
  , {
    onBack: () => window.history.back(),
    title: titlePage // subTitle="This is a subtitle"
    ,
    extra: [__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 29
      }
    }, _routes.map((obj, index, {
      length
    }) => {
      if (index + 1 === length) {
        //last element
        return __jsx("span", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 323,
            columnNumber: 42
          }
        }, obj.breadcrumbName);
      }

      return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"].Item, {
        href: obj.path,
        key: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 40
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 35
        }
      }, obj.breadcrumbName));
    }))],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 25
    }
  })))))), __jsx("div", {
    className: "w-full h-full",
    style: {
      padding: 24,
      background: '#fff',
      minHeight: 360
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 15
    }
  }, children))))));
}

/***/ }),

/***/ "./components/menu/TopicMenu.js":
/*!**************************************!*\
  !*** ./components/menu/TopicMenu.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\govermentlt\\components\\menu\\TopicMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const {
  SubMenu
} = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"];

const TopicMenu = ({
  topics,
  selectedKey,
  changeSelectedKey,
  selectedSubKey
}) => {
  const styledTopics = [];
  topics.forEach((topic, index) => {
    if (topic.children) {
      const styledTopicsChildren = [];
      topic.children.forEach((topicChildren, indexChildren) => {
        styledTopicsChildren.push(__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
          key: 'sub-' + index + "-" + indexChildren,
          onClick: changeSelectedKey,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 21
          }
        }, topicChildren.title));
      });
      styledTopics.push(__jsx(SubMenu, {
        key: index,
        icon: topic.icon,
        title: topic.title,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 17
        }
      }, styledTopicsChildren));
    } else {
      styledTopics.push(__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
        key: index,
        onClick: changeSelectedKey,
        icon: topic.icon,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }
      }, topic.title));
    }
  });
  styledTopics.push(__jsx("li", {
    className: "ant-menu-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "#",
    className: "w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("a", {
    style: {
      width: "100%",
      color: "#ffffff"
    },
    onClick: e => handleLogout(e),
    className: "inline-flex w-auto w-full rounded h-8 text-white bg-red-600 font-bold items-center justify-center hover:bg-red-600 hover:text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A"))));

  const handleLogout = e => {
    e.preventDefault();
    console.log("handleLogout");
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('token');
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/login');
  };

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    mode: "inline",
    selectedKeys: [selectedKey],
    defaultOpenKeys: [selectedSubKey],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, styledTopics);
};

/* harmony default export */ __webpack_exports__["default"] = (TopicMenu);

/***/ }),

/***/ "./middleware/utils.js":
/*!*****************************!*\
  !*** ./middleware/utils.js ***!
  \*****************************/
/*! exports provided: verifyToken, getAppCookies, absoluteUrl, addDays, formatDateWithoutTime, apiInstance, checkIsLogin, parseJwt, convertDateDBtoDatePickerNoTime, convertDateDBtoDatePickerWithTime, convertDatetoThaiDate, convertYeartoThaiYear, convertMonthtoThaiMonth, convertDatetoAddDB, getIPAddress, bytesToSize, bytesToMB, getDatediff, getCurrentDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyToken", function() { return verifyToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppCookies", function() { return getAppCookies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "absoluteUrl", function() { return absoluteUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDays", function() { return addDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateWithoutTime", function() { return formatDateWithoutTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiInstance", function() { return apiInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIsLogin", function() { return checkIsLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseJwt", function() { return parseJwt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDateDBtoDatePickerNoTime", function() { return convertDateDBtoDatePickerNoTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDateDBtoDatePickerWithTime", function() { return convertDateDBtoDatePickerWithTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDatetoThaiDate", function() { return convertDatetoThaiDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertYeartoThaiYear", function() { return convertYeartoThaiYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertMonthtoThaiMonth", function() { return convertMonthtoThaiMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDatetoAddDB", function() { return convertDatetoAddDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIPAddress", function() { return getIPAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bytesToSize", function() { return bytesToSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bytesToMB", function() { return bytesToMB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDatediff", function() { return getDatediff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentDate", function() { return getCurrentDate; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





const SECRET_KEY = process.env.JWT_KEY;
/*
 * @params {jwtToken} extracted from cookies
 * @return {object} object of extracted token
 */

function verifyToken(jwtToken) {
  try {
    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.verify(jwtToken, SECRET_KEY);
  } catch (e) {
    console.log('e:', e);
    return null;
  }
}
/*
 * @params {request} extracted from request response
 * @return {object} object of parse jwt cookie decode object
 */

function getAppCookies(req) {
  const parsedItems = {};

  if (req.headers.cookie) {
    const cookiesItems = req.headers.cookie.split('; ');
    cookiesItems.forEach(cookies => {
      const parsedItem = cookies.split('=');
      parsedItems[parsedItem[0]] = decodeURI(parsedItem[1]);
    });
  }

  return parsedItems;
}
/*
 * @params {request} extracted from request response, {setLocalhost} your localhost address
 * @return {object} objects of protocol, host and origin
 */

function absoluteUrl(req, setLocalhost) {
  var protocol = 'https:';
  var host = req ? req.headers['x-forwarded-host'] || req.headers['host'] : window.location.host;

  if (host.indexOf('localhost') > -1) {
    if (setLocalhost) host = setLocalhost;
    protocol = 'http:';
  }

  return {
    protocol: protocol,
    host: host,
    origin: protocol + '//' + host,
    url: req
  };
}
function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
} //YYYY-MM-DD

function formatDateWithoutTime(date) {
  var dateString = date.getUTCFullYear() + "-" + ("0" + (date.getUTCMonth() + 1)).slice(-2) + "-" + ("0" + date.getUTCDate()).slice(-2) + " ";
  return dateString;
} // const api = process.env.PUBLIC_URL

const apiInstance = () => {
  // const authorization = store.getState().userState.token ? store.getState().userState.token : null
  // const headers = {
  // 	'x-api-token': authorization ? authorization : '',
  // }
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
    baseURL: '/api' // headers,

  });
};
const checkIsLogin = () => {
  // console.log("checkIsLogin")
  var token = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('token'); // => 'value'

  if (!token) {
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/login');
    return;
  } // console.log(parseJwt(token))


  return parseJwt(token);
};
function parseJwt(token) {
  var isExpired = false; // const token = localStorage.getItem('id_token');

  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  var _jsonPayload = JSON.parse(jsonPayload);

  var dateNow = new Date(); // console.log(parseInt(_jsonPayload.exp))
  // console.log(parseInt((dateNow.getTime()).toString().substring(0,10)))

  if (parseInt(_jsonPayload.exp) < parseInt(dateNow.getTime().toString().substring(0, 10))) {
    console.log("true");
    isExpired = true;
  }

  if (isExpired) {
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/login');
    return "";
  }

  return _jsonPayload;
}
;
function convertDateDBtoDatePickerNoTime(date) {
  try {
    var dateSplit = date.toString().split("T");
    return dateSplit[0];
  } catch (error) {
    return "";
  }
}
function convertDateDBtoDatePickerWithTime(date) {
  try {
    //:07.000Z
    //SampleText.replace("Developer", "App Builder");
    var dateSplit = date.toString().split("T");
    return dateSplit[0] + " " + dateSplit[1].replace(".000Z", "");
  } catch (error) {
    return "";
  }
}
function convertDatetoThaiDate(date) {
  var _date = convertDateDBtoDatePickerNoTime(date);

  var dateSplit = _date.toString().split("-"); // 2021-09-16


  return dateSplit[2] + " " + convertMonthtoThaiMonth(dateSplit[1]) + " " + convertYeartoThaiYear(dateSplit[0]);
}
function convertYeartoThaiYear(year) {
  return parseInt(year) + 543;
}
function convertMonthtoThaiMonth(month) {
  switch (month) {
    case "01":
      return "มกราคม";

    case "02":
      return "กุมภาพันธ์";

    case "03":
      return "มีนาคม";

    case "04":
      return "เมษายน";

    case "05":
      return "พฤษภาคม";

    case "06":
      return "มิถุนายน";

    case "07":
      return "กรกฎาคม";

    case "08":
      return "สิงหาคม";

    case "09":
      return "กันยายน";

    case "10":
      return "ตุลาคม";

    case "11":
      return "พฤศจิกายน";

    case "12":
      return "ธันวาคม";

    default:
      return "NAN";
  }
}
function convertDatetoAddDB(date) {
  var dateSplit = date.split(" ");
  return dateSplit[0] + "T" + dateSplit[1] + "+00:00";
}
async function getIPAddress() {
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://geolocation-db.com/json/'); // console.log(res.data);
  // return res.data

  return "country_code:" + res.data.country_code + ",country_name:" + res.data.country_name + ",city:" + res.data.city + ",postal:" + res.data.postal + ",latitude:" + res.data.latitude + ",longitude:" + res.data.longitude + ",IPv4:" + res.data.IPv4 + ",state:" + res.data.state; // setIP(res.data.IPv4)
  // return
}
function bytesToSize(bytes) {
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes == 0) return '0 Byte';
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}
function bytesToMB(bytes) {
  return Number.parseFloat(bytes / (1024 * 1024)).toFixed(2);
}
async function getDatediff(startDate) {
  const timeEnd = moment__WEBPACK_IMPORTED_MODULE_3___default()();
  const newStartDate = new Date(startDate);
  const newEndDate = new Date(timeEnd);
  const one_day = 1000 * 60 * 60 * 24;
  let result;
  result = Math.ceil((newStartDate.getTime() - newEndDate.getTime()) / one_day);
  console.log('date Converter result', result);
  return result - 1;
}
function getCurrentDate(separator = '') {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__(/*! url */ "url");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "url");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/admin/management-auto-landingpage/index.js":
/*!**********************************************************!*\
  !*** ./pages/admin/management-auto-landingpage/index.js ***!
  \**********************************************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../middleware/utils */ "./middleware/utils.js");
/* harmony import */ var _components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/layout/LayoutAdmin */ "./components/layout/LayoutAdmin.jsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\govermentlt\\pages\\admin\\management-auto-landingpage\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* utils */


/* components */

 // import UserNav from '../components/navigation/User';



const {
  Search
} = antd__WEBPACK_IMPORTED_MODULE_5__["Input"];
function Home(props) {
  const {
    user,
    origin
  } = props;
  const {
    0: login,
    1: setLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [api, contextHolder] = antd__WEBPACK_IMPORTED_MODULE_5__["notification"].useNotification();
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: dataDelete,
    1: setDataDelete
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: filters,
    1: setFilters
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: pagination,
    1: setPagination
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    current: 1,
    pageSize: 10
  });
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: visibleModalDelete,
    1: setVisibleModalDelete
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const columns = [{
    title: 'ชื่อ landing page',
    dataIndex: 'intro_title',
    sorter: true // render: name => `${name.first} ${name.last}`,
    // width: '20%',
    // defaultSortOrder: 'descend',

  }, {
    title: 'ช่วงเวลาที่แสดง',
    dataIndex: '',
    sorter: true,
    key: 'intro_date_s',
    render: data => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }
    }, " ", Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_3__["convertDatetoThaiDate"])(Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_3__["convertDateDBtoDatePickerNoTime"])(data.intro_date_s)), " \u0E16\u0E36\u0E07 ", Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_3__["convertDatetoThaiDate"])(Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_3__["convertDateDBtoDatePickerNoTime"])(data.intro_date_e)))) // render: name => `${name.first} ${name.last}`,
    // width: '20%',
    // defaultSortOrder: 'descend',

  }, {
    title: 'สถานะการใช้งาน',
    dataIndex: '',
    sorter: true,
    key: 'is_use',
    render: data => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }
    }, " ", data.is_use ? "ใช้งาน" : "ไม่ใช้งาน")) // render: name => `${name.first} ${name.last}`,
    // width: '20%',
    // defaultSortOrder: 'descend',

  }, {
    title: '',
    dataIndex: '',
    key: 'x',
    render: data => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      type: "primary",
      size: "default",
      onClick: () => gotoPage(data.intro_id),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }
    }, " \u0E41\u0E01\u0E49\u0E44\u0E02 "), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      className: "ml-1",
      type: "danger",
      onClick: () => showModal(data),
      size: "default",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }
    }, " \u0E25\u0E1A "))
  } // {
  //   title: 'Gender',
  //   dataIndex: 'gender',
  //   // filters: [
  //   //   { text: 'Male', value: 'male' },
  //   //   { text: 'Female', value: 'female' },
  //   // ],
  //   width: '20%',
  // },
  // {
  //   title: 'Email',
  //   dataIndex: 'email',
  // },
  ];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetch({
      pagination
    });
  }, []);

  const fetch = async (params = {}) => {
    setLoading(true);
    const addactivitiesData = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_3__["apiInstance"])().get('admin/management/landing-page?isAdmin=1&results=' + params.pagination.pageSize + '&page=' + params.pagination.current + "&search=" + search + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters);
    setData(addactivitiesData.data.results);
    setPagination(_objectSpread(_objectSpread({}, params.pagination), {}, {
      total: addactivitiesData.data.totalCount // 200 is mock data, you should read it from server
      // total: data.totalCount,

    }));
    setLoading(false);
  };

  const showModal = data => {
    console.log('data deletd');
    console.log(data);
    setDataDelete(data);
    setVisibleModalDelete(true);
  };

  const gotoPage = id => {
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/admin/management-auto-landingpage/landing-page/' + id);
  };

  const onSearch = async _search => {
    setLoading(true);
    setSearch(_search);
    setPagination({
      pageSize: pagination.pageSize,
      current: 1
    });
    const anding_pageData = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_3__["apiInstance"])().get('admin/management/landing-page?isAdmin=1&results=' + pagination.pageSize + '&page=1&search=' + _search + "&filters=" + filters);
    setData(anding_pageData.data.results);
    setLoading(false);
  };

  const handleTableChange = (pagination, filters, sorter) => {
    console.log(sorter);
    setPagination({
      pageSize: pagination.pageSize,
      current: pagination.current
    });
    setFilters(filters.package);
    fetch({
      sortField: sorter.columnKey,
      sortOrder: sorter.order,
      pagination,
      filters: filters.package
    });
  };

  const onDelete = async () => {
    // console.log('DELETE')
    // const data = {
    //   'organization_name': value.organization_name,
    // }
    // console.log(data)
    const registerData = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_3__["apiInstance"])().delete('admin/management/landing-page/' + dataDelete.intro_id, {});

    if (registerData.data.status == 200) {
      openNotificationSuccess(); // fetchOrganizationData();

      setVisibleModalDelete(false);
      fetch({
        pagination
      });
    } else {
      openNotificationFail(registerData.data.message);
    }
  };

  const hideModal = () => {
    setVisibleModalDelete(false);
  };

  const openNotificationSuccess = () => {
    api.success({
      message: `ลบข้อมูลสำเร็จ`,
      description: 'ลบข้อมูลสำเร็จ',
      placement: 'topRight'
    });
  };

  const openNotificationFail = messgae => {
    api.error({
      message: `พบปัญหาระหว่างการลบข้อมูล`,
      description: messgae,
      placement: 'topRight'
    });
  };

  return __jsx(_components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_4__["default"], {
    titlePage: "จัดการหน้า landing page",
    isMain: true,
    indexMenu: "3",
    title: "Government - Admin management",
    url: origin,
    origin: origin,
    user: login,
    props: props,
    _routes: [{
      path: '/admin/dashborad',
      breadcrumbName: 'หน้าหลัก'
    }, {
      path: '/admin/management-auto-landingpage',
      breadcrumbName: 'จัดการหน้า landing page'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }
  }, contextHolder, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    span: 24,
    className: " pb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    span: 18,
    className: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/admin/management-auto-landingpage/add-landingpage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 19
    }
  }, __jsx("a", {
    //onClick={(e) => handleLogout(e)}
    className: "lg:inline-flex lg:w-auto w-full px-2 py-2 rounded h-8 text-white bg-green-600 font-bold items-center justify-center hover:bg-green-600 hover:text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 21
    }
  }, "\u0E40\u0E1E\u0E34\u0E48\u0E21 landing page")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    span: 6,
    className: "flex items-center justify-end justify-items-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: " justify-end justify-items-end ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 17
    }
  }, __jsx(Search, {
    placeholder: "input search text",
    onSearch: onSearch,
    enterButton: true,
    allowClear: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 19
    }
  })))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Table"], {
    columns: columns,
    rowKey: record => record.intro_id,
    dataSource: data,
    pagination: pagination,
    loading: loading,
    onChange: handleTableChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    title: "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?",
    visible: visibleModalDelete,
    onOk: onDelete,
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
      lineNumber: 249,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 9
    }
  }, "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A \"", dataDelete ? dataDelete.intro_title : "", "\" \u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?  ")));
}
/* getServerSideProps */

async function getServerSideProps(context) {
  const {
    req
  } = context;
  const {
    origin
  } = Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_3__["absoluteUrl"])(req);
  return {
    props: {
      origin
    }
  };
}

/***/ }),

/***/ 13:
/*!****************************************************************!*\
  !*** multi ./pages/admin/management-auto-landingpage/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\govermentlt\pages\admin\management-auto-landingpage\index.js */"./pages/admin/management-auto-landingpage/index.js");


/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdkJhci9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaWRlQmFyL1NpZGVCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0QWRtaW4uanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9Ub3BpY01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4vbWFuYWdlbWVudC1hdXRvLWxhbmRpbmdwYWdlL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJOYXZCYXIiLCJtZW51IiwidXNlciIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlU3RhdGUiLCJ0eXBlX3VzZXIiLCJuYW1lX29yZ2FuaXphdGlvbnMiLCJlbWFpbCIsIlNpZGVCYXIiLCJIZWFkZXIiLCJGb290ZXIiLCJTaWRlciIsIkNvbnRlbnQiLCJMYXlvdXQiLCJTdWJNZW51IiwiTWVudSIsIkxheW91dEFkbWluIiwiY2hpbGRyZW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJ0eXBlIiwidXJsIiwiaW1hZ2UiLCJvcmlnaW4iLCJpbmRleCIsInByb3BzIiwiX3JvdXRlcyIsImluZGV4TWVudSIsImlzTWFpbiIsInRpdGxlUGFnZSIsImluZGV4U3ViTWVudSIsImNvbGxhcHNlZCIsInNldENvbGxhcHNlZCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInNldFVzZXIiLCJ0b3BpY3MiLCJpY29uIiwidG9waWNzMiIsImNvbnRlbnRJbmRleCIsInNldENvbnRlbnRJbmRleCIsInNlbGVjdGVkS2V5Iiwic2V0U2VsZWN0ZWRLZXkiLCJjaGFuZ2VTZWxlY3RlZEtleSIsImV2ZW50Iiwia2V5IiwiZ290b1BhZ2UiLCJSb3V0ZXIiLCJwdXNoIiwidXNlRWZmZWN0IiwiZmV0Y2hVc2VyTG9naW4iLCJyb3V0ZXMyIiwicGF0aCIsImJyZWFkY3J1bWJOYW1lIiwiaXRlbVJlbmRlciIsInJvdXRlIiwicGFyYW1zIiwicm91dGVzIiwicGF0aHMiLCJsYXN0IiwiaW5kZXhPZiIsImxlbmd0aCIsImpvaW4iLCJ1c2VyTG9naW4iLCJjaGVja0lzTG9naW4iLCJoYW5kbGVDbGljayIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nQm90dG9tIiwibWFwIiwib2JqIiwid2luZG93IiwiaGlzdG9yeSIsImJhY2siLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsIm1pbkhlaWdodCIsIlRvcGljTWVudSIsInNlbGVjdGVkU3ViS2V5Iiwic3R5bGVkVG9waWNzIiwiZm9yRWFjaCIsInRvcGljIiwic3R5bGVkVG9waWNzQ2hpbGRyZW4iLCJ0b3BpY0NoaWxkcmVuIiwiaW5kZXhDaGlsZHJlbiIsIndpZHRoIiwiY29sb3IiLCJlIiwiaGFuZGxlTG9nb3V0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiQ29va2llcyIsInJlbW92ZSIsIlNFQ1JFVF9LRVkiLCJwcm9jZXNzIiwiZW52IiwiSldUX0tFWSIsInZlcmlmeVRva2VuIiwiand0VG9rZW4iLCJqd3QiLCJ2ZXJpZnkiLCJnZXRBcHBDb29raWVzIiwicmVxIiwicGFyc2VkSXRlbXMiLCJoZWFkZXJzIiwiY29va2llIiwiY29va2llc0l0ZW1zIiwic3BsaXQiLCJjb29raWVzIiwicGFyc2VkSXRlbSIsImRlY29kZVVSSSIsImFic29sdXRlVXJsIiwic2V0TG9jYWxob3N0IiwicHJvdG9jb2wiLCJob3N0IiwibG9jYXRpb24iLCJhZGREYXlzIiwiZGF0ZSIsImRheXMiLCJyZXN1bHQiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImZvcm1hdERhdGVXaXRob3V0VGltZSIsImRhdGVTdHJpbmciLCJnZXRVVENGdWxsWWVhciIsImdldFVUQ01vbnRoIiwic2xpY2UiLCJnZXRVVENEYXRlIiwiYXBpSW5zdGFuY2UiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJ0b2tlbiIsImdldCIsInBhcnNlSnd0IiwiaXNFeHBpcmVkIiwiYmFzZTY0VXJsIiwiYmFzZTY0IiwicmVwbGFjZSIsImpzb25QYXlsb2FkIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiYXRvYiIsImMiLCJjaGFyQ29kZUF0IiwidG9TdHJpbmciLCJfanNvblBheWxvYWQiLCJKU09OIiwicGFyc2UiLCJkYXRlTm93IiwicGFyc2VJbnQiLCJleHAiLCJnZXRUaW1lIiwic3Vic3RyaW5nIiwiY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZSIsImRhdGVTcGxpdCIsImVycm9yIiwiY29udmVydERhdGVEQnRvRGF0ZVBpY2tlcldpdGhUaW1lIiwiY29udmVydERhdGV0b1RoYWlEYXRlIiwiX2RhdGUiLCJjb252ZXJ0TW9udGh0b1RoYWlNb250aCIsImNvbnZlcnRZZWFydG9UaGFpWWVhciIsInllYXIiLCJtb250aCIsImNvbnZlcnREYXRldG9BZGREQiIsImdldElQQWRkcmVzcyIsInJlcyIsImRhdGEiLCJjb3VudHJ5X2NvZGUiLCJjb3VudHJ5X25hbWUiLCJjaXR5IiwicG9zdGFsIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJJUHY0Iiwic3RhdGUiLCJieXRlc1RvU2l6ZSIsImJ5dGVzIiwic2l6ZXMiLCJpIiwicm91bmQiLCJwb3ciLCJieXRlc1RvTUIiLCJOdW1iZXIiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImdldERhdGVkaWZmIiwic3RhcnREYXRlIiwidGltZUVuZCIsIm1vbWVudCIsIm5ld1N0YXJ0RGF0ZSIsIm5ld0VuZERhdGUiLCJvbmVfZGF5IiwiY2VpbCIsImdldEN1cnJlbnREYXRlIiwic2VwYXJhdG9yIiwibmV3RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJocmVmIiwiYXMiLCJmb3JtYXRGdW5jIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwcmVmZXRjaGVkIiwib2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJnZXRPYnNlcnZlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0VXJsIiwiYXNIcmVmIiwibm9kZU5hbWUiLCJ0YXJnZXQiLCJpc0xvY2FsIiwic2Nyb2xsIiwic2hhbGxvdyIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJyZXNvbHZlZEhyZWYiLCJwYXJzZWRBcyIsImhhbmRsZVJlZiIsInJlZiIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwiZXJyIiwicmVuZGVyIiwiY2hpbGQiLCJDaGlsZHJlbiIsImVsIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwiUmVhY3QiLCJ3YXJuIiwiUHJvcFR5cGVzIiwicmVxdWlyZSIsImV4YWN0IiwiTGluayIsInBhc3NIcmVmIiwidmFsdWUiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInByZXBhcmVSb3V0ZSIsInRvUm91dGUiLCJhdHRlbXB0cyIsImlzU2VydmVyUmVuZGVyIiwicGF0aG5hbWUiLCJhZGRCYXNlUGF0aCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiZGVsQmFzZVBhdGgiLCJjcmVkZW50aWFscyIsImdldFJlc3BvbnNlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIlByb21pc2UiLCJmZXRjaE5leHREYXRhIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJ1cGRhdGUiLCJtb2QiLCJuZXdEYXRhIiwicmVsb2FkIiwib3B0aW9ucyIsImNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyZXNvbHZlIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJyZWplY3QiLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJmZXRjaENvbXBvbmVudCIsImNhbmNlbGxlZCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5IiwiVEVTVF9ST1VURSIsInJlIiwiZGVjb2RlIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsImVzY2FwZWRSb3V0ZSIsImVzY2FwZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsImlzT3B0aW9uYWwiLCIkMSIsImlzQ2F0Y2hBbGwiLCJwb3MiLCJyZXBlYXQiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJTZWFyY2giLCJJbnB1dCIsIkhvbWUiLCJsb2dpbiIsInNldExvZ2luIiwiYXBpIiwiY29udGV4dEhvbGRlciIsIm5vdGlmaWNhdGlvbiIsInVzZU5vdGlmaWNhdGlvbiIsInNlYXJjaCIsInNldFNlYXJjaCIsInNldERhdGEiLCJkYXRhRGVsZXRlIiwic2V0RGF0YURlbGV0ZSIsImZpbHRlcnMiLCJzZXRGaWx0ZXJzIiwicGFnaW5hdGlvbiIsInNldFBhZ2luYXRpb24iLCJjdXJyZW50IiwicGFnZVNpemUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInZpc2libGVNb2RhbERlbGV0ZSIsInNldFZpc2libGVNb2RhbERlbGV0ZSIsImNvbHVtbnMiLCJkYXRhSW5kZXgiLCJzb3J0ZXIiLCJpbnRyb19kYXRlX3MiLCJpbnRyb19kYXRlX2UiLCJpc191c2UiLCJpbnRyb19pZCIsInNob3dNb2RhbCIsImZldGNoIiwiYWRkYWN0aXZpdGllc0RhdGEiLCJzb3J0RmllbGQiLCJzb3J0T3JkZXIiLCJyZXN1bHRzIiwidG90YWwiLCJ0b3RhbENvdW50IiwiaWQiLCJvblNlYXJjaCIsIl9zZWFyY2giLCJhbmRpbmdfcGFnZURhdGEiLCJoYW5kbGVUYWJsZUNoYW5nZSIsInBhY2thZ2UiLCJjb2x1bW5LZXkiLCJvcmRlciIsIm9uRGVsZXRlIiwicmVnaXN0ZXJEYXRhIiwiZGVsZXRlIiwic3RhdHVzIiwib3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MiLCJvcGVuTm90aWZpY2F0aW9uRmFpbCIsImhpZGVNb2RhbCIsInBsYWNlbWVudCIsIm1lc3NnYWUiLCJyZWNvcmQiLCJpbnRyb190aXRsZSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFB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ZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pblxcbWFuYWdlbWVudC1hdXRvLWxhbmRpbmdwYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEzKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRHJhd2VyLCBCdXR0b24sIEltYWdlLCBBdmF0YXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBNZW51T3V0bGluZWQsIFVzZXJPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbi8vIGltcG9ydCBcIi4vTmF2QmFyLm1vZHVsZS5jc3NcIjtcclxuLy8gaW1wb3J0IGxvZ28gZnJvbSBcIi4vLi4vLi4vbG9nby5zdmdcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IE5hdkJhciA9ICh7IG1lbnUsIHVzZXIgfSkgPT4ge1xyXG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtdFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBpY29uPXs8TWVudU91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZSh0cnVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCLguYDguKHguJnguLlcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1zY3JlZW5cIlxyXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50PVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFZpc2libGUoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge21lbnV9XHJcbiAgICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTcgdy1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9eydcXFxcaW1hZ2VzXFxcXGxvZ28tZ292ZXJubWVudC5wbmcnfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzaXplPXszMH0gaWNvbj17PFVzZXJPdXRsaW5lZCAvPn0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57IXVzZXIgPyBcIlwiIDogdXNlci50eXBlX3VzZXIgPT0gMSA/IFwi4Lic4Li54LmJ4LiU4Li54LmB4Lil4Lij4Liw4Lia4LiaXCIgOiB1c2VyLm5hbWVfb3JnYW5pemF0aW9uc308L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlVzZXI6IHshdXNlciA/IFwiXCIgOiB1c2VyLmVtYWlsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUxvZ291dChlKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCBsZzp3LWF1dG8gdy1mdWxsIHB4LTIgcHktMiByb3VuZGVkIGgtOCB0ZXh0LXdoaXRlIGJnLXJlZC02MDAgZm9udC1ib2xkIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBob3ZlcjpiZy1yZWQtNjAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIOC4reC4reC4geC4iOC4suC4geC4o+C4sOC4muC4mlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+ICovfVxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gXCJhbnRkXCI7XHJcbi8vIGltcG9ydCBcIi4vU2lkZUJhci5tb2R1bGUuY3NzXCJcclxuY29uc3QgU2lkZUJhciA9ICh7IG1lbnUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0LlNpZGVyXHJcbiAgICAgIGNsYXNzTmFtZT1cInNpZGViYXIgaC1hdXRvXCJcclxuICAgICAgYnJlYWtwb2ludD17XCJsZ1wifVxyXG4gICAgICB0aGVtZT1cImxpZ2h0XCJcclxuICAgICAgY29sbGFwc2VkV2lkdGg9ezB9XHJcbiAgICAgIHRyaWdnZXI9e251bGx9XHJcbiAgICA+XHJcbiAgICAgICAge21lbnV9XHJcbiAgICA8L0xheW91dC5TaWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhcjsiLCJpbXBvcnQge1xyXG4gIERhc2hib2FyZE91dGxpbmVkLCBNYWlsT3V0bGluZWQsIFRvb2xPdXRsaW5lZFxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgQnJlYWRjcnVtYiwgQ29sLCBMYXlvdXQsIE1lbnUsIFBhZ2VIZWFkZXIsIFJvdyB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG4vKiBDb21wb25lbnRzICovXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjaGVja0lzTG9naW4gfSBmcm9tICcuLi8uLi9taWRkbGV3YXJlL3V0aWxzJztcclxuLy8gaW1wb3J0IFRvcGljTWVudSBmcm9tIFwiLi9jb21wb25lbnRzL1RvcGljTWVudVwiO1xyXG5pbXBvcnQgVG9waWNNZW51IGZyb20gXCIuLy4uLy4uL2NvbXBvbmVudHMvbWVudS9Ub3BpY01lbnVcIjtcclxuLy8gaW1wb3J0IFwiLi9BcHAuY3NzXCI7XHJcbi8vICBpbXBvcnQgXCIuL0FwcC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4vLi4vLi4vY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyXCI7XHJcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuLy4uLy4uL2NvbXBvbmVudHMvU2lkZUJhci9TaWRlQmFyXCI7XHJcbi8vIGltcG9ydCBGb290ZXIgZnJvbSAnLi4vZm9vdGVyL0Zvb3RlckRlZmF1bHQnO1xyXG5jb25zdCB7IEhlYWRlciwgRm9vdGVyLCBTaWRlciwgQ29udGVudCB9ID0gTGF5b3V0O1xyXG5cclxuY29uc3QgeyBTdWJNZW51IH0gPSBNZW51O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dEFkbWluKHtcclxuICBjaGlsZHJlbixcclxuICB0aXRsZSA9ICdHb3Zlcm5tZW50JyxcclxuICBkZXNjcmlwdGlvbiA9ICdOZXh0LmpzIHdpdGggU2VxdWVsaXplIHwgQSBib2lsZXJwbGF0ZSBOZXh0LmpzIGFuZCBTZXF1ZWxpemUgZnJvbSBkeWFyZmkuZ2l0aHViLmlvJyxcclxuICBrZXl3b3JkcyA9ICdOZXh0LmpzLCBTZXF1ZWxpemUsIE9STSwgSldULCBKc29uIFdlYiBUb2tlbnMsIEF1dGhlbnRpY2F0aW9uLCBBcHBsaWNhdGlvbicsXHJcbiAgdHlwZSA9ICdvYmplY3QnLFxyXG4gIHVybCA9ICcvJyxcclxuICBpbWFnZSA9ICcvbmV4dGpzLnN2ZycsXHJcbiAgb3JpZ2luID0gJycsXHJcbiAgaW5kZXgsXHJcbiAgcHJvcHMsXHJcbiAgX3JvdXRlcyA9IFtdLFxyXG4gIGluZGV4TWVudSA9IFwiMVwiLFxyXG4gIGlzTWFpbiA9IGZhbHNlLFxyXG4gIHRpdGxlUGFnZSA9IFwidGl0bGVQYWdlXCIsXHJcbiAgaW5kZXhTdWJNZW51ID0gXCJcIlxyXG59KSB7XHJcbiAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgY29uc3QgdG9waWNzID0gW1xyXG4gICAgeyB0aXRsZTogXCLguKvguJnguYnguLLguKvguKXguLHguIFcIiwgaWNvbjogPCBEYXNoYm9hcmRPdXRsaW5lZCAvPiB9LFxyXG4gICAgeyB0aXRsZTogXCLguIjguLHguJTguIHguLLguKPguKvguJnguYjguKfguKLguIfguLLguJlcIiwgaWNvbjogPCBUb29sT3V0bGluZWQgLz4gfSxcclxuICAgIHsgdGl0bGU6IFwi4LiI4Lix4LiU4LiB4Liy4Lij4LiC4LmI4Liy4Lin4Lib4Lij4Liw4LiK4Liy4Liq4Lix4Lih4Lie4Lix4LiZ4LiY4LmMXCIsIGljb246IDwgVG9vbE91dGxpbmVkIC8+IH0sXHJcbiAgICB7IHRpdGxlOiBcIuC4iOC4seC4lOC4geC4suC4o+C4p+C4seC4meC4q+C4ouC4uOC4lOC4nuC4tOC5gOC4qOC4qVwiLCBpY29uOiA8IFRvb2xPdXRsaW5lZCAvPiB9LF07XHJcbiAgY29uc3QgdG9waWNzMiA9IFtcclxuICAgIHsgdGl0bGU6IFwi4Lir4LiZ4LmJ4Liy4Lir4Lil4Lix4LiBXCIsIGljb246IDwgRGFzaGJvYXJkT3V0bGluZWQgLz4gfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwi4LiI4Lix4LiU4LiB4Liy4Lij4LmA4LiZ4Li34LmJ4Lit4Lir4LiyXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+LFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIHsgdGl0bGU6IFwi4LiC4LmI4Liy4Lin4LiB4Li04LiI4LiB4Lij4Lij4LihXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+IH0sXHJcbiAgICAgICAgeyB0aXRsZTogXCLguILguYjguLLguKfguJvguKPguLDguIrguLLguKrguLHguKHguJ7guLHguJnguJjguYxcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgICAgICB7IHRpdGxlOiBcIuC4guC5iOC4suC4p+C4iOC4seC4lOC4i+C4t+C5ieC4reC4iOC4seC4lOC4iOC5ieC4suC4h1wiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAgICAgIHsgdGl0bGU6IFwi4Lil4Li04LiH4LiE4LmM4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZ4LiX4Li14LmI4LmA4LiB4Li14LmI4Lii4Lin4LiC4LmJ4Lit4LiHXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+IH0sXHJcbiAgICAgICAgeyB0aXRsZTogXCLguIHguKPguLDguJTguLLguJnguILguYjguLLguKdcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgICAgICB7IHRpdGxlOiBcIuC4hOC4peC4seC4h+C5gOC4reC4geC4quC4suC4o1wiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAgICAgIHsgdGl0bGU6IFwi4Liq4Liz4Lij4Lin4LiI4LiE4Lin4Liy4Lih4LiE4Li04LiU4LmA4Lir4LmH4LiZXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+IH0sXHJcbiAgICAgICAgeyB0aXRsZTogXCLguKfguLLguKPguKrguLLguKNcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgICAgICB7IHRpdGxlOiBcIuC4o+C4suC4ouC4iuC4t+C5iOC4reC4luC4p+C4suC4ouC4nuC4o+C4sOC4nuC4o1wiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCLguIjguLHguJTguIHguLLguKPguYDguKHguJnguLlcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4sXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgeyB0aXRsZTogXCLguYDguKHguJnguLnguKvguKXguLHguIFcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgICAgICB7IHRpdGxlOiBcIuC5gOC4oeC4meC4ueC4o+C4reC4h1wiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAgeyB0aXRsZTogXCLguILguYnguK3guKHguLnguKXguYDguKHguJnguLnguKPguYnguK3guIfguJfguLjguIHguILguYxcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgIHsgdGl0bGU6IFwi4LiC4LmJ4Lit4Lih4Li54Lil4LmA4Lih4LiZ4Li54LiV4Li04LiU4LiV4LmI4Lit4LmA4Lij4LiyXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+IH0sXHJcbiAgICB7IHRpdGxlOiBcIuC4o+C4suC4ouC4h+C4suC4meC4quC4o+C4uOC4m1wiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCLguJXguLHguYnguIfguITguYjguLLguKPguLDguJrguJpcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4sXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgeyB0aXRsZTogXCLguILguYnguK3guKHguLnguKXguK3guIfguITguYzguIHguKMo4LiI4Lix4LiU4LiB4Liy4Lij4LmC4Lil4LmC4LiB4LmJKVwiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAgICAgIHsgdGl0bGU6IFwi4LiI4Lix4LiU4LiB4Liy4Lij4LiY4Li14LihXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+IH0sXHJcbiAgICAgICAgeyB0aXRsZTogXCLguKrguYjguKfguJnguKvguLHguKfguYDguKfguYfguJrguYTguIvguJXguYxcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgICAgICB7IHRpdGxlOiBcIuC4iOC4seC4lOC4geC4suC4o+C4reC4t+C5iOC4meC5hlwiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgY29uc3QgW2NvbnRlbnRJbmRleCwgc2V0Q29udGVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzZWxlY3RlZEtleSwgc2V0U2VsZWN0ZWRLZXldID0gdXNlU3RhdGUoXCIwXCIpO1xyXG4gIGNvbnN0IGNoYW5nZVNlbGVjdGVkS2V5ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBrZXkgPSBldmVudC5rZXk7XHJcbiAgICBzZXRTZWxlY3RlZEtleShrZXkpO1xyXG4gICAgZ290b1BhZ2Uoa2V5KTtcclxuICAgIC8vIHNldENvbnRlbnRJbmRleCgra2V5KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnb3RvUGFnZSA9IChrZXkpID0+IHtcclxuXHJcbiAgICBpZiAodXNlci50eXBlX3VzZXIgPT0gMSkge1xyXG4gICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2UgXCIwXCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL2Rhc2hib3JhZCcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC1vcmdhbml6YXRpb24nKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCIyXCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQtaW5mb3JtYXRpb24nKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQtYXV0by1sYW5kaW5ncGFnZScpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2UgXCIwXCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL2Rhc2hib3JhZCcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN1Yi0xLTBcIjpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC9hY3Rpdml0aWVzJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTEtMVwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50L2luZm9ybWF0aW9uJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTEtMlwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50L3B1cmNoYXNlLW5ld3MnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzdWItMS0zXCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQvYmFubmVyJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTEtNFwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50L3dlYmJvYXJkJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTEtNVwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50L2RvY3VtZW50cycpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN1Yi0xLTZcIjpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC9wb2xscycpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN1Yi0xLTdcIjpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC9qb3VybmFsJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTEtOFwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50L2JsZXNzaW5nLWxpc3QnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzdWItMi0wXCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQtbWVudS9wcmltYXJ5LW1lbnUnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzdWItMi0xXCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQtbWVudS9zZWNvdW5kYXJ5LW1lbnUnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQtY29tcGxhaW4nKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCI0XCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQtY29udGFjdCcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIjVcIjpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vcmVwb3J0Jyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTYtMFwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9zZXR0aW5nL3Byb2ZpbGUnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzdWItNi0xXCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL3NldHRpbmcvdGhlbWUnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzdWItNi0yXCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL3NldHRpbmcvY292ZXInKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzdWItNi0zXCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL3NldHRpbmcvZ2VuZXJhbCcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvZXJyb3ItNDA0Jyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgfTtcclxuICBjb25zdCBNZW51ID0gKFxyXG4gICAgPFRvcGljTWVudVxyXG4gICAgICB0b3BpY3M9eyF1c2VyID8gW10gOiB1c2VyLnR5cGVfdXNlciA9PSAxID8gdG9waWNzIDogdG9waWNzMn1cclxuICAgICAgc2VsZWN0ZWRLZXk9e2luZGV4TWVudX1cclxuICAgICAgY2hhbmdlU2VsZWN0ZWRLZXk9e2NoYW5nZVNlbGVjdGVkS2V5fVxyXG4gICAgICBzZWxlY3RlZFN1YktleT17aW5kZXhTdWJNZW51fVxyXG4gICAgLz5cclxuICApO1xyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoVXNlckxvZ2luKClcclxuICAgIC8vIHJlbmRlcktleU1lbnUocHJvcHMuYXNQYXRoKTtcclxuICB9LCBbXSlcclxuXHJcblxyXG4gIGNvbnN0IHJvdXRlczIgPSBbe1xyXG4gICAgcGF0aDogJ2luZGV4JyxcclxuICAgIGJyZWFkY3J1bWJOYW1lOiAnaG9tZSdcclxuICB9LCB7XHJcbiAgICBwYXRoOiAnZmlyc3QnLFxyXG4gICAgYnJlYWRjcnVtYk5hbWU6ICdmaXJzdCdcclxuICB9LCB7XHJcbiAgICBwYXRoOiAnc2Vjb25kJyxcclxuICAgIGJyZWFkY3J1bWJOYW1lOiAnc2Vjb25kJ1xyXG4gIH1dO1xyXG4gIGZ1bmN0aW9uIGl0ZW1SZW5kZXIocm91dGUsIHBhcmFtcywgcm91dGVzLCBwYXRocykge1xyXG4gICAgY29uc3QgbGFzdCA9IHJvdXRlcy5pbmRleE9mKHJvdXRlKSA9PT0gcm91dGVzLmxlbmd0aCAtIDE7XHJcbiAgICByZXR1cm4gbGFzdCA/IDxzcGFuPntyb3V0ZS5icmVhZGNydW1iTmFtZX08L3NwYW4+IDogPExpbmsgdG89e3BhdGhzLmpvaW4oJy8nKX0+e3JvdXRlLmJyZWFkY3J1bWJOYW1lfTwvTGluaz47XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFVzZXJMb2dpbigpIHtcclxuICAgIGNvbnN0IHVzZXJMb2dpbiA9IGF3YWl0IGNoZWNrSXNMb2dpbigpXHJcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyTG9naW4pXHJcbiAgICBzZXRVc2VyKHVzZXJMb2dpbilcclxuICB9XHJcblxyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmUoIWFjdGl2ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW5cIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwiaW5kZXgsIGZvbGxvd1wiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD17a2V5d29yZHN9IC8+XHJcblxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cInR3aXR0ZXI6aW1hZ2U6c3JjXCJcclxuICAgICAgICAgIGNvbnRlbnQ9e2Ake29yaWdpbn0ke2ltYWdlfT92PSR7TWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwKX1gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOnVybFwiIGNvbnRlbnQ9e3VybH0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cclxuXHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxyXG4gICAgICAgICAgY29udGVudD17YCR7b3JpZ2lufSR7aW1hZ2V9P3Y9JHtNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDApfWB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9e3VybH0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PXt0eXBlfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e3VybH0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XHJcblxyXG4gICAgICAgIHsvKiA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+ICovfVxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjUuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIj48L2xpbms+XHJcbiAgICAgICAgey8qIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgIC8+ICovfVxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIHsvKiA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xNFwiPjwvZGl2PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDxGb290ZXIgLz4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgPE5hdkJhciBtZW51PXtNZW51fSB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8U2lkZUJhciBtZW51PXtNZW51fSAvPlxyXG4gICAgICAgICAgPExheW91dC5Db250ZW50IGNsYXNzTmFtZT1cImNvbnRlbnQgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIHsvKiB7dG9waWNzW2NvbnRlbnRJbmRleF19ICovfVxyXG4gICAgICAgICAgICA8Q29udGVudCBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiAwLCBwYWRkaW5nTGVmdDogXCIxcmVtXCIsIHBhZGRpbmdSaWdodDogXCIxcmVtXCIsIHBhZGRpbmdCb3R0b206IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fSBjbGFzc05hbWU9XCJwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzTWFpbiAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0gY2xhc3NOYW1lPVwiXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cInAtMS41IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VXNlck91dGxpbmVkIGNsYXNzTmFtZT1cInRleHQtNHhsXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm10LTQgdGV4dC00eGxcIj57dGl0bGVQYWdlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEyfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBqdXN0aWZ5LWl0ZW1zLWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cInAtMS41ICBqdXN0aWZ5LWVuZCBqdXN0aWZ5LWl0ZW1zLWVuZCBwdC04XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge19yb3V0ZXMubWFwKChvYmosIGluZGV4LCB7IGxlbmd0aCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCArIDEgPT09IGxlbmd0aCkgeyAvL2xhc3QgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3Bhbj57b2JqLmJyZWFkY3J1bWJOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEJyZWFkY3J1bWIuSXRlbSBocmVmPXtvYmoucGF0aH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e29iai5icmVhZGNydW1iTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnJlYWRjcnVtYi5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JyZWFkY3J1bWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7IWlzTWFpbiAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0gY2xhc3NOYW1lPVwiXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFnZUhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdob3N0PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJhY2s9eygpID0+IHdpbmRvdy5oaXN0b3J5LmJhY2soKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGVQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN1YlRpdGxlPVwiVGhpcyBpcyBhIHN1YnRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYT17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfcm91dGVzLm1hcCgob2JqLCBpbmRleCwgeyBsZW5ndGggfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCArIDEgPT09IGxlbmd0aCkgeyAvL2xhc3QgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuPntvYmouYnJlYWRjcnVtYk5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEJyZWFkY3J1bWIuSXRlbSBocmVmPXtvYmoucGF0aH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57b2JqLmJyZWFkY3J1bWJOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JyZWFkY3J1bWIuSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnJlYWRjcnVtYj4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxSb3cgY2xhc3NOYW1lPVwicC0xLjUgaXRlbXMtY2VudGVyXCI+XHJcbiAgICA8VXNlck91dGxpbmVkIGNsYXNzTmFtZT1cInRleHQtNHhsXCIgLz5cclxuICAgIDxoMSBjbGFzc05hbWU9XCJtbC00IG10LTQgdGV4dC00eGxcIj5tYW5hZ2VtZW50IGFjdGl2aXRpZXM8L2gxPlxyXG4gIDwvUm93PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qICAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogPENvbCBzcGFuPXsxMn0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWl0ZW1zLWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsXCIgc3R5bGU9e3sgcGFkZGluZzogMjQsIGJhY2tncm91bmQ6ICcjZmZmJywgbWluSGVpZ2h0OiAzNjAgfX0+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICAgIDwvTGF5b3V0LkNvbnRlbnQ+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcclxuXHJcbmNvbnN0IFRvcGljTWVudSA9ICh7IHRvcGljcywgc2VsZWN0ZWRLZXksIGNoYW5nZVNlbGVjdGVkS2V5LCBzZWxlY3RlZFN1YktleSB9KSA9PiB7XHJcbiAgICBjb25zdCBzdHlsZWRUb3BpY3MgPSBbXTtcclxuICAgIHRvcGljcy5mb3JFYWNoKCh0b3BpYywgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAodG9waWMuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgY29uc3Qgc3R5bGVkVG9waWNzQ2hpbGRyZW4gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHRvcGljLmNoaWxkcmVuLmZvckVhY2goKHRvcGljQ2hpbGRyZW4sIGluZGV4Q2hpbGRyZW4pID0+IHtcclxuICAgICAgICAgICAgICAgIHN0eWxlZFRvcGljc0NoaWxkcmVuLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9eydzdWItJyArIGluZGV4ICsgXCItXCIgKyBpbmRleENoaWxkcmVufSBvbkNsaWNrPXtjaGFuZ2VTZWxlY3RlZEtleX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dG9waWNDaGlsZHJlbi50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzdHlsZWRUb3BpY3MucHVzaChcclxuICAgICAgICAgICAgICAgIDxTdWJNZW51IGtleT17aW5kZXh9IGljb249e3RvcGljLmljb259IHRpdGxlPXt0b3BpYy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIHt0b3BpYy50aXRsZX0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAge3N0eWxlZFRvcGljc0NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8TWVudS5JdGVtIGtleT1cInN1Yi0xXCI+e0pTT04uc3RyaW5naWZ5KCl9PC9NZW51Lkl0ZW0+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9TdWJNZW51PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3R5bGVkVG9waWNzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17aW5kZXh9IG9uQ2xpY2s9e2NoYW5nZVNlbGVjdGVkS2V5fSBpY29uPXt0b3BpYy5pY29ufT5cclxuICAgICAgICAgICAgICAgICAgICB7dG9waWMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgKTtcclxuXHJcbiAgICBzdHlsZWRUb3BpY3MucHVzaChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYW50LW1lbnUtaXRlbVwiPlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUxvZ291dChlKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCB3LWF1dG8gdy1mdWxsIHJvdW5kZWQgaC04IHRleHQtd2hpdGUgYmctcmVkLTYwMCBmb250LWJvbGQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGhvdmVyOmJnLXJlZC02MDAgaG92ZXI6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAg4Lit4Lit4LiB4LiI4Liy4LiB4Lij4Liw4Lia4LiaXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG5cclxuICAgIClcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsZUxvZ291dFwiKVxyXG4gICAgICAgIENvb2tpZXMucmVtb3ZlKCd0b2tlbicpXHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNZW51IG1vZGU9XCJpbmxpbmVcIiBzZWxlY3RlZEtleXM9e1tzZWxlY3RlZEtleV19IGRlZmF1bHRPcGVuS2V5cz17W3NlbGVjdGVkU3ViS2V5XX0+XHJcbiAgICAgICAgICAgIHtzdHlsZWRUb3BpY3N9XHJcbiAgICAgICAgPC9NZW51PlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBUb3BpY01lbnU7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgU0VDUkVUX0tFWSA9IHByb2Nlc3MuZW52LkpXVF9LRVk7XHJcblxyXG4vKlxyXG4gKiBAcGFyYW1zIHtqd3RUb2tlbn0gZXh0cmFjdGVkIGZyb20gY29va2llc1xyXG4gKiBAcmV0dXJuIHtvYmplY3R9IG9iamVjdCBvZiBleHRyYWN0ZWQgdG9rZW5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlUb2tlbihqd3RUb2tlbikge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gand0LnZlcmlmeShqd3RUb2tlbiwgU0VDUkVUX0tFWSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coJ2U6JywgZSk7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbi8qXHJcbiAqIEBwYXJhbXMge3JlcXVlc3R9IGV4dHJhY3RlZCBmcm9tIHJlcXVlc3QgcmVzcG9uc2VcclxuICogQHJldHVybiB7b2JqZWN0fSBvYmplY3Qgb2YgcGFyc2Ugand0IGNvb2tpZSBkZWNvZGUgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBwQ29va2llcyhyZXEpIHtcclxuICBjb25zdCBwYXJzZWRJdGVtcyA9IHt9O1xyXG4gIGlmIChyZXEuaGVhZGVycy5jb29raWUpIHtcclxuICAgIGNvbnN0IGNvb2tpZXNJdGVtcyA9IHJlcS5oZWFkZXJzLmNvb2tpZS5zcGxpdCgnOyAnKTtcclxuICAgIGNvb2tpZXNJdGVtcy5mb3JFYWNoKGNvb2tpZXMgPT4ge1xyXG4gICAgICBjb25zdCBwYXJzZWRJdGVtID0gY29va2llcy5zcGxpdCgnPScpO1xyXG4gICAgICBwYXJzZWRJdGVtc1twYXJzZWRJdGVtWzBdXSA9IGRlY29kZVVSSShwYXJzZWRJdGVtWzFdKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gcGFyc2VkSXRlbXM7XHJcbn1cclxuXHJcbi8qXHJcbiAqIEBwYXJhbXMge3JlcXVlc3R9IGV4dHJhY3RlZCBmcm9tIHJlcXVlc3QgcmVzcG9uc2UsIHtzZXRMb2NhbGhvc3R9IHlvdXIgbG9jYWxob3N0IGFkZHJlc3NcclxuICogQHJldHVybiB7b2JqZWN0fSBvYmplY3RzIG9mIHByb3RvY29sLCBob3N0IGFuZCBvcmlnaW5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhYnNvbHV0ZVVybChyZXEsIHNldExvY2FsaG9zdCkge1xyXG4gIHZhciBwcm90b2NvbCA9ICdodHRwczonO1xyXG4gIHZhciBob3N0ID0gcmVxXHJcbiAgICA/IHJlcS5oZWFkZXJzWyd4LWZvcndhcmRlZC1ob3N0J10gfHwgcmVxLmhlYWRlcnNbJ2hvc3QnXVxyXG4gICAgOiB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuICBpZiAoaG9zdC5pbmRleE9mKCdsb2NhbGhvc3QnKSA+IC0xKSB7XHJcbiAgICBpZiAoc2V0TG9jYWxob3N0KSBob3N0ID0gc2V0TG9jYWxob3N0O1xyXG4gICAgcHJvdG9jb2wgPSAnaHR0cDonO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgcHJvdG9jb2w6IHByb3RvY29sLFxyXG4gICAgaG9zdDogaG9zdCxcclxuICAgIG9yaWdpbjogcHJvdG9jb2wgKyAnLy8nICsgaG9zdCxcclxuICAgIHVybDogcmVxLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGREYXlzKGRhdGUsIGRheXMpIHtcclxuICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgcmVzdWx0LnNldERhdGUocmVzdWx0LmdldERhdGUoKSArIGRheXMpO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vWVlZWS1NTS1ERFxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZVdpdGhvdXRUaW1lKGRhdGUpIHtcclxuICB2YXIgZGF0ZVN0cmluZyA9XHJcbiAgICBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgKyBcIi1cIiArXHJcbiAgICAoXCIwXCIgKyAoZGF0ZS5nZXRVVENNb250aCgpICsgMSkpLnNsaWNlKC0yKSArIFwiLVwiICtcclxuICAgIChcIjBcIiArIGRhdGUuZ2V0VVRDRGF0ZSgpKS5zbGljZSgtMikgKyBcIiBcIlxyXG4gIHJldHVybiBkYXRlU3RyaW5nO1xyXG59XHJcbi8vIGNvbnN0IGFwaSA9IHByb2Nlc3MuZW52LlBVQkxJQ19VUkxcclxuXHJcbmV4cG9ydCBjb25zdCBhcGlJbnN0YW5jZSA9ICgpID0+IHtcclxuICAvLyBjb25zdCBhdXRob3JpemF0aW9uID0gc3RvcmUuZ2V0U3RhdGUoKS51c2VyU3RhdGUudG9rZW4gPyBzdG9yZS5nZXRTdGF0ZSgpLnVzZXJTdGF0ZS50b2tlbiA6IG51bGxcclxuXHJcbiAgLy8gY29uc3QgaGVhZGVycyA9IHtcclxuICAvLyBcdCd4LWFwaS10b2tlbic6IGF1dGhvcml6YXRpb24gPyBhdXRob3JpemF0aW9uIDogJycsXHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6ICcvYXBpJyxcclxuICAgIC8vIGhlYWRlcnMsXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrSXNMb2dpbiA9ICgpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhcImNoZWNrSXNMb2dpblwiKVxyXG4gIHZhciB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpIC8vID0+ICd2YWx1ZSdcclxuXHJcbiAgaWYgKCF0b2tlbikge1xyXG4gICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvLyBjb25zb2xlLmxvZyhwYXJzZUp3dCh0b2tlbikpXHJcbiAgcmV0dXJuIHBhcnNlSnd0KHRva2VuKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSnd0KHRva2VuKSB7XHJcblxyXG4gIHZhciBpc0V4cGlyZWQgPSBmYWxzZTtcclxuICAvLyBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpO1xyXG5cclxuXHJcblxyXG4gIHZhciBiYXNlNjRVcmwgPSB0b2tlbi5zcGxpdCgnLicpWzFdO1xyXG4gIHZhciBiYXNlNjQgPSBiYXNlNjRVcmwucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcclxuICB2YXIganNvblBheWxvYWQgPSBkZWNvZGVVUklDb21wb25lbnQoYXRvYihiYXNlNjQpLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKGMpIHtcclxuICAgIHJldHVybiAnJScgKyAoJzAwJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcclxuICB9KS5qb2luKCcnKSk7XHJcbiAgdmFyIF9qc29uUGF5bG9hZCA9IEpTT04ucGFyc2UoanNvblBheWxvYWQpXHJcbiAgdmFyIGRhdGVOb3cgPSBuZXcgRGF0ZSgpO1xyXG4gIC8vIGNvbnNvbGUubG9nKHBhcnNlSW50KF9qc29uUGF5bG9hZC5leHApKVxyXG4gIC8vIGNvbnNvbGUubG9nKHBhcnNlSW50KChkYXRlTm93LmdldFRpbWUoKSkudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwxMCkpKVxyXG4gIGlmIChwYXJzZUludChfanNvblBheWxvYWQuZXhwKSA8IHBhcnNlSW50KChkYXRlTm93LmdldFRpbWUoKSkudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApKSkge1xyXG4gICAgY29uc29sZS5sb2coXCJ0cnVlXCIpXHJcblxyXG4gICAgaXNFeHBpcmVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlmIChpc0V4cGlyZWQpIHtcclxuICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxuICByZXR1cm4gX2pzb25QYXlsb2FkO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lKGRhdGUpIHtcclxuICB0cnkge1xyXG4gICAgdmFyIGRhdGVTcGxpdCA9IGRhdGUudG9TdHJpbmcoKS5zcGxpdChcIlRcIik7XHJcbiAgICByZXR1cm4gZGF0ZVNwbGl0WzBdO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydERhdGVEQnRvRGF0ZVBpY2tlcldpdGhUaW1lKGRhdGUpIHtcclxuICB0cnkge1xyXG4gICAgLy86MDcuMDAwWlxyXG4gICAgLy9TYW1wbGVUZXh0LnJlcGxhY2UoXCJEZXZlbG9wZXJcIiwgXCJBcHAgQnVpbGRlclwiKTtcclxuICAgIHZhciBkYXRlU3BsaXQgPSBkYXRlLnRvU3RyaW5nKCkuc3BsaXQoXCJUXCIpO1xyXG4gICAgcmV0dXJuIGRhdGVTcGxpdFswXSArIFwiIFwiICsgZGF0ZVNwbGl0WzFdLnJlcGxhY2UoXCIuMDAwWlwiLCBcIlwiKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREYXRldG9UaGFpRGF0ZShkYXRlKSB7XHJcbiAgdmFyIF9kYXRlID0gY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZShkYXRlKVxyXG4gIHZhciBkYXRlU3BsaXQgPSBfZGF0ZS50b1N0cmluZygpLnNwbGl0KFwiLVwiKTtcclxuICAvLyAyMDIxLTA5LTE2XHJcbiAgcmV0dXJuIGRhdGVTcGxpdFsyXSArIFwiIFwiICsgY29udmVydE1vbnRodG9UaGFpTW9udGgoZGF0ZVNwbGl0WzFdKSArIFwiIFwiICsgY29udmVydFllYXJ0b1RoYWlZZWFyKGRhdGVTcGxpdFswXSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRZZWFydG9UaGFpWWVhcih5ZWFyKSB7XHJcbiAgcmV0dXJuIHBhcnNlSW50KHllYXIpICsgNTQzXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0TW9udGh0b1RoYWlNb250aChtb250aCkge1xyXG4gIHN3aXRjaCAobW9udGgpIHtcclxuICAgIGNhc2UgXCIwMVwiOlxyXG4gICAgICByZXR1cm4gXCLguKHguIHguKPguLLguITguKFcIlxyXG4gICAgY2FzZSBcIjAyXCI6XHJcbiAgICAgIHJldHVybiBcIuC4geC4uOC4oeC4oOC4suC4nuC4seC4meC4mOC5jFwiXHJcbiAgICBjYXNlIFwiMDNcIjpcclxuICAgICAgcmV0dXJuIFwi4Lih4Li14LiZ4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIwNFwiOlxyXG4gICAgICByZXR1cm4gXCLguYDguKHguKnguLLguKLguJlcIlxyXG4gICAgY2FzZSBcIjA1XCI6XHJcbiAgICAgIHJldHVybiBcIuC4nuC4pOC4qeC4oOC4suC4hOC4oVwiXHJcbiAgICBjYXNlIFwiMDZcIjpcclxuICAgICAgcmV0dXJuIFwi4Lih4Li04LiW4Li44LiZ4Liy4Lii4LiZXCJcclxuICAgIGNhc2UgXCIwN1wiOlxyXG4gICAgICByZXR1cm4gXCLguIHguKPguIHguI7guLLguITguKFcIlxyXG4gICAgY2FzZSBcIjA4XCI6XHJcbiAgICAgIHJldHVybiBcIuC4quC4tOC4h+C4q+C4suC4hOC4oVwiXHJcbiAgICBjYXNlIFwiMDlcIjpcclxuICAgICAgcmV0dXJuIFwi4LiB4Lix4LiZ4Lii4Liy4Lii4LiZXCJcclxuICAgIGNhc2UgXCIxMFwiOlxyXG4gICAgICByZXR1cm4gXCLguJXguLjguKXguLLguITguKFcIlxyXG4gICAgY2FzZSBcIjExXCI6XHJcbiAgICAgIHJldHVybiBcIuC4nuC4pOC4qOC4iOC4tOC4geC4suC4ouC4mVwiXHJcbiAgICBjYXNlIFwiMTJcIjpcclxuICAgICAgcmV0dXJuIFwi4LiY4Lix4LiZ4Lin4Liy4LiE4LihXCJcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBcIk5BTlwiXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydERhdGV0b0FkZERCKGRhdGUpIHtcclxuICB2YXIgZGF0ZVNwbGl0ID0gZGF0ZS5zcGxpdChcIiBcIik7XHJcbiAgcmV0dXJuIGRhdGVTcGxpdFswXSArIFwiVFwiICsgZGF0ZVNwbGl0WzFdICsgXCIrMDA6MDBcIjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldElQQWRkcmVzcygpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vZ2VvbG9jYXRpb24tZGIuY29tL2pzb24vJylcclxuICAvLyBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgLy8gcmV0dXJuIHJlcy5kYXRhXHJcbiAgcmV0dXJuIFwiY291bnRyeV9jb2RlOlwiICsgcmVzLmRhdGEuY291bnRyeV9jb2RlICsgXCIsY291bnRyeV9uYW1lOlwiICsgcmVzLmRhdGEuY291bnRyeV9uYW1lICsgXCIsY2l0eTpcIiArIHJlcy5kYXRhLmNpdHkgKyBcIixwb3N0YWw6XCIgKyByZXMuZGF0YS5wb3N0YWxcclxuICAgICsgXCIsbGF0aXR1ZGU6XCIgKyByZXMuZGF0YS5sYXRpdHVkZSArIFwiLGxvbmdpdHVkZTpcIiArIHJlcy5kYXRhLmxvbmdpdHVkZSArIFwiLElQdjQ6XCIgKyByZXMuZGF0YS5JUHY0ICsgXCIsc3RhdGU6XCIgKyByZXMuZGF0YS5zdGF0ZVxyXG4gIC8vIHNldElQKHJlcy5kYXRhLklQdjQpXHJcbiAgLy8gcmV0dXJuXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGJ5dGVzVG9TaXplKGJ5dGVzKSB7XHJcbiAgdmFyIHNpemVzID0gWydCeXRlcycsICdLQicsICdNQicsICdHQicsICdUQiddO1xyXG4gIGlmIChieXRlcyA9PSAwKSByZXR1cm4gJzAgQnl0ZSc7XHJcbiAgdmFyIGkgPSBwYXJzZUludChNYXRoLmZsb29yKE1hdGgubG9nKGJ5dGVzKSAvIE1hdGgubG9nKDEwMjQpKSk7XHJcbiAgcmV0dXJuIE1hdGgucm91bmQoYnl0ZXMgLyBNYXRoLnBvdygxMDI0LCBpKSwgMikgKyAnICcgKyBzaXplc1tpXTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBieXRlc1RvTUIoYnl0ZXMpIHtcclxuICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQoYnl0ZXMgLyAoMTAyNCAqIDEwMjQpKS50b0ZpeGVkKDIpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGVkaWZmKHN0YXJ0RGF0ZSkge1xyXG5cclxuICBjb25zdCB0aW1lRW5kID0gbW9tZW50KCk7XHJcbiAgY29uc3QgbmV3U3RhcnREYXRlID0gbmV3IERhdGUoc3RhcnREYXRlKTtcclxuICBjb25zdCBuZXdFbmREYXRlID0gbmV3IERhdGUodGltZUVuZCk7XHJcbiAgY29uc3Qgb25lX2RheSA9IDEwMDAgKiA2MCAqIDYwICogMjQ7XHJcbiAgbGV0IHJlc3VsdFxyXG4gIHJlc3VsdCA9IE1hdGguY2VpbCgobmV3U3RhcnREYXRlLmdldFRpbWUoKSAtIG5ld0VuZERhdGUuZ2V0VGltZSgpKSAvIChvbmVfZGF5KSlcclxuICBjb25zb2xlLmxvZygnZGF0ZSBDb252ZXJ0ZXIgcmVzdWx0JywgcmVzdWx0KVxyXG5cclxuXHJcbiAgcmV0dXJuIHJlc3VsdCAtIDE7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudERhdGUoc2VwYXJhdG9yID0gJycpIHtcclxuXHJcbiAgbGV0IG5ld0RhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgbGV0IGRhdGUgPSBuZXdEYXRlLmdldERhdGUoKTtcclxuICBsZXQgbW9udGggPSBuZXdEYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gIGxldCB5ZWFyID0gbmV3RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICByZXR1cm4gYCR7eWVhcn0ke3NlcGFyYXRvcn0ke21vbnRoIDwgMTAgPyBgMCR7bW9udGh9YCA6IGAke21vbnRofWB9JHtzZXBhcmF0b3J9JHtkYXRlfWBcclxufVxyXG4iLCJkZWNsYXJlIGNvbnN0IF9fTkVYVF9EQVRBX186IGFueVxuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIHJlc29sdmUsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFByZWZldGNoT3B0aW9ucyB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbmZ1bmN0aW9uIGlzTG9jYWwoaHJlZjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHVybCA9IHBhcnNlKGhyZWYsIGZhbHNlLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBwYXJzZShnZXRMb2NhdGlvbk9yaWdpbigpLCBmYWxzZSwgdHJ1ZSlcblxuICByZXR1cm4gKFxuICAgICF1cmwuaG9zdCB8fCAodXJsLnByb3RvY29sID09PSBvcmlnaW4ucHJvdG9jb2wgJiYgdXJsLmhvc3QgPT09IG9yaWdpbi5ob3N0KVxuICApXG59XG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIEZvcm1hdFJlc3VsdCA9IHsgaHJlZjogc3RyaW5nOyBhcz86IHN0cmluZyB9XG5cbmZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmM6IChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiBGb3JtYXRSZXN1bHQpIHtcbiAgbGV0IGxhc3RIcmVmOiBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdEFzOiB1bmRlZmluZWQgfCBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdFJlc3VsdDogbnVsbCB8IEZvcm1hdFJlc3VsdCA9IG51bGxcbiAgcmV0dXJuIChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiB7XG4gICAgaWYgKGxhc3RSZXN1bHQgJiYgaHJlZiA9PT0gbGFzdEhyZWYgJiYgYXMgPT09IGxhc3RBcykge1xuICAgICAgcmV0dXJuIGxhc3RSZXN1bHRcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBmb3JtYXRGdW5jKGhyZWYsIGFzKVxuICAgIGxhc3RIcmVmID0gaHJlZlxuICAgIGxhc3RBcyA9IGFzXG4gICAgbGFzdFJlc3VsdCA9IHJlc3VsdFxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRVcmwodXJsOiBVcmwpOiBzdHJpbmcge1xuICByZXR1cm4gdXJsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKSA6IHVybFxufVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cblxubGV0IG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKG9ic2VydmVyKSB7XG4gICAgcmV0dXJuIG9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAob2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuY2xhc3MgTGluayBleHRlbmRzIENvbXBvbmVudDxMaW5rUHJvcHM+IHtcbiAgcDogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBMaW5rUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHByb3BzLnByZWZldGNoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG4gIH1cblxuICBjbGVhblVwTGlzdGVuZXJzID0gKCkgPT4ge31cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuICB9XG5cbiAgZ2V0UGF0aHMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGNvbnN0IHsgaHJlZjogcGFyc2VkSHJlZiwgYXM6IHBhcnNlZEFzIH0gPSB0aGlzLmZvcm1hdFVybHMoXG4gICAgICB0aGlzLnByb3BzLmhyZWYsXG4gICAgICB0aGlzLnByb3BzLmFzXG4gICAgKVxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEhyZWYpXG4gICAgcmV0dXJuIFtyZXNvbHZlZEhyZWYsIHBhcnNlZEFzID8gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkQXMpIDogcmVzb2x2ZWRIcmVmXVxuICB9XG5cbiAgaGFuZGxlUmVmKHJlZjogRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnAgJiYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiYgcmVmICYmIHJlZi50YWdOYW1lKSB7XG4gICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgICBwcmVmZXRjaGVkW1xuICAgICAgICAgIHRoaXMuZ2V0UGF0aHMoKS5qb2luKFxuICAgICAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgICAgICclJ1xuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzID0gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJlZmV0Y2goKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuICAvLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbiAgZm9ybWF0VXJscyA9IG1lbW9pemVkRm9ybWF0VXJsKChocmVmLCBhc0hyZWYpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGhyZWYpKSxcbiAgICAgIGFzOiBhc0hyZWYgPyBhZGRCYXNlUGF0aChmb3JtYXRVcmwoYXNIcmVmKSkgOiBhc0hyZWYsXG4gICAgfVxuICB9KVxuXG4gIGxpbmtDbGlja2VkID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IG5vZGVOYW1lLCB0YXJnZXQgfSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICAgIGlmIChcbiAgICAgIG5vZGVOYW1lID09PSAnQScgJiZcbiAgICAgICgodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICAgICAgZS5tZXRhS2V5IHx8XG4gICAgICAgIGUuY3RybEtleSB8fFxuICAgICAgICBlLnNoaWZ0S2V5IHx8XG4gICAgICAgIChlLm5hdGl2ZUV2ZW50ICYmIGUubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpKVxuICAgICkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG5cbiAgICBpZiAoIWlzTG9jYWwoaHJlZikpIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBocmVmKVxuICAgIGFzID0gYXMgPyByZXNvbHZlKHBhdGhuYW1lLCBhcykgOiBocmVmXG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGxldCB7IHNjcm9sbCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICAgIH1cblxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIFJvdXRlclt0aGlzLnByb3BzLnJlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICBzaGFsbG93OiB0aGlzLnByb3BzLnNoYWxsb3csXG4gICAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcmVmZXRjaChvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnAgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICBjb25zdCBwYXRocyA9IHRoaXMuZ2V0UGF0aHMoKVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICBSb3V0ZXIucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLyAwXSwgcGF0aHNbLyogYXNQYXRoICovIDFdLCBvcHRpb25zKS5jYXRjaChcbiAgICAgIChlcnIpID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gICAgcHJlZmV0Y2hlZFtcbiAgICAgIHBhdGhzLmpvaW4oXG4gICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICclJ1xuICAgICAgKVxuICAgIF0gPSB0cnVlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gICAgfVxuXG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gICAgY29uc3QgcHJvcHM6IHtcbiAgICAgIG9uTW91c2VFbnRlcjogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBocmVmPzogc3RyaW5nXG4gICAgICByZWY/OiBhbnlcbiAgICB9ID0ge1xuICAgICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVJlZihlbClcblxuICAgICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Nb3VzZUVudGVyOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlZmV0Y2goeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgICAgfSxcbiAgICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIHRoaXMubGlua0NsaWNrZWQoZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG5cbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLnBhc3NIcmVmIHx8XG4gICAgICAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSlcbiAgICApIHtcbiAgICAgIHByb3BzLmhyZWYgPSBhcyB8fCBocmVmXG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMuaHJlZiAmJlxuICAgICAgICB0eXBlb2YgX19ORVhUX0RBVEFfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0XG4gICAgICApIHtcbiAgICAgICAgcHJvcHMuaHJlZiA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpXG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICA6IHBhdGhcbn1cblxuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJ1xufVxuXG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aDogc3RyaW5nKSA9PlxuICB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aClcblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogYW55KSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnkgfCBudWxsLFxuICBpc1NlcnZlclJlbmRlcjogYm9vbGVhbixcbiAgY2I/OiAoLi4uYXJnczogYW55KSA9PiBhbnlcbikge1xuICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxXG4gIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGZldGNoKFxuICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYFxuICAgICAgICApLFxuICAgICAgICBxdWVyeSxcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIH1cbiAgICApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGFcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgLy8gbG9vcC5cbiAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgOyhlcnIgYXMgYW55KS5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUidcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBDb21wb25lbnRUeXBlXG4gICAgICB3cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXJsXG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmIChcbiAgICAgIGUuc3RhdGUgJiZcbiAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICBwYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWVcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIF91cmw6IFVybCxcbiAgICBfYXM6IFVybCxcbiAgICBvcHRpb25zOiBhbnlcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgIGlmIChTVCkge1xuICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmxcbiAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hc1xuXG4gICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpXG4gICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKVxuXG4gICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcylcblxuICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybCwgdHJ1ZSlcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG4gICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlKGFzKVxuICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChcbiAgICAgICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihcbiAgICAgICAgKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcylcbiAgICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKFxuICAgICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICAgKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlc1xuICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfVxuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgfSBhcyBhbnkpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIChnaXBFcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAnRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxcbiAgICAgICAgICAgICAgICAgICAgICBnaXBFcnJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSlcbiAgICAgICAgKVxuICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgfVxuXG4gICAgcmV0dXJuIChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICAgIH1cblxuICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSksXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPilcbiAgICAgIC50aGVuKChyb3V0ZUluZm86IFJvdXRlSW5mbykgPT4ge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgICAgKVxuICAgICAgICApLnRoZW4oKHByb3BzKSA9PiB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChoYW5kbGVFcnJvcilcbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gcGFyc2UodXJsKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSlcbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcbiAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXJzZShhc1BhdGgpLnBhdGhuYW1lISlcblxuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgOiBmZXRjaE5leHREYXRhKFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdGhpcy5pc1NzcixcbiAgICAgICAgICAoZGF0YSkgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpXG4gICAgICAgIClcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlKGFzUGF0aCwgdHJ1ZSlcbiAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSEpXG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKVxuICAgICAgOyhlIGFzIGFueSkuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCIvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9XG59IHtcbiAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcblxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgIChfLCAkMSkgPT4ge1xuICAgICAgY29uc3QgaXNPcHRpb25hbCA9IC9eXFxcXFxcWy4qXFxcXFxcXSQvLnRlc3QoJDEpXG4gICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDIsIC0yKVxuICAgICAgfVxuICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgaWYgKGlzQ2F0Y2hBbGwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSg2KVxuICAgICAgfVxuICAgICAgZ3JvdXBzW1xuICAgICAgICAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH1cbiAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gKGlzT3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICB9XG4gIClcblxuICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAgIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcblxuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWBcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSxcbiAgICBncm91cHMsXG4gICAgbmFtZWRSZWdleDogbmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgID8gYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZm9ybWF0LCBVUkxGb3JtYXRPcHRpb25zLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIHN0YXRpY01hcmt1cDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGRldkZpbGVzOiBzdHJpbmdbXVxuICBmaWxlczogc3RyaW5nW11cbiAgbG93UHJpb3JpdHlGaWxlczogc3RyaW5nW11cbiAgcG9seWZpbGxGaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBodG1sUHJvcHM6IGFueVxuICBib2R5VGFnczogYW55W11cbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gIHVybDogVXJsT2JqZWN0LFxuICBvcHRpb25zPzogVVJMRm9ybWF0T3B0aW9uc1xuKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdCh1cmwgYXMgVVJMLCBvcHRpb25zKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xyXG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XHJcbiAgICBcImRlZmF1bHRcIjogb2JqXHJcbiAgfTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xyXG5cclxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xyXG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcclxuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xyXG5cclxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XHJcbiAgICByZXR1cm4gY2FjaGU7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGNhY2hlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcclxuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XHJcbiAgICByZXR1cm4gb2JqO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBcImRlZmF1bHRcIjogb2JqXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XHJcblxyXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xyXG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xyXG4gIH1cclxuXHJcbiAgdmFyIG5ld09iaiA9IHt9O1xyXG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcclxuXHJcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcclxuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XHJcblxyXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xyXG5cclxuICBpZiAoY2FjaGUpIHtcclxuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3T2JqO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XHJcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xyXG5cclxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcclxuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xyXG4gICAgfTtcclxuICB9IGVsc2Uge1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcclxuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG4vKiB1dGlscyAqL1xyXG5pbXBvcnQgeyBhYnNvbHV0ZVVybCwgYXBpSW5zdGFuY2UsIGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUsIGNvbnZlcnREYXRldG9UaGFpRGF0ZSB9IGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvdXRpbHMnO1xyXG5cclxuLyogY29tcG9uZW50cyAqL1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dEFkbWluJztcclxuLy8gaW1wb3J0IFVzZXJOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL1VzZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgQ29sLFxyXG4gIElucHV0LFxyXG4gIE1vZGFsLFxyXG4gIFJvdyxcclxuICBUYWJsZSxcclxuICBub3RpZmljYXRpb25cclxufSBmcm9tICdhbnRkJztcclxuY29uc3QgeyBTZWFyY2ggfSA9IElucHV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG4gIGNvbnN0IHsgdXNlciwgb3JpZ2luIH0gPSBwcm9wcztcclxuICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2FwaSwgY29udGV4dEhvbGRlcl0gPSBub3RpZmljYXRpb24udXNlTm90aWZpY2F0aW9uKCk7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2RhdGFEZWxldGUsIHNldERhdGFEZWxldGVdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbZmlsdGVycywgc2V0RmlsdGVyc10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtwYWdpbmF0aW9uLCBzZXRQYWdpbmF0aW9uXSA9IHVzZVN0YXRlKHtcclxuICAgIGN1cnJlbnQ6IDEsXHJcbiAgICBwYWdlU2l6ZTogMTAsXHJcbiAgfSlcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdmlzaWJsZU1vZGFsRGVsZXRlLCBzZXRWaXNpYmxlTW9kYWxEZWxldGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfguIrguLfguYjguK0gbGFuZGluZyBwYWdlJyxcclxuICAgICAgZGF0YUluZGV4OiAnaW50cm9fdGl0bGUnLFxyXG4gICAgICBzb3J0ZXI6IHRydWUsXHJcbiAgICAgIC8vIHJlbmRlcjogbmFtZSA9PiBgJHtuYW1lLmZpcnN0fSAke25hbWUubGFzdH1gLFxyXG4gICAgICAvLyB3aWR0aDogJzIwJScsXHJcbiAgICAgIC8vIGRlZmF1bHRTb3J0T3JkZXI6ICdkZXNjZW5kJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn4LiK4LmI4Lin4LiH4LmA4Lin4Lil4Liy4LiX4Li14LmI4LmB4Liq4LiU4LiHJyxcclxuICAgICAgZGF0YUluZGV4OiAnJyxcclxuICAgICAgc29ydGVyOiB0cnVlLFxyXG4gICAgICBrZXk6ICdpbnRyb19kYXRlX3MnLFxyXG4gICAgICByZW5kZXI6IChkYXRhKSA9PiA8PlxyXG4gICAgICAgIDxzcGFuID4ge2NvbnZlcnREYXRldG9UaGFpRGF0ZShjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lKGRhdGEuaW50cm9fZGF0ZV9zKSl9IOC4luC4tuC4hyB7Y29udmVydERhdGV0b1RoYWlEYXRlKGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUoZGF0YS5pbnRyb19kYXRlX2UpKX08L3NwYW4+XHJcbiAgICAgIDwvPixcclxuICAgICAgLy8gcmVuZGVyOiBuYW1lID0+IGAke25hbWUuZmlyc3R9ICR7bmFtZS5sYXN0fWAsXHJcbiAgICAgIC8vIHdpZHRoOiAnMjAlJyxcclxuICAgICAgLy8gZGVmYXVsdFNvcnRPcmRlcjogJ2Rlc2NlbmQnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfguKrguJbguLLguJnguLDguIHguLLguKPguYPguIrguYnguIfguLLguJknLFxyXG4gICAgICBkYXRhSW5kZXg6ICcnLFxyXG4gICAgICBzb3J0ZXI6IHRydWUsXHJcbiAgICAgIGtleTogJ2lzX3VzZScsXHJcbiAgICAgIHJlbmRlcjogKGRhdGEpID0+IDw+XHJcbiAgICAgICAgPHNwYW4gPiB7ZGF0YS5pc191c2UgPyBcIuC5g+C4iuC5ieC4h+C4suC4mVwiIDogXCLguYTguKHguYjguYPguIrguYnguIfguLLguJlcIn08L3NwYW4+XHJcbiAgICAgIDwvPixcclxuICAgICAgLy8gcmVuZGVyOiBuYW1lID0+IGAke25hbWUuZmlyc3R9ICR7bmFtZS5sYXN0fWAsXHJcbiAgICAgIC8vIHdpZHRoOiAnMjAlJyxcclxuICAgICAgLy8gZGVmYXVsdFNvcnRPcmRlcjogJ2Rlc2NlbmQnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICBkYXRhSW5kZXg6ICcnLFxyXG4gICAgICBrZXk6ICd4JyxcclxuICAgICAgcmVuZGVyOiAoZGF0YSkgPT4gPD5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2l6ZT17XCJkZWZhdWx0XCJ9IG9uQ2xpY2s9eygpID0+IGdvdG9QYWdlKGRhdGEuaW50cm9faWQpfSA+IOC5geC4geC5ieC5hOC4giA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1sLTFcIiB0eXBlPVwiZGFuZ2VyXCIgb25DbGljaz17KCkgPT4gc2hvd01vZGFsKGRhdGEpfSBzaXplPXtcImRlZmF1bHRcIn0gPiDguKXguJogPC9CdXR0b24+XHJcbiAgICAgIDwvPixcclxuICAgIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgIHRpdGxlOiAnR2VuZGVyJyxcclxuICAgIC8vICAgZGF0YUluZGV4OiAnZ2VuZGVyJyxcclxuICAgIC8vICAgLy8gZmlsdGVyczogW1xyXG4gICAgLy8gICAvLyAgIHsgdGV4dDogJ01hbGUnLCB2YWx1ZTogJ21hbGUnIH0sXHJcbiAgICAvLyAgIC8vICAgeyB0ZXh0OiAnRmVtYWxlJywgdmFsdWU6ICdmZW1hbGUnIH0sXHJcbiAgICAvLyAgIC8vIF0sXHJcbiAgICAvLyAgIHdpZHRoOiAnMjAlJyxcclxuICAgIC8vIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgIHRpdGxlOiAnRW1haWwnLFxyXG4gICAgLy8gICBkYXRhSW5kZXg6ICdlbWFpbCcsXHJcbiAgICAvLyB9LFxyXG4gIF07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaCh7IHBhZ2luYXRpb24gfSk7XHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGZldGNoID0gYXN5bmMgKHBhcmFtcyA9IHt9KSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBjb25zdCBhZGRhY3Rpdml0aWVzRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAnYWRtaW4vbWFuYWdlbWVudC9sYW5kaW5nLXBhZ2U/aXNBZG1pbj0xJnJlc3VsdHM9JyArIHBhcmFtcy5wYWdpbmF0aW9uLnBhZ2VTaXplICsgJyZwYWdlPScgKyBwYXJhbXMucGFnaW5hdGlvbi5jdXJyZW50ICsgXCImc2VhcmNoPVwiICsgc2VhcmNoICsgXCImc29ydEZpZWxkPVwiICsgcGFyYW1zLnNvcnRGaWVsZCArIFwiJnNvcnRPcmRlcj1cIiArIHBhcmFtcy5zb3J0T3JkZXIgKyBcIiZmaWx0ZXJzPVwiICsgcGFyYW1zLmZpbHRlcnNcclxuICAgICk7XHJcblxyXG4gICAgc2V0RGF0YShhZGRhY3Rpdml0aWVzRGF0YS5kYXRhLnJlc3VsdHMpXHJcbiAgICBzZXRQYWdpbmF0aW9uKHtcclxuICAgICAgLi4ucGFyYW1zLnBhZ2luYXRpb24sXHJcbiAgICAgIHRvdGFsOiBhZGRhY3Rpdml0aWVzRGF0YS5kYXRhLnRvdGFsQ291bnQsXHJcbiAgICAgIC8vIDIwMCBpcyBtb2NrIGRhdGEsIHlvdSBzaG91bGQgcmVhZCBpdCBmcm9tIHNlcnZlclxyXG4gICAgICAvLyB0b3RhbDogZGF0YS50b3RhbENvdW50LFxyXG4gICAgfSlcclxuICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd01vZGFsID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdkYXRhIGRlbGV0ZCcpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgc2V0RGF0YURlbGV0ZShkYXRhKVxyXG4gICAgc2V0VmlzaWJsZU1vZGFsRGVsZXRlKHRydWUpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ290b1BhZ2UgPSAoaWQpID0+IHtcclxuICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC1hdXRvLWxhbmRpbmdwYWdlL2xhbmRpbmctcGFnZS8nICsgaWQpO1xyXG5cclxuICB9O1xyXG5cclxuICBjb25zdCBvblNlYXJjaCA9IGFzeW5jIChfc2VhcmNoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBzZXRTZWFyY2goX3NlYXJjaClcclxuICAgIHNldFBhZ2luYXRpb24oe1xyXG4gICAgICBwYWdlU2l6ZTogcGFnaW5hdGlvbi5wYWdlU2l6ZSxcclxuICAgICAgY3VycmVudDogMVxyXG4gICAgfSlcclxuICAgIGNvbnN0IGFuZGluZ19wYWdlRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAnYWRtaW4vbWFuYWdlbWVudC9sYW5kaW5nLXBhZ2U/aXNBZG1pbj0xJnJlc3VsdHM9JyArIHBhZ2luYXRpb24ucGFnZVNpemUgKyAnJnBhZ2U9MSZzZWFyY2g9JyArIF9zZWFyY2ggKyBcIiZmaWx0ZXJzPVwiICsgZmlsdGVyc1xyXG4gICAgKTtcclxuXHJcbiAgICBzZXREYXRhKGFuZGluZ19wYWdlRGF0YS5kYXRhLnJlc3VsdHMpXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlVGFibGVDaGFuZ2UgPSAocGFnaW5hdGlvbiwgZmlsdGVycywgc29ydGVyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhzb3J0ZXIpXHJcbiAgICBzZXRQYWdpbmF0aW9uKHtcclxuICAgICAgcGFnZVNpemU6IHBhZ2luYXRpb24ucGFnZVNpemUsXHJcbiAgICAgIGN1cnJlbnQ6IHBhZ2luYXRpb24uY3VycmVudFxyXG4gICAgfSlcclxuICAgIHNldEZpbHRlcnMoZmlsdGVycy5wYWNrYWdlKVxyXG4gICAgZmV0Y2goe1xyXG4gICAgICBzb3J0RmllbGQ6IHNvcnRlci5jb2x1bW5LZXksXHJcbiAgICAgIHNvcnRPcmRlcjogc29ydGVyLm9yZGVyLFxyXG4gICAgICBwYWdpbmF0aW9uLFxyXG4gICAgICBmaWx0ZXJzOiBmaWx0ZXJzLnBhY2thZ2UsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRlbGV0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdERUxFVEUnKVxyXG4gICAgLy8gY29uc3QgZGF0YSA9IHtcclxuICAgIC8vICAgJ29yZ2FuaXphdGlvbl9uYW1lJzogdmFsdWUub3JnYW5pemF0aW9uX25hbWUsXHJcbiAgICAvLyB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgY29uc3QgcmVnaXN0ZXJEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5kZWxldGUoJ2FkbWluL21hbmFnZW1lbnQvbGFuZGluZy1wYWdlLycgKyBkYXRhRGVsZXRlLmludHJvX2lkLCB7fSk7XHJcbiAgICBpZiAocmVnaXN0ZXJEYXRhLmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICBvcGVuTm90aWZpY2F0aW9uU3VjY2VzcygpXHJcbiAgICAgIC8vIGZldGNoT3JnYW5pemF0aW9uRGF0YSgpO1xyXG4gICAgICBzZXRWaXNpYmxlTW9kYWxEZWxldGUoZmFsc2UpXHJcbiAgICAgIGZldGNoKHsgcGFnaW5hdGlvbiB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9wZW5Ob3RpZmljYXRpb25GYWlsKHJlZ2lzdGVyRGF0YS5kYXRhLm1lc3NhZ2UpXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGlkZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0VmlzaWJsZU1vZGFsRGVsZXRlKGZhbHNlKVxyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCBvcGVuTm90aWZpY2F0aW9uU3VjY2VzcyA9ICgpID0+IHtcclxuICAgIGFwaS5zdWNjZXNzKHtcclxuICAgICAgbWVzc2FnZTogYOC4peC4muC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iGAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAn4Lil4Lia4LiC4LmJ4Lit4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIJyxcclxuICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvbkZhaWwgPSAobWVzc2dhZSkgPT4ge1xyXG4gICAgYXBpLmVycm9yKHtcclxuICAgICAgbWVzc2FnZTogYOC4nuC4muC4m+C4seC4jeC4q+C4suC4o+C4sOC4q+C4p+C5iOC4suC4h+C4geC4suC4o+C4peC4muC4guC5ieC4reC4oeC4ueC4pWAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBtZXNzZ2FlLFxyXG4gICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZVBhZ2U9e1wi4LiI4Lix4LiU4LiB4Liy4Lij4Lir4LiZ4LmJ4LiyIGxhbmRpbmcgcGFnZVwifSBpc01haW49e3RydWV9IGluZGV4TWVudT17XCIzXCJ9IHRpdGxlPVwiR292ZXJubWVudCAtIEFkbWluIG1hbmFnZW1lbnRcIiB1cmw9e29yaWdpbn0gb3JpZ2luPXtvcmlnaW59IHVzZXI9e2xvZ2lufSBwcm9wcz17cHJvcHN9XHJcbiAgICAgIF9yb3V0ZXM9e1tcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYXRoOiAnL2FkbWluL2Rhc2hib3JhZCcsXHJcbiAgICAgICAgICBicmVhZGNydW1iTmFtZTogJ+C4q+C4meC5ieC4suC4q+C4peC4seC4gScsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgcGF0aDogJy9hZG1pbi9tYW5hZ2VtZW50LWF1dG8tbGFuZGluZ3BhZ2UnLFxyXG4gICAgICAgICAgYnJlYWRjcnVtYk5hbWU6ICfguIjguLHguJTguIHguLLguKPguKvguJnguYnguLIgbGFuZGluZyBwYWdlJyxcclxuICAgICAgICB9XX1cclxuICAgID5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7Y29udGV4dEhvbGRlcn1cclxuICAgICAgICA8Um93ID5cclxuICAgICAgICAgIDxDb2wgc3Bhbj17MjR9IGNsYXNzTmFtZT1cIiBwYi0xXCI+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPENvbCBzcGFuPXsxOH0gY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluL21hbmFnZW1lbnQtYXV0by1sYW5kaW5ncGFnZS9hZGQtbGFuZGluZ3BhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgLy9vbkNsaWNrPXsoZSkgPT4gaGFuZGxlTG9nb3V0KGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggbGc6dy1hdXRvIHctZnVsbCBweC0yIHB5LTIgcm91bmRlZCBoLTggdGV4dC13aGl0ZSBiZy1ncmVlbi02MDAgZm9udC1ib2xkIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBob3ZlcjpiZy1ncmVlbi02MDAgaG92ZXI6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4LmA4Lie4Li04LmI4LihIGxhbmRpbmcgcGFnZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBzcGFuPXs2fSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBqdXN0aWZ5LWl0ZW1zLWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCIganVzdGlmeS1lbmQganVzdGlmeS1pdGVtcy1lbmQgXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWFyY2ggcGxhY2Vob2xkZXI9XCJpbnB1dCBzZWFyY2ggdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25TZWFyY2g9e29uU2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgIGVudGVyQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgey8qIDxDb2wgc3Bhbj17MTJ9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1pdGVtcy1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+ICovfVxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICA8VGFibGVcclxuICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICByb3dLZXk9e3JlY29yZCA9PiByZWNvcmQuaW50cm9faWR9XHJcbiAgICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgICAgICAgcGFnaW5hdGlvbj17cGFnaW5hdGlvbn1cclxuICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGFibGVDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIuC4hOC4uOC4k+C4leC5ieC4reC4h+C4geC4suC4o+C4peC4muC4guC5ieC4reC4oeC4ueC4peC4q+C4o+C4t+C4reC5hOC4oeC5iD9cIlxyXG4gICAgICAgIHZpc2libGU9e3Zpc2libGVNb2RhbERlbGV0ZX1cclxuICAgICAgICBvbk9rPXtvbkRlbGV0ZX1cclxuICAgICAgICBvbkNhbmNlbD17aGlkZU1vZGFsfVxyXG4gICAgICAgIG9rVGV4dD1cIuC4peC4mlwiXHJcbiAgICAgICAgY2FuY2VsVGV4dD1cIuC4ouC4geC5gOC4peC4tOC4gVwiXHJcbiAgICAgICAgb2tCdXR0b25Qcm9wcz17e1xyXG4gICAgICAgICAgJ3R5cGUnOiBcInByaW1hcnlcIixcclxuICAgICAgICAgICdkYW5nZXInOiB0cnVlXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxwPuC4hOC4uOC4k+C4leC5ieC4reC4h+C4geC4suC4o+C4peC4miBcIntkYXRhRGVsZXRlID8gZGF0YURlbGV0ZS5pbnRyb190aXRsZSA6IFwiXCJ9XCIg4Lir4Lij4Li34Lit4LmE4Lih4LmIPyAgPC9wPlxyXG5cclxuICAgICAgPC9Nb2RhbD5cclxuXHJcblxyXG4gICAgPC9MYXlvdXQgPlxyXG4gICk7XHJcbn1cclxuLyogZ2V0U2VydmVyU2lkZVByb3BzICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgcmVxIH0gPSBjb250ZXh0O1xyXG4gIGNvbnN0IHsgb3JpZ2luIH0gPSBhYnNvbHV0ZVVybChyZXEpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgb3JpZ2luLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==