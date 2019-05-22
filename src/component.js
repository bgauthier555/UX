/**
 * A javascript UI Component
 */
class Component {

    constructor(id) {

        if (id == undefined) {
            id = this.generateRandomId();
        }

        this.containerId = id;
        this.id = id;
        this.name = id;
        this.classes = {};
        this.attributes = {};
        this.value = null;
        this.isEnabled = true;
        this.template = null;
        this.placeholder = null;


    }

    /**
     *
     * @returns {string}
     */
    generateRandomId()
    {
        return 'UX' + Math.random().toString(36).substring(2, 6) + Math.random().toString(36).substring(2, 6);
    }


    /**
     *
     * @returns {*}
     */
    getId()
    {
        return this.id;
    }

    /**
     *
     * @param id
     */
    setId(ID) {
        this.id = id;
    }

    getTemplate() {
        return this.template;
    }

    setTemplate(template) {
        this.template = template;
        return this;
    }

    /**
     *
     * @param sAttrName
     * @param mValue
     * @returns {UX.Component}
     */
    setAttribute(sAttrName, mValue) {
        this.attributes[sAttrName] = mValue;
        return this;
    }

    getAttributes() {
        return this.attributes;
    }

    /**
     *
     * @param sClassName
     */
    addClass(sClassName) {
        this.classes[sClassName] = sClassName;
        return this;
    }

    getClasses() {
        return this.classes;
    }

    /**
     *
     * @returns {null|*}
     */
    getValue() {
        return this.value;
    }

    /**
     *
     * @param mValue
     * @returns {UX.Component}
     */
    setValue(mValue) {
        this.value = mValue;
        return this;
    }

    /**
     *
     * @returns {UX.Component}
     */
    enable() {
        this.isEnabled = true;
        return this;
    }

    /**
     *
     * @returns {UX.Component}
     */
    disable() {
        this.isEnabled = false;
        return this;
    }

    getPlaceholder() {
        return this.placeholder;
    }

    setPlaceholder(placeholder) {
        this.placeholder = placeholder;
        return this;
    }

    getClassList() {
        let sClasses = '';
        for(var x in this.classes) {
            if (sClasses != '') {
                sClasses = sClasses + ' ';
            }
            sClasses = sClasses + x;
        }
        return sClasses;
    }

    /**
     *
     */
    render() {
        //console.warn('UI Component render function, this function should be redefined by parent component class');
        let sComponentHTML = this.template;
        let sAttributes = '';

        this.setAttribute('id',this.id);
        this.setAttribute('name',this.name);

        if (this.getClassList() != '') {
            this.setAttribute('class', this.getClassList());
        }

        if (this.placeholder != null && this.placeholder != '') {
            this.setAttribute('placeholder', this.placeholder);
        }

        for(var x in this.attributes) {
            if (sAttributes != '') {
                sAttributes = sAttributes + ' ';
            }
             sAttributes = sAttributes + x + '="' + this.attributes[x] + '"';
        }
        sComponentHTML = sComponentHTML.replace(/{attributes}/g, sAttributes);
        return sComponentHTML;
    }

}