import React from "react";
import { useSelector } from "react-redux";
import CardList from "./component";
import store from "../../../store";
import { change } from '../../../store/actions/test';

export function exchange () {
  store.dispatch(change())
}

const CardListContainer = () => {
  const cards = useSelector((state) => state.cardListReducer.cards);
  const test = useSelector((state) => state.cardListReducer.test);
  return <CardList cards={cards} test={test}/>;
}

export const container = CardListContainer
export default exchange;