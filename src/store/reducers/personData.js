import {
  LOAD_PERSON,
  LOADING_ERROR,
  LOADING_IN_PROGRESS,
  GET_QUOTE,
} from "../actionTypes/getPersonData";

export const initialState = {
  characters: [],
  randomQuote: "",
  isLoad: false,
  errorValue: "",
};

const personData = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PERSON:
      return {
        ...state,
        characters: action.payload,
      };
    case LOADING_ERROR:
      return {
        ...state,
        errorValue: action.payload,
      };
    case LOADING_IN_PROGRESS:
      return {
        ...state,
        isLoad: action.payload,
      };
    case GET_QUOTE:
      return {
        ...state,
        randomQuote: action.payload,
      };
    default:
      return state;
  }
};

export default personData;
