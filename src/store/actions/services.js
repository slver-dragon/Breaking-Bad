import {
  HOME_PAGE_LOAD,
  CATALOG_FORMAT
} from "../actionTypes/services";

export const displayHome = (value) => {
  return { type: HOME_PAGE_LOAD, payload: value };
};

export const changeCatalogFormat = (value) => {
  return { type: CATALOG_FORMAT, payload: value};
};