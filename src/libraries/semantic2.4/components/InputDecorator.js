import {Decorator} from "../../../Decorator";

/**
 * Semantic 2.4 alert field decorator
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritDoc
 */
class Semantic24_InputDecorator extends Decorator {

    constructor() {
        super();
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
            name : 'InputDecorator',
            description : 'Semantic UI 2.4 input decorator.',
            library : 'Semantic_2_4',
            category : 'decorator',
            libraries : {
                Bootstrap_4: {
                    supported: false,
                    comments : '',
                },
                Html5: {
                    supported : false,
                    comments : '',
                }
            },
            example : '',
        };


    }

    decorate(component) {

        component.template = '<div class="ui form field">\n' +
            '  <label>{label}</label>\n' +
            '  <input {attributes}>\n' +
            '</div>';

        return component;
    }

    /**
     * Called after component has been initialized
     * @param component
     */
    init(component)
    {

    }

}

export {Semantic24_InputDecorator};