import React from "react";
import "../../css/flex.css";

function GenTable(props) {
    const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const columns = [0, 1, 2, 3, 4, 5, 6, 7];
    const base = 5;
    const nums = Array.from({ length: 80 }, (el, index) => index + base);
    // from BASE to BASE+79
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
                                            {nums[itemR * 10 + ItemC]}
                                            {((nums[itemR * 10 + ItemC]) % 9 === 0)
                                                ? props.symbols[props.symbol]
                                                : props.symbols[props.random(10)]}
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