import { SET_CHARACTERS } from "../actionTypes/newCharacters";
import { CHANGE_CHARACTERS_LOADER_VALUE } from "../actionTypes/newCharacters";
import { ERROR_GETTING_CHARACTERS } from "../actionTypes/newCharacters";
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

export const setCharactersList = () => async (dispatch) => {
  dispatch(charactersIsFetching(true));
  const { value, error } = await Repository.APICardsList.createCardList();
  if (error || !value) {
    dispatch(gettingCharactersError(true));
  }
  dispatch(setCharacters(value));
  dispatch(charactersIsFetching(false));
};