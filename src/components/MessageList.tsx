import React from "react";
import { inject, observer } from "mobx-react";
import {ChatStore} from "./ChatStore";
import {toJS} from "mobx";

interface I_MessagesList {
    chatStore?: ChatStore
}
@inject('chatStore')
@observer
export class MessagesList extends React.Component<I_MessagesList> {
    render() {
        return this.props.chatStore.messages.map((message, index) => <p key={index}>{message.body}</p>)
    }
}
