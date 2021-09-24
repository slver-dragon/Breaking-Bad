import CardList from './components/organism/CardList';

function App() {
  return (
    <CardList />
  );
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import CardList from "./components/organism/CardList";
import Home from "./components/pages/Home";
import Catalog from "./components/pages/Catalog";
import PersonItem from "./components/pages/Personitems";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/personitem" component={PersonItem} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
