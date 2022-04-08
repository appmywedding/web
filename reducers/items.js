
import * as actions from '../actions/items';

const initialState = {
    items: null,
};

function jsonConcat(j1, j2) {
    for (var key in j2) {
        j1[key] = j2[key];
    }
    return j1;
}

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_ITEMS:
            return { ...state, items: action.items };
        case actions.ADD_ITEMS:
            return { ...state, items: jsonConcat(state.items, action.items) };
        case actions.CLEAR_ITEMS:
            return null;
        default:
            return state;
    }
};

export default itemsReducer;


