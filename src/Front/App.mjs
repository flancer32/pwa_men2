const template = `
<div>
    <user-sign-in v-show="!isAuthenticated"
                  :data="signIn"
                  @onSuccess="onSuccess($event)"
                  @onFailure="onFailure($event)"
    ></user-sign-in>
    <div v-show="isAuthenticated">
        <button v-on:click="signOut">Sign Out</button>
    </div>
</div>
`;

export default function Fl32_Men2_Front_App(spec) {
    /** @type {Fl32_Men2_Defaults} */
    const DEF = spec['Fl32_Men2_Defaults$'];    // instance singleton
    /** @type {Fl32_Teq_User_Front_App_Session} */
    const session = spec[DEF.MOD_USER.DI_SESSION];  // named singleton
    /** @type {Fl32_Teq_User_Front_Widget_SignIn} */
    const userSignIn = spec['Fl32_Teq_User_Front_Widget_SignIn$'];  // instance singleton
    /** @type {Fl32_Teq_User_Front_Gate_Sign_Out.gate} */
    const gateSignOut = spec['Fl32_Teq_User_Front_Gate_Sign_Out$']; // function singleton
    /** @type {typeof Fl32_Teq_User_Shared_Service_Route_Sign_Out_Request} */
    const RequestSignOut = spec['Fl32_Teq_User_Shared_Service_Route_Sign_Out#Request']; // class constructor
    const mapMutations = spec[DEF.DI_VUEX].mapMutations;
    const mapState = spec[DEF.DI_VUEX].mapState;

    return {
        name: 'FrontApp',
        template,
        components: {userSignIn},
        data: function () {
            return {
                out: 'Fl32_Men2_Front_App',
                signIn: {},
            };
        },
        computed: {
            isAuthenticated() {
                return this.stateUserAuthenticated !== null;
            },
            ...mapState({
                stateUserAuthenticated: state => state.user.authenticated,
            })
        },
        methods: {
            onFailure() {
                console.log('Failure');
            },
            async onSuccess() {
                // session is initiated in 'Fl32_Teq_User_Front_Widget_SignIn' before @success event.
                const user = session.getUser();
                this.setStateUserAuthenticated(user);
            },
            async signOut() {
                const req = new RequestSignOut();
                await gateSignOut(req);
                this.setStateUserAuthenticated(null);
            },
            ...mapMutations({
                setStateUserAuthenticated: 'user/setAuthenticated',
            }),
        },
        mounted() {
            const user = session.getUser();
            this.setStateUserAuthenticated(user);
        },
    };
}
