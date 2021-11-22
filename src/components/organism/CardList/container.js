import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardList from "./component";
import FormatChanger from "../../molecule/FormatChanger";
import Paginator from "../../molecule/Paginator";
import { loadPersons } from "../../../store/actions/getPersonData";
import {
  changeCatalogFormat,
  changeElementCount,
  setCurrentPage,
} from "../../../store/actions/services";
import style from "./style.module.scss";

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
  const exchangeCatalogFormat = (value) => dispatch(changeCatalogFormat(value));
  const changeCount = (value) => dispatch(changeElementCount(value));
  const changePage = (value) => dispatch(setCurrentPage(value));
  const pageElementCount = useSelector(
    (state) => state.services.pageElementCount
  );

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
    <div className={style.container}>
      <div className={style.main}>
        <FormatChanger
          isCardsList={isCardsList}
          exchangeCatalogFormat={exchangeCatalogFormat}
        />
        {titleMenu}
        <CardList
          id="CardList"
          characters={characters}
          isLoading={isLoading}
          errorValue={errorValue}
          isCardsList={isCardsList}
        />
        {divider}
      </div>
      <div className={style.paginator}>
        <Paginator
          currentPage={currentPage}
          pageElementCount={pageElementCount}
          cardsMaxCount={cardsMaxCount}
          changeCount={changeCount}
          changePage={changePage}
        />
      </div>
    </div>
  );
};

export const container = PersonListContainer;
