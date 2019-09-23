import React from "react";
import { observer } from "mobx-react";
import { E_ActionResponse, I_RequestResponse } from "../../middleware"

interface I_SignUpState {
    email: string,
    password: string,
    repeatedPassword: string,
    actionResponse: E_ActionResponse
}

interface I_SignUpProps {
    signUp(email: string, password: string, passwordRepeat: string): Promise<I_RequestResponse>
}

@observer
export class SignUp extends React.Component<I_SignUpProps, I_SignUpState> {

    constructor(props: I_SignUpProps) {
        super(props)

        this.state = {
            email: "",
            password: "",
            repeatedPassword: "",
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
        if (name === "repeatedPassword") {
            this.setState({repeatedPassword: value})
        }
    }

    buttonHandleOnClick = async (email: string, password: string, repeatedPassword: string) => {
        const { signUp } = this.props;

        await signUp(email, password, repeatedPassword)
        .then(response => {
            this.setState({actionResponse: response.actionResponse})
            console.log(response);
        })
        .catch(error => console.log(error));
    }

    render() {
        const { buttonHandleOnClick } = this;
        const { email, password, repeatedPassword, actionResponse  } = this.state;

        return(
            <div>
                {actionResponse === E_ActionResponse.EMAIL_ALREADY_EXIST ? <p>Email already exist</p> : null}
                <p>Enter your email</p>
                <input type="email" placeholder="email" name="email" onChange={this.inputHandleOnChange} />
                <p>Enter password: (minimum 6 symbols)</p>
                {actionResponse === E_ActionResponse.DIFFERENT_PASSWORDS ? <p>Password are different</p> : null}
                <input type="password" placeholder="password" name="password" onChange={this.inputHandleOnChange} />
                <p>Repeat password</p>
                <input type="password" placeholder="password" name="repeatedPassword" onChange={this.inputHandleOnChange} />
                <button onClick={() => buttonHandleOnClick(email, password, repeatedPassword)}>SignUp</button>
            </div>
        )
    }
}