import React, {useEffect, useState} from "react";
import axios from "axios";
import { inject } from "mobx-react";
import { EmailService, TokenService } from "../../middleware";

interface IP_Validate {
    emailService?: EmailService,
    tokenService?: TokenService
}

interface IS_Validate {
    token?: string,
    alreadyVerified?: boolean
};

// @inject("emailService", "tokenService")
// export class Validate extends React.Component<IP_Validate, IS_Validate> {
//     constructor(props: {}) {
//         super(props);

//         this.state = {
//             token: "",
//             alreadyVerified: false
//         }
//     }

//     componentDidMount () {
//         const { emailService, tokenService } = this.props;

//         const userId = parseInt(window.location.hash.slice(window.location.hash.indexOf("?" + 7), window.location.hash.length));
//         const hash = window.location.hash.slice(0, window.location.hash.indexOf("?"));
//         const token = tokenService.getToken(hash);

//         emailService.confirmation(token, userId)
//         .then(response => {
//             console.log(response);
//             tokenService.deactivateToken(token, userId)
//             .then(response => {
//                 console.log(response);
//             })
//             .catch(error => {
//                 console.log(error.response);
//             });
//         })
//         .catch(error => {
//             console.log(error.response);
//         });
//     }

//     render() {
//         return(
//             <div>
//                 <p>Validation</p>
//             </div>
//         )
//     }
// }

export const Validate = inject("emailService", "tokenService")((props: IP_Validate) => {
    const [state, setState] = useState<IS_Validate>({
        token: "", 
        alreadyVerified: false
    });

    useEffect(() => {
        const { emailService, tokenService } = props;

        const userId = parseInt(window.location.hash.slice(window.location.hash.indexOf("?" + 7), window.location.hash.length));
        const hash = window.location.hash.slice(0, window.location.hash.indexOf("?"));
        const token = tokenService.getToken(hash);

        emailService.confirmation(token, userId)
        .then(response => {
            tokenService.deactivateToken(token, userId)
            .then(response => {
                window.setTimeout(() => {
                    window.location.hash = "#/signin";
                }, 1000);
            })
            .catch(error => {
                console.log(error.response)
                window.location.hash = "#/";
            });
        })
        .catch(error => {
            setState({
                alreadyVerified: true
            });
            console.log(error.response)
            window.location.hash = "#/";
        });
    }, []) 

    return (
        <div>
            <p>Validation</p>
            {state.alreadyVerified ? "Email is already verified" : null}
        </div>
    )
})