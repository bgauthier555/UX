import {Decorator} from "../../../Decorator";

/**
 * Bootstrap 4 Column decorator
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritDoc
 */
class Bootstrap4_ButtonDecorator extends Decorator {

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
            name : 'ButtonDecorator',
            description : 'Bootstrap 4 button decorator.',
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

        component.addClass('btn');

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

export {Bootstrap4_ButtonDecorator};