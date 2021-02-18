/**
 * Class to integrate plugin into TeqFW application.
 * @extends TeqFw_Core_App_Plugin_Init_Base
 */
export default class Fl32_Men2_Plugin_Init {

    constructor(spec) {
        /** @type {Fl32_Men2_Defaults} */
        const DEF = spec['Fl32_Men2_Defaults$'];    // instance singleton

        this.getCommands = function () {
            return [
                'Fl32_Men2_Cli_Db_Reset$',
            ];
        };

        /**
         * Realm for plugin's services in the integrated API.
         *
         * @returns {String}
         */
        this.getServicesRealm = function () {
            return DEF.BACK_REALM;
        };

    }
}
