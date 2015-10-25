function roundTemp(temp) {
    if (temp) {
        return <span className="meta">{ Math.round(temp) }<sup>º</sup>F</span>;
    } else {
        return null;
    }
}

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
            data.city = Openweather.findOne({name: this.props.name});
        }

        return data;
    },

    renderFigure() {
        return (
            <figure className="city figure" key={this.data.city._id}>
                <figcaption className="caption">
                    <h1 className="name">{this.data.city.name}</h1>

                    <p className="description">[{this.data.city.weather[0].description}]</p>
                </figcaption>

                <div className="animated fadeInUp temp">
                    <h1 className="current">
                        {roundTemp(this.data.city.main.temp)}
                        <small className="range">{roundTemp(this.data.city.main.temp_min)}
                            - {roundTemp(this.data.city.main.temp_max)}</small>
                    </h1>
                    <div className="meta">
                        <p className="pressure">Pressure [{this.data.city.main.pressure}]</p>

                        <p className="humidity">Humidity [{this.data.city.main.humidity}]</p>

                        <p className="wind">Wind Speed [{this.data.city.wind.speed}]</p>
                    </div>
                </div>
            </figure>
        )
    },

    render() {
        return (
            <main className="animated fadeIn weather view">
                {(this.data.city) ? this.renderFigure() : <Loading />}
                <a className="back button" href="/">
                    <span className="label">
                        Choose another city
                    </span>
                </a>
            </main>
        )
    }
});