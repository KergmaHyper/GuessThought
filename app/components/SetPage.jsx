import React, { Component } from "react";
import Main from "./main.jsx";
import "../../css/styles.css";
import GenTable from "./genTable.jsx";
import TryAgain from "./tryAgain.jsx";

class SetPage extends Component {
    constructor(props) {
        super(props);
        this.state = { table: true, symbol: this.random(10) };
        this.swTable = this.swTable.bind(this);
        this.symbols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    }
    random(max) {
        return Math.floor(Math.random() * max);
    }
    swTable() {
        this.setState((prState) => {
            if (!prState.table) this.setState({ symbol: this.random(10) })
            return { table: !prState.table }
        })
    }

    render() {
        return (
            <div>
                <main>
                    <Main onClick={this.swTable} state={this.state.table} symbol={this.symbols[this.state.symbol]} />
                    <div className="table-place">
                        {(this.state.table) ?
                            <GenTable symbol={this.state.symbol} symbols={this.symbols} /> :
                            <TryAgain onClick={this.swTable} symbol={this.state.symbol} symbols={this.symbols} />}
                    </div>
                </main>
            </div>
        );
    }
}
export default SetPage;