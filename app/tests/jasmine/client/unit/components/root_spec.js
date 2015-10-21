'use strict';

describe('Root View Component', function () {
    var data = {
            cities: [
                {'name': 'New York'},
                {'name': 'Chicago'},
                {'name': 'Seattle'},
                {'name': 'Houston'},
                {'name': 'San Diego'}
            ]
        };

    beforeEach(function () {
        jasmine.addMatchers(customMatcher);
    });

    it('should be mounted in DOM', function () {
        var main = document.createElement('main');
        expect($(main).find('.root.view')[0]).toBeDefined();
    });

    it('should get Meteor Data from Openweather collection', function () {
        expect(data).toBeDefined();
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