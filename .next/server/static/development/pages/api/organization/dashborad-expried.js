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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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

/***/ "./pages/api/organization/dashborad-expried.js":
/*!*****************************************************!*\
  !*** ./pages/api/organization/dashborad-expried.js ***!
  \*****************************************************/
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
    filters = [],
    today,
    willExpried
  } = req.query;
  let _search = {};

  if (search != "") {
    if (filters == 'undefined' || filters == "null") {
      // console.log("if1")
      _search = {
        is_use: {
          [Op.ne]: 3
        },
        date_expired: {
          [Op.lte]: today
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
        date_expired: {
          [Op.lte]: today
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
        },
        date_expired: {
          [Op.lte]: today
        }
      };
    } else {
      // console.log("if4")
      // console.log(filters)
      _search = {
        is_use: {
          [Op.ne]: 3
        },
        date_expired: {
          [Op.lte]: today
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
      results: results,
      today: today,
      willExpried: willExpried
    },
    results: _organization.rows,
    totalCount: _organization.count
  });
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ 12:
/*!***********************************************************!*\
  !*** multi ./pages/api/organization/dashborad-expried.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\govermentlt\pages\api\organization\dashborad-expried.js */"./pages/api/organization/dashborad-expried.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGIvY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9kYi9tb2RlbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9hdXRoLmpzIiwid2VicGFjazovLy8uL21pZGRsZXdhcmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL29yZ2FuaXphdGlvbi9kYXNoYm9yYWQtZXhwcmllZC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvdGVudlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1jb25uZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VxdWVsaXplXCIiXSwibmFtZXMiOlsiZG90ZW52IiwicmVxdWlyZSIsInJlc3VsdCIsImNvbmZpZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZXZlbG9wbWVudCIsInVzZXJuYW1lIiwicHJvY2VzcyIsImVudiIsIkRCX1VTRVIiLCJwYXNzd29yZCIsIkRCX1BBU1MiLCJkYXRhYmFzZSIsIkRCX05BTUUiLCJob3N0IiwiREJfSE9TVCIsImRpYWxlY3QiLCJ0ZXN0IiwibG9nZ2luZyIsInByb2R1Y3Rpb24iLCJkaWFsZWN0T3B0aW9ucyIsInNzbCIsImZzIiwicGF0aCIsIlNlcXVlbGl6ZSIsImJhc2VuYW1lIiwiX19maWxlbmFtZSIsIl9fZGlybmFtZSIsImRiIiwibW9kZWxzIiwiY3dkIiwic2VxdWVsaXplIiwidXNlX2Vudl92YXJpYWJsZSIsInJlYWRkaXJTeW5jIiwiZmlsdGVyIiwiZmlsZSIsImluZGV4T2YiLCJzbGljZSIsImZvckVhY2giLCJtb2RlbCIsImpvaW4iLCJuYW1lIiwiT2JqZWN0Iiwia2V5cyIsIm1vZGVsTmFtZSIsImFzc29jaWF0ZSIsIm1pZGRsZXdhcmUiLCJuZXh0Q29ubmVjdCIsInJlc3RyaWN0ZWQiLCJ1c2UiLCJyZXEiLCJyZXMiLCJuZXh0IiwiYXV0aEhlYWRlciIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwidXNlciIsImluY2x1ZGVzIiwidXJsIiwic2Vzc2lvbklEIiwic3BsaXQiLCJ2ZXJpZnlUb2tlbiIsInN0YXR1c0NvZGUiLCJzZW5kIiwic3RhdHVzIiwiZXJyb3IiLCJTRUNSRVRfS0VZIiwiSldUX0tFWSIsImp3dFRva2VuIiwiand0IiwidmVyaWZ5IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRBcHBDb29raWVzIiwicGFyc2VkSXRlbXMiLCJjb29raWUiLCJjb29raWVzSXRlbXMiLCJjb29raWVzIiwicGFyc2VkSXRlbSIsImRlY29kZVVSSSIsImFic29sdXRlVXJsIiwic2V0TG9jYWxob3N0IiwicHJvdG9jb2wiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsImFkZERheXMiLCJkYXRlIiwiZGF5cyIsIkRhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImZvcm1hdERhdGVXaXRob3V0VGltZSIsImRhdGVTdHJpbmciLCJnZXRVVENGdWxsWWVhciIsImdldFVUQ01vbnRoIiwiZ2V0VVRDRGF0ZSIsImFwaUluc3RhbmNlIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiY2hlY2tJc0xvZ2luIiwidG9rZW4iLCJDb29raWVzIiwiZ2V0IiwiUm91dGVyIiwicHVzaCIsInBhcnNlSnd0IiwiaXNFeHBpcmVkIiwiYmFzZTY0VXJsIiwiYmFzZTY0IiwicmVwbGFjZSIsImpzb25QYXlsb2FkIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiYXRvYiIsIm1hcCIsImMiLCJjaGFyQ29kZUF0IiwidG9TdHJpbmciLCJfanNvblBheWxvYWQiLCJKU09OIiwicGFyc2UiLCJkYXRlTm93IiwicGFyc2VJbnQiLCJleHAiLCJnZXRUaW1lIiwic3Vic3RyaW5nIiwiY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZSIsImRhdGVTcGxpdCIsImNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJXaXRoVGltZSIsImNvbnZlcnREYXRldG9UaGFpRGF0ZSIsIl9kYXRlIiwiY29udmVydE1vbnRodG9UaGFpTW9udGgiLCJjb252ZXJ0WWVhcnRvVGhhaVllYXIiLCJ5ZWFyIiwibW9udGgiLCJjb252ZXJ0RGF0ZXRvQWRkREIiLCJnZXRJUEFkZHJlc3MiLCJkYXRhIiwiY291bnRyeV9jb2RlIiwiY291bnRyeV9uYW1lIiwiY2l0eSIsInBvc3RhbCIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiSVB2NCIsInN0YXRlIiwiYnl0ZXNUb1NpemUiLCJieXRlcyIsInNpemVzIiwiaSIsIk1hdGgiLCJmbG9vciIsInJvdW5kIiwicG93IiwiYnl0ZXNUb01CIiwiTnVtYmVyIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJnZXREYXRlZGlmZiIsInN0YXJ0RGF0ZSIsInRpbWVFbmQiLCJtb21lbnQiLCJuZXdTdGFydERhdGUiLCJuZXdFbmREYXRlIiwib25lX2RheSIsImNlaWwiLCJnZXRDdXJyZW50RGF0ZSIsInNlcGFyYXRvciIsIm5ld0RhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiT3AiLCJoYW5kbGVyIiwibWV0aG9kIiwiYm9keSIsInJlc3VsdHMiLCJwYWdlIiwic2VhcmNoIiwic29ydEZpZWxkIiwic29ydE9yZGVyIiwiZmlsdGVycyIsInRvZGF5Iiwid2lsbEV4cHJpZWQiLCJxdWVyeSIsIl9zZWFyY2giLCJpc191c2UiLCJuZSIsImRhdGVfZXhwaXJlZCIsImx0ZSIsIm9yIiwib3JnYW5pemF0aW9uX25hbWVfZW5nIiwibGlrZSIsIm9yZ2FuaXphdGlvbl9uYW1lIiwicGFja2FnZSIsImluIiwiX29yZ2FuaXphdGlvbiIsIk9yZ2FuaXphdGlvbiIsImZpbmRBbmRDb3VudEFsbCIsImF0dHJpYnV0ZXMiLCJ3aGVyZSIsIm9mZnNldCIsImxpbWl0IiwiaW5jbHVkZSIsIlBhY2thZ2VzIiwiYXMiLCJvcmRlciIsImpzb24iLCJpbmZvIiwicm93cyIsInRvdGFsQ291bnQiLCJjb3VudCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGYTs7QUFDYixNQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsc0JBQUQsQ0FBdEI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHRixNQUFNLENBQUNHLE1BQVAsRUFBZixDLENBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQUMsTUFBTSxDQUFDQyxPQUFQLEdB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U0FBUyxJQUFJLFdBQWIsR0FBMkJBLFNBQVMsSUFBSSxRQUFiLEdBQXdCLEtBQXhCLEdBQWdDLE1BQTNELEdBQW9FLE1BQTNKLENBREs7QUFsQnVELEdBQXBDLENBQTVCOztBQXNCQSxTQUFPbEksR0FBRyxDQUFDYSxNQUFKLENBQVcsR0FBWCxFQUFnQmdKLElBQWhCLENBQXFCO0FBQzFCQyxRQUFJLEVBQUU7QUFDSi9CLFVBQUksRUFBRUEsSUFERjtBQUVKRCxhQUFPLEVBQUVBLE9BRkw7QUFHSk0sV0FBSyxFQUFFQSxLQUhIO0FBSUpDLGlCQUFXLEVBQUVBO0FBSlQsS0FEb0I7QUFPMUJQLFdBQU8sRUFBRW9CLGFBQWEsQ0FBQ2EsSUFQRztBQVExQkMsY0FBVSxFQUFFZCxhQUFhLENBQUNlO0FBUkEsR0FBckIsQ0FBUDtBQVVELENBeElhLENBQWhCO0FBMElldEMsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsc0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFwaVxcb3JnYW5pemF0aW9uXFxkYXNoYm9yYWQtZXhwcmllZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMik7XG4iLCIndXNlIHN0cmljdCc7XHJcbmNvbnN0IGRvdGVudiA9IHJlcXVpcmUoXCJkb3RlbnZcIilcclxuY29uc3QgcmVzdWx0ID0gZG90ZW52LmNvbmZpZygpXHJcblxyXG4vLyBpZiAocmVzdWx0LmVycm9yKSB7XHJcbi8vICAgdGhyb3cgcmVzdWx0LmVycm9yXHJcbi8vIH1cclxuXHJcbi8vIGNvbnNvbGUubG9nKHJlc3VsdC5wYXJzZWQpXHJcblxyXG4vLyBkb3RlbnYuY29uZmlnKHsgcGF0aDogX19kaXJuYW1lICsgJy5lbnYnIH0pO1xyXG4vLyBjb25zb2xlLmxvZyhcInByb2Nlc3MuZW52LkRCX1VTRVJcIik7XHJcbi8vIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LkRCX0hPU1QpO1xyXG4vLyBkb3RlbnYuY29uZmlnKHsgcGF0aDogJy4vY29uZmlnLmVudicgfSk7XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGRldmVsb3BtZW50OiB7XHJcbiAgICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuREJfVVNFUixcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTLFxyXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX05BTUUsXHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxyXG4gICAgZGlhbGVjdDogJ215c3FsJyxcclxuICB9LFxyXG4gIHRlc3Q6IHtcclxuICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxyXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1MsXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSxcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXHJcbiAgICBkaWFsZWN0OiAnbXlzcWwnLFxyXG4gICAgbG9nZ2luZzogZmFsc2UsXHJcbiAgfSxcclxuICBwcm9kdWN0aW9uOiB7XHJcbiAgICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuREJfVVNFUixcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTLFxyXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX05BTUUsXHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxyXG4gICAgZGlhbGVjdDogJ215c3FsJyxcclxuICAgIGRpYWxlY3RPcHRpb25zOiB7XHJcbiAgICAgIHNzbDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xyXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG5jb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcclxuY29uc3QgYmFzZW5hbWUgPSBwYXRoLmJhc2VuYW1lKF9fZmlsZW5hbWUpO1xyXG5jb25zdCBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnO1xyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKF9fZGlybmFtZSArICcvLi4vY29uZmlnL2NvbmZpZy5qcycpW2Vudl07XHJcbmNvbnN0IGRiID0ge307XHJcblxyXG4vKiBDdXN0b20gaGFuZGxlciBmb3IgcmVhZGluZyBjdXJyZW50IHdvcmtpbmcgZGlyZWN0b3J5ICovXHJcbmNvbnN0IG1vZGVscyA9IHByb2Nlc3MuY3dkKCkgKyAnL2RiL21vZGVscy8nIHx8IF9fZGlybmFtZTtcclxuXHJcbmxldCBzZXF1ZWxpemU7XHJcbmlmIChjb25maWcudXNlX2Vudl92YXJpYWJsZSkge1xyXG4gIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUocHJvY2Vzcy5lbnZbY29uZmlnLnVzZV9lbnZfdmFyaWFibGVdLCBjb25maWcpO1xyXG59IGVsc2Uge1xyXG4gIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoXHJcbiAgICBjb25maWcuZGF0YWJhc2UsXHJcbiAgICBjb25maWcudXNlcm5hbWUsXHJcbiAgICBjb25maWcucGFzc3dvcmQsXHJcbiAgICBjb25maWcsXHJcbiAgKTtcclxufVxyXG4vKiBmcy5yZWFkZGlyU3luYyhfX2Rpcm5hbWUpICovXHJcbmZzLnJlYWRkaXJTeW5jKG1vZGVscylcclxuICAuZmlsdGVyKGZpbGUgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgZmlsZS5pbmRleE9mKCcuJykgIT09IDAgJiYgZmlsZSAhPT0gYmFzZW5hbWUgJiYgZmlsZS5zbGljZSgtMykgPT09ICcuanMnXHJcbiAgICApO1xyXG4gIH0pXHJcbiAgLmZvckVhY2goZmlsZSA9PiB7XHJcbiAgICAvKiBjb25zdCBtb2RlbCA9IHNlcXVlbGl6ZVtcImltcG9ydFwiXShwYXRoLmpvaW4oX19kaXJuYW1lLCBmaWxlKSk7ICovXHJcbiAgICBjb25zdCBtb2RlbCA9IHNlcXVlbGl6ZVsnaW1wb3J0J10ocGF0aC5qb2luKG1vZGVscywgZmlsZSkpO1xyXG4gICAgZGJbbW9kZWwubmFtZV0gPSBtb2RlbDtcclxuICB9KTtcclxuXHJcbk9iamVjdC5rZXlzKGRiKS5mb3JFYWNoKG1vZGVsTmFtZSA9PiB7XHJcbiAgaWYgKGRiW21vZGVsTmFtZV0uYXNzb2NpYXRlKSB7XHJcbiAgICBkYlttb2RlbE5hbWVdLmFzc29jaWF0ZShkYik7XHJcbiAgfVxyXG59KTtcclxuXHJcbmRiLnNlcXVlbGl6ZSA9IHNlcXVlbGl6ZTtcclxuZGIuU2VxdWVsaXplID0gU2VxdWVsaXplO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBkYjtcclxuIiwiaW1wb3J0IG5leHRDb25uZWN0IGZyb20gJ25leHQtY29ubmVjdCc7XHJcbmltcG9ydCB7IHZlcmlmeVRva2VuIH0gZnJvbSAnLi91dGlscyc7XHJcblxyXG5jb25zdCBtaWRkbGV3YXJlID0gbmV4dENvbm5lY3QoKTtcclxuXHJcbi8qIFNhbXBsZSB1c2luZyBtaWRkbGV3YXJlICovXHJcbi8qIG1pZGRsZXdhcmUudXNlKGRhdGFiYXNlKS51c2Uoc2Vzc2lvbikudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSkudXNlKHBhc3Nwb3J0LnNlc3Npb24oKSk7ICovXHJcblxyXG4vKiBTZXQgcmVzdHJpY3RlZCBwdWJsaWMgYWNjZXNzIC8gcHV0IGFueSBhcGkgYWNjZXNzIHRoYXQgaXMgcmVzdHJpY3RlZCBpbiBoZXJlICovXHJcbmNvbnN0IHJlc3RyaWN0ZWQgPSBbJy9hcGkvb3JnYW5pemF0aW9uL1tvcmdhbml6YXRpb24taWRdXScsICcvYXBpL2pvYi9bc2x1Z10nXTtcclxuXHJcbi8qXHJcbiAqIEBwYXJhbXMge3JlcXVlc3QsIHJlc3BvbnNlLCBjYWxsYmFja30gZGVmYXVsdCBSZXF1ZXN0IGFuZCBSZXNwb25zZVxyXG4gKiBAcmV0dXJuIHtvYmplY3R9IG9iamVjdCBpZiB0cnVlLCByZXNwb25zZSBtZXNzYWdlIGlmIGZhbHNlIGFuZCBjb250aW51ZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgbWlkZGxld2FyZS51c2UoYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgbGV0IGF1dGhIZWFkZXIgPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uIHx8ICcnO1xyXG4gIGxldCB1c2VyID0ge307XHJcblxyXG4gIGlmICghcmVzdHJpY3RlZC5pbmNsdWRlcyhyZXEudXJsKSAmJiAhYXV0aEhlYWRlcikge1xyXG4gICAgcmV0dXJuIG5leHQoKTtcclxuICB9XHJcbiAgaWYgKGF1dGhIZWFkZXIpIHtcclxuICAgIGxldCBzZXNzaW9uSUQgPSBhdXRoSGVhZGVyLnNwbGl0KCcgJylbMV07XHJcbiAgICBpZiAoc2Vzc2lvbklEKSB7XHJcbiAgICAgIHVzZXIgPSB2ZXJpZnlUb2tlbihzZXNzaW9uSUQpO1xyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIC8qIENvdWxkIHB1dCBjaGVjayBhZ2FpbnN0IHVzZXJzIHRhYmxlcyBpbiBkYXRhYmFzZSAgVXNlci5maW5kKHtlbWFpbDp1c2VyLmVtYWlsfSkgKi9cclxuICAgICAgICByZXEudXNlciA9IHVzZXI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDE7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zZW5kKHtcclxuICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcclxuICAgICAgICAgIGVycm9yOiAnRXhwaXJlZCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDAxO1xyXG4gICAgICByZXR1cm4gcmVzLnNlbmQoe1xyXG4gICAgICAgIHN0YXR1czogJ2Vycm9yJyxcclxuICAgICAgICBlcnJvcjogJ1dyb25nIFRva2VuJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXNDb2RlID0gNDAxO1xyXG4gICAgcmV0dXJuIHJlcy5zZW5kKHtcclxuICAgICAgc3RhdHVzOiAnZXJyb3InLFxyXG4gICAgICBlcnJvcjogJ1VuYXV0aG9yaXplZCcsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIG5leHQoKTtcclxufSk7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IFNFQ1JFVF9LRVkgPSBwcm9jZXNzLmVudi5KV1RfS0VZO1xyXG5cclxuLypcclxuICogQHBhcmFtcyB7and0VG9rZW59IGV4dHJhY3RlZCBmcm9tIGNvb2tpZXNcclxuICogQHJldHVybiB7b2JqZWN0fSBvYmplY3Qgb2YgZXh0cmFjdGVkIHRva2VuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VG9rZW4oand0VG9rZW4pIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGp3dC52ZXJpZnkoand0VG9rZW4sIFNFQ1JFVF9LRVkpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKCdlOicsIGUpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKlxyXG4gKiBAcGFyYW1zIHtyZXF1ZXN0fSBleHRyYWN0ZWQgZnJvbSByZXF1ZXN0IHJlc3BvbnNlXHJcbiAqIEByZXR1cm4ge29iamVjdH0gb2JqZWN0IG9mIHBhcnNlIGp3dCBjb29raWUgZGVjb2RlIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFwcENvb2tpZXMocmVxKSB7XHJcbiAgY29uc3QgcGFyc2VkSXRlbXMgPSB7fTtcclxuICBpZiAocmVxLmhlYWRlcnMuY29va2llKSB7XHJcbiAgICBjb25zdCBjb29raWVzSXRlbXMgPSByZXEuaGVhZGVycy5jb29raWUuc3BsaXQoJzsgJyk7XHJcbiAgICBjb29raWVzSXRlbXMuZm9yRWFjaChjb29raWVzID0+IHtcclxuICAgICAgY29uc3QgcGFyc2VkSXRlbSA9IGNvb2tpZXMuc3BsaXQoJz0nKTtcclxuICAgICAgcGFyc2VkSXRlbXNbcGFyc2VkSXRlbVswXV0gPSBkZWNvZGVVUkkocGFyc2VkSXRlbVsxXSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIHBhcnNlZEl0ZW1zO1xyXG59XHJcblxyXG4vKlxyXG4gKiBAcGFyYW1zIHtyZXF1ZXN0fSBleHRyYWN0ZWQgZnJvbSByZXF1ZXN0IHJlc3BvbnNlLCB7c2V0TG9jYWxob3N0fSB5b3VyIGxvY2FsaG9zdCBhZGRyZXNzXHJcbiAqIEByZXR1cm4ge29iamVjdH0gb2JqZWN0cyBvZiBwcm90b2NvbCwgaG9zdCBhbmQgb3JpZ2luXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWJzb2x1dGVVcmwocmVxLCBzZXRMb2NhbGhvc3QpIHtcclxuICB2YXIgcHJvdG9jb2wgPSAnaHR0cHM6JztcclxuICB2YXIgaG9zdCA9IHJlcVxyXG4gICAgPyByZXEuaGVhZGVyc1sneC1mb3J3YXJkZWQtaG9zdCddIHx8IHJlcS5oZWFkZXJzWydob3N0J11cclxuICAgIDogd2luZG93LmxvY2F0aW9uLmhvc3Q7XHJcbiAgaWYgKGhvc3QuaW5kZXhPZignbG9jYWxob3N0JykgPiAtMSkge1xyXG4gICAgaWYgKHNldExvY2FsaG9zdCkgaG9zdCA9IHNldExvY2FsaG9zdDtcclxuICAgIHByb3RvY29sID0gJ2h0dHA6JztcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3RvY29sOiBwcm90b2NvbCxcclxuICAgIGhvc3Q6IGhvc3QsXHJcbiAgICBvcmlnaW46IHByb3RvY29sICsgJy8vJyArIGhvc3QsXHJcbiAgICB1cmw6IHJlcSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkRGF5cyhkYXRlLCBkYXlzKSB7XHJcbiAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gIHJlc3VsdC5zZXREYXRlKHJlc3VsdC5nZXREYXRlKCkgKyBkYXlzKTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vL1lZWVktTU0tRERcclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGVXaXRob3V0VGltZShkYXRlKSB7XHJcbiAgdmFyIGRhdGVTdHJpbmcgPVxyXG4gICAgZGF0ZS5nZXRVVENGdWxsWWVhcigpICsgXCItXCIgK1xyXG4gICAgKFwiMFwiICsgKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpKS5zbGljZSgtMikgKyBcIi1cIiArXHJcbiAgICAoXCIwXCIgKyBkYXRlLmdldFVUQ0RhdGUoKSkuc2xpY2UoLTIpICsgXCIgXCJcclxuICByZXR1cm4gZGF0ZVN0cmluZztcclxufVxyXG4vLyBjb25zdCBhcGkgPSBwcm9jZXNzLmVudi5QVUJMSUNfVVJMXHJcblxyXG5leHBvcnQgY29uc3QgYXBpSW5zdGFuY2UgPSAoKSA9PiB7XHJcbiAgLy8gY29uc3QgYXV0aG9yaXphdGlvbiA9IHN0b3JlLmdldFN0YXRlKCkudXNlclN0YXRlLnRva2VuID8gc3RvcmUuZ2V0U3RhdGUoKS51c2VyU3RhdGUudG9rZW4gOiBudWxsXHJcblxyXG4gIC8vIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgLy8gXHQneC1hcGktdG9rZW4nOiBhdXRob3JpemF0aW9uID8gYXV0aG9yaXphdGlvbiA6ICcnLFxyXG4gIC8vIH1cclxuXHJcbiAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiAnL2FwaScsXHJcbiAgICAvLyBoZWFkZXJzLFxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja0lzTG9naW4gPSAoKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coXCJjaGVja0lzTG9naW5cIilcclxuICB2YXIgdG9rZW4gPSBDb29raWVzLmdldCgndG9rZW4nKSAvLyA9PiAndmFsdWUnXHJcblxyXG4gIGlmICghdG9rZW4pIHtcclxuICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgLy8gY29uc29sZS5sb2cocGFyc2VKd3QodG9rZW4pKVxyXG4gIHJldHVybiBwYXJzZUp3dCh0b2tlbilcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUp3dCh0b2tlbikge1xyXG5cclxuICB2YXIgaXNFeHBpcmVkID0gZmFsc2U7XHJcbiAgLy8gY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKTtcclxuXHJcblxyXG5cclxuICB2YXIgYmFzZTY0VXJsID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcclxuICB2YXIgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XHJcbiAgdmFyIGpzb25QYXlsb2FkID0gZGVjb2RlVVJJQ29tcG9uZW50KGF0b2IoYmFzZTY0KS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChjKSB7XHJcbiAgICByZXR1cm4gJyUnICsgKCcwMCcgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XHJcbiAgfSkuam9pbignJykpO1xyXG4gIHZhciBfanNvblBheWxvYWQgPSBKU09OLnBhcnNlKGpzb25QYXlsb2FkKVxyXG4gIHZhciBkYXRlTm93ID0gbmV3IERhdGUoKTtcclxuICAvLyBjb25zb2xlLmxvZyhwYXJzZUludChfanNvblBheWxvYWQuZXhwKSlcclxuICAvLyBjb25zb2xlLmxvZyhwYXJzZUludCgoZGF0ZU5vdy5nZXRUaW1lKCkpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsMTApKSlcclxuICBpZiAocGFyc2VJbnQoX2pzb25QYXlsb2FkLmV4cCkgPCBwYXJzZUludCgoZGF0ZU5vdy5nZXRUaW1lKCkpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKSkpIHtcclxuICAgIGNvbnNvbGUubG9nKFwidHJ1ZVwiKVxyXG5cclxuICAgIGlzRXhwaXJlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNFeHBpcmVkKSB7XHJcbiAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcbiAgcmV0dXJuIF9qc29uUGF5bG9hZDtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZShkYXRlKSB7XHJcbiAgdHJ5IHtcclxuICAgIHZhciBkYXRlU3BsaXQgPSBkYXRlLnRvU3RyaW5nKCkuc3BsaXQoXCJUXCIpO1xyXG4gICAgcmV0dXJuIGRhdGVTcGxpdFswXTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJXaXRoVGltZShkYXRlKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vOjA3LjAwMFpcclxuICAgIC8vU2FtcGxlVGV4dC5yZXBsYWNlKFwiRGV2ZWxvcGVyXCIsIFwiQXBwIEJ1aWxkZXJcIik7XHJcbiAgICB2YXIgZGF0ZVNwbGl0ID0gZGF0ZS50b1N0cmluZygpLnNwbGl0KFwiVFwiKTtcclxuICAgIHJldHVybiBkYXRlU3BsaXRbMF0gKyBcIiBcIiArIGRhdGVTcGxpdFsxXS5yZXBsYWNlKFwiLjAwMFpcIiwgXCJcIik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RGF0ZXRvVGhhaURhdGUoZGF0ZSkge1xyXG4gIHZhciBfZGF0ZSA9IGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUoZGF0ZSlcclxuICB2YXIgZGF0ZVNwbGl0ID0gX2RhdGUudG9TdHJpbmcoKS5zcGxpdChcIi1cIik7XHJcbiAgLy8gMjAyMS0wOS0xNlxyXG4gIHJldHVybiBkYXRlU3BsaXRbMl0gKyBcIiBcIiArIGNvbnZlcnRNb250aHRvVGhhaU1vbnRoKGRhdGVTcGxpdFsxXSkgKyBcIiBcIiArIGNvbnZlcnRZZWFydG9UaGFpWWVhcihkYXRlU3BsaXRbMF0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0WWVhcnRvVGhhaVllYXIoeWVhcikge1xyXG4gIHJldHVybiBwYXJzZUludCh5ZWFyKSArIDU0M1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydE1vbnRodG9UaGFpTW9udGgobW9udGgpIHtcclxuICBzd2l0Y2ggKG1vbnRoKSB7XHJcbiAgICBjYXNlIFwiMDFcIjpcclxuICAgICAgcmV0dXJuIFwi4Lih4LiB4Lij4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIwMlwiOlxyXG4gICAgICByZXR1cm4gXCLguIHguLjguKHguKDguLLguJ7guLHguJnguJjguYxcIlxyXG4gICAgY2FzZSBcIjAzXCI6XHJcbiAgICAgIHJldHVybiBcIuC4oeC4teC4meC4suC4hOC4oVwiXHJcbiAgICBjYXNlIFwiMDRcIjpcclxuICAgICAgcmV0dXJuIFwi4LmA4Lih4Lip4Liy4Lii4LiZXCJcclxuICAgIGNhc2UgXCIwNVwiOlxyXG4gICAgICByZXR1cm4gXCLguJ7guKTguKnguKDguLLguITguKFcIlxyXG4gICAgY2FzZSBcIjA2XCI6XHJcbiAgICAgIHJldHVybiBcIuC4oeC4tOC4luC4uOC4meC4suC4ouC4mVwiXHJcbiAgICBjYXNlIFwiMDdcIjpcclxuICAgICAgcmV0dXJuIFwi4LiB4Lij4LiB4LiO4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIwOFwiOlxyXG4gICAgICByZXR1cm4gXCLguKrguLTguIfguKvguLLguITguKFcIlxyXG4gICAgY2FzZSBcIjA5XCI6XHJcbiAgICAgIHJldHVybiBcIuC4geC4seC4meC4ouC4suC4ouC4mVwiXHJcbiAgICBjYXNlIFwiMTBcIjpcclxuICAgICAgcmV0dXJuIFwi4LiV4Li44Lil4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIxMVwiOlxyXG4gICAgICByZXR1cm4gXCLguJ7guKTguKjguIjguLTguIHguLLguKLguJlcIlxyXG4gICAgY2FzZSBcIjEyXCI6XHJcbiAgICAgIHJldHVybiBcIuC4mOC4seC4meC4p+C4suC4hOC4oVwiXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gXCJOQU5cIlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREYXRldG9BZGREQihkYXRlKSB7XHJcbiAgdmFyIGRhdGVTcGxpdCA9IGRhdGUuc3BsaXQoXCIgXCIpO1xyXG4gIHJldHVybiBkYXRlU3BsaXRbMF0gKyBcIlRcIiArIGRhdGVTcGxpdFsxXSArIFwiKzAwOjAwXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJUEFkZHJlc3MoKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2dlb2xvY2F0aW9uLWRiLmNvbS9qc29uLycpXHJcbiAgLy8gY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gIC8vIHJldHVybiByZXMuZGF0YVxyXG4gIHJldHVybiBcImNvdW50cnlfY29kZTpcIiArIHJlcy5kYXRhLmNvdW50cnlfY29kZSArIFwiLGNvdW50cnlfbmFtZTpcIiArIHJlcy5kYXRhLmNvdW50cnlfbmFtZSArIFwiLGNpdHk6XCIgKyByZXMuZGF0YS5jaXR5ICsgXCIscG9zdGFsOlwiICsgcmVzLmRhdGEucG9zdGFsXHJcbiAgICArIFwiLGxhdGl0dWRlOlwiICsgcmVzLmRhdGEubGF0aXR1ZGUgKyBcIixsb25naXR1ZGU6XCIgKyByZXMuZGF0YS5sb25naXR1ZGUgKyBcIixJUHY0OlwiICsgcmVzLmRhdGEuSVB2NCArIFwiLHN0YXRlOlwiICsgcmVzLmRhdGEuc3RhdGVcclxuICAvLyBzZXRJUChyZXMuZGF0YS5JUHY0KVxyXG4gIC8vIHJldHVyblxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBieXRlc1RvU2l6ZShieXRlcykge1xyXG4gIHZhciBzaXplcyA9IFsnQnl0ZXMnLCAnS0InLCAnTUInLCAnR0InLCAnVEInXTtcclxuICBpZiAoYnl0ZXMgPT0gMCkgcmV0dXJuICcwIEJ5dGUnO1xyXG4gIHZhciBpID0gcGFyc2VJbnQoTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZygxMDI0KSkpO1xyXG4gIHJldHVybiBNYXRoLnJvdW5kKGJ5dGVzIC8gTWF0aC5wb3coMTAyNCwgaSksIDIpICsgJyAnICsgc2l6ZXNbaV07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnl0ZXNUb01CKGJ5dGVzKSB7XHJcbiAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KGJ5dGVzIC8gKDEwMjQgKiAxMDI0KSkudG9GaXhlZCgyKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRlZGlmZihzdGFydERhdGUpIHtcclxuXHJcbiAgY29uc3QgdGltZUVuZCA9IG1vbWVudCgpO1xyXG4gIGNvbnN0IG5ld1N0YXJ0RGF0ZSA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XHJcbiAgY29uc3QgbmV3RW5kRGF0ZSA9IG5ldyBEYXRlKHRpbWVFbmQpO1xyXG4gIGNvbnN0IG9uZV9kYXkgPSAxMDAwICogNjAgKiA2MCAqIDI0O1xyXG4gIGxldCByZXN1bHRcclxuICByZXN1bHQgPSBNYXRoLmNlaWwoKG5ld1N0YXJ0RGF0ZS5nZXRUaW1lKCkgLSBuZXdFbmREYXRlLmdldFRpbWUoKSkgLyAob25lX2RheSkpXHJcbiAgY29uc29sZS5sb2coJ2RhdGUgQ29udmVydGVyIHJlc3VsdCcsIHJlc3VsdClcclxuXHJcblxyXG4gIHJldHVybiByZXN1bHQgLSAxO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnREYXRlKHNlcGFyYXRvciA9ICcnKSB7XHJcblxyXG4gIGxldCBuZXdEYXRlID0gbmV3IERhdGUoKVxyXG4gIGxldCBkYXRlID0gbmV3RGF0ZS5nZXREYXRlKCk7XHJcbiAgbGV0IG1vbnRoID0gbmV3RGF0ZS5nZXRNb250aCgpICsgMTtcclxuICBsZXQgeWVhciA9IG5ld0RhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgcmV0dXJuIGAke3llYXJ9JHtzZXBhcmF0b3J9JHttb250aCA8IDEwID8gYDAke21vbnRofWAgOiBgJHttb250aH1gfSR7c2VwYXJhdG9yfSR7ZGF0ZX1gXHJcbn1cclxuIiwiaW1wb3J0IG5leHRDb25uZWN0IGZyb20gJ25leHQtY29ubmVjdCc7XHJcbmNvbnN0IG1vZGVscyA9IHJlcXVpcmUoJy4uLy4uLy4uL2RiL21vZGVscy9pbmRleCcpO1xyXG5pbXBvcnQgbWlkZGxld2FyZSBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL2F1dGgnO1xyXG5jb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcclxuY29uc3QgT3AgPSBTZXF1ZWxpemUuT3A7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gbmV4dENvbm5lY3QoKVxyXG4gIC8vIE1pZGRsZXdhcmVcclxuICAudXNlKG1pZGRsZXdhcmUpXHJcbiAgLy8gR2V0IG1ldGhvZFxyXG4gIC5nZXQoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG1ldGhvZCxcclxuICAgICAgYm9keSxcclxuICAgIH0gPSByZXE7XHJcbiAgICBjb25zdCB7IHJlc3VsdHMsIHBhZ2UsIHNlYXJjaCwgc29ydEZpZWxkID0gXCJvcmdhbml6YXRpb25faWRcIiwgc29ydE9yZGVyID0gXCJERVNDXCIsIGZpbHRlcnMgPSBbXSwgdG9kYXksIHdpbGxFeHByaWVkIH0gPSByZXEucXVlcnk7XHJcbiAgICBsZXQgX3NlYXJjaCA9IHt9O1xyXG5cclxuXHJcbiAgICBpZiAoc2VhcmNoICE9IFwiXCIpIHtcclxuICAgICAgaWYgKGZpbHRlcnMgPT0gJ3VuZGVmaW5lZCcgfHwgZmlsdGVycyA9PSBcIm51bGxcIikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaWYxXCIpXHJcbiAgICAgICAgX3NlYXJjaCA9IHtcclxuICAgICAgICAgIGlzX3VzZToge1xyXG4gICAgICAgICAgICBbT3AubmVdOiAzLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGRhdGVfZXhwaXJlZDoge1xyXG4gICAgICAgICAgICBbT3AubHRlXTogdG9kYXlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBbT3Aub3JdOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBvcmdhbml6YXRpb25fbmFtZV9lbmc6IHtcclxuICAgICAgICAgICAgICAgIFtPcC5saWtlXTogJyUnICsgc2VhcmNoICsgJyUnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgb3JnYW5pemF0aW9uX25hbWU6IHtcclxuICAgICAgICAgICAgICAgIFtPcC5saWtlXTogJyUnICsgc2VhcmNoICsgJyUnXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXSxcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImlmMlwiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcnMpXHJcbiAgICAgICAgX3NlYXJjaCA9IHtcclxuICAgICAgICAgIGlzX3VzZToge1xyXG4gICAgICAgICAgICBbT3AubmVdOiAzLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGRhdGVfZXhwaXJlZDoge1xyXG4gICAgICAgICAgICBbT3AubHRlXTogdG9kYXlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwYWNrYWdlOiB7XHJcbiAgICAgICAgICAgIFtPcC5pbl06IFtmaWx0ZXJzXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBbT3Aub3JdOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBvcmdhbml6YXRpb25fbmFtZV9lbmc6IHtcclxuICAgICAgICAgICAgICAgIFtPcC5saWtlXTogJyUnICsgc2VhcmNoICsgJyUnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgb3JnYW5pemF0aW9uX25hbWU6IHtcclxuICAgICAgICAgICAgICAgIFtPcC5saWtlXTogJyUnICsgc2VhcmNoICsgJyUnXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXSxcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoZmlsdGVycyA9PSAndW5kZWZpbmVkJyB8fCBmaWx0ZXJzID09ICdudWxsJykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaWYzXCIpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZmlsdGVycylcclxuXHJcbiAgICAgICAgX3NlYXJjaCA9IHtcclxuXHJcbiAgICAgICAgICBpc191c2U6IHtcclxuICAgICAgICAgICAgW09wLm5lXTogMyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkYXRlX2V4cGlyZWQ6IHtcclxuICAgICAgICAgICAgW09wLmx0ZV06IHRvZGF5XHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpZjRcIilcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhmaWx0ZXJzKVxyXG4gICAgICAgIF9zZWFyY2ggPSB7XHJcblxyXG4gICAgICAgICAgaXNfdXNlOiB7XHJcbiAgICAgICAgICAgIFtPcC5uZV06IDMsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZGF0ZV9leHBpcmVkOiB7XHJcbiAgICAgICAgICAgIFtPcC5sdGVdOiB0b2RheVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHBhY2thZ2U6IHtcclxuICAgICAgICAgICAgW09wLmluXTogW2ZpbHRlcnNdLFxyXG4gICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhfc2VhcmNoKVxyXG4gICAgY29uc3QgX29yZ2FuaXphdGlvbiA9IGF3YWl0IG1vZGVscy5Pcmdhbml6YXRpb24uZmluZEFuZENvdW50QWxsKHtcclxuICAgICAgLy8gYXR0cmlidXRlczogWydwYWNrYWdlX2lkJywnY29kZV9wYWNrYWdlJywnbmFtZV9wYWNrYWdlJywnc2l6ZV9saW1pdCddIFxyXG4gICAgICBhdHRyaWJ1dGVzOiBbXHJcbiAgICAgICAgJ29yZ2FuaXphdGlvbl9pZCcsICdvcmdhbml6YXRpb25fbmFtZScsICdvcmdhbml6YXRpb25fbmFtZV9lbmcnLCAnb3JnYW5pemF0aW9uX2xvZ28nLFxyXG4gICAgICAgICdvcmdhbml6YXRpb25fZW1haWwnLCAnb3JnYW5pemF0aW9uX2FkZHJlc3MnLCAnb3JnYW5pemF0aW9uX3N1Yl9kaXN0cmljdF9pZCcsICdvcmdhbml6YXRpb25fcGhvbmUnLFxyXG4gICAgICAgICdvcmdhbml6YXRpb25fZmF4JywgJ3RoZW1lJywgJ3RodW1ibmFpbCcsICd0aHVtYm5haWxfbGluaycsICd0aHVtYm5haWxfdXJsJywgJ3Nob3dfaW5kZXgnLFxyXG4gICAgICAgICdnb29nbGVfdmVyaWZ5JywgJ3NvY2lhbF9mYicsICdzb2NpYWxfZmJfcGFnZWlkJywgJ3JzcycsICdnb29nbGVfdGFnX21hbmFnZXIxJywgJ2dvb2dsZV90YWdfbWFuYWdlcjInLFxyXG4gICAgICAgICdkYXRlX2NyZWF0ZWQnLCAnZGF0ZV9leHBpcmVkJywgJ3NpemVfdXNlZCcsICdwYWNrYWdlJywgJ2lzX3VzZSdcclxuICAgICAgXSxcclxuICAgICAgd2hlcmU6IF9zZWFyY2gsXHJcbiAgICAgIG9mZnNldDogcmVzdWx0cyAqIChwYWdlIC0gMSksXHJcbiAgICAgIGxpbWl0OiBwYXJzZUludChyZXN1bHRzKSxcclxuICAgICAgaW5jbHVkZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1vZGVsOiBtb2RlbHMuUGFja2FnZXMsXHJcbiAgICAgICAgICBhczogJ3BhY2thZ2VzJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBvcmRlcjogW1xyXG4gICAgICAgIFtzb3J0RmllbGQgIT0gXCJ1bmRlZmluZWRcIiAmJiBzb3J0T3JkZXIgIT0gXCJ1bmRlZmluZWRcIiA/IHNvcnRGaWVsZCA6IFwib3JnYW5pemF0aW9uX2lkXCIsIHNvcnRPcmRlciAhPSBcInVuZGVmaW5lZFwiID8gc29ydE9yZGVyID09IFwiYXNjZW5kXCIgPyBcIkFTQ1wiIDogXCJERVNDXCIgOiBcIkRFU0NcIl1cclxuICAgICAgXVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICBpbmZvOiB7XHJcbiAgICAgICAgcGFnZTogcGFnZSxcclxuICAgICAgICByZXN1bHRzOiByZXN1bHRzLFxyXG4gICAgICAgIHRvZGF5OiB0b2RheSxcclxuICAgICAgICB3aWxsRXhwcmllZDogd2lsbEV4cHJpZWRcclxuICAgICAgfSxcclxuICAgICAgcmVzdWx0czogX29yZ2FuaXphdGlvbi5yb3dzLFxyXG4gICAgICB0b3RhbENvdW50OiBfb3JnYW5pemF0aW9uLmNvdW50XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWNvbm5lY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==