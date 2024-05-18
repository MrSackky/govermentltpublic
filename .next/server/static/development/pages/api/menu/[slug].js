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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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

/***/ "./pages/api/menu/[slug].js":
/*!**********************************!*\
  !*** ./pages/api/menu/[slug].js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../middleware/auth */ "./middleware/auth.js");
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../middleware/utils */ "./middleware/utils.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);


const models = __webpack_require__(/*! ../../../db/models/index */ "./db/models/index.js");





const Sequelize = __webpack_require__(/*! sequelize */ "sequelize");

const Op = Sequelize.Op;
const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()() // Middleware
.use(_middleware_auth__WEBPACK_IMPORTED_MODULE_1__["default"]) // Get method
.get(async (req, res) => {}).put(async (req, res) => {
  const {
    body
  } = req;
  const {
    slug
  } = req.query;
  const menu_id = slug;
  const {
    menu_title,
    menu_detail,
    have_sub,
    is_show,
    is_primary_menu,
    is_pattern_menu,
    pattern_menu
  } = body; //SampleText.replace("Developer", "App Builder");

  const dataMenu = {
    menu_title: menu_title,
    menu_detail: menu_detail ? menu_detail : "",
    have_sub: have_sub,
    is_show: is_show,
    is_primary_menu: is_primary_menu,
    is_pattern_menu: is_pattern_menu,
    pattern_menu: pattern_menu
  };

  if (menu_id == undefined || menu_title == undefined || menu_detail == undefined || have_sub == undefined || is_show == undefined || is_primary_menu == undefined || is_pattern_menu == undefined || pattern_menu == undefined) {
    return res.status(200).json({
      status: 201,
      message: 'data incorrect',
      menu_id: menu_id,
      data: dataMenu
    });
  }

  const menuDataResult = await models.Menu.update(dataMenu, {
    where: {
      menu_id: menu_id
    }
  });
  return res.status(200).json({
    status: 200,
    message: "success" // organization: organization ? organization : []

  }); // await User.update({ lastName: "Doe" }, {
  //   where: {
  //     lastName: null
  //   }
  // });
}).delete(async (req, res) => {
  const {
    body
  } = req;
  const {
    slug
  } = req.query;
  const menu_id = slug;

  if (menu_id == undefined) {
    return res.status(200).json({
      status: 201,
      message: 'data incorrect',
      menu_id: menu_id
    });
  }

  var ip = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["getIPAddress"])();
  var currentDate = moment__WEBPACK_IMPORTED_MODULE_3___default()().format(); // dataMenu.ip = ip
  // dataMenu.is_deleted = 0
  // dataMenu.date_created = currentDate.replace("+07:00", "+00:00")
  // dataMenu.date_updated = currentDate.replace("+07:00", "+00:00")

  const dataInformation = {
    is_deleted: 1,
    ip: ip,
    date_updated: currentDate.replace("+07:00", "+00:00")
  };

  const _menu = await models.Menu.update(dataInformation, {
    where: {
      menu_id: menu_id
    }
  });

  return res.status(200).json({
    status: 200,
    message: 'success'
  });
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ 9:
/*!****************************************!*\
  !*** multi ./pages/api/menu/[slug].js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\govermentlt\pages\api\menu\[slug].js */"./pages/api/menu/[slug].js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGIvY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9kYi9tb2RlbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9hdXRoLmpzIiwid2VicGFjazovLy8uL21pZGRsZXdhcmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL21lbnUvW3NsdWddLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvbm5lY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemVcIiJdLCJuYW1lcyI6WyJkb3RlbnYiLCJyZXF1aXJlIiwicmVzdWx0IiwiY29uZmlnIiwibW9kdWxlIiwiZXhwb3J0cyIsImRldmVsb3BtZW50IiwidXNlcm5hbWUiLCJwcm9jZXNzIiwiZW52IiwiREJfVVNFUiIsInBhc3N3b3JkIiwiREJfUEFTUyIsImRhdGFiYXNlIiwiREJfTkFNRSIsImhvc3QiLCJEQl9IT1NUIiwiZGlhbGVjdCIsInRlc3QiLCJsb2dnaW5nIiwicHJvZHVjdGlvbiIsImRpYWxlY3RPcHRpb25zIiwic3NsIiwiZnMiLCJwYXRoIiwiU2VxdWVsaXplIiwiYmFzZW5hbWUiLCJfX2ZpbGVuYW1lIiwiX19kaXJuYW1lIiwiZGIiLCJtb2RlbHMiLCJjd2QiLCJzZXF1ZWxpemUiLCJ1c2VfZW52X3ZhcmlhYmxlIiwicmVhZGRpclN5bmMiLCJmaWx0ZXIiLCJmaWxlIiwiaW5kZXhPZiIsInNsaWNlIiwiZm9yRWFjaCIsIm1vZGVsIiwiam9pbiIsIm5hbWUiLCJPYmplY3QiLCJrZXlzIiwibW9kZWxOYW1lIiwiYXNzb2NpYXRlIiwibWlkZGxld2FyZSIsIm5leHRDb25uZWN0IiwicmVzdHJpY3RlZCIsInVzZSIsInJlcSIsInJlcyIsIm5leHQiLCJhdXRoSGVhZGVyIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJ1c2VyIiwiaW5jbHVkZXMiLCJ1cmwiLCJzZXNzaW9uSUQiLCJzcGxpdCIsInZlcmlmeVRva2VuIiwic3RhdHVzQ29kZSIsInNlbmQiLCJzdGF0dXMiLCJlcnJvciIsIlNFQ1JFVF9LRVkiLCJKV1RfS0VZIiwiand0VG9rZW4iLCJqd3QiLCJ2ZXJpZnkiLCJlIiwiY29uc29sZSIsImxvZyIsImdldEFwcENvb2tpZXMiLCJwYXJzZWRJdGVtcyIsImNvb2tpZSIsImNvb2tpZXNJdGVtcyIsImNvb2tpZXMiLCJwYXJzZWRJdGVtIiwiZGVjb2RlVVJJIiwiYWJzb2x1dGVVcmwiLCJzZXRMb2NhbGhvc3QiLCJwcm90b2NvbCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiYWRkRGF5cyIsImRhdGUiLCJkYXlzIiwiRGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwiZm9ybWF0RGF0ZVdpdGhvdXRUaW1lIiwiZGF0ZVN0cmluZyIsImdldFVUQ0Z1bGxZZWFyIiwiZ2V0VVRDTW9udGgiLCJnZXRVVENEYXRlIiwiYXBpSW5zdGFuY2UiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJjaGVja0lzTG9naW4iLCJ0b2tlbiIsIkNvb2tpZXMiLCJnZXQiLCJSb3V0ZXIiLCJwdXNoIiwicGFyc2VKd3QiLCJpc0V4cGlyZWQiLCJiYXNlNjRVcmwiLCJiYXNlNjQiLCJyZXBsYWNlIiwianNvblBheWxvYWQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJhdG9iIiwibWFwIiwiYyIsImNoYXJDb2RlQXQiLCJ0b1N0cmluZyIsIl9qc29uUGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImRhdGVOb3ciLCJwYXJzZUludCIsImV4cCIsImdldFRpbWUiLCJzdWJzdHJpbmciLCJjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lIiwiZGF0ZVNwbGl0IiwiY29udmVydERhdGVEQnRvRGF0ZVBpY2tlcldpdGhUaW1lIiwiY29udmVydERhdGV0b1RoYWlEYXRlIiwiX2RhdGUiLCJjb252ZXJ0TW9udGh0b1RoYWlNb250aCIsImNvbnZlcnRZZWFydG9UaGFpWWVhciIsInllYXIiLCJtb250aCIsImNvbnZlcnREYXRldG9BZGREQiIsImdldElQQWRkcmVzcyIsImRhdGEiLCJjb3VudHJ5X2NvZGUiLCJjb3VudHJ5X25hbWUiLCJjaXR5IiwicG9zdGFsIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJJUHY0Iiwic3RhdGUiLCJieXRlc1RvU2l6ZSIsImJ5dGVzIiwic2l6ZXMiLCJpIiwiTWF0aCIsImZsb29yIiwicm91bmQiLCJwb3ciLCJieXRlc1RvTUIiLCJOdW1iZXIiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImdldERhdGVkaWZmIiwic3RhcnREYXRlIiwidGltZUVuZCIsIm1vbWVudCIsIm5ld1N0YXJ0RGF0ZSIsIm5ld0VuZERhdGUiLCJvbmVfZGF5IiwiY2VpbCIsImdldEN1cnJlbnREYXRlIiwic2VwYXJhdG9yIiwibmV3RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJPcCIsImhhbmRsZXIiLCJwdXQiLCJib2R5Iiwic2x1ZyIsInF1ZXJ5IiwibWVudV9pZCIsIm1lbnVfdGl0bGUiLCJtZW51X2RldGFpbCIsImhhdmVfc3ViIiwiaXNfc2hvdyIsImlzX3ByaW1hcnlfbWVudSIsImlzX3BhdHRlcm5fbWVudSIsInBhdHRlcm5fbWVudSIsImRhdGFNZW51IiwidW5kZWZpbmVkIiwianNvbiIsIm1lc3NhZ2UiLCJtZW51RGF0YVJlc3VsdCIsIk1lbnUiLCJ1cGRhdGUiLCJ3aGVyZSIsImRlbGV0ZSIsImlwIiwiY3VycmVudERhdGUiLCJmb3JtYXQiLCJkYXRhSW5mb3JtYXRpb24iLCJpc19kZWxldGVkIiwiZGF0ZV91cGRhdGVkIiwiX21lbnUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RmE7O0FBQ2IsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHNCQUFELENBQXRCOztBQUNBLE1BQU1DLE1BQU0sR0FBR0YsTUFBTSxDQUFDRyxNQUFQLEVBQWYsQyxDQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmQyxhQUFXLEVBQUU7QUFDWEMsWUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FEWDtBQUVYQyxZQUFRLEVBQUVILE9BQU8sQ0FBQ0MsR0FB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LDZDQUFNLEdBQUdtQyxNQUFULEVBQWxCLENBWjBCLENBYTFCO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFFBQU1DLGVBQWUsR0FBRztBQUN0QkMsY0FBVSxFQUFFLENBRFU7QUFFdEJKLE1BQUUsRUFBRUEsRUFGa0I7QUFHdEJLLGdCQUFZLEVBQUVKLFdBQVcsQ0FBQ3JGLE9BQVosQ0FBb0IsUUFBcEIsRUFBOEIsUUFBOUI7QUFIUSxHQUF4Qjs7QUFNQSxRQUFNMEYsS0FBSyxHQUFHLE1BQU03SyxNQUFNLENBQUNtSyxJQUFQLENBQVlDLE1BQVosQ0FBbUJNLGVBQW5CLEVBQW9DO0FBQ3RETCxTQUFLLEVBQUU7QUFDTGYsYUFBTyxFQUFFQTtBQURKO0FBRCtDLEdBQXBDLENBQXBCOztBQU1BLFNBQU9oSSxHQUFHLENBQUNhLE1BQUosQ0FBVyxHQUFYLEVBQWdCNkgsSUFBaEIsQ0FBcUI7QUFDMUI3SCxVQUFNLEVBQUUsR0FEa0I7QUFFMUI4SCxXQUFPLEVBQUU7QUFGaUIsR0FBckIsQ0FBUDtBQUlELENBdEdhLENBQWhCO0FBd0dlaEIsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSEEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsc0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFwaVxcbWVudVxcW3NsdWddLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5jb25zdCBkb3RlbnYgPSByZXF1aXJlKFwiZG90ZW52XCIpXHJcbmNvbnN0IHJlc3VsdCA9IGRvdGVudi5jb25maWcoKVxyXG5cclxuLy8gaWYgKHJlc3VsdC5lcnJvcikge1xyXG4vLyAgIHRocm93IHJlc3VsdC5lcnJvclxyXG4vLyB9XHJcblxyXG4vLyBjb25zb2xlLmxvZyhyZXN1bHQucGFyc2VkKVxyXG5cclxuLy8gZG90ZW52LmNvbmZpZyh7IHBhdGg6IF9fZGlybmFtZSArICcuZW52JyB9KTtcclxuLy8gY29uc29sZS5sb2coXCJwcm9jZXNzLmVudi5EQl9VU0VSXCIpO1xyXG4vLyBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5EQl9IT1NUKTtcclxuLy8gZG90ZW52LmNvbmZpZyh7IHBhdGg6ICcuL2NvbmZpZy5lbnYnIH0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBkZXZlbG9wbWVudDoge1xyXG4gICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LkRCX1VTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTUyxcclxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxyXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcclxuICAgIGRpYWxlY3Q6ICdteXNxbCcsXHJcbiAgfSxcclxuICB0ZXN0OiB7XHJcbiAgICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuREJfVVNFUixcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTLFxyXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX05BTUUsXHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxyXG4gICAgZGlhbGVjdDogJ215c3FsJyxcclxuICAgIGxvZ2dpbmc6IGZhbHNlLFxyXG4gIH0sXHJcbiAgcHJvZHVjdGlvbjoge1xyXG4gICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LkRCX1VTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTUyxcclxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxyXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcclxuICAgIGRpYWxlY3Q6ICdteXNxbCcsXHJcbiAgICBkaWFsZWN0T3B0aW9uczoge1xyXG4gICAgICBzc2w6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XHJcbmNvbnN0IGJhc2VuYW1lID0gcGF0aC5iYXNlbmFtZShfX2ZpbGVuYW1lKTtcclxuY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JztcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZShfX2Rpcm5hbWUgKyAnLy4uL2NvbmZpZy9jb25maWcuanMnKVtlbnZdO1xyXG5jb25zdCBkYiA9IHt9O1xyXG5cclxuLyogQ3VzdG9tIGhhbmRsZXIgZm9yIHJlYWRpbmcgY3VycmVudCB3b3JraW5nIGRpcmVjdG9yeSAqL1xyXG5jb25zdCBtb2RlbHMgPSBwcm9jZXNzLmN3ZCgpICsgJy9kYi9tb2RlbHMvJyB8fCBfX2Rpcm5hbWU7XHJcblxyXG5sZXQgc2VxdWVsaXplO1xyXG5pZiAoY29uZmlnLnVzZV9lbnZfdmFyaWFibGUpIHtcclxuICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKHByb2Nlc3MuZW52W2NvbmZpZy51c2VfZW52X3ZhcmlhYmxlXSwgY29uZmlnKTtcclxufSBlbHNlIHtcclxuICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKFxyXG4gICAgY29uZmlnLmRhdGFiYXNlLFxyXG4gICAgY29uZmlnLnVzZXJuYW1lLFxyXG4gICAgY29uZmlnLnBhc3N3b3JkLFxyXG4gICAgY29uZmlnLFxyXG4gICk7XHJcbn1cclxuLyogZnMucmVhZGRpclN5bmMoX19kaXJuYW1lKSAqL1xyXG5mcy5yZWFkZGlyU3luYyhtb2RlbHMpXHJcbiAgLmZpbHRlcihmaWxlID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGZpbGUuaW5kZXhPZignLicpICE9PSAwICYmIGZpbGUgIT09IGJhc2VuYW1lICYmIGZpbGUuc2xpY2UoLTMpID09PSAnLmpzJ1xyXG4gICAgKTtcclxuICB9KVxyXG4gIC5mb3JFYWNoKGZpbGUgPT4ge1xyXG4gICAgLyogY29uc3QgbW9kZWwgPSBzZXF1ZWxpemVbXCJpbXBvcnRcIl0ocGF0aC5qb2luKF9fZGlybmFtZSwgZmlsZSkpOyAqL1xyXG4gICAgY29uc3QgbW9kZWwgPSBzZXF1ZWxpemVbJ2ltcG9ydCddKHBhdGguam9pbihtb2RlbHMsIGZpbGUpKTtcclxuICAgIGRiW21vZGVsLm5hbWVdID0gbW9kZWw7XHJcbiAgfSk7XHJcblxyXG5PYmplY3Qua2V5cyhkYikuZm9yRWFjaChtb2RlbE5hbWUgPT4ge1xyXG4gIGlmIChkYlttb2RlbE5hbWVdLmFzc29jaWF0ZSkge1xyXG4gICAgZGJbbW9kZWxOYW1lXS5hc3NvY2lhdGUoZGIpO1xyXG4gIH1cclxufSk7XHJcblxyXG5kYi5zZXF1ZWxpemUgPSBzZXF1ZWxpemU7XHJcbmRiLlNlcXVlbGl6ZSA9IFNlcXVlbGl6ZTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGI7XHJcbiIsImltcG9ydCBuZXh0Q29ubmVjdCBmcm9tICduZXh0LWNvbm5lY3QnO1xyXG5pbXBvcnQgeyB2ZXJpZnlUb2tlbiB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuY29uc3QgbWlkZGxld2FyZSA9IG5leHRDb25uZWN0KCk7XHJcblxyXG4vKiBTYW1wbGUgdXNpbmcgbWlkZGxld2FyZSAqL1xyXG4vKiBtaWRkbGV3YXJlLnVzZShkYXRhYmFzZSkudXNlKHNlc3Npb24pLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpLnVzZShwYXNzcG9ydC5zZXNzaW9uKCkpOyAqL1xyXG5cclxuLyogU2V0IHJlc3RyaWN0ZWQgcHVibGljIGFjY2VzcyAvIHB1dCBhbnkgYXBpIGFjY2VzcyB0aGF0IGlzIHJlc3RyaWN0ZWQgaW4gaGVyZSAqL1xyXG5jb25zdCByZXN0cmljdGVkID0gWycvYXBpL29yZ2FuaXphdGlvbi9bb3JnYW5pemF0aW9uLWlkXV0nLCAnL2FwaS9qb2IvW3NsdWddJ107XHJcblxyXG4vKlxyXG4gKiBAcGFyYW1zIHtyZXF1ZXN0LCByZXNwb25zZSwgY2FsbGJhY2t9IGRlZmF1bHQgUmVxdWVzdCBhbmQgUmVzcG9uc2VcclxuICogQHJldHVybiB7b2JqZWN0fSBvYmplY3QgaWYgdHJ1ZSwgcmVzcG9uc2UgbWVzc2FnZSBpZiBmYWxzZSBhbmQgY29udGludWVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IG1pZGRsZXdhcmUudXNlKGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gIGxldCBhdXRoSGVhZGVyID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbiB8fCAnJztcclxuICBsZXQgdXNlciA9IHt9O1xyXG5cclxuICBpZiAoIXJlc3RyaWN0ZWQuaW5jbHVkZXMocmVxLnVybCkgJiYgIWF1dGhIZWFkZXIpIHtcclxuICAgIHJldHVybiBuZXh0KCk7XHJcbiAgfVxyXG4gIGlmIChhdXRoSGVhZGVyKSB7XHJcbiAgICBsZXQgc2Vzc2lvbklEID0gYXV0aEhlYWRlci5zcGxpdCgnICcpWzFdO1xyXG4gICAgaWYgKHNlc3Npb25JRCkge1xyXG4gICAgICB1c2VyID0gdmVyaWZ5VG9rZW4oc2Vzc2lvbklEKTtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAvKiBDb3VsZCBwdXQgY2hlY2sgYWdhaW5zdCB1c2VycyB0YWJsZXMgaW4gZGF0YWJhc2UgIFVzZXIuZmluZCh7ZW1haWw6dXNlci5lbWFpbH0pICovXHJcbiAgICAgICAgcmVxLnVzZXIgPSB1c2VyO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDAxO1xyXG4gICAgICAgIHJldHVybiByZXMuc2VuZCh7XHJcbiAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXHJcbiAgICAgICAgICBlcnJvcjogJ0V4cGlyZWQnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXMuc3RhdHVzQ29kZSA9IDQwMTtcclxuICAgICAgcmV0dXJuIHJlcy5zZW5kKHtcclxuICAgICAgICBzdGF0dXM6ICdlcnJvcicsXHJcbiAgICAgICAgZXJyb3I6ICdXcm9uZyBUb2tlbicsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzQ29kZSA9IDQwMTtcclxuICAgIHJldHVybiByZXMuc2VuZCh7XHJcbiAgICAgIHN0YXR1czogJ2Vycm9yJyxcclxuICAgICAgZXJyb3I6ICdVbmF1dGhvcml6ZWQnLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBuZXh0KCk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBTRUNSRVRfS0VZID0gcHJvY2Vzcy5lbnYuSldUX0tFWTtcclxuXHJcbi8qXHJcbiAqIEBwYXJhbXMge2p3dFRva2VufSBleHRyYWN0ZWQgZnJvbSBjb29raWVzXHJcbiAqIEByZXR1cm4ge29iamVjdH0gb2JqZWN0IG9mIGV4dHJhY3RlZCB0b2tlblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRva2VuKGp3dFRva2VuKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBqd3QudmVyaWZ5KGp3dFRva2VuLCBTRUNSRVRfS0VZKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZygnZTonLCBlKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuLypcclxuICogQHBhcmFtcyB7cmVxdWVzdH0gZXh0cmFjdGVkIGZyb20gcmVxdWVzdCByZXNwb25zZVxyXG4gKiBAcmV0dXJuIHtvYmplY3R9IG9iamVjdCBvZiBwYXJzZSBqd3QgY29va2llIGRlY29kZSBvYmplY3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBcHBDb29raWVzKHJlcSkge1xyXG4gIGNvbnN0IHBhcnNlZEl0ZW1zID0ge307XHJcbiAgaWYgKHJlcS5oZWFkZXJzLmNvb2tpZSkge1xyXG4gICAgY29uc3QgY29va2llc0l0ZW1zID0gcmVxLmhlYWRlcnMuY29va2llLnNwbGl0KCc7ICcpO1xyXG4gICAgY29va2llc0l0ZW1zLmZvckVhY2goY29va2llcyA9PiB7XHJcbiAgICAgIGNvbnN0IHBhcnNlZEl0ZW0gPSBjb29raWVzLnNwbGl0KCc9Jyk7XHJcbiAgICAgIHBhcnNlZEl0ZW1zW3BhcnNlZEl0ZW1bMF1dID0gZGVjb2RlVVJJKHBhcnNlZEl0ZW1bMV0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBwYXJzZWRJdGVtcztcclxufVxyXG5cclxuLypcclxuICogQHBhcmFtcyB7cmVxdWVzdH0gZXh0cmFjdGVkIGZyb20gcmVxdWVzdCByZXNwb25zZSwge3NldExvY2FsaG9zdH0geW91ciBsb2NhbGhvc3QgYWRkcmVzc1xyXG4gKiBAcmV0dXJuIHtvYmplY3R9IG9iamVjdHMgb2YgcHJvdG9jb2wsIGhvc3QgYW5kIG9yaWdpblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFic29sdXRlVXJsKHJlcSwgc2V0TG9jYWxob3N0KSB7XHJcbiAgdmFyIHByb3RvY29sID0gJ2h0dHBzOic7XHJcbiAgdmFyIGhvc3QgPSByZXFcclxuICAgID8gcmVxLmhlYWRlcnNbJ3gtZm9yd2FyZGVkLWhvc3QnXSB8fCByZXEuaGVhZGVyc1snaG9zdCddXHJcbiAgICA6IHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xyXG4gIGlmIChob3N0LmluZGV4T2YoJ2xvY2FsaG9zdCcpID4gLTEpIHtcclxuICAgIGlmIChzZXRMb2NhbGhvc3QpIGhvc3QgPSBzZXRMb2NhbGhvc3Q7XHJcbiAgICBwcm90b2NvbCA9ICdodHRwOic7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm90b2NvbDogcHJvdG9jb2wsXHJcbiAgICBob3N0OiBob3N0LFxyXG4gICAgb3JpZ2luOiBwcm90b2NvbCArICcvLycgKyBob3N0LFxyXG4gICAgdXJsOiByZXEsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZERheXMoZGF0ZSwgZGF5cykge1xyXG4gIHZhciByZXN1bHQgPSBuZXcgRGF0ZShkYXRlKTtcclxuICByZXN1bHQuc2V0RGF0ZShyZXN1bHQuZ2V0RGF0ZSgpICsgZGF5cyk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy9ZWVlZLU1NLUREXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlV2l0aG91dFRpbWUoZGF0ZSkge1xyXG4gIHZhciBkYXRlU3RyaW5nID1cclxuICAgIGRhdGUuZ2V0VVRDRnVsbFllYXIoKSArIFwiLVwiICtcclxuICAgIChcIjBcIiArIChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSkuc2xpY2UoLTIpICsgXCItXCIgK1xyXG4gICAgKFwiMFwiICsgZGF0ZS5nZXRVVENEYXRlKCkpLnNsaWNlKC0yKSArIFwiIFwiXHJcbiAgcmV0dXJuIGRhdGVTdHJpbmc7XHJcbn1cclxuLy8gY29uc3QgYXBpID0gcHJvY2Vzcy5lbnYuUFVCTElDX1VSTFxyXG5cclxuZXhwb3J0IGNvbnN0IGFwaUluc3RhbmNlID0gKCkgPT4ge1xyXG4gIC8vIGNvbnN0IGF1dGhvcml6YXRpb24gPSBzdG9yZS5nZXRTdGF0ZSgpLnVzZXJTdGF0ZS50b2tlbiA/IHN0b3JlLmdldFN0YXRlKCkudXNlclN0YXRlLnRva2VuIDogbnVsbFxyXG5cclxuICAvLyBjb25zdCBoZWFkZXJzID0ge1xyXG4gIC8vIFx0J3gtYXBpLXRva2VuJzogYXV0aG9yaXphdGlvbiA/IGF1dGhvcml6YXRpb24gOiAnJyxcclxuICAvLyB9XHJcblxyXG4gIHJldHVybiBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogJy9hcGknLFxyXG4gICAgLy8gaGVhZGVycyxcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tJc0xvZ2luID0gKCkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKFwiY2hlY2tJc0xvZ2luXCIpXHJcbiAgdmFyIHRva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJykgLy8gPT4gJ3ZhbHVlJ1xyXG5cclxuICBpZiAoIXRva2VuKSB7XHJcbiAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8vIGNvbnNvbGUubG9nKHBhcnNlSnd0KHRva2VuKSlcclxuICByZXR1cm4gcGFyc2VKd3QodG9rZW4pXHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VKd3QodG9rZW4pIHtcclxuXHJcbiAgdmFyIGlzRXhwaXJlZCA9IGZhbHNlO1xyXG4gIC8vIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJyk7XHJcblxyXG5cclxuXHJcbiAgdmFyIGJhc2U2NFVybCA9IHRva2VuLnNwbGl0KCcuJylbMV07XHJcbiAgdmFyIGJhc2U2NCA9IGJhc2U2NFVybC5yZXBsYWNlKC8tL2csICcrJykucmVwbGFjZSgvXy9nLCAnLycpO1xyXG4gIHZhciBqc29uUGF5bG9hZCA9IGRlY29kZVVSSUNvbXBvbmVudChhdG9iKGJhc2U2NCkuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoYykge1xyXG4gICAgcmV0dXJuICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xyXG4gIH0pLmpvaW4oJycpKTtcclxuICB2YXIgX2pzb25QYXlsb2FkID0gSlNPTi5wYXJzZShqc29uUGF5bG9hZClcclxuICB2YXIgZGF0ZU5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgLy8gY29uc29sZS5sb2cocGFyc2VJbnQoX2pzb25QYXlsb2FkLmV4cCkpXHJcbiAgLy8gY29uc29sZS5sb2cocGFyc2VJbnQoKGRhdGVOb3cuZ2V0VGltZSgpKS50b1N0cmluZygpLnN1YnN0cmluZygwLDEwKSkpXHJcbiAgaWYgKHBhcnNlSW50KF9qc29uUGF5bG9hZC5leHApIDwgcGFyc2VJbnQoKGRhdGVOb3cuZ2V0VGltZSgpKS50b1N0cmluZygpLnN1YnN0cmluZygwLCAxMCkpKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRydWVcIilcclxuXHJcbiAgICBpc0V4cGlyZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzRXhwaXJlZCkge1xyXG4gICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG4gIHJldHVybiBfanNvblBheWxvYWQ7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUoZGF0ZSkge1xyXG4gIHRyeSB7XHJcbiAgICB2YXIgZGF0ZVNwbGl0ID0gZGF0ZS50b1N0cmluZygpLnNwbGl0KFwiVFwiKTtcclxuICAgIHJldHVybiBkYXRlU3BsaXRbMF07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyV2l0aFRpbWUoZGF0ZSkge1xyXG4gIHRyeSB7XHJcbiAgICAvLzowNy4wMDBaXHJcbiAgICAvL1NhbXBsZVRleHQucmVwbGFjZShcIkRldmVsb3BlclwiLCBcIkFwcCBCdWlsZGVyXCIpO1xyXG4gICAgdmFyIGRhdGVTcGxpdCA9IGRhdGUudG9TdHJpbmcoKS5zcGxpdChcIlRcIik7XHJcbiAgICByZXR1cm4gZGF0ZVNwbGl0WzBdICsgXCIgXCIgKyBkYXRlU3BsaXRbMV0ucmVwbGFjZShcIi4wMDBaXCIsIFwiXCIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydERhdGV0b1RoYWlEYXRlKGRhdGUpIHtcclxuICB2YXIgX2RhdGUgPSBjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lKGRhdGUpXHJcbiAgdmFyIGRhdGVTcGxpdCA9IF9kYXRlLnRvU3RyaW5nKCkuc3BsaXQoXCItXCIpO1xyXG4gIC8vIDIwMjEtMDktMTZcclxuICByZXR1cm4gZGF0ZVNwbGl0WzJdICsgXCIgXCIgKyBjb252ZXJ0TW9udGh0b1RoYWlNb250aChkYXRlU3BsaXRbMV0pICsgXCIgXCIgKyBjb252ZXJ0WWVhcnRvVGhhaVllYXIoZGF0ZVNwbGl0WzBdKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFllYXJ0b1RoYWlZZWFyKHllYXIpIHtcclxuICByZXR1cm4gcGFyc2VJbnQoeWVhcikgKyA1NDNcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRNb250aHRvVGhhaU1vbnRoKG1vbnRoKSB7XHJcbiAgc3dpdGNoIChtb250aCkge1xyXG4gICAgY2FzZSBcIjAxXCI6XHJcbiAgICAgIHJldHVybiBcIuC4oeC4geC4o+C4suC4hOC4oVwiXHJcbiAgICBjYXNlIFwiMDJcIjpcclxuICAgICAgcmV0dXJuIFwi4LiB4Li44Lih4Lig4Liy4Lie4Lix4LiZ4LiY4LmMXCJcclxuICAgIGNhc2UgXCIwM1wiOlxyXG4gICAgICByZXR1cm4gXCLguKHguLXguJnguLLguITguKFcIlxyXG4gICAgY2FzZSBcIjA0XCI6XHJcbiAgICAgIHJldHVybiBcIuC5gOC4oeC4qeC4suC4ouC4mVwiXHJcbiAgICBjYXNlIFwiMDVcIjpcclxuICAgICAgcmV0dXJuIFwi4Lie4Lik4Lip4Lig4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIwNlwiOlxyXG4gICAgICByZXR1cm4gXCLguKHguLTguJbguLjguJnguLLguKLguJlcIlxyXG4gICAgY2FzZSBcIjA3XCI6XHJcbiAgICAgIHJldHVybiBcIuC4geC4o+C4geC4juC4suC4hOC4oVwiXHJcbiAgICBjYXNlIFwiMDhcIjpcclxuICAgICAgcmV0dXJuIFwi4Liq4Li04LiH4Lir4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIwOVwiOlxyXG4gICAgICByZXR1cm4gXCLguIHguLHguJnguKLguLLguKLguJlcIlxyXG4gICAgY2FzZSBcIjEwXCI6XHJcbiAgICAgIHJldHVybiBcIuC4leC4uOC4peC4suC4hOC4oVwiXHJcbiAgICBjYXNlIFwiMTFcIjpcclxuICAgICAgcmV0dXJuIFwi4Lie4Lik4Lio4LiI4Li04LiB4Liy4Lii4LiZXCJcclxuICAgIGNhc2UgXCIxMlwiOlxyXG4gICAgICByZXR1cm4gXCLguJjguLHguJnguKfguLLguITguKFcIlxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFwiTkFOXCJcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RGF0ZXRvQWRkREIoZGF0ZSkge1xyXG4gIHZhciBkYXRlU3BsaXQgPSBkYXRlLnNwbGl0KFwiIFwiKTtcclxuICByZXR1cm4gZGF0ZVNwbGl0WzBdICsgXCJUXCIgKyBkYXRlU3BsaXRbMV0gKyBcIiswMDowMFwiO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SVBBZGRyZXNzKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9nZW9sb2NhdGlvbi1kYi5jb20vanNvbi8nKVxyXG4gIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAvLyByZXR1cm4gcmVzLmRhdGFcclxuICByZXR1cm4gXCJjb3VudHJ5X2NvZGU6XCIgKyByZXMuZGF0YS5jb3VudHJ5X2NvZGUgKyBcIixjb3VudHJ5X25hbWU6XCIgKyByZXMuZGF0YS5jb3VudHJ5X25hbWUgKyBcIixjaXR5OlwiICsgcmVzLmRhdGEuY2l0eSArIFwiLHBvc3RhbDpcIiArIHJlcy5kYXRhLnBvc3RhbFxyXG4gICAgKyBcIixsYXRpdHVkZTpcIiArIHJlcy5kYXRhLmxhdGl0dWRlICsgXCIsbG9uZ2l0dWRlOlwiICsgcmVzLmRhdGEubG9uZ2l0dWRlICsgXCIsSVB2NDpcIiArIHJlcy5kYXRhLklQdjQgKyBcIixzdGF0ZTpcIiArIHJlcy5kYXRhLnN0YXRlXHJcbiAgLy8gc2V0SVAocmVzLmRhdGEuSVB2NClcclxuICAvLyByZXR1cm5cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYnl0ZXNUb1NpemUoYnl0ZXMpIHtcclxuICB2YXIgc2l6ZXMgPSBbJ0J5dGVzJywgJ0tCJywgJ01CJywgJ0dCJywgJ1RCJ107XHJcbiAgaWYgKGJ5dGVzID09IDApIHJldHVybiAnMCBCeXRlJztcclxuICB2YXIgaSA9IHBhcnNlSW50KE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2coMTAyNCkpKTtcclxuICByZXR1cm4gTWF0aC5yb3VuZChieXRlcyAvIE1hdGgucG93KDEwMjQsIGkpLCAyKSArICcgJyArIHNpemVzW2ldO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ5dGVzVG9NQihieXRlcykge1xyXG4gIHJldHVybiBOdW1iZXIucGFyc2VGbG9hdChieXRlcyAvICgxMDI0ICogMTAyNCkpLnRvRml4ZWQoMik7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0ZWRpZmYoc3RhcnREYXRlKSB7XHJcblxyXG4gIGNvbnN0IHRpbWVFbmQgPSBtb21lbnQoKTtcclxuICBjb25zdCBuZXdTdGFydERhdGUgPSBuZXcgRGF0ZShzdGFydERhdGUpO1xyXG4gIGNvbnN0IG5ld0VuZERhdGUgPSBuZXcgRGF0ZSh0aW1lRW5kKTtcclxuICBjb25zdCBvbmVfZGF5ID0gMTAwMCAqIDYwICogNjAgKiAyNDtcclxuICBsZXQgcmVzdWx0XHJcbiAgcmVzdWx0ID0gTWF0aC5jZWlsKChuZXdTdGFydERhdGUuZ2V0VGltZSgpIC0gbmV3RW5kRGF0ZS5nZXRUaW1lKCkpIC8gKG9uZV9kYXkpKVxyXG4gIGNvbnNvbGUubG9nKCdkYXRlIENvbnZlcnRlciByZXN1bHQnLCByZXN1bHQpXHJcblxyXG5cclxuICByZXR1cm4gcmVzdWx0IC0gMTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50RGF0ZShzZXBhcmF0b3IgPSAnJykge1xyXG5cclxuICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKClcclxuICBsZXQgZGF0ZSA9IG5ld0RhdGUuZ2V0RGF0ZSgpO1xyXG4gIGxldCBtb250aCA9IG5ld0RhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgbGV0IHllYXIgPSBuZXdEYXRlLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gIHJldHVybiBgJHt5ZWFyfSR7c2VwYXJhdG9yfSR7bW9udGggPCAxMCA/IGAwJHttb250aH1gIDogYCR7bW9udGh9YH0ke3NlcGFyYXRvcn0ke2RhdGV9YFxyXG59XHJcbiIsImltcG9ydCBuZXh0Q29ubmVjdCBmcm9tICduZXh0LWNvbm5lY3QnO1xyXG5jb25zdCBtb2RlbHMgPSByZXF1aXJlKCcuLi8uLi8uLi9kYi9tb2RlbHMvaW5kZXgnKTtcclxuaW1wb3J0IG1pZGRsZXdhcmUgZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS9hdXRoJztcclxuaW1wb3J0IHsgYWJzb2x1dGVVcmwsIGNoZWNrSXNMb2dpbiwgZ2V0SVBBZGRyZXNzLCBjb252ZXJ0RGF0ZXRvQWRkREIgfSBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL3V0aWxzJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5jb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcclxuY29uc3QgT3AgPSBTZXF1ZWxpemUuT3A7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gbmV4dENvbm5lY3QoKVxyXG4gIC8vIE1pZGRsZXdhcmVcclxuICAudXNlKG1pZGRsZXdhcmUpXHJcbiAgLy8gR2V0IG1ldGhvZFxyXG4gIC5nZXQoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblxyXG5cclxuICB9KVxyXG4gIC5wdXQoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGJvZHkgfSA9IHJlcTtcclxuICAgIGNvbnN0IHsgc2x1ZyB9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgY29uc3QgbWVudV9pZCA9IHNsdWc7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG1lbnVfdGl0bGUsXHJcbiAgICAgIG1lbnVfZGV0YWlsLFxyXG4gICAgICBoYXZlX3N1YixcclxuICAgICAgaXNfc2hvdyxcclxuICAgICAgaXNfcHJpbWFyeV9tZW51LFxyXG4gICAgICBpc19wYXR0ZXJuX21lbnUsXHJcbiAgICAgIHBhdHRlcm5fbWVudSxcclxuICAgIH0gPSBib2R5O1xyXG4gICAgLy9TYW1wbGVUZXh0LnJlcGxhY2UoXCJEZXZlbG9wZXJcIiwgXCJBcHAgQnVpbGRlclwiKTtcclxuICAgIGNvbnN0IGRhdGFNZW51ID0ge1xyXG4gICAgICBtZW51X3RpdGxlOiBtZW51X3RpdGxlLFxyXG4gICAgICBtZW51X2RldGFpbDogbWVudV9kZXRhaWwgPyBtZW51X2RldGFpbCA6IFwiXCIsXHJcbiAgICAgIGhhdmVfc3ViOiBoYXZlX3N1YiAsXHJcbiAgICAgIGlzX3Nob3c6IGlzX3Nob3csXHJcbiAgICAgIGlzX3ByaW1hcnlfbWVudTogaXNfcHJpbWFyeV9tZW51LFxyXG4gICAgICBpc19wYXR0ZXJuX21lbnU6IGlzX3BhdHRlcm5fbWVudSxcclxuICAgICAgcGF0dGVybl9tZW51OiBwYXR0ZXJuX21lbnUsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChcclxuICAgICAgbWVudV9pZCA9PSB1bmRlZmluZWQgfHxcclxuICAgICAgbWVudV90aXRsZSA9PSB1bmRlZmluZWQgfHwgbWVudV9kZXRhaWwgPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgIGhhdmVfc3ViID09IHVuZGVmaW5lZCB8fCBpc19zaG93ID09IHVuZGVmaW5lZCB8fFxyXG4gICAgICBpc19wcmltYXJ5X21lbnUgPT0gdW5kZWZpbmVkIHx8IGlzX3BhdHRlcm5fbWVudSA9PSB1bmRlZmluZWQgfHxcclxuICAgICAgcGF0dGVybl9tZW51ID09IHVuZGVmaW5lZCBcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIHN0YXR1czogMjAxLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdkYXRhIGluY29ycmVjdCcsXHJcbiAgICAgICAgbWVudV9pZDogbWVudV9pZCxcclxuICAgICAgICBkYXRhOiBkYXRhTWVudVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgbWVudURhdGFSZXN1bHQgPSBhd2FpdCBtb2RlbHMuTWVudS51cGRhdGUoXHJcbiAgICAgIGRhdGFNZW51LCB7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgbWVudV9pZDogbWVudV9pZFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgIHN0YXR1czogMjAwLFxyXG4gICAgICBtZXNzYWdlOiBcInN1Y2Nlc3NcIixcclxuICAgICAgLy8gb3JnYW5pemF0aW9uOiBvcmdhbml6YXRpb24gPyBvcmdhbml6YXRpb24gOiBbXVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYXdhaXQgVXNlci51cGRhdGUoeyBsYXN0TmFtZTogXCJEb2VcIiB9LCB7XHJcbiAgICAvLyAgIHdoZXJlOiB7XHJcbiAgICAvLyAgICAgbGFzdE5hbWU6IG51bGxcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSk7XHJcblxyXG4gIH0pXHJcbiAgLmRlbGV0ZShhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgYm9keSB9ID0gcmVxO1xyXG4gICAgY29uc3QgeyBzbHVnIH0gPSByZXEucXVlcnk7XHJcbiAgICBjb25zdCBtZW51X2lkID0gc2x1ZztcclxuICAgIGlmIChtZW51X2lkID09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIHN0YXR1czogMjAxLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdkYXRhIGluY29ycmVjdCcsXHJcbiAgICAgICAgbWVudV9pZDogbWVudV9pZCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YXIgaXAgPSBhd2FpdCBnZXRJUEFkZHJlc3MoKVxyXG4gICAgdmFyIGN1cnJlbnREYXRlID0gbW9tZW50KCkuZm9ybWF0KClcclxuICAgIC8vIGRhdGFNZW51LmlwID0gaXBcclxuICAgIC8vIGRhdGFNZW51LmlzX2RlbGV0ZWQgPSAwXHJcbiAgICAvLyBkYXRhTWVudS5kYXRlX2NyZWF0ZWQgPSBjdXJyZW50RGF0ZS5yZXBsYWNlKFwiKzA3OjAwXCIsIFwiKzAwOjAwXCIpXHJcbiAgICAvLyBkYXRhTWVudS5kYXRlX3VwZGF0ZWQgPSBjdXJyZW50RGF0ZS5yZXBsYWNlKFwiKzA3OjAwXCIsIFwiKzAwOjAwXCIpXHJcbiAgICBjb25zdCBkYXRhSW5mb3JtYXRpb24gPSB7XHJcbiAgICAgIGlzX2RlbGV0ZWQ6IDEsXHJcbiAgICAgIGlwOiBpcCxcclxuICAgICAgZGF0ZV91cGRhdGVkOiBjdXJyZW50RGF0ZS5yZXBsYWNlKFwiKzA3OjAwXCIsIFwiKzAwOjAwXCIpLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBfbWVudSA9IGF3YWl0IG1vZGVscy5NZW51LnVwZGF0ZShkYXRhSW5mb3JtYXRpb24sIHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBtZW51X2lkOiBtZW51X2lkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgIG1lc3NhZ2U6ICdzdWNjZXNzJyxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29ubmVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9