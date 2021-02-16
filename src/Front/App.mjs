const template = `
<layout-centered>
    <user-sign-in v-show="!isAuthenticated"
                  :data="signIn"
                  @onSuccess="onSuccess($event)"
                  @onFailure="onFailure($event)"
    ></user-sign-in>
    <div v-show="isAuthenticated">
        <button v-on:click="signOut">Sign Out</button>
        <user-sign-up
            :input="signUp"
        ></user-sign-up>
    </div>
</layout-centered>
`;

export default function Fl32_Men2_Front_App(spec) {
    /** @type {Fl32_Men2_Defaults} */
    const DEF = spec['Fl32_Men2_Defaults$'];    // instance singleton
    /** @type {Fl32_Teq_User_Front_App_Session} */
    const session = spec[DEF.MOD_USER.DI_SESSION];  // named singleton
    /** @type {TeqFw_Core_App_Front_Widget_Layout_Centered} */
    const layoutCentered = spec['TeqFw_Core_App_Front_Widget_Layout_Centered$'];    // Vue component singleton
    /** @type {Fl32_Teq_User_Front_Widget_SignIn} */
    const userSignIn = spec['Fl32_Teq_User_Front_Widget_SignIn$'];  // Vue component singleton
    /** @type {Fl32_Teq_User_Front_Widget_SignUp} */
    const userSignUp = spec['Fl32_Teq_User_Front_Widget_SignUp$'];  // Vue component singleton
    /** @type {Fl32_Teq_User_Front_Gate_Sign_Out.gate} */
    const gateSignOut = spec['Fl32_Teq_User_Front_Gate_Sign_Out$']; // function singleton
    /** @type {typeof Fl32_Teq_User_Shared_Service_Route_Sign_Out_Request} */
    const RequestSignOut = spec['Fl32_Teq_User_Shared_Service_Route_Sign_Out#Request']; // class constructor
    /** @type {typeof Fl32_Teq_User_Front_Widget_SignIn_Props} */
    const SignInProps = spec['Fl32_Teq_User_Front_Widget_SignIn#Props'];  // class constructor
    /** @type {typeof Fl32_Teq_User_Front_Widget_SignUp_Props} */
    const SignUpProps = spec['Fl32_Teq_User_Front_Widget_SignUp#Props'];  // class constructor
    const mapMutations = spec[DEF.DI_VUEX].mapMutations;
    const mapState = spec[DEF.DI_VUEX].mapState;

    return {
        name: 'FrontApp',
        template,
        components: {layoutCentered, userSignIn, userSignUp},
        data: function () {
            return {
                out: 'Fl32_Men2_Front_App',
                signIn: new SignInProps(),
                signUp: new SignUpProps(),
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
