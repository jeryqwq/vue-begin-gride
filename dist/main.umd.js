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
/******/ 	return __webpack_require__(__webpack_require__.s = "c267");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0f6b":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "1625":
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

/***/ "16b4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6da9");
var setGlobal = __webpack_require__("c890");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "1a21":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "1a68":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("b1e6");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "1c25":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("61d8");
var exec = __webpack_require__("bba6");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "22f4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("dfa5");
var global = __webpack_require__("6da9");
var isForced = __webpack_require__("b775");
var redefine = __webpack_require__("40e0");
var has = __webpack_require__("b547");
var classof = __webpack_require__("b2c3");
var inheritIfRequired = __webpack_require__("4aca");
var toPrimitive = __webpack_require__("964c");
var fails = __webpack_require__("5fac");
var create = __webpack_require__("6982");
var getOwnPropertyNames = __webpack_require__("6d9a").f;
var getOwnPropertyDescriptor = __webpack_require__("b71c").f;
var defineProperty = __webpack_require__("b569").f;
var trim = __webpack_require__("d545").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "24c4":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("5fac");
var classof = __webpack_require__("b2c3");

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

/***/ "25c8":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6da9");

module.exports = global;


/***/ }),

/***/ "2769":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("c4f0");

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

/***/ "2a7c":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("dfa5");
var fails = __webpack_require__("5fac");
var createElement = __webpack_require__("5f8c");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "3159":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("16b4");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "347e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("7091");
var isArray = __webpack_require__("3519");
var wellKnownSymbol = __webpack_require__("e314");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "3519":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("b2c3");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "3894":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("7091");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "40e0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6da9");
var createNonEnumerableProperty = __webpack_require__("c29f");
var has = __webpack_require__("b547");
var setGlobal = __webpack_require__("c890");
var inspectSource = __webpack_require__("3159");
var InternalStateModule = __webpack_require__("7c00");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

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
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "44d8":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("b547");
var toIndexedObject = __webpack_require__("c442");
var indexOf = __webpack_require__("d7e0").indexOf;
var hiddenKeys = __webpack_require__("0f6b");

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

/***/ "4aca":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("7091");
var setPrototypeOf = __webpack_require__("a3d8");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "4c0f":
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

/***/ "4c8c":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("dfa5");
var definePropertyModule = __webpack_require__("b569");
var anObject = __webpack_require__("b5d1");
var objectKeys = __webpack_require__("e14d");

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

/***/ "5f8c":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6da9");
var isObject = __webpack_require__("7091");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "5fac":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "61d8":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6da9");
var getOwnPropertyDescriptor = __webpack_require__("b71c").f;
var createNonEnumerableProperty = __webpack_require__("c29f");
var redefine = __webpack_require__("40e0");
var setGlobal = __webpack_require__("c890");
var copyConstructorProperties = __webpack_require__("a8f2");
var isForced = __webpack_require__("b775");

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

/***/ "6693":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "6982":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("b5d1");
var defineProperties = __webpack_require__("4c8c");
var enumBugKeys = __webpack_require__("e054");
var hiddenKeys = __webpack_require__("0f6b");
var html = __webpack_require__("d6f2");
var documentCreateElement = __webpack_require__("5f8c");
var sharedKey = __webpack_require__("a80a");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "6d9a":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("44d8");
var enumBugKeys = __webpack_require__("e054");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "6da9":
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("ad89")))

/***/ }),

/***/ "7091":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "71db":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("964c");
var definePropertyModule = __webpack_require__("b569");
var createPropertyDescriptor = __webpack_require__("b81d");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "767c":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "7c00":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("b84b");
var global = __webpack_require__("6da9");
var isObject = __webpack_require__("7091");
var createNonEnumerableProperty = __webpack_require__("c29f");
var objectHas = __webpack_require__("b547");
var sharedKey = __webpack_require__("a80a");
var hiddenKeys = __webpack_require__("0f6b");

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

/***/ "83a9":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("5fac");
var wellKnownSymbol = __webpack_require__("e314");
var V8_VERSION = __webpack_require__("e215");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "8550":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("b774").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "964c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("7091");

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

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("b5d1");

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

/***/ "a3d8":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("b5d1");
var aPossiblePrototype = __webpack_require__("3894");

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

/***/ "a80a":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("ea4d");
var uid = __webpack_require__("6693");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "a8f2":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("b547");
var ownKeys = __webpack_require__("edc9");
var getOwnPropertyDescriptorModule = __webpack_require__("b71c");
var definePropertyModule = __webpack_require__("b569");

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

/***/ "ad89":
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

/***/ "adb0":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "b13d":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("c4f0");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "b1e6":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("25c8");
var global = __webpack_require__("6da9");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "b2c3":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "b547":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "b569":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("dfa5");
var IE8_DOM_DEFINE = __webpack_require__("2a7c");
var anObject = __webpack_require__("b5d1");
var toPrimitive = __webpack_require__("964c");

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

/***/ "b5d1":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("7091");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "b6cf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("dfb0");
var anObject = __webpack_require__("b5d1");
var toObject = __webpack_require__("d9ac");
var toLength = __webpack_require__("b13d");
var toInteger = __webpack_require__("c4f0");
var requireObjectCoercible = __webpack_require__("767c");
var advanceStringIndex = __webpack_require__("8550");
var regExpExec = __webpack_require__("d0ab");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

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
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

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

/***/ "b71c":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("dfa5");
var propertyIsEnumerableModule = __webpack_require__("1625");
var createPropertyDescriptor = __webpack_require__("b81d");
var toIndexedObject = __webpack_require__("c442");
var toPrimitive = __webpack_require__("964c");
var has = __webpack_require__("b547");
var IE8_DOM_DEFINE = __webpack_require__("2a7c");

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

/***/ "b774":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("c4f0");
var requireObjectCoercible = __webpack_require__("767c");

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

/***/ "b775":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("5fac");

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

/***/ "b81d":
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

/***/ "b84b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6da9");
var inspectSource = __webpack_require__("3159");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "bba6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("9def");
var stickyHelpers = __webpack_require__("e458");

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

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
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

/***/ "c267":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/apple/.config/yarn/global/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("4c0f")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: /Users/apple/.config/yarn/global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3ebfbf2-vue-loader-template"}!/Users/apple/.config/yarn/global/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/apple/.config/yarn/global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/apple/.config/yarn/global/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/BeginGride.vue?vue&type=template&id=11320ff1&
var BeginGridevue_type_template_id_11320ff1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.curIdx < _vm.lists.length)?_c('svg',{staticStyle:{"position":"fixed","left":"0","top":"0","z-index":"999","min-width":"100vw","min-height":"100vh"}},[_vm._l((_vm.lists || []),function(item,idx){return _c('BorderRect',{key:idx,attrs:{"idx":idx,"item":item,"curIdx":_vm.curIdx,"incrment":_vm.incrment,"opacity":_vm.opacity,"len":_vm.lists.length}})}),_c('Point',{attrs:{"len":_vm.lists.length,"curIdx":_vm.curIdx,"incrment":_vm.incrment}})],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/BeginGride.vue?vue&type=template&id=11320ff1&

// EXTERNAL MODULE: /Users/apple/.config/yarn/global/node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("22f4");

// EXTERNAL MODULE: /Users/apple/.config/yarn/global/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("c3fe");

// EXTERNAL MODULE: /Users/apple/.config/yarn/global/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("1c25");

// EXTERNAL MODULE: /Users/apple/.config/yarn/global/node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("b6cf");

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
      if (e.target.checked) {
        window.sessionStorage.setItem("isfingerPoint", "true");
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
        "d": "M \n            ".concat(left - 20, " ").concat(top + height / 2, "  \n            Q ").concat(left - 80 + y, " ").concat(top + height / 2 + x, "\n            ").concat(left - 10 + y, " ").concat(top + height + this.wrapHeight + x, "\n            \n            "),
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
// CONCATENATED MODULE: /Users/apple/.config/yarn/global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3ebfbf2-vue-loader-template"}!/Users/apple/.config/yarn/global/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/apple/.config/yarn/global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/apple/.config/yarn/global/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/points.vue?vue&type=template&id=732ec91c&scoped=true&
var pointsvue_type_template_id_732ec91c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('foreignObject',{staticStyle:{"width":"100%","height":"40px"}},[_c('div',{staticClass:"center-point"},_vm._l((new Array(this.len).fill(0)),function(item,idx){return _c('span',{key:idx,class:("item " + (idx === _vm.curIdx && 'cur')),on:{"click":function($event){return _vm.toggleTo(idx)}}})}),0)])}
var pointsvue_type_template_id_732ec91c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/points.vue?vue&type=template&id=732ec91c&scoped=true&

// CONCATENATED MODULE: /Users/apple/.config/yarn/global/node_modules/thread-loader/dist/cjs.js!/Users/apple/.config/yarn/global/node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib??ref--12-1!/Users/apple/.config/yarn/global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/apple/.config/yarn/global/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/points.vue?vue&type=script&lang=js&
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

// CONCATENATED MODULE: /Users/apple/.config/yarn/global/node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
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
// CONCATENATED MODULE: /Users/apple/.config/yarn/global/node_modules/thread-loader/dist/cjs.js!/Users/apple/.config/yarn/global/node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib??ref--12-1!/Users/apple/.config/yarn/global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/apple/.config/yarn/global/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/BeginGride.vue?vue&type=script&lang=js&

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
      "default": function _default() {
        return [];
      }
    },
    opacity: {
      type: Number,
      "default": 0.4
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
  watch: {
    lists: function lists() {
      var isfingerPoint = window.sessionStorage.getItem("isfingerPoint");
      isfingerPoint && isfingerPoint === "true" && (this.curIdx = this.lists.length);
    },
    deep: true
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
  BeginGridevue_type_template_id_11320ff1_render,
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
          opacity = _ref$opacity === void 0 ? 0.7 : _ref$opacity;
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
              "opacity": opacity
            },
            "on": {
              "destory": destory
            }
          });
        }
      });

      function destory() {
        vm.$destroy();
        parent.innerHTML = '';
        document.body.removeChild(parent);
      }

      return {
        vm: vm,
        destory: destory
      };
    };
  }
});
// CONCATENATED MODULE: /Users/apple/.config/yarn/global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ }),

/***/ "c29f":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("dfa5");
var definePropertyModule = __webpack_require__("b569");
var createPropertyDescriptor = __webpack_require__("b81d");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "c3fe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("61d8");
var fails = __webpack_require__("5fac");
var isArray = __webpack_require__("3519");
var isObject = __webpack_require__("7091");
var toObject = __webpack_require__("d9ac");
var toLength = __webpack_require__("b13d");
var createProperty = __webpack_require__("71db");
var arraySpeciesCreate = __webpack_require__("347e");
var arrayMethodHasSpeciesSupport = __webpack_require__("83a9");
var wellKnownSymbol = __webpack_require__("e314");
var V8_VERSION = __webpack_require__("e215");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "c442":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("24c4");
var requireObjectCoercible = __webpack_require__("767c");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "c4f0":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "c890":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6da9");
var createNonEnumerableProperty = __webpack_require__("c29f");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "cf53":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("dbad");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "d07b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d0ab":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("b2c3");
var regexpExec = __webpack_require__("bba6");

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

/***/ "d545":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("767c");
var whitespaces = __webpack_require__("d6c9");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "d6c9":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "d6f2":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("b1e6");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "d7e0":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("c442");
var toLength = __webpack_require__("b13d");
var toAbsoluteIndex = __webpack_require__("2769");

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

/***/ "d9ac":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("767c");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "dbad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("5fac");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "dfa5":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("5fac");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "dfb0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("1c25");
var redefine = __webpack_require__("40e0");
var fails = __webpack_require__("5fac");
var wellKnownSymbol = __webpack_require__("e314");
var regexpExec = __webpack_require__("bba6");
var createNonEnumerableProperty = __webpack_require__("c29f");

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

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

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
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
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
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
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
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "e054":
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

/***/ "e14d":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("44d8");
var enumBugKeys = __webpack_require__("e054");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e215":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6da9");
var userAgent = __webpack_require__("1a68");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "e314":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6da9");
var shared = __webpack_require__("ea4d");
var has = __webpack_require__("b547");
var uid = __webpack_require__("6693");
var NATIVE_SYMBOL = __webpack_require__("dbad");
var USE_SYMBOL_AS_UID = __webpack_require__("cf53");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "e458":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("5fac");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "e96a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _config_yarn_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_config_yarn_global_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_config_yarn_global_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_config_yarn_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_config_yarn_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_config_yarn_global_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_points_vue_vue_type_style_index_0_id_732ec91c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d07b");
/* harmony import */ var _config_yarn_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_config_yarn_global_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_config_yarn_global_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_config_yarn_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_config_yarn_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_config_yarn_global_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_points_vue_vue_type_style_index_0_id_732ec91c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_yarn_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_config_yarn_global_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_config_yarn_global_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_config_yarn_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_config_yarn_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_config_yarn_global_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_points_vue_vue_type_style_index_0_id_732ec91c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_config_yarn_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_config_yarn_global_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_config_yarn_global_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_config_yarn_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_config_yarn_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_config_yarn_global_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_points_vue_vue_type_style_index_0_id_732ec91c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ea4d":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("adb0");
var store = __webpack_require__("16b4");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.4',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "edc9":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("b1e6");
var getOwnPropertyNamesModule = __webpack_require__("6d9a");
var getOwnPropertySymbolsModule = __webpack_require__("1a21");
var anObject = __webpack_require__("b5d1");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ })

/******/ });
});
//# sourceMappingURL=main.umd.js.map