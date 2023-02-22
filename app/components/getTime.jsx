import React from "react";

class GetTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = { curTime: "Let There Be Light!" };
        setInterval(() => { this.setState({ curTime: new Date().toLocaleTimeString() }) }, 1000)
    }
    render() { return (<sup>{this.state.curTime}</sup>); }
}
export default GetTime;