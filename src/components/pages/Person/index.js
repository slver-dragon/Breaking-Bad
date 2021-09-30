import React from "react";
import PersonSheet from "../../organism/PersonSheet";
import style from "./style.module.scss";

const Person = () => {
  return (
    <div className={style.main}>
      <PersonSheet />
    </div>
  );
};

export default Person;
