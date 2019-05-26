import { Component } from './component.js';

/**
 * Component container, allows to add multiple child components
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 */
class ComponentContainer extends Component {


    constructor(id) {
        super(id);
        this.items = [];
    }

    /**
     * Render container components and returns HTML string
     */
    render() {

        let sChildItems = '';

        if (this.getLabel()) {
            sChildItems = sChildItems + this.getLabel();
        }

        for(let x in this.items) {
            sChildItems = sChildItems + this.items[x].render();
        }

        let sHtml = super.render();
        sHtml = sHtml.replace(/{child_items}/g, sChildItems);

        return sHtml;
    }

    /**
     * Returns list of comonents
     * @returns {Array}
     */
    getItems() {
        return this.items;
    }


    /**
     * Adds a child component to this container
     * @param item
     * @returns {UX.Container}
     */
    addItem(item) {

        // Set item parent to this container item
        item.parent = this;
        this.items[this.items.length] = item;

        // Remove from main component item list, since this component is a child component
        window.UX.Page.removeItem(item.getId());

        return item;
    }



}

export {ComponentContainer};