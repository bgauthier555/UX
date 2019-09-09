import {enumInputType, Input} from './Input';
import {FontAwesome} from "../FontAwesome";

/**
 * Password control
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @type {Password}
 */
class Password extends Input {

    /**
     *
     * @param id
     */
    constructor(sId: string)
    {
        super(sId);
        this.setType(enumInputType.password);
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
            name : 'Password',
            description : '',
            category : 'component',
            icon : FontAwesome.FA_UNLOCK,
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

}

export { Password };