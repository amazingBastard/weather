FlowRouter.route('/', {
    name: 'Root',
    action() {
        ReactLayout.render(Layout, {
            content: <Root />
        });
    }
});