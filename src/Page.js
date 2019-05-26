/**
 * Page
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 */
class Page {

    constructor() {
        this.defaultContainerId = 'body';
        /**
         * List of UX items in web page
         */
        this.items = {};
        this.isInitialized = false;
    }


    /**
     * Add an item to the web page
     * @param item
     */
    addItem(item) {
        this.items[item.getId()] = item;
        return item;
    }

    /**
     * Remove an item from list of items
     * @param id
     * @returns {UX}
     */
    removeItem(id) {
        if (this.items[id] != undefined) {
            delete this.items[id];
        }
        return this;
    }

    /**
     * Find an item
     * @param id
     * @returns {null|*}
     */
    findItem(id) {
        if (this.items[id] != undefined) {
            return this.items[id];
        }
        return null;
    }



    /**
     * Init UX, init all components
     */
    init() {

        if (this.isInitialized) {
            return false;
        }

        for(let x in this.items) {
            this.items[x].init();
        }

        this.isInitialized = true;

        return true;

    }

}

export { Page };