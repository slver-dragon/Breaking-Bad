import React from "react";
import PersonCard from "../../molecule/PersonCard/component";
import style from "./style.module.scss";
import exchange from "./container";

function CardList({cards, test}) {
  const listItem = cards.map((card) => (
    <PersonCard
      key={card.id}
      name={card.name}
      birthday={card.birthday}
      img={card.img}
      status={card.status}
      test={test}
    />
  ));

  return <ul className={style.wrapper}>{listItem}</ul>;
}

export {exchange}
export default CardList;