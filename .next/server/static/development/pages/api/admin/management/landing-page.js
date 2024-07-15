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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
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

/***/ "./pages/api/admin/management/landing-page/index.js":
/*!**********************************************************!*\
  !*** ./pages/api/admin/management/landing-page/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../middleware/auth */ "./middleware/auth.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../middleware/utils */ "./middleware/utils.js");


const models = __webpack_require__(/*! ../../../../../db/models/index */ "./db/models/index.js");





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
    sortField = "intro_id",
    sortOrder = "DESC",
    filters = [],
    isAdmin = 0,
    organization_id = 0
  } = req.query;
  let _search = {};

  if (isAdmin == 1) {
    if (search != "") {
      if (filters == 'undefined' || filters == "null") {
        // console.log("if1")
        _search = {
          is_deleted: {
            [Op.ne]: 1
          },
          intro_title: {
            [Op.like]: '%' + search + '%'
          },
          is_admin: isAdmin
        };
      } else {
        console.log("if2");
        console.log(filters);
        _search = {
          is_deleted: {
            [Op.ne]: 1
          },
          intro_title: {
            [Op.like]: '%' + search + '%'
          },
          is_admin: isAdmin
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
          is_admin: isAdmin
        };
      } else {
        // console.log("if4")
        // console.log(filters)
        _search = {
          is_deleted: {
            [Op.ne]: 1
          },
          is_admin: isAdmin
        };
      }
    }
  } else {
    // user
    if (search != "") {
      if (filters == 'undefined' || filters == "null") {
        // console.log("if1")
        _search = {
          is_deleted: {
            [Op.ne]: 1
          },
          intro_title: {
            [Op.like]: '%' + search + '%'
          },
          organization_id: organization_id
        };
      } else {
        console.log("if2");
        console.log(filters);
        _search = {
          is_deleted: {
            [Op.ne]: 1
          },
          intro_title: {
            [Op.like]: '%' + search + '%'
          },
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
    }
  } // console.log(_search)


  const _intro = await models.intro.findAndCountAll({
    // attributes: ['package_id','code_package','name_package','size_limit']
    where: _search,
    offset: results * (page - 1),
    limit: parseInt(results),
    order: [[sortField != "undefined" && sortOrder != "undefined" ? sortField : "intro_id", sortOrder != "undefined" ? sortOrder == "ascend" ? "ASC" : "DESC" : "DESC"]]
  });

  return res.status(200).json({
    info: {
      page: page,
      results: results
    },
    results: _intro.rows,
    totalCount: _intro.count
  });
}).post(async (req, res) => {
  const {
    body
  } = req;
  const {
    slug
  } = req.query;
  const {
    organization_id,
    intro_title,
    intro_url,
    intro_btn,
    intro_date_s,
    intro_date_e,
    intro_image,
    is_has_bless,
    is_admin,
    is_use
  } = body; //SampleText.replace("Developer", "App Builder");

  const dataIntro = {
    organization_id: organization_id,
    intro_title: intro_title,
    intro_url: intro_url,
    intro_btn: intro_btn,
    intro_date_s: intro_date_s.replace("+07:00", "+00:00"),
    intro_date_e: intro_date_e.replace("+07:00", "+00:00"),
    intro_image: intro_image,
    is_has_bless: is_has_bless,
    is_admin: is_admin,
    is_use: is_use
  };

  if (organization_id == undefined || intro_title == undefined || intro_url == undefined || intro_btn == undefined || intro_date_s == undefined || intro_date_e == undefined || intro_image == undefined || is_has_bless == undefined || is_admin == undefined || is_use == undefined) {
    return res.status(200).json({
      status: 201,
      message: 'data incorrect',
      dataIntro: dataIntro
    });
  }

  var ip = await Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_3__["getIPAddress"])();
  console.log("ip");
  console.log(ip);
  var currentDate = moment__WEBPACK_IMPORTED_MODULE_2___default()().format();
  dataIntro.ip = ip;
  dataIntro.is_deleted = 0;
  dataIntro.date_created = currentDate.replace("+07:00", "+00:00");
  dataIntro.date_updated = currentDate.replace("+07:00", "+00:00"); // console.log(dataIntro)

  const newIntro = await models.intro.create(dataIntro);

  if (newIntro == null) {
    return res.status(500).json({
      status: 500,
      message: 'Internal error'
    });
  }

  return res.status(200).json({
    status: 200,
    message: 'บันทึกข้อมูลสำเร็จ'
  });
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ 14:
/*!****************************************************************!*\
  !*** multi ./pages/api/admin/management/landing-page/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\govermentlt\pages\api\admin\management\landing-page\index.js */"./pages/api/admin/management/landing-page/index.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGIvY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9kYi9tb2RlbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9hdXRoLmpzIiwid2VicGFjazovLy8uL21pZGRsZXdhcmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2FkbWluL21hbmFnZW1lbnQvbGFuZGluZy1wYWdlL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvbm5lY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemVcIiJdLCJuYW1lcyI6WyJkb3RlbnYiLCJyZXF1aXJlIiwicmVzdWx0IiwiY29uZmlnIiwibW9kdWxlIiwiZXhwb3J0cyIsImRldmVsb3BtZW50IiwidXNlcm5hbWUiLCJwcm9jZXNzIiwiZW52IiwiREJfVVNFUiIsInBhc3N3b3JkIiwiREJfUEFTUyIsImRhdGFiYXNlIiwiREJfTkFNRSIsImhvc3QiLCJEQl9IT1NUIiwiZGlhbGVjdCIsInRlc3QiLCJsb2dnaW5nIiwicHJvZHVjdGlvbiIsImRpYWxlY3RPcHRpb25zIiwic3NsIiwiZnMiLCJwYXRoIiwiU2VxdWVsaXplIiwiYmFzZW5hbWUiLCJfX2ZpbGVuYW1lIiwiX19kaXJuYW1lIiwiZGIiLCJtb2RlbHMiLCJjd2QiLCJzZXF1ZWxpemUiLCJ1c2VfZW52X3ZhcmlhYmxlIiwicmVhZGRpclN5bmMiLCJmaWx0ZXIiLCJmaWxlIiwiaW5kZXhPZiIsInNsaWNlIiwiZm9yRWFjaCIsIm1vZGVsIiwiam9pbiIsIm5hbWUiLCJPYmplY3QiLCJrZXlzIiwibW9kZWxOYW1lIiwiYXNzb2NpYXRlIiwibWlkZGxld2FyZSIsIm5leHRDb25uZWN0IiwicmVzdHJpY3RlZCIsInVzZSIsInJlcSIsInJlcyIsIm5leHQiLCJhdXRoSGVhZGVyIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJ1c2VyIiwiaW5jbHVkZXMiLCJ1cmwiLCJzZXNzaW9uSUQiLCJzcGxpdCIsInZlcmlmeVRva2VuIiwic3RhdHVzQ29kZSIsInNlbmQiLCJzdGF0dXMiLCJlcnJvciIsIlNFQ1JFVF9LRVkiLCJKV1RfS0VZIiwiand0VG9rZW4iLCJqd3QiLCJ2ZXJpZnkiLCJlIiwiY29uc29sZSIsImxvZyIsImdldEFwcENvb2tpZXMiLCJwYXJzZWRJdGVtcyIsImNvb2tpZSIsImNvb2tpZXNJdGVtcyIsImNvb2tpZXMiLCJwYXJzZWRJdGVtIiwiZGVjb2RlVVJJIiwiYWJzb2x1dGVVcmwiLCJzZXRMb2NhbGhvc3QiLCJwcm90b2NvbCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiYWRkRGF5cyIsImRhdGUiLCJkYXlzIiwiRGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwiZm9ybWF0RGF0ZVdpdGhvdXRUaW1lIiwiZGF0ZVN0cmluZyIsImdldFVUQ0Z1bGxZZWFyIiwiZ2V0VVRDTW9udGgiLCJnZXRVVENEYXRlIiwiYXBpSW5zdGFuY2UiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJjaGVja0lzTG9naW4iLCJ0b2tlbiIsIkNvb2tpZXMiLCJnZXQiLCJSb3V0ZXIiLCJwdXNoIiwicGFyc2VKd3QiLCJpc0V4cGlyZWQiLCJiYXNlNjRVcmwiLCJiYXNlNjQiLCJyZXBsYWNlIiwianNvblBheWxvYWQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJhdG9iIiwibWFwIiwiYyIsImNoYXJDb2RlQXQiLCJ0b1N0cmluZyIsIl9qc29uUGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImRhdGVOb3ciLCJwYXJzZUludCIsImV4cCIsImdldFRpbWUiLCJzdWJzdHJpbmciLCJjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lIiwiZGF0ZVNwbGl0IiwiY29udmVydERhdGVEQnRvRGF0ZVBpY2tlcldpdGhUaW1lIiwiY29udmVydERhdGV0b1RoYWlEYXRlIiwiX2RhdGUiLCJjb252ZXJ0TW9udGh0b1RoYWlNb250aCIsImNvbnZlcnRZZWFydG9UaGFpWWVhciIsInllYXIiLCJtb250aCIsImNvbnZlcnREYXRldG9BZGREQiIsImdldElQQWRkcmVzcyIsImRhdGEiLCJjb3VudHJ5X2NvZGUiLCJjb3VudHJ5X25hbWUiLCJjaXR5IiwicG9zdGFsIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJJUHY0Iiwic3RhdGUiLCJieXRlc1RvU2l6ZSIsImJ5dGVzIiwic2l6ZXMiLCJpIiwiTWF0aCIsImZsb29yIiwicm91bmQiLCJwb3ciLCJieXRlc1RvTUIiLCJOdW1iZXIiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImdldERhdGVkaWZmIiwic3RhcnREYXRlIiwidGltZUVuZCIsIm1vbWVudCIsIm5ld1N0YXJ0RGF0ZSIsIm5ld0VuZERhdGUiLCJvbmVfZGF5IiwiY2VpbCIsImdldEN1cnJlbnREYXRlIiwic2VwYXJhdG9yIiwibmV3RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJPcCIsImhhbmRsZXIiLCJtZXRob2QiLCJib2R5IiwicmVzdWx0cyIsInBhZ2UiLCJzZWFyY2giLCJzb3J0RmllbGQiLCJzb3J0T3JkZXIiLCJmaWx0ZXJzIiwiaXNBZG1pbiIsIm9yZ2FuaXphdGlvbl9pZCIsInF1ZXJ5IiwiX3NlYXJjaCIsImlzX2RlbGV0ZWQiLCJuZSIsImludHJvX3RpdGxlIiwibGlrZSIsImlzX2FkbWluIiwiX2ludHJvIiwiaW50cm8iLCJmaW5kQW5kQ291bnRBbGwiLCJ3aGVyZSIsIm9mZnNldCIsImxpbWl0Iiwib3JkZXIiLCJqc29uIiwiaW5mbyIsInJvd3MiLCJ0b3RhbENvdW50IiwiY291bnQiLCJwb3N0Iiwic2x1ZyIsImludHJvX3VybCIsImludHJvX2J0biIsImludHJvX2RhdGVfcyIsImludHJvX2RhdGVfZSIsImludHJvX2ltYWdlIiwiaXNfaGFzX2JsZXNzIiwiaXNfdXNlIiwiZGF0YUludHJvIiwidW5kZWZpbmVkIiwibWVzc2FnZSIsImlwIiwiY3VycmVudERhdGUiLCJmb3JtYXQiLCJkYXRlX2NyZWF0ZWQiLCJkYXRlX3VwZGF0ZWQiLCJuZXdJbnRybyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGYTs7QUFDYixNQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsc0JBQUQsQ0FBdEI7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LENBQXpCLENBbER3QixDQXFEeEI7O0FBQ0EsUUFBTTZHLFFBQVEsR0FBRyxNQUFNaE0sTUFBTSxDQUFDb0ssS0FBUCxDQUFhN0YsTUFBYixDQUFvQmlILFNBQXBCLENBQXZCOztBQUVBLE1BQUlRLFFBQVEsSUFBSSxJQUFoQixFQUFzQjtBQUNwQixXQUFPMUssR0FBRyxDQUFDYSxNQUFKLENBQVcsR0FBWCxFQUFnQnVJLElBQWhCLENBQXFCO0FBQzFCdkksWUFBTSxFQUFFLEdBRGtCO0FBRTFCdUosYUFBTyxFQUFFO0FBRmlCLEtBQXJCLENBQVA7QUFJRDs7QUFDRCxTQUFPcEssR0FBRyxDQUFDYSxNQUFKLENBQVcsR0FBWCxFQUFnQnVJLElBQWhCLENBQXFCO0FBQzFCdkksVUFBTSxFQUFFLEdBRGtCO0FBRTFCdUosV0FBTyxFQUFFO0FBRmlCLEdBQXJCLENBQVA7QUFJRCxDQTVOYSxDQUFoQjtBQThOZXpDLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdk9BLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHNDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhcGlcXGFkbWluXFxtYW5hZ2VtZW50XFxsYW5kaW5nLXBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTQpO1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5jb25zdCBkb3RlbnYgPSByZXF1aXJlKFwiZG90ZW52XCIpXHJcbmNvbnN0IHJlc3VsdCA9IGRvdGVudi5jb25maWcoKVxyXG5cclxuLy8gaWYgKHJlc3VsdC5lcnJvcikge1xyXG4vLyAgIHRocm93IHJlc3VsdC5lcnJvclxyXG4vLyB9XHJcblxyXG4vLyBjb25zb2xlLmxvZyhyZXN1bHQucGFyc2VkKVxyXG5cclxuLy8gZG90ZW52LmNvbmZpZyh7IHBhdGg6IF9fZGlybmFtZSArICcuZW52JyB9KTtcclxuLy8gY29uc29sZS5sb2coXCJwcm9jZXNzLmVudi5EQl9VU0VSXCIpO1xyXG4vLyBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5EQl9IT1NUKTtcclxuLy8gZG90ZW52LmNvbmZpZyh7IHBhdGg6ICcuL2NvbmZpZy5lbnYnIH0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBkZXZlbG9wbWVudDoge1xyXG4gICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LkRCX1VTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTUyxcclxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxyXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcclxuICAgIGRpYWxlY3Q6ICdteXNxbCcsXHJcbiAgfSxcclxuICB0ZXN0OiB7XHJcbiAgICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuREJfVVNFUixcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTLFxyXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX05BTUUsXHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxyXG4gICAgZGlhbGVjdDogJ215c3FsJyxcclxuICAgIGxvZ2dpbmc6IGZhbHNlLFxyXG4gIH0sXHJcbiAgcHJvZHVjdGlvbjoge1xyXG4gICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LkRCX1VTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTUyxcclxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxyXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcclxuICAgIGRpYWxlY3Q6ICdteXNxbCcsXHJcbiAgICBkaWFsZWN0T3B0aW9uczoge1xyXG4gICAgICBzc2w6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XHJcbmNvbnN0IGJhc2VuYW1lID0gcGF0aC5iYXNlbmFtZShfX2ZpbGVuYW1lKTtcclxuY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JztcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZShfX2Rpcm5hbWUgKyAnLy4uL2NvbmZpZy9jb25maWcuanMnKVtlbnZdO1xyXG5jb25zdCBkYiA9IHt9O1xyXG5cclxuLyogQ3VzdG9tIGhhbmRsZXIgZm9yIHJlYWRpbmcgY3VycmVudCB3b3JraW5nIGRpcmVjdG9yeSAqL1xyXG5jb25zdCBtb2RlbHMgPSBwcm9jZXNzLmN3ZCgpICsgJy9kYi9tb2RlbHMvJyB8fCBfX2Rpcm5hbWU7XHJcblxyXG5sZXQgc2VxdWVsaXplO1xyXG5pZiAoY29uZmlnLnVzZV9lbnZfdmFyaWFibGUpIHtcclxuICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKHByb2Nlc3MuZW52W2NvbmZpZy51c2VfZW52X3ZhcmlhYmxlXSwgY29uZmlnKTtcclxufSBlbHNlIHtcclxuICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKFxyXG4gICAgY29uZmlnLmRhdGFiYXNlLFxyXG4gICAgY29uZmlnLnVzZXJuYW1lLFxyXG4gICAgY29uZmlnLnBhc3N3b3JkLFxyXG4gICAgY29uZmlnLFxyXG4gICk7XHJcbn1cclxuLyogZnMucmVhZGRpclN5bmMoX19kaXJuYW1lKSAqL1xyXG5mcy5yZWFkZGlyU3luYyhtb2RlbHMpXHJcbiAgLmZpbHRlcihmaWxlID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGZpbGUuaW5kZXhPZignLicpICE9PSAwICYmIGZpbGUgIT09IGJhc2VuYW1lICYmIGZpbGUuc2xpY2UoLTMpID09PSAnLmpzJ1xyXG4gICAgKTtcclxuICB9KVxyXG4gIC5mb3JFYWNoKGZpbGUgPT4ge1xyXG4gICAgLyogY29uc3QgbW9kZWwgPSBzZXF1ZWxpemVbXCJpbXBvcnRcIl0ocGF0aC5qb2luKF9fZGlybmFtZSwgZmlsZSkpOyAqL1xyXG4gICAgY29uc3QgbW9kZWwgPSBzZXF1ZWxpemVbJ2ltcG9ydCddKHBhdGguam9pbihtb2RlbHMsIGZpbGUpKTtcclxuICAgIGRiW21vZGVsLm5hbWVdID0gbW9kZWw7XHJcbiAgfSk7XHJcblxyXG5PYmplY3Qua2V5cyhkYikuZm9yRWFjaChtb2RlbE5hbWUgPT4ge1xyXG4gIGlmIChkYlttb2RlbE5hbWVdLmFzc29jaWF0ZSkge1xyXG4gICAgZGJbbW9kZWxOYW1lXS5hc3NvY2lhdGUoZGIpO1xyXG4gIH1cclxufSk7XHJcblxyXG5kYi5zZXF1ZWxpemUgPSBzZXF1ZWxpemU7XHJcbmRiLlNlcXVlbGl6ZSA9IFNlcXVlbGl6ZTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGI7XHJcbiIsImltcG9ydCBuZXh0Q29ubmVjdCBmcm9tICduZXh0LWNvbm5lY3QnO1xyXG5pbXBvcnQgeyB2ZXJpZnlUb2tlbiB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuY29uc3QgbWlkZGxld2FyZSA9IG5leHRDb25uZWN0KCk7XHJcblxyXG4vKiBTYW1wbGUgdXNpbmcgbWlkZGxld2FyZSAqL1xyXG4vKiBtaWRkbGV3YXJlLnVzZShkYXRhYmFzZSkudXNlKHNlc3Npb24pLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpLnVzZShwYXNzcG9ydC5zZXNzaW9uKCkpOyAqL1xyXG5cclxuLyogU2V0IHJlc3RyaWN0ZWQgcHVibGljIGFjY2VzcyAvIHB1dCBhbnkgYXBpIGFjY2VzcyB0aGF0IGlzIHJlc3RyaWN0ZWQgaW4gaGVyZSAqL1xyXG5jb25zdCByZXN0cmljdGVkID0gWycvYXBpL29yZ2FuaXphdGlvbi9bb3JnYW5pemF0aW9uLWlkXV0nLCAnL2FwaS9qb2IvW3NsdWddJ107XHJcblxyXG4vKlxyXG4gKiBAcGFyYW1zIHtyZXF1ZXN0LCByZXNwb25zZSwgY2FsbGJhY2t9IGRlZmF1bHQgUmVxdWVzdCBhbmQgUmVzcG9uc2VcclxuICogQHJldHVybiB7b2JqZWN0fSBvYmplY3QgaWYgdHJ1ZSwgcmVzcG9uc2UgbWVzc2FnZSBpZiBmYWxzZSBhbmQgY29udGludWVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IG1pZGRsZXdhcmUudXNlKGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gIGxldCBhdXRoSGVhZGVyID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbiB8fCAnJztcclxuICBsZXQgdXNlciA9IHt9O1xyXG5cclxuICBpZiAoIXJlc3RyaWN0ZWQuaW5jbHVkZXMocmVxLnVybCkgJiYgIWF1dGhIZWFkZXIpIHtcclxuICAgIHJldHVybiBuZXh0KCk7XHJcbiAgfVxyXG4gIGlmIChhdXRoSGVhZGVyKSB7XHJcbiAgICBsZXQgc2Vzc2lvbklEID0gYXV0aEhlYWRlci5zcGxpdCgnICcpWzFdO1xyXG4gICAgaWYgKHNlc3Npb25JRCkge1xyXG4gICAgICB1c2VyID0gdmVyaWZ5VG9rZW4oc2Vzc2lvbklEKTtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAvKiBDb3VsZCBwdXQgY2hlY2sgYWdhaW5zdCB1c2VycyB0YWJsZXMgaW4gZGF0YWJhc2UgIFVzZXIuZmluZCh7ZW1haWw6dXNlci5lbWFpbH0pICovXHJcbiAgICAgICAgcmVxLnVzZXIgPSB1c2VyO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDAxO1xyXG4gICAgICAgIHJldHVybiByZXMuc2VuZCh7XHJcbiAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXHJcbiAgICAgICAgICBlcnJvcjogJ0V4cGlyZWQnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXMuc3RhdHVzQ29kZSA9IDQwMTtcclxuICAgICAgcmV0dXJuIHJlcy5zZW5kKHtcclxuICAgICAgICBzdGF0dXM6ICdlcnJvcicsXHJcbiAgICAgICAgZXJyb3I6ICdXcm9uZyBUb2tlbicsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzQ29kZSA9IDQwMTtcclxuICAgIHJldHVybiByZXMuc2VuZCh7XHJcbiAgICAgIHN0YXR1czogJ2Vycm9yJyxcclxuICAgICAgZXJyb3I6ICdVbmF1dGhvcml6ZWQnLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBuZXh0KCk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBTRUNSRVRfS0VZID0gcHJvY2Vzcy5lbnYuSldUX0tFWTtcclxuXHJcbi8qXHJcbiAqIEBwYXJhbXMge2p3dFRva2VufSBleHRyYWN0ZWQgZnJvbSBjb29raWVzXHJcbiAqIEByZXR1cm4ge29iamVjdH0gb2JqZWN0IG9mIGV4dHJhY3RlZCB0b2tlblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRva2VuKGp3dFRva2VuKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBqd3QudmVyaWZ5KGp3dFRva2VuLCBTRUNSRVRfS0VZKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZygnZTonLCBlKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuLypcclxuICogQHBhcmFtcyB7cmVxdWVzdH0gZXh0cmFjdGVkIGZyb20gcmVxdWVzdCByZXNwb25zZVxyXG4gKiBAcmV0dXJuIHtvYmplY3R9IG9iamVjdCBvZiBwYXJzZSBqd3QgY29va2llIGRlY29kZSBvYmplY3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBcHBDb29raWVzKHJlcSkge1xyXG4gIGNvbnN0IHBhcnNlZEl0ZW1zID0ge307XHJcbiAgaWYgKHJlcS5oZWFkZXJzLmNvb2tpZSkge1xyXG4gICAgY29uc3QgY29va2llc0l0ZW1zID0gcmVxLmhlYWRlcnMuY29va2llLnNwbGl0KCc7ICcpO1xyXG4gICAgY29va2llc0l0ZW1zLmZvckVhY2goY29va2llcyA9PiB7XHJcbiAgICAgIGNvbnN0IHBhcnNlZEl0ZW0gPSBjb29raWVzLnNwbGl0KCc9Jyk7XHJcbiAgICAgIHBhcnNlZEl0ZW1zW3BhcnNlZEl0ZW1bMF1dID0gZGVjb2RlVVJJKHBhcnNlZEl0ZW1bMV0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBwYXJzZWRJdGVtcztcclxufVxyXG5cclxuLypcclxuICogQHBhcmFtcyB7cmVxdWVzdH0gZXh0cmFjdGVkIGZyb20gcmVxdWVzdCByZXNwb25zZSwge3NldExvY2FsaG9zdH0geW91ciBsb2NhbGhvc3QgYWRkcmVzc1xyXG4gKiBAcmV0dXJuIHtvYmplY3R9IG9iamVjdHMgb2YgcHJvdG9jb2wsIGhvc3QgYW5kIG9yaWdpblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFic29sdXRlVXJsKHJlcSwgc2V0TG9jYWxob3N0KSB7XHJcbiAgdmFyIHByb3RvY29sID0gJ2h0dHBzOic7XHJcbiAgdmFyIGhvc3QgPSByZXFcclxuICAgID8gcmVxLmhlYWRlcnNbJ3gtZm9yd2FyZGVkLWhvc3QnXSB8fCByZXEuaGVhZGVyc1snaG9zdCddXHJcbiAgICA6IHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xyXG4gIGlmIChob3N0LmluZGV4T2YoJ2xvY2FsaG9zdCcpID4gLTEpIHtcclxuICAgIGlmIChzZXRMb2NhbGhvc3QpIGhvc3QgPSBzZXRMb2NhbGhvc3Q7XHJcbiAgICBwcm90b2NvbCA9ICdodHRwOic7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm90b2NvbDogcHJvdG9jb2wsXHJcbiAgICBob3N0OiBob3N0LFxyXG4gICAgb3JpZ2luOiBwcm90b2NvbCArICcvLycgKyBob3N0LFxyXG4gICAgdXJsOiByZXEsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZERheXMoZGF0ZSwgZGF5cykge1xyXG4gIHZhciByZXN1bHQgPSBuZXcgRGF0ZShkYXRlKTtcclxuICByZXN1bHQuc2V0RGF0ZShyZXN1bHQuZ2V0RGF0ZSgpICsgZGF5cyk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy9ZWVlZLU1NLUREXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlV2l0aG91dFRpbWUoZGF0ZSkge1xyXG4gIHZhciBkYXRlU3RyaW5nID1cclxuICAgIGRhdGUuZ2V0VVRDRnVsbFllYXIoKSArIFwiLVwiICtcclxuICAgIChcIjBcIiArIChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSkuc2xpY2UoLTIpICsgXCItXCIgK1xyXG4gICAgKFwiMFwiICsgZGF0ZS5nZXRVVENEYXRlKCkpLnNsaWNlKC0yKSArIFwiIFwiXHJcbiAgcmV0dXJuIGRhdGVTdHJpbmc7XHJcbn1cclxuLy8gY29uc3QgYXBpID0gcHJvY2Vzcy5lbnYuUFVCTElDX1VSTFxyXG5cclxuZXhwb3J0IGNvbnN0IGFwaUluc3RhbmNlID0gKCkgPT4ge1xyXG4gIC8vIGNvbnN0IGF1dGhvcml6YXRpb24gPSBzdG9yZS5nZXRTdGF0ZSgpLnVzZXJTdGF0ZS50b2tlbiA/IHN0b3JlLmdldFN0YXRlKCkudXNlclN0YXRlLnRva2VuIDogbnVsbFxyXG5cclxuICAvLyBjb25zdCBoZWFkZXJzID0ge1xyXG4gIC8vIFx0J3gtYXBpLXRva2VuJzogYXV0aG9yaXphdGlvbiA/IGF1dGhvcml6YXRpb24gOiAnJyxcclxuICAvLyB9XHJcblxyXG4gIHJldHVybiBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogJy9hcGknLFxyXG4gICAgLy8gaGVhZGVycyxcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tJc0xvZ2luID0gKCkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKFwiY2hlY2tJc0xvZ2luXCIpXHJcbiAgdmFyIHRva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJykgLy8gPT4gJ3ZhbHVlJ1xyXG5cclxuICBpZiAoIXRva2VuKSB7XHJcbiAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8vIGNvbnNvbGUubG9nKHBhcnNlSnd0KHRva2VuKSlcclxuICByZXR1cm4gcGFyc2VKd3QodG9rZW4pXHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VKd3QodG9rZW4pIHtcclxuXHJcbiAgdmFyIGlzRXhwaXJlZCA9IGZhbHNlO1xyXG4gIC8vIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJyk7XHJcblxyXG5cclxuXHJcbiAgdmFyIGJhc2U2NFVybCA9IHRva2VuLnNwbGl0KCcuJylbMV07XHJcbiAgdmFyIGJhc2U2NCA9IGJhc2U2NFVybC5yZXBsYWNlKC8tL2csICcrJykucmVwbGFjZSgvXy9nLCAnLycpO1xyXG4gIHZhciBqc29uUGF5bG9hZCA9IGRlY29kZVVSSUNvbXBvbmVudChhdG9iKGJhc2U2NCkuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoYykge1xyXG4gICAgcmV0dXJuICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xyXG4gIH0pLmpvaW4oJycpKTtcclxuICB2YXIgX2pzb25QYXlsb2FkID0gSlNPTi5wYXJzZShqc29uUGF5bG9hZClcclxuICB2YXIgZGF0ZU5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgLy8gY29uc29sZS5sb2cocGFyc2VJbnQoX2pzb25QYXlsb2FkLmV4cCkpXHJcbiAgLy8gY29uc29sZS5sb2cocGFyc2VJbnQoKGRhdGVOb3cuZ2V0VGltZSgpKS50b1N0cmluZygpLnN1YnN0cmluZygwLDEwKSkpXHJcbiAgaWYgKHBhcnNlSW50KF9qc29uUGF5bG9hZC5leHApIDwgcGFyc2VJbnQoKGRhdGVOb3cuZ2V0VGltZSgpKS50b1N0cmluZygpLnN1YnN0cmluZygwLCAxMCkpKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRydWVcIilcclxuXHJcbiAgICBpc0V4cGlyZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzRXhwaXJlZCkge1xyXG4gICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG4gIHJldHVybiBfanNvblBheWxvYWQ7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUoZGF0ZSkge1xyXG4gIHRyeSB7XHJcbiAgICB2YXIgZGF0ZVNwbGl0ID0gZGF0ZS50b1N0cmluZygpLnNwbGl0KFwiVFwiKTtcclxuICAgIHJldHVybiBkYXRlU3BsaXRbMF07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyV2l0aFRpbWUoZGF0ZSkge1xyXG4gIHRyeSB7XHJcbiAgICAvLzowNy4wMDBaXHJcbiAgICAvL1NhbXBsZVRleHQucmVwbGFjZShcIkRldmVsb3BlclwiLCBcIkFwcCBCdWlsZGVyXCIpO1xyXG4gICAgdmFyIGRhdGVTcGxpdCA9IGRhdGUudG9TdHJpbmcoKS5zcGxpdChcIlRcIik7XHJcbiAgICByZXR1cm4gZGF0ZVNwbGl0WzBdICsgXCIgXCIgKyBkYXRlU3BsaXRbMV0ucmVwbGFjZShcIi4wMDBaXCIsIFwiXCIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydERhdGV0b1RoYWlEYXRlKGRhdGUpIHtcclxuICB2YXIgX2RhdGUgPSBjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lKGRhdGUpXHJcbiAgdmFyIGRhdGVTcGxpdCA9IF9kYXRlLnRvU3RyaW5nKCkuc3BsaXQoXCItXCIpO1xyXG4gIC8vIDIwMjEtMDktMTZcclxuICByZXR1cm4gZGF0ZVNwbGl0WzJdICsgXCIgXCIgKyBjb252ZXJ0TW9udGh0b1RoYWlNb250aChkYXRlU3BsaXRbMV0pICsgXCIgXCIgKyBjb252ZXJ0WWVhcnRvVGhhaVllYXIoZGF0ZVNwbGl0WzBdKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFllYXJ0b1RoYWlZZWFyKHllYXIpIHtcclxuICByZXR1cm4gcGFyc2VJbnQoeWVhcikgKyA1NDNcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRNb250aHRvVGhhaU1vbnRoKG1vbnRoKSB7XHJcbiAgc3dpdGNoIChtb250aCkge1xyXG4gICAgY2FzZSBcIjAxXCI6XHJcbiAgICAgIHJldHVybiBcIuC4oeC4geC4o+C4suC4hOC4oVwiXHJcbiAgICBjYXNlIFwiMDJcIjpcclxuICAgICAgcmV0dXJuIFwi4LiB4Li44Lih4Lig4Liy4Lie4Lix4LiZ4LiY4LmMXCJcclxuICAgIGNhc2UgXCIwM1wiOlxyXG4gICAgICByZXR1cm4gXCLguKHguLXguJnguLLguITguKFcIlxyXG4gICAgY2FzZSBcIjA0XCI6XHJcbiAgICAgIHJldHVybiBcIuC5gOC4oeC4qeC4suC4ouC4mVwiXHJcbiAgICBjYXNlIFwiMDVcIjpcclxuICAgICAgcmV0dXJuIFwi4Lie4Lik4Lip4Lig4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIwNlwiOlxyXG4gICAgICByZXR1cm4gXCLguKHguLTguJbguLjguJnguLLguKLguJlcIlxyXG4gICAgY2FzZSBcIjA3XCI6XHJcbiAgICAgIHJldHVybiBcIuC4geC4o+C4geC4juC4suC4hOC4oVwiXHJcbiAgICBjYXNlIFwiMDhcIjpcclxuICAgICAgcmV0dXJuIFwi4Liq4Li04LiH4Lir4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIwOVwiOlxyXG4gICAgICByZXR1cm4gXCLguIHguLHguJnguKLguLLguKLguJlcIlxyXG4gICAgY2FzZSBcIjEwXCI6XHJcbiAgICAgIHJldHVybiBcIuC4leC4uOC4peC4suC4hOC4oVwiXHJcbiAgICBjYXNlIFwiMTFcIjpcclxuICAgICAgcmV0dXJuIFwi4Lie4Lik4Lio4LiI4Li04LiB4Liy4Lii4LiZXCJcclxuICAgIGNhc2UgXCIxMlwiOlxyXG4gICAgICByZXR1cm4gXCLguJjguLHguJnguKfguLLguITguKFcIlxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFwiTkFOXCJcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RGF0ZXRvQWRkREIoZGF0ZSkge1xyXG4gIHZhciBkYXRlU3BsaXQgPSBkYXRlLnNwbGl0KFwiIFwiKTtcclxuICByZXR1cm4gZGF0ZVNwbGl0WzBdICsgXCJUXCIgKyBkYXRlU3BsaXRbMV0gKyBcIiswMDowMFwiO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SVBBZGRyZXNzKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9nZW9sb2NhdGlvbi1kYi5jb20vanNvbi8nKVxyXG4gIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAvLyByZXR1cm4gcmVzLmRhdGFcclxuICByZXR1cm4gXCJjb3VudHJ5X2NvZGU6XCIgKyByZXMuZGF0YS5jb3VudHJ5X2NvZGUgKyBcIixjb3VudHJ5X25hbWU6XCIgKyByZXMuZGF0YS5jb3VudHJ5X25hbWUgKyBcIixjaXR5OlwiICsgcmVzLmRhdGEuY2l0eSArIFwiLHBvc3RhbDpcIiArIHJlcy5kYXRhLnBvc3RhbFxyXG4gICAgKyBcIixsYXRpdHVkZTpcIiArIHJlcy5kYXRhLmxhdGl0dWRlICsgXCIsbG9uZ2l0dWRlOlwiICsgcmVzLmRhdGEubG9uZ2l0dWRlICsgXCIsSVB2NDpcIiArIHJlcy5kYXRhLklQdjQgKyBcIixzdGF0ZTpcIiArIHJlcy5kYXRhLnN0YXRlXHJcbiAgLy8gc2V0SVAocmVzLmRhdGEuSVB2NClcclxuICAvLyByZXR1cm5cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYnl0ZXNUb1NpemUoYnl0ZXMpIHtcclxuICB2YXIgc2l6ZXMgPSBbJ0J5dGVzJywgJ0tCJywgJ01CJywgJ0dCJywgJ1RCJ107XHJcbiAgaWYgKGJ5dGVzID09IDApIHJldHVybiAnMCBCeXRlJztcclxuICB2YXIgaSA9IHBhcnNlSW50KE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2coMTAyNCkpKTtcclxuICByZXR1cm4gTWF0aC5yb3VuZChieXRlcyAvIE1hdGgucG93KDEwMjQsIGkpLCAyKSArICcgJyArIHNpemVzW2ldO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ5dGVzVG9NQihieXRlcykge1xyXG4gIHJldHVybiBOdW1iZXIucGFyc2VGbG9hdChieXRlcyAvICgxMDI0ICogMTAyNCkpLnRvRml4ZWQoMik7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0ZWRpZmYoc3RhcnREYXRlKSB7XHJcblxyXG4gIGNvbnN0IHRpbWVFbmQgPSBtb21lbnQoKTtcclxuICBjb25zdCBuZXdTdGFydERhdGUgPSBuZXcgRGF0ZShzdGFydERhdGUpO1xyXG4gIGNvbnN0IG5ld0VuZERhdGUgPSBuZXcgRGF0ZSh0aW1lRW5kKTtcclxuICBjb25zdCBvbmVfZGF5ID0gMTAwMCAqIDYwICogNjAgKiAyNDtcclxuICBsZXQgcmVzdWx0XHJcbiAgcmVzdWx0ID0gTWF0aC5jZWlsKChuZXdTdGFydERhdGUuZ2V0VGltZSgpIC0gbmV3RW5kRGF0ZS5nZXRUaW1lKCkpIC8gKG9uZV9kYXkpKVxyXG4gIGNvbnNvbGUubG9nKCdkYXRlIENvbnZlcnRlciByZXN1bHQnLCByZXN1bHQpXHJcblxyXG5cclxuICByZXR1cm4gcmVzdWx0IC0gMTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50RGF0ZShzZXBhcmF0b3IgPSAnJykge1xyXG5cclxuICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKClcclxuICBsZXQgZGF0ZSA9IG5ld0RhdGUuZ2V0RGF0ZSgpO1xyXG4gIGxldCBtb250aCA9IG5ld0RhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgbGV0IHllYXIgPSBuZXdEYXRlLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gIHJldHVybiBgJHt5ZWFyfSR7c2VwYXJhdG9yfSR7bW9udGggPCAxMCA/IGAwJHttb250aH1gIDogYCR7bW9udGh9YH0ke3NlcGFyYXRvcn0ke2RhdGV9YFxyXG59XHJcbiIsImltcG9ydCBuZXh0Q29ubmVjdCBmcm9tICduZXh0LWNvbm5lY3QnO1xyXG5cclxuY29uc3QgbW9kZWxzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vZGIvbW9kZWxzL2luZGV4Jyk7XHJcbmltcG9ydCBtaWRkbGV3YXJlIGZyb20gJy4uLy4uLy4uLy4uLy4uL21pZGRsZXdhcmUvYXV0aCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgYWJzb2x1dGVVcmwsIGNoZWNrSXNMb2dpbiwgZ2V0SVBBZGRyZXNzLCBjb252ZXJ0RGF0ZXRvQWRkREIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9taWRkbGV3YXJlL3V0aWxzJztcclxuY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XHJcbmNvbnN0IE9wID0gU2VxdWVsaXplLk9wO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IG5leHRDb25uZWN0KClcclxuICAvLyBNaWRkbGV3YXJlXHJcbiAgLnVzZShtaWRkbGV3YXJlKVxyXG4gIC8vIEdldCBtZXRob2RcclxuICAuZ2V0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBtZXRob2QsXHJcbiAgICAgIGJvZHksXHJcbiAgICB9ID0gcmVxO1xyXG4gICAgY29uc3QgeyByZXN1bHRzLCBwYWdlLCBzZWFyY2gsIHNvcnRGaWVsZCA9IFwiaW50cm9faWRcIiwgc29ydE9yZGVyID0gXCJERVNDXCIsIGZpbHRlcnMgPSBbXSwgaXNBZG1pbiA9IDAsIG9yZ2FuaXphdGlvbl9pZCA9IDAgfSA9IHJlcS5xdWVyeTtcclxuICAgIGxldCBfc2VhcmNoID0ge307XHJcblxyXG4gICAgaWYgKGlzQWRtaW4gPT0gMSkge1xyXG4gICAgICBpZiAoc2VhcmNoICE9IFwiXCIpIHtcclxuICAgICAgICBpZiAoZmlsdGVycyA9PSAndW5kZWZpbmVkJyB8fCBmaWx0ZXJzID09IFwibnVsbFwiKSB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImlmMVwiKVxyXG4gICAgICAgICAgX3NlYXJjaCA9IHtcclxuICAgICAgICAgICAgaXNfZGVsZXRlZDoge1xyXG4gICAgICAgICAgICAgIFtPcC5uZV06IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGludHJvX3RpdGxlOiB7XHJcbiAgICAgICAgICAgICAgW09wLmxpa2VdOiAnJScgKyBzZWFyY2ggKyAnJSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaXNfYWRtaW46IGlzQWRtaW5cclxuXHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImlmMlwiKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coZmlsdGVycylcclxuICAgICAgICAgIF9zZWFyY2ggPSB7XHJcbiAgICAgICAgICAgIGlzX2RlbGV0ZWQ6IHtcclxuICAgICAgICAgICAgICBbT3AubmVdOiAxLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbnRyb190aXRsZToge1xyXG4gICAgICAgICAgICAgIFtPcC5saWtlXTogJyUnICsgc2VhcmNoICsgJyUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGlzX2FkbWluOiBpc0FkbWluXHJcblxyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoZmlsdGVycyA9PSAndW5kZWZpbmVkJyB8fCBmaWx0ZXJzID09ICdudWxsJykge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpZjNcIilcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZpbHRlcnMpXHJcblxyXG4gICAgICAgICAgX3NlYXJjaCA9IHtcclxuXHJcbiAgICAgICAgICAgIGlzX2RlbGV0ZWQ6IHtcclxuICAgICAgICAgICAgICBbT3AubmVdOiAxLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpc19hZG1pbjogaXNBZG1pblxyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpZjRcIilcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZpbHRlcnMpXHJcbiAgICAgICAgICBfc2VhcmNoID0ge1xyXG5cclxuICAgICAgICAgICAgaXNfZGVsZXRlZDoge1xyXG4gICAgICAgICAgICAgIFtPcC5uZV06IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGlzX2FkbWluOiBpc0FkbWluXHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICAvLyB1c2VyXHJcbiAgICAgIGlmIChzZWFyY2ggIT0gXCJcIikge1xyXG4gICAgICAgIGlmIChmaWx0ZXJzID09ICd1bmRlZmluZWQnIHx8IGZpbHRlcnMgPT0gXCJudWxsXCIpIHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaWYxXCIpXHJcbiAgICAgICAgICBfc2VhcmNoID0ge1xyXG4gICAgICAgICAgICBpc19kZWxldGVkOiB7XHJcbiAgICAgICAgICAgICAgW09wLm5lXTogMSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW50cm9fdGl0bGU6IHtcclxuICAgICAgICAgICAgICBbT3AubGlrZV06ICclJyArIHNlYXJjaCArICclJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcmdhbml6YXRpb25faWQgOiBvcmdhbml6YXRpb25faWRcclxuXHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImlmMlwiKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coZmlsdGVycylcclxuICAgICAgICAgIF9zZWFyY2ggPSB7XHJcbiAgICAgICAgICAgIGlzX2RlbGV0ZWQ6IHtcclxuICAgICAgICAgICAgICBbT3AubmVdOiAxLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbnRyb190aXRsZToge1xyXG4gICAgICAgICAgICAgIFtPcC5saWtlXTogJyUnICsgc2VhcmNoICsgJyUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9yZ2FuaXphdGlvbl9pZCA6IG9yZ2FuaXphdGlvbl9pZFxyXG5cclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGZpbHRlcnMgPT0gJ3VuZGVmaW5lZCcgfHwgZmlsdGVycyA9PSAnbnVsbCcpIHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaWYzXCIpXHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmaWx0ZXJzKVxyXG5cclxuICAgICAgICAgIF9zZWFyY2ggPSB7XHJcblxyXG4gICAgICAgICAgICBpc19kZWxldGVkOiB7XHJcbiAgICAgICAgICAgICAgW09wLm5lXTogMSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb3JnYW5pemF0aW9uX2lkIDogb3JnYW5pemF0aW9uX2lkXHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImlmNFwiKVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZmlsdGVycylcclxuICAgICAgICAgIF9zZWFyY2ggPSB7XHJcblxyXG4gICAgICAgICAgICBpc19kZWxldGVkOiB7XHJcbiAgICAgICAgICAgICAgW09wLm5lXTogMSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb3JnYW5pemF0aW9uX2lkIDogb3JnYW5pemF0aW9uX2lkXHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKF9zZWFyY2gpXHJcbiAgICBjb25zdCBfaW50cm8gPSBhd2FpdCBtb2RlbHMuaW50cm8uZmluZEFuZENvdW50QWxsKHtcclxuICAgICAgLy8gYXR0cmlidXRlczogWydwYWNrYWdlX2lkJywnY29kZV9wYWNrYWdlJywnbmFtZV9wYWNrYWdlJywnc2l6ZV9saW1pdCddXHJcbiAgICAgIHdoZXJlOiBfc2VhcmNoLFxyXG4gICAgICBvZmZzZXQ6IHJlc3VsdHMgKiAocGFnZSAtIDEpLFxyXG4gICAgICBsaW1pdDogcGFyc2VJbnQocmVzdWx0cyksXHJcbiAgICAgIG9yZGVyOiBbXHJcbiAgICAgICAgW3NvcnRGaWVsZCAhPSBcInVuZGVmaW5lZFwiICYmIHNvcnRPcmRlciAhPSBcInVuZGVmaW5lZFwiID8gc29ydEZpZWxkIDogXCJpbnRyb19pZFwiLCBzb3J0T3JkZXIgIT0gXCJ1bmRlZmluZWRcIiA/IHNvcnRPcmRlciA9PSBcImFzY2VuZFwiID8gXCJBU0NcIiA6IFwiREVTQ1wiIDogXCJERVNDXCJdXHJcbiAgICAgIF1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgaW5mbzoge1xyXG4gICAgICAgIHBhZ2U6IHBhZ2UsXHJcbiAgICAgICAgcmVzdWx0czogcmVzdWx0c1xyXG4gICAgICB9LFxyXG4gICAgICByZXN1bHRzOiBfaW50cm8ucm93cyxcclxuICAgICAgdG90YWxDb3VudDogX2ludHJvLmNvdW50XHJcbiAgICB9KTtcclxuICB9KVxyXG4gIC5wb3N0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBib2R5IH0gPSByZXE7XHJcbiAgICBjb25zdCB7IHNsdWcgfSA9IHJlcS5xdWVyeTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgb3JnYW5pemF0aW9uX2lkLFxyXG4gICAgICBpbnRyb190aXRsZSxcclxuICAgICAgaW50cm9fdXJsLFxyXG4gICAgICBpbnRyb19idG4sXHJcbiAgICAgIGludHJvX2RhdGVfcyxcclxuICAgICAgaW50cm9fZGF0ZV9lLFxyXG4gICAgICBpbnRyb19pbWFnZSxcclxuICAgICAgaXNfaGFzX2JsZXNzLFxyXG4gICAgICBpc19hZG1pbixcclxuICAgICAgaXNfdXNlXHJcbiAgICB9ID0gYm9keTtcclxuICAgIC8vU2FtcGxlVGV4dC5yZXBsYWNlKFwiRGV2ZWxvcGVyXCIsIFwiQXBwIEJ1aWxkZXJcIik7XHJcbiAgICBjb25zdCBkYXRhSW50cm8gPSB7XHJcbiAgICAgIG9yZ2FuaXphdGlvbl9pZDogb3JnYW5pemF0aW9uX2lkLFxyXG4gICAgICBpbnRyb190aXRsZTogaW50cm9fdGl0bGUsXHJcbiAgICAgIGludHJvX3VybDogaW50cm9fdXJsLFxyXG4gICAgICBpbnRyb19idG46IGludHJvX2J0bixcclxuICAgICAgaW50cm9fZGF0ZV9zOiBpbnRyb19kYXRlX3MucmVwbGFjZShcIiswNzowMFwiLCBcIiswMDowMFwiKSxcclxuICAgICAgaW50cm9fZGF0ZV9lOiBpbnRyb19kYXRlX2UucmVwbGFjZShcIiswNzowMFwiLCBcIiswMDowMFwiKSxcclxuICAgICAgaW50cm9faW1hZ2U6IGludHJvX2ltYWdlLFxyXG4gICAgICBpc19oYXNfYmxlc3M6IGlzX2hhc19ibGVzcyxcclxuICAgICAgaXNfYWRtaW46IGlzX2FkbWluLFxyXG4gICAgICBpc191c2U6IGlzX3VzZSxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBvcmdhbml6YXRpb25faWQgPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgIGludHJvX3RpdGxlID09IHVuZGVmaW5lZCB8fCBpbnRyb191cmwgPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgIGludHJvX2J0biA9PSB1bmRlZmluZWQgfHwgaW50cm9fZGF0ZV9zID09IHVuZGVmaW5lZCB8fFxyXG4gICAgICBpbnRyb19kYXRlX2UgPT0gdW5kZWZpbmVkIHx8IGludHJvX2ltYWdlID09IHVuZGVmaW5lZCB8fFxyXG4gICAgICBpc19oYXNfYmxlc3MgPT0gdW5kZWZpbmVkIHx8IGlzX2FkbWluID09IHVuZGVmaW5lZCB8fFxyXG4gICAgICBpc191c2UgPT0gdW5kZWZpbmVkXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBzdGF0dXM6IDIwMSxcclxuICAgICAgICBtZXNzYWdlOiAnZGF0YSBpbmNvcnJlY3QnLFxyXG4gICAgICAgIGRhdGFJbnRybzogZGF0YUludHJvXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdmFyIGlwID0gYXdhaXQgZ2V0SVBBZGRyZXNzKClcclxuICAgIGNvbnNvbGUubG9nKFwiaXBcIilcclxuICAgIGNvbnNvbGUubG9nKGlwKVxyXG4gICAgdmFyIGN1cnJlbnREYXRlID0gbW9tZW50KCkuZm9ybWF0KClcclxuICAgIGRhdGFJbnRyby5pcCA9IGlwXHJcbiAgICBkYXRhSW50cm8uaXNfZGVsZXRlZCA9IDBcclxuICAgIGRhdGFJbnRyby5kYXRlX2NyZWF0ZWQgPSBjdXJyZW50RGF0ZS5yZXBsYWNlKFwiKzA3OjAwXCIsIFwiKzAwOjAwXCIpXHJcbiAgICBkYXRhSW50cm8uZGF0ZV91cGRhdGVkID0gY3VycmVudERhdGUucmVwbGFjZShcIiswNzowMFwiLCBcIiswMDowMFwiKVxyXG5cclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhSW50cm8pXHJcbiAgICBjb25zdCBuZXdJbnRybyA9IGF3YWl0IG1vZGVscy5pbnRyby5jcmVhdGUoZGF0YUludHJvKTtcclxuXHJcbiAgICBpZiAobmV3SW50cm8gPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe1xyXG4gICAgICAgIHN0YXR1czogNTAwLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdJbnRlcm5hbCBlcnJvcicsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgIG1lc3NhZ2U6ICfguJrguLHguJnguJfguLbguIHguILguYnguK3guKHguLnguKXguKrguLPguYDguKPguYfguIgnLFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1jb25uZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=