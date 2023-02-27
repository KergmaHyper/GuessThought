import React from "react";
function Option(props) {
    return (
        <option value={props.value}>{props.caption}</option>
    );
}
export default Option;
