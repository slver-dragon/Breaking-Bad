import {
  IMPORT_DATA,
  IMPORT_ERROR,
  IMPORT_IN_PROGRESS,
} from "../actionTypes/importData";
import Repository from "../../repository";

export const importData = (payload) => {
  return {
    type: IMPORT_DATA,
    payload,
  };
};

export const importError = (payload) => {
  return {
    type: IMPORT_ERROR,
    payload,
  };
};

export const importInProgress = () => {
  return {
    type: IMPORT_IN_PROGRESS
  };
};

export const importDataList = () => async (dispatch) => {
  dispatch(importInProgress(true));
  const { value, error } = await Repository.APICardsList.createCardList();
  if (error || !value) {
    dispatch(importError(true));
  }
  dispatch(importData(value));
  dispatch(importInProgress(false));
};