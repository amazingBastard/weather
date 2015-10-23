'use strict';

var TestUtils = React.addons.TestUtils;

renderComponent = function (comp) {
    return TestUtils.renderIntoDocument(
        React.createElement(comp)
    );
};


describe('Root View Component', function () {
    var renderRoot, component, el, $el,
        data = {
            cities: [
                {'name': 'New York'},
                {'name': 'Chicago'},
                {'name': 'Seattle'},
                {'name': 'Houston'},
                {'name': 'San Diego'}
            ]
        };

    beforeEach(function() {
        renderRoot = function() {
            component = renderComponent(Root);
            el = React.findDOMNode(component);
            $el = $(el);
        };
    });

    it('should be mounted in DOM', function () {
        renderRoot();
        expect($el.length).toEqual(1);
    });

    it('should get Meteor Data from Openweather collection', function () {
        expect(data).toBeDefined();
        expect(data.cities.length).toBe(5);
        expect(data.cities).toContain({name: 'New York'});
        expect(data.cities).toContain({name: 'Chicago'});
        expect(data.cities).toContain({name: 'Seattle'});
        expect(data.cities).toContain({name: 'Houston'});
        expect(data.cities).toContain({name: 'San Diego'});
    });

    it('should render options to choose different cities', function () {
        var button = document.createElement('a');

        expect($(button).find('.weather.button')[0]).toBeDefined();
    });
});