import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/reduxStore";
import "./Index.module.css";

import App from "./App.js";

let rerenderEntireTree = (state) => {
  ReactDom.render(
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree();
