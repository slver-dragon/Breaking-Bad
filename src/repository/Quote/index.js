import axios from "axios";

export class Quote {
    createQuote = async () => {
      let result = {
        value: null,
        error: null,
      };
      try {
        const response = await axios.get(
          "https://www.breakingbadapi.com//api/quote/random?author=Skyler+White"
        );
        result.value = response.data;
      } catch (error) {
        result.error = error.response;
      }
      return result;
    };
  }

  export default new Quote();