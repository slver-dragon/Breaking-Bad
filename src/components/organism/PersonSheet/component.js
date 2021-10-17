import React from "react";
import style from "./style.module.scss";
import Error from "../../atom/Error";
import Loader from "../../atom/Loader";

let statusStyle = "";
const PersonSheet = ({ character, randomQuote, isLoading, errorValue }) => {
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
      {errorValue ? (
        <Error textError={"Ошибка загрузки данных: " + errorValue} />
      ) : !isLoading ? (
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
            Цитата: <span className={style.quote}>{randomQuote} </span>
          </p>
        </div>
      </div>  
        </div>
      ) : (
        <Loader />
      )}
      
    </div>
  );
};

export default PersonSheet;