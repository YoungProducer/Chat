import React from "react";
import { computed, observable } from "mobx";

export interface I_Message {
  id: number;
  body: string;
  sender: string;
  receiver: string;
}

export const MessageState: I_Message = observable({
  id: null,
  body: "",
  sender: "",
  receiver: ""
});

export class Message extends React.Component<I_Message, {}> {
  id: number;
  @observable body: string;
  @observable sender: string;
  @observable receiver: string;

  componentState: I_Message = MessageState

  constructor(id: number, body: string, sender: string, receiver: string) {
    super({ id, body, sender, receiver });
    this.id = id;
    this.body = body;
    this.sender = sender;
    this.receiver = receiver;
    MessageState.body = body;
  }

  @computed set messageBody(body: string) {
    this.body = body;
  }

  render() {
    return (
      <div>
        <p>{this.body}</p>
      </div>
    );
  }
}
