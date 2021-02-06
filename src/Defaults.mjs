export default class Fl32_Men2_Defaults {
    BACK_REALM = 'app';  // realm for API services ('/api/app/...') and CLI commands ('app-...')
    DATA_USER_ID_ADMIN = 1; // app's sample data
    DATA_USER_ID_CUST = 2;
    DI_BOOTSTRAP = 'bootstrap'; // DI container label for bootstrap configuration.
    DI_CONFIG = 'core_config';
    DI_STORE = 'core_store';
    DI_VUE = 'core_vue';
    DI_VUE_ROUTER = 'core_vueRouter';
    DI_VUEX = 'core_vuex';
    MOD_CORE;
    MOD_USER;

    constructor(spec) {
        /** @type {TeqFw_Core_App_Defaults} */
        const CORE = spec['TeqFw_Core_App_Defaults$'];    // instance singleton
        this.MOD_CORE = CORE;
        /** @type {Fl32_Teq_User_Defaults} */
        const USER = spec['Fl32_Teq_User_Defaults$'];    // instance singleton
        this.MOD_USER = USER;
        Object.freeze(this);
    }
}
