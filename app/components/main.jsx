import React from "react";
import Start from "./start.jsx";
import Table from "./table.jsx";
import About from "./about.jsx";
import { Langs } from "./langs.js";

class Main extends React.Component {
    lang = {}
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                {this.props.state === "start" && <Start lang={this.props.lang} />}
                {this.props.state === "table" && <Table lang={this.props.lang} />}
                {this.props.state === "about" && <About lang={this.props.lang} />}
            </div>
        );
    }
}
export default Main;