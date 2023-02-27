import React from "react";
import * as ReactDOM from 'react-dom/client';
import { Route } from "react-router-dom";
import SetPage from "./components/SetPage.jsx";
import RouterApp from "./components/router.jsx";


const appElem = document.getElementById("app");
const appRoot = ReactDOM.createRoot(appElem);

function renderApp() {
    appRoot.render(
        // <SetPage screen="start" lang="ukr" />
        <RouterApp />

    );
};
renderApp();
