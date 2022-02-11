import React from "react";
import Button from "../../atom/Button";
import cardsListOn from "../../../assets/img/listOn.png";
import cardsListOff from "../../../assets/img/listOff.png";
import cardsGridOn from "../../../assets/img/gridOn.png";
import cardsGridOff from "../../../assets/img/gridOff.png";
import style from "./style.module.scss";

const FormatChanger = ({ isCardsList, exchangeCatalogFormat }) => {
  const [cardsListImage, cardsGridImage] = isCardsList
    ? [cardsListOn, cardsGridOff]
    : [cardsListOff, cardsGridOn];
  return (
    <div className={style.changer}>
      <span>Каталог</span>
      <div className={style.buttonBlock}>
        <span id="PutListFormat" onClick={() => exchangeCatalogFormat(true)}>
          <Button img={cardsListImage} text={""} />
        </span>
        <span id="PutGridFormat" onClick={() => exchangeCatalogFormat(false)}>
          <Button img={cardsGridImage} text={""} />
        </span>
      </div>
    </div>
  );
};

export default FormatChanger;
