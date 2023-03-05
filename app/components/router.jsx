import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import SetPage from "./SetPage.jsx";
import Navs from "./Navs.jsx";
import About from "./about.jsx";
import Present from "./Present.jsx";

function RouterApp(props) {

    return (
        <Router>
            <div>

                <Routes>
                    <Route path="/" element={<SetPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/present" element={<Present />} />
                </Routes>
                <Navs />
            </div>
        </Router>
    );
}

export default RouterApp;