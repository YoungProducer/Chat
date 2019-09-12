import React from "react";
import ReactDOM from "react-dom";
// import './styles/main.scss'

import { App } from "./App";
import { messagesList } from "./components/messagesList";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <App messagesList={messagesList} />,
  rootElement
);
