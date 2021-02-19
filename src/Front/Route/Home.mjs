const template = `
<layout-centered>
    <div class="actions">
        <q-btn v-on:click="this.$router.push('/sign/in')" :label="$t('login')"></q-btn>
        <q-btn v-on:click="signOut" :label="$t('logout')"></q-btn>
    </div>
</layout-centered>
`;

export default function Fl32_Men2_Front_Route_Home(spec) {
    /** @type {Fl32_Men2_Defaults} */
    const DEF = spec['Fl32_Men2_Defaults$'];    // instance singleton
    /** @type {Fl32_Teq_User_Front_Gate_Sign_Out.gate} */
    const gateSignOut = spec['Fl32_Teq_User_Front_Gate_Sign_Out$']; // function singleton
    /** @type {typeof Fl32_Teq_User_Shared_Service_Route_Sign_Out_Request} */
    const RequestSignOut = spec['Fl32_Teq_User_Shared_Service_Route_Sign_Out#Request']; // class constructor
    const {mapMutations, mapState} = spec[DEF.MOD_VUE.DI_VUEX];

    return {
        name: 'RouteHome',
        template,
        components: {},
        data: function () {
            return {};
        },
        computed: {
            ...mapState({
                stateUserAuthenticated: state => state.user.authenticated,
            })
        },
        methods: {
            async signOut() {
                const req = new RequestSignOut();
                await gateSignOut(req);
                this.setStateUserAuthenticated(null);
                this.$router.push('/sign/in');
            },
            ...mapMutations({
                setStateUserAuthenticated: 'user/setAuthenticated',
            }),
        },
        mounted() {
        },
    };
}
