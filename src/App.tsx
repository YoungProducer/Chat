import React from "react";
import { observer } from "mobx-react";

import { MessagesList } from "./components/messagesList";
import { MessageWriter } from "./components/messageWriter";

interface I_App {
  messagesList: MessagesList;
}

@observer
export class App extends React.Component<I_App, {}> {
  render() {
    const { messagesList } = this.props;
    console.log(messagesList)
    return (
      <div>
        {messagesList.allMessages.map(message => (
          <p key={message.id}>{message.body}</p>
        ))}

        <MessageWriter store={messagesList} />
      </div>
    );
  }
}
