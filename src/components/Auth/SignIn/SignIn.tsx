import React from "react";
import {inject} from "mobx-react";
import {NavLink} from "react-router-dom";
import {ErrorPopUp} from "../";
import "./SignIn.css"
import { AuthService } from "../../../middleware";
import { Cookies } from "../../../utils/cookies";

export interface I_SignInState {
    email: string,
    password: string,
    popUpState: boolean,
    responseMessage: string,
    token: string
};

export interface I_SignInProps {
    authService?: AuthService,
    cookies?: Cookies
};




// setCookie("user_email","bobthegreat@gmail.com",30); //set "user_email" cookie, expires in 30 days
// var userEmail=getCookie("user_email");//"bobthegreat@gmail.com"

@inject("authService", "cookies")
export class SignIn extends React.Component<I_SignInProps, I_SignInState> {
    wrapper: HTMLDivElement;

    constructor(props: I_SignInProps) {
        super(props)

        this.state = {
            email: "",
            password: "",
            popUpState: false,
            responseMessage: "",
            token: ""
        }
    }

    universalizeWrapperHeight = (): void => {
        this.wrapper.style.height = 
            (this.wrapper.clientHeight) % 2 === 0 
            ? (this.wrapper.clientHeight).toString() + "px"
            : (this.wrapper.clientHeight + 1).toString() + "px";
    }

    componentDidMount() {
        this.universalizeWrapperHeight();
    }

    inputHandleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            popUpState: false
        })

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

    buttonHandleOnClick = () => {
        const {authService, cookies} = this.props;
        const {email, password} = this.state;

        

        authService.signIn(email, password)
        .then(response => {
            if (response.status === 200) {
                cookies.setCookie("logged_in", "true", 1 / 12000);
                authService.logIn();
                this.setState({
                    token: response.data.token,
                    email: "",
                    password: ""
                });
            };
            window.location.hash = "#/";
        })
        .catch(error => {
            this.setState({
                responseMessage: error.response.data.error.message,
                popUpState: true
            })
        })
    }  

    render() {
        const { popUpState, responseMessage, email, password } = this.state;

        return(
            <div className="main-auth-wrapper" ref={node => this.wrapper = node}>
                <ErrorPopUp message={responseMessage} pose={popUpState}/>
                <div className="auth-wrapper">
                    <h1 className="auth-title">Sign in</h1>
                    <p className="auth-input-title">Enter your email</p>
                    <input className="auth-input" value={email} type="email" name="email" placeholder="email" onChange={this.inputHandleOnChange}/>
                    <p className="auth-input-title">Enter your password</p>
                    <input className="auth-input" value={password} type="password" name="password" placeholder="password" onChange={this.inputHandleOnChange}/>
                    <button className="auth-confirmation" onClick={this.buttonHandleOnClick}>Sign in</button>
                    <p className="auth-link-title">Don't have account? <NavLink to="/signup"><span className="auth-link">Sign up</span></NavLink></p>
                </div>
            </div>
        )
    }
}