import {ComponentProperties, enumMissingFeature, Store} from "./index";

/**
 *  Auto Capitalize values
 *  https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize
 */
export enum enumAutoCapitalize {
    off = 'off',
    none = 'none',
    on = 'on',
    sentences = 'sentences',
    words = 'words',
    characters = 'characters'
}

/**
 *  Dir values
 *  https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir
 */
export enum enumDir {
    ltr = 'ltr',
    rtl = 'rtl',
    auto = 'auto'
}

/**
 *  Input mode values
 *  https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode
 */
export enum enumInputMode {
    none = 'none',
    text = 'text',
    decimal = 'decimal',
    numeric = 'numeric',
    tel = 'tel',
    search = 'search',
    email = 'email',
    url = 'url'
}

/**
 *  Translate values
 *  https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/translate
 */
export enum enumTranslate {
    yes = 'yes',
    no = 'no'
}

/**
 * Base class for UI components
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 */
abstract class Component {

    [key: string]: any;

    /**
     * Unique ID of component, will be used for id and name attributes by default
     */
    protected _sId: string = null;

    /**
     * Indicates if component has been initialized or not
     */
    protected _bIsInitialized: boolean = false;

    /**
     * HTML Container id for component, will use id as default
     */
    protected _sContainerId: string = null;

    /**
     * Name of component
     */
    protected _sName: string = null;

    /**
     * CSS Classes applied to component
     */
    protected _aClasses: any = {};

    /**
     * Component Attributes
     */
    protected _aAttributes: any = {};

    /**
     * Component Value
     */
    protected _mValue: any = null;

    /**
     * If component is enabled or not
     */
    protected _bIsEnabled: boolean = true;

    /**
     * Is component value is required or not
     */
    protected _bIsRequired: boolean = false;

    /**
     * Html template used to render component
     */
    protected _sTemplate: string = null;

    /**
     * Placeholder text
     */
    protected _sPlaceholder: string = null;

    /**
     * The name of the class, parent class for example Div, Paragraph ...
     */
    protected _sComponentClassName: string = 'Component';

    /**
     * List of styles applied to component
     */
    protected _aStyles: any = {};

    /**
     * Parent object of component
     */
    protected _oParent: any = null;

    /**
     * Data store used by component
     */
    protected _oStore: Store = null;

    /**
     * Provides a hint for generating a keyboard shortcut for the current element.
     */
    protected _sAccessKey: string = null;

    /**
     * Controls whether and how text input is automatically capitalized as it is entered/edited by the user.
     */
    protected _eAutoCapitalize: enumAutoCapitalize = null;

    /**
     * Forms a class of attributes, called custom data attributes, that allow proprietary information
     * to be exchanged between the HTML and its DOM representation that may be used by scripts
     */
    protected _aDataAttributes: any = {};

    /**
     * An enumerated attribute indicating if the element should be editable by the user
     */
    protected _bContentEditable: boolean = false;

    /**
     * An enumerated attribute indicating the directionality of the element's text.
     */
    protected _eDir: enumDir = null;

    /**
     * The id of a <menu> to use as the contextual menu for this element.
     */
    protected _sContextMenu: string = null;

    /**
     * An enumerated attribute indicating whether the element can be dragged
     */
    protected _bDraggable: boolean = null;

    /**
     * Provides a hint to browsers as to the type of virtual keyboard configuration to use
     */
    protected _eInputMode: enumInputMode = null;

    /**
     * The is global attribute allows you to specify that a standard HTML element
     * should behave like a defined custom built-in element
     */
    protected _sIs: string = null;

    /**
     * The unique, global identifier of an item.
     */
    protected _sItemId: string = null;

    /**
     * Used to add properties to an item. Every HTML element may have an _sItemProp attribute specified, where an _sItemProp consists of a name and value pair.
     */
    protected _sItemProp: string = null;

    /**
     * Properties that are not descendants of an element with the itemscope attribute can be associated with the item using an itemref
     */
    protected _sItemRef: string = null;

    /**
     * _bItemScope (usually) works along with itemtype to specify that the HTML contained in a block is about a particular item.
     */
    protected _bItemScope: boolean = null;

    /**
     * Specifies the URL of the vocabulary that will be used to define itemprops (item properties) in the data structure.
     */
    protected _sItemType: string = null;

    /**
     * Helps define the language of an element
     */
    protected _sLang: string = null;

    /**
     * Assigns a slot in a shadow DOM shadow tree to an element:
     */
    protected _sSlot: string = null;

    /**
     * An enumerated attribute defines whether the element may be checked for spelling errors
     */
    protected _bSpellcheck: boolean = null;

    /**
     * An integer attribute indicating if the element can take input focus (is focusable), if it should participate to sequential keyboard navigation, and if so, at what position.
     */
    protected _nTabIndex: number = null;

    /**
     * Contains a text representing advisory information related to the element it belongs to.
     */
    protected _sTitle: string = null;

    /**
     * An enumerated attribute that is used to specify whether an element's attribute values and the values of its Text node children are to be translated when the page is localized
     */
    protected _eTranslate: enumTranslate = null;

    //
    //  E V E N T S
    //

    /**
     * On abort event source
     * https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onabort
     */
    public onAbort: any = null;
    /**
     *
     */
    public onAutoComplete: any = null;
    /**
     *
     */
    public onAutoCompleteError: any = null;
    /**
     *
     */
    public onBlur: any = null;
    /**
     *
     */
    public onCancel: any = null;
    /**
     *
     */
    public onCanPlay: any = null;
    /**
     *
     */
    public onCanPlayThrough: any = null;
    /**
     *
     */
    public onChange: any = null;
    /**
     *
     */
    public onClick: any = null;
    /**
     *
     */
    public onClose: any = null;
    /**
     *
     */
    public onContextMenu: any = null;
    /**
     *
     */
    public onCueChange: any = null;
    /**
     *
     */
    public onDblClick: any = null;
    /**
     *
     */
    public onDrag: any = null;
    /**
     *
     */
    public onDragEnd: any = null;
    /**
     *
     */
    public onDragEnter: any = null;
    /**
     *
     */
    public onDragExit: any = null;
    /**
     *
     */
    public onDragLeave: any = null;
    /**
     *
     */
    public onDragOver: any = null;
    /**
     *
     */
    public onDragStart: any = null;
    /**
     *
     */
    public onDrop: any = null;
    /**
     *
     */
    public onDurationChange: any = null;
    /**
     *
     */
    public onEmptied: any = null;
    /**
     *
     */
    public onEnded: any = null;
    /**
     *
     */
    public onError: any = null;
    /**
     *
     */
    public onFocus: any = null;
    /**
     *
     */
    public onInput: any = null;
    /**
     *
     */
    public onInvalid: any = null;
    /**
     *
     */
    public onKeyDown: any = null;
    /**
     *
     */
    public onKeyPress: any = null;
    /**
     *
     */
    public onKeyUp: any = null;
    /**
     *
     */
    public onLoad: any = null;
    /**
     *
     */
    public onLoadedData: any = null;
    /**
     *
     */
    public onLoadedMetadata: any = null;
    /**
     *
     */
    public onLoadStart: any = null;
    /**
     *
     */
    public onMouseDown: any = null;
    /**
     *
     */
    public onMouseEnter: any = null;
    /**
     *
     */
    public onMouseLeave: any = null;
    /**
     *
     */
    public onMouseMove: any = null;
    /**
     *
     */
    public onMouseOut: any = null;
    /**
     *
     */
    public onMouseOver: any = null;
    /**
     *
     */
    public onMouseUp: any = null;
    /**
     *
     */
    public onMouseWheel: any = null;
    /**
     *
     */
    public onPause: any = null;
    /**
     *
     */
    public onPlay: any = null;
    /**
     *
     */
    public onPlaying: any = null;
    /**
     *
     */
    public onProgress: any = null;
    /**
     *
     */
    public onRateChange: any = null;
    /**
     *
     */
    public onReset: any = null;
    /**
     *
     */
    public onResize: any = null;
    /**
     *
     */
    public onScroll: any = null;
    /**
     *
     */
    public onSeeked: any = null;
    /**
     *
     */
    public onSeeking: any = null;
    /**
     *
     */
    public onSelect: any = null;
    /**
     *
     */
    public onShow: any = null;
    /**
     *
     */
    public onSort: any = null;
    /**
     *
     */
    public onStalled: any = null;
    /**
     *
     */
    public onSubmit: any = null;
    /**
     *
     */
    public onSuspend: any = null;
    /**
     *
     */
    public onTimeUpdate: any = null;
    /**
     *
     */
    public onToggle: any = null;
    /**
     *
     */
    public onVolumeChange: any = null;
    /**
     *
     */
    public onWaiting: any = null;


    /**
     * Component constructor
     * @param sId Component unique ID
     */
    constructor(sId: string = null)
    {

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
    public checkIfFeatureIsSupported(oMetaData: any) : boolean
    {

        // @ts-ignore
        if (oMetaData.libraries[window.UX.activeLibrary].supported) {
            return true;
        } else {

            // @ts-ignore
            if (window.UX.missingFeature == enumMissingFeature.IGNORE) {
                // Do nothing ignore the error
                // @ts-ignore
            } else if (window.UX.missingFeature == enumMissingFeature.ERROR) {
                // @ts-ignore
                throw 'Unsupported feature ' + oMetaData.name + ' when using library ' + window.UX.activeLibrary;
                // @ts-ignore
            } else if (window.UX.missingFeature == enumMissingFeature.WARNING) {
                // @ts-ignore
                window.UX.warn( 'Unsupported feature ' + oMetaData.name + ' when using library ' + window.UX.activeLibrary );
                // @ts-ignore
            } else if (window.UX.missingFeature == enumMissingFeature.PATCH) {

            }

            return false;
        }
    }

    /**
     * Component init
     */
    public init() : void
    {

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
        for (let e in ComponentProperties.CommonEvents) {
            let sAccessor: string = ComponentProperties.CommonEvents[e].accessor;

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
            let oDecorator = new window.UX.libraries[window.UX.activeLibrary][this._sComponentClassName + 'Decorator']();
            oDecorator.init(this);
        }


        this._bIsInitialized = true;

    }

    /**
     *
     * @param eventName
     * @param callback
     */
    public on(sEventName: string, callback:any)
    {

        if (!sEventName) {
            throw 'Component::on => eventName is required';
        }

        if (!callback) {
            throw 'Component::on => callback is required';
        }


        if (Object.keys(this).indexOf(sEventName) != -1) {
            this[sEventName] = callback;
        } else {
            console.log(this);
            // @ts-ignore
            window.UX.log('Component::on => Invalid event name ' + sEventName);
            throw 'Component::on => Invalid event name ' + sEventName + ' ' + Object.getPrototypeOf(this).constructor.name.toString();
        }

        return this;

    }


    /**
     * Returns _aStyles object
     * @returns {object}
     */
    public getStyles() : any
    {
        return this._aStyles;
    }

    /**
     * Adds a style to the component CSS
     * @param {string} sStyle
     */
    public addStyle(sStyle: string) : Component
    {
        let aStyles = sStyle.split(';');
        for(let x in aStyles) {
            if (aStyles[x] != '') {
                let aTokens = aStyles[x].split(':');
                if (aTokens[0] != '') {
                    this._aStyles[aTokens[0]] = aTokens[1];
                }
            }
        }
        return this;
    }

    /**
     * Alias for addStyle
     * @param sStyle
     */
    public css(sStyle: string) : Component
    {
        return this.addStyle(sStyle);
    }

    /**
     * Alias for addStyle
     * @param sStyle
     */
    public setStyle(aStyle: any) : Component
    {
        return this._aStyles = aStyle;
    }

    /**
     *
     */
    public getStyle() : any
    {
        return this._aStyles;
    }

    /**
     * Returns style list
     * @returns {string|string}
     */
    public getStyleList() : string
    {
        let sStyles = '';
        for(let x in this._aStyles) {
            if (this._aStyles.hasOwnProperty(x)) {
                sStyles = sStyles + x + ':' + this._aStyles[x] + ';';
            }
        }
        return sStyles;
    }

    /**
     *
     * @returns {null}
     */
    public getStore() : Store
    {
        return this._oStore;
    }

    /**
     * Sets data _oStore for component
     * @param oStore
     */
    public setStore(oStore : Store) : Component
    {
        this._oStore = oStore;
        return this;
    }

    /**
     * Returns if component is enabled or not
     * @returns {boolean}
     */
    public getEnabled() : boolean
    {
        return this._bIsEnabled;
    }

    /**
     * Sets if component is enabled or not
     * @param bEnabled
     * @returns {Component}
     */
    public setEnabled(bEnabled : boolean) : Component
    {
        this._bIsEnabled = bEnabled;
        return this;
    }

    /**
     *
     * @returns {string}
     */
    public static generateRandomId() : string
    {
        return 'UX' + Math.random().toString(36).substring(2, 6) + Math.random().toString(36).substring(2, 6);
    }


    /**
     * Returns component ID
     * @returns {*}
     */
    public getId() : string
    {
        return this._sId;
    }

    /**
     * Sets component ID
     * @param sId
     */
    public setId(sId: string) : Component
    {
        this._sId = sId;
        return this;
    }


    /**
     * Returns component html _sTemplate
     * @returns {null}
     */
    public getTemplate() : string
    {
        return this._sTemplate;
    }

    /**
     * Sets component _sTemplate
     * @param template
     * @returns {Component}
     */
    public setTemplate(template : string) : Component
    {
        this._sTemplate = template;
        return this;
    }

    /**
     * Set component attribute
     * @param sAttrName
     * @param mValue
     * @returns {Component}
     */
    public setAttribute(sAttrName: string, mValue: any = null) : Component
    {
        this._aAttributes[sAttrName] = mValue;
        return this;
    }

    /**
     * Alias for setAttribute
     * @param sAttrName
     * @param mValue
     * @returns {Component}
     */
    public attr(sAttrName: string, mValue: any = null) : Component
    {
        return this.setAttribute(sAttrName,mValue);
    }

    /**
     * Returns array of _aAttributes
     * @returns {*}
     */
    public getAttributes() : any
    {
        return this._aAttributes;
    }

    /**
     * Add a class to component, multiple _aClasses must be separated by spaces
     * @param {string} sClassName The CSS _aClasses to add to the component
     */
    public addClass(sClassName: string) : Component
    {
        let aClasses = sClassName.split(' ');
        for(let x in aClasses) {
            this._aClasses[aClasses[x]] = aClasses[x];
        }
        return this;
    }

    /**
     * Returns array of _aClasses
     * @returns {*}
     */
    public getClasses() : any
    {
        return this._aClasses;
    }

    /**
     *
     * @param aClasses
     */
    public setClasses(aClasses: any) : Component
    {
        this._aClasses = aClasses;
        return this;
    }

    /**
     * Returns component _mValue
     * @returns {null|*}
     */
    public getValue() : any
    {
        this._mValue = $('#' + this.getId()).val();
        return this._mValue;
    }

    /**
     * Sets component _mValue
     * @param mValue
     * @returns {Component}
     */
    public setValue(mValue: any) : Component
    {

        this._mValue = mValue;

        $('#' + this.getId()).val(this._mValue);

        return this;
    }

    /**
     * Enables component
     * @returns {Component}
     */
    public enable() : Component
    {
        this._bIsEnabled = true;

        // Reset enable for initialized component
        if (this._bIsInitialized) {
            $('#' + this.getId()).prop('disabled', '');
        }

        return this;
    }

    /**
     * Disables component
     * @returns {Component}
     */
    public disable() : Component
    {
        this._bIsEnabled = false;

        // Reset enable for initialized component
        if (this._bIsInitialized) {
            $('#' + this.getId()).prop('disabled', 'disabled');
        }

        return this;
    }

    /**
     * Returns _sPlaceholder text
     * @returns {null}
     */
    public getPlaceholder() : string
    {
        return this._sPlaceholder;
    }

    /**
     * Sets _sPlaceholder text
     * @param sPlaceholder
     * @returns {Component}
     */
    public setPlaceholder(sPlaceholder: string) : Component
    {
        this._sPlaceholder = sPlaceholder;

        // Reset _sPlaceholder for initialized component
        if (this._bIsInitialized) {
            $('#' + this.getId()).attr('_sPlaceholder', sPlaceholder);
        }

        return this;
    }

    /**
     * Returns _aClasses list as a string
     * @returns {string|string}
     */
    public getClassList() : string
    {
        let sClasses = '';
        for(let x in this._aClasses) {
            if (sClasses != '') {
                sClasses = sClasses + ' ';
            }
            sClasses = sClasses + x;
        }
        return sClasses;
    }

    /**
     * Returns string of component _aAttributes
     * @returns {string|string}
     */
    public getAttributeList() : string
    {

        let sAttributes = '';

        for(let x in this._aAttributes) {
            if (this._aAttributes.hasOwnProperty(x)) {
                if (sAttributes != '') {
                    sAttributes = sAttributes + ' ';
                }
                if (this._aAttributes[x] === null) {
                    sAttributes = sAttributes + x;
                } else {
                    sAttributes = sAttributes + x + '="' + this._aAttributes[x] + '"';
                }
            }
        }

        return sAttributes;

    }

    /**
     * Render component and returns HTML string
     */
    public render(map: any = null) : string
    {

        let _className: string = Object.getPrototypeOf(this).constructor.name.toString();

        /**
         * Check if we have a decorator for this component
         */
        // @ts-ignore
        if (window.UX.libraries[window.UX.activeLibrary][this._sComponentClassName + 'Decorator'] != undefined) {
            // @ts-ignore
            let oDecorator = new window.UX.libraries[window.UX.activeLibrary][this._sComponentClassName + 'Decorator']();
            oDecorator.decorate(this);
            // @ts-ignore
            window.UX.log('Found decorator for component ' + window.UX.activeLibrary + ' ' + this._sComponentClassName);
        } else {
            // @ts-ignore
            window.UX.log('No decorator for component ' + window.UX.activeLibrary + ' ' + this._sComponentClassName);
        }

        /**
         * Load template, set attributes, replace
         */
        let sComponentHTML = this._sTemplate;

        /**
         * For each property replace {propname} with value from accessor
         * AND
         * Apply render actions
         */

        let allProperties: any = null;
        if ((<any>ComponentProperties)[_className]) {
            allProperties = {
                ...ComponentProperties.Common,
                ...(<any>ComponentProperties)[_className].properties
            };
        } else {
            allProperties = {
                ...ComponentProperties.Common,
            };
        }



        for(let sPropertyName in allProperties) {

            let _prop = allProperties[sPropertyName];

            /**
             * Check if we have render actions
             */
            if (_prop.render) {

                // For each render action
                for(let nRenderIndex in _prop.render) {

                    let _action = _prop.render[nRenderIndex];

                    let _getAction = null;
                    let _getValue  = null;

                    if (_action.type == 'expression') {

                        let sExpression: string  = _action.eval;

                        let _params: any = sExpression.match(/{([^}]+)}/g);

                        for(let nParamIndex in _params) {

                            let _sParamValue = '';
                            let _sParamName = _params[nParamIndex];

                            _sParamName = _sParamName.replace('{','');
                            _sParamName = _sParamName.replace('}','');

                            if (allProperties[_sParamName].accessor) {
                                _sParamValue = this['get' + allProperties[_sParamName].accessor]();
                            }

                            let _paramRegEx = new RegExp('\{' + _sParamName + '\}', 'g');
                            sExpression = sExpression.replace(_paramRegEx, _sParamValue);

                        }

                        let _expressionValue: any = eval(sExpression);

                        let _expressionRegEx = new RegExp('\{' + sPropertyName + '\}', 'g');
                        sComponentHTML = sComponentHTML.replace(_expressionRegEx, _expressionValue);



                    } else if (_action.type == 'attribute') {

                        /**
                         * Create an attribute action
                         */
                        let sAttributeName = '';

                        if (_action.attributeName) {
                            sAttributeName = _action.attributeName;
                        } else {
                            sAttributeName = sPropertyName;
                        }

                        if (_action.attributeValue) {
                            _getAction = _action.attributeValue;
                        } else {
                            _getAction = 'get' + _prop.accessor;
                        }
                        _getValue  =  this[_getAction]();
                        if (_getValue) {
                            this.setAttribute(sAttributeName, _getValue);
                        }
                    }

                }
            } else {
                // @ts-ignore
                window.UX.log('No render actions for ' + sPropertyName);
            } // END OF RENDER ACTIONS


            /**
             * Replace property name by value if not already replaced by render action
             */
            let _get = 'get' + allProperties[sPropertyName].accessor;

            let oRegExp = new RegExp('\{' + sPropertyName + '\}', 'g');

            let _value = this[_get]();
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
        for(let x in this._aDataAttributes) {
            if (this._aDataAttributes.hasOwnProperty(x)) {
                this.setAttribute('data-' + x, this._aDataAttributes[x]);
            }
        }



        /**
         * Build attribute code
         * ALL CHANGES TO ATTRIBUTES MUST BE MADE BEFORE THIS
         */
        let sAttributes = this.getAttributeList();

        sComponentHTML = sComponentHTML.replace(/{attributes}/g, sAttributes);

        /**
         * If map of replacement is supplied replace all in _sTemplate
         */
        if (map) {
            for(let x in map) {
                let oRegExp = new RegExp('\{' + x + '\}', 'g');
                sComponentHTML = sComponentHTML.replace(oRegExp, map[x]);
            }
        }

        /**
         * For each property of component , replace key in _sTemplate
         */
        let keys = Object.keys(this);
        for(let x in keys) {
            let oRegExp = new RegExp('\{' + keys[x] + '\}', 'g');
            if (this[keys[x]] != null) {
                sComponentHTML = sComponentHTML.replace(oRegExp, this[keys[x]]);
            } else {
                sComponentHTML = sComponentHTML.replace(oRegExp, '');
            }
        }


        let el = $('#' + this.getId());
        if ( el.length > 0 ) {
            el.replaceWith(sComponentHTML);
        } else {
            // No dom element to replace, append to default container
            // @ts-ignore
            $(window.UX.defaultContainerId).append(sComponentHTML);
        }


        return sComponentHTML;
    }

    /**
     * Add CSS and JS code required to patch this component
     */
    public static patchComponent(oMetaData: any) : void
    {
        // @ts-ignore
        window.UX.log('    * No patch for component ' + oMetaData.name)
    }

    /**
     * Returns access key
     */
    public getAccessKey() : string
    {
        return this._sAccessKey;
    }

    /**
     * Provides a hint for generating a keyboard shortcut for the current element. This attribute consists of a space-separated list of characters.
     * @param sAccessKey
     */
    public setAccessKey(sAccessKey: string) : Component
    {
        this._sAccessKey = sAccessKey;
        return this;
    }

    /**
     * Returns autocapitalize
     */
    public getAutoCapitalize() : enumAutoCapitalize
    {
        return this._eAutoCapitalize;
    }

    /**
     * Controls whether and how text input is automatically capitalized as it is entered/edited by the user.
     * @param eAutoCapitalize
     */
    public setAutoCapitalize(eAutoCapitalize: enumAutoCapitalize) : Component
    {
        this._eAutoCapitalize = eAutoCapitalize;
        return this;
    }

    /**
     * Returns a data-* attribute
     * @param sName
     */
    public getDataAttribute(sName: string) : any
    {
        return this._aDataAttributes[sName];
    }

    /**
     * Sets a data-* attribute
     * @param sName
     * @param mValue
     */
    public setDataAttribute(sName: string, mValue: any) : Component
    {
        // Check if _sName starts with data-
        if (sName.toLowerCase().startsWith('data-')) {
            // remove data- if supplied
            sName = sName.substr(5);
        }

        this._aDataAttributes[sName] = mValue;
        return this;
    }

    /**
     * Returns if component is editable
     */
    public getContentEditable() : boolean
    {
        return this._bContentEditable;
    }

    /**
     * An enumerated attribute indicating if the element should be editable by the user
     * @param bContentEditable
     */
    public setContentEditable(bContentEditable: boolean) : Component
    {
        this._bContentEditable = bContentEditable;
        return this;
    }

    /**
     *
     */
    public getDir() : enumDir
    {
        return this._eDir;
    }

    /**
     *
     * @param eDir
     */
    public setDir(eDir: enumDir) : Component
    {
        this._eDir = eDir;
        return this;
    }

    /**
     *
     */
    public getContextMenu() : string
    {
        return this._sContextMenu;
    }

    /**
     *
     * @param sContextMenu
     */
    public setContextMenu(sContextMenu: string) : Component
    {
        this._sContextMenu = sContextMenu;
        return this;
    }

    /**
     *
     */
    public getDraggable() : boolean
    {
        return this._bDraggable;
    }

    /**
     *
     * @param bDraggable
     */
    public setDraggable(bDraggable: boolean) : Component
    {
        this._bDraggable = bDraggable;
        return this;
    }

    /**
     *
     */
    public getInputMode() : enumInputMode
    {
        return this._eInputMode;
    }

    public setInputMode(eInputMode: enumInputMode) : Component
    {
        this._eInputMode = eInputMode;
        return this;
    }


    /**
     *
     */
    public getIs() : string
    {
        return this._sIs;
    }

    /**
     *
     * @param sIs
     */
    public setIs(sIs: string) : Component
    {
        this._sIs = sIs;
        return this;
    }

    /**
     *
     */
    public getItemId() : string
    {
        return this._sItemId;
    }

    /**
     *
     * @param sItemId
     */
    public setItemId(sItemId: string) : Component
    {
        this._sItemId = sItemId;
        return this;
    }

    /**
     *
     */
    public getItemProp() : string
    {
        return this._sItemProp;
    }

    /**
     *
     * @param sItemProp
     */
    public setItemProp(sItemProp: string) : Component
    {
        this._sItemProp = sItemProp;
        return this;
    }

    /**
     *
     */
    public getItemRef() : string
    {
        return this._sItemRef;
    }

    /**
     *
     * @param sItemRef
     */
    public setItemRef(sItemRef: string) : Component
    {
        this._sItemRef = sItemRef;
        return this;
    }

    /**
     *
     */
    public getItemScope() : boolean
    {
        return this._bItemScope;
    }

    /**
     *
     * @param sItemScope
     */
    public setItemScope(sItemScope: boolean) : Component
    {
        this._bItemScope = sItemScope;
        return this;
    }

    /**
     *
     */
    public getItemType() : string
    {
        return this._sItemType;
    }

    /**
     *
     * @param sItemType
     */
    public setItemType(sItemType: string) : Component
    {
        this._sItemType = sItemType;
        return this;
    }

    /**
     *
     */
    public getLang() : string
    {
        return this._sLang;
    }

    /**
     *
     * @param sLang
     */
    public setLang(sLang: string) : Component
    {
        this._sLang = sLang;
        return this;
    }

    /**
     *
     */
    public getSlot() : string
    {
        return this._sSlot;
    }

    /**
     *
     * @param sSlot
     */
    public setSlot(sSlot: string) : Component
    {
        this._sSlot = sSlot;
        return this;
    }

    /**
     *
     */
    public getSpellcheck() : boolean
    {
        return this._bSpellcheck;
    }

    /**
     *
     * @param bSpellcheck
     */
    public setSpellcheck(bSpellcheck: boolean) : Component
    {
        this._bSpellcheck = bSpellcheck;
        return this;
    }

    /**
     *
     */
    public getTabIndex() : number | null
    {
        return this._nTabIndex;
    }

    /**
     *
     * @param nTabIndex
     */
    public setTabIndex(nTabIndex: number) : Component
    {
        this._nTabIndex = nTabIndex;
        return this;
    }

    /**
     *
     */
    public getTitle() : string
    {
        return this._sTitle;
    }

    /**
     *
     * @param sTitle
     */
    public setTitle(sTitle: string) : Component
    {
        this._sTitle = sTitle;
        return this;
    }

    /**
     *
     */
    public getTranslate() : enumTranslate
    {
        return this._eTranslate;
    }

    /**
     *
     * @param eTranslate
     */
    public setTranslate(eTranslate: enumTranslate) : Component
    {
        this._eTranslate = eTranslate;
        return this;
    }

    /**
     *
     */
    public getName() : string
    {
        return this._sName;
    }

    /**
     *
     * @param sName
     */
    public setName(sName: string) : Component
    {
        this._sName = sName;
        return this;
    }

    /**
     * Trigger an event
     * @param sEventName
     */
    public trigger(sEventName: string) : any
    {

        if (!sEventName) {
            throw 'eventName is required';
        }


        if (this[sEventName]) {
            // @ts-ignore
            window.UX.log('Component::trigger => Trigger event ' + sEventName + ' ' + Object.getPrototypeOf(this).constructor.name.toString());
            return this[sEventName]();
        } else {
            // @ts-ignore
            window.UX.log('Component::trigger => Invalid event name ' + sEventName);
            throw 'Component::trigger => Invalid event name ' + sEventName;
        }

        return false;

    }

    /**
     * Return parent container
     */
    public getParent() : Component | null
    {
        return this._oParent;
    }


}

export { Component };