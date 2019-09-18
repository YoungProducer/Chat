type T_SignUp = {
    data: "SUCCES" | "ERROR"
}

export interface I_SignUpResponse {
    string: T_SignUp
}

export interface I_SignUpRequestBody {
    email: string,
    password: string
}