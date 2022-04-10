
import * as actions from '../actions/items';

const initialState = {
    userItems: {},
    dj: [],
    dresses: [],
    halls: [],
};

function jsonConcat(j1, j2) {
    for (var key in j2) {
        j1[key] = j2[key];
    }
    return j1;
}

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_USER_ITEMS:
            return { ...state, userItems: jsonConcat(state.userItems, action.items) };
        case actions.ADD_ITEMS:

        case actions.CLEAR_ITEMS:
            return null;
        default:
            return state;
    }
};

export default itemsReducer;


