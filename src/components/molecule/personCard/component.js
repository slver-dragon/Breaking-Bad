import React from 'react';
import style from './style.module.scss';
import { change } from '../../../store/actions/test';


const PersonCard = ({ name, birthday, img, status}, test) => {
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
        <img onClick={change} className={style.photo} src={img} alt={name} />
      </div>
      <div className={style.inform}>
        {statusElement}
        <p className={style.name}>{name}</p>
        <p className={style.birthday}>{birthday}</p>
        {console.log()}
      </div>
    </div>

  );
}

export default PersonCard;