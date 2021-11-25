import React from "react";
import Button from "../../atom/Button";
import leftArrow from "../../../assets/img/leftArrow.png";
import rightArrow from "../../../assets/img/rightArrow.png";
import style from "./style.module.scss";

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
  console.log(pages,pageElementCount)
  const countPages = pages.map((page) =>
    page > currentPage - 3 && page < currentPage + 3 ? (
      page === currentPage ? (
        <span className={style.active} key={page.toString()} onClick={() => changePage(page) }>
          <Button text={page} />
        </span>
      ) : (
        <span key={page.toString()} onClick={() => changePage(page)}>
          <Button text={page} />
        </span>
      )
    ) : (
      ""
    )
  );
  const numberElement = counts.map((count) =>
    count === pageElementCount ? (
      <span className={style.active} key={count.toString()} onClick={() => changeCount(count)}>
        <Button text={count} />
      </span>
    ) : (
      <span key={count.toString()} onClick={() => changeCount(count)}>
        <Button text={count} />
      </span>
    )
  );
  const startPages = pages.slice(0, 2).map((page) =>
    currentPage > 4 ? (
      <span key={page.toString()} onClick={() => changePage(page)}>
        <Button text={page} />
      </span>
    ) : (
      ""
    )
  );
  const endPages = pages.slice(pages.length - 2, pages.length).map((page) =>
    currentPage < pages.length - 3 ? (
      <span key={page.toString()} onClick={() => changePage(page)}>
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

    // console.log(countPages[0],numberElement.length);
  
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
              currentPage <= pages.length-1 ? ++currentPage : currentPage
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
