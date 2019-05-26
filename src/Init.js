import {Page} from "./Page";

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

    window.UX.version = '1.0.0';
    window.UX.components = {};
    window.UX.debug = (options.debug == undefined ? false : options.debug);
    window.UX.log = function(message) {
        if (this.debug) {
            console.log(message);
        }
    };

    window.UX.log('UX initialize version ' + window.UX.version);

    window.UX.log('--> loading libraries');
    window.UX.activeLibrary = (options.activeLibrary == undefined ? 'Html5' : options.activeLibrary);
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

    window.UX.Page = new Page();
    window.UX.log('--> active library is ' + window.UX.activeLibrary);

    // Load library decorators

    window.UX.log('--> loading components');
    let keys = Object.keys(window.UX);
    for(let x in keys) {

        window.UX.log('  + Analyzing component ' + keys[x]);

        if (window.UX[keys[x]].getMetaData != undefined) {

            if (['component','layout','content'].indexOf(window.UX[keys[x]].getMetaData().category) != -1) {
                window.UX.log('    * Found Component class');
                window.UX.components[keys[x]] = window.UX[keys[x]];
            } else if (['decorator'].indexOf(window.UX[keys[x]].getMetaData().category) != -1) {
                window.UX.log('    * Found Decorator class');
                window.UX.libraries[window.UX[keys[x]].getMetaData().library][window.UX[keys[x]].getMetaData().name] =  window.UX[keys[x]];
            }

        } else {
            window.UX.log('    ! Not an object');
        }


    }


}