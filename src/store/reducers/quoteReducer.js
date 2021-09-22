import {
  GET_QUOTE,
  QUOTE_LOADER_VALUE,
  ERROR_GETTING_QUOTE,
} from "../actionTypes";

import { initialState } from "./cardListReducer";

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUOTE:
      return {
        ...state,
        quote: action.payload,
      };
    case QUOTE_LOADER_VALUE:
      return {
        ...state,
        isFetching: action.payload,
      };
    case ERROR_GETTING_QUOTE:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};

export default quoteReducer;
