const cont = document.getElementById('root');
const root = ReactDOM.createRoot(cont);
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("nav", null)), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("aside", {
    class: "left-side"
  }), /*#__PURE__*/React.createElement("div", {
    class: "main-div"
  }), /*#__PURE__*/React.createElement("aside", {
    class: "right-side"
  })), /*#__PURE__*/React.createElement("footer", null));
}
root.render( /*#__PURE__*/React.createElement(App, null));
