import React from "react";
import { Container } from "flux/utils";
import PhoneStore from "../data/PhoneStore";
import AppViews from "../views/AppViews"
import Actions from "../data/Actions";

class AppContainer extends React.Component {
    static getStores() {
        return [PhoneStore];
    }
    static calculateState() {
        return {
            phohes: PhoneStore.getState(),
            onAddItem: Actions.addItem,
            onRemoveItem: Actions.removeItem
        }
    }
    render() {
        return (
            <AppViews phones={this.state.phohes}
                onAddItem={this.state.onAddItem}
                onRemoveItem={this.state.onRemoveItem}
            />
        )
    }

}
export default Container.create(AppContainer);