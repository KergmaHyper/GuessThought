import React from "react";
import * as ReactDOM from 'react-dom/client';
import Header from "./components/header.jsx";
import Article from "./components/article.jsx";

const header = "HEAD ARTICLE Client";
const article = "После одного из заседаний N-ского мирового съезда судьи собрались в совещательной комнате, чтобы снять свои мундиры, минутку отдохнуть и ехать домой обедать.";

const appElem = document.getElementById("app");
const appRoot = ReactDOM.createRoot(appElem);

appRoot.render(
    <div>
        <Header text={header} />
        <Article content={article} />
    </div>
);
