import React from "react";
import style from "./style.module.scss";

const Loader = () => {
  return (
    <div className={style.container}>
      <div className={style.loading} />
    </div>
  );
};

export default Loader;
