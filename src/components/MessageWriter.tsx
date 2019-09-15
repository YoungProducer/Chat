import React from "react";
import { ChatStore, chatStore } from "../store/ChatStore"
import { observable, decorate, action } from "mobx";
import { inject } from "mobx-react";
import { observer } from "mobx-react";

interface I_MessageWriter {
    chatStore?: ChatStore;
}

@inject('chatStore')
@observer
export class MessageWriter extends React.Component<I_MessageWriter, {}> {
    @observable private body: string = "";
    @observable private sender: string = "";
    @observable private receiver: string = "";
    @observable private messageEditing: boolean = false;

    @action 
    sendMessage = () => {
        const { chatStore } = this.props;
        const { body, sender, receiver } = this;

        if (chatStore.isMessageEditing) {
            chatStore.changeBody(body);
            chatStore.messageEditing = false;
        } else {
            chatStore.addMessage(chatStore.nextMessageId, body, sender, receiver);
        }

        this.body = this.sender = this.receiver = "";
    }

    _inputHandle(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.name === "body") {
            this.body = event.target.value;
        }
        if (event.target.name === "sender") {
            this.sender = event.target.value;
        }
        if (event.target.name === "receiver") {
            this.receiver = event.target.value;
        }
    }

    updateFields() {
        const { chatStore } = this.props;

        this.body = this.props.chatStore.message.body;
        chatStore.messageEditing = true;
    }

    render() {
        const { body, sender, receiver } = this;
        const { chatStore } = this.props;

        return(
            <div>
                <div>
                    <button 
                        style={{
                            display: chatStore.selectedMessagesCount === 1 ? "inline-block" : "none"
                        }}
                        onClick={() => this.updateFields()}
                    >
                        Change message
                    </button>
                    <button
                        style={{
                            display: chatStore.selectedMessagesCount > 0 ? "inline-block" : "none"
                        }}
                        onClick={() => {
                            chatStore.deleteMessages()
                        }}
                    >
                        {chatStore.selectedMessagesCount > 1 ? "Delete messages" : "Delete message"}
                    </button>
                </div>
                <input 
                    type="text" 
                    value={body}
                    name="body"
                    onChange={event => this._inputHandle(event)} 
                    placeholder="message"
                />
                <input 
                    type="text" 
                    value={sender}
                    name="sender"
                    onChange={event => this._inputHandle(event)} 
                    placeholder="sender"
                />
                <input 
                    type="text" 
                    value={receiver}
                    name="receiver"
                    onChange={event => this._inputHandle(event)} 
                    placeholder="receiver"
                />
                <button 
                    onClick={() => this.sendMessage()}
                >
                    {chatStore.isMessageEditing ? "Save message" : "Send message"}
                </button>
            </div>
        )
    };
};