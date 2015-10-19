describe('Root View Component', function() {
    var renderComponent, component, el, $el;

    beforeEach(function() {
        renderComponent = function() {
            component = renderComponent(Root);
            el = React.findDOMNode(component);
            $el = $(el);
        };
    });

    it('should be mounted in DOM', function() {
        renderComponent(Root);
        //expect($el.length).toEqual(1);
    });

    it('should get Meteor data from Openweather collection', function() {

    });

    it('should render options to choose different cities', function() {

    });
});