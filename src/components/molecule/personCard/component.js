import React from 'react';
import style from './style.module.scss';

const PersonCard = ({ name, birthday, img, status, test}) => {
  let statusElement;
  switch (status) {
    case 'живой': {
      statusElement = <p className={style.state + " " + style.alive}>{status}</p>
      break
    }
    default : {
      statusElement = <p className={style.state + " " + style.deceased}>{status}</p>
    }
  }

  return (
    <div className={style.main}>
      <div className={style.photoWrapper}>
        <img className={style.photo} src={img} alt={name} />
      </div>
      <div className={style.inform}>
        {statusElement}
        <p className={style.name}>{name}</p>
        <p className={style.birthday}>{birthday} </p>
      </div>
    </div>

  );
}

export default PersonCard;