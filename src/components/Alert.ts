import { Component } from '../Component';
import {ComponentContainer} from "../ComponentContainer";
import {FontAwesome} from "../FontAwesome";

/**
 * List of alert styles
 */
export enum enumAlertStyle {

    /**
     * Primary alert type, bootstrap 4
     * @type {string}
     */
    PRIMARY = "alert-primary",
    /**
     * Secondary alert type, bootstrap 4
     * @type {string}
     */
    SECONDARY = "alert-secondary",
    /**
     * Success alert type, bootstrap 4
     * @type {string}
     */
    SUCCESS = "alert-success",
    /**
     * Danger alert type, bootstrap 4
     * @type {string}
     */
    DANGER = "alert-danger",
    /**
     * Warning alert type, bootstrap 4
     * @type {string}
     */
    WARNING = "alert-warning",
    /**
     * Info alert type, bootstrap 4
     * @type {string}
     */
    INFO = "alert-info",
    /**
     * Light alert type, bootstrap 4
     * @type {string}
     */
    LIGHT = "alert-light",
    /**
     * Dark alert type, bootstrap 4
     * @type {string}
     */
    DARK = "alert-dark"


}



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
class Alert extends ComponentContainer {

    /**
     * Alert icon
     */
    protected _sIcon: string = null;

    /**
     * Text to display in the alert
     */
    protected _sText: string = null;

    /**
     * Title of the alert
     */
    protected _sAlertTitle: string = null;

    /**
     * If we can dismiss the alert message
     */
    protected isDismissible: boolean = false;

    /**
     * Type of alert
     */
    protected _eAlertStyle: enumAlertStyle = enumAlertStyle.PRIMARY;

    /**-
     * EVENTS
     */

    /**
     * This event fires immediately when the close instance method is called.
     */
    public onAlertClose: any = null;

    /**
     * This event is fired when the alert has been closed (will wait for CSS transitions to complete).
     */
    public onAlertClosed: any = null;




    /**
     * Alert component constructor
     * @param {string} id Unique ID for component
     */
    constructor(id: string) {

        super(id);

        // noinspection HtmlUnknownAttribute
        this._sTemplate = '<div {attributes}>{icon}{alertTitle}{text}</div>';
        this._sComponentClassName = 'Alert';

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
            name : 'Alert',
            description : 'Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.',
            category : 'component',
            icon : FontAwesome.FA_EXCLAMATION_CIRCLE,
            isContainer: true,
            libraries : {
                Bootstrap_4: {
                    supported: true,
                    comments : '',
                },
                Html5: {
                    supported : false,
                    comments : '',
                }
            },
            example : '',
            codepen : [
                {
                    user : 'bgauthier555',
                    slug : 'zQjaeK',
                    title : 'Alert component example',
                    height : 500,
                }
            ],
        };


    }

    /**
     *
     */
    public getText() : string
    {
        return this._sText;
    }

    /**
     *
     * @param sText
     */
    public setText(sText: string) : Component
    {
        this._sText = sText;
        return this;
    }

    /**
     *
     */
    public getIcon(): string
    {
        return this._sIcon;
    }

    /**
     *
     * @param sIcon
     */
    public setIcon(sIcon: string) : Component
    {
        this._sIcon = sIcon;
        return this;
    }

    /**
     * Returns if we can dismiss the alert component
     * @returns {boolean}
     */
    public getIsDismissible() : boolean
    {
        return this.isDismissible;
    }

    /**
     * Returns if the alert component can be dismissed or not
     * @param {boolean} isDismissible If the alert can be dismissed or not
     * @returns {Alert}
     */
    public setIsDismissable(isDismissible: boolean) : Alert
    {
        this.isDismissible = isDismissible;
        return this;
    }

    /**
     * Returns alert _sTitle
     * @returns {string} The title of the alert component
     */
    public getAlertTitle() : string
    {
        return this._sTitle;
    }

    /**
     * Sets alert _sTitle, if _sTitle is not _sOnProgress, the _sTitle will b displayed within the alert component
     * @param {string} title The _sTitle of the alert component
     * @returns {Alert}
     */
    public setAlertTitle(title: string) : Alert
    {
        this._sAlertTitle = title;
        return this;
    }

    /**
     * Returns alert type (warning, success, ...) for alert component
     * @returns {string}
     */
    public getAlertStyle() : enumAlertStyle
    {
        return this._eAlertStyle;
    }

    /**
     * Sets alert type (warning, success, ...) for alert component
     * @param alertType
     * @returns {Alert}
     */
    public setAlertStyle(alertType: enumAlertStyle)
    {
        this._eAlertStyle = alertType;
        return this;
    }

    /**
     * Closes an alert
     */
    public close() : void
    {
        $('#' + this.getId()).hide();
    }


}

export { Alert };