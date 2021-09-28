import { useSelector } from "react-redux";
import Error from "../../atom/Error";
import PersonPage from "./component";

export const PersonPageContainer = ({ value }) => {
  const character = useSelector(
    (state) => state.personData.characters[value.id - 1]
  );

  return (
    <div>
      {character ? (
        <PersonPage character={character} />
      ) : (
        <Error textError={"Отсутствие данных персонажа."} />
      )}
    </div>
  );
};

export const container = PersonPageContainer;
