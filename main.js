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
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  height: 100%;\n  margin: 0;\n}\n\nheader {\n  font-size: 100px;\n  padding: 50px;\n  text-align: center;\n  padding-bottom: 0px;\n}\n\n#grids {\n  height: calc(100% - 220px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5rem;\n}\n\n#placement-popup {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: red;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 30px;\n    font-size: 30px;\n  }\n\n\n.cell {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  width: 30px;\n  height: 30px;\n}\n\n#user-grid,\n#computer-grid,\n#placement-grid {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border: 1px solid black;\n  background-color: white;\n}\n\n.ship {\n  background-color: black;\n  border-color: white;\n}\n\n.hit {\n  background-color: red;\n}\n\n.miss {\n  background-color: green;\n}\n\n.sunk {\n  background-color: gray;\n}\n\n#overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 2;\n}\n\n#gameend-popup {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  padding: 30px;\n  gap: 15px;\n  border: 3px solid black;\n  border-radius: 20px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  flex-direction: column;\n  background-color: blue;\n}\n\nbutton {\n  font-size: 30px;\n  font-family: inherit;\n  padding: 20px 40px;\n  margin: 30px;\n  color: white;\n  border: none;\n  background-color: midnightblue;\n  border-radius: 30px;\n  cursor: pointer;\n}\n\n#message {\n  font-size: 3rem;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;EAEE,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,0BAA0B;EAC1B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,qBAAqB;IACrB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,aAAa;IACb,eAAe;EACjB;;;AAGF;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,uBAAuB;EACvB,WAAW;EACX,YAAY;AACd;;AAEA;;;EAGE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,oCAAoC;EACpC,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,SAAS;EACT,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,oCAAoC;EACpC,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB","sourcesContent":["html,\nbody {\n  height: 100%;\n  margin: 0;\n}\n\nheader {\n  font-size: 100px;\n  padding: 50px;\n  text-align: center;\n  padding-bottom: 0px;\n}\n\n#grids {\n  height: calc(100% - 220px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5rem;\n}\n\n#placement-popup {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: red;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 30px;\n    font-size: 30px;\n  }\n\n\n.cell {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  width: 30px;\n  height: 30px;\n}\n\n#user-grid,\n#computer-grid,\n#placement-grid {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border: 1px solid black;\n  background-color: white;\n}\n\n.ship {\n  background-color: black;\n  border-color: white;\n}\n\n.hit {\n  background-color: red;\n}\n\n.miss {\n  background-color: green;\n}\n\n.sunk {\n  background-color: gray;\n}\n\n#overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 2;\n}\n\n#gameend-popup {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  padding: 30px;\n  gap: 15px;\n  border: 3px solid black;\n  border-radius: 20px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  flex-direction: column;\n  background-color: blue;\n}\n\nbutton {\n  font-size: 30px;\n  font-family: inherit;\n  padding: 20px 40px;\n  margin: 30px;\n  color: white;\n  border: none;\n  background-color: midnightblue;\n  border-radius: 30px;\n  cursor: pointer;\n}\n\n#message {\n  font-size: 3rem;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
  } // For old IE

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

/***/ "./src/dom-stuff.js":
/*!**************************!*\
  !*** ./src/dom-stuff.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayGameEndPopup": () => (/* binding */ displayGameEndPopup),
/* harmony export */   "displayPlacementScreen": () => (/* binding */ displayPlacementScreen),
/* harmony export */   "displayUserShips": () => (/* binding */ displayUserShips),
/* harmony export */   "hideGameEndScreen": () => (/* binding */ hideGameEndScreen),
/* harmony export */   "hidePlacementScreen": () => (/* binding */ hidePlacementScreen),
/* harmony export */   "removeAllChildNodes": () => (/* binding */ removeAllChildNodes)
/* harmony export */ });
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const updateMessage = (winner) => {
  const message = document.querySelector("#message");
  if (winner === "human") {
    message.textContent = "You win!";
  } else message.textContent = "The computer wins!";
};

const displayGameEndPopup = (winner) => {
  updateMessage(winner);
  const overlay = document.querySelector("#overlay");
  const gameEndPopup = document.querySelector("#gameend-popup");
  overlay.style.display = "block";
  gameEndPopup.style.display = "flex";
};

const displayPlacementScreen = () => {
  const placementScreen = document.querySelector("#placement-popup");
  const placementMessage = document.querySelector("#placement-message");
  placementMessage.textContent = "Place your Carrier";
  const overlay = document.querySelector("#overlay");
  overlay.style.display = "block";
  placementScreen.style.display = "flex";
};

const hidePlacementScreen = () => {
  const placementScreen = document.querySelector("#placement-popup");
  const overlay = document.querySelector("#overlay");
  overlay.style.display = "none";
  placementScreen.style.display = "none";
};

const hideGameEndScreen = () => {
  const gameEndPopup = document.querySelector("#gameend-popup");
  const overlay = document.querySelector("#overlay");
  overlay.style.display = "none";
  gameEndPopup.style.display = "none";
};

const displayUserShips = (board) => {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (typeof board[i][j] === "object") {
        document
          .querySelector(
            `#placement-grid div[data-row='${i}'][data-col='${j}']`
          )
          .classList.add("ship");
        document
          .querySelector(`#user-grid div[data-row='${i}'][data-col='${j}']`)
          .classList.add("ship");
      }
    }
  }
};




/***/ }),

/***/ "./src/factories.js":
/*!**************************!*\
  !*** ./src/factories.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameboardFactory": () => (/* binding */ gameboardFactory),
/* harmony export */   "playerFactory": () => (/* binding */ playerFactory),
/* harmony export */   "shipFactory": () => (/* binding */ shipFactory)
/* harmony export */ });
const shipFactory = (length) => {
  const getLength = () => length;

  let hp = length;
  const getHP = () => hp;

  const isSunk = () => hp === 0;

  const hit = () => {
    hp -= 1;
  };

  return { getLength, getHP, isSunk, hit };
};

const gameboardFactory = () => {
  const board = new Array(10);
  for (let i = 0; i < board.length; i += 1)
    board[i] = ["", "", "", "", "", "", "", "", "", ""];
  const getBoard = () => board;

  const verticalOverlap = (length, coordinates) => {
    for (let i = coordinates[0]; i < coordinates[0] + length; i += 1) {
      if (typeof board[i][coordinates[1]] === "object") return true;
    }
    return false;
  };

  const horizontalOverlap = (length, coordinates) => {
    for (let i = coordinates[1]; i < coordinates[1] + length; i += 1) {
      if (typeof board[coordinates[0]][i] === "object") return true;
    }
    return false;
  };

  const isEnoughRoom = (length, coordinates, direction) => {
    const row = coordinates[0];
    const col = coordinates[1];
    if (direction === "x") {
      return length <= 9 - col + 1 && !horizontalOverlap(length, coordinates);
    }
    return length <= 9 - row + 1 && !verticalOverlap(length, coordinates);
  };

  const validCoordinates = (coordinates) => {
    const row = coordinates[0];
    const col = coordinates[1];
    return row >= 0 && row <= 9 && col >= 0 && col <= 9;
  };

  const placeShip = (ship, coordinates, direction) => {
    const shipLength = ship.getLength();
    const row = coordinates[0];
    const col = coordinates[1];
    if (shipLength < 1) return "fail";
    if (shipLength === 1) {
      board[row][col] = ship;
      return "success";
    }
    if (!validCoordinates(coordinates)) return "fail";

    const thereIsEnoughRoom = isEnoughRoom(shipLength, coordinates, direction);
    if (!thereIsEnoughRoom) return "fail";

    switch (direction) {
      case "x":
        {
          for (let i = col; i < col + ship.getLength(); i += 1) {
            board[row][i] = ship;
          }
          return "success";
        }
        break;
      case "y": {
        for (let i = row; i < row + ship.getLength(); i += 1) {
          board[i][col] = ship;
        }
        return "success";
      }
    }
  };

  const receiveAttack = (coordinates) => {
    const row = coordinates[0];
    const col = coordinates[1];
    if (validCoordinates(coordinates) && typeof board[row][col] === "object") {
      board[row][col].hit();
      return "hit";
    }
    return "miss";
  };

  const allSunk = () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (typeof board[i][j] === "object" && board[i][j].isSunk() === false)
          return false;
      }
    }
    return true;
  };

  return { getBoard, placeShip, receiveAttack, allSunk };
};

const playerFactory = (type, name) => {
  const gameBoard = gameboardFactory();
  if (type === "computer") {
    const unattackedCoordinates = [];
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        unattackedCoordinates.push([i, j]);
      }
    }

    const getRandomCoordinates = () =>
      unattackedCoordinates[
        Math.floor(Math.random() * unattackedCoordinates.length)
      ];

    const updateUnattackedCoordinates = (coordinates) => {
      const index = unattackedCoordinates.indexOf(coordinates);
      unattackedCoordinates.splice(index, 1);
    };

    const makeRandomPlay = (enemyBoard) => {
      const coordinates = getRandomCoordinates();
      updateUnattackedCoordinates(coordinates);
      return [enemyBoard.receiveAttack(coordinates), coordinates];
    };
    return { gameBoard, makeRandomPlay };
  }
  return {
    name,
    gameBoard,
    makePlay(enemyBoard, coordinates) {
      return enemyBoard.receiveAttack(coordinates);
    },
  };
};




/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameIsOver": () => (/* binding */ gameIsOver),
/* harmony export */   "placeShipsRandomly": () => (/* binding */ placeShipsRandomly)
/* harmony export */ });
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ "./src/factories.js");

const gameIsOver = (board1, board2) => board1.allSunk() || board2.allSunk();

const placeShipsRandomly = (board) => {
  const possibleSpots = [];
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      possibleSpots.push([i, j]);
    }
  }

  const getRandomCoordinates = () =>
    possibleSpots[Math.floor(Math.random() * possibleSpots.length)];

  const updateUnattackedCoordinates = (coordinates) => {
    const index = possibleSpots.indexOf(coordinates);
    possibleSpots.splice(index, 1);
  };

  const carrier = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(5);
  const battleship = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(4);
  const destroyer = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(3);
  const submarine = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(3);
  const patrolBoat = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(2);

  const place = (ship) => {
    let randomDirection;
    const randomCoordinates = getRandomCoordinates();
    updateUnattackedCoordinates(randomCoordinates);
    if (Math.floor(Math.random() * 2) === 0) randomDirection = "x";
    else randomDirection = "y";
    if (board.placeShip(ship, randomCoordinates, randomDirection) === "fail")
      place(ship);
    else console.log(`[${randomCoordinates}] ${randomDirection}`);
  };

  place(carrier);
  place(battleship);
  place(destroyer);
  place(submarine);
  place(patrolBoat);
};




/***/ }),

/***/ "./src/initial-load.js":
/*!*****************************!*\
  !*** ./src/initial-load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const initialLoad = () => {
  const userGrid = document.querySelector("#user-grid");
  const computerGrid = document.querySelector("#computer-grid");
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const cell = document.createElement("div");
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.classList.add("cell");
      userGrid.appendChild(cell);
    }
  }
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const cell = document.createElement("div");
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.classList.add("cell");
      computerGrid.appendChild(cell);
    }
  }
  const placementGrid = document.querySelector("#placement-grid");
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const cell = document.createElement("div");
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.classList.add("cell");
      placementGrid.appendChild(cell);
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_stuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-stuff */ "./src/dom-stuff.js");
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories */ "./src/factories.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _initial_load__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initial-load */ "./src/initial-load.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");






(0,_initial_load__WEBPACK_IMPORTED_MODULE_3__["default"])();
(() => {
  let human = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.playerFactory)("human");
  (0,_dom_stuff__WEBPACK_IMPORTED_MODULE_0__.displayUserShips)(human.gameBoard.getBoard());

  let computer = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.playerFactory)("computer");
  (0,_game__WEBPACK_IMPORTED_MODULE_2__.placeShipsRandomly)(computer.gameBoard);

  let orientation = "x";
  let currentWidth;
  let currentCallback;
  let currentNext;

  const rotate = document.querySelector("#rotate");
  rotate.addEventListener("click", () => {
    if (orientation === "x") {
      orientation = "y";
    } else {
      orientation = "x";
    }
    addPlacementGridEventListeners(currentWidth, currentCallback, currentNext);
  });

  const addPlacementGridEventListeners = (width, callback, next) => {
    currentWidth = width;
    currentCallback = callback;
    currentNext = next;
    const placementMessage = document.querySelector("#placement-message");
    let cells = document.querySelectorAll("#placement-grid div");
    if (orientation === "x") {
      cells.forEach((cell) => {
        cell.replaceWith(cell.cloneNode(true));
      });
      cells = document.querySelectorAll("#placement-grid div");
      cells.forEach((cell) => {
        cell.addEventListener("click", () => {
          if (
            human.gameBoard.placeShip(
              (0,_factories__WEBPACK_IMPORTED_MODULE_1__.shipFactory)(width),
              [parseInt(cell.dataset.row, 10), parseInt(cell.dataset.col, 10)],
              "x"
            ) === "success"
          ) {
            (0,_dom_stuff__WEBPACK_IMPORTED_MODULE_0__.displayUserShips)(human.gameBoard.getBoard());
            placementMessage.textContent = `Place your ${next}`;
            orientation = "x";
            callback();
          }
        });
        cell.addEventListener("mouseenter", () => {
          cell.style.backgroundColor = "black";
          for (
            let i = parseInt(cell.dataset.col);
            i < parseInt(cell.dataset.col) + width;
            i += 1
          ) {
            if (
              document.querySelector(
                `#placement-grid div[data-row='${cell.dataset.row}'][data-col='${i}'`
              )
            )
              document.querySelector(
                `#placement-grid div[data-row='${cell.dataset.row}'][data-col='${i}'`
              ).style.backgroundColor = "black";
          }
        });
        cell.addEventListener("mouseleave", () => {
          cell.style.backgroundColor = "";
          for (
            let i = parseInt(cell.dataset.col);
            i < parseInt(cell.dataset.col) + width;
            i += 1
          ) {
            if (
              document.querySelector(
                `#placement-grid div[data-row='${cell.dataset.row}'][data-col='${i}'`
              )
            )
              document.querySelector(
                `#placement-grid div[data-row='${cell.dataset.row}'][data-col='${i}'`
              ).style.backgroundColor = "";
          }
        });
      });
    } else {
      cells.forEach((cell) => {
        cell.replaceWith(cell.cloneNode(true));
      });
      cells = document.querySelectorAll("#placement-grid div");
      cells.forEach((cell) => {
        cell.addEventListener("click", () => {
          if (
            human.gameBoard.placeShip(
              (0,_factories__WEBPACK_IMPORTED_MODULE_1__.shipFactory)(width),
              [parseInt(cell.dataset.row, 10), parseInt(cell.dataset.col, 10)],
              "y"
            ) === "success"
          ) {
            (0,_dom_stuff__WEBPACK_IMPORTED_MODULE_0__.displayUserShips)(human.gameBoard.getBoard());
            placementMessage.textContent = `Place your ${next}`;
            orientation = "x";
            callback();
          }
        });
        cell.addEventListener("mouseenter", () => {
          cell.style.backgroundColor = "black";
          for (
            let i = parseInt(cell.dataset.row);
            i < parseInt(cell.dataset.row) + width;
            i += 1
          ) {
            if (
              document.querySelector(
                `#placement-grid div[data-row='${i}'][data-col='${cell.dataset.col}'`
              )
            )
              document.querySelector(
                `#placement-grid div[data-row='${i}'][data-col='${cell.dataset.col}'`
              ).style.backgroundColor = "black";
          }
        });
        cell.addEventListener("mouseleave", () => {
          cell.style.backgroundColor = "";
          for (
            let i = parseInt(cell.dataset.row);
            i < parseInt(cell.dataset.row) + width;
            i += 1
          ) {
            if (
              document.querySelector(
                `#placement-grid div[data-row='${i}'][data-col='${cell.dataset.col}'`
              )
            )
              document.querySelector(
                `#placement-grid div[data-row='${i}'][data-col='${cell.dataset.col}'`
              ).style.backgroundColor = "";
          }
        });
      });
    }
  };

  const placePatrolBoat = () => {
    addPlacementGridEventListeners(2, _dom_stuff__WEBPACK_IMPORTED_MODULE_0__.hidePlacementScreen);
  };
  const placeSubmarine = () => {
    addPlacementGridEventListeners(3, placePatrolBoat, "Patrol Boat");
  };

  const placeDestroyer = () => {
    addPlacementGridEventListeners(3, placeSubmarine, "Submarine");
  };
  const placeBattleship = () => {
    addPlacementGridEventListeners(4, placeDestroyer, "Destroyer");
  };
  const placeCarrier = () => {
    addPlacementGridEventListeners(5, placeBattleship, "Battleship");
  };

  const addComputerBoardCellsEventListeners = () => {
    const computerBoardCells = document.querySelectorAll("#computer-grid div");
    computerBoardCells.forEach((computerBoardCell) => {
      computerBoardCell.addEventListener(
        "click",
        () => {
          const userPlayResult = human.makePlay(computer.gameBoard, [
            parseInt(computerBoardCell.dataset.row, 10),
            parseInt(computerBoardCell.dataset.col, 10),
          ]);
          if (userPlayResult === "hit") {
            if (
              computer.gameBoard
                .getBoard()
                [parseInt(computerBoardCell.dataset.row, 10)][
                  parseInt(computerBoardCell.dataset.col, 10)
                ].isSunk()
            ) {
              computerBoardCell.classList.add("sunk");
              for (let j = 0; j < 10; j += 1) {
                if (
                  computer.gameBoard.getBoard()[
                    parseInt(computerBoardCell.dataset.row, 10)
                  ][j] ===
                    computer.gameBoard.getBoard()[
                      parseInt(computerBoardCell.dataset.row, 10)
                    ][parseInt(computerBoardCell.dataset.col, 10)] &&
                  j !== parseInt(computerBoardCell.dataset.col, 10)
                ) {
                  document
                    .querySelector(
                      `#computer-grid div[data-row='${parseInt(
                        computerBoardCell.dataset.row,
                        10
                      )}'][data-col='${j}']`
                    )
                    .classList.replace("hit", "sunk");
                }
              }

              for (let i = 0; i < 10; i += 1) {
                if (
                  computer.gameBoard.getBoard()[i][
                    parseInt(computerBoardCell.dataset.col, 10)
                  ] ===
                    computer.gameBoard.getBoard()[
                      parseInt(computerBoardCell.dataset.row, 10)
                    ][parseInt(computerBoardCell.dataset.col, 10)] &&
                  i !== parseInt(computerBoardCell.dataset.row, 10)
                ) {
                  document
                    .querySelector(
                      `#computer-grid div[data-row='${i}'][data-col='${parseInt(
                        computerBoardCell.dataset.col,
                        10
                      )}']`
                    )
                    .classList.replace("hit", "sunk");
                }
              }
            } else {
              computerBoardCell.classList.add("hit");
            }
            if ((0,_game__WEBPACK_IMPORTED_MODULE_2__.gameIsOver)(human.gameBoard, computer.gameBoard)) {
              if (human.gameBoard.allSunk()) (0,_dom_stuff__WEBPACK_IMPORTED_MODULE_0__.displayGameEndPopup)("computer");
              else (0,_dom_stuff__WEBPACK_IMPORTED_MODULE_0__.displayGameEndPopup)("human");
              // display gameEndPopup with winner info
              return;
            }
          } else computerBoardCell.classList.add("miss");

          const array = computer.makeRandomPlay(human.gameBoard);
          const compPlayResult = array[0];
          const cellAttacked = array[1];
          if (compPlayResult === "hit") {
            if (
              human.gameBoard
                .getBoard()
                [cellAttacked[0]][cellAttacked[1]].isSunk()
            ) {
              document
                .querySelector(
                  `#user-grid div[data-row='${cellAttacked[0]}'][data-col='${cellAttacked[1]}']`
                )
                .classList.add("sunk");
              // find all the cells that contain the same boat
              for (let j = 0; j < 10; j += 1) {
                if (
                  human.gameBoard.getBoard()[cellAttacked[0]][j] ===
                    human.gameBoard.getBoard()[cellAttacked[0]][
                      cellAttacked[1]
                    ] &&
                  j !== cellAttacked[1]
                ) {
                  document
                    .querySelector(
                      `#user-grid div[data-row='${cellAttacked[0]}'][data-col='${j}']`
                    )
                    .classList.replace("hit", "sunk");
                }
              }

              for (let i = 0; i < 10; i += 1) {
                if (
                  human.gameBoard.getBoard()[i][cellAttacked[1]] ===
                    human.gameBoard.getBoard()[cellAttacked[0]][
                      cellAttacked[1]
                    ] &&
                  i !== cellAttacked[0]
                ) {
                  document
                    .querySelector(
                      `#user-grid div[data-row='${i}'][data-col='${cellAttacked[1]}']`
                    )
                    .classList.replace("hit", "sunk");
                }
              }
            } else
              document
                .querySelector(
                  `#user-grid div[data-row='${cellAttacked[0]}'][data-col='${cellAttacked[1]}']`
                )
                .classList.add("hit");
            if ((0,_game__WEBPACK_IMPORTED_MODULE_2__.gameIsOver)(human.gameBoard, computer.gameBoard)) {
              if (human.gameBoard.allSunk()) (0,_dom_stuff__WEBPACK_IMPORTED_MODULE_0__.displayGameEndPopup)("computer");
              else (0,_dom_stuff__WEBPACK_IMPORTED_MODULE_0__.displayGameEndPopup)("human");
              // display gameEndPopup with winner info
            }
          } else
            document
              .querySelector(
                `#user-grid div[data-row='${cellAttacked[0]}'][data-col='${cellAttacked[1]}']`
              )
              .classList.add("miss");
        },
        { once: true }
      );
    });
  };

  const restart = document.querySelector("#restart");
  restart.addEventListener("click", () => {
    (0,_dom_stuff__WEBPACK_IMPORTED_MODULE_0__.hideGameEndScreen)();
    const userGrid = document.querySelector("#user-grid");
    const computerGrid = document.querySelector("#computer-grid");
    const placementGrid = document.querySelector("#placement-grid");
    (0,_dom_stuff__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(userGrid);
    (0,_dom_stuff__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(computerGrid);
    (0,_dom_stuff__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(placementGrid);
    (0,_initial_load__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_dom_stuff__WEBPACK_IMPORTED_MODULE_0__.displayPlacementScreen)();

    human = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.playerFactory)("human");
    (0,_dom_stuff__WEBPACK_IMPORTED_MODULE_0__.displayUserShips)(human.gameBoard.getBoard());

    computer = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.playerFactory)("computer");
    (0,_game__WEBPACK_IMPORTED_MODULE_2__.placeShipsRandomly)(computer.gameBoard);

    placeCarrier();
    addComputerBoardCellsEventListeners();
  });
  placeCarrier();
  addComputerBoardCellsEventListeners();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZ0JBQWdCLGVBQWUsRUFBRTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsUUFBUTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsRUFBRSxlQUFlLGdCQUFnQjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsOENBQThDLGdCQUFnQixlQUFlLGdCQUFnQjtBQUM3RjtBQUNBO0FBQ0EsZ0JBQWdCLGlEQUFVO0FBQzFCLDZDQUE2QywrREFBbUI7QUFDaEUsbUJBQW1CLCtEQUFtQjtBQUN0QztBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSw0Q0FBNEMsZ0JBQWdCLGVBQWUsZ0JBQWdCO0FBQzNGO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsVUFBVTtBQUNWO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDZEQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtEQUFtQjtBQUN2QixJQUFJLCtEQUFtQjtBQUN2QixJQUFJLCtEQUFtQjtBQUN2QixJQUFJLHlEQUFXO0FBQ2YsSUFBSSxrRUFBc0I7O0FBRTFCLFlBQVkseURBQWE7QUFDekIsSUFBSSw0REFBZ0I7O0FBRXBCLGVBQWUseURBQWE7QUFDNUIsSUFBSSx5REFBa0I7O0FBRXRCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20tc3R1ZmYuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5pdGlhbC1sb2FkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxMDBweDtcXG4gIHBhZGRpbmc6IDUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcbn1cXG5cXG4jZ3JpZHMge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMjBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cmVtO1xcbn1cXG5cXG4jcGxhY2VtZW50LXBvcHVwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgfVxcblxcblxcbi5jZWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4jdXNlci1ncmlkLFxcbiNjb21wdXRlci1ncmlkLFxcbiNwbGFjZW1lbnQtZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4jb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbiNnYW1lZW5kLXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZ2FwOiAxNXB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxuICBtYXJnaW46IDMwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBtaWRuaWdodGJsdWU7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbWVzc2FnZSB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLFlBQVk7RUFDWixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLGVBQWU7RUFDakI7OztBQUdGO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULG9DQUFvQztFQUNwQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLG9DQUFvQztFQUNwQyxzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxMDBweDtcXG4gIHBhZGRpbmc6IDUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcbn1cXG5cXG4jZ3JpZHMge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMjBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cmVtO1xcbn1cXG5cXG4jcGxhY2VtZW50LXBvcHVwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgfVxcblxcblxcbi5jZWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4jdXNlci1ncmlkLFxcbiNjb21wdXRlci1ncmlkLFxcbiNwbGFjZW1lbnQtZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4jb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbiNnYW1lZW5kLXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZ2FwOiAxNXB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxuICBtYXJnaW46IDMwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBtaWRuaWdodGJsdWU7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbWVzc2FnZSB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmNvbnN0IHVwZGF0ZU1lc3NhZ2UgPSAod2lubmVyKSA9PiB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lc3NhZ2VcIik7XG4gIGlmICh3aW5uZXIgPT09IFwiaHVtYW5cIikge1xuICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIllvdSB3aW4hXCI7XG4gIH0gZWxzZSBtZXNzYWdlLnRleHRDb250ZW50ID0gXCJUaGUgY29tcHV0ZXIgd2lucyFcIjtcbn07XG5cbmNvbnN0IGRpc3BsYXlHYW1lRW5kUG9wdXAgPSAod2lubmVyKSA9PiB7XG4gIHVwZGF0ZU1lc3NhZ2Uod2lubmVyKTtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmxheVwiKTtcbiAgY29uc3QgZ2FtZUVuZFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1lZW5kLXBvcHVwXCIpO1xuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGdhbWVFbmRQb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG59O1xuXG5jb25zdCBkaXNwbGF5UGxhY2VtZW50U2NyZWVuID0gKCkgPT4ge1xuICBjb25zdCBwbGFjZW1lbnRTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYWNlbWVudC1wb3B1cFwiKTtcbiAgY29uc3QgcGxhY2VtZW50TWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxhY2VtZW50LW1lc3NhZ2VcIik7XG4gIHBsYWNlbWVudE1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlBsYWNlIHlvdXIgQ2FycmllclwiO1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVybGF5XCIpO1xuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIHBsYWNlbWVudFNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG59O1xuXG5jb25zdCBoaWRlUGxhY2VtZW50U2NyZWVuID0gKCkgPT4ge1xuICBjb25zdCBwbGFjZW1lbnRTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYWNlbWVudC1wb3B1cFwiKTtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmxheVwiKTtcbiAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIHBsYWNlbWVudFNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59O1xuXG5jb25zdCBoaWRlR2FtZUVuZFNjcmVlbiA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZUVuZFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1lZW5kLXBvcHVwXCIpO1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVybGF5XCIpO1xuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgZ2FtZUVuZFBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn07XG5cbmNvbnN0IGRpc3BsYXlVc2VyU2hpcHMgPSAoYm9hcmQpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBpZiAodHlwZW9mIGJvYXJkW2ldW2pdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgI3BsYWNlbWVudC1ncmlkIGRpdltkYXRhLXJvdz0nJHtpfSddW2RhdGEtY29sPScke2p9J11gXG4gICAgICAgICAgKVxuICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihgI3VzZXItZ3JpZCBkaXZbZGF0YS1yb3c9JyR7aX0nXVtkYXRhLWNvbD0nJHtqfSddYClcbiAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQge1xuICBkaXNwbGF5R2FtZUVuZFBvcHVwLFxuICBkaXNwbGF5UGxhY2VtZW50U2NyZWVuLFxuICBkaXNwbGF5VXNlclNoaXBzLFxuICByZW1vdmVBbGxDaGlsZE5vZGVzLFxuICBoaWRlUGxhY2VtZW50U2NyZWVuLFxuICBoaWRlR2FtZUVuZFNjcmVlbixcbn07XG4iLCJjb25zdCBzaGlwRmFjdG9yeSA9IChsZW5ndGgpID0+IHtcbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuXG4gIGxldCBocCA9IGxlbmd0aDtcbiAgY29uc3QgZ2V0SFAgPSAoKSA9PiBocDtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBocCA9PT0gMDtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaHAgLT0gMTtcbiAgfTtcblxuICByZXR1cm4geyBnZXRMZW5ndGgsIGdldEhQLCBpc1N1bmssIGhpdCB9O1xufTtcblxuY29uc3QgZ2FtZWJvYXJkRmFjdG9yeSA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBuZXcgQXJyYXkoMTApO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSArPSAxKVxuICAgIGJvYXJkW2ldID0gW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdO1xuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkO1xuXG4gIGNvbnN0IHZlcnRpY2FsT3ZlcmxhcCA9IChsZW5ndGgsIGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IGNvb3JkaW5hdGVzWzBdOyBpIDwgY29vcmRpbmF0ZXNbMF0gKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHR5cGVvZiBib2FyZFtpXVtjb29yZGluYXRlc1sxXV0gPT09IFwib2JqZWN0XCIpIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgaG9yaXpvbnRhbE92ZXJsYXAgPSAobGVuZ3RoLCBjb29yZGluYXRlcykgPT4ge1xuICAgIGZvciAobGV0IGkgPSBjb29yZGluYXRlc1sxXTsgaSA8IGNvb3JkaW5hdGVzWzFdICsgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0eXBlb2YgYm9hcmRbY29vcmRpbmF0ZXNbMF1dW2ldID09PSBcIm9iamVjdFwiKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGlzRW5vdWdoUm9vbSA9IChsZW5ndGgsIGNvb3JkaW5hdGVzLCBkaXJlY3Rpb24pID0+IHtcbiAgICBjb25zdCByb3cgPSBjb29yZGluYXRlc1swXTtcbiAgICBjb25zdCBjb2wgPSBjb29yZGluYXRlc1sxXTtcbiAgICBpZiAoZGlyZWN0aW9uID09PSBcInhcIikge1xuICAgICAgcmV0dXJuIGxlbmd0aCA8PSA5IC0gY29sICsgMSAmJiAhaG9yaXpvbnRhbE92ZXJsYXAobGVuZ3RoLCBjb29yZGluYXRlcyk7XG4gICAgfVxuICAgIHJldHVybiBsZW5ndGggPD0gOSAtIHJvdyArIDEgJiYgIXZlcnRpY2FsT3ZlcmxhcChsZW5ndGgsIGNvb3JkaW5hdGVzKTtcbiAgfTtcblxuICBjb25zdCB2YWxpZENvb3JkaW5hdGVzID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgY29uc3Qgcm93ID0gY29vcmRpbmF0ZXNbMF07XG4gICAgY29uc3QgY29sID0gY29vcmRpbmF0ZXNbMV07XG4gICAgcmV0dXJuIHJvdyA+PSAwICYmIHJvdyA8PSA5ICYmIGNvbCA+PSAwICYmIGNvbCA8PSA5O1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCBjb29yZGluYXRlcywgZGlyZWN0aW9uKSA9PiB7XG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXAuZ2V0TGVuZ3RoKCk7XG4gICAgY29uc3Qgcm93ID0gY29vcmRpbmF0ZXNbMF07XG4gICAgY29uc3QgY29sID0gY29vcmRpbmF0ZXNbMV07XG4gICAgaWYgKHNoaXBMZW5ndGggPCAxKSByZXR1cm4gXCJmYWlsXCI7XG4gICAgaWYgKHNoaXBMZW5ndGggPT09IDEpIHtcbiAgICAgIGJvYXJkW3Jvd11bY29sXSA9IHNoaXA7XG4gICAgICByZXR1cm4gXCJzdWNjZXNzXCI7XG4gICAgfVxuICAgIGlmICghdmFsaWRDb29yZGluYXRlcyhjb29yZGluYXRlcykpIHJldHVybiBcImZhaWxcIjtcblxuICAgIGNvbnN0IHRoZXJlSXNFbm91Z2hSb29tID0gaXNFbm91Z2hSb29tKHNoaXBMZW5ndGgsIGNvb3JkaW5hdGVzLCBkaXJlY3Rpb24pO1xuICAgIGlmICghdGhlcmVJc0Vub3VnaFJvb20pIHJldHVybiBcImZhaWxcIjtcblxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlIFwieFwiOlxuICAgICAgICB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IGNvbDsgaSA8IGNvbCArIHNoaXAuZ2V0TGVuZ3RoKCk7IGkgKz0gMSkge1xuICAgICAgICAgICAgYm9hcmRbcm93XVtpXSA9IHNoaXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBcInN1Y2Nlc3NcIjtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJ5XCI6IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHJvdzsgaSA8IHJvdyArIHNoaXAuZ2V0TGVuZ3RoKCk7IGkgKz0gMSkge1xuICAgICAgICAgIGJvYXJkW2ldW2NvbF0gPSBzaGlwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcInN1Y2Nlc3NcIjtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGNvbnN0IHJvdyA9IGNvb3JkaW5hdGVzWzBdO1xuICAgIGNvbnN0IGNvbCA9IGNvb3JkaW5hdGVzWzFdO1xuICAgIGlmICh2YWxpZENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSAmJiB0eXBlb2YgYm9hcmRbcm93XVtjb2xdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBib2FyZFtyb3ddW2NvbF0uaGl0KCk7XG4gICAgICByZXR1cm4gXCJoaXRcIjtcbiAgICB9XG4gICAgcmV0dXJuIFwibWlzc1wiO1xuICB9O1xuXG4gIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZFtpXVtqXSA9PT0gXCJvYmplY3RcIiAmJiBib2FyZFtpXVtqXS5pc1N1bmsoKSA9PT0gZmFsc2UpXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4geyBnZXRCb2FyZCwgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBhbGxTdW5rIH07XG59O1xuXG5jb25zdCBwbGF5ZXJGYWN0b3J5ID0gKHR5cGUsIG5hbWUpID0+IHtcbiAgY29uc3QgZ2FtZUJvYXJkID0gZ2FtZWJvYXJkRmFjdG9yeSgpO1xuICBpZiAodHlwZSA9PT0gXCJjb21wdXRlclwiKSB7XG4gICAgY29uc3QgdW5hdHRhY2tlZENvb3JkaW5hdGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgdW5hdHRhY2tlZENvb3JkaW5hdGVzLnB1c2goW2ksIGpdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRSYW5kb21Db29yZGluYXRlcyA9ICgpID0+XG4gICAgICB1bmF0dGFja2VkQ29vcmRpbmF0ZXNbXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHVuYXR0YWNrZWRDb29yZGluYXRlcy5sZW5ndGgpXG4gICAgICBdO1xuXG4gICAgY29uc3QgdXBkYXRlVW5hdHRhY2tlZENvb3JkaW5hdGVzID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHVuYXR0YWNrZWRDb29yZGluYXRlcy5pbmRleE9mKGNvb3JkaW5hdGVzKTtcbiAgICAgIHVuYXR0YWNrZWRDb29yZGluYXRlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlUmFuZG9tUGxheSA9IChlbmVteUJvYXJkKSA9PiB7XG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldFJhbmRvbUNvb3JkaW5hdGVzKCk7XG4gICAgICB1cGRhdGVVbmF0dGFja2VkQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpO1xuICAgICAgcmV0dXJuIFtlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpLCBjb29yZGluYXRlc107XG4gICAgfTtcbiAgICByZXR1cm4geyBnYW1lQm9hcmQsIG1ha2VSYW5kb21QbGF5IH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIGdhbWVCb2FyZCxcbiAgICBtYWtlUGxheShlbmVteUJvYXJkLCBjb29yZGluYXRlcykge1xuICAgICAgcmV0dXJuIGVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcyk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IHNoaXBGYWN0b3J5LCBnYW1lYm9hcmRGYWN0b3J5LCBwbGF5ZXJGYWN0b3J5IH07XG4iLCJpbXBvcnQgeyBzaGlwRmFjdG9yeSB9IGZyb20gXCIuL2ZhY3Rvcmllc1wiO1xuY29uc3QgZ2FtZUlzT3ZlciA9IChib2FyZDEsIGJvYXJkMikgPT4gYm9hcmQxLmFsbFN1bmsoKSB8fCBib2FyZDIuYWxsU3VuaygpO1xuXG5jb25zdCBwbGFjZVNoaXBzUmFuZG9tbHkgPSAoYm9hcmQpID0+IHtcbiAgY29uc3QgcG9zc2libGVTcG90cyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIHBvc3NpYmxlU3BvdHMucHVzaChbaSwgal0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdldFJhbmRvbUNvb3JkaW5hdGVzID0gKCkgPT5cbiAgICBwb3NzaWJsZVNwb3RzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlU3BvdHMubGVuZ3RoKV07XG5cbiAgY29uc3QgdXBkYXRlVW5hdHRhY2tlZENvb3JkaW5hdGVzID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBwb3NzaWJsZVNwb3RzLmluZGV4T2YoY29vcmRpbmF0ZXMpO1xuICAgIHBvc3NpYmxlU3BvdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcblxuICBjb25zdCBjYXJyaWVyID0gc2hpcEZhY3RvcnkoNSk7XG4gIGNvbnN0IGJhdHRsZXNoaXAgPSBzaGlwRmFjdG9yeSg0KTtcbiAgY29uc3QgZGVzdHJveWVyID0gc2hpcEZhY3RvcnkoMyk7XG4gIGNvbnN0IHN1Ym1hcmluZSA9IHNoaXBGYWN0b3J5KDMpO1xuICBjb25zdCBwYXRyb2xCb2F0ID0gc2hpcEZhY3RvcnkoMik7XG5cbiAgY29uc3QgcGxhY2UgPSAoc2hpcCkgPT4ge1xuICAgIGxldCByYW5kb21EaXJlY3Rpb247XG4gICAgY29uc3QgcmFuZG9tQ29vcmRpbmF0ZXMgPSBnZXRSYW5kb21Db29yZGluYXRlcygpO1xuICAgIHVwZGF0ZVVuYXR0YWNrZWRDb29yZGluYXRlcyhyYW5kb21Db29yZGluYXRlcyk7XG4gICAgaWYgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09PSAwKSByYW5kb21EaXJlY3Rpb24gPSBcInhcIjtcbiAgICBlbHNlIHJhbmRvbURpcmVjdGlvbiA9IFwieVwiO1xuICAgIGlmIChib2FyZC5wbGFjZVNoaXAoc2hpcCwgcmFuZG9tQ29vcmRpbmF0ZXMsIHJhbmRvbURpcmVjdGlvbikgPT09IFwiZmFpbFwiKVxuICAgICAgcGxhY2Uoc2hpcCk7XG4gICAgZWxzZSBjb25zb2xlLmxvZyhgWyR7cmFuZG9tQ29vcmRpbmF0ZXN9XSAke3JhbmRvbURpcmVjdGlvbn1gKTtcbiAgfTtcblxuICBwbGFjZShjYXJyaWVyKTtcbiAgcGxhY2UoYmF0dGxlc2hpcCk7XG4gIHBsYWNlKGRlc3Ryb3llcik7XG4gIHBsYWNlKHN1Ym1hcmluZSk7XG4gIHBsYWNlKHBhdHJvbEJvYXQpO1xufTtcblxuZXhwb3J0IHsgZ2FtZUlzT3ZlciwgcGxhY2VTaGlwc1JhbmRvbWx5IH07XG4iLCJjb25zdCBpbml0aWFsTG9hZCA9ICgpID0+IHtcbiAgY29uc3QgdXNlckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXItZ3JpZFwiKTtcbiAgY29uc3QgY29tcHV0ZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wdXRlci1ncmlkXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY2VsbC5kYXRhc2V0LnJvdyA9IGk7XG4gICAgICBjZWxsLmRhdGFzZXQuY29sID0gajtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICB1c2VyR3JpZC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNlbGwuZGF0YXNldC5yb3cgPSBpO1xuICAgICAgY2VsbC5kYXRhc2V0LmNvbCA9IGo7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgY29tcHV0ZXJHcmlkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbiAgfVxuICBjb25zdCBwbGFjZW1lbnRHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGFjZW1lbnQtZ3JpZFwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNlbGwuZGF0YXNldC5yb3cgPSBpO1xuICAgICAgY2VsbC5kYXRhc2V0LmNvbCA9IGo7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgcGxhY2VtZW50R3JpZC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxMb2FkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtcbiAgZGlzcGxheUdhbWVFbmRQb3B1cCxcbiAgZGlzcGxheVBsYWNlbWVudFNjcmVlbixcbiAgZGlzcGxheVVzZXJTaGlwcyxcbiAgaGlkZUdhbWVFbmRTY3JlZW4sXG4gIGhpZGVQbGFjZW1lbnRTY3JlZW4sXG4gIHJlbW92ZUFsbENoaWxkTm9kZXMsXG59IGZyb20gXCIuL2RvbS1zdHVmZlwiO1xuaW1wb3J0IHsgcGxheWVyRmFjdG9yeSwgc2hpcEZhY3RvcnkgfSBmcm9tIFwiLi9mYWN0b3JpZXNcIjtcbmltcG9ydCB7IGdhbWVJc092ZXIsIHBsYWNlU2hpcHNSYW5kb21seSB9IGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCBpbml0aWFsTG9hZCBmcm9tIFwiLi9pbml0aWFsLWxvYWRcIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5pbml0aWFsTG9hZCgpO1xuKCgpID0+IHtcbiAgbGV0IGh1bWFuID0gcGxheWVyRmFjdG9yeShcImh1bWFuXCIpO1xuICBkaXNwbGF5VXNlclNoaXBzKGh1bWFuLmdhbWVCb2FyZC5nZXRCb2FyZCgpKTtcblxuICBsZXQgY29tcHV0ZXIgPSBwbGF5ZXJGYWN0b3J5KFwiY29tcHV0ZXJcIik7XG4gIHBsYWNlU2hpcHNSYW5kb21seShjb21wdXRlci5nYW1lQm9hcmQpO1xuXG4gIGxldCBvcmllbnRhdGlvbiA9IFwieFwiO1xuICBsZXQgY3VycmVudFdpZHRoO1xuICBsZXQgY3VycmVudENhbGxiYWNrO1xuICBsZXQgY3VycmVudE5leHQ7XG5cbiAgY29uc3Qgcm90YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb3RhdGVcIik7XG4gIHJvdGF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ4XCIpIHtcbiAgICAgIG9yaWVudGF0aW9uID0gXCJ5XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9yaWVudGF0aW9uID0gXCJ4XCI7XG4gICAgfVxuICAgIGFkZFBsYWNlbWVudEdyaWRFdmVudExpc3RlbmVycyhjdXJyZW50V2lkdGgsIGN1cnJlbnRDYWxsYmFjaywgY3VycmVudE5leHQpO1xuICB9KTtcblxuICBjb25zdCBhZGRQbGFjZW1lbnRHcmlkRXZlbnRMaXN0ZW5lcnMgPSAod2lkdGgsIGNhbGxiYWNrLCBuZXh0KSA9PiB7XG4gICAgY3VycmVudFdpZHRoID0gd2lkdGg7XG4gICAgY3VycmVudENhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgY3VycmVudE5leHQgPSBuZXh0O1xuICAgIGNvbnN0IHBsYWNlbWVudE1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYWNlbWVudC1tZXNzYWdlXCIpO1xuICAgIGxldCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxhY2VtZW50LWdyaWQgZGl2XCIpO1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ4XCIpIHtcbiAgICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgY2VsbC5yZXBsYWNlV2l0aChjZWxsLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICB9KTtcbiAgICAgIGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwbGFjZW1lbnQtZ3JpZCBkaXZcIik7XG4gICAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBodW1hbi5nYW1lQm9hcmQucGxhY2VTaGlwKFxuICAgICAgICAgICAgICBzaGlwRmFjdG9yeSh3aWR0aCksXG4gICAgICAgICAgICAgIFtwYXJzZUludChjZWxsLmRhdGFzZXQucm93LCAxMCksIHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2wsIDEwKV0sXG4gICAgICAgICAgICAgIFwieFwiXG4gICAgICAgICAgICApID09PSBcInN1Y2Nlc3NcIlxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZGlzcGxheVVzZXJTaGlwcyhodW1hbi5nYW1lQm9hcmQuZ2V0Qm9hcmQoKSk7XG4gICAgICAgICAgICBwbGFjZW1lbnRNZXNzYWdlLnRleHRDb250ZW50ID0gYFBsYWNlIHlvdXIgJHtuZXh0fWA7XG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9IFwieFwiO1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcbiAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgbGV0IGkgPSBwYXJzZUludChjZWxsLmRhdGFzZXQuY29sKTtcbiAgICAgICAgICAgIGkgPCBwYXJzZUludChjZWxsLmRhdGFzZXQuY29sKSArIHdpZHRoO1xuICAgICAgICAgICAgaSArPSAxXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYCNwbGFjZW1lbnQtZ3JpZCBkaXZbZGF0YS1yb3c9JyR7Y2VsbC5kYXRhc2V0LnJvd30nXVtkYXRhLWNvbD0nJHtpfSdgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgI3BsYWNlbWVudC1ncmlkIGRpdltkYXRhLXJvdz0nJHtjZWxsLmRhdGFzZXQucm93fSddW2RhdGEtY29sPScke2l9J2BcbiAgICAgICAgICAgICAgKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG4gICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIlwiO1xuICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICBsZXQgaSA9IHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2wpO1xuICAgICAgICAgICAgaSA8IHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2wpICsgd2lkdGg7XG4gICAgICAgICAgICBpICs9IDFcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgI3BsYWNlbWVudC1ncmlkIGRpdltkYXRhLXJvdz0nJHtjZWxsLmRhdGFzZXQucm93fSddW2RhdGEtY29sPScke2l9J2BcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGAjcGxhY2VtZW50LWdyaWQgZGl2W2RhdGEtcm93PScke2NlbGwuZGF0YXNldC5yb3d9J11bZGF0YS1jb2w9JyR7aX0nYFxuICAgICAgICAgICAgICApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGNlbGwucmVwbGFjZVdpdGgoY2VsbC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgfSk7XG4gICAgICBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxhY2VtZW50LWdyaWQgZGl2XCIpO1xuICAgICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgaHVtYW4uZ2FtZUJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICAgICAgc2hpcEZhY3Rvcnkod2lkdGgpLFxuICAgICAgICAgICAgICBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdywgMTApLCBwYXJzZUludChjZWxsLmRhdGFzZXQuY29sLCAxMCldLFxuICAgICAgICAgICAgICBcInlcIlxuICAgICAgICAgICAgKSA9PT0gXCJzdWNjZXNzXCJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyU2hpcHMoaHVtYW4uZ2FtZUJvYXJkLmdldEJvYXJkKCkpO1xuICAgICAgICAgICAgcGxhY2VtZW50TWVzc2FnZS50ZXh0Q29udGVudCA9IGBQbGFjZSB5b3VyICR7bmV4dH1gO1xuICAgICAgICAgICAgb3JpZW50YXRpb24gPSBcInhcIjtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XG4gICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgICAgZm9yIChcbiAgICAgICAgICAgIGxldCBpID0gcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdyk7XG4gICAgICAgICAgICBpIDwgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdykgKyB3aWR0aDtcbiAgICAgICAgICAgIGkgKz0gMVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGAjcGxhY2VtZW50LWdyaWQgZGl2W2RhdGEtcm93PScke2l9J11bZGF0YS1jb2w9JyR7Y2VsbC5kYXRhc2V0LmNvbH0nYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYCNwbGFjZW1lbnQtZ3JpZCBkaXZbZGF0YS1yb3c9JyR7aX0nXVtkYXRhLWNvbD0nJHtjZWxsLmRhdGFzZXQuY29sfSdgXG4gICAgICAgICAgICAgICkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibGFja1wiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJcIjtcbiAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgbGV0IGkgPSBwYXJzZUludChjZWxsLmRhdGFzZXQucm93KTtcbiAgICAgICAgICAgIGkgPCBwYXJzZUludChjZWxsLmRhdGFzZXQucm93KSArIHdpZHRoO1xuICAgICAgICAgICAgaSArPSAxXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYCNwbGFjZW1lbnQtZ3JpZCBkaXZbZGF0YS1yb3c9JyR7aX0nXVtkYXRhLWNvbD0nJHtjZWxsLmRhdGFzZXQuY29sfSdgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgI3BsYWNlbWVudC1ncmlkIGRpdltkYXRhLXJvdz0nJHtpfSddW2RhdGEtY29sPScke2NlbGwuZGF0YXNldC5jb2x9J2BcbiAgICAgICAgICAgICAgKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcGxhY2VQYXRyb2xCb2F0ID0gKCkgPT4ge1xuICAgIGFkZFBsYWNlbWVudEdyaWRFdmVudExpc3RlbmVycygyLCBoaWRlUGxhY2VtZW50U2NyZWVuKTtcbiAgfTtcbiAgY29uc3QgcGxhY2VTdWJtYXJpbmUgPSAoKSA9PiB7XG4gICAgYWRkUGxhY2VtZW50R3JpZEV2ZW50TGlzdGVuZXJzKDMsIHBsYWNlUGF0cm9sQm9hdCwgXCJQYXRyb2wgQm9hdFwiKTtcbiAgfTtcblxuICBjb25zdCBwbGFjZURlc3Ryb3llciA9ICgpID0+IHtcbiAgICBhZGRQbGFjZW1lbnRHcmlkRXZlbnRMaXN0ZW5lcnMoMywgcGxhY2VTdWJtYXJpbmUsIFwiU3VibWFyaW5lXCIpO1xuICB9O1xuICBjb25zdCBwbGFjZUJhdHRsZXNoaXAgPSAoKSA9PiB7XG4gICAgYWRkUGxhY2VtZW50R3JpZEV2ZW50TGlzdGVuZXJzKDQsIHBsYWNlRGVzdHJveWVyLCBcIkRlc3Ryb3llclwiKTtcbiAgfTtcbiAgY29uc3QgcGxhY2VDYXJyaWVyID0gKCkgPT4ge1xuICAgIGFkZFBsYWNlbWVudEdyaWRFdmVudExpc3RlbmVycyg1LCBwbGFjZUJhdHRsZXNoaXAsIFwiQmF0dGxlc2hpcFwiKTtcbiAgfTtcblxuICBjb25zdCBhZGRDb21wdXRlckJvYXJkQ2VsbHNFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBjb21wdXRlckJvYXJkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2NvbXB1dGVyLWdyaWQgZGl2XCIpO1xuICAgIGNvbXB1dGVyQm9hcmRDZWxscy5mb3JFYWNoKChjb21wdXRlckJvYXJkQ2VsbCkgPT4ge1xuICAgICAgY29tcHV0ZXJCb2FyZENlbGwuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdXNlclBsYXlSZXN1bHQgPSBodW1hbi5tYWtlUGxheShjb21wdXRlci5nYW1lQm9hcmQsIFtcbiAgICAgICAgICAgIHBhcnNlSW50KGNvbXB1dGVyQm9hcmRDZWxsLmRhdGFzZXQucm93LCAxMCksXG4gICAgICAgICAgICBwYXJzZUludChjb21wdXRlckJvYXJkQ2VsbC5kYXRhc2V0LmNvbCwgMTApLFxuICAgICAgICAgIF0pO1xuICAgICAgICAgIGlmICh1c2VyUGxheVJlc3VsdCA9PT0gXCJoaXRcIikge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBjb21wdXRlci5nYW1lQm9hcmRcbiAgICAgICAgICAgICAgICAuZ2V0Qm9hcmQoKVxuICAgICAgICAgICAgICAgIFtwYXJzZUludChjb21wdXRlckJvYXJkQ2VsbC5kYXRhc2V0LnJvdywgMTApXVtcbiAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGNvbXB1dGVyQm9hcmRDZWxsLmRhdGFzZXQuY29sLCAxMClcbiAgICAgICAgICAgICAgICBdLmlzU3VuaygpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY29tcHV0ZXJCb2FyZENlbGwuY2xhc3NMaXN0LmFkZChcInN1bmtcIik7XG4gICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIGNvbXB1dGVyLmdhbWVCb2FyZC5nZXRCb2FyZCgpW1xuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChjb21wdXRlckJvYXJkQ2VsbC5kYXRhc2V0LnJvdywgMTApXG4gICAgICAgICAgICAgICAgICBdW2pdID09PVxuICAgICAgICAgICAgICAgICAgICBjb21wdXRlci5nYW1lQm9hcmQuZ2V0Qm9hcmQoKVtcbiAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChjb21wdXRlckJvYXJkQ2VsbC5kYXRhc2V0LnJvdywgMTApXG4gICAgICAgICAgICAgICAgICAgIF1bcGFyc2VJbnQoY29tcHV0ZXJCb2FyZENlbGwuZGF0YXNldC5jb2wsIDEwKV0gJiZcbiAgICAgICAgICAgICAgICAgIGogIT09IHBhcnNlSW50KGNvbXB1dGVyQm9hcmRDZWxsLmRhdGFzZXQuY29sLCAxMClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgIGAjY29tcHV0ZXItZ3JpZCBkaXZbZGF0YS1yb3c9JyR7cGFyc2VJbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wdXRlckJvYXJkQ2VsbC5kYXRhc2V0LnJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwXG4gICAgICAgICAgICAgICAgICAgICAgKX0nXVtkYXRhLWNvbD0nJHtqfSddYFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QucmVwbGFjZShcImhpdFwiLCBcInN1bmtcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgY29tcHV0ZXIuZ2FtZUJvYXJkLmdldEJvYXJkKClbaV1bXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGNvbXB1dGVyQm9hcmRDZWxsLmRhdGFzZXQuY29sLCAxMClcbiAgICAgICAgICAgICAgICAgIF0gPT09XG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyLmdhbWVCb2FyZC5nZXRCb2FyZCgpW1xuICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGNvbXB1dGVyQm9hcmRDZWxsLmRhdGFzZXQucm93LCAxMClcbiAgICAgICAgICAgICAgICAgICAgXVtwYXJzZUludChjb21wdXRlckJvYXJkQ2VsbC5kYXRhc2V0LmNvbCwgMTApXSAmJlxuICAgICAgICAgICAgICAgICAgaSAhPT0gcGFyc2VJbnQoY29tcHV0ZXJCb2FyZENlbGwuZGF0YXNldC5yb3csIDEwKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgYCNjb21wdXRlci1ncmlkIGRpdltkYXRhLXJvdz0nJHtpfSddW2RhdGEtY29sPScke3BhcnNlSW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXJCb2FyZENlbGwuZGF0YXNldC5jb2wsXG4gICAgICAgICAgICAgICAgICAgICAgICAxMFxuICAgICAgICAgICAgICAgICAgICAgICl9J11gXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5yZXBsYWNlKFwiaGl0XCIsIFwic3Vua1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbXB1dGVyQm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ2FtZUlzT3ZlcihodW1hbi5nYW1lQm9hcmQsIGNvbXB1dGVyLmdhbWVCb2FyZCkpIHtcbiAgICAgICAgICAgICAgaWYgKGh1bWFuLmdhbWVCb2FyZC5hbGxTdW5rKCkpIGRpc3BsYXlHYW1lRW5kUG9wdXAoXCJjb21wdXRlclwiKTtcbiAgICAgICAgICAgICAgZWxzZSBkaXNwbGF5R2FtZUVuZFBvcHVwKFwiaHVtYW5cIik7XG4gICAgICAgICAgICAgIC8vIGRpc3BsYXkgZ2FtZUVuZFBvcHVwIHdpdGggd2lubmVyIGluZm9cbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBjb21wdXRlckJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcblxuICAgICAgICAgIGNvbnN0IGFycmF5ID0gY29tcHV0ZXIubWFrZVJhbmRvbVBsYXkoaHVtYW4uZ2FtZUJvYXJkKTtcbiAgICAgICAgICBjb25zdCBjb21wUGxheVJlc3VsdCA9IGFycmF5WzBdO1xuICAgICAgICAgIGNvbnN0IGNlbGxBdHRhY2tlZCA9IGFycmF5WzFdO1xuICAgICAgICAgIGlmIChjb21wUGxheVJlc3VsdCA9PT0gXCJoaXRcIikge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBodW1hbi5nYW1lQm9hcmRcbiAgICAgICAgICAgICAgICAuZ2V0Qm9hcmQoKVxuICAgICAgICAgICAgICAgIFtjZWxsQXR0YWNrZWRbMF1dW2NlbGxBdHRhY2tlZFsxXV0uaXNTdW5rKClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgYCN1c2VyLWdyaWQgZGl2W2RhdGEtcm93PScke2NlbGxBdHRhY2tlZFswXX0nXVtkYXRhLWNvbD0nJHtjZWxsQXR0YWNrZWRbMV19J11gXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwic3Vua1wiKTtcbiAgICAgICAgICAgICAgLy8gZmluZCBhbGwgdGhlIGNlbGxzIHRoYXQgY29udGFpbiB0aGUgc2FtZSBib2F0XG4gICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIGh1bWFuLmdhbWVCb2FyZC5nZXRCb2FyZCgpW2NlbGxBdHRhY2tlZFswXV1bal0gPT09XG4gICAgICAgICAgICAgICAgICAgIGh1bWFuLmdhbWVCb2FyZC5nZXRCb2FyZCgpW2NlbGxBdHRhY2tlZFswXV1bXG4gICAgICAgICAgICAgICAgICAgICAgY2VsbEF0dGFja2VkWzFdXG4gICAgICAgICAgICAgICAgICAgIF0gJiZcbiAgICAgICAgICAgICAgICAgIGogIT09IGNlbGxBdHRhY2tlZFsxXVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgYCN1c2VyLWdyaWQgZGl2W2RhdGEtcm93PScke2NlbGxBdHRhY2tlZFswXX0nXVtkYXRhLWNvbD0nJHtqfSddYFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QucmVwbGFjZShcImhpdFwiLCBcInN1bmtcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgaHVtYW4uZ2FtZUJvYXJkLmdldEJvYXJkKClbaV1bY2VsbEF0dGFja2VkWzFdXSA9PT1cbiAgICAgICAgICAgICAgICAgICAgaHVtYW4uZ2FtZUJvYXJkLmdldEJvYXJkKClbY2VsbEF0dGFja2VkWzBdXVtcbiAgICAgICAgICAgICAgICAgICAgICBjZWxsQXR0YWNrZWRbMV1cbiAgICAgICAgICAgICAgICAgICAgXSAmJlxuICAgICAgICAgICAgICAgICAgaSAhPT0gY2VsbEF0dGFja2VkWzBdXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICBgI3VzZXItZ3JpZCBkaXZbZGF0YS1yb3c9JyR7aX0nXVtkYXRhLWNvbD0nJHtjZWxsQXR0YWNrZWRbMV19J11gXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5yZXBsYWNlKFwiaGl0XCIsIFwic3Vua1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgYCN1c2VyLWdyaWQgZGl2W2RhdGEtcm93PScke2NlbGxBdHRhY2tlZFswXX0nXVtkYXRhLWNvbD0nJHtjZWxsQXR0YWNrZWRbMV19J11gXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgICAgICAgaWYgKGdhbWVJc092ZXIoaHVtYW4uZ2FtZUJvYXJkLCBjb21wdXRlci5nYW1lQm9hcmQpKSB7XG4gICAgICAgICAgICAgIGlmIChodW1hbi5nYW1lQm9hcmQuYWxsU3VuaygpKSBkaXNwbGF5R2FtZUVuZFBvcHVwKFwiY29tcHV0ZXJcIik7XG4gICAgICAgICAgICAgIGVsc2UgZGlzcGxheUdhbWVFbmRQb3B1cChcImh1bWFuXCIpO1xuICAgICAgICAgICAgICAvLyBkaXNwbGF5IGdhbWVFbmRQb3B1cCB3aXRoIHdpbm5lciBpbmZvXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgI3VzZXItZ3JpZCBkaXZbZGF0YS1yb3c9JyR7Y2VsbEF0dGFja2VkWzBdfSddW2RhdGEtY29sPScke2NlbGxBdHRhY2tlZFsxXX0nXWBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgICAgIH0sXG4gICAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlc3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc3RhcnRcIik7XG4gIHJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBoaWRlR2FtZUVuZFNjcmVlbigpO1xuICAgIGNvbnN0IHVzZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c2VyLWdyaWRcIik7XG4gICAgY29uc3QgY29tcHV0ZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wdXRlci1ncmlkXCIpO1xuICAgIGNvbnN0IHBsYWNlbWVudEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYWNlbWVudC1ncmlkXCIpO1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXModXNlckdyaWQpO1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29tcHV0ZXJHcmlkKTtcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKHBsYWNlbWVudEdyaWQpO1xuICAgIGluaXRpYWxMb2FkKCk7XG4gICAgZGlzcGxheVBsYWNlbWVudFNjcmVlbigpO1xuXG4gICAgaHVtYW4gPSBwbGF5ZXJGYWN0b3J5KFwiaHVtYW5cIik7XG4gICAgZGlzcGxheVVzZXJTaGlwcyhodW1hbi5nYW1lQm9hcmQuZ2V0Qm9hcmQoKSk7XG5cbiAgICBjb21wdXRlciA9IHBsYXllckZhY3RvcnkoXCJjb21wdXRlclwiKTtcbiAgICBwbGFjZVNoaXBzUmFuZG9tbHkoY29tcHV0ZXIuZ2FtZUJvYXJkKTtcblxuICAgIHBsYWNlQ2FycmllcigpO1xuICAgIGFkZENvbXB1dGVyQm9hcmRDZWxsc0V2ZW50TGlzdGVuZXJzKCk7XG4gIH0pO1xuICBwbGFjZUNhcnJpZXIoKTtcbiAgYWRkQ29tcHV0ZXJCb2FyZENlbGxzRXZlbnRMaXN0ZW5lcnMoKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=