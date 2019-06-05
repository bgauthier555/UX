import { ComponentContainer } from '../ComponentContainer';
import {FontAwesome} from "../FontAwesome";

/**
 * BDI component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi
 */
class BDI extends ComponentContainer {

    /**
     * Component constructor
     * @param {string} id Component unique _sId
     */
    constructor(id: string)
    {

        super(id);

        this.addClass('ux-bdi');

        // noinspection HtmlUnknownAttribute
        this._sTemplate = '<bdi {attributes}>{child_items}</bdi>';
        this._sComponentClassName = 'BDI';

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
            name : 'BDI',
            description : 'HTML BDI element',
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

export { BDI }