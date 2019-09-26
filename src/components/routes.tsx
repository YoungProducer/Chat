import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Auth } from "./Auth"

export class Routes extends React.Component<{}, {}> {
    

    render() {
        return(
            <HashRouter>
                <Switch>
                    <Route path="/" component={Auth} exact/>
                    <Route path="/validate/:token" children={<h1>Hello</h1>}/>
                </Switch>
            </HashRouter>
        )
    }
}