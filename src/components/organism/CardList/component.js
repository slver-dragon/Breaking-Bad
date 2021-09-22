import React from "react";
import PersonCard from "../../molecule/PersonCard";
import Loader from "../../atom/Loader";
import Error from "../../atom/Error";
import style from "./style.module.scss";

function CardList({ cards, isLoading, isError }) {
  const listItem = cards.map((card) => (
    <PersonCard
      key={card.char_id}
      name={card.name}
      birthday={card.birthday}
      img={card.img}
      status={card.status}
    />
  ));

  return (
    <div>
      {isError ? (
        <Error textError="Ошибка загрузки данных: " />
      ) : !isLoading ? (
        <ul className={style.wrapper}>{listItem}</ul>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default CardList;