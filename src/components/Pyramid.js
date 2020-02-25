import React from "react";
import OutputText from "./OutputText";

const pyramidify = (str) => {
    let pyramidString = "";
    if (str === "") {
        pyramidString = "";
        return "";
    } else {
        //for (let i = 0; i < str.length; i++) {
        for (let i = str.length - 1; i >= 0; i--) {
            if (str !== "") {
                pyramidString = pyramidString + str.slice(i) + "\n";
            }
        }
        return pyramidString;
    }
};

const Pyramid = (props) => {

    return (
        <>
            <OutputText
                title="Pyramid"
                value={pyramidify(props.input)}
                name="pyramid"
            />
        </>
    );
};

export default Pyramid;
