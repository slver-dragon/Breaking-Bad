import {
  LOAD_PERSON,
  LOADING_ERROR,
  LOADING_IN_PROGRESS,
} from "../actionTypes/importData";

export const initialState = {
  characters: [],
  isLoad: false,
  errorValue: '',
};

const personListReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PERSON:
      return {
        ...state,
        characters: action.payload
      };
    case LOADING_ERROR:
      return {
        ...state,
        isError: action.payload
      };
    case LOADING_IN_PROGRESS:
      return {
        ...state,
        isLoad: action.payload
      };
    default:
      return state;
  }
};

export default personListReducer;