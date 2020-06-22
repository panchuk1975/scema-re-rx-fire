import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import s from "./App.module.css";
import HomeConteiner from "./conteiners/homeConteiner";
import Support from "./pages/Support";

const App = (props) => {
  return (
    <div className={s.conteiner}>
        <Navbar />
        <Switch>
            <Route path="/profile">
              <HomeConteiner state={props.state}/>
            </Route>
            <Route path="/help">
              <Support/>
            </Route>
        </Switch>
    </div>
  );
};

export default App;
