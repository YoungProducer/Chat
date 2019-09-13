import {action, observable} from "mobx";

interface I_Message {
    id: number;
    body: string;
    sender: string;
    receiver: string;
    read: boolean;
}

export class ChatStore {
    @observable messages: I_Message[] = [];

    @action
    addMessage(id: number, body: string, sender: string, receiver: string) {
        this.messages.push({id, body, sender, receiver, read: false});
    }

    @action
    readMessage(id: number) {
        this.messages.find(message => message.id === id).read = true;
    }
}

export const chatStore = new ChatStore();