/**
 * Primary alert type, bootstrap 4
 * @type {string}
 */
export const ALERT_PRIMARY = "alert-primary";
/**
 * Secondary alert type, bootstrap 4
 * @type {string}
 */
export const ALERT_SECONDARY = "alert-secondary";
/**
 * Success alert type, bootstrap 4
 * @type {string}
 */
export const ALERT_SUCCESS = "alert-success";
/**
 * Danger alert type, bootstrap 4
 * @type {string}
 */
export const ALERT_DANGER = "alert-danger";
/**
 * Warning alert type, bootstrap 4
 * @type {string}
 */
export const ALERT_WARNING = "alert-warning";
/**
 * Info alert type, bootstrap 4
 * @type {string}
 */
export const ALERT_INFO = "alert-info";
/**
 * Light alert type, bootstrap 4
 * @type {string}
 */
export const ALERT_LIGHT = "alert-light";
/**
 * Dark alert type, bootstrap 4
 * @type {string}
 */
export const ALERT_DARK = "alert-dark";

import { Component } from '../component.js';

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
     * Alert component constructor
     * @param {string} id Unique ID for component
     */
    constructor(id) {

        super(id);

        this.title = null;
        this.isDismissible = false;
        this.template = '<div {attributes}>{icon}{title}{label}</div>';
        this.componentClassName = 'Alert';
        this.alertType = ALERT_PRIMARY;

    }

    /**
     * Returns component meta data
     * @returns {object}
     */
    static getMetaData() {

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
            example : 'let container = new UX.Container(\'name\');',
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
    getIsDismissible()
    {
        return this.isDismissible;
    }

    /**
     * Returns if the alert component can be dismissed or not
     * @param {boolean} isDismissible If the alert can be dismissed or not
     * @returns {UX.Alert}
     */
    setIsDismissable(isDismissible)
    {
        this.isDismissible = isDismissible;
        return this;
    }

    /**
     * Returns alert title
     * @returns {string} The title of the alert component
     */
    getTitle()
    {
        return this.title;
    }

    /**
     * Sets alert title, if title is not null, the title will b displayed within the alert component
     * @param {string} title The title of the alert component
     * @returns {UX.Alert}
     */
    setTitle(title)
    {
        this.title = title;
        return this;
    }

    /**
     * Returns alert type (warning, success, ...) for alert component
     * @returns {string}
     */
    getAlertType()
    {
        return this.alertType;
    }

    /**
     * Sets alert type (warning, success, ...) for alert component
     * @param alertType
     * @returns {UX.Alert}
     */
    setAlertType(alertType)
    {
        this.alertType = alertType;
        return this;
    }

    /**
     * Closes an alert
     */
    close() {
        $('#' + this.getId()).hide();
    }




}

export { Alert };