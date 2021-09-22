import {
  SET_CHARACTERS,
  CHANGE_CHARACTERS_LOADER_VALUE,
  ERROR_GETTING_CHARACTERS,
  GET_QUOTE,
  QUOTE_LOADER_VALUE,
  ERROR_GETTING_QUOTE
} from "../actionTypes";

import Repository from "../../repository";

export const setCharacters = (characters) => ({
  type: SET_CHARACTERS,
  payload: characters,
});
export const charactersIsFetching = (value) => ({
  type: CHANGE_CHARACTERS_LOADER_VALUE,
  payload: value,
});
export const gettingCharactersError = (value) => ({
  type: ERROR_GETTING_CHARACTERS,
  payload: value,
});
export const getQuoteElement = (quote) => ({
  type: GET_QUOTE,
  payload: quote,
});
export const quoteIsFetching = (value) => ({
  type: QUOTE_LOADER_VALUE,
  payload: value,
});
export const gettingQuoteError = (value) => ({
  type: ERROR_GETTING_QUOTE,
  payload: value,
});

export const setCharactersList = () => async (dispatch) => {
  dispatch(charactersIsFetching(true));
  const { value, error } = await Repository.APICardsList.createCardList();
  if (error || !value) {
    dispatch(gettingCharactersError(true));
  }
  dispatch(setCharacters(value));
  dispatch(charactersIsFetching(false));
};

export const getQuote = () => async (dispatch) => {
  dispatch(quoteIsFetching(true));
  const { value, error } = await Repository.APIQuote.createQuote();
  if (error || !value) {
    dispatch(gettingQuoteError(true));
  }
  dispatch(getQuoteElement(value));
  dispatch(quoteIsFetching(false));
};
