import React from "react";
import style from "./style.module.scss";

const Button = ({ img, alt, text }) => {
  return (
    <div className={style.button}>
      <img src={img} alt={alt} />
      <span>{text}</span>
    </div>
  );
};

export default Button;
