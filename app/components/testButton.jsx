import React from "react";

class Button extends React.Component {


    constructor(props) {
        super(props);
        this.state = { counter: 0, dif: 1 };
        this.pressIncButton = this.pressIncButton.bind(this);
        this.incCount = this.incCount.bind(this);
        this.pressDecButton = this.pressDecButton.bind(this);
        this.decCount = this.decCount.bind(this);
        this.changeDif = this.changeDif.bind(this);
    }

    incCount(prevState, props) {
        return { counter: prevState.counter + prevState.dif };
    }
    decCount(prevState, props) {
        return { counter: prevState.counter - prevState.dif };
    }
    pressIncButton() {
        this.setState(this.incCount, this.logState);
    }
    pressDecButton() {
        this.setState(this.decCount, this.logState);
    }
    changeDif(event) {

        this.setState({ dif: parseInt(event.target.value) }, this.logState);
    }
    logState() { console.log(this.state); };
    render() {
        return (
            <div>
                <div><b>
                    Counter: <input type="number" value={this.state.counter} />
                    Increment: <input type="number" value={this.state.dif} onChange={this.changeDif} />
                </b></div>
                <button onClick={this.pressDecButton}>-- counter</button>
                <button onClick={this.pressIncButton}>++ counter</button>
            </div>
        );
    }
}
export default Button;