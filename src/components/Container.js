import { ComponentContainer } from '../componentcontainer.js';
import {Row} from "./Row";

/**
 * container component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 */
class Container extends ComponentContainer {

    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    constructor(id) {

        super(id);

        this.isFluid = false;

        this.template = '<div {attributes}>{child_items}</div>';
        this.componentClassName = 'Container';

    }

    /**
     *
     * @returns {boolean}
     */
    getIsFluid() {
        return this.isFluid;
    }

    /**
     *
     * @param isFluid
     * @returns {Container}
     */
    setIsFluid(isFluid) {
        this.isFluid = isFluid;
        return this;
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
            name : 'Container',
            description : 'Containers are the most basic layout element and are required when using our default grid system. Choose from a responsive, fixed-width container.',
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
            example : '',
            codepen : [
                {
                    user : 'bgauthier555',
                    slug : 'oRdJZr',
                    title : 'Container, Row and Column example',
                    height : 400,
                }
            ],
        };


    }

    /**
     * Add a row to the container
     * @param id
     * @returns {UX.Container}
     */
    addRow(id) {
        return this.addItem(new Row(id));
    }


}

export { Container }