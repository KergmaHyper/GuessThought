import React from "react";
import GetTime from "./getTime.jsx";
import Nav from "./nav.jsx";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Nav call={this.props.call} />
                <GetTime />
            </div>
        );
    }
}
export default Header;