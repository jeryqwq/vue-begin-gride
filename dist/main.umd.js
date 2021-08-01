(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["main"] = factory();
	else
		root["main"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "428f");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0746":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "0a5c":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "0b08":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("eb62");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "0d74":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("8752");
var toObject = __webpack_require__("9807");
var toLength = __webpack_require__("94dd");
var toInteger = __webpack_require__("f602");
var advanceStringIndex = __webpack_require__("39b3");
var regExpExec = __webpack_require__("0b08");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("d50f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
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
    return $replace.call(replacement, symbols, function (match, ch) {
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

/***/ "0ea8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("0746");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "16a3":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "16eb":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("afca");
var createDesc = __webpack_require__("afa2");
var toIObject = __webpack_require__("18de");
var toPrimitive = __webpack_require__("0ea8");
var has = __webpack_require__("75b9");
var IE8_DOM_DEFINE = __webpack_require__("3e86");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("3cdf") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "18de":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("d2a9");
var defined = __webpack_require__("5c8d");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "22a5":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("9cc0");
var hide = __webpack_require__("317e");
var has = __webpack_require__("75b9");
var SRC = __webpack_require__("2ef6")('src');
var $toString = __webpack_require__("2921");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("5d07").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "25a2":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("18de");
var toLength = __webpack_require__("94dd");
var toAbsoluteIndex = __webpack_require__("a165");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
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
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "2921":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("e036")('native-function-to-string', Function.toString);


/***/ }),

/***/ "2ef6":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "317e":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("4318");
var createDesc = __webpack_require__("afa2");
module.exports = __webpack_require__("3cdf") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "3235":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("0746");
var document = __webpack_require__("9cc0").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "37e2":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("9cc0");
var core = __webpack_require__("5d07");
var hide = __webpack_require__("317e");
var redefine = __webpack_require__("22a5");
var ctx = __webpack_require__("e628");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "39b3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("e006")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "3c2f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("9cc0");
var has = __webpack_require__("75b9");
var cof = __webpack_require__("4a0f");
var inheritIfRequired = __webpack_require__("63df");
var toPrimitive = __webpack_require__("0ea8");
var fails = __webpack_require__("c151");
var gOPN = __webpack_require__("68d4").f;
var gOPD = __webpack_require__("16eb").f;
var dP = __webpack_require__("4318").f;
var $trim = __webpack_require__("bdea").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("ef4d")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("3cdf") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("22a5")(global, NUMBER, $Number);
}


/***/ }),

/***/ "3c67":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("9cc0").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "3cdf":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("c151")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "3e86":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("3cdf") && !__webpack_require__("c151")(function () {
  return Object.defineProperty(__webpack_require__("3235")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "428f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/apple/.nvm/versions/node/v12.16.1/lib/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("988a")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: /Users/apple/.nvm/versions/node/v12.16.1/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"63a234b2-vue-loader-template"}!/Users/apple/.nvm/versions/node/v12.16.1/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/apple/.nvm/versions/node/v12.16.1/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/apple/.nvm/versions/node/v12.16.1/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/BeginGride.vue?vue&type=template&id=3b85eb85&
var BeginGridevue_type_template_id_3b85eb85_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.curIdx < _vm.lists.length)?_c('svg',{staticStyle:{"position":"fixed","left":"0","top":"0","z-index":"999","min-width":"100vw","min-height":"100vh"}},[_vm._l((_vm.lists || []),function(item,idx){return _c('BorderRect',{key:idx,attrs:{"idx":idx,"item":item,"curIdx":_vm.curIdx,"incrment":_vm.incrment,"opacity":_vm.opacity,"len":_vm.lists.length},on:{"neverOpenHandler":_vm.neverOpenHandler}})}),_c('Point',{attrs:{"len":_vm.lists.length,"curIdx":_vm.curIdx,"incrment":_vm.incrment}})],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/BeginGride.vue?vue&type=template&id=3b85eb85&

// EXTERNAL MODULE: /Users/apple/.nvm/versions/node/v12.16.1/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("3c2f");

// EXTERNAL MODULE: /Users/apple/.nvm/versions/node/v12.16.1/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("0d74");

// CONCATENATED MODULE: ./src/rect.js


var defaultWrapStyle = "color:white;border-radius: 20px;border:dashed 2px white;display: inline-block;padding:10px";
var lineStyle = "stroke-dasharray: 5px 5px;stroke-width:2px";
/* harmony default export */ var rect = ({
  props: ["item", "len", "curIdx", "idx", "incrment", "opacity"],
  data: function data() {
    return {
      position: {
        left: 200,
        top: 200,
        height: 200,
        width: 200
      },
      scrollTop: 0,
      scrollLeft: 0,
      wrapHeight: 0,
      offsetPoint: {
        x: 0,
        y: 0
      }
    };
  },
  mounted: function mounted() {
    var _this$item$el$getClie = this.item.el.getClientRects()[0],
        left = _this$item$el$getClie.left,
        top = _this$item$el$getClie.top,
        width = _this$item$el$getClie.width,
        height = _this$item$el$getClie.height;
    this.position = {
      left: left,
      top: top,
      width: width,
      height: height
    };
    window.addEventListener("scroll", this.autoScroll);
  },
  destroyed: function destroyed() {
    window.removeEventListener("scroll", this.autoScroll);
  },
  methods: {
    autoScroll: function autoScroll(e) {
      var _this = this;

      window.requestAnimationFrame(function () {
        _this.scrollTop = e.target.scrollingElement.scrollTop;
        _this.scrollLeft = e.target.scrollingElement.scrollLeft;
      });
    },
    neverAlert: function neverAlert(e) {
      e.stopPropagation();
    },
    handleChange: function handleChange(e) {
      this.$emit('neverOpenHandler', e.target.checked);

      if (e.target.checked) {
        window.localStorage.setItem("isfingerPoint", "true");
      } else {
        window.localStorage.setItem("isfingerPoint", "false");
      }
    }
  },
  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    var _this$position = this.position,
        height = _this$position.height,
        left = _this$position.left,
        top = _this$position.top;
    top -= this.scrollTop;
    left -= this.scrollLeft;
    var _this$offsetPoint = this.offsetPoint,
        x = _this$offsetPoint.x,
        y = _this$offsetPoint.y;
    return this.curIdx === this.idx && h("g", [h("path", {
      "attrs": {
        "d": this.path,
        "fill": "rgba(0,0,0,".concat(this.opacity ? this.opacity : 0.3)
      }
    }), h("path", {
      "attrs": {
        "d": "M \n            ".concat(left - 20, " ").concat(top + height / 2, "  \n            Q ").concat(left - 80 + y, " ").concat(top + height / 2 + x, "\n            ").concat(left - 10 + y, " ").concat(top + height + this.wrapHeight + x, "\n            "),
        "stroke": "white",
        "fill": "none"
      },
      "style": this.item.lineStyle ? this.item.lineStyle : lineStyle
    }), h("foreignObject", {
      "attrs": {
        "x": this.wrapPosition.left + y,
        "y": this.wrapPosition.top + x,
        "width": this.wrapPosition.width,
        "height": this.wrapPosition.height
      },
      "style": "color:white",
      "key": "item".concat(this.curIdx)
    }, [h("div", {
      "style": this.item.style ? this.item.style : defaultWrapStyle,
      "ref": "innerContent"
    }, [typeof this.item.text === "function" ? this.item.text() : this.item.text, h("br"), this.len - 1 === this.curIdx && h("label", {
      "on": {
        "click": this.neverAlert
      },
      "style": "color:white;font-size:14px;line-height:30px"
    }, [h("input", {
      "attrs": {
        "type": "checkbox",
        "select": true
      },
      "style": "vertical-align: middle;",
      "on": {
        "change": this.handleChange
      },
      "ref": "checkbox"
    }), "\u4E0B\u6B21\u4E0D\u518D\u63D0\u793A"])]), h("span", {
      "on": {
        "click": function click() {
          return _this2.incrment(_this2.curIdx + 1);
        }
      },
      "style": "float:right;margin:10px;border:solid 1px white;padding:8px;border-radius:5px;cursor:pointer"
    }, [this.len - 1 === this.curIdx ? "完成" : "下一步"])])]);
  },
  computed: {
    wrapPosition: function wrapPosition() {
      var _this3 = this;

      var _this$position2 = this.position,
          top = _this$position2.top,
          left = _this$position2.left;
      this.$nextTick().then(function () {
        var el = _this3.$refs["innerContent"];
        el && (_this3.wrapHeight = el.offsetHeight);
      });
      left -= this.scrollLeft;
      top -= this.scrollTop;
      var foreignPosition = {
        left: left,
        top: top + this.position.height + 60,
        width: this.item.width ? Number(this.item.width.replace("px", "")) : Number(this.position.width),
        height: this.wrapHeight + 60
      };
      foreignPosition["bottom"] = foreignPosition.top + foreignPosition.height;
      foreignPosition["right"] = foreignPosition.left + foreignPosition.width;

      if (foreignPosition["bottom"] > window.innerHeight && this.scrollTop < this.position.top) {
        this.offsetPoint.x = -(foreignPosition["bottom"] - window.innerHeight);
      }

      if (foreignPosition["right"] > window.innerWidth) {
        this.offsetPoint.y = -(foreignPosition["right"] - window.innerWidth);
      }

      if (this.scrollLeft > this.position.left) {
        this.offsetPoint.y = this.scrollLeft - this.position.left;
      }

      if (this.scrollTop > this.position.top + this.position.height && foreignPosition["bottom"] < window.innerHeight) {
        this.offsetPoint.x = this.scrollTop - this.position.top - this.position.height;
      }

      return foreignPosition;
    },
    path: function path() {
      var _this$position3 = this.position,
          width = _this$position3.width,
          height = _this$position3.height,
          left = _this$position3.left,
          top = _this$position3.top;
      top -= this.scrollTop;
      left -= this.scrollLeft;
      var wwidth = window.innerWidth,
          wheight = window.innerHeight,
          padding = this.item.padding || 10;
      return "\n            M".concat(left - padding, "  ").concat(top + height + padding, ",\n            0 ").concat(wheight, ",\n            ").concat(wwidth, " ").concat(wheight, ",\n            ").concat(wwidth, " 0,\n            0 0,\n            0 ").concat(wheight, ",\n            ").concat(left - padding, "  ").concat(top + height + padding, ",\n            ").concat(left - padding, "  ").concat(top - padding, ",\n            ").concat(left + width + padding, "  ").concat(top - padding, ",\n            ").concat(left + width + padding, "  ").concat(top + height + padding, "\n            Z");
    }
  }
});
// CONCATENATED MODULE: /Users/apple/.nvm/versions/node/v12.16.1/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"63a234b2-vue-loader-template"}!/Users/apple/.nvm/versions/node/v12.16.1/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/apple/.nvm/versions/node/v12.16.1/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/apple/.nvm/versions/node/v12.16.1/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/points.vue?vue&type=template&id=732ec91c&scoped=true&
var pointsvue_type_template_id_732ec91c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('foreignObject',{staticStyle:{"width":"100%","height":"40px"}},[_c('div',{staticClass:"center-point"},_vm._l((new Array(this.len).fill(0)),function(item,idx){return _c('span',{key:idx,class:("item " + (idx === _vm.curIdx && 'cur')),on:{"click":function($event){return _vm.toggleTo(idx)}}})}),0)])}
var pointsvue_type_template_id_732ec91c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/points.vue?vue&type=template&id=732ec91c&scoped=true&

// CONCATENATED MODULE: /Users/apple/.nvm/versions/node/v12.16.1/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/Users/apple/.nvm/versions/node/v12.16.1/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/Users/apple/.nvm/versions/node/v12.16.1/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/apple/.nvm/versions/node/v12.16.1/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/points.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var pointsvue_type_script_lang_js_ = ({
  props: ["len", "curIdx", "incrment"],
  data: function data() {
    return {};
  },
  methods: {
    toggleTo: function toggleTo(idx) {
      this.incrment(idx);
    }
  }
});
// CONCATENATED MODULE: ./src/points.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_pointsvue_type_script_lang_js_ = (pointsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/points.vue?vue&type=style&index=0&id=732ec91c&scoped=true&lang=css&
var pointsvue_type_style_index_0_id_732ec91c_scoped_true_lang_css_ = __webpack_require__("e96a");

// CONCATENATED MODULE: /Users/apple/.nvm/versions/node/v12.16.1/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/points.vue






/* normalize component */

var component = normalizeComponent(
  src_pointsvue_type_script_lang_js_,
  pointsvue_type_template_id_732ec91c_scoped_true_render,
  pointsvue_type_template_id_732ec91c_scoped_true_staticRenderFns,
  false,
  null,
  "732ec91c",
  null
  
)

/* harmony default export */ var points = (component.exports);
// CONCATENATED MODULE: /Users/apple/.nvm/versions/node/v12.16.1/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/Users/apple/.nvm/versions/node/v12.16.1/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/Users/apple/.nvm/versions/node/v12.16.1/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/apple/.nvm/versions/node/v12.16.1/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/BeginGride.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var BeginGridevue_type_script_lang_js_ = ({
  props: {
    lists: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    opacity: {
      type: Number,
      default: 0.4
    },
    neverOpenHandler: {
      type: Function,
      default: function _default() {
        return {};
      }
    }
  },
  components: {
    BorderRect: rect,
    Point: points
  },
  data: function data() {
    return {
      curIdx: 0,
      position: {
        width: 0,
        height: 0
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick().then(function () {
      _this.position = document.documentElement.getClientRects()[0];
    });
  },
  methods: {
    incrment: function incrment(idx) {
      this.curIdx = idx;

      if (idx >= this.lists.length) {
        this.$emit('destory');
      }
    }
  }
});
// CONCATENATED MODULE: ./src/BeginGride.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_BeginGridevue_type_script_lang_js_ = (BeginGridevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/BeginGride.vue





/* normalize component */

var BeginGride_component = normalizeComponent(
  src_BeginGridevue_type_script_lang_js_,
  BeginGridevue_type_template_id_3b85eb85_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BeginGride = (BeginGride_component.exports);
// CONCATENATED MODULE: ./src/index.js

/* harmony default export */ var src = ({
  install: function install(_V) {
    var h = this.$createElement;

    _V.prototype.$guide = function (_ref) {
      var _ref$lists = _ref.lists,
          lists = _ref$lists === void 0 ? [] : _ref$lists,
          _ref$opacity = _ref.opacity,
          opacity = _ref$opacity === void 0 ? 0.7 : _ref$opacity,
          _ref$neverOpenHandler = _ref.neverOpenHandler,
          neverOpenHandler = _ref$neverOpenHandler === void 0 ? function () {} : _ref$neverOpenHandler;
      var isfingerPoint = window.localStorage.getItem("isfingerPoint");
      if (isfingerPoint && isfingerPoint === 'true') return;
      var parent = document.createElement('div');
      var el = document.createElement('div');
      parent.appendChild(el);
      document.body.appendChild(parent);
      var vm = new _V({
        el: el,
        render: function render() {
          var h = arguments[0];
          return h(BeginGride, {
            "attrs": {
              "lists": lists,
              "opacity": opacity,
              "neverOpenHandler": neverOpenHandler
            },
            "on": {
              "destory": destroy
            }
          });
        }
      });

      function destroy() {
        vm.$destroy();
        parent.innerHTML = '';
        document.body.removeChild(parent);
      }

      return {
        vm: vm,
        destroy: destroy
      };
    };
  }
});
// CONCATENATED MODULE: /Users/apple/.nvm/versions/node/v12.16.1/lib/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ }),

/***/ "4318":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("8752");
var IE8_DOM_DEFINE = __webpack_require__("3e86");
var toPrimitive = __webpack_require__("0ea8");
var dP = Object.defineProperty;

exports.f = __webpack_require__("3cdf") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "4a0f":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "4a72":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("8752");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "5c8d":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "5d07":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "63df":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("0746");
var setPrototypeOf = __webpack_require__("96bc").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "64a7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("4a72");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
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
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
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

/***/ "68d4":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("a39c");
var hiddenKeys = __webpack_require__("16a3").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "75b9":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "77dd":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("e036")('keys');
var uid = __webpack_require__("2ef6");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "8752":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("0746");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "8e88":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("a39c");
var enumBugKeys = __webpack_require__("16a3");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "94dd":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("f602");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "96bc":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("0746");
var anObject = __webpack_require__("8752");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("e628")(Function.call, __webpack_require__("16eb").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "9807":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("5c8d");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "988a":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "9cc0":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "a165":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("f602");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "a39c":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("75b9");
var toIObject = __webpack_require__("18de");
var arrayIndexOf = __webpack_require__("25a2")(false);
var IE_PROTO = __webpack_require__("77dd")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "a9e6":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "afa2":
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

/***/ "afca":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "b375":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("4318");
var anObject = __webpack_require__("8752");
var getKeys = __webpack_require__("8e88");

module.exports = __webpack_require__("3cdf") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "bdea":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("37e2");
var defined = __webpack_require__("5c8d");
var fails = __webpack_require__("c151");
var spaces = __webpack_require__("f134");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "c151":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "c200":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("64a7");
__webpack_require__("37e2")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "d2a9":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("4a0f");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "d50f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("c200");
var redefine = __webpack_require__("22a5");
var hide = __webpack_require__("317e");
var fails = __webpack_require__("c151");
var defined = __webpack_require__("5c8d");
var wks = __webpack_require__("edef");
var regexpExec = __webpack_require__("64a7");

var SPECIES = wks('species');

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

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
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
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "e006":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("f602");
var defined = __webpack_require__("5c8d");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "e036":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("5d07");
var global = __webpack_require__("9cc0");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("0a5c") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "e628":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("a9e6");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
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

/***/ "e96a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _nvm_versions_node_v12_16_1_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_nvm_versions_node_v12_16_1_lib_node_modules_vue_cli_service_global_node_modules_css_loader_index_js_ref_6_oneOf_1_1_nvm_versions_node_v12_16_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_nvm_versions_node_v12_16_1_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v12_16_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_points_vue_vue_type_style_index_0_id_732ec91c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fb33");
/* harmony import */ var _nvm_versions_node_v12_16_1_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_nvm_versions_node_v12_16_1_lib_node_modules_vue_cli_service_global_node_modules_css_loader_index_js_ref_6_oneOf_1_1_nvm_versions_node_v12_16_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_nvm_versions_node_v12_16_1_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v12_16_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_points_vue_vue_type_style_index_0_id_732ec91c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nvm_versions_node_v12_16_1_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_nvm_versions_node_v12_16_1_lib_node_modules_vue_cli_service_global_node_modules_css_loader_index_js_ref_6_oneOf_1_1_nvm_versions_node_v12_16_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_nvm_versions_node_v12_16_1_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v12_16_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_points_vue_vue_type_style_index_0_id_732ec91c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_nvm_versions_node_v12_16_1_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_nvm_versions_node_v12_16_1_lib_node_modules_vue_cli_service_global_node_modules_css_loader_index_js_ref_6_oneOf_1_1_nvm_versions_node_v12_16_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_nvm_versions_node_v12_16_1_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v12_16_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_points_vue_vue_type_style_index_0_id_732ec91c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "eb62":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("4a0f");
var TAG = __webpack_require__("edef")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "edef":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("e036")('wks');
var uid = __webpack_require__("2ef6");
var Symbol = __webpack_require__("9cc0").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "ef4d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("8752");
var dPs = __webpack_require__("b375");
var enumBugKeys = __webpack_require__("16a3");
var IE_PROTO = __webpack_require__("77dd")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("3235")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("3c67").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "f134":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "f602":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "fb33":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
});
//# sourceMappingURL=main.umd.js.map