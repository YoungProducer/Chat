import React from "react";
import { signUp, signIn } from "./middleware"
import { SignUp, SignIn } from "./components/Auth";

export class App extends React.Component {
    render() {
        return(
            <div>
                <h1>SignUp</h1>
                <SignUp signUp={signUp} />
                <h1>SignIn</h1>
                <SignIn signIn={signIn} />
            </div>
        )
    }
}