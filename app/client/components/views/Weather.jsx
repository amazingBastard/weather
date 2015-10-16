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

                <div className="temp">
                    <h1 className="current">{this.data.city.main.temp}ºC</h1>

                    <p className="low">low: {this.data.city.main.temp_min}</p>

                    <p className="high">high: {this.data.city.main.temp_max}</p>
                </div>
            </figure>
        )
    },

    render() {
        return (
            <main className="animated fadeIn weather view">
                {(this.data.city) ? this.renderFigure() : <Loading />}
                <a className="back button" href="/">Choose another city</a>
            </main>
        )
    }
});