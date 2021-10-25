import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardList from "./component";
import Button from "../../atom/Button";
import { loadPersonList } from "../../../store/actions/getPersonData";
import { changeCatalogFormat } from "../../../store/actions/services";
import style from "./style.module.scss";
import cardsListOn from "../../../assets/img/listOn.png";
import cardsListOff from "../../../assets/img/listOff.png";
import cardsGridOn from "../../../assets/img/gridOn.png";
import cardsGridOff from "../../../assets/img/gridOff.png";

const PersonListContainer = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.personData.characters);
  const isLoading = useSelector((state) => state.personData.isLoad);
  const errorValue = useSelector((state) => state.personData.isError);
  const isCardsList = useSelector((state) => state.services.isCardsList);
  const [cardsListImage, cardsGridImage] = isCardsList
    ? [cardsListOn, cardsGridOff]
    : [cardsListOff, cardsGridOn];
  const titleMenu = isCardsList ? (
    <div className={style.titleMenu}>
      <span className={style.status}>Статус</span>
      <span className={style.name}>Имя</span>
      <span className={style.birthday}>Дата рождения</span>
    </div>
  ) : (
    ""
  );
  const divider = isCardsList ? (<div className={style.divider} />) : '';

  useEffect(() => {
    dispatch(loadPersonList());
  }, [dispatch]);
  localStorage.setItem('characters',JSON.stringify(characters));

  return (
    <div className={style.main}>
      <div className={style.changer}>
        <span>Каталог</span>
        <div className={style.buttonBlock}>
          <span onClick={() => dispatch(changeCatalogFormat(true))}>
            <Button img={cardsListImage} text={""} />
          </span>
          <span onClick={() => dispatch(changeCatalogFormat(false))}>
            <Button img={cardsGridImage} text={""} />
          </span>
        </div>
      </div>
      {titleMenu}
      <CardList
        characters={characters}
        isLoading={isLoading}
        errorValue={errorValue}
        isCardsList={isCardsList}
      />
      {divider}
    </div>
  );
};

export const container = PersonListContainer;
