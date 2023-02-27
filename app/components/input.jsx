import React from "react";
import "../../css/color.css";

function Input(props) {
    const isValid = props.isValid;

    return (
        <input type="text" name={props.name} onChange={props.onChange} className={props.className} />);
}
Input.defaultProps = {
    name: "name"
}
export default Input;