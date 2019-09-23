import React from "react";
// import { signUp, signIn } from "./middleware"
// import { SignUp, SignIn } from "./components/Auth";
import {SignIn} from "./components/Auth/SignIn/SignIn"
import axios from "axios"

export class App extends React.Component {
    render() {
        return(
            <>
                {/* <h1>SignUp</h1>
                <SignUp signUp={signUp} />
                <h1>SignIn</h1>
                <SignIn signIn={signIn} /> */}
                <SignIn />
            </>
        )
    }
}