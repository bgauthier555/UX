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

/***/ "./src/Component.ts":
/*!**************************!*\
  !*** ./src/Component.ts ***!
  \**************************/
/*! exports provided: enumAutoCapitalize, enumDir, Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumAutoCapitalize", function() { return enumAutoCapitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumDir", function() { return enumDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Base class for javascript UI components
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 */

var enumAutoCapitalize;
(function (enumAutoCapitalize) {
    enumAutoCapitalize["off"] = "off";
    enumAutoCapitalize["none"] = "none";
    enumAutoCapitalize["on"] = "on";
    enumAutoCapitalize["sentences"] = "sentences";
    enumAutoCapitalize["words"] = "words";
    enumAutoCapitalize["characters"] = "characters";
})(enumAutoCapitalize || (enumAutoCapitalize = {}));
var enumDir;
(function (enumDir) {
    enumDir["ltr"] = "ltr";
    enumDir["rtl"] = "rtl";
    enumDir["auto"] = "auto";
})(enumDir || (enumDir = {}));
var Component = /** @class */ (function () {
    /**
     * Component constructor
     * @param id Component unique ID
     */
    function Component(id) {
        if (id === void 0) { id = null; }
        /**
         * Unique id of component
         */
        this.id = null;
        /**
         * Indicates if component has been initialized
         */
        this.isInitialized = false;
        /**
         * Container id of component
         */
        this.containerId = null;
        /**
         * Name of component
         */
        this.name = null;
        /**
         * classes applied to component
         */
        this.classes = {};
        /**
         * Component attributes
         */
        this.attributes = {};
        /**
         * Component value
         */
        this.value = null;
        /**
         * If component is enabled or not
         */
        this.isEnabled = true;
        /**
         * Is component value is required or not
         */
        this.isRequired = false;
        /**
         * Html template used to render component
         */
        this.template = null;
        /**
         * Placeholder text
         */
        this.placeholder = null;
        /**
         * The name of the class
         */
        this.componentClassName = 'Component';
        /**
         * Label for component
         */
        this.label = null;
        /**
         * Icon, used to display in some components
         */
        this.icon = null;
        /**
         * List of styles applied to component
         */
        this.styles = {};
        /**
         * Parent object of component
         */
        this.parent = null;
        /**
         * Data store used by component
         */
        this.store = null;
        /**
         * Provides a hint for generating a keyboard shortcut for the current element.
         */
        this.accessKey = null;
        /**
         * Controls whether and how text input is automatically capitalized as it is entered/edited by the user.
         */
        this.autoCapitalize = null;
        /**
         * Forms a class of attributes, called custom data attributes, that allow proprietary information
         * to be exchanged between the HTML and its DOM representation that may be used by scripts
         */
        this.dataAttributes = {};
        /**
         * An enumerated attribute indicating if the element should be editable by the user
         */
        this.contentEditable = false;
        /**
         * An enumerated attribute indicating the directionality of the element's text.
         */
        this.dir = null;
        //
        //  E V E N T S
        //
        /**
         * Component on blur event
         */
        this.onBlur = null;
        /**
         * Component on click event
         */
        this.onClick = null;
        /**
         * Component on change event
         */
        this.onChange = null;
        /**
         * Component on select event
         */
        this.onSelect = null;
        /**
         * Component on double click event
         */
        this.onDblClick = null;
        /**
         * Component on focus event
         */
        this.onFocus = null;
        /**
         * Component on focus in event
         */
        this.onFocusIn = null;
        /**
         * Component on focus out event
         */
        this.onFocusOut = null;
        /**
         * Component on hover event
         */
        this.onHover = null;
        /**
         * Component on key down event
         */
        this.onKeyDown = null;
        /**
         * Component on key press event
         */
        this.onKeyPress = null;
        /**
         * Component on key up event
         */
        this.onKeyUp = null;
        /**
         * Component on mouse down event
         */
        this.onMouseDown = null;
        /**
         * Component on mouse enter event
         */
        this.onMouseEnter = null;
        /**
         * Component on mouse leave event
         */
        this.onMouseLeave = null;
        /**
         * Component on mouse move event
         */
        this.onMouseMove = null;
        /**
         * Component on mouse out event
         */
        this.onMouseOut = null;
        /**
         * Component on mouse up event
         */
        this.onMouseUp = null;
        /**
         * Component on resize event
         */
        this.onResize = null;
        /**
         * Component on scroll event
         */
        this.onScroll = null;
        /**
         * Component on submit event
         */
        this.onSubmit = null;
        /**
         * Component on unload event
         */
        this.onUnload = null;
        /**
         * Component on load event
         */
        this.onLoad = null;
        /**
         * If id is not passed, generate a random id for component
         */
        if (id == null) {
            id = Component.generateRandomId();
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
         * Add component to page
         */
        // @ts-ignore
        window.UX.Page.addItem(this);
    }
    /**
     *
     * @param metaData
     */
    Component.prototype.checkIfFeatureIsSupported = function (metaData) {
        // @ts-ignore
        if (metaData.libraries[window.UX.activeLibrary].supported) {
            return true;
        }
        else {
            // @ts-ignore
            if (window.UX.missingFeature == _index__WEBPACK_IMPORTED_MODULE_0__["enumMissingFeature"].ERROR) {
                // @ts-ignore
                throw 'Unsupported feature ' + metaData.name + ' when using library ' + window.UX.activeLibrary;
                // @ts-ignore
            }
            else if (window.UX.missingFeature == _index__WEBPACK_IMPORTED_MODULE_0__["enumMissingFeature"].WARNING) {
                // @ts-ignore
                window.UX.warn('Unsupported feature ' + metaData.name + ' when using library ' + window.UX.activeLibrary);
                // @ts-ignore
            }
            else if (window.UX.missingFeature == _index__WEBPACK_IMPORTED_MODULE_0__["enumMissingFeature"].PATCH) {
            }
            return false;
        }
    };
    /**
     * Component init
     */
    Component.prototype.init = function () {
        if (this.isInitialized) {
            return;
        }
        // @ts-ignore
        window.UX.log('Component initialized ' + this.getId());
        /**
         * Render HTML code and insert into page
         */
        var el = $('#' + this.getId());
        if (el.length > 0) {
            el.replaceWith(this.render());
        }
        else {
            // No dom element to replace, append to default container
            // @ts-ignore
            $(window.UX.defaultContainerId).append(this.render());
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
        // @ts-ignore
        if (window.UX.libraries[window.UX.activeLibrary][this.componentClassName + 'Decorator'] != undefined) {
            // @ts-ignore
            var oDecorator = new window.UX.libraries[window.UX.activeLibrary][this.componentClassName + 'Decorator']();
            oDecorator.init(this);
        }
        this.isInitialized = true;
    };
    /**
     *
     * @param eventName
     * @param callback
     */
    Component.prototype.on = function (eventName, callback) {
        if (!eventName) {
            throw 'eventName is required';
        }
        if (!callback) {
            throw 'callback is required';
        }
        // Upper case first character
        eventName = eventName.charAt(0).toUpperCase() + eventName.slice(1);
        this['on' + eventName] = callback;
        return this;
    };
    /**
     * Returns styles object
     * @returns {object}
     */
    Component.prototype.getStyles = function () {
        return this.styles;
    };
    /**
     * Adds a style to the component CSS
     * @param {string} sStyle
     */
    Component.prototype.addStyle = function (sStyle) {
        var aStyles = sStyle.split(';');
        for (var x in aStyles) {
            if (aStyles[x] != '') {
                var aTokens = aStyles[x].split(':');
                if (aTokens[0] != '') {
                    this.styles[aTokens[0]] = aTokens[1];
                }
            }
        }
        return this;
    };
    /**
     * Alias for addStyle
     * @param sStyle
     */
    Component.prototype.css = function (sStyle) {
        return this.addStyle(sStyle);
    };
    /**
     * Alias for addStyle
     * @param sStyle
     */
    Component.prototype.setStyle = function (sStyle) {
        return this.addStyle(sStyle);
    };
    /**
     * Returns style list
     * @returns {string|string}
     */
    Component.prototype.getStyleList = function () {
        var sStyles = '';
        for (var x in this.styles) {
            if (this.styles.hasOwnProperty(x)) {
                sStyles = sStyles + x + ':' + this.styles[x] + ';';
            }
        }
        return sStyles;
    };
    /**
     *
     * @returns {null}
     */
    Component.prototype.getStore = function () {
        return this.store;
    };
    /**
     * Sets data store for component
     * @param store
     */
    Component.prototype.setStore = function (store) {
        this.store = store;
        return this;
    };
    /**
     * Returns if component is enabled or not
     * @returns {boolean}
     */
    Component.prototype.getEnabled = function () {
        return this.isEnabled;
    };
    /**
     * Sets if component is enabled or not
     * @param enabled
     * @returns {Component}
     */
    Component.prototype.setEnabled = function (enabled) {
        this.isEnabled = enabled;
        return this;
    };
    /**
     *
     * @returns {string}
     */
    Component.generateRandomId = function () {
        return 'UX' + Math.random().toString(36).substring(2, 6) + Math.random().toString(36).substring(2, 6);
    };
    /**
     * Returns component ID
     * @returns {*}
     */
    Component.prototype.getId = function () {
        return this.id;
    };
    /**
     * Sets component ID
     * @param id
     */
    Component.prototype.setId = function (id) {
        this.id = id;
        return this;
    };
    /**
     * Returns component label
     * @returns {null}
     */
    Component.prototype.getLabel = function () {
        return this.label;
    };
    /**
     * Sets component label
     * @param label
     * @returns {Component}
     */
    Component.prototype.setLabel = function (label) {
        this.label = label;
        return this;
    };
    /**
     * Returns component html template
     * @returns {null}
     */
    Component.prototype.getTemplate = function () {
        return this.template;
    };
    /**
     * Sets component template
     * @param template
     * @returns {Component}
     */
    Component.prototype.setTemplate = function (template) {
        this.template = template;
        return this;
    };
    /**
     * Set component attribute
     * @param sAttrName
     * @param mValue
     * @returns {Component}
     */
    Component.prototype.setAttribute = function (sAttrName, mValue) {
        if (mValue === void 0) { mValue = null; }
        this.attributes[sAttrName] = mValue;
        return this;
    };
    /**
     * Alias for setAttribute
     * @param sAttrName
     * @param mValue
     * @returns {Component}
     */
    Component.prototype.attr = function (sAttrName, mValue) {
        if (mValue === void 0) { mValue = null; }
        return this.setAttribute(sAttrName, mValue);
    };
    /**
     * Returns array of attributes
     * @returns {*}
     */
    Component.prototype.getAttributes = function () {
        return this.attributes;
    };
    /**
     * Add a class to component, multiple classes must be separated by spaces
     * @param {string} sClassName The CSS classes to add to the component
     */
    Component.prototype.addClass = function (sClassName) {
        var aClasses = sClassName.split(' ');
        for (var x in aClasses) {
            this.classes[aClasses[x]] = aClasses[x];
        }
        return this;
    };
    /**
     * Returns array of classes
     * @returns {*}
     */
    Component.prototype.getClasses = function () {
        return this.classes;
    };
    /**
     * Returns component value
     * @returns {null|*}
     */
    Component.prototype.getValue = function () {
        this.value = $('#' + this.getId()).val();
        return this.value;
    };
    /**
     * Sets component value
     * @param mValue
     * @returns {Component}
     */
    Component.prototype.setValue = function (mValue) {
        this.value = mValue;
        $('#' + this.getId()).val(this.value);
        return this;
    };
    /**
     * Enables component
     * @returns {Component}
     */
    Component.prototype.enable = function () {
        this.isEnabled = true;
        // Reset enable for initialized component
        if (this.isInitialized) {
            $('#' + this.getId()).prop('disabled', '');
        }
        return this;
    };
    /**
     * Disables component
     * @returns {Component}
     */
    Component.prototype.disable = function () {
        this.isEnabled = false;
        // Reset enable for initialized component
        if (this.isInitialized) {
            $('#' + this.getId()).prop('disabled', 'disabled');
        }
        return this;
    };
    /**
     * Returns placeholder text
     * @returns {null}
     */
    Component.prototype.getPlaceholder = function () {
        return this.placeholder;
    };
    /**
     * Sets placeholder text
     * @param placeholder
     * @returns {Component}
     */
    Component.prototype.setPlaceholder = function (placeholder) {
        this.placeholder = placeholder;
        // Reset placeholder for initialized component
        if (this.isInitialized) {
            $('#' + this.getId()).attr('placeholder', placeholder);
        }
        return this;
    };
    /**
     * Returns classes list as a string
     * @returns {string|string}
     */
    Component.prototype.getClassList = function () {
        var sClasses = '';
        for (var x in this.classes) {
            if (sClasses != '') {
                sClasses = sClasses + ' ';
            }
            sClasses = sClasses + x;
        }
        return sClasses;
    };
    /**
     * Returns string of component attributes
     * @returns {string|string}
     */
    Component.prototype.getAttributeList = function () {
        var sAttributes = '';
        for (var x in this.attributes) {
            if (this.attributes.hasOwnProperty(x)) {
                if (sAttributes != '') {
                    sAttributes = sAttributes + ' ';
                }
                if (this.attributes[x] === null) {
                    sAttributes = sAttributes + x;
                }
                else {
                    sAttributes = sAttributes + x + '="' + this.attributes[x] + '"';
                }
            }
        }
        return sAttributes;
    };
    /**
     * Render component and returns HTML string
     */
    Component.prototype.render = function () {
        /**
         * Check if we have a decorator for this component
         */
        // @ts-ignore
        if (window.UX.libraries[window.UX.activeLibrary][this.componentClassName + 'Decorator'] != undefined) {
            // @ts-ignore
            var oDecorator = new window.UX.libraries[window.UX.activeLibrary][this.componentClassName + 'Decorator']();
            oDecorator.decorate(this);
            // @ts-ignore
            window.UX.log('Found decorator for component ' + window.UX.activeLibrary + ' ' + this.componentClassName);
        }
        else {
            // @ts-ignore
            window.UX.log('No decorator for component ' + window.UX.activeLibrary + ' ' + this.componentClassName);
        }
        /**
         * Load template, set attributes, replace
         */
        var sComponentHTML = this.template;
        // ID
        this.setAttribute('id', this.id);
        // Name
        this.setAttribute('name', this.name);
        // Class
        if (this.getClassList() != '') {
            this.setAttribute('class', this.getClassList());
        }
        // Style
        if (this.getStyleList() != '') {
            this.setAttribute('style', this.getStyleList());
        }
        // Placeholder
        if (this.placeholder != null && this.placeholder != '') {
            this.setAttribute('placeholder', this.placeholder);
        }
        // Access key attribute
        if (this.getAccessKey()) {
            this.setAttribute('accesskey', this.getAccessKey());
        }
        // Autocapitalize
        if (this.getAutoCapitalize()) {
            this.setAttribute('autocapitalize', this.getAutoCapitalize());
        }
        // data-* attributes
        for (var x in this.dataAttributes) {
            if (this.dataAttributes.hasOwnProperty(x)) {
                this.setAttribute('data-' + x, this.dataAttributes[x]);
            }
        }
        // Content editable
        if (this.getContentEditable()) {
            this.setAttribute('contenteditable', 'true');
        }
        // Dir
        if (this.getDir()) {
            this.setAttribute('dir', this.getDir());
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
            }
            else {
                sComponentHTML = sComponentHTML.replace(oRegExp, '');
            }
        }
        return sComponentHTML;
    };
    /**
     * Add CSS and JS code required to patch this component
     */
    Component.patchComponent = function (metaData) {
        // @ts-ignore
        window.UX.log('    * No patch for component ' + metaData.name);
    };
    /**
     * Returns access key
     */
    Component.prototype.getAccessKey = function () {
        return this.accessKey;
    };
    /**
     * Provides a hint for generating a keyboard shortcut for the current element. This attribute consists of a space-separated list of characters.
     * @param accessKey
     */
    Component.prototype.setAccessKey = function (accessKey) {
        this.accessKey = accessKey;
        return this;
    };
    /**
     * Returns autocapitalize
     */
    Component.prototype.getAutoCapitalize = function () {
        return this.autoCapitalize;
    };
    /**
     * Controls whether and how text input is automatically capitalized as it is entered/edited by the user.
     * @param autoCapitalize
     */
    Component.prototype.setAutoCapitalize = function (autoCapitalize) {
        this.autoCapitalize = autoCapitalize;
        return this;
    };
    /**
     * Returns a data-* attribute
     * @param name
     */
    Component.prototype.getDataAttribute = function (name) {
        return this.dataAttributes[name];
    };
    /**
     * Sets a data-* attribute
     * @param name
     * @param value
     */
    Component.prototype.setDataAttribute = function (name, value) {
        // Check if name starts with data-
        if (name.toLowerCase().startsWith('data-')) {
            // remove data- if supplied
            name = name.substr(5);
        }
        this.dataAttributes[name] = value;
        return this;
    };
    /**
     * Returns if component is editable
     */
    Component.prototype.getContentEditable = function () {
        return this.contentEditable;
    };
    /**
     * An enumerated attribute indicating if the element should be editable by the user
     * @param contentEditable
     */
    Component.prototype.setContentEditable = function (contentEditable) {
        this.contentEditable = contentEditable;
        return this;
    };
    /**
     *
     */
    Component.prototype.getDir = function () {
        return this.dir;
    };
    /**
     *
     * @param dir
     */
    Component.prototype.setDir = function (dir) {
        this.dir = dir;
        return this;
    };
    return Component;
}());



/***/ }),

/***/ "./src/ComponentContainer.ts":
/*!***********************************!*\
  !*** ./src/ComponentContainer.ts ***!
  \***********************************/
/*! exports provided: ComponentContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentContainer", function() { return ComponentContainer; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./src/Component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Component container, allows to add multiple child components
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 */

var ComponentContainer = /** @class */ (function (_super) {
    __extends(ComponentContainer, _super);
    /**
     *
     * @param id
     */
    function ComponentContainer(id) {
        var _this = _super.call(this, id) || this;
        /**
         * Component sub items
         */
        _this.items = [];
        _this.items = [];
        return _this;
    }
    /**
     * Render container components and returns HTML string
     */
    ComponentContainer.prototype.render = function () {
        var sChildItems = '';
        if (this.getLabel()) {
            sChildItems = sChildItems + this.getLabel();
        }
        for (var x in this.items) {
            if (this.items.hasOwnProperty(x)) {
                sChildItems = sChildItems + this.items[x].render();
            }
        }
        var sHtml = _super.prototype.render.call(this);
        sHtml = sHtml.replace(/{child_items}/g, sChildItems);
        return sHtml;
    };
    /**
     * Returns list of comonents
     * @returns {Array}
     */
    ComponentContainer.prototype.getItems = function () {
        return this.items;
    };
    /**
     * Adds a child component to this container
     * @param item
     * @returns {Component}
     */
    ComponentContainer.prototype.addItem = function (item) {
        // Set item parent to this container item
        item.parent = this;
        this.items[this.items.length] = item;
        // Remove from main component item list, since this component is a child component
        // @ts-ignore
        window.UX.Page.removeItem(item.getId());
        return item;
    };
    /**
     * Adds Li item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addLi = function (id) {
        // @ts-ignore
        return this.addItem(new window.UX.Li(id));
    };
    /**
     * Adds Ol item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addOl = function (id) {
        // @ts-ignore
        return this.addItem(new window.UX.Ol(id));
    };
    /**
     * Add Ul item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addUl = function (id) {
        // @ts-ignore
        return this.addItem(new window.UX.Ul(id));
    };
    /**
     * Adds div item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addDiv = function (id) {
        // @ts-ignore
        return this.addItem(new window.UX.Div(id));
    };
    /**
     * Adds anchor item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addAnchor = function (id) {
        // @ts-ignore
        return this.addItem(new window.UX.Anchor(id));
    };
    /**
     * Adds alert item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addAlert = function (id) {
        // @ts-ignore
        return this.addItem(new window.UX.Alert(id));
    };
    /**
     * Adds button item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addButton = function (id) {
        // @ts-ignore
        return this.addItem(new window.UX.Button(id));
    };
    /**
     * Adds checkbox item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addCheckbox = function (id) {
        // @ts-ignore
        return this.addItem(new window.UX.Checkbox(id));
    };
    /**
     * Adds heading item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addHeading = function (id) {
        // @ts-ignore
        return this.addItem(new window.UX.Heading(id));
    };
    /**
     * Adds input item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addInput = function (id) {
        // @ts-ignore
        return this.addItem(new window.UX.Input(id));
    };
    /**
     * Adds paragraph item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addParagraph = function (id) {
        // @ts-ignore
        return this.addItem(new window.UX.Paragraph(id));
    };
    /**
     * Adds password item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addPassword = function (id) {
        // @ts-ignore
        return this.addItem(new window.UX.Password(id));
    };
    /**
     * Adds pre item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addPre = function (id) {
        // @ts-ignore
        return this.addItem(new window.UX.Pre(id));
    };
    /**
     * Adds select item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addSelect = function (id) {
        // @ts-ignore
        return this.addItem(new window.UX.Select(id));
    };
    /**
     * Adds textarea item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addTextArea = function (id) {
        // @ts-ignore
        return this.addItem(new window.UX.TextArea(id));
    };
    return ComponentContainer;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/Decorator.ts":
/*!**************************!*\
  !*** ./src/Decorator.ts ***!
  \**************************/
/*! exports provided: Decorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decorator", function() { return Decorator; });
/**
 * Decorator base class
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 */
var Decorator = /** @class */ (function () {
    function Decorator() {
    }
    return Decorator;
}());



/***/ }),

/***/ "./src/FontAwesome.ts":
/*!****************************!*\
  !*** ./src/FontAwesome.ts ***!
  \****************************/
/*! exports provided: FontAwesome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontAwesome", function() { return FontAwesome; });
/**
 * FontAwesome 5 icon classes
 */
var FontAwesome;
(function (FontAwesome) {
    FontAwesome["FA_FILE_EXCLAMATION"] = "fa-file-exclamation";
    FontAwesome["FA_CONCIERGE_BELL"] = "fa-concierge-bell";
    FontAwesome["FA_FILE_IMPORT"] = "fa-file-import";
    FontAwesome["FA_SMS"] = "fa-sms";
    FontAwesome["FA_STORE"] = "fa-store";
    FontAwesome["FA_FILE_UPLOAD"] = "fa-file-upload";
    FontAwesome["FA_DOLLAR_SIGN"] = "fa-dollar-sign";
    FontAwesome["FA_FILE_CERTIFICATE"] = "fa-file-certificate";
    FontAwesome["FA_FOLDERS"] = "fa-folders";
    FontAwesome["FA_LIGHTBULB_EXCLAMATION"] = "fa-lightbulb-exclamation";
    FontAwesome["FA_500PX"] = "fa-500px";
    FontAwesome["FA_TOOLBOX"] = "fa-toolbox";
    FontAwesome["FA_ADJUST"] = "fa-adjust";
    FontAwesome["FA_ADN"] = "fa-adn";
    FontAwesome["FA_ALIGN_CENTER"] = "fa-align-center";
    FontAwesome["FA_ALIGN_JUSTIFY"] = "fa-align-justify";
    FontAwesome["FA_ALIGN_LEFT"] = "fa-align-left";
    FontAwesome["FA_ALIGN_RIGHT"] = "fa-align-right";
    FontAwesome["FA_AMAZON"] = "fa-amazon";
    FontAwesome["FA_AMBULANCE"] = "fa-ambulance";
    FontAwesome["FA_ANCHOR"] = "fa-anchor";
    FontAwesome["FA_ANDROID"] = "fa-android";
    FontAwesome["FA_ANGELLIST"] = "fa-angellist";
    FontAwesome["FA_ANGLE_DOUBLE_DOWN"] = "fa-angle-double-down";
    FontAwesome["FA_ANGLE_DOUBLE_LEFT"] = "fa-angle-double-left";
    FontAwesome["FA_ANGLE_DOUBLE_RIGHT"] = "fa-angle-double-right";
    FontAwesome["FA_ANGLE_DOUBLE_UP"] = "fa-angle-double-up";
    FontAwesome["FA_ANGLE_DOWN"] = "fa-angle-down";
    FontAwesome["FA_ANGLE_LEFT"] = "fa-angle-left";
    FontAwesome["FA_ANGLE_RIGHT"] = "fa-angle-right";
    FontAwesome["FA_ANGLE_UP"] = "fa-angle-up";
    FontAwesome["FA_APPLE"] = "fa-apple";
    FontAwesome["FA_ARCHIVE"] = "fa-archive";
    FontAwesome["FA_AREA_CHART"] = "fa-area-chart";
    FontAwesome["FA_ARROW_CIRCLE_DOWN"] = "fa-arrow-circle-down";
    FontAwesome["FA_ARROW_CIRCLE_LEFT"] = "fa-arrow-circle-left";
    FontAwesome["FA_ARROW_CIRCLE_O_DOWN"] = "fa-arrow-circle-o-down";
    FontAwesome["FA_ARROW_CIRCLE_O_LEFT"] = "fa-arrow-circle-o-left";
    FontAwesome["FA_ARROW_CIRCLE_O_RIGHT"] = "fa-arrow-circle-o-right";
    FontAwesome["FA_ARROW_CIRCLE_O_UP"] = "fa-arrow-circle-o-up";
    FontAwesome["FA_ARROW_CIRCLE_RIGHT"] = "fa-arrow-circle-right";
    FontAwesome["FA_ARROW_CIRCLE_UP"] = "fa-arrow-circle-up";
    FontAwesome["FA_ARROW_DOWN"] = "fa-arrow-down";
    FontAwesome["FA_ARROW_LEFT"] = "fa-arrow-left";
    FontAwesome["FA_ARROW_RIGHT"] = "fa-arrow-right";
    FontAwesome["FA_ARROW_UP"] = "fa-arrow-up";
    FontAwesome["FA_ARROWS"] = "fa-arrows";
    FontAwesome["FA_ARROWS_ALT"] = "fa-arrows-alt";
    FontAwesome["FA_ARROWS_H"] = "fa-arrows-h";
    FontAwesome["FA_ARROWS_V"] = "fa-arrows-v";
    FontAwesome["FA_ASTERISK"] = "fa-asterisk";
    FontAwesome["FA_AT"] = "fa-at";
    FontAwesome["FA_AUTOMOBILE"] = "fa-automobile";
    FontAwesome["FA_BACKWARD"] = "fa-backward";
    FontAwesome["FA_BALANCE_SCALE"] = "fa-balance-scale";
    FontAwesome["FA_BAN"] = "fa-ban";
    FontAwesome["FA_BANK"] = "fa-university";
    FontAwesome["FA_BAR_CHART"] = "fa-chart-bar";
    FontAwesome["FA_BAR_CHART_O"] = "fa-chart-bar";
    FontAwesome["FA_BARCODE"] = "fa-barcode";
    FontAwesome["FA_BARS"] = "fa-bars";
    FontAwesome["FA_BATTERY_0"] = "fa-battery-0";
    FontAwesome["FA_BATTERY_1"] = "fa-battery-1";
    FontAwesome["FA_BATTERY_2"] = "fa-battery-2";
    FontAwesome["FA_BATTERY_3"] = "fa-battery-3";
    FontAwesome["FA_BATTERY_4"] = "fa-battery-4";
    FontAwesome["FA_BATTERY_EMPTY"] = "fa-battery-empty";
    FontAwesome["FA_BATTERY_FULL"] = "fa-battery-full";
    FontAwesome["FA_BATTERY_HALF"] = "fa-battery-half";
    FontAwesome["FA_BATTERY_QUARTER"] = "fa-battery-quarter";
    FontAwesome["FA_BATTERY_THREE_QUARTERS"] = "fa-battery-three-quarters";
    FontAwesome["FA_BED"] = "fa-bed";
    FontAwesome["FA_BEER"] = "fa-beer";
    FontAwesome["FA_BEHANCE"] = "fa-behance";
    FontAwesome["FA_BEHANCE_SQUARE"] = "fa-behance-square";
    FontAwesome["FA_BELL"] = "fa-bell";
    FontAwesome["FA_BELL_O"] = "fa-bell";
    FontAwesome["FA_BELL_SLASH"] = "fa-bell-slash";
    FontAwesome["FA_BELL_SLASH_O"] = "fa-bell-slash";
    FontAwesome["FA_BICYCLE"] = "fa-bicycle";
    FontAwesome["FA_BINOCULARS"] = "fa-binoculars";
    FontAwesome["FA_BIRTHDAY_CAKE"] = "fa-birthday-cake";
    FontAwesome["FA_BITBUCKET"] = "fa-bitbucket";
    FontAwesome["FA_BITBUCKET_SQUARE"] = "fa-bitbucket-square";
    FontAwesome["FA_BITCOIN"] = "fa-bitcoin";
    FontAwesome["FA_BLACK_TIE"] = "fa-black-tie";
    FontAwesome["FA_BOLD"] = "fa-bold";
    FontAwesome["FA_BOLT"] = "fa-bolt";
    FontAwesome["FA_BOMB"] = "fa-bomb";
    FontAwesome["FA_BOOK"] = "fa-book";
    FontAwesome["FA_BOOKMARK"] = "fa-bookmark";
    FontAwesome["FA_BOOKMARK_O"] = "fa-bookmark";
    FontAwesome["FA_BRIEFCASE"] = "fa-briefcase";
    FontAwesome["FA_BTC"] = "fa-btc";
    FontAwesome["FA_BUG"] = "fa-bug";
    FontAwesome["FA_BUILDING"] = "fa-building";
    FontAwesome["FA_BUILDING_O"] = "fa-building";
    FontAwesome["FA_BULLHORN"] = "fa-bullhorn";
    FontAwesome["FA_BULLSEYE"] = "fa-bullseye";
    FontAwesome["FA_BUS"] = "fa-bus";
    FontAwesome["FA_BUYSELLADS"] = "fa-buysellads";
    FontAwesome["FA_CAB"] = "fa-cab";
    FontAwesome["FA_CALCULATOR"] = "fa-calculator";
    FontAwesome["FA_CALENDAR"] = "fa-calendar";
    FontAwesome["FA_CALENDAR_CHECK_O"] = "fa-calendar-check";
    FontAwesome["FA_CALENDAR_MINUS_O"] = "fa-calendar-minus";
    FontAwesome["FA_CALENDAR_O"] = "fa-calendar";
    FontAwesome["FA_CALENDAR_PLUS_O"] = "fa-calendar-plus";
    FontAwesome["FA_CALENDAR_TIMES_O"] = "fa-calendar-times";
    FontAwesome["FA_CAMERA"] = "fa-camera";
    FontAwesome["FA_CAMERA_RETRO"] = "fa-camera-retro";
    FontAwesome["FA_CAR"] = "fa-car";
    FontAwesome["FA_CARET_DOWN"] = "fa-caret-down";
    FontAwesome["FA_CARET_LEFT"] = "fa-caret-left";
    FontAwesome["FA_CARET_RIGHT"] = "fa-caret-right";
    FontAwesome["FA_CARET_SQUARE_O_DOWN"] = "fa-caret-square-down";
    FontAwesome["FA_CARET_SQUARE_O_LEFT"] = "fa-caret-square-left";
    FontAwesome["FA_CARET_SQUARE_O_RIGHT"] = "fa-caret-square-right";
    FontAwesome["FA_CARET_SQUARE_O_UP"] = "fa-caret-square-up";
    FontAwesome["FA_CARET_UP"] = "fa-caret-up";
    FontAwesome["FA_CART_ARROW_DOWN"] = "fa-cart-arrow-down";
    FontAwesome["FA_CART_PLUS"] = "fa-cart-plus";
    FontAwesome["FA_CC"] = "fa-cc";
    FontAwesome["FA_CC_AMEX"] = "fa-cc-amex";
    FontAwesome["FA_CC_DINERS_CLUB"] = "fa-cc-diners-club";
    FontAwesome["FA_CC_DISCOVER"] = "fa-cc-discover";
    FontAwesome["FA_CC_JCB"] = "fa-cc-jcb";
    FontAwesome["FA_CC_MASTERCARD"] = "fa-cc-mastercard";
    FontAwesome["FA_CC_PAYPAL"] = "fa-cc-paypal";
    FontAwesome["FA_CC_STRIPE"] = "fa-cc-stripe";
    FontAwesome["FA_CC_VISA"] = "fa-cc-visa";
    FontAwesome["FA_CERTIFICATE"] = "fa-certificate";
    FontAwesome["FA_CHAIN"] = "fa-chain";
    FontAwesome["FA_CHAIN_BROKEN"] = "fa-chain-broken";
    FontAwesome["FA_CHECK"] = "fa-check";
    FontAwesome["FA_CHECK_CIRCLE"] = "fa-check-circle";
    FontAwesome["FA_CHECK_CIRCLE_O"] = "fa-check-circle";
    FontAwesome["FA_CHECK_SQUARE"] = "fa-check-square";
    FontAwesome["FA_CHECK_SQUARE_O"] = "fa-check-square";
    FontAwesome["FA_CHEVRON_CIRCLE_DOWN"] = "fa-chevron-circle-down";
    FontAwesome["FA_CHEVRON_CIRCLE_LEFT"] = "fa-chevron-circle-left";
    FontAwesome["FA_CHEVRON_CIRCLE_RIGHT"] = "fa-chevron-circle-right";
    FontAwesome["FA_CHEVRON_CIRCLE_UP"] = "fa-chevron-circle-up";
    FontAwesome["FA_CHEVRON_DOWN"] = "fa-chevron-down";
    FontAwesome["FA_CHEVRON_LEFT"] = "fa-chevron-left";
    FontAwesome["FA_CHEVRON_RIGHT"] = "fa-chevron-right";
    FontAwesome["FA_CHEVRON_UP"] = "fa-chevron-up";
    FontAwesome["FA_CHILD"] = "fa-child";
    FontAwesome["FA_CHROME"] = "fa-chrome";
    FontAwesome["FA_CIRCLE"] = "fa-circle";
    FontAwesome["FA_CIRCLE_O"] = "fa-circle";
    FontAwesome["FA_CIRCLE_O_NOTCH"] = "fa-circle-notch";
    FontAwesome["FA_CIRCLE_THIN"] = "fa-circle-thin";
    FontAwesome["FA_CLIPBOARD"] = "fa-clipboard";
    FontAwesome["FA_CLOCK_O"] = "fa-clock";
    FontAwesome["FA_CLONE"] = "fa-clone";
    FontAwesome["FA_CLOSE"] = "fa-close";
    FontAwesome["FA_CLOUD"] = "fa-cloud";
    FontAwesome["FA_CLOUD_DOWNLOAD"] = "fa-cloud-download";
    FontAwesome["FA_CLOUD_UPLOAD"] = "fa-cloud-upload";
    FontAwesome["FA_CNY"] = "fa-cny";
    FontAwesome["FA_CODE"] = "fa-code";
    FontAwesome["FA_CODE_FORK"] = "fa-code-fork";
    FontAwesome["FA_CODEPEN"] = "fa-codepen";
    FontAwesome["FA_COFFEE"] = "fa-coffee";
    FontAwesome["FA_COG"] = "fa-cog";
    FontAwesome["FA_COGS"] = "fa-cogs";
    FontAwesome["FA_COLUMNS"] = "fa-columns";
    FontAwesome["FA_COMMENT"] = "fa-comment";
    FontAwesome["FA_COMMENT_O"] = "fa-comment";
    FontAwesome["FA_COMMENTING"] = "fa-commenting";
    FontAwesome["FA_COMMENTING_O"] = "fa-commenting";
    FontAwesome["FA_COMMENTS"] = "fa-comments";
    FontAwesome["FA_COMMENTS_O"] = "fa-comments";
    FontAwesome["FA_COMPASS"] = "fa-compass";
    FontAwesome["FA_COMPRESS"] = "fa-compress";
    FontAwesome["FA_CONNECTDEVELOP"] = "fa-connectdevelop";
    FontAwesome["FA_CONTAO"] = "fa-contao";
    FontAwesome["FA_COPY"] = "fa-copy";
    FontAwesome["FA_COPYRIGHT"] = "fa-copyright";
    FontAwesome["FA_CREATIVE_COMMONS"] = "fa-creative-commons";
    FontAwesome["FA_CREDIT_CARD"] = "fa-credit-card";
    FontAwesome["FA_CROP"] = "fa-crop";
    FontAwesome["FA_CROSSHAIRS"] = "fa-crosshairs";
    FontAwesome["FA_CSS3"] = "fa-css3";
    FontAwesome["FA_CUBE"] = "fa-cube";
    FontAwesome["FA_CUBES"] = "fa-cubes";
    FontAwesome["FA_CUT"] = "fa-cut";
    FontAwesome["FA_CUTLERY"] = "fa-cutlery";
    FontAwesome["FA_DASHBOARD"] = "fa-dashboard";
    FontAwesome["FA_DASHCUBE"] = "fa-dashcube";
    FontAwesome["FA_DATABASE"] = "fa-database";
    FontAwesome["FA_DEDENT"] = "fa-dedent";
    FontAwesome["FA_DELICIOUS"] = "fa-delicious";
    FontAwesome["FA_DESKTOP"] = "fa-desktop";
    FontAwesome["FA_DEVIANTART"] = "fa-deviantart";
    FontAwesome["FA_DIAMOND"] = "fa-diamond";
    FontAwesome["FA_DIGG"] = "fa-digg";
    FontAwesome["FA_DOLLAR"] = "fa-usd-square";
    FontAwesome["FA_DOT_CIRCLE_O"] = "fa-dot-circle";
    FontAwesome["FA_DOWNLOAD"] = "fa-download";
    FontAwesome["FA_DRIBBBLE"] = "fa-dribbble";
    FontAwesome["FA_DROPBOX"] = "fa-dropbox";
    FontAwesome["FA_DRUPAL"] = "fa-drupal";
    FontAwesome["FA_EDIT"] = "fa-edit";
    FontAwesome["FA_EJECT"] = "fa-eject";
    FontAwesome["FA_ELLIPSIS_H"] = "fa-ellipsis-h";
    FontAwesome["FA_ELLIPSIS_V"] = "fa-ellipsis-v";
    FontAwesome["FA_EMPIRE"] = "fa-empire";
    FontAwesome["FA_ENVELOPE"] = "fa-envelope";
    FontAwesome["FA_ENVELOPE_O"] = "fa-envelope";
    FontAwesome["FA_ENVELOPE_SQUARE"] = "fa-envelope-square";
    FontAwesome["FA_ERASER"] = "fal fa-eraser";
    FontAwesome["FA_EUR"] = "fa-eur";
    FontAwesome["FA_EURO"] = "fa-euro";
    FontAwesome["FA_EXCHANGE"] = "fa-exchange";
    FontAwesome["FA_EXCLAMATION"] = "fa-exclamation";
    FontAwesome["FA_EXCLAMATION_CIRCLE"] = "fa-exclamation-circle";
    FontAwesome["FA_EXCLAMATION_TRIANGLE"] = "fa-exclamation-triangle";
    FontAwesome["FA_EXPAND"] = "fa-expand";
    FontAwesome["FA_EXPEDITEDSSL"] = "fa-expeditedssl";
    FontAwesome["FA_EXTERNAL_LINK"] = "fa-external-link";
    FontAwesome["FA_EXTERNAL_LINK_SQUARE"] = "fa-external-link-square";
    FontAwesome["FA_EYE"] = "fa-eye";
    FontAwesome["FA_EYE_SLASH"] = "fa-eye-slash";
    FontAwesome["FA_EYEDROPPER"] = "fa-eyedropper";
    FontAwesome["FA_FACEBOOK"] = "fa-facebook";
    FontAwesome["FA_FACEBOOK_F"] = "fa-facebook-f";
    FontAwesome["FA_FACEBOOK_OFFICIAL"] = "fa-facebook-official";
    FontAwesome["FA_FACEBOOK_SQUARE"] = "fa-facebook-square";
    FontAwesome["FA_FAST_BACKWARD"] = "fa-fast-backward";
    FontAwesome["FA_FAST_FORWARD"] = "fa-fast-forward";
    FontAwesome["FA_FAX"] = "fa-fax";
    FontAwesome["FA_FEED"] = "fa-feed";
    FontAwesome["FA_FEMALE"] = "fa-female";
    FontAwesome["FA_FIGHTER_JET"] = "fa-fighter-jet";
    FontAwesome["FA_FILE"] = "fa-file";
    FontAwesome["FA_FILE_MINUS"] = "fa-file-minus";
    FontAwesome["FA_FILE_INVOICE"] = "fa-file-invoice";
    FontAwesome["FA_FILE_ARCHIVE_O"] = "fa-file-archive";
    FontAwesome["FA_FILE_AUDIO_O"] = "fa-file-audio";
    FontAwesome["FA_FILE_CODE_O"] = "fa-file-code";
    FontAwesome["FA_FILE_EXCEL_O"] = "fa-file-excel";
    FontAwesome["FA_FILE_IMAGE_O"] = "fa-file-image";
    FontAwesome["FA_FILE_MOVIE_O"] = "fa-file-movie";
    FontAwesome["FA_FILE_O"] = "fa-file";
    FontAwesome["FA_FILE_PDF_O"] = "fa-file-pdf";
    FontAwesome["FA_FILE_PHOTO_O"] = "fa-file-photo";
    FontAwesome["FA_FILE_PICTURE_O"] = "fa-file-picture";
    FontAwesome["FA_FILE_POWERPOINT_O"] = "fa-file-powerpoint";
    FontAwesome["FA_FILE_SOUND_O"] = "fa-file-sound";
    FontAwesome["FA_FILE_TEXT"] = "fa-file-alt";
    FontAwesome["FA_FILE_TEXT_O"] = "fa-file-alt";
    FontAwesome["FA_FILE_VIDEO_O"] = "fa-file-video";
    FontAwesome["FA_FILE_WORD_O"] = "fa-file-word";
    FontAwesome["FA_FILE_ZIP_O"] = "fa-file-zip";
    FontAwesome["FA_FILES_O"] = "fa-files";
    FontAwesome["FA_FILM"] = "fa-film";
    FontAwesome["FA_FILTER"] = "fa-filter";
    FontAwesome["FA_FIRE"] = "fa-fire";
    FontAwesome["FA_FIRE_EXTINGUISHER"] = "fa-fire-extinguisher";
    FontAwesome["FA_FIREFOX"] = "fa-firefox";
    FontAwesome["FA_FLAG"] = "fa-flag";
    FontAwesome["FA_FLAG_CHECKERED"] = "fa-flag-checkered";
    FontAwesome["FA_FLAG_O"] = "fa-flag";
    FontAwesome["FA_FLASH"] = "fa-flash";
    FontAwesome["FA_FLASK"] = "fa-flask";
    FontAwesome["FA_FLICKR"] = "fa-flickr";
    FontAwesome["FA_FLOPPY_O"] = "fa-save";
    FontAwesome["FA_FOLDER"] = "fa-folder";
    FontAwesome["FA_FOLDER_O"] = "fa-folder";
    FontAwesome["FA_FOLDER_OPEN"] = "fa-folder-open";
    FontAwesome["FA_FOLDER_OPEN_O"] = "fa-folder-open";
    FontAwesome["FA_FONT"] = "fa-font";
    FontAwesome["FA_FONTICONS"] = "fa-fonticons";
    FontAwesome["FA_FORUMBEE"] = "fa-forumbee";
    FontAwesome["FA_FORWARD"] = "fa-forward";
    FontAwesome["FA_FOURSQUARE"] = "fa-foursquare";
    FontAwesome["FA_FROWN_O"] = "fa-frown";
    FontAwesome["FA_FUTBOL_O"] = "fa-futbol";
    FontAwesome["FA_GAMEPAD"] = "fa-gamepad";
    FontAwesome["FA_GAVEL"] = "fa-gavel";
    FontAwesome["FA_GBP"] = "fa-gbp";
    FontAwesome["FA_GE"] = "fa-ge";
    FontAwesome["FA_GEAR"] = "fa-cogs";
    FontAwesome["FA_GEARS"] = "fa-cogs";
    FontAwesome["FA_GENDERLESS"] = "fa-genderless";
    FontAwesome["FA_GET_POCKET"] = "fa-get-pocket";
    FontAwesome["FA_GG"] = "fa-gg";
    FontAwesome["FA_GG_CIRCLE"] = "fa-gg-circle";
    FontAwesome["FA_GIFT"] = "fa-gift";
    FontAwesome["FA_GIT"] = "fa-git";
    FontAwesome["FA_GIT_SQUARE"] = "fa-git-square";
    FontAwesome["FA_GITHUB"] = "fa-github";
    FontAwesome["FA_GITHUB_ALT"] = "fa-github-alt";
    FontAwesome["FA_GITHUB_SQUARE"] = "fa-github-square";
    FontAwesome["FA_GITTIP"] = "fa-gittip";
    FontAwesome["FA_GLASS"] = "fa-glass";
    FontAwesome["FA_GLOBE"] = "fa-globe";
    FontAwesome["FA_GOOGLE"] = "fa-google";
    FontAwesome["FA_GOOGLE_PLUS"] = "fa-google-plus";
    FontAwesome["FA_GOOGLE_PLUS_SQUARE"] = "fa-google-plus-square";
    FontAwesome["FA_GOOGLE_WALLET"] = "fa-google-wallet";
    FontAwesome["FA_GRADUATION_CAP"] = "fa-graduation-cap";
    FontAwesome["FA_GRATIPAY"] = "fa-gratipay";
    FontAwesome["FA_GROUP"] = "fa-group";
    FontAwesome["FA_H_SQUARE"] = "fa-h-square";
    FontAwesome["FA_HACKER_NEWS"] = "fa-hacker-news";
    FontAwesome["FA_HAND_GRAB_O"] = "fa-hand-grab";
    FontAwesome["FA_HAND_LIZARD_O"] = "fa-hand-lizard";
    FontAwesome["FA_HAND_O_DOWN"] = "fa-hand-o-down";
    FontAwesome["FA_HAND_O_LEFT"] = "fa-hand-o-left";
    FontAwesome["FA_HAND_O_RIGHT"] = "fa-hand-o-right";
    FontAwesome["FA_HAND_O_UP"] = "fa-hand-o-up";
    FontAwesome["FA_HAND_PAPER_O"] = "fa-hand-paper";
    FontAwesome["FA_HAND_PEACE_O"] = "fa-hand-peace";
    FontAwesome["FA_HAND_POINTER_O"] = "fa-hand-pointer";
    FontAwesome["FA_HAND_ROCK_O"] = "fa-hand-rock";
    FontAwesome["FA_HAND_SCISSORS_O"] = "fa-hand-scissors";
    FontAwesome["FA_HAND_SPOCK_O"] = "fa-hand-spock";
    FontAwesome["FA_HAND_STOP_O"] = "fa-hand-stop";
    FontAwesome["FA_HDD_O"] = "fa-hdd";
    FontAwesome["FA_H1"] = "fa-h1";
    FontAwesome["FA_H2"] = "fa-h2";
    FontAwesome["FA_H3"] = "fa-h3";
    FontAwesome["FA_HEADING"] = "fa-heading";
    FontAwesome["FA_HEADER"] = "fa-header";
    FontAwesome["FA_HEADPHONES"] = "fa-headphones";
    FontAwesome["FA_HEART"] = "fa-heart";
    FontAwesome["FA_HEART_O"] = "fa-heart";
    FontAwesome["FA_HEARTBEAT"] = "fa-heartbeat";
    FontAwesome["FA_HISTORY"] = "fa-history";
    FontAwesome["FA_HOME"] = "fa-home";
    FontAwesome["FA_HOSPITAL_O"] = "fa-hospital";
    FontAwesome["FA_HOTEL"] = "fa-hotel";
    FontAwesome["FA_HOURGLASS"] = "fa-hourglass";
    FontAwesome["FA_HOURGLASS_1"] = "fa-hourglass-1";
    FontAwesome["FA_HOURGLASS_2"] = "fa-hourglass-2";
    FontAwesome["FA_HOURGLASS_3"] = "fa-hourglass-3";
    FontAwesome["FA_HOURGLASS_END"] = "fa-hourglass-end";
    FontAwesome["FA_HOURGLASS_HALF"] = "fa-hourglass-half";
    FontAwesome["FA_HOURGLASS_O"] = "fa-hourglass";
    FontAwesome["FA_HOURGLASS_START"] = "fa-hourglass-start";
    FontAwesome["FA_HOUZZ"] = "fa-houzz";
    FontAwesome["FA_HTML5"] = "fa-html5";
    FontAwesome["FA_I_CURSOR"] = "fa-i-cursor";
    FontAwesome["FA_ILS"] = "fa-ils";
    FontAwesome["FA_IMAGE"] = "fa-image";
    FontAwesome["FA_INBOX"] = "fa-inbox";
    FontAwesome["FA_INDENT"] = "fa-indent";
    FontAwesome["FA_INDUSTRY"] = "fa-industry";
    FontAwesome["FA_INFO"] = "fa-info";
    FontAwesome["FA_INFO_CIRCLE"] = "fa-info-circle";
    FontAwesome["FA_INR"] = "fa-inr";
    FontAwesome["FA_INSTAGRAM"] = "fa-instagram";
    FontAwesome["FA_INSTITUTION"] = "fa-institution";
    FontAwesome["FA_INTERNET_EXPLORER"] = "fa-internet-explorer";
    FontAwesome["FA_INTERSEX"] = "fa-intersex";
    FontAwesome["FA_IOXHOST"] = "fa-ioxhost";
    FontAwesome["FA_ITALIC"] = "fa-italic";
    FontAwesome["FA_JOOMLA"] = "fa-joomla";
    FontAwesome["FA_JPY"] = "fa-jpy";
    FontAwesome["FA_JSFIDDLE"] = "fa-jsfiddle";
    FontAwesome["FA_KEY"] = "fa-key";
    FontAwesome["FA_KEYBOARD_O"] = "fa-keyboard";
    FontAwesome["FA_KRW"] = "fa-krw";
    FontAwesome["FA_LANGUAGE"] = "fa-language";
    FontAwesome["FA_LAPTOP"] = "fa-laptop";
    FontAwesome["FA_LASTFM"] = "fa-lastfm";
    FontAwesome["FA_LASTFM_SQUARE"] = "fa-lastfm-square";
    FontAwesome["FA_LEAF"] = "fa-leaf";
    FontAwesome["FA_LEANPUB"] = "fa-leanpub";
    FontAwesome["FA_LEGAL"] = "fa-legal";
    FontAwesome["FA_LEMON_O"] = "fa-lemon";
    FontAwesome["FA_LEVEL_DOWN"] = "fa-level-down";
    FontAwesome["FA_LEVEL_UP"] = "fa-level-up";
    FontAwesome["FA_LIFE_BOUY"] = "fa-life-bouy";
    FontAwesome["FA_LIFE_BUOY"] = "fa-life-buoy";
    FontAwesome["FA_LIFE_RING"] = "fa-life-ring";
    FontAwesome["FA_LIFE_SAVER"] = "fa-life-saver";
    FontAwesome["FA_LIGHTBULB_O"] = "fa-lightbulb";
    FontAwesome["FA_LINE_CHART"] = "fa-chart-bar";
    FontAwesome["FA_LINK"] = "fa-link";
    FontAwesome["FA_LINKEDIN"] = "fab fa-linkedin-in";
    FontAwesome["FA_LINKEDIN_SQUARE"] = "fa-linkedin-square";
    FontAwesome["FA_LINUX"] = "fa-linux";
    FontAwesome["FA_LIST"] = "fa-list";
    FontAwesome["FA_LIST_ALT"] = "fa-list-alt";
    FontAwesome["FA_LIST_OL"] = "fa-list-ol";
    FontAwesome["FA_LIST_UL"] = "fa-list-ul";
    FontAwesome["FA_LOCATION_ARROW"] = "fa-location-arrow";
    FontAwesome["FA_LOCK"] = "fa-lock";
    FontAwesome["FA_LONG_ARROW_DOWN"] = "fa-long-arrow-down";
    FontAwesome["FA_LONG_ARROW_LEFT"] = "fa-long-arrow-left";
    FontAwesome["FA_LONG_ARROW_RIGHT"] = "fa-long-arrow-right";
    FontAwesome["FA_LONG_ARROW_UP"] = "fa-long-arrow-up";
    FontAwesome["FA_MAGIC"] = "fa-magic";
    FontAwesome["FA_MAGNET"] = "fa-magnet";
    FontAwesome["FA_MAIL_FORWARD"] = "fa-mail-forward";
    FontAwesome["FA_MAIL_REPLY"] = "fa-mail-reply";
    FontAwesome["FA_MAIL_REPLY_ALL"] = "fa-mail-reply-all";
    FontAwesome["FA_MALE"] = "fa-male";
    FontAwesome["FA_MAP"] = "fa-map";
    FontAwesome["FA_MAP_MARKER"] = "fa-map-marker";
    FontAwesome["FA_MAP_O"] = "fa-map";
    FontAwesome["FA_MAP_PIN"] = "fa-map-pin";
    FontAwesome["FA_MAP_SIGNS"] = "fa-map-signs";
    FontAwesome["FA_MARS"] = "fa-mars";
    FontAwesome["FA_MARS_DOUBLE"] = "fa-mars-double";
    FontAwesome["FA_MARS_STROKE"] = "fa-mars-stroke";
    FontAwesome["FA_MARS_STROKE_H"] = "fa-mars-stroke-h";
    FontAwesome["FA_MARS_STROKE_V"] = "fa-mars-stroke-v";
    FontAwesome["FA_MAXCDN"] = "fa-maxcdn";
    FontAwesome["FA_MEANPATH"] = "fa-meanpath";
    FontAwesome["FA_MEDIUM"] = "fa-medium";
    FontAwesome["FA_MEDKIT"] = "fa-medkit";
    FontAwesome["FA_MEH_O"] = "fa-meh";
    FontAwesome["FA_MERCURY"] = "fa-mercury";
    FontAwesome["FA_MICROPHONE"] = "fa-microphone";
    FontAwesome["FA_MICROPHONE_SLASH"] = "fa-microphone-slash";
    FontAwesome["FA_MINUS"] = "fa-minus";
    FontAwesome["FA_MINUS_CIRCLE"] = "fa-minus-circle";
    FontAwesome["FA_MINUS_SQUARE"] = "fa-minus-square";
    FontAwesome["FA_MINUS_SQUARE_O"] = "fa-minus-square";
    FontAwesome["FA_MOBILE"] = "fa-mobile";
    FontAwesome["FA_MOBILE_PHONE"] = "fa-mobile-phone";
    FontAwesome["FA_MONEY"] = "fa-money-bill";
    FontAwesome["FA_MOON_O"] = "fa-moon";
    FontAwesome["FA_MORTAR_BOARD"] = "fa-mortar-board";
    FontAwesome["FA_MOTORCYCLE"] = "fa-motorcycle";
    FontAwesome["FA_MOUSE_POINTER"] = "fa-mouse-pointer";
    FontAwesome["FA_MUSIC"] = "fa-music";
    FontAwesome["FA_NAVICON"] = "fa-navicon";
    FontAwesome["FA_NEUTER"] = "fa-neuter";
    FontAwesome["FA_NEWSPAPER_O"] = "fa-newspaper";
    FontAwesome["FA_OBJECT_GROUP"] = "fa-object-group";
    FontAwesome["FA_OBJECT_UNGROUP"] = "fa-object-ungroup";
    FontAwesome["FA_ODNOKLASSNIKI"] = "fa-odnoklassniki";
    FontAwesome["FA_ODNOKLASSNIKI_SQUARE"] = "fa-odnoklassniki-square";
    FontAwesome["FA_OPENCART"] = "fa-opencart";
    FontAwesome["FA_OPENID"] = "fa-openid";
    FontAwesome["FA_OPERA"] = "fa-opera";
    FontAwesome["FA_OPTIN_MONSTER"] = "fa-optin-monster";
    FontAwesome["FA_OUTDENT"] = "fa-outdent";
    FontAwesome["FA_PAGELINES"] = "fa-pagelines";
    FontAwesome["FA_PAINT_BRUSH"] = "fa-paint-brush";
    FontAwesome["FA_PAPER_PLANE"] = "fa-paper-plane";
    FontAwesome["FA_PAPER_PLANE_O"] = "fa-paper-plane";
    FontAwesome["FA_PAPERCLIP"] = "fa-paperclip";
    FontAwesome["FA_PARAGRAPH"] = "fa-paragraph";
    FontAwesome["FA_PASTE"] = "fa-paste";
    FontAwesome["FA_PAUSE"] = "fa-pause";
    FontAwesome["FA_PAW"] = "fa-paw";
    FontAwesome["FA_PAYPAL"] = "fa-paypal";
    FontAwesome["FA_PENCIL"] = "fa-pencil";
    FontAwesome["FA_PENCIL_SQUARE"] = "fa-pencil-square";
    FontAwesome["FA_PENCIL_SQUARE_O"] = "fa-pencil-square";
    FontAwesome["FA_PERCENT"] = "fa-percent";
    FontAwesome["FA_PHONE"] = "fa-phone";
    FontAwesome["FA_PHONE_SQUARE"] = "fa-phone-square";
    FontAwesome["FA_PHOTO"] = "fa-photo";
    FontAwesome["FA_PICTURE_O"] = "fa-image";
    FontAwesome["FA_PIE_CHART"] = "fa-chart-pie";
    FontAwesome["FA_PIED_PIPER"] = "fa-pied-piper";
    FontAwesome["FA_PIED_PIPER_ALT"] = "fa-pied-piper-alt";
    FontAwesome["FA_PINTEREST"] = "fa-pinterest";
    FontAwesome["FA_PINTEREST_P"] = "fa-pinterest-p";
    FontAwesome["FA_PINTEREST_SQUARE"] = "fa-pinterest-square";
    FontAwesome["FA_PLANE"] = "fa-plane";
    FontAwesome["FA_PLAY"] = "fa-play";
    FontAwesome["FA_PLAY_CIRCLE"] = "fa-play-circle";
    FontAwesome["FA_PLAY_CIRCLE_O"] = "fa-play-circle";
    FontAwesome["FA_PLUG"] = "fa-plug";
    FontAwesome["FA_PLUS"] = "fa-plus";
    FontAwesome["FA_PLUS_CIRCLE"] = "fa-plus-circle";
    FontAwesome["FA_PLUS_SQUARE"] = "fa-plus-square";
    FontAwesome["FA_PLUS_SQUARE_O"] = "fa-plus-square";
    FontAwesome["FA_POWER_OFF"] = "fa-power-off";
    FontAwesome["FA_PRINT"] = "fa-print";
    FontAwesome["FA_PUZZLE_PIECE"] = "fa-puzzle-piece";
    FontAwesome["FA_QQ"] = "fa-qq";
    FontAwesome["FA_QRCODE"] = "fa-qrcode";
    FontAwesome["FA_QUESTION"] = "fa-question";
    FontAwesome["FA_QUESTION_CIRCLE"] = "fa-question-circle";
    FontAwesome["FA_QUOTE_LEFT"] = "fa-quote-left";
    FontAwesome["FA_QUOTE_RIGHT"] = "fa-quote-right";
    FontAwesome["FA_RA"] = "fa-ra";
    FontAwesome["FA_RANDOM"] = "fa-random";
    FontAwesome["FA_REBEL"] = "fa-rebel";
    FontAwesome["FA_RECYCLE"] = "fa-recycle";
    FontAwesome["FA_REDDIT"] = "fa-reddit";
    FontAwesome["FA_REDDIT_SQUARE"] = "fa-reddit-square";
    FontAwesome["FA_REFRESH"] = "fal fa-sync-alt";
    FontAwesome["FA_REGISTERED"] = "fa-registered";
    FontAwesome["FA_REMOVE"] = "fa-remove";
    FontAwesome["FA_RENREN"] = "fa-renren";
    FontAwesome["FA_REORDER"] = "fa-reorder";
    FontAwesome["FA_REPEAT"] = "fa-repeat";
    FontAwesome["FA_REPLY"] = "fa-reply";
    FontAwesome["FA_REPLY_ALL"] = "fa-reply-all";
    FontAwesome["FA_RETWEET"] = "fa-retweet";
    FontAwesome["FA_RMB"] = "fa-rmb";
    FontAwesome["FA_ROAD"] = "fa-road";
    FontAwesome["FA_ROCKET"] = "fa-rocket";
    FontAwesome["FA_ROTATE_LEFT"] = "fa-rotate-left";
    FontAwesome["FA_ROTATE_RIGHT"] = "fa-rotate-right";
    FontAwesome["FA_ROUBLE"] = "fa-rouble";
    FontAwesome["FA_RSS"] = "fa-rss";
    FontAwesome["FA_RSS_SQUARE"] = "fa-rss-square";
    FontAwesome["FA_RUB"] = "fa-rub";
    FontAwesome["FA_RUBLE"] = "fa-ruble";
    FontAwesome["FA_RUPEE"] = "fa-rupee";
    FontAwesome["FA_SAFARI"] = "fa-safari";
    FontAwesome["FA_SAVE"] = "fa-save";
    FontAwesome["FA_SCISSORS"] = "fa-scissors";
    FontAwesome["FA_SEARCH"] = "fa-search";
    FontAwesome["FA_SEARCH_MINUS"] = "fa-search-minus";
    FontAwesome["FA_SEARCH_PLUS"] = "fa-search-plus";
    FontAwesome["FA_SELLSY"] = "fa-sellsy";
    FontAwesome["FA_SEND"] = "fa-send";
    FontAwesome["FA_SEND_O"] = "fa-send";
    FontAwesome["FA_SERVER"] = "fa-server";
    FontAwesome["FA_SHARE"] = "fa-share";
    FontAwesome["FA_SHARE_ALT"] = "fa-share-alt";
    FontAwesome["FA_SHARE_ALT_SQUARE"] = "fa-share-alt-square";
    FontAwesome["FA_SHARE_SQUARE"] = "fa-share-square";
    FontAwesome["FA_SHARE_SQUARE_O"] = "fa-share-square";
    FontAwesome["FA_SHEKEL"] = "fa-shekel";
    FontAwesome["FA_SHEQEL"] = "fa-sheqel";
    FontAwesome["FA_SHIELD"] = "fa-shield";
    FontAwesome["FA_SHIP"] = "fa-ship";
    FontAwesome["FA_SHIRTSINBULK"] = "fa-shirtsinbulk";
    FontAwesome["FA_SHOPPING_CART"] = "fa-shopping-cart";
    FontAwesome["FA_SIGN_IN"] = "fa-sign-in";
    FontAwesome["FA_SIGN_OUT"] = "fa-sign-out";
    FontAwesome["FA_SIGNAL"] = "fa-signal";
    FontAwesome["FA_SIMPLYBUILT"] = "fa-simplybuilt";
    FontAwesome["FA_SITEMAP"] = "fa-sitemap";
    FontAwesome["FA_SKYATLAS"] = "fa-skyatlas";
    FontAwesome["FA_SKYPE"] = "fa-skype";
    FontAwesome["FA_SLACK"] = "fa-slack";
    FontAwesome["FA_SLIDERS"] = "fa-sliders";
    FontAwesome["FA_SLIDESHARE"] = "fa-slideshare";
    FontAwesome["FA_SMILE_O"] = "fa-smile";
    FontAwesome["FA_SOCCER_BALL_O"] = "fa-soccer-ball";
    FontAwesome["FA_SORT"] = "fa-sort";
    FontAwesome["FA_SORT_ALPHA_ASC"] = "fa-sort-alpha-asc";
    FontAwesome["FA_SORT_ALPHA_DESC"] = "fa-sort-alpha-desc";
    FontAwesome["FA_SORT_AMOUNT_ASC"] = "fa-sort-amount-asc";
    FontAwesome["FA_SORT_AMOUNT_DESC"] = "fa-sort-amount-desc";
    FontAwesome["FA_SORT_ASC"] = "fa-sort-asc";
    FontAwesome["FA_SORT_DESC"] = "fa-sort-desc";
    FontAwesome["FA_SORT_DOWN"] = "fa-sort-down";
    FontAwesome["FA_SORT_NUMERIC_ASC"] = "fa-sort-numeric-asc";
    FontAwesome["FA_SORT_NUMERIC_DESC"] = "fa-sort-numeric-desc";
    FontAwesome["FA_SORT_UP"] = "fa-sort-up";
    FontAwesome["FA_SOUNDCLOUD"] = "fa-soundcloud";
    FontAwesome["FA_SPACE_SHUTTLE"] = "fa-space-shuttle";
    FontAwesome["FA_SPINNER"] = "fa-spinner";
    FontAwesome["FA_SPOON"] = "fa-spoon";
    FontAwesome["FA_SPOTIFY"] = "fa-spotify";
    FontAwesome["FA_SQUARE"] = "fa-square";
    FontAwesome["FA_SQUARE_O"] = "fa-square";
    FontAwesome["FA_STACK_EXCHANGE"] = "fa-stack-exchange";
    FontAwesome["FA_STACK_OVERFLOW"] = "fa-stack-overflow";
    FontAwesome["FA_STAR"] = "fa-star";
    FontAwesome["FA_STAR_HALF"] = "fa-star-half";
    FontAwesome["FA_STAR_HALF_EMPTY"] = "fa-star-half-empty";
    FontAwesome["FA_STAR_HALF_FULL"] = "fa-star-half-full";
    FontAwesome["FA_STAR_HALF_O"] = "fa-star-half";
    FontAwesome["FA_STAR_O"] = "fa-star";
    FontAwesome["FA_STEAM"] = "fa-steam";
    FontAwesome["FA_STEAM_SQUARE"] = "fa-steam-square";
    FontAwesome["FA_STEP_BACKWARD"] = "fa-step-backward";
    FontAwesome["FA_STEP_FORWARD"] = "fa-step-forward";
    FontAwesome["FA_STETHOSCOPE"] = "fa-stethoscope";
    FontAwesome["FA_STICKY_NOTE"] = "fa-sticky-note";
    FontAwesome["FA_STICKY_NOTE_O"] = "fa-sticky-note";
    FontAwesome["FA_STOP"] = "fa-stop";
    FontAwesome["FA_STREET_VIEW"] = "fa-street-view";
    FontAwesome["FA_STRIKETHROUGH"] = "fa-strikethrough";
    FontAwesome["FA_STUMBLEUPON"] = "fa-stumbleupon";
    FontAwesome["FA_STUMBLEUPON_CIRCLE"] = "fa-stumbleupon-circle";
    FontAwesome["FA_SUBSCRIPT"] = "fa-subscript";
    FontAwesome["FA_SUBWAY"] = "fa-subway";
    FontAwesome["FA_SUITCASE"] = "fa-suitcase";
    FontAwesome["FA_SUN_O"] = "fa-sun";
    FontAwesome["FA_SUPERSCRIPT"] = "fa-superscript";
    FontAwesome["FA_SUPPORT"] = "fa-support";
    FontAwesome["FA_TABLE"] = "fa-table";
    FontAwesome["FA_TABLET"] = "fa-tablet";
    FontAwesome["FA_TACHOMETER"] = "fa-tachometer";
    FontAwesome["FA_TAG"] = "fa-tag";
    FontAwesome["FA_TAGS"] = "fa-tags";
    FontAwesome["FA_TASKS"] = "fa-tasks";
    FontAwesome["FA_TAXI"] = "fa-taxi";
    FontAwesome["FA_TELEVISION"] = "fa-television";
    FontAwesome["FA_TENCENT_WEIBO"] = "fa-tencent-weibo";
    FontAwesome["FA_TERMINAL"] = "fa-terminal";
    FontAwesome["FA_TEXT_HEIGHT"] = "fa-text-height";
    FontAwesome["FA_TEXT_WIDTH"] = "fa-text-width";
    FontAwesome["FA_TH"] = "fa-th";
    FontAwesome["FA_TH_LARGE"] = "fa-th-large";
    FontAwesome["FA_TH_LIST"] = "fa-th-list";
    FontAwesome["FA_THUMB_TACK"] = "fa-thumb-tack";
    FontAwesome["FA_THUMBS_DOWN"] = "fa-thumbs-down";
    FontAwesome["FA_THUMBS_O_DOWN"] = "fa-thumbs-o-down";
    FontAwesome["FA_THUMBS_O_UP"] = "fa-thumbs-o-up";
    FontAwesome["FA_THUMBS_UP"] = "fa-thumbs-up";
    FontAwesome["FA_TICKET"] = "fa-ticket";
    FontAwesome["FA_TIMES"] = "fa-times";
    FontAwesome["FA_TIMES_CIRCLE"] = "fa-times-circle";
    FontAwesome["FA_TIMES_CIRCLE_O"] = "fa-times-circle";
    FontAwesome["FA_TINT"] = "fa-tint";
    FontAwesome["FA_TOGGLE_DOWN"] = "fa-toggle-down";
    FontAwesome["FA_TOGGLE_LEFT"] = "fa-toggle-left";
    FontAwesome["FA_TOGGLE_OFF"] = "fa-toggle-off";
    FontAwesome["FA_TOGGLE_ON"] = "fa-toggle-on";
    FontAwesome["FA_TOGGLE_RIGHT"] = "fa-toggle-right";
    FontAwesome["FA_TOGGLE_UP"] = "fa-toggle-up";
    FontAwesome["FA_TRADEMARK"] = "fa-trademark";
    FontAwesome["FA_TRAIN"] = "fa-train";
    FontAwesome["FA_TRANSGENDER"] = "fa-transgender";
    FontAwesome["FA_TRANSGENDER_ALT"] = "fa-transgender-alt";
    FontAwesome["FA_TRASH"] = "fa-trash";
    FontAwesome["FA_TRASH_O"] = "fa-trash";
    FontAwesome["FA_TREE"] = "fa-tree";
    FontAwesome["FA_TRELLO"] = "fa-trello";
    FontAwesome["FA_TRIPADVISOR"] = "fa-tripadvisor";
    FontAwesome["FA_TROPHY"] = "fa-trophy";
    FontAwesome["FA_TRUCK"] = "fa-truck";
    FontAwesome["FA_TRY"] = "fa-try";
    FontAwesome["FA_TTY"] = "fa-tty";
    FontAwesome["FA_TUMBLR"] = "fa-tumblr";
    FontAwesome["FA_TUMBLR_SQUARE"] = "fa-tumblr-square";
    FontAwesome["FA_TURKISH_LIRA"] = "fa-turkish-lira";
    FontAwesome["FA_TV"] = "fa-tv";
    FontAwesome["FA_TWITCH"] = "fa-twitch";
    FontAwesome["FA_TWITTER"] = "fa-twitter";
    FontAwesome["FA_TWITTER_SQUARE"] = "fa-twitter-square";
    FontAwesome["FA_UMBRELLA"] = "fa-umbrella";
    FontAwesome["FA_UNDERLINE"] = "fa-underline";
    FontAwesome["FA_UNDO"] = "fa-undo";
    FontAwesome["FA_REDO"] = "fa-redo";
    FontAwesome["FA_UNIVERSITY"] = "fa-university";
    FontAwesome["FA_UNLINK"] = "fa-unlink";
    FontAwesome["FA_UNLOCK"] = "fa-unlock";
    FontAwesome["FA_UNLOCK_ALT"] = "fa-unlock-alt";
    FontAwesome["FA_UNSORTED"] = "fa-unsorted";
    FontAwesome["FA_UPLOAD"] = "fa-upload";
    FontAwesome["FA_USD"] = "fa-usd";
    FontAwesome["FA_USER"] = "fa-user";
    FontAwesome["FA_USER_MD"] = "fa-user-md";
    FontAwesome["FA_USER_PLUS"] = "fa-user-plus";
    FontAwesome["FA_USER_SECRET"] = "fa-user-secret";
    FontAwesome["FA_USER_TIMES"] = "fa-user-times";
    FontAwesome["FA_USERS"] = "fa-users";
    FontAwesome["FA_VENUS"] = "fa-venus";
    FontAwesome["FA_VENUS_DOUBLE"] = "fa-venus-double";
    FontAwesome["FA_VENUS_MARS"] = "fa-venus-mars";
    FontAwesome["FA_VIACOIN"] = "fa-viacoin";
    FontAwesome["FA_VIDEO_CAMERA"] = "fa-video-camera";
    FontAwesome["FA_VIMEO"] = "fa-vimeo";
    FontAwesome["FA_VIMEO_SQUARE"] = "fa-vimeo-square";
    FontAwesome["FA_VINE"] = "fa-vine";
    FontAwesome["FA_VK"] = "fa-vk";
    FontAwesome["FA_VOLUME_DOWN"] = "fa-volume-down";
    FontAwesome["FA_VOLUME_OFF"] = "fa-volume-off";
    FontAwesome["FA_VOLUME_UP"] = "fa-volume-up";
    FontAwesome["FA_WARNING"] = "fa-exclamation-triangle";
    FontAwesome["FA_WECHAT"] = "fa-wechat";
    FontAwesome["FA_WEIBO"] = "fa-weibo";
    FontAwesome["FA_WEIXIN"] = "fa-weixin";
    FontAwesome["FA_WHATSAPP"] = "fa-whatsapp";
    FontAwesome["FA_WHEELCHAIR"] = "fa-wheelchair";
    FontAwesome["FA_WIFI"] = "fa-wifi";
    FontAwesome["FA_WIKIPEDIA_W"] = "fa-wikipedia-w";
    FontAwesome["FA_WINDOWS"] = "fa-windows";
    FontAwesome["FA_WON"] = "fa-won";
    FontAwesome["FA_WORDPRESS"] = "fa-wordpress";
    FontAwesome["FA_WRENCH"] = "fa-wrench";
    FontAwesome["FA_XING"] = "fa-xing";
    FontAwesome["FA_XING_SQUARE"] = "fa-xing-square";
    FontAwesome["FA_Y_COMBINATOR"] = "fa-y-combinator";
    FontAwesome["FA_Y_COMBINATOR_SQUARE"] = "fa-y-combinator-square";
    FontAwesome["FA_YAHOO"] = "fa-yahoo";
    FontAwesome["FA_YC"] = "fa-yc";
    FontAwesome["FA_YC_SQUARE"] = "fa-yc-square";
    FontAwesome["FA_YELP"] = "fa-yelp";
    FontAwesome["FA_YEN"] = "fa-yen";
    FontAwesome["FA_YOUTUBE"] = "fa-youtube";
    FontAwesome["FA_YOUTUBE_PLAY"] = "fa-youtube-play";
    FontAwesome["FA_YOUTUBE_SQUARE"] = "fa-youtube-square";
    FontAwesome["FA_DRIVERS_LICENCE_O"] = "fa-id-card";
    FontAwesome["FA_ADDRESS_CARD_O"] = "fa-address-card";
})(FontAwesome || (FontAwesome = {}));


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

var _Page = __webpack_require__(/*! ./Page */ "./src/Page.ts");

var _Patch = __webpack_require__(/*! ./Patch */ "./src/Patch.ts");

var _UX = __webpack_require__(/*! ./UX */ "./src/UX.ts");

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

    window.UX.version = '1.0.4';
    window.UX.components = {};
    window.UX.missingFeature = options.missingFeature == undefined ? _UX.enumMissingFeature.ERROR : options.missingFeature;
    window.UX.debug = options.debug == undefined ? false : options.debug;
    window.UX.log = function (message) {
        if (this.debug) {
            console.log(message);
        }
    };

    window.UX.warn = function (message) {
        console.warn(message);
    };

    window.UX.log('UX initialize version ' + window.UX.version);

    window.UX.log('--> loading libraries');
    window.UX.activeLibrary = options.activeLibrary == undefined ? LIBRARY_HTML5 : options.activeLibrary;
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

    window.UX.patch = new _Patch.Patch();

    window.UX.Page = new _Page.Page();
    window.UX.log('--> active library is ' + window.UX.activeLibrary);

    // Load library decorators

    window.UX.log('--> loading components');
    var keys = Object.keys(window.UX);
    for (var x in keys) {

        if (window.UX[keys[x]].getMetaData != undefined) {

            window.UX.log('  + Analyzing component ' + keys[x]);

            if (['component', 'layout', 'content'].indexOf(window.UX[keys[x]].getMetaData().category) != -1) {
                window.UX.log('    * Found Component class');
                window.UX.components[keys[x]] = window.UX[keys[x]];
                window.UX[keys[x]].patchComponent(window.UX[keys[x]].getMetaData);
            } else if (['decorator'].indexOf(window.UX[keys[x]].getMetaData().category) != -1) {
                window.UX.log('    * Found Decorator class');
                window.UX.libraries[window.UX[keys[x]].getMetaData().library][window.UX[keys[x]].getMetaData().name] = window.UX[keys[x]];
            }
        }
    } // End for each UX element

    /**
     * Apply patch if any
     */
    window.UX.patch.applyPatch();
}

/***/ }),

/***/ "./src/Page.ts":
/*!*********************!*\
  !*** ./src/Page.ts ***!
  \*********************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
var Page = /** @class */ (function () {
    /**
     *
     */
    function Page() {
        /**
         * Default container id
         */
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
    Page.prototype.addItem = function (item) {
        this.items[item.getId()] = item;
        return item;
    };
    /**
     * Remove an item from list of items
     * @param id
     * @returns {UX}
     */
    Page.prototype.removeItem = function (id) {
        if (this.items[id] != undefined) {
            delete this.items[id];
        }
        return this;
    };
    /**
     * Find an item
     * @param id
     * @returns {null|*}
     */
    Page.prototype.findItem = function (id) {
        if (this.items[id] != undefined) {
            return this.items[id];
        }
        return null;
    };
    /**
     * Init UX, init all components
     */
    Page.prototype.init = function () {
        if (this.isInitialized) {
            return false;
        }
        for (var x in this.items) {
            if (this.items.hasOwnProperty(x)) {
                this.items[x].init();
            }
        }
        this.isInitialized = true;
        return true;
    };
    return Page;
}());



/***/ }),

/***/ "./src/Patch.ts":
/*!**********************!*\
  !*** ./src/Patch.ts ***!
  \**********************/
/*! exports provided: Patch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patch", function() { return Patch; });
/* harmony import */ var _UX__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UX */ "./src/UX.ts");

/**
 * Patch
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 */
var Patch = /** @class */ (function () {
    function Patch() {
        /**
         * Patch CSS content
         */
        this.css = null;
    }
    /**
    constructor() {

    }

    /**
     * Returns CSS to patch
     */
    Patch.prototype.getCSS = function () {
        return this.css;
    };
    /**
     * Sets CSS to patch
     */
    Patch.prototype.setCSS = function (css) {
        this.css = css;
        return this;
    };
    /**
     * Append CSS to patch
     */
    Patch.prototype.appendCSS = function (css) {
        this.css += css;
        return this;
    };
    /**
     * Execute patch
     */
    Patch.prototype.applyPatch = function () {
        // @ts-ignore
        if (window.UX.missingFeature == _UX__WEBPACK_IMPORTED_MODULE_0__["enumMissingFeature"].PATCH) {
            $('head').append('<style>' + this.getCSS() + '</style>');
        }
    };
    return Patch;
}());



/***/ }),

/***/ "./src/UX.ts":
/*!*******************!*\
  !*** ./src/UX.ts ***!
  \*******************/
/*! exports provided: enumMissingFeature, enumLibrary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumMissingFeature", function() { return enumMissingFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumLibrary", function() { return enumLibrary; });
/**
 * Behaviour on missing feature
 */
var enumMissingFeature;
(function (enumMissingFeature) {
    /**
     * Indicates an error will be thrown if the requested feature is not possible
     * @type {string}
     */
    enumMissingFeature["ERROR"] = "missing-feature-error";
    /**
     * Indicates a warning message will be logged in console if requested feature is not possible
     * @type {string}
     */
    enumMissingFeature["WARNING"] = "missing-feature-warning";
    /**
     * Indicates patch css and js files will be loaded in order to try and offer a similar user experience
     * If the is not possible, an error will be thrown
     * @type {string}
     */
    enumMissingFeature["PATCH"] = "missing-feature-patch";
})(enumMissingFeature || (enumMissingFeature = {}));
/**
 * Supported libraries
 */
var enumLibrary;
(function (enumLibrary) {
    /**
     * Standard Html
     * @type {string}
     */
    enumLibrary["HTML5"] = "Html5";
    /**
     * Twitter Bootstrap version 4.X
     * @type {string}
     */
    enumLibrary["BOOTSTRAP_4"] = "Bootstrap_4";
})(enumLibrary || (enumLibrary = {}));


/***/ }),

/***/ "./src/components/Alert.ts":
/*!*********************************!*\
  !*** ./src/components/Alert.ts ***!
  \*********************************/
/*! exports provided: enumAlertType, Alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumAlertType", function() { return enumAlertType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var enumAlertType;
(function (enumAlertType) {
    /**
     * Primary alert type, bootstrap 4
     * @type {string}
     */
    enumAlertType["ALERT_PRIMARY"] = "alert-primary";
    /**
     * Secondary alert type, bootstrap 4
     * @type {string}
     */
    enumAlertType["ALERT_SECONDARY"] = "alert-secondary";
    /**
     * Success alert type, bootstrap 4
     * @type {string}
     */
    enumAlertType["ALERT_SUCCESS"] = "alert-success";
    /**
     * Danger alert type, bootstrap 4
     * @type {string}
     */
    enumAlertType["ALERT_DANGER"] = "alert-danger";
    /**
     * Warning alert type, bootstrap 4
     * @type {string}
     */
    enumAlertType["ALERT_WARNING"] = "alert-warning";
    /**
     * Info alert type, bootstrap 4
     * @type {string}
     */
    enumAlertType["ALERT_INFO"] = "alert-info";
    /**
     * Light alert type, bootstrap 4
     * @type {string}
     */
    enumAlertType["ALERT_LIGHT"] = "alert-light";
    /**
     * Dark alert type, bootstrap 4
     * @type {string}
     */
    enumAlertType["ALERT_DARK"] = "alert-dark";
})(enumAlertType || (enumAlertType = {}));
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
var Alert = /** @class */ (function (_super) {
    __extends(Alert, _super);
    /**
     * Alert component constructor
     * @param {string} id Unique ID for component
     */
    function Alert(id) {
        var _this = _super.call(this, id) || this;
        /**
         * Title of the alert
         */
        _this.title = null;
        /**
         * If we can dismiss the alert message
         */
        _this.isDismissible = false;
        /**
         * Type of alert
         */
        _this.alertType = enumAlertType.ALERT_PRIMARY;
        // noinspection HtmlUnknownAttribute
        _this.template = '<div {attributes}>{icon}{title}{label}</div>';
        _this.componentClassName = 'Alert';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Alert.getMetaData = function () {
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
                    comments: '',
                },
                Html5: {
                    supported: false,
                    comments: '',
                }
            },
            example: '',
            codepen: [
                {
                    user: 'bgauthier555',
                    slug: 'zQjaeK',
                    title: 'Alert component example',
                    height: 500,
                }
            ],
        };
    };
    /**
     * Returns if we can dismiss the alert component
     * @returns {boolean}
     */
    Alert.prototype.getIsDismissible = function () {
        return this.isDismissible;
    };
    /**
     * Returns if the alert component can be dismissed or not
     * @param {boolean} isDismissible If the alert can be dismissed or not
     * @returns {Alert}
     */
    Alert.prototype.setIsDismissable = function (isDismissible) {
        this.isDismissible = isDismissible;
        return this;
    };
    /**
     * Returns alert title
     * @returns {string} The title of the alert component
     */
    Alert.prototype.getTitle = function () {
        return this.title;
    };
    /**
     * Sets alert title, if title is not null, the title will b displayed within the alert component
     * @param {string} title The title of the alert component
     * @returns {Alert}
     */
    Alert.prototype.setTitle = function (title) {
        this.title = title;
        return this;
    };
    /**
     * Returns alert type (warning, success, ...) for alert component
     * @returns {string}
     */
    Alert.prototype.getAlertType = function () {
        return this.alertType;
    };
    /**
     * Sets alert type (warning, success, ...) for alert component
     * @param alertType
     * @returns {Alert}
     */
    Alert.prototype.setAlertType = function (alertType) {
        this.alertType = alertType;
        return this;
    };
    /**
     * Closes an alert
     */
    Alert.prototype.close = function () {
        $('#' + this.getId()).hide();
    };
    /**
     * This event fires immediately when the close instance method is called.
     * @param callback
     */
    Alert.prototype.onAlertClose = function (callback) {
        // Unsupported in HTML
        return this;
    };
    /**
     * This event is fired when the alert has been closed (will wait for CSS transitions to complete).
     * @param callback
     */
    Alert.prototype.onAlertClosed = function (callback) {
        // Unsupported in HTML
        return this;
    };
    return Alert;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/Anchor.ts":
/*!**********************************!*\
  !*** ./src/components/Anchor.ts ***!
  \**********************************/
/*! exports provided: Anchor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Anchor", function() { return Anchor; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

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
var Anchor = /** @class */ (function (_super) {
    __extends(Anchor, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Anchor(id) {
        var _this = _super.call(this, id) || this;
        // noinspection HtmlUnknownAttribute
        _this.template = '<a {attributes}>{child_items}</a>';
        _this.componentClassName = 'Anchor';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Anchor.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category is one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Anchor',
            description: 'HTML anchor element',
            category: 'content',
            libraries: {
                Bootstrap_4: {
                    supported: true,
                    comments: '',
                },
                Html5: {
                    supported: true,
                    comments: '',
                }
            },
            example: '',
            codepen: [
                {
                    user: 'bgauthier555',
                    slug: 'mYKJNK',
                    title: 'Alert example',
                    height: 400,
                }
            ],
        };
    };
    /**
     * Sets anchor href
     * @param href
     * @returns {Anchor}
     */
    Anchor.prototype.setHref = function (href) {
        this.setAttribute('href', href);
        return this;
    };
    /**
     * Sets anchor target
     * @param target _blank|_self|_parent|_top|framename
     * @returns {Anchor}
     */
    Anchor.prototype.setTarget = function (target) {
        this.setAttribute('target', target);
        return this;
    };
    return Anchor;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Button.ts":
/*!**********************************!*\
  !*** ./src/components/Button.ts ***!
  \**********************************/
/*! exports provided: enumButtonStyle, enumButtonSize, enumButtonType, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumButtonStyle", function() { return enumButtonStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumButtonSize", function() { return enumButtonSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumButtonType", function() { return enumButtonType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var enumButtonStyle;
(function (enumButtonStyle) {
    /**
     * Primary color button
     * @type {string}
     */
    enumButtonStyle["PRIMARY"] = "btn-primary";
    /**
     * Secondary color button
     * @type {string}
     */
    enumButtonStyle["SECONDARY"] = "btn-secondary";
    /**
     * Success color button
     * @type {string}
     */
    enumButtonStyle["SUCCESS"] = "btn-success";
    /**
     * Danger color button
     * @type {string}
     */
    enumButtonStyle["DANGER"] = "btn-danger";
    /**
     * Warning color button
     * @type {string}
     */
    enumButtonStyle["WARNING"] = "btn-warning";
    /**
     * Info color button
     * @type {string}
     */
    enumButtonStyle["INFO"] = "btn-info";
    /**
     * Light color button
     * @type {string}
     */
    enumButtonStyle["LIGHT"] = "btn-light";
    /**
     * Dark color button
     * @type {string}
     */
    enumButtonStyle["DARK"] = "btn-dark";
    /**
     * Link button
     * @type {string}
     */
    enumButtonStyle["LINK"] = "btn-link";
    /**
     * Primary outline color button
     * @type {string}
     */
    enumButtonStyle["OUTLINE_PRIMARY"] = "btn-outline-primary";
    /**
     * Secondary outline color button
     * @type {string}
     */
    enumButtonStyle["OUTLINE_SECONDARY"] = "btn-outline-secondary";
    /**
     * Success outline color button
     * @type {string}
     */
    enumButtonStyle["OUTLINE_SUCCESS"] = "btn-outline-success";
    /**
     * Danger outline color button
     * @type {string}
     */
    enumButtonStyle["OUTLINE_DANGER"] = "btn-outline-danger";
    /**
     * Warning outline color button
     * @type {string}
     */
    enumButtonStyle["OUTLINE_WARNING"] = "btn-outline-warning";
    /**
     * Info outline color button
     * @type {string}
     */
    enumButtonStyle["OUTLINE_INFO"] = "btn-outline-info";
    /**
     * Light outline color button
     * @type {string}
     */
    enumButtonStyle["OUTLINE_LIGHT"] = "btn-outline-light";
    /**
     * Dark outline color button
     * @type {string}
     */
    enumButtonStyle["OUTLINE_DARK"] = "btn-outline-dark";
})(enumButtonStyle || (enumButtonStyle = {}));
var enumButtonSize;
(function (enumButtonSize) {
    /**
     * Large button
     * @type {string}
     */
    enumButtonSize["LARGE"] = "btn-lg";
    /**
     * Small button
     * @type {string}
     */
    enumButtonSize["SMALL"] = "btn-sm";
    /**
     * Block button
     * @type {string}
     */
    enumButtonSize["BLOCK"] = "btn-block";
})(enumButtonSize || (enumButtonSize = {}));
var enumButtonType;
(function (enumButtonType) {
    /**
     * Button type
     * @type {string}
     */
    enumButtonType["BUTTON"] = "button";
    /**
     * Submit type
     * @type {string}
     */
    enumButtonType["SUBMIT"] = "submit";
    /**
     * Reset type
     * @type {string}
     */
    enumButtonType["RESET"] = "reset";
})(enumButtonType || (enumButtonType = {}));

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
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Button(id) {
        var _this = _super.call(this, id) || this;
        /**
         *
         */
        _this.autofocus = false;
        /**
         *
         */
        _this.form = null;
        /**
         *
         */
        _this.formEncodingType = null;
        /**
         *
         */
        _this.formMethod = null;
        /**
         *
         */
        _this.buttonStyle = null;
        /**
         *
         */
        _this.buttonSize = null;
        _this.type = enumButtonType.BUTTON;
        // noinspection HtmlUnknownAttribute
        _this.template = '<button {attributes}>{child_items}</button>';
        _this.componentClassName = 'Button';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Button.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category is one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Button',
            description: 'HTML Button element',
            category: 'component',
            libraries: {
                Bootstrap_4: {
                    supported: true,
                    comments: '',
                },
                Html5: {
                    supported: true,
                    comments: '',
                }
            },
            example: '',
        };
    };
    /**
     * Returns form encoding type
     * @returns {null}
     */
    Button.prototype.getFormEncodingType = function () {
        return this.formEncodingType;
    };
    /**
     * Specifies how form-data should be encoded before sending it to a server. Only for type="submit"
     * @param encoding
     * @returns {Button}
     */
    Button.prototype.setFormEncodingType = function (encoding) {
        if (!encoding) {
            throw 'Parameter encoding is required';
        }
        if (this.allowedFormEncodingTypes.indexOf(encoding) == -1) {
            throw 'Invalid form encoding type ' + encoding + ' allowed encoding are : ' + this.allowedFormEncodingTypes.join(', ');
        }
        this.formEncodingType = encoding;
        return this;
    };
    /**
     * Returns form method
     * @returns {null}
     */
    Button.prototype.getFormMethod = function () {
        return this.formMethod;
    };
    /**
     * Sets form method
     * @param method
     * @returns {Button}
     */
    Button.prototype.setFormMethod = function (method) {
        if (this.allowedFormMethods.indexOf(method) == -1) {
            throw 'Invalid form method ' + method + ' allowed methods are : ' + this.allowedFormMethods.join(', ');
        }
        this.formMethod = method;
        return this;
    };
    /**
     * Returns autofocus
     * @returns {boolean}
     */
    Button.prototype.getAutoFocus = function () {
        return this.autofocus;
    };
    /**
     * Sets if the button should automatically get focus on page load
     * @param autoFocus
     * @returns {Button}
     */
    Button.prototype.setAutoFocus = function (autoFocus) {
        this.autofocus = autoFocus;
        return this;
    };
    Button.prototype.getForm = function () {
        return this.form;
    };
    /**
     * Sets the form this button is associated with
     * @param form
     */
    Button.prototype.setForm = function (form) {
        this.form = form;
        return this;
    };
    /**
     *
     * @returns {null}
     */
    Button.prototype.getButtonStyle = function () {
        return this.buttonStyle;
    };
    /**
     *
     * @param style
     * @returns {Button}
     */
    Button.prototype.setButtonStyle = function (style) {
        this.buttonStyle = style;
        return this;
    };
    /**
     *
     * @returns {null}
     */
    Button.prototype.getButtonSize = function () {
        return this.buttonSize;
    };
    /**
     *
     * @param size
     * @returns {Button}
     */
    Button.prototype.setButtonSize = function (size) {
        this.buttonSize = size;
        return this;
    };
    /**
     * Get button type button|submit|reset
     * @returns {string}
     */
    Button.prototype.getType = function () {
        return this.type;
    };
    /**
     * Sets button type button|submit|reset
     * @param type
     * @returns {Button}
     */
    Button.prototype.setType = function (type) {
        type = type.toLowerCase();
        if (this.allowedButtonTypes.indexOf(type) == -1) {
            throw 'Invalid button type ' + type;
        }
        this.type = type;
        return this;
    };
    /**
     * Render button component
     * @returns {null}
     */
    Button.prototype.render = function () {
        /**
         * Check if component is disabled
         */
        if (!this.isEnabled) {
            this.setAttribute('disabled');
        }
        /**
         * Add type attribute
         */
        this.setAttribute('type', this.getType());
        /**
         * Check if component has autofocus
         */
        if (this.getAutoFocus()) {
            this.setAttribute('autofocus');
        }
        /**
         * Check if we have a form associated to this button
         */
        if (this.getForm()) {
            this.setAttribute('form', this.getForm());
        }
        /**
         * Check if we have a form encoding, only works with submit
         */
        if (this.getFormEncodingType() && this.getType() == enumButtonType.SUBMIT) {
            this.setAttribute('formenctype', this.getFormEncodingType());
        }
        /**
         * Check if we have a form method, only works with submit
         */
        if (this.getFormMethod() && this.getType() == enumButtonType.SUBMIT) {
            this.setAttribute('formmethod', this.getFormMethod());
        }
        return _super.prototype.render.call(this);
    };
    return Button;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Checkbox.ts":
/*!************************************!*\
  !*** ./src/components/Checkbox.ts ***!
  \************************************/
/*! exports provided: Checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "./src/components/Input.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

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
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Checkbox(id) {
        var _this = _super.call(this, id) || this;
        _this.type = 'checkbox';
        _this.componentClassName = 'Checkbox';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Checkbox.getMetaData = function () {
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
                    comments: '',
                },
                Html5: {
                    supported: true,
                    comments: '',
                }
            },
            example: '',
        };
    };
    return Checkbox;
}(_Input__WEBPACK_IMPORTED_MODULE_0__["Input"]));



/***/ }),

/***/ "./src/components/Column.ts":
/*!**********************************!*\
  !*** ./src/components/Column.ts ***!
  \**********************************/
/*! exports provided: Column */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return Column; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

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
var Column = /** @class */ (function (_super) {
    __extends(Column, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Column(id) {
        var _this = _super.call(this, id) || this;
        /**
         *
         */
        _this.size = '12';
        // noinspection HtmlUnknownAttribute
        _this.template = '<div {attributes}>{child_items}</div>';
        _this.componentClassName = 'Column';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Column.getMetaData = function () {
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
                    comments: '',
                },
                Html5: {
                    supported: false,
                    comments: '',
                }
            },
            example: '@see Container example',
        };
    };
    /**
     *
     * @returns {null}
     */
    Column.prototype.getSize = function () {
        return this.size;
    };
    /**
     *
     * @param size
     * @returns {Column}
     */
    Column.prototype.setSize = function (size) {
        this.size = size;
        return this;
    };
    return Column;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Container.ts":
/*!*************************************!*\
  !*** ./src/components/Container.ts ***!
  \*************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Row */ "./src/components/Row.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


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
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Container(id) {
        var _this = _super.call(this, id) || this;
        /**
         * If container is fluid or not
         */
        _this.isFluid = false;
        _super.prototype.checkIfFeatureIsSupported.call(_this, Container.getMetaData());
        // noinspection HtmlUnknownAttribute
        _this.template = '<div {attributes}>{child_items}</div>';
        _this.componentClassName = 'Container';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Container.getMetaData = function () {
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
                    comments: '',
                },
                Html5: {
                    supported: false,
                    comments: '',
                }
            },
            example: '',
            codepen: [
                {
                    user: 'bgauthier555',
                    slug: 'oRdJZr',
                    title: 'Container, Row and Column example',
                    height: 400,
                }
            ],
        };
    };
    /**
     * Returns if container is fluid dor not
     * @returns {boolean}
     */
    Container.prototype.getIsFluid = function () {
        return this.isFluid;
    };
    /**
     * Sets if container is fluid or not
     * @param isFluid
     * @returns {Container}
     */
    Container.prototype.setIsFluid = function (isFluid) {
        this.isFluid = isFluid;
        return this;
    };
    /**
     * Add a row to the container
     * @param id
     * @returns {Component}
     */
    Container.prototype.addRow = function (id) {
        return this.addItem(new _Row__WEBPACK_IMPORTED_MODULE_1__["Row"](id));
    };
    return Container;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/DateInput.ts":
/*!*************************************!*\
  !*** ./src/components/DateInput.ts ***!
  \*************************************/
/*! exports provided: DateInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateInput", function() { return DateInput; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

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
var DateInput = /** @class */ (function (_super) {
    __extends(DateInput, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function DateInput(id) {
        var _this = _super.call(this, id) || this;
        // noinspection HtmlUnknownAttribute
        _this.template = '<div {attributes}></div>';
        _this.componentClassName = 'DateInput';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    DateInput.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category is one of layout | content | component
         * @type {object}
         */
        return {
            name: 'DateInput',
            description: 'HTML date element',
            category: 'content',
            libraries: {
                Bootstrap_4: {
                    supported: true,
                    comments: '',
                },
                Html5: {
                    supported: true,
                    comments: '',
                }
            },
            example: '',
            codepen: [
                {
                    user: 'bgauthier555',
                    slug: 'PvaamJ',
                    title: 'Date example',
                    height: 400,
                }
            ],
        };
    };
    return DateInput;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/Dialog.ts":
/*!**********************************!*\
  !*** ./src/components/Dialog.ts ***!
  \**********************************/
/*! exports provided: Dialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

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
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Dialog(id) {
        var _this = _super.call(this, id) || this;
        // noinspection HtmlUnknownAttribute
        _this.template = '<div {attributes}>{child_items}</div>';
        _this.componentClassName = 'Dialog';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Dialog.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category is one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Dialog',
            description: '',
            category: 'content',
            libraries: {
                Bootstrap_4: {
                    supported: true,
                    comments: '',
                },
                Html5: {
                    supported: false,
                    comments: '',
                }
            },
            example: '',
            codepen: [
                {
                    user: 'bgauthier555',
                    slug: 'byKKrM',
                    title: 'Container, Row and Column example',
                    height: 400,
                }
            ],
        };
    };
    return Dialog;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Div.ts":
/*!*******************************!*\
  !*** ./src/components/Div.ts ***!
  \*******************************/
/*! exports provided: Div */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Div", function() { return Div; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

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
var Div = /** @class */ (function (_super) {
    __extends(Div, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Div(id) {
        var _this = _super.call(this, id) || this;
        // noinspection HtmlUnknownAttribute
        _this.template = '<div {attributes}>{child_items}</div>';
        _this.componentClassName = 'Div';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Div.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category is one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Div',
            description: 'HTML Div element',
            category: 'content',
            libraries: {
                Bootstrap_4: {
                    supported: true,
                    comments: '',
                },
                Html5: {
                    supported: true,
                    comments: '',
                }
            },
            example: '',
            codepen: [
                {
                    user: 'bgauthier555',
                    slug: 'NVzGRQ',
                    title: 'Div example',
                    height: 400,
                }
            ],
        };
    };
    return Div;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Form.ts":
/*!********************************!*\
  !*** ./src/components/Form.ts ***!
  \********************************/
/*! exports provided: enumFormEncoding, enumFormMethod, Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumFormEncoding", function() { return enumFormEncoding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumFormMethod", function() { return enumFormMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Form encoding
 */
var enumFormEncoding;
(function (enumFormEncoding) {
    /**
     * application/x-www-form-urlencoded encoding
     * @type {string}
     */
    enumFormEncoding["URLENCODING"] = "application/x-www-form-urlencoded";
    /**
     * multipart/form-data encoding
     * @type {string}
     */
    enumFormEncoding["MULTIPART_FORM_DATA"] = "multipart/form-data";
    /**
     * text/plain encoding
     * @type {string}
     */
    enumFormEncoding["TEXT_PLAIN"] = "text/plain";
})(enumFormEncoding || (enumFormEncoding = {}));
/**
 * Form methods
 */
var enumFormMethod;
(function (enumFormMethod) {
    /**
     * Form method get
     * @type {string}
     */
    enumFormMethod["GET"] = "get";
    /**
     * Form method post
     * @type {string}
     */
    enumFormMethod["POST"] = "post";
})(enumFormMethod || (enumFormMethod = {}));

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
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Form(id) {
        var _this = _super.call(this, id) || this;
        // noinspection HtmlUnknownAttribute
        _this.template = '<form {attributes}>{child_items}</form>';
        _this.componentClassName = 'Form';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Form.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category is one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Form',
            description: 'HTML Form element',
            category: 'content',
            libraries: {
                Bootstrap_4: {
                    supported: true,
                    comments: '',
                },
                Html5: {
                    supported: true,
                    comments: '',
                }
            },
            example: '',
            codepen: [
                {
                    user: 'bgauthier555',
                    slug: 'qGKKVZ',
                    title: 'Form example',
                    height: 400,
                }
            ],
        };
    };
    return Form;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Heading.ts":
/*!***********************************!*\
  !*** ./src/components/Heading.ts ***!
  \***********************************/
/*! exports provided: Heading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

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
var Heading = /** @class */ (function (_super) {
    __extends(Heading, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Heading(id) {
        var _this = _super.call(this, id) || this;
        _this.level = 1;
        // noinspection HtmlUnknownAttribute
        _this.template = '<h{level} {attributes}>{child_items}</h{level}>';
        _this.componentClassName = 'Heading';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Heading.getMetaData = function () {
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
                    comments: '',
                },
                Html5: {
                    supported: true,
                    comments: '',
                }
            },
            example: '',
            codepen: [
                {
                    user: 'bgauthier555',
                    slug: 'arKvpy',
                    title: 'Heading example',
                    height: 400,
                }
            ],
        };
    };
    /**
     * Get heading level (1-6)
     * @returns {number}
     */
    Heading.prototype.getLevel = function () {
        return this.level;
    };
    /**
     * Set heading level (1-6)
     * @param level
     * @returns {Heading}
     */
    Heading.prototype.setLevel = function (level) {
        this.level = level;
        return this;
    };
    return Heading;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Hidden.ts":
/*!**********************************!*\
  !*** ./src/components/Hidden.ts ***!
  \**********************************/
/*! exports provided: Hidden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hidden", function() { return Hidden; });
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "./src/components/Input.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Input control
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 */
var Hidden = /** @class */ (function (_super) {
    __extends(Hidden, _super);
    /**
     *
     * @param id
     */
    function Hidden(id) {
        var _this = _super.call(this, id) || this;
        // noinspection HtmlUnknownAttribute
        _this.setType('hidden');
        _this.componentClassName = 'Hidden';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Hidden.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category is one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Hidden',
            description: 'HTML hidden input type',
            category: 'content',
            libraries: {
                Bootstrap_4: {
                    supported: true,
                    comments: '',
                },
                Html5: {
                    supported: true,
                    comments: '',
                }
            },
            example: '',
        };
    };
    return Hidden;
}(_Input__WEBPACK_IMPORTED_MODULE_0__["Input"]));



/***/ }),

/***/ "./src/components/Hr.ts":
/*!******************************!*\
  !*** ./src/components/Hr.ts ***!
  \******************************/
/*! exports provided: Hr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hr", function() { return Hr; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Input control
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 */
var Hr = /** @class */ (function (_super) {
    __extends(Hr, _super);
    /**
     *
     * @param id
     */
    function Hr(id) {
        var _this = _super.call(this, id) || this;
        // noinspection HtmlUnknownAttribute
        _this.template = '<hr {attributes}/>';
        _this.componentClassName = 'Hr';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Hr.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category is one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Hr',
            description: 'HTML Horizontal ruler',
            category: 'content',
            libraries: {
                Bootstrap_4: {
                    supported: true,
                    comments: '',
                },
                Html5: {
                    supported: true,
                    comments: '',
                }
            },
            example: '',
        };
    };
    return Hr;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/Icon.ts":
/*!********************************!*\
  !*** ./src/components/Icon.ts ***!
  \********************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Input control
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 */
var Icon = /** @class */ (function (_super) {
    __extends(Icon, _super);
    /**
     *
     * @param id
     */
    function Icon(id) {
        var _this = _super.call(this, id) || this;
        // noinspection HtmlUnknownAttribute
        _this.template = '<i {attributes}></i>';
        _this.componentClassName = 'Icon';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Icon.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category is one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Icon',
            description: 'Icon',
            category: 'content',
            libraries: {
                Bootstrap_4: {
                    supported: true,
                    comments: '',
                },
                Html5: {
                    supported: true,
                    comments: '',
                }
            },
            example: '',
            codepen: [
                {
                    user: 'bgauthier555',
                    slug: 'vwrrdm',
                    title: 'Icon example',
                    height: 400,
                }
            ],
        };
    };
    return Icon;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/Image.ts":
/*!*********************************!*\
  !*** ./src/components/Image.ts ***!
  \*********************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Input control
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 */
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    /**
     *
     * @param id
     */
    function Image(id) {
        var _this = _super.call(this, id) || this;
        // noinspection HtmlUnknownAttribute
        _this.template = '<img {attributes}/>';
        _this.componentClassName = 'Image';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Image.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category is one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Image',
            description: 'HTML Image element',
            category: 'content',
            libraries: {
                Bootstrap_4: {
                    supported: true,
                    comments: '',
                },
                Html5: {
                    supported: true,
                    comments: '',
                }
            },
            example: '',
            codepen: [
                {
                    user: 'bgauthier555',
                    slug: 'dEKKeN',
                    title: 'Image example',
                    height: 400,
                }
            ],
        };
    };
    return Image;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/Input.ts":
/*!*********************************!*\
  !*** ./src/components/Input.ts ***!
  \*********************************/
/*! exports provided: enumInputType, Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumInputType", function() { return enumInputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var enumInputType;
(function (enumInputType) {
    enumInputType["text"] = "text";
    enumInputType["hidden"] = "hidden";
})(enumInputType || (enumInputType = {}));
/**
 * Input control
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 */
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    /**
     *
     * @param id
     */
    function Input(id) {
        var _this = _super.call(this, id) || this;
        // noinspection HtmlUnknownAttribute
        _this.template = '<input {attributes}/>';
        _this.type = 'text';
        _this.componentClassName = 'Input';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Input.getMetaData = function () {
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
                    comments: '',
                },
                Html5: {
                    supported: true,
                    comments: '',
                }
            },
            example: '',
            codepen: [
                {
                    user: 'bgauthier555',
                    slug: 'VOxBvx',
                    title: 'Input component example',
                    height: 400,
                }
            ],
        };
    };
    /**
     *
     * @param type
     * @returns {Input}
     */
    Input.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    /**
     *
     * @returns {string}
     */
    Input.prototype.getType = function () {
        return this.type;
    };
    /**
     *
     * @returns {string}
     */
    Input.prototype.render = function () {
        this.setAttribute('type', this.type);
        return _super.prototype.render.call(this);
    };
    return Input;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/Label.ts":
/*!*********************************!*\
  !*** ./src/components/Label.ts ***!
  \*********************************/
/*! exports provided: Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

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
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Label(id) {
        var _this = _super.call(this, id) || this;
        // noinspection HtmlUnknownAttribute
        _this.template = '<label {attributes}>{child_items}</label>';
        _this.componentClassName = 'Label';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Label.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category is one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Label',
            description: 'HTML Label element',
            category: 'content',
            libraries: {
                Bootstrap_4: {
                    supported: true,
                    comments: '',
                },
                Html5: {
                    supported: true,
                    comments: '',
                }
            },
            example: '',
            codepen: [
                {
                    user: 'bgauthier555',
                    slug: 'PvaaBR',
                    title: 'Label example',
                    height: 400,
                }
            ],
        };
    };
    return Label;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Li.ts":
/*!******************************!*\
  !*** ./src/components/Li.ts ***!
  \******************************/
/*! exports provided: Li */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Li", function() { return Li; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

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
var Li = /** @class */ (function (_super) {
    __extends(Li, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Li(id) {
        var _this = _super.call(this, id) || this;
        // noinspection HtmlUnknownAttribute
        _this.template = '<li {attributes}>{child_items}</li>';
        _this.componentClassName = 'Li';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Li.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category is one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Li',
            description: 'HTML list item',
            category: 'content',
            libraries: {
                Bootstrap_4: {
                    supported: true,
                    comments: '',
                },
                Html5: {
                    supported: true,
                    comments: '',
                }
            },
            example: '@see Ol example',
        };
    };
    return Li;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Ol.ts":
/*!******************************!*\
  !*** ./src/components/Ol.ts ***!
  \******************************/
/*! exports provided: Ol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ol", function() { return Ol; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

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
var Ol = /** @class */ (function (_super) {
    __extends(Ol, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Ol(id) {
        var _this = _super.call(this, id) || this;
        // noinspection HtmlUnknownAttribute
        _this.template = '<ol {attributes}>{child_items}</ol>';
        _this.componentClassName = 'Ol';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Ol.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category is one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Ol',
            description: 'HTML ordered list item',
            category: 'content',
            libraries: {
                Bootstrap_4: {
                    supported: true,
                    comments: '',
                },
                Html5: {
                    supported: true,
                    comments: '',
                }
            },
            example: '',
            codepen: [
                {
                    user: 'bgauthier555',
                    slug: 'YbvyVj',
                    title: 'Heading example',
                    height: 400,
                }
            ],
        };
    };
    return Ol;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Option.ts":
/*!**********************************!*\
  !*** ./src/components/Option.ts ***!
  \**********************************/
/*! exports provided: Option */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

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
var Option = /** @class */ (function (_super) {
    __extends(Option, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Option(id) {
        var _this = _super.call(this, id) || this;
        // noinspection HtmlUnknownAttribute
        _this.template = '<option {attributes}>{child_items}</option>';
        _this.componentClassName = 'Option';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Option.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category is one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Option',
            description: 'HTML Option element',
            category: 'content',
            libraries: {
                Bootstrap_4: {
                    supported: true,
                    comments: '',
                },
                Html5: {
                    supported: true,
                    comments: '',
                }
            },
            example: '',
            codepen: [
                {
                    user: 'bgauthier555',
                    slug: 'BeVVOV',
                    title: 'Option example',
                    height: 400,
                }
            ],
        };
    };
    return Option;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Paragraph.ts":
/*!*************************************!*\
  !*** ./src/components/Paragraph.ts ***!
  \*************************************/
/*! exports provided: Paragraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return Paragraph; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

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
var Paragraph = /** @class */ (function (_super) {
    __extends(Paragraph, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Paragraph(id) {
        var _this = _super.call(this, id) || this;
        // noinspection HtmlUnknownAttribute
        _this.template = '<p {attributes}>{child_items}</p>';
        _this.componentClassName = 'Paragraph';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Paragraph.getMetaData = function () {
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
                    comments: '',
                },
                Html5: {
                    supported: true,
                    comments: '',
                }
            },
            example: '',
            codepen: [
                {
                    user: 'bgauthier555',
                    slug: 'joKggZ',
                    title: 'Paragraph example',
                    height: 400,
                }
            ],
        };
    };
    return Paragraph;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Password.ts":
/*!************************************!*\
  !*** ./src/components/Password.ts ***!
  \************************************/
/*! exports provided: Password */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Password", function() { return Password; });
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "./src/components/Input.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Password control
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @type {Password}
 */
var Password = /** @class */ (function (_super) {
    __extends(Password, _super);
    /**
     *
     * @param id
     */
    function Password(id) {
        var _this = _super.call(this, id) || this;
        _this.type = 'password';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Password.getMetaData = function () {
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
                    comments: '',
                },
                Html5: {
                    supported: true,
                    comments: '',
                }
            },
            example: '',
        };
    };
    return Password;
}(_Input__WEBPACK_IMPORTED_MODULE_0__["Input"]));



/***/ }),

/***/ "./src/components/Pre.ts":
/*!*******************************!*\
  !*** ./src/components/Pre.ts ***!
  \*******************************/
/*! exports provided: Pre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pre", function() { return Pre; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

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
var Pre = /** @class */ (function (_super) {
    __extends(Pre, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Pre(id) {
        var _this = _super.call(this, id) || this;
        // noinspection HtmlUnknownAttribute
        _this.template = '<pre {attributes}>{child_items}</pre>';
        _this.componentClassName = 'Pre';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Pre.getMetaData = function () {
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
                    comments: '',
                },
                Html5: {
                    supported: true,
                    comments: '',
                }
            },
            example: '',
        };
    };
    return Pre;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Radio.ts":
/*!*********************************!*\
  !*** ./src/components/Radio.ts ***!
  \*********************************/
/*! exports provided: Radio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return Radio; });
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "./src/components/Input.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Password control
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @type {Password}
 */
var Radio = /** @class */ (function (_super) {
    __extends(Radio, _super);
    function Radio(id) {
        var _this = _super.call(this, id) || this;
        _this.type = 'radio';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Radio.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category is one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Radio',
            description: 'HTML Radio button component',
            category: 'component',
            libraries: {
                Bootstrap_4: {
                    supported: true,
                    comments: '',
                },
                Html5: {
                    supported: true,
                    comments: '',
                }
            },
            example: '',
        };
    };
    return Radio;
}(_Input__WEBPACK_IMPORTED_MODULE_0__["Input"]));



/***/ }),

/***/ "./src/components/Row.ts":
/*!*******************************!*\
  !*** ./src/components/Row.ts ***!
  \*******************************/
/*! exports provided: Row */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


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
var Row = /** @class */ (function (_super) {
    __extends(Row, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Row(id) {
        var _this = _super.call(this, id) || this;
        // noinspection HtmlUnknownAttribute
        _this.template = '<div {attributes}>{child_items}</div>';
        _this.componentClassName = 'Row';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Row.getMetaData = function () {
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
                    comments: '',
                },
                Html5: {
                    supported: false,
                    comments: '',
                }
            },
            example: '@see Container example',
        };
    };
    /**
     * Adds a column to the row
     * @param id
     * @param size
     * @returns {*}
     */
    Row.prototype.addColumn = function (id, size) {
        var oItem = new _index__WEBPACK_IMPORTED_MODULE_1__["Column"](id);
        oItem.setSize(size);
        this.addItem(oItem);
        return oItem;
    };
    return Row;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Select.ts":
/*!**********************************!*\
  !*** ./src/components/Select.ts ***!
  \**********************************/
/*! exports provided: Select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store */ "./src/components/Store.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * Select list control
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 */
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    /**
     *
     * @param id
     */
    function Select(id) {
        var _this = _super.call(this, id) || this;
        _this.store = new _Store__WEBPACK_IMPORTED_MODULE_1__["Store"]();
        // noinspection HtmlUnknownAttribute
        _this.template = '<select {attributes}>\n' +
            '{options}' +
            '</select>';
        _this.componentClassName = 'Select';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Select.getMetaData = function () {
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
                    comments: '',
                },
                Html5: {
                    supported: true,
                    comments: '',
                }
            },
            example: '',
        };
    };
    /**
     *
     * @returns {null}
     */
    Select.prototype.render = function () {
        return _super.prototype.render.call(this);
    };
    return Select;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/Store.ts":
/*!*********************************!*\
  !*** ./src/components/Store.ts ***!
  \*********************************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/**
 * Data store
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 */
var Store = /** @class */ (function () {
    /**
     *
     */
    function Store() {
        this.data = [];
        this.model = {};
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Store.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category is one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Store',
            description: 'Data store',
            category: 'component',
            libraries: {
                Bootstrap_4: {
                    supported: true,
                    comments: '',
                },
                Html5: {
                    supported: true,
                    comments: '',
                }
            },
            example: '',
        };
    };
    /**
     * Nothing to do for now.
     * @param metaData
     */
    Store.patchComponent = function (metaData) { };
    return Store;
}());



/***/ }),

/***/ "./src/components/TextArea.ts":
/*!************************************!*\
  !*** ./src/components/TextArea.ts ***!
  \************************************/
/*! exports provided: TextArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return TextArea; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * TextArea control
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 */
var TextArea = /** @class */ (function (_super) {
    __extends(TextArea, _super);
    /**
     *
     * @param id
     */
    function TextArea(id) {
        var _this = _super.call(this, id) || this;
        // noinspection HtmlUnknownAttribute
        _this.template = '<textarea {attributes}>\n' +
            '{value}' +
            '</textarea>';
        _this.componentClassName = 'TextArea';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    TextArea.getMetaData = function () {
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
                    comments: '',
                },
                Html5: {
                    supported: true,
                    comments: '',
                }
            },
            example: '',
        };
    };
    return TextArea;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/Ul.ts":
/*!******************************!*\
  !*** ./src/components/Ul.ts ***!
  \******************************/
/*! exports provided: Ul */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ul", function() { return Ul; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

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
var Ul = /** @class */ (function (_super) {
    __extends(Ul, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Ul(id) {
        var _this = _super.call(this, id) || this;
        // noinspection HtmlUnknownAttribute
        _this.template = '<ul {attributes}>{child_items}</ul>';
        _this.componentClassName = 'Ul';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Ul.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category is one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Ul',
            description: 'HTML unordered list item',
            category: 'content',
            libraries: {
                Bootstrap_4: {
                    supported: true,
                    comments: '',
                },
                Html5: {
                    supported: true,
                    comments: '',
                }
            },
            example: '@see Ol example',
        };
    };
    return Ul;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



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
exports.initialize = exports.Semantic24_TextAreaDecorator = exports.Semantic24_InputDecorator = exports.Semantic24_AlertDecorator = exports.Bootstrap4_ButtonDecorator = exports.Bootstrap4_TextAreaDecorator = exports.Bootstrap4_RowDecorator = exports.Bootstrap4_InputDecorator = exports.Bootstrap4_ColumnDecorator = exports.Bootstrap4_AlertDecorator = exports.TextArea = exports.Store = exports.Select = exports.Row = exports.Radio = exports.Pre = exports.Password = exports.Paragraph = exports.Li = exports.Ul = exports.Ol = exports.Option = exports.Label = exports.Image = exports.Icon = exports.Hr = exports.Heading = exports.enumFormMethod = exports.enumFormEncoding = exports.Form = exports.Div = exports.Dialog = exports.DateInput = exports.Column = exports.Checkbox = exports.Container = exports.enumButtonSize = exports.enumButtonType = exports.enumButtonStyle = exports.Button = exports.Anchor = exports.enumAlertType = exports.Alert = exports.Hidden = exports.enumInputType = exports.Input = exports.ComponentContainer = exports.enumAutoCapitalize = exports.enumDir = exports.Component = exports.Patch = exports.Page = exports.Decorator = exports.FontAwesome = exports.enumLibrary = exports.enumMissingFeature = undefined;

var _UX = __webpack_require__(/*! ./UX */ "./src/UX.ts");

var _FontAwesome = __webpack_require__(/*! ./FontAwesome */ "./src/FontAwesome.ts");

var _Decorator = __webpack_require__(/*! ./Decorator */ "./src/Decorator.ts");

var _Page = __webpack_require__(/*! ./Page */ "./src/Page.ts");

var _Patch = __webpack_require__(/*! ./Patch */ "./src/Patch.ts");

var _Component = __webpack_require__(/*! ./Component */ "./src/Component.ts");

var _ComponentContainer = __webpack_require__(/*! ./ComponentContainer */ "./src/ComponentContainer.ts");

var _Input = __webpack_require__(/*! ./components/Input */ "./src/components/Input.ts");

var _Hidden = __webpack_require__(/*! ./components/Hidden */ "./src/components/Hidden.ts");

var _Alert = __webpack_require__(/*! ./components/Alert */ "./src/components/Alert.ts");

var _Anchor = __webpack_require__(/*! ./components/Anchor */ "./src/components/Anchor.ts");

var _Button = __webpack_require__(/*! ./components/Button */ "./src/components/Button.ts");

var _Container = __webpack_require__(/*! ./components/Container */ "./src/components/Container.ts");

var _Checkbox = __webpack_require__(/*! ./components/Checkbox */ "./src/components/Checkbox.ts");

var _Column = __webpack_require__(/*! ./components/Column */ "./src/components/Column.ts");

var _DateInput = __webpack_require__(/*! ./components/DateInput */ "./src/components/DateInput.ts");

var _Dialog = __webpack_require__(/*! ./components/Dialog */ "./src/components/Dialog.ts");

var _Div = __webpack_require__(/*! ./components/Div */ "./src/components/Div.ts");

var _Form = __webpack_require__(/*! ./components/Form */ "./src/components/Form.ts");

var _Heading = __webpack_require__(/*! ./components/Heading */ "./src/components/Heading.ts");

var _Hr = __webpack_require__(/*! ./components/Hr */ "./src/components/Hr.ts");

var _Icon = __webpack_require__(/*! ./components/Icon */ "./src/components/Icon.ts");

var _Image = __webpack_require__(/*! ./components/Image */ "./src/components/Image.ts");

var _Label = __webpack_require__(/*! ./components/Label */ "./src/components/Label.ts");

var _Option = __webpack_require__(/*! ./components/Option */ "./src/components/Option.ts");

var _Ol = __webpack_require__(/*! ./components/Ol */ "./src/components/Ol.ts");

var _Ul = __webpack_require__(/*! ./components/Ul */ "./src/components/Ul.ts");

var _Li = __webpack_require__(/*! ./components/Li */ "./src/components/Li.ts");

var _Paragraph = __webpack_require__(/*! ./components/Paragraph */ "./src/components/Paragraph.ts");

var _Password = __webpack_require__(/*! ./components/Password */ "./src/components/Password.ts");

var _Pre = __webpack_require__(/*! ./components/Pre */ "./src/components/Pre.ts");

var _Radio = __webpack_require__(/*! ./components/Radio */ "./src/components/Radio.ts");

var _Row = __webpack_require__(/*! ./components/Row */ "./src/components/Row.ts");

var _Select = __webpack_require__(/*! ./components/Select */ "./src/components/Select.ts");

var _Store = __webpack_require__(/*! ./components/Store */ "./src/components/Store.ts");

var _TextArea = __webpack_require__(/*! ./components/TextArea */ "./src/components/TextArea.ts");

var _AlertDecorator = __webpack_require__(/*! ./libraries/bootstrap4/components/AlertDecorator */ "./src/libraries/bootstrap4/components/AlertDecorator.ts");

var _ColumnDecorator = __webpack_require__(/*! ./libraries/bootstrap4/components/ColumnDecorator */ "./src/libraries/bootstrap4/components/ColumnDecorator.ts");

var _InputDecorator = __webpack_require__(/*! ./libraries/bootstrap4/components/InputDecorator */ "./src/libraries/bootstrap4/components/InputDecorator.ts");

var _RowDecorator = __webpack_require__(/*! ./libraries/bootstrap4/components/RowDecorator */ "./src/libraries/bootstrap4/components/RowDecorator.ts");

var _TextAreaDecorator = __webpack_require__(/*! ./libraries/bootstrap4/components/TextAreaDecorator */ "./src/libraries/bootstrap4/components/TextAreaDecorator.ts");

var _ButtonDecorator = __webpack_require__(/*! ./libraries/bootstrap4/components/ButtonDecorator */ "./src/libraries/bootstrap4/components/ButtonDecorator.ts");

var _AlertDecorator2 = __webpack_require__(/*! ./libraries/semantic2.4/components/AlertDecorator */ "./src/libraries/semantic2.4/components/AlertDecorator.ts");

var _InputDecorator2 = __webpack_require__(/*! ./libraries/semantic2.4/components/InputDecorator */ "./src/libraries/semantic2.4/components/InputDecorator.ts");

var _TextAreaDecorator2 = __webpack_require__(/*! ./libraries/semantic2.4/components/TextAreaDecorator */ "./src/libraries/semantic2.4/components/TextAreaDecorator.ts");

var _Init = __webpack_require__(/*! ./Init */ "./src/Init.js");

exports.enumMissingFeature = _UX.enumMissingFeature;
exports.enumLibrary = _UX.enumLibrary; /**
                                        * UX
                                        * @copyright Benoit Gauthier <bgauthier555@gmail.com>
                                        * @author Benoit Gauthier <bgauthier555@gmail.com>
                                        * @licence MIT
                                        */

exports.FontAwesome = _FontAwesome.FontAwesome;
exports.Decorator = _Decorator.Decorator;
exports.Page = _Page.Page;
exports.Patch = _Patch.Patch;
exports.Component = _Component.Component;
exports.enumDir = _Component.enumDir;
exports.enumAutoCapitalize = _Component.enumAutoCapitalize;
exports.ComponentContainer = _ComponentContainer.ComponentContainer;
exports.Input = _Input.Input;
exports.enumInputType = _Input.enumInputType;
exports.Hidden = _Hidden.Hidden;
exports.Alert = _Alert.Alert;
exports.enumAlertType = _Alert.enumAlertType;
exports.Anchor = _Anchor.Anchor;
exports.Button = _Button.Button;
exports.enumButtonStyle = _Button.enumButtonStyle;
exports.enumButtonType = _Button.enumButtonType;
exports.enumButtonSize = _Button.enumButtonSize;
exports.Container = _Container.Container;
exports.Checkbox = _Checkbox.Checkbox;
exports.Column = _Column.Column;
exports.DateInput = _DateInput.DateInput;
exports.Dialog = _Dialog.Dialog;
exports.Div = _Div.Div;
exports.Form = _Form.Form;
exports.enumFormEncoding = _Form.enumFormEncoding;
exports.enumFormMethod = _Form.enumFormMethod;
exports.Heading = _Heading.Heading;
exports.Hr = _Hr.Hr;
exports.Icon = _Icon.Icon;
exports.Image = _Image.Image;
exports.Label = _Label.Label;
exports.Option = _Option.Option;
exports.Ol = _Ol.Ol;
exports.Ul = _Ul.Ul;
exports.Li = _Li.Li;
exports.Paragraph = _Paragraph.Paragraph;
exports.Password = _Password.Password;
exports.Pre = _Pre.Pre;
exports.Radio = _Radio.Radio;
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

/***/ "./src/libraries/bootstrap4/components/AlertDecorator.ts":
/*!***************************************************************!*\
  !*** ./src/libraries/bootstrap4/components/AlertDecorator.ts ***!
  \***************************************************************/
/*! exports provided: Bootstrap4_AlertDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bootstrap4_AlertDecorator", function() { return Bootstrap4_AlertDecorator; });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Decorator */ "./src/Decorator.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Bootstrap 4 alert component decorator, decorator will change component properties based on library requirements
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 */
var Bootstrap4_AlertDecorator = /** @class */ (function (_super) {
    __extends(Bootstrap4_AlertDecorator, _super);
    function Bootstrap4_AlertDecorator() {
        return _super.call(this) || this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Bootstrap4_AlertDecorator.getMetaData = function () {
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
                    comments: '',
                },
                Html5: {
                    supported: false,
                    comments: '',
                }
            },
            example: '',
        };
    };
    /**
     * Decorate the component, change it's properties
     * Bootstrap4, add alert class and alert type class
     * Add attribute role=alert
     *
     * @param {UX.Component} component The component to decorate
     * @returns {UX.Component}
     */
    Bootstrap4_AlertDecorator.prototype.decorate = function (component) {
        component.addClass('alert');
        component.addClass(component.alertType);
        component.setAttribute('role', 'alert');
        var sTitle = '';
        if (component.getTitle()) {
            sTitle = '<h4 class="alert-heading">{icon}{title}</h4>';
        }
        if (component.getIsDismissible()) {
            component.addClass('alert-dismissible');
            component.template = '<div {attributes}>{icon}{title}{label}' +
                ' <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n' +
                '    <span aria-hidden="true">&times;</span>\n' +
                ' </button>' +
                '</div>';
        }
        /**
         * Replace title tag with title html if we have a title, if not will be removed from template
         */
        component.template = component.template.replace(/{title}/g, sTitle);
        /**
         * Override close method of alert
         */
        component.close = function () {
            // @ts-ignore
            $('#' + this.getId()).alert('close');
        };
        /**
         * This event fires immediately when the close instance method is called.
         * @param callback
         */
        component.onAlertClose = function (callback) {
            $('#' + this.getId()).on('close.bs.alert', callback);
            return this;
        };
        /**
         * This event is fired when the alert has been closed (will wait for CSS transitions to complete).
         * @param callback
         */
        component.onAlertClosed = function (callback) {
            $('#' + this.getId()).on('closed.bs.alert', callback);
            return this;
        };
        return component;
    };
    /**
     * Called after component has been initialized
     * @param component
     */
    Bootstrap4_AlertDecorator.prototype.init = function (component) {
    };
    return Bootstrap4_AlertDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["Decorator"]));



/***/ }),

/***/ "./src/libraries/bootstrap4/components/ButtonDecorator.ts":
/*!****************************************************************!*\
  !*** ./src/libraries/bootstrap4/components/ButtonDecorator.ts ***!
  \****************************************************************/
/*! exports provided: Bootstrap4_ButtonDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bootstrap4_ButtonDecorator", function() { return Bootstrap4_ButtonDecorator; });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Decorator */ "./src/Decorator.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Bootstrap 4 Column decorator
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritDoc
 */
var Bootstrap4_ButtonDecorator = /** @class */ (function (_super) {
    __extends(Bootstrap4_ButtonDecorator, _super);
    function Bootstrap4_ButtonDecorator() {
        return _super.call(this) || this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Bootstrap4_ButtonDecorator.getMetaData = function () {
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
                    comments: '',
                },
                Html5: {
                    supported: false,
                    comments: '',
                }
            },
            example: '',
        };
    };
    Bootstrap4_ButtonDecorator.prototype.decorate = function (component) {
        component.addClass('btn');
        if (component.getButtonStyle()) {
            component.addClass(component.getButtonStyle());
        }
        if (component.getButtonSize()) {
            component.addClass(component.getButtonSize());
        }
        return component;
    };
    /**
     * Called after component has been initialized
     * @param component
     */
    Bootstrap4_ButtonDecorator.prototype.init = function (component) {
    };
    return Bootstrap4_ButtonDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["Decorator"]));



/***/ }),

/***/ "./src/libraries/bootstrap4/components/ColumnDecorator.ts":
/*!****************************************************************!*\
  !*** ./src/libraries/bootstrap4/components/ColumnDecorator.ts ***!
  \****************************************************************/
/*! exports provided: Bootstrap4_ColumnDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bootstrap4_ColumnDecorator", function() { return Bootstrap4_ColumnDecorator; });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Decorator */ "./src/Decorator.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Bootstrap 4 Column decorator
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritDoc
 */
var Bootstrap4_ColumnDecorator = /** @class */ (function (_super) {
    __extends(Bootstrap4_ColumnDecorator, _super);
    function Bootstrap4_ColumnDecorator() {
        return _super.call(this) || this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Bootstrap4_ColumnDecorator.getMetaData = function () {
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
                    comments: '',
                },
                Html5: {
                    supported: false,
                    comments: '',
                }
            },
            example: '',
        };
    };
    Bootstrap4_ColumnDecorator.prototype.decorate = function (component) {
        component.addClass('col-md-' + component.getSize());
        return component;
    };
    /**
     * Called after component has been initialized
     * @param component
     */
    Bootstrap4_ColumnDecorator.prototype.init = function (component) {
    };
    return Bootstrap4_ColumnDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["Decorator"]));



/***/ }),

/***/ "./src/libraries/bootstrap4/components/InputDecorator.ts":
/*!***************************************************************!*\
  !*** ./src/libraries/bootstrap4/components/InputDecorator.ts ***!
  \***************************************************************/
/*! exports provided: Bootstrap4_InputDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bootstrap4_InputDecorator", function() { return Bootstrap4_InputDecorator; });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Decorator */ "./src/Decorator.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Bootstrap 4 input field decorator
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritDoc
 */
var Bootstrap4_InputDecorator = /** @class */ (function (_super) {
    __extends(Bootstrap4_InputDecorator, _super);
    function Bootstrap4_InputDecorator() {
        return _super.call(this) || this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Bootstrap4_InputDecorator.getMetaData = function () {
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
                    comments: '',
                },
                Html5: {
                    supported: false,
                    comments: '',
                }
            },
            example: '',
        };
    };
    Bootstrap4_InputDecorator.prototype.decorate = function (component) {
        // @ts-ignore
        window.UX.log('Decorating ' + component.getId());
        component.addClass('form-control');
        component.template = '<div class="form-group">\n' +
            '    <label for="{id}">{label}</label>\n' +
            '    <input {attributes}>\n' +
            '  </div>';
        return component;
    };
    /**
     * Called after component has been initialized
     * @param component
     */
    Bootstrap4_InputDecorator.prototype.init = function (component) {
    };
    return Bootstrap4_InputDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["Decorator"]));



/***/ }),

/***/ "./src/libraries/bootstrap4/components/RowDecorator.ts":
/*!*************************************************************!*\
  !*** ./src/libraries/bootstrap4/components/RowDecorator.ts ***!
  \*************************************************************/
/*! exports provided: Bootstrap4_RowDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bootstrap4_RowDecorator", function() { return Bootstrap4_RowDecorator; });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Decorator */ "./src/Decorator.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Bootstrap 4 Row decorator
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritDoc
 */
var Bootstrap4_RowDecorator = /** @class */ (function (_super) {
    __extends(Bootstrap4_RowDecorator, _super);
    function Bootstrap4_RowDecorator() {
        return _super.call(this) || this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Bootstrap4_RowDecorator.getMetaData = function () {
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
                    comments: '',
                },
                Html5: {
                    supported: false,
                    comments: '',
                }
            },
            example: '',
        };
    };
    Bootstrap4_RowDecorator.prototype.decorate = function (component) {
        component.addClass('row');
        return component;
    };
    /**
     * Called after component has been initialized
     * @param component
     */
    Bootstrap4_RowDecorator.prototype.init = function (component) {
    };
    return Bootstrap4_RowDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["Decorator"]));



/***/ }),

/***/ "./src/libraries/bootstrap4/components/TextAreaDecorator.ts":
/*!******************************************************************!*\
  !*** ./src/libraries/bootstrap4/components/TextAreaDecorator.ts ***!
  \******************************************************************/
/*! exports provided: Bootstrap4_TextAreaDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bootstrap4_TextAreaDecorator", function() { return Bootstrap4_TextAreaDecorator; });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Decorator */ "./src/Decorator.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Bootstrap 4 TextArea field decorator
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritDoc
 */
var Bootstrap4_TextAreaDecorator = /** @class */ (function (_super) {
    __extends(Bootstrap4_TextAreaDecorator, _super);
    function Bootstrap4_TextAreaDecorator() {
        return _super.call(this) || this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Bootstrap4_TextAreaDecorator.getMetaData = function () {
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
                    comments: '',
                },
                Html5: {
                    supported: false,
                    comments: '',
                }
            },
            example: '',
        };
    };
    /**
     *
     * @param component
     */
    Bootstrap4_TextAreaDecorator.prototype.decorate = function (component) {
        component.addClass('form-control');
        component.template = '<div class="form-group">\n' +
            '    <label for="{id}">{label}</label>\n' +
            '    <textarea {attributes}>{value}</textarea>\n' +
            '  </div>';
        return component;
    };
    /**
     * Called after component has been initialized
     * @param component
     */
    Bootstrap4_TextAreaDecorator.prototype.init = function (component) {
    };
    return Bootstrap4_TextAreaDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["Decorator"]));



/***/ }),

/***/ "./src/libraries/semantic2.4/components/AlertDecorator.ts":
/*!****************************************************************!*\
  !*** ./src/libraries/semantic2.4/components/AlertDecorator.ts ***!
  \****************************************************************/
/*! exports provided: Semantic24_AlertDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Semantic24_AlertDecorator", function() { return Semantic24_AlertDecorator; });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Decorator */ "./src/Decorator.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Semantic 2.4 alert field decorator
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritDoc
 */
var Semantic24_AlertDecorator = /** @class */ (function (_super) {
    __extends(Semantic24_AlertDecorator, _super);
    /**
     *
     */
    function Semantic24_AlertDecorator() {
        var _this = _super.call(this) || this;
        _this.alertTypeMapping = {
            'alert-warning': 'warning',
            'alert-success': 'positive',
            'alert-danger': 'negative',
        };
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Semantic24_AlertDecorator.getMetaData = function () {
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
                    comments: '',
                },
                Html5: {
                    supported: false,
                    comments: '',
                }
            },
            example: '',
        };
    };
    /**
     *
     * @param component
     * @returns {*}
     */
    Semantic24_AlertDecorator.prototype.decorate = function (component) {
        // @ts-ignore
        window.UX.log('Decorating ' + component.getId());
        component.addClass('ui');
        component.addClass('message');
        var sTitle = '';
        if (component.getTitle()) {
            sTitle = '<div class="header">{icon}{title}</div>';
        }
        component.template = '<div {attributes}>\n' +
            '  {title}\n' +
            '  <p>{label}</p>\n' +
            '</div>';
        if (component.getIsDismissible()) {
            component.template = '<div {attributes}>\n' +
                '  <i class="close icon"></i>\n' +
                '  {title}\n' +
                '  <p>{label}</p>\n' +
                '</div>';
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
    };
    /**
     * Called after component has been initialized
     * @param component
     */
    Semantic24_AlertDecorator.prototype.init = function (component) {
        $('#' + component.getId() + '.message .close')
            .on('click', function () {
            $(this)
                .closest('.message')
                // @ts-ignore
                .transition('fade');
        });
    };
    return Semantic24_AlertDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["Decorator"]));



/***/ }),

/***/ "./src/libraries/semantic2.4/components/InputDecorator.ts":
/*!****************************************************************!*\
  !*** ./src/libraries/semantic2.4/components/InputDecorator.ts ***!
  \****************************************************************/
/*! exports provided: Semantic24_InputDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Semantic24_InputDecorator", function() { return Semantic24_InputDecorator; });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Decorator */ "./src/Decorator.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Semantic 2.4 alert field decorator
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritDoc
 */
var Semantic24_InputDecorator = /** @class */ (function (_super) {
    __extends(Semantic24_InputDecorator, _super);
    function Semantic24_InputDecorator() {
        return _super.call(this) || this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Semantic24_InputDecorator.getMetaData = function () {
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
                    comments: '',
                },
                Html5: {
                    supported: false,
                    comments: '',
                }
            },
            example: '',
        };
    };
    Semantic24_InputDecorator.prototype.decorate = function (component) {
        component.template = '<div class="ui form field">\n' +
            '  <label>{label}</label>\n' +
            '  <input {attributes}>\n' +
            '</div>';
        return component;
    };
    /**
     * Called after component has been initialized
     * @param component
     */
    Semantic24_InputDecorator.prototype.init = function (component) {
    };
    return Semantic24_InputDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["Decorator"]));



/***/ }),

/***/ "./src/libraries/semantic2.4/components/TextAreaDecorator.ts":
/*!*******************************************************************!*\
  !*** ./src/libraries/semantic2.4/components/TextAreaDecorator.ts ***!
  \*******************************************************************/
/*! exports provided: Semantic24_TextAreaDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Semantic24_TextAreaDecorator", function() { return Semantic24_TextAreaDecorator; });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Decorator */ "./src/Decorator.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Bootstrap 4 TextArea field decorator
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritDoc
 */
var Semantic24_TextAreaDecorator = /** @class */ (function (_super) {
    __extends(Semantic24_TextAreaDecorator, _super);
    /**
     *
     */
    function Semantic24_TextAreaDecorator() {
        return _super.call(this) || this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Semantic24_TextAreaDecorator.getMetaData = function () {
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
                    comments: '',
                },
                Html5: {
                    supported: false,
                    comments: '',
                }
            },
            example: '',
        };
    };
    /**
     *
     * @param component
     */
    Semantic24_TextAreaDecorator.prototype.decorate = function (component) {
        component.template = '<div class="ui form field">\n' +
            '  <label>{label}</label>\n' +
            '  <textarea {attributes}>{value}</textarea>\n' +
            '</div>';
        return component;
    };
    /**
     * Called after component has been initialized
     * @param component
     */
    Semantic24_TextAreaDecorator.prototype.init = function (component) {
    };
    return Semantic24_TextAreaDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["Decorator"]));



/***/ })

/******/ });
});
//# sourceMappingURL=UX.js.map