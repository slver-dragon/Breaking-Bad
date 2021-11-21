import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardList from "./component";
import Paginator from "../../molecule/Pagintor";
import Button from "../../atom/Button";
import { loadPersons } from "../../../store/actions/getPersonData";
import {
  changeCatalogFormat,
  changeElementCount,
  setCurrentPage,
} from "../../../store/actions/services";
import style from "./style.module.scss";
import cardsListOn from "../../../assets/img/listOn.png";
import cardsListOff from "../../../assets/img/listOff.png";
import cardsGridOn from "../../../assets/img/gridOn.png";
import cardsGridOff from "../../../assets/img/gridOff.png";

const PersonListContainer = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.personData.characters);
  const cardsMaxCount = useSelector(
    (state) => state.personData.charactersMaxLength
  );
  const isLoading = useSelector((state) => state.personData.isLoad);
  const errorValue = useSelector((state) => state.personData.errorValue);
  const isCardsList = useSelector((state) => state.services.isCardsList);
  const currentPage = useSelector((state) => state.services.currentPage);
  const changeCount = (value) => dispatch(changeElementCount(value));
  const changePage = (value) => dispatch(setCurrentPage(value));
  const pageElementCount = useSelector(
    (state) => state.services.pageElementCount
  );
  const [cardsListImage, cardsGridImage] = isCardsList
    ? [cardsListOn, cardsGridOff]
    : [cardsListOff, cardsGridOn];
  const titleMenu = isCardsList ? (
    <div>
      <div className={style.wrapper}>
        <div className={style.pictureCap} alt="" />
        <div className={style.titleMenu}>
          <span className={style.status}>Статус</span>
          <span className={style.name}>Имя</span>
          <span className={style.birthday}>Дата рождения</span>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
  const divider = isCardsList ? <div className={style.divider} /> : "";
  useEffect(
    () => {
      dispatch(loadPersons(0, "all", true));
    },
    // eslint-disable-next-line
    []
  );
  useEffect(
    () => {
      dispatch(
        loadPersons(
          (currentPage - 1) * pageElementCount,
          pageElementCount,
          true
        )
      );
    },
    // eslint-disable-next-line
    [currentPage, pageElementCount, isCardsList]
  );
  useEffect(() => {
    if (isCardsList && window.innerWidth <= 600) {
      dispatch(changeCatalogFormat(false));
    }
  });

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
        id="CardList"
        characters={characters}
        isLoading={isLoading}
        errorValue={errorValue}
        isCardsList={isCardsList}
      />
      {divider}
      <Paginator
        currentPage={currentPage}
        pageElementCount={pageElementCount}
        cardsMaxCount={cardsMaxCount}
        changeCount={changeCount}
        changePage={changePage}
      />
    </div>
  );
};

export const container = PersonListContainer;
