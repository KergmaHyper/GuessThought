import React from "react";
import Phone from "./Phone";


class AppViews extends React.Component {
    constructor(props) {
        super(props);
        this.state = { newItem: "" }


    }
    render() {
        return (
            <div>
                here will be ADD ITEM function.
                <h2>List phones</h2>
                <div>
                    {
                        this.props.phones.map((item) =
                            <Phone key={item} text={item} onRemove={this.props.onRemove} />)
                    }
                </div>
            </div>
        )
    }



}
export default AppViews;