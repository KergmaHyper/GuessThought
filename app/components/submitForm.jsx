import React, { useState } from "react";
import Input from "./input.jsx";
import Select from "./select.jsx";
import TextArea from "./textArea.jsx";
import "../../css/color.css";

function SubmitForm(props) {
    const [value, setValue] = useState("");
    const [valueValid, setvalueValid] = useState(false);

    const change = function (event) {
        setValue((prev) => {
            console.log("prev: " + event.target.name);
            return event.target.value;
        });

    }

    const pressSubmit = function (event) {
        alert("this value=" + value);
        event.preventDefault();
    }
    const isValid = function (val) { return true; }

    return (
        <form onSubmit={pressSubmit}>
            <label>
                {props.labelCaption}
                {props.type === "input" && <Input onChange={change} name={props.name}
                    className={props.isValidFunc(value) ? "border-green" : "border-red"}
                />}
                {props.type === "text" && <TextArea onChange={change} name={props.name} />}
                {props.type === "select" && <Select onChange={change} array={props.array} name={props.name} />}
                {/* {props.type === "file" && <input type="file" onChange={change} name={props.name} />} */}
            </label>
            <input type="submit" value={props.value} />
        </form>
    )

}
SubmitForm.defaultProps = {
    labelCaption: "defaultName",
    type: "input",
    name: "name",
    value: "Send",
    array: ["Limon", "Orange", "Lime", "Pomelo"],
    isValidFunc: function (val) { return true; }
}
export default SubmitForm;