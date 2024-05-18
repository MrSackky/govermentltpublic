module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\admin\\management-menu\\secoundary-menu.js": 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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

/***/ "./components/managemnet/secondary-menu/add-menu-sub.jsx":
/*!***************************************************************!*\
  !*** ./components/managemnet/secondary-menu/add-menu-sub.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../middleware/utils */ "./middleware/utils.js");
var _jsxFileName = "D:\\govermentlt\\components\\managemnet\\secondary-menu\\add-menu-sub.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_3__["Select"];
const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_3__["Input"]; // const config = require('./../../config');

const config = __webpack_require__(/*! ../../../pages/admin/config */ "./pages/admin/config.js");


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
} = antd__WEBPACK_IMPORTED_MODULE_3__["Typography"];
function modal({
  _visible,
  hideModal,
  fetch,
  user,
  dataEdit
}) {
  let divRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const [api, contextHolder] = antd__WEBPACK_IMPORTED_MODULE_3__["notification"].useNotification(); // const [divRef] = useRef(null);

  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: patternMenuSelected,
    1: setPatternMenuSelected
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: patternMenu,
    1: setPatternMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const editor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    0: content,
    1: setContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: isSubMenu,
    1: setIsSubMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: isPatternMenu,
    1: setISPatternMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isShow,
    1: setIsShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [form] = antd__WEBPACK_IMPORTED_MODULE_3__["Form"].useForm();

  const actived = () => {
    active ? setActive(0) : setActive(1); // divRef.scrollIntoView({ behavior: "smooth" });
    // divRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchPattern();
  }, []);

  const fetchPattern = async () => {
    const menuData = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_4__["apiInstance"])().get('menu/pattern-menu');
    console.log(menuData);
    setPatternMenu(menuData.data.results);
  };

  const onSubmitHandler = async value => {
    // organization_id: organization_id,
    // menu_title: menu_title,
    // menu_detail: menu_detail,
    // menu_seq: menu_seq,
    // have_sub: have_sub,
    // is_show: is_show,
    // is_primary_menu: is_primary_menu,
    // is_pattern_menu: is_pattern_menu,
    // pattern_menu: pattern_menu,
    const data = {
      "menu_id": dataEdit.menu_id,
      "menu_title": value.menu_title,
      "menu_detail": content ? value.menu_detail : "",
      "menu_seq": 999999,
      "is_show": active ? 1 : 0,
      "is_pattern_menu": value.pattern_menu == 1 ? 0 : 1,
      "pattern_menu": patternMenuSelected
    };
    console.log(data);
    const registerData = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_4__["apiInstance"])().post('/menu/menu-sub', data);

    if (registerData.data.status == 200) {
      openNotificationSuccess();
    } else {
      openNotificationFail(registerData.data.message);
    }

    console.log("ON OK");
    hideModal();
    onReset();
    fetch();
  };

  const openNotificationSuccess = () => {
    api.success({
      message: `บันทึกมูลสำเร็จ`,
      description: 'บันทึกมูลสำเร็จ',
      placement: 'topRight'
    });
  };

  const openNotificationFail = messgae => {
    api.error({
      message: `พบปัญหาระหว่างการบันทึกข้อมูล`,
      description: messgae,
      placement: 'topRight'
    });
  };

  const onReset = () => {
    setActive(1);
    setIsSubMenu(0);
    setISPatternMenu(false);
    setPatternMenuSelected(1);
    setIsShow(true);
    form.resetFields();
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
    setPatternMenuSelected(value);

    if (!isSubMenu) {
      if (value != 1) {
        // setIsSubMenu(1)
        // setISPatternMenu(true)
        setIsShow(false);
      } else {
        // setIsSubMenu(0)
        // setISPatternMenu(false)
        setIsShow(true);
      }
    } // setMenu(value);

  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, contextHolder, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    title: "เพิ่มเมนูย่อยของเมนูรอง " + (!dataEdit ? "" : dataEdit.menu_title),
    className: "mt-4",
    centered: true,
    visible: _visible // onOk={() => onOK()}
    ,
    onCancel: () => {
      hideModal();
      setActive(1);
      setIsSubMenu(0);
      form.resetFields();
    },
    width: 1000,
    footer: null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    name: "basic",
    layout: "vertical",
    onFinish: onSubmitHandler,
    requiredMark: true,
    form: form,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "menu_title",
    label: "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E19\u0E39\u0E22\u0E48\u0E2D\u0E22",
    style: {
      float: "left"
    },
    className: "block text-gray-700 text-sm font-bold mb-2 w-2/3",
    rules: [{
      required: true,
      message: 'กรุณากรอกชื่อเมนูย่อย'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    id: "#",
    type: "text",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E19\u0E39\u0E22\u0E48\u0E2D\u0E22",
    className: "resize-none border rounded-md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 25
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    className: "flex mt-6 mb-0 w-1/3",
    style: {
      marginBottom: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "text-center lg:text-right w-full lg:w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 29
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    htmlType: "button",
    onClick: onReset,
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
      lineNumber: 184,
      columnNumber: 33
    }
  }, __jsx(Text, {
    className: "text-custom-black ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 37
    }
  }, "\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E17")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"] // type="primary"
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
      lineNumber: 201,
      columnNumber: 33
    }
  }, __jsx(Text, {
    className: "text-custom-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 37
    }
  }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "pattern_menu",
    label: "\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E40\u0E21\u0E19\u0E39\u0E22\u0E48\u0E2D\u0E22",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    defaultValue: 1,
    className: "w-full",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 25
    }
  }, patternMenu ? patternMenu.map(object => {
    return __jsx(Option, {
      value: object.pattern_menu_id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 40
      }
    }, object.pattern_title, "  ");
  }) : "")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    className: "flex mt-6 mb-0",
    style: {
      marginBottom: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "inline-flex text-left lg:w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 29
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 33
    }
  }, __jsx("li", {
    className: "inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 37
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
    checked: active,
    onClick: actived,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "mx-2 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 41
    }
  }, "\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25")))))), isShow == true && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "menu_detail",
    label: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14 :",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    visible: false,
    rules: [{
      required: true,
      message: 'กรุณากรอกรายละเอียด'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 25
    }
  }, __jsx(JoditEditor, {
    ref: editor,
    value: content,
    config: config.config(user),
    height: "700px",
    tabIndex: 1 // tabIndex of textarea
    ,
    onBlur: newContent => setContent(newContent) // preferred to use only this option to update the content for performance reasons
    ,
    onChange: newContent => {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 29
    }
  })))), __jsx("div", {
    style: {
      float: "left",
      clear: "both"
    },
    ref: divRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 17
    }
  })));
}

/***/ }),

/***/ "./components/managemnet/secondary-menu/add-menu.jsx":
/*!***********************************************************!*\
  !*** ./components/managemnet/secondary-menu/add-menu.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../middleware/utils */ "./middleware/utils.js");
var _jsxFileName = "D:\\govermentlt\\components\\managemnet\\secondary-menu\\add-menu.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_3__["Select"];
const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_3__["Input"]; // const config = require('./../../config');

const config = __webpack_require__(/*! ../../../pages/admin/config */ "./pages/admin/config.js");


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
} = antd__WEBPACK_IMPORTED_MODULE_3__["Typography"];
function modal({
  fetch,
  user
}) {
  let divRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const [api, contextHolder] = antd__WEBPACK_IMPORTED_MODULE_3__["notification"].useNotification(); // const [divRef] = useRef(null);

  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: patternMenuSelected,
    1: setPatternMenuSelected
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: patternMenu,
    1: setPatternMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const editor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    0: content,
    1: setContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: isSubMenu,
    1: setIsSubMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: isPatternMenu,
    1: setISPatternMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isShow,
    1: setIsShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [form] = antd__WEBPACK_IMPORTED_MODULE_3__["Form"].useForm();

  const actived = () => {
    active ? setActive(0) : setActive(1); // divRef.scrollIntoView({ behavior: "smooth" });
    // divRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchPattern();
  }, []);

  const fetchPattern = async () => {
    const menuData = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_4__["apiInstance"])().get('menu/pattern-menu');
    console.log(menuData);
    setPatternMenu(menuData.data.results);
  };

  const onSubmitHandler = async value => {
    // organization_id: organization_id,
    // menu_title: menu_title,
    // menu_detail: menu_detail,
    // menu_seq: menu_seq,
    // have_sub: have_sub,
    // is_show: is_show,
    // is_primary_menu: is_primary_menu,
    // is_pattern_menu: is_pattern_menu,
    // pattern_menu: pattern_menu,
    const data = {
      "organization_id": user.organization_id,
      "menu_title": value.menu_title,
      "menu_detail": content ? value.menu_detail : "",
      "menu_seq": 999999,
      "have_sub": isSubMenu ? 1 : 0,
      "is_show": active ? 1 : 0,
      "is_primary_menu": 0,
      "is_pattern_menu": value.pattern_menu == 1 ? 0 : 1,
      "pattern_menu": patternMenuSelected
    };
    console.log(data);
    const registerData = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_4__["apiInstance"])().post('/menu', data);

    if (registerData.data.status == 200) {
      openNotificationSuccess();
    } else {
      openNotificationFail(registerData.data.message);
    }

    console.log("ON OK");
    setVisible(false);
    onReset();
    fetch();
  };

  const openNotificationSuccess = () => {
    api.success({
      message: `บันทึกมูลสำเร็จ`,
      description: 'บันทึกมูลสำเร็จ',
      placement: 'topRight'
    });
  };

  const openNotificationFail = messgae => {
    api.error({
      message: `พบปัญหาระหว่างการบันทึกข้อมูล`,
      description: messgae,
      placement: 'topRight'
    });
  };

  const onReset = () => {
    setActive(1);
    setIsSubMenu(0);
    setISPatternMenu(false);
    setPatternMenuSelected(1);
    setIsShow(true);
    form.resetFields();
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
    setPatternMenuSelected(value);

    if (!isSubMenu) {
      if (value != 1) {
        // setIsSubMenu(1)
        // setISPatternMenu(true)
        setIsShow(false);
      } else {
        // setIsSubMenu(0)
        // setISPatternMenu(false)
        setIsShow(true);
      }
    } // setMenu(value);

  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("a", {
    onClick: () => setVisible(true),
    className: "ml-4 lg:inline-flex lg:w-auto w-full px-2 py-2 rounded h-8 text-white bg-green-600 font-bold items-center justify-center hover:bg-green-600 hover:text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E21\u0E19\u0E39\u0E23\u0E2D\u0E07"), contextHolder, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    title: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E21\u0E19\u0E39\u0E23\u0E2D\u0E07",
    className: "mt-4",
    centered: true,
    visible: visible // onOk={() => onOK()}
    ,
    onCancel: () => {
      setVisible(false);
      setActive(1);
      setIsSubMenu(0);
      form.resetFields();
    },
    width: 1000,
    footer: null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    name: "basic",
    layout: "vertical",
    onFinish: onSubmitHandler,
    requiredMark: true,
    form: form,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "menu_title",
    label: "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E19\u0E39\u0E23\u0E2D\u0E07",
    style: {
      float: "left"
    },
    className: "block text-gray-700 text-sm font-bold mb-2 w-2/3",
    rules: [{
      required: true,
      message: 'กรุณากรอกชื่อเมนูรอง'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    id: "#",
    type: "text",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E19\u0E39\u0E23\u0E2D\u0E07",
    className: "resize-none border rounded-md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 25
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    className: "flex mt-6 mb-0 w-1/3",
    style: {
      marginBottom: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "text-center lg:text-right w-full lg:w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 29
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    htmlType: "button",
    onClick: onReset,
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
      lineNumber: 189,
      columnNumber: 33
    }
  }, __jsx(Text, {
    className: "text-custom-black ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 37
    }
  }, "\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E17")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"] // type="primary"
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
      lineNumber: 206,
      columnNumber: 33
    }
  }, __jsx(Text, {
    className: "text-custom-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 37
    }
  }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "pattern_menu",
    label: "\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E40\u0E21\u0E19\u0E39\u0E23\u0E2D\u0E07",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    defaultValue: 1,
    className: "w-full",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 25
    }
  }, patternMenu ? patternMenu.map(object => {
    return __jsx(Option, {
      value: object.pattern_menu_id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 40
      }
    }, object.pattern_title, "  ");
  }) : "")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    className: "flex mt-6 mb-0",
    style: {
      marginBottom: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "inline-flex text-left lg:w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 29
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 33
    }
  }, __jsx("li", {
    className: "inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 37
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
    checked: active,
    onClick: actived,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "mx-2 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 41
    }
  }, "\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25")), __jsx("li", {
    className: "inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 37
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
    checked: isSubMenu,
    onClick: value => {
      setIsSubMenu(value ? 1 : 0);

      if (patternMenuSelected == 1) {
        setIsShow(value ? false : true);
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "mx-2 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 41
    }
  }, "\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07 \u0E40\u0E21\u0E19\u0E39\u0E22\u0E48\u0E2D\u0E22")))))), isShow == true && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "menu_detail",
    label: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14 :",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    visible: false,
    rules: [{
      required: true,
      message: 'กรุณากรอกรายละเอียด'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 25
    }
  }, __jsx(JoditEditor, {
    ref: editor,
    value: content,
    config: config.config(user),
    height: "700px",
    tabIndex: 1 // tabIndex of textarea
    ,
    onBlur: newContent => setContent(newContent) // preferred to use only this option to update the content for performance reasons
    ,
    onChange: newContent => {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 29
    }
  })))), __jsx("div", {
    style: {
      float: "left",
      clear: "both"
    },
    ref: divRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 17
    }
  })));
}

/***/ }),

/***/ "./components/managemnet/secondary-menu/edit-menu-sub.jsx":
/*!****************************************************************!*\
  !*** ./components/managemnet/secondary-menu/edit-menu-sub.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../middleware/utils */ "./middleware/utils.js");
var _jsxFileName = "D:\\govermentlt\\components\\managemnet\\secondary-menu\\edit-menu-sub.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_3__["Select"];
const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_3__["Input"]; // const config = require('./../../config');

const config = __webpack_require__(/*! ../../../pages/admin/config */ "./pages/admin/config.js");


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
} = antd__WEBPACK_IMPORTED_MODULE_3__["Typography"];
function modal({
  _visible,
  hideModal,
  fetch,
  user,
  dataEdit
}) {
  let divRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const [api, contextHolder] = antd__WEBPACK_IMPORTED_MODULE_3__["notification"].useNotification(); // const [divRef] = useRef(null);

  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: patternMenuSelected,
    1: setPatternMenuSelected
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: patternMenu,
    1: setPatternMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const editor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    0: content,
    1: setContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: isSubMenu,
    1: setIsSubMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: isShow,
    1: setIsShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: fields,
    1: setFields
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    name: ['intro_title'],
    value: ''
  }]);
  const [form] = antd__WEBPACK_IMPORTED_MODULE_3__["Form"].useForm();

  const actived = () => {
    active ? setActive(0) : setActive(1); // divRef.scrollIntoView({ behavior: "smooth" });
    // divRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setVisible(_visible);
    fetchPattern();
    fetchEditData();
  }, [dataEdit]);

  const fetchPattern = async () => {
    const menuData = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_4__["apiInstance"])().get('menu/pattern-menu');
    console.log(menuData);
    setPatternMenu(menuData.data.results);
  };

  const fetchEditData = async () => {
    if (dataEdit) {
      setActive(dataEdit.is_show);
      setIsSubMenu(dataEdit.have_sub);
      console.log("dataEdit useEffect");
      setPatternMenuSelected(dataEdit.pattern_menu);

      if (dataEdit.pattern_menu != 1) {
        setIsShow(false);
      } else {
        setIsShow(true);
      }

      setFields([{
        name: ['menu_title'],
        value: !dataEdit ? "" : dataEdit.menu_title
      }, {
        name: ['pattern_menu'],
        value: !dataEdit ? "" : dataEdit.pattern_menu
      }, {
        name: ['menu_detail'],
        value: !dataEdit ? "" : dataEdit.menu_detail
      }]);
    }
  };

  const onSubmitHandler = async value => {
    // organization_id: organization_id,
    // menu_title: menu_title,
    // menu_detail: menu_detail,
    // menu_seq: menu_seq,
    // have_sub: have_sub,
    // is_show: is_show,
    // is_primary_menu: is_primary_menu,
    // is_pattern_menu: is_pattern_menu,
    // pattern_menu: pattern_menu,
    const data = {
      "menu_title": value.menu_title,
      "menu_detail": content ? value.menu_detail : "",
      // "menu_seq": 0,
      "is_show": active ? 1 : 0,
      "is_pattern_menu": value.pattern_menu == 1 ? 0 : 1,
      "pattern_menu": patternMenuSelected
    };
    console.log(data);
    const registerData = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_4__["apiInstance"])().put('/menu-sub/' + (dataEdit ? dataEdit.menu_sub_id : 0), data);

    if (registerData.data.status == 200) {
      openNotificationSuccess();
    } else {
      openNotificationFail(registerData.data.message);
    }

    console.log("ON OK"); // setVisible(false)
    // onReset()

    fetch();
  };

  const openNotificationSuccess = () => {
    api.success({
      message: `บันทึกมูลสำเร็จ`,
      description: 'บันทึกมูลสำเร็จ',
      placement: 'topRight'
    });
  };

  const openNotificationFail = messgae => {
    api.error({
      message: `พบปัญหาระหว่างการบันทึกข้อมูล`,
      description: messgae,
      placement: 'topRight'
    });
  };

  const onReset = () => {
    setActive(dataEdit.is_show);
    setIsSubMenu(dataEdit.have_sub);
    console.log("dataEdit useEffect");
    setPatternMenuSelected(dataEdit.pattern_menu);

    if (dataEdit.pattern_menu != 1) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }

    setFields([{
      name: ['menu_title'],
      value: !dataEdit ? "" : dataEdit.menu_title
    }, {
      name: ['pattern_menu'],
      value: !dataEdit ? "" : dataEdit.pattern_menu
    }, {
      name: ['menu_detail'],
      value: !dataEdit ? "" : dataEdit.menu_detail
    }]);
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
    setPatternMenuSelected(value);

    if (value != 1) {
      // setIsSubMenu(1)
      // setISPatternMenu(true)
      setIsShow(false);
    } else {
      // setIsSubMenu(0)
      // setISPatternMenu(false)
      setIsShow(true);
    } // setMenu(value);

  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, contextHolder, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    title: "แก้ไขเมนูย่อย " + (!dataEdit ? "" : dataEdit.menu_title),
    className: "mt-4",
    centered: true,
    visible: _visible // onOk={() => onOK()}
    ,
    onCancel: () => {
      hideModal();
      setActive(1);
      setIsSubMenu(0);
      form.resetFields();
    },
    width: 1000,
    footer: null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    name: "basic",
    layout: "vertical",
    onFinish: onSubmitHandler,
    requiredMark: true,
    form: form,
    fields: fields,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "menu_title",
    label: "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E19\u0E39\u0E22\u0E48\u0E2D\u0E22",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    rules: [{
      required: true,
      message: 'กรุณากรอกชื่อเมนูย่อย'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    id: "#",
    type: "text",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E19\u0E39",
    className: "resize-none border rounded-md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 25
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "pattern_menu",
    label: "\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E40\u0E21\u0E19\u0E39\u0E22\u0E48\u0E2D\u0E22",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    defaultValue: 1,
    className: "w-full",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 25
    }
  }, patternMenu ? patternMenu.map(object => {
    return __jsx(Option, {
      value: object.pattern_menu_id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 40
      }
    }, object.pattern_title, "  ");
  }) : "")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    className: "flex mt-6 mb-0",
    style: {
      marginBottom: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "inline-flex text-left lg:w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 29
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 33
    }
  }, __jsx("li", {
    className: "inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 37
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
    checked: active,
    onClick: actived,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "mx-2 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 41
    }
  }, "\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25")))))), isShow == true && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "menu_detail",
    label: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14 :",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    visible: false,
    rules: [{
      required: true,
      message: 'กรุณากรอกรายละเอียด'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 25
    }
  }, __jsx(JoditEditor, {
    ref: editor,
    value: content,
    config: config.config(user),
    height: "700px",
    tabIndex: 1 // tabIndex of textarea
    ,
    onBlur: newContent => setContent(newContent) // preferred to use only this option to update the content for performance reasons
    ,
    onChange: newContent => {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 29
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    className: "flex mt-6 mb-0",
    style: {
      marginBottom: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "text-center lg:text-right w-full lg:w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 29
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    htmlType: "button",
    onClick: onReset,
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
      lineNumber: 305,
      columnNumber: 33
    }
  }, __jsx(Text, {
    className: "text-custom-black ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 37
    }
  }, "\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E17")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"] // type="primary"
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
      lineNumber: 322,
      columnNumber: 33
    }
  }, __jsx(Text, {
    className: "text-custom-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 37
    }
  }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01")))))), __jsx("div", {
    style: {
      float: "left",
      clear: "both"
    },
    ref: divRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 17
    }
  })));
}

/***/ }),

/***/ "./components/managemnet/secondary-menu/edit-menu.jsx":
/*!************************************************************!*\
  !*** ./components/managemnet/secondary-menu/edit-menu.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../middleware/utils */ "./middleware/utils.js");
var _jsxFileName = "D:\\govermentlt\\components\\managemnet\\secondary-menu\\edit-menu.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_3__["Select"];
const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_3__["Input"]; // const config = require('./../../config');

const config = __webpack_require__(/*! ../../../pages/admin/config */ "./pages/admin/config.js");


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
} = antd__WEBPACK_IMPORTED_MODULE_3__["Typography"];
function modal({
  _visible,
  hideEditModal,
  fetch,
  user,
  dataEdit
}) {
  let divRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const [api, contextHolder] = antd__WEBPACK_IMPORTED_MODULE_3__["notification"].useNotification(); // const [divRef] = useRef(null);

  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: patternMenuSelected,
    1: setPatternMenuSelected
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: patternMenu,
    1: setPatternMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const editor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    0: content,
    1: setContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: isSubMenu,
    1: setIsSubMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: isShow,
    1: setIsShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: fields,
    1: setFields
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    name: ['intro_title'],
    value: ''
  }]);
  const [form] = antd__WEBPACK_IMPORTED_MODULE_3__["Form"].useForm();

  const actived = () => {
    active ? setActive(0) : setActive(1); // divRef.scrollIntoView({ behavior: "smooth" });
    // divRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setVisible(_visible);
    fetchPattern();
    fetchEditData();
  }, [dataEdit]);

  const fetchPattern = async () => {
    const menuData = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_4__["apiInstance"])().get('menu/pattern-menu');
    console.log(menuData);
    setPatternMenu(menuData.data.results);
  };

  const fetchEditData = async () => {
    if (dataEdit) {
      setActive(dataEdit.is_show);
      setIsSubMenu(dataEdit.have_sub);
      console.log("dataEdit useEffect");
      setPatternMenuSelected(dataEdit.pattern_menu);

      if (dataEdit.have_sub == 0) {
        if (dataEdit.pattern_menu != 1) {
          setIsShow(false);
        } else {
          setIsShow(true);
        }
      } else {
        setIsShow(false);
      }

      setFields([{
        name: ['menu_title'],
        value: !dataEdit ? "" : dataEdit.menu_title
      }, {
        name: ['pattern_menu'],
        value: !dataEdit ? "" : dataEdit.pattern_menu
      }, {
        name: ['menu_detail'],
        value: !dataEdit ? "" : dataEdit.menu_detail
      }]);
    }
  };

  const onSubmitHandler = async value => {
    // organization_id: organization_id,
    // menu_title: menu_title,
    // menu_detail: menu_detail,
    // menu_seq: menu_seq,
    // have_sub: have_sub,
    // is_show: is_show,
    // is_primary_menu: is_primary_menu,
    // is_pattern_menu: is_pattern_menu,
    // pattern_menu: pattern_menu,
    const data = {
      "menu_title": value.menu_title,
      "menu_detail": content ? value.menu_detail : "",
      // "menu_seq": 0,
      "have_sub": isSubMenu ? 1 : 0,
      "is_show": active ? 1 : 0,
      "is_primary_menu": 0,
      "is_pattern_menu": value.pattern_menu == 1 ? 0 : 1,
      "pattern_menu": patternMenuSelected
    };
    console.log(data);
    const registerData = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_4__["apiInstance"])().put('/menu/' + (dataEdit ? dataEdit.menu_id : 0), data);

    if (registerData.data.status == 200) {
      openNotificationSuccess();
    } else {
      openNotificationFail(registerData.data.message);
    }

    console.log("ON OK"); // setVisible(false)
    // onReset()

    fetch();
  };

  const openNotificationSuccess = () => {
    api.success({
      message: `บันทึกมูลสำเร็จ`,
      description: 'บันทึกมูลสำเร็จ',
      placement: 'topRight'
    });
  };

  const openNotificationFail = messgae => {
    api.error({
      message: `พบปัญหาระหว่างการบันทึกข้อมูล`,
      description: messgae,
      placement: 'topRight'
    });
  };

  const onReset = () => {
    setActive(dataEdit.is_show);
    setIsSubMenu(dataEdit.have_sub);
    console.log("dataEdit useEffect");
    setPatternMenuSelected(dataEdit.pattern_menu);

    if (dataEdit.have_sub == 0) {
      if (dataEdit.pattern_menu != 1) {
        setIsShow(false);
      } else {
        setIsShow(true);
      }
    } else {
      setIsShow(false);
    }

    setFields([{
      name: ['menu_title'],
      value: !dataEdit ? "" : dataEdit.menu_title
    }, {
      name: ['pattern_menu'],
      value: !dataEdit ? "" : dataEdit.pattern_menu
    }, {
      name: ['menu_detail'],
      value: !dataEdit ? "" : dataEdit.menu_detail
    }]);
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
    setPatternMenuSelected(value);

    if (!isSubMenu) {
      if (value != 1) {
        // setIsSubMenu(1)
        // setISPatternMenu(true)
        setIsShow(false);
      } else {
        // setIsSubMenu(0)
        // setISPatternMenu(false)
        setIsShow(true);
      }
    } // setMenu(value);

  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, contextHolder, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    title: "แก้ไขเมนูรอง " + (!dataEdit ? "" : dataEdit.menu_title),
    className: "mt-4",
    centered: true,
    visible: _visible // onOk={() => onOK()}
    ,
    onCancel: () => {
      hideEditModal();
      setActive(1);
      setIsSubMenu(0);
      form.resetFields();
    },
    width: 1000,
    footer: null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    name: "basic",
    layout: "vertical",
    onFinish: onSubmitHandler,
    requiredMark: true,
    form: form,
    fields: fields,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "menu_title",
    label: "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E19\u0E39\u0E23\u0E2D\u0E07",
    className: "block text-gray-700 text-sm font-bold mb-2 w-2/3",
    style: {
      float: "left"
    },
    rules: [{
      required: true,
      message: 'กรุณากรอกชื่อเมนูรอง'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    id: "#",
    type: "text",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E19\u0E39\u0E23\u0E2D\u0E07",
    className: "resize-none border rounded-md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 25
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    className: "flex mt-6 mb-0 w-1/3",
    style: {
      marginBottom: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "text-center lg:text-right w-full lg:w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 29
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    htmlType: "button",
    onClick: onReset,
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
      lineNumber: 250,
      columnNumber: 33
    }
  }, __jsx(Text, {
    className: "text-custom-black ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 37
    }
  }, "\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E17")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"] // type="primary"
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
      lineNumber: 267,
      columnNumber: 33
    }
  }, __jsx(Text, {
    className: "text-custom-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 37
    }
  }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "pattern_menu",
    label: "\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E40\u0E21\u0E19\u0E39\u0E23\u0E2D\u0E07",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    defaultValue: 1,
    className: "w-full",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 25
    }
  }, patternMenu ? patternMenu.map(object => {
    return __jsx(Option, {
      value: object.pattern_menu_id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 40
      }
    }, object.pattern_title, "  ");
  }) : "")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    className: "flex mt-6 mb-0",
    style: {
      marginBottom: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "inline-flex text-left lg:w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 29
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 33
    }
  }, __jsx("li", {
    className: "inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 37
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
    checked: active,
    onClick: actived,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "mx-2 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 41
    }
  }, "\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25")), __jsx("li", {
    className: "inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 37
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
    checked: isSubMenu,
    onClick: value => {
      setIsSubMenu(value ? 1 : 0);

      if (patternMenuSelected == 1) {
        setIsShow(value ? false : true);
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "mx-2 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 41
    }
  }, "\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07 \u0E40\u0E21\u0E19\u0E39\u0E22\u0E48\u0E2D\u0E22")))))), isShow == true && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "menu_detail",
    label: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14 :",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    visible: false,
    rules: [{
      required: true,
      message: 'กรุณากรอกรายละเอียด'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 25
    }
  }, __jsx(JoditEditor, {
    ref: editor,
    value: content,
    config: config.config(user),
    height: "700px",
    tabIndex: 1 // tabIndex of textarea
    ,
    onBlur: newContent => setContent(newContent) // preferred to use only this option to update the content for performance reasons
    ,
    onChange: newContent => {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 29
    }
  })))), __jsx("div", {
    style: {
      float: "left",
      clear: "both"
    },
    ref: divRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 17
    }
  })));
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

/***/ "./pages/admin/management-menu/secoundary-menu/index.js":
/*!**************************************************************!*\
  !*** ./pages/admin/management-menu/secoundary-menu/index.js ***!
  \**************************************************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_drag_listview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-drag-listview */ "react-drag-listview");
/* harmony import */ var react_drag_listview__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_drag_listview__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../middleware/utils */ "./middleware/utils.js");
/* harmony import */ var _components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/layout/LayoutAdmin */ "./components/layout/LayoutAdmin.jsx");
/* harmony import */ var _components_managemnet_secondary_menu_add_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/managemnet/secondary-menu/add-menu */ "./components/managemnet/secondary-menu/add-menu.jsx");
/* harmony import */ var _components_managemnet_secondary_menu_add_menu_sub__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/managemnet/secondary-menu/add-menu-sub */ "./components/managemnet/secondary-menu/add-menu-sub.jsx");
/* harmony import */ var _components_managemnet_secondary_menu_edit_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/managemnet/secondary-menu/edit-menu */ "./components/managemnet/secondary-menu/edit-menu.jsx");
/* harmony import */ var _components_managemnet_secondary_menu_edit_menu_sub__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/managemnet/secondary-menu/edit-menu-sub */ "./components/managemnet/secondary-menu/edit-menu-sub.jsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "D:\\govermentlt\\pages\\admin\\management-menu\\secoundary-menu\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/* utils */


/* components */





 // import UserNav from '../components/navigation/User';


const {
  Text,
  Title
} = antd__WEBPACK_IMPORTED_MODULE_9__["Typography"];
const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_9__["Input"];
/*
  This example uses react-drag-listview, and AntDesign which can be found
  at their respective links below:
  https://github.com/raisezhang/react-drag-listview#readme
  https://ant.design/docs/react/introduce
*/

/* MOCK DATA: parent list as Value, subList as subList */

const mockData = [{
  id: "category-one",
  value: "Category One",
  subList: ["Eget odio bibendum commodo malesuada Mattis montes.", "Nullam at rhoncus. Erat pretium pharetra auctor.", "Justo sed interdum sociosqu a molestie nascetur nostra metus."]
}, {
  id: "category-two",
  value: "Category Two",
  subList: ["Senectus libero blandit consectetuer penatibus gravida quisque lacinia id nunc.", "Elit. Ac. Nulla justo nibh. Fringilla, class Tempor consequat proin."]
}];
function Home(props) {
  const [api, contextHolder] = antd__WEBPACK_IMPORTED_MODULE_9__["notification"].useNotification();
  const {
    0: menus,
    1: setMenus
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    user,
    origin
  } = props;
  const {
    0: login,
    1: setLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(mockData);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: dataDelete,
    1: setDataDelete
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: dataEdit,
    1: setDataEdit
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: visibleModalDelete,
    1: setVisibleModalDelete
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: visibleEditModal,
    1: setVisibleEditModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: visibleEditMenuSubModal,
    1: setVisibleEditMenuSubModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: visibleAddSubMenuModal,
    1: setVisibleAddSubMenuModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: visibleModalMenuSubDelete,
    1: setVisibleModalMenuSubDelete
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    fetch();
  }, []);

  const fetch = async (params = {}) => {
    setLoading(true); // setVisibleEditModal(false)

    const menuData = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_3__["apiInstance"])().get('menu?is_primary_menu=0&organization_id=' + (!user ? 0 : user.organization_id));
    console.log(menuData);
    setMenus(menuData.data.results);
    setTimeout(function () {
      //Start the timer
      setLoading(false);
    }.bind(this), 800);
  };
  /*
    REORDER ACCEPTS:
      list: arr, accepts array of data to be reordered,
      fromIndex: int, onDragStart index,
      toIndex: int, onDragEnd index,
  */


  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };
  /*
    ON DRAG END EVENT HANDLER ACCEPTS:
      fromIndex: int, onDragStart index,
      toIndex: int, onDragEnd index,
      type: str, ReactDragListView Identifier,
      index: MUST be parent list index,
  */


  const onDragEnd = async (fromIndex, toIndex, type, index) => {
    setLoading(true);
    /* IGNORES DRAG IF OUTSIDE DESIGNATED AREA */

    if (toIndex < 0) return;
    /* REORDER PARENT OR SUBLIST, ELSE THROW ERROR */

    if (type === "LIST-ITEM") {
      const _data = {
        "menu_id": menus[fromIndex].menu_id,
        "menu_seq": toIndex
      };
      const menuData = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_3__["apiInstance"])().put('menu/reorder-menu', _data);
      const _dataRevert = {
        "menu_id": menus[toIndex].menu_id,
        "menu_seq": fromIndex
      };
      const menuDataRevert = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_3__["apiInstance"])().put('menu/reorder-menu', _dataRevert); // console.log(menuDataRevert)

      return fetch(); // const categories = reorder(data, fromIndex, toIndex);
      // return setData(categories);
    } else if (type === "SUBLIST-ITEM") {
      console.log(" onDragEnd LIST-ITEM");
      console.log(fromIndex);
      console.log(toIndex);
      console.log(type);
      console.log(index);
      console.log(menus[index].menu_subs[fromIndex]);
      console.log(menus[index].menu_subs[toIndex]);
      const _data = {
        "menu_sub_id": menus[index].menu_subs[fromIndex].menu_sub_id,
        "menu_seq": toIndex
      };
      const menuData = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_3__["apiInstance"])().put('menu/reorder-menu-sub', _data);
      const _dataRevert = {
        "menu_sub_id": menus[index].menu_subs[toIndex].menu_sub_id,
        "menu_seq": fromIndex
      };
      const menuDataRevert = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_3__["apiInstance"])().put('menu/reorder-menu-sub', _dataRevert); // const subList = reorder(data[index].subList, fromIndex, toIndex);
      // const categories = JSON.parse(JSON.stringify(data));
      // categories[index].subList = subList;
      // return setData(categories);

      return fetch();
    } else return new Error("NOT A VALID LIST");
  };
  /*\
    nodeSelector={}, DRAGGABLE ELEMENT IDENTIFIER, i.e 'li', ant-list.draggable>
    ALL STYLES APPLIED TO lineClassName MUST BE OVERRIDDEN WITH !important
  */


  const onDelete = async value => {
    // console.log('DELETE')
    const registerData = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_3__["apiInstance"])().delete('menu/' + dataDelete.menu_id, {});

    if (registerData.data.status == 200) {
      openNotificationSuccess(); // fetchOrganizationData();

      setVisibleModalDelete(false);
      fetch();
    } else {
      openNotificationFail(registerData.data.message);
    }
  };

  const onMenuSubDelete = async value => {
    // console.log('DELETE')
    const registerData = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_3__["apiInstance"])().delete('menu-sub/' + dataDelete.menu_sub_id, {});

    if (registerData.data.status == 200) {
      openNotificationSuccess(); // fetchOrganizationData();

      setVisibleModalMenuSubDelete(false);
      fetch();
    } else {
      openNotificationFail(registerData.data.message);
    }
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

  const hideModal = () => {
    setVisibleModalDelete(false);
  };

  const hideMenuSubModal = () => {
    setVisibleModalMenuSubDelete(false);
  };

  const showModal = data => {
    console.log('data deletd');
    console.log(data);
    setDataDelete(data);
    setVisibleModalDelete(true);
  };

  const showDeletMenuSubModal = data => {
    console.log('data deletd');
    console.log(data);
    setDataDelete(data);
    setVisibleModalMenuSubDelete(true);
  };

  const onclikEditModal = (value, obj) => {
    // compareSync
    console.log("onclikEditModal");
    setDataEdit(obj);
    setVisibleEditModal(value);
  };

  const onclikEditMenuSubModal = (value, obj) => {
    // compareSync
    setDataEdit(obj);
    setVisibleEditMenuSubModal(value);
  };

  const onclikAddSubMenuModal = (value, obj) => {
    // compareSync
    console.log("onclikEditModal");
    setDataEdit(obj);
    setVisibleAddSubMenuModal(value);
  };

  const hideEditModal = () => {
    // setVisibleModalDelete(false)
    setVisibleEditModal(false);
  };

  const hideSubMenuModal = () => {
    // setVisibleModalDelete(false)
    setVisibleAddSubMenuModal(false);
  };

  const hideEditMenuSubModal = () => {
    // setVisibleModalDelete(false)
    setVisibleEditMenuSubModal(false);
  };

  return __jsx(_components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Government - Admin management",
    url: origin,
    origin: origin,
    user: login,
    isMain: true,
    indexSubMenu: "2",
    indexMenu: "sub-2-1",
    titlePage: "เมนูรอง",
    _routes: [{
      path: '/admin/dashborad',
      breadcrumbName: 'หน้าหลัก'
    }, {
      path: '',
      breadcrumbName: 'เมนูรอง'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 7
    }
  }, contextHolder, __jsx(_components_managemnet_secondary_menu_add_menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fetch: fetch,
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 9
    }
  }), __jsx(_components_managemnet_secondary_menu_edit_menu__WEBPACK_IMPORTED_MODULE_7__["default"], {
    _visible: visibleEditModal,
    hideEditModal: hideEditModal,
    fetch: fetch,
    user: user,
    dataEdit: dataEdit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 9
    }
  }), __jsx(_components_managemnet_secondary_menu_edit_menu_sub__WEBPACK_IMPORTED_MODULE_8__["default"], {
    _visible: visibleEditMenuSubModal,
    hideModal: hideEditMenuSubModal,
    fetch: fetch,
    user: user,
    dataEdit: dataEdit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 9
    }
  }), __jsx(_components_managemnet_secondary_menu_add_menu_sub__WEBPACK_IMPORTED_MODULE_6__["default"], {
    _visible: visibleAddSubMenuModal,
    hideModal: hideSubMenuModal,
    fetch: fetch,
    user: user,
    dataEdit: dataEdit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Spin"], {
    spinning: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 9
    }
  }, __jsx(react_drag_listview__WEBPACK_IMPORTED_MODULE_2___default.a, {
    nodeSelector: ".ant-list.draggable",
    lineClassName: "dragLine",
    onDragEnd: (fromIndex, toIndex) => onDragEnd(fromIndex, toIndex, "LIST-ITEM"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 11
    }
  }, menus.length == 0 && __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Empty"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 35
    }
  }), menus.map((obj, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["List"], {
    header: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Typography"].Text, {
      strong: true,
      className: "grabbable",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 21
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["DragOutlined"], {
      className: "icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 23
      }
    }), obj.menu_title), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Tag"], {
      color: obj.is_show == 1 ? "success" : "default",
      style: {
        marginLeft: "10px",
        marginRight: "0px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 21
      }
    }, obj.is_show == 1 ? "ใช้งาน" : "ไม่ใช้งาน"), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      className: "ml-2",
      type: "default",
      onClick: () => {
        onclikEditModal(true, obj);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 21
      }
    }, "\u0E41\u0E01\u0E49\u0E44\u0E02"), obj.have_sub == 1 && __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      style: {
        backgroundColor: "#059669",
        color: "white",
        borderColor: "#059669"
      },
      onClick: () => {
        onclikAddSubMenuModal(true, obj);
      },
      className: "ml-2",
      type: "success",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 43
      }
    }, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E21\u0E19\u0E39\u0E22\u0E48\u0E2D\u0E22"), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      className: "ml-2",
      type: "danger",
      onClick: () => showModal(obj),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 21
      }
    }, "\u0E25\u0E1A")),
    key: index,
    className: "draggable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 15
    }
  }, __jsx(react_drag_listview__WEBPACK_IMPORTED_MODULE_2___default.a, {
    nodeSelector: ".ant-list-item.draggable-item",
    lineClassName: "dragLine",
    onDragEnd: (fromIndex, toIndex) => onDragEnd(fromIndex, toIndex, "SUBLIST-ITEM", index),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 17
    }
  }, obj.have_sub == 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, obj.menu_subs.map((item, index2) => __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    key: index2,
    className: "draggable-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 23
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["DragOutlined"], {
    className: "icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 25
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["List"].Item.Meta, {
    title: item.menu_title,
    className: "grabbable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 25
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Tag"], {
    color: item.is_show == 1 ? "success" : "default",
    style: {
      marginLeft: "10px",
      marginRight: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 25
    }
  }, item.is_show == 1 ? "ใช้งาน" : "ไม่ใช้งาน"), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    className: "mr-1",
    type: "default",
    onClick: () => {
      onclikEditMenuSubModal(true, item);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 25
    }
  }, "\u0E41\u0E01\u0E49\u0E44\u0E02"), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    className: "mr-2",
    type: "danger",
    onClick: () => showDeletMenuSubModal(item),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 25
    }
  }, "\u0E25\u0E1A")))))))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
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
      lineNumber: 365,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 9
    }
  }, "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A \"", dataDelete ? dataDelete.menu_title : "", "\" \u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?  ")), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
    title: "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?",
    visible: visibleModalMenuSubDelete,
    onOk: onMenuSubDelete,
    onCancel: hideMenuSubModal,
    okText: "\u0E25\u0E1A",
    cancelText: "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",
    okButtonProps: {
      'type': "primary",
      'danger': true
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 9
    }
  }, "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A \"", dataDelete ? dataDelete.menu_title : "", "\" \u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?  ")));
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

/***/ 7:
/*!********************************************************************!*\
  !*** multi ./pages/admin/management-menu/secoundary-menu/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\govermentlt\pages\admin\management-menu\secoundary-menu\index.js */"./pages/admin/management-menu/secoundary-menu/index.js");


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

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-drag-listview":
/*!**************************************!*\
  !*** external "react-drag-listview" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-drag-listview");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdkJhci9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaWRlQmFyL1NpZGVCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0QWRtaW4uanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWFuYWdlbW5ldC9zZWNvbmRhcnktbWVudS9hZGQtbWVudS1zdWIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWFuYWdlbW5ldC9zZWNvbmRhcnktbWVudS9hZGQtbWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYW5hZ2VtbmV0L3NlY29uZGFyeS1tZW51L2VkaXQtbWVudS1zdWIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWFuYWdlbW5ldC9zZWNvbmRhcnktbWVudS9lZGl0LW1lbnUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9Ub3BpY01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4vY29uZmlnLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FkbWluL21hbmFnZW1lbnQtbWVudS9zZWNvdW5kYXJ5LW1lbnUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqb2RpdC1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRyYWctbGlzdHZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbIk5hdkJhciIsIm1lbnUiLCJ1c2VyIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInR5cGVfdXNlciIsIm5hbWVfb3JnYW5pemF0aW9ucyIsImVtYWlsIiwiU2lkZUJhciIsIkhlYWRlciIsIkZvb3RlciIsIlNpZGVyIiwiQ29udGVudCIsIkxheW91dCIsIlN1Yk1lbnUiLCJNZW51IiwiTGF5b3V0QWRtaW4iLCJjaGlsZHJlbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsInR5cGUiLCJ1cmwiLCJpbWFnZSIsIm9yaWdpbiIsImluZGV4IiwicHJvcHMiLCJfcm91dGVzIiwiaW5kZXhNZW51IiwiaXNNYWluIiwidGl0bGVQYWdlIiwiaW5kZXhTdWJNZW51IiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwic2V0VXNlciIsInRvcGljcyIsImljb24iLCJ0b3BpY3MyIiwiY29udGVudEluZGV4Iiwic2V0Q29udGVudEluZGV4Iiwic2VsZWN0ZWRLZXkiLCJzZXRTZWxlY3RlZEtleSIsImNoYW5nZVNlbGVjdGVkS2V5IiwiZXZlbnQiLCJrZXkiLCJnb3RvUGFnZSIsIlJvdXRlciIsInB1c2giLCJ1c2VFZmZlY3QiLCJmZXRjaFVzZXJMb2dpbiIsInJvdXRlczIiLCJwYXRoIiwiYnJlYWRjcnVtYk5hbWUiLCJpdGVtUmVuZGVyIiwicm91dGUiLCJwYXJhbXMiLCJyb3V0ZXMiLCJwYXRocyIsImxhc3QiLCJpbmRleE9mIiwibGVuZ3RoIiwiam9pbiIsInVzZXJMb2dpbiIsImNoZWNrSXNMb2dpbiIsImhhbmRsZUNsaWNrIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJtYXAiLCJvYmoiLCJ3aW5kb3ciLCJoaXN0b3J5IiwiYmFjayIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwibWluSGVpZ2h0IiwiT3B0aW9uIiwiU2VsZWN0IiwiVGV4dEFyZWEiLCJJbnB1dCIsImNvbmZpZyIsInJlcXVpcmUiLCJKb2RpdEVkaXRvciIsImR5bmFtaWMiLCJzc3IiLCJUZXh0IiwiVGl0bGUiLCJUeXBvZ3JhcGh5IiwibW9kYWwiLCJfdmlzaWJsZSIsImhpZGVNb2RhbCIsImZldGNoIiwiZGF0YUVkaXQiLCJkaXZSZWYiLCJ1c2VSZWYiLCJhcGkiLCJjb250ZXh0SG9sZGVyIiwibm90aWZpY2F0aW9uIiwidXNlTm90aWZpY2F0aW9uIiwicGF0dGVybk1lbnVTZWxlY3RlZCIsInNldFBhdHRlcm5NZW51U2VsZWN0ZWQiLCJwYXR0ZXJuTWVudSIsInNldFBhdHRlcm5NZW51IiwiZWRpdG9yIiwiY29udGVudCIsInNldENvbnRlbnQiLCJpc1N1Yk1lbnUiLCJzZXRJc1N1Yk1lbnUiLCJpc1BhdHRlcm5NZW51Iiwic2V0SVNQYXR0ZXJuTWVudSIsImlzU2hvdyIsInNldElzU2hvdyIsImZvcm0iLCJGb3JtIiwidXNlRm9ybSIsImFjdGl2ZWQiLCJmZXRjaFBhdHRlcm4iLCJtZW51RGF0YSIsImFwaUluc3RhbmNlIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJyZXN1bHRzIiwib25TdWJtaXRIYW5kbGVyIiwidmFsdWUiLCJtZW51X2lkIiwibWVudV90aXRsZSIsIm1lbnVfZGV0YWlsIiwicGF0dGVybl9tZW51IiwicmVnaXN0ZXJEYXRhIiwicG9zdCIsInN0YXR1cyIsIm9wZW5Ob3RpZmljYXRpb25TdWNjZXNzIiwib3Blbk5vdGlmaWNhdGlvbkZhaWwiLCJtZXNzYWdlIiwib25SZXNldCIsInN1Y2Nlc3MiLCJwbGFjZW1lbnQiLCJtZXNzZ2FlIiwiZXJyb3IiLCJyZXNldEZpZWxkcyIsImhhbmRsZUNoYW5nZSIsImZsb2F0IiwicmVxdWlyZWQiLCJtYXJnaW5Cb3R0b20iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJjb2xvciIsIm9iamVjdCIsInBhdHRlcm5fbWVudV9pZCIsInBhdHRlcm5fdGl0bGUiLCJuZXdDb250ZW50IiwiY2xlYXIiLCJvcmdhbml6YXRpb25faWQiLCJmaWVsZHMiLCJzZXRGaWVsZHMiLCJuYW1lIiwiZmV0Y2hFZGl0RGF0YSIsImlzX3Nob3ciLCJoYXZlX3N1YiIsInB1dCIsIm1lbnVfc3ViX2lkIiwiaGlkZUVkaXRNb2RhbCIsIlRvcGljTWVudSIsInNlbGVjdGVkU3ViS2V5Iiwic3R5bGVkVG9waWNzIiwiZm9yRWFjaCIsInRvcGljIiwic3R5bGVkVG9waWNzQ2hpbGRyZW4iLCJ0b3BpY0NoaWxkcmVuIiwiaW5kZXhDaGlsZHJlbiIsImUiLCJoYW5kbGVMb2dvdXQiLCJwcmV2ZW50RGVmYXVsdCIsIkNvb2tpZXMiLCJyZW1vdmUiLCJTRUNSRVRfS0VZIiwicHJvY2VzcyIsImVudiIsIkpXVF9LRVkiLCJ2ZXJpZnlUb2tlbiIsImp3dFRva2VuIiwiand0IiwidmVyaWZ5IiwiZ2V0QXBwQ29va2llcyIsInJlcSIsInBhcnNlZEl0ZW1zIiwiaGVhZGVycyIsImNvb2tpZSIsImNvb2tpZXNJdGVtcyIsInNwbGl0IiwiY29va2llcyIsInBhcnNlZEl0ZW0iLCJkZWNvZGVVUkkiLCJhYnNvbHV0ZVVybCIsInNldExvY2FsaG9zdCIsInByb3RvY29sIiwiaG9zdCIsImxvY2F0aW9uIiwiYWRkRGF5cyIsImRhdGUiLCJkYXlzIiwicmVzdWx0Iiwic2V0RGF0ZSIsImdldERhdGUiLCJmb3JtYXREYXRlV2l0aG91dFRpbWUiLCJkYXRlU3RyaW5nIiwiZ2V0VVRDRnVsbFllYXIiLCJnZXRVVENNb250aCIsInNsaWNlIiwiZ2V0VVRDRGF0ZSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInRva2VuIiwicGFyc2VKd3QiLCJpc0V4cGlyZWQiLCJiYXNlNjRVcmwiLCJiYXNlNjQiLCJyZXBsYWNlIiwianNvblBheWxvYWQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJhdG9iIiwiYyIsImNoYXJDb2RlQXQiLCJ0b1N0cmluZyIsIl9qc29uUGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImRhdGVOb3ciLCJwYXJzZUludCIsImV4cCIsImdldFRpbWUiLCJzdWJzdHJpbmciLCJjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lIiwiZGF0ZVNwbGl0IiwiY29udmVydERhdGVEQnRvRGF0ZVBpY2tlcldpdGhUaW1lIiwiY29udmVydERhdGV0b1RoYWlEYXRlIiwiX2RhdGUiLCJjb252ZXJ0TW9udGh0b1RoYWlNb250aCIsImNvbnZlcnRZZWFydG9UaGFpWWVhciIsInllYXIiLCJtb250aCIsImNvbnZlcnREYXRldG9BZGREQiIsImdldElQQWRkcmVzcyIsInJlcyIsImNvdW50cnlfY29kZSIsImNvdW50cnlfbmFtZSIsImNpdHkiLCJwb3N0YWwiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIklQdjQiLCJzdGF0ZSIsImJ5dGVzVG9TaXplIiwiYnl0ZXMiLCJzaXplcyIsImkiLCJyb3VuZCIsInBvdyIsImJ5dGVzVG9NQiIsIk51bWJlciIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiZ2V0RGF0ZWRpZmYiLCJzdGFydERhdGUiLCJ0aW1lRW5kIiwibW9tZW50IiwibmV3U3RhcnREYXRlIiwibmV3RW5kRGF0ZSIsIm9uZV9kYXkiLCJjZWlsIiwiZ2V0Q3VycmVudERhdGUiLCJzZXBhcmF0b3IiLCJuZXdEYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImhyZWYiLCJhcyIsImZvcm1hdEZ1bmMiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInByZWZldGNoZWQiLCJvYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImdldE9ic2VydmVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRVcmwiLCJhc0hyZWYiLCJub2RlTmFtZSIsInRhcmdldCIsImlzTG9jYWwiLCJzY3JvbGwiLCJzaGFsbG93IiwiZG9jdW1lbnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicmVzb2x2ZWRIcmVmIiwicGFyc2VkQXMiLCJoYW5kbGVSZWYiLCJyZWYiLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsImVyciIsInJlbmRlciIsImNoaWxkIiwiQ2hpbGRyZW4iLCJlbCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsIlJlYWN0Iiwid2FybiIsIlByb3BUeXBlcyIsImV4YWN0IiwiTGluayIsInBhc3NIcmVmIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicHJlcGFyZVJvdXRlIiwidG9Sb3V0ZSIsImF0dGVtcHRzIiwiaXNTZXJ2ZXJSZW5kZXIiLCJwYXRobmFtZSIsImFkZEJhc2VQYXRoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJkZWxCYXNlUGF0aCIsImNyZWRlbnRpYWxzIiwiZ2V0UmVzcG9uc2UiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiUHJvbWlzZSIsImZldGNoTmV4dERhdGEiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIl9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCIsInVwZGF0ZSIsIm1vZCIsIm5ld0RhdGEiLCJyZWxvYWQiLCJvcHRpb25zIiwiY2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJlc29sdmUiLCJtZXRob2QiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsInJlamVjdCIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImZldGNoQ29tcG9uZW50IiwiY2FuY2VsbGVkIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJURVNUX1JPVVRFIiwicmUiLCJkZWNvZGUiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwiZXNjYXBlZFJvdXRlIiwiZXNjYXBlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiaXNPcHRpb25hbCIsIiQxIiwiaXNDYXRjaEFsbCIsInBvcyIsInJlcGVhdCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwibmFtZWRSZWdleCIsInVzZWQiLCJob3N0bmFtZSIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsInJlYWRvbmx5IiwidXBsb2FkZXIiLCJpbnNlcnRJbWFnZUFzQmFzZTY0VVJJIiwicHJlcGFyZURhdGEiLCJhcHBlbmQiLCJkZWZhdWx0SGFuZGxlclN1Y2Nlc3MiLCJyZXNwIiwiZmlsZXNWYXJpYWJsZU5hbWUiLCJ0ZXh0SFRNTCIsImxpc3QiLCJlbGVtZW50IiwiZXh0ZW5zaW9uIiwibGFzdEluZGV4T2YiLCJfcGF0aCIsInNlbGVjdGlvbiIsImluc2VydEhUTUwiLCJmaWxlcyIsIm1vY2tEYXRhIiwiaWQiLCJzdWJMaXN0IiwiSG9tZSIsIm1lbnVzIiwic2V0TWVudXMiLCJsb2dpbiIsInNldExvZ2luIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YURlbGV0ZSIsInNldERhdGFEZWxldGUiLCJzZXREYXRhRWRpdCIsInZpc2libGVNb2RhbERlbGV0ZSIsInNldFZpc2libGVNb2RhbERlbGV0ZSIsInZpc2libGVFZGl0TW9kYWwiLCJzZXRWaXNpYmxlRWRpdE1vZGFsIiwidmlzaWJsZUVkaXRNZW51U3ViTW9kYWwiLCJzZXRWaXNpYmxlRWRpdE1lbnVTdWJNb2RhbCIsInZpc2libGVBZGRTdWJNZW51TW9kYWwiLCJzZXRWaXNpYmxlQWRkU3ViTWVudU1vZGFsIiwidmlzaWJsZU1vZGFsTWVudVN1YkRlbGV0ZSIsInNldFZpc2libGVNb2RhbE1lbnVTdWJEZWxldGUiLCJzZXRUaW1lb3V0IiwiYmluZCIsInJlb3JkZXIiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJBcnJheSIsImZyb20iLCJyZW1vdmVkIiwic3BsaWNlIiwib25EcmFnRW5kIiwiZnJvbUluZGV4IiwidG9JbmRleCIsIl9kYXRhIiwiX2RhdGFSZXZlcnQiLCJtZW51RGF0YVJldmVydCIsIm1lbnVfc3VicyIsIkVycm9yIiwib25EZWxldGUiLCJkZWxldGUiLCJvbk1lbnVTdWJEZWxldGUiLCJoaWRlTWVudVN1Yk1vZGFsIiwic2hvd01vZGFsIiwic2hvd0RlbGV0TWVudVN1Yk1vZGFsIiwib25jbGlrRWRpdE1vZGFsIiwib25jbGlrRWRpdE1lbnVTdWJNb2RhbCIsIm9uY2xpa0FkZFN1Yk1lbnVNb2RhbCIsImhpZGVTdWJNZW51TW9kYWwiLCJoaWRlRWRpdE1lbnVTdWJNb2RhbCIsIm1hcmdpbkxlZnQiLCJpdGVtIiwiaW5kZXgyIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxj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QUFELENBQTlCO0FBRUEsU0FBTztBQUNMMUssU0FBSyxFQUFFO0FBQ0xGO0FBREs7QUFERixHQUFQO0FBS0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4WkQsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFkbWluXFxtYW5hZ2VtZW50LW1lbnVcXHNlY291bmRhcnktbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInN0YXRpY1xcXFxkZXZlbG9wbWVudFxcXFxwYWdlc1xcXFxhZG1pblxcXFxtYW5hZ2VtZW50LW1lbnVcXFxcc2Vjb3VuZGFyeS1tZW51LmpzXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IERyYXdlciwgQnV0dG9uLCBJbWFnZSwgQXZhdGFyIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgTWVudU91dGxpbmVkLCBVc2VyT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG4vLyBpbXBvcnQgXCIuL05hdkJhci5tb2R1bGUuY3NzXCI7XHJcbi8vIGltcG9ydCBsb2dvIGZyb20gXCIuLy4uLy4uL2xvZ28uc3ZnXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBOYXZCYXIgPSAoeyBtZW51LCB1c2VyIH0pID0+IHtcclxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LXRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgaWNvbj17PE1lbnVPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGUodHJ1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwi4LmA4Lih4LiZ4Li5XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtc2NyZWVuXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgLy8gb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIHZpc2libGU9e3Zpc2libGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHttZW51fVxyXG4gICAgICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC03IHctYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXsnXFxcXGltYWdlc1xcXFxsb2dvLWdvdmVybm1lbnQucG5nJ31cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc2l6ZT17MzB9IGljb249ezxVc2VyT3V0bGluZWQgLz59IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+eyF1c2VyID8gXCJcIiA6IHVzZXIudHlwZV91c2VyID09IDEgPyBcIuC4nOC4ueC5ieC4lOC4ueC5geC4peC4o+C4sOC4muC4mlwiIDogdXNlci5uYW1lX29yZ2FuaXphdGlvbnN9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Vc2VyOiB7IXVzZXIgPyBcIlwiIDogdXNlci5lbWFpbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8TGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVMb2dvdXQoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggbGc6dy1hdXRvIHctZnVsbCBweC0yIHB5LTIgcm91bmRlZCBoLTggdGV4dC13aGl0ZSBiZy1yZWQtNjAwIGZvbnQtYm9sZCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaG92ZXI6YmctcmVkLTYwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDguK3guK3guIHguIjguLLguIHguKPguLDguJrguJpcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPiAqL31cclxuICAgICAgICA8L25hdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG4vLyBpbXBvcnQgXCIuL1NpZGVCYXIubW9kdWxlLmNzc1wiXHJcbmNvbnN0IFNpZGVCYXIgPSAoeyBtZW51IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dC5TaWRlclxyXG4gICAgICBjbGFzc05hbWU9XCJzaWRlYmFyIGgtYXV0b1wiXHJcbiAgICAgIGJyZWFrcG9pbnQ9e1wibGdcIn1cclxuICAgICAgdGhlbWU9XCJsaWdodFwiXHJcbiAgICAgIGNvbGxhcHNlZFdpZHRoPXswfVxyXG4gICAgICB0cmlnZ2VyPXtudWxsfVxyXG4gICAgPlxyXG4gICAgICAgIHttZW51fVxyXG4gICAgPC9MYXlvdXQuU2lkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7IiwiaW1wb3J0IHtcclxuICBEYXNoYm9hcmRPdXRsaW5lZCwgTWFpbE91dGxpbmVkLCBUb29sT3V0bGluZWRcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IEJyZWFkY3J1bWIsIENvbCwgTGF5b3V0LCBNZW51LCBQYWdlSGVhZGVyLCBSb3cgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuLyogQ29tcG9uZW50cyAqL1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY2hlY2tJc0xvZ2luIH0gZnJvbSAnLi4vLi4vbWlkZGxld2FyZS91dGlscyc7XHJcbi8vIGltcG9ydCBUb3BpY01lbnUgZnJvbSBcIi4vY29tcG9uZW50cy9Ub3BpY01lbnVcIjtcclxuaW1wb3J0IFRvcGljTWVudSBmcm9tIFwiLi8uLi8uLi9jb21wb25lbnRzL21lbnUvVG9waWNNZW51XCI7XHJcbi8vIGltcG9ydCBcIi4vQXBwLmNzc1wiO1xyXG4vLyAgaW1wb3J0IFwiLi9BcHAubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLy4uLy4uL2NvbXBvbmVudHMvTmF2QmFyL05hdkJhclwiO1xyXG5pbXBvcnQgU2lkZUJhciBmcm9tIFwiLi8uLi8uLi9jb21wb25lbnRzL1NpZGVCYXIvU2lkZUJhclwiO1xyXG4vLyBpbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9Gb290ZXJEZWZhdWx0JztcclxuY29uc3QgeyBIZWFkZXIsIEZvb3RlciwgU2lkZXIsIENvbnRlbnQgfSA9IExheW91dDtcclxuXHJcbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXRBZG1pbih7XHJcbiAgY2hpbGRyZW4sXHJcbiAgdGl0bGUgPSAnR292ZXJubWVudCcsXHJcbiAgZGVzY3JpcHRpb24gPSAnTmV4dC5qcyB3aXRoIFNlcXVlbGl6ZSB8IEEgYm9pbGVycGxhdGUgTmV4dC5qcyBhbmQgU2VxdWVsaXplIGZyb20gZHlhcmZpLmdpdGh1Yi5pbycsXHJcbiAga2V5d29yZHMgPSAnTmV4dC5qcywgU2VxdWVsaXplLCBPUk0sIEpXVCwgSnNvbiBXZWIgVG9rZW5zLCBBdXRoZW50aWNhdGlvbiwgQXBwbGljYXRpb24nLFxyXG4gIHR5cGUgPSAnb2JqZWN0JyxcclxuICB1cmwgPSAnLycsXHJcbiAgaW1hZ2UgPSAnL25leHRqcy5zdmcnLFxyXG4gIG9yaWdpbiA9ICcnLFxyXG4gIGluZGV4LFxyXG4gIHByb3BzLFxyXG4gIF9yb3V0ZXMgPSBbXSxcclxuICBpbmRleE1lbnUgPSBcIjFcIixcclxuICBpc01haW4gPSBmYWxzZSxcclxuICB0aXRsZVBhZ2UgPSBcInRpdGxlUGFnZVwiLFxyXG4gIGluZGV4U3ViTWVudSA9IFwiXCJcclxufSkge1xyXG4gIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gIGNvbnN0IHRvcGljcyA9IFtcclxuICAgIHsgdGl0bGU6IFwi4Lir4LiZ4LmJ4Liy4Lir4Lil4Lix4LiBXCIsIGljb246IDwgRGFzaGJvYXJkT3V0bGluZWQgLz4gfSxcclxuICAgIHsgdGl0bGU6IFwi4LiI4Lix4LiU4LiB4Liy4Lij4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZXCIsIGljb246IDwgVG9vbE91dGxpbmVkIC8+IH0sXHJcbiAgICB7IHRpdGxlOiBcIuC4iOC4seC4lOC4geC4suC4o+C4guC5iOC4suC4p+C4m+C4o+C4sOC4iuC4suC4quC4seC4oeC4nuC4seC4meC4mOC5jFwiLCBpY29uOiA8IFRvb2xPdXRsaW5lZCAvPiB9LFxyXG4gICAgeyB0aXRsZTogXCLguIjguLHguJTguIHguLLguKPguKfguLHguJnguKvguKLguLjguJTguJ7guLTguYDguKjguKlcIiwgaWNvbjogPCBUb29sT3V0bGluZWQgLz4gfSxdO1xyXG4gIGNvbnN0IHRvcGljczIgPSBbXHJcbiAgICB7IHRpdGxlOiBcIuC4q+C4meC5ieC4suC4q+C4peC4seC4gVwiLCBpY29uOiA8IERhc2hib2FyZE91dGxpbmVkIC8+IH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIuC4iOC4seC4lOC4geC4suC4o+C5gOC4meC4t+C5ieC4reC4q+C4slwiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPixcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICB7IHRpdGxlOiBcIuC4guC5iOC4suC4p+C4geC4tOC4iOC4geC4o+C4o+C4oVwiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAgICAgIHsgdGl0bGU6IFwi4LiC4LmI4Liy4Lin4Lib4Lij4Liw4LiK4Liy4Liq4Lix4Lih4Lie4Lix4LiZ4LiY4LmMXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+IH0sXHJcbiAgICAgICAgeyB0aXRsZTogXCLguILguYjguLLguKfguIjguLHguJTguIvguLfguYnguK3guIjguLHguJTguIjguYnguLLguIdcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgICAgICB7IHRpdGxlOiBcIuC4peC4tOC4h+C4hOC5jOC4q+C4meC5iOC4p+C4ouC4h+C4suC4meC4l+C4teC5iOC5gOC4geC4teC5iOC4ouC4p+C4guC5ieC4reC4h1wiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAgICAgIHsgdGl0bGU6IFwi4LiB4Lij4Liw4LiU4Liy4LiZ4LiC4LmI4Liy4LinXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+IH0sXHJcbiAgICAgICAgeyB0aXRsZTogXCLguITguKXguLHguIfguYDguK3guIHguKrguLLguKNcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgICAgICB7IHRpdGxlOiBcIuC4quC4s+C4o+C4p+C4iOC4hOC4p+C4suC4oeC4hOC4tOC4lOC5gOC4q+C5h+C4mVwiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAgICAgIHsgdGl0bGU6IFwi4Lin4Liy4Lij4Liq4Liy4LijXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+IH0sXHJcbiAgICAgICAgeyB0aXRsZTogXCLguKPguLLguKLguIrguLfguYjguK3guJbguKfguLLguKLguJ7guKPguLDguJ7guKNcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwi4LiI4Lix4LiU4LiB4Liy4Lij4LmA4Lih4LiZ4Li5XCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+LFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIHsgdGl0bGU6IFwi4LmA4Lih4LiZ4Li54Lir4Lil4Lix4LiBXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+IH0sXHJcbiAgICAgICAgeyB0aXRsZTogXCLguYDguKHguJnguLnguKPguK3guIdcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHsgdGl0bGU6IFwi4LiC4LmJ4Lit4Lih4Li54Lil4LmA4Lih4LiZ4Li54Lij4LmJ4Lit4LiH4LiX4Li44LiB4LiC4LmMXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+IH0sXHJcbiAgICB7IHRpdGxlOiBcIuC4guC5ieC4reC4oeC4ueC4peC5gOC4oeC4meC4ueC4leC4tOC4lOC4leC5iOC4reC5gOC4o+C4slwiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAgeyB0aXRsZTogXCLguKPguLLguKLguIfguLLguJnguKrguKPguLjguJtcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwi4LiV4Lix4LmJ4LiH4LiE4LmI4Liy4Lij4Liw4Lia4LiaXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+LFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIHsgdGl0bGU6IFwi4LiC4LmJ4Lit4Lih4Li54Lil4Lit4LiH4LiE4LmM4LiB4LijKOC4iOC4seC4lOC4geC4suC4o+C5guC4peC5guC4geC5iSlcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgICAgICB7IHRpdGxlOiBcIuC4iOC4seC4lOC4geC4suC4o+C4mOC4teC4oVwiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAgICAgIHsgdGl0bGU6IFwi4Liq4LmI4Lin4LiZ4Lir4Lix4Lin4LmA4Lin4LmH4Lia4LmE4LiL4LiV4LmMXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+IH0sXHJcbiAgICAgICAgeyB0aXRsZTogXCLguIjguLHguJTguIHguLLguKPguK3guLfguYjguJnguYZcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgICAgXVxyXG4gICAgfSxcclxuICBdO1xyXG4gIGNvbnN0IFtjb250ZW50SW5kZXgsIHNldENvbnRlbnRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2VsZWN0ZWRLZXksIHNldFNlbGVjdGVkS2V5XSA9IHVzZVN0YXRlKFwiMFwiKTtcclxuICBjb25zdCBjaGFuZ2VTZWxlY3RlZEtleSA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3Qga2V5ID0gZXZlbnQua2V5O1xyXG4gICAgc2V0U2VsZWN0ZWRLZXkoa2V5KTtcclxuICAgIGdvdG9QYWdlKGtleSk7XHJcbiAgICAvLyBzZXRDb250ZW50SW5kZXgoK2tleSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ290b1BhZ2UgPSAoa2V5KSA9PiB7XHJcblxyXG4gICAgaWYgKHVzZXIudHlwZV91c2VyID09IDEpIHtcclxuICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICBjYXNlIFwiMFwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9kYXNoYm9yYWQnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQtb3JnYW5pemF0aW9uJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiMlwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50LWluZm9ybWF0aW9uJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiM1wiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50LWF1dG8tbGFuZGluZ3BhZ2UnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICBjYXNlIFwiMFwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9kYXNoYm9yYWQnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzdWItMS0wXCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQvYWN0aXZpdGllcycpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN1Yi0xLTFcIjpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC9pbmZvcm1hdGlvbicpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN1Yi0xLTJcIjpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC9wdXJjaGFzZS1uZXdzJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTEtM1wiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50L2Jhbm5lcicpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN1Yi0xLTRcIjpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC93ZWJib2FyZCcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN1Yi0xLTVcIjpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC9kb2N1bWVudHMnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzdWItMS02XCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQvcG9sbHMnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzdWItMS03XCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQvam91cm5hbCcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN1Yi0xLThcIjpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC9ibGVzc2luZy1saXN0Jyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTItMFwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50LW1lbnUvcHJpbWFyeS1tZW51Jyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTItMVwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50LW1lbnUvc2Vjb3VuZGFyeS1tZW51Jyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiM1wiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50LWNvbXBsYWluJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiNFwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50LWNvbnRhY3QnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCI1XCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL3JlcG9ydCcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN1Yi02LTBcIjpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vc2V0dGluZy9wcm9maWxlJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTYtMVwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9zZXR0aW5nL3RoZW1lJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTYtMlwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9zZXR0aW5nL2NvdmVyJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTYtM1wiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9zZXR0aW5nL2dlbmVyYWwnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2Vycm9yLTQwNCcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gIH07XHJcbiAgY29uc3QgTWVudSA9IChcclxuICAgIDxUb3BpY01lbnVcclxuICAgICAgdG9waWNzPXshdXNlciA/IFtdIDogdXNlci50eXBlX3VzZXIgPT0gMSA/IHRvcGljcyA6IHRvcGljczJ9XHJcbiAgICAgIHNlbGVjdGVkS2V5PXtpbmRleE1lbnV9XHJcbiAgICAgIGNoYW5nZVNlbGVjdGVkS2V5PXtjaGFuZ2VTZWxlY3RlZEtleX1cclxuICAgICAgc2VsZWN0ZWRTdWJLZXk9e2luZGV4U3ViTWVudX1cclxuICAgIC8+XHJcbiAgKTtcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFVzZXJMb2dpbigpXHJcbiAgICAvLyByZW5kZXJLZXlNZW51KHByb3BzLmFzUGF0aCk7XHJcbiAgfSwgW10pXHJcblxyXG5cclxuICBjb25zdCByb3V0ZXMyID0gW3tcclxuICAgIHBhdGg6ICdpbmRleCcsXHJcbiAgICBicmVhZGNydW1iTmFtZTogJ2hvbWUnXHJcbiAgfSwge1xyXG4gICAgcGF0aDogJ2ZpcnN0JyxcclxuICAgIGJyZWFkY3J1bWJOYW1lOiAnZmlyc3QnXHJcbiAgfSwge1xyXG4gICAgcGF0aDogJ3NlY29uZCcsXHJcbiAgICBicmVhZGNydW1iTmFtZTogJ3NlY29uZCdcclxuICB9XTtcclxuICBmdW5jdGlvbiBpdGVtUmVuZGVyKHJvdXRlLCBwYXJhbXMsIHJvdXRlcywgcGF0aHMpIHtcclxuICAgIGNvbnN0IGxhc3QgPSByb3V0ZXMuaW5kZXhPZihyb3V0ZSkgPT09IHJvdXRlcy5sZW5ndGggLSAxO1xyXG4gICAgcmV0dXJuIGxhc3QgPyA8c3Bhbj57cm91dGUuYnJlYWRjcnVtYk5hbWV9PC9zcGFuPiA6IDxMaW5rIHRvPXtwYXRocy5qb2luKCcvJyl9Pntyb3V0ZS5icmVhZGNydW1iTmFtZX08L0xpbms+O1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VyTG9naW4oKSB7XHJcbiAgICBjb25zdCB1c2VyTG9naW4gPSBhd2FpdCBjaGVja0lzTG9naW4oKVxyXG4gICAgLy8gY29uc29sZS5sb2codXNlckxvZ2luKVxyXG4gICAgc2V0VXNlcih1c2VyTG9naW4pXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlKCFhY3RpdmUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cImluZGV4LCBmb2xsb3dcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e2tleXdvcmRzfSAvPlxyXG5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgcHJvcGVydHk9XCJ0d2l0dGVyOmltYWdlOnNyY1wiXHJcbiAgICAgICAgICBjb250ZW50PXtgJHtvcmlnaW59JHtpbWFnZX0/dj0ke01hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMCl9YH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjp1cmxcIiBjb250ZW50PXt1cmx9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XHJcblxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcclxuICAgICAgICAgIGNvbnRlbnQ9e2Ake29yaWdpbn0ke2ltYWdlfT92PSR7TWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwKX1gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXt1cmx9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD17dHlwZX0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXt1cmx9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxyXG5cclxuICAgICAgICB7LyogPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPiAqL31cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ub1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC41LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCI+PC9saW5rPlxyXG4gICAgICAgIHsvKiA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC05YUl0Mm5ScEMxMlVrOWdTOWJhRGw0MTFOUUFwRm1DMjZFd0FPSDhXZ1psNU1ZWXhGZmMrTmNQYjFkS0dqN1NrXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAvPiAqL31cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICB7LyogPEhlYWRlciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTRcIj48L2Rpdj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8Rm9vdGVyIC8+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgIDxOYXZCYXIgbWVudT17TWVudX0gdXNlcj17dXNlcn0gLz5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPFNpZGVCYXIgbWVudT17TWVudX0gLz5cclxuICAgICAgICAgIDxMYXlvdXQuQ29udGVudCBjbGFzc05hbWU9XCJjb250ZW50IHctZnVsbFwiPlxyXG4gICAgICAgICAgICB7Lyoge3RvcGljc1tjb250ZW50SW5kZXhdfSAqL31cclxuICAgICAgICAgICAgPENvbnRlbnQgY2xhc3NOYW1lPVwidy1mdWxsXCIgc3R5bGU9e3sgcGFkZGluZ1RvcDogMCwgcGFkZGluZ0xlZnQ6IFwiMXJlbVwiLCBwYWRkaW5nUmlnaHQ6IFwiMXJlbVwiLCBwYWRkaW5nQm90dG9tOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0gY2xhc3NOYW1lPVwicGItMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc01haW4gJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9IGNsYXNzTmFtZT1cIlwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJwLTEuNSBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFVzZXJPdXRsaW5lZCBjbGFzc05hbWU9XCJ0ZXh0LTR4bFwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC00IHRleHQtNHhsXCI+e3RpdGxlUGFnZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQganVzdGlmeS1pdGVtcy1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJwLTEuNSAganVzdGlmeS1lbmQganVzdGlmeS1pdGVtcy1lbmQgcHQtOFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfcm91dGVzLm1hcCgob2JqLCBpbmRleCwgeyBsZW5ndGggfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggKyAxID09PSBsZW5ndGgpIHsgLy9sYXN0IGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4+e29iai5icmVhZGNydW1iTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxCcmVhZGNydW1iLkl0ZW0gaHJlZj17b2JqLnBhdGh9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntvYmouYnJlYWRjcnVtYk5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JyZWFkY3J1bWIuSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CcmVhZGNydW1iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgeyFpc01haW4gJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9IGNsYXNzTmFtZT1cIlwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2VIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBnaG9zdD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25CYWNrPXsoKSA9PiB3aW5kb3cuaGlzdG9yeS5iYWNrKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdWJUaXRsZT1cIlRoaXMgaXMgYSBzdWJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmE9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7X3JvdXRlcy5tYXAoKG9iaiwgaW5kZXgsIHsgbGVuZ3RoIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggKyAxID09PSBsZW5ndGgpIHsgLy9sYXN0IGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3Bhbj57b2JqLmJyZWFkY3J1bWJOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxCcmVhZGNydW1iLkl0ZW0gaHJlZj17b2JqLnBhdGh9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e29iai5icmVhZGNydW1iTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CcmVhZGNydW1iLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JyZWFkY3J1bWI+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8Um93IGNsYXNzTmFtZT1cInAtMS41IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgPFVzZXJPdXRsaW5lZCBjbGFzc05hbWU9XCJ0ZXh0LTR4bFwiIC8+XHJcbiAgICA8aDEgY2xhc3NOYW1lPVwibWwtNCBtdC00IHRleHQtNHhsXCI+bWFuYWdlbWVudCBhY3Rpdml0aWVzPC9oMT5cclxuICA8L1Jvdz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Lz59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxDb2wgc3Bhbj17MTJ9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1pdGVtcy1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbFwiIHN0eWxlPXt7IHBhZGRpbmc6IDI0LCBiYWNrZ3JvdW5kOiAnI2ZmZicsIG1pbkhlaWdodDogMzYwIH19PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgICAgICA8L0xheW91dC5Db250ZW50PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uLCBGb3JtLCBJbnB1dCwgU3dpdGNoLCBUeXBvZ3JhcGh5LCBTZWxlY3QsIG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnO1xyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuLy8gY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi8uLi8uLi9jb25maWcnKTtcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vLi4vLi4vcGFnZXMvYWRtaW4vY29uZmlnJyk7XHJcbmltcG9ydCB7IGFic29sdXRlVXJsLCBjaGVja0lzTG9naW4sIGFwaUluc3RhbmNlLCBjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lIH0gZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS91dGlscyc7XHJcbmNvbnN0IEpvZGl0RWRpdG9yID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJqb2RpdC1yZWFjdFwiKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5jb25zdCB7IFRleHQsIFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbCh7IF92aXNpYmxlLCBoaWRlTW9kYWwsIGZldGNoLCB1c2VyLCBkYXRhRWRpdCB9KSB7XHJcbiAgICBsZXQgZGl2UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW2FwaSwgY29udGV4dEhvbGRlcl0gPSBub3RpZmljYXRpb24udXNlTm90aWZpY2F0aW9uKCk7XHJcbiAgICAvLyBjb25zdCBbZGl2UmVmXSA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwYXR0ZXJuTWVudVNlbGVjdGVkLCBzZXRQYXR0ZXJuTWVudVNlbGVjdGVkXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICAgIGNvbnN0IFtwYXR0ZXJuTWVudSwgc2V0UGF0dGVybk1lbnVdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgZWRpdG9yID0gdXNlUmVmKG51bGwpXHJcbiAgICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgxKVxyXG4gICAgY29uc3QgW2lzU3ViTWVudSwgc2V0SXNTdWJNZW51XSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbaXNQYXR0ZXJuTWVudSwgc2V0SVNQYXR0ZXJuTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNTaG93LCBzZXRJc1Nob3ddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuICAgIGNvbnN0IGFjdGl2ZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgYWN0aXZlID8gc2V0QWN0aXZlKDApIDogc2V0QWN0aXZlKDEpO1xyXG4gICAgICAgIC8vIGRpdlJlZi5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xyXG4gICAgICAgIC8vIGRpdlJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gICAgfTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hQYXR0ZXJuKClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGZldGNoUGF0dGVybiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBtZW51RGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAgICAgICAnbWVudS9wYXR0ZXJuLW1lbnUnXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtZW51RGF0YSlcclxuICAgICAgICBzZXRQYXR0ZXJuTWVudShtZW51RGF0YS5kYXRhLnJlc3VsdHMpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcblxyXG5cclxuICAgICAgICAvLyBvcmdhbml6YXRpb25faWQ6IG9yZ2FuaXphdGlvbl9pZCxcclxuICAgICAgICAvLyBtZW51X3RpdGxlOiBtZW51X3RpdGxlLFxyXG4gICAgICAgIC8vIG1lbnVfZGV0YWlsOiBtZW51X2RldGFpbCxcclxuICAgICAgICAvLyBtZW51X3NlcTogbWVudV9zZXEsXHJcbiAgICAgICAgLy8gaGF2ZV9zdWI6IGhhdmVfc3ViLFxyXG4gICAgICAgIC8vIGlzX3Nob3c6IGlzX3Nob3csXHJcbiAgICAgICAgLy8gaXNfcHJpbWFyeV9tZW51OiBpc19wcmltYXJ5X21lbnUsXHJcbiAgICAgICAgLy8gaXNfcGF0dGVybl9tZW51OiBpc19wYXR0ZXJuX21lbnUsXHJcbiAgICAgICAgLy8gcGF0dGVybl9tZW51OiBwYXR0ZXJuX21lbnUsXHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIFwibWVudV9pZFwiOiBkYXRhRWRpdC5tZW51X2lkLFxyXG4gICAgICAgICAgICBcIm1lbnVfdGl0bGVcIjogdmFsdWUubWVudV90aXRsZSxcclxuICAgICAgICAgICAgXCJtZW51X2RldGFpbFwiOiBjb250ZW50ID8gdmFsdWUubWVudV9kZXRhaWwgOiBcIlwiLFxyXG4gICAgICAgICAgICBcIm1lbnVfc2VxXCI6IDk5OTk5OSxcclxuICAgICAgICAgICAgXCJpc19zaG93XCI6IGFjdGl2ZSA/IDEgOiAwLFxyXG4gICAgICAgICAgICBcImlzX3BhdHRlcm5fbWVudVwiOiB2YWx1ZS5wYXR0ZXJuX21lbnUgPT0gMSA/IDAgOiAxLFxyXG4gICAgICAgICAgICBcInBhdHRlcm5fbWVudVwiOiBwYXR0ZXJuTWVudVNlbGVjdGVkLFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkucG9zdCgnL21lbnUvbWVudS1zdWInLCBkYXRhKTtcclxuICAgICAgICBpZiAocmVnaXN0ZXJEYXRhLmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICBvcGVuTm90aWZpY2F0aW9uU3VjY2VzcygpXHJcblxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvcGVuTm90aWZpY2F0aW9uRmFpbChyZWdpc3RlckRhdGEuZGF0YS5tZXNzYWdlKVxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9OIE9LXCIpXHJcblxyXG4gICAgICAgIGhpZGVNb2RhbCgpXHJcbiAgICAgICAgb25SZXNldCgpXHJcbiAgICAgICAgZmV0Y2goKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25TdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgIGFwaS5zdWNjZXNzKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogYOC4muC4seC4meC4l+C4tuC4geC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iGAsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn4Lia4Lix4LiZ4LiX4Li24LiB4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIJyxcclxuICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvcGVuTm90aWZpY2F0aW9uRmFpbCA9IChtZXNzZ2FlKSA9PiB7XHJcbiAgICAgICAgYXBpLmVycm9yKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogYOC4nuC4muC4m+C4seC4jeC4q+C4suC4o+C4sOC4q+C4p+C5iOC4suC4h+C4geC4suC4o+C4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4pWAsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBtZXNzZ2FlLFxyXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdCBvblJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEFjdGl2ZSgxKVxyXG4gICAgICAgIHNldElzU3ViTWVudSgwKVxyXG4gICAgICAgIHNldElTUGF0dGVybk1lbnUoZmFsc2UpXHJcbiAgICAgICAgc2V0UGF0dGVybk1lbnVTZWxlY3RlZCgxKVxyXG4gICAgICAgIHNldElzU2hvdyh0cnVlKVxyXG4gICAgICAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHNlbGVjdGVkICR7dmFsdWV9YCk7XHJcbiAgICAgICAgc2V0UGF0dGVybk1lbnVTZWxlY3RlZCh2YWx1ZSlcclxuICAgICAgICBpZiAoIWlzU3ViTWVudSkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gc2V0SXNTdWJNZW51KDEpXHJcbiAgICAgICAgICAgICAgICAvLyBzZXRJU1BhdHRlcm5NZW51KHRydWUpXHJcbiAgICAgICAgICAgICAgICBzZXRJc1Nob3coZmFsc2UpXHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gc2V0SXNTdWJNZW51KDApXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gc2V0SVNQYXR0ZXJuTWVudShmYWxzZSlcclxuICAgICAgICAgICAgICAgIHNldElzU2hvdyh0cnVlKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2V0TWVudSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuXHJcbiAgICAgICAgICAgIHtjb250ZXh0SG9sZGVyfVxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtcIuC5gOC4nuC4tOC5iOC4oeC5gOC4oeC4meC4ueC4ouC5iOC4reC4ouC4guC4reC4h+C5gOC4oeC4meC4ueC4o+C4reC4hyBcIiArICghZGF0YUVkaXQgPyBcIlwiIDogZGF0YUVkaXQubWVudV90aXRsZSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICAgICAgICAgIGNlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlPXtfdmlzaWJsZX1cclxuICAgICAgICAgICAgICAgIC8vIG9uT2s9eygpID0+IG9uT0soKX1cclxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZU1vZGFsKClcclxuICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmUoMSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRJc1N1Yk1lbnUoMClcclxuICAgICAgICAgICAgICAgICAgICBmb3JtLnJlc2V0RmllbGRzKCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezEwMDB9XHJcbiAgICAgICAgICAgICAgICBmb290ZXI9e251bGx9XHJcbiAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uRmluaXNoPXtvblN1Ym1pdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRNYXJrPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVudV90aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi4LiK4Li34LmI4Lit4LmA4Lih4LiZ4Li54Lii4LmI4Lit4LiiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6IFwibGVmdFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LTIvM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC5gOC4oeC4meC4ueC4ouC5iOC4reC4oicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguIrguLfguYjguK3guYDguKHguJnguLnguKLguYjguK3guKJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gY2xhc3NOYW1lPVwiZmxleCBtdC02IG1iLTAgdy0xLzNcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsIG10LTZcIiA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBsZzp0ZXh0LXJpZ2h0IHctZnVsbCBsZzp3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25SZXNldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNDMkNGRTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQzJDRkUwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMHB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSB3LWZ1bGwgbGc6dy0xLzRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGV4dC1jdXN0b20tYmxhY2sgXCI+4Lij4Li14LmA4LiL4LmH4LiXPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzA1OTY2OScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyMwNTk2NjknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwcHggIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHctZnVsbCBsZzp3LTEvNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbS13aGl0ZSBcIj7guJrguLHguJnguJfguLbguIE8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhdHRlcm5fbWVudVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi4Lij4Li54Lib4LmB4Lia4Lia4LmA4Lih4LiZ4Li54Lii4LmI4Lit4LiiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxPcHRpb24gdmFsdWU9XCIwXCI+4LiB4Liz4Lir4LiZ4LiU4LmA4Lit4LiHPC9PcHRpb24+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhdHRlcm5NZW51ID8gcGF0dGVybk1lbnUubWFwKChvYmplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE9wdGlvbiB2YWx1ZT17b2JqZWN0LnBhdHRlcm5fbWVudV9pZH0+e29iamVjdC5wYXR0ZXJuX3RpdGxlfSAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gY2xhc3NOYW1lPVwiZmxleCBtdC02IG1iLTBcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IHRleHQtbGVmdCBsZzp3LTEvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImlubGluZS1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoIGNoZWNrZWQ9e2FjdGl2ZX0gb25DbGljaz17YWN0aXZlZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm14LTIgdGV4dC1zbVwiPuC4geC4suC4o+C5geC4quC4lOC4h+C4nOC4pTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc1Nob3cgPT0gdHJ1ZSAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVudV9kZXRhaWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLguKPguLLguKLguKXguLDguYDguK3guLXguKLguJQgOlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4Lij4Liy4Lii4Lil4Liw4LmA4Lit4Li14Lii4LiUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEpvZGl0RWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtlZGl0b3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnPXtjb25maWcuY29uZmlnKHVzZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17XCI3MDBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsxfSAvLyB0YWJJbmRleCBvZiB0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17bmV3Q29udGVudCA9PiBzZXRDb250ZW50KG5ld0NvbnRlbnQpfSAvLyBwcmVmZXJyZWQgdG8gdXNlIG9ubHkgdGhpcyBvcHRpb24gdG8gdXBkYXRlIHRoZSBjb250ZW50IGZvciBwZXJmb3JtYW5jZSByZWFzb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e25ld0NvbnRlbnQgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvPn1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6IFwibGVmdFwiLCBjbGVhcjogXCJib3RoXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e2RpdlJlZn0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uLCBGb3JtLCBJbnB1dCwgU3dpdGNoLCBUeXBvZ3JhcGh5LCBTZWxlY3QsIG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnO1xyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuLy8gY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi8uLi8uLi9jb25maWcnKTtcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vLi4vLi4vcGFnZXMvYWRtaW4vY29uZmlnJyk7XHJcbmltcG9ydCB7IGFic29sdXRlVXJsLCBjaGVja0lzTG9naW4sIGFwaUluc3RhbmNlLCBjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lIH0gZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS91dGlscyc7XHJcbmNvbnN0IEpvZGl0RWRpdG9yID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJqb2RpdC1yZWFjdFwiKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5jb25zdCB7IFRleHQsIFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbCh7IGZldGNoLCB1c2VyIH0pIHtcclxuICAgIGxldCBkaXZSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbYXBpLCBjb250ZXh0SG9sZGVyXSA9IG5vdGlmaWNhdGlvbi51c2VOb3RpZmljYXRpb24oKTtcclxuICAgIC8vIGNvbnN0IFtkaXZSZWZdID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3BhdHRlcm5NZW51U2VsZWN0ZWQsIHNldFBhdHRlcm5NZW51U2VsZWN0ZWRdID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gICAgY29uc3QgW3BhdHRlcm5NZW51LCBzZXRQYXR0ZXJuTWVudV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBlZGl0b3IgPSB1c2VSZWYobnVsbClcclxuICAgIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDEpXHJcbiAgICBjb25zdCBbaXNTdWJNZW51LCBzZXRJc1N1Yk1lbnVdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtpc1BhdHRlcm5NZW51LCBzZXRJU1BhdHRlcm5NZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc1Nob3csIHNldElzU2hvd10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG4gICAgY29uc3QgYWN0aXZlZCA9ICgpID0+IHtcclxuICAgICAgICBhY3RpdmUgPyBzZXRBY3RpdmUoMCkgOiBzZXRBY3RpdmUoMSk7XHJcbiAgICAgICAgLy8gZGl2UmVmLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgICAgICAgLy8gZGl2UmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICB9O1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaFBhdHRlcm4oKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgZmV0Y2hQYXR0ZXJuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lbnVEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICAgICAgICdtZW51L3BhdHRlcm4tbWVudSdcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1lbnVEYXRhKVxyXG4gICAgICAgIHNldFBhdHRlcm5NZW51KG1lbnVEYXRhLmRhdGEucmVzdWx0cylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSBhc3luYyAodmFsdWUpID0+IHtcclxuXHJcblxyXG4gICAgICAgIC8vIG9yZ2FuaXphdGlvbl9pZDogb3JnYW5pemF0aW9uX2lkLFxyXG4gICAgICAgIC8vIG1lbnVfdGl0bGU6IG1lbnVfdGl0bGUsXHJcbiAgICAgICAgLy8gbWVudV9kZXRhaWw6IG1lbnVfZGV0YWlsLFxyXG4gICAgICAgIC8vIG1lbnVfc2VxOiBtZW51X3NlcSxcclxuICAgICAgICAvLyBoYXZlX3N1YjogaGF2ZV9zdWIsXHJcbiAgICAgICAgLy8gaXNfc2hvdzogaXNfc2hvdyxcclxuICAgICAgICAvLyBpc19wcmltYXJ5X21lbnU6IGlzX3ByaW1hcnlfbWVudSxcclxuICAgICAgICAvLyBpc19wYXR0ZXJuX21lbnU6IGlzX3BhdHRlcm5fbWVudSxcclxuICAgICAgICAvLyBwYXR0ZXJuX21lbnU6IHBhdHRlcm5fbWVudSxcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgXCJvcmdhbml6YXRpb25faWRcIjogdXNlci5vcmdhbml6YXRpb25faWQsXHJcbiAgICAgICAgICAgIFwibWVudV90aXRsZVwiOiB2YWx1ZS5tZW51X3RpdGxlLFxyXG4gICAgICAgICAgICBcIm1lbnVfZGV0YWlsXCI6IGNvbnRlbnQgPyB2YWx1ZS5tZW51X2RldGFpbCA6IFwiXCIsXHJcbiAgICAgICAgICAgIFwibWVudV9zZXFcIjogOTk5OTk5LFxyXG4gICAgICAgICAgICBcImhhdmVfc3ViXCI6IGlzU3ViTWVudSA/IDEgOiAwLFxyXG4gICAgICAgICAgICBcImlzX3Nob3dcIjogYWN0aXZlID8gMSA6IDAsXHJcbiAgICAgICAgICAgIFwiaXNfcHJpbWFyeV9tZW51XCI6IDAsXHJcbiAgICAgICAgICAgIFwiaXNfcGF0dGVybl9tZW51XCI6IHZhbHVlLnBhdHRlcm5fbWVudSA9PSAxID8gMCA6IDEsXHJcbiAgICAgICAgICAgIFwicGF0dGVybl9tZW51XCI6IHBhdHRlcm5NZW51U2VsZWN0ZWQsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5wb3N0KCcvbWVudScsIGRhdGEpO1xyXG4gICAgICAgIGlmIChyZWdpc3RlckRhdGEuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIG9wZW5Ob3RpZmljYXRpb25TdWNjZXNzKClcclxuXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9wZW5Ob3RpZmljYXRpb25GYWlsKHJlZ2lzdGVyRGF0YS5kYXRhLm1lc3NhZ2UpXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT04gT0tcIilcclxuICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKVxyXG4gICAgICAgIG9uUmVzZXQoKVxyXG4gICAgICAgIGZldGNoKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcGVuTm90aWZpY2F0aW9uU3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICBhcGkuc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGDguJrguLHguJnguJfguLbguIHguKHguLnguKXguKrguLPguYDguKPguYfguIhgLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ+C4muC4seC4meC4l+C4tuC4geC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iCcsXHJcbiAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvbkZhaWwgPSAobWVzc2dhZSkgPT4ge1xyXG4gICAgICAgIGFwaS5lcnJvcih7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGDguJ7guJrguJvguLHguI3guKvguLLguKPguLDguKvguKfguYjguLLguIfguIHguLLguKPguJrguLHguJnguJfguLbguIHguILguYnguK3guKHguLnguKVgLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogbWVzc2dhZSxcclxuICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3Qgb25SZXNldCA9ICgpID0+IHtcclxuICAgICAgICBzZXRBY3RpdmUoMSlcclxuICAgICAgICBzZXRJc1N1Yk1lbnUoMClcclxuICAgICAgICBzZXRJU1BhdHRlcm5NZW51KGZhbHNlKVxyXG4gICAgICAgIHNldFBhdHRlcm5NZW51U2VsZWN0ZWQoMSlcclxuICAgICAgICBzZXRJc1Nob3codHJ1ZSlcclxuICAgICAgICBmb3JtLnJlc2V0RmllbGRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZCAke3ZhbHVlfWApO1xyXG4gICAgICAgIHNldFBhdHRlcm5NZW51U2VsZWN0ZWQodmFsdWUpXHJcbiAgICAgICAgaWYgKCFpc1N1Yk1lbnUpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vIHNldElzU3ViTWVudSgxKVxyXG4gICAgICAgICAgICAgICAgLy8gc2V0SVNQYXR0ZXJuTWVudSh0cnVlKVxyXG4gICAgICAgICAgICAgICAgc2V0SXNTaG93KGZhbHNlKVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHNldElzU3ViTWVudSgwKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNldElTUGF0dGVybk1lbnUoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBzZXRJc1Nob3codHJ1ZSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNldE1lbnUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGUodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC00IGxnOmlubGluZS1mbGV4IGxnOnctYXV0byB3LWZ1bGwgcHgtMiBweS0yIHJvdW5kZWQgaC04IHRleHQtd2hpdGUgYmctZ3JlZW4tNjAwIGZvbnQtYm9sZCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaG92ZXI6YmctZ3JlZW4tNjAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDguYDguJ7guLTguYjguKHguYDguKHguJnguLnguKPguK3guIdcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICB7Y29udGV4dEhvbGRlcn1cclxuICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIuC5gOC4nuC4tOC5iOC4oeC5gOC4oeC4meC4ueC4o+C4reC4h1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICAgICAgICAgIGNlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgLy8gb25Paz17KCkgPT4gb25PSygpfVxyXG4gICAgICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZSgxKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldElzU3ViTWVudSgwKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17MTAwMH1cclxuICAgICAgICAgICAgICAgIGZvb3Rlcj17bnVsbH1cclxuICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2ljXCJcclxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25GaW5pc2g9e29uU3VibWl0SGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZE1hcms9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZW51X3RpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLguIrguLfguYjguK3guYDguKHguJnguLnguKPguK3guIdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Zsb2F0OlwibGVmdFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctMi8zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4LmA4Lih4LiZ4Li54Lij4Lit4LiHJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC5gOC4oeC4meC4ueC4o+C4reC4h1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBjbGFzc05hbWU9XCJmbGV4IG10LTYgbWItMCB3LTEvM1wiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGwgbXQtNlwiID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGxnOnRleHQtcmlnaHQgdy1mdWxsIGxnOnctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0MyQ0ZFMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDMkNGRTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwcHggIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHctZnVsbCBsZzp3LTEvNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbS1ibGFjayBcIj7guKPguLXguYDguIvguYfguJc8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDU5NjY5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzA1OTY2OScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzBweCAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUgIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdy1mdWxsIGxnOnctMS80XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRleHQtY3VzdG9tLXdoaXRlIFwiPuC4muC4seC4meC4l+C4tuC4gTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGF0dGVybl9tZW51XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLguKPguLnguJvguYHguJrguJrguYDguKHguJnguLnguKPguK3guIdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPE9wdGlvbiB2YWx1ZT1cIjBcIj7guIHguLPguKvguJnguJTguYDguK3guIc8L09wdGlvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGF0dGVybk1lbnUgPyBwYXR0ZXJuTWVudS5tYXAoKG9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8T3B0aW9uIHZhbHVlPXtvYmplY3QucGF0dGVybl9tZW51X2lkfT57b2JqZWN0LnBhdHRlcm5fdGl0bGV9ICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBjbGFzc05hbWU9XCJmbGV4IG10LTYgbWItMFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggdGV4dC1sZWZ0IGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggY2hlY2tlZD17YWN0aXZlfSBvbkNsaWNrPXthY3RpdmVkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXgtMiB0ZXh0LXNtXCI+4LiB4Liy4Lij4LmB4Liq4LiU4LiH4Lic4LilPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggY2hlY2tlZD17aXNTdWJNZW51fSBvbkNsaWNrPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc1N1Yk1lbnUodmFsdWUgPyAxIDogMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGF0dGVybk1lbnVTZWxlY3RlZCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzU2hvdyh2YWx1ZSA/IGZhbHNlIDogdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm14LTIgdGV4dC1zbVwiPuC4leC5ieC4reC4h+C4geC4suC4o+C4quC4o+C5ieC4suC4hyDguYDguKHguJnguLnguKLguYjguK3guKI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICB7aXNTaG93ID09IHRydWUgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lbnVfZGV0YWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi4Lij4Liy4Lii4Lil4Liw4LmA4Lit4Li14Lii4LiUIDpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4o+C4suC4ouC4peC4sOC5gOC4reC4teC4ouC4lCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxKb2RpdEVkaXRvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZWRpdG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZz17Y29uZmlnLmNvbmZpZyh1c2VyKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiNzAwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MX0gLy8gdGFiSW5kZXggb2YgdGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e25ld0NvbnRlbnQgPT4gc2V0Q29udGVudChuZXdDb250ZW50KX0gLy8gcHJlZmVycmVkIHRvIHVzZSBvbmx5IHRoaXMgb3B0aW9uIHRvIHVwZGF0ZSB0aGUgY29udGVudCBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtuZXdDb250ZW50ID0+IHsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Lz59XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiBcImxlZnRcIiwgY2xlYXI6IFwiYm90aFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtkaXZSZWZ9PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiwgRm9ybSwgSW5wdXQsIFN3aXRjaCwgVHlwb2dyYXBoeSwgU2VsZWN0LCBub3RpZmljYXRpb24gfSBmcm9tICdhbnRkJztcclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcbi8vIGNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4vLi4vLi4vY29uZmlnJyk7XHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4uLy4uLy4uL3BhZ2VzL2FkbWluL2NvbmZpZycpO1xyXG5pbXBvcnQgeyBhYnNvbHV0ZVVybCwgY2hlY2tJc0xvZ2luLCBhcGlJbnN0YW5jZSwgY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZSB9IGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvdXRpbHMnO1xyXG5jb25zdCBKb2RpdEVkaXRvciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiam9kaXQtcmVhY3RcIiksIHsgc3NyOiBmYWxzZSB9KTtcclxuY29uc3QgeyBUZXh0LCBUaXRsZSB9ID0gVHlwb2dyYXBoeTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWwoeyBfdmlzaWJsZSwgaGlkZU1vZGFsLCBmZXRjaCwgdXNlciwgZGF0YUVkaXQgfSkge1xyXG4gICAgbGV0IGRpdlJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFthcGksIGNvbnRleHRIb2xkZXJdID0gbm90aWZpY2F0aW9uLnVzZU5vdGlmaWNhdGlvbigpO1xyXG4gICAgLy8gY29uc3QgW2RpdlJlZl0gPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcGF0dGVybk1lbnVTZWxlY3RlZCwgc2V0UGF0dGVybk1lbnVTZWxlY3RlZF0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgICBjb25zdCBbcGF0dGVybk1lbnUsIHNldFBhdHRlcm5NZW51XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IGVkaXRvciA9IHVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMSlcclxuICAgIGNvbnN0IFtpc1N1Yk1lbnUsIHNldElzU3ViTWVudV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW2lzU2hvdywgc2V0SXNTaG93XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2ZpZWxkcywgc2V0RmllbGRzXSA9IHVzZVN0YXRlKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFsnaW50cm9fdGl0bGUnXSxcclxuICAgICAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdKTtcclxuICAgIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG4gICAgY29uc3QgYWN0aXZlZCA9ICgpID0+IHtcclxuICAgICAgICBhY3RpdmUgPyBzZXRBY3RpdmUoMCkgOiBzZXRBY3RpdmUoMSk7XHJcbiAgICAgICAgLy8gZGl2UmVmLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgICAgICAgLy8gZGl2UmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICB9O1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRWaXNpYmxlKF92aXNpYmxlKVxyXG4gICAgICAgIGZldGNoUGF0dGVybigpXHJcbiAgICAgICAgZmV0Y2hFZGl0RGF0YSgpXHJcbiAgICB9LCBbZGF0YUVkaXRdKVxyXG5cclxuICAgIGNvbnN0IGZldGNoUGF0dGVybiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBtZW51RGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAgICAgICAnbWVudS9wYXR0ZXJuLW1lbnUnXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtZW51RGF0YSlcclxuICAgICAgICBzZXRQYXR0ZXJuTWVudShtZW51RGF0YS5kYXRhLnJlc3VsdHMpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmV0Y2hFZGl0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAoZGF0YUVkaXQpIHtcclxuICAgICAgICAgICAgc2V0QWN0aXZlKGRhdGFFZGl0LmlzX3Nob3cpXHJcbiAgICAgICAgICAgIHNldElzU3ViTWVudShkYXRhRWRpdC5oYXZlX3N1YilcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhRWRpdCB1c2VFZmZlY3RcIilcclxuICAgICAgICAgICAgc2V0UGF0dGVybk1lbnVTZWxlY3RlZChkYXRhRWRpdC5wYXR0ZXJuX21lbnUpXHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YUVkaXQucGF0dGVybl9tZW51ICE9IDEpIHtcclxuICAgICAgICAgICAgICAgIHNldElzU2hvdyhmYWxzZSlcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1Nob3codHJ1ZSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgc2V0RmllbGRzKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBbJ21lbnVfdGl0bGUnXSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKCFkYXRhRWRpdCA/IFwiXCIgOiBkYXRhRWRpdC5tZW51X3RpdGxlKSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogWydwYXR0ZXJuX21lbnUnXSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKCFkYXRhRWRpdCA/IFwiXCIgOiBkYXRhRWRpdC5wYXR0ZXJuX21lbnUpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBbJ21lbnVfZGV0YWlsJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICghZGF0YUVkaXQgPyBcIlwiIDogZGF0YUVkaXQubWVudV9kZXRhaWwpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0SGFuZGxlciA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG5cclxuXHJcbiAgICAgICAgLy8gb3JnYW5pemF0aW9uX2lkOiBvcmdhbml6YXRpb25faWQsXHJcbiAgICAgICAgLy8gbWVudV90aXRsZTogbWVudV90aXRsZSxcclxuICAgICAgICAvLyBtZW51X2RldGFpbDogbWVudV9kZXRhaWwsXHJcbiAgICAgICAgLy8gbWVudV9zZXE6IG1lbnVfc2VxLFxyXG4gICAgICAgIC8vIGhhdmVfc3ViOiBoYXZlX3N1YixcclxuICAgICAgICAvLyBpc19zaG93OiBpc19zaG93LFxyXG4gICAgICAgIC8vIGlzX3ByaW1hcnlfbWVudTogaXNfcHJpbWFyeV9tZW51LFxyXG4gICAgICAgIC8vIGlzX3BhdHRlcm5fbWVudTogaXNfcGF0dGVybl9tZW51LFxyXG4gICAgICAgIC8vIHBhdHRlcm5fbWVudTogcGF0dGVybl9tZW51LFxyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBcIm1lbnVfdGl0bGVcIjogdmFsdWUubWVudV90aXRsZSxcclxuICAgICAgICAgICAgXCJtZW51X2RldGFpbFwiOiBjb250ZW50ID8gdmFsdWUubWVudV9kZXRhaWwgOiBcIlwiLFxyXG4gICAgICAgICAgICAvLyBcIm1lbnVfc2VxXCI6IDAsXHJcbiAgICAgICAgICAgIFwiaXNfc2hvd1wiOiBhY3RpdmUgPyAxIDogMCxcclxuICAgICAgICAgICAgXCJpc19wYXR0ZXJuX21lbnVcIjogdmFsdWUucGF0dGVybl9tZW51ID09IDEgPyAwIDogMSxcclxuICAgICAgICAgICAgXCJwYXR0ZXJuX21lbnVcIjogcGF0dGVybk1lbnVTZWxlY3RlZCxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICBjb25zdCByZWdpc3RlckRhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLnB1dCgnL21lbnUtc3ViLycgKyAoZGF0YUVkaXQgPyBkYXRhRWRpdC5tZW51X3N1Yl9pZCA6IDApLCBkYXRhKTtcclxuICAgICAgICBpZiAocmVnaXN0ZXJEYXRhLmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICBvcGVuTm90aWZpY2F0aW9uU3VjY2VzcygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3Blbk5vdGlmaWNhdGlvbkZhaWwocmVnaXN0ZXJEYXRhLmRhdGEubWVzc2FnZSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9OIE9LXCIpXHJcbiAgICAgICAgLy8gc2V0VmlzaWJsZShmYWxzZSlcclxuICAgICAgICAvLyBvblJlc2V0KClcclxuICAgICAgICBmZXRjaCgpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgYXBpLnN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBg4Lia4Lix4LiZ4LiX4Li24LiB4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIYCxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICfguJrguLHguJnguJfguLbguIHguKHguLnguKXguKrguLPguYDguKPguYfguIgnLFxyXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25GYWlsID0gKG1lc3NnYWUpID0+IHtcclxuICAgICAgICBhcGkuZXJyb3Ioe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBg4Lie4Lia4Lib4Lix4LiN4Lir4Liy4Lij4Liw4Lir4Lin4LmI4Liy4LiH4LiB4Liy4Lij4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54LilYCxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IG1lc3NnYWUsXHJcbiAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IG9uUmVzZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QWN0aXZlKGRhdGFFZGl0LmlzX3Nob3cpXHJcbiAgICAgICAgc2V0SXNTdWJNZW51KGRhdGFFZGl0LmhhdmVfc3ViKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YUVkaXQgdXNlRWZmZWN0XCIpXHJcbiAgICAgICAgc2V0UGF0dGVybk1lbnVTZWxlY3RlZChkYXRhRWRpdC5wYXR0ZXJuX21lbnUpXHJcblxyXG4gICAgICAgIGlmIChkYXRhRWRpdC5wYXR0ZXJuX21lbnUgIT0gMSkge1xyXG4gICAgICAgICAgICBzZXRJc1Nob3coZmFsc2UpXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldElzU2hvdyh0cnVlKVxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgc2V0RmllbGRzKFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogWydtZW51X3RpdGxlJ10sXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogKCFkYXRhRWRpdCA/IFwiXCIgOiBkYXRhRWRpdC5tZW51X3RpdGxlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogWydwYXR0ZXJuX21lbnUnXSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAoIWRhdGFFZGl0ID8gXCJcIiA6IGRhdGFFZGl0LnBhdHRlcm5fbWVudSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFsnbWVudV9kZXRhaWwnXSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAoIWRhdGFFZGl0ID8gXCJcIiA6IGRhdGFFZGl0Lm1lbnVfZGV0YWlsKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWQgJHt2YWx1ZX1gKTtcclxuICAgICAgICBzZXRQYXR0ZXJuTWVudVNlbGVjdGVkKHZhbHVlKVxyXG5cclxuICAgICAgICBpZiAodmFsdWUgIT0gMSkge1xyXG4gICAgICAgICAgICAvLyBzZXRJc1N1Yk1lbnUoMSlcclxuICAgICAgICAgICAgLy8gc2V0SVNQYXR0ZXJuTWVudSh0cnVlKVxyXG4gICAgICAgICAgICBzZXRJc1Nob3coZmFsc2UpXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHNldElzU3ViTWVudSgwKVxyXG5cclxuICAgICAgICAgICAgLy8gc2V0SVNQYXR0ZXJuTWVudShmYWxzZSlcclxuICAgICAgICAgICAgc2V0SXNTaG93KHRydWUpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzZXRNZW51KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtjb250ZXh0SG9sZGVyfVxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtcIuC5geC4geC5ieC5hOC4guC5gOC4oeC4meC4ueC4ouC5iOC4reC4oiBcIiArICghZGF0YUVkaXQgPyBcIlwiIDogZGF0YUVkaXQubWVudV90aXRsZSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICAgICAgICAgIGNlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlPXtfdmlzaWJsZX1cclxuICAgICAgICAgICAgICAgIC8vIG9uT2s9eygpID0+IG9uT0soKX1cclxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZU1vZGFsKClcclxuICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmUoMSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRJc1N1Yk1lbnUoMClcclxuICAgICAgICAgICAgICAgICAgICBmb3JtLnJlc2V0RmllbGRzKCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezEwMDB9XHJcbiAgICAgICAgICAgICAgICBmb290ZXI9e251bGx9XHJcbiAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uRmluaXNoPXtvblN1Ym1pdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRNYXJrPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzPXtmaWVsZHN9XHJcbiAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lbnVfdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuC4iuC4t+C5iOC4reC5gOC4oeC4meC4ueC4ouC5iOC4reC4olwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guYDguKHguJnguLnguKLguYjguK3guKInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiK4Li34LmI4Lit4LmA4Lih4LiZ4Li5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXR0ZXJuX21lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuC4o+C4ueC4m+C5geC4muC4muC5gOC4oeC4meC4ueC4ouC5iOC4reC4olwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8T3B0aW9uIHZhbHVlPVwiMFwiPuC4geC4s+C4q+C4meC4lOC5gOC4reC4hzwvT3B0aW9uPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXR0ZXJuTWVudSA/IHBhdHRlcm5NZW51Lm1hcCgob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxPcHRpb24gdmFsdWU9e29iamVjdC5wYXR0ZXJuX21lbnVfaWR9PntvYmplY3QucGF0dGVybl90aXRsZX0gIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGNsYXNzTmFtZT1cImZsZXggbXQtNiBtYi0wXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCB0ZXh0LWxlZnQgbGc6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpbmxpbmUtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXthY3RpdmV9IG9uQ2xpY2s9e2FjdGl2ZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteC0yIHRleHQtc21cIj7guIHguLLguKPguYHguKrguJTguIfguJzguKU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggY2hlY2tlZD17aXNTdWJNZW51fSBvbkNsaWNrPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc1N1Yk1lbnUodmFsdWUgPyAxIDogMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGF0dGVybk1lbnVTZWxlY3RlZCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzU2hvdyh2YWx1ZSA/IGZhbHNlIDogdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXgtMiB0ZXh0LXNtXCI+4LiV4LmJ4Lit4LiH4LiB4Liy4Lij4Liq4Lij4LmJ4Liy4LiHIOC5gOC4oeC4meC4ueC4ouC5iOC4reC4ojwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICB7aXNTaG93ID09IHRydWUgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lbnVfZGV0YWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi4Lij4Liy4Lii4Lil4Liw4LmA4Lit4Li14Lii4LiUIDpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4o+C4suC4ouC4peC4sOC5gOC4reC4teC4ouC4lCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxKb2RpdEVkaXRvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZWRpdG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZz17Y29uZmlnLmNvbmZpZyh1c2VyKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiNzAwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MX0gLy8gdGFiSW5kZXggb2YgdGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e25ld0NvbnRlbnQgPT4gc2V0Q29udGVudChuZXdDb250ZW50KX0gLy8gcHJlZmVycmVkIHRvIHVzZSBvbmx5IHRoaXMgb3B0aW9uIHRvIHVwZGF0ZSB0aGUgY29udGVudCBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtuZXdDb250ZW50ID0+IHsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Lz59XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGNsYXNzTmFtZT1cImZsZXggbXQtNiBtYi0wXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGxnOnRleHQtcmlnaHQgdy1mdWxsIGxnOnctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0MyQ0ZFMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNDMkNGRTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwcHggIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHctZnVsbCBsZzp3LTEvNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbS1ibGFjayBcIj7guKPguLXguYDguIvguYfguJc8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDU5NjY5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzA1OTY2OScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzBweCAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUgIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdy1mdWxsIGxnOnctMS80XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRleHQtY3VzdG9tLXdoaXRlIFwiPuC4muC4seC4meC4l+C4tuC4gTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6IFwibGVmdFwiLCBjbGVhcjogXCJib3RoXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e2RpdlJlZn0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uLCBGb3JtLCBJbnB1dCwgU3dpdGNoLCBUeXBvZ3JhcGh5LCBTZWxlY3QsIG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnO1xyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuLy8gY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi8uLi8uLi9jb25maWcnKTtcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vLi4vLi4vcGFnZXMvYWRtaW4vY29uZmlnJyk7XHJcbmltcG9ydCB7IGFic29sdXRlVXJsLCBjaGVja0lzTG9naW4sIGFwaUluc3RhbmNlLCBjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lIH0gZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS91dGlscyc7XHJcbmNvbnN0IEpvZGl0RWRpdG9yID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJqb2RpdC1yZWFjdFwiKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5jb25zdCB7IFRleHQsIFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbCh7IF92aXNpYmxlLCBoaWRlRWRpdE1vZGFsLCBmZXRjaCwgdXNlciwgZGF0YUVkaXQgfSkge1xyXG4gICAgbGV0IGRpdlJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFthcGksIGNvbnRleHRIb2xkZXJdID0gbm90aWZpY2F0aW9uLnVzZU5vdGlmaWNhdGlvbigpO1xyXG4gICAgLy8gY29uc3QgW2RpdlJlZl0gPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcGF0dGVybk1lbnVTZWxlY3RlZCwgc2V0UGF0dGVybk1lbnVTZWxlY3RlZF0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgICBjb25zdCBbcGF0dGVybk1lbnUsIHNldFBhdHRlcm5NZW51XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IGVkaXRvciA9IHVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMSlcclxuICAgIGNvbnN0IFtpc1N1Yk1lbnUsIHNldElzU3ViTWVudV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW2lzU2hvdywgc2V0SXNTaG93XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2ZpZWxkcywgc2V0RmllbGRzXSA9IHVzZVN0YXRlKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFsnaW50cm9fdGl0bGUnXSxcclxuICAgICAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdKTtcclxuICAgIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG4gICAgY29uc3QgYWN0aXZlZCA9ICgpID0+IHtcclxuICAgICAgICBhY3RpdmUgPyBzZXRBY3RpdmUoMCkgOiBzZXRBY3RpdmUoMSk7XHJcbiAgICAgICAgLy8gZGl2UmVmLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgICAgICAgLy8gZGl2UmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICB9O1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRWaXNpYmxlKF92aXNpYmxlKVxyXG4gICAgICAgIGZldGNoUGF0dGVybigpXHJcbiAgICAgICAgZmV0Y2hFZGl0RGF0YSgpXHJcbiAgICB9LCBbZGF0YUVkaXRdKVxyXG5cclxuICAgIGNvbnN0IGZldGNoUGF0dGVybiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBtZW51RGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAgICAgICAnbWVudS9wYXR0ZXJuLW1lbnUnXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtZW51RGF0YSlcclxuICAgICAgICBzZXRQYXR0ZXJuTWVudShtZW51RGF0YS5kYXRhLnJlc3VsdHMpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmV0Y2hFZGl0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAoZGF0YUVkaXQpIHtcclxuICAgICAgICAgICAgc2V0QWN0aXZlKGRhdGFFZGl0LmlzX3Nob3cpXHJcbiAgICAgICAgICAgIHNldElzU3ViTWVudShkYXRhRWRpdC5oYXZlX3N1YilcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhRWRpdCB1c2VFZmZlY3RcIilcclxuICAgICAgICAgICAgc2V0UGF0dGVybk1lbnVTZWxlY3RlZChkYXRhRWRpdC5wYXR0ZXJuX21lbnUpXHJcbiAgICAgICAgICAgIGlmIChkYXRhRWRpdC5oYXZlX3N1YiA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YUVkaXQucGF0dGVybl9tZW51ICE9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJc1Nob3coZmFsc2UpXHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJc1Nob3codHJ1ZSlcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1Nob3coZmFsc2UpXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgc2V0RmllbGRzKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBbJ21lbnVfdGl0bGUnXSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKCFkYXRhRWRpdCA/IFwiXCIgOiBkYXRhRWRpdC5tZW51X3RpdGxlKSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogWydwYXR0ZXJuX21lbnUnXSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKCFkYXRhRWRpdCA/IFwiXCIgOiBkYXRhRWRpdC5wYXR0ZXJuX21lbnUpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBbJ21lbnVfZGV0YWlsJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICghZGF0YUVkaXQgPyBcIlwiIDogZGF0YUVkaXQubWVudV9kZXRhaWwpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0SGFuZGxlciA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG5cclxuXHJcbiAgICAgICAgLy8gb3JnYW5pemF0aW9uX2lkOiBvcmdhbml6YXRpb25faWQsXHJcbiAgICAgICAgLy8gbWVudV90aXRsZTogbWVudV90aXRsZSxcclxuICAgICAgICAvLyBtZW51X2RldGFpbDogbWVudV9kZXRhaWwsXHJcbiAgICAgICAgLy8gbWVudV9zZXE6IG1lbnVfc2VxLFxyXG4gICAgICAgIC8vIGhhdmVfc3ViOiBoYXZlX3N1YixcclxuICAgICAgICAvLyBpc19zaG93OiBpc19zaG93LFxyXG4gICAgICAgIC8vIGlzX3ByaW1hcnlfbWVudTogaXNfcHJpbWFyeV9tZW51LFxyXG4gICAgICAgIC8vIGlzX3BhdHRlcm5fbWVudTogaXNfcGF0dGVybl9tZW51LFxyXG4gICAgICAgIC8vIHBhdHRlcm5fbWVudTogcGF0dGVybl9tZW51LFxyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBcIm1lbnVfdGl0bGVcIjogdmFsdWUubWVudV90aXRsZSxcclxuICAgICAgICAgICAgXCJtZW51X2RldGFpbFwiOiBjb250ZW50ID8gdmFsdWUubWVudV9kZXRhaWwgOiBcIlwiLFxyXG4gICAgICAgICAgICAvLyBcIm1lbnVfc2VxXCI6IDAsXHJcbiAgICAgICAgICAgIFwiaGF2ZV9zdWJcIjogaXNTdWJNZW51ID8gMSA6IDAsXHJcbiAgICAgICAgICAgIFwiaXNfc2hvd1wiOiBhY3RpdmUgPyAxIDogMCxcclxuICAgICAgICAgICAgXCJpc19wcmltYXJ5X21lbnVcIjogMCxcclxuICAgICAgICAgICAgXCJpc19wYXR0ZXJuX21lbnVcIjogdmFsdWUucGF0dGVybl9tZW51ID09IDEgPyAwIDogMSxcclxuICAgICAgICAgICAgXCJwYXR0ZXJuX21lbnVcIjogcGF0dGVybk1lbnVTZWxlY3RlZCxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICBjb25zdCByZWdpc3RlckRhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLnB1dCgnL21lbnUvJyArIChkYXRhRWRpdCA/IGRhdGFFZGl0Lm1lbnVfaWQgOiAwKSwgZGF0YSk7XHJcbiAgICAgICAgaWYgKHJlZ2lzdGVyRGF0YS5kYXRhLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgb3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9wZW5Ob3RpZmljYXRpb25GYWlsKHJlZ2lzdGVyRGF0YS5kYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPTiBPS1wiKVxyXG4gICAgICAgIC8vIHNldFZpc2libGUoZmFsc2UpXHJcbiAgICAgICAgLy8gb25SZXNldCgpXHJcbiAgICAgICAgZmV0Y2goKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25TdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgIGFwaS5zdWNjZXNzKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogYOC4muC4seC4meC4l+C4tuC4geC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iGAsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn4Lia4Lix4LiZ4LiX4Li24LiB4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIJyxcclxuICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvcGVuTm90aWZpY2F0aW9uRmFpbCA9IChtZXNzZ2FlKSA9PiB7XHJcbiAgICAgICAgYXBpLmVycm9yKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogYOC4nuC4muC4m+C4seC4jeC4q+C4suC4o+C4sOC4q+C4p+C5iOC4suC4h+C4geC4suC4o+C4muC4seC4meC4l+C4tuC4geC4guC5ieC4reC4oeC4ueC4pWAsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBtZXNzZ2FlLFxyXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdCBvblJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEFjdGl2ZShkYXRhRWRpdC5pc19zaG93KVxyXG4gICAgICAgIHNldElzU3ViTWVudShkYXRhRWRpdC5oYXZlX3N1YilcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRhdGFFZGl0IHVzZUVmZmVjdFwiKVxyXG4gICAgICAgIHNldFBhdHRlcm5NZW51U2VsZWN0ZWQoZGF0YUVkaXQucGF0dGVybl9tZW51KVxyXG4gICAgICAgIGlmIChkYXRhRWRpdC5oYXZlX3N1YiA9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhRWRpdC5wYXR0ZXJuX21lbnUgIT0gMSkge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNTaG93KGZhbHNlKVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldElzU2hvdyh0cnVlKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldElzU2hvdyhmYWxzZSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgc2V0RmllbGRzKFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogWydtZW51X3RpdGxlJ10sXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogKCFkYXRhRWRpdCA/IFwiXCIgOiBkYXRhRWRpdC5tZW51X3RpdGxlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogWydwYXR0ZXJuX21lbnUnXSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAoIWRhdGFFZGl0ID8gXCJcIiA6IGRhdGFFZGl0LnBhdHRlcm5fbWVudSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFsnbWVudV9kZXRhaWwnXSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAoIWRhdGFFZGl0ID8gXCJcIiA6IGRhdGFFZGl0Lm1lbnVfZGV0YWlsKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWQgJHt2YWx1ZX1gKTtcclxuICAgICAgICBzZXRQYXR0ZXJuTWVudVNlbGVjdGVkKHZhbHVlKVxyXG4gICAgICAgIGlmICghaXNTdWJNZW51KSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzZXRJc1N1Yk1lbnUoMSlcclxuICAgICAgICAgICAgICAgIC8vIHNldElTUGF0dGVybk1lbnUodHJ1ZSlcclxuICAgICAgICAgICAgICAgIHNldElzU2hvdyhmYWxzZSlcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzZXRJc1N1Yk1lbnUoMClcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBzZXRJU1BhdHRlcm5NZW51KGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgc2V0SXNTaG93KHRydWUpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNldE1lbnUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2NvbnRleHRIb2xkZXJ9XHJcbiAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e1wi4LmB4LiB4LmJ4LmE4LiC4LmA4Lih4LiZ4Li54Lij4Lit4LiHIFwiICsgKCFkYXRhRWRpdCA/IFwiXCIgOiBkYXRhRWRpdC5tZW51X3RpdGxlKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxyXG4gICAgICAgICAgICAgICAgY2VudGVyZWRcclxuICAgICAgICAgICAgICAgIHZpc2libGU9e192aXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgLy8gb25Paz17KCkgPT4gb25PSygpfVxyXG4gICAgICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBoaWRlRWRpdE1vZGFsKClcclxuICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmUoMSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRJc1N1Yk1lbnUoMClcclxuICAgICAgICAgICAgICAgICAgICBmb3JtLnJlc2V0RmllbGRzKCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezEwMDB9XHJcbiAgICAgICAgICAgICAgICBmb290ZXI9e251bGx9XHJcbiAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uRmluaXNoPXtvblN1Ym1pdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRNYXJrPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzPXtmaWVsZHN9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVudV90aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi4LiK4Li34LmI4Lit4LmA4Lih4LiZ4Li54Lij4Lit4LiHXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctMi8zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmbG9hdDpcImxlZnRcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC5gOC4oeC4meC4ueC4o+C4reC4hycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguIrguLfguYjguK3guYDguKHguJnguLnguKPguK3guIdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gY2xhc3NOYW1lPVwiZmxleCBtdC02IG1iLTAgdy0xLzNcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsIG10LTZcIiA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBsZzp0ZXh0LXJpZ2h0IHctZnVsbCBsZzp3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25SZXNldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNDMkNGRTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQzJDRkUwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMHB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSB3LWZ1bGwgbGc6dy0xLzRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGV4dC1jdXN0b20tYmxhY2sgXCI+4Lij4Li14LmA4LiL4LmH4LiXPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzA1OTY2OScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyMwNTk2NjknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwcHggIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHctZnVsbCBsZzp3LTEvNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbS13aGl0ZSBcIj7guJrguLHguJnguJfguLbguIE8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGF0dGVybl9tZW51XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLguKPguLnguJvguYHguJrguJrguYDguKHguJnguLnguKPguK3guIdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPE9wdGlvbiB2YWx1ZT1cIjBcIj7guIHguLPguKvguJnguJTguYDguK3guIc8L09wdGlvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGF0dGVybk1lbnUgPyBwYXR0ZXJuTWVudS5tYXAoKG9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8T3B0aW9uIHZhbHVlPXtvYmplY3QucGF0dGVybl9tZW51X2lkfT57b2JqZWN0LnBhdHRlcm5fdGl0bGV9ICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBjbGFzc05hbWU9XCJmbGV4IG10LTYgbWItMFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggdGV4dC1sZWZ0IGxnOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggY2hlY2tlZD17YWN0aXZlfSBvbkNsaWNrPXthY3RpdmVkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXgtMiB0ZXh0LXNtXCI+4LiB4Liy4Lij4LmB4Liq4LiU4LiH4Lic4LilPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggY2hlY2tlZD17aXNTdWJNZW51fSBvbkNsaWNrPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc1N1Yk1lbnUodmFsdWUgPyAxIDogMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGF0dGVybk1lbnVTZWxlY3RlZCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzU2hvdyh2YWx1ZSA/IGZhbHNlIDogdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXgtMiB0ZXh0LXNtXCI+4LiV4LmJ4Lit4LiH4LiB4Liy4Lij4Liq4Lij4LmJ4Liy4LiHIOC5gOC4oeC4meC4ueC4ouC5iOC4reC4ojwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc1Nob3cgPT0gdHJ1ZSAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVudV9kZXRhaWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLguKPguLLguKLguKXguLDguYDguK3guLXguKLguJQgOlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4Lij4Liy4Lii4Lil4Liw4LmA4Lit4Li14Lii4LiUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEpvZGl0RWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtlZGl0b3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnPXtjb25maWcuY29uZmlnKHVzZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17XCI3MDBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsxfSAvLyB0YWJJbmRleCBvZiB0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17bmV3Q29udGVudCA9PiBzZXRDb250ZW50KG5ld0NvbnRlbnQpfSAvLyBwcmVmZXJyZWQgdG8gdXNlIG9ubHkgdGhpcyBvcHRpb24gdG8gdXBkYXRlIHRoZSBjb250ZW50IGZvciBwZXJmb3JtYW5jZSByZWFzb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e25ld0NvbnRlbnQgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvPn1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6IFwibGVmdFwiLCBjbGVhcjogXCJib3RoXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e2RpdlJlZn0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnU7XHJcblxyXG5jb25zdCBUb3BpY01lbnUgPSAoeyB0b3BpY3MsIHNlbGVjdGVkS2V5LCBjaGFuZ2VTZWxlY3RlZEtleSwgc2VsZWN0ZWRTdWJLZXkgfSkgPT4ge1xyXG4gICAgY29uc3Qgc3R5bGVkVG9waWNzID0gW107XHJcbiAgICB0b3BpY3MuZm9yRWFjaCgodG9waWMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKHRvcGljLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlZFRvcGljc0NoaWxkcmVuID0gW107XHJcblxyXG4gICAgICAgICAgICB0b3BpYy5jaGlsZHJlbi5mb3JFYWNoKCh0b3BpY0NoaWxkcmVuLCBpbmRleENoaWxkcmVuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZWRUb3BpY3NDaGlsZHJlbi5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXsnc3ViLScgKyBpbmRleCArIFwiLVwiICsgaW5kZXhDaGlsZHJlbn0gb25DbGljaz17Y2hhbmdlU2VsZWN0ZWRLZXl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RvcGljQ2hpbGRyZW4udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc3R5bGVkVG9waWNzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8U3ViTWVudSBrZXk9e2luZGV4fSBpY29uPXt0b3BpYy5pY29ufSB0aXRsZT17dG9waWMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiB7dG9waWMudGl0bGV9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHtzdHlsZWRUb3BpY3NDaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICB7LyogPE1lbnUuSXRlbSBrZXk9XCJzdWItMVwiPntKU09OLnN0cmluZ2lmeSgpfTwvTWVudS5JdGVtPiAqL31cclxuICAgICAgICAgICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0eWxlZFRvcGljcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9e2luZGV4fSBvbkNsaWNrPXtjaGFuZ2VTZWxlY3RlZEtleX0gaWNvbj17dG9waWMuaWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RvcGljLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgICk7XHJcblxyXG4gICAgc3R5bGVkVG9waWNzLnB1c2goXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFudC1tZW51LWl0ZW1cIj5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVMb2dvdXQoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggdy1hdXRvIHctZnVsbCByb3VuZGVkIGgtOCB0ZXh0LXdoaXRlIGJnLXJlZC02MDAgZm9udC1ib2xkIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBob3ZlcjpiZy1yZWQtNjAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIOC4reC4reC4geC4iOC4suC4geC4o+C4sOC4muC4mlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuXHJcbiAgICApXHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoYW5kbGVMb2dvdXRcIilcclxuICAgICAgICBDb29raWVzLnJlbW92ZSgndG9rZW4nKVxyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWVudSBtb2RlPVwiaW5saW5lXCIgc2VsZWN0ZWRLZXlzPXtbc2VsZWN0ZWRLZXldfSBkZWZhdWx0T3BlbktleXM9e1tzZWxlY3RlZFN1YktleV19PlxyXG4gICAgICAgICAgICB7c3R5bGVkVG9waWNzfVxyXG4gICAgICAgIDwvTWVudT5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVG9waWNNZW51OyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IFNFQ1JFVF9LRVkgPSBwcm9jZXNzLmVudi5KV1RfS0VZO1xyXG5cclxuLypcclxuICogQHBhcmFtcyB7and0VG9rZW59IGV4dHJhY3RlZCBmcm9tIGNvb2tpZXNcclxuICogQHJldHVybiB7b2JqZWN0fSBvYmplY3Qgb2YgZXh0cmFjdGVkIHRva2VuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VG9rZW4oand0VG9rZW4pIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGp3dC52ZXJpZnkoand0VG9rZW4sIFNFQ1JFVF9LRVkpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKCdlOicsIGUpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKlxyXG4gKiBAcGFyYW1zIHtyZXF1ZXN0fSBleHRyYWN0ZWQgZnJvbSByZXF1ZXN0IHJlc3BvbnNlXHJcbiAqIEByZXR1cm4ge29iamVjdH0gb2JqZWN0IG9mIHBhcnNlIGp3dCBjb29raWUgZGVjb2RlIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFwcENvb2tpZXMocmVxKSB7XHJcbiAgY29uc3QgcGFyc2VkSXRlbXMgPSB7fTtcclxuICBpZiAocmVxLmhlYWRlcnMuY29va2llKSB7XHJcbiAgICBjb25zdCBjb29raWVzSXRlbXMgPSByZXEuaGVhZGVycy5jb29raWUuc3BsaXQoJzsgJyk7XHJcbiAgICBjb29raWVzSXRlbXMuZm9yRWFjaChjb29raWVzID0+IHtcclxuICAgICAgY29uc3QgcGFyc2VkSXRlbSA9IGNvb2tpZXMuc3BsaXQoJz0nKTtcclxuICAgICAgcGFyc2VkSXRlbXNbcGFyc2VkSXRlbVswXV0gPSBkZWNvZGVVUkkocGFyc2VkSXRlbVsxXSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIHBhcnNlZEl0ZW1zO1xyXG59XHJcblxyXG4vKlxyXG4gKiBAcGFyYW1zIHtyZXF1ZXN0fSBleHRyYWN0ZWQgZnJvbSByZXF1ZXN0IHJlc3BvbnNlLCB7c2V0TG9jYWxob3N0fSB5b3VyIGxvY2FsaG9zdCBhZGRyZXNzXHJcbiAqIEByZXR1cm4ge29iamVjdH0gb2JqZWN0cyBvZiBwcm90b2NvbCwgaG9zdCBhbmQgb3JpZ2luXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWJzb2x1dGVVcmwocmVxLCBzZXRMb2NhbGhvc3QpIHtcclxuICB2YXIgcHJvdG9jb2wgPSAnaHR0cHM6JztcclxuICB2YXIgaG9zdCA9IHJlcVxyXG4gICAgPyByZXEuaGVhZGVyc1sneC1mb3J3YXJkZWQtaG9zdCddIHx8IHJlcS5oZWFkZXJzWydob3N0J11cclxuICAgIDogd2luZG93LmxvY2F0aW9uLmhvc3Q7XHJcbiAgaWYgKGhvc3QuaW5kZXhPZignbG9jYWxob3N0JykgPiAtMSkge1xyXG4gICAgaWYgKHNldExvY2FsaG9zdCkgaG9zdCA9IHNldExvY2FsaG9zdDtcclxuICAgIHByb3RvY29sID0gJ2h0dHA6JztcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3RvY29sOiBwcm90b2NvbCxcclxuICAgIGhvc3Q6IGhvc3QsXHJcbiAgICBvcmlnaW46IHByb3RvY29sICsgJy8vJyArIGhvc3QsXHJcbiAgICB1cmw6IHJlcSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkRGF5cyhkYXRlLCBkYXlzKSB7XHJcbiAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gIHJlc3VsdC5zZXREYXRlKHJlc3VsdC5nZXREYXRlKCkgKyBkYXlzKTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vL1lZWVktTU0tRERcclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGVXaXRob3V0VGltZShkYXRlKSB7XHJcbiAgdmFyIGRhdGVTdHJpbmcgPVxyXG4gICAgZGF0ZS5nZXRVVENGdWxsWWVhcigpICsgXCItXCIgK1xyXG4gICAgKFwiMFwiICsgKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpKS5zbGljZSgtMikgKyBcIi1cIiArXHJcbiAgICAoXCIwXCIgKyBkYXRlLmdldFVUQ0RhdGUoKSkuc2xpY2UoLTIpICsgXCIgXCJcclxuICByZXR1cm4gZGF0ZVN0cmluZztcclxufVxyXG4vLyBjb25zdCBhcGkgPSBwcm9jZXNzLmVudi5QVUJMSUNfVVJMXHJcblxyXG5leHBvcnQgY29uc3QgYXBpSW5zdGFuY2UgPSAoKSA9PiB7XHJcbiAgLy8gY29uc3QgYXV0aG9yaXphdGlvbiA9IHN0b3JlLmdldFN0YXRlKCkudXNlclN0YXRlLnRva2VuID8gc3RvcmUuZ2V0U3RhdGUoKS51c2VyU3RhdGUudG9rZW4gOiBudWxsXHJcblxyXG4gIC8vIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgLy8gXHQneC1hcGktdG9rZW4nOiBhdXRob3JpemF0aW9uID8gYXV0aG9yaXphdGlvbiA6ICcnLFxyXG4gIC8vIH1cclxuXHJcbiAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiAnL2FwaScsXHJcbiAgICAvLyBoZWFkZXJzLFxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja0lzTG9naW4gPSAoKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coXCJjaGVja0lzTG9naW5cIilcclxuICB2YXIgdG9rZW4gPSBDb29raWVzLmdldCgndG9rZW4nKSAvLyA9PiAndmFsdWUnXHJcblxyXG4gIGlmICghdG9rZW4pIHtcclxuICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgLy8gY29uc29sZS5sb2cocGFyc2VKd3QodG9rZW4pKVxyXG4gIHJldHVybiBwYXJzZUp3dCh0b2tlbilcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUp3dCh0b2tlbikge1xyXG5cclxuICB2YXIgaXNFeHBpcmVkID0gZmFsc2U7XHJcbiAgLy8gY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKTtcclxuXHJcblxyXG5cclxuICB2YXIgYmFzZTY0VXJsID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcclxuICB2YXIgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XHJcbiAgdmFyIGpzb25QYXlsb2FkID0gZGVjb2RlVVJJQ29tcG9uZW50KGF0b2IoYmFzZTY0KS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChjKSB7XHJcbiAgICByZXR1cm4gJyUnICsgKCcwMCcgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XHJcbiAgfSkuam9pbignJykpO1xyXG4gIHZhciBfanNvblBheWxvYWQgPSBKU09OLnBhcnNlKGpzb25QYXlsb2FkKVxyXG4gIHZhciBkYXRlTm93ID0gbmV3IERhdGUoKTtcclxuICAvLyBjb25zb2xlLmxvZyhwYXJzZUludChfanNvblBheWxvYWQuZXhwKSlcclxuICAvLyBjb25zb2xlLmxvZyhwYXJzZUludCgoZGF0ZU5vdy5nZXRUaW1lKCkpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsMTApKSlcclxuICBpZiAocGFyc2VJbnQoX2pzb25QYXlsb2FkLmV4cCkgPCBwYXJzZUludCgoZGF0ZU5vdy5nZXRUaW1lKCkpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKSkpIHtcclxuICAgIGNvbnNvbGUubG9nKFwidHJ1ZVwiKVxyXG5cclxuICAgIGlzRXhwaXJlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNFeHBpcmVkKSB7XHJcbiAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcbiAgcmV0dXJuIF9qc29uUGF5bG9hZDtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZShkYXRlKSB7XHJcbiAgdHJ5IHtcclxuICAgIHZhciBkYXRlU3BsaXQgPSBkYXRlLnRvU3RyaW5nKCkuc3BsaXQoXCJUXCIpO1xyXG4gICAgcmV0dXJuIGRhdGVTcGxpdFswXTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJXaXRoVGltZShkYXRlKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vOjA3LjAwMFpcclxuICAgIC8vU2FtcGxlVGV4dC5yZXBsYWNlKFwiRGV2ZWxvcGVyXCIsIFwiQXBwIEJ1aWxkZXJcIik7XHJcbiAgICB2YXIgZGF0ZVNwbGl0ID0gZGF0ZS50b1N0cmluZygpLnNwbGl0KFwiVFwiKTtcclxuICAgIHJldHVybiBkYXRlU3BsaXRbMF0gKyBcIiBcIiArIGRhdGVTcGxpdFsxXS5yZXBsYWNlKFwiLjAwMFpcIiwgXCJcIik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RGF0ZXRvVGhhaURhdGUoZGF0ZSkge1xyXG4gIHZhciBfZGF0ZSA9IGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUoZGF0ZSlcclxuICB2YXIgZGF0ZVNwbGl0ID0gX2RhdGUudG9TdHJpbmcoKS5zcGxpdChcIi1cIik7XHJcbiAgLy8gMjAyMS0wOS0xNlxyXG4gIHJldHVybiBkYXRlU3BsaXRbMl0gKyBcIiBcIiArIGNvbnZlcnRNb250aHRvVGhhaU1vbnRoKGRhdGVTcGxpdFsxXSkgKyBcIiBcIiArIGNvbnZlcnRZZWFydG9UaGFpWWVhcihkYXRlU3BsaXRbMF0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0WWVhcnRvVGhhaVllYXIoeWVhcikge1xyXG4gIHJldHVybiBwYXJzZUludCh5ZWFyKSArIDU0M1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydE1vbnRodG9UaGFpTW9udGgobW9udGgpIHtcclxuICBzd2l0Y2ggKG1vbnRoKSB7XHJcbiAgICBjYXNlIFwiMDFcIjpcclxuICAgICAgcmV0dXJuIFwi4Lih4LiB4Lij4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIwMlwiOlxyXG4gICAgICByZXR1cm4gXCLguIHguLjguKHguKDguLLguJ7guLHguJnguJjguYxcIlxyXG4gICAgY2FzZSBcIjAzXCI6XHJcbiAgICAgIHJldHVybiBcIuC4oeC4teC4meC4suC4hOC4oVwiXHJcbiAgICBjYXNlIFwiMDRcIjpcclxuICAgICAgcmV0dXJuIFwi4LmA4Lih4Lip4Liy4Lii4LiZXCJcclxuICAgIGNhc2UgXCIwNVwiOlxyXG4gICAgICByZXR1cm4gXCLguJ7guKTguKnguKDguLLguITguKFcIlxyXG4gICAgY2FzZSBcIjA2XCI6XHJcbiAgICAgIHJldHVybiBcIuC4oeC4tOC4luC4uOC4meC4suC4ouC4mVwiXHJcbiAgICBjYXNlIFwiMDdcIjpcclxuICAgICAgcmV0dXJuIFwi4LiB4Lij4LiB4LiO4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIwOFwiOlxyXG4gICAgICByZXR1cm4gXCLguKrguLTguIfguKvguLLguITguKFcIlxyXG4gICAgY2FzZSBcIjA5XCI6XHJcbiAgICAgIHJldHVybiBcIuC4geC4seC4meC4ouC4suC4ouC4mVwiXHJcbiAgICBjYXNlIFwiMTBcIjpcclxuICAgICAgcmV0dXJuIFwi4LiV4Li44Lil4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIxMVwiOlxyXG4gICAgICByZXR1cm4gXCLguJ7guKTguKjguIjguLTguIHguLLguKLguJlcIlxyXG4gICAgY2FzZSBcIjEyXCI6XHJcbiAgICAgIHJldHVybiBcIuC4mOC4seC4meC4p+C4suC4hOC4oVwiXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gXCJOQU5cIlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREYXRldG9BZGREQihkYXRlKSB7XHJcbiAgdmFyIGRhdGVTcGxpdCA9IGRhdGUuc3BsaXQoXCIgXCIpO1xyXG4gIHJldHVybiBkYXRlU3BsaXRbMF0gKyBcIlRcIiArIGRhdGVTcGxpdFsxXSArIFwiKzAwOjAwXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJUEFkZHJlc3MoKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2dlb2xvY2F0aW9uLWRiLmNvbS9qc29uLycpXHJcbiAgLy8gY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gIC8vIHJldHVybiByZXMuZGF0YVxyXG4gIHJldHVybiBcImNvdW50cnlfY29kZTpcIiArIHJlcy5kYXRhLmNvdW50cnlfY29kZSArIFwiLGNvdW50cnlfbmFtZTpcIiArIHJlcy5kYXRhLmNvdW50cnlfbmFtZSArIFwiLGNpdHk6XCIgKyByZXMuZGF0YS5jaXR5ICsgXCIscG9zdGFsOlwiICsgcmVzLmRhdGEucG9zdGFsXHJcbiAgICArIFwiLGxhdGl0dWRlOlwiICsgcmVzLmRhdGEubGF0aXR1ZGUgKyBcIixsb25naXR1ZGU6XCIgKyByZXMuZGF0YS5sb25naXR1ZGUgKyBcIixJUHY0OlwiICsgcmVzLmRhdGEuSVB2NCArIFwiLHN0YXRlOlwiICsgcmVzLmRhdGEuc3RhdGVcclxuICAvLyBzZXRJUChyZXMuZGF0YS5JUHY0KVxyXG4gIC8vIHJldHVyblxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBieXRlc1RvU2l6ZShieXRlcykge1xyXG4gIHZhciBzaXplcyA9IFsnQnl0ZXMnLCAnS0InLCAnTUInLCAnR0InLCAnVEInXTtcclxuICBpZiAoYnl0ZXMgPT0gMCkgcmV0dXJuICcwIEJ5dGUnO1xyXG4gIHZhciBpID0gcGFyc2VJbnQoTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZygxMDI0KSkpO1xyXG4gIHJldHVybiBNYXRoLnJvdW5kKGJ5dGVzIC8gTWF0aC5wb3coMTAyNCwgaSksIDIpICsgJyAnICsgc2l6ZXNbaV07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnl0ZXNUb01CKGJ5dGVzKSB7XHJcbiAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KGJ5dGVzIC8gKDEwMjQgKiAxMDI0KSkudG9GaXhlZCgyKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRlZGlmZihzdGFydERhdGUpIHtcclxuXHJcbiAgY29uc3QgdGltZUVuZCA9IG1vbWVudCgpO1xyXG4gIGNvbnN0IG5ld1N0YXJ0RGF0ZSA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XHJcbiAgY29uc3QgbmV3RW5kRGF0ZSA9IG5ldyBEYXRlKHRpbWVFbmQpO1xyXG4gIGNvbnN0IG9uZV9kYXkgPSAxMDAwICogNjAgKiA2MCAqIDI0O1xyXG4gIGxldCByZXN1bHRcclxuICByZXN1bHQgPSBNYXRoLmNlaWwoKG5ld1N0YXJ0RGF0ZS5nZXRUaW1lKCkgLSBuZXdFbmREYXRlLmdldFRpbWUoKSkgLyAob25lX2RheSkpXHJcbiAgY29uc29sZS5sb2coJ2RhdGUgQ29udmVydGVyIHJlc3VsdCcsIHJlc3VsdClcclxuXHJcblxyXG4gIHJldHVybiByZXN1bHQgLSAxO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnREYXRlKHNlcGFyYXRvciA9ICcnKSB7XHJcblxyXG4gIGxldCBuZXdEYXRlID0gbmV3IERhdGUoKVxyXG4gIGxldCBkYXRlID0gbmV3RGF0ZS5nZXREYXRlKCk7XHJcbiAgbGV0IG1vbnRoID0gbmV3RGF0ZS5nZXRNb250aCgpICsgMTtcclxuICBsZXQgeWVhciA9IG5ld0RhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgcmV0dXJuIGAke3llYXJ9JHtzZXBhcmF0b3J9JHttb250aCA8IDEwID8gYDAke21vbnRofWAgOiBgJHttb250aH1gfSR7c2VwYXJhdG9yfSR7ZGF0ZX1gXHJcbn1cclxuIiwiZGVjbGFyZSBjb25zdCBfX05FWFRfREFUQV9fOiBhbnlcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCByZXNvbHZlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQcmVmZXRjaE9wdGlvbnMgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG5mdW5jdGlvbiBpc0xvY2FsKGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB1cmwgPSBwYXJzZShocmVmLCBmYWxzZSwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gcGFyc2UoZ2V0TG9jYXRpb25PcmlnaW4oKSwgZmFsc2UsIHRydWUpXG5cbiAgcmV0dXJuIChcbiAgICAhdXJsLmhvc3QgfHwgKHVybC5wcm90b2NvbCA9PT0gb3JpZ2luLnByb3RvY29sICYmIHVybC5ob3N0ID09PSBvcmlnaW4uaG9zdClcbiAgKVxufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBGb3JtYXRSZXN1bHQgPSB7IGhyZWY6IHN0cmluZzsgYXM/OiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jOiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4gRm9ybWF0UmVzdWx0KSB7XG4gIGxldCBsYXN0SHJlZjogbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RBczogdW5kZWZpbmVkIHwgbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RSZXN1bHQ6IG51bGwgfCBGb3JtYXRSZXN1bHQgPSBudWxsXG4gIHJldHVybiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4ge1xuICAgIGlmIChsYXN0UmVzdWx0ICYmIGhyZWYgPT09IGxhc3RIcmVmICYmIGFzID09PSBsYXN0QXMpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gZm9ybWF0RnVuYyhocmVmLCBhcylcbiAgICBsYXN0SHJlZiA9IGhyZWZcbiAgICBsYXN0QXMgPSBhc1xuICAgIGxhc3RSZXN1bHQgPSByZXN1bHRcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0VXJsKHVybDogVXJsKTogc3RyaW5nIHtcbiAgcmV0dXJuIHVybCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCkgOiB1cmxcbn1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChvYnNlcnZlcikge1xuICAgIHJldHVybiBvYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBDb21wb25lbnQ8TGlua1Byb3BzPiB7XG4gIHA6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogTGlua1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuICB9XG5cbiAgY2xlYW5VcExpc3RlbmVycyA9ICgpID0+IHt9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcbiAgfVxuXG4gIGdldFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBjb25zdCB7IGhyZWY6IHBhcnNlZEhyZWYsIGFzOiBwYXJzZWRBcyB9ID0gdGhpcy5mb3JtYXRVcmxzKFxuICAgICAgdGhpcy5wcm9wcy5ocmVmLFxuICAgICAgdGhpcy5wcm9wcy5hc1xuICAgIClcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRIcmVmKVxuICAgIHJldHVybiBbcmVzb2x2ZWRIcmVmLCBwYXJzZWRBcyA/IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEFzKSA6IHJlc29sdmVkSHJlZl1cbiAgfVxuXG4gIGhhbmRsZVJlZihyZWY6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIHJlZiAmJiByZWYudGFnTmFtZSkge1xuICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcblxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgICAgcHJlZmV0Y2hlZFtcbiAgICAgICAgICB0aGlzLmdldFBhdGhzKCkuam9pbihcbiAgICAgICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycyA9IGxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnByZWZldGNoKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbiAgLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG4gIGZvcm1hdFVybHMgPSBtZW1vaXplZEZvcm1hdFVybCgoaHJlZiwgYXNIcmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IGFkZEJhc2VQYXRoKGZvcm1hdFVybChocmVmKSksXG4gICAgICBhczogYXNIcmVmID8gYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGFzSHJlZikpIDogYXNIcmVmLFxuICAgIH1cbiAgfSlcblxuICBsaW5rQ2xpY2tlZCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgICBpZiAoXG4gICAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICAgIGUubWV0YUtleSB8fFxuICAgICAgICBlLmN0cmxLZXkgfHxcbiAgICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgICApIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuXG4gICAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBocmVmID0gcmVzb2x2ZShwYXRobmFtZSwgaHJlZilcbiAgICBhcyA9IGFzID8gcmVzb2x2ZShwYXRobmFtZSwgYXMpIDogaHJlZlxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBsZXQgeyBzY3JvbGwgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgICB9XG5cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICBSb3V0ZXJbdGhpcy5wcm9wcy5yZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgc2hhbGxvdzogdGhpcy5wcm9wcy5zaGFsbG93LFxuICAgIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJlZmV0Y2gob3B0aW9ucz86IFByZWZldGNoT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmdldFBhdGhzKClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgUm91dGVyLnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8gMF0sIHBhdGhzWy8qIGFzUGF0aCAqLyAxXSwgb3B0aW9ucykuY2F0Y2goXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgIHRocm93IGVyclxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICAgIHByZWZldGNoZWRbXG4gICAgICBwYXRocy5qb2luKFxuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAnJSdcbiAgICAgIClcbiAgICBdID0gdHJ1ZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICAgIH1cblxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICAgIGNvbnN0IHByb3BzOiB7XG4gICAgICBvbk1vdXNlRW50ZXI6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgaHJlZj86IHN0cmluZ1xuICAgICAgcmVmPzogYW55XG4gICAgfSA9IHtcbiAgICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWYoZWwpXG5cbiAgICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91c2VFbnRlcjogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZWZldGNoKHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICAgIH0sXG4gICAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLmxpbmtDbGlja2VkKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5wYXNzSHJlZiB8fFxuICAgICAgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpXG4gICAgKSB7XG4gICAgICBwcm9wcy5ocmVmID0gYXMgfHwgaHJlZlxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmhyZWYgJiZcbiAgICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICAgKSB7XG4gICAgICAgIHByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKVxuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgOiBwYXRoXG59XG5cbmZ1bmN0aW9uIHRvUm91dGUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLydcbn1cblxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGg6IHN0cmluZykgPT5cbiAgdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpXG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5IHwgbnVsbCxcbiAgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4sXG4gIGNiPzogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4pIHtcbiAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMVxuICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBmZXRjaChcbiAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmBcbiAgICAgICAgKSxcbiAgICAgICAgcXVlcnksXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICB9XG4gICAgKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgIC8vIGxvb3AuXG4gICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAoXG4gICAgICBlLnN0YXRlICYmXG4gICAgICB0aGlzLmlzU3NyICYmXG4gICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgcGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICBfdXJsOiBVcmwsXG4gICAgX2FzOiBVcmwsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgICB9XG4gICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICBpZiAoU1QpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsXG4gICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXNcblxuICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKVxuICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcylcblxuICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpXG5cbiAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcylcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSBwYXJzZSh1cmwsIHRydWUpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZShhcylcbiAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4oXG4gICAgICAgIChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpXG4gICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChcbiAgICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICAgICkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXNcbiAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIH0gYXMgYW55KS50aGVuKFxuICAgICAgICAgICAgICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoZ2lwRXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsXG4gICAgICAgICAgICAgICAgICAgICAgZ2lwRXJyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpXG4gICAgICAgIClcbiAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgIH1cblxuICAgIHJldHVybiAobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgIChyZXMpID0+XG4gICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pLFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz4pXG4gICAgICAudGhlbigocm91dGVJbmZvOiBSb3V0ZUluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICAgIClcbiAgICAgICAgKS50aGVuKChwcm9wcykgPT4ge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpXG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybClcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG4gICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGFyc2UoYXNQYXRoKS5wYXRobmFtZSEpXG5cbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgIDogZmV0Y2hOZXh0RGF0YShcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuaXNTc3IsXG4gICAgICAgICAgKGRhdGEpID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKVxuICAgICAgICApXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZShhc1BhdGgsIHRydWUpXG4gICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUhKVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJylcbiAgICAgIDsoZSBhcyBhbnkpLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfVxufSB7XG4gIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG5cbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAoXywgJDEpID0+IHtcbiAgICAgIGNvbnN0IGlzT3B0aW9uYWwgPSAvXlxcXFxcXFsuKlxcXFxcXF0kLy50ZXN0KCQxKVxuICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSgyLCAtMilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgIGlmIChpc0NhdGNoQWxsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoNilcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1tcbiAgICAgICAgJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9XG4gICAgICByZXR1cm4gaXNDYXRjaEFsbCA/IChpc09wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgfVxuICApXG5cbiAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgICAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG5cbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksXG4gICAgZ3JvdXBzLFxuICAgIG5hbWVkUmVnZXg6IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICA/IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYFxuICAgICAgOiB1bmRlZmluZWQsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvcm1hdCwgVVJMRm9ybWF0T3B0aW9ucywgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBzdGF0aWNNYXJrdXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkZXZGaWxlczogc3RyaW5nW11cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGxvd1ByaW9yaXR5RmlsZXM6IHN0cmluZ1tdXG4gIHBvbHlmaWxsRmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaHRtbFByb3BzOiBhbnlcbiAgYm9keVRhZ3M6IGFueVtdXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICB1cmw6IFVybE9iamVjdCxcbiAgb3B0aW9ucz86IFVSTEZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXQodXJsIGFzIFVSTCwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcclxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcclxuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xyXG4gICAgXCJkZWZhdWx0XCI6IG9ialxyXG4gIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcclxuXHJcbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcclxuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XHJcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcclxuXHJcbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xyXG4gICAgcmV0dXJuIGNhY2hlO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBjYWNoZTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XHJcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcblxyXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgXCJkZWZhdWx0XCI6IG9ialxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xyXG5cclxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcclxuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcclxuICB9XHJcblxyXG4gIHZhciBuZXdPYmogPSB7fTtcclxuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XHJcblxyXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XHJcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xyXG5cclxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcclxuXHJcbiAgaWYgKGNhY2hlKSB7XHJcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ld09iajtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xyXG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcclxuXHJcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xyXG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcclxuICAgIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XHJcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQge1xyXG4gICAgYWJzb2x1dGVVcmwsXHJcbiAgICBjaGVja0lzTG9naW4sXHJcbiAgICBhcGlJbnN0YW5jZVxyXG59IGZyb20gJy4uLy4uL21pZGRsZXdhcmUvdXRpbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZyh1c2VyKSB7XHJcblxyXG4gICAgcmV0dXJuICh7XHJcbiAgICAgICAgaGVpZ2h0OiBcIjYwMHB4XCIsXHJcbiAgICAgICAgcmVhZG9ubHk6IGZhbHNlLCAvLyBhbGwgb3B0aW9ucyBmcm9tIGh0dHBzOi8veGRzb2Z0Lm5ldC9qb2RpdC9kb2MvXHJcbiAgICAgICAgdXBsb2FkZXI6IHtcclxuICAgICAgICAgICAgdXJsOiBcIi9hcGkvdXBsb2FkXCIsXHJcbiAgICAgICAgICAgIGluc2VydEltYWdlQXNCYXNlNjRVUkk6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImltYWdlc0V4dGVuc2lvbnNcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJqcGdcIixcclxuICAgICAgICAgICAgICAgIFwicG5nXCIsXHJcbiAgICAgICAgICAgICAgICBcImpwZWdcIixcclxuICAgICAgICAgICAgICAgIFwiZ2lmXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcHJlcGFyZURhdGE6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlci50eXBlX3VzZXIgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdpZCcsIFwiYWRtaW5cIik7IC8vIFxyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2lkJywgdXNlci5vcmdhbml6YXRpb25faWQpOyAvLyBcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlZmF1bHRIYW5kbGVyU3VjY2VzczogZnVuY3Rpb24gKGRhdGEsIHJlc3ApIHtcclxuICAgICAgICAgICAgICAgIHZhciBpLCBmaWVsZCA9IHRoaXMub3B0aW9ucy51cGxvYWRlci5maWxlc1ZhcmlhYmxlTmFtZTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSBcImZpbGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzcyBmaWxlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dEhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh0ZW5zaW9uID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBlbGVtZW50Lm5hbWUubGFzdEluZGV4T2YoJy4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRlbnNpb24gPSBlbGVtZW50Lm5hbWUuc3Vic3RyaW5nKGkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3BhdGggPSBlbGVtZW50LnBhdGgucmVwbGFjZShcInB1YmxpY1wiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4dGVuc2lvbiA9PSBcImpwZ1wiIHx8IGV4dGVuc2lvbiA9PSBcInBuZ1wiIHx8IGV4dGVuc2lvbiA9PSBcImpwZWdcIiB8fCBleHRlbnNpb24gPT0gXCJnaWZcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy95b3VyIGNvZGVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0SFRNTCArPSAnPGltZyBzcmM9XCInICsgX3BhdGggKyAnXCIvPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0SFRNTCArPSAnPGEgY2xhc3M9XCJmaWxlLWF0dGFjaFwiIGhyZWY9XCInICsgX3BhdGggKyAnXCI+JyArIGVsZW1lbnQubmFtZSArICc8L2E+PC9icj4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5pbnNlcnRIVE1MKHRleHRIVE1MKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNzIGltYWdlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5maWxlc1swXSlcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dEhUTUwgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoZGF0YS5maWxlcyAmJiBkYXRhLmZpbGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgLy8gZm9yIChpID0gMDsgaSA8IGRhdGEuZmlsZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIC8vIHRleHRIVE1MICs9ICc8aW1nIHNyYz1cIicgKyBkYXRhLmJhc2V1cmwgKyBkYXRhLmZpbGVzW2ldICsgJ1wiLz4nXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAvLyBjb25zb2xlLmxvZyggZGF0YS5maWxlc1tpXSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICB0aGlzLnNlbGVjdGlvbi5pbnNlcnRJbWFnZShkYXRhLmZpbGVzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIHRoaXMuc2VsZWN0aW9uLmluc2VydEhUTUwoXCI8L2JyPlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2VsZWN0aW9uLmluc2VydEhUTUwodGV4dEhUTUwpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBwYXJlbnQuc2VsZWN0aW9uLmluc2VydEhUTUwoJzxpbWcgc3JjPVwiaW1hZ2UucG5nXCIvPicpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gZmlsZWJyb3dzZXI6IHtcclxuICAgICAgICAvLyAgIGFqYXg6IHtcclxuICAgICAgICAvLyAgICAgdXJsOiBcIi9wdWJsaWMvdXBsb2Fkcy9jLWFkbWluL1wiLFxyXG4gICAgICAgIC8vICAgfSxcclxuICAgICAgICAvLyAgIHVwbG9hZGVyOiB7XHJcbiAgICAgICAgLy8gICAgICB1cmw6XCIvYXBpL3VwbG9hZFwiXHJcbiAgICAgICAgLy8gICB9LFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICB9KTtcclxufSIsImltcG9ydCB7IERyYWdPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3REcmFnTGlzdFZpZXcgZnJvbSBcInJlYWN0LWRyYWctbGlzdHZpZXdcIjtcclxuLyogdXRpbHMgKi9cclxuaW1wb3J0IHsgYWJzb2x1dGVVcmwsIGFwaUluc3RhbmNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbWlkZGxld2FyZS91dGlscyc7XHJcblxyXG4vKiBjb21wb25lbnRzICovXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0QWRtaW4nO1xyXG5pbXBvcnQgTW9kYWxBZGRNZW51IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbWFuYWdlbW5ldC9zZWNvbmRhcnktbWVudS9hZGQtbWVudSc7XHJcbmltcG9ydCBNb2RhbEFkZE1lbnVTdWIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9tYW5hZ2VtbmV0L3NlY29uZGFyeS1tZW51L2FkZC1tZW51LXN1Yic7XHJcbmltcG9ydCBNb2RhbEVkaXRNZW51IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbWFuYWdlbW5ldC9zZWNvbmRhcnktbWVudS9lZGl0LW1lbnUnO1xyXG5pbXBvcnQgTW9kYWxFZGl0TWVudVN1YiBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL21hbmFnZW1uZXQvc2Vjb25kYXJ5LW1lbnUvZWRpdC1tZW51LXN1Yic7XHJcblxyXG5cclxuLy8gaW1wb3J0IFVzZXJOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL1VzZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgRW1wdHksXHJcbiAgSW5wdXQsXHJcbiAgTGlzdCxcclxuICBNb2RhbCxcclxuICBTcGluLFxyXG4gIFRhZyxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIG5vdGlmaWNhdGlvblxyXG59IGZyb20gJ2FudGQnO1xyXG5cclxuY29uc3QgeyBUZXh0LCBUaXRsZSB9ID0gVHlwb2dyYXBoeTtcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuXHJcbi8qXHJcbiAgVGhpcyBleGFtcGxlIHVzZXMgcmVhY3QtZHJhZy1saXN0dmlldywgYW5kIEFudERlc2lnbiB3aGljaCBjYW4gYmUgZm91bmRcclxuICBhdCB0aGVpciByZXNwZWN0aXZlIGxpbmtzIGJlbG93OlxyXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9yYWlzZXpoYW5nL3JlYWN0LWRyYWctbGlzdHZpZXcjcmVhZG1lXHJcbiAgaHR0cHM6Ly9hbnQuZGVzaWduL2RvY3MvcmVhY3QvaW50cm9kdWNlXHJcbiovXHJcblxyXG4vKiBNT0NLIERBVEE6IHBhcmVudCBsaXN0IGFzIFZhbHVlLCBzdWJMaXN0IGFzIHN1Ykxpc3QgKi9cclxuY29uc3QgbW9ja0RhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IFwiY2F0ZWdvcnktb25lXCIsXHJcbiAgICB2YWx1ZTogXCJDYXRlZ29yeSBPbmVcIixcclxuICAgIHN1Ykxpc3Q6IFtcclxuICAgICAgXCJFZ2V0IG9kaW8gYmliZW5kdW0gY29tbW9kbyBtYWxlc3VhZGEgTWF0dGlzIG1vbnRlcy5cIixcclxuICAgICAgXCJOdWxsYW0gYXQgcmhvbmN1cy4gRXJhdCBwcmV0aXVtIHBoYXJldHJhIGF1Y3Rvci5cIixcclxuICAgICAgXCJKdXN0byBzZWQgaW50ZXJkdW0gc29jaW9zcXUgYSBtb2xlc3RpZSBuYXNjZXR1ciBub3N0cmEgbWV0dXMuXCJcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcImNhdGVnb3J5LXR3b1wiLFxyXG4gICAgdmFsdWU6IFwiQ2F0ZWdvcnkgVHdvXCIsXHJcbiAgICBzdWJMaXN0OiBbXHJcbiAgICAgIFwiU2VuZWN0dXMgbGliZXJvIGJsYW5kaXQgY29uc2VjdGV0dWVyIHBlbmF0aWJ1cyBncmF2aWRhIHF1aXNxdWUgbGFjaW5pYSBpZCBudW5jLlwiLFxyXG4gICAgICBcIkVsaXQuIEFjLiBOdWxsYSBqdXN0byBuaWJoLiBGcmluZ2lsbGEsIGNsYXNzIFRlbXBvciBjb25zZXF1YXQgcHJvaW4uXCJcclxuICAgIF1cclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcbiAgY29uc3QgW2FwaSwgY29udGV4dEhvbGRlcl0gPSBub3RpZmljYXRpb24udXNlTm90aWZpY2F0aW9uKCk7XHJcbiAgY29uc3QgW21lbnVzLCBzZXRNZW51c10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCB7IHVzZXIsIG9yaWdpbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG1vY2tEYXRhKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2RhdGFEZWxldGUsIHNldERhdGFEZWxldGVdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbZGF0YUVkaXQsIHNldERhdGFFZGl0XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3Zpc2libGVNb2RhbERlbGV0ZSwgc2V0VmlzaWJsZU1vZGFsRGVsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFt2aXNpYmxlRWRpdE1vZGFsLCBzZXRWaXNpYmxlRWRpdE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFt2aXNpYmxlRWRpdE1lbnVTdWJNb2RhbCwgc2V0VmlzaWJsZUVkaXRNZW51U3ViTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3Zpc2libGVBZGRTdWJNZW51TW9kYWwsIHNldFZpc2libGVBZGRTdWJNZW51TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3Zpc2libGVNb2RhbE1lbnVTdWJEZWxldGUsIHNldFZpc2libGVNb2RhbE1lbnVTdWJEZWxldGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgZmV0Y2goKVxyXG4gIH0sIFtdKVxyXG5cclxuXHJcbiAgY29uc3QgZmV0Y2ggPSBhc3luYyAocGFyYW1zID0ge30pID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIC8vIHNldFZpc2libGVFZGl0TW9kYWwoZmFsc2UpXHJcbiAgICBjb25zdCBtZW51RGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAnbWVudT9pc19wcmltYXJ5X21lbnU9MCZvcmdhbml6YXRpb25faWQ9JyArICghdXNlciA/IDAgOiB1c2VyLm9yZ2FuaXphdGlvbl9pZClcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhtZW51RGF0YSlcclxuICAgIHNldE1lbnVzKG1lbnVEYXRhLmRhdGEucmVzdWx0cylcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyAvL1N0YXJ0IHRoZSB0aW1lclxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgfS5iaW5kKHRoaXMpLCA4MDApXHJcblxyXG4gIH07XHJcbiAgLypcclxuICAgIFJFT1JERVIgQUNDRVBUUzpcclxuICAgICAgbGlzdDogYXJyLCBhY2NlcHRzIGFycmF5IG9mIGRhdGEgdG8gYmUgcmVvcmRlcmVkLFxyXG4gICAgICBmcm9tSW5kZXg6IGludCwgb25EcmFnU3RhcnQgaW5kZXgsXHJcbiAgICAgIHRvSW5kZXg6IGludCwgb25EcmFnRW5kIGluZGV4LFxyXG4gICovXHJcblxyXG4gIGNvbnN0IHJlb3JkZXIgPSAobGlzdCwgc3RhcnRJbmRleCwgZW5kSW5kZXgpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IEFycmF5LmZyb20obGlzdCk7XHJcbiAgICBjb25zdCBbcmVtb3ZlZF0gPSByZXN1bHQuc3BsaWNlKHN0YXJ0SW5kZXgsIDEpO1xyXG4gICAgcmVzdWx0LnNwbGljZShlbmRJbmRleCwgMCwgcmVtb3ZlZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcblxyXG4gIC8qXHJcbiAgICBPTiBEUkFHIEVORCBFVkVOVCBIQU5ETEVSIEFDQ0VQVFM6XHJcbiAgICAgIGZyb21JbmRleDogaW50LCBvbkRyYWdTdGFydCBpbmRleCxcclxuICAgICAgdG9JbmRleDogaW50LCBvbkRyYWdFbmQgaW5kZXgsXHJcbiAgICAgIHR5cGU6IHN0ciwgUmVhY3REcmFnTGlzdFZpZXcgSWRlbnRpZmllcixcclxuICAgICAgaW5kZXg6IE1VU1QgYmUgcGFyZW50IGxpc3QgaW5kZXgsXHJcbiAgKi9cclxuXHJcbiAgY29uc3Qgb25EcmFnRW5kID0gYXN5bmMgKGZyb21JbmRleCwgdG9JbmRleCwgdHlwZSwgaW5kZXgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIC8qIElHTk9SRVMgRFJBRyBJRiBPVVRTSURFIERFU0lHTkFURUQgQVJFQSAqL1xyXG4gICAgaWYgKHRvSW5kZXggPCAwKSByZXR1cm47XHJcblxyXG4gICAgLyogUkVPUkRFUiBQQVJFTlQgT1IgU1VCTElTVCwgRUxTRSBUSFJPVyBFUlJPUiAqL1xyXG4gICAgaWYgKHR5cGUgPT09IFwiTElTVC1JVEVNXCIpIHtcclxuXHJcbiAgICAgIGNvbnN0IF9kYXRhID0ge1xyXG4gICAgICAgIFwibWVudV9pZFwiOiBtZW51c1tmcm9tSW5kZXhdLm1lbnVfaWQsXHJcbiAgICAgICAgXCJtZW51X3NlcVwiOiB0b0luZGV4LFxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG1lbnVEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5wdXQoXHJcbiAgICAgICAgJ21lbnUvcmVvcmRlci1tZW51JywgX2RhdGFcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IF9kYXRhUmV2ZXJ0ID0ge1xyXG4gICAgICAgIFwibWVudV9pZFwiOiBtZW51c1t0b0luZGV4XS5tZW51X2lkLFxyXG4gICAgICAgIFwibWVudV9zZXFcIjogZnJvbUluZGV4LFxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG1lbnVEYXRhUmV2ZXJ0ID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5wdXQoXHJcbiAgICAgICAgJ21lbnUvcmVvcmRlci1tZW51JywgX2RhdGFSZXZlcnRcclxuICAgICAgKTtcclxuICAgICAgLy8gY29uc29sZS5sb2cobWVudURhdGFSZXZlcnQpXHJcbiAgICAgIHJldHVybiBmZXRjaCgpXHJcbiAgICAgIC8vIGNvbnN0IGNhdGVnb3JpZXMgPSByZW9yZGVyKGRhdGEsIGZyb21JbmRleCwgdG9JbmRleCk7XHJcbiAgICAgIC8vIHJldHVybiBzZXREYXRhKGNhdGVnb3JpZXMpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlNVQkxJU1QtSVRFTVwiKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiIG9uRHJhZ0VuZCBMSVNULUlURU1cIilcclxuICAgICAgY29uc29sZS5sb2coZnJvbUluZGV4KVxyXG4gICAgICBjb25zb2xlLmxvZyh0b0luZGV4KVxyXG4gICAgICBjb25zb2xlLmxvZyh0eXBlKVxyXG4gICAgICBjb25zb2xlLmxvZyhpbmRleClcclxuICAgICAgY29uc29sZS5sb2cobWVudXNbaW5kZXhdLm1lbnVfc3Vic1tmcm9tSW5kZXhdKVxyXG4gICAgICBjb25zb2xlLmxvZyhtZW51c1tpbmRleF0ubWVudV9zdWJzW3RvSW5kZXhdKVxyXG4gICAgICBjb25zdCBfZGF0YSA9IHtcclxuICAgICAgICBcIm1lbnVfc3ViX2lkXCI6IG1lbnVzW2luZGV4XS5tZW51X3N1YnNbZnJvbUluZGV4XS5tZW51X3N1Yl9pZCxcclxuICAgICAgICBcIm1lbnVfc2VxXCI6IHRvSW5kZXgsXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbWVudURhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLnB1dChcclxuICAgICAgICAnbWVudS9yZW9yZGVyLW1lbnUtc3ViJywgX2RhdGFcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IF9kYXRhUmV2ZXJ0ID0ge1xyXG4gICAgICAgIFwibWVudV9zdWJfaWRcIjogbWVudXNbaW5kZXhdLm1lbnVfc3Vic1t0b0luZGV4XS5tZW51X3N1Yl9pZCxcclxuICAgICAgICBcIm1lbnVfc2VxXCI6IGZyb21JbmRleCxcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBtZW51RGF0YVJldmVydCA9IGF3YWl0IGFwaUluc3RhbmNlKCkucHV0KFxyXG4gICAgICAgICdtZW51L3Jlb3JkZXItbWVudS1zdWInLCBfZGF0YVJldmVydFxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gY29uc3Qgc3ViTGlzdCA9IHJlb3JkZXIoZGF0YVtpbmRleF0uc3ViTGlzdCwgZnJvbUluZGV4LCB0b0luZGV4KTtcclxuICAgICAgLy8gY29uc3QgY2F0ZWdvcmllcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAvLyBjYXRlZ29yaWVzW2luZGV4XS5zdWJMaXN0ID0gc3ViTGlzdDtcclxuICAgICAgLy8gcmV0dXJuIHNldERhdGEoY2F0ZWdvcmllcyk7XHJcbiAgICAgIHJldHVybiBmZXRjaCgpXHJcbiAgICB9IGVsc2UgcmV0dXJuIG5ldyBFcnJvcihcIk5PVCBBIFZBTElEIExJU1RcIik7XHJcbiAgfTtcclxuICAvKlxcXHJcbiAgICBub2RlU2VsZWN0b3I9e30sIERSQUdHQUJMRSBFTEVNRU5UIElERU5USUZJRVIsIGkuZSAnbGknLCBhbnQtbGlzdC5kcmFnZ2FibGU+XHJcbiAgICBBTEwgU1RZTEVTIEFQUExJRUQgVE8gbGluZUNsYXNzTmFtZSBNVVNUIEJFIE9WRVJSSURERU4gV0lUSCAhaW1wb3J0YW50XHJcbiAgKi9cclxuXHJcbiAgY29uc3Qgb25EZWxldGUgPSBhc3luYyAodmFsdWUpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdERUxFVEUnKVxyXG5cclxuICAgIGNvbnN0IHJlZ2lzdGVyRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZGVsZXRlKCdtZW51LycgKyBkYXRhRGVsZXRlLm1lbnVfaWQsIHt9KTtcclxuICAgIGlmIChyZWdpc3RlckRhdGEuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgIG9wZW5Ob3RpZmljYXRpb25TdWNjZXNzKClcclxuICAgICAgLy8gZmV0Y2hPcmdhbml6YXRpb25EYXRhKCk7XHJcbiAgICAgIHNldFZpc2libGVNb2RhbERlbGV0ZShmYWxzZSlcclxuICAgICAgZmV0Y2goKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9wZW5Ob3RpZmljYXRpb25GYWlsKHJlZ2lzdGVyRGF0YS5kYXRhLm1lc3NhZ2UpXHJcblxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBvbk1lbnVTdWJEZWxldGUgPSBhc3luYyAodmFsdWUpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdERUxFVEUnKVxyXG5cclxuICAgIGNvbnN0IHJlZ2lzdGVyRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZGVsZXRlKCdtZW51LXN1Yi8nICsgZGF0YURlbGV0ZS5tZW51X3N1Yl9pZCwge30pO1xyXG4gICAgaWYgKHJlZ2lzdGVyRGF0YS5kYXRhLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MoKVxyXG4gICAgICAvLyBmZXRjaE9yZ2FuaXphdGlvbkRhdGEoKTtcclxuICAgICAgc2V0VmlzaWJsZU1vZGFsTWVudVN1YkRlbGV0ZShmYWxzZSlcclxuICAgICAgZmV0Y2goKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9wZW5Ob3RpZmljYXRpb25GYWlsKHJlZ2lzdGVyRGF0YS5kYXRhLm1lc3NhZ2UpXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICBhcGkuc3VjY2Vzcyh7XHJcbiAgICAgIG1lc3NhZ2U6IGDguKXguJrguILguYnguK3guKHguLnguKXguKrguLPguYDguKPguYfguIhgLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ+C4peC4muC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iCcsXHJcbiAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25GYWlsID0gKG1lc3NnYWUpID0+IHtcclxuICAgIGFwaS5lcnJvcih7XHJcbiAgICAgIG1lc3NhZ2U6IGDguJ7guJrguJvguLHguI3guKvguLLguKPguLDguKvguKfguYjguLLguIfguIHguLLguKPguKXguJrguILguYnguK3guKHguLnguKVgLFxyXG4gICAgICBkZXNjcmlwdGlvbjogbWVzc2dhZSxcclxuICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGlkZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0VmlzaWJsZU1vZGFsRGVsZXRlKGZhbHNlKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhpZGVNZW51U3ViTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRWaXNpYmxlTW9kYWxNZW51U3ViRGVsZXRlKGZhbHNlKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dNb2RhbCA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnZGF0YSBkZWxldGQnKVxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHNldERhdGFEZWxldGUoZGF0YSlcclxuICAgIHNldFZpc2libGVNb2RhbERlbGV0ZSh0cnVlKVxyXG4gIH07XHJcbiAgY29uc3Qgc2hvd0RlbGV0TWVudVN1Yk1vZGFsID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdkYXRhIGRlbGV0ZCcpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgc2V0RGF0YURlbGV0ZShkYXRhKVxyXG4gICAgc2V0VmlzaWJsZU1vZGFsTWVudVN1YkRlbGV0ZSh0cnVlKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uY2xpa0VkaXRNb2RhbCA9ICh2YWx1ZSwgb2JqKSA9PiB7XHJcbiAgICAvLyBjb21wYXJlU3luY1xyXG4gICAgY29uc29sZS5sb2coXCJvbmNsaWtFZGl0TW9kYWxcIilcclxuICAgIHNldERhdGFFZGl0KG9iailcclxuICAgIHNldFZpc2libGVFZGl0TW9kYWwodmFsdWUpXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25jbGlrRWRpdE1lbnVTdWJNb2RhbCA9ICh2YWx1ZSwgb2JqKSA9PiB7XHJcbiAgICAvLyBjb21wYXJlU3luY1xyXG4gICAgc2V0RGF0YUVkaXQob2JqKVxyXG4gICAgc2V0VmlzaWJsZUVkaXRNZW51U3ViTW9kYWwodmFsdWUpXHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0IG9uY2xpa0FkZFN1Yk1lbnVNb2RhbCA9ICh2YWx1ZSwgb2JqKSA9PiB7XHJcbiAgICAvLyBjb21wYXJlU3luY1xyXG4gICAgY29uc29sZS5sb2coXCJvbmNsaWtFZGl0TW9kYWxcIilcclxuICAgIHNldERhdGFFZGl0KG9iailcclxuICAgIHNldFZpc2libGVBZGRTdWJNZW51TW9kYWwodmFsdWUpXHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0IGhpZGVFZGl0TW9kYWwgPSAoKSA9PiB7XHJcbiAgICAvLyBzZXRWaXNpYmxlTW9kYWxEZWxldGUoZmFsc2UpXHJcbiAgICBzZXRWaXNpYmxlRWRpdE1vZGFsKGZhbHNlKVxyXG5cclxuICB9O1xyXG4gIGNvbnN0IGhpZGVTdWJNZW51TW9kYWwgPSAoKSA9PiB7XHJcbiAgICAvLyBzZXRWaXNpYmxlTW9kYWxEZWxldGUoZmFsc2UpXHJcbiAgICBzZXRWaXNpYmxlQWRkU3ViTWVudU1vZGFsKGZhbHNlKVxyXG5cclxuICB9O1xyXG4gIGNvbnN0IGhpZGVFZGl0TWVudVN1Yk1vZGFsID0gKCkgPT4ge1xyXG4gICAgLy8gc2V0VmlzaWJsZU1vZGFsRGVsZXRlKGZhbHNlKVxyXG4gICAgc2V0VmlzaWJsZUVkaXRNZW51U3ViTW9kYWwoZmFsc2UpXHJcblxyXG4gIH07XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT1cIkdvdmVybm1lbnQgLSBBZG1pbiBtYW5hZ2VtZW50XCIgdXJsPXtvcmlnaW59IG9yaWdpbj17b3JpZ2lufSB1c2VyPXtsb2dpbn1cclxuICAgICAgaXNNYWluPXt0cnVlfVxyXG4gICAgICBpbmRleFN1Yk1lbnU9e1wiMlwifVxyXG4gICAgICBpbmRleE1lbnU9e1wic3ViLTItMVwifVxyXG4gICAgICB0aXRsZVBhZ2U9e1wi4LmA4Lih4LiZ4Li54Lij4Lit4LiHXCJ9XHJcbiAgICAgIF9yb3V0ZXM9e1tcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYXRoOiAnL2FkbWluL2Rhc2hib3JhZCcsXHJcbiAgICAgICAgICBicmVhZGNydW1iTmFtZTogJ+C4q+C4meC5ieC4suC4q+C4peC4seC4gScsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgcGF0aDogJycsXHJcbiAgICAgICAgICBicmVhZGNydW1iTmFtZTogJ+C5gOC4oeC4meC4ueC4o+C4reC4hycsXHJcbiAgICAgICAgfV19XHJcbiAgICA+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2NvbnRleHRIb2xkZXJ9XHJcbiAgICAgICAgPE1vZGFsQWRkTWVudSBmZXRjaD17ZmV0Y2h9IHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgPE1vZGFsRWRpdE1lbnUgX3Zpc2libGU9e3Zpc2libGVFZGl0TW9kYWx9IGhpZGVFZGl0TW9kYWw9e2hpZGVFZGl0TW9kYWx9IGZldGNoPXtmZXRjaH0gdXNlcj17dXNlcn0gZGF0YUVkaXQ9e2RhdGFFZGl0fSAvPlxyXG4gICAgICAgIDxNb2RhbEVkaXRNZW51U3ViIF92aXNpYmxlPXt2aXNpYmxlRWRpdE1lbnVTdWJNb2RhbH0gaGlkZU1vZGFsPXtoaWRlRWRpdE1lbnVTdWJNb2RhbH0gZmV0Y2g9e2ZldGNofSB1c2VyPXt1c2VyfSBkYXRhRWRpdD17ZGF0YUVkaXR9IC8+XHJcbiAgICAgICAgPE1vZGFsQWRkTWVudVN1YiBfdmlzaWJsZT17dmlzaWJsZUFkZFN1Yk1lbnVNb2RhbH0gaGlkZU1vZGFsPXtoaWRlU3ViTWVudU1vZGFsfSBmZXRjaD17ZmV0Y2h9IHVzZXI9e3VzZXJ9IGRhdGFFZGl0PXtkYXRhRWRpdH0gLz5cclxuICAgICAgICA8U3BpbiBzcGlubmluZz17bG9hZGluZ30+XHJcbiAgICAgICAgICA8UmVhY3REcmFnTGlzdFZpZXdcclxuICAgICAgICAgICAgbm9kZVNlbGVjdG9yPVwiLmFudC1saXN0LmRyYWdnYWJsZVwiXHJcbiAgICAgICAgICAgIGxpbmVDbGFzc05hbWU9XCJkcmFnTGluZVwiXHJcbiAgICAgICAgICAgIG9uRHJhZ0VuZD17KGZyb21JbmRleCwgdG9JbmRleCkgPT5cclxuICAgICAgICAgICAgICBvbkRyYWdFbmQoZnJvbUluZGV4LCB0b0luZGV4LCBcIkxJU1QtSVRFTVwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHttZW51cy5sZW5ndGggPT0gMCAmJiA8RW1wdHkgLz59XHJcbiAgICAgICAgICAgIHttZW51cy5tYXAoKG9iaiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPXtcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeS5UZXh0IHN0cm9uZyBjbGFzc05hbWU9XCJncmFiYmFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEcmFnT3V0bGluZWQgY2xhc3NOYW1lPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7b2JqLm1lbnVfdGl0bGV9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeS5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWcgY29sb3I9e29iai5pc19zaG93ID09IDEgPyBcInN1Y2Nlc3NcIiA6IFwiZGVmYXVsdFwifSBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjEwcHhcIiwgbWFyZ2luUmlnaHQ6IFwiMHB4XCIgfX0+e29iai5pc19zaG93ID09IDEgPyBcIuC5g+C4iuC5ieC4h+C4suC4mVwiIDogXCLguYTguKHguYjguYPguIrguYnguIfguLLguJlcIn08L1RhZz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1sLTJcIiB0eXBlPVwiZGVmYXVsdFwiIG9uQ2xpY2s9eygpID0+IHsgb25jbGlrRWRpdE1vZGFsKHRydWUsIG9iaikgfX0+4LmB4LiB4LmJ4LmE4LiCPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAge29iai5oYXZlX3N1YiA9PSAxICYmIDxCdXR0b24gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMwNTk2NjlcIiwgY29sb3I6IFwid2hpdGVcIiwgYm9yZGVyQ29sb3I6IFwiIzA1OTY2OVwiIH19IG9uQ2xpY2s9eygpID0+IHsgb25jbGlrQWRkU3ViTWVudU1vZGFsKHRydWUsIG9iaikgfX0gY2xhc3NOYW1lPVwibWwtMlwiIHR5cGU9XCJzdWNjZXNzXCI+4LmA4Lie4Li04LmI4Lih4LmA4Lih4LiZ4Li54Lii4LmI4Lit4LiiPC9CdXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibWwtMlwiIHR5cGU9XCJkYW5nZXJcIiBvbkNsaWNrPXsoKSA9PiBzaG93TW9kYWwob2JqKX0+4Lil4LiaPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyYWdnYWJsZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFJlYWN0RHJhZ0xpc3RWaWV3XHJcbiAgICAgICAgICAgICAgICAgIG5vZGVTZWxlY3Rvcj1cIi5hbnQtbGlzdC1pdGVtLmRyYWdnYWJsZS1pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgbGluZUNsYXNzTmFtZT1cImRyYWdMaW5lXCJcclxuICAgICAgICAgICAgICAgICAgb25EcmFnRW5kPXsoZnJvbUluZGV4LCB0b0luZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG9uRHJhZ0VuZChmcm9tSW5kZXgsIHRvSW5kZXgsIFwiU1VCTElTVC1JVEVNXCIsIGluZGV4KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtvYmouaGF2ZV9zdWIgPT0gMSAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgIHtvYmoubWVudV9zdWJzLm1hcCgoaXRlbSwgaW5kZXgyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17aW5kZXgyfSBjbGFzc05hbWU9XCJkcmFnZ2FibGUtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ091dGxpbmVkIGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGEgdGl0bGU9e2l0ZW0ubWVudV90aXRsZX0gY2xhc3NOYW1lPVwiZ3JhYmJhYmxlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhZyBjb2xvcj17aXRlbS5pc19zaG93ID09IDEgPyBcInN1Y2Nlc3NcIiA6IFwiZGVmYXVsdFwifSBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjEwcHhcIiwgbWFyZ2luUmlnaHQ6IFwiMTBweFwiIH19PntpdGVtLmlzX3Nob3cgPT0gMSA/IFwi4LmD4LiK4LmJ4LiH4Liy4LiZXCIgOiBcIuC5hOC4oeC5iOC5g+C4iuC5ieC4h+C4suC4mVwifTwvVGFnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1yLTFcIiB0eXBlPVwiZGVmYXVsdFwiIG9uQ2xpY2s9eygpID0+IHsgb25jbGlrRWRpdE1lbnVTdWJNb2RhbCh0cnVlLCBpdGVtKSB9fT7guYHguIHguYnguYTguII8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtci0yXCIgdHlwZT1cImRhbmdlclwiIG9uQ2xpY2s9eygpID0+IHNob3dEZWxldE1lbnVTdWJNb2RhbChpdGVtKX0+4Lil4LiaPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3REcmFnTGlzdFZpZXc+XHJcbiAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICApKX1cclxuXHJcblxyXG4gICAgICAgICAgPC9SZWFjdERyYWdMaXN0Vmlldz5cclxuICAgICAgICA8L1NwaW4+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCLguITguLjguJPguJXguYnguK3guIfguIHguLLguKPguKXguJrguILguYnguK3guKHguLnguKXguKvguKPguLfguK3guYTguKHguYg/XCJcclxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlTW9kYWxEZWxldGV9XHJcbiAgICAgICAgb25Paz17b25EZWxldGV9XHJcbiAgICAgICAgb25DYW5jZWw9e2hpZGVNb2RhbH1cclxuICAgICAgICBva1RleHQ9XCLguKXguJpcIlxyXG4gICAgICAgIGNhbmNlbFRleHQ9XCLguKLguIHguYDguKXguLTguIFcIlxyXG4gICAgICAgIG9rQnV0dG9uUHJvcHM9e3tcclxuICAgICAgICAgICd0eXBlJzogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgICAnZGFuZ2VyJzogdHJ1ZVxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8cD7guITguLjguJPguJXguYnguK3guIfguIHguLLguKPguKXguJogXCJ7ZGF0YURlbGV0ZSA/IGRhdGFEZWxldGUubWVudV90aXRsZSA6IFwiXCJ9XCIg4Lir4Lij4Li34Lit4LmE4Lih4LmIPyAgPC9wPlxyXG5cclxuICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwi4LiE4Li44LiT4LiV4LmJ4Lit4LiH4LiB4Liy4Lij4Lil4Lia4LiC4LmJ4Lit4Lih4Li54Lil4Lir4Lij4Li34Lit4LmE4Lih4LmIP1wiXHJcbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZU1vZGFsTWVudVN1YkRlbGV0ZX1cclxuICAgICAgICBvbk9rPXtvbk1lbnVTdWJEZWxldGV9XHJcbiAgICAgICAgb25DYW5jZWw9e2hpZGVNZW51U3ViTW9kYWx9XHJcbiAgICAgICAgb2tUZXh0PVwi4Lil4LiaXCJcclxuICAgICAgICBjYW5jZWxUZXh0PVwi4Lii4LiB4LmA4Lil4Li04LiBXCJcclxuICAgICAgICBva0J1dHRvblByb3BzPXt7XHJcbiAgICAgICAgICAndHlwZSc6IFwicHJpbWFyeVwiLFxyXG4gICAgICAgICAgJ2Rhbmdlcic6IHRydWVcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPHA+4LiE4Li44LiT4LiV4LmJ4Lit4LiH4LiB4Liy4Lij4Lil4LiaIFwie2RhdGFEZWxldGUgPyBkYXRhRGVsZXRlLm1lbnVfdGl0bGUgOiBcIlwifVwiIOC4q+C4o+C4t+C4reC5hOC4oeC5iD8gIDwvcD5cclxuXHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcbi8qIGdldFNlcnZlclNpZGVQcm9wcyAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHJlcSB9ID0gY29udGV4dDtcclxuICBjb25zdCB7IG9yaWdpbiB9ID0gYWJzb2x1dGVVcmwocmVxKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG9yaWdpbixcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpvZGl0LXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kcmFnLWxpc3R2aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9