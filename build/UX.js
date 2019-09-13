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
/*! exports provided: enumAutoCapitalize, enumDir, enumInputMode, enumTranslate, Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumAutoCapitalize", function() { return enumAutoCapitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumDir", function() { return enumDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumInputMode", function() { return enumInputMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumTranslate", function() { return enumTranslate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index__WEBPACK_IMPORTED_MODULE_0__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/**
 *  Auto Capitalize values
 *  https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize
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
/**
 *  Dir values
 *  https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir
 */
var enumDir;
(function (enumDir) {
    enumDir["ltr"] = "ltr";
    enumDir["rtl"] = "rtl";
    enumDir["auto"] = "auto";
})(enumDir || (enumDir = {}));
/**
 *  Input mode values
 *  https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode
 */
var enumInputMode;
(function (enumInputMode) {
    enumInputMode["none"] = "none";
    enumInputMode["text"] = "text";
    enumInputMode["decimal"] = "decimal";
    enumInputMode["numeric"] = "numeric";
    enumInputMode["tel"] = "tel";
    enumInputMode["search"] = "search";
    enumInputMode["email"] = "email";
    enumInputMode["url"] = "url";
})(enumInputMode || (enumInputMode = {}));
/**
 *  Translate values
 *  https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/translate
 */
var enumTranslate;
(function (enumTranslate) {
    enumTranslate["yes"] = "yes";
    enumTranslate["no"] = "no";
})(enumTranslate || (enumTranslate = {}));
/**
 * Base class for UI components
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 */
var Component = /** @class */ (function () {
    /**
     * Component constructor
     * @param sId Component unique ID
     */
    function Component(sId) {
        if (sId === void 0) { sId = null; }
        /**
         * Unique ID of component, will be used for id and name attributes by default
         */
        this._sId = null;
        /**
         * Indicates if component has been initialized or not
         */
        this._bIsInitialized = false;
        /**
         * HTML Container id for component, will use id as default
         */
        this._sContainerId = null;
        /**
         * Name of component
         */
        this._sName = null;
        /**
         * CSS Classes applied to component
         */
        this._aClasses = {};
        /**
         * Component Attributes
         */
        this._aAttributes = {};
        /**
         * Component Value
         */
        this._mValue = null;
        /**
         * If component is enabled or not
         */
        this._bIsEnabled = true;
        /**
         * Is component value is required or not
         */
        this._bIsRequired = false;
        /**
         * Html template used to render component
         */
        this._sTemplate = null;
        /**
         * Placeholder text
         */
        this._sPlaceholder = null;
        /**
         * The name of the class, parent class for example Div, Paragraph ...
         */
        this._sComponentClassName = 'Component';
        /**
         * List of styles applied to component
         */
        this._aStyles = {};
        /**
         * Parent object of component
         */
        this._oParent = null;
        /**
         * Data store used by component
         */
        this._oStore = null;
        /**
         * Provides a hint for generating a keyboard shortcut for the current element.
         */
        this._sAccessKey = null;
        /**
         * Controls whether and how text input is automatically capitalized as it is entered/edited by the user.
         */
        this._eAutoCapitalize = null;
        /**
         * Forms a class of attributes, called custom data attributes, that allow proprietary information
         * to be exchanged between the HTML and its DOM representation that may be used by scripts
         */
        this._aDataAttributes = {};
        /**
         * An enumerated attribute indicating if the element should be editable by the user
         */
        this._bContentEditable = false;
        /**
         * An enumerated attribute indicating the directionality of the element's text.
         */
        this._eDir = null;
        /**
         * The id of a <menu> to use as the contextual menu for this element.
         */
        this._sContextMenu = null;
        /**
         * An enumerated attribute indicating whether the element can be dragged
         */
        this._bDraggable = null;
        /**
         * Provides a hint to browsers as to the type of virtual keyboard configuration to use
         */
        this._eInputMode = null;
        /**
         * The is global attribute allows you to specify that a standard HTML element
         * should behave like a defined custom built-in element
         */
        this._sIs = null;
        /**
         * The unique, global identifier of an item.
         */
        this._sItemId = null;
        /**
         * Used to add properties to an item. Every HTML element may have an _sItemProp attribute specified, where an _sItemProp consists of a name and value pair.
         */
        this._sItemProp = null;
        /**
         * Properties that are not descendants of an element with the itemscope attribute can be associated with the item using an itemref
         */
        this._sItemRef = null;
        /**
         * _bItemScope (usually) works along with itemtype to specify that the HTML contained in a block is about a particular item.
         */
        this._bItemScope = null;
        /**
         * Specifies the URL of the vocabulary that will be used to define itemprops (item properties) in the data structure.
         */
        this._sItemType = null;
        /**
         * Helps define the language of an element
         */
        this._sLang = null;
        /**
         * Assigns a slot in a shadow DOM shadow tree to an element:
         */
        this._sSlot = null;
        /**
         * An enumerated attribute defines whether the element may be checked for spelling errors
         */
        this._bSpellcheck = null;
        /**
         * An integer attribute indicating if the element can take input focus (is focusable), if it should participate to sequential keyboard navigation, and if so, at what position.
         */
        this._nTabIndex = null;
        /**
         * Contains a text representing advisory information related to the element it belongs to.
         */
        this._sTitle = null;
        /**
         * An enumerated attribute that is used to specify whether an element's attribute values and the values of its Text node children are to be translated when the page is localized
         */
        this._eTranslate = null;
        //
        //  E V E N T S
        //
        /**
         * On abort event source
         * https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onabort
         */
        this.onAbort = null;
        /**
         *
         */
        this.onAutoComplete = null;
        /**
         *
         */
        this.onAutoCompleteError = null;
        /**
         *
         */
        this.onBlur = null;
        /**
         *
         */
        this.onCancel = null;
        /**
         *
         */
        this.onCanPlay = null;
        /**
         *
         */
        this.onCanPlayThrough = null;
        /**
         *
         */
        this.onChange = null;
        /**
         *
         */
        this.onClick = null;
        /**
         *
         */
        this.onClose = null;
        /**
         *
         */
        this.onContextMenu = null;
        /**
         *
         */
        this.onCueChange = null;
        /**
         *
         */
        this.onDblClick = null;
        /**
         *
         */
        this.onDrag = null;
        /**
         *
         */
        this.onDragEnd = null;
        /**
         *
         */
        this.onDragEnter = null;
        /**
         *
         */
        this.onDragExit = null;
        /**
         *
         */
        this.onDragLeave = null;
        /**
         *
         */
        this.onDragOver = null;
        /**
         *
         */
        this.onDragStart = null;
        /**
         *
         */
        this.onDrop = null;
        /**
         *
         */
        this.onDurationChange = null;
        /**
         *
         */
        this.onEmptied = null;
        /**
         *
         */
        this.onEnded = null;
        /**
         *
         */
        this.onError = null;
        /**
         *
         */
        this.onFocus = null;
        /**
         *
         */
        this.onInput = null;
        /**
         *
         */
        this.onInvalid = null;
        /**
         *
         */
        this.onKeyDown = null;
        /**
         *
         */
        this.onKeyPress = null;
        /**
         *
         */
        this.onKeyUp = null;
        /**
         *
         */
        this.onLoad = null;
        /**
         *
         */
        this.onLoadedData = null;
        /**
         *
         */
        this.onLoadedMetadata = null;
        /**
         *
         */
        this.onLoadStart = null;
        /**
         *
         */
        this.onMouseDown = null;
        /**
         *
         */
        this.onMouseEnter = null;
        /**
         *
         */
        this.onMouseLeave = null;
        /**
         *
         */
        this.onMouseMove = null;
        /**
         *
         */
        this.onMouseOut = null;
        /**
         *
         */
        this.onMouseOver = null;
        /**
         *
         */
        this.onMouseUp = null;
        /**
         *
         */
        this.onMouseWheel = null;
        /**
         *
         */
        this.onPause = null;
        /**
         *
         */
        this.onPlay = null;
        /**
         *
         */
        this.onPlaying = null;
        /**
         *
         */
        this.onProgress = null;
        /**
         *
         */
        this.onRateChange = null;
        /**
         *
         */
        this.onReset = null;
        /**
         *
         */
        this.onResize = null;
        /**
         *
         */
        this.onScroll = null;
        /**
         *
         */
        this.onSeeked = null;
        /**
         *
         */
        this.onSeeking = null;
        /**
         *
         */
        this.onSelect = null;
        /**
         *
         */
        this.onShow = null;
        /**
         *
         */
        this.onSort = null;
        /**
         *
         */
        this.onStalled = null;
        /**
         *
         */
        this.onSubmit = null;
        /**
         *
         */
        this.onSuspend = null;
        /**
         *
         */
        this.onTimeUpdate = null;
        /**
         *
         */
        this.onToggle = null;
        /**
         *
         */
        this.onVolumeChange = null;
        /**
         *
         */
        this.onWaiting = null;
        /**
         * If id is not passed, generate a random id for component
         */
        if (sId == null) {
            sId = Component.generateRandomId();
        }
        /**
         * Indicates if the component has been initialized or not
         * @type {boolean}
         */
        this._bIsInitialized = false;
        /**
         * The containing html element for this component
         * @type {string}
         */
        this._sContainerId = sId;
        /**
         * ID of the component
         * @type {string}
         */
        this._sId = sId;
        /**
         * Name of the component
         * @type {string}
         */
        this._sName = sId;
        /**
         * Add component to page
         */
        // @ts-ignore
        if (window.UX.Page.addItem != undefined) {
            // @ts-ignore
            window.UX.Page.addItem(this);
        }
    }
    /**
     *
     * @param oMetaData
     */
    Component.prototype.checkIfFeatureIsSupported = function (oMetaData) {
        // @ts-ignore
        if (oMetaData.libraries[window.UX.activeLibrary].supported) {
            return true;
        }
        else {
            // @ts-ignore
            if (window.UX.missingFeature == _index__WEBPACK_IMPORTED_MODULE_0__["enumMissingFeature"].IGNORE) {
                // Do nothing ignore the error
                // @ts-ignore
            }
            else if (window.UX.missingFeature == _index__WEBPACK_IMPORTED_MODULE_0__["enumMissingFeature"].ERROR) {
                // @ts-ignore
                throw 'Unsupported feature ' + oMetaData.name + ' when using library ' + window.UX.activeLibrary;
                // @ts-ignore
            }
            else if (window.UX.missingFeature == _index__WEBPACK_IMPORTED_MODULE_0__["enumMissingFeature"].WARNING) {
                // @ts-ignore
                window.UX.warn('Unsupported feature ' + oMetaData.name + ' when using library ' + window.UX.activeLibrary);
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
        if (this._bIsInitialized) {
            return;
        }
        // @ts-ignore
        window.UX.log('Component initialized ' + this.getId());
        /**
         * Render HTML code and insert into page
         */
        this.render();
        /**
         * Link event code
         */
        for (var e in _index__WEBPACK_IMPORTED_MODULE_0__["ComponentProperties"].CommonEvents) {
            var sAccessor = _index__WEBPACK_IMPORTED_MODULE_0__["ComponentProperties"].CommonEvents[e].accessor;
            if (this[sAccessor] != null) {
                $('#' + this._sId).on(e, this[sAccessor]);
            }
        }
        /**
         * Check if we have a decorator for this component
         */
        // @ts-ignore
        if (window.UX.libraries[window.UX.activeLibrary][this._sComponentClassName + 'Decorator'] != undefined) {
            // @ts-ignore
            var oDecorator = new window.UX.libraries[window.UX.activeLibrary][this._sComponentClassName + 'Decorator']();
            oDecorator.init(this);
        }
        this._bIsInitialized = true;
    };
    /**
     *
     * @param eventName
     * @param callback
     */
    Component.prototype.on = function (sEventName, callback) {
        if (!sEventName) {
            throw 'Component::on => eventName is required';
        }
        if (!callback) {
            throw 'Component::on => callback is required';
        }
        if (Object.keys(this).indexOf(sEventName) != -1) {
            this[sEventName] = callback;
        }
        else {
            console.log(this);
            // @ts-ignore
            window.UX.log('Component::on => Invalid event name ' + sEventName);
            throw 'Component::on => Invalid event name ' + sEventName + ' ' + Object.getPrototypeOf(this).constructor.name.toString();
        }
        return this;
    };
    /**
     * Returns _aStyles object
     * @returns {object}
     */
    Component.prototype.getStyles = function () {
        return this._aStyles;
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
                    this._aStyles[aTokens[0]] = aTokens[1];
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
    Component.prototype.setStyle = function (aStyle) {
        return this._aStyles = aStyle;
    };
    /**
     *
     */
    Component.prototype.getStyle = function () {
        return this._aStyles;
    };
    /**
     * Returns style list
     * @returns {string|string}
     */
    Component.prototype.getStyleList = function () {
        var sStyles = '';
        for (var x in this._aStyles) {
            if (this._aStyles.hasOwnProperty(x)) {
                sStyles = sStyles + x + ':' + this._aStyles[x] + ';';
            }
        }
        return sStyles;
    };
    /**
     *
     * @returns {null}
     */
    Component.prototype.getStore = function () {
        return this._oStore;
    };
    /**
     * Sets data _oStore for component
     * @param oStore
     */
    Component.prototype.setStore = function (oStore) {
        this._oStore = oStore;
        return this;
    };
    /**
     * Returns if component is enabled or not
     * @returns {boolean}
     */
    Component.prototype.getEnabled = function () {
        return this._bIsEnabled;
    };
    /**
     * Sets if component is enabled or not
     * @param bEnabled
     * @returns {Component}
     */
    Component.prototype.setEnabled = function (bEnabled) {
        this._bIsEnabled = bEnabled;
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
        return this._sId;
    };
    /**
     * Sets component ID
     * @param sId
     */
    Component.prototype.setId = function (sId) {
        this._sId = sId;
        return this;
    };
    /**
     * Returns component html _sTemplate
     * @returns {null}
     */
    Component.prototype.getTemplate = function () {
        return this._sTemplate;
    };
    /**
     * Sets component _sTemplate
     * @param template
     * @returns {Component}
     */
    Component.prototype.setTemplate = function (template) {
        this._sTemplate = template;
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
        this._aAttributes[sAttrName] = mValue;
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
     * Returns array of _aAttributes
     * @returns {*}
     */
    Component.prototype.getAttributes = function () {
        return this._aAttributes;
    };
    /**
     * Add a class to component, multiple _aClasses must be separated by spaces
     * @param {string} sClassName The CSS _aClasses to add to the component
     */
    Component.prototype.addClass = function (sClassName) {
        var aClasses = sClassName.split(' ');
        for (var x in aClasses) {
            this._aClasses[aClasses[x]] = aClasses[x];
        }
        return this;
    };
    /**
     * Returns array of _aClasses
     * @returns {*}
     */
    Component.prototype.getClasses = function () {
        return this._aClasses;
    };
    /**
     *
     * @param aClasses
     */
    Component.prototype.setClasses = function (aClasses) {
        this._aClasses = aClasses;
        return this;
    };
    /**
     * Returns component _mValue
     * @returns {null|*}
     */
    Component.prototype.getValue = function () {
        this._mValue = $('#' + this.getId()).val();
        return this._mValue;
    };
    /**
     * Sets component _mValue
     * @param mValue
     * @returns {Component}
     */
    Component.prototype.setValue = function (mValue) {
        this._mValue = mValue;
        $('#' + this.getId()).val(this._mValue);
        return this;
    };
    /**
     * Enables component
     * @returns {Component}
     */
    Component.prototype.enable = function () {
        this._bIsEnabled = true;
        // Reset enable for initialized component
        if (this._bIsInitialized) {
            $('#' + this.getId()).prop('disabled', '');
        }
        return this;
    };
    /**
     * Disables component
     * @returns {Component}
     */
    Component.prototype.disable = function () {
        this._bIsEnabled = false;
        // Reset enable for initialized component
        if (this._bIsInitialized) {
            $('#' + this.getId()).prop('disabled', 'disabled');
        }
        return this;
    };
    /**
     * Returns _sPlaceholder text
     * @returns {null}
     */
    Component.prototype.getPlaceholder = function () {
        return this._sPlaceholder;
    };
    /**
     * Sets _sPlaceholder text
     * @param sPlaceholder
     * @returns {Component}
     */
    Component.prototype.setPlaceholder = function (sPlaceholder) {
        this._sPlaceholder = sPlaceholder;
        // Reset _sPlaceholder for initialized component
        if (this._bIsInitialized) {
            $('#' + this.getId()).attr('_sPlaceholder', sPlaceholder);
        }
        return this;
    };
    /**
     * Returns _aClasses list as a string
     * @returns {string|string}
     */
    Component.prototype.getClassList = function () {
        var sClasses = '';
        for (var x in this._aClasses) {
            if (sClasses != '') {
                sClasses = sClasses + ' ';
            }
            sClasses = sClasses + x;
        }
        return sClasses;
    };
    /**
     * Returns string of component _aAttributes
     * @returns {string|string}
     */
    Component.prototype.getAttributeList = function () {
        var sAttributes = '';
        for (var x in this._aAttributes) {
            if (this._aAttributes.hasOwnProperty(x)) {
                if (sAttributes != '') {
                    sAttributes = sAttributes + ' ';
                }
                if (this._aAttributes[x] === null) {
                    sAttributes = sAttributes + x;
                }
                else {
                    sAttributes = sAttributes + x + '="' + this._aAttributes[x] + '"';
                }
            }
        }
        return sAttributes;
    };
    /**
     * Render component and returns HTML string
     */
    Component.prototype.render = function (map) {
        if (map === void 0) { map = null; }
        var _className = Object.getPrototypeOf(this).constructor.name.toString();
        /**
         * Check if we have a decorator for this component
         */
        // @ts-ignore
        if (window.UX.libraries[window.UX.activeLibrary][this._sComponentClassName + 'Decorator'] != undefined) {
            // @ts-ignore
            var oDecorator = new window.UX.libraries[window.UX.activeLibrary][this._sComponentClassName + 'Decorator']();
            oDecorator.decorate(this);
            // @ts-ignore
            window.UX.log('Found decorator for component ' + window.UX.activeLibrary + ' ' + this._sComponentClassName);
        }
        else {
            // @ts-ignore
            window.UX.log('No decorator for component ' + window.UX.activeLibrary + ' ' + this._sComponentClassName);
        }
        /**
         * Load template, set attributes, replace
         */
        var sComponentHTML = this._sTemplate;
        /**
         * For each property replace {propname} with value from accessor
         * AND
         * Apply render actions
         */
        var allProperties = null;
        if (_index__WEBPACK_IMPORTED_MODULE_0__["ComponentProperties"][_className]) {
            allProperties = __assign(__assign({}, _index__WEBPACK_IMPORTED_MODULE_0__["ComponentProperties"].Common), _index__WEBPACK_IMPORTED_MODULE_0__["ComponentProperties"][_className].properties);
        }
        else {
            allProperties = __assign({}, _index__WEBPACK_IMPORTED_MODULE_0__["ComponentProperties"].Common);
        }
        for (var sPropertyName in allProperties) {
            var _prop = allProperties[sPropertyName];
            /**
             * Check if we have render actions
             */
            if (_prop.render) {
                // For each render action
                for (var nRenderIndex in _prop.render) {
                    var _action = _prop.render[nRenderIndex];
                    var _getAction = null;
                    var _getValue = null;
                    if (_action.type == 'expression') {
                        var sExpression = _action.eval;
                        var _params = sExpression.match(/{([^}]+)}/g);
                        for (var nParamIndex in _params) {
                            var _sParamValue = '';
                            var _sParamName = _params[nParamIndex];
                            _sParamName = _sParamName.replace('{', '');
                            _sParamName = _sParamName.replace('}', '');
                            if (allProperties[_sParamName].accessor) {
                                _sParamValue = this['get' + allProperties[_sParamName].accessor]();
                            }
                            var _paramRegEx = new RegExp('\{' + _sParamName + '\}', 'g');
                            sExpression = sExpression.replace(_paramRegEx, _sParamValue);
                        }
                        var _expressionValue = eval(sExpression);
                        var _expressionRegEx = new RegExp('\{' + sPropertyName + '\}', 'g');
                        sComponentHTML = sComponentHTML.replace(_expressionRegEx, _expressionValue);
                    }
                    else if (_action.type == 'attribute') {
                        /**
                         * Create an attribute action
                         */
                        var sAttributeName = '';
                        if (_action.attributeName) {
                            sAttributeName = _action.attributeName;
                        }
                        else {
                            sAttributeName = sPropertyName;
                        }
                        if (_action.attributeValue) {
                            _getAction = _action.attributeValue;
                        }
                        else {
                            _getAction = 'get' + _prop.accessor;
                        }
                        _getValue = this[_getAction]();
                        if (_getValue) {
                            this.setAttribute(sAttributeName, _getValue);
                        }
                    }
                }
            }
            else {
                // @ts-ignore
                window.UX.log('No render actions for ' + sPropertyName);
            } // END OF RENDER ACTIONS
            /**
             * Replace property name by value if not already replaced by render action
             */
            var _get = 'get' + allProperties[sPropertyName].accessor;
            var oRegExp = new RegExp('\{' + sPropertyName + '\}', 'g');
            var _value = this[_get]();
            if (_value == null) {
                _value = '';
            }
            sComponentHTML = sComponentHTML.replace(oRegExp, _value);
        }
        // Placeholder
        if (this._sPlaceholder != null && this._sPlaceholder != '') {
            this.setAttribute('placeholder', this._sPlaceholder);
        }
        // data-* _aAttributes
        for (var x in this._aDataAttributes) {
            if (this._aDataAttributes.hasOwnProperty(x)) {
                this.setAttribute('data-' + x, this._aDataAttributes[x]);
            }
        }
        /**
         * Build attribute code
         * ALL CHANGES TO ATTRIBUTES MUST BE MADE BEFORE THIS
         */
        var sAttributes = this.getAttributeList();
        sComponentHTML = sComponentHTML.replace(/{attributes}/g, sAttributes);
        /**
         * If map of replacement is supplied replace all in _sTemplate
         */
        if (map) {
            for (var x in map) {
                var oRegExp = new RegExp('\{' + x + '\}', 'g');
                sComponentHTML = sComponentHTML.replace(oRegExp, map[x]);
            }
        }
        /**
         * For each property of component , replace key in _sTemplate
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
        var el = $('#' + this.getId());
        if (el.length > 0) {
            el.replaceWith(sComponentHTML);
        }
        else {
            // No dom element to replace, append to default container
            // @ts-ignore
            $(window.UX.defaultContainerId).append(sComponentHTML);
        }
        return sComponentHTML;
    };
    /**
     * Add CSS and JS code required to patch this component
     */
    Component.patchComponent = function (oMetaData) {
        // @ts-ignore
        window.UX.log('    * No patch for component ' + oMetaData.name);
    };
    /**
     * Returns access key
     */
    Component.prototype.getAccessKey = function () {
        return this._sAccessKey;
    };
    /**
     * Provides a hint for generating a keyboard shortcut for the current element. This attribute consists of a space-separated list of characters.
     * @param sAccessKey
     */
    Component.prototype.setAccessKey = function (sAccessKey) {
        this._sAccessKey = sAccessKey;
        return this;
    };
    /**
     * Returns autocapitalize
     */
    Component.prototype.getAutoCapitalize = function () {
        return this._eAutoCapitalize;
    };
    /**
     * Controls whether and how text input is automatically capitalized as it is entered/edited by the user.
     * @param eAutoCapitalize
     */
    Component.prototype.setAutoCapitalize = function (eAutoCapitalize) {
        this._eAutoCapitalize = eAutoCapitalize;
        return this;
    };
    /**
     * Returns a data-* attribute
     * @param sName
     */
    Component.prototype.getDataAttribute = function (sName) {
        return this._aDataAttributes[sName];
    };
    /**
     * Sets a data-* attribute
     * @param sName
     * @param mValue
     */
    Component.prototype.setDataAttribute = function (sName, mValue) {
        // Check if _sName starts with data-
        if (sName.toLowerCase().startsWith('data-')) {
            // remove data- if supplied
            sName = sName.substr(5);
        }
        this._aDataAttributes[sName] = mValue;
        return this;
    };
    /**
     * Returns if component is editable
     */
    Component.prototype.getContentEditable = function () {
        return this._bContentEditable;
    };
    /**
     * An enumerated attribute indicating if the element should be editable by the user
     * @param bContentEditable
     */
    Component.prototype.setContentEditable = function (bContentEditable) {
        this._bContentEditable = bContentEditable;
        return this;
    };
    /**
     *
     */
    Component.prototype.getDir = function () {
        return this._eDir;
    };
    /**
     *
     * @param eDir
     */
    Component.prototype.setDir = function (eDir) {
        this._eDir = eDir;
        return this;
    };
    /**
     *
     */
    Component.prototype.getContextMenu = function () {
        return this._sContextMenu;
    };
    /**
     *
     * @param sContextMenu
     */
    Component.prototype.setContextMenu = function (sContextMenu) {
        this._sContextMenu = sContextMenu;
        return this;
    };
    /**
     *
     */
    Component.prototype.getDraggable = function () {
        return this._bDraggable;
    };
    /**
     *
     * @param bDraggable
     */
    Component.prototype.setDraggable = function (bDraggable) {
        this._bDraggable = bDraggable;
        return this;
    };
    /**
     *
     */
    Component.prototype.getInputMode = function () {
        return this._eInputMode;
    };
    Component.prototype.setInputMode = function (eInputMode) {
        this._eInputMode = eInputMode;
        return this;
    };
    /**
     *
     */
    Component.prototype.getIs = function () {
        return this._sIs;
    };
    /**
     *
     * @param sIs
     */
    Component.prototype.setIs = function (sIs) {
        this._sIs = sIs;
        return this;
    };
    /**
     *
     */
    Component.prototype.getItemId = function () {
        return this._sItemId;
    };
    /**
     *
     * @param sItemId
     */
    Component.prototype.setItemId = function (sItemId) {
        this._sItemId = sItemId;
        return this;
    };
    /**
     *
     */
    Component.prototype.getItemProp = function () {
        return this._sItemProp;
    };
    /**
     *
     * @param sItemProp
     */
    Component.prototype.setItemProp = function (sItemProp) {
        this._sItemProp = sItemProp;
        return this;
    };
    /**
     *
     */
    Component.prototype.getItemRef = function () {
        return this._sItemRef;
    };
    /**
     *
     * @param sItemRef
     */
    Component.prototype.setItemRef = function (sItemRef) {
        this._sItemRef = sItemRef;
        return this;
    };
    /**
     *
     */
    Component.prototype.getItemScope = function () {
        return this._bItemScope;
    };
    /**
     *
     * @param sItemScope
     */
    Component.prototype.setItemScope = function (sItemScope) {
        this._bItemScope = sItemScope;
        return this;
    };
    /**
     *
     */
    Component.prototype.getItemType = function () {
        return this._sItemType;
    };
    /**
     *
     * @param sItemType
     */
    Component.prototype.setItemType = function (sItemType) {
        this._sItemType = sItemType;
        return this;
    };
    /**
     *
     */
    Component.prototype.getLang = function () {
        return this._sLang;
    };
    /**
     *
     * @param sLang
     */
    Component.prototype.setLang = function (sLang) {
        this._sLang = sLang;
        return this;
    };
    /**
     *
     */
    Component.prototype.getSlot = function () {
        return this._sSlot;
    };
    /**
     *
     * @param sSlot
     */
    Component.prototype.setSlot = function (sSlot) {
        this._sSlot = sSlot;
        return this;
    };
    /**
     *
     */
    Component.prototype.getSpellcheck = function () {
        return this._bSpellcheck;
    };
    /**
     *
     * @param bSpellcheck
     */
    Component.prototype.setSpellcheck = function (bSpellcheck) {
        this._bSpellcheck = bSpellcheck;
        return this;
    };
    /**
     *
     */
    Component.prototype.getTabIndex = function () {
        return this._nTabIndex;
    };
    /**
     *
     * @param nTabIndex
     */
    Component.prototype.setTabIndex = function (nTabIndex) {
        this._nTabIndex = nTabIndex;
        return this;
    };
    /**
     *
     */
    Component.prototype.getTitle = function () {
        return this._sTitle;
    };
    /**
     *
     * @param sTitle
     */
    Component.prototype.setTitle = function (sTitle) {
        this._sTitle = sTitle;
        return this;
    };
    /**
     *
     */
    Component.prototype.getTranslate = function () {
        return this._eTranslate;
    };
    /**
     *
     * @param eTranslate
     */
    Component.prototype.setTranslate = function (eTranslate) {
        this._eTranslate = eTranslate;
        return this;
    };
    /**
     *
     */
    Component.prototype.getName = function () {
        return this._sName;
    };
    /**
     *
     * @param sName
     */
    Component.prototype.setName = function (sName) {
        this._sName = sName;
        return this;
    };
    /**
     * Trigger an event
     * @param sEventName
     */
    Component.prototype.trigger = function (sEventName) {
        if (!sEventName) {
            throw 'eventName is required';
        }
        if (this[sEventName]) {
            // @ts-ignore
            window.UX.log('Component::trigger => Trigger event ' + sEventName + ' ' + Object.getPrototypeOf(this).constructor.name.toString());
            return this[sEventName]();
        }
        else {
            // @ts-ignore
            window.UX.log('Component::trigger => Invalid event name ' + sEventName);
            throw 'Component::trigger => Invalid event name ' + sEventName;
        }
        return false;
    };
    /**
     * Return parent container
     */
    Component.prototype.getParent = function () {
        return this._oParent;
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
    function ComponentContainer(sId) {
        var _this = _super.call(this, sId) || this;
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
    ComponentContainer.prototype.render = function (map) {
        if (map === void 0) { map = null; }
        var sChildItems = '';
        for (var x in this.items) {
            if (this.items.hasOwnProperty(x)) {
                sChildItems = sChildItems + this.items[x].render(map);
            }
        }
        var sHtml = _super.prototype.render.call(this, {
            child_items: sChildItems
        });
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
        // Set item _oParent to this container item
        item._oParent = this;
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
        if (id === void 0) { id = null; }
        // @ts-ignore
        return this.addItem(new window.UX.Li(id));
    };
    /**
     * Adds Ol item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addOl = function (id) {
        if (id === void 0) { id = null; }
        // @ts-ignore
        return this.addItem(new window.UX.Ol(id));
    };
    /**
     * Add Ul item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addUl = function (id) {
        if (id === void 0) { id = null; }
        // @ts-ignore
        return this.addItem(new window.UX.Ul(id));
    };
    /**
     * Adds div item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addDiv = function (id) {
        if (id === void 0) { id = null; }
        // @ts-ignore
        return this.addItem(new window.UX.Div(id));
    };
    /**
     * Adds anchor item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addAnchor = function (id) {
        if (id === void 0) { id = null; }
        // @ts-ignore
        return this.addItem(new window.UX.Anchor(id));
    };
    /**
     * Adds alert item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addAlert = function (id) {
        if (id === void 0) { id = null; }
        // @ts-ignore
        return this.addItem(new window.UX.Alert(id));
    };
    /**
     * Adds button item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addButton = function (id) {
        if (id === void 0) { id = null; }
        // @ts-ignore
        return this.addItem(new window.UX.Button(id));
    };
    /**
     * Adds checkbox item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addCheckbox = function (id) {
        if (id === void 0) { id = null; }
        // @ts-ignore
        return this.addItem(new window.UX.Checkbox(id));
    };
    /**
     * Adds heading item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addHeading = function (id) {
        if (id === void 0) { id = null; }
        // @ts-ignore
        return this.addItem(new window.UX.Heading(id));
    };
    /**
     * Adds input item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addInput = function (id) {
        if (id === void 0) { id = null; }
        // @ts-ignore
        return this.addItem(new window.UX.Input(id));
    };
    /**
     * Adds paragraph item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addParagraph = function (id) {
        if (id === void 0) { id = null; }
        // @ts-ignore
        return this.addItem(new window.UX.Paragraph(id));
    };
    /**
     * Adds password item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addPassword = function (id) {
        if (id === void 0) { id = null; }
        // @ts-ignore
        return this.addItem(new window.UX.Password(id));
    };
    /**
     * Adds pre item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addPre = function (id) {
        if (id === void 0) { id = null; }
        // @ts-ignore
        return this.addItem(new window.UX.Pre(id));
    };
    /**
     * Adds select item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addSelect = function (id) {
        if (id === void 0) { id = null; }
        // @ts-ignore
        return this.addItem(new window.UX.Select(id));
    };
    /**
     * Adds textarea item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addTextArea = function (id) {
        if (id === void 0) { id = null; }
        // @ts-ignore
        return this.addItem(new window.UX.TextArea(id));
    };
    /**
     * Adds head item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addHead = function (sId) {
        if (sId === void 0) { sId = null; }
        // @ts-ignore
        return this.addItem(new window.UX.Head(sId));
    };
    /**
     * Adds title item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addTitle = function (sId) {
        if (sId === void 0) { sId = null; }
        // @ts-ignore
        return this.addItem(new window.UX.Title(sId));
    };
    /**
     * Adds body item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addBody = function (sId) {
        if (sId === void 0) { sId = null; }
        // @ts-ignore
        return this.addItem(new window.UX.Body(sId));
    };
    /**
     * Adds row item to component
     * @param id
     * @returns {Component}
     */
    ComponentContainer.prototype.addRow = function (sId) {
        if (sId === void 0) { sId = null; }
        // @ts-ignore
        return this.addItem(new window.UX.Row(sId));
    };
    ComponentContainer.prototype.findItem = function (sId) {
        for (var x in this.items) {
            if (this.items[x].getId() == sId) {
                return this.items[x];
            }
            else {
                var item = this.items[x].findItem(sId);
                if (item != null) {
                    return item;
                }
            }
        }
        return null;
    };
    return ComponentContainer;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/ComponentProperties.ts":
/*!************************************!*\
  !*** ./src/ComponentProperties.ts ***!
  \************************************/
/*! exports provided: ComponentProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentProperties", function() { return ComponentProperties; });
/**
 *
 */
var ComponentProperties = /** @class */ (function () {
    function ComponentProperties() {
    }
    /**
     * Abbr custom properties and events
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr
     */
    ComponentProperties.Abbr = {
        properties: {},
        events: {},
    };
    /**
     *
     */
    ComponentProperties.Address = {
        properties: {},
        events: {}
    };
    /**
     * Bootstrap alert custom properties and events
     */
    ComponentProperties.Alert = {
        properties: {
            icon: {
                label: 'Icon',
                description: 'Alert icon',
                type: 'string',
                accessor: 'Icon',
                render: [
                    {
                        type: 'expression',
                        eval: 'UX.Icon.make(\'{icon}\')',
                    }
                ],
            },
            text: {
                label: 'Text',
                description: 'Alert text or content',
                type: 'string',
                accessor: 'Text',
            },
            isDismissible: {
                label: 'Is dismissible',
                description: 'Indicates if we can dismiss an alert message',
                type: 'boolean',
                accessor: 'IsDismissible',
            },
            alertTitle: {
                label: 'Alert title',
                description: 'Title of alert message',
                type: 'string',
                accessor: 'AlertTitle',
            },
            alertStyle: {
                label: 'Alert style',
                description: 'Style of alert message',
                type: 'enumAlertStyle',
                accessor: 'AlertStyle',
            }
        },
        events: {
            onalertclose: {
                label: 'onAlertClose',
                description: 'This event fires immediately when the close instance method is called.',
                accessor: 'onAlertClose',
                help: 'https://getbootstrap.com/docs/4.0/components/alerts/',
            },
            onalertclosed: {
                label: 'onAlertClosed',
                description: 'This event is fired when the alert has been closed (will wait for CSS transitions to complete).',
                accessor: 'onAlertClosed',
                help: 'https://getbootstrap.com/docs/4.0/components/alerts/',
            },
        }
    };
    /**
     *
     */
    ComponentProperties.Anchor = {
        properties: {},
        events: {}
    };
    /**
     * Area properties and events
     */
    ComponentProperties.Area = {
        properties: {
            shape: {
                label: 'Shape',
                description: 'The shape of the associated hot spot.',
                type: 'string',
                accessor: 'Shape',
            },
            coords: {
                label: 'Coordonates',
                description: 'A set of values specifying the coordinates of the hot-spot region.',
                type: 'string',
                accessor: 'Coordonates',
            },
            alt: {
                label: 'Alt',
                description: 'A text string alternative to display on browsers that do not display images.',
                type: 'string',
                accessor: 'Alt',
            },
        },
        events: {},
    };
    /**
     *
     */
    ComponentProperties.Article = {
        properties: {},
        events: {}
    };
    /**
     *
     */
    ComponentProperties.ASide = {
        properties: {},
        events: {}
    };
    /**
     *
     */
    ComponentProperties.Audio = {
        properties: {},
        events: {}
    };
    /**
     *
     */
    ComponentProperties.B = {
        properties: {},
        events: {}
    };
    /**
     *
     */
    ComponentProperties.BDI = {
        properties: {},
        events: {}
    };
    /**
     * Input properties and events
     */
    ComponentProperties.Input = {
        properties: {
            placeholder: {
                label: 'Placeholder',
                description: 'Input place holder text',
                type: 'string',
                accessor: 'Placeholder',
                render: [
                    {
                        type: 'attribute',
                    }
                ],
            },
            label: {
                label: 'Label',
                description: 'Component label or content',
                type: 'string',
                accessor: 'Label',
            },
        },
        events: {},
    };
    /**
     * Common properties for all components
     */
    ComponentProperties.Common = {
        accesskey: {
            label: 'Access key',
            description: 'Provides a hint for generating a keyboard shortcut for the current element. This attribute consists of a space-separated list of characters. The browser should use the first one that exists on the computer keyboard layout.',
            type: 'string',
            accessor: 'AccessKey',
            render: [
                {
                    type: 'attribute',
                }
            ],
        },
        autocapitalize: {
            label: 'Auto capitalize',
            description: 'Controls whether and how text input is automatically capitalized as it is entered/edited by the user.',
            type: 'enumAutoCapitalize',
            accessor: 'AutoCapitalize',
            render: [
                {
                    type: 'attribute',
                }
            ],
        },
        class: {
            label: 'Classes',
            description: 'A space-separated list of the classes of the element.',
            type: 'array',
            accessor: 'Classes',
            render: [
                {
                    type: 'attribute',
                    attributeName: 'class',
                    attributeValue: 'getClassList',
                }
            ],
        },
        contenteditable: {
            label: 'Content editable',
            description: 'An enumerated attribute indicating if the element should be editable by the user.',
            type: 'boolean',
            accessor: 'ContentEditable',
            render: [
                {
                    type: 'attribute',
                }
            ],
        },
        contextmenu: {
            label: 'Context menu',
            description: 'The id of a <menu> to use as the contextual menu for this element.',
            type: 'string',
            accessor: 'ContextMenu',
            render: [
                {
                    type: 'attribute',
                }
            ],
        },
        dir: {
            label: 'Directionality (Dir)',
            description: 'An enumerated attribute indicating the directionality of the element\'s text.',
            type: 'enumDir',
            accessor: 'Dir',
            render: [
                {
                    type: 'attribute',
                }
            ],
        },
        draggable: {
            label: 'Draggable',
            description: 'An enumerated attribute indicating whether the element can be dragged',
            type: 'boolean',
            accessor: 'Draggable',
            render: [
                {
                    type: 'attribute',
                }
            ],
        },
        id: {
            label: 'ID',
            description: 'Defines a unique identifier (ID) which must be unique in the whole document.',
            type: 'string',
            accessor: 'Id',
            render: [
                {
                    type: 'attribute',
                    attributeName: 'id',
                    attributeValue: 'getId',
                }
            ]
        },
        name: {
            label: 'Name',
            description: 'Defines a name for the element.',
            type: 'string',
            accessor: 'Name',
            render: [
                {
                    type: 'attribute',
                }
            ]
        },
        inputmode: {
            label: 'Input mode',
            description: 'Provides a hint to browsers as to the type of virtual keyboard configuration to use when editing this element or its contents.',
            type: 'enumInputMode',
            accessor: 'InputMode',
            render: [
                {
                    type: 'attribute',
                }
            ]
        },
        is: {
            label: 'Is',
            description: 'Allows you to specify that a standard HTML element should behave like a registered custom built-in element',
            type: 'string',
            accessor: 'Is',
            render: [
                {
                    type: 'attribute',
                }
            ]
        },
        itemid: {
            label: 'Item Id',
            description: 'The unique, global identifier of an item.',
            type: 'string',
            accessor: 'ItemId',
            render: [
                {
                    type: 'attribute',
                }
            ]
        },
        itemprop: {
            label: 'Item prop',
            description: 'Used to add properties to an item. Every HTML element may have an itemprop attribute specified, where an itemprop consists of a name and value pair.',
            type: 'string',
            accessor: 'ItemProp',
            render: [
                {
                    type: 'attribute',
                }
            ]
        },
        itemref: {
            label: 'Item ref',
            description: 'Properties that are not descendants of an element with the itemscope attribute can be associated with the item using an itemref. It provides a list of element ids (not itemids) with additional properties elsewhere in the document.',
            type: 'string',
            accessor: 'ItemRef',
            render: [
                {
                    type: 'attribute',
                }
            ]
        },
        itemscope: {
            label: 'Item scope',
            description: 'itemscope (usually) works along with itemtype to specify that the HTML contained in a block is about a particular item. itemscope creates the Item and defines the scope of the itemtype associated with it. itemtype is a valid URL of a vocabulary',
            type: 'boolean',
            attributeValue: false,
            accessor: 'ItemScope',
            render: [
                {
                    type: 'attribute',
                }
            ],
        },
        itemtype: {
            label: 'Item type',
            description: 'Specifies the URL of the vocabulary that will be used to define itemprops',
            type: 'string',
            accessor: 'ItemType',
            render: [
                {
                    type: 'attribute',
                }
            ]
        },
        lang: {
            label: 'Language',
            description: 'Helps define the language of an element: the language that non-editable elements are in, or the language that editable elements should be written in by the user.',
            type: 'string',
            accessor: 'Lang',
            render: [
                {
                    type: 'attribute',
                }
            ]
        },
        slot: {
            label: 'Slot',
            description: 'Assigns a slot in a shadow DOM shadow tree to an element: An element with a slot attribute is assigned to the slot created by the slot element whose name attribute\'s value matches that slot attribute\'s value.',
            type: 'string',
            accessor: 'Slot',
            render: [
                {
                    type: 'attribute',
                }
            ]
        },
        spellcheck: {
            label: 'Spellcheck',
            description: 'An enumerated attribute defines whether the element may be checked for spelling errors.',
            type: 'boolean',
            accessor: 'Spellcheck',
            render: [
                {
                    type: 'attribute',
                }
            ],
        },
        style: {
            label: 'Style',
            description: 'Contains CSS styling declarations to be applied to the element. ',
            type: 'array',
            isMap: true,
            accessor: 'Style',
            render: [
                {
                    type: 'attribute',
                    attributeValue: 'getStyleList',
                }
            ]
        },
        tabindex: {
            label: 'Tab Index',
            description: 'An integer attribute indicating if the element can take input focus (is focusable), if it should participate to sequential keyboard navigation, and if so, at what position.',
            type: 'number',
            accessor: 'TabIndex',
            render: [
                {
                    type: 'attribute',
                }
            ],
        },
        title: {
            label: 'Title',
            description: 'Contains a text representing advisory information related to the element it belongs to.',
            type: 'string',
            accessor: 'Title',
            render: [
                {
                    type: 'attribute',
                }
            ],
        },
        translate: {
            label: 'Translate',
            description: 'An enumerated attribute that is used to specify whether an element\'s attribute values and the values of its Text node children are to be translated when the page is localized',
            type: 'enumTranslate',
            accessor: 'Translate',
            render: [
                {
                    type: 'attribute',
                }
            ],
        }
    };
    /**
     * Common events
     */
    ComponentProperties.CommonEvents = {
        onabort: {
            label: 'onAbort',
            description: 'The onabort property of the GlobalEventHandlers mixin is the EventHandler for processing abort events sent to the window.',
            accessor: 'onAbort',
            help: 'https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onabort',
        },
        onautocomplete: {
            label: 'onAutoComplete',
            description: '',
            accessor: 'onAutoComplete',
            help: '',
        },
        onautocompleteerror: {
            label: 'onAutoCompleteError',
            description: '',
            accessor: 'onAutoCompleteError',
            help: '',
        },
        onblur: {
            label: 'onBlur',
            description: 'The blur event is raised when an element loses focus.',
            accessor: 'onBlur',
            help: 'https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onblur',
        },
        oncancel: {
            label: 'onCancel',
            description: '',
            accessor: 'onCancel',
            help: '',
        },
        oncanplay: {
            label: 'onCanPlay',
            description: '',
            accessor: 'onCanPlay',
            help: '',
        },
        oncanplaythrough: {
            label: 'onCanPlayThrough',
            description: '',
            accessor: 'onCanPlayThrough',
            help: '',
        },
        onchange: {
            label: 'onChange',
            description: '',
            accessor: 'onChange',
            help: '',
        },
        onclick: {
            label: 'onClick',
            description: '',
            accessor: 'onClick',
            help: '',
        },
        onclose: {
            label: 'onClose',
            description: '',
            accessor: 'onClose',
            help: '',
        },
        oncontextmenu: {
            label: 'onContextMenu',
            description: '',
            accessor: 'onContextMenu',
            help: '',
        },
        oncuechange: {
            label: 'onCueChange',
            description: '',
            accessor: 'onCueChange',
            help: '',
        },
        ondblclick: {
            label: 'onDblClick',
            description: '',
            accessor: 'onDblClick',
            help: '',
        },
        ondrag: {
            label: 'onDrag',
            description: '',
            accessor: 'onDrag',
            help: '',
        },
        ondragend: {
            label: 'onDragEnd',
            description: '',
            accessor: 'onDragEnd',
            help: '',
        },
        ondragenter: {
            label: 'onDragEnter',
            description: '',
            accessor: 'onDragEnter',
            help: '',
        },
        ondragexit: {
            label: 'onDragExit',
            description: '',
            accessor: 'onDragExit',
            help: '',
        },
        ondragleave: {
            label: 'onDragLeave',
            description: '',
            accessor: 'onDragLeave',
            help: '',
        },
        ondragover: {
            label: 'onDragOver',
            description: '',
            accessor: 'onDragOver',
            help: '',
        },
        ondragstart: {
            label: 'onDragStart',
            description: '',
            accessor: 'onDragStart',
            help: '',
        },
        ondrop: {
            label: 'onDrop',
            description: '',
            accessor: 'onDrop',
            help: '',
        },
        ondurationchange: {
            label: 'onDurationChange',
            description: '',
            accessor: 'onDurationChange',
            help: '',
        },
        onemptied: {
            label: 'onEmptied',
            description: '',
            accessor: 'onEmptied',
            help: '',
        },
        onended: {
            label: 'onEnded',
            description: '',
            accessor: 'onEnded',
            help: '',
        },
        onerror: {
            label: 'onError',
            description: '',
            accessor: 'onError',
            help: '',
        },
        onfocus: {
            label: 'onFocus',
            description: '',
            accessor: 'onFocus',
            help: '',
        },
        oninput: {
            label: 'onInput',
            description: '',
            accessor: 'onInput',
            help: '',
        },
        oninvalid: {
            label: 'onInvalid',
            description: '',
            accessor: 'onInvalid',
            help: '',
        },
        onkeydown: {
            label: 'onKeyDown',
            description: '',
            accessor: 'onKeyDown',
            help: '',
        },
        onkeypress: {
            label: 'onKeyPress',
            description: '',
            accessor: 'onKeyPress',
            help: '',
        },
        onkeyup: {
            label: 'onKeyUp',
            description: '',
            accessor: 'onKeyUp',
            help: '',
        },
        onload: {
            label: 'onLoad',
            description: '',
            accessor: 'onLoad',
            help: '',
        },
        onloadeddata: {
            label: 'onLoadedData',
            description: '',
            accessor: 'onLoadedData',
            help: '',
        },
        onloadedmetadata: {
            label: 'onLoadedMetadata',
            description: '',
            accessor: 'onLoadedMetadata',
            help: '',
        },
        onloadstart: {
            label: 'onLoadStart',
            description: '',
            accessor: 'onLoadStart',
            help: '',
        },
        onmousedown: {
            label: 'onMouseDown',
            description: '',
            accessor: 'onMouseDown',
            help: '',
        },
        onmouseenter: {
            label: 'onMouseEnter',
            description: '',
            accessor: 'onMouseEnter',
            help: '',
        },
        onmouseleave: {
            label: 'onMouseLeave',
            description: '',
            accessor: 'onMouseLeave',
            help: '',
        },
        onmousemove: {
            label: 'onMouseMove',
            description: '',
            accessor: 'onMouseMove',
            help: '',
        },
        onmouseout: {
            label: 'onMouseOut',
            description: '',
            accessor: 'onMouseOut',
            help: '',
        },
        onmouseover: {
            label: 'onMouseOver',
            description: '',
            accessor: 'onMouseOver',
            help: '',
        },
        onmouseup: {
            label: 'onMouseUp',
            description: '',
            accessor: 'onMouseUp',
            help: '',
        },
        onmousewheel: {
            label: 'onMouseWheel',
            description: '',
            accessor: 'onMouseWheel',
            help: '',
        },
        onpause: {
            label: 'onPlay',
            description: '',
            accessor: 'onPlay',
            help: '',
        },
        onplay: {
            label: 'onPlay',
            description: '',
            accessor: 'onPlay',
            help: '',
        },
        onplaying: {
            label: 'onPlaying',
            description: '',
            accessor: 'onPlaying',
            help: '',
        },
        onprogress: {
            label: 'onProgress',
            description: '',
            accessor: 'onProgress',
            help: '',
        },
        onratechange: {
            label: 'onRateChange',
            description: '',
            accessor: 'onRateChange',
            help: '',
        },
        onreset: {
            label: 'onReset',
            description: '',
            accessor: 'onReset',
            help: '',
        },
        onresize: {
            label: 'onResize',
            description: '',
            accessor: 'onResize',
            help: '',
        },
        onscroll: {
            label: 'onScroll',
            description: '',
            accessor: 'onScroll',
            help: '',
        },
        onseeked: {
            label: 'onSeeked',
            description: '',
            accessor: 'onSeeked',
            help: '',
        },
        onseeking: {
            label: 'onSeeking',
            description: '',
            accessor: 'onSeeking',
            help: '',
        },
        onselect: {
            label: 'onSelect',
            description: '',
            accessor: 'onSelect',
            help: '',
        },
        onshow: {
            label: 'onShow',
            description: '',
            accessor: 'onShow',
            help: '',
        },
        onsort: {
            label: 'onSort',
            description: '',
            accessor: 'onSort',
            help: '',
        },
        onstalled: {
            label: 'onStalled',
            description: '',
            accessor: 'onStalled',
            help: '',
        },
        onsubmit: {
            label: 'onSubmit',
            description: '',
            accessor: 'onSubmit',
            help: '',
        },
        onsuspend: {
            label: 'onSuspend',
            description: '',
            accessor: 'onSuspend',
            help: '',
        },
        ontimeupdate: {
            label: 'onTimeUpdate',
            description: '',
            accessor: 'onTimeUpdate',
            help: '',
        },
        ontoggle: {
            label: 'onToggle',
            description: '',
            accessor: 'onToggle',
            help: '',
        },
        onvolumechange: {
            label: 'onVolumeChange',
            description: '',
            accessor: 'onVolumeChange',
            help: '',
        },
        onwaiting: {
            label: 'onWaiting',
            description: '',
            accessor: 'onWaiting',
            help: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/waiting_event',
        }
    };
    return ComponentProperties;
}());



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
 * FontAwesome 5 _sIcon _aClasses
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
    window.UX.utilities = {};
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
    window.UX.log('--> active library _sIs ' + window.UX.activeLibrary);

    // Load library decorators

    window.UX.log('--> loading components');
    var keys = Object.keys(window.UX);
    for (var x in keys) {

        if (window.UX[keys[x]] == undefined) {
            console.log(keys[x] + ' _sIs undefined');
        }

        if (window.UX[keys[x]].getMetaData != undefined) {

            window.UX.log('  + Analyzing component ' + keys[x]);

            if (['component', 'layout', 'content'].indexOf(window.UX[keys[x]].getMetaData().category) != -1) {
                window.UX.log('    * Found Component class');
                window.UX.components[keys[x]] = window.UX[keys[x]];
                window.UX[keys[x]].patchComponent(window.UX[keys[x]].getMetaData);
            } else if ([_UX.enumComponentCategory.utility].indexOf(window.UX[keys[x]].getMetaData().category) != -1) {
                window.UX.log('    * Found utility class');
                window.UX.utilities[keys[x]] = window.UX[keys[x]];
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

    if (options.done) {
        options.done();
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
        /**
         * If page is initialized or not
         */
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
/*! exports provided: enumMissingFeature, enumLibrary, enumComponentCategory, enumLinkType, enumRefererPolicy, enumInputType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumMissingFeature", function() { return enumMissingFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumLibrary", function() { return enumLibrary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumComponentCategory", function() { return enumComponentCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumLinkType", function() { return enumLinkType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumRefererPolicy", function() { return enumRefererPolicy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumInputType", function() { return enumInputType; });
/**
 * Behaviour on missing feature
 */
var enumMissingFeature;
(function (enumMissingFeature) {
    /**
     * Indicates an error will be thrown if the requested feature _sIs not possible
     * @type {string}
     */
    enumMissingFeature["ERROR"] = "missing-feature-error";
    /**
     * Indicates a warning message will be logged in console if requested feature _sIs not possible
     * @type {string}
     */
    enumMissingFeature["WARNING"] = "missing-feature-warning";
    /**
     * Indicates patch css and js files will be loaded in order to try and offer a similar user experience
     * If the _sIs not possible, an error will be thrown
     * @type {string}
     */
    enumMissingFeature["PATCH"] = "missing-feature-patch";
    /**
     * Do not do anything
     */
    enumMissingFeature["IGNORE"] = "missing-feature-ignore";
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
/**
 *
 */
var enumComponentCategory;
(function (enumComponentCategory) {
    enumComponentCategory["layout"] = "layout";
    enumComponentCategory["content"] = "content";
    enumComponentCategory["component"] = "component";
    enumComponentCategory["utility"] = "utility";
})(enumComponentCategory || (enumComponentCategory = {}));
/**
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types
 */
var enumLinkType;
(function (enumLinkType) {
    enumLinkType["alternate"] = "alternate";
    enumLinkType["archives"] = "archives";
    enumLinkType["author"] = "author";
    enumLinkType["bookmark"] = "bookmark";
    enumLinkType["canonical"] = "canonical";
    enumLinkType["dnsprefetch"] = "dns-prefetch";
    enumLinkType["external"] = "external";
    enumLinkType["first"] = "first";
    enumLinkType["help"] = "help";
    enumLinkType["icon"] = "icon";
    enumLinkType["import"] = "import";
    enumLinkType["index"] = "index";
    enumLinkType["last"] = "last";
    enumLinkType["license"] = "license";
    enumLinkType["manifest"] = "manifest";
    enumLinkType["modulepreload"] = "modulepreload";
    enumLinkType["next"] = "next";
    enumLinkType["nofollow"] = "nofollow";
    enumLinkType["noopener"] = "noopener";
    enumLinkType["noreferrer"] = "noreferrer";
    enumLinkType["opener"] = "opener";
    enumLinkType["pingback"] = "pingback";
    enumLinkType["preconnect"] = "preconnect";
    enumLinkType["prefetch"] = "prefetch";
    enumLinkType["preload"] = "preload";
    enumLinkType["prerender"] = "prerender";
    enumLinkType["prev"] = "prev";
    enumLinkType["search"] = "search";
    enumLinkType["shortlink"] = "shortlink";
    enumLinkType["sidebar"] = "sidebar";
    enumLinkType["stylesheet"] = "stylesheet";
    enumLinkType["tag"] = "tag";
    enumLinkType["up"] = "up";
})(enumLinkType || (enumLinkType = {}));
/**
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 */
var enumRefererPolicy;
(function (enumRefererPolicy) {
    enumRefererPolicy["noreferer"] = "no-referrer";
    enumRefererPolicy["norefererwhendowngrade"] = "no-referrer-when-downgrade";
    enumRefererPolicy["origin"] = "origin";
    enumRefererPolicy["originwhencrossorigin"] = "origin-when-cross-origin";
    enumRefererPolicy["strictoriginwhencrossorigin"] = "strict-origin-when-cross-origin";
    enumRefererPolicy["unsafeurl"] = "unsafe-url";
})(enumRefererPolicy || (enumRefererPolicy = {}));
/**
 * Types of input
 * https://developer.mozilla.org/en-US/docs/Web/HTML
 */
var enumInputType;
(function (enumInputType) {
    enumInputType["button"] = "button";
    enumInputType["checkbox"] = "checkbox";
    enumInputType["color"] = "color";
    enumInputType["date"] = "date";
    enumInputType["datetime"] = "datetime";
    enumInputType["email"] = "email";
    enumInputType["file"] = "file";
    enumInputType["hidden"] = "hidden";
    enumInputType["image"] = "image";
    enumInputType["month"] = "month";
    enumInputType["number"] = "number";
    enumInputType["password"] = "password";
    enumInputType["radio"] = "radio";
    enumInputType["range"] = "range";
    enumInputType["reset"] = "reset";
    enumInputType["search"] = "search";
    enumInputType["submit"] = "submit";
    enumInputType["tel"] = "tel";
    enumInputType["text"] = "text";
    enumInputType["time"] = "time";
    enumInputType["url"] = "url";
    enumInputType["week"] = "week";
})(enumInputType || (enumInputType = {}));


/***/ }),

/***/ "./src/components/ASide.ts":
/*!*********************************!*\
  !*** ./src/components/ASide.ts ***!
  \*********************************/
/*! exports provided: ASide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASide", function() { return ASide; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * ASide component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside
 */
var ASide = /** @class */ (function (_super) {
    __extends(ASide, _super);
    /**
     * Component constructor
     * @param {string} id Component unique
     */
    function ASide(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-aside');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<aside {attributes}>{child_items}</aside>';
        _this._sComponentClassName = 'ASide';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    ASide.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'ASide',
            description: 'HTML ASide element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return ASide;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Abbr.ts":
/*!********************************!*\
  !*** ./src/components/Abbr.ts ***!
  \********************************/
/*! exports provided: Abbr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Abbr", function() { return Abbr; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Abbr component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr
 */
var Abbr = /** @class */ (function (_super) {
    __extends(Abbr, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Abbr(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-abbr');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<abbr {attributes}>{child_items}</abbr>';
        _this._sComponentClassName = 'Abbr';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Abbr.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Abbr',
            description: 'HTML Abbr element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Abbr;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Address.ts":
/*!***********************************!*\
  !*** ./src/components/Address.ts ***!
  \***********************************/
/*! exports provided: Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Address component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address
 */
var Address = /** @class */ (function (_super) {
    __extends(Address, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Address(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-address');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<address {attributes}>{child_items}</address>';
        _this._sComponentClassName = 'Address';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Address.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Address',
            description: 'HTML Address element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_HOME,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Address;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Alert.ts":
/*!*********************************!*\
  !*** ./src/components/Alert.ts ***!
  \*********************************/
/*! exports provided: enumAlertStyle, Alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumAlertStyle", function() { return enumAlertStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * List of alert styles
 */
var enumAlertStyle;
(function (enumAlertStyle) {
    /**
     * Primary alert type, bootstrap 4
     * @type {string}
     */
    enumAlertStyle["PRIMARY"] = "alert-primary";
    /**
     * Secondary alert type, bootstrap 4
     * @type {string}
     */
    enumAlertStyle["SECONDARY"] = "alert-secondary";
    /**
     * Success alert type, bootstrap 4
     * @type {string}
     */
    enumAlertStyle["SUCCESS"] = "alert-success";
    /**
     * Danger alert type, bootstrap 4
     * @type {string}
     */
    enumAlertStyle["DANGER"] = "alert-danger";
    /**
     * Warning alert type, bootstrap 4
     * @type {string}
     */
    enumAlertStyle["WARNING"] = "alert-warning";
    /**
     * Info alert type, bootstrap 4
     * @type {string}
     */
    enumAlertStyle["INFO"] = "alert-info";
    /**
     * Light alert type, bootstrap 4
     * @type {string}
     */
    enumAlertStyle["LIGHT"] = "alert-light";
    /**
     * Dark alert type, bootstrap 4
     * @type {string}
     */
    enumAlertStyle["DARK"] = "alert-dark";
})(enumAlertStyle || (enumAlertStyle = {}));
/**
 * Alert component
 * Displays an alert message to user
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://getbootstrap.com/docs/4.0/components/alerts/
 */
var Alert = /** @class */ (function (_super) {
    __extends(Alert, _super);
    /**
     * Alert component constructor
     * @param {string} id Unique ID for component
     */
    function Alert(sId) {
        var _this = _super.call(this, sId) || this;
        /**
         * Alert icon
         */
        _this._sIcon = null;
        /**
         * Text to display in the alert
         */
        _this._sText = null;
        /**
         * Title of the alert
         */
        _this._sAlertTitle = null;
        /**
         * If we can dismiss the alert message
         */
        _this.isDismissible = false;
        /**
         * Type of alert
         */
        _this._eAlertStyle = enumAlertStyle.PRIMARY;
        /**-
         * EVENTS
         */
        /**
         * This event fires immediately when the close instance method is called.
         */
        _this.onAlertClose = null;
        /**
         * This event is fired when the alert has been closed (will wait for CSS transitions to complete).
         */
        _this.onAlertClosed = null;
        _this.addClass('ux-alert');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<div {attributes}>{icon}{alertTitle}{text}</div>';
        _this._sComponentClassName = 'Alert';
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
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_EXCLAMATION_CIRCLE,
            isContainer: true,
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
     *
     */
    Alert.prototype.getText = function () {
        return this._sText;
    };
    /**
     *
     * @param sText
     */
    Alert.prototype.setText = function (sText) {
        this._sText = sText;
        return this;
    };
    /**
     *
     */
    Alert.prototype.getIcon = function () {
        return this._sIcon;
    };
    /**
     *
     * @param sIcon
     */
    Alert.prototype.setIcon = function (sIcon) {
        this._sIcon = sIcon;
        return this;
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
     * Returns alert _sTitle
     * @returns {string} The title of the alert component
     */
    Alert.prototype.getAlertTitle = function () {
        return this._sTitle;
    };
    /**
     * Sets alert _sTitle, if _sTitle is not _sOnProgress, the _sTitle will b displayed within the alert component
     * @param {string} title The _sTitle of the alert component
     * @returns {Alert}
     */
    Alert.prototype.setAlertTitle = function (title) {
        this._sAlertTitle = title;
        return this;
    };
    /**
     * Returns alert type (warning, success, ...) for alert component
     * @returns {string}
     */
    Alert.prototype.getAlertStyle = function () {
        return this._eAlertStyle;
    };
    /**
     * Sets alert type (warning, success, ...) for alert component
     * @param alertType
     * @returns {Alert}
     */
    Alert.prototype.setAlertStyle = function (alertType) {
        this._eAlertStyle = alertType;
        return this;
    };
    /**
     * Closes an alert
     */
    Alert.prototype.close = function () {
        $('#' + this.getId()).hide();
    };
    return Alert;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



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
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
/* harmony import */ var _UX__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UX */ "./src/UX.ts");
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
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 */
var Anchor = /** @class */ (function (_super) {
    __extends(Anchor, _super);
    /**
     * Component constructor
     * @param {string} sId Component unique id
     */
    function Anchor(sId) {
        var _this = _super.call(this, sId) || this;
        /**
         * This attribute instructs browsers to download a URL instead of navigating to it,
         * If the attribute has a value, it is used as the pre-filled file name in the Save prompt
         */
        _this._sDownload = null;
        /**
         * This attribute indicates the human language of the linked resource. It is purely advisory,
         * with no built-in functionality. Allowed values are determined by BCP47.
         */
        _this._sHrefLang = null;
        /**
         * Contains a space-separated list of URLs to which, when the hyperlink is followed,
         * POST requests with the body PING will be sent by the browser
         */
        _this._sPing = null;
        /**
         * Indicates which referrer to send when fetching the URL:
         */
        _this._eReferrerPolicy = null;
        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
         * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types
         */
        _this._eRel = null;
        _this.addClass('ux-anchor');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<a {attributes}>{child_items}</a>';
        _this._sComponentClassName = 'Anchor';
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
            category: _UX__WEBPACK_IMPORTED_MODULE_2__["enumComponentCategory"].content,
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_ANCHOR,
            isContainer: true,
            help: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a',
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
     *
     * @param map
     */
    Anchor.prototype.render = function (map) {
        if (map === void 0) { map = null; }
        // download
        if (this.getDownload()) {
            this.setAttribute('download', this.getDownload());
        }
        // hreflang
        if (this.getHrefLang()) {
            this.setAttribute('hreflang', this.getHrefLang());
        }
        // ping
        if (this.getPing()) {
            this.setAttribute('ping', this.getPing());
        }
        // referrerpolicy
        if (this.getReferrerPolicy()) {
            this.setAttribute('referrerpolicy', this.getReferrerPolicy().toString());
        }
        // rel
        if (this.getRel()) {
            this.setAttribute('rel', this.getRel().toString());
        }
        return _super.prototype.render.call(this, map);
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
    /**
     * This attribute instructs browsers to download a URL instead of navigating to it
     */
    Anchor.prototype.getDownload = function () {
        return this._sDownload;
    };
    /**
     * This attribute instructs browsers to download a URL instead of navigating to it
     * @param sDownload
     */
    Anchor.prototype.setDownload = function (sDownload) {
        this._sDownload = sDownload;
        return this;
    };
    /**
     *
     */
    Anchor.prototype.getHrefLang = function () {
        return this._sHrefLang;
    };
    /**
     *
     * @param sHrefLang
     */
    Anchor.prototype.setHrefLang = function (sHrefLang) {
        this._sHrefLang = sHrefLang;
        return this;
    };
    /**
     *
     */
    Anchor.prototype.getPing = function () {
        return this._sPing;
    };
    /**
     *
     * @param sPing
     */
    Anchor.prototype.setPing = function (sPing) {
        this._sPing = sPing;
        return this;
    };
    /**
     *
     */
    Anchor.prototype.getReferrerPolicy = function () {
        return this._eReferrerPolicy;
    };
    /**
     *
     * @param eReferrerPolicy
     */
    Anchor.prototype.setReferrerPolicy = function (eReferrerPolicy) {
        this._eReferrerPolicy = eReferrerPolicy;
        return this;
    };
    /**
     *
     */
    Anchor.prototype.getRel = function () {
        return this._eRel;
    };
    /**
     *
     * @param eRel
     */
    Anchor.prototype.setRef = function (eRel) {
        this._eRel = eRel;
        return this;
    };
    return Anchor;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Area.ts":
/*!********************************!*\
  !*** ./src/components/Area.ts ***!
  \********************************/
/*! exports provided: Area */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Area", function() { return Area; });
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
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
 * Area component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area
 */
var Area = /** @class */ (function (_super) {
    __extends(Area, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Area(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-area');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<area {attributes} />';
        _this._sComponentClassName = 'Area';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Area.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category is one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Area',
            description: 'HTML Area element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_0__["FontAwesome"].FA_SQUARE_O,
            isContainer: false,
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
            codepen: [],
        };
    };
    return Area;
}(_Component__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/Article.ts":
/*!***********************************!*\
  !*** ./src/components/Article.ts ***!
  \***********************************/
/*! exports provided: Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Article component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article
 */
var Article = /** @class */ (function (_super) {
    __extends(Article, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Article(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-article');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<article {attributes}>{child_items}</article>';
        _this._sComponentClassName = 'Article';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Article.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Article',
            description: 'HTML Article element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Article;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Audio.ts":
/*!*********************************!*\
  !*** ./src/components/Audio.ts ***!
  \*********************************/
/*! exports provided: Audio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Audio", function() { return Audio; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Audio component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
 */
var Audio = /** @class */ (function (_super) {
    __extends(Audio, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Audio(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-audio');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<audio {attributes}>{child_items}</audio>';
        _this._sComponentClassName = 'Audio';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Audio.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Audio',
            description: 'HTML Audio element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Audio;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/B.ts":
/*!*****************************!*\
  !*** ./src/components/B.ts ***!
  \*****************************/
/*! exports provided: B */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return B; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * B component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b
 */
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function B(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-b');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<b {attributes}>{child_items}</b>';
        _this._sComponentClassName = 'B';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    B.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'B',
            description: 'HTML B element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return B;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/BDI.ts":
/*!*******************************!*\
  !*** ./src/components/BDI.ts ***!
  \*******************************/
/*! exports provided: BDI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BDI", function() { return BDI; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * BDI component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi
 */
var BDI = /** @class */ (function (_super) {
    __extends(BDI, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function BDI(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-bdi');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<bdi {attributes}>{child_items}</bdi>';
        _this._sComponentClassName = 'BDI';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    BDI.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'BDI',
            description: 'HTML BDI element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return BDI;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/BDO.ts":
/*!*******************************!*\
  !*** ./src/components/BDO.ts ***!
  \*******************************/
/*! exports provided: BDO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BDO", function() { return BDO; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * BDO component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo
 */
var BDO = /** @class */ (function (_super) {
    __extends(BDO, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function BDO(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-bdo');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<bdo {attributes}>{child_items}</bdo>';
        _this._sComponentClassName = 'BDO';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    BDO.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'BDO',
            description: 'HTML Bdo element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return BDO;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/BlockQuote.ts":
/*!**************************************!*\
  !*** ./src/components/BlockQuote.ts ***!
  \**************************************/
/*! exports provided: BlockQuote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockQuote", function() { return BlockQuote; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Blockquote component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote
 */
var BlockQuote = /** @class */ (function (_super) {
    __extends(BlockQuote, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function BlockQuote(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-blockquote');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<blockquote {attributes}>{child_items}</blockquote>';
        _this._sComponentClassName = 'BlockQuote';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    BlockQuote.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'BlockQuote',
            description: 'HTML Blockquote element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return BlockQuote;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Body.ts":
/*!********************************!*\
  !*** ./src/components/Body.ts ***!
  \********************************/
/*! exports provided: Body */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Body component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body
 */
var Body = /** @class */ (function (_super) {
    __extends(Body, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Body(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-body');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<body {attributes}>{child_items}</body>';
        _this._sComponentClassName = 'Body';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Body.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Body',
            description: 'HTML Body element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Body;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Br.ts":
/*!******************************!*\
  !*** ./src/components/Br.ts ***!
  \******************************/
/*! exports provided: Br */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Br", function() { return Br; });
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
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
 * Br component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br
 */
var Br = /** @class */ (function (_super) {
    __extends(Br, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Br(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-br');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<br {attributes}/>';
        _this._sComponentClassName = 'Br';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Br.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Br',
            description: 'HTML Line break element',
            category: 'component',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_0__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Br;
}(_Component__WEBPACK_IMPORTED_MODULE_1__["Component"]));



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
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
    function Button(sId) {
        var _this = _super.call(this, sId) || this;
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
        _this.addClass('ux-button');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<button {attributes}>{child_items}</button>';
        _this._sComponentClassName = 'Button';
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
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: false,
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
        //this.type = type;
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
        if (!this._bIsEnabled) {
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

/***/ "./src/components/Canvas.ts":
/*!**********************************!*\
  !*** ./src/components/Canvas.ts ***!
  \**********************************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return Canvas; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Canvas component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
 */
var Canvas = /** @class */ (function (_super) {
    __extends(Canvas, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Canvas(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-canvas');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<canvas {attributes}>{child_items}</canvas>';
        _this._sComponentClassName = 'Canvas';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Canvas.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Canvas',
            description: 'HTML Graphics Canvas element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Canvas;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Caption.ts":
/*!***********************************!*\
  !*** ./src/components/Caption.ts ***!
  \***********************************/
/*! exports provided: Caption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Caption", function() { return Caption; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Caption component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
 */
var Caption = /** @class */ (function (_super) {
    __extends(Caption, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Caption(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-caption');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<caption {attributes}>{child_items}</caption>';
        _this._sComponentClassName = 'Caption';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Caption.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Caption',
            description: 'HTML Table Caption element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Caption;
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
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
    function Checkbox(sId) {
        var _this = _super.call(this, sId) || this;
        _this.setType(_Input__WEBPACK_IMPORTED_MODULE_0__["enumInputType"].checkbox);
        _this._sComponentClassName = 'Checkbox';
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
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_CHECK,
            isContainer: false,
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

/***/ "./src/components/Cite.ts":
/*!********************************!*\
  !*** ./src/components/Cite.ts ***!
  \********************************/
/*! exports provided: Cite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cite", function() { return Cite; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Cite component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite
 */
var Cite = /** @class */ (function (_super) {
    __extends(Cite, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Cite(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-cite');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<cite {attributes}>{child_items}</cite>';
        _this._sComponentClassName = 'Cite';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Cite.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Cite',
            description: 'HTML Citation element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Cite;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Code.ts":
/*!********************************!*\
  !*** ./src/components/Code.ts ***!
  \********************************/
/*! exports provided: Code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return Code; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Code component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code
 */
var Code = /** @class */ (function (_super) {
    __extends(Code, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Code(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-code');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<code {attributes}>{child_items}</code>';
        _this._sComponentClassName = 'Code';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Code.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Code',
            description: 'HTML Inline Code element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Code;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Col.ts":
/*!*******************************!*\
  !*** ./src/components/Col.ts ***!
  \*******************************/
/*! exports provided: Col */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return Col; });
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
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
 * Col component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col
 */
var Col = /** @class */ (function (_super) {
    __extends(Col, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Col(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-col');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<col {attributes}>';
        _this._sComponentClassName = 'Col';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Col.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Col',
            description: 'HTML Table column element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_0__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Col;
}(_Component__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/ColGroup.ts":
/*!************************************!*\
  !*** ./src/components/ColGroup.ts ***!
  \************************************/
/*! exports provided: ColGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColGroup", function() { return ColGroup; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * ColGroup component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup
 */
var ColGroup = /** @class */ (function (_super) {
    __extends(ColGroup, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function ColGroup(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-colgroup');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<colgroup {attributes}>{child_items}</colgroup>';
        _this._sComponentClassName = 'ColGroup';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    ColGroup.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'ColGroup',
            description: 'HTML Table column group element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return ColGroup;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



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
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
    function Column(sId) {
        var _this = _super.call(this, sId) || this;
        /**
         *
         */
        _this.size = '12';
        _this.addClass('ux-column');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<div {attributes}>{child_items}</div>';
        _this._sComponentClassName = 'Column';
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
            description: 'Column _aClasses indicate the number of columns you’d like to use out of the possible 12 per row.',
            category: 'layout',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_COLUMNS,
            isContainer: true,
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
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
    function Container(sId) {
        var _this = _super.call(this, sId) || this;
        /**
         * If container is fluid or not
         */
        _this.isFluid = false;
        _super.prototype.checkIfFeatureIsSupported.call(_this, Container.getMetaData());
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<div {attributes}>{child_items}</div>';
        _this._sComponentClassName = 'Container';
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
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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

/***/ "./src/components/Data.ts":
/*!********************************!*\
  !*** ./src/components/Data.ts ***!
  \********************************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Data component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data
 */
var Data = /** @class */ (function (_super) {
    __extends(Data, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Data(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-data');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<data {attributes}>{child_items}</data>';
        _this._sComponentClassName = 'Data';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Data.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Data',
            description: 'HTML data element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Data;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/DataList.ts":
/*!************************************!*\
  !*** ./src/components/DataList.ts ***!
  \************************************/
/*! exports provided: DataList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataList", function() { return DataList; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * DataList component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist
 */
var DataList = /** @class */ (function (_super) {
    __extends(DataList, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function DataList(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-datalist');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<datalist {attributes}>{child_items}</datalist>';
        _this._sComponentClassName = 'DataList';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    DataList.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'DataList',
            description: 'HTML data list element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return DataList;
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
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * DateInput component
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
    function DateInput(sId) {
        var _this = _super.call(this, sId) || this;
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<div {attributes}></div>';
        _this._sComponentClassName = 'DateInput';
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
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_CALENDAR,
            isContainer: false,
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

/***/ "./src/components/Dd.ts":
/*!******************************!*\
  !*** ./src/components/Dd.ts ***!
  \******************************/
/*! exports provided: Dd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dd", function() { return Dd; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Dd component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd
 */
var Dd = /** @class */ (function (_super) {
    __extends(Dd, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Dd(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-dd');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<dd {attributes}>{child_items}</dd>';
        _this._sComponentClassName = 'Dd';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Dd.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Dd',
            description: 'HTML Description details element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Dd;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Del.ts":
/*!*******************************!*\
  !*** ./src/components/Del.ts ***!
  \*******************************/
/*! exports provided: Del */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Del", function() { return Del; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Del component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del
 */
var Del = /** @class */ (function (_super) {
    __extends(Del, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Del(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-del');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<del {attributes}>{child_items}</del>';
        _this._sComponentClassName = 'Del';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Del.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Del',
            description: 'HTML Deleted Text element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Del;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Details.ts":
/*!***********************************!*\
  !*** ./src/components/Details.ts ***!
  \***********************************/
/*! exports provided: Details */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Details", function() { return Details; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Details component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
 */
var Details = /** @class */ (function (_super) {
    __extends(Details, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Details(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-details');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<details {attributes}>{child_items}</details>';
        _this._sComponentClassName = 'Details';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Details.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Details',
            description: 'HTML Details disclosure element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Details;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Dfn.ts":
/*!*******************************!*\
  !*** ./src/components/Dfn.ts ***!
  \*******************************/
/*! exports provided: Dfn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dfn", function() { return Dfn; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Dfn component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn
 */
var Dfn = /** @class */ (function (_super) {
    __extends(Dfn, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Dfn(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-dfn');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<dfn {attributes}>{child_items}</dfn>';
        _this._sComponentClassName = 'Dfn';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Dfn.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Dfn',
            description: 'HTML Definition element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Dfn;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



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
 * Dialog component
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
    function Dialog(sId) {
        var _this = _super.call(this, sId) || this;
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<div {attributes}>{child_items}</div>';
        _this._sComponentClassName = 'Dialog';
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
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
    function Div(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-div');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<div {attributes}>{child_items}</div>';
        _this._sComponentClassName = 'Div';
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
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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

/***/ "./src/components/Dl.ts":
/*!******************************!*\
  !*** ./src/components/Dl.ts ***!
  \******************************/
/*! exports provided: Dl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dl", function() { return Dl; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Dl component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl
 */
var Dl = /** @class */ (function (_super) {
    __extends(Dl, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Dl(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-dl');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<dl {attributes}>{child_items}</dl>';
        _this._sComponentClassName = 'Dl';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Dl.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Dl',
            description: 'HTML Description list element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Dl;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Dt.ts":
/*!******************************!*\
  !*** ./src/components/Dt.ts ***!
  \******************************/
/*! exports provided: Dt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dt", function() { return Dt; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Dt component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt
 */
var Dt = /** @class */ (function (_super) {
    __extends(Dt, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Dt(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-dt');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<dt {attributes}>{child_items}</dt>';
        _this._sComponentClassName = 'Dt';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Dt.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Dt',
            description: 'HTML Description term element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Dt;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Em.ts":
/*!******************************!*\
  !*** ./src/components/Em.ts ***!
  \******************************/
/*! exports provided: Em */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Em", function() { return Em; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Em component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em
 */
var Em = /** @class */ (function (_super) {
    __extends(Em, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Em(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-em');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<em {attributes}>{child_items}</em>';
        _this._sComponentClassName = 'Em';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Em.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Em',
            description: 'HTML Emphasis element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Em;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Embed.ts":
/*!*********************************!*\
  !*** ./src/components/Embed.ts ***!
  \*********************************/
/*! exports provided: Embed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Embed", function() { return Embed; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Embed component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed
 */
var Embed = /** @class */ (function (_super) {
    __extends(Embed, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Embed(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-embed');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<embed {attributes}/>';
        _this._sComponentClassName = 'Embed';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Embed.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Embed',
            description: 'HTML Embed External Content element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Embed;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/FieldSet.ts":
/*!************************************!*\
  !*** ./src/components/FieldSet.ts ***!
  \************************************/
/*! exports provided: FieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldSet", function() { return FieldSet; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * FieldSet component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset
 */
var FieldSet = /** @class */ (function (_super) {
    __extends(FieldSet, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function FieldSet(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-fieldset');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<fieldset {attributes}>{child_items}</fieldset>';
        _this._sComponentClassName = 'FieldSet';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    FieldSet.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'FieldSet',
            description: 'HTML Field set element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return FieldSet;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/FigCaption.ts":
/*!**************************************!*\
  !*** ./src/components/FigCaption.ts ***!
  \**************************************/
/*! exports provided: FigCaption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FigCaption", function() { return FigCaption; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * FigCaption component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption
 */
var FigCaption = /** @class */ (function (_super) {
    __extends(FigCaption, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function FigCaption(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-figcaption');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<figcaption {attributes}>{child_items}</figcaption>';
        _this._sComponentClassName = 'FigCaption';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    FigCaption.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'FigCaption',
            description: 'HTML Figure caption element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return FigCaption;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Figure.ts":
/*!**********************************!*\
  !*** ./src/components/Figure.ts ***!
  \**********************************/
/*! exports provided: Figure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Figure", function() { return Figure; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Figure component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure
 */
var Figure = /** @class */ (function (_super) {
    __extends(Figure, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Figure(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-figure');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<figcaption {attributes}>{child_items}</figcaption>';
        _this._sComponentClassName = 'Figure';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Figure.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Figure',
            description: 'HTML Figure element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Figure;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Footer.ts":
/*!**********************************!*\
  !*** ./src/components/Footer.ts ***!
  \**********************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Footer component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer
 */
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Footer(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-footer');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<footer {attributes}>{child_items}</footer>';
        _this._sComponentClassName = 'Footer';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Footer.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Footer',
            description: 'HTML Footer element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Footer;
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
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Form component
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
    function Form(sId) {
        var _this = _super.call(this, sId) || this;
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<form {attributes}>{child_items}</form>';
        _this._sComponentClassName = 'Form';
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
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_0__["FontAwesome"].FA_FILE_INVOICE,
            isContainer: true,
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
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_1__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Head.ts":
/*!********************************!*\
  !*** ./src/components/Head.ts ***!
  \********************************/
/*! exports provided: Head */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Head", function() { return Head; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Head component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head
 */
var Head = /** @class */ (function (_super) {
    __extends(Head, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Head(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-head');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<head {attributes}>{child_items}</head>';
        _this._sComponentClassName = 'Head';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Head.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Head',
            description: 'HTML Head element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Head;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Header.ts":
/*!**********************************!*\
  !*** ./src/components/Header.ts ***!
  \**********************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Header component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header
 */
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Header(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-header');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<header {attributes}>{child_items}</header>';
        _this._sComponentClassName = 'Header';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Header.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Header',
            description: 'HTML Header element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Header;
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
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
    function Heading(sId) {
        var _this = _super.call(this, sId) || this;
        _this.level = 1;
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<h{level} {attributes}>{child_items}</h{level}>';
        _this._sComponentClassName = 'Heading';
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
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_HEADING,
            isContainer: false,
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
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Hidden Input control
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
    function Hidden(sId) {
        var _this = _super.call(this, sId) || this;
        // noinspection HtmlUnknownAttribute
        _this.setType(_Input__WEBPACK_IMPORTED_MODULE_0__["enumInputType"].hidden);
        _this._sComponentClassName = 'Hidden';
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
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Hidden',
            description: 'HTML hidden input type',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_USER_SECRET,
            isContainer: false,
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
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Hr control
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
    function Hr(sId) {
        var _this = _super.call(this, sId) || this;
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<hr {attributes}/>';
        _this._sComponentClassName = 'Hr';
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
            category: 'component',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_LIST,
            isContainer: false,
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

/***/ "./src/components/Html.ts":
/*!********************************!*\
  !*** ./src/components/Html.ts ***!
  \********************************/
/*! exports provided: Html */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Html", function() { return Html; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Html component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html
 */
var Html = /** @class */ (function (_super) {
    __extends(Html, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Html(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-html');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<html {attributes}>{child_items}</html>';
        _this._sComponentClassName = 'Html';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Html.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Html',
            description: 'HTML element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Html;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/I.ts":
/*!*****************************!*\
  !*** ./src/components/I.ts ***!
  \*****************************/
/*! exports provided: I */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return I; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * I component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i
 */
var I = /** @class */ (function (_super) {
    __extends(I, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function I(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-i');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<i {attributes}>{child_items}</i>';
        _this._sComponentClassName = 'I';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    I.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'I',
            description: 'HTML I element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return I;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/IFrame.ts":
/*!**********************************!*\
  !*** ./src/components/IFrame.ts ***!
  \**********************************/
/*! exports provided: IFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IFrame", function() { return IFrame; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * IFrame component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
 */
var IFrame = /** @class */ (function (_super) {
    __extends(IFrame, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function IFrame(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-iframe');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<iframe {attributes}></iframe>';
        _this._sComponentClassName = 'IFrame';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    IFrame.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'IFrame',
            description: 'HTML IFrame element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return IFrame;
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
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Icon control
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
    function Icon(sId) {
        var _this = _super.call(this, sId) || this;
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<i {attributes}></i>';
        _this._sComponentClassName = 'Icon';
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
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_IMAGE,
            isContainer: false,
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
    /**
     * Makes an icon using icon class
     * @param sIconClass
     * @param sAppend
     */
    Icon.make = function (sIconClass, sAppend) {
        if (sAppend === void 0) { sAppend = '&nbsp;'; }
        /**
         * If no icon class return empty
         */
        if (!sIconClass) {
            return '';
        }
        /**
         * Find library
         */
        var sIconLib = '';
        if (sIconClass.startsWith('fa-')) {
            sIconLib = 'fa ';
        }
        return '<i class="' + sIconLib + sIconClass + '"></i>' + (sAppend ? sAppend : '');
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
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Image control
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
    function Image(sId) {
        var _this = _super.call(this, sId) || this;
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<img {attributes}/>';
        _this._sComponentClassName = 'Image';
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
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_IMAGE,
            isContainer: false,
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
/*! exports provided: Input, enumInputType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
/* harmony import */ var _UX__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UX */ "./src/UX.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumInputType", function() { return _UX__WEBPACK_IMPORTED_MODULE_2__["enumInputType"]; });

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
    function Input(sId) {
        var _this = _super.call(this, sId) || this;
        _this._eType = null;
        _this._sLabel = null;
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<input {attributes}/>';
        _this._eType = _UX__WEBPACK_IMPORTED_MODULE_2__["enumInputType"].text;
        _this._sComponentClassName = 'Input';
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
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_EDIT,
            isContainer: false,
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
     * @param eType
     * @returns {Input}
     */
    Input.prototype.setType = function (eType) {
        this._eType = eType;
        return this;
    };
    /**
     *
     * @returns {string}
     */
    Input.prototype.getType = function () {
        return this._eType;
    };
    /**
     *
     * @returns {string}
     */
    Input.prototype.render = function () {
        this.setAttribute('type', this.type);
        return _super.prototype.render.call(this);
    };
    /**
     * Get component label
     */
    Input.prototype.getLabel = function () {
        return this._sLabel;
    };
    /**
     * Set component label
     * @param sLabel
     */
    Input.prototype.setLabel = function (sLabel) {
        this._sLabel = sLabel;
        return this;
    };
    return Input;
}(_Component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/Ins.ts":
/*!*******************************!*\
  !*** ./src/components/Ins.ts ***!
  \*******************************/
/*! exports provided: Ins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ins", function() { return Ins; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Ins component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins
 */
var Ins = /** @class */ (function (_super) {
    __extends(Ins, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Ins(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-ins');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<ins {attributes}>{child_items}</ins>';
        _this._sComponentClassName = 'Ins';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Ins.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Ins',
            description: 'HTML Ins element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Ins;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Kbd.ts":
/*!*******************************!*\
  !*** ./src/components/Kbd.ts ***!
  \*******************************/
/*! exports provided: Kbd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kbd", function() { return Kbd; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Kbd component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd
 */
var Kbd = /** @class */ (function (_super) {
    __extends(Kbd, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Kbd(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-kbd');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<kbd {attributes}>{child_items}</kbd>';
        _this._sComponentClassName = 'Kbd';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Kbd.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Kbd',
            description: 'HTML Keyboard Input element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Kbd;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



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
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Label component
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
    function Label(sId) {
        var _this = _super.call(this, sId) || this;
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<label {attributes}>{child_items}</label>';
        _this._sComponentClassName = 'Label';
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
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_FONT,
            isContainer: true,
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

/***/ "./src/components/Legend.ts":
/*!**********************************!*\
  !*** ./src/components/Legend.ts ***!
  \**********************************/
/*! exports provided: Legend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Legend", function() { return Legend; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Legend component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend
 */
var Legend = /** @class */ (function (_super) {
    __extends(Legend, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Legend(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-legend');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<legend {attributes}>{child_items}</legend>';
        _this._sComponentClassName = 'Legend';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Legend.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Legend',
            description: 'HTML Legend element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Legend;
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
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
    function Li(sId) {
        var _this = _super.call(this, sId) || this;
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<li {attributes}>{child_items}</li>';
        _this._sComponentClassName = 'Li';
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
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_LIST_ALT,
            isContainer: true,
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

/***/ "./src/components/Link.ts":
/*!********************************!*\
  !*** ./src/components/Link.ts ***!
  \********************************/
/*! exports provided: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Link component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link
 */
var Link = /** @class */ (function (_super) {
    __extends(Link, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Link(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-link');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<link {attributes}>';
        _this._sComponentClassName = 'Link';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Link.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Link',
            description: 'HTML Link element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Link;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Main.ts":
/*!********************************!*\
  !*** ./src/components/Main.ts ***!
  \********************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Main component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main
 */
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Main(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-main');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<main {attributes}>{child_items}</main>';
        _this._sComponentClassName = 'Main';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Main.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Main',
            description: 'HTML Main element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Main;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Map.ts":
/*!*******************************!*\
  !*** ./src/components/Map.ts ***!
  \*******************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Map component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map
 */
var Map = /** @class */ (function (_super) {
    __extends(Map, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Map(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-map');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<map {attributes}>{child_items}</map>';
        _this._sComponentClassName = 'Footer';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Map.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Map',
            description: 'HTML Map element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Map;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Mark.ts":
/*!********************************!*\
  !*** ./src/components/Mark.ts ***!
  \********************************/
/*! exports provided: Mark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mark", function() { return Mark; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Mark component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark
 */
var Mark = /** @class */ (function (_super) {
    __extends(Mark, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Mark(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-mark');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<mark {attributes}>{child_items}</mark>';
        _this._sComponentClassName = 'Mark';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Mark.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Mark',
            description: 'HTML Mark element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Mark;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Menu.ts":
/*!********************************!*\
  !*** ./src/components/Menu.ts ***!
  \********************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Menu component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu
 */
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Menu(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-menu');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<menu {attributes}>{child_items}</menu>';
        _this._sComponentClassName = 'Menu';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Menu.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Menu',
            description: 'HTML Menu element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Menu;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Meta.ts":
/*!********************************!*\
  !*** ./src/components/Meta.ts ***!
  \********************************/
/*! exports provided: Meta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meta", function() { return Meta; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Meta component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
 */
var Meta = /** @class */ (function (_super) {
    __extends(Meta, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Meta(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-meta');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<meta {attributes}>';
        _this._sComponentClassName = 'Meta';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Meta.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Meta',
            description: 'HTML Meta element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Meta;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Meter.ts":
/*!*********************************!*\
  !*** ./src/components/Meter.ts ***!
  \*********************************/
/*! exports provided: Meter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meter", function() { return Meter; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Meter component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter
 */
var Meter = /** @class */ (function (_super) {
    __extends(Meter, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Meter(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-meter');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<meter {attributes}>{child_items}</meter>';
        _this._sComponentClassName = 'Meter';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Meter.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Meter',
            description: 'HTML Meter element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Meter;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Nav.ts":
/*!*******************************!*\
  !*** ./src/components/Nav.ts ***!
  \*******************************/
/*! exports provided: Nav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Nav component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav
 */
var Nav = /** @class */ (function (_super) {
    __extends(Nav, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Nav(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-nav');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<nav {attributes}>{child_items}</nav>';
        _this._sComponentClassName = 'Nav';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Nav.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Nav',
            description: 'HTML Nav element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Nav;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/NoScript.ts":
/*!************************************!*\
  !*** ./src/components/NoScript.ts ***!
  \************************************/
/*! exports provided: NoScript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoScript", function() { return NoScript; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * NoScript component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript
 */
var NoScript = /** @class */ (function (_super) {
    __extends(NoScript, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function NoScript(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-noscript');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<noscript {attributes}>{child_items}</noscript>';
        _this._sComponentClassName = 'NoScript';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    NoScript.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'NoScript',
            description: 'HTML NoScript element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return NoScript;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/ObjectComponent.ts":
/*!*******************************************!*\
  !*** ./src/components/ObjectComponent.ts ***!
  \*******************************************/
/*! exports provided: ObjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectComponent", function() { return ObjectComponent; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Object component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object
 */
var ObjectComponent = /** @class */ (function (_super) {
    __extends(ObjectComponent, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function ObjectComponent(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-object');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<object {attributes}>{child_items}</object>';
        _this._sComponentClassName = 'ObjectComponent';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    ObjectComponent.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'ObjectComponent',
            description: 'HTML Object element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return ObjectComponent;
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
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
    function Ol(sId) {
        var _this = _super.call(this, sId) || this;
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<ol {attributes}>{child_items}</ol>';
        _this._sComponentClassName = 'Ol';
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
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_LIST_ALT,
            isContainer: true,
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

/***/ "./src/components/OptGroup.ts":
/*!************************************!*\
  !*** ./src/components/OptGroup.ts ***!
  \************************************/
/*! exports provided: OptGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptGroup", function() { return OptGroup; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * OptGroup component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup
 */
var OptGroup = /** @class */ (function (_super) {
    __extends(OptGroup, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function OptGroup(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-optgroup');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<optgroup {attributes}>{child_items}</optgroup>';
        _this._sComponentClassName = 'OptGroup';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    OptGroup.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'OptGroup',
            description: 'HTML OptGroup element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return OptGroup;
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
 * Option component
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
    function Option(sId) {
        var _this = _super.call(this, sId) || this;
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<option {attributes}>{child_items}</option>';
        _this._sComponentClassName = 'Option';
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

/***/ "./src/components/Output.ts":
/*!**********************************!*\
  !*** ./src/components/Output.ts ***!
  \**********************************/
/*! exports provided: Output */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Output", function() { return Output; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Output component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output
 */
var Output = /** @class */ (function (_super) {
    __extends(Output, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Output(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-output');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<output {attributes}>{child_items}</output>';
        _this._sComponentClassName = 'Output';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Output.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Output',
            description: 'HTML Output element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Output;
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
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
    function Paragraph(sId) {
        var _this = _super.call(this, sId) || this;
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<p {attributes}>{child_items}</p>';
        _this._sComponentClassName = 'Paragraph';
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
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_PARAGRAPH,
            isContainer: true,
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

/***/ "./src/components/Param.ts":
/*!*********************************!*\
  !*** ./src/components/Param.ts ***!
  \*********************************/
/*! exports provided: Param */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Param", function() { return Param; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Param component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/param
 */
var Param = /** @class */ (function (_super) {
    __extends(Param, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Param(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-param');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<param {attributes}>';
        _this._sComponentClassName = 'Param';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Param.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Param',
            description: 'HTML Param element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Param;
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
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
    function Password(sId) {
        var _this = _super.call(this, sId) || this;
        _this.setType(_Input__WEBPACK_IMPORTED_MODULE_0__["enumInputType"].password);
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
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_UNLOCK,
            isContainer: false,
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

/***/ "./src/components/Picture.ts":
/*!***********************************!*\
  !*** ./src/components/Picture.ts ***!
  \***********************************/
/*! exports provided: Picture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Picture", function() { return Picture; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Picture component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture
 */
var Picture = /** @class */ (function (_super) {
    __extends(Picture, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Picture(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-picture');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<picture {attributes}>{child_items}</picture>';
        _this._sComponentClassName = 'Picture';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Picture.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Picture',
            description: 'HTML Picture element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Picture;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



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
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
    function Pre(sId) {
        var _this = _super.call(this, sId) || this;
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<pre {attributes}>{child_items}</pre>';
        _this._sComponentClassName = 'Pre';
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
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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

/***/ "./src/components/Progress.ts":
/*!************************************!*\
  !*** ./src/components/Progress.ts ***!
  \************************************/
/*! exports provided: Progress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return Progress; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Progress component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress
 */
var Progress = /** @class */ (function (_super) {
    __extends(Progress, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Progress(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-progress');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<progress {attributes}>{child_items}</progress>';
        _this._sComponentClassName = 'Progress';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Progress.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Progress',
            description: 'HTML Progress element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Progress;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Q.ts":
/*!*****************************!*\
  !*** ./src/components/Q.ts ***!
  \*****************************/
/*! exports provided: Q */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return Q; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Q component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q
 */
var Q = /** @class */ (function (_super) {
    __extends(Q, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Q(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-q');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<q {attributes}>{child_items}</q>';
        _this._sComponentClassName = 'Q';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Q.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Q',
            description: 'HTML Quotation element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Q;
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
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Radio control
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @type {Password}
 */
var Radio = /** @class */ (function (_super) {
    __extends(Radio, _super);
    function Radio(sId) {
        var _this = _super.call(this, sId) || this;
        _this._eType = _Input__WEBPACK_IMPORTED_MODULE_0__["enumInputType"].radio;
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
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_CHECK_CIRCLE,
            isContainer: false,
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

/***/ "./src/components/Rb.ts":
/*!******************************!*\
  !*** ./src/components/Rb.ts ***!
  \******************************/
/*! exports provided: Rb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rb", function() { return Rb; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Rb component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rb
 */
var Rb = /** @class */ (function (_super) {
    __extends(Rb, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Rb(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-rb');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<rb {attributes}>{child_items}</rb>';
        _this._sComponentClassName = 'Rb';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Rb.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Rb',
            description: 'HTML Ruby Base element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Rb;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



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
    function Row(sId) {
        var _this = _super.call(this, sId) || this;
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<div {attributes}>{child_items}</div>';
        _this._sComponentClassName = 'Row';
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
            icon: _index__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_LIST,
            isContainer: true,
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

/***/ "./src/components/Rt.ts":
/*!******************************!*\
  !*** ./src/components/Rt.ts ***!
  \******************************/
/*! exports provided: Rt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rt", function() { return Rt; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Rt component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt
 */
var Rt = /** @class */ (function (_super) {
    __extends(Rt, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Rt(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-rt');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<rt {attributes}>{child_items}</rt>';
        _this._sComponentClassName = 'Rt';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Rt.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Rt',
            description: 'HTML Ruby text element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Rt;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Rtc.ts":
/*!*******************************!*\
  !*** ./src/components/Rtc.ts ***!
  \*******************************/
/*! exports provided: Rtc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rtc", function() { return Rtc; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Rtc component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rtc
 */
var Rtc = /** @class */ (function (_super) {
    __extends(Rtc, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Rtc(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-rtc');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<rtc {attributes}>{child_items}</rtc>';
        _this._sComponentClassName = 'Rtc';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Rtc.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Rtc',
            description: 'HTML Ruby text container element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Rtc;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Ruby.ts":
/*!********************************!*\
  !*** ./src/components/Ruby.ts ***!
  \********************************/
/*! exports provided: Ruby */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ruby", function() { return Ruby; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Ruby component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby
 */
var Ruby = /** @class */ (function (_super) {
    __extends(Ruby, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Ruby(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-ruby');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<ruby {attributes}>{child_items}</ruby>';
        _this._sComponentClassName = 'Ruby';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Ruby.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Ruby',
            description: 'HTML Ruby annotation element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Ruby;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/S.ts":
/*!*****************************!*\
  !*** ./src/components/S.ts ***!
  \*****************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return S; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * S component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s
 */
var S = /** @class */ (function (_super) {
    __extends(S, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function S(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-s');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<s {attributes}>{child_items}</s>';
        _this._sComponentClassName = 'S';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    S.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'S',
            description: 'HTML Strikethrough element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return S;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Samp.ts":
/*!********************************!*\
  !*** ./src/components/Samp.ts ***!
  \********************************/
/*! exports provided: Samp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Samp", function() { return Samp; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Samp component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp
 */
var Samp = /** @class */ (function (_super) {
    __extends(Samp, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Samp(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-samp');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<samp {attributes}>{child_items}</samp>';
        _this._sComponentClassName = 'Samp';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Samp.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Samp',
            description: 'HTML Sample element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Samp;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Script.ts":
/*!**********************************!*\
  !*** ./src/components/Script.ts ***!
  \**********************************/
/*! exports provided: Script */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Script", function() { return Script; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Script component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
 */
var Script = /** @class */ (function (_super) {
    __extends(Script, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Script(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-script');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<script {attributes}>{child_items}</script>';
        _this._sComponentClassName = 'Samp';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Script.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Script',
            description: 'HTML Script element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Script;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Section.ts":
/*!***********************************!*\
  !*** ./src/components/Section.ts ***!
  \***********************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Section component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section
 */
var Section = /** @class */ (function (_super) {
    __extends(Section, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Section(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-section');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<section {attributes}>{child_items}</section>';
        _this._sComponentClassName = 'Section';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Section.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Section',
            description: 'HTML Section element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Section;
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
    function Select(sId) {
        var _this = _super.call(this, sId) || this;
        _this._oStore = new _Store__WEBPACK_IMPORTED_MODULE_1__["Store"]();
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<select {attributes}>\n' +
            '{options}' +
            '</select>';
        _this._sComponentClassName = 'Select';
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
            isContainer: false,
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

/***/ "./src/components/Slot.ts":
/*!********************************!*\
  !*** ./src/components/Slot.ts ***!
  \********************************/
/*! exports provided: Slot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slot", function() { return Slot; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Slot component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot
 */
var Slot = /** @class */ (function (_super) {
    __extends(Slot, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Slot(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-slot');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<slot {attributes}>{child_items}</slot>';
        _this._sComponentClassName = 'Slot';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Slot.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Slot',
            description: 'HTML Slot element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Slot;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Small.ts":
/*!*********************************!*\
  !*** ./src/components/Small.ts ***!
  \*********************************/
/*! exports provided: Small */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Small", function() { return Small; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Small component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small
 */
var Small = /** @class */ (function (_super) {
    __extends(Small, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Small(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-small');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<small {attributes}>{child_items}</small>';
        _this._sComponentClassName = 'Small';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Small.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Small',
            description: 'HTML Small element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Small;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Source.ts":
/*!**********************************!*\
  !*** ./src/components/Source.ts ***!
  \**********************************/
/*! exports provided: Source */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Source", function() { return Source; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Source component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source
 */
var Source = /** @class */ (function (_super) {
    __extends(Source, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Source(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-source');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<source {attributes}>';
        _this._sComponentClassName = 'Source';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Source.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Source',
            description: 'HTML Source element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Source;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Span.ts":
/*!********************************!*\
  !*** ./src/components/Span.ts ***!
  \********************************/
/*! exports provided: Span */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Span", function() { return Span; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Span component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span
 */
var Span = /** @class */ (function (_super) {
    __extends(Span, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Span(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-span');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<span {attributes}>{child_items}</span>';
        _this._sComponentClassName = 'Span';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Span.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Span',
            description: 'HTML Span element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Span;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



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
/* harmony import */ var _UX__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UX */ "./src/UX.ts");
/**
 * Data _oStore
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
            description: 'Data _oStore',
            category: _UX__WEBPACK_IMPORTED_MODULE_0__["enumComponentCategory"].utility,
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

/***/ "./src/components/Strong.ts":
/*!**********************************!*\
  !*** ./src/components/Strong.ts ***!
  \**********************************/
/*! exports provided: Strong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Strong", function() { return Strong; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Strong component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
 */
var Strong = /** @class */ (function (_super) {
    __extends(Strong, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Strong(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-strong');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<strong {attributes}>{child_items}</strong>';
        _this._sComponentClassName = 'Strong';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Strong.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Strong',
            description: 'HTML Strong element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Strong;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Style.ts":
/*!*********************************!*\
  !*** ./src/components/Style.ts ***!
  \*********************************/
/*! exports provided: Style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return Style; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Style component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style
 */
var Style = /** @class */ (function (_super) {
    __extends(Style, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Style(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-style');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<style {attributes}>{child_items}</style>';
        _this._sComponentClassName = 'Style';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Style.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Style',
            description: 'HTML Style element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Style;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Sub.ts":
/*!*******************************!*\
  !*** ./src/components/Sub.ts ***!
  \*******************************/
/*! exports provided: Sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sub", function() { return Sub; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Sub component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub
 */
var Sub = /** @class */ (function (_super) {
    __extends(Sub, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Sub(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-sub');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<sub {attributes}>{child_items}</sub>';
        _this._sComponentClassName = 'Sub';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Sub.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Sub',
            description: 'HTML Sub element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Sub;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Summary.ts":
/*!***********************************!*\
  !*** ./src/components/Summary.ts ***!
  \***********************************/
/*! exports provided: Summary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Summary", function() { return Summary; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Summary component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary
 */
var Summary = /** @class */ (function (_super) {
    __extends(Summary, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Summary(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-summary');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<summary {attributes}>{child_items}</summary>';
        _this._sComponentClassName = 'Summary';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Summary.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Summary',
            description: 'HTML Disclosure Summary element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Summary;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Sup.ts":
/*!*******************************!*\
  !*** ./src/components/Sup.ts ***!
  \*******************************/
/*! exports provided: Sup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sup", function() { return Sup; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Sup component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup
 */
var Sup = /** @class */ (function (_super) {
    __extends(Sup, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Sup(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-sup');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<sup {attributes}>{child_items}</sup>';
        _this._sComponentClassName = 'Sup';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Sup.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Sup',
            description: 'HTML Superscript element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Sup;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/TBody.ts":
/*!*********************************!*\
  !*** ./src/components/TBody.ts ***!
  \*********************************/
/*! exports provided: TBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TBody", function() { return TBody; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Table Body component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody
 */
var TBody = /** @class */ (function (_super) {
    __extends(TBody, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function TBody(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-tbody');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<tbody {attributes}>{child_items}</tbody>';
        _this._sComponentClassName = 'TBody';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    TBody.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'TBody',
            description: 'HTML Table body element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return TBody;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/TFoot.ts":
/*!*********************************!*\
  !*** ./src/components/TFoot.ts ***!
  \*********************************/
/*! exports provided: TFoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TFoot", function() { return TFoot; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Tfoot component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot
 */
var TFoot = /** @class */ (function (_super) {
    __extends(TFoot, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function TFoot(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-tfoot');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<tfoot {attributes}>{child_items}</tfoot>';
        _this._sComponentClassName = 'TFoot';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    TFoot.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'TFoot',
            description: 'HTML Table TFoot element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return TFoot;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/THead.ts":
/*!*********************************!*\
  !*** ./src/components/THead.ts ***!
  \*********************************/
/*! exports provided: THead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THead", function() { return THead; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * THead component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead
 */
var THead = /** @class */ (function (_super) {
    __extends(THead, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function THead(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-thead');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<thead {attributes}>{child_items}</thead>';
        _this._sComponentClassName = 'THead';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    THead.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'THead',
            description: 'HTML Table THead element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return THead;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Table.ts":
/*!*********************************!*\
  !*** ./src/components/Table.ts ***!
  \*********************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Table component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
 */
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Table(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-table');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<table {attributes}>{child_items}</table>';
        _this._sComponentClassName = 'Table';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Table.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Table',
            description: 'HTML Table element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Table;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Td.ts":
/*!******************************!*\
  !*** ./src/components/Td.ts ***!
  \******************************/
/*! exports provided: Td */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Td", function() { return Td; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Td component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td
 */
var Td = /** @class */ (function (_super) {
    __extends(Td, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Td(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-td');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<td {attributes}>{child_items}</td>';
        _this._sComponentClassName = 'Td';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Td.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Td',
            description: 'HTML Table cell element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Td;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Template.ts":
/*!************************************!*\
  !*** ./src/components/Template.ts ***!
  \************************************/
/*! exports provided: Template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return Template; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Template component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
 */
var Template = /** @class */ (function (_super) {
    __extends(Template, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Template(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-template');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<template {attributes}>{child_items}</template>';
        _this._sComponentClassName = 'Template';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Template.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Template',
            description: 'HTML Template element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Template;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



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
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
    function TextArea(sId) {
        var _this = _super.call(this, sId) || this;
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<textarea {attributes}>\n' +
            '{value}' +
            '</textarea>';
        _this._sComponentClassName = 'TextArea';
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
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_EDIT,
            isContainer: false,
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

/***/ "./src/components/Th.ts":
/*!******************************!*\
  !*** ./src/components/Th.ts ***!
  \******************************/
/*! exports provided: Th */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Th", function() { return Th; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Th component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th
 */
var Th = /** @class */ (function (_super) {
    __extends(Th, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Th(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-th');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<th {attributes}>{child_items}</th>';
        _this._sComponentClassName = 'Th';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Th.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Th',
            description: 'HTML Table header element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Th;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Time.ts":
/*!********************************!*\
  !*** ./src/components/Time.ts ***!
  \********************************/
/*! exports provided: Time */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return Time; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Time component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
 */
var Time = /** @class */ (function (_super) {
    __extends(Time, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Time(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-time');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<time {attributes}>{child_items}</time>';
        _this._sComponentClassName = 'Time';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Time.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Time',
            description: 'HTML Time element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Time;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Title.ts":
/*!*********************************!*\
  !*** ./src/components/Title.ts ***!
  \*********************************/
/*! exports provided: Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Title component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title
 */
var Title = /** @class */ (function (_super) {
    __extends(Title, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Title(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-title');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<title {attributes}>{child_items}</title>';
        _this._sComponentClassName = 'Title';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Title.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Title',
            description: 'HTML Title element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Title;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Tr.ts":
/*!******************************!*\
  !*** ./src/components/Tr.ts ***!
  \******************************/
/*! exports provided: Tr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tr", function() { return Tr; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Tr component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr
 */
var Tr = /** @class */ (function (_super) {
    __extends(Tr, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Tr(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-tr');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<tr {attributes}>{child_items}</tr>';
        _this._sComponentClassName = 'Tr';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Tr.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Tr',
            description: 'HTML Table row element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Tr;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Track.ts":
/*!*********************************!*\
  !*** ./src/components/Track.ts ***!
  \*********************************/
/*! exports provided: Track */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Track", function() { return Track; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Track component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track
 */
var Track = /** @class */ (function (_super) {
    __extends(Track, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Track(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-track');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<track {attributes}/>';
        _this._sComponentClassName = 'Track';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Track.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Track',
            description: 'HTML Track element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Track;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/U.ts":
/*!*****************************!*\
  !*** ./src/components/U.ts ***!
  \*****************************/
/*! exports provided: U */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return U; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * U component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u
 */
var U = /** @class */ (function (_super) {
    __extends(U, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function U(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-u');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<u {attributes}>{child_items}</u>';
        _this._sComponentClassName = 'U';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    U.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'U',
            description: 'HTML Underline element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return U;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



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
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Ul component
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
    function Ul(sId) {
        var _this = _super.call(this, sId) || this;
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<ul {attributes}>{child_items}</ul>';
        _this._sComponentClassName = 'Ul';
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
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_LIST_ALT,
            isContainer: true,
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

/***/ "./src/components/Var.ts":
/*!*******************************!*\
  !*** ./src/components/Var.ts ***!
  \*******************************/
/*! exports provided: Var */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Var", function() { return Var; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Var component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var
 */
var Var = /** @class */ (function (_super) {
    __extends(Var, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Var(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-var');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<var {attributes}>{child_items}</var>';
        _this._sComponentClassName = 'Var';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Var.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Var',
            description: 'HTML Var element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Var;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Video.ts":
/*!*********************************!*\
  !*** ./src/components/Video.ts ***!
  \*********************************/
/*! exports provided: Video */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return Video; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Video component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
 */
var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Video(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-video');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<video {attributes}>{child_items}</video>';
        _this._sComponentClassName = 'Video';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Video.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Video',
            description: 'HTML Video element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Video;
}(_ComponentContainer__WEBPACK_IMPORTED_MODULE_0__["ComponentContainer"]));



/***/ }),

/***/ "./src/components/Wbr.ts":
/*!*******************************!*\
  !*** ./src/components/Wbr.ts ***!
  \*******************************/
/*! exports provided: Wbr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wbr", function() { return Wbr; });
/* harmony import */ var _ComponentContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentContainer */ "./src/ComponentContainer.ts");
/* harmony import */ var _FontAwesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FontAwesome */ "./src/FontAwesome.ts");
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
 * Wbr component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr
 */
var Wbr = /** @class */ (function (_super) {
    __extends(Wbr, _super);
    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    function Wbr(sId) {
        var _this = _super.call(this, sId) || this;
        _this.addClass('ux-wbr');
        // noinspection HtmlUnknownAttribute
        _this._sTemplate = '<wbr {attributes}>';
        _this._sComponentClassName = 'Wbr';
        return _this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Wbr.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'Wbr',
            description: 'HTML Word break opportunity element',
            category: 'content',
            icon: _FontAwesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesome"].FA_SQUARE_O,
            isContainer: true,
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
            codepen: [],
        };
    };
    return Wbr;
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
exports.initialize = exports.Semantic24_TextAreaDecorator = exports.Semantic24_InputDecorator = exports.Semantic24_AlertDecorator = exports.Bootstrap4_ButtonDecorator = exports.Bootstrap4_TextAreaDecorator = exports.Bootstrap4_RowDecorator = exports.Bootstrap4_InputDecorator = exports.Bootstrap4_ColumnDecorator = exports.Bootstrap4_ContainerDecorator = exports.Bootstrap4_AlertDecorator = exports.Wbr = exports.Video = exports.Var = exports.Ul = exports.U = exports.Track = exports.Tr = exports.Title = exports.Time = exports.THead = exports.Th = exports.TFoot = exports.TextArea = exports.Template = exports.Td = exports.TBody = exports.Table = exports.Sup = exports.Summary = exports.Sub = exports.Style = exports.Strong = exports.Store = exports.Span = exports.Source = exports.Small = exports.Slot = exports.Select = exports.Section = exports.Script = exports.Samp = exports.S = exports.Ruby = exports.Rtc = exports.Rt = exports.Row = exports.Rb = undefined;
exports.Radio = exports.Q = exports.Progress = exports.Pre = exports.Picture = exports.Password = exports.Param = exports.Paragraph = exports.Output = exports.Option = exports.OptGroup = exports.Ol = exports.ObjectComponent = exports.NoScript = exports.Nav = exports.Meter = exports.Meta = exports.Menu = exports.Mark = exports.Map = exports.Main = exports.Link = exports.Li = exports.Legend = exports.Label = exports.Kbd = exports.Ins = exports.Image = exports.IFrame = exports.Icon = exports.I = exports.Html = exports.Hr = exports.Hidden = exports.Heading = exports.Header = exports.Head = exports.enumFormMethod = exports.enumFormEncoding = exports.Form = exports.Footer = exports.Figure = exports.FigCaption = exports.FieldSet = exports.Embed = exports.Em = exports.Dt = exports.Dl = exports.Div = exports.Dialog = exports.Dfn = exports.Details = exports.Del = exports.Dd = exports.DateInput = exports.DataList = exports.Data = exports.Container = exports.Column = exports.ColGroup = exports.Col = exports.Code = exports.Cite = exports.Checkbox = exports.Caption = exports.Canvas = exports.enumButtonSize = exports.enumButtonType = exports.enumButtonStyle = exports.Button = exports.Br = exports.Body = exports.BlockQuote = exports.BDO = exports.BDI = exports.B = exports.Audio = exports.ASide = exports.Article = exports.Area = exports.Anchor = exports.enumAlertStyle = exports.Alert = exports.Address = exports.Abbr = exports.enumInputType = exports.Input = exports.ComponentContainer = exports.enumInputMode = exports.enumTranslate = exports.enumAutoCapitalize = exports.enumDir = exports.Component = exports.ComponentProperties = exports.Patch = exports.Page = exports.Decorator = exports.FontAwesome = exports.enumLibrary = exports.enumMissingFeature = undefined;

var _UX = __webpack_require__(/*! ./UX */ "./src/UX.ts");

var _FontAwesome = __webpack_require__(/*! ./FontAwesome */ "./src/FontAwesome.ts");

var _Decorator = __webpack_require__(/*! ./Decorator */ "./src/Decorator.ts");

var _Page = __webpack_require__(/*! ./Page */ "./src/Page.ts");

var _Patch = __webpack_require__(/*! ./Patch */ "./src/Patch.ts");

var _ComponentProperties = __webpack_require__(/*! ./ComponentProperties */ "./src/ComponentProperties.ts");

var _Component = __webpack_require__(/*! ./Component */ "./src/Component.ts");

var _ComponentContainer = __webpack_require__(/*! ./ComponentContainer */ "./src/ComponentContainer.ts");

var _Input = __webpack_require__(/*! ./components/Input */ "./src/components/Input.ts");

var _Abbr = __webpack_require__(/*! ./components/Abbr */ "./src/components/Abbr.ts");

var _Address = __webpack_require__(/*! ./components/Address */ "./src/components/Address.ts");

var _Alert = __webpack_require__(/*! ./components/Alert */ "./src/components/Alert.ts");

var _Anchor = __webpack_require__(/*! ./components/Anchor */ "./src/components/Anchor.ts");

var _Area = __webpack_require__(/*! ./components/Area */ "./src/components/Area.ts");

var _Article = __webpack_require__(/*! ./components/Article */ "./src/components/Article.ts");

var _ASide = __webpack_require__(/*! ./components/ASide */ "./src/components/ASide.ts");

var _Audio = __webpack_require__(/*! ./components/Audio */ "./src/components/Audio.ts");

var _B = __webpack_require__(/*! ./components/B */ "./src/components/B.ts");

var _BDI = __webpack_require__(/*! ./components/BDI */ "./src/components/BDI.ts");

var _BDO = __webpack_require__(/*! ./components/BDO */ "./src/components/BDO.ts");

var _BlockQuote = __webpack_require__(/*! ./components/BlockQuote */ "./src/components/BlockQuote.ts");

var _Body = __webpack_require__(/*! ./components/Body */ "./src/components/Body.ts");

var _Br = __webpack_require__(/*! ./components/Br */ "./src/components/Br.ts");

var _Button = __webpack_require__(/*! ./components/Button */ "./src/components/Button.ts");

var _Canvas = __webpack_require__(/*! ./components/Canvas */ "./src/components/Canvas.ts");

var _Caption = __webpack_require__(/*! ./components/Caption */ "./src/components/Caption.ts");

var _Checkbox = __webpack_require__(/*! ./components/Checkbox */ "./src/components/Checkbox.ts");

var _Cite = __webpack_require__(/*! ./components/Cite */ "./src/components/Cite.ts");

var _Code = __webpack_require__(/*! ./components/Code */ "./src/components/Code.ts");

var _Col = __webpack_require__(/*! ./components/Col */ "./src/components/Col.ts");

var _ColGroup = __webpack_require__(/*! ./components/ColGroup */ "./src/components/ColGroup.ts");

var _Column = __webpack_require__(/*! ./components/Column */ "./src/components/Column.ts");

var _Container = __webpack_require__(/*! ./components/Container */ "./src/components/Container.ts");

var _Data = __webpack_require__(/*! ./components/Data */ "./src/components/Data.ts");

var _DataList = __webpack_require__(/*! ./components/DataList */ "./src/components/DataList.ts");

var _DateInput = __webpack_require__(/*! ./components/DateInput */ "./src/components/DateInput.ts");

var _Dd = __webpack_require__(/*! ./components/Dd */ "./src/components/Dd.ts");

var _Del = __webpack_require__(/*! ./components/Del */ "./src/components/Del.ts");

var _Details = __webpack_require__(/*! ./components/Details */ "./src/components/Details.ts");

var _Dfn = __webpack_require__(/*! ./components/Dfn */ "./src/components/Dfn.ts");

var _Dialog = __webpack_require__(/*! ./components/Dialog */ "./src/components/Dialog.ts");

var _Div = __webpack_require__(/*! ./components/Div */ "./src/components/Div.ts");

var _Dl = __webpack_require__(/*! ./components/Dl */ "./src/components/Dl.ts");

var _Dt = __webpack_require__(/*! ./components/Dt */ "./src/components/Dt.ts");

var _Em = __webpack_require__(/*! ./components/Em */ "./src/components/Em.ts");

var _Embed = __webpack_require__(/*! ./components/Embed */ "./src/components/Embed.ts");

var _FieldSet = __webpack_require__(/*! ./components/FieldSet */ "./src/components/FieldSet.ts");

var _FigCaption = __webpack_require__(/*! ./components/FigCaption */ "./src/components/FigCaption.ts");

var _Figure = __webpack_require__(/*! ./components/Figure */ "./src/components/Figure.ts");

var _Footer = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer.ts");

var _Form = __webpack_require__(/*! ./components/Form */ "./src/components/Form.ts");

var _Head = __webpack_require__(/*! ./components/Head */ "./src/components/Head.ts");

var _Header = __webpack_require__(/*! ./components/Header */ "./src/components/Header.ts");

var _Heading = __webpack_require__(/*! ./components/Heading */ "./src/components/Heading.ts");

var _Hidden = __webpack_require__(/*! ./components/Hidden */ "./src/components/Hidden.ts");

var _Hr = __webpack_require__(/*! ./components/Hr */ "./src/components/Hr.ts");

var _Html = __webpack_require__(/*! ./components/Html */ "./src/components/Html.ts");

var _I = __webpack_require__(/*! ./components/I */ "./src/components/I.ts");

var _Icon = __webpack_require__(/*! ./components/Icon */ "./src/components/Icon.ts");

var _IFrame = __webpack_require__(/*! ./components/IFrame */ "./src/components/IFrame.ts");

var _Image = __webpack_require__(/*! ./components/Image */ "./src/components/Image.ts");

var _Ins = __webpack_require__(/*! ./components/Ins */ "./src/components/Ins.ts");

var _Kbd = __webpack_require__(/*! ./components/Kbd */ "./src/components/Kbd.ts");

var _Label = __webpack_require__(/*! ./components/Label */ "./src/components/Label.ts");

var _Legend = __webpack_require__(/*! ./components/Legend */ "./src/components/Legend.ts");

var _Li = __webpack_require__(/*! ./components/Li */ "./src/components/Li.ts");

var _Link = __webpack_require__(/*! ./components/Link */ "./src/components/Link.ts");

var _Main = __webpack_require__(/*! ./components/Main */ "./src/components/Main.ts");

var _Map = __webpack_require__(/*! ./components/Map */ "./src/components/Map.ts");

var _Mark = __webpack_require__(/*! ./components/Mark */ "./src/components/Mark.ts");

var _Menu = __webpack_require__(/*! ./components/Menu */ "./src/components/Menu.ts");

var _Meta = __webpack_require__(/*! ./components/Meta */ "./src/components/Meta.ts");

var _Meter = __webpack_require__(/*! ./components/Meter */ "./src/components/Meter.ts");

var _Nav = __webpack_require__(/*! ./components/Nav */ "./src/components/Nav.ts");

var _NoScript = __webpack_require__(/*! ./components/NoScript */ "./src/components/NoScript.ts");

var _ObjectComponent = __webpack_require__(/*! ./components/ObjectComponent */ "./src/components/ObjectComponent.ts");

var _Ol = __webpack_require__(/*! ./components/Ol */ "./src/components/Ol.ts");

var _OptGroup = __webpack_require__(/*! ./components/OptGroup */ "./src/components/OptGroup.ts");

var _Option = __webpack_require__(/*! ./components/Option */ "./src/components/Option.ts");

var _Output = __webpack_require__(/*! ./components/Output */ "./src/components/Output.ts");

var _Paragraph = __webpack_require__(/*! ./components/Paragraph */ "./src/components/Paragraph.ts");

var _Param = __webpack_require__(/*! ./components/Param */ "./src/components/Param.ts");

var _Password = __webpack_require__(/*! ./components/Password */ "./src/components/Password.ts");

var _Picture = __webpack_require__(/*! ./components/Picture */ "./src/components/Picture.ts");

var _Pre = __webpack_require__(/*! ./components/Pre */ "./src/components/Pre.ts");

var _Progress = __webpack_require__(/*! ./components/Progress */ "./src/components/Progress.ts");

var _Q = __webpack_require__(/*! ./components/Q */ "./src/components/Q.ts");

var _Radio = __webpack_require__(/*! ./components/Radio */ "./src/components/Radio.ts");

var _Rb = __webpack_require__(/*! ./components/Rb */ "./src/components/Rb.ts");

var _Row = __webpack_require__(/*! ./components/Row */ "./src/components/Row.ts");

var _Rt = __webpack_require__(/*! ./components/Rt */ "./src/components/Rt.ts");

var _Rtc = __webpack_require__(/*! ./components/Rtc */ "./src/components/Rtc.ts");

var _Ruby = __webpack_require__(/*! ./components/Ruby */ "./src/components/Ruby.ts");

var _S = __webpack_require__(/*! ./components/S */ "./src/components/S.ts");

var _Samp = __webpack_require__(/*! ./components/Samp */ "./src/components/Samp.ts");

var _Script = __webpack_require__(/*! ./components/Script */ "./src/components/Script.ts");

var _Section = __webpack_require__(/*! ./components/Section */ "./src/components/Section.ts");

var _Select = __webpack_require__(/*! ./components/Select */ "./src/components/Select.ts");

var _Slot = __webpack_require__(/*! ./components/Slot */ "./src/components/Slot.ts");

var _Small = __webpack_require__(/*! ./components/Small */ "./src/components/Small.ts");

var _Source = __webpack_require__(/*! ./components/Source */ "./src/components/Source.ts");

var _Span = __webpack_require__(/*! ./components/Span */ "./src/components/Span.ts");

var _Store = __webpack_require__(/*! ./components/Store */ "./src/components/Store.ts");

var _Strong = __webpack_require__(/*! ./components/Strong */ "./src/components/Strong.ts");

var _Style = __webpack_require__(/*! ./components/Style */ "./src/components/Style.ts");

var _Sub = __webpack_require__(/*! ./components/Sub */ "./src/components/Sub.ts");

var _Summary = __webpack_require__(/*! ./components/Summary */ "./src/components/Summary.ts");

var _Sup = __webpack_require__(/*! ./components/Sup */ "./src/components/Sup.ts");

var _Table = __webpack_require__(/*! ./components/Table */ "./src/components/Table.ts");

var _TBody = __webpack_require__(/*! ./components/TBody */ "./src/components/TBody.ts");

var _Td = __webpack_require__(/*! ./components/Td */ "./src/components/Td.ts");

var _Template = __webpack_require__(/*! ./components/Template */ "./src/components/Template.ts");

var _TextArea = __webpack_require__(/*! ./components/TextArea */ "./src/components/TextArea.ts");

var _TFoot = __webpack_require__(/*! ./components/TFoot */ "./src/components/TFoot.ts");

var _Th = __webpack_require__(/*! ./components/Th */ "./src/components/Th.ts");

var _THead = __webpack_require__(/*! ./components/THead */ "./src/components/THead.ts");

var _Time = __webpack_require__(/*! ./components/Time */ "./src/components/Time.ts");

var _Title = __webpack_require__(/*! ./components/Title */ "./src/components/Title.ts");

var _Tr = __webpack_require__(/*! ./components/Tr */ "./src/components/Tr.ts");

var _Track = __webpack_require__(/*! ./components/Track */ "./src/components/Track.ts");

var _U = __webpack_require__(/*! ./components/U */ "./src/components/U.ts");

var _Ul = __webpack_require__(/*! ./components/Ul */ "./src/components/Ul.ts");

var _Var = __webpack_require__(/*! ./components/Var */ "./src/components/Var.ts");

var _Video = __webpack_require__(/*! ./components/Video */ "./src/components/Video.ts");

var _Wbr = __webpack_require__(/*! ./components/Wbr */ "./src/components/Wbr.ts");

var _AlertDecorator = __webpack_require__(/*! ./libraries/bootstrap4/components/AlertDecorator */ "./src/libraries/bootstrap4/components/AlertDecorator.ts");

var _ContainerDecorator = __webpack_require__(/*! ./libraries/bootstrap4/components/ContainerDecorator */ "./src/libraries/bootstrap4/components/ContainerDecorator.ts");

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
exports.ComponentProperties = _ComponentProperties.ComponentProperties;
exports.Component = _Component.Component;
exports.enumDir = _Component.enumDir;
exports.enumAutoCapitalize = _Component.enumAutoCapitalize;
exports.enumTranslate = _Component.enumTranslate;
exports.enumInputMode = _Component.enumInputMode;
exports.ComponentContainer = _ComponentContainer.ComponentContainer;
exports.Input = _Input.Input;
exports.enumInputType = _Input.enumInputType;
exports.Abbr = _Abbr.Abbr;
exports.Address = _Address.Address;
exports.Alert = _Alert.Alert;
exports.enumAlertStyle = _Alert.enumAlertStyle;
exports.Anchor = _Anchor.Anchor;
exports.Area = _Area.Area;
exports.Article = _Article.Article;
exports.ASide = _ASide.ASide;
exports.Audio = _Audio.Audio;
exports.B = _B.B;
exports.BDI = _BDI.BDI;
exports.BDO = _BDO.BDO;
exports.BlockQuote = _BlockQuote.BlockQuote;
exports.Body = _Body.Body;
exports.Br = _Br.Br;
exports.Button = _Button.Button;
exports.enumButtonStyle = _Button.enumButtonStyle;
exports.enumButtonType = _Button.enumButtonType;
exports.enumButtonSize = _Button.enumButtonSize;
exports.Canvas = _Canvas.Canvas;
exports.Caption = _Caption.Caption;
exports.Checkbox = _Checkbox.Checkbox;
exports.Cite = _Cite.Cite;
exports.Code = _Code.Code;
exports.Col = _Col.Col;
exports.ColGroup = _ColGroup.ColGroup;
exports.Column = _Column.Column;
exports.Container = _Container.Container;
exports.Data = _Data.Data;
exports.DataList = _DataList.DataList;
exports.DateInput = _DateInput.DateInput;
exports.Dd = _Dd.Dd;
exports.Del = _Del.Del;
exports.Details = _Details.Details;
exports.Dfn = _Dfn.Dfn;
exports.Dialog = _Dialog.Dialog;
exports.Div = _Div.Div;
exports.Dl = _Dl.Dl;
exports.Dt = _Dt.Dt;
exports.Em = _Em.Em;
exports.Embed = _Embed.Embed;
exports.FieldSet = _FieldSet.FieldSet;
exports.FigCaption = _FigCaption.FigCaption;
exports.Figure = _Figure.Figure;
exports.Footer = _Footer.Footer;
exports.Form = _Form.Form;
exports.enumFormEncoding = _Form.enumFormEncoding;
exports.enumFormMethod = _Form.enumFormMethod;
exports.Head = _Head.Head;
exports.Header = _Header.Header;
exports.Heading = _Heading.Heading;
exports.Hidden = _Hidden.Hidden;
exports.Hr = _Hr.Hr;
exports.Html = _Html.Html;
exports.I = _I.I;
exports.Icon = _Icon.Icon;
exports.IFrame = _IFrame.IFrame;
exports.Image = _Image.Image;
exports.Ins = _Ins.Ins;
exports.Kbd = _Kbd.Kbd;
exports.Label = _Label.Label;
exports.Legend = _Legend.Legend;
exports.Li = _Li.Li;
exports.Link = _Link.Link;
exports.Main = _Main.Main;
exports.Map = _Map.Map;
exports.Mark = _Mark.Mark;
exports.Menu = _Menu.Menu;
exports.Meta = _Meta.Meta;
exports.Meter = _Meter.Meter;
exports.Nav = _Nav.Nav;
exports.NoScript = _NoScript.NoScript;
exports.ObjectComponent = _ObjectComponent.ObjectComponent;
exports.Ol = _Ol.Ol;
exports.OptGroup = _OptGroup.OptGroup;
exports.Option = _Option.Option;
exports.Output = _Output.Output;
exports.Paragraph = _Paragraph.Paragraph;
exports.Param = _Param.Param;
exports.Password = _Password.Password;
exports.Picture = _Picture.Picture;
exports.Pre = _Pre.Pre;
exports.Progress = _Progress.Progress;
exports.Q = _Q.Q;
exports.Radio = _Radio.Radio;
exports.Rb = _Rb.Rb;
exports.Row = _Row.Row;
exports.Rt = _Rt.Rt;
exports.Rtc = _Rtc.Rtc;
exports.Ruby = _Ruby.Ruby;
exports.S = _S.S;
exports.Samp = _Samp.Samp;
exports.Script = _Script.Script;
exports.Section = _Section.Section;
exports.Select = _Select.Select;
exports.Slot = _Slot.Slot;
exports.Small = _Small.Small;
exports.Source = _Source.Source;
exports.Span = _Span.Span;
exports.Store = _Store.Store;
exports.Strong = _Strong.Strong;
exports.Style = _Style.Style;
exports.Sub = _Sub.Sub;
exports.Summary = _Summary.Summary;
exports.Sup = _Sup.Sup;
exports.Table = _Table.Table;
exports.TBody = _TBody.TBody;
exports.Td = _Td.Td;
exports.Template = _Template.Template;
exports.TextArea = _TextArea.TextArea;
exports.TFoot = _TFoot.TFoot;
exports.Th = _Th.Th;
exports.THead = _THead.THead;
exports.Time = _Time.Time;
exports.Title = _Title.Title;
exports.Tr = _Tr.Tr;
exports.Track = _Track.Track;
exports.U = _U.U;
exports.Ul = _Ul.Ul;
exports.Var = _Var.Var;
exports.Video = _Video.Video;
exports.Wbr = _Wbr.Wbr;

/**
 * Bootstrap _aClasses
 */

exports.Bootstrap4_AlertDecorator = _AlertDecorator.Bootstrap4_AlertDecorator;
exports.Bootstrap4_ContainerDecorator = _ContainerDecorator.Bootstrap4_ContainerDecorator;
exports.Bootstrap4_ColumnDecorator = _ColumnDecorator.Bootstrap4_ColumnDecorator;
exports.Bootstrap4_InputDecorator = _InputDecorator.Bootstrap4_InputDecorator;
exports.Bootstrap4_RowDecorator = _RowDecorator.Bootstrap4_RowDecorator;
exports.Bootstrap4_TextAreaDecorator = _TextAreaDecorator.Bootstrap4_TextAreaDecorator;
exports.Bootstrap4_ButtonDecorator = _ButtonDecorator.Bootstrap4_ButtonDecorator;

/**
 * Semantic _aClasses
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
        component.addClass(component.getAlertStyle());
        component.setAttribute('role', 'alert');
        var sTitle = '';
        if (component.getTitle()) {
            sTitle = '<h4 class="alert-heading">{_sIcon}{_sTitle}</h4>';
        }
        if (component.getIsDismissible()) {
            component.addClass('alert-dismissible');
            component.setTemplate('<div {attributes}>{icon}{title}{label}' +
                ' <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n' +
                '    <span aria-hidden="true">&times;</span>\n' +
                ' </button>' +
                '</div>');
        }
        /**
         * Replace _sTitle tag with _sTitle html if we have a _sTitle, if not will be removed from _sTemplate
         */
        component.setTemplate(component.getTemplate().replace(/{title}/g, sTitle));
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

/***/ "./src/libraries/bootstrap4/components/ContainerDecorator.ts":
/*!*******************************************************************!*\
  !*** ./src/libraries/bootstrap4/components/ContainerDecorator.ts ***!
  \*******************************************************************/
/*! exports provided: Bootstrap4_ContainerDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bootstrap4_ContainerDecorator", function() { return Bootstrap4_ContainerDecorator; });
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
 * Bootstrap 4 container component decorator, decorator will change component properties based on library requirements
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 */
var Bootstrap4_ContainerDecorator = /** @class */ (function (_super) {
    __extends(Bootstrap4_ContainerDecorator, _super);
    function Bootstrap4_ContainerDecorator() {
        return _super.call(this) || this;
    }
    /**
     * Returns component meta data
     * @returns {object}
     */
    Bootstrap4_ContainerDecorator.getMetaData = function () {
        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name: 'ContainerDecorator',
            description: 'Bootstrap 4 container decorator.',
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
    Bootstrap4_ContainerDecorator.prototype.decorate = function (component) {
        component.addClass('alert');
        if (component.getIsFluid()) {
            component.addClass('container-fluid');
        }
        else {
            component.addClass('container');
        }
        return component;
    };
    /**
     * Called after component has been initialized
     * @param component
     */
    Bootstrap4_ContainerDecorator.prototype.init = function (component) {
    };
    return Bootstrap4_ContainerDecorator;
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
         * Replace _sTitle tag with _sTitle html if we have a _sTitle, if not will be removed from _sTemplate
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