import { ComponentContainer } from '../ComponentContainer';
import {FontAwesome} from "../FontAwesome";

/**
 * Address component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address
 */
class Address extends ComponentContainer {

    /**
     * Component constructor
     * @param {string} id Component unique _sId
     */
    constructor(id: string)
    {

        super(id);

        this.addClass('ux-address');

        // noinspection HtmlUnknownAttribute
        this._sTemplate = '<address {attributes}>{child_items}</address>';
        this._sComponentClassName = 'Address';

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
            name : 'Address',
            description : 'HTML Address element',
            category : 'content',
            icon : FontAwesome.FA_HOME,
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

export { Address }