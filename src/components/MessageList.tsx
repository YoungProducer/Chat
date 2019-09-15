import React from "react";
import { inject, observer } from "mobx-react";
import {ChatStore, I_Message} from "../store/ChatStore";
import { Message } from "./Message/Message";

interface I_MessagesList {
    chatStore?: ChatStore
}

@inject('chatStore')
@observer
export class MessagesList extends React.Component<I_MessagesList> {
    render() {
        return this.props.chatStore.messages.map((message, index) => (
            <Message 
                key={index}
                message={message}
            />
        )
    )}
}
