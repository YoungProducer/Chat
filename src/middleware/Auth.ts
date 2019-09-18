import axios from "axios";
import { I_SignUpResponse, I_SignUpRequestBody } from "./"

export enum Response {
    DEFAULT = 0,
    SUCCESS = 200,
    ERROR = 400,
    DIFFERENT_PASSWORDS = 401,
    SHORT_PASSWORD = 402,
}

interface I_SignUp {
    (email: string, password: string, repeatedPassword: string): Response;
}

export const signUp: I_SignUp = (email, password, repeatedPassword) => {
    
    if (password === repeatedPassword) {
        const requestBody: I_SignUpRequestBody = {
            email: email,
            password: password
        }
        axios.post("http://lvh.me:3000/signup", requestBody)
        .then(response => {
            console.log(response)
            return Response.SUCCESS;
        })
        .catch(error => {
            console.log(error)
        });
    } else return Response.DIFFERENT_PASSWORDS;

    return Response.DEFAULT;
}
