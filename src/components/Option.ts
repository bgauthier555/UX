import { ComponentContainer } from '../ComponentContainer';

/**
 * Div component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 */
class Option extends ComponentContainer {

    /**
     * Component constructor
     * @param {string} id Component unique _sId
     */
    constructor(id: string)
    {

        super(id);

        // noinspection HtmlUnknownAttribute
        this._sTemplate = '<option {attributes}>{child_items}</option>';
        this._sComponentClassName = 'Option';

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
            name : 'Option',
            description : 'HTML Option element',
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
                    slug : 'BeVVOV',
                    title : 'Option example',
                    height : 400,
                }
            ],
        };


    }


}

export { Option }