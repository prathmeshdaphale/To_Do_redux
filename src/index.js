import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import counterSlice from "./redux/counterSlice";

const store = configureStore({ reducer: { counterSlice } });

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
