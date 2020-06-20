import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import s from "./App.module.css";
import Home from "./pages/Home";
import Support from "./pages/Support";

const App = () => {
  return (
    <div className={s.conteiner}>
      <Router>
        <Navbar />
        <Switch>
            <Route path="/profile">
              <Home/>
            </Route>
            <Route path="/help">
              <Support/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
