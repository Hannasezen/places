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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../images/map-holder.jpg */ "./src/images/map-holder.jpg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "html, body {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\n.hidden {\n  display: none; }\n\n.global-wrapper {\n  width: 90vw;\n  margin: 0 auto; }\n\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 2% 0; }\n  .container__item {\n    margin-bottom: 4%; }\n\n.map {\n  max-height: 40vh;\n  margin: 0 auto;\n  overflow: hidden;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") #d6ccee; }\n  .map img {\n    display: block;\n    width: 100%;\n    max-height: 100%;\n    object-fit: cover; }\n\n.main-controls {\n  text-align: center; }\n\n.btn {\n  background: #f3e4e4;\n  border: none;\n  padding: 0.5em 1em;\n  cursor: pointer;\n  transition: ease 0.3s; }\n  .btn:hover {\n    background: #f38383; }\n\n.place-list {\n  list-style: none;\n  padding: 0;\n  margin: 0 auto 4% auto; }\n  .place-list__item {\n    padding: 2% 5%;\n    background: #f1c2c2;\n    margin-bottom: 1em;\n    border-radius: 2px; }\n  .place-list ul {\n    list-style: none;\n    padding-left: 0; }\n    .place-list ul li {\n      display: inline-block; }\n\n.place {\n  display: flex; }\n  .place__content {\n    display: flex;\n    flex-wrap: wrap;\n    flex-grow: 1; }\n  .place__title {\n    width: 100%;\n    margin-bottom: 0.5em;\n    font-size: 1em; }\n  .place__description {\n    width: 40%;\n    margin-bottom: 0.5em;\n    font-size: 0.8em; }\n  .place__labels {\n    max-width: 60%;\n    overflow: hidden; }\n  .place__coords {\n    white-space: nowrap; }\n  .place__controls {\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n    .place__controls .btn {\n      width: 100%;\n      margin-bottom: 0.5em; }\n\n.open-places-btn .all-places-text {\n  display: inline; }\n\n.open-places-btn .open-places-text {\n  display: none; }\n\n.open-places-btn.open .all-places-text {\n  display: none; }\n\n.open-places-btn.open .open-places-text {\n  display: inline; }\n\n.form {\n  width: 40vw;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 5%;\n  border-radius: 2px;\n  background: #ffffde; }\n  .form input {\n    border-color: transparent;\n    margin-left: 5px;\n    width: 60%; }\n    .form input :invalid {\n      border-color: #f88383; }\n  .form label {\n    display: block;\n    margin-bottom: 1em;\n    text-transform: uppercase;\n    text-align: right; }\n  .form-holder {\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.5);\n    display: none; }\n  .form__inputs {\n    padding: 4% 0; }\n  .form__controls {\n    text-align: center; }\n  .form__save-btn {\n    background: white;\n    border: none;\n    border-radius: 2px;\n    padding: 2% 30%; }\n\n.form-open .form-holder {\n  display: block; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/images/loader.gif":
/*!*******************************!*\
  !*** ./src/images/loader.gif ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/images/loader.gif");

/***/ }),

/***/ "./src/images/map-holder.jpg":
/*!***********************************!*\
  !*** ./src/images/map-holder.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/images/map-holder.jpg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_loader_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/loader.gif */ "./src/images/loader.gif");
/* harmony import */ var _js_components_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/components/map */ "./src/js/components/map.js");
/* harmony import */ var _js_components_places__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/components/places */ "./src/js/components/places.js");
/* harmony import */ var _js_components_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/components/form */ "./src/js/components/form.js");
/* harmony import */ var _js_components_filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/components/filters */ "./src/js/components/filters.js");








function startApp(places) {
  new _js_components_map__WEBPACK_IMPORTED_MODULE_2__["Map"](places).init();
  new _js_components_places__WEBPACK_IMPORTED_MODULE_3__["Places"](places).init();
  new _js_components_form__WEBPACK_IMPORTED_MODULE_4__["Form"](places).init();
  new _js_components_filters__WEBPACK_IMPORTED_MODULE_5__["Filter"](places).init();
}

function getPosts() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '/places');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    const places = JSON.parse(xhr.response);
    startApp(places);
  };
  xhr.send();
}

getPosts();


/***/ }),

/***/ "./src/js/components/filters.js":
/*!**************************************!*\
  !*** ./src/js/components/filters.js ***!
  \**************************************/
/*! exports provided: Filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return Filter; });
/* harmony import */ var _modules_eventbus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/eventbus */ "./src/js/modules/eventbus.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/events */ "./src/js/constants/events.js");



class Filter {
  constructor(data) {
    this.places = data;
    this.openPlacesBtn = document.querySelector('#filter-open-places');
    this.isShowOpenPlaces = false;
  }

  init() {
    this.subscribeToEvents();
  }

  subscribeToEvents() {
    _modules_eventbus__WEBPACK_IMPORTED_MODULE_0__["eventBus"].subscribe(_constants_events__WEBPACK_IMPORTED_MODULE_1__["EVENTS"].REFRESH_PLACES, this.showAllPlaces.bind(this));
    this.openPlacesBtn.addEventListener('click', this.toggleOpenPlacesBtn.bind(this));
  }

  toggleOpenPlacesBtn(e) {
    if (this.isShowOpenPlaces) {
      _modules_eventbus__WEBPACK_IMPORTED_MODULE_0__["eventBus"].publish(_constants_events__WEBPACK_IMPORTED_MODULE_1__["EVENTS"].SHOW_ALL_PLACES);
    } else {
      this.showFilteredPlaces();
    }
    this.isShowOpenPlaces = !this.isShowOpenPlaces;
    e.target.closest('#filter-open-places').classList.toggle('open');
  }

  showFilteredPlaces() {
    const nowTime = new Date().getHours();
    const filteredList = this.places.filter(place => {
      return nowTime > place.openhours.start.match(/\d+(?=\:)/)[0]
          && nowTime < place.openhours.end.match(/\d+(?=\:)/)[0];
    });
    _modules_eventbus__WEBPACK_IMPORTED_MODULE_0__["eventBus"].publish(_constants_events__WEBPACK_IMPORTED_MODULE_1__["EVENTS"].SHOW_FILTERED_PLACES, filteredList);
  }

  showAllPlaces() {
    this.isShowOpenPlaces = false;
    this.openPlacesBtn.classList.remove('open');
    _modules_eventbus__WEBPACK_IMPORTED_MODULE_0__["eventBus"].publish(_constants_events__WEBPACK_IMPORTED_MODULE_1__["EVENTS"].SHOW_ALL_PLACES);
  }
}


/***/ }),

/***/ "./src/js/components/form.js":
/*!***********************************!*\
  !*** ./src/js/components/form.js ***!
  \***********************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var _modules_eventbus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/eventbus */ "./src/js/modules/eventbus.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/events */ "./src/js/constants/events.js");
/* harmony import */ var _modules_validate_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/validate-form */ "./src/js/modules/validate-form.js");




class Form {
  constructor(data) {
    this.places = data;
    this.addPlaceBtn = document.getElementById('add-place-btn');
    this.savePlaceBtn = document.getElementById('save-place-btn');
    this.form = document.getElementById('form');
    this.holder = document.querySelector('#form-holder');

    this.inputs = {
      title: form.querySelector('[name="place-title"]'),
      description: form.querySelector('[name="place-description"]'),
      start: form.querySelector('[name="place-start"]'),
      end: form.querySelector('[name="place-end"]'),
      ltd: form.querySelector('[name="place-ltd"]'),
      lgt: form.querySelector('[name="place-lgt"]'),
    };

    this.place = {};

    this.formId = '';

    this.defaultPlace = {
      title: '',
      description: '',
      openhours: {
        start: '09:00',
        end: '18:00'
      },
      coordinates: {
        ltd: '',
        lgt: '',
      },
      keywords: [],
    }
  }

  init() {
    this.getCoords();
    this.bindEventHandlers();
    this.subscribeToEvents();
  }

  getCoords() {
    const success = (res) => {
      this.defaultPlace.coordinates = {
        ltd: res.coords.latitude,
        lgt: res.coords.longitude,
      };
      _modules_eventbus__WEBPACK_IMPORTED_MODULE_0__["eventBus"].publish(_constants_events__WEBPACK_IMPORTED_MODULE_1__["EVENTS"].GETED_COORDS, this.defaultPlace.coordinates);
    };
    const error = (error) => console.error(error.message);
    return window.navigator.geolocation.getCurrentPosition(success, error);
  }

  bindEventHandlers() {
    this.addPlaceBtn.addEventListener('click', this.showModal.bind(this));
    this.holder.addEventListener('click', (e) => {
      if (e.target.closest('.form')) {
        return;
      }
      this.clearForm();
      this.closeForm();
    }, true);
    this.form.addEventListener('submit', this.savePlace.bind(this));
  }

  showModal(id) {
    let obj;
    if (typeof id === 'string'){
      obj = this.findPlace(id);
      this.addFormId(id);
    } else {
      this.form.removeAttribute('data-id');
      this.formId = '';
    }
    this.fillForm(obj);
    document.body.classList.add('form-open');
  }

  serializeForm(form) {
    const title = form.querySelector('[name="place-title"]').value;
    const description = form.querySelector('[name="place-description"]').value;
    const start = form.querySelector('[name="place-start"]').value;
    const end = form.querySelector('[name="place-end"]').value;
    const ltd = form.querySelector('[name="place-ltd"]').value.substring(0, 10);
    const lgt = form.querySelector('[name="place-lgt"]').value.substring(0, 10);

    const id = this.formId ? this.formId : `${ltd}${lgt}${new Date().getTime()}`;
    const label = title[0].toUpperCase();

    return {
      title,
      description,
      openhours: {
        start,
        end
      },
      coordinates: {
        ltd,
        lgt
      },
      id,
      label
    }
  }

  savePlace(e) {
    e.preventDefault();
    const serializedPlace = this.serializeForm(this.form);

    if(this.validateForm(this.form)) {
      const newPlace = Object.assign({}, this.place, serializedPlace);
      if(this.formId) {
        this.editExistingPlace(newPlace);
      } else {
        this.createNewPlace(newPlace);
      }
      this.clearForm();
      this.closeForm();
      _modules_eventbus__WEBPACK_IMPORTED_MODULE_0__["eventBus"].publish(_constants_events__WEBPACK_IMPORTED_MODULE_1__["EVENTS"].REFRESH_PLACES);
    }
  }

  createNewPlace(newPlace) {
    // this.places.push(Object.assign({}, this.defaultPlace, newPlace));
    this.sendPost(newPlace);
  }

  editExistingPlace(newPlace) {
    const index = this.places.findIndex(place => place.id === this.formId);
    const oldPlace = this.places[index];
    this.places.splice(index, 1, Object.assign(oldPlace, newPlace));
    _modules_eventbus__WEBPACK_IMPORTED_MODULE_0__["eventBus"].publish(_constants_events__WEBPACK_IMPORTED_MODULE_1__["EVENTS"].EDIT_PLACE);
    this.sendPut(newPlace);
  }

  sendPost(data) {
    const thisForm = this;

    const xhr = new XMLHttpRequest();
    const json = JSON.stringify(data);
    xhr.open('POST', '/place');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      const resPlaces = JSON.parse(xhr.response);
      _modules_eventbus__WEBPACK_IMPORTED_MODULE_0__["eventBus"].publish(_constants_events__WEBPACK_IMPORTED_MODULE_1__["EVENTS"].REFRESH_PLACES, resPlaces);
    };
    xhr.send(json);
  }

  sendPut(data) {
    const xhr = new XMLHttpRequest();
    const json = JSON.stringify(data);
    xhr.open('PUT', '/place');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      console.log(xhr.response);
    };
    xhr.send(json);
  }

  clearForm() {
    this.inputs.title.value = '';
    this.inputs.description.value = '';
    this.inputs.start.value = '';
    this.inputs.end.value = '';
    this.inputs.ltd.value = '';
    this.inputs.lgt.value = '';
  }

  closeForm() {
    document.body.classList.remove('form-open');
  }

  subscribeToEvents() {
    _modules_eventbus__WEBPACK_IMPORTED_MODULE_0__["eventBus"].subscribe(_constants_events__WEBPACK_IMPORTED_MODULE_1__["EVENTS"].OPEN_PLACE_FOR_EDITING, this.showModal.bind(this));
  }

  addFormId(id) {
    this.form.setAttribute('data-id', id);
    this.formId = id;
  }

  validateForm(form) {
    return true;
  }

  fillForm(obj = this.defaultPlace) {
    this.inputs.title.value = obj.title;
    this.inputs.description.value = obj.description;
    this.inputs.start.value = obj.openhours.start;
    this.inputs.end.value = obj.openhours.end;
    this.inputs.ltd.value = obj.coordinates.ltd;
    this.inputs.lgt.value = obj.coordinates.lgt;
  }

  findPlace(id) {
    return this.places.find(place => place.id === id);
  }
}


/***/ }),

/***/ "./src/js/components/map.js":
/*!**********************************!*\
  !*** ./src/js/components/map.js ***!
  \**********************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var _constants_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/api_config */ "./src/js/constants/api_config.js");
/* harmony import */ var _modules_eventbus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/eventbus.js */ "./src/js/modules/eventbus.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/events */ "./src/js/constants/events.js");




class Map {
  constructor(data) {
    this.markers = data;
    this.image = document.querySelector("#map-image");
    this.center = _constants_api_config__WEBPACK_IMPORTED_MODULE_0__["params"].center;
    this.url = _constants_api_config__WEBPACK_IMPORTED_MODULE_0__["URL"];
    this.apiKey = _constants_api_config__WEBPACK_IMPORTED_MODULE_0__["API_KEY"];
    this.maptype = _constants_api_config__WEBPACK_IMPORTED_MODULE_0__["params"].maptype;
    this.zoom = _constants_api_config__WEBPACK_IMPORTED_MODULE_0__["params"].zoom;
  }

  init() {
    // this.addId();
    this.showMap(this.createUrl());
    this.subscribeEvents();
  }

  // addId() {
  //   this.markers.forEach(marker => marker.id = `${marker.coordinates.ltd}${marker.coordinates.lgt}`);
  // }

  createUrl(markers) {
    markers = markers && markers.length ? markers : this.markers;

    return `${this.url}center=${this.center}&zoom=${this.zoom}&size=${
      _constants_api_config__WEBPACK_IMPORTED_MODULE_0__["params"].size
    }&format=png&maptype=${this.maptype}&${markers.map(marker => {
      return `markers=color:${marker.marker.color}%7Clabel:${marker.marker.letter}%7C${marker.coordinates.ltd},${marker.coordinates.lgt}`;
    })}&key=${this.apiKey}`.replace(/,markers/g, "&markers");
  }

  showMap(src) {
    this.image.src = src;
  }

  refreshMap(data) {
    this.showMap(this.createUrl(data));
  }

  setCoords(coords) {
    this.center = `${coords.ltd},${coords.lgt}`;
    this.refreshMap();
    console.log(coords);
  }

  subscribeEvents() {
    // eventBus.subscribe(EVENTS.REMOVED_PLACE, this.refreshMap.bind(this));
    // eventBus.subscribe(EVENTS.EDIT_PLACE, this.refreshMap.bind(this));
    // eventBus.subscribe(EVENTS.SHOW_FILTERED_PLACES, this.refreshMap.bind(this));
    // eventBus.subscribe(EVENTS.SHOW_ALL_PLACES, this.refreshMap.bind(this));
    // eventBus.subscribe(EVENTS.GETED_COORDS, this.setCoords.bind(this));
    _modules_eventbus_js__WEBPACK_IMPORTED_MODULE_1__["eventBus"].subscribe(_constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENTS"].REFRESH_PLACES, this.refreshMap.bind(this));
  }
}


/***/ }),

/***/ "./src/js/components/places.js":
/*!*************************************!*\
  !*** ./src/js/components/places.js ***!
  \*************************************/
/*! exports provided: Places */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Places", function() { return Places; });
/* harmony import */ var _modules_eventbus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/eventbus */ "./src/js/modules/eventbus.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/events */ "./src/js/constants/events.js");



class Places {
  constructor(data) {
    this.places = data;
    this.container = document.getElementById("place-list");
  }

  init() {
    // this.addId();
    this.bindEvents();
    this.subscribeEvents();
    this.renderPlaceList();
  }

  // addId() {
  //   this.places.forEach(place => place.id = `${place.coordinates.ltd}${place.coordinates.lgt}${new Date().getTime()}`);
  // }

  renderPlace(place) {
    const template = `
                    <li data-id="${place.id}" class="place place-list__item">
                      <span class="place__content">
                        <span class="place__title">${place.title}</span>
                        <span class="place__description">${place.description}</span>
                        <span class="place__labels">
                          <ul class="place__time">
                            <li>From: ${place.openhours.start}</li>
                            <li>To: ${place.openhours.end}</li>
                          </ul>
                          <ul class="place__coords">
                            <li>${place.coordinates.ltd}</li>
                            <li>${place.coordinates.lgt}</li>
                          </ul>
                          <ul class="place__keywords">
                            <li>#place</li>
                            <li>#map</li>
                            <li>#google</li>
                          </ul>
                        </span>
                      </span>
                      <span class="place__controls">
                        <button class="btn btn-edit-place">Edit</button>
                        <button class="btn btn-remove-place">Remove</button>
                      </span>
                    </span>
                    `;
    this.container.insertAdjacentHTML("beforeend", template);
  }
  
  bindEvents() {
    this.container.addEventListener("click", this.clickHandler.bind(this));
  }

  clickHandler(e) {
    const target = e.target;
    if (target.classList.contains("btn-edit-place")) {
      this.editPlace(target);
    } else if (target.classList.contains("btn-remove-place")) {
      this.removePlace(target);
    }
  }

  addPlace(newPlace) {
    this.renderPlace(newPlace);
  }

  editPlace(target) {
    const li = target.closest('li');
    const id = li.getAttribute('data-id');
    _modules_eventbus__WEBPACK_IMPORTED_MODULE_0__["eventBus"].publish(_constants_events__WEBPACK_IMPORTED_MODULE_1__["EVENTS"].OPEN_PLACE_FOR_EDITING, id);
    document.body.classList.add('form-open');
  }

  removePlace(target) {
    const li = target.closest('li');
    const id = li.getAttribute('data-id');

    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', `/place/${id}`);
    xhr.onload = function() {
      const resPlaces = JSON.parse(xhr.response);
      _modules_eventbus__WEBPACK_IMPORTED_MODULE_0__["eventBus"].publish(_constants_events__WEBPACK_IMPORTED_MODULE_1__["EVENTS"].REFRESH_PLACES, resPlaces);
    };
    xhr.send();
    // eventBus.publish(EVENTS.REMOVED_PLACE);
  }

  renderPlaceList(places = this.places) {
    this.container.innerHTML = '';
    places.forEach(place => this.renderPlace(place));
  }

  subscribeEvents() {
    // eventBus.subscribe(EVENTS.EDIT_PLACE, this.renderPlaceList.bind(this));
    // eventBus.subscribe(EVENTS.SHOW_FILTERED_PLACES, this.renderPlaceList.bind(this));
    // eventBus.subscribe(EVENTS.SHOW_ALL_PLACES, this.renderPlaceList.bind(this));
    _modules_eventbus__WEBPACK_IMPORTED_MODULE_0__["eventBus"].subscribe(_constants_events__WEBPACK_IMPORTED_MODULE_1__["EVENTS"].REFRESH_PLACES, this.renderPlaceList.bind(this));
  }
}

/***/ }),

/***/ "./src/js/constants/api_config.js":
/*!****************************************!*\
  !*** ./src/js/constants/api_config.js ***!
  \****************************************/
/*! exports provided: API_KEY, URL, params */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_KEY", function() { return API_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "params", function() { return params; });
const API_KEY = "AIzaSyB-uwx38PKPh0z8CaYHcnvduxs9Mee2M4E";	
const URL = "https://maps.googleapis.com/maps/api/staticmap?";	
const params = {	
  center: "Kharkiv,Ukraine",	
  zoom: 12,	
  size: "1800x900",	
  maptype: "roadmap"	
};	


/***/ }),

/***/ "./src/js/constants/events.js":
/*!************************************!*\
  !*** ./src/js/constants/events.js ***!
  \************************************/
/*! exports provided: EVENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENTS", function() { return EVENTS; });
const EVENTS = {
  EDIT_PLACE: 'EDIT_PLACE',
  SHOW_FILTERED_PLACES: 'SHOW_FILTERED_PLACES',
  OPEN_PLACE_FOR_EDITING: 'OPEN_PLACE_FOR_EDITING',
  REMOVED_PLACE: 'REMOVED_PLACE',
  SHOW_ALL_PLACES: 'SHOW_ALL_PLACES',
  REFRESH_PLACES: 'REFRESH_PLACES',
  GETED_COORDS: 'GETED_COORDS',
  REFRESH_PLACES: 'REFRESH_PLACES',
}

/***/ }),

/***/ "./src/js/modules/eventbus.js":
/*!************************************!*\
  !*** ./src/js/modules/eventbus.js ***!
  \************************************/
/*! exports provided: eventBus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventBus", function() { return eventBus; });
const eventBus = {
  channels: {},
  subscribe (channelName, listener) {
    if (!this.channels[channelName]) {
      this.channels[channelName] = []
    }
    this.channels[channelName].push(listener)
  },

  publish (channelName, data) {
    const channel = this.channels[channelName]
    if (!channel || !channel.length) {
      return
    }

    channel.forEach(listener => listener(data))
  }
}


/***/ }),

/***/ "./src/js/modules/validate-form.js":
/*!*****************************************!*\
  !*** ./src/js/modules/validate-form.js ***!
  \*****************************************/
/*! exports provided: ValidateForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateForm", function() { return ValidateForm; });
class ValidateForm {
  constructor(form) {
    this.form = form;
  }
}

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=build.js.map