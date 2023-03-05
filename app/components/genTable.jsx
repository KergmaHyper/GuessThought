import React from "react";
import "../../css/flex.css";
import "../../css/mainpage.css"

function GenTable(props) {
    const base = 4 + props.random(5);
    const colunm = 6;
    const LenArray = 78;

    const nums = Array.from({ length: LenArray }, (el, index) => index + base);
    return (
        <div className="mainpage flex center">
            <table>
                <tbody>
                    {nums.map((el, ind) => (ind % colunm === 0) &&
                        <tr key={el}>
                            {nums
                                .slice(ind, ind + colunm)
                                .map((subEl, subInd) =>
                                    <td key={subEl}>
                                        {subEl}
                                        {" "}
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