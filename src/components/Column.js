import { ComponentContainer } from '../componentcontainer.js';

/**
 * Column component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 */
class Column extends ComponentContainer {

    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    constructor(id) {

        super(id);
        this.size = null;

        this.template = '<div {attributes}>{child_items}</div>';
        this.componentClassName = 'Column';

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
            name : 'Column',
            description : 'Column classes indicate the number of columns you’d like to use out of the possible 12 per row.',
            category : 'layout',
            libraries : {
                Bootstrap_4: {
                    supported: true,
                    comments : '',
                },
                Html5: {
                    supported : false,
                    comments : '',
                }
            },
            example : 'let col = new UX.Column(\'name\');',
        };


    }

    /**
     *
     * @returns {null}
     */
    getSize() {
        return this.size;
    }

    /**
     *
     * @param size
     * @returns {Column}
     */
    setSize(size) {
        this.size = size;
        return this;
    }


}

export { Column };
