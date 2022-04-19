/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@googlemaps/js-api-loader/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@googlemaps/js-api-loader/dist/index.esm.js ***!
  \******************************************************************/
/*! exports provided: DEFAULT_ID, Loader, LoaderStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ID", function() { return DEFAULT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderStatus", function() { return LoaderStatus; });
// do not edit .js files directly - edit src/index.jst



var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at.
 *
 *      Http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ID = "__googleMapsScriptId";
/**
 * The status of the [[Loader]].
 */
var LoaderStatus;
(function (LoaderStatus) {
    LoaderStatus[LoaderStatus["INITIALIZED"] = 0] = "INITIALIZED";
    LoaderStatus[LoaderStatus["LOADING"] = 1] = "LOADING";
    LoaderStatus[LoaderStatus["SUCCESS"] = 2] = "SUCCESS";
    LoaderStatus[LoaderStatus["FAILURE"] = 3] = "FAILURE";
})(LoaderStatus || (LoaderStatus = {}));
/**
 * [[Loader]] makes it easier to add Google Maps JavaScript API to your application
 * dynamically using
 * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
 * It works by dynamically creating and appending a script node to the the
 * document head and wrapping the callback function so as to return a promise.
 *
 * ```
 * const loader = new Loader({
 *   apiKey: "",
 *   version: "weekly",
 *   libraries: ["places"]
 * });
 *
 * loader.load().then((google) => {
 *   const map = new google.maps.Map(...)
 * })
 * ```
 */
class Loader {
    /**
     * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
     * using this library, instead the defaults are set by the Google Maps
     * JavaScript API server.
     *
     * ```
     * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
     * ```
     */
    constructor({ apiKey, channel, client, id = DEFAULT_ID, libraries = [], language, region, version, mapIds, nonce, retries = 3, url = "https://maps.googleapis.com/maps/api/js", }) {
        this.CALLBACK = "__googleMapsCallback";
        this.callbacks = [];
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.version = version;
        this.apiKey = apiKey;
        this.channel = channel;
        this.client = client;
        this.id = id || DEFAULT_ID; // Do not allow empty string
        this.libraries = libraries;
        this.language = language;
        this.region = region;
        this.mapIds = mapIds;
        this.nonce = nonce;
        this.retries = retries;
        this.url = url;
        if (Loader.instance) {
            if (!fastDeepEqual(this.options, Loader.instance.options)) {
                throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Loader.instance.options)}`);
            }
            return Loader.instance;
        }
        Loader.instance = this;
    }
    get options() {
        return {
            version: this.version,
            apiKey: this.apiKey,
            channel: this.channel,
            client: this.client,
            id: this.id,
            libraries: this.libraries,
            language: this.language,
            region: this.region,
            mapIds: this.mapIds,
            nonce: this.nonce,
            url: this.url,
        };
    }
    get status() {
        if (this.errors.length) {
            return LoaderStatus.FAILURE;
        }
        if (this.done) {
            return LoaderStatus.SUCCESS;
        }
        if (this.loading) {
            return LoaderStatus.LOADING;
        }
        return LoaderStatus.INITIALIZED;
    }
    get failed() {
        return this.done && !this.loading && this.errors.length >= this.retries + 1;
    }
    /**
     * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
     *
     * @ignore
     */
    createUrl() {
        let url = this.url;
        url += `?callback=${this.CALLBACK}`;
        if (this.apiKey) {
            url += `&key=${this.apiKey}`;
        }
        if (this.channel) {
            url += `&channel=${this.channel}`;
        }
        if (this.client) {
            url += `&client=${this.client}`;
        }
        if (this.libraries.length > 0) {
            url += `&libraries=${this.libraries.join(",")}`;
        }
        if (this.language) {
            url += `&language=${this.language}`;
        }
        if (this.region) {
            url += `&region=${this.region}`;
        }
        if (this.version) {
            url += `&v=${this.version}`;
        }
        if (this.mapIds) {
            url += `&map_ids=${this.mapIds.join(",")}`;
        }
        return url;
    }
    deleteScript() {
        const script = document.getElementById(this.id);
        if (script) {
            script.remove();
        }
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     */
    load() {
        return this.loadPromise();
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     *
     * @ignore
     */
    loadPromise() {
        return new Promise((resolve, reject) => {
            this.loadCallback((err) => {
                if (!err) {
                    resolve(window.google);
                }
                else {
                    reject(err.error);
                }
            });
        });
    }
    /**
     * Load the Google Maps JavaScript API script with a callback.
     */
    loadCallback(fn) {
        this.callbacks.push(fn);
        this.execute();
    }
    /**
     * Set the script on document.
     */
    setScript() {
        if (document.getElementById(this.id)) {
            // TODO wrap onerror callback for cases where the script was loaded elsewhere
            this.callback();
            return;
        }
        const url = this.createUrl();
        const script = document.createElement("script");
        script.id = this.id;
        script.type = "text/javascript";
        script.src = url;
        script.onerror = this.loadErrorCallback.bind(this);
        script.defer = true;
        script.async = true;
        if (this.nonce) {
            script.nonce = this.nonce;
        }
        document.head.appendChild(script);
    }
    /**
     * Reset the loader state.
     */
    reset() {
        this.deleteScript();
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.onerrorEvent = null;
    }
    resetIfRetryingFailed() {
        if (this.failed) {
            this.reset();
        }
    }
    loadErrorCallback(e) {
        this.errors.push(e);
        if (this.errors.length <= this.retries) {
            const delay = this.errors.length * Math.pow(2, this.errors.length);
            console.log(`Failed to load Google Maps script, retrying in ${delay} ms.`);
            setTimeout(() => {
                this.deleteScript();
                this.setScript();
            }, delay);
        }
        else {
            this.onerrorEvent = e;
            this.callback();
        }
    }
    setCallback() {
        window.__googleMapsCallback = this.callback.bind(this);
    }
    callback() {
        this.done = true;
        this.loading = false;
        this.callbacks.forEach((cb) => {
            cb(this.onerrorEvent);
        });
        this.callbacks = [];
    }
    execute() {
        this.resetIfRetryingFailed();
        if (this.done) {
            this.callback();
        }
        else {
            // short circuit and warn if google.maps is already loaded
            if (window.google && window.google.maps && window.google.maps.version) {
                console.warn("Google Maps already loaded outside @googlemaps/js-api-loader." +
                    "This may result in undesirable behavior as options and script parameters may not match.");
                this.callback();
                return;
            }
            if (this.loading) ;
            else {
                this.loading = true;
                this.setCallback();
                this.setScript();
            }
        }
    }
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  createNonEnumerableProperty(ArrayPrototype, UNSCOPABLES, create(null));
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-instance.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var index = 0;
  var iteratorMethod = getIteratorMethod(O);
  var length, result, step, iterator, next;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      createProperty(result, index, mapping
        ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true)
        : step.value
      );
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
    if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/function-to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");

module.exports = shared('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

module.exports = function (it) {
  var iteratorMethod = getIteratorMethod(it);
  if (typeof iteratorMethod != 'function') {
    throw TypeError(String(it) + ' is not iterable');
  } return anObject(iteratorMethod.call(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-url.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/native-url.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = !fails(function () {
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var searchParams = url.searchParams;
  var result = '';
  url.pathname = 'c%20d';
  searchParams.forEach(function (value, key) {
    searchParams['delete']('b');
    result += key + value;
  });
  return (IS_PURE && !url.toJSON)
    || !searchParams.sort
    || url.href !== 'http://a/c%20d?a=1&c=3'
    || searchParams.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !searchParams[ITERATOR]
    // throws in Edge
    || new URL('https://a@b').username !== 'a'
    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1'
    // fails in Chrome 66-
    || result !== 'a1c3'
    // throws in Safari
    || new URL('http://x', undefined).host !== 'x';
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-assign.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-assign.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");

var nativeAssign = Object.assign;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !nativeAssign || fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");


/***/ }),

/***/ "./node_modules/core-js/internals/punycode-to-ascii.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/punycode-to-ascii.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'
var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;
var floor = Math.floor;
var stringFromCharCode = String.fromCharCode;

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */
var ucs2decode = function (string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  while (counter < length) {
    var value = string.charCodeAt(counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // It's a high surrogate, and there is a next character.
      var extra = string.charCodeAt(counter++);
      if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // It's an unmatched surrogate; only append this code unit, in case the
        // next code unit is the high surrogate of a surrogate pair.
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
};

/**
 * Converts a digit/integer into a basic code point.
 */
var digitToBasic = function (digit) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */
var adapt = function (delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor(delta / damp) : delta >> 1;
  delta += floor(delta / numPoints);
  for (; delta > baseMinusTMin * tMax >> 1; k += base) {
    delta = floor(delta / baseMinusTMin);
  }
  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */
// eslint-disable-next-line  max-statements
var encode = function (input) {
  var output = [];

  // Convert the input in UCS-2 to an array of Unicode code points.
  input = ucs2decode(input);

  // Cache the length.
  var inputLength = input.length;

  // Initialize the state.
  var n = initialN;
  var delta = 0;
  var bias = initialBias;
  var i, currentValue;

  // Handle the basic code points.
  for (i = 0; i < input.length; i++) {
    currentValue = input[i];
    if (currentValue < 0x80) {
      output.push(stringFromCharCode(currentValue));
    }
  }

  var basicLength = output.length; // number of basic code points.
  var handledCPCount = basicLength; // number of code points that have been handled;

  // Finish the basic string with a delimiter unless it's empty.
  if (basicLength) {
    output.push(delimiter);
  }

  // Main encoding loop:
  while (handledCPCount < inputLength) {
    // All non-basic code points < n have been handled already. Find the next larger one:
    var m = maxInt;
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }

    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
    var handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
      throw RangeError(OVERFLOW_ERROR);
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < n && ++delta > maxInt) {
        throw RangeError(OVERFLOW_ERROR);
      }
      if (currentValue == n) {
        // Represent delta as a generalized variable-length integer.
        var q = delta;
        for (var k = base; /* no condition */; k += base) {
          var t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
          if (q < t) break;
          var qMinusT = q - t;
          var baseMinusT = base - t;
          output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
          q = floor(qMinusT / baseMinusT);
        }

        output.push(stringFromCharCode(digitToBasic(q)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        ++handledCPCount;
      }
    }

    ++delta;
    ++n;
  }
  return output.join('');
};

module.exports = function (input) {
  var encoded = [];
  var labels = input.toLowerCase().replace(regexSeparators, '\u002E').split('.');
  var i, label;
  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    encoded.push(regexNonASCII.test(label) ? 'xn--' + encode(label) : label);
  }
  return encoded.join('.');
};


/***/ }),

/***/ "./node_modules/core-js/internals/redefine-all.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/redefine-all.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

shared('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ./regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(/*! ./regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.4.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol() == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.url-search-params.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/web.url-search-params.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var USE_NATIVE_URL = __webpack_require__(/*! ../internals/native-url */ "./node_modules/core-js/internals/native-url.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var hasOwn = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var getIterator = __webpack_require__(/*! ../internals/get-iterator */ "./node_modules/core-js/internals/get-iterator.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var $fetch = getBuiltIn('fetch');
var Headers = getBuiltIn('Headers');
var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState = InternalStateModule.set;
var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);

var plus = /\+/g;
var sequences = Array(4);

var percentSequence = function (bytes) {
  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};

var percentDecode = function (sequence) {
  try {
    return decodeURIComponent(sequence);
  } catch (error) {
    return sequence;
  }
};

var deserialize = function (it) {
  var result = it.replace(plus, ' ');
  var bytes = 4;
  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = result.replace(percentSequence(bytes--), percentDecode);
    }
    return result;
  }
};

var find = /[!'()~]|%20/g;

var replace = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function (match) {
  return replace[match];
};

var serialize = function (it) {
  return encodeURIComponent(it).replace(find, replacer);
};

var parseSearchParams = function (result, query) {
  if (query) {
    var attributes = query.split('&');
    var index = 0;
    var attribute, entry;
    while (index < attributes.length) {
      attribute = attributes[index++];
      if (attribute.length) {
        entry = attribute.split('=');
        result.push({
          key: deserialize(entry.shift()),
          value: deserialize(entry.join('='))
        });
      }
    }
  }
};

var updateSearchParams = function (query) {
  this.entries.length = 0;
  parseSearchParams(this.entries, query);
};

var validateArgumentsLength = function (passed, required) {
  if (passed < required) throw TypeError('Not enough arguments');
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    iterator: getIterator(getInternalParamsState(params).entries),
    kind: kind
  });
}, 'Iterator', function next() {
  var state = getInternalIteratorState(this);
  var kind = state.kind;
  var step = state.iterator.next();
  var entry = step.value;
  if (!step.done) {
    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
  } return step;
});

// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
  anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  var that = this;
  var entries = [];
  var iteratorMethod, iterator, next, step, entryIterator, entryNext, first, second, key;

  setInternalState(that, {
    type: URL_SEARCH_PARAMS,
    entries: entries,
    updateURL: function () { /* empty */ },
    updateSearchParams: updateSearchParams
  });

  if (init !== undefined) {
    if (isObject(init)) {
      iteratorMethod = getIteratorMethod(init);
      if (typeof iteratorMethod === 'function') {
        iterator = iteratorMethod.call(init);
        next = iterator.next;
        while (!(step = next.call(iterator)).done) {
          entryIterator = getIterator(anObject(step.value));
          entryNext = entryIterator.next;
          if (
            (first = entryNext.call(entryIterator)).done ||
            (second = entryNext.call(entryIterator)).done ||
            !entryNext.call(entryIterator).done
          ) throw TypeError('Expected sequence with length 2');
          entries.push({ key: first.value + '', value: second.value + '' });
        }
      } else for (key in init) if (hasOwn(init, key)) entries.push({ key: key, value: init[key] + '' });
    } else {
      parseSearchParams(entries, typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : init + '');
    }
  }
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

redefineAll(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.appent` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    validateArgumentsLength(arguments.length, 2);
    var state = getInternalParamsState(this);
    state.entries.push({ key: name + '', value: value + '' });
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = name + '';
    var index = 0;
    while (index < entries.length) {
      if (entries[index].key === key) entries.splice(index, 1);
      else index++;
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) result.push(entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var index = 0;
    while (index < entries.length) {
      if (entries[index++].key === key) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var found = false;
    var key = name + '';
    var val = value + '';
    var index = 0;
    var entry;
    for (; index < entries.length; index++) {
      entry = entries[index];
      if (entry.key === key) {
        if (found) entries.splice(index--, 1);
        else {
          found = true;
          entry.value = val;
        }
      }
    }
    if (!found) entries.push({ key: key, value: val });
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    var entries = state.entries;
    // Array#sort is not stable in some engines
    var slice = entries.slice();
    var entry, entriesIndex, sliceIndex;
    entries.length = 0;
    for (sliceIndex = 0; sliceIndex < slice.length; sliceIndex++) {
      entry = slice[sliceIndex];
      for (entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++) {
        if (entries[entriesIndex].key > entry.key) {
          entries.splice(entriesIndex, 0, entry);
          break;
        }
      }
      if (entriesIndex === sliceIndex) entries.push(entry);
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback /* , thisArg */) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined, 3);
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, { enumerable: true });

// `URLSearchParams.prototype[@@iterator]` method
redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries);

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
redefine(URLSearchParamsPrototype, 'toString', function toString() {
  var entries = getInternalParamsState(this).entries;
  var result = [];
  var index = 0;
  var entry;
  while (index < entries.length) {
    entry = entries[index++];
    result.push(serialize(entry.key) + '=' + serialize(entry.value));
  } return result.join('&');
}, { enumerable: true });

setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$({ global: true, forced: !USE_NATIVE_URL }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` for correct work with polyfilled `URLSearchParams`
// https://github.com/zloirock/core-js/issues/674
if (!USE_NATIVE_URL && typeof $fetch == 'function' && typeof Headers == 'function') {
  $({ global: true, enumerable: true, forced: true }, {
    fetch: function fetch(input /* , init */) {
      var args = [input];
      var init, body, headers;
      if (arguments.length > 1) {
        init = arguments[1];
        if (isObject(init)) {
          body = init.body;
          if (classof(body) === URL_SEARCH_PARAMS) {
            headers = init.headers ? new Headers(init.headers) : new Headers();
            if (!headers.has('content-type')) {
              headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
            }
            init = create(init, {
              body: createPropertyDescriptor(0, String(body)),
              headers: createPropertyDescriptor(0, headers)
            });
          }
        }
        args.push(init);
      } return $fetch.apply(this, args);
    }
  });
}

module.exports = {
  URLSearchParams: URLSearchParamsConstructor,
  getState: getInternalParamsState
};


/***/ }),

/***/ "./node_modules/core-js/modules/web.url.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/web.url.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(/*! ../modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var USE_NATIVE_URL = __webpack_require__(/*! ../internals/native-url */ "./node_modules/core-js/internals/native-url.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var assign = __webpack_require__(/*! ../internals/object-assign */ "./node_modules/core-js/internals/object-assign.js");
var arrayFrom = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var codeAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").codeAt;
var toASCII = __webpack_require__(/*! ../internals/punycode-to-ascii */ "./node_modules/core-js/internals/punycode-to-ascii.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var URLSearchParamsModule = __webpack_require__(/*! ../modules/web.url-search-params */ "./node_modules/core-js/modules/web.url-search-params.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var NativeURL = global.URL;
var URLSearchParams = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;
var setInternalState = InternalStateModule.set;
var getInternalURLState = InternalStateModule.getterFor('URL');
var floor = Math.floor;
var pow = Math.pow;

var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';

var ALPHA = /[A-Za-z]/;
var ALPHANUMERIC = /[\d+\-.A-Za-z]/;
var DIGIT = /\d/;
var HEX_START = /^(0x|0X)/;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\dA-Fa-f]+$/;
// eslint-disable-next-line no-control-regex
var FORBIDDEN_HOST_CODE_POINT = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/;
// eslint-disable-next-line no-control-regex
var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/;
// eslint-disable-next-line no-control-regex
var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g;
// eslint-disable-next-line no-control-regex
var TAB_AND_NEW_LINE = /[\u0009\u000A\u000D]/g;
var EOF;

var parseHost = function (url, input) {
  var result, codePoints, index;
  if (input.charAt(0) == '[') {
    if (input.charAt(input.length - 1) != ']') return INVALID_HOST;
    result = parseIPv6(input.slice(1, -1));
    if (!result) return INVALID_HOST;
    url.host = result;
  // opaque host
  } else if (!isSpecial(url)) {
    if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input)) return INVALID_HOST;
    result = '';
    codePoints = arrayFrom(input);
    for (index = 0; index < codePoints.length; index++) {
      result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
    }
    url.host = result;
  } else {
    input = toASCII(input);
    if (FORBIDDEN_HOST_CODE_POINT.test(input)) return INVALID_HOST;
    result = parseIPv4(input);
    if (result === null) return INVALID_HOST;
    url.host = result;
  }
};

var parseIPv4 = function (input) {
  var parts = input.split('.');
  var partsLength, numbers, index, part, radix, number, ipv4;
  if (parts.length && parts[parts.length - 1] == '') {
    parts.pop();
  }
  partsLength = parts.length;
  if (partsLength > 4) return input;
  numbers = [];
  for (index = 0; index < partsLength; index++) {
    part = parts[index];
    if (part == '') return input;
    radix = 10;
    if (part.length > 1 && part.charAt(0) == '0') {
      radix = HEX_START.test(part) ? 16 : 8;
      part = part.slice(radix == 8 ? 1 : 2);
    }
    if (part === '') {
      number = 0;
    } else {
      if (!(radix == 10 ? DEC : radix == 8 ? OCT : HEX).test(part)) return input;
      number = parseInt(part, radix);
    }
    numbers.push(number);
  }
  for (index = 0; index < partsLength; index++) {
    number = numbers[index];
    if (index == partsLength - 1) {
      if (number >= pow(256, 5 - partsLength)) return null;
    } else if (number > 255) return null;
  }
  ipv4 = numbers.pop();
  for (index = 0; index < numbers.length; index++) {
    ipv4 += numbers[index] * pow(256, 3 - index);
  }
  return ipv4;
};

// eslint-disable-next-line max-statements
var parseIPv6 = function (input) {
  var address = [0, 0, 0, 0, 0, 0, 0, 0];
  var pieceIndex = 0;
  var compress = null;
  var pointer = 0;
  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

  var char = function () {
    return input.charAt(pointer);
  };

  if (char() == ':') {
    if (input.charAt(1) != ':') return;
    pointer += 2;
    pieceIndex++;
    compress = pieceIndex;
  }
  while (char()) {
    if (pieceIndex == 8) return;
    if (char() == ':') {
      if (compress !== null) return;
      pointer++;
      pieceIndex++;
      compress = pieceIndex;
      continue;
    }
    value = length = 0;
    while (length < 4 && HEX.test(char())) {
      value = value * 16 + parseInt(char(), 16);
      pointer++;
      length++;
    }
    if (char() == '.') {
      if (length == 0) return;
      pointer -= length;
      if (pieceIndex > 6) return;
      numbersSeen = 0;
      while (char()) {
        ipv4Piece = null;
        if (numbersSeen > 0) {
          if (char() == '.' && numbersSeen < 4) pointer++;
          else return;
        }
        if (!DIGIT.test(char())) return;
        while (DIGIT.test(char())) {
          number = parseInt(char(), 10);
          if (ipv4Piece === null) ipv4Piece = number;
          else if (ipv4Piece == 0) return;
          else ipv4Piece = ipv4Piece * 10 + number;
          if (ipv4Piece > 255) return;
          pointer++;
        }
        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
        numbersSeen++;
        if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
      }
      if (numbersSeen != 4) return;
      break;
    } else if (char() == ':') {
      pointer++;
      if (!char()) return;
    } else if (char()) return;
    address[pieceIndex++] = value;
  }
  if (compress !== null) {
    swaps = pieceIndex - compress;
    pieceIndex = 7;
    while (pieceIndex != 0 && swaps > 0) {
      swap = address[pieceIndex];
      address[pieceIndex--] = address[compress + swaps - 1];
      address[compress + --swaps] = swap;
    }
  } else if (pieceIndex != 8) return;
  return address;
};

var findLongestZeroSequence = function (ipv6) {
  var maxIndex = null;
  var maxLength = 1;
  var currStart = null;
  var currLength = 0;
  var index = 0;
  for (; index < 8; index++) {
    if (ipv6[index] !== 0) {
      if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
      }
      currStart = null;
      currLength = 0;
    } else {
      if (currStart === null) currStart = index;
      ++currLength;
    }
  }
  if (currLength > maxLength) {
    maxIndex = currStart;
    maxLength = currLength;
  }
  return maxIndex;
};

var serializeHost = function (host) {
  var result, index, compress, ignore0;
  // ipv4
  if (typeof host == 'number') {
    result = [];
    for (index = 0; index < 4; index++) {
      result.unshift(host % 256);
      host = floor(host / 256);
    } return result.join('.');
  // ipv6
  } else if (typeof host == 'object') {
    result = '';
    compress = findLongestZeroSequence(host);
    for (index = 0; index < 8; index++) {
      if (ignore0 && host[index] === 0) continue;
      if (ignore0) ignore0 = false;
      if (compress === index) {
        result += index ? ':' : '::';
        ignore0 = true;
      } else {
        result += host[index].toString(16);
        if (index < 7) result += ':';
      }
    }
    return '[' + result + ']';
  } return host;
};

var C0ControlPercentEncodeSet = {};
var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
  ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
});
var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
  '#': 1, '?': 1, '{': 1, '}': 1
});
var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
});

var percentEncode = function (char, set) {
  var code = codeAt(char, 0);
  return code > 0x20 && code < 0x7F && !has(set, char) ? char : encodeURIComponent(char);
};

var specialSchemes = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};

var isSpecial = function (url) {
  return has(specialSchemes, url.scheme);
};

var includesCredentials = function (url) {
  return url.username != '' || url.password != '';
};

var cannotHaveUsernamePasswordPort = function (url) {
  return !url.host || url.cannotBeABaseURL || url.scheme == 'file';
};

var isWindowsDriveLetter = function (string, normalized) {
  var second;
  return string.length == 2 && ALPHA.test(string.charAt(0))
    && ((second = string.charAt(1)) == ':' || (!normalized && second == '|'));
};

var startsWithWindowsDriveLetter = function (string) {
  var third;
  return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (
    string.length == 2 ||
    ((third = string.charAt(2)) === '/' || third === '\\' || third === '?' || third === '#')
  );
};

var shortenURLsPath = function (url) {
  var path = url.path;
  var pathSize = path.length;
  if (pathSize && (url.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
    path.pop();
  }
};

var isSingleDot = function (segment) {
  return segment === '.' || segment.toLowerCase() === '%2e';
};

var isDoubleDot = function (segment) {
  segment = segment.toLowerCase();
  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
};

// States:
var SCHEME_START = {};
var SCHEME = {};
var NO_SCHEME = {};
var SPECIAL_RELATIVE_OR_AUTHORITY = {};
var PATH_OR_AUTHORITY = {};
var RELATIVE = {};
var RELATIVE_SLASH = {};
var SPECIAL_AUTHORITY_SLASHES = {};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var AUTHORITY = {};
var HOST = {};
var HOSTNAME = {};
var PORT = {};
var FILE = {};
var FILE_SLASH = {};
var FILE_HOST = {};
var PATH_START = {};
var PATH = {};
var CANNOT_BE_A_BASE_URL_PATH = {};
var QUERY = {};
var FRAGMENT = {};

// eslint-disable-next-line max-statements
var parseURL = function (url, input, stateOverride, base) {
  var state = stateOverride || SCHEME_START;
  var pointer = 0;
  var buffer = '';
  var seenAt = false;
  var seenBracket = false;
  var seenPasswordToken = false;
  var codePoints, char, bufferCodePoints, failure;

  if (!stateOverride) {
    url.scheme = '';
    url.username = '';
    url.password = '';
    url.host = null;
    url.port = null;
    url.path = [];
    url.query = null;
    url.fragment = null;
    url.cannotBeABaseURL = false;
    input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
  }

  input = input.replace(TAB_AND_NEW_LINE, '');

  codePoints = arrayFrom(input);

  while (pointer <= codePoints.length) {
    char = codePoints[pointer];
    switch (state) {
      case SCHEME_START:
        if (char && ALPHA.test(char)) {
          buffer += char.toLowerCase();
          state = SCHEME;
        } else if (!stateOverride) {
          state = NO_SCHEME;
          continue;
        } else return INVALID_SCHEME;
        break;

      case SCHEME:
        if (char && (ALPHANUMERIC.test(char) || char == '+' || char == '-' || char == '.')) {
          buffer += char.toLowerCase();
        } else if (char == ':') {
          if (stateOverride && (
            (isSpecial(url) != has(specialSchemes, buffer)) ||
            (buffer == 'file' && (includesCredentials(url) || url.port !== null)) ||
            (url.scheme == 'file' && !url.host)
          )) return;
          url.scheme = buffer;
          if (stateOverride) {
            if (isSpecial(url) && specialSchemes[url.scheme] == url.port) url.port = null;
            return;
          }
          buffer = '';
          if (url.scheme == 'file') {
            state = FILE;
          } else if (isSpecial(url) && base && base.scheme == url.scheme) {
            state = SPECIAL_RELATIVE_OR_AUTHORITY;
          } else if (isSpecial(url)) {
            state = SPECIAL_AUTHORITY_SLASHES;
          } else if (codePoints[pointer + 1] == '/') {
            state = PATH_OR_AUTHORITY;
            pointer++;
          } else {
            url.cannotBeABaseURL = true;
            url.path.push('');
            state = CANNOT_BE_A_BASE_URL_PATH;
          }
        } else if (!stateOverride) {
          buffer = '';
          state = NO_SCHEME;
          pointer = 0;
          continue;
        } else return INVALID_SCHEME;
        break;

      case NO_SCHEME:
        if (!base || (base.cannotBeABaseURL && char != '#')) return INVALID_SCHEME;
        if (base.cannotBeABaseURL && char == '#') {
          url.scheme = base.scheme;
          url.path = base.path.slice();
          url.query = base.query;
          url.fragment = '';
          url.cannotBeABaseURL = true;
          state = FRAGMENT;
          break;
        }
        state = base.scheme == 'file' ? FILE : RELATIVE;
        continue;

      case SPECIAL_RELATIVE_OR_AUTHORITY:
        if (char == '/' && codePoints[pointer + 1] == '/') {
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          pointer++;
        } else {
          state = RELATIVE;
          continue;
        } break;

      case PATH_OR_AUTHORITY:
        if (char == '/') {
          state = AUTHORITY;
          break;
        } else {
          state = PATH;
          continue;
        }

      case RELATIVE:
        url.scheme = base.scheme;
        if (char == EOF) {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = base.query;
        } else if (char == '/' || (char == '\\' && isSpecial(url))) {
          state = RELATIVE_SLASH;
        } else if (char == '?') {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = '';
          state = QUERY;
        } else if (char == '#') {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = base.query;
          url.fragment = '';
          state = FRAGMENT;
        } else {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.path.pop();
          state = PATH;
          continue;
        } break;

      case RELATIVE_SLASH:
        if (isSpecial(url) && (char == '/' || char == '\\')) {
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
        } else if (char == '/') {
          state = AUTHORITY;
        } else {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          state = PATH;
          continue;
        } break;

      case SPECIAL_AUTHORITY_SLASHES:
        state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
        if (char != '/' || buffer.charAt(pointer + 1) != '/') continue;
        pointer++;
        break;

      case SPECIAL_AUTHORITY_IGNORE_SLASHES:
        if (char != '/' && char != '\\') {
          state = AUTHORITY;
          continue;
        } break;

      case AUTHORITY:
        if (char == '@') {
          if (seenAt) buffer = '%40' + buffer;
          seenAt = true;
          bufferCodePoints = arrayFrom(buffer);
          for (var i = 0; i < bufferCodePoints.length; i++) {
            var codePoint = bufferCodePoints[i];
            if (codePoint == ':' && !seenPasswordToken) {
              seenPasswordToken = true;
              continue;
            }
            var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
            if (seenPasswordToken) url.password += encodedCodePoints;
            else url.username += encodedCodePoints;
          }
          buffer = '';
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url))
        ) {
          if (seenAt && buffer == '') return INVALID_AUTHORITY;
          pointer -= arrayFrom(buffer).length + 1;
          buffer = '';
          state = HOST;
        } else buffer += char;
        break;

      case HOST:
      case HOSTNAME:
        if (stateOverride && url.scheme == 'file') {
          state = FILE_HOST;
          continue;
        } else if (char == ':' && !seenBracket) {
          if (buffer == '') return INVALID_HOST;
          failure = parseHost(url, buffer);
          if (failure) return failure;
          buffer = '';
          state = PORT;
          if (stateOverride == HOSTNAME) return;
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url))
        ) {
          if (isSpecial(url) && buffer == '') return INVALID_HOST;
          if (stateOverride && buffer == '' && (includesCredentials(url) || url.port !== null)) return;
          failure = parseHost(url, buffer);
          if (failure) return failure;
          buffer = '';
          state = PATH_START;
          if (stateOverride) return;
          continue;
        } else {
          if (char == '[') seenBracket = true;
          else if (char == ']') seenBracket = false;
          buffer += char;
        } break;

      case PORT:
        if (DIGIT.test(char)) {
          buffer += char;
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url)) ||
          stateOverride
        ) {
          if (buffer != '') {
            var port = parseInt(buffer, 10);
            if (port > 0xFFFF) return INVALID_PORT;
            url.port = (isSpecial(url) && port === specialSchemes[url.scheme]) ? null : port;
            buffer = '';
          }
          if (stateOverride) return;
          state = PATH_START;
          continue;
        } else return INVALID_PORT;
        break;

      case FILE:
        url.scheme = 'file';
        if (char == '/' || char == '\\') state = FILE_SLASH;
        else if (base && base.scheme == 'file') {
          if (char == EOF) {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = base.query;
          } else if (char == '?') {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
              url.host = base.host;
              url.path = base.path.slice();
              shortenURLsPath(url);
            }
            state = PATH;
            continue;
          }
        } else {
          state = PATH;
          continue;
        } break;

      case FILE_SLASH:
        if (char == '/' || char == '\\') {
          state = FILE_HOST;
          break;
        }
        if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
          if (isWindowsDriveLetter(base.path[0], true)) url.path.push(base.path[0]);
          else url.host = base.host;
        }
        state = PATH;
        continue;

      case FILE_HOST:
        if (char == EOF || char == '/' || char == '\\' || char == '?' || char == '#') {
          if (!stateOverride && isWindowsDriveLetter(buffer)) {
            state = PATH;
          } else if (buffer == '') {
            url.host = '';
            if (stateOverride) return;
            state = PATH_START;
          } else {
            failure = parseHost(url, buffer);
            if (failure) return failure;
            if (url.host == 'localhost') url.host = '';
            if (stateOverride) return;
            buffer = '';
            state = PATH_START;
          } continue;
        } else buffer += char;
        break;

      case PATH_START:
        if (isSpecial(url)) {
          state = PATH;
          if (char != '/' && char != '\\') continue;
        } else if (!stateOverride && char == '?') {
          url.query = '';
          state = QUERY;
        } else if (!stateOverride && char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          state = PATH;
          if (char != '/') continue;
        } break;

      case PATH:
        if (
          char == EOF || char == '/' ||
          (char == '\\' && isSpecial(url)) ||
          (!stateOverride && (char == '?' || char == '#'))
        ) {
          if (isDoubleDot(buffer)) {
            shortenURLsPath(url);
            if (char != '/' && !(char == '\\' && isSpecial(url))) {
              url.path.push('');
            }
          } else if (isSingleDot(buffer)) {
            if (char != '/' && !(char == '\\' && isSpecial(url))) {
              url.path.push('');
            }
          } else {
            if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
              if (url.host) url.host = '';
              buffer = buffer.charAt(0) + ':'; // normalize windows drive letter
            }
            url.path.push(buffer);
          }
          buffer = '';
          if (url.scheme == 'file' && (char == EOF || char == '?' || char == '#')) {
            while (url.path.length > 1 && url.path[0] === '') {
              url.path.shift();
            }
          }
          if (char == '?') {
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.fragment = '';
            state = FRAGMENT;
          }
        } else {
          buffer += percentEncode(char, pathPercentEncodeSet);
        } break;

      case CANNOT_BE_A_BASE_URL_PATH:
        if (char == '?') {
          url.query = '';
          state = QUERY;
        } else if (char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          url.path[0] += percentEncode(char, C0ControlPercentEncodeSet);
        } break;

      case QUERY:
        if (!stateOverride && char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          if (char == "'" && isSpecial(url)) url.query += '%27';
          else if (char == '#') url.query += '%23';
          else url.query += percentEncode(char, C0ControlPercentEncodeSet);
        } break;

      case FRAGMENT:
        if (char != EOF) url.fragment += percentEncode(char, fragmentPercentEncodeSet);
        break;
    }

    pointer++;
  }
};

// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var URLConstructor = function URL(url /* , base */) {
  var that = anInstance(this, URLConstructor, 'URL');
  var base = arguments.length > 1 ? arguments[1] : undefined;
  var urlString = String(url);
  var state = setInternalState(that, { type: 'URL' });
  var baseState, failure;
  if (base !== undefined) {
    if (base instanceof URLConstructor) baseState = getInternalURLState(base);
    else {
      failure = parseURL(baseState = {}, String(base));
      if (failure) throw TypeError(failure);
    }
  }
  failure = parseURL(state, urlString, null, baseState);
  if (failure) throw TypeError(failure);
  var searchParams = state.searchParams = new URLSearchParams();
  var searchParamsState = getInternalSearchParamsState(searchParams);
  searchParamsState.updateSearchParams(state.query);
  searchParamsState.updateURL = function () {
    state.query = String(searchParams) || null;
  };
  if (!DESCRIPTORS) {
    that.href = serializeURL.call(that);
    that.origin = getOrigin.call(that);
    that.protocol = getProtocol.call(that);
    that.username = getUsername.call(that);
    that.password = getPassword.call(that);
    that.host = getHost.call(that);
    that.hostname = getHostname.call(that);
    that.port = getPort.call(that);
    that.pathname = getPathname.call(that);
    that.search = getSearch.call(that);
    that.searchParams = getSearchParams.call(that);
    that.hash = getHash.call(that);
  }
};

var URLPrototype = URLConstructor.prototype;

var serializeURL = function () {
  var url = getInternalURLState(this);
  var scheme = url.scheme;
  var username = url.username;
  var password = url.password;
  var host = url.host;
  var port = url.port;
  var path = url.path;
  var query = url.query;
  var fragment = url.fragment;
  var output = scheme + ':';
  if (host !== null) {
    output += '//';
    if (includesCredentials(url)) {
      output += username + (password ? ':' + password : '') + '@';
    }
    output += serializeHost(host);
    if (port !== null) output += ':' + port;
  } else if (scheme == 'file') output += '//';
  output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
  if (query !== null) output += '?' + query;
  if (fragment !== null) output += '#' + fragment;
  return output;
};

var getOrigin = function () {
  var url = getInternalURLState(this);
  var scheme = url.scheme;
  var port = url.port;
  if (scheme == 'blob') try {
    return new URL(scheme.path[0]).origin;
  } catch (error) {
    return 'null';
  }
  if (scheme == 'file' || !isSpecial(url)) return 'null';
  return scheme + '://' + serializeHost(url.host) + (port !== null ? ':' + port : '');
};

var getProtocol = function () {
  return getInternalURLState(this).scheme + ':';
};

var getUsername = function () {
  return getInternalURLState(this).username;
};

var getPassword = function () {
  return getInternalURLState(this).password;
};

var getHost = function () {
  var url = getInternalURLState(this);
  var host = url.host;
  var port = url.port;
  return host === null ? ''
    : port === null ? serializeHost(host)
    : serializeHost(host) + ':' + port;
};

var getHostname = function () {
  var host = getInternalURLState(this).host;
  return host === null ? '' : serializeHost(host);
};

var getPort = function () {
  var port = getInternalURLState(this).port;
  return port === null ? '' : String(port);
};

var getPathname = function () {
  var url = getInternalURLState(this);
  var path = url.path;
  return url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
};

var getSearch = function () {
  var query = getInternalURLState(this).query;
  return query ? '?' + query : '';
};

var getSearchParams = function () {
  return getInternalURLState(this).searchParams;
};

var getHash = function () {
  var fragment = getInternalURLState(this).fragment;
  return fragment ? '#' + fragment : '';
};

var accessorDescriptor = function (getter, setter) {
  return { get: getter, set: setter, configurable: true, enumerable: true };
};

if (DESCRIPTORS) {
  defineProperties(URLPrototype, {
    // `URL.prototype.href` accessors pair
    // https://url.spec.whatwg.org/#dom-url-href
    href: accessorDescriptor(serializeURL, function (href) {
      var url = getInternalURLState(this);
      var urlString = String(href);
      var failure = parseURL(url, urlString);
      if (failure) throw TypeError(failure);
      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.origin` getter
    // https://url.spec.whatwg.org/#dom-url-origin
    origin: accessorDescriptor(getOrigin),
    // `URL.prototype.protocol` accessors pair
    // https://url.spec.whatwg.org/#dom-url-protocol
    protocol: accessorDescriptor(getProtocol, function (protocol) {
      var url = getInternalURLState(this);
      parseURL(url, String(protocol) + ':', SCHEME_START);
    }),
    // `URL.prototype.username` accessors pair
    // https://url.spec.whatwg.org/#dom-url-username
    username: accessorDescriptor(getUsername, function (username) {
      var url = getInternalURLState(this);
      var codePoints = arrayFrom(String(username));
      if (cannotHaveUsernamePasswordPort(url)) return;
      url.username = '';
      for (var i = 0; i < codePoints.length; i++) {
        url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    }),
    // `URL.prototype.password` accessors pair
    // https://url.spec.whatwg.org/#dom-url-password
    password: accessorDescriptor(getPassword, function (password) {
      var url = getInternalURLState(this);
      var codePoints = arrayFrom(String(password));
      if (cannotHaveUsernamePasswordPort(url)) return;
      url.password = '';
      for (var i = 0; i < codePoints.length; i++) {
        url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    }),
    // `URL.prototype.host` accessors pair
    // https://url.spec.whatwg.org/#dom-url-host
    host: accessorDescriptor(getHost, function (host) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      parseURL(url, String(host), HOST);
    }),
    // `URL.prototype.hostname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hostname
    hostname: accessorDescriptor(getHostname, function (hostname) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      parseURL(url, String(hostname), HOSTNAME);
    }),
    // `URL.prototype.port` accessors pair
    // https://url.spec.whatwg.org/#dom-url-port
    port: accessorDescriptor(getPort, function (port) {
      var url = getInternalURLState(this);
      if (cannotHaveUsernamePasswordPort(url)) return;
      port = String(port);
      if (port == '') url.port = null;
      else parseURL(url, port, PORT);
    }),
    // `URL.prototype.pathname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-pathname
    pathname: accessorDescriptor(getPathname, function (pathname) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      url.path = [];
      parseURL(url, pathname + '', PATH_START);
    }),
    // `URL.prototype.search` accessors pair
    // https://url.spec.whatwg.org/#dom-url-search
    search: accessorDescriptor(getSearch, function (search) {
      var url = getInternalURLState(this);
      search = String(search);
      if (search == '') {
        url.query = null;
      } else {
        if ('?' == search.charAt(0)) search = search.slice(1);
        url.query = '';
        parseURL(url, search, QUERY);
      }
      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.searchParams` getter
    // https://url.spec.whatwg.org/#dom-url-searchparams
    searchParams: accessorDescriptor(getSearchParams),
    // `URL.prototype.hash` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hash
    hash: accessorDescriptor(getHash, function (hash) {
      var url = getInternalURLState(this);
      hash = String(hash);
      if (hash == '') {
        url.fragment = null;
        return;
      }
      if ('#' == hash.charAt(0)) hash = hash.slice(1);
      url.fragment = '';
      parseURL(url, hash, FRAGMENT);
    })
  });
}

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
redefine(URLPrototype, 'toJSON', function toJSON() {
  return serializeURL.call(this);
}, { enumerable: true });

// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
redefine(URLPrototype, 'toString', function toString() {
  return serializeURL.call(this);
}, { enumerable: true });

if (NativeURL) {
  var nativeCreateObjectURL = NativeURL.createObjectURL;
  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
  // `URL.createObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  // eslint-disable-next-line no-unused-vars
  if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', function createObjectURL(blob) {
    return nativeCreateObjectURL.apply(NativeURL, arguments);
  });
  // `URL.revokeObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
  // eslint-disable-next-line no-unused-vars
  if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', function revokeObjectURL(url) {
    return nativeRevokeObjectURL.apply(NativeURL, arguments);
  });
}

setToStringTag(URLConstructor, 'URL');

$({ global: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
  URL: URLConstructor
});


/***/ }),

/***/ "./node_modules/lodash.clonedeep/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash.clonedeep/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/object-hash/dist/object_hash.js":
/*!******************************************************!*\
  !*** ./node_modules/object-hash/dist/object_hash.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;!function(e){var t; true?module.exports=e():undefined}(function(){return function r(o,i,u){function s(n,e){if(!i[n]){if(!o[n]){var t="function"==typeof require&&require;if(!e&&t)return require(n,!0);if(a)return a(n,!0);throw new Error("Cannot find module '"+n+"'")}e=i[n]={exports:{}};o[n][0].call(e.exports,function(e){var t=o[n][1][e];return s(t||e)},e,e.exports,r,o,i,u)}return i[n].exports}for(var a="function"==typeof require&&require,e=0;e<u.length;e++)s(u[e]);return s}({1:[function(w,b,m){!function(e,n,s,c,d,h,p,g,y){"use strict";var r=w("crypto");function t(e,t){t=u(e,t);var n;return void 0===(n="passthrough"!==t.algorithm?r.createHash(t.algorithm):new l).write&&(n.write=n.update,n.end=n.update),f(t,n).dispatch(e),n.update||n.end(""),n.digest?n.digest("buffer"===t.encoding?void 0:t.encoding):(e=n.read(),"buffer"!==t.encoding?e.toString(t.encoding):e)}(m=b.exports=t).sha1=function(e){return t(e)},m.keys=function(e){return t(e,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},m.MD5=function(e){return t(e,{algorithm:"md5",encoding:"hex"})},m.keysMD5=function(e){return t(e,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var o=r.getHashes?r.getHashes().slice():["sha1","md5"],i=(o.push("passthrough"),["buffer","hex","binary","base64"]);function u(e,t){var n={};if(n.algorithm=(t=t||{}).algorithm||"sha1",n.encoding=t.encoding||"hex",n.excludeValues=!!t.excludeValues,n.algorithm=n.algorithm.toLowerCase(),n.encoding=n.encoding.toLowerCase(),n.ignoreUnknown=!0===t.ignoreUnknown,n.respectType=!1!==t.respectType,n.respectFunctionNames=!1!==t.respectFunctionNames,n.respectFunctionProperties=!1!==t.respectFunctionProperties,n.unorderedArrays=!0===t.unorderedArrays,n.unorderedSets=!1!==t.unorderedSets,n.unorderedObjects=!1!==t.unorderedObjects,n.replacer=t.replacer||void 0,n.excludeKeys=t.excludeKeys||void 0,void 0===e)throw new Error("Object argument required.");for(var r=0;r<o.length;++r)o[r].toLowerCase()===n.algorithm.toLowerCase()&&(n.algorithm=o[r]);if(-1===o.indexOf(n.algorithm))throw new Error('Algorithm "'+n.algorithm+'"  not supported. supported values: '+o.join(", "));if(-1===i.indexOf(n.encoding)&&"passthrough"!==n.algorithm)throw new Error('Encoding "'+n.encoding+'"  not supported. supported values: '+i.join(", "));return n}function a(e){if("function"==typeof e)return null!=/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e))}function f(o,t,i){i=i||[];function u(e){return t.update?t.update(e,"utf8"):t.write(e,"utf8")}return{dispatch:function(e){return this["_"+(null===(e=o.replacer?o.replacer(e):e)?"null":typeof e)](e)},_object:function(t){var n,e=Object.prototype.toString.call(t),r=/\[object (.*)\]/i.exec(e);r=(r=r?r[1]:"unknown:["+e+"]").toLowerCase();if(0<=(e=i.indexOf(t)))return this.dispatch("[CIRCULAR:"+e+"]");if(i.push(t),void 0!==s&&s.isBuffer&&s.isBuffer(t))return u("buffer:"),u(t);if("object"===r||"function"===r||"asyncfunction"===r)return e=Object.keys(t),o.unorderedObjects&&(e=e.sort()),!1===o.respectType||a(t)||e.splice(0,0,"prototype","__proto__","constructor"),o.excludeKeys&&(e=e.filter(function(e){return!o.excludeKeys(e)})),u("object:"+e.length+":"),n=this,e.forEach(function(e){n.dispatch(e),u(":"),o.excludeValues||n.dispatch(t[e]),u(",")});if(!this["_"+r]){if(o.ignoreUnknown)return u("["+r+"]");throw new Error('Unknown object type "'+r+'"')}this["_"+r](t)},_array:function(e,t){t=void 0!==t?t:!1!==o.unorderedArrays;var n=this;if(u("array:"+e.length+":"),!t||e.length<=1)return e.forEach(function(e){return n.dispatch(e)});var r=[],t=e.map(function(e){var t=new l,n=i.slice();return f(o,t,n).dispatch(e),r=r.concat(n.slice(i.length)),t.read().toString()});return i=i.concat(r),t.sort(),this._array(t,!1)},_date:function(e){return u("date:"+e.toJSON())},_symbol:function(e){return u("symbol:"+e.toString())},_error:function(e){return u("error:"+e.toString())},_boolean:function(e){return u("bool:"+e.toString())},_string:function(e){u("string:"+e.length+":"),u(e.toString())},_function:function(e){u("fn:"),a(e)?this.dispatch("[native]"):this.dispatch(e.toString()),!1!==o.respectFunctionNames&&this.dispatch("function-name:"+String(e.name)),o.respectFunctionProperties&&this._object(e)},_number:function(e){return u("number:"+e.toString())},_xml:function(e){return u("xml:"+e.toString())},_null:function(){return u("Null")},_undefined:function(){return u("Undefined")},_regexp:function(e){return u("regex:"+e.toString())},_uint8array:function(e){return u("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray:function(e){return u("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array:function(e){return u("int8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array:function(e){return u("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array:function(e){return u("int16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array:function(e){return u("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array:function(e){return u("int32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array:function(e){return u("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array:function(e){return u("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer:function(e){return u("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url:function(e){return u("url:"+e.toString())},_map:function(e){u("map:");e=Array.from(e);return this._array(e,!1!==o.unorderedSets)},_set:function(e){u("set:");e=Array.from(e);return this._array(e,!1!==o.unorderedSets)},_file:function(e){return u("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob:function(){if(o.ignoreUnknown)return u("[blob]");throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n')},_domwindow:function(){return u("domwindow")},_bigint:function(e){return u("bigint:"+e.toString())},_process:function(){return u("process")},_timer:function(){return u("timer")},_pipe:function(){return u("pipe")},_tcp:function(){return u("tcp")},_udp:function(){return u("udp")},_tty:function(){return u("tty")},_statwatcher:function(){return u("statwatcher")},_securecontext:function(){return u("securecontext")},_connection:function(){return u("connection")},_zlib:function(){return u("zlib")},_context:function(){return u("context")},_nodescript:function(){return u("nodescript")},_httpparser:function(){return u("httpparser")},_dataview:function(){return u("dataview")},_signal:function(){return u("signal")},_fsevent:function(){return u("fsevent")},_tlswrap:function(){return u("tlswrap")}}}function l(){return{buf:"",write:function(e){this.buf+=e},end:function(e){this.buf+=e},read:function(){return this.buf}}}m.writeToStream=function(e,t,n){return void 0===n&&(n=t,t={}),f(t=u(e,t),n).dispatch(e)}}.call(this,w("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},w("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(e,t,f){!function(e,t,n,r,o,i,u,s,a){!function(e){"use strict";var a="undefined"!=typeof Uint8Array?Uint8Array:Array,t="+".charCodeAt(0),n="/".charCodeAt(0),r="0".charCodeAt(0),o="a".charCodeAt(0),i="A".charCodeAt(0),u="-".charCodeAt(0),s="_".charCodeAt(0);function f(e){e=e.charCodeAt(0);return e===t||e===u?62:e===n||e===s?63:e<r?-1:e<r+10?e-r+26+26:e<i+26?e-i:e<o+26?e-o+26:void 0}e.toByteArray=function(e){var t,n;if(0<e.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.length,r="="===e.charAt(r-2)?2:"="===e.charAt(r-1)?1:0,o=new a(3*e.length/4-r),i=0<r?e.length-4:e.length,u=0;function s(e){o[u++]=e}for(t=0;t<i;t+=4,0)s((16711680&(n=f(e.charAt(t))<<18|f(e.charAt(t+1))<<12|f(e.charAt(t+2))<<6|f(e.charAt(t+3))))>>16),s((65280&n)>>8),s(255&n);return 2==r?s(255&(n=f(e.charAt(t))<<2|f(e.charAt(t+1))>>4)):1==r&&(s((n=f(e.charAt(t))<<10|f(e.charAt(t+1))<<4|f(e.charAt(t+2))>>2)>>8&255),s(255&n)),o},e.fromByteArray=function(e){var t,n,r,o,i=e.length%3,u="";function s(e){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)}for(t=0,r=e.length-i;t<r;t+=3)n=(e[t]<<16)+(e[t+1]<<8)+e[t+2],u+=s((o=n)>>18&63)+s(o>>12&63)+s(o>>6&63)+s(63&o);switch(i){case 1:u=(u+=s((n=e[e.length-1])>>2))+s(n<<4&63)+"==";break;case 2:u=(u=(u+=s((n=(e[e.length-2]<<8)+e[e.length-1])>>10))+s(n>>4&63))+s(n<<2&63)+"="}return u}}(void 0===f?this.base64js={}:f)}.call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(O,e,H){!function(e,n,f,r,h,p,g,y,w){var a=O("base64-js"),i=O("ieee754");function f(e,t,n){if(!(this instanceof f))return new f(e,t,n);var r,o,i,u,s=typeof e;if("base64"===t&&"string"==s)for(e=(u=e).trim?u.trim():u.replace(/^\s+|\s+$/g,"");e.length%4!=0;)e+="=";if("number"==s)r=j(e);else if("string"==s)r=f.byteLength(e,t);else{if("object"!=s)throw new Error("First argument needs to be a number, array or string.");r=j(e.length)}if(f._useTypedArrays?o=f._augment(new Uint8Array(r)):((o=this).length=r,o._isBuffer=!0),f._useTypedArrays&&"number"==typeof e.byteLength)o._set(e);else if(C(u=e)||f.isBuffer(u)||u&&"object"==typeof u&&"number"==typeof u.length)for(i=0;i<r;i++)f.isBuffer(e)?o[i]=e.readUInt8(i):o[i]=e[i];else if("string"==s)o.write(e,0,t);else if("number"==s&&!f._useTypedArrays&&!n)for(i=0;i<r;i++)o[i]=0;return o}function b(e,t,n,r){return f._charsWritten=c(function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function m(e,t,n,r){return f._charsWritten=c(function(e){for(var t,n,r=[],o=0;o<e.length;o++)n=e.charCodeAt(o),t=n>>8,n=n%256,r.push(n),r.push(t);return r}(t),e,n,r)}function v(e,t,n){var r="";n=Math.min(e.length,n);for(var o=t;o<n;o++)r+=String.fromCharCode(e[o]);return r}function o(e,t,n,r){r||(d("boolean"==typeof n,"missing or invalid endian"),d(null!=t,"missing offset"),d(t+1<e.length,"Trying to read beyond buffer length"));var o,r=e.length;if(!(r<=t))return n?(o=e[t],t+1<r&&(o|=e[t+1]<<8)):(o=e[t]<<8,t+1<r&&(o|=e[t+1])),o}function u(e,t,n,r){r||(d("boolean"==typeof n,"missing or invalid endian"),d(null!=t,"missing offset"),d(t+3<e.length,"Trying to read beyond buffer length"));var o,r=e.length;if(!(r<=t))return n?(t+2<r&&(o=e[t+2]<<16),t+1<r&&(o|=e[t+1]<<8),o|=e[t],t+3<r&&(o+=e[t+3]<<24>>>0)):(t+1<r&&(o=e[t+1]<<16),t+2<r&&(o|=e[t+2]<<8),t+3<r&&(o|=e[t+3]),o+=e[t]<<24>>>0),o}function _(e,t,n,r){if(r||(d("boolean"==typeof n,"missing or invalid endian"),d(null!=t,"missing offset"),d(t+1<e.length,"Trying to read beyond buffer length")),!(e.length<=t))return r=o(e,t,n,!0),32768&r?-1*(65535-r+1):r}function E(e,t,n,r){if(r||(d("boolean"==typeof n,"missing or invalid endian"),d(null!=t,"missing offset"),d(t+3<e.length,"Trying to read beyond buffer length")),!(e.length<=t))return r=u(e,t,n,!0),2147483648&r?-1*(4294967295-r+1):r}function I(e,t,n,r){return r||(d("boolean"==typeof n,"missing or invalid endian"),d(t+3<e.length,"Trying to read beyond buffer length")),i.read(e,t,n,23,4)}function A(e,t,n,r){return r||(d("boolean"==typeof n,"missing or invalid endian"),d(t+7<e.length,"Trying to read beyond buffer length")),i.read(e,t,n,52,8)}function s(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+1<e.length,"trying to write beyond buffer length"),Y(t,65535));o=e.length;if(!(o<=n))for(var i=0,u=Math.min(o-n,2);i<u;i++)e[n+i]=(t&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function l(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+3<e.length,"trying to write beyond buffer length"),Y(t,4294967295));o=e.length;if(!(o<=n))for(var i=0,u=Math.min(o-n,4);i<u;i++)e[n+i]=t>>>8*(r?i:3-i)&255}function B(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+1<e.length,"Trying to write beyond buffer length"),F(t,32767,-32768)),e.length<=n||s(e,0<=t?t:65535+t+1,n,r,o)}function L(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+3<e.length,"Trying to write beyond buffer length"),F(t,2147483647,-2147483648)),e.length<=n||l(e,0<=t?t:4294967295+t+1,n,r,o)}function U(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+3<e.length,"Trying to write beyond buffer length"),D(t,34028234663852886e22,-34028234663852886e22)),e.length<=n||i.write(e,t,n,r,23,4)}function x(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+7<e.length,"Trying to write beyond buffer length"),D(t,17976931348623157e292,-17976931348623157e292)),e.length<=n||i.write(e,t,n,r,52,8)}H.Buffer=f,H.SlowBuffer=f,H.INSPECT_MAX_BYTES=50,f.poolSize=8192,f._useTypedArrays=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray}catch(e){return!1}}(),f.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.isBuffer=function(e){return!(null==e||!e._isBuffer)},f.byteLength=function(e,t){var n;switch(e+="",t||"utf8"){case"hex":n=e.length/2;break;case"utf8":case"utf-8":n=T(e).length;break;case"ascii":case"binary":case"raw":n=e.length;break;case"base64":n=M(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=2*e.length;break;default:throw new Error("Unknown encoding")}return n},f.concat=function(e,t){if(d(C(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new f(0);if(1===e.length)return e[0];if("number"!=typeof t)for(o=t=0;o<e.length;o++)t+=e[o].length;for(var n=new f(t),r=0,o=0;o<e.length;o++){var i=e[o];i.copy(n,r),r+=i.length}return n},f.prototype.write=function(e,t,n,r){isFinite(t)?isFinite(n)||(r=n,n=void 0):(a=r,r=t,t=n,n=a),t=Number(t)||0;var o,i,u,s,a=this.length-t;switch((!n||a<(n=Number(n)))&&(n=a),r=String(r||"utf8").toLowerCase()){case"hex":o=function(e,t,n,r){n=Number(n)||0;var o=e.length-n;(!r||o<(r=Number(r)))&&(r=o),d((o=t.length)%2==0,"Invalid hex string"),o/2<r&&(r=o/2);for(var i=0;i<r;i++){var u=parseInt(t.substr(2*i,2),16);d(!isNaN(u),"Invalid hex string"),e[n+i]=u}return f._charsWritten=2*i,i}(this,e,t,n);break;case"utf8":case"utf-8":i=this,u=t,s=n,o=f._charsWritten=c(T(e),i,u,s);break;case"ascii":case"binary":o=b(this,e,t,n);break;case"base64":i=this,u=t,s=n,o=f._charsWritten=c(M(e),i,u,s);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":o=m(this,e,t,n);break;default:throw new Error("Unknown encoding")}return o},f.prototype.toString=function(e,t,n){var r,o,i,u,s=this;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,(n=void 0!==n?Number(n):s.length)===t)return"";switch(e){case"hex":r=function(e,t,n){var r=e.length;(!t||t<0)&&(t=0);(!n||n<0||r<n)&&(n=r);for(var o="",i=t;i<n;i++)o+=k(e[i]);return o}(s,t,n);break;case"utf8":case"utf-8":r=function(e,t,n){var r="",o="";n=Math.min(e.length,n);for(var i=t;i<n;i++)e[i]<=127?(r+=N(o)+String.fromCharCode(e[i]),o=""):o+="%"+e[i].toString(16);return r+N(o)}(s,t,n);break;case"ascii":case"binary":r=v(s,t,n);break;case"base64":o=s,u=n,r=0===(i=t)&&u===o.length?a.fromByteArray(o):a.fromByteArray(o.slice(i,u));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":r=function(e,t,n){for(var r=e.slice(t,n),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}(s,t,n);break;default:throw new Error("Unknown encoding")}return r},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},f.prototype.copy=function(e,t,n,r){if(t=t||0,(r=r||0===r?r:this.length)!==(n=n||0)&&0!==e.length&&0!==this.length){d(n<=r,"sourceEnd < sourceStart"),d(0<=t&&t<e.length,"targetStart out of bounds"),d(0<=n&&n<this.length,"sourceStart out of bounds"),d(0<=r&&r<=this.length,"sourceEnd out of bounds"),r>this.length&&(r=this.length);var o=(r=e.length-t<r-n?e.length-t+n:r)-n;if(o<100||!f._useTypedArrays)for(var i=0;i<o;i++)e[i+t]=this[i+n];else e._set(this.subarray(n,n+o),t)}},f.prototype.slice=function(e,t){var n=this.length;if(e=S(e,n,0),t=S(t,n,n),f._useTypedArrays)return f._augment(this.subarray(e,t));for(var r=t-e,o=new f(r,void 0,!0),i=0;i<r;i++)o[i]=this[i+e];return o},f.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},f.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},f.prototype.readUInt8=function(e,t){if(t||(d(null!=e,"missing offset"),d(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return this[e]},f.prototype.readUInt16LE=function(e,t){return o(this,e,!0,t)},f.prototype.readUInt16BE=function(e,t){return o(this,e,!1,t)},f.prototype.readUInt32LE=function(e,t){return u(this,e,!0,t)},f.prototype.readUInt32BE=function(e,t){return u(this,e,!1,t)},f.prototype.readInt8=function(e,t){if(t||(d(null!=e,"missing offset"),d(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return 128&this[e]?-1*(255-this[e]+1):this[e]},f.prototype.readInt16LE=function(e,t){return _(this,e,!0,t)},f.prototype.readInt16BE=function(e,t){return _(this,e,!1,t)},f.prototype.readInt32LE=function(e,t){return E(this,e,!0,t)},f.prototype.readInt32BE=function(e,t){return E(this,e,!1,t)},f.prototype.readFloatLE=function(e,t){return I(this,e,!0,t)},f.prototype.readFloatBE=function(e,t){return I(this,e,!1,t)},f.prototype.readDoubleLE=function(e,t){return A(this,e,!0,t)},f.prototype.readDoubleBE=function(e,t){return A(this,e,!1,t)},f.prototype.writeUInt8=function(e,t,n){n||(d(null!=e,"missing value"),d(null!=t,"missing offset"),d(t<this.length,"trying to write beyond buffer length"),Y(e,255)),t>=this.length||(this[t]=e)},f.prototype.writeUInt16LE=function(e,t,n){s(this,e,t,!0,n)},f.prototype.writeUInt16BE=function(e,t,n){s(this,e,t,!1,n)},f.prototype.writeUInt32LE=function(e,t,n){l(this,e,t,!0,n)},f.prototype.writeUInt32BE=function(e,t,n){l(this,e,t,!1,n)},f.prototype.writeInt8=function(e,t,n){n||(d(null!=e,"missing value"),d(null!=t,"missing offset"),d(t<this.length,"Trying to write beyond buffer length"),F(e,127,-128)),t>=this.length||(0<=e?this.writeUInt8(e,t,n):this.writeUInt8(255+e+1,t,n))},f.prototype.writeInt16LE=function(e,t,n){B(this,e,t,!0,n)},f.prototype.writeInt16BE=function(e,t,n){B(this,e,t,!1,n)},f.prototype.writeInt32LE=function(e,t,n){L(this,e,t,!0,n)},f.prototype.writeInt32BE=function(e,t,n){L(this,e,t,!1,n)},f.prototype.writeFloatLE=function(e,t,n){U(this,e,t,!0,n)},f.prototype.writeFloatBE=function(e,t,n){U(this,e,t,!1,n)},f.prototype.writeDoubleLE=function(e,t,n){x(this,e,t,!0,n)},f.prototype.writeDoubleBE=function(e,t,n){x(this,e,t,!1,n)},f.prototype.fill=function(e,t,n){if(t=t||0,n=n||this.length,d("number"==typeof(e="string"==typeof(e=e||0)?e.charCodeAt(0):e)&&!isNaN(e),"value is not a number"),d(t<=n,"end < start"),n!==t&&0!==this.length){d(0<=t&&t<this.length,"start out of bounds"),d(0<=n&&n<=this.length,"end out of bounds");for(var r=t;r<n;r++)this[r]=e}},f.prototype.inspect=function(){for(var e=[],t=this.length,n=0;n<t;n++)if(e[n]=k(this[n]),n===H.INSPECT_MAX_BYTES){e[n+1]="...";break}return"<Buffer "+e.join(" ")+">"},f.prototype.toArrayBuffer=function(){if("undefined"==typeof Uint8Array)throw new Error("Buffer.toArrayBuffer not supported in this browser");if(f._useTypedArrays)return new f(this).buffer;for(var e=new Uint8Array(this.length),t=0,n=e.length;t<n;t+=1)e[t]=this[t];return e.buffer};var t=f.prototype;function S(e,t,n){return"number"!=typeof e?n:t<=(e=~~e)?t:0<=e||0<=(e+=t)?e:0}function j(e){return(e=~~Math.ceil(+e))<0?0:e}function C(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function k(e){return e<16?"0"+e.toString(16):e.toString(16)}function T(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=127)t.push(e.charCodeAt(n));else for(var o=n,i=(55296<=r&&r<=57343&&n++,encodeURIComponent(e.slice(o,n+1)).substr(1).split("%")),u=0;u<i.length;u++)t.push(parseInt(i[u],16))}return t}function M(e){return a.toByteArray(e)}function c(e,t,n,r){for(var o=0;o<r&&!(o+n>=t.length||o>=e.length);o++)t[o+n]=e[o];return o}function N(e){try{return decodeURIComponent(e)}catch(e){return String.fromCharCode(65533)}}function Y(e,t){d("number"==typeof e,"cannot write a non-number as a number"),d(0<=e,"specified a negative value for writing an unsigned value"),d(e<=t,"value is larger than maximum value for type"),d(Math.floor(e)===e,"value has a fractional component")}function F(e,t,n){d("number"==typeof e,"cannot write a non-number as a number"),d(e<=t,"value larger than maximum allowed value"),d(n<=e,"value smaller than minimum allowed value"),d(Math.floor(e)===e,"value has a fractional component")}function D(e,t,n){d("number"==typeof e,"cannot write a non-number as a number"),d(e<=t,"value larger than maximum allowed value"),d(n<=e,"value smaller than minimum allowed value")}function d(e,t){if(!e)throw new Error(t||"Failed assertion")}f._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=t.get,e.set=t.set,e.write=t.write,e.toString=t.toString,e.toLocaleString=t.toString,e.toJSON=t.toJSON,e.copy=t.copy,e.slice=t.slice,e.readUInt8=t.readUInt8,e.readUInt16LE=t.readUInt16LE,e.readUInt16BE=t.readUInt16BE,e.readUInt32LE=t.readUInt32LE,e.readUInt32BE=t.readUInt32BE,e.readInt8=t.readInt8,e.readInt16LE=t.readInt16LE,e.readInt16BE=t.readInt16BE,e.readInt32LE=t.readInt32LE,e.readInt32BE=t.readInt32BE,e.readFloatLE=t.readFloatLE,e.readFloatBE=t.readFloatBE,e.readDoubleLE=t.readDoubleLE,e.readDoubleBE=t.readDoubleBE,e.writeUInt8=t.writeUInt8,e.writeUInt16LE=t.writeUInt16LE,e.writeUInt16BE=t.writeUInt16BE,e.writeUInt32LE=t.writeUInt32LE,e.writeUInt32BE=t.writeUInt32BE,e.writeInt8=t.writeInt8,e.writeInt16LE=t.writeInt16LE,e.writeInt16BE=t.writeInt16BE,e.writeInt32LE=t.writeInt32LE,e.writeInt32BE=t.writeInt32BE,e.writeFloatLE=t.writeFloatLE,e.writeFloatBE=t.writeFloatBE,e.writeDoubleLE=t.writeDoubleLE,e.writeDoubleBE=t.writeDoubleBE,e.fill=t.fill,e.inspect=t.inspect,e.toArrayBuffer=t.toArrayBuffer,e}}.call(this,O("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},O("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(c,d,e){!function(e,t,a,n,r,o,i,u,s){var a=c("buffer").Buffer,f=4,l=new a(f);l.fill(0);d.exports={hash:function(e,t,n,r){for(var o=t(function(e,t){e.length%f!=0&&(n=e.length+(f-e.length%f),e=a.concat([e,l],n));for(var n,r=[],o=t?e.readInt32BE:e.readInt32LE,i=0;i<e.length;i+=f)r.push(o.call(e,i));return r}(e=a.isBuffer(e)?e:new a(e),r),8*e.length),t=r,i=new a(n),u=t?i.writeInt32BE:i.writeInt32LE,s=0;s<o.length;s++)u.call(i,o[s],4*s,!0);return i}}}.call(this,c("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},c("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(v,e,_){!function(l,c,u,d,h,p,g,y,w){var u=v("buffer").Buffer,e=v("./sha"),t=v("./sha256"),n=v("./rng"),b={sha1:e,sha256:t,md5:v("./md5")},s=64,a=new u(s);function r(e,n){var r=b[e=e||"sha1"],o=[];return r||i("algorithm:",e,"is not yet supported"),{update:function(e){return u.isBuffer(e)||(e=new u(e)),o.push(e),e.length,this},digest:function(e){var t=u.concat(o),t=n?function(e,t,n){u.isBuffer(t)||(t=new u(t)),u.isBuffer(n)||(n=new u(n)),t.length>s?t=e(t):t.length<s&&(t=u.concat([t,a],s));for(var r=new u(s),o=new u(s),i=0;i<s;i++)r[i]=54^t[i],o[i]=92^t[i];return n=e(u.concat([r,n])),e(u.concat([o,n]))}(r,n,t):r(t);return o=null,e?t.toString(e):t}}}function i(){var e=[].slice.call(arguments).join(" ");throw new Error([e,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join("\n"))}a.fill(0),_.createHash=function(e){return r(e)},_.createHmac=r,_.randomBytes=function(e,t){if(!t||!t.call)return new u(n(e));try{t.call(this,void 0,new u(n(e)))}catch(e){t(e)}};var o,f=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],m=function(e){_[e]=function(){i("sorry,",e,"is not implemented yet")}};for(o in f)m(f[o],o)}.call(this,v("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},v("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(w,b,e){!function(e,r,o,i,u,a,f,l,y){var t=w("./helpers");function n(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var n=1732584193,r=-271733879,o=-1732584194,i=271733878,u=0;u<e.length;u+=16){var s=n,a=r,f=o,l=i,n=c(n,r,o,i,e[u+0],7,-680876936),i=c(i,n,r,o,e[u+1],12,-389564586),o=c(o,i,n,r,e[u+2],17,606105819),r=c(r,o,i,n,e[u+3],22,-1044525330);n=c(n,r,o,i,e[u+4],7,-176418897),i=c(i,n,r,o,e[u+5],12,1200080426),o=c(o,i,n,r,e[u+6],17,-1473231341),r=c(r,o,i,n,e[u+7],22,-45705983),n=c(n,r,o,i,e[u+8],7,1770035416),i=c(i,n,r,o,e[u+9],12,-1958414417),o=c(o,i,n,r,e[u+10],17,-42063),r=c(r,o,i,n,e[u+11],22,-1990404162),n=c(n,r,o,i,e[u+12],7,1804603682),i=c(i,n,r,o,e[u+13],12,-40341101),o=c(o,i,n,r,e[u+14],17,-1502002290),n=d(n,r=c(r,o,i,n,e[u+15],22,1236535329),o,i,e[u+1],5,-165796510),i=d(i,n,r,o,e[u+6],9,-1069501632),o=d(o,i,n,r,e[u+11],14,643717713),r=d(r,o,i,n,e[u+0],20,-373897302),n=d(n,r,o,i,e[u+5],5,-701558691),i=d(i,n,r,o,e[u+10],9,38016083),o=d(o,i,n,r,e[u+15],14,-660478335),r=d(r,o,i,n,e[u+4],20,-405537848),n=d(n,r,o,i,e[u+9],5,568446438),i=d(i,n,r,o,e[u+14],9,-1019803690),o=d(o,i,n,r,e[u+3],14,-187363961),r=d(r,o,i,n,e[u+8],20,1163531501),n=d(n,r,o,i,e[u+13],5,-1444681467),i=d(i,n,r,o,e[u+2],9,-51403784),o=d(o,i,n,r,e[u+7],14,1735328473),n=h(n,r=d(r,o,i,n,e[u+12],20,-1926607734),o,i,e[u+5],4,-378558),i=h(i,n,r,o,e[u+8],11,-2022574463),o=h(o,i,n,r,e[u+11],16,1839030562),r=h(r,o,i,n,e[u+14],23,-35309556),n=h(n,r,o,i,e[u+1],4,-1530992060),i=h(i,n,r,o,e[u+4],11,1272893353),o=h(o,i,n,r,e[u+7],16,-155497632),r=h(r,o,i,n,e[u+10],23,-1094730640),n=h(n,r,o,i,e[u+13],4,681279174),i=h(i,n,r,o,e[u+0],11,-358537222),o=h(o,i,n,r,e[u+3],16,-722521979),r=h(r,o,i,n,e[u+6],23,76029189),n=h(n,r,o,i,e[u+9],4,-640364487),i=h(i,n,r,o,e[u+12],11,-421815835),o=h(o,i,n,r,e[u+15],16,530742520),n=p(n,r=h(r,o,i,n,e[u+2],23,-995338651),o,i,e[u+0],6,-198630844),i=p(i,n,r,o,e[u+7],10,1126891415),o=p(o,i,n,r,e[u+14],15,-1416354905),r=p(r,o,i,n,e[u+5],21,-57434055),n=p(n,r,o,i,e[u+12],6,1700485571),i=p(i,n,r,o,e[u+3],10,-1894986606),o=p(o,i,n,r,e[u+10],15,-1051523),r=p(r,o,i,n,e[u+1],21,-2054922799),n=p(n,r,o,i,e[u+8],6,1873313359),i=p(i,n,r,o,e[u+15],10,-30611744),o=p(o,i,n,r,e[u+6],15,-1560198380),r=p(r,o,i,n,e[u+13],21,1309151649),n=p(n,r,o,i,e[u+4],6,-145523070),i=p(i,n,r,o,e[u+11],10,-1120210379),o=p(o,i,n,r,e[u+2],15,718787259),r=p(r,o,i,n,e[u+9],21,-343485551),n=g(n,s),r=g(r,a),o=g(o,f),i=g(i,l)}return Array(n,r,o,i)}function s(e,t,n,r,o,i){return g((t=g(g(t,e),g(r,i)))<<o|t>>>32-o,n)}function c(e,t,n,r,o,i,u){return s(t&n|~t&r,e,t,o,i,u)}function d(e,t,n,r,o,i,u){return s(t&r|n&~r,e,t,o,i,u)}function h(e,t,n,r,o,i,u){return s(t^n^r,e,t,o,i,u)}function p(e,t,n,r,o,i,u){return s(n^(t|~r),e,t,o,i,u)}function g(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}b.exports=function(e){return t.hash(e,n,16)}}.call(this,w("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},w("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(e,l,t){!function(e,t,n,r,o,i,u,s,f){var a;l.exports=a||function(e){for(var t,n=new Array(e),r=0;r<e;r++)0==(3&r)&&(t=4294967296*Math.random()),n[r]=t>>>((3&r)<<3)&255;return n}}.call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(c,d,e){!function(e,t,n,r,o,s,a,f,l){var i=c("./helpers");function u(l,c){l[c>>5]|=128<<24-c%32,l[15+(c+64>>9<<4)]=c;for(var e,t,n,r=Array(80),o=1732584193,i=-271733879,u=-1732584194,s=271733878,d=-1009589776,h=0;h<l.length;h+=16){for(var p=o,g=i,y=u,w=s,b=d,a=0;a<80;a++){r[a]=a<16?l[h+a]:v(r[a-3]^r[a-8]^r[a-14]^r[a-16],1);var f=m(m(v(o,5),(f=i,t=u,n=s,(e=a)<20?f&t|~f&n:!(e<40)&&e<60?f&t|f&n|t&n:f^t^n)),m(m(d,r[a]),(e=a)<20?1518500249:e<40?1859775393:e<60?-1894007588:-899497514)),d=s,s=u,u=v(i,30),i=o,o=f}o=m(o,p),i=m(i,g),u=m(u,y),s=m(s,w),d=m(d,b)}return Array(o,i,u,s,d)}function m(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function v(e,t){return e<<t|e>>>32-t}d.exports=function(e){return i.hash(e,u,20,!0)}}.call(this,c("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},c("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(c,d,e){!function(e,t,n,r,u,s,a,f,l){function b(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function o(e,l){var c,d=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),t=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),n=new Array(64);e[l>>5]|=128<<24-l%32,e[15+(l+64>>9<<4)]=l;for(var r,o,h=0;h<e.length;h+=16){for(var i=t[0],u=t[1],s=t[2],p=t[3],a=t[4],g=t[5],y=t[6],w=t[7],f=0;f<64;f++)n[f]=f<16?e[f+h]:b(b(b((o=n[f-2],m(o,17)^m(o,19)^v(o,10)),n[f-7]),(o=n[f-15],m(o,7)^m(o,18)^v(o,3))),n[f-16]),c=b(b(b(b(w,m(o=a,6)^m(o,11)^m(o,25)),a&g^~a&y),d[f]),n[f]),r=b(m(r=i,2)^m(r,13)^m(r,22),i&u^i&s^u&s),w=y,y=g,g=a,a=b(p,c),p=s,s=u,u=i,i=b(c,r);t[0]=b(i,t[0]),t[1]=b(u,t[1]),t[2]=b(s,t[2]),t[3]=b(p,t[3]),t[4]=b(a,t[4]),t[5]=b(g,t[5]),t[6]=b(y,t[6]),t[7]=b(w,t[7])}return t}var i=c("./helpers"),m=function(e,t){return e>>>t|e<<32-t},v=function(e,t){return e>>>t};d.exports=function(e){return i.hash(e,o,32,!0)}}.call(this,c("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},c("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(e,t,f){!function(e,t,n,r,o,i,u,s,a){f.read=function(e,t,n,r,o){var i,u,l=8*o-r-1,c=(1<<l)-1,d=c>>1,s=-7,a=n?o-1:0,f=n?-1:1,o=e[t+a];for(a+=f,i=o&(1<<-s)-1,o>>=-s,s+=l;0<s;i=256*i+e[t+a],a+=f,s-=8);for(u=i&(1<<-s)-1,i>>=-s,s+=r;0<s;u=256*u+e[t+a],a+=f,s-=8);if(0===i)i=1-d;else{if(i===c)return u?NaN:1/0*(o?-1:1);u+=Math.pow(2,r),i-=d}return(o?-1:1)*u*Math.pow(2,i-r)},f.write=function(e,t,l,n,r,c){var o,i,u=8*c-r-1,s=(1<<u)-1,a=s>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=n?0:c-1,h=n?1:-1,c=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(i=isNaN(t)?1:0,o=s):(o=Math.floor(Math.log(t)/Math.LN2),t*(n=Math.pow(2,-o))<1&&(o--,n*=2),2<=(t+=1<=o+a?d/n:d*Math.pow(2,1-a))*n&&(o++,n/=2),s<=o+a?(i=0,o=s):1<=o+a?(i=(t*n-1)*Math.pow(2,r),o+=a):(i=t*Math.pow(2,a-1)*Math.pow(2,r),o=0));8<=r;e[l+f]=255&i,f+=h,i/=256,r-=8);for(o=o<<r|i,u+=r;0<u;e[l+f]=255&o,f+=h,o/=256,u-=8);e[l+f-h]|=128*c}}.call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(e,h,t){!function(e,t,n,r,o,f,l,c,d){var i,u,s;function a(){}(e=h.exports={}).nextTick=(u="undefined"!=typeof window&&window.setImmediate,s="undefined"!=typeof window&&window.postMessage&&window.addEventListener,u?function(e){return window.setImmediate(e)}:s?(i=[],window.addEventListener("message",function(e){var t=e.source;t!==window&&null!==t||"process-tick"!==e.data||(e.stopPropagation(),0<i.length&&i.shift()())},!0),function(e){i.push(e),window.postMessage("process-tick","*")}):function(e){setTimeout(e,0)}),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=a,e.addListener=a,e.once=a,e.off=a,e.removeListener=a,e.removeAllListeners=a,e.emit=a,e.binding=function(e){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(e){throw new Error("process.chdir is not supported")}}.call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)});

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/map */ "./src/js/modules/map.js");
/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/config */ "./src/js/modules/config.js");
/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/storage */ "./src/js/modules/storage.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_handlerPostData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/handlerPostData */ "./src/js/modules/handlerPostData.js");
/* harmony import */ var _modules_requests__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/requests */ "./src/js/modules/requests.js");
/* harmony import */ var _modules_network__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/network */ "./src/js/modules/network.js");
/* harmony import */ var _modules_appState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/appState */ "./src/js/modules/appState.js");
/* harmony import */ var _modules_domManipulation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/domManipulation */ "./src/js/modules/domManipulation.js");
/* harmony import */ var _modules_domHelpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/domHelpers */ "./src/js/modules/domHelpers.js");
/* harmony import */ var _modules_domElements__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/domElements */ "./src/js/modules/domElements.js");














window.addEventListener('DOMContentLoaded', () => {
  /*jshint camelcase: false */
  let postid = 0;
  let search = location.search;
  const paramsURI = new URLSearchParams(location.search.substring(1));
  postid = paramsURI.get('postid');
  let pathname = location.pathname;
  let path = pathname.match(/post-view\.html/);

  if (path && postid != 0) {
    let redirect = pathname.replace(/post-view\.html/, `index.html?page=post&postid=${postid}`);
    location.href = redirect;
  } else {
    let isLogined = 0;
    let waitForLoad = 0;
    const mainPage = document.querySelector('.main-page');
    const postsOffer = document.querySelector('.posts-offer');
    const postsStart = document.querySelector('.posts-start');
    const postsNeed = document.querySelector('.posts-need');
    const postsAll = document.querySelector('.posts-all');
    const postsOne = document.querySelector('.post-one'); // const serviceOffer = document.querySelector('.offer');
    // const serviceNeed = document.querySelector('.need');
    // const startPostText = document.querySelector('.start-post-text');

    const workberHome = document.querySelector('.workber-logo');
    const workberLogo = document.querySelector('.workber-logo img');
    const distanceInfo = document.querySelector('.distance-info');
    const distances = document.querySelector('.distances');
    const distText = document.querySelector('.dist-text');
    const distTextHeader = document.querySelector('.dist-text-header');
    const postMenu = document.querySelector('.post-menu');
    const userMenu = document.querySelector('.user-menu');
    const backMenu = document.querySelector('.back-menu');
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');
    const tabsServices = document.querySelector('.tabs-service');
    const searchService = document.querySelector('.search-service');
    const searchProject = document.querySelector('.search-project');
    const searchAll = document.querySelector('.service-search-all');
    const iconSearchPage = document.querySelector('.icon-search-page');
    const notFound = document.querySelector('.not-found');
    const noMorePosts = document.querySelector('.no-more-posts');
    const searchSpinner = document.querySelector('.search-spinner');
    const searchBlock = document.querySelector('.search-block');
    const tabsLocality = document.querySelector('.tabs-locality');
    const localityHome = document.querySelector('.locality-home');
    const localityLocal = document.querySelector('.locality-local'); // const btnSetLocation = document.querySelector('.btn__setLocation');
    // const shownedAfterLoadPage = ['tabs-service', 'distance-info', 'tabs-locality'];
    // const searchStorage = {
    // 	'service': {
    // 		'last_postid' : 0,
    // 		'last_dist' : 0,
    // 	},
    // 	'project': {
    // 		'last_postid' : 0,
    // 		'last_dist' : 0,
    // 	},
    // };

    const showControl = {
      'service': {
        'hide': ['posts-need', 'start-page', 'posts-all', 'post-one', 'back-menu'],
        'show': ['posts-offer', 'search-block', 'post-menu', 'icon-settings', 'dist-text-header', 'distances', 'tabs-service'],
        'callParams': {
          call: 'doSearch',
          role_ad: 'service'
        },
        'scrollYPos': 0,
        'container': postsOffer,
        'zoneName': ''
      },
      'project': {
        'hide': ['posts-offer', 'posts-all', 'start-page', 'post-one', 'back-menu'],
        'show': ['posts-need', 'search-block', 'post-menu', 'icon-settings', 'dist-text-header', 'distances', 'tabs-service'],
        'callParams': {
          call: 'doSearch',
          role_ad: 'project'
        },
        'scrollYPos': 0,
        'container': postsNeed,
        'zoneName': ''
      },
      'all': {
        'hide': ['posts-offer', 'posts-need', 'start-page', 'post-one', 'back-menu'],
        'show': ['posts-all', 'search-block', 'post-menu', 'icon-settings'],
        'callParams': {
          call: 'doSearchAll'
        },
        'scrollYPos': 0,
        'container': postsAll,
        'zoneName': ''
      },
      'doStart': {
        'hide': ['posts-offer', 'posts-need', 'posts-all', 'home-page', 'post-one', 'back-menu', 'distance-info', 'dist-text-header', 'distances'],
        'show': ['start-page', 'post-menu', 'icon-settings', 'tabs-service'],
        'callParams': {
          call: 'doStart',
          postid: null,
          dist: null
        },
        'scrollYPos': 0,
        'container': postsStart
      },
      'showOnePost': {
        'hide': ['posts-offer', 'posts-need', 'posts-all', 'home-page', 'start-page', 'distance-info', 'dist-text-header', 'distances', 'icon-settings', 'tabs-service'],
        'show': ['post-one', 'back-menu'],
        'callParams': {
          call: 'getPostByID',
          postid: null
        },
        'container': postsOne
      },
      'profile': {
        'hide': ['posts-offer', 'posts-need', 'posts-all', 'home-page', 'start-page', 'distance-info', 'dist-text-header', 'distances', 'tabs-service']
      }
    };
    const callParams = {
      doStart: {
        call: 'doStart',
        postid: null,
        dist: null
      }
    };
    let currentPage = 'doStart';
    workberHome.dataset['currentPage'] = 'doStart';
    const pages = ['service', 'project', 'all', 'post', 'profile'];
    const eventClick = new Event("click");
    const eventScroll = new Event("scroll");
    let currentlyLoad = 0; // в данный момент загружено 0 элементов

    let postsOfferShowned = 1; // сейчас показывается offer

    let scrollSearchActivated = 0;
    let scrollFeed = 0; // let scrollDisabled = 0;

    let onePostShowned = 0;
    let localityStatus = ''; // let globalPostID = null;

    postsOffer.textContent = '';
    postsNeed.textContent = '';
    postsStart.textContent = '';

    const renderOnePost = (postData, postsContainer) => {
      postsContainer.textContent = ''; // const aMain = backMenu.querySelector('a');
      // aMain.href = '.';

      if (postData && postData.post) {
        const post = Object(_modules_handlerPostData__WEBPACK_IMPORTED_MODULE_7__["createPost"])(postData.post, isLogined);
        postsContainer.append(post);
        const lat = parseFloat(postData.post.lat);
        const lng = parseFloat(postData.post.lng);
        const city = parseFloat(postData.post.city);
        Object(_modules_map__WEBPACK_IMPORTED_MODULE_3__["setPostCoordsMap"])(lat, lng, city);
      }

      currentlyLoad++;
      window.scroll(0, 0);
    };

    const renderStartPosts = ({
      posts,
      last_postid,
      last_dist,
      code
    }, postsContainer, currentPageName = '') => {
      const div = document.createElement('div');
      div.classList.add('posts-row');
      posts.forEach(postData => {
        const postFeed = Object(_modules_handlerPostData__WEBPACK_IMPORTED_MODULE_7__["createStartPostFeed"])(postData, currentPageName);

        if (!!postFeed) {
          postsContainer.dataset.last_postid = last_postid;
          postsContainer.dataset.last_dist = last_dist;
          postsContainer.dataset.code = code;
          div.append(postFeed);
        }
      });
      postsContainer.append(div);
      currentlyLoad++;
      scrollSearchActivated = 0;
    };

    const renderSearchPosts = ({
      zones,
      last_postid,
      last_dist,
      code
    }, postsContainer, currentPageName = '') => {
      postsContainer.dataset.last_postid = last_postid;
      postsContainer.dataset.last_dist = last_dist;
      postsContainer.dataset.code = code;

      if (zones.length == 0 && postsContainer.textContent === '') {
        postsContainer.append(notFoundPosts());
      } else {
        distances.classList.remove('d-none');
        zones.forEach(item => {
          const zonesName = item.name;
          item.posts.forEach(postData => {
            postData.zonesName = zonesName;

            if (showControl[currentPageName].zoneName === '') {
              showControl[currentPageName].zoneName = zonesName;
            }

            const postFeed = Object(_modules_handlerPostData__WEBPACK_IMPORTED_MODULE_7__["createPostFeed"])(postData, isLogined, currentPageName);

            if (!!postFeed) {
              postsContainer.append(postFeed);
            }
          });
        });
      }

      currentlyLoad++;
      scrollSearchActivated = 0;
    };

    const renderSearchAll = data => {
      console.log(data);
    };

    const getPostByID = async (postid, postsContainer, callback) => {
      currentPage = 'showOnePost';
      const params = {
        postid: postid
      };
      getDataSearch(Object(_modules_requests__WEBPACK_IMPORTED_MODULE_8__["createRequestParams"])(currentPage, showControl[currentPage].callParams, params), postsContainer, callback);
      enableElemsStart(currentPage);
    };

    const changeSearch = e => {
      e.preventDefault();
      const target = e.target;

      if (target.matches('.service')) {
        if (!target.matches('.service-selected') || currentPage == 'doStart') {
          // toggleService(target);
          Object(_modules_domManipulation__WEBPACK_IMPORTED_MODULE_11__["toggleService"])('.service', target, 'service-selected');
          showControl[currentPage].scrollYPos = window.pageYOffset;
          showControl[currentPage].container.classList.add('d-none');
          const searchPage = target.dataset.service;
          currentPage = searchPage;
          clickSearchButton();
        }
      }
    };

    const searchPosts = e => {
      const params = selectLocation();
      showControl[currentPage].scrollYPos = window.pageYOffset;
      currentPage = Object(_modules_domHelpers__WEBPACK_IMPORTED_MODULE_12__["getCurrentPage"])('.service');

      if (searchInput.value === showControl[currentPage].callParams.keywords) {
        enableElemsStart(currentPage); // if (searchInput.value === '' || searchInput.value.trim().length < 3) {
        // 	return false;
        // }
      } else {
        distances.classList.add('d-none');
        distText.textContent = distTextHeader.textContent = '';
        showControl[currentPage].callParams.keywords = searchInput.value;
        showControl[currentPage].scrollYPos = 0;

        if (currentPage === 'all') {
          const hashTag = searchInput.value;
          showControl[currentPage].callParams.keywords = hashTag;
          goSearch(currentPage, hashTag, renderSearchAll);
        } else {
          goSearch(currentPage, searchInput.value, renderSearchPosts);
        }
      }

      Object(_modules_appState__WEBPACK_IMPORTED_MODULE_10__["URImod"])({
        'page': currentPage,
        'hashtag': searchInput.value,
        'lat': params.lat,
        'lng': params.lng
      });
    };

    const goSearch = (searchPage, keywords, renderPosts) => {
      currentPage = searchPage;
      const params = selectLocation();
      const originURI = new URL(location);
      let newURI = new URL(`${originURI.origin}${originURI.pathname}`);
      newURI.searchParams.delete('hashtag');
      showControl[searchPage].container.textContent = '';

      if (!!keywords && keywords.trim().length > 2) {
        params.keywords = keywords;
      }

      getDataSearch(Object(_modules_requests__WEBPACK_IMPORTED_MODULE_8__["createRequestParams"])(currentPage, showControl[currentPage].callParams, params), postsOffer, renderPosts);
      enableElemsStart(searchPage);
    };

    const showFeedSearch = (e = null) => {
      if (e) {
        e.preventDefault();
      }

      showControl[currentPage].scrollYPos = window.pageYOffset;
      currentPage = 'doStart';

      if (postsStart.textContent == '') {
        const params = selectLocation();
        getDataSearch(Object(_modules_requests__WEBPACK_IMPORTED_MODULE_8__["createRequestParams"])(currentPage, showControl[currentPage].callParams, params), postsStart, renderStartPosts);
      }

      enableElemsStart(currentPage);
      onePostShowned = 0;
    };

    const getDataSearch = async (searchQuery, postsContainer, callback) => {
      if (!searchQuery) {
        return false;
      }

      searchSpinner.classList.remove('d-none');
      noMorePosts.classList.add('d-none');
      const currentPageName = searchQuery.params.currentPageName;
      delete searchQuery.params.currentPageName;
      waitForLoad++;
      const formdata = new FormData();
      formdata.append("call", searchQuery.call);

      for (const callParam in searchQuery.params) {
        formdata.append(callParam, searchQuery.params[callParam]);
      }

      if (_modules_storage__WEBPACK_IMPORTED_MODULE_5__["getGlobalItem"]('sid')) {
        formdata.append('token', _modules_storage__WEBPACK_IMPORTED_MODULE_5__["getGlobalItem"]('sid'));
      }

      Object(_modules_network__WEBPACK_IMPORTED_MODULE_9__["sendRequest"])(_modules_config__WEBPACK_IMPORTED_MODULE_4__["workberBackEnd"], formdata).then(data => {
        callback(data.success, showControl[currentPageName].container, currentPageName);
      });
    };

    const addEvents = () => {
      const postShare = document.querySelectorAll('.new-post-share');
      postShare.forEach(item => {
        item.classList.remove('new-post-share');
        item.addEventListener('click', e => {
          const target = e.target;
          navigator.clipboard.writeText(target.dataset.link);
          e.stopPropagation();
        });
      });
      const newPost = document.querySelectorAll('.new-post');
      newPost.forEach(item => {
        item.classList.remove('new-post');
        const postMoreInfo = item.querySelector('.post-text-more');

        if (postMoreInfo) {
          const postText = item.querySelector('.post-text');

          if (postText.clientHeight < postText.scrollHeight) {
            postMoreInfo.classList.remove('d-none');
            postMoreInfo.addEventListener('click', showMoreInfo);
          }
        }

        item.addEventListener('click', e => {
          e.preventDefault();
          showOnePost(item.dataset.postid);
        });
      });
    }; // const toggleService = targetService => {
    // 	services.forEach(item => {
    // 		item.classList.remove('service-selected');
    // 	});
    // 	if(!!targetService) {
    // 		targetService.classList.add('service-selected');
    // 	}
    // };
    // const enableElems = () => {
    // 	if(currentlyLoad >= waitForLoad){
    // 		distanceInfo.textContent = showControl[currentPage].zoneName;
    // 		addEvents();
    // 	} else {
    // 		setTimeout(() => {
    // 			enableElems();
    // 		}, 1000);
    // 	}
    // };


    const enableElemsStart = callName => {
      if (currentlyLoad >= waitForLoad) {
        searchSpinner.classList.add('d-none');
        Object(_modules_domManipulation__WEBPACK_IMPORTED_MODULE_11__["hidePageElems"])(callName, showControl);
        Object(_modules_domManipulation__WEBPACK_IMPORTED_MODULE_11__["showPageElems"])(callName, showControl);

        if (showControl[currentPage].container.dataset.code === _modules_config__WEBPACK_IMPORTED_MODULE_4__["endSearchCode"]) {
          noMorePosts.classList.remove('d-none');
        } else {
          noMorePosts.classList.add('d-none');
        }

        const divNotFound = showControl[currentPage].container.querySelector('.not-found');

        if (divNotFound) {
          distances.classList.add('d-none');
        }

        addEvents();
        window.dispatchEvent(eventScroll);
        window.scroll(0, showControl[currentPage].scrollYPos);
      } else {
        setTimeout(() => {
          enableElemsStart(callName);
        }, 1000);
      }
    };

    const showOnePost = postid => {
      backMenu.dataset['prevPage'] = currentPage;
      const onePostFeed = document.querySelector('#' + currentPage + '_postid_' + postid);

      if (!!onePostFeed) {
        showControl[currentPage].scrollYPos = window.pageYOffset;

        try {
          scrollFeed = window.pageYOffset;
          onePostShowned = 1;
          postsOne.textContent = '';
          let showPageName = '';

          if (!!onePostFeed.dataset.showPageName) {
            showPageName = onePostFeed.dataset.showPageName;
          }

          currentPage = showPageName;
          const user_picture = onePostFeed.querySelector('.user-data').dataset.avatar;
          const user_name = onePostFeed.querySelector('.post-username').textContent;
          const collage = [];
          collage.name = onePostFeed.querySelector('.post-link img').attributes.src.value;
          const post_name = onePostFeed.querySelector('.post-title').textContent;
          const text_adv = onePostFeed.querySelector('.post-text').firstChild.textContent;
          const likes = onePostFeed.querySelector('.post-like').innerText;
          const hashtags = JSON.parse(onePostFeed.querySelector('.post-hashtags').dataset.hashtags);
          const role_ad = onePostFeed.querySelector('.post-hashtags').dataset.role_ad;
          const city = onePostFeed.querySelector('.location-city').textContent;
          const contactsList = {
            phone: onePostFeed.querySelector('.post-contact-phone').textContent,
            contact_email: onePostFeed.querySelector('.post-contact-email').textContent,
            address: onePostFeed.querySelector('.post-contact-address').textContent
          };
          const post = Object(_modules_handlerPostData__WEBPACK_IMPORTED_MODULE_7__["createPost"])({
            user_picture,
            user_name,
            collage,
            post_name,
            text_adv,
            likes,
            hashtags,
            city,
            role_ad,
            contactsList
          });
          const postContent = onePostFeed.querySelector('.post-content');
          const lat = parseFloat(postContent.dataset.lat);
          const lng = parseFloat(postContent.dataset.lng);
          postsOne.append(post);
          Object(_modules_map__WEBPACK_IMPORTED_MODULE_3__["setPostCoordsMap"])(lat, lng, city);
          document.querySelector('.hashtags-links').addEventListener('click', searchByTag);
          Object(_modules_domManipulation__WEBPACK_IMPORTED_MODULE_11__["hidePageElems"])(showPageName, showControl);
          Object(_modules_domManipulation__WEBPACK_IMPORTED_MODULE_11__["showPageElems"])(showPageName, showControl);
          noMorePosts.classList.add('d-none');
          window.scroll(0, 0);
        } catch (error) {
          console.log(error);
        }
      }
    };

    const showMoreInfo = e => {
      const target = e.target;

      if (target.innerText.indexOf('more') > 0) {
        target.closest('.post-text').classList.remove('post-text-preview');
        target.innerText = '... less';
      } else {
        target.closest('.post-text').classList.add('post-text-preview');
        target.innerText = '... more';
      }

      e.stopPropagation();
    };

    const showHome = e => {
      e.preventDefault();
      showControl[currentPage].scrollYPos = window.pageYOffset;
      clearSearchParam();
      currentPage = 'doStart';
      const params = selectLocation();
      Object(_modules_appState__WEBPACK_IMPORTED_MODULE_10__["URImod"])({
        'page': currentPage,
        'lat': params.lat,
        'lng': params.lng
      });
      showFeedSearch(e);
    };

    const showFeed = e => {
      e.preventDefault();

      if (currentPage === 'doStart') {
        showHome(e);
        return;
      } else if (currentPage === 'showOnePost' && !!backMenu.dataset['prevPage']) {
        currentPage = backMenu.dataset['prevPage'];
      }

      enableElemsStart(currentPage); // distances.classList.remove('dist-one');

      distanceInfo.textContent = showControl[currentPage].zoneName;
      onePostShowned = 0;
    };

    const searchByTag = e => {
      e.preventDefault();
      const target = e.target;
      onePostShowned = 0;

      if (target.classList.contains('a-hashtag')) {
        currentPage = target.dataset['page'];
        const hashTag = target.dataset['hashtag'];

        if (!!hashTag && hashTag.trim().length > 2) {
          searchInput.value = hashTag;
          showControl[currentPage].callParams.keywords = hashTag;
          reloadCurrentPage();
        }
      }
    };

    const postsScroll = (e, setZoneName = 0) => {
      return false;
      const postsContainer = showControl[currentPage].container;
      const allVisible = Array.from(postsContainer.querySelectorAll('.post-feed')).filter(visible);

      if (!!allVisible[0] && !!allVisible[0].querySelector('.post-content')) {
        const zoneName = allVisible[0].querySelector('.post-content').dataset['zones'];

        if (!!zoneName) {
          distText.textContent = distTextHeader.textContent = zoneName;
        }
      } // if(scrollSearchActivated || onePostShowned || setZoneName) {
      // 	return false;
      // }


      if (!scrollSearchActivated && !onePostShowned && !document.querySelector(`.${_modules_modal__WEBPACK_IMPORTED_MODULE_6__["commonModalOpenClass"]}`)) {
        let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

        if (windowRelativeBottom <= document.documentElement.clientHeight + 120) {
          doUploadPosts();
        }
      }
    };

    const visible = elem => {
      const rect = elem.getBoundingClientRect();

      if (rect.top > -1000 || rect.bottom < 1000) {
        let cond = rect.top + 400 >= 0 && rect.bottom - 400 <= (window.innerHeight || document.documentElement.clientHeight);
        return cond;
      }

      return false;
    };

    const switchLocality = e => {
      const target = e.target;
      let needInit = false;

      if (target.matches('.locality')) {
        e.preventDefault();

        if (target.matches('.locality-home') && localityStatus !== 'locality-home') {
          localityStatus = 'locality-home';
          needInit = true;
        } else if (target.matches('.locality-local') && localityStatus !== 'locality-local') {
          localityStatus = 'locality-local';
          needInit = true;
        }

        if (needInit) {
          _modules_storage__WEBPACK_IMPORTED_MODULE_5__["setGlobalItem"]({
            localityStatus: localityStatus
          });
          reloadCurrentPage();
        }
      }
    };

    const selectLocation = () => {
      const paramsLocation = {};
      localityStatus = _modules_storage__WEBPACK_IMPORTED_MODULE_5__["getLocalityStatus"]();
      localityHome.classList.remove('locality-selected');
      localityLocal.classList.add('locality-selected');

      if (localityStatus === 'locality-home') {
        const [lat, lng] = _modules_storage__WEBPACK_IMPORTED_MODULE_5__["getLocation"]();

        if (lat && lng) {
          paramsLocation.lat = lat;
          paramsLocation.lng = lng;
          localityHome.classList.add('locality-selected');
          localityLocal.classList.remove('locality-selected');
        }
      }

      return paramsLocation;
    }; // const getCurrentPage = () => {
    // 	for(let item of services) {
    // 		if(item.matches('.service-selected')) {
    // 			return item.dataset.service;
    // 		}
    // 	}
    // };


    const notFoundPosts = () => {
      const tempDiv = notFound.cloneNode(true);
      tempDiv.classList.remove('d-none');
      return tempDiv;
    };

    const reloadCurrentPage = () => {
      const params = selectLocation();
      Object(_modules_appState__WEBPACK_IMPORTED_MODULE_10__["URImod"])({
        'page': currentPage,
        'hashtag': searchInput.value,
        'lat': params.lat,
        'lng': params.lng
      });
      showControl[currentPage].scrollYPos = 0;

      if (currentPage === 'service' || currentPage === 'project') {
        const hashTag = searchInput.value;
        showControl[currentPage].callParams.keywords = hashTag;
        goSearch(currentPage, hashTag, renderSearchPosts);
      } else if (currentPage === 'all') {
        const hashTag = searchInput.value;
        showControl[currentPage].callParams.keywords = hashTag;
        goSearch(currentPage, hashTag, renderSearchAll);
      } else {
        postsStart.textContent = '';
        showFeedSearch();
      }
    };

    const clickSearchButton = () => {
      searchButton.dispatchEvent(eventClick);
    };

    const clickHomeButton = () => {
      workberHome.dispatchEvent(eventClick);
    };

    const clearSearchParam = () => {
      searchInput.value = ''; // tabsServices.classList.add('d-hidden');
    };

    const checkScrollBottom = () => {
      if (!scrollSearchActivated && !onePostShowned
      /* && !scrollDisabled */
      && !document.querySelector(`.${_modules_modal__WEBPACK_IMPORTED_MODULE_6__["commonModalOpenClass"]}`)) {
        let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

        if (windowRelativeBottom <= document.documentElement.clientHeight + 120) {
          doUploadPosts();
        }
      }

      setTimeout(() => {
        checkScrollBottom();
      }, 100000);
    };

    const doUploadPosts = () => {
      const postsContainer = showControl[currentPage].container;
      showControl[currentPage].scrollYPos = window.pageYOffset;
      scrollSearchActivated = 1;
      const last_postid = postsContainer.dataset.last_postid;
      const last_dist = postsContainer.dataset.last_dist;
      const code = postsContainer.dataset.code;

      if (!!code && code == _modules_config__WEBPACK_IMPORTED_MODULE_4__["endSearchCode"] || currentlyLoad < waitForLoad) {
        scrollSearchActivated = 0;

        if (code == _modules_config__WEBPACK_IMPORTED_MODULE_4__["endSearchCode"]) {
          noMorePosts.classList.remove('d-none');
        }

        return false;
      }

      const params = selectLocation();

      if (!!last_postid) {
        params.postid = last_postid;
      }

      if (!!last_dist) {
        params.dist = last_dist;
      }

      params.keywords = showControl[currentPage].callParams.keywords;
      let callBackRender = null;

      switch (currentPage) {
        case 'doStart':
          callBackRender = renderStartPosts;
          break;

        case 'project':
        case 'service':
          callBackRender = renderSearchPosts;
          break;

        case 'all':
          callBackRender = renderSearchAll;
          break;

        default:
          return false;
      }

      Object(_modules_appState__WEBPACK_IMPORTED_MODULE_10__["URImod"])({
        'page': currentPage,
        'hashtag': searchInput.value,
        'lat': params.lat,
        'lng': params.lng
      });
      getDataSearch(Object(_modules_requests__WEBPACK_IMPORTED_MODULE_8__["createRequestParams"])(currentPage, showControl[currentPage].callParams, params), postsContainer, callBackRender);
      enableElemsStart(currentPage);
    };

    workberHome.addEventListener('click', showHome);
    tabsServices.addEventListener('click', changeSearch);
    backMenu.addEventListener('click', showFeed); // iconSearchPage.addEventListener('click', showFeedSearch);

    tabsLocality.addEventListener('click', switchLocality); // btnSetLocaton.addEventListener('click', setLocation);

    searchButton.addEventListener('click', searchPosts);
    searchInput.addEventListener('keyup', e => {
      if (e.code == 'Enter') {
        clickSearchButton();
      } // else if(searchInput.value.trim().length >= 3) {
      // 	tabsServices.classList.remove('d-hidden');
      // } else {
      // 	tabsServices.classList.add('d-hidden');
      // }

    });
    searchInput.addEventListener('change', e => {
      clickSearchButton(); // if(searchInput.value.trim().length >= 3) {
      // 	tabsServices.classList.remove('d-hidden');
      // } else {
      // 	tabsServices.classList.add('d-hidden');
      // }
    });

    if (workberLogo) {
      workberLogo.src = _modules_config__WEBPACK_IMPORTED_MODULE_4__["workberImages"] + '/site' + '/Workber-logo.svg';
    }

    Object(_modules_modal__WEBPACK_IMPORTED_MODULE_6__["renderModalSign"])('modal-overlay', '.icon-login');
    Object(_modules_map__WEBPACK_IMPORTED_MODULE_3__["mapLoader"])();
    Object(_modules_appState__WEBPACK_IMPORTED_MODULE_10__["getUserProfile"])().then(profile => {
      let profileContainer;

      if (profile) {
        profileContainer = Object(_modules_domElements__WEBPACK_IMPORTED_MODULE_13__["renderProfile"])(profile.profile, '.icon-settings', showControl);
        const profileDescription = profileContainer.querySelector('#user_descr');
        const descriptionCounter = profileContainer.querySelector('#descriptionCounter'); // profileDescription.innerText = profileDescription.innerText.trim().substring(0, maxDescriptionLength);
        // descriptionCounter.innerText = `${profileDescription.innerText.length}/${maxDescriptionLength}`;

        profileDescription.addEventListener('keyup', e => {
          Object(_modules_domHelpers__WEBPACK_IMPORTED_MODULE_12__["cropDescription"])(e.target, descriptionCounter, _modules_config__WEBPACK_IMPORTED_MODULE_4__["maxDescriptionLength"]);
        });
        profileDescription.dispatchEvent(new Event('keyup'));
      }

      if (!profile && userMenu) {
        userMenu.classList.add('d-none');
      }

      if (!!mainPage) {
        _modules_storage__WEBPACK_IMPORTED_MODULE_5__["iniBrowserLocation"]();
        searchInput.value = '';
        const paramPage = paramsURI.get('page');

        if (!paramPage || pages.indexOf(paramPage) == -1) {
          clickHomeButton();
        } else {
          window.scroll(0, 0);

          if (paramPage == 'post' && (postid = paramsURI.get('postid'))) {
            getPostByID(postid, postsOne, renderOnePost);
          } else if (paramPage === 'profile') {
            if (profile) {
              document.body.append(profileContainer); // showControl[currentPage].container.classList.add('d-none');
            } else {
              clickHomeButton();
            }
          } else {
            if (paramPage === 'project') {
              Object(_modules_domManipulation__WEBPACK_IMPORTED_MODULE_11__["toggleService"])('.service', searchProject, 'service-selected');
            } else if (paramPage === 'service') {
              Object(_modules_domManipulation__WEBPACK_IMPORTED_MODULE_11__["toggleService"])('.service', searchService, 'service-selected');
            } else {} // tabsServices.classList.remove('d-hidden');


            const hashTag = paramsURI.get('hashtag');
            currentPage = paramPage;

            if (!!hashTag && hashTag.trim().length > 2) {
              searchInput.value = hashTag;
              showControl[paramPage].callParams.keywords = hashTag;
            }

            reloadCurrentPage();
          }
        }

        window.addEventListener('scroll', postsScroll); // checkScrollBottom();
      }
    });
  }
});

/***/ }),

/***/ "./src/js/modules/appState.js":
/*!************************************!*\
  !*** ./src/js/modules/appState.js ***!
  \************************************/
/*! exports provided: appState, getUserProfile, postAPIRequest, deleteTemplate, getTemplate, checkUserName, logout, deleteAccount, URImod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appState", function() { return appState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserProfile", function() { return getUserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postAPIRequest", function() { return postAPIRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTemplate", function() { return deleteTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplate", function() { return getTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUserName", function() { return checkUserName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAccount", function() { return deleteAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URImod", function() { return URImod; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./requests */ "./src/js/modules/requests.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/js/modules/storage.js");




const appState = {};
const getUserProfile = async () => {
  let token = _storage__WEBPACK_IMPORTED_MODULE_3__["getGlobalItem"]('sid'),
      refreshToken = _storage__WEBPACK_IMPORTED_MODULE_3__["getGlobalItem"]('refresh_token');

  if (token) {
    const profile = await Object(_requests__WEBPACK_IMPORTED_MODULE_2__["sendGetRequest"])({
      call: 'doGetProfile',
      token: token
    }, null);

    if (profile === 401) {
      if (refreshToken && refreshToken != '') {
        const data = await refreshTokens(token, refreshToken).then(async objData => {
          if (objData !== false && objData.message !== "There is no such refresh token") {
            _storage__WEBPACK_IMPORTED_MODULE_3__["setGlobalItem"]({
              sid: objData.sid,
              refresh_token: objData.refresh_token,
              lifetime: objData.lifetime
            });
            const profile = await Object(_requests__WEBPACK_IMPORTED_MODULE_2__["sendGetRequest"])({
              call: 'doGetProfile',
              token: objData.sid
            }, null);

            if (profile) {
              storeProfileInfo(profile);
              return profile;
            }
          } else {
            _storage__WEBPACK_IMPORTED_MODULE_3__["removeLocalLoginInfo"]();
            return false;
          }
        });
        return data;
      }
    } else {
      storeProfileInfo(profile);
    }

    return profile;
  }

  return false;
};
const postAPIRequest = async hashtagRequestData => {
  let token = _storage__WEBPACK_IMPORTED_MODULE_3__["getGlobalItem"]('sid');

  if (token) {
    hashtagRequestData.token = token;
    const data = await Object(_requests__WEBPACK_IMPORTED_MODULE_2__["sendGetRequest"])(hashtagRequestData, {
      token: token,
      refreshToken: _storage__WEBPACK_IMPORTED_MODULE_3__["getGlobalItem"]('refresh_token')
    });
    return data;
  }

  return false;
}; // export const deleteHashtagTemplate = async (id) => {
// 	let token = storage.getGlobalItem('sid');
// 	if (token) {
// 		const data = await sendGetRequest({
// 			call: 'doDelHashtagTemplates',
// 			token: token,
// 			id: id
// 		}, 
// 		{token:token, refreshToken: storage.getGlobalItem('refresh_token')});
// 		return data;
// 	}
// 	return false;
// };

const deleteTemplate = async (typeTemplate, id) => {
  let token = _storage__WEBPACK_IMPORTED_MODULE_3__["getGlobalItem"]('sid');
  let call = null;

  if (typeTemplate === 'hashtag') {
    call = 'doDelHashtagTemplates';
  } else if (typeTemplate === 'contact') {
    call = 'doDelContactsTemplates';
  }

  if (token && call) {
    const data = await Object(_requests__WEBPACK_IMPORTED_MODULE_2__["sendGetRequest"])({
      call: call,
      token: token,
      id: id
    }, {
      token: token,
      refreshToken: _storage__WEBPACK_IMPORTED_MODULE_3__["getGlobalItem"]('refresh_token')
    });
    return data;
  }

  return false;
}; // export const getHashtagTemplate = async () => {
// 	let token = storage.getGlobalItem('sid');
// 	if (token) {
// 		const data = await sendGetRequest({
// 			call: 'doGetHashtagTemplates',
// 			token: token,
// 		}, 
// 		{token:token, refreshToken: storage.getGlobalItem('refresh_token')});
// 		return data;
// 	}
// 	return false;
// };

const getTemplate = async typeTemplate => {
  let token = _storage__WEBPACK_IMPORTED_MODULE_3__["getGlobalItem"]('sid');
  let call = null;

  if (typeTemplate === 'hashtag') {
    call = 'doGetHashtagTemplates';
  } else if (typeTemplate === 'contact') {
    call = 'doGetContactsTemplates';
  }

  if (token && call) {
    const data = await Object(_requests__WEBPACK_IMPORTED_MODULE_2__["sendGetRequest"])({
      call: call,
      token: token
    }, {
      token: token,
      refreshToken: _storage__WEBPACK_IMPORTED_MODULE_3__["getGlobalItem"]('refresh_token')
    });
    return data;
  }

  return false;
};
const checkUserName = async user_name => {
  let token = _storage__WEBPACK_IMPORTED_MODULE_3__["getGlobalItem"]('sid');

  if (token) {
    const data = await Object(_requests__WEBPACK_IMPORTED_MODULE_2__["sendGetRequest"])({
      call: 'doCheckUserName',
      user_name: user_name,
      token: token
    }, {
      token: token,
      refreshToken: _storage__WEBPACK_IMPORTED_MODULE_3__["getGlobalItem"]('refresh_token')
    });
    return data;
  }

  return false;
};

const refreshTokens = async (token, refreshToken) => {
  const data = await Object(_requests__WEBPACK_IMPORTED_MODULE_2__["sendGetRequest"])({
    call: 'doRefreshTokens',
    token: token,
    refresh_token: refreshToken
  }, false);
  return data;
};

const storeProfileInfo = ({
  profile,
  sid
}) => {
  if (profile) {
    _storage__WEBPACK_IMPORTED_MODULE_3__["storeProfile"](profile, {
      lat: profile.lat,
      lng: profile.lng,
      sid: sid
    });
  }
};

const logout = async () => {
  let token = _storage__WEBPACK_IMPORTED_MODULE_3__["getGlobalItem"]('sid');

  if (token) {
    await Object(_requests__WEBPACK_IMPORTED_MODULE_2__["sendGetRequest"])({
      call: 'logout',
      token: token
    }, null);
  }

  _storage__WEBPACK_IMPORTED_MODULE_3__["removeLocalLoginInfo"]();
  return true;
};
const deleteAccount = async () => {
  let token = _storage__WEBPACK_IMPORTED_MODULE_3__["getGlobalItem"]('sid');

  if (token) {
    await Object(_requests__WEBPACK_IMPORTED_MODULE_2__["sendGetRequest"])({
      call: 'doDeleteAccount',
      token: token
    }, {
      token: token,
      refreshToken: _storage__WEBPACK_IMPORTED_MODULE_3__["getGlobalItem"]('refresh_token')
    });
  }

  return true;
};
const URImod = newURIParams => {
  const originURI = new URL(location);
  const originPath = `${originURI.origin}${originURI.pathname}`;
  const newSearchParams = new URLSearchParams();

  for (let key in newURIParams) {
    if (!!newURIParams[key]) {
      newSearchParams.set(key, newURIParams[key]);
    }
  }

  history.pushState(null, null, `${originPath}?${newSearchParams.toString()}`);
}; // const removeLocalLoginInfo = () => {
// 	storage.removeGlobalItem([
// 		'refresh_token', 'sid', 'lifetime', 'lat', 'lng'
// 	]);
// };

/***/ }),

/***/ "./src/js/modules/config.js":
/*!**********************************!*\
  !*** ./src/js/modules/config.js ***!
  \**********************************/
/*! exports provided: workberBackEnd, workberImages, endSearchCode, registrationID, storeLinks, maxDescriptionLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workberBackEnd", function() { return workberBackEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workberImages", function() { return workberImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endSearchCode", function() { return endSearchCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registrationID", function() { return registrationID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeLinks", function() { return storeLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxDescriptionLength", function() { return maxDescriptionLength; });
const workberDomain = 'workber.me';
const workberSite = 'https://' + workberDomain;
const workberBackEnd = 'https://' + '2b2.' + workberDomain + '/gw.php';
const workberImages = workberSite + '/img';
const endSearchCode = 2;
const registrationID = Date.now();
const storeLinks = {
  goolePlay: "https://play.google.com/store/apps/details?id=com.workber",
  appStore: "https://apps.apple.com/ru/app/workber/id1485121269"
};
const maxDescriptionLength = 120;

/***/ }),

/***/ "./src/js/modules/domElements.js":
/*!***************************************!*\
  !*** ./src/js/modules/domElements.js ***!
  \***************************************/
/*! exports provided: renderProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderProfile", function() { return renderProfile; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! object-hash */ "./node_modules/object-hash/dist/object_hash.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(object_hash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domManipulation */ "./src/js/modules/domManipulation.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");
/* harmony import */ var _appState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appState */ "./src/js/modules/appState.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms */ "./src/js/modules/forms.js");






const renderProfile = ({
  contact_email,
  contact_phone,
  user_name,
  user_picture,
  user_descr,
  email,
  hashtagsList,
  contactsList
}, settingsSelector, showControl) => {
  const dataOuterFlag = 'data-outer';

  const userAvatar = user_picture => user_picture ? user_picture : 'assets/workber_img/big_avatar.jpeg';

  const localProfile = {
    hashagsList: JSON.parse(JSON.stringify(hashtagsList)),
    contactsList: JSON.parse(JSON.stringify(contactsList)),
    personalData: JSON.parse(JSON.stringify({
      contact_email,
      contact_phone,
      user_name,
      user_picture: userAvatar(user_picture),
      user_descr,
      email
    }))
  };
  let personalDataCheckSum = object_hash__WEBPACK_IMPORTED_MODULE_1___default.a.MD5({
    contact_email,
    contact_phone,
    user_name,
    user_descr
  }),
      contactDataCheckSum = '',
      hashtagDataCheckSum = '';

  const renderTemplates = (templateCountElem, section, funcRenderSection, list) => {
    templateCountElem.textContent = list.length;
    section.textContent = '';
    section.append(funcRenderSection(list));
  };

  const profileProps = {
    hashtags: {
      // container: 'profile-hashtags',
      callback: renderTemplates
    },
    contacts: {
      // container: 'profile-contacts',
      callback: renderTemplates
    }
  };
  const iconSettings = document.querySelector(settingsSelector);
  const profileContainer = document.createElement('section');
  profileContainer.classList.add('posts-block', 'profile-container');
  profileContainer.innerHTML = `
		<aside class="profile-sidebar">
			<div class="profile-user">
				<div class="profile-avatar">
					<img class="img-avatar" src="" id="imgAvatar" alt="user avatar">
					<form action="#" method="POST" id="formSetAvatar">
						<input type="hidden" name="call" value="doSetAvatar">
						<input type="hidden" name="action" value="set">
						<input type="file" name="file" id="fileAvatar" accept="image/*" hidden>
							<a href="#" class="profile-avatar-change">
								<div class="profile-avatar-hint">
									<svg width="24" height="24" class="icon icon-photo">
											<use xlink:href="assets/workber_img/icons.svg#btn-photo"></use>
									</svg>
								<span>Change photo</span>
								</div>
							</a>
					</form>
				</div>
				<div class="profile-userName">
					<h2 id="titleUserName"></h2>
				</div>
				<hr class="divider">
				<ul class="profile-menu">
					<li data-container="profile-settings-main" class="menu-item active">Personal data</li>
					<li data-container="profile-contacts" class="menu-item">Contact information</li>
					<li data-container="profile-hashtags" class="menu-item">Hashtags</li>
					<li data-container="profile-privacy" class="menu-item">Privacy</li>
					<li>
						<hr class="divider">
					</li>
					<li data-container="signout" class="menu-item">
						<div class="profile-signout">
							<svg width="24" height="24" class="icon">
								<use xlink:href="assets/workber_img/icons.svg#btn-signout"></use>
							</svg>
							Sign Out
						</div>
					</li>
					<li data-container="deleteAccount" class="menu-item">
						<div class="profile-signout">
							<svg width="24" height="24" class="icon">
								<use xlink:href="assets/workber_img/icons.svg#btn-close"></use>
							</svg>
							Delete account
						</div>
					</li>
				</ul>
			</div>
		</aside>
		<div class="profile-settings">
			<div class="profile-unit profile-settings-common profile-settings-main">
			</div>
			<div class="profile-unit profile-contacts d-none">
				<section class="profile-top">
					<div class="profile-top-info">
						<span style="color: #9AA0A8;">Contacts templates: <span class="profile-entities" id="contactsTemplatesCount"></span>
						</span>
						<button class="btn__form btn__add-contact btn__add-profile" data-modal="contactModalForm">Add new</button>
					</div>
				</section>
				<section class="profile-item"></section>
			</div>
			<div class="profile-unit profile-settings-common profile-hashtags d-none">
				<section class="profile-top">
					<div class="profile-top-info">
						<span style="color: #9AA0A8;">Hashtags templates: <span class="profile-entities" id="hashtagsTemplatesCount"></span>
						</span>
						<button class="btn__form btn__add-hashtag btn__add-profile" data-modal="hashtagModalForm">Add new</button>
					</div>
				</section>
				<section class="profile-item"></section>
			</div>
			<div class="profile-unit profile-settings-common profile-privacy d-none">
				<section class="profile-personal">
					<form action="#" class="privacyDataForm" id="privacyDataForm">
						<h3 class="profile-h3">Email Notifications</h3>
						<div class="cb-label-form">
							<!-- <div class="nameData__field1"> -->
							<input type="checkbox" name="cbSendEmail" id="cbSendEmail">
							<label for="cbSendEmail">Send me emails</label>
							<!-- </div> -->
						</div>
						<h3 class="profile-h3">Activity</h3>
						<div class="cb-label-form">
							<!-- <div class="nameData__field2"> -->
							<input type="checkbox" name="cbViewContacts" id="cbViewContacts">
							<label for="cbViewContacts">View my contacts</label>
							<!-- </div> -->
						</div>
						${Object(_domManipulation__WEBPACK_IMPORTED_MODULE_2__["renderButtonsFooter"])()}
					</form>
				</section>
			</div>
		</div>
	`;

  const renderModalHashtag = (dataOuterFlag, ...modalOverlayClass) => {
    const modal = document.createElement('div');
    modal.classList.add(...modalOverlayClass);
    modal.innerHTML = `
			<div class="templateModal modalContent">
				<div class="template__header">
					<span class="text-header">
						Add new hashtags template
					</span>
					<span class="menu__close">
						<svg width="24" height="24" class="icon">
							<use xlink:href="assets/workber_img/icons.svg#btn-close"></use>
						</svg>
					</span>
				</div>
				<div class="template__body">
					<form class="modal-form" action="#" method="POST" id="formNewHashtag">
						<input type="hidden" name="call" value="doSetHashtagTemplates">
						<input type="hidden" name="hashtagTemplateList" ${dataOuterFlag}>
						<div class="nameData" style="margin-bottom: 32px;">
							<div class="nameData__field1">
								<label for="templateName">Hashtag template name</label>
								<input type="text" class="input-form" name="templateName" id="templateName" required>
								<p class="errorSignMessage"></p>
							</div>
						</div>
						<div class="nameData-w-100">
							<div class="profileData__field2">
								<label for="hashtagTemplateList">Hashtags list</label>
								<div class="hashtags-list-full input-form" contenteditable="true" id="hashtagTemplateList">
								</div>
							</div>
						</div>
						${Object(_domManipulation__WEBPACK_IMPORTED_MODULE_2__["renderButtonsFooter"])(true)}
					</form>
				</div>
			</div>
		`;
    modal.addEventListener('click', function (e) {
      const target = e.target;

      if (!target.closest('.modalContent') || target.closest('.menu__close')) {
        this.querySelector('form').reset();
        Object(_modal__WEBPACK_IMPORTED_MODULE_3__["closeSignModal"])(this);
      }
    });
    modal.querySelector('form').addEventListener('reset', e => {
      const target = e.target;
      Object(_forms__WEBPACK_IMPORTED_MODULE_5__["hideSignInfo"])(target.querySelector('.errorSignMessage'));
      target.querySelector('#hashtagTemplateList').textContent = '';
    });
    modal.querySelector('form').addEventListener('submit', e => {
      const target = e.target;
      e.preventDefault();
      submitHashtagForm(target, dataOuterFlag, document.querySelector(`.${modalOverlayClass}`));
    });
    return modal;
  };

  const renderModalContact = (dataOuterFlag, ...modalOverlayClass) => {
    const modal = document.createElement('div');
    modal.classList.add(...modalOverlayClass);
    modal.innerHTML = `
			<div class="templateModal modalContent">
				<div class="template__header">
					<span class="text-header">
						Add new contacts template
					</span>
					<span class="menu__close">
						<svg width="24" height="24" class="icon">
							<use xlink:href="assets/workber_img/icons.svg#btn-close"></use>
						</svg>
					</span>
				</div>
				<div class="template__body">
					<form action="#" class="profileDataForm" id="formNewContact">
						<input type="hidden" name="call" value="doSetContactsTemplates">
						<div class="nameData" style="margin-top: 0;">
							<div class="profileData__field1">
								<label for="newContactName">Contacts template name</label>
								<input type="text" class="input-form" name="templateName" id="newContactName" required>
								<p class="errorSignMessage"></p>
							</div>
						</div>
						<div class="nameData">
							<div class="nameData-w-60 profileData__field3">
								<label for="newContactEmail">Email</label>
								<input type="email" class="input-form" name="contact_email" id="newContactEmail">
							</div>
							<div class="nameData-w-30 profileData__field2">
								<label for="newContactPhone">Phone</label>
								<input type="text" class="input-form" name="phone" id="newContactPhone">
							</div>
						</div>
						<div class="nameData">
							<div class="nameData-w-100 profileData__field5">
								<label for="newAddress">Address</label>
								<input type="text" class="input-form" name="address" id="newAddress">
							</div>
						</div>
						${Object(_domManipulation__WEBPACK_IMPORTED_MODULE_2__["renderButtonsFooter"])(true)}
					</form>
				</div>
			</div>
		`;
    modal.addEventListener('click', function (e) {
      const target = e.target;

      if (!target.closest('.modalContent') || target.closest('.menu__close')) {
        this.querySelector('form').reset();
        Object(_modal__WEBPACK_IMPORTED_MODULE_3__["closeSignModal"])(this);
      }
    });
    modal.querySelector('form').addEventListener('reset', e => {
      const target = e.target;
      Object(_forms__WEBPACK_IMPORTED_MODULE_5__["hideSignInfo"])(target.querySelector('.errorSignMessage'));
    });
    modal.querySelector('form').addEventListener('submit', e => {
      const target = e.target;
      e.preventDefault();
      submitContactForm(target, dataOuterFlag, document.querySelector(`.${modalOverlayClass}`));
    });
    return modal;
  };

  const submitHashtagForm = (form, dataOuterFlag, modal = null) => {
    const requestProps = {};
    const formData = new FormData(form); // let call = 'doSetHashtagTemplates';

    let fieldValue = '';

    for (let [key, value] of formData.entries()) {
      fieldValue = value;

      if (form.elements[key].getAttribute('type') === 'hidden' && form.elements[key].getAttribute(dataOuterFlag) !== null) {
        try {
          fieldValue = form.querySelector(`#${key}`).textContent.trim().split(" ").map(item => {
            if (item.substring(0, 1) != '#') {
              item = '#' + item;
            }

            return item;
          }).join(' ');
        } catch (e) {
          if (e instanceof TypeError) {
            console.error(e.message + `, Element ${key} can't find container with data`);
          } else {
            throw e;
          }
        }
      } // if (key === 'id') {
      // 	call = 'doUpdHashtagTemplates';
      // }


      requestProps[key] = fieldValue;
    } // requestProps.call = call;


    if (requestProps.templateName && requestProps.templateName.trim() !== '' && requestProps.hashtagTemplateList.length > 3 && hashtagDataCheckSum !== object_hash__WEBPACK_IMPORTED_MODULE_1___default.a.MD5({
      templateName: requestProps.templateName,
      hashtagTemplateList: requestProps.hashtagTemplateList
    })) {
      Object(_appState__WEBPACK_IMPORTED_MODULE_4__["postAPIRequest"])(requestProps).then(data => {
        Object(_forms__WEBPACK_IMPORTED_MODULE_5__["hideSignInfo"])(form.querySelector('.errorSignMessage'));

        if (data.message == "hashtag list updating error" || data.message == "hashtag list adding error") {
          Object(_forms__WEBPACK_IMPORTED_MODULE_5__["showSignInfo"])(form.querySelector('.errorSignMessage'), data.errors);
          return false;
        }

        Object(_appState__WEBPACK_IMPORTED_MODULE_4__["getTemplate"])('hashtag').then(data => {
          if (modal) {
            modal.querySelector('.menu__close').click();
          }

          localProfile.hashagsList = JSON.parse(JSON.stringify(data.hashtagsList));
          profileProps.hashtags.callback(hashtagsTemplatesCount, hashtagSection, renderHashtagSection, localProfile.hashagsList);
        });
      });
    }
  };

  const submitContactForm = (form, dataOuterFlag, modal = null, hiddenAttrHandler = null) => {
    const requestProps = {};
    const formData = new FormData(form);
    let fieldValue = '';

    for (let [key, value] of formData.entries()) {
      fieldValue = value;

      if (form.elements[key].getAttribute('type') === 'hidden' && form.elements[key].getAttribute(dataOuterFlag) !== null) {
        try {
          fieldValue = form.querySelector(`#${key}`).textContent.trim();

          if (hiddenAttrHandler) {
            fieldValue = hiddenAttrHandler(fieldValue);
          }
        } catch (e) {
          if (e instanceof TypeError) {
            console.error(e.message + `, Element ${key} can't find container with data`);
          } else {
            throw e;
          }
        }
      }

      requestProps[key] = fieldValue;
    }

    if (requestProps.templateName && requestProps.templateName.trim() !== '' && contactDataCheckSum !== object_hash__WEBPACK_IMPORTED_MODULE_1___default.a.MD5({
      templateName: requestProps.templateName,
      contact_email: requestProps.contact_email,
      phone: requestProps.phone,
      address: requestProps.address
    })) {
      Object(_appState__WEBPACK_IMPORTED_MODULE_4__["postAPIRequest"])(requestProps).then(data => {
        Object(_forms__WEBPACK_IMPORTED_MODULE_5__["hideSignInfo"])(form.querySelector('.errorSignMessage'));

        if (data.message == "contact update failed" || data.message == "contact adding error") {
          Object(_forms__WEBPACK_IMPORTED_MODULE_5__["showSignInfo"])(form.querySelector('.errorSignMessage'), data.errors);
          return false;
        }

        Object(_appState__WEBPACK_IMPORTED_MODULE_4__["getTemplate"])('contact').then(data => {
          if (modal) {
            modal.querySelector('.menu__close').click();
          }

          localProfile.contactsList = JSON.parse(JSON.stringify(data.contactsList));
          profileProps.contacts.callback(contactsTemplatesCount, contactSection, renderContactSection, localProfile.contactsList);
        });
      });
    }
  };

  const submitSettingsForm = form => {
    const requestProps = {};
    const formData = new FormData(form);
    let fieldValue = '';

    for (let [key, value] of formData.entries()) {
      fieldValue = value;

      if (form.elements[key].getAttribute('type') === 'hidden' && form.elements[key].getAttribute(dataOuterFlag) !== null) {
        try {
          fieldValue = form.querySelector(`#${key}`).textContent.trim();
        } catch (e) {
          if (e instanceof TypeError) {
            console.error(e.message + `, Element ${key} can't find container with data`);
          } else {
            throw e;
          }
        }
      }

      try {
        if (typeof fieldValue === 'object' && form.elements[key].type === 'file' || fieldValue.trim() !== '') {
          requestProps[key] = fieldValue;
        }
      } catch (e) {}
    }

    if (personalDataCheckSum !== object_hash__WEBPACK_IMPORTED_MODULE_1___default.a.MD5({
      contact_email: requestProps.contact_email,
      contact_phone: requestProps.phone,
      user_name: requestProps.user_name,
      user_descr: requestProps.user_descr
    })) {
      Object(_appState__WEBPACK_IMPORTED_MODULE_4__["postAPIRequest"])(requestProps).then(data => {
        if (data.errors) {// console.log(data.errors);
        } else if (data.code && data.code === 1) {
          if (data.message === "avatar set") {
            localProfile.personalData.user_picture = userAvatar(data.user_picture);
          } else {
            personalDataCheckSum = object_hash__WEBPACK_IMPORTED_MODULE_1___default.a.MD5({
              contact_email: data.profile.contact_email,
              contact_phone: data.profile.contact_phone,
              user_name: data.profile.user_name,
              user_descr: data.profile.user_descr
            });
            localProfile.personalData = JSON.parse(JSON.stringify({
              contact_email: data.profile.contact_email,
              contact_phone: data.profile.contact_phone,
              user_name: data.profile.user_name,
              user_picture: userAvatar(data.profile.user_picture),
              user_descr: data.profile.user_descr,
              email: data.profile.email
            }));
          }

          refreshPersonalForm();
        }
      });
    }
  };

  const renderHashtagForm = dataOuterFlag => {
    const formContainer = document.createElement('div');
    formContainer.classList.add('profile-item-detail', 'border-elements');
    formContainer.insertAdjacentHTML('beforeend', `
			<form action="#" class="hashtagsDataForm" id="hashtagsDataForm">
				<input type="hidden" name="call" value="doUpdHashtagTemplates">
				<input type="hidden" name="id" value="" id="id">
				<input type="hidden" name="hashtagTemplateList" ${dataOuterFlag}>
				<div class="nameData" style="margin-top: 0;">
					<div class="profileData__field1">
						<label for="templateName">Hashtag template name</label>
						<input type="text" class="input-form" name="templateName" id="templateName" value="" required>
						<p class="errorSignMessage"></p>
					</div>
				</div>
				<div class="nameData">
					<div class="profileData__field2">
						<label for="hashtagTemplateList">Hashtags list <span class="editable-elem-chars color-pale">265/300</span></label>
						<div class="hashtags-list-full input-form" contenteditable="true"
							id="hashtagTemplateList">
						</div>
					</div>
				</div>
				${Object(_domManipulation__WEBPACK_IMPORTED_MODULE_2__["renderButtonsFooter"])()}
			</form>
		`);
    return formContainer;
  };

  const renderContactForm = () => {
    const formContainer = document.createElement('div');
    formContainer.classList.add('profile-item-detail', 'border-elements');
    formContainer.insertAdjacentHTML('beforeend', `
			<form action="#" class="profileDataForm" id="profileDataForm">
				<input type="hidden" name="call" value="doUpdContactsTemplates">
				<input type="hidden" name="id" value="" id="contact_id">
				<div class="nameData" style="margin-top: 0;">
					<div class="profileData__field1">
						<label for="contactName">Contacts template name</label>
						<input type="text" class="input-form" name="templateName" id="contactName" required>
						<p class="errorSignMessage"></p>
					</div>
				</div>
				<div class="nameData">
					<div class="nameData-w-60 profileData__field3">
						<label for="contactEmail">Email</label>
						<input type="email" class="input-form" name="contact_email" id="contactEmail">
					</div>
					<div class="nameData-w-30 profileData__field2">
						<label for="contactPhone">Phone</label>
						<input type="text" class="input-form" name="phone" id="contactPhone">
					</div>
				</div>
				<div class="nameData">
					<div class="nameData-w-100 profileData__field5">
						<label for="address">Address</label>
						<input type="text" class="input-form" name="address" id="address">
					</div>
				</div>
				${Object(_domManipulation__WEBPACK_IMPORTED_MODULE_2__["renderButtonsFooter"])()}
			</form>
		`);
    return formContainer;
  };

  const renderPersonalForm = dataOuterFlag => {
    const formContainer = document.createElement('section');
    formContainer.classList.add('profile-personal');
    formContainer.insertAdjacentHTML('beforeend', `
			<h3 class="profile-h3">Personal Data</h3>
			<form action="#" class="personalDataForm" id="personalDataForm" data-batch>
			<input type="hidden" name="call" value="doUpdateProfile">
			<input type="hidden" name="user_descr" ${dataOuterFlag}>
				<div class="nameData">
					<div class="nameData__field1">
						<label for="user_name">Username (required)</label>
						<input type="text" class="input-form" name="user_name" id="user_name" value="" required>
						<p class="errorSignMessage"></p>
					</div>
				</div>
				<div class="nameData">
					<div class="nameData-w-100 nameData__field3">
						<label for="user_descr">Description <span
								class="editable-elem-chars color-pale" id="descriptionCounter"></span></label>
						<div class="profile-description input-form" contenteditable="true" id="user_descr"></div>
					</div>
				</div>
				<div class="nameData">
					<div class="nameData-w-60 nameData__field1">
						<label for="email">Email</label>
						<input type="email" class="input-form" name="email" id="email" disabled>
					</div>
				</div>
				<div class="nameData">
					<div class="nameData__field2">
						<label for="homeLocation">Home location</label>
						<input type="text" class="input-form" name="homeLocation" id="homeLocation">
					</div>
				</div>
				<div class="nameData">
					<div class="nameData-w-60 mr-1 nameData__field1">
						<label for="contact_email">Email (public)</label>
						<input type="email" class="input-form" name="contact_email" id="contact_email" value="">
					</div>
					<div class="nameData-w-30 nameData__field1">
						<label for="phone">Phone (public)</label>
						<input type="text" class="input-form" name="phone" id="phone" value="">
					</div>
				</div>
				${Object(_domManipulation__WEBPACK_IMPORTED_MODULE_2__["renderButtonsFooter"])()}
				<!--<div class="nameData">
					<button type="submit" class="btn__form btn__confirmation">Save Data</button>
				</div>-->
			</form>
			`);
    const userName = formContainer.querySelector('#user_name');

    const hasNameChanged = () => {
      const user_name = userName.value.trim();

      if (localProfile.personalData.user_name !== user_name && user_name !== '') {
        Object(_forms__WEBPACK_IMPORTED_MODULE_5__["hideSignInfo"])(formContainer.querySelector('.errorSignMessage'));
        Object(_appState__WEBPACK_IMPORTED_MODULE_4__["checkUserName"])(user_name).then(data => {
          if (data.message === 'error user_name') {
            Object(_forms__WEBPACK_IMPORTED_MODULE_5__["showSignInfo"])(formContainer.querySelector('.errorSignMessage'), data.errors);
          }
        });
      }
    };

    userName.addEventListener('blur', hasNameChanged);
    return formContainer;
  };

  function renderContactSection(contactsList) {
    const section = document.createElement('div');
    contactsList.forEach(item => {
      const header = `
				<div class="profile-item-wrapper" data-id="${item.id}">
					<div class="profile-item-info border-elements">
						<div class="profile-main-info">
							<div class="profile-name">${item.templateName}</div>
							<div class="profile-phone">${item.phone}</div>
							<div class="profile-address">${item.address}</div>
							<div class="profile-email" style="display:none;">${item.contact_email}</div>
						</div>
						<div class="profile-buttons">
							<a href="#" class="profile-button d-none" data-id="${item.id}" data-default="none" data-delete="contact">
								<svg width="24" height="24" class="icon icon__profile-open">
									<use xlink:href="assets/workber_img/icons.svg#btn-trash"></use>
								</svg>
							</a>
							<a href="#" class="profile-button d-none" data-default="none">
								<svg width="24" height="24" class="icon icon__profile-open">
									<use xlink:href="assets/workber_img/icons.svg#btn-toggleup"></use>
								</svg>
							</a>
							<a href="#" class="profile-button" data-showned="down">
								<svg width="24" height="24" class="icon icon__profile-close">
									<use xlink:href="assets/workber_img/icons.svg#btn-toggledown"></use>
								</svg>
							</a>
						</div>
					</div>
				</dir>
			`;
      section.insertAdjacentHTML('beforeend', header);
    });
    section.querySelectorAll('.profile-buttons').forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        const target = e.target;
        const button = target.closest('.profile-button');
        const parent = target.closest('.profile-item-wrapper');

        if (button) {
          const btnDelete = button.getAttribute('data-delete');

          if (btnDelete !== null) {
            Object(_appState__WEBPACK_IMPORTED_MODULE_4__["deleteTemplate"])(btnDelete, button.dataset.id).then(() => {
              Object(_appState__WEBPACK_IMPORTED_MODULE_4__["getTemplate"])(btnDelete).then(data => {
                localProfile.contactsList = JSON.parse(JSON.stringify(data.contactsList));
                profileProps.contacts.callback(contactsTemplatesCount, contactSection, renderContactSection, localProfile.contactsList);
              });
            });
            return;
          }

          contactForm.remove();
          section.querySelectorAll('.profile-item .profile-item-wrapper').forEach(wrapper => {
            wrapper.querySelectorAll('.profile-buttons a').forEach(item => {
              if (item.dataset.default === 'none') {
                item.classList.add('d-none');
              } else {
                item.classList.remove('d-none');
              }
            });
          });

          if (button.dataset.showned === 'down') {
            parent.append(fillForm(contactForm, [{
              id: '#contact_id',
              inputType: 'value',
              value: parent.dataset['id']
            }, {
              id: '#contactName',
              inputType: 'value',
              value: parent.querySelector('.profile-name').textContent
            }, {
              id: '#contactPhone',
              inputType: 'value',
              value: parent.querySelector('.profile-phone').textContent
            }, {
              id: '#address',
              inputType: 'value',
              value: parent.querySelector('.profile-address').textContent
            }, {
              id: '#contactEmail',
              inputType: 'value',
              value: parent.querySelector('.profile-email').textContent
            }]));
            contactDataCheckSum = object_hash__WEBPACK_IMPORTED_MODULE_1___default.a.MD5({
              templateName: parent.querySelector('.profile-name').textContent,
              contact_email: parent.querySelector('.profile-email').textContent,
              phone: parent.querySelector('.profile-phone').textContent,
              address: parent.querySelector('.profile-address').textContent
            });
            parent.querySelectorAll('.profile-buttons a').forEach(item => {
              item.classList.toggle('d-none');
            });
          } else if (button.dataset.showned === 'up') {
            contactForm.remove();
          }
        }
      });
    });
    return section;
  }

  function renderHashtagSection(hashtagsList) {
    const section = document.createElement('div');
    hashtagsList.forEach(item => {
      const hastagHeader = `
			<div class="profile-item-wrapper" data-id="${item.id}">
				<div class="profile-item-info border-elements">
					<div class="profile-main-info">
						<div class="profile-name">${item.templateName}</div>
						<div class="hashtags-list-cutted d-none">${item.hashtagList}</div>
					</div>
					<div class="profile-buttons">
						<a href="#" data-id="${item.id}" class="profile-button d-none" data-default="none" data-showned="" data-delete="hashtag">
							<svg width="24" height="24" class="icon icon__profile-open">
								<use xlink:href="assets/workber_img/icons.svg#btn-trash"></use>
							</svg>
						</a>
						<a href="#" class="profile-button d-none" data-default="none" data-showned="up">
							<svg width="24" height="24" class="icon icon__profile-open">
								<use xlink:href="assets/workber_img/icons.svg#btn-toggleup"></use>
							</svg>
						</a>
						<a href="#" class="profile-button" data-showned="down">
							<svg width="24" height="24" class="icon icon__profile-close">
								<use xlink:href="assets/workber_img/icons.svg#btn-toggledown"></use>
							</svg>
						</a>
					</div>
				</div>
			</div>
			`;
      section.insertAdjacentHTML('beforeend', hastagHeader);
    });
    section.querySelectorAll('.profile-buttons').forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        const target = e.target;
        const button = target.closest('.profile-button');
        const parent = target.closest('.profile-item-wrapper');

        if (button) {
          const btnDelete = button.getAttribute('data-delete');

          if (btnDelete !== null) {
            Object(_appState__WEBPACK_IMPORTED_MODULE_4__["deleteTemplate"])(btnDelete, button.dataset.id).then(() => {
              Object(_appState__WEBPACK_IMPORTED_MODULE_4__["getTemplate"])(btnDelete).then(data => {
                localProfile.hashagsList = JSON.parse(JSON.stringify(data.hashtagsList));
                profileProps.hashtags.callback(hashtagsTemplatesCount, hashtagSection, renderHashtagSection, localProfile.hashagsList);
              });
            });
            return;
          }

          hashtagForm.remove();
          section.querySelectorAll('.profile-item .profile-item-wrapper').forEach(wrapper => {
            wrapper.querySelectorAll('.profile-buttons a').forEach(item => {
              if (item.dataset.default === 'none') {
                item.classList.add('d-none');
              } else {
                item.classList.remove('d-none');
              }
            });
          });

          if (button.dataset.showned === 'down') {
            parent.append(fillForm(hashtagForm, [{
              id: '#id',
              inputType: 'value',
              value: parent.dataset['id']
            }, {
              id: '#templateName',
              inputType: 'value',
              value: parent.querySelector('.profile-name').textContent
            }, {
              id: '#hashtagTemplateList',
              inputType: 'content',
              value: parent.querySelector('.hashtags-list-cutted').textContent
            }]));
            hashtagDataCheckSum = object_hash__WEBPACK_IMPORTED_MODULE_1___default.a.MD5({
              templateName: parent.querySelector('.profile-name').textContent,
              hashtagTemplateList: parent.querySelector('.hashtags-list-cutted').textContent
            });
            parent.querySelectorAll('.profile-buttons a').forEach(item => {
              item.classList.toggle('d-none');
            });
          } else if (button.dataset.showned === 'up') {
            hashtagForm.remove();
          }
        }
      });
    });
    return section;
  }

  const hashtagForm = renderHashtagForm(dataOuterFlag),
        contactForm = renderContactForm(),
        personalForm = renderPersonalForm(dataOuterFlag);
  const modalForms = {};
  modalForms.hashtagModalForm = renderModalHashtag(dataOuterFlag, 'modal-overlay', 'hashtagModalForm');
  modalForms.contactModalForm = renderModalContact(dataOuterFlag, 'modal-overlay', 'contactModalForm');

  const fillForm = (formContainer, formData) => {
    // console.log(formContainer);
    try {
      formContainer.querySelector('form').reset();
      Object(_forms__WEBPACK_IMPORTED_MODULE_5__["hideSignInfo"])(formContainer.querySelector('form').querySelector('.errorSignMessage'));
    } catch (e) {}

    for (const item of formData) {
      try {
        const formInput = formContainer.querySelector(item.id);

        switch (item.inputType) {
          case 'value':
            formInput.value = item.value;
            break;

          case 'content':
            formInput.textContent = item.value;
            break;
        }
      } catch (e) {}
    }

    return formContainer;
  };

  const refreshPersonalForm = () => {
    personalForm.remove();
    profileContainer.querySelector('#imgAvatar').src = localProfile.personalData.user_picture;
    profileContainer.querySelector('#titleUserName').textContent = localProfile.personalData.user_name;
    profileContainer.querySelector('.profile-settings-main').append(fillForm(personalForm, [{
      id: '#user_name',
      inputType: 'value',
      value: localProfile.personalData.user_name
    }, {
      id: '#user_descr',
      inputType: 'content',
      value: localProfile.personalData.user_descr
    }, {
      id: '#email',
      inputType: 'value',
      value: localProfile.personalData.email
    }, {
      id: '#contact_email',
      inputType: 'value',
      value: localProfile.personalData.contact_email
    }, {
      id: '#phone',
      inputType: 'value',
      value: localProfile.personalData.contact_phone
    }]));
  };

  const hashtagSection = profileContainer.querySelector('.profile-hashtags .profile-item'),
        contactSection = profileContainer.querySelector('.profile-contacts .profile-item'),
        profileAvatar = profileContainer.querySelector('.profile-avatar-change'),
        formSetAvatar = profileContainer.querySelector('#formSetAvatar'),
        hashtagsTemplatesCount = profileContainer.querySelector('#hashtagsTemplatesCount'),
        contactsTemplatesCount = profileContainer.querySelector('#contactsTemplatesCount'),
        fileAvatar = formSetAvatar.querySelector('#fileAvatar');
  refreshPersonalForm();
  profileContainer.querySelectorAll('.btn__add-profile').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const target = e.target;

      if (modalForms[target.dataset['modal']]) {
        document.body.append(modalForms[target.dataset['modal']]);
      }
    });
  });
  hashtagForm.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    submitHashtagForm(e.target, dataOuterFlag);
  });
  contactForm.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    submitContactForm(e.target, dataOuterFlag);
  });
  formSetAvatar.addEventListener('submit', e => {
    e.preventDefault();
    submitSettingsForm(e.target);
  });
  fileAvatar.addEventListener('change', e => {
    formSetAvatar.requestSubmit();
  });
  iconSettings.addEventListener('click', e => {
    e.preventDefault();

    if (!document.body.contains(profileContainer)) {
      Object(_domManipulation__WEBPACK_IMPORTED_MODULE_2__["hidePageElems"])('profile', showControl);
      document.body.append(profileContainer);
      Object(_appState__WEBPACK_IMPORTED_MODULE_4__["URImod"])({
        'page': 'profile'
      });
    }
  });
  profileContainer.querySelectorAll('form').forEach(form => {
    if (form.getAttribute('data-batch') !== null) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        submitSettingsForm(e.target);
      });
    }
  });
  profileAvatar.addEventListener('click', e => {
    e.preventDefault();
    fileAvatar.click();
  });
  profileContainer.querySelector('.profile-menu').addEventListener('click', e => {
    const target = e.target;
    const menuItem = target.closest('.menu-item');

    if (menuItem) {
      try {
        if (menuItem.dataset['container'] === 'signout') {
          Object(_appState__WEBPACK_IMPORTED_MODULE_4__["logout"])().then(() => {
            location.reload();
          });
          return false;
        } else if (menuItem.dataset['container'] === 'deleteAccount') {
          if (confirm('Are you sure? We will send you email with confirmation link')) {
            Object(_appState__WEBPACK_IMPORTED_MODULE_4__["deleteAccount"])();
          }

          return false;
        }

        profileContainer.querySelectorAll('.profile-unit').forEach(item => {
          item.classList.add('d-none');
        });
        profileContainer.querySelector(`.${menuItem.dataset['container']}`).classList.remove('d-none');
        profileProps.hashtags.callback(hashtagsTemplatesCount, hashtagSection, renderHashtagSection, localProfile.hashagsList);
        profileProps.contacts.callback(contactsTemplatesCount, contactSection, renderContactSection, localProfile.contactsList);
        profileContainer.querySelectorAll('.profile-menu>LI').forEach(item => {
          item.classList.remove('active');
        });
        menuItem.classList.add('active');
      } catch (e) {}
    }
  });
  return profileContainer;
};

/***/ }),

/***/ "./src/js/modules/domHelpers.js":
/*!**************************************!*\
  !*** ./src/js/modules/domHelpers.js ***!
  \**************************************/
/*! exports provided: getCurrentPage, cropDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPage", function() { return getCurrentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cropDescription", function() { return cropDescription; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);

const getCurrentPage = servicesSelector => {
  const services = document.querySelectorAll(servicesSelector);

  for (let item of services) {
    if (item.matches('.service-selected')) {
      return item.dataset.service;
    }
  }
};
const cropDescription = (descriptionEl, descriptionCounterEl, maxDescriptionLength) => {
  // descriptionEl.innerText = descriptionEl.innerText.trim().substring(0, maxDescriptionLength);
  descriptionCounterEl.innerText = `${descriptionEl.innerText.length}/${maxDescriptionLength}`;
};

/***/ }),

/***/ "./src/js/modules/domManipulation.js":
/*!*******************************************!*\
  !*** ./src/js/modules/domManipulation.js ***!
  \*******************************************/
/*! exports provided: toggleService, hidePageElems, showPageElems, controlElems, renderButtonsFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleService", function() { return toggleService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hidePageElems", function() { return hidePageElems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPageElems", function() { return showPageElems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controlElems", function() { return controlElems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderButtonsFooter", function() { return renderButtonsFooter; });
const toggleService = (servicesSelector, targetService, className) => {
  const services = document.querySelectorAll(servicesSelector);
  services.forEach(item => {
    // item.classList.remove('service-selected');
    item.classList.remove(className);
  });

  if (!!targetService) {
    // targetService.classList.add('service-selected');
    targetService.classList.add(className);
  }
};
const hidePageElems = (callName, showControl) => {
  showControl[callName].hide.forEach(item => {
    controlElems(item, 'hide');
  });
};
const showPageElems = (callName, showControl) => {
  showControl[callName].show.forEach(item => {
    controlElems(item, 'show');
  });
};
const controlElems = (classElems, todo) => {
  const elems = document.querySelectorAll(`.${classElems}`);
  elems.forEach(item => {
    if (todo === 'hide') {
      // hide elems
      item.classList.add('d-none');
    } else {
      // show elems
      item.classList.remove('d-none');
    }
  });
};
const renderButtonsFooter = (renderReset = false) => {
  return `
		<div class="form-profile-footer">
			<button type="submit" class="btn__form btn__confirmation">Save</button>
			${renderReset ? '<button type="reset" class="btn__form btn__confirmation">Cancel</button>' : ''}
		</div>
	`;
};

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: checkPassword, showSignInfo, hideSignInfo, submitSignForm, submitVerifyForm, submitRestoreForm, submitResendForm, submitPasswordForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPassword", function() { return checkPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSignInfo", function() { return showSignInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideSignInfo", function() { return hideSignInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitSignForm", function() { return submitSignForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitVerifyForm", function() { return submitVerifyForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitRestoreForm", function() { return submitRestoreForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitResendForm", function() { return submitResendForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitPasswordForm", function() { return submitPasswordForm; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./network */ "./src/js/modules/network.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/js/modules/config.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/js/modules/storage.js");




const checkPassword = passwords => {
  let errorMessage = '';

  if (passwords.length > 1) {
    errorMessage = 'Passwords do not match';
  } else if (passwords.length == 0) {
    errorMessage = 'No password set';
  }

  return errorMessage;
};
const showSignInfo = (infoContainer, errorMsg) => {
  infoContainer.textContent = '';
  errorMsg.forEach(item => infoContainer.innerHTML += `${Object.values(item).join('<br>')}`);
  infoContainer.classList.remove('d-none');
};
const hideSignInfo = infoContainer => {
  infoContainer.textContent = '';
  infoContainer.classList.add('d-none');
};
const submitSignForm = (form, errorSignSelector, modalSign, modalVerification) => {
  const btnSubmit = document.activeElement;
  const passwords = new Set();
  let errorMsg = '';
  let call = '';
  const formData = new FormData(form);

  for (let [key, value] of formData.entries()) {
    if (form.elements[key].getAttribute('type') === 'password') {
      passwords.add(value);
    }
  }

  errorMsg = checkPassword([...passwords]);

  if (errorMsg !== '') {
    showSignInfo(form.querySelector(errorSignSelector), [{
      error: errorMsg
    }]);
    return false;
  }

  hideSignInfo(form.querySelector(errorSignSelector));

  if (btnSubmit.getAttribute('type') === 'submit') {
    let typeSubmit = btnSubmit.getAttribute('id');

    switch (typeSubmit) {
      case 'btn__sign-up':
        call = 'reg_nu';
        break;

      case 'btn__sign-in':
        call = 'login';
        break;

      default:
        return false;
    }

    formData.append('call', call);
    Object(_network__WEBPACK_IMPORTED_MODULE_1__["sendRequest"])(_config__WEBPACK_IMPORTED_MODULE_2__["workberBackEnd"], formData).then(data => {
      if (data.error) {
        showSignInfo(form.querySelector(errorSignSelector), data.error.errors);
      } else if (data.success) {
        const objData = data.success;

        switch (objData.message) {
          case "user has logined":
            _storage__WEBPACK_IMPORTED_MODULE_3__["storeProfile"](objData.profile, {
              sid: objData.sid,
              refresh_token: objData.refresh_token,
              lifetime: objData.lifetime,
              lat: objData.profile.lat,
              lng: objData.profile.lng
            });
            modalSign.querySelector('.menu__close').dataset.reloadPage = '1';
            modalSign.querySelector('.menu__close').click();
            break;

          case "regNewUser successful":
            modalSign.remove();
            showModalForm([{
              selector: '#email',
              value: objData.user_email
            }, {
              selector: '#code',
              value: ''
            }], modalVerification);
            break;

          default:
            break;
        }
      }
    });
  }
};
const submitVerifyForm = (form, parentContainerClass, errorSignSelector, infoSignSelector, modalContainerNext) => {
  const formData = new FormData(form);
  const parentConatiner = form.closest(`.${parentContainerClass}`);
  hideSignInfo(form.querySelector(errorSignSelector));
  hideSignInfo(form.querySelector(infoSignSelector));
  formData.append('call', 'doCheckEmail');
  Object(_network__WEBPACK_IMPORTED_MODULE_1__["sendRequest"])(_config__WEBPACK_IMPORTED_MODULE_2__["workberBackEnd"], formData).then(data => {
    if (data.error) {
      showSignInfo(form.querySelector(errorSignSelector), data.error.errors);
    } else if (data.success) {
      const objData = data.success;

      if (!objData.sid || objData.sid === "" || objData.sid === 0) {
        showModalForm([{
          selector: '#email',
          value: form.querySelector('#email').value
        }, {
          selector: '#confirmation_token',
          value: objData.confirmation_token
        }], modalContainerNext);
      } else {
        _storage__WEBPACK_IMPORTED_MODULE_3__["storeProfile"](objData.profile, {
          sid: objData.sid,
          refresh_token: objData.refresh_token,
          lifetime: objData.lifetime,
          lat: objData.profile.lat,
          lng: objData.profile.lng
        });
        document.body.append(modalContainerNext);
      }

      parentConatiner.remove();
    }
  });
};
const submitRestoreForm = (form, errorSignSelector, modalRestore, modalVerification) => {
  const formData = new FormData(form);
  hideSignInfo(form.querySelector(errorSignSelector));
  formData.append('call', 'doRestore');
  Object(_network__WEBPACK_IMPORTED_MODULE_1__["sendRequest"])(_config__WEBPACK_IMPORTED_MODULE_2__["workberBackEnd"], formData).then(data => {
    if (data.error) {
      showSignInfo(form.querySelector(errorSignSelector), data.error.errors);
    } else if (data.success) {
      modalRestore.remove();
      showModalForm([{
        selector: '#email',
        value: form.querySelector('#email').value
      }, {
        selector: '#code',
        value: ''
      }, {
        selector: '#typeVerify',
        value: '1'
      }], modalVerification);
    }
  });
};
const submitResendForm = (form, errorSignSelector, infoSignSelector) => {
  const formData = new FormData(form);
  formData.append('call', 'doSendCode');
  hideSignInfo(form.querySelector(errorSignSelector));
  hideSignInfo(form.querySelector(infoSignSelector));
  Object(_network__WEBPACK_IMPORTED_MODULE_1__["sendRequest"])(_config__WEBPACK_IMPORTED_MODULE_2__["workberBackEnd"], formData).then(data => {
    if (data.error) {
      showSignInfo(form.querySelector(errorSignSelector), data.error.errors);
    } else if (data.success) {
      const objData = data.success;
      showSignInfo(form.querySelector(infoSignSelector), [{
        0: 'New code sent'
      }]);
    }
  });
};
const submitPasswordForm = (form, errorSignSelector, modalChangePassword) => {
  let errorMsg = '';
  const passwords = new Set();
  const formData = new FormData(form);

  for (let [key, value] of formData.entries()) {
    if (form.elements[key].getAttribute('type') === 'password') {
      passwords.add(value);
    }
  }

  errorMsg = checkPassword([...passwords]);

  if (errorMsg !== '') {
    showSignInfo(form.querySelector(errorSignSelector), [{
      error: errorMsg
    }]);
    return false;
  }

  hideSignInfo(form.querySelector(errorSignSelector));
  formData.append('call', 'doChangePwd');
  Object(_network__WEBPACK_IMPORTED_MODULE_1__["sendRequest"])(_config__WEBPACK_IMPORTED_MODULE_2__["workberBackEnd"], formData).then(data => {
    if (data.error) {
      showSignInfo(form.querySelector(errorSignSelector), data.error.errors);
    } else if (data.success) {
      const objData = data.success;
      _storage__WEBPACK_IMPORTED_MODULE_3__["storeProfile"](objData.profile, {
        sid: objData.sid,
        refresh_token: objData.refresh_token,
        lifetime: objData.lifetime,
        lat: objData.profile.lat,
        lng: objData.profile.lng
      });
      modalChangePassword.querySelector('.menu__close').click();
    }
  });
};

const showModalForm = (items, container) => {
  items.forEach(item => {
    container.querySelector(item.selector).value = item.value;
  });
  document.body.append(container);
};

/***/ }),

/***/ "./src/js/modules/handlerPostData.js":
/*!*******************************************!*\
  !*** ./src/js/modules/handlerPostData.js ***!
  \*******************************************/
/*! exports provided: createPost, createStartPostFeed, createPostFeed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPost", function() { return createPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStartPostFeed", function() { return createStartPostFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPostFeed", function() { return createPostFeed; });
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__);


const getDefaultContactsData = contactsList => {
  const contactsData = {
    contact_phone: '',
    contact_email: '',
    contact_address: ''
  };

  if (contactsList && typeof contactsList !== 'undefined') {
    let tempContact = contactsList[0];

    if (typeof tempContact === 'undefined') {
      tempContact = contactsList;
    }

    contactsData.contact_phone = tempContact.phone || '';
    contactsData.contact_email = tempContact.contact_email || '';
    contactsData.contact_address = tempContact.address || '';
  }

  return contactsData;
};

const getUserAvatar = (userPicture, userName) => {
  let user_img = null;

  if (userPicture && userPicture != 'null') {
    user_img = `<img src="${userPicture}" alt="Post avatar" class="post-avatar"></img>`;
  } else {
    user_img = `<span class="post-noavatar">${userName.substring(0, 1).toUpperCase()}</span>`;
  }

  return user_img;
};

const createPost = ({
  user_picture,
  user_name,
  collage,
  post_name,
  text_adv,
  likes,
  hashtags,
  city,
  role_ad,
  contactsList
}, isLogined) => {
  let post_img = '';
  let like_selected = '';
  let save_selected = '';
  let icon_selected = '';
  let hide_post_img = 'd-none';
  let hide_more = 'd-none';
  let hashtags_str = '';
  const user_img = getUserAvatar(user_picture, user_name);

  if (collage && collage != 'null') {
    post_img = collage.name;
    hide_post_img = '';
  }

  if (isLogined) {
    like_selected = 'like-selected';
    save_selected = 'save-selected';
    icon_selected = 'icon-selected';
  }

  if (hashtags && hashtags.length > 0) {
    hashtags_str = hashtags.map(hashtag => `<a class="a-hashtag" data-page="${role_ad}" data-hashtag="${hashtag.substring(1)}" href="#" title="Search by hashtag">${hashtag}</a>`).join(' ');
  }

  const {
    contact_phone,
    contact_email,
    contact_address
  } = getDefaultContactsData(contactsList);
  const div = document.createElement('div');
  div.classList.add('post');
  div.innerHTML = `
			<div class="post-body-view">
				<div class="post-image ${hide_post_img}">
					<img src="${post_img}" alt="Post image">
				</div>
				<div class="post-content">
					<div class="post-activities">
						<div class="post-action-group">
							<button disabled class="post-action post-like ${like_selected}">
								<svg width="24" height="24" class="icon ${icon_selected}">
									<use xlink:href="assets/workber_img/icons.svg#btn-like"></use>
								</svg>
								${likes}
							</button>
							<button disabled class="post-action post-save ${save_selected}">
								<svg width="24" height="24" class="icon ${icon_selected}">
									<use xlink:href="assets/workber_img/icons.svg#btn-save"></use>
								</svg>
								SAVE
							</button>
							<button disabled class="post-action post-share">
								<svg width="24" height="24" class="icon">
									<use xlink:href="assets/workber_img/icons.svg#btn-share"></use>
								</svg>
								SHARE
							</button>
						</div>
						<div class="post-more">
							<span class="post-view ${hide_more}">
								<a href="#" class="icon-more">
									<svg width="24" height="24" class="icon">
										<use xlink:href="assets/workber_img/icons.svg#btn-more"></use>
									</svg>
								</a>
							</span>
						</div>
					</div>
					<div class="post-title">
						${post_name}
					</div>
					<div class="post-text">
						${text_adv}
					</div>
					<div class="post-text post-hashtags hashtags-links">
						${hashtags_str}
					</div>
				</div>
				
			</div>
			<div class="post-view-footer">
				<div class="user-data">
					${user_img}
					<div>
						<p class="post-username">${user_name}</p>
						<p class="location-city">${city}</p>
					</div>
				</div>
				<!--<a href="#" class="post-contacts">Show Sontacts</a>-->
				<div class="post-contact-info">
					<p class="post-contact-phone"><a href="tel:${contact_phone.replace(/\+|-|\s|\(|\)/g, '')}">${contact_phone}</a></p>
					<p class="post-contact-email"><a href="mailto:${contact_email}">${contact_email}</a></p>
					<p class="post-contact-address">${contact_address}</p>
				</div>
			</div>
			<div class="post-map-show location" id="post-map-show" >
			</div>
			`;
  return div;
};
const createStartPostFeed = ({
  id,
  user_picture,
  user_name,
  collage,
  post_name,
  text_adv,
  likes,
  role_ad,
  hashtags,
  shortlink,
  dist,
  lat,
  lng,
  city,
  contactsList
}, currentPageName = '') => {
  if (!id) {
    return false;
  }

  let post_img = '';
  let hide_post_img = 'd-none';
  let hide_post_text = 'd-none';
  let serviceClass = 'service-offer';
  let serviceInfo = 'I OFFER';
  const user_img = getUserAvatar(user_picture, user_name);

  if (collage && collage != 'null') {
    post_img = collage.name;
    hide_post_img = '';
  } else {
    // если картинки к посту нет, покажем заголовок и текст
    hide_post_text = '';
    return false;
  }

  if (role_ad === 'project') {
    serviceClass = 'service-need';
    serviceInfo = 'I NEED';
  }

  const {
    contact_phone,
    contact_email,
    contact_address
  } = getDefaultContactsData(contactsList);
  const div = document.createElement('div');
  div.classList.add('post-col', 'new-post');
  div.setAttribute('id', `${currentPageName}_postid_${id}`);
  div.dataset.showPageName = 'showOnePost';
  div.dataset.postid = id;
  hide_post_img = 'd-none'; // hide_post_text = '';

  if (post_img !== '') {
    div.style.background = `no-repeat center/cover url("${post_img}")`;
  }

  div.innerHTML = `
		<div class="user-data d-none" data-avatar="${user_picture}">
			${user_img}
			<span class="post-username">${user_name}</span>
			<p class="location-city">${city}</p>
		</div>
		<div class="d-none post-like">
			${likes}
		</div>
		<div class="post-hashtags d-none" data-hashtags=${JSON.stringify(hashtags)} data-role_ad="${role_ad}">
		</div>
		<div class="${hide_post_img}">
			<a class="post-link " href="${shortlink}" data-postid="${id}">
				<img src="${post_img}" alt="Post image">
			</a>
		</div>
		<div class="post-content" data-dist="${dist}" data-lat="${lat}" data-lng="${lng}">
			<div class="start-post-text ${hide_post_text}">
				<div class="post-title">
					${post_name}
				</div>
				<div class="post-text post-text-preview preview-start">
					${text_adv}
				</div>
			</div>
		</div>
		<div class="post-contact-info d-none">
			<p class="post-contact-phone">${contact_phone}</p>
			<p class="post-contact-email">${contact_email}</p>
			<p class="post-contact-address">${contact_address}</p>
		</div>
		<span class="service-info ${serviceClass}">${serviceInfo}</span>
	`;
  return div;
};
const createPostFeed = ({
  id,
  user_picture,
  user_name,
  collage,
  post_name,
  text_adv,
  likes,
  hashtags,
  shortlink,
  lat,
  lng,
  city,
  role_ad,
  dist,
  contactsList,
  zonesName
}, isLogined, currentPageName = '') => {
  if (!id) {
    return false;
  }

  let post_img = '';
  let like_selected = '';
  let save_selected = '';
  let icon_selected = '';
  let hide_post_img = 'd-none';
  let hashtags_str = '';
  const user_img = getUserAvatar(user_picture, user_name);

  if (collage && collage != 'null') {
    post_img = collage.name;
    hide_post_img = '';
  }

  if (isLogined) {
    like_selected = 'like-selected';
    save_selected = 'save-selected';
    icon_selected = 'icon-selected';
  }

  if (hashtags && hashtags.length > 0) {
    hashtags_str = hashtags.join(' ');
  }

  const {
    contact_phone,
    contact_email,
    contact_address
  } = getDefaultContactsData(contactsList);
  const div = document.createElement('div');
  div.classList.add('post', 'post-feed', 'new-post');
  div.dataset.postid = id;
  div.setAttribute('id', `${currentPageName}_postid_${id}`);
  div.dataset.showPageName = 'showOnePost';
  div.innerHTML = `
			<div class="post-header">
				<div class="user-data" data-avatar="${user_picture}">
					${user_img}
					<div>
						<p class="post-username">${user_name}</p>
						<p class="location-city">${city}</p>
					</div>
				</div>
				<!--<a href="#" class="post-contacts">Show Sontacts</a>-->
				<div class="post-contact-info">
					<p class="post-contact-phone">${contact_phone}</p>
					<p class="post-contact-email">${contact_email}</p>
					<p class="post-contact-address">${contact_address}</p>
				</div>
			</div>
			<div class="post-body">
				<div class="post-image ${hide_post_img}">
					<a class="post-link" href="${shortlink}" data-postid="${id}">
						<img src="${post_img}" alt="Post image">
					</a>
				</div>
				<div class="post-content" data-dist="${dist}" data-lat="${lat}" data-lng="${lng}" data-zones="${zonesName}">
					<div class="post-activities">
						<div class="post-action-group">
							<button disabled class="post-action post-like ${like_selected}">
								<svg width="24" height="24" class="icon ${icon_selected}">
									<use xlink:href="assets/workber_img/icons.svg#btn-like"></use>
								</svg>
								${likes}
							</button>
							<button disabled class="post-action post-save ${save_selected}">
								<svg width="24" height="24" class="icon ${icon_selected}">
									<use xlink:href="assets/workber_img/icons.svg#btn-save"></use>
								</svg>
								SAVE
							</button>
							<button class="post-action post-share new-post-share" data-link="${shortlink}" title="Copy link to post">
								<svg width="24" height="24" class="icon">
									<use xlink:href="assets/workber_img/icons.svg#btn-share"></use>
								</svg>
								SHARE
							</button>
						</div>
						<!--<div class="post-more">
							<span class="post-view">
								<a href="${shortlink}" class="icon-more" data-postid="${id}">
									<svg width="24" height="24" class="icon">
										<use xlink:href="assets/workber_img/icons.svg#btn-more"></use>
									</svg>
								</a>
							</span>
						</div>-->
					</div>
					<div class="post-title">
						${post_name}
					</div>
					<div class="post-text post-text-preview">
						${text_adv}
						<span class="post-text-more d-none">… more</span>
					</div>
					<div class="post-text post-hashtags d-none" data-hashtags=${JSON.stringify(hashtags)} data-role_ad="${role_ad}">
						${hashtags_str}
					</div>
				</div>
			</div>`;
  return div;
};

/***/ }),

/***/ "./src/js/modules/map.js":
/*!*******************************!*\
  !*** ./src/js/modules/map.js ***!
  \*******************************/
/*! exports provided: mapLoader, setPostCoordsMap, setPositionOnMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapLoader", function() { return mapLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPostCoordsMap", function() { return setPostCoordsMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPositionOnMap", function() { return setPositionOnMap; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @googlemaps/js-api-loader */ "./node_modules/@googlemaps/js-api-loader/dist/index.esm.js");


let lat = 43.7181552;
let lng = -79.5184839;
let map, postMap;
let marker;
let geocoder;
const mapLoader = () => {
  const loader = new _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_1__["Loader"]({
    apiKey: "AIzaSyAGnP5m0Jp0I9otFx-pJXAktVQ7DGyrRhY",
    version: "weekly"
  });
  loader.load().then(() => {
    map = new google.maps.Map(document.querySelector("#map"), {
      zoom: 15,
      center: {
        lat: lat,
        lng: lng
      },
      mapTypeControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER
      }
    });
    geocoder = new google.maps.Geocoder();
    const mapInputs = document.createElement("div");
    mapInputs.style.fontSize = "12px";
    mapInputs.style.fontFamily = "'Montserrat', sans-serif";
    mapInputs.style.lineHeight = "16px";
    const inputText = document.createElement("input");
    inputText.type = "text";
    inputText.setAttribute("size", "40");
    inputText.placeholder = "Enter an address in the textbox or click on the map";
    const submitButton = document.createElement("input");
    submitButton.type = "button";
    submitButton.value = "Search";
    submitButton.classList.add("button");
    mapInputs.append(inputText, submitButton);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(mapInputs);
    marker = new google.maps.Marker({
      map
    });
    map.addListener("click", e => {
      geocode({
        location: e.latLng
      });
    });
    submitButton.addEventListener("click", () => geocode({
      address: inputText.value
    }));
    clear();
  });
};
function setPostCoordsMap(postLat, postLng, postCity) {
  let [lat, lng] = [postLat, postLng];
  postMap = new google.maps.Map(document.querySelector("#post-map-show"), {
    zoom: 15,
    mapTypeControl: false,
    rotateControl: false
  });

  if (lat && lng) {
    setMarkerToMap(lat, lng, postMap);
  } else {
    geocoder.geocode({
      address: postCity
    }).then(result => {
      const {
        results
      } = result;
      lat = +results[0].geometry.location.lat().toFixed(5);
      lng = +results[0].geometry.location.lng().toFixed(5);
      setMarkerToMap(lat, lng, postMap);
      return results;
    }).catch(e => {
      alert("Geocode was not successful for the following reason: " + e);
    });
  }
}
const setPositionOnMap = (lat, lng) => {
  setMarkerToMap(lat, lng, map);
};

function clear() {
  marker.setMap(null);
}

function geocode(request) {
  clear();
  geocoder.geocode(request).then(result => {
    const {
      results
    } = result;
    lat = +results[0].geometry.location.lat().toFixed(5);
    lng = +results[0].geometry.location.lng().toFixed(5);
    setLocation(lat, lng); //   map.setCenter(results[0].geometry.location);
    //   marker.setPosition(results[0].geometry.location);
    //   marker.setMap(map);

    setPositionOnMap(lat, lng);
    return results;
  }).catch(e => {
    alert("Geocode was not successful for the following reason: " + e);
  });
}

const setLocation = (lat, lng) => {
  let locationTrue = 0;

  if (!!lat && Math.abs(lat) <= 90) {
    locationTrue++;

    if (!!lng && Math.abs(lng) <= 180) {
      locationTrue++;
    }
  }

  if (locationTrue === 2) {
    localStorage.setItem('lat', lat);
    localStorage.setItem('lng', lng);
  }
};

function setMarkerToMap(postLat, postLng, mapID) {
  const mapLocation = new google.maps.LatLng(postLat, postLng);
  mapID.setCenter(mapLocation);
  marker.setPosition(mapLocation);
  marker.setMap(mapID);
}

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: commonModalOpenClass, modalMap, renderModalSign, closeSignModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonModalOpenClass", function() { return commonModalOpenClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalMap", function() { return modalMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderModalSign", function() { return renderModalSign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSignModal", function() { return closeSignModal; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/js/modules/storage.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ "./src/js/modules/map.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms */ "./src/js/modules/forms.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./src/js/modules/config.js");





const commonModalOpenClass = 'modal-open-class';
const modalMap = (settingsSelector, btnCloseSelector, overlaySelector, overlayOpenClass) => {
  const iconSettings = document.querySelector(settingsSelector);
  const locationBtnClose = document.querySelector(btnCloseSelector);
  const locationOverlay = document.querySelector(overlaySelector);

  const settingsModalOpen = () => {
    const [lat, lng] = Object(_storage__WEBPACK_IMPORTED_MODULE_1__["getLocation"])();
    locationBtnClose.dataset['lat'] = lat;
    locationBtnClose.dataset['lng'] = lng;
    Object(_map__WEBPACK_IMPORTED_MODULE_2__["setPositionOnMap"])(lat, lng);
    locationOverlay.classList.add(overlayOpenClass, commonModalOpenClass);
    disableScroll();
  };

  const settingsModalClose = () => {
    locationOverlay.classList.remove(overlayOpenClass);
    enableScroll();
    const [lat, lng] = Object(_storage__WEBPACK_IMPORTED_MODULE_1__["getLocation"])();

    if (lat !== parseFloat(locationBtnClose.dataset['lat']) || lng !== parseFloat(locationBtnClose.dataset['lng'])) {
      reloadCurrentPage();
    }
  };

  locationOverlay.addEventListener('click', event => {
    const target = event.target;

    if (target.matches(btnCloseSelector) || target.matches(overlaySelector)) {
      settingsModalClose();
    }
  });
  iconSettings.addEventListener('click', settingsModalOpen);
};
const renderModalSign = (modalOverlayClass, settingsSelector) => {
  const iconSettings = document.querySelector(settingsSelector);
  const modalSign = document.createElement('div');
  modalSign.classList.add(modalOverlayClass, commonModalOpenClass);
  modalSign.innerHTML = `
		<div class="signModal">
			<div class="modal-header">
				<span class="menu__sign_">
					<span class="menu__sign-in menu__sign" data-items_show="modal-signin" data-items_hide="modal-signup">Login</span>
					<span class="menu__sign-up menu__sign" data-items_show="modal-signup" data-items_hide="modal-signin">Registration</span>
				</span>
				<span class="menu__close">
					<svg width="24" height="24" class="icon">
						<use xlink:href="assets/workber_img/icons.svg#btn-close"></use>
					</svg>
				</span>
			</div>
			<div class="modal-body">
				<h2 class="modal-signin modal-title">Welcome back!</h2>
				<h2 class="modal-signup modal-title">New user?</h2>
				<form class="modal-form" action="#" method="POST" id="loginForm">
					<input type="email" class="icon__modal icon-email" name="email" id="email" placeholder="Email" required>
					<input type="password" class="icon__modal icon-password" name="pwd" id="" placeholder="Password"
						required>
					<input type="password" class="icon__modal icon-password2 modal-signup" name="password-repeat" id=""
						placeholder="Repeat password" required>
					<div class="modal-signin modal-checkbox">
						<span>
							<input type="checkbox" name="remember" id="cbRemember" class="modal-signin">
							<label for="cbRemember">Remember me</label>
						</span>
						<a href="#" class="modal-sign-forgot">Forgot password?</a>
					</div>
					<div class="modal-signup modal-checkbox">
						<span>
							<input type="checkbox" name="policy-agree" id="cbAgree" class="modal-signup" data-control="btn__sign-up">
							<label for="cbAgree">I agree with the <a href="#" target="_blank">Terms and
									conditions</a> and <a href="#" target="_blank">Privacy policy</a>
							</label>
						</span>
					</div>
					<button type="submit" class="modal-signin btn__sign btn__sign-in" id="btn__sign-in">SIGN IN</button>
					<button type="submit" class="modal-signup btn__sign btn__sign-up" id="btn__sign-up">SIGN UP</button>
					<p class="errorSignMessage"></p>
					<input type="hidden" name="registrationID" id="registrationID" value=${_config__WEBPACK_IMPORTED_MODULE_4__["registrationID"]}>
				</form>
			</div>
			<div class="modal-footer">
				<p class="login-social">Or sign in via</p>
				<div class="social-buttons">
					<svg width="36" height="36" class="icon">
						<use xlink:href="assets/workber_img/icons.svg#btn-facebook"></use>
					</svg>
					<svg width="36" height="36" class="icon">
						<use xlink:href="assets/workber_img/icons.svg#btn-twitter"></use>
					</svg>
					<svg width="36" height="36" class="icon">
						<use xlink:href="assets/workber_img/icons.svg#btn-google"></use>
					</svg>
				</div>
			</div>
		</div>
	`;

  const renderModalVerification = modalOverlayClass => {
    const modalVerification = document.createElement('div');
    modalVerification.classList.add(modalOverlayClass, commonModalOpenClass);
    modalVerification.innerHTML = `
			<div class="signModal">
				<div class="modal-header">
					<div class="back-menu">
						<a href="#" class="navigation-link back-feed">
							<svg width="25" height="24" class="icon">
								<use xlink:href="assets/workber_img/icons.svg#btn-back"></use>
							</svg>
							<span class="text-back">
								BACK
							</span>
						</a>
					</div>
					<span class="menu__close">
						<svg width="24" height="24" class="icon">
							<use xlink:href="assets/workber_img/icons.svg#btn-close"></use>
						</svg>
					</span>
				</div>
				<div class="modal-body">
					<h2 class="modal-signin modal-title">Thank you!</h2>
					<p class="success-reg">An email was sent to your address containing verification code.<br>
					Please, enter your verification code</p>
					<form id="verificationForm">
						<label for="code" style="font-size: 12px;color: #9AA0A8;">Verification code</label>
						<input type="text" class="input-form" maxlength="10" name="code" id="code" autocomplete="off">
						<p class="errorSignMessage"></p>
						<div style="margin-top:32px;color: #9AA0A8;">
							<span>Haven't received code?</span>
							<a href="#" class="a-resend">Resend</a>
						</div>
						<p class="infoSignMessage"></p>
						<button type="submit" class="modal-signin btn__sign btn__confirmation">Continue</button>
						<input type="hidden" name="registrationID" id="registrationID" value=${_config__WEBPACK_IMPORTED_MODULE_4__["registrationID"]}>
						<input type="hidden" name="email" id="email">
						<input type="hidden" name="typeVerify" id="typeVerify" value="0" disabled>
					</form>
				</div>
			</div>
		`;
    const verificationForm = modalVerification.querySelector('#verificationForm'),
          resendCode = verificationForm.querySelector('.a-resend');
    verificationForm.addEventListener('submit', e => {
      e.preventDefault();

      if (verificationForm.querySelector('#typeVerify').value === '1') {
        Object(_forms__WEBPACK_IMPORTED_MODULE_3__["submitVerifyForm"])(e.target, modalOverlayClass, '.errorSignMessage', '.infoSignMessage', modalChangePassword);
      } else {
        Object(_forms__WEBPACK_IMPORTED_MODULE_3__["submitVerifyForm"])(e.target, modalOverlayClass, '.errorSignMessage', '.infoSignMessage', modalCongratulation);
      }
    });
    verificationForm.addEventListener('reset', () => {// hideSignInfo(loginForm.querySelector('.errorSignMessage'));
    });
    resendCode.addEventListener('click', e => {
      e.preventDefault();
      Object(_forms__WEBPACK_IMPORTED_MODULE_3__["submitResendForm"])(e.target.closest('form'), '.errorSignMessage', '.infoSignMessage');
    });
    modalVerification.addEventListener('click', e => {
      const target = e.target;

      if (!target.closest('.signModal') || target.closest('.menu__close')) {
        closeSignModal(modalVerification);
      }
    });
    return modalVerification;
  };

  const renderModalCongratulation = modalOverlayClass => {
    const modalCongratulation = document.createElement('div');
    modalCongratulation.classList.add(modalOverlayClass, commonModalOpenClass);
    modalCongratulation.innerHTML = `
			<div class="signModal">
				<div class="modal-header justify-end">
					<span class="menu__close">
						<svg width="24" height="24" class="icon">
							<use xlink:href="assets/workber_img/icons.svg#btn-close"></use>
						</svg>
					</span>
				</div>
				<div class="modal-body">
					<h2 class="modal-signin modal-title">Congratulations! You have
					successfully registered!</h2>
					<p class="descr-mobile-store">Download the Workber app to your device to find all services<br> and projects around you</p>
					<div class="store-links">
						<a href="${_config__WEBPACK_IMPORTED_MODULE_4__["storeLinks"].appStore}" target="_blank" class="mobile-store-link"><img src="assets/workber_img/appstore.png" alt="App Store"></a>
						<a href=${_config__WEBPACK_IMPORTED_MODULE_4__["storeLinks"].goolePlay} target="_blank" class="mobile-store-link"><img src="assets/workber_img/googleplay.png" alt="Goolge Play"></a>
					</div>
				</div>
			</div>
		`;
    modalCongratulation.addEventListener('click', e => {
      const target = e.target;

      if (!target.closest('.signModal') || target.closest('.menu__close')) {
        closeSignModal(modalCongratulation);
      }
    });
    return modalCongratulation;
  };

  const renderModalRestore = modalOverlayClass => {
    const modalRestore = document.createElement('div');
    modalRestore.classList.add(modalOverlayClass, commonModalOpenClass);
    modalRestore.innerHTML = `
			<div class="signModal">
				<div class="modal-header">
					<div class="back-menu">
							<a href="#" class="navigation-link back-feed">
								<svg width="25" height="24" class="icon">
									<use xlink:href="assets/workber_img/icons.svg#btn-back"></use>
								</svg>
								<span class="text-back">
									BACK
								</span>
							</a>
					</div>
					<span class="menu__close">
						<svg width="24" height="24" class="icon">
							<use xlink:href="assets/workber_img/icons.svg#btn-close"></use>
						</svg>
					</span>
				</div>
				<div class="modal-body">
					<h2 class="modal-signin modal-title">Forgot password?</h2>
					<p style="margin-bottom: 32px;">We will send an email with password change instruction.</p>
					<form id="restoreForm">
						<input type="email" class="icon__modal icon-email" name="email" id="email" placeholder="Please enter your email address" style="margin-bottom: 32px;"
							required>
						<p class="errorSignMessage"></p>
						<input type="hidden" name="restoreID" id="restoreID" value=${_config__WEBPACK_IMPORTED_MODULE_4__["registrationID"]}>
						<button type="submit" class="modal-signin btn__sign btn__restore">Send</button>
					</form>
				</div>
			</div>
		`;
    const restoreForm = modalRestore.querySelector('#restoreForm');
    modalRestore.addEventListener('click', e => {
      const target = e.target;

      if (!target.closest('.signModal') || target.closest('.menu__close')) {
        closeSignModal(modalRestore);
      }
    });
    modalRestore.querySelector('.back-feed').addEventListener('click', e => {
      e.preventDefault();
      closeSignModal(modalRestore);
      document.body.append(modalSign);
      disableScroll();
    });
    restoreForm.addEventListener('submit', e => {
      e.preventDefault();
      Object(_forms__WEBPACK_IMPORTED_MODULE_3__["submitRestoreForm"])(e.target, '.errorSignMessage', modalRestore, modalVerification);
    });
    return modalRestore;
  };

  const renderModalChangePassword = modalOverlayClass => {
    const modalChangePassword = document.createElement('div');
    modalChangePassword.classList.add(modalOverlayClass, commonModalOpenClass);
    modalChangePassword.innerHTML = `
			<div class="signModal">
				<div class="modal-header justify-end">
					<span class="menu__close">
						<svg width="24" height="24" class="icon">
							<use xlink:href="assets/workber_img/icons.svg#btn-close"></use>
						</svg>
					</span>
				</div>
				<div class="modal-body">
					<h2 class="modal-title">Set password</h2>
					<p style="margin-bottom: 32px;">Please, choose your password.</p>
					<form id="changePasswordForm">
						<input type="password" class="icon__modal icon-password" name="pwd" id="" placeholder="Password" style="margin-bottom: 32px;" required>
						<input type="password" class="icon__modal icon-password2" name="password-repeat" id=""	placeholder="Repeat password" style="margin-bottom: 32px;" required>
						<p class="errorSignMessage"></p>
						<input type="hidden" name="email" id="email">
						<input type="hidden" name="confirmation_token" id="confirmation_token">
						<button type="submit" class="btn__sign btn__confirmation">Done</button>
					</form>
				</div>
			</div>
		`;
    const changePasswordForm = modalChangePassword.querySelector('#changePasswordForm');
    modalChangePassword.addEventListener('click', e => {
      const target = e.target;

      if (!target.closest('.signModal') || target.closest('.menu__close')) {
        closeSignModal(modalChangePassword);
      }
    });
    changePasswordForm.addEventListener('submit', e => {
      e.preventDefault();
      Object(_forms__WEBPACK_IMPORTED_MODULE_3__["submitPasswordForm"])(e.target, '.errorSignMessage', modalChangePassword);
    });
    return modalChangePassword;
  };

  const switchMenu = e => {
    const target = e.target;

    if (target.classList.contains('menu__sign')) {
      if (target.classList.contains('menu__sign-in')) {
        switchSignMethod(modalSign, '.menu__sign-in');
      } else {
        switchSignMethod(modalSign, '.menu__sign-up');
      }
    }
  };

  const switchSignMethod = (container, showSelector) => {
    const menuItemShow = container.querySelector(showSelector);
    container.querySelectorAll('.menu__sign').forEach(item => {
      item.classList.remove('active');
    });
    menuItemShow.classList.add('active');
    container.querySelectorAll(`.${menuItemShow.dataset['items_show']}`).forEach(item => {
      item.style.display = '';
      item.removeAttribute('disabled', '');
    });
    container.querySelectorAll(`.${menuItemShow.dataset['items_hide']}`).forEach(item => {
      item.style.display = 'none';
      item.setAttribute('disabled', '');
    });
    toggleStatusElem(loginForm.querySelector(`#${loginForm.elements['policy-agree'].dataset['control']}`), loginForm.elements['policy-agree'].checked);
  };

  const loginForm = modalSign.querySelector('#loginForm'),
        forgotPassword = loginForm.querySelector('.modal-sign-forgot');
  const modalVerification = renderModalVerification(modalOverlayClass),
        modalCongratulation = renderModalCongratulation(modalOverlayClass),
        modalRestore = renderModalRestore(modalOverlayClass),
        modalChangePassword = renderModalChangePassword(modalOverlayClass);
  modalSign.addEventListener('click', e => {
    const target = e.target;

    if (!target.closest('.signModal') || target.closest('.menu__close')) {
      closeSignModal(modalSign);

      if (modalSign.querySelector('.menu__close').dataset.reloadPage === '1') {
        location.reload();
      }
    }
  });
  modalSign.querySelector('.modal-header').addEventListener('click', switchMenu);
  iconSettings.addEventListener('click', () => {
    switchSignMethod(modalSign, '.menu__sign-in');
    modalSign.querySelector('.menu__close').dataset.reloadPage = '';
    document.body.append(modalSign);
    loginForm.reset();
    disableScroll();
  });
  loginForm.elements['policy-agree'].addEventListener('click', e => {
    const target = e.target;
    toggleStatusElem(loginForm.querySelector(`#${target.dataset['control']}`), target.checked);
  });
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    Object(_forms__WEBPACK_IMPORTED_MODULE_3__["submitSignForm"])(e.target, '.errorSignMessage', modalSign, modalVerification);
  });
  loginForm.addEventListener('reset', () => {
    Object(_forms__WEBPACK_IMPORTED_MODULE_3__["hideSignInfo"])(loginForm.querySelector('.errorSignMessage'));
  });
  forgotPassword.addEventListener('click', e => {
    e.preventDefault();
    const email = forgotPassword.closest('form').querySelector('#email');

    if (email) {
      modalRestore.querySelector('#email').value = email.value;
    }

    document.body.append(modalRestore);
    closeSignModal(modalSign);
    disableScroll();
  });

  const toggleStatusElem = (elem, cbState) => {
    try {
      if (cbState === true) {
        elem.removeAttribute('disabled');
      } else {
        elem.setAttribute('disabled', '');
      }
    } catch (e) {}
  };
};
const closeSignModal = container => {
  container.remove();
  enableScroll();
}; // export const renderModalDeleteAccount = () => {
// 	const modal = document.createElement('div');
// 	modal.classList.add(modalOverlayClass);
// 	modal.innerHTML = `
// 		<div class="signModal">
// 			<div class="modal-header justify-end">
// 				<span class="menu__close">
// 					<svg width="24" height="24" class="icon">
// 						<use xlink:href="assets/workber_img/icons.svg#btn-close"></use>
// 					</svg>
// 				</span>
// 			</div>
// 			<div class="modal-body">
// 				<h2 class="modal-title">Delete account</h2>
// 				<p style="margin-bottom: 32px;">Please, choose your password.</p>
// 				<form id="deleteAccountForm">
// 					<button type="submit" class="btn__sign btn__confirmation">Done</button>
// 				</form>
// 			</div>
// 		</div>
// 	`;
// 	const changePasswordForm = modalChangePassword.querySelector('#changePasswordForm');
// 	modalChangePassword.addEventListener('click', (e) => {
// 		const target = e.target;
// 		if (!target.closest('.signModal') || target.closest('.menu__close')) {
// 			closeSignModal(modalChangePassword);
// 		}
// 	});
// };

const disableScroll = () => {
  const widthScroll = window.innerWidth - document.body.offsetWidth;
  document.body.dbScrollY = window.scrollY;
  document.body.style.cssText = `
		position: fixed;
		top: ${-window.scrollY}px;
		left: 0;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		padding-right: ${widthScroll}px;
	`;
};

const enableScroll = () => {
  document.body.style.cssText = '';
  window.scroll({
    top: document.body.dbScrollY
  });
};

/***/ }),

/***/ "./src/js/modules/network.js":
/*!***********************************!*\
  !*** ./src/js/modules/network.js ***!
  \***********************************/
/*! exports provided: sendRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendRequest", function() { return sendRequest; });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/js/modules/storage.js");

async function sendRequest(url, body) {
  const requestOptions = {
    method: 'POST',
    body: body
  };
  const response = await fetch(url, requestOptions);

  if (response.ok) {
    const data = await response.json();

    if (data.success && data.success.sid) {
      _storage__WEBPACK_IMPORTED_MODULE_0__["setGlobalItem"]({
        'sid': data.success.sid
      });
    } else if (data.error && data.error.sid) {
      _storage__WEBPACK_IMPORTED_MODULE_0__["setGlobalItem"]({
        'sid': data.error.sid
      });
    }

    return data;
  } else if (response.status === 401) {
    return 401;
  } else {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }
}
;

/***/ }),

/***/ "./src/js/modules/requests.js":
/*!************************************!*\
  !*** ./src/js/modules/requests.js ***!
  \************************************/
/*! exports provided: createRequestParams, sendGetRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRequestParams", function() { return createRequestParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendGetRequest", function() { return sendGetRequest; });
/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network */ "./src/js/modules/network.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/js/modules/config.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/js/modules/storage.js");



const createRequestParams = (callName, originParams, priorParams) => {
  let call = 0;
  const params = {}; // originParam

  params['currentPageName'] = callName;

  if (originParams) {
    // apply priorParams first
    for (let item in priorParams) {
      if (!!priorParams[item]) {
        params[item] = priorParams[item];
      }
    }

    for (let item in originParams) {
      if (item == 'call') {
        call = originParams[item];
        continue;
      }

      if (originParams[item] !== null && !params[item]) {
        params[item] = originParams[item];
      }
    }
  }

  if (call !== 0) {
    return {
      'call': call,
      params
    };
  }

  return false;
};
const sendGetRequest = async (requestProps, tokensPair = null) => {
  const formData = new FormData();

  for (const prop in requestProps) {
    formData.append(prop, requestProps[prop]);
  }

  const data = await Object(_network__WEBPACK_IMPORTED_MODULE_0__["sendRequest"])(_config__WEBPACK_IMPORTED_MODULE_1__["workberBackEnd"], formData).then(async data => {
    if (data === 401) {
      if (tokensPair) {
        const token = tokensPair.token;
        const refreshToken = tokensPair.refreshToken;

        if (refreshToken && refreshToken != '') {
          const data = await refreshTokens(token, refreshToken).then(async objData => {
            if (objData !== false) {
              _storage__WEBPACK_IMPORTED_MODULE_2__["setGlobalItem"]({
                sid: objData.sid,
                refresh_token: objData.refresh_token,
                lifetime: objData.lifetime
              });
              formData.set('token', objData.sid);
              const data = await Object(_network__WEBPACK_IMPORTED_MODULE_0__["sendRequest"])(_config__WEBPACK_IMPORTED_MODULE_1__["workberBackEnd"], formData);

              if (data.error) {
                // throw new Error(JSON.stringify(data.error));
                return data.error;
              } else if (data.success) {
                return data.success;
              }

              return false;
            }

            return false;
          });
          return data;
        }
      }

      return 401;
    }

    if (data.error) {
      // throw new Error(JSON.stringify(data.error));
      return data.error;
    } else if (data.success) {
      return data.success;
    }

    return false;
  }).catch(error => {
    console.error(error);
    return false;
  });
  return data;
};

const refreshTokens = async (token, refreshToken) => {
  const data = await sendGetRequest({
    call: 'doRefreshTokens',
    token: token,
    refresh_token: refreshToken
  }, null);
  return data;
};

/***/ }),

/***/ "./src/js/modules/storage.js":
/*!***********************************!*\
  !*** ./src/js/modules/storage.js ***!
  \***********************************/
/*! exports provided: getLocation, storeProfile, setGlobalItem, getGlobalItem, removeGlobalItem, removeLocalLoginInfo, getLocalityStatus, iniBrowserLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeProfile", function() { return storeProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGlobalItem", function() { return setGlobalItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalItem", function() { return getGlobalItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeGlobalItem", function() { return removeGlobalItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLocalLoginInfo", function() { return removeLocalLoginInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocalityStatus", function() { return getLocalityStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iniBrowserLocation", function() { return iniBrowserLocation; });
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.clonedeep */ "./node_modules/lodash.clonedeep/index.js");
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _appState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appState */ "./src/js/modules/appState.js");


const getLocation = () => {
  const lat = parseFloat(localStorage.getItem('lat'));
  const lng = parseFloat(localStorage.getItem('lng'));
  return [lat, lng];
};
const storeProfile = (profile, localData) => {
  setGlobalItem(localData);
  _appState__WEBPACK_IMPORTED_MODULE_1__["appState"].profile = lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0___default()(profile);
};
const setGlobalItem = (item, packJSON = null) => {
  if (packJSON) {
    localStorage.setItem(packJSON, JSON.stringify(item));
  } else {
    for (const key in item) {
      localStorage.setItem(key, item[key]);
    }
  }
};
const getGlobalItem = itemKey => localStorage.getItem(itemKey);
const removeGlobalItem = itemsArr => {
  itemsArr.forEach(item => {
    localStorage.removeItem(item);
  });
};
const removeLocalLoginInfo = () => {
  removeGlobalItem(['refresh_token', 'sid', 'lifetime', 'lat', 'lng']);
};
const getLocalityStatus = () => {
  const localityStatus = localStorage.getItem('localityStatus');

  if (!!localityStatus && localityStatus === 'locality-home') {
    return 'locality-home';
  } else {
    return 'locality-local';
  }
};
const iniBrowserLocation = () => {
  if (navigator.geolocation && !(getGlobalItem('lat') && getGlobalItem('lng'))) {
    navigator.geolocation.getCurrentPosition(success);
  }

  function success(position) {
    setGlobalItem({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    });
  }
};

/***/ })

/******/ });
//# sourceMappingURL=script.js.map