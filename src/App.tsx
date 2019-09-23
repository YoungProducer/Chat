import React from "react";
import { signUp, signIn } from "./middleware"
import { SignUp, SignIn } from "./components/Auth";
import axios from "axios"

export class App extends React.Component {
    componentDidMount() {
        axios.patch('http://lvh.me:3000/users/changeid', {
            id: "jopa",
            email: "sashabezrukovownmail@gmail.com"
        }, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IiIsIm5hbWUiOiJTYXNoYSBCZXpydWtvdiIsImlhdCI6MTU2OTIzNzQzMiwiZXhwIjoxNTY5NDUzNDMyfQ.NOEImmpjnVNJ33WKaaFLPWhsisaIWORLPF4lqtzw5wE"
            }
        })
        .then(response => console.log(response))
        .catch(error => console.log(error.response));
    }


    render() {
        return(
            <div>
                <h1>SignUp</h1>
                <SignUp signUp={signUp} />
                <h1>SignIn</h1>
                <SignIn signIn={signIn} />
            </div>
        )
    }
}