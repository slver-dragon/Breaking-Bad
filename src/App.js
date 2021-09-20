import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home_";
import Catalog from "./components/pages/Catalog";
import PersonItem from "./components/pages/Personitem_";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/personitem" component={PersonItem} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
