/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var sios = __webpack_require__(1)

	Vue.component('sios', sios)


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\sios.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(7)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./sios.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./sios.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./sios.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.select-ios {\r\n    width: 100%;\r\n    min-height: 320px;\r\n    background-color: #fff;\r\n    position: fixed;\r\n    z-index: 999;\r\n    border-radius: 12px;\r\n    margin-top: 7px;\r\n    top: calc(100vh - 0px);\r\n    transition-property: top;\r\n    transition-duration: 0.5s;\r\n}\r\n\r\n.sio-open {\r\n    top: calc(100vh - 310px);\r\n    transition-property: top;\r\n    transition-duration: 0.5s;\r\n}\r\n\r\n.sio-container {\r\n    margin: auto;\r\n    max-width: 500px;\r\n}\r\n\r\n.sio-position-title {\r\n    margin-top: 12px;\r\n}\r\n\r\n.select-ios-name {\r\n    padding: 5px;\r\n    padding-left: 15px;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n}\r\n\r\n.select-ios-exit {\r\n    padding-left: 0px;\r\n    text-align: center;\r\n}\r\n\r\n.select-ios-exit>img,\r\nsvg {\r\n    width: 12px;\r\n}\r\n\r\n.sio-body {\r\n    width: 100%;\r\n    padding: 5px 8px 15px 10px;\r\n    max-height: 258px;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.sio-body>.point {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    border-bottom: 1px solid #f5f4f4;\r\n}\r\n\r\n.sio-text-check>span {\r\n    padding-left: 5px;\r\n}\r\n\r\n.sio-check {\r\n    text-align: center;\r\n}\r\n\r\n.sio-check>img,\r\nsvg {\r\n    width: 15px;\r\n}\r\n\r\n.sio-footer {\r\n    width: 100%;\r\n}\r\n\r\n.sio-back {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(20, 20, 21, 0.5);\r\n    z-index: 888;\r\n}\r\n\r\n.sio-v1 {\r\n    width: 100%;\r\n    padding: 0px;\r\n    margin-left: -14px;\r\n    max-width: 500px;\r\n}\r\n\r\n.sio-input {\r\n    width: 100%;\r\n    height: 40px;\r\n    background: #fff;\r\n    border: 1px solid #e3e3e6;\r\n    padding: 40px 10px 10px 10px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.sio-block {\r\n    margin-top: -26px;\r\n    max-width: 100%;\r\n    -ms-text-overflow: ellipsis;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    -ms-line-clamp: 1;\r\n    -webkit-line-clamp: 1;\r\n    line-clamp: 1;\r\n    display: -webkit-box;\r\n    display: box;\r\n    word-wrap: break-word;\r\n    box-orient: vertical;\r\n    font-size: 15px;\r\n    line-height: 19px;\r\n}\r\n\r\n.point {\r\n    cursor: pointer;\r\n}\r\n\r\n.empty-list {\r\n    text-align: center;\r\n    margin-top: 65px;\r\n}\r\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	    props: {
	        label: String,
	        list: Array,
	        value: [String, Number, Object]
	    },
	    data: function data() {
	        return {
	            show: false,
	            config: {
	                id: "id",
	                field: [],
	                label: "name"
	            }
	        };
	    },
	    computed: {
	        text_label: function text_label() {
	            if (this.value == "" || this.value === undefined) {
	                return this.label;
	            } else {
	                console.log(this.value);
	                return this.value[this.config.label];
	            }
	        },
	        check_id: function check_id() {
	            return this.value !== undefined ? this.value[this.config.id] : null;
	        }
	    },
	    methods: {
	        open: function open() {
	            this.show = true;
	        },
	        i_check: function i_check(k) {
	            this.value = this.list[k];
	            this.$emit("input", this.list[k]);
	            this.show = false;
	        },
	        close: function close() {
	            this.show = false;
	        }
	    }
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "\r\n<div>\r\n    <label for=\"app-1\" v-html=\"label\"></label>\r\n    <div class=\"sio-input\" @click=\"open()\">\r\n        <div class=\"sio-block\">\r\n            <span :style=\"((value == '')?'color:rgb(213, 213, 213);':'')\" v-html=\"text_label\"></span>\r\n        </div>\r\n    </div>\r\n    <div class=\"sio-v1\">\r\n        <div class=\"sio-back\" @click=\"close()\" v-if=\"show\"></div>\r\n        <div :class=\"'select-ios ' + (show ? 'sio-open' : '')\">\r\n            <div class=\"sio-container\">\r\n                <div class=\"row sio-position-title\">\r\n                    <div class=\"col-10\">\r\n                        <span class=\"select-ios-name\" v-html=\"label\"></span>\r\n                    </div>\r\n                    <div class=\"select-ios-exit col-2\" @click=\"close()\">\r\n                        <img :src=\"'img/sio/close.svg'\" alt=\"x\" />\r\n                    </div>\r\n                </div>\r\n                <!-- sio body -->\r\n                <div class=\"sio-body\">\r\n                    <div class=\"point row\" :key=\"k\" v-for=\"(v, k) in list\" @click=\"i_check(k)\">\r\n                        <div class=\"col-10 sio-text-check\">\r\n                            <span v-html=\"v.name\">-</span>\r\n                        </div>\r\n                        <div class=\"col-2 sio-check\">\r\n                            <img :src=\"'img/sio/check.svg'\" alt=\"✔\" v-if=\"check_id === v[config.id]\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"empty-list\" v-if=\"list.length == 0\">Пусто. 🤨</div>\r\n                </div>\r\n                <!-- sio footer -->\r\n                <div class=\"sio-footer\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }
/******/ ]);