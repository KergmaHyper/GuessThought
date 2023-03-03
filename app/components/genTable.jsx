import React from "react";
import "../../css/flex.css";

function GenTable(props) {
    const base = 1 + props.random(9);
    const colunm = 7;
    const LenArray = 84;

    const nums = Array.from({ length: LenArray }, (el, index) => index + base);
    return (
        <div>
            <table>
                <tbody>
                    {nums.map((el, ind) => (ind % colunm === 0) &&
                        <tr>
                            {nums.slice(ind, ind + colunm).map((subEl, subInd) =>
                                <td>
                                    {subEl}
                                    {(subEl % 9 === 0)
                                        ? props.symbols[props.symbol]
                                        : props.symbols[props.random(10)]}
                                </td>
                            )}
                        </tr>)}
                </tbody>
            </table>
            {/* <h1>{props.symbols[props.symbol]}</h1> */}
        </div >)
}

export default GenTable;