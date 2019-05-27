import { ComponentContainer } from '../componentcontainer.js';

/**
 * Heading component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 */
class Heading extends ComponentContainer {

    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    constructor(id) {

        super(id);

        this.level = 1;

        this.template = '<h{level} {attributes}>{child_items}</h{level}>';
        this.componentClassName = 'Heading';

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
            name : 'Heading',
            description : 'Heading element h1 to h6',
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
                    slug : 'arKvpy',
                    title : 'Heading example',
                    height : 400,
                }
            ],
        };


    }

    /**
     * Get heading level (1-6)
     * @returns {number}
     */
    getLevel() {
        return this.level;
    }

    /**
     * Set heading level (1-6)
     * @param level
     * @returns {UX.Heading}
     */
    setLevel(level) {
        this.level = level;
        return this;
    }

}

export { Heading };