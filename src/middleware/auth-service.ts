import axios, { AxiosResponse } from "axios";
import { observable, action, computed } from "mobx";
import { I_AuthCredentials, E_ActionResponse, I_RequestResponse } from "."

export interface I_AuthService {
    validatePassword(password: string, repeatedPassword: string): boolean,
    signUp(email: string, password: string): Promise<AxiosResponse<any>>,
    signIn(email: string, password: string): Promise<AxiosResponse<any>>
}

export class AuthService implements I_AuthService {
    @observable private loggedIn: boolean = false;

    @action
    logIn() {
        this.loggedIn = true;
    }

    @action 
    logOut() {
        this.loggedIn = false;
    }

    @computed
    get isLoggedIn() {
        return this.loggedIn;
    }

    validatePassword(password: string, repeatedPassword: string): boolean {
        return password === repeatedPassword;
    }

    async signUp(email: string, password: string): Promise<AxiosResponse<any>> {
        const credentials: I_AuthCredentials = {
            email: email,
            password: password
        }

        return await axios.post("http://127.0.0.1:3000/users", credentials);
    }

    async signIn(email: string, password: string): Promise<AxiosResponse<any>> {
        const credentials: I_AuthCredentials = {
            email: email,
            password: password
        }

        return await axios.post("http://127.0.0.1:3000/users/login", credentials);
    }
}

export const authService = new AuthService();

