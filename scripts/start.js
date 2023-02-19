const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
function App() {
  return /*#__PURE__*/React.createElement("div", null, " root root block", /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("nav", null, "nav block")), /*#__PURE__*/React.createElement("main", null, "main block", /*#__PURE__*/React.createElement("aside", {
    class: "left-side"
  }, "left    side"), /*#__PURE__*/React.createElement("div", {
    class: "main-div"
  }, "main div"), /*#__PURE__*/React.createElement("aside", {
    class: "right-side"
  }, "right side")), /*#__PURE__*/React.createElement("footer", null, " footer"));
}
root.render( /*#__PURE__*/React.createElement(App, null));
