import React from "react";
import {Auth} from "./components/Auth"
import {AuthService} from "./middleware/index"

export class App extends React.Component {
    render() {
        return(
            <>
                {/* <h1>SignUp</h1>
                <SignUp signUp={signUp} />
                <h1>SignIn</h1>
                <SignIn signIn={signIn} /> */}
                <Auth />
            </>
        )
    }
}