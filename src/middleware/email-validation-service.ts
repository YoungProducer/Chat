import axios, { AxiosResponse } from "axios";

export interface I_EmailService {
    confirmation(token: string, userId: number): Promise<AxiosResponse<any>>
};

export class EmailService implements I_EmailService {

    async confirmation(token: string, userId: number) {
        return await axios.get(`http://127.0.0.1:3000/validate/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    };
};

export const emailService = new EmailService();