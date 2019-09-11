import {observable} from "mobx";

export interface I_Message {
    id: number;
    body: string;
    sender: string;
    receiver: string;
}

export class Message {
    id: number;
    @observable body: string;
    @observable sender: string;
    @observable receiver: string;

    constructor(id: number, body: string, sender: string, receiver: string) {
        this.id = id;
        this.body = body;
        this.sender = sender;
        this.receiver = receiver;
    }
}