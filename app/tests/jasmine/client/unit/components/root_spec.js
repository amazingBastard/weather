'use strict';
var ReactTestUtils,
    meteorData;

describe('Root View Component', function () {

    beforeEach(function () {
        ReactTestUtils = React.addons.ReactTestUtils;
        meteorData = {
            cities: [
                {
                    name: 'New York'
                },
                {
                    name: 'Chicago'
                },
                {
                    name: 'Seattle'
                },
                {
                    name: 'Houston'
                },
                {
                    name: 'San Diego'
                }
            ]
        };
    });

    it('should be mounted in DOM', function () {
        var root = '<Root />';
        ReactTestUtils.renderIntoDocument(root);
        expect(root.className).find('.root.view').toBeDefined();
    });

    it('should get Meteor Data from Openweather collection', function () {
        // @TODO: loop this
        expect(meteorData.cities).toEqual(jasmine.objectContaining({
            name: 'New York'
        }));
        expect(meteorData.cities).toEqual(jasmine.objectContaining({
            name: 'Chicago'
        }));
        expect(meteorData.cities).toEqual(jasmine.objectContaining({
            name: 'Seattle'
        }));
        expect(meteorData.cities).toEqual(jasmine.objectContaining({
            name: 'Houston'
        }));
        expect(meteorData.cities).toEqual(jasmine.objectContaining({
            name: 'San Diego'
        }));
    });

    it('should render options to choose different cities', function () {

    });
});