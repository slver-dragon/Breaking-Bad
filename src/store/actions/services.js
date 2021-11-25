import {
  HOME_PAGE_LOAD,
  CATALOG_FORMAT,
  CHANGE_ELEMENT_COUNT,
  SET_CURRENT_PAGE,
  SET_SELECTION_REQUEST
} from "../actionTypes/services";

export const displayHome = (value) => {
  return { type: HOME_PAGE_LOAD, payload: value };
};

export const changeCatalogFormat = (value) => {
  return { type: CATALOG_FORMAT, payload: value};
};

export const changeElementCount = (count) => {
  return { type: CHANGE_ELEMENT_COUNT, payload: count};
};

export const setCurrentPage = (value) => {
  return { type: SET_CURRENT_PAGE, payload: value};
};

export const setSelectionRequest = (value) => {
  return { type: SET_SELECTION_REQUEST, payload: value};
};