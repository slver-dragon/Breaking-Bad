import { useSelector } from "react-redux";
import Error from "../../atom/Error";
import PersonSheet from "./component";

export const PersonSheetContainer = ({ value }) => {
  const character = useSelector(
    (state) => state.personData.characters[value.id - 1]
  );
  
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
