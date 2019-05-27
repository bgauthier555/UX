import { ComponentContainer } from '../componentcontainer.js';

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
class Div extends ComponentContainer {

    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    constructor(id) {

        super(id);

        this.template = '<div {attributes}>{child_items}</div>';
        this.componentClassName = 'Div';

    }

    /**
     * Returns component meta data
     * @returns {object}
     */
    static getMetaData() {

        /**
         * Static
         * Component meta data information
         * category is one of layout | content | component
         * @type {object}
         */
        return {
            name : 'Div',
            description : 'HTML Div element',
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
                    slug : 'NVzGRQ',
                    title : 'Div example',
                    height : 400,
                }
            ],
        };


    }


}

export { Div }