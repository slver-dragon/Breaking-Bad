import React from "react";
import style from "./style.module.scss";
import Card from "../../molecule/PersonCard";
import Page from "../../molecule/PersonPage";
import Loader from "../../atom/Loader";
import ErrorMessage from "../../atom/ErrorMessage";

export const CardList = ({ characters, isFetching, isError }) => {
  console.log("Мы в компоненте.");
  return (
    <div>
      <div>
        {isError ? (
          <ErrorMessage name=" Не удалось загрузить данные." />
        ) : !isFetching ? (
          <div className={style.cardList}>
            {characters.map((character) => (
              <Card
                key={character.char_id}
                img={character.img}
                name={character.name}
                birthday={character.birthday}
                status={character.status}
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

export const Quote = ({ quote, isFetching, isError }) => {
  return (
    <div>
      <div>
        {isError ? (
          <ErrorMessage name=" Не удалось загрузить данные." />
        ) : !isFetching ? (
          <div className={style.quote}>
            <Page 
            // img={character.img}
            // name={character.name}
            // birthday={character.birthday}
            // status={character.status}
            quote={quote} />
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
 };

export default CardList;
