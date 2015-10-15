SelectCity = React.createClass({
    mixins: [ReactMeteorData],
    propTypes: {},

    shouldComponentUpdate() {
        return true;
    },

    getMeteorData() {
        var data = {},
            handle = api.subscribe('rest2ddp', 'open-weather', {});

        if (handle.ready()) {
            data.cityNames = Openweather.find({}, {fields: {name: 1}}).fetch();
        }

        return data;
    },

    renderOptions() {
        return this.data.cityNames.map(function (city) {
            return (
                <option className="select option" value={city.name} key={city._id}>{city.name}</option>
            )
        });
    },

    render() {
        return (
            <form className="select city form">
                <select className="select input">
                    {(this.data.cityNames) ? this.renderOptions() : <Loading />}
                </select>
            </form>
        )
    }
});