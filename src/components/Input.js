import { Component } from '../component.js';
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
    constructor(id) {

        super(id);

        this.template = '<input {attributes}/>';
        this.type = 'text';
        this.componentClassName = 'Input';


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
            example : 'let container = new UX.Input(\'name\');',
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
    setType(type) {
        this.type = type;
        return this;
    }

    /**
     *
     * @returns {string}
     */
    getType() {
        return this.type ;
    }

    /**
     *
     * @returns {null}
     */
    render() {
        this.setAttribute('type',this.type);
        return super.render();
    }


}


export { Input };