import {MISSING_FEATURE_PATCH} from "./Init";

/**
 * Patch
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 */
class Patch {

    /**
     * Patch CSS content
     */
    protected css: string = null;

    /**
    constructor() {

    }

    /**
     * Returns CSS to patch
     */
    public getCSS() : string
    {
        return this.css;
    }

    /**
     * Sets CSS to patch
     */
    public setCSS(css: string) : Patch
    {
        this.css = css;
        return this;
    }

    /**
     * Append CSS to patch
     */
    public appendCSS(css: string) : Patch
    {
        this.css += css;
        return this;
    }

    /**
     * Execute patch
     */
    public applyPatch() {

        // @ts-ignore
        if (window.UX.missingFeature == MISSING_FEATURE_PATCH) {
            $('head').append('<style>' + this.getCSS() + '</style>');
        }

    }

}

export { Patch };