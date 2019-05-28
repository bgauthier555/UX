import {
    ENCODING_MULTIPART_FORM_DATA,
    ENCODING_TEXT_PLAIN,
    ENCODING_URLENCODING,
    FORM_METHOD_GET,
    FORM_METHOD_POST
} from "./Form";

/**
 * Primary color button
 * @type {string}
 */
export const BUTTON_PRIMARY = 'btn-primary';
/**
 * Secondary color button
 * @type {string}
 */
export const BUTTON_SECONDARY = 'btn-secondary';
/**
 * Success color button
 * @type {string}
 */
export const BUTTON_SUCCESS = 'btn-success';
/**
 * Danger color button
 * @type {string}
 */
export const BUTTON_DANGER = 'btn-danger';
/**
 * Warning color button
 * @type {string}
 */
export const BUTTON_WARNING = 'btn-warning';
/**
 * Info color button
 * @type {string}
 */
export const BUTTON_INFO = 'btn-info';
/**
 * Light color button
 * @type {string}
 */
export const BUTTON_LIGHT = 'btn-light';
/**
 * Dark color button
 * @type {string}
 */
export const BUTTON_DARK = 'btn-dark';
/**
 * Link button
 * @type {string}
 */
export const BUTTON_LINK = 'btn-link';


/**
 * Primary outline color button
 * @type {string}
 */
export const BUTTON_OUTLINE_PRIMARY = 'btn-outline-primary';
/**
 * Secondary outline color button
 * @type {string}
 */
export const BUTTON_OUTLINE_SECONDARY = 'btn-outline-secondary';
/**
 * Success outline color button
 * @type {string}
 */
export const BUTTON_OUTLINE_SUCCESS = 'btn-outline-success';
/**
 * Danger outline color button
 * @type {string}
 */
export const BUTTON_OUTLINE_DANGER = 'btn-outline-danger';
/**
 * Warning outline color button
 * @type {string}
 */
export const BUTTON_OUTLINE_WARNING = 'btn-outline-warning';
/**
 * Info outline color button
 * @type {string}
 */
export const BUTTON_OUTLINE_INFO = 'btn-outline-info';
/**
 * Light outline color button
 * @type {string}
 */
export const BUTTON_OUTLINE_LIGHT = 'btn-outline-light';
/**
 * Dark outline color button
 * @type {string}
 */
export const BUTTON_OUTLINE_DARK = 'btn-outline-dark';

/**
 * Large button
 * @type {string}
 */
export const BUTTON_LARGE = 'btn-lg';

/**
 * Small button
 * @type {string}
 */
export const BUTTON_SMALL = 'btn-sm';

/**
 * Block button
 * @type {string}
 */
export const BUTTON_BLOCK = 'btn-block';

/**
 * Button type
 * @type {string}
 */
export const BUTTONTYPE_BUTTON = 'button';
/**
 * Submit type
 * @type {string}
 */
export const BUTTONTYPE_SUBMIT = 'submit';
/**
 * Reset type
 * @type {string}
 */
export const BUTTONTYPE_RESET = 'reset';



import { ComponentContainer } from '../ComponentContainer';

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
class Button extends ComponentContainer {

    /**
     *
     */
    protected autofocus: boolean = false;

    /**
     *
     */
    protected form: string = null;

    /**
     *
     */
    protected formEncodingType: string = null;

    /**
     *
     */
    protected formMethod: string = null;

    /**
     *
     */
    protected buttonStyle: string = null;

    /**
     *
     */
    protected buttonSize: string = null;

    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    constructor(id: string)
    {

        super(id);

        this.type = BUTTONTYPE_BUTTON;

        // noinspection HtmlUnknownAttribute
        this.template = '<button {attributes}>{child_items}</button>';
        this.componentClassName = 'Button';

        /**
         * List of allowed button types
         */
        this.allowedButtonTypes = [
            BUTTONTYPE_BUTTON,
            BUTTONTYPE_RESET,
            BUTTONTYPE_SUBMIT
        ];

        this.allowedFormEncodingTypes = [
            ENCODING_MULTIPART_FORM_DATA,
            ENCODING_TEXT_PLAIN,
            ENCODING_URLENCODING
        ];

        this.allowedFormMethods = [
            FORM_METHOD_GET,
            FORM_METHOD_POST
        ];

    }

    /**
     * Returns component meta data
     * @returns {object}
     */
    public static getMetaData() : any
    {

        /**
         * Static
         * Component meta data information
         * category is one of layout | content | component
         * @type {object}
         */
        return {
            name : 'Button',
            description : 'HTML Button element',
            category : 'component',
            libraries : {
                Bootstrap_4: {
                    supported: true,
                    comments : '',
                },
                Html5: {
                    supported : true,
                    comments : '',
                }
            },
            example : '',
        };


    }

    /**
     * Returns form encoding type
     * @returns {null}
     */
    public getFormEncodingType() : string
    {
        return this.formEncodingType;
    }

    /**
     * Specifies how form-data should be encoded before sending it to a server. Only for type="submit"
     * @param encoding
     * @returns {Button}
     */
    public setFormEncodingType(encoding: string) : Button
    {

        encoding = encoding.toLowerCase().trim();

        if (!encoding) {
            throw 'Parameter encoding is required';
        }

        if (this.allowedFormEncodingTypes.indexOf(encoding) == -1) {
            throw 'Invalid form encoding type ' + encoding + ' allowed encoding are : ' + this.allowedFormEncodingTypes.join(', ');
        }

        this.formEncodingType = encoding;
        return this;
    }

    /**
     * Returns form method
     * @returns {null}
     */
    public getFormMethod() : string
    {
        return this.formMethod;
    }

    /**
     * Sets form method
     * @param method
     * @returns {Button}
     */
    public setFormMethod(method: string) : Button
    {

        method = method.toLowerCase().trim();

        if (!method) {
            throw 'Parameter method is required';
        }


        if (this.allowedFormMethods.indexOf(method) == -1) {
            throw 'Invalid form method ' + method + ' allowed methods are : ' + this.allowedFormMethods.join(', ');
        }

        this.formMethod = method;
        return this;
    }

    /**
     * Returns autofocus
     * @returns {boolean}
     */
    public getAutoFocus() : boolean
    {
        return this.autofocus;
    }

    /**
     * Sets if the button should automatically get focus on page load
     * @param autoFocus
     * @returns {Button}
     */
    public setAutoFocus(autoFocus: boolean) : Button
    {
        this.autofocus = autoFocus;
        return this;
    }

    public getForm() : string
    {
        return this.form;
    }

    /**
     * Sets the form this button is associated with
     * @param form
     */
    public setForm(form: string) : Button
    {
       this.form = form;
       return this;
    }

    /**
     *
     * @returns {null}
     */
    public getButtonStyle() : string
    {
        return this.buttonStyle;
    }

    /**
     *
     * @param style
     * @returns {Button}
     */
    public setButtonStyle(style: string) : Button
    {
        this.buttonStyle = style;
        return this;
    }

    /**
     *
     * @returns {null}
     */
    public getButtonSize() {
        return this.buttonSize;
    }

    /**
     *
     * @param size
     * @returns {Button}
     */
    public setButtonSize(size: string) : Button
    {
        this.buttonSize = size;
        return this;
    }

    /**
     * Get button type button|submit|reset
     * @returns {string}
     */
    public getType() : string
    {
        return this.type;
    }

    /**
     * Sets button type button|submit|reset
     * @param type
     * @returns {Button}
     */
    public setType(type: string) : Button
    {

        type = type.toLowerCase();
        if (this.allowedButtonTypes.indexOf(type) == -1) {
            throw 'Invalid button type ' + type;
        }

        this.type = type;
        return this;
    }

    /**
     * Render button component
     * @returns {null}
     */
    public render() : string
    {

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

        return super.render();
    }


}

export { Button };