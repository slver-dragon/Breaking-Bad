import { HOME_PAGE_LOAD } from "../actionTypes/services";

export const initialState = {
  isHomePage: true,
};

const services = (state = initialState, action) => {
  switch (action.type) {
    case HOME_PAGE_LOAD:
      return {
        ...state,
        isHomePage: action.payload,
      };
    default:
      return state;
  }
};

export default services;
