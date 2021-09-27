import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardList from "./component";
import { loadPersonList } from "../../../store/actions/getPersonData";

const PersonListContainer = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.personListReducer.characters);
  const isLoading = useSelector((state) => state.personListReducer.isLoad);
  const errorValue = useSelector((state) => state.personListReducer.isError);

  useEffect(() => {
    dispatch(loadPersonList());
  }, [dispatch]);

  return <CardList characters={characters} isLoading={isLoading} errorValue={errorValue} />;
};

export const container = PersonListContainer;
