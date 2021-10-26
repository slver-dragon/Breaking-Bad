import PersonList from "./GetPersonList";
import Person from "./GetPerson";
import Quote from "./GetQuote";

class Reposirory {
  APIPersonList = PersonList;
  APIPerson = Person;
  APIQuote = Quote;
}

export default new Reposirory();