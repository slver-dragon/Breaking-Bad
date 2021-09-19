import React from "react";
import style from "./style.module.scss";
import Card from "../../molecule/PersonCard";
import Loader from "../../atom/Loader";
import ErrorMessage from "../../atom/ErrorMessage";

const CardList = ({ characters, isFetching, isError }) => {
  return (
    <div>
      <div>
        {isError ? (
          <ErrorMessage name=" Не удалось загрузить данные." />
        ) : !isFetching ? (
          <div className={style.cardList}>
            {characters.map((character) => (
              <Card
                img={character.img}
                name={character.name}
                birthday={character.birthday}
                status={character.status}
                key={character.id}
              />
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default CardList;