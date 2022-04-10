import { LOGIN, LOGOUT } from '../actions/auth';

const initialState = {
    user: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            action.user.isAdmin = action.user.role === 'admin';
            return { ...state, user: action.user };
        case LOGOUT:
            return null;
        default:
            return state;
    }
};

export default authReducer;
