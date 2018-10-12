(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("mcake", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["mcake"] = factory(require("vue"));
	else
		root["mcake"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_63__) {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 85);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
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
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = includes;
/* unused harmony export type */
/* harmony export (immutable) */ __webpack_exports__["e"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["f"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["g"] = isString;
/* harmony export (immutable) */ __webpack_exports__["c"] = isArray;
/* harmony export (immutable) */ __webpack_exports__["d"] = isBoolean;
/* unused harmony export isNaN */
/* unused harmony export isNull */
/* harmony export (immutable) */ __webpack_exports__["h"] = toNumber;
/* harmony export (immutable) */ __webpack_exports__["i"] = toString;
/* harmony export (immutable) */ __webpack_exports__["a"] = each;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);


/**
 * 查询数组中是否包含某个值
 * @param  {[array]}   arr   [数组]
 * @param  {[string]}  value [查找的值]
 * @return {[boolean]}       [true/false]
 */
function includes(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
};

/**
 * 数据类型判断
 */
// 数据类型查询地图
var typeClass = getTypeClass();
// 获取数据类型查询地图
function getTypeClass() {
    var obj = {};
    "Boolean Number String Function Array Date RegExp Object Error Symbol Arguments".split(" ").forEach(function (name, i) {
        obj["[object " + name + "]"] = name.toLowerCase();
    });
    return obj;
};
/**
 * 类型检测
 * @param  {[type]} obj [传入要检测的内容]
 * @return {String}     [返回类型对应的字符串]
 */
function type(obj) {
    return (typeof obj === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(obj)) === "object" || typeof obj === "function" ? typeClass[{}.toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(obj);
};

/**
 * 类型是否为数字
 * @param  {[type]}  obj [检测内容]
 * @return {Boolean}     [返回true/false]
 */
function isNumber(obj) {
    return type(obj) === "number";
};

/**
 * 类型是否为对象
 * @param  {[type]}  obj [检测内容]
 * @return {Boolean}     [返回true/false]
 */
function isObject(obj) {
    return type(obj) === "object";
};

/**
 * 类型是否为字符串
 * @param  {[type]}  obj [检测内容]
 * @return {Boolean}     [返回true/false]
 */
function isString(obj) {
    return type(obj) === "string";
};

/**
 * 是否为数组
 * @param  {[type]}  obj [检测内容]
 * @return {Boolean}     [返回true/false]
 */
function isArray(obj) {
    return type(obj) === "array";
};

/**
 * 是否为布尔值
 * @param  {[type]}  obj [检测内容]
 * @return {Boolean}     [返回true/false]
 */
function isBoolean(obj) {
    return type(obj) === "boolean";
};

/**
 * 是否为NaN
 * @param  {[type]}  obj [检测内容]
 * @return {Boolean}     [返回true/false]
 */
function isNaN(obj) {
    return isNumber(obj) && isNaN(obj);
};
/**
 * 是否为空 null undefined 空字符串
 * @param  {[type]}  obj [检测内容]
 * @return {Boolean}     [返回true/false]
 */
function isNull(obj) {
    return obj == null || obj === "";
};

/**
 * 转成成数字
 * @param  {[string]} val [转换字符串]
 * @return {[number]}     [转换后的值]
 */
function toNumber(val) {
    var n = parseFloat(val, 10);
    return n || n === 0 ? n : val;
};

/**
 * 转换成字符串 支持JSON和数组数据的转换 带2空格缩进
 * @param  {[number/null]} val [转换前的值]
 * @return {[type]}            [转换后的值]
 */
function toString(val) {
    //如果参数不存在  为空字符 如果为对象 则返回缩进2空格的字符串
    return isNull(val) ? "" : (typeof val === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(val)) === 'object' ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(val) : String(val);
};

/**
 * 迭代器 遍历 obj 所有元素（数组、对象数组、对象），执行 callback 方法，最终还是返回 obj
 * 注意1：callback.call(obj[i],obj[i], i, obj) 函数执行的环境和参数  第一个obj[i] 影响this
 * 注意2：=== false) return obj 一旦有函数返回 false，即跳出循环，类似 break
 * 注意3：无论哪种情况，最终返回的还是 obj
 */
function each(obj, callback) {
    //声明变量
    var i, key;
    //判断传入的元素是否为数组或数组对象
    if (isArray(obj)) {
        for (i = 0; i < obj.length; i++) {
            if (callback.call(obj[i], obj[i], i, obj) === false) return obj;
        }
    } else {
        for (key in obj) {
            if (callback.call(obj[i], obj[key], key, obj) === false) return obj;
        }
    }
    //无论哪种情况，最终返回的还是 obj
    return obj;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(99);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icon_vue__ = __webpack_require__(98);
// 引入组件按钮

// 输出
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__icon_vue__["a" /* default */]);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(28)('wks');
var uid = __webpack_require__(19);
var Symbol = __webpack_require__(4).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(14);
var IE8_DOM_DEFINE = __webpack_require__(36);
var toPrimitive = __webpack_require__(23);
var dP = Object.defineProperty;

exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(11)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var createDesc = __webpack_require__(17);
module.exports = __webpack_require__(8) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(39);
var defined = __webpack_require__(25);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var core = __webpack_require__(3);
var ctx = __webpack_require__(88);
var hide = __webpack_require__(10);
var has = __webpack_require__(9);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(38);
var enumBugKeys = __webpack_require__(29);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = hasClass;
/* harmony export (immutable) */ __webpack_exports__["a"] = addClass;
/* harmony export (immutable) */ __webpack_exports__["d"] = removeClass;
/* harmony export (immutable) */ __webpack_exports__["b"] = getStyle;
/**
 * DOM 操作方法
 */

// 检查是否存在某个class
function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
};

// 添加class
function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName;
      }
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
};

// 删除class
function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else {
      if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ');
      }
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
};

// 将属性转换成驼峰
function camelCase(str) {
  return str.replace(/-+(.)?/g, function (match, chr) {
    return chr ? chr.toUpperCase() : '';
  });
}
// getStyle
function getStyle(element, styleName) {
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(15);
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
/* 24 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(28)('keys');
var uid = __webpack_require__(19);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(3);
var global = __webpack_require__(4);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(18) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 30 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(25);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f;
var has = __webpack_require__(9);
var TAG = __webpack_require__(6)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(6);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var core = __webpack_require__(3);
var LIBRARY = __webpack_require__(18);
var wksExt = __webpack_require__(33);
var defineProperty = __webpack_require__(7).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(8) && !__webpack_require__(11)(function () {
  return Object.defineProperty(__webpack_require__(37)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
var document = __webpack_require__(4).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(9);
var toIObject = __webpack_require__(12);
var arrayIndexOf = __webpack_require__(91)(false);
var IE_PROTO = __webpack_require__(27)('IE_PROTO');

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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(24);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_base_js__ = __webpack_require__(1);

//
//
//
//


// icon class前缀
var prefixClass = 'm-i';
// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    // 组件名称
    name: 'MIcon',
    // 属性
    props: {
        // 图标类型
        type: String,
        // 字体大小
        size: [Number, String],
        // 主题
        theme: {
            type: String,
            validator: function validator(value) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base_js__["b" /* includes */])(['primary', 'success', 'info', 'warning', 'error', 'noble'], value);
            }
        },
        // 颜色
        color: String,
        // 行高
        lineHeight: [Number, String]
    },
    // 计算属性
    computed: {
        // 图标class
        classes: function classes() {
            var _ref;

            return [(_ref = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, prefixClass + '-' + this.type, !!this.type), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'm-text-' + this.theme, !!this.theme), _ref)];
        },

        // 图标样式
        styles: function styles() {
            var style = {};
            // 如果大小存在
            if (this.size) {
                style['font-size'] = this.size + 'px';
            }
            // 如果颜色存在
            if (this.color) {
                style.color = this.color;
            }
            // 如果行高存在
            if (this.lineHeight) {
                style['line-height'] = this.lineHeight + 'px';
            }
            return style;
        }
    }
});

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(107)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(42)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(18);
var $export = __webpack_require__(13);
var redefine = __webpack_require__(43);
var hide = __webpack_require__(10);
var Iterators = __webpack_require__(21);
var $iterCreate = __webpack_require__(108);
var setToStringTag = __webpack_require__(32);
var getPrototypeOf = __webpack_require__(111);
var ITERATOR = __webpack_require__(6)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(14);
var dPs = __webpack_require__(109);
var enumBugKeys = __webpack_require__(29);
var IE_PROTO = __webpack_require__(27)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(37)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(110).appendChild(iframe);
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(112);
var global = __webpack_require__(4);
var hide = __webpack_require__(10);
var Iterators = __webpack_require__(21);
var TO_STRING_TAG = __webpack_require__(6)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(38);
var hiddenKeys = __webpack_require__(29).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon__ = __webpack_require__(5);

//
//
//
//
//
//
//

// 公共方法

// 引入子组件


// icon class前缀
var prefixClass = 'm-btn';
// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    // 组件名称
    name: 'MButton',
    // 属性
    props: {
        // 类型
        type: {
            type: String,
            validator: function validator(value) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['primary', 'success', 'info', 'warning', 'error', 'noble', 'white', 'text'], value);
            }
        },
        // 大小尺寸
        size: {
            type: String,
            validator: function validator(value) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['mini', 'small', 'default', 'large'], value);
            }
        },
        // 形状
        shape: {
            type: String,
            validator: function validator(value) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['fillet', 'pill', 'square', 'box', 'circle'], value);
            }
        },
        // 按钮HTML 类型
        htmlType: {
            type: String,
            default: 'button',
            validator: function validator(value) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['button', 'submit', 'reset'], value);
            }
        },
        // 是否为边框类型 默认为否
        bordered: {
            type: Boolean,
            default: false
        },
        // 是否禁止点击
        disabled: Boolean,
        // 是否为长按钮
        long: {
            type: Boolean,
            default: false
        },
        // 图标
        icon: String
    },
    data: function data() {
        return {
            // 是否显示分发
            showSlot: true
        };
    },

    // 计算属性
    computed: {
        // class
        classes: function classes() {
            var _ref;

            return [
            // 默认class
            '' + prefixClass, (_ref = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, prefixClass + '-' + this.size, !!this.size), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, prefixClass + '-' + this.type, !!this.type), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, prefixClass + '-' + this.shape, !!this.shape), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'bordered', this.bordered), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, prefixClass + '-long', this.long), _ref)];
        }
    },
    // 实例创建完毕
    mounted: function mounted() {
        // 判断是否存在分发的内容
        this.showSlot = this.$slots.default !== undefined;
    },

    methods: {
        // 处理按钮点击事件
        handleClick: function handleClick(event) {
            this.$emit('click', event);
        }
    },
    // 子组件
    components: { MIcon: __WEBPACK_IMPORTED_MODULE_2__icon__["a" /* default */] }
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_base__ = __webpack_require__(1);

//
//
//
//
//
//

// 公共方法

// icon class前缀
var prefixClass = 'm-btn-group';
// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    // 组件名称
    name: 'MButtonGroup',
    // 属性
    props: {
        // 大小尺寸
        size: {
            type: String,
            validator: function validator(value) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['mini', 'small', 'default', 'large'], value);
            }
        },
        // 形状
        shape: {
            type: String,
            validator: function validator(value) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['fillet', 'pill', 'square', 'box', 'circle'], value);
            }
        },
        // 是否为垂直的
        vertical: {
            type: Boolean,
            default: false
        }
    },
    // 计算属性
    computed: {
        // class
        classes: function classes() {
            var _ref;

            return [
            // 默认class
            '' + prefixClass, (_ref = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, prefixClass + '-' + this.size, !!this.size), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, prefixClass + '-' + this.shape, !!this.shape), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, prefixClass + '-vertical', this.vertical), _ref)];
        }
    }
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_base__ = __webpack_require__(1);
//
//
//
//
//
//

// 公共方法

// icon class前缀
var prefixClass = 'm-row';
// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    // 组件名称
    name: 'MRow',
    // 属性
    props: {
        // 是否为垂直的
        vertical: {
            type: Boolean,
            default: false
        },
        // 间距
        gutter: {
            type: [String, Number],
            default: 0
        }
    },
    // 计算属性
    computed: {
        // class
        classes: function classes() {
            return [
            // 默认class
            '' + prefixClass];
        },

        // 样式
        styles: function styles() {
            // 获得间距
            var gutter = Object(__WEBPACK_IMPORTED_MODULE_0__utils_base__["h" /* toNumber */])(this.gutter),

            // 样式
            style = {};
            // 如果间距
            if (gutter !== 0) {
                style = {
                    marginLeft: gutter / -2 + 'px',
                    marginRight: gutter / -2 + 'px'
                };
            }
            return style;
        }
    }
});

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_base__ = __webpack_require__(1);

//
//
//
//
//
//

// 公共方法

// icon class前缀
var prefixClass = 'm-col';
// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    // 组件名称
    name: 'MCol',
    // 属性
    props: {
        // class名称
        className: String,
        // 栅格格数
        span: [Number, String],
        // 向左排序
        push: [Number, String],
        // 向右排序
        pull: [Number, String],
        // 偏移位置
        offset: [Number, String],
        // 屏幕尺寸
        xs: [Number, String, Object],
        sm: [Number, String, Object],
        md: [Number, String, Object],
        lg: [Number, String, Object],
        xl: [Number, String, Object]
    },

    // 计算属性
    computed: {
        // class
        classes: function classes() {
            var _ref,
                _this = this;

            // 存放class的数组
            var classList = [
            // 默认class
            '' + prefixClass, (_ref = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, '' + this.className, !!this.className), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, prefixClass + '-span-' + this.span, this.span), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, prefixClass + '-span-push-' + this.push, this.push), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, prefixClass + '-span-pull-' + this.pull, this.pull), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, prefixClass + '-span-offset-' + this.offset, this.offset), _ref)],

            // 尺寸列表
            sizeList = ["xs", "sm", "md", "lg", "xl"];

            // 遍历所有的尺寸
            sizeList.forEach(function (item) {
                // 获得相关配置
                var size = _this[item];
                // 如果为字符串 转换成数字
                if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["g" /* isString */])(size)) {
                    size = Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["h" /* toNumber */])(size);
                }
                // 如果为数字
                if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["e" /* isNumber */])(size)) {
                    classList.push(prefixClass + '-' + item + '-' + size);
                } else if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["f" /* isObject */])(size)) {
                    // 遍历所有key
                    Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["a" /* each */])(size, function (value, key) {
                        classList.push(key === 'span' ? prefixClass + '-' + item + '-' + value : prefixClass + '-' + item + '-' + key + '-' + value);
                    });
                }
            });

            return classList;
        },

        // 样式
        styles: function styles() {
            // 获得间距
            var gutter = Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["h" /* toNumber */])(this.$parent.gutter),

            // 样式
            style = {};
            // 如果间距
            if (gutter !== 0) {
                style = {
                    paddingLeft: gutter / 2 + 'px',
                    paddingRight: gutter / 2 + 'px'
                };
            }
            return style;
        }
    }
});

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_base__ = __webpack_require__(1);

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
//
//
//
//
//

// 公共方法

// 输入框主容器 class
var wrapPrefixClass = 'm-ipt-wrap',

// 输入框父容器 也是图标父容器
contentClass = 'm-ipt-content',

// 拥有图标的容器
iconContentClass = 'm-ipt-icon-content',

// 图标在前面的容器
iconBeforeContentClass = 'm-ipt-icon-before-content',

// 输入框本身的class
iptClass = 'm-ipt',

// 图标左右位置时 输入框class
iptClassIconLeft = 'm-ipt-icon-left',
    iptClassIconRight = 'm-ipt-icon-right';

// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    // 组件名称
    name: 'MInput',
    // 属性
    props: {
        // 输入框类型 可以为: text、password 或 textarea
        type: {
            validator: function validator(value) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['text', 'textarea', 'password'], value);
            },

            default: "text"
        },
        // 是否为长输入框
        long: {
            type: Boolean,
            default: false
        },
        // 颜色主题
        theme: {
            type: String,
            validator: function validator(value) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['primary', 'success', 'info', 'warning', 'error', 'noble'], value);
            }
        },
        // 大小尺寸
        size: {
            type: String,
            validator: function validator(value) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['mini', 'small', 'large'], value);
            }
        },
        // 形状
        shape: {
            type: String,
            validator: function validator(value) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['fillet', 'pill'], value);
            }
        },
        // 图标
        icon: String,
        // 图标是否在前面
        iconBefore: {
            type: Boolean,
            default: false
        },
        // 提示信息
        placeholder: {
            type: String,
            default: ''
        },
        // name
        name: String,
        // 默认值
        value: {
            type: [String, Number],
            default: ''
        },
        // 只读
        readonly: {
            type: Boolean,
            default: false
        },
        // 禁止
        disabled: {
            type: Boolean,
            default: false
        },
        // 自动获取焦点
        autofocus: {
            type: Boolean,
            default: false
        },
        // 多行文本框的行数
        rows: {
            type: Number,
            default: 4
        }
    },
    // 数据
    data: function data() {
        // 输入数据
        return {
            // 输入框当前值
            currentValue: this.value,
            // 是否向前插入内容
            before: true,
            // 是否向后插入内容
            after: true,
            // 是否显示插入内容
            slotReady: false,
            // 输入框存在图标时 输入框样式
            iconInputClass: this.icon ? this.iconBefore ? iptClassIconLeft : iptClassIconRight : null
        };
    },

    // 观察者
    watch: {
        // 输入框值
        value: function value(val) {
            this.setCurrentValue(val);
        }
    },
    // 计算属性
    computed: {
        // 主容器class
        wrapClasses: function wrapClasses() {
            var _ref;

            return [
            // 默认class
            '' + wrapPrefixClass, (_ref = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, wrapPrefixClass + '-long', this.long), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, wrapPrefixClass + '-' + this.theme, !!this.theme), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, wrapPrefixClass + '-' + this.size, !!this.size), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, wrapPrefixClass + '-' + this.shape, !!this.shape), _ref)];
        },

        // 输入框本身的class
        iptClasses: function iptClasses() {
            return [
            // 默认class
            '' + iptClass, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, '' + this.iconInputClass, !!this.iconInputClass)];
        }
    },
    // 实例初始化完成
    mounted: function mounted() {
        // 判断前后插入内容
        if (this.type !== 'textarea') {
            this.before = this.$slots.before !== undefined;
            this.after = this.$slots.after !== undefined;
        } else {
            this.before = false;
            this.after = false;
        }
        // 显示插入内容
        this.slotReady = true;
    },

    // 方法
    methods: {
        // 设置当前输入框值
        setCurrentValue: function setCurrentValue(val) {
            // 如果等于当前值
            if (val === this.currentValue) return;
            // 设置新的值
            this.currentValue = val;
        },

        // 输入事件
        handleInput: function handleInput(e) {
            // 获得输入内容
            var value = e.target.value;
            //console.log(value)
            // 提交相关事件
            this.$emit('input', value, e);
            this.setCurrentValue(value);
            this.$emit('on-change', value, e);
            // console.log(e)
        },

        // 处理回车事件
        handleEnter: function handleEnter(e) {
            this.$emit('on-enter', e.target.value, e);
        },

        // 按下按钮松开时
        handleKeyup: function handleKeyup(e) {
            this.$emit('on-keyup', e.target.value, e);
        },

        // keypress 事件与 keydown 事件类似
        handleKeypress: function handleKeypress(e) {
            this.$emit('on-keypress', e.target.value, e);
        },

        // 鼠标按下事件
        handleKeydown: function handleKeydown(e) {
            this.$emit('on-keydown', e.target.value, e);
        },

        // 获取焦点事件
        handleFocus: function handleFocus(e) {
            this.$emit('on-focus', e.target.value, e);
        },

        // 失去焦点事件
        handleBlur: function handleBlur(e) {
            this.$emit('on-blur', e.target.value, e);
        },

        // 图标点击事件
        handleIconClick: function handleIconClick(e) {
            this.$emit('on-click', this.currentValue, e);
        }
    }
});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

// 主容器 class
var wrapClass = 'm-ipt-number-wrap';

// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'MInputNumber',
    props: {
        // 最大值
        max: {
            type: Number,
            default: Infinity
        },
        // 最小值
        min: {
            type: Number,
            default: -Infinity
        },
        // 间隔值
        step: {
            type: Number,
            default: 1
        },
        // 默认值
        value: {
            type: Number,
            default: 0
        },
        // 精度 用于控制小数位数
        precision: Number,
        // name 用于表单提交
        name: String,
        // 提示信息
        placeholder: String
    },
    data: function data() {
        return {
            // 当前值
            currentValue: this.value
        };
    },

    watch: {
        value: function value(val) {
            this.currentValue = val;
        }
    },
    computed: {
        // 主容器class
        wrapClasses: function wrapClasses() {
            return [
            // 默认class
            '' + wrapClass, {}];
        },

        // 根据精度计算当前值
        precisionValue: function precisionValue() {
            // 如果精度存在则根据精度计算 否则使用当前值
            return this.precision ? this.currentValue.toFixed(this.precision) : this.currentValue;
        },

        // 格式化后的值
        formatterValue: function formatterValue() {
            // 如果格式化存在
            if (this.formatter && this.precisionValue !== null) {
                return this.formatter(this.precisionValue);
            } else {
                return this.precisionValue;
            }
        }
    },
    mounted: function mounted() {},

    methods: {
        // 对当前值进行改变
        changeValue: function changeValue(val) {},

        // 卡片点击事件
        handleClick: function handleClick(e) {}
    }
});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_emitter__ = __webpack_require__(54);
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

// 引入混合方法

// 组件主容器 class
var radioWrapClass = 'm-radio';

// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    // 组件名称
    name: 'MRadio',
    // 混合
    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_emitter__["a" /* default */]],
    // 属性
    props: {
        // 单选框的值
        value: {},
        // 单选框文字
        label: {
            type: [String, Number]
        },
        // 单选框原生的name
        name: String,
        // 是否禁用
        disabled: {
            type: Boolean,
            default: false
        }
    },
    // 计算属性
    computed: {
        // 单选框主容器的calss
        wrapClasses: function wrapClasses() {
            return ['' + radioWrapClass, {
                'checked': this.model === this.label,
                'disabled': this.isDisabled
            }];
        },

        // 是否为单选框组
        isGroup: function isGroup() {
            // 获得父元素
            var parent = this.$parent;
            // 检测父元素是否为单选框组 组件
            if (parent.$options.name === 'MRadioGroup') {
                this._group = parent;
                // 返回是
                return true;
            }
            // 默认为否
            return false;
        },

        // 单选框绑定的值
        model: {
            get: function get() {
                return this.isGroup ? this._group.value : this.value;
            },
            set: function set(val) {
                // 是否为单选组
                if (this.isGroup) {
                    this.dispatch('MRadioGroup', 'input', [val]);
                } else {
                    this.$emit('input', val);
                }
            }
        },
        // 判断是否被禁用
        isDisabled: function isDisabled() {
            return this.isGroup ? this._group.disabled || this.disabled : this.disabled;
        }
    },
    // 方法
    methods: {
        // 处理单选框改变事件
        handleChange: function handleChange() {
            var _this = this;

            this.$nextTick(function () {
                // 触发单选框接口上的改变事件
                _this.$emit('change', _this.model);
                // 给单选框组事件冒泡
                _this.isGroup && _this.dispatch('MRadioGroup', 'handleChange', _this.model);
            });
        }
    }
});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _broadcast(componentName, eventName, params) {
    this.$children.forEach(function (child) {
        var name = child.$options.name;
        if (name === componentName) {
            child.$emit.apply(child, [eventName].concat(params));
        } else {
            // todo 如果 params 是空数组，接收到的会是 undefined
            _broadcast.apply(child, [componentName, eventName].concat([params]));
        }
    });
}
/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        // 向父级广播事件
        dispatch: function dispatch(componentName, eventName, params) {
            var parent = this.$parent || this.$root;
            var name = parent.$options.name;

            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;

                if (parent) {
                    name = parent.$options.name;
                }
            }
            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params));
            }
        },

        // 向子级广播事件
        broadcast: function broadcast(componentName, eventName, params) {
            _broadcast.call(this, componentName, eventName, params);
        }
    }
});

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//


// 组件主容器 class
var GroupClass = 'm-radio-group';

// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    // 组件名称
    name: 'MRadioGroup',
    // 属性
    props: {
        // 单选框的值
        value: {},
        // 是否禁用
        disabled: {
            type: Boolean,
            default: false
        },
        // 是否为垂直
        vertical: {
            type: Boolean,
            default: false
        }
    },
    // 数据
    data: function data() {
        // 输入数据
        return {};
    },
    created: function created() {
        var _this = this;

        // 监听单选框改变事件 并触发接口事件
        this.$on('handleChange', function (value) {
            // 触发接口事件
            _this.$emit('change', value);
        });
    },

    // 计算属性
    computed: {
        // 单选框主容器的calss
        groupClasses: function groupClasses() {
            return ['' + GroupClass, {
                'vertical': this.vertical
            }];
        }
    },
    // 方法
    methods: {}
});

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_emitter__ = __webpack_require__(54);
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
//
//
//
//

// 公共方法

// 引入混合方法

// 组件主容器 class
var checkboxWrapClass = 'm-checkbox';

// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    // 组件名称
    name: 'MCheckbox',
    // 混合
    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_emitter__["a" /* default */]],
    // 属性
    props: {
        // 单选框的值
        value: {},
        // 单选框文字
        label: {
            type: [String, Number]
        },
        // 被选中的值
        trueLabel: [String, Number],
        // 没有被选中的值
        falseLabel: [String, Number],
        // 单选框原生的name
        name: String,
        // 是否禁用
        disabled: {
            type: Boolean,
            default: false
        },
        // 选中状态
        checked: {
            type: Boolean,
            default: false
        },
        // 不确定状态 常用语全选操作
        indeterminate: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            // 自己默认的值
            selfModel: false,
            // 是否超过限制  用于控制最大和最小可选数 如果为true 则会被禁止再选中其他选项
            isLimitExceeded: false
        };
    },

    // 计算属性
    computed: {
        // 单选框主容器的calss
        wrapClasses: function wrapClasses() {
            return ['' + checkboxWrapClass, {
                // 选中状态
                'checked': this.isChecked,
                // 禁止状态
                'disabled': this.isDisabled,
                // 不确定状态
                'indeterminate': this.indeterminate
            }];
        },

        // 是否为单选框组
        isGroup: function isGroup() {
            // 获得父元素
            var parent = this.$parent;
            // 检测父元素是否为单选框组 组件
            if (parent.$options.name === 'MCheckboxGroup') {
                this._group = parent;
                // 返回是
                return true;
            }
            // 默认为否
            return false;
        },

        // 储存单选框组或自己的值
        store: function store() {
            return this.isGroup ? this._group.value : this.value;
        },

        // 单选框绑定的值
        model: {
            get: function get() {
                // 如果为多选框组 获取组的value 否则获取自己的值
                return this.isGroup ? this.store : this.value !== undefined ? this.value : this.selfModel;
            },
            set: function set(val) {
                // 是否为单选组
                if (this.isGroup) {
                    // 先将超过限制状态设置为关闭状态
                    this.isLimitExceeded = false;
                    // 判断当前选项数是否小于最小数
                    var isLt = this._group.min !== undefined && val.length < Object(__WEBPACK_IMPORTED_MODULE_0__utils_base__["h" /* toNumber */])(this._group.min),

                    // 是否大于最大数
                    isGt = this._group.max !== undefined && val.length > Object(__WEBPACK_IMPORTED_MODULE_0__utils_base__["h" /* toNumber */])(this._group.max);

                    // 只要有一个不符合 禁止再选中
                    if (isLt || isGt) this.isLimitExceeded = true;
                    // 当没有超过限制时 提交选项改变事件
                    this.isLimitExceeded === false && this.dispatch('MCheckboxGroup', 'input', [val]);
                } else {
                    // 提交值改变事件
                    this.$emit('input', val);
                    // 设置当前自己的值
                    this.selfModel = val;
                }
            }
        },
        // 当前选项是否被选中
        isChecked: function isChecked() {
            // 获得当前值
            var model = this.model;
            // 如果为单个选项时
            if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_base__["d" /* isBoolean */])(model)) {
                return model;
            }
            // 如果多选框组时
            else if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_base__["c" /* isArray */])(model)) {
                    return Object(__WEBPACK_IMPORTED_MODULE_0__utils_base__["b" /* includes */])(model, this.label);
                }
                // 如果存在转义值
                else if (this.model !== null && this.model !== undefined) {
                        return this.model === this.trueLabel;
                    }
        },

        // 判断是否被禁用
        isDisabled: function isDisabled() {
            return this.isGroup ? this._group.disabled || this.disabled : this.disabled;
        }
    },
    created: function created() {
        // 如果被选中属性存在 设置值
        this.checked && this.setModel();
    },

    // 方法
    methods: {
        // 处理单选框改变事件
        handleChange: function handleChange(e) {
            var _this = this;

            // 当前值
            var value = void 0;
            // 如果多选框被选中
            if (e.target.checked) {
                // 返回trueLabel或true
                value = this.trueLabel === undefined ? true : this.trueLabel;
            } else {
                // 返回trueLabel或false
                value = this.falseLabel === undefined ? false : this.falseLabel;
            }
            // 数据发生改变后回调
            this.$nextTick(function () {
                // 触发单选框接口上的改变事件
                _this.$emit('change', value, e);
                // 给单选框组事件冒泡
                _this.isGroup && _this.dispatch('MCheckboxGroup', 'change', [_this._group.value]);
            });
        },

        // 设置当前单选框的值
        setModel: function setModel() {
            // 如果数据为数组 也就是多选框组
            if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_base__["c" /* isArray */])(this.model)) {
                // 当前值不存在数组中
                if (!Object(__WEBPACK_IMPORTED_MODULE_0__utils_base__["b" /* includes */])(this.model, this.label)) {
                    this.model.push(this.label);
                }
            }
            // 如果为单个多选框 设置等于被选中
            else {
                    this.model = this.trueLabel || true;
                }
        }
    }
});

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//


// 组件主容器 class
var GroupClass = 'm-checkbox-group';

// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    // 组件名称
    name: 'MCheckboxGroup',
    // 属性
    props: {
        // 单选框的值
        value: {},
        // 可被勾选的最小数量
        min: [Number, String],
        // 可被勾选的最大数量
        max: [Number, String],
        // 是否禁用
        disabled: {
            type: Boolean,
            default: false
        },
        // 是否为垂直
        vertical: {
            type: Boolean,
            default: false
        }
    },
    // 数据
    data: function data() {
        // 输入数据
        return {};
    },
    created: function created() {
        var _this = this;

        // 监听单选框改变事件 并触发接口事件
        this.$on('handleChange', function (value) {
            // 触发接口事件
            _this.$emit('change', value);
        });
    },

    // 计算属性
    computed: {
        // 单选框主容器的calss
        groupClasses: function groupClasses() {
            return ['' + GroupClass, {
                'vertical': this.vertical
            }];
        }
    },
    // 方法
    methods: {}
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_base__ = __webpack_require__(1);

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

// 公共方法

// 主容器 class
var wrapClass = 'm-switch';

// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'MSwitch',
    props: {
        // 颜色风格
        type: {
            type: String,
            default: 'primary',
            validator: function validator(value) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['primary', 'success', 'info', 'warning', 'error', 'noble'], value);
            }
        },
        // 状态值
        value: {
            type: [String, Number, Boolean],
            default: false
        },
        // 打开时显示文字
        trueText: String,
        // 关闭时显示文字
        falseText: String,
        // 打开时的值
        trueValue: {
            type: [String, Number, Boolean],
            default: true
        },
        // 关闭时的值
        falseValue: {
            type: [String, Number, Boolean],
            default: false
        },
        // 禁用
        disabled: {
            type: Boolean,
            default: false
        },
        //  宽度
        width: {
            type: Number,
            default: 46
        },
        // 高度
        height: {
            type: Number,
            default: 24
        },
        // 输入框名称
        name: String
    },
    data: function data() {
        return {
            currentValue: this.value
        };
    },

    computed: {
        // 主容器class
        wrapClasses: function wrapClasses() {
            var _ref;

            return ['' + wrapClass, (_ref = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, wrapClass + '-' + this.type, !!this.type), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, "checked", this.checked), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, "disabled", this.disabled), _ref)];
        },

        // 主容器样式
        wrapStyle: function wrapStyle() {
            return {
                width: this.width + "px",
                height: this.height + "px",
                lineHeight: this.height - 2 + "px"
            };
        },

        // 圆点样式
        dotStyle: function dotStyle() {
            return {
                width: this.dotSize + "px",
                height: this.dotSize + "px",
                left: this.checked ? this.width - this.dotSize - 3 + "px" : "1px"
            };
        },

        // 圆点的大小
        dotSize: function dotSize() {
            // 减掉上下1像素边框 和 上下1像素边距
            return this.height - 4;
        },

        // 是否被选中
        checked: function checked() {
            return this.currentValue === this.trueValue;
        }
    },
    watch: {
        value: function value(val) {
            if (val !== this.trueValue && val !== this.falseValue) {
                throw '值只能等于 trueValue 或 falseValue';
            }
            this.currentValue = val;
        }
    },
    mounted: function mounted() {},

    methods: {
        // 切换状态
        toggle: function toggle() {
            // 如果是禁用的 中断操作
            if (this.disabled) return;
            // 获得切换后的值
            var value = this.checked ? this.falseValue : this.trueValue;
            // 设置新的值
            this.currentValue = value;
            // 提交事件
            this.$emit("input", value);
            this.$emit("on-change", value);
        }
    }
});

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_dom_js__ = __webpack_require__(22);
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
//
//

// 引入资源

// 主容器 class
var wrapClass = 'm-rate';

// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'MRate',
    props: {
        value: {
            type: Number,
            default: 0
        },
        // 最大分值
        max: {
            type: Number,
            default: 5
        },
        // 低分到中等分数的界限
        lowThreshold: {
            type: Number,
            default: 2
        },
        // 中等分数到高分的界限
        highThreshold: {
            type: Number,
            default: 4
        },
        // 是否允许半星
        allowHalf: {
            type: Boolean,
            default: false
        },
        // 图标class名称 分别对应低分、中等分数、高分
        iconClasses: {
            type: Array,
            default: function _default() {
                return ['m-i-collect-b', 'm-i-collect-b', 'm-i-collect-b'];
            }
        },
        // 未选中默认图标class
        voidIconClass: {
            type: String,
            default: 'm-i-collect'
        },
        // 只读状态未选中默认图标class
        disabledVoidIconClass: {
            type: String,
            default: 'm-i-collect-b'
        },
        // 颜色 分别对应低分、中等分数、高分
        colors: {
            type: Array,
            default: function _default() {
                return ['#ffc600', '#ffc600', '#ffc600'];
            }
        },
        // 未选中时默认颜色
        voidColor: {
            type: String,
            default: '#D8D8D8'
        },
        // 只读状态未选中时默认颜色
        disabledVoidColor: {
            type: String,
            default: '#D8D8D8'
        },
        // 提示文字
        texts: {
            type: Array,
            default: function _default() {
                return ['极差', '失望', '一般', '满意', '非常满意'];
            }
        },
        // 显示文字
        showText: {
            type: Boolean,
            default: false
        },
        // 设置为只读
        disabled: {
            type: Boolean,
            default: false
        },
        // 表单字段名称
        name: String

    },
    data: function data() {
        return {
            // 当前分值
            currentValue: this.value,
            // 当前鼠标指向的星星索引
            hoverIndex: -1,
            // 常用class查询地图
            classMap: {},
            // 鼠标移入半星上面
            pointerAtLeftHalf: true
        };
    },

    computed: {
        // 主容器class
        wrapClasses: function wrapClasses() {
            return ['' + wrapClass, {
                // 只读状态
                'disabled': this.disabled
            }];
        },

        // 星星未被选中class
        voidClass: function voidClass() {
            // 判断是否为只读
            return this.disabled ? this.classMap.disabledVoidClass : this.classMap.voidClass;
        },

        // 星星被选中class
        activeClass: function activeClass() {
            return this.getValueFromMap(this.currentValue, this.classMap);
        },

        // 所有星星当前的class集合
        classes: function classes() {
            // 返回结果
            var ret = [],
                i = 0,

            // 界限
            threshold = this.currentValue;
            // 如果允许半星 且 当前值为小数
            if (this.allowHalf && this.currentValue !== Math.floor(this.currentValue)) {
                threshold--;
            }
            // 放入被选中星星的class
            for (; i < threshold; i++) {
                ret.push(this.activeClass);
            }
            // 放入未被选中星星的class
            for (; i < this.max; i++) {
                ret.push(this.voidClass);
            }
            return ret;
        },

        // 半星的class
        halfIconClass: function halfIconClass() {
            return this.getValueFromMap(this.value, this.classMap);
        },

        // 半星的样式
        halfIconStyle: function halfIconStyle() {
            return {
                color: this.activeColor
            };
        },

        // 各种状态下颜色查询地图
        colorMap: function colorMap() {
            return {
                // 低分
                lowColor: this.colors[0],
                // 中等分数
                mediumColor: this.colors[1],
                // 高分
                highColor: this.colors[2],
                // 默认颜色
                voidColor: this.voidColor,
                // 只读颜色
                disabledVoidColor: this.disabledVoidColor
            };
        },

        // 选中时的颜色
        activeColor: function activeColor() {
            return this.getValueFromMap(this.currentValue, this.colorMap);
        },

        // 提示文字
        text: function text() {
            var ret = '';
            if (this.disabled) {
                ret = this.value;
            } else {
                ret = this.texts[Math.ceil(this.currentValue) - 1];
            }
            return ret;
        }
    },
    watch: {
        value: function value(val) {
            this.$emit('on-change', val);
            this.currentValue = val;
            this.pointerAtLeftHalf = this.value !== Math.floor(this.value);
        }
    },
    created: function created() {
        // 设置class查询地图数据
        this.classMap = {
            // 低分星星class
            lowClass: this.iconClasses[0],
            // 中分星星class
            mediumClass: this.iconClasses[1],
            // 高分星星class
            highClass: this.iconClasses[2],
            // 未选中星星class
            voidClass: this.voidIconClass,
            // 只读状态星星class
            disabledVoidClass: this.disabledVoidIconClass
        };
    },
    mounted: function mounted() {},

    methods: {
        // 通过传入指定值和查询地图获得对应的颜色或class
        getValueFromMap: function getValueFromMap(value, map) {
            var ret = '';
            // 低分
            if (value <= this.lowThreshold) {
                ret = map.lowColor || map.lowClass;
            }
            // 高分
            else if (value >= this.highThreshold) {
                    ret = map.highColor || map.highClass;
                }
                // 中等分数
                else {
                        ret = map.mediumColor || map.mediumClass;
                    }
            return ret;
        },

        // 设置当前分数
        setCurrentValue: function setCurrentValue(value, e) {
            // 如果为只读
            if (this.disabled) return;
            // 如果允许半星
            if (this.allowHalf) {
                // 鼠标指向的DOM对象
                var target = e.target;
                // 如果为星星项目容器
                if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_dom_js__["c" /* hasClass */])(target, 'm-rate-item')) {
                    target = target.querySelector('.m-rate-star');
                }
                // 如果为半星容器
                if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_dom_js__["c" /* hasClass */])(target, 'm-rate-half')) {
                    target = target.parentNode;
                }
                // 鼠标移入半星上面
                this.pointerAtLeftHalf = e.offsetX * 2 <= target.clientWidth;
                // 当前值
                this.currentValue = this.pointerAtLeftHalf ? value - 0.5 : value;
            } else {
                this.currentValue = value;
            }
            // 当前选中的星星index
            this.hoverIndex = value;

            // console.log(this.currentValue);
            // console.log(e)
        },

        // 选中分数
        selectValue: function selectValue(value) {
            // 只读
            if (this.disabled) return;
            // 半星切被选中
            if (this.allowHalf && this.pointerAtLeftHalf) {
                this.$emit('input', this.currentValue);
            } else {
                this.$emit('input', value);
            }
        },

        // 重新刷新分数 用于鼠标移开事件
        resetCurrentValue: function resetCurrentValue() {
            // 只读
            if (this.disabled) return;
            // 设置半星被选中状态
            if (this.allowHalf) {
                this.pointerAtLeftHalf = this.value !== Math.floor(this.value);
            }
            // 重新设置当前值
            this.currentValue = this.value;
            // 重新设置星星索引
            this.hoverIndex = -1;
        },

        // 是否显示半星
        showHalfIcon: function showHalfIcon(item) {
            return this.allowHalf && this.pointerAtLeftHalf && item - 0.5 <= this.currentValue && item > this.currentValue;
        },

        // 星星的样式
        getIconStyle: function getIconStyle(item) {
            // 默认颜色
            var voidColor = this.disabled ? this.colorMap.disabledVoidColor : this.colorMap.voidColor,

            // 获得颜色
            color = item <= this.currentValue ? this.activeColor : voidColor;
            return {
                color: color
            };
        }
    }
});

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_variables_js__ = __webpack_require__(161);

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

// 公共方法

// 引入子组件

// 引入公共样式变量


// 主容器 class
var wrapClass = 'm-progress',

// 文字信息主容器
textClass = 'm-progress-text';

// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    // 组件名称
    name: 'MProgress',
    // 属性
    props: {
        // 颜色风格
        type: {
            type: String,
            default: 'primary',
            validator: function validator(val) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['primary', 'success', 'info', 'warning', 'error', 'noble'], val);
            }
        },
        // 进度条形状 包含：默认、circle(环形)
        shape: {
            type: String,
            default: 'line',
            validator: function validator(val) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['line', 'circle'], val);
            }
        },
        // 百分比 0-100之间 为必填
        percent: {
            type: Number,
            default: 0,
            required: true,
            validator: function validator(val) {
                return val >= 0 && val <= 100;
            }
        },
        // 进度条宽度 单位为px
        barWidth: {
            type: Number,
            default: 20
        },
        // 是否禁止文字描述
        hideText: {
            type: Boolean,
            default: false
        },
        // 文字描述是否内置
        textInside: {
            type: Boolean,
            default: false
        },
        // 文字描述位置
        textPosition: {
            type: String,
            default: 'center',
            validator: function validator(val) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['left', 'center', 'right'], val);
            }
        },
        // 进度条状态：success(成功)、error(错误)
        status: {
            type: String,
            validator: function validator(val) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['success', 'error'], val);
            }
        },
        // 环状进度条大小
        size: {
            type: Number,
            default: 150
        },
        // 是否为胶囊状
        pill: {
            type: Boolean,
            default: false
        }
    },
    // 数据
    data: function data() {
        // 输入数据
        return {
            // 公共变量
            baseVars: __WEBPACK_IMPORTED_MODULE_3__common_variables_js__["a" /* default */]
        };
    },

    // 计算属性
    computed: {
        // 主容器class
        wrapClasses: function wrapClasses() {
            var _ref;

            return [
            // 默认class
            '' + wrapClass, (_ref = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, wrapClass + '-' + this.shape, !!this.shape), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, wrapClass + '-' + this.barType, !!this.barType), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, wrapClass + '-pill', !!this.pill), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, wrapClass + '-status-' + this.status, !!this.status), _ref)];
        },

        // 进度条状态
        barType: function barType() {
            // 如果状态存在 返回状态 否则 返回颜色风格
            return this.status ? this.status : this.type;
        },

        // 进度条样式
        barStyle: function barStyle() {
            return {
                // 进度条宽度
                height: this.barWidth + 'px'
            };
        },

        // 进度条背景样式
        barInnerStyle: function barInnerStyle() {
            return {
                // 进度条宽度
                width: this.percent + '%'
            };
        },

        // 文本描述clas
        textClasses: function textClasses() {
            return [
            // 默认class
            '' + textClass, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, textClass + '-' + this.textPosition, this.textInside && !!this.textPosition)];
        },

        // 文字描述样式
        textStyle: function textStyle() {
            // 计算字体大小
            var fontSize = this.shape === 'circle' ? this.size * 0.111111 + 4 : this.barWidth * 0.7;
            // 如果小于12px 设置为12px
            fontSize = fontSize < 14 ? 14 : parseInt(fontSize);
            // 输出样式
            return {
                // 文字大小
                fontSize: fontSize + 'px'
            };
        },

        // 状态描述图标类型
        iconType: function iconType() {
            var ret = '',
                status = this.status;
            // 如果条状
            if (this.shape === "line") {
                if (status === 'success') {
                    ret = 'success-o-b';
                } else if (status === 'error') {
                    ret = 'error-o-b';
                }
            } else {
                if (status === 'success') {
                    ret = 'success';
                } else if (status === 'error') {
                    ret = 'error';
                }
            }
            return ret;
        },

        // 是否为环形
        isCircle: function isCircle() {
            return this.shape === 'circle';
        },

        // 环形进度条主容器样式
        circleStyle: function circleStyle() {
            var width = this.size + 'px';
            return {
                width: width,
                height: width
            };
        },

        // 环形进度条宽度
        circleBarWidth: function circleBarWidth() {
            return (this.barWidth / this.size * 100).toFixed(1);
        },

        // 环形进度条背景
        trackPath: function trackPath() {
            var radius = parseInt(50 - parseFloat(this.circleBarWidth) / 2, 10);
            return 'M 50 50 m 0 -' + radius + ' a ' + radius + ' ' + radius + ' 0 1 1 0 ' + radius * 2 + ' a ' + radius + ' ' + radius + ' 0 1 1 0 -' + radius * 2;
        },

        // 进度条周长  用于计算百分比
        perimeter: function perimeter() {
            var radius = 50 - parseFloat(this.circleBarWidth) / 2;
            return 2 * Math.PI * radius;
        },

        // 环形进度条路径样式
        circlePathStyle: function circlePathStyle() {
            var perimeter = this.perimeter;
            return {
                strokeDasharray: perimeter + 'px, ' + perimeter + 'px',
                strokeDashoffset: (1 - this.percent / 100) * perimeter + 'px',
                transition: 'stroke-dashoffset 0.2s linear 0s, stroke 0.2s linear'
            };
        },

        // 环形进度条的形状
        pathShape: function pathShape() {
            return this.pill ? 'round' : '';
        },

        // 环形进度条颜色
        pathBgColor: function pathBgColor() {
            // 获得公共变量
            var baseVars = this.baseVars,

            // 设置默认颜色
            ret = baseVars.color_primary;

            switch (this.barType) {
                case 'success':
                    ret = baseVars.color_success;
                    break;
                case 'info':
                    ret = baseVars.color_info;
                    break;
                case 'warning':
                    ret = baseVars.color_warning;
                    break;
                case 'error':
                    ret = baseVars.color_error;
                    break;
                case 'noble':
                    ret = baseVars.color_noble;
                    break;
            }
            return ret;
        }
    },
    // 实例初始化完成
    mounted: function mounted() {},

    // 方法
    methods: {},
    // 子组件
    components: { MIcon: __WEBPACK_IMPORTED_MODULE_2__icon__["a" /* default */] }
});

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon__ = __webpack_require__(5);

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
//
//
//
//

// 公共方法

// 引入子组件

// 主容器 class
var wrapClass = 'm-alert';

// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'MAlert',
    props: {
        // 类型
        type: {
            type: String,
            default: 'info',
            validator: function validator(value) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['success', 'info', 'warning', 'error', 'noble'], value);
            }
        },
        // 标题
        title: String,
        // 提示内容
        content: String,
        // 是否为可关闭
        closable: {
            type: Boolean,
            default: false
        },
        // 自定义关闭文字
        closeText: String,
        // 是否显示图标
        showIcon: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            // 显示状态
            visible: true
        };
    },

    computed: {
        // 主容器class
        wrapClasses: function wrapClasses() {
            var _ref;

            return [
            // 默认class
            '' + wrapClass, (_ref = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, wrapClass + '-' + this.type, !!this.type), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, wrapClass + '-with-icon', this.showIcon), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, wrapClass + '-with-title', this.isTitle), _ref)];
        },

        // 是否存在标题
        isTitle: function isTitle() {
            return this.title || this.$slots.title;
        },

        // 图标类型
        iconType: function iconType() {
            var type = '';
            // 根据主题风格设置图标类型
            switch (this.type) {
                case 'success':
                    type = 'success-face';
                    break;
                case 'info':
                    type = 'info-o';
                    break;
                case 'warning':
                    type = 'warn-o';
                    break;
                case 'error':
                    type = 'error-face';
                    break;
                case 'noble':
                    type = 'ask-o';
                    break;
            }
            return type;
        }
    },
    mounted: function mounted() {},

    // 方法
    methods: {
        // 提示关闭事件
        close: function close(e) {
            // 设置显示状态
            this.visible = false;
            // 提交事件
            this.$emit('on-close', e);
        }
    },
    components: { MIcon: __WEBPACK_IMPORTED_MODULE_2__icon__["a" /* default */] }
});

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_popper__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_transfer_dom__ = __webpack_require__(66);

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

// 公共方法

// 弹出控件


// 主容器 class
var wrapClass = 'm-tooltip';

// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'MTooltip',
    mixins: [__WEBPACK_IMPORTED_MODULE_2__utils_popper__["a" /* default */]],
    directives: { TransferDom: __WEBPACK_IMPORTED_MODULE_3__directives_transfer_dom__["a" /* default */] },
    props: {
        // 颜色风格
        type: {
            type: String,
            validator: function validator(val) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['primary', 'success', 'info', 'warning', 'error', 'noble'], val);
            }
        },
        // 弹出层相对按钮的位置 默认在下面
        placement: {
            validator: function validator(value) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'], value);
            },

            default: 'bottom'
        },
        // 内容
        content: {
            type: [String, Number],
            default: ''
        },
        // 是否为边框类型 默认为否
        bordered: {
            type: Boolean,
            default: false
        },
        // 延时 单位毫秒
        delay: {
            type: Number,
            default: 100
        },
        // 禁止显示
        disabled: {
            type: Boolean,
            default: false
        },
        // 一直显示
        always: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {};
    },

    watch: {
        content: function content() {
            this.updatePopper();
        }
    },
    computed: {
        // 主容器class
        wrapClasses: function wrapClasses() {
            var _ref;

            return [
            // 默认class
            '' + wrapClass, (_ref = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, wrapClass + '-' + this.type, !!this.type), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'bordered', this.bordered), _ref)];
        }
    },
    mounted: function mounted() {
        // 如果为一直显示
        if (this.always) {
            this.updatePopper();
        }
    },

    methods: {
        // 打开弹出层
        showPopper: function showPopper() {
            var _this = this;

            // 如果定时器已经存在 先清除
            if (this.timeout) clearTimeout(this.timeout);
            // 设置打开弹出层
            this.timeout = setTimeout(function () {
                _this.visible = true;
            }, this.delay);
        },

        // 关闭弹出层
        closePopper: function closePopper() {
            var _this2 = this;

            // 如果存在定时器
            if (this.timeout) {
                // 清除
                clearTimeout(this.timeout);
                // 关闭弹出层
                if (!this.controlled) {
                    this.timeout = setTimeout(function () {
                        _this2.visible = false;
                    }, 100);
                }
            }
        }
    }
});

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_63__;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.4
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Popper = factory());
}(this, (function () { 'use strict';

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // Avoid blurry text by using full pixel integers.
  // For pixel-perfect positioning, top/bottom prefers rounded
  // values, while left/right prefers floored values.
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.round(popper.top),
    bottom: Math.round(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

return Popper;

})));
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(65)))

/***/ }),
/* 65 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);

// Thanks to: https://github.com/airyland/vux/blob/v2/src/directives/transfer-dom/index.js
// Thanks to: https://github.com/calebroseland/vue-dom-portal

/**
 * Get target DOM Node
 * @param {(Node|string|Boolean)} [node=document.body] DOM Node, CSS selector, or Boolean
 * @return {Node} The target that the el will be appended to
 */
function getTarget(node) {
    if (node === void 0) {
        node = document.body;
    }
    if (node === true) {
        return document.body;
    }
    return node instanceof window.Node ? node : document.querySelector(node);
}

var directive = {
    inserted: function inserted(el, _ref, vnode) {
        var value = _ref.value;

        if (el.dataset.transfer !== 'true') return false;
        el.className = el.className ? el.className + ' v-transfer-dom' : 'v-transfer-dom';
        var parentNode = el.parentNode;
        if (!parentNode) return;
        var home = document.createComment('');
        var hasMovedOut = false;

        if (value !== false) {
            parentNode.replaceChild(home, el); // moving out, el is no longer in the document
            getTarget(value).appendChild(el); // moving into new place
            hasMovedOut = true;
        }
        if (!el.__transferDomData) {
            el.__transferDomData = {
                parentNode: parentNode,
                home: home,
                target: getTarget(value),
                hasMovedOut: hasMovedOut
            };
        }
    },
    componentUpdated: function componentUpdated(el, _ref2) {
        var value = _ref2.value;

        if (el.dataset.transfer !== 'true') return false;
        // need to make sure children are done updating (vs. `update`)
        var ref$1 = el.__transferDomData;
        if (!ref$1) return;
        // homes.get(el)
        var parentNode = ref$1.parentNode;
        var home = ref$1.home;
        var hasMovedOut = ref$1.hasMovedOut; // recall where home is

        if (!hasMovedOut && value) {
            // remove from document and leave placeholder
            parentNode.replaceChild(home, el);
            // append to target
            getTarget(value).appendChild(el);
            el.__transferDomData = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, el.__transferDomData, { hasMovedOut: true, target: getTarget(value) });
        } else if (hasMovedOut && value === false) {
            // previously moved, coming back home
            parentNode.replaceChild(el, home);
            el.__transferDomData = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, el.__transferDomData, { hasMovedOut: false, target: getTarget(value) });
        } else if (value) {
            // already moved, going somewhere else
            getTarget(value).appendChild(el);
        }
    },
    unbind: function unbind(el) {
        if (el.dataset.transfer !== 'true') return false;
        el.className = el.className.replace('v-transfer-dom', '');
        var ref$1 = el.__transferDomData;
        if (!ref$1) return;
        if (el.__transferDomData.hasMovedOut === true) {
            el.__transferDomData.parentNode && el.__transferDomData.parentNode.appendChild(el);
        }
        el.__transferDomData = null;
    }
};

/* harmony default export */ __webpack_exports__["a"] = (directive);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_base__ = __webpack_require__(1);

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

// 公共方法

// 主容器 class
var wrapClass = 'm-badge';

// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'MBadge',
    props: {
        // 显示数值
        value: [Number, String],
        // 最大值
        max: Number,
        // 是否为小圆点
        dot: {
            type: Boolean,
            default: false
        },
        // 自定义class
        className: String,
        // 是否隐藏徽章
        hide: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {};
    },

    computed: {
        // 主容器class
        wrapClasses: function wrapClasses() {
            return '' + wrapClass;
        },

        // 徽章内容class
        contentClasses: function contentClasses() {
            var _ref;

            return [wrapClass + '-cont', (_ref = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, wrapClass + '-dot', this.dot), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, wrapClass + '-cont-alone', this.alone), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, '' + this.className, !!this.className), _ref)];
        },

        // 是否显示徽章
        isShow: function isShow() {
            return !this.hide && (this.content || this.dot);
        },

        // 徽章内容
        content: function content() {
            // 如果为小圆点
            if (this.dot) return;
            // 获得传入的值和最大值
            var value = this.value,
                max = this.max;
            // 判断是否超出最大值
            if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["e" /* isNumber */])(value) && Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["e" /* isNumber */])(max)) {
                return value < max ? value : max + '+';
            }
            return value;
        },

        // 徽章是否为单独使用
        alone: function alone() {
            return this.$slots.default === undefined;
        }
    },
    mounted: function mounted() {},

    methods: {}
});

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon__ = __webpack_require__(5);

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

// 公共方法

// 引入子组件

// 主容器 class
var wrapClass = 'm-tag';

// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'MTag',
    props: {
        // 标签文字 也可以直接通过slot设置
        label: String,
        // 颜色风格
        type: {
            type: String,
            validator: function validator(value) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['primary', 'success', 'info', 'warning', 'error', 'noble'], value);
            }
        },
        // 形状
        shape: {
            type: String,
            validator: function validator(value) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['border', 'dot', 'dot-border'], value);
            }
        },
        // 标签高度
        height: {
            type: Number,
            default: 28
        },
        // 可关闭的
        closable: {
            type: Boolean,
            default: false
        },
        // 可以绑定名称 用于关闭等事件识别
        name: {
            type: [String, Number]
        }
    },
    data: function data() {
        return {};
    },

    computed: {
        // 主容器class
        wrapClasses: function wrapClasses() {
            var _ref;

            return ['' + wrapClass, (_ref = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, wrapClass + '-' + this.type, !!this.type), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, wrapClass + '-' + this.shape, !!this.shape), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, wrapClass + '-with-close', this.closable), _ref)];
        },

        // 主容器样式
        wrapStyle: function wrapStyle() {
            var style = {
                height: this.height + "px",
                lineHeight: this.closeSize + "px"
            };
            if (this.closable) style.paddingRight = this.closeSize + "px";
            return style;
        },

        // 关闭按钮样式
        closeStyle: function closeStyle() {
            return {
                width: this.closeSize + "px",
                height: this.closeSize + "px"
            };
        },

        // 关闭按钮大小
        closeSize: function closeSize() {
            // 减掉上下1像素边框 和 上下1像素边距
            return this.height - 2;
        },

        // 是否为圆点类型
        isDot: function isDot() {
            return this.shape === 'dot' || this.shape === 'dot-border';
        }
    },
    mounted: function mounted() {},

    methods: {
        // 关闭
        close: function close(e) {
            if (this.name === undefined) {
                this.$emit('on-close', event);
            } else {
                this.$emit('on-close', event, this.name);
            }
        }
    },
    components: { MIcon: __WEBPACK_IMPORTED_MODULE_2__icon__["a" /* default */] }
});

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

// 主容器 class
var wrapClass = 'm-timeline';

// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'MTimeline',
    props: {},
    data: function data() {
        return {};
    },

    computed: {
        // 主容器class
        wrapClasses: function wrapClasses() {
            return ['' + wrapClass, {}];
        }
    },
    mounted: function mounted() {},

    methods: {}
});

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_base__ = __webpack_require__(1);

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

// 公共方法

// 主容器 class
var wrapClass = 'm-timeline-item';

// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'MTimelineItem',
    props: {
        // 颜色风格
        type: {
            type: String,
            default: 'primary',
            validator: function validator(value) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['primary', 'success', 'info', 'warning', 'error', 'noble'], value);
            }
        },
        // 圆点和线容器的宽度
        tailWidth: {
            type: Number,
            default: 32
        },
        title: String,
        // 图标
        icon: String
    },
    data: function data() {
        return {
            showTitle: false
        };
    },

    computed: {
        // 主容器class
        wrapClasses: function wrapClasses() {
            return ['' + wrapClass, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, wrapClass + '-' + this.type, !!this.type)];
        },

        // 主容器样式
        wrapStyle: function wrapStyle() {
            return {
                paddingLeft: this.tailWidth + 'px'
            };
        },

        // 圆点主容器样式
        tailStyle: function tailStyle() {
            return {
                width: this.tailWidth + 'px'
            };
        },

        // 圆点class
        iconClasses: function iconClasses() {
            return this.icon ? 'm-i-' + this.icon : 'm-timeline-dot-inner';
        }
    },
    mounted: function mounted() {
        // 检查是否存在标题插槽
        this.showTitle = this.title || this.$slots.title !== undefined;
    },

    methods: {}
});

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_base__ = __webpack_require__(1);

//
//
//
//
//
//

// 公共方法

// 主容器 class
var wrapClass = 'm-quote';

// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'MQuote',
    props: {
        // 颜色主题
        type: {
            type: String,
            validator: function validator(value) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['primary', 'success', 'info', 'warning', 'error', 'noble'], value);
            }
        },
        // 是否显示边框
        bordered: {
            type: Boolean,
            default: false
        },
        // 是否显示背景
        showBg: {
            type: Boolean,
            default: false
        },
        // 是否有圆角
        radius: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {};
    },

    computed: {
        // 主容器class
        wrapClasses: function wrapClasses() {
            var _ref;

            return [
            // 默认class
            '' + wrapClass, (_ref = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, wrapClass + '-' + this.type, !!this.type), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'bordered', this.bordered), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'show-bg', this.showBg), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, 'radius', this.radius), _ref)];
        }
    },
    mounted: function mounted() {},

    // 方法
    methods: {}

});

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon__ = __webpack_require__(5);

//
//
//
//
//
//
//
//

// 公共方法

// 引入子组件


// 主容器 class
var wrapClass = 'm-avatar';

// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'MAvatar',
    props: {
        // 形状
        shape: {
            type: String,
            validator: function validator(value) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['square', 'box', 'circle'], value);
            }
        },
        // 尺寸
        size: {
            type: String,
            validator: function validator(value) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['mini', 'small', 'default', 'large'], value);
            }
        },
        // 图标
        icon: String,
        // 图片路径
        src: String
    },
    data: function data() {
        return {};
    },

    computed: {
        // 主容器class
        wrapClasses: function wrapClasses() {
            var _ref;

            return [
            // 默认class
            '' + wrapClass, (_ref = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, wrapClass + '-' + this.shape, !!this.shape), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, wrapClass + '-' + this.size, !!this.size), _ref)];
        }
    },
    mounted: function mounted() {},

    // 方法
    methods: {},
    // 子组件
    components: { MIcon: __WEBPACK_IMPORTED_MODULE_2__icon__["a" /* default */] }
});

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_base__ = __webpack_require__(1);

//
//
//
//
//
//

// 公共方法

// 主容器 class
var wrapClass = 'm-collapse';

// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'MCollapse',
    props: {
        // 颜色风格
        type: {
            type: String,
            validator: function validator(value) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['white'], value);
            }
        },
        // 当前展开的项目
        value: {
            type: [Array, String]
        },
        // 是否为手风琴模式
        accordion: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            // 当前展开项
            currentValue: this.value
        };
    },

    computed: {
        // 主容器class
        wrapClasses: function wrapClasses() {
            return [
            // 默认class
            '' + wrapClass, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, wrapClass + '-' + this.type, !!this.type)];
        }
    },
    watch: {
        value: function value(val) {
            this.currentValue = val;
        },
        currentValue: function currentValue() {
            this.setOpen();
        }
    },
    mounted: function mounted() {
        // 初始化展开项
        this.setOpen();
    },

    // 方法
    methods: {
        // 设置展开项
        setOpen: function setOpen() {
            // 获取当前展开项
            var openKey = this.getOpenKey();
            // 遍历所有的面板项
            this.$children.forEach(function (child, index) {
                // 当前面板的名称 如果没有名称 使用index
                var name = child.name || Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["i" /* toString */])(index),

                // 显示状态 判断是否存在于展开项数组中
                isOpen = Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(openKey, name);

                // 设置打开状态和索引
                child.isOpen = isOpen;
                child.index = index;
            });
        },

        // 获取需要展开的项目的key
        getOpenKey: function getOpenKey() {
            // 获取当前展开项
            var openKey = this.currentValue || [];
            // 如果不是数组
            if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["c" /* isArray */])(openKey)) {
                openKey = [openKey];
            }

            // 如果为手风琴模式 且长度大于1
            if (this.accordion && openKey.length > 1) {
                // 取第0个
                openKey = [openKey[0]];
            }

            // 将所有的key转换成字符串 防止index为数字
            openKey = openKey.map(function (value) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["i" /* toString */])(value);
            });

            return openKey;
        },

        // 切换某个面板打开状态
        toggle: function toggle(obj) {
            // 当前面板名称
            var name = Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["i" /* toString */])(obj.name),

            // 新的展开值
            newOpenKey = [];

            // 如果为手风琴
            if (this.accordion) {
                // 如果当前项目不是展开项 设置展开
                if (!obj.isOpen) {
                    newOpenKey.push(name);
                }
            } else {
                // 获取之前的展开名称
                var openKey = this.getOpenKey(),

                // 当前面板名称在展开项中的索引
                index = openKey.indexOf(name);

                // 如果是展开的
                if (obj.isOpen) {
                    // 如果存在数组中 删除
                    if (index > -1) {
                        openKey.splice(index, 1);
                    }
                } else {
                    // 如果不存在数组中 放入
                    if (index < 0) {
                        openKey.push(name);
                    }
                }
                // 设置新的展开项
                newOpenKey = openKey;
            }
            // 设置当前值 并提交事件
            this.currentValue = newOpenKey;
            this.$emit('input', newOpenKey);
            this.$emit('on-change', newOpenKey);
        }
    }
});

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icon__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_collapse_transition_js__ = __webpack_require__(191);
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

// 引入子组件

// 折叠面板动画


// 主容器 class
var wrapClass = 'm-collapse-item';

// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'MCollapseItem',
    props: {
        // 标题
        title: String,
        // 名称
        name: String
    },
    data: function data() {
        return {
            // 当没有使用name时索引默认值
            index: 0,
            // 打开状态
            isOpen: false
        };
    },

    computed: {
        // 主容器class
        wrapClasses: function wrapClasses() {
            return [
            // 默认class
            '' + wrapClass, {
                'is-open': this.isOpen
            }];
        }
    },
    mounted: function mounted() {},

    // 方法
    methods: {
        // 切换展开状态
        toggle: function toggle() {
            this.$parent.toggle({
                // 当前面板名称
                name: this.name || this.index,
                // 打开状态
                isOpen: this.isOpen
            });
        }
    },
    // 子组件
    components: { MIcon: __WEBPACK_IMPORTED_MODULE_0__icon__["a" /* default */], MCollapseTransition: __WEBPACK_IMPORTED_MODULE_1__common_collapse_transition_js__["a" /* default */] }
});

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

// 主容器 class
var wrapClass = 'm-card';

// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'MCard',
    props: {
        // 卡片名称 用于提交点击事件
        name: String,
        // 标题
        title: String,
        // 封面 图片路径
        cover: String,
        // 是的有边框
        bordered: {
            type: Boolean,
            default: true
        },
        // 是否禁止hover
        disHover: {
            type: Boolean,
            default: false
        },
        // 是否禁止封面hover
        disCoverHover: {
            type: Boolean,
            default: false
        },
        // 主要内容样式
        bodyStyle: Object,
        // 预加载
        loading: {
            type: Boolean,
            default: false
        },
        // 操作按钮
        actions: Array
    },
    data: function data() {
        return {
            // 是否显示标题
            showTitle: false,
            // 是否显示封面
            showCover: false,
            // 是否显示底部
            showFoot: false
        };
    },

    computed: {
        // 主容器class
        wrapClasses: function wrapClasses() {
            return [
            // 默认class
            '' + wrapClass, {
                // 边框
                'bordered': this.bordered,
                // 卡片悬停事件
                'hover': !this.disHover,
                // 封面悬停事件
                'cover-hover': !this.disCoverHover

            }];
        },

        // 是否存在操作集合
        isActions: function isActions() {
            return this.actions && this.actions.length;
        },

        // 操作集合样式
        actionItemStyles: function actionItemStyles() {
            // 获得操作集合数组
            var actions = this.actions,
                width = actions ? (100 / this.actions.length).toFixed(2) : 0;
            return {
                width: width + '%'
            };
        }
    },
    mounted: function mounted() {
        // 设置显示状态
        this.showTitle = this.title || this.$slots.title !== undefined;
        this.showCover = this.cover || this.$slots.cover !== undefined;
        this.showFoot = this.isActions || this.$slots.foot !== undefined;
    },

    methods: {
        // 卡片点击事件
        handleClick: function handleClick(e) {
            this.$emit('on-click', this.name);
        },

        // 处理操作集合点击事件
        handleActionClick: function handleActionClick(item) {
            this.$emit('on-action-click', item, item.name);
        }
    }
});

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_base__ = __webpack_require__(1);

//
//
//
//
//
//
//
//

// 公共方法

// 主容器 class
var wrapClass = 'm-divider';

// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'MDivider',
    props: {
        // 类型
        type: {
            type: String,
            default: 'horizontal',
            validator: function validator(value) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['horizontal', 'vertical'], value);
            }
        },
        // 方向
        orientation: {
            type: String,
            validator: function validator(value) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['left', 'center', 'right'], value);
            }
        },
        // 是否为虚线
        dashed: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            showText: false
        };
    },

    computed: {
        // 主容器class
        wrapClasses: function wrapClasses() {
            var _ref;

            return [
            // 默认class
            '' + wrapClass, (_ref = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, wrapClass + '-' + this.type, !!this.type), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, wrapClass + '-' + this.orientation, !!this.orientation), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, wrapClass + '-dashed', !!this.dashed), _ref)];
        }
    },
    mounted: function mounted() {
        // 设置是否显示文字  垂直状态不显示
        this.showText = this.$slots.default !== undefined && this.type === 'horizontal';
    },

    methods: {}
});

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_vdom__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_dropdown_vue__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_transfer_dom__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_v_click_outside_x__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_v_click_outside_x___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_v_click_outside_x__);

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
//
//
//
//

// 公共方法

// vue 组件操作方法

// 引入下拉菜单的弹出层组件

// 动画

// 外部点击事件指令

// 主容器 class
var wrapClass = 'm-dropdown';

// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'MDropdown',
    components: { MDrop: __WEBPACK_IMPORTED_MODULE_3__select_dropdown_vue__["a" /* default */] },
    directives: { TransferDom: __WEBPACK_IMPORTED_MODULE_4__directives_transfer_dom__["a" /* default */], clickOutside: __WEBPACK_IMPORTED_MODULE_5_v_click_outside_x__["directive"] },
    props: {
        // 显示状态
        visible: {
            type: Boolean,
            default: false
        },
        // 下拉列表相对按钮的位置
        placement: {
            validator: function validator(value) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'], value);
            },

            default: 'bottom'
        },
        // 触发方式
        trigger: {
            validator: function validator(value) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils_base__["b" /* includes */])(['click', 'hover', 'contextMenu', 'custom'], value);
            },

            default: 'hover'
        },
        // 是否为分割按钮
        splitButton: {
            type: Boolean,
            default: false
        },
        // 是否将弹层放置于 body 内
        transfer: {
            type: Boolean,
            default: false
        },
        // 下拉列表使用父级宽度 也就是按钮宽度
        parentWidth: {
            type: Boolean,
            default: false
        },
        // 是否取消
        noMaxHeight: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            // 当前显示状态
            currentVisible: this.visible
        };
    },

    computed: {
        // 主容器class
        wrapClasses: function wrapClasses() {
            return ['' + wrapClass];
        },
        listClasses: function listClasses() {
            return [__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, wrapClass + '-transfer', this.transfer)];
        }
    },
    watch: {
        visible: function visible(val) {
            this.currentVisible = val;
        },
        currentVisible: function currentVisible(val) {
            if (val) {
                this.$refs.drop.update();
            } else {
                this.$refs.drop.destroy();
            }
            this.$emit('on-visible-change', val);
        }
    },
    mounted: function mounted() {
        var _this = this;

        // 监测菜单项目点击事件
        this.$on('on-click', function (key) {
            var $parent = _this.hasParent();
            if ($parent) $parent.$emit('on-click', key);
        });

        // 处理触发方式为hover的菜单项目点击事件
        this.$on('on-hover-click', function () {
            var $parent = _this.hasParent();
            if ($parent) {
                _this.$nextTick(function () {
                    if (_this.trigger === 'custom') return false;
                    _this.currentVisible = false;
                });
                $parent.$emit('on-hover-click');
            } else {
                _this.$nextTick(function () {
                    if (_this.trigger === 'custom') return false;
                    _this.currentVisible = false;
                });
            }
        });

        this.$on('on-haschild-click', function () {
            _this.$nextTick(function () {
                if (_this.trigger === 'custom') return false;
                _this.currentVisible = true;
            });
            var $parent = _this.hasParent();
            if ($parent) $parent.$emit('on-haschild-click');
        });
    },

    methods: {
        // 按钮点击事件
        handleClick: function handleClick() {
            if (this.trigger !== 'click' || this.trigger === 'custom') {
                return false;
            }
            this.currentVisible = !this.currentVisible;
        },
        handleRightClick: function handleRightClick() {
            if (this.trigger !== 'contextMenu' || this.trigger === 'custom') {
                return false;
            }
            this.currentVisible = !this.currentVisible;
        },

        // 鼠标移入事件
        handleMouseenter: function handleMouseenter() {
            var _this2 = this;

            if (this.trigger !== 'hover' || this.trigger === 'custom') {
                return false;
            }
            if (this.timeout) clearTimeout(this.timeout);
            this.timeout = setTimeout(function () {
                _this2.currentVisible = true;
            }, 250);
        },

        // 鼠标离开事件
        handleMouseleave: function handleMouseleave() {
            var _this3 = this;

            if (this.trigger !== 'hover' || this.trigger === 'custom') {
                return false;
            }
            if (this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = setTimeout(function () {
                    _this3.currentVisible = false;
                }, 150);
            }
        },

        // 处理外部点击事件
        handleClickOutside: function handleClickOutside(e) {
            this.handleClose();
            this.handleRightClose();
            if (this.currentVisible) this.$emit('on-click-outside', e);
        },

        // 处理下拉菜单关闭事件
        handleClose: function handleClose() {
            if (this.trigger !== 'click' || this.trigger === 'custom') {
                return false;
            }
            this.currentVisible = false;
        },

        // 处理下拉菜单右键关闭事件
        handleRightClose: function handleRightClose() {
            if (this.trigger !== 'contextMenu' || this.trigger === 'custom') {
                return false;
            }
            this.currentVisible = false;
        },

        // 找到下拉菜单
        hasParent: function hasParent() {
            // 查找父级是不是下拉菜单
            var $parent = Object(__WEBPACK_IMPORTED_MODULE_2__utils_vdom__["a" /* findComponentUpward */])(this, 'MDropdown');
            //如果是返回下拉菜单组件 否则返回false
            return $parent ? $parent : false;
        }
    }
});

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = findComponentUpward;
/* unused harmony export findComponentDownward */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_js__ = __webpack_require__(1);

/**
 * 关于Vue DOM的一些操作
 */


/**
 * 向上查找组件
 * @param  {[object]} context        [当前组件对象]
 * @param  {[string]} componentName  [要查找的组件名称]
 * @param  {[array]}  componentNames [要查找组件名称集合]
 * @return {[object]}                [查找到的组件对象]
 */
function findComponentUpward(context, componentName, componentNames) {
    // 要查找的组件名称集合
    componentNames = Object(__WEBPACK_IMPORTED_MODULE_1__base_js__["g" /* isString */])(componentName) ? [componentName] : componentName;
    // 上一级组件
    var parent = context.$parent;
    var name = parent.$options.name;

    while (parent && (!name || componentNames.indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
    }
    return parent;
}

/**
 * 向下查找组件
 * @param  {[object]} context       [当前组件对象]
 * @param  {[string]} componentName [要查找的组件名称]
 * @return {[object]}               [查找到的组件对象]
 */
function findComponentDownward(context, componentName) {
    var childrens = context.$children;
    var children = null;

    if (childrens.length) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(childrens), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var child = _step.value;

                var name = child.$options.name;
                if (name === componentName) {
                    children = child;
                    break;
                } else {
                    children = findComponentDownward(child, componentName);
                    if (children) break;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return children;
}

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_dom_js__ = __webpack_require__(22);

//
//
//
//



// 弹出层控件
var isServer = __WEBPACK_IMPORTED_MODULE_1_vue___default.a.prototype.$isServer;
var Popper = isServer ? function () {} : __webpack_require__(64);
// 主容器 class
var wrapClass = 'm-select-dropdown';

// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'MDrop',
    props: {
        // 弹出层相对按钮的位置 默认在下面
        placement: {
            type: String,
            default: 'bottom-start'
        },
        // 使用父级宽度
        parentWidth: {
            type: Boolean,
            default: false
        },
        // 取消下拉列表最大高度限制
        noMaxHeight: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            // 弹出层实例
            popper: null,
            // 弹出层宽度
            width: '',
            // 弹出层状态
            popperStatus: false
        };
    },

    computed: {
        wrapClasses: function wrapClasses() {
            return ['' + wrapClass, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, wrapClass + '-no-max-height', this.noMaxHeight)];
        },
        styles: function styles() {
            var style = {};
            if (this.width) style.width = this.width + 'px';
            return style;
        }
    },
    created: function created() {
        this.$on('on-update-popper', this.update);
        this.$on('on-destroy-popper', this.destroy);
    },

    methods: {
        // 更新弹出层
        update: function update() {
            var _this = this;

            if (isServer) return;
            // 如果实例存在
            if (this.popper) {
                this.$nextTick(function () {
                    _this.popper.update();
                    _this.popperStatus = true;
                });
            } else {
                this.$nextTick(function () {
                    _this.popper = new Popper(_this.$parent.$refs.reference, _this.$el, {
                        placement: _this.placement,
                        modifiers: {
                            computeStyle: {
                                gpuAcceleration: false
                            },
                            preventOverflow: {
                                boundariesElement: 'window'
                            }
                        },
                        onCreate: function onCreate() {
                            _this.resetTransformOrigin();
                            _this.$nextTick(_this.popper.update());
                        },
                        onUpdate: function onUpdate() {
                            _this.resetTransformOrigin();
                        }
                    });
                });
            }

            // 处理选择器下拉列表宽度 为 100%
            if (this.$parent.$options.name === 'MSelect' || this.parentWidth) {
                this.width = parseInt(Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom_js__["b" /* getStyle */])(this.$parent.$el, 'width'));
            }
        },

        // 销毁弹出层
        destroy: function destroy() {
            var _this2 = this;

            if (this.popper) {
                setTimeout(function () {
                    if (_this2.popper && !_this2.popperStatus) {
                        _this2.popper.destroy();
                        _this2.popper = null;
                    }
                    _this2.popperStatus = false;
                }, 300);
            }
        },
        resetTransformOrigin: function resetTransformOrigin() {
            if (!this.popper) return;
            var x_placement = this.popper.popper.getAttribute('x-placement');
            var placementStart = x_placement.split('-')[0];
            var placementEnd = x_placement.split('-')[1];
            var leftOrRight = x_placement === 'left' || x_placement === 'right';
            if (!leftOrRight) {
                this.popper.popper.style.transformOrigin = placementStart === 'bottom' || placementStart !== 'top' && placementEnd === 'start' ? 'center top' : 'center bottom';
            }
        }
    },
    beforeDestroy: function beforeDestroy() {
        // 销毁弹出层
        if (this.popper) {
            this.popper.destroy();
        }
    }
});

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'MDropdownMenu'
});

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_vdom__ = __webpack_require__(78);
//
//
//
//

// vue 组件操作方法

// 输入框主容器 class
var wrapClass = 'm-dropdown-item';

// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'MDropdownItem',
    props: {
        // 项目名称
        name: {
            type: [String, Number]
        },
        // 是否被禁止
        disabled: {
            type: Boolean,
            default: false
        },
        // 是否选中了
        selected: {
            type: Boolean,
            default: false
        },
        // 是否有分割线
        divided: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {};
    },

    computed: {
        // 主容器class
        wrapClasses: function wrapClasses() {
            return ['' + wrapClass, {
                'disabled': this.disabled,
                'selected': this.selected,
                'divided': this.divided
            }];
        }
    },
    mounted: function mounted() {},

    methods: {
        // 下拉菜单选项点击事件
        handleClick: function handleClick() {
            // 向上找到下拉菜单组件
            var $parent = Object(__WEBPACK_IMPORTED_MODULE_0__utils_vdom__["a" /* findComponentUpward */])(this, 'MDropdown');
            // 看一下父级组件是否就是下拉菜单
            var hasChildren = this.$parent && this.$parent.$options.name === 'MDropdown';

            // 如果当前选项为禁止状态
            if (this.disabled) {
                this.$nextTick(function () {
                    $parent.currentVisible = true;
                });
            } else if (hasChildren) {
                this.$parent.$emit('on-haschild-click');
            } else {
                if ($parent && $parent.$options.name === 'MDropdown') {
                    $parent.$emit('on-hover-click');
                }
            }
            $parent.$emit('on-click', this.name);
        }
    }
});

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//


// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    // 组件名称
    name: 'MCrumb',
    // 属性
    props: {
        // 分隔符
        separator: {
            type: String,
            default: '/'
        }
    },
    mounted: function mounted() {
        // 更新子菜单分隔符
        this.updateChildren();
    },

    watch: {
        // 分隔符发生改变
        separator: function separator() {
            this.updateChildren();
        }
    },
    // 重新渲染时
    updated: function updated() {
        var _this = this;

        this.$nextTick(function () {
            _this.updateChildren();
        });
    },

    // 方法
    methods: {
        // 更新所有的子菜单分隔符
        updateChildren: function updateChildren() {
            var _this2 = this;

            this.$children.forEach(function (item) {
                item.separator = _this2.separator;
            });
        }
    }
});

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icon__ = __webpack_require__(5);
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

// 引入子组件


// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    // 组件名称
    name: 'MCrumbItem',
    // 属性
    props: {
        // 路由跳转地址
        to: {
            type: [Object, String]
        },
        // 图标
        icon: String,
        // 如果为true 路由跳转时，将不会向 history 添加新记录
        replace: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            // 分隔符
            separator: ''
        };
    },
    mounted: function mounted() {},

    methods: {
        // 处理面包屑导航点击事件
        handleClick: function handleClick() {
            // 判断vue-router 是否存在
            if (this.$router) {
                this.replace ? this.$router.replace(this.to) : this.$router.push(this.to);
            }
            // 调用locationn方法跳转
            else {
                    window.location.href = this.to;
                }
        }
    },
    // 子组件
    components: { MIcon: __WEBPACK_IMPORTED_MODULE_0__icon__["a" /* default */] }
});

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_dom_js__ = __webpack_require__(22);
//
//
//
//

// 引入DOM操作方法

// 主容器 class
var wrapClass = 'm-ellipsis';
// 输出
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'MEllipsis',
    props: {
        // 行数 默认为1行
        rows: {
            type: Number,
            default: 1
        },
        // 省略符号
        char: {
            type: String,
            default: '...'
        },
        // 文字所在位置
        position: {
            type: String,
            default: 'tail'
        },
        // 文字内容
        content: String
    },
    data: function data() {
        return {};
    },

    computed: {
        // 主容器class
        wrapClasses: function wrapClasses() {
            return [
            // 默认class
            '' + wrapClass];
        }
    },
    mounted: function mounted() {
        // 对文字进行处理
        this.ellipsisText();
    },

    methods: {
        // 对文字进行处理
        ellipsisText: function ellipsisText() {
            // 主容器
            var el = this.$refs.ellipsis,

            // 文字内容
            text = this.content || el.textContent,

            // 省略符号
            char = this.char,

            // 储存一份原始文本
            origText = text,

            // 之前文本长度
            origLength = origText.length,

            // 之前的高度
            origHeight = parseInt(Object(__WEBPACK_IMPORTED_MODULE_0__utils_dom_js__["b" /* getStyle */])(el, 'height')),

            // 文字行高
            lineHeight = parseFloat(Object(__WEBPACK_IMPORTED_MODULE_0__utils_dom_js__["b" /* getStyle */])(el, 'lineHeight'), 10),

            // 截取后的高度
            targetHeight = lineHeight * this.rows;

            // 如果之前的高度小于等于截取后的高度 不进行截取
            if (origHeight <= targetHeight) {
                return;
            }

            // 开始长度
            var start = 0,

            // 长度
            length = 0,

            // 结束长度
            end = text.length;

            // 如果省略位置在尾部
            if (this.position === 'tail') {
                // 处理文字
                while (start < end) {
                    length = Math.ceil((start + end) / 2);
                    // 设置内容 只是临时的内容
                    el.textContent = text.slice(0, length) + char;
                    // console.log(parseInt(getStyle(el, 'height')))
                    // 如果当前高度还是小于等于目标高度
                    if (parseInt(Object(__WEBPACK_IMPORTED_MODULE_0__utils_dom_js__["b" /* getStyle */])(el, 'height')) <= targetHeight) {
                        start = length;
                    } else {
                        end = length - 1;
                    }
                }

                text = text.slice(0, start);
                text += char;
            } else if (this.position === 'middle') {
                // 截取长度
                var sliceLength = 0,

                // 头 尾
                head = void 0,
                    tail = void 0;

                // 处理文字
                while (start < end) {
                    length = Math.ceil((start + end) / 2);
                    sliceLength = Math.max(origLength - length, 0);
                    // 设置内容 只是临时的内容
                    el.textContent = origText.slice(0, Math.floor((origLength - sliceLength) / 2)) + char + origText.slice(Math.floor((origLength + sliceLength) / 2), origLength);

                    if (parseInt(Object(__WEBPACK_IMPORTED_MODULE_0__utils_dom_js__["b" /* getStyle */])(el, 'height')) <= targetHeight) {
                        start = length;
                    } else {
                        end = length - 1;
                    }
                }

                sliceLength = Math.max(origLength - start, 0);
                // 获得头部
                head = origText.slice(0, Math.floor((origLength - sliceLength) / 2));
                // 获得尾部
                tail = origText.slice(Math.floor((origLength + sliceLength) / 2), origLength);
                // 拼接最终结果
                text = head + char + tail;
            }

            // 设置最终内容
            el.textContent = text;

            // console.log(origHeight)
            // console.log(targetHeight)
            // console.log(text)
        }
    }
});

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_icon__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_button__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_grid__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_input__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_input_number__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_radio__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_checkbox__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_switch__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_rate__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_progress__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_alert__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_tooltip__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_badge__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_tag__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_timeline__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_quote__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_avatar__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_collapse__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_card__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_divider__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_dropdown__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_crumb__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_ellipsis__ = __webpack_require__(219);


/**
 * 组件集
 */
// 图标

// 按钮

// 栅格

// 输入框

// 数字输入框

// 单选框

// 多选框

// 开关

// 评分

// 进度条

// 警告提示

// 文字提示

// 徽章

// 标签

// 时间轴

// 引用

// 头像

// 折叠面板

// 卡片

// 分割线

// 下拉菜单

// 面包屑

// 文字省略


// McakeUI组件集
var McakeUI = {
    Icon: __WEBPACK_IMPORTED_MODULE_2__components_icon__["a" /* default */],
    Button: __WEBPACK_IMPORTED_MODULE_3__components_button__["a" /* default */],
    ButtonGroup: __WEBPACK_IMPORTED_MODULE_3__components_button__["a" /* default */].Group,
    Row: __WEBPACK_IMPORTED_MODULE_4__components_grid__["b" /* Row */],
    Col: __WEBPACK_IMPORTED_MODULE_4__components_grid__["a" /* Col */],
    Input: __WEBPACK_IMPORTED_MODULE_5__components_input__["a" /* default */],
    InputNumber: __WEBPACK_IMPORTED_MODULE_6__components_input_number__["a" /* default */],
    Radio: __WEBPACK_IMPORTED_MODULE_7__components_radio__["a" /* default */],
    RadioGroup: __WEBPACK_IMPORTED_MODULE_7__components_radio__["a" /* default */].Group,
    Checkbox: __WEBPACK_IMPORTED_MODULE_8__components_checkbox__["a" /* default */],
    CheckboxGroup: __WEBPACK_IMPORTED_MODULE_8__components_checkbox__["a" /* default */].Group,
    Switch: __WEBPACK_IMPORTED_MODULE_9__components_switch__["a" /* default */],
    Rate: __WEBPACK_IMPORTED_MODULE_10__components_rate__["a" /* default */],
    Progress: __WEBPACK_IMPORTED_MODULE_11__components_progress__["a" /* default */],
    Alert: __WEBPACK_IMPORTED_MODULE_12__components_alert__["a" /* default */],
    Tooltip: __WEBPACK_IMPORTED_MODULE_13__components_tooltip__["a" /* default */],
    Badge: __WEBPACK_IMPORTED_MODULE_14__components_badge__["a" /* default */],
    Tag: __WEBPACK_IMPORTED_MODULE_15__components_tag__["a" /* default */],
    Timeline: __WEBPACK_IMPORTED_MODULE_16__components_timeline__["a" /* default */],
    TimelineItem: __WEBPACK_IMPORTED_MODULE_16__components_timeline__["a" /* default */].Item,
    Quote: __WEBPACK_IMPORTED_MODULE_17__components_quote__["a" /* default */],
    Avatar: __WEBPACK_IMPORTED_MODULE_18__components_avatar__["a" /* default */],
    Collapse: __WEBPACK_IMPORTED_MODULE_19__components_collapse__["a" /* default */],
    CollapseItem: __WEBPACK_IMPORTED_MODULE_19__components_collapse__["a" /* default */].Item,
    Card: __WEBPACK_IMPORTED_MODULE_20__components_card__["a" /* default */],
    Divider: __WEBPACK_IMPORTED_MODULE_21__components_divider__["a" /* default */],
    Dropdown: __WEBPACK_IMPORTED_MODULE_22__components_dropdown__["a" /* default */],
    DropdownMenu: __WEBPACK_IMPORTED_MODULE_22__components_dropdown__["a" /* default */].Menu,
    DropdownItem: __WEBPACK_IMPORTED_MODULE_22__components_dropdown__["a" /* default */].Item,
    Crumb: __WEBPACK_IMPORTED_MODULE_23__components_crumb__["a" /* default */],
    CrumbItem: __WEBPACK_IMPORTED_MODULE_23__components_crumb__["a" /* default */].Item,
    Ellipsis: __WEBPACK_IMPORTED_MODULE_24__components_ellipsis__["a" /* default */]
};
// 组件安装程序
var install = function install(Vue) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // 遍历所有组件
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(McakeUI).forEach(function (key) {
        var item = McakeUI[key];
        // 注册当前组件
        Vue.component(item.name, item);
    });
};

// 自动安装
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

var obj = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(McakeUI, { install: install });
// 所有组件
console.log(obj);
// console.log(M)
// 输出
// module.exports = obj;

/* harmony default export */ __webpack_exports__["default"] = (obj);

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(87);
module.exports = __webpack_require__(3).Object.assign;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(13);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(90) });


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(89);
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
/* 89 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(16);
var gOPS = __webpack_require__(30);
var pIE = __webpack_require__(20);
var toObject = __webpack_require__(31);
var IObject = __webpack_require__(39);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(11)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(12);
var toLength = __webpack_require__(92);
var toAbsoluteIndex = __webpack_require__(93);
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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(26);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(26);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(95), __esModule: true };

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(96);
module.exports = __webpack_require__(3).Object.keys;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(31);
var $keys = __webpack_require__(16);

__webpack_require__(97)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(13);
var core = __webpack_require__(3);
var fails = __webpack_require__(11);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_icon_vue__ = __webpack_require__(40);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_5931e8f5_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_icon_vue__ = __webpack_require__(126);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_icon_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_5931e8f5_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_icon_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(101);
var $Object = __webpack_require__(3).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(13);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(8), 'Object', { defineProperty: __webpack_require__(7).f });


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(103), __esModule: true };

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(3);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(105);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(115);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41);
__webpack_require__(45);
module.exports = __webpack_require__(33).f('iterator');


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(26);
var defined = __webpack_require__(25);
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
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(44);
var descriptor = __webpack_require__(17);
var setToStringTag = __webpack_require__(32);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(10)(IteratorPrototype, __webpack_require__(6)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var anObject = __webpack_require__(14);
var getKeys = __webpack_require__(16);

module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(4).document;
module.exports = document && document.documentElement;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(9);
var toObject = __webpack_require__(31);
var IE_PROTO = __webpack_require__(27)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(113);
var step = __webpack_require__(114);
var Iterators = __webpack_require__(21);
var toIObject = __webpack_require__(12);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(42)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(116), __esModule: true };

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(117);
__webpack_require__(123);
__webpack_require__(124);
__webpack_require__(125);
module.exports = __webpack_require__(3).Symbol;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(4);
var has = __webpack_require__(9);
var DESCRIPTORS = __webpack_require__(8);
var $export = __webpack_require__(13);
var redefine = __webpack_require__(43);
var META = __webpack_require__(118).KEY;
var $fails = __webpack_require__(11);
var shared = __webpack_require__(28);
var setToStringTag = __webpack_require__(32);
var uid = __webpack_require__(19);
var wks = __webpack_require__(6);
var wksExt = __webpack_require__(33);
var wksDefine = __webpack_require__(34);
var enumKeys = __webpack_require__(119);
var isArray = __webpack_require__(120);
var anObject = __webpack_require__(14);
var isObject = __webpack_require__(15);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(23);
var createDesc = __webpack_require__(17);
var _create = __webpack_require__(44);
var gOPNExt = __webpack_require__(121);
var $GOPD = __webpack_require__(122);
var $DP = __webpack_require__(7);
var $keys = __webpack_require__(16);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(46).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(20).f = $propertyIsEnumerable;
  __webpack_require__(30).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(18)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(19)('meta');
var isObject = __webpack_require__(15);
var has = __webpack_require__(9);
var setDesc = __webpack_require__(7).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(11)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(16);
var gOPS = __webpack_require__(30);
var pIE = __webpack_require__(20);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(24);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(12);
var gOPN = __webpack_require__(46).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(20);
var createDesc = __webpack_require__(17);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(23);
var has = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(36);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(8) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 123 */
/***/ (function(module, exports) {



/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(34)('asyncIterator');


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(34)('observable');


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _vm.type ? _c('i', { class: _vm.classes, style: _vm.styles }) : _vm._e();
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_vue__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_group_vue__ = __webpack_require__(130);
// 按钮

// 按钮组


__WEBPACK_IMPORTED_MODULE_0__button_vue__["a" /* default */].Group = __WEBPACK_IMPORTED_MODULE_1__button_group_vue__["a" /* default */];
// 输出
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__button_vue__["a" /* default */]);

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_button_vue__ = __webpack_require__(47);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_385ba3d4_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_button_vue__ = __webpack_require__(129);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_button_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_385ba3d4_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_button_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('button', { class: _vm.classes, attrs: { "type": _vm.htmlType, "disabled": _vm.disabled }, on: { "click": _vm.handleClick } }, [_vm.icon ? _c('m-icon', { attrs: { "type": _vm.icon } }) : _vm._e(), _vm._v(" "), _vm.showSlot ? _c('span', { ref: "slot" }, [_vm._t("default")], 2) : _vm._e()], 1);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_button_group_vue__ = __webpack_require__(48);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_6d3a43c7_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_button_group_vue__ = __webpack_require__(131);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_button_group_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_6d3a43c7_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_button_group_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.classes }, [_vm._t("default")], 2);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__row_vue__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__col_vue__ = __webpack_require__(135);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__row_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__col_vue__["a"]; });
// 行

// 列




/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_row_vue__ = __webpack_require__(49);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_ffba9d28_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_row_vue__ = __webpack_require__(134);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_row_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_ffba9d28_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_row_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.classes, style: _vm.styles }, [_vm._t("default")], 2);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_col_vue__ = __webpack_require__(50);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_6f61ce9e_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_col_vue__ = __webpack_require__(136);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_col_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_6f61ce9e_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_col_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.classes, style: _vm.styles }, [_vm._t("default")], 2);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input_vue__ = __webpack_require__(138);
// 输入框


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__input_vue__["a" /* default */]);

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_input_vue__ = __webpack_require__(51);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_fbf2db34_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_input_vue__ = __webpack_require__(139);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_input_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_fbf2db34_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_input_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.wrapClasses }, [_vm.before ? _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.slotReady, expression: "slotReady" }], staticClass: "m-ipt-before" }, [_vm._t("before")], 2) : _vm._e(), _vm._v(" "), _c('div', { staticClass: "m-ipt-content" }, [_vm.type !== 'textarea' ? [_c('input', { ref: "input", class: _vm.iptClasses, attrs: { "type": _vm.type, "name": _vm.name, "placeholder": _vm.placeholder, "readonly": _vm.readonly, "disabled": _vm.disabled, "autofocus": _vm.autofocus }, domProps: { "value": _vm.currentValue }, on: { "input": _vm.handleInput, "keyup": [function ($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }return _vm.handleEnter($event);
      }, _vm.handleKeyup], "keypress": _vm.handleKeypress, "keydown": _vm.handleKeydown, "focus": _vm.handleFocus, "blur": _vm.handleBlur } }), _vm._v(" "), _vm.icon ? _c('i', { class: ['m-ipt-icon', "m-i-" + _vm.icon], on: { "click": _vm.handleIconClick } }) : _vm._e()] : [_c('textarea', { ref: "input", class: _vm.iptClasses, attrs: { "type": _vm.type, "name": _vm.name, "placeholder": _vm.placeholder, "readonly": _vm.readonly, "disabled": _vm.disabled, "autofocus": _vm.autofocus, "rows": _vm.rows }, domProps: { "value": _vm.currentValue }, on: { "input": _vm.handleInput, "keyup": [function ($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }return _vm.handleEnter($event);
      }, _vm.handleKeyup], "keypress": _vm.handleKeypress, "keydown": _vm.handleKeydown, "focus": _vm.handleFocus, "blur": _vm.handleBlur } })]], 2), _vm._v(" "), _vm.after ? _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.slotReady, expression: "slotReady" }], staticClass: "m-ipt-after" }, [_vm._t("after")], 2) : _vm._e()]);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input_number_vue__ = __webpack_require__(141);
// 数字输入框


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__input_number_vue__["a" /* default */]);

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_input_number_vue__ = __webpack_require__(52);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_6ceb06c8_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_input_number_vue__ = __webpack_require__(142);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_input_number_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_6ceb06c8_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_input_number_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.wrapClasses }, [_c('div', { staticClass: "m-ipt-number-content" }, [_c('input', { staticClass: "m-ipt-number", attrs: { "type": "text", "name": _vm.name, "min": _vm.min, "max": _vm.max, "placeholder": _vm.placeholder, "autocomplete": "off", "spellcheck": "false" }, domProps: { "value": _vm.formatterValue } })]), _vm._v(" "), _vm._m(0)]);
};
var staticRenderFns = [function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "m-ipt-number-action" }, [_c('span', { staticClass: "m-ipt-number-reduce" }, [_c('i', { staticClass: "m-i-reduce" })]), _vm._v(" "), _c('span', { staticClass: "m-ipt-number-plus" }, [_c('i', { staticClass: "m-i-plus" })])]);
}];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__radio_vue__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__radio_group_vue__ = __webpack_require__(146);
// 单选框

// 单选框组


__WEBPACK_IMPORTED_MODULE_0__radio_vue__["a" /* default */].Group = __WEBPACK_IMPORTED_MODULE_1__radio_group_vue__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__radio_vue__["a" /* default */]);

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_radio_vue__ = __webpack_require__(53);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_42ad8ae0_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_radio_vue__ = __webpack_require__(145);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_radio_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_42ad8ae0_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_radio_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('label', { class: _vm.wrapClasses }, [_c('span', { staticClass: "m-radio-ipt" }, [_c('span', { staticClass: "m-radio-inner" }), _vm._v(" "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.model, expression: "model" }], attrs: { "type": "radio", "name": _vm.name, "disabled": _vm.isDisabled }, domProps: { "value": _vm.label, "checked": _vm._q(_vm.model, _vm.label) }, on: { "change": [function ($event) {
        _vm.model = _vm.label;
      }, _vm.handleChange] } })]), _vm._v(" "), _c('span', { staticClass: "m-radio-label" }, [_vm._t("default"), _vm._v(" "), !_vm.$slots.default ? [_vm._v(_vm._s(_vm.label))] : _vm._e()], 2)]);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_radio_group_vue__ = __webpack_require__(55);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_8949080e_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_radio_group_vue__ = __webpack_require__(147);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_radio_group_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_8949080e_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_radio_group_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.groupClasses }, [_vm._t("default")], 2);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checkbox_vue__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__checkbox_group_vue__ = __webpack_require__(151);
// 单选框

// 单选框组


__WEBPACK_IMPORTED_MODULE_0__checkbox_vue__["a" /* default */].Group = __WEBPACK_IMPORTED_MODULE_1__checkbox_group_vue__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__checkbox_vue__["a" /* default */]);

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_checkbox_vue__ = __webpack_require__(56);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_9975e0d6_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_checkbox_vue__ = __webpack_require__(150);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_checkbox_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_9975e0d6_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_checkbox_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('label', { class: _vm.wrapClasses }, [_c('span', { staticClass: "m-checkbox-ipt" }, [_c('span', { staticClass: "m-checkbox-inner" }), _vm._v(" "), _vm.trueLabel || _vm.falseLabel ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.model, expression: "model" }], attrs: { "type": "checkbox", "name": _vm.name, "true-value": _vm.trueLabel, "false-value": _vm.falseLabel, "disabled": _vm.isDisabled }, domProps: { "checked": Array.isArray(_vm.model) ? _vm._i(_vm.model, null) > -1 : _vm._q(_vm.model, _vm.trueLabel) }, on: { "change": [function ($event) {
        var $$a = _vm.model,
            $$el = $event.target,
            $$c = $$el.checked ? _vm.trueLabel : _vm.falseLabel;if (Array.isArray($$a)) {
          var $$v = null,
              $$i = _vm._i($$a, $$v);if ($$el.checked) {
            $$i < 0 && (_vm.model = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.model = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.model = $$c;
        }
      }, _vm.handleChange] } }) : _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.model, expression: "model" }], attrs: { "type": "checkbox", "name": _vm.name, "disabled": _vm.isDisabled }, domProps: { "value": _vm.label, "checked": Array.isArray(_vm.model) ? _vm._i(_vm.model, _vm.label) > -1 : _vm.model }, on: { "change": [function ($event) {
        var $$a = _vm.model,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;if (Array.isArray($$a)) {
          var $$v = _vm.label,
              $$i = _vm._i($$a, $$v);if ($$el.checked) {
            $$i < 0 && (_vm.model = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.model = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.model = $$c;
        }
      }, _vm.handleChange] } })]), _vm._v(" "), _c('span', { staticClass: "m-checkbox-label" }, [_vm._t("default"), _vm._v(" "), !_vm.$slots.default ? [_vm._v(_vm._s(_vm.label))] : _vm._e()], 2)]);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_checkbox_group_vue__ = __webpack_require__(57);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_5ce6a772_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_checkbox_group_vue__ = __webpack_require__(152);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_checkbox_group_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_5ce6a772_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_checkbox_group_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.groupClasses }, [_vm._t("default")], 2);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__switch_vue__ = __webpack_require__(154);
// 徽章


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__switch_vue__["a" /* default */]);

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_switch_vue__ = __webpack_require__(58);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_1cac285a_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_switch_vue__ = __webpack_require__(155);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_switch_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_1cac285a_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_switch_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.wrapClasses, style: _vm.wrapStyle, on: { "click": _vm.toggle } }, [_c('input', { attrs: { "type": "hidden", "name": _vm.name }, domProps: { "value": _vm.currentValue } }), _vm._v(" "), _c('span', { staticClass: "m-switch-dot", style: _vm.dotStyle }), _vm._v(" "), _c('span', { staticClass: "m-switch-text" }, [_vm.checked ? _vm._t("open", [_vm._v(_vm._s(_vm.trueText))]) : _vm._e(), _vm._v(" "), !_vm.checked ? _vm._t("close", [_vm._v(_vm._s(_vm.falseText))]) : _vm._e()], 2)]);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rate_vue__ = __webpack_require__(157);
// 徽章


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__rate_vue__["a" /* default */]);

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_rate_vue__ = __webpack_require__(59);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_02d8198f_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_rate_vue__ = __webpack_require__(158);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_rate_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_02d8198f_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_rate_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
                var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.wrapClasses }, [_c('input', { attrs: { "type": "hidden", "name": _vm.name }, domProps: { "value": _vm.currentValue } }), _vm._v(" "), _vm._l(_vm.max, function (item) {
                                return _c('span', { staticClass: "m-rate-item", on: { "mousemove": function mousemove($event) {
                                                                                _vm.setCurrentValue(item, $event);
                                                                }, "mouseleave": _vm.resetCurrentValue, "click": function click($event) {
                                                                                _vm.selectValue(item);
                                                                } } }, [_c('i', { class: ['m-rate-star', _vm.classes[item - 1], { 'hover': _vm.hoverIndex === item }], style: _vm.getIconStyle(item) }, [_vm.showHalfIcon(item) ? _c('i', { staticClass: "m-rate-half", class: _vm.halfIconClass, style: _vm.halfIconStyle }) : _vm._e()])]);
                }), _vm._v(" "), _vm.showText ? _c('span', { staticClass: "m-rate-text" }, [_vm._t("default", [_vm._v(_vm._s(_vm.text))])], 2) : _vm._e()], 2);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__progress_vue__ = __webpack_require__(160);
// 进度条


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__progress_vue__["a" /* default */]);

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_progress_vue__ = __webpack_require__(60);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_62023068_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_progress_vue__ = __webpack_require__(162);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_progress_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_62023068_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_progress_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 组件样式使用的公共变量
/* harmony default export */ __webpack_exports__["a"] = ({
    // colors 主题颜色
    color_primary: '#006AFF',
    color_success: '#2FBD57',
    color_info: '#3388FF',
    color_warning: '#FF920F',
    color_error: '#F74342',
    color_noble: '#9D2FBC',
    // 进度条
    progress_bar_bg: '#f3f3f3'
});

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.wrapClasses }, [!_vm.isCircle ? _c('div', { staticClass: "m-progress-inner" }, [_c('div', { staticClass: "m-progress-bar", style: _vm.barStyle }, [_c('div', { staticClass: "m-progress-bar-inner", style: _vm.barInnerStyle }, [!_vm.hideText && _vm.textInside ? _c('div', { class: _vm.textClasses, style: _vm.textStyle }, [_vm._t("default", [_c('span', { staticClass: "m-progress-percent" }, [_vm._v("\n                            " + _vm._s(_vm.percent) + "%\n                        ")])])], 2) : _vm._e()])])]) : _c('div', { staticClass: "m-progress-inner", style: _vm.circleStyle }, [_c('svg', { attrs: { "viewBox": "0 0 100 100" } }, [_c('path', { staticClass: "m-progress-bar", attrs: { "stroke": _vm.baseVars.progress_bar_bg, "d": _vm.trackPath, "stroke-width": _vm.circleBarWidth, "fill": "none" } }), _vm._v(" "), _c('path', { staticClass: "m-progress-bar-inner", style: _vm.circlePathStyle, attrs: { "d": _vm.trackPath, "stroke-linecap": _vm.pathShape, "stroke": _vm.pathBgColor, "stroke-width": _vm.circleBarWidth, "fill": "none" } })])]), _vm._v(" "), !_vm.hideText && !_vm.textInside ? _c('div', { class: _vm.textClasses, style: _vm.textStyle }, [_vm._t("default", [_vm.status ? _c('span', { staticClass: "m-progress-icon" }, [_c('m-icon', { attrs: { "type": _vm.iconType } })], 1) : _c('span', { staticClass: "m-progress-percent" }, [_vm._v("\n                " + _vm._s(_vm.percent) + "%\n            ")])])], 2) : _vm._e()]);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_vue__ = __webpack_require__(164);
// 警告提示


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__alert_vue__["a" /* default */]);

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_alert_vue__ = __webpack_require__(61);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_24aa89fa_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_alert_vue__ = __webpack_require__(165);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_alert_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_24aa89fa_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_alert_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": "m-fade" } }, [_vm.visible ? _c('div', { class: _vm.wrapClasses }, [_vm.showIcon ? _c('span', { staticClass: "m-alert-icon" }, [_vm._t("icon", [_c('m-icon', { attrs: { "type": _vm.iconType } })])], 2) : _vm._e(), _vm._v(" "), _vm.isTitle ? _c('div', { staticClass: "m-alert-title" }, [_vm._t("title", [_vm._v("\n                " + _vm._s(_vm.title) + "\n            ")])], 2) : _vm._e(), _vm._v(" "), _c('div', { staticClass: "m-alert-content" }, [_vm._t("default", [_vm._v("\n                " + _vm._s(_vm.content) + "\n            ")])], 2), _vm._v(" "), _vm.closable ? _c('span', { staticClass: "m-alert-close", attrs: { "title": "关闭" }, on: { "click": _vm.close } }, [_vm._t("close", [_vm.closeText ? [_vm._v(_vm._s(_vm.closeText))] : _c('m-icon', { attrs: { "type": "error" } })])], 2) : _vm._e()]) : _vm._e()]);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tooltip_vue__ = __webpack_require__(167);
// 文字提示


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__tooltip_vue__["a" /* default */]);

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_tooltip_vue__ = __webpack_require__(62);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_243d97da_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_tooltip_vue__ = __webpack_require__(169);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_tooltip_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_243d97da_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_tooltip_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/**
 * 基于popper.js和vue的弹出层控件 依赖0.6.4版本的popper.js
 * https://github.com/freeze-component/vue-popper
 * */

var isServer = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$isServer;
var Popper = isServer ? function () {} : __webpack_require__(64); // eslint-disable-line

/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        // 弹出层位置：可选值为toptop-starttop-endbottombottom-startbottom-endleftleft-startleft-endrightright-startright-end
        placement: {
            type: String,
            default: 'bottom'
        },
        boundariesPadding: {
            type: Number,
            default: 5
        },
        // 触发按钮
        reference: Object,
        // 弹出层
        popper: Object,
        // 相对触发按钮偏移位置
        offset: {
            default: 0
        },
        // 显示状态值
        value: {
            type: Boolean,
            default: false
        },
        // 动画名称
        transition: String,
        // popper.js配置项
        options: {
            type: Object,
            default: function _default() {
                return {
                    modifiers: {
                        computeStyle: {
                            gpuAcceleration: false
                        },
                        preventOverflow: {
                            boundariesElement: 'window' // 也可以是body
                        }
                    }
                };
            }
        }
    },
    data: function data() {
        return {
            visible: this.value
        };
    },

    watch: {
        value: {
            immediate: true,
            handler: function handler(val) {
                this.visible = val;
                this.$emit('input', val);
            }
        },
        visible: function visible(val) {
            if (val) {
                this.updatePopper();
                this.$emit('on-popper-show');
            } else {
                this.$emit('on-popper-hide');
            }
            this.$emit('input', val);
        }
    },
    methods: {
        createPopper: function createPopper() {
            var _this = this;

            if (isServer) return;
            if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.placement)) {
                return;
            }

            var options = this.options;
            var popper = this.popper || this.$refs.popper;
            var reference = this.reference || this.$refs.reference;

            if (!popper || !reference) return;

            if (this.popperJS && this.popperJS.hasOwnProperty('destroy')) {
                this.popperJS.destroy();
            }

            options.placement = this.placement;

            if (!options.modifiers.offset) {
                options.modifiers.offset = {};
            }
            options.modifiers.offset.offset = this.offset;
            options.onCreate = function () {
                _this.$nextTick(_this.updatePopper);
                _this.$emit('created', _this);
            };

            this.popperJS = new Popper(reference, popper, options);
        },
        updatePopper: function updatePopper() {
            if (isServer) return;
            this.popperJS ? this.popperJS.update() : this.createPopper();
        },
        doDestroy: function doDestroy() {
            if (isServer) return;
            if (this.visible) return;
            this.popperJS.destroy();
            this.popperJS = null;
        }
    },
    updated: function updated() {
        var _this2 = this;

        this.$nextTick(function () {
            return _this2.updatePopper();
        });
    },
    beforeDestroy: function beforeDestroy() {
        if (isServer) return;
        if (this.popperJS) {
            this.popperJS.destroy();
        }
    }
});

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.wrapClasses, on: { "mouseenter": _vm.showPopper, "mouseleave": _vm.closePopper } }, [_c('div', { ref: "reference", staticClass: "m-tooltip-rel" }, [_vm._t("default")], 2), _vm._v(" "), _c('transition', { attrs: { "name": "m-fade" } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: !_vm.disabled && (_vm.visible || _vm.always), expression: "!disabled && (visible || always)" }, { name: "transfer-dom", rawName: "v-transfer-dom" }], ref: "popper", staticClass: "m-tooltip-popper" }, [_c('div', { staticClass: "m-tooltip-body" }, [_c('div', { staticClass: "m-tooltip-arrow" }), _vm._v(" "), _c('div', { staticClass: "m-tooltip-content" }, [_vm._t("content", [_vm._v(_vm._s(_vm.content))])], 2)])])])], 1);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__badge_vue__ = __webpack_require__(171);
// 徽章


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__badge_vue__["a" /* default */]);

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_badge_vue__ = __webpack_require__(67);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_3e5dc906_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_badge_vue__ = __webpack_require__(172);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_badge_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_3e5dc906_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_badge_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.wrapClasses }, [_vm._t("default"), _vm._v(" "), _c('transition', { attrs: { "name": "m-fade" } }, [_c('sup', { directives: [{ name: "show", rawName: "v-show", value: _vm.isShow, expression: "isShow" }], class: _vm.contentClasses, domProps: { "textContent": _vm._s(_vm.content) } })])], 2);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tag_vue__ = __webpack_require__(174);
// 徽章


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__tag_vue__["a" /* default */]);

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_tag_vue__ = __webpack_require__(68);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_3fe364cc_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_tag_vue__ = __webpack_require__(175);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_tag_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_3fe364cc_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_tag_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": "m-fade" } }, [_c('div', { class: _vm.wrapClasses, style: _vm.wrapStyle }, [_vm.isDot ? _c('span', { staticClass: "m-tag-inner" }) : _vm._e(), _vm._v(" "), _c('span', { staticClass: "m-tag-label" }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2), _vm._v(" "), _vm.closable ? _c('span', { staticClass: "m-tag-close", style: _vm.closeStyle, on: { "click": function click($event) {
        $event.stopPropagation();return _vm.close($event);
      } } }, [_c('m-icon', { attrs: { "type": "error" } })], 1) : _vm._e()])]);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timeline_vue__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timeline_item_vue__ = __webpack_require__(179);
// 时间轴



__WEBPACK_IMPORTED_MODULE_0__timeline_vue__["a" /* default */].Item = __WEBPACK_IMPORTED_MODULE_1__timeline_item_vue__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__timeline_vue__["a" /* default */]);

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_timeline_vue__ = __webpack_require__(69);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_3a407f38_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_timeline_vue__ = __webpack_require__(178);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_timeline_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_3a407f38_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_timeline_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('ul', { class: _vm.wrapClasses }, [_vm._t("default")], 2);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_timeline_item_vue__ = __webpack_require__(70);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_245d35a8_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_timeline_item_vue__ = __webpack_require__(180);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_timeline_item_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_245d35a8_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_timeline_item_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('li', { class: _vm.wrapClasses, style: _vm.wrapStyle }, [_c('div', { staticClass: "m-timeline-tail", style: _vm.tailStyle }, [_c('div', { staticClass: "m-timeline-dot" }, [_vm._t("dot", [_c('i', { class: _vm.iconClasses })]), _vm._v(" "), _c('span', { staticClass: "m-timeline-line" })], 2)]), _vm._v(" "), _c('div', { staticClass: "m-timeline-cont" }, [_vm.showTitle ? _c('div', { staticClass: "m-timeline-title" }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)]);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quote_vue__ = __webpack_require__(182);
// 引用


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__quote_vue__["a" /* default */]);

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_quote_vue__ = __webpack_require__(71);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_16f085d9_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_quote_vue__ = __webpack_require__(183);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_quote_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_16f085d9_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_quote_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.wrapClasses }, [_vm._t("default")], 2);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__avatar_vue__ = __webpack_require__(185);
// 头像


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__avatar_vue__["a" /* default */]);

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_avatar_vue__ = __webpack_require__(72);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_fc98e936_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_avatar_vue__ = __webpack_require__(186);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_avatar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_fc98e936_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_avatar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.wrapClasses }, [_vm.src ? _c('img', { attrs: { "src": _vm.src } }) : _vm.icon ? _c('m-icon', { attrs: { "type": _vm.icon } }) : _c('div', { staticClass: "m-avatar-text" }, [_vm._t("default")], 2)], 1);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collapse_vue__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collapse_item_vue__ = __webpack_require__(190);
// 折叠面板



__WEBPACK_IMPORTED_MODULE_0__collapse_vue__["a" /* default */].Item = __WEBPACK_IMPORTED_MODULE_1__collapse_item_vue__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__collapse_vue__["a" /* default */]);

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_collapse_vue__ = __webpack_require__(73);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_33c7cc16_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_collapse_vue__ = __webpack_require__(189);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_collapse_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_33c7cc16_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_collapse_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.wrapClasses }, [_vm._t("default")], 2);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_collapse_item_vue__ = __webpack_require__(74);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_79c63ddc_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_collapse_item_vue__ = __webpack_require__(192);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_collapse_item_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_79c63ddc_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_collapse_item_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_dom_js__ = __webpack_require__(22);
// Thanks to https://github.com/ElemeFE/element/blob/dev/src/transitions/collapse-transition.js



var Transition = {
    beforeEnter: function beforeEnter(el) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_dom_js__["a" /* addClass */])(el, 'collapse-transition');
        if (!el.dataset) el.dataset = {};

        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;

        el.style.height = '0';
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
    },
    enter: function enter(el) {
        el.dataset.oldOverflow = el.style.overflow;
        if (el.scrollHeight !== 0) {
            el.style.height = el.scrollHeight + 'px';
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
        } else {
            el.style.height = '';
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
        }

        el.style.overflow = 'hidden';
    },
    afterEnter: function afterEnter(el) {
        // for safari: remove class then reset height is necessary
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_dom_js__["d" /* removeClass */])(el, 'collapse-transition');
        el.style.height = '';
        el.style.overflow = el.dataset.oldOverflow;
    },
    beforeLeave: function beforeLeave(el) {
        if (!el.dataset) el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.dataset.oldOverflow = el.style.overflow;

        el.style.height = el.scrollHeight + 'px';
        el.style.overflow = 'hidden';
    },
    leave: function leave(el) {
        if (el.scrollHeight !== 0) {
            // for safari: add class after set height, or it will jump to zero height suddenly, weired
            Object(__WEBPACK_IMPORTED_MODULE_0__utils_dom_js__["a" /* addClass */])(el, 'collapse-transition');
            el.style.height = 0;
            el.style.paddingTop = 0;
            el.style.paddingBottom = 0;
        }
    },
    afterLeave: function afterLeave(el) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_dom_js__["d" /* removeClass */])(el, 'collapse-transition');
        el.style.height = '';
        el.style.overflow = el.dataset.oldOverflow;
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'MCollapseTransition',
    functional: true,
    render: function render(h, _ref) {
        var children = _ref.children;

        var data = {
            on: Transition
        };

        return h('transition', data, children);
    }
});

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.wrapClasses }, [_c('div', { staticClass: "m-collapse-item-head", on: { "click": _vm.toggle } }, [_c('m-icon', { staticClass: "m-collapse-item-icon", attrs: { "type": "right" } }), _vm._v(" "), _vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2), _vm._v(" "), _c('m-collapse-transition', [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.isOpen, expression: "isOpen" }], staticClass: "m-collapse-item-body" }, [_c('div', { staticClass: "m-collapse-item-cont" }, [_vm._t("default")], 2)])])], 1);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_vue__ = __webpack_require__(194);
// 卡片


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__card_vue__["a" /* default */]);

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_card_vue__ = __webpack_require__(75);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_298988d4_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_card_vue__ = __webpack_require__(195);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_card_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_298988d4_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_card_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.wrapClasses, on: { "click": _vm.handleClick } }, [_vm.showTitle ? _c('div', { staticClass: "m-card-title" }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2) : _vm._e(), _vm._v(" "), _vm.showCover ? _c('div', { staticClass: "m-card-cover" }, [_vm._t("cover", [_c('img', { attrs: { "src": _vm.cover } })])], 2) : _vm._e(), _vm._v(" "), _c('div', { staticClass: "m-card-body", style: _vm.bodyStyle }, [_vm.loading ? _c('div', { staticClass: "m-card-loading" }, [_vm._t("loading", [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4)])], 2) : [_vm._t("default")]], 2), _vm._v(" "), _vm.showFoot ? _c('div', { staticClass: "m-card-foot" }, [_vm._t("foot", [_vm.isActions ? _c('ul', { staticClass: "m-card-action" }, _vm._l(_vm.actions, function (item, i) {
    return _c('li', { key: i, style: _vm.actionItemStyles, on: { "click": function click($event) {
          $event.stopPropagation();_vm.handleActionClick(item);
        } } }, [item.icon ? [_c('i', { class: item.icon })] : [_vm._v(_vm._s(item.name))]], 2);
  })) : _vm._e()])], 2) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "m-card-loading-row" }, [_c('span', { staticStyle: { "width": "100%" } })]);
}, function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "m-card-loading-row" }, [_c('span', { staticStyle: { "width": "40%" } }), _vm._v(" "), _c('span', { staticStyle: { "width": "55%" } })]);
}, function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "m-card-loading-row" }, [_c('span', { staticStyle: { "width": "28%" } }), _vm._v(" "), _c('span', { staticStyle: { "width": "34%" } }), _vm._v(" "), _c('span', { staticStyle: { "width": "32%" } })]);
}, function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "m-card-loading-row" }, [_c('span', { staticStyle: { "width": "62%" } }), _vm._v(" "), _c('span', { staticStyle: { "width": "28%" } })]);
}, function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "m-card-loading-row" }, [_c('span', { staticStyle: { "width": "20%" } }), _vm._v(" "), _c('span', { staticStyle: { "width": "8%" } }), _vm._v(" "), _c('span', { staticStyle: { "width": "36%" } }), _vm._v(" "), _c('span', { staticStyle: { "width": "26%" } })]);
}];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__divider_vue__ = __webpack_require__(197);
// 分割线


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__divider_vue__["a" /* default */]);

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_divider_vue__ = __webpack_require__(76);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_2da7366e_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_divider_vue__ = __webpack_require__(198);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_divider_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_2da7366e_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_divider_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.wrapClasses }, [_vm.showText ? _c('span', { staticClass: "m-divider-text" }, [_vm._t("default")], 2) : _vm._e()]);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dropdown_vue__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_menu_vue__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropdown_item_vue__ = __webpack_require__(212);
// 下拉菜单




__WEBPACK_IMPORTED_MODULE_0__dropdown_vue__["a" /* default */].Menu = __WEBPACK_IMPORTED_MODULE_1__dropdown_menu_vue__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__dropdown_vue__["a" /* default */].Item = __WEBPACK_IMPORTED_MODULE_2__dropdown_item_vue__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__dropdown_vue__["a" /* default */]);

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_dropdown_vue__ = __webpack_require__(77);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_abd70ad8_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_dropdown_vue__ = __webpack_require__(209);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_dropdown_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_abd70ad8_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_dropdown_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(202), __esModule: true };

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(45);
__webpack_require__(41);
module.exports = __webpack_require__(203);


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(14);
var get = __webpack_require__(204);
module.exports = __webpack_require__(3).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(205);
var ITERATOR = __webpack_require__(6)('iterator');
var Iterators = __webpack_require__(21);
module.exports = __webpack_require__(3).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(24);
var TAG = __webpack_require__(6)('toStringTag');
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
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_dropdown_vue__ = __webpack_require__(79);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_6369f732_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_dropdown_vue__ = __webpack_require__(207);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_dropdown_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_6369f732_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_dropdown_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.wrapClasses, style: _vm.styles }, [_vm._t("default")], 2);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*!
{
  "copywrite": "Copyright (c) 2018-present",
  "date": "2018-10-11T11:34:36.837Z",
  "describe": "",
  "description": "Vue directive to react on clicks outside an element.",
  "file": "v-click-outside-x.min.js",
  "hash": "6b8e903915d7141045b4",
  "license": "MIT",
  "version": "3.4.0"
}
*/
!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vClickOutside=t():e.vClickOutside=t()}(function(){"use strict";return"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:Function("return this")()}(),function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.install=function(e){e.directive("click-outside",s)},t.directive=void 0;var i=Object.create(null),c=Object.create(null),f=[i,c],l=function(e,t,n){var r=n.target,o=function(t){var o=t.el;if(o!==r&&!o.contains(r)){var u=t.binding;u.modifiers.stop&&n.stopPropagation(),u.modifiers.prevent&&n.preventDefault(),u.value.call(e,n)}};Object.keys(t).forEach(function(e){return t[e].forEach(o)})},a=function(e){l(this,i,e)},d=function(e){l(this,c,e)},p=function(e){return e?a:d},s=Object.defineProperties({},{$_captureInstances:{value:i},$_nonCaptureInstances:{value:c},$_onCaptureEvent:{value:a},$_onNonCaptureEvent:{value:d},bind:{value:function(e,t){if("function"!=typeof t.value)throw new TypeError("Binding value must be a function.");var n=t.arg||"click",u=o({},t,{arg:n,modifiers:o({},{capture:!1,prevent:!1,stop:!1},t.modifiers)}),f=u.modifiers.capture,l=f?i:c;Array.isArray(l[n])||(l[n]=[]),1===l[n].push({el:e,binding:u})&&"object"===("undefined"==typeof document?"undefined":r(document))&&document&&document.addEventListener(n,p(f),f)}},unbind:{value:function(e){var t=function(t){return t.el!==e};f.forEach(function(e){var n=Object.keys(e);if(n.length){var o=e===i;n.forEach(function(n){var u=e[n].filter(t);u.length?e[n]=u:("object"===("undefined"==typeof document?"undefined":r(document))&&document&&document.removeEventListener(n,p(o),o),delete e[n])})}})}},version:{enumerable:!0,value:"3.4.0"}});t.directive=s}])});
//# sourceMappingURL=v-click-outside-x.min.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(65)))

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { directives: [{ name: "click-outside", rawName: "v-click-outside", value: _vm.handleClickOutside, expression: "handleClickOutside" }], class: _vm.wrapClasses, on: { "mouseenter": _vm.handleMouseenter, "mouseleave": _vm.handleMouseleave } }, [_c('div', { ref: "reference", staticClass: "m-dropdown-rel", on: { "click": _vm.handleClick, "contextmenu": function contextmenu($event) {
        $event.preventDefault();return _vm.handleRightClick($event);
      } } }, [_vm._t("default")], 2), _vm._v(" "), _c('transition', { attrs: { "name": "m-drop" } }, [_c('m-drop', { directives: [{ name: "show", rawName: "v-show", value: _vm.currentVisible, expression: "currentVisible" }, { name: "transfer-dom", rawName: "v-transfer-dom" }], ref: "drop", class: _vm.listClasses, attrs: { "placement": _vm.placement, "parent-width": _vm.parentWidth, "no-max-height": "" }, on: { "mouseenter": _vm.handleMouseenter, "mouseleave": _vm.handleMouseleave } }, [_vm._t("list")], 2)], 1)], 1);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_dropdown_menu_vue__ = __webpack_require__(80);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_42d69128_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_dropdown_menu_vue__ = __webpack_require__(211);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_dropdown_menu_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_42d69128_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_dropdown_menu_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('ul', { staticClass: "m-dropdown-menu" }, [_vm._t("default")], 2);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_dropdown_item_vue__ = __webpack_require__(81);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_5e010b74_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_dropdown_item_vue__ = __webpack_require__(213);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_dropdown_item_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_5e010b74_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_dropdown_item_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('li', { class: _vm.wrapClasses, on: { "click": _vm.handleClick } }, [_vm._t("default")], 2);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__crumb_vue__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crumb_item_vue__ = __webpack_require__(217);
// 面包屑

// 面包屑项目


__WEBPACK_IMPORTED_MODULE_0__crumb_vue__["a" /* default */].Item = __WEBPACK_IMPORTED_MODULE_1__crumb_item_vue__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__crumb_vue__["a" /* default */]);

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_crumb_vue__ = __webpack_require__(82);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_304d19d6_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_crumb_vue__ = __webpack_require__(216);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_crumb_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_304d19d6_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_crumb_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "m-crumb" }, [_vm._t("default")], 2);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_crumb_item_vue__ = __webpack_require__(83);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_4f3c0754_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_crumb_item_vue__ = __webpack_require__(218);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_crumb_item_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_4f3c0754_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_crumb_item_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('span', { staticClass: "m-crumb-item" }, [_vm.to ? _c('span', { staticClass: "m-crumb-item-link", on: { "click": _vm.handleClick } }, [_vm.icon ? _c('m-icon', { attrs: { "type": _vm.icon } }) : _vm._e(), _vm._v(" "), _vm._t("default")], 2) : _c('span', { staticClass: "m-crumb-item-text" }, [_vm._t("default")], 2), _vm._v(" "), _c('span', { staticClass: "m-crumb-item-separator", domProps: { "innerHTML": _vm._s(_vm.separator) } })]);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ellipsis_vue__ = __webpack_require__(220);
// 文字省略


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__ellipsis_vue__["a" /* default */]);

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_ellipsis_vue__ = __webpack_require__(84);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_2b792f5e_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_ellipsis_vue__ = __webpack_require__(221);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_ellipsis_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_2b792f5e_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_ellipsis_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { ref: "ellipsis", class: _vm.wrapClasses }, [_vm._t("default", [_vm._v(_vm._s(_vm.content))])], 2);
};
var staticRenderFns = [];
var esExports = { render: render, staticRenderFns: staticRenderFns };
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});