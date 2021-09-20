import React from "react";
import photo from "../../../assets/img/home.svg"
import style from "./style.module.scss";

const Home = () => {
  return (
    <div>
      <img className={style.image} src={photo} alt="Breaking Bad" />
    </div>
  );
};

export default Home;