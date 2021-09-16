import {
  IMPORT_DATA,
  IMPORT_ERROR,
  IMPORT_IN_PROGRESS,
} from "../actionTypes/importData";

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