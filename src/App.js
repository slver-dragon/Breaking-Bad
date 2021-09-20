import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import CardList from "./components/pages/cardlist";
import Home from "./components/pages/home";
import PersonItem from "./components/pages/personitem";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cardList" component={CardList} />
        <Route path="/PersonItem" component={PersonItem} />
      </Switch>
      <Redirect to="/"/>
    </BrowserRouter>
  );
}

export default App;
