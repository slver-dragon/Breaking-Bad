import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

let statusStyle = "";

const PersonCard = ({ name, birthday, img, status, id }) => {
  switch (status) {
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

  return (
    <Link to={`/person/${id}`} className={style.main}>
      <div className={style.photoWrapper}>
        <img className={style.photo} src={img} alt={name} />
      </div>
      <div className={style.inform}>
        <p className={style.state + " " + statusStyle}>{status}</p>
        <p className={style.name}>{name}</p>
        <p className={style.birthday}>{birthday}</p>
      </div>
    </Link>
  );
};

export default PersonCard;
