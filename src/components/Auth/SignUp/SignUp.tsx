import React from "react";
import axios from "axios";
import {inject} from "mobx-react";
import {AuthService, I_AuthService} from "../../../middleware";
import {ErrorPopUp} from "../";
import "./SignUp.css";

export interface I_SignUpState {
    email: string,
    password: string,
    repeatedPassword: string,
    responseStatus: number,
    responseMessage: string,
    popUpPose?: boolean,
    wrapper: any
}

export interface I_SignUpProps {
    authService?: I_AuthService,
    callback?: any
}

// TODO: Include popup window into SignIn and SignUp render method
// It should slide from under them

@inject('authService')
export class SignUp extends React.Component<I_SignUpProps, I_SignUpState> {
    wrapper: HTMLDivElement;

    constructor(props: I_SignUpProps) {
        super(props);

        this.state = {
            email: "",
            password: "",
            repeatedPassword: "",
            responseStatus: -1,
            responseMessage: "",
            popUpPose: false,
            wrapper: ""
        }
    }

    universalizeWrapperHeight = (): void => {
        this.wrapper.style.height = 
            (this.wrapper.clientHeight + 6) % 2 === 0 
            ? (this.wrapper.clientHeight + 6).toString() + "px"
            : (this.wrapper.clientHeight + 6 + 1).toString() + "px";
    }

    componentDidMount() {
        this.universalizeWrapperHeight();
    }

    inputHandleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            popUpPose: false
        })

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
        const { email, password, repeatedPassword, responseStatus} = this.state

        const passwordMathced = authService.validatePassword(password, repeatedPassword);

        if (passwordMathced) {
            authService.signUp(email, password)
            .then(response => {
                this.setState({
                    responseStatus: response.status
                });

                if (response.status === 200) {
                    this.setState({
                        email: "",
                        password: "",
                        repeatedPassword: "",
                    })
                } 
            })
            .catch(error => {
                this.setState({
                    responseMessage: error.response.data.error.message,
                    popUpPose: true
                });
            });
        } else {
            this.setState({
                responseMessage: "Passwords are different",
                popUpPose: true
            })
        }
    }

    render() {
        const { callback } = this.props;
        const { email, password, repeatedPassword, responseMessage, responseStatus, popUpPose } = this.state;

        return (
            <div className="main-auth-wrapper" ref={node => this.wrapper = node}>
                <ErrorPopUp message={responseMessage} pose={popUpPose}/>
                <div className="auth-wrapper">
                    <h1 className="auth-title">Sign up</h1>
                    <p className="auth-input-title">Enter your email</p>
                    <input className="auth-input" value={email}name="email" type="email" placeholder="email" onChange={this.inputHandleOnChange} />
                    <p className="auth-input-title">Enter your password(min 8 symb.)</p>
                    <input className="auth-input" value={password}name="password" type="password" placeholder="password" onChange={this.inputHandleOnChange} />
                    <p className="auth-input-title">Repeat your password</p>
                    <input className="auth-input" value={repeatedPassword}name="repeatedPassword" type="password" placeholder="repeated password" onChange={this.inputHandleOnChange} />
                    <button className="auth-confirmation" onClick={this.buttonHandleOnClick}>Sign up</button>
                    <p className="auth-link-title">Have account? <span className="auth-link" onClick={() => callback("signIn")}>Sign in</span></p>
                </div>
            </div>
        )
    }
}