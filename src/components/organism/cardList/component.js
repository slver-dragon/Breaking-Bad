import React from "react";
import PersonCard from "../../molecule/PersonCard/component";
import style from "./style.module.scss";

function CardList({cards}) {
  const listItem = cards.map((card) => (
    <PersonCard
      key={card.char_id}
      name={card.name}
      birthday={card.birthday}
      img={card.img}
      status={card.status}
    />
  ));

  return <ul className={style.wrapper}>{listItem}</ul>;
}

export default CardList;