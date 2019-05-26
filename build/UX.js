(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("UX", [], factory);
	else if(typeof exports === 'object')
		exports["UX"] = factory();
	else
		root["UX"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Decorator.js":
/*!**************************!*\
  !*** ./src/Decorator.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Decorator base class
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 */
var Decorator = function Decorator() {
    _classCallCheck(this, Decorator);
};

exports.Decorator = Decorator;

/***/ }),

/***/ "./src/Init.js":
/*!*********************!*\
  !*** ./src/Init.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initialize = initialize;

var _Page = __webpack_require__(/*! ./Page */ "./src/Page.js");

/**
 * Init UX object
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @param options
 */
function initialize(options) {

    /**
     * Create default page object
     */
    if (window.UX == undefined) {
        window.UX = {};
    }

    window.UX.version = '1.0.0';
    window.UX.components = {};
    window.UX.debug = options.debug == undefined ? false : options.debug;
    window.UX.log = function (message) {
        if (this.debug) {
            console.log(message);
        }
    };

    window.UX.log('UX initialize version ' + window.UX.version);

    window.UX.log('--> loading libraries');
    window.UX.activeLibrary = options.activeLibrary == undefined ? 'Html5' : options.activeLibrary;
    window.UX.libraries = {
        Html5: {},
        Bootstrap_4: {},
        Semantic_2_4: {}
    };

    window.UX.getLibrary = function () {
        return this.activeLibrary;
    };

    window.UX.setLibrary = function (library) {
        this.activeLibrary = library;
    };

    window.UX.Page = new _Page.Page();
    window.UX.log('--> active library is ' + window.UX.activeLibrary);

    // Load library decorators

    window.UX.log('--> loading components');
    var keys = Object.keys(window.UX);
    for (var x in keys) {

        window.UX.log('  + Analyzing component ' + keys[x]);

        if (window.UX[keys[x]].getMetaData != undefined) {

            if (['component', 'layout', 'content'].indexOf(window.UX[keys[x]].getMetaData().category) != -1) {
                window.UX.log('    * Found Component class');
                window.UX.components[keys[x]] = window.UX[keys[x]];
            } else if (['decorator'].indexOf(window.UX[keys[x]].getMetaData().category) != -1) {
                window.UX.log('    * Found Decorator class');
                window.UX.libraries[window.UX[keys[x]].getMetaData().library][window.UX[keys[x]].getMetaData().name] = window.UX[keys[x]];
            }
        } else {
            window.UX.log('    ! Not an object');
        }
    }
}

/***/ }),

/***/ "./src/Page.js":
/*!*********************!*\
  !*** ./src/Page.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Page
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 */
var Page = function () {
    function Page() {
        _classCallCheck(this, Page);

        this.defaultContainerId = 'body';
        /**
         * List of UX items in web page
         */
        this.items = {};
        this.isInitialized = false;
    }

    /**
     * Add an item to the web page
     * @param item
     */


    _createClass(Page, [{
        key: 'addItem',
        value: function addItem(item) {
            this.items[item.getId()] = item;
            return item;
        }

        /**
         * Remove an item from list of items
         * @param id
         * @returns {UX}
         */

    }, {
        key: 'removeItem',
        value: function removeItem(id) {
            if (this.items[id] != undefined) {
                delete this.items[id];
            }
            return this;
        }

        /**
         * Find an item
         * @param id
         * @returns {null|*}
         */

    }, {
        key: 'findItem',
        value: function findItem(id) {
            if (this.items[id] != undefined) {
                return this.items[id];
            }
            return null;
        }

        /**
         * Init UX, init all components
         */

    }, {
        key: 'init',
        value: function init() {

            if (this.isInitialized) {
                return false;
            }

            for (var x in this.items) {
                this.items[x].init();
            }

            this.isInitialized = true;

            return true;
        }
    }]);

    return Page;
}();

exports.Page = Page;

/***/ }),

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base class for javascript UI components
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 */
var Component = function () {

    /**
     * Component constructor
     * @param id Component unique ID
     */
    function Component(id) {
        _classCallCheck(this, Component);

        /**
         * If id is not passed, generate a random id for component
         */
        if (id == undefined) {
            id = this.generateRandomId();
        }

        /**
         * Indicates if the component has been initialized or not
         * @type {boolean}
         */
        this.isInitialized = false;
        /**
         * The containing html element for this component
         * @type {string}
         */
        this.containerId = id;
        /**
         * ID of the component
         * @type {string}
         */
        this.id = id;
        /**
         * Name of the component
         * @type {string}
         */
        this.name = id;
        /**
         * List of classes applied to the component
         * @type {{}}
         */
        this.classes = {};
        /**
         * List of attributes applied to the component
         * @type {{}}
         */
        this.attributes = {};
        /**
         * The value of the component
         * @type {null}
         */
        this.value = null;
        /**
         * Indicates if the component is enabled or not
         * @type {boolean}
         */
        this.isEnabled = true;
        /**
         * Indicates if the component value is required or not
         * @type {boolean}
         */
        this.isRequired = false;
        /**
         * Html template used to render component
         * @type {null}
         */
        this.template = null;
        /**
         * Placeholder text
         * @type {null}
         */
        this.placeholder = null;
        /**
         * Name of component JS class
         * @type {string}
         */
        this.componentClassName = 'Component';
        /**
         * Component label text
         * @type {null}
         */
        this.label = null;
        /**
         * Name of required library for this component
         * @type {null}
         */
        this.requiresLibrary = null;
        /**
         * Component icon
         * @type {null}
         */
        this.icon = null;
        /**
         * Component data store object
         * @type {null}
         */
        this.store = null;
        /**
         * Parent container
         * @type {null}
         */
        this.parent = null;

        /**
         * Styles for component
         * @type {{}}
         */
        this.styles = {};

        /**
         * Component on click event
         * @type {null}
         */
        this.onClick = null;
        /**
         * Component on blur event
         * @type {null}
         */
        this.onBlur = null;
        /**
         * Component on change event
         * @type {null}
         */
        this.onChange = null;
        /**
         * Component on select event
         * @type {null}
         */
        this.onSelect = null;
        /**
         * Component on double click event
         * @type {null}
         */
        this.onDblClick = null;
        /**
         * Component on focus event
         * @type {null}
         */
        this.onFocus = null;
        /**
         * Component on focus in event
         * @type {null}
         */
        this.onFocusIn = null;
        /**
         * Component on focus out event
         * @type {null}
         */
        this.onFocusOut = null;
        /**
         * Component on hover event
         * @type {null}
         */
        this.onHover = null;
        /**
         * Component on key down event
         * @type {null}
         */
        this.onKeyDown = null;
        /**
         * Component on key press event
         * @type {null}
         */
        this.onKeyPress = null;
        /**
         * Component on key up event
         * @type {null}
         */
        this.onKeyUp = null;
        /**
         * Component on mouse down event
         * @type {null}
         */
        this.onMouseDown = null;
        /**
         * Component on mouse enter event
         * @type {null}
         */
        this.onMouseEnter = null;
        /**
         * Component on mouse leave event
         * @type {null}
         */
        this.onMouseLeave = null;
        /**
         * Component on mouse move event
         * @type {null}
         */
        this.onMouseMove = null;
        /**
         * Component on mouse out event
         * @type {null}
         */
        this.onMouseOut = null;
        /**
         * Component on mouse up event
         * @type {null}
         */
        this.onMouseUp = null;
        /**
         * Component on resize event
         * @type {null}
         */
        this.onResize = null;
        /**
         * Component on scroll event
         * @type {null}
         */
        this.onScroll = null;
        /**
         * Component on submit event
         * @type {null}
         */
        this.onSubmit = null;
        /**
         * Component on unload event
         * @type {null}
         */
        this.onUnload = null;
        /**
         * Component on load event
         * @type {null}
         */
        this.onLoad = null;

        /**
         * Add component to page
         */
        window.UX.Page.addItem(this);
    }

    /**
     * Component init
     */


    _createClass(Component, [{
        key: 'init',
        value: function init() {

            if (this.isInitialized) {
                return;
            }

            window.UX.log('Component initialized ' + this.getId());

            /**
             * Render HTML code and insert into page
             */
            if ($('#' + this.getId()).length > 0) {
                $('#' + this.getId()).replaceWith(this.render());
            } else {
                // No dom element to replace, append to default container
                $(UX.defaultContainerId).append(this.render());
            }

            /**
             * Link event code
             */

            if (this.onClick != null) {
                $('#' + this.id).on('click', this.onClick);
            }

            if (this.onDblClick != null) {
                $('#' + this.id).on('dblclick', this.onDblClick);
            }

            if (this.onLoad != null) {
                $('#' + this.id).on('load', this.onLoad);
            }

            if (this.onUnload != null) {
                $('#' + this.id).on('unload', this.onUnload);
            }

            if (this.onSubmit != null) {
                $('#' + this.id).on('submit', this.onSubmit);
            }

            if (this.onScroll != null) {
                $('#' + this.id).on('scroll', this.onScroll);
            }

            if (this.onResize != null) {
                $('#' + this.id).on('resize', this.onResize);
            }

            if (this.onMouseUp != null) {
                $('#' + this.id).on('mouseup', this.onMouseUp);
            }

            if (this.onMouseOut != null) {
                $('#' + this.id).on('mouseout', this.onMouseOut);
            }

            if (this.onMouseMove != null) {
                $('#' + this.id).on('mousemove', this.onMouseMove);
            }

            if (this.onMouseLeave != null) {
                $('#' + this.id).on('mouseleave', this.onMouseLeave);
            }

            if (this.onMouseEnter != null) {
                $('#' + this.id).on('mouseenter', this.onMouseEnter);
            }

            if (this.onMouseDown != null) {
                $('#' + this.id).on('mousedown', this.onMouseDown);
            }

            if (this.onKeyUp != null) {
                $('#' + this.id).on('keyup', this.onKeyUp);
            }

            if (this.onKeyPress != null) {
                $('#' + this.id).on('keypress', this.onKeyPress);
            }

            if (this.onKeyDown != null) {
                $('#' + this.id).on('keydown', this.onKeyDown);
            }

            if (this.onHover != null) {
                $('#' + this.id).on('hover', this.onHover);
            }

            if (this.onFocusOut != null) {
                $('#' + this.id).on('focusout', this.onFocusOut);
            }

            if (this.onFocusIn != null) {
                $('#' + this.id).on('focusin', this.onFocusIn);
            }

            if (this.onFocus != null) {
                $('#' + this.id).on('focus', this.onFocus);
            }

            if (this.onChange != null) {
                $('#' + this.id).on('change', this.onChange);
            }

            if (this.onBlur != null) {
                $('#' + this.id).on('blur', this.onBlur);
            }

            if (this.onFocus != null) {
                $('#' + this.id).on('focus', this.onFocus);
            }

            if (this.onFocusIn != null) {
                $('#' + this.id).on('focusin', this.onFocusIn);
            }

            if (this.onFocusOut != null) {
                $('#' + this.id).on('focusout', this.onFocusOut);
            }

            if (this.onSelect != null) {
                $('#' + this.id).on('select', this.onSelect);
            }

            /**
             * Call post component generated event code
             */
            /**
             * Check if we have a decorator for this component
             */
            if (window.UX.libraries[window.UX.activeLibrary][this.componentClassName + 'Decorator'] != undefined) {
                var oDecorator = new window.UX.libraries[window.UX.activeLibrary][this.componentClassName + 'Decorator']();
                oDecorator.init(this);
            }

            this.isInitialized = true;
        }

        /**
         * Returns styles object
         * @returns {object}
         */

    }, {
        key: 'getStyles',
        value: function getStyles() {
            return this.styles;
        }

        /**
         * Adds a style to the component CSS
         * @param {string} sStyle
         */

    }, {
        key: 'addStyle',
        value: function addStyle(sStyle) {
            var aStyles = sStyle.split(';');
            for (var x in aStyles) {
                if (aStyles[x] != '') {
                    var aTokens = aStyles[x].split(':');
                    if (aTokens[0] != '') {
                        this.styles[aTokens[0]] = aTokens[1];
                    }
                }
            }
        }

        /**
         * Alias for addStyle
         * @param sStyle
         */

    }, {
        key: 'css',
        value: function css(sStyle) {
            return this.addStyle(sStyle);
        }

        /**
         * Returns style list
         * @returns {string|string}
         */

    }, {
        key: 'getStyleList',
        value: function getStyleList() {
            var sStyles = '';
            for (var x in this.styles) {
                sStyles = sStyles + x + ':' + this.styles[x] + ';';
            }
            return sStyles;
        }

        /**
         *
         * @returns {null}
         */

    }, {
        key: 'getStore',
        value: function getStore() {
            return this.store;
        }

        /**
         *
         * @param store
         * @returns {UX.Component}
         */

    }, {
        key: 'setStore',
        value: function setStore(store) {
            this.store = store;
            return this;
        }

        /**
         * Returns if component is enabled or not
         * @returns {boolean}
         */

    }, {
        key: 'getEnabled',
        value: function getEnabled() {
            return this.isEnabled;
        }

        /**
         * Sets if component is enabled or not
         * @param enabled
         * @returns {UX.Component}
         */

    }, {
        key: 'setEnabled',
        value: function setEnabled(enabled) {
            this.isEnabled = enabled;
            return this;
        }

        /**
         *
         * @returns {string}
         */

    }, {
        key: 'generateRandomId',
        value: function generateRandomId() {
            return 'UX' + Math.random().toString(36).substring(2, 6) + Math.random().toString(36).substring(2, 6);
        }

        /**
         * Returns component ID
         * @returns {*}
         */

    }, {
        key: 'getId',
        value: function getId() {
            return this.id;
        }

        /**
         * Sets component ID
         * @param id
         */

    }, {
        key: 'setId',
        value: function setId(id) {
            this.id = id;
        }

        /**
         * Returns component label
         * @returns {null}
         */

    }, {
        key: 'getLabel',
        value: function getLabel() {
            return this.label;
        }

        /**
         * Sets component label
         * @param label
         * @returns {UX.Component}
         */

    }, {
        key: 'setLabel',
        value: function setLabel(label) {
            this.label = label;
            return this;
        }

        /**
         * Returns component html template
         * @returns {null}
         */

    }, {
        key: 'getTemplate',
        value: function getTemplate() {
            return this.template;
        }

        /**
         * Sets component template
         * @param template
         * @returns {UX.Component}
         */

    }, {
        key: 'setTemplate',
        value: function setTemplate(template) {
            this.template = template;
            return this;
        }

        /**
         * Set component attribute
         * @param sAttrName
         * @param mValue
         * @returns {UX.Component}
         */

    }, {
        key: 'setAttribute',
        value: function setAttribute(sAttrName, mValue) {
            this.attributes[sAttrName] = mValue;
            return this;
        }

        /**
         * Alias for setAttribute
         * @param sAttrName
         * @param mValue
         * @returns {UX.Component}
         */

    }, {
        key: 'attr',
        value: function attr(sAttrName, mValue) {
            return this.setAttribute(sAttrName, mValue);
        }

        /**
         * Returns array of attributes
         * @returns {*}
         */

    }, {
        key: 'getAttributes',
        value: function getAttributes() {
            return this.attributes;
        }

        /**
         * Add a class to component, multiple classes must be separated by spaces
         * @param {string} sClassName The CSS classes to add to the component
         */

    }, {
        key: 'addClass',
        value: function addClass(sClassName) {
            var aClasses = sClassName.split(' ');
            for (var x in aClasses) {
                this.classes[aClasses[x]] = aClasses[x];
            }
            return this;
        }

        /**
         * Returns array of classes
         * @returns {*}
         */

    }, {
        key: 'getClasses',
        value: function getClasses() {
            return this.classes;
        }

        /**
         * Returns component value
         * @returns {null|*}
         */

    }, {
        key: 'getValue',
        value: function getValue() {
            this.value = $('#' + this.getId()).val();
            return this.value;
        }

        /**
         * Sets component value
         * @param mValue
         * @returns {UX.Component}
         */

    }, {
        key: 'setValue',
        value: function setValue(mValue) {

            this.value = mValue;

            $('#' + this.getId()).val(this.value);

            return this;
        }

        /**
         * Enables component
         * @returns {UX.Component}
         */

    }, {
        key: 'enable',
        value: function enable() {
            this.isEnabled = true;

            // Reset enable for initialized component
            if (this.isInitialized) {
                $('#' + this.getId()).prop('disabled', '');
            }

            return this;
        }

        /**
         * Disables component
         * @returns {UX.Component}
         */

    }, {
        key: 'disable',
        value: function disable() {
            this.isEnabled = false;

            // Reset enable for initialized component
            if (this.isInitialized) {
                $('#' + this.getId()).prop('disabled', 'disabled');
            }

            return this;
        }

        /**
         * Returns placeholder text
         * @returns {null}
         */

    }, {
        key: 'getPlaceholder',
        value: function getPlaceholder() {
            return this.placeholder;
        }

        /**
         * Sets placeholder text
         * @param placeholder
         * @returns {UX.Component}
         */

    }, {
        key: 'setPlaceholder',
        value: function setPlaceholder(placeholder) {
            this.placeholder = placeholder;

            // Reset placeholder for initialized component
            if (this.isInitialized) {
                $('#' + this.getId()).attr('placeholder', placeholder);
            }

            return this;
        }

        /**
         * Returns classes list as a string
         * @returns {string|string}
         */

    }, {
        key: 'getClassList',
        value: function getClassList() {
            var sClasses = '';
            for (var x in this.classes) {
                if (sClasses != '') {
                    sClasses = sClasses + ' ';
                }
                sClasses = sClasses + x;
            }
            return sClasses;
        }

        /**
         * Returns string of component attributes
         * @returns {string|string}
         */

    }, {
        key: 'getAttributeList',
        value: function getAttributeList() {

            var sAttributes = '';

            for (var x in this.attributes) {
                if (sAttributes != '') {
                    sAttributes = sAttributes + ' ';
                }
                sAttributes = sAttributes + x + '="' + this.attributes[x] + '"';
            }

            return sAttributes;
        }

        /**
         * Render component and returns HTML string
         */

    }, {
        key: 'render',
        value: function render() {

            /**
             * Cheks if component requires a specific library
             */
            if (this.requiresLibrary != null && this.requiresLibrary != UX.activeLibrary) {
                console.warn('Component ' + this.getId() + ' requires library ' + this.requiresLibrary);
            }

            /**
             * Check if we have a decorator for this component
             */
            if (window.UX.libraries[window.UX.activeLibrary][this.componentClassName + 'Decorator'] != undefined) {
                var oDecorator = new window.UX.libraries[window.UX.activeLibrary][this.componentClassName + 'Decorator']();
                oDecorator.decorate(this);
                window.UX.log('Found decorator for component ' + window.UX.activeLibrary + ' ' + this.componentClassName);
            } else {
                window.UX.log('No decorator for component ' + window.UX.activeLibrary + ' ' + this.componentClassName);
            }

            /**
             * Load template, set attributes, replace
             */
            var sComponentHTML = this.template;

            this.setAttribute('id', this.id);
            this.setAttribute('name', this.name);

            if (this.getClassList() != '') {
                this.setAttribute('class', this.getClassList());
            }

            if (this.getStyleList() != '') {
                this.setAttribute('style', this.getStyleList());
            }

            if (this.placeholder != null && this.placeholder != '') {
                this.setAttribute('placeholder', this.placeholder);
            }

            /**
             * Build attribute code
             * ALL CHANGES TO ATTRIBUTES MUST BE MADE BEFORE THIS
             */
            var sAttributes = this.getAttributeList();

            sComponentHTML = sComponentHTML.replace(/{attributes}/g, sAttributes);

            /**
             * For each property of component , replace key in template
             */
            var keys = Object.keys(this);
            for (var x in keys) {
                var oRegExp = new RegExp('\{' + keys[x] + '\}', 'g');
                if (this[keys[x]] != null) {
                    sComponentHTML = sComponentHTML.replace(oRegExp, this[keys[x]]);
                } else {
                    sComponentHTML = sComponentHTML.replace(oRegExp, '');
                }
            }

            return sComponentHTML;
        }
    }]);

    return Component;
}();

exports.Component = Component;

/***/ }),

/***/ "./src/componentcontainer.js":
/*!***********************************!*\
  !*** ./src/componentcontainer.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ComponentContainer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _component = __webpack_require__(/*! ./component.js */ "./src/component.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component container, allows to add multiple child components
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 */
var ComponentContainer = function (_Component) {
    _inherits(ComponentContainer, _Component);

    function ComponentContainer(id) {
        _classCallCheck(this, ComponentContainer);

        var _this = _possibleConstructorReturn(this, (ComponentContainer.__proto__ || Object.getPrototypeOf(ComponentContainer)).call(this, id));

        _this.items = [];
        return _this;
    }

    /**
     * Render container components and returns HTML string
     */


    _createClass(ComponentContainer, [{
        key: 'render',
        value: function render() {

            var sChildItems = '';

            if (this.getLabel()) {
                sChildItems = sChildItems + this.getLabel();
            }

            for (var x in this.items) {
                sChildItems = sChildItems + this.items[x].render();
            }

            var sHtml = _get(ComponentContainer.prototype.__proto__ || Object.getPrototypeOf(ComponentContainer.prototype), 'render', this).call(this);
            sHtml = sHtml.replace(/{child_items}/g, sChildItems);

            return sHtml;
        }

        /**
         * Returns list of comonents
         * @returns {Array}
         */

    }, {
        key: 'getItems',
        value: function getItems() {
            return this.items;
        }

        /**
         * Adds a child component to this container
         * @param item
         * @returns {UX.Container}
         */

    }, {
        key: 'addItem',
        value: function addItem(item) {

            // Set item parent to this container item
            item.parent = this;
            this.items[this.items.length] = item;

            // Remove from main component item list, since this component is a child component
            window.UX.Page.removeItem(item.getId());

            return item;
        }
    }]);

    return ComponentContainer;
}(_component.Component);

exports.ComponentContainer = ComponentContainer;

/***/ }),

/***/ "./src/components/Alert.js":
/*!*********************************!*\
  !*** ./src/components/Alert.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Alert = exports.ALERT_DARK = exports.ALERT_LIGHT = exports.ALERT_INFO = exports.ALERT_WARNING = exports.ALERT_DANGER = exports.ALERT_SUCCESS = exports.ALERT_SECONDARY = exports.ALERT_PRIMARY = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(/*! ../component.js */ "./src/component.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Primary alert type, bootstrap 4
 * @type {string}
 */
var ALERT_PRIMARY = exports.ALERT_PRIMARY = "alert-primary";
/**
 * Secondary alert type, bootstrap 4
 * @type {string}
 */
var ALERT_SECONDARY = exports.ALERT_SECONDARY = "alert-secondary";
/**
 * Success alert type, bootstrap 4
 * @type {string}
 */
var ALERT_SUCCESS = exports.ALERT_SUCCESS = "alert-success";
/**
 * Danger alert type, bootstrap 4
 * @type {string}
 */
var ALERT_DANGER = exports.ALERT_DANGER = "alert-danger";
/**
 * Warning alert type, bootstrap 4
 * @type {string}
 */
var ALERT_WARNING = exports.ALERT_WARNING = "alert-warning";
/**
 * Info alert type, bootstrap 4
 * @type {string}
 */
var ALERT_INFO = exports.ALERT_INFO = "alert-info";
/**
 * Light alert type, bootstrap 4
 * @type {string}
 */
var ALERT_LIGHT = exports.ALERT_LIGHT = "alert-light";
/**
 * Dark alert type, bootstrap 4
 * @type {string}
 */
var ALERT_DARK = exports.ALERT_DARK = "alert-dark";

/**
 * Alert component
 * Displays an alert message to user
 *
 * @version     0.1
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 */
var Alert = function (_Component) {
    _inherits(Alert, _Component);

    /**
     * Alert component constructor
     * @param {string} id Unique ID for component
     */
    function Alert(id) {
        _classCallCheck(this, Alert);

        var _this = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, id));

        _this.title = null;
        _this.isDismissible = false;
        _this.template = '<div {attributes}>{icon}{title}{label}</div>';
        _this.componentClassName = 'Alert';
        _this.alertType = ALERT_PRIMARY;

        return _this;
    }

    /**
     * Returns component meta data
     * @returns {object}
     */


    _createClass(Alert, [{
        key: "getIsDismissible",


        /**
         * Returns if we can dismiss the alert component
         * @returns {boolean}
         */
        value: function getIsDismissible() {
            return this.isDismissible;
        }

        /**
         * Returns if the alert component can be dismissed or not
         * @param {boolean} isDismissible If the alert can be dismissed or not
         * @returns {UX.Alert}
         */

    }, {
        key: "setIsDismissable",
        value: function setIsDismissable(isDismissible) {
            this.isDismissible = isDismissible;
            return this;
        }

        /**
         * Returns alert title
         * @returns {string} The title of the alert component
         */

    }, {
        key: "getTitle",
        value: function getTitle() {
            return this.title;
        }

        /**
         * Sets alert title, if title is not null, the title will b displayed within the alert component
         * @param {string} title The title of the alert component
         * @returns {UX.Alert}
         */

    }, {
        key: "setTitle",
        value: function setTitle(title) {
            this.title = title;
            return this;
        }

        /**
         * Returns alert type (warning, success, ...) for alert component
         * @returns {string}
         */

    }, {
        key: "getAlertType",
        value: function getAlertType() {
            return this.alertType;
        }

        /**
         * Sets alert type (warning, success, ...) for alert component
         * @param alertType
         * @returns {UX.Alert}
         */

    }, {
        key: "setAlertType",
        value: function setAlertType(alertType) {
            this.alertType = alertType;
            return this;
        }

        /**
         * Closes an alert
         */

    }, {
        key: "close",
        value: function close() {
            $('#' + this.getId()).hide();
        }
    }], [{
        key: "getMetaData",
        value: function getMetaData() {

            /**
             * Static
             * Component meta data information
             * category is one of layout | content | component
             * @type {object}
             */
            return {
                name: 'Alert',
                description: 'Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.',
                category: 'component',
                libraries: {
                    Bootstrap_4: {
                        supported: true,
                        comments: ''
                    },
                    Html5: {
                        supported: false,
                        comments: ''
                    }
                },
                example: 'let container = new UX.Container(\'name\');',
                codepen: [{
                    user: 'bgauthier555',
                    slug: 'zQjaeK',
                    title: 'Alert component example',
                    height: 500
                }]
            };
        }
    }]);

    return Alert;
}(_component.Component);

exports.Alert = Alert;

/***/ }),

/***/ "./src/components/Anchor.js":
/*!**********************************!*\
  !*** ./src/components/Anchor.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Anchor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _componentcontainer = __webpack_require__(/*! ../componentcontainer.js */ "./src/componentcontainer.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Anchor component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 */
var Anchor = function (_ComponentContainer) {
    _inherits(Anchor, _ComponentContainer);

    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Anchor(id) {
        _classCallCheck(this, Anchor);

        var _this = _possibleConstructorReturn(this, (Anchor.__proto__ || Object.getPrototypeOf(Anchor)).call(this, id));

        _this.template = '<a {attributes}>{child_items}</a>';
        _this.componentClassName = 'Anchor';

        return _this;
    }

    /**
     * Returns component meta data
     * @returns {object}
     */


    _createClass(Anchor, null, [{
        key: 'getMetaData',
        value: function getMetaData() {

            /**
             * Static
             * Component meta data information
             * category is one of layout | content | component
             * @type {object}
             */
            return {
                name: 'Anchor',
                description: '',
                category: 'content',
                libraries: {
                    Bootstrap_4: {
                        supported: true,
                        comments: ''
                    },
                    Html5: {
                        supported: true,
                        comments: ''
                    }
                },
                example: 'let container = new UX.Anchor(\'name\');'
            };
        }
    }]);

    return Anchor;
}(_componentcontainer.ComponentContainer);

exports.Anchor = Anchor;

/***/ }),

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Button = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _componentcontainer = __webpack_require__(/*! ../componentcontainer.js */ "./src/componentcontainer.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Button component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 */
var Button = function (_ComponentContainer) {
    _inherits(Button, _ComponentContainer);

    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Button(id) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, id));

        _this.template = '<button {attributes}>{child_items}</button>';
        _this.componentClassName = 'Button';

        return _this;
    }

    /**
     * Returns component meta data
     * @returns {object}
     */


    _createClass(Button, null, [{
        key: 'getMetaData',
        value: function getMetaData() {

            /**
             * Static
             * Component meta data information
             * category is one of layout | content | component
             * @type {object}
             */
            return {
                name: 'Button',
                description: '',
                category: 'component',
                libraries: {
                    Bootstrap_4: {
                        supported: true,
                        comments: ''
                    },
                    Html5: {
                        supported: true,
                        comments: ''
                    }
                },
                example: 'let container = new UX.Button(\'name\');'
            };
        }
    }]);

    return Button;
}(_componentcontainer.ComponentContainer);

exports.Button = Button;

/***/ }),

/***/ "./src/components/Checkbox.js":
/*!************************************!*\
  !*** ./src/components/Checkbox.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Checkbox = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Input2 = __webpack_require__(/*! ./Input.js */ "./src/components/Input.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Checkbox component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 */
var Checkbox = function (_Input) {
    _inherits(Checkbox, _Input);

    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Checkbox(id) {
        _classCallCheck(this, Checkbox);

        var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, id));

        _this.type = 'checkbox';
        _this.componentClassName = 'Checkbox';

        return _this;
    }

    /**
     * Returns component meta data
     * @returns {object}
     */


    _createClass(Checkbox, null, [{
        key: 'getMetaData',
        value: function getMetaData() {

            /**
             * Static
             * Component meta data information
             * category is one of layout | content | component
             * @type {object}
             */
            return {
                name: 'Checkbox',
                description: '',
                category: 'component',
                libraries: {
                    Bootstrap_4: {
                        supported: true,
                        comments: ''
                    },
                    Html5: {
                        supported: true,
                        comments: ''
                    }
                },
                example: 'let container = new UX.Checkbox(\'name\');'
            };
        }
    }]);

    return Checkbox;
}(_Input2.Input);

exports.Checkbox = Checkbox;

/***/ }),

/***/ "./src/components/Column.js":
/*!**********************************!*\
  !*** ./src/components/Column.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Column = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _componentcontainer = __webpack_require__(/*! ../componentcontainer.js */ "./src/componentcontainer.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Column component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 */
var Column = function (_ComponentContainer) {
    _inherits(Column, _ComponentContainer);

    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Column(id) {
        _classCallCheck(this, Column);

        var _this = _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).call(this, id));

        _this.size = null;

        _this.template = '<div {attributes}>{child_items}</div>';
        _this.componentClassName = 'Column';

        return _this;
    }

    /**
     * Returns component meta data
     * @returns {object}
     */


    _createClass(Column, [{
        key: 'getSize',


        /**
         *
         * @returns {null}
         */
        value: function getSize() {
            return this.size;
        }

        /**
         *
         * @param size
         * @returns {Column}
         */

    }, {
        key: 'setSize',
        value: function setSize(size) {
            this.size = size;
            return this;
        }
    }], [{
        key: 'getMetaData',
        value: function getMetaData() {

            /**
             * Static
             * Component meta data information
             * category is one of layout | content | component
             * @type {object}
             */
            return {
                name: 'Column',
                description: 'Column classes indicate the number of columns you’d like to use out of the possible 12 per row.',
                category: 'layout',
                libraries: {
                    Bootstrap_4: {
                        supported: true,
                        comments: ''
                    },
                    Html5: {
                        supported: false,
                        comments: ''
                    }
                },
                example: 'let col = new UX.Column(\'name\');'
            };
        }
    }]);

    return Column;
}(_componentcontainer.ComponentContainer);

exports.Column = Column;

/***/ }),

/***/ "./src/components/Container.js":
/*!*************************************!*\
  !*** ./src/components/Container.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Container = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _componentcontainer = __webpack_require__(/*! ../componentcontainer.js */ "./src/componentcontainer.js");

var _Row = __webpack_require__(/*! ./Row */ "./src/components/Row.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * container component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 */
var Container = function (_ComponentContainer) {
    _inherits(Container, _ComponentContainer);

    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Container(id) {
        _classCallCheck(this, Container);

        var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, id));

        _this.isFluid = false;

        _this.template = '<div {attributes}>{child_items}</div>';
        _this.componentClassName = 'Container';

        return _this;
    }

    /**
     *
     * @returns {boolean}
     */


    _createClass(Container, [{
        key: 'getIsFluid',
        value: function getIsFluid() {
            return this.isFluid;
        }

        /**
         *
         * @param isFluid
         * @returns {Container}
         */

    }, {
        key: 'setIsFluid',
        value: function setIsFluid(isFluid) {
            this.isFluid = isFluid;
            return this;
        }

        /**
         * Returns component meta data
         * @returns {object}
         */

    }, {
        key: 'addRow',


        /**
         * Add a row to the container
         * @param id
         * @returns {UX.Container}
         */
        value: function addRow(id) {
            return this.addItem(new _Row.Row(id));
        }
    }], [{
        key: 'getMetaData',
        value: function getMetaData() {

            /**
             * Static
             * Component meta data information
             * category is one of layout | content | component
             * @type {object}
             */
            return {
                name: 'Container',
                description: 'Containers are the most basic layout element and are required when using our default grid system. Choose from a responsive, fixed-width container.',
                category: 'layout',
                libraries: {
                    Bootstrap_4: {
                        supported: true,
                        comments: ''
                    },
                    Html5: {
                        supported: false,
                        comments: ''
                    }
                },
                example: 'let container = new UX.Container(\'name\');\n' + 'container.setIsFluid(true);\n\n' + 'let mainRow = container.addRow(\'mainRow\');\n\n' + 'mainRow.addColumn(\'colLeft\',6);\n' + 'mainRow.addColumn(\'colRight\',6);\n'
            };
        }
    }]);

    return Container;
}(_componentcontainer.ComponentContainer);

exports.Container = Container;

/***/ }),

/***/ "./src/components/Div.js":
/*!*******************************!*\
  !*** ./src/components/Div.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Div = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _componentcontainer = __webpack_require__(/*! ../componentcontainer.js */ "./src/componentcontainer.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Div component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 */
var Div = function (_ComponentContainer) {
    _inherits(Div, _ComponentContainer);

    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Div(id) {
        _classCallCheck(this, Div);

        var _this = _possibleConstructorReturn(this, (Div.__proto__ || Object.getPrototypeOf(Div)).call(this, id));

        _this.template = '<div {attributes}>{child_items}</div>';
        _this.componentClassName = 'Div';

        return _this;
    }

    /**
     * Returns component meta data
     * @returns {object}
     */


    _createClass(Div, null, [{
        key: 'getMetaData',
        value: function getMetaData() {

            /**
             * Static
             * Component meta data information
             * category is one of layout | content | component
             * @type {object}
             */
            return {
                name: 'Div',
                description: '',
                category: 'content',
                libraries: {
                    Bootstrap_4: {
                        supported: true,
                        comments: ''
                    },
                    Html5: {
                        supported: true,
                        comments: ''
                    }
                },
                example: 'let container = new UX.Div(\'name\');'
            };
        }
    }]);

    return Div;
}(_componentcontainer.ComponentContainer);

exports.Div = Div;

/***/ }),

/***/ "./src/components/Heading.js":
/*!***********************************!*\
  !*** ./src/components/Heading.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Heading = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _componentcontainer = __webpack_require__(/*! ../componentcontainer.js */ "./src/componentcontainer.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Heading component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 */
var Heading = function (_ComponentContainer) {
    _inherits(Heading, _ComponentContainer);

    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Heading(id) {
        _classCallCheck(this, Heading);

        var _this = _possibleConstructorReturn(this, (Heading.__proto__ || Object.getPrototypeOf(Heading)).call(this, id));

        _this.level = 1;

        _this.template = '<h{level} {attributes}>{child_items}</h{level}>';
        _this.componentClassName = 'Heading';

        return _this;
    }

    /**
     * Returns component meta data
     * @returns {object}
     */


    _createClass(Heading, [{
        key: 'getLevel',


        /**
         * Get heading level (1-6)
         * @returns {number}
         */
        value: function getLevel() {
            return this.level;
        }

        /**
         * Set heading level (1-6)
         * @param level
         * @returns {UX.Heading}
         */

    }, {
        key: 'setLevel',
        value: function setLevel(level) {
            this.level = level;
            return this;
        }
    }], [{
        key: 'getMetaData',
        value: function getMetaData() {

            /**
             * Static
             * Component meta data information
             * category is one of layout | content | component
             * @type {object}
             */
            return {
                name: 'Heading',
                description: 'Heading element h1 to h6',
                category: 'content',
                libraries: {
                    Bootstrap_4: {
                        supported: true,
                        comments: ''
                    },
                    Html5: {
                        supported: true,
                        comments: ''
                    }
                },
                example: 'let container = new UX.Heading(\'name\');'
            };
        }
    }]);

    return Heading;
}(_componentcontainer.ComponentContainer);

exports.Heading = Heading;

/***/ }),

/***/ "./src/components/Input.js":
/*!*********************************!*\
  !*** ./src/components/Input.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Input = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _component = __webpack_require__(/*! ../component.js */ "./src/component.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Input control
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 */
var Input = function (_Component) {
    _inherits(Input, _Component);

    /**
     *
     * @param id
     */
    function Input(id) {
        _classCallCheck(this, Input);

        var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, id));

        _this.template = '<input {attributes}/>';
        _this.type = 'text';
        _this.componentClassName = 'Input';

        return _this;
    }

    /**
     * Returns component meta data
     * @returns {object}
     */


    _createClass(Input, [{
        key: 'setType',


        /**
         *
         * @param type
         * @returns {Input}
         */
        value: function setType(type) {
            this.type = type;
            return this;
        }

        /**
         *
         * @returns {string}
         */

    }, {
        key: 'getType',
        value: function getType() {
            return this.type;
        }

        /**
         *
         * @returns {null}
         */

    }, {
        key: 'render',
        value: function render() {
            this.setAttribute('type', this.type);
            return _get(Input.prototype.__proto__ || Object.getPrototypeOf(Input.prototype), 'render', this).call(this);
        }
    }], [{
        key: 'getMetaData',
        value: function getMetaData() {

            /**
             * Static
             * Component meta data information
             * category is one of layout | content | component
             * @type {object}
             */
            return {
                name: 'Input',
                description: 'Input field',
                category: 'component',
                libraries: {
                    Bootstrap_4: {
                        supported: true,
                        comments: ''
                    },
                    Html5: {
                        supported: true,
                        comments: ''
                    }
                },
                example: 'let container = new UX.Input(\'name\');',
                codepen: [{
                    user: 'bgauthier555',
                    slug: 'VOxBvx',
                    title: 'Input component example',
                    height: 400
                }]
            };
        }
    }]);

    return Input;
}(_component.Component);

exports.Input = Input;

/***/ }),

/***/ "./src/components/Li.js":
/*!******************************!*\
  !*** ./src/components/Li.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Li = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _componentcontainer = __webpack_require__(/*! ../componentcontainer.js */ "./src/componentcontainer.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Li component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 */
var Li = function (_ComponentContainer) {
    _inherits(Li, _ComponentContainer);

    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Li(id) {
        _classCallCheck(this, Li);

        var _this = _possibleConstructorReturn(this, (Li.__proto__ || Object.getPrototypeOf(Li)).call(this, id));

        _this.template = '<li {attributes}>{child_items}</li>';
        _this.componentClassName = 'Li';

        return _this;
    }

    /**
     * Returns component meta data
     * @returns {object}
     */


    _createClass(Li, null, [{
        key: 'getMetaData',
        value: function getMetaData() {

            /**
             * Static
             * Component meta data information
             * category is one of layout | content | component
             * @type {object}
             */
            return {
                name: 'Li',
                description: '',
                category: 'content',
                libraries: {
                    Bootstrap_4: {
                        supported: true,
                        comments: ''
                    },
                    Html5: {
                        supported: true,
                        comments: ''
                    }
                },
                example: 'let container = new UX.Li(\'name\');'
            };
        }
    }]);

    return Li;
}(_componentcontainer.ComponentContainer);

exports.Li = Li;

/***/ }),

/***/ "./src/components/Ol.js":
/*!******************************!*\
  !*** ./src/components/Ol.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ol = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _componentcontainer = __webpack_require__(/*! ../componentcontainer.js */ "./src/componentcontainer.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Ol component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 */
var Ol = function (_ComponentContainer) {
    _inherits(Ol, _ComponentContainer);

    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Ol(id) {
        _classCallCheck(this, Ol);

        var _this = _possibleConstructorReturn(this, (Ol.__proto__ || Object.getPrototypeOf(Ol)).call(this, id));

        _this.template = '<ol {attributes}>{child_items}</ol>';
        _this.componentClassName = 'Ol';

        return _this;
    }

    /**
     * Returns component meta data
     * @returns {object}
     */


    _createClass(Ol, null, [{
        key: 'getMetaData',
        value: function getMetaData() {

            /**
             * Static
             * Component meta data information
             * category is one of layout | content | component
             * @type {object}
             */
            return {
                name: 'Ol',
                description: '',
                category: 'content',
                libraries: {
                    Bootstrap_4: {
                        supported: true,
                        comments: ''
                    },
                    Html5: {
                        supported: true,
                        comments: ''
                    }
                },
                example: 'let container = new UX.Ol(\'name\');'
            };
        }
    }]);

    return Ol;
}(_componentcontainer.ComponentContainer);

exports.Ol = Ol;

/***/ }),

/***/ "./src/components/Paragraph.js":
/*!*************************************!*\
  !*** ./src/components/Paragraph.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Paragraph = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _componentcontainer = __webpack_require__(/*! ../componentcontainer.js */ "./src/componentcontainer.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Paragraph component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 */
var Paragraph = function (_ComponentContainer) {
    _inherits(Paragraph, _ComponentContainer);

    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Paragraph(id) {
        _classCallCheck(this, Paragraph);

        var _this = _possibleConstructorReturn(this, (Paragraph.__proto__ || Object.getPrototypeOf(Paragraph)).call(this, id));

        _this.template = '<p {attributes}>{child_items}</p>';
        _this.componentClassName = 'Paragraph';

        return _this;
    }

    /**
     * Returns component meta data
     * @returns {object}
     */


    _createClass(Paragraph, null, [{
        key: 'getMetaData',
        value: function getMetaData() {

            /**
             * Static
             * Component meta data information
             * category is one of layout | content | component
             * @type {object}
             */
            return {
                name: 'Paragraph',
                description: '',
                category: 'content',
                libraries: {
                    Bootstrap_4: {
                        supported: true,
                        comments: ''
                    },
                    Html5: {
                        supported: true,
                        comments: ''
                    }
                },
                example: 'let container = new UX.Paragraph(\'name\');'
            };
        }
    }]);

    return Paragraph;
}(_componentcontainer.ComponentContainer);

exports.Paragraph = Paragraph;

/***/ }),

/***/ "./src/components/Password.js":
/*!************************************!*\
  !*** ./src/components/Password.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Password = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Input2 = __webpack_require__(/*! ./Input.js */ "./src/components/Input.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Password control
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @type {UX.Password}
 */
var Password = function (_Input) {
    _inherits(Password, _Input);

    function Password(id) {
        _classCallCheck(this, Password);

        var _this = _possibleConstructorReturn(this, (Password.__proto__ || Object.getPrototypeOf(Password)).call(this, id));

        _this.type = 'password';
        return _this;
    }

    /**
     * Returns component meta data
     * @returns {object}
     */


    _createClass(Password, null, [{
        key: 'getMetaData',
        value: function getMetaData() {

            /**
             * Static
             * Component meta data information
             * category is one of layout | content | component
             * @type {object}
             */
            return {
                name: 'Password',
                description: '',
                category: 'component',
                libraries: {
                    Bootstrap_4: {
                        supported: true,
                        comments: ''
                    },
                    Html5: {
                        supported: true,
                        comments: ''
                    }
                },
                example: 'let container = new UX.Password(\'name\');'
            };
        }
    }]);

    return Password;
}(_Input2.Input);

exports.Password = Password;

/***/ }),

/***/ "./src/components/Pre.js":
/*!*******************************!*\
  !*** ./src/components/Pre.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pre = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _componentcontainer = __webpack_require__(/*! ../componentcontainer.js */ "./src/componentcontainer.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Pre component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 */
var Pre = function (_ComponentContainer) {
    _inherits(Pre, _ComponentContainer);

    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Pre(id) {
        _classCallCheck(this, Pre);

        var _this = _possibleConstructorReturn(this, (Pre.__proto__ || Object.getPrototypeOf(Pre)).call(this, id));

        _this.template = '<pre {attributes}>{child_items}</pre>';
        _this.componentClassName = 'Pre';

        return _this;
    }

    /**
     * Returns component meta data
     * @returns {object}
     */


    _createClass(Pre, null, [{
        key: 'getMetaData',
        value: function getMetaData() {

            /**
             * Static
             * Component meta data information
             * category is one of layout | content | component
             * @type {object}
             */
            return {
                name: 'Pre',
                description: '',
                category: 'content',
                libraries: {
                    Bootstrap_4: {
                        supported: true,
                        comments: ''
                    },
                    Html5: {
                        supported: true,
                        comments: ''
                    }
                },
                example: 'let container = new UX.Pre(\'name\');'
            };
        }
    }]);

    return Pre;
}(_componentcontainer.ComponentContainer);

exports.Pre = Pre;

/***/ }),

/***/ "./src/components/Row.js":
/*!*******************************!*\
  !*** ./src/components/Row.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Row = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _componentcontainer = __webpack_require__(/*! ../componentcontainer.js */ "./src/componentcontainer.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Row component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 */
var Row = function (_ComponentContainer) {
    _inherits(Row, _ComponentContainer);

    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Row(id) {
        _classCallCheck(this, Row);

        var _this = _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).call(this, id));

        _this.template = '<div {attributes}>{child_items}</div>';
        _this.componentClassName = 'Row';

        return _this;
    }

    /**
     * Returns component meta data
     * @returns {object}
     */


    _createClass(Row, [{
        key: 'addColumn',


        /**
         * Adds a column to the row
         * @param id
         * @param size
         * @returns {*}
         */
        value: function addColumn(id, size) {
            var oItem = new UX.Column(id);
            oItem.setSize(size);
            this.addItem(oItem);
            return oItem;
        }
    }], [{
        key: 'getMetaData',
        value: function getMetaData() {

            /**
             * Static
             * Component meta data information
             * category is one of layout | content | component
             * @type {object}
             */
            return {
                name: 'Row',
                description: 'Rows are wrappers for columns.',
                category: 'layout',
                libraries: {
                    Bootstrap_4: {
                        supported: true,
                        comments: ''
                    },
                    Html5: {
                        supported: false,
                        comments: ''
                    }
                },
                example: 'let row = new UX.Row(\'name\');'
            };
        }
    }]);

    return Row;
}(_componentcontainer.ComponentContainer);

exports.Row = Row;

/***/ }),

/***/ "./src/components/Select.js":
/*!**********************************!*\
  !*** ./src/components/Select.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Select = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _component = __webpack_require__(/*! ../component.js */ "./src/component.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Select list control
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 */
var Select = function (_Component) {
    _inherits(Select, _Component);

    /**
     *
     * @param id
     */
    function Select(id) {
        _classCallCheck(this, Select);

        var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, id));

        _this.store = new UX.Store();

        _this.template = '<select {attributes}>\n' + '{options}';
        '</select>';
        _this.componentClassName = 'Select';

        return _this;
    }

    /**
     * Returns component meta data
     * @returns {object}
     */


    _createClass(Select, [{
        key: 'render',


        /**
         *
         * @returns {null}
         */
        value: function render() {
            return _get(Select.prototype.__proto__ || Object.getPrototypeOf(Select.prototype), 'render', this).call(this);
        }
    }], [{
        key: 'getMetaData',
        value: function getMetaData() {

            /**
             * Static
             * Component meta data information
             * category is one of layout | content | component
             * @type {object}
             */
            return {
                name: 'Select',
                description: '',
                category: 'component',
                libraries: {
                    Bootstrap_4: {
                        supported: true,
                        comments: ''
                    },
                    Html5: {
                        supported: true,
                        comments: ''
                    }
                },
                example: 'let container = new UX.Select(\'name\');'
            };
        }
    }]);

    return Select;
}(_component.Component);

exports.Select = Select;

/***/ }),

/***/ "./src/components/Store.js":
/*!*********************************!*\
  !*** ./src/components/Store.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Data store
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 */
var Store = function () {
    function Store() {
        _classCallCheck(this, Store);

        this.data = [];
        this.model = {};
    }

    /**
     * Returns component meta data
     * @returns {object}
     */


    _createClass(Store, null, [{
        key: 'getMetaData',
        value: function getMetaData() {

            /**
             * Static
             * Component meta data information
             * category is one of layout | content | component
             * @type {object}
             */
            return {
                name: 'Store',
                description: '',
                category: 'component',
                libraries: {
                    Bootstrap_4: {
                        supported: true,
                        comments: ''
                    },
                    Html5: {
                        supported: true,
                        comments: ''
                    }
                },
                example: 'let container = new UX.Button(\'name\');'
            };
        }
    }]);

    return Store;
}();

exports.Store = Store;

/***/ }),

/***/ "./src/components/TextArea.js":
/*!************************************!*\
  !*** ./src/components/TextArea.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TextArea = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _component = __webpack_require__(/*! ../component.js */ "./src/component.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * TextArea control
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 */
var TextArea = function (_Component) {
    _inherits(TextArea, _Component);

    /**
     *
     * @param id
     */
    function TextArea(id) {
        _classCallCheck(this, TextArea);

        var _this = _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call(this, id));

        _this.template = '<textarea {attributes}>\n' + '{value}';
        '</textarea>';
        _this.componentClassName = 'TextArea';

        return _this;
    }

    /**
     * Returns component meta data
     * @returns {object}
     */


    _createClass(TextArea, [{
        key: 'render',


        /**
         *
         * @returns {null}
         */
        value: function render() {
            return _get(TextArea.prototype.__proto__ || Object.getPrototypeOf(TextArea.prototype), 'render', this).call(this);
        }
    }], [{
        key: 'getMetaData',
        value: function getMetaData() {

            /**
             * Static
             * Component meta data information
             * category is one of layout | content | component
             * @type {object}
             */
            return {
                name: 'TextArea',
                description: '',
                category: 'component',
                libraries: {
                    Bootstrap_4: {
                        supported: true,
                        comments: ''
                    },
                    Html5: {
                        supported: true,
                        comments: ''
                    }
                },
                example: 'let container = new UX.TextArea(\'name\');'
            };
        }
    }]);

    return TextArea;
}(_component.Component);

exports.TextArea = TextArea;

/***/ }),

/***/ "./src/components/Ul.js":
/*!******************************!*\
  !*** ./src/components/Ul.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ul = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _componentcontainer = __webpack_require__(/*! ../componentcontainer.js */ "./src/componentcontainer.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Ol component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 */
var Ul = function (_ComponentContainer) {
    _inherits(Ul, _ComponentContainer);

    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Ul(id) {
        _classCallCheck(this, Ul);

        var _this = _possibleConstructorReturn(this, (Ul.__proto__ || Object.getPrototypeOf(Ul)).call(this, id));

        _this.template = '<ul {attributes}>{child_items}</ul>';
        _this.componentClassName = 'Ul';

        return _this;
    }

    /**
     * Returns component meta data
     * @returns {object}
     */


    _createClass(Ul, null, [{
        key: 'getMetaData',
        value: function getMetaData() {

            /**
             * Static
             * Component meta data information
             * category is one of layout | content | component
             * @type {object}
             */
            return {
                name: 'Ul',
                description: '',
                category: 'content',
                libraries: {
                    Bootstrap_4: {
                        supported: true,
                        comments: ''
                    },
                    Html5: {
                        supported: true,
                        comments: ''
                    }
                },
                example: 'let container = new UX.Ul(\'name\');'
            };
        }
    }]);

    return Ul;
}(_componentcontainer.ComponentContainer);

exports.Ul = Ul;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialize = exports.Semantic24_TextAreaDecorator = exports.Semantic24_InputDecorator = exports.Semantic24_AlertDecorator = exports.Bootstrap4_ButtonDecorator = exports.Bootstrap4_TextAreaDecorator = exports.Bootstrap4_RowDecorator = exports.Bootstrap4_InputDecorator = exports.Bootstrap4_ColumnDecorator = exports.Bootstrap4_AlertDecorator = exports.TextArea = exports.Store = exports.Select = exports.Row = exports.Pre = exports.Password = exports.Paragraph = exports.Li = exports.Ul = exports.Ol = exports.Heading = exports.Div = exports.Column = exports.Checkbox = exports.Container = exports.Button = exports.Anchor = exports.ALERT_WARNING = exports.ALERT_SUCCESS = exports.ALERT_LIGHT = exports.ALERT_INFO = exports.ALERT_DARK = exports.ALERT_DANGER = exports.ALERT_SECONDARY = exports.ALERT_PRIMARY = exports.Alert = exports.Input = exports.ComponentContainer = exports.Component = exports.Page = exports.Decorator = undefined;

var _Decorator = __webpack_require__(/*! ./Decorator.js */ "./src/Decorator.js");

var _Page = __webpack_require__(/*! ./Page.js */ "./src/Page.js");

var _component = __webpack_require__(/*! ./component.js */ "./src/component.js");

var _componentcontainer = __webpack_require__(/*! ./componentcontainer.js */ "./src/componentcontainer.js");

var _Input = __webpack_require__(/*! ./components/Input.js */ "./src/components/Input.js");

var _Alert = __webpack_require__(/*! ./components/Alert.js */ "./src/components/Alert.js");

var _Anchor = __webpack_require__(/*! ./components/Anchor.js */ "./src/components/Anchor.js");

var _Button = __webpack_require__(/*! ./components/Button.js */ "./src/components/Button.js");

var _Container = __webpack_require__(/*! ./components/Container.js */ "./src/components/Container.js");

var _Checkbox = __webpack_require__(/*! ./components/Checkbox.js */ "./src/components/Checkbox.js");

var _Column = __webpack_require__(/*! ./components/Column.js */ "./src/components/Column.js");

var _Div = __webpack_require__(/*! ./components/Div.js */ "./src/components/Div.js");

var _Heading = __webpack_require__(/*! ./components/Heading.js */ "./src/components/Heading.js");

var _Ol = __webpack_require__(/*! ./components/Ol.js */ "./src/components/Ol.js");

var _Ul = __webpack_require__(/*! ./components/Ul.js */ "./src/components/Ul.js");

var _Li = __webpack_require__(/*! ./components/Li.js */ "./src/components/Li.js");

var _Paragraph = __webpack_require__(/*! ./components/Paragraph.js */ "./src/components/Paragraph.js");

var _Password = __webpack_require__(/*! ./components/Password.js */ "./src/components/Password.js");

var _Pre = __webpack_require__(/*! ./components/Pre.js */ "./src/components/Pre.js");

var _Row = __webpack_require__(/*! ./components/Row.js */ "./src/components/Row.js");

var _Select = __webpack_require__(/*! ./components/Select.js */ "./src/components/Select.js");

var _Store = __webpack_require__(/*! ./components/Store.js */ "./src/components/Store.js");

var _TextArea = __webpack_require__(/*! ./components/TextArea.js */ "./src/components/TextArea.js");

var _AlertDecorator = __webpack_require__(/*! ./libraries/bootstrap4/components/AlertDecorator */ "./src/libraries/bootstrap4/components/AlertDecorator.js");

var _ColumnDecorator = __webpack_require__(/*! ./libraries/bootstrap4/components/ColumnDecorator */ "./src/libraries/bootstrap4/components/ColumnDecorator.js");

var _InputDecorator = __webpack_require__(/*! ./libraries/bootstrap4/components/InputDecorator */ "./src/libraries/bootstrap4/components/InputDecorator.js");

var _RowDecorator = __webpack_require__(/*! ./libraries/bootstrap4/components/RowDecorator */ "./src/libraries/bootstrap4/components/RowDecorator.js");

var _TextAreaDecorator = __webpack_require__(/*! ./libraries/bootstrap4/components/TextAreaDecorator */ "./src/libraries/bootstrap4/components/TextAreaDecorator.js");

var _ButtonDecorator = __webpack_require__(/*! ./libraries/bootstrap4/components/ButtonDecorator */ "./src/libraries/bootstrap4/components/ButtonDecorator.js");

var _AlertDecorator2 = __webpack_require__(/*! ./libraries/semantic2.4/components/AlertDecorator */ "./src/libraries/semantic2.4/components/AlertDecorator.js");

var _InputDecorator2 = __webpack_require__(/*! ./libraries/semantic2.4/components/InputDecorator */ "./src/libraries/semantic2.4/components/InputDecorator.js");

var _TextAreaDecorator2 = __webpack_require__(/*! ./libraries/semantic2.4/components/TextAreaDecorator */ "./src/libraries/semantic2.4/components/TextAreaDecorator.js");

var _Init = __webpack_require__(/*! ./Init */ "./src/Init.js");

exports.Decorator = _Decorator.Decorator; /**
                                           * UX
                                           * @copyright Benoit Gauthier <bgauthier555@gmail.com>
                                           * @author Benoit Gauthier <bgauthier555@gmail.com>
                                           * @licence MIT
                                           */

exports.Page = _Page.Page;
exports.Component = _component.Component;
exports.ComponentContainer = _componentcontainer.ComponentContainer;
exports.Input = _Input.Input;
exports.Alert = _Alert.Alert;
exports.ALERT_PRIMARY = _Alert.ALERT_PRIMARY;
exports.ALERT_SECONDARY = _Alert.ALERT_SECONDARY;
exports.ALERT_DANGER = _Alert.ALERT_DANGER;
exports.ALERT_DARK = _Alert.ALERT_DARK;
exports.ALERT_INFO = _Alert.ALERT_INFO;
exports.ALERT_LIGHT = _Alert.ALERT_LIGHT;
exports.ALERT_SUCCESS = _Alert.ALERT_SUCCESS;
exports.ALERT_WARNING = _Alert.ALERT_WARNING;
exports.Anchor = _Anchor.Anchor;
exports.Button = _Button.Button;
exports.Container = _Container.Container;
exports.Checkbox = _Checkbox.Checkbox;
exports.Column = _Column.Column;
exports.Div = _Div.Div;
exports.Heading = _Heading.Heading;
exports.Ol = _Ol.Ol;
exports.Ul = _Ul.Ul;
exports.Li = _Li.Li;
exports.Paragraph = _Paragraph.Paragraph;
exports.Password = _Password.Password;
exports.Pre = _Pre.Pre;
exports.Row = _Row.Row;
exports.Select = _Select.Select;
exports.Store = _Store.Store;
exports.TextArea = _TextArea.TextArea;

/**
 * Bootstrap classes
 */

exports.Bootstrap4_AlertDecorator = _AlertDecorator.Bootstrap4_AlertDecorator;
exports.Bootstrap4_ColumnDecorator = _ColumnDecorator.Bootstrap4_ColumnDecorator;
exports.Bootstrap4_InputDecorator = _InputDecorator.Bootstrap4_InputDecorator;
exports.Bootstrap4_RowDecorator = _RowDecorator.Bootstrap4_RowDecorator;
exports.Bootstrap4_TextAreaDecorator = _TextAreaDecorator.Bootstrap4_TextAreaDecorator;
exports.Bootstrap4_ButtonDecorator = _ButtonDecorator.Bootstrap4_ButtonDecorator;

/**
 * Semantic classes
 */

exports.Semantic24_AlertDecorator = _AlertDecorator2.Semantic24_AlertDecorator;
exports.Semantic24_InputDecorator = _InputDecorator2.Semantic24_InputDecorator;
exports.Semantic24_TextAreaDecorator = _TextAreaDecorator2.Semantic24_TextAreaDecorator;
exports.initialize = _Init.initialize;

/***/ }),

/***/ "./src/libraries/bootstrap4/components/AlertDecorator.js":
/*!***************************************************************!*\
  !*** ./src/libraries/bootstrap4/components/AlertDecorator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Bootstrap4_AlertDecorator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Decorator2 = __webpack_require__(/*! ../../../Decorator */ "./src/Decorator.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Bootstrap 4 alert component decorator, decorator will change component properties based on library requirements
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 */
var Bootstrap4_AlertDecorator = function (_Decorator) {
    _inherits(Bootstrap4_AlertDecorator, _Decorator);

    function Bootstrap4_AlertDecorator() {
        _classCallCheck(this, Bootstrap4_AlertDecorator);

        return _possibleConstructorReturn(this, (Bootstrap4_AlertDecorator.__proto__ || Object.getPrototypeOf(Bootstrap4_AlertDecorator)).call(this));
    }

    /**
     * Returns component meta data
     * @returns {object}
     */


    _createClass(Bootstrap4_AlertDecorator, [{
        key: 'decorate',


        /**
         * Decorate the component, change it's properties
         * Bootstrap4, add alert class and alert type class
         * Add attribute role=alert
         *
         * @param {UX.Component} component The component to decorate
         * @returns {UX.Component}
         */
        value: function decorate(component) {

            component.addClass('alert');
            component.addClass(component.alertType);
            component.setAttribute('role', 'alert');

            var sTitle = '';
            if (component.getTitle()) {
                sTitle = '<h4 class="alert-heading">{icon}{title}</h4>';
            }

            if (component.getIsDismissible()) {
                component.addClass('alert-dismissible');
                component.template = '<div {attributes}>{icon}{title}{label}' + ' <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n' + '    <span aria-hidden="true">&times;</span>\n' + ' </button>' + '</div>';
            }

            /**
             * Replace title tag with title html if we have a title, if not will be removed from template
             */
            component.template = component.template.replace(/{title}/g, sTitle);

            /**
             * Override close method of alert
             */
            component.close = function () {
                $('#' + this.getId()).alert('close');
            };

            return component;
        }

        /**
         * Called after component has been initialized
         * @param component
         */

    }, {
        key: 'init',
        value: function init(component) {}
    }], [{
        key: 'getMetaData',
        value: function getMetaData() {

            /**
             * Static
             * Component meta data information
             * category is one of layout | content | component
             * @type {object}
             */
            return {
                name: 'AlertDecorator',
                description: 'Bootstrap 4 alert decorator.',
                library: 'Bootstrap_4',
                category: 'decorator',
                libraries: {
                    Bootstrap_4: {
                        supported: true,
                        comments: ''
                    },
                    Html5: {
                        supported: false,
                        comments: ''
                    }
                },
                example: ''
            };
        }
    }]);

    return Bootstrap4_AlertDecorator;
}(_Decorator2.Decorator);

exports.Bootstrap4_AlertDecorator = Bootstrap4_AlertDecorator;

/***/ }),

/***/ "./src/libraries/bootstrap4/components/ButtonDecorator.js":
/*!****************************************************************!*\
  !*** ./src/libraries/bootstrap4/components/ButtonDecorator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Bootstrap4_ButtonDecorator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Decorator2 = __webpack_require__(/*! ../../../Decorator */ "./src/Decorator.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Bootstrap 4 Column decorator
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritDoc
 */
var Bootstrap4_ButtonDecorator = function (_Decorator) {
    _inherits(Bootstrap4_ButtonDecorator, _Decorator);

    function Bootstrap4_ButtonDecorator() {
        _classCallCheck(this, Bootstrap4_ButtonDecorator);

        return _possibleConstructorReturn(this, (Bootstrap4_ButtonDecorator.__proto__ || Object.getPrototypeOf(Bootstrap4_ButtonDecorator)).call(this));
    }

    /**
     * Returns component meta data
     * @returns {object}
     */


    _createClass(Bootstrap4_ButtonDecorator, [{
        key: 'decorate',
        value: function decorate(component) {

            component.addClass('btn');

            return component;
        }

        /**
         * Called after component has been initialized
         * @param component
         */

    }, {
        key: 'init',
        value: function init(component) {}
    }], [{
        key: 'getMetaData',
        value: function getMetaData() {

            /**
             * Static
             * Component meta data information
             * category is one of layout | content | component
             * @type {object}
             */
            return {
                name: 'ButtonDecorator',
                description: 'Bootstrap 4 button decorator.',
                library: 'Bootstrap_4',
                category: 'decorator',
                libraries: {
                    Bootstrap_4: {
                        supported: true,
                        comments: ''
                    },
                    Html5: {
                        supported: false,
                        comments: ''
                    }
                },
                example: ''
            };
        }
    }]);

    return Bootstrap4_ButtonDecorator;
}(_Decorator2.Decorator);

exports.Bootstrap4_ButtonDecorator = Bootstrap4_ButtonDecorator;

/***/ }),

/***/ "./src/libraries/bootstrap4/components/ColumnDecorator.js":
/*!****************************************************************!*\
  !*** ./src/libraries/bootstrap4/components/ColumnDecorator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Bootstrap4_ColumnDecorator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Decorator2 = __webpack_require__(/*! ../../../Decorator */ "./src/Decorator.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Bootstrap 4 Column decorator
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritDoc
 */
var Bootstrap4_ColumnDecorator = function (_Decorator) {
    _inherits(Bootstrap4_ColumnDecorator, _Decorator);

    function Bootstrap4_ColumnDecorator() {
        _classCallCheck(this, Bootstrap4_ColumnDecorator);

        return _possibleConstructorReturn(this, (Bootstrap4_ColumnDecorator.__proto__ || Object.getPrototypeOf(Bootstrap4_ColumnDecorator)).call(this));
    }

    /**
     * Returns component meta data
     * @returns {object}
     */


    _createClass(Bootstrap4_ColumnDecorator, [{
        key: 'decorate',
        value: function decorate(component) {

            component.addClass('col-md-' + component.getSize());

            return component;
        }

        /**
         * Called after component has been initialized
         * @param component
         */

    }, {
        key: 'init',
        value: function init(component) {}
    }], [{
        key: 'getMetaData',
        value: function getMetaData() {

            /**
             * Static
             * Component meta data information
             * category is one of layout | content | component
             * @type {object}
             */
            return {
                name: 'ColumnDecorator',
                description: 'Bootstrap 4 column decorator.',
                library: 'Bootstrap_4',
                category: 'decorator',
                libraries: {
                    Bootstrap_4: {
                        supported: true,
                        comments: ''
                    },
                    Html5: {
                        supported: false,
                        comments: ''
                    }
                },
                example: ''
            };
        }
    }]);

    return Bootstrap4_ColumnDecorator;
}(_Decorator2.Decorator);

exports.Bootstrap4_ColumnDecorator = Bootstrap4_ColumnDecorator;

/***/ }),

/***/ "./src/libraries/bootstrap4/components/InputDecorator.js":
/*!***************************************************************!*\
  !*** ./src/libraries/bootstrap4/components/InputDecorator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Bootstrap4_InputDecorator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Decorator2 = __webpack_require__(/*! ../../../Decorator */ "./src/Decorator.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Bootstrap 4 input field decorator
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritDoc
 */
var Bootstrap4_InputDecorator = function (_Decorator) {
    _inherits(Bootstrap4_InputDecorator, _Decorator);

    function Bootstrap4_InputDecorator() {
        _classCallCheck(this, Bootstrap4_InputDecorator);

        return _possibleConstructorReturn(this, (Bootstrap4_InputDecorator.__proto__ || Object.getPrototypeOf(Bootstrap4_InputDecorator)).call(this));
    }

    /**
     * Returns component meta data
     * @returns {object}
     */


    _createClass(Bootstrap4_InputDecorator, [{
        key: 'decorate',
        value: function decorate(component) {

            window.UX.log('Decorating ' + component.getId());

            component.addClass('form-control');

            component.template = '<div class="form-group">\n' + '    <label for="{id}">{label}</label>\n' + '    <input {attributes}>\n' + '  </div>';

            return component;
        }

        /**
         * Called after component has been initialized
         * @param component
         */

    }, {
        key: 'init',
        value: function init(component) {}
    }], [{
        key: 'getMetaData',
        value: function getMetaData() {

            /**
             * Static
             * Component meta data information
             * category is one of layout | content | component
             * @type {object}
             */
            return {
                name: 'InputDecorator',
                description: 'Bootstrap 4 input decorator.',
                library: 'Bootstrap_4',
                category: 'decorator',
                libraries: {
                    Bootstrap_4: {
                        supported: true,
                        comments: ''
                    },
                    Html5: {
                        supported: false,
                        comments: ''
                    }
                },
                example: ''
            };
        }
    }]);

    return Bootstrap4_InputDecorator;
}(_Decorator2.Decorator);

exports.Bootstrap4_InputDecorator = Bootstrap4_InputDecorator;

/***/ }),

/***/ "./src/libraries/bootstrap4/components/RowDecorator.js":
/*!*************************************************************!*\
  !*** ./src/libraries/bootstrap4/components/RowDecorator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Bootstrap4_RowDecorator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Decorator2 = __webpack_require__(/*! ../../../Decorator */ "./src/Decorator.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Bootstrap 4 Row decorator
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritDoc
 */
var Bootstrap4_RowDecorator = function (_Decorator) {
    _inherits(Bootstrap4_RowDecorator, _Decorator);

    function Bootstrap4_RowDecorator() {
        _classCallCheck(this, Bootstrap4_RowDecorator);

        return _possibleConstructorReturn(this, (Bootstrap4_RowDecorator.__proto__ || Object.getPrototypeOf(Bootstrap4_RowDecorator)).call(this));
    }

    /**
     * Returns component meta data
     * @returns {object}
     */


    _createClass(Bootstrap4_RowDecorator, [{
        key: 'decorate',
        value: function decorate(component) {

            component.addClass('row');

            return component;
        }

        /**
         * Called after component has been initialized
         * @param component
         */

    }, {
        key: 'init',
        value: function init(component) {}
    }], [{
        key: 'getMetaData',
        value: function getMetaData() {

            /**
             * Static
             * Component meta data information
             * category is one of layout | content | component
             * @type {object}
             */
            return {
                name: 'RowDecorator',
                description: 'Bootstrap 4 row decorator.',
                library: 'Bootstrap_4',
                category: 'decorator',
                libraries: {
                    Bootstrap_4: {
                        supported: true,
                        comments: ''
                    },
                    Html5: {
                        supported: false,
                        comments: ''
                    }
                },
                example: ''
            };
        }
    }]);

    return Bootstrap4_RowDecorator;
}(_Decorator2.Decorator);

exports.Bootstrap4_RowDecorator = Bootstrap4_RowDecorator;

/***/ }),

/***/ "./src/libraries/bootstrap4/components/TextAreaDecorator.js":
/*!******************************************************************!*\
  !*** ./src/libraries/bootstrap4/components/TextAreaDecorator.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Bootstrap4_TextAreaDecorator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Decorator2 = __webpack_require__(/*! ../../../Decorator */ "./src/Decorator.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Bootstrap 4 TextArea field decorator
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritDoc
 */
var Bootstrap4_TextAreaDecorator = function (_Decorator) {
    _inherits(Bootstrap4_TextAreaDecorator, _Decorator);

    function Bootstrap4_TextAreaDecorator() {
        _classCallCheck(this, Bootstrap4_TextAreaDecorator);

        return _possibleConstructorReturn(this, (Bootstrap4_TextAreaDecorator.__proto__ || Object.getPrototypeOf(Bootstrap4_TextAreaDecorator)).call(this));
    }

    /**
     * Returns component meta data
     * @returns {object}
     */


    _createClass(Bootstrap4_TextAreaDecorator, [{
        key: 'decorate',
        value: function decorate(component) {

            component.addClass('form-control');

            component.template = '<div class="form-group">\n' + '    <label for="{id}">{label}</label>\n' + '    <textarea {attributes}>{value}</textarea>\n' + '  </div>';

            return component;
        }

        /**
         * Called after component has been initialized
         * @param component
         */

    }, {
        key: 'init',
        value: function init(component) {}
    }], [{
        key: 'getMetaData',
        value: function getMetaData() {

            /**
             * Static
             * Component meta data information
             * category is one of layout | content | component
             * @type {object}
             */
            return {
                name: 'TextAreaDecorator',
                description: 'Bootstrap 4 textarea decorator.',
                library: 'Bootstrap_4',
                category: 'decorator',
                libraries: {
                    Bootstrap_4: {
                        supported: true,
                        comments: ''
                    },
                    Html5: {
                        supported: false,
                        comments: ''
                    }
                },
                example: ''
            };
        }
    }]);

    return Bootstrap4_TextAreaDecorator;
}(_Decorator2.Decorator);

exports.Bootstrap4_TextAreaDecorator = Bootstrap4_TextAreaDecorator;

/***/ }),

/***/ "./src/libraries/semantic2.4/components/AlertDecorator.js":
/*!****************************************************************!*\
  !*** ./src/libraries/semantic2.4/components/AlertDecorator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Semantic24_AlertDecorator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Decorator2 = __webpack_require__(/*! ../../../Decorator */ "./src/Decorator.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Semantic 2.4 alert field decorator
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritDoc
 */
var Semantic24_AlertDecorator = function (_Decorator) {
    _inherits(Semantic24_AlertDecorator, _Decorator);

    /**
     *
     */
    function Semantic24_AlertDecorator() {
        _classCallCheck(this, Semantic24_AlertDecorator);

        var _this = _possibleConstructorReturn(this, (Semantic24_AlertDecorator.__proto__ || Object.getPrototypeOf(Semantic24_AlertDecorator)).call(this));

        _this.alertTypeMapping = {
            'alert-warning': 'warning',
            'alert-success': 'positive',
            'alert-danger': 'negative'
        };
        return _this;
    }

    /**
     * Returns component meta data
     * @returns {object}
     */


    _createClass(Semantic24_AlertDecorator, [{
        key: 'decorate',


        /**
         *
         * @param component
         * @returns {*}
         */
        value: function decorate(component) {

            window.UX.log('Decorating ' + component.getId());

            component.addClass('ui');
            component.addClass('message');

            var sTitle = '';
            if (component.getTitle()) {
                sTitle = '<div class="header">{icon}{title}</div>';
            }

            component.template = '<div {attributes}>\n' + '  {title}\n' + '  <p>{label}</p>\n' + '</div>';

            if (component.getIsDismissible()) {

                component.template = '<div {attributes}>\n' + '  <i class="close icon"></i>\n' + '  {title}\n' + '  <p>{label}</p>\n' + '</div>';
            }

            /**
             * Replace title tag with title html if we have a title, if not will be removed from template
             */
            component.template = component.template.replace(/{title}/g, sTitle);

            /**
             * reset alert type constants
             */
            if (this.alertTypeMapping[component.alertType]) {
                component.addClass(this.alertTypeMapping[component.alertType]);
            }

            return component;
        }

        /**
         * Called after component has been initialized
         * @param component
         */

    }, {
        key: 'init',
        value: function init(component) {

            $('#' + component.getId() + '.message .close').on('click', function () {
                $(this).closest('.message').transition('fade');
            });
        }
    }], [{
        key: 'getMetaData',
        value: function getMetaData() {

            /**
             * Static
             * Component meta data information
             * category is one of layout | content | component
             * @type {object}
             */
            return {
                name: 'AlertDecorator',
                description: 'Semantic UI 2.4 alert decorator.',
                library: 'Semantic_2_4',
                category: 'decorator',
                libraries: {
                    Bootstrap_4: {
                        supported: true,
                        comments: ''
                    },
                    Html5: {
                        supported: false,
                        comments: ''
                    }
                },
                example: ''
            };
        }
    }]);

    return Semantic24_AlertDecorator;
}(_Decorator2.Decorator);

exports.Semantic24_AlertDecorator = Semantic24_AlertDecorator;

/***/ }),

/***/ "./src/libraries/semantic2.4/components/InputDecorator.js":
/*!****************************************************************!*\
  !*** ./src/libraries/semantic2.4/components/InputDecorator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Semantic24_InputDecorator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Decorator2 = __webpack_require__(/*! ../../../Decorator */ "./src/Decorator.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Semantic 2.4 alert field decorator
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritDoc
 */
var Semantic24_InputDecorator = function (_Decorator) {
    _inherits(Semantic24_InputDecorator, _Decorator);

    function Semantic24_InputDecorator() {
        _classCallCheck(this, Semantic24_InputDecorator);

        return _possibleConstructorReturn(this, (Semantic24_InputDecorator.__proto__ || Object.getPrototypeOf(Semantic24_InputDecorator)).call(this));
    }

    /**
     * Returns component meta data
     * @returns {object}
     */


    _createClass(Semantic24_InputDecorator, [{
        key: 'decorate',
        value: function decorate(component) {

            component.template = '<div class="ui form field">\n' + '  <label>{label}</label>\n' + '  <input {attributes}>\n' + '</div>';

            return component;
        }

        /**
         * Called after component has been initialized
         * @param component
         */

    }, {
        key: 'init',
        value: function init(component) {}
    }], [{
        key: 'getMetaData',
        value: function getMetaData() {

            /**
             * Static
             * Component meta data information
             * category is one of layout | content | component
             * @type {object}
             */
            return {
                name: 'InputDecorator',
                description: 'Semantic UI 2.4 input decorator.',
                library: 'Semantic_2_4',
                category: 'decorator',
                libraries: {
                    Bootstrap_4: {
                        supported: false,
                        comments: ''
                    },
                    Html5: {
                        supported: false,
                        comments: ''
                    }
                },
                example: ''
            };
        }
    }]);

    return Semantic24_InputDecorator;
}(_Decorator2.Decorator);

exports.Semantic24_InputDecorator = Semantic24_InputDecorator;

/***/ }),

/***/ "./src/libraries/semantic2.4/components/TextAreaDecorator.js":
/*!*******************************************************************!*\
  !*** ./src/libraries/semantic2.4/components/TextAreaDecorator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Semantic24_TextAreaDecorator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Decorator2 = __webpack_require__(/*! ../../../Decorator */ "./src/Decorator.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Bootstrap 4 TextArea field decorator
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritDoc
 */
var Semantic24_TextAreaDecorator = function (_Decorator) {
    _inherits(Semantic24_TextAreaDecorator, _Decorator);

    function Semantic24_TextAreaDecorator() {
        _classCallCheck(this, Semantic24_TextAreaDecorator);

        return _possibleConstructorReturn(this, (Semantic24_TextAreaDecorator.__proto__ || Object.getPrototypeOf(Semantic24_TextAreaDecorator)).call(this));
    }

    /**
     * Returns component meta data
     * @returns {object}
     */


    _createClass(Semantic24_TextAreaDecorator, [{
        key: 'decorate',
        value: function decorate(component) {

            component.template = '<div class="ui form field">\n' + '  <label>{label}</label>\n' + '  <textarea {attributes}>{value}</textarea>\n' + '</div>';

            return component;
        }

        /**
         * Called after component has been initialized
         * @param component
         */

    }, {
        key: 'init',
        value: function init(component) {}
    }], [{
        key: 'getMetaData',
        value: function getMetaData() {

            /**
             * Static
             * Component meta data information
             * category is one of layout | content | component
             * @type {object}
             */
            return {
                name: 'TextAreaDecorator',
                description: 'Semantic UI 2.4 text area decorator.',
                library: 'Semantic_2_4',
                category: 'decorator',
                libraries: {
                    Bootstrap_4: {
                        supported: false,
                        comments: ''
                    },
                    Html5: {
                        supported: false,
                        comments: ''
                    }
                },
                example: ''
            };
        }
    }]);

    return Semantic24_TextAreaDecorator;
}(_Decorator2.Decorator);

exports.Semantic24_TextAreaDecorator = Semantic24_TextAreaDecorator;

/***/ })

/******/ });
});
//# sourceMappingURL=UX.js.map