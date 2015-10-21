'use strict';
var ReactTestUtils,
    meteorData;

describe('Root View Component', function () {

    beforeEach(function () {
        ReactTestUtils = React.addons.ReactTestUtils;
        meteorData = {};
    });

    it('should be mounted in DOM', function () {
        var root = <Root />;
        ReactTestUtils.renderIntoDocument(root);
        expect(root.className).find('.root.view').toBeDefined();
    });

    it('should get Meteor Data from Openweather collection', function () {
        expect(meteorData).toBeDefined();
    });

    it('should render options to choose different cities', function () {

    });
});