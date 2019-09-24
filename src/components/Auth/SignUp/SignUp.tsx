import React from "react";
import axios from "axios";
import {inject} from "mobx-react";
import {AuthService, I_AuthService, ResponsesService} from "../../../middleware";
import {ErrorPopUp} from "../";
import "./SignUp.css";

export interface I_SignUpState {
    email: string,
    password: string,
    repeatedPassword: string,
    responseStatus: number,
    responseMessage: string,
    popUpPose?: boolean
}

export interface I_SignUpProps {
    authService?: I_AuthService,
    responsesService?: ResponsesService
}

// TODO: Include popup window into SignIn and SignUp render method
// It should slide from under them

@inject('authService', 'responsesService')
export class SignUp extends React.Component<I_SignUpProps, I_SignUpState> {
    constructor(props: I_SignUpProps) {
        super(props);

        this.state = {
            email: "",
            password: "",
            repeatedPassword: "",
            responseStatus: -1,
            responseMessage: "",
            popUpPose: false
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
        const { authService, responsesService } = this.props;
        const { email, password, repeatedPassword, responseStatus} = this.state;

        const passwordMathced = authService.validatePassword(password, repeatedPassword);

        if (passwordMathced) {
            authService.signUp(email, password)
            .then(response => {
                console.log(response)
                console.log(response.statusText)
                this.setState({
                    responseStatus: response.status
                });
                responsesService.setResponseStatus(response.status);

                if (response.status === 200) {
                    this.setState({
                        email: "",
                        password: "",
                        repeatedPassword: "",
                        popUpPose: true
                    })
                } else {
                    this.setState({
                        popUpPose: true
                    })
                }
            })
            .catch(error => {
                console.log(error.response);
                this.setState({
                    responseMessage: error.response.message,
                    popUpPose: true
                });
                responsesService.setMessage(error.response.message);
            });
        } else {
            responsesService.setMessage("Passwords are different!");
        }
    }

    render() {
        const { email, password, repeatedPassword, responseMessage, responseStatus, popUpPose } = this.state;

        return (
            <div className="main-auth-wrapper">
                <ErrorPopUp message={responseMessage} pose={popUpPose ? "visible" : "hidden"}/>
                <div className="auth-wrapper">
                    <h1 className="auth-title">Sign up</h1>
                    <input className="auth-input" value={email}name="email" type="email" placeholder="email" onChange={this.inputHandleOnChange} />
                    <input className="auth-input" value={password}name="password" type="password" placeholder="password" onChange={this.inputHandleOnChange} />
                    <input className="auth-input" value={repeatedPassword}name="repeatedPassword" type="password" placeholder="repeated password" onChange={this.inputHandleOnChange} />
                    <button className="auth-confirmation" onClick={this.buttonHandleOnClick}>Sign up</button>
                </div>
            </div>
        )
    }
}