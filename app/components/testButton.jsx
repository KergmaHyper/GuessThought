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
    componentDidMount() {
        console.log("componentDidMount");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
        this.logState();
    }
    componentWillUnmount() {
        console.log("componentWillUnmout")
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
        this.setState(this.decCount);
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
                <button onClick={() => { this.setState({ counter: 0, dif: 0 }) }}>reset</button>
                <button onClick={this.pressDecButton}>--</button>
                <button onClick={() => this.setState((prSt) => ({ counter: prSt.counter + prSt.dif })
                )}>++</button>
            </div>
        );
    }
}
export default Button;