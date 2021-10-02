import React from "react";
import { Link } from "react-router-dom";
import Button from "../../atom/Button";
import PersonSheet from "../../organism/PersonSheet";
import leftArrow from "../../../assets/img/leftArrow.png";
import style from "./style.module.scss";

const Person = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <Link to={"/catalog"} className={style.backToCatalog}>
          <Button img={leftArrow} text={"Назад в Каталог"} />
        </Link>
        <PersonSheet />
      </div>
    </div>
  );
};

export default Person;
