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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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

/***/ "./pages/api/package/[slug].js":
/*!*************************************!*\
  !*** ./pages/api/package/[slug].js ***!
  \*************************************/
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
  const package_id = slug;
  const packageData = await models.Packages.findOne({
    where: {
      package_id: package_id
    }
  });
  return res.status(200).json({
    status: 200,
    message: "success",
    packageData: packageData ? packageData : []
  });
}).post(async (req, res) => {}).put(async (req, res) => {}).delete(async (req, res) => {}).patch(async (req, res) => {});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ 7:
/*!*******************************************!*\
  !*** multi ./pages/api/package/[slug].js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\govermentlt\pages\api\package\[slug].js */"./pages/api/package/[slug].js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGIvY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9kYi9tb2RlbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3BhY2thZ2UvW3NsdWddLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvdGVudlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1jb25uZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcXVlbGl6ZVwiIl0sIm5hbWVzIjpbImRvdGVudiIsInJlcXVpcmUiLCJyZXN1bHQiLCJjb25maWciLCJtb2R1bGUiLCJleHBvcnRzIiwiZGV2ZWxvcG1lbnQiLCJ1c2VybmFtZSIsInByb2Nlc3MiLCJlbnYiLCJEQl9VU0VSIiwicGFzc3dvcmQiLCJEQl9QQVNTIiwiZGF0YWJhc2UiLCJEQl9OQU1FIiwiaG9zdCIsIkRCX0hPU1QiLCJkaWFsZWN0IiwidGVzdCIsImxvZ2dpbmciLCJwcm9kdWN0aW9uIiwiZGlhbGVjdE9wdGlvbnMiLCJzc2wiLCJmcyIsInBhdGgiLCJTZXF1ZWxpemUiLCJiYXNlbmFtZSIsIl9fZmlsZW5hbWUiLCJfX2Rpcm5hbWUiLCJkYiIsIm1vZGVscyIsImN3ZCIsInNlcXVlbGl6ZSIsInVzZV9lbnZfdmFyaWFibGUiLCJyZWFkZGlyU3luYyIsImZpbHRlciIsImZpbGUiLCJpbmRleE9mIiwic2xpY2UiLCJmb3JFYWNoIiwibW9kZWwiLCJqb2luIiwibmFtZSIsIk9iamVjdCIsImtleXMiLCJtb2RlbE5hbWUiLCJhc3NvY2lhdGUiLCJoYW5kbGVyIiwibmV4dENvbm5lY3QiLCJnZXQiLCJyZXEiLCJyZXMiLCJxdWVyeSIsImlkIiwic2x1ZyIsInBhY2thZ2VfaWQiLCJwYWNrYWdlRGF0YSIsIlBhY2thZ2VzIiwiZmluZE9uZSIsIndoZXJlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJwb3N0IiwicHV0IiwiZGVsZXRlIiwicGF0Y2giXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RmE7O0FBQ2IsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHNCQUFELENBQXRCOztBQUNBLE1BQU1DLE1BQU0sR0FBR0YsTUFBTSxDQUFDRyxNQUFQLEVBQWYsQyxDQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmQyxhQUFXLEVBQUU7QUFDWEMsWUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FEWDtBQUVYQyxZQUFRLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxPQUZYO0FBR1hDLFlBQVEs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QixDQXpCYSxFQTBCYmMsTUExQmEsQ0EwQk4sT0FBT2YsR0FBUCxFQUFZQyxHQUFaLEtBQW9CLENBRzNCLENBN0JhLEVBOEJiZSxLQTlCYSxDQThCUCxPQUFPaEIsR0FBUCxFQUFZQyxHQUFaLEtBQW9CLENBRTFCLENBaENhLENBQWhCO0FBa0NlSixzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxzQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYXBpXFxwYWNrYWdlXFxbc2x1Z10uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG4iLCIndXNlIHN0cmljdCc7XHJcbmNvbnN0IGRvdGVudiA9IHJlcXVpcmUoXCJkb3RlbnZcIilcclxuY29uc3QgcmVzdWx0ID0gZG90ZW52LmNvbmZpZygpXHJcblxyXG4vLyBpZiAocmVzdWx0LmVycm9yKSB7XHJcbi8vICAgdGhyb3cgcmVzdWx0LmVycm9yXHJcbi8vIH1cclxuXHJcbi8vIGNvbnNvbGUubG9nKHJlc3VsdC5wYXJzZWQpXHJcblxyXG4vLyBkb3RlbnYuY29uZmlnKHsgcGF0aDogX19kaXJuYW1lICsgJy5lbnYnIH0pO1xyXG4vLyBjb25zb2xlLmxvZyhcInByb2Nlc3MuZW52LkRCX1VTRVJcIik7XHJcbi8vIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LkRCX0hPU1QpO1xyXG4vLyBkb3RlbnYuY29uZmlnKHsgcGF0aDogJy4vY29uZmlnLmVudicgfSk7XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGRldmVsb3BtZW50OiB7XHJcbiAgICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuREJfVVNFUixcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTLFxyXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX05BTUUsXHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxyXG4gICAgZGlhbGVjdDogJ215c3FsJyxcclxuICB9LFxyXG4gIHRlc3Q6IHtcclxuICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxyXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1MsXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSxcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXHJcbiAgICBkaWFsZWN0OiAnbXlzcWwnLFxyXG4gICAgbG9nZ2luZzogZmFsc2UsXHJcbiAgfSxcclxuICBwcm9kdWN0aW9uOiB7XHJcbiAgICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuREJfVVNFUixcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTLFxyXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX05BTUUsXHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxyXG4gICAgZGlhbGVjdDogJ215c3FsJyxcclxuICAgIGRpYWxlY3RPcHRpb25zOiB7XHJcbiAgICAgIHNzbDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xyXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG5jb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcclxuY29uc3QgYmFzZW5hbWUgPSBwYXRoLmJhc2VuYW1lKF9fZmlsZW5hbWUpO1xyXG5jb25zdCBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnO1xyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKF9fZGlybmFtZSArICcvLi4vY29uZmlnL2NvbmZpZy5qcycpW2Vudl07XHJcbmNvbnN0IGRiID0ge307XHJcblxyXG4vKiBDdXN0b20gaGFuZGxlciBmb3IgcmVhZGluZyBjdXJyZW50IHdvcmtpbmcgZGlyZWN0b3J5ICovXHJcbmNvbnN0IG1vZGVscyA9IHByb2Nlc3MuY3dkKCkgKyAnL2RiL21vZGVscy8nIHx8IF9fZGlybmFtZTtcclxuXHJcbmxldCBzZXF1ZWxpemU7XHJcbmlmIChjb25maWcudXNlX2Vudl92YXJpYWJsZSkge1xyXG4gIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUocHJvY2Vzcy5lbnZbY29uZmlnLnVzZV9lbnZfdmFyaWFibGVdLCBjb25maWcpO1xyXG59IGVsc2Uge1xyXG4gIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoXHJcbiAgICBjb25maWcuZGF0YWJhc2UsXHJcbiAgICBjb25maWcudXNlcm5hbWUsXHJcbiAgICBjb25maWcucGFzc3dvcmQsXHJcbiAgICBjb25maWcsXHJcbiAgKTtcclxufVxyXG4vKiBmcy5yZWFkZGlyU3luYyhfX2Rpcm5hbWUpICovXHJcbmZzLnJlYWRkaXJTeW5jKG1vZGVscylcclxuICAuZmlsdGVyKGZpbGUgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgZmlsZS5pbmRleE9mKCcuJykgIT09IDAgJiYgZmlsZSAhPT0gYmFzZW5hbWUgJiYgZmlsZS5zbGljZSgtMykgPT09ICcuanMnXHJcbiAgICApO1xyXG4gIH0pXHJcbiAgLmZvckVhY2goZmlsZSA9PiB7XHJcbiAgICAvKiBjb25zdCBtb2RlbCA9IHNlcXVlbGl6ZVtcImltcG9ydFwiXShwYXRoLmpvaW4oX19kaXJuYW1lLCBmaWxlKSk7ICovXHJcbiAgICBjb25zdCBtb2RlbCA9IHNlcXVlbGl6ZVsnaW1wb3J0J10ocGF0aC5qb2luKG1vZGVscywgZmlsZSkpO1xyXG4gICAgZGJbbW9kZWwubmFtZV0gPSBtb2RlbDtcclxuICB9KTtcclxuXHJcbk9iamVjdC5rZXlzKGRiKS5mb3JFYWNoKG1vZGVsTmFtZSA9PiB7XHJcbiAgaWYgKGRiW21vZGVsTmFtZV0uYXNzb2NpYXRlKSB7XHJcbiAgICBkYlttb2RlbE5hbWVdLmFzc29jaWF0ZShkYik7XHJcbiAgfVxyXG59KTtcclxuXHJcbmRiLnNlcXVlbGl6ZSA9IHNlcXVlbGl6ZTtcclxuZGIuU2VxdWVsaXplID0gU2VxdWVsaXplO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBkYjtcclxuIiwiaW1wb3J0IG5leHRDb25uZWN0IGZyb20gJ25leHQtY29ubmVjdCc7XHJcbmNvbnN0IG1vZGVscyA9IHJlcXVpcmUoJy4uLy4uLy4uL2RiL21vZGVscy9pbmRleCcpO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IG5leHRDb25uZWN0KClcclxuICAuZ2V0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBxdWVyeTogeyBpZCwgbmFtZSB9LFxyXG4gICAgfSA9IHJlcTtcclxuICAgIGNvbnN0IHsgc2x1ZyB9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgY29uc3QgcGFja2FnZV9pZCA9IHNsdWc7XHJcblxyXG5cclxuICAgIGNvbnN0IHBhY2thZ2VEYXRhID0gYXdhaXQgbW9kZWxzLlBhY2thZ2VzLmZpbmRPbmUoe1xyXG4gIFxyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIHBhY2thZ2VfaWQ6IHBhY2thZ2VfaWQsXHJcbiAgICAgIH0sXHJcbiAgICAgXHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgIHN0YXR1czogMjAwLFxyXG4gICAgICBtZXNzYWdlOiBcInN1Y2Nlc3NcIixcclxuICAgICAgcGFja2FnZURhdGE6IHBhY2thZ2VEYXRhID8gcGFja2FnZURhdGEgOiBbXVxyXG4gICAgfSk7XHJcbiAgfSlcclxuICAucG9zdChhc3luYyAocmVxLCByZXMpID0+IHsgfSlcclxuICAucHV0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICBcclxuICB9KVxyXG4gIC5kZWxldGUoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBcclxuXHJcbiAgfSlcclxuICAucGF0Y2goYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblxyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29ubmVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9