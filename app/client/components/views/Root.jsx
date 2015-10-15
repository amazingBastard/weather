Root = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        var data = {},
            handle = api.subscribe('rest2ddp', 'open-weather', {});

        if (handle.ready()) {
            data.cities = Openweather.find({}, {sort: {_id: 1}}).fetch();
        }

        return data;
    },

    renderOptions() {
        return this.data.cities.map(function (city) {
            var path = FlowRouter.path('Weather', {name: city.name});
            return (
                <a className="weather button" href={path} key={city._id}>{city.name}</a>
            )

        });
    },

    render() {
        return (
            <main className="animated fadeIn root view">
                {(this.data.cities) ? this.renderOptions() : <Loading />}
            </main>
        );
    }
});