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
class Semantic24_AlertDecorator extends Decorator {

    /**
     *
     */
    constructor() {
        super();

        this.alertTypeMapping = {
            'alert-warning' : 'warning',
            'alert-success' : 'positive',
            'alert-danger'  : 'negative',
        };
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
    decorate(component) {

        window.UX.log('Decorating ' + component.getId());

        component.addClass('ui');
        component.addClass('message');

        let sTitle = '';
        if (component.getTitle()) {
            sTitle = '<div class="header">{icon}{title}</div>';
        }

        component.template = '<div {attributes}>\n' +
            '  {title}\n' +
            '  <p>{label}</p>\n' +
            '</div>';

        if (component.getIsDismissible()) {

            component.template = '<div {attributes}>\n' +
                '  <i class="close icon"></i>\n' +
                '  {title}\n' +
                '  <p>{label}</p>\n' +
                '</div>';



        }


        /**
         * Replace title tag with title html if we have a title, if not will be removed from template
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
    init(component)
    {

        $('#' + component.getId() + '.message .close')
            .on('click', function() {
                $(this)
                    .closest('.message')
                    .transition('fade')
                ;
            });

    }

}

export {Semantic24_AlertDecorator};