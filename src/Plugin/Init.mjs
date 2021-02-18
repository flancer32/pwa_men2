/**
 * Class to integrate plugin into TeqFW application.
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

        this.getHttp2StaticMaps = function () {
            // TODO: what about wrong mapping? Perhaps, we need mapping below 'node_modules' folder:
            // '/i18next-detect/' => '/i18next-browser-languagedetector/dist/umd/'
            // and map as '$path.join(rootFs, 'node_modules', map[key])'
            return {};
        };

        /**
         * Realm for plugin's services in the integrated API.
         *
         * @returns {String}
         */
        this.getServicesRealm = function () {
            return DEF.BACK_REALM;
        };

        this.getHttp2Services = function () {
            return [];
        };
    }


}
