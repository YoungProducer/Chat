import {observable} from "mobx";

export class Message {
    id: number;
    @observable body: string;
    @observable sender: string;
    @observable receiver: string;
    @observable read: boolean;

    constructor(id: number, body: string, sender: string, receiver: string) {
        this.id = id;
        this.body = body;
        this.sender = sender;
        this.receiver = receiver;
        this.read = false;
    }
}