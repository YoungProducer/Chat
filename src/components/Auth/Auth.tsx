import React, {useState} from "react";
import {SignIn, SignUp} from "./";
import {AuthService} from "../../middleware";
import "./Auth.css";
import { inject, observer } from "mobx-react";

interface IP_Auth {
}

export const Auth = (props: IP_Auth) => {
    const [type, setType] = useState("signUp");

    return(
        <div className="auth">
            {/* <ErrorPopUp message={props.responsesService.responseMessage} pose="visible" /> */}
            {
                type === "signUp" ? (
                    <SignUp/>
                ) : (
                    <SignIn/>
                )
            }
        </div>
    )
};