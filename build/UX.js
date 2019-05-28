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
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
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
         * Required library/ies for this component
         */
        this.requiresLibrary = {};
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
         * Checks if component requires a specific library
         */
        // @ts-ignore
        if (this.requiresLibrary != null && this.requiresLibrary != window.UX.activeLibrary) {
            console.warn('Component ' + this.getId() + ' requires library ' + this.requiresLibrary);
        }
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
            }
            else {
                sComponentHTML = sComponentHTML.replace(oRegExp, '');
            }
        }
        return sComponentHTML;
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

/***/ "./src/components/Alert.ts":
/*!*********************************!*\
  !*** ./src/components/Alert.ts ***!
  \*********************************/
/*! exports provided: ALERT_PRIMARY, ALERT_SECONDARY, ALERT_SUCCESS, ALERT_DANGER, ALERT_WARNING, ALERT_INFO, ALERT_LIGHT, ALERT_DARK, Alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_PRIMARY", function() { return ALERT_PRIMARY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_SECONDARY", function() { return ALERT_SECONDARY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_SUCCESS", function() { return ALERT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_DANGER", function() { return ALERT_DANGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_WARNING", function() { return ALERT_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_INFO", function() { return ALERT_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_LIGHT", function() { return ALERT_LIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_DARK", function() { return ALERT_DARK; });
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
/**
 * Primary alert type, bootstrap 4
 * @type {string}
 */
var ALERT_PRIMARY = "alert-primary";
/**
 * Secondary alert type, bootstrap 4
 * @type {string}
 */
var ALERT_SECONDARY = "alert-secondary";
/**
 * Success alert type, bootstrap 4
 * @type {string}
 */
var ALERT_SUCCESS = "alert-success";
/**
 * Danger alert type, bootstrap 4
 * @type {string}
 */
var ALERT_DANGER = "alert-danger";
/**
 * Warning alert type, bootstrap 4
 * @type {string}
 */
var ALERT_WARNING = "alert-warning";
/**
 * Info alert type, bootstrap 4
 * @type {string}
 */
var ALERT_INFO = "alert-info";
/**
 * Light alert type, bootstrap 4
 * @type {string}
 */
var ALERT_LIGHT = "alert-light";
/**
 * Dark alert type, bootstrap 4
 * @type {string}
 */
var ALERT_DARK = "alert-dark";

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
         *
         */
        _this.title = null;
        /**
         *
         */
        _this.isDismissible = false;
        /**
         *
         */
        _this.alertType = ALERT_PRIMARY;
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
/*! exports provided: BUTTON_PRIMARY, BUTTON_SECONDARY, BUTTON_SUCCESS, BUTTON_DANGER, BUTTON_WARNING, BUTTON_INFO, BUTTON_LIGHT, BUTTON_DARK, BUTTON_LINK, BUTTON_OUTLINE_PRIMARY, BUTTON_OUTLINE_SECONDARY, BUTTON_OUTLINE_SUCCESS, BUTTON_OUTLINE_DANGER, BUTTON_OUTLINE_WARNING, BUTTON_OUTLINE_INFO, BUTTON_OUTLINE_LIGHT, BUTTON_OUTLINE_DARK, BUTTON_LARGE, BUTTON_SMALL, BUTTON_BLOCK, BUTTONTYPE_BUTTON, BUTTONTYPE_SUBMIT, BUTTONTYPE_RESET, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_PRIMARY", function() { return BUTTON_PRIMARY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_SECONDARY", function() { return BUTTON_SECONDARY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_SUCCESS", function() { return BUTTON_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_DANGER", function() { return BUTTON_DANGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_WARNING", function() { return BUTTON_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_INFO", function() { return BUTTON_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_LIGHT", function() { return BUTTON_LIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_DARK", function() { return BUTTON_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_LINK", function() { return BUTTON_LINK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_OUTLINE_PRIMARY", function() { return BUTTON_OUTLINE_PRIMARY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_OUTLINE_SECONDARY", function() { return BUTTON_OUTLINE_SECONDARY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_OUTLINE_SUCCESS", function() { return BUTTON_OUTLINE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_OUTLINE_DANGER", function() { return BUTTON_OUTLINE_DANGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_OUTLINE_WARNING", function() { return BUTTON_OUTLINE_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_OUTLINE_INFO", function() { return BUTTON_OUTLINE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_OUTLINE_LIGHT", function() { return BUTTON_OUTLINE_LIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_OUTLINE_DARK", function() { return BUTTON_OUTLINE_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_LARGE", function() { return BUTTON_LARGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_SMALL", function() { return BUTTON_SMALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_BLOCK", function() { return BUTTON_BLOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTONTYPE_BUTTON", function() { return BUTTONTYPE_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTONTYPE_SUBMIT", function() { return BUTTONTYPE_SUBMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTONTYPE_RESET", function() { return BUTTONTYPE_RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ "./src/components/Form.ts");
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
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
 * Primary color button
 * @type {string}
 */
var BUTTON_PRIMARY = 'btn-primary';
/**
 * Secondary color button
 * @type {string}
 */
var BUTTON_SECONDARY = 'btn-secondary';
/**
 * Success color button
 * @type {string}
 */
var BUTTON_SUCCESS = 'btn-success';
/**
 * Danger color button
 * @type {string}
 */
var BUTTON_DANGER = 'btn-danger';
/**
 * Warning color button
 * @type {string}
 */
var BUTTON_WARNING = 'btn-warning';
/**
 * Info color button
 * @type {string}
 */
var BUTTON_INFO = 'btn-info';
/**
 * Light color button
 * @type {string}
 */
var BUTTON_LIGHT = 'btn-light';
/**
 * Dark color button
 * @type {string}
 */
var BUTTON_DARK = 'btn-dark';
/**
 * Link button
 * @type {string}
 */
var BUTTON_LINK = 'btn-link';
/**
 * Primary outline color button
 * @type {string}
 */
var BUTTON_OUTLINE_PRIMARY = 'btn-outline-primary';
/**
 * Secondary outline color button
 * @type {string}
 */
var BUTTON_OUTLINE_SECONDARY = 'btn-outline-secondary';
/**
 * Success outline color button
 * @type {string}
 */
var BUTTON_OUTLINE_SUCCESS = 'btn-outline-success';
/**
 * Danger outline color button
 * @type {string}
 */
var BUTTON_OUTLINE_DANGER = 'btn-outline-danger';
/**
 * Warning outline color button
 * @type {string}
 */
var BUTTON_OUTLINE_WARNING = 'btn-outline-warning';
/**
 * Info outline color button
 * @type {string}
 */
var BUTTON_OUTLINE_INFO = 'btn-outline-info';
/**
 * Light outline color button
 * @type {string}
 */
var BUTTON_OUTLINE_LIGHT = 'btn-outline-light';
/**
 * Dark outline color button
 * @type {string}
 */
var BUTTON_OUTLINE_DARK = 'btn-outline-dark';
/**
 * Large button
 * @type {string}
 */
var BUTTON_LARGE = 'btn-lg';
/**
 * Small button
 * @type {string}
 */
var BUTTON_SMALL = 'btn-sm';
/**
 * Block button
 * @type {string}
 */
var BUTTON_BLOCK = 'btn-block';
/**
 * Button type
 * @type {string}
 */
var BUTTONTYPE_BUTTON = 'button';
/**
 * Submit type
 * @type {string}
 */
var BUTTONTYPE_SUBMIT = 'submit';
/**
 * Reset type
 * @type {string}
 */
var BUTTONTYPE_RESET = 'reset';

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
        _this.type = BUTTONTYPE_BUTTON;
        // noinspection HtmlUnknownAttribute
        _this.template = '<button {attributes}>{child_items}</button>';
        _this.componentClassName = 'Button';
        /**
         * List of allowed button types
         */
        _this.allowedButtonTypes = [
            BUTTONTYPE_BUTTON,
            BUTTONTYPE_RESET,
            BUTTONTYPE_SUBMIT
        ];
        _this.allowedFormEncodingTypes = [
            _Form__WEBPACK_IMPORTED_MODULE_0__["ENCODING_MULTIPART_FORM_DATA"],
            _Form__WEBPACK_IMPORTED_MODULE_0__["ENCODING_TEXT_PLAIN"],
            _Form__WEBPACK_IMPORTED_MODULE_0__["ENCODING_URLENCODING"]
        ];
        _this.allowedFormMethods = [
            _Form__WEBPACK_IMPORTED_MODULE_0__["FORM_METHOD_GET"],
            _Form__WEBPACK_IMPORTED_MODULE_0__["FORM_METHOD_POST"]
        ];
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
        encoding = encoding.toLowerCase().trim();
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
        method = method.toLowerCase().trim();
        if (!method) {
            throw 'Parameter method is required';
        }
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
        if (this.getFormEncodingType() && this.getType() == BUTTONTYPE_SUBMIT) {
            this.setAttribute('formenctype', this.getFormEncodingType());
        }
        /**
         * Check if we have a form method, only works with submit
         */
        if (this.getFormMethod() && this.getType() == BUTTONTYPE_SUBMIT) {
            this.setAttribute('formmethod', this.getFormMethod());
        }
        return _super.prototype.render.call(this);
    };
    return Button;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_1__["ComponentContainer"]));



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
        // noinspection HtmlUnknownAttribute
        _this.template = '<div {attributes}>{child_items}</div>';
        _this.componentClassName = 'Container';
        return _this;
    }
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
/*! exports provided: ENCODING_URLENCODING, ENCODING_MULTIPART_FORM_DATA, ENCODING_TEXT_PLAIN, FORM_METHOD_GET, FORM_METHOD_POST, Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENCODING_URLENCODING", function() { return ENCODING_URLENCODING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENCODING_MULTIPART_FORM_DATA", function() { return ENCODING_MULTIPART_FORM_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENCODING_TEXT_PLAIN", function() { return ENCODING_TEXT_PLAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_METHOD_GET", function() { return FORM_METHOD_GET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_METHOD_POST", function() { return FORM_METHOD_POST; });
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
 * application/x-www-form-urlencoded encoding
 * @type {string}
 */
var ENCODING_URLENCODING = 'application/x-www-form-urlencoded';
/**
 * multipart/form-data encoding
 * @type {string}
 */
var ENCODING_MULTIPART_FORM_DATA = 'multipart/form-data';
/**
 * text/plain encoding
 * @type {string}
 */
var ENCODING_TEXT_PLAIN = 'text/plain';
/**
 * Form method get
 * @type {string}
 */
var FORM_METHOD_GET = 'get';
/**
 * Form method post
 * @type {string}
 */
var FORM_METHOD_POST = 'post';

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
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
exports.initialize = exports.Semantic24_TextAreaDecorator = exports.Semantic24_InputDecorator = exports.Semantic24_AlertDecorator = exports.Bootstrap4_ButtonDecorator = exports.Bootstrap4_TextAreaDecorator = exports.Bootstrap4_RowDecorator = exports.Bootstrap4_InputDecorator = exports.Bootstrap4_ColumnDecorator = exports.Bootstrap4_AlertDecorator = exports.TextArea = exports.Store = exports.Select = exports.Row = exports.Radio = exports.Pre = exports.Password = exports.Paragraph = exports.Li = exports.Ul = exports.Ol = exports.Option = exports.Label = exports.Image = exports.Icon = exports.Heading = exports.FORM_METHOD_POST = exports.FORM_METHOD_GET = exports.ENCODING_MULTIPART_FORM_DATA = exports.ENCODING_URLENCODING = exports.ENCODING_TEXT_PLAIN = exports.Form = exports.Div = exports.Dialog = exports.DateInput = exports.Column = exports.Checkbox = exports.Container = exports.BUTTONTYPE_SUBMIT = exports.BUTTONTYPE_RESET = exports.BUTTONTYPE_BUTTON = exports.BUTTON_WARNING = exports.BUTTON_SUCCESS = exports.BUTTON_SMALL = exports.BUTTON_SECONDARY = exports.BUTTON_PRIMARY = exports.BUTTON_OUTLINE_WARNING = exports.BUTTON_OUTLINE_SUCCESS = exports.BUTTON_OUTLINE_SECONDARY = exports.BUTTON_OUTLINE_PRIMARY = exports.BUTTON_OUTLINE_LIGHT = exports.BUTTON_OUTLINE_INFO = exports.BUTTON_OUTLINE_DARK = exports.BUTTON_OUTLINE_DANGER = exports.BUTTON_LINK = exports.BUTTON_LIGHT = exports.BUTTON_LARGE = exports.BUTTON_INFO = exports.BUTTON_DARK = exports.BUTTON_BLOCK = exports.BUTTON_DANGER = exports.Button = exports.Anchor = exports.ALERT_WARNING = exports.ALERT_SUCCESS = exports.ALERT_LIGHT = exports.ALERT_INFO = exports.ALERT_DARK = exports.ALERT_DANGER = exports.ALERT_SECONDARY = exports.ALERT_PRIMARY = exports.Alert = exports.Input = exports.ComponentContainer = exports.Component = exports.Page = exports.Decorator = undefined;

var _Decorator = __webpack_require__(/*! ./Decorator */ "./src/Decorator.ts");

var _Page = __webpack_require__(/*! ./Page */ "./src/Page.ts");

var _Component = __webpack_require__(/*! ./Component */ "./src/Component.ts");

var _ComponentContainer = __webpack_require__(/*! ./ComponentContainer */ "./src/ComponentContainer.ts");

var _Input = __webpack_require__(/*! ./components/Input */ "./src/components/Input.ts");

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

exports.Decorator = _Decorator.Decorator; /**
                                           * UX
                                           * @copyright Benoit Gauthier <bgauthier555@gmail.com>
                                           * @author Benoit Gauthier <bgauthier555@gmail.com>
                                           * @licence MIT
                                           */

exports.Page = _Page.Page;
exports.Component = _Component.Component;
exports.ComponentContainer = _ComponentContainer.ComponentContainer;
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
exports.BUTTON_DANGER = _Button.BUTTON_DANGER;
exports.BUTTON_BLOCK = _Button.BUTTON_BLOCK;
exports.BUTTON_DARK = _Button.BUTTON_DARK;
exports.BUTTON_INFO = _Button.BUTTON_INFO;
exports.BUTTON_LARGE = _Button.BUTTON_LARGE;
exports.BUTTON_LIGHT = _Button.BUTTON_LIGHT;
exports.BUTTON_LINK = _Button.BUTTON_LINK;
exports.BUTTON_OUTLINE_DANGER = _Button.BUTTON_OUTLINE_DANGER;
exports.BUTTON_OUTLINE_DARK = _Button.BUTTON_OUTLINE_DARK;
exports.BUTTON_OUTLINE_INFO = _Button.BUTTON_OUTLINE_INFO;
exports.BUTTON_OUTLINE_LIGHT = _Button.BUTTON_OUTLINE_LIGHT;
exports.BUTTON_OUTLINE_PRIMARY = _Button.BUTTON_OUTLINE_PRIMARY;
exports.BUTTON_OUTLINE_SECONDARY = _Button.BUTTON_OUTLINE_SECONDARY;
exports.BUTTON_OUTLINE_SUCCESS = _Button.BUTTON_OUTLINE_SUCCESS;
exports.BUTTON_OUTLINE_WARNING = _Button.BUTTON_OUTLINE_WARNING;
exports.BUTTON_PRIMARY = _Button.BUTTON_PRIMARY;
exports.BUTTON_SECONDARY = _Button.BUTTON_SECONDARY;
exports.BUTTON_SMALL = _Button.BUTTON_SMALL;
exports.BUTTON_SUCCESS = _Button.BUTTON_SUCCESS;
exports.BUTTON_WARNING = _Button.BUTTON_WARNING;
exports.BUTTONTYPE_BUTTON = _Button.BUTTONTYPE_BUTTON;
exports.BUTTONTYPE_RESET = _Button.BUTTONTYPE_RESET;
exports.BUTTONTYPE_SUBMIT = _Button.BUTTONTYPE_SUBMIT;
exports.Container = _Container.Container;
exports.Checkbox = _Checkbox.Checkbox;
exports.Column = _Column.Column;
exports.DateInput = _DateInput.DateInput;
exports.Dialog = _Dialog.Dialog;
exports.Div = _Div.Div;
exports.Form = _Form.Form;
exports.ENCODING_TEXT_PLAIN = _Form.ENCODING_TEXT_PLAIN;
exports.ENCODING_URLENCODING = _Form.ENCODING_URLENCODING;
exports.ENCODING_MULTIPART_FORM_DATA = _Form.ENCODING_MULTIPART_FORM_DATA;
exports.FORM_METHOD_GET = _Form.FORM_METHOD_GET;
exports.FORM_METHOD_POST = _Form.FORM_METHOD_POST;
exports.Heading = _Heading.Heading;
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