import React from "react";
import { observer } from "mobx-react";

interface I_SignUpState {
    email: string,
    password: string,
}

interface I_SignUpProps {
    signUp(email: string, password: string): void
}

@observer
export class SignUp extends React.Component<I_SignUpProps, I_SignUpState> {

    constructor(props: I_SignUpProps) {
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
        const { signUp } = this.props;
        const { email, password } = this.state;

        return(
            <div>
                <input type="email" placeholder="email" name="email" onChange={this.inputHandleOnChange} />
                <input type="password" placeholder="password" name="password" onChange={this.inputHandleOnChange} />
                <button onClick={() => signUp(email, password)}>SignUp</button>
            </div>
        )
    }
}