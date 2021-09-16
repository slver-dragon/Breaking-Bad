import {
  IMPORT_DATA,
  IMPORT_ERROR,
  IMPORT_IN_PROGRESS,
} from "../actionTypes/importData";
import { initialState } from "../repository/store"

const cardListReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMPORT_DATA:
      return { ...state, cards: [action.payload], isLoad: false };
    case IMPORT_ERROR:
      return null;
    case IMPORT_IN_PROGRESS:
      return { ...state, isLoad: true };
    default:
      return state;
  }
};

export default cardListReducer;