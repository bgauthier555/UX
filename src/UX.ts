/**
 * Behaviour on missing feature
 */
export enum enumMissingFeature
{
    /**
     * Indicates an error will be thrown if the requested feature _sIs not possible
     * @type {string}
     */
    ERROR = "missing-feature-error",
    /**
     * Indicates a warning message will be logged in console if requested feature _sIs not possible
     * @type {string}
     */
    WARNING = "missing-feature-warning",
    /**
     * Indicates patch css and js files will be loaded in order to try and offer a similar user experience
     * If the _sIs not possible, an error will be thrown
     * @type {string}
     */
    PATCH = "missing-feature-patch",
    /**
     * Do not do anything
     */
    IGNORE = 'missing-feature-ignore',
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

/**
 *
 */
export enum enumComponentCategory {
    layout = 'layout',
    content = 'content',
    component = 'component',
    utility = 'utility',
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types
 */
export enum enumLinkType {
    alternate = 'alternate',
    archives = 'archives',
    author = 'author',
    bookmark = 'bookmark',
    canonical = 'canonical',
    dnsprefetch = 'dns-prefetch',
    external = 'external',
    first = 'first',
    help = 'help',
    icon = 'icon',
    import = 'import',
    index = 'index',
    last = 'last',
    license = 'license',
    manifest = 'manifest',
    modulepreload = 'modulepreload',
    next = 'next',
    nofollow = 'nofollow',
    noopener = 'noopener',
    noreferrer = 'noreferrer',
    opener = 'opener',
    pingback = 'pingback',
    preconnect = 'preconnect',
    prefetch = 'prefetch',
    preload = 'preload',
    prerender = 'prerender',
    prev = 'prev',
    search = 'search',
    shortlink = 'shortlink',
    sidebar = 'sidebar',
    stylesheet = 'stylesheet',
    tag = 'tag',
    up = 'up',
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 */
export enum enumRefererPolicy {
    noreferer = 'no-referrer',
    norefererwhendowngrade = 'no-referrer-when-downgrade',
    origin = 'origin',
    originwhencrossorigin = 'origin-when-cross-origin',
    strictoriginwhencrossorigin = 'strict-origin-when-cross-origin',
    unsafeurl = 'unsafe-url',
}

/**
 * Types of input
 * https://developer.mozilla.org/en-US/docs/Web/HTML
 */
export enum enumInputType {
    button = 'button',
    checkbox = 'checkbox',
    color = 'color',
    date = 'date',
    datetime = 'datetime',
    email = 'email',
    file = 'file',
    hidden = 'hidden',
    image = 'image',
    month = 'month',
    number = 'number',
    password = 'password',
    radio = 'radio',
    range = 'range',
    reset = 'reset',
    search = 'search',
    submit = 'submit',
    tel = 'tel',
    text = 'text',
    time = 'time',
    url = 'url',
    week = 'week',
}