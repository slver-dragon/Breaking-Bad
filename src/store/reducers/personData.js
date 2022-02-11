import {
  GET_PERSON,
  GET_PERSON_LIST,
  GET_CHARACTERS_MAX_LENGTH,
  LOADING_ERROR,
  LOADING_IN_PROGRESS,
  GET_QUOTE,
} from "../actionTypes/getPersonData";

export const initialState = {
  characters: [],
  charactersMaxLength: 0,
  character: {},
  randomQuote: "",
  isLoad: false,
  errorValue: "",
};

const personData = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERSON_LIST:
      return {
        ...state,
        characters: action.payload,
      };
    case GET_PERSON:
      return {
        ...state,
        character: action.payload,
      };
    case GET_CHARACTERS_MAX_LENGTH:
      return {
        ...state,
        charactersMaxLength: action.payload,
      };
    case GET_QUOTE:
      return {
        ...state,
        randomQuote: action.payload,
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
    default:
      return state;
  }
};

export default personData;
