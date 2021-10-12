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
    <div className={style.body}>
      <div className={style.wrapper}>
        <BrowserRouter>
          <Header />
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
// Все равно не понимаю, я ведь все это делаю уже внутри футера и хидера? Зачем лишние оболочки?
