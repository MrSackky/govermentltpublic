webpackHotUpdate("static\\development\\pages\\admin\\management-organization.js",{

/***/ "./node_modules/reqwest/reqwest.js":
/*!*****************************************!*\
  !*** ./node_modules/reqwest/reqwest.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  * Reqwest! A general purpose XHR connection manager
  * license MIT (c) Dustin Diaz 2015
  * https://github.com/ded/reqwest
  */

!function (name, context, definition) {
  if ( true && module.exports) module.exports = definition()
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  else {}
}('reqwest', this, function () {

  var context = this

  if ('window' in context) {
    var doc = document
      , byTag = 'getElementsByTagName'
      , head = doc[byTag]('head')[0]
  } else {
    var XHR2
    try {
      XHR2 = __webpack_require__(/*! xhr2 */ 18)
    } catch (ex) {
      throw new Error('Peer dependency `xhr2` required! Please npm install xhr2')
    }
  }


  var httpsRe = /^http/
    , protocolRe = /(^\w+):\/\//
    , twoHundo = /^(20\d|1223)$/ //http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
    , readyState = 'readyState'
    , contentType = 'Content-Type'
    , requestedWith = 'X-Requested-With'
    , uniqid = 0
    , callbackPrefix = 'reqwest_' + (+new Date())
    , lastValue // data stored by the most recent JSONP callback
    , xmlHttpRequest = 'XMLHttpRequest'
    , xDomainRequest = 'XDomainRequest'
    , noop = function () {}

    , isArray = typeof Array.isArray == 'function'
        ? Array.isArray
        : function (a) {
            return a instanceof Array
          }

    , defaultHeaders = {
          'contentType': 'application/x-www-form-urlencoded'
        , 'requestedWith': xmlHttpRequest
        , 'accept': {
              '*':  'text/javascript, text/html, application/xml, text/xml, */*'
            , 'xml':  'application/xml, text/xml'
            , 'html': 'text/html'
            , 'text': 'text/plain'
            , 'json': 'application/json, text/javascript'
            , 'js':   'application/javascript, text/javascript'
          }
      }

    , xhr = function(o) {
        // is it x-domain
        if (o['crossOrigin'] === true) {
          var xhr = context[xmlHttpRequest] ? new XMLHttpRequest() : null
          if (xhr && 'withCredentials' in xhr) {
            return xhr
          } else if (context[xDomainRequest]) {
            return new XDomainRequest()
          } else {
            throw new Error('Browser does not support cross-origin requests')
          }
        } else if (context[xmlHttpRequest]) {
          return new XMLHttpRequest()
        } else if (XHR2) {
          return new XHR2()
        } else {
          return new ActiveXObject('Microsoft.XMLHTTP')
        }
      }
    , globalSetupOptions = {
        dataFilter: function (data) {
          return data
        }
      }

  function succeed(r) {
    var protocol = protocolRe.exec(r.url)
    protocol = (protocol && protocol[1]) || context.location.protocol
    return httpsRe.test(protocol) ? twoHundo.test(r.request.status) : !!r.request.response
  }

  function handleReadyState(r, success, error) {
    return function () {
      // use _aborted to mitigate against IE err c00c023f
      // (can't read props on aborted request objects)
      if (r._aborted) return error(r.request)
      if (r._timedOut) return error(r.request, 'Request is aborted: timeout')
      if (r.request && r.request[readyState] == 4) {
        r.request.onreadystatechange = noop
        if (succeed(r)) success(r.request)
        else
          error(r.request)
      }
    }
  }

  function setHeaders(http, o) {
    var headers = o['headers'] || {}
      , h

    headers['Accept'] = headers['Accept']
      || defaultHeaders['accept'][o['type']]
      || defaultHeaders['accept']['*']

    var isAFormData = typeof FormData !== 'undefined' && (o['data'] instanceof FormData);
    // breaks cross-origin requests with legacy browsers
    if (!o['crossOrigin'] && !headers[requestedWith]) headers[requestedWith] = defaultHeaders['requestedWith']
    if (!headers[contentType] && !isAFormData) headers[contentType] = o['contentType'] || defaultHeaders['contentType']
    for (h in headers)
      headers.hasOwnProperty(h) && 'setRequestHeader' in http && http.setRequestHeader(h, headers[h])
  }

  function setCredentials(http, o) {
    if (typeof o['withCredentials'] !== 'undefined' && typeof http.withCredentials !== 'undefined') {
      http.withCredentials = !!o['withCredentials']
    }
  }

  function generalCallback(data) {
    lastValue = data
  }

  function urlappend (url, s) {
    return url + (/\?/.test(url) ? '&' : '?') + s
  }

  function handleJsonp(o, fn, err, url) {
    var reqId = uniqid++
      , cbkey = o['jsonpCallback'] || 'callback' // the 'callback' key
      , cbval = o['jsonpCallbackName'] || reqwest.getcallbackPrefix(reqId)
      , cbreg = new RegExp('((^|\\?|&)' + cbkey + ')=([^&]+)')
      , match = url.match(cbreg)
      , script = doc.createElement('script')
      , loaded = 0
      , isIE10 = navigator.userAgent.indexOf('MSIE 10.0') !== -1

    if (match) {
      if (match[3] === '?') {
        url = url.replace(cbreg, '$1=' + cbval) // wildcard callback func name
      } else {
        cbval = match[3] // provided callback func name
      }
    } else {
      url = urlappend(url, cbkey + '=' + cbval) // no callback details, add 'em
    }

    context[cbval] = generalCallback

    script.type = 'text/javascript'
    script.src = url
    script.async = true
    if (typeof script.onreadystatechange !== 'undefined' && !isIE10) {
      // need this for IE due to out-of-order onreadystatechange(), binding script
      // execution to an event listener gives us control over when the script
      // is executed. See http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
      script.htmlFor = script.id = '_reqwest_' + reqId
    }

    script.onload = script.onreadystatechange = function () {
      if ((script[readyState] && script[readyState] !== 'complete' && script[readyState] !== 'loaded') || loaded) {
        return false
      }
      script.onload = script.onreadystatechange = null
      script.onclick && script.onclick()
      // Call the user callback with the last value stored and clean up values and scripts.
      fn(lastValue)
      lastValue = undefined
      head.removeChild(script)
      loaded = 1
    }

    // Add the script to the DOM head
    head.appendChild(script)

    // Enable JSONP timeout
    return {
      abort: function () {
        script.onload = script.onreadystatechange = null
        err({}, 'Request is aborted: timeout', {})
        lastValue = undefined
        head.removeChild(script)
        loaded = 1
      }
    }
  }

  function getRequest(fn, err) {
    var o = this.o
      , method = (o['method'] || 'GET').toUpperCase()
      , url = typeof o === 'string' ? o : o['url']
      // convert non-string objects to query-string form unless o['processData'] is false
      , data = (o['processData'] !== false && o['data'] && typeof o['data'] !== 'string')
        ? reqwest.toQueryString(o['data'])
        : (o['data'] || null)
      , http
      , sendWait = false

    // if we're working on a GET request and we have data then we should append
    // query string to end of URL and not post data
    if ((o['type'] == 'jsonp' || method == 'GET') && data) {
      url = urlappend(url, data)
      data = null
    }

    if (o['type'] == 'jsonp') return handleJsonp(o, fn, err, url)

    // get the xhr from the factory if passed
    // if the factory returns null, fall-back to ours
    http = (o.xhr && o.xhr(o)) || xhr(o)

    http.open(method, url, o['async'] === false ? false : true)
    setHeaders(http, o)
    setCredentials(http, o)
    if (context[xDomainRequest] && http instanceof context[xDomainRequest]) {
        http.onload = fn
        http.onerror = err
        // NOTE: see
        // http://social.msdn.microsoft.com/Forums/en-US/iewebdevelopment/thread/30ef3add-767c-4436-b8a9-f1ca19b4812e
        http.onprogress = function() {}
        sendWait = true
    } else {
      http.onreadystatechange = handleReadyState(this, fn, err)
    }
    o['before'] && o['before'](http)
    if (sendWait) {
      setTimeout(function () {
        http.send(data)
      }, 200)
    } else {
      http.send(data)
    }
    return http
  }

  function Reqwest(o, fn) {
    this.o = o
    this.fn = fn

    init.apply(this, arguments)
  }

  function setType(header) {
    // json, javascript, text/plain, text/html, xml
    if (header === null) return undefined; //In case of no content-type.
    if (header.match('json')) return 'json'
    if (header.match('javascript')) return 'js'
    if (header.match('text')) return 'html'
    if (header.match('xml')) return 'xml'
  }

  function init(o, fn) {

    this.url = typeof o == 'string' ? o : o['url']
    this.timeout = null

    // whether request has been fulfilled for purpose
    // of tracking the Promises
    this._fulfilled = false
    // success handlers
    this._successHandler = function(){}
    this._fulfillmentHandlers = []
    // error handlers
    this._errorHandlers = []
    // complete (both success and fail) handlers
    this._completeHandlers = []
    this._erred = false
    this._responseArgs = {}

    var self = this

    fn = fn || function () {}

    if (o['timeout']) {
      this.timeout = setTimeout(function () {
        timedOut()
      }, o['timeout'])
    }

    if (o['success']) {
      this._successHandler = function () {
        o['success'].apply(o, arguments)
      }
    }

    if (o['error']) {
      this._errorHandlers.push(function () {
        o['error'].apply(o, arguments)
      })
    }

    if (o['complete']) {
      this._completeHandlers.push(function () {
        o['complete'].apply(o, arguments)
      })
    }

    function complete (resp) {
      o['timeout'] && clearTimeout(self.timeout)
      self.timeout = null
      while (self._completeHandlers.length > 0) {
        self._completeHandlers.shift()(resp)
      }
    }

    function success (resp) {
      var type = o['type'] || resp && setType(resp.getResponseHeader('Content-Type')) // resp can be undefined in IE
      resp = (type !== 'jsonp') ? self.request : resp
      // use global data filter on response text
      var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type)
        , r = filteredResponse
      try {
        resp.responseText = r
      } catch (e) {
        // can't assign this in IE<=8, just ignore
      }
      if (r) {
        switch (type) {
        case 'json':
          try {
            resp = context.JSON ? context.JSON.parse(r) : eval('(' + r + ')')
          } catch (err) {
            return error(resp, 'Could not parse JSON in response', err)
          }
          break
        case 'js':
          resp = eval(r)
          break
        case 'html':
          resp = r
          break
        case 'xml':
          resp = resp.responseXML
              && resp.responseXML.parseError // IE trololo
              && resp.responseXML.parseError.errorCode
              && resp.responseXML.parseError.reason
            ? null
            : resp.responseXML
          break
        }
      }

      self._responseArgs.resp = resp
      self._fulfilled = true
      fn(resp)
      self._successHandler(resp)
      while (self._fulfillmentHandlers.length > 0) {
        resp = self._fulfillmentHandlers.shift()(resp)
      }

      complete(resp)
    }

    function timedOut() {
      self._timedOut = true
      self.request.abort()
    }

    function error(resp, msg, t) {
      resp = self.request
      self._responseArgs.resp = resp
      self._responseArgs.msg = msg
      self._responseArgs.t = t
      self._erred = true
      while (self._errorHandlers.length > 0) {
        self._errorHandlers.shift()(resp, msg, t)
      }
      complete(resp)
    }

    this.request = getRequest.call(this, success, error)
  }

  Reqwest.prototype = {
    abort: function () {
      this._aborted = true
      this.request.abort()
    }

  , retry: function () {
      init.call(this, this.o, this.fn)
    }

    /**
     * Small deviation from the Promises A CommonJs specification
     * http://wiki.commonjs.org/wiki/Promises/A
     */

    /**
     * `then` will execute upon successful requests
     */
  , then: function (success, fail) {
      success = success || function () {}
      fail = fail || function () {}
      if (this._fulfilled) {
        this._responseArgs.resp = success(this._responseArgs.resp)
      } else if (this._erred) {
        fail(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
      } else {
        this._fulfillmentHandlers.push(success)
        this._errorHandlers.push(fail)
      }
      return this
    }

    /**
     * `always` will execute whether the request succeeds or fails
     */
  , always: function (fn) {
      if (this._fulfilled || this._erred) {
        fn(this._responseArgs.resp)
      } else {
        this._completeHandlers.push(fn)
      }
      return this
    }

    /**
     * `fail` will execute when the request fails
     */
  , fail: function (fn) {
      if (this._erred) {
        fn(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
      } else {
        this._errorHandlers.push(fn)
      }
      return this
    }
  , 'catch': function (fn) {
      return this.fail(fn)
    }
  }

  function reqwest(o, fn) {
    return new Reqwest(o, fn)
  }

  // normalize newline variants according to spec -> CRLF
  function normalize(s) {
    return s ? s.replace(/\r?\n/g, '\r\n') : ''
  }

  function serial(el, cb) {
    var n = el.name
      , t = el.tagName.toLowerCase()
      , optCb = function (o) {
          // IE gives value="" even where there is no value attribute
          // 'specified' ref: http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-862529273
          if (o && !o['disabled'])
            cb(n, normalize(o['attributes']['value'] && o['attributes']['value']['specified'] ? o['value'] : o['text']))
        }
      , ch, ra, val, i

    // don't serialize elements that are disabled or without a name
    if (el.disabled || !n) return

    switch (t) {
    case 'input':
      if (!/reset|button|image|file/i.test(el.type)) {
        ch = /checkbox/i.test(el.type)
        ra = /radio/i.test(el.type)
        val = el.value
        // WebKit gives us "" instead of "on" if a checkbox has no value, so correct it here
        ;(!(ch || ra) || el.checked) && cb(n, normalize(ch && val === '' ? 'on' : val))
      }
      break
    case 'textarea':
      cb(n, normalize(el.value))
      break
    case 'select':
      if (el.type.toLowerCase() === 'select-one') {
        optCb(el.selectedIndex >= 0 ? el.options[el.selectedIndex] : null)
      } else {
        for (i = 0; el.length && i < el.length; i++) {
          el.options[i].selected && optCb(el.options[i])
        }
      }
      break
    }
  }

  // collect up all form elements found from the passed argument elements all
  // the way down to child elements; pass a '<form>' or form fields.
  // called with 'this'=callback to use for serial() on each element
  function eachFormElement() {
    var cb = this
      , e, i
      , serializeSubtags = function (e, tags) {
          var i, j, fa
          for (i = 0; i < tags.length; i++) {
            fa = e[byTag](tags[i])
            for (j = 0; j < fa.length; j++) serial(fa[j], cb)
          }
        }

    for (i = 0; i < arguments.length; i++) {
      e = arguments[i]
      if (/input|select|textarea/i.test(e.tagName)) serial(e, cb)
      serializeSubtags(e, [ 'input', 'select', 'textarea' ])
    }
  }

  // standard query string style serialization
  function serializeQueryString() {
    return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
  }

  // { 'name': 'value', ... } style serialization
  function serializeHash() {
    var hash = {}
    eachFormElement.apply(function (name, value) {
      if (name in hash) {
        hash[name] && !isArray(hash[name]) && (hash[name] = [hash[name]])
        hash[name].push(value)
      } else hash[name] = value
    }, arguments)
    return hash
  }

  // [ { name: 'name', value: 'value' }, ... ] style serialization
  reqwest.serializeArray = function () {
    var arr = []
    eachFormElement.apply(function (name, value) {
      arr.push({name: name, value: value})
    }, arguments)
    return arr
  }

  reqwest.serialize = function () {
    if (arguments.length === 0) return ''
    var opt, fn
      , args = Array.prototype.slice.call(arguments, 0)

    opt = args.pop()
    opt && opt.nodeType && args.push(opt) && (opt = null)
    opt && (opt = opt.type)

    if (opt == 'map') fn = serializeHash
    else if (opt == 'array') fn = reqwest.serializeArray
    else fn = serializeQueryString

    return fn.apply(null, args)
  }

  reqwest.toQueryString = function (o, trad) {
    var prefix, i
      , traditional = trad || false
      , s = []
      , enc = encodeURIComponent
      , add = function (key, value) {
          // If value is a function, invoke it and return its value
          value = ('function' === typeof value) ? value() : (value == null ? '' : value)
          s[s.length] = enc(key) + '=' + enc(value)
        }
    // If an array was passed in, assume that it is an array of form elements.
    if (isArray(o)) {
      for (i = 0; o && i < o.length; i++) add(o[i]['name'], o[i]['value'])
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in o) {
        if (o.hasOwnProperty(prefix)) buildParams(prefix, o[prefix], traditional, add)
      }
    }

    // spaces should be + according to spec
    return s.join('&').replace(/%20/g, '+')
  }

  function buildParams(prefix, obj, traditional, add) {
    var name, i, v
      , rbracket = /\[\]$/

    if (isArray(obj)) {
      // Serialize array item.
      for (i = 0; obj && i < obj.length; i++) {
        v = obj[i]
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v)
        } else {
          buildParams(prefix + '[' + (typeof v === 'object' ? i : '') + ']', v, traditional, add)
        }
      }
    } else if (obj && obj.toString() === '[object Object]') {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + '[' + name + ']', obj[name], traditional, add)
      }

    } else {
      // Serialize scalar item.
      add(prefix, obj)
    }
  }

  reqwest.getcallbackPrefix = function () {
    return callbackPrefix
  }

  // jQuery and Zepto compatibility, differences can be remapped here so you can call
  // .ajax.compat(options, callback)
  reqwest.compat = function (o, fn) {
    if (o) {
      o['type'] && (o['method'] = o['type']) && delete o['type']
      o['dataType'] && (o['type'] = o['dataType'])
      o['jsonpCallback'] && (o['jsonpCallbackName'] = o['jsonpCallback']) && delete o['jsonpCallback']
      o['jsonp'] && (o['jsonpCallback'] = o['jsonp'])
    }
    return new Reqwest(o, fn)
  }

  reqwest.ajaxSetup = function (options) {
    options = options || {}
    for (var k in options) {
      globalSetupOptions[k] = options[k]
    }
  }

  return reqwest
});


/***/ }),

/***/ "./pages/admin/management-organization/index.js":
/*!******************************************************!*\
  !*** ./pages/admin/management-organization/index.js ***!
  \******************************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reqwest */ "./node_modules/reqwest/reqwest.js");
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reqwest__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../middleware/utils */ "./middleware/utils.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/layout/LayoutAdmin */ "./components/layout/LayoutAdmin.jsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");





var _jsxFileName = "D:\\govermentlt\\pages\\admin\\management-organization\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* utils */



/* components */

 // import UserNav from '../components/navigation/User';



var Text = antd__WEBPACK_IMPORTED_MODULE_10__["Typography"].Text,
    Title = antd__WEBPACK_IMPORTED_MODULE_10__["Typography"].Title;
var TextArea = antd__WEBPACK_IMPORTED_MODULE_10__["Input"].TextArea,
    Search = antd__WEBPACK_IMPORTED_MODULE_10__["Input"].Search;
var __N_SSP = true;
function Home(props) {
  _s();

  var _this = this;

  var _notification$useNoti = antd__WEBPACK_IMPORTED_MODULE_10__["notification"].useNotification(),
      _notification$useNoti2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_notification$useNoti, 2),
      api = _notification$useNoti2[0],
      contextHolder = _notification$useNoti2[1];

  var user = props.user,
      origin = props.origin;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      login = _useState[0],
      setLogin = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      shouldRun = _useState2[0],
      setShouldRun = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      data = _useState3[0],
      setData = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      search = _useState5[0],
      setSearch = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      visibleModalDelete = _useState6[0],
      setVisibleModalDelete = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      dataDelete = _useState7[0],
      setDataDelete = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      filters = _useState8[0],
      setFilters = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    current: 1,
    pageSize: 10
  }),
      pagination = _useState9[0],
      setPagination = _useState9[1];

  var columns = [{
    title: 'วันที่สมัคร',
    dataIndex: '',
    sorter: true,
    key: 'date_created',
    render: function render(data) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }
      }, " ", Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["convertDatetoThaiDate"])(Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["convertDateDBtoDatePickerNoTime"])(data.date_created)), " "));
    } // render: name => `${name.first} ${name.last}`,
    // width: '20%',
    // defaultSortOrder: 'descend',

  }, {
    title: 'วันที่หมดอายุ',
    dataIndex: '',
    sorter: true,
    key: 'date_expired',
    render: function render(data) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 9
        }
      }, " ", Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["convertDatetoThaiDate"])(Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["convertDateDBtoDatePickerNoTime"])(data.date_expired)), " "));
    } // render: name => `${name.first} ${name.last}`,
    // width: '20%',
    // defaultSortOrder: 'descend',

  }, {
    title: 'ชื่อหน่วยงาน',
    dataIndex: 'organization_name',
    sorter: true // render: name => `${name.first} ${name.last}`,
    // width: '20%',
    // defaultSortOrder: 'descend',

  }, {
    title: 'ใช้พื้นที่',
    dataIndex: '',
    sorter: true,
    key: 'size_used',
    render: function render(data) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 9
        }
      }, " ", Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["bytesToSize"])(data.size_used), "  "));
    } // defaultSortOrder: 'descend',

  }, {
    title: 'package',
    dataIndex: '',
    key: 'package',
    sorter: true,
    render: function render(data) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 9
        }
      }, " ", data.packages.name_package, " "));
    },
    filters: [{
      text: 'Free Package',
      value: 1
    }, {
      text: 'Connect Package',
      value: 2
    }, {
      text: 'Standard Package',
      value: 3
    }, {
      text: 'Premium Package',
      value: 4
    }] // render: name => `${name.first} ${name.last}`,
    // width: '20%',
    // defaultSortOrder: 'descend',

  }, {
    title: 'สถานะ',
    dataIndex: '',
    key: 'is_use',
    sorter: true,
    render: function render(data) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 9
        }
      }, " ", data.is_use == 1 ? "ใช้งาน" : "ไม่ใช้งาน", " "));
    } // render: name => `${name.first} ${name.last}`,
    // width: '20%',
    // defaultSortOrder: 'descend',

  }, {
    title: '',
    dataIndex: '',
    key: 'x',
    render: function render(data) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        type: "primary",
        size: "default",
        onClick: function onClick() {
          return gotoPage(data.organization_id);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 9
        }
      }, " \u0E41\u0E01\u0E49\u0E44\u0E02 "), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        className: "ml-1",
        type: "danger",
        onClick: function onClick() {
          return showModal(data);
        },
        size: "default",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 9
        }
      }, " \u0E25\u0E1A "));
    }
  } // {
  //   title: 'Gender',
  //   dataIndex: 'gender',
  //   // filters: [
  //   //   { text: 'Male', value: 'male' },
  //   //   { text: 'Female', value: 'female' },
  //   // ],
  //   width: '20%',
  // },
  // {
  //   title: 'Email',
  //   dataIndex: 'email',
  // },
  ];

  var gotoPage = function gotoPage(id) {
    console.log(id);
    next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/admin/management-organization/organization/' + id);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var _filters = [];
    pagination.filters = _filters;
    fetch({
      pagination: pagination
    });
  }, []);

  var handleTableChange = function handleTableChange(pagination, filters, sorter) {
    console.log(sorter);
    setPagination({
      pageSize: pagination.pageSize,
      current: pagination.current
    });
    setFilters(filters["package"]);
    fetch({
      sortField: sorter.columnKey,
      sortOrder: sorter.order,
      pagination: pagination,
      filters: filters["package"]
    });
  };

  var onSearch = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_search) {
      var addactivitiesData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              setSearch(_search);
              setPagination({
                pageSize: pagination.pageSize,
                current: 1
              });
              _context.next = 5;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["apiInstance"])().get('organization?results=' + pagination.pageSize + '&page=1&search=' + _search + "&filters=" + filters);

            case 5:
              addactivitiesData = _context.sent;
              setData(addactivitiesData.data.results);
              setLoading(false);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSearch(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var fetch = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var params,
          addactivitiesData,
          _args2 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              params = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
              setLoading(true);
              _context2.next = 4;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["apiInstance"])().get('organization?results=' + params.pagination.pageSize + '&page=' + params.pagination.current + "&search=" + search + "&sortField=" + params.sortField + "&sortOrder=" + params.sortOrder + "&filters=" + params.filters);

            case 4:
              addactivitiesData = _context2.sent;
              setData(addactivitiesData.data.results);
              setPagination(_objectSpread(_objectSpread({}, params.pagination), {}, {
                total: addactivitiesData.data.totalCount // 200 is mock data, you should read it from server
                // total: data.totalCount,

              }));
              setLoading(false);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function fetch() {
      return _ref2.apply(this, arguments);
    };
  }(); // const fetch = (params = {}) => {
  //   setLoading(true)
  //   reqwest({
  //     url: 'https://randomuser.me/api',
  //     method: 'get',
  //     type: 'json',
  //     data: getRandomuserParams(params),
  //   }).then(data => {
  //     console.log(data);
  //     setLoading(false)
  //     setData(data.results)
  //     setPagination({
  //       ...params.pagination,
  //       total: 200,
  //       // 200 is mock data, you should read it from server
  //       // total: data.totalCount,
  //     })
  //   });
  // };


  var showModal = function showModal(data) {
    console.log('data deletd');
    console.log(data);
    setDataDelete(data);
    setVisibleModalDelete(true);
  };

  var hideModal = function hideModal() {
    setVisibleModalDelete(false);
  };

  var onDeleteOrganization = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var registerData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_7__["apiInstance"])()["delete"]('/organization/' + dataDelete.organization_id, {});

            case 2:
              registerData = _context3.sent;

              if (registerData.data.status == 200) {
                openNotificationSuccess(); // fetchOrganizationData();

                setVisibleModalDelete(false);
                fetch({
                  pagination: pagination
                });
              } else {
                openNotificationFail(registerData.data.message);
              }

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function onDeleteOrganization() {
      return _ref3.apply(this, arguments);
    };
  }();

  var openNotificationSuccess = function openNotificationSuccess() {
    api.success({
      message: "\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
      description: 'ลบข้อมูลสำเร็จ',
      placement: 'topRight'
    });
  };

  var openNotificationFail = function openNotificationFail(messgae) {
    api.error({
      message: "\u0E1E\u0E1A\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25",
      description: messgae,
      placement: 'topRight'
    });
  };

  return __jsx(_components_layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_9__["default"], {
    key: "home-organization",
    titlePage: "หน่วยงาน",
    title: "Government - Admin management",
    url: origin,
    origin: origin,
    isMain: true,
    indexMenu: "1",
    user: login,
    props: props,
    _routes: [{
      path: '/admin/dashborad',
      breadcrumbName: 'หน้าหลัก'
    }, {
      path: '/admin/management-organization',
      breadcrumbName: 'จัดการหน่วยงาน'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 7
    }
  }, contextHolder, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Col"], {
    span: 24,
    className: " pb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Col"], {
    span: 18,
    className: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Row"], {
    className: "items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/admin/management-organization/add-organization",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 19
    }
  }, __jsx("a", {
    //onClick={(e) => handleLogout(e)}
    className: "lg:inline-flex lg:w-auto w-full px-2 py-2 rounded h-8 text-white bg-green-600 font-bold items-center justify-center hover:bg-green-600 hover:text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 21
    }
  }, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19ddddddddddd")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Col"], {
    span: 6,
    className: "flex items-center justify-end justify-items-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Row"], {
    className: " justify-end justify-items-end ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 17
    }
  }, __jsx(Search, {
    placeholder: "input search text",
    onSearch: onSearch,
    enterButton: true,
    allowClear: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 19
    }
  })))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Table"], {
    columns: columns,
    rowKey: function rowKey(record) {
      return record.organization_id;
    },
    dataSource: data,
    pagination: pagination,
    loading: loading,
    onChange: handleTableChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Modal"], {
    title: "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?",
    visible: visibleModalDelete,
    onOk: onDeleteOrganization,
    onCancel: hideModal,
    okText: "\u0E25\u0E1A",
    cancelText: "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",
    okButtonProps: {
      'type': "primary",
      'danger': true
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 9
    }
  }, "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A \"", dataDelete ? dataDelete.organization_name : "", "\" \u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?  ")));
}
/* getServerSideProps */

_s(Home, "B/zpem81lA4iahYszi41VNhSPaY=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_10__["notification"].useNotification];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 18:
/*!**********************!*\
  !*** xhr2 (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVxd2VzdC9yZXF3ZXN0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FkbWluL21hbmFnZW1lbnQtb3JnYW5pemF0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy94aHIyIChpZ25vcmVkKSJdLCJuYW1lcyI6WyJUZXh0IiwiVHlwb2dyYXBoeSIsIlRpdGxlIiwiVGV4dEFyZWEiLCJJbnB1dCIsIlNlYXJjaCIsIkhvbWUiLCJwcm9wcyIsIm5vdGlmaWNhdGlvbiIsInVzZU5vdGlmaWNhdGlvbiIsImFwaSIsImNvbnRleHRIb2xkZXIiLCJ1c2VyIiwib3JpZ2luIiwidXNlU3RhdGUiLCJsb2dpbiIsInNldExvZ2luIiwic2hvdWxkUnVuIiwic2V0U2hvdWxkUnVuIiwiZGF0YSIsInNldERhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNlYXJjaCIsInNldFNlYXJjaCIsInZpc2libGVNb2RhbERlbGV0ZSIsInNldFZpc2libGVNb2RhbERlbGV0ZSIsImRhdGFEZWxldGUiLCJzZXREYXRhRGVsZXRlIiwiZmlsdGVycyIsInNldEZpbHRlcnMiLCJjdXJyZW50IiwicGFnZVNpemUiLCJwYWdpbmF0aW9uIiwic2V0UGFnaW5hdGlvbiIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsInNvcnRlciIsImtleSIsInJlbmRlciIsImNvbnZlcnREYXRldG9UaGFpRGF0ZSIsImNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUiLCJkYXRlX2NyZWF0ZWQiLCJkYXRlX2V4cGlyZWQiLCJieXRlc1RvU2l6ZSIsInNpemVfdXNlZCIsInBhY2thZ2VzIiwibmFtZV9wYWNrYWdlIiwidGV4dCIsInZhbHVlIiwiaXNfdXNlIiwiZ290b1BhZ2UiLCJvcmdhbml6YXRpb25faWQiLCJzaG93TW9kYWwiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJSb3V0ZXIiLCJwdXNoIiwidXNlRWZmZWN0IiwiX2ZpbHRlcnMiLCJmZXRjaCIsImhhbmRsZVRhYmxlQ2hhbmdlIiwic29ydEZpZWxkIiwiY29sdW1uS2V5Iiwic29ydE9yZGVyIiwib3JkZXIiLCJvblNlYXJjaCIsIl9zZWFyY2giLCJhcGlJbnN0YW5jZSIsImdldCIsImFkZGFjdGl2aXRpZXNEYXRhIiwicmVzdWx0cyIsInBhcmFtcyIsInRvdGFsIiwidG90YWxDb3VudCIsImhpZGVNb2RhbCIsIm9uRGVsZXRlT3JnYW5pemF0aW9uIiwicmVnaXN0ZXJEYXRhIiwic3RhdHVzIiwib3Blbk5vdGlmaWNhdGlvblN1Y2Nlc3MiLCJvcGVuTm90aWZpY2F0aW9uRmFpbCIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZGVzY3JpcHRpb24iLCJwbGFjZW1lbnQiLCJtZXNzZ2FlIiwiZXJyb3IiLCJwYXRoIiwiYnJlYWRjcnVtYk5hbWUiLCJyZWNvcmQiLCJvcmdhbml6YXRpb25fbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sS0FBNEI7QUFDbEMsV0FBVyxJQUF5QyxFQUFFLG9DQUFPLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQSxvR0FBQztBQUN4RSxPQUFPLEVBQTRCO0FBQ25DLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGFBQWEsbUJBQU8sQ0FBQyxjQUFNO0FBQzNCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG1DQUFtQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QUssRUFBQyx5SkFEUjtBQUVFLFdBQU8sRUFBRXRDLGtCQUZYO0FBR0UsUUFBSSxFQUFFcUQsb0JBSFI7QUFJRSxZQUFRLEVBQUVELFNBSlo7QUFLRSxVQUFNLEVBQUMsY0FMVDtBQU1FLGNBQVUsRUFBQyxzQ0FOYjtBQU9FLGlCQUFhLEVBQUU7QUFDYixjQUFRLFNBREs7QUFFYixnQkFBVTtBQUZHLEtBUGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9GQUFrQmxELFVBQVUsR0FBR0EsVUFBVSxDQUFDaUUsaUJBQWQsR0FBa0MsRUFBOUQscURBWkYsQ0FwREYsQ0FERjtBQXNFRDtBQUNEOztHQTFUd0J0RixJO1VBQ09FLGtEQUFZLENBQUNDLGU7OztLQURwQkgsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJ4QixlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pblxcbWFuYWdlbWVudC1vcmdhbml6YXRpb24uanMuM2JhN2MyZTZiOTY3Zjg4ZjNiNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxyXG4gICogUmVxd2VzdCEgQSBnZW5lcmFsIHB1cnBvc2UgWEhSIGNvbm5lY3Rpb24gbWFuYWdlclxyXG4gICogbGljZW5zZSBNSVQgKGMpIER1c3RpbiBEaWF6IDIwMTVcclxuICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9kZWQvcmVxd2VzdFxyXG4gICovXHJcblxyXG4hZnVuY3Rpb24gKG5hbWUsIGNvbnRleHQsIGRlZmluaXRpb24pIHtcclxuICBpZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKClcclxuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkgZGVmaW5lKGRlZmluaXRpb24pXHJcbiAgZWxzZSBjb250ZXh0W25hbWVdID0gZGVmaW5pdGlvbigpXHJcbn0oJ3JlcXdlc3QnLCB0aGlzLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIHZhciBjb250ZXh0ID0gdGhpc1xyXG5cclxuICBpZiAoJ3dpbmRvdycgaW4gY29udGV4dCkge1xyXG4gICAgdmFyIGRvYyA9IGRvY3VtZW50XHJcbiAgICAgICwgYnlUYWcgPSAnZ2V0RWxlbWVudHNCeVRhZ05hbWUnXHJcbiAgICAgICwgaGVhZCA9IGRvY1tieVRhZ10oJ2hlYWQnKVswXVxyXG4gIH0gZWxzZSB7XHJcbiAgICB2YXIgWEhSMlxyXG4gICAgdHJ5IHtcclxuICAgICAgWEhSMiA9IHJlcXVpcmUoJ3hocjInKVxyXG4gICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQZWVyIGRlcGVuZGVuY3kgYHhocjJgIHJlcXVpcmVkISBQbGVhc2UgbnBtIGluc3RhbGwgeGhyMicpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgdmFyIGh0dHBzUmUgPSAvXmh0dHAvXHJcbiAgICAsIHByb3RvY29sUmUgPSAvKF5cXHcrKTpcXC9cXC8vXHJcbiAgICAsIHR3b0h1bmRvID0gL14oMjBcXGR8MTIyMykkLyAvL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTAwNDY5NzIvbXNpZS1yZXR1cm5zLXN0YXR1cy1jb2RlLW9mLTEyMjMtZm9yLWFqYXgtcmVxdWVzdFxyXG4gICAgLCByZWFkeVN0YXRlID0gJ3JlYWR5U3RhdGUnXHJcbiAgICAsIGNvbnRlbnRUeXBlID0gJ0NvbnRlbnQtVHlwZSdcclxuICAgICwgcmVxdWVzdGVkV2l0aCA9ICdYLVJlcXVlc3RlZC1XaXRoJ1xyXG4gICAgLCB1bmlxaWQgPSAwXHJcbiAgICAsIGNhbGxiYWNrUHJlZml4ID0gJ3JlcXdlc3RfJyArICgrbmV3IERhdGUoKSlcclxuICAgICwgbGFzdFZhbHVlIC8vIGRhdGEgc3RvcmVkIGJ5IHRoZSBtb3N0IHJlY2VudCBKU09OUCBjYWxsYmFja1xyXG4gICAgLCB4bWxIdHRwUmVxdWVzdCA9ICdYTUxIdHRwUmVxdWVzdCdcclxuICAgICwgeERvbWFpblJlcXVlc3QgPSAnWERvbWFpblJlcXVlc3QnXHJcbiAgICAsIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxyXG5cclxuICAgICwgaXNBcnJheSA9IHR5cGVvZiBBcnJheS5pc0FycmF5ID09ICdmdW5jdGlvbidcclxuICAgICAgICA/IEFycmF5LmlzQXJyYXlcclxuICAgICAgICA6IGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhIGluc3RhbmNlb2YgQXJyYXlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAsIGRlZmF1bHRIZWFkZXJzID0ge1xyXG4gICAgICAgICAgJ2NvbnRlbnRUeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICAsICdyZXF1ZXN0ZWRXaXRoJzogeG1sSHR0cFJlcXVlc3RcclxuICAgICAgICAsICdhY2NlcHQnOiB7XHJcbiAgICAgICAgICAgICAgJyonOiAgJ3RleHQvamF2YXNjcmlwdCwgdGV4dC9odG1sLCBhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sLCAqLyonXHJcbiAgICAgICAgICAgICwgJ3htbCc6ICAnYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbCdcclxuICAgICAgICAgICAgLCAnaHRtbCc6ICd0ZXh0L2h0bWwnXHJcbiAgICAgICAgICAgICwgJ3RleHQnOiAndGV4dC9wbGFpbidcclxuICAgICAgICAgICAgLCAnanNvbic6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHQnXHJcbiAgICAgICAgICAgICwgJ2pzJzogICAnYXBwbGljYXRpb24vamF2YXNjcmlwdCwgdGV4dC9qYXZhc2NyaXB0J1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgLCB4aHIgPSBmdW5jdGlvbihvKSB7XHJcbiAgICAgICAgLy8gaXMgaXQgeC1kb21haW5cclxuICAgICAgICBpZiAob1snY3Jvc3NPcmlnaW4nXSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgdmFyIHhociA9IGNvbnRleHRbeG1sSHR0cFJlcXVlc3RdID8gbmV3IFhNTEh0dHBSZXF1ZXN0KCkgOiBudWxsXHJcbiAgICAgICAgICBpZiAoeGhyICYmICd3aXRoQ3JlZGVudGlhbHMnIGluIHhocikge1xyXG4gICAgICAgICAgICByZXR1cm4geGhyXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHRbeERvbWFpblJlcXVlc3RdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgWERvbWFpblJlcXVlc3QoKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCcm93c2VyIGRvZXMgbm90IHN1cHBvcnQgY3Jvc3Mtb3JpZ2luIHJlcXVlc3RzJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHRbeG1sSHR0cFJlcXVlc3RdKSB7XHJcbiAgICAgICAgICByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0KClcclxuICAgICAgICB9IGVsc2UgaWYgKFhIUjIpIHtcclxuICAgICAgICAgIHJldHVybiBuZXcgWEhSMigpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTEhUVFAnKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgLCBnbG9iYWxTZXR1cE9wdGlvbnMgPSB7XHJcbiAgICAgICAgZGF0YUZpbHRlcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgIHJldHVybiBkYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gIGZ1bmN0aW9uIHN1Y2NlZWQocikge1xyXG4gICAgdmFyIHByb3RvY29sID0gcHJvdG9jb2xSZS5leGVjKHIudXJsKVxyXG4gICAgcHJvdG9jb2wgPSAocHJvdG9jb2wgJiYgcHJvdG9jb2xbMV0pIHx8IGNvbnRleHQubG9jYXRpb24ucHJvdG9jb2xcclxuICAgIHJldHVybiBodHRwc1JlLnRlc3QocHJvdG9jb2wpID8gdHdvSHVuZG8udGVzdChyLnJlcXVlc3Quc3RhdHVzKSA6ICEhci5yZXF1ZXN0LnJlc3BvbnNlXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVSZWFkeVN0YXRlKHIsIHN1Y2Nlc3MsIGVycm9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyB1c2UgX2Fib3J0ZWQgdG8gbWl0aWdhdGUgYWdhaW5zdCBJRSBlcnIgYzAwYzAyM2ZcclxuICAgICAgLy8gKGNhbid0IHJlYWQgcHJvcHMgb24gYWJvcnRlZCByZXF1ZXN0IG9iamVjdHMpXHJcbiAgICAgIGlmIChyLl9hYm9ydGVkKSByZXR1cm4gZXJyb3Ioci5yZXF1ZXN0KVxyXG4gICAgICBpZiAoci5fdGltZWRPdXQpIHJldHVybiBlcnJvcihyLnJlcXVlc3QsICdSZXF1ZXN0IGlzIGFib3J0ZWQ6IHRpbWVvdXQnKVxyXG4gICAgICBpZiAoci5yZXF1ZXN0ICYmIHIucmVxdWVzdFtyZWFkeVN0YXRlXSA9PSA0KSB7XHJcbiAgICAgICAgci5yZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG5vb3BcclxuICAgICAgICBpZiAoc3VjY2VlZChyKSkgc3VjY2VzcyhyLnJlcXVlc3QpXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgZXJyb3Ioci5yZXF1ZXN0KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRIZWFkZXJzKGh0dHAsIG8pIHtcclxuICAgIHZhciBoZWFkZXJzID0gb1snaGVhZGVycyddIHx8IHt9XHJcbiAgICAgICwgaFxyXG5cclxuICAgIGhlYWRlcnNbJ0FjY2VwdCddID0gaGVhZGVyc1snQWNjZXB0J11cclxuICAgICAgfHwgZGVmYXVsdEhlYWRlcnNbJ2FjY2VwdCddW29bJ3R5cGUnXV1cclxuICAgICAgfHwgZGVmYXVsdEhlYWRlcnNbJ2FjY2VwdCddWycqJ11cclxuXHJcbiAgICB2YXIgaXNBRm9ybURhdGEgPSB0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnICYmIChvWydkYXRhJ10gaW5zdGFuY2VvZiBGb3JtRGF0YSk7XHJcbiAgICAvLyBicmVha3MgY3Jvc3Mtb3JpZ2luIHJlcXVlc3RzIHdpdGggbGVnYWN5IGJyb3dzZXJzXHJcbiAgICBpZiAoIW9bJ2Nyb3NzT3JpZ2luJ10gJiYgIWhlYWRlcnNbcmVxdWVzdGVkV2l0aF0pIGhlYWRlcnNbcmVxdWVzdGVkV2l0aF0gPSBkZWZhdWx0SGVhZGVyc1sncmVxdWVzdGVkV2l0aCddXHJcbiAgICBpZiAoIWhlYWRlcnNbY29udGVudFR5cGVdICYmICFpc0FGb3JtRGF0YSkgaGVhZGVyc1tjb250ZW50VHlwZV0gPSBvWydjb250ZW50VHlwZSddIHx8IGRlZmF1bHRIZWFkZXJzWydjb250ZW50VHlwZSddXHJcbiAgICBmb3IgKGggaW4gaGVhZGVycylcclxuICAgICAgaGVhZGVycy5oYXNPd25Qcm9wZXJ0eShoKSAmJiAnc2V0UmVxdWVzdEhlYWRlcicgaW4gaHR0cCAmJiBodHRwLnNldFJlcXVlc3RIZWFkZXIoaCwgaGVhZGVyc1toXSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldENyZWRlbnRpYWxzKGh0dHAsIG8pIHtcclxuICAgIGlmICh0eXBlb2Ygb1snd2l0aENyZWRlbnRpYWxzJ10gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBodHRwLndpdGhDcmVkZW50aWFscyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgaHR0cC53aXRoQ3JlZGVudGlhbHMgPSAhIW9bJ3dpdGhDcmVkZW50aWFscyddXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZW5lcmFsQ2FsbGJhY2soZGF0YSkge1xyXG4gICAgbGFzdFZhbHVlID0gZGF0YVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXJsYXBwZW5kICh1cmwsIHMpIHtcclxuICAgIHJldHVybiB1cmwgKyAoL1xcPy8udGVzdCh1cmwpID8gJyYnIDogJz8nKSArIHNcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUpzb25wKG8sIGZuLCBlcnIsIHVybCkge1xyXG4gICAgdmFyIHJlcUlkID0gdW5pcWlkKytcclxuICAgICAgLCBjYmtleSA9IG9bJ2pzb25wQ2FsbGJhY2snXSB8fCAnY2FsbGJhY2snIC8vIHRoZSAnY2FsbGJhY2snIGtleVxyXG4gICAgICAsIGNidmFsID0gb1snanNvbnBDYWxsYmFja05hbWUnXSB8fCByZXF3ZXN0LmdldGNhbGxiYWNrUHJlZml4KHJlcUlkKVxyXG4gICAgICAsIGNicmVnID0gbmV3IFJlZ0V4cCgnKChefFxcXFw/fCYpJyArIGNia2V5ICsgJyk9KFteJl0rKScpXHJcbiAgICAgICwgbWF0Y2ggPSB1cmwubWF0Y2goY2JyZWcpXHJcbiAgICAgICwgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXHJcbiAgICAgICwgbG9hZGVkID0gMFxyXG4gICAgICAsIGlzSUUxMCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignTVNJRSAxMC4wJykgIT09IC0xXHJcblxyXG4gICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgIGlmIChtYXRjaFszXSA9PT0gJz8nKSB7XHJcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoY2JyZWcsICckMT0nICsgY2J2YWwpIC8vIHdpbGRjYXJkIGNhbGxiYWNrIGZ1bmMgbmFtZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNidmFsID0gbWF0Y2hbM10gLy8gcHJvdmlkZWQgY2FsbGJhY2sgZnVuYyBuYW1lXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVybCA9IHVybGFwcGVuZCh1cmwsIGNia2V5ICsgJz0nICsgY2J2YWwpIC8vIG5vIGNhbGxiYWNrIGRldGFpbHMsIGFkZCAnZW1cclxuICAgIH1cclxuXHJcbiAgICBjb250ZXh0W2NidmFsXSA9IGdlbmVyYWxDYWxsYmFja1xyXG5cclxuICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCdcclxuICAgIHNjcmlwdC5zcmMgPSB1cmxcclxuICAgIHNjcmlwdC5hc3luYyA9IHRydWVcclxuICAgIGlmICh0eXBlb2Ygc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSAhPT0gJ3VuZGVmaW5lZCcgJiYgIWlzSUUxMCkge1xyXG4gICAgICAvLyBuZWVkIHRoaXMgZm9yIElFIGR1ZSB0byBvdXQtb2Ytb3JkZXIgb25yZWFkeXN0YXRlY2hhbmdlKCksIGJpbmRpbmcgc2NyaXB0XHJcbiAgICAgIC8vIGV4ZWN1dGlvbiB0byBhbiBldmVudCBsaXN0ZW5lciBnaXZlcyB1cyBjb250cm9sIG92ZXIgd2hlbiB0aGUgc2NyaXB0XHJcbiAgICAgIC8vIGlzIGV4ZWN1dGVkLiBTZWUgaHR0cDovL2phdWJvdXJnLm5ldC8yMDEwLzA3L2xvYWRpbmctc2NyaXB0LWFzLW9uY2xpY2staGFuZGxlci1vZi5odG1sXHJcbiAgICAgIHNjcmlwdC5odG1sRm9yID0gc2NyaXB0LmlkID0gJ19yZXF3ZXN0XycgKyByZXFJZFxyXG4gICAgfVxyXG5cclxuICAgIHNjcmlwdC5vbmxvYWQgPSBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoKHNjcmlwdFtyZWFkeVN0YXRlXSAmJiBzY3JpcHRbcmVhZHlTdGF0ZV0gIT09ICdjb21wbGV0ZScgJiYgc2NyaXB0W3JlYWR5U3RhdGVdICE9PSAnbG9hZGVkJykgfHwgbG9hZGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgc2NyaXB0Lm9ubG9hZCA9IHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsXHJcbiAgICAgIHNjcmlwdC5vbmNsaWNrICYmIHNjcmlwdC5vbmNsaWNrKClcclxuICAgICAgLy8gQ2FsbCB0aGUgdXNlciBjYWxsYmFjayB3aXRoIHRoZSBsYXN0IHZhbHVlIHN0b3JlZCBhbmQgY2xlYW4gdXAgdmFsdWVzIGFuZCBzY3JpcHRzLlxyXG4gICAgICBmbihsYXN0VmFsdWUpXHJcbiAgICAgIGxhc3RWYWx1ZSA9IHVuZGVmaW5lZFxyXG4gICAgICBoZWFkLnJlbW92ZUNoaWxkKHNjcmlwdClcclxuICAgICAgbG9hZGVkID0gMVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCB0aGUgc2NyaXB0IHRvIHRoZSBET00gaGVhZFxyXG4gICAgaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpXHJcblxyXG4gICAgLy8gRW5hYmxlIEpTT05QIHRpbWVvdXRcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGFib3J0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsXHJcbiAgICAgICAgZXJyKHt9LCAnUmVxdWVzdCBpcyBhYm9ydGVkOiB0aW1lb3V0Jywge30pXHJcbiAgICAgICAgbGFzdFZhbHVlID0gdW5kZWZpbmVkXHJcbiAgICAgICAgaGVhZC5yZW1vdmVDaGlsZChzY3JpcHQpXHJcbiAgICAgICAgbG9hZGVkID0gMVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRSZXF1ZXN0KGZuLCBlcnIpIHtcclxuICAgIHZhciBvID0gdGhpcy5vXHJcbiAgICAgICwgbWV0aG9kID0gKG9bJ21ldGhvZCddIHx8ICdHRVQnKS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICwgdXJsID0gdHlwZW9mIG8gPT09ICdzdHJpbmcnID8gbyA6IG9bJ3VybCddXHJcbiAgICAgIC8vIGNvbnZlcnQgbm9uLXN0cmluZyBvYmplY3RzIHRvIHF1ZXJ5LXN0cmluZyBmb3JtIHVubGVzcyBvWydwcm9jZXNzRGF0YSddIGlzIGZhbHNlXHJcbiAgICAgICwgZGF0YSA9IChvWydwcm9jZXNzRGF0YSddICE9PSBmYWxzZSAmJiBvWydkYXRhJ10gJiYgdHlwZW9mIG9bJ2RhdGEnXSAhPT0gJ3N0cmluZycpXHJcbiAgICAgICAgPyByZXF3ZXN0LnRvUXVlcnlTdHJpbmcob1snZGF0YSddKVxyXG4gICAgICAgIDogKG9bJ2RhdGEnXSB8fCBudWxsKVxyXG4gICAgICAsIGh0dHBcclxuICAgICAgLCBzZW5kV2FpdCA9IGZhbHNlXHJcblxyXG4gICAgLy8gaWYgd2UncmUgd29ya2luZyBvbiBhIEdFVCByZXF1ZXN0IGFuZCB3ZSBoYXZlIGRhdGEgdGhlbiB3ZSBzaG91bGQgYXBwZW5kXHJcbiAgICAvLyBxdWVyeSBzdHJpbmcgdG8gZW5kIG9mIFVSTCBhbmQgbm90IHBvc3QgZGF0YVxyXG4gICAgaWYgKChvWyd0eXBlJ10gPT0gJ2pzb25wJyB8fCBtZXRob2QgPT0gJ0dFVCcpICYmIGRhdGEpIHtcclxuICAgICAgdXJsID0gdXJsYXBwZW5kKHVybCwgZGF0YSlcclxuICAgICAgZGF0YSA9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBpZiAob1sndHlwZSddID09ICdqc29ucCcpIHJldHVybiBoYW5kbGVKc29ucChvLCBmbiwgZXJyLCB1cmwpXHJcblxyXG4gICAgLy8gZ2V0IHRoZSB4aHIgZnJvbSB0aGUgZmFjdG9yeSBpZiBwYXNzZWRcclxuICAgIC8vIGlmIHRoZSBmYWN0b3J5IHJldHVybnMgbnVsbCwgZmFsbC1iYWNrIHRvIG91cnNcclxuICAgIGh0dHAgPSAoby54aHIgJiYgby54aHIobykpIHx8IHhocihvKVxyXG5cclxuICAgIGh0dHAub3BlbihtZXRob2QsIHVybCwgb1snYXN5bmMnXSA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWUpXHJcbiAgICBzZXRIZWFkZXJzKGh0dHAsIG8pXHJcbiAgICBzZXRDcmVkZW50aWFscyhodHRwLCBvKVxyXG4gICAgaWYgKGNvbnRleHRbeERvbWFpblJlcXVlc3RdICYmIGh0dHAgaW5zdGFuY2VvZiBjb250ZXh0W3hEb21haW5SZXF1ZXN0XSkge1xyXG4gICAgICAgIGh0dHAub25sb2FkID0gZm5cclxuICAgICAgICBodHRwLm9uZXJyb3IgPSBlcnJcclxuICAgICAgICAvLyBOT1RFOiBzZWVcclxuICAgICAgICAvLyBodHRwOi8vc29jaWFsLm1zZG4ubWljcm9zb2Z0LmNvbS9Gb3J1bXMvZW4tVVMvaWV3ZWJkZXZlbG9wbWVudC90aHJlYWQvMzBlZjNhZGQtNzY3Yy00NDM2LWI4YTktZjFjYTE5YjQ4MTJlXHJcbiAgICAgICAgaHR0cC5vbnByb2dyZXNzID0gZnVuY3Rpb24oKSB7fVxyXG4gICAgICAgIHNlbmRXYWl0ID0gdHJ1ZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBoYW5kbGVSZWFkeVN0YXRlKHRoaXMsIGZuLCBlcnIpXHJcbiAgICB9XHJcbiAgICBvWydiZWZvcmUnXSAmJiBvWydiZWZvcmUnXShodHRwKVxyXG4gICAgaWYgKHNlbmRXYWl0KSB7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGh0dHAuc2VuZChkYXRhKVxyXG4gICAgICB9LCAyMDApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBodHRwLnNlbmQoZGF0YSlcclxuICAgIH1cclxuICAgIHJldHVybiBodHRwXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBSZXF3ZXN0KG8sIGZuKSB7XHJcbiAgICB0aGlzLm8gPSBvXHJcbiAgICB0aGlzLmZuID0gZm5cclxuXHJcbiAgICBpbml0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldFR5cGUoaGVhZGVyKSB7XHJcbiAgICAvLyBqc29uLCBqYXZhc2NyaXB0LCB0ZXh0L3BsYWluLCB0ZXh0L2h0bWwsIHhtbFxyXG4gICAgaWYgKGhlYWRlciA9PT0gbnVsbCkgcmV0dXJuIHVuZGVmaW5lZDsgLy9JbiBjYXNlIG9mIG5vIGNvbnRlbnQtdHlwZS5cclxuICAgIGlmIChoZWFkZXIubWF0Y2goJ2pzb24nKSkgcmV0dXJuICdqc29uJ1xyXG4gICAgaWYgKGhlYWRlci5tYXRjaCgnamF2YXNjcmlwdCcpKSByZXR1cm4gJ2pzJ1xyXG4gICAgaWYgKGhlYWRlci5tYXRjaCgndGV4dCcpKSByZXR1cm4gJ2h0bWwnXHJcbiAgICBpZiAoaGVhZGVyLm1hdGNoKCd4bWwnKSkgcmV0dXJuICd4bWwnXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbml0KG8sIGZuKSB7XHJcblxyXG4gICAgdGhpcy51cmwgPSB0eXBlb2YgbyA9PSAnc3RyaW5nJyA/IG8gOiBvWyd1cmwnXVxyXG4gICAgdGhpcy50aW1lb3V0ID0gbnVsbFxyXG5cclxuICAgIC8vIHdoZXRoZXIgcmVxdWVzdCBoYXMgYmVlbiBmdWxmaWxsZWQgZm9yIHB1cnBvc2VcclxuICAgIC8vIG9mIHRyYWNraW5nIHRoZSBQcm9taXNlc1xyXG4gICAgdGhpcy5fZnVsZmlsbGVkID0gZmFsc2VcclxuICAgIC8vIHN1Y2Nlc3MgaGFuZGxlcnNcclxuICAgIHRoaXMuX3N1Y2Nlc3NIYW5kbGVyID0gZnVuY3Rpb24oKXt9XHJcbiAgICB0aGlzLl9mdWxmaWxsbWVudEhhbmRsZXJzID0gW11cclxuICAgIC8vIGVycm9yIGhhbmRsZXJzXHJcbiAgICB0aGlzLl9lcnJvckhhbmRsZXJzID0gW11cclxuICAgIC8vIGNvbXBsZXRlIChib3RoIHN1Y2Nlc3MgYW5kIGZhaWwpIGhhbmRsZXJzXHJcbiAgICB0aGlzLl9jb21wbGV0ZUhhbmRsZXJzID0gW11cclxuICAgIHRoaXMuX2VycmVkID0gZmFsc2VcclxuICAgIHRoaXMuX3Jlc3BvbnNlQXJncyA9IHt9XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzXHJcblxyXG4gICAgZm4gPSBmbiB8fCBmdW5jdGlvbiAoKSB7fVxyXG5cclxuICAgIGlmIChvWyd0aW1lb3V0J10pIHtcclxuICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGltZWRPdXQoKVxyXG4gICAgICB9LCBvWyd0aW1lb3V0J10pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9bJ3N1Y2Nlc3MnXSkge1xyXG4gICAgICB0aGlzLl9zdWNjZXNzSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBvWydzdWNjZXNzJ10uYXBwbHkobywgYXJndW1lbnRzKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9bJ2Vycm9yJ10pIHtcclxuICAgICAgdGhpcy5fZXJyb3JIYW5kbGVycy5wdXNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBvWydlcnJvciddLmFwcGx5KG8sIGFyZ3VtZW50cylcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAob1snY29tcGxldGUnXSkge1xyXG4gICAgICB0aGlzLl9jb21wbGV0ZUhhbmRsZXJzLnB1c2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG9bJ2NvbXBsZXRlJ10uYXBwbHkobywgYXJndW1lbnRzKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlIChyZXNwKSB7XHJcbiAgICAgIG9bJ3RpbWVvdXQnXSAmJiBjbGVhclRpbWVvdXQoc2VsZi50aW1lb3V0KVxyXG4gICAgICBzZWxmLnRpbWVvdXQgPSBudWxsXHJcbiAgICAgIHdoaWxlIChzZWxmLl9jb21wbGV0ZUhhbmRsZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzZWxmLl9jb21wbGV0ZUhhbmRsZXJzLnNoaWZ0KCkocmVzcClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN1Y2Nlc3MgKHJlc3ApIHtcclxuICAgICAgdmFyIHR5cGUgPSBvWyd0eXBlJ10gfHwgcmVzcCAmJiBzZXRUeXBlKHJlc3AuZ2V0UmVzcG9uc2VIZWFkZXIoJ0NvbnRlbnQtVHlwZScpKSAvLyByZXNwIGNhbiBiZSB1bmRlZmluZWQgaW4gSUVcclxuICAgICAgcmVzcCA9ICh0eXBlICE9PSAnanNvbnAnKSA/IHNlbGYucmVxdWVzdCA6IHJlc3BcclxuICAgICAgLy8gdXNlIGdsb2JhbCBkYXRhIGZpbHRlciBvbiByZXNwb25zZSB0ZXh0XHJcbiAgICAgIHZhciBmaWx0ZXJlZFJlc3BvbnNlID0gZ2xvYmFsU2V0dXBPcHRpb25zLmRhdGFGaWx0ZXIocmVzcC5yZXNwb25zZVRleHQsIHR5cGUpXHJcbiAgICAgICAgLCByID0gZmlsdGVyZWRSZXNwb25zZVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHJlc3AucmVzcG9uc2VUZXh0ID0gclxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgLy8gY2FuJ3QgYXNzaWduIHRoaXMgaW4gSUU8PTgsIGp1c3QgaWdub3JlXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHIpIHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdqc29uJzpcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJlc3AgPSBjb250ZXh0LkpTT04gPyBjb250ZXh0LkpTT04ucGFyc2UocikgOiBldmFsKCcoJyArIHIgKyAnKScpXHJcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKHJlc3AsICdDb3VsZCBub3QgcGFyc2UgSlNPTiBpbiByZXNwb25zZScsIGVycilcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnanMnOlxyXG4gICAgICAgICAgcmVzcCA9IGV2YWwocilcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnaHRtbCc6XHJcbiAgICAgICAgICByZXNwID0gclxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICd4bWwnOlxyXG4gICAgICAgICAgcmVzcCA9IHJlc3AucmVzcG9uc2VYTUxcclxuICAgICAgICAgICAgICAmJiByZXNwLnJlc3BvbnNlWE1MLnBhcnNlRXJyb3IgLy8gSUUgdHJvbG9sb1xyXG4gICAgICAgICAgICAgICYmIHJlc3AucmVzcG9uc2VYTUwucGFyc2VFcnJvci5lcnJvckNvZGVcclxuICAgICAgICAgICAgICAmJiByZXNwLnJlc3BvbnNlWE1MLnBhcnNlRXJyb3IucmVhc29uXHJcbiAgICAgICAgICAgID8gbnVsbFxyXG4gICAgICAgICAgICA6IHJlc3AucmVzcG9uc2VYTUxcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxmLl9yZXNwb25zZUFyZ3MucmVzcCA9IHJlc3BcclxuICAgICAgc2VsZi5fZnVsZmlsbGVkID0gdHJ1ZVxyXG4gICAgICBmbihyZXNwKVxyXG4gICAgICBzZWxmLl9zdWNjZXNzSGFuZGxlcihyZXNwKVxyXG4gICAgICB3aGlsZSAoc2VsZi5fZnVsZmlsbG1lbnRIYW5kbGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcmVzcCA9IHNlbGYuX2Z1bGZpbGxtZW50SGFuZGxlcnMuc2hpZnQoKShyZXNwKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb21wbGV0ZShyZXNwKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRpbWVkT3V0KCkge1xyXG4gICAgICBzZWxmLl90aW1lZE91dCA9IHRydWVcclxuICAgICAgc2VsZi5yZXF1ZXN0LmFib3J0KClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlcnJvcihyZXNwLCBtc2csIHQpIHtcclxuICAgICAgcmVzcCA9IHNlbGYucmVxdWVzdFxyXG4gICAgICBzZWxmLl9yZXNwb25zZUFyZ3MucmVzcCA9IHJlc3BcclxuICAgICAgc2VsZi5fcmVzcG9uc2VBcmdzLm1zZyA9IG1zZ1xyXG4gICAgICBzZWxmLl9yZXNwb25zZUFyZ3MudCA9IHRcclxuICAgICAgc2VsZi5fZXJyZWQgPSB0cnVlXHJcbiAgICAgIHdoaWxlIChzZWxmLl9lcnJvckhhbmRsZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzZWxmLl9lcnJvckhhbmRsZXJzLnNoaWZ0KCkocmVzcCwgbXNnLCB0KVxyXG4gICAgICB9XHJcbiAgICAgIGNvbXBsZXRlKHJlc3ApXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZXF1ZXN0ID0gZ2V0UmVxdWVzdC5jYWxsKHRoaXMsIHN1Y2Nlc3MsIGVycm9yKVxyXG4gIH1cclxuXHJcbiAgUmVxd2VzdC5wcm90b3R5cGUgPSB7XHJcbiAgICBhYm9ydDogZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLl9hYm9ydGVkID0gdHJ1ZVxyXG4gICAgICB0aGlzLnJlcXVlc3QuYWJvcnQoKVxyXG4gICAgfVxyXG5cclxuICAsIHJldHJ5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGluaXQuY2FsbCh0aGlzLCB0aGlzLm8sIHRoaXMuZm4pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTbWFsbCBkZXZpYXRpb24gZnJvbSB0aGUgUHJvbWlzZXMgQSBDb21tb25KcyBzcGVjaWZpY2F0aW9uXHJcbiAgICAgKiBodHRwOi8vd2lraS5jb21tb25qcy5vcmcvd2lraS9Qcm9taXNlcy9BXHJcbiAgICAgKi9cclxuXHJcbiAgICAvKipcclxuICAgICAqIGB0aGVuYCB3aWxsIGV4ZWN1dGUgdXBvbiBzdWNjZXNzZnVsIHJlcXVlc3RzXHJcbiAgICAgKi9cclxuICAsIHRoZW46IGZ1bmN0aW9uIChzdWNjZXNzLCBmYWlsKSB7XHJcbiAgICAgIHN1Y2Nlc3MgPSBzdWNjZXNzIHx8IGZ1bmN0aW9uICgpIHt9XHJcbiAgICAgIGZhaWwgPSBmYWlsIHx8IGZ1bmN0aW9uICgpIHt9XHJcbiAgICAgIGlmICh0aGlzLl9mdWxmaWxsZWQpIHtcclxuICAgICAgICB0aGlzLl9yZXNwb25zZUFyZ3MucmVzcCA9IHN1Y2Nlc3ModGhpcy5fcmVzcG9uc2VBcmdzLnJlc3ApXHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fZXJyZWQpIHtcclxuICAgICAgICBmYWlsKHRoaXMuX3Jlc3BvbnNlQXJncy5yZXNwLCB0aGlzLl9yZXNwb25zZUFyZ3MubXNnLCB0aGlzLl9yZXNwb25zZUFyZ3MudClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9mdWxmaWxsbWVudEhhbmRsZXJzLnB1c2goc3VjY2VzcylcclxuICAgICAgICB0aGlzLl9lcnJvckhhbmRsZXJzLnB1c2goZmFpbClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYGFsd2F5c2Agd2lsbCBleGVjdXRlIHdoZXRoZXIgdGhlIHJlcXVlc3Qgc3VjY2VlZHMgb3IgZmFpbHNcclxuICAgICAqL1xyXG4gICwgYWx3YXlzOiBmdW5jdGlvbiAoZm4pIHtcclxuICAgICAgaWYgKHRoaXMuX2Z1bGZpbGxlZCB8fCB0aGlzLl9lcnJlZCkge1xyXG4gICAgICAgIGZuKHRoaXMuX3Jlc3BvbnNlQXJncy5yZXNwKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2NvbXBsZXRlSGFuZGxlcnMucHVzaChmbilcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYGZhaWxgIHdpbGwgZXhlY3V0ZSB3aGVuIHRoZSByZXF1ZXN0IGZhaWxzXHJcbiAgICAgKi9cclxuICAsIGZhaWw6IGZ1bmN0aW9uIChmbikge1xyXG4gICAgICBpZiAodGhpcy5fZXJyZWQpIHtcclxuICAgICAgICBmbih0aGlzLl9yZXNwb25zZUFyZ3MucmVzcCwgdGhpcy5fcmVzcG9uc2VBcmdzLm1zZywgdGhpcy5fcmVzcG9uc2VBcmdzLnQpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fZXJyb3JIYW5kbGVycy5wdXNoKGZuKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgLCAnY2F0Y2gnOiBmdW5jdGlvbiAoZm4pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZmFpbChmbilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlcXdlc3QobywgZm4pIHtcclxuICAgIHJldHVybiBuZXcgUmVxd2VzdChvLCBmbilcclxuICB9XHJcblxyXG4gIC8vIG5vcm1hbGl6ZSBuZXdsaW5lIHZhcmlhbnRzIGFjY29yZGluZyB0byBzcGVjIC0+IENSTEZcclxuICBmdW5jdGlvbiBub3JtYWxpemUocykge1xyXG4gICAgcmV0dXJuIHMgPyBzLnJlcGxhY2UoL1xccj9cXG4vZywgJ1xcclxcbicpIDogJydcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNlcmlhbChlbCwgY2IpIHtcclxuICAgIHZhciBuID0gZWwubmFtZVxyXG4gICAgICAsIHQgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKClcclxuICAgICAgLCBvcHRDYiA9IGZ1bmN0aW9uIChvKSB7XHJcbiAgICAgICAgICAvLyBJRSBnaXZlcyB2YWx1ZT1cIlwiIGV2ZW4gd2hlcmUgdGhlcmUgaXMgbm8gdmFsdWUgYXR0cmlidXRlXHJcbiAgICAgICAgICAvLyAnc3BlY2lmaWVkJyByZWY6IGh0dHA6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0zLUNvcmUvY29yZS5odG1sI0lELTg2MjUyOTI3M1xyXG4gICAgICAgICAgaWYgKG8gJiYgIW9bJ2Rpc2FibGVkJ10pXHJcbiAgICAgICAgICAgIGNiKG4sIG5vcm1hbGl6ZShvWydhdHRyaWJ1dGVzJ11bJ3ZhbHVlJ10gJiYgb1snYXR0cmlidXRlcyddWyd2YWx1ZSddWydzcGVjaWZpZWQnXSA/IG9bJ3ZhbHVlJ10gOiBvWyd0ZXh0J10pKVxyXG4gICAgICAgIH1cclxuICAgICAgLCBjaCwgcmEsIHZhbCwgaVxyXG5cclxuICAgIC8vIGRvbid0IHNlcmlhbGl6ZSBlbGVtZW50cyB0aGF0IGFyZSBkaXNhYmxlZCBvciB3aXRob3V0IGEgbmFtZVxyXG4gICAgaWYgKGVsLmRpc2FibGVkIHx8ICFuKSByZXR1cm5cclxuXHJcbiAgICBzd2l0Y2ggKHQpIHtcclxuICAgIGNhc2UgJ2lucHV0JzpcclxuICAgICAgaWYgKCEvcmVzZXR8YnV0dG9ufGltYWdlfGZpbGUvaS50ZXN0KGVsLnR5cGUpKSB7XHJcbiAgICAgICAgY2ggPSAvY2hlY2tib3gvaS50ZXN0KGVsLnR5cGUpXHJcbiAgICAgICAgcmEgPSAvcmFkaW8vaS50ZXN0KGVsLnR5cGUpXHJcbiAgICAgICAgdmFsID0gZWwudmFsdWVcclxuICAgICAgICAvLyBXZWJLaXQgZ2l2ZXMgdXMgXCJcIiBpbnN0ZWFkIG9mIFwib25cIiBpZiBhIGNoZWNrYm94IGhhcyBubyB2YWx1ZSwgc28gY29ycmVjdCBpdCBoZXJlXHJcbiAgICAgICAgOyghKGNoIHx8IHJhKSB8fCBlbC5jaGVja2VkKSAmJiBjYihuLCBub3JtYWxpemUoY2ggJiYgdmFsID09PSAnJyA/ICdvbicgOiB2YWwpKVxyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICd0ZXh0YXJlYSc6XHJcbiAgICAgIGNiKG4sIG5vcm1hbGl6ZShlbC52YWx1ZSkpXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICdzZWxlY3QnOlxyXG4gICAgICBpZiAoZWwudHlwZS50b0xvd2VyQ2FzZSgpID09PSAnc2VsZWN0LW9uZScpIHtcclxuICAgICAgICBvcHRDYihlbC5zZWxlY3RlZEluZGV4ID49IDAgPyBlbC5vcHRpb25zW2VsLnNlbGVjdGVkSW5kZXhdIDogbnVsbClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKGkgPSAwOyBlbC5sZW5ndGggJiYgaSA8IGVsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBlbC5vcHRpb25zW2ldLnNlbGVjdGVkICYmIG9wdENiKGVsLm9wdGlvbnNbaV0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBjb2xsZWN0IHVwIGFsbCBmb3JtIGVsZW1lbnRzIGZvdW5kIGZyb20gdGhlIHBhc3NlZCBhcmd1bWVudCBlbGVtZW50cyBhbGxcclxuICAvLyB0aGUgd2F5IGRvd24gdG8gY2hpbGQgZWxlbWVudHM7IHBhc3MgYSAnPGZvcm0+JyBvciBmb3JtIGZpZWxkcy5cclxuICAvLyBjYWxsZWQgd2l0aCAndGhpcyc9Y2FsbGJhY2sgdG8gdXNlIGZvciBzZXJpYWwoKSBvbiBlYWNoIGVsZW1lbnRcclxuICBmdW5jdGlvbiBlYWNoRm9ybUVsZW1lbnQoKSB7XHJcbiAgICB2YXIgY2IgPSB0aGlzXHJcbiAgICAgICwgZSwgaVxyXG4gICAgICAsIHNlcmlhbGl6ZVN1YnRhZ3MgPSBmdW5jdGlvbiAoZSwgdGFncykge1xyXG4gICAgICAgICAgdmFyIGksIGosIGZhXHJcbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGFncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmYSA9IGVbYnlUYWddKHRhZ3NbaV0pXHJcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBmYS5sZW5ndGg7IGorKykgc2VyaWFsKGZhW2pdLCBjYilcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBlID0gYXJndW1lbnRzW2ldXHJcbiAgICAgIGlmICgvaW5wdXR8c2VsZWN0fHRleHRhcmVhL2kudGVzdChlLnRhZ05hbWUpKSBzZXJpYWwoZSwgY2IpXHJcbiAgICAgIHNlcmlhbGl6ZVN1YnRhZ3MoZSwgWyAnaW5wdXQnLCAnc2VsZWN0JywgJ3RleHRhcmVhJyBdKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gc3RhbmRhcmQgcXVlcnkgc3RyaW5nIHN0eWxlIHNlcmlhbGl6YXRpb25cclxuICBmdW5jdGlvbiBzZXJpYWxpemVRdWVyeVN0cmluZygpIHtcclxuICAgIHJldHVybiByZXF3ZXN0LnRvUXVlcnlTdHJpbmcocmVxd2VzdC5zZXJpYWxpemVBcnJheS5hcHBseShudWxsLCBhcmd1bWVudHMpKVxyXG4gIH1cclxuXHJcbiAgLy8geyAnbmFtZSc6ICd2YWx1ZScsIC4uLiB9IHN0eWxlIHNlcmlhbGl6YXRpb25cclxuICBmdW5jdGlvbiBzZXJpYWxpemVIYXNoKCkge1xyXG4gICAgdmFyIGhhc2ggPSB7fVxyXG4gICAgZWFjaEZvcm1FbGVtZW50LmFwcGx5KGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xyXG4gICAgICBpZiAobmFtZSBpbiBoYXNoKSB7XHJcbiAgICAgICAgaGFzaFtuYW1lXSAmJiAhaXNBcnJheShoYXNoW25hbWVdKSAmJiAoaGFzaFtuYW1lXSA9IFtoYXNoW25hbWVdXSlcclxuICAgICAgICBoYXNoW25hbWVdLnB1c2godmFsdWUpXHJcbiAgICAgIH0gZWxzZSBoYXNoW25hbWVdID0gdmFsdWVcclxuICAgIH0sIGFyZ3VtZW50cylcclxuICAgIHJldHVybiBoYXNoXHJcbiAgfVxyXG5cclxuICAvLyBbIHsgbmFtZTogJ25hbWUnLCB2YWx1ZTogJ3ZhbHVlJyB9LCAuLi4gXSBzdHlsZSBzZXJpYWxpemF0aW9uXHJcbiAgcmVxd2VzdC5zZXJpYWxpemVBcnJheSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBhcnIgPSBbXVxyXG4gICAgZWFjaEZvcm1FbGVtZW50LmFwcGx5KGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xyXG4gICAgICBhcnIucHVzaCh7bmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlfSlcclxuICAgIH0sIGFyZ3VtZW50cylcclxuICAgIHJldHVybiBhcnJcclxuICB9XHJcblxyXG4gIHJlcXdlc3Quc2VyaWFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiAnJ1xyXG4gICAgdmFyIG9wdCwgZm5cclxuICAgICAgLCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKVxyXG5cclxuICAgIG9wdCA9IGFyZ3MucG9wKClcclxuICAgIG9wdCAmJiBvcHQubm9kZVR5cGUgJiYgYXJncy5wdXNoKG9wdCkgJiYgKG9wdCA9IG51bGwpXHJcbiAgICBvcHQgJiYgKG9wdCA9IG9wdC50eXBlKVxyXG5cclxuICAgIGlmIChvcHQgPT0gJ21hcCcpIGZuID0gc2VyaWFsaXplSGFzaFxyXG4gICAgZWxzZSBpZiAob3B0ID09ICdhcnJheScpIGZuID0gcmVxd2VzdC5zZXJpYWxpemVBcnJheVxyXG4gICAgZWxzZSBmbiA9IHNlcmlhbGl6ZVF1ZXJ5U3RyaW5nXHJcblxyXG4gICAgcmV0dXJuIGZuLmFwcGx5KG51bGwsIGFyZ3MpXHJcbiAgfVxyXG5cclxuICByZXF3ZXN0LnRvUXVlcnlTdHJpbmcgPSBmdW5jdGlvbiAobywgdHJhZCkge1xyXG4gICAgdmFyIHByZWZpeCwgaVxyXG4gICAgICAsIHRyYWRpdGlvbmFsID0gdHJhZCB8fCBmYWxzZVxyXG4gICAgICAsIHMgPSBbXVxyXG4gICAgICAsIGVuYyA9IGVuY29kZVVSSUNvbXBvbmVudFxyXG4gICAgICAsIGFkZCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAvLyBJZiB2YWx1ZSBpcyBhIGZ1bmN0aW9uLCBpbnZva2UgaXQgYW5kIHJldHVybiBpdHMgdmFsdWVcclxuICAgICAgICAgIHZhbHVlID0gKCdmdW5jdGlvbicgPT09IHR5cGVvZiB2YWx1ZSkgPyB2YWx1ZSgpIDogKHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlKVxyXG4gICAgICAgICAgc1tzLmxlbmd0aF0gPSBlbmMoa2V5KSArICc9JyArIGVuYyh2YWx1ZSlcclxuICAgICAgICB9XHJcbiAgICAvLyBJZiBhbiBhcnJheSB3YXMgcGFzc2VkIGluLCBhc3N1bWUgdGhhdCBpdCBpcyBhbiBhcnJheSBvZiBmb3JtIGVsZW1lbnRzLlxyXG4gICAgaWYgKGlzQXJyYXkobykpIHtcclxuICAgICAgZm9yIChpID0gMDsgbyAmJiBpIDwgby5sZW5ndGg7IGkrKykgYWRkKG9baV1bJ25hbWUnXSwgb1tpXVsndmFsdWUnXSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIElmIHRyYWRpdGlvbmFsLCBlbmNvZGUgdGhlIFwib2xkXCIgd2F5ICh0aGUgd2F5IDEuMy4yIG9yIG9sZGVyXHJcbiAgICAgIC8vIGRpZCBpdCksIG90aGVyd2lzZSBlbmNvZGUgcGFyYW1zIHJlY3Vyc2l2ZWx5LlxyXG4gICAgICBmb3IgKHByZWZpeCBpbiBvKSB7XHJcbiAgICAgICAgaWYgKG8uaGFzT3duUHJvcGVydHkocHJlZml4KSkgYnVpbGRQYXJhbXMocHJlZml4LCBvW3ByZWZpeF0sIHRyYWRpdGlvbmFsLCBhZGQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzcGFjZXMgc2hvdWxkIGJlICsgYWNjb3JkaW5nIHRvIHNwZWNcclxuICAgIHJldHVybiBzLmpvaW4oJyYnKS5yZXBsYWNlKC8lMjAvZywgJysnKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYnVpbGRQYXJhbXMocHJlZml4LCBvYmosIHRyYWRpdGlvbmFsLCBhZGQpIHtcclxuICAgIHZhciBuYW1lLCBpLCB2XHJcbiAgICAgICwgcmJyYWNrZXQgPSAvXFxbXFxdJC9cclxuXHJcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XHJcbiAgICAgIC8vIFNlcmlhbGl6ZSBhcnJheSBpdGVtLlxyXG4gICAgICBmb3IgKGkgPSAwOyBvYmogJiYgaSA8IG9iai5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHYgPSBvYmpbaV1cclxuICAgICAgICBpZiAodHJhZGl0aW9uYWwgfHwgcmJyYWNrZXQudGVzdChwcmVmaXgpKSB7XHJcbiAgICAgICAgICAvLyBUcmVhdCBlYWNoIGFycmF5IGl0ZW0gYXMgYSBzY2FsYXIuXHJcbiAgICAgICAgICBhZGQocHJlZml4LCB2KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBidWlsZFBhcmFtcyhwcmVmaXggKyAnWycgKyAodHlwZW9mIHYgPT09ICdvYmplY3QnID8gaSA6ICcnKSArICddJywgdiwgdHJhZGl0aW9uYWwsIGFkZClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAob2JqICYmIG9iai50b1N0cmluZygpID09PSAnW29iamVjdCBPYmplY3RdJykge1xyXG4gICAgICAvLyBTZXJpYWxpemUgb2JqZWN0IGl0ZW0uXHJcbiAgICAgIGZvciAobmFtZSBpbiBvYmopIHtcclxuICAgICAgICBidWlsZFBhcmFtcyhwcmVmaXggKyAnWycgKyBuYW1lICsgJ10nLCBvYmpbbmFtZV0sIHRyYWRpdGlvbmFsLCBhZGQpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBTZXJpYWxpemUgc2NhbGFyIGl0ZW0uXHJcbiAgICAgIGFkZChwcmVmaXgsIG9iailcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlcXdlc3QuZ2V0Y2FsbGJhY2tQcmVmaXggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gY2FsbGJhY2tQcmVmaXhcclxuICB9XHJcblxyXG4gIC8vIGpRdWVyeSBhbmQgWmVwdG8gY29tcGF0aWJpbGl0eSwgZGlmZmVyZW5jZXMgY2FuIGJlIHJlbWFwcGVkIGhlcmUgc28geW91IGNhbiBjYWxsXHJcbiAgLy8gLmFqYXguY29tcGF0KG9wdGlvbnMsIGNhbGxiYWNrKVxyXG4gIHJlcXdlc3QuY29tcGF0ID0gZnVuY3Rpb24gKG8sIGZuKSB7XHJcbiAgICBpZiAobykge1xyXG4gICAgICBvWyd0eXBlJ10gJiYgKG9bJ21ldGhvZCddID0gb1sndHlwZSddKSAmJiBkZWxldGUgb1sndHlwZSddXHJcbiAgICAgIG9bJ2RhdGFUeXBlJ10gJiYgKG9bJ3R5cGUnXSA9IG9bJ2RhdGFUeXBlJ10pXHJcbiAgICAgIG9bJ2pzb25wQ2FsbGJhY2snXSAmJiAob1snanNvbnBDYWxsYmFja05hbWUnXSA9IG9bJ2pzb25wQ2FsbGJhY2snXSkgJiYgZGVsZXRlIG9bJ2pzb25wQ2FsbGJhY2snXVxyXG4gICAgICBvWydqc29ucCddICYmIChvWydqc29ucENhbGxiYWNrJ10gPSBvWydqc29ucCddKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBSZXF3ZXN0KG8sIGZuKVxyXG4gIH1cclxuXHJcbiAgcmVxd2VzdC5hamF4U2V0dXAgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cclxuICAgIGZvciAodmFyIGsgaW4gb3B0aW9ucykge1xyXG4gICAgICBnbG9iYWxTZXR1cE9wdGlvbnNba10gPSBvcHRpb25zW2tdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVxd2VzdFxyXG59KTtcclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHJlcXdlc3QgZnJvbSAncmVxd2VzdCc7XHJcbi8qIHV0aWxzICovXHJcbmltcG9ydCB7IGFic29sdXRlVXJsLCBjaGVja0lzTG9naW4sIGFwaUluc3RhbmNlLCBjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lLCBieXRlc1RvU2l6ZSwgY29udmVydERhdGV0b1RoYWlEYXRlICB9IGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvdXRpbHMnO1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuLyogY29tcG9uZW50cyAqL1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dEFkbWluJztcclxuLy8gaW1wb3J0IFVzZXJOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL1VzZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQge1xyXG4gIENhcm91c2VsLFxyXG4gIFJvdyxcclxuICBDb2wsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBJbWFnZSxcclxuICBCdXR0b24sXHJcbiAgSW5wdXQsXHJcbiAgQ2FyZCxcclxuICBUYWJsZSxcclxuICBNb2RhbCxcclxuICBub3RpZmljYXRpb25cclxufSBmcm9tICdhbnRkJztcclxuY29uc3QgeyBUZXh0LCBUaXRsZSB9ID0gVHlwb2dyYXBoeTtcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEsIFNlYXJjaCB9ID0gSW5wdXQ7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG4gIGNvbnN0IFthcGksIGNvbnRleHRIb2xkZXJdID0gbm90aWZpY2F0aW9uLnVzZU5vdGlmaWNhdGlvbigpO1xyXG4gIGNvbnN0IHsgdXNlciwgb3JpZ2luIH0gPSBwcm9wcztcclxuICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3Nob3VsZFJ1biwgc2V0U2hvdWxkUnVuXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW3Zpc2libGVNb2RhbERlbGV0ZSwgc2V0VmlzaWJsZU1vZGFsRGVsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtkYXRhRGVsZXRlLCBzZXREYXRhRGVsZXRlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbcGFnaW5hdGlvbiwgc2V0UGFnaW5hdGlvbl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBjdXJyZW50OiAxLFxyXG4gICAgcGFnZVNpemU6IDEwLFxyXG4gIH0pXHJcbiAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfguKfguLHguJnguJfguLXguYjguKrguKHguLHguITguKMnLFxyXG4gICAgICBkYXRhSW5kZXg6ICcnLFxyXG4gICAgICBzb3J0ZXI6IHRydWUsXHJcbiAgICAgIGtleTogJ2RhdGVfY3JlYXRlZCcsXHJcbiAgICAgIHJlbmRlcjogKGRhdGEpID0+IDw+XHJcbiAgICAgICAgPHNwYW4gPiB7Y29udmVydERhdGV0b1RoYWlEYXRlKGNvbnZlcnREYXRlREJ0b0RhdGVQaWNrZXJOb1RpbWUoZGF0YS5kYXRlX2NyZWF0ZWQpKX0gPC9zcGFuPlxyXG4gICAgICA8Lz4sXHJcbiAgICAgIC8vIHJlbmRlcjogbmFtZSA9PiBgJHtuYW1lLmZpcnN0fSAke25hbWUubGFzdH1gLFxyXG4gICAgICAvLyB3aWR0aDogJzIwJScsXHJcbiAgICAgIC8vIGRlZmF1bHRTb3J0T3JkZXI6ICdkZXNjZW5kJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn4Lin4Lix4LiZ4LiX4Li14LmI4Lir4Lih4LiU4Lit4Liy4Lii4Li4JyxcclxuICAgICAgZGF0YUluZGV4OiAnJyxcclxuICAgICAgc29ydGVyOiB0cnVlLFxyXG4gICAgICBrZXk6ICdkYXRlX2V4cGlyZWQnLFxyXG4gICAgICByZW5kZXI6IChkYXRhKSA9PiA8PlxyXG4gICAgICAgIDxzcGFuID4ge2NvbnZlcnREYXRldG9UaGFpRGF0ZShjb252ZXJ0RGF0ZURCdG9EYXRlUGlja2VyTm9UaW1lKGRhdGEuZGF0ZV9leHBpcmVkKSl9IDwvc3Bhbj5cclxuICAgICAgPC8+LFxyXG4gICAgICAvLyByZW5kZXI6IG5hbWUgPT4gYCR7bmFtZS5maXJzdH0gJHtuYW1lLmxhc3R9YCxcclxuICAgICAgLy8gd2lkdGg6ICcyMCUnLFxyXG4gICAgICAvLyBkZWZhdWx0U29ydE9yZGVyOiAnZGVzY2VuZCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+C4iuC4t+C5iOC4reC4q+C4meC5iOC4p+C4ouC4h+C4suC4mScsXHJcbiAgICAgIGRhdGFJbmRleDogJ29yZ2FuaXphdGlvbl9uYW1lJyxcclxuICAgICAgc29ydGVyOiB0cnVlLFxyXG4gICAgICAvLyByZW5kZXI6IG5hbWUgPT4gYCR7bmFtZS5maXJzdH0gJHtuYW1lLmxhc3R9YCxcclxuICAgICAgLy8gd2lkdGg6ICcyMCUnLFxyXG4gICAgICAvLyBkZWZhdWx0U29ydE9yZGVyOiAnZGVzY2VuZCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+C5g+C4iuC5ieC4nuC4t+C5ieC4meC4l+C4teC5iCcsXHJcbiAgICAgIGRhdGFJbmRleDogJycsXHJcbiAgICAgIHNvcnRlcjogdHJ1ZSxcclxuICAgICAga2V5OiAnc2l6ZV91c2VkJyxcclxuICAgICAgcmVuZGVyOiAoZGF0YSkgPT4gPD5cclxuICAgICAgICA8c3BhbiA+IHtieXRlc1RvU2l6ZShkYXRhLnNpemVfdXNlZCl9ICA8L3NwYW4+XHJcbiAgICAgIDwvPlxyXG4gICAgICAvLyBkZWZhdWx0U29ydE9yZGVyOiAnZGVzY2VuZCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ3BhY2thZ2UnLFxyXG4gICAgICBkYXRhSW5kZXg6ICcnLFxyXG4gICAgICBrZXk6ICdwYWNrYWdlJyxcclxuICAgICAgc29ydGVyOiB0cnVlLFxyXG4gICAgICByZW5kZXI6IChkYXRhKSA9PiA8PlxyXG4gICAgICAgIDxzcGFuID4ge2RhdGEucGFja2FnZXMubmFtZV9wYWNrYWdlfSA8L3NwYW4+XHJcbiAgICAgIDwvPixcclxuICAgICAgZmlsdGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdGcmVlIFBhY2thZ2UnLFxyXG4gICAgICAgICAgdmFsdWU6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnQ29ubmVjdCBQYWNrYWdlJyxcclxuICAgICAgICAgIHZhbHVlOiAyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ1N0YW5kYXJkIFBhY2thZ2UnLFxyXG4gICAgICAgICAgdmFsdWU6IDMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnUHJlbWl1bSBQYWNrYWdlJyxcclxuICAgICAgICAgIHZhbHVlOiA0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIC8vIHJlbmRlcjogbmFtZSA9PiBgJHtuYW1lLmZpcnN0fSAke25hbWUubGFzdH1gLFxyXG4gICAgICAvLyB3aWR0aDogJzIwJScsXHJcbiAgICAgIC8vIGRlZmF1bHRTb3J0T3JkZXI6ICdkZXNjZW5kJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn4Liq4LiW4Liy4LiZ4LiwJyxcclxuICAgICAgZGF0YUluZGV4OiAnJyxcclxuICAgICAga2V5OiAnaXNfdXNlJyxcclxuICAgICAgc29ydGVyOiB0cnVlLFxyXG4gICAgICByZW5kZXI6IChkYXRhKSA9PiA8PlxyXG4gICAgICAgIDxzcGFuID4ge2RhdGEuaXNfdXNlID09IDEgPyBcIuC5g+C4iuC5ieC4h+C4suC4mVwiIDogXCLguYTguKHguYjguYPguIrguYnguIfguLLguJlcIn0gPC9zcGFuPlxyXG4gICAgICA8Lz4sXHJcbiAgICAgIC8vIHJlbmRlcjogbmFtZSA9PiBgJHtuYW1lLmZpcnN0fSAke25hbWUubGFzdH1gLFxyXG4gICAgICAvLyB3aWR0aDogJzIwJScsXHJcbiAgICAgIC8vIGRlZmF1bHRTb3J0T3JkZXI6ICdkZXNjZW5kJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgZGF0YUluZGV4OiAnJyxcclxuICAgICAga2V5OiAneCcsXHJcbiAgICAgIHJlbmRlcjogKGRhdGEpID0+IDw+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNpemU9e1wiZGVmYXVsdFwifSBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZShkYXRhLm9yZ2FuaXphdGlvbl9pZCl9ID4g4LmB4LiB4LmJ4LmE4LiCIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibWwtMVwiIHR5cGU9XCJkYW5nZXJcIiBvbkNsaWNrPXsoKSA9PiBzaG93TW9kYWwoZGF0YSl9IHNpemU9e1wiZGVmYXVsdFwifSA+IOC4peC4miA8L0J1dHRvbj5cclxuICAgICAgPC8+LFxyXG4gICAgfSxcclxuICAgIC8vIHtcclxuICAgIC8vICAgdGl0bGU6ICdHZW5kZXInLFxyXG4gICAgLy8gICBkYXRhSW5kZXg6ICdnZW5kZXInLFxyXG4gICAgLy8gICAvLyBmaWx0ZXJzOiBbXHJcbiAgICAvLyAgIC8vICAgeyB0ZXh0OiAnTWFsZScsIHZhbHVlOiAnbWFsZScgfSxcclxuICAgIC8vICAgLy8gICB7IHRleHQ6ICdGZW1hbGUnLCB2YWx1ZTogJ2ZlbWFsZScgfSxcclxuICAgIC8vICAgLy8gXSxcclxuICAgIC8vICAgd2lkdGg6ICcyMCUnLFxyXG4gICAgLy8gfSxcclxuICAgIC8vIHtcclxuICAgIC8vICAgdGl0bGU6ICdFbWFpbCcsXHJcbiAgICAvLyAgIGRhdGFJbmRleDogJ2VtYWlsJyxcclxuICAgIC8vIH0sXHJcbiAgXTtcclxuICBjb25zdCBnb3RvUGFnZSA9IChpZCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaWQpXHJcbiAgICBSb3V0ZXIucHVzaCgnL2FkbWluL21hbmFnZW1lbnQtb3JnYW5pemF0aW9uL29yZ2FuaXphdGlvbi8nICsgaWQpO1xyXG5cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdmFyIF9maWx0ZXJzID0gW11cclxuICAgIHBhZ2luYXRpb24uZmlsdGVycyA9IF9maWx0ZXJzXHJcbiAgICBmZXRjaCh7IHBhZ2luYXRpb24gfSk7XHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhYmxlQ2hhbmdlID0gKHBhZ2luYXRpb24sIGZpbHRlcnMsIHNvcnRlcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coc29ydGVyKVxyXG4gICAgc2V0UGFnaW5hdGlvbih7XHJcbiAgICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICBjdXJyZW50OiBwYWdpbmF0aW9uLmN1cnJlbnRcclxuICAgIH0pXHJcbiAgICBzZXRGaWx0ZXJzKGZpbHRlcnMucGFja2FnZSlcclxuICAgIGZldGNoKHtcclxuICAgICAgc29ydEZpZWxkOiBzb3J0ZXIuY29sdW1uS2V5LFxyXG4gICAgICBzb3J0T3JkZXI6IHNvcnRlci5vcmRlcixcclxuICAgICAgcGFnaW5hdGlvbixcclxuICAgICAgZmlsdGVyczogZmlsdGVycy5wYWNrYWdlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBvblNlYXJjaCA9IGFzeW5jIChfc2VhcmNoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBzZXRTZWFyY2goX3NlYXJjaClcclxuICAgIHNldFBhZ2luYXRpb24oe1xyXG4gICAgICBwYWdlU2l6ZTogcGFnaW5hdGlvbi5wYWdlU2l6ZSxcclxuICAgICAgY3VycmVudDogMVxyXG4gICAgfSlcclxuICAgIGNvbnN0IGFkZGFjdGl2aXRpZXNEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICdvcmdhbml6YXRpb24/cmVzdWx0cz0nICsgcGFnaW5hdGlvbi5wYWdlU2l6ZSArICcmcGFnZT0xJnNlYXJjaD0nICsgX3NlYXJjaCArIFwiJmZpbHRlcnM9XCIgKyBmaWx0ZXJzXHJcbiAgICApO1xyXG5cclxuICAgIHNldERhdGEoYWRkYWN0aXZpdGllc0RhdGEuZGF0YS5yZXN1bHRzKVxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICB9XHJcbiAgY29uc3QgZmV0Y2ggPSBhc3luYyAocGFyYW1zID0ge30pID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGNvbnN0IGFkZGFjdGl2aXRpZXNEYXRhID0gYXdhaXQgYXBpSW5zdGFuY2UoKS5nZXQoXHJcbiAgICAgICdvcmdhbml6YXRpb24/cmVzdWx0cz0nICsgcGFyYW1zLnBhZ2luYXRpb24ucGFnZVNpemUgKyAnJnBhZ2U9JyArIHBhcmFtcy5wYWdpbmF0aW9uLmN1cnJlbnQgKyBcIiZzZWFyY2g9XCIgKyBzZWFyY2ggKyBcIiZzb3J0RmllbGQ9XCIgKyBwYXJhbXMuc29ydEZpZWxkICsgXCImc29ydE9yZGVyPVwiICsgcGFyYW1zLnNvcnRPcmRlciArIFwiJmZpbHRlcnM9XCIgKyBwYXJhbXMuZmlsdGVyc1xyXG4gICAgKTtcclxuXHJcbiAgICBzZXREYXRhKGFkZGFjdGl2aXRpZXNEYXRhLmRhdGEucmVzdWx0cylcclxuICAgIHNldFBhZ2luYXRpb24oe1xyXG4gICAgICAuLi5wYXJhbXMucGFnaW5hdGlvbixcclxuICAgICAgdG90YWw6IGFkZGFjdGl2aXRpZXNEYXRhLmRhdGEudG90YWxDb3VudCxcclxuICAgICAgLy8gMjAwIGlzIG1vY2sgZGF0YSwgeW91IHNob3VsZCByZWFkIGl0IGZyb20gc2VydmVyXHJcbiAgICAgIC8vIHRvdGFsOiBkYXRhLnRvdGFsQ291bnQsXHJcbiAgICB9KVxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICB9O1xyXG4gIC8vIGNvbnN0IGZldGNoID0gKHBhcmFtcyA9IHt9KSA9PiB7XHJcbiAgLy8gICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgLy8gICByZXF3ZXN0KHtcclxuICAvLyAgICAgdXJsOiAnaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaScsXHJcbiAgLy8gICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgLy8gICAgIHR5cGU6ICdqc29uJyxcclxuICAvLyAgICAgZGF0YTogZ2V0UmFuZG9tdXNlclBhcmFtcyhwYXJhbXMpLFxyXG4gIC8vICAgfSkudGhlbihkYXRhID0+IHtcclxuICAvLyAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgLy8gICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgLy8gICAgIHNldERhdGEoZGF0YS5yZXN1bHRzKVxyXG4gIC8vICAgICBzZXRQYWdpbmF0aW9uKHtcclxuICAvLyAgICAgICAuLi5wYXJhbXMucGFnaW5hdGlvbixcclxuICAvLyAgICAgICB0b3RhbDogMjAwLFxyXG4gIC8vICAgICAgIC8vIDIwMCBpcyBtb2NrIGRhdGEsIHlvdSBzaG91bGQgcmVhZCBpdCBmcm9tIHNlcnZlclxyXG4gIC8vICAgICAgIC8vIHRvdGFsOiBkYXRhLnRvdGFsQ291bnQsXHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICB9KTtcclxuICAvLyB9O1xyXG5cclxuXHJcbiAgY29uc3Qgc2hvd01vZGFsID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdkYXRhIGRlbGV0ZCcpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgc2V0RGF0YURlbGV0ZShkYXRhKVxyXG4gICAgc2V0VmlzaWJsZU1vZGFsRGVsZXRlKHRydWUpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGlkZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0VmlzaWJsZU1vZGFsRGVsZXRlKGZhbHNlKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGVsZXRlT3JnYW5pemF0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ0RFTEVURScpXHJcbiAgICAvLyBjb25zdCBkYXRhID0ge1xyXG4gICAgLy8gICAnb3JnYW5pemF0aW9uX25hbWUnOiB2YWx1ZS5vcmdhbml6YXRpb25fbmFtZSxcclxuICAgIC8vIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBjb25zdCByZWdpc3RlckRhdGEgPSBhd2FpdCBhcGlJbnN0YW5jZSgpLmRlbGV0ZSgnL29yZ2FuaXphdGlvbi8nICsgZGF0YURlbGV0ZS5vcmdhbml6YXRpb25faWQsIHt9KTtcclxuICAgIGlmIChyZWdpc3RlckRhdGEuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgIG9wZW5Ob3RpZmljYXRpb25TdWNjZXNzKClcclxuICAgICAgLy8gZmV0Y2hPcmdhbml6YXRpb25EYXRhKCk7XHJcbiAgICAgIHNldFZpc2libGVNb2RhbERlbGV0ZShmYWxzZSlcclxuICAgICAgZmV0Y2goeyBwYWdpbmF0aW9uIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3Blbk5vdGlmaWNhdGlvbkZhaWwocmVnaXN0ZXJEYXRhLmRhdGEubWVzc2FnZSlcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBvcGVuTm90aWZpY2F0aW9uU3VjY2VzcyA9ICgpID0+IHtcclxuICAgIGFwaS5zdWNjZXNzKHtcclxuICAgICAgbWVzc2FnZTogYOC4peC4muC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iGAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAn4Lil4Lia4LiC4LmJ4Lit4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIJyxcclxuICAgICAgcGxhY2VtZW50OiAndG9wUmlnaHQnLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvbkZhaWwgPSAobWVzc2dhZSkgPT4ge1xyXG4gICAgYXBpLmVycm9yKHtcclxuICAgICAgbWVzc2FnZTogYOC4nuC4muC4m+C4seC4jeC4q+C4suC4o+C4sOC4q+C4p+C5iOC4suC4h+C4geC4suC4o+C4peC4muC4guC5ieC4reC4oeC4ueC4pWAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBtZXNzZ2FlLFxyXG4gICAgICBwbGFjZW1lbnQ6ICd0b3BSaWdodCcsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IGtleT17XCJob21lLW9yZ2FuaXphdGlvblwifSB0aXRsZVBhZ2U9e1wi4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZXCJ9IHRpdGxlPVwiR292ZXJubWVudCAtIEFkbWluIG1hbmFnZW1lbnRcIiB1cmw9e29yaWdpbn0gb3JpZ2luPXtvcmlnaW59IGlzTWFpbj17dHJ1ZX0gaW5kZXhNZW51PXtcIjFcIn0gdXNlcj17bG9naW59IHByb3BzPXtwcm9wc30gX3JvdXRlcz17W1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy9hZG1pbi9kYXNoYm9yYWQnLFxyXG4gICAgICAgIGJyZWFkY3J1bWJOYW1lOiAn4Lir4LiZ4LmJ4Liy4Lir4Lil4Lix4LiBJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgIHBhdGg6ICcvYWRtaW4vbWFuYWdlbWVudC1vcmdhbml6YXRpb24nLFxyXG4gICAgICAgIGJyZWFkY3J1bWJOYW1lOiAn4LiI4Lix4LiU4LiB4Liy4Lij4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZJyxcclxuICAgICAgfV19PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtjb250ZXh0SG9sZGVyfVxyXG4gICAgICAgIDxSb3cgPlxyXG4gICAgICAgICAgPENvbCBzcGFuPXsyNH0gY2xhc3NOYW1lPVwiIHBiLTFcIj5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezE4fSBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW4vbWFuYWdlbWVudC1vcmdhbml6YXRpb24vYWRkLW9yZ2FuaXphdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAvL29uQ2xpY2s9eyhlKSA9PiBoYW5kbGVMb2dvdXQoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZzppbmxpbmUtZmxleCBsZzp3LWF1dG8gdy1mdWxsIHB4LTIgcHktMiByb3VuZGVkIGgtOCB0ZXh0LXdoaXRlIGJnLWdyZWVuLTYwMCBmb250LWJvbGQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGhvdmVyOmJnLWdyZWVuLTYwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguYDguJ7guLTguYjguKHguKvguJnguYjguKfguKLguIfguLLguJlkZGRkZGRkZGRkZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBzcGFuPXs2fSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBqdXN0aWZ5LWl0ZW1zLWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCIganVzdGlmeS1lbmQganVzdGlmeS1pdGVtcy1lbmQgXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWFyY2ggcGxhY2Vob2xkZXI9XCJpbnB1dCBzZWFyY2ggdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25TZWFyY2g9e29uU2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgIGVudGVyQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgey8qIDxDb2wgc3Bhbj17MTJ9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1pdGVtcy1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+ICovfVxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICA8VGFibGVcclxuICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICByb3dLZXk9e3JlY29yZCA9PiByZWNvcmQub3JnYW5pemF0aW9uX2lkfVxyXG4gICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YX1cclxuICAgICAgICAgIHBhZ2luYXRpb249e3BhZ2luYXRpb259XHJcbiAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRhYmxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCLguITguLjguJPguJXguYnguK3guIfguIHguLLguKPguKXguJrguILguYnguK3guKHguLnguKXguKvguKPguLfguK3guYTguKHguYg/XCJcclxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlTW9kYWxEZWxldGV9XHJcbiAgICAgICAgb25Paz17b25EZWxldGVPcmdhbml6YXRpb259XHJcbiAgICAgICAgb25DYW5jZWw9e2hpZGVNb2RhbH1cclxuICAgICAgICBva1RleHQ9XCLguKXguJpcIlxyXG4gICAgICAgIGNhbmNlbFRleHQ9XCLguKLguIHguYDguKXguLTguIFcIlxyXG4gICAgICAgIG9rQnV0dG9uUHJvcHM9e3tcclxuICAgICAgICAgICd0eXBlJzogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgICAnZGFuZ2VyJzogdHJ1ZVxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8cD7guITguLjguJPguJXguYnguK3guIfguIHguLLguKPguKXguJogXCJ7ZGF0YURlbGV0ZSA/IGRhdGFEZWxldGUub3JnYW5pemF0aW9uX25hbWUgOiBcIlwifVwiIOC4q+C4o+C4t+C4reC5hOC4oeC5iD8gIDwvcD5cclxuXHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcbi8qIGdldFNlcnZlclNpZGVQcm9wcyAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHJlcSB9ID0gY29udGV4dDtcclxuICBjb25zdCB7IG9yaWdpbiB9ID0gYWJzb2x1dGVVcmwocmVxKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG9yaWdpbixcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9