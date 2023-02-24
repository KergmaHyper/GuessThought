import React from "react";
import Article from "./article.jsx";
import ButtonHook from "./ButtonHook.jsx";
import { Langs } from "./langs.js";
import Button from "./testButton.jsx";

class Start extends React.Component {
    lang = {}
    render() {
        this.lang = Langs.getLang(this.props.lang);
        return (
            <div>
                <h1>
                    <Article content={this.lang.msgMainPage} />
                </h1>
                <Button dif={1} />
                <ButtonHook dif={2} />
                <ButtonHook dif={4} />

            </div>
        );
    }
}
export default Start;


