import React from "react";
import { useSelector } from "react-redux";
import CardList from "./component";

const CardListContainer = () => {
  const cards = useSelector((state) => state.cardListReducer.cards);
  return <CardList cards={cards} />;
}

export const container = CardListContainer