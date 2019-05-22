/**
 *
 */
class Container extends Component {


    constructor(id) {
        super(id);
        this.items = [];
    }


    getItems() {
        return this.items;
    }


    addItem(item) {
        this.items[this.items.length] = item;
        return this;
    }


}