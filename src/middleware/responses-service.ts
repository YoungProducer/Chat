import { observable, action, computed } from "mobx";
import { observer } from "mobx-react";

export class ResponsesService {
    constructor() {

    }

    @observable private resStatus: number = -1;
    @observable private resMessage: string = "";

    @action
    setResponseStatus(status: number): void {
        this.resStatus = status;
    };

    @computed
    get responseStatus() {
        return this.resStatus;
    };

    @action
    setMessage(message: string): void {
        this.resMessage = message;
    };

    @computed 
    get responseMessage() {
        return this.resMessage;
    }
}

export const responsesService = new ResponsesService();