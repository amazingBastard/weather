App = React.createClass({
    render() {
        return (
            <div className="layout">
                <header className="header">
                    <Header />
                </header>
                <main className="main">
                    <Weather />
                </main>
                <footer className="footer">
                    <Footer />
                </footer>
            </div>
        );
    }
});