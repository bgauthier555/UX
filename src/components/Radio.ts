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
class Radio extends Input {

    constructor(sId: string)
    {
        super(sId);
        this._eType = enumInputType.radio;
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
            name : 'Radio',
            description : 'HTML Radio button component',
            category : 'component',
            icon: FontAwesome.FA_CHECK_CIRCLE,
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

export { Radio };