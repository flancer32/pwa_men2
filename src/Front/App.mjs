const template = `
<div>
    {{ out }}
</div>
`;

export default function Fl32_Men2_Front_App(spec) {

    return {
        name: 'FrontApp',
        template,
        components: {},
        data: function () {
            return {
                out: 'Fl32_Men2_Front_App',
            };
        },
    };
}
