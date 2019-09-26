import React from "react";

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

    componentDidMount() {
        let url = decodeURI(window.location.hash)

        url = url.split('').reverse().join('')
        url = url.slice(0, url.indexOf('/'))
        url = url.split('').reverse().join('')

        this.setState({
            token: url
        })
    }

    render() {
        return(
            <p>Validation</p>
        )
    }
}