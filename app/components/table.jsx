import React from "react";
import Article from "./article.jsx";
import Clock from "./Clock.jsx";
import GetTime from "./getTime.jsx";
import { Langs } from "./langs.js";
import List from "./list.jsx";
import SubmitForm from "./submitForm.jsx";

class Table extends React.Component {
    lang = {}
    render() {
        this.lang = Langs.getLang(this.props.lang);
        return (
            <div>
                <h1>
                    <Article content={this.lang.msgTablePage} />
                    {/* <GetTime /> */}
                </h1>
                <h2>
                    <Clock />
                    <List
                    // array={[1, 2, 3, 4, 5]}
                    />
                </h2>
                <SubmitForm
                    type="input"
                    name="inputName"
                    isValidFunc={val => val.toString().length > 2 ? true : false}
                />

            </div>
        );
    }
}
export default Table;