import { ComponentContainer } from '../ComponentContainer';
import {Row} from "./Row";
import {Component} from "../Component";
import {LIBRARY_HTML5} from "../Init";

/**
 * container component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 */
class Container extends ComponentContainer {

    /**
     * If container is fluid or not
     */
    protected isFluid: boolean = false;

    /**
     * Component constructor
     * @param {string} id Component unique id
     */
    constructor(id: string)
    {
        super(id);

        super.checkIfFeatureIsSupported(Container.getMetaData());

        // noinspection HtmlUnknownAttribute
        this.template = '<div {attributes}>{child_items}</div>';
        this.componentClassName = 'Container';

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
            name : 'Container',
            description : 'Containers are the most basic layout element and are required when using our default grid system. Choose from a responsive, fixed-width container.',
            category : 'layout',
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
            example : '',
            codepen : [
                {
                    user : 'bgauthier555',
                    slug : 'oRdJZr',
                    title : 'Container, Row and Column example',
                    height : 400,
                }
            ],
        };


    }

    /**
     * Returns if container is fluid dor not
     * @returns {boolean}
     */
    public getIsFluid() : boolean
    {
        return this.isFluid;
    }

    /**
     * Sets if container is fluid or not
     * @param isFluid
     * @returns {Container}
     */
    public setIsFluid(isFluid: boolean) : Container
    {
        this.isFluid = isFluid;
        return this;
    }



    /**
     * Add a row to the container
     * @param id
     * @returns {Component}
     */
    public addRow(id: string) : Component
    {
        return this.addItem(new Row(id));
    }



}

export { Container }