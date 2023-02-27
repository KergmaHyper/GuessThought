import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Header from "./header.jsx";
import SetPage from "./SetPage.jsx";
import Navs from "./Navs.jsx";
import About from "./about.jsx";

function RouterApp(props) {

    return (
        <Router>
            <div>
                <Navs />
                <Routes>
                    <Route path="/" element={<SetPage screen="start" lang="ukr" />} />
                    <Route path="/about" element={<About lang="ukr" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default RouterApp;