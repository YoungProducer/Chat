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

    inputHandleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        if (name === "email") {
            this.setState({
                email: value
            })
        }
        if (name === "password") {
            this.setState({
                password: value
            })
        }
    }

    render() {
        return(
            <div className="auth-wrapper">
                <h1 className="auth-title">Sign in</h1>
                <input className="auth-input" type="email" name="email" placeholder="email" onChange={this.inputHandleOnChange}/>
                <input className="auth-input" type="password" name="password" placeholder="password" onChange={this.inputHandleOnChange}/>
                <button className="auth-confirmation">Sign in</button>
            </div>
        )
    }
}