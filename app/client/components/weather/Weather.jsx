Weather = React.createClass({
    mixins: [ReactMeteorData],
    PropTypes: {},

    getMeteorData() {
        var data = {},
            handle = REST2DDP.subscribe('rest2ddp', 'open-weather', {});

        if (handle.ready()) {
            data.cities = openweather.find({}, {sort: {_id: 1}}).fetch();
        }

        return data;
    },

    renderCities() {
        return this.data.cities.map(function (city) {
            return (
                <section className="city" key={city._id}>
                    <h1 className="location">
                        {city.name}
                        <small className="icon">{city.weather[0].description}</small>
                    </h1>

                    <div className="temp">
                        <h2 className="current">{city.main.temp}ºF</h2>

                        <p className="low">{city.main.temp_min}</p>

                        <p className="high">{city.main.temp_max}</p>
                    </div>
                </section>
            )
        });
    },

    render() {
        return (
            <div className="weather component">
                {(this.data.cities) ? this.renderCities() : 'loading'}
            </div>
        )
    }
});