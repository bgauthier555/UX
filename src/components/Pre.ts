import { ComponentContainer } from '../ComponentContainer';
import {FontAwesome} from "../FontAwesome";

/**
 * Pre component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 */
class Pre extends ComponentContainer {

    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    constructor(id: string)
    {

        super(id);

        // noinspection HtmlUnknownAttribute
        this._sTemplate = '<pre {attributes}>{child_items}</pre>';
        this._sComponentClassName = 'Pre';

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
            name : 'Pre',
            description : '',
            category : 'content',
            icon : FontAwesome.FA_SQUARE_O,
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
        };


    }


}

export { Pre };