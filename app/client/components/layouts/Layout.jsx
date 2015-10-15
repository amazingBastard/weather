Layout = React.createClass({
    render() {
        return (
            <div className="layout">
                <Header />

                {this.props.content}

                <Footer />
            </div>
        );
    }
});