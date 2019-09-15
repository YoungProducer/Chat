import React from "react";
import {observer, Provider} from "mobx-react";

import { ChatStore, chatStore } from './store/ChatStore'
import { MessagesList } from "./components/MessageList";
import { MessageWriter } from "./components/MessageWriter";

@observer
export class App extends React.Component {
    private chatStore: ChatStore = new ChatStore();

    render() {
        return(
            <div>
                <Provider chatStore={this.chatStore}>
                    <MessagesList />
                    <MessageWriter />
                </Provider>
            </div>
        )
    }

}
