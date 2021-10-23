import React from "react";
import PersonCardGrid from "../../molecule/PersonCardGrid";
import PersonCardList from "../../molecule/PersonCardList";
import Loader from "../../atom/Loader";
import Error from "../../atom/Error";
import style from "./style.module.scss";

const CardList = ({ characters, isLoading, errorValue, isCardsList }) => {
  let listItem = "";
  const styleCatalog = isCardsList ? style.wrapperList : style.wrapperGrid;

  if (isCardsList) {
    listItem = !errorValue
      ? characters.map((character) => (
          <PersonCardList
            key={character.char_id}
            name={character.name}
            birthday={character.birthday}
            img={character.img}
            status={character.status}
            id={character.char_id}
          />
        ))
      : "";
  } else {
    listItem = !errorValue
      ? characters.map((character) => (
          <PersonCardGrid
            key={character.char_id}
            name={character.name}
            birthday={character.birthday}
            img={character.img}
            status={character.status}
            id={character.char_id}
          />
        ))
      : "";
  };

  return (
    <div>
      {errorValue ? (
        <Error textError={"Ошибка загрузки данных: " + errorValue} />
      ) : !isLoading ? (
        <div className={styleCatalog}>
          {listItem}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CardList;
