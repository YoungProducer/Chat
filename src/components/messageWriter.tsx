import {observer} from "mobx-react";
import React from "react";
import {observable} from "mobx";
import {Message} from "./message";
import { MessagesList } from "./messagesList";

interface I_MessageWriter {
    store: MessagesList;
}

@observer
export class MessageWriter extends React.Component<I_MessageWriter, {}> {
    @observable body: string = "";
    @observable sender: string = "";
    @observable receiver: string = "";

    render() {
        const { store } = this.props;
        let { body, sender, receiver } = this;

        return (
            <div>
                <input
                    type="text"
                    name="body"
                    onChange={event => (body = event.target.value)}
                />
                <input
                    type="text"
                    name="sender"
                    onChange={event => (sender = event.target.value)}
                />
                <input
                    type="text"
                    name="receiver"
                    onChange={event => (receiver = event.target.value)}
                />
                <button
                    onClick={() =>
                        store.addMessage(new Message(Math.random(), body, sender, receiver))
                    }
                >
                    Надіслати
                </button>
            </div>
        );
    }
}