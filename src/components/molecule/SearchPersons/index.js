import React from "react";
import Button from "../../atom/Button";
import lens from "../../../assets/img/search.png";
import cross from "../../../assets/img/cross.png";
import style from "./style.module.scss";

const SearchPersons = ({ search }) => {
  let request = React.createRef();
  const discardSearch = () => {
    search('');
    request.current.value = '';
  }
  const pressEnter = (event) => {
    if (event.keyCode === 13) search(request.current.value)
  }
  return (
    <label className={style.search}>
      <span onClick={() => discardSearch()}>
        <Button img={cross} />
      </span>
      <input type="text" placeholder="Поиск" ref={request} onKeyDown={(event) => {pressEnter(event)}} />
      <span onClick={() => search(request.current.value)}>
        <Button img={lens} text="Найти" />
      </span>
    </label>
  );
};

export default SearchPersons;
