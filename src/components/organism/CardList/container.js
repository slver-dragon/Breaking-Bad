import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardList from "./component";
import { loadPersonList } from "../../../store/actions/getPersonData";

const PersonListContainer = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.personData.characters);
  const isLoading = useSelector((state) => state.personData.isLoad);
  const errorValue = useSelector((state) => state.personData.isError);

  useEffect(() => {
    dispatch(loadPersonList(''));
  }, [dispatch]);

  return <CardList characters={characters} isLoading={isLoading} errorValue={errorValue} />;
};

export const container = PersonListContainer;
