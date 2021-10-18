import axios from "axios";

export class CallAPI {
  createAPI = async (callData) => {
    let link = '';
    let result = {
      value: null,
      error: null,
    };
    switch (callData) {
      case "":
        link = `characters?limit=10`;
        break;
      default:
        link = `quote/random?author=${callData.replace(" ", "+")}`;
    }
    try {
      link = `https://www.breakingbadapi.com/api/${link}`;
      const response = await axios.get(link);
      result.value = response.data;
    } catch (error) {
      result.error = error.response;
    }
    return result;
  };
}

export default new CallAPI();