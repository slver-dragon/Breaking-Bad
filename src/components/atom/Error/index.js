import React from "react";
import style from "./style.module.scss";

const ErrorMessage = ({ textError }) => {
  return <div className={style.error}>{textError}</div>;
};

export default ErrorMessage;
