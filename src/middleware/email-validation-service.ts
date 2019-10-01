import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { Api } from "./";

export interface I_EmailService {
    confirmation(token: string, userId: number): Promise<AxiosResponse<any>>
};

export class EmailService extends Api implements I_EmailService {
    async confirmation(token: string, userId: number) {
        const config: AxiosRequestConfig = {
            data: {
                jwtHandler: true,
                token: token
            }
        }
        return this.axiosInstance.get(`http://127.0.0.1:3000/validate/${userId}`, config);
    };
};

export const emailService = new EmailService();