import React from "react";
import style from "./style.module.scss";
import logo from "../../../assets/img/logo.svg"

const Header = () => {
  return (
    <div className={style.main}>
      <img className={style.image} src={logo} alt="Breaking Bad" />
      <div className={style.catalog}>

      </div>
    </div>
  )
}

export default Header;