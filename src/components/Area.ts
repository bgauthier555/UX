import {FontAwesome} from "../FontAwesome";
import {Component} from "../Component";

/**
 * Area component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area
 */
class Area extends Component {

    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    constructor(sId: string)
    {

        super(sId);

        this.addClass('ux-area');

        // noinspection HtmlUnknownAttribute
        this._sTemplate = '<area {attributes} />';
        this._sComponentClassName = 'Area';

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
            name : 'Area',
            description : 'HTML Area element',
            category : 'content',
            icon : FontAwesome.FA_SQUARE_O,
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
            codepen : [
            ],
        };


    }


}

export { Area }