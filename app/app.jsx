import React from "react";
import * as ReactDOM from 'react-dom/client';
import SetPage from "./components/SetPage.jsx";


const appElem = document.getElementById("app");
const appRoot = ReactDOM.createRoot(appElem);

function renderApp() { appRoot.render(<SetPage screen="start" />); };
renderApp();
