import React from "react";
import HomePage from "./pages/homepage.component";
import { Route, Switch } from "react-router-dom";
import "./App.css";

const Hats = () => <h1>HATS PAGE</h1>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/hats" component={Hats}></Route>
      </Switch>
    </div>
  );
}

export default App;
