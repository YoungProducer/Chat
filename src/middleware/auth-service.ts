import axios, { AxiosResponse } from "axios";
import { I_AuthCredentials, E_ActionResponse, I_RequestResponse } from "."

export interface I_AuthService {
    validatePassword(password: string, repeatedPassword: string): boolean,
    signUp(email: string, password: string): Promise<AxiosResponse<any>>,
    signIn(email: string, password: string): Promise<AxiosResponse<any>>
}

export class AuthService implements I_AuthService {
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

