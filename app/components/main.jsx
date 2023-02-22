import React from "react";
import Article from "./article.jsx";
import Start from "./start.jsx";
import Table from "./table.jsx";
import About from "./about.jsx";

class Main extends React.Component {
    render() {
        return (
            <div>
                {/* <Article content="There is call Article from Main.jsx" /> */}
                {/* <h2>  <Article content={this.props.state} /> </h2> */}
                {this.props.state === "start" && <Start />}
                {this.props.state === "table" && <Table />}
                {this.props.state === "about" && <About />}


            </div>
        );
    }
}
export default Main;