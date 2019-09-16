import React from "react";
import { observer } from "mobx-react";

interface I_SignInState {
    email: string,
    password: string,
}

interface I_SignInProps {
    signIn(email: string, password: string): void
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
            this.setState({email: value});
        }
        if (name === "password") {
            this.setState({password: value})
        }
    }

    render() {
        const { signIn } = this.props;
        const { email, password } = this.state;

        return(
            <div>
                <input type="email" placeholder="email" name="email" onChange={this.inputHandleOnChange} />
                <input type="password" placeholder="password" name="password" onChange={this.inputHandleOnChange} />
                <button onClick={() => signIn(email, password)}>SignUp</button>
            </div>
        )
    }
}