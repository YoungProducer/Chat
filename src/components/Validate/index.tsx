import React from "react";
import axios from "axios";

interface IS_Validate {
    token: string
};

export class Validate extends React.Component<{}, IS_Validate> {
    constructor(props: {}) {
        super(props);

        this.state = {
            token: ""
        }
    }

    confirmaition = async (token: string) => {
        await axios.get("http://127.0.0.1:3000/validate", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            window.location.hash = "#/";
        })
        .catch(error => {
            console.log(error.response);
        })
    }

    getToken = (): string => {
        const url = decodeURI(window.location.hash);

        let token: string = url.split("").reverse().join("");
        token = token.slice(0, token.indexOf("/"));
        token = token.split("").reverse().join("");

        return token;
    }

    componentDidMount () {
        this.confirmaition(this.getToken());
    }

    render() {
        return(
            <p>Validation</p>
        )
    }
}