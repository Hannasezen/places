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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_loader_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _js_data_places_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
var _js_data_places_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(8, 1);
/* harmony import */ var _js_components_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _js_components_places__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _js_components_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var _js_components_filters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);










const map = new _js_components_map__WEBPACK_IMPORTED_MODULE_3__["Map"](_js_data_places_json__WEBPACK_IMPORTED_MODULE_2__).init();
const placeList = new _js_components_places__WEBPACK_IMPORTED_MODULE_4__["Places"](_js_data_places_json__WEBPACK_IMPORTED_MODULE_2__).init();
const form = new _js_components_form__WEBPACK_IMPORTED_MODULE_5__["Form"](_js_data_places_json__WEBPACK_IMPORTED_MODULE_2__).init();
const filter = new _js_components_filters__WEBPACK_IMPORTED_MODULE_6__["Filter"](_js_data_places_json__WEBPACK_IMPORTED_MODULE_2__).init();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(3);

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

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "body {\n  color: red;\n}\n\n.hidden {\n  display: none;\n}\n\n.map {\n  width: 600px;\n  height: 300px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") rgb(214, 204, 238);\n}\n\n.form-open .form {\n  display: block;\n}\n\n.form input:invalid {\n  border-color: rgb(248, 131, 131)\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/images/map-holder.jpg");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/images/loader.gif");

/***/ }),
/* 8 */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Home\",\"description\":\"Home\",\"color\":\"red\",\"label\":\"A\",\"coordinates\":{\"ltd\":\"50.005083\",\"lgt\":\"36.190229\"},\"openhours\":{\"start\":\"09:00\",\"end\":\"21:00\"},\"keywords\":[]},{\"title\":\"Work\",\"description\":\"Work\",\"color\":\"blue\",\"label\":\"W\",\"coordinates\":{\"ltd\":\"50.037139\",\"lgt\":\"36.218084\"},\"openhours\":{\"start\":\"10:00\",\"end\":\"18:00\"},\"keywords\":[]},{\"title\":\"Jelya\",\"description\":\"Sister\",\"color\":\"green\",\"label\":\"J\",\"coordinates\":{\"ltd\":\"50.025086\",\"lgt\":\"36.217503\"},\"openhours\":{\"start\":\"10:00\",\"end\":\"17:00\"},\"keywords\":[]}]");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var _constants_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _modules_eventbus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);




class Map {
  constructor(data) {
    this.markers = data;
    this.image = document.querySelector("#map-image");
  }

  init() {
    this.addId();
    this.showMap(this.createUrl());
    this.subscribeEvents();
  }

  addId() {
    this.markers.forEach(marker => marker.id = `${marker.coordinates.ltd}${marker.coordinates.lgt}`);
  }

  createUrl(markers) {
    markers = markers && markers.length ? markers : this.markers;

    return `${_constants_api_config__WEBPACK_IMPORTED_MODULE_0__["URL"]}center=${_constants_api_config__WEBPACK_IMPORTED_MODULE_0__["params"].center}&zoom=${_constants_api_config__WEBPACK_IMPORTED_MODULE_0__["params"].zoom}&size=${
      _constants_api_config__WEBPACK_IMPORTED_MODULE_0__["params"].size
    }&maptype=${_constants_api_config__WEBPACK_IMPORTED_MODULE_0__["params"].maptype}&${markers.map(marker => {
      return `markers=color:${marker.color}%7Clabel:${marker.label}%7C${marker.coordinates.ltd},${marker.coordinates.lgt}`;
    })}&key=${_constants_api_config__WEBPACK_IMPORTED_MODULE_0__["API_KEY"]}`.replace(/,markers/g, "&markers");
  }

  showMap(src) {
    this.image.src = src;
  }

  refreshMap(data) {
    this.showMap(this.createUrl(data));
  }

  subscribeEvents() {
    _modules_eventbus_js__WEBPACK_IMPORTED_MODULE_1__["eventBus"].subscribe(_constants_events__WEBPACK_IMPORTED_MODULE_2__["EVENTS"].ADDED_NEW_PLACE, this.refreshMap.bind(this));
    _modules_eventbus_js__WEBPACK_IMPORTED_MODULE_1__["eventBus"].subscribe('removed_place', this.refreshMap.bind(this));
    _modules_eventbus_js__WEBPACK_IMPORTED_MODULE_1__["eventBus"].subscribe('edit_place', this.refreshMap.bind(this));
    _modules_eventbus_js__WEBPACK_IMPORTED_MODULE_1__["eventBus"].subscribe('show_filtered_places', this.refreshMap.bind(this));
  }
}






/***/ }),
/* 10 */
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
  zoom: 11,	
  size: "600x300",	
  maptype: "roadmap"	
};	


/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENTS", function() { return EVENTS; });
const EVENTS = {
  ADDED_NEW_PLACE: 'ADDED_NEW_PLACE'
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Places", function() { return Places; });
/* harmony import */ var _modules_eventbus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);



class Places {
  constructor(data) {
    this.places = data;
    this.container = document.getElementById("place-list");
  }

  init() {
    this.addId();
    this.bindEvents();
    this.subscribeEvents();
    this.renderPlaceList();
  }

  addId() {
    this.places.forEach(place => place.id = `${place.coordinates.ltd}${place.coordinates.lgt}`);
  }

  renderPlace(place) {
    const template = `
                    <li data-id="${place.id}">
                      <span>Name: ${place.title}</span>
                      <span>Description: ${place.description}</span>
                      <span>From: ${place.openhours.start}</span>
                      <span>To: ${place.openhours.end}</span>
                      <button class="edit-place">Edit</button>
                      <button class="remove-place">Remove</button>
                    </li>
                    `;
    this.container.insertAdjacentHTML("beforeend", template);
  }
  
  bindEvents() {
    this.container.addEventListener("click", this.clickHandler.bind(this));
  }

  clickHandler(e) {
    const target = e.target;
    if (target.classList.contains("edit-place")) {
      this.editPlace(target);
    } else if (target.classList.contains("remove-place")) {
      this.removePlace(target);
    }
  }

  addPlace(newPlace) {
    this.renderPlace(newPlace);
  }

  editPlace(target) {
    const li = target.closest('li');
    const id = li.getAttribute('data-id');
    _modules_eventbus__WEBPACK_IMPORTED_MODULE_0__["eventBus"].publish('open_place_for_editing', id);
    document.body.classList.add('form-open');
  }

  removePlace(target) {
    const li = target.closest('li');
    const id = li.getAttribute('data-id');
    const index = this.places.findIndex(place => place.id === id);
    if (index !== -1) {
      this.places.splice(index, 1);
      li.remove();
    }    
    _modules_eventbus__WEBPACK_IMPORTED_MODULE_0__["eventBus"].publish('removed_place');
  }

  renderPlaceList(places = this.places) {
    this.container.innerHTML = '';
    places.forEach(place => this.renderPlace(place));
  }

  subscribeEvents() {
    _modules_eventbus__WEBPACK_IMPORTED_MODULE_0__["eventBus"].subscribe(_constants_events__WEBPACK_IMPORTED_MODULE_1__["EVENTS"].ADDED_NEW_PLACE, this.addPlace.bind(this));
    _modules_eventbus__WEBPACK_IMPORTED_MODULE_0__["eventBus"].subscribe('edit_place', this.renderPlaceList.bind(this));
    _modules_eventbus__WEBPACK_IMPORTED_MODULE_0__["eventBus"].subscribe('show_filtered_places', this.renderPlaceList.bind(this));
  }
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var _modules_eventbus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _modules_validate_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);




class Form {
  constructor(data) {
    this.places = data;
    this.addPlaceBtn = document.getElementById('add-place-btn');
    this.savePlaceBtn = document.getElementById('save-place-btn');
    this.form = document.getElementById('form');

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
      color: 'yellow',
      label: 'C',
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
    };
    const error = (error) => console.error(error.message);
    return window.navigator.geolocation.getCurrentPosition(success, error);
  }

  bindEventHandlers() {
    this.addPlaceBtn.addEventListener('click', this.showModal.bind(this));
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
    const ltd = form.querySelector('[name="place-ltd"]').value;
    const lgt = form.querySelector('[name="place-lgt"]').value;

    const id = this.formId ? this.formId : `${ltd}${lgt}`;
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
        const index = this.places.findIndex(place => place.id === this.formId);
        const oldPlace = this.places[index];
        this.places.splice(index, 1, Object.assign(oldPlace, newPlace));
        console.log(this.places);
        _modules_eventbus__WEBPACK_IMPORTED_MODULE_0__["eventBus"].publish('edit_place');
      } else {
        this.places.push(Object.assign({}, this.defaultPlace, newPlace));
        _modules_eventbus__WEBPACK_IMPORTED_MODULE_0__["eventBus"].publish(_constants_events__WEBPACK_IMPORTED_MODULE_1__["EVENTS"].ADDED_NEW_PLACE, newPlace);
      }
      this.clearForm();
      this.closeForm();
    }
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
    _modules_eventbus__WEBPACK_IMPORTED_MODULE_0__["eventBus"].subscribe('open_place_for_editing', this.showModal.bind(this));
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
/* 15 */
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return Filter; });
/* harmony import */ var _modules_eventbus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);


class Filter {
  constructor(data) {
    this.places = data;
    this.openPlacesFilterBtn = document.querySelector('#filter-open-places')
  }

  init() {
    this.subscribeToEvents();
  }

  subscribeToEvents() {
    _modules_eventbus__WEBPACK_IMPORTED_MODULE_0__["eventBus"].subscribe('');
    this.openPlacesFilterBtn.addEventListener('click', this.showOpenPlaces.bind(this));
  }

  showOpenPlaces() {
    const nowTime = new Date().getHours();
    const filteredList = this.places.filter(place => {
      return nowTime > place.openhours.start.match(/\d+(?=\:)/)[0]
          && nowTime < place.openhours.end.match(/\d+(?=\:)/)[0];
    });
    _modules_eventbus__WEBPACK_IMPORTED_MODULE_0__["eventBus"].publish('show_filtered_places', filteredList);
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=build.js.map