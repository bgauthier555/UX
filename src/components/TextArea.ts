import { Component } from '../Component';
import {FontAwesome} from "../FontAwesome";

/**
 * TextArea control
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 */
class TextArea extends Component {

    /**
     *
     * @param id
     */
    constructor(id: string)
    {

        super(id);

        // noinspection HtmlUnknownAttribute
        this._sTemplate = '<textarea {attributes}>\n' +
            '{value}' +
            '</textarea>';
        this._sComponentClassName = 'TextArea';


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
            name : 'TextArea',
            description : '',
            category : 'component',
            icon : FontAwesome.FA_EDIT,
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


}


export { TextArea };