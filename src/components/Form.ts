/**
 * application/x-www-form-urlencoded encoding
 * @type {string}
 */
export const ENCODING_URLENCODING = 'application/x-www-form-urlencoded';
/**
 * multipart/form-data encoding
 * @type {string}
 */
export const ENCODING_MULTIPART_FORM_DATA = 'multipart/form-data';
/**
 * text/plain encoding
 * @type {string}
 */
export const ENCODING_TEXT_PLAIN = 'text/plain';

/**
 * Form method get
 * @type {string}
 */
export const FORM_METHOD_GET = 'get';
/**
 * Form method post
 * @type {string}
 */
export const FORM_METHOD_POST = 'post';


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
     * @param {string} id Component unique id
     */
    constructor(id: string)
    {

        super(id);

        // noinspection HtmlUnknownAttribute
        this.template = '<form {attributes}>{child_items}</form>';
        this.componentClassName = 'Form';

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
            name : 'Form',
            description : 'HTML Form element',
            category : 'content',
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