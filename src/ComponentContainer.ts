/**
 * Component container, allows to add multiple child components
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 */
import {Component} from "./Component";


abstract class ComponentContainer extends Component {

    /**
     * Component sub items
     */
    public items: any = [];

    /**
     *
     * @param id
     */
    constructor(sId: string) {
        super(sId);

        this.items = [];
    }

    /**
     * Render container components and returns HTML string
     */
    public render(map: any = null) : string
    {

        let sChildItems = '';


        for(let x in this.items) {
            if (this.items.hasOwnProperty(x)) {
                sChildItems = sChildItems + this.items[x].render(map);
            }
        }


        let sHtml = super.render({
            child_items : sChildItems
        });


        return sHtml;
    }

    /**
     * Returns list of comonents
     * @returns {Array}
     */
    public getItems() : any
    {
        return this.items;
    }


    /**
     * Adds a child component to this container
     * @param item
     * @returns {Component}
     */
    public addItem(item: Component | ComponentContainer) : Component | ComponentContainer
    {

        // Set item _oParent to this container item
        item._oParent = this;
        this.items[this.items.length] = item;

        // Remove from main component item list, since this component is a child component
        // @ts-ignore
        window.UX.Page.removeItem(item.getId());

        return item;
    }


    /**
     * Adds Li item to component
     * @param id
     * @returns {Component}
     */
    public addLi(id: string = null) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Li(id));
    }

    /**
     * Adds Ol item to component
     * @param id
     * @returns {Component}
     */
    public addOl(id: string = null) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Ol(id));
    }

    /**
     * Add Ul item to component
     * @param id
     * @returns {Component}
     */
    public addUl(id: string = null) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Ul(id));
    }

    /**
     * Adds div item to component
     * @param id
     * @returns {Component}
     */
    public addDiv(id: string = null) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Div(id));
    }

    /**
     * Adds anchor item to component
     * @param id
     * @returns {Component}
     */
    public addAnchor(id: string = null) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Anchor(id));
    }

    /**
     * Adds alert item to component
     * @param id
     * @returns {Component}
     */
    public addAlert(id: string = null) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Alert(id));
    }

    /**
     * Adds button item to component
     * @param id
     * @returns {Component}
     */
    public addButton(id: string = null) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Button(id));
    }

    /**
     * Adds checkbox item to component
     * @param id
     * @returns {Component}
     */
    public addCheckbox(id: string = null) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Checkbox(id));
    }

    /**
     * Adds heading item to component
     * @param id
     * @returns {Component}
     */
    public addHeading(id: string = null) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Heading(id));
    }

    /**
     * Adds input item to component
     * @param id
     * @returns {Component}
     */
    public addInput(id: string = null) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Input(id));
    }

    /**
     * Adds paragraph item to component
     * @param id
     * @returns {Component}
     */
    public addParagraph(id: string = null) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Paragraph(id));
    }

    /**
     * Adds password item to component
     * @param id
     * @returns {Component}
     */
    public addPassword(id: string = null) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Password(id));
    }

    /**
     * Adds pre item to component
     * @param id
     * @returns {Component}
     */
    public addPre(id: string = null) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Pre(id));
    }

    /**
     * Adds select item to component
     * @param id
     * @returns {Component}
     */
    public addSelect(id: string = null) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Select(id));
    }

    /**
     * Adds textarea item to component
     * @param id
     * @returns {Component}
     */
    public addTextArea(id: string = null) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.TextArea(id));
    }


    /**
     * Adds head item to component
     * @param id
     * @returns {Component}
     */
    public addHead(sId: string = null) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Head(sId));
    }

    /**
     * Adds title item to component
     * @param id
     * @returns {Component}
     */
    public addTitle(sId: string = null) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Title(sId));
    }

    /**
     * Adds body item to component
     * @param id
     * @returns {Component}
     */
    public addBody(sId: string = null) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Body(sId));
    }

    /**
     * Adds row item to component
     * @param id
     * @returns {Component}
     */
    public addRow(sId: string = null) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Row(sId));
    }


    public findItem(sId: string) : Component | null
    {

        for(let x in this.items) {
            if (this.items[x].getId() == sId) {
                return this.items[x];
            } else {
                let item = this.items[x].findItem(sId);
                if (item != null) {
                    return item;
                }
            }
        }

        return null;
    }



}

export {ComponentContainer};