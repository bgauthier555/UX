import { ComponentContainer } from '../ComponentContainer';
import {FontAwesome} from "../FontAwesome";
/**
 * Li component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 */
class Li extends ComponentContainer {

    /**
     * Component constructor
     * @param {string} id Component unique _sId
     */
    constructor(id: string)
    {

        super(id);

        // noinspection HtmlUnknownAttribute
        this._sTemplate = '<li {attributes}>{child_items}</li>';
        this._sComponentClassName = 'Li';

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
            name : 'Li',
            description : 'HTML list item',
            category : 'content',
            icon: FontAwesome.FA_LIST_ALT,
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
            example : '@see Ol example',
        };


    }


}


export { Li };