import axios, { AxiosResponse } from "axios";
import { I_AuthCredentials, E_ActionResponse, I_RequestResponse } from "."

export interface I_AuthService {
    validatePassword(password: string, repeatedPassword: string): boolean,
    signUp(email: string, password: string): Promise<AxiosResponse<any>>    
}

export class AuthService implements I_AuthService {
    validatePassword(password: string, repeatedPassword: string): boolean {
        return password === repeatedPassword;
    }

    async signUp(email: string, password: string): Promise<AxiosResponse<any>> {
        try {
            const credentials: I_AuthCredentials = {
                email: email,
                password: password
            }

            let res: AxiosResponse<any>;

            return await axios.post("http://127.0.0.1:3000/users", credentials);
        } catch (error) {
            return error;
        }
    }
}

export const authService = new AuthService();

