// import React from "react";
import { useSelector } from "react-redux";
import Error from "../../atom/Error";
import PersonPage from "./component";

export const PersonItemContainer = ({ value }) => {
  const character = useSelector(
    (state) => state.personListReducer.characters[value.id - 1]
  );

  const result = character ? (
    <PersonPage character={character} />
  ) : (
    <Error textError={"Отсутствие данных персонажа."} />
  );
  return <div>{result}</div>;
};

export const container = PersonItemContainer;
