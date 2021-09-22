import {
  IMPORT_DATA,
  IMPORT_ERROR,
  IMPORT_IN_PROGRESS,
} from "../actionTypes/importData";

export const initialState = {
  cards: [],
  isLoad: false,
  isError: false,
};

const cardListReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMPORT_DATA:
      return {...state, cards: action.payload};
    case IMPORT_ERROR:
      return { ...state, isError: action.payload};
    case IMPORT_IN_PROGRESS:
      return { ...state, isLoad: action.payload};
    default:
      return state;
  }
};

export default cardListReducer;