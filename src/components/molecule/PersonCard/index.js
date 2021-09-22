import React from "react";
import style from "./style.module.scss";
import Quote from "../../organism/CardList";

export const quoteQuerry = (img, name, status, birthday) => {
  console.log(img, status, name, birthday)
}


const Card = ({ img, status, name, birthday }) => {
  return (
    <div onClick={() => Quote(img, status, name, birthday)} className={style.card}>
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