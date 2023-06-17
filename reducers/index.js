import { combineReducers } from "redux";
import auth from "./auth";
import invited from "./invited";
import items from "./items";

const allReducers = combineReducers({
  auth,
  invited,
  items,
});

const rootReducer = (state, action) => allReducers(state, action);

export default rootReducer;
