export default class Fl32_Men2_Defaults {
    BACK_REALM = 'app';  // realm for API services ('/api/app/...') and CLI commands ('app-...')
    DATA_USER_ID_ADMIN = 1; // app's sample data
    DATA_USER_ID_CUST = 2;
    DI_BOOTSTRAP = 'bootstrap'; // DI container label for bootstrap configuration.
    DI_CONTAINER = 'container'; // @see TeqFw_Di_Container.constructor
    DI_STORE = 'core_store';

    /** @type {TeqFw_Core_App_Defaults} */
    MOD_CORE;
    /** @type {Fl32_Teq_User_Defaults} */
    MOD_USER;
    /** @type {TeqFw_Vue_Defaults} */
    MOD_VUE;

    constructor(spec) {
        this.MOD_CORE = spec['TeqFw_Core_App_Defaults$'];    // instance singleton
        this.MOD_USER = spec['Fl32_Teq_User_Defaults$'];    // instance singleton
        this.MOD_VUE = spec['TeqFw_Vue_Defaults$'];    // instance singleton
        Object.freeze(this);
    }
}
