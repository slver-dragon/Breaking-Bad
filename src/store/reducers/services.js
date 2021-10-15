import { HOME_PAGE_LOAD } from "../actionTypes/services";

export const initialState = {
  displayHome: true,
};

const services = (state = initialState, action) => {
  switch (action.type) {
    case HOME_PAGE_LOAD:
      return {
        ...state,
        displayHome: action.payload,
      };
    default:
      return state;
  }
};

export default services;
