import {Decorator} from "../../../Decorator";
import {Component} from "../../../Component";

/**
 * Bootstrap 4 container component decorator, decorator will change component properties based on library requirements
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 */
class Bootstrap4_ContainerDecorator extends Decorator {

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
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name : 'ContainerDecorator',
            description : 'Bootstrap 4 container decorator.',
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

    /**
     * Decorate the component, change it's properties
     * Bootstrap4, add alert class and alert type class
     * Add attribute role=alert
     *
     * @param {UX.Component} component The component to decorate
     * @returns {UX.Component}
     */
    public decorate(component: Component) : Component
    {

        component.addClass('alert');

        if (component.getIsFluid()) {
            component.addClass('container-fluid');
        } else {
            component.addClass('container');
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

export {Bootstrap4_ContainerDecorator};