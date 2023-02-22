import React, { Component } from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Main from "./main.jsx";
import "../../css/styles.css";

class SetPage extends Component {
    constructor(props) {
        super(props);
        this.state = { screen: this.props.screen };
        this.setStateSTART = this.setStateSTART.bind(this);
        this.setStateTABLE = this.setStateTABLE.bind(this);
        this.setStateABOUT = this.setStateABOUT.bind(this);

    }
    setStateTABLE() {
        this.setState({ screen: "table" });
    }
    setStateSTART() {
        this.setState({ screen: "start" });
    }
    setStateABOUT() {
        this.setState({ screen: "about" });
    }

    render() {
        return (
            <div>
                <header>
                    <Header call={this} />
                </header>
                <main>
                    <Main state={this.state.screen} />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
}
export default SetPage;