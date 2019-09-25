import React from "react";
import { CSSTransition } from "react-transition-group";
import "./ErrorPopUp.css"

interface IP_ErrorPopUp {
    title?: string,
    message?: string,
    pose?: boolean
}

export const ErrorPopUp = ({message, pose}: IP_ErrorPopUp) => {

    return (
        <CSSTransition 
            className="err-pop-up-wrapper"
            classNames="err-pop-up-wrapper" 
            in={pose}
            timeout={200}
        >
            <div>
                {/* <h2 className="err-pop-up-title">Error: </h2> */}
                <p className="err-pop-up-message">{message}</p>
            </div>
        </CSSTransition>
    )
} 