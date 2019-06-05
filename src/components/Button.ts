import {
    enumFormMethod,
    enumFormEncoding
} from "./Form";

export enum enumButtonStyle {
    /**
     * Primary color button
     * @type {string}
     */
    PRIMARY = 'btn-primary',
    /**
     * Secondary color button
     * @type {string}
     */
    SECONDARY = 'btn-secondary',
    /**
     * Success color button
     * @type {string}
     */
    SUCCESS = 'btn-success',
    /**
     * Danger color button
     * @type {string}
     */
    DANGER = 'btn-danger',
    /**
     * Warning color button
     * @type {string}
     */
    WARNING = 'btn-warning',
    /**
     * Info color button
     * @type {string}
     */
    INFO = 'btn-info',
    /**
     * Light color button
     * @type {string}
     */
    LIGHT = 'btn-light',
    /**
     * Dark color button
     * @type {string}
     */
    DARK = 'btn-dark',
    /**
     * Link button
     * @type {string}
     */
    LINK = 'btn-link',


    /**
     * Primary outline color button
     * @type {string}
     */
    OUTLINE_PRIMARY = 'btn-outline-primary',
    /**
     * Secondary outline color button
     * @type {string}
     */
    OUTLINE_SECONDARY = 'btn-outline-secondary',
    /**
     * Success outline color button
     * @type {string}
     */
    OUTLINE_SUCCESS = 'btn-outline-success',
    /**
     * Danger outline color button
     * @type {string}
     */
    OUTLINE_DANGER = 'btn-outline-danger',
    /**
     * Warning outline color button
     * @type {string}
     */
    OUTLINE_WARNING = 'btn-outline-warning',
    /**
     * Info outline color button
     * @type {string}
     */
    OUTLINE_INFO = 'btn-outline-info',
    /**
     * Light outline color button
     * @type {string}
     */
    OUTLINE_LIGHT = 'btn-outline-light',
    /**
     * Dark outline color button
     * @type {string}
     */
    OUTLINE_DARK = 'btn-outline-dark',
}

export enum enumButtonSize {
    /**
     * Large button
     * @type {string}
     */
    LARGE = 'btn-lg',

    /**
     * Small button
     * @type {string}
     */
    SMALL = 'btn-sm',

    /**
     * Block button
     * @type {string}
     */
    BLOCK = 'btn-block',

}

export enum enumButtonType {
    /**
     * Button type
     * @type {string}
     */
    BUTTON = 'button',
    /**
     * Submit type
     * @type {string}
     */
    SUBMIT = 'submit',
    /**
     * Reset type
     * @type {string}
     */
    RESET = 'reset',
}


import { ComponentContainer } from '../ComponentContainer';
import {FontAwesome} from "../FontAwesome";

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
    protected formEncodingType: enumFormEncoding = null;

    /**
     *
     */
    protected formMethod: enumFormMethod = null;

    /**
     *
     */
    protected buttonStyle: enumButtonStyle = null;

    /**
     *
     */
    protected buttonSize: enumButtonSize = null;

    /**
     * Component constructor
     * @param {string} id Component unique _sId
     */
    constructor(id: string)
    {

        super(id);

        // noinspection HtmlUnknownAttribute
        this._sTemplate = '<button {attributes}>{child_items}</button>';
        this._sComponentClassName = 'Button';

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
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name : 'Button',
            description : 'HTML Button element',
            category : 'component',
            icon : FontAwesome.FA_SQUARE_O,
            isContainer: false,
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
    public getFormEncodingType() : enumFormEncoding
    {
        return this.formEncodingType;
    }

    /**
     * Specifies how form-data should be encoded before sending it to a server. Only for type="submit"
     * @param encoding
     * @returns {Button}
     */
    public setFormEncodingType(encoding: enumFormEncoding) : Button
    {

        if (!encoding) {
            throw 'Parameter encoding _sIs required';
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
    public getFormMethod() : enumFormMethod
    {
        return this.formMethod;
    }

    /**
     * Sets form method
     * @param method
     * @returns {Button}
     */
    public setFormMethod(method: enumFormMethod) : Button
    {

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
     * Sets the form this button _sIs associated with
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
    public setButtonStyle(style: enumButtonStyle) : Button
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
    public setButtonSize(size: enumButtonSize) : Button
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

        //this.type = type;
        return this;
    }

    /**
     * Render button component
     * @returns {null}
     */
    public render() : string
    {

        /**
         * Check if component _sIs disabled
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

        return super.render();
    }


}

export { Button };