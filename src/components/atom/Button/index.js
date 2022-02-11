import React from "react";
import style from "./style.module.scss";

const Button = ({ img, text }) => {
  return (
    <button className={style.button}>
      {img !== '' ? <img src={img} alt="" /> : ""}
      {text !== '' ? <span>{text}</span> : ""}
    </button>
  );
};

export default Button;
