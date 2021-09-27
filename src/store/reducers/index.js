import { combineReducers } from "redux";
import personListReducer from "./personListReducer";

const reducers = combineReducers({
  personListReducer,
});
export default reducers;
