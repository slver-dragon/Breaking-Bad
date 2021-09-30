import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./style.module.scss";
import logo from "../../../assets/img/logo.png";

const Header = () => {
  const catalogStyle =
    useLocation().pathname === "/catalog"
      ? style.catalog + " " + style.forCardList
      : style.catalog;
  return (
    <div className={style.main}>
      <Link className={style.image} to={"/"}>
        <img src={logo} alt="Breaking Bad" />
      </Link>
      <Link to={"/catalog"} className={catalogStyle}>
        <span className={style.threeLine}>
          <i></i>
          <i></i>
          <i></i>
        </span>
        <p>Каталог</p>
      </Link>
    </div>
  );
};
export default Header;
