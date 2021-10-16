import {
  HOME_PAGE_LOAD,
} from "../actionTypes/services";

export const displayHome = (value) => {
  return { type: HOME_PAGE_LOAD, payload: value };
};
