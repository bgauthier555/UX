import { ComponentContainer } from '../ComponentContainer';
import {FontAwesome} from "../FontAwesome";

/**
 * ASide component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside
 */
class ASide extends ComponentContainer {

    /**
     * Component constructor
     * @param {string} id Component unique
     */
    constructor(sId: string)
    {

        super(sId);

        this.addClass('ux-aside');

        // noinspection HtmlUnknownAttribute
        this._sTemplate = '<aside {attributes}>{child_items}</aside>';
        this._sComponentClassName = 'ASide';

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
            name : 'ASide',
            description : 'HTML ASide element',
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
            codepen : [
            ],
        };


    }


}

export { ASide }