import React from "react";
import axios from "axios";
import {inject} from "mobx-react";
import {AuthService, I_AuthService} from "../../../middleware"
import "./SignUp.css"

export interface I_SignUpState {
    email: string,
    password: string,
    repeatedPassword: string
}

export interface I_SignUpProps {
    authService?: I_AuthService
}

@inject('authService')
export class SignUp extends React.Component<I_SignUpProps, I_SignUpState> {
    constructor(props: I_SignUpProps) {
        super(props);

        this.state = {
            email: "",
            password: "",
            repeatedPassword: ""
        }
    }

    inputHandleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        if (name === "email") {
            this.setState({
                email: value
            });
        }
        if (name === "password") {
            this.setState({
                password: value
            });
        }
        if (name === "repeatedPassword") {
            this.setState({
                repeatedPassword: value
            })
        }
    }

    buttonHandleOnClick = () => {
        const { authService } = this.props;
        const { email, password, repeatedPassword} = this.state;

        authService.signUp(email, password, repeatedPassword)
        .then(response => {
            
        })
        .catch(error => {
            console.log(error.response)
        });
        
    }

    render() {
        const { email, password, repeatedPassword } = this.state;

        return (
            <div className="auth-wrapper">
                <h1 className="auth-title">Sign up</h1>
                <input className="auth-input" value={email}name="email" type="email" placeholder="email" onChange={this.inputHandleOnChange} />
                <input className="auth-input" value={password}name="password" type="password" placeholder="password" onChange={this.inputHandleOnChange} />
                <input className="auth-input" value={repeatedPassword}name="repeatedPassword" type="password" placeholder="repeated password" onChange={this.inputHandleOnChange} />
                <button className="auth-confirmation" onClick={this.buttonHandleOnClick}>Sign up</button>
            </div>
        )
    }
}