import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./style.module.scss";
import logo from "../../../assets/img/logo.png";
import burger from "../../../assets/img/burger.png";
import Button from "../../atom/Button";

const Header = () => {
  const catalogStyle =
    useLocation().pathname === "/catalog"
      ? style.catalog + " " + style.forCardList
      : style.catalog;
  return (
    <span className={style.main}>
      <Link className={style.image} to={"/"}>
        <Button
          img={logo}
          alt={"Breaking Bad"}
          text={""}
        />
      </Link>
      <Link className={catalogStyle} to={"/catalog"}>
        <Button
          img={burger}
          alt={"Каталог"}
          text={"Каталог"}
        />
      </Link>
    </span>
  );
};
export default Header;
