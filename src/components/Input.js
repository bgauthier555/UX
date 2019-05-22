/**
 *
 */
UX.Input = class Input extends Component {

    /**
     *
     * @param id
     */
    constructor(id) {

        super(id);

        this.template = '<input {attributes}/>';
        this.type = 'text';

    }

    /**
     *
     * @param type
     * @returns {Input}
     */
    setType(type) {
        this.type = type;
        return this;
    }

    /**
     *
     * @returns {string}
     */
    getType() {
        return this.type ;
    }

    /**
     *
     * @returns {null}
     */
    render() {
        this.setAttribute('type',this.type);
        return super.render();
    }


}


