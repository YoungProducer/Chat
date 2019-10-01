import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

export class Api {
    axiosInstance: AxiosInstance;
    
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
}