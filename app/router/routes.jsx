FlowRouter.route('/', {
    name: 'Root',
    action() {
        ReactLayout.render(Layout, {
            content: <Root />
        });
    }
});

FlowRouter.route('/:_id', {
    name: 'Project',
    action(params) {
        ReactLayout.render(Layout, {
            content: <Weather _id={params._id} />
        });
    }
});