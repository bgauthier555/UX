import {ComponentContainer} from '../ComponentContainer';
import {FontAwesome} from "../FontAwesome";
import {enumComponentCategory, enumLinkType, enumRefererPolicy} from "../UX";
import {Component} from "../Component";

/**
 * Anchor component
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @class
 * @inheritdoc
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 */
class Anchor extends ComponentContainer {

    /**
     * This attribute instructs browsers to download a URL instead of navigating to it,
     * If the attribute has a value, it is used as the pre-filled file name in the Save prompt
     */
    protected _sDownload: string = null;

    /**
     * This attribute indicates the human language of the linked resource. It is purely advisory,
     * with no built-in functionality. Allowed values are determined by BCP47.
     */
    protected _sHrefLang: string = null;

    /**
     * Contains a space-separated list of URLs to which, when the hyperlink is followed,
     * POST requests with the body PING will be sent by the browser
     */
    protected _sPing: string = null;

    /**
     * Indicates which referrer to send when fetching the URL:
     */
    protected _eReferrerPolicy: enumRefererPolicy = null;

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types
     */
    protected _eRel: enumLinkType = null;

    /**
     * Component constructor
     * @param {string} sId Component unique _sId
     */
    constructor(sId: string)
    {
        super(sId);

        // noinspection HtmlUnknownAttribute
        this._sTemplate = '<a {attributes}>{child_items}</a>';
        this._sComponentClassName = 'Anchor';

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
            name : 'Anchor',
            description : 'HTML anchor element',
            category : enumComponentCategory.content,
            icon : FontAwesome.FA_ANCHOR,
            isContainer: true,
            help: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a',
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
            codepen : [
                {
                    user : 'bgauthier555',
                    slug : 'mYKJNK',
                    title : 'Alert example',
                    height : 400,
                }
            ],
        };


    }

    /**
     *
     * @param map
     */
    public render(map: any = null): string
    {
        // download
        if (this.getDownload()) {
            this.setAttribute('download', this.getDownload());
        }

        // hreflang
        if (this.getHrefLang()) {
            this.setAttribute('hreflang', this.getHrefLang());
        }

        // ping
        if (this.getPing()) {
            this.setAttribute('ping', this.getPing());
        }

        // referrerpolicy
        if (this.getReferrerPolicy()) {
            this.setAttribute('referrerpolicy', this.getReferrerPolicy().toString());
        }

        // rel
        if (this.getRel()) {
            this.setAttribute('rel', this.getRel().toString());
        }

        return super.render(map);
    }

    /**
     * Sets anchor href
     * @param href
     * @returns {Anchor}
     */
    public setHref(href: string) : Anchor
    {
        this.setAttribute('href', href);
        return this;
    }

    /**
     * Sets anchor target
     * @param target _blank|_self|_parent|_top|framename
     * @returns {Anchor}
     */
    public setTarget(target: string) : Anchor
    {
        this.setAttribute('target', target);
        return this;
    }

    /**
     * This attribute instructs browsers to download a URL instead of navigating to it
     */
    public getDownload() : string
    {
        return this._sDownload;
    }

    /**
     * This attribute instructs browsers to download a URL instead of navigating to it
     * @param sDownload
     */
    public setDownload(sDownload: string) : Component
    {
        this._sDownload = sDownload;
        return this;
    }

    /**
     *
     */
    public getHrefLang(): string
    {
        return this._sHrefLang;
    }

    /**
     *
     * @param sHrefLang
     */
    public setHrefLang(sHrefLang: string): Component
    {
        this._sHrefLang = sHrefLang;
        return this;
    }

    /**
     *
     */
    public getPing() : string
    {
        return this._sPing;
    }

    /**
     *
     * @param sPing
     */
    public setPing(sPing: string) : Component
    {
        this._sPing = sPing;
        return this;
    }

    /**
     *
     */
    public getReferrerPolicy() : enumRefererPolicy
    {
        return this._eReferrerPolicy;
    }

    /**
     *
     * @param eReferrerPolicy
     */
    public setReferrerPolicy(eReferrerPolicy: enumRefererPolicy) : Component
    {
        this._eReferrerPolicy = eReferrerPolicy;
        return this;
    }

    /**
     *
     */
    public getRel() : enumLinkType
    {
        return this._eRel;
    }

    /**
     *
     * @param eRel
     */
    public setRef(eRel: enumLinkType) : Component
    {
        this._eRel = eRel;
        return this;
    }

}

export { Anchor };
