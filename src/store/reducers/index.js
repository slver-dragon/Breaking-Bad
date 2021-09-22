import { combineReducers } from "redux";
import cardListReducer from "./cardListReducer";
import quoteReducer from "./quoteReducer";

const reducers = combineReducers({
  cardListReducer,
  quoteReducer
});
export default reducers;