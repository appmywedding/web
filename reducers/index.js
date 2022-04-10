import { combineReducers } from 'redux';
import auth from './auth';
import invited from './invited';
import items from './items';
import { LOGOUT } from '../actions/auth';

const allReducers = combineReducers({
    auth,
    invited,
    items,
});

const rootReducer = (state, action) => {
    // let x = LOGOUT;
    // debugger;
    // if (action.type === LOGOUT) {
    //     return allReducers({}, action)
    // }
    return allReducers(state, action);
}

export default rootReducer;