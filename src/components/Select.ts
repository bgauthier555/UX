import { Component } from '../Component';
import {Store} from "./Store";
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
    constructor(sId: string)
    {
        super(sId);

        this._oStore = new Store();

        // noinspection HtmlUnknownAttribute
        this._sTemplate = '<select {attributes}>\n' +
            '{options}' +
            '</select>';
        this._sComponentClassName = 'Select';


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
            name : 'Select',
            description : '',
            category : 'component',
            isContainer: false,
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
        };


    }

    /**
     *
     * @returns {null}
     */
    public render() : string
    {
        return super.render();
    }


}


export { Select };