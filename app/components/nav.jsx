import React from "react";
import { Langs } from "./langs";

class Nav extends React.Component {
    lang = {};
    constructor(props) {
        super(props);
        this.butStart = this.butStart.bind(this);
        this.butTable = this.butTable.bind(this);
        this.butAbout = this.butAbout.bind(this);
        this.butLang = this.butLang.bind(this);
        this.state = { thisSetPage: this.props.call };
        this.lang = Langs.getLang(this.props.lang);
    }
    butStart() {
        console.log("press but START state.");
        this.state.thisSetPage.setStateSTART();
    }
    butTable() {
        console.log("press but TABLE state.");
        this.state.thisSetPage.setStateTABLE();
    }
    butAbout() {
        console.log("press but ABOUT state.");
        this.state.thisSetPage.setStateABOUT();
    }
    butLang() {
        this.state.thisSetPage.swLang();
    }

    render() {
        this.lang = Langs.getLang(this.props.lang);
        return (
            <div>
                <div>
                    <button onClick={this.butStart}> {this.lang.capButStart} </button>
                    <button onClick={this.butTable}>{this.lang.capButTable}</button>
                    <button onClick={this.butAbout}>{this.lang.capButAbout}</button>
                    <button onClick={this.butLang}>{this.props.lang === "ukr" ? "ENG" : "UKR"}</button>
                </div>
            </div>
        );
    }
}
export default Nav;