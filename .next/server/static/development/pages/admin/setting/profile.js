module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\admin\\setting\\profile.js": 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
var _jsxFileName = "C:\\Users\\Sackky\\Desktop\\govermentlt\\components\\NavBar\\NavBar.js";
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
var _jsxFileName = "C:\\Users\\Sackky\\Desktop\\govermentlt\\components\\SideBar\\SideBar.js";
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
var _jsxFileName = "C:\\Users\\Sackky\\Desktop\\govermentlt\\components\\layout\\LayoutAdmin.jsx";

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
var _jsxFileName = "C:\\Users\\Sackky\\Desktop\\govermentlt\\components\\menu\\TopicMenu.js";
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

/***/ "./pages/admin/setting/profile/index.js":
/*!**********************************************!*\
  !*** ./pages/admin/setting/profile/index.js ***!
  \**********************************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/layout/LayoutAdmin */ "./components/layout/LayoutAdmin.jsx");
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../middleware/utils */ "./middleware/utils.js");
var _jsxFileName = "C:\\Users\\Sackky\\Desktop\\govermentlt\\pages\\admin\\setting\\profile\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





 // import UserNav from '../components/navigation/User';


/* components */


/* utils */


const JoditEditor = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! jodit-react */ "jodit-react", 7)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! jodit-react */ "jodit-react")],
    modules: ["jodit-react"]
  }
});
const {
  Text,
  Title
} = antd__WEBPACK_IMPORTED_MODULE_1__["Typography"];
const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];
const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_1__["Input"];

const config = __webpack_require__(/*! ../../config */ "./pages/admin/config.js");

function Home(props) {
  const [api, contextHolder] = antd__WEBPACK_IMPORTED_MODULE_1__["notification"].useNotification();
  const {
    user,
    origin
  } = props;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const {
    profileId
  } = router.query;
  const {
    0: provinces,
    1: setProvinces
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);
  const {
    0: districts,
    1: setDistricts
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);
  const {
    0: subDistricts,
    1: setSubDistricts
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);
  const {
    0: previewImageLogo,
    1: setPreviewImageLogo
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);
  const {
    0: previewImagePerson1,
    1: setPreviewImagePerson1
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);
  const {
    0: previewImagePerson2,
    1: setPreviewImagePerson2
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);
  const {
    0: previewImagePerson3,
    1: setPreviewImagePerson3
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);
  const {
    0: imageLandingPageLogo,
    1: setImageLandingPageLogo
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);
  const {
    0: imageLandingPagePerson1,
    1: setImageLandingPagePerson1
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);
  const {
    0: imageLandingPagePerson2,
    1: setImageLandingPagePerson2
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);
  const {
    0: imageLandingPagePerson3,
    1: setImageLandingPagePerson3
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);
  const {
    0: previewVisibleLogo,
    1: setPreviewVisibleLogo
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false);
  const {
    0: previewVisiblePerson1,
    1: setPreviewVisiblePerson1
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false);
  const {
    0: previewVisiblePerson2,
    1: setPreviewVisiblePerson2
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false);
  const {
    0: previewVisiblePerson3,
    1: setPreviewVisiblePerson3
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false);
  const {
    0: logo,
    1: setLogo
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false);
  const {
    0: fields,
    1: setFields
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]);
  const {
    0: organizationData,
    1: setOrganizationData
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    fetchOrganizationData();
    fetchProvincesData();
  }, []);

  async function onSubmitHandler(value) {
    const data = {
      organization_id: user.organization_id,
      organization_name: value.organization_name,
      organization_name_eng: value.organization_name_eng,
      organization_logo: imageLandingPageLogo,
      organization_address: value.organization_address,
      organization_sub_district_id: value.subDistrictSelected,
      organization_email: value.organization_email,
      organization_email_alert: value.organization_email_alert,
      organization_phone: value.organization_phone,
      organization_fax: value.organization_fax,
      social_fb_pageid: value.social_fb_pageid,
      rss: value.rss,
      person01_name: value.person01_name,
      person01_position: value.person01_position,
      person01_image: imageLandingPagePerson1,
      person01_phone: value.person01_phone,
      person02_name: value.person02_name,
      person02_position: value.person02_position,
      person02_image: imageLandingPagePerson2,
      person02_phone: value.person02_phone,
      person03_name: value.person03_name,
      person03_position: value.person03_position,
      person03_image: imageLandingPagePerson3,
      person03_phone: value.person03_phone
    };
    console.log(data);
    const organizationData = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["apiInstance"])().put('/profile', data);

    if (organizationData.data.status == 200) {
      openNotificationRegisterSuccess();
      fetchOrganizationData();
      setTimeout(function () {
        //Start the timer
        router.push('/admin/setting/profile');
      }.bind(this), 2000);
    } else {
      openNotificationRegisterFail(organizationData.data.message);
    }
  }

  const openNotificationRegisterSuccess = () => {
    api.success({
      message: `บันทึกข้อมูลสำเร็จ`,
      description: 'บันทึกข้อมูลสำเร็จแล้ว',
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

  const {
    Dragger
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Upload"];
  const [form] = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].useForm();

  const onReset = () => {
    fetchDistrictsData(organizationData.sub_districts ? organizationData.sub_districts.provinces.province_id : 0);
    fetchSubDistrictData(organizationData.sub_districts ? organizationData.sub_districts.districts.district_id : 0);
    setFields([{
      name: ['organization_logo'],
      value: organizationData.organization_logo
    }, {
      name: ['organization_name'],
      value: organizationData.organization_name
    }, {
      name: ['organization_name_eng'],
      value: organizationData.organization_name_eng
    }, {
      name: ['organization_phone'],
      value: organizationData.organization_phone
    }, {
      name: ['organization_email'],
      value: organizationData.organization_email
    }, {
      name: ['organization_fax'],
      value: organizationData.organization_fax
    }, {
      name: ['organization_address'],
      value: organizationData.organization_address
    }, {
      name: ['provincesSelected'],
      value: organizationData.sub_districts ? organizationData.sub_districts.provinces.province_id : "0"
    }, {
      name: ['districtSelected'],
      value: organizationData.sub_districts ? organizationData.sub_districts.districts.district_id : "0"
    }, {
      name: ['subDistrictSelected'],
      value: organizationData.sub_districts ? organizationData.sub_districts.sub_district_id : "0"
    }, {
      name: ['social_fb_pageid'],
      value: organizationData.social_fb_pageid
    }, {
      name: ['organization_email_alert'],
      value: organizationData.organization_email_alert
    }, {
      name: ['rss'],
      value: organizationData.rss
    }, {
      name: ['person01_name'],
      value: organizationData.person01_name
    }, {
      name: ['person01_position'],
      value: organizationData.person01_position
    }, {
      name: ['person01_phone'],
      value: organizationData.person01_phone
    }, {
      name: ['person02_name'],
      value: organizationData.person02_name
    }, {
      name: ['person02_position'],
      value: organizationData.person02_position
    }, {
      name: ['person02_phone'],
      value: organizationData.person02_phone
    }, {
      name: ['person03_name'],
      value: organizationData.person03_name
    }, {
      name: ['person03_position'],
      value: organizationData.person03_position
    }, {
      name: ['person03_phone'],
      value: organizationData.person03_phone
    }]);
    setPreviewImageLogo('..\\..\\..\\uploads\\c-' + user.organization_id + '\\organization\\' + organizationData.organization_logo);
    setPreviewVisibleLogo(true);
    setImageLandingPageLogo(organizationData.organization_logo);
    setPreviewImagePerson1('..\\..\\..\\uploads\\c-' + user.organization_id + '\\organization\\' + organizationData.person01_image);
    setPreviewVisiblePerson1(true);
    setImageLandingPagePerson1(organizationData.person01_image);
    setPreviewImagePerson2('..\\..\\..\\uploads\\c-' + user.organization_id + '\\organization\\' + organizationData.person02_image);
    setPreviewVisiblePerson2(true);
    setImageLandingPagePerson2(organizationData.person02_image);
    setPreviewImagePerson3('..\\..\\..\\uploads\\c-' + user.organization_id + '\\organization\\' + organizationData.person03_image);
    setPreviewVisiblePerson3(true);
    setImageLandingPagePerson3(organizationData.person03_image);
  };

  const fetchOrganizationData = async () => {
    const _organizationData = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["apiInstance"])().get('organization/' + (user ? user.organization_id : 0)); // console.log(_organizationData.data.organization)


    setOrganizationData(_organizationData.data.organization);
    fetchDistrictsData(_organizationData.data.organization.sub_districts ? _organizationData.data.organization.sub_districts.provinces.province_id : 0);
    fetchSubDistrictData(_organizationData.data.organization.sub_districts ? _organizationData.data.organization.sub_districts.districts.district_id : 0);

    if (_organizationData.data.organization.organization_logo) {
      setPreviewImageLogo('..\\..\\..\\uploads\\c-' + user.organization_id + '\\organization\\' + _organizationData.data.organization.organization_logo);
      setPreviewVisibleLogo(true);
    }

    if (_organizationData.data.organization.person01_image) {
      setPreviewImagePerson1('..\\..\\..\\uploads\\c-' + user.organization_id + '\\organization\\' + _organizationData.data.organization.person01_image);
      setPreviewVisiblePerson1(true);
    }

    if (_organizationData.data.organization.person02_image) {
      setPreviewImagePerson2('..\\..\\..\\uploads\\c-' + user.organization_id + '\\organization\\' + _organizationData.data.organization.person02_image);
      setPreviewVisiblePerson2(true);
    }

    if (_organizationData.data.organization.person03_image) {
      setPreviewImagePerson3('..\\..\\..\\uploads\\c-' + user.organization_id + '\\organization\\' + _organizationData.data.organization.person03_image);
      setPreviewVisiblePerson3(true);
    } // setPreviewImageLogo('..\\..\\..\\uploads\\c-' + user.organization_id + '\\organization\\' + _organizationData.data.organization.organization_logo);
    // setPreviewVisibleLogo(true);
    // setImageLandingPageLogo(_organizationData.data.organization.organization_logo);


    setFields([// {
    //   name: ['organization_logo'],
    //   value: _organizationData.data.organization.organization_logo
    // },
    {
      name: ['organization_name'],
      value: _organizationData.data.organization.organization_name ? _organizationData.data.organization.organization_name : ""
    }, {
      name: ['organization_name_eng'],
      value: _organizationData.data.organization.organization_name_eng ? _organizationData.data.organization.organization_name_eng : ""
    }, {
      name: ['organization_phone'],
      value: _organizationData.data.organization.organization_phone ? _organizationData.data.organization.organization_phone : ""
    }, {
      name: ['organization_email'],
      value: _organizationData.data.organization.organization_email ? _organizationData.data.organization.organization_email : ""
    }, {
      name: ['provincesSelected'],
      value: _organizationData.data.organization.sub_districts ? _organizationData.data.organization.sub_districts.provinces.province_id : "0"
    }, {
      name: ['districtSelected'],
      value: _organizationData.data.organization.sub_districts ? _organizationData.data.organization.sub_districts.districts.district_id : "0"
    }, {
      name: ['subDistrictSelected'],
      value: _organizationData.data.organization.sub_districts ? _organizationData.data.organization.sub_districts.sub_district_id : "0"
    }, {
      name: ['organization_fax'],
      value: _organizationData.data.organization.organization_fax ? _organizationData.data.organization.organization_fax : ""
    }, {
      name: ['thumbnail_link'],
      value: _organizationData.data.organization.thumbnail_link ? _organizationData.data.organization.thumbnail_link : ""
    }, {
      name: ['organization_address'],
      value: _organizationData.data.organization.organization_address ? _organizationData.data.organization.organization_address : ""
    }, {
      name: ['organization_email_alert'],
      value: _organizationData.data.organization.organization_email_alert ? _organizationData.data.organization.organization_email_alert : ""
    }, {
      name: ['social_fb_pageid'],
      value: _organizationData.data.organization.social_fb_pageid ? _organizationData.data.organization.social_fb_pageid : ""
    }, {
      name: ['rss'],
      value: _organizationData.data.organization.rss ? _organizationData.data.organization.rss : ""
    }, {
      name: ['person01_name'],
      value: _organizationData.data.organization.person01_name ? _organizationData.data.organization.person01_name : ""
    }, {
      name: ['person01_position'],
      value: _organizationData.data.organization.person01_position ? _organizationData.data.organization.person01_position : ""
    }, {
      name: ['person01_phone'],
      value: _organizationData.data.organization.person01_phone ? _organizationData.data.organization.person01_phone : ""
    }, {
      name: ['person02_name'],
      value: _organizationData.data.organization.person02_name ? _organizationData.data.organization.person02_name : ""
    }, {
      name: ['person02_position'],
      value: _organizationData.data.organization.person02_position ? _organizationData.data.organization.person02_position : ""
    }, {
      name: ['person02_phone'],
      value: _organizationData.data.organization.person02_phone ? _organizationData.data.organization.person02_phone : ""
    }, {
      name: ['person03_name'],
      value: _organizationData.data.organization.person03_name ? _organizationData.data.organization.person03_name : ""
    }, {
      name: ['person03_position'],
      value: _organizationData.data.organization.person03_position ? _organizationData.data.organization.person03_position : ""
    }, {
      name: ['person03_phone'],
      value: _organizationData.data.organization.person03_phone ? _organizationData.data.organization.person03_phone : ""
    }]);
  };

  const fetchProvincesData = async () => {
    const _provincesData = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["apiInstance"])().get('province');

    setProvinces(_provincesData.data.data); // console.log(_provincesData.data.data)
  };

  const fetchDistrictsData = async province_id => {
    const _districtsData = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["apiInstance"])().get('district/' + province_id);

    setDistricts(_districtsData.data.data); // console.log(_districtsData.data.data)
  };

  const fetchSubDistrictData = async subDistrictID => {
    const _subDistrictsData = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["apiInstance"])().get('sub-district/' + subDistrictID);

    setSubDistricts(_subDistrictsData.data.data); // console.log(_subDistrictsData.data.data)
  };

  const handleProvincesChange = async value => {
    // console.log(value);
    setFields([{
      name: ['provincesSelected'],
      value: value
    }, {
      name: ['districtSelected'],
      value: "0"
    }, {
      name: ['subDistrictSelected'],
      value: "0"
    }]);
    fetchDistrictsData(value);
    setSubDistricts([]);
  };

  const handleDistrictChange = async value => {
    setFields([{
      name: ['districtSelected'],
      value: value
    }, {
      name: ['subDistrictSelected'],
      value: "0"
    }]);
    fetchSubDistrictData(value);
  };

  const imageUploadpropsLogo = {
    name: 'file',
    multiple: false,
    listType: 'text',
    maxCount: 1,
    action: "/api/upload/organization",
    preview: false,
    customRequest: options => {
      const data = new FormData();
      data.append('file', options.file);
      data.append('id', user.type_user == 1 ? "admin" : user.organization_id);
      const config = {
        "headers": {
          "content-type": 'multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s'
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(options.action, data, config).then(res => {
        setImageLandingPageLogo(res.data.data.list[0]._name);
        options.onSuccess(res.data, options.file);
      }).catch(err => {
        console.log(err);
      });
    },

    async onChange(info) {
      const {
        status
      } = info.file;

      switch (info.file.status) {
        case "done":
          if (!info.file.url && !info.file.preview) {
            info.file.preview = await getBase64(info.file.originFileObj);
          }

          setPreviewImageLogo(info.file.url || info.file.preview);
          setPreviewVisibleLogo(true);
          break;

        default: // error or removed
        // resetImagePreview()

      }
    },

    onRemove(info) {
      console.log("onRemove");
      console.log(info);
      resetImagePreview();
    }

  };
  const imageUploadpropsPerson1 = {
    name: 'file',
    multiple: false,
    listType: 'text',
    maxCount: 1,
    action: "/api/upload/organization",
    preview: false,
    customRequest: options => {
      const data = new FormData();
      data.append('file', options.file);
      data.append('id', user.type_user == 1 ? "admin" : user.organization_id);
      const config = {
        "headers": {
          "content-type": 'multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s'
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(options.action, data, config).then(res => {
        setImageLandingPagePerson1(res.data.data.list[0]._name);
        options.onSuccess(res.data, options.file);
      }).catch(err => {
        console.log(err);
      });
    },

    async onChange(info) {
      const {
        status
      } = info.file;

      switch (info.file.status) {
        case "done":
          if (!info.file.url && !info.file.preview) {
            info.file.preview = await getBase64(info.file.originFileObj);
          }

          setPreviewImagePerson1(info.file.url || info.file.preview);
          setPreviewVisiblePerson1(true);
          break;

        default: // resetImagePreview()

      }
    },

    onRemove(info) {
      console.log("onRemove");
      console.log(info);
      resetImagePreview();
    }

  };
  const imageUploadpropsPerson2 = {
    name: 'file',
    multiple: false,
    listType: 'text',
    maxCount: 1,
    action: "/api/upload/organization",
    preview: false,
    customRequest: options => {
      const data = new FormData();
      data.append('file', options.file);
      data.append('id', user.type_user == 1 ? "admin" : user.organization_id);
      const config = {
        "headers": {
          "content-type": 'multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s'
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(options.action, data, config).then(res => {
        setImageLandingPagePerson2(res.data.data.list[0]._name);
        options.onSuccess(res.data, options.file);
      }).catch(err => {
        console.log(err);
      });
    },

    async onChange(info) {
      const {
        status
      } = info.file;

      switch (info.file.status) {
        case "done":
          if (!info.file.url && !info.file.preview) {
            info.file.preview = await getBase64(info.file.originFileObj);
          }

          setPreviewImagePerson2(info.file.url || info.file.preview);
          setPreviewVisiblePerson2(true);
          break;

        default: // resetImagePreview()

      }
    },

    onRemove(info) {
      console.log("onRemove");
      console.log(info);
      resetImagePreview();
    }

  };
  const imageUploadpropsPerson3 = {
    name: 'file',
    multiple: false,
    listType: 'text',
    maxCount: 1,
    action: "/api/upload/organization",
    preview: false,
    customRequest: options => {
      const data = new FormData();
      data.append('file', options.file);
      data.append('id', user.type_user == 1 ? "admin" : user.organization_id);
      const config = {
        "headers": {
          "content-type": 'multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s'
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(options.action, data, config).then(res => {
        setImageLandingPagePerson3(res.data.data.list[0]._name);
        options.onSuccess(res.data, options.file);
      }).catch(err => {
        console.log(err);
      });
    },

    async onChange(info) {
      const {
        status
      } = info.file;

      switch (info.file.status) {
        case "done":
          if (!info.file.url && !info.file.preview) {
            info.file.preview = await getBase64(info.file.originFileObj);
          }

          setPreviewImagePerson3(info.file.url || info.file.preview);
          setPreviewVisiblePerson3(true);
          break;

        default: // resetImagePreview()

      }
    },

    onRemove(info) {
      console.log("onRemove");
      console.log(info);
      resetImagePreview();
    }

  };

  const resetImagePreview = () => {
    setPreviewVisibleLogo(false);
    setPreviewVisiblePerson1(false);
    setPreviewVisiblePerson2(false);
    setPreviewVisiblePerson3(false);
    setPreviewImageLogo(null);
    setPreviewImagePerson1(null);
    setPreviewImagePerson2(null);
    setPreviewImagePerson3(null);
  };

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result);

      reader.onerror = error => reject(error);
    });
  }

  return __jsx(_components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Government - Admin management",
    url: origin,
    origin: origin // user={login}
    ,
    indexSubMenu: "6",
    indexMenu: "sub-6-0",
    titlePage: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23",
    _routes: [{
      path: '/admin/dashborad',
      breadcrumbName: 'หน้าหลัก'
    }, {
      path: '/admin/setting/profile',
      breadcrumbName: 'ข้อมูลองค์กร'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652,
      columnNumber: 5
    }
  }, contextHolder, __jsx("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "w-5/6 lg:w-full mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    name: "basic",
    layout: "vertical",
    onFinish: onSubmitHandler,
    requiredMark: true,
    form: form,
    fields: fields,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inline-flex lg:w-1/6  pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "organization_logo",
    className: "block text-gray-700 text-sm font-bold mb-2 w-auto h-auto text-center w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกเลือกภาพ Logo องค์กร',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687,
      columnNumber: 15
    }
  }, __jsx(Dragger, _extends({
    maxCount: 1 // listType="picture"
    ,
    accept: ".jpg, .jpeg, .png"
  }, imageUploadpropsLogo, {
    className: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 698,
      columnNumber: 17
    }
  }), previewVisibleLogo && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Image"] // width={200}
  , {
    preview: false,
    src: previewImageLogo,
    style: {
      height: '116px',
      width: 'auto',
      objectFit: 'cover'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706,
      columnNumber: 44
    }
  }), __jsx("p", {
    className: "text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 716,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 Logo \u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23")), !previewVisibleLogo && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 722,
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 725,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 Logo \u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23"))))), __jsx("div", {
    className: "lg:w-5/6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 733,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "organization_name",
    label: "\u0E0A\u0E37\u0E48\u0E2D\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    rules: [{
      required: true,
      message: 'กรุณากรอกชื่อหน่วยงาน'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734,
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 745,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "organization_name_eng",
    label: "\u0E0A\u0E37\u0E48\u0E2D\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19 \u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกชื่อหน่วยงานภาษาอังกฤษ',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 753,
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19 \u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 764,
      columnNumber: 17
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "organization_address",
    label: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    rules: [{
      required: true,
      message: 'กรุณากรอกที่อยู่หน่วยงาน'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 774,
      columnNumber: 11
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 3,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 785,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "lg:inline-flex lg:w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 793,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-full lg:w-1/3 mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 794,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "provincesSelected",
    label: "\u0E08\u0E31\u0E07\u0E2B\u0E27\u0E31\u0E14",
    className: "block text-gray-700 text-sm w-full font-bold mb-2 ",
    style: {
      textAlign: "left !important"
    },
    rules: [{
      required: true,
      message: 'กรุณากรอกจังหวัด'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 795,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"] // defaultValue={()=>provincesSelected}
  // style={{ width: 120 }}
  , {
    onChange: handleProvincesChange,
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    filterOption: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 808,
      columnNumber: 17
    }
  }, __jsx(Option, {
    value: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 815,
      columnNumber: 19
    }
  }, "\u0E40\u0E25\u0E37\u0E2D\u0E01"), provinces ? provinces.map(object => {
    return __jsx(Option, {
      value: object.province_id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 817,
        columnNumber: 28
      }
    }, object.province_name, "  ");
  }) : ""))), __jsx("div", {
    className: "w-full lg:w-1/3 lg:mx-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 822,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "districtSelected",
    label: "\u0E2D\u0E33\u0E40\u0E20\u0E2D",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full ",
    style: {
      textAlign: "left !important"
    },
    rules: [{
      required: true,
      message: 'กรุณากรอกอำเภอ'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 823,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"] // defaultValue={()=>provincesSelected}
  // style={{ width: 120 }}
  // onChange={handleChange}
  , {
    onChange: handleDistrictChange,
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    filterOption: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 836,
      columnNumber: 17
    }
  }, __jsx(Option, {
    value: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 844,
      columnNumber: 19
    }
  }, "\u0E40\u0E25\u0E37\u0E2D\u0E01"), districts ? districts.map(object => {
    return __jsx(Option, {
      value: object.district_id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 846,
        columnNumber: 28
      }
    }, object.district_name, "  ");
  }) : ""))), __jsx("div", {
    className: "w-full lg:w-1/3 lg:ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 851,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "subDistrictSelected",
    label: "\u0E15\u0E33\u0E1A\u0E25",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full ",
    style: {
      textAlign: "left !important"
    },
    rules: [{
      required: true,
      message: 'กรุณากรอกตำบล'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 852,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"] // defaultValue={()=>provincesSelected}
  // style={{ width: 120 }}
  // onChange={handleChange}
  , {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    filterOption: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 865,
      columnNumber: 17
    }
  }, __jsx(Option, {
    value: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 872,
      columnNumber: 19
    }
  }, "\u0E40\u0E25\u0E37\u0E2D\u0E01"), subDistricts ? subDistricts.map(object => {
    return __jsx(Option, {
      value: object.sub_district_id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 874,
        columnNumber: 28
      }
    }, object.sub_district_name, "  ");
  }) : "")))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 880,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 881,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "organization_phone",
    label: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    rules: [{
      required: true,
      message: 'กรุณากรอกเบอร์โทร'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 882,
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 893,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 902,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "organization_fax",
    label: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C fax",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกเบอร์ fax',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 903,
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C fax",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 914,
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 924,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 925,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "organization_email",
    label: "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E25\u0E4C",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full",
    rules: [{
      required: true,
      message: 'กรุณากรอกอีเมลล์'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 926,
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E25\u0E4C",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 937,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 946,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "organization_email_alert",
    label: "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E25\u0E4C\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกอีเมลล์สำหรับแจ้งเตือน',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 947,
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E25\u0E4C\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 958,
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 968,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 969,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "social_fb_pageid",
    label: "facebook page id",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอก facebook page id',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 970,
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "facebook page id",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 981,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "lg:inline-flex lg:w-1/2 lg:ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 990,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "rss",
    label: "\u0E23\u0E2B\u0E31\u0E2A\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19\u0E20\u0E32\u0E04\u0E23\u0E31\u0E10\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E40\u0E0A\u0E37\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E23\u0E30\u0E1A\u0E1A E-GP",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกรหัสหน่วยงานภาครัฐสำหรับเชือมต่อระบบ E-GP',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 991,
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E23\u0E2B\u0E31\u0E2A\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19\u0E20\u0E32\u0E04\u0E23\u0E31\u0E10\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E40\u0E0A\u0E37\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E23\u0E30\u0E1A\u0E1A E-GP",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1002,
      columnNumber: 17
    }
  })))), __jsx("hr", {
    style: {
      backgroundColor: '#C4C4C4',
      height: 2,
      width: '100%'
    },
    className: "my-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1012,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1020,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inline-flex lg:w-1/6 pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1021,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "person01_image",
    className: "block text-gray-700 text-sm font-bold mb-2 w-auto h-auto text-center w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกเลือกภาพผู้บริหารที่ 1',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1022,
      columnNumber: 15
    }
  }, __jsx(Dragger, _extends({
    maxCount: 1 // listType="picture"
    ,
    accept: ".jpg, .jpeg, .png"
  }, imageUploadpropsPerson1, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1033,
      columnNumber: 17
    }
  }), previewVisiblePerson1 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    preview: false,
    src: previewImagePerson1,
    style: {
      height: '156px',
      width: 'auto',
      objectFit: 'cover'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1040,
      columnNumber: 47
    }
  }), __jsx("p", {
    className: "text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1049,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 1")), !previewVisiblePerson1 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1055,
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1056,
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1058,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 1"))))), __jsx("div", {
    className: "lg:w-5/6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1066,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "person01_name",
    label: "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 1",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกชื่อผู้บริหารคนที่ 1',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1067,
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 1",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1078,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "person01_position",
    label: "\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 1",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกชื่อตำแหน่งผู้บริหารคนที่ 1',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1086,
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 1",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1097,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "person01_phone",
    label: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 1",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกชื่อตำแหน่งผู้บริหารคนที่ 1',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1105,
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 1",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1116,
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1126,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inline-flex lg:w-1/6 pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1127,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "person02_image",
    className: "block text-gray-700 text-sm font-bold mb-2 w-auto h-auto text-center w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกเลือกภาพผู้บริหารที่ 2',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1128,
      columnNumber: 15
    }
  }, __jsx(Dragger, _extends({
    maxCount: 1 // listType="picture"
    ,
    accept: ".jpg, .jpeg, .png"
  }, imageUploadpropsPerson2, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1139,
      columnNumber: 17
    }
  }), previewVisiblePerson2 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Image"] // width={200}
  , {
    preview: false,
    src: previewImagePerson2,
    style: {
      height: '156px',
      width: 'auto',
      objectFit: 'cover'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1146,
      columnNumber: 47
    }
  }), __jsx("p", {
    className: "text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1156,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 2")), !previewVisiblePerson2 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1162,
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1163,
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1165,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 2"))))), __jsx("div", {
    className: "lg:w-5/6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1173,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "person02_name",
    label: "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 2",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกชื่อผู้บริหารคนที่ 2',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1174,
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 2",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1185,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "person02_position",
    label: "\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 2",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกชื่อตำแหน่งผู้บริหารคนที่ 2',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1193,
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 2",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1204,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "person02_phone",
    label: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 2",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกชื่อตำแหน่งผู้บริหารคนที่ 1',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1212,
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 2",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1223,
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1233,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inline-flex lg:w-1/6 pr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1234,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "person03_image",
    className: "block text-gray-700 text-sm font-bold mb-2 w-auto h-auto text-center w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกเลือกภาพผู้บริหารที่ 3',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1235,
      columnNumber: 15
    }
  }, __jsx(Dragger, _extends({
    maxCount: 1 // listType="picture"
    ,
    accept: ".jpg, .jpeg, .png"
  }, imageUploadpropsPerson3, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1246,
      columnNumber: 17
    }
  }), previewVisiblePerson3 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Image"] // width={200}
  , {
    preview: false,
    src: previewImagePerson3,
    style: {
      height: '156px',
      width: 'auto',
      objectFit: 'cover'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1253,
      columnNumber: 47
    }
  }), __jsx("p", {
    className: "text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1263,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 3")), !previewVisiblePerson3 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1269,
      columnNumber: 21
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["InboxOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1270,
      columnNumber: 23
    }
  })), __jsx("p", {
    className: "ant-upload-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1272,
      columnNumber: 21
    }
  }, "\u0E04\u0E25\u0E34\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E25\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14 \u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48 3"))))), __jsx("div", {
    className: "lg:w-5/6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1280,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "person03_name",
    label: "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 3",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกชื่อผู้บริหารคนที่ 3',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1281,
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 3",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1292,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "person03_position",
    label: "\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 3",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกชื่อตำแหน่งผู้บริหารคนที่ 3',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1300,
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 3",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1311,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "person03_phone",
    label: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 3",
    className: "block text-gray-700 text-sm font-bold mb-2 w-full" // rules={[
    //   {
    //     required: true,
    //     message: 'กรุณากรอกชื่อตำแหน่งผู้บริหารคนที่ 1',
    //   },
    // ]}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1319,
      columnNumber: 15
    }
  }, __jsx(TextArea, {
    id: "#",
    type: "text",
    placeholder: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E17\u0E35\u0E48 3",
    className: "resize-none border rounded-md",
    autoSize: {
      minRows: 1,
      maxRows: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1330,
      columnNumber: 17
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    className: "flex mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1340,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "lg:inline-flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1341,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "text-center lg:text-right w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1342,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
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
      lineNumber: 1343,
      columnNumber: 17
    }
  }, __jsx(Text, {
    className: "text-custom-black ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1358,
      columnNumber: 19
    }
  }, "\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E17")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"] // type="primary"
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
      lineNumber: 1360,
      columnNumber: 17
    }
  }, __jsx(Text, {
    className: "text-custom-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1373,
      columnNumber: 19
    }
  }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"))))))));
}
/* getServerSideProps */

async function getServerSideProps(context) {
  const {
    req
  } = context;
  const {
    origin
  } = Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["absoluteUrl"])(req);
  return {
    props: {
      origin
    }
  };
}

/***/ }),

/***/ 4:
/*!****************************************************!*\
  !*** multi ./pages/admin/setting/profile/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sackky\Desktop\govermentlt\pages\admin\setting\profile\index.js */"./pages/admin/setting/profile/index.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdkJhci9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaWRlQmFyL1NpZGVCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0QWRtaW4uanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9Ub3BpY01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4vY29uZmlnLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FkbWluL3NldHRpbmcvcHJvZmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpvZGl0LXJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJOYXZCYXIiLCJtZW51IiwidXNlciIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlU3RhdGUiLCJ0eXBlX3VzZXIiLCJuYW1lX29yZ2FuaXphdGlvbnMiLCJlbWFpbCIsIlNpZGVCYXIiLCJIZWFkZXIiLCJGb290ZXIiLCJTaWRlciIsIkNvbnRlbnQiLCJMYXlvdXQiLCJTdWJNZW51IiwiTWVudSIsIkxheW91dEFkbWluIiwiY2hpbGRyZW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJ0eXBlIiwidXJsIiwiaW1hZ2UiLCJvcmlnaW4iLCJpbmRleCIsInByb3BzIiwiX3JvdXRlcyIsImluZGV4TWVudSIsImlzTWFpbiIsInRpdGxlUGFnZSIsImluZGV4U3ViTWVudSIsImNvbGxhcHNlZCIsInNldENvbGxhcHNlZCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInNldFVzZXIiLCJ0b3BpY3MiLCJpY29uIiwidG9waWNzMiIsImNvbnRlbnRJbmRleCIsInNldENvbnRlbnRJbmRleCIsInNlbGVjdGVkS2V5Iiwic2V0U2VsZWN0ZWRLZXkiLCJjaGFuZ2VTZWxlY3RlZEtleSIsImV2ZW50Iiwia2V5IiwiZ290b1BhZ2UiLCJSb3V0ZXIiLCJwdXNoIiwidXNlRWZmZWN0IiwiZmV0Y2hVc2VyTG9naW4iLCJyb3V0ZXMyIiwicGF0aCIsImJyZWFkY3J1bWJOYW1lIiwiaXRlbVJlbmRlciIsInJvdXRlIiwicGFyYW1zIiwicm91dGVzIiwicGF0aHMiLCJsYXN0IiwiaW5kZXhPZiIsImxlbmd0aCIsImpvaW4iLCJ1c2VyTG9naW4iLCJjaGVja0lzTG9naW4iLCJoYW5kbGVDbGljayIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nQm90dG9tIiwibWFwIiwib2JqIiwid2luZG93IiwiaGlzdG9yeSIsImJhY2siLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsIm1pbkhlaWdodCIsIlRvcGljTWVudSIsInNlbGVjdGVkU3ViS2V5Iiwic3R5bGVkVG9waWNzIiwiZm9yRWFjaCIsInRvcGljIiwic3R5bGVkVG9waWNzQ2hpbGRyZW4iLCJ0b3BpY0NoaWxkcmVuIiwiaW5kZXhDaGlsZHJlbiIsIndpZHRoIiwiY29sb3IiLCJlIiwiaGFuZGxlTG9nb3V0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiQ29va2llcyIsInJlbW92ZSIsIlNFQ1JFVF9LRVkiLCJwcm9jZXNzIiwiZW52IiwiSldUX0tFWSIsInZlcmlmeVRva2VuIiwiand0VG9rZW4iLCJqd3QiLCJ2ZXJpZnkiLCJnZXRBcHBDb29raWVzIiwicmVxIiwicGFyc2VkSXRlbXMiLCJoZWFkZXJzIiwiY29va2llIiwiY29va2llc0l0ZW1zIiwic3BsaXQiLCJjb29raWVzIiwicGFyc2VkSXRlbSIsImRlY29kZVVSSSIsImFic29sdXRlVXJsIiwic2V0TG9jYWxob3N0IiwicHJvdG9jb2wiLCJob3N0IiwibG9jYXRpb24iLCJhZGREYXlzIiwiZGF0ZSIsImRheXMiLCJyZXN1bHQiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImZvcm1hdERhdGVXaXRob3V0VGltZSIsImRhdGVTdHJpbmciLCJnZXRVVENGdWxsWWVhciIsImdldFVUQ01vbnRoIiwic2xpY2UiLCJnZXRVVENEYXRlIiwiYXBpSW5zdGFuY2UiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJ0b2tlbiIsImdldCIsInBhcnNlSnd0IiwiaXNFeHBpcmVkIiwiYmFzZTY0VXJsIiwiYmFzZTY0IiwicmVwbGFjZSIsImpzb25QYXlsb2FkIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiYXRvYiIsImMiLCJjaGFyQ29kZUF0IiwidG9TdHJpbmciLCJfanNvblBheWxvYWQiLCJKU09OIiwicGFyc2UiLCJkYXRlTm93IiwicGFyc2VJbnQiLCJleHAiLCJnZXRUaW1lIiwic3Vic3RyaW5nIiwiY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZSIsImRhdGVTcGxpdCIsImVycm9yIiwiY29udmVydERhdGVEQnRvRGF0ZVBpY2tlcldpdGhUaW1lIiwiY29udmVydERhdGV0b1RoYWlEYXRlIiwiX2RhdGUiLCJjb252ZXJ0TW9udGh0b1RoYWlNb250aCIsImNvbnZlcnRZZWFydG9UaGFpWWVhciIsInllYXIiLCJtb250aCIsImNvbnZlcnREYXRldG9BZGREQiIsImdldElQQWRkcmVzcyIsInJlcyIsImRhdGEiLCJjb3VudHJ5X2NvZGUiLCJjb3VudHJ5X25hbWUiLCJjaXR5IiwicG9zdGFsIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJJUHY0Iiwic3RhdGUiLCJieXRlc1RvU2l6ZSIsImJ5dGVzIiwic2l6ZXMiLCJpIiwicm91bmQiLCJwb3ciLCJieXRlc1RvTUIiLCJOdW1iZXIiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImdldERhdGVkaWZmIiwic3RhcnREYXRlIiwidGltZUVuZCIsIm1vbWVudCIsIm5ld1N0YXJ0RGF0ZSIsIm5ld0VuZERhdGUiLCJvbmVfZGF5IiwiY2VpbCIsImdldEN1cnJlbnREYXRlIiwic2VwYXJhdG9yIiwibmV3RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJocmVmIiwiYXMiLCJmb3JtYXRGdW5jIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwcmVmZXRjaGVkIiwib2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJnZXRPYnNlcnZlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0VXJsIiwiYXNIcmVmIiwibm9kZU5hbWUiLCJ0YXJnZXQiLCJpc0xvY2FsIiwic2Nyb2xsIiwic2hhbGxvdyIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJyZXNvbHZlZEhyZWYiLCJwYXJzZWRBcyIsImhhbmRsZVJlZiIsInJlZiIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwiZXJyIiwicmVuZGVyIiwiY2hpbGQiLCJDaGlsZHJlbiIsImVsIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwiUmVhY3QiLCJ3YXJuIiwiUHJvcFR5cGVzIiwicmVxdWlyZSIsImV4YWN0IiwiTGluayIsInBhc3NIcmVmIiwidmFsdWUiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInByZXBhcmVSb3V0ZSIsInRvUm91dGUiLCJhdHRlbXB0cyIsImlzU2VydmVyUmVuZGVyIiwicGF0aG5hbWUiLCJhZGRCYXNlUGF0aCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiZGVsQmFzZVBhdGgiLCJjcmVkZW50aWFscyIsImdldFJlc3BvbnNlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIlByb21pc2UiLCJmZXRjaE5leHREYXRhIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJ1cGRhdGUiLCJtb2QiLCJuZXdEYXRhIiwicmVsb2FkIiwib3B0aW9ucyIsImNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyZXNvbHZlIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJyZWplY3QiLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJmZXRjaENvbXBvbmVudCIsImNhbmNlbGxlZCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5IiwiVEVTVF9ST1VURSIsInJlIiwiZGVjb2RlIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsImVzY2FwZWRSb3V0ZSIsImVzY2FwZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsImlzT3B0aW9uYWwiLCIkMSIsImlzQ2F0Y2hBbGwiLCJwb3MiLCJyZXBlYXQiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJjb25maWciLCJoZWlnaHQiLCJyZWFkb25seSIsInVwbG9hZGVyIiwiaW5zZXJ0SW1hZ2VBc0Jhc2U2NFVSSSIsInByZXBhcmVEYXRhIiwiYXBwZW5kIiwib3JnYW5pemF0aW9uX2lkIiwiZGVmYXVsdEhhbmRsZXJTdWNjZXNzIiwicmVzcCIsImZpbGVzVmFyaWFibGVOYW1lIiwidGV4dEhUTUwiLCJsaXN0IiwiZWxlbWVudCIsImV4dGVuc2lvbiIsImxhc3RJbmRleE9mIiwiX3BhdGgiLCJzZWxlY3Rpb24iLCJpbnNlcnRIVE1MIiwiZmlsZXMiLCJKb2RpdEVkaXRvciIsImR5bmFtaWMiLCJzc3IiLCJUZXh0IiwiVGl0bGUiLCJUeXBvZ3JhcGh5IiwiT3B0aW9uIiwiU2VsZWN0IiwiVGV4dEFyZWEiLCJJbnB1dCIsIkhvbWUiLCJhcGkiLCJjb250ZXh0SG9sZGVyIiwibm90aWZpY2F0aW9uIiwidXNlTm90aWZpY2F0aW9uIiwidXNlUm91dGVyIiwicHJvZmlsZUlkIiwicHJvdmluY2VzIiwic2V0UHJvdmluY2VzIiwiZGlzdHJpY3RzIiwic2V0RGlzdHJpY3RzIiwic3ViRGlzdHJpY3RzIiwic2V0U3ViRGlzdHJpY3RzIiwicHJldmlld0ltYWdlTG9nbyIsInNldFByZXZpZXdJbWFnZUxvZ28iLCJwcmV2aWV3SW1hZ2VQZXJzb24xIiwic2V0UHJldmlld0ltYWdlUGVyc29uMSIsInByZXZpZXdJbWFnZVBlcnNvbjIiLCJzZXRQcmV2aWV3SW1hZ2VQZXJzb24yIiwicHJldmlld0ltYWdlUGVyc29uMyIsInNldFByZXZpZXdJbWFnZVBlcnNvbjMiLCJpbWFnZUxhbmRpbmdQYWdlTG9nbyIsInNldEltYWdlTGFuZGluZ1BhZ2VMb2dvIiwiaW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjEiLCJzZXRJbWFnZUxhbmRpbmdQYWdlUGVyc29uMSIsImltYWdlTGFuZGluZ1BhZ2VQZXJzb24yIiwic2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjIiLCJpbWFnZUxhbmRpbmdQYWdlUGVyc29uMyIsInNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24zIiwicHJldmlld1Zpc2libGVMb2dvIiwic2V0UHJldmlld1Zpc2libGVMb2dvIiwicHJldmlld1Zpc2libGVQZXJzb24xIiwic2V0UHJldmlld1Zpc2libGVQZXJzb24xIiwicHJldmlld1Zpc2libGVQZXJzb24yIiwic2V0UHJldmlld1Zpc2libGVQZXJzb24yIiwicHJldmlld1Zpc2libGVQZXJzb24zIiwic2V0UHJldmlld1Zpc2libGVQZXJzb24zIiwibG9nbyIsInNldExvZ28iLCJmaWVsZHMiLCJzZXRGaWVsZHMiLCJvcmdhbml6YXRpb25EYXRhIiwic2V0T3JnYW5pemF0aW9uRGF0YSIsImZldGNoT3JnYW5pemF0aW9uRGF0YSIsImZldGNoUHJvdmluY2VzRGF0YSIsIm9uU3VibWl0SGFuZGxlciIsIm9yZ2FuaXphdGlvbl9uYW1lIiwib3JnYW5pemF0aW9uX25hbWVfZW5nIiwib3JnYW5pemF0aW9uX2xvZ28iLCJvcmdhbml6YXRpb25fYWRkcmVzcyIsIm9yZ2FuaXphdGlvbl9zdWJfZGlzdHJpY3RfaWQiLCJzdWJEaXN0cmljdFNlbGVjdGVkIiwib3JnYW5pemF0aW9uX2VtYWlsIiwib3JnYW5pemF0aW9uX2VtYWlsX2FsZXJ0Iiwib3JnYW5pemF0aW9uX3Bob25lIiwib3JnYW5pemF0aW9uX2ZheCIsInNvY2lhbF9mYl9wYWdlaWQiLCJyc3MiLCJwZXJzb24wMV9uYW1lIiwicGVyc29uMDFfcG9zaXRpb24iLCJwZXJzb24wMV9pbWFnZSIsInBlcnNvbjAxX3Bob25lIiwicGVyc29uMDJfbmFtZSIsInBlcnNvbjAyX3Bvc2l0aW9uIiwicGVyc29uMDJfaW1hZ2UiLCJwZXJzb24wMl9waG9uZSIsInBlcnNvbjAzX25hbWUiLCJwZXJzb24wM19wb3NpdGlvbiIsInBlcnNvbjAzX2ltYWdlIiwicGVyc29uMDNfcGhvbmUiLCJwdXQiLCJzdGF0dXMiLCJvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJTdWNjZXNzIiwic2V0VGltZW91dCIsImJpbmQiLCJvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJGYWlsIiwicGxhY2VtZW50IiwibWVzc2dhZSIsIkRyYWdnZXIiLCJVcGxvYWQiLCJmb3JtIiwiRm9ybSIsInVzZUZvcm0iLCJvblJlc2V0IiwiZmV0Y2hEaXN0cmljdHNEYXRhIiwic3ViX2Rpc3RyaWN0cyIsInByb3ZpbmNlX2lkIiwiZmV0Y2hTdWJEaXN0cmljdERhdGEiLCJkaXN0cmljdF9pZCIsInN1Yl9kaXN0cmljdF9pZCIsIl9vcmdhbml6YXRpb25EYXRhIiwib3JnYW5pemF0aW9uIiwidGh1bWJuYWlsX2xpbmsiLCJfcHJvdmluY2VzRGF0YSIsIl9kaXN0cmljdHNEYXRhIiwic3ViRGlzdHJpY3RJRCIsIl9zdWJEaXN0cmljdHNEYXRhIiwiaGFuZGxlUHJvdmluY2VzQ2hhbmdlIiwiaGFuZGxlRGlzdHJpY3RDaGFuZ2UiLCJpbWFnZVVwbG9hZHByb3BzTG9nbyIsIm11bHRpcGxlIiwibGlzdFR5cGUiLCJtYXhDb3VudCIsImFjdGlvbiIsInByZXZpZXciLCJjdXN0b21SZXF1ZXN0IiwiRm9ybURhdGEiLCJmaWxlIiwicG9zdCIsInRoZW4iLCJfbmFtZSIsIm9uU3VjY2VzcyIsImNhdGNoIiwib25DaGFuZ2UiLCJpbmZvIiwiZ2V0QmFzZTY0Iiwib3JpZ2luRmlsZU9iaiIsIm9uUmVtb3ZlIiwicmVzZXRJbWFnZVByZXZpZXciLCJpbWFnZVVwbG9hZHByb3BzUGVyc29uMSIsImltYWdlVXBsb2FkcHJvcHNQZXJzb24yIiwiaW1hZ2VVcGxvYWRwcm9wc1BlcnNvbjMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJvYmplY3RGaXQiLCJyZXF1aXJlZCIsIm1pblJvd3MiLCJtYXhSb3dzIiwidGV4dEFsaWduIiwib2JqZWN0IiwicHJvdmluY2VfbmFtZSIsImRpc3RyaWN0X25hbWUiLCJzdWJfZGlzdHJpY3RfbmFtZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwibWFyZ2luQm90dG9tIiwibWFyZ2lu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REYsR0FBUDtBQUtELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaDNDRCw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWRtaW5cXHNldHRpbmdcXHByb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJzdGF0aWNcXFxcZGV2ZWxvcG1lbnRcXFxccGFnZXNcXFxcYWRtaW5cXFxcc2V0dGluZ1xcXFxwcm9maWxlLmpzXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IERyYXdlciwgQnV0dG9uLCBJbWFnZSwgQXZhdGFyIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgTWVudU91dGxpbmVkLCBVc2VyT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG4vLyBpbXBvcnQgXCIuL05hdkJhci5tb2R1bGUuY3NzXCI7XHJcbi8vIGltcG9ydCBsb2dvIGZyb20gXCIuLy4uLy4uL2xvZ28uc3ZnXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBOYXZCYXIgPSAoeyBtZW51LCB1c2VyIH0pID0+IHtcclxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LXRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgaWNvbj17PE1lbnVPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGUodHJ1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwi4LmA4Lih4LiZ4Li5XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtc2NyZWVuXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgLy8gb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIHZpc2libGU9e3Zpc2libGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHttZW51fVxyXG4gICAgICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC03IHctYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXsnXFxcXGltYWdlc1xcXFxsb2dvLWdvdmVybm1lbnQucG5nJ31cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc2l6ZT17MzB9IGljb249ezxVc2VyT3V0bGluZWQgLz59IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+eyF1c2VyID8gXCJcIiA6IHVzZXIudHlwZV91c2VyID09IDEgPyBcIuC4nOC4ueC5ieC4lOC4ueC5geC4peC4o+C4sOC4muC4mlwiIDogdXNlci5uYW1lX29yZ2FuaXphdGlvbnN9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Vc2VyOiB7IXVzZXIgPyBcIlwiIDogdXNlci5lbWFpbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8TGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVMb2dvdXQoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggbGc6dy1hdXRvIHctZnVsbCBweC0yIHB5LTIgcm91bmRlZCBoLTggdGV4dC13aGl0ZSBiZy1yZWQtNjAwIGZvbnQtYm9sZCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaG92ZXI6YmctcmVkLTYwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDguK3guK3guIHguIjguLLguIHguKPguLDguJrguJpcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPiAqL31cclxuICAgICAgICA8L25hdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG4vLyBpbXBvcnQgXCIuL1NpZGVCYXIubW9kdWxlLmNzc1wiXHJcbmNvbnN0IFNpZGVCYXIgPSAoeyBtZW51IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dC5TaWRlclxyXG4gICAgICBjbGFzc05hbWU9XCJzaWRlYmFyIGgtYXV0b1wiXHJcbiAgICAgIGJyZWFrcG9pbnQ9e1wibGdcIn1cclxuICAgICAgdGhlbWU9XCJsaWdodFwiXHJcbiAgICAgIGNvbGxhcHNlZFdpZHRoPXswfVxyXG4gICAgICB0cmlnZ2VyPXtudWxsfVxyXG4gICAgPlxyXG4gICAgICAgIHttZW51fVxyXG4gICAgPC9MYXlvdXQuU2lkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7IiwiaW1wb3J0IHtcclxuICBEYXNoYm9hcmRPdXRsaW5lZCwgTWFpbE91dGxpbmVkLCBUb29sT3V0bGluZWRcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IEJyZWFkY3J1bWIsIENvbCwgTGF5b3V0LCBNZW51LCBQYWdlSGVhZGVyLCBSb3cgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuLyogQ29tcG9uZW50cyAqL1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY2hlY2tJc0xvZ2luIH0gZnJvbSAnLi4vLi4vbWlkZGxld2FyZS91dGlscyc7XHJcbi8vIGltcG9ydCBUb3BpY01lbnUgZnJvbSBcIi4vY29tcG9uZW50cy9Ub3BpY01lbnVcIjtcclxuaW1wb3J0IFRvcGljTWVudSBmcm9tIFwiLi8uLi8uLi9jb21wb25lbnRzL21lbnUvVG9waWNNZW51XCI7XHJcbi8vIGltcG9ydCBcIi4vQXBwLmNzc1wiO1xyXG4vLyAgaW1wb3J0IFwiLi9BcHAubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLy4uLy4uL2NvbXBvbmVudHMvTmF2QmFyL05hdkJhclwiO1xyXG5pbXBvcnQgU2lkZUJhciBmcm9tIFwiLi8uLi8uLi9jb21wb25lbnRzL1NpZGVCYXIvU2lkZUJhclwiO1xyXG4vLyBpbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlci9Gb290ZXJEZWZhdWx0JztcclxuY29uc3QgeyBIZWFkZXIsIEZvb3RlciwgU2lkZXIsIENvbnRlbnQgfSA9IExheW91dDtcclxuXHJcbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXRBZG1pbih7XHJcbiAgY2hpbGRyZW4sXHJcbiAgdGl0bGUgPSAnR292ZXJubWVudCcsXHJcbiAgZGVzY3JpcHRpb24gPSAnTmV4dC5qcyB3aXRoIFNlcXVlbGl6ZSB8IEEgYm9pbGVycGxhdGUgTmV4dC5qcyBhbmQgU2VxdWVsaXplIGZyb20gZHlhcmZpLmdpdGh1Yi5pbycsXHJcbiAga2V5d29yZHMgPSAnTmV4dC5qcywgU2VxdWVsaXplLCBPUk0sIEpXVCwgSnNvbiBXZWIgVG9rZW5zLCBBdXRoZW50aWNhdGlvbiwgQXBwbGljYXRpb24nLFxyXG4gIHR5cGUgPSAnb2JqZWN0JyxcclxuICB1cmwgPSAnLycsXHJcbiAgaW1hZ2UgPSAnL25leHRqcy5zdmcnLFxyXG4gIG9yaWdpbiA9ICcnLFxyXG4gIGluZGV4LFxyXG4gIHByb3BzLFxyXG4gIF9yb3V0ZXMgPSBbXSxcclxuICBpbmRleE1lbnUgPSBcIjFcIixcclxuICBpc01haW4gPSBmYWxzZSxcclxuICB0aXRsZVBhZ2UgPSBcInRpdGxlUGFnZVwiLFxyXG4gIGluZGV4U3ViTWVudSA9IFwiXCJcclxufSkge1xyXG4gIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gIGNvbnN0IHRvcGljcyA9IFtcclxuICAgIHsgdGl0bGU6IFwi4Lir4LiZ4LmJ4Liy4Lir4Lil4Lix4LiBXCIsIGljb246IDwgRGFzaGJvYXJkT3V0bGluZWQgLz4gfSxcclxuICAgIHsgdGl0bGU6IFwi4LiI4Lix4LiU4LiB4Liy4Lij4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZXCIsIGljb246IDwgVG9vbE91dGxpbmVkIC8+IH0sXHJcbiAgICB7IHRpdGxlOiBcIuC4iOC4seC4lOC4geC4suC4o+C4guC5iOC4suC4p+C4m+C4o+C4sOC4iuC4suC4quC4seC4oeC4nuC4seC4meC4mOC5jFwiLCBpY29uOiA8IFRvb2xPdXRsaW5lZCAvPiB9LFxyXG4gICAgeyB0aXRsZTogXCLguIjguLHguJTguIHguLLguKPguKfguLHguJnguKvguKLguLjguJTguJ7guLTguYDguKjguKlcIiwgaWNvbjogPCBUb29sT3V0bGluZWQgLz4gfSxdO1xyXG4gIGNvbnN0IHRvcGljczIgPSBbXHJcbiAgICB7IHRpdGxlOiBcIuC4q+C4meC5ieC4suC4q+C4peC4seC4gVwiLCBpY29uOiA8IERhc2hib2FyZE91dGxpbmVkIC8+IH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIuC4iOC4seC4lOC4geC4suC4o+C5gOC4meC4t+C5ieC4reC4q+C4slwiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPixcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICB7IHRpdGxlOiBcIuC4guC5iOC4suC4p+C4geC4tOC4iOC4geC4o+C4o+C4oVwiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAgICAgIHsgdGl0bGU6IFwi4LiC4LmI4Liy4Lin4Lib4Lij4Liw4LiK4Liy4Liq4Lix4Lih4Lie4Lix4LiZ4LiY4LmMXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+IH0sXHJcbiAgICAgICAgeyB0aXRsZTogXCLguILguYjguLLguKfguIjguLHguJTguIvguLfguYnguK3guIjguLHguJTguIjguYnguLLguIdcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgICAgICB7IHRpdGxlOiBcIuC4peC4tOC4h+C4hOC5jOC4q+C4meC5iOC4p+C4ouC4h+C4suC4meC4l+C4teC5iOC5gOC4geC4teC5iOC4ouC4p+C4guC5ieC4reC4h1wiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAgICAgIHsgdGl0bGU6IFwi4LiB4Lij4Liw4LiU4Liy4LiZ4LiC4LmI4Liy4LinXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+IH0sXHJcbiAgICAgICAgeyB0aXRsZTogXCLguITguKXguLHguIfguYDguK3guIHguKrguLLguKNcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgICAgICB7IHRpdGxlOiBcIuC4quC4s+C4o+C4p+C4iOC4hOC4p+C4suC4oeC4hOC4tOC4lOC5gOC4q+C5h+C4mVwiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAgICAgIHsgdGl0bGU6IFwi4Lin4Liy4Lij4Liq4Liy4LijXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+IH0sXHJcbiAgICAgICAgeyB0aXRsZTogXCLguKPguLLguKLguIrguLfguYjguK3guJbguKfguLLguKLguJ7guKPguLDguJ7guKNcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwi4LiI4Lix4LiU4LiB4Liy4Lij4LmA4Lih4LiZ4Li5XCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+LFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIHsgdGl0bGU6IFwi4LmA4Lih4LiZ4Li54Lir4Lil4Lix4LiBXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+IH0sXHJcbiAgICAgICAgeyB0aXRsZTogXCLguYDguKHguJnguLnguKPguK3guIdcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHsgdGl0bGU6IFwi4LiC4LmJ4Lit4Lih4Li54Lil4LmA4Lih4LiZ4Li54Lij4LmJ4Lit4LiH4LiX4Li44LiB4LiC4LmMXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+IH0sXHJcbiAgICB7IHRpdGxlOiBcIuC4guC5ieC4reC4oeC4ueC4peC5gOC4oeC4meC4ueC4leC4tOC4lOC4leC5iOC4reC5gOC4o+C4slwiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAgeyB0aXRsZTogXCLguKPguLLguKLguIfguLLguJnguKrguKPguLjguJtcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwi4LiV4Lix4LmJ4LiH4LiE4LmI4Liy4Lij4Liw4Lia4LiaXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+LFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIHsgdGl0bGU6IFwi4LiC4LmJ4Lit4Lih4Li54Lil4Lit4LiH4LiE4LmM4LiB4LijKOC4iOC4seC4lOC4geC4suC4o+C5guC4peC5guC4geC5iSlcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgICAgICB7IHRpdGxlOiBcIuC4iOC4seC4lOC4geC4suC4o+C4mOC4teC4oVwiLCBpY29uOiA8IE1haWxPdXRsaW5lZCAvPiB9LFxyXG4gICAgICAgIHsgdGl0bGU6IFwi4Liq4LmI4Lin4LiZ4Lir4Lix4Lin4LmA4Lin4LmH4Lia4LmE4LiL4LiV4LmMXCIsIGljb246IDwgTWFpbE91dGxpbmVkIC8+IH0sXHJcbiAgICAgICAgeyB0aXRsZTogXCLguIjguLHguJTguIHguLLguKPguK3guLfguYjguJnguYZcIiwgaWNvbjogPCBNYWlsT3V0bGluZWQgLz4gfSxcclxuICAgICAgXVxyXG4gICAgfSxcclxuICBdO1xyXG4gIGNvbnN0IFtjb250ZW50SW5kZXgsIHNldENvbnRlbnRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2VsZWN0ZWRLZXksIHNldFNlbGVjdGVkS2V5XSA9IHVzZVN0YXRlKFwiMFwiKTtcclxuICBjb25zdCBjaGFuZ2VTZWxlY3RlZEtleSA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3Qga2V5ID0gZXZlbnQua2V5O1xyXG4gICAgc2V0U2VsZWN0ZWRLZXkoa2V5KTtcclxuICAgIGdvdG9QYWdlKGtleSk7XHJcbiAgICAvLyBzZXRDb250ZW50SW5kZXgoK2tleSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ290b1BhZ2UgPSAoa2V5KSA9PiB7XHJcblxyXG4gICAgaWYgKHVzZXIudHlwZV91c2VyID09IDEpIHtcclxuICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICBjYXNlIFwiMFwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9kYXNoYm9yYWQnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQtb3JnYW5pemF0aW9uJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiMlwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50LWluZm9ybWF0aW9uJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiM1wiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50LWF1dG8tbGFuZGluZ3BhZ2UnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICBjYXNlIFwiMFwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9kYXNoYm9yYWQnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzdWItMS0wXCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQvYWN0aXZpdGllcycpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN1Yi0xLTFcIjpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC9pbmZvcm1hdGlvbicpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN1Yi0xLTJcIjpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC9wdXJjaGFzZS1uZXdzJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTEtM1wiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50L2Jhbm5lcicpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN1Yi0xLTRcIjpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC93ZWJib2FyZCcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN1Yi0xLTVcIjpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC9kb2N1bWVudHMnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzdWItMS02XCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQvcG9sbHMnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzdWItMS03XCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQvam91cm5hbCcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN1Yi0xLThcIjpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vbWFuYWdlbWVudC9ibGVzc2luZy1saXN0Jyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTItMFwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50LW1lbnUvcHJpbWFyeS1tZW51Jyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTItMVwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50LW1lbnUvc2Vjb3VuZGFyeS1tZW51Jyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiM1wiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50LWNvbXBsYWluJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiNFwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9tYW5hZ2VtZW50LWNvbnRhY3QnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCI1XCI6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL3JlcG9ydCcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN1Yi02LTBcIjpcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vc2V0dGluZy9wcm9maWxlJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTYtMVwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9zZXR0aW5nL3RoZW1lJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTYtMlwiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9zZXR0aW5nL2NvdmVyJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic3ViLTYtM1wiOlxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9zZXR0aW5nL2dlbmVyYWwnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2Vycm9yLTQwNCcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gIH07XHJcbiAgY29uc3QgTWVudSA9IChcclxuICAgIDxUb3BpY01lbnVcclxuICAgICAgdG9waWNzPXshdXNlciA/IFtdIDogdXNlci50eXBlX3VzZXIgPT0gMSA/IHRvcGljcyA6IHRvcGljczJ9XHJcbiAgICAgIHNlbGVjdGVkS2V5PXtpbmRleE1lbnV9XHJcbiAgICAgIGNoYW5nZVNlbGVjdGVkS2V5PXtjaGFuZ2VTZWxlY3RlZEtleX1cclxuICAgICAgc2VsZWN0ZWRTdWJLZXk9e2luZGV4U3ViTWVudX1cclxuICAgIC8+XHJcbiAgKTtcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFVzZXJMb2dpbigpXHJcbiAgICAvLyByZW5kZXJLZXlNZW51KHByb3BzLmFzUGF0aCk7XHJcbiAgfSwgW10pXHJcblxyXG5cclxuICBjb25zdCByb3V0ZXMyID0gW3tcclxuICAgIHBhdGg6ICdpbmRleCcsXHJcbiAgICBicmVhZGNydW1iTmFtZTogJ2hvbWUnXHJcbiAgfSwge1xyXG4gICAgcGF0aDogJ2ZpcnN0JyxcclxuICAgIGJyZWFkY3J1bWJOYW1lOiAnZmlyc3QnXHJcbiAgfSwge1xyXG4gICAgcGF0aDogJ3NlY29uZCcsXHJcbiAgICBicmVhZGNydW1iTmFtZTogJ3NlY29uZCdcclxuICB9XTtcclxuICBmdW5jdGlvbiBpdGVtUmVuZGVyKHJvdXRlLCBwYXJhbXMsIHJvdXRlcywgcGF0aHMpIHtcclxuICAgIGNvbnN0IGxhc3QgPSByb3V0ZXMuaW5kZXhPZihyb3V0ZSkgPT09IHJvdXRlcy5sZW5ndGggLSAxO1xyXG4gICAgcmV0dXJuIGxhc3QgPyA8c3Bhbj57cm91dGUuYnJlYWRjcnVtYk5hbWV9PC9zcGFuPiA6IDxMaW5rIHRvPXtwYXRocy5qb2luKCcvJyl9Pntyb3V0ZS5icmVhZGNydW1iTmFtZX08L0xpbms+O1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VyTG9naW4oKSB7XHJcbiAgICBjb25zdCB1c2VyTG9naW4gPSBhd2FpdCBjaGVja0lzTG9naW4oKVxyXG4gICAgLy8gY29uc29sZS5sb2codXNlckxvZ2luKVxyXG4gICAgc2V0VXNlcih1c2VyTG9naW4pXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlKCFhY3RpdmUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cImluZGV4LCBmb2xsb3dcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e2tleXdvcmRzfSAvPlxyXG5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgcHJvcGVydHk9XCJ0d2l0dGVyOmltYWdlOnNyY1wiXHJcbiAgICAgICAgICBjb250ZW50PXtgJHtvcmlnaW59JHtpbWFnZX0/dj0ke01hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMCl9YH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjp1cmxcIiBjb250ZW50PXt1cmx9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XHJcblxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcclxuICAgICAgICAgIGNvbnRlbnQ9e2Ake29yaWdpbn0ke2ltYWdlfT92PSR7TWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwKX1gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXt1cmx9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD17dHlwZX0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXt1cmx9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxyXG5cclxuICAgICAgICB7LyogPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPiAqL31cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ub1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC41LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCI+PC9saW5rPlxyXG4gICAgICAgIHsvKiA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC05YUl0Mm5ScEMxMlVrOWdTOWJhRGw0MTFOUUFwRm1DMjZFd0FPSDhXZ1psNU1ZWXhGZmMrTmNQYjFkS0dqN1NrXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAvPiAqL31cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICB7LyogPEhlYWRlciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTRcIj48L2Rpdj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8Rm9vdGVyIC8+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgIDxOYXZCYXIgbWVudT17TWVudX0gdXNlcj17dXNlcn0gLz5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPFNpZGVCYXIgbWVudT17TWVudX0gLz5cclxuICAgICAgICAgIDxMYXlvdXQuQ29udGVudCBjbGFzc05hbWU9XCJjb250ZW50IHctZnVsbFwiPlxyXG4gICAgICAgICAgICB7Lyoge3RvcGljc1tjb250ZW50SW5kZXhdfSAqL31cclxuICAgICAgICAgICAgPENvbnRlbnQgY2xhc3NOYW1lPVwidy1mdWxsXCIgc3R5bGU9e3sgcGFkZGluZ1RvcDogMCwgcGFkZGluZ0xlZnQ6IFwiMXJlbVwiLCBwYWRkaW5nUmlnaHQ6IFwiMXJlbVwiLCBwYWRkaW5nQm90dG9tOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0gY2xhc3NOYW1lPVwicGItMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc01haW4gJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9IGNsYXNzTmFtZT1cIlwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJwLTEuNSBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFVzZXJPdXRsaW5lZCBjbGFzc05hbWU9XCJ0ZXh0LTR4bFwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC00IHRleHQtNHhsXCI+e3RpdGxlUGFnZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQganVzdGlmeS1pdGVtcy1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJwLTEuNSAganVzdGlmeS1lbmQganVzdGlmeS1pdGVtcy1lbmQgcHQtOFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfcm91dGVzLm1hcCgob2JqLCBpbmRleCwgeyBsZW5ndGggfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggKyAxID09PSBsZW5ndGgpIHsgLy9sYXN0IGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4+e29iai5icmVhZGNydW1iTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxCcmVhZGNydW1iLkl0ZW0gaHJlZj17b2JqLnBhdGh9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntvYmouYnJlYWRjcnVtYk5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JyZWFkY3J1bWIuSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CcmVhZGNydW1iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgeyFpc01haW4gJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9IGNsYXNzTmFtZT1cIlwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2VIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBnaG9zdD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25CYWNrPXsoKSA9PiB3aW5kb3cuaGlzdG9yeS5iYWNrKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdWJUaXRsZT1cIlRoaXMgaXMgYSBzdWJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmE9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7X3JvdXRlcy5tYXAoKG9iaiwgaW5kZXgsIHsgbGVuZ3RoIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggKyAxID09PSBsZW5ndGgpIHsgLy9sYXN0IGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3Bhbj57b2JqLmJyZWFkY3J1bWJOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxCcmVhZGNydW1iLkl0ZW0gaHJlZj17b2JqLnBhdGh9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e29iai5icmVhZGNydW1iTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CcmVhZGNydW1iLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JyZWFkY3J1bWI+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8Um93IGNsYXNzTmFtZT1cInAtMS41IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgPFVzZXJPdXRsaW5lZCBjbGFzc05hbWU9XCJ0ZXh0LTR4bFwiIC8+XHJcbiAgICA8aDEgY2xhc3NOYW1lPVwibWwtNCBtdC00IHRleHQtNHhsXCI+bWFuYWdlbWVudCBhY3Rpdml0aWVzPC9oMT5cclxuICA8L1Jvdz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Lz59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxDb2wgc3Bhbj17MTJ9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1pdGVtcy1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbFwiIHN0eWxlPXt7IHBhZGRpbmc6IDI0LCBiYWNrZ3JvdW5kOiAnI2ZmZicsIG1pbkhlaWdodDogMzYwIH19PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgICAgICA8L0xheW91dC5Db250ZW50PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnU7XHJcblxyXG5jb25zdCBUb3BpY01lbnUgPSAoeyB0b3BpY3MsIHNlbGVjdGVkS2V5LCBjaGFuZ2VTZWxlY3RlZEtleSwgc2VsZWN0ZWRTdWJLZXkgfSkgPT4ge1xyXG4gICAgY29uc3Qgc3R5bGVkVG9waWNzID0gW107XHJcbiAgICB0b3BpY3MuZm9yRWFjaCgodG9waWMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKHRvcGljLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlZFRvcGljc0NoaWxkcmVuID0gW107XHJcblxyXG4gICAgICAgICAgICB0b3BpYy5jaGlsZHJlbi5mb3JFYWNoKCh0b3BpY0NoaWxkcmVuLCBpbmRleENoaWxkcmVuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZWRUb3BpY3NDaGlsZHJlbi5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXsnc3ViLScgKyBpbmRleCArIFwiLVwiICsgaW5kZXhDaGlsZHJlbn0gb25DbGljaz17Y2hhbmdlU2VsZWN0ZWRLZXl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RvcGljQ2hpbGRyZW4udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc3R5bGVkVG9waWNzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8U3ViTWVudSBrZXk9e2luZGV4fSBpY29uPXt0b3BpYy5pY29ufSB0aXRsZT17dG9waWMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiB7dG9waWMudGl0bGV9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHtzdHlsZWRUb3BpY3NDaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICB7LyogPE1lbnUuSXRlbSBrZXk9XCJzdWItMVwiPntKU09OLnN0cmluZ2lmeSgpfTwvTWVudS5JdGVtPiAqL31cclxuICAgICAgICAgICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0eWxlZFRvcGljcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9e2luZGV4fSBvbkNsaWNrPXtjaGFuZ2VTZWxlY3RlZEtleX0gaWNvbj17dG9waWMuaWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RvcGljLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgICk7XHJcblxyXG4gICAgc3R5bGVkVG9waWNzLnB1c2goXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFudC1tZW51LWl0ZW1cIj5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVMb2dvdXQoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggdy1hdXRvIHctZnVsbCByb3VuZGVkIGgtOCB0ZXh0LXdoaXRlIGJnLXJlZC02MDAgZm9udC1ib2xkIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBob3ZlcjpiZy1yZWQtNjAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIOC4reC4reC4geC4iOC4suC4geC4o+C4sOC4muC4mlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuXHJcbiAgICApXHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoYW5kbGVMb2dvdXRcIilcclxuICAgICAgICBDb29raWVzLnJlbW92ZSgndG9rZW4nKVxyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWVudSBtb2RlPVwiaW5saW5lXCIgc2VsZWN0ZWRLZXlzPXtbc2VsZWN0ZWRLZXldfSBkZWZhdWx0T3BlbktleXM9e1tzZWxlY3RlZFN1YktleV19PlxyXG4gICAgICAgICAgICB7c3R5bGVkVG9waWNzfVxyXG4gICAgICAgIDwvTWVudT5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVG9waWNNZW51OyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IFNFQ1JFVF9LRVkgPSBwcm9jZXNzLmVudi5KV1RfS0VZO1xyXG5cclxuLypcclxuICogQHBhcmFtcyB7and0VG9rZW59IGV4dHJhY3RlZCBmcm9tIGNvb2tpZXNcclxuICogQHJldHVybiB7b2JqZWN0fSBvYmplY3Qgb2YgZXh0cmFjdGVkIHRva2VuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VG9rZW4oand0VG9rZW4pIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGp3dC52ZXJpZnkoand0VG9rZW4sIFNFQ1JFVF9LRVkpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKCdlOicsIGUpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKlxyXG4gKiBAcGFyYW1zIHtyZXF1ZXN0fSBleHRyYWN0ZWQgZnJvbSByZXF1ZXN0IHJlc3BvbnNlXHJcbiAqIEByZXR1cm4ge29iamVjdH0gb2JqZWN0IG9mIHBhcnNlIGp3dCBjb29raWUgZGVjb2RlIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFwcENvb2tpZXMocmVxKSB7XHJcbiAgY29uc3QgcGFyc2VkSXRlbXMgPSB7fTtcclxuICBpZiAocmVxLmhlYWRlcnMuY29va2llKSB7XHJcbiAgICBjb25zdCBjb29raWVzSXRlbXMgPSByZXEuaGVhZGVycy5jb29raWUuc3BsaXQoJzsgJyk7XHJcbiAgICBjb29raWVzSXRlbXMuZm9yRWFjaChjb29raWVzID0+IHtcclxuICAgICAgY29uc3QgcGFyc2VkSXRlbSA9IGNvb2tpZXMuc3BsaXQoJz0nKTtcclxuICAgICAgcGFyc2VkSXRlbXNbcGFyc2VkSXRlbVswXV0gPSBkZWNvZGVVUkkocGFyc2VkSXRlbVsxXSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIHBhcnNlZEl0ZW1zO1xyXG59XHJcblxyXG4vKlxyXG4gKiBAcGFyYW1zIHtyZXF1ZXN0fSBleHRyYWN0ZWQgZnJvbSByZXF1ZXN0IHJlc3BvbnNlLCB7c2V0TG9jYWxob3N0fSB5b3VyIGxvY2FsaG9zdCBhZGRyZXNzXHJcbiAqIEByZXR1cm4ge29iamVjdH0gb2JqZWN0cyBvZiBwcm90b2NvbCwgaG9zdCBhbmQgb3JpZ2luXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWJzb2x1dGVVcmwocmVxLCBzZXRMb2NhbGhvc3QpIHtcclxuICB2YXIgcHJvdG9jb2wgPSAnaHR0cHM6JztcclxuICB2YXIgaG9zdCA9IHJlcVxyXG4gICAgPyByZXEuaGVhZGVyc1sneC1mb3J3YXJkZWQtaG9zdCddIHx8IHJlcS5oZWFkZXJzWydob3N0J11cclxuICAgIDogd2luZG93LmxvY2F0aW9uLmhvc3Q7XHJcbiAgaWYgKGhvc3QuaW5kZXhPZignbG9jYWxob3N0JykgPiAtMSkge1xyXG4gICAgaWYgKHNldExvY2FsaG9zdCkgaG9zdCA9IHNldExvY2FsaG9zdDtcclxuICAgIHByb3RvY29sID0gJ2h0dHA6JztcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3RvY29sOiBwcm90b2NvbCxcclxuICAgIGhvc3Q6IGhvc3QsXHJcbiAgICBvcmlnaW46IHByb3RvY29sICsgJy8vJyArIGhvc3QsXHJcbiAgICB1cmw6IHJlcSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkRGF5cyhkYXRlLCBkYXlzKSB7XHJcbiAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gIHJlc3VsdC5zZXREYXRlKHJlc3VsdC5nZXREYXRlKCkgKyBkYXlzKTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vL1lZWVktTU0tRERcclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGVXaXRob3V0VGltZShkYXRlKSB7XHJcbiAgdmFyIGRhdGVTdHJpbmcgPVxyXG4gICAgZGF0ZS5nZXRVVENGdWxsWWVhcigpICsgXCItXCIgK1xyXG4gICAgKFwiMFwiICsgKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpKS5zbGljZSgtMikgKyBcIi1cIiArXHJcbiAgICAoXCIwXCIgKyBkYXRlLmdldFVUQ0RhdGUoKSkuc2xpY2UoLTIpICsgXCIgXCJcclxuICByZXR1cm4gZGF0ZVN0cmluZztcclxufVxyXG4vLyBjb25zdCBhcGkgPSBwcm9jZXNzLmVudi5QVUJMSUNfVVJMXHJcblxyXG5leHBvcnQgY29uc3QgYXBpSW5zdGFuY2UgPSAoKSA9PiB7XHJcbiAgLy8gY29uc3QgYXV0aG9yaXphdGlvbiA9IHN0b3JlLmdldFN0YXRlKCkudXNlclN0YXRlLnRva2VuID8gc3RvcmUuZ2V0U3RhdGUoKS51c2VyU3RhdGUudG9rZW4gOiBudWxsXHJcblxyXG4gIC8vIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgLy8gXHQneC1hcGktdG9rZW4nOiBhdXRob3JpemF0aW9uID8gYXV0aG9yaXphdGlvbiA6ICcnLFxyXG4gIC8vIH1cclxuXHJcbiAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiAnL2FwaScsXHJcbiAgICAvLyBoZWFkZXJzLFxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja0lzTG9naW4gPSAoKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coXCJjaGVja0lzTG9naW5cIilcclxuICB2YXIgdG9rZW4gPSBDb29raWVzLmdldCgndG9rZW4nKSAvLyA9PiAndmFsdWUnXHJcblxyXG4gIGlmICghdG9rZW4pIHtcclxuICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgLy8gY29uc29sZS5sb2cocGFyc2VKd3QodG9rZW4pKVxyXG4gIHJldHVybiBwYXJzZUp3dCh0b2tlbilcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUp3dCh0b2tlbikge1xyXG5cclxuICB2YXIgaXNFeHBpcmVkID0gZmFsc2U7XHJcbiAgLy8gY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKTtcclxuXHJcblxyXG5cclxuICB2YXIgYmFzZTY0VXJsID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcclxuICB2YXIgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XHJcbiAgdmFyIGpzb25QYXlsb2FkID0gZGVjb2RlVVJJQ29tcG9uZW50KGF0b2IoYmFzZTY0KS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChjKSB7XHJcbiAgICByZXR1cm4gJyUnICsgKCcwMCcgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XHJcbiAgfSkuam9pbignJykpO1xyXG4gIHZhciBfanNvblBheWxvYWQgPSBKU09OLnBhcnNlKGpzb25QYXlsb2FkKVxyXG4gIHZhciBkYXRlTm93ID0gbmV3IERhdGUoKTtcclxuICAvLyBjb25zb2xlLmxvZyhwYXJzZUludChfanNvblBheWxvYWQuZXhwKSlcclxuICAvLyBjb25zb2xlLmxvZyhwYXJzZUludCgoZGF0ZU5vdy5nZXRUaW1lKCkpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsMTApKSlcclxuICBpZiAocGFyc2VJbnQoX2pzb25QYXlsb2FkLmV4cCkgPCBwYXJzZUludCgoZGF0ZU5vdy5nZXRUaW1lKCkpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKSkpIHtcclxuICAgIGNvbnNvbGUubG9nKFwidHJ1ZVwiKVxyXG5cclxuICAgIGlzRXhwaXJlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNFeHBpcmVkKSB7XHJcbiAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcbiAgcmV0dXJuIF9qc29uUGF5bG9hZDtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZShkYXRlKSB7XHJcbiAgdHJ5IHtcclxuICAgIHZhciBkYXRlU3BsaXQgPSBkYXRlLnRvU3RyaW5nKCkuc3BsaXQoXCJUXCIpO1xyXG4gICAgcmV0dXJuIGRhdGVTcGxpdFswXTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJXaXRoVGltZShkYXRlKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vOjA3LjAwMFpcclxuICAgIC8vU2FtcGxlVGV4dC5yZXBsYWNlKFwiRGV2ZWxvcGVyXCIsIFwiQXBwIEJ1aWxkZXJcIik7XHJcbiAgICB2YXIgZGF0ZVNwbGl0ID0gZGF0ZS50b1N0cmluZygpLnNwbGl0KFwiVFwiKTtcclxuICAgIHJldHVybiBkYXRlU3BsaXRbMF0gKyBcIiBcIiArIGRhdGVTcGxpdFsxXS5yZXBsYWNlKFwiLjAwMFpcIiwgXCJcIik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RGF0ZXRvVGhhaURhdGUoZGF0ZSkge1xyXG4gIHZhciBfZGF0ZSA9IGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUoZGF0ZSlcclxuICB2YXIgZGF0ZVNwbGl0ID0gX2RhdGUudG9TdHJpbmcoKS5zcGxpdChcIi1cIik7XHJcbiAgLy8gMjAyMS0wOS0xNlxyXG4gIHJldHVybiBkYXRlU3BsaXRbMl0gKyBcIiBcIiArIGNvbnZlcnRNb250aHRvVGhhaU1vbnRoKGRhdGVTcGxpdFsxXSkgKyBcIiBcIiArIGNvbnZlcnRZZWFydG9UaGFpWWVhcihkYXRlU3BsaXRbMF0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0WWVhcnRvVGhhaVllYXIoeWVhcikge1xyXG4gIHJldHVybiBwYXJzZUludCh5ZWFyKSArIDU0M1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydE1vbnRodG9UaGFpTW9udGgobW9udGgpIHtcclxuICBzd2l0Y2ggKG1vbnRoKSB7XHJcbiAgICBjYXNlIFwiMDFcIjpcclxuICAgICAgcmV0dXJuIFwi4Lih4LiB4Lij4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIwMlwiOlxyXG4gICAgICByZXR1cm4gXCLguIHguLjguKHguKDguLLguJ7guLHguJnguJjguYxcIlxyXG4gICAgY2FzZSBcIjAzXCI6XHJcbiAgICAgIHJldHVybiBcIuC4oeC4teC4meC4suC4hOC4oVwiXHJcbiAgICBjYXNlIFwiMDRcIjpcclxuICAgICAgcmV0dXJuIFwi4LmA4Lih4Lip4Liy4Lii4LiZXCJcclxuICAgIGNhc2UgXCIwNVwiOlxyXG4gICAgICByZXR1cm4gXCLguJ7guKTguKnguKDguLLguITguKFcIlxyXG4gICAgY2FzZSBcIjA2XCI6XHJcbiAgICAgIHJldHVybiBcIuC4oeC4tOC4luC4uOC4meC4suC4ouC4mVwiXHJcbiAgICBjYXNlIFwiMDdcIjpcclxuICAgICAgcmV0dXJuIFwi4LiB4Lij4LiB4LiO4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIwOFwiOlxyXG4gICAgICByZXR1cm4gXCLguKrguLTguIfguKvguLLguITguKFcIlxyXG4gICAgY2FzZSBcIjA5XCI6XHJcbiAgICAgIHJldHVybiBcIuC4geC4seC4meC4ouC4suC4ouC4mVwiXHJcbiAgICBjYXNlIFwiMTBcIjpcclxuICAgICAgcmV0dXJuIFwi4LiV4Li44Lil4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIxMVwiOlxyXG4gICAgICByZXR1cm4gXCLguJ7guKTguKjguIjguLTguIHguLLguKLguJlcIlxyXG4gICAgY2FzZSBcIjEyXCI6XHJcbiAgICAgIHJldHVybiBcIuC4mOC4seC4meC4p+C4suC4hOC4oVwiXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gXCJOQU5cIlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREYXRldG9BZGREQihkYXRlKSB7XHJcbiAgdmFyIGRhdGVTcGxpdCA9IGRhdGUuc3BsaXQoXCIgXCIpO1xyXG4gIHJldHVybiBkYXRlU3BsaXRbMF0gKyBcIlRcIiArIGRhdGVTcGxpdFsxXSArIFwiKzAwOjAwXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJUEFkZHJlc3MoKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2dlb2xvY2F0aW9uLWRiLmNvbS9qc29uLycpXHJcbiAgLy8gY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gIC8vIHJldHVybiByZXMuZGF0YVxyXG4gIHJldHVybiBcImNvdW50cnlfY29kZTpcIiArIHJlcy5kYXRhLmNvdW50cnlfY29kZSArIFwiLGNvdW50cnlfbmFtZTpcIiArIHJlcy5kYXRhLmNvdW50cnlfbmFtZSArIFwiLGNpdHk6XCIgKyByZXMuZGF0YS5jaXR5ICsgXCIscG9zdGFsOlwiICsgcmVzLmRhdGEucG9zdGFsXHJcbiAgICArIFwiLGxhdGl0dWRlOlwiICsgcmVzLmRhdGEubGF0aXR1ZGUgKyBcIixsb25naXR1ZGU6XCIgKyByZXMuZGF0YS5sb25naXR1ZGUgKyBcIixJUHY0OlwiICsgcmVzLmRhdGEuSVB2NCArIFwiLHN0YXRlOlwiICsgcmVzLmRhdGEuc3RhdGVcclxuICAvLyBzZXRJUChyZXMuZGF0YS5JUHY0KVxyXG4gIC8vIHJldHVyblxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBieXRlc1RvU2l6ZShieXRlcykge1xyXG4gIHZhciBzaXplcyA9IFsnQnl0ZXMnLCAnS0InLCAnTUInLCAnR0InLCAnVEInXTtcclxuICBpZiAoYnl0ZXMgPT0gMCkgcmV0dXJuICcwIEJ5dGUnO1xyXG4gIHZhciBpID0gcGFyc2VJbnQoTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZygxMDI0KSkpO1xyXG4gIHJldHVybiBNYXRoLnJvdW5kKGJ5dGVzIC8gTWF0aC5wb3coMTAyNCwgaSksIDIpICsgJyAnICsgc2l6ZXNbaV07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnl0ZXNUb01CKGJ5dGVzKSB7XHJcbiAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KGJ5dGVzIC8gKDEwMjQgKiAxMDI0KSkudG9GaXhlZCgyKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRlZGlmZihzdGFydERhdGUpIHtcclxuXHJcbiAgY29uc3QgdGltZUVuZCA9IG1vbWVudCgpO1xyXG4gIGNvbnN0IG5ld1N0YXJ0RGF0ZSA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XHJcbiAgY29uc3QgbmV3RW5kRGF0ZSA9IG5ldyBEYXRlKHRpbWVFbmQpO1xyXG4gIGNvbnN0IG9uZV9kYXkgPSAxMDAwICogNjAgKiA2MCAqIDI0O1xyXG4gIGxldCByZXN1bHRcclxuICByZXN1bHQgPSBNYXRoLmNlaWwoKG5ld1N0YXJ0RGF0ZS5nZXRUaW1lKCkgLSBuZXdFbmREYXRlLmdldFRpbWUoKSkgLyAob25lX2RheSkpXHJcbiAgY29uc29sZS5sb2coJ2RhdGUgQ29udmVydGVyIHJlc3VsdCcsIHJlc3VsdClcclxuXHJcblxyXG4gIHJldHVybiByZXN1bHQgLSAxO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnREYXRlKHNlcGFyYXRvciA9ICcnKSB7XHJcblxyXG4gIGxldCBuZXdEYXRlID0gbmV3IERhdGUoKVxyXG4gIGxldCBkYXRlID0gbmV3RGF0ZS5nZXREYXRlKCk7XHJcbiAgbGV0IG1vbnRoID0gbmV3RGF0ZS5nZXRNb250aCgpICsgMTtcclxuICBsZXQgeWVhciA9IG5ld0RhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgcmV0dXJuIGAke3llYXJ9JHtzZXBhcmF0b3J9JHttb250aCA8IDEwID8gYDAke21vbnRofWAgOiBgJHttb250aH1gfSR7c2VwYXJhdG9yfSR7ZGF0ZX1gXHJcbn1cclxuIiwiZGVjbGFyZSBjb25zdCBfX05FWFRfREFUQV9fOiBhbnlcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCByZXNvbHZlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQcmVmZXRjaE9wdGlvbnMgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG5mdW5jdGlvbiBpc0xvY2FsKGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB1cmwgPSBwYXJzZShocmVmLCBmYWxzZSwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gcGFyc2UoZ2V0TG9jYXRpb25PcmlnaW4oKSwgZmFsc2UsIHRydWUpXG5cbiAgcmV0dXJuIChcbiAgICAhdXJsLmhvc3QgfHwgKHVybC5wcm90b2NvbCA9PT0gb3JpZ2luLnByb3RvY29sICYmIHVybC5ob3N0ID09PSBvcmlnaW4uaG9zdClcbiAgKVxufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBGb3JtYXRSZXN1bHQgPSB7IGhyZWY6IHN0cmluZzsgYXM/OiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jOiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4gRm9ybWF0UmVzdWx0KSB7XG4gIGxldCBsYXN0SHJlZjogbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RBczogdW5kZWZpbmVkIHwgbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RSZXN1bHQ6IG51bGwgfCBGb3JtYXRSZXN1bHQgPSBudWxsXG4gIHJldHVybiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4ge1xuICAgIGlmIChsYXN0UmVzdWx0ICYmIGhyZWYgPT09IGxhc3RIcmVmICYmIGFzID09PSBsYXN0QXMpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gZm9ybWF0RnVuYyhocmVmLCBhcylcbiAgICBsYXN0SHJlZiA9IGhyZWZcbiAgICBsYXN0QXMgPSBhc1xuICAgIGxhc3RSZXN1bHQgPSByZXN1bHRcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0VXJsKHVybDogVXJsKTogc3RyaW5nIHtcbiAgcmV0dXJuIHVybCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCkgOiB1cmxcbn1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChvYnNlcnZlcikge1xuICAgIHJldHVybiBvYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBDb21wb25lbnQ8TGlua1Byb3BzPiB7XG4gIHA6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogTGlua1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuICB9XG5cbiAgY2xlYW5VcExpc3RlbmVycyA9ICgpID0+IHt9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcbiAgfVxuXG4gIGdldFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBjb25zdCB7IGhyZWY6IHBhcnNlZEhyZWYsIGFzOiBwYXJzZWRBcyB9ID0gdGhpcy5mb3JtYXRVcmxzKFxuICAgICAgdGhpcy5wcm9wcy5ocmVmLFxuICAgICAgdGhpcy5wcm9wcy5hc1xuICAgIClcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRIcmVmKVxuICAgIHJldHVybiBbcmVzb2x2ZWRIcmVmLCBwYXJzZWRBcyA/IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEFzKSA6IHJlc29sdmVkSHJlZl1cbiAgfVxuXG4gIGhhbmRsZVJlZihyZWY6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIHJlZiAmJiByZWYudGFnTmFtZSkge1xuICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcblxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgICAgcHJlZmV0Y2hlZFtcbiAgICAgICAgICB0aGlzLmdldFBhdGhzKCkuam9pbihcbiAgICAgICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycyA9IGxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnByZWZldGNoKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbiAgLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG4gIGZvcm1hdFVybHMgPSBtZW1vaXplZEZvcm1hdFVybCgoaHJlZiwgYXNIcmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IGFkZEJhc2VQYXRoKGZvcm1hdFVybChocmVmKSksXG4gICAgICBhczogYXNIcmVmID8gYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGFzSHJlZikpIDogYXNIcmVmLFxuICAgIH1cbiAgfSlcblxuICBsaW5rQ2xpY2tlZCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgICBpZiAoXG4gICAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICAgIGUubWV0YUtleSB8fFxuICAgICAgICBlLmN0cmxLZXkgfHxcbiAgICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgICApIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuXG4gICAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBocmVmID0gcmVzb2x2ZShwYXRobmFtZSwgaHJlZilcbiAgICBhcyA9IGFzID8gcmVzb2x2ZShwYXRobmFtZSwgYXMpIDogaHJlZlxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBsZXQgeyBzY3JvbGwgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgICB9XG5cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICBSb3V0ZXJbdGhpcy5wcm9wcy5yZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgc2hhbGxvdzogdGhpcy5wcm9wcy5zaGFsbG93LFxuICAgIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJlZmV0Y2gob3B0aW9ucz86IFByZWZldGNoT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmdldFBhdGhzKClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgUm91dGVyLnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8gMF0sIHBhdGhzWy8qIGFzUGF0aCAqLyAxXSwgb3B0aW9ucykuY2F0Y2goXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgIHRocm93IGVyclxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICAgIHByZWZldGNoZWRbXG4gICAgICBwYXRocy5qb2luKFxuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAnJSdcbiAgICAgIClcbiAgICBdID0gdHJ1ZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICAgIH1cblxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICAgIGNvbnN0IHByb3BzOiB7XG4gICAgICBvbk1vdXNlRW50ZXI6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgaHJlZj86IHN0cmluZ1xuICAgICAgcmVmPzogYW55XG4gICAgfSA9IHtcbiAgICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWYoZWwpXG5cbiAgICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91c2VFbnRlcjogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZWZldGNoKHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICAgIH0sXG4gICAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLmxpbmtDbGlja2VkKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5wYXNzSHJlZiB8fFxuICAgICAgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpXG4gICAgKSB7XG4gICAgICBwcm9wcy5ocmVmID0gYXMgfHwgaHJlZlxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmhyZWYgJiZcbiAgICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICAgKSB7XG4gICAgICAgIHByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKVxuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgOiBwYXRoXG59XG5cbmZ1bmN0aW9uIHRvUm91dGUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLydcbn1cblxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGg6IHN0cmluZykgPT5cbiAgdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpXG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5IHwgbnVsbCxcbiAgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4sXG4gIGNiPzogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4pIHtcbiAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMVxuICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBmZXRjaChcbiAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmBcbiAgICAgICAgKSxcbiAgICAgICAgcXVlcnksXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICB9XG4gICAgKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgIC8vIGxvb3AuXG4gICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAoXG4gICAgICBlLnN0YXRlICYmXG4gICAgICB0aGlzLmlzU3NyICYmXG4gICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgcGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICBfdXJsOiBVcmwsXG4gICAgX2FzOiBVcmwsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgICB9XG4gICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICBpZiAoU1QpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsXG4gICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXNcblxuICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKVxuICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcylcblxuICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpXG5cbiAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcylcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSBwYXJzZSh1cmwsIHRydWUpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZShhcylcbiAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4oXG4gICAgICAgIChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpXG4gICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChcbiAgICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICAgICkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXNcbiAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIH0gYXMgYW55KS50aGVuKFxuICAgICAgICAgICAgICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoZ2lwRXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsXG4gICAgICAgICAgICAgICAgICAgICAgZ2lwRXJyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpXG4gICAgICAgIClcbiAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgIH1cblxuICAgIHJldHVybiAobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgIChyZXMpID0+XG4gICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pLFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz4pXG4gICAgICAudGhlbigocm91dGVJbmZvOiBSb3V0ZUluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICAgIClcbiAgICAgICAgKS50aGVuKChwcm9wcykgPT4ge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpXG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybClcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG4gICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGFyc2UoYXNQYXRoKS5wYXRobmFtZSEpXG5cbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgIDogZmV0Y2hOZXh0RGF0YShcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuaXNTc3IsXG4gICAgICAgICAgKGRhdGEpID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKVxuICAgICAgICApXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZShhc1BhdGgsIHRydWUpXG4gICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUhKVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJylcbiAgICAgIDsoZSBhcyBhbnkpLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfVxufSB7XG4gIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG5cbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAoXywgJDEpID0+IHtcbiAgICAgIGNvbnN0IGlzT3B0aW9uYWwgPSAvXlxcXFxcXFsuKlxcXFxcXF0kLy50ZXN0KCQxKVxuICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSgyLCAtMilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgIGlmIChpc0NhdGNoQWxsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoNilcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1tcbiAgICAgICAgJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9XG4gICAgICByZXR1cm4gaXNDYXRjaEFsbCA/IChpc09wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgfVxuICApXG5cbiAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgICAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG5cbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksXG4gICAgZ3JvdXBzLFxuICAgIG5hbWVkUmVnZXg6IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICA/IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYFxuICAgICAgOiB1bmRlZmluZWQsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvcm1hdCwgVVJMRm9ybWF0T3B0aW9ucywgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBzdGF0aWNNYXJrdXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkZXZGaWxlczogc3RyaW5nW11cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGxvd1ByaW9yaXR5RmlsZXM6IHN0cmluZ1tdXG4gIHBvbHlmaWxsRmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaHRtbFByb3BzOiBhbnlcbiAgYm9keVRhZ3M6IGFueVtdXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICB1cmw6IFVybE9iamVjdCxcbiAgb3B0aW9ucz86IFVSTEZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXQodXJsIGFzIFVSTCwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcclxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcclxuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xyXG4gICAgXCJkZWZhdWx0XCI6IG9ialxyXG4gIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcclxuXHJcbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcclxuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XHJcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcclxuXHJcbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xyXG4gICAgcmV0dXJuIGNhY2hlO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBjYWNoZTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XHJcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcblxyXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgXCJkZWZhdWx0XCI6IG9ialxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xyXG5cclxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcclxuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcclxuICB9XHJcblxyXG4gIHZhciBuZXdPYmogPSB7fTtcclxuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XHJcblxyXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XHJcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xyXG5cclxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcclxuXHJcbiAgaWYgKGNhY2hlKSB7XHJcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ld09iajtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xyXG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcclxuXHJcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xyXG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcclxuICAgIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XHJcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQge1xyXG4gICAgYWJzb2x1dGVVcmwsXHJcbiAgICBjaGVja0lzTG9naW4sXHJcbiAgICBhcGlJbnN0YW5jZVxyXG59IGZyb20gJy4uLy4uL21pZGRsZXdhcmUvdXRpbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZyh1c2VyKSB7XHJcblxyXG4gICAgcmV0dXJuICh7XHJcbiAgICAgICAgaGVpZ2h0OiBcIjYwMHB4XCIsXHJcbiAgICAgICAgcmVhZG9ubHk6IGZhbHNlLCAvLyBhbGwgb3B0aW9ucyBmcm9tIGh0dHBzOi8veGRzb2Z0Lm5ldC9qb2RpdC9kb2MvXHJcbiAgICAgICAgdXBsb2FkZXI6IHtcclxuICAgICAgICAgICAgdXJsOiBcIi9hcGkvdXBsb2FkXCIsXHJcbiAgICAgICAgICAgIGluc2VydEltYWdlQXNCYXNlNjRVUkk6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImltYWdlc0V4dGVuc2lvbnNcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJqcGdcIixcclxuICAgICAgICAgICAgICAgIFwicG5nXCIsXHJcbiAgICAgICAgICAgICAgICBcImpwZWdcIixcclxuICAgICAgICAgICAgICAgIFwiZ2lmXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcHJlcGFyZURhdGE6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlci50eXBlX3VzZXIgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdpZCcsIFwiYWRtaW5cIik7IC8vIFxyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2lkJywgdXNlci5vcmdhbml6YXRpb25faWQpOyAvLyBcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlZmF1bHRIYW5kbGVyU3VjY2VzczogZnVuY3Rpb24gKGRhdGEsIHJlc3ApIHtcclxuICAgICAgICAgICAgICAgIHZhciBpLCBmaWVsZCA9IHRoaXMub3B0aW9ucy51cGxvYWRlci5maWxlc1ZhcmlhYmxlTmFtZTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSBcImZpbGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzcyBmaWxlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dEhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh0ZW5zaW9uID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBlbGVtZW50Lm5hbWUubGFzdEluZGV4T2YoJy4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRlbnNpb24gPSBlbGVtZW50Lm5hbWUuc3Vic3RyaW5nKGkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3BhdGggPSBlbGVtZW50LnBhdGgucmVwbGFjZShcInB1YmxpY1wiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4dGVuc2lvbiA9PSBcImpwZ1wiIHx8IGV4dGVuc2lvbiA9PSBcInBuZ1wiIHx8IGV4dGVuc2lvbiA9PSBcImpwZWdcIiB8fCBleHRlbnNpb24gPT0gXCJnaWZcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy95b3VyIGNvZGVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0SFRNTCArPSAnPGltZyBzcmM9XCInICsgX3BhdGggKyAnXCIvPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0SFRNTCArPSAnPGEgY2xhc3M9XCJmaWxlLWF0dGFjaFwiIGhyZWY9XCInICsgX3BhdGggKyAnXCI+JyArIGVsZW1lbnQubmFtZSArICc8L2E+PC9icj4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5pbnNlcnRIVE1MKHRleHRIVE1MKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNzIGltYWdlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5maWxlc1swXSlcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dEhUTUwgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoZGF0YS5maWxlcyAmJiBkYXRhLmZpbGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgLy8gZm9yIChpID0gMDsgaSA8IGRhdGEuZmlsZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIC8vIHRleHRIVE1MICs9ICc8aW1nIHNyYz1cIicgKyBkYXRhLmJhc2V1cmwgKyBkYXRhLmZpbGVzW2ldICsgJ1wiLz4nXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAvLyBjb25zb2xlLmxvZyggZGF0YS5maWxlc1tpXSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICB0aGlzLnNlbGVjdGlvbi5pbnNlcnRJbWFnZShkYXRhLmZpbGVzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIHRoaXMuc2VsZWN0aW9uLmluc2VydEhUTUwoXCI8L2JyPlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2VsZWN0aW9uLmluc2VydEhUTUwodGV4dEhUTUwpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBwYXJlbnQuc2VsZWN0aW9uLmluc2VydEhUTUwoJzxpbWcgc3JjPVwiaW1hZ2UucG5nXCIvPicpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gZmlsZWJyb3dzZXI6IHtcclxuICAgICAgICAvLyAgIGFqYXg6IHtcclxuICAgICAgICAvLyAgICAgdXJsOiBcIi9wdWJsaWMvdXBsb2Fkcy9jLWFkbWluL1wiLFxyXG4gICAgICAgIC8vICAgfSxcclxuICAgICAgICAvLyAgIHVwbG9hZGVyOiB7XHJcbiAgICAgICAgLy8gICAgICB1cmw6XCIvYXBpL3VwbG9hZFwiXHJcbiAgICAgICAgLy8gICB9LFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICB9KTtcclxufSIsImltcG9ydCB7IEluYm94T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLCBGb3JtLCBJbWFnZSwgSW5wdXQsIG5vdGlmaWNhdGlvbiwgU2VsZWN0LCBUeXBvZ3JhcGh5LCBVcGxvYWRcclxufSBmcm9tICdhbnRkJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG4vLyBpbXBvcnQgVXNlck5hdiBmcm9tICcuLi9jb21wb25lbnRzL25hdmlnYXRpb24vVXNlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG4vKiBjb21wb25lbnRzICovXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0QWRtaW4nO1xyXG4vKiB1dGlscyAqL1xyXG5pbXBvcnQge1xyXG4gIGFic29sdXRlVXJsLCBhcGlJbnN0YW5jZVxyXG59IGZyb20gJy4uLy4uLy4uLy4uL21pZGRsZXdhcmUvdXRpbHMnO1xyXG5cclxuY29uc3QgSm9kaXRFZGl0b3IgPSBkeW5hbWljKCgpID0+IGltcG9ydChcImpvZGl0LXJlYWN0XCIpLCB7IHNzcjogZmFsc2UgfSk7XHJcbmNvbnN0IHsgVGV4dCwgVGl0bGUgfSA9IFR5cG9ncmFwaHk7XHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vLi4vY29uZmlnJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcbiAgY29uc3QgW2FwaSwgY29udGV4dEhvbGRlcl0gPSBub3RpZmljYXRpb24udXNlTm90aWZpY2F0aW9uKCk7XHJcbiAgY29uc3QgeyB1c2VyLCBvcmlnaW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgcHJvZmlsZUlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgW3Byb3ZpbmNlcywgc2V0UHJvdmluY2VzXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2Rpc3RyaWN0cywgc2V0RGlzdHJpY3RzXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3N1YkRpc3RyaWN0cywgc2V0U3ViRGlzdHJpY3RzXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3ByZXZpZXdJbWFnZUxvZ28sIHNldFByZXZpZXdJbWFnZUxvZ29dID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbcHJldmlld0ltYWdlUGVyc29uMSwgc2V0UHJldmlld0ltYWdlUGVyc29uMV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtwcmV2aWV3SW1hZ2VQZXJzb24yLCBzZXRQcmV2aWV3SW1hZ2VQZXJzb24yXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3ByZXZpZXdJbWFnZVBlcnNvbjMsIHNldFByZXZpZXdJbWFnZVBlcnNvbjNdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbaW1hZ2VMYW5kaW5nUGFnZUxvZ28sIHNldEltYWdlTGFuZGluZ1BhZ2VMb2dvXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2ltYWdlTGFuZGluZ1BhZ2VQZXJzb24xLCBzZXRJbWFnZUxhbmRpbmdQYWdlUGVyc29uMV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtpbWFnZUxhbmRpbmdQYWdlUGVyc29uMiwgc2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjJdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbaW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjMsIHNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24zXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3ByZXZpZXdWaXNpYmxlTG9nbywgc2V0UHJldmlld1Zpc2libGVMb2dvXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtwcmV2aWV3VmlzaWJsZVBlcnNvbjEsIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbcHJldmlld1Zpc2libGVQZXJzb24yLCBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3ByZXZpZXdWaXNpYmxlUGVyc29uMywgc2V0UHJldmlld1Zpc2libGVQZXJzb24zXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtsb2dvLCBzZXRMb2dvXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtmaWVsZHMsIHNldEZpZWxkc10gPSB1c2VTdGF0ZShbXHJcbiAgXSk7XHJcbiAgY29uc3QgW29yZ2FuaXphdGlvbkRhdGEsIHNldE9yZ2FuaXphdGlvbkRhdGFdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoT3JnYW5pemF0aW9uRGF0YSgpO1xyXG4gICAgZmV0Y2hQcm92aW5jZXNEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdEhhbmRsZXIodmFsdWUpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIG9yZ2FuaXphdGlvbl9pZDogdXNlci5vcmdhbml6YXRpb25faWQsXHJcbiAgICAgIG9yZ2FuaXphdGlvbl9uYW1lOiB2YWx1ZS5vcmdhbml6YXRpb25fbmFtZSxcclxuICAgICAgb3JnYW5pemF0aW9uX25hbWVfZW5nOiB2YWx1ZS5vcmdhbml6YXRpb25fbmFtZV9lbmcsXHJcbiAgICAgIG9yZ2FuaXphdGlvbl9sb2dvOiBpbWFnZUxhbmRpbmdQYWdlTG9nbyxcclxuICAgICAgb3JnYW5pemF0aW9uX2FkZHJlc3M6IHZhbHVlLm9yZ2FuaXphdGlvbl9hZGRyZXNzLFxyXG4gICAgICBvcmdhbml6YXRpb25fc3ViX2Rpc3RyaWN0X2lkOiB2YWx1ZS5zdWJEaXN0cmljdFNlbGVjdGVkLFxyXG4gICAgICBvcmdhbml6YXRpb25fZW1haWw6IHZhbHVlLm9yZ2FuaXphdGlvbl9lbWFpbCxcclxuICAgICAgb3JnYW5pemF0aW9uX2VtYWlsX2FsZXJ0OiB2YWx1ZS5vcmdhbml6YXRpb25fZW1haWxfYWxlcnQsXHJcbiAgICAgIG9yZ2FuaXphdGlvbl9waG9uZTogdmFsdWUub3JnYW5pemF0aW9uX3Bob25lLFxyXG4gICAgICBvcmdhbml6YXRpb25fZmF4OiB2YWx1ZS5vcmdhbml6YXRpb25fZmF4LFxyXG4gICAgICBzb2NpYWxfZmJfcGFnZWlkOiB2YWx1ZS5zb2NpYWxfZmJfcGFnZWlkLFxyXG4gICAgICByc3M6IHZhbHVlLnJzcyxcclxuICAgICAgcGVyc29uMDFfbmFtZTogdmFsdWUucGVyc29uMDFfbmFtZSxcclxuICAgICAgcGVyc29uMDFfcG9zaXRpb246IHZhbHVlLnBlcnNvbjAxX3Bvc2l0aW9uLFxyXG4gICAgICBwZXJzb24wMV9pbWFnZTogaW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjEsXHJcbiAgICAgIHBlcnNvbjAxX3Bob25lOiB2YWx1ZS5wZXJzb24wMV9waG9uZSxcclxuICAgICAgcGVyc29uMDJfbmFtZTogdmFsdWUucGVyc29uMDJfbmFtZSxcclxuICAgICAgcGVyc29uMDJfcG9zaXRpb246IHZhbHVlLnBlcnNvbjAyX3Bvc2l0aW9uLFxyXG4gICAgICBwZXJzb24wMl9pbWFnZTogaW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjIsXHJcbiAgICAgIHBlcnNvbjAyX3Bob25lOiB2YWx1ZS5wZXJzb24wMl9waG9uZSxcclxuICAgICAgcGVyc29uMDNfbmFtZTogdmFsdWUucGVyc29uMDNfbmFtZSxcclxuICAgICAgcGVyc29uMDNfcG9zaXRpb246IHZhbHVlLnBlcnNvbjAzX3Bvc2l0aW9uLFxyXG4gICAgICBwZXJzb24wM19pbWFnZTogaW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjMsXHJcbiAgICAgIHBlcnNvbjAzX3Bob25lOiB2YWx1ZS5wZXJzb24wM19waG9uZSxcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgY29uc3Qgb3JnYW5pemF0aW9uRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkucHV0KCcvcHJvZmlsZScsIGRhdGEpO1xyXG4gICAgaWYgKG9yZ2FuaXphdGlvbkRhdGEuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgIG9wZW5Ob3RpZmljYXRpb25SZWdpc3RlclN1Y2Nlc3MoKTtcclxuICAgICAgZmV0Y2hPcmdhbml6YXRpb25EYXRhKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgLy9TdGFydCB0aGUgdGltZXJcclxuICAgICAgICAgIHJvdXRlci5wdXNoKCcvYWRtaW4vc2V0dGluZy9wcm9maWxlJyk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICAgIDIwMDAsXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJGYWlsKG9yZ2FuaXphdGlvbkRhdGEuZGF0YS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBjb25zdCBvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJTdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgYXBpLnN1Y2Nlc3Moe1xyXG4gICAgICBtZXNzYWdlOiBg4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIYCxcclxuICAgICAgZGVzY3JpcHRpb246ICfguJrguLHguJnguJfguLbguIHguILguYnguK3guKHguLnguKXguKrguLPguYDguKPguYfguIjguYHguKXguYnguKcnLFxyXG4gICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuTm90aWZpY2F0aW9uUmVnaXN0ZXJGYWlsID0gbWVzc2dhZSA9PiB7XHJcbiAgICBhcGkuZXJyb3Ioe1xyXG4gICAgICBtZXNzYWdlOiBg4Lie4Lia4Lib4Lix4LiN4Lir4Liy4Lij4Liw4Lir4Lin4LmI4Liy4LiH4LiB4Liy4Lij4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54LilYCxcclxuICAgICAgZGVzY3JpcHRpb246IG1lc3NnYWUsXHJcbiAgICAgIHBsYWNlbWVudDogJ3RvcFJpZ2h0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHsgRHJhZ2dlciB9ID0gVXBsb2FkO1xyXG5cclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuXHJcbiAgY29uc3Qgb25SZXNldCA9ICgpID0+IHtcclxuICAgIGZldGNoRGlzdHJpY3RzRGF0YShvcmdhbml6YXRpb25EYXRhLnN1Yl9kaXN0cmljdHMgPyBvcmdhbml6YXRpb25EYXRhLnN1Yl9kaXN0cmljdHMucHJvdmluY2VzLnByb3ZpbmNlX2lkIDogMClcclxuICAgIGZldGNoU3ViRGlzdHJpY3REYXRhKG9yZ2FuaXphdGlvbkRhdGEuc3ViX2Rpc3RyaWN0cyA/IG9yZ2FuaXphdGlvbkRhdGEuc3ViX2Rpc3RyaWN0cy5kaXN0cmljdHMuZGlzdHJpY3RfaWQgOiAwKVxyXG4gICAgc2V0RmllbGRzKFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX2xvZ28nXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fbG9nbyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX25hbWUnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fbmFtZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX25hbWVfZW5nJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEub3JnYW5pemF0aW9uX25hbWVfZW5nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydvcmdhbml6YXRpb25fcGhvbmUnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fcGhvbmUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9lbWFpbCddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9lbWFpbCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX2ZheCddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9mYXhcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX2FkZHJlc3MnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fYWRkcmVzcyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncHJvdmluY2VzU2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzID8gb3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzLnByb3ZpbmNlcy5wcm92aW5jZV9pZCA6IFwiMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ2Rpc3RyaWN0U2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzID8gb3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzLmRpc3RyaWN0cy5kaXN0cmljdF9pZCA6IFwiMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3N1YkRpc3RyaWN0U2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzID8gb3JnYW5pemF0aW9uRGF0YS5zdWJfZGlzdHJpY3RzLnN1Yl9kaXN0cmljdF9pZCA6IFwiMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3NvY2lhbF9mYl9wYWdlaWQnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5zb2NpYWxfZmJfcGFnZWlkXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9lbWFpbF9hbGVydCddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLm9yZ2FuaXphdGlvbl9lbWFpbF9hbGVydFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydyc3MnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5yc3NcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDFfbmFtZSddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAxX25hbWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAxX3Bvc2l0aW9uJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDFfcG9zaXRpb24sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAxX3Bob25lJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDFfcGhvbmUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAyX25hbWUnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5wZXJzb24wMl9uYW1lLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wMl9wb3NpdGlvbiddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAyX3Bvc2l0aW9uLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wMl9waG9uZSddLFxyXG4gICAgICAgIHZhbHVlOiBvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAyX3Bob25lLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwZXJzb24wM19uYW1lJ10sXHJcbiAgICAgICAgdmFsdWU6IG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDNfbmFtZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDNfcG9zaXRpb24nXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5wZXJzb24wM19wb3NpdGlvbixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncGVyc29uMDNfcGhvbmUnXSxcclxuICAgICAgICB2YWx1ZTogb3JnYW5pemF0aW9uRGF0YS5wZXJzb24wM19waG9uZSxcclxuICAgICAgfVxyXG4gICAgXSk7XHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VMb2dvKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArIHVzZXIub3JnYW5pemF0aW9uX2lkICsgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArIG9yZ2FuaXphdGlvbkRhdGEub3JnYW5pemF0aW9uX2xvZ28pO1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVMb2dvKHRydWUpO1xyXG4gICAgc2V0SW1hZ2VMYW5kaW5nUGFnZUxvZ28ob3JnYW5pemF0aW9uRGF0YS5vcmdhbml6YXRpb25fbG9nbyk7XHJcblxyXG4gICAgc2V0UHJldmlld0ltYWdlUGVyc29uMSgnLi5cXFxcLi5cXFxcLi5cXFxcdXBsb2Fkc1xcXFxjLScgKyB1c2VyLm9yZ2FuaXphdGlvbl9pZCArICdcXFxcb3JnYW5pemF0aW9uXFxcXCcgKyBvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAxX2ltYWdlKTtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMSh0cnVlKTtcclxuICAgIHNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24xKG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDFfaW1hZ2UpO1xyXG5cclxuICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjIoJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICsgdXNlci5vcmdhbml6YXRpb25faWQgKyAnXFxcXG9yZ2FuaXphdGlvblxcXFwnICsgb3JnYW5pemF0aW9uRGF0YS5wZXJzb24wMl9pbWFnZSk7XHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjIodHJ1ZSk7XHJcbiAgICBzZXRJbWFnZUxhbmRpbmdQYWdlUGVyc29uMihvcmdhbml6YXRpb25EYXRhLnBlcnNvbjAyX2ltYWdlKTtcclxuXHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24zKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArIHVzZXIub3JnYW5pemF0aW9uX2lkICsgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArIG9yZ2FuaXphdGlvbkRhdGEucGVyc29uMDNfaW1hZ2UpO1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24zKHRydWUpO1xyXG4gICAgc2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjMob3JnYW5pemF0aW9uRGF0YS5wZXJzb24wM19pbWFnZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hPcmdhbml6YXRpb25EYXRhID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IF9vcmdhbml6YXRpb25EYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICdvcmdhbml6YXRpb24vJyArICh1c2VyID8gdXNlci5vcmdhbml6YXRpb25faWQgOiAwKVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbilcclxuICAgIHNldE9yZ2FuaXphdGlvbkRhdGEoX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24pXHJcbiAgICBmZXRjaERpc3RyaWN0c0RhdGEoX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24uc3ViX2Rpc3RyaWN0cyA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnN1Yl9kaXN0cmljdHMucHJvdmluY2VzLnByb3ZpbmNlX2lkIDogMClcclxuICAgIGZldGNoU3ViRGlzdHJpY3REYXRhKF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnN1Yl9kaXN0cmljdHMgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5zdWJfZGlzdHJpY3RzLmRpc3RyaWN0cy5kaXN0cmljdF9pZCA6IDApXHJcbiAgICBpZiAoX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2xvZ28pIHtcclxuICAgICAgc2V0UHJldmlld0ltYWdlTG9nbyhcclxuICAgICAgICAnLi5cXFxcLi5cXFxcLi5cXFxcdXBsb2Fkc1xcXFxjLScgK1xyXG4gICAgICAgIHVzZXIub3JnYW5pemF0aW9uX2lkICtcclxuICAgICAgICAnXFxcXG9yZ2FuaXphdGlvblxcXFwnICtcclxuICAgICAgICBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fbG9nbyxcclxuICAgICAgKVxyXG4gICAgICBzZXRQcmV2aWV3VmlzaWJsZUxvZ28odHJ1ZSlcclxuICAgIH1cclxuICAgIGlmIChfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wMV9pbWFnZSkge1xyXG4gICAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24xKCcuLlxcXFwuLlxcXFwuLlxcXFx1cGxvYWRzXFxcXGMtJyArXHJcbiAgICAgICAgdXNlci5vcmdhbml6YXRpb25faWQgK1xyXG4gICAgICAgICdcXFxcb3JnYW5pemF0aW9uXFxcXCcgK1xyXG4gICAgICAgIF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAxX2ltYWdlKVxyXG4gICAgICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjEodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAyX2ltYWdlKSB7XHJcbiAgICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjIoJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICtcclxuICAgICAgICB1c2VyLm9yZ2FuaXphdGlvbl9pZCArXHJcbiAgICAgICAgJ1xcXFxvcmdhbml6YXRpb25cXFxcJyArXHJcbiAgICAgICAgX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDJfaW1hZ2UpXHJcbiAgICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMih0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDNfaW1hZ2UpIHtcclxuICAgICAgc2V0UHJldmlld0ltYWdlUGVyc29uMygnLi5cXFxcLi5cXFxcLi5cXFxcdXBsb2Fkc1xcXFxjLScgK1xyXG4gICAgICAgIHVzZXIub3JnYW5pemF0aW9uX2lkICtcclxuICAgICAgICAnXFxcXG9yZ2FuaXphdGlvblxcXFwnICtcclxuICAgICAgICBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5wZXJzb24wM19pbWFnZSlcclxuICAgICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24zKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldFByZXZpZXdJbWFnZUxvZ28oJy4uXFxcXC4uXFxcXC4uXFxcXHVwbG9hZHNcXFxcYy0nICsgdXNlci5vcmdhbml6YXRpb25faWQgKyAnXFxcXG9yZ2FuaXphdGlvblxcXFwnICsgX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2xvZ28pO1xyXG4gICAgLy8gc2V0UHJldmlld1Zpc2libGVMb2dvKHRydWUpO1xyXG4gICAgLy8gc2V0SW1hZ2VMYW5kaW5nUGFnZUxvZ28oX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2xvZ28pO1xyXG4gICAgc2V0RmllbGRzKFtcclxuICAgICAgLy8ge1xyXG4gICAgICAvLyAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX2xvZ28nXSxcclxuICAgICAgLy8gICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2xvZ29cclxuICAgICAgLy8gfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX25hbWUnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX25hbWUgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fbmFtZSA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX25hbWVfZW5nJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9uYW1lX2VuZyA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9uYW1lX2VuZyA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX3Bob25lJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9waG9uZSA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9waG9uZSA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnb3JnYW5pemF0aW9uX2VtYWlsJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9lbWFpbCA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9lbWFpbCA6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsncHJvdmluY2VzU2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24uc3ViX2Rpc3RyaWN0cyA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnN1Yl9kaXN0cmljdHMucHJvdmluY2VzLnByb3ZpbmNlX2lkIDogXCIwXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnZGlzdHJpY3RTZWxlY3RlZCddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5zdWJfZGlzdHJpY3RzID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24uc3ViX2Rpc3RyaWN0cy5kaXN0cmljdHMuZGlzdHJpY3RfaWQgOiBcIjBcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydzdWJEaXN0cmljdFNlbGVjdGVkJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnN1Yl9kaXN0cmljdHMgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5zdWJfZGlzdHJpY3RzLnN1Yl9kaXN0cmljdF9pZCA6IFwiMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9mYXgnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2ZheCA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9mYXggOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3RodW1ibmFpbF9saW5rJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnRodW1ibmFpbF9saW5rID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24udGh1bWJuYWlsX2xpbmsgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9hZGRyZXNzJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbl9hZGRyZXNzID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uX2FkZHJlc3MgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ29yZ2FuaXphdGlvbl9lbWFpbF9hbGVydCddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fZW1haWxfYWxlcnQgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25fZW1haWxfYWxlcnQgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3NvY2lhbF9mYl9wYWdlaWQnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24uc29jaWFsX2ZiX3BhZ2VpZCA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnNvY2lhbF9mYl9wYWdlaWQgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3JzcyddLFxyXG4gICAgICAgIHZhbHVlOiBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5yc3MgPyBfb3JnYW5pemF0aW9uRGF0YS5kYXRhLm9yZ2FuaXphdGlvbi5yc3MgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAxX25hbWUnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDFfbmFtZSA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAxX25hbWUgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAxX3Bvc2l0aW9uJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAxX3Bvc2l0aW9uID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDFfcG9zaXRpb24gOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAxX3Bob25lJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAxX3Bob25lID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDFfcGhvbmUgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAyX25hbWUnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDJfbmFtZSA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAyX25hbWUgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAyX3Bvc2l0aW9uJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAyX3Bvc2l0aW9uID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDJfcG9zaXRpb24gOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAyX3Bob25lJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAyX3Bob25lID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDJfcGhvbmUgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAzX25hbWUnXSxcclxuICAgICAgICB2YWx1ZTogX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDNfbmFtZSA/IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAzX25hbWUgOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAzX3Bvc2l0aW9uJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAzX3Bvc2l0aW9uID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDNfcG9zaXRpb24gOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3BlcnNvbjAzX3Bob25lJ10sXHJcbiAgICAgICAgdmFsdWU6IF9vcmdhbml6YXRpb25EYXRhLmRhdGEub3JnYW5pemF0aW9uLnBlcnNvbjAzX3Bob25lID8gX29yZ2FuaXphdGlvbkRhdGEuZGF0YS5vcmdhbml6YXRpb24ucGVyc29uMDNfcGhvbmUgOiBcIlwiXHJcbiAgICAgIH0sXHJcblxyXG5cclxuICAgIF0pXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hQcm92aW5jZXNEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgX3Byb3ZpbmNlc0RhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ3Byb3ZpbmNlJ1xyXG4gICAgKTtcclxuXHJcbiAgICBzZXRQcm92aW5jZXMoX3Byb3ZpbmNlc0RhdGEuZGF0YS5kYXRhKVxyXG4gICAgLy8gY29uc29sZS5sb2coX3Byb3ZpbmNlc0RhdGEuZGF0YS5kYXRhKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmV0Y2hEaXN0cmljdHNEYXRhID0gYXN5bmMgKHByb3ZpbmNlX2lkKSA9PiB7XHJcbiAgICBjb25zdCBfZGlzdHJpY3RzRGF0YSA9IGF3YWl0IGFwaUluc3RhbmNlKCkuZ2V0KFxyXG4gICAgICAnZGlzdHJpY3QvJyArIHByb3ZpbmNlX2lkXHJcbiAgICApO1xyXG5cclxuICAgIHNldERpc3RyaWN0cyhfZGlzdHJpY3RzRGF0YS5kYXRhLmRhdGEpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhfZGlzdHJpY3RzRGF0YS5kYXRhLmRhdGEpXHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3QgZmV0Y2hTdWJEaXN0cmljdERhdGEgPSBhc3luYyAoc3ViRGlzdHJpY3RJRCkgPT4ge1xyXG4gICAgY29uc3QgX3N1YkRpc3RyaWN0c0RhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmdldChcclxuICAgICAgJ3N1Yi1kaXN0cmljdC8nICsgc3ViRGlzdHJpY3RJRFxyXG4gICAgKTtcclxuXHJcbiAgICBzZXRTdWJEaXN0cmljdHMoX3N1YkRpc3RyaWN0c0RhdGEuZGF0YS5kYXRhKVxyXG4gICAgLy8gY29uc29sZS5sb2coX3N1YkRpc3RyaWN0c0RhdGEuZGF0YS5kYXRhKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvdmluY2VzQ2hhbmdlID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICBzZXRGaWVsZHMoW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydwcm92aW5jZXNTZWxlY3RlZCddLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydkaXN0cmljdFNlbGVjdGVkJ10sXHJcbiAgICAgICAgdmFsdWU6IFwiMFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBbJ3N1YkRpc3RyaWN0U2VsZWN0ZWQnXSxcclxuICAgICAgICB2YWx1ZTogXCIwXCJcclxuICAgICAgfSxcclxuXHJcbiAgICBdKVxyXG4gICAgZmV0Y2hEaXN0cmljdHNEYXRhKHZhbHVlKTtcclxuICAgIHNldFN1YkRpc3RyaWN0cyhbXSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZURpc3RyaWN0Q2hhbmdlID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRGaWVsZHMoW1xyXG5cclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFsnZGlzdHJpY3RTZWxlY3RlZCddLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogWydzdWJEaXN0cmljdFNlbGVjdGVkJ10sXHJcbiAgICAgICAgdmFsdWU6IFwiMFwiXHJcbiAgICAgIH0sXHJcblxyXG4gICAgXSlcclxuICAgIGZldGNoU3ViRGlzdHJpY3REYXRhKHZhbHVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaW1hZ2VVcGxvYWRwcm9wc0xvZ28gPSB7XHJcbiAgICBuYW1lOiAnZmlsZScsXHJcbiAgICBtdWx0aXBsZTogZmFsc2UsXHJcbiAgICBsaXN0VHlwZTogJ3RleHQnLFxyXG4gICAgbWF4Q291bnQ6IDEsXHJcbiAgICBhY3Rpb246IFwiL2FwaS91cGxvYWQvb3JnYW5pemF0aW9uXCIsXHJcbiAgICBwcmV2aWV3OiBmYWxzZSxcclxuICAgIGN1c3RvbVJlcXVlc3Q6IChvcHRpb25zKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgZGF0YS5hcHBlbmQoJ2lkJywgdXNlci50eXBlX3VzZXIgPT0gMSA/IFwiYWRtaW5cIiA6IHVzZXIub3JnYW5pemF0aW9uX2lkKVxyXG4gICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgXCJoZWFkZXJzXCI6IHtcclxuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6ICdtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0tLS0tV2ViS2l0Rm9ybUJvdW5kYXJ5cVRxSkl4dmtXRllxdlA1cydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYXhpb3MucG9zdChvcHRpb25zLmFjdGlvbiwgZGF0YSwgY29uZmlnKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRJbWFnZUxhbmRpbmdQYWdlTG9nbyhyZXMuZGF0YS5kYXRhLmxpc3RbMF0uX25hbWUpXHJcbiAgICAgICAgb3B0aW9ucy5vblN1Y2Nlc3MocmVzLmRhdGEsIG9wdGlvbnMuZmlsZSlcclxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgfSlcclxuXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgb25DaGFuZ2UoaW5mbykge1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gaW5mby5maWxlXHJcbiAgICAgIHN3aXRjaCAoaW5mby5maWxlLnN0YXR1cykge1xyXG4gICAgICAgIGNhc2UgXCJkb25lXCI6XHJcbiAgICAgICAgICBpZiAoIWluZm8uZmlsZS51cmwgJiYgIWluZm8uZmlsZS5wcmV2aWV3KSB7XHJcbiAgICAgICAgICAgIGluZm8uZmlsZS5wcmV2aWV3ID0gYXdhaXQgZ2V0QmFzZTY0KGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFByZXZpZXdJbWFnZUxvZ28oaW5mby5maWxlLnVybCB8fCBpbmZvLmZpbGUucHJldmlldylcclxuICAgICAgICAgIHNldFByZXZpZXdWaXNpYmxlTG9nbyh0cnVlKVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgLy8gZXJyb3Igb3IgcmVtb3ZlZFxyXG4gICAgICAgIC8vIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBvblJlbW92ZShpbmZvKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwib25SZW1vdmVcIilcclxuICAgICAgY29uc29sZS5sb2coaW5mbylcclxuICAgICAgcmVzZXRJbWFnZVByZXZpZXcoKVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGltYWdlVXBsb2FkcHJvcHNQZXJzb24xID0ge1xyXG4gICAgbmFtZTogJ2ZpbGUnLFxyXG4gICAgbXVsdGlwbGU6IGZhbHNlLFxyXG4gICAgbGlzdFR5cGU6ICd0ZXh0JyxcclxuICAgIG1heENvdW50OiAxLFxyXG4gICAgYWN0aW9uOiBcIi9hcGkvdXBsb2FkL29yZ2FuaXphdGlvblwiLFxyXG4gICAgcHJldmlldzogZmFsc2UsXHJcbiAgICBjdXN0b21SZXF1ZXN0OiAob3B0aW9ucykgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdpZCcsIHVzZXIudHlwZV91c2VyID09IDEgPyBcImFkbWluXCIgOiB1c2VyLm9yZ2FuaXphdGlvbl9pZClcclxuICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgIFwiaGVhZGVyc1wiOiB7XHJcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9LS0tLVdlYktpdEZvcm1Cb3VuZGFyeXFUcUpJeHZrV0ZZcXZQNXMnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGF4aW9zLnBvc3Qob3B0aW9ucy5hY3Rpb24sIGRhdGEsIGNvbmZpZykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0SW1hZ2VMYW5kaW5nUGFnZVBlcnNvbjEocmVzLmRhdGEuZGF0YS5saXN0WzBdLl9uYW1lKVxyXG4gICAgICAgIG9wdGlvbnMub25TdWNjZXNzKHJlcy5kYXRhLCBvcHRpb25zLmZpbGUpXHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfSxcclxuICAgIGFzeW5jIG9uQ2hhbmdlKGluZm8pIHtcclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGluZm8uZmlsZVxyXG4gICAgICBzd2l0Y2ggKGluZm8uZmlsZS5zdGF0dXMpIHtcclxuICAgICAgICBjYXNlIFwiZG9uZVwiOlxyXG4gICAgICAgICAgaWYgKCFpbmZvLmZpbGUudXJsICYmICFpbmZvLmZpbGUucHJldmlldykge1xyXG4gICAgICAgICAgICBpbmZvLmZpbGUucHJldmlldyA9IGF3YWl0IGdldEJhc2U2NChpbmZvLmZpbGUub3JpZ2luRmlsZU9iaik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24xKGluZm8uZmlsZS51cmwgfHwgaW5mby5maWxlLnByZXZpZXcpXHJcbiAgICAgICAgICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjEodHJ1ZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAvLyByZXNldEltYWdlUHJldmlldygpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgb25SZW1vdmUoaW5mbykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9uUmVtb3ZlXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbWFnZVVwbG9hZHByb3BzUGVyc29uMiA9IHtcclxuICAgIG5hbWU6ICdmaWxlJyxcclxuICAgIG11bHRpcGxlOiBmYWxzZSxcclxuICAgIGxpc3RUeXBlOiAndGV4dCcsXHJcbiAgICBtYXhDb3VudDogMSxcclxuICAgIGFjdGlvbjogXCIvYXBpL3VwbG9hZC9vcmdhbml6YXRpb25cIixcclxuICAgIHByZXZpZXc6IGZhbHNlLFxyXG4gICAgY3VzdG9tUmVxdWVzdDogKG9wdGlvbnMpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgb3B0aW9ucy5maWxlKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnaWQnLCB1c2VyLnR5cGVfdXNlciA9PSAxID8gXCJhZG1pblwiIDogdXNlci5vcmdhbml6YXRpb25faWQpXHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICBcImhlYWRlcnNcIjoge1xyXG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogJ211bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PS0tLS1XZWJLaXRGb3JtQm91bmRhcnlxVHFKSXh2a1dGWXF2UDVzJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBheGlvcy5wb3N0KG9wdGlvbnMuYWN0aW9uLCBkYXRhLCBjb25maWcpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24yKHJlcy5kYXRhLmRhdGEubGlzdFswXS5fbmFtZSlcclxuICAgICAgICBvcHRpb25zLm9uU3VjY2VzcyhyZXMuZGF0YSwgb3B0aW9ucy5maWxlKVxyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICB9KVxyXG5cclxuICAgIH0sXHJcbiAgICBhc3luYyBvbkNoYW5nZShpbmZvKSB7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBpbmZvLmZpbGVcclxuICAgICAgc3dpdGNoIChpbmZvLmZpbGUuc3RhdHVzKSB7XHJcbiAgICAgICAgY2FzZSBcImRvbmVcIjpcclxuICAgICAgICAgIGlmICghaW5mby5maWxlLnVybCAmJiAhaW5mby5maWxlLnByZXZpZXcpIHtcclxuICAgICAgICAgICAgaW5mby5maWxlLnByZXZpZXcgPSBhd2FpdCBnZXRCYXNlNjQoaW5mby5maWxlLm9yaWdpbkZpbGVPYmopO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0UHJldmlld0ltYWdlUGVyc29uMihpbmZvLmZpbGUudXJsIHx8IGluZm8uZmlsZS5wcmV2aWV3KVxyXG4gICAgICAgICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24yKHRydWUpXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAvLyByZXNldEltYWdlUHJldmlldygpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgb25SZW1vdmUoaW5mbykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9uUmVtb3ZlXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbWFnZVVwbG9hZHByb3BzUGVyc29uMyA9IHtcclxuICAgIG5hbWU6ICdmaWxlJyxcclxuICAgIG11bHRpcGxlOiBmYWxzZSxcclxuICAgIGxpc3RUeXBlOiAndGV4dCcsXHJcbiAgICBtYXhDb3VudDogMSxcclxuICAgIGFjdGlvbjogXCIvYXBpL3VwbG9hZC9vcmdhbml6YXRpb25cIixcclxuICAgIHByZXZpZXc6IGZhbHNlLFxyXG4gICAgY3VzdG9tUmVxdWVzdDogKG9wdGlvbnMpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgb3B0aW9ucy5maWxlKVxyXG4gICAgICBkYXRhLmFwcGVuZCgnaWQnLCB1c2VyLnR5cGVfdXNlciA9PSAxID8gXCJhZG1pblwiIDogdXNlci5vcmdhbml6YXRpb25faWQpXHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICBcImhlYWRlcnNcIjoge1xyXG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogJ211bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PS0tLS1XZWJLaXRGb3JtQm91bmRhcnlxVHFKSXh2a1dGWXF2UDVzJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBheGlvcy5wb3N0KG9wdGlvbnMuYWN0aW9uLCBkYXRhLCBjb25maWcpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldEltYWdlTGFuZGluZ1BhZ2VQZXJzb24zKHJlcy5kYXRhLmRhdGEubGlzdFswXS5fbmFtZSlcclxuICAgICAgICBvcHRpb25zLm9uU3VjY2VzcyhyZXMuZGF0YSwgb3B0aW9ucy5maWxlKVxyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICB9KVxyXG5cclxuICAgIH0sXHJcbiAgICBhc3luYyBvbkNoYW5nZShpbmZvKSB7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBpbmZvLmZpbGVcclxuICAgICAgc3dpdGNoIChpbmZvLmZpbGUuc3RhdHVzKSB7XHJcbiAgICAgICAgY2FzZSBcImRvbmVcIjpcclxuICAgICAgICAgIGlmICghaW5mby5maWxlLnVybCAmJiAhaW5mby5maWxlLnByZXZpZXcpIHtcclxuICAgICAgICAgICAgaW5mby5maWxlLnByZXZpZXcgPSBhd2FpdCBnZXRCYXNlNjQoaW5mby5maWxlLm9yaWdpbkZpbGVPYmopO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0UHJldmlld0ltYWdlUGVyc29uMyhpbmZvLmZpbGUudXJsIHx8IGluZm8uZmlsZS5wcmV2aWV3KVxyXG4gICAgICAgICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24zKHRydWUpXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAvLyByZXNldEltYWdlUHJldmlldygpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgb25SZW1vdmUoaW5mbykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9uUmVtb3ZlXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgIHJlc2V0SW1hZ2VQcmV2aWV3KClcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXNldEltYWdlUHJldmlldyA9ICgpID0+IHtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlTG9nbyhmYWxzZSk7XHJcbiAgICBzZXRQcmV2aWV3VmlzaWJsZVBlcnNvbjEoZmFsc2UpO1xyXG4gICAgc2V0UHJldmlld1Zpc2libGVQZXJzb24yKGZhbHNlKTtcclxuICAgIHNldFByZXZpZXdWaXNpYmxlUGVyc29uMyhmYWxzZSk7XHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VMb2dvKG51bGwpO1xyXG4gICAgc2V0UHJldmlld0ltYWdlUGVyc29uMShudWxsKTtcclxuICAgIHNldFByZXZpZXdJbWFnZVBlcnNvbjIobnVsbCk7XHJcbiAgICBzZXRQcmV2aWV3SW1hZ2VQZXJzb24zKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGdldEJhc2U2NChmaWxlKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgIHJlYWRlci5vbmVycm9yID0gZXJyb3IgPT4gcmVqZWN0KGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXRcclxuICAgICAgdGl0bGU9XCJHb3Zlcm5tZW50IC0gQWRtaW4gbWFuYWdlbWVudFwiXHJcbiAgICAgIHVybD17b3JpZ2lufVxyXG4gICAgICBvcmlnaW49e29yaWdpbn1cclxuICAgICAgLy8gdXNlcj17bG9naW59XHJcbiAgICAgIGluZGV4U3ViTWVudT17XCI2XCJ9XHJcbiAgICAgIGluZGV4TWVudT17XCJzdWItNi0wXCJ9XHJcbiAgICAgIHRpdGxlUGFnZT1cIuC4guC5ieC4reC4oeC4ueC4peC4reC4h+C4hOC5jOC4geC4o1wiXHJcbiAgICAgIF9yb3V0ZXM9e1tcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYXRoOiAnL2FkbWluL2Rhc2hib3JhZCcsXHJcbiAgICAgICAgICBicmVhZGNydW1iTmFtZTogJ+C4q+C4meC5ieC4suC4q+C4peC4seC4gScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYXRoOiAnL2FkbWluL3NldHRpbmcvcHJvZmlsZScsXHJcbiAgICAgICAgICBicmVhZGNydW1iTmFtZTogJ+C4guC5ieC4reC4oeC4ueC4peC4reC4h+C4hOC5jOC4geC4oycsXHJcbiAgICAgICAgfSxcclxuICAgICAgXX1cclxuICAgID5cclxuICAgICAge2NvbnRleHRIb2xkZXJ9XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3JlYWN0LXF1aWxsQDEuMy4zL2Rpc3QvcXVpbGwuc25vdy5jc3NcIlxyXG4gICAgICA+PC9saW5rPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNS82IGxnOnctZnVsbCBteC1hdXRvXCI+XHJcbiAgICAgICAgPEZvcm1cclxuICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXHJcbiAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICBvbkZpbmlzaD17b25TdWJtaXRIYW5kbGVyfVxyXG4gICAgICAgICAgcmVxdWlyZWRNYXJrPXt0cnVlfVxyXG4gICAgICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgICAgIGZpZWxkcz17ZmllbGRzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggbGc6dy0xLzYgIHByLTJcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwib3JnYW5pemF0aW9uX2xvZ29cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctYXV0byBoLWF1dG8gdGV4dC1jZW50ZXIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC5gOC4peC4t+C4reC4geC4oOC4suC4niBMb2dvIOC4reC4h+C4hOC5jOC4geC4oycsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgey8qIDxEcmFnZ2VyIHsuLi5kcm9waW1nfT4gKi99XHJcbiAgICAgICAgICAgICAgICA8RHJhZ2dlclxyXG4gICAgICAgICAgICAgICAgICBtYXhDb3VudD17MX1cclxuICAgICAgICAgICAgICAgICAgLy8gbGlzdFR5cGU9XCJwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLmpwZWcsIC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICB7Li4uaW1hZ2VVcGxvYWRwcm9wc0xvZ299XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7cHJldmlld1Zpc2libGVMb2dvICYmIDw+PEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3ByZXZpZXdJbWFnZUxvZ299XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzExNnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcidcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIOC4hOC4peC4tOC4gSDguKvguKPguLfguK0g4Lil4Liy4LiB4LmE4Lif4Lil4LmM4Lih4Liy4LiX4Li14LmI4Lia4Lij4Li04LmA4Lin4LiT4LiZ4Li14LmJ4LmA4Lie4Li34LmI4Lit4Lit4Lix4Lib4LmC4Lir4Lil4LiUIExvZ28g4Lit4LiH4LiE4LmM4LiB4LijXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB7IXByZXZpZXdWaXNpYmxlTG9nbyAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtZHJhZy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5ib3hPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIOC4hOC4peC4tOC4gSDguKvguKPguLfguK0g4Lil4Liy4LiB4LmE4Lif4Lil4LmM4Lih4Liy4LiX4Li14LmI4Lia4Lij4Li04LmA4Lin4LiT4LiZ4Li14LmJ4LmA4Lie4Li34LmI4Lit4Lit4Lix4Lib4LmC4Lir4Lil4LiUIExvZ28g4Lit4LiH4LiE4LmM4LiB4LijXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9EcmFnZ2VyPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTUvNiBcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwib3JnYW5pemF0aW9uX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguIrguLfguYjguK3guKvguJnguYjguKfguKLguIfguLLguJlcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4q+C4meC5iOC4p+C4ouC4h+C4suC4mScsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiK4Li34LmI4Lit4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJvcmdhbml6YXRpb25fbmFtZV9lbmdcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguIrguLfguYjguK3guKvguJnguYjguKfguKLguIfguLLguJkg4Lig4Liy4Lip4Liy4Lit4Lix4LiH4LiB4Lik4LipXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZ4Lig4Liy4Lip4Liy4Lit4Lix4LiH4LiB4Lik4LipJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC4q+C4meC5iOC4p+C4ouC4h+C4suC4mSDguKDguLLguKnguLLguK3guLHguIfguIHguKTguKlcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIG5hbWU9XCJvcmdhbml6YXRpb25fYWRkcmVzc1wiXHJcbiAgICAgICAgICAgIGxhYmVsPVwi4LiX4Li14LmI4Lit4Lii4Li54LmI4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiX4Li14LmI4Lit4Lii4Li54LmI4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4l+C4teC5iOC4reC4ouC4ueC5iOC4q+C4meC5iOC4p+C4ouC4h+C4suC4mVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDMsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCBsZzp3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzMgbXItNFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwcm92aW5jZXNTZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4iOC4seC4h+C4q+C4p+C4seC4lFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gdy1mdWxsIGZvbnQtYm9sZCBtYi0yIFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdCAhaW1wb3J0YW50XCIgfX1cclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiI4Lix4LiH4Lir4Lin4Lix4LiUJyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXsoKT0+cHJvdmluY2VzU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IHdpZHRoOiAxMjAgfX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVByb3ZpbmNlc0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb249e3RydWV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCIwXCI+4LmA4Lil4Li34Lit4LiBPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm92aW5jZXMgPyBwcm92aW5jZXMubWFwKChvYmplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE9wdGlvbiB2YWx1ZT17b2JqZWN0LnByb3ZpbmNlX2lkfT57b2JqZWN0LnByb3ZpbmNlX25hbWV9ICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgfSkgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTEvMyBsZzpteC00XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImRpc3RyaWN0U2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguK3guLPguYDguKDguK1cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbCBcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnQgIWltcG9ydGFudFwiIH19XHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4reC4s+C5gOC4oOC4rScsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17KCk9PnByb3ZpbmNlc1NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyB3aWR0aDogMTIwIH19XHJcbiAgICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEaXN0cmljdENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb249e3RydWV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCIwXCI+4LmA4Lil4Li34Lit4LiBPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIHtkaXN0cmljdHMgPyBkaXN0cmljdHMubWFwKChvYmplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE9wdGlvbiB2YWx1ZT17b2JqZWN0LmRpc3RyaWN0X2lkfT57b2JqZWN0LmRpc3RyaWN0X25hbWV9ICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgfSkgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTEvMyBsZzptbC00XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInN1YkRpc3RyaWN0U2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguJXguLPguJrguKVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbCBcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnQgIWltcG9ydGFudFwiIH19XHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4leC4s+C4muC4pScsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17KCk9PnByb3ZpbmNlc1NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyB3aWR0aDogMTIwIH19XHJcbiAgICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiMFwiPuC5gOC4peC4t+C4reC4gTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICB7c3ViRGlzdHJpY3RzID8gc3ViRGlzdHJpY3RzLm1hcCgob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxPcHRpb24gdmFsdWU9e29iamVjdC5zdWJfZGlzdHJpY3RfaWR9PntvYmplY3Quc3ViX2Rpc3RyaWN0X25hbWV9ICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgfSkgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IGxnOnctMS8yIGxnOm1yLTRcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwib3JnYW5pemF0aW9uX3Bob25lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LmA4Lia4Lit4Lij4LmM4LmC4LiX4LijXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguYDguJrguK3guKPguYzguYLguJfguKMnLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC5gOC4muC4reC4o+C5jOC5guC4l+C4o1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggbGc6dy0xLzIgbGc6bWwtNFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJvcmdhbml6YXRpb25fZmF4XCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LmA4Lia4Lit4Lij4LmMIGZheFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC5gOC4muC4reC4o+C5jCBmYXgnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LmA4Lia4Lit4Lij4LmMIGZheFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggbGc6dy0xLzIgbGc6bXItNFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJvcmdhbml6YXRpb25fZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguK3guLXguYDguKHguKXguKXguYxcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4reC4teC5gOC4oeC4peC4peC5jCcsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4Lit4Li14LmA4Lih4Lil4Lil4LmMXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCBsZzp3LTEvMiBsZzptbC00XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm9yZ2FuaXphdGlvbl9lbWFpbF9hbGVydFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4reC4teC5gOC4oeC4peC4peC5jOC4quC4s+C4q+C4o+C4seC4muC5geC4iOC5ieC4h+C5gOC4leC4t+C4reC4mVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4reC4teC5gOC4oeC4peC4peC5jOC4quC4s+C4q+C4o+C4seC4muC5geC4iOC5ieC4h+C5gOC4leC4t+C4reC4mScsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguK3guLXguYDguKHguKXguKXguYzguKrguLPguKvguKPguLHguJrguYHguIjguYnguIfguYDguJXguLfguK3guJlcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IGxnOnctMS8yIGxnOm1yLTRcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwic29jaWFsX2ZiX3BhZ2VpZFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cImZhY2Vib29rIHBhZ2UgaWRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIEgZmFjZWJvb2sgcGFnZSBpZCcsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJmYWNlYm9vayBwYWdlIGlkXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCBsZzp3LTEvMiBsZzptbC00XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInJzc1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4o+C4q+C4seC4quC4q+C4meC5iOC4p+C4ouC4h+C4suC4meC4oOC4suC4hOC4o+C4seC4kOC4quC4s+C4q+C4o+C4seC4muC5gOC4iuC4t+C4reC4oeC4leC5iOC4reC4o+C4sOC4muC4miBFLUdQXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4Lij4Lir4Lix4Liq4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZ4Lig4Liy4LiE4Lij4Lix4LiQ4Liq4Liz4Lir4Lij4Lix4Lia4LmA4LiK4Li34Lit4Lih4LiV4LmI4Lit4Lij4Liw4Lia4LiaIEUtR1AnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4Lij4Lir4Lix4Liq4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZ4Lig4Liy4LiE4Lij4Lix4LiQ4Liq4Liz4Lir4Lij4Lix4Lia4LmA4LiK4Li34Lit4Lih4LiV4LmI4Lit4Lij4Liw4Lia4LiaIEUtR1BcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aHJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjQzRDNEM0JyxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktNlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBsZzp3LTEvNiBwci0yXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAxX2ltYWdlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWF1dG8gaC1hdXRvIHRleHQtY2VudGVyIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguYDguKXguLfguK3guIHguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggMScsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgey8qIDxEcmFnZ2VyIHsuLi5kcm9waW1nfT4gKi99XHJcbiAgICAgICAgICAgICAgICA8RHJhZ2dlclxyXG4gICAgICAgICAgICAgICAgICBtYXhDb3VudD17MX1cclxuICAgICAgICAgICAgICAgICAgLy8gbGlzdFR5cGU9XCJwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpwZywgLmpwZWcsIC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICB7Li4uaW1hZ2VVcGxvYWRwcm9wc1BlcnNvbjF9XHJcbiAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7cHJldmlld1Zpc2libGVQZXJzb24xICYmIDw+PEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcmV2aWV3SW1hZ2VQZXJzb24xfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCDguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggMVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgeyFwcmV2aWV3VmlzaWJsZVBlcnNvbjEgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEluYm94T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCDguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggMVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvRHJhZ2dlcj5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy01LzYgXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAxX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAxJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAxXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wMV9wb3NpdGlvblwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAxXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDEnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDFcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAxX3Bob25lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LmA4Lia4Lit4Lij4LmM4LmC4LiX4Lij4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDFcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guJXguLPguYHguKvguJnguYjguIfguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMScsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguYDguJrguK3guKPguYzguYLguJfguKPguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggbGc6dy0xLzYgcHItMlwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wMl9pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1hdXRvIGgtYXV0byB0ZXh0LWNlbnRlciB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LmA4Lil4Li34Lit4LiB4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDInLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsvKiA8RHJhZ2dlciB7Li4uZHJvcGltZ30+ICovfVxyXG4gICAgICAgICAgICAgICAgPERyYWdnZXJcclxuICAgICAgICAgICAgICAgICAgbWF4Q291bnQ9ezF9XHJcbiAgICAgICAgICAgICAgICAgIC8vIGxpc3RUeXBlPVwicGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5qcGVnLCAucG5nXCJcclxuICAgICAgICAgICAgICAgICAgey4uLmltYWdlVXBsb2FkcHJvcHNQZXJzb24yfVxyXG4gICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAge3ByZXZpZXdWaXNpYmxlUGVyc29uMiAmJiA8PjxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcmV2aWV3SW1hZ2VQZXJzb24yfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCDguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggMlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgeyFwcmV2aWV3VmlzaWJsZVBlcnNvbjIgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEluYm94T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCDguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggMlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvRHJhZ2dlcj5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy01LzYgXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAyX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMlwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAyJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAyXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wMl9wb3NpdGlvblwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAyXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDInLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDJcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAyX3Bob25lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LmA4Lia4Lit4Lij4LmM4LmC4LiX4Lij4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guJXguLPguYHguKvguJnguYjguIfguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMScsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguYDguJrguK3guKPguYzguYLguJfguKPguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMlwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggbGc6dy0xLzYgcHItMlwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wM19pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1hdXRvIGgtYXV0byB0ZXh0LWNlbnRlciB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LmA4Lil4Li34Lit4LiB4Lig4Liy4Lie4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiX4Li14LmIIDMnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsvKiA8RHJhZ2dlciB7Li4uZHJvcGltZ30+ICovfVxyXG4gICAgICAgICAgICAgICAgPERyYWdnZXJcclxuICAgICAgICAgICAgICAgICAgbWF4Q291bnQ9ezF9XHJcbiAgICAgICAgICAgICAgICAgIC8vIGxpc3RUeXBlPVwicGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5qcGcsIC5qcGVnLCAucG5nXCJcclxuICAgICAgICAgICAgICAgICAgey4uLmltYWdlVXBsb2FkcHJvcHNQZXJzb24zfVxyXG4gICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAge3ByZXZpZXdWaXNpYmxlUGVyc29uMyAmJiA8PjxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcmV2aWV3SW1hZ2VQZXJzb24zfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCDguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggM1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgeyFwcmV2aWV3VmlzaWJsZVBlcnNvbjMgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEluYm94T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW50LXVwbG9hZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguITguKXguLTguIEg4Lir4Lij4Li34LitIOC4peC4suC4geC5hOC4n+C4peC5jOC4oeC4suC4l+C4teC5iOC4muC4o+C4tOC5gOC4p+C4k+C4meC4teC5ieC5gOC4nuC4t+C5iOC4reC4reC4seC4m+C5guC4q+C4peC4lCDguKDguLLguJ7guJzguLnguYnguJrguKPguLTguKvguLLguKPguJfguLXguYggM1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvRHJhZ2dlcj5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy01LzYgXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAzX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLguIrguLfguYjguK3guJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggM1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyAgICAgbWVzc2FnZTogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4geC4iuC4t+C5iOC4reC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAzJyxcclxuICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgLy8gXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAzXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxLCBtYXhSb3dzOiAzIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb24wM19wb3NpdGlvblwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuC4leC4s+C5geC4q+C4meC5iOC4h+C4nOC4ueC5ieC4muC4o+C4tOC4q+C4suC4o+C4hOC4meC4l+C4teC5iCAzXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIC8vIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgLy8gICB7XHJcbiAgICAgICAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vICAgICBtZXNzYWdlOiAn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiK4Li34LmI4Lit4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDMnLFxyXG4gICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAvLyBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBpZD1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiV4Liz4LmB4Lir4LiZ4LmI4LiH4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDNcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEsIG1heFJvd3M6IDMgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbjAzX3Bob25lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi4LmA4Lia4Lit4Lij4LmM4LmC4LiX4Lij4Lic4Li54LmJ4Lia4Lij4Li04Lir4Liy4Lij4LiE4LiZ4LiX4Li14LmIIDNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgLy8gcnVsZXM9e1tcclxuICAgICAgICAgICAgICAvLyAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6ICfguIHguKPguLjguJPguLLguIHguKPguK3guIHguIrguLfguYjguK3guJXguLPguYHguKvguJnguYjguIfguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggMScsXHJcbiAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguYDguJrguK3guKPguYzguYLguJfguKPguJzguLnguYnguJrguKPguLTguKvguLLguKPguITguJnguJfguLXguYggM1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6ZS1ub25lIGJvcmRlciByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSwgbWF4Um93czogMyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gY2xhc3NOYW1lPVwiZmxleCBtdC02XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBsZzp0ZXh0LXJpZ2h0IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBodG1sVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVzZXR9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0MyQ0ZFMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQzJDRkUwJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMHB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvLyBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHctZnVsbCBsZzp3LTEvNFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInRleHQtY3VzdG9tLWJsYWNrIFwiPuC4o+C4teC5gOC4i+C5h+C4lzwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAvLyB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzA1OTY2OScsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMDU5NjY5JyxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMHB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUgIWltcG9ydGFudCcsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdy1mdWxsIGxnOnctMS80XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidGV4dC1jdXN0b20td2hpdGUgXCI+4Lia4Lix4LiZ4LiX4Li24LiBPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuLyogZ2V0U2VydmVyU2lkZVByb3BzICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgcmVxIH0gPSBjb250ZXh0O1xyXG4gIGNvbnN0IHsgb3JpZ2luIH0gPSBhYnNvbHV0ZVVybChyZXEpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgb3JpZ2luLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiam9kaXQtcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=