import React from "react";
import {Wrapper} from "./index.posed"
import "./ErrorPopUp.css"

interface IP_ErroPopUp {
    title?: string,
    message?: string,
    pose?: string
}

export const ErrorPopUp = ({message, pose}: IP_ErroPopUp) => {

    return (
        <Wrapper className="err-pop-up-wrapper" pose={pose}>
            <h2 className="err-pop-up-title">Error: </h2>
            <p className="err-pop-up-message">{message}</p>
        </Wrapper>
    )
} 