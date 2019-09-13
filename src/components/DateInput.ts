import {Component} from "../Component";
import {FontAwesome} from "../FontAwesome";

/**
 * DateInput component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 */
class DateInput extends Component {

    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    constructor(sId: string)
    {

        super(sId);

        // noinspection HtmlUnknownAttribute
        this._sTemplate = '<div {attributes}></div>';
        this._sComponentClassName = 'DateInput';

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
            name : 'DateInput',
            description : 'HTML date element',
            category : 'content',
            icon : FontAwesome.FA_CALENDAR,
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
            codepen : [
                {
                    user : 'bgauthier555',
                    slug : 'PvaamJ',
                    title : 'Date example',
                    height : 400,
                }
            ],
        };


    }


}

export { DateInput };
