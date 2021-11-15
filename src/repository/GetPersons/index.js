import axios from "axios";

class Persons {
  getPersons = async (id, quantity) => {
    let result = {
      value: null,
      error: null,
    };
    let link = `https://www.breakingbadapi.com/api/characters?limit=${quantity}&offset=${id}`;
    try {
      const response = await axios.get(link);
      result.value = response.data;
    } catch (error) {
      result.error = error.message;
    }
    return result;
  };
}

export default new Persons();
