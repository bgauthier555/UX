import { Component } from '../component.js';
/**
 * Select list control
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 */
class Select extends Component {

    /**
     *
     * @param id
     */
    constructor(id) {

        super(id);

        this.store = new UX.Store();

        this.template = '<select {attributes}>\n' +
            '{options}';
            '</select>';
        this.componentClassName = 'Select';


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
            name : 'Select',
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
            example : 'let container = new UX.Select(\'name\');',
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


export { Select };