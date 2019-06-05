/**
 * Data _oStore
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 */
import {enumComponentCategory} from "../UX";

class Store {

    protected data: any = [];
    protected model: any = {};

    /**
     *
     */
    constructor() {

    }

    /**
     * Returns component meta data
     * @returns {object}
     */
    public static getMetaData() : any {

        /**
         * Static
         * Component meta data information
         * category is one of layout | content | component
         * @type {object}
         */
        return {
            name : 'Store',
            description : 'Data _oStore',
            category : enumComponentCategory.utility,
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
     * Nothing to do for now.
     * @param metaData
     */
    public static patchComponent(metaData: any) : void
    {}

}

export { Store };