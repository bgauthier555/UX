/**
 * Page
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 */
import {Component} from "./index";

class Page {

    /**
     * Default container id
     */
    protected defaultContainerId: string = 'body';

    /**
     * List of UX items in web page
     */
    protected items: any = {};
    protected isInitialized: boolean = false;

    /**
     *
     */
    constructor() {
    }


    /**
     * Add an item to the web page
     * @param item
     */
    public addItem(item: Component) : Component
    {
        this.items[item.getId()] = item;
        return item;
    }

    /**
     * Remove an item from list of items
     * @param id
     * @returns {UX}
     */
    public removeItem(id: string) : Page
    {
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
    public findItem(id: string) : Component
    {
        if (this.items[id] != undefined) {
            return this.items[id];
        }
        return null;
    }



    /**
     * Init UX, init all components
     */
    public init() {

        if (this.isInitialized) {
            return false;
        }

        for(let x in this.items) {
            if (this.items.hasOwnProperty(x)) {
                this.items[x].init();
            }
        }

        this.isInitialized = true;

        return true;

    }

}

export { Page };