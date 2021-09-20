import React from "react";
import photo from "../../../assets/img/home.svg"
import style from "./style.module.scss";

const Home = () => {
  return (
    <div className={style.home}>
      <img src={photo} alt="Breaking Bad" />
    </div>
  );
};

export default Home;