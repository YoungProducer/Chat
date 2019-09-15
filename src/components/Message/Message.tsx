import React from "react";
import { observable } from "mobx";
import { observer, inject } from "mobx-react";
import { ChatStore, I_Message } from "../../store/ChatStore";

import "./Message.css"

interface I_MessageProps {
    message: I_Message,
    chatStore?: ChatStore
}

@inject('chatStore')
@observer
export class Message extends React.Component<I_MessageProps, {}> {

    @observable selected: boolean = false;

    messageWrapperOnClickHandle = () => {
        const { chatStore } = this.props;
        const { id, selected } = this.props.message;

        if (!chatStore.isMessageEditing) {
            selected ? chatStore.markAsUnselected(id) : chatStore.markAsSelected(id)
        }
    }

    render() {
        const { chatStore } = this.props;
        const { id, body, sender, receiver, read, selected } = this.props.message;

        return (
            <div className={selected ? "message-wrapper-selected" : "message-wrapper"} onClick={this.messageWrapperOnClickHandle}>
                <p className="message-body">{body}</p>
            </div>
        )
    }
}