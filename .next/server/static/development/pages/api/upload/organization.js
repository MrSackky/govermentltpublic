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
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
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

/***/ "./pages/api/upload/organization/index.js":
/*!************************************************!*\
  !*** ./pages/api/upload/organization/index.js ***!
  \************************************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var formidable_serverless__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable-serverless */ "formidable-serverless");
/* harmony import */ var formidable_serverless__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formidable_serverless__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! multer */ "multer");
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../middleware/auth */ "./middleware/auth.js");
// import formidable from "formidable-serverless";
 // import Formidable from "formidable-serverless";
// import multiparty from 'multiparty'

 // import { IncomingForm } from 'formidable-serverless'





const models = __webpack_require__(/*! ../../../../db/models/index */ "./db/models/index.js");

const config = {
  api: {
    bodyParser: false
  }
}; // let storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/uploads/')
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '_' + file.originalname)
//   }
// })
// const upload = multer({ dest: 'uploads/' })

const saveFile = async file => {
  const data = fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFileSync(file.path);
  fs__WEBPACK_IMPORTED_MODULE_1___default.a.writeFileSync(`./public/${file.name}`, data);
  await fs__WEBPACK_IMPORTED_MODULE_1___default.a.unlinkSync(file.path);
  return;
};

const handler = next_connect__WEBPACK_IMPORTED_MODULE_3___default()() // Middleware
.use(_middleware_auth__WEBPACK_IMPORTED_MODULE_4__["default"]) // .use(middleware2)
.post(async (req, res) => {
  return new Promise(async (resolve, reject) => {
    try {
      const form = new formidable_serverless__WEBPACK_IMPORTED_MODULE_0___default.a.IncomingForm({
        multiples: true,
        keepExtensions: true
      });
      form.uploadDir = "./public/uploads/";
      form.keepExtensions = true;
      form.once("error", console.error);
      form.on("fileBegin", (name, file) => {
        console.log("start uploading: ", file.name);
      }).on("aborted", () => console.log("Aborted..."));
      form.once("end", () => {
        console.log("Done!");
      });
      await form.parse(req, async (err, fields, files) => {
        if (err) {
          throw String(JSON.stringify(err, null, 2));
        } // console.log(files)
        // console.log(
        //   "moving file: ",
        //   files.file.path,
        //   " to ",
        //   `public/uploads/${files.file.name}`
        // );
        // await fs.rename(
        //   files.file.path,
        //   `public/upload/${files.file.name}`,
        //   err => {
        //     if (err) throw err;
        //   }
        // );


        console.log("files");
        console.log(files);
        const upload = await multer__WEBPACK_IMPORTED_MODULE_2___default()({
          dest: `public/uploads/c-${fields.id}/organization/`
        });
        const _files = [];

        for (var i in files) {
          // console.log(files[i].path)
          const currentTimeInSeconds = Math.floor(Date.now() / 1000); //unix timestamp in seconds

          fs__WEBPACK_IMPORTED_MODULE_1___default.a.renameSync(files[i].path, `public/uploads/c-${fields.id}/organization/${currentTimeInSeconds + '-' + files[i].name}`);
          var data = {
            path: `public/uploads/c-${fields.id}/${currentTimeInSeconds + '-' + files[i].name}`,
            name: files[i].name,
            _name: currentTimeInSeconds + '-' + files[i].name
          };

          _files.push(data);
        } // fs.renameSync(files.file.path, `public/uploads/${files.file.name}`);


        req.form = {
          fields,
          files
        }; // console.log(fields)

        console.log(_files);
        return res.status(200).json({
          status: 200,
          'success': true,
          data: {
            'message': ["Upload completed."],
            "list": _files
          }
        }); // return resolve((req, res));
      });
    } catch (error) {
      console.log(error);
      return resolve(res.status(403).send(error));
    }
  }); // try {
  //   const promise = new Promise((resolve, reject) => {
  //     // var form = new formidable.IncomingForm({ uploadDir: __dirname + '/uploaded' });
  //     const form = new formidable.IncomingForm();
  //     form.uploadDir = "uploads/";
  //     form.keepExtensions = true;
  //     form.parse(req, (err, fields, files) => {
  //       if (err) reject(err);
  //       resolve({ fields, files });
  //     })
  //   })
  //   promise.then(({ fields, files }) => {
  //     // res.status(200).json({ fields, files })
  //     console.log(fields)
  //     // console.log(files)
  //     var result = [];
  //     for (var i in files) {
  //       result.push(files[i]);
  //       console.log(files[i])
  //       // const resultUpload =  uploader.single(files[i])
  //       // console.log(resultUpload)
  //     }
  //     // const filesArr = JSON.parse(files);
  //     // console.log(files)
  //     // console.log(result)
  //   })
  // } catch (error) {
  //   console.log("error", error)
  // }
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ 43:
/*!******************************************************!*\
  !*** multi ./pages/api/upload/organization/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\govermentlt\pages\api\upload\organization\index.js */"./pages/api/upload/organization/index.js");


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

/***/ "formidable-serverless":
/*!****************************************!*\
  !*** external "formidable-serverless" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formidable-serverless");

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

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("multer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGIvY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9kYi9tb2RlbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9hdXRoLmpzIiwid2VicGFjazovLy8uL21pZGRsZXdhcmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3VwbG9hZC9vcmdhbml6YXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmb3JtaWRhYmxlLXNlcnZlcmxlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm11bHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtY29ubmVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcXVlbGl6ZVwiIl0sIm5hbWVzIjpbImRvdGVudiIsInJlcXVpcmUiLCJyZXN1bHQiLCJjb25maWciLCJtb2R1bGUiLCJleHBvcnRzIiwiZGV2ZWxvcG1lbnQiLCJ1c2VybmFtZSIsInByb2Nlc3MiLCJlbnYiLCJEQl9VU0VSIiwicGFzc3dvcmQiLCJEQl9QQVNTIiwiZGF0YWJhc2UiLCJEQl9OQU1FIiwiaG9zdCIsIkRCX0hPU1QiLCJkaWFsZWN0IiwidGVzdCIsImxvZ2dpbmciLCJwcm9kdWN0aW9uIiwiZGlhbGVjdE9wdGlvbnMiLCJzc2wiLCJmcyIsInBhdGgiLCJTZXF1ZWxpemUiLCJiYXNlbmFtZSIsIl9fZmlsZW5hbWUiLCJfX2Rpcm5hbWUiLCJkYiIsIm1vZGVscyIsImN3ZCIsInNlcXVlbGl6ZSIsInVzZV9lbnZfdmFyaWFibGUiLCJyZWFkZGlyU3luYyIsImZpbHRlciIsImZpbGUiLCJpbmRleE9mIiwic2xpY2UiLCJmb3JFYWNoIiwibW9kZWwiLCJqb2luIiwibmFtZSIsIk9iamVjdCIsImtleXMiLCJtb2RlbE5hbWUiLCJhc3NvY2lhdGUiLCJtaWRkbGV3YXJlIiwibmV4dENvbm5lY3QiLCJyZXN0cmljdGVkIiwidXNlIiwicmVxIiwicmVzIiwibmV4dCIsImF1dGhIZWFkZXIiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInVzZXIiLCJpbmNsdWRlcyIsInVybCIsInNlc3Npb25JRCIsInNwbGl0IiwidmVyaWZ5VG9rZW4iLCJzdGF0dXNDb2RlIiwic2VuZCIsInN0YXR1cyIsImVycm9yIiwiU0VDUkVUX0tFWSIsIkpXVF9LRVkiLCJqd3RUb2tlbiIsImp3dCIsInZlcmlmeSIsImUiLCJjb25zb2xlIiwibG9nIiwiZ2V0QXBwQ29va2llcyIsInBhcnNlZEl0ZW1zIiwiY29va2llIiwiY29va2llc0l0ZW1zIiwiY29va2llcyIsInBhcnNlZEl0ZW0iLCJkZWNvZGVVUkkiLCJhYnNvbHV0ZVVybCIsInNldExvY2FsaG9zdCIsInByb3RvY29sIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJhZGREYXlzIiwiZGF0ZSIsImRheXMiLCJEYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJmb3JtYXREYXRlV2l0aG91dFRpbWUiLCJkYXRlU3RyaW5nIiwiZ2V0VVRDRnVsbFllYXIiLCJnZXRVVENNb250aCIsImdldFVUQ0RhdGUiLCJhcGlJbnN0YW5jZSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsImNoZWNrSXNMb2dpbiIsInRva2VuIiwiQ29va2llcyIsImdldCIsIlJvdXRlciIsInB1c2giLCJwYXJzZUp3dCIsImlzRXhwaXJlZCIsImJhc2U2NFVybCIsImJhc2U2NCIsInJlcGxhY2UiLCJqc29uUGF5bG9hZCIsImRlY29kZVVSSUNvbXBvbmVudCIsImF0b2IiLCJtYXAiLCJjIiwiY2hhckNvZGVBdCIsInRvU3RyaW5nIiwiX2pzb25QYXlsb2FkIiwiSlNPTiIsInBhcnNlIiwiZGF0ZU5vdyIsInBhcnNlSW50IiwiZXhwIiwiZ2V0VGltZSIsInN1YnN0cmluZyIsImNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUiLCJkYXRlU3BsaXQiLCJjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyV2l0aFRpbWUiLCJjb252ZXJ0RGF0ZXRvVGhhaURhdGUiLCJfZGF0ZSIsImNvbnZlcnRNb250aHRvVGhhaU1vbnRoIiwiY29udmVydFllYXJ0b1RoYWlZZWFyIiwieWVhciIsIm1vbnRoIiwiY29udmVydERhdGV0b0FkZERCIiwiZ2V0SVBBZGRyZXNzIiwiZGF0YSIsImNvdW50cnlfY29kZSIsImNvdW50cnlfbmFtZSIsImNpdHkiLCJwb3N0YWwiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIklQdjQiLCJzdGF0ZSIsImJ5dGVzVG9TaXplIiwiYnl0ZXMiLCJzaXplcyIsImkiLCJNYXRoIiwiZmxvb3IiLCJyb3VuZCIsInBvdyIsImJ5dGVzVG9NQiIsIk51bWJlciIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiZ2V0RGF0ZWRpZmYiLCJzdGFydERhdGUiLCJ0aW1lRW5kIiwibW9tZW50IiwibmV3U3RhcnREYXRlIiwibmV3RW5kRGF0ZSIsIm9uZV9kYXkiLCJjZWlsIiwiZ2V0Q3VycmVudERhdGUiLCJzZXBhcmF0b3IiLCJuZXdEYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImFwaSIsImJvZHlQYXJzZXIiLCJzYXZlRmlsZSIsInJlYWRGaWxlU3luYyIsIndyaXRlRmlsZVN5bmMiLCJ1bmxpbmtTeW5jIiwiaGFuZGxlciIsInBvc3QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZvcm0iLCJGb3JtaWRhYmxlIiwiSW5jb21pbmdGb3JtIiwibXVsdGlwbGVzIiwia2VlcEV4dGVuc2lvbnMiLCJ1cGxvYWREaXIiLCJvbmNlIiwib24iLCJlcnIiLCJmaWVsZHMiLCJmaWxlcyIsIlN0cmluZyIsInN0cmluZ2lmeSIsInVwbG9hZCIsIm11bHRlciIsImRlc3QiLCJpZCIsIl9maWxlcyIsImN1cnJlbnRUaW1lSW5TZWNvbmRzIiwibm93IiwicmVuYW1lU3luYyIsIl9uYW1lIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGYTs7QUFDYixNQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsc0JBQUQsQ0FBdEI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHRixNQUFNLENBQUNHLE1BQVAsRUFBZixDLENBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7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Q0FBTjtBQWtERCxLQWxFRCxDQWtFRSxPQUFPeEksS0FBUCxFQUFjO0FBQ2RPLGFBQU8sQ0FBQ0MsR0FBUixDQUFZUixLQUFaO0FBQ0EsYUFBT3FILE9BQU8sQ0FBQ25JLEdBQUcsQ0FBQ2EsTUFBSixDQUFXLEdBQVgsRUFBZ0JELElBQWhCLENBQXFCRSxLQUFyQixDQUFELENBQWQ7QUFDRDtBQUNGLEdBdkVNLENBQVAsQ0FEd0IsQ0EwRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHRCxDQWxIYSxDQUFoQjtBQXFIZWtILHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEpBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHNDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhcGlcXHVwbG9hZFxcb3JnYW5pemF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQzKTtcbiIsIid1c2Ugc3RyaWN0JztcclxuY29uc3QgZG90ZW52ID0gcmVxdWlyZShcImRvdGVudlwiKVxyXG5jb25zdCByZXN1bHQgPSBkb3RlbnYuY29uZmlnKClcclxuXHJcbi8vIGlmIChyZXN1bHQuZXJyb3IpIHtcclxuLy8gICB0aHJvdyByZXN1bHQuZXJyb3JcclxuLy8gfVxyXG5cclxuLy8gY29uc29sZS5sb2cocmVzdWx0LnBhcnNlZClcclxuXHJcbi8vIGRvdGVudi5jb25maWcoeyBwYXRoOiBfX2Rpcm5hbWUgKyAnLmVudicgfSk7XHJcbi8vIGNvbnNvbGUubG9nKFwicHJvY2Vzcy5lbnYuREJfVVNFUlwiKTtcclxuLy8gY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuREJfSE9TVCk7XHJcbi8vIGRvdGVudi5jb25maWcoeyBwYXRoOiAnLi9jb25maWcuZW52JyB9KTtcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZGV2ZWxvcG1lbnQ6IHtcclxuICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxyXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1MsXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSxcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXHJcbiAgICBkaWFsZWN0OiAnbXlzcWwnLFxyXG4gIH0sXHJcbiAgdGVzdDoge1xyXG4gICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LkRCX1VTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTUyxcclxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxyXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcclxuICAgIGRpYWxlY3Q6ICdteXNxbCcsXHJcbiAgICBsb2dnaW5nOiBmYWxzZSxcclxuICB9LFxyXG4gIHByb2R1Y3Rpb246IHtcclxuICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxyXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1MsXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSxcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXHJcbiAgICBkaWFsZWN0OiAnbXlzcWwnLFxyXG4gICAgZGlhbGVjdE9wdGlvbnM6IHtcclxuICAgICAgc3NsOiB0cnVlLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcbmNvbnN0IFNlcXVlbGl6ZSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xyXG5jb25zdCBiYXNlbmFtZSA9IHBhdGguYmFzZW5hbWUoX19maWxlbmFtZSk7XHJcbmNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7XHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoX19kaXJuYW1lICsgJy8uLi9jb25maWcvY29uZmlnLmpzJylbZW52XTtcclxuY29uc3QgZGIgPSB7fTtcclxuXHJcbi8qIEN1c3RvbSBoYW5kbGVyIGZvciByZWFkaW5nIGN1cnJlbnQgd29ya2luZyBkaXJlY3RvcnkgKi9cclxuY29uc3QgbW9kZWxzID0gcHJvY2Vzcy5jd2QoKSArICcvZGIvbW9kZWxzLycgfHwgX19kaXJuYW1lO1xyXG5cclxubGV0IHNlcXVlbGl6ZTtcclxuaWYgKGNvbmZpZy51c2VfZW52X3ZhcmlhYmxlKSB7XHJcbiAgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShwcm9jZXNzLmVudltjb25maWcudXNlX2Vudl92YXJpYWJsZV0sIGNvbmZpZyk7XHJcbn0gZWxzZSB7XHJcbiAgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShcclxuICAgIGNvbmZpZy5kYXRhYmFzZSxcclxuICAgIGNvbmZpZy51c2VybmFtZSxcclxuICAgIGNvbmZpZy5wYXNzd29yZCxcclxuICAgIGNvbmZpZyxcclxuICApO1xyXG59XHJcbi8qIGZzLnJlYWRkaXJTeW5jKF9fZGlybmFtZSkgKi9cclxuZnMucmVhZGRpclN5bmMobW9kZWxzKVxyXG4gIC5maWx0ZXIoZmlsZSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBmaWxlLmluZGV4T2YoJy4nKSAhPT0gMCAmJiBmaWxlICE9PSBiYXNlbmFtZSAmJiBmaWxlLnNsaWNlKC0zKSA9PT0gJy5qcydcclxuICAgICk7XHJcbiAgfSlcclxuICAuZm9yRWFjaChmaWxlID0+IHtcclxuICAgIC8qIGNvbnN0IG1vZGVsID0gc2VxdWVsaXplW1wiaW1wb3J0XCJdKHBhdGguam9pbihfX2Rpcm5hbWUsIGZpbGUpKTsgKi9cclxuICAgIGNvbnN0IG1vZGVsID0gc2VxdWVsaXplWydpbXBvcnQnXShwYXRoLmpvaW4obW9kZWxzLCBmaWxlKSk7XHJcbiAgICBkYlttb2RlbC5uYW1lXSA9IG1vZGVsO1xyXG4gIH0pO1xyXG5cclxuT2JqZWN0LmtleXMoZGIpLmZvckVhY2gobW9kZWxOYW1lID0+IHtcclxuICBpZiAoZGJbbW9kZWxOYW1lXS5hc3NvY2lhdGUpIHtcclxuICAgIGRiW21vZGVsTmFtZV0uYXNzb2NpYXRlKGRiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZGIuc2VxdWVsaXplID0gc2VxdWVsaXplO1xyXG5kYi5TZXF1ZWxpemUgPSBTZXF1ZWxpemU7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRiO1xyXG4iLCJpbXBvcnQgbmV4dENvbm5lY3QgZnJvbSAnbmV4dC1jb25uZWN0JztcclxuaW1wb3J0IHsgdmVyaWZ5VG9rZW4gfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBuZXh0Q29ubmVjdCgpO1xyXG5cclxuLyogU2FtcGxlIHVzaW5nIG1pZGRsZXdhcmUgKi9cclxuLyogbWlkZGxld2FyZS51c2UoZGF0YWJhc2UpLnVzZShzZXNzaW9uKS51c2UocGFzc3BvcnQuaW5pdGlhbGl6ZSgpKS51c2UocGFzc3BvcnQuc2Vzc2lvbigpKTsgKi9cclxuXHJcbi8qIFNldCByZXN0cmljdGVkIHB1YmxpYyBhY2Nlc3MgLyBwdXQgYW55IGFwaSBhY2Nlc3MgdGhhdCBpcyByZXN0cmljdGVkIGluIGhlcmUgKi9cclxuY29uc3QgcmVzdHJpY3RlZCA9IFsnL2FwaS9vcmdhbml6YXRpb24vW29yZ2FuaXphdGlvbi1pZF1dJywgJy9hcGkvam9iL1tzbHVnXSddO1xyXG5cclxuLypcclxuICogQHBhcmFtcyB7cmVxdWVzdCwgcmVzcG9uc2UsIGNhbGxiYWNrfSBkZWZhdWx0IFJlcXVlc3QgYW5kIFJlc3BvbnNlXHJcbiAqIEByZXR1cm4ge29iamVjdH0gb2JqZWN0IGlmIHRydWUsIHJlc3BvbnNlIG1lc3NhZ2UgaWYgZmFsc2UgYW5kIGNvbnRpbnVlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBtaWRkbGV3YXJlLnVzZShhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICBsZXQgYXV0aEhlYWRlciA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24gfHwgJyc7XHJcbiAgbGV0IHVzZXIgPSB7fTtcclxuXHJcbiAgaWYgKCFyZXN0cmljdGVkLmluY2x1ZGVzKHJlcS51cmwpICYmICFhdXRoSGVhZGVyKSB7XHJcbiAgICByZXR1cm4gbmV4dCgpO1xyXG4gIH1cclxuICBpZiAoYXV0aEhlYWRlcikge1xyXG4gICAgbGV0IHNlc3Npb25JRCA9IGF1dGhIZWFkZXIuc3BsaXQoJyAnKVsxXTtcclxuICAgIGlmIChzZXNzaW9uSUQpIHtcclxuICAgICAgdXNlciA9IHZlcmlmeVRva2VuKHNlc3Npb25JRCk7XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgLyogQ291bGQgcHV0IGNoZWNrIGFnYWluc3QgdXNlcnMgdGFibGVzIGluIGRhdGFiYXNlICBVc2VyLmZpbmQoe2VtYWlsOnVzZXIuZW1haWx9KSAqL1xyXG4gICAgICAgIHJlcS51c2VyID0gdXNlcjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDQwMTtcclxuICAgICAgICByZXR1cm4gcmVzLnNlbmQoe1xyXG4gICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxyXG4gICAgICAgICAgZXJyb3I6ICdFeHBpcmVkJyxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDE7XHJcbiAgICAgIHJldHVybiByZXMuc2VuZCh7XHJcbiAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxyXG4gICAgICAgIGVycm9yOiAnV3JvbmcgVG9rZW4nLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1c0NvZGUgPSA0MDE7XHJcbiAgICByZXR1cm4gcmVzLnNlbmQoe1xyXG4gICAgICBzdGF0dXM6ICdlcnJvcicsXHJcbiAgICAgIGVycm9yOiAnVW5hdXRob3JpemVkJyxcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gbmV4dCgpO1xyXG59KTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgU0VDUkVUX0tFWSA9IHByb2Nlc3MuZW52LkpXVF9LRVk7XHJcblxyXG4vKlxyXG4gKiBAcGFyYW1zIHtqd3RUb2tlbn0gZXh0cmFjdGVkIGZyb20gY29va2llc1xyXG4gKiBAcmV0dXJuIHtvYmplY3R9IG9iamVjdCBvZiBleHRyYWN0ZWQgdG9rZW5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlUb2tlbihqd3RUb2tlbikge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gand0LnZlcmlmeShqd3RUb2tlbiwgU0VDUkVUX0tFWSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coJ2U6JywgZSk7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbi8qXHJcbiAqIEBwYXJhbXMge3JlcXVlc3R9IGV4dHJhY3RlZCBmcm9tIHJlcXVlc3QgcmVzcG9uc2VcclxuICogQHJldHVybiB7b2JqZWN0fSBvYmplY3Qgb2YgcGFyc2Ugand0IGNvb2tpZSBkZWNvZGUgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBwQ29va2llcyhyZXEpIHtcclxuICBjb25zdCBwYXJzZWRJdGVtcyA9IHt9O1xyXG4gIGlmIChyZXEuaGVhZGVycy5jb29raWUpIHtcclxuICAgIGNvbnN0IGNvb2tpZXNJdGVtcyA9IHJlcS5oZWFkZXJzLmNvb2tpZS5zcGxpdCgnOyAnKTtcclxuICAgIGNvb2tpZXNJdGVtcy5mb3JFYWNoKGNvb2tpZXMgPT4ge1xyXG4gICAgICBjb25zdCBwYXJzZWRJdGVtID0gY29va2llcy5zcGxpdCgnPScpO1xyXG4gICAgICBwYXJzZWRJdGVtc1twYXJzZWRJdGVtWzBdXSA9IGRlY29kZVVSSShwYXJzZWRJdGVtWzFdKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gcGFyc2VkSXRlbXM7XHJcbn1cclxuXHJcbi8qXHJcbiAqIEBwYXJhbXMge3JlcXVlc3R9IGV4dHJhY3RlZCBmcm9tIHJlcXVlc3QgcmVzcG9uc2UsIHtzZXRMb2NhbGhvc3R9IHlvdXIgbG9jYWxob3N0IGFkZHJlc3NcclxuICogQHJldHVybiB7b2JqZWN0fSBvYmplY3RzIG9mIHByb3RvY29sLCBob3N0IGFuZCBvcmlnaW5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhYnNvbHV0ZVVybChyZXEsIHNldExvY2FsaG9zdCkge1xyXG4gIHZhciBwcm90b2NvbCA9ICdodHRwczonO1xyXG4gIHZhciBob3N0ID0gcmVxXHJcbiAgICA/IHJlcS5oZWFkZXJzWyd4LWZvcndhcmRlZC1ob3N0J10gfHwgcmVxLmhlYWRlcnNbJ2hvc3QnXVxyXG4gICAgOiB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuICBpZiAoaG9zdC5pbmRleE9mKCdsb2NhbGhvc3QnKSA+IC0xKSB7XHJcbiAgICBpZiAoc2V0TG9jYWxob3N0KSBob3N0ID0gc2V0TG9jYWxob3N0O1xyXG4gICAgcHJvdG9jb2wgPSAnaHR0cDonO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgcHJvdG9jb2w6IHByb3RvY29sLFxyXG4gICAgaG9zdDogaG9zdCxcclxuICAgIG9yaWdpbjogcHJvdG9jb2wgKyAnLy8nICsgaG9zdCxcclxuICAgIHVybDogcmVxLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGREYXlzKGRhdGUsIGRheXMpIHtcclxuICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgcmVzdWx0LnNldERhdGUocmVzdWx0LmdldERhdGUoKSArIGRheXMpO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vWVlZWS1NTS1ERFxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZVdpdGhvdXRUaW1lKGRhdGUpIHtcclxuICB2YXIgZGF0ZVN0cmluZyA9XHJcbiAgICBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgKyBcIi1cIiArXHJcbiAgICAoXCIwXCIgKyAoZGF0ZS5nZXRVVENNb250aCgpICsgMSkpLnNsaWNlKC0yKSArIFwiLVwiICtcclxuICAgIChcIjBcIiArIGRhdGUuZ2V0VVRDRGF0ZSgpKS5zbGljZSgtMikgKyBcIiBcIlxyXG4gIHJldHVybiBkYXRlU3RyaW5nO1xyXG59XHJcbi8vIGNvbnN0IGFwaSA9IHByb2Nlc3MuZW52LlBVQkxJQ19VUkxcclxuXHJcbmV4cG9ydCBjb25zdCBhcGlJbnN0YW5jZSA9ICgpID0+IHtcclxuICAvLyBjb25zdCBhdXRob3JpemF0aW9uID0gc3RvcmUuZ2V0U3RhdGUoKS51c2VyU3RhdGUudG9rZW4gPyBzdG9yZS5nZXRTdGF0ZSgpLnVzZXJTdGF0ZS50b2tlbiA6IG51bGxcclxuXHJcbiAgLy8gY29uc3QgaGVhZGVycyA9IHtcclxuICAvLyBcdCd4LWFwaS10b2tlbic6IGF1dGhvcml6YXRpb24gPyBhdXRob3JpemF0aW9uIDogJycsXHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6ICcvYXBpJyxcclxuICAgIC8vIGhlYWRlcnMsXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrSXNMb2dpbiA9ICgpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhcImNoZWNrSXNMb2dpblwiKVxyXG4gIHZhciB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpIC8vID0+ICd2YWx1ZSdcclxuXHJcbiAgaWYgKCF0b2tlbikge1xyXG4gICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvLyBjb25zb2xlLmxvZyhwYXJzZUp3dCh0b2tlbikpXHJcbiAgcmV0dXJuIHBhcnNlSnd0KHRva2VuKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSnd0KHRva2VuKSB7XHJcblxyXG4gIHZhciBpc0V4cGlyZWQgPSBmYWxzZTtcclxuICAvLyBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpO1xyXG5cclxuXHJcblxyXG4gIHZhciBiYXNlNjRVcmwgPSB0b2tlbi5zcGxpdCgnLicpWzFdO1xyXG4gIHZhciBiYXNlNjQgPSBiYXNlNjRVcmwucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcclxuICB2YXIganNvblBheWxvYWQgPSBkZWNvZGVVUklDb21wb25lbnQoYXRvYihiYXNlNjQpLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKGMpIHtcclxuICAgIHJldHVybiAnJScgKyAoJzAwJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcclxuICB9KS5qb2luKCcnKSk7XHJcbiAgdmFyIF9qc29uUGF5bG9hZCA9IEpTT04ucGFyc2UoanNvblBheWxvYWQpXHJcbiAgdmFyIGRhdGVOb3cgPSBuZXcgRGF0ZSgpO1xyXG4gIC8vIGNvbnNvbGUubG9nKHBhcnNlSW50KF9qc29uUGF5bG9hZC5leHApKVxyXG4gIC8vIGNvbnNvbGUubG9nKHBhcnNlSW50KChkYXRlTm93LmdldFRpbWUoKSkudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwxMCkpKVxyXG4gIGlmIChwYXJzZUludChfanNvblBheWxvYWQuZXhwKSA8IHBhcnNlSW50KChkYXRlTm93LmdldFRpbWUoKSkudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApKSkge1xyXG4gICAgY29uc29sZS5sb2coXCJ0cnVlXCIpXHJcblxyXG4gICAgaXNFeHBpcmVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlmIChpc0V4cGlyZWQpIHtcclxuICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxuICByZXR1cm4gX2pzb25QYXlsb2FkO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lKGRhdGUpIHtcclxuICB0cnkge1xyXG4gICAgdmFyIGRhdGVTcGxpdCA9IGRhdGUudG9TdHJpbmcoKS5zcGxpdChcIlRcIik7XHJcbiAgICByZXR1cm4gZGF0ZVNwbGl0WzBdO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydERhdGVEQnRvRGF0ZVBpY2tlcldpdGhUaW1lKGRhdGUpIHtcclxuICB0cnkge1xyXG4gICAgLy86MDcuMDAwWlxyXG4gICAgLy9TYW1wbGVUZXh0LnJlcGxhY2UoXCJEZXZlbG9wZXJcIiwgXCJBcHAgQnVpbGRlclwiKTtcclxuICAgIHZhciBkYXRlU3BsaXQgPSBkYXRlLnRvU3RyaW5nKCkuc3BsaXQoXCJUXCIpO1xyXG4gICAgcmV0dXJuIGRhdGVTcGxpdFswXSArIFwiIFwiICsgZGF0ZVNwbGl0WzFdLnJlcGxhY2UoXCIuMDAwWlwiLCBcIlwiKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREYXRldG9UaGFpRGF0ZShkYXRlKSB7XHJcbiAgdmFyIF9kYXRlID0gY29udmVydERhdGVEQnRvRGF0ZVBpY2tlck5vVGltZShkYXRlKVxyXG4gIHZhciBkYXRlU3BsaXQgPSBfZGF0ZS50b1N0cmluZygpLnNwbGl0KFwiLVwiKTtcclxuICAvLyAyMDIxLTA5LTE2XHJcbiAgcmV0dXJuIGRhdGVTcGxpdFsyXSArIFwiIFwiICsgY29udmVydE1vbnRodG9UaGFpTW9udGgoZGF0ZVNwbGl0WzFdKSArIFwiIFwiICsgY29udmVydFllYXJ0b1RoYWlZZWFyKGRhdGVTcGxpdFswXSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRZZWFydG9UaGFpWWVhcih5ZWFyKSB7XHJcbiAgcmV0dXJuIHBhcnNlSW50KHllYXIpICsgNTQzXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0TW9udGh0b1RoYWlNb250aChtb250aCkge1xyXG4gIHN3aXRjaCAobW9udGgpIHtcclxuICAgIGNhc2UgXCIwMVwiOlxyXG4gICAgICByZXR1cm4gXCLguKHguIHguKPguLLguITguKFcIlxyXG4gICAgY2FzZSBcIjAyXCI6XHJcbiAgICAgIHJldHVybiBcIuC4geC4uOC4oeC4oOC4suC4nuC4seC4meC4mOC5jFwiXHJcbiAgICBjYXNlIFwiMDNcIjpcclxuICAgICAgcmV0dXJuIFwi4Lih4Li14LiZ4Liy4LiE4LihXCJcclxuICAgIGNhc2UgXCIwNFwiOlxyXG4gICAgICByZXR1cm4gXCLguYDguKHguKnguLLguKLguJlcIlxyXG4gICAgY2FzZSBcIjA1XCI6XHJcbiAgICAgIHJldHVybiBcIuC4nuC4pOC4qeC4oOC4suC4hOC4oVwiXHJcbiAgICBjYXNlIFwiMDZcIjpcclxuICAgICAgcmV0dXJuIFwi4Lih4Li04LiW4Li44LiZ4Liy4Lii4LiZXCJcclxuICAgIGNhc2UgXCIwN1wiOlxyXG4gICAgICByZXR1cm4gXCLguIHguKPguIHguI7guLLguITguKFcIlxyXG4gICAgY2FzZSBcIjA4XCI6XHJcbiAgICAgIHJldHVybiBcIuC4quC4tOC4h+C4q+C4suC4hOC4oVwiXHJcbiAgICBjYXNlIFwiMDlcIjpcclxuICAgICAgcmV0dXJuIFwi4LiB4Lix4LiZ4Lii4Liy4Lii4LiZXCJcclxuICAgIGNhc2UgXCIxMFwiOlxyXG4gICAgICByZXR1cm4gXCLguJXguLjguKXguLLguITguKFcIlxyXG4gICAgY2FzZSBcIjExXCI6XHJcbiAgICAgIHJldHVybiBcIuC4nuC4pOC4qOC4iOC4tOC4geC4suC4ouC4mVwiXHJcbiAgICBjYXNlIFwiMTJcIjpcclxuICAgICAgcmV0dXJuIFwi4LiY4Lix4LiZ4Lin4Liy4LiE4LihXCJcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBcIk5BTlwiXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydERhdGV0b0FkZERCKGRhdGUpIHtcclxuICB2YXIgZGF0ZVNwbGl0ID0gZGF0ZS5zcGxpdChcIiBcIik7XHJcbiAgcmV0dXJuIGRhdGVTcGxpdFswXSArIFwiVFwiICsgZGF0ZVNwbGl0WzFdICsgXCIrMDA6MDBcIjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldElQQWRkcmVzcygpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vZ2VvbG9jYXRpb24tZGIuY29tL2pzb24vJylcclxuICAvLyBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgLy8gcmV0dXJuIHJlcy5kYXRhXHJcbiAgcmV0dXJuIFwiY291bnRyeV9jb2RlOlwiICsgcmVzLmRhdGEuY291bnRyeV9jb2RlICsgXCIsY291bnRyeV9uYW1lOlwiICsgcmVzLmRhdGEuY291bnRyeV9uYW1lICsgXCIsY2l0eTpcIiArIHJlcy5kYXRhLmNpdHkgKyBcIixwb3N0YWw6XCIgKyByZXMuZGF0YS5wb3N0YWxcclxuICAgICsgXCIsbGF0aXR1ZGU6XCIgKyByZXMuZGF0YS5sYXRpdHVkZSArIFwiLGxvbmdpdHVkZTpcIiArIHJlcy5kYXRhLmxvbmdpdHVkZSArIFwiLElQdjQ6XCIgKyByZXMuZGF0YS5JUHY0ICsgXCIsc3RhdGU6XCIgKyByZXMuZGF0YS5zdGF0ZVxyXG4gIC8vIHNldElQKHJlcy5kYXRhLklQdjQpXHJcbiAgLy8gcmV0dXJuXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGJ5dGVzVG9TaXplKGJ5dGVzKSB7XHJcbiAgdmFyIHNpemVzID0gWydCeXRlcycsICdLQicsICdNQicsICdHQicsICdUQiddO1xyXG4gIGlmIChieXRlcyA9PSAwKSByZXR1cm4gJzAgQnl0ZSc7XHJcbiAgdmFyIGkgPSBwYXJzZUludChNYXRoLmZsb29yKE1hdGgubG9nKGJ5dGVzKSAvIE1hdGgubG9nKDEwMjQpKSk7XHJcbiAgcmV0dXJuIE1hdGgucm91bmQoYnl0ZXMgLyBNYXRoLnBvdygxMDI0LCBpKSwgMikgKyAnICcgKyBzaXplc1tpXTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBieXRlc1RvTUIoYnl0ZXMpIHtcclxuICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQoYnl0ZXMgLyAoMTAyNCAqIDEwMjQpKS50b0ZpeGVkKDIpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGVkaWZmKHN0YXJ0RGF0ZSkge1xyXG5cclxuICBjb25zdCB0aW1lRW5kID0gbW9tZW50KCk7XHJcbiAgY29uc3QgbmV3U3RhcnREYXRlID0gbmV3IERhdGUoc3RhcnREYXRlKTtcclxuICBjb25zdCBuZXdFbmREYXRlID0gbmV3IERhdGUodGltZUVuZCk7XHJcbiAgY29uc3Qgb25lX2RheSA9IDEwMDAgKiA2MCAqIDYwICogMjQ7XHJcbiAgbGV0IHJlc3VsdFxyXG4gIHJlc3VsdCA9IE1hdGguY2VpbCgobmV3U3RhcnREYXRlLmdldFRpbWUoKSAtIG5ld0VuZERhdGUuZ2V0VGltZSgpKSAvIChvbmVfZGF5KSlcclxuICBjb25zb2xlLmxvZygnZGF0ZSBDb252ZXJ0ZXIgcmVzdWx0JywgcmVzdWx0KVxyXG5cclxuXHJcbiAgcmV0dXJuIHJlc3VsdCAtIDE7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudERhdGUoc2VwYXJhdG9yID0gJycpIHtcclxuXHJcbiAgbGV0IG5ld0RhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgbGV0IGRhdGUgPSBuZXdEYXRlLmdldERhdGUoKTtcclxuICBsZXQgbW9udGggPSBuZXdEYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gIGxldCB5ZWFyID0gbmV3RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICByZXR1cm4gYCR7eWVhcn0ke3NlcGFyYXRvcn0ke21vbnRoIDwgMTAgPyBgMCR7bW9udGh9YCA6IGAke21vbnRofWB9JHtzZXBhcmF0b3J9JHtkYXRlfWBcclxufVxyXG4iLCIvLyBpbXBvcnQgZm9ybWlkYWJsZSBmcm9tIFwiZm9ybWlkYWJsZS1zZXJ2ZXJsZXNzXCI7XHJcbmltcG9ydCBGb3JtaWRhYmxlIGZyb20gXCJmb3JtaWRhYmxlLXNlcnZlcmxlc3NcIjtcclxuLy8gaW1wb3J0IEZvcm1pZGFibGUgZnJvbSBcImZvcm1pZGFibGUtc2VydmVybGVzc1wiO1xyXG4vLyBpbXBvcnQgbXVsdGlwYXJ0eSBmcm9tICdtdWx0aXBhcnR5J1xyXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcbi8vIGltcG9ydCB7IEluY29taW5nRm9ybSB9IGZyb20gJ2Zvcm1pZGFibGUtc2VydmVybGVzcydcclxuaW1wb3J0IG11bHRlciBmcm9tIFwibXVsdGVyXCI7XHJcbmltcG9ydCBuZXh0Q29ubmVjdCBmcm9tICduZXh0LWNvbm5lY3QnO1xyXG5pbXBvcnQgbWlkZGxld2FyZSBmcm9tICcuLi8uLi8uLi8uLi9taWRkbGV3YXJlL2F1dGgnO1xyXG5jb25zdCBtb2RlbHMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9kYi9tb2RlbHMvaW5kZXgnKTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgYXBpOiB7XHJcbiAgICBib2R5UGFyc2VyOiBmYWxzZVxyXG4gIH1cclxufTtcclxuXHJcbi8vIGxldCBzdG9yYWdlID0gbXVsdGVyLmRpc2tTdG9yYWdlKHtcclxuLy8gICBkZXN0aW5hdGlvbjogZnVuY3Rpb24gKHJlcSwgZmlsZSwgY2IpIHtcclxuLy8gICAgIGNiKG51bGwsICdwdWJsaWMvdXBsb2Fkcy8nKVxyXG4vLyAgIH0sXHJcbi8vICAgZmlsZW5hbWU6IGZ1bmN0aW9uIChyZXEsIGZpbGUsIGNiKSB7XHJcbi8vICAgICBjYihudWxsLCBEYXRlLm5vdygpICsgJ18nICsgZmlsZS5vcmlnaW5hbG5hbWUpXHJcbi8vICAgfVxyXG4vLyB9KVxyXG5cclxuLy8gY29uc3QgdXBsb2FkID0gbXVsdGVyKHsgZGVzdDogJ3VwbG9hZHMvJyB9KVxyXG5jb25zdCBzYXZlRmlsZSA9IGFzeW5jIChmaWxlKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlLnBhdGgpO1xyXG4gIGZzLndyaXRlRmlsZVN5bmMoYC4vcHVibGljLyR7ZmlsZS5uYW1lfWAsIGRhdGEpO1xyXG4gIGF3YWl0IGZzLnVubGlua1N5bmMoZmlsZS5wYXRoKTtcclxuICByZXR1cm47XHJcbn07XHJcblxyXG5cclxuY29uc3QgaGFuZGxlciA9IG5leHRDb25uZWN0KClcclxuICAvLyBNaWRkbGV3YXJlXHJcbiAgLnVzZShtaWRkbGV3YXJlKVxyXG4gIC8vIC51c2UobWlkZGxld2FyZTIpXHJcbiAgLnBvc3QoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybWlkYWJsZS5JbmNvbWluZ0Zvcm0oe1xyXG4gICAgICAgICAgbXVsdGlwbGVzOiB0cnVlLFxyXG4gICAgICAgICAga2VlcEV4dGVuc2lvbnM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3JtLnVwbG9hZERpciA9IFwiLi9wdWJsaWMvdXBsb2Fkcy9cIjtcclxuICAgICAgICBmb3JtLmtlZXBFeHRlbnNpb25zID0gdHJ1ZTtcclxuICAgICAgICBmb3JtLm9uY2UoXCJlcnJvclwiLCBjb25zb2xlLmVycm9yKTtcclxuICAgICAgICBmb3JtXHJcbiAgICAgICAgICAub24oXCJmaWxlQmVnaW5cIiwgKG5hbWUsIGZpbGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFydCB1cGxvYWRpbmc6IFwiLCBmaWxlLm5hbWUpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5vbihcImFib3J0ZWRcIiwgKCkgPT4gY29uc29sZS5sb2coXCJBYm9ydGVkLi4uXCIpKTtcclxuICAgICAgICBmb3JtLm9uY2UoXCJlbmRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJEb25lIVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhd2FpdCBmb3JtLnBhcnNlKHJlcSwgYXN5bmMgKGVyciwgZmllbGRzLCBmaWxlcykgPT4ge1xyXG4gICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICB0aHJvdyBTdHJpbmcoSlNPTi5zdHJpbmdpZnkoZXJyLCBudWxsLCAyKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmaWxlcylcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgLy8gICBcIm1vdmluZyBmaWxlOiBcIixcclxuICAgICAgICAgIC8vICAgZmlsZXMuZmlsZS5wYXRoLFxyXG4gICAgICAgICAgLy8gICBcIiB0byBcIixcclxuICAgICAgICAgIC8vICAgYHB1YmxpYy91cGxvYWRzLyR7ZmlsZXMuZmlsZS5uYW1lfWBcclxuICAgICAgICAgIC8vICk7XHJcbiAgICAgICAgICAvLyBhd2FpdCBmcy5yZW5hbWUoXHJcbiAgICAgICAgICAvLyAgIGZpbGVzLmZpbGUucGF0aCxcclxuICAgICAgICAgIC8vICAgYHB1YmxpYy91cGxvYWQvJHtmaWxlcy5maWxlLm5hbWV9YCxcclxuICAgICAgICAgIC8vICAgZXJyID0+IHtcclxuICAgICAgICAgIC8vICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgIC8vICk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImZpbGVzXCIpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhmaWxlcylcclxuICAgICAgICAgIGNvbnN0IHVwbG9hZCA9IGF3YWl0IG11bHRlcih7IGRlc3Q6IGBwdWJsaWMvdXBsb2Fkcy9jLSR7ZmllbGRzLmlkfS9vcmdhbml6YXRpb24vYCB9KVxyXG4gICAgICAgICAgY29uc3QgX2ZpbGVzID0gW11cclxuICAgICAgICAgIGZvciAodmFyIGkgaW4gZmlsZXMpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZmlsZXNbaV0ucGF0aClcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWVJblNlY29uZHMgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTsgLy91bml4IHRpbWVzdGFtcCBpbiBzZWNvbmRzXHJcbiAgICAgICAgICAgIGZzLnJlbmFtZVN5bmMoZmlsZXNbaV0ucGF0aCwgYHB1YmxpYy91cGxvYWRzL2MtJHtmaWVsZHMuaWR9L29yZ2FuaXphdGlvbi8ke2N1cnJlbnRUaW1lSW5TZWNvbmRzICsgJy0nICsgZmlsZXNbaV0ubmFtZX1gKTtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgcGF0aDogYHB1YmxpYy91cGxvYWRzL2MtJHtmaWVsZHMuaWR9LyR7Y3VycmVudFRpbWVJblNlY29uZHMgKyAnLScgKyBmaWxlc1tpXS5uYW1lfWAsXHJcbiAgICAgICAgICAgICAgbmFtZTogZmlsZXNbaV0ubmFtZSxcclxuICAgICAgICAgICAgICBfbmFtZTogY3VycmVudFRpbWVJblNlY29uZHMgKyAnLScgKyBmaWxlc1tpXS5uYW1lXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIF9maWxlcy5wdXNoKGRhdGEpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBmcy5yZW5hbWVTeW5jKGZpbGVzLmZpbGUucGF0aCwgYHB1YmxpYy91cGxvYWRzLyR7ZmlsZXMuZmlsZS5uYW1lfWApO1xyXG4gICAgICAgICAgcmVxLmZvcm0gPSB7IGZpZWxkcywgZmlsZXMgfTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZpZWxkcylcclxuICAgICAgICAgIGNvbnNvbGUubG9nKF9maWxlcylcclxuXHJcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgICAgICBzdGF0dXM6IDIwMCxcclxuICAgICAgICAgICAgJ3N1Y2Nlc3MnOiB0cnVlLFxyXG5cclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICdtZXNzYWdlJzogW1wiVXBsb2FkIGNvbXBsZXRlZC5cIl0sXHJcbiAgICAgICAgICAgICAgXCJsaXN0XCI6IF9maWxlcyxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgLy8gcmV0dXJuIHJlc29sdmUoKHJlcSwgcmVzKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzLnN0YXR1cyg0MDMpLnNlbmQoZXJyb3IpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdHJ5IHtcclxuICAgIC8vICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIC8vICAgICAvLyB2YXIgZm9ybSA9IG5ldyBmb3JtaWRhYmxlLkluY29taW5nRm9ybSh7IHVwbG9hZERpcjogX19kaXJuYW1lICsgJy91cGxvYWRlZCcgfSk7XHJcbiAgICAvLyAgICAgY29uc3QgZm9ybSA9IG5ldyBmb3JtaWRhYmxlLkluY29taW5nRm9ybSgpO1xyXG4gICAgLy8gICAgIGZvcm0udXBsb2FkRGlyID0gXCJ1cGxvYWRzL1wiO1xyXG4gICAgLy8gICAgIGZvcm0ua2VlcEV4dGVuc2lvbnMgPSB0cnVlO1xyXG4gICAgLy8gICAgIGZvcm0ucGFyc2UocmVxLCAoZXJyLCBmaWVsZHMsIGZpbGVzKSA9PiB7XHJcbiAgICAvLyAgICAgICBpZiAoZXJyKSByZWplY3QoZXJyKTtcclxuICAgIC8vICAgICAgIHJlc29sdmUoeyBmaWVsZHMsIGZpbGVzIH0pO1xyXG4gICAgLy8gICAgIH0pXHJcblxyXG4gICAgLy8gICB9KVxyXG5cclxuICAgIC8vICAgcHJvbWlzZS50aGVuKCh7IGZpZWxkcywgZmlsZXMgfSkgPT4ge1xyXG4gICAgLy8gICAgIC8vIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZmllbGRzLCBmaWxlcyB9KVxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGZpZWxkcylcclxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhmaWxlcylcclxuICAgIC8vICAgICB2YXIgcmVzdWx0ID0gW107XHJcblxyXG5cclxuICAgIC8vICAgICBmb3IgKHZhciBpIGluIGZpbGVzKSB7XHJcbiAgICAvLyAgICAgICByZXN1bHQucHVzaChmaWxlc1tpXSk7XHJcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZyhmaWxlc1tpXSlcclxuICAgIC8vICAgICAgIC8vIGNvbnN0IHJlc3VsdFVwbG9hZCA9ICB1cGxvYWRlci5zaW5nbGUoZmlsZXNbaV0pXHJcbiAgICAvLyAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHRVcGxvYWQpXHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICAvLyBjb25zdCBmaWxlc0FyciA9IEpTT04ucGFyc2UoZmlsZXMpO1xyXG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKGZpbGVzKVxyXG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgIC8vICAgfSlcclxuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyb3IpXHJcbiAgICAvLyB9XHJcblxyXG5cclxuICB9KTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9ybWlkYWJsZS1zZXJ2ZXJsZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm11bHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWNvbm5lY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==