import PersonList from "./GetPersonList";
import Quote from "./GetQuote";

class Reposirory {
  APIPersonList = PersonList;
  APIQuote = Quote;
}

export default new Reposirory();