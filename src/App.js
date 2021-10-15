import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/organism/Header";
import Footer from "./components/organism/Footer";
import Home from "./components/pages/Home";
import Catalog from "./components/pages/Catalog";
import Person from "./components/pages/Person";
import style from "./style.module.scss";

function App() {
  const displayHome = useSelector((state) => state.services.displayHome);
  const wrapperStyle = displayHome ? style.wrapperHome : style.wrapper;
  return (
    <div className={style.body}>
      <div className={wrapperStyle}>
        <BrowserRouter>
          <div className={style.header}>
            <Header />
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/catalog" component={Catalog} />
            <Route path="/person/:id" component={Person} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
