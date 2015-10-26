'use strict';

describe('Weather View Component', function () {
    var props, renderWeather, component, el, $el;

    beforeEach(function() {
        props = {
            name: 'City'
        };

       renderWeather = function(props) {
           component = renderWeather(Weather, props);
           el = React.findDOMNode(component);
           $el = $(el);
       }
    });

    it('should be mounted in DOM', function () {
        renderWeather(props);
        expect($el.length).toEqual(1);
    });

    it('should have a city name prop', function() {
        renderWeather({});
        expect(component.props.name).toBe(true);
    });

    it('should have a figure caption with City name', function() {
        expect($el.text()).toContain('City');
    });

    // @TODO: add more tests
});