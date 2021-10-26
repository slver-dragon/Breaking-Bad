import axios from "axios";

class Person {
  getPerson = async (value) => {
    let result = {
      value: null,
      error: null,
    };
    try {
      const response = await axios.get(
        `https://www.breakingbadapi.com/api/characters/${value}`
      );
      result.value = response.data;
    } catch (error) {
      result.error = error.message;
    }
    return result;
  };
}

export default new Person();
