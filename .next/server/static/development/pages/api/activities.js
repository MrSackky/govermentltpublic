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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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

/***/ "./pages/api/activities/index.js":
/*!***************************************!*\
  !*** ./pages/api/activities/index.js ***!
  \***************************************/
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
    organization_id,
    results,
    page,
    search,
    sortField = "activities_id",
    sortOrder = "DESC",
    filters = []
  } = req.query;
  let _search = {};

  if (search != "") {
    if (filters == 'undefined' || filters == "null") {
      // console.log("if1")
      _search = {
        is_deleted: {
          [Op.ne]: 1
        },
        [Op.or]: [{
          activities_title: {
            [Op.like]: '%' + search + '%'
          }
        }],
        organization_id: organization_id
      };
    } else {
      console.log("if2");
      console.log(filters);
      _search = {
        is_deleted: {
          [Op.ne]: 1
        },
        [Op.or]: [{
          activities_title: {
            [Op.like]: '%' + search + '%'
          }
        }],
        organization_id: organization_id
      };
    }
  } else {
    if (filters == 'undefined' || filters == 'null') {
      // console.log("if3")
      // console.log(filters)
      _search = {
        is_deleted: {
          [Op.ne]: 1
        },
        organization_id: organization_id
      };
    } else {
      // console.log("if4")
      // console.log(filters)
      _search = {
        is_deleted: {
          [Op.ne]: 1
        },
        organization_id: organization_id
      };
    }
  } // console.log(_search)


  const _activities = await models.activities.findAndCountAll({
    attributes: ['activities_id', 'organization_id', 'activities_date', 'activities_title', 'activities_detail', 'activities_image', 'activities_keyword', 'is_slide', 'date_created', 'date_update', 'status_active', 'is_deleted', 'ip'],
    where: _search,
    offset: results * (page - 1),
    limit: parseInt(results),
    order: [[sortField != "undefined" && sortOrder != "undefined" ? sortField : "activities_id", sortOrder != "undefined" ? sortOrder == "ascend" ? "ASC" : "DESC" : "DESC"]]
  });

  return res.status(200).json({
    info: {
      page: page,
      results: results
    },
    results: _activities.rows,
    totalCount: _activities.count
  });
}).delete(async (req, res) => {
  const {
    body
  } = req;
  const {
    slug
  } = req.query;
  const activities_id = slug;

  if (activities_id == undefined) {
    return res.status(200).json({
      status: 201,
      message: 'data incorrect',
      activities_id: activities_id
    });
  }

  const activities = await models.activities.update(dataActivities, {
    where: {
      activities_id: activities_id
    }
  });
  return res.status(200).json({
    status: 200,
    message: 'success',
    activities: activities ? activities : []
  });
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ 10:
/*!*********************************************!*\
  !*** multi ./pages/api/activities/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\govermentlt\pages\api\activities\index.js */"./pages/api/activities/index.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGIvY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9kYi9tb2RlbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9hdXRoLmpzIiwid2VicGFjazovLy8uL21pZGRsZXdhcmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2FjdGl2aXRpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtY29ubmVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcXVlbGl6ZVwiIl0sIm5hbWVzIjpbImRvdGVudiIsInJlcXVpcmUiLCJyZXN1bHQiLCJjb25maWciLCJtb2R1bGUiLCJleHBvcnRzIiwiZGV2ZWxvcG1lbnQiLCJ1c2VybmFtZSIsInByb2Nlc3MiLCJlbnYiLCJEQl9VU0VSIiwicGFzc3dvcmQiLCJEQl9QQVNTIiwiZGF0YWJhc2UiLCJEQl9OQU1FIiwiaG9zdCIsIkRCX0hPU1QiLCJkaWFsZWN0IiwidGVzdCIsImxvZ2dpbmciLCJwcm9kdWN0aW9uIiwiZGlhbGVjdE9wdGlvbnMiLCJzc2wiLCJmcyIsInBhdGgiLCJTZXF1ZWxpemUiLCJiYXNlbmFtZSIsIl9fZmlsZW5hbWUiLCJfX2Rpcm5hbWUiLCJkYiIsIm1vZGVscyIsImN3ZCIsInNlcXVlbGl6ZSIsInVzZV9lbnZfdmFyaWFibGUiLCJyZWFkZGlyU3luYyIsImZpbHRlciIsImZpbGUiLCJpbmRleE9mIiwic2xpY2UiLCJmb3JFYWNoIiwibW9kZWwiLCJqb2luIiwibmFtZSIsIk9iamVjdCIsImtleXMiLCJtb2RlbE5hbWUiLCJhc3NvY2lhdGUiLCJtaWRkbGV3YXJlIiwibmV4dENvbm5lY3QiLCJyZXN0cmljdGVkIiwidXNlIiwicmVxIiwicmVzIiwibmV4dCIsImF1dGhIZWFkZXIiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInVzZXIiLCJpbmNsdWRlcyIsInVybCIsInNlc3Npb25JRCIsInNwbGl0IiwidmVyaWZ5VG9rZW4iLCJzdGF0dXNDb2RlIiwic2VuZCIsInN0YXR1cyIsImVycm9yIiwiU0VDUkVUX0tFWSIsIkpXVF9LRVkiLCJqd3RUb2tlbiIsImp3dCIsInZlcmlmeSIsImUiLCJjb25zb2xlIiwibG9nIiwiZ2V0QXBwQ29va2llcyIsInBhcnNlZEl0ZW1zIiwiY29va2llIiwiY29va2llc0l0ZW1zIiwiY29va2llcyIsInBhcnNlZEl0ZW0iLCJkZWNvZGVVUkkiLCJhYnNvbHV0ZVVybCIsInNldExvY2FsaG9zdCIsInByb3RvY29sIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJhZGREYXlzIiwiZGF0ZSIsImRheXMiLCJEYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJmb3JtYXREYXRlV2l0aG91dFRpbWUiLCJkYXRlU3RyaW5nIiwiZ2V0VVRDRnVsbFllYXIiLCJnZXRVVENNb250aCIsImdldFVUQ0RhdGUiLCJhcGlJbnN0YW5jZSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsImNoZWNrSXNMb2dpbiIsInRva2VuIiwiQ29va2llcyIsImdldCIsIlJvdXRlciIsInB1c2giLCJwYXJzZUp3dCIsImlzRXhwaXJlZCIsImJhc2U2NFVybCIsImJhc2U2NCIsInJlcGxhY2UiLCJqc29uUGF5bG9hZCIsImRlY29kZVVSSUNvbXBvbmVudCIsImF0b2IiLCJtYXAiLCJjIiwiY2hhckNvZGVBdCIsInRvU3RyaW5nIiwiX2pzb25QYXlsb2FkIiwiSlNPTiIsInBhcnNlIiwiZGF0ZU5vdyIsInBhcnNlSW50IiwiZXhwIiwiZ2V0VGltZSIsInN1YnN0cmluZyIsImNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUiLCJkYXRlU3BsaXQiLCJjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyV2l0aFRpbWUiLCJjb252ZXJ0RGF0ZXRvVGhhaURhdGUiLCJfZGF0ZSIsImNvbnZlcnRNb250aHRvVGhhaU1vbnRoIiwiY29udmVydFllYXJ0b1RoYWlZZWFyIiwieWVhciIsIm1vbnRoIiwiY29udmVydERhdGV0b0FkZERCIiwiZ2V0SVBBZGRyZXNzIiwiZGF0YSIsImNvdW50cnlfY29kZSIsImNvdW50cnlfbmFtZSIsImNpdHkiLCJwb3N0YWwiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIklQdjQiLCJzdGF0ZSIsImJ5dGVzVG9TaXplIiwiYnl0ZXMiLCJzaXplcyIsImkiLCJNYXRoIiwiZmxvb3IiLCJyb3VuZCIsInBvdyIsImJ5dGVzVG9NQiIsIk51bWJlciIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiZ2V0RGF0ZWRpZmYiLCJzdGFydERhdGUiLCJ0aW1lRW5kIiwibW9tZW50IiwibmV3U3RhcnREYXRlIiwibmV3RW5kRGF0ZSIsIm9uZV9kYXkiLCJjZWlsIiwiZ2V0Q3VycmVudERhdGUiLCJzZXBhcmF0b3IiLCJuZXdEYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsIk9wIiwiaGFuZGxlciIsIm1ldGhvZCIsImJvZHkiLCJvcmdhbml6YXRpb25faWQiLCJyZXN1bHRzIiwicGFnZSIsInNlYXJjaCIsInNvcnRGaWVsZCIsInNvcnRPcmRlciIsImZpbHRlcnMiLCJxdWVyeSIsIl9zZWFyY2giLCJpc19kZWxldGVkIiwibmUiLCJvciIsImFjdGl2aXRpZXNfdGl0bGUiLCJsaWtlIiwiX2FjdGl2aXRpZXMiLCJhY3Rpdml0aWVzIiwiZmluZEFuZENvdW50QWxsIiwiYXR0cmlidXRlcyIsIndoZXJlIiwib2Zmc2V0IiwibGltaXQiLCJvcmRlciIsImpzb24iLCJpbmZvIiwicm93cyIsInRvdGFsQ291bnQiLCJjb3VudCIsImRlbGV0ZSIsInNsdWciLCJhY3Rpdml0aWVzX2lkIiwidW5kZWZpbmVkIiwibWVzc2FnZSIsInVwZGF0ZSIsImRhdGFBY3Rpdml0aWVzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZhOztBQUNiLE1BQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxzQkFBRCxDQUF0Qjs7QUFDQSxNQUFNQyxNQUFNLEdBQUdGLE1BQU0sQ0FBQ0csTUFBUCxFQUFmLEMsQ0FFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZkMsYUFBVyxFQUFFO0FBQ1hD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QkFBYSxFQUFFQTtBQURWO0FBRHlELEdBQXpDLENBQXpCO0FBTUEsU0FBTzNKLEdBQUcsQ0FBQ2EsTUFBSixDQUFXLEdBQVgsRUFBZ0J1SSxJQUFoQixDQUFxQjtBQUMxQnZJLFVBQU0sRUFBRSxHQURrQjtBQUUxQmdKLFdBQU8sRUFBRSxTQUZpQjtBQUcxQmhCLGNBQVUsRUFBRUEsVUFBVSxHQUFHQSxVQUFILEdBQWdCO0FBSFosR0FBckIsQ0FBUDtBQUtELENBN0hhLENBQWhCO0FBK0hlbEIsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsc0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFwaVxcYWN0aXZpdGllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMCk7XG4iLCIndXNlIHN0cmljdCc7XHJcbmNvbnN0IGRvdGVudiA9IHJlcXVpcmUoXCJkb3RlbnZcIilcclxuY29uc3QgcmVzdWx0ID0gZG90ZW52LmNvbmZpZygpXHJcblxyXG4vLyBpZiAocmVzdWx0LmVycm9yKSB7XHJcbi8vICAgdGhyb3cgcmVzdWx0LmVycm9yXHJcbi8vIH1cclxuXHJcbi8vIGNvbnNvbGUubG9nKHJlc3VsdC5wYXJzZWQpXHJcblxyXG4vLyBkb3RlbnYuY29uZmlnKHsgcGF0aDogX19kaXJuYW1lICsgJy5lbnYnIH0pO1xyXG4vLyBjb25zb2xlLmxvZyhcInByb2Nlc3MuZW52LkRCX1VTRVJcIik7XHJcbi8vIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LkRCX0hPU1QpO1xyXG4vLyBkb3RlbnYuY29uZmlnKHsgcGF0aDogJy4vY29uZmlnLmVudicgfSk7XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGRldmVsb3BtZW50OiB7XHJcbiAgICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuREJfVVNFUixcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTLFxyXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX05BTUUsXHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxyXG4gICAgZGlhbGVjdDogJ215c3FsJyxcclxuICB9LFxyXG4gIHRlc3Q6IHtcclxuICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxyXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1MsXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSxcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXHJcbiAgICBkaWFsZWN0OiAnbXlzcWwnLFxyXG4gICAgbG9nZ2luZzogZmFsc2UsXHJcbiAgfSxcclxuICBwcm9kdWN0aW9uOiB7XHJcbiAgICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuREJfVVNFUixcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTLFxyXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX05BTUUsXHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxyXG4gICAgZGlhbGVjdDogJ215c3FsJyxcclxuICAgIGRpYWxlY3RPcHRpb25zOiB7XHJcbiAgICAgIHNzbDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xyXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG5jb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcclxuY29uc3QgYmFzZW5hbWUgPSBwYXRoLmJhc2VuYW1lKF9fZmlsZW5hbWUpO1xyXG5jb25zdCBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnO1xyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKF9fZGlybmFtZSArICcvLi4vY29uZmlnL2NvbmZpZy5qcycpW2Vudl07XHJcbmNvbnN0IGRiID0ge307XHJcblxyXG4vKiBDdXN0b20gaGFuZGxlciBmb3IgcmVhZGluZyBjdXJyZW50IHdvcmtpbmcgZGlyZWN0b3J5ICovXHJcbmNvbnN0IG1vZGVscyA9IHByb2Nlc3MuY3dkKCkgKyAnL2RiL21vZGVscy8nIHx8IF9fZGlybmFtZTtcclxuXHJcbmxldCBzZXF1ZWxpemU7XHJcbmlmIChjb25maWcudXNlX2Vudl92YXJpYWJsZSkge1xyXG4gIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUocHJvY2Vzcy5lbnZbY29uZmlnLnVzZV9lbnZfdmFyaWFibGVdLCBjb25maWcpO1xyXG59IGVsc2Uge1xyXG4gIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoXHJcbiAgICBjb25maWcuZGF0YWJhc2UsXHJcbiAgICBjb25maWcudXNlcm5hbWUsXHJcbiAgICBjb25maWcucGFzc3dvcmQsXHJcbiAgICBjb25maWcsXHJcbiAgKTtcclxufVxyXG4vKiBmcy5yZWFkZGlyU3luYyhfX2Rpcm5hbWUpICovXHJcbmZzLnJlYWRkaXJTeW5jKG1vZGVscylcclxuICAuZmlsdGVyKGZpbGUgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgZmlsZS5pbmRleE9mKCcuJykgIT09IDAgJiYgZmlsZSAhPT0gYmFzZW5hbWUgJiYgZmlsZS5zbGljZSgtMykgPT09ICcuanMnXHJcbiAgICApO1xyXG4gIH0pXHJcbiAgLmZvckVhY2goZmlsZSA9PiB7XHJcbiAgICAvKiBjb25zdCBtb2RlbCA9IHNlcXVlbGl6ZVtcImltcG9ydFwiXShwYXRoLmpvaW4oX19kaXJuYW1lLCBmaWxlKSk7ICovXHJcbiAgICBjb25zdCBtb2RlbCA9IHNlcXVlbGl6ZVsnaW1wb3J0J10ocGF0aC5qb2luKG1vZGVscywgZmlsZSkpO1xyXG4gICAgZGJbbW9kZWwubmFtZV0gPSBtb2RlbDtcclxuICB9KTtcclxuXHJcbk9iamVjdC5rZXlzKGRiKS5mb3JFYWNoKG1vZGVsTmFtZSA9PiB7XHJcbiAgaWYgKGRiW21vZGVsTmFtZV0uYXNzb2NpYXRlKSB7XHJcbiAgICBkYlttb2RlbE5hbWVdLmFzc29jaWF0ZShkYik7XHJcbiAgfVxyXG59KTtcclxuXHJcbmRiLnNlcXVlbGl6ZSA9IHNlcXVlbGl6ZTtcclxuZGIuU2VxdWVsaXplID0gU2VxdWVsaXplO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBkYjtcclxuIiwiaW1wb3J0IG5leHRDb25uZWN0IGZyb20gJ25leHQtY29ubmVjdCc7XHJcbmltcG9ydCB7IHZlcmlmeVRva2VuIH0gZnJvbSAnLi91dGlscyc7XHJcblxyXG5jb25zdCBtaWRkbGV3YXJlID0gbmV4dENvbm5lY3QoKTtcclxuXHJcbi8qIFNhbXBsZSB1c2luZyBtaWRkbGV3YXJlICovXHJcbi8qIG1pZGRsZXdhcmUudXNlKGRhdGFiYXNlKS51c2Uoc2Vzc2lvbikudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSkudXNlKHBhc3Nwb3J0LnNlc3Npb24oKSk7ICovXHJcblxyXG4vKiBTZXQgcmVzdHJpY3RlZCBwdWJsaWMgYWNjZXNzIC8gcHV0IGFueSBhcGkgYWNjZXNzIHRoYXQgaXMgcmVzdHJpY3RlZCBpbiBoZXJlICovXHJcbmNvbnN0IHJlc3RyaWN0ZWQgPSBbJy9hcGkvb3JnYW5pemF0aW9uL1tvcmdhbml6YXRpb24taWRdXScsICcvYXBpL2pvYi9bc2x1Z10nXTtcclxuXHJcbi8qXHJcbiAqIEBwYXJhbXMge3JlcXVlc3QsIHJlc3BvbnNlLCBjYWxsYmFja30gZGVmYXVsdCBSZXF1ZXN0IGFuZCBSZXNwb25zZVxyXG4gKiBAcmV0dXJuIHtvYmplY3R9IG9iamVjdCBpZiB0cnVlLCByZXNwb25zZSBtZXNzYWdlIGlmIGZhbHNlIGFuZCBjb250aW51ZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgbWlkZGxld2FyZS51c2UoYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgbGV0IGF1dGhIZWFkZXIgPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uIHx8ICcnO1xyXG4gIGxldCB1c2VyID0ge307XHJcblxyXG4gIGlmICghcmVzdHJpY3RlZC5pbmNsdWRlcyhyZXEudXJsKSAmJiAhYXV0aEhlYWRlcikge1xyXG4gICAgcmV0dXJuIG5leHQoKTtcclxuICB9XHJcbiAgaWYgKGF1dGhIZWFkZXIpIHtcclxuICAgIGxldCBzZXNzaW9uSUQgPSBhdXRoSGVhZGVyLnNwbGl0KCcgJylbMV07XHJcbiAgICBpZiAoc2Vzc2lvbklEKSB7XHJcbiAgICAgIHVzZXIgPSB2ZXJpZnlUb2tlbihzZXNzaW9uSUQpO1xyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIC8qIENvdWxkIHB1dCBjaGVjayBhZ2FpbnN0IHVzZXJzIHRhYmxlcyBpbiBkYXRhYmFzZSAgVXNlci5maW5kKHtlbWFpbDp1c2VyLmVtYWlsfSkgKi9cclxuICAgICAgICByZXEudXNlciA9IHVzZXI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDE7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zZW5kKHtcclxuICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcclxuICAgICAgICAgIGVycm9yOiAnRXhwaXJlZCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDAxO1xyXG4gICAgICByZXR1cm4gcmVzLnNlbmQoe1xyXG4gICAgICAgIHN0YXR1czogJ2Vycm9yJyxcclxuICAgICAgICBlcnJvcjogJ1dyb25nIFRva2VuJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXNDb2RlID0gNDAxO1xyXG4gICAgcmV0dXJuIHJlcy5zZW5kKHtcclxuICAgICAgc3RhdHVzOiAnZXJyb3InLFxyXG4gICAgICBlcnJvcjogJ1VuYXV0aG9yaXplZCcsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIG5leHQoKTtcclxufSk7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IFNFQ1JFVF9LRVkgPSBwcm9jZXNzLmVudi5KV1RfS0VZO1xyXG5cclxuLypcclxuICogQHBhcmFtcyB7and0VG9rZW59IGV4dHJhY3RlZCBmcm9tIGNvb2tpZXNcclxuICogQHJldHVybiB7b2JqZWN0fSBvYmplY3Qgb2YgZXh0cmFjdGVkIHRva2VuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VG9rZW4oand0VG9rZW4pIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGp3dC52ZXJpZnkoand0VG9rZW4sIFNFQ1JFVF9LRVkpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKCdlOicsIGUpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKlxyXG4gKiBAcGFyYW1zIHtyZXF1ZXN0fSBleHRyYWN0ZWQgZnJvbSByZXF1ZXN0IHJlc3BvbnNlXHJcbiAqIEByZXR1cm4ge29iamVjdH0gb2JqZWN0IG9mIHBhcnNlIGp3dCBjb29raWUgZGVjb2RlIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFwcENvb2tpZXMocmVxKSB7XHJcbiAgY29uc3QgcGFyc2VkSXRlbXMgPSB7fTtcclxuICBpZiAocmVxLmhlYWRlcnMuY29va2llKSB7XHJcbiAgICBjb25zdCBjb29raWVzSXRlbXMgPSByZXEuaGVhZGVycy5jb29raWUuc3BsaXQoJzsgJyk7XHJcbiAgICBjb29raWVzSXRlbXMuZm9yRWFjaChjb29raWVzID0+IHtcclxuICAgICAgY29uc3QgcGFyc2VkSXRlbSA9IGNvb2tpZXMuc3BsaXQoJz0nKTtcclxuICAgICAgcGFyc2VkSXRlbXNbcGFyc2VkSXRlbVswXV0gPSBkZWNvZGVVUkkocGFyc2VkSXRlbVsxXSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIHBhcnNlZEl0ZW1zO1xyXG59XHJcblxyXG4vKlxyXG4gKiBAcGFyYW1zIHtyZXF1ZXN0fSBleHRyYWN0ZWQgZnJvbSByZXF1ZXN0IHJlc3BvbnNlLCB7c2V0TG9jYWxob3N0fSB5b3VyIGxvY2FsaG9zdCBhZGRyZXNzXHJcbiAqIEByZXR1cm4ge29iamVjdH0gb2JqZWN0cyBvZiBwcm90b2NvbCwgaG9zdCBhbmQgb3JpZ2luXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWJzb2x1dGVVcmwocmVxLCBzZXRMb2NhbGhvc3QpIHtcclxuICB2YXIgcHJvdG9jb2wgPSAnaHR0cHM6JztcclxuICB2YXIgaG9zdCA9IHJlcVxyXG4gICAgPyByZXEuaGVhZGVyc1sneC1mb3J3YXJkZWQtaG9zdCddIHx8IHJlcS5oZWFkZXJzWydob3N0J11cclxuICAgIDogd2luZG93LmxvY2F0aW9uLmhvc3Q7XHJcbiAgaWYgKGhvc3QuaW5kZXhPZignbG9jYWxob3N0JykgPiAtMSkge1xyXG4gICAgaWYgKHNldExvY2FsaG9zdCkgaG9zdCA9IHNldExvY2FsaG9zdDtcclxuICAgIHByb3RvY29sID0gJ2h0dHA6JztcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3RvY29sOiBwcm90b2NvbCxcclxuICAgIGhvc3Q6IGhvc3QsXHJcbiAgICBvcmlnaW46IHByb3RvY29sICsgJy8vJyArIGhvc3QsXHJcbiAgICB1cmw6IHJlcSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkRGF5cyhkYXRlLCBkYXlzKSB7XHJcbiAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gIHJlc3VsdC5zZXREYXRlKHJlc3VsdC5nZXREYXRlKCkgKyBkYXlzKTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vL1lZWVktTU0tRERcclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGVXaXRob3V0VGltZShkYXRlKSB7XHJcbiAgdmFyIGRhdGVTdHJpbmcgPVxyXG4gICAgZGF0ZS5nZXRVVENGdWxsWWVhcigpICsgXCItXCIgK1xyXG4gICAgKFwiMFwiICsgKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpKS5zbGljZSgtMikgKyBcIi1cIiArXHJcbiAgICAoXCIwXCIgKyBkYXRlLmdldFVUQ0RhdGUoKSkuc2xpY2UoLTIpICsgXCIgXCJcclxuICByZXR1cm4gZGF0ZVN0cmluZztcclxufVxyXG4vLyBjb25zdCBhcGkgPSBwcm9jZXNzLmVudi5QVUJMSUNfVVJMXHJcblxyXG5leHBvcnQgY29uc3QgYXBpSW5zdGFuY2UgPSAoKSA9PiB7XHJcbiAgLy8gY29uc3QgYXV0aG9yaXphdGlvbiA9IHN0b3JlLmdldFN0YXRlKCkudXNlclN0YXRlLnRva2VuID8gc3RvcmUuZ2V0U3RhdGUoKS51c2VyU3RhdGUudG9rZW4gOiBudWxsXHJcblxyXG4gIC8vIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgLy8gXHQneC1hcGktdG9rZW4nOiBhdXRob3JpemF0aW9uID8gYXV0aG9yaXphdGlvbiA6ICcnLFxyXG4gIC8vIH1cclxuXHJcbiAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiAnL2FwaScsXHJcbiAgICAvLyBoZWFkZXJzLFxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja0lzTG9naW4gPSAoKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coXCJjaGVja0lzTG9naW5cIilcclxuICB2YXIgdG9rZW4gPSBDb29raWVzLmdldCgndG9rZW4nKSAvLyA9PiAndmFsdWUnXHJcblxyXG4gIGlmICghdG9rZW4pIHtcclxuICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgLy8gY29uc29sZS5sb2cocGFyc2VKd3QodG9rZW4pKVxyXG4gIHJldHVybiBwYXJzZUp3dCh0b2tlbilcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUp3dCh0b2tlbikge1xyXG5cclxuICB2YXIgaXNFeHBpcmVkID0gZmFsc2U7XHJcbiAgLy8gY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKTtcclxuXHJcblxyXG5cclxuICB2YXIgYmFzZTY0VXJsID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcclxuICB2YXIgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XHJcbiAgdmFyIGpzb25QYXlsb2FkID0gZGVjb2RlVVJJQ29tcG9uZW50KGF0b2IoYmFzZTY0KS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChjKSB7XHJcbiAgICByZXR1cm4gJyUnICsgKCcwMCcgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XHJcbiAgfSkuam9pbignJykpO1xyXG4gIHZhciBfanNvblBheWxvYWQgPSBKU09OLnBhcnNlKGpzb25QYXlsb2FkKVxyXG4gIHZhciBkYXRlTm93ID0gbmV3IERhdGUoKTtcclxuICAvLyBjb25zb2xlLmxvZyhwYXJzZUludChfanNvblBheWxvYWQuZXhwKSlcclxuICAvLyBjb25zb2xlLmxvZyhwYXJzZUludCgoZGF0ZU5vdy5nZXRUaW1lKCkpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsMTApKSlcclxuICBpZiAocGFyc2VJbnQoX2pzb25QYXlsb2FkLmV4cCkgPCBwYXJzZUludCgoZGF0ZU5vdy5nZXRUaW1lKCkpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKSkpIHtcclxuICAgIGNvbnNvbGUubG9nKFwidHJ1ZVwiKVxyXG5cclxuICAgIGlzRXhwaXJlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNFeHBpcmVkKSB7XHJcbiAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcbiAgcmV0dXJuIF9qc29uUGF5bG9hZDtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZShkYXRlKSB7XHJcbiAgdHJ5IHtcclxuICAgIHZhciBkYXRlU3BsaXQgPSBkYXRlLnRvU3RyaW5nKCkuc3BsaXQoXCJUXCIpO1xyXG4gICAgcmV0dXJuIGRhdGVTcGxpdFswXTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJXaXRoVGltZShkYXRlKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vOjA3LjAwMFpcclxuICAgIC8vU2FtcGxlVGV4dC5yZXBsYWNlKFwiRGV2ZWxvcGVyXCIsIFwiQXBwIEJ1aWxkZXJcIik7XHJcbiAgICB2YXIgZGF0ZVNwbGl0ID0gZGF0ZS50b1N0cmluZygpLnNwbGl0KFwiVFwiKTtcclxuICAgIHJldHVybiBkYXRlU3BsaXRbMF0gKyBcIiBcIiArIGRhdGVTcGxpdFsxXS5yZXBsYWNlKFwiLjAwMFpcIiwgXCJcIik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RGF0ZXRvVGhhaURhdGUoZGF0ZSkge1xyXG4gIHZhciBfZGF0ZSA9IGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUoZGF0ZSlcclxuICB2YXIgZGF0ZVNwbGl0ID0gX2RhdGUudG9TdHJpbmcoKS5zcGxpdChcIi1cIik7XHJcbiAgLy8gMjAyMS0wOS0xNlxyXG4gIHJldHVybiBkYXRlU3BsaXRbMl0gKyBcIiBcIiArIGNvbnZlcnRNb250aHRvVGhhaU1vbnRoKGRhdGVTcGxpdFsxXSkgKyBcIiBcIiArIGNvbnZlcnRZZWFydG9UaGFpWWVhcihkYXRlU3BsaXRbMF0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0WWVhcnRvVGhhaVllYXIoeWVhcikge1xyXG4gIHJldHVybiBwYXJzZUludCh5ZWFyKSArIDU0M1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydE1vbnRodG9UaGFpTW9udGgobW9udGgpIHtcclxuICBzd2l0Y2ggKG1vbnRoKSB7XHJcbiAgICBjYXNlIFwiMDFcIjpcclxuICAgICAgcmV0dXJuIFwi4Lih4LiB4Lij4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIwMlwiOlxyXG4gICAgICByZXR1cm4gXCLguIHguLjguKHguKDguLLguJ7guLHguJnguJjguYxcIlxyXG4gICAgY2FzZSBcIjAzXCI6XHJcbiAgICAgIHJldHVybiBcIuC4oeC4teC4meC4suC4hOC4oVwiXHJcbiAgICBjYXNlIFwiMDRcIjpcclxuICAgICAgcmV0dXJuIFwi4LmA4Lih4Lip4Liy4Lii4LiZXCJcclxuICAgIGNhc2UgXCIwNVwiOlxyXG4gICAgICByZXR1cm4gXCLguJ7guKTguKnguKDguLLguITguKFcIlxyXG4gICAgY2FzZSBcIjA2XCI6XHJcbiAgICAgIHJldHVybiBcIuC4oeC4tOC4luC4uOC4meC4suC4ouC4mVwiXHJcbiAgICBjYXNlIFwiMDdcIjpcclxuICAgICAgcmV0dXJuIFwi4LiB4Lij4LiB4LiO4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIwOFwiOlxyXG4gICAgICByZXR1cm4gXCLguKrguLTguIfguKvguLLguITguKFcIlxyXG4gICAgY2FzZSBcIjA5XCI6XHJcbiAgICAgIHJldHVybiBcIuC4geC4seC4meC4ouC4suC4ouC4mVwiXHJcbiAgICBjYXNlIFwiMTBcIjpcclxuICAgICAgcmV0dXJuIFwi4LiV4Li44Lil4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIxMVwiOlxyXG4gICAgICByZXR1cm4gXCLguJ7guKTguKjguIjguLTguIHguLLguKLguJlcIlxyXG4gICAgY2FzZSBcIjEyXCI6XHJcbiAgICAgIHJldHVybiBcIuC4mOC4seC4meC4p+C4suC4hOC4oVwiXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gXCJOQU5cIlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREYXRldG9BZGREQihkYXRlKSB7XHJcbiAgdmFyIGRhdGVTcGxpdCA9IGRhdGUuc3BsaXQoXCIgXCIpO1xyXG4gIHJldHVybiBkYXRlU3BsaXRbMF0gKyBcIlRcIiArIGRhdGVTcGxpdFsxXSArIFwiKzAwOjAwXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJUEFkZHJlc3MoKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2dlb2xvY2F0aW9uLWRiLmNvbS9qc29uLycpXHJcbiAgLy8gY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gIC8vIHJldHVybiByZXMuZGF0YVxyXG4gIHJldHVybiBcImNvdW50cnlfY29kZTpcIiArIHJlcy5kYXRhLmNvdW50cnlfY29kZSArIFwiLGNvdW50cnlfbmFtZTpcIiArIHJlcy5kYXRhLmNvdW50cnlfbmFtZSArIFwiLGNpdHk6XCIgKyByZXMuZGF0YS5jaXR5ICsgXCIscG9zdGFsOlwiICsgcmVzLmRhdGEucG9zdGFsXHJcbiAgICArIFwiLGxhdGl0dWRlOlwiICsgcmVzLmRhdGEubGF0aXR1ZGUgKyBcIixsb25naXR1ZGU6XCIgKyByZXMuZGF0YS5sb25naXR1ZGUgKyBcIixJUHY0OlwiICsgcmVzLmRhdGEuSVB2NCArIFwiLHN0YXRlOlwiICsgcmVzLmRhdGEuc3RhdGVcclxuICAvLyBzZXRJUChyZXMuZGF0YS5JUHY0KVxyXG4gIC8vIHJldHVyblxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBieXRlc1RvU2l6ZShieXRlcykge1xyXG4gIHZhciBzaXplcyA9IFsnQnl0ZXMnLCAnS0InLCAnTUInLCAnR0InLCAnVEInXTtcclxuICBpZiAoYnl0ZXMgPT0gMCkgcmV0dXJuICcwIEJ5dGUnO1xyXG4gIHZhciBpID0gcGFyc2VJbnQoTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZygxMDI0KSkpO1xyXG4gIHJldHVybiBNYXRoLnJvdW5kKGJ5dGVzIC8gTWF0aC5wb3coMTAyNCwgaSksIDIpICsgJyAnICsgc2l6ZXNbaV07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnl0ZXNUb01CKGJ5dGVzKSB7XHJcbiAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KGJ5dGVzIC8gKDEwMjQgKiAxMDI0KSkudG9GaXhlZCgyKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRlZGlmZihzdGFydERhdGUpIHtcclxuXHJcbiAgY29uc3QgdGltZUVuZCA9IG1vbWVudCgpO1xyXG4gIGNvbnN0IG5ld1N0YXJ0RGF0ZSA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XHJcbiAgY29uc3QgbmV3RW5kRGF0ZSA9IG5ldyBEYXRlKHRpbWVFbmQpO1xyXG4gIGNvbnN0IG9uZV9kYXkgPSAxMDAwICogNjAgKiA2MCAqIDI0O1xyXG4gIGxldCByZXN1bHRcclxuICByZXN1bHQgPSBNYXRoLmNlaWwoKG5ld1N0YXJ0RGF0ZS5nZXRUaW1lKCkgLSBuZXdFbmREYXRlLmdldFRpbWUoKSkgLyAob25lX2RheSkpXHJcbiAgY29uc29sZS5sb2coJ2RhdGUgQ29udmVydGVyIHJlc3VsdCcsIHJlc3VsdClcclxuXHJcblxyXG4gIHJldHVybiByZXN1bHQgLSAxO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnREYXRlKHNlcGFyYXRvciA9ICcnKSB7XHJcblxyXG4gIGxldCBuZXdEYXRlID0gbmV3IERhdGUoKVxyXG4gIGxldCBkYXRlID0gbmV3RGF0ZS5nZXREYXRlKCk7XHJcbiAgbGV0IG1vbnRoID0gbmV3RGF0ZS5nZXRNb250aCgpICsgMTtcclxuICBsZXQgeWVhciA9IG5ld0RhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgcmV0dXJuIGAke3llYXJ9JHtzZXBhcmF0b3J9JHttb250aCA8IDEwID8gYDAke21vbnRofWAgOiBgJHttb250aH1gfSR7c2VwYXJhdG9yfSR7ZGF0ZX1gXHJcbn1cclxuIiwiaW1wb3J0IG5leHRDb25uZWN0IGZyb20gJ25leHQtY29ubmVjdCc7XHJcbmNvbnN0IG1vZGVscyA9IHJlcXVpcmUoJy4uLy4uLy4uL2RiL21vZGVscy9pbmRleCcpO1xyXG5pbXBvcnQgbWlkZGxld2FyZSBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL2F1dGgnO1xyXG5jb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcclxuY29uc3QgT3AgPSBTZXF1ZWxpemUuT3A7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gbmV4dENvbm5lY3QoKVxyXG4gIC8vIE1pZGRsZXdhcmVcclxuICAudXNlKG1pZGRsZXdhcmUpXHJcbiAgLy8gR2V0IG1ldGhvZFxyXG4gIC5nZXQoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG1ldGhvZCxcclxuICAgICAgYm9keSxcclxuICAgIH0gPSByZXE7XHJcbiAgICBjb25zdCB7IG9yZ2FuaXphdGlvbl9pZCwgcmVzdWx0cywgcGFnZSwgc2VhcmNoLCBzb3J0RmllbGQgPSBcImFjdGl2aXRpZXNfaWRcIiwgc29ydE9yZGVyID0gXCJERVNDXCIsIGZpbHRlcnMgPSBbXSB9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgbGV0IF9zZWFyY2ggPSB7fTtcclxuXHJcblxyXG4gICAgaWYgKHNlYXJjaCAhPSBcIlwiKSB7XHJcbiAgICAgIGlmIChmaWx0ZXJzID09ICd1bmRlZmluZWQnIHx8IGZpbHRlcnMgPT0gXCJudWxsXCIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImlmMVwiKVxyXG4gICAgICAgIF9zZWFyY2ggPSB7XHJcbiAgICAgICAgICBpc19kZWxldGVkOiB7XHJcbiAgICAgICAgICAgIFtPcC5uZV06IDEsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgW09wLm9yXTogW3tcclxuICAgICAgICAgICAgYWN0aXZpdGllc190aXRsZToge1xyXG4gICAgICAgICAgICAgIFtPcC5saWtlXTogJyUnICsgc2VhcmNoICsgJyUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgb3JnYW5pemF0aW9uX2lkOiBvcmdhbml6YXRpb25faWRcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaWYyXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2coZmlsdGVycylcclxuICAgICAgICBfc2VhcmNoID0ge1xyXG4gICAgICAgICAgaXNfZGVsZXRlZDoge1xyXG4gICAgICAgICAgICBbT3AubmVdOiAxLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFtPcC5vcl06IFt7XHJcbiAgICAgICAgICAgIGFjdGl2aXRpZXNfdGl0bGU6IHtcclxuICAgICAgICAgICAgICBbT3AubGlrZV06ICclJyArIHNlYXJjaCArICclJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIG9yZ2FuaXphdGlvbl9pZDogb3JnYW5pemF0aW9uX2lkXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGZpbHRlcnMgPT0gJ3VuZGVmaW5lZCcgfHwgZmlsdGVycyA9PSAnbnVsbCcpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImlmM1wiKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZpbHRlcnMpXHJcblxyXG4gICAgICAgIF9zZWFyY2ggPSB7XHJcblxyXG4gICAgICAgICAgaXNfZGVsZXRlZDoge1xyXG4gICAgICAgICAgICBbT3AubmVdOiAxLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG9yZ2FuaXphdGlvbl9pZDogb3JnYW5pemF0aW9uX2lkXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImlmNFwiKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZpbHRlcnMpXHJcbiAgICAgICAgX3NlYXJjaCA9IHtcclxuXHJcbiAgICAgICAgICBpc19kZWxldGVkOiB7XHJcbiAgICAgICAgICAgIFtPcC5uZV06IDEsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgb3JnYW5pemF0aW9uX2lkOiBvcmdhbml6YXRpb25faWRcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhfc2VhcmNoKVxyXG4gICAgY29uc3QgX2FjdGl2aXRpZXMgPSBhd2FpdCBtb2RlbHMuYWN0aXZpdGllcy5maW5kQW5kQ291bnRBbGwoe1xyXG4gICAgICBhdHRyaWJ1dGVzOiBbXHJcbiAgICAgICAgJ2FjdGl2aXRpZXNfaWQnLCAnb3JnYW5pemF0aW9uX2lkJywgJ2FjdGl2aXRpZXNfZGF0ZScsICdhY3Rpdml0aWVzX3RpdGxlJyxcclxuICAgICAgICAnYWN0aXZpdGllc19kZXRhaWwnLCAnYWN0aXZpdGllc19pbWFnZScsICdhY3Rpdml0aWVzX2tleXdvcmQnLCAnaXNfc2xpZGUnLFxyXG4gICAgICAgICdkYXRlX2NyZWF0ZWQnLCAnZGF0ZV91cGRhdGUnLCAnc3RhdHVzX2FjdGl2ZScsICdpc19kZWxldGVkJywgJ2lwJ1xyXG4gICAgICBdLFxyXG4gICAgICB3aGVyZTogX3NlYXJjaCxcclxuICAgICAgb2Zmc2V0OiByZXN1bHRzICogKHBhZ2UgLSAxKSxcclxuICAgICAgbGltaXQ6IHBhcnNlSW50KHJlc3VsdHMpLFxyXG4gICAgICBvcmRlcjogW1xyXG4gICAgICAgIFtzb3J0RmllbGQgIT0gXCJ1bmRlZmluZWRcIiAmJiBzb3J0T3JkZXIgIT0gXCJ1bmRlZmluZWRcIiA/IHNvcnRGaWVsZCA6IFwiYWN0aXZpdGllc19pZFwiLCBzb3J0T3JkZXIgIT0gXCJ1bmRlZmluZWRcIiA/IHNvcnRPcmRlciA9PSBcImFzY2VuZFwiID8gXCJBU0NcIiA6IFwiREVTQ1wiIDogXCJERVNDXCJdXHJcbiAgICAgIF1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgaW5mbzoge1xyXG4gICAgICAgIHBhZ2U6IHBhZ2UsXHJcbiAgICAgICAgcmVzdWx0czogcmVzdWx0c1xyXG4gICAgICB9LFxyXG4gICAgICByZXN1bHRzOiBfYWN0aXZpdGllcy5yb3dzLFxyXG4gICAgICB0b3RhbENvdW50OiBfYWN0aXZpdGllcy5jb3VudFxyXG4gICAgfSk7XHJcblxyXG4gIH0pXHJcbiAgLmRlbGV0ZShhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgYm9keSB9ID0gcmVxO1xyXG4gICAgY29uc3QgeyBzbHVnIH0gPSByZXEucXVlcnk7XHJcbiAgICBjb25zdCBhY3Rpdml0aWVzX2lkID0gc2x1ZztcclxuICAgIGlmIChhY3Rpdml0aWVzX2lkID09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIHN0YXR1czogMjAxLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdkYXRhIGluY29ycmVjdCcsXHJcbiAgICAgICAgYWN0aXZpdGllc19pZDogYWN0aXZpdGllc19pZCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWN0aXZpdGllcyA9IGF3YWl0IG1vZGVscy5hY3Rpdml0aWVzLnVwZGF0ZShkYXRhQWN0aXZpdGllcywge1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGFjdGl2aXRpZXNfaWQ6IGFjdGl2aXRpZXNfaWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICBzdGF0dXM6IDIwMCxcclxuICAgICAgbWVzc2FnZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICBhY3Rpdml0aWVzOiBhY3Rpdml0aWVzID8gYWN0aXZpdGllcyA6IFtdLFxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29ubmVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9