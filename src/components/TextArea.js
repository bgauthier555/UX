import { Component } from '../component.js';

/**
 * TextArea control
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 */
class TextArea extends Component {

    /**
     *
     * @param id
     */
    constructor(id) {

        super(id);

        this.template = '<textarea {attributes}>\n' +
            '{value}';
        '</textarea>';
        this.componentClassName = 'TextArea';


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
            name : 'TextArea',
            description : '',
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
            example : 'let container = new UX.TextArea(\'name\');',
        };


    }

    /**
     *
     * @returns {null}
     */
    render() {
        return super.render();
    }


}


export { TextArea };