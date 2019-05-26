import {Decorator} from "../../../Decorator";

/**
 * Bootstrap 4 input field decorator
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritDoc
 */
class Bootstrap4_InputDecorator extends Decorator {

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
            description : 'Bootstrap 4 input decorator.',
            library : 'Bootstrap_4',
            category : 'decorator',
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
        };


    }

    decorate(component) {

        window.UX.log('Decorating ' + component.getId());

        component.addClass('form-control');

        component.template = '<div class="form-group">\n' +
            '    <label for="{id}">{label}</label>\n' +
            '    <input {attributes}>\n' +
            '  </div>';

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

export {Bootstrap4_InputDecorator};