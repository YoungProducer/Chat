import React from "react";
import {Auth} from "./components/Auth"
import {AuthService} from "./middleware/index"

import { Routes } from "./components/routes";

import axios from "axios"

export class App extends React.Component {

    auth = async () => {
        return await axios.post("http://lvh.me:3000/users", {
            email: "sashabezrukovownmail@gmail.com",
            password: "Sasha080701"
        })
    }

    componentDidMount() {
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