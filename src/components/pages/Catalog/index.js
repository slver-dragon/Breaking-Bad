import React from "react";
import CardList from "../../organism/CardList";
import style from "./style.module.scss";

const Catalog = () => {
  return (
    <div className={style.container}>
      <CardList className={style.main}/>
    </div>
  );
};

export default Catalog;
