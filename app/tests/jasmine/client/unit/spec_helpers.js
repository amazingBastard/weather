TestUtils = React.addons.TestUtils;

renderComponent = function (comp, props) {
    return TestUtils.renderIntoDocument(
        React.createElement(comp, props)
    );
};