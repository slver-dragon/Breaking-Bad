import { combineReducers } from "redux";
import personData from "./personData";
import services from "./services";

const reducers = combineReducers({
  personData, services,
});
export default reducers;
