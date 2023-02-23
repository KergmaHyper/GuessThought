import React, { Component } from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Main from "./main.jsx";
import "../../css/styles.css";

class SetPage extends Component {
    constructor(props) {
        super(props);
        this.state = { screen: this.props.screen, lang: this.props.lang };
        this.setStateSTART = this.setStateSTART.bind(this);
        this.setStateTABLE = this.setStateTABLE.bind(this);
        this.setStateABOUT = this.setStateABOUT.bind(this);
        this.swLang = this.swLang.bind(this);
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
    swLang() {
        (this.state.lang === "ukr") ?
            this.setState({ lang: "eng" }) :
            this.setState({ lang: "ukr" });
        return this.state.lang;
    }

    render() {
        return (
            <div>
                <header>
                    <Header call={this} lang={this.state.lang} />
                </header>
                <main>
                    <Main state={this.state.screen} lang={this.state.lang} />
                </main>
                <footer>
                    <Footer lang={this.state.lang} />
                </footer>
            </div>
        );
    }
}
export default SetPage;