import {
  LOAD_PERSON,
  LOADING_ERROR,
  LOADING_IN_PROGRESS,
  GET_QUOTE,
} from "../actionTypes/getPersonData";
import Repository from "../../repository";

export const loadPerson = (value) => {
  return { type: LOAD_PERSON, payload: value };
};

export const loadingError = (value) => {
  return { type: LOADING_ERROR, payload: value };
};

export const loadInProgress = (value) => {
  return { type: LOADING_IN_PROGRESS, payload: value };
};

export const loadQuoteElement = (quote) => {
  return { type: GET_QUOTE, payload: quote };
};

export const loadPersonList = () => async (dispatch) => {
  dispatch(loadInProgress(true));
  const { value, error } = await Repository.APICardsList.createCardList();
  if (error || !value) {
    dispatch(loadingError(error));
  }
  dispatch(loadPerson(value));
  dispatch(loadInProgress(false));
};

export const loadQuote = () => async (dispatch) => {
  dispatch(loadInProgress(true));
  const { value, error } = await Repository.APIQuote.createQuote();
  if (error || !value) {
    dispatch(loadingError(true));
  }
  dispatch(loadQuoteElement(value));
  dispatch(loadInProgress(false));
};
