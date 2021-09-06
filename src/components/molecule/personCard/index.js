import React from 'react';
import style from "./style.module.scss";

function personCard(card) {
  let statusElement;    
  if (card.status === 'живой') {
    statusElement = <p className={style.state + " " + style.alive}>{card.status}</p>
  } else {
    statusElement = <p className={style.state + " " + style.deceased}>{card.status}</p>
  }
  return (
    <div className={style.main}>
      <div className={style.photoWrapper}>
        <img className={style.photo} src={card.img} alt={card.name} />
      </div>
      <div className={style.inform}>
        {statusElement}
        <p className={style.name}>{card.name}</p>
        <p className={style.birthday}>{card.birthday}</p>
      </div>
    </div>
  );
}

export default personCard;
