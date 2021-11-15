import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { loadPersons } from "../../../store/actions/getPersonData";
import Error from "../../atom/Error";
import Loader from "../../atom/Loader";
import PersonSheet from "./component";

export const PersonSheetContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const isLoading = useSelector((state) => state.personData.isLoad);
  const errorValue = useSelector((state) => state.personData.isError);
  const character = useSelector((state) => state.personData.character);
  const randomQuote = useSelector((state) => state.personData.randomQuote);
  useEffect(
    () => {
      dispatch(loadPersons(id - 1, 1, false));
    },
    // eslint-disable-next-line
    []
  );

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
