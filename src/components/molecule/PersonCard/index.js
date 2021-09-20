import React from "react";
import style from "./style.module.scss";

const Card = ({ img, status, name, birthday }) => {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <img src={img} alt="card-img" />
      </div>
      <div className={style.info}>
        <p className={style.status}>{status}</p>
        <p className={style.name}>{name}</p>
        <p className={style.birth}>{birthday}</p>
      </div>
    </div>
  );
};

export default Card;