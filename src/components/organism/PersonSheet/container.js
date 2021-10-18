import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { loadQuote } from "../../../store/actions/getPersonData";
import Error from "../../atom/Error";
import PersonSheet from "./component";

export const PersonSheetContainer = () => {
  const dispatch = useDispatch();
  let randomQuote = useSelector((state) => state.personData.randomQuote);
  const isLoading = useSelector((state) => state.personData.isLoad);
  const errorValue = useSelector((state) => state.personData.isError);
  let character = "";
  const { id } = useParams();
  const characters = useSelector((state) => state.personData.characters);

  character = characters.find((item) => String(item.char_id) === id);

  useEffect(() => {
    dispatch(loadQuote(character.name));
  }, [dispatch, character.name]);
  randomQuote = randomQuote
    ? randomQuote
    : "Any quotes are missing for this character.";
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
        <Error textError={"Отсутствие данных персонажа."} />
      )}
    </div>
  );
};

export const container = PersonSheetContainer;
