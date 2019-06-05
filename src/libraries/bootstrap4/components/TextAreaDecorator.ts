import {Decorator} from "../../../Decorator";
import {Component} from "../../../Component";

/**
 * Bootstrap 4 TextArea field decorator
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritDoc
 */
class Bootstrap4_TextAreaDecorator extends Decorator {

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
            name : 'TextAreaDecorator',
            description : 'Bootstrap 4 textarea decorator.',
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
     *
     * @param component
     */
    public decorate(component: Component) : Component
    {

        component.addClass('form-control');

        component.template = '<div class="form-group">\n' +
            '    <label for="{id}">{label}</label>\n' +
            '    <textarea {attributes}>{value}</textarea>\n' +
            '  </div>';

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

export {Bootstrap4_TextAreaDecorator};