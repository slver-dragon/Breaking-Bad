import React from "react";
import PersonCard from "../../molecule/PersonCard";
import Loader from "../../atom/Loader";
import Error from "../../atom/Error";
import style from "./style.module.scss";

const CardList = ({ characters, isLoading, errorValue }) => {
  const listItem = !errorValue
    ? characters.map((character) => (
        <PersonCard
          key={character.char_id}
          name={character.name}
          birthday={character.birthday}
          img={character.img}
          status={character.status}
          id={character.char_id}
        />
      ))
    : "";

  return (
    <div>
      {errorValue ? (
        <Error textError={"Ошибка загрузки данных: " + errorValue} />
      ) : !isLoading ? (
        <div className={style.wrapper}>{listItem}</div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CardList;
