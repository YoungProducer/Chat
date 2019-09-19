import React from "react";
import {E_ActionResponse, I_RequestResponse} from "../../middleware"

interface I_SignInState {
    email: string,
    password: string,
    actionResponse: E_ActionResponse
}

interface I_SignInProps {
    signIn(email: string, password: string): Promise<I_RequestResponse>
}

export class SignIn extends React.Component<I_SignInProps, I_SignInState> {

    constructor(props: I_SignInProps) {
        super(props)

        this.state = {
            email: "",
            password: "",
            actionResponse: E_ActionResponse.DEFAULT
        }
    }

    inputHandleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        if (name === "email") {
            this.setState({email: value});
        }
        if (name === "password") {
            this.setState({password: value})
        }
    }

    buttonOnClickHandle = async (email: string, password: string) => {
        const {signIn} = this.props;

        await signIn(email, password)
        .then(response => {
            console.log(response)
            this.setState({actionResponse: response.actionResponse})
        })
        .catch(error => {
            console.log(error)
        });
    }

    render() {
        const {buttonOnClickHandle} = this;
        const { email, password, actionResponse } = this.state;

        return(
            <div>
                {actionResponse === E_ActionResponse.SUCCESS ? <p>Logged in</p> : null}
                <input type="email" placeholder="email" name="email" onChange={this.inputHandleOnChange} />
                <input type="password" placeholder="password" name="password" onChange={this.inputHandleOnChange} />
                <button onClick={() => buttonOnClickHandle(email, password)}>SignIn</button>
            </div>
        )
    }
}