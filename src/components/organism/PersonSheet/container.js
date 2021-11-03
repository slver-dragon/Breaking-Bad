import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { loadPersons, loadQuote } from "../../../store/actions/getPersonData";
import Error from "../../atom/Error";
import Loader from "../../atom/Loader";
import PersonSheet from "./component";

export const PersonSheetContainer = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.personData.isLoad);
  const errorValue = useSelector((state) => state.personData.isError);
  const { id } = useParams();
  useEffect(
    () => {
      dispatch(loadPersons(id - 1, 1, false));
    },
    // eslint-disable-next-line
    []
  );
  const character = useSelector((state) => state.personData.character);
  useEffect(
    () => {
      if (character.name) dispatch(loadQuote(character));
    },
    // eslint-disable-next-line
    []
  );
  const randomQuote = useSelector((state) => state.personData.randomQuote);
  console.log(id, character, "+", randomQuote, "!");
  return (
    <div>
      {character ? (
        <PersonSheet
          character={character}
          randomQuote={randomQuote}
          isLoading={isLoading}
          errorValue={errorValue}
        />
      ) : character ? (
        <Loader />
      ) : (
        <Error textError="Не удалось получить данные персонажа!" />
      )}
    </div>
  );
};

export const container = PersonSheetContainer;
