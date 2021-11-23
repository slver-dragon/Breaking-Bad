import {
  HOME_PAGE_LOAD,
  CATALOG_FORMAT,
  CHANGE_ELEMENT_COUNT,
  SET_CURRENT_PAGE,
  SET_SELECTION_REQUEST,
} from "../actionTypes/services";

export const initialState = {
  selectionRequest: "all",
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
      case SET_SELECTION_REQUEST:
        return {
          ...state,
          selectionRequest: action.payload,
        };
    default:
      return state;
  }
};

export default services;
