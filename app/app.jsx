import React from "react";
import * as ReactDOM from 'react-dom/client';
import RouterApp from "./components/router.jsx";


const appElem = document.getElementById("app");
const appRoot = ReactDOM.createRoot(appElem);

appRoot.render(<RouterApp />);
