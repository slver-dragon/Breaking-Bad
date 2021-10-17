import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { displayHome } from "../../../store/actions/services";
import Button from "../../atom/Button";
import PersonSheet from "../../organism/PersonSheet";
import leftArrow from "../../../assets/img/leftArrow.png";
import style from "./style.module.scss";

const Person = () => {
  const dispatch = useDispatch();
  useEffect(() => {dispatch(displayHome(false))});

  return (
    <div className={style.body}>
      <div className={style.main}>
        <div className={style.container}>
          <Link to={"/catalog"} className={style.backToCatalog}>
            <Button img={leftArrow} text={"Назад в Каталог"} />
          </Link>
          <PersonSheet />
        </div>
      </div>
    </div>
  );
};

export default Person;
