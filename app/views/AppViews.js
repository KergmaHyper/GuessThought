import React from "react";
import Phone from "./Phone";


class AppViews extends React.Component {
    constructor(props) {
        super(props);
        this.state = { newItem: "" }
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);

    }
    onChange(e) {
        this.setState({ newItem: e.target.value });
    }
    onClick(e) {
        if (this.state.newItem) {
            this.props.onAddItem(this.state.newItem);
            this.setState({ newItem: "" });
        }

    }

    render() {
        return (
            <div>

                <input onChange={this.onChange} value={this.state.newItem} />
                <button onClick={this.onClick}>Add phone</button>
                <h2>List phones</h2>
                <div>
                    {
                        this.props.phones.map((item) =>
                            <Phone key={item} text={item} onRemove={this.props.onRemoveItem} />)
                    }
                </div>
            </div>
        )
    }



}
export default AppViews;