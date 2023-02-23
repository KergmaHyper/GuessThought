import React from "react";

class Footer extends React.Component {

    render() {
        return (
            <div>
                This Footer site.
                <h2> {(this.props.lang === "ukr") ?
                    "Поточна мова: " :
                    "Current language is: "}
                    {this.props.lang} </h2>
            </div>
        );
    }
}
export default Footer;