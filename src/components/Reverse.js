import React from "react";
import OutputText from "./OutputText";

const reverseString = (str) => {
    if (str === "")
        return "";
    else
        return reverseString(str.substr(1)) + str.charAt(0);
};

const Reverse = (props) => {
    return (
        <>
            <OutputText
                title="Reverse"
                value={reverseString(props.input)}
                name="reverse"
            />
        </>
    );
};

export default Reverse;
