import React, { useState } from "react";
import Option from "./option.jsx";


function Select(props) {
    const [val, setVal] = useState("");

    const changeSelect = function (ev) {
        setVal((prevState) => {
            console.log("curr option:" + ev.target.value);
            return ev.target.value;
        });
        props.onChange(ev);
    }

    return (
        <select onChange={changeSelect} value={val} name={props.name}>
            {props.array.map(
                (el) => <Option key={el.toString()} value={el} caption={el} />
            )}
        </select>
    );
}
export default Select;

