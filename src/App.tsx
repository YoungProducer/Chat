import React from "react";
import {observer, Provider} from "mobx-react";

import { ChatStore } from './components/ChatStore'
import { MessagesList } from "./components/MessageList";

@observer
export class App extends React.Component {
    private chatStore: ChatStore = new ChatStore();

    componentDidMount(): void {
        this.chatStore.addMessage(Math.random(), "hey, geyyy", "me", "you");
    }

    render() {
        return(
            <div>
                <h1>hello</h1>
                <Provider chatStore={this.chatStore}>
                    <MessagesList />
                </Provider>
            </div>
        )
    }

}
