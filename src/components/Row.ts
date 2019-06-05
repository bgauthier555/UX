import { ComponentContainer } from '../ComponentContainer';
import {Column, FontAwesome} from "../index";

/**
 * Row component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 */
class Row extends ComponentContainer {

    /**
     * Component constructor
     * @param {string} id Component unique _sId
     */
    constructor(id: string)
    {

        super(id);

        // noinspection HtmlUnknownAttribute
        this._sTemplate = '<div {attributes}>{child_items}</div>';
        this._sComponentClassName = 'Row';

    }

    /**
     * Returns component meta data
     * @returns {object}
     */
    public static getMetaData() : any
    {

        /**
         * Static
         * Component meta data information
         * category _sIs one of layout | content | component
         * @type {object}
         */
        return {
            name : 'Row',
            description : 'Rows are wrappers for columns.',
            category : 'layout',
            icon: FontAwesome.FA_LIST,
            isContainer: true,
            libraries : {
                Bootstrap_4: {
                    supported: true,
                    comments : '',
                },
                Html5: {
                    supported : false,
                    comments : '',
                }
            },
            example : '@see Container example',
        };


    }

    /**
     * Adds a column to the row
     * @param id
     * @param size
     * @returns {*}
     */
    public addColumn(id: string, size: string) : Column
    {
        let oItem = new Column(id);
        oItem.setSize(size);
        this.addItem(oItem);
        return oItem;
    }


}


export { Row };