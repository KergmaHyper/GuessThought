import React from "react";
import Start from "./start.jsx";
import Table from "./table.jsx";
import About from "./about.jsx";
import { Langs } from "./langs.js";
import Article from "./article.jsx";
import "../../css/mainpage.css"

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="mainpage">
                <Article content="Ця сторінка може вгадувати ваші думки" />
                <Article content="Ще декілка строчок пояснень" />
                <Article content="Ще декілка строчок пояснень" />
                <Article content="Ще декілка строчок пояснень" />
                <Article content="Ще декілка строчок пояснень" />
                <button onClick={(this.props.state) ? this.props.onClick : null}>
                    {(this.props.state) ? "Натисни" : this.props.symbol}
                </button>
            </div>
        );
    }
}
export default Main;