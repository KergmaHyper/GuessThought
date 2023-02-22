import React from "react";
import SetPage from "./SetPage.jsx";
class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.butStart = this.butStart.bind(this);
        this.butTable = this.butTable.bind(this);
        this.butAbout = this.butAbout.bind(this);


        this.state = { thisSetPage: this.props.call };

        console.log("Call from SetPage");
        console.log(this.props.call);
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
    render() {
        return (
            <div>
                <button onClick={this.butStart}>state START</button>
                <button onClick={this.butTable}>state TABLE</button>
                <button onClick={this.butAbout}>state ABOUT</button>
            </div>
        );
    }
}
export default Nav;