import React from "react";
import style from "./style.module.scss";

const Button = ({ img, text }) => {
  const imageElement = img !== "" ? <img src={img} alt="" /> : "";
  const textElement = text !== "" ? <span>{text}</span> : "";
  return (
    <button className={style.button}>
      {imageElement}
      {textElement}
    </button>
  );
};

export default Button;
