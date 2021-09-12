import IMPORT_DATA from "../actionTypes/importData";

const initialState = {
  cards: []
};

const cardListReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMPORT_DATA:
      return { ...state, cards: [action.payload] };
    default:
      return state;
  }
};
export default cardListReducer;
