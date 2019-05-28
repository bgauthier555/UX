import { ComponentContainer } from '../ComponentContainer';

/**
 * Anchor component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 */
class Anchor extends ComponentContainer {

    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    constructor(id: string)
    {
        super(id);

        // noinspection HtmlUnknownAttribute
        this.template = '<a {attributes}>{child_items}</a>';
        this.componentClassName = 'Anchor';

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
            name : 'Anchor',
            description : 'HTML anchor element',
            category : 'content',
            libraries : {
                Bootstrap_4: {
                    supported: true,
                    comments : '',
                },
                Html5: {
                    supported : true,
                    comments : '',
                }
            },
            example : '',
            codepen : [
                {
                    user : 'bgauthier555',
                    slug : 'mYKJNK',
                    title : 'Alert example',
                    height : 400,
                }
            ],
        };


    }

    /**
     * Sets anchor href
     * @param href
     * @returns {Anchor}
     */
    public setHref(href: string) : Anchor
    {
        this.setAttribute('href', href);
        return this;
    }

    /**
     * Sets anchor target
     * @param target _blank|_self|_parent|_top|framename
     * @returns {Anchor}
     */
    public setTarget(target: string) : Anchor
    {
        this.setAttribute('target', target);
        return this;
    }


}

export { Anchor };
