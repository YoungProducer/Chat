import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "mobx-react";
import {AuthService} from "./middleware"
import "./index.css"

import { App } from "./App";

const authService = new AuthService();
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider authService={authService}>
    <App />
  </Provider>,
  rootElement
);
