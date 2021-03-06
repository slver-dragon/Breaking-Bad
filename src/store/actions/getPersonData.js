import {
  GET_PERSON,
  GET_PERSON_LIST,
  GET_CHARACTERS_MAX_LENGTH,
  LOADING_ERROR,
  LOADING_IN_PROGRESS,
  GET_QUOTE,
} from "../actionTypes/getPersonData";
import Repository from "../../repository";

export const getPerson = (value) => {
  return { type: GET_PERSON, payload: value };
};

export const getPersonList = (value) => {
  return { type: GET_PERSON_LIST, payload: value };
};

export const getCharactersMaxLength = (value) => {
  return { type: GET_CHARACTERS_MAX_LENGTH, payload: value };
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

export const loadPersons = (id, quantity, isList) => async (dispatch) => {
  dispatch(loadInProgress(true));
  const { value, error } = await Repository.APIPersons.getPersons(id, quantity);
  if (error) {
    dispatch(loadingError(error));
    dispatch(getPerson({}));
  } else if (isList) {
    if (quantity === "all") {
      dispatch(getCharactersMaxLength(value.length));
    } else {
      dispatch(getPersonList(value));
    }
  } else {
    dispatch(getPerson(value[0]));
    dispatch(loadQuote(value[0]));
  }
  dispatch(loadInProgress(false));
};

export const loadQuote = (character) => async (dispatch) => {
  dispatch(loadInProgress(true));
  const { value, error } = await Repository.APIQuote.getQuote(character.name);
  if (error) {
    dispatch(loadingError(true));
  }
  if (value.length) {
    dispatch(loadQuoteElement(value[0].quote));
  } else {
    dispatch(loadQuoteElement("Any quotes are missing for this character."));
  }
  dispatch(loadInProgress(false));
};
