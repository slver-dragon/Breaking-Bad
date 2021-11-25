import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardList from "./component";
import FormatChanger from "../../molecule/FormatChanger";
import Paginator from "../../molecule/Paginator";
import SearchPersons from "../../molecule/SearchPersons";
import Error from "../../atom/Error";
import Loader from "../../atom/Loader";
import { loadPersons } from "../../../store/actions/getPersonData";
import {
  changeCatalogFormat,
  changeElementCount,
  setCurrentPage,
  setSelectionRequest,
} from "../../../store/actions/services";
import style from "./style.module.scss";

const PersonListContainer = () => {
  const dispatch = useDispatch();
  let start;
  let request;
  const characters = useSelector((state) => state.personData.characters);
  const cardsMaxCount = useSelector(
    (state) => state.personData.charactersMaxLength
  );
  const isLoading = useSelector((state) => state.personData.isLoad);
  const errorValue = useSelector((state) => state.personData.errorValue);
  const isCardsList = useSelector((state) => state.services.isCardsList);
  const selectionRequest = useSelector(
    (state) => state.services.selectionRequest
  );
  const currentPage = useSelector((state) => state.services.currentPage);
  const pageElementCount = useSelector(
    (state) => state.services.pageElementCount
  );
  const exchangeCatalogFormat = (value) => dispatch(changeCatalogFormat(value));
  const changeCount = (value) => dispatch(changeElementCount(value));
  const changePage = (value) => dispatch(setCurrentPage(value));
  const search = (value) => dispatch(setSelectionRequest(value));

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

  if (selectionRequest !== "") {
    [start, request] = [0, selectionRequest];
  } else {
    start = (currentPage - 1) * pageElementCount;
    request = pageElementCount;
  }

  useEffect(
    () => {
      dispatch(loadPersons(start, request, true));
      if (selectionRequest === "all") search("");
    },
    // eslint-disable-next-line
    [start, request]
  );

  useEffect(() => {
    if (isCardsList && window.innerWidth <= 600) {
      dispatch(changeCatalogFormat(false));
    }
  });
  return (
    <div className={style.container}>
      <SearchPersons search={search} />
      <div className={style.main}>
        <FormatChanger
          isCardsList={isCardsList}
          exchangeCatalogFormat={exchangeCatalogFormat}
        />
        {titleMenu}
        {isLoading || request === "all" ? (
          <Loader />
        ) : characters.length === 0 &&
          typeof request !== "number" ? (
          <Error textError={"Ни одного результата не найдено!"} />
        ) : (
          <CardList
            id="CardList"
            characters={characters}
            isLoading={isLoading}
            errorValue={errorValue}
            isCardsList={isCardsList}
          />
        )}
        {divider}
      </div>
      <div className={style.paginator}>
        {selectionRequest === "" ? (
          <Paginator
            currentPage={currentPage}
            pageElementCount={pageElementCount}
            cardsMaxCount={cardsMaxCount}
            changeCount={changeCount}
            changePage={changePage}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export const container = PersonListContainer;
