import posed from "react-pose";

export const Wrapper = posed.div({
    visible: {
        y: "-100%",
    },
    hidden: {
        y: "0%"
    }
})