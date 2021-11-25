import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardList from "../../organism/CardList";
import SearchPersons from "../../molecule/SearchPersons";
import {
  displayHome,
  setSelectionRequest,
} from "../../../store/actions/services";
import style from "./style.module.scss";

const Catalog = () => {
  const search = (value) => dispatch(setSelectionRequest(value));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayHome(false));
  });
  return (
    <div className={style.container}>
      <SearchPersons search={search} />
      <CardList className={style.main} />
    </div>
  );
};

export default Catalog;
