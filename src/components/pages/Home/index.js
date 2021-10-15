import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { displayHome } from "../../../store/actions/services";
import photo from "../../../assets/img/home.webp";
import style from "./style.module.scss";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayHome(true));
  });
  return (
    <LazyLoadImage className={style.image} alt={"Breaking Bad"} src={photo} />
  );
};

export default Home;
