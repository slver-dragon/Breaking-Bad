import {
  HOME_PAGE_LOAD,
  CATALOG_FORMAT,
} from "../actionTypes/services";

export const initialState = {
  isHomePage: true,
  isCardsList: false,
};

const services = (state = initialState, action) => {
  switch (action.type) {
    case HOME_PAGE_LOAD:
      return {
        ...state,
        isHomePage: action.payload,
      };
      case CATALOG_FORMAT:
        return {
          ...state,
          isCardsList: action.payload,
        };
    default:
      return state;
  }
};

export default services;
