import { SET_USER, CLEAR_USER } from '../actions/auth';

const initialState = {
    user: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return action.user;
        case CLEAR_USER:
            return null;
        default:
            return state;
    }
};

export default authReducer;
