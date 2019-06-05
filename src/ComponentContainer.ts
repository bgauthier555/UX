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
    constructor(id: string) {
        super(id);

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

        // Remove from main component item list, since this component _sIs a child component
        // @ts-ignore
        window.UX.Page.removeItem(item.getId());

        return item;
    }


    /**
     * Adds Li item to component
     * @param id
     * @returns {Component}
     */
    public addLi(id: string) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Li(id));
    }

    /**
     * Adds Ol item to component
     * @param id
     * @returns {Component}
     */
    public addOl(id: string) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Ol(id));
    }

    /**
     * Add Ul item to component
     * @param id
     * @returns {Component}
     */
    public addUl(id: string) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Ul(id));
    }

    /**
     * Adds div item to component
     * @param id
     * @returns {Component}
     */
    public addDiv(id: string) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Div(id));
    }

    /**
     * Adds anchor item to component
     * @param id
     * @returns {Component}
     */
    public addAnchor(id: string) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Anchor(id));
    }

    /**
     * Adds alert item to component
     * @param id
     * @returns {Component}
     */
    public addAlert(id: string) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Alert(id));
    }

    /**
     * Adds button item to component
     * @param id
     * @returns {Component}
     */
    public addButton(id: string) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Button(id));
    }

    /**
     * Adds checkbox item to component
     * @param id
     * @returns {Component}
     */
    public addCheckbox(id: string) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Checkbox(id));
    }

    /**
     * Adds heading item to component
     * @param id
     * @returns {Component}
     */
    public addHeading(id: string) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Heading(id));
    }

    /**
     * Adds input item to component
     * @param id
     * @returns {Component}
     */
    public addInput(id: string) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Input(id));
    }

    /**
     * Adds paragraph item to component
     * @param id
     * @returns {Component}
     */
    public addParagraph(id: string) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Paragraph(id));
    }

    /**
     * Adds password item to component
     * @param id
     * @returns {Component}
     */
    public addPassword(id: string) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Password(id));
    }

    /**
     * Adds pre item to component
     * @param id
     * @returns {Component}
     */
    public addPre(id: string) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Pre(id));
    }

    /**
     * Adds select item to component
     * @param id
     * @returns {Component}
     */
    public addSelect(id: string) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.Select(id));
    }

    /**
     * Adds textarea item to component
     * @param id
     * @returns {Component}
     */
    public addTextArea(id: string) : Component
    {
        // @ts-ignore
        return this.addItem(new window.UX.TextArea(id));
    }




}

export {ComponentContainer};