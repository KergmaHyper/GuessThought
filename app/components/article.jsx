import React from "react";
function Article(props) {
    return <div className={props.className}>{props.content}</div>;
}
export default Article;