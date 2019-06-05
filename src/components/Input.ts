import { Component } from '../Component';
import { FontAwesome } from "../FontAwesome";
import { enumInputType } from "../UX";


/**
 * Input control
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 */
class Input extends Component {

    protected _eType: enumInputType = null;

    protected _sLabel: string = null;

    /**
     *
     * @param id
     */
    constructor(id: string)
    {

        super(id);

        // noinspection HtmlUnknownAttribute
        this._sTemplate = '<input {attributes}/>';
        this._eType = enumInputType.text;
        this._sComponentClassName = 'Input';


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
            name : 'Input',
            description : 'Input field',
            category : 'component',
            icon : FontAwesome.FA_EDIT,
            isContainer: false,
            libraries : {
                Bootstrap_4: {
                    supported: true,
                    comments : '',
                },
                Html5: {
                    supported : true,
                    comments : '',
                }
            },
            example : '',
            codepen : [
                {
                    user : 'bgauthier555',
                    slug : 'VOxBvx',
                    title : 'Input component example',
                    height : 400,
                }
            ],
        };


    }

    /**
     *
     * @param eType
     * @returns {Input}
     */
    public setType(eType: enumInputType) : Input
    {
        this._eType = eType;
        return this;
    }

    /**
     *
     * @returns {string}
     */
    public getType() : enumInputType
    {
        return this._eType ;
    }

    /**
     *
     * @returns {string}
     */
    public render() : string
    {
        this.setAttribute('type',this.type);
        return super.render();
    }

    /**
     * Get component label
     */
    public getLabel(): string
    {
        return this._sLabel;
    }

    /**
     * Set component label
     * @param sLabel
     */
    public setLabel(sLabel: string) : Component
    {
        this._sLabel = sLabel;
        return this;
    }



}


export { Input, enumInputType };