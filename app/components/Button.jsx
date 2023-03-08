import React from "react";
import "../../css/flex.css"
import "../../css/button.css"



function Button(props) {
    return (
        <div className="flex center ">
            <button onClick={props.onClick} className={"button-symb "} >
                {(props.state) ? props.trueCaption : props.falseCaption}
            </button>
        </div>
    )
}
// Button.defaultProps = { unvisible: false }

export default Button;