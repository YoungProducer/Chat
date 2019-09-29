import axios, {AxiosResponse} from "axios";

export interface I_TokenService {
    deactivateToken(token: string, userId: number): Promise<AxiosResponse<any>>;
    getToken(url: string): string
};

export class TokenService implements I_TokenService {
    async deactivateToken(token: string, userId: number): Promise<AxiosResponse<any>> {
        return await axios.post(`http://127.0.0.1:3000/users/${userId}/blacklist/tokens`, {
            userId: userId,
            token: token
        });
    };

    getToken(url: string): string {
        let token: string = url.split("").reverse().join("");
        token = token.slice(0, token.indexOf("/"));
        token = token.split("").reverse().join("");

        return token;
    };
};

export const tokenService = new TokenService();