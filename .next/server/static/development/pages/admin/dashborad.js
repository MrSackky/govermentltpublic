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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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

/***/ "./pages/admin/dashborad/index-admin.js":
/*!**********************************************!*\
  !*** ./pages/admin/dashborad/index-admin.js ***!
  \**********************************************/
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
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../middleware/utils */ "./middleware/utils.js");
/* harmony import */ var _components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/layout/LayoutAdmin */ "./components/layout/LayoutAdmin.jsx");
/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-google-charts */ "react-google-charts");
/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_google_charts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\govermentlt\\pages\\admin\\dashborad\\index-admin.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* utils */


/* components */

 // import UserNav from '../components/navigation/User';




const {
  Text,
  Title
} = antd__WEBPACK_IMPORTED_MODULE_5__["Typography"];
const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_5__["Input"];
function Home(props) {
  const {
    origin,
    userInfo
  } = props;
  const {
    0: news,
    1: setNews
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: packageInfo,
    1: setPackageInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: sizePackage,
    1: setSizePackage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("0 mb");
  const {
    0: sizeFree,
    1: setSizeFree
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: sizeUsed,
    1: setSizeUsed
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: datediffExpried,
    1: setDatediffExpried
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: colorExpried,
    1: setColorExpried
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("bg-green-600");
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([["Disk used", "Disk free"], ["Disk used", 0.05], ["Disk free", 49.65]]);
  const pieOptions = {
    title: "",
    pieHole: 0.5,
    slices: [{
      color: "#2BB673"
    }, {
      color: "#4d4d4d"
    }, {
      color: "#007fad"
    }, {
      color: "#e9a227"
    }],
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "233238",
        fontSize: 14
      }
    },
    tooltip: {
      showColorCode: true
    },
    chartArea: {
      left: 0,
      top: 0,
      width: "100%",
      height: "80%"
    },
    fontName: "Roboto"
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchOrganizationData();
    fetchPackageData();
  }, []);

  const fetchOrganizationData = async () => {
    var _datediffExpried = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["getDatediff"])(userInfo.date_expired);

    console.log("_datediffExpried");
    console.log(_datediffExpried);

    if (parseInt(_datediffExpried) < 0) {
      setColorExpried("bg-red-600");
      console.log("_datediffExpried bg-red-600");
    } else if (parseInt(_datediffExpried) <= 30) {
      setColorExpried("bg-yellow-600");
      console.log("_datediffExpried bg-yellow-600");
    }

    setDatediffExpried(_datediffExpried);

    const _size = Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["bytesToMB"])(userInfo ? userInfo.size_used : 0);

    setSizeUsed(_size);

    const _newsData = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["apiInstance"])().get('information-news/1');

    setNews(_newsData.data.information_news);
  };

  const fetchPackageData = async () => {
    const _data = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["apiInstance"])().get('package/' + (userInfo ? userInfo.package_id : 0));

    if (_data.data.packageData.size_limit == -1) {
      setSizePackage("UNLIMITED");
    } else {
      const _size = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["bytesToSize"])(_data.data.packageData.size_limit);

      setSizePackage(_size);

      let _sizeFree = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["bytesToMB"])(_data.data.packageData.size_limit);

      let _sizeUsed = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["bytesToMB"])(userInfo ? userInfo.size_used : 0); // console.log("_sizeUsed: " + _sizeUsed)
      // console.log("_sizeFree: " + _sizeFree)


      setData([['Pizza', 'Popularity'], ['Size Used', parseFloat(_sizeUsed)], ['Size Free', parseFloat(_sizeFree)]]);
    }

    setPackageInfo(_data.data.packageData);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    span: 20,
    className: "p-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: news ? news.infor_detail : ""
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    span: 4,
    className: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    span: 24,
    className: colorExpried + " p-8 rounded-lg text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }, "\u0E41\u0E1E\u0E04\u0E40\u0E01\u0E08: ", packageInfo ? packageInfo.name_package : "", " ", sizePackage, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 15
    }
  }), "\u0E27\u0E31\u0E19\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38 ", userInfo ? Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["convertDatetoThaiDate"])(userInfo.date_expired) : "", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 15
    }
  }), "(", datediffExpried + " วัน", ")")), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: " border-green-600 border-2 rounded-lg mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    span: 24,
    className: "mt-2 p-8 pt-2 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }, "\u0E1E\u0E37\u0E19\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E44\u0E1B ", sizeUsed ? sizeUsed == 'NaN' ? 0 : sizeUsed : 0, " MB", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 81
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 87
    }
  }), __jsx(react_google_charts__WEBPACK_IMPORTED_MODULE_4___default.a, {
    chartType: "PieChart",
    data: data,
    options: pieOptions,
    graph_id: "PieChart" // width={"90%"}
    // height={"400px"}
    ,
    loader: __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 25
      }
    }, "Loading Chart"),
    legend_toggle: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 15
    }
  }))))));
}
/* getServerSideProps */

async function getServerSideProps(context) {
  const {
    req
  } = context;
  const {
    origin
  } = Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["absoluteUrl"])(req);
  return {
    props: {
      origin
    }
  };
}

/***/ }),

/***/ "./pages/admin/dashborad/index-super-admin.js":
/*!****************************************************!*\
  !*** ./pages/admin/dashborad/index-super-admin.js ***!
  \****************************************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../middleware/utils */ "./middleware/utils.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\govermentlt\\pages\\admin\\dashborad\\index-super-admin.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* utils */






const {
  Search
} = antd__WEBPACK_IMPORTED_MODULE_4__["Input"];
const {
  Text,
  Title
} = antd__WEBPACK_IMPORTED_MODULE_4__["Typography"];
function Home(props) {
  const {
    origin
  } = props;
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
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
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: filters,
    1: setFilters
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: totalUser,
    1: setTotalUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: totalWillExpired,
    1: setTotalWillExpired
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: totalExpired,
    1: setTotalExpired
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: apiTxt,
    1: setApiTxt
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('dashborad-all');
  const {
    0: today,
    1: setToday
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: willExpried,
    1: setWillExpried
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: expried,
    1: setExpried
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: apiTxtWillExpried,
    1: setApiTxtWillExpried
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('dashborad-will-expried');
  const {
    0: txtMenu,
    1: setTextMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('ผู้ใช้ทั้งหมด');
  const {
    0: dataDelete,
    1: setDataDelete
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: visibleModalDelete,
    1: setVisibleModalDelete
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [api, contextHolder] = antd__WEBPACK_IMPORTED_MODULE_4__["notification"].useNotification();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    var _filters = [];
    pagination.filters = _filters;
    fetch({
      pagination
    });
    fetchWillExprired({
      pagination
    });
    fetchExprired({
      pagination
    });
  }, []);

  const showModal = data => {
    console.log('data deletd');
    console.log(data);
    setDataDelete(data);
    setVisibleModalDelete(true);
  };

  const hideModal = () => {
    setVisibleModalDelete(false);
  };

  const onDelete = async () => {
    // console.log('DELETE')
    // const data = {
    //   'organization_name': value.organization_name,
    // }
    // console.log(data)
    const registerData = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["apiInstance"])().delete('organization/' + dataDelete.organization_id, {});

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

  const openNotificationSuccess = () => {
    antd__WEBPACK_IMPORTED_MODULE_4__["notification"].success({
      message: `ลบข้อมูลสำเร็จ`,
      description: 'ลบข้อมูลสำเร็จ',
      placement: 'topRight'
    });
  };

  const openNotificationFail = messgae => {
    antd__WEBPACK_IMPORTED_MODULE_4__["notification"].error({
      message: `พบปัญหาระหว่างการลบข้อมูล`,
      description: messgae,
      placement: 'topRight'
    });
  };

  const columns = [{
    title: 'วันที่สมัคร',
    dataIndex: '',
    sorter: true,
    key: 'date_created',
    render: data => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }
    }, " ", Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["convertDatetoThaiDate"])(Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["convertDateDBtoDatePickerNoTime"])(data.date_created)), " ")) // render: name => `${name.first} ${name.last}`,
    // width: '20%',
    // defaultSortOrder: 'descend',

  }, {
    title: 'วันที่หมดอายุ',
    dataIndex: '',
    sorter: true,
    key: 'date_expired',
    render: data => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }
    }, " ", Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["convertDatetoThaiDate"])(Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["convertDateDBtoDatePickerNoTime"])(data.date_expired)), " ")) // render: name => `${name.first} ${name.last}`,
    // width: '20%',
    // defaultSortOrder: 'descend',

  }, {
    title: 'ชื่อหน่วยงาน',
    dataIndex: 'organization_name',
    sorter: true // render: name => `${name.first} ${name.last}`,
    // width: '20%',
    // defaultSortOrder: 'descend',

  }, {
    title: 'ใช้พื้นที่',
    dataIndex: '',
    sorter: true,
    key: 'size_used',
    render: data => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }
    }, " ", Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["bytesToSize"])(data.size_used), "  ")) // render: name => `${name.first} ${name.last}`,
    // width: '20%',
    // defaultSortOrder: 'descend',

  }, {
    title: 'package',
    dataIndex: '',
    key: 'package',
    sorter: true,
    render: data => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }
    }, " ", data.packages.name_package, " ")),
    filters: [{
      text: 'Free Package',
      value: 1
    }, {
      text: 'Connect Package',
      value: 2
    }, {
      text: 'Standard Package',
      value: 3
    }, {
      text: 'Premium Package',
      value: 4
    }] // render: name => `${name.first} ${name.last}`,
    // width: '20%',
    // defaultSortOrder: 'descend',

  }, {
    title: 'สถานะ',
    dataIndex: '',
    key: 'is_use',
    sorter: true,
    render: data => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }
    }, " ", data.is_use == 1 ? "ใช้งาน" : "ไม่ใช้งาน", " ")) // render: name => `${name.first} ${name.last}`,
    // width: '20%',
    // defaultSortOrder: 'descend',

  }, {
    title: '',
    dataIndex: '',
    key: 'x',
    render: data => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      type: "primary",
      size: "default",
      onClick: () => gotoPage(data.organization_id),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 9
      }
    }, " \u0E41\u0E01\u0E49\u0E44\u0E02 "), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      className: "ml-1",
      type: "danger",
      onClick: () => showModal(data),
      size: "default",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
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

  const gotoPage = id => {
    console.log(id);
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/admin/management-organization/organization/' + id);
  };

  const usedSize = async size_used => {
    var _size = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["bytesToMB"])(parseInt(size_used));

    return _size;
  };

  const handleTableChange = (pagination, filters, sorter) => {
    console.log(sorter);
    setPagination({
      pageSize: pagination.pageSize,
      current: pagination.current
    });
    setFilters(filters.package);

    switch (apiTxt) {
      case "dashborad-will-expried":
        fetchWillExpriredData({
          sortField: sorter.columnKey,
          sortOrder: sorter.order,
          pagination,
          filters: filters.package
        });
        break;

      case "dashborad-expried":
        fetchExpriredData({
          sortField: sorter.columnKey,
          sortOrder: sorter.order,
          pagination,
          filters: filters.package
        });
        break;

      default:
        fetchData({
          sortField: sorter.columnKey,
          sortOrder: sorter.order,
          pagination,
          filters: filters.package
        });
        break;
    }
  };

  const onSearch = async _search => {
    setLoading(true);
    setSearch(_search);
    setPagination({
      pageSize: pagination.pageSize,
      current: 1
    });

    var _today = moment__WEBPACK_IMPORTED_MODULE_5___default()().format('YYYY-MM-DD');

    var _willExpried = Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["addDays"])(_today, 31);

    var willExpriedDateString = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["formatDateWithoutTime"])(_willExpried);

    switch (apiTxt) {
      case "dashborad-will-expried":
        fetchWillExpriredData({
          pagination: {
            pageSize: pagination.pageSize,
            current: 1
          },
          search: _search
        });
        break;

      case "dashborad-expried":
        fetchExpriredData({
          pagination: {
            pageSize: pagination.pageSize,
            current: 1
          },
          search: _search
        });
        break;

      case "dashborad-all":
        fetchData({
          pagination: {
            pageSize: pagination.pageSize,
            current: 1
          },
          search: _search
        });
        break;
    } // const addactivitiesData = await apiInstance().get(
    //   'organization/' + apiTxt + '?results=' + pagination.pageSize + '&page=1&search=' + _search + "&filters=" + filters
    // );
    // setData(addactivitiesData.data.results)
    // setLoading(false)

  };

  const fetch = async (params = {}) => {
    setLoading(true);
    const addactivitiesData = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["apiInstance"])().get('organization/' + apiTxt + '?results=' + params.pagination.pageSize + '&page=' + params.pagination.current + "&search=" + search + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters);
    setData(addactivitiesData.data.results);
    setPagination(_objectSpread(_objectSpread({}, params.pagination), {}, {
      total: addactivitiesData.data.totalCount // 200 is mock data, you should read it from server
      // total: data.totalCount,

    }));
    setTotalUser(addactivitiesData.data.totalCount);
    setLoading(false);
  };

  const fetchData = async (params = {}) => {
    setLoading(true);
    const addactivitiesData = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["apiInstance"])().get('organization/dashborad-all?results=' + params.pagination.pageSize + '&page=' + params.pagination.current + "&search=" + (params.search ? params.search : "") + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters);
    setData(addactivitiesData.data.results);
    setPagination(_objectSpread(_objectSpread({}, params.pagination), {}, {
      total: addactivitiesData.data.totalCount // 200 is mock data, you should read it from server
      // total: data.totalCount,

    })); // setTotalUser(addactivitiesData.data.totalCount)

    setLoading(false);
  };

  const fetchWillExprired = async (params = {}) => {
    var myCurrentDate = new Date();

    var _today = moment__WEBPACK_IMPORTED_MODULE_5___default()().format('YYYY-MM-DD'); // var _today = myCurrentDate;


    console.log("_today");
    console.log(_today);

    var _willExpried = Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["addDays"])(_today, 31);

    console.log("_willExpried");
    var willExpriedDateString = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["formatDateWithoutTime"])(_willExpried);
    pagination.today = _today;
    pagination.willExpried = willExpriedDateString; // setExpried(_expried)

    setPagination({
      pageSize: pagination.pageSize,
      current: 1
    });

    const _Data = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["apiInstance"])().get('organization/' + apiTxtWillExpried + '?results=' + params.pagination.pageSize + "&page=1&search=" + search + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters + "&today=" + params.pagination.today + "&willExpried=" + params.pagination.willExpried);

    console.log("_Data fetchWillExprired");
    console.log(_Data);
    setTotalWillExpired(_Data.data.totalCount);
  };

  const fetchWillExpriredData = async (params = {}) => {
    var myCurrentDate = new Date();

    var _today = moment__WEBPACK_IMPORTED_MODULE_5___default()().format('YYYY-MM-DD'); // var _today = myCurrentDate;


    console.log("_today");
    console.log(_today);

    var _willExpried = Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["addDays"])(_today, 31);

    console.log("_willExpried");
    var willExpriedDateString = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["formatDateWithoutTime"])(_willExpried);
    params.pagination.today = _today;
    params.pagination.willExpried = willExpriedDateString; // setExpried(_expried)

    setPagination({
      pageSize: pagination.pageSize,
      current: 1
    });

    const _Data = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["apiInstance"])().get('organization/' + apiTxtWillExpried + '?results=' + params.pagination.pageSize + "&page=" + params.pagination.current + "&search=" + (params.search ? params.search : "") + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters + "&today=" + params.pagination.today + "&willExpried=" + params.pagination.willExpried);

    console.log("_Data fetchWillExprired");
    console.log(_Data);
    setData(_Data.data.results);
    setPagination(_objectSpread(_objectSpread({}, params.pagination), {}, {
      total: _Data.data.totalCount // 200 is mock data, you should read it from server
      // total: data.totalCount,

    })); // setTotalWillExpired(_Data.data.totalCount)

    setLoading(false);
  };

  const fetchExprired = async (params = {}) => {
    var myCurrentDate = new Date();

    var _today = moment__WEBPACK_IMPORTED_MODULE_5___default()().format('YYYY-MM-DD'); // var _today = myCurrentDate;


    console.log("_today");
    console.log(_today);

    var _willExpried = Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["addDays"])(_today, 31);

    console.log("_willExpried");
    var willExpriedDateString = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["formatDateWithoutTime"])(_willExpried);
    params.pagination.today = _today;
    params.pagination.willExpried = willExpriedDateString; // setExpried(_expried)

    setPagination({
      pageSize: pagination.pageSize,
      current: 1
    });

    const _Data = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["apiInstance"])().get('organization/dashborad-expried?results=' + params.pagination.pageSize + "&page=" + params.pagination.current + "&search=" + search + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters + "&today=" + params.pagination.today + "&willExpried=" + params.pagination.willExpried);

    console.log("_Data fetchWillExprired");
    console.log(_Data);
    setTotalExpired(_Data.data.totalCount);
  };

  const fetchExpriredData = async (params = {}) => {
    var myCurrentDate = new Date();

    var _today = moment__WEBPACK_IMPORTED_MODULE_5___default()().format('YYYY-MM-DD'); // var _today = myCurrentDate;


    console.log("_today");
    console.log(_today);

    var _willExpried = Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["addDays"])(_today, 31);

    console.log("_willExpried");
    var willExpriedDateString = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["formatDateWithoutTime"])(_willExpried);
    params.pagination.today = _today;
    params.pagination.willExpried = willExpriedDateString; // setExpried(_expried)

    setPagination({
      pageSize: pagination.pageSize,
      current: 1
    });

    const _Data = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["apiInstance"])().get('organization/dashborad-expried?results=' + params.pagination.pageSize + "&page=" + params.pagination.current + "&search=" + (params.search ? params.search : "") + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters + "&today=" + params.pagination.today + "&willExpried=" + params.pagination.willExpried);

    console.log("_Data fetchWillExprired");
    console.log(_Data);
    setData(_Data.data.results);
    setPagination(_objectSpread(_objectSpread({}, params.pagination), {}, {
      total: _Data.data.totalCount // 200 is mock data, you should read it from server
      // total: data.totalCount,

    })); // setTotalExpired(_Data.data.totalCount)

    setLoading(false);
  };

  const handleStatisticClick = value => {
    setSearch("");

    switch (value) {
      case "willExpried":
        setTextMenu("จำนวนผู้ใช้งานที่กำลังจะหมดอายุ");
        setApiTxt("dashborad-will-expried");
        fetchWillExpriredData({
          pagination: {
            pageSize: pagination.pageSize,
            current: 1
          }
        });
        break;

      case "expried":
        setTextMenu("จำนวนผู้ใช้งานที่หมดอายุ");
        setApiTxt("dashborad-expried");
        fetchExpriredData({
          pagination: {
            pageSize: pagination.pageSize,
            current: 1
          }
        });
        break;

      default:
        setTextMenu("จำนวนผู้ใช้งานทั้งหมด");
        setApiTxt("dashborad-all");
        fetchData({
          pagination: {
            pageSize: pagination.pageSize,
            current: 1
          }
        });
        break;
    }
  };

  const promiseState = async value => new Promise(resolve => setApiTxt(value, resolve));

  const onChangeSearch = value => {
    console.log(value);
    setSearch(value.target.value);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 4,
    className: "lg:col-3 md:col-12 p-4 rounded-lg text-white bg-green-600 mr-4 mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 9
    }
  }, __jsx("a", {
    onClick: () => {
      handleStatisticClick('all');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 11
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Statistic"], {
    title: "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
    value: totalUser,
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["LikeOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 524,
        columnNumber: 130
      }
    }),
    valueStyle: {
      color: "white",
      fontSize: "2rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 63
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 4,
    className: "lg:col-3 md:col-12 p-4 rounded-lg text-white bg-yellow-600 mr-4 mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
      columnNumber: 9
    }
  }, __jsx("a", {
    onClick: () => {
      handleStatisticClick('willExpried');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Statistic"], {
    title: "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E25\u0E31\u0E07\u0E08\u0E30\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38",
    value: totalWillExpired,
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["LikeOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 531,
        columnNumber: 154
      }
    }),
    valueStyle: {
      color: "white",
      fontSize: "2rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 70
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 4,
    className: "lg:col-3 md:col-12 p-4 rounded-lg text-white bg-red-600 mr-4 mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 9
    }
  }, __jsx("a", {
    onClick: () => {
      handleStatisticClick('expried');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 11
    }
  }, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Statistic"], {
    title: "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38",
    value: totalExpired,
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["LikeOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 538,
        columnNumber: 140
      }
    }),
    valueStyle: {
      color: "white",
      fontSize: "2rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 67
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "w-full mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    className: " pb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 17
    }
  }, __jsx(Title, {
    level: 2,
    className: "mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 19
    }
  }, txtMenu))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    className: "flex justify-end justify-items-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 15
    }
  }, __jsx(Search, {
    placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",
    value: search,
    onChange: value => onChangeSearch(value),
    onSearch: onSearch,
    enterButton: true,
    allowClear: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 17
    }
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Table"], {
    className: "w-full",
    columns: columns,
    rowKey: record => record.organization_id,
    dataSource: data,
    pagination: pagination,
    loading: loading,
    onChange: handleTableChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569,
      columnNumber: 13
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
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
      lineNumber: 581,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593,
      columnNumber: 11
    }
  }, "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A \"", dataDelete ? dataDelete.organization_name : "", "\" \u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?  "))));
}
/* getServerSideProps */

async function getServerSideProps(context) {
  const {
    req
  } = context;
  const {
    origin
  } = Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["absoluteUrl"])(req);
  return {
    props: {
      origin
    }
  };
}

/***/ }),

/***/ "./pages/admin/dashborad/index.js":
/*!****************************************!*\
  !*** ./pages/admin/dashborad/index.js ***!
  \****************************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../middleware/utils */ "./middleware/utils.js");
/* harmony import */ var _components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/layout/LayoutAdmin */ "./components/layout/LayoutAdmin.jsx");
/* harmony import */ var _index_admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-admin */ "./pages/admin/dashborad/index-admin.js");
/* harmony import */ var _index_super_admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-super-admin */ "./pages/admin/dashborad/index-super-admin.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\govermentlt\\pages\\admin\\dashborad\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* utils */

/* components */



 // import UserNav from '../components/navigation/User';



const {
  Text,
  Title
} = antd__WEBPACK_IMPORTED_MODULE_5__["Typography"];
const {
  TextArea
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
  const {
    0: shouldRun,
    1: setShouldRun
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const contentStyle = {
    height: 'auto',
    textAlign: 'center'
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {// fetchUserLogin()
  }, []);

  async function fetchUserLogin() {
    const userLogin = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_1__["checkIsLogin"])(); // console.log(userLogin)

    setUser(userLogin);
  }

  return __jsx(_components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Government - Admin management",
    titlePage: "\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01",
    isMain: 1,
    url: origin,
    origin: origin,
    user: login,
    props: props,
    indexMenu: "0",
    _routes: [{
      path: '/admin/dashborad',
      breadcrumbName: 'หน้าหลัก'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, user && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, user.type_user == 1 && __jsx(_index_super_admin__WEBPACK_IMPORTED_MODULE_4__["default"], {
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }), user.type_user == 2 && __jsx(_index_admin__WEBPACK_IMPORTED_MODULE_3__["default"], {
    userInfo: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }))));
}
/* getServerSideProps */

async function getServerSideProps(context) {
  const {
    req
  } = context;
  const {
    origin
  } = Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_1__["absoluteUrl"])(req);
  return {
    props: {
      origin
    }
  };
}

/***/ }),

/***/ 6:
/*!**********************************************!*\
  !*** multi ./pages/admin/dashborad/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\govermentlt\pages\admin\dashborad\index.js */"./pages/admin/dashborad/index.js");


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

/***/ "react-google-charts":
/*!**************************************!*\
  !*** external "react-google-charts" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-charts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdkJhci9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaWRlQmFyL1NpZGVCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0QWRtaW4uanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9Ub3BpY01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4vZGFzaGJvcmFkL2luZGV4LWFkbWluLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FkbWluL2Rhc2hib3JhZC9pbmRleC1zdXBlci1hZG1pbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9kYXNoYm9yYWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1nb29nbGUtY2hhcnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJOYXZCYXIiLCJtZW51IiwidXNlciIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlU3RhdGUiLCJ0eXBlX3VzZXIiLCJuYW1lX29yZ2FuaXphdGlvbnMiLCJlbWFpbCIsIlNpZGVCYXIiLCJIZWFkZXIiLCJGb290ZXIiLCJTaWRlciIsIkNvbnRlbnQiLCJMYXlvdXQiLCJTdWJNZW51IiwiTWVudSIsIkxheW91dEFkbWluIiwiY2hpbGRyZW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJ0eXBlIiwidXJsIiwiaW1hZ2UiLCJvcmlnaW4iLCJpbmRleCIsInByb3BzIiwiX3JvdXRlcyIsImluZGV4TWVudSIsImlzTWFpbiIsInRpdGxlUGFnZSIsImluZGV4U3ViTWVudSIsImNvbGxhcHNlZCIsInNldENvbGxhcHNlZCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInNldFVzZXIiLCJ0b3BpY3MiLCJpY29uIiwidG9waWNzMiIsImNvbnRlbnRJbmRleCIsInNldENvbnRlbnRJbmRleCIsInNlbGVjdGVkS2V5Iiwic2V0U2VsZWN0ZWRLZXkiLCJjaGFuZ2VTZWxlY3RlZEtleSIsImV2ZW50Iiwia2V5IiwiZ290b1BhZ2UiLCJSb3V0ZXIiLCJwdXNoIiwidXNlRWZmZWN0IiwiZmV0Y2hVc2VyTG9naW4iLCJyb3V0ZXMyIiwicGF0aCIsImJyZWFkY3J1bWJOYW1lIiwiaXRlbVJlbmRlciIsInJvdXRlIiwicGFyYW1zIiwicm91dGVzIiwicGF0aHMiLCJsYXN0IiwiaW5kZXhPZiIsImxlbmd0aCIsImpvaW4iLCJ1c2VyTG9naW4iLCJjaGVja0lzTG9naW4iLCJoYW5kbGVDbGljayIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nQm90dG9tIiwibWFwIiwib2JqIiwid2luZG93IiwiaGlzdG9yeSIsImJhY2siLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsIm1pbkhlaWdodCIsIlRvcGljTWVudSIsInNlbGVjdGVkU3ViS2V5Iiwic3R5bGVkVG9waWNzIiwiZm9yRWFjaCIsInRvcGljIiwic3R5bGVkVG9waWNzQ2hpbGRyZW4iLCJ0b3BpY0NoaWxkcmVuIiwiaW5kZXhDaGlsZHJlbiIsIndpZHRoIiwiY29sb3IiLCJlIiwiaGFuZGxlTG9nb3V0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiQ29va2llcyIsInJlbW92ZSIsIlNFQ1JFVF9LRVkiLCJwcm9jZXNzIiwiZW52IiwiSldUX0tFWSIsInZlcmlmeVRva2VuIiwiand0VG9rZW4iLCJqd3QiLCJ2ZXJpZnkiLCJnZXRBcHBDb29raWVzIiwicmVxIiwicGFyc2VkSXRlbXMiLCJoZWFkZXJzIiwiY29va2llIiwiY29va2llc0l0ZW1zIiwic3BsaXQiLCJjb29raWVzIiwicGFyc2VkSXRlbSIsImRlY29kZVVSSSIsImFic29sdXRlVXJsIiwic2V0TG9jYWxob3N0IiwicHJvdG9jb2wiLCJob3N0IiwibG9jYXRpb24iLCJhZGREYXlzIiwiZGF0ZSIsImRheXMiLCJyZXN1bHQiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImZvcm1hdERhdGVXaXRob3V0VGltZSIsImRhdGVTdHJpbmciLCJnZXRVVENGdWxsWWVhciIsImdldFVUQ01vbnRoIiwic2xpY2UiLCJnZXRVVENEYXRlIiwiYXBpSW5zdGFuY2UiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJ0b2tlbiIsImdldCIsInBhcnNlSnd0IiwiaXNFeHBpcmVkIiwiYmFzZTY0VXJsIiwiYmFzZTY0IiwicmVwbGFjZSIsImpzb25QYXlsb2FkIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiYXRvYiIsImMiLCJjaGFyQ29kZUF0IiwidG9TdHJpbmciLCJfanNvblBheWxvYWQiLCJKU09OIiwicGFyc2UiLCJkYXRlTm93IiwicGFyc2VJbnQiLCJleHAiLCJnZXRUaW1lIiwic3Vic3RyaW5nIiwiY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZSIsImRhdGVTcGxpdCIsImVycm9yIiwiY29udmVydERhdGVEQnRvRGF0ZVBpY2tlcldpdGhUaW1lIiwiY29udmVydERhdGV0b1RoYWlEYXRlIiwiX2RhdGUiLCJjb252ZXJ0TW9udGh0b1RoYWlNb250aCIsImNvbnZlcnRZZWFydG9UaGFpWWVhciIsInllYXIiLCJtb250aCIsImNvbnZlcnREYXRldG9BZGREQiIsImdldElQQWRkcmVzcyIsInJlcyIsImRhdGEiLCJjb3VudHJ5X2NvZGUiLCJjb3VudHJ5X25hbWUiLCJjaXR5IiwicG9zdGFsIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJJUHY0Iiwic3RhdGUiLCJieXRlc1RvU2l6ZSIsImJ5dGVzIiwic2l6ZXMiLCJpIiwicm91bmQiLCJwb3ciLCJieXRlc1RvTUIiLCJOdW1iZXIiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImdldERhdGVkaWZmIiwic3RhcnREYXRlIiwidGltZUVuZCIsIm1vbWVudCIsIm5ld1N0YXJ0RGF0ZSIsIm5ld0VuZERhdGUiLCJvbmVfZGF5IiwiY2VpbCIsImdldEN1cnJlbnREYXRlIiwic2VwYXJhdG9yIiwibmV3RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJocmVmIiwiYXMiLCJmb3JtYXRGdW5jIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwcmVmZXRjaGVkIiwib2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJnZXRPYnNlcnZlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0VXJsIiwiYXNIcmVmIiwibm9kZU5hbWUiLCJ0YXJnZXQiLCJpc0xvY2FsIiwic2Nyb2xsIiwic2hhbGxvdyIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJyZXNvbHZlZEhyZWYiLCJwYXJzZWRBcyIsImhhbmRsZVJlZiIsInJlZiIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwiZXJyIiwicmVuZGVyIiwiY2hpbGQiLCJDaGlsZHJlbiIsImVsIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwiUmVhY3QiLCJ3YXJuIiwiUHJvcFR5cGVzIiwicmVxdWlyZSIsImV4YWN0IiwiTGluayIsInBhc3NIcmVmIiwidmFsdWUiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInByZXBhcmVSb3V0ZSIsInRvUm91dGUiLCJhdHRlbXB0cyIsImlzU2VydmVyUmVuZGVyIiwicGF0aG5hbWUiLCJhZGRCYXNlUGF0aCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiZGVsQmFzZVBhdGgiLCJjcmVkZW50aWFscyIsImdldFJlc3BvbnNlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIlByb21pc2UiLCJmZXRjaE5leHREYXRhIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJ1cGRhdGUiLCJtb2QiLCJuZXdEYXRhIiwicmVsb2FkIiwib3B0aW9ucyIsImNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyZXNvbHZlIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJyZWplY3QiLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJmZXRjaENvbXBvbmVudCIsImNhbmNlbGxlZCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5IiwiVEVTVF9ST1VURSIsInJlIiwiZGVjb2RlIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsImVzY2FwZWRSb3V0ZSIsImVzY2FwZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsImlzT3B0aW9uYWwiLCIkMSIsImlzQ2F0Y2hBbGwiLCJwb3MiLCJyZXBlYXQiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJUZXh0IiwiVGl0bGUiLCJUeXBvZ3JhcGh5IiwiVGV4dEFyZWEiLCJJbnB1dCIsIkhvbWUiLCJ1c2VySW5mbyIsIm5ld3MiLCJzZXROZXdzIiwicGFja2FnZUluZm8iLCJzZXRQYWNrYWdlSW5mbyIsInNpemVQYWNrYWdlIiwic2V0U2l6ZVBhY2thZ2UiLCJzaXplRnJlZSIsInNldFNpemVGcmVlIiwic2l6ZVVzZWQiLCJzZXRTaXplVXNlZCIsImRhdGVkaWZmRXhwcmllZCIsInNldERhdGVkaWZmRXhwcmllZCIsImNvbG9yRXhwcmllZCIsInNldENvbG9yRXhwcmllZCIsInNldERhdGEiLCJwaWVPcHRpb25zIiwicGllSG9sZSIsInNsaWNlcyIsImxlZ2VuZCIsInBvc2l0aW9uIiwiYWxpZ25tZW50IiwidGV4dFN0eWxlIiwiZm9udFNpemUiLCJ0b29sdGlwIiwic2hvd0NvbG9yQ29kZSIsImNoYXJ0QXJlYSIsImxlZnQiLCJ0b3AiLCJoZWlnaHQiLCJmb250TmFtZSIsImZldGNoT3JnYW5pemF0aW9uRGF0YSIsImZldGNoUGFja2FnZURhdGEiLCJfZGF0ZWRpZmZFeHByaWVkIiwiZGF0ZV9leHBpcmVkIiwiX3NpemUiLCJzaXplX3VzZWQiLCJfbmV3c0RhdGEiLCJpbmZvcm1hdGlvbl9uZXdzIiwiX2RhdGEiLCJwYWNrYWdlX2lkIiwicGFja2FnZURhdGEiLCJzaXplX2xpbWl0IiwiX3NpemVGcmVlIiwiX3NpemVVc2VkIiwiX19odG1sIiwiaW5mb3JfZGV0YWlsIiwibmFtZV9wYWNrYWdlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsIlNlYXJjaCIsInBhZ2luYXRpb24iLCJzZXRQYWdpbmF0aW9uIiwiY3VycmVudCIsInBhZ2VTaXplIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZWFyY2giLCJzZXRTZWFyY2giLCJmaWx0ZXJzIiwic2V0RmlsdGVycyIsInRvdGFsVXNlciIsInNldFRvdGFsVXNlciIsInRvdGFsV2lsbEV4cGlyZWQiLCJzZXRUb3RhbFdpbGxFeHBpcmVkIiwidG90YWxFeHBpcmVkIiwic2V0VG90YWxFeHBpcmVkIiwiYXBpVHh0Iiwic2V0QXBpVHh0IiwidG9kYXkiLCJzZXRUb2RheSIsIndpbGxFeHByaWVkIiwic2V0V2lsbEV4cHJpZWQiLCJleHByaWVkIiwic2V0RXhwcmllZCIsImFwaVR4dFdpbGxFeHByaWVkIiwic2V0QXBpVHh0V2lsbEV4cHJpZWQiLCJ0eHRNZW51Iiwic2V0VGV4dE1lbnUiLCJkYXRhRGVsZXRlIiwic2V0RGF0YURlbGV0ZSIsInZpc2libGVNb2RhbERlbGV0ZSIsInNldFZpc2libGVNb2RhbERlbGV0ZSIsImFwaSIsImNvbnRleHRIb2xkZXIiLCJub3RpZmljYXRpb24iLCJ1c2VOb3RpZmljYXRpb24iLCJfZmlsdGVycyIsImZldGNoIiwiZmV0Y2hXaWxsRXhwcmlyZWQiLCJmZXRjaEV4cHJpcmVkIiwic2hvd01vZGFsIiwiaGlkZU1vZGFsIiwib25EZWxldGUiLCJyZWdpc3RlckRhdGEiLCJkZWxldGUiLCJvcmdhbml6YXRpb25faWQiLCJzdGF0dXMiLCJvcGVuTm90aWZpY2F0aW9uU3VjY2VzcyIsIm9wZW5Ob3RpZmljYXRpb25GYWlsIiwicGxhY2VtZW50IiwibWVzc2dhZSIsImNvbHVtbnMiLCJkYXRhSW5kZXgiLCJzb3J0ZXIiLCJkYXRlX2NyZWF0ZWQiLCJwYWNrYWdlcyIsInRleHQiLCJpc191c2UiLCJpZCIsInVzZWRTaXplIiwiaGFuZGxlVGFibGVDaGFuZ2UiLCJwYWNrYWdlIiwiZmV0Y2hXaWxsRXhwcmlyZWREYXRhIiwic29ydEZpZWxkIiwiY29sdW1uS2V5Iiwic29ydE9yZGVyIiwib3JkZXIiLCJmZXRjaEV4cHJpcmVkRGF0YSIsImZldGNoRGF0YSIsIm9uU2VhcmNoIiwiX3NlYXJjaCIsIl90b2RheSIsImZvcm1hdCIsIl93aWxsRXhwcmllZCIsIndpbGxFeHByaWVkRGF0ZVN0cmluZyIsImFkZGFjdGl2aXRpZXNEYXRhIiwicmVzdWx0cyIsInRvdGFsIiwidG90YWxDb3VudCIsIm15Q3VycmVudERhdGUiLCJfRGF0YSIsImhhbmRsZVN0YXRpc3RpY0NsaWNrIiwicHJvbWlzZVN0YXRlIiwib25DaGFuZ2VTZWFyY2giLCJyZWNvcmQiLCJvcmdhbml6YXRpb25fbmFtZSIsImxvZ2luIiwic2V0TG9naW4iLCJzaG91bGRSdW4iLCJzZXRTaG91bGRSdW4iLCJvbkNoYW5nZSIsImEiLCJiIiwiY29udGVudFN0eWxlIiwidGV4dEFsaWduIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUVBO0NBRUE7QUFDQTs7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsQ0FBQztBQUFFQyxNQUFGO0FBQVFDO0FBQVIsQ0FBRCxLQUFv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QUE7QUFBQTtBQUFBO0FBQUEsS0FPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dyRCxJQUFJLElBQUksbUVBQ05BLElBQUksQ0FBQ0ksU0FBTCxJQUFrQixDQUFsQixJQUNDLE1BQUMsMERBQUQ7QUFBaUIsUUFBSSxFQUFFSixJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkssRUFJTkEsSUFBSSxDQUFDSSxTQUFMLElBQWtCLENBQWxCLElBQ0MsTUFBQyxvREFBRDtBQUFZLFlBQVEsRUFBRUosSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxLLENBRFgsQ0FQRixDQURGO0FBdUJEO0FBQ0Q7O0FBQ08sZUFBZTZiLGtCQUFmLENBQWtDQyxPQUFsQyxFQUEyQztBQUNoRCxRQUFNO0FBQUVsVjtBQUFGLE1BQVVrVixPQUFoQjtBQUNBLFFBQU07QUFBRXZhO0FBQUYsTUFBYThGLHFFQUFXLENBQUNULEdBQUQsQ0FBOUI7QUFFQSxTQUFPO0FBQ0xuRixTQUFLLEVBQUU7QUFDTEY7QUFESztBQURGLEdBQVA7QUFLRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlFRCw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWRtaW5cXGRhc2hib3JhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRHJhd2VyLCBCdXR0b24sIEltYWdlLCBBdmF0YXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBNZW51T3V0bGluZWQsIFVzZXJPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbi8vIGltcG9ydCBcIi4vTmF2QmFyLm1vZHVsZS5jc3NcIjtcclxuLy8gaW1wb3J0IGxvZ28gZnJvbSBcIi4vLi4vLi4vbG9nby5zdmdcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IE5hdkJhciA9ICh7IG1lbnUsIHVzZXIgfSkgPT4ge1xyXG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtdFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBpY29uPXs8TWVudU91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZSh0cnVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCLguYDguKHguJnguLlcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1zY3JlZW5cIlxyXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50PVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFZpc2libGUoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge21lbnV9XHJcbiAgICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTcgdy1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9eydcXFxcaW1hZ2VzXFxcXGxvZ28tZ292ZXJubWVudC5wbmcnfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzaXplPXszMH0gaWNvbj17PFVzZXJPdXRsaW5lZCAvPn0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57IXVzZXIgPyBcIlwiIDogdXNlci50eXBlX3VzZXIgPT0gMSA/IFwi4Lic4Li54LmJ4LiU4Li54LmB4Lil4Lij4Liw4Lia4LiaXCIgOiB1c2VyLm5hbWVfb3JnYW5pemF0aW9uc308L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlVzZXI6IHshdXNlciA/IFwiXCIgOiB1c2VyLmVtYWlsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUxvZ291dChlKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCBsZzp3LWF1dG8gdy1mdWxsIHB4LTIgcHktMiByb3VuZGVkIGgtOCB0ZXh0LXdoaXRlIGJnLXJlZC02MDAgZm9udC1ib2xkIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBob3ZlcjpiZy1yZWQtNjAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIOC4reC4reC4geC4iOC4suC4geC4o+C4sOC4muC4mlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+ICovfVxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gXCJhbnRkXCI7XHJcbi8vIGltcG9ydCBcIi4vU2lkZUJhci5tb2R1bGUuY3NzXCJcclxuY29uc3QgU2lkZUJhciA9ICh7IG1lbnUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0LlNpZGVyXHJcbiAgICAgIGNsYXNzTmFtZT1cInNpZGViYXIgaC1hdXRvXCJcclxuICAgICAgYnJlYWtwb2ludD17XCJsZ1wifVxyXG4gICAgICB0aGVtZT1cImxpZ2h0XCJcclxuICAgICAgY29sbGFwc2VkV2lkdGg9ezB9XHJcbiAgICAgIHRyaWdnZXI9e251bGx9XHJcbiAgICA+XHJcbiAgICAgICAge21lbnV9XHJcbiAgICA8L0xheW91dC5TaWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhcjsiLCJpbXBvcnQge1xyXG4gIERhc2hib2FyZE91dGxpbmVkLCBNYWlsT3V0bGluZWQsIFRvb2xPdXRsaW5lZFxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgQnJlYWRjcnVtYiwgQ29sLCBMYXlvdXQsIE1lbnUsIFBhZ2VIZWFkZXIsIFJvdyB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG4vKiBDb21wb25lbnRzICovXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjaGVja0lzTG9naW4gfSBmcm9tICcuLi8uLi9taWRkbGV3YXJlL3V0aWxzJztcclxuLy8gaW1wb3J0IFRvcGljTWVudSBmcm9tIFwiLi9jb21wb25lbnRzL1RvcGljTWVudVwiO1xyXG5pbXBvcnQgVG9waWNNZW51IGZyb20gXCIuLy4uLy4uL2NvbXBvbmVudHMvbWVudS9Ub3BpY01lbnVcIjtcclxuLy8gaW1wb3J0IFwiLi9BcHAuY3NzXCI7XHJcbi8vICBpbXBvcnQgXCIuL0FwcC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4vLi4vLi4vY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyXCI7XHJcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuLy4uLy4uL2NvbXBvbmVudHMvU2lkZUJhci9TaWRlQmFyXCI7XHJcbi8vIGltcG9ydCBGb290ZXIgZnJvbSAnLi4vZm9vdGVyL0Zvb3RlckRlZmF1bHQnO1xyXG5jb25zdCB7IEhlYWRlciwgRm9vdGVyLCBTaWRlciwgQ29udGVudCB9ID0gTGF5b3V0O1xyXG5cclxuY29uc3QgeyBTdWJNZW51IH0gPSBNZW51O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dEFkbWluKHtcclxuICBjaGlsZHJlbixcclxuICB0aXRsZSA9ICdHb3Zlcm5tZW50JyxcclxuICBkZXNjcmlwdGlvbiA9ICdOZXh0LmpzIHdpdGggU2VxdWVsaXplIHwgQSBib2lsZXJwbGF0ZSBOZXh0LmpzIGFuZCBTZXF1ZWxpemUgZnJvbSBkeWFyZmkuZ2l0aHViLmlvJyxcclxuICBrZXl3b3JkcyA9ICdOZXh0LmpzLCBTZXF1ZWxpemUsIE9STSwgSldULCBKc29uIFdlYiBUb2tlbnMsIEF1dGhlbnRpY2F0aW9uLCBBcHBsaWNhdGlvbicsXHJcbiAgdHlwZSA9ICdvYmplY3QnLFxyXG4gIHVybCA9ICcvJyxcclxuICBpbWFnZSA9ICcvbmV4dGpzLnN2ZycsXHJcbiAgb3JpZ2luID0gJycsXHJcbiAgaW5kZXgsXHJcbiAgcHJvcHMsXHJcbiAgX3JvdXRlcyA9IFtdLFxyXG4gIGluZGV4TWVudSA9IFwiMVwiLFxyXG4gIGlzTWFpbiA9IGZhbHNlLFxyXG4gIHRpdGxlUGFnZSA9IFwidGl0bGVQYWdlXCIsXHJcbiAgaW5kZXhTdWJNZW51ID0gXCJcIlxyXG59KSB7XHJcbiAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgY29uc3QgdG9waWNzID0gW1xyXG4gICAgeyB0aXRsZTogXCLguKvguJnguYnguLLguKvguKXguLHguIFcIiwgaWNvbjogPCBEYXNoYm9hcmRPdXRsaW5lZCAvPiB9LFxyXG4gICAgeyB0aXRsZTogXCLguIjguLHguJTguIHguLLguKPguKvguJnguYjguKfguKLguIfguLLguJlcIiwgaWNvbjogPCBUb29sT3V0bGluZWQgLz4gfSxcclxuICAgIHsgdGl0bGU6IFwi4LiI4Lix4LiU4LiB4Liy4Lij4LiC4LmI4Liy4Lin4Lib4Lij4Liw4LiK4Liy4Liq4Lix4Lih4Lie4Lix4LiZ4LiY4LmMXCIsIGljb246IDwgVG9vbE91dGxpbmVkIC8+IH0sXHJcbiAgICB7IHRpdGxlOiBcIuC4iOC4seC4lOC4geC4suC4o+C4p+C4seC4meC4q+C4ouC4uOC4lOC4nuC4tOC5gOC4qOC4qVwiLCBpY29uOiA8IFRvb2xPdXRsaW5lZCAvPiB9LF07XHJcbiAgY29uc3QgdG9waWNzMiA9IFtcclxuICAgIHsgdGl0bGU6IFwi4Lir4LiZ4LmJ4Liy4Lir4Lil4Lix4LiBXCIsIGljb246IDwgRGFzaGJvYXJkT3V0bGluZWQgLz4gfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwi4LiI4Lix4LiU4LiB4Liy4Lij4LmA4LiZ4Li34LmJ4Lit4Lir4LiyXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+LFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIHsgdGl0bGU6IFwi4LiC4LmI4Liy4Lin4LiB4Li04LiI4LiB4Lij4Lij4LihXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+IH0sXHJcbiAgICAgICAgeyB0aXRsZTogXCLguILguYjguLLguKfguJvguKPguLDguIrguLLguKrguLHguKHguJ7guLHguJnguJjguYxcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgICAgICB7IHRpdGxlOiBcIuC4guC5iOC4suC4p+C4iOC4seC4lOC4i+C4t+C5ieC4reC4iOC4seC4lOC4iOC5ieC4suC4h1wiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAgICAgIHsgdGl0bGU6IFwi4Lil4Li04LiH4LiE4LmM4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZ4LiX4Li14LmI4LmA4LiB4Li14LmI4Lii4Lin4LiC4LmJ4Lit4LiHXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+IH0sXHJcbiAgICAgICAgeyB0aXRsZTogXCLguIHguKPguLDguJTguLLguJnguILguYjguLLguKdcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgICAgICB7IHRpdGxlOiBcIuC4hOC4peC4seC4h+C5gOC4reC4geC4quC4suC4o1wiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAgICAgIHsgdGl0bGU6IFwi4Liq4Liz4Lij4Lin4LiI4LiE4Lin4Liy4Lih4LiE4Li04LiU4LmA4Lir4LmH4LiZXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+IH0sXHJcbiAgICAgICAgeyB0aXRsZTogXCLguKfguLLguKPguKrguLLguKNcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgICAgICB7IHRpdGxlOiBcIuC4o+C4suC4ouC4iuC4t+C5iOC4reC4luC4p+C4suC4ouC4nuC4o+C4sOC4nuC4o1wiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCLguIjguLHguJTguIHguLLguKPguYDguKHguJnguLlcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4sXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgeyB0aXRsZTogXCLguYDguKHguJnguLnguKvguKXguLHguIFcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgICAgICB7IHRpdGxlOiBcIuC5gOC4oeC4meC4ueC4o+C4reC4h1wiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAgeyB0aXRsZTogXCLguILguYnguK3guKHguLnguKXguYDguKHguJnguLnguKPguYnguK3guIfguJfguLjguIHguILguYxcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgIHsgdGl0bGU6IFwi4LiC4LmJ4Lit4Lih4Li54Lil4LmA4Lih4LiZ4Li54LiV4Li04LiU4LiV4LmI4Lit4LmA4Lij4LiyXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+IH0sXHJcbiAgICB7IHRpdGxlOiBcIuC4o+C4suC4ouC4h+C4suC4meC4quC4o+C4uOC4m1wiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCLguJXguLHguYnguIfguITguYjguLLguKPguLDguJrguJpcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4sXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgeyB0aXRsZTogXCLguILguYnguK3guKHguLnguKXguK3guIfguITguYzguIHguKMo4LiI4Lix4LiU4LiB4Liy4Lij4LmC4Lil4LmC4LiB4LmJKVwiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAgICAgIHsgdGl0bGU6IFwi4LiI4Lix4LiU4LiB4Liy4Lij4LiY4Li14LihXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+IH0sXHJcbiAgICAgICAgeyB0aXRsZTogXCLguKrguYjguKfguJnguKvguLHguKfguYDguKfguYfguJrguYTguIvguJXguYxcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgICAgICB7IHRpdGxlOiBcIuC4iOC4seC4lOC4geC4suC4o+C4reC4t+C5iOC4meC5hlwiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgY29uc3QgW2NvbnRlbnRJbmRleCwgc2V0Q29udGVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzZWxlY3RlZEtleSwgc2V0U2VsZWN0ZWRLZXldID0gdXNlU3RhdGUoXCIwXCIpO1xyXG4gIGNvbnN0IGNoYW5nZVNlbGVjdGVkS2V5ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBrZXkgPSBldmVudC5rZXk7XHJcbiAgICBzZXRTZWxlY3RlZEtleShrZXkpO1xyXG4gICAgZ290b1BhZ2Uoa2V5KTtcclxuICAgIC8vIHNldENvbnRlbnRJbmRleCgra2V5KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnb3RvUGFnZSA9IChrZXkpID0+IHtcclxuXHJcbiAgICBpZiAodXNlci50eXBlX3VzZXIgPT0gMSkge1xyXG4gICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2UgXCIwXCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL2Rhc2hib3JhZCcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC1vcmdhbml6YXRpb24nKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCIyXCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQtaW5mb3JtYXRpb24nKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQtYXV0by1sYW5kaW5ncGFnZScpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2UgXCIwXCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL2Rhc2hib3JhZCcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN1Yi0xLTBcIjpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC9hY3Rpdml0aWVzJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTEtMVwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50L2luZm9ybWF0aW9uJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTEtMlwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50L3B1cmNoYXNlLW5ld3MnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzdWItMS0zXCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQvYmFubmVyJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTEtNFwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50L3dlYmJvYXJkJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTEtNVwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50L2RvY3VtZW50cycpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN1Yi0xLTZcIjpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC9wb2xscycpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN1Yi0xLTdcIjpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC9qb3VybmFsJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTEtOFwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50L2JsZXNzaW5nLWxpc3QnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzdWItMi0wXCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQtbWVudS9wcmltYXJ5LW1lbnUnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzdWItMi0xXCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQtbWVudS9zZWNvdW5kYXJ5LW1lbnUnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQtY29tcGxhaW4nKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCI0XCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQtY29udGFjdCcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIjVcIjpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vcmVwb3J0Jyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTYtMFwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9zZXR0aW5nL3Byb2ZpbGUnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzdWItNi0xXCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL3NldHRpbmcvdGhlbWUnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzdWItNi0yXCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL3NldHRpbmcvY292ZXInKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzdWItNi0zXCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL3NldHRpbmcvZ2VuZXJhbCcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvZXJyb3ItNDA0Jyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgfTtcclxuICBjb25zdCBNZW51ID0gKFxyXG4gICAgPFRvcGljTWVudVxyXG4gICAgICB0b3BpY3M9eyF1c2VyID8gW10gOiB1c2VyLnR5cGVfdXNlciA9PSAxID8gdG9waWNzIDogdG9waWNzMn1cclxuICAgICAgc2VsZWN0ZWRLZXk9e2luZGV4TWVudX1cclxuICAgICAgY2hhbmdlU2VsZWN0ZWRLZXk9e2NoYW5nZVNlbGVjdGVkS2V5fVxyXG4gICAgICBzZWxlY3RlZFN1YktleT17aW5kZXhTdWJNZW51fVxyXG4gICAgLz5cclxuICApO1xyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoVXNlckxvZ2luKClcclxuICAgIC8vIHJlbmRlcktleU1lbnUocHJvcHMuYXNQYXRoKTtcclxuICB9LCBbXSlcclxuXHJcblxyXG4gIGNvbnN0IHJvdXRlczIgPSBbe1xyXG4gICAgcGF0aDogJ2luZGV4JyxcclxuICAgIGJyZWFkY3J1bWJOYW1lOiAnaG9tZSdcclxuICB9LCB7XHJcbiAgICBwYXRoOiAnZmlyc3QnLFxyXG4gICAgYnJlYWRjcnVtYk5hbWU6ICdmaXJzdCdcclxuICB9LCB7XHJcbiAgICBwYXRoOiAnc2Vjb25kJyxcclxuICAgIGJyZWFkY3J1bWJOYW1lOiAnc2Vjb25kJ1xyXG4gIH1dO1xyXG4gIGZ1bmN0aW9uIGl0ZW1SZW5kZXIocm91dGUsIHBhcmFtcywgcm91dGVzLCBwYXRocykge1xyXG4gICAgY29uc3QgbGFzdCA9IHJvdXRlcy5pbmRleE9mKHJvdXRlKSA9PT0gcm91dGVzLmxlbmd0aCAtIDE7XHJcbiAgICByZXR1cm4gbGFzdCA/IDxzcGFuPntyb3V0ZS5icmVhZGNydW1iTmFtZX08L3NwYW4+IDogPExpbmsgdG89e3BhdGhzLmpvaW4oJy8nKX0+e3JvdXRlLmJyZWFkY3J1bWJOYW1lfTwvTGluaz47XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFVzZXJMb2dpbigpIHtcclxuICAgIGNvbnN0IHVzZXJMb2dpbiA9IGF3YWl0IGNoZWNrSXNMb2dpbigpXHJcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyTG9naW4pXHJcbiAgICBzZXRVc2VyKHVzZXJMb2dpbilcclxuICB9XHJcblxyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmUoIWFjdGl2ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW5cIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwiaW5kZXgsIGZvbGxvd1wiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD17a2V5d29yZHN9IC8+XHJcblxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cInR3aXR0ZXI6aW1hZ2U6c3JjXCJcclxuICAgICAgICAgIGNvbnRlbnQ9e2Ake29yaWdpbn0ke2ltYWdlfT92PSR7TWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwKX1gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOnVybFwiIGNvbnRlbnQ9e3VybH0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cclxuXHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxyXG4gICAgICAgICAgY29udGVudD17YCR7b3JpZ2lufSR7aW1hZ2V9P3Y9JHtNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDApfWB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9e3VybH0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PXt0eXBlfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e3VybH0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XHJcblxyXG4gICAgICAgIHsvKiA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+ICovfVxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjUuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIj48L2xpbms+XHJcbiAgICAgICAgey8qIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgIC8+ICovfVxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIHsvKiA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xNFwiPjwvZGl2PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDxGb290ZXIgLz4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgPE5hdkJhciBtZW51PXtNZW51fSB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8U2lkZUJhciBtZW51PXtNZW51fSAvPlxyXG4gICAgICAgICAgPExheW91dC5Db250ZW50IGNsYXNzTmFtZT1cImNvbnRlbnQgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIHsvKiB7dG9waWNzW2NvbnRlbnRJbmRleF19ICovfVxyXG4gICAgICAgICAgICA8Q29udGVudCBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiAwLCBwYWRkaW5nTGVmdDogXCIxcmVtXCIsIHBhZGRpbmdSaWdodDogXCIxcmVtXCIsIHBhZGRpbmdCb3R0b206IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fSBjbGFzc05hbWU9XCJwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzTWFpbiAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0gY2xhc3NOYW1lPVwiXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cInAtMS41IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VXNlck91dGxpbmVkIGNsYXNzTmFtZT1cInRleHQtNHhsXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm10LTQgdGV4dC00eGxcIj57dGl0bGVQYWdlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEyfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBqdXN0aWZ5LWl0ZW1zLWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cInAtMS41ICBqdXN0aWZ5LWVuZCBqdXN0aWZ5LWl0ZW1zLWVuZCBwdC04XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge19yb3V0ZXMubWFwKChvYmosIGluZGV4LCB7IGxlbmd0aCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCArIDEgPT09IGxlbmd0aCkgeyAvL2xhc3QgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3Bhbj57b2JqLmJyZWFkY3J1bWJOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEJyZWFkY3J1bWIuSXRlbSBocmVmPXtvYmoucGF0aH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e29iai5icmVhZGNydW1iTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnJlYWRjcnVtYi5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JyZWFkY3J1bWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7IWlzTWFpbiAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0gY2xhc3NOYW1lPVwiXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFnZUhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdob3N0PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJhY2s9eygpID0+IHdpbmRvdy5oaXN0b3J5LmJhY2soKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGVQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN1YlRpdGxlPVwiVGhpcyBpcyBhIHN1YnRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYT17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfcm91dGVzLm1hcCgob2JqLCBpbmRleCwgeyBsZW5ndGggfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCArIDEgPT09IGxlbmd0aCkgeyAvL2xhc3QgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuPntvYmouYnJlYWRjcnVtYk5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEJyZWFkY3J1bWIuSXRlbSBocmVmPXtvYmoucGF0aH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57b2JqLmJyZWFkY3J1bWJOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JyZWFkY3J1bWIuSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnJlYWRjcnVtYj4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxSb3cgY2xhc3NOYW1lPVwicC0xLjUgaXRlbXMtY2VudGVyXCI+XHJcbiAgICA8VXNlck91dGxpbmVkIGNsYXNzTmFtZT1cInRleHQtNHhsXCIgLz5cclxuICAgIDxoMSBjbGFzc05hbWU9XCJtbC00IG10LTQgdGV4dC00eGxcIj5tYW5hZ2VtZW50IGFjdGl2aXRpZXM8L2gxPlxyXG4gIDwvUm93PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qICAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogPENvbCBzcGFuPXsxMn0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWl0ZW1zLWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsXCIgc3R5bGU9e3sgcGFkZGluZzogMjQsIGJhY2tncm91bmQ6ICcjZmZmJywgbWluSGVpZ2h0OiAzNjAgfX0+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICAgIDwvTGF5b3V0LkNvbnRlbnQ+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcclxuXHJcbmNvbnN0IFRvcGljTWVudSA9ICh7IHRvcGljcywgc2VsZWN0ZWRLZXksIGNoYW5nZVNlbGVjdGVkS2V5LCBzZWxlY3RlZFN1YktleSB9KSA9PiB7XHJcbiAgICBjb25zdCBzdHlsZWRUb3BpY3MgPSBbXTtcclxuICAgIHRvcGljcy5mb3JFYWNoKCh0b3BpYywgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAodG9waWMuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgY29uc3Qgc3R5bGVkVG9waWNzQ2hpbGRyZW4gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHRvcGljLmNoaWxkcmVuLmZvckVhY2goKHRvcGljQ2hpbGRyZW4sIGluZGV4Q2hpbGRyZW4pID0+IHtcclxuICAgICAgICAgICAgICAgIHN0eWxlZFRvcGljc0NoaWxkcmVuLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9eydzdWItJyArIGluZGV4ICsgXCItXCIgKyBpbmRleENoaWxkcmVufSBvbkNsaWNrPXtjaGFuZ2VTZWxlY3RlZEtleX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dG9waWNDaGlsZHJlbi50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzdHlsZWRUb3BpY3MucHVzaChcclxuICAgICAgICAgICAgICAgIDxTdWJNZW51IGtleT17aW5kZXh9IGljb249e3RvcGljLmljb259IHRpdGxlPXt0b3BpYy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIHt0b3BpYy50aXRsZX0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAge3N0eWxlZFRvcGljc0NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8TWVudS5JdGVtIGtleT1cInN1Yi0xXCI+e0pTT04uc3RyaW5naWZ5KCl9PC9NZW51Lkl0ZW0+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9TdWJNZW51PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3R5bGVkVG9waWNzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17aW5kZXh9IG9uQ2xpY2s9e2NoYW5nZVNlbGVjdGVkS2V5fSBpY29uPXt0b3BpYy5pY29ufT5cclxuICAgICAgICAgICAgICAgICAgICB7dG9waWMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgKTtcclxuXHJcbiAgICBzdHlsZWRUb3BpY3MucHVzaChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYW50LW1lbnUtaXRlbVwiPlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUxvZ291dChlKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCB3LWF1dG8gdy1mdWxsIHJvdW5kZWQgaC04IHRleHQtd2hpdGUgYmctcmVkLTYwMCBmb250LWJvbGQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGhvdmVyOmJnLXJlZC02MDAgaG92ZXI6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAg4Lit4Lit4LiB4LiI4Liy4LiB4Lij4Liw4Lia4LiaXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG5cclxuICAgIClcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsZUxvZ291dFwiKVxyXG4gICAgICAgIENvb2tpZXMucmVtb3ZlKCd0b2tlbicpXHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNZW51IG1vZGU9XCJpbmxpbmVcIiBzZWxlY3RlZEtleXM9e1tzZWxlY3RlZEtleV19IGRlZmF1bHRPcGVuS2V5cz17W3NlbGVjdGVkU3ViS2V5XX0+XHJcbiAgICAgICAgICAgIHtzdHlsZWRUb3BpY3N9XHJcbiAgICAgICAgPC9NZW51PlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBUb3BpY01lbnU7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgU0VDUkVUX0tFWSA9IHByb2Nlc3MuZW52LkpXVF9LRVk7XHJcblxyXG4vKlxyXG4gKiBAcGFyYW1zIHtqd3RUb2tlbn0gZXh0cmFjdGVkIGZyb20gY29va2llc1xyXG4gKiBAcmV0dXJuIHtvYmplY3R9IG9iamVjdCBvZiBleHRyYWN0ZWQgdG9rZW5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlUb2tlbihqd3RUb2tlbikge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gand0LnZlcmlmeShqd3RUb2tlbiwgU0VDUkVUX0tFWSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coJ2U6JywgZSk7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbi8qXHJcbiAqIEBwYXJhbXMge3JlcXVlc3R9IGV4dHJhY3RlZCBmcm9tIHJlcXVlc3QgcmVzcG9uc2VcclxuICogQHJldHVybiB7b2JqZWN0fSBvYmplY3Qgb2YgcGFyc2Ugand0IGNvb2tpZSBkZWNvZGUgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBwQ29va2llcyhyZXEpIHtcclxuICBjb25zdCBwYXJzZWRJdGVtcyA9IHt9O1xyXG4gIGlmIChyZXEuaGVhZGVycy5jb29raWUpIHtcclxuICAgIGNvbnN0IGNvb2tpZXNJdGVtcyA9IHJlcS5oZWFkZXJzLmNvb2tpZS5zcGxpdCgnOyAnKTtcclxuICAgIGNvb2tpZXNJdGVtcy5mb3JFYWNoKGNvb2tpZXMgPT4ge1xyXG4gICAgICBjb25zdCBwYXJzZWRJdGVtID0gY29va2llcy5zcGxpdCgnPScpO1xyXG4gICAgICBwYXJzZWRJdGVtc1twYXJzZWRJdGVtWzBdXSA9IGRlY29kZVVSSShwYXJzZWRJdGVtWzFdKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gcGFyc2VkSXRlbXM7XHJcbn1cclxuXHJcbi8qXHJcbiAqIEBwYXJhbXMge3JlcXVlc3R9IGV4dHJhY3RlZCBmcm9tIHJlcXVlc3QgcmVzcG9uc2UsIHtzZXRMb2NhbGhvc3R9IHlvdXIgbG9jYWxob3N0IGFkZHJlc3NcclxuICogQHJldHVybiB7b2JqZWN0fSBvYmplY3RzIG9mIHByb3RvY29sLCBob3N0IGFuZCBvcmlnaW5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhYnNvbHV0ZVVybChyZXEsIHNldExvY2FsaG9zdCkge1xyXG4gIHZhciBwcm90b2NvbCA9ICdodHRwczonO1xyXG4gIHZhciBob3N0ID0gcmVxXHJcbiAgICA/IHJlcS5oZWFkZXJzWyd4LWZvcndhcmRlZC1ob3N0J10gfHwgcmVxLmhlYWRlcnNbJ2hvc3QnXVxyXG4gICAgOiB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuICBpZiAoaG9zdC5pbmRleE9mKCdsb2NhbGhvc3QnKSA+IC0xKSB7XHJcbiAgICBpZiAoc2V0TG9jYWxob3N0KSBob3N0ID0gc2V0TG9jYWxob3N0O1xyXG4gICAgcHJvdG9jb2wgPSAnaHR0cDonO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgcHJvdG9jb2w6IHByb3RvY29sLFxyXG4gICAgaG9zdDogaG9zdCxcclxuICAgIG9yaWdpbjogcHJvdG9jb2wgKyAnLy8nICsgaG9zdCxcclxuICAgIHVybDogcmVxLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGREYXlzKGRhdGUsIGRheXMpIHtcclxuICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgcmVzdWx0LnNldERhdGUocmVzdWx0LmdldERhdGUoKSArIGRheXMpO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vWVlZWS1NTS1ERFxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZVdpdGhvdXRUaW1lKGRhdGUpIHtcclxuICB2YXIgZGF0ZVN0cmluZyA9XHJcbiAgICBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgKyBcIi1cIiArXHJcbiAgICAoXCIwXCIgKyAoZGF0ZS5nZXRVVENNb250aCgpICsgMSkpLnNsaWNlKC0yKSArIFwiLVwiICtcclxuICAgIChcIjBcIiArIGRhdGUuZ2V0VVRDRGF0ZSgpKS5zbGljZSgtMikgKyBcIiBcIlxyXG4gIHJldHVybiBkYXRlU3RyaW5nO1xyXG59XHJcbi8vIGNvbnN0IGFwaSA9IHByb2Nlc3MuZW52LlBVQkxJQ19VUkxcclxuXHJcbmV4cG9ydCBjb25zdCBhcGlJbnN0YW5jZSA9ICgpID0+IHtcclxuICAvLyBjb25zdCBhdXRob3JpemF0aW9uID0gc3RvcmUuZ2V0U3RhdGUoKS51c2VyU3RhdGUudG9rZW4gPyBzdG9yZS5nZXRTdGF0ZSgpLnVzZXJTdGF0ZS50b2tlbiA6IG51bGxcclxuXHJcbiAgLy8gY29uc3QgaGVhZGVycyA9IHtcclxuICAvLyBcdCd4LWFwaS10b2tlbic6IGF1dGhvcml6YXRpb24gPyBhdXRob3JpemF0aW9uIDogJycsXHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6ICcvYXBpJyxcclxuICAgIC8vIGhlYWRlcnMsXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrSXNMb2dpbiA9ICgpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhcImNoZWNrSXNMb2dpblwiKVxyXG4gIHZhciB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpIC8vID0+ICd2YWx1ZSdcclxuXHJcbiAgaWYgKCF0b2tlbikge1xyXG4gICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvLyBjb25zb2xlLmxvZyhwYXJzZUp3dCh0b2tlbikpXHJcbiAgcmV0dXJuIHBhcnNlSnd0KHRva2VuKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSnd0KHRva2VuKSB7XHJcblxyXG4gIHZhciBpc0V4cGlyZWQgPSBmYWxzZTtcclxuICAvLyBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpO1xyXG5cclxuXHJcblxyXG4gIHZhciBiYXNlNjRVcmwgPSB0b2tlbi5zcGxpdCgnLicpWzFdO1xyXG4gIHZhciBiYXNlNjQgPSBiYXNlNjRVcmwucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcclxuICB2YXIganNvblBheWxvYWQgPSBkZWNvZGVVUklDb21wb25lbnQoYXRvYihiYXNlNjQpLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKGMpIHtcclxuICAgIHJldHVybiAnJScgKyAoJzAwJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcclxuICB9KS5qb2luKCcnKSk7XHJcbiAgdmFyIF9qc29uUGF5bG9hZCA9IEpTT04ucGFyc2UoanNvblBheWxvYWQpXHJcbiAgdmFyIGRhdGVOb3cgPSBuZXcgRGF0ZSgpO1xyXG4gIC8vIGNvbnNvbGUubG9nKHBhcnNlSW50KF9qc29uUGF5bG9hZC5leHApKVxyXG4gIC8vIGNvbnNvbGUubG9nKHBhcnNlSW50KChkYXRlTm93LmdldFRpbWUoKSkudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwxMCkpKVxyXG4gIGlmIChwYXJzZUludChfanNvblBheWxvYWQuZXhwKSA8IHBhcnNlSW50KChkYXRlTm93LmdldFRpbWUoKSkudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApKSkge1xyXG4gICAgY29uc29sZS5sb2coXCJ0cnVlXCIpXHJcblxyXG4gICAgaXNFeHBpcmVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlmIChpc0V4cGlyZWQpIHtcclxuICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxuICByZXR1cm4gX2pzb25QYXlsb2FkO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lKGRhdGUpIHtcclxuICB0cnkge1xyXG4gICAgdmFyIGRhdGVTcGxpdCA9IGRhdGUudG9TdHJpbmcoKS5zcGxpdChcIlRcIik7XHJcbiAgICByZXR1cm4gZGF0ZVNwbGl0WzBdO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydERhdGVEQnRvRGF0ZVBpY2tlcldpdGhUaW1lKGRhdGUpIHtcclxuICB0cnkge1xyXG4gICAgLy86MDcuMDAwWlxyXG4gICAgLy9TYW1wbGVUZXh0LnJlcGxhY2UoXCJEZXZlbG9wZXJcIiwgXCJBcHAgQnVpbGRlclwiKTtcclxuICAgIHZhciBkYXRlU3BsaXQgPSBkYXRlLnRvU3RyaW5nKCkuc3BsaXQoXCJUXCIpO1xyXG4gICAgcmV0dXJuIGRhdGVTcGxpdFswXSArIFwiIFwiICsgZGF0ZVNwbGl0WzFdLnJlcGxhY2UoXCIuMDAwWlwiLCBcIlwiKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREYXRldG9UaGFpRGF0ZShkYXRlKSB7XHJcbiAgdmFyIF9kYXRlID0gY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZShkYXRlKVxyXG4gIHZhciBkYXRlU3BsaXQgPSBfZGF0ZS50b1N0cmluZygpLnNwbGl0KFwiLVwiKTtcclxuICAvLyAyMDIxLTA5LTE2XHJcbiAgcmV0dXJuIGRhdGVTcGxpdFsyXSArIFwiIFwiICsgY29udmVydE1vbnRodG9UaGFpTW9udGgoZGF0ZVNwbGl0WzFdKSArIFwiIFwiICsgY29udmVydFllYXJ0b1RoYWlZZWFyKGRhdGVTcGxpdFswXSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRZZWFydG9UaGFpWWVhcih5ZWFyKSB7XHJcbiAgcmV0dXJuIHBhcnNlSW50KHllYXIpICsgNTQzXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0TW9udGh0b1RoYWlNb250aChtb250aCkge1xyXG4gIHN3aXRjaCAobW9udGgpIHtcclxuICAgIGNhc2UgXCIwMVwiOlxyXG4gICAgICByZXR1cm4gXCLguKHguIHguKPguLLguITguKFcIlxyXG4gICAgY2FzZSBcIjAyXCI6XHJcbiAgICAgIHJldHVybiBcIuC4geC4uOC4oeC4oOC4suC4nuC4seC4meC4mOC5jFwiXHJcbiAgICBjYXNlIFwiMDNcIjpcclxuICAgICAgcmV0dXJuIFwi4Lih4Li14LiZ4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIwNFwiOlxyXG4gICAgICByZXR1cm4gXCLguYDguKHguKnguLLguKLguJlcIlxyXG4gICAgY2FzZSBcIjA1XCI6XHJcbiAgICAgIHJldHVybiBcIuC4nuC4pOC4qeC4oOC4suC4hOC4oVwiXHJcbiAgICBjYXNlIFwiMDZcIjpcclxuICAgICAgcmV0dXJuIFwi4Lih4Li04LiW4Li44LiZ4Liy4Lii4LiZXCJcclxuICAgIGNhc2UgXCIwN1wiOlxyXG4gICAgICByZXR1cm4gXCLguIHguKPguIHguI7guLLguITguKFcIlxyXG4gICAgY2FzZSBcIjA4XCI6XHJcbiAgICAgIHJldHVybiBcIuC4quC4tOC4h+C4q+C4suC4hOC4oVwiXHJcbiAgICBjYXNlIFwiMDlcIjpcclxuICAgICAgcmV0dXJuIFwi4LiB4Lix4LiZ4Lii4Liy4Lii4LiZXCJcclxuICAgIGNhc2UgXCIxMFwiOlxyXG4gICAgICByZXR1cm4gXCLguJXguLjguKXguLLguITguKFcIlxyXG4gICAgY2FzZSBcIjExXCI6XHJcbiAgICAgIHJldHVybiBcIuC4nuC4pOC4qOC4iOC4tOC4geC4suC4ouC4mVwiXHJcbiAgICBjYXNlIFwiMTJcIjpcclxuICAgICAgcmV0dXJuIFwi4LiY4Lix4LiZ4Lin4Liy4LiE4LihXCJcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBcIk5BTlwiXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydERhdGV0b0FkZERCKGRhdGUpIHtcclxuICB2YXIgZGF0ZVNwbGl0ID0gZGF0ZS5zcGxpdChcIiBcIik7XHJcbiAgcmV0dXJuIGRhdGVTcGxpdFswXSArIFwiVFwiICsgZGF0ZVNwbGl0WzFdICsgXCIrMDA6MDBcIjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldElQQWRkcmVzcygpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vZ2VvbG9jYXRpb24tZGIuY29tL2pzb24vJylcclxuICAvLyBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgLy8gcmV0dXJuIHJlcy5kYXRhXHJcbiAgcmV0dXJuIFwiY291bnRyeV9jb2RlOlwiICsgcmVzLmRhdGEuY291bnRyeV9jb2RlICsgXCIsY291bnRyeV9uYW1lOlwiICsgcmVzLmRhdGEuY291bnRyeV9uYW1lICsgXCIsY2l0eTpcIiArIHJlcy5kYXRhLmNpdHkgKyBcIixwb3N0YWw6XCIgKyByZXMuZGF0YS5wb3N0YWxcclxuICAgICsgXCIsbGF0aXR1ZGU6XCIgKyByZXMuZGF0YS5sYXRpdHVkZSArIFwiLGxvbmdpdHVkZTpcIiArIHJlcy5kYXRhLmxvbmdpdHVkZSArIFwiLElQdjQ6XCIgKyByZXMuZGF0YS5JUHY0ICsgXCIsc3RhdGU6XCIgKyByZXMuZGF0YS5zdGF0ZVxyXG4gIC8vIHNldElQKHJlcy5kYXRhLklQdjQpXHJcbiAgLy8gcmV0dXJuXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGJ5dGVzVG9TaXplKGJ5dGVzKSB7XHJcbiAgdmFyIHNpemVzID0gWydCeXRlcycsICdLQicsICdNQicsICdHQicsICdUQiddO1xyXG4gIGlmIChieXRlcyA9PSAwKSByZXR1cm4gJzAgQnl0ZSc7XHJcbiAgdmFyIGkgPSBwYXJzZUludChNYXRoLmZsb29yKE1hdGgubG9nKGJ5dGVzKSAvIE1hdGgubG9nKDEwMjQpKSk7XHJcbiAgcmV0dXJuIE1hdGgucm91bmQoYnl0ZXMgLyBNYXRoLnBvdygxMDI0LCBpKSwgMikgKyAnICcgKyBzaXplc1tpXTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBieXRlc1RvTUIoYnl0ZXMpIHtcclxuICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQoYnl0ZXMgLyAoMTAyNCAqIDEwMjQpKS50b0ZpeGVkKDIpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGVkaWZmKHN0YXJ0RGF0ZSkge1xyXG5cclxuICBjb25zdCB0aW1lRW5kID0gbW9tZW50KCk7XHJcbiAgY29uc3QgbmV3U3RhcnREYXRlID0gbmV3IERhdGUoc3RhcnREYXRlKTtcclxuICBjb25zdCBuZXdFbmREYXRlID0gbmV3IERhdGUodGltZUVuZCk7XHJcbiAgY29uc3Qgb25lX2RheSA9IDEwMDAgKiA2MCAqIDYwICogMjQ7XHJcbiAgbGV0IHJlc3VsdFxyXG4gIHJlc3VsdCA9IE1hdGguY2VpbCgobmV3U3RhcnREYXRlLmdldFRpbWUoKSAtIG5ld0VuZERhdGUuZ2V0VGltZSgpKSAvIChvbmVfZGF5KSlcclxuICBjb25zb2xlLmxvZygnZGF0ZSBDb252ZXJ0ZXIgcmVzdWx0JywgcmVzdWx0KVxyXG5cclxuXHJcbiAgcmV0dXJuIHJlc3VsdCAtIDE7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudERhdGUoc2VwYXJhdG9yID0gJycpIHtcclxuXHJcbiAgbGV0IG5ld0RhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgbGV0IGRhdGUgPSBuZXdEYXRlLmdldERhdGUoKTtcclxuICBsZXQgbW9udGggPSBuZXdEYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gIGxldCB5ZWFyID0gbmV3RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICByZXR1cm4gYCR7eWVhcn0ke3NlcGFyYXRvcn0ke21vbnRoIDwgMTAgPyBgMCR7bW9udGh9YCA6IGAke21vbnRofWB9JHtzZXBhcmF0b3J9JHtkYXRlfWBcclxufVxyXG4iLCJkZWNsYXJlIGNvbnN0IF9fTkVYVF9EQVRBX186IGFueVxuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIHJlc29sdmUsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFByZWZldGNoT3B0aW9ucyB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbmZ1bmN0aW9uIGlzTG9jYWwoaHJlZjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHVybCA9IHBhcnNlKGhyZWYsIGZhbHNlLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBwYXJzZShnZXRMb2NhdGlvbk9yaWdpbigpLCBmYWxzZSwgdHJ1ZSlcblxuICByZXR1cm4gKFxuICAgICF1cmwuaG9zdCB8fCAodXJsLnByb3RvY29sID09PSBvcmlnaW4ucHJvdG9jb2wgJiYgdXJsLmhvc3QgPT09IG9yaWdpbi5ob3N0KVxuICApXG59XG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIEZvcm1hdFJlc3VsdCA9IHsgaHJlZjogc3RyaW5nOyBhcz86IHN0cmluZyB9XG5cbmZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmM6IChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiBGb3JtYXRSZXN1bHQpIHtcbiAgbGV0IGxhc3RIcmVmOiBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdEFzOiB1bmRlZmluZWQgfCBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdFJlc3VsdDogbnVsbCB8IEZvcm1hdFJlc3VsdCA9IG51bGxcbiAgcmV0dXJuIChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiB7XG4gICAgaWYgKGxhc3RSZXN1bHQgJiYgaHJlZiA9PT0gbGFzdEhyZWYgJiYgYXMgPT09IGxhc3RBcykge1xuICAgICAgcmV0dXJuIGxhc3RSZXN1bHRcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBmb3JtYXRGdW5jKGhyZWYsIGFzKVxuICAgIGxhc3RIcmVmID0gaHJlZlxuICAgIGxhc3RBcyA9IGFzXG4gICAgbGFzdFJlc3VsdCA9IHJlc3VsdFxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRVcmwodXJsOiBVcmwpOiBzdHJpbmcge1xuICByZXR1cm4gdXJsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKSA6IHVybFxufVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cblxubGV0IG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKG9ic2VydmVyKSB7XG4gICAgcmV0dXJuIG9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAob2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuY2xhc3MgTGluayBleHRlbmRzIENvbXBvbmVudDxMaW5rUHJvcHM+IHtcbiAgcDogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBMaW5rUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHByb3BzLnByZWZldGNoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG4gIH1cblxuICBjbGVhblVwTGlzdGVuZXJzID0gKCkgPT4ge31cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuICB9XG5cbiAgZ2V0UGF0aHMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGNvbnN0IHsgaHJlZjogcGFyc2VkSHJlZiwgYXM6IHBhcnNlZEFzIH0gPSB0aGlzLmZvcm1hdFVybHMoXG4gICAgICB0aGlzLnByb3BzLmhyZWYsXG4gICAgICB0aGlzLnByb3BzLmFzXG4gICAgKVxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEhyZWYpXG4gICAgcmV0dXJuIFtyZXNvbHZlZEhyZWYsIHBhcnNlZEFzID8gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkQXMpIDogcmVzb2x2ZWRIcmVmXVxuICB9XG5cbiAgaGFuZGxlUmVmKHJlZjogRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnAgJiYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiYgcmVmICYmIHJlZi50YWdOYW1lKSB7XG4gICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgICBwcmVmZXRjaGVkW1xuICAgICAgICAgIHRoaXMuZ2V0UGF0aHMoKS5qb2luKFxuICAgICAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgICAgICclJ1xuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzID0gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJlZmV0Y2goKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuICAvLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbiAgZm9ybWF0VXJscyA9IG1lbW9pemVkRm9ybWF0VXJsKChocmVmLCBhc0hyZWYpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGhyZWYpKSxcbiAgICAgIGFzOiBhc0hyZWYgPyBhZGRCYXNlUGF0aChmb3JtYXRVcmwoYXNIcmVmKSkgOiBhc0hyZWYsXG4gICAgfVxuICB9KVxuXG4gIGxpbmtDbGlja2VkID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IG5vZGVOYW1lLCB0YXJnZXQgfSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICAgIGlmIChcbiAgICAgIG5vZGVOYW1lID09PSAnQScgJiZcbiAgICAgICgodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICAgICAgZS5tZXRhS2V5IHx8XG4gICAgICAgIGUuY3RybEtleSB8fFxuICAgICAgICBlLnNoaWZ0S2V5IHx8XG4gICAgICAgIChlLm5hdGl2ZUV2ZW50ICYmIGUubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpKVxuICAgICkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG5cbiAgICBpZiAoIWlzTG9jYWwoaHJlZikpIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBocmVmKVxuICAgIGFzID0gYXMgPyByZXNvbHZlKHBhdGhuYW1lLCBhcykgOiBocmVmXG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGxldCB7IHNjcm9sbCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICAgIH1cblxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIFJvdXRlclt0aGlzLnByb3BzLnJlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICBzaGFsbG93OiB0aGlzLnByb3BzLnNoYWxsb3csXG4gICAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcmVmZXRjaChvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnAgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICBjb25zdCBwYXRocyA9IHRoaXMuZ2V0UGF0aHMoKVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICBSb3V0ZXIucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLyAwXSwgcGF0aHNbLyogYXNQYXRoICovIDFdLCBvcHRpb25zKS5jYXRjaChcbiAgICAgIChlcnIpID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gICAgcHJlZmV0Y2hlZFtcbiAgICAgIHBhdGhzLmpvaW4oXG4gICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICclJ1xuICAgICAgKVxuICAgIF0gPSB0cnVlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gICAgfVxuXG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gICAgY29uc3QgcHJvcHM6IHtcbiAgICAgIG9uTW91c2VFbnRlcjogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBocmVmPzogc3RyaW5nXG4gICAgICByZWY/OiBhbnlcbiAgICB9ID0ge1xuICAgICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVJlZihlbClcblxuICAgICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Nb3VzZUVudGVyOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlZmV0Y2goeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgICAgfSxcbiAgICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIHRoaXMubGlua0NsaWNrZWQoZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG5cbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLnBhc3NIcmVmIHx8XG4gICAgICAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSlcbiAgICApIHtcbiAgICAgIHByb3BzLmhyZWYgPSBhcyB8fCBocmVmXG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMuaHJlZiAmJlxuICAgICAgICB0eXBlb2YgX19ORVhUX0RBVEFfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0XG4gICAgICApIHtcbiAgICAgICAgcHJvcHMuaHJlZiA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpXG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICA6IHBhdGhcbn1cblxuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJ1xufVxuXG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aDogc3RyaW5nKSA9PlxuICB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aClcblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogYW55KSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnkgfCBudWxsLFxuICBpc1NlcnZlclJlbmRlcjogYm9vbGVhbixcbiAgY2I/OiAoLi4uYXJnczogYW55KSA9PiBhbnlcbikge1xuICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxXG4gIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGZldGNoKFxuICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYFxuICAgICAgICApLFxuICAgICAgICBxdWVyeSxcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIH1cbiAgICApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGFcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgLy8gbG9vcC5cbiAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgOyhlcnIgYXMgYW55KS5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUidcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBDb21wb25lbnRUeXBlXG4gICAgICB3cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXJsXG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmIChcbiAgICAgIGUuc3RhdGUgJiZcbiAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICBwYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWVcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIF91cmw6IFVybCxcbiAgICBfYXM6IFVybCxcbiAgICBvcHRpb25zOiBhbnlcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgIGlmIChTVCkge1xuICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmxcbiAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hc1xuXG4gICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpXG4gICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKVxuXG4gICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcylcblxuICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybCwgdHJ1ZSlcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG4gICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlKGFzKVxuICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChcbiAgICAgICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihcbiAgICAgICAgKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcylcbiAgICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKFxuICAgICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICAgKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlc1xuICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfVxuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgfSBhcyBhbnkpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIChnaXBFcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAnRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxcbiAgICAgICAgICAgICAgICAgICAgICBnaXBFcnJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSlcbiAgICAgICAgKVxuICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgfVxuXG4gICAgcmV0dXJuIChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICAgIH1cblxuICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSksXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPilcbiAgICAgIC50aGVuKChyb3V0ZUluZm86IFJvdXRlSW5mbykgPT4ge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgICAgKVxuICAgICAgICApLnRoZW4oKHByb3BzKSA9PiB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChoYW5kbGVFcnJvcilcbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gcGFyc2UodXJsKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSlcbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcbiAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXJzZShhc1BhdGgpLnBhdGhuYW1lISlcblxuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgOiBmZXRjaE5leHREYXRhKFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdGhpcy5pc1NzcixcbiAgICAgICAgICAoZGF0YSkgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpXG4gICAgICAgIClcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlKGFzUGF0aCwgdHJ1ZSlcbiAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSEpXG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKVxuICAgICAgOyhlIGFzIGFueSkuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCIvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9XG59IHtcbiAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcblxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgIChfLCAkMSkgPT4ge1xuICAgICAgY29uc3QgaXNPcHRpb25hbCA9IC9eXFxcXFxcWy4qXFxcXFxcXSQvLnRlc3QoJDEpXG4gICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDIsIC0yKVxuICAgICAgfVxuICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgaWYgKGlzQ2F0Y2hBbGwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSg2KVxuICAgICAgfVxuICAgICAgZ3JvdXBzW1xuICAgICAgICAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH1cbiAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gKGlzT3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICB9XG4gIClcblxuICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAgIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcblxuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWBcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSxcbiAgICBncm91cHMsXG4gICAgbmFtZWRSZWdleDogbmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgID8gYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZm9ybWF0LCBVUkxGb3JtYXRPcHRpb25zLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIHN0YXRpY01hcmt1cDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGRldkZpbGVzOiBzdHJpbmdbXVxuICBmaWxlczogc3RyaW5nW11cbiAgbG93UHJpb3JpdHlGaWxlczogc3RyaW5nW11cbiAgcG9seWZpbGxGaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBodG1sUHJvcHM6IGFueVxuICBib2R5VGFnczogYW55W11cbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gIHVybDogVXJsT2JqZWN0LFxuICBvcHRpb25zPzogVVJMRm9ybWF0T3B0aW9uc1xuKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdCh1cmwgYXMgVVJMLCBvcHRpb25zKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xyXG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XHJcbiAgICBcImRlZmF1bHRcIjogb2JqXHJcbiAgfTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xyXG5cclxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xyXG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcclxuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xyXG5cclxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XHJcbiAgICByZXR1cm4gY2FjaGU7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGNhY2hlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcclxuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XHJcbiAgICByZXR1cm4gb2JqO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBcImRlZmF1bHRcIjogb2JqXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XHJcblxyXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xyXG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xyXG4gIH1cclxuXHJcbiAgdmFyIG5ld09iaiA9IHt9O1xyXG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcclxuXHJcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcclxuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XHJcblxyXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xyXG5cclxuICBpZiAoY2FjaGUpIHtcclxuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3T2JqO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XHJcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xyXG5cclxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcclxuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xyXG4gICAgfTtcclxuICB9IGVsc2Uge1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcclxuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG4vKiB1dGlscyAqL1xyXG5pbXBvcnQgeyBhYnNvbHV0ZVVybCwgY2hlY2tJc0xvZ2luLCBhcGlJbnN0YW5jZSwgYnl0ZXNUb1NpemUsIGNvbnZlcnREYXRldG9UaGFpRGF0ZSwgYnl0ZXNUb01CLCBnZXREYXRlZGlmZiB9IGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvdXRpbHMnO1xyXG5cclxuLyogY29tcG9uZW50cyAqL1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dEFkbWluJztcclxuLy8gaW1wb3J0IFVzZXJOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL1VzZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDaGFydCBmcm9tIFwicmVhY3QtZ29vZ2xlLWNoYXJ0c1wiO1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2Fyb3VzZWwsXHJcbiAgUm93LFxyXG4gIENvbCxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIEltYWdlLFxyXG4gIEJ1dHRvbixcclxuICBJbnB1dCxcclxuICBDYXJkLFxyXG4gIFN0YXRpc3RpY1xyXG59IGZyb20gJ2FudGQnO1xyXG5jb25zdCB7IFRleHQsIFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcbiAgY29uc3QgeyBvcmlnaW4sIHVzZXJJbmZvIH0gPSBwcm9wcztcclxuICBjb25zdCBbbmV3cywgc2V0TmV3c10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtwYWNrYWdlSW5mbywgc2V0UGFja2FnZUluZm9dID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbc2l6ZVBhY2thZ2UsIHNldFNpemVQYWNrYWdlXSA9IHVzZVN0YXRlKFwiMCBtYlwiKVxyXG4gIGNvbnN0IFtzaXplRnJlZSwgc2V0U2l6ZUZyZWVdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbc2l6ZVVzZWQsIHNldFNpemVVc2VkXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW2RhdGVkaWZmRXhwcmllZCwgc2V0RGF0ZWRpZmZFeHByaWVkXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW2NvbG9yRXhwcmllZCwgc2V0Q29sb3JFeHByaWVkXSA9IHVzZVN0YXRlKFwiYmctZ3JlZW4tNjAwXCIpXHJcblxyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFxyXG4gICAgW1xyXG4gICAgICBbXCJEaXNrIHVzZWRcIiwgXCJEaXNrIGZyZWVcIl0sXHJcbiAgICAgIFtcIkRpc2sgdXNlZFwiLCAwLjA1XSxcclxuICAgICAgW1wiRGlzayBmcmVlXCIsIDQ5LjY1XVxyXG4gICAgXSlcclxuXHJcblxyXG4gIGNvbnN0IHBpZU9wdGlvbnMgPSB7XHJcbiAgICB0aXRsZTogXCJcIixcclxuICAgIHBpZUhvbGU6IDAuNSxcclxuICAgIHNsaWNlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgY29sb3I6IFwiIzJCQjY3M1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb2xvcjogXCIjNGQ0ZDRkXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbG9yOiBcIiMwMDdmYWRcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29sb3I6IFwiI2U5YTIyN1wiXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICBsZWdlbmQ6IHtcclxuICAgICAgcG9zaXRpb246IFwiYm90dG9tXCIsXHJcbiAgICAgIGFsaWdubWVudDogXCJjZW50ZXJcIixcclxuICAgICAgdGV4dFN0eWxlOiB7XHJcbiAgICAgICAgY29sb3I6IFwiMjMzMjM4XCIsXHJcbiAgICAgICAgZm9udFNpemU6IDE0XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0b29sdGlwOiB7XHJcbiAgICAgIHNob3dDb2xvckNvZGU6IHRydWVcclxuICAgIH0sXHJcbiAgICBjaGFydEFyZWE6IHtcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIGhlaWdodDogXCI4MCVcIixcclxuICAgIH0sXHJcbiAgICBmb250TmFtZTogXCJSb2JvdG9cIlxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgZmV0Y2hPcmdhbml6YXRpb25EYXRhKClcclxuICAgIGZldGNoUGFja2FnZURhdGEoKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBmZXRjaE9yZ2FuaXphdGlvbkRhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB2YXIgX2RhdGVkaWZmRXhwcmllZCA9IGF3YWl0IGdldERhdGVkaWZmKHVzZXJJbmZvLmRhdGVfZXhwaXJlZClcclxuICAgIGNvbnNvbGUubG9nKFwiX2RhdGVkaWZmRXhwcmllZFwiKVxyXG4gICAgY29uc29sZS5sb2coX2RhdGVkaWZmRXhwcmllZClcclxuICAgIGlmIChwYXJzZUludChfZGF0ZWRpZmZFeHByaWVkKSA8IDApIHtcclxuICAgICAgc2V0Q29sb3JFeHByaWVkKFwiYmctcmVkLTYwMFwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhcIl9kYXRlZGlmZkV4cHJpZWQgYmctcmVkLTYwMFwiKVxyXG5cclxuICAgIH0gZWxzZSBpZiAocGFyc2VJbnQoX2RhdGVkaWZmRXhwcmllZCkgPD0gMzApIHtcclxuICAgICAgc2V0Q29sb3JFeHByaWVkKFwiYmcteWVsbG93LTYwMFwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhcIl9kYXRlZGlmZkV4cHJpZWQgYmcteWVsbG93LTYwMFwiKVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGF0ZWRpZmZFeHByaWVkKF9kYXRlZGlmZkV4cHJpZWQpXHJcbiAgICBjb25zdCBfc2l6ZSA9IGJ5dGVzVG9NQih1c2VySW5mbyA/IHVzZXJJbmZvLnNpemVfdXNlZCA6IDApXHJcbiAgICBzZXRTaXplVXNlZChfc2l6ZSlcclxuICAgIGNvbnN0IF9uZXdzRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAnaW5mb3JtYXRpb24tbmV3cy8xJ1xyXG4gICAgKTtcclxuICAgIHNldE5ld3MoX25ld3NEYXRhLmRhdGEuaW5mb3JtYXRpb25fbmV3cylcclxuICB9XHJcblxyXG4gIGNvbnN0IGZldGNoUGFja2FnZURhdGEgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgX2RhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ3BhY2thZ2UvJyArICh1c2VySW5mbyA/IHVzZXJJbmZvLnBhY2thZ2VfaWQgOiAwKVxyXG4gICAgKTtcclxuICAgIGlmIChfZGF0YS5kYXRhLnBhY2thZ2VEYXRhLnNpemVfbGltaXQgPT0gLTEpIHtcclxuICAgICAgc2V0U2l6ZVBhY2thZ2UoXCJVTkxJTUlURURcIilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IF9zaXplID0gYXdhaXQgYnl0ZXNUb1NpemUoX2RhdGEuZGF0YS5wYWNrYWdlRGF0YS5zaXplX2xpbWl0KVxyXG4gICAgICBzZXRTaXplUGFja2FnZShfc2l6ZSlcclxuICAgICAgbGV0IF9zaXplRnJlZSA9IGF3YWl0IGJ5dGVzVG9NQihfZGF0YS5kYXRhLnBhY2thZ2VEYXRhLnNpemVfbGltaXQpXHJcbiAgICAgIGxldCBfc2l6ZVVzZWQgPSBhd2FpdCBieXRlc1RvTUIodXNlckluZm8gPyB1c2VySW5mby5zaXplX3VzZWQgOiAwKVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIl9zaXplVXNlZDogXCIgKyBfc2l6ZVVzZWQpXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiX3NpemVGcmVlOiBcIiArIF9zaXplRnJlZSlcclxuXHJcblxyXG4gICAgICBzZXREYXRhKFxyXG4gICAgICAgIFtcclxuICAgICAgICAgIFsnUGl6emEnLCAnUG9wdWxhcml0eSddLFxyXG4gICAgICAgICAgWydTaXplIFVzZWQnLCBwYXJzZUZsb2F0KF9zaXplVXNlZCldLFxyXG4gICAgICAgICAgWydTaXplIEZyZWUnLCBwYXJzZUZsb2F0KF9zaXplRnJlZSldLFxyXG4gICAgICAgIF1cclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgc2V0UGFja2FnZUluZm8oX2RhdGEuZGF0YS5wYWNrYWdlRGF0YSlcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxSb3c+XHJcbiAgICAgICAgPENvbCBzcGFuPXsyMH0gY2xhc3NOYW1lPVwicC04XCI+XHJcbiAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbmV3cyA/IG5ld3MuaW5mb3JfZGV0YWlsIDogXCJcIiB9fSAvPlxyXG4gICAgICAgICAgey8qIHtuZXdzID8gbmV3cy5pbmZvcl9kZXRhaWwgOiBcIlwifSAqL31cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHNwYW49ezR9IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgey8qIEFBe0pTT04uc3RyaW5naWZ5KHVzZXJJbmZvKX1CQjxiciAvPiAqL31cclxuICAgICAgICAgIHsvKiBBQXtKU09OLnN0cmluZ2lmeShwYWNrYWdlSW5mbyl9QkIgKi99XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHNwYW49ezI0fSBjbGFzc05hbWU9e2NvbG9yRXhwcmllZCArIFwiIHAtOCByb3VuZGVkLWxnIHRleHQtd2hpdGVcIn0+XHJcbiAgICAgICAgICAgICAg4LmB4Lie4LiE4LmA4LiB4LiIOiB7cGFja2FnZUluZm8gPyBwYWNrYWdlSW5mby5uYW1lX3BhY2thZ2UgOiBcIlwifSB7c2l6ZVBhY2thZ2V9XHJcbiAgICAgICAgICAgICAgPGJyIC8+4Lin4Lix4LiZ4Lir4Lih4LiU4Lit4Liy4Lii4Li4IHt1c2VySW5mbyA/IGNvbnZlcnREYXRldG9UaGFpRGF0ZSh1c2VySW5mby5kYXRlX2V4cGlyZWQpIDogXCJcIn1cclxuICAgICAgICAgICAgICA8YnIgLz4oe2RhdGVkaWZmRXhwcmllZCArIFwiIOC4p+C4seC4mVwifSlcclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiIGJvcmRlci1ncmVlbi02MDAgYm9yZGVyLTIgcm91bmRlZC1sZyBtdC0yXCI+XHJcbiAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9IGNsYXNzTmFtZT1cIm10LTIgcC04IHB0LTIgXCI+XHJcbiAgICAgICAgICAgICAg4Lie4Li34LiZ4LiX4Li14LmI4LmD4LiK4LmJ4LmE4LibIHtzaXplVXNlZCA/IChzaXplVXNlZCA9PSAnTmFOJyA/IDAgOiBzaXplVXNlZCkgOiAwfSBNQjxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICAgIDxDaGFydFxyXG4gICAgICAgICAgICAgICAgY2hhcnRUeXBlPVwiUGllQ2hhcnRcIlxyXG4gICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3BpZU9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICBncmFwaF9pZD1cIlBpZUNoYXJ0XCJcclxuICAgICAgICAgICAgICAgIC8vIHdpZHRoPXtcIjkwJVwifVxyXG4gICAgICAgICAgICAgICAgLy8gaGVpZ2h0PXtcIjQwMHB4XCJ9XHJcbiAgICAgICAgICAgICAgICBsb2FkZXI9ezxkaXY+TG9hZGluZyBDaGFydDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIGxlZ2VuZF90b2dnbGVcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1JvdyA+XHJcbiAgICA8L2RpdiA+XHJcbiAgKTtcclxufVxyXG4vKiBnZXRTZXJ2ZXJTaWRlUHJvcHMgKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyByZXEgfSA9IGNvbnRleHQ7XHJcbiAgY29uc3QgeyBvcmlnaW4gfSA9IGFic29sdXRlVXJsKHJlcSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBvcmlnaW4sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbi8qIHV0aWxzICovXHJcbmltcG9ydCB7IGFic29sdXRlVXJsLCBhZGREYXlzLCBhcGlJbnN0YW5jZSwgYnl0ZXNUb01CLCBieXRlc1RvU2l6ZSwgY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZSwgY29udmVydERhdGV0b1RoYWlEYXRlLCBmb3JtYXREYXRlV2l0aG91dFRpbWUgfSBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL3V0aWxzJztcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBMaWtlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIENvbCxcclxuICBJbnB1dCxcclxuICBNb2RhbCxcclxuICBSb3csXHJcbiAgU3RhdGlzdGljLFxyXG4gIFRhYmxlLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgbm90aWZpY2F0aW9uXHJcbn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dDtcclxuY29uc3QgeyBUZXh0LCBUaXRsZSB9ID0gVHlwb2dyYXBoeTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcbiAgY29uc3QgeyBvcmlnaW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtwYWdpbmF0aW9uLCBzZXRQYWdpbmF0aW9uXSA9IHVzZVN0YXRlKHtcclxuICAgIGN1cnJlbnQ6IDEsXHJcbiAgICBwYWdlU2l6ZTogMTAsXHJcbiAgfSlcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBbZmlsdGVycywgc2V0RmlsdGVyc10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFt0b3RhbFVzZXIsIHNldFRvdGFsVXNlcl0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFt0b3RhbFdpbGxFeHBpcmVkLCBzZXRUb3RhbFdpbGxFeHBpcmVkXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW3RvdGFsRXhwaXJlZCwgc2V0VG90YWxFeHBpcmVkXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW2FwaVR4dCwgc2V0QXBpVHh0XSA9IHVzZVN0YXRlKCdkYXNoYm9yYWQtYWxsJylcclxuICBjb25zdCBbdG9kYXksIHNldFRvZGF5XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3dpbGxFeHByaWVkLCBzZXRXaWxsRXhwcmllZF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtleHByaWVkLCBzZXRFeHByaWVkXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2FwaVR4dFdpbGxFeHByaWVkLCBzZXRBcGlUeHRXaWxsRXhwcmllZF0gPSB1c2VTdGF0ZSgnZGFzaGJvcmFkLXdpbGwtZXhwcmllZCcpXHJcbiAgY29uc3QgW3R4dE1lbnUsIHNldFRleHRNZW51XSA9IHVzZVN0YXRlKCfguJzguLnguYnguYPguIrguYnguJfguLHguYnguIfguKvguKHguJQnKVxyXG4gIGNvbnN0IFtkYXRhRGVsZXRlLCBzZXREYXRhRGVsZXRlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3Zpc2libGVNb2RhbERlbGV0ZSwgc2V0VmlzaWJsZU1vZGFsRGVsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFthcGksIGNvbnRleHRIb2xkZXJdID0gbm90aWZpY2F0aW9uLnVzZU5vdGlmaWNhdGlvbigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdmFyIF9maWx0ZXJzID0gW11cclxuICAgIHBhZ2luYXRpb24uZmlsdGVycyA9IF9maWx0ZXJzXHJcbiAgICBmZXRjaCh7IHBhZ2luYXRpb24gfSk7XHJcbiAgICBmZXRjaFdpbGxFeHByaXJlZCh7IHBhZ2luYXRpb24gfSlcclxuICAgIGZldGNoRXhwcmlyZWQoeyBwYWdpbmF0aW9uIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IHNob3dNb2RhbCA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnZGF0YSBkZWxldGQnKVxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHNldERhdGFEZWxldGUoZGF0YSlcclxuICAgIHNldFZpc2libGVNb2RhbERlbGV0ZSh0cnVlKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhpZGVNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldFZpc2libGVNb2RhbERlbGV0ZShmYWxzZSlcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRlbGV0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdERUxFVEUnKVxyXG4gICAgLy8gY29uc3QgZGF0YSA9IHtcclxuICAgIC8vICAgJ29yZ2FuaXphdGlvbl9uYW1lJzogdmFsdWUub3JnYW5pemF0aW9uX25hbWUsXHJcbiAgICAvLyB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgY29uc3QgcmVnaXN0ZXJEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5kZWxldGUoJ29yZ2FuaXphdGlvbi8nICsgZGF0YURlbGV0ZS5vcmdhbml6YXRpb25faWQsIHt9KTtcclxuICAgIGlmIChyZWdpc3RlckRhdGEuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgIG9wZW5Ob3RpZmljYXRpb25TdWNjZXNzKClcclxuICAgICAgLy8gZmV0Y2hPcmdhbml6YXRpb25EYXRhKCk7XHJcbiAgICAgIHNldFZpc2libGVNb2RhbERlbGV0ZShmYWxzZSlcclxuICAgICAgZmV0Y2goeyBwYWdpbmF0aW9uIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvbkZhaWwocmVnaXN0ZXJEYXRhLmRhdGEubWVzc2FnZSlcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICBub3RpZmljYXRpb24uc3VjY2Vzcyh7XHJcbiAgICAgIG1lc3NhZ2U6IGDguKXguJrguILguYnguK3guKHguLnguKXguKrguLPguYDguKPguYfguIhgLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ+C4peC4muC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iCcsXHJcbiAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25GYWlsID0gKG1lc3NnYWUpID0+IHtcclxuICAgIG5vdGlmaWNhdGlvbi5lcnJvcih7XHJcbiAgICAgIG1lc3NhZ2U6IGDguJ7guJrguJvguLHguI3guKvguLLguKPguLDguKvguKfguYjguLLguIfguIHguLLguKPguKXguJrguILguYnguK3guKHguLnguKVgLFxyXG4gICAgICBkZXNjcmlwdGlvbjogbWVzc2dhZSxcclxuICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfguKfguLHguJnguJfguLXguYjguKrguKHguLHguITguKMnLFxyXG4gICAgICBkYXRhSW5kZXg6ICcnLFxyXG4gICAgICBzb3J0ZXI6IHRydWUsXHJcbiAgICAgIGtleTogJ2RhdGVfY3JlYXRlZCcsXHJcbiAgICAgIHJlbmRlcjogKGRhdGEpID0+IDw+XHJcbiAgICAgICAgPHNwYW4gPiB7Y29udmVydERhdGV0b1RoYWlEYXRlKGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUoZGF0YS5kYXRlX2NyZWF0ZWQpKX0gPC9zcGFuPlxyXG4gICAgICA8Lz4sXHJcbiAgICAgIC8vIHJlbmRlcjogbmFtZSA9PiBgJHtuYW1lLmZpcnN0fSAke25hbWUubGFzdH1gLFxyXG4gICAgICAvLyB3aWR0aDogJzIwJScsXHJcbiAgICAgIC8vIGRlZmF1bHRTb3J0T3JkZXI6ICdkZXNjZW5kJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn4Lin4Lix4LiZ4LiX4Li14LmI4Lir4Lih4LiU4Lit4Liy4Lii4Li4JyxcclxuICAgICAgZGF0YUluZGV4OiAnJyxcclxuICAgICAgc29ydGVyOiB0cnVlLFxyXG4gICAgICBrZXk6ICdkYXRlX2V4cGlyZWQnLFxyXG4gICAgICByZW5kZXI6IChkYXRhKSA9PiA8PlxyXG4gICAgICAgIDxzcGFuID4ge2NvbnZlcnREYXRldG9UaGFpRGF0ZShjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lKGRhdGEuZGF0ZV9leHBpcmVkKSl9IDwvc3Bhbj5cclxuICAgICAgPC8+LFxyXG4gICAgICAvLyByZW5kZXI6IG5hbWUgPT4gYCR7bmFtZS5maXJzdH0gJHtuYW1lLmxhc3R9YCxcclxuICAgICAgLy8gd2lkdGg6ICcyMCUnLFxyXG4gICAgICAvLyBkZWZhdWx0U29ydE9yZGVyOiAnZGVzY2VuZCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+C4iuC4t+C5iOC4reC4q+C4meC5iOC4p+C4ouC4h+C4suC4mScsXHJcbiAgICAgIGRhdGFJbmRleDogJ29yZ2FuaXphdGlvbl9uYW1lJyxcclxuICAgICAgc29ydGVyOiB0cnVlLFxyXG4gICAgICAvLyByZW5kZXI6IG5hbWUgPT4gYCR7bmFtZS5maXJzdH0gJHtuYW1lLmxhc3R9YCxcclxuICAgICAgLy8gd2lkdGg6ICcyMCUnLFxyXG4gICAgICAvLyBkZWZhdWx0U29ydE9yZGVyOiAnZGVzY2VuZCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+C5g+C4iuC5ieC4nuC4t+C5ieC4meC4l+C4teC5iCcsXHJcbiAgICAgIGRhdGFJbmRleDogJycsXHJcbiAgICAgIHNvcnRlcjogdHJ1ZSxcclxuICAgICAga2V5OiAnc2l6ZV91c2VkJyxcclxuICAgICAgcmVuZGVyOiAoZGF0YSkgPT4gPD5cclxuICAgICAgICA8c3BhbiA+IHtieXRlc1RvU2l6ZShkYXRhLnNpemVfdXNlZCl9ICA8L3NwYW4+XHJcbiAgICAgIDwvPlxyXG4gICAgICAvLyByZW5kZXI6IG5hbWUgPT4gYCR7bmFtZS5maXJzdH0gJHtuYW1lLmxhc3R9YCxcclxuICAgICAgLy8gd2lkdGg6ICcyMCUnLFxyXG4gICAgICAvLyBkZWZhdWx0U29ydE9yZGVyOiAnZGVzY2VuZCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ3BhY2thZ2UnLFxyXG4gICAgICBkYXRhSW5kZXg6ICcnLFxyXG4gICAgICBrZXk6ICdwYWNrYWdlJyxcclxuICAgICAgc29ydGVyOiB0cnVlLFxyXG4gICAgICByZW5kZXI6IChkYXRhKSA9PiA8PlxyXG4gICAgICAgIDxzcGFuID4ge2RhdGEucGFja2FnZXMubmFtZV9wYWNrYWdlfSA8L3NwYW4+XHJcbiAgICAgIDwvPixcclxuICAgICAgZmlsdGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdGcmVlIFBhY2thZ2UnLFxyXG4gICAgICAgICAgdmFsdWU6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnQ29ubmVjdCBQYWNrYWdlJyxcclxuICAgICAgICAgIHZhbHVlOiAyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ1N0YW5kYXJkIFBhY2thZ2UnLFxyXG4gICAgICAgICAgdmFsdWU6IDMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnUHJlbWl1bSBQYWNrYWdlJyxcclxuICAgICAgICAgIHZhbHVlOiA0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIC8vIHJlbmRlcjogbmFtZSA9PiBgJHtuYW1lLmZpcnN0fSAke25hbWUubGFzdH1gLFxyXG4gICAgICAvLyB3aWR0aDogJzIwJScsXHJcbiAgICAgIC8vIGRlZmF1bHRTb3J0T3JkZXI6ICdkZXNjZW5kJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn4Liq4LiW4Liy4LiZ4LiwJyxcclxuICAgICAgZGF0YUluZGV4OiAnJyxcclxuICAgICAga2V5OiAnaXNfdXNlJyxcclxuICAgICAgc29ydGVyOiB0cnVlLFxyXG4gICAgICByZW5kZXI6IChkYXRhKSA9PiA8PlxyXG4gICAgICAgIDxzcGFuID4ge2RhdGEuaXNfdXNlID09IDEgPyBcIuC5g+C4iuC5ieC4h+C4suC4mVwiIDogXCLguYTguKHguYjguYPguIrguYnguIfguLLguJlcIn0gPC9zcGFuPlxyXG4gICAgICA8Lz4sXHJcbiAgICAgIC8vIHJlbmRlcjogbmFtZSA9PiBgJHtuYW1lLmZpcnN0fSAke25hbWUubGFzdH1gLFxyXG4gICAgICAvLyB3aWR0aDogJzIwJScsXHJcbiAgICAgIC8vIGRlZmF1bHRTb3J0T3JkZXI6ICdkZXNjZW5kJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgZGF0YUluZGV4OiAnJyxcclxuICAgICAga2V5OiAneCcsXHJcbiAgICAgIHJlbmRlcjogKGRhdGEpID0+IDw+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNpemU9e1wiZGVmYXVsdFwifSBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZShkYXRhLm9yZ2FuaXphdGlvbl9pZCl9ID4g4LmB4LiB4LmJ4LmE4LiCIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibWwtMVwiIHR5cGU9XCJkYW5nZXJcIiBvbkNsaWNrPXsoKSA9PiBzaG93TW9kYWwoZGF0YSl9IHNpemU9e1wiZGVmYXVsdFwifSA+IOC4peC4miA8L0J1dHRvbj5cclxuICAgICAgPC8+LFxyXG4gICAgfSxcclxuICAgIC8vIHtcclxuICAgIC8vICAgdGl0bGU6ICdHZW5kZXInLFxyXG4gICAgLy8gICBkYXRhSW5kZXg6ICdnZW5kZXInLFxyXG4gICAgLy8gICAvLyBmaWx0ZXJzOiBbXHJcbiAgICAvLyAgIC8vICAgeyB0ZXh0OiAnTWFsZScsIHZhbHVlOiAnbWFsZScgfSxcclxuICAgIC8vICAgLy8gICB7IHRleHQ6ICdGZW1hbGUnLCB2YWx1ZTogJ2ZlbWFsZScgfSxcclxuICAgIC8vICAgLy8gXSxcclxuICAgIC8vICAgd2lkdGg6ICcyMCUnLFxyXG4gICAgLy8gfSxcclxuICAgIC8vIHtcclxuICAgIC8vICAgdGl0bGU6ICdFbWFpbCcsXHJcbiAgICAvLyAgIGRhdGFJbmRleDogJ2VtYWlsJyxcclxuICAgIC8vIH0sXHJcbiAgXTtcclxuICBjb25zdCBnb3RvUGFnZSA9IChpZCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaWQpXHJcbiAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQtb3JnYW5pemF0aW9uL29yZ2FuaXphdGlvbi8nICsgaWQpO1xyXG5cclxuICB9O1xyXG5cclxuICBjb25zdCB1c2VkU2l6ZSA9IGFzeW5jIChzaXplX3VzZWQpID0+IHtcclxuICAgIHZhciBfc2l6ZSA9IGF3YWl0IGJ5dGVzVG9NQihwYXJzZUludChzaXplX3VzZWQpKVxyXG5cclxuICAgIHJldHVybiBfc2l6ZVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlVGFibGVDaGFuZ2UgPSAocGFnaW5hdGlvbiwgZmlsdGVycywgc29ydGVyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhzb3J0ZXIpXHJcbiAgICBzZXRQYWdpbmF0aW9uKHtcclxuICAgICAgcGFnZVNpemU6IHBhZ2luYXRpb24ucGFnZVNpemUsXHJcbiAgICAgIGN1cnJlbnQ6IHBhZ2luYXRpb24uY3VycmVudFxyXG4gICAgfSlcclxuICAgIHNldEZpbHRlcnMoZmlsdGVycy5wYWNrYWdlKVxyXG5cclxuICAgIHN3aXRjaCAoYXBpVHh0KSB7XHJcbiAgICAgIGNhc2UgXCJkYXNoYm9yYWQtd2lsbC1leHByaWVkXCI6XHJcbiAgICAgICAgZmV0Y2hXaWxsRXhwcmlyZWREYXRhKHtcclxuICAgICAgICAgIHNvcnRGaWVsZDogc29ydGVyLmNvbHVtbktleSxcclxuICAgICAgICAgIHNvcnRPcmRlcjogc29ydGVyLm9yZGVyLFxyXG4gICAgICAgICAgcGFnaW5hdGlvbixcclxuICAgICAgICAgIGZpbHRlcnM6IGZpbHRlcnMucGFja2FnZSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiZGFzaGJvcmFkLWV4cHJpZWRcIjpcclxuICAgICAgICBmZXRjaEV4cHJpcmVkRGF0YSh7XHJcbiAgICAgICAgICBzb3J0RmllbGQ6IHNvcnRlci5jb2x1bW5LZXksXHJcbiAgICAgICAgICBzb3J0T3JkZXI6IHNvcnRlci5vcmRlcixcclxuICAgICAgICAgIHBhZ2luYXRpb24sXHJcbiAgICAgICAgICBmaWx0ZXJzOiBmaWx0ZXJzLnBhY2thZ2UsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBmZXRjaERhdGEoe1xyXG4gICAgICAgICAgc29ydEZpZWxkOiBzb3J0ZXIuY29sdW1uS2V5LFxyXG4gICAgICAgICAgc29ydE9yZGVyOiBzb3J0ZXIub3JkZXIsXHJcbiAgICAgICAgICBwYWdpbmF0aW9uLFxyXG4gICAgICAgICAgZmlsdGVyczogZmlsdGVycy5wYWNrYWdlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICB9O1xyXG5cclxuICBjb25zdCBvblNlYXJjaCA9IGFzeW5jIChfc2VhcmNoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBzZXRTZWFyY2goX3NlYXJjaClcclxuICAgIHNldFBhZ2luYXRpb24oe1xyXG4gICAgICBwYWdlU2l6ZTogcGFnaW5hdGlvbi5wYWdlU2l6ZSxcclxuICAgICAgY3VycmVudDogMVxyXG4gICAgfSlcclxuICAgIHZhciBfdG9kYXkgPSBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuICAgIHZhciBfd2lsbEV4cHJpZWQgPSBhZGREYXlzKF90b2RheSwgMzEpO1xyXG4gICAgdmFyIHdpbGxFeHByaWVkRGF0ZVN0cmluZyA9IGF3YWl0IGZvcm1hdERhdGVXaXRob3V0VGltZShfd2lsbEV4cHJpZWQpXHJcblxyXG4gICAgc3dpdGNoIChhcGlUeHQpIHtcclxuXHJcbiAgICAgIGNhc2UgXCJkYXNoYm9yYWQtd2lsbC1leHByaWVkXCI6XHJcbiAgICAgICAgZmV0Y2hXaWxsRXhwcmlyZWREYXRhKHtcclxuICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgcGFnZVNpemU6IHBhZ2luYXRpb24ucGFnZVNpemUsXHJcbiAgICAgICAgICAgIGN1cnJlbnQ6IDFcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZWFyY2g6IF9zZWFyY2hcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImRhc2hib3JhZC1leHByaWVkXCI6XHJcbiAgICAgICAgZmV0Y2hFeHByaXJlZERhdGEoe1xyXG4gICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBwYWdlU2l6ZTogcGFnaW5hdGlvbi5wYWdlU2l6ZSxcclxuICAgICAgICAgICAgY3VycmVudDogMVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNlYXJjaDogX3NlYXJjaFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBcImRhc2hib3JhZC1hbGxcIjpcclxuICAgICAgICBmZXRjaERhdGEoe1xyXG4gICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBwYWdlU2l6ZTogcGFnaW5hdGlvbi5wYWdlU2l6ZSxcclxuICAgICAgICAgICAgY3VycmVudDogMVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNlYXJjaDogX3NlYXJjaFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgfVxyXG4gICAgLy8gY29uc3QgYWRkYWN0aXZpdGllc0RhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgIC8vICAgJ29yZ2FuaXphdGlvbi8nICsgYXBpVHh0ICsgJz9yZXN1bHRzPScgKyBwYWdpbmF0aW9uLnBhZ2VTaXplICsgJyZwYWdlPTEmc2VhcmNoPScgKyBfc2VhcmNoICsgXCImZmlsdGVycz1cIiArIGZpbHRlcnNcclxuICAgIC8vICk7XHJcblxyXG4gICAgLy8gc2V0RGF0YShhZGRhY3Rpdml0aWVzRGF0YS5kYXRhLnJlc3VsdHMpXHJcbiAgICAvLyBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gIH1cclxuICBjb25zdCBmZXRjaCA9IGFzeW5jIChwYXJhbXMgPSB7fSkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgY29uc3QgYWRkYWN0aXZpdGllc0RhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ29yZ2FuaXphdGlvbi8nICsgYXBpVHh0ICsgJz9yZXN1bHRzPScgKyBwYXJhbXMucGFnaW5hdGlvbi5wYWdlU2l6ZSArICcmcGFnZT0nICsgcGFyYW1zLnBhZ2luYXRpb24uY3VycmVudCArIFwiJnNlYXJjaD1cIiArIHNlYXJjaCArIFwiJnNvcnRGaWVsZD1cIiArIHBhcmFtcy5zb3J0RmllbGQgKyBcIiZzb3J0T3JkZXI9XCIgKyBwYXJhbXMuc29ydE9yZGVyICsgXCImZmlsdGVycz1cIiArIHBhcmFtcy5maWx0ZXJzXHJcbiAgICApO1xyXG5cclxuICAgIHNldERhdGEoYWRkYWN0aXZpdGllc0RhdGEuZGF0YS5yZXN1bHRzKVxyXG4gICAgc2V0UGFnaW5hdGlvbih7XHJcbiAgICAgIC4uLnBhcmFtcy5wYWdpbmF0aW9uLFxyXG4gICAgICB0b3RhbDogYWRkYWN0aXZpdGllc0RhdGEuZGF0YS50b3RhbENvdW50LFxyXG4gICAgICAvLyAyMDAgaXMgbW9jayBkYXRhLCB5b3Ugc2hvdWxkIHJlYWQgaXQgZnJvbSBzZXJ2ZXJcclxuICAgICAgLy8gdG90YWw6IGRhdGEudG90YWxDb3VudCxcclxuICAgIH0pXHJcbiAgICBzZXRUb3RhbFVzZXIoYWRkYWN0aXZpdGllc0RhdGEuZGF0YS50b3RhbENvdW50KVxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAocGFyYW1zID0ge30pID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGNvbnN0IGFkZGFjdGl2aXRpZXNEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICdvcmdhbml6YXRpb24vZGFzaGJvcmFkLWFsbD9yZXN1bHRzPScgKyBwYXJhbXMucGFnaW5hdGlvbi5wYWdlU2l6ZSArICcmcGFnZT0nICsgcGFyYW1zLnBhZ2luYXRpb24uY3VycmVudCArIFwiJnNlYXJjaD1cIiArIChwYXJhbXMuc2VhcmNoID8gcGFyYW1zLnNlYXJjaCA6IFwiXCIpICsgXCImc29ydEZpZWxkPVwiICsgcGFyYW1zLnNvcnRGaWVsZCArIFwiJnNvcnRPcmRlcj1cIiArIHBhcmFtcy5zb3J0T3JkZXIgKyBcIiZmaWx0ZXJzPVwiICsgcGFyYW1zLmZpbHRlcnNcclxuICAgICk7XHJcblxyXG4gICAgc2V0RGF0YShhZGRhY3Rpdml0aWVzRGF0YS5kYXRhLnJlc3VsdHMpXHJcbiAgICBzZXRQYWdpbmF0aW9uKHtcclxuICAgICAgLi4ucGFyYW1zLnBhZ2luYXRpb24sXHJcbiAgICAgIHRvdGFsOiBhZGRhY3Rpdml0aWVzRGF0YS5kYXRhLnRvdGFsQ291bnQsXHJcbiAgICAgIC8vIDIwMCBpcyBtb2NrIGRhdGEsIHlvdSBzaG91bGQgcmVhZCBpdCBmcm9tIHNlcnZlclxyXG4gICAgICAvLyB0b3RhbDogZGF0YS50b3RhbENvdW50LFxyXG4gICAgfSlcclxuICAgIC8vIHNldFRvdGFsVXNlcihhZGRhY3Rpdml0aWVzRGF0YS5kYXRhLnRvdGFsQ291bnQpXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoV2lsbEV4cHJpcmVkID0gYXN5bmMgKHBhcmFtcyA9IHt9KSA9PiB7XHJcbiAgICB2YXIgbXlDdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgX3RvZGF5ID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcbiAgICAvLyB2YXIgX3RvZGF5ID0gbXlDdXJyZW50RGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKFwiX3RvZGF5XCIpXHJcbiAgICBjb25zb2xlLmxvZyhfdG9kYXkpXHJcbiAgICB2YXIgX3dpbGxFeHByaWVkID0gYWRkRGF5cyhfdG9kYXksIDMxKTtcclxuICAgIGNvbnNvbGUubG9nKFwiX3dpbGxFeHByaWVkXCIpXHJcblxyXG4gICAgdmFyIHdpbGxFeHByaWVkRGF0ZVN0cmluZyA9IGF3YWl0IGZvcm1hdERhdGVXaXRob3V0VGltZShfd2lsbEV4cHJpZWQpXHJcblxyXG4gICAgcGFnaW5hdGlvbi50b2RheSA9IF90b2RheVxyXG4gICAgcGFnaW5hdGlvbi53aWxsRXhwcmllZCA9IHdpbGxFeHByaWVkRGF0ZVN0cmluZ1xyXG4gICAgLy8gc2V0RXhwcmllZChfZXhwcmllZClcclxuICAgIHNldFBhZ2luYXRpb24oe1xyXG4gICAgICBwYWdlU2l6ZTogcGFnaW5hdGlvbi5wYWdlU2l6ZSxcclxuICAgICAgY3VycmVudDogMVxyXG4gICAgfSlcclxuICAgIGNvbnN0IF9EYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICdvcmdhbml6YXRpb24vJyArIGFwaVR4dFdpbGxFeHByaWVkICsgJz9yZXN1bHRzPScgKyBwYXJhbXMucGFnaW5hdGlvbi5wYWdlU2l6ZSArIFwiJnBhZ2U9MSZzZWFyY2g9XCIgKyBzZWFyY2ggKyBcIiZzb3J0RmllbGQ9XCIgKyBwYXJhbXMuc29ydEZpZWxkICsgXCImc29ydE9yZGVyPVwiICsgcGFyYW1zLnNvcnRPcmRlciArIFwiJmZpbHRlcnM9XCIgKyBwYXJhbXMuZmlsdGVycyArIFwiJnRvZGF5PVwiICsgcGFyYW1zLnBhZ2luYXRpb24udG9kYXkgKyBcIiZ3aWxsRXhwcmllZD1cIiArIHBhcmFtcy5wYWdpbmF0aW9uLndpbGxFeHByaWVkXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coXCJfRGF0YSBmZXRjaFdpbGxFeHByaXJlZFwiKVxyXG4gICAgY29uc29sZS5sb2coX0RhdGEpXHJcblxyXG5cclxuICAgIHNldFRvdGFsV2lsbEV4cGlyZWQoX0RhdGEuZGF0YS50b3RhbENvdW50KVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoV2lsbEV4cHJpcmVkRGF0YSA9IGFzeW5jIChwYXJhbXMgPSB7fSkgPT4ge1xyXG4gICAgdmFyIG15Q3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFyIF90b2RheSA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gICAgLy8gdmFyIF90b2RheSA9IG15Q3VycmVudERhdGU7XHJcbiAgICBjb25zb2xlLmxvZyhcIl90b2RheVwiKVxyXG4gICAgY29uc29sZS5sb2coX3RvZGF5KVxyXG4gICAgdmFyIF93aWxsRXhwcmllZCA9IGFkZERheXMoX3RvZGF5LCAzMSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIl93aWxsRXhwcmllZFwiKVxyXG5cclxuICAgIHZhciB3aWxsRXhwcmllZERhdGVTdHJpbmcgPSBhd2FpdCBmb3JtYXREYXRlV2l0aG91dFRpbWUoX3dpbGxFeHByaWVkKVxyXG5cclxuICAgIHBhcmFtcy5wYWdpbmF0aW9uLnRvZGF5ID0gX3RvZGF5XHJcbiAgICBwYXJhbXMucGFnaW5hdGlvbi53aWxsRXhwcmllZCA9IHdpbGxFeHByaWVkRGF0ZVN0cmluZ1xyXG4gICAgLy8gc2V0RXhwcmllZChfZXhwcmllZClcclxuICAgIHNldFBhZ2luYXRpb24oe1xyXG4gICAgICBwYWdlU2l6ZTogcGFnaW5hdGlvbi5wYWdlU2l6ZSxcclxuICAgICAgY3VycmVudDogMVxyXG4gICAgfSlcclxuICAgIGNvbnN0IF9EYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICdvcmdhbml6YXRpb24vJyArIGFwaVR4dFdpbGxFeHByaWVkICsgJz9yZXN1bHRzPScgKyBwYXJhbXMucGFnaW5hdGlvbi5wYWdlU2l6ZSArIFwiJnBhZ2U9XCIgKyBwYXJhbXMucGFnaW5hdGlvbi5jdXJyZW50ICsgXCImc2VhcmNoPVwiICsgKHBhcmFtcy5zZWFyY2ggPyBwYXJhbXMuc2VhcmNoIDogXCJcIikgKyBcIiZzb3J0RmllbGQ9XCIgKyBwYXJhbXMuc29ydEZpZWxkICsgXCImc29ydE9yZGVyPVwiICsgcGFyYW1zLnNvcnRPcmRlciArIFwiJmZpbHRlcnM9XCIgKyBwYXJhbXMuZmlsdGVycyArIFwiJnRvZGF5PVwiICsgcGFyYW1zLnBhZ2luYXRpb24udG9kYXkgKyBcIiZ3aWxsRXhwcmllZD1cIiArIHBhcmFtcy5wYWdpbmF0aW9uLndpbGxFeHByaWVkXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coXCJfRGF0YSBmZXRjaFdpbGxFeHByaXJlZFwiKVxyXG4gICAgY29uc29sZS5sb2coX0RhdGEpXHJcblxyXG4gICAgc2V0RGF0YShfRGF0YS5kYXRhLnJlc3VsdHMpXHJcbiAgICBzZXRQYWdpbmF0aW9uKHtcclxuICAgICAgLi4ucGFyYW1zLnBhZ2luYXRpb24sXHJcbiAgICAgIHRvdGFsOiBfRGF0YS5kYXRhLnRvdGFsQ291bnQsXHJcbiAgICAgIC8vIDIwMCBpcyBtb2NrIGRhdGEsIHlvdSBzaG91bGQgcmVhZCBpdCBmcm9tIHNlcnZlclxyXG4gICAgICAvLyB0b3RhbDogZGF0YS50b3RhbENvdW50LFxyXG4gICAgfSlcclxuICAgIC8vIHNldFRvdGFsV2lsbEV4cGlyZWQoX0RhdGEuZGF0YS50b3RhbENvdW50KVxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaEV4cHJpcmVkID0gYXN5bmMgKHBhcmFtcyA9IHt9KSA9PiB7XHJcbiAgICB2YXIgbXlDdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgX3RvZGF5ID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcbiAgICAvLyB2YXIgX3RvZGF5ID0gbXlDdXJyZW50RGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKFwiX3RvZGF5XCIpXHJcbiAgICBjb25zb2xlLmxvZyhfdG9kYXkpXHJcbiAgICB2YXIgX3dpbGxFeHByaWVkID0gYWRkRGF5cyhfdG9kYXksIDMxKTtcclxuICAgIGNvbnNvbGUubG9nKFwiX3dpbGxFeHByaWVkXCIpXHJcblxyXG4gICAgdmFyIHdpbGxFeHByaWVkRGF0ZVN0cmluZyA9IGF3YWl0IGZvcm1hdERhdGVXaXRob3V0VGltZShfd2lsbEV4cHJpZWQpXHJcblxyXG4gICAgcGFyYW1zLnBhZ2luYXRpb24udG9kYXkgPSBfdG9kYXlcclxuICAgIHBhcmFtcy5wYWdpbmF0aW9uLndpbGxFeHByaWVkID0gd2lsbEV4cHJpZWREYXRlU3RyaW5nXHJcbiAgICAvLyBzZXRFeHByaWVkKF9leHByaWVkKVxyXG4gICAgc2V0UGFnaW5hdGlvbih7XHJcbiAgICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICBjdXJyZW50OiAxXHJcbiAgICB9KVxyXG4gICAgY29uc3QgX0RhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ29yZ2FuaXphdGlvbi9kYXNoYm9yYWQtZXhwcmllZD9yZXN1bHRzPScgKyBwYXJhbXMucGFnaW5hdGlvbi5wYWdlU2l6ZSArIFwiJnBhZ2U9XCIgKyBwYXJhbXMucGFnaW5hdGlvbi5jdXJyZW50ICsgXCImc2VhcmNoPVwiICsgc2VhcmNoICsgXCImc29ydEZpZWxkPVwiICsgcGFyYW1zLnNvcnRGaWVsZCArIFwiJnNvcnRPcmRlcj1cIiArIHBhcmFtcy5zb3J0T3JkZXIgKyBcIiZmaWx0ZXJzPVwiICsgcGFyYW1zLmZpbHRlcnMgKyBcIiZ0b2RheT1cIiArIHBhcmFtcy5wYWdpbmF0aW9uLnRvZGF5ICsgXCImd2lsbEV4cHJpZWQ9XCIgKyBwYXJhbXMucGFnaW5hdGlvbi53aWxsRXhwcmllZFxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKFwiX0RhdGEgZmV0Y2hXaWxsRXhwcmlyZWRcIilcclxuICAgIGNvbnNvbGUubG9nKF9EYXRhKVxyXG5cclxuXHJcbiAgICBzZXRUb3RhbEV4cGlyZWQoX0RhdGEuZGF0YS50b3RhbENvdW50KVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoRXhwcmlyZWREYXRhID0gYXN5bmMgKHBhcmFtcyA9IHt9KSA9PiB7XHJcbiAgICB2YXIgbXlDdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgX3RvZGF5ID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcbiAgICAvLyB2YXIgX3RvZGF5ID0gbXlDdXJyZW50RGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKFwiX3RvZGF5XCIpXHJcbiAgICBjb25zb2xlLmxvZyhfdG9kYXkpXHJcbiAgICB2YXIgX3dpbGxFeHByaWVkID0gYWRkRGF5cyhfdG9kYXksIDMxKTtcclxuICAgIGNvbnNvbGUubG9nKFwiX3dpbGxFeHByaWVkXCIpXHJcblxyXG4gICAgdmFyIHdpbGxFeHByaWVkRGF0ZVN0cmluZyA9IGF3YWl0IGZvcm1hdERhdGVXaXRob3V0VGltZShfd2lsbEV4cHJpZWQpXHJcblxyXG4gICAgcGFyYW1zLnBhZ2luYXRpb24udG9kYXkgPSBfdG9kYXlcclxuICAgIHBhcmFtcy5wYWdpbmF0aW9uLndpbGxFeHByaWVkID0gd2lsbEV4cHJpZWREYXRlU3RyaW5nXHJcbiAgICAvLyBzZXRFeHByaWVkKF9leHByaWVkKVxyXG4gICAgc2V0UGFnaW5hdGlvbih7XHJcbiAgICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICBjdXJyZW50OiAxXHJcbiAgICB9KVxyXG4gICAgY29uc3QgX0RhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ29yZ2FuaXphdGlvbi9kYXNoYm9yYWQtZXhwcmllZD9yZXN1bHRzPScgKyBwYXJhbXMucGFnaW5hdGlvbi5wYWdlU2l6ZSArIFwiJnBhZ2U9XCIgKyBwYXJhbXMucGFnaW5hdGlvbi5jdXJyZW50ICsgXCImc2VhcmNoPVwiICsgKHBhcmFtcy5zZWFyY2ggPyBwYXJhbXMuc2VhcmNoIDogXCJcIikgKyBcIiZzb3J0RmllbGQ9XCIgKyBwYXJhbXMuc29ydEZpZWxkICsgXCImc29ydE9yZGVyPVwiICsgcGFyYW1zLnNvcnRPcmRlciArIFwiJmZpbHRlcnM9XCIgKyBwYXJhbXMuZmlsdGVycyArIFwiJnRvZGF5PVwiICsgcGFyYW1zLnBhZ2luYXRpb24udG9kYXkgKyBcIiZ3aWxsRXhwcmllZD1cIiArIHBhcmFtcy5wYWdpbmF0aW9uLndpbGxFeHByaWVkXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coXCJfRGF0YSBmZXRjaFdpbGxFeHByaXJlZFwiKVxyXG4gICAgY29uc29sZS5sb2coX0RhdGEpXHJcblxyXG4gICAgc2V0RGF0YShfRGF0YS5kYXRhLnJlc3VsdHMpXHJcbiAgICBzZXRQYWdpbmF0aW9uKHtcclxuICAgICAgLi4ucGFyYW1zLnBhZ2luYXRpb24sXHJcbiAgICAgIHRvdGFsOiBfRGF0YS5kYXRhLnRvdGFsQ291bnQsXHJcbiAgICAgIC8vIDIwMCBpcyBtb2NrIGRhdGEsIHlvdSBzaG91bGQgcmVhZCBpdCBmcm9tIHNlcnZlclxyXG4gICAgICAvLyB0b3RhbDogZGF0YS50b3RhbENvdW50LFxyXG4gICAgfSlcclxuICAgIC8vIHNldFRvdGFsRXhwaXJlZChfRGF0YS5kYXRhLnRvdGFsQ291bnQpXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN0YXRpc3RpY0NsaWNrID0gKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRTZWFyY2goXCJcIilcclxuICAgIHN3aXRjaCAodmFsdWUpIHtcclxuXHJcbiAgICAgIGNhc2UgXCJ3aWxsRXhwcmllZFwiOlxyXG4gICAgICAgIHNldFRleHRNZW51KFwi4LiI4Liz4LiZ4Lin4LiZ4Lic4Li54LmJ4LmD4LiK4LmJ4LiH4Liy4LiZ4LiX4Li14LmI4LiB4Liz4Lil4Lix4LiH4LiI4Liw4Lir4Lih4LiU4Lit4Liy4Lii4Li4XCIpXHJcbiAgICAgICAgc2V0QXBpVHh0KFwiZGFzaGJvcmFkLXdpbGwtZXhwcmllZFwiKVxyXG5cclxuICAgICAgICBmZXRjaFdpbGxFeHByaXJlZERhdGEoe1xyXG4gICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBwYWdlU2l6ZTogcGFnaW5hdGlvbi5wYWdlU2l6ZSxcclxuICAgICAgICAgICAgY3VycmVudDogMVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiZXhwcmllZFwiOlxyXG4gICAgICAgIHNldFRleHRNZW51KFwi4LiI4Liz4LiZ4Lin4LiZ4Lic4Li54LmJ4LmD4LiK4LmJ4LiH4Liy4LiZ4LiX4Li14LmI4Lir4Lih4LiU4Lit4Liy4Lii4Li4XCIpXHJcbiAgICAgICAgc2V0QXBpVHh0KFwiZGFzaGJvcmFkLWV4cHJpZWRcIilcclxuICAgICAgICBmZXRjaEV4cHJpcmVkRGF0YSh7XHJcbiAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICAgICAgICBjdXJyZW50OiAxXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHNldFRleHRNZW51KFwi4LiI4Liz4LiZ4Lin4LiZ4Lic4Li54LmJ4LmD4LiK4LmJ4LiH4Liy4LiZ4LiX4Lix4LmJ4LiH4Lir4Lih4LiUXCIpXHJcbiAgICAgICAgc2V0QXBpVHh0KFwiZGFzaGJvcmFkLWFsbFwiKVxyXG4gICAgICAgIGZldGNoRGF0YSh7XHJcbiAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICAgICAgICBjdXJyZW50OiAxXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBjb25zdCBwcm9taXNlU3RhdGUgPSBhc3luYyB2YWx1ZSA9PlxyXG4gICAgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRBcGlUeHQodmFsdWUsIHJlc29sdmUpKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VTZWFyY2ggPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKVxyXG4gICAgc2V0U2VhcmNoKHZhbHVlLnRhcmdldC52YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxSb3c+XHJcblxyXG4gICAgICAgIDxDb2wgc3Bhbj17NH0gY2xhc3NOYW1lPVwibGc6Y29sLTMgbWQ6Y29sLTEyIHAtNCByb3VuZGVkLWxnIHRleHQtd2hpdGUgYmctZ3JlZW4tNjAwIG1yLTQgbXQtMlwiPlxyXG4gICAgICAgICAgPGEgb25DbGljaz17KCkgPT4geyBoYW5kbGVTdGF0aXN0aWNDbGljaygnYWxsJykgfX0+IDxTdGF0aXN0aWMgdGl0bGU9XCLguIjguLPguJnguKfguJnguJzguLnguYnguYPguIrguYnguIfguLLguJnguJfguLHguYnguIfguKvguKHguJRcIiB2YWx1ZT17dG90YWxVc2VyfSBwcmVmaXg9ezxMaWtlT3V0bGluZWQgLz59IHZhbHVlU3R5bGU9e3tcclxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMnJlbVwiXHJcbiAgICAgICAgICB9fSAvPjwvYT5cclxuICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgPENvbCBzcGFuPXs0fSBjbGFzc05hbWU9XCJsZzpjb2wtMyBtZDpjb2wtMTIgcC00IHJvdW5kZWQtbGcgdGV4dC13aGl0ZSBiZy15ZWxsb3ctNjAwIG1yLTQgbXQtMlwiPlxyXG4gICAgICAgICAgPGEgb25DbGljaz17KCkgPT4geyBoYW5kbGVTdGF0aXN0aWNDbGljaygnd2lsbEV4cHJpZWQnKSB9fT48U3RhdGlzdGljIHRpdGxlPVwi4LiI4Liz4LiZ4Lin4LiZ4Lic4Li54LmJ4LmD4LiK4LmJ4LiH4Liy4LiZ4LiX4Li14LmI4LiB4Liz4Lil4Lix4LiH4LiI4Liw4Lir4Lih4LiU4Lit4Liy4Lii4Li4XCIgdmFsdWU9e3RvdGFsV2lsbEV4cGlyZWR9IHByZWZpeD17PExpa2VPdXRsaW5lZCAvPn0gdmFsdWVTdHlsZT17e1xyXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIycmVtXCJcclxuICAgICAgICAgIH19IC8+PC9hPlxyXG4gICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICA8Q29sIHNwYW49ezR9IGNsYXNzTmFtZT1cImxnOmNvbC0zIG1kOmNvbC0xMiBwLTQgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIGJnLXJlZC02MDAgbXItNCBtdC0yXCI+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZVN0YXRpc3RpY0NsaWNrKCdleHByaWVkJykgfX0+IDxTdGF0aXN0aWMgdGl0bGU9XCLguIjguLPguJnguKfguJnguJzguLnguYnguYPguIrguYnguIfguLLguJnguJfguLXguYjguKvguKHguJTguK3guLLguKLguLhcIiB2YWx1ZT17dG90YWxFeHBpcmVkfSBwcmVmaXg9ezxMaWtlT3V0bGluZWQgLz59IHZhbHVlU3R5bGU9e3tcclxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMnJlbVwiXHJcbiAgICAgICAgICB9fSAvPjwvYT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICA8Um93IGNsYXNzTmFtZT1cInctZnVsbCBtdC00XCI+XHJcblxyXG4gICAgICAgIDxSb3cgPlxyXG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9XCIgcGItMVwiPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8VGl0bGUgbGV2ZWw9ezJ9IGNsYXNzTmFtZT1cIm1yLTJcIj57dHh0TWVudX08L1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIGp1c3RpZnktaXRlbXMtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoIHBsYWNlaG9sZGVyPVwi4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4Lic4Li54LmJ4LmD4LiK4LmJ4LiH4Liy4LiZXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gb25DaGFuZ2VTZWFyY2godmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgIGVudGVyQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGFsbG93Q2xlYXJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgcm93S2V5PXtyZWNvcmQgPT4gcmVjb3JkLm9yZ2FuaXphdGlvbl9pZH1cclxuICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgICAgICAgICAgIHBhZ2luYXRpb249e3BhZ2luYXRpb259XHJcbiAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGFibGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICB0aXRsZT1cIuC4hOC4uOC4k+C4leC5ieC4reC4h+C4geC4suC4o+C4peC4muC4guC5ieC4reC4oeC4ueC4peC4q+C4o+C4t+C4reC5hOC4oeC5iD9cIlxyXG4gICAgICAgICAgdmlzaWJsZT17dmlzaWJsZU1vZGFsRGVsZXRlfVxyXG4gICAgICAgICAgb25Paz17b25EZWxldGV9XHJcbiAgICAgICAgICBvbkNhbmNlbD17aGlkZU1vZGFsfVxyXG4gICAgICAgICAgb2tUZXh0PVwi4Lil4LiaXCJcclxuICAgICAgICAgIGNhbmNlbFRleHQ9XCLguKLguIHguYDguKXguLTguIFcIlxyXG4gICAgICAgICAgb2tCdXR0b25Qcm9wcz17e1xyXG4gICAgICAgICAgICAndHlwZSc6IFwicHJpbWFyeVwiLFxyXG4gICAgICAgICAgICAnZGFuZ2VyJzogdHJ1ZVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cD7guITguLjguJPguJXguYnguK3guIfguIHguLLguKPguKXguJogXCJ7ZGF0YURlbGV0ZSA/IGRhdGFEZWxldGUub3JnYW5pemF0aW9uX25hbWUgOiBcIlwifVwiIOC4q+C4o+C4t+C4reC5hOC4oeC5iD8gIDwvcD5cclxuXHJcbiAgICAgICAgPC9Nb2RhbD5cclxuXHJcblxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuLyogZ2V0U2VydmVyU2lkZVByb3BzICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgcmVxIH0gPSBjb250ZXh0O1xyXG4gIGNvbnN0IHsgb3JpZ2luIH0gPSBhYnNvbHV0ZVVybChyZXEpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgb3JpZ2luLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiIsIlxyXG4vKiB1dGlscyAqL1xyXG5pbXBvcnQgeyBhYnNvbHV0ZVVybCwgY2hlY2tJc0xvZ2luIH0gZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS91dGlscyc7XHJcblxyXG4vKiBjb21wb25lbnRzICovXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0QWRtaW4nO1xyXG5pbXBvcnQgSW5kZXhBZG1pbiBmcm9tICcuL2luZGV4LWFkbWluJztcclxuaW1wb3J0IEluZGV4U3VwZXJBZG1pbiBmcm9tICcuL2luZGV4LXN1cGVyLWFkbWluJztcclxuLy8gaW1wb3J0IFVzZXJOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL1VzZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHtcclxuICBJbnB1dCxcclxuICBUeXBvZ3JhcGh5XHJcbn0gZnJvbSAnYW50ZCc7XHJcblxyXG5jb25zdCB7IFRleHQsIFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcbiAgY29uc3QgeyB1c2VyLCBvcmlnaW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbc2hvdWxkUnVuLCBzZXRTaG91bGRSdW5dID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgZnVuY3Rpb24gb25DaGFuZ2UoYSwgYiwgYykge1xyXG4gICAgY29uc29sZS5sb2coYSwgYiwgYyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb250ZW50U3R5bGUgPSB7XHJcbiAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGZldGNoVXNlckxvZ2luKClcclxuICB9LCBbXSlcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VyTG9naW4oKSB7XHJcbiAgICBjb25zdCB1c2VyTG9naW4gPSBhd2FpdCBjaGVja0lzTG9naW4oKVxyXG4gICAgLy8gY29uc29sZS5sb2codXNlckxvZ2luKVxyXG4gICAgc2V0VXNlcih1c2VyTG9naW4pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT1cIkdvdmVybm1lbnQgLSBBZG1pbiBtYW5hZ2VtZW50XCIgdGl0bGVQYWdlPVwi4Lir4LiZ4LmJ4Liy4Lir4Lil4Lix4LiBXCIgaXNNYWluPXsxfSB1cmw9e29yaWdpbn0gb3JpZ2luPXtvcmlnaW59IHVzZXI9e2xvZ2lufSBwcm9wcz17cHJvcHN9IGluZGV4TWVudT17XCIwXCJ9XHJcbiAgICAgIF9yb3V0ZXM9e1tcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYXRoOiAnL2FkbWluL2Rhc2hib3JhZCcsXHJcbiAgICAgICAgICBicmVhZGNydW1iTmFtZTogJ+C4q+C4meC5ieC4suC4q+C4peC4seC4gScsXHJcbiAgICAgICAgfV19XHJcbiAgICA+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3VzZXIgJiYgPD5cclxuICAgICAgICAgIHt1c2VyLnR5cGVfdXNlciA9PSAxICYmXHJcbiAgICAgICAgICAgIDxJbmRleFN1cGVyQWRtaW4gdXNlcj17dXNlcn0gLz5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHt1c2VyLnR5cGVfdXNlciA9PSAyICYmXHJcbiAgICAgICAgICAgIDxJbmRleEFkbWluIHVzZXJJbmZvPXt1c2VyfSAvPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvPn1cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcbi8qIGdldFNlcnZlclNpZGVQcm9wcyAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHJlcSB9ID0gY29udGV4dDtcclxuICBjb25zdCB7IG9yaWdpbiB9ID0gYWJzb2x1dGVVcmwocmVxKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG9yaWdpbixcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZ29vZ2xlLWNoYXJ0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==