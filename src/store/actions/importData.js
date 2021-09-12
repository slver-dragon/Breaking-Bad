import IMPORT_DATA from "../actionTypes/importData";

const importData = (payload) => {
  return {
    type: IMPORT_DATA, payload
  };
};

export default importData;