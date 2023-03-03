import React from "react";
import "../../css/flex.css";

function GenTable(props) {

    return (
        <div>
            <h2>Generate Table Page</h2>

            <ul className="flex between">
                {props.symbols.map((item) => <li key={item} >{item}</li>)}
            </ul>
            <h2>{props.symbols[props.symbol]}</h2>
        </div>)
}

export default GenTable;