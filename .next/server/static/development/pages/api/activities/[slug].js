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

/***/ "./pages/api/activities/[slug].js":
/*!****************************************!*\
  !*** ./pages/api/activities/[slug].js ***!
  \****************************************/
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
.get(async (req, res) => {
  const {
    query: {
      id,
      name
    }
  } = req;
  const {
    slug
  } = req.query;
  const activities_id = slug;
  const activities = await models.activities.findOne({
    where: {
      activities_id: activities_id
    }
  });
  return res.status(200).json({
    status: 200,
    message: "success",
    activities: activities ? activities : []
  });
}).put(async (req, res) => {
  const {
    body
  } = req;
  const {
    slug
  } = req.query;
  const activities_id = slug;
  const {
    organization_id,
    activities_date,
    activities_title,
    activities_detail,
    activities_image,
    activities_keyword,
    is_slide,
    status_active
  } = body; //SampleText.replace("Developer", "App Builder");

  const dataActivities = {
    organization_id: organization_id,
    activities_title: activities_title,
    activities_detail: activities_detail,
    activities_image: activities_image,
    activities_date: activities_date.replace('+07:00', '+00:00'),
    activities_keyword: activities_keyword,
    is_slide: is_slide,
    status_active: status_active
  };

  if (organization_id == undefined || activities_date == undefined || activities_title == undefined || activities_detail == undefined || activities_image == undefined || activities_keyword == undefined || is_slide == undefined || status_active == undefined) {
    return res.status(200).json({
      status: 201,
      message: 'data incorrect',
      activities_id: activities_id,
      data: dataActivities
    });
  }

  var ip = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_2__["getIPAddress"])();
  var currentDate = moment__WEBPACK_IMPORTED_MODULE_3___default()().format();
  dataActivities.ip = ip;
  dataActivities.is_deleted = 0;
  dataActivities.date_update = currentDate.replace("+07:00", "+00:00");
  const activitiesDataResult = await models.activities.update(dataActivities, {
    where: {
      activities_id: activities_id
    }
  });
  return res.status(200).json({
    status: 200,
    message: 'success' // organization: organization ? organization : []

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
  const activities_id = slug;

  if (activities_id == undefined) {
    return res.status(200).json({
      status: 201,
      message: 'data incorrect',
      activities_id: activities_id
    });
  }

  const dataActivities = {
    is_deleted: 1
  };
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

/***/ 15:
/*!**********************************************!*\
  !*** multi ./pages/api/activities/[slug].js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sackky\Desktop\govermentlt\pages\api\activities\[slug].js */"./pages/api/activities/[slug].js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGIvY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9kYi9tb2RlbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9hdXRoLmpzIiwid2VicGFjazovLy8uL21pZGRsZXdhcmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2FjdGl2aXRpZXMvW3NsdWddLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvbm5lY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemVcIiJdLCJuYW1lcyI6WyJkb3RlbnYiLCJyZXF1aXJlIiwicmVzdWx0IiwiY29uZmlnIiwibW9kdWxlIiwiZXhwb3J0cyIsImRldmVsb3BtZW50IiwidXNlcm5hbWUiLCJwcm9jZXNzIiwiZW52IiwiREJfVVNFUiIsInBhc3N3b3JkIiwiREJfUEFTUyIsImRhdGFiYXNlIiwiREJfTkFNRSIsImhvc3QiLCJEQl9IT1NUIiwiZGlhbGVjdCIsInRlc3QiLCJsb2dnaW5nIiwicHJvZHVjdGlvbiIsImRpYWxlY3RPcHRpb25zIiwic3NsIiwiZnMiLCJwYXRoIiwiU2VxdWVsaXplIiwiYmFzZW5hbWUiLCJfX2ZpbGVuYW1lIiwiX19kaXJuYW1lIiwiZGIiLCJtb2RlbHMiLCJjd2QiLCJzZXF1ZWxpemUiLCJ1c2VfZW52X3ZhcmlhYmxlIiwicmVhZGRpclN5bmMiLCJmaWx0ZXIiLCJmaWxlIiwiaW5kZXhPZiIsInNsaWNlIiwiZm9yRWFjaCIsIm1vZGVsIiwiam9pbiIsIm5hbWUiLCJPYmplY3QiLCJrZXlzIiwibW9kZWxOYW1lIiwiYXNzb2NpYXRlIiwibWlkZGxld2FyZSIsIm5leHRDb25uZWN0IiwicmVzdHJpY3RlZCIsInVzZSIsInJlcSIsInJlcyIsIm5leHQiLCJhdXRoSGVhZGVyIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJ1c2VyIiwiaW5jbHVkZXMiLCJ1cmwiLCJzZXNzaW9uSUQiLCJzcGxpdCIsInZlcmlmeVRva2VuIiwic3RhdHVzQ29kZSIsInNlbmQiLCJzdGF0dXMiLCJlcnJvciIsIlNFQ1JFVF9LRVkiLCJKV1RfS0VZIiwiand0VG9rZW4iLCJqd3QiLCJ2ZXJpZnkiLCJlIiwiY29uc29sZSIsImxvZyIsImdldEFwcENvb2tpZXMiLCJwYXJzZWRJdGVtcyIsImNvb2tpZSIsImNvb2tpZXNJdGVtcyIsImNvb2tpZXMiLCJwYXJzZWRJdGVtIiwiZGVjb2RlVVJJIiwiYWJzb2x1dGVVcmwiLCJzZXRMb2NhbGhvc3QiLCJwcm90b2NvbCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiYWRkRGF5cyIsImRhdGUiLCJkYXlzIiwiRGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwiZm9ybWF0RGF0ZVdpdGhvdXRUaW1lIiwiZGF0ZVN0cmluZyIsImdldFVUQ0Z1bGxZZWFyIiwiZ2V0VVRDTW9udGgiLCJnZXRVVENEYXRlIiwiYXBpSW5zdGFuY2UiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJjaGVja0lzTG9naW4iLCJ0b2tlbiIsIkNvb2tpZXMiLCJnZXQiLCJSb3V0ZXIiLCJwdXNoIiwicGFyc2VKd3QiLCJpc0V4cGlyZWQiLCJiYXNlNjRVcmwiLCJiYXNlNjQiLCJyZXBsYWNlIiwianNvblBheWxvYWQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJhdG9iIiwibWFwIiwiYyIsImNoYXJDb2RlQXQiLCJ0b1N0cmluZyIsIl9qc29uUGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImRhdGVOb3ciLCJwYXJzZUludCIsImV4cCIsImdldFRpbWUiLCJzdWJzdHJpbmciLCJjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lIiwiZGF0ZVNwbGl0IiwiY29udmVydERhdGVEQnRvRGF0ZVBpY2tlcldpdGhUaW1lIiwiY29udmVydERhdGV0b1RoYWlEYXRlIiwiX2RhdGUiLCJjb252ZXJ0TW9udGh0b1RoYWlNb250aCIsImNvbnZlcnRZZWFydG9UaGFpWWVhciIsInllYXIiLCJtb250aCIsImNvbnZlcnREYXRldG9BZGREQiIsImdldElQQWRkcmVzcyIsImRhdGEiLCJjb3VudHJ5X2NvZGUiLCJjb3VudHJ5X25hbWUiLCJjaXR5IiwicG9zdGFsIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJJUHY0Iiwic3RhdGUiLCJieXRlc1RvU2l6ZSIsImJ5dGVzIiwic2l6ZXMiLCJpIiwiTWF0aCIsImZsb29yIiwicm91bmQiLCJwb3ciLCJieXRlc1RvTUIiLCJOdW1iZXIiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImdldERhdGVkaWZmIiwic3RhcnREYXRlIiwidGltZUVuZCIsIm1vbWVudCIsIm5ld1N0YXJ0RGF0ZSIsIm5ld0VuZERhdGUiLCJvbmVfZGF5IiwiY2VpbCIsImdldEN1cnJlbnREYXRlIiwic2VwYXJhdG9yIiwibmV3RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJPcCIsImhhbmRsZXIiLCJxdWVyeSIsImlkIiwic2x1ZyIsImFjdGl2aXRpZXNfaWQiLCJhY3Rpdml0aWVzIiwiZmluZE9uZSIsIndoZXJlIiwianNvbiIsIm1lc3NhZ2UiLCJwdXQiLCJib2R5Iiwib3JnYW5pemF0aW9uX2lkIiwiYWN0aXZpdGllc19kYXRlIiwiYWN0aXZpdGllc190aXRsZSIsImFjdGl2aXRpZXNfZGV0YWlsIiwiYWN0aXZpdGllc19pbWFnZSIsImFjdGl2aXRpZXNfa2V5d29yZCIsImlzX3NsaWRlIiwic3RhdHVzX2FjdGl2ZSIsImRhdGFBY3Rpdml0aWVzIiwidW5kZWZpbmVkIiwiaXAiLCJjdXJyZW50RGF0ZSIsImZvcm1hdCIsImlzX2RlbGV0ZWQiLCJkYXRlX3VwZGF0ZSIsImFjdGl2aXRpZXNEYXRhUmVzdWx0IiwidXBkYXRlIiwiZGVsZXRlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZhOztBQUNiLE1BQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxzQkFBRCxDQUF0Qjs7QUFDQSxNQUFNQyxNQUFNLEdBQUdGLE1BQU0sQ0FBQ0csTUFBUCxFQUFmLEMsQ0FFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZkMsYUFBVyxFQUFFO0FBQ1hDLFlBQVEsRUFB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QUU7QUFDTEgsbUJBQWEsRUFBRUE7QUFEVjtBQUR5RCxHQUF6QyxDQUF6QjtBQU1BLFNBQU8vSCxHQUFHLENBQUNhLE1BQUosQ0FBVyxHQUFYLEVBQWdCc0gsSUFBaEIsQ0FBcUI7QUFDMUJ0SCxVQUFNLEVBQUUsR0FEa0I7QUFFMUJ1SCxXQUFPLEVBQUUsU0FGaUI7QUFHMUJKLGNBQVUsRUFBRUEsVUFBVSxHQUFHQSxVQUFILEdBQWdCO0FBSFosR0FBckIsQ0FBUDtBQUtELENBekhhLENBQWhCO0FBMkhlTCxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25JQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxzQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYXBpXFxhY3Rpdml0aWVzXFxbc2x1Z10uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTUpO1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5jb25zdCBkb3RlbnYgPSByZXF1aXJlKFwiZG90ZW52XCIpXHJcbmNvbnN0IHJlc3VsdCA9IGRvdGVudi5jb25maWcoKVxyXG5cclxuLy8gaWYgKHJlc3VsdC5lcnJvcikge1xyXG4vLyAgIHRocm93IHJlc3VsdC5lcnJvclxyXG4vLyB9XHJcblxyXG4vLyBjb25zb2xlLmxvZyhyZXN1bHQucGFyc2VkKVxyXG5cclxuLy8gZG90ZW52LmNvbmZpZyh7IHBhdGg6IF9fZGlybmFtZSArICcuZW52JyB9KTtcclxuLy8gY29uc29sZS5sb2coXCJwcm9jZXNzLmVudi5EQl9VU0VSXCIpO1xyXG4vLyBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5EQl9IT1NUKTtcclxuLy8gZG90ZW52LmNvbmZpZyh7IHBhdGg6ICcuL2NvbmZpZy5lbnYnIH0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBkZXZlbG9wbWVudDoge1xyXG4gICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LkRCX1VTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTUyxcclxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxyXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcclxuICAgIGRpYWxlY3Q6ICdteXNxbCcsXHJcbiAgfSxcclxuICB0ZXN0OiB7XHJcbiAgICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuREJfVVNFUixcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTLFxyXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX05BTUUsXHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxyXG4gICAgZGlhbGVjdDogJ215c3FsJyxcclxuICAgIGxvZ2dpbmc6IGZhbHNlLFxyXG4gIH0sXHJcbiAgcHJvZHVjdGlvbjoge1xyXG4gICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LkRCX1VTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTUyxcclxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxyXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcclxuICAgIGRpYWxlY3Q6ICdteXNxbCcsXHJcbiAgICBkaWFsZWN0T3B0aW9uczoge1xyXG4gICAgICBzc2w6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XHJcbmNvbnN0IGJhc2VuYW1lID0gcGF0aC5iYXNlbmFtZShfX2ZpbGVuYW1lKTtcclxuY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JztcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZShfX2Rpcm5hbWUgKyAnLy4uL2NvbmZpZy9jb25maWcuanMnKVtlbnZdO1xyXG5jb25zdCBkYiA9IHt9O1xyXG5cclxuLyogQ3VzdG9tIGhhbmRsZXIgZm9yIHJlYWRpbmcgY3VycmVudCB3b3JraW5nIGRpcmVjdG9yeSAqL1xyXG5jb25zdCBtb2RlbHMgPSBwcm9jZXNzLmN3ZCgpICsgJy9kYi9tb2RlbHMvJyB8fCBfX2Rpcm5hbWU7XHJcblxyXG5sZXQgc2VxdWVsaXplO1xyXG5pZiAoY29uZmlnLnVzZV9lbnZfdmFyaWFibGUpIHtcclxuICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKHByb2Nlc3MuZW52W2NvbmZpZy51c2VfZW52X3ZhcmlhYmxlXSwgY29uZmlnKTtcclxufSBlbHNlIHtcclxuICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKFxyXG4gICAgY29uZmlnLmRhdGFiYXNlLFxyXG4gICAgY29uZmlnLnVzZXJuYW1lLFxyXG4gICAgY29uZmlnLnBhc3N3b3JkLFxyXG4gICAgY29uZmlnLFxyXG4gICk7XHJcbn1cclxuLyogZnMucmVhZGRpclN5bmMoX19kaXJuYW1lKSAqL1xyXG5mcy5yZWFkZGlyU3luYyhtb2RlbHMpXHJcbiAgLmZpbHRlcihmaWxlID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGZpbGUuaW5kZXhPZignLicpICE9PSAwICYmIGZpbGUgIT09IGJhc2VuYW1lICYmIGZpbGUuc2xpY2UoLTMpID09PSAnLmpzJ1xyXG4gICAgKTtcclxuICB9KVxyXG4gIC5mb3JFYWNoKGZpbGUgPT4ge1xyXG4gICAgLyogY29uc3QgbW9kZWwgPSBzZXF1ZWxpemVbXCJpbXBvcnRcIl0ocGF0aC5qb2luKF9fZGlybmFtZSwgZmlsZSkpOyAqL1xyXG4gICAgY29uc3QgbW9kZWwgPSBzZXF1ZWxpemVbJ2ltcG9ydCddKHBhdGguam9pbihtb2RlbHMsIGZpbGUpKTtcclxuICAgIGRiW21vZGVsLm5hbWVdID0gbW9kZWw7XHJcbiAgfSk7XHJcblxyXG5PYmplY3Qua2V5cyhkYikuZm9yRWFjaChtb2RlbE5hbWUgPT4ge1xyXG4gIGlmIChkYlttb2RlbE5hbWVdLmFzc29jaWF0ZSkge1xyXG4gICAgZGJbbW9kZWxOYW1lXS5hc3NvY2lhdGUoZGIpO1xyXG4gIH1cclxufSk7XHJcblxyXG5kYi5zZXF1ZWxpemUgPSBzZXF1ZWxpemU7XHJcbmRiLlNlcXVlbGl6ZSA9IFNlcXVlbGl6ZTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGI7XHJcbiIsImltcG9ydCBuZXh0Q29ubmVjdCBmcm9tICduZXh0LWNvbm5lY3QnO1xyXG5pbXBvcnQgeyB2ZXJpZnlUb2tlbiB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuY29uc3QgbWlkZGxld2FyZSA9IG5leHRDb25uZWN0KCk7XHJcblxyXG4vKiBTYW1wbGUgdXNpbmcgbWlkZGxld2FyZSAqL1xyXG4vKiBtaWRkbGV3YXJlLnVzZShkYXRhYmFzZSkudXNlKHNlc3Npb24pLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpLnVzZShwYXNzcG9ydC5zZXNzaW9uKCkpOyAqL1xyXG5cclxuLyogU2V0IHJlc3RyaWN0ZWQgcHVibGljIGFjY2VzcyAvIHB1dCBhbnkgYXBpIGFjY2VzcyB0aGF0IGlzIHJlc3RyaWN0ZWQgaW4gaGVyZSAqL1xyXG5jb25zdCByZXN0cmljdGVkID0gWycvYXBpL29yZ2FuaXphdGlvbi9bb3JnYW5pemF0aW9uLWlkXV0nLCAnL2FwaS9qb2IvW3NsdWddJ107XHJcblxyXG4vKlxyXG4gKiBAcGFyYW1zIHtyZXF1ZXN0LCByZXNwb25zZSwgY2FsbGJhY2t9IGRlZmF1bHQgUmVxdWVzdCBhbmQgUmVzcG9uc2VcclxuICogQHJldHVybiB7b2JqZWN0fSBvYmplY3QgaWYgdHJ1ZSwgcmVzcG9uc2UgbWVzc2FnZSBpZiBmYWxzZSBhbmQgY29udGludWVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IG1pZGRsZXdhcmUudXNlKGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gIGxldCBhdXRoSGVhZGVyID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbiB8fCAnJztcclxuICBsZXQgdXNlciA9IHt9O1xyXG5cclxuICBpZiAoIXJlc3RyaWN0ZWQuaW5jbHVkZXMocmVxLnVybCkgJiYgIWF1dGhIZWFkZXIpIHtcclxuICAgIHJldHVybiBuZXh0KCk7XHJcbiAgfVxyXG4gIGlmIChhdXRoSGVhZGVyKSB7XHJcbiAgICBsZXQgc2Vzc2lvbklEID0gYXV0aEhlYWRlci5zcGxpdCgnICcpWzFdO1xyXG4gICAgaWYgKHNlc3Npb25JRCkge1xyXG4gICAgICB1c2VyID0gdmVyaWZ5VG9rZW4oc2Vzc2lvbklEKTtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAvKiBDb3VsZCBwdXQgY2hlY2sgYWdhaW5zdCB1c2VycyB0YWJsZXMgaW4gZGF0YWJhc2UgIFVzZXIuZmluZCh7ZW1haWw6dXNlci5lbWFpbH0pICovXHJcbiAgICAgICAgcmVxLnVzZXIgPSB1c2VyO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDAxO1xyXG4gICAgICAgIHJldHVybiByZXMuc2VuZCh7XHJcbiAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXHJcbiAgICAgICAgICBlcnJvcjogJ0V4cGlyZWQnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXMuc3RhdHVzQ29kZSA9IDQwMTtcclxuICAgICAgcmV0dXJuIHJlcy5zZW5kKHtcclxuICAgICAgICBzdGF0dXM6ICdlcnJvcicsXHJcbiAgICAgICAgZXJyb3I6ICdXcm9uZyBUb2tlbicsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzQ29kZSA9IDQwMTtcclxuICAgIHJldHVybiByZXMuc2VuZCh7XHJcbiAgICAgIHN0YXR1czogJ2Vycm9yJyxcclxuICAgICAgZXJyb3I6ICdVbmF1dGhvcml6ZWQnLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBuZXh0KCk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBTRUNSRVRfS0VZID0gcHJvY2Vzcy5lbnYuSldUX0tFWTtcclxuXHJcbi8qXHJcbiAqIEBwYXJhbXMge2p3dFRva2VufSBleHRyYWN0ZWQgZnJvbSBjb29raWVzXHJcbiAqIEByZXR1cm4ge29iamVjdH0gb2JqZWN0IG9mIGV4dHJhY3RlZCB0b2tlblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRva2VuKGp3dFRva2VuKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBqd3QudmVyaWZ5KGp3dFRva2VuLCBTRUNSRVRfS0VZKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZygnZTonLCBlKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuLypcclxuICogQHBhcmFtcyB7cmVxdWVzdH0gZXh0cmFjdGVkIGZyb20gcmVxdWVzdCByZXNwb25zZVxyXG4gKiBAcmV0dXJuIHtvYmplY3R9IG9iamVjdCBvZiBwYXJzZSBqd3QgY29va2llIGRlY29kZSBvYmplY3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBcHBDb29raWVzKHJlcSkge1xyXG4gIGNvbnN0IHBhcnNlZEl0ZW1zID0ge307XHJcbiAgaWYgKHJlcS5oZWFkZXJzLmNvb2tpZSkge1xyXG4gICAgY29uc3QgY29va2llc0l0ZW1zID0gcmVxLmhlYWRlcnMuY29va2llLnNwbGl0KCc7ICcpO1xyXG4gICAgY29va2llc0l0ZW1zLmZvckVhY2goY29va2llcyA9PiB7XHJcbiAgICAgIGNvbnN0IHBhcnNlZEl0ZW0gPSBjb29raWVzLnNwbGl0KCc9Jyk7XHJcbiAgICAgIHBhcnNlZEl0ZW1zW3BhcnNlZEl0ZW1bMF1dID0gZGVjb2RlVVJJKHBhcnNlZEl0ZW1bMV0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBwYXJzZWRJdGVtcztcclxufVxyXG5cclxuLypcclxuICogQHBhcmFtcyB7cmVxdWVzdH0gZXh0cmFjdGVkIGZyb20gcmVxdWVzdCByZXNwb25zZSwge3NldExvY2FsaG9zdH0geW91ciBsb2NhbGhvc3QgYWRkcmVzc1xyXG4gKiBAcmV0dXJuIHtvYmplY3R9IG9iamVjdHMgb2YgcHJvdG9jb2wsIGhvc3QgYW5kIG9yaWdpblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFic29sdXRlVXJsKHJlcSwgc2V0TG9jYWxob3N0KSB7XHJcbiAgdmFyIHByb3RvY29sID0gJ2h0dHBzOic7XHJcbiAgdmFyIGhvc3QgPSByZXFcclxuICAgID8gcmVxLmhlYWRlcnNbJ3gtZm9yd2FyZGVkLWhvc3QnXSB8fCByZXEuaGVhZGVyc1snaG9zdCddXHJcbiAgICA6IHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xyXG4gIGlmIChob3N0LmluZGV4T2YoJ2xvY2FsaG9zdCcpID4gLTEpIHtcclxuICAgIGlmIChzZXRMb2NhbGhvc3QpIGhvc3QgPSBzZXRMb2NhbGhvc3Q7XHJcbiAgICBwcm90b2NvbCA9ICdodHRwOic7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm90b2NvbDogcHJvdG9jb2wsXHJcbiAgICBob3N0OiBob3N0LFxyXG4gICAgb3JpZ2luOiBwcm90b2NvbCArICcvLycgKyBob3N0LFxyXG4gICAgdXJsOiByZXEsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZERheXMoZGF0ZSwgZGF5cykge1xyXG4gIHZhciByZXN1bHQgPSBuZXcgRGF0ZShkYXRlKTtcclxuICByZXN1bHQuc2V0RGF0ZShyZXN1bHQuZ2V0RGF0ZSgpICsgZGF5cyk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy9ZWVlZLU1NLUREXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlV2l0aG91dFRpbWUoZGF0ZSkge1xyXG4gIHZhciBkYXRlU3RyaW5nID1cclxuICAgIGRhdGUuZ2V0VVRDRnVsbFllYXIoKSArIFwiLVwiICtcclxuICAgIChcIjBcIiArIChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSkuc2xpY2UoLTIpICsgXCItXCIgK1xyXG4gICAgKFwiMFwiICsgZGF0ZS5nZXRVVENEYXRlKCkpLnNsaWNlKC0yKSArIFwiIFwiXHJcbiAgcmV0dXJuIGRhdGVTdHJpbmc7XHJcbn1cclxuLy8gY29uc3QgYXBpID0gcHJvY2Vzcy5lbnYuUFVCTElDX1VSTFxyXG5cclxuZXhwb3J0IGNvbnN0IGFwaUluc3RhbmNlID0gKCkgPT4ge1xyXG4gIC8vIGNvbnN0IGF1dGhvcml6YXRpb24gPSBzdG9yZS5nZXRTdGF0ZSgpLnVzZXJTdGF0ZS50b2tlbiA/IHN0b3JlLmdldFN0YXRlKCkudXNlclN0YXRlLnRva2VuIDogbnVsbFxyXG5cclxuICAvLyBjb25zdCBoZWFkZXJzID0ge1xyXG4gIC8vIFx0J3gtYXBpLXRva2VuJzogYXV0aG9yaXphdGlvbiA/IGF1dGhvcml6YXRpb24gOiAnJyxcclxuICAvLyB9XHJcblxyXG4gIHJldHVybiBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogJy9hcGknLFxyXG4gICAgLy8gaGVhZGVycyxcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tJc0xvZ2luID0gKCkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKFwiY2hlY2tJc0xvZ2luXCIpXHJcbiAgdmFyIHRva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJykgLy8gPT4gJ3ZhbHVlJ1xyXG5cclxuICBpZiAoIXRva2VuKSB7XHJcbiAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8vIGNvbnNvbGUubG9nKHBhcnNlSnd0KHRva2VuKSlcclxuICByZXR1cm4gcGFyc2VKd3QodG9rZW4pXHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VKd3QodG9rZW4pIHtcclxuXHJcbiAgdmFyIGlzRXhwaXJlZCA9IGZhbHNlO1xyXG4gIC8vIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJyk7XHJcblxyXG5cclxuXHJcbiAgdmFyIGJhc2U2NFVybCA9IHRva2VuLnNwbGl0KCcuJylbMV07XHJcbiAgdmFyIGJhc2U2NCA9IGJhc2U2NFVybC5yZXBsYWNlKC8tL2csICcrJykucmVwbGFjZSgvXy9nLCAnLycpO1xyXG4gIHZhciBqc29uUGF5bG9hZCA9IGRlY29kZVVSSUNvbXBvbmVudChhdG9iKGJhc2U2NCkuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoYykge1xyXG4gICAgcmV0dXJuICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xyXG4gIH0pLmpvaW4oJycpKTtcclxuICB2YXIgX2pzb25QYXlsb2FkID0gSlNPTi5wYXJzZShqc29uUGF5bG9hZClcclxuICB2YXIgZGF0ZU5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgLy8gY29uc29sZS5sb2cocGFyc2VJbnQoX2pzb25QYXlsb2FkLmV4cCkpXHJcbiAgLy8gY29uc29sZS5sb2cocGFyc2VJbnQoKGRhdGVOb3cuZ2V0VGltZSgpKS50b1N0cmluZygpLnN1YnN0cmluZygwLDEwKSkpXHJcbiAgaWYgKHBhcnNlSW50KF9qc29uUGF5bG9hZC5leHApIDwgcGFyc2VJbnQoKGRhdGVOb3cuZ2V0VGltZSgpKS50b1N0cmluZygpLnN1YnN0cmluZygwLCAxMCkpKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRydWVcIilcclxuXHJcbiAgICBpc0V4cGlyZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzRXhwaXJlZCkge1xyXG4gICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG4gIHJldHVybiBfanNvblBheWxvYWQ7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUoZGF0ZSkge1xyXG4gIHRyeSB7XHJcbiAgICB2YXIgZGF0ZVNwbGl0ID0gZGF0ZS50b1N0cmluZygpLnNwbGl0KFwiVFwiKTtcclxuICAgIHJldHVybiBkYXRlU3BsaXRbMF07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyV2l0aFRpbWUoZGF0ZSkge1xyXG4gIHRyeSB7XHJcbiAgICAvLzowNy4wMDBaXHJcbiAgICAvL1NhbXBsZVRleHQucmVwbGFjZShcIkRldmVsb3BlclwiLCBcIkFwcCBCdWlsZGVyXCIpO1xyXG4gICAgdmFyIGRhdGVTcGxpdCA9IGRhdGUudG9TdHJpbmcoKS5zcGxpdChcIlRcIik7XHJcbiAgICByZXR1cm4gZGF0ZVNwbGl0WzBdICsgXCIgXCIgKyBkYXRlU3BsaXRbMV0ucmVwbGFjZShcIi4wMDBaXCIsIFwiXCIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydERhdGV0b1RoYWlEYXRlKGRhdGUpIHtcclxuICB2YXIgX2RhdGUgPSBjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lKGRhdGUpXHJcbiAgdmFyIGRhdGVTcGxpdCA9IF9kYXRlLnRvU3RyaW5nKCkuc3BsaXQoXCItXCIpO1xyXG4gIC8vIDIwMjEtMDktMTZcclxuICByZXR1cm4gZGF0ZVNwbGl0WzJdICsgXCIgXCIgKyBjb252ZXJ0TW9udGh0b1RoYWlNb250aChkYXRlU3BsaXRbMV0pICsgXCIgXCIgKyBjb252ZXJ0WWVhcnRvVGhhaVllYXIoZGF0ZVNwbGl0WzBdKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFllYXJ0b1RoYWlZZWFyKHllYXIpIHtcclxuICByZXR1cm4gcGFyc2VJbnQoeWVhcikgKyA1NDNcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRNb250aHRvVGhhaU1vbnRoKG1vbnRoKSB7XHJcbiAgc3dpdGNoIChtb250aCkge1xyXG4gICAgY2FzZSBcIjAxXCI6XHJcbiAgICAgIHJldHVybiBcIuC4oeC4geC4o+C4suC4hOC4oVwiXHJcbiAgICBjYXNlIFwiMDJcIjpcclxuICAgICAgcmV0dXJuIFwi4LiB4Li44Lih4Lig4Liy4Lie4Lix4LiZ4LiY4LmMXCJcclxuICAgIGNhc2UgXCIwM1wiOlxyXG4gICAgICByZXR1cm4gXCLguKHguLXguJnguLLguITguKFcIlxyXG4gICAgY2FzZSBcIjA0XCI6XHJcbiAgICAgIHJldHVybiBcIuC5gOC4oeC4qeC4suC4ouC4mVwiXHJcbiAgICBjYXNlIFwiMDVcIjpcclxuICAgICAgcmV0dXJuIFwi4Lie4Lik4Lip4Lig4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIwNlwiOlxyXG4gICAgICByZXR1cm4gXCLguKHguLTguJbguLjguJnguLLguKLguJlcIlxyXG4gICAgY2FzZSBcIjA3XCI6XHJcbiAgICAgIHJldHVybiBcIuC4geC4o+C4geC4juC4suC4hOC4oVwiXHJcbiAgICBjYXNlIFwiMDhcIjpcclxuICAgICAgcmV0dXJuIFwi4Liq4Li04LiH4Lir4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIwOVwiOlxyXG4gICAgICByZXR1cm4gXCLguIHguLHguJnguKLguLLguKLguJlcIlxyXG4gICAgY2FzZSBcIjEwXCI6XHJcbiAgICAgIHJldHVybiBcIuC4leC4uOC4peC4suC4hOC4oVwiXHJcbiAgICBjYXNlIFwiMTFcIjpcclxuICAgICAgcmV0dXJuIFwi4Lie4Lik4Lio4LiI4Li04LiB4Liy4Lii4LiZXCJcclxuICAgIGNhc2UgXCIxMlwiOlxyXG4gICAgICByZXR1cm4gXCLguJjguLHguJnguKfguLLguITguKFcIlxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFwiTkFOXCJcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RGF0ZXRvQWRkREIoZGF0ZSkge1xyXG4gIHZhciBkYXRlU3BsaXQgPSBkYXRlLnNwbGl0KFwiIFwiKTtcclxuICByZXR1cm4gZGF0ZVNwbGl0WzBdICsgXCJUXCIgKyBkYXRlU3BsaXRbMV0gKyBcIiswMDowMFwiO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SVBBZGRyZXNzKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9nZW9sb2NhdGlvbi1kYi5jb20vanNvbi8nKVxyXG4gIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAvLyByZXR1cm4gcmVzLmRhdGFcclxuICByZXR1cm4gXCJjb3VudHJ5X2NvZGU6XCIgKyByZXMuZGF0YS5jb3VudHJ5X2NvZGUgKyBcIixjb3VudHJ5X25hbWU6XCIgKyByZXMuZGF0YS5jb3VudHJ5X25hbWUgKyBcIixjaXR5OlwiICsgcmVzLmRhdGEuY2l0eSArIFwiLHBvc3RhbDpcIiArIHJlcy5kYXRhLnBvc3RhbFxyXG4gICAgKyBcIixsYXRpdHVkZTpcIiArIHJlcy5kYXRhLmxhdGl0dWRlICsgXCIsbG9uZ2l0dWRlOlwiICsgcmVzLmRhdGEubG9uZ2l0dWRlICsgXCIsSVB2NDpcIiArIHJlcy5kYXRhLklQdjQgKyBcIixzdGF0ZTpcIiArIHJlcy5kYXRhLnN0YXRlXHJcbiAgLy8gc2V0SVAocmVzLmRhdGEuSVB2NClcclxuICAvLyByZXR1cm5cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYnl0ZXNUb1NpemUoYnl0ZXMpIHtcclxuICB2YXIgc2l6ZXMgPSBbJ0J5dGVzJywgJ0tCJywgJ01CJywgJ0dCJywgJ1RCJ107XHJcbiAgaWYgKGJ5dGVzID09IDApIHJldHVybiAnMCBCeXRlJztcclxuICB2YXIgaSA9IHBhcnNlSW50KE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2coMTAyNCkpKTtcclxuICByZXR1cm4gTWF0aC5yb3VuZChieXRlcyAvIE1hdGgucG93KDEwMjQsIGkpLCAyKSArICcgJyArIHNpemVzW2ldO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ5dGVzVG9NQihieXRlcykge1xyXG4gIHJldHVybiBOdW1iZXIucGFyc2VGbG9hdChieXRlcyAvICgxMDI0ICogMTAyNCkpLnRvRml4ZWQoMik7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0ZWRpZmYoc3RhcnREYXRlKSB7XHJcblxyXG4gIGNvbnN0IHRpbWVFbmQgPSBtb21lbnQoKTtcclxuICBjb25zdCBuZXdTdGFydERhdGUgPSBuZXcgRGF0ZShzdGFydERhdGUpO1xyXG4gIGNvbnN0IG5ld0VuZERhdGUgPSBuZXcgRGF0ZSh0aW1lRW5kKTtcclxuICBjb25zdCBvbmVfZGF5ID0gMTAwMCAqIDYwICogNjAgKiAyNDtcclxuICBsZXQgcmVzdWx0XHJcbiAgcmVzdWx0ID0gTWF0aC5jZWlsKChuZXdTdGFydERhdGUuZ2V0VGltZSgpIC0gbmV3RW5kRGF0ZS5nZXRUaW1lKCkpIC8gKG9uZV9kYXkpKVxyXG4gIGNvbnNvbGUubG9nKCdkYXRlIENvbnZlcnRlciByZXN1bHQnLCByZXN1bHQpXHJcblxyXG5cclxuICByZXR1cm4gcmVzdWx0IC0gMTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50RGF0ZShzZXBhcmF0b3IgPSAnJykge1xyXG5cclxuICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKClcclxuICBsZXQgZGF0ZSA9IG5ld0RhdGUuZ2V0RGF0ZSgpO1xyXG4gIGxldCBtb250aCA9IG5ld0RhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgbGV0IHllYXIgPSBuZXdEYXRlLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gIHJldHVybiBgJHt5ZWFyfSR7c2VwYXJhdG9yfSR7bW9udGggPCAxMCA/IGAwJHttb250aH1gIDogYCR7bW9udGh9YH0ke3NlcGFyYXRvcn0ke2RhdGV9YFxyXG59XHJcbiIsImltcG9ydCBuZXh0Q29ubmVjdCBmcm9tICduZXh0LWNvbm5lY3QnO1xyXG5jb25zdCBtb2RlbHMgPSByZXF1aXJlKCcuLi8uLi8uLi9kYi9tb2RlbHMvaW5kZXgnKTtcclxuaW1wb3J0IG1pZGRsZXdhcmUgZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS9hdXRoJztcclxuaW1wb3J0IHsgYWRkRGF5cyAsIGdldElQQWRkcmVzcyB9IGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvdXRpbHMnO1xyXG5jb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcclxuY29uc3QgT3AgPSBTZXF1ZWxpemUuT3A7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBuZXh0Q29ubmVjdCgpXHJcbiAgLy8gTWlkZGxld2FyZVxyXG4gIC51c2UobWlkZGxld2FyZSlcclxuICAvLyBHZXQgbWV0aG9kXHJcbiAgLmdldChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgcXVlcnk6IHsgaWQsIG5hbWUgfSxcclxuICAgIH0gPSByZXE7XHJcbiAgICBjb25zdCB7IHNsdWcgfSA9IHJlcS5xdWVyeTtcclxuICAgIGNvbnN0IGFjdGl2aXRpZXNfaWQgPSBzbHVnO1xyXG5cclxuICAgIGNvbnN0IGFjdGl2aXRpZXMgPSBhd2FpdCBtb2RlbHMuYWN0aXZpdGllcy5maW5kT25lKHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBhY3Rpdml0aWVzX2lkIDogYWN0aXZpdGllc19pZCxcclxuICAgICAgfSxcclxuICAgICBcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgIHN0YXR1czogMjAwLFxyXG4gICAgICBtZXNzYWdlOiBcInN1Y2Nlc3NcIixcclxuICAgICAgYWN0aXZpdGllczogYWN0aXZpdGllcyA/IGFjdGl2aXRpZXMgOiBbXVxyXG4gICAgfSk7XHJcbiAgfSlcclxuICAucHV0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBib2R5IH0gPSByZXE7XHJcbiAgICBjb25zdCB7IHNsdWcgfSA9IHJlcS5xdWVyeTtcclxuICAgIGNvbnN0IGFjdGl2aXRpZXNfaWQgPSBzbHVnO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBvcmdhbml6YXRpb25faWQsXHJcbiAgICAgIGFjdGl2aXRpZXNfZGF0ZSxcclxuICAgICAgYWN0aXZpdGllc190aXRsZSxcclxuICAgICAgYWN0aXZpdGllc19kZXRhaWwsXHJcbiAgICAgIGFjdGl2aXRpZXNfaW1hZ2UsXHJcbiAgICAgIGFjdGl2aXRpZXNfa2V5d29yZCxcclxuICAgICAgaXNfc2xpZGUsXHJcbiAgICAgIHN0YXR1c19hY3RpdmUsXHJcbiAgICB9ID0gYm9keTtcclxuXHJcbiAgICAvL1NhbXBsZVRleHQucmVwbGFjZShcIkRldmVsb3BlclwiLCBcIkFwcCBCdWlsZGVyXCIpO1xyXG4gICAgY29uc3QgZGF0YUFjdGl2aXRpZXMgPSB7XHJcbiAgICAgIG9yZ2FuaXphdGlvbl9pZDogb3JnYW5pemF0aW9uX2lkLFxyXG4gICAgICBhY3Rpdml0aWVzX3RpdGxlOiBhY3Rpdml0aWVzX3RpdGxlLFxyXG4gICAgICBhY3Rpdml0aWVzX2RldGFpbDogYWN0aXZpdGllc19kZXRhaWwsXHJcbiAgICAgIGFjdGl2aXRpZXNfaW1hZ2U6IGFjdGl2aXRpZXNfaW1hZ2UsXHJcbiAgICAgIGFjdGl2aXRpZXNfZGF0ZTogYWN0aXZpdGllc19kYXRlLnJlcGxhY2UoJyswNzowMCcsICcrMDA6MDAnKSxcclxuICAgICAgYWN0aXZpdGllc19rZXl3b3JkOiBhY3Rpdml0aWVzX2tleXdvcmQsXHJcbiAgICAgIGlzX3NsaWRlOiBpc19zbGlkZSxcclxuICAgICAgc3RhdHVzX2FjdGl2ZTogc3RhdHVzX2FjdGl2ZSxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBvcmdhbml6YXRpb25faWQgPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgIGFjdGl2aXRpZXNfZGF0ZSA9PSB1bmRlZmluZWQgfHxcclxuICAgICAgYWN0aXZpdGllc190aXRsZSA9PSB1bmRlZmluZWQgfHxcclxuICAgICAgYWN0aXZpdGllc19kZXRhaWwgPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgIGFjdGl2aXRpZXNfaW1hZ2UgPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgIGFjdGl2aXRpZXNfa2V5d29yZCA9PSB1bmRlZmluZWQgfHxcclxuICAgICAgaXNfc2xpZGUgID09IHVuZGVmaW5lZCB8fFxyXG4gICAgICBzdGF0dXNfYWN0aXZlID09IHVuZGVmaW5lZFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgc3RhdHVzOiAyMDEsXHJcbiAgICAgICAgbWVzc2FnZTogJ2RhdGEgaW5jb3JyZWN0JyxcclxuICAgICAgICBhY3Rpdml0aWVzX2lkOiBhY3Rpdml0aWVzX2lkLFxyXG4gICAgICAgIGRhdGE6IGRhdGFBY3Rpdml0aWVzLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdmFyIGlwID0gYXdhaXQgZ2V0SVBBZGRyZXNzKClcclxuICAgIHZhciBjdXJyZW50RGF0ZSA9IG1vbWVudCgpLmZvcm1hdCgpXHJcbiAgICBkYXRhQWN0aXZpdGllcy5pcCA9IGlwXHJcbiAgICBkYXRhQWN0aXZpdGllcy5pc19kZWxldGVkID0gMFxyXG4gICAgZGF0YUFjdGl2aXRpZXMuZGF0ZV91cGRhdGUgPSBjdXJyZW50RGF0ZS5yZXBsYWNlKFwiKzA3OjAwXCIsIFwiKzAwOjAwXCIpXHJcblxyXG4gICAgY29uc3QgYWN0aXZpdGllc0RhdGFSZXN1bHQgPSBhd2FpdCBtb2RlbHMuYWN0aXZpdGllcy51cGRhdGUoZGF0YUFjdGl2aXRpZXMsIHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBhY3Rpdml0aWVzX2lkOiBhY3Rpdml0aWVzX2lkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgIG1lc3NhZ2U6ICdzdWNjZXNzJyxcclxuICAgICAgLy8gb3JnYW5pemF0aW9uOiBvcmdhbml6YXRpb24gPyBvcmdhbml6YXRpb24gOiBbXVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYXdhaXQgVXNlci51cGRhdGUoeyBsYXN0TmFtZTogXCJEb2VcIiB9LCB7XHJcbiAgICAvLyAgIHdoZXJlOiB7XHJcbiAgICAvLyAgICAgbGFzdE5hbWU6IG51bGxcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSk7XHJcbiAgfSlcclxuICAuZGVsZXRlKGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBib2R5IH0gPSByZXE7XHJcbiAgICBjb25zdCB7IHNsdWcgfSA9IHJlcS5xdWVyeTtcclxuICAgIGNvbnN0IGFjdGl2aXRpZXNfaWQgPSBzbHVnO1xyXG4gICAgaWYgKGFjdGl2aXRpZXNfaWQgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgc3RhdHVzOiAyMDEsXHJcbiAgICAgICAgbWVzc2FnZTogJ2RhdGEgaW5jb3JyZWN0JyxcclxuICAgICAgICBhY3Rpdml0aWVzX2lkOiBhY3Rpdml0aWVzX2lkLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhQWN0aXZpdGllcyA9IHtcclxuICAgICAgaXNfZGVsZXRlZDogMSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYWN0aXZpdGllcyA9IGF3YWl0IG1vZGVscy5hY3Rpdml0aWVzLnVwZGF0ZShkYXRhQWN0aXZpdGllcywge1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGFjdGl2aXRpZXNfaWQ6IGFjdGl2aXRpZXNfaWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICBzdGF0dXM6IDIwMCxcclxuICAgICAgbWVzc2FnZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICBhY3Rpdml0aWVzOiBhY3Rpdml0aWVzID8gYWN0aXZpdGllcyA6IFtdLFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1jb25uZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=