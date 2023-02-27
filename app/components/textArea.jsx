import React from "react";

function TextArea(props) {
    return (
        <textarea name={props.name} onChange={props.onChange} />);
}
TextArea.defaultProps = {
    name: "name"
}
export default TextArea;