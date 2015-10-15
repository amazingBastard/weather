Layout = React.createClass({
    render() {
        return (
            <layout className="animated fadeIn layout">
                <Header />

                {this.props.content}

                <Footer />
            </layout>
        );
    }
});