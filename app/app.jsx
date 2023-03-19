import React from "react";
import * as ReactDOM from 'react-dom/client';
import RouterApp from "./components/router.jsx";


const appElem = document.getElementById("app");
const appRoot = ReactDOM.createRoot(appElem);

function appRender(e) {
    console.log("App.jsx: ", e);
    appRoot.render(<RouterApp event={e} />);
}
// window.addEventListener("resize", (e) => {
//     appRender(e);
// })

appRender(null);