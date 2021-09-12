import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";
import Api from "./components/atom/api/component";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Api />
      <App />
    </Provider>,
  </React.StrictMode>,
  document.getElementById("root")
);
