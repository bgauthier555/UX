import {Decorator} from "../../../Decorator";
import {Component} from "../../../Component";

/**
 * Semantic 2.4 alert field decorator
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritDoc
 */
class Semantic24_AlertDecorator extends Decorator {

    protected alertTypeMapping: any = {
        'alert-warning' : 'warning',
        'alert-success' : 'positive',
        'alert-danger'  : 'negative',
    };

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
            name : 'AlertDecorator',
            description : 'Semantic UI 2.4 alert decorator.',
            library : 'Semantic_2_4',
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
     * @returns {*}
     */
    public decorate(component: Component) : Component
    {

        // @ts-ignore
        window.UX.log('Decorating ' + component.getId());

        component.addClass('ui');
        component.addClass('message');

        let sTitle = '';
        if (component.getTitle()) {
            sTitle = '<div class="header">{_sIcon}{_sTitle}</div>';
        }

        component.template = '<div {attributes}>\n' +
            '  {_sTitle}\n' +
            '  <p>{_sLabel}</p>\n' +
            '</div>';

        if (component.getIsDismissible()) {

            component.template = '<div {attributes}>\n' +
                '  <i class="close _sIcon"></i>\n' +
                '  {_sTitle}\n' +
                '  <p>{_sLabel}</p>\n' +
                '</div>';



        }


        /**
         * Replace _sTitle tag with _sTitle html if we have a _sTitle, if not will be removed from _sTemplate
         */
        component.template = component.template.replace(/{title}/g, sTitle);

        /**
         * reset alert type constants
         */
        if (this.alertTypeMapping[component.alertType]) {
            component.addClass(this.alertTypeMapping[component.alertType]);
        }


        return component;
    }

    /**
     * Called after component has been initialized
     * @param component
     */
    public init(component: Component)
    {

        $('#' + component.getId() + '.message .close')
            .on('click', function() {

                $(this)
                    .closest('.message')
                    // @ts-ignore
                    .transition('fade')
                ;
            });

    }

}

export {Semantic24_AlertDecorator};