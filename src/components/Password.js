import { Input } from './Input.js';

/**
 * Password control
 *
 * @copyright Benoit Gauthier <bgauthier555@gmail.com>
 * @author Benoit Gauthier <bgauthier555@gmail.com>
 * @licence MIT
 * @type {UX.Password}
 */
class Password extends Input {

    constructor(id) {
        super(id);
        this.type = 'password';
    }

    /**
     * Returns component meta data
     * @returns {object}
     */
    static getMetaData() {

        /**
         * Static
         * Component meta data information
         * category is one of layout | content | component
         * @type {object}
         */
        return {
            name : 'Password',
            description : '',
            category : 'component',
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
            example : 'let container = new UX.Password(\'name\');',
        };


    }

}

export { Password };