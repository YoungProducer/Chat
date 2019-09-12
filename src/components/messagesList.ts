import {action, observable} from "mobx";
import {I_Message} from './message'

export class MessagesList {
    @observable messages: I_Message[] = [];

    @action addMessage(message: I_Message): void {
        this.messages.push(message);
    }

    get allMessages(): I_Message[] {
        return this.messages;
    }
}

export const messagesList = new MessagesList();