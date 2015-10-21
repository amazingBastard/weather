'use strict';
var ReactTestUtils,
    meteorData;

describe('Root View Component', function () {

    beforeEach(function () {
        ReactTestUtils = React.addons.ReactTestUtils;
        jasmine.addMatchers(customMatcher);
    });

    it('should be mounted in DOM', function () {
        var root = <Root />;
        ReactTestUtils.renderIntoDocument(root);
        expect(root.className).find('.root.view').toBeDefined();
    });

    it('should get Meteor Data from Openweather collection', function () {
        var data = {
            cities: [
                {'name':'New York'},
                {'name':'Chicago'},
                {'name':'Seattle'},
                {'name':'Houston'},
                {'name':'San Diego'}
            ]
        };
        expect(data).toBeDefined();
        expect(data.cities).toContain({name : 'New York'});
    });

    it('should render options to choose different cities', function () {

    });
});