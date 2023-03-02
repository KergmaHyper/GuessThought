import { ReduceStore } from "flux/utils"
import Immutable from "immutable";
import ActionTypes from "./ActionTypes";
import PhonesDispatcher from "./PhonesDispatcher"


class PhoneStore extends ReduceStore {
    constructor() {
        super(PhonesDispatcher);
    }

    getInitialState() {
        return Immutable.List.of("Iphone 14", "Readmi Note 8 Pro");
    }
    reduce(state, action) {
        switch (action.type) {

            case ActionTypes.ADD_ITEM:
                if (action.text) {
                    return state.push(action.text)
                }
                return state;

            case ActionTypes.REMOVE_ITEM:
                let index = state.indexOf(action.text);
                if (index > -1) {
                    return state.delete(index)
                }
                return state;

            default:
                return state;
        }
    }



}
export default new PhoneStore();