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
class Image extends Component {

    /**
     *
     * @param id
     */
    constructor(sId: string)
    {

        super(sId);

        // noinspection HtmlUnknownAttribute
        this._sTemplate = '<img {attributes}/>';
        this._sComponentClassName = 'Image';


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
            name : 'Image',
            description : 'HTML Image element',
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
                    slug : 'dEKKeN',
                    title : 'Image example',
                    height : 400,
                }
            ],
        };


    }


}


export { Image };