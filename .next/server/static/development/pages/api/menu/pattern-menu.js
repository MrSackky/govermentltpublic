module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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

/***/ "./db/config/config.js":
/*!*****************************!*\
  !*** ./db/config/config.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const dotenv = __webpack_require__(/*! dotenv */ "dotenv");

const result = dotenv.config(); // if (result.error) {
//   throw result.error
// }
// console.log(result.parsed)
// dotenv.config({ path: __dirname + '.env' });
// console.log("process.env.DB_USER");
// console.log(process.env.DB_HOST);
// dotenv.config({ path: './config.env' });

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql'
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    dialectOptions: {
      ssl: true
    }
  }
};

/***/ }),

/***/ "./db/models/index.js":
/*!****************************!*\
  !*** ./db/models/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");

const Sequelize = __webpack_require__(/*! sequelize */ "sequelize");

const basename = path.basename(__filename);
const env = "development" || false;

const config = __webpack_require__(/*! ./db/models/../config/config.js */ "./db/config/config.js")[env];

const db = {};
/* Custom handler for reading current working directory */

const models = process.cwd() + '/db/models/' || false;

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
/* fs.readdirSync(__dirname) */


fs.readdirSync(models).filter(file => {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(file => {
  /* const model = sequelize["import"](path.join(__dirname, file)); */
  const model = sequelize['import'](path.join(models, file));
  db[model.name] = model;
});
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),

/***/ "./middleware/auth.js":
/*!****************************!*\
  !*** ./middleware/auth.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./middleware/utils.js");


const middleware = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();
/* Sample using middleware */

/* middleware.use(database).use(session).use(passport.initialize()).use(passport.session()); */

/* Set restricted public access / put any api access that is restricted in here */

const restricted = ['/api/organization/[organization-id]]', '/api/job/[slug]'];
/*
 * @params {request, response, callback} default Request and Response
 * @return {object} object if true, response message if false and continue
 */

/* harmony default export */ __webpack_exports__["default"] = (middleware.use(async (req, res, next) => {
  let authHeader = req.headers.authorization || '';
  let user = {};

  if (!restricted.includes(req.url) && !authHeader) {
    return next();
  }

  if (authHeader) {
    let sessionID = authHeader.split(' ')[1];

    if (sessionID) {
      user = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["verifyToken"])(sessionID);

      if (user) {
        /* Could put check against users tables in database  User.find({email:user.email}) */
        req.user = user;
      } else {
        res.statusCode = 401;
        return res.send({
          status: 'error',
          error: 'Expired'
        });
      }
    } else {
      res.statusCode = 401;
      return res.send({
        status: 'error',
        error: 'Wrong Token'
      });
    }
  } else {
    res.statusCode = 401;
    return res.send({
      status: 'error',
      error: 'Unauthorized'
    });
  }

  return next();
}));

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

/***/ "./pages/api/menu/pattern-menu.js":
/*!****************************************!*\
  !*** ./pages/api/menu/pattern-menu.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../middleware/auth */ "./middleware/auth.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../middleware/utils */ "./middleware/utils.js");


const models = __webpack_require__(/*! ../../../db/models/index */ "./db/models/index.js");





const Sequelize = __webpack_require__(/*! sequelize */ "sequelize");

const Op = Sequelize.Op;
const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()() // Middleware
.use(_middleware_auth__WEBPACK_IMPORTED_MODULE_1__["default"]) // Get method
.get(async (req, res) => {
  const {
    method,
    body
  } = req;
  const {
    organization_id = 0
  } = req.query;
  let _search = {
    is_show: 1,
    is_deleted: 0
  }; // console.log(_search)

  const _menu = await models.Pattern_menu.findAndCountAll({
    // attributes: ['package_id','code_package','name_package','size_limit'] 
    where: _search,
    // offset: results * (page - 1),
    // limit: parseInt(results),
    order: [["pattern_menu_id", "ASC"]]
  });

  return res.status(200).json({
    // info: {
    //   page: page,
    //   results: results
    // },
    results: _menu.rows,
    totalCount: _menu.count
  });
}).post(async (req, res) => {// const { body } = req;
  // const { slug } = req.query;
  // const {
  //   organization_id,
  //   menu_title,
  //   menu_detail,
  //   menu_seq,
  //   have_sub,
  //   is_show,
  //   is_primary_menu,
  //   is_pattern_menu,
  //   pattern_menu,
  // } = body;
  // //SampleText.replace("Developer", "App Builder");
  // const dataMenu = {
  //   organization_id: organization_id,
  //   menu_title: menu_title,
  //   menu_detail: menu_detail,
  //   menu_seq: menu_seq,
  //   have_sub: have_sub,
  //   is_show: is_show,
  //   is_primary_menu: is_primary_menu,
  //   is_pattern_menu: is_pattern_menu,
  //   pattern_menu: pattern_menu,
  // };
  // if (
  //   organization_id == undefined ||
  //   menu_title == undefined || menu_detail == undefined ||
  //   menu_seq == undefined || have_sub == undefined ||
  //   is_show == undefined || is_primary_menu == undefined ||
  //   is_pattern_menu == undefined || pattern_menu == undefined
  // ) {
  //   return res.status(200).json({
  //     status: 201,
  //     message: 'data incorrect',
  //     dataMenu: dataMenu
  //   });
  // }
  // var ip = await getIPAddress()
  // var currentDate = moment().format()
  // dataIntro.ip = ip
  // dataIntro.is_deleted = 0
  // dataIntro.date_created = currentDate.replace("+07:00", "+00:00")
  // dataIntro.date_updated = currentDate.replace("+07:00", "+00:00")
  // // console.log(dataIntro)
  // const newMenu = await models.Menu.create(dataMenu);
  // if (newMenu == null) {
  //   return res.status(500).json({
  //     status: 500,
  //     message: 'Internal error',
  //   });
  // }
  // return res.status(200).json({
  //   status: 200,
  //   message: 'บันทึกข้อมูลสำเร็จ',
  // });
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ 6:
/*!**********************************************!*\
  !*** multi ./pages/api/menu/pattern-menu.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\govermentlt\pages\api\menu\pattern-menu.js */"./pages/api/menu/pattern-menu.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

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

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-connect");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGIvY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9kYi9tb2RlbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9hdXRoLmpzIiwid2VicGFjazovLy8uL21pZGRsZXdhcmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL21lbnUvcGF0dGVybi1tZW51LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvbm5lY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemVcIiJdLCJuYW1lcyI6WyJkb3RlbnYiLCJyZXF1aXJlIiwicmVzdWx0IiwiY29uZmlnIiwibW9kdWxlIiwiZXhwb3J0cyIsImRldmVsb3BtZW50IiwidXNlcm5hbWUiLCJwcm9jZXNzIiwiZW52IiwiREJfVVNFUiIsInBhc3N3b3JkIiwiREJfUEFTUyIsImRhdGFiYXNlIiwiREJfTkFNRSIsImhvc3QiLCJEQl9IT1NUIiwiZGlhbGVjdCIsInRlc3QiLCJsb2dnaW5nIiwicHJvZHVjdGlvbiIsImRpYWxlY3RPcHRpb25zIiwic3NsIiwiZnMiLCJwYXRoIiwiU2VxdWVsaXplIiwiYmFzZW5hbWUiLCJfX2ZpbGVuYW1lIiwiX19kaXJuYW1lIiwiZGIiLCJtb2RlbHMiLCJjd2QiLCJzZXF1ZWxpemUiLCJ1c2VfZW52X3ZhcmlhYmxlIiwicmVhZGRpclN5bmMiLCJmaWx0ZXIiLCJmaWxlIiwiaW5kZXhPZiIsInNsaWNlIiwiZm9yRWFjaCIsIm1vZGVsIiwiam9pbiIsIm5hbWUiLCJPYmplY3QiLCJrZXlzIiwibW9kZWxOYW1lIiwiYXNzb2NpYXRlIiwibWlkZGxld2FyZSIsIm5leHRDb25uZWN0IiwicmVzdHJpY3RlZCIsInVzZSIsInJlcSIsInJlcyIsIm5leHQiLCJhdXRoSGVhZGVyIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJ1c2VyIiwiaW5jbHVkZXMiLCJ1cmwiLCJzZXNzaW9uSUQiLCJzcGxpdCIsInZlcmlmeVRva2VuIiwic3RhdHVzQ29kZSIsInNlbmQiLCJzdGF0dXMiLCJlcnJvciIsIlNFQ1JFVF9LRVkiLCJKV1RfS0VZIiwiand0VG9rZW4iLCJqd3QiLCJ2ZXJpZnkiLCJlIiwiY29uc29sZSIsImxvZyIsImdldEFwcENvb2tpZXMiLCJwYXJzZWRJdGVtcyIsImNvb2tpZSIsImNvb2tpZXNJdGVtcyIsImNvb2tpZXMiLCJwYXJzZWRJdGVtIiwiZGVjb2RlVVJJIiwiYWJzb2x1dGVVcmwiLCJzZXRMb2NhbGhvc3QiLCJwcm90b2NvbCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiYWRkRGF5cyIsImRhdGUiLCJkYXlzIiwiRGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwiZm9ybWF0RGF0ZVdpdGhvdXRUaW1lIiwiZGF0ZVN0cmluZyIsImdldFVUQ0Z1bGxZZWFyIiwiZ2V0VVRDTW9udGgiLCJnZXRVVENEYXRlIiwiYXBpSW5zdGFuY2UiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJjaGVja0lzTG9naW4iLCJ0b2tlbiIsIkNvb2tpZXMiLCJnZXQiLCJSb3V0ZXIiLCJwdXNoIiwicGFyc2VKd3QiLCJpc0V4cGlyZWQiLCJiYXNlNjRVcmwiLCJiYXNlNjQiLCJyZXBsYWNlIiwianNvblBheWxvYWQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJhdG9iIiwibWFwIiwiYyIsImNoYXJDb2RlQXQiLCJ0b1N0cmluZyIsIl9qc29uUGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImRhdGVOb3ciLCJwYXJzZUludCIsImV4cCIsImdldFRpbWUiLCJzdWJzdHJpbmciLCJjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lIiwiZGF0ZVNwbGl0IiwiY29udmVydERhdGVEQnRvRGF0ZVBpY2tlcldpdGhUaW1lIiwiY29udmVydERhdGV0b1RoYWlEYXRlIiwiX2RhdGUiLCJjb252ZXJ0TW9udGh0b1RoYWlNb250aCIsImNvbnZlcnRZZWFydG9UaGFpWWVhciIsInllYXIiLCJtb250aCIsImNvbnZlcnREYXRldG9BZGREQiIsImdldElQQWRkcmVzcyIsImRhdGEiLCJjb3VudHJ5X2NvZGUiLCJjb3VudHJ5X25hbWUiLCJjaXR5IiwicG9zdGFsIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJJUHY0Iiwic3RhdGUiLCJieXRlc1RvU2l6ZSIsImJ5dGVzIiwic2l6ZXMiLCJpIiwiTWF0aCIsImZsb29yIiwicm91bmQiLCJwb3ciLCJieXRlc1RvTUIiLCJOdW1iZXIiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImdldERhdGVkaWZmIiwic3RhcnREYXRlIiwidGltZUVuZCIsIm1vbWVudCIsIm5ld1N0YXJ0RGF0ZSIsIm5ld0VuZERhdGUiLCJvbmVfZGF5IiwiY2VpbCIsImdldEN1cnJlbnREYXRlIiwic2VwYXJhdG9yIiwibmV3RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJPcCIsImhhbmRsZXIiLCJtZXRob2QiLCJib2R5Iiwib3JnYW5pemF0aW9uX2lkIiwicXVlcnkiLCJfc2VhcmNoIiwiaXNfc2hvdyIsImlzX2RlbGV0ZWQiLCJfbWVudSIsIlBhdHRlcm5fbWVudSIsImZpbmRBbmRDb3VudEFsbCIsIndoZXJlIiwib3JkZXIiLCJqc29uIiwicmVzdWx0cyIsInJvd3MiLCJ0b3RhbENvdW50IiwiY291bnQiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOztR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QUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxDQS9GYSxDQUFoQjtBQWlHZTJILHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUdBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHNDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhcGlcXG1lbnVcXHBhdHRlcm4tbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcbiIsIid1c2Ugc3RyaWN0JztcclxuY29uc3QgZG90ZW52ID0gcmVxdWlyZShcImRvdGVudlwiKVxyXG5jb25zdCByZXN1bHQgPSBkb3RlbnYuY29uZmlnKClcclxuXHJcbi8vIGlmIChyZXN1bHQuZXJyb3IpIHtcclxuLy8gICB0aHJvdyByZXN1bHQuZXJyb3JcclxuLy8gfVxyXG5cclxuLy8gY29uc29sZS5sb2cocmVzdWx0LnBhcnNlZClcclxuXHJcbi8vIGRvdGVudi5jb25maWcoeyBwYXRoOiBfX2Rpcm5hbWUgKyAnLmVudicgfSk7XHJcbi8vIGNvbnNvbGUubG9nKFwicHJvY2Vzcy5lbnYuREJfVVNFUlwiKTtcclxuLy8gY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuREJfSE9TVCk7XHJcbi8vIGRvdGVudi5jb25maWcoeyBwYXRoOiAnLi9jb25maWcuZW52JyB9KTtcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZGV2ZWxvcG1lbnQ6IHtcclxuICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxyXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1MsXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSxcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXHJcbiAgICBkaWFsZWN0OiAnbXlzcWwnLFxyXG4gIH0sXHJcbiAgdGVzdDoge1xyXG4gICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LkRCX1VTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTUyxcclxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxyXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcclxuICAgIGRpYWxlY3Q6ICdteXNxbCcsXHJcbiAgICBsb2dnaW5nOiBmYWxzZSxcclxuICB9LFxyXG4gIHByb2R1Y3Rpb246IHtcclxuICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxyXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1MsXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSxcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXHJcbiAgICBkaWFsZWN0OiAnbXlzcWwnLFxyXG4gICAgZGlhbGVjdE9wdGlvbnM6IHtcclxuICAgICAgc3NsOiB0cnVlLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcbmNvbnN0IFNlcXVlbGl6ZSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xyXG5jb25zdCBiYXNlbmFtZSA9IHBhdGguYmFzZW5hbWUoX19maWxlbmFtZSk7XHJcbmNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7XHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoX19kaXJuYW1lICsgJy8uLi9jb25maWcvY29uZmlnLmpzJylbZW52XTtcclxuY29uc3QgZGIgPSB7fTtcclxuXHJcbi8qIEN1c3RvbSBoYW5kbGVyIGZvciByZWFkaW5nIGN1cnJlbnQgd29ya2luZyBkaXJlY3RvcnkgKi9cclxuY29uc3QgbW9kZWxzID0gcHJvY2Vzcy5jd2QoKSArICcvZGIvbW9kZWxzLycgfHwgX19kaXJuYW1lO1xyXG5cclxubGV0IHNlcXVlbGl6ZTtcclxuaWYgKGNvbmZpZy51c2VfZW52X3ZhcmlhYmxlKSB7XHJcbiAgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShwcm9jZXNzLmVudltjb25maWcudXNlX2Vudl92YXJpYWJsZV0sIGNvbmZpZyk7XHJcbn0gZWxzZSB7XHJcbiAgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShcclxuICAgIGNvbmZpZy5kYXRhYmFzZSxcclxuICAgIGNvbmZpZy51c2VybmFtZSxcclxuICAgIGNvbmZpZy5wYXNzd29yZCxcclxuICAgIGNvbmZpZyxcclxuICApO1xyXG59XHJcbi8qIGZzLnJlYWRkaXJTeW5jKF9fZGlybmFtZSkgKi9cclxuZnMucmVhZGRpclN5bmMobW9kZWxzKVxyXG4gIC5maWx0ZXIoZmlsZSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBmaWxlLmluZGV4T2YoJy4nKSAhPT0gMCAmJiBmaWxlICE9PSBiYXNlbmFtZSAmJiBmaWxlLnNsaWNlKC0zKSA9PT0gJy5qcydcclxuICAgICk7XHJcbiAgfSlcclxuICAuZm9yRWFjaChmaWxlID0+IHtcclxuICAgIC8qIGNvbnN0IG1vZGVsID0gc2VxdWVsaXplW1wiaW1wb3J0XCJdKHBhdGguam9pbihfX2Rpcm5hbWUsIGZpbGUpKTsgKi9cclxuICAgIGNvbnN0IG1vZGVsID0gc2VxdWVsaXplWydpbXBvcnQnXShwYXRoLmpvaW4obW9kZWxzLCBmaWxlKSk7XHJcbiAgICBkYlttb2RlbC5uYW1lXSA9IG1vZGVsO1xyXG4gIH0pO1xyXG5cclxuT2JqZWN0LmtleXMoZGIpLmZvckVhY2gobW9kZWxOYW1lID0+IHtcclxuICBpZiAoZGJbbW9kZWxOYW1lXS5hc3NvY2lhdGUpIHtcclxuICAgIGRiW21vZGVsTmFtZV0uYXNzb2NpYXRlKGRiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZGIuc2VxdWVsaXplID0gc2VxdWVsaXplO1xyXG5kYi5TZXF1ZWxpemUgPSBTZXF1ZWxpemU7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRiO1xyXG4iLCJpbXBvcnQgbmV4dENvbm5lY3QgZnJvbSAnbmV4dC1jb25uZWN0JztcclxuaW1wb3J0IHsgdmVyaWZ5VG9rZW4gfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBuZXh0Q29ubmVjdCgpO1xyXG5cclxuLyogU2FtcGxlIHVzaW5nIG1pZGRsZXdhcmUgKi9cclxuLyogbWlkZGxld2FyZS51c2UoZGF0YWJhc2UpLnVzZShzZXNzaW9uKS51c2UocGFzc3BvcnQuaW5pdGlhbGl6ZSgpKS51c2UocGFzc3BvcnQuc2Vzc2lvbigpKTsgKi9cclxuXHJcbi8qIFNldCByZXN0cmljdGVkIHB1YmxpYyBhY2Nlc3MgLyBwdXQgYW55IGFwaSBhY2Nlc3MgdGhhdCBpcyByZXN0cmljdGVkIGluIGhlcmUgKi9cclxuY29uc3QgcmVzdHJpY3RlZCA9IFsnL2FwaS9vcmdhbml6YXRpb24vW29yZ2FuaXphdGlvbi1pZF1dJywgJy9hcGkvam9iL1tzbHVnXSddO1xyXG5cclxuLypcclxuICogQHBhcmFtcyB7cmVxdWVzdCwgcmVzcG9uc2UsIGNhbGxiYWNrfSBkZWZhdWx0IFJlcXVlc3QgYW5kIFJlc3BvbnNlXHJcbiAqIEByZXR1cm4ge29iamVjdH0gb2JqZWN0IGlmIHRydWUsIHJlc3BvbnNlIG1lc3NhZ2UgaWYgZmFsc2UgYW5kIGNvbnRpbnVlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBtaWRkbGV3YXJlLnVzZShhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICBsZXQgYXV0aEhlYWRlciA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24gfHwgJyc7XHJcbiAgbGV0IHVzZXIgPSB7fTtcclxuXHJcbiAgaWYgKCFyZXN0cmljdGVkLmluY2x1ZGVzKHJlcS51cmwpICYmICFhdXRoSGVhZGVyKSB7XHJcbiAgICByZXR1cm4gbmV4dCgpO1xyXG4gIH1cclxuICBpZiAoYXV0aEhlYWRlcikge1xyXG4gICAgbGV0IHNlc3Npb25JRCA9IGF1dGhIZWFkZXIuc3BsaXQoJyAnKVsxXTtcclxuICAgIGlmIChzZXNzaW9uSUQpIHtcclxuICAgICAgdXNlciA9IHZlcmlmeVRva2VuKHNlc3Npb25JRCk7XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgLyogQ291bGQgcHV0IGNoZWNrIGFnYWluc3QgdXNlcnMgdGFibGVzIGluIGRhdGFiYXNlICBVc2VyLmZpbmQoe2VtYWlsOnVzZXIuZW1haWx9KSAqL1xyXG4gICAgICAgIHJlcS51c2VyID0gdXNlcjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDQwMTtcclxuICAgICAgICByZXR1cm4gcmVzLnNlbmQoe1xyXG4gICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxyXG4gICAgICAgICAgZXJyb3I6ICdFeHBpcmVkJyxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDE7XHJcbiAgICAgIHJldHVybiByZXMuc2VuZCh7XHJcbiAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxyXG4gICAgICAgIGVycm9yOiAnV3JvbmcgVG9rZW4nLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1c0NvZGUgPSA0MDE7XHJcbiAgICByZXR1cm4gcmVzLnNlbmQoe1xyXG4gICAgICBzdGF0dXM6ICdlcnJvcicsXHJcbiAgICAgIGVycm9yOiAnVW5hdXRob3JpemVkJyxcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gbmV4dCgpO1xyXG59KTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgU0VDUkVUX0tFWSA9IHByb2Nlc3MuZW52LkpXVF9LRVk7XHJcblxyXG4vKlxyXG4gKiBAcGFyYW1zIHtqd3RUb2tlbn0gZXh0cmFjdGVkIGZyb20gY29va2llc1xyXG4gKiBAcmV0dXJuIHtvYmplY3R9IG9iamVjdCBvZiBleHRyYWN0ZWQgdG9rZW5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlUb2tlbihqd3RUb2tlbikge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gand0LnZlcmlmeShqd3RUb2tlbiwgU0VDUkVUX0tFWSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coJ2U6JywgZSk7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbi8qXHJcbiAqIEBwYXJhbXMge3JlcXVlc3R9IGV4dHJhY3RlZCBmcm9tIHJlcXVlc3QgcmVzcG9uc2VcclxuICogQHJldHVybiB7b2JqZWN0fSBvYmplY3Qgb2YgcGFyc2Ugand0IGNvb2tpZSBkZWNvZGUgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBwQ29va2llcyhyZXEpIHtcclxuICBjb25zdCBwYXJzZWRJdGVtcyA9IHt9O1xyXG4gIGlmIChyZXEuaGVhZGVycy5jb29raWUpIHtcclxuICAgIGNvbnN0IGNvb2tpZXNJdGVtcyA9IHJlcS5oZWFkZXJzLmNvb2tpZS5zcGxpdCgnOyAnKTtcclxuICAgIGNvb2tpZXNJdGVtcy5mb3JFYWNoKGNvb2tpZXMgPT4ge1xyXG4gICAgICBjb25zdCBwYXJzZWRJdGVtID0gY29va2llcy5zcGxpdCgnPScpO1xyXG4gICAgICBwYXJzZWRJdGVtc1twYXJzZWRJdGVtWzBdXSA9IGRlY29kZVVSSShwYXJzZWRJdGVtWzFdKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gcGFyc2VkSXRlbXM7XHJcbn1cclxuXHJcbi8qXHJcbiAqIEBwYXJhbXMge3JlcXVlc3R9IGV4dHJhY3RlZCBmcm9tIHJlcXVlc3QgcmVzcG9uc2UsIHtzZXRMb2NhbGhvc3R9IHlvdXIgbG9jYWxob3N0IGFkZHJlc3NcclxuICogQHJldHVybiB7b2JqZWN0fSBvYmplY3RzIG9mIHByb3RvY29sLCBob3N0IGFuZCBvcmlnaW5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhYnNvbHV0ZVVybChyZXEsIHNldExvY2FsaG9zdCkge1xyXG4gIHZhciBwcm90b2NvbCA9ICdodHRwczonO1xyXG4gIHZhciBob3N0ID0gcmVxXHJcbiAgICA/IHJlcS5oZWFkZXJzWyd4LWZvcndhcmRlZC1ob3N0J10gfHwgcmVxLmhlYWRlcnNbJ2hvc3QnXVxyXG4gICAgOiB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuICBpZiAoaG9zdC5pbmRleE9mKCdsb2NhbGhvc3QnKSA+IC0xKSB7XHJcbiAgICBpZiAoc2V0TG9jYWxob3N0KSBob3N0ID0gc2V0TG9jYWxob3N0O1xyXG4gICAgcHJvdG9jb2wgPSAnaHR0cDonO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgcHJvdG9jb2w6IHByb3RvY29sLFxyXG4gICAgaG9zdDogaG9zdCxcclxuICAgIG9yaWdpbjogcHJvdG9jb2wgKyAnLy8nICsgaG9zdCxcclxuICAgIHVybDogcmVxLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGREYXlzKGRhdGUsIGRheXMpIHtcclxuICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgcmVzdWx0LnNldERhdGUocmVzdWx0LmdldERhdGUoKSArIGRheXMpO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vWVlZWS1NTS1ERFxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZVdpdGhvdXRUaW1lKGRhdGUpIHtcclxuICB2YXIgZGF0ZVN0cmluZyA9XHJcbiAgICBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgKyBcIi1cIiArXHJcbiAgICAoXCIwXCIgKyAoZGF0ZS5nZXRVVENNb250aCgpICsgMSkpLnNsaWNlKC0yKSArIFwiLVwiICtcclxuICAgIChcIjBcIiArIGRhdGUuZ2V0VVRDRGF0ZSgpKS5zbGljZSgtMikgKyBcIiBcIlxyXG4gIHJldHVybiBkYXRlU3RyaW5nO1xyXG59XHJcbi8vIGNvbnN0IGFwaSA9IHByb2Nlc3MuZW52LlBVQkxJQ19VUkxcclxuXHJcbmV4cG9ydCBjb25zdCBhcGlJbnN0YW5jZSA9ICgpID0+IHtcclxuICAvLyBjb25zdCBhdXRob3JpemF0aW9uID0gc3RvcmUuZ2V0U3RhdGUoKS51c2VyU3RhdGUudG9rZW4gPyBzdG9yZS5nZXRTdGF0ZSgpLnVzZXJTdGF0ZS50b2tlbiA6IG51bGxcclxuXHJcbiAgLy8gY29uc3QgaGVhZGVycyA9IHtcclxuICAvLyBcdCd4LWFwaS10b2tlbic6IGF1dGhvcml6YXRpb24gPyBhdXRob3JpemF0aW9uIDogJycsXHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6ICcvYXBpJyxcclxuICAgIC8vIGhlYWRlcnMsXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrSXNMb2dpbiA9ICgpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhcImNoZWNrSXNMb2dpblwiKVxyXG4gIHZhciB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpIC8vID0+ICd2YWx1ZSdcclxuXHJcbiAgaWYgKCF0b2tlbikge1xyXG4gICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvLyBjb25zb2xlLmxvZyhwYXJzZUp3dCh0b2tlbikpXHJcbiAgcmV0dXJuIHBhcnNlSnd0KHRva2VuKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSnd0KHRva2VuKSB7XHJcblxyXG4gIHZhciBpc0V4cGlyZWQgPSBmYWxzZTtcclxuICAvLyBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpO1xyXG5cclxuXHJcblxyXG4gIHZhciBiYXNlNjRVcmwgPSB0b2tlbi5zcGxpdCgnLicpWzFdO1xyXG4gIHZhciBiYXNlNjQgPSBiYXNlNjRVcmwucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcclxuICB2YXIganNvblBheWxvYWQgPSBkZWNvZGVVUklDb21wb25lbnQoYXRvYihiYXNlNjQpLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKGMpIHtcclxuICAgIHJldHVybiAnJScgKyAoJzAwJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcclxuICB9KS5qb2luKCcnKSk7XHJcbiAgdmFyIF9qc29uUGF5bG9hZCA9IEpTT04ucGFyc2UoanNvblBheWxvYWQpXHJcbiAgdmFyIGRhdGVOb3cgPSBuZXcgRGF0ZSgpO1xyXG4gIC8vIGNvbnNvbGUubG9nKHBhcnNlSW50KF9qc29uUGF5bG9hZC5leHApKVxyXG4gIC8vIGNvbnNvbGUubG9nKHBhcnNlSW50KChkYXRlTm93LmdldFRpbWUoKSkudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwxMCkpKVxyXG4gIGlmIChwYXJzZUludChfanNvblBheWxvYWQuZXhwKSA8IHBhcnNlSW50KChkYXRlTm93LmdldFRpbWUoKSkudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApKSkge1xyXG4gICAgY29uc29sZS5sb2coXCJ0cnVlXCIpXHJcblxyXG4gICAgaXNFeHBpcmVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlmIChpc0V4cGlyZWQpIHtcclxuICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxuICByZXR1cm4gX2pzb25QYXlsb2FkO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lKGRhdGUpIHtcclxuICB0cnkge1xyXG4gICAgdmFyIGRhdGVTcGxpdCA9IGRhdGUudG9TdHJpbmcoKS5zcGxpdChcIlRcIik7XHJcbiAgICByZXR1cm4gZGF0ZVNwbGl0WzBdO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydERhdGVEQnRvRGF0ZVBpY2tlcldpdGhUaW1lKGRhdGUpIHtcclxuICB0cnkge1xyXG4gICAgLy86MDcuMDAwWlxyXG4gICAgLy9TYW1wbGVUZXh0LnJlcGxhY2UoXCJEZXZlbG9wZXJcIiwgXCJBcHAgQnVpbGRlclwiKTtcclxuICAgIHZhciBkYXRlU3BsaXQgPSBkYXRlLnRvU3RyaW5nKCkuc3BsaXQoXCJUXCIpO1xyXG4gICAgcmV0dXJuIGRhdGVTcGxpdFswXSArIFwiIFwiICsgZGF0ZVNwbGl0WzFdLnJlcGxhY2UoXCIuMDAwWlwiLCBcIlwiKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREYXRldG9UaGFpRGF0ZShkYXRlKSB7XHJcbiAgdmFyIF9kYXRlID0gY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZShkYXRlKVxyXG4gIHZhciBkYXRlU3BsaXQgPSBfZGF0ZS50b1N0cmluZygpLnNwbGl0KFwiLVwiKTtcclxuICAvLyAyMDIxLTA5LTE2XHJcbiAgcmV0dXJuIGRhdGVTcGxpdFsyXSArIFwiIFwiICsgY29udmVydE1vbnRodG9UaGFpTW9udGgoZGF0ZVNwbGl0WzFdKSArIFwiIFwiICsgY29udmVydFllYXJ0b1RoYWlZZWFyKGRhdGVTcGxpdFswXSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRZZWFydG9UaGFpWWVhcih5ZWFyKSB7XHJcbiAgcmV0dXJuIHBhcnNlSW50KHllYXIpICsgNTQzXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0TW9udGh0b1RoYWlNb250aChtb250aCkge1xyXG4gIHN3aXRjaCAobW9udGgpIHtcclxuICAgIGNhc2UgXCIwMVwiOlxyXG4gICAgICByZXR1cm4gXCLguKHguIHguKPguLLguITguKFcIlxyXG4gICAgY2FzZSBcIjAyXCI6XHJcbiAgICAgIHJldHVybiBcIuC4geC4uOC4oeC4oOC4suC4nuC4seC4meC4mOC5jFwiXHJcbiAgICBjYXNlIFwiMDNcIjpcclxuICAgICAgcmV0dXJuIFwi4Lih4Li14LiZ4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIwNFwiOlxyXG4gICAgICByZXR1cm4gXCLguYDguKHguKnguLLguKLguJlcIlxyXG4gICAgY2FzZSBcIjA1XCI6XHJcbiAgICAgIHJldHVybiBcIuC4nuC4pOC4qeC4oOC4suC4hOC4oVwiXHJcbiAgICBjYXNlIFwiMDZcIjpcclxuICAgICAgcmV0dXJuIFwi4Lih4Li04LiW4Li44LiZ4Liy4Lii4LiZXCJcclxuICAgIGNhc2UgXCIwN1wiOlxyXG4gICAgICByZXR1cm4gXCLguIHguKPguIHguI7guLLguITguKFcIlxyXG4gICAgY2FzZSBcIjA4XCI6XHJcbiAgICAgIHJldHVybiBcIuC4quC4tOC4h+C4q+C4suC4hOC4oVwiXHJcbiAgICBjYXNlIFwiMDlcIjpcclxuICAgICAgcmV0dXJuIFwi4LiB4Lix4LiZ4Lii4Liy4Lii4LiZXCJcclxuICAgIGNhc2UgXCIxMFwiOlxyXG4gICAgICByZXR1cm4gXCLguJXguLjguKXguLLguITguKFcIlxyXG4gICAgY2FzZSBcIjExXCI6XHJcbiAgICAgIHJldHVybiBcIuC4nuC4pOC4qOC4iOC4tOC4geC4suC4ouC4mVwiXHJcbiAgICBjYXNlIFwiMTJcIjpcclxuICAgICAgcmV0dXJuIFwi4LiY4Lix4LiZ4Lin4Liy4LiE4LihXCJcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBcIk5BTlwiXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydERhdGV0b0FkZERCKGRhdGUpIHtcclxuICB2YXIgZGF0ZVNwbGl0ID0gZGF0ZS5zcGxpdChcIiBcIik7XHJcbiAgcmV0dXJuIGRhdGVTcGxpdFswXSArIFwiVFwiICsgZGF0ZVNwbGl0WzFdICsgXCIrMDA6MDBcIjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldElQQWRkcmVzcygpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vZ2VvbG9jYXRpb24tZGIuY29tL2pzb24vJylcclxuICAvLyBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgLy8gcmV0dXJuIHJlcy5kYXRhXHJcbiAgcmV0dXJuIFwiY291bnRyeV9jb2RlOlwiICsgcmVzLmRhdGEuY291bnRyeV9jb2RlICsgXCIsY291bnRyeV9uYW1lOlwiICsgcmVzLmRhdGEuY291bnRyeV9uYW1lICsgXCIsY2l0eTpcIiArIHJlcy5kYXRhLmNpdHkgKyBcIixwb3N0YWw6XCIgKyByZXMuZGF0YS5wb3N0YWxcclxuICAgICsgXCIsbGF0aXR1ZGU6XCIgKyByZXMuZGF0YS5sYXRpdHVkZSArIFwiLGxvbmdpdHVkZTpcIiArIHJlcy5kYXRhLmxvbmdpdHVkZSArIFwiLElQdjQ6XCIgKyByZXMuZGF0YS5JUHY0ICsgXCIsc3RhdGU6XCIgKyByZXMuZGF0YS5zdGF0ZVxyXG4gIC8vIHNldElQKHJlcy5kYXRhLklQdjQpXHJcbiAgLy8gcmV0dXJuXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGJ5dGVzVG9TaXplKGJ5dGVzKSB7XHJcbiAgdmFyIHNpemVzID0gWydCeXRlcycsICdLQicsICdNQicsICdHQicsICdUQiddO1xyXG4gIGlmIChieXRlcyA9PSAwKSByZXR1cm4gJzAgQnl0ZSc7XHJcbiAgdmFyIGkgPSBwYXJzZUludChNYXRoLmZsb29yKE1hdGgubG9nKGJ5dGVzKSAvIE1hdGgubG9nKDEwMjQpKSk7XHJcbiAgcmV0dXJuIE1hdGgucm91bmQoYnl0ZXMgLyBNYXRoLnBvdygxMDI0LCBpKSwgMikgKyAnICcgKyBzaXplc1tpXTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBieXRlc1RvTUIoYnl0ZXMpIHtcclxuICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQoYnl0ZXMgLyAoMTAyNCAqIDEwMjQpKS50b0ZpeGVkKDIpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGVkaWZmKHN0YXJ0RGF0ZSkge1xyXG5cclxuICBjb25zdCB0aW1lRW5kID0gbW9tZW50KCk7XHJcbiAgY29uc3QgbmV3U3RhcnREYXRlID0gbmV3IERhdGUoc3RhcnREYXRlKTtcclxuICBjb25zdCBuZXdFbmREYXRlID0gbmV3IERhdGUodGltZUVuZCk7XHJcbiAgY29uc3Qgb25lX2RheSA9IDEwMDAgKiA2MCAqIDYwICogMjQ7XHJcbiAgbGV0IHJlc3VsdFxyXG4gIHJlc3VsdCA9IE1hdGguY2VpbCgobmV3U3RhcnREYXRlLmdldFRpbWUoKSAtIG5ld0VuZERhdGUuZ2V0VGltZSgpKSAvIChvbmVfZGF5KSlcclxuICBjb25zb2xlLmxvZygnZGF0ZSBDb252ZXJ0ZXIgcmVzdWx0JywgcmVzdWx0KVxyXG5cclxuXHJcbiAgcmV0dXJuIHJlc3VsdCAtIDE7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudERhdGUoc2VwYXJhdG9yID0gJycpIHtcclxuXHJcbiAgbGV0IG5ld0RhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgbGV0IGRhdGUgPSBuZXdEYXRlLmdldERhdGUoKTtcclxuICBsZXQgbW9udGggPSBuZXdEYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gIGxldCB5ZWFyID0gbmV3RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICByZXR1cm4gYCR7eWVhcn0ke3NlcGFyYXRvcn0ke21vbnRoIDwgMTAgPyBgMCR7bW9udGh9YCA6IGAke21vbnRofWB9JHtzZXBhcmF0b3J9JHtkYXRlfWBcclxufVxyXG4iLCJpbXBvcnQgbmV4dENvbm5lY3QgZnJvbSAnbmV4dC1jb25uZWN0JztcclxuXHJcbmNvbnN0IG1vZGVscyA9IHJlcXVpcmUoJy4uLy4uLy4uL2RiL21vZGVscy9pbmRleCcpO1xyXG5pbXBvcnQgbWlkZGxld2FyZSBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL2F1dGgnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IGFic29sdXRlVXJsLCBjaGVja0lzTG9naW4sIGdldElQQWRkcmVzcywgY29udmVydERhdGV0b0FkZERCIH0gZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS91dGlscyc7XHJcbmNvbnN0IFNlcXVlbGl6ZSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xyXG5jb25zdCBPcCA9IFNlcXVlbGl6ZS5PcDtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBuZXh0Q29ubmVjdCgpXHJcbiAgLy8gTWlkZGxld2FyZVxyXG4gIC51c2UobWlkZGxld2FyZSlcclxuICAvLyBHZXQgbWV0aG9kXHJcbiAgLmdldChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbWV0aG9kLFxyXG4gICAgICBib2R5LFxyXG4gICAgfSA9IHJlcTtcclxuICAgIGNvbnN0IHsgb3JnYW5pemF0aW9uX2lkID0gMCB9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgbGV0IF9zZWFyY2ggPSB7XHJcbiAgICAgIGlzX3Nob3c6IDEsXHJcbiAgICAgIGlzX2RlbGV0ZWQ6IDBcclxuICAgIH07XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coX3NlYXJjaClcclxuICAgIGNvbnN0IF9tZW51ID0gYXdhaXQgbW9kZWxzLlBhdHRlcm5fbWVudS5maW5kQW5kQ291bnRBbGwoe1xyXG4gICAgICAvLyBhdHRyaWJ1dGVzOiBbJ3BhY2thZ2VfaWQnLCdjb2RlX3BhY2thZ2UnLCduYW1lX3BhY2thZ2UnLCdzaXplX2xpbWl0J10gXHJcbiAgICAgIHdoZXJlOiBfc2VhcmNoLFxyXG4gICAgICAvLyBvZmZzZXQ6IHJlc3VsdHMgKiAocGFnZSAtIDEpLFxyXG4gICAgICAvLyBsaW1pdDogcGFyc2VJbnQocmVzdWx0cyksXHJcbiAgICAgIG9yZGVyOiBbXHJcbiAgICAgICAgW1wicGF0dGVybl9tZW51X2lkXCIsIFwiQVNDXCJdXHJcbiAgICAgIF1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgLy8gaW5mbzoge1xyXG4gICAgICAvLyAgIHBhZ2U6IHBhZ2UsXHJcbiAgICAgIC8vICAgcmVzdWx0czogcmVzdWx0c1xyXG4gICAgICAvLyB9LFxyXG4gICAgICByZXN1bHRzOiBfbWVudS5yb3dzLFxyXG4gICAgICB0b3RhbENvdW50OiBfbWVudS5jb3VudFxyXG4gICAgfSk7XHJcbiAgfSlcclxuICAucG9zdChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIC8vIGNvbnN0IHsgYm9keSB9ID0gcmVxO1xyXG4gICAgLy8gY29uc3QgeyBzbHVnIH0gPSByZXEucXVlcnk7XHJcbiAgICAvLyBjb25zdCB7XHJcbiAgICAvLyAgIG9yZ2FuaXphdGlvbl9pZCxcclxuICAgIC8vICAgbWVudV90aXRsZSxcclxuICAgIC8vICAgbWVudV9kZXRhaWwsXHJcbiAgICAvLyAgIG1lbnVfc2VxLFxyXG4gICAgLy8gICBoYXZlX3N1YixcclxuICAgIC8vICAgaXNfc2hvdyxcclxuICAgIC8vICAgaXNfcHJpbWFyeV9tZW51LFxyXG4gICAgLy8gICBpc19wYXR0ZXJuX21lbnUsXHJcbiAgICAvLyAgIHBhdHRlcm5fbWVudSxcclxuICAgIC8vIH0gPSBib2R5O1xyXG4gICAgLy8gLy9TYW1wbGVUZXh0LnJlcGxhY2UoXCJEZXZlbG9wZXJcIiwgXCJBcHAgQnVpbGRlclwiKTtcclxuICAgIC8vIGNvbnN0IGRhdGFNZW51ID0ge1xyXG4gICAgLy8gICBvcmdhbml6YXRpb25faWQ6IG9yZ2FuaXphdGlvbl9pZCxcclxuICAgIC8vICAgbWVudV90aXRsZTogbWVudV90aXRsZSxcclxuICAgIC8vICAgbWVudV9kZXRhaWw6IG1lbnVfZGV0YWlsLFxyXG4gICAgLy8gICBtZW51X3NlcTogbWVudV9zZXEsXHJcbiAgICAvLyAgIGhhdmVfc3ViOiBoYXZlX3N1YixcclxuICAgIC8vICAgaXNfc2hvdzogaXNfc2hvdyxcclxuICAgIC8vICAgaXNfcHJpbWFyeV9tZW51OiBpc19wcmltYXJ5X21lbnUsXHJcbiAgICAvLyAgIGlzX3BhdHRlcm5fbWVudTogaXNfcGF0dGVybl9tZW51LFxyXG4gICAgLy8gICBwYXR0ZXJuX21lbnU6IHBhdHRlcm5fbWVudSxcclxuICAgIC8vIH07XHJcblxyXG4gICAgLy8gaWYgKFxyXG4gICAgLy8gICBvcmdhbml6YXRpb25faWQgPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAvLyAgIG1lbnVfdGl0bGUgPT0gdW5kZWZpbmVkIHx8IG1lbnVfZGV0YWlsID09IHVuZGVmaW5lZCB8fFxyXG4gICAgLy8gICBtZW51X3NlcSA9PSB1bmRlZmluZWQgfHwgaGF2ZV9zdWIgPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAvLyAgIGlzX3Nob3cgPT0gdW5kZWZpbmVkIHx8IGlzX3ByaW1hcnlfbWVudSA9PSB1bmRlZmluZWQgfHxcclxuICAgIC8vICAgaXNfcGF0dGVybl9tZW51ID09IHVuZGVmaW5lZCB8fCBwYXR0ZXJuX21lbnUgPT0gdW5kZWZpbmVkXHJcbiAgICAvLyApIHtcclxuICAgIC8vICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgIC8vICAgICBzdGF0dXM6IDIwMSxcclxuICAgIC8vICAgICBtZXNzYWdlOiAnZGF0YSBpbmNvcnJlY3QnLFxyXG4gICAgLy8gICAgIGRhdGFNZW51OiBkYXRhTWVudVxyXG4gICAgLy8gICB9KTtcclxuICAgIC8vIH1cclxuICAgIC8vIHZhciBpcCA9IGF3YWl0IGdldElQQWRkcmVzcygpXHJcbiAgICAvLyB2YXIgY3VycmVudERhdGUgPSBtb21lbnQoKS5mb3JtYXQoKVxyXG4gICAgLy8gZGF0YUludHJvLmlwID0gaXBcclxuICAgIC8vIGRhdGFJbnRyby5pc19kZWxldGVkID0gMFxyXG4gICAgLy8gZGF0YUludHJvLmRhdGVfY3JlYXRlZCA9IGN1cnJlbnREYXRlLnJlcGxhY2UoXCIrMDc6MDBcIiwgXCIrMDA6MDBcIilcclxuICAgIC8vIGRhdGFJbnRyby5kYXRlX3VwZGF0ZWQgPSBjdXJyZW50RGF0ZS5yZXBsYWNlKFwiKzA3OjAwXCIsIFwiKzAwOjAwXCIpXHJcblxyXG5cclxuICAgIC8vIC8vIGNvbnNvbGUubG9nKGRhdGFJbnRybylcclxuICAgIC8vIGNvbnN0IG5ld01lbnUgPSBhd2FpdCBtb2RlbHMuTWVudS5jcmVhdGUoZGF0YU1lbnUpO1xyXG5cclxuICAgIC8vIGlmIChuZXdNZW51ID09IG51bGwpIHtcclxuICAgIC8vICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcclxuICAgIC8vICAgICBzdGF0dXM6IDUwMCxcclxuICAgIC8vICAgICBtZXNzYWdlOiAnSW50ZXJuYWwgZXJyb3InLFxyXG4gICAgLy8gICB9KTtcclxuICAgIC8vIH1cclxuICAgIC8vIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAvLyAgIHN0YXR1czogMjAwLFxyXG4gICAgLy8gICBtZXNzYWdlOiAn4Lia4Lix4LiZ4LiX4Li24LiB4LiC4LmJ4Lit4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIJyxcclxuICAgIC8vIH0pO1xyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29ubmVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9