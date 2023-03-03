import React from "react";
import "../../css/flex.css";

function GenTable(props) {
    const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div>
            <h2>Generate Table Page</h2>

            <ul className="flex between">
                {props.symbols.map((item) => <li key={item} className="no-marker list1">{item}</li>)}
            </ul>
            <table>
                <tbody>
                    {rows.map((itemR, i) => {
                        return (
                            <tr key={itemR}>
                                {columns.map((ItemC, j) => {
                                    return (
                                        <td key={ItemC}>
                                            {itemR * 10 + ItemC}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>



            <h1>{props.symbols[props.symbol]}</h1>
        </div>)
}

export default GenTable;