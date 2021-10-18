import axios from "axios";

export class CallAPI {
  createAPI = async (link) => {
    let result = {
      value: null,
      error: null,
    };
    try {
      const response = await axios.get(link);
      result.value = response.data;
    } catch (error) {
      result.error = error.response;
    }
    return result;
  };
}

export default new CallAPI();
