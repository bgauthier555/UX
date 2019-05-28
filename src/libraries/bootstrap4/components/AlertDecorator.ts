import {Decorator} from "../../../Decorator";
import {Component} from "../../../Component";

/**
 * Bootstrap 4 alert component decorator, decorator will change component properties based on library requirements
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 */
class Bootstrap4_AlertDecorator extends Decorator {

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
            name : 'AlertDecorator',
            description : 'Bootstrap 4 alert decorator.',
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
        component.addClass(component.alertType);
        component.setAttribute('role', 'alert');

        let sTitle = '';
        if (component.getTitle()) {
            sTitle = '<h4 class="alert-heading">{icon}{title}</h4>';
        }

        if (component.getIsDismissible()) {
            component.addClass('alert-dismissible');
            component.template = '<div {attributes}>{icon}{title}{label}' +
                ' <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n' +
                '    <span aria-hidden="true">&times;</span>\n' +
                ' </button>' +
                '</div>';
        }

        /**
         * Replace title tag with title html if we have a title, if not will be removed from template
         */
        component.template = component.template.replace(/{title}/g, sTitle);

        /**
         * Override close method of alert
         */
        component.close = function() {
            // @ts-ignore
            $('#' + this.getId()).alert('close');
        };

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

export {Bootstrap4_AlertDecorator};