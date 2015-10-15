Weather = React.createClass({
    mixins: [ReactMeteorData],
    PropTypes: {},

    shouldComponentUpdate() {
        return true;
    },

    getMeteorData() {
        var data = {},
            handle = api.subscribe('rest2ddp', 'open-weather', {});

        if (handle.ready()) {
            data.city = 'New York';
            data.cities = Openweather.find({name: data.city}).fetch();
        }

        return data;
    },

    renderCities() {
        return this.data.cities.map(function (city) {

            return (
                <figure className="city" key={city._id}>
                    <figcaption className="caption">
                        <h1 className="name">{city.name}</h1>
                        <p className="description">{city.weather[0].description}</p>
                    </figcaption>

                    <div className="temp">
                        <h2 className="current">{city.main.temp}ºC</h2>

                        <p className="low">low: {city.main.temp_min}</p>

                        <p className="high">high: {city.main.temp_max}</p>
                    </div>
                </figure>
            )
        });
    },

    render() {
        return (
            <weather className="weather module">
                {(this.data.cities) ? this.renderCities() : <Loading />}
            </weather>
        )
    }
});