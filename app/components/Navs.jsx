import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/navlink.css";
import "../../css/flex.css"
import Clock from "./Clock.jsx";


function Navs(props) {
    return (
        <div className="flex center">
            <div className="flex link-container between">
                <div>
                    <NavLink to="/GuessThought" className="link">Головна</NavLink>
                    <NavLink to="/about" className="link">About</NavLink>
                </div>

                <div className="clock">
                    <Clock />
                </div>
            </div>
        </div>
    );
}


{/* <div>
                <NavLink to="/present" className="link">Presetation</NavLink>
            </div> */}


export default Navs;
