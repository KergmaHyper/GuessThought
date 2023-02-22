import React from "react";
import GetTime from "./getTime.jsx";

function Header(props) {
    return <h2>
        {/* {props.text} */}
        <GetTime />
    </h2>;
}
export default Header;