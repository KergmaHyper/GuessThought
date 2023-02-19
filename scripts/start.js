//import React from "react";
//import table from "./table";

const cont = document.getElementById('root');
const root = ReactDOM.createRoot(cont);
function table(a, b, c) {
  return /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, a), /*#__PURE__*/React.createElement("td", null, b), /*#__PURE__*/React.createElement("td", null, c)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, a + 1), /*#__PURE__*/React.createElement("td", null, b + 1), /*#__PURE__*/React.createElement("td", null, c + 1)));
}
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("nav", null)), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("aside", {
    className: "left-side"
  }), /*#__PURE__*/React.createElement("div", {
    className: "main-div"
  }, table(1, 2, 3)), /*#__PURE__*/React.createElement("aside", {
    className: "right-side"
  })), /*#__PURE__*/React.createElement("footer", null));
}
root.render( /*#__PURE__*/React.createElement(App, null));
