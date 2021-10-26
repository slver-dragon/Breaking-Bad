import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { loadPerson, loadQuote } from "../../../store/actions/getPersonData";
import Error from "../../atom/Error";
import PersonSheet from "./component";

export const PersonSheetContainer = () => {
  const dispatch = useDispatch();
  let randomQuote = useSelector((state) => state.personData.randomQuote);
  const isLoading = useSelector((state) => state.personData.isLoad);
  const errorValue = useSelector((state) => state.personData.isError);
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadPerson(id));
  }, [dispatch, id]);
  const character = useSelector((state) => state.personData.character);
  useEffect(() => {
    if (character.name) dispatch(loadQuote(character));
  }, [dispatch, character]);

  return (
    <div>
      {character ? (
        <PersonSheet
          character={character}
          randomQuote={randomQuote}
          isLoading={isLoading}
          errorValue={errorValue}
        />
      ) : (
        <Error
          textError={
            "Некорректный переход.\nПожалуйста, осуществляйте переходы корректно."
          }
        />
      )}
    </div>
  );
};

export const container = PersonSheetContainer;
