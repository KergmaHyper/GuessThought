const React = require("react");
const ReactDOM = require("react-dom/client");
const Header = require("./components/header");
const Article = require("./components/article");

const header = "HEAD ARTICLE";
const article = "После одного из заседаний N-ского мирового съезда судьи собрались в совещательной комнате, чтобы снять свои мундиры, минутку отдохнуть и ехать домой обедать.";

const appElem = document.getElementById("app");
const appRoot = ReactDOM.createRoot(appElem);

appRoot.render(
    <div>
        <Header text={header} />
        <Article content={article} />
    </div>
)
