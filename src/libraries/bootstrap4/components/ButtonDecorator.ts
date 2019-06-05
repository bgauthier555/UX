import {Decorator} from "../../../Decorator";
import {Component} from "../../../Component";

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

    constructor()
    {
        super();
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

    public decorate(component: Component) : Component
    {

        component.addClass('btn');

        if (component.getButtonStyle()) {
            component.addClass(component.getButtonStyle());
        }

        if (component.getButtonSize()) {
            component.addClass(component.getButtonSize());
        }

        return component;
    }

    /**
     * Called after component has been initialized
     * @param component
     */
    public init(component: Component)
    {

    }

}

export {Bootstrap4_ButtonDecorator};