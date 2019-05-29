import { Component } from '../Component';

export enum enumAlertType {

    /**
     * Primary alert type, bootstrap 4
     * @type {string}
     */
    ALERT_PRIMARY = "alert-primary",
    /**
     * Secondary alert type, bootstrap 4
     * @type {string}
     */
    ALERT_SECONDARY = "alert-secondary",
    /**
     * Success alert type, bootstrap 4
     * @type {string}
     */
    ALERT_SUCCESS = "alert-success",
    /**
     * Danger alert type, bootstrap 4
     * @type {string}
     */
    ALERT_DANGER = "alert-danger",
    /**
     * Warning alert type, bootstrap 4
     * @type {string}
     */
    ALERT_WARNING = "alert-warning",
    /**
     * Info alert type, bootstrap 4
     * @type {string}
     */
    ALERT_INFO = "alert-info",
    /**
     * Light alert type, bootstrap 4
     * @type {string}
     */
    ALERT_LIGHT = "alert-light",
    /**
     * Dark alert type, bootstrap 4
     * @type {string}
     */
    ALERT_DARK = "alert-dark"


}



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
class Alert extends Component {

    /**
     * Title of the alert
     */
    protected title: string = null;

    /**
     * If we can dismiss the alert message
     */
    protected isDismissible: boolean = false;

    /**
     * Type of alert
     */
    protected alertType: enumAlertType = enumAlertType.ALERT_PRIMARY;

    /**
     * Alert component constructor
     * @param {string} id Unique ID for component
     */
    constructor(id: string) {

        super(id);

        // noinspection HtmlUnknownAttribute
        this.template = '<div {attributes}>{icon}{title}{label}</div>';
        this.componentClassName = 'Alert';

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
     * Returns alert title
     * @returns {string} The title of the alert component
     */
    public getTitle() : string
    {
        return this.title;
    }

    /**
     * Sets alert title, if title is not null, the title will b displayed within the alert component
     * @param {string} title The title of the alert component
     * @returns {Alert}
     */
    public setTitle(title: string) : Alert
    {
        this.title = title;
        return this;
    }

    /**
     * Returns alert type (warning, success, ...) for alert component
     * @returns {string}
     */
    public getAlertType() : enumAlertType
    {
        return this.alertType;
    }

    /**
     * Sets alert type (warning, success, ...) for alert component
     * @param alertType
     * @returns {Alert}
     */
    public setAlertType(alertType: enumAlertType)
    {
        this.alertType = alertType;
        return this;
    }

    /**
     * Closes an alert
     */
    public close() : void
    {
        $('#' + this.getId()).hide();
    }

    /**
     * This event fires immediately when the close instance method is called.
     * @param callback
     */
    public onAlertClose(callback: any) {
        // Unsupported in HTML
        return this;
    }

    /**
     * This event is fired when the alert has been closed (will wait for CSS transitions to complete).
     * @param callback
     */
    public onAlertClosed(callback: any) {
        // Unsupported in HTML
        return this;
    }

}

export { Alert };