import { ComponentContainer } from '../ComponentContainer';
import {FontAwesome} from "../FontAwesome";

/**
 * Heading component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 */
class Heading extends ComponentContainer {

    protected level: number = 1;

    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    constructor(id: string)
    {

        super(id);


        // noinspection HtmlUnknownAttribute
        this._sTemplate = '<h{level} {attributes}>{child_items}</h{level}>';
        this._sComponentClassName = 'Heading';

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
         * category is one of layout | content | component
         * @type {object}
         */
        return {
            name : 'Heading',
            description : 'Heading element h1 to h6',
            category : 'content',
            icon : FontAwesome.FA_HEADING,
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
                    slug : 'arKvpy',
                    title : 'Heading example',
                    height : 400,
                }
            ],
        };


    }

    /**
     * Get heading level (1-6)
     * @returns {number}
     */
    public getLevel() : number
    {
        return this.level;
    }

    /**
     * Set heading level (1-6)
     * @param level
     * @returns {Heading}
     */
    public setLevel(level: number) : Heading
    {
        this.level = level;
        return this;
    }

}

export { Heading };