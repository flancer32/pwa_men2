const template = `
<layout-centered>
    <div class="row justify-center" style="margin-bottom: 20px;">
        <q-avatar size="100px">
            <img :src="url">
        </q-avatar>
    </div>
    <user-sign-in
            :data="signIn"
            @onSuccess="onSuccess($event)"
            @onFailure="onFailure($event)"
    ></user-sign-in>
</layout-centered>
`;

export default function Fl32_Men2_Front_Route_Sign_In(spec) {
    /** @type {Fl32_Men2_Defaults} */
    const DEF = spec['Fl32_Men2_Defaults$'];    // instance singleton
    /** @type {Fl32_Teq_User_Front_App_Session} */
    const session = spec[DEF.MOD_USER.DI_SESSION];  // named singleton
    /** @type {TeqFw_Core_App_Front_Widget_Layout_Centered} */
    const layoutCentered = spec['TeqFw_Core_App_Front_Widget_Layout_Centered$'];    // Vue component singleton
    /** @type {Fl32_Teq_User_Front_Widget_SignIn} */
    const userSignIn = spec['Fl32_Teq_User_Front_Widget_SignIn$'];  // Vue component singleton
    /** @type {typeof Fl32_Teq_User_Front_Widget_SignIn_Props} */
    const SignInProps = spec['Fl32_Teq_User_Front_Widget_SignIn#Props'];  // class constructor
    const {mapMutations, mapState} = spec[DEF.MOD_VUE.DI_VUEX];

    return {
        name: 'RouteSignIn',
        template,
        components: {layoutCentered, userSignIn},
        data: function () {
            return {
                out: 'Fl32_Men2_Front_App',
                signIn: new SignInProps(),
            };
        },
        computed: {
            url() {
                return './img/moon.png';
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
                this.$router.push('/');
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
