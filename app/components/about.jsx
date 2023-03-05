import React from "react";
import Article from "./article.jsx";

class About extends React.Component {
    lang = {}
    render() {
        return (
            <h1>
                <Article content="About Page" />
            </h1>
        );
    }
}
export default About;