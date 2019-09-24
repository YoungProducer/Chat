import axios, { AxiosResponse } from "axios";
import { I_AuthCredentials, E_ActionResponse, I_RequestResponse } from "./"

export interface I_AuthService {
    signUp(email: string, password: string, repeatedPassword: string): Promise<AxiosResponse<any> | string>    
}

export class AuthService implements I_AuthService {
    async signUp(email: string, password: string, repeatedPassword: string): Promise<AxiosResponse<any> | string> {
        try {
            if (password !== repeatedPassword) {
                return "Passwords are different";   
            }

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

