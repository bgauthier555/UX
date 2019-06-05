import { ComponentContainer } from '../ComponentContainer';
import {FontAwesome} from "../FontAwesome";

/**
 * B component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b
 */
class B extends ComponentContainer {

    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    constructor(id: string)
    {

        super(id);

        this.addClass('ux-b');

        // noinspection HtmlUnknownAttribute
        this._sTemplate = '<b {attributes}>{child_items}</b>';
        this._sComponentClassName = 'B';

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
            name : 'B',
            description : 'HTML B element',
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

export { B }