import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Catalog from "./components/pages/Catalog";
import PersonItem from "./components/pages/Personitem";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/personitem/:id" component={PersonItem} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
