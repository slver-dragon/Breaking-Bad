import React from 'react';
import photo from "../../../assets/img/photo-small.svg";
import style from "./style.module.scss";

function pers() {
    const state = 'живой';
    const name = 'Андрей Панасюк';
    const birthday = '23.11.2001';
  return (
    <div className={style.main}>
      <div className={style.photoWrapper}>
        <img className={style.photo} src={photo} alt={name} />
      </div>
      <div className={style.inform}>
        <p className={style.state}>{state}</p>
        <p className={style.name}>{name}</p>
        <p className={style.birthday}>{birthday}</p>
      </div>
    </div>
  );
}

export default pers;
