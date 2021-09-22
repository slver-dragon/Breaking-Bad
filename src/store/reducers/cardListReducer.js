import {
  SET_CHARACTERS,
  CHANGE_CHARACTERS_LOADER_VALUE,
  ERROR_GETTING_CHARACTERS,
} from "../actionTypes";

export const initialState = {
  characters: [],
  quote: '',
  isFetching: false,
  isError: false,
};

const cardListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    case CHANGE_CHARACTERS_LOADER_VALUE:
      return {
        ...state,
        isFetching: action.payload,
      };
    case ERROR_GETTING_CHARACTERS:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};

export default cardListReducer;