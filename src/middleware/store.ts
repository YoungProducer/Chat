import {action, computed} from "mobx";

export class Store {
    stores: any[] = [];

    @action addSubStore(name: string, subStore: any) {
        this.stores.push({name, subStore});
    }

    @action getSubStoreByName(name: string) : any {
        let index: number = 0;

        for (let i = 0; i < this.stores.length; i++) {
            if (this.stores[i][0] === name) {
                index = i;
            }
        }

        return this.stores[index].subStore;
    }
}