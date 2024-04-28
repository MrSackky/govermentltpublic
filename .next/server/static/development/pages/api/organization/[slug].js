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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
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

/***/ "./pages/api/organization/[slug].js":
/*!******************************************!*\
  !*** ./pages/api/organization/[slug].js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);


const models = __webpack_require__(/*! ../../../db/models/index */ "./db/models/index.js");

const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()().get(async (req, res) => {
  const {
    query: {
      id,
      name
    }
  } = req;
  const {
    slug
  } = req.query;
  const organization_id = slug;
  console.log(organization_id);
  const organization = await models.Organization.findOne({
    attributes: ['organization_id', 'organization_name', 'organization_name_eng', 'organization_logo', 'organization_email', 'organization_address', 'organization_sub_district_id', 'organization_phone', 'organization_fax', 'theme', 'thumbnail', 'thumbnail_link', 'thumbnail_url', 'show_index', 'google_verify', 'social_fb', 'social_fb_pageid', 'rss', 'google_tag_manager1', 'google_tag_manager2', 'date_created', 'date_expired', 'size_used', 'is_use', 'organization_email_alert', 'package', 'person01_name', 'person01_position', 'person01_image', 'person01_phone', 'person02_name', 'person02_position', 'person02_image', 'person02_phone', 'person03_name', 'person03_position', 'person03_image', 'person03_phone', 'is_use_intro', 'is_poll_confirm'],
    where: {
      organization_id: organization_id
    },
    include: [{
      model: models.Packages,
      as: 'packages'
    }, {
      model: models.Sub_district,
      as: 'sub_districts',
      attributes: ['sub_district_id', 'sub_district_name', 'province_id'],
      include: [{
        model: models.District,
        as: 'districts',
        attributes: ['district_id', 'district_name']
      }, {
        model: models.Province,
        as: 'provinces',
        attributes: ['province_id', 'province_name', 'province_abbrev']
      }]
    }, {
      model: models.Users,
      as: 'users',
      where: {
        type_user: 2
      }
    }] // include: models.Packages
    // include: [{
    //   association: models.Packages,
    //   include: [ models.Organization.package_data ]
    // }]

  }); // const user = await models.users.findOne({
  //   where: {
  //     id: userId,
  //   },
  //   include: [
  //     {
  //       model: models.posts,
  //       as: 'posts',
  //     },
  //     {
  //       model: models.jobs,
  //       as: 'jobs',
  //     },
  //   ],
  // });

  return res.status(200).json({
    status: 200,
    message: "success",
    organization: organization ? organization : []
  });
}).post(async (req, res) => {}).put(async (req, res) => {
  const {
    body
  } = req;
  const {
    slug
  } = req.query;
  const organization_id = slug;
  const {
    organization_name,
    organization_name_eng = "",
    organization_phone,
    thumbnail_url,
    organization_email,
    date_expired,
    package_id,
    organization_sub_district_id = 0,
    organization_fax = "",
    thumbnail_link,
    is_use,
    organization_address = ""
  } = body;
  const dataOrganization = {
    organization_name: organization_name,
    organization_name_eng: organization_name_eng,
    organization_phone: organization_phone,
    thumbnail_url: thumbnail_url,
    organization_email: organization_email,
    date_expired: date_expired,
    package: package_id,
    organization_sub_district_id: organization_sub_district_id,
    organization_fax: organization_fax,
    thumbnail_link: thumbnail_link,
    is_use: is_use,
    organization_address: organization_address
  };

  if (organization_id == undefined || organization_name == undefined || organization_name_eng == undefined || organization_phone == undefined || thumbnail_url == undefined || organization_email == undefined || date_expired == undefined || package_id == undefined || organization_sub_district_id == undefined || organization_fax == undefined || thumbnail_link == undefined || is_use == undefined || organization_address == undefined) {
    return res.status(200).json({
      status: 201,
      message: 'data incorrect',
      organization_id: organization_id,
      dataOrganization: dataOrganization
    });
  }

  const organization = await models.Organization.update(dataOrganization, {
    where: {
      organization_id: organization_id
    }
  });
  return res.status(200).json({
    status: 200,
    message: "success",
    organization: organization ? organization : []
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
  const organization_id = slug;

  if (organization_id == undefined) {
    return res.status(200).json({
      status: 201,
      message: 'data incorrect',
      organization_id: organization_id
    });
  }

  const dataOrganization = {
    is_use: 3
  };
  const organization = await models.Organization.update(dataOrganization, {
    where: {
      organization_id: organization_id
    }
  });
  return res.status(200).json({
    status: 200,
    message: "success",
    organization: organization ? organization : []
  });
}).patch(async (req, res) => {});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ 39:
/*!************************************************!*\
  !*** multi ./pages/api/organization/[slug].js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\govermentlt\pages\api\organization\[slug].js */"./pages/api/organization/[slug].js");


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

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-connect");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGIvY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9kYi9tb2RlbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL29yZ2FuaXphdGlvbi9bc2x1Z10uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvbm5lY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VxdWVsaXplXCIiXSwibmFtZXMiOlsiZG90ZW52IiwicmVxdWlyZSIsInJlc3VsdCIsImNvbmZpZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZXZlbG9wbWVudCIsInVzZXJuYW1lIiwicHJvY2VzcyIsImVudiIsIkRCX1VTRVIiLCJwYXNzd29yZCIsIkRCX1BBU1MiLCJkYXRhYmFzZSIsIkRCX05BTUUiLCJob3N0IiwiREJfSE9TVCIsImRpYWxlY3QiLCJ0ZXN0IiwibG9nZ2luZyIsInByb2R1Y3Rpb24iLCJkaWFsZWN0T3B0aW9ucyIsInNzbCIsImZzIiwicGF0aCIsIlNlcXVlbGl6ZSIsImJhc2VuYW1lIiwiX19maWxlbmFtZSIsIl9fZGlybmFtZSIsImRiIiwibW9kZWxzIiwiY3dkIiwic2VxdWVsaXplIiwidXNlX2Vudl92YXJpYWJsZSIsInJlYWRkaXJTeW5jIiwiZmlsdGVyIiwiZmlsZSIsImluZGV4T2YiLCJzbGljZSIsImZvckVhY2giLCJtb2RlbCIsImpvaW4iLCJuYW1lIiwiT2JqZWN0Iiwia2V5cyIsIm1vZGVsTmFtZSIsImFzc29jaWF0ZSIsImhhbmRsZXIiLCJuZXh0Q29ubmVjdCIsImdldCIsInJlcSIsInJlcyIsInF1ZXJ5IiwiaWQiLCJzbHVnIiwib3JnYW5pemF0aW9uX2lkIiwiY29uc29sZSIsImxvZyIsIm9yZ2FuaXphdGlvbiIsIk9yZ2FuaXphdGlvbiIsImZpbmRPbmUiLCJhdHRyaWJ1dGVzIiwid2hlcmUiLCJpbmNsdWRlIiwiUGFja2FnZXMiLCJhcyIsIlN1Yl9kaXN0cmljdCIsIkRpc3RyaWN0IiwiUHJvdmluY2UiLCJVc2VycyIsInR5cGVfdXNlciIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwicG9zdCIsInB1dCIsImJvZHkiLCJvcmdhbml6YXRpb25fbmFtZSIsIm9yZ2FuaXphdGlvbl9uYW1lX2VuZyIsIm9yZ2FuaXphdGlvbl9waG9uZSIsInRodW1ibmFpbF91cmwiLCJvcmdhbml6YXRpb25fZW1haWwiLCJkYXRlX2V4cGlyZWQiLCJwYWNrYWdlX2lkIiwib3JnYW5pemF0aW9uX3N1Yl9kaXN0cmljdF9pZCIsIm9yZ2FuaXphdGlvbl9mYXgiLCJ0aHVtYm5haWxfbGluayIsImlzX3VzZSIsIm9yZ2FuaXphdGlvbl9hZGRyZXNzIiwiZGF0YU9yZ2FuaXphdGlvbiIsInBhY2thZ2UiLCJ1bmRlZmluZWQiLCJ1cGRhdGUiLCJkZWxldGUiLCJwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFF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QixFQUNQO0FBQ2xCM0IsU0FBSyxFQUFFO0FBQ0xQLHFCQUFlLEVBQUVBO0FBRFo7QUFEVyxHQURPLENBQTNCO0FBUUEsU0FBT0osR0FBRyxDQUFDb0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQzFCRCxVQUFNLEVBQUUsR0FEa0I7QUFFMUJFLFdBQU8sRUFBRSxTQUZpQjtBQUcxQmYsZ0JBQVksRUFBRUEsWUFBWSxHQUFHQSxZQUFILEdBQWtCO0FBSGxCLEdBQXJCLENBQVA7QUFNRCxDQTdMYSxFQThMYm9DLEtBOUxhLENBOExQLE9BQU81QyxHQUFQLEVBQVlDLEdBQVosS0FBb0IsQ0FFMUIsQ0FoTWEsQ0FBaEI7QUFrTWVKLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDck1BLG1DOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHNDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhcGlcXG9yZ2FuaXphdGlvblxcW3NsdWddLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDM5KTtcbiIsIid1c2Ugc3RyaWN0JztcclxuY29uc3QgZG90ZW52ID0gcmVxdWlyZShcImRvdGVudlwiKVxyXG5jb25zdCByZXN1bHQgPSBkb3RlbnYuY29uZmlnKClcclxuXHJcbi8vIGlmIChyZXN1bHQuZXJyb3IpIHtcclxuLy8gICB0aHJvdyByZXN1bHQuZXJyb3JcclxuLy8gfVxyXG5cclxuLy8gY29uc29sZS5sb2cocmVzdWx0LnBhcnNlZClcclxuXHJcbi8vIGRvdGVudi5jb25maWcoeyBwYXRoOiBfX2Rpcm5hbWUgKyAnLmVudicgfSk7XHJcbi8vIGNvbnNvbGUubG9nKFwicHJvY2Vzcy5lbnYuREJfVVNFUlwiKTtcclxuLy8gY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuREJfSE9TVCk7XHJcbi8vIGRvdGVudi5jb25maWcoeyBwYXRoOiAnLi9jb25maWcuZW52JyB9KTtcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZGV2ZWxvcG1lbnQ6IHtcclxuICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxyXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1MsXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSxcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXHJcbiAgICBkaWFsZWN0OiAnbXlzcWwnLFxyXG4gIH0sXHJcbiAgdGVzdDoge1xyXG4gICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LkRCX1VTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTUyxcclxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxyXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcclxuICAgIGRpYWxlY3Q6ICdteXNxbCcsXHJcbiAgICBsb2dnaW5nOiBmYWxzZSxcclxuICB9LFxyXG4gIHByb2R1Y3Rpb246IHtcclxuICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxyXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1MsXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSxcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXHJcbiAgICBkaWFsZWN0OiAnbXlzcWwnLFxyXG4gICAgZGlhbGVjdE9wdGlvbnM6IHtcclxuICAgICAgc3NsOiB0cnVlLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcbmNvbnN0IFNlcXVlbGl6ZSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xyXG5jb25zdCBiYXNlbmFtZSA9IHBhdGguYmFzZW5hbWUoX19maWxlbmFtZSk7XHJcbmNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7XHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoX19kaXJuYW1lICsgJy8uLi9jb25maWcvY29uZmlnLmpzJylbZW52XTtcclxuY29uc3QgZGIgPSB7fTtcclxuXHJcbi8qIEN1c3RvbSBoYW5kbGVyIGZvciByZWFkaW5nIGN1cnJlbnQgd29ya2luZyBkaXJlY3RvcnkgKi9cclxuY29uc3QgbW9kZWxzID0gcHJvY2Vzcy5jd2QoKSArICcvZGIvbW9kZWxzLycgfHwgX19kaXJuYW1lO1xyXG5cclxubGV0IHNlcXVlbGl6ZTtcclxuaWYgKGNvbmZpZy51c2VfZW52X3ZhcmlhYmxlKSB7XHJcbiAgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShwcm9jZXNzLmVudltjb25maWcudXNlX2Vudl92YXJpYWJsZV0sIGNvbmZpZyk7XHJcbn0gZWxzZSB7XHJcbiAgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShcclxuICAgIGNvbmZpZy5kYXRhYmFzZSxcclxuICAgIGNvbmZpZy51c2VybmFtZSxcclxuICAgIGNvbmZpZy5wYXNzd29yZCxcclxuICAgIGNvbmZpZyxcclxuICApO1xyXG59XHJcbi8qIGZzLnJlYWRkaXJTeW5jKF9fZGlybmFtZSkgKi9cclxuZnMucmVhZGRpclN5bmMobW9kZWxzKVxyXG4gIC5maWx0ZXIoZmlsZSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBmaWxlLmluZGV4T2YoJy4nKSAhPT0gMCAmJiBmaWxlICE9PSBiYXNlbmFtZSAmJiBmaWxlLnNsaWNlKC0zKSA9PT0gJy5qcydcclxuICAgICk7XHJcbiAgfSlcclxuICAuZm9yRWFjaChmaWxlID0+IHtcclxuICAgIC8qIGNvbnN0IG1vZGVsID0gc2VxdWVsaXplW1wiaW1wb3J0XCJdKHBhdGguam9pbihfX2Rpcm5hbWUsIGZpbGUpKTsgKi9cclxuICAgIGNvbnN0IG1vZGVsID0gc2VxdWVsaXplWydpbXBvcnQnXShwYXRoLmpvaW4obW9kZWxzLCBmaWxlKSk7XHJcbiAgICBkYlttb2RlbC5uYW1lXSA9IG1vZGVsO1xyXG4gIH0pO1xyXG5cclxuT2JqZWN0LmtleXMoZGIpLmZvckVhY2gobW9kZWxOYW1lID0+IHtcclxuICBpZiAoZGJbbW9kZWxOYW1lXS5hc3NvY2lhdGUpIHtcclxuICAgIGRiW21vZGVsTmFtZV0uYXNzb2NpYXRlKGRiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZGIuc2VxdWVsaXplID0gc2VxdWVsaXplO1xyXG5kYi5TZXF1ZWxpemUgPSBTZXF1ZWxpemU7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRiO1xyXG4iLCJpbXBvcnQgbmV4dENvbm5lY3QgZnJvbSAnbmV4dC1jb25uZWN0JztcclxuY29uc3QgbW9kZWxzID0gcmVxdWlyZSgnLi4vLi4vLi4vZGIvbW9kZWxzL2luZGV4Jyk7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gbmV4dENvbm5lY3QoKVxyXG4gIC5nZXQoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHF1ZXJ5OiB7IGlkLCBuYW1lIH0sXHJcbiAgICB9ID0gcmVxO1xyXG4gICAgY29uc3QgeyBzbHVnIH0gPSByZXEucXVlcnk7XHJcbiAgICBjb25zdCBvcmdhbml6YXRpb25faWQgPSBzbHVnO1xyXG4gICAgY29uc29sZS5sb2cob3JnYW5pemF0aW9uX2lkKVxyXG5cclxuICAgIGNvbnN0IG9yZ2FuaXphdGlvbiA9IGF3YWl0IG1vZGVscy5Pcmdhbml6YXRpb24uZmluZE9uZSh7XHJcbiAgICAgIGF0dHJpYnV0ZXM6IFtcclxuICAgICAgICAnb3JnYW5pemF0aW9uX2lkJywgJ29yZ2FuaXphdGlvbl9uYW1lJywgJ29yZ2FuaXphdGlvbl9uYW1lX2VuZycsICdvcmdhbml6YXRpb25fbG9nbycsXHJcbiAgICAgICAgJ29yZ2FuaXphdGlvbl9lbWFpbCcsICdvcmdhbml6YXRpb25fYWRkcmVzcycsICdvcmdhbml6YXRpb25fc3ViX2Rpc3RyaWN0X2lkJywgJ29yZ2FuaXphdGlvbl9waG9uZScsXHJcbiAgICAgICAgJ29yZ2FuaXphdGlvbl9mYXgnLCAndGhlbWUnLCAndGh1bWJuYWlsJywgJ3RodW1ibmFpbF9saW5rJywgJ3RodW1ibmFpbF91cmwnLCAnc2hvd19pbmRleCcsXHJcbiAgICAgICAgJ2dvb2dsZV92ZXJpZnknLCAnc29jaWFsX2ZiJywgJ3NvY2lhbF9mYl9wYWdlaWQnLCAncnNzJywgJ2dvb2dsZV90YWdfbWFuYWdlcjEnLCAnZ29vZ2xlX3RhZ19tYW5hZ2VyMicsXHJcbiAgICAgICAgJ2RhdGVfY3JlYXRlZCcsICdkYXRlX2V4cGlyZWQnLCAnc2l6ZV91c2VkJywgJ2lzX3VzZScsICdvcmdhbml6YXRpb25fZW1haWxfYWxlcnQnLCAncGFja2FnZScsXHJcbiAgICAgICAgJ3BlcnNvbjAxX25hbWUnLCAncGVyc29uMDFfcG9zaXRpb24nLCAncGVyc29uMDFfaW1hZ2UnLCAncGVyc29uMDFfcGhvbmUnLFxyXG4gICAgICAgICdwZXJzb24wMl9uYW1lJywgJ3BlcnNvbjAyX3Bvc2l0aW9uJywgJ3BlcnNvbjAyX2ltYWdlJywgJ3BlcnNvbjAyX3Bob25lJyxcclxuICAgICAgICAncGVyc29uMDNfbmFtZScsICdwZXJzb24wM19wb3NpdGlvbicsICdwZXJzb24wM19pbWFnZScsICdwZXJzb24wM19waG9uZScsXHJcbiAgICAgICAgJ2lzX3VzZV9pbnRybycsICdpc19wb2xsX2NvbmZpcm0nXHJcbiAgICAgIF0sXHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgb3JnYW5pemF0aW9uX2lkOiBvcmdhbml6YXRpb25faWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIGluY2x1ZGU6IFtcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbW9kZWw6IG1vZGVscy5QYWNrYWdlcyxcclxuICAgICAgICAgIGFzOiAncGFja2FnZXMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbW9kZWw6IG1vZGVscy5TdWJfZGlzdHJpY3QsXHJcbiAgICAgICAgICBhczogJ3N1Yl9kaXN0cmljdHMnLFxyXG4gICAgICAgICAgYXR0cmlidXRlczogWydzdWJfZGlzdHJpY3RfaWQnLCAnc3ViX2Rpc3RyaWN0X25hbWUnLCAncHJvdmluY2VfaWQnXSxcclxuICAgICAgICAgIGluY2x1ZGU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG1vZGVsOiBtb2RlbHMuRGlzdHJpY3QsXHJcbiAgICAgICAgICAgICAgYXM6ICdkaXN0cmljdHMnLFxyXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFsnZGlzdHJpY3RfaWQnLCAnZGlzdHJpY3RfbmFtZSddLFxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG1vZGVsOiBtb2RlbHMuUHJvdmluY2UsXHJcbiAgICAgICAgICAgICAgYXM6ICdwcm92aW5jZXMnLFxyXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFsncHJvdmluY2VfaWQnLCAncHJvdmluY2VfbmFtZScsICdwcm92aW5jZV9hYmJyZXYnXSxcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbW9kZWw6IG1vZGVscy5Vc2VycyxcclxuICAgICAgICAgIGFzOiAndXNlcnMnLFxyXG4gICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgdHlwZV91c2VyOiAyLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICAvLyBpbmNsdWRlOiBtb2RlbHMuUGFja2FnZXNcclxuICAgICAgLy8gaW5jbHVkZTogW3tcclxuICAgICAgLy8gICBhc3NvY2lhdGlvbjogbW9kZWxzLlBhY2thZ2VzLFxyXG4gICAgICAvLyAgIGluY2x1ZGU6IFsgbW9kZWxzLk9yZ2FuaXphdGlvbi5wYWNrYWdlX2RhdGEgXVxyXG4gICAgICAvLyB9XVxyXG4gICAgfSk7XHJcbiAgICAvLyBjb25zdCB1c2VyID0gYXdhaXQgbW9kZWxzLnVzZXJzLmZpbmRPbmUoe1xyXG4gICAgLy8gICB3aGVyZToge1xyXG4gICAgLy8gICAgIGlkOiB1c2VySWQsXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyAgIGluY2x1ZGU6IFtcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICBtb2RlbDogbW9kZWxzLnBvc3RzLFxyXG4gICAgLy8gICAgICAgYXM6ICdwb3N0cycsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICBtb2RlbDogbW9kZWxzLmpvYnMsXHJcbiAgICAvLyAgICAgICBhczogJ2pvYnMnLFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgIF0sXHJcbiAgICAvLyB9KTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgIHN0YXR1czogMjAwLFxyXG4gICAgICBtZXNzYWdlOiBcInN1Y2Nlc3NcIixcclxuICAgICAgb3JnYW5pemF0aW9uOiBvcmdhbml6YXRpb24gPyBvcmdhbml6YXRpb24gOiBbXVxyXG4gICAgfSk7XHJcbiAgfSlcclxuICAucG9zdChhc3luYyAocmVxLCByZXMpID0+IHsgfSlcclxuICAucHV0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBib2R5IH0gPSByZXE7XHJcbiAgICBjb25zdCB7IHNsdWcgfSA9IHJlcS5xdWVyeTtcclxuICAgIGNvbnN0IG9yZ2FuaXphdGlvbl9pZCA9IHNsdWc7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG9yZ2FuaXphdGlvbl9uYW1lLFxyXG4gICAgICBvcmdhbml6YXRpb25fbmFtZV9lbmcgPSBcIlwiLFxyXG4gICAgICBvcmdhbml6YXRpb25fcGhvbmUsXHJcbiAgICAgIHRodW1ibmFpbF91cmwsXHJcbiAgICAgIG9yZ2FuaXphdGlvbl9lbWFpbCxcclxuICAgICAgZGF0ZV9leHBpcmVkLFxyXG4gICAgICBwYWNrYWdlX2lkLFxyXG4gICAgICBvcmdhbml6YXRpb25fc3ViX2Rpc3RyaWN0X2lkID0gMCxcclxuICAgICAgb3JnYW5pemF0aW9uX2ZheCA9IFwiXCIsXHJcbiAgICAgIHRodW1ibmFpbF9saW5rLFxyXG4gICAgICBpc191c2UsXHJcbiAgICAgIG9yZ2FuaXphdGlvbl9hZGRyZXNzID0gXCJcIlxyXG4gICAgfSA9IGJvZHk7XHJcblxyXG4gICAgY29uc3QgZGF0YU9yZ2FuaXphdGlvbiA9IHtcclxuICAgICAgb3JnYW5pemF0aW9uX25hbWU6IG9yZ2FuaXphdGlvbl9uYW1lLFxyXG4gICAgICBvcmdhbml6YXRpb25fbmFtZV9lbmc6IG9yZ2FuaXphdGlvbl9uYW1lX2VuZyxcclxuICAgICAgb3JnYW5pemF0aW9uX3Bob25lOiBvcmdhbml6YXRpb25fcGhvbmUsXHJcbiAgICAgIHRodW1ibmFpbF91cmw6IHRodW1ibmFpbF91cmwsXHJcbiAgICAgIG9yZ2FuaXphdGlvbl9lbWFpbDogb3JnYW5pemF0aW9uX2VtYWlsLFxyXG4gICAgICBkYXRlX2V4cGlyZWQ6IGRhdGVfZXhwaXJlZCxcclxuICAgICAgcGFja2FnZTogcGFja2FnZV9pZCxcclxuICAgICAgb3JnYW5pemF0aW9uX3N1Yl9kaXN0cmljdF9pZDogb3JnYW5pemF0aW9uX3N1Yl9kaXN0cmljdF9pZCxcclxuICAgICAgb3JnYW5pemF0aW9uX2ZheDogb3JnYW5pemF0aW9uX2ZheCxcclxuICAgICAgdGh1bWJuYWlsX2xpbms6IHRodW1ibmFpbF9saW5rLFxyXG4gICAgICBpc191c2U6IGlzX3VzZSxcclxuICAgICAgb3JnYW5pemF0aW9uX2FkZHJlc3M6IG9yZ2FuaXphdGlvbl9hZGRyZXNzXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChcclxuICAgICAgb3JnYW5pemF0aW9uX2lkID09IHVuZGVmaW5lZCB8fFxyXG4gICAgICBvcmdhbml6YXRpb25fbmFtZSA9PSB1bmRlZmluZWQgfHwgb3JnYW5pemF0aW9uX25hbWVfZW5nID09IHVuZGVmaW5lZCB8fFxyXG4gICAgICBvcmdhbml6YXRpb25fcGhvbmUgPT0gdW5kZWZpbmVkIHx8IHRodW1ibmFpbF91cmwgPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgIG9yZ2FuaXphdGlvbl9lbWFpbCA9PSB1bmRlZmluZWQgfHwgZGF0ZV9leHBpcmVkID09IHVuZGVmaW5lZCB8fFxyXG4gICAgICBwYWNrYWdlX2lkID09IHVuZGVmaW5lZCB8fCBvcmdhbml6YXRpb25fc3ViX2Rpc3RyaWN0X2lkID09IHVuZGVmaW5lZCB8fFxyXG4gICAgICBvcmdhbml6YXRpb25fZmF4ID09IHVuZGVmaW5lZCB8fCB0aHVtYm5haWxfbGluayA9PSB1bmRlZmluZWQgfHxcclxuICAgICAgaXNfdXNlID09IHVuZGVmaW5lZCB8fCBvcmdhbml6YXRpb25fYWRkcmVzcyA9PSB1bmRlZmluZWRcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIHN0YXR1czogMjAxLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdkYXRhIGluY29ycmVjdCcsXHJcbiAgICAgICAgb3JnYW5pemF0aW9uX2lkOiBvcmdhbml6YXRpb25faWQsXHJcbiAgICAgICAgZGF0YU9yZ2FuaXphdGlvbjogZGF0YU9yZ2FuaXphdGlvblxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3Qgb3JnYW5pemF0aW9uID0gYXdhaXQgbW9kZWxzLk9yZ2FuaXphdGlvbi51cGRhdGUoXHJcbiAgICAgIGRhdGFPcmdhbml6YXRpb24sIHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBvcmdhbml6YXRpb25faWQ6IG9yZ2FuaXphdGlvbl9pZFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgIHN0YXR1czogMjAwLFxyXG4gICAgICBtZXNzYWdlOiBcInN1Y2Nlc3NcIixcclxuICAgICAgb3JnYW5pemF0aW9uOiBvcmdhbml6YXRpb24gPyBvcmdhbml6YXRpb24gOiBbXVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYXdhaXQgVXNlci51cGRhdGUoeyBsYXN0TmFtZTogXCJEb2VcIiB9LCB7XHJcbiAgICAvLyAgIHdoZXJlOiB7XHJcbiAgICAvLyAgICAgbGFzdE5hbWU6IG51bGxcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSk7XHJcblxyXG4gIH0pXHJcbiAgLmRlbGV0ZShhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgYm9keSB9ID0gcmVxO1xyXG4gICAgY29uc3QgeyBzbHVnIH0gPSByZXEucXVlcnk7XHJcbiAgICBjb25zdCBvcmdhbml6YXRpb25faWQgPSBzbHVnO1xyXG4gICAgaWYgKG9yZ2FuaXphdGlvbl9pZCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBzdGF0dXM6IDIwMSxcclxuICAgICAgICBtZXNzYWdlOiAnZGF0YSBpbmNvcnJlY3QnLFxyXG4gICAgICAgIG9yZ2FuaXphdGlvbl9pZDogb3JnYW5pemF0aW9uX2lkXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGFPcmdhbml6YXRpb24gPSB7XHJcbiAgICAgIGlzX3VzZTogMyxcclxuXHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb3JnYW5pemF0aW9uID0gYXdhaXQgbW9kZWxzLk9yZ2FuaXphdGlvbi51cGRhdGUoXHJcbiAgICAgIGRhdGFPcmdhbml6YXRpb24sIHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBvcmdhbml6YXRpb25faWQ6IG9yZ2FuaXphdGlvbl9pZFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgIHN0YXR1czogMjAwLFxyXG4gICAgICBtZXNzYWdlOiBcInN1Y2Nlc3NcIixcclxuICAgICAgb3JnYW5pemF0aW9uOiBvcmdhbml6YXRpb24gPyBvcmdhbml6YXRpb24gOiBbXVxyXG4gICAgfSk7XHJcblxyXG4gIH0pXHJcbiAgLnBhdGNoKGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cclxuICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWNvbm5lY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==