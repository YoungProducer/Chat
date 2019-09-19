import axios from "axios";
import { I_SignUpResponse, I_SignUpRequestBody, E_ActionResponse, I_RequestResponse } from "./"


interface I_SignUp {
    (email: string, password: string, repeatedPassword: string): Promise<I_RequestResponse>;
}

export const signUp: I_SignUp = async (email, password, repeatedPassword) => {
    let requestResponse: I_RequestResponse = {
        actionResponse: E_ActionResponse.DEFAULT
    }

    if (password.length >= 6 && repeatedPassword.length >= 6) {
        if (password === repeatedPassword) {
            const requestBody: I_SignUpRequestBody = {
                email: email,
                password: password
            }
    
            await axios.post("http://lvh.me:3000/signup", requestBody)
            .then(response => {
                requestResponse.actionResponse = response.data.actionResponse;
            })
            .catch(error => {
                console.log(error);
            });
        } else requestResponse.actionResponse = E_ActionResponse.DIFFERENT_PASSWORDS;
    } else requestResponse.actionResponse = E_ActionResponse.SHORT_PASSWORD;

    return requestResponse;
}

interface I_SignIn {
    (email: string, password: string): Promise<I_RequestResponse>;
}

export const signIn: I_SignIn = async (email, password) => {
    let requestResponse: I_RequestResponse = {
        actionResponse: E_ActionResponse.DEFAULT
    }

    if (password.length >= 6) {
        const requestBody: I_SignUpRequestBody = {
            email: email,
            password: password
        }

        await axios.post("http://lvh.me:3000/signin", requestBody)
        .then(response => {
            requestResponse.actionResponse = response.data.actionResponse
        })
        .catch(error => {
            console.log(error)
        })
    } else requestResponse.actionResponse = E_ActionResponse.SHORT_PASSWORD;

    return requestResponse;
}
