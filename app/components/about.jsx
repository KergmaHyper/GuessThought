import React from "react";
import Article from "./article.jsx";
import { Langs } from "./langs.js";

class About extends React.Component {
    lang = {}
    render() {
        this.lang = Langs.getLang(this.props.lang);
        return (
            <h1>
                <Article content={this.lang.msgAboutPage} />
            </h1>
        );
    }
}
export default About;