import React from "react";
import style from "./style.module.scss";

const Loader = () => {
  return <div className={style.fetching}></div>;
};

export default Loader;