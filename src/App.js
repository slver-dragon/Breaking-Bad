import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CardList from "./components/pages/cardlist";
import Home from "./components/pages/home";
import PersonItem from "./components/pages/personitem";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cardlist" component={CardList} />
        <Route path="/personitem" component={PersonItem} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
