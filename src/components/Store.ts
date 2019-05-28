/**
 * Data store
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 */
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
            description : 'Data store',
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