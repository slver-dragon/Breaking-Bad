import React from "react";
import photo from "../../../assets/img/home.webp";
import style from "./style.module.scss";

const Home = () => {
  return (
    <div className={style.container}>
      <img className={style.image} src={photo} alt="Breaking Bad" />
    </div>
  );
};

export default Home;
