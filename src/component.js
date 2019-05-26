/**
 * Base class for javascript UI components
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 */
class Component {


    /**
     * Component constructor
     * @param id Component unique ID
     */
    constructor(id)
    {

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
    init()
    {

        if (this.isInitialized) {
            return;
        }

        window.UX.log('Component initialized ' + this.getId());

        /**
         * Render HTML code and insert into page
         */
        if ( $('#' + this.getId()).length > 0 ) {
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
            let oDecorator = new window.UX.libraries[window.UX.activeLibrary][this.componentClassName + 'Decorator']();
            oDecorator.init(this);
        }


        this.isInitialized = true;

    }


    /**
     * Returns styles object
     * @returns {object}
     */
    getStyles() {
        return this.styles;
    }

    /**
     * Adds a style to the component CSS
     * @param {string} sStyle
     */
    addStyle(sStyle) {
        let aStyles = sStyle.split(';');
        for(let x in aStyles) {
            if (aStyles[x] != '') {
                let aTokens = aStyles[x].split(':');
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
    css(sStyle) {
        return this.addStyle(sStyle);
    }

    /**
     * Returns style list
     * @returns {string|string}
     */
    getStyleList() {
        let sStyles = '';
        for(let x in this.styles) {
            sStyles = sStyles + x + ':' + this.styles[x] + ';';
        }
        return sStyles;
    }

    /**
     *
     * @returns {null}
     */
    getStore()
    {
        return this.store;
    }

    /**
     *
     * @param store
     * @returns {UX.Component}
     */
    setStore(store)
    {
        this.store = store;
        return this;
    }

    /**
     * Returns if component is enabled or not
     * @returns {boolean}
     */
    getEnabled()
    {
        return this.isEnabled;
    }

    /**
     * Sets if component is enabled or not
     * @param enabled
     * @returns {UX.Component}
     */
    setEnabled(enabled)
    {
        this.isEnabled = enabled;
        return this;
    }

    /**
     *
     * @returns {string}
     */
    generateRandomId()
    {
        return 'UX' + Math.random().toString(36).substring(2, 6) + Math.random().toString(36).substring(2, 6);
    }


    /**
     * Returns component ID
     * @returns {*}
     */
    getId()
    {
        return this.id;
    }

    /**
     * Sets component ID
     * @param id
     */
    setId(id)
    {
        this.id = id;
    }

    /**
     * Returns component label
     * @returns {null}
     */
    getLabel()
    {
        return this.label;
    }

    /**
     * Sets component label
     * @param label
     * @returns {UX.Component}
     */
    setLabel(label)
    {
        this.label = label;
        return this;
    }

    /**
     * Returns component html template
     * @returns {null}
     */
    getTemplate()
    {
        return this.template;
    }

    /**
     * Sets component template
     * @param template
     * @returns {UX.Component}
     */
    setTemplate(template)
    {
        this.template = template;
        return this;
    }

    /**
     * Set component attribute
     * @param sAttrName
     * @param mValue
     * @returns {UX.Component}
     */
    setAttribute(sAttrName, mValue) {
        this.attributes[sAttrName] = mValue;
        return this;
    }

    /**
     * Alias for setAttribute
     * @param sAttrName
     * @param mValue
     * @returns {UX.Component}
     */
    attr(sAttrName, mValue) {
        return this.setAttribute(sAttrName,mValue);
    }

    /**
     * Returns array of attributes
     * @returns {*}
     */
    getAttributes()
    {
        return this.attributes;
    }

    /**
     * Add a class to component, multiple classes must be separated by spaces
     * @param {string} sClassName The CSS classes to add to the component
     */
    addClass(sClassName) {
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
    getClasses()
    {
        return this.classes;
    }

    /**
     * Returns component value
     * @returns {null|*}
     */
    getValue()
    {
        this.value = $('#' + this.getId()).val();
        return this.value;
    }

    /**
     * Sets component value
     * @param mValue
     * @returns {UX.Component}
     */
    setValue(mValue)
    {

        this.value = mValue;

        $('#' + this.getId()).val(this.value);

        return this;
    }

    /**
     * Enables component
     * @returns {UX.Component}
     */
    enable()
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
     * @returns {UX.Component}
     */
    disable()
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
    getPlaceholder()
    {
        return this.placeholder;
    }

    /**
     * Sets placeholder text
     * @param placeholder
     * @returns {UX.Component}
     */
    setPlaceholder(placeholder)
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
    getClassList()
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
    getAttributeList()
    {

        let sAttributes = '';

        for(let x in this.attributes) {
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
    render() {

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
            let oDecorator = new window.UX.libraries[window.UX.activeLibrary][this.componentClassName + 'Decorator']();
            oDecorator.decorate(this);
            window.UX.log('Found decorator for component ' + window.UX.activeLibrary + ' ' + this.componentClassName);
        } else {
            window.UX.log('No decorator for component ' + window.UX.activeLibrary + ' ' + this.componentClassName);
        }

        /**
         * Load template, set attributes, replace
         */
        let sComponentHTML = this.template;

        this.setAttribute('id',this.id);
        this.setAttribute('name',this.name);

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

}

export { Component };