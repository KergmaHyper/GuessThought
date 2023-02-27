import React from "react";

class GetTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = { curTime: "Let There Be Light!" };
    }
    componentDidMount() {
        this.Timer = setInterval(() => {
            this.setState({ curTime: new Date().toLocaleTimeString() });
            // console.log(this.state.curTime, "timer: ", this.Timer);
        }, 1000);
        console.log("set Timer:", this.Timer);
    }
    componentWillUnmount() {
        clearInterval(this.Timer);
        console.log("Timer cleared. Timer: ", this.Timer);
    }
    render() { return (<sup>{this.state.curTime}</sup>); }
}

export default GetTime;