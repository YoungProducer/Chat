import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "mobx-react";
import {authService, tokenService, emailService} from "./middleware";
import {cookies} from "./utils/cookies";
import "./index.css"

import { App } from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider 
    authService={authService}
    emailService={emailService}
    tokenService={tokenService}
    cookies={cookies}
  >
    <App />
  </Provider>,
  rootElement
);
