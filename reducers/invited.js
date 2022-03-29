import { SET_INVITED, CLEAR_INVITED } from '../actions/invited';

const initialState = {
    invited: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INVITED:
            return {...state, invited: action.invited};
        case CLEAR_INVITED:
            return null;
        default:
            return state;
    }
};

export default authReducer;
