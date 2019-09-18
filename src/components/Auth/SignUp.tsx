import React from "react";
import { observer } from "mobx-react";
import { Response } from "../../middleware"

interface I_SignUpState {
    email: string,
    password: string,
    repeatedPassword: string,
    response: Response
}

interface I_SignUpProps {
    signUp(email: string, password: string, passwordRepeat: string): Response
}

@observer
export class SignUp extends React.Component<I_SignUpProps, I_SignUpState> {

    constructor(props: I_SignUpProps) {
        super(props)

        this.state = {
            email: "",
            password: "",
            repeatedPassword: "",
            response: Response.DEFAULT
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

    buttonHandleOnClick = (email: string, password: string, repeatedPassword: string) => {
        const { signUp } = this.props;

        console.log(password === repeatedPassword)

        this.setState({
            response: signUp(email, password, repeatedPassword)
        })
    } 

    render() {
        const { buttonHandleOnClick } = this;
        const { email, password, repeatedPassword, response  } = this.state;

        console.log(this.state.response)

        return(
            <div>
                <p>Enter your email</p>
                <input type="email" placeholder="email" name="email" onChange={this.inputHandleOnChange} />
                <p>Enter password: (minimum 6 symbols)</p>
                {response === Response.DIFFERENT_PASSWORDS ? <p>Password are different</p> : null}
                <input type="password" placeholder="password" name="password" onChange={this.inputHandleOnChange} />
                <p>Repeat password</p>
                <input type="password" placeholder="password" name="repeatedPassword" onChange={this.inputHandleOnChange} />
                <button onClick={() => buttonHandleOnClick(email, password, repeatedPassword)}>SignUp</button>
            </div>
        )
    }
}