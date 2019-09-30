import React from "react";
import {Auth} from "./components/Auth"
import {AuthService} from "./middleware/index"

import { Routes } from "./components/routes";

import axios, { AxiosRequestConfig } from "axios"

import {Api} from "./middleware/api";
const api = new Api();
export class App extends React.Component {

    auth = async () => {
        return await axios.post("http://lvh.me:3000/users", {
            email: "sashabezrukovownmail@gmail.com",
            password: "Sasha080701"
        })
    }

    componentDidMount() {
        const config: AxiosRequestConfig = {
            data: {
                jwtEnabled: true,
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InNhc2hhYmV6cnVrb3Zvd25tYWlsQGdtYWlsLmNvbSIsIm5hbWUiOiJzdHJpbmcgc3RyaW5nIiwiaWF0IjoxNTY5ODc1Nzc2LCJleHAiOjE1NzAwOTE3NzZ9.QA6kbFKWPIDDMIeonhoaO4lo2MOmzkijgfhiuooyWWQ"
            }
        }

        api.axiosInstance.get("http://127.0.0.1:3000/users/me", config)
            .then(response => console.log(response))
            .catch(error => console.log(error.response));
        // this.auth()
        // .then(response => {
        //     console.log(response)
        // })
        // .catch(error => {
        //     console.log(error.response.data.error.message)
        //     console.log(error.message)
        // })
    }

    render() {
        return(
            <>
                {/* <h1>SignUp</h1>
                <SignUp signUp={signUp} />
                <h1>SignIn</h1>
                <SignIn signIn={signIn} /> */}
                <Routes />
            </>
        )
    }
}