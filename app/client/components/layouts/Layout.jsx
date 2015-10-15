Layout = React.createClass({
    render() {
        return (
            <layout className="layout">
                <Header />

                {this.props.content}

                <Footer />
            </layout>
        );
    }
});