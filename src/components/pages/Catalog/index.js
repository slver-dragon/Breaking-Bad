import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardList from "../../organism/CardList";
import { displayHome } from "../../../store/actions/services";
import style from "./style.module.scss";

const Catalog = () => {
  const dispatch = useDispatch();
  useEffect(() => {dispatch(displayHome(false))});
  return (
    <div className={style.container}>
      <CardList className={style.main}/>
    </div>
  );
};

export default Catalog;
