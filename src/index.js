import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";
import Header from "./components/molecule/Home";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <App />
    </Provider>,
  </React.StrictMode>,
  document.getElementById("root")
);
