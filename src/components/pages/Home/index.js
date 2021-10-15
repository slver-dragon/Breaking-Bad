import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { displayHome } from "../../../store/actions/services";
import style from "./style.module.scss";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {dispatch(displayHome(true))});
  return (
    <div className={style.image} />
  );
};

export default Home;
