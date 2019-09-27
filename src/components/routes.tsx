import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Auth } from "./Auth"
import { SignIn, SignUp } from "./Auth"
import { Validate } from "./Validate"
import { inject } from "mobx-react";
import { AuthService } from "../middleware";

interface IP_Routes {
    authService?: AuthService
}

@inject('authService')
export class Routes extends React.Component<IP_Routes, {}> {
    //TODO: add navlinks in signUp and signIn components

    render() {
        const { authService } = this.props;

        return(
            <HashRouter>
                <Switch>
                    <Route path="/" exact>
                        {authService.isLoggedIn ? <h1>Home</h1> : <Redirect to="/signup" />}
                    </Route>
                    <Route path="/signup" component={SignUp} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/validate/:token" component={Validate} />
                </Switch>
            </HashRouter>
        )
    }
}