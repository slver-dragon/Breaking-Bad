import React from "react";
import Button from "../../atom/Button";
import style from "./style.module.scss";
import leftArrow from "../../../assets/img/leftArrow.png";
import rightArrow from "../../../assets/img/rightArrow.png";

const Paginator = ({
  currentPage,
  pageElementCount,
  cardsMaxCount,
  changeCount,
  changePage,
}) => {
  const counts = [5, 10, 15, 20];
  const pages = [];
  for (let i = 1; i <= cardsMaxCount / pageElementCount + 1; ++i) {
    pages.push(i);
  }
  console.log(pages);
  const countPages = pages.map((page) =>
    page > currentPage - 3 && page < currentPage + 3 ? (
      page === currentPage ? (
        <span className={style.active} onClick={() => changePage(page)}>
          <Button text={page} />
        </span>
      ) : (
        <span onClick={() => changePage(page)}>
          <Button text={page} />
        </span>
      )
    ) : (
      ""
    )
  );
  const numberElement = counts.map((count) =>
    count === pageElementCount ? (
      <span className={style.active} onClick={() => changeCount(count)}>
        <Button text={count} />
      </span>
    ) : (
      <span onClick={() => changeCount(count)}>
        <Button text={count} />
      </span>
    )
  );
  const startPages = pages.slice(0, 2).map((page) =>
    currentPage > 4 ? (
      <span onClick={() => changePage(page)}>
        <Button text={page} />
      </span>
    ) : (
      ""
    )
  );
  const endPages = pages.slice(pages.length - 2, pages.length).map((page) =>
    currentPage < pages.length - 3 ? (
      <span onClick={() => changePage(page)}>
        <Button text={page} />
      </span>
    ) : (
      ""
    )
  );
  const multiDotsStart =
    currentPage > 5 ? (
      <span onClick={() => changePage(currentPage - 3)}>
        <Button text={"..."} />
      </span>
    ) : (
      ""
    );
  const multiDotsEnd =
    currentPage < pages.length - 4 ? (
      <span onClick={() => changePage(currentPage + 3)}>
        <Button text={"..."} />
      </span>
    ) : (
      ""
    );

  console.log(startPages, countPages, endPages);
  return (
    <div className={style.main}>
      <div className={style.pages}>
        {startPages}
        {multiDotsStart}
        {countPages}
        {multiDotsEnd}
        {endPages}
        <span
          onClick={() =>
            changePage(currentPage > 1 ? --currentPage : currentPage)
          }
        >
          <Button img={leftArrow} />
        </span>
        <span
          onClick={() =>
            changePage(
              currentPage <= pages.length ? ++currentPage : currentPage
            )
          }
        >
          <Button img={rightArrow} />
        </span>
      </div>
      <div className={style.elementPerPage}>
        <p>Отобразить карточек:</p>
        {numberElement}
      </div>
    </div>
  );
};

export default Paginator;
