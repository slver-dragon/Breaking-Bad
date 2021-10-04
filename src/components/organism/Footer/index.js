import React from "react";
import style from "./style.module.scss";

const Footer = () => {
  let date = new Date().toDateString();
  return (
    <div className={style.main}>
      <p>{ date.slice(date.length - 4) }</p>
      <p>@Эдуард Пузыно</p>
    </div>
  )
}

export default Footer;