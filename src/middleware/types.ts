export enum E_ActionResponse {
    DEFAULT = 0,
    SUCCESS = 200,
    ERROR = 400,
    DIFFERENT_PASSWORDS = 401,
    SHORT_PASSWORD = 402,
    EMAIL_ALREADY_EXIST = 403,
    USER_NOT_FOUND = 404,
    INVALID_PASSWORD = 405,
}

export interface I_RequestResponse {
    data?: object,
    actionResponse: E_ActionResponse
}

export interface I_AuthCredentials {
    email: string,
    password: string
}