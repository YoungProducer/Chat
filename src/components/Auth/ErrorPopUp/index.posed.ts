import posed from "react-pose";

export const Wrapper = posed.div({
    visible: {
        y: "0%"
    },
    hidden: {
        y: "-110%"
    }
})