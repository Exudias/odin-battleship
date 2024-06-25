/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --color-foreground-dark: #1d4ed8;
    --color-foreground: #3b82f6;
    --color-foreground-light: #60a5fa;
    --color-background: #172554;
    --color-highlight: #93c5fd;
    --color-text: #bfdbfe;
}

html, body {
    height: 100%;
    margin: 0;
    padding: 0;
}

body {
    font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
}

.main-container, .body-container {
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
}

.body-container {
    height: 100%;

    background-color: var(--color-background);
}

.header-container {
    height: 64px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 42px;

    color: var(--color-text);
    text-transform: uppercase;
    background-color: var(--color-foreground-dark);
}

.main-container {
    height: calc(100% - 64px);
}

.controls-container {
    width: 100%;
    height: 96px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    background-color: transparent;
}

.control-button {
    width: 184px;
    height: 64px;

    font-size: 24px;
    background-color: var(--color-foreground-dark);
    color: var(--color-text);
    border: none;
    border-radius: 8px;

    -webkit-box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.75);
}

.control-button:hover {
    border: 4px solid white;
}

.game-container {
    width: 100%;
    flex: 1;

    display: flex;
    flex-direction: row;
}

.gameboard-container {
    width: 50%;

    display: flex;
    flex-direction: column;
}

.gameboard-header {
    height: 64px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--color-foreground-light);

    font-size: 32px;
}

.gameboard {
    flex: 1;

    padding: 10px;

    display: grid;
    gap: 4px;
    grid-template-columns: repeat(10, auto);
    grid-template-rows: repeat(10, auto);
}

.gameboard > div {
    border-radius: 4px;
    background-color: white;

    transition: background-color 0.5s ease;
}

.gameboard > div.ship-5 {
    background-color: black;
}

.gameboard > div.ship-4 {
    background-color: rgb(27, 27, 27);
}

.gameboard > div.ship-3 {
    background-color: rgb(34, 34, 34);
}

.gameboard > div.ship-2 {
    background-color: rgb(53, 53, 53);
}

.gameboard > div.hit {
    background-color: red;
}

.gameboard > div.miss {
    background-color: rgb(68, 133, 138);
}

.hidden {
    display: none;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,gCAAgC;IAChC,2BAA2B;IAC3B,iCAAiC;IACjC,2BAA2B;IAC3B,0BAA0B;IAC1B,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,SAAS;IACT,UAAU;AACd;;AAEA;IACI;;;;;;;;;;;cAWU;AACd;;AAEA;IACI,WAAW;;IAEX,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,YAAY;;IAEZ,yCAAyC;AAC7C;;AAEA;IACI,YAAY;IACZ,WAAW;;IAEX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,eAAe;;IAEf,wBAAwB;IACxB,yBAAyB;IACzB,8CAA8C;AAClD;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;;IAET,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,YAAY;;IAEZ,eAAe;IACf,8CAA8C;IAC9C,wBAAwB;IACxB,YAAY;IACZ,kBAAkB;;IAElB,oDAAoD;IACpD,iDAAiD;IACjD,4CAA4C;AAChD;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,OAAO;;IAEP,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,UAAU;;IAEV,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;;IAEZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,+CAA+C;;IAE/C,eAAe;AACnB;;AAEA;IACI,OAAO;;IAEP,aAAa;;IAEb,aAAa;IACb,QAAQ;IACR,uCAAuC;IACvC,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;;IAEvB,sCAAsC;AAC1C;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,aAAa;AACjB","sourcesContent":[":root {\r\n    --color-foreground-dark: #1d4ed8;\r\n    --color-foreground: #3b82f6;\r\n    --color-foreground-light: #60a5fa;\r\n    --color-background: #172554;\r\n    --color-highlight: #93c5fd;\r\n    --color-text: #bfdbfe;\r\n}\r\n\r\nhtml, body {\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    font-family:\r\n    system-ui,\r\n    -apple-system,\r\n    BlinkMacSystemFont,\r\n    \"Segoe UI\",\r\n    Roboto,\r\n    Oxygen,\r\n    Ubuntu,\r\n    Cantarell,\r\n    \"Open Sans\",\r\n    \"Helvetica Neue\",\r\n    sans-serif;\r\n}\r\n\r\n.main-container, .body-container {\r\n    width: 100%;\r\n\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.body-container {\r\n    height: 100%;\r\n\r\n    background-color: var(--color-background);\r\n}\r\n\r\n.header-container {\r\n    height: 64px;\r\n    width: 100%;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    font-size: 42px;\r\n\r\n    color: var(--color-text);\r\n    text-transform: uppercase;\r\n    background-color: var(--color-foreground-dark);\r\n}\r\n\r\n.main-container {\r\n    height: calc(100% - 64px);\r\n}\r\n\r\n.controls-container {\r\n    width: 100%;\r\n    height: 96px;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 10px;\r\n\r\n    background-color: transparent;\r\n}\r\n\r\n.control-button {\r\n    width: 184px;\r\n    height: 64px;\r\n\r\n    font-size: 24px;\r\n    background-color: var(--color-foreground-dark);\r\n    color: var(--color-text);\r\n    border: none;\r\n    border-radius: 8px;\r\n\r\n    -webkit-box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.75);\r\n    -moz-box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.75);\r\n    box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.75);\r\n}\r\n\r\n.control-button:hover {\r\n    border: 4px solid white;\r\n}\r\n\r\n.game-container {\r\n    width: 100%;\r\n    flex: 1;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.gameboard-container {\r\n    width: 50%;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.gameboard-header {\r\n    height: 64px;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    background-color: var(--color-foreground-light);\r\n\r\n    font-size: 32px;\r\n}\r\n\r\n.gameboard {\r\n    flex: 1;\r\n\r\n    padding: 10px;\r\n\r\n    display: grid;\r\n    gap: 4px;\r\n    grid-template-columns: repeat(10, auto);\r\n    grid-template-rows: repeat(10, auto);\r\n}\r\n\r\n.gameboard > div {\r\n    border-radius: 4px;\r\n    background-color: white;\r\n\r\n    transition: background-color 0.5s ease;\r\n}\r\n\r\n.gameboard > div.ship-5 {\r\n    background-color: black;\r\n}\r\n\r\n.gameboard > div.ship-4 {\r\n    background-color: rgb(27, 27, 27);\r\n}\r\n\r\n.gameboard > div.ship-3 {\r\n    background-color: rgb(34, 34, 34);\r\n}\r\n\r\n.gameboard > div.ship-2 {\r\n    background-color: rgb(53, 53, 53);\r\n}\r\n\r\n.gameboard > div.hit {\r\n    background-color: red;\r\n}\r\n\r\n.gameboard > div.miss {\r\n    background-color: rgb(68, 133, 138);\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/dommanager.js":
/*!***********************************!*\
  !*** ./src/scripts/dommanager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DomManager: () => (/* binding */ DomManager)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/scripts/ship.js");


class DomManager
{
    static createAndAddDiv(parent)
    {
        const newDiv = document.createElement("div");
        parent.appendChild(newDiv);
        return newDiv;
    }

    static findElementById(id)
    {
        return document.getElementById(id);
    }

    static setDivText(div, text)
    {
        div.innerText = text;
    }

    static hideElement(element)
    {
        element.classList.add("hidden");
    }

    static showElement(element)
    {
        element.classList.remove("hidden");
    }

    static renderBoardOnGrid(board, grid, isEnemy)
    {
        const boardGrid = board.grid;
        const boardSize = boardGrid.length;
        for (let i = 0; i < boardSize; i++)
        {
            for (let j = 0; j < boardSize; j++)
            {
                const gridIndex = i * boardSize + j;
                if (boardGrid[i][j] === null)
                {
                    grid.children[gridIndex].className = "";
                }
                else if (boardGrid[i][j] instanceof _ship__WEBPACK_IMPORTED_MODULE_0__.Ship && !isEnemy)
                {
                    grid.children[gridIndex].className = "ship-" + boardGrid[i][j].length;
                }
                else if (boardGrid[i][j] === "H")
                {
                    grid.children[gridIndex].className = "hit";
                }
                else if (boardGrid[i][j] === "X")
                {
                    grid.children[gridIndex].className = "miss";
                }
            }
        }
    }

    static removeAllChildren(node)
    {
        node.innerHTML = "";
    }
}



/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/scripts/player.js");


class Game
{
    constructor()
    {
        this.p1 = new _player__WEBPACK_IMPORTED_MODULE_0__.Player(true);
        this.p2 = new _player__WEBPACK_IMPORTED_MODULE_0__.Player(false);
    }
}



/***/ }),

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/scripts/ship.js");


class Gameboard
{
    constructor()
    {
        const GRID_SIZE = 10;

        this.ships = [];
        this.grid = this._createGrid(GRID_SIZE);
    }

    place(ship, coords, vertical)
    {
        // Check if ship already on board
        if (this.ships.includes(ship)) return false;

        let gridSize = this.grid.length;

        let startX = coords[1];
        let startY = coords[0];
        let endX = startX + (ship.length - 1) * !vertical;
        let endY = startY + (ship.length - 1) * vertical;

        // Check if OOB
        if (endX >= gridSize || endY >= gridSize) return false;

        // Check if overlaps other ships
        for (let i = 0; i < ship.length; i++)
        {
            let posY = startY + (i * vertical);
            let posX = startX + (i * !vertical);
            if (this.grid[posY][posX] instanceof _ship__WEBPACK_IMPORTED_MODULE_0__.Ship)
            {
                return false;
            }
        }

        this.ships.push(ship);

        for (let i = 0; i < ship.length; i++)
        {
            let posY = startY + (i * vertical);
            let posX = startX + (i * !vertical);
            this.grid[posY][posX] = ship;
        }

        return true;
    }

    receiveAttack(coords)
    {
        let attackX = coords[1];
        let attackY = coords[0];

        let hitSquare = this.grid[attackY][attackX];
        if (hitSquare === "H" || hitSquare === "X") return null;

        if (hitSquare instanceof _ship__WEBPACK_IMPORTED_MODULE_0__.Ship)
        {
            hitSquare.hit();
            this.grid[attackY][attackX] = "H"
            return true;
        }

        this.grid[attackY][attackX] = "X";
        return false;
    }

    allShipsSunk()
    {
        for (let i = 0; i < this.ships.length; i++)
        {
            if (!this.ships[i].isSunk()) return false;
        }

        return true;
    }

    _createGrid(size)
    {
        let grid = [];
        for (let i = 0; i < size; i++)
        {
            let row = [];
            for (let j = 0; j < size; j++)
            {
                row.push(null);
            }
            grid.push(row);
        }

        return grid;
    }
}



/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/scripts/gameboard.js");


class Player
{
    constructor(human)
    {
        this.human = human;
        this.board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
    }

    attackAI(enemyBoard)
    {
        const boardSize = enemyBoard.grid.length;
        let result = null;
        while (result === null)
        {
            let x = Math.floor(Math.random() * boardSize);
            let y = Math.floor(Math.random() * boardSize);
            result = enemyBoard.receiveAttack([y, x]);
        }
        if (result === true)
        {
            this.attackAI(enemyBoard);
        }
    }
}



/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship
{
    constructor(len)
    {
        this.length = len;
        this.hits = 0;
    }

    hit()
    {
        this.hits++;
    }

    isSunk()
    {
        return this.hits >= this.length;
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ "./src/scripts/game.js");
/* harmony import */ var _scripts_ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/ship */ "./src/scripts/ship.js");
/* harmony import */ var _scripts_dommanager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/dommanager */ "./src/scripts/dommanager.js");





const board1 = _scripts_dommanager__WEBPACK_IMPORTED_MODULE_3__.DomManager.findElementById("gameboard-1");
const board2 = _scripts_dommanager__WEBPACK_IMPORTED_MODULE_3__.DomManager.findElementById("gameboard-2");
const resetButton = _scripts_dommanager__WEBPACK_IMPORTED_MODULE_3__.DomManager.findElementById("button-restart");
const verticalButton = _scripts_dommanager__WEBPACK_IMPORTED_MODULE_3__.DomManager.findElementById("button-vertical");
const horizontalButton = _scripts_dommanager__WEBPACK_IMPORTED_MODULE_3__.DomManager.findElementById("button-horizontal");
const headerContainer = _scripts_dommanager__WEBPACK_IMPORTED_MODULE_3__.DomManager.findElementById("header-container");

let placingVertical = true;
let gameOver = false;

const SHIPS = [5, 4, 3, 3, 2];

(() => {
    resetButton.onclick = function(){resetGame()};
    verticalButton.onclick = function()
    {
        _scripts_dommanager__WEBPACK_IMPORTED_MODULE_3__.DomManager.hideElement(verticalButton);
        _scripts_dommanager__WEBPACK_IMPORTED_MODULE_3__.DomManager.showElement(horizontalButton);
        placingVertical = true;
    };
    horizontalButton.onclick = function()
    {
        _scripts_dommanager__WEBPACK_IMPORTED_MODULE_3__.DomManager.showElement(verticalButton);
        _scripts_dommanager__WEBPACK_IMPORTED_MODULE_3__.DomManager.hideElement(horizontalButton);
        placingVertical = false;
    };

    const game = beginGame();
    setUpDOM(game);
})();

function beginGame()
{
    const shipCount = SHIPS.length;
    _scripts_dommanager__WEBPACK_IMPORTED_MODULE_3__.DomManager.setDivText(headerContainer, `Place your ships (${shipCount} remain)!`);
    gameOver = false;
    const game = new _scripts_game__WEBPACK_IMPORTED_MODULE_1__.Game();
    return game;
}

function resetGame()
{
    const game = beginGame();
    resetDOM();
    setUpDOM(game);
}

function setUpDOM(game)
{
    populateDOMBoard(board1, game, false);
    populateDOMBoard(board2, game, true);

    populateBoard(game.p2.board);

    _scripts_dommanager__WEBPACK_IMPORTED_MODULE_3__.DomManager.renderBoardOnGrid(game.p1.board, board1);
    _scripts_dommanager__WEBPACK_IMPORTED_MODULE_3__.DomManager.renderBoardOnGrid(game.p2.board, board2, true);
}

function resetDOM()
{
    _scripts_dommanager__WEBPACK_IMPORTED_MODULE_3__.DomManager.removeAllChildren(board1);
    _scripts_dommanager__WEBPACK_IMPORTED_MODULE_3__.DomManager.removeAllChildren(board2);
    _scripts_dommanager__WEBPACK_IMPORTED_MODULE_3__.DomManager.hideElement(verticalButton);
    _scripts_dommanager__WEBPACK_IMPORTED_MODULE_3__.DomManager.showElement(horizontalButton);
    placingVertical = true;
}

function checkWin(game)
{
    if (game.p1.board.allShipsSunk())
    {
        gameEnd(false);
    }
    else if (game.p2.board.allShipsSunk())
    {
        gameEnd(true);
    }
}

function gameEnd(win)
{
    gameOver = true;
    if (win)
        _scripts_dommanager__WEBPACK_IMPORTED_MODULE_3__.DomManager.setDivText(headerContainer, `You win!`);
    else
        _scripts_dommanager__WEBPACK_IMPORTED_MODULE_3__.DomManager.setDivText(headerContainer, `You lose!`);
}

function populateDOMBoard(board, game, isEnemy)
{
    for (let i = 0; i < 10; i++)
    {
        for (let j = 0; j < 10; j++)
        {
            let div = _scripts_dommanager__WEBPACK_IMPORTED_MODULE_3__.DomManager.createAndAddDiv(board);
            if (isEnemy)
            {
                const boardEntity = game.p2.board;
                div.onclick = function()
                {
                    if (game.p1.board.ships.length < SHIPS.length) return;
                    if (gameOver) return;
                    let attackResult = boardEntity.receiveAttack([i, j]);
                    if (attackResult !== null)
                    {
                        _scripts_dommanager__WEBPACK_IMPORTED_MODULE_3__.DomManager.renderBoardOnGrid(boardEntity, board, true);
                        if (attackResult === false)
                        {
                            game.p2.attackAI(game.p1.board);
                            _scripts_dommanager__WEBPACK_IMPORTED_MODULE_3__.DomManager.renderBoardOnGrid(game.p1.board, board1);
                            checkWin(game);
                        }
                        else
                        {
                            checkWin(game);
                        }
                    }
                };
            }
            else
            {
                const boardEntity = game.p1.board;
                div.onclick = function()
                {
                    if (boardEntity.ships.length >= SHIPS.length) return;

                    let ship = new _scripts_ship__WEBPACK_IMPORTED_MODULE_2__.Ship(SHIPS[boardEntity.ships.length]);
                    boardEntity.place(ship, [i, j], placingVertical);
                    _scripts_dommanager__WEBPACK_IMPORTED_MODULE_3__.DomManager.renderBoardOnGrid(boardEntity, board, false);

                    const shipCount = SHIPS.length - boardEntity.ships.length;
                    if (shipCount > 0)
                    {
                        _scripts_dommanager__WEBPACK_IMPORTED_MODULE_3__.DomManager.setDivText(headerContainer, `Place your ships (${shipCount} remain)!`);
                    }
                    else
                    {
                        _scripts_dommanager__WEBPACK_IMPORTED_MODULE_3__.DomManager.setDivText(headerContainer, `Attack by pressing an enemy square!`);
                        _scripts_dommanager__WEBPACK_IMPORTED_MODULE_3__.DomManager.hideElement(verticalButton);
                        _scripts_dommanager__WEBPACK_IMPORTED_MODULE_3__.DomManager.hideElement(horizontalButton);
                    }
                };
            }
        }
    }
}

function populateBoard(board)
{
    let placed = 0;
    let boardSize = board.grid.length;
    while (placed < SHIPS.length)
    {
        let ship = new _scripts_ship__WEBPACK_IMPORTED_MODULE_2__.Ship(SHIPS[placed]);
        let x = Math.floor(Math.random() * boardSize);
        let y = Math.floor(Math.random() * boardSize);
        let vert = Math.random() >= 0.5;
        if (board.place(ship, [y, x], vert)) placed++;
    }
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBNEIsMkRBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsK0NBQUk7QUFDdkM7QUFDQSxvQkFBb0IsMkRBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkRBQVUsa0RBQWtELFdBQVc7QUFDL0Y7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJEQUFVO0FBQ2xDLHdCQUF3QiwyREFBVTtBQUNsQyx3QkFBd0IsMkRBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsK0NBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9kb21tYW5hZ2VyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9zaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gICAgLS1jb2xvci1mb3JlZ3JvdW5kLWRhcms6ICMxZDRlZDg7XHJcbiAgICAtLWNvbG9yLWZvcmVncm91bmQ6ICMzYjgyZjY7XHJcbiAgICAtLWNvbG9yLWZvcmVncm91bmQtbGlnaHQ6ICM2MGE1ZmE7XHJcbiAgICAtLWNvbG9yLWJhY2tncm91bmQ6ICMxNzI1NTQ7XHJcbiAgICAtLWNvbG9yLWhpZ2hsaWdodDogIzkzYzVmZDtcclxuICAgIC0tY29sb3ItdGV4dDogI2JmZGJmZTtcclxufVxyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OlxyXG4gICAgc3lzdGVtLXVpLFxyXG4gICAgLWFwcGxlLXN5c3RlbSxcclxuICAgIEJsaW5rTWFjU3lzdGVtRm9udCxcclxuICAgIFwiU2Vnb2UgVUlcIixcclxuICAgIFJvYm90byxcclxuICAgIE94eWdlbixcclxuICAgIFVidW50dSxcclxuICAgIENhbnRhcmVsbCxcclxuICAgIFwiT3BlbiBTYW5zXCIsXHJcbiAgICBcIkhlbHZldGljYSBOZXVlXCIsXHJcbiAgICBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubWFpbi1jb250YWluZXIsIC5ib2R5LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5ib2R5LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNjRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG5cclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mb3JlZ3JvdW5kLWRhcmspO1xyXG59XHJcblxyXG4ubWFpbi1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcclxufVxyXG5cclxuLmNvbnRyb2xzLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTZweDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uY29udHJvbC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDE4NHB4O1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZvcmVncm91bmQtZGFyayk7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcblxyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNHB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDRweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxufVxyXG5cclxuLmNvbnRyb2wtYnV0dG9uOmhvdmVyIHtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4uZ2FtZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4OiAxO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uZ2FtZWJvYXJkLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZ2FtZWJvYXJkLWhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mb3JlZ3JvdW5kLWxpZ2h0KTtcclxuXHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuXHJcbi5nYW1lYm9hcmQge1xyXG4gICAgZmxleDogMTtcclxuXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBnYXA6IDRweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCBhdXRvKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCBhdXRvKTtcclxufVxyXG5cclxuLmdhbWVib2FyZCA+IGRpdiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZTtcclxufVxyXG5cclxuLmdhbWVib2FyZCA+IGRpdi5zaGlwLTUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5nYW1lYm9hcmQgPiBkaXYuc2hpcC00IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNywgMjcsIDI3KTtcclxufVxyXG5cclxuLmdhbWVib2FyZCA+IGRpdi5zaGlwLTMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAzNCwgMzQpO1xyXG59XHJcblxyXG4uZ2FtZWJvYXJkID4gZGl2LnNoaXAtMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTMsIDUzLCA1Myk7XHJcbn1cclxuXHJcbi5nYW1lYm9hcmQgPiBkaXYuaGl0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmdhbWVib2FyZCA+IGRpdi5taXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2OCwgMTMzLCAxMzgpO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDJCQUEyQjtJQUMzQixpQ0FBaUM7SUFDakMsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJOzs7Ozs7Ozs7OztjQVdVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXOztJQUVYLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7O0lBRVoseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7O0lBRVgsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0lBRW5CLGVBQWU7O0lBRWYsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6Qiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTs7SUFFWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTOztJQUVULDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZOztJQUVaLGVBQWU7SUFDZiw4Q0FBOEM7SUFDOUMsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixrQkFBa0I7O0lBRWxCLG9EQUFvRDtJQUNwRCxpREFBaUQ7SUFDakQsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLE9BQU87O0lBRVAsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7O0lBRVYsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7O0lBRVosYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7O0lBRXZCLCtDQUErQzs7SUFFL0MsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLE9BQU87O0lBRVAsYUFBYTs7SUFFYixhQUFhO0lBQ2IsUUFBUTtJQUNSLHVDQUF1QztJQUN2QyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCOztJQUV2QixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1jb2xvci1mb3JlZ3JvdW5kLWRhcms6ICMxZDRlZDg7XFxyXFxuICAgIC0tY29sb3ItZm9yZWdyb3VuZDogIzNiODJmNjtcXHJcXG4gICAgLS1jb2xvci1mb3JlZ3JvdW5kLWxpZ2h0OiAjNjBhNWZhO1xcclxcbiAgICAtLWNvbG9yLWJhY2tncm91bmQ6ICMxNzI1NTQ7XFxyXFxuICAgIC0tY29sb3ItaGlnaGxpZ2h0OiAjOTNjNWZkO1xcclxcbiAgICAtLWNvbG9yLXRleHQ6ICNiZmRiZmU7XFxyXFxufVxcclxcblxcclxcbmh0bWwsIGJvZHkge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OlxcclxcbiAgICBzeXN0ZW0tdWksXFxyXFxuICAgIC1hcHBsZS1zeXN0ZW0sXFxyXFxuICAgIEJsaW5rTWFjU3lzdGVtRm9udCxcXHJcXG4gICAgXFxcIlNlZ29lIFVJXFxcIixcXHJcXG4gICAgUm9ib3RvLFxcclxcbiAgICBPeHlnZW4sXFxyXFxuICAgIFVidW50dSxcXHJcXG4gICAgQ2FudGFyZWxsLFxcclxcbiAgICBcXFwiT3BlbiBTYW5zXFxcIixcXHJcXG4gICAgXFxcIkhlbHZldGljYSBOZXVlXFxcIixcXHJcXG4gICAgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyLCAuYm9keS1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9keS1jb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogNjRweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBmb250LXNpemU6IDQycHg7XFxyXFxuXFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZm9yZWdyb3VuZC1kYXJrKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRyb2xzLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDk2cHg7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udHJvbC1idXR0b24ge1xcclxcbiAgICB3aWR0aDogMTg0cHg7XFxyXFxuICAgIGhlaWdodDogNjRweDtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mb3JlZ3JvdW5kLWRhcmspO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcblxcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xcclxcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCA0cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRyb2wtYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbGV4OiAxO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQtaGVhZGVyIHtcXHJcXG4gICAgaGVpZ2h0OiA2NHB4O1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZm9yZWdyb3VuZC1saWdodCk7XFxyXFxuXFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZCB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdhcDogNHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgYXV0byk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCBhdXRvKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZCA+IGRpdiB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkID4gZGl2LnNoaXAtNSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkID4gZGl2LnNoaXAtNCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNywgMjcsIDI3KTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZCA+IGRpdi5zaGlwLTMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM0LCAzNCk7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQgPiBkaXYuc2hpcC0yIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUzLCA1MywgNTMpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkID4gZGl2LmhpdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZCA+IGRpdi5taXNzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY4LCAxMzMsIDEzOCk7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcclxuXHJcbmNsYXNzIERvbU1hbmFnZXJcclxue1xyXG4gICAgc3RhdGljIGNyZWF0ZUFuZEFkZERpdihwYXJlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobmV3RGl2KTtcclxuICAgICAgICByZXR1cm4gbmV3RGl2O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmaW5kRWxlbWVudEJ5SWQoaWQpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0RGl2VGV4dChkaXYsIHRleHQpXHJcbiAgICB7XHJcbiAgICAgICAgZGl2LmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhpZGVFbGVtZW50KGVsZW1lbnQpXHJcbiAgICB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaG93RWxlbWVudChlbGVtZW50KVxyXG4gICAge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVuZGVyQm9hcmRPbkdyaWQoYm9hcmQsIGdyaWQsIGlzRW5lbXkpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgYm9hcmRHcmlkID0gYm9hcmQuZ3JpZDtcclxuICAgICAgICBjb25zdCBib2FyZFNpemUgPSBib2FyZEdyaWQubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmRTaXplOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkU2l6ZTsgaisrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkSW5kZXggPSBpICogYm9hcmRTaXplICsgajtcclxuICAgICAgICAgICAgICAgIGlmIChib2FyZEdyaWRbaV1bal0gPT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC5jaGlsZHJlbltncmlkSW5kZXhdLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChib2FyZEdyaWRbaV1bal0gaW5zdGFuY2VvZiBTaGlwICYmICFpc0VuZW15KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQuY2hpbGRyZW5bZ3JpZEluZGV4XS5jbGFzc05hbWUgPSBcInNoaXAtXCIgKyBib2FyZEdyaWRbaV1bal0ubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYm9hcmRHcmlkW2ldW2pdID09PSBcIkhcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLmNoaWxkcmVuW2dyaWRJbmRleF0uY2xhc3NOYW1lID0gXCJoaXRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJvYXJkR3JpZFtpXVtqXSA9PT0gXCJYXCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC5jaGlsZHJlbltncmlkSW5kZXhdLmNsYXNzTmFtZSA9IFwibWlzc1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZW1vdmVBbGxDaGlsZHJlbihub2RlKVxyXG4gICAge1xyXG4gICAgICAgIG5vZGUuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtEb21NYW5hZ2VyfTsiLCJpbXBvcnQge1BsYXllcn0gZnJvbSBcIi4vcGxheWVyXCI7XHJcblxyXG5jbGFzcyBHYW1lXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnAxID0gbmV3IFBsYXllcih0cnVlKTtcclxuICAgICAgICB0aGlzLnAyID0gbmV3IFBsYXllcihmYWxzZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7R2FtZX07IiwiaW1wb3J0IHtTaGlwfSBmcm9tIFwiLi9zaGlwXCI7XHJcblxyXG5jbGFzcyBHYW1lYm9hcmRcclxue1xyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IEdSSURfU0laRSA9IDEwO1xyXG5cclxuICAgICAgICB0aGlzLnNoaXBzID0gW107XHJcbiAgICAgICAgdGhpcy5ncmlkID0gdGhpcy5fY3JlYXRlR3JpZChHUklEX1NJWkUpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYWNlKHNoaXAsIGNvb3JkcywgdmVydGljYWwpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgc2hpcCBhbHJlYWR5IG9uIGJvYXJkXHJcbiAgICAgICAgaWYgKHRoaXMuc2hpcHMuaW5jbHVkZXMoc2hpcCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgbGV0IGdyaWRTaXplID0gdGhpcy5ncmlkLmxlbmd0aDtcclxuXHJcbiAgICAgICAgbGV0IHN0YXJ0WCA9IGNvb3Jkc1sxXTtcclxuICAgICAgICBsZXQgc3RhcnRZID0gY29vcmRzWzBdO1xyXG4gICAgICAgIGxldCBlbmRYID0gc3RhcnRYICsgKHNoaXAubGVuZ3RoIC0gMSkgKiAhdmVydGljYWw7XHJcbiAgICAgICAgbGV0IGVuZFkgPSBzdGFydFkgKyAoc2hpcC5sZW5ndGggLSAxKSAqIHZlcnRpY2FsO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBpZiBPT0JcclxuICAgICAgICBpZiAoZW5kWCA+PSBncmlkU2l6ZSB8fCBlbmRZID49IGdyaWRTaXplKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIG92ZXJsYXBzIG90aGVyIHNoaXBzXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHBvc1kgPSBzdGFydFkgKyAoaSAqIHZlcnRpY2FsKTtcclxuICAgICAgICAgICAgbGV0IHBvc1ggPSBzdGFydFggKyAoaSAqICF2ZXJ0aWNhbCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdyaWRbcG9zWV1bcG9zWF0gaW5zdGFuY2VvZiBTaGlwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHBvc1kgPSBzdGFydFkgKyAoaSAqIHZlcnRpY2FsKTtcclxuICAgICAgICAgICAgbGV0IHBvc1ggPSBzdGFydFggKyAoaSAqICF2ZXJ0aWNhbCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZFtwb3NZXVtwb3NYXSA9IHNoaXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZWNlaXZlQXR0YWNrKGNvb3JkcylcclxuICAgIHtcclxuICAgICAgICBsZXQgYXR0YWNrWCA9IGNvb3Jkc1sxXTtcclxuICAgICAgICBsZXQgYXR0YWNrWSA9IGNvb3Jkc1swXTtcclxuXHJcbiAgICAgICAgbGV0IGhpdFNxdWFyZSA9IHRoaXMuZ3JpZFthdHRhY2tZXVthdHRhY2tYXTtcclxuICAgICAgICBpZiAoaGl0U3F1YXJlID09PSBcIkhcIiB8fCBoaXRTcXVhcmUgPT09IFwiWFwiKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGhpdFNxdWFyZSBpbnN0YW5jZW9mIFNoaXApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoaXRTcXVhcmUuaGl0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZFthdHRhY2tZXVthdHRhY2tYXSA9IFwiSFwiXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ncmlkW2F0dGFja1ldW2F0dGFja1hdID0gXCJYXCI7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFsbFNoaXBzU3VuaygpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoaXBzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNoaXBzW2ldLmlzU3VuaygpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBfY3JlYXRlR3JpZChzaXplKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBncmlkID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcm93ID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByb3cucHVzaChudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBncmlkLnB1c2gocm93KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBncmlkO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge0dhbWVib2FyZH07IiwiaW1wb3J0IHtHYW1lYm9hcmR9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG5cclxuY2xhc3MgUGxheWVyXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKGh1bWFuKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaHVtYW4gPSBodW1hbjtcclxuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGFja0FJKGVuZW15Qm9hcmQpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgYm9hcmRTaXplID0gZW5lbXlCb2FyZC5ncmlkLmxlbmd0aDtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICB3aGlsZSAocmVzdWx0ID09PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xyXG4gICAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkU2l6ZSk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayhbeSwgeF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVzdWx0ID09PSB0cnVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2tBSShlbmVteUJvYXJkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7UGxheWVyfTsiLCJjbGFzcyBTaGlwXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKGxlbilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbjtcclxuICAgICAgICB0aGlzLmhpdHMgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGhpdCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5oaXRzKys7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTdW5rKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oaXRzID49IHRoaXMubGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1NoaXB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQge0dhbWV9IGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xyXG5pbXBvcnQge1NoaXB9IGZyb20gXCIuL3NjcmlwdHMvc2hpcFwiO1xyXG5pbXBvcnQgeyBEb21NYW5hZ2VyIH0gZnJvbSBcIi4vc2NyaXB0cy9kb21tYW5hZ2VyXCI7XHJcblxyXG5jb25zdCBib2FyZDEgPSBEb21NYW5hZ2VyLmZpbmRFbGVtZW50QnlJZChcImdhbWVib2FyZC0xXCIpO1xyXG5jb25zdCBib2FyZDIgPSBEb21NYW5hZ2VyLmZpbmRFbGVtZW50QnlJZChcImdhbWVib2FyZC0yXCIpO1xyXG5jb25zdCByZXNldEJ1dHRvbiA9IERvbU1hbmFnZXIuZmluZEVsZW1lbnRCeUlkKFwiYnV0dG9uLXJlc3RhcnRcIik7XHJcbmNvbnN0IHZlcnRpY2FsQnV0dG9uID0gRG9tTWFuYWdlci5maW5kRWxlbWVudEJ5SWQoXCJidXR0b24tdmVydGljYWxcIik7XHJcbmNvbnN0IGhvcml6b250YWxCdXR0b24gPSBEb21NYW5hZ2VyLmZpbmRFbGVtZW50QnlJZChcImJ1dHRvbi1ob3Jpem9udGFsXCIpO1xyXG5jb25zdCBoZWFkZXJDb250YWluZXIgPSBEb21NYW5hZ2VyLmZpbmRFbGVtZW50QnlJZChcImhlYWRlci1jb250YWluZXJcIik7XHJcblxyXG5sZXQgcGxhY2luZ1ZlcnRpY2FsID0gdHJ1ZTtcclxubGV0IGdhbWVPdmVyID0gZmFsc2U7XHJcblxyXG5jb25zdCBTSElQUyA9IFs1LCA0LCAzLCAzLCAyXTtcclxuXHJcbigoKSA9PiB7XHJcbiAgICByZXNldEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKXtyZXNldEdhbWUoKX07XHJcbiAgICB2ZXJ0aWNhbEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIERvbU1hbmFnZXIuaGlkZUVsZW1lbnQodmVydGljYWxCdXR0b24pO1xyXG4gICAgICAgIERvbU1hbmFnZXIuc2hvd0VsZW1lbnQoaG9yaXpvbnRhbEJ1dHRvbik7XHJcbiAgICAgICAgcGxhY2luZ1ZlcnRpY2FsID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBob3Jpem9udGFsQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgRG9tTWFuYWdlci5zaG93RWxlbWVudCh2ZXJ0aWNhbEJ1dHRvbik7XHJcbiAgICAgICAgRG9tTWFuYWdlci5oaWRlRWxlbWVudChob3Jpem9udGFsQnV0dG9uKTtcclxuICAgICAgICBwbGFjaW5nVmVydGljYWwgPSBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2FtZSA9IGJlZ2luR2FtZSgpO1xyXG4gICAgc2V0VXBET00oZ2FtZSk7XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBiZWdpbkdhbWUoKVxyXG57XHJcbiAgICBjb25zdCBzaGlwQ291bnQgPSBTSElQUy5sZW5ndGg7XHJcbiAgICBEb21NYW5hZ2VyLnNldERpdlRleHQoaGVhZGVyQ29udGFpbmVyLCBgUGxhY2UgeW91ciBzaGlwcyAoJHtzaGlwQ291bnR9IHJlbWFpbikhYCk7XHJcbiAgICBnYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XHJcbiAgICByZXR1cm4gZ2FtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRHYW1lKClcclxue1xyXG4gICAgY29uc3QgZ2FtZSA9IGJlZ2luR2FtZSgpO1xyXG4gICAgcmVzZXRET00oKTtcclxuICAgIHNldFVwRE9NKGdhbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRVcERPTShnYW1lKVxyXG57XHJcbiAgICBwb3B1bGF0ZURPTUJvYXJkKGJvYXJkMSwgZ2FtZSwgZmFsc2UpO1xyXG4gICAgcG9wdWxhdGVET01Cb2FyZChib2FyZDIsIGdhbWUsIHRydWUpO1xyXG5cclxuICAgIHBvcHVsYXRlQm9hcmQoZ2FtZS5wMi5ib2FyZCk7XHJcblxyXG4gICAgRG9tTWFuYWdlci5yZW5kZXJCb2FyZE9uR3JpZChnYW1lLnAxLmJvYXJkLCBib2FyZDEpO1xyXG4gICAgRG9tTWFuYWdlci5yZW5kZXJCb2FyZE9uR3JpZChnYW1lLnAyLmJvYXJkLCBib2FyZDIsIHRydWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldERPTSgpXHJcbntcclxuICAgIERvbU1hbmFnZXIucmVtb3ZlQWxsQ2hpbGRyZW4oYm9hcmQxKTtcclxuICAgIERvbU1hbmFnZXIucmVtb3ZlQWxsQ2hpbGRyZW4oYm9hcmQyKTtcclxuICAgIERvbU1hbmFnZXIuaGlkZUVsZW1lbnQodmVydGljYWxCdXR0b24pO1xyXG4gICAgRG9tTWFuYWdlci5zaG93RWxlbWVudChob3Jpem9udGFsQnV0dG9uKTtcclxuICAgIHBsYWNpbmdWZXJ0aWNhbCA9IHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrV2luKGdhbWUpXHJcbntcclxuICAgIGlmIChnYW1lLnAxLmJvYXJkLmFsbFNoaXBzU3VuaygpKVxyXG4gICAge1xyXG4gICAgICAgIGdhbWVFbmQoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZ2FtZS5wMi5ib2FyZC5hbGxTaGlwc1N1bmsoKSlcclxuICAgIHtcclxuICAgICAgICBnYW1lRW5kKHRydWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnYW1lRW5kKHdpbilcclxue1xyXG4gICAgZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgaWYgKHdpbilcclxuICAgICAgICBEb21NYW5hZ2VyLnNldERpdlRleHQoaGVhZGVyQ29udGFpbmVyLCBgWW91IHdpbiFgKTtcclxuICAgIGVsc2VcclxuICAgICAgICBEb21NYW5hZ2VyLnNldERpdlRleHQoaGVhZGVyQ29udGFpbmVyLCBgWW91IGxvc2UhYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlRE9NQm9hcmQoYm9hcmQsIGdhbWUsIGlzRW5lbXkpXHJcbntcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKylcclxuICAgIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZGl2ID0gRG9tTWFuYWdlci5jcmVhdGVBbmRBZGREaXYoYm9hcmQpO1xyXG4gICAgICAgICAgICBpZiAoaXNFbmVteSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYm9hcmRFbnRpdHkgPSBnYW1lLnAyLmJvYXJkO1xyXG4gICAgICAgICAgICAgICAgZGl2Lm9uY2xpY2sgPSBmdW5jdGlvbigpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWUucDEuYm9hcmQuc2hpcHMubGVuZ3RoIDwgU0hJUFMubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVPdmVyKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGF0dGFja1Jlc3VsdCA9IGJvYXJkRW50aXR5LnJlY2VpdmVBdHRhY2soW2ksIGpdKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0YWNrUmVzdWx0ICE9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRG9tTWFuYWdlci5yZW5kZXJCb2FyZE9uR3JpZChib2FyZEVudGl0eSwgYm9hcmQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0YWNrUmVzdWx0ID09PSBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5wMi5hdHRhY2tBSShnYW1lLnAxLmJvYXJkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvbU1hbmFnZXIucmVuZGVyQm9hcmRPbkdyaWQoZ2FtZS5wMS5ib2FyZCwgYm9hcmQxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrV2luKGdhbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tXaW4oZ2FtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYm9hcmRFbnRpdHkgPSBnYW1lLnAxLmJvYXJkO1xyXG4gICAgICAgICAgICAgICAgZGl2Lm9uY2xpY2sgPSBmdW5jdGlvbigpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkRW50aXR5LnNoaXBzLmxlbmd0aCA+PSBTSElQUy5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNoaXAgPSBuZXcgU2hpcChTSElQU1tib2FyZEVudGl0eS5zaGlwcy5sZW5ndGhdKTtcclxuICAgICAgICAgICAgICAgICAgICBib2FyZEVudGl0eS5wbGFjZShzaGlwLCBbaSwgal0sIHBsYWNpbmdWZXJ0aWNhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgRG9tTWFuYWdlci5yZW5kZXJCb2FyZE9uR3JpZChib2FyZEVudGl0eSwgYm9hcmQsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcENvdW50ID0gU0hJUFMubGVuZ3RoIC0gYm9hcmRFbnRpdHkuc2hpcHMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGlwQ291bnQgPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRG9tTWFuYWdlci5zZXREaXZUZXh0KGhlYWRlckNvbnRhaW5lciwgYFBsYWNlIHlvdXIgc2hpcHMgKCR7c2hpcENvdW50fSByZW1haW4pIWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBEb21NYW5hZ2VyLnNldERpdlRleHQoaGVhZGVyQ29udGFpbmVyLCBgQXR0YWNrIGJ5IHByZXNzaW5nIGFuIGVuZW15IHNxdWFyZSFgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRG9tTWFuYWdlci5oaWRlRWxlbWVudCh2ZXJ0aWNhbEJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERvbU1hbmFnZXIuaGlkZUVsZW1lbnQoaG9yaXpvbnRhbEJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVCb2FyZChib2FyZClcclxue1xyXG4gICAgbGV0IHBsYWNlZCA9IDA7XHJcbiAgICBsZXQgYm9hcmRTaXplID0gYm9hcmQuZ3JpZC5sZW5ndGg7XHJcbiAgICB3aGlsZSAocGxhY2VkIDwgU0hJUFMubGVuZ3RoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBzaGlwID0gbmV3IFNoaXAoU0hJUFNbcGxhY2VkXSk7XHJcbiAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xyXG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRTaXplKTtcclxuICAgICAgICBsZXQgdmVydCA9IE1hdGgucmFuZG9tKCkgPj0gMC41O1xyXG4gICAgICAgIGlmIChib2FyZC5wbGFjZShzaGlwLCBbeSwgeF0sIHZlcnQpKSBwbGFjZWQrKztcclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==