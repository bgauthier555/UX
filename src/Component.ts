/**
 * Base class for javascript UI components
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 */
import {enumMissingFeature, Store} from "./index";

export enum enumAutoCapitalize {
    off = 'off',
    none = 'none',
    on = 'on',
    sentences = 'sentences',
    words = 'words',
    characters = 'characters'
}

export enum enumDir {
    ltr = 'ltr',
    rtl = 'rtl',
    auto = 'auto'
}

class Component {

    [key: string]: any;

    /**
     * Unique id of component
     */
    protected id: string = null;

    /**
     * Indicates if component has been initialized
     */
    protected isInitialized: boolean = false;

    /**
     * Container id of component
     */
    protected containerId: string = null;

    /**
     * Name of component
     */
    protected name: string = null;

    /**
     * classes applied to component
     */
    protected classes: any = {};

    /**
     * Component attributes
     */
    protected attributes: any = {};

    /**
     * Component value
     */
    protected value: any = null;

    /**
     * If component is enabled or not
     */
    protected isEnabled: boolean = true;

    /**
     * Is component value is required or not
     */
    protected isRequired: boolean = false;

    /**
     * Html template used to render component
     */
    public template: string = null;

    /**
     * Placeholder text
     */
    protected placeholder: string = null;

    /**
     * The name of the class
     */
    protected componentClassName: string = 'Component';

    /**
     * Label for component
     */
    protected label: string = null;


    /**
     * Icon, used to display in some components
     */
    protected icon: string = null;

    /**
     * List of styles applied to component
     */
    protected styles: any = {};

    /**
     * Parent object of component
     */
    public parent: any = null;

    /**
     * Data store used by component
     */
    protected store: Store = null;

    /**
     * Provides a hint for generating a keyboard shortcut for the current element.
     */
    protected accessKey: string = null;

    /**
     * Controls whether and how text input is automatically capitalized as it is entered/edited by the user.
     */
    protected autoCapitalize: enumAutoCapitalize = null;

    /**
     * Forms a class of attributes, called custom data attributes, that allow proprietary information
     * to be exchanged between the HTML and its DOM representation that may be used by scripts
     */
    protected dataAttributes: any = {};

    /**
     * An enumerated attribute indicating if the element should be editable by the user
     */
    protected contentEditable: boolean = false;

    /**
     * An enumerated attribute indicating the directionality of the element's text.
     */
    protected dir: enumDir = null;

    //
    //  E V E N T S
    //


    /**
     * Component on blur event
     */
    public onBlur: any = null;

    /**
     * Component on click event
     */
    public onClick: any = null;

    /**
     * Component on change event
     */
    public onChange: any = null;

    /**
     * Component on select event
     */
    public onSelect:any = null;
    /**
     * Component on double click event
     */
    public onDblClick:any = null;

    /**
     * Component on focus event
     */
    public onFocus:any = null;

    /**
     * Component on focus in event
     */
    public onFocusIn:any = null;

    /**
     * Component on focus out event
     */
    public onFocusOut:any = null;

    /**
     * Component on hover event
     */
    public onHover:any = null;

    /**
     * Component on key down event
     */
    public onKeyDown:any = null;

    /**
     * Component on key press event
     */
    public onKeyPress:any = null;

    /**
     * Component on key up event
     */
    public onKeyUp:any = null;

    /**
     * Component on mouse down event
     */
    public onMouseDown:any = null;

    /**
     * Component on mouse enter event
     */
    public onMouseEnter:any = null;

    /**
     * Component on mouse leave event
     */
    public onMouseLeave:any = null;

    /**
     * Component on mouse move event
     */
    public onMouseMove:any = null;

    /**
     * Component on mouse out event
     */
    public onMouseOut:any = null;

    /**
     * Component on mouse up event
     */
    public onMouseUp:any = null;

    /**
     * Component on resize event
     */
    public onResize:any = null;

    /**
     * Component on scroll event
     */
    public onScroll:any = null;

    /**
     * Component on submit event
     */
    public onSubmit:any = null;

    /**
     * Component on unload event
     */
    public onUnload:any = null;

    /**
     * Component on load event
     */
    public onLoad:any = null;

    /**
     * Component constructor
     * @param id Component unique ID
     */
    constructor(id: string = null)
    {

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
    public checkIfFeatureIsSupported(metaData: any) : boolean
    {

        // @ts-ignore
        if (metaData.libraries[window.UX.activeLibrary].supported) {
            return true;
        } else {

            // @ts-ignore
            if (window.UX.missingFeature == enumMissingFeature.ERROR) {
                // @ts-ignore
                throw 'Unsupported feature ' + metaData.name + ' when using library ' + window.UX.activeLibrary;
                // @ts-ignore
            } else if (window.UX.missingFeature == enumMissingFeature.WARNING) {
                // @ts-ignore
                window.UX.warn( 'Unsupported feature ' + metaData.name + ' when using library ' + window.UX.activeLibrary );
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

        if (this.isInitialized) {
            return;
        }

        // @ts-ignore
        window.UX.log('Component initialized ' + this.getId());

        /**
         * Render HTML code and insert into page
         */
        let el = $('#' + this.getId());
        if ( el.length > 0 ) {
            el.replaceWith(this.render());
        } else {
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
            let oDecorator = new window.UX.libraries[window.UX.activeLibrary][this.componentClassName + 'Decorator']();
            oDecorator.init(this);
        }


        this.isInitialized = true;

    }

    /**
     *
     * @param eventName
     * @param callback
     */
    on (eventName:string, callback:any)
    {

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

    }


    /**
     * Returns styles object
     * @returns {object}
     */
    public getStyles() : any
    {
        return this.styles;
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
                    this.styles[aTokens[0]] = aTokens[1];
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
    public setStyle(sStyle: string) : Component
    {
        return this.addStyle(sStyle);
    }

    /**
     * Returns style list
     * @returns {string|string}
     */
    public getStyleList() : string
    {
        let sStyles = '';
        for(let x in this.styles) {
            if (this.styles.hasOwnProperty(x)) {
                sStyles = sStyles + x + ':' + this.styles[x] + ';';
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
        return this.store;
    }

    /**
     * Sets data store for component
     * @param store
     */
    public setStore(store : Store) : Component
    {
        this.store = store;
        return this;
    }

    /**
     * Returns if component is enabled or not
     * @returns {boolean}
     */
    public getEnabled() : boolean
    {
        return this.isEnabled;
    }

    /**
     * Sets if component is enabled or not
     * @param enabled
     * @returns {Component}
     */
    public setEnabled(enabled : boolean) : Component
    {
        this.isEnabled = enabled;
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
        return this.id;
    }

    /**
     * Sets component ID
     * @param id
     */
    public setId(id: string) : Component
    {
        this.id = id;
        return this;
    }

    /**
     * Returns component label
     * @returns {null}
     */
    public getLabel() : string
    {
        return this.label;
    }

    /**
     * Sets component label
     * @param label
     * @returns {Component}
     */
    public setLabel(label: string) : Component
    {
        this.label = label;
        return this;
    }

    /**
     * Returns component html template
     * @returns {null}
     */
    public getTemplate() : string
    {
        return this.template;
    }

    /**
     * Sets component template
     * @param template
     * @returns {Component}
     */
    public setTemplate(template : string) : Component
    {
        this.template = template;
        return this;
    }

    /**
     * Set component attribute
     * @param sAttrName
     * @param mValue
     * @returns {Component}
     */
    public setAttribute(sAttrName: string, mValue: string = null) : Component
    {
        this.attributes[sAttrName] = mValue;
        return this;
    }

    /**
     * Alias for setAttribute
     * @param sAttrName
     * @param mValue
     * @returns {Component}
     */
    public attr(sAttrName: string, mValue: string = null) : Component
    {
        return this.setAttribute(sAttrName,mValue);
    }

    /**
     * Returns array of attributes
     * @returns {*}
     */
    public getAttributes() : any
    {
        return this.attributes;
    }

    /**
     * Add a class to component, multiple classes must be separated by spaces
     * @param {string} sClassName The CSS classes to add to the component
     */
    public addClass(sClassName: string) : Component
    {
        let aClasses = sClassName.split(' ');
        for(let x in aClasses) {
            this.classes[aClasses[x]] = aClasses[x];
        }
        return this;
    }

    /**
     * Returns array of classes
     * @returns {*}
     */
    public getClasses() : any
    {
        return this.classes;
    }

    /**
     * Returns component value
     * @returns {null|*}
     */
    public getValue() : any
    {
        this.value = $('#' + this.getId()).val();
        return this.value;
    }

    /**
     * Sets component value
     * @param mValue
     * @returns {Component}
     */
    public setValue(mValue: any) : Component
    {

        this.value = mValue;

        $('#' + this.getId()).val(this.value);

        return this;
    }

    /**
     * Enables component
     * @returns {Component}
     */
    public enable() : Component
    {
        this.isEnabled = true;

        // Reset enable for initialized component
        if (this.isInitialized) {
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
    public getPlaceholder() : string
    {
        return this.placeholder;
    }

    /**
     * Sets placeholder text
     * @param placeholder
     * @returns {Component}
     */
    public setPlaceholder(placeholder: string) : Component
    {
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
    public getClassList() : string
    {
        let sClasses = '';
        for(let x in this.classes) {
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
    public getAttributeList() : string
    {

        let sAttributes = '';

        for(let x in this.attributes) {
            if (this.attributes.hasOwnProperty(x)) {
                if (sAttributes != '') {
                    sAttributes = sAttributes + ' ';
                }
                if (this.attributes[x] === null) {
                    sAttributes = sAttributes + x;
                } else {
                    sAttributes = sAttributes + x + '="' + this.attributes[x] + '"';
                }
            }
        }

        return sAttributes;

    }

    /**
     * Render component and returns HTML string
     */
    public render() : string
    {

        /**
         * Check if we have a decorator for this component
         */
        // @ts-ignore
        if (window.UX.libraries[window.UX.activeLibrary][this.componentClassName + 'Decorator'] != undefined) {
            // @ts-ignore
            let oDecorator = new window.UX.libraries[window.UX.activeLibrary][this.componentClassName + 'Decorator']();
            oDecorator.decorate(this);
            // @ts-ignore
            window.UX.log('Found decorator for component ' + window.UX.activeLibrary + ' ' + this.componentClassName);
        } else {
            // @ts-ignore
            window.UX.log('No decorator for component ' + window.UX.activeLibrary + ' ' + this.componentClassName);
        }

        /**
         * Load template, set attributes, replace
         */
        let sComponentHTML = this.template;

        // ID
        this.setAttribute('id',this.id);

        // Name
        this.setAttribute('name',this.name);

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
        for(let x in this.dataAttributes) {
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
        let sAttributes = this.getAttributeList();

        sComponentHTML = sComponentHTML.replace(/{attributes}/g, sAttributes);

        /**
         * For each property of component , replace key in template
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




        return sComponentHTML;
    }

    /**
     * Add CSS and JS code required to patch this component
     */
    public static patchComponent(metaData: any) : void
    {
        // @ts-ignore
        window.UX.log('    * No patch for component ' + metaData.name)
    }

    /**
     * Returns access key
     */
    public getAccessKey() : string
    {
        return this.accessKey;
    }

    /**
     * Provides a hint for generating a keyboard shortcut for the current element. This attribute consists of a space-separated list of characters.
     * @param accessKey
     */
    public setAccessKey(accessKey: string) : Component
    {
        this.accessKey = accessKey;
        return this;
    }

    /**
     * Returns autocapitalize
     */
    public getAutoCapitalize() : enumAutoCapitalize
    {
        return this.autoCapitalize;
    }

    /**
     * Controls whether and how text input is automatically capitalized as it is entered/edited by the user.
     * @param autoCapitalize
     */
    public setAutoCapitalize(autoCapitalize: enumAutoCapitalize) : Component
    {
        this.autoCapitalize = autoCapitalize;
        return this;
    }

    /**
     * Returns a data-* attribute
     * @param name
     */
    public getDataAttribute(name: string) : any
    {
        return this.dataAttributes[name];
    }

    /**
     * Sets a data-* attribute
     * @param name
     * @param value
     */
    public setDataAttribute(name: string, value: any) : Component
    {
        // Check if name starts with data-
        if (name.toLowerCase().startsWith('data-')) {
            // remove data- if supplied
            name = name.substr(5);
        }

        this.dataAttributes[name] = value;
        return this;
    }

    /**
     * Returns if component is editable
     */
    public getContentEditable() : boolean
    {
        return this.contentEditable;
    }

    /**
     * An enumerated attribute indicating if the element should be editable by the user
     * @param contentEditable
     */
    public setContentEditable(contentEditable: boolean) : Component
    {
        this.contentEditable = contentEditable;
        return this;
    }

    /**
     *
     */
    public getDir() : enumDir
    {
        return this.dir;
    }

    /**
     *
     * @param dir
     */
    public setDir(dir: enumDir) : Component
    {
        this.dir = dir;
        return this;
    }

}

export { Component };