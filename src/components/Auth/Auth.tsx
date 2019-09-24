import React from "react";
import {SignIn, SignUp, ErrorPopUp} from "./index";
import {AuthService} from "../../middleware/index";
import "./Auth.css";

interface I_AuthProps {
}

export const Auth = (props: I_AuthProps) => {
    return (
        <div className="eclipse">
            <ErrorPopUp message="Email already exist!" pose="hidden" />
            <SignUp />
            {/* <SignIn /> */}
        </div>
    )
}