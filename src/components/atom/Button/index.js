import React from "react";
import style from "./style.module.scss";

const Button = ({ img, text }) => {
  const imageElement = img !== "" ? <img src={img} alt="" /> : "";
  const textElement = text !== "" ? <span>{text}</span> : "";
  return (
    <div className={style.button}>
      {imageElement}
      {textElement}
    </div>
  );
};

export default Button;
