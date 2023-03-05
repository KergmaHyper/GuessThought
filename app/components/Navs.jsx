import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/navlink.css";
import "../../css/flex.css"
import Clock from "./Clock.jsx";


function Navs(props) {
    return (
        <div className="flex between">
            <div className="flex center">
                <NavLink to="/" className="link">Додаток</NavLink>
            </div>
            <div>
                <NavLink to="/about" className="link">About</NavLink>
            </div>
            <div><Clock /></div>
        </div>
    );
}


{/* <div>
                <NavLink to="/present" className="link">Presetation</NavLink>
            </div> */}


export default Navs;
