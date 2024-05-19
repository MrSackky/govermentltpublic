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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./pages/api/organization/dashborad-all.js":
/*!*************************************************!*\
  !*** ./pages/api/organization/dashborad-all.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../middleware/auth */ "./middleware/auth.js");


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
    results,
    page,
    search,
    sortField = "organization_id",
    sortOrder = "DESC",
    filters = []
  } = req.query;
  let _search = {};

  if (search != "") {
    if (filters == 'undefined' || filters == "null") {
      // console.log("if1")
      _search = {
        is_use: {
          [Op.ne]: 3
        },
        [Op.or]: [{
          organization_name_eng: {
            [Op.like]: '%' + search + '%'
          }
        }, {
          organization_name: {
            [Op.like]: '%' + search + '%'
          }
        }]
      };
    } else {
      console.log("if2");
      console.log(filters);
      _search = {
        is_use: {
          [Op.ne]: 3
        },
        package: {
          [Op.in]: [filters]
        },
        [Op.or]: [{
          organization_name_eng: {
            [Op.like]: '%' + search + '%'
          }
        }, {
          organization_name: {
            [Op.like]: '%' + search + '%'
          }
        }]
      };
    }
  } else {
    if (filters == 'undefined' || filters == 'null') {
      // console.log("if3")
      // console.log(filters)
      _search = {
        is_use: {
          [Op.ne]: 3
        }
      };
    } else {
      // console.log("if4")
      // console.log(filters)
      _search = {
        is_use: {
          [Op.ne]: 3
        },
        package: {
          [Op.in]: [filters]
        }
      };
    }
  } // console.log(_search)


  const _organization = await models.Organization.findAndCountAll({
    // attributes: ['package_id','code_package','name_package','size_limit'] 
    attributes: ['organization_id', 'organization_name', 'organization_name_eng', 'organization_logo', 'organization_email', 'organization_address', 'organization_sub_district_id', 'organization_phone', 'organization_fax', 'theme', 'thumbnail', 'thumbnail_link', 'thumbnail_url', 'show_index', 'google_verify', 'social_fb', 'social_fb_pageid', 'rss', 'google_tag_manager1', 'google_tag_manager2', 'date_created', 'date_expired', 'size_used', 'package', 'is_use'],
    where: _search,
    offset: results * (page - 1),
    limit: parseInt(results),
    include: [{
      model: models.Packages,
      as: 'packages'
    }],
    order: [[sortField != "undefined" && sortOrder != "undefined" ? sortField : "organization_id", sortOrder != "undefined" ? sortOrder == "ascend" ? "ASC" : "DESC" : "DESC"]]
  });

  return res.status(200).json({
    info: {
      page: page,
      results: results
    },
    results: _organization.rows,
    totalCount: _organization.count
  });
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ 4:
/*!*******************************************************!*\
  !*** multi ./pages/api/organization/dashborad-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\govermentlt\pages\api\organization\dashborad-all.js */"./pages/api/organization/dashborad-all.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGIvY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9kYi9tb2RlbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9hdXRoLmpzIiwid2VicGFjazovLy8uL21pZGRsZXdhcmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL29yZ2FuaXphdGlvbi9kYXNoYm9yYWQtYWxsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvbm5lY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemVcIiJdLCJuYW1lcyI6WyJkb3RlbnYiLCJyZXF1aXJlIiwicmVzdWx0IiwiY29uZmlnIiwibW9kdWxlIiwiZXhwb3J0cyIsImRldmVsb3BtZW50IiwidXNlcm5hbWUiLCJwcm9jZXNzIiwiZW52IiwiREJfVVNFUiIsInBhc3N3b3JkIiwiREJfUEFTUyIsImRhdGFiYXNlIiwiREJfTkFNRSIsImhvc3QiLCJEQl9IT1NUIiwiZGlhbGVjdCIsInRlc3QiLCJsb2dnaW5nIiwicHJvZHVjdGlvbiIsImRpYWxlY3RPcHRpb25zIiwic3NsIiwiZnMiLCJwYXRoIiwiU2VxdWVsaXplIiwiYmFzZW5hbWUiLCJfX2ZpbGVuYW1lIiwiX19kaXJuYW1lIiwiZGIiLCJtb2RlbHMiLCJjd2QiLCJzZXF1ZWxpemUiLCJ1c2VfZW52X3ZhcmlhYmxlIiwicmVhZGRpclN5bmMiLCJmaWx0ZXIiLCJmaWxlIiwiaW5kZXhPZiIsInNsaWNlIiwiZm9yRWFjaCIsIm1vZGVsIiwiam9pbiIsIm5hbWUiLCJPYmplY3QiLCJrZXlzIiwibW9kZWxOYW1lIiwiYXNzb2NpYXRlIiwibWlkZGxld2FyZSIsIm5leHRDb25uZWN0IiwicmVzdHJpY3RlZCIsInVzZSIsInJlcSIsInJlcyIsIm5leHQiLCJhdXRoSGVhZGVyIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJ1c2VyIiwiaW5jbHVkZXMiLCJ1cmwiLCJzZXNzaW9uSUQiLCJzcGxpdCIsInZlcmlmeVRva2VuIiwic3RhdHVzQ29kZSIsInNlbmQiLCJzdGF0dXMiLCJlcnJvciIsIlNFQ1JFVF9LRVkiLCJKV1RfS0VZIiwiand0VG9rZW4iLCJqd3QiLCJ2ZXJpZnkiLCJlIiwiY29uc29sZSIsImxvZyIsImdldEFwcENvb2tpZXMiLCJwYXJzZWRJdGVtcyIsImNvb2tpZSIsImNvb2tpZXNJdGVtcyIsImNvb2tpZXMiLCJwYXJzZWRJdGVtIiwiZGVjb2RlVVJJIiwiYWJzb2x1dGVVcmwiLCJzZXRMb2NhbGhvc3QiLCJwcm90b2NvbCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiYWRkRGF5cyIsImRhdGUiLCJkYXlzIiwiRGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwiZm9ybWF0RGF0ZVdpdGhvdXRUaW1lIiwiZGF0ZVN0cmluZyIsImdldFVUQ0Z1bGxZZWFyIiwiZ2V0VVRDTW9udGgiLCJnZXRVVENEYXRlIiwiYXBpSW5zdGFuY2UiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJjaGVja0lzTG9naW4iLCJ0b2tlbiIsIkNvb2tpZXMiLCJnZXQiLCJSb3V0ZXIiLCJwdXNoIiwicGFyc2VKd3QiLCJpc0V4cGlyZWQiLCJiYXNlNjRVcmwiLCJiYXNlNjQiLCJyZXBsYWNlIiwianNvblBheWxvYWQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJhdG9iIiwibWFwIiwiYyIsImNoYXJDb2RlQXQiLCJ0b1N0cmluZyIsIl9qc29uUGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImRhdGVOb3ciLCJwYXJzZUludCIsImV4cCIsImdldFRpbWUiLCJzdWJzdHJpbmciLCJjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lIiwiZGF0ZVNwbGl0IiwiY29udmVydERhdGVEQnRvRGF0ZVBpY2tlcldpdGhUaW1lIiwiY29udmVydERhdGV0b1RoYWlEYXRlIiwiX2RhdGUiLCJjb252ZXJ0TW9udGh0b1RoYWlNb250aCIsImNvbnZlcnRZZWFydG9UaGFpWWVhciIsInllYXIiLCJtb250aCIsImNvbnZlcnREYXRldG9BZGREQiIsImdldElQQWRkcmVzcyIsImRhdGEiLCJjb3VudHJ5X2NvZGUiLCJjb3VudHJ5X25hbWUiLCJjaXR5IiwicG9zdGFsIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJJUHY0Iiwic3RhdGUiLCJieXRlc1RvU2l6ZSIsImJ5dGVzIiwic2l6ZXMiLCJpIiwiTWF0aCIsImZsb29yIiwicm91bmQiLCJwb3ciLCJieXRlc1RvTUIiLCJOdW1iZXIiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImdldERhdGVkaWZmIiwic3RhcnREYXRlIiwidGltZUVuZCIsIm1vbWVudCIsIm5ld1N0YXJ0RGF0ZSIsIm5ld0VuZERhdGUiLCJvbmVfZGF5IiwiY2VpbCIsImdldEN1cnJlbnREYXRlIiwic2VwYXJhdG9yIiwibmV3RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJPcCIsImhhbmRsZXIiLCJtZXRob2QiLCJib2R5IiwicmVzdWx0cyIsInBhZ2UiLCJzZWFyY2giLCJzb3J0RmllbGQiLCJzb3J0T3JkZXIiLCJmaWx0ZXJzIiwicXVlcnkiLCJfc2VhcmNoIiwiaXNfdXNlIiwibmUiLCJvciIsIm9yZ2FuaXphdGlvbl9uYW1lX2VuZyIsImxpa2UiLCJvcmdhbml6YXRpb25fbmFtZSIsInBhY2thZ2UiLCJpbiIsIl9vcmdhbml6YXRpb24iLCJPcmdhbml6YXRpb24iLCJmaW5kQW5kQ291bnRBbGwiLCJhdHRyaWJ1dGVzIiwid2hlcmUiLCJvZmZzZXQiLCJsaW1pdCIsImluY2x1ZGUiLCJQYWNrYWdlcyIsImFzIiwib3JkZXIiLCJqc29uIiwiaW5mbyIsInJvd3MiLCJ0b3RhbENvdW50IiwiY291bnQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RmE7O0FBQ2IsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHNCQUFELENBQXRCOztBQUNBLE1BQU1DLE1BQU0sR0FBR0YsTUFBTSxDQUFDRyxNQUFQLEVBQWYsQyxDQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmQyxhQUFXLEVBQUU7QUFDWEMsWUFBUSxFQUFFQyxPQUFPLENBQUND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ZWxDLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbElBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHNDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhcGlcXG9yZ2FuaXphdGlvblxcZGFzaGJvcmFkLWFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsIid1c2Ugc3RyaWN0JztcclxuY29uc3QgZG90ZW52ID0gcmVxdWlyZShcImRvdGVudlwiKVxyXG5jb25zdCByZXN1bHQgPSBkb3RlbnYuY29uZmlnKClcclxuXHJcbi8vIGlmIChyZXN1bHQuZXJyb3IpIHtcclxuLy8gICB0aHJvdyByZXN1bHQuZXJyb3JcclxuLy8gfVxyXG5cclxuLy8gY29uc29sZS5sb2cocmVzdWx0LnBhcnNlZClcclxuXHJcbi8vIGRvdGVudi5jb25maWcoeyBwYXRoOiBfX2Rpcm5hbWUgKyAnLmVudicgfSk7XHJcbi8vIGNvbnNvbGUubG9nKFwicHJvY2Vzcy5lbnYuREJfVVNFUlwiKTtcclxuLy8gY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuREJfSE9TVCk7XHJcbi8vIGRvdGVudi5jb25maWcoeyBwYXRoOiAnLi9jb25maWcuZW52JyB9KTtcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZGV2ZWxvcG1lbnQ6IHtcclxuICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxyXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1MsXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSxcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXHJcbiAgICBkaWFsZWN0OiAnbXlzcWwnLFxyXG4gIH0sXHJcbiAgdGVzdDoge1xyXG4gICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LkRCX1VTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTUyxcclxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxyXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcclxuICAgIGRpYWxlY3Q6ICdteXNxbCcsXHJcbiAgICBsb2dnaW5nOiBmYWxzZSxcclxuICB9LFxyXG4gIHByb2R1Y3Rpb246IHtcclxuICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxyXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1MsXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSxcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXHJcbiAgICBkaWFsZWN0OiAnbXlzcWwnLFxyXG4gICAgZGlhbGVjdE9wdGlvbnM6IHtcclxuICAgICAgc3NsOiB0cnVlLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcbmNvbnN0IFNlcXVlbGl6ZSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xyXG5jb25zdCBiYXNlbmFtZSA9IHBhdGguYmFzZW5hbWUoX19maWxlbmFtZSk7XHJcbmNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7XHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoX19kaXJuYW1lICsgJy8uLi9jb25maWcvY29uZmlnLmpzJylbZW52XTtcclxuY29uc3QgZGIgPSB7fTtcclxuXHJcbi8qIEN1c3RvbSBoYW5kbGVyIGZvciByZWFkaW5nIGN1cnJlbnQgd29ya2luZyBkaXJlY3RvcnkgKi9cclxuY29uc3QgbW9kZWxzID0gcHJvY2Vzcy5jd2QoKSArICcvZGIvbW9kZWxzLycgfHwgX19kaXJuYW1lO1xyXG5cclxubGV0IHNlcXVlbGl6ZTtcclxuaWYgKGNvbmZpZy51c2VfZW52X3ZhcmlhYmxlKSB7XHJcbiAgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShwcm9jZXNzLmVudltjb25maWcudXNlX2Vudl92YXJpYWJsZV0sIGNvbmZpZyk7XHJcbn0gZWxzZSB7XHJcbiAgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShcclxuICAgIGNvbmZpZy5kYXRhYmFzZSxcclxuICAgIGNvbmZpZy51c2VybmFtZSxcclxuICAgIGNvbmZpZy5wYXNzd29yZCxcclxuICAgIGNvbmZpZyxcclxuICApO1xyXG59XHJcbi8qIGZzLnJlYWRkaXJTeW5jKF9fZGlybmFtZSkgKi9cclxuZnMucmVhZGRpclN5bmMobW9kZWxzKVxyXG4gIC5maWx0ZXIoZmlsZSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBmaWxlLmluZGV4T2YoJy4nKSAhPT0gMCAmJiBmaWxlICE9PSBiYXNlbmFtZSAmJiBmaWxlLnNsaWNlKC0zKSA9PT0gJy5qcydcclxuICAgICk7XHJcbiAgfSlcclxuICAuZm9yRWFjaChmaWxlID0+IHtcclxuICAgIC8qIGNvbnN0IG1vZGVsID0gc2VxdWVsaXplW1wiaW1wb3J0XCJdKHBhdGguam9pbihfX2Rpcm5hbWUsIGZpbGUpKTsgKi9cclxuICAgIGNvbnN0IG1vZGVsID0gc2VxdWVsaXplWydpbXBvcnQnXShwYXRoLmpvaW4obW9kZWxzLCBmaWxlKSk7XHJcbiAgICBkYlttb2RlbC5uYW1lXSA9IG1vZGVsO1xyXG4gIH0pO1xyXG5cclxuT2JqZWN0LmtleXMoZGIpLmZvckVhY2gobW9kZWxOYW1lID0+IHtcclxuICBpZiAoZGJbbW9kZWxOYW1lXS5hc3NvY2lhdGUpIHtcclxuICAgIGRiW21vZGVsTmFtZV0uYXNzb2NpYXRlKGRiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZGIuc2VxdWVsaXplID0gc2VxdWVsaXplO1xyXG5kYi5TZXF1ZWxpemUgPSBTZXF1ZWxpemU7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRiO1xyXG4iLCJpbXBvcnQgbmV4dENvbm5lY3QgZnJvbSAnbmV4dC1jb25uZWN0JztcclxuaW1wb3J0IHsgdmVyaWZ5VG9rZW4gfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBuZXh0Q29ubmVjdCgpO1xyXG5cclxuLyogU2FtcGxlIHVzaW5nIG1pZGRsZXdhcmUgKi9cclxuLyogbWlkZGxld2FyZS51c2UoZGF0YWJhc2UpLnVzZShzZXNzaW9uKS51c2UocGFzc3BvcnQuaW5pdGlhbGl6ZSgpKS51c2UocGFzc3BvcnQuc2Vzc2lvbigpKTsgKi9cclxuXHJcbi8qIFNldCByZXN0cmljdGVkIHB1YmxpYyBhY2Nlc3MgLyBwdXQgYW55IGFwaSBhY2Nlc3MgdGhhdCBpcyByZXN0cmljdGVkIGluIGhlcmUgKi9cclxuY29uc3QgcmVzdHJpY3RlZCA9IFsnL2FwaS9vcmdhbml6YXRpb24vW29yZ2FuaXphdGlvbi1pZF1dJywgJy9hcGkvam9iL1tzbHVnXSddO1xyXG5cclxuLypcclxuICogQHBhcmFtcyB7cmVxdWVzdCwgcmVzcG9uc2UsIGNhbGxiYWNrfSBkZWZhdWx0IFJlcXVlc3QgYW5kIFJlc3BvbnNlXHJcbiAqIEByZXR1cm4ge29iamVjdH0gb2JqZWN0IGlmIHRydWUsIHJlc3BvbnNlIG1lc3NhZ2UgaWYgZmFsc2UgYW5kIGNvbnRpbnVlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBtaWRkbGV3YXJlLnVzZShhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICBsZXQgYXV0aEhlYWRlciA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24gfHwgJyc7XHJcbiAgbGV0IHVzZXIgPSB7fTtcclxuXHJcbiAgaWYgKCFyZXN0cmljdGVkLmluY2x1ZGVzKHJlcS51cmwpICYmICFhdXRoSGVhZGVyKSB7XHJcbiAgICByZXR1cm4gbmV4dCgpO1xyXG4gIH1cclxuICBpZiAoYXV0aEhlYWRlcikge1xyXG4gICAgbGV0IHNlc3Npb25JRCA9IGF1dGhIZWFkZXIuc3BsaXQoJyAnKVsxXTtcclxuICAgIGlmIChzZXNzaW9uSUQpIHtcclxuICAgICAgdXNlciA9IHZlcmlmeVRva2VuKHNlc3Npb25JRCk7XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgLyogQ291bGQgcHV0IGNoZWNrIGFnYWluc3QgdXNlcnMgdGFibGVzIGluIGRhdGFiYXNlICBVc2VyLmZpbmQoe2VtYWlsOnVzZXIuZW1haWx9KSAqL1xyXG4gICAgICAgIHJlcS51c2VyID0gdXNlcjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDQwMTtcclxuICAgICAgICByZXR1cm4gcmVzLnNlbmQoe1xyXG4gICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxyXG4gICAgICAgICAgZXJyb3I6ICdFeHBpcmVkJyxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDE7XHJcbiAgICAgIHJldHVybiByZXMuc2VuZCh7XHJcbiAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxyXG4gICAgICAgIGVycm9yOiAnV3JvbmcgVG9rZW4nLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1c0NvZGUgPSA0MDE7XHJcbiAgICByZXR1cm4gcmVzLnNlbmQoe1xyXG4gICAgICBzdGF0dXM6ICdlcnJvcicsXHJcbiAgICAgIGVycm9yOiAnVW5hdXRob3JpemVkJyxcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gbmV4dCgpO1xyXG59KTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgU0VDUkVUX0tFWSA9IHByb2Nlc3MuZW52LkpXVF9LRVk7XHJcblxyXG4vKlxyXG4gKiBAcGFyYW1zIHtqd3RUb2tlbn0gZXh0cmFjdGVkIGZyb20gY29va2llc1xyXG4gKiBAcmV0dXJuIHtvYmplY3R9IG9iamVjdCBvZiBleHRyYWN0ZWQgdG9rZW5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlUb2tlbihqd3RUb2tlbikge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gand0LnZlcmlmeShqd3RUb2tlbiwgU0VDUkVUX0tFWSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coJ2U6JywgZSk7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbi8qXHJcbiAqIEBwYXJhbXMge3JlcXVlc3R9IGV4dHJhY3RlZCBmcm9tIHJlcXVlc3QgcmVzcG9uc2VcclxuICogQHJldHVybiB7b2JqZWN0fSBvYmplY3Qgb2YgcGFyc2Ugand0IGNvb2tpZSBkZWNvZGUgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBwQ29va2llcyhyZXEpIHtcclxuICBjb25zdCBwYXJzZWRJdGVtcyA9IHt9O1xyXG4gIGlmIChyZXEuaGVhZGVycy5jb29raWUpIHtcclxuICAgIGNvbnN0IGNvb2tpZXNJdGVtcyA9IHJlcS5oZWFkZXJzLmNvb2tpZS5zcGxpdCgnOyAnKTtcclxuICAgIGNvb2tpZXNJdGVtcy5mb3JFYWNoKGNvb2tpZXMgPT4ge1xyXG4gICAgICBjb25zdCBwYXJzZWRJdGVtID0gY29va2llcy5zcGxpdCgnPScpO1xyXG4gICAgICBwYXJzZWRJdGVtc1twYXJzZWRJdGVtWzBdXSA9IGRlY29kZVVSSShwYXJzZWRJdGVtWzFdKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gcGFyc2VkSXRlbXM7XHJcbn1cclxuXHJcbi8qXHJcbiAqIEBwYXJhbXMge3JlcXVlc3R9IGV4dHJhY3RlZCBmcm9tIHJlcXVlc3QgcmVzcG9uc2UsIHtzZXRMb2NhbGhvc3R9IHlvdXIgbG9jYWxob3N0IGFkZHJlc3NcclxuICogQHJldHVybiB7b2JqZWN0fSBvYmplY3RzIG9mIHByb3RvY29sLCBob3N0IGFuZCBvcmlnaW5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhYnNvbHV0ZVVybChyZXEsIHNldExvY2FsaG9zdCkge1xyXG4gIHZhciBwcm90b2NvbCA9ICdodHRwczonO1xyXG4gIHZhciBob3N0ID0gcmVxXHJcbiAgICA/IHJlcS5oZWFkZXJzWyd4LWZvcndhcmRlZC1ob3N0J10gfHwgcmVxLmhlYWRlcnNbJ2hvc3QnXVxyXG4gICAgOiB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuICBpZiAoaG9zdC5pbmRleE9mKCdsb2NhbGhvc3QnKSA+IC0xKSB7XHJcbiAgICBpZiAoc2V0TG9jYWxob3N0KSBob3N0ID0gc2V0TG9jYWxob3N0O1xyXG4gICAgcHJvdG9jb2wgPSAnaHR0cDonO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgcHJvdG9jb2w6IHByb3RvY29sLFxyXG4gICAgaG9zdDogaG9zdCxcclxuICAgIG9yaWdpbjogcHJvdG9jb2wgKyAnLy8nICsgaG9zdCxcclxuICAgIHVybDogcmVxLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGREYXlzKGRhdGUsIGRheXMpIHtcclxuICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgcmVzdWx0LnNldERhdGUocmVzdWx0LmdldERhdGUoKSArIGRheXMpO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vWVlZWS1NTS1ERFxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZVdpdGhvdXRUaW1lKGRhdGUpIHtcclxuICB2YXIgZGF0ZVN0cmluZyA9XHJcbiAgICBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgKyBcIi1cIiArXHJcbiAgICAoXCIwXCIgKyAoZGF0ZS5nZXRVVENNb250aCgpICsgMSkpLnNsaWNlKC0yKSArIFwiLVwiICtcclxuICAgIChcIjBcIiArIGRhdGUuZ2V0VVRDRGF0ZSgpKS5zbGljZSgtMikgKyBcIiBcIlxyXG4gIHJldHVybiBkYXRlU3RyaW5nO1xyXG59XHJcbi8vIGNvbnN0IGFwaSA9IHByb2Nlc3MuZW52LlBVQkxJQ19VUkxcclxuXHJcbmV4cG9ydCBjb25zdCBhcGlJbnN0YW5jZSA9ICgpID0+IHtcclxuICAvLyBjb25zdCBhdXRob3JpemF0aW9uID0gc3RvcmUuZ2V0U3RhdGUoKS51c2VyU3RhdGUudG9rZW4gPyBzdG9yZS5nZXRTdGF0ZSgpLnVzZXJTdGF0ZS50b2tlbiA6IG51bGxcclxuXHJcbiAgLy8gY29uc3QgaGVhZGVycyA9IHtcclxuICAvLyBcdCd4LWFwaS10b2tlbic6IGF1dGhvcml6YXRpb24gPyBhdXRob3JpemF0aW9uIDogJycsXHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6ICcvYXBpJyxcclxuICAgIC8vIGhlYWRlcnMsXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrSXNMb2dpbiA9ICgpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhcImNoZWNrSXNMb2dpblwiKVxyXG4gIHZhciB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpIC8vID0+ICd2YWx1ZSdcclxuXHJcbiAgaWYgKCF0b2tlbikge1xyXG4gICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvLyBjb25zb2xlLmxvZyhwYXJzZUp3dCh0b2tlbikpXHJcbiAgcmV0dXJuIHBhcnNlSnd0KHRva2VuKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSnd0KHRva2VuKSB7XHJcblxyXG4gIHZhciBpc0V4cGlyZWQgPSBmYWxzZTtcclxuICAvLyBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpO1xyXG5cclxuXHJcblxyXG4gIHZhciBiYXNlNjRVcmwgPSB0b2tlbi5zcGxpdCgnLicpWzFdO1xyXG4gIHZhciBiYXNlNjQgPSBiYXNlNjRVcmwucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcclxuICB2YXIganNvblBheWxvYWQgPSBkZWNvZGVVUklDb21wb25lbnQoYXRvYihiYXNlNjQpLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKGMpIHtcclxuICAgIHJldHVybiAnJScgKyAoJzAwJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcclxuICB9KS5qb2luKCcnKSk7XHJcbiAgdmFyIF9qc29uUGF5bG9hZCA9IEpTT04ucGFyc2UoanNvblBheWxvYWQpXHJcbiAgdmFyIGRhdGVOb3cgPSBuZXcgRGF0ZSgpO1xyXG4gIC8vIGNvbnNvbGUubG9nKHBhcnNlSW50KF9qc29uUGF5bG9hZC5leHApKVxyXG4gIC8vIGNvbnNvbGUubG9nKHBhcnNlSW50KChkYXRlTm93LmdldFRpbWUoKSkudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwxMCkpKVxyXG4gIGlmIChwYXJzZUludChfanNvblBheWxvYWQuZXhwKSA8IHBhcnNlSW50KChkYXRlTm93LmdldFRpbWUoKSkudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApKSkge1xyXG4gICAgY29uc29sZS5sb2coXCJ0cnVlXCIpXHJcblxyXG4gICAgaXNFeHBpcmVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlmIChpc0V4cGlyZWQpIHtcclxuICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxuICByZXR1cm4gX2pzb25QYXlsb2FkO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lKGRhdGUpIHtcclxuICB0cnkge1xyXG4gICAgdmFyIGRhdGVTcGxpdCA9IGRhdGUudG9TdHJpbmcoKS5zcGxpdChcIlRcIik7XHJcbiAgICByZXR1cm4gZGF0ZVNwbGl0WzBdO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydERhdGVEQnRvRGF0ZVBpY2tlcldpdGhUaW1lKGRhdGUpIHtcclxuICB0cnkge1xyXG4gICAgLy86MDcuMDAwWlxyXG4gICAgLy9TYW1wbGVUZXh0LnJlcGxhY2UoXCJEZXZlbG9wZXJcIiwgXCJBcHAgQnVpbGRlclwiKTtcclxuICAgIHZhciBkYXRlU3BsaXQgPSBkYXRlLnRvU3RyaW5nKCkuc3BsaXQoXCJUXCIpO1xyXG4gICAgcmV0dXJuIGRhdGVTcGxpdFswXSArIFwiIFwiICsgZGF0ZVNwbGl0WzFdLnJlcGxhY2UoXCIuMDAwWlwiLCBcIlwiKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREYXRldG9UaGFpRGF0ZShkYXRlKSB7XHJcbiAgdmFyIF9kYXRlID0gY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZShkYXRlKVxyXG4gIHZhciBkYXRlU3BsaXQgPSBfZGF0ZS50b1N0cmluZygpLnNwbGl0KFwiLVwiKTtcclxuICAvLyAyMDIxLTA5LTE2XHJcbiAgcmV0dXJuIGRhdGVTcGxpdFsyXSArIFwiIFwiICsgY29udmVydE1vbnRodG9UaGFpTW9udGgoZGF0ZVNwbGl0WzFdKSArIFwiIFwiICsgY29udmVydFllYXJ0b1RoYWlZZWFyKGRhdGVTcGxpdFswXSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRZZWFydG9UaGFpWWVhcih5ZWFyKSB7XHJcbiAgcmV0dXJuIHBhcnNlSW50KHllYXIpICsgNTQzXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0TW9udGh0b1RoYWlNb250aChtb250aCkge1xyXG4gIHN3aXRjaCAobW9udGgpIHtcclxuICAgIGNhc2UgXCIwMVwiOlxyXG4gICAgICByZXR1cm4gXCLguKHguIHguKPguLLguITguKFcIlxyXG4gICAgY2FzZSBcIjAyXCI6XHJcbiAgICAgIHJldHVybiBcIuC4geC4uOC4oeC4oOC4suC4nuC4seC4meC4mOC5jFwiXHJcbiAgICBjYXNlIFwiMDNcIjpcclxuICAgICAgcmV0dXJuIFwi4Lih4Li14LiZ4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIwNFwiOlxyXG4gICAgICByZXR1cm4gXCLguYDguKHguKnguLLguKLguJlcIlxyXG4gICAgY2FzZSBcIjA1XCI6XHJcbiAgICAgIHJldHVybiBcIuC4nuC4pOC4qeC4oOC4suC4hOC4oVwiXHJcbiAgICBjYXNlIFwiMDZcIjpcclxuICAgICAgcmV0dXJuIFwi4Lih4Li04LiW4Li44LiZ4Liy4Lii4LiZXCJcclxuICAgIGNhc2UgXCIwN1wiOlxyXG4gICAgICByZXR1cm4gXCLguIHguKPguIHguI7guLLguITguKFcIlxyXG4gICAgY2FzZSBcIjA4XCI6XHJcbiAgICAgIHJldHVybiBcIuC4quC4tOC4h+C4q+C4suC4hOC4oVwiXHJcbiAgICBjYXNlIFwiMDlcIjpcclxuICAgICAgcmV0dXJuIFwi4LiB4Lix4LiZ4Lii4Liy4Lii4LiZXCJcclxuICAgIGNhc2UgXCIxMFwiOlxyXG4gICAgICByZXR1cm4gXCLguJXguLjguKXguLLguITguKFcIlxyXG4gICAgY2FzZSBcIjExXCI6XHJcbiAgICAgIHJldHVybiBcIuC4nuC4pOC4qOC4iOC4tOC4geC4suC4ouC4mVwiXHJcbiAgICBjYXNlIFwiMTJcIjpcclxuICAgICAgcmV0dXJuIFwi4LiY4Lix4LiZ4Lin4Liy4LiE4LihXCJcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBcIk5BTlwiXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydERhdGV0b0FkZERCKGRhdGUpIHtcclxuICB2YXIgZGF0ZVNwbGl0ID0gZGF0ZS5zcGxpdChcIiBcIik7XHJcbiAgcmV0dXJuIGRhdGVTcGxpdFswXSArIFwiVFwiICsgZGF0ZVNwbGl0WzFdICsgXCIrMDA6MDBcIjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldElQQWRkcmVzcygpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vZ2VvbG9jYXRpb24tZGIuY29tL2pzb24vJylcclxuICAvLyBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgLy8gcmV0dXJuIHJlcy5kYXRhXHJcbiAgcmV0dXJuIFwiY291bnRyeV9jb2RlOlwiICsgcmVzLmRhdGEuY291bnRyeV9jb2RlICsgXCIsY291bnRyeV9uYW1lOlwiICsgcmVzLmRhdGEuY291bnRyeV9uYW1lICsgXCIsY2l0eTpcIiArIHJlcy5kYXRhLmNpdHkgKyBcIixwb3N0YWw6XCIgKyByZXMuZGF0YS5wb3N0YWxcclxuICAgICsgXCIsbGF0aXR1ZGU6XCIgKyByZXMuZGF0YS5sYXRpdHVkZSArIFwiLGxvbmdpdHVkZTpcIiArIHJlcy5kYXRhLmxvbmdpdHVkZSArIFwiLElQdjQ6XCIgKyByZXMuZGF0YS5JUHY0ICsgXCIsc3RhdGU6XCIgKyByZXMuZGF0YS5zdGF0ZVxyXG4gIC8vIHNldElQKHJlcy5kYXRhLklQdjQpXHJcbiAgLy8gcmV0dXJuXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGJ5dGVzVG9TaXplKGJ5dGVzKSB7XHJcbiAgdmFyIHNpemVzID0gWydCeXRlcycsICdLQicsICdNQicsICdHQicsICdUQiddO1xyXG4gIGlmIChieXRlcyA9PSAwKSByZXR1cm4gJzAgQnl0ZSc7XHJcbiAgdmFyIGkgPSBwYXJzZUludChNYXRoLmZsb29yKE1hdGgubG9nKGJ5dGVzKSAvIE1hdGgubG9nKDEwMjQpKSk7XHJcbiAgcmV0dXJuIE1hdGgucm91bmQoYnl0ZXMgLyBNYXRoLnBvdygxMDI0LCBpKSwgMikgKyAnICcgKyBzaXplc1tpXTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBieXRlc1RvTUIoYnl0ZXMpIHtcclxuICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQoYnl0ZXMgLyAoMTAyNCAqIDEwMjQpKS50b0ZpeGVkKDIpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGVkaWZmKHN0YXJ0RGF0ZSkge1xyXG5cclxuICBjb25zdCB0aW1lRW5kID0gbW9tZW50KCk7XHJcbiAgY29uc3QgbmV3U3RhcnREYXRlID0gbmV3IERhdGUoc3RhcnREYXRlKTtcclxuICBjb25zdCBuZXdFbmREYXRlID0gbmV3IERhdGUodGltZUVuZCk7XHJcbiAgY29uc3Qgb25lX2RheSA9IDEwMDAgKiA2MCAqIDYwICogMjQ7XHJcbiAgbGV0IHJlc3VsdFxyXG4gIHJlc3VsdCA9IE1hdGguY2VpbCgobmV3U3RhcnREYXRlLmdldFRpbWUoKSAtIG5ld0VuZERhdGUuZ2V0VGltZSgpKSAvIChvbmVfZGF5KSlcclxuICBjb25zb2xlLmxvZygnZGF0ZSBDb252ZXJ0ZXIgcmVzdWx0JywgcmVzdWx0KVxyXG5cclxuXHJcbiAgcmV0dXJuIHJlc3VsdCAtIDE7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudERhdGUoc2VwYXJhdG9yID0gJycpIHtcclxuXHJcbiAgbGV0IG5ld0RhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgbGV0IGRhdGUgPSBuZXdEYXRlLmdldERhdGUoKTtcclxuICBsZXQgbW9udGggPSBuZXdEYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gIGxldCB5ZWFyID0gbmV3RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICByZXR1cm4gYCR7eWVhcn0ke3NlcGFyYXRvcn0ke21vbnRoIDwgMTAgPyBgMCR7bW9udGh9YCA6IGAke21vbnRofWB9JHtzZXBhcmF0b3J9JHtkYXRlfWBcclxufVxyXG4iLCJpbXBvcnQgbmV4dENvbm5lY3QgZnJvbSAnbmV4dC1jb25uZWN0JztcclxuY29uc3QgbW9kZWxzID0gcmVxdWlyZSgnLi4vLi4vLi4vZGIvbW9kZWxzL2luZGV4Jyk7XHJcbmltcG9ydCBtaWRkbGV3YXJlIGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvYXV0aCc7XHJcbmNvbnN0IFNlcXVlbGl6ZSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xyXG5jb25zdCBPcCA9IFNlcXVlbGl6ZS5PcDtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBuZXh0Q29ubmVjdCgpXHJcbiAgLy8gTWlkZGxld2FyZVxyXG4gIC51c2UobWlkZGxld2FyZSlcclxuICAvLyBHZXQgbWV0aG9kXHJcbiAgLmdldChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbWV0aG9kLFxyXG4gICAgICBib2R5LFxyXG4gICAgfSA9IHJlcTtcclxuICAgIGNvbnN0IHsgcmVzdWx0cywgcGFnZSwgc2VhcmNoLCBzb3J0RmllbGQgPSBcIm9yZ2FuaXphdGlvbl9pZFwiLCBzb3J0T3JkZXIgPSBcIkRFU0NcIiwgZmlsdGVycyA9IFtdIH0gPSByZXEucXVlcnk7XHJcbiAgICBsZXQgX3NlYXJjaCA9IHt9O1xyXG4gICAgXHJcblxyXG4gICAgaWYgKHNlYXJjaCAhPSBcIlwiKSB7XHJcbiAgICAgIGlmIChmaWx0ZXJzID09ICd1bmRlZmluZWQnIHx8IGZpbHRlcnMgPT0gXCJudWxsXCIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImlmMVwiKVxyXG4gICAgICAgIF9zZWFyY2ggPSB7XHJcbiAgICAgICAgICBpc191c2U6IHtcclxuICAgICAgICAgICAgW09wLm5lXTogMyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBbT3Aub3JdOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBvcmdhbml6YXRpb25fbmFtZV9lbmc6IHtcclxuICAgICAgICAgICAgICAgIFtPcC5saWtlXTogJyUnICsgc2VhcmNoICsgJyUnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgb3JnYW5pemF0aW9uX25hbWU6IHtcclxuICAgICAgICAgICAgICAgIFtPcC5saWtlXTogJyUnICsgc2VhcmNoICsgJyUnXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXSxcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImlmMlwiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcnMpXHJcbiAgICAgICAgX3NlYXJjaCA9IHtcclxuICAgICAgICAgIGlzX3VzZToge1xyXG4gICAgICAgICAgICBbT3AubmVdOiAzLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHBhY2thZ2U6IHtcclxuICAgICAgICAgICAgW09wLmluXTogW2ZpbHRlcnNdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFtPcC5vcl06IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG9yZ2FuaXphdGlvbl9uYW1lX2VuZzoge1xyXG4gICAgICAgICAgICAgICAgW09wLmxpa2VdOiAnJScgKyBzZWFyY2ggKyAnJSdcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBvcmdhbml6YXRpb25fbmFtZToge1xyXG4gICAgICAgICAgICAgICAgW09wLmxpa2VdOiAnJScgKyBzZWFyY2ggKyAnJSdcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdLFxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChmaWx0ZXJzID09ICd1bmRlZmluZWQnIHx8IGZpbHRlcnMgPT0gJ251bGwnKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpZjNcIilcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhmaWx0ZXJzKVxyXG5cclxuICAgICAgICBfc2VhcmNoID0ge1xyXG5cclxuICAgICAgICAgIGlzX3VzZToge1xyXG4gICAgICAgICAgICBbT3AubmVdOiAzLFxyXG4gICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaWY0XCIpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZmlsdGVycylcclxuICAgICAgICBfc2VhcmNoID0ge1xyXG5cclxuICAgICAgICAgIGlzX3VzZToge1xyXG4gICAgICAgICAgICBbT3AubmVdOiAzLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHBhY2thZ2U6IHtcclxuICAgICAgICAgICAgW09wLmluXTogW2ZpbHRlcnNdLFxyXG4gICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhfc2VhcmNoKVxyXG4gICAgY29uc3QgX29yZ2FuaXphdGlvbiA9IGF3YWl0IG1vZGVscy5Pcmdhbml6YXRpb24uZmluZEFuZENvdW50QWxsKHtcclxuICAgICAgLy8gYXR0cmlidXRlczogWydwYWNrYWdlX2lkJywnY29kZV9wYWNrYWdlJywnbmFtZV9wYWNrYWdlJywnc2l6ZV9saW1pdCddIFxyXG4gICAgICBhdHRyaWJ1dGVzOiBbXHJcbiAgICAgICAgJ29yZ2FuaXphdGlvbl9pZCcsICdvcmdhbml6YXRpb25fbmFtZScsICdvcmdhbml6YXRpb25fbmFtZV9lbmcnLCAnb3JnYW5pemF0aW9uX2xvZ28nLFxyXG4gICAgICAgICdvcmdhbml6YXRpb25fZW1haWwnLCAnb3JnYW5pemF0aW9uX2FkZHJlc3MnLCAnb3JnYW5pemF0aW9uX3N1Yl9kaXN0cmljdF9pZCcsICdvcmdhbml6YXRpb25fcGhvbmUnLFxyXG4gICAgICAgICdvcmdhbml6YXRpb25fZmF4JywgJ3RoZW1lJywgJ3RodW1ibmFpbCcsICd0aHVtYm5haWxfbGluaycsICd0aHVtYm5haWxfdXJsJywgJ3Nob3dfaW5kZXgnLFxyXG4gICAgICAgICdnb29nbGVfdmVyaWZ5JywgJ3NvY2lhbF9mYicsICdzb2NpYWxfZmJfcGFnZWlkJywgJ3JzcycsICdnb29nbGVfdGFnX21hbmFnZXIxJywgJ2dvb2dsZV90YWdfbWFuYWdlcjInLFxyXG4gICAgICAgICdkYXRlX2NyZWF0ZWQnLCAnZGF0ZV9leHBpcmVkJywgJ3NpemVfdXNlZCcsICdwYWNrYWdlJywgJ2lzX3VzZSdcclxuICAgICAgXSxcclxuICAgICAgd2hlcmU6IF9zZWFyY2gsXHJcbiAgICAgIG9mZnNldDogcmVzdWx0cyAqIChwYWdlIC0gMSksXHJcbiAgICAgIGxpbWl0OiBwYXJzZUludChyZXN1bHRzKSxcclxuICAgICAgaW5jbHVkZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1vZGVsOiBtb2RlbHMuUGFja2FnZXMsXHJcbiAgICAgICAgICBhczogJ3BhY2thZ2VzJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBvcmRlcjogW1xyXG4gICAgICAgIFtzb3J0RmllbGQgIT0gXCJ1bmRlZmluZWRcIiAmJiBzb3J0T3JkZXIgIT0gXCJ1bmRlZmluZWRcIiA/IHNvcnRGaWVsZCA6IFwib3JnYW5pemF0aW9uX2lkXCIsIHNvcnRPcmRlciAhPSBcInVuZGVmaW5lZFwiID8gc29ydE9yZGVyID09IFwiYXNjZW5kXCIgPyBcIkFTQ1wiIDogXCJERVNDXCIgOiBcIkRFU0NcIl1cclxuICAgICAgXVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICBpbmZvOiB7XHJcbiAgICAgICAgcGFnZTogcGFnZSxcclxuICAgICAgICByZXN1bHRzOiByZXN1bHRzXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlc3VsdHM6IF9vcmdhbml6YXRpb24ucm93cyxcclxuICAgICAgdG90YWxDb3VudDogX29yZ2FuaXphdGlvbi5jb3VudFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1jb25uZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=