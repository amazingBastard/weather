Weather = React.createClass({
    mixins: [ReactMeteorData],
    PropTypes: {},

    shouldComponentUpdate() {
        return true;
    },

    getMeteorData() {
        var data = {},
            city = $('.select.input').val(),
            handle = api.subscribe('rest2ddp', 'open-weather', {});

        if (handle.ready()) {
            console.log(city);
            console.log($('.select.input').val());
            data.cities = Openweather.find({name: 'New York'}).fetch();
        }

        return data;
    },

    renderCities() {
        return this.data.cities.map(function (city) {
            return (
                <div className="city" key={city._id}>
                    <SelectCity />
                    <h1 className="location">
                        {city.name}
                        <small className="icon">{city.weather[0].description}</small>
                    </h1>

                    <div className="temp">
                        <h2 className="current">{city.main.temp}ºC</h2>

                        <p className="low">low: {city.main.temp_min}</p>

                        <p className="high">high: {city.main.temp_max}</p>
                    </div>
                </div>
            )
        });
    },

    render() {
        return (
            <div className="weather module">
                {(this.data.cities) ? this.renderCities() : <Loading />}
            </div>
        )
    }
});