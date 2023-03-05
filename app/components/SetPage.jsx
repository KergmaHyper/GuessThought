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
        this.symbols = ["©", "⌂", "Ꚛ", "#", "ჰ", "∆", "ჵ", "Წ", "Ѧ", "Ѱ"];
    }
    random(max) {
        return Math.floor(Math.random() * max);
    }
    swTable() {
        this.setState((prState) => {
            return prState.table
                ? { table: !prState.table }
                : { symbol: this.random(10), table: !prState.table };
        })
    }

    render() {
        return (
            <div>
                <main>
                    <Main onClick={this.swTable}
                        state={this.state.table}
                        symbol={this.symbols[this.state.symbol]} />
                    <div className="table-place">
                        {(this.state.table) ?
                            <GenTable symbol={this.state.symbol}
                                symbols={this.symbols}
                                random={this.random}
                            /> :
                            <TryAgain
                                symbol={this.state.symbol}
                                symbols={this.symbols} />}
                    </div>
                </main>
            </div>
        );
    }
}
export default SetPage;