import {Page} from "./Page";
import {Patch} from "./Patch";
import {enumComponentCategory, enumMissingFeature} from "./UX";




/**
 * Init UX object
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @param options
 */
export function initialize(options) {


    /**
     * Create default page object
     */
    if (window.UX == undefined) {
        window.UX = {};
    }

    window.UX.version = '1.0.4';
    window.UX.components = {};
    window.UX.utilities = {};
    window.UX.missingFeature = (options.missingFeature == undefined ? enumMissingFeature.ERROR : options.missingFeature);
    window.UX.debug = (options.debug == undefined ? false : options.debug);
    window.UX.log = function(message) {
        if (this.debug) {
            console.log(message);
        }
    };

    window.UX.warn = function(message) {
        console.warn(message);
    };

    window.UX.log('UX initialize version ' + window.UX.version);

    window.UX.log('--> loading libraries');
    window.UX.activeLibrary = (options.activeLibrary == undefined ? LIBRARY_HTML5 : options.activeLibrary);
    window.UX.libraries = {
        Html5 : {},
        Bootstrap_4 : {},
        Semantic_2_4 : {},
    };

    window.UX.getLibrary = function() {
        return this.activeLibrary;
    }

    window.UX.setLibrary = function(library) {
        this.activeLibrary = library;
    }

    window.UX.patch = new Patch();

    window.UX.Page = new Page();
    window.UX.log('--> active library _sIs ' + window.UX.activeLibrary);

    // Load library decorators

    window.UX.log('--> loading components');
    let keys = Object.keys(window.UX);
    for(let x in keys) {

        if (window.UX[keys[x]] == undefined) {
            console.log(keys[x] + ' _sIs undefined');
        }

        if (window.UX[keys[x]].getMetaData != undefined) {

            window.UX.log('  + Analyzing component ' + keys[x]);

            if (['component','layout','content'].indexOf(window.UX[keys[x]].getMetaData().category) != -1) {
                window.UX.log('    * Found Component class');
                window.UX.components[keys[x]] = window.UX[keys[x]];
                window.UX[keys[x]].patchComponent(window.UX[keys[x]].getMetaData);
            } else if ([enumComponentCategory.utility].indexOf(window.UX[keys[x]].getMetaData().category) != -1) {
                window.UX.log('    * Found utility class');
                window.UX.utilities[keys[x]] = window.UX[keys[x]];
            } else if (['decorator'].indexOf(window.UX[keys[x]].getMetaData().category) != -1) {
                window.UX.log('    * Found Decorator class');
                window.UX.libraries[window.UX[keys[x]].getMetaData().library][window.UX[keys[x]].getMetaData().name] =  window.UX[keys[x]];
            }

        }


    } // End for each UX element

    /**
     * Apply patch if any
     */
    window.UX.patch.applyPatch();

    if (options.done) {
        options.done();
    }


}