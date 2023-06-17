
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
            switch(action.itemType) {
                case 'djs': 
                let dj = [...state.dj];
                dj = dj.concat(action.items)
                return {...state, dj}
                case 'dresses': 
                let dresses = [...state.dresses];
                dresses = dresses.concat(action.items);
                return {...state, dresses}
                case 'halls': 
                let halls = [...state.halls];
                halls = halls.concat(action.items);
                return {...state, halls}
            }

        case actions.CLEAR_ITEMS:
            return null;
        default:
            return state;
    }
};

export default itemsReducer;



/**
 * 
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
            let newState = {...state};
            switch(action.itemType) {
                case 'djs': 
                let dj = [...state.dj];
                dj.push(action.items);
                newState.dj = dj;
                case 'dresses': 
                let dresses = [...state.dresses];
                dresses.push(action.items);
                newState.dresses = dresses;
                case 'halls': 
                let halls = [...state.halls];
                halls = halls.concat(action.items);
                newState.halls = halls;
            }
            return newState;

        case actions.CLEAR_ITEMS:
            return null;
        default:
            return state;
    }
};

export default itemsReducer;



 */