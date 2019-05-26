import { ComponentContainer } from '../componentcontainer.js';

/**
 * Row component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 */
class Row extends ComponentContainer {

    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    constructor(id) {

        super(id);

        this.template = '<div {attributes}>{child_items}</div>';
        this.componentClassName = 'Row';

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
            name : 'Row',
            description : 'Rows are wrappers for columns.',
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
            example : 'let row = new UX.Row(\'name\');',
        };


    }

    /**
     * Adds a column to the row
     * @param id
     * @param size
     * @returns {*}
     */
    addColumn(id, size) {
        let oItem = new UX.Column(id);
        oItem.setSize(size);
        this.addItem(oItem);
        return oItem;
    }


}


export { Row };