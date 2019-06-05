/**
 * Form encoding
 */
import {FontAwesome} from "../FontAwesome";

export enum enumFormEncoding {

    /**
     * application/x-www-form-urlencoded encoding
     * @type {string}
     */
    URLENCODING = 'application/x-www-form-urlencoded',
    /**
     * multipart/form-data encoding
     * @type {string}
     */
    MULTIPART_FORM_DATA = 'multipart/form-data',
    /**
     * text/plain encoding
     * @type {string}
     */
    TEXT_PLAIN = 'text/plain'

}

/**
 * Form methods
 */
export enum enumFormMethod {
    /**
     * Form method get
     * @type {string}
     */
    GET = 'get',
    /**
     * Form method post
     * @type {string}
     */
    POST = 'post'
}

import { ComponentContainer } from '../ComponentContainer';

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
class Form extends ComponentContainer {

    /**
     * Component constructor
     * @param {string} id Component unique _sId
     */
    constructor(id: string)
    {

        super(id);

        // noinspection HtmlUnknownAttribute
        this._sTemplate = '<form {attributes}>{child_items}</form>';
        this._sComponentClassName = 'Form';

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
            name : 'Form',
            description : 'HTML Form element',
            category : 'content',
            icon: FontAwesome.FA_FILE_INVOICE,
            isContainer: true,
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
            codepen : [
                {
                    user : 'bgauthier555',
                    slug : 'qGKKVZ',
                    title : 'Form example',
                    height : 400,
                }
            ],
        };


    }



}

export { Form }