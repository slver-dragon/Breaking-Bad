import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/organism/Header";
import Footer from "./components/organism/Footer";
import Home from "./components/pages/Home";
import Catalog from "./components/pages/Catalog";
import Person from "./components/pages/Person";
import style from "./style.module.scss";

function App() {
  return (
    <div className={style.wrapper}>
      <BrowserRouter>
        <Header />
        <div className={style.bodyContainer}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/catalog" component={Catalog} />
            <Route path="/person/:id" component={Person} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
