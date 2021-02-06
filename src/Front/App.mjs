const template = `
<div>
    <user-sign-in
                  :data="signIn"
                  @onSuccess="onSuccess($event)"
                  @onFailure="onFailure($event)"
    ></user-sign-in>
</div>
`;

export default function Fl32_Men2_Front_App(spec) {
    /** @type {Fl32_Teq_User_Front_Widget_SignIn} */
    const userSignIn = spec['Fl32_Teq_User_Front_Widget_SignIn$'];  // instance singleton

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
        methods: {
            onFailure(data) {
                console.log('Failure');
            },
            async onSuccess() {
                console.log('Success');
            },
        },
    };
}
