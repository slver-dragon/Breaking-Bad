import importData from "../../../store/actions/importData";

let link = "https://breakingbadapi.com/api/characters/?limit=10&offset=0";

const Api = () => (dispatch) => {
  fetch(link)
    .then((response) => response.json())
    .then((json) => dispatch(importData(json)));
};

export default Api;