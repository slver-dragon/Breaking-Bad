import React from "react";
import PersonCardGrid from "../../molecule/PersonCardGrid";
import PersonCardList from "../../molecule/PersonCardList";
import Loader from "../../atom/Loader";
import Error from "../../atom/Error";
import style from "./style.module.scss";

const CardList = ({ characters, isLoading, errorValue, isCardsList }) => {
  const styleCatalog = isCardsList ? style.wrapperList : style.wrapperGrid;
  
  return (
    <div>
      {errorValue ? (
        <Error textError={"Ошибка загрузки данных: " + errorValue} />
      ) : !isLoading ? (
        <div className={styleCatalog}>
          {isCardsList
            ? !errorValue
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
              : ""
            : !errorValue
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
            : ""}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CardList;
