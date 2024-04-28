module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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

/***/ "./pages/api/admin/management/add-activities.js":
/*!******************************************************!*\
  !*** ./pages/api/admin/management/add-activities.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../middleware/auth */ "./middleware/auth.js");
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../middleware/utils */ "./middleware/utils.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);


const models = __webpack_require__(/*! ../../../../db/models/index */ "./db/models/index.js");




const bcrypt = __webpack_require__(/*! bcryptjs */ "bcryptjs");

const salt = bcrypt.genSaltSync(10);

const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()() // Middleware
.use(_middleware_auth__WEBPACK_IMPORTED_MODULE_1__["default"]) // Get method
.get(async (req, res) => {
  return res.status(400).json({
    status: 400,
    message: 'deny permission!!'
  });
}) // Post method
.post(async (req, res) => {
  const {
    body
  } = req;
  const {
    slug
  } = req.query;
  const {
    organization_id,
    activities_date,
    activities_title,
    activities_detail,
    activities_image,
    activities_keyword,
    is_slide,
    status_active
  } = body; // const userId = slug;

  const dataUser = {
    "organization_id": organization_id,
    "activities_date": activities_date.replace("+07:00", "+00:00"),
    "activities_title": activities_title,
    "activities_detail": activities_detail,
    "activities_image": activities_image,
    "activities_keyword": activities_keyword ? activities_keyword : "",
    "is_slide": is_slide,
    "status_active": status_active
  };
  console.log(dataUser);

  if (organization_id == undefined || activities_date == undefined || activities_title == undefined || activities_detail == undefined || activities_image == undefined || is_slide == undefined || status_active == undefined) {
    return res.status(200).json({
      status: 201,
      message: 'data incorrect',
      dataUser: dataUser
    });
  }

  var ip = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["getIPAddress"])();
  var currentDate = moment__WEBPACK_IMPORTED_MODULE_3___default()().format();
  dataUser.ip = ip;
  dataUser.is_deleted = 0;
  dataUser.date_created = currentDate.replace("+07:00", "+00:00");
  dataUser.date_update = currentDate.replace("+07:00", "+00:00");
  const newAddactivities = await models.activities.create(dataUser);

  if (newAddactivities == null) {
    return res.status(500).json({
      status: 500,
      message: 'Internal error'
    });
  }

  return res.status(200).json({
    status: 200,
    message: 'Insert completed'
  });
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ 15:
/*!************************************************************!*\
  !*** multi ./pages/api/admin/management/add-activities.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\govermentlt\pages\api\admin\management\add-activities.js */"./pages/api/admin/management/add-activities.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGIvY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9kYi9tb2RlbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9hdXRoLmpzIiwid2VicGFjazovLy8uL21pZGRsZXdhcmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2FkbWluL21hbmFnZW1lbnQvYWRkLWFjdGl2aXRpZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvdGVudlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1jb25uZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VxdWVsaXplXCIiXSwibmFtZXMiOlsiZG90ZW52IiwicmVxdWlyZSIsInJlc3VsdCIsImNvbmZpZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZXZlbG9wbWVudCIsInVzZXJuYW1lIiwicHJvY2VzcyIsImVudiIsIkRCX1VTRVIiLCJwYXNzd29yZCIsIkRCX1BBU1MiLCJkYXRhYmFzZSIsIkRCX05BTUUiLCJob3N0IiwiREJfSE9TVCIsImRpYWxlY3QiLCJ0ZXN0IiwibG9nZ2luZyIsInByb2R1Y3Rpb24iLCJkaWFsZWN0T3B0aW9ucyIsInNzbCIsImZzIiwicGF0aCIsIlNlcXVlbGl6ZSIsImJhc2VuYW1lIiwiX19maWxlbmFtZSIsIl9fZGlybmFtZSIsImRiIiwibW9kZWxzIiwiY3dkIiwic2VxdWVsaXplIiwidXNlX2Vudl92YXJpYWJsZSIsInJlYWRkaXJTeW5jIiwiZmlsdGVyIiwiZmlsZSIsImluZGV4T2YiLCJzbGljZSIsImZvckVhY2giLCJtb2RlbCIsImpvaW4iLCJuYW1lIiwiT2JqZWN0Iiwia2V5cyIsIm1vZGVsTmFtZSIsImFzc29jaWF0ZSIsIm1pZGRsZXdhcmUiLCJuZXh0Q29ubmVjdCIsInJlc3RyaWN0ZWQiLCJ1c2UiLCJyZXEiLCJyZXMiLCJuZXh0IiwiYXV0aEhlYWRlciIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwidXNlciIsImluY2x1ZGVzIiwidXJsIiwic2Vzc2lvbklEIiwic3BsaXQiLCJ2ZXJpZnlUb2tlbiIsInN0YXR1c0NvZGUiLCJzZW5kIiwic3RhdHVzIiwiZXJyb3IiLCJTRUNSRVRfS0VZIiwiSldUX0tFWSIsImp3dFRva2VuIiwiand0IiwidmVyaWZ5IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRBcHBDb29raWVzIiwicGFyc2VkSXRlbXMiLCJjb29raWUiLCJjb29raWVzSXRlbXMiLCJjb29raWVzIiwicGFyc2VkSXRlbSIsImRlY29kZVVSSSIsImFic29sdXRlVXJsIiwic2V0TG9jYWxob3N0IiwicHJvdG9jb2wiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsImFkZERheXMiLCJkYXRlIiwiZGF5cyIsIkRhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImZvcm1hdERhdGVXaXRob3V0VGltZSIsImRhdGVTdHJpbmciLCJnZXRVVENGdWxsWWVhciIsImdldFVUQ01vbnRoIiwiZ2V0VVRDRGF0ZSIsImFwaUluc3RhbmNlIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiY2hlY2tJc0xvZ2luIiwidG9rZW4iLCJDb29raWVzIiwiZ2V0IiwiUm91dGVyIiwicHVzaCIsInBhcnNlSnd0IiwiaXNFeHBpcmVkIiwiYmFzZTY0VXJsIiwiYmFzZTY0IiwicmVwbGFjZSIsImpzb25QYXlsb2FkIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiYXRvYiIsIm1hcCIsImMiLCJjaGFyQ29kZUF0IiwidG9TdHJpbmciLCJfanNvblBheWxvYWQiLCJKU09OIiwicGFyc2UiLCJkYXRlTm93IiwicGFyc2VJbnQiLCJleHAiLCJnZXRUaW1lIiwic3Vic3RyaW5nIiwiY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZSIsImRhdGVTcGxpdCIsImNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJXaXRoVGltZSIsImNvbnZlcnREYXRldG9UaGFpRGF0ZSIsIl9kYXRlIiwiY29udmVydE1vbnRodG9UaGFpTW9udGgiLCJjb252ZXJ0WWVhcnRvVGhhaVllYXIiLCJ5ZWFyIiwibW9udGgiLCJjb252ZXJ0RGF0ZXRvQWRkREIiLCJnZXRJUEFkZHJlc3MiLCJkYXRhIiwiY291bnRyeV9jb2RlIiwiY291bnRyeV9uYW1lIiwiY2l0eSIsInBvc3RhbCIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiSVB2NCIsInN0YXRlIiwiYnl0ZXNUb1NpemUiLCJieXRlcyIsInNpemVzIiwiaSIsIk1hdGgiLCJmbG9vciIsInJvdW5kIiwicG93IiwiYnl0ZXNUb01CIiwiTnVtYmVyIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJnZXREYXRlZGlmZiIsInN0YXJ0RGF0ZSIsInRpbWVFbmQiLCJtb21lbnQiLCJuZXdTdGFydERhdGUiLCJuZXdFbmREYXRlIiwib25lX2RheSIsImNlaWwiLCJnZXRDdXJyZW50RGF0ZSIsInNlcGFyYXRvciIsIm5ld0RhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiYmNyeXB0Iiwic2FsdCIsImdlblNhbHRTeW5jIiwiaGFuZGxlciIsImpzb24iLCJtZXNzYWdlIiwicG9zdCIsImJvZHkiLCJzbHVnIiwicXVlcnkiLCJvcmdhbml6YXRpb25faWQiLCJhY3Rpdml0aWVzX2RhdGUiLCJhY3Rpdml0aWVzX3RpdGxlIiwiYWN0aXZpdGllc19kZXRhaWwiLCJhY3Rpdml0aWVzX2ltYWdlIiwiYWN0aXZpdGllc19rZXl3b3JkIiwiaXNfc2xpZGUiLCJzdGF0dXNfYWN0aXZlIiwiZGF0YVVzZXIiLCJ1bmRlZmluZWQiLCJpcCIsImN1cnJlbnREYXRlIiwiZm9ybWF0IiwiaXNfZGVsZXRlZCIsImRhdGVfY3JlYXRlZCIsImRhdGVfdXBkYXRlIiwibmV3QWRkYWN0aXZpdGllcyIsImFjdGl2aXRpZXMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RmE7O0FBQ2IsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHNCQUFELENBQXRCOztBQUNBLE1BQU1DLE1BQU0sR0FBR0YsTUFBTSxDQUFDRyxNQUFQLEVBQWYsQyxDQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmQyxh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TUFBSixDQUFXLEdBQVgsRUFBZ0JpSCxJQUFoQixDQUFxQjtBQUMxQmpILFlBQU0sRUFBRSxHQURrQjtBQUUxQmtILGFBQU8sRUFBRTtBQUZpQixLQUFyQixDQUFQO0FBSUQ7O0FBRUQsU0FBTy9ILEdBQUcsQ0FBQ2EsTUFBSixDQUFXLEdBQVgsRUFBZ0JpSCxJQUFoQixDQUFxQjtBQUMxQmpILFVBQU0sRUFBRSxHQURrQjtBQUUxQmtILFdBQU8sRUFBRTtBQUZpQixHQUFyQixDQUFQO0FBSUQsQ0F2RGEsQ0FBaEI7QUF5RGVGLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHNDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhcGlcXGFkbWluXFxtYW5hZ2VtZW50XFxhZGQtYWN0aXZpdGllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNSk7XG4iLCIndXNlIHN0cmljdCc7XHJcbmNvbnN0IGRvdGVudiA9IHJlcXVpcmUoXCJkb3RlbnZcIilcclxuY29uc3QgcmVzdWx0ID0gZG90ZW52LmNvbmZpZygpXHJcblxyXG4vLyBpZiAocmVzdWx0LmVycm9yKSB7XHJcbi8vICAgdGhyb3cgcmVzdWx0LmVycm9yXHJcbi8vIH1cclxuXHJcbi8vIGNvbnNvbGUubG9nKHJlc3VsdC5wYXJzZWQpXHJcblxyXG4vLyBkb3RlbnYuY29uZmlnKHsgcGF0aDogX19kaXJuYW1lICsgJy5lbnYnIH0pO1xyXG4vLyBjb25zb2xlLmxvZyhcInByb2Nlc3MuZW52LkRCX1VTRVJcIik7XHJcbi8vIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LkRCX0hPU1QpO1xyXG4vLyBkb3RlbnYuY29uZmlnKHsgcGF0aDogJy4vY29uZmlnLmVudicgfSk7XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGRldmVsb3BtZW50OiB7XHJcbiAgICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuREJfVVNFUixcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTLFxyXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX05BTUUsXHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxyXG4gICAgZGlhbGVjdDogJ215c3FsJyxcclxuICB9LFxyXG4gIHRlc3Q6IHtcclxuICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxyXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1MsXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSxcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXHJcbiAgICBkaWFsZWN0OiAnbXlzcWwnLFxyXG4gICAgbG9nZ2luZzogZmFsc2UsXHJcbiAgfSxcclxuICBwcm9kdWN0aW9uOiB7XHJcbiAgICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuREJfVVNFUixcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTLFxyXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX05BTUUsXHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxyXG4gICAgZGlhbGVjdDogJ215c3FsJyxcclxuICAgIGRpYWxlY3RPcHRpb25zOiB7XHJcbiAgICAgIHNzbDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xyXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG5jb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcclxuY29uc3QgYmFzZW5hbWUgPSBwYXRoLmJhc2VuYW1lKF9fZmlsZW5hbWUpO1xyXG5jb25zdCBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnO1xyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKF9fZGlybmFtZSArICcvLi4vY29uZmlnL2NvbmZpZy5qcycpW2Vudl07XHJcbmNvbnN0IGRiID0ge307XHJcblxyXG4vKiBDdXN0b20gaGFuZGxlciBmb3IgcmVhZGluZyBjdXJyZW50IHdvcmtpbmcgZGlyZWN0b3J5ICovXHJcbmNvbnN0IG1vZGVscyA9IHByb2Nlc3MuY3dkKCkgKyAnL2RiL21vZGVscy8nIHx8IF9fZGlybmFtZTtcclxuXHJcbmxldCBzZXF1ZWxpemU7XHJcbmlmIChjb25maWcudXNlX2Vudl92YXJpYWJsZSkge1xyXG4gIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUocHJvY2Vzcy5lbnZbY29uZmlnLnVzZV9lbnZfdmFyaWFibGVdLCBjb25maWcpO1xyXG59IGVsc2Uge1xyXG4gIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoXHJcbiAgICBjb25maWcuZGF0YWJhc2UsXHJcbiAgICBjb25maWcudXNlcm5hbWUsXHJcbiAgICBjb25maWcucGFzc3dvcmQsXHJcbiAgICBjb25maWcsXHJcbiAgKTtcclxufVxyXG4vKiBmcy5yZWFkZGlyU3luYyhfX2Rpcm5hbWUpICovXHJcbmZzLnJlYWRkaXJTeW5jKG1vZGVscylcclxuICAuZmlsdGVyKGZpbGUgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgZmlsZS5pbmRleE9mKCcuJykgIT09IDAgJiYgZmlsZSAhPT0gYmFzZW5hbWUgJiYgZmlsZS5zbGljZSgtMykgPT09ICcuanMnXHJcbiAgICApO1xyXG4gIH0pXHJcbiAgLmZvckVhY2goZmlsZSA9PiB7XHJcbiAgICAvKiBjb25zdCBtb2RlbCA9IHNlcXVlbGl6ZVtcImltcG9ydFwiXShwYXRoLmpvaW4oX19kaXJuYW1lLCBmaWxlKSk7ICovXHJcbiAgICBjb25zdCBtb2RlbCA9IHNlcXVlbGl6ZVsnaW1wb3J0J10ocGF0aC5qb2luKG1vZGVscywgZmlsZSkpO1xyXG4gICAgZGJbbW9kZWwubmFtZV0gPSBtb2RlbDtcclxuICB9KTtcclxuXHJcbk9iamVjdC5rZXlzKGRiKS5mb3JFYWNoKG1vZGVsTmFtZSA9PiB7XHJcbiAgaWYgKGRiW21vZGVsTmFtZV0uYXNzb2NpYXRlKSB7XHJcbiAgICBkYlttb2RlbE5hbWVdLmFzc29jaWF0ZShkYik7XHJcbiAgfVxyXG59KTtcclxuXHJcbmRiLnNlcXVlbGl6ZSA9IHNlcXVlbGl6ZTtcclxuZGIuU2VxdWVsaXplID0gU2VxdWVsaXplO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBkYjtcclxuIiwiaW1wb3J0IG5leHRDb25uZWN0IGZyb20gJ25leHQtY29ubmVjdCc7XHJcbmltcG9ydCB7IHZlcmlmeVRva2VuIH0gZnJvbSAnLi91dGlscyc7XHJcblxyXG5jb25zdCBtaWRkbGV3YXJlID0gbmV4dENvbm5lY3QoKTtcclxuXHJcbi8qIFNhbXBsZSB1c2luZyBtaWRkbGV3YXJlICovXHJcbi8qIG1pZGRsZXdhcmUudXNlKGRhdGFiYXNlKS51c2Uoc2Vzc2lvbikudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSkudXNlKHBhc3Nwb3J0LnNlc3Npb24oKSk7ICovXHJcblxyXG4vKiBTZXQgcmVzdHJpY3RlZCBwdWJsaWMgYWNjZXNzIC8gcHV0IGFueSBhcGkgYWNjZXNzIHRoYXQgaXMgcmVzdHJpY3RlZCBpbiBoZXJlICovXHJcbmNvbnN0IHJlc3RyaWN0ZWQgPSBbJy9hcGkvb3JnYW5pemF0aW9uL1tvcmdhbml6YXRpb24taWRdXScsICcvYXBpL2pvYi9bc2x1Z10nXTtcclxuXHJcbi8qXHJcbiAqIEBwYXJhbXMge3JlcXVlc3QsIHJlc3BvbnNlLCBjYWxsYmFja30gZGVmYXVsdCBSZXF1ZXN0IGFuZCBSZXNwb25zZVxyXG4gKiBAcmV0dXJuIHtvYmplY3R9IG9iamVjdCBpZiB0cnVlLCByZXNwb25zZSBtZXNzYWdlIGlmIGZhbHNlIGFuZCBjb250aW51ZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgbWlkZGxld2FyZS51c2UoYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgbGV0IGF1dGhIZWFkZXIgPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uIHx8ICcnO1xyXG4gIGxldCB1c2VyID0ge307XHJcblxyXG4gIGlmICghcmVzdHJpY3RlZC5pbmNsdWRlcyhyZXEudXJsKSAmJiAhYXV0aEhlYWRlcikge1xyXG4gICAgcmV0dXJuIG5leHQoKTtcclxuICB9XHJcbiAgaWYgKGF1dGhIZWFkZXIpIHtcclxuICAgIGxldCBzZXNzaW9uSUQgPSBhdXRoSGVhZGVyLnNwbGl0KCcgJylbMV07XHJcbiAgICBpZiAoc2Vzc2lvbklEKSB7XHJcbiAgICAgIHVzZXIgPSB2ZXJpZnlUb2tlbihzZXNzaW9uSUQpO1xyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIC8qIENvdWxkIHB1dCBjaGVjayBhZ2FpbnN0IHVzZXJzIHRhYmxlcyBpbiBkYXRhYmFzZSAgVXNlci5maW5kKHtlbWFpbDp1c2VyLmVtYWlsfSkgKi9cclxuICAgICAgICByZXEudXNlciA9IHVzZXI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDE7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zZW5kKHtcclxuICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcclxuICAgICAgICAgIGVycm9yOiAnRXhwaXJlZCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDAxO1xyXG4gICAgICByZXR1cm4gcmVzLnNlbmQoe1xyXG4gICAgICAgIHN0YXR1czogJ2Vycm9yJyxcclxuICAgICAgICBlcnJvcjogJ1dyb25nIFRva2VuJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXNDb2RlID0gNDAxO1xyXG4gICAgcmV0dXJuIHJlcy5zZW5kKHtcclxuICAgICAgc3RhdHVzOiAnZXJyb3InLFxyXG4gICAgICBlcnJvcjogJ1VuYXV0aG9yaXplZCcsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIG5leHQoKTtcclxufSk7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IFNFQ1JFVF9LRVkgPSBwcm9jZXNzLmVudi5KV1RfS0VZO1xyXG5cclxuLypcclxuICogQHBhcmFtcyB7and0VG9rZW59IGV4dHJhY3RlZCBmcm9tIGNvb2tpZXNcclxuICogQHJldHVybiB7b2JqZWN0fSBvYmplY3Qgb2YgZXh0cmFjdGVkIHRva2VuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VG9rZW4oand0VG9rZW4pIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGp3dC52ZXJpZnkoand0VG9rZW4sIFNFQ1JFVF9LRVkpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKCdlOicsIGUpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKlxyXG4gKiBAcGFyYW1zIHtyZXF1ZXN0fSBleHRyYWN0ZWQgZnJvbSByZXF1ZXN0IHJlc3BvbnNlXHJcbiAqIEByZXR1cm4ge29iamVjdH0gb2JqZWN0IG9mIHBhcnNlIGp3dCBjb29raWUgZGVjb2RlIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFwcENvb2tpZXMocmVxKSB7XHJcbiAgY29uc3QgcGFyc2VkSXRlbXMgPSB7fTtcclxuICBpZiAocmVxLmhlYWRlcnMuY29va2llKSB7XHJcbiAgICBjb25zdCBjb29raWVzSXRlbXMgPSByZXEuaGVhZGVycy5jb29raWUuc3BsaXQoJzsgJyk7XHJcbiAgICBjb29raWVzSXRlbXMuZm9yRWFjaChjb29raWVzID0+IHtcclxuICAgICAgY29uc3QgcGFyc2VkSXRlbSA9IGNvb2tpZXMuc3BsaXQoJz0nKTtcclxuICAgICAgcGFyc2VkSXRlbXNbcGFyc2VkSXRlbVswXV0gPSBkZWNvZGVVUkkocGFyc2VkSXRlbVsxXSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIHBhcnNlZEl0ZW1zO1xyXG59XHJcblxyXG4vKlxyXG4gKiBAcGFyYW1zIHtyZXF1ZXN0fSBleHRyYWN0ZWQgZnJvbSByZXF1ZXN0IHJlc3BvbnNlLCB7c2V0TG9jYWxob3N0fSB5b3VyIGxvY2FsaG9zdCBhZGRyZXNzXHJcbiAqIEByZXR1cm4ge29iamVjdH0gb2JqZWN0cyBvZiBwcm90b2NvbCwgaG9zdCBhbmQgb3JpZ2luXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWJzb2x1dGVVcmwocmVxLCBzZXRMb2NhbGhvc3QpIHtcclxuICB2YXIgcHJvdG9jb2wgPSAnaHR0cHM6JztcclxuICB2YXIgaG9zdCA9IHJlcVxyXG4gICAgPyByZXEuaGVhZGVyc1sneC1mb3J3YXJkZWQtaG9zdCddIHx8IHJlcS5oZWFkZXJzWydob3N0J11cclxuICAgIDogd2luZG93LmxvY2F0aW9uLmhvc3Q7XHJcbiAgaWYgKGhvc3QuaW5kZXhPZignbG9jYWxob3N0JykgPiAtMSkge1xyXG4gICAgaWYgKHNldExvY2FsaG9zdCkgaG9zdCA9IHNldExvY2FsaG9zdDtcclxuICAgIHByb3RvY29sID0gJ2h0dHA6JztcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3RvY29sOiBwcm90b2NvbCxcclxuICAgIGhvc3Q6IGhvc3QsXHJcbiAgICBvcmlnaW46IHByb3RvY29sICsgJy8vJyArIGhvc3QsXHJcbiAgICB1cmw6IHJlcSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkRGF5cyhkYXRlLCBkYXlzKSB7XHJcbiAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gIHJlc3VsdC5zZXREYXRlKHJlc3VsdC5nZXREYXRlKCkgKyBkYXlzKTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vL1lZWVktTU0tRERcclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGVXaXRob3V0VGltZShkYXRlKSB7XHJcbiAgdmFyIGRhdGVTdHJpbmcgPVxyXG4gICAgZGF0ZS5nZXRVVENGdWxsWWVhcigpICsgXCItXCIgK1xyXG4gICAgKFwiMFwiICsgKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpKS5zbGljZSgtMikgKyBcIi1cIiArXHJcbiAgICAoXCIwXCIgKyBkYXRlLmdldFVUQ0RhdGUoKSkuc2xpY2UoLTIpICsgXCIgXCJcclxuICByZXR1cm4gZGF0ZVN0cmluZztcclxufVxyXG4vLyBjb25zdCBhcGkgPSBwcm9jZXNzLmVudi5QVUJMSUNfVVJMXHJcblxyXG5leHBvcnQgY29uc3QgYXBpSW5zdGFuY2UgPSAoKSA9PiB7XHJcbiAgLy8gY29uc3QgYXV0aG9yaXphdGlvbiA9IHN0b3JlLmdldFN0YXRlKCkudXNlclN0YXRlLnRva2VuID8gc3RvcmUuZ2V0U3RhdGUoKS51c2VyU3RhdGUudG9rZW4gOiBudWxsXHJcblxyXG4gIC8vIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgLy8gXHQneC1hcGktdG9rZW4nOiBhdXRob3JpemF0aW9uID8gYXV0aG9yaXphdGlvbiA6ICcnLFxyXG4gIC8vIH1cclxuXHJcbiAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiAnL2FwaScsXHJcbiAgICAvLyBoZWFkZXJzLFxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja0lzTG9naW4gPSAoKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coXCJjaGVja0lzTG9naW5cIilcclxuICB2YXIgdG9rZW4gPSBDb29raWVzLmdldCgndG9rZW4nKSAvLyA9PiAndmFsdWUnXHJcblxyXG4gIGlmICghdG9rZW4pIHtcclxuICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgLy8gY29uc29sZS5sb2cocGFyc2VKd3QodG9rZW4pKVxyXG4gIHJldHVybiBwYXJzZUp3dCh0b2tlbilcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUp3dCh0b2tlbikge1xyXG5cclxuICB2YXIgaXNFeHBpcmVkID0gZmFsc2U7XHJcbiAgLy8gY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKTtcclxuXHJcblxyXG5cclxuICB2YXIgYmFzZTY0VXJsID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcclxuICB2YXIgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XHJcbiAgdmFyIGpzb25QYXlsb2FkID0gZGVjb2RlVVJJQ29tcG9uZW50KGF0b2IoYmFzZTY0KS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChjKSB7XHJcbiAgICByZXR1cm4gJyUnICsgKCcwMCcgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XHJcbiAgfSkuam9pbignJykpO1xyXG4gIHZhciBfanNvblBheWxvYWQgPSBKU09OLnBhcnNlKGpzb25QYXlsb2FkKVxyXG4gIHZhciBkYXRlTm93ID0gbmV3IERhdGUoKTtcclxuICAvLyBjb25zb2xlLmxvZyhwYXJzZUludChfanNvblBheWxvYWQuZXhwKSlcclxuICAvLyBjb25zb2xlLmxvZyhwYXJzZUludCgoZGF0ZU5vdy5nZXRUaW1lKCkpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsMTApKSlcclxuICBpZiAocGFyc2VJbnQoX2pzb25QYXlsb2FkLmV4cCkgPCBwYXJzZUludCgoZGF0ZU5vdy5nZXRUaW1lKCkpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKSkpIHtcclxuICAgIGNvbnNvbGUubG9nKFwidHJ1ZVwiKVxyXG5cclxuICAgIGlzRXhwaXJlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNFeHBpcmVkKSB7XHJcbiAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcbiAgcmV0dXJuIF9qc29uUGF5bG9hZDtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZShkYXRlKSB7XHJcbiAgdHJ5IHtcclxuICAgIHZhciBkYXRlU3BsaXQgPSBkYXRlLnRvU3RyaW5nKCkuc3BsaXQoXCJUXCIpO1xyXG4gICAgcmV0dXJuIGRhdGVTcGxpdFswXTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJXaXRoVGltZShkYXRlKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vOjA3LjAwMFpcclxuICAgIC8vU2FtcGxlVGV4dC5yZXBsYWNlKFwiRGV2ZWxvcGVyXCIsIFwiQXBwIEJ1aWxkZXJcIik7XHJcbiAgICB2YXIgZGF0ZVNwbGl0ID0gZGF0ZS50b1N0cmluZygpLnNwbGl0KFwiVFwiKTtcclxuICAgIHJldHVybiBkYXRlU3BsaXRbMF0gKyBcIiBcIiArIGRhdGVTcGxpdFsxXS5yZXBsYWNlKFwiLjAwMFpcIiwgXCJcIik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RGF0ZXRvVGhhaURhdGUoZGF0ZSkge1xyXG4gIHZhciBfZGF0ZSA9IGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUoZGF0ZSlcclxuICB2YXIgZGF0ZVNwbGl0ID0gX2RhdGUudG9TdHJpbmcoKS5zcGxpdChcIi1cIik7XHJcbiAgLy8gMjAyMS0wOS0xNlxyXG4gIHJldHVybiBkYXRlU3BsaXRbMl0gKyBcIiBcIiArIGNvbnZlcnRNb250aHRvVGhhaU1vbnRoKGRhdGVTcGxpdFsxXSkgKyBcIiBcIiArIGNvbnZlcnRZZWFydG9UaGFpWWVhcihkYXRlU3BsaXRbMF0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0WWVhcnRvVGhhaVllYXIoeWVhcikge1xyXG4gIHJldHVybiBwYXJzZUludCh5ZWFyKSArIDU0M1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydE1vbnRodG9UaGFpTW9udGgobW9udGgpIHtcclxuICBzd2l0Y2ggKG1vbnRoKSB7XHJcbiAgICBjYXNlIFwiMDFcIjpcclxuICAgICAgcmV0dXJuIFwi4Lih4LiB4Lij4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIwMlwiOlxyXG4gICAgICByZXR1cm4gXCLguIHguLjguKHguKDguLLguJ7guLHguJnguJjguYxcIlxyXG4gICAgY2FzZSBcIjAzXCI6XHJcbiAgICAgIHJldHVybiBcIuC4oeC4teC4meC4suC4hOC4oVwiXHJcbiAgICBjYXNlIFwiMDRcIjpcclxuICAgICAgcmV0dXJuIFwi4LmA4Lih4Lip4Liy4Lii4LiZXCJcclxuICAgIGNhc2UgXCIwNVwiOlxyXG4gICAgICByZXR1cm4gXCLguJ7guKTguKnguKDguLLguITguKFcIlxyXG4gICAgY2FzZSBcIjA2XCI6XHJcbiAgICAgIHJldHVybiBcIuC4oeC4tOC4luC4uOC4meC4suC4ouC4mVwiXHJcbiAgICBjYXNlIFwiMDdcIjpcclxuICAgICAgcmV0dXJuIFwi4LiB4Lij4LiB4LiO4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIwOFwiOlxyXG4gICAgICByZXR1cm4gXCLguKrguLTguIfguKvguLLguITguKFcIlxyXG4gICAgY2FzZSBcIjA5XCI6XHJcbiAgICAgIHJldHVybiBcIuC4geC4seC4meC4ouC4suC4ouC4mVwiXHJcbiAgICBjYXNlIFwiMTBcIjpcclxuICAgICAgcmV0dXJuIFwi4LiV4Li44Lil4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIxMVwiOlxyXG4gICAgICByZXR1cm4gXCLguJ7guKTguKjguIjguLTguIHguLLguKLguJlcIlxyXG4gICAgY2FzZSBcIjEyXCI6XHJcbiAgICAgIHJldHVybiBcIuC4mOC4seC4meC4p+C4suC4hOC4oVwiXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gXCJOQU5cIlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREYXRldG9BZGREQihkYXRlKSB7XHJcbiAgdmFyIGRhdGVTcGxpdCA9IGRhdGUuc3BsaXQoXCIgXCIpO1xyXG4gIHJldHVybiBkYXRlU3BsaXRbMF0gKyBcIlRcIiArIGRhdGVTcGxpdFsxXSArIFwiKzAwOjAwXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJUEFkZHJlc3MoKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2dlb2xvY2F0aW9uLWRiLmNvbS9qc29uLycpXHJcbiAgLy8gY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gIC8vIHJldHVybiByZXMuZGF0YVxyXG4gIHJldHVybiBcImNvdW50cnlfY29kZTpcIiArIHJlcy5kYXRhLmNvdW50cnlfY29kZSArIFwiLGNvdW50cnlfbmFtZTpcIiArIHJlcy5kYXRhLmNvdW50cnlfbmFtZSArIFwiLGNpdHk6XCIgKyByZXMuZGF0YS5jaXR5ICsgXCIscG9zdGFsOlwiICsgcmVzLmRhdGEucG9zdGFsXHJcbiAgICArIFwiLGxhdGl0dWRlOlwiICsgcmVzLmRhdGEubGF0aXR1ZGUgKyBcIixsb25naXR1ZGU6XCIgKyByZXMuZGF0YS5sb25naXR1ZGUgKyBcIixJUHY0OlwiICsgcmVzLmRhdGEuSVB2NCArIFwiLHN0YXRlOlwiICsgcmVzLmRhdGEuc3RhdGVcclxuICAvLyBzZXRJUChyZXMuZGF0YS5JUHY0KVxyXG4gIC8vIHJldHVyblxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBieXRlc1RvU2l6ZShieXRlcykge1xyXG4gIHZhciBzaXplcyA9IFsnQnl0ZXMnLCAnS0InLCAnTUInLCAnR0InLCAnVEInXTtcclxuICBpZiAoYnl0ZXMgPT0gMCkgcmV0dXJuICcwIEJ5dGUnO1xyXG4gIHZhciBpID0gcGFyc2VJbnQoTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZygxMDI0KSkpO1xyXG4gIHJldHVybiBNYXRoLnJvdW5kKGJ5dGVzIC8gTWF0aC5wb3coMTAyNCwgaSksIDIpICsgJyAnICsgc2l6ZXNbaV07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnl0ZXNUb01CKGJ5dGVzKSB7XHJcbiAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KGJ5dGVzIC8gKDEwMjQgKiAxMDI0KSkudG9GaXhlZCgyKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRlZGlmZihzdGFydERhdGUpIHtcclxuXHJcbiAgY29uc3QgdGltZUVuZCA9IG1vbWVudCgpO1xyXG4gIGNvbnN0IG5ld1N0YXJ0RGF0ZSA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XHJcbiAgY29uc3QgbmV3RW5kRGF0ZSA9IG5ldyBEYXRlKHRpbWVFbmQpO1xyXG4gIGNvbnN0IG9uZV9kYXkgPSAxMDAwICogNjAgKiA2MCAqIDI0O1xyXG4gIGxldCByZXN1bHRcclxuICByZXN1bHQgPSBNYXRoLmNlaWwoKG5ld1N0YXJ0RGF0ZS5nZXRUaW1lKCkgLSBuZXdFbmREYXRlLmdldFRpbWUoKSkgLyAob25lX2RheSkpXHJcbiAgY29uc29sZS5sb2coJ2RhdGUgQ29udmVydGVyIHJlc3VsdCcsIHJlc3VsdClcclxuXHJcblxyXG4gIHJldHVybiByZXN1bHQgLSAxO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnREYXRlKHNlcGFyYXRvciA9ICcnKSB7XHJcblxyXG4gIGxldCBuZXdEYXRlID0gbmV3IERhdGUoKVxyXG4gIGxldCBkYXRlID0gbmV3RGF0ZS5nZXREYXRlKCk7XHJcbiAgbGV0IG1vbnRoID0gbmV3RGF0ZS5nZXRNb250aCgpICsgMTtcclxuICBsZXQgeWVhciA9IG5ld0RhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgcmV0dXJuIGAke3llYXJ9JHtzZXBhcmF0b3J9JHttb250aCA8IDEwID8gYDAke21vbnRofWAgOiBgJHttb250aH1gfSR7c2VwYXJhdG9yfSR7ZGF0ZX1gXHJcbn1cclxuIiwiaW1wb3J0IG5leHRDb25uZWN0IGZyb20gJ25leHQtY29ubmVjdCc7XHJcbmNvbnN0IG1vZGVscyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2RiL21vZGVscy9pbmRleCcpO1xyXG5pbXBvcnQgbWlkZGxld2FyZSBmcm9tICcuLi8uLi8uLi8uLi9taWRkbGV3YXJlL2F1dGgnO1xyXG5pbXBvcnQgeyBhZGREYXlzLCBnZXRJUEFkZHJlc3MgfSBmcm9tICcuLi8uLi8uLi8uLi9taWRkbGV3YXJlL3V0aWxzJztcclxuY29uc3QgYmNyeXB0ID0gcmVxdWlyZSgnYmNyeXB0anMnKTtcclxuY29uc3Qgc2FsdCA9IGJjcnlwdC5nZW5TYWx0U3luYygxMCk7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBuZXh0Q29ubmVjdCgpXHJcbiAgLy8gTWlkZGxld2FyZVxyXG4gIC51c2UobWlkZGxld2FyZSlcclxuICAvLyBHZXQgbWV0aG9kXHJcbiAgLmdldChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7XHJcbiAgICAgIHN0YXR1czogNDAwLFxyXG4gICAgICBtZXNzYWdlOiAnZGVueSBwZXJtaXNzaW9uISEnLFxyXG4gICAgfSk7XHJcbiAgfSlcclxuICAvLyBQb3N0IG1ldGhvZFxyXG4gIC5wb3N0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBib2R5IH0gPSByZXE7XHJcbiAgICBjb25zdCB7IHNsdWcgfSA9IHJlcS5xdWVyeTtcclxuICAgIGNvbnN0IHsgb3JnYW5pemF0aW9uX2lkLCBhY3Rpdml0aWVzX2RhdGUsIGFjdGl2aXRpZXNfdGl0bGUsIGFjdGl2aXRpZXNfZGV0YWlsLCBhY3Rpdml0aWVzX2ltYWdlLCBhY3Rpdml0aWVzX2tleXdvcmQsIGlzX3NsaWRlLCBzdGF0dXNfYWN0aXZlIH0gPSBib2R5O1xyXG4gICAgLy8gY29uc3QgdXNlcklkID0gc2x1ZztcclxuICAgIGNvbnN0IGRhdGFVc2VyID0ge1xyXG4gICAgICBcIm9yZ2FuaXphdGlvbl9pZFwiOiBvcmdhbml6YXRpb25faWQsXHJcbiAgICAgIFwiYWN0aXZpdGllc19kYXRlXCI6IGFjdGl2aXRpZXNfZGF0ZS5yZXBsYWNlKFwiKzA3OjAwXCIsIFwiKzAwOjAwXCIpLFxyXG4gICAgICBcImFjdGl2aXRpZXNfdGl0bGVcIjogYWN0aXZpdGllc190aXRsZSxcclxuICAgICAgXCJhY3Rpdml0aWVzX2RldGFpbFwiOiBhY3Rpdml0aWVzX2RldGFpbCxcclxuICAgICAgXCJhY3Rpdml0aWVzX2ltYWdlXCI6IGFjdGl2aXRpZXNfaW1hZ2UsXHJcbiAgICAgIFwiYWN0aXZpdGllc19rZXl3b3JkXCI6IGFjdGl2aXRpZXNfa2V5d29yZCA/IGFjdGl2aXRpZXNfa2V5d29yZCA6IFwiXCIsXHJcbiAgICAgIFwiaXNfc2xpZGVcIjogaXNfc2xpZGUsXHJcbiAgICAgIFwic3RhdHVzX2FjdGl2ZVwiOiBzdGF0dXNfYWN0aXZlLFxyXG4gICAgfTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGFVc2VyKVxyXG4gICAgaWYgKG9yZ2FuaXphdGlvbl9pZCA9PSB1bmRlZmluZWQgfHwgYWN0aXZpdGllc19kYXRlID09IHVuZGVmaW5lZCB8fCBhY3Rpdml0aWVzX3RpdGxlID09IHVuZGVmaW5lZCB8fCBhY3Rpdml0aWVzX2RldGFpbCA9PSB1bmRlZmluZWQgfHwgYWN0aXZpdGllc19pbWFnZSA9PSB1bmRlZmluZWQgfHwgaXNfc2xpZGUgPT0gdW5kZWZpbmVkIHx8IHN0YXR1c19hY3RpdmUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgc3RhdHVzOiAyMDEsXHJcbiAgICAgICAgbWVzc2FnZTogJ2RhdGEgaW5jb3JyZWN0JyxcclxuICAgICAgICBkYXRhVXNlcjogZGF0YVVzZXIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBpcCA9IGF3YWl0IGdldElQQWRkcmVzcygpXHJcbiAgICB2YXIgY3VycmVudERhdGUgPSBtb21lbnQoKS5mb3JtYXQoKVxyXG4gICAgZGF0YVVzZXIuaXAgPSBpcFxyXG4gICAgZGF0YVVzZXIuaXNfZGVsZXRlZCA9IDBcclxuICAgIGRhdGFVc2VyLmRhdGVfY3JlYXRlZCA9IGN1cnJlbnREYXRlLnJlcGxhY2UoXCIrMDc6MDBcIiwgXCIrMDA6MDBcIilcclxuICAgIGRhdGFVc2VyLmRhdGVfdXBkYXRlID0gY3VycmVudERhdGUucmVwbGFjZShcIiswNzowMFwiLCBcIiswMDowMFwiKVxyXG5cclxuICAgIGNvbnN0IG5ld0FkZGFjdGl2aXRpZXMgPSBhd2FpdCBtb2RlbHMuYWN0aXZpdGllcy5jcmVhdGUoZGF0YVVzZXIpO1xyXG5cclxuICAgIGlmIChuZXdBZGRhY3Rpdml0aWVzID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcclxuICAgICAgICBzdGF0dXM6IDUwMCxcclxuICAgICAgICBtZXNzYWdlOiAnSW50ZXJuYWwgZXJyb3InLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICBzdGF0dXM6IDIwMCxcclxuICAgICAgbWVzc2FnZTogJ0luc2VydCBjb21wbGV0ZWQnLFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1jb25uZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=