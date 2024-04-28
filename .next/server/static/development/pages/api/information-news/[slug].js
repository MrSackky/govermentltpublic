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

/***/ "./pages/api/information-news/[slug].js":
/*!**********************************************!*\
  !*** ./pages/api/information-news/[slug].js ***!
  \**********************************************/
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
  const news_id = slug;
  console.log(news_id);
  const information_news = await models.information_news.findOne({
    where: {
      infor_id: news_id
    }
  });
  return res.status(200).json({
    status: 200,
    message: "success",
    information_news: information_news ? information_news : []
  });
}).post(async (req, res) => {}).put(async (req, res) => {
  const {
    body
  } = req;
  const {
    slug
  } = req.query;
  const news_id = slug;
  const {
    infor_detail
  } = body;
  const dataNews = {
    infor_detail: infor_detail
  };

  if (news_id == undefined || infor_detail == undefined) {
    return res.status(200).json({
      status: 201,
      message: 'data incorrect',
      news_id: news_id,
      dataNews: dataNews
    });
  }

  const organization = await models.information_news.update(dataNews, {
    where: {
      infor_id: news_id
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
}).delete(async (req, res) => {}).patch(async (req, res) => {});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ 12:
/*!****************************************************!*\
  !*** multi ./pages/api/information-news/[slug].js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\govermentlt\pages\api\information-news\[slug].js */"./pages/api/information-news/[slug].js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGIvY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9kYi9tb2RlbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2luZm9ybWF0aW9uLW5ld3MvW3NsdWddLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvdGVudlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1jb25uZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcXVlbGl6ZVwiIl0sIm5hbWVzIjpbImRvdGVudiIsInJlcXVpcmUiLCJyZXN1bHQiLCJjb25maWciLCJtb2R1bGUiLCJleHBvcnRzIiwiZGV2ZWxvcG1lbnQiLCJ1c2VybmFtZSIsInByb2Nlc3MiLCJlbnYiLCJEQl9VU0VSIiwicGFzc3dvcmQiLCJEQl9QQVNTIiwiZGF0YWJhc2UiLCJEQl9OQU1FIiwiaG9zdCIsIkRCX0hPU1QiLCJkaWFsZWN0IiwidGVzdCIsImxvZ2dpbmciLCJwcm9kdWN0aW9uIiwiZGlhbGVjdE9wdGlvbnMiLCJzc2wiLCJmcyIsInBhdGgiLCJTZXF1ZWxpemUiLCJiYXNlbmFtZSIsIl9fZmlsZW5hbWUiLCJfX2Rpcm5hbWUiLCJkYiIsIm1vZGVscyIsImN3ZCIsInNlcXVlbGl6ZSIsInVzZV9lbnZfdmFyaWFibGUiLCJyZWFkZGlyU3luYyIsImZpbHRlciIsImZpbGUiLCJpbmRleE9mIiwic2xpY2UiLCJmb3JFYWNoIiwibW9kZWwiLCJqb2luIiwibmFtZSIsIk9iamVjdCIsImtleXMiLCJtb2RlbE5hbWUiLCJhc3NvY2lhdGUiLCJoYW5kbGVyIiwibmV4dENvbm5lY3QiLCJnZXQiLCJyZXEiLCJyZXMiLCJxdWVyeSIsImlkIiwic2x1ZyIsIm5ld3NfaWQiLCJjb25zb2xlIiwibG9nIiwiaW5mb3JtYXRpb25fbmV3cyIsImZpbmRPbmUiLCJ3aGVyZSIsImluZm9yX2lkIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJwb3N0IiwicHV0IiwiYm9keSIsImluZm9yX2RldGFpbCIsImRhdGFOZXdzIiwidW5kZWZpbmVkIiwib3JnYW5pemF0aW9uIiwidXBkYXRlIiwiZGVsZXRlIiwicGF0Y2giXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RmE7O0FBQ2IsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHNCQUFELENBQXRCOztBQUNBLE1BQU1DLE1BQU0sR0FBR0YsTUFBTSxDQUFDRyxNQUFQLEVBQWYsQyxDQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmQyxhQUFXLEVBQUU7QUFD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c0VOLE9BQU92QixHQUFQLEVBQVlDLEdBQVosS0FBb0IsQ0FFM0IsQ0F4RWEsRUF5RWJ1QixLQXpFYSxDQXlFUCxPQUFPeEIsR0FBUCxFQUFZQyxHQUFaLEtBQW9CLENBRTFCLENBM0VhLENBQWhCO0FBNkVlSixzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxzQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYXBpXFxpbmZvcm1hdGlvbi1uZXdzXFxbc2x1Z10uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5jb25zdCBkb3RlbnYgPSByZXF1aXJlKFwiZG90ZW52XCIpXHJcbmNvbnN0IHJlc3VsdCA9IGRvdGVudi5jb25maWcoKVxyXG5cclxuLy8gaWYgKHJlc3VsdC5lcnJvcikge1xyXG4vLyAgIHRocm93IHJlc3VsdC5lcnJvclxyXG4vLyB9XHJcblxyXG4vLyBjb25zb2xlLmxvZyhyZXN1bHQucGFyc2VkKVxyXG5cclxuLy8gZG90ZW52LmNvbmZpZyh7IHBhdGg6IF9fZGlybmFtZSArICcuZW52JyB9KTtcclxuLy8gY29uc29sZS5sb2coXCJwcm9jZXNzLmVudi5EQl9VU0VSXCIpO1xyXG4vLyBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5EQl9IT1NUKTtcclxuLy8gZG90ZW52LmNvbmZpZyh7IHBhdGg6ICcuL2NvbmZpZy5lbnYnIH0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBkZXZlbG9wbWVudDoge1xyXG4gICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LkRCX1VTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTUyxcclxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxyXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcclxuICAgIGRpYWxlY3Q6ICdteXNxbCcsXHJcbiAgfSxcclxuICB0ZXN0OiB7XHJcbiAgICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuREJfVVNFUixcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTLFxyXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX05BTUUsXHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxyXG4gICAgZGlhbGVjdDogJ215c3FsJyxcclxuICAgIGxvZ2dpbmc6IGZhbHNlLFxyXG4gIH0sXHJcbiAgcHJvZHVjdGlvbjoge1xyXG4gICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LkRCX1VTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTUyxcclxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxyXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcclxuICAgIGRpYWxlY3Q6ICdteXNxbCcsXHJcbiAgICBkaWFsZWN0T3B0aW9uczoge1xyXG4gICAgICBzc2w6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XHJcbmNvbnN0IGJhc2VuYW1lID0gcGF0aC5iYXNlbmFtZShfX2ZpbGVuYW1lKTtcclxuY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JztcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZShfX2Rpcm5hbWUgKyAnLy4uL2NvbmZpZy9jb25maWcuanMnKVtlbnZdO1xyXG5jb25zdCBkYiA9IHt9O1xyXG5cclxuLyogQ3VzdG9tIGhhbmRsZXIgZm9yIHJlYWRpbmcgY3VycmVudCB3b3JraW5nIGRpcmVjdG9yeSAqL1xyXG5jb25zdCBtb2RlbHMgPSBwcm9jZXNzLmN3ZCgpICsgJy9kYi9tb2RlbHMvJyB8fCBfX2Rpcm5hbWU7XHJcblxyXG5sZXQgc2VxdWVsaXplO1xyXG5pZiAoY29uZmlnLnVzZV9lbnZfdmFyaWFibGUpIHtcclxuICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKHByb2Nlc3MuZW52W2NvbmZpZy51c2VfZW52X3ZhcmlhYmxlXSwgY29uZmlnKTtcclxufSBlbHNlIHtcclxuICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKFxyXG4gICAgY29uZmlnLmRhdGFiYXNlLFxyXG4gICAgY29uZmlnLnVzZXJuYW1lLFxyXG4gICAgY29uZmlnLnBhc3N3b3JkLFxyXG4gICAgY29uZmlnLFxyXG4gICk7XHJcbn1cclxuLyogZnMucmVhZGRpclN5bmMoX19kaXJuYW1lKSAqL1xyXG5mcy5yZWFkZGlyU3luYyhtb2RlbHMpXHJcbiAgLmZpbHRlcihmaWxlID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGZpbGUuaW5kZXhPZignLicpICE9PSAwICYmIGZpbGUgIT09IGJhc2VuYW1lICYmIGZpbGUuc2xpY2UoLTMpID09PSAnLmpzJ1xyXG4gICAgKTtcclxuICB9KVxyXG4gIC5mb3JFYWNoKGZpbGUgPT4ge1xyXG4gICAgLyogY29uc3QgbW9kZWwgPSBzZXF1ZWxpemVbXCJpbXBvcnRcIl0ocGF0aC5qb2luKF9fZGlybmFtZSwgZmlsZSkpOyAqL1xyXG4gICAgY29uc3QgbW9kZWwgPSBzZXF1ZWxpemVbJ2ltcG9ydCddKHBhdGguam9pbihtb2RlbHMsIGZpbGUpKTtcclxuICAgIGRiW21vZGVsLm5hbWVdID0gbW9kZWw7XHJcbiAgfSk7XHJcblxyXG5PYmplY3Qua2V5cyhkYikuZm9yRWFjaChtb2RlbE5hbWUgPT4ge1xyXG4gIGlmIChkYlttb2RlbE5hbWVdLmFzc29jaWF0ZSkge1xyXG4gICAgZGJbbW9kZWxOYW1lXS5hc3NvY2lhdGUoZGIpO1xyXG4gIH1cclxufSk7XHJcblxyXG5kYi5zZXF1ZWxpemUgPSBzZXF1ZWxpemU7XHJcbmRiLlNlcXVlbGl6ZSA9IFNlcXVlbGl6ZTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGI7XHJcbiIsImltcG9ydCBuZXh0Q29ubmVjdCBmcm9tICduZXh0LWNvbm5lY3QnO1xyXG5jb25zdCBtb2RlbHMgPSByZXF1aXJlKCcuLi8uLi8uLi9kYi9tb2RlbHMvaW5kZXgnKTtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBuZXh0Q29ubmVjdCgpXHJcbiAgLmdldChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgcXVlcnk6IHsgaWQsIG5hbWUgfSxcclxuICAgIH0gPSByZXE7XHJcbiAgICBjb25zdCB7IHNsdWcgfSA9IHJlcS5xdWVyeTtcclxuICAgIGNvbnN0IG5ld3NfaWQgPSBzbHVnO1xyXG4gICAgY29uc29sZS5sb2cobmV3c19pZClcclxuXHJcbiAgICBjb25zdCBpbmZvcm1hdGlvbl9uZXdzID0gYXdhaXQgbW9kZWxzLmluZm9ybWF0aW9uX25ld3MuZmluZE9uZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgaW5mb3JfaWQgOiBuZXdzX2lkLFxyXG4gICAgICB9LFxyXG4gICAgIFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgIG1lc3NhZ2U6IFwic3VjY2Vzc1wiLFxyXG4gICAgICBpbmZvcm1hdGlvbl9uZXdzOiBpbmZvcm1hdGlvbl9uZXdzID8gaW5mb3JtYXRpb25fbmV3cyA6IFtdXHJcbiAgICB9KTtcclxuICB9KVxyXG4gIC5wb3N0KGFzeW5jIChyZXEsIHJlcykgPT4geyB9KVxyXG4gIC5wdXQoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGJvZHkgfSA9IHJlcTtcclxuICAgIGNvbnN0IHsgc2x1ZyB9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgY29uc3QgbmV3c19pZCA9IHNsdWc7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGluZm9yX2RldGFpbFxyXG4gICAgfSA9IGJvZHk7XHJcblxyXG4gICAgY29uc3QgZGF0YU5ld3MgPSB7XHJcbiAgICAgIGluZm9yX2RldGFpbDogaW5mb3JfZGV0YWlsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChcclxuICAgICAgbmV3c19pZCA9PSB1bmRlZmluZWQgfHxcclxuICAgICAgaW5mb3JfZGV0YWlsID09IHVuZGVmaW5lZCBcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIHN0YXR1czogMjAxLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdkYXRhIGluY29ycmVjdCcsXHJcbiAgICAgICAgbmV3c19pZDogbmV3c19pZCxcclxuICAgICAgICBkYXRhTmV3czogZGF0YU5ld3NcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IG9yZ2FuaXphdGlvbiA9IGF3YWl0IG1vZGVscy5pbmZvcm1hdGlvbl9uZXdzLnVwZGF0ZShcclxuICAgICAgZGF0YU5ld3MsIHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBpbmZvcl9pZCA6IG5ld3NfaWRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICBzdGF0dXM6IDIwMCxcclxuICAgICAgbWVzc2FnZTogXCJzdWNjZXNzXCIsXHJcbiAgICAgIG9yZ2FuaXphdGlvbjogb3JnYW5pemF0aW9uID8gb3JnYW5pemF0aW9uIDogW11cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGF3YWl0IFVzZXIudXBkYXRlKHsgbGFzdE5hbWU6IFwiRG9lXCIgfSwge1xyXG4gICAgLy8gICB3aGVyZToge1xyXG4gICAgLy8gICAgIGxhc3ROYW1lOiBudWxsXHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pO1xyXG5cclxuICB9KVxyXG4gIC5kZWxldGUoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBcclxuICB9KVxyXG4gIC5wYXRjaChhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHJcbiAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1jb25uZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=