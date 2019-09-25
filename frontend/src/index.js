import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer from "./reducers/index";
import middleware from "./middleware/index";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(reducer, middleware);
console.log("state", store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
