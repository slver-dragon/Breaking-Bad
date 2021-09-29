import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Error from "../../atom/Error";
import PersonSheet from "./component";

export const PersonSheetContainer = () => {
  let character = "";
  const { id } = useParams();
  const characters = useSelector((state) => state.personData.characters);
  for (let i = 0; i < characters.length; i++) {
    if (String(characters[i].char_id) === id) {
      character = characters[i];
      break;
    }
  }

  return (
    <div>
      {character ? (
        <PersonSheet character={character} />
      ) : (
        <Error textError={"Отсутствие данных персонажа."} />
      )}
    </div>
  );
};

export const container = PersonSheetContainer;
