module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\admin\\setting\\general.js": 0
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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

/***/ "./pages/admin/config.js":
/*!*******************************!*\
  !*** ./pages/admin/config.js ***!
  \*******************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../middleware/utils */ "./middleware/utils.js");

function config(user) {
  return {
    height: "600px",
    readonly: false,
    // all options from https://xdsoft.net/jodit/doc/
    uploader: {
      url: "/api/upload",
      insertImageAsBase64URI: false,
      "imagesExtensions": ["jpg", "png", "jpeg", "gif"],
      prepareData: function (data) {
        if (user.type_user == 1) {
          data.append('id', "admin"); // 
        } else {
          data.append('id', user.organization_id); // 
        }
      },
      defaultHandlerSuccess: function (data, resp) {
        var i,
            field = this.options.uploader.filesVariableName;

        if (data.type === "file") {
          console.log("success file");
          console.log(data);
          var textHTML = "";
          data.list.forEach(element => {
            var extension = "";
            var i = element.name.lastIndexOf('.');

            if (i > 0) {
              extension = element.name.substring(i + 1);
            }

            var _path = element.path.replace("public", "");

            if (extension == "jpg" || extension == "png" || extension == "jpeg" || extension == "gif") {
              //your code
              textHTML += '<img src="' + _path + '"/>';
            } else {
              textHTML += '<a class="file-attach" href="' + _path + '">' + element.name + '</a></br>';
            }
          });
          this.selection.insertHTML(textHTML);
        } else {
          console.log("success image");
          console.log(data.files[0]);
          var textHTML = ""; // if (data.files && data.files.length) {
          //   // for (i = 0; i < data.files.length; i += 1) {
          //   // textHTML += '<img src="' + data.baseurl + data.files[i] + '"/>'
          //   // console.log( data.files[i])
          //   this.selection.insertImage(data.files[0]);
          //   this.selection.insertHTML("</br>");
          //   // }
          // }
          // this.selection.insertHTML(textHTML);
        } // parent.selection.insertHTML('<img src="image.png"/>');

      }
    } // filebrowser: {
    //   ajax: {
    //     url: "/public/uploads/c-admin/",
    //   },
    //   uploader: {
    //      url:"/api/upload"
    //   },
    // },

  };
}

/***/ }),

/***/ "./pages/admin/setting/general/index.js":
/*!**********************************************!*\
  !*** ./pages/admin/setting/general/index.js ***!
  \**********************************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/layout/LayoutAdmin */ "./components/layout/LayoutAdmin.jsx");
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../middleware/utils */ "./middleware/utils.js");
var _jsxFileName = "D:\\govermentlt\\pages\\admin\\setting\\general\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



 // import UserNav from '../components/navigation/User';


/* components */


/* utils */


const JoditEditor = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! jodit-react */ "jodit-react", 7)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! jodit-react */ "jodit-react")],
    modules: ["jodit-react"]
  }
});
const {
  Text,
  Title
} = antd__WEBPACK_IMPORTED_MODULE_0__["Typography"];
const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_0__["Input"];

const config = __webpack_require__(/*! ./../../config */ "./pages/admin/config.js");

function Home(props) {
  const {
    0: content,
    1: setContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('');
  const [api, contextHolder] = antd__WEBPACK_IMPORTED_MODULE_0__["notification"].useNotification();
  const {
    user,
    origin
  } = props;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    0: holidayData,
    1: setHolidayData
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null);
  const [valuea, setValuea] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(1);
  const [valueb, setValueb] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(1);
  const {
    0: organizationData,
    1: setOrganizationData
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null);

  async function onChangea(e) {
    console.log('radio checked', e.target.value);
    setValuea(e.target.value);
    const data = {
      organization_id: user.organization_id,
      is_use_intro: e.target.value
    };
    const holidayData = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["apiInstance"])().put('/general', data);

    if (holidayData.data.status == 200) {
      openNotificationRegisterSuccess();
    } else {
      openNotificationRegisterFail(holidayData.data.message);
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    fetchOrganizationData();
  }, []);

  async function onChangeb(e) {
    setValueb(e.target.value);
    const data = {
      organization_id: user.organization_id,
      is_poll_confirm: e.target.value
    };
    const holidayData = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["apiInstance"])().put('/general', data);

    if (holidayData.data.status == 200) {
      openNotificationRegisterSuccess();
    } else {
      openNotificationRegisterFail(holidayData.data.message);
    }
  }

  const openNotificationRegisterSuccess = () => {
    api.success({
      message: `บันทึกข้อมูลสำเร็จ`,
      description: 'บันทึกข้อมูลสำเร็จ',
      placement: 'topRight'
    });
  };

  const openNotificationRegisterFail = messgae => {
    api.error({
      message: `พบปัญหาระหว่างการบันทึกข้อมูล`,
      description: messgae,
      placement: 'topRight'
    });
  };

  const fetchOrganizationData = async () => {
    const _organizationData = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["apiInstance"])().get('organization/' + (user ? user.organization_id : 0)); // setValuea(_organizationData.data.organization.is_use_intro);


    console.log('_organizationData.data.organization.is_use_intro');
    console.log(_organizationData.data.organization.is_use_intro);
    setValuea(_organizationData.data.organization.is_use_intro);
    setValueb(_organizationData.data.organization.is_poll_confirm);
  };

  return __jsx(_components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Government - Admin management",
    url: origin,
    origin: origin // user={login}
    ,
    indexSubMenu: "1",
    indexMenu: "sub-6-3",
    titlePage: "\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E2D\u0E37\u0E48\u0E19\u0E46",
    _routes: [{
      path: '/admin/dashborad',
      breadcrumbName: 'หน้าหลัก'
    }, {
      path: '/admin/setting/general',
      breadcrumbName: 'จัดการอื่นๆ'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 5
    }
  }, contextHolder, __jsx("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "text-base leading-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "lg:inline-flex my-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, "\u0E23\u0E30\u0E1A\u0E1A\u0E41\u0E2A\u0E14\u0E07\u0E27\u0E31\u0E19\u0E2B\u0E22\u0E38\u0E14\u0E1E\u0E34\u0E40\u0E28\u0E29\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34 :"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Radio"].Group, {
    onChange: onChangea,
    value: valuea,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
    value: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 15
    }
  }, "\u0E43\u0E0A\u0E49"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
    value: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }, "\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
    value: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }, "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E40\u0E2D\u0E07"))), __jsx("div", {
    className: "lg:inline-flex mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "lg:mr-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, "\u0E40\u0E0A\u0E48\u0E19 \u0E27\u0E31\u0E19\u0E41\u0E21\u0E48 \u0E27\u0E31\u0E19\u0E1B\u0E34\u0E22\u0E30\u0E21\u0E2B\u0E32\u0E23\u0E32\u0E0A \u0E40\u0E1B\u0E47\u0E19\u0E15\u0E49\u0E19"), __jsx("span", {
    className: "font-bold underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, "\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E2B\u0E15\u0E38"), __jsx("span", {
    className: "lg:mx-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }, "\u0E2B\u0E32\u0E01\u0E40\u0E25\u0E37\u0E2D\u0E01"), __jsx("span", {
    className: "font-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E40\u0E2D\u0E07"), __jsx("span", {
    className: "lg:mx-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, "\u0E15\u0E49\u0E2D\u0E07\u0E17\u0E33\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E01\u0E48\u0E2D\u0E19\u0E16\u0E36\u0E07\u0E08\u0E30\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E08\u0E31\u0E01\u0E01\u0E32\u0E23\u0E27\u0E31\u0E19\u0E2B\u0E22\u0E38\u0E14\u0E1E\u0E34\u0E40\u0E28\u0E29\u0E44\u0E14\u0E49")), __jsx("div", {
    className: "py-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/admin/setting/general/management-holiday",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "lg:inline-flex text-center lg:w-auto w-full px-2 py-2 rounded h-8 text-white bg-green-600 font-bold items-center justify-center hover:bg-green-600 hover:text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 15
    }
  }, "\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E27\u0E31\u0E19\u0E2B\u0E22\u0E38\u0E14\u0E1E\u0E34\u0E40\u0E28\u0E29"))), __jsx("div", {
    className: "py-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }, "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E15\u0E31\u0E27\u0E15\u0E19\u0E01\u0E48\u0E2D\u0E19\u0E42\u0E2B\u0E27\u0E14 \u0E1C\u0E25\u0E2A\u0E33\u0E23\u0E27\u0E08 : ", __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Radio"].Group, {
    onChange: onChangeb,
    value: valueb,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 46
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
    value: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 15
    }
  }, "\u0E43\u0E0A\u0E49"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
    value: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 15
    }
  }, "\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49")))))));
}
/* getServerSideProps */

async function getServerSideProps(context) {
  const {
    req
  } = context;
  const {
    origin
  } = Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_6__["absoluteUrl"])(req);
  return {
    props: {
      origin
    }
  };
}

/***/ }),

/***/ 11:
/*!****************************************************!*\
  !*** multi ./pages/admin/setting/general/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\govermentlt\pages\admin\setting\general\index.js */"./pages/admin/setting/general/index.js");


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

/***/ "jodit-react":
/*!******************************!*\
  !*** external "jodit-react" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jodit-react");

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

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdkJhci9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaWRlQmFyL1NpZGVCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0QWRtaW4uanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9Ub3BpY01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4vY29uZmlnLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FkbWluL3NldHRpbmcvZ2VuZXJhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpvZGl0LXJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJOYXZCYXIiLCJtZW51IiwidXNlciIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlU3RhdGUiLCJ0eXBlX3VzZXIiLCJuYW1lX29yZ2FuaXphdGlvbnMiLCJlbWFpbCIsIlNpZGVCYXIiLCJIZWFkZXIiLCJGb290ZXIiLCJTaWRlciIsIkNvbnRlbnQiLCJMYXlvdXQiLCJTdWJNZW51IiwiTWVudSIsIkxheW91dEFkbWluIiwiY2hpbGRyZW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJ0eXBlIiwidXJsIiwiaW1hZ2UiLCJvcmlnaW4iLCJpbmRleCIsInByb3BzIiwiX3JvdXRlcyIsImluZGV4TWVudSIsImlzTWFpbiIsInRpdGxlUGFnZSIsImluZGV4U3ViTWVudSIsImNvbGxhcHNlZCIsInNldENvbGxhcHNlZCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInNldFVzZXIiLCJ0b3BpY3MiLCJpY29uIiwidG9waWNzMiIsImNvbnRlbnRJbmRleCIsInNldENvbnRlbnRJbmRleCIsInNlbGVjdGVkS2V5Iiwic2V0U2VsZWN0ZWRLZXkiLCJjaGFuZ2VTZWxlY3RlZEtleSIsImV2ZW50Iiwia2V5IiwiZ290b1BhZ2UiLCJSb3V0ZXIiLCJwdXNoIiwidXNlRWZmZWN0IiwiZmV0Y2hVc2VyTG9naW4iLCJyb3V0ZXMyIiwicGF0aCIsImJyZWFkY3J1bWJOYW1lIiwiaXRlbVJlbmRlciIsInJvdXRlIiwicGFyYW1zIiwicm91dGVzIiwicGF0aHMiLCJsYXN0IiwiaW5kZXhPZiIsImxlbmd0aCIsImpvaW4iLCJ1c2VyTG9naW4iLCJjaGVja0lzTG9naW4iLCJoYW5kbGVDbGljayIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nQm90dG9tIiwibWFwIiwib2JqIiwid2luZG93IiwiaGlzdG9yeSIsImJhY2siLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsIm1pbkhlaWdodCIsIlRvcGljTWVudSIsInNlbGVjdGVkU3ViS2V5Iiwic3R5bGVkVG9waWNzIiwiZm9yRWFjaCIsInRvcGljIiwic3R5bGVkVG9waWNzQ2hpbGRyZW4iLCJ0b3BpY0NoaWxkcmVuIiwiaW5kZXhDaGlsZHJlbiIsIndpZHRoIiwiY29sb3IiLCJlIiwiaGFuZGxlTG9nb3V0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiQ29va2llcyIsInJlbW92ZSIsIlNFQ1JFVF9LRVkiLCJwcm9jZXNzIiwiZW52IiwiSldUX0tFWSIsInZlcmlmeVRva2VuIiwiand0VG9rZW4iLCJqd3QiLCJ2ZXJpZnkiLCJnZXRBcHBDb29raWVzIiwicmVxIiwicGFyc2VkSXRlbXMiLCJoZWFkZXJzIiwiY29va2llIiwiY29va2llc0l0ZW1zIiwic3BsaXQiLCJjb29raWVzIiwicGFyc2VkSXRlbSIsImRlY29kZVVSSSIsImFic29sdXRlVXJsIiwic2V0TG9jYWxob3N0IiwicHJvdG9jb2wiLCJob3N0IiwibG9jYXRpb24iLCJhZGREYXlzIiwiZGF0ZSIsImRheXMiLCJyZXN1bHQiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImZvcm1hdERhdGVXaXRob3V0VGltZSIsImRhdGVTdHJpbmciLCJnZXRVVENGdWxsWWVhciIsImdldFVUQ01vbnRoIiwic2xpY2UiLCJnZXRVVENEYXRlIiwiYXBpSW5zdGFuY2UiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJ0b2tlbiIsImdldCIsInBhcnNlSnd0IiwiaXNFeHBpcmVkIiwiYmFzZTY0VXJsIiwiYmFzZTY0IiwicmVwbGFjZSIsImpzb25QYXlsb2FkIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiYXRvYiIsImMiLCJjaGFyQ29kZUF0IiwidG9TdHJpbmciLCJfanNvblBheWxvYWQiLCJKU09OIiwicGFyc2UiLCJkYXRlTm93IiwicGFyc2VJbnQiLCJleHAiLCJnZXRUaW1lIiwic3Vic3RyaW5nIiwiY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZSIsImRhdGVTcGxpdCIsImVycm9yIiwiY29udmVydERhdGVEQnRvRGF0ZVBpY2tlcldpdGhUaW1lIiwiY29udmVydERhdGV0b1RoYWlEYXRlIiwiX2RhdGUiLCJjb252ZXJ0TW9udGh0b1RoYWlNb250aCIsImNvbnZlcnRZZWFydG9UaGFpWWVhciIsInllYXIiLCJtb250aCIsImNvbnZlcnREYXRldG9BZGREQiIsImdldElQQWRkcmVzcyIsInJlcyIsImRhdGEiLCJjb3VudHJ5X2NvZGUiLCJjb3VudHJ5X25hbWUiLCJjaXR5IiwicG9zdGFsIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJJUHY0Iiwic3RhdGUiLCJieXRlc1RvU2l6ZSIsImJ5dGVzIiwic2l6ZXMiLCJpIiwicm91bmQiLCJwb3ciLCJieXRlc1RvTUIiLCJOdW1iZXIiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImdldERhdGVkaWZmIiwic3RhcnREYXRlIiwidGltZUVuZCIsIm1vbWVudCIsIm5ld1N0YXJ0RGF0ZSIsIm5ld0VuZERhdGUiLCJvbmVfZGF5IiwiY2VpbCIsImdldEN1cnJlbnREYXRlIiwic2VwYXJhdG9yIiwibmV3RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJocmVmIiwiYXMiLCJmb3JtYXRGdW5jIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwcmVmZXRjaGVkIiwib2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJnZXRPYnNlcnZlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0VXJsIiwiYXNIcmVmIiwibm9kZU5hbWUiLCJ0YXJnZXQiLCJpc0xvY2FsIiwic2Nyb2xsIiwic2hhbGxvdyIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJyZXNvbHZlZEhyZWYiLCJwYXJzZWRBcyIsImhhbmRsZVJlZiIsInJlZiIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwiZXJyIiwicmVuZGVyIiwiY2hpbGQiLCJDaGlsZHJlbiIsImVsIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwiUmVhY3QiLCJ3YXJuIiwiUHJvcFR5cGVzIiwicmVxdWlyZSIsImV4YWN0IiwiTGluayIsInBhc3NIcmVmIiwidmFsdWUiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInByZXBhcmVSb3V0ZSIsInRvUm91dGUiLCJhdHRlbXB0cyIsImlzU2VydmVyUmVuZGVyIiwicGF0aG5hbWUiLCJhZGRCYXNlUGF0aCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiZGVsQmFzZVBhdGgiLCJjcmVkZW50aWFscyIsImdldFJlc3BvbnNlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIlByb21pc2UiLCJmZXRjaE5leHREYXRhIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJ1cGRhdGUiLCJtb2QiLCJuZXdEYXRhIiwicmVsb2FkIiwib3B0aW9ucyIsImNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyZXNvbHZlIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJyZWplY3QiLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJmZXRjaENvbXBvbmVudCIsImNhbmNlbGxlZCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5IiwiVEVTVF9ST1VURSIsInJlIiwiZGVjb2RlIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsImVzY2FwZWRSb3V0ZSIsImVzY2FwZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsImlzT3B0aW9uYWwiLCIkMSIsImlzQ2F0Y2hBbGwiLCJwb3MiLCJyZXBlYXQiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJjb25maWciLCJoZWlnaHQiLCJyZWFkb25seSIsInVwbG9hZGVyIiwiaW5zZXJ0SW1hZ2VBc0Jhc2U2NFVSSSIsInByZXBhcmVEYXRhIiwiYXBwZW5kIiwib3JnYW5pemF0aW9uX2lkIiwiZGVmYXVsdEhhbmRsZXJTdWNjZXNzIiwicmVzcCIsImZpbGVzVmFyaWFibGVOYW1lIiwidGV4dEhUTUwiLCJsaXN0IiwiZWxlbWVudCIsImV4dGVuc2lvbiIsImxhc3RJbmRleE9mIiwiX3BhdGgiLCJzZWxlY3Rpb24iLCJpbnNlcnRIVE1MIiwiZmlsZXMiLCJKb2RpdEVkaXRvciIsImR5bmFtaWMiLCJzc3IiLCJUZXh0IiwiVGl0bGUiLCJUeXBvZ3JhcGh5IiwiVGV4dEFyZWEiLCJJbnB1dCIsIkhvbWUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImFwaSIsImNvbnRleHRIb2xkZXIiLCJub3RpZmljYXRpb24iLCJ1c2VOb3RpZmljYXRpb24iLCJ1c2VSb3V0ZXIiLCJob2xpZGF5RGF0YSIsInNldEhvbGlkYXlEYXRhIiwidmFsdWVhIiwic2V0VmFsdWVhIiwidmFsdWViIiwic2V0VmFsdWViIiwib3JnYW5pemF0aW9uRGF0YSIsInNldE9yZ2FuaXphdGlvbkRhdGEiLCJvbkNoYW5nZWEiLCJpc191c2VfaW50cm8iLCJwdXQiLCJzdGF0dXMiLCJvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJTdWNjZXNzIiwib3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbCIsImZldGNoT3JnYW5pemF0aW9uRGF0YSIsIm9uQ2hhbmdlYiIsImlzX3BvbGxfY29uZmlybSIsInBsYWNlbWVudCIsIm1lc3NnYWUiLCJfb3JnYW5pemF0aW9uRGF0YSIsIm9yZ2FuaXphdGlvbiIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pblxcc2V0dGluZ1xcZ2VuZXJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInN0YXRpY1xcXFxkZXZlbG9wbWVudFxcXFxwYWdlc1xcXFxhZG1pblxcXFxzZXR0aW5nXFxcXGdlbmVyYWwuanNcIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IERyYXdlciwgQnV0dG9uLCBJbWFnZSwgQXZhdGFyIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgTWVudU91dGxpbmVkLCBVc2VyT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG4vLyBpbXBvcnQgXCIuL05hdkJhci5tb2R1bGUuY3NzXCI7XHJcbi8vIGltcG9ydCBsb2dvIGZyb20gXCIuLy4uLy4uL2xvZ28uc3ZnXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBOYXZCYXIgPSAoeyBtZW51LCB1c2VyIH0pID0+IHtcclxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LXRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgaWNvbj17PE1lbnVPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGUodHJ1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwi4LmA4Lih4LiZ4Li5XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtc2NyZWVuXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgLy8gb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIHZpc2libGU9e3Zpc2libGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHttZW51fVxyXG4gICAgICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC03IHctYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXsnXFxcXGltYWdlc1xcXFxsb2dvLWdvdmVybm1lbnQucG5nJ31cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc2l6ZT17MzB9IGljb249ezxVc2VyT3V0bGluZWQgLz59IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+eyF1c2VyID8gXCJcIiA6IHVzZXIudHlwZV91c2VyID09IDEgPyBcIuC4nOC4ueC5ieC4lOC4ueC5geC4peC4o+C4sOC4muC4mlwiIDogdXNlci5uYW1lX29yZ2FuaXphdGlvbnN9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Vc2VyOiB7IXVzZXIgPyBcIlwiIDogdXNlci5lbWFpbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8TGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVMb2dvdXQoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggbGc6dy1hdXRvIHctZnVsbCBweC0yIHB5LTIgcm91bmRlZCBoLTggdGV4dC13aGl0ZSBiZy1yZWQtNjAwIGZvbnQtYm9sZCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaG92ZXI6YmctcmVkLTYwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDguK3guK3guIHguIjguLLguIHguKPguLDguJrguJpcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPiAqL31cclxuICAgICAgICA8L25hdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG4vLyBpbXBvcnQgXCIuL1NpZGVCYXIubW9kdWxlLmNzc1wiXHJcbmNvbnN0IFNpZGVCYXIgPSAoeyBtZW51IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dC5TaWRlclxyXG4gICAgICBjbGFzc05hbWU9XCJzaWRlYmFyIGgtYXV0b1wiXHJcbiAgICAgIGJyZWFrcG9pbnQ9e1wibGdcIn1cclxuICAgICAgdGhlbWU9XCJsaWdodFwiXHJcbiAgICAgIGNvbGxhcHNlZFdpZHRoPXswfVxyXG4gICAgICB0cmlnZ2VyPXtudWxsfVxyXG4gICAgPlxyXG4gICAgICAgIHttZW51fVxyXG4gICAgPC9MYXlvdXQuU2lkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7IiwiaW1wb3J0IHtcclxuICBEYXNoYm9hcmRPdXRsaW5lZCwgTWFpbE91dGxpbmVkLCBUb29sT3V0bGluZWRcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IEJyZWFkY3J1bWIsIENvbCwgTGF5b3V0LCBNZW51LCBQYWdlSGVhZGVyLCBSb3cgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuLyogQ29tcG9uZW50cyAqL1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY2hlY2tJc0xvZ2luIH0gZnJvbSAnLi4vLi4vbWlkZGxld2FyZS91dGlscyc7XHJcbi8vIGltcG9ydCBUb3BpY01lbnUgZnJvbSBcIi4vY29tcG9uZW50cy9Ub3BpY01lbnVcIjtcclxuaW1wb3J0IFRvcGljTWVudSBmcm9tIFwiLi8uLi8uLi9jb21wb25lbnRzL21lbnUvVG9waWNNZW51XCI7XHJcbi8vIGltcG9ydCBcIi4vQXBwLmNzc1wiO1xyXG4vLyAgaW1wb3J0IFwiLi9BcHAubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLy4uLy4uL2NvbXBvbmVudHMvTmF2QmFyL05hdkJhclwiO1xyXG5pbXBvcnQgU2lkZUJhciBmcm9tIFwiLi8uLi8uLi9jb21wb25lbnRzL1NpZGVCYXIvU2lkZUJhclwiO1xyXG4vLyBpbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9Gb290ZXJEZWZhdWx0JztcclxuY29uc3QgeyBIZWFkZXIsIEZvb3RlciwgU2lkZXIsIENvbnRlbnQgfSA9IExheW91dDtcclxuXHJcbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXRBZG1pbih7XHJcbiAgY2hpbGRyZW4sXHJcbiAgdGl0bGUgPSAnR292ZXJubWVudCcsXHJcbiAgZGVzY3JpcHRpb24gPSAnTmV4dC5qcyB3aXRoIFNlcXVlbGl6ZSB8IEEgYm9pbGVycGxhdGUgTmV4dC5qcyBhbmQgU2VxdWVsaXplIGZyb20gZHlhcmZpLmdpdGh1Yi5pbycsXHJcbiAga2V5d29yZHMgPSAnTmV4dC5qcywgU2VxdWVsaXplLCBPUk0sIEpXVCwgSnNvbiBXZWIgVG9rZW5zLCBBdXRoZW50aWNhdGlvbiwgQXBwbGljYXRpb24nLFxyXG4gIHR5cGUgPSAnb2JqZWN0JyxcclxuICB1cmwgPSAnLycsXHJcbiAgaW1hZ2UgPSAnL25leHRqcy5zdmcnLFxyXG4gIG9yaWdpbiA9ICcnLFxyXG4gIGluZGV4LFxyXG4gIHByb3BzLFxyXG4gIF9yb3V0ZXMgPSBbXSxcclxuICBpbmRleE1lbnUgPSBcIjFcIixcclxuICBpc01haW4gPSBmYWxzZSxcclxuICB0aXRsZVBhZ2UgPSBcInRpdGxlUGFnZVwiLFxyXG4gIGluZGV4U3ViTWVudSA9IFwiXCJcclxufSkge1xyXG4gIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gIGNvbnN0IHRvcGljcyA9IFtcclxuICAgIHsgdGl0bGU6IFwi4Lir4LiZ4LmJ4Liy4Lir4Lil4Lix4LiBXCIsIGljb246IDwgRGFzaGJvYXJkT3V0bGluZWQgLz4gfSxcclxuICAgIHsgdGl0bGU6IFwi4LiI4Lix4LiU4LiB4Liy4Lij4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZXCIsIGljb246IDwgVG9vbE91dGxpbmVkIC8+IH0sXHJcbiAgICB7IHRpdGxlOiBcIuC4iOC4seC4lOC4geC4suC4o+C4guC5iOC4suC4p+C4m+C4o+C4sOC4iuC4suC4quC4seC4oeC4nuC4seC4meC4mOC5jFwiLCBpY29uOiA8IFRvb2xPdXRsaW5lZCAvPiB9LFxyXG4gICAgeyB0aXRsZTogXCLguIjguLHguJTguIHguLLguKPguKfguLHguJnguKvguKLguLjguJTguJ7guLTguYDguKjguKlcIiwgaWNvbjogPCBUb29sT3V0bGluZWQgLz4gfSxdO1xyXG4gIGNvbnN0IHRvcGljczIgPSBbXHJcbiAgICB7IHRpdGxlOiBcIuC4q+C4meC5ieC4suC4q+C4peC4seC4gVwiLCBpY29uOiA8IERhc2hib2FyZE91dGxpbmVkIC8+IH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIuC4iOC4seC4lOC4geC4suC4o+C5gOC4meC4t+C5ieC4reC4q+C4slwiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPixcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICB7IHRpdGxlOiBcIuC4guC5iOC4suC4p+C4geC4tOC4iOC4geC4o+C4o+C4oVwiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAgICAgIHsgdGl0bGU6IFwi4LiC4LmI4Liy4Lin4Lib4Lij4Liw4LiK4Liy4Liq4Lix4Lih4Lie4Lix4LiZ4LiY4LmMXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+IH0sXHJcbiAgICAgICAgeyB0aXRsZTogXCLguILguYjguLLguKfguIjguLHguJTguIvguLfguYnguK3guIjguLHguJTguIjguYnguLLguIdcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgICAgICB7IHRpdGxlOiBcIuC4peC4tOC4h+C4hOC5jOC4q+C4meC5iOC4p+C4ouC4h+C4suC4meC4l+C4teC5iOC5gOC4geC4teC5iOC4ouC4p+C4guC5ieC4reC4h1wiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAgICAgIHsgdGl0bGU6IFwi4LiB4Lij4Liw4LiU4Liy4LiZ4LiC4LmI4Liy4LinXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+IH0sXHJcbiAgICAgICAgeyB0aXRsZTogXCLguITguKXguLHguIfguYDguK3guIHguKrguLLguKNcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgICAgICB7IHRpdGxlOiBcIuC4quC4s+C4o+C4p+C4iOC4hOC4p+C4suC4oeC4hOC4tOC4lOC5gOC4q+C5h+C4mVwiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAgICAgIHsgdGl0bGU6IFwi4Lin4Liy4Lij4Liq4Liy4LijXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+IH0sXHJcbiAgICAgICAgeyB0aXRsZTogXCLguKPguLLguKLguIrguLfguYjguK3guJbguKfguLLguKLguJ7guKPguLDguJ7guKNcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwi4LiI4Lix4LiU4LiB4Liy4Lij4LmA4Lih4LiZ4Li5XCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+LFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIHsgdGl0bGU6IFwi4LmA4Lih4LiZ4Li54Lir4Lil4Lix4LiBXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+IH0sXHJcbiAgICAgICAgeyB0aXRsZTogXCLguYDguKHguJnguLnguKPguK3guIdcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHsgdGl0bGU6IFwi4LiC4LmJ4Lit4Lih4Li54Lil4LmA4Lih4LiZ4Li54Lij4LmJ4Lit4LiH4LiX4Li44LiB4LiC4LmMXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+IH0sXHJcbiAgICB7IHRpdGxlOiBcIuC4guC5ieC4reC4oeC4ueC4peC5gOC4oeC4meC4ueC4leC4tOC4lOC4leC5iOC4reC5gOC4o+C4slwiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAgeyB0aXRsZTogXCLguKPguLLguKLguIfguLLguJnguKrguKPguLjguJtcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwi4LiV4Lix4LmJ4LiH4LiE4LmI4Liy4Lij4Liw4Lia4LiaXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+LFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIHsgdGl0bGU6IFwi4LiC4LmJ4Lit4Lih4Li54Lil4Lit4LiH4LiE4LmM4LiB4LijKOC4iOC4seC4lOC4geC4suC4o+C5guC4peC5guC4geC5iSlcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgICAgICB7IHRpdGxlOiBcIuC4iOC4seC4lOC4geC4suC4o+C4mOC4teC4oVwiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAgICAgIHsgdGl0bGU6IFwi4Liq4LmI4Lin4LiZ4Lir4Lix4Lin4LmA4Lin4LmH4Lia4LmE4LiL4LiV4LmMXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+IH0sXHJcbiAgICAgICAgeyB0aXRsZTogXCLguIjguLHguJTguIHguLLguKPguK3guLfguYjguJnguYZcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgICAgXVxyXG4gICAgfSxcclxuICBdO1xyXG4gIGNvbnN0IFtjb250ZW50SW5kZXgsIHNldENvbnRlbnRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2VsZWN0ZWRLZXksIHNldFNlbGVjdGVkS2V5XSA9IHVzZVN0YXRlKFwiMFwiKTtcclxuICBjb25zdCBjaGFuZ2VTZWxlY3RlZEtleSA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3Qga2V5ID0gZXZlbnQua2V5O1xyXG4gICAgc2V0U2VsZWN0ZWRLZXkoa2V5KTtcclxuICAgIGdvdG9QYWdlKGtleSk7XHJcbiAgICAvLyBzZXRDb250ZW50SW5kZXgoK2tleSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ290b1BhZ2UgPSAoa2V5KSA9PiB7XHJcblxyXG4gICAgaWYgKHVzZXIudHlwZV91c2VyID09IDEpIHtcclxuICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICBjYXNlIFwiMFwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9kYXNoYm9yYWQnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQtb3JnYW5pemF0aW9uJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiMlwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50LWluZm9ybWF0aW9uJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiM1wiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50LWF1dG8tbGFuZGluZ3BhZ2UnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICBjYXNlIFwiMFwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9kYXNoYm9yYWQnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzdWItMS0wXCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQvYWN0aXZpdGllcycpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN1Yi0xLTFcIjpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC9pbmZvcm1hdGlvbicpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN1Yi0xLTJcIjpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC9wdXJjaGFzZS1uZXdzJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTEtM1wiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50L2Jhbm5lcicpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN1Yi0xLTRcIjpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC93ZWJib2FyZCcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN1Yi0xLTVcIjpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC9kb2N1bWVudHMnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzdWItMS02XCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQvcG9sbHMnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzdWItMS03XCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQvam91cm5hbCcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN1Yi0xLThcIjpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC9ibGVzc2luZy1saXN0Jyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTItMFwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50LW1lbnUvcHJpbWFyeS1tZW51Jyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTItMVwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50LW1lbnUvc2Vjb3VuZGFyeS1tZW51Jyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiM1wiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50LWNvbXBsYWluJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiNFwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50LWNvbnRhY3QnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCI1XCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL3JlcG9ydCcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN1Yi02LTBcIjpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vc2V0dGluZy9wcm9maWxlJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTYtMVwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9zZXR0aW5nL3RoZW1lJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTYtMlwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9zZXR0aW5nL2NvdmVyJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTYtM1wiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9zZXR0aW5nL2dlbmVyYWwnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2Vycm9yLTQwNCcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gIH07XHJcbiAgY29uc3QgTWVudSA9IChcclxuICAgIDxUb3BpY01lbnVcclxuICAgICAgdG9waWNzPXshdXNlciA/IFtdIDogdXNlci50eXBlX3VzZXIgPT0gMSA/IHRvcGljcyA6IHRvcGljczJ9XHJcbiAgICAgIHNlbGVjdGVkS2V5PXtpbmRleE1lbnV9XHJcbiAgICAgIGNoYW5nZVNlbGVjdGVkS2V5PXtjaGFuZ2VTZWxlY3RlZEtleX1cclxuICAgICAgc2VsZWN0ZWRTdWJLZXk9e2luZGV4U3ViTWVudX1cclxuICAgIC8+XHJcbiAgKTtcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFVzZXJMb2dpbigpXHJcbiAgICAvLyByZW5kZXJLZXlNZW51KHByb3BzLmFzUGF0aCk7XHJcbiAgfSwgW10pXHJcblxyXG5cclxuICBjb25zdCByb3V0ZXMyID0gW3tcclxuICAgIHBhdGg6ICdpbmRleCcsXHJcbiAgICBicmVhZGNydW1iTmFtZTogJ2hvbWUnXHJcbiAgfSwge1xyXG4gICAgcGF0aDogJ2ZpcnN0JyxcclxuICAgIGJyZWFkY3J1bWJOYW1lOiAnZmlyc3QnXHJcbiAgfSwge1xyXG4gICAgcGF0aDogJ3NlY29uZCcsXHJcbiAgICBicmVhZGNydW1iTmFtZTogJ3NlY29uZCdcclxuICB9XTtcclxuICBmdW5jdGlvbiBpdGVtUmVuZGVyKHJvdXRlLCBwYXJhbXMsIHJvdXRlcywgcGF0aHMpIHtcclxuICAgIGNvbnN0IGxhc3QgPSByb3V0ZXMuaW5kZXhPZihyb3V0ZSkgPT09IHJvdXRlcy5sZW5ndGggLSAxO1xyXG4gICAgcmV0dXJuIGxhc3QgPyA8c3Bhbj57cm91dGUuYnJlYWRjcnVtYk5hbWV9PC9zcGFuPiA6IDxMaW5rIHRvPXtwYXRocy5qb2luKCcvJyl9Pntyb3V0ZS5icmVhZGNydW1iTmFtZX08L0xpbms+O1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VyTG9naW4oKSB7XHJcbiAgICBjb25zdCB1c2VyTG9naW4gPSBhd2FpdCBjaGVja0lzTG9naW4oKVxyXG4gICAgLy8gY29uc29sZS5sb2codXNlckxvZ2luKVxyXG4gICAgc2V0VXNlcih1c2VyTG9naW4pXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlKCFhY3RpdmUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cImluZGV4LCBmb2xsb3dcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e2tleXdvcmRzfSAvPlxyXG5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgcHJvcGVydHk9XCJ0d2l0dGVyOmltYWdlOnNyY1wiXHJcbiAgICAgICAgICBjb250ZW50PXtgJHtvcmlnaW59JHtpbWFnZX0/dj0ke01hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMCl9YH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjp1cmxcIiBjb250ZW50PXt1cmx9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XHJcblxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcclxuICAgICAgICAgIGNvbnRlbnQ9e2Ake29yaWdpbn0ke2ltYWdlfT92PSR7TWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwKX1gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXt1cmx9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD17dHlwZX0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXt1cmx9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxyXG5cclxuICAgICAgICB7LyogPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPiAqL31cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ub1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC41LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCI+PC9saW5rPlxyXG4gICAgICAgIHsvKiA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC05YUl0Mm5ScEMxMlVrOWdTOWJhRGw0MTFOUUFwRm1DMjZFd0FPSDhXZ1psNU1ZWXhGZmMrTmNQYjFkS0dqN1NrXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAvPiAqL31cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICB7LyogPEhlYWRlciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTRcIj48L2Rpdj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8Rm9vdGVyIC8+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgIDxOYXZCYXIgbWVudT17TWVudX0gdXNlcj17dXNlcn0gLz5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPFNpZGVCYXIgbWVudT17TWVudX0gLz5cclxuICAgICAgICAgIDxMYXlvdXQuQ29udGVudCBjbGFzc05hbWU9XCJjb250ZW50IHctZnVsbFwiPlxyXG4gICAgICAgICAgICB7Lyoge3RvcGljc1tjb250ZW50SW5kZXhdfSAqL31cclxuICAgICAgICAgICAgPENvbnRlbnQgY2xhc3NOYW1lPVwidy1mdWxsXCIgc3R5bGU9e3sgcGFkZGluZ1RvcDogMCwgcGFkZGluZ0xlZnQ6IFwiMXJlbVwiLCBwYWRkaW5nUmlnaHQ6IFwiMXJlbVwiLCBwYWRkaW5nQm90dG9tOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0gY2xhc3NOYW1lPVwicGItMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc01haW4gJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9IGNsYXNzTmFtZT1cIlwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJwLTEuNSBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFVzZXJPdXRsaW5lZCBjbGFzc05hbWU9XCJ0ZXh0LTR4bFwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC00IHRleHQtNHhsXCI+e3RpdGxlUGFnZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQganVzdGlmeS1pdGVtcy1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJwLTEuNSAganVzdGlmeS1lbmQganVzdGlmeS1pdGVtcy1lbmQgcHQtOFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfcm91dGVzLm1hcCgob2JqLCBpbmRleCwgeyBsZW5ndGggfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggKyAxID09PSBsZW5ndGgpIHsgLy9sYXN0IGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4+e29iai5icmVhZGNydW1iTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxCcmVhZGNydW1iLkl0ZW0gaHJlZj17b2JqLnBhdGh9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntvYmouYnJlYWRjcnVtYk5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JyZWFkY3J1bWIuSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CcmVhZGNydW1iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgeyFpc01haW4gJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9IGNsYXNzTmFtZT1cIlwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2VIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBnaG9zdD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25CYWNrPXsoKSA9PiB3aW5kb3cuaGlzdG9yeS5iYWNrKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdWJUaXRsZT1cIlRoaXMgaXMgYSBzdWJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmE9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7X3JvdXRlcy5tYXAoKG9iaiwgaW5kZXgsIHsgbGVuZ3RoIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggKyAxID09PSBsZW5ndGgpIHsgLy9sYXN0IGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3Bhbj57b2JqLmJyZWFkY3J1bWJOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxCcmVhZGNydW1iLkl0ZW0gaHJlZj17b2JqLnBhdGh9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e29iai5icmVhZGNydW1iTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CcmVhZGNydW1iLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JyZWFkY3J1bWI+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8Um93IGNsYXNzTmFtZT1cInAtMS41IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgPFVzZXJPdXRsaW5lZCBjbGFzc05hbWU9XCJ0ZXh0LTR4bFwiIC8+XHJcbiAgICA8aDEgY2xhc3NOYW1lPVwibWwtNCBtdC00IHRleHQtNHhsXCI+bWFuYWdlbWVudCBhY3Rpdml0aWVzPC9oMT5cclxuICA8L1Jvdz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Lz59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxDb2wgc3Bhbj17MTJ9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1pdGVtcy1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbFwiIHN0eWxlPXt7IHBhZGRpbmc6IDI0LCBiYWNrZ3JvdW5kOiAnI2ZmZicsIG1pbkhlaWdodDogMzYwIH19PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgICAgICA8L0xheW91dC5Db250ZW50PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnU7XHJcblxyXG5jb25zdCBUb3BpY01lbnUgPSAoeyB0b3BpY3MsIHNlbGVjdGVkS2V5LCBjaGFuZ2VTZWxlY3RlZEtleSwgc2VsZWN0ZWRTdWJLZXkgfSkgPT4ge1xyXG4gICAgY29uc3Qgc3R5bGVkVG9waWNzID0gW107XHJcbiAgICB0b3BpY3MuZm9yRWFjaCgodG9waWMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKHRvcGljLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlZFRvcGljc0NoaWxkcmVuID0gW107XHJcblxyXG4gICAgICAgICAgICB0b3BpYy5jaGlsZHJlbi5mb3JFYWNoKCh0b3BpY0NoaWxkcmVuLCBpbmRleENoaWxkcmVuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZWRUb3BpY3NDaGlsZHJlbi5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXsnc3ViLScgKyBpbmRleCArIFwiLVwiICsgaW5kZXhDaGlsZHJlbn0gb25DbGljaz17Y2hhbmdlU2VsZWN0ZWRLZXl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RvcGljQ2hpbGRyZW4udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc3R5bGVkVG9waWNzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8U3ViTWVudSBrZXk9e2luZGV4fSBpY29uPXt0b3BpYy5pY29ufSB0aXRsZT17dG9waWMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiB7dG9waWMudGl0bGV9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHtzdHlsZWRUb3BpY3NDaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICB7LyogPE1lbnUuSXRlbSBrZXk9XCJzdWItMVwiPntKU09OLnN0cmluZ2lmeSgpfTwvTWVudS5JdGVtPiAqL31cclxuICAgICAgICAgICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0eWxlZFRvcGljcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9e2luZGV4fSBvbkNsaWNrPXtjaGFuZ2VTZWxlY3RlZEtleX0gaWNvbj17dG9waWMuaWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RvcGljLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgICk7XHJcblxyXG4gICAgc3R5bGVkVG9waWNzLnB1c2goXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFudC1tZW51LWl0ZW1cIj5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVMb2dvdXQoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggdy1hdXRvIHctZnVsbCByb3VuZGVkIGgtOCB0ZXh0LXdoaXRlIGJnLXJlZC02MDAgZm9udC1ib2xkIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBob3ZlcjpiZy1yZWQtNjAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIOC4reC4reC4geC4iOC4suC4geC4o+C4sOC4muC4mlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuXHJcbiAgICApXHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoYW5kbGVMb2dvdXRcIilcclxuICAgICAgICBDb29raWVzLnJlbW92ZSgndG9rZW4nKVxyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWVudSBtb2RlPVwiaW5saW5lXCIgc2VsZWN0ZWRLZXlzPXtbc2VsZWN0ZWRLZXldfSBkZWZhdWx0T3BlbktleXM9e1tzZWxlY3RlZFN1YktleV19PlxyXG4gICAgICAgICAgICB7c3R5bGVkVG9waWNzfVxyXG4gICAgICAgIDwvTWVudT5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVG9waWNNZW51OyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IFNFQ1JFVF9LRVkgPSBwcm9jZXNzLmVudi5KV1RfS0VZO1xyXG5cclxuLypcclxuICogQHBhcmFtcyB7and0VG9rZW59IGV4dHJhY3RlZCBmcm9tIGNvb2tpZXNcclxuICogQHJldHVybiB7b2JqZWN0fSBvYmplY3Qgb2YgZXh0cmFjdGVkIHRva2VuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VG9rZW4oand0VG9rZW4pIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGp3dC52ZXJpZnkoand0VG9rZW4sIFNFQ1JFVF9LRVkpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKCdlOicsIGUpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKlxyXG4gKiBAcGFyYW1zIHtyZXF1ZXN0fSBleHRyYWN0ZWQgZnJvbSByZXF1ZXN0IHJlc3BvbnNlXHJcbiAqIEByZXR1cm4ge29iamVjdH0gb2JqZWN0IG9mIHBhcnNlIGp3dCBjb29raWUgZGVjb2RlIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFwcENvb2tpZXMocmVxKSB7XHJcbiAgY29uc3QgcGFyc2VkSXRlbXMgPSB7fTtcclxuICBpZiAocmVxLmhlYWRlcnMuY29va2llKSB7XHJcbiAgICBjb25zdCBjb29raWVzSXRlbXMgPSByZXEuaGVhZGVycy5jb29raWUuc3BsaXQoJzsgJyk7XHJcbiAgICBjb29raWVzSXRlbXMuZm9yRWFjaChjb29raWVzID0+IHtcclxuICAgICAgY29uc3QgcGFyc2VkSXRlbSA9IGNvb2tpZXMuc3BsaXQoJz0nKTtcclxuICAgICAgcGFyc2VkSXRlbXNbcGFyc2VkSXRlbVswXV0gPSBkZWNvZGVVUkkocGFyc2VkSXRlbVsxXSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIHBhcnNlZEl0ZW1zO1xyXG59XHJcblxyXG4vKlxyXG4gKiBAcGFyYW1zIHtyZXF1ZXN0fSBleHRyYWN0ZWQgZnJvbSByZXF1ZXN0IHJlc3BvbnNlLCB7c2V0TG9jYWxob3N0fSB5b3VyIGxvY2FsaG9zdCBhZGRyZXNzXHJcbiAqIEByZXR1cm4ge29iamVjdH0gb2JqZWN0cyBvZiBwcm90b2NvbCwgaG9zdCBhbmQgb3JpZ2luXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWJzb2x1dGVVcmwocmVxLCBzZXRMb2NhbGhvc3QpIHtcclxuICB2YXIgcHJvdG9jb2wgPSAnaHR0cHM6JztcclxuICB2YXIgaG9zdCA9IHJlcVxyXG4gICAgPyByZXEuaGVhZGVyc1sneC1mb3J3YXJkZWQtaG9zdCddIHx8IHJlcS5oZWFkZXJzWydob3N0J11cclxuICAgIDogd2luZG93LmxvY2F0aW9uLmhvc3Q7XHJcbiAgaWYgKGhvc3QuaW5kZXhPZignbG9jYWxob3N0JykgPiAtMSkge1xyXG4gICAgaWYgKHNldExvY2FsaG9zdCkgaG9zdCA9IHNldExvY2FsaG9zdDtcclxuICAgIHByb3RvY29sID0gJ2h0dHA6JztcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3RvY29sOiBwcm90b2NvbCxcclxuICAgIGhvc3Q6IGhvc3QsXHJcbiAgICBvcmlnaW46IHByb3RvY29sICsgJy8vJyArIGhvc3QsXHJcbiAgICB1cmw6IHJlcSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkRGF5cyhkYXRlLCBkYXlzKSB7XHJcbiAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gIHJlc3VsdC5zZXREYXRlKHJlc3VsdC5nZXREYXRlKCkgKyBkYXlzKTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vL1lZWVktTU0tRERcclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGVXaXRob3V0VGltZShkYXRlKSB7XHJcbiAgdmFyIGRhdGVTdHJpbmcgPVxyXG4gICAgZGF0ZS5nZXRVVENGdWxsWWVhcigpICsgXCItXCIgK1xyXG4gICAgKFwiMFwiICsgKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpKS5zbGljZSgtMikgKyBcIi1cIiArXHJcbiAgICAoXCIwXCIgKyBkYXRlLmdldFVUQ0RhdGUoKSkuc2xpY2UoLTIpICsgXCIgXCJcclxuICByZXR1cm4gZGF0ZVN0cmluZztcclxufVxyXG4vLyBjb25zdCBhcGkgPSBwcm9jZXNzLmVudi5QVUJMSUNfVVJMXHJcblxyXG5leHBvcnQgY29uc3QgYXBpSW5zdGFuY2UgPSAoKSA9PiB7XHJcbiAgLy8gY29uc3QgYXV0aG9yaXphdGlvbiA9IHN0b3JlLmdldFN0YXRlKCkudXNlclN0YXRlLnRva2VuID8gc3RvcmUuZ2V0U3RhdGUoKS51c2VyU3RhdGUudG9rZW4gOiBudWxsXHJcblxyXG4gIC8vIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgLy8gXHQneC1hcGktdG9rZW4nOiBhdXRob3JpemF0aW9uID8gYXV0aG9yaXphdGlvbiA6ICcnLFxyXG4gIC8vIH1cclxuXHJcbiAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiAnL2FwaScsXHJcbiAgICAvLyBoZWFkZXJzLFxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja0lzTG9naW4gPSAoKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coXCJjaGVja0lzTG9naW5cIilcclxuICB2YXIgdG9rZW4gPSBDb29raWVzLmdldCgndG9rZW4nKSAvLyA9PiAndmFsdWUnXHJcblxyXG4gIGlmICghdG9rZW4pIHtcclxuICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgLy8gY29uc29sZS5sb2cocGFyc2VKd3QodG9rZW4pKVxyXG4gIHJldHVybiBwYXJzZUp3dCh0b2tlbilcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUp3dCh0b2tlbikge1xyXG5cclxuICB2YXIgaXNFeHBpcmVkID0gZmFsc2U7XHJcbiAgLy8gY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKTtcclxuXHJcblxyXG5cclxuICB2YXIgYmFzZTY0VXJsID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcclxuICB2YXIgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XHJcbiAgdmFyIGpzb25QYXlsb2FkID0gZGVjb2RlVVJJQ29tcG9uZW50KGF0b2IoYmFzZTY0KS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChjKSB7XHJcbiAgICByZXR1cm4gJyUnICsgKCcwMCcgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XHJcbiAgfSkuam9pbignJykpO1xyXG4gIHZhciBfanNvblBheWxvYWQgPSBKU09OLnBhcnNlKGpzb25QYXlsb2FkKVxyXG4gIHZhciBkYXRlTm93ID0gbmV3IERhdGUoKTtcclxuICAvLyBjb25zb2xlLmxvZyhwYXJzZUludChfanNvblBheWxvYWQuZXhwKSlcclxuICAvLyBjb25zb2xlLmxvZyhwYXJzZUludCgoZGF0ZU5vdy5nZXRUaW1lKCkpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsMTApKSlcclxuICBpZiAocGFyc2VJbnQoX2pzb25QYXlsb2FkLmV4cCkgPCBwYXJzZUludCgoZGF0ZU5vdy5nZXRUaW1lKCkpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKSkpIHtcclxuICAgIGNvbnNvbGUubG9nKFwidHJ1ZVwiKVxyXG5cclxuICAgIGlzRXhwaXJlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNFeHBpcmVkKSB7XHJcbiAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcbiAgcmV0dXJuIF9qc29uUGF5bG9hZDtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZShkYXRlKSB7XHJcbiAgdHJ5IHtcclxuICAgIHZhciBkYXRlU3BsaXQgPSBkYXRlLnRvU3RyaW5nKCkuc3BsaXQoXCJUXCIpO1xyXG4gICAgcmV0dXJuIGRhdGVTcGxpdFswXTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJXaXRoVGltZShkYXRlKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vOjA3LjAwMFpcclxuICAgIC8vU2FtcGxlVGV4dC5yZXBsYWNlKFwiRGV2ZWxvcGVyXCIsIFwiQXBwIEJ1aWxkZXJcIik7XHJcbiAgICB2YXIgZGF0ZVNwbGl0ID0gZGF0ZS50b1N0cmluZygpLnNwbGl0KFwiVFwiKTtcclxuICAgIHJldHVybiBkYXRlU3BsaXRbMF0gKyBcIiBcIiArIGRhdGVTcGxpdFsxXS5yZXBsYWNlKFwiLjAwMFpcIiwgXCJcIik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RGF0ZXRvVGhhaURhdGUoZGF0ZSkge1xyXG4gIHZhciBfZGF0ZSA9IGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUoZGF0ZSlcclxuICB2YXIgZGF0ZVNwbGl0ID0gX2RhdGUudG9TdHJpbmcoKS5zcGxpdChcIi1cIik7XHJcbiAgLy8gMjAyMS0wOS0xNlxyXG4gIHJldHVybiBkYXRlU3BsaXRbMl0gKyBcIiBcIiArIGNvbnZlcnRNb250aHRvVGhhaU1vbnRoKGRhdGVTcGxpdFsxXSkgKyBcIiBcIiArIGNvbnZlcnRZZWFydG9UaGFpWWVhcihkYXRlU3BsaXRbMF0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0WWVhcnRvVGhhaVllYXIoeWVhcikge1xyXG4gIHJldHVybiBwYXJzZUludCh5ZWFyKSArIDU0M1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydE1vbnRodG9UaGFpTW9udGgobW9udGgpIHtcclxuICBzd2l0Y2ggKG1vbnRoKSB7XHJcbiAgICBjYXNlIFwiMDFcIjpcclxuICAgICAgcmV0dXJuIFwi4Lih4LiB4Lij4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIwMlwiOlxyXG4gICAgICByZXR1cm4gXCLguIHguLjguKHguKDguLLguJ7guLHguJnguJjguYxcIlxyXG4gICAgY2FzZSBcIjAzXCI6XHJcbiAgICAgIHJldHVybiBcIuC4oeC4teC4meC4suC4hOC4oVwiXHJcbiAgICBjYXNlIFwiMDRcIjpcclxuICAgICAgcmV0dXJuIFwi4LmA4Lih4Lip4Liy4Lii4LiZXCJcclxuICAgIGNhc2UgXCIwNVwiOlxyXG4gICAgICByZXR1cm4gXCLguJ7guKTguKnguKDguLLguITguKFcIlxyXG4gICAgY2FzZSBcIjA2XCI6XHJcbiAgICAgIHJldHVybiBcIuC4oeC4tOC4luC4uOC4meC4suC4ouC4mVwiXHJcbiAgICBjYXNlIFwiMDdcIjpcclxuICAgICAgcmV0dXJuIFwi4LiB4Lij4LiB4LiO4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIwOFwiOlxyXG4gICAgICByZXR1cm4gXCLguKrguLTguIfguKvguLLguITguKFcIlxyXG4gICAgY2FzZSBcIjA5XCI6XHJcbiAgICAgIHJldHVybiBcIuC4geC4seC4meC4ouC4suC4ouC4mVwiXHJcbiAgICBjYXNlIFwiMTBcIjpcclxuICAgICAgcmV0dXJuIFwi4LiV4Li44Lil4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIxMVwiOlxyXG4gICAgICByZXR1cm4gXCLguJ7guKTguKjguIjguLTguIHguLLguKLguJlcIlxyXG4gICAgY2FzZSBcIjEyXCI6XHJcbiAgICAgIHJldHVybiBcIuC4mOC4seC4meC4p+C4suC4hOC4oVwiXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gXCJOQU5cIlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREYXRldG9BZGREQihkYXRlKSB7XHJcbiAgdmFyIGRhdGVTcGxpdCA9IGRhdGUuc3BsaXQoXCIgXCIpO1xyXG4gIHJldHVybiBkYXRlU3BsaXRbMF0gKyBcIlRcIiArIGRhdGVTcGxpdFsxXSArIFwiKzAwOjAwXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJUEFkZHJlc3MoKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2dlb2xvY2F0aW9uLWRiLmNvbS9qc29uLycpXHJcbiAgLy8gY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gIC8vIHJldHVybiByZXMuZGF0YVxyXG4gIHJldHVybiBcImNvdW50cnlfY29kZTpcIiArIHJlcy5kYXRhLmNvdW50cnlfY29kZSArIFwiLGNvdW50cnlfbmFtZTpcIiArIHJlcy5kYXRhLmNvdW50cnlfbmFtZSArIFwiLGNpdHk6XCIgKyByZXMuZGF0YS5jaXR5ICsgXCIscG9zdGFsOlwiICsgcmVzLmRhdGEucG9zdGFsXHJcbiAgICArIFwiLGxhdGl0dWRlOlwiICsgcmVzLmRhdGEubGF0aXR1ZGUgKyBcIixsb25naXR1ZGU6XCIgKyByZXMuZGF0YS5sb25naXR1ZGUgKyBcIixJUHY0OlwiICsgcmVzLmRhdGEuSVB2NCArIFwiLHN0YXRlOlwiICsgcmVzLmRhdGEuc3RhdGVcclxuICAvLyBzZXRJUChyZXMuZGF0YS5JUHY0KVxyXG4gIC8vIHJldHVyblxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBieXRlc1RvU2l6ZShieXRlcykge1xyXG4gIHZhciBzaXplcyA9IFsnQnl0ZXMnLCAnS0InLCAnTUInLCAnR0InLCAnVEInXTtcclxuICBpZiAoYnl0ZXMgPT0gMCkgcmV0dXJuICcwIEJ5dGUnO1xyXG4gIHZhciBpID0gcGFyc2VJbnQoTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZygxMDI0KSkpO1xyXG4gIHJldHVybiBNYXRoLnJvdW5kKGJ5dGVzIC8gTWF0aC5wb3coMTAyNCwgaSksIDIpICsgJyAnICsgc2l6ZXNbaV07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnl0ZXNUb01CKGJ5dGVzKSB7XHJcbiAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KGJ5dGVzIC8gKDEwMjQgKiAxMDI0KSkudG9GaXhlZCgyKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRlZGlmZihzdGFydERhdGUpIHtcclxuXHJcbiAgY29uc3QgdGltZUVuZCA9IG1vbWVudCgpO1xyXG4gIGNvbnN0IG5ld1N0YXJ0RGF0ZSA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XHJcbiAgY29uc3QgbmV3RW5kRGF0ZSA9IG5ldyBEYXRlKHRpbWVFbmQpO1xyXG4gIGNvbnN0IG9uZV9kYXkgPSAxMDAwICogNjAgKiA2MCAqIDI0O1xyXG4gIGxldCByZXN1bHRcclxuICByZXN1bHQgPSBNYXRoLmNlaWwoKG5ld1N0YXJ0RGF0ZS5nZXRUaW1lKCkgLSBuZXdFbmREYXRlLmdldFRpbWUoKSkgLyAob25lX2RheSkpXHJcbiAgY29uc29sZS5sb2coJ2RhdGUgQ29udmVydGVyIHJlc3VsdCcsIHJlc3VsdClcclxuXHJcblxyXG4gIHJldHVybiByZXN1bHQgLSAxO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnREYXRlKHNlcGFyYXRvciA9ICcnKSB7XHJcblxyXG4gIGxldCBuZXdEYXRlID0gbmV3IERhdGUoKVxyXG4gIGxldCBkYXRlID0gbmV3RGF0ZS5nZXREYXRlKCk7XHJcbiAgbGV0IG1vbnRoID0gbmV3RGF0ZS5nZXRNb250aCgpICsgMTtcclxuICBsZXQgeWVhciA9IG5ld0RhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgcmV0dXJuIGAke3llYXJ9JHtzZXBhcmF0b3J9JHttb250aCA8IDEwID8gYDAke21vbnRofWAgOiBgJHttb250aH1gfSR7c2VwYXJhdG9yfSR7ZGF0ZX1gXHJcbn1cclxuIiwiZGVjbGFyZSBjb25zdCBfX05FWFRfREFUQV9fOiBhbnlcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCByZXNvbHZlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQcmVmZXRjaE9wdGlvbnMgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG5mdW5jdGlvbiBpc0xvY2FsKGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB1cmwgPSBwYXJzZShocmVmLCBmYWxzZSwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gcGFyc2UoZ2V0TG9jYXRpb25PcmlnaW4oKSwgZmFsc2UsIHRydWUpXG5cbiAgcmV0dXJuIChcbiAgICAhdXJsLmhvc3QgfHwgKHVybC5wcm90b2NvbCA9PT0gb3JpZ2luLnByb3RvY29sICYmIHVybC5ob3N0ID09PSBvcmlnaW4uaG9zdClcbiAgKVxufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBGb3JtYXRSZXN1bHQgPSB7IGhyZWY6IHN0cmluZzsgYXM/OiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jOiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4gRm9ybWF0UmVzdWx0KSB7XG4gIGxldCBsYXN0SHJlZjogbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RBczogdW5kZWZpbmVkIHwgbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RSZXN1bHQ6IG51bGwgfCBGb3JtYXRSZXN1bHQgPSBudWxsXG4gIHJldHVybiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4ge1xuICAgIGlmIChsYXN0UmVzdWx0ICYmIGhyZWYgPT09IGxhc3RIcmVmICYmIGFzID09PSBsYXN0QXMpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gZm9ybWF0RnVuYyhocmVmLCBhcylcbiAgICBsYXN0SHJlZiA9IGhyZWZcbiAgICBsYXN0QXMgPSBhc1xuICAgIGxhc3RSZXN1bHQgPSByZXN1bHRcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0VXJsKHVybDogVXJsKTogc3RyaW5nIHtcbiAgcmV0dXJuIHVybCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCkgOiB1cmxcbn1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChvYnNlcnZlcikge1xuICAgIHJldHVybiBvYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBDb21wb25lbnQ8TGlua1Byb3BzPiB7XG4gIHA6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogTGlua1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuICB9XG5cbiAgY2xlYW5VcExpc3RlbmVycyA9ICgpID0+IHt9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcbiAgfVxuXG4gIGdldFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBjb25zdCB7IGhyZWY6IHBhcnNlZEhyZWYsIGFzOiBwYXJzZWRBcyB9ID0gdGhpcy5mb3JtYXRVcmxzKFxuICAgICAgdGhpcy5wcm9wcy5ocmVmLFxuICAgICAgdGhpcy5wcm9wcy5hc1xuICAgIClcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRIcmVmKVxuICAgIHJldHVybiBbcmVzb2x2ZWRIcmVmLCBwYXJzZWRBcyA/IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEFzKSA6IHJlc29sdmVkSHJlZl1cbiAgfVxuXG4gIGhhbmRsZVJlZihyZWY6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIHJlZiAmJiByZWYudGFnTmFtZSkge1xuICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcblxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgICAgcHJlZmV0Y2hlZFtcbiAgICAgICAgICB0aGlzLmdldFBhdGhzKCkuam9pbihcbiAgICAgICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycyA9IGxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnByZWZldGNoKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbiAgLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG4gIGZvcm1hdFVybHMgPSBtZW1vaXplZEZvcm1hdFVybCgoaHJlZiwgYXNIcmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IGFkZEJhc2VQYXRoKGZvcm1hdFVybChocmVmKSksXG4gICAgICBhczogYXNIcmVmID8gYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGFzSHJlZikpIDogYXNIcmVmLFxuICAgIH1cbiAgfSlcblxuICBsaW5rQ2xpY2tlZCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgICBpZiAoXG4gICAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICAgIGUubWV0YUtleSB8fFxuICAgICAgICBlLmN0cmxLZXkgfHxcbiAgICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgICApIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuXG4gICAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBocmVmID0gcmVzb2x2ZShwYXRobmFtZSwgaHJlZilcbiAgICBhcyA9IGFzID8gcmVzb2x2ZShwYXRobmFtZSwgYXMpIDogaHJlZlxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBsZXQgeyBzY3JvbGwgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgICB9XG5cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICBSb3V0ZXJbdGhpcy5wcm9wcy5yZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgc2hhbGxvdzogdGhpcy5wcm9wcy5zaGFsbG93LFxuICAgIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJlZmV0Y2gob3B0aW9ucz86IFByZWZldGNoT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmdldFBhdGhzKClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgUm91dGVyLnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8gMF0sIHBhdGhzWy8qIGFzUGF0aCAqLyAxXSwgb3B0aW9ucykuY2F0Y2goXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgIHRocm93IGVyclxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICAgIHByZWZldGNoZWRbXG4gICAgICBwYXRocy5qb2luKFxuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAnJSdcbiAgICAgIClcbiAgICBdID0gdHJ1ZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICAgIH1cblxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICAgIGNvbnN0IHByb3BzOiB7XG4gICAgICBvbk1vdXNlRW50ZXI6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgaHJlZj86IHN0cmluZ1xuICAgICAgcmVmPzogYW55XG4gICAgfSA9IHtcbiAgICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWYoZWwpXG5cbiAgICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91c2VFbnRlcjogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZWZldGNoKHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICAgIH0sXG4gICAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLmxpbmtDbGlja2VkKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5wYXNzSHJlZiB8fFxuICAgICAgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpXG4gICAgKSB7XG4gICAgICBwcm9wcy5ocmVmID0gYXMgfHwgaHJlZlxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmhyZWYgJiZcbiAgICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICAgKSB7XG4gICAgICAgIHByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKVxuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgOiBwYXRoXG59XG5cbmZ1bmN0aW9uIHRvUm91dGUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLydcbn1cblxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGg6IHN0cmluZykgPT5cbiAgdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpXG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5IHwgbnVsbCxcbiAgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4sXG4gIGNiPzogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4pIHtcbiAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMVxuICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBmZXRjaChcbiAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmBcbiAgICAgICAgKSxcbiAgICAgICAgcXVlcnksXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICB9XG4gICAgKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgIC8vIGxvb3AuXG4gICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAoXG4gICAgICBlLnN0YXRlICYmXG4gICAgICB0aGlzLmlzU3NyICYmXG4gICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgcGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICBfdXJsOiBVcmwsXG4gICAgX2FzOiBVcmwsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgICB9XG4gICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICBpZiAoU1QpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsXG4gICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXNcblxuICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKVxuICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcylcblxuICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpXG5cbiAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcylcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSBwYXJzZSh1cmwsIHRydWUpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZShhcylcbiAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4oXG4gICAgICAgIChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpXG4gICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChcbiAgICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICAgICkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXNcbiAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIH0gYXMgYW55KS50aGVuKFxuICAgICAgICAgICAgICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoZ2lwRXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsXG4gICAgICAgICAgICAgICAgICAgICAgZ2lwRXJyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpXG4gICAgICAgIClcbiAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgIH1cblxuICAgIHJldHVybiAobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgIChyZXMpID0+XG4gICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pLFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz4pXG4gICAgICAudGhlbigocm91dGVJbmZvOiBSb3V0ZUluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICAgIClcbiAgICAgICAgKS50aGVuKChwcm9wcykgPT4ge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpXG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybClcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG4gICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGFyc2UoYXNQYXRoKS5wYXRobmFtZSEpXG5cbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgIDogZmV0Y2hOZXh0RGF0YShcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuaXNTc3IsXG4gICAgICAgICAgKGRhdGEpID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKVxuICAgICAgICApXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZShhc1BhdGgsIHRydWUpXG4gICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUhKVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJylcbiAgICAgIDsoZSBhcyBhbnkpLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfVxufSB7XG4gIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG5cbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAoXywgJDEpID0+IHtcbiAgICAgIGNvbnN0IGlzT3B0aW9uYWwgPSAvXlxcXFxcXFsuKlxcXFxcXF0kLy50ZXN0KCQxKVxuICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSgyLCAtMilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgIGlmIChpc0NhdGNoQWxsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoNilcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1tcbiAgICAgICAgJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9XG4gICAgICByZXR1cm4gaXNDYXRjaEFsbCA/IChpc09wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgfVxuICApXG5cbiAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgICAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG5cbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksXG4gICAgZ3JvdXBzLFxuICAgIG5hbWVkUmVnZXg6IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICA/IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYFxuICAgICAgOiB1bmRlZmluZWQsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvcm1hdCwgVVJMRm9ybWF0T3B0aW9ucywgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBzdGF0aWNNYXJrdXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkZXZGaWxlczogc3RyaW5nW11cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGxvd1ByaW9yaXR5RmlsZXM6IHN0cmluZ1tdXG4gIHBvbHlmaWxsRmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaHRtbFByb3BzOiBhbnlcbiAgYm9keVRhZ3M6IGFueVtdXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICB1cmw6IFVybE9iamVjdCxcbiAgb3B0aW9ucz86IFVSTEZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXQodXJsIGFzIFVSTCwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcclxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcclxuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xyXG4gICAgXCJkZWZhdWx0XCI6IG9ialxyXG4gIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcclxuXHJcbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcclxuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XHJcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcclxuXHJcbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xyXG4gICAgcmV0dXJuIGNhY2hlO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBjYWNoZTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XHJcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcblxyXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgXCJkZWZhdWx0XCI6IG9ialxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xyXG5cclxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcclxuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcclxuICB9XHJcblxyXG4gIHZhciBuZXdPYmogPSB7fTtcclxuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XHJcblxyXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XHJcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xyXG5cclxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcclxuXHJcbiAgaWYgKGNhY2hlKSB7XHJcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ld09iajtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xyXG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcclxuXHJcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xyXG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcclxuICAgIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XHJcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQge1xyXG4gICAgYWJzb2x1dGVVcmwsXHJcbiAgICBjaGVja0lzTG9naW4sXHJcbiAgICBhcGlJbnN0YW5jZVxyXG59IGZyb20gJy4uLy4uL21pZGRsZXdhcmUvdXRpbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZyh1c2VyKSB7XHJcblxyXG4gICAgcmV0dXJuICh7XHJcbiAgICAgICAgaGVpZ2h0OiBcIjYwMHB4XCIsXHJcbiAgICAgICAgcmVhZG9ubHk6IGZhbHNlLCAvLyBhbGwgb3B0aW9ucyBmcm9tIGh0dHBzOi8veGRzb2Z0Lm5ldC9qb2RpdC9kb2MvXHJcbiAgICAgICAgdXBsb2FkZXI6IHtcclxuICAgICAgICAgICAgdXJsOiBcIi9hcGkvdXBsb2FkXCIsXHJcbiAgICAgICAgICAgIGluc2VydEltYWdlQXNCYXNlNjRVUkk6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImltYWdlc0V4dGVuc2lvbnNcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJqcGdcIixcclxuICAgICAgICAgICAgICAgIFwicG5nXCIsXHJcbiAgICAgICAgICAgICAgICBcImpwZWdcIixcclxuICAgICAgICAgICAgICAgIFwiZ2lmXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcHJlcGFyZURhdGE6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlci50eXBlX3VzZXIgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdpZCcsIFwiYWRtaW5cIik7IC8vIFxyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2lkJywgdXNlci5vcmdhbml6YXRpb25faWQpOyAvLyBcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlZmF1bHRIYW5kbGVyU3VjY2VzczogZnVuY3Rpb24gKGRhdGEsIHJlc3ApIHtcclxuICAgICAgICAgICAgICAgIHZhciBpLCBmaWVsZCA9IHRoaXMub3B0aW9ucy51cGxvYWRlci5maWxlc1ZhcmlhYmxlTmFtZTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSBcImZpbGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzcyBmaWxlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dEhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh0ZW5zaW9uID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBlbGVtZW50Lm5hbWUubGFzdEluZGV4T2YoJy4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRlbnNpb24gPSBlbGVtZW50Lm5hbWUuc3Vic3RyaW5nKGkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3BhdGggPSBlbGVtZW50LnBhdGgucmVwbGFjZShcInB1YmxpY1wiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4dGVuc2lvbiA9PSBcImpwZ1wiIHx8IGV4dGVuc2lvbiA9PSBcInBuZ1wiIHx8IGV4dGVuc2lvbiA9PSBcImpwZWdcIiB8fCBleHRlbnNpb24gPT0gXCJnaWZcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy95b3VyIGNvZGVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0SFRNTCArPSAnPGltZyBzcmM9XCInICsgX3BhdGggKyAnXCIvPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0SFRNTCArPSAnPGEgY2xhc3M9XCJmaWxlLWF0dGFjaFwiIGhyZWY9XCInICsgX3BhdGggKyAnXCI+JyArIGVsZW1lbnQubmFtZSArICc8L2E+PC9icj4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5pbnNlcnRIVE1MKHRleHRIVE1MKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNzIGltYWdlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5maWxlc1swXSlcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dEhUTUwgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoZGF0YS5maWxlcyAmJiBkYXRhLmZpbGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgLy8gZm9yIChpID0gMDsgaSA8IGRhdGEuZmlsZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIC8vIHRleHRIVE1MICs9ICc8aW1nIHNyYz1cIicgKyBkYXRhLmJhc2V1cmwgKyBkYXRhLmZpbGVzW2ldICsgJ1wiLz4nXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAvLyBjb25zb2xlLmxvZyggZGF0YS5maWxlc1tpXSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICB0aGlzLnNlbGVjdGlvbi5pbnNlcnRJbWFnZShkYXRhLmZpbGVzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIHRoaXMuc2VsZWN0aW9uLmluc2VydEhUTUwoXCI8L2JyPlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2VsZWN0aW9uLmluc2VydEhUTUwodGV4dEhUTUwpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBwYXJlbnQuc2VsZWN0aW9uLmluc2VydEhUTUwoJzxpbWcgc3JjPVwiaW1hZ2UucG5nXCIvPicpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gZmlsZWJyb3dzZXI6IHtcclxuICAgICAgICAvLyAgIGFqYXg6IHtcclxuICAgICAgICAvLyAgICAgdXJsOiBcIi9wdWJsaWMvdXBsb2Fkcy9jLWFkbWluL1wiLFxyXG4gICAgICAgIC8vICAgfSxcclxuICAgICAgICAvLyAgIHVwbG9hZGVyOiB7XHJcbiAgICAgICAgLy8gICAgICB1cmw6XCIvYXBpL3VwbG9hZFwiXHJcbiAgICAgICAgLy8gICB9LFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICB9KTtcclxufSIsImltcG9ydCB7IElucHV0LCBub3RpZmljYXRpb24sIFJhZGlvLCBUeXBvZ3JhcGh5IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuLy8gaW1wb3J0IFVzZXJOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL1VzZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuLyogY29tcG9uZW50cyAqL1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dEFkbWluJztcclxuLyogdXRpbHMgKi9cclxuaW1wb3J0IHtcclxuICBhYnNvbHV0ZVVybCwgYXBpSW5zdGFuY2VcclxufSBmcm9tICcuLi8uLi8uLi8uLi9taWRkbGV3YXJlL3V0aWxzJztcclxuXHJcblxyXG5jb25zdCBKb2RpdEVkaXRvciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiam9kaXQtcmVhY3RcIiksIHsgc3NyOiBmYWxzZSB9KTtcclxuY29uc3QgeyBUZXh0LCBUaXRsZSB9ID0gVHlwb2dyYXBoeTtcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuLy4uLy4uL2NvbmZpZycpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFthcGksIGNvbnRleHRIb2xkZXJdID0gbm90aWZpY2F0aW9uLnVzZU5vdGlmaWNhdGlvbigpO1xyXG4gIGNvbnN0IHsgdXNlciwgb3JpZ2luIH0gPSBwcm9wcztcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbaG9saWRheURhdGEsIHNldEhvbGlkYXlEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt2YWx1ZWEsIHNldFZhbHVlYV0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbdmFsdWViLCBzZXRWYWx1ZWJdID0gUmVhY3QudXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW29yZ2FuaXphdGlvbkRhdGEsIHNldE9yZ2FuaXphdGlvbkRhdGFdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gb25DaGFuZ2VhKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKCdyYWRpbyBjaGVja2VkJywgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0VmFsdWVhKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIG9yZ2FuaXphdGlvbl9pZDogdXNlci5vcmdhbml6YXRpb25faWQsXHJcbiAgICAgIGlzX3VzZV9pbnRybzogZS50YXJnZXQudmFsdWUsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgaG9saWRheURhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLnB1dChcclxuICAgICAgJy9nZW5lcmFsJywgZGF0YSxcclxuICAgICk7XHJcbiAgICBpZiAoaG9saWRheURhdGEuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgIG9wZW5Ob3RpZmljYXRpb25SZWdpc3RlclN1Y2Nlc3MoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9wZW5Ob3RpZmljYXRpb25SZWdpc3RlckZhaWwoaG9saWRheURhdGEuZGF0YS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaE9yZ2FuaXphdGlvbkRhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG9uQ2hhbmdlYihlKSB7XHJcbiAgICBzZXRWYWx1ZWIoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgb3JnYW5pemF0aW9uX2lkOiB1c2VyLm9yZ2FuaXphdGlvbl9pZCxcclxuICAgICAgaXNfcG9sbF9jb25maXJtOiBlLnRhcmdldC52YWx1ZSxcclxuICAgIH07XHJcbiAgICBjb25zdCBob2xpZGF5RGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkucHV0KFxyXG4gICAgICAnL2dlbmVyYWwnLCBkYXRhLFxyXG4gICAgKTtcclxuICAgIGlmIChob2xpZGF5RGF0YS5kYXRhLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyU3VjY2VzcygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbChob2xpZGF5RGF0YS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyU3VjY2VzcyA9ICgpID0+IHtcclxuICAgIGFwaS5zdWNjZXNzKHtcclxuICAgICAgbWVzc2FnZTogYOC4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iGAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAn4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIJyxcclxuICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvblJlZ2lzdGVyRmFpbCA9IG1lc3NnYWUgPT4ge1xyXG4gICAgYXBpLmVycm9yKHtcclxuICAgICAgbWVzc2FnZTogYOC4nuC4muC4m+C4seC4jeC4q+C4suC4o+C4sOC4q+C4p+C5iOC4suC4h+C4geC4suC4o+C4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4pWAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBtZXNzZ2FlLFxyXG4gICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICB9KTtcclxuXHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0IGZldGNoT3JnYW5pemF0aW9uRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IF9vcmdhbml6YXRpb25EYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICdvcmdhbml6YXRpb24vJyArICh1c2VyID8gdXNlci5vcmdhbml6YXRpb25faWQgOiAwKVxyXG4gICAgKTtcclxuICAgIC8vIHNldFZhbHVlYShfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5pc191c2VfaW50cm8pO1xyXG4gICAgY29uc29sZS5sb2coJ19vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLmlzX3VzZV9pbnRybycpXHJcbiAgICBjb25zb2xlLmxvZyhfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5pc191c2VfaW50cm8pXHJcbiAgICBzZXRWYWx1ZWEoX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24uaXNfdXNlX2ludHJvKTtcclxuICAgIHNldFZhbHVlYihfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5pc19wb2xsX2NvbmZpcm0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0XHJcbiAgICAgIHRpdGxlPVwiR292ZXJubWVudCAtIEFkbWluIG1hbmFnZW1lbnRcIlxyXG4gICAgICB1cmw9e29yaWdpbn1cclxuICAgICAgb3JpZ2luPXtvcmlnaW59XHJcbiAgICAgIC8vIHVzZXI9e2xvZ2lufVxyXG4gICAgICBpbmRleFN1Yk1lbnU9e1wiMVwifVxyXG4gICAgICBpbmRleE1lbnU9e1wic3ViLTYtM1wifVxyXG4gICAgICB0aXRsZVBhZ2U9XCLguIjguLHguJTguIHguLLguKPguK3guLfguYjguJnguYZcIlxyXG4gICAgICBfcm91dGVzPXtbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGF0aDogJy9hZG1pbi9kYXNoYm9yYWQnLFxyXG4gICAgICAgICAgYnJlYWRjcnVtYk5hbWU6ICfguKvguJnguYnguLLguKvguKXguLHguIEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGF0aDogJy9hZG1pbi9zZXR0aW5nL2dlbmVyYWwnLFxyXG4gICAgICAgICAgYnJlYWRjcnVtYk5hbWU6ICfguIjguLHguJTguIHguLLguKPguK3guLfguYjguJnguYYnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF19XHJcbiAgICA+XHJcbiAgICAgIHtjb250ZXh0SG9sZGVyfVxyXG4gICAgICA8bGlua1xyXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9yZWFjdC1xdWlsbEAxLjMuMy9kaXN0L3F1aWxsLnNub3cuY3NzXCJcclxuICAgICAgPjwvbGluaz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgbGVhZGluZy0zXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IG15LTJcIj7guKPguLDguJrguJrguYHguKrguJTguIfguKfguLHguJnguKvguKLguLjguJTguJ7guLTguYDguKjguKnguK3guLHguJXguYLguJnguKHguLHguJXguLQgOlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBvbkNoYW5nZT17b25DaGFuZ2VhfSB2YWx1ZT17dmFsdWVhfT5cclxuICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9ezF9PuC5g+C4iuC5iTwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPXswfT7guYTguKHguYjguYPguIrguYk8L1JhZGlvPlxyXG4gICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT17Mn0+4LiB4Liz4Lir4LiZ4LiU4LmA4Lit4LiHPC9SYWRpbz5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCBtYi0zXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxnOm1yLTFcIj5cclxuICAgICAgICAgICAgICDguYDguIrguYjguJkg4Lin4Lix4LiZ4LmB4Lih4LmIIOC4p+C4seC4meC4m+C4tOC4ouC4sOC4oeC4q+C4suC4o+C4suC4iiDguYDguJvguYfguJnguJXguYnguJlcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdW5kZXJsaW5lXCI+XHJcbiAgICAgICAgICAgICAg4Lir4Lih4Liy4Lii4LmA4Lir4LiV4Li4XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGc6bXgtMVwiPlxyXG4gICAgICAgICAgICAgIOC4q+C4suC4geC5gOC4peC4t+C4reC4gVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgIOC4geC4s+C4q+C4meC4lOC5gOC4reC4h1xyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxnOm14LTFcIj5cclxuICAgICAgICAgICAgICDguJXguYnguK3guIfguJfguLPguIHguLLguKPguJrguLHguJnguJfguLbguIHguIHguYjguK3guJnguJbguLbguIfguIjguLDguKrguLLguKHguLLguKPguJbguIjguLHguIHguIHguLLguKPguKfguLHguJnguKvguKLguLjguJTguJ7guLTguYDguKjguKnguYTguJTguYlcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTJcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbi9zZXR0aW5nL2dlbmVyYWwvbWFuYWdlbWVudC1ob2xpZGF5XCI+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHRleHQtY2VudGVyIGxnOnctYXV0byB3LWZ1bGwgcHgtMiBweS0yIHJvdW5kZWQgaC04IHRleHQtd2hpdGUgYmctZ3JlZW4tNjAwIGZvbnQtYm9sZCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaG92ZXI6YmctZ3JlZW4tNjAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIOC4iOC4seC4lOC4geC4suC4o+C4p+C4seC4meC4q+C4ouC4uOC4lOC4nuC4tOC5gOC4qOC4qVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTJcIj5cclxuICAgICAgICAgICAgPHA+4Lii4Li34LiZ4Lii4Lix4LiZ4LiV4Lix4Lin4LiV4LiZ4LiB4LmI4Lit4LiZ4LmC4Lir4Lin4LiUIOC4nOC4peC4quC4s+C4o+C4p+C4iCA6IDxSYWRpby5Hcm91cCBvbkNoYW5nZT17b25DaGFuZ2VifSB2YWx1ZT17dmFsdWVifT5cclxuICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9ezF9PuC5g+C4iuC5iTwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPXswfT7guYTguKHguYjguYPguIrguYk8L1JhZGlvPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcbi8qIGdldFNlcnZlclNpZGVQcm9wcyAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHJlcSB9ID0gY29udGV4dDtcclxuICBjb25zdCB7IG9yaWdpbiB9ID0gYWJzb2x1dGVVcmwocmVxKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG9yaWdpbixcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpvZGl0LXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9