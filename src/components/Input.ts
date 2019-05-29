import { Component } from '../Component';

export enum enumInputType {
    text = 'text',
    hidden = 'hidden'
}

/**
 * Input control
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 */
class Input extends Component {

    /**
     *
     * @param id
     */
    constructor(id: string)
    {

        super(id);

        // noinspection HtmlUnknownAttribute
        this.template = '<input {attributes}/>';
        this.type = 'text';
        this.componentClassName = 'Input';


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
            name : 'Input',
            description : 'Input field',
            category : 'component',
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
                    slug : 'VOxBvx',
                    title : 'Input component example',
                    height : 400,
                }
            ],
        };


    }

    /**
     *
     * @param type
     * @returns {Input}
     */
    public setType(type: string) : Input
    {
        this.type = type;
        return this;
    }

    /**
     *
     * @returns {string}
     */
    public getType() : string
    {
        return this.type ;
    }

    /**
     *
     * @returns {string}
     */
    public render() : string
    {
        this.setAttribute('type',this.type);
        return super.render();
    }


}


export { Input };