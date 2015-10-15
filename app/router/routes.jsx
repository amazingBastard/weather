FlowRouter.route('/', {
    name: 'Root',
    action() {
        ReactLayout.render(Layout, {
            content: <Root />
        });
    }
});

FlowRouter.route('/:name', {
    name: 'Weather',
    action(params) {
        ReactLayout.render(Layout, {
            content: <Weather name={params.name} />
        });
    }
});