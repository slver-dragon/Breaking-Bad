import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Catalog from "./components/pages/Catalog";
import Person from "./components/pages/Person";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/person/:id" component={Person} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
