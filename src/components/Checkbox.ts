import {enumInputType, Input} from './Input';
import {FontAwesome} from "../FontAwesome";

/**
 * Checkbox component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 */
class Checkbox extends Input {

    /**
     * Component constructor
     * @param {string} id Component unique _sId
     */
    constructor(id: string) {

        super(id);

        this.setType(enumInputType.checkbox);
        this._sComponentClassName = 'Checkbox';

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
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name : 'Checkbox',
            description : '',
            category : 'component',
            icon : FontAwesome.FA_CHECK,
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

export { Checkbox };