import React from "react";

class Phone extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: props.text };
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    onButtonClick(e) {
        this.props.onRemove(this.state.text);
    }

    render() {
        return (
            <div>
                <b>{this.state.text}</b>
                <button onClick={this.onButtonClick}>Remove</button>
            </div>
        )
    }

}
export default Phone;