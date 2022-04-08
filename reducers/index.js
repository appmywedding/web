import { combineReducers } from 'redux';
import auth from './auth';
import invited from './invited';
import items from './items';

const allReducers = combineReducers({
    auth,
    invited,
    items,
});

export default allReducers;