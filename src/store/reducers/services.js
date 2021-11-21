import {
  HOME_PAGE_LOAD,
  CATALOG_FORMAT,
  CHANGE_ELEMENT_COUNT,
  SET_CURRENT_PAGE,
} from "../actionTypes/services";

export const initialState = {
  isHomePage: true,
  isCardsList: false,
  currentPage: 1,
  pageElementCount: 10,
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
    case CHANGE_ELEMENT_COUNT:
      return {
        ...state,
        pageElementCount: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default services;
