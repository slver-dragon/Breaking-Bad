import API from "./api";
import { importData } from "../actions/importData";

const request = "characters/?limit=10&offset=0";

export const initialState = {
  isLoad: false,
  cards: [],
};

export const importDataStore = () => async (dispatch) => {
  console.log("Мы в store");
  const response = await API.get(request);
  importData(response.data);
  console.log(response.data);
};