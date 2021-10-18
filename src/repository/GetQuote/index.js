import axios from "axios";

export class Quote {
  getQuote = async (character) => {
    let result = {
      value: null,
      error: null,
    };
    character = character.replace(' ','+');
    const link = `https://www.breakingbadapi.com/api/quote/random?author=${character}`;
    try {
      const response = await axios.get(link);
      result.value = response.data;
    } catch (error) {
      result.error = error.response;
    }
    return result;
  };
}

export default new Quote();