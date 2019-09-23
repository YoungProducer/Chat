import React from "react";
import "./SignIn.css"

export interface I_SignInState {
    email: string,
    password: string
}

export interface I_SignInProps {

}

export class SignIn extends React.Component<I_SignInProps, I_SignInState> {
    constructor(props: I_SignInProps) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    render() {
        return(
            <div className="wrapper">
                <h1 className="title">Sign in</h1>
                <input className="input" type="email" name="email" placeholder="email" />
                <input className="input" type="password" name="password" placeholder="password" />
                <button className="confirmation">Sign in</button>
            </div>
        )
    }
}