import {action, observable, reaction, computed} from "mobx";

export interface I_Message {
    id: number;
    body: string;
    sender: string;
    receiver: string;
    read: boolean;
    selected: boolean;
}

export class ChatStore {
    @observable messages: I_Message[] = [];
    @observable m_messageEditing: boolean = false;

    @action
    addMessage(id: number, body: string, sender: string, receiver: string) {
        this.messages.push({id, body, sender, receiver, read: false, selected: false});
    }


    @action
    readMessage(id: number) {
        this.messages.find(message => message.id === id).read = true;
    }


    @action
    markAsSelected(id: number) {
        this.messages.find(message => message.id === id).selected = true;
    }


    @action
    markAsUnselected(id: number) {
        this.messages.find(message => message.id === id).selected = false;
    }


    @action
    findMessageById(id: number): I_Message {
        return this.messages.find(message => message.id === id);
    }

    
    @action
    changeBody(body: string): void {
        const id = this.selectedMessageId;
        this.messages.find(message => message.id === id).body = body;
    }


    @action 
    deleteMessages(): void {
        const selectedMessageArray = this.selectedMessages

        for (let i = 0; i < selectedMessageArray.length; i++) {
            this.messages.splice(this.messages.indexOf(selectedMessageArray[i]), 1);
        }
    }


    @computed
    get nextMessageId(): number {
        return this.messages.length === 0 ? 0 : this.messages[this.messages.length - 1].id + 1;
    }


    @computed
    get selectedMessages(): I_Message[] {
        return this.messages.filter(message => message.selected);
    }


    @computed
    get selectedMessagesCount(): number {
        return this.messages.filter(message => message.selected).length;
    }


    @computed
    get selectedMessageId(): number {
        const array = this.messages.filter(message => message.selected);
        return array[array.length - 1].id;
    }

    
    @computed
    get message(): I_Message {
        return this.messages[this.selectedMessageId];
    }


    @computed
    get isMessageEditing(): boolean {
        return this.m_messageEditing;
    }


    set messageEditing(isEditing: boolean) {
        this.m_messageEditing = isEditing;
    }
}

export const chatStore = new ChatStore();