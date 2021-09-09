import React from "react";
import { useSelector } from "react-redux";
import CardList from "./component";

const CardListContainer = () => {
  const cards = useSelector((state) => state.cardListReducer.cards);
  const test = useSelector((state) => state.cardListReducer.test);
  return <CardList cards={cards} test={test}/>;
}

export const container = CardListContainer