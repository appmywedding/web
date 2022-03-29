import { combineReducers } from 'redux';
import auth from './auth';
import invited from './invited';

const allReducers = combineReducers({
    auth,
    invited,
});

export default allReducers;