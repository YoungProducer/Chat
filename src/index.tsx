import React from "react";
import ReactDOM from "react-dom";
// import './styles/main.scss'

import { App } from "./App";
import { Store } from "./middleware/store";
import { messagesList } from "./components/messagesList";

const store: Store = new Store();
store.addSubStore("messagesList", messagesList);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <App messagesList={store.getSubStoreByName("messagesList")} />,
  rootElement
);
