import React from "react";
import style from "./style.module.scss";

const ErrorMessage = ({ name }) => {
  return <div className={style.error}>{name}</div>;
};

export default ErrorMessage;