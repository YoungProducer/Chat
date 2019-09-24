import React from "react";
import {SignIn, SignUp, ErrorPopUp} from "./";
import {AuthService, ResponsesService} from "../../middleware";
import "./Auth.css";
import { inject, observer } from "mobx-react";

interface IP_Auth {
    responsesService?: ResponsesService
}

export const Auth = inject('responsesService')(observer((props: IP_Auth) => {
    return(
        <div >
            {/* <ErrorPopUp message={props.responsesService.responseMessage} pose="visible" /> */}
            <SignUp />
            {/* <SignIn /> */}
        </div>
    )
}))