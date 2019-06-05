import { Component } from '../Component';
import {FontAwesome} from "../FontAwesome";
/**
 * Input control
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 */
class Icon extends Component {

    /**
     *
     * @param id
     */
    constructor(id: string)
    {

        super(id);

        // noinspection HtmlUnknownAttribute
        this._sTemplate = '<i {attributes}></i>';
        this._sComponentClassName = 'Icon';


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
            name : 'Icon',
            description : 'Icon',
            category : 'content',
            icon : FontAwesome.FA_IMAGE,
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
            codepen : [
                {
                    user : 'bgauthier555',
                    slug : 'vwrrdm',
                    title : 'Icon example',
                    height : 400,
                }
            ],
        };


    }

    /**
     * Makes an icon using icon class
     * @param sIconClass
     * @param sAppend
     */
    static make(sIconClass: string, sAppend: string = '&nbsp;'): string
    {

        /**
         * If no icon class return empty
         */
        if (!sIconClass) {
            return '';
        }

        /**
         * Find library
         */
        let sIconLib: string = '';
        if (sIconClass.startsWith('fa-')) {
            sIconLib = 'fa ';
        }

        return '<i class="' + sIconLib + sIconClass + '"></i>' + (sAppend ? sAppend : '');
    }


}


export { Icon };