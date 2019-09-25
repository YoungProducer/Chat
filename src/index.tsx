import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "mobx-react";
import {authService} from "./middleware"
import "./index.css"

import { App } from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider 
    authService={authService}
  >
    <App />
  </Provider>,
  rootElement
);
