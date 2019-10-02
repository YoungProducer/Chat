import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from "axios";

export class Api {
    axiosInstance: AxiosInstance;
    private m_accessToken: string;
    private m_refreshToken: string

    constructor(config: AxiosRequestConfig = {}) {
        this.axiosInstance = axios.create({
            ...config || {
                baseURL: "http://127.0.0.1:3000",
                timeout: 10000
            }
        });

        this.axiosInstance.interceptors.request.use(
            request => this.requestJWTHandler(request)
        )
    }

    isJWTEnabled = (config: AxiosRequestConfig) => {
        return config.data.hasOwnProperty("jwtEnabled") && config.data.jwtEnabled ? 
            true : false;
    }

    isJWRTEnabled = (config: AxiosRequestConfig) => {
        return config.data.hasOwnProperty("jwrtEnabled") && config.data.jwrtEnabled ?
            true : false;
    }

    isResHasTokens = (config: AxiosResponse) => {
        return (config.data.hasOwnProperty("accessToken") && !config.data.accessToken)
         && (config.data.hasOwnProperty("refreshToken") && !config.data.refreshToken)
         ? true : false;
    }

    requestJWTHandler = (request: AxiosRequestConfig) => {
        if (this.isJWTEnabled(request)) {
            request.headers['Authorization'] = `Bearer ${request.data.token}`;
        }

        delete request.data.jwtEnabled;
        delete request.data.token;
        return request
    }

    requestJWRTHandler = (request: AxiosRequestConfig) => {
        if (this.isJWRTEnabled(request)) {
            request.headers['Authorization'] = `Bearer ${request.data.token} ${request.data.userId}`;
        }

        delete request.data.jwrtEnabled;
        delete request.data.token;
        delete request.data.userId;
        return request;
    }

    responseHandler = (response: AxiosResponse) => {
        if (this.isResHasTokens(response)) {
            this.m_accessToken = response.data.accessToken;
            this.m_refreshToken = response.data.refreshToken;
            console.log(this.m_refreshToken, this.m_accessToken);
        }

        delete response.data.accessToken;
        delete response.data.refreshToken;
        return response;
    }
}