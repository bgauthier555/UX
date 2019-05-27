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


    /**
     * Adds Li item to component
     * @param id
     * @returns {UX.Container}
     */
    addLi(id) {
        return this.addItem(new Li(id));
    }

    /**
     * Adds Ol item to component
     * @param id
     * @returns {UX.Container}
     */
    addOl(id) {
        return this.addItem(new Ol(id));
    }

    /**
     * Add Ul item to component
     * @param id
     * @returns {UX.Container}
     */
    addUl(id) {
        return this.addItem(new Ul(id));
    }

    /**
     * Adds div item to component
     * @param id
     * @returns {UX.Container}
     */
    addDiv(id) {
        return this.addItem(new Div(id));
    }

    /**
     * Adds anchor item to component
     * @param id
     * @returns {UX.Container}
     */
    addAnchor(id) {
        return this.addItem(new Anchor(id));
    }

    /**
     * Adds alert item to component
     * @param id
     * @returns {UX.Alert}
     */
    addAlert(id) {
        return this.addItem(new Alert(id));
    }

    /**
     * Adds button item to component
     * @param id
     * @returns {UX.Button}
     */
    addButton(id) {
        return this.addItem(new Button(id));
    }

    /**
     * Adds checkbox item to component
     * @param id
     * @returns {UX.Checkbox}
     */
    addCheckbox(id) {
        return this.addItem(new Checkbox(id));
    }

    /**
     * Adds heading item to component
     * @param id
     * @returns {UX.Heading}
     */
    addHeading(id) {
        return this.addItem(new Heading(id));
    }

    /**
     * Adds input item to component
     * @param id
     * @returns {UX.Input}
     */
    addInput(id) {
        return this.addItem(new Input(id));
    }

    /**
     * Adds paragraph item to component
     * @param id
     * @returns {UX.Paragraph}
     */
    addParagraph(id) {
        return this.addItem(new Paragraph(id));
    }

    /**
     * Adds password item to component
     * @param id
     * @returns {UX.Password}
     */
    addPassword(id) {
        return this.addItem(new Password(id));
    }

    /**
     * Adds pre item to component
     * @param id
     * @returns {UX.Pre}
     */
    addPre(id) {
        return this.addItem(new Pre(id));
    }

    /**
     * Adds select item to component
     * @param id
     * @returns {UX.Select}
     */
    addSelect(id) {
        return this.addItem(new Select(id));
    }

    /**
     * Adds textarea item to component
     * @param id
     * @returns {UX.TextArea}
     */
    addTextArea(id) {
        return this.addItem(new TextArea(id));
    }




}

export {ComponentContainer};