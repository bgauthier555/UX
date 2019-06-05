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
class Semantic24_TextAreaDecorator extends Decorator {

    /**
     *
     */
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
            name : 'TextAreaDecorator',
            description : 'Semantic UI 2.4 text area decorator.',
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

    /**
     *
     * @param component
     */
    public decorate(component: Component) {

        component.template = '<div class="ui form field">\n' +
            '  <_sLabel>{_sLabel}</_sLabel>\n' +
            '  <textarea {attributes}>{value}</textarea>\n' +
            '</div>';

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

export { Semantic24_TextAreaDecorator };