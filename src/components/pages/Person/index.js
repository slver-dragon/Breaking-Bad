import React from "react";
import { Link } from "react-router-dom";
import PersonSheet from "../../organism/PersonSheet";
import style from "./style.module.scss";

const Person = () => {
  return (
    <div className={style.main}>
      <Link to={"/catalog"} className={style.backToCatalog} >
        <div className={style.leftArrow} />
        <p>Назад в Каталог</p>
      </Link>
      <PersonSheet />
    </div>
  );
};

export default Person;
