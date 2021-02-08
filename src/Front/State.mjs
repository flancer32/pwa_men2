/**
 * Aggregated state for default realm.
 *
 * @param {TeqFw_Di_SpecProxy} spec
 * @return {Object}
 */
function Fl32_Men2_Front_State(spec) {
    /** @type {Fl32_Teq_User_Front_State} */
    const user = spec['Fl32_Teq_User_Front_State$'];   // singleton object

    return {
        namespaced: true,
        state: {
            lang: 'en-US',
            title: 'TeqFW App',
        },
        modules: {user},
    };
}

// We should place function separately to allow JSDoc & IDEA hints & navigation.
export default Fl32_Men2_Front_State;
