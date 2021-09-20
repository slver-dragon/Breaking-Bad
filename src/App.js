import React from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import CardList from "./components/organism/CardList";
import Home from "./components/organism/Home";
import PersonItem from "./components/organism/PersonItem";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/CardList">CrdList</Link>
        </li>
        <li>
          <Link to="/PersonItem">PersonItem</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/CardList" component={CardList} />
        <Route path="/PersonItem" component={PersonItem} />
      </Switch>
      <Redirect to="/"/>
    </BrowserRouter>
  );
}

export default App;
