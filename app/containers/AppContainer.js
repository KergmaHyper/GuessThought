import React from "react";
import { Container } from "flux/utils";
import PhoneStore from "../data/PhoneStore";
import ActionTypes from "../data/ActionTypes";
import AppView from "../views/AppView"

class AppContainer extends React.Component {
    static getStores() {
        return [PhoneStore];
    }
    static calculateState() {
        return {
            phohes: PhoneStore.getState(),
            onAddItem: ActionTypes.ADD_ITEM,
            onRemoveItem: ActionTypes.REMOVE_ITEM
        }
    }
    render() {
        return (
            <AppView phones={this.state.phohes}
                onAddItem={onAddItem}
                onRemoveItem={onRemoveItem}
            />
        )
    }

}
export default Container.create(AppContainer);