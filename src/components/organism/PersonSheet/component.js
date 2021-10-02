import React from "react";
import style from "./style.module.scss";

let statusStyle = "";
let quote =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, aliquam laoreet vivamus sed. Diam fames mi, quam tellus cursus volutpat velit massa.";

const PersonSheet = ({ character }) => {
  switch (character.status) {
    case "Alive": {
      statusStyle = style.alive;
      break;
    }
    case "Deceased": {
      statusStyle = style.deceased;
      break;
    }
    default: {
      statusStyle = style.presumedDead;
    }
  }
  const statusElement = (
    <p className={style.state + " " + statusStyle}>{character.status}</p>
  );

  return (
    <div className={style.wrapper}>
      <div className={style.main}>
        <div className={style.photoWrapper}>
          <img
            className={style.photo}
            src={character.img}
            alt={character.name}
          />
        </div>
        <div className={style.inform}>
          {statusElement}
          <p className={style.name}>{character.name}</p>
          <p>
            Дата рождения:{" "}
            <span className={style.birthday}>{character.birthday} </span>
          </p>
          <p>
            Ник-нейм:{" "}
            <span className={style.nickname}>{character.nickname} </span>
          </p>
          <p className={style.quoteMargin}>
            Цитата: <span className={style.quote}>{quote} </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonSheet;