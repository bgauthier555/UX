/**
 * Behaviour on missing feature
 */
export enum enumMissingFeature
{
    /**
     * Indicates an error will be thrown if the requested feature is not possible
     * @type {string}
     */
    ERROR = "missing-feature-error",
    /**
     * Indicates a warning message will be logged in console if requested feature is not possible
     * @type {string}
     */
    WARNING = "missing-feature-warning",
    /**
     * Indicates patch css and js files will be loaded in order to try and offer a similar user experience
     * If the is not possible, an error will be thrown
     * @type {string}
     */
    PATCH = "missing-feature-patch",
}

/**
 * Supported libraries
 */
export enum enumLibrary
{
    /**
     * Standard Html
     * @type {string}
     */
    HTML5 = 'Html5',
    /**
     * Twitter Bootstrap version 4.X
     * @type {string}
     */
    BOOTSTRAP_4 = 'Bootstrap_4',

}