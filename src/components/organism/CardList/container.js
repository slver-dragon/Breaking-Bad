import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardList from "./component";
import { importDataList } from "../../../store/actions/importData";

const CardListContainer = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cardListReducer.cards);
  const isLoading = useSelector((state) => state.cardListReducer.isLoad);
  const isError = useSelector((state) => state.cardListReducer.isError);

  useEffect(() => {
    dispatch(importDataList());
  }, [dispatch]);

  return <CardList cards={cards} isLoading={isLoading} isError={isError} />;
};

export const container = CardListContainer;
